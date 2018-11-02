package com.dukescript.demo.fifteen;

/*-
 * #%L
 * fifteen General Client Code - a library from the "DukeScript" project.
 * %%
 * Copyright (C) 2018 Dukehoff GmbH
 * %%
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * #L%
 */

import com.dukescript.demo.fifteen.js.PlatformServices;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import net.java.html.json.ComputedProperty;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.ModelOperation;
import net.java.html.json.Property;

@Model(className = "Game", instance = true, properties = {
    @Property(name = "tiles", type = Tile.class, array = true),
    @Property(name = "moves", type = int.class),
    @Property(name = "best", type = int.class),
    @Property(name = "solved", type = boolean.class),
    @Property(name = "cheatMode", type = boolean.class)
})
public class ViewModel {
    private PlatformServices services;

     @ModelOperation
    void initServices(Game model, PlatformServices services) {
        this.services = services;
    }
    
    @Function
    public void cheat(Game game) {
        game.setCheatMode(!game.isCheatMode());
    }

    @Function
    public void move(Game game, Tile data) {
        if (data.getP() == 0 || game.isSolved()) {
            return;
        }
        int x = data.getX();
        int y = data.getY();
        int x1 = game.getEmpty().getX();
        int y1 = game.getEmpty().getY();
        if ((Math.abs(x1 - x) == 1 && Math.abs(y1 - y) == 0)
                || (Math.abs(x1 - x) == 0 && Math.abs(y1 - y) == 1)) {
            data.setX(x1);
            data.setY(y1);
            game.getEmpty().setX(x);
            game.getEmpty().setY(y);
            game.setMoves(game.getMoves() + 1);
            if (finished(game.getTiles())) {
                if (game.getBest() == 0) {
                    game.setBest(game.getMoves());
                } else if (game.getMoves() < game.getBest()) {
                    game.setBest(game.getMoves());
                }
                game.setSolved(true);
            }
            services.setPreferences("fifteen", game.toString());
        }
    }

    @ComputedProperty
    public static Tile empty(List<Tile> tiles) {
        for (Tile tile : tiles) {
            if (tile.getP() == 0) {
                return tile;
            }
        }
        throw new IllegalArgumentException("This list doesn't contain an empty Tile");
    }

    @Function
    public void shuffle(Game game) {
        LinkedList<Integer> positions = new LinkedList<>();
        for (int i = 0; i < 16; i++) {
            positions.add(i);
        }
        Collections.shuffle(positions);
        if (game.isCheatMode()) {
            while (ViewModel.isSolveable(positions)) {
                Collections.shuffle(positions);
            }
        } else {
            while (!ViewModel.isSolveable(positions)) {
                Collections.shuffle(positions);
            }
        }

        List<Tile> tiles = game.getTiles();
        for (Tile tile : tiles) {
            for (int i = 0; i < positions.size(); i++) {
                final Integer pos = positions.get(i);
                if (tile.getP() == pos) {
                    tile.setX(i % 4);
                    tile.setY(i / 4);
                }
            }
        }
        game.setMoves(0);
        game.setSolved(false);
        services.setPreferences("game", game.toString());
    }

    @Model(className = "Tile", properties = {
        @Property(name = "x", type = int.class),
        @Property(name = "y", type = int.class),
        @Property(name = "p", type = int.class)
    })
    final static class TileModel {
        @ComputedProperty()
        public static int currentPosition(int x, int y) {
            return (y * 4) + x;
        }

    }

    public static boolean finished(List<Tile> tiles) {
        for (Tile tile : tiles) {
            if (tile.getP() != 0 && (tile.getP() - 1) != tile.getCurrentPosition()) {
                return false;
            }
        }
        return true;
    }

    public static boolean isSolveable(List<Integer> tiles) {
        int n1 = 0;
        int n2 = 0;
        int empty = 15;
        for (int i = 0; i < tiles.size(); i++) {
            Integer a = tiles.get(i);
            if (a != 0) {
                for (int j = i; j < tiles.size(); j++) {
                    Integer b = tiles.get(j);
                    if (b != 0 && a > b) {
                        n1 += 1;
                    }
                }
            } else {
                empty = i;
            }
        }
        n2 = 1 + empty / 4;
        return (n1 + n2) % 2 == 0;
    }
}
