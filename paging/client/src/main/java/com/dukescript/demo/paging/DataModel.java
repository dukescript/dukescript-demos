package com.dukescript.demo.paging;

/*-
 * #%L
 * DukeScript Paging Demo - a library from the "DukeScript" project.
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

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import net.java.html.json.ComputedProperty;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;

@Model(className = "Data", targetId = "", properties = {
    @Property(name = "list", type = String.class, array = true),
    @Property(name = "currentPageIndex", type = int.class),
    @Property(name = "pageLength", type = int.class)
})
final class DataModel {

    private static Data ui;

    @ComputedProperty
    public static int pageCount(int pageLength, List<String> list) {
        return list.size() / pageLength;
    }

    @ComputedProperty
    public static List<String> currentPage(int currentPageIndex, int pageLength, List<String> list) {
        int start = (currentPageIndex * pageLength) + 1;
        int end = start + pageLength;
        if (list.size() > start) {
            return new ArrayList<String>(list.subList(start, list.size() >= end ? end : list.size()));
        }
        return Collections.EMPTY_LIST;
    }
    
    @Function
    public static void gotoPage(Data model, int data){
        model.setCurrentPageIndex(data);
    }

    static void onPageLoad() throws Exception {
        ui = new Data();
        ui.setPageLength(20);
        ui.setCurrentPageIndex(0);
        Models.toRaw(ui);

        for (int i = 0; i < 1000; i++) {
            ui.getList().add("Item " + i);
        }
        ui.applyBindings();
    }
}
