package com.game.gameserver.enemy.walkdrone;

import com.game.gameserver.GameData;
import com.game.gameserver.astar.Node;
import com.game.gameserver.astar.pathfinder.PathfinderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.Collection;
import java.util.List;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.stream.Stream;

import static com.game.gameserver.astar.pathfinder.PathfinderService.TILE_SIZE;
import static com.game.gameserver.enemy.walkdrone.WalkDroneState.*;

@Service
@Slf4j
public class WalkDroneService {

    private final ScheduledExecutorService walkDroneExecutorService;
    private final GameData gameData;
    private final PathfinderService pathfinderService;

    public WalkDroneService(GameData gameData, PathfinderService pathfinderService) {
        this.gameData = gameData;
        this.pathfinderService = pathfinderService;
        this.walkDroneExecutorService = Executors.newScheduledThreadPool(1);
    }
    public Flux<Collection<WalkDroneDto>> getAll() {
        return Flux.fromStream(Stream.generate(this::getWalkDroneData))
                .log()
                .delayElements(Duration.ofMillis(10));
    }

    public void activateWalkDrones() {
        log.info("Activate Drones");
        gameData.getWalkDronesData().values().forEach(drone -> drone.setState(ACTIVATE.getStateName()));
        walkDroneExecutorService.schedule(this::startFollow, 5, TimeUnit.SECONDS);
    }

    private Collection<WalkDroneDto> getWalkDroneData() {
        return gameData.getWalkDronesData().values();
    }

    private void idle() {
        gameData.getWalkDronesData().values().forEach(drone -> drone.setState(IDLE.getStateName()));
        walkDroneExecutorService.schedule(this::startFollow, 5, TimeUnit.SECONDS);
    }
    private void startFollow() {
        log.info("Drones start to follow");
        gameData.getWalkDronesData().values().forEach(drone -> {
            gameData.getPlayersData().values().stream().findAny()
                    .ifPresent(player -> {
                        List<Node> path = pathfinderService.findPath(Node.of(drone.getRow(), drone.getCol()),
                                Node.of(Long.valueOf(player.getY() / TILE_SIZE).intValue(), Long.valueOf(player.getX() / TILE_SIZE).intValue() - 1));
                        ConcurrentLinkedQueue<Node> steps = new ConcurrentLinkedQueue<>(path);
                        gameData.getWalkDronesSteps().put(drone.getDroneName(), steps);
                    });
            drone.setState(MOVE.getStateName());
        });
    }

    @Scheduled(fixedRate = 1000)
    public void followPlayer() {
        var steps = gameData.getWalkDronesSteps();
        steps.keySet().forEach(droneName -> {
                    Queue<Node> stepList = steps.get(droneName);
                    Node step = stepList.poll();
                    if (step == null) {
                        return;
                    }

                    var drone = gameData.getWalkDronesData().get(droneName);
                    drone.setCol(step.getCol());
                    drone.setRow(step.getRow());
                    if (stepList.isEmpty()) {
                        drone.setState(ATTACK.getStateName());
                        walkDroneExecutorService.schedule(this::idle, 5, TimeUnit.SECONDS);
                    }
                }
        );
    }
}
