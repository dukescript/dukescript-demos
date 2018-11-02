package com.dukescript.demo.fifteen;

/*-
 * #%L
 * dukescript-demos - a library from the "DukeScript" project.
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
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.prefs.Preferences;
import net.java.html.BrwsrCtx;
import net.java.html.boot.BrowserBuilder;
import net.java.html.json.Models;

public final class Main {

    private Main() {
    }

    public static void main(String... args) throws Exception {
        BrowserBuilder.newBrowser().
                loadPage("pages/index.html").
                loadClass(Main.class).
                invoke("onPageLoad", args).
                showAndWait();
        System.exit(0);
    }

    /**
     * Called when the page is ready.
     */
    public static void onPageLoad(PlatformServices services) throws Exception {

        Game game = initGame();
        game.initServices(services);
        String test = services.getPreferences("fifteen");
        if (test != null && !test.isEmpty() && !test.equals("undefined")) {
            Logger.getLogger(Main.class.getName()).log(Level.INFO, "Test:" + test + "<");
            InputStream inputStream = new ByteArrayInputStream(test.getBytes());
            try {
                game.clone();
                game = Models.parse(BrwsrCtx.findDefault(Game.class), Game.class, inputStream);
            } catch (IOException ex) {
                Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
                game = initGame();
            }

        }
        Models.applyBindings(game, "game");
    }

    private static Game initGame() {
        Logger.getLogger(Main.class.getName()).log(Level.INFO, "init Game!");

        LinkedList<Integer> positions = new LinkedList<>();
        for (int i = 0; i < 16; i++) {
            positions.add(i);
        }
        Collections.shuffle(positions);
        while (!ViewModel.isSolveable(positions)) {
            Collections.shuffle(positions);
        }

        ArrayList<Tile> tiles = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                final Integer pos = positions.pop();
                final Tile tile = new Tile(i, j, pos);
                tiles.add(tile);
            }
        }
        return new Game(0, 0, false, false, tiles.toArray(new Tile[16]));
    }

    public static void onPageLoad() throws Exception {
        onPageLoad(new DesktopServices());
    }

    private static final class DesktopServices extends PlatformServices {

        @Override
        public String getPreferences(String key) {
            return Preferences.userNodeForPackage(Main.class).get(key, null);
        }

        @Override
        public void setPreferences(String key, String value) {
            Preferences.userNodeForPackage(Main.class).put(key, value);
        }
    }
}
