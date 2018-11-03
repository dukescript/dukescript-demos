package com.dukescript.demo.crud;

/*-
 * #%L
 * crud - a library from the "DukeScript" project.
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

import net.java.html.junit.BrowserRunner;
import net.java.html.junit.HTMLContent;
import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.runner.RunWith;
import com.dukescript.demo.crud.shared.Contact;

/** Tests for behavior of your application in real systems. The {@link BrowserRunner}
 * selects all possible presenters from your <code>pom.xml</code> and
 * runs the tests inside of them. By default there are two:
 * <ul>
 *   <li>JavaFX WebView presenter - verifies behavior in HotSpot JVM</li>
 *   <li>Bck2Brwsr presenter - runs the test in a pluginless browser</li>
 * </ul>
 *
 * See your <code>pom.xml</code> dependency section for details.
 */
@RunWith(BrowserRunner.class)
@HTMLContent(
    "<h3>Test in JavaFX WebView and pluginless Browser</h3>\n" +
    "<span data-bind='text: message'></span>\n" +
    "<ul data-bind='foreach: contacts'>\n" +
    "  <li>\n" +
    "    <span data-bind='text: fullName'></span>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "\n"
)
public class IntegrationTest {
    @Test public void testUIModelUI() {
        UI model = new UI();
        model.applyBindings();
        model.getContacts().clear();
        model.getContacts().add(new Contact("#1", "Toni", "Epple", null));
        model.getContacts().add(new Contact("#2", "Joe", "Hacker", null));
        model.getContacts().add(new Contact("#3", "Duke", "Script", null));

        assertEquals("Joe Hacker", model.getContacts().get(1).getFullName());
    }
}
