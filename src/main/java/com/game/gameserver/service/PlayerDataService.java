package com.game.gameserver.service;

import com.game.gameserver.GameData;
import com.game.gameserver.config.GameStreamConfig;
import com.game.gameserver.dto.PlayerData;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Collection;
import java.util.stream.Stream;

@Service
@Slf4j
@RequiredArgsConstructor
public class PlayerDataService {

    private final GameData gameData;
    private final GameStreamConfig gameStreamConfig;

    public Flux<Collection<PlayerData>> getAll() {
        return Flux.fromStream(Stream.generate(this::getPlayersData))
                .log()
                .delayElements(Duration.ofMillis(10));
    }

    private Collection<PlayerData> getPlayersData() {
        return gameData.getPlayersData().values();
    }

    public void addData(PlayerData pl) {
        gameData.getUpdateDate().put(pl.getPlayerName(), LocalDateTime.now());
        gameData.getPlayersData().put(pl.getPlayerName(), pl);
    }

    public void clearData() {
        gameData.getPlayersData().clear();
    }

    @Scheduled(fixedDelay = 300)
    public void checkPlayersUpdates() {
        for (String name : gameData.getUpdateDate().keySet()) {
            long secondsDiff = LocalDateTime.now().toEpochSecond(ZoneOffset.UTC) - gameData.getUpdateDate().get(name).toEpochSecond(ZoneOffset.UTC);
            if (secondsDiff > gameStreamConfig.getSecondsToDelete()) {
                gameData.getPlayersData().remove(name);
                gameData.getUpdateDate().remove(name);
                log.info(String.format("Remove user: %s", name));
            }
        }
    }
}
