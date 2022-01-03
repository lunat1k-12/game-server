package com.game.gameserver.service;

import com.game.gameserver.dto.PlayerData;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Stream;

@Service
public class PlayerDataService {

    private final ConcurrentHashMap<String, PlayerData> playersData = new ConcurrentHashMap<>();

    public Flux<Collection<PlayerData>> getAll() {
        return Flux.fromStream(Stream.generate(this::getPlayersData))
                .log()
                .delayElements(Duration.ofMillis(10));
    }

    private Collection<PlayerData> getPlayersData() {
        return playersData.values();
    }

    public void addData(PlayerData pl) {
        playersData.put(pl.getPlayerName(), pl);
    }

    public void clearData() {
        playersData.clear();
    }
}
