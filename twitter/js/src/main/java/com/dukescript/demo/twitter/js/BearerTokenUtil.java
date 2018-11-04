/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dukescript.demo.twitter.js;

/*-
 * #%L
 * twitter - a library from the "DukeScript" project.
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

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import net.java.html.js.JavaScriptBody;

/**
 *
 * @author antonepple
 */
public class BearerTokenUtil {

    private static String RESOURCE_URL = "https://api.twitter.com/oauth2/token";
    private static String CHARSET = "UTF-8";

    @JavaScriptBody(
            args = {"msg"},
            javacall = true,
            body = "return prompt(msg);\n"
    )
    public static native String askForBearerToken(String msg);
    
    public static String getBearerToken(String key, String secret) throws MalformedURLException, IOException {

        StringBuilder buffer = new StringBuilder();
        HttpURLConnection connection = (HttpURLConnection) new URL(RESOURCE_URL).openConnection();
        connection.setRequestMethod("POST");
        connection.setDoInput(true);
        connection.setDoOutput(true);
        String encodeCredentials = encodeCredentials(key, secret);
        connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        connection.setRequestProperty("Authorization", "Basic " + encodeCredentials);
        OutputStream outputStream = connection.getOutputStream();
        outputStream.write("grant_type=client_credentials".getBytes(CHARSET));
        BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));

        String read;
        while ((read = reader.readLine()) != null) {
            buffer.append(read);
        }
        String toString = buffer.toString();
        String token = toString.replace("{", "").replace("}","").split(",")[1].split(":")[1].replaceAll("\"","");
        return token;
    }
    
    public static String encodeCredentials(String key, String secret) throws UnsupportedEncodingException {
        String credentials = URLEncoder.encode(key, CHARSET)
                + ":"
                + URLEncoder.encode(secret, CHARSET);
        char[] encoded = Base64Coder.encode(credentials.getBytes());

        return String.valueOf(encoded);
    }

    
}
