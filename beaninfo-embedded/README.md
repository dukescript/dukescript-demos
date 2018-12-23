This is a demo of the [JavaFX FXBeanInfo API](https://dukescript.com/javadoc/javafx/).
The FXBeanInfo library allows you to provide information about properties and actions
of a JavaFX based Bean, similar to the classic [BeanInfo](https://docs.oracle.com/javase/8/docs/api/java/beans/BeanInfo.html) does for plain Java Beans.

In this demo, we use FXBeanInfo for binding a Java model to HTML in the same way we ususally do 
with [regular DukeScript @Model](https://dukescript.com/javadoc/html+java/1.5.1/index.html).


The purpose of this library is to simplify using DukeScript in JavaFX. Here's some more information
about the library:


- [Blog entry](https://dukescript.com/javadoc/html+java/1.5.1/index.html)
- [JavaDoc](https://dukescript.com/javadoc/javafx/)


In this demo we mix JavaFX and DukeScript based Views. The view contains a TabPane with two 
Tabs, one with plain JavaFX:

```java
 TabPane tabPane = new TabPane();
 Parent parent = FXMLLoader.load(getClass().getResource("/fxml/Scene.fxml"));
 tabPane.getTabs().add(new Tab("FXML", parent));
```

And another one with DukeScript:
```java
WebView webview = HTMLLoader.load(getClass().getResource("/html/view.html"), new HTMLController());
tabPane.getTabs().add(new Tab("HTML",webview));
```

To make it that simple we created a little helper class for loading the view
and binding it to the controller:

```java
public class HTMLLoader {   
    public static WebView load(URL html, final FXBeanInfo.Provider viewModel){
        WebView webView = new WebView();
        FXBrowsers.load(webView, html, new Runnable() {
            @Override
            public void run() {
                Models.applyBindings(viewModel);
            }
        });
        return webView;
    }   
}

```

The HTMLController looks like this:

```java
public class HTMLController implements FXBeanInfo.Provider {

    private final StringProperty labelText
            = new SimpleStringProperty(this, "labelText", "");
    
    public void buttonClick(){
        labelText.setValue("You clicked me!");
    }
    
    private final FXBeanInfo info = FXBeanInfo
            .newBuilder(this)
            .action("action", this::buttonClick)
            .property(labelText)
            .build();

    @Override
    public FXBeanInfo getFXBeanInfo() {
        return info;
    }
}
```



 

There's a related demo
using plain DukeScript with FXBeanInfo:

https://github.com/dukescript/dukescript-demos/tree/master/beaninfo-demo


