package com.game.gameserver.service;

import com.game.gameserver.GameStreamConfig;
import com.game.gameserver.dto.PlayerData;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Stream;

@Service
@Slf4j
public class PlayerDataService {

    private final ConcurrentHashMap<String, PlayerData> playersData = new ConcurrentHashMap<>();
    private final ConcurrentHashMap<String, LocalDateTime> updateDate = new ConcurrentHashMap<>();
    private final GameStreamConfig gameStreamConfig;

    public PlayerDataService(GameStreamConfig gameStreamConfig) {
        this.gameStreamConfig = gameStreamConfig;
    }

    public Flux<Collection<PlayerData>> getAll() {
        return Flux.fromStream(Stream.generate(this::getPlayersData))
                .log()
                .delayElements(Duration.ofMillis(10));
    }

    private Collection<PlayerData> getPlayersData() {
        return playersData.values();
    }

    public void addData(PlayerData pl) {
        updateDate.put(pl.getPlayerName(), LocalDateTime.now());
        playersData.put(pl.getPlayerName(), pl);
    }

    public void clearData() {
        playersData.clear();
    }

    @Scheduled(fixedDelay = 300)
    public void checkPlayersUpdates() {
        for (String name : updateDate.keySet()) {
            long secondsDiff = LocalDateTime.now().toEpochSecond(ZoneOffset.UTC) - updateDate.get(name).toEpochSecond(ZoneOffset.UTC);
            if (secondsDiff > gameStreamConfig.getSecondsToDelete()) {
                playersData.remove(name);
                updateDate.remove(name);
                log.info(String.format("Remove user: %s", name));
            }
        }
    }
}
