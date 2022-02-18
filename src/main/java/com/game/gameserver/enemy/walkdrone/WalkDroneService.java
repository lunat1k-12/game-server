package com.game.gameserver.enemy.walkdrone;

import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.Collection;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Stream;

@Service
public class WalkDroneService {

    private final ConcurrentHashMap<String, WalkDroneDto> walkDronesData = new ConcurrentHashMap<>();

    public Flux<Collection<WalkDroneDto>> getAll() {
        return Flux.fromStream(Stream.generate(this::getWalkDroneData))
                .log()
                .delayElements(Duration.ofMillis(10));
    }

    private Collection<WalkDroneDto> getWalkDroneData() {
        return walkDronesData.values();
    }
}
