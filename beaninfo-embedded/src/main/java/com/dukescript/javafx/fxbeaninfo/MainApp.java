package com.dukescript.javafx.fxbeaninfo;

/*-
 * #%L
 * DukeScript JavaFX Extensions - a library from the "DukeScript" project.
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

import com.teamdev.jxbrowser.chromium.BrowserCore;
import com.teamdev.jxbrowser.chromium.internal.Environment;
import javafx.application.Application;
import static javafx.application.Application.launch;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Tab;
import javafx.scene.control.TabPane;
import javafx.stage.Stage;

public class MainApp extends Application {

    @Override
    public void start(Stage stage) throws Exception {
        TabPane tabPane = new TabPane();
        Parent parent = FXMLLoader.load(getClass().getResource("/fxml/Scene.fxml"));
        tabPane.getTabs().add(new Tab("FXML", parent));

        Node webview = HTMLLoader.load(getClass().getResource("/html/view.html"), new HTMLController());
        tabPane.getTabs().add(new Tab("HTML",webview));

        Node webview2 = HTMLLoader.load(getClass().getResource("/html/todo.html"), new TodoListHTMLController());
        tabPane.getTabs().add(new Tab("Todo",webview2));

        Node webview3 = HTMLLoader.load(getClass().getResource("/html/index.html"), new I8HTMLController());
        tabPane.getTabs().add(new Tab("i8",webview3));

        Scene scene = new Scene(tabPane);
        scene.getStylesheets().add("/styles/Styles.css");

        stage.setTitle("JavaFX and DukeScript");
        stage.setScene(scene);
        stage.show();
    }
    
    @Override
    public void init() throws Exception {
        // On Mac OS X Chromium engine must be initialized in non-UI thread.
        if (Environment.isMac()) {
            BrowserCore.initialize();
        }
    }
    public static void main(String[] args) {
        launch(args);
    }
}
