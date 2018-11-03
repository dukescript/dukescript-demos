package com.dukescript.demo.crud.server;

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

import java.io.IOException;
import java.net.Inet4Address;
import java.net.InterfaceAddress;
import java.net.NetworkInterface;
import java.net.URI;
import java.util.Enumeration;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.jersey.grizzly2.httpserver.GrizzlyHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;

/** Starts REST server based on Jersey.
 */
final class Main implements ContainerResponseFilter {
    public static void main(String... args) throws Exception {
        ResourceConfig rc = new ResourceConfig(
            ContactsResource.class, Main.class
        );
        URI u = new URI("http://0.0.0.0:8080/");
        HttpServer server = GrizzlyHttpServerFactory.createHttpServer(u, rc);
        System.err.println("Server running on following IP addresses:");
        dumpIPs();
        System.err.println("Press Enter to shutdown the server");
        System.in.read();
        server.stop();
    }

    @Override
    public void filter(
        ContainerRequestContext requestContext, 
        ContainerResponseContext r
    ) throws IOException {
        r.getHeaders().add("Access-Control-Allow-Origin", "*");
        r.getHeaders().add("Access-Control-Allow-Credentials", "true");
        r.getHeaders().add("Access-Control-Allow-Headers", "Content-Type");
        r.getHeaders().add("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    }    
    
    private static void dumpIPs() throws Exception {
        Enumeration<NetworkInterface> en = NetworkInterface.getNetworkInterfaces();
        while (en.hasMoreElements()) {
            NetworkInterface n = en.nextElement();
            if (n.isUp()) {
                for (InterfaceAddress i : n.getInterfaceAddresses()) {
                    if (i.getAddress() instanceof Inet4Address) {
                        System.err.println(n.getName() + ": " + i.getAddress());
                    }
                }
            }
        }
    }
}
