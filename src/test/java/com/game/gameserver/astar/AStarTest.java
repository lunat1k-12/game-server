package com.game.gameserver.astar;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;

public class AStarTest {

    @Test
    public void aStarRoute_pathFound() {
        Node initialNode = new Node(2, 1);
        Node finalNode = new Node(2, 5);
        int rows = 6;
        int cols = 7;
        AStar aStar = new AStar(rows, cols, initialNode, finalNode);
        int[][] blocksArray = new int[][]{{1, 3}, {2, 3}, {3, 3}};
        aStar.setBlocks(blocksArray);
        List<Node> path = aStar.findPath();
        for (Node node : path) {
            System.out.println(node);
        }

        assertThat("Path is valid", List.of(Node.of(2, 1),
                Node.of(2,2),
                Node.of(1,2),
                Node.of(0,2),
                Node.of(0,3),
                Node.of(0,4),
                Node.of(1,4),
                Node.of(2,4),
                Node.of(2,5)).equals(path));
    }
}
