package com.dukescript.demo.fifteen.js;

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

import net.java.html.js.JavaScriptBody;

/** Use {@link JavaScriptBody} annotation on methods to
 * directly interact with JavaScript. See
 * http://bits.netbeans.org/html+java/1.3/net/java/html/js/package-summary.html
 * to understand how.
 */
public class PlatformServices {
    /**
     * Reads a value from a persistent storage.
     * @param key the identification for the value
     * @return the value or <code>null</code> if not found
     */
    public String getPreferences(String key) {
        return getPreferencesImpl(key);
    }

    /**
     * Puts a value into the persitent storage.
     * @param key the identification for the value
     * @param value the value to store
     */
    public void setPreferences(String key, String value) {
        setPreferencesImpl(key, value);
    }
    
    @JavaScriptBody(args = { "key" }, body =
        "if (!window.localStorage) return null;\n" +
        "return window.localStorage.getItem(key);\n"
    )
    private static native String getPreferencesImpl(String key);

    @JavaScriptBody(args = { "key", "value" }, body =
        "if (!window.localStorage) return;\n" +
        "window.localStorage.setItem(key, value);\n"
    )
    private static native void setPreferencesImpl(String key, String value);

}
