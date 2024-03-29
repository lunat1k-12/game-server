package com.game.gameserver.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@ConfigurationProperties(prefix = "game.stream")
public class GameStreamConfig {

    private long secondsToDelete;
}
