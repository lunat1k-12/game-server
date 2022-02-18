package com.game.gameserver.astar.pathfinder;

import com.game.gameserver.astar.AStar;
import com.game.gameserver.astar.Node;
import org.springframework.stereotype.Service;

import java.util.List;

// 20x12
@Service
public class PathfinderService {

    private final int TILE_SIZE = 32;

    public List<Node> findPath(Node initialNode, Node finalNode) {
        final AStar astar = new AStar(20, 16, initialNode, finalNode);
        return astar.findPath();
    }
}
