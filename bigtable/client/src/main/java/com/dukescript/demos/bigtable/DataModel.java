package com.dukescript.demos.bigtable;

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

import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;
import com.dukescript.demos.bigtable.js.BigTableBinding;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

@Model(className = "BigData", targetId = "", properties = {
    @Property(name = "values", type = Row.class, array = true),
    @Property(name = "maxEntries", type = int.class),
})
final class DataModel {

    private static BigData ui;
    private static Timer timer = new Timer();

    /**
     * Called when the page is ready.
     */
    static void onPageLoad() throws Exception {
        ui = new BigData();
        ui.setMaxEntries(10000);
        Models.toRaw(ui);
        BigTableBinding.init();
        ui.applyBindings();
        startTimer();
    }
    private static int generated=0;
    private static void startTimer() {
        final Random random = new Random();
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                List<Row> list = new ArrayList<>();
                for (int i = 100; i > 0; i--) {
                    list.add(new Row("aFirstName " + random.nextInt(), "aLastName"+ random.nextInt(), "aAddress" + random.nextInt(), generated++, "aEmail" + random.nextInt(), "aCity" + random.nextInt(), "aCountry" + random.nextInt()));
                }
                ui.getValues().addAll(0, list);
            }
        }, 0, 500);

    }

    @Model(className = "Row", properties = {
        @Property(name = "firstName", type = String.class, mutable = false),
        @Property(name = "lastName", type = String.class, mutable = false),
        @Property(name = "address", type = String.class, mutable = false),
        @Property(name = "number", type = int.class, mutable = false),
        @Property(name = "email", type = String.class, mutable = false),
        @Property(name = "city", type = String.class, mutable = false),
        @Property(name = "country", type = String.class, mutable = false),})
    public static class RowVMD {
    }
}
