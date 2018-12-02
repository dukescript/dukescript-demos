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
import com.dukescript.api.javafx.beans.FXBeanInfo;
import javafx.beans.property.ListProperty;
import javafx.beans.property.ObjectProperty;
import javafx.beans.property.Property;
import javafx.beans.property.SimpleListProperty;
import javafx.beans.property.SimpleObjectProperty;
import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;
import javafx.collections.FXCollections;
import javafx.event.Event;
import javafx.event.EventHandler;

/**
 *
 * @author antonepple
 */
public class TodoListHTMLController implements FXBeanInfo.Provider {

    final StringProperty input = new SimpleStringProperty(this, "input", "");
    final ObjectProperty<TodoElement> editing = new SimpleObjectProperty<>(this, "editing");
    final ListProperty<TodoElement> todos = new SimpleListProperty<>(this, "todos", FXCollections.observableArrayList());
    final Property<EventHandler<ActionDataEvent>> remove = new SimpleObjectProperty<>(this, "remove");
    final Property<EventHandler<ActionDataEvent>> edit = new SimpleObjectProperty<>(this, "edit");
    final Property<EventHandler<Event>> stopEditing = new SimpleObjectProperty<>(this, "stopEditing");
    final Property<EventHandler<Event>> add = new SimpleObjectProperty<>(this, "add");

    final FXBeanInfo info = FXBeanInfo.newBuilder(this).
            property(input).
            property(editing).
            property(todos).
            action(remove).
            action(add).
            action(edit).
            action(stopEditing).
            build();

    public TodoListHTMLController() {
        todos.add(new TodoElement("Buy milk!"));
        add.setValue(e -> todos.add(new TodoElement(input.get())));
        remove.setValue((event) -> {
            TodoElement toRemove = event.getSource(TodoElement.class);
            todos.get().remove(toRemove);
        }
        );
        edit.setValue((event)-> {
            TodoElement source = event.getSource(TodoElement.class);
            editing.setValue(source);
        });
        stopEditing.setValue(e -> editing.setValue(null) );
    }

    @Override
    public FXBeanInfo getFXBeanInfo() {
        return info;
    }

    static final class TodoElement implements FXBeanInfo.Provider {

        final StringProperty message = new SimpleStringProperty(this, "input", "");
        final FXBeanInfo info;

        TodoElement(String msg) {
            message.set(msg);
            this.info = FXBeanInfo.newBuilder(this).
                    property("message", message).
                    build();

        }

        @Override
        public FXBeanInfo getFXBeanInfo() {
            return info;
        }
    }
}
