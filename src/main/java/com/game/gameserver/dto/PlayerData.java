package com.game.gameserver.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class PlayerData {

    private String playerName;
    private Long x;
    private Long y;
    private String animation;
    private String sprite;
    private boolean flipX;
}
