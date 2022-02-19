package com.game.gameserver;

import com.game.gameserver.astar.Node;
import com.game.gameserver.dto.PlayerData;
import com.game.gameserver.enemy.walkdrone.WalkDroneDto;
import lombok.Value;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;

import static com.game.gameserver.enemy.walkdrone.WalkDroneAnim.IDLE_DIACTIVATED;
import static com.game.gameserver.enemy.walkdrone.WalkDroneState.IDLE_DIACTIVE;

@Component
@Value
public class GameData {

    ConcurrentHashMap<String, PlayerData> playersData = new ConcurrentHashMap<>();
    ConcurrentHashMap<String, LocalDateTime> updateDate = new ConcurrentHashMap<>();
    ConcurrentHashMap<String, WalkDroneDto> walkDronesData;
    ConcurrentHashMap<String, ConcurrentLinkedQueue<Node>> walkDronesSteps = new ConcurrentHashMap<>();

    public GameData() {
        this.walkDronesData = new ConcurrentHashMap<>();
        String drone1Name = UUID.randomUUID().toString();
        this.walkDronesData.put(drone1Name, WalkDroneDto.builder()
                .droneName(drone1Name)
                .row(4)
                .col(5)
                .anim(IDLE_DIACTIVATED.getAnim())
                .state(IDLE_DIACTIVE.getStateName())
                .build());
    }
}
