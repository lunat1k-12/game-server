package com.game.gameserver.enemy.walkdrone;

public enum WalkDroneState {

    IDLE_DIACTIVE("idle-diactive"),
    IDLE("idle"),
    ATTACK("attack"),
    MOVE("move"),
    ACTIVATE("activate"),
    DIACTIVATE("diactivate");

    WalkDroneState(String stateName) {
        this.stateName = stateName;
    }
    private String stateName;

    public String getStateName() {
        return stateName;
    }
}
