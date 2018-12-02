/*
 * The MIT License
 *
 * Copyright 2018 DukeHoff.
 *
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
 */
package com.dukescript.javafx.fxbeaninfo;

/*-
 * #%L
 * Embedding FXBeaninfo in JavaFX - a library from the "DukeScript" project.
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
import com.dukescript.api.javafx.beans.ActionDataEvent;
import static com.dukescript.javafx.fxbeaninfo.ActionDataEventHelper.getActionDataEvent;
import java.util.Map;
import javafx.beans.property.ListProperty;
import javafx.beans.property.StringProperty;
import javafx.beans.value.ObservableValue;
import javafx.event.Event;
import javafx.event.EventHandler;
import org.junit.Assert;
import org.junit.Test;

/**
 *
 * @author antonepple
 */
public class TodoListHTMLControllerTest {

    @Test
    public void testAdd() {
        TodoListHTMLController c = new TodoListHTMLController();
        Map<String, ObservableValue<?>> properties = c.getFXBeanInfo().getProperties();
        ListProperty<TodoListHTMLController.TodoElement> todos = (ListProperty<TodoListHTMLController.TodoElement>) properties.get("todos");
        Assert.assertEquals(1, todos.getSize());
        StringProperty input = (StringProperty) properties.get("input");
        input.setValue("Hallo");
        EventHandler<Event> add = (EventHandler<Event>) c.getFXBeanInfo().getActions().get("add").getValue();
        add.handle(null);
        Assert.assertEquals(2, todos.getSize());
        Assert.assertEquals("Hallo", todos.get(1).getFXBeanInfo().getProperties().get("message").getValue());
    }

    @Test
    public void testRemove() {
        TodoListHTMLController c = new TodoListHTMLController();
        Map<String, ObservableValue<?>> properties = c.getFXBeanInfo().getProperties();
        ListProperty<TodoListHTMLController.TodoElement> todos = (ListProperty<TodoListHTMLController.TodoElement>) properties.get("todos");
        Assert.assertEquals(1, todos.getSize());
        TodoListHTMLController.TodoElement todo = todos.get(0);
        EventHandler<ActionDataEvent> remove = (EventHandler<ActionDataEvent>) c.getFXBeanInfo().getActions().get("remove").getValue();
        remove.handle(ActionDataEventHelper.getActionDataEvent(todo));
        Assert.assertEquals(0, todos.getSize());
    }

}
