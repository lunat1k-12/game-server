package com.game.gameserver.enemy.walkdrone;

public enum WalkDroneAnim {
    WALK("walk"),
    IDLE("idle"),
    SHOOT("shoot"),
    IDLE_DIACTIVATED("idle-diactivated"),
    ACTIVATE("activate"),
    DIACTIVATE("diactivate"),
    DEATH("death");

    WalkDroneAnim(String anim) {
        this.anim = anim;
    }

    private String anim;

    public String getAnim() {
        return anim;
    }
}
