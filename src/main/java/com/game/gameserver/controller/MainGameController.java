package com.game.gameserver.controller;

import com.game.gameserver.dto.PlayerData;
import com.game.gameserver.service.PlayerDataService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import reactor.core.publisher.Flux;

import java.util.Collection;

@Slf4j
@Controller
@RequiredArgsConstructor
public class MainGameController {

    private final PlayerDataService playerDataService;

    @MessageMapping("players-movement")
    public Flux<Collection<PlayerData>> playersMovement() {
        return playerDataService.getAll();
    }

    @MessageMapping("record-data")
    public void recordMovement(PlayerData data) {
        playerDataService.addData(data);
    }

    @MessageMapping("clear-data")
    public void clearData() {
        playerDataService.clearData();
    }
}
