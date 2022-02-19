package com.game.gameserver.enemy.walkdrone;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class WalkDroneDto {

    private String droneName;
    private int posX;
    private int posY;
    private int row;
    private int col;
    private String anim;
    private String state;
    private boolean flipX;
}
