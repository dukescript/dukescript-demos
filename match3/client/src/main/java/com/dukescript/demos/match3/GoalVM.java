/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dukescript.demos.match3;

/*-
 * #%L
 * match3 - a library from the "DukeScript" project.
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

import java.util.List;
import net.java.html.json.ComputedProperty;
import net.java.html.json.Model;
import net.java.html.json.ModelOperation;
import net.java.html.json.Property;

/**
 *
 * @author antonepple
 */
@Model(className = "Goal", properties = {
    @Property(name = "type1", type = int.class),
    @Property(name = "type2", type = int.class),
    @Property(name = "type3", type = int.class),
    @Property(name = "num1", type = int.class),
    @Property(name = "num2", type = int.class),
    @Property(name = "num3", type = int.class),
    @Property(name = "deletedTiles", type = int.class, array = true)})
class GoalVM {
    
    @ComputedProperty
    public static boolean solved(List<Integer> deletedTiles, int type1, int type2, int type3, int num1, int num2, int num3) {
        return deletedTiles.get(type1) >= num1 && deletedTiles.get(type2) >= num2 && deletedTiles.get(type3) >= num3;
    }

    @ComputedProperty
    public static int toDelete1(List<Integer> deletedTiles, int type1, int num1) {
        return num1 - deletedTiles.get(type1) < 0 ? 0 : num1 - deletedTiles.get(type1);
    }

    @ComputedProperty
    public static int toDelete2(List<Integer> deletedTiles, int type2, int num2) {
        return num2 - deletedTiles.get(type2) < 0 ? 0 : num2 - deletedTiles.get(type2);
    }
    
    @ComputedProperty
    public static int toDelete3(List<Integer> deletedTiles, int type3, int num3) {
        return num3 - deletedTiles.get(type3) < 0 ? 0 : num3 - deletedTiles.get(type3);
    }
    
    @ModelOperation
    public static void delete(Goal goal, int type) {
        List<Integer> deletedTiles = goal.getDeletedTiles();
        deletedTiles.set(type, deletedTiles.get(type) + 1);
    }
   
}
