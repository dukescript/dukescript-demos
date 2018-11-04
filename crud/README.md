# CRUD Demo

This application demonstrates a couple of DukeScript features:

* Reuse of Entity classes on client and server
* Use of the [@OnReceive Annotation](http://bits.netbeans.org/html4j/1.5.1/net/java/html/json/OnReceive.html) for painless consumption of webservices. 
* Use of Enums Types in models
* Validation useing [@ComputedProperty](http://bits.netbeans.org/html4j/1.5.1/net/java/html/json/ComputedProperty.html)
* Styling using a CSS framework ([Pure.css](https://purecss.io/))

The application consists of a couple of modules:

* crud Shared Client Server Data Structures - the entities used on both sides
* crud General Client Code - client side business logic for consuming the webservices and binding the ui
* crud Client for Web - build configuration for deploying the client in browser
* crud Client for Android - deploy on Android
* crud Client for RoboVM - deploy on iOS
* crud Jersey based Server - Webservices
* crud JavaScript Libraries - "native" JavaScript stuff

## running the application

To run the application, you first have to start the server. In NetBeans you right-click it and
choose run from the context menu. From the commandline use this:

    > mvn exec:java

The project will start and you can now point your browser
to http://localhost:8080/contacts. You should see a json message. To stop the server simply
press the enter key in the console (or in NetBeans Output Window)

To start the client right-click "crud General Client Code" in Netbeans and choose run from the context
menu. Alternatively from the commandline use this command:

    > mvn exec:exec 

The client will automatically connect to the server and display the data. 

## Learning more

The code of this application is described in the [DukeScript Book](https://leanpub.com/dukescript).

This demo is also part of the [DukeScript Maven archetypes](https://github.com/dukescript/maven-archetypes)
project. If you would like to use it as a starting point for your own application,
you don't need to copy it from here and refactor. You can simply use the 
archetype to generate it with your chosen package name, platforms, etc..
