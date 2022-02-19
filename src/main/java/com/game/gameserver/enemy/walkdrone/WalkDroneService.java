package com.game.gameserver.enemy.walkdrone;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.Collection;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Stream;

import static com.game.gameserver.enemy.walkdrone.WalkDroneAnim.IDLE_DIACTIVATED;
import static com.game.gameserver.enemy.walkdrone.WalkDroneState.ACTIVATE;
import static com.game.gameserver.enemy.walkdrone.WalkDroneState.IDLE_DIACTIVE;

@Service
@Slf4j
public class WalkDroneService {

    private final ConcurrentHashMap<String, WalkDroneDto> walkDronesData;

    public WalkDroneService() {
        this.walkDronesData = new ConcurrentHashMap<>();
        String drone1Name = UUID.randomUUID().toString();
        this.walkDronesData.put(drone1Name, WalkDroneDto.builder()
                .droneName(drone1Name)
                .row(4)
                .col(5)
                .anim(IDLE_DIACTIVATED.getAnim())
                .state(IDLE_DIACTIVE.getStateName())
                .build());

        String drone2Name = UUID.randomUUID().toString();
        this.walkDronesData.put(drone2Name, WalkDroneDto.builder()
                .droneName(drone2Name)
                .row(5)
                .col(5)
                .anim(IDLE_DIACTIVATED.getAnim())
                .state(IDLE_DIACTIVE.getStateName())
                .build());

        String drone3Name = UUID.randomUUID().toString();
        this.walkDronesData.put(drone3Name, WalkDroneDto.builder()
                .droneName(drone3Name)
                .row(4)
                .col(7)
                .anim(IDLE_DIACTIVATED.getAnim())
                .state(IDLE_DIACTIVE.getStateName())
                .build());

        String drone4Name = UUID.randomUUID().toString();
        this.walkDronesData.put(drone4Name, WalkDroneDto.builder()
                .droneName(drone4Name)
                .row(5)
                .col(7)
                .anim(IDLE_DIACTIVATED.getAnim())
                .state(IDLE_DIACTIVE.getStateName())
                .build());
    }
    public Flux<Collection<WalkDroneDto>> getAll() {
        return Flux.fromStream(Stream.generate(this::getWalkDroneData))
                .log()
                .delayElements(Duration.ofMillis(10));
    }

    public void activateWalkDrones() {
        log.info("Activate Drones");
        walkDronesData.values().forEach(drone -> {
            drone.setState(ACTIVATE.getStateName());
        });
    }

    private Collection<WalkDroneDto> getWalkDroneData() {
        return walkDronesData.values();
    }
}
