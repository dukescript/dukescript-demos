bck2brwsr.register({
  'magic' : 'kaf\u010do'
}, function(exports) {
  var vm = {};
  function link(n, assign) {
    function replaceAll(s, o, n) {
      var pos = 0;
      for (;;) {
         var indx = s.indexOf(o, pos);
         if (indx === -1) {
           return s;
         }
         pos = indx + n.length;
         s = s.substring(0, indx) + n + s.substring(indx + o.length);
      }
    }
    return function() {
      var no_ = replaceAll(n, '_', '_1');
      var cls = replaceAll(no_, '/', '_');
      var dot = replaceAll(n, '/', '.');
      exports.loadClass(dot);
      assign(exports[cls]);
      return exports[cls](arguments);
    };
  };

  var invoker = {};
  function registerClass(vm, name, fn) {
    if (!vm[name]) vm[name] = fn;
    return vm[name];
  }
vm.java_lang_Object = link('java/lang/Object', function(f) { vm.java_lang_Object =  f; });
vm.java_lang_Class = link('java/lang/Class', function(f) { vm.java_lang_Class =  f; });
vm.java_lang_ArithmeticException = link('java/lang/ArithmeticException', function(f) { vm.java_lang_ArithmeticException =  f; });

function net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod() {
  var m;
  var CLS = net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$currentP = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$currentP'] = v; return this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$currentP']; };
  m = c._val$newClazz = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$newClazz'] = v; return this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$newClazz']; };
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1'] = v; return this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1']; };
    m = CLS.cons__VLnet_java_html_boot_BrowserBuilder$1OnPageLoad_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_Class_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1'] = lcA1;
lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$currentP'] = lcA2;
lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$newClazz'] = lcA3;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA1 = null;
var stA0 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = net_java_html_boot_BrowserBuilder(false))).access$000__Ljava_lang_Runnable_2Lnet_java_html_boot_BrowserBuilder_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1']['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0']);
if ((stA0) === null) { gt = 65; break IF; }
try {
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$currentP']);
var stA0 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = net_java_html_boot_BrowserBuilder(false))).access$000__Ljava_lang_Runnable_2Lnet_java_html_boot_BrowserBuilder_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1']['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0']);
invoker.run__V(stA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 46; break IF; }}
var stA0 = e;{ gt = 57; break IF; }
}
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ gt = 65; break IF; }
    }
    X_46: for (;;) { IF: if (gt <= 46) {
try {var lcA2 = stA0;
var lcA1 = lcA2;
} catch (e) {
var stA0 = e;{ gt = 57; break IF; }
}
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ gt = 65; break IF; }
    }
    X_57: for (;;) { IF: if (gt <= 57) {
var lcA3 = stA0;
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ var stA0 = lcA3; throw lcA3; }
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = net_java_html_boot_BrowserBuilder(false))).access$300__Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1']['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0']);
if ((stA0) === null) { gt = 309; break IF; }
var stA0 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = net_java_html_boot_BrowserBuilder(false))).access$400___3Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1']['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0']);
if (((stA0).length) != 0) { gt = 163; break IF; }
try {
var stA0 = lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$newClazz'];var stA1 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = net_java_html_boot_BrowserBuilder(false))).access$300__Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1']['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0']);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Class;', vm.java_lang_Class, 0);
var stA0 = invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2(stA0,stA1, stA2);
var lcA2 = stA0;
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$currentP']);
var stA0 = lcA2;var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stA2);
var lcA1 = null;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 142; break IF; }}
var stA0 = e;{ gt = 153; break IF; }
}
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ gt = 309; break IF; }
    }
    X_142: for (;;) { IF: if (gt <= 142) {
try {var lcA2 = stA0;
var lcA1 = lcA2;
} catch (e) {
var stA0 = e;{ gt = 153; break IF; }
}
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ gt = 163; break IF; }
    }
    X_153: for (;;) { IF: if (gt <= 153) {
try {var lcA4 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_153; }
}
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ var stA0 = lcA4; throw lcA4; }
    }
    X_163: for (;;) { IF: if (gt <= 163) {
try {
var stA0 = lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$newClazz'];var stA1 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = net_java_html_boot_BrowserBuilder(false))).access$300__Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1']['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0']);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Class;', vm.java_lang_Class, 1);
Array.at(stA2, 0, vm.java_lang_Class(false)['forName__Ljava_lang_Class_2Ljava_lang_String_2']('[Ljava/lang/String;'));
var stA0 = invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2(stA0,stA1, stA2);
var lcA2 = stA0;
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$currentP']);
var stA0 = lcA2;var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = net_java_html_boot_BrowserBuilder(false))).access$400___3Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1']['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0']);
Array.at(stA3, stI4, stA5);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stA2);
var lcA1 = null;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 231; break IF; }}
var stA0 = e;{ gt = 299; break IF; }
}
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ gt = 309; break IF; }
    }
    X_231: for (;;) { IF: if (gt <= 231) {
try {var lcA2 = stA0;
var stA0 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = net_java_html_boot_BrowserBuilder(false))).access$200__Ljava_util_logging_Logger_2();
var stA1 = (refs_java_util_logging_Level || (refs_java_util_logging_Level = vm.java_util_logging_Level(false)))['_SEVERE']();var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't call ");
var stA3 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = net_java_html_boot_BrowserBuilder(false))).access$300__Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1']['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0']);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," with args ");
var stA3 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = net_java_html_boot_BrowserBuilder(false))).access$400___3Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1']['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0']);
var stA3 = (refs_java_util_Arrays || (refs_java_util_Arrays = vm.java_util_Arrays(false)))['toString__Ljava_lang_String_2_3Ljava_lang_Object_2'](stA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,stA1, stA2, lcA2);
} catch (e) {
var stA0 = e;{ gt = 299; break IF; }
}
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ gt = 309; break IF; }
    }
    X_299: for (;;) { IF: if (gt <= 299) {
try {var lcA5 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_299; }
}
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ var stA0 = lcA5; throw lcA5; }
    }
    X_309: for (;;) { IF: if (gt <= 309) {

if ((lcA1) === null) { gt = 325; break IF; }
var stA0 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = net_java_html_boot_BrowserBuilder(false))).access$200__Ljava_util_logging_Logger_2();
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,(refs_java_util_logging_Level || (refs_java_util_logging_Level = vm.java_util_logging_Level(false)))['_SEVERE'](), "Can't initialize the view", lcA1);
    }
    X_325: for (;;) { IF: if (gt <= 325) {
return;

    }
}}}}}}}}}}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethodfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethodfillInstOf });
    net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethodfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/boot/BrowserBuilder$1OnPageLoad$1CallInitMethod';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_net_java_html_boot_BrowserBuilder;
    var refs_org_netbeans_html_boot_impl_FnContext;
    var refs_java_util_logging_Level;
    var refs_java_lang_StringBuilder;
    var refs_java_util_Arrays;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$currentP'] = null;
    this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$newClazz'] = null;
    this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod = net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod;

vm.java_lang_Runnable = link('java/lang/Runnable', function(f) { vm.java_lang_Runnable =  f; });
vm.java_util_Arrays = link('java/util/Arrays', function(f) { vm.java_util_Arrays =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.java_util_logging_Level = link('java/util/logging/Level', function(f) { vm.java_util_logging_Level =  f; });
vm.java_lang_Throwable = link('java/lang/Throwable', function(f) { vm.java_lang_Throwable =  f; });

function org_netbeans_html_boot_impl_FnContext() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnContext;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_DUMMY'] = null;
  m = c._DUMMY = function (v) {  if (arguments.length == 1) CLS['fld_DUMMY'] = v; return CLS['fld_DUMMY']; };
  m = c._prev = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnContext_prev'] = v; return this['fld_org_netbeans_html_boot_impl_FnContext_prev']; };
  m = c._current = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnContext_current'] = v; return this['fld_org_netbeans_html_boot_impl_FnContext_current']; };
  CLS['fld_CURRENT'] = null;
  m = c._CURRENT = function (v) {  if (arguments.length == 1) CLS['fld_CURRENT'] = v; return CLS['fld_CURRENT']; };
    m = c.isJavaScriptCapable__Ljava_net_URL_2Ljava_lang_ClassLoader_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_org_netbeans_html_boot_impl_JsClassLoader'] ? 1 : 0;
if ((stI0) == 0) { gt = 9; break IF; }
return null;
    }
    X_9: for (;;) { IF: if (gt <= 9) {

var stA0 = invoker.getResource__Ljava_net_URL_2Ljava_lang_String_2(lcA0,"META-INF/net.java.html.js.classes");
return stA0;

    }
}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.newLoader__Ljava_lang_ClassLoader_2Ljava_net_URL_2Lorg_netbeans_html_boot_impl_FindResources_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_ClassLoader_2 = function(lcA0, lcA1, lcA2, lcA3) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_io_StringWriter;
(refs_java_io_StringWriter || (refs_java_io_StringWriter = vm.java_io_StringWriter(false))).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
var stA0 = new vm.java_io_PrintWriter;
(refs_java_io_PrintWriter || (refs_java_io_PrintWriter = vm.java_io_PrintWriter(false))).constructor['cons__VLjava_io_Writer_2'].call(stA0, lcA4);
var lcA5 = stA0;
try {
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2']("org.netbeans.html.boot.impl.FnUtils");
var stA1 = "newLoader";var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Class;', vm.java_lang_Class, 3);
Array.at(stA2, 0, (refs_org_netbeans_html_boot_impl_FindResources || (refs_org_netbeans_html_boot_impl_FindResources = org_netbeans_html_boot_impl_FindResources(false))).constructor.$class);
Array.at(stA2, 1, (refs_org_netbeans_html_boot_spi_Fn$Presenter || (refs_org_netbeans_html_boot_spi_Fn$Presenter = org_netbeans_html_boot_spi_Fn$Presenter(false))).constructor.$class);
Array.at(stA2, 2, (refs_java_lang_ClassLoader || (refs_java_lang_ClassLoader = vm.java_lang_ClassLoader(false))).constructor.$class);
var stA0 = invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2(stA0,stA1, stA2);
var lcA7 = stA0;
var stA0 = lcA7;var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 3);
Array.at(stA2, 0, lcA1);
Array.at(stA2, 1, lcA2);
Array.at(stA2, 2, lcA3);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_java_lang_ClassLoader']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.ClassLoader');
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_LinkageError']) {var stA0 = e;{ gt = 77; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 86; break IF; }}
throw e;
}return stA0;
    }
    X_77: for (;;) { IF: if (gt <= 77) {
var lcA7 = stA0;
var lcA6 = lcA7;
{ gt = 92; break IF; }
    }
    X_86: for (;;) { IF: if (gt <= 86) {
var lcA7 = stA0;
var lcA6 = lcA7;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

invoker.println__VLjava_lang_String_2(lcA5,"When using @JavaScriptBody methods, one needs to either:");
invoker.println__VLjava_lang_String_2(lcA5," - include asm-5.0.jar on runtime classpath");
invoker.println__VLjava_lang_String_2(lcA5," - post process classes, see http://bits.netbeans.org/html+java/dev/net/java/html/js/package-summary.html#post-process");
var stA0 = invoker.append__Ljava_io_PrintWriter_2Ljava_lang_CharSequence_2(lcA5,"However following classes has not been processed from ");
invoker.println__VLjava_lang_Object_2(stA0,lcA0);
try {var stA0 = new vm.java_io_BufferedReader;
var stA1 = stA0;var stA2 = new vm.java_io_InputStreamReader;
var stA3 = stA2;var stA4 = invoker.openStream__Ljava_io_InputStream_2(lcA0);
(refs_java_io_InputStreamReader || (refs_java_io_InputStreamReader = vm.java_io_InputStreamReader(false))).constructor['cons__VLjava_io_InputStream_2'].call(stA3, stA4);
(refs_java_io_BufferedReader || (refs_java_io_BufferedReader = vm.java_io_BufferedReader(false))).constructor['cons__VLjava_io_Reader_2'].call(stA1, stA2);
var lcA7 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 182; break IF; }}
throw e;
}    }
    X_144: for (;;) { IF: if (gt <= 144) {
try {
var stA0 = invoker.readLine__Ljava_lang_String_2(lcA7);
var lcA8 = stA0;
if ((lcA8) !== null) { gt = 159; break IF; }
{ gt = 174; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 182; break IF; }}
throw e;
}    }
    X_159: for (;;) { IF: if (gt <= 159) {
try {
var stA0 = invoker.append__Ljava_io_PrintWriter_2Ljava_lang_CharSequence_2(lcA5,"  ");
invoker.println__VLjava_lang_String_2(stA0,lcA8);
{ gt = 0; continue X_144; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 182; break IF; }}
throw e;
}    }
    X_174: for (;;) { IF: if (gt <= 174) {
try {
invoker.close__V(lcA7);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 182; break IF; }}
throw e;
}{ gt = 202; break IF; }
    }
    X_182: for (;;) { IF: if (gt <= 182) {
var lcA7 = stA0;
var stA0 = invoker.append__Ljava_io_PrintWriter_2Ljava_lang_CharSequence_2(lcA5,"Cannot read ");
invoker.println__VLjava_lang_Object_2(stA0,lcA0);
invoker.printStackTrace__VLjava_io_PrintWriter_2(lcA7,lcA5);
    }
    X_202: for (;;) { IF: if (gt <= 202) {

invoker.println__VLjava_lang_String_2(lcA5,"Cannot initialize asm-5.0.jar!");
invoker.flush__V(lcA5);
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stA0 = (refs_java_util_logging_Logger || (refs_java_util_logging_Logger = vm.java_util_logging_Logger(false)))['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
var stA1 = (refs_java_util_logging_Level || (refs_java_util_logging_Level = vm.java_util_logging_Level(false)))['_SEVERE']();var stA2 = invoker.toString__Ljava_lang_String_2(lcA4);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,stA1, stA2, lcA6);
return null;

    }
}}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
lcA0['fld_org_netbeans_html_boot_impl_FnContext_current'] = lcA2;
lcA0['fld_org_netbeans_html_boot_impl_FnContext_prev'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.close__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_boot_impl_FnContext_prev']) === (lcA0)) { gt = 46; break IF; }
if (lcA0['fld_org_netbeans_html_boot_impl_FnContext_prev'] !== null && !lcA0['fld_org_netbeans_html_boot_impl_FnContext_prev']['$instOf_org_netbeans_html_boot_spi_Fn$Presenter']) vm.java_lang_Class(false).castEx(lcA0['fld_org_netbeans_html_boot_impl_FnContext_prev'], 'org.netbeans.html.boot.spi.Fn$Presenter');
var stA0 = c.currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(lcA0['fld_org_netbeans_html_boot_impl_FnContext_prev']);
lcA0['fld_org_netbeans_html_boot_impl_FnContext_prev'] = lcA0;
var stI0 = lcA0['fld_org_netbeans_html_boot_impl_FnContext_current'] != null && lcA0['fld_org_netbeans_html_boot_impl_FnContext_current']['$instOf_java_io_Flushable'] ? 1 : 0;
if ((stI0) == 0) { gt = 46; break IF; }
if (lcA0['fld_org_netbeans_html_boot_impl_FnContext_current'] !== null && !lcA0['fld_org_netbeans_html_boot_impl_FnContext_current']['$instOf_java_io_Flushable']) vm.java_lang_Class(false).castEx(lcA0['fld_org_netbeans_html_boot_impl_FnContext_current'], 'java.io.Flushable');
invoker.flush__V(lcA0['fld_org_netbeans_html_boot_impl_FnContext_current']);
    }
    X_46: for (;;) { IF: if (gt <= 46) {
return;

    }
}}
};
c['close__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c.currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(lcA0);
var lcA1 = stA0;
if ((lcA1) !== (lcA0)) { gt = 14; break IF; }
return c._DUMMY();
    }
    X_14: for (;;) { IF: if (gt <= 14) {
var stA0 = new org_netbeans_html_boot_impl_FnContext;
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA0, lcA1, lcA0);
return stA0;

    }
}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA0) {
var stA0 = invoker.get__Ljava_lang_Object_2(c._CURRENT());
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_boot_spi_Fn$Presenter']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.boot.spi.Fn$Presenter');
var lcA1 = stA0;
invoker.set__VLjava_lang_Object_2(c._CURRENT(),lcA0);
return lcA1;

};
    m.access = 9;
    m.cls = CLS;
    m = c.currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Z = function(lcI0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.get__Ljava_lang_Object_2(c._CURRENT());
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_boot_spi_Fn$Presenter']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.boot.spi.Fn$Presenter');
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 28; break IF; }
if ((lcI0) == 0) { gt = 28; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "No current WebView context around!");
{ var stA0 = stA0; throw stA0; }
    }
    X_28: for (;;) { IF: if (gt <= 28) {

return lcA1;

    }
}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new org_netbeans_html_boot_impl_FnContext;
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA0, null, null);
c._DUMMY(stA0);
c._DUMMY()['fld_org_netbeans_html_boot_impl_FnContext_prev'] = c._DUMMY();
var stA0 = new vm.java_lang_ThreadLocal;
(refs_java_lang_ThreadLocal || (refs_java_lang_ThreadLocal = vm.java_lang_ThreadLocal(false))).constructor['cons__V'].call(stA0);
c._CURRENT(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnContextfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnContext', { value : true });
      vm.java_io_Closeable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnContextfillInstOf });
    org_netbeans_html_boot_impl_FnContextfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnContext';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_io_Closeable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_io_StringWriter;
    var refs_java_io_PrintWriter;
    var refs_java_lang_Class;
    var refs_org_netbeans_html_boot_impl_FindResources;
    var refs_org_netbeans_html_boot_spi_Fn$Presenter;
    var refs_java_lang_ClassLoader;
    var refs_java_io_InputStreamReader;
    var refs_java_io_BufferedReader;
    var refs_java_util_logging_Logger;
    var refs_java_util_logging_Level;
    var refs_java_lang_Object;
    var refs_java_lang_IllegalStateException;
    var refs_java_lang_ThreadLocal;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_boot_impl_FnContext_prev'] = null;
    this['fld_org_netbeans_html_boot_impl_FnContext_current'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext;

vm.java_io_Closeable = link('java/io/Closeable', function(f) { vm.java_io_Closeable =  f; });
vm.java_lang_ThreadLocal = link('java/lang/ThreadLocal', function(f) { vm.java_lang_ThreadLocal =  f; });
vm.java_lang_IllegalStateException = link('java/lang/IllegalStateException', function(f) { vm.java_lang_IllegalStateException =  f; });
vm.java_util_logging_Logger = link('java/util/logging/Logger', function(f) { vm.java_util_logging_Logger =  f; });
vm.java_io_IOException = link('java/io/IOException', function(f) { vm.java_io_IOException =  f; });
vm.java_io_InputStreamReader = link('java/io/InputStreamReader', function(f) { vm.java_io_InputStreamReader =  f; });
vm.java_io_BufferedReader = link('java/io/BufferedReader', function(f) { vm.java_io_BufferedReader =  f; });
vm.java_lang_Exception = link('java/lang/Exception', function(f) { vm.java_lang_Exception =  f; });
vm.java_lang_LinkageError = link('java/lang/LinkageError', function(f) { vm.java_lang_LinkageError =  f; });
vm.java_lang_ClassLoader = link('java/lang/ClassLoader', function(f) { vm.java_lang_ClassLoader =  f; });

function org_netbeans_html_boot_spi_Fn$Presenter() {
  var m;
  var CLS = org_netbeans_html_boot_spi_Fn$Presenter;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(lcA1, lcA2) {
};
c['defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2'] = m;

    m.access = 1153;
    m.cls = CLS;
    m = c.displayPage__VLjava_net_URL_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
};
c['displayPage__VLjava_net_URL_2Ljava_lang_Runnable_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.loadScript__VLjava_io_Reader_2 = function(lcA1) {
};
c['loadScript__VLjava_io_Reader_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_spi_Fn$PresenterfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_spi_Fn$Presenter', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_spi_Fn$PresenterfillInstOf });
    org_netbeans_html_boot_spi_Fn$PresenterfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/spi/Fn$Presenter';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1537;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_spi_Fn$Presenter = registerClass(exports,'org_netbeans_html_boot_spi_Fn$Presenter',org_netbeans_html_boot_spi_Fn$Presenter);


function org_netbeans_html_boot_impl_FindResources() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FindResources;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.findResources__VLjava_lang_String_2Ljava_util_Collection_2Z = function(lcA1, lcA2, lcI3) {
};
    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FindResourcesfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FindResources', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FindResourcesfillInstOf });
    org_netbeans_html_boot_impl_FindResourcesfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FindResources';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1537;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_FindResources = org_netbeans_html_boot_impl_FindResources;

vm.java_io_PrintWriter = link('java/io/PrintWriter', function(f) { vm.java_io_PrintWriter =  f; });
vm.java_io_StringWriter = link('java/io/StringWriter', function(f) { vm.java_io_StringWriter =  f; });

function net_java_html_boot_BrowserBuilder() {
  var m;
  var CLS = net_java_html_boot_BrowserBuilder;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_LOG'] = null;
  m = c._LOG = function (v) {  if (arguments.length == 1) CLS['fld_LOG'] = v; return CLS['fld_LOG']; };
  m = c._resource = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder_resource'] = v; return this['fld_net_java_html_boot_BrowserBuilder_resource']; };
  m = c._clazz = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder_clazz'] = v; return this['fld_net_java_html_boot_BrowserBuilder_clazz']; };
  m = c._onLoad = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder_onLoad'] = v; return this['fld_net_java_html_boot_BrowserBuilder_onLoad']; };
  m = c._methodName = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder_methodName'] = v; return this['fld_net_java_html_boot_BrowserBuilder_methodName']; };
  m = c._methodArgs = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder_methodArgs'] = v; return this['fld_net_java_html_boot_BrowserBuilder_methodArgs']; };
  m = c._context = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder_context'] = v; return this['fld_net_java_html_boot_BrowserBuilder_context']; };
  m = c._loader = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder_loader'] = v; return this['fld_net_java_html_boot_BrowserBuilder_loader']; };
  m = c._locale = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder_locale'] = v; return this['fld_net_java_html_boot_BrowserBuilder_locale']; };
    m = CLS.cons__V_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
lcA0['fld_net_java_html_boot_BrowserBuilder_context'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.newBrowser__Lnet_java_html_boot_BrowserBuilder_2_3Ljava_lang_Object_2 = function(lcA0) {
var stA0 = new net_java_html_boot_BrowserBuilder;
c.constructor.cons__V_3Ljava_lang_Object_2.call(stA0, lcA0);
return stA0;

};
c['newBrowser__Lnet_java_html_boot_BrowserBuilder_2_3Ljava_lang_Object_2'] = m;

    m.access = 137;
    m.cls = CLS;
    m = c.loadClass__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_Class_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_net_java_html_boot_BrowserBuilder_clazz'] = lcA1;
return lcA0;

};
c['loadClass__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_Class_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadFinished__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_net_java_html_boot_BrowserBuilder_onLoad'] = lcA1;
return lcA0;

};
c['loadFinished__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_Runnable_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadPage__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_net_java_html_boot_BrowserBuilder_resource'] = lcA1;
return lcA0;

};
c['loadPage__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.locale__Lnet_java_html_boot_BrowserBuilder_2Ljava_util_Locale_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_net_java_html_boot_BrowserBuilder_locale'] = lcA1;
return lcA0;

};
c['locale__Lnet_java_html_boot_BrowserBuilder_2Ljava_util_Locale_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.invoke__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_net_java_html_boot_BrowserBuilder_methodName'] = lcA1;
lcA0['fld_net_java_html_boot_BrowserBuilder_methodArgs'] = lcA2;
return lcA0;

};
c['invoke__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2_3Ljava_lang_String_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = c.classloader__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_ClassLoader_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_net_java_html_boot_BrowserBuilder_loader'] = lcA1;
return lcA0;

};
c['classloader__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_ClassLoader_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.showAndWait__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_net_java_html_boot_BrowserBuilder_resource']) !== null) { gt = 17; break IF; }
var stA0 = new vm.java_lang_NullPointerException;
(refs_java_lang_NullPointerException || (refs_java_lang_NullPointerException = vm.java_lang_NullPointerException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "Need to specify resource via loadPage method");
{ var stA0 = stA0; throw stA0; }
    }
    X_17: for (;;) { IF: if (gt <= 17) {

if ((lcA0['fld_net_java_html_boot_BrowserBuilder_clazz']) === null) { gt = 32; break IF; }
var lcA1 = lcA0['fld_net_java_html_boot_BrowserBuilder_clazz'];
{ gt = 60; break IF; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {

if ((lcA0['fld_net_java_html_boot_BrowserBuilder_onLoad']) === null) { gt = 50; break IF; }
var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA0['fld_net_java_html_boot_BrowserBuilder_onLoad']);
var lcA1 = stA0;
{ gt = 60; break IF; }
    }
    X_50: for (;;) { IF: if (gt <= 50) {
var stA0 = new vm.java_lang_NullPointerException;
(refs_java_lang_NullPointerException || (refs_java_lang_NullPointerException = vm.java_lang_NullPointerException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "loadClass, neither loadFinished was called!");
{ var stA0 = stA0; throw stA0; }
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/io/IOException;', vm.java_io_IOException, 1);
Array.at(stA0, 0, null);
var lcA2 = stA0;
var stA0 = c.findLocalizedResourceURL__Ljava_net_URL_2Ljava_lang_String_2Ljava_util_Locale_2_3Ljava_io_IOException_2Ljava_lang_Class_2(lcA0['fld_net_java_html_boot_BrowserBuilder_resource'], lcA0['fld_net_java_html_boot_BrowserBuilder_locale'], lcA2, lcA1);
var lcA3 = stA0;
var lcA4 = null;
var lcA5 = lcA0['fld_net_java_html_boot_BrowserBuilder_context'];
var lcI6 = (lcA5).length;
var lcI7 = 0;
    }
    X_100: for (;;) { IF: if (gt <= 100) {

if ((lcI7) >= (lcI6)) { gt = 138; break IF; }
var lcA8 = (lcA5[lcI7] || Array.at(lcA5, lcI7));
var stI0 = lcA8 != null && lcA8['$instOf_org_netbeans_html_boot_spi_Fn$Presenter'] ? 1 : 0;
if ((stI0) == 0) { gt = 132; break IF; }
if (lcA8 !== null && !lcA8['$instOf_org_netbeans_html_boot_spi_Fn$Presenter']) vm.java_lang_Class(false).castEx(lcA8, 'org.netbeans.html.boot.spi.Fn$Presenter');
var lcA4 = lcA8;
{ gt = 138; break IF; }
    }
    X_132: for (;;) { IF: if (gt <= 132) {
lcI7++;
{ gt = 0; continue X_100; }
    }
    X_138: for (;;) { IF: if (gt <= 138) {

if ((lcA4) !== null) { gt = 193; break IF; }
if ((lcA0['fld_net_java_html_boot_BrowserBuilder_loader']) === null) { gt = 193; break IF; }
var stA0 = (refs_java_util_ServiceLoader || (refs_java_util_ServiceLoader = vm.java_util_ServiceLoader(false)))['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2Ljava_lang_ClassLoader_2']((refs_org_netbeans_html_boot_spi_Fn$Presenter || (refs_org_netbeans_html_boot_spi_Fn$Presenter = org_netbeans_html_boot_spi_Fn$Presenter(false))).constructor.$class, lcA0['fld_net_java_html_boot_BrowserBuilder_loader']);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_164: for (;;) { IF: if (gt <= 164) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 193; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_boot_spi_Fn$Presenter']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.boot.spi.Fn$Presenter');
var lcA6 = stA0;
var lcA4 = lcA6;
{ gt = 193; break IF; }
    }
    X_193: for (;;) { IF: if (gt <= 193) {

if ((lcA4) !== null) { gt = 237; break IF; }
var stA0 = (refs_java_util_ServiceLoader || (refs_java_util_ServiceLoader = vm.java_util_ServiceLoader(false)))['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2']((refs_org_netbeans_html_boot_spi_Fn$Presenter || (refs_org_netbeans_html_boot_spi_Fn$Presenter = org_netbeans_html_boot_spi_Fn$Presenter(false))).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_208: for (;;) { IF: if (gt <= 208) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 237; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_boot_spi_Fn$Presenter']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.boot.spi.Fn$Presenter');
var lcA6 = stA0;
var lcA4 = lcA6;
{ gt = 237; break IF; }
    }
    X_237: for (;;) { IF: if (gt <= 237) {

if ((lcA4) !== null) { gt = 252; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "Can't find any Fn.Presenter");
{ var stA0 = stA0; throw stA0; }
    }
    X_252: for (;;) { IF: if (gt <= 252) {

if ((lcA0['fld_net_java_html_boot_BrowserBuilder_loader']) === null) { gt = 322; break IF; }
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).isJavaScriptCapable__Ljava_net_URL_2Ljava_lang_ClassLoader_2(lcA0['fld_net_java_html_boot_BrowserBuilder_loader']);
var lcA6 = stA0;
if ((lcA6) === null) { gt = 313; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Loader ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA0['fld_net_java_html_boot_BrowserBuilder_loader']);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," cannot resolve @JavaScriptBody, because of ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA6);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_313: for (;;) { IF: if (gt <= 313) {

var lcA5 = lcA0['fld_net_java_html_boot_BrowserBuilder_loader'];
{ gt = 391; break IF; }
    }
    X_322: for (;;) { IF: if (gt <= 322) {

var stA0 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(lcA1);
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).isJavaScriptCapable__Ljava_net_URL_2Ljava_lang_ClassLoader_2(stA0);
var lcA6 = stA0;
if ((lcA6) !== null) { gt = 345; break IF; }
var stA0 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(lcA1);
var lcA5 = stA0;
{ gt = 391; break IF; }
    }
    X_345: for (;;) { IF: if (gt <= 345) {
var stA0 = new net_java_html_boot_BrowserBuilder$FImpl;
var stA1 = stA0;var stA2 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(lcA1);
(refs_net_java_html_boot_BrowserBuilder$FImpl || (refs_net_java_html_boot_BrowserBuilder$FImpl = net_java_html_boot_BrowserBuilder$FImpl(false))).constructor.cons__VLjava_lang_ClassLoader_2.call(stA1, stA2);
var lcA7 = stA0;
var stA0 = lcA6;var stA1 = lcA7;var stA2 = lcA4;var stA3 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(lcA1);
var stA3 = invoker.getParent__Ljava_lang_ClassLoader_2(stA3);
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).newLoader__Ljava_lang_ClassLoader_2Ljava_net_URL_2Lorg_netbeans_html_boot_impl_FindResources_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_ClassLoader_2(stA0, stA1, stA2, stA3);
var lcA5 = stA0;
if ((lcA5) !== null) { gt = 391; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "Cannot find asm-5.0.jar classes!");
{ var stA0 = stA0; throw stA0; }
    }
    X_391: for (;;) { IF: if (gt <= 391) {

var lcA6 = lcA4;
var stA0 = lcA4;var stA1 = lcA3;var stA2 = new net_java_html_boot_BrowserBuilder$1OnPageLoad;
(refs_net_java_html_boot_BrowserBuilder$1OnPageLoad || (refs_net_java_html_boot_BrowserBuilder$1OnPageLoad = net_java_html_boot_BrowserBuilder$1OnPageLoad(false))).constructor.cons__VLnet_java_html_boot_BrowserBuilder_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_ClassLoader_2Ljava_lang_Class_2.call(stA2, lcA0, lcA6, lcA5, lcA1);
invoker.displayPage__VLjava_net_URL_2Ljava_lang_Runnable_2(stA0,stA1, stA2);
return;

    }
}}}}}}}}}}}}}}}}}
};
c['showAndWait__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.findResourceURL__Ljava_net_URL_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_io_IOException_2Ljava_lang_Class_2 = function(lcA0, lcA1, lcA2, lcA3) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) === null) { gt = 74; break IF; }
var stI0 = invoker.lastIndexOf__II(lcA0,(46));
var lcI4 = stI0;
if ((lcI4) == (-1)) { gt = 55; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA1 = invoker.substring__Ljava_lang_String_2II(lcA0,0, lcI4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA1 = invoker.substring__Ljava_lang_String_2I(lcA0,lcI4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA0 = stA0;
{ gt = 74; break IF; }
    }
    X_55: for (;;) { IF: if (gt <= 55) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA0 = stA0;
    }
    X_74: for (;;) { IF: if (gt <= 74) {

var lcA4 = null;
try {
var stA0 = (refs_java_lang_System || (refs_java_lang_System = vm.java_lang_System(false)))['getProperty__Ljava_lang_String_2Ljava_lang_String_2']("browser.rootdir");
var lcA5 = stA0;
if ((lcA5) === null) { gt = 119; break IF; }
var stA0 = new vm.java_io_File;
(refs_java_io_File || (refs_java_io_File = vm.java_io_File(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2'].call(stA0, lcA5, lcA0);
var stA0 = invoker.toURI__Ljava_net_URI_2(stA0);
var stA0 = invoker.toURL__Ljava_net_URL_2(stA0);
var lcA6 = stA0;
var stI0 = c.isReal__ZLjava_net_URL_2(lcA6);
if ((stI0) == 0) { gt = 119; break IF; }
var lcA4 = lcA6;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_net_MalformedURLException']) {var stA0 = e;{ gt = 148; break IF; }}
throw e;
}    }
    X_119: for (;;) { IF: if (gt <= 119) {
try {var stA0 = new vm.java_net_URL;
(refs_java_net_URL || (refs_java_net_URL = vm.java_net_URL(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, lcA0);
var lcA6 = stA0;
if ((lcA1) === null) { gt = 141; break IF; }
var stI0 = c.isReal__ZLjava_net_URL_2(lcA6);
if ((stI0) == 0) { gt = 145; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_net_MalformedURLException']) {var stA0 = e;{ gt = 148; break IF; }}
throw e;
}    }
    X_141: for (;;) { IF: if (gt <= 141) {
try {
var lcA4 = lcA6;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_net_MalformedURLException']) {var stA0 = e;{ gt = 148; break IF; }}
throw e;
}    }
    X_145: for (;;) { IF: if (gt <= 145) {
try {
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_net_MalformedURLException']) {var stA0 = e;{ gt = 148; break IF; }}
throw e;
}return lcA4;
    }
    X_148: for (;;) { IF: if (gt <= 148) {
var lcA5 = stA0;
Array.at(lcA2, 0, lcA5);
if ((lcA4) !== null) { gt = 167; break IF; }
var stA0 = invoker.getResource__Ljava_net_URL_2Ljava_lang_String_2(lcA3,lcA0);
var lcA4 = stA0;
    }
    X_167: for (;;) { IF: if (gt <= 167) {

if ((lcA4) !== null) { gt = 244; break IF; }
var stA0 = invoker.getProtectionDomain__Ljava_security_ProtectionDomain_2(lcA3);
var lcA5 = stA0;
if ((lcA5) === null) { gt = 244; break IF; }
var stA0 = invoker.getCodeSource__Ljava_security_CodeSource_2(lcA5);
if ((stA0) === null) { gt = 244; break IF; }
var stA0 = invoker.getCodeSource__Ljava_security_CodeSource_2(lcA5);
var stA0 = invoker.getLocation__Ljava_net_URL_2(stA0);
var lcA6 = stA0;
try {var stA0 = new vm.java_net_URL;
(refs_java_net_URL || (refs_java_net_URL = vm.java_net_URL(false))).constructor['cons__VLjava_net_URL_2Ljava_lang_String_2'].call(stA0, lcA6, lcA0);
var lcA7 = stA0;
var stI0 = c.isReal__ZLjava_net_URL_2(lcA7);
if ((stI0) == 0) { gt = 225; break IF; }
var lcA4 = lcA7;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_net_MalformedURLException']) {var stA0 = e;{ gt = 228; break IF; }}
throw e;
}    }
    X_225: for (;;) { IF: if (gt <= 225) {
{ gt = 244; break IF; }
    }
    X_228: for (;;) { IF: if (gt <= 228) {
var lcA7 = stA0;
var stA0 = invoker.initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(lcA7,(lcA2[0] || Array.at(lcA2, 0)));
Array.at(lcA2, 0, lcA7);
    }
    X_244: for (;;) { IF: if (gt <= 244) {

if ((lcA4) !== null) { gt = 384; break IF; }
var stA0 = invoker.getResource__Ljava_net_URL_2Ljava_lang_String_2(c.constructor.$class,"html4j.txt");
var lcA5 = stA0;
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(c._LOG(),(refs_java_util_logging_Level || (refs_java_util_logging_Level = vm.java_util_logging_Level(false)))['_FINE'](), "Found html4j {0}", lcA5);
if ((lcA5) === null) { gt = 384; break IF; }
try {
var stA0 = invoker.openConnection__Ljava_net_URLConnection_2(lcA5);
var lcA6 = stA0;
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(c._LOG(),(refs_java_util_logging_Level || (refs_java_util_logging_Level = vm.java_util_logging_Level(false)))['_FINE'](), "testing : {0}", lcA6);
var stI0 = lcA6 != null && lcA6['$instOf_java_net_JarURLConnection'] ? 1 : 0;
if ((stI0) == 0) { gt = 374; break IF; }
if (lcA6 !== null && !lcA6['$instOf_java_net_JarURLConnection']) vm.java_lang_Class(false).castEx(lcA6, 'java.net.JarURLConnection');
var lcA7 = lcA6;
var stA0 = invoker.getJarFileURL__Ljava_net_URL_2(lcA7);
var lcA8 = stA0;
var lcI9 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 377; break IF; }}
throw e;
}    }
    X_321: for (;;) { IF: if (gt <= 321) {
try {
if ((lcI9) >= ((50))) { gt = 374; break IF; }
var stA0 = new vm.java_net_URL;
(refs_java_net_URL || (refs_java_net_URL = vm.java_net_URL(false))).constructor['cons__VLjava_net_URL_2Ljava_lang_String_2'].call(stA0, lcA8, lcA0);
var lcA10 = stA0;
var stI0 = c.isReal__ZLjava_net_URL_2(lcA10);
if ((stI0) == 0) { gt = 355; break IF; }
var lcA4 = lcA10;
{ gt = 374; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 377; break IF; }}
throw e;
}    }
    X_355: for (;;) { IF: if (gt <= 355) {
try {var stA0 = new vm.java_net_URL;
(refs_java_net_URL || (refs_java_net_URL = vm.java_net_URL(false))).constructor['cons__VLjava_net_URL_2Ljava_lang_String_2'].call(stA0, lcA8, "..");
var lcA8 = stA0;
lcI9++;
{ gt = 0; continue X_321; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 377; break IF; }}
throw e;
}    }
    X_374: for (;;) { IF: if (gt <= 374) {
{ gt = 384; break IF; }
    }
    X_377: for (;;) { IF: if (gt <= 377) {
var lcA6 = stA0;
Array.at(lcA2, 0, lcA6);
    }
    X_384: for (;;) { IF: if (gt <= 384) {

return lcA4;

    }
}}}}}}}}}}}}}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.findLocalizedResourceURL__Ljava_net_URL_2Ljava_lang_String_2Ljava_util_Locale_2_3Ljava_io_IOException_2Ljava_lang_Class_2 = function(lcA0, lcA1, lcA2, lcA3) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA4 = null;
if ((lcA1) === null) { gt = 87; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"_");
var stA2 = invoker.getLanguage__Ljava_lang_String_2(lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"_");
var stA2 = invoker.getCountry__Ljava_lang_String_2(lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = c.findResourceURL__Ljava_net_URL_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_io_IOException_2Ljava_lang_Class_2(stA0, stA1, lcA2, lcA3);
var lcA4 = stA0;
if ((lcA4) === null) { gt = 57; break IF; }
return lcA4;
    }
    X_57: for (;;) { IF: if (gt <= 57) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"_");
var stA2 = invoker.getLanguage__Ljava_lang_String_2(lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = c.findResourceURL__Ljava_net_URL_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_io_IOException_2Ljava_lang_Class_2(stA0, stA1, lcA2, lcA3);
var lcA4 = stA0;
    }
    X_87: for (;;) { IF: if (gt <= 87) {

if ((lcA4) === null) { gt = 95; break IF; }
return lcA4;
    }
    X_95: for (;;) { IF: if (gt <= 95) {

var stA0 = c.findResourceURL__Ljava_net_URL_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_io_IOException_2Ljava_lang_Class_2(lcA0, null, lcA2, lcA3);
return stA0;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.isReal__ZLjava_net_URL_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = invoker.openConnection__Ljava_net_URLConnection_2(lcA0);
var lcA1 = stA0;
var stI0 = lcA1 != null && lcA1['$instOf_java_net_HttpURLConnection'] ? 1 : 0;
if ((stI0) == 0) { gt = 64; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_net_HttpURLConnection']) vm.java_lang_Class(false).castEx(lcA1, 'java.net.HttpURLConnection');
var lcA2 = lcA1;
invoker.setReadTimeout__VI(lcA2,(5000));
var stI0 = invoker.getResponseCode__I(lcA2);
if ((stI0) < ((300))) { gt = 64; break IF; }
var stA0 = new vm.java_io_IOException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Wrong code: ");
var stI3 = invoker.getResponseCode__I(lcA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,stI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_io_IOException || (refs_java_io_IOException = vm.java_io_IOException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 87; break IF; }}
throw e;
}    }
    X_64: for (;;) { IF: if (gt <= 64) {
try {
var stA0 = invoker.getInputStream__Ljava_io_InputStream_2(lcA1);
var lcA2 = stA0;
invoker.close__V(lcA2);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(c._LOG(),(refs_java_util_logging_Level || (refs_java_util_logging_Level = vm.java_util_logging_Level(false)))['_FINE'](), "found real url: {0}", lcA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 87; break IF; }}
throw e;
}return 1;
    }
    X_87: for (;;) { IF: if (gt <= 87) {
var lcA1 = stA0;
var stA0 = c._LOG();var stA1 = (refs_java_util_logging_Level || (refs_java_util_logging_Level = vm.java_util_logging_Level(false)))['_FINE']();var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Cannot open ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA0);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,stA1, stA2, lcA1);
return 0;

    }
}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.access$000__Ljava_lang_Runnable_2Lnet_java_html_boot_BrowserBuilder_2 = function(lcA0) {
return lcA0['fld_net_java_html_boot_BrowserBuilder_onLoad'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100___3Ljava_lang_Object_2Lnet_java_html_boot_BrowserBuilder_2 = function(lcA0) {
return lcA0['fld_net_java_html_boot_BrowserBuilder_context'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Ljava_util_logging_Logger_2 = function() {
return c._LOG();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$300__Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2 = function(lcA0) {
return lcA0['fld_net_java_html_boot_BrowserBuilder_methodName'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$400___3Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2 = function(lcA0) {
return lcA0['fld_net_java_html_boot_BrowserBuilder_methodArgs'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stA0 = (refs_java_util_logging_Logger || (refs_java_util_logging_Logger = vm.java_util_logging_Logger(false)))['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
c._LOG(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_boot_BrowserBuilderfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_boot_BrowserBuilder', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_boot_BrowserBuilderfillInstOf });
    net_java_html_boot_BrowserBuilderfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/boot/BrowserBuilder';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_Object;
    var refs_java_lang_NullPointerException;
    var refs_org_netbeans_html_boot_spi_Fn$Presenter;
    var refs_java_util_ServiceLoader;
    var refs_java_lang_IllegalStateException;
    var refs_org_netbeans_html_boot_impl_FnContext;
    var refs_java_lang_StringBuilder;
    var refs_net_java_html_boot_BrowserBuilder$FImpl;
    var refs_net_java_html_boot_BrowserBuilder$1OnPageLoad;
    var refs_java_lang_System;
    var refs_java_io_File;
    var refs_java_net_URL;
    var refs_java_util_logging_Level;
    var refs_java_io_IOException;
    var refs_java_util_logging_Logger;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_net_java_html_boot_BrowserBuilder_resource'] = null;
    this['fld_net_java_html_boot_BrowserBuilder_clazz'] = null;
    this['fld_net_java_html_boot_BrowserBuilder_onLoad'] = null;
    this['fld_net_java_html_boot_BrowserBuilder_methodName'] = null;
    this['fld_net_java_html_boot_BrowserBuilder_methodArgs'] = null;
    this['fld_net_java_html_boot_BrowserBuilder_context'] = null;
    this['fld_net_java_html_boot_BrowserBuilder_loader'] = null;
    this['fld_net_java_html_boot_BrowserBuilder_locale'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_boot_BrowserBuilder = registerClass(exports,'net_java_html_boot_BrowserBuilder',net_java_html_boot_BrowserBuilder);

vm.java_net_URL = link('java/net/URL', function(f) { vm.java_net_URL =  f; });
vm.java_net_MalformedURLException = link('java/net/MalformedURLException', function(f) { vm.java_net_MalformedURLException =  f; });
vm.java_io_File = link('java/io/File', function(f) { vm.java_io_File =  f; });
vm.java_lang_System = link('java/lang/System', function(f) { vm.java_lang_System =  f; });

function net_java_html_boot_BrowserBuilder$FImpl() {
  var m;
  var CLS = net_java_html_boot_BrowserBuilder$FImpl;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._l = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder$FImpl_l'] = v; return this['fld_net_java_html_boot_BrowserBuilder$FImpl_l']; };
    m = CLS.cons__VLjava_lang_ClassLoader_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
lcA0['fld_net_java_html_boot_BrowserBuilder$FImpl_l'] = lcA1;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.findResources__VLjava_lang_String_2Ljava_util_Collection_2Z = function(lcA1, lcA2, lcI3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcI3) == 0) { gt = 31; break IF; }
var stA0 = invoker.getResource__Ljava_net_URL_2Ljava_lang_String_2(lcA0['fld_net_java_html_boot_BrowserBuilder$FImpl_l'],lcA1);
var lcA4 = stA0;
if ((lcA4) === null) { gt = 28; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA4);
    }
    X_28: for (;;) { IF: if (gt <= 28) {
{ gt = 73; break IF; }
    }
    X_31: for (;;) { IF: if (gt <= 31) {
try {
var stA0 = invoker.getResources__Ljava_util_Enumeration_2Ljava_lang_String_2(lcA0['fld_net_java_html_boot_BrowserBuilder$FImpl_l'],lcA1);
var lcA4 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 71; break IF; }}
throw e;
}    }
    X_41: for (;;) { IF: if (gt <= 41) {
try {
var stI0 = invoker.hasMoreElements__Z(lcA4);
if ((stI0) == 0) { gt = 68; break IF; }
var stA0 = lcA2;var stA1 = invoker.nextElement__Ljava_lang_Object_2(lcA4);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 0; continue X_41; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 71; break IF; }}
throw e;
}    }
    X_68: for (;;) { IF: if (gt <= 68) {
{ gt = 73; break IF; }
    }
    X_71: for (;;) { IF: if (gt <= 71) {
var lcA4 = stA0;
    }
    X_73: for (;;) { IF: if (gt <= 73) {
return;

    }
}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_boot_BrowserBuilder$FImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_boot_BrowserBuilder$FImpl', { value : true });
      vm.org_netbeans_html_boot_impl_FindResources(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_boot_BrowserBuilder$FImplfillInstOf });
    net_java_html_boot_BrowserBuilder$FImplfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/boot/BrowserBuilder$FImpl';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        org_netbeans_html_boot_impl_FindResources(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_net_java_html_boot_BrowserBuilder$FImpl_l'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_boot_BrowserBuilder$FImpl = net_java_html_boot_BrowserBuilder$FImpl;

vm.java_util_ServiceLoader = link('java/util/ServiceLoader', function(f) { vm.java_util_ServiceLoader =  f; });
vm.java_lang_NullPointerException = link('java/lang/NullPointerException', function(f) { vm.java_lang_NullPointerException =  f; });

function net_java_html_boot_BrowserBuilder$1OnPageLoad() {
  var m;
  var CLS = net_java_html_boot_BrowserBuilder$1OnPageLoad;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$dP = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$dP'] = v; return this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$dP']; };
  m = c._val$activeLoader = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$activeLoader'] = v; return this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$activeLoader']; };
  m = c._val$myCls = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$myCls'] = v; return this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$myCls']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0'] = v; return this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0']; };
    m = CLS.cons__VLnet_java_html_boot_BrowserBuilder_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_ClassLoader_2Ljava_lang_Class_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0'] = lcA1;
lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$dP'] = lcA2;
lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$activeLoader'] = lcA3;
lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$myCls'] = lcA4;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {var stA0 = (refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = org_netbeans_html_boot_spi_Fn(false))).activePresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2();
var lcA1 = stA0;
if ((lcA1) === null) { gt = 12; break IF; }
var stA0 = lcA1;{ gt = 16; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 152; break IF; }}
throw e;
}    }
    X_12: for (;;) { IF: if (gt <= 12) {
try {
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 152; break IF; }}
throw e;
}var stA0 = lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$dP'];    }
    X_16: for (;;) { IF: if (gt <= 16) {
try {var lcA2 = stA0;
var stA0 = (refs_java_lang_Thread || (refs_java_lang_Thread = vm.java_lang_Thread(false)))['currentThread__Ljava_lang_Thread_2']();
invoker.setContextClassLoader__VLjava_lang_ClassLoader_2(stA0,lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$activeLoader']);
var stA0 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = net_java_html_boot_BrowserBuilder(false))).access$000__Ljava_lang_Runnable_2Lnet_java_html_boot_BrowserBuilder_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0']);
if ((stA0) === null) { gt = 44; break IF; }
var stA0 = lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$myCls'];{ gt = 59; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 152; break IF; }}
throw e;
}    }
    X_44: for (;;) { IF: if (gt <= 44) {
try {
var stA0 = invoker.getName__Ljava_lang_String_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$myCls']);
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2ZLjava_lang_ClassLoader_2'](stA0, 1, lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$activeLoader']);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 152; break IF; }}
throw e;
}    }
    X_59: for (;;) { IF: if (gt <= 59) {
try {var lcA3 = stA0;
var stA0 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = net_java_html_boot_BrowserBuilder(false))).access$100___3Ljava_lang_Object_2Lnet_java_html_boot_BrowserBuilder_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0']);
var stA0 = (refs_org_netbeans_html_context_spi_Contexts || (refs_org_netbeans_html_context_spi_Contexts = vm.org_netbeans_html_context_spi_Contexts(false)))['newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2_3Ljava_lang_Object_2'](stA0);
var lcA4 = stA0;
var stI0 = (refs_org_netbeans_html_context_spi_Contexts || (refs_org_netbeans_html_context_spi_Contexts = vm.org_netbeans_html_context_spi_Contexts(false)))['fillInByProviders__ZLjava_lang_Class_2Lorg_netbeans_html_context_spi_Contexts$Builder_2'](lcA3, lcA4);
if ((stI0) != 0) { gt = 93; break IF; }
var stA0 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = net_java_html_boot_BrowserBuilder(false))).access$200__Ljava_util_logging_Logger_2();
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,(refs_java_util_logging_Level || (refs_java_util_logging_Level = vm.java_util_logging_Level(false)))['_WARNING'](), "Using empty technology for {0}", lcA3);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 152; break IF; }}
throw e;
}    }
    X_93: for (;;) { IF: if (gt <= 93) {
try {
var stI0 = lcA2 != null && lcA2['$instOf_java_util_concurrent_Executor'] ? 1 : 0;
if ((stI0) == 0) { gt = 115; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_util_concurrent_Executor']) vm.java_lang_Class(false).castEx(lcA2, 'java.util.concurrent.Executor');
var stA0 = invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I(lcA4,(refs_java_util_concurrent_Executor || (refs_java_util_concurrent_Executor = vm.java_util_concurrent_Executor(false))).constructor.$class, lcA2, (1000));
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 152; break IF; }}
throw e;
}    }
    X_115: for (;;) { IF: if (gt <= 115) {
try {
var stA0 = invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I(lcA4,(refs_org_netbeans_html_boot_spi_Fn$Presenter || (refs_org_netbeans_html_boot_spi_Fn$Presenter = org_netbeans_html_boot_spi_Fn$Presenter(false))).constructor.$class, lcA2, (1000));
var stA0 = invoker.build__Lnet_java_html_BrwsrCtx_2(lcA4);
var lcA5 = stA0;
var stA0 = lcA5;var stA1 = new net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod;
(refs_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod || (refs_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod = net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false))).constructor.cons__VLnet_java_html_boot_BrowserBuilder$1OnPageLoad_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_Class_2.call(stA1, lcA0, lcA2, lcA3);
invoker.execute__VLjava_lang_Runnable_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 152; break IF; }}
throw e;
}{ gt = 188; break IF; }
    }
    X_152: for (;;) { IF: if (gt <= 152) {
var lcA1 = stA0;
var stA0 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = net_java_html_boot_BrowserBuilder(false))).access$200__Ljava_util_logging_Logger_2();
var stA1 = (refs_java_util_logging_Level || (refs_java_util_logging_Level = vm.java_util_logging_Level(false)))['_SEVERE']();var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't load ");
var stA3 = invoker.getName__Ljava_lang_String_2(lcA0['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$myCls']);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,stA1, stA2, lcA1);
    }
    X_188: for (;;) { IF: if (gt <= 188) {
return;

    }
}}}}}}}}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_boot_BrowserBuilder$1OnPageLoadfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_boot_BrowserBuilder$1OnPageLoad', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_boot_BrowserBuilder$1OnPageLoadfillInstOf });
    net_java_html_boot_BrowserBuilder$1OnPageLoadfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/boot/BrowserBuilder$1OnPageLoad';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_org_netbeans_html_boot_spi_Fn;
    var refs_java_lang_Thread;
    var refs_net_java_html_boot_BrowserBuilder;
    var refs_java_lang_Class;
    var refs_org_netbeans_html_context_spi_Contexts;
    var refs_java_util_logging_Level;
    var refs_java_util_concurrent_Executor;
    var refs_org_netbeans_html_boot_spi_Fn$Presenter;
    var refs_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$dP'] = null;
    this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$activeLoader'] = null;
    this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$myCls'] = null;
    this['fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_boot_BrowserBuilder$1OnPageLoad = net_java_html_boot_BrowserBuilder$1OnPageLoad;

vm.java_util_concurrent_Executor = link('java/util/concurrent/Executor', function(f) { vm.java_util_concurrent_Executor =  f; });
vm.org_netbeans_html_context_spi_Contexts = link('org/netbeans/html/context/spi/Contexts', function(f) { vm.org_netbeans_html_context_spi_Contexts =  f; });
vm.java_lang_Thread = link('java/lang/Thread', function(f) { vm.java_lang_Thread =  f; });
vm.java_lang_ClassNotFoundException = link('java/lang/ClassNotFoundException', function(f) { vm.java_lang_ClassNotFoundException =  f; });

function org_netbeans_html_boot_spi_Fn() {
  var m;
  var CLS = org_netbeans_html_boot_spi_Fn;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_LOADED'] = null;
  m = c._LOADED = function (v) {  if (arguments.length == 1) CLS['fld_LOADED'] = v; return CLS['fld_LOADED']; };
  m = c._presenter = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_spi_Fn_presenter'] = v; return this['fld_org_netbeans_html_boot_spi_Fn_presenter']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(lcA0, null);
return;

};
CLS['cons__V'] = m;

    m.anno = {"Ljava/lang/Deprecated;" : {

}

    };
    m.access = 4;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
lcA0['fld_org_netbeans_html_boot_spi_Fn_presenter'] = lcA1;
return;

};
CLS['cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.isValid__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_boot_spi_Fn_presenter']) === null) { gt = 22; break IF; }
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Z(0);
if ((stA0) !== (lcA0['fld_org_netbeans_html_boot_spi_Fn_presenter'])) { gt = 22; break IF; }
var stI0 = 1;{ gt = 23; break IF; }
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var stI0 = 0;    }
    X_23: for (;;) { IF: if (gt <= 23) {
return stI0;

    }
}}}
};
c['isValid__Z'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.isValid__ZLorg_netbeans_html_boot_spi_Fn_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) === null) { gt = 15; break IF; }
var stI0 = lcA0.isValid__Z();
if ((stI0) == 0) { gt = 15; break IF; }
var stI0 = 1;{ gt = 16; break IF; }
    }
    X_15: for (;;) { IF: if (gt <= 15) {

var stI0 = 0;    }
    X_16: for (;;) { IF: if (gt <= 16) {
return stI0;

    }
}}}
};
c['isValid__ZLorg_netbeans_html_boot_spi_Fn_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.define__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_Class_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {
var stA0 = c.define__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_Class_2ZLjava_lang_String_2_3Ljava_lang_String_2(lcA0, 0, lcA1, lcA2);
return stA0;

};
c['define__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_Class_2Ljava_lang_String_2_3Ljava_lang_String_2'] = m;

    m.access = 137;
    m.cls = CLS;
    m = c.define__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_Class_2ZLjava_lang_String_2_3Ljava_lang_String_2 = function(lcA0, lcI1, lcA2, lcA3) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Z(0);
var lcA4 = stA0;
if ((lcA4) !== null) { gt = 13; break IF; }
return null;
    }
    X_13: for (;;) { IF: if (gt <= 13) {

var stI0 = lcA4 != null && lcA4['$instOf_org_netbeans_html_boot_spi_Fn$KeepAlive'] ? 1 : 0;
if ((stI0) == 0) { gt = 80; break IF; }
if ((lcI1) != 0) { gt = 62; break IF; }
if (((lcA3).length) <= 0) { gt = 62; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, (lcA3).length);
var lcA5 = stA0;
var lcI6 = 0;
    }
    X_39: for (;;) { IF: if (gt <= 39) {

if ((lcI6) >= ((lcA5).length)) { gt = 59; break IF; }
Array.at(lcA5, lcI6, 0);
lcI6++;
{ gt = 0; continue X_39; }
    }
    X_59: for (;;) { IF: if (gt <= 59) {
{ gt = 65; break IF; }
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var lcA5 = null;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

if (lcA4 !== null && !lcA4['$instOf_org_netbeans_html_boot_spi_Fn$KeepAlive']) vm.java_lang_Class(false).castEx(lcA4, 'org.netbeans.html.boot.spi.Fn$KeepAlive');
var stA0 = invoker.defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2_3Z(lcA4,lcA2, lcA3, lcA5);
return stA0;
    }
    X_80: for (;;) { IF: if (gt <= 80) {

var stA0 = invoker.defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2(lcA4,lcA2, lcA3);
return stA0;

    }
}}}}}}}
};
c['define__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_Class_2ZLjava_lang_String_2_3Ljava_lang_String_2'] = m;

    m.access = 137;
    m.cls = CLS;
    m = c.preload__Lorg_netbeans_html_boot_spi_Fn_2Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_Class_2Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) !== null) { gt = 6; break IF; }
return null;
    }
    X_6: for (;;) { IF: if (gt <= 6) {
var stA0 = new org_netbeans_html_boot_spi_Fn$1;
var stA1 = stA0;var stA2 = lcA0.presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2();
(refs_org_netbeans_html_boot_spi_Fn$1 || (refs_org_netbeans_html_boot_spi_Fn$1 = org_netbeans_html_boot_spi_Fn$1(false))).constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2Ljava_lang_Class_2.call(stA1, stA2, lcA0, lcA2, lcA1);
return stA0;

    }
}}
};
c['preload__Lorg_netbeans_html_boot_spi_Fn_2Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_Class_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.activePresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function() {
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Z(0);
return stA0;

};
c['activePresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA0) {
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(lcA0);
return stA0;

};
c['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcA2) {
};
c['invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 1153;
    m.cls = CLS;
    m = c.invokeLater__VLjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(lcA0,lcA1, lcA2);
return;

};
c['invokeLater__VLjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = c.presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_boot_spi_Fn_presenter'];

};
c['presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2'] = m;

    m.access = 20;
    m.cls = CLS;
    m = c.access$000__Ljava_util_Map_2 = function() {
return c._LOADED();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$002__Ljava_util_Map_2Ljava_util_Map_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = stA0;
c._LOADED(stA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_spi_FnfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_spi_Fn', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_spi_FnfillInstOf });
    org_netbeans_html_boot_spi_FnfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/spi/Fn';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_org_netbeans_html_boot_impl_FnContext;
    var refs_org_netbeans_html_boot_spi_Fn$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_boot_spi_Fn_presenter'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_spi_Fn = registerClass(exports,'org_netbeans_html_boot_spi_Fn',org_netbeans_html_boot_spi_Fn);


function org_netbeans_html_boot_spi_Fn$1() {
  var m;
  var CLS = org_netbeans_html_boot_spi_Fn$1;
  if (!CLS.$class) {
    var pp = org_netbeans_html_boot_spi_Fn(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$fn = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_spi_Fn$1_val$fn'] = v; return this['fld_org_netbeans_html_boot_spi_Fn$1_val$fn']; };
  m = c._val$resource = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_spi_Fn$1_val$resource'] = v; return this['fld_org_netbeans_html_boot_spi_Fn$1_val$resource']; };
  m = c._val$caller = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_spi_Fn$1_val$caller'] = v; return this['fld_org_netbeans_html_boot_spi_Fn$1_val$caller']; };
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2Ljava_lang_Class_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_boot_spi_Fn$1_val$fn'] = lcA2;
lcA0['fld_org_netbeans_html_boot_spi_Fn$1_val$resource'] = lcA3;
lcA0['fld_org_netbeans_html_boot_spi_Fn$1_val$caller'] = lcA4;
(refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = org_netbeans_html_boot_spi_Fn(false))).constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(lcA0, lcA1);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.loadResource__V.call(lcA0);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_boot_spi_Fn$1_val$fn'],lcA1, lcA2);
return stA0;

};
c['invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = c.invokeLater__VLjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.loadResource__V.call(lcA0);
invoker.invokeLater__VLjava_lang_Object_2_3Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_boot_spi_Fn$1_val$fn'],lcA1, lcA2);
return;

};
c['invokeLater__VLjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = c.loadResource__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2();
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 14; break IF; }
var stA0 = (refs_org_netbeans_html_boot_impl_FnContext || (refs_org_netbeans_html_boot_impl_FnContext = org_netbeans_html_boot_impl_FnContext(false))).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Z(0);
var lcA1 = stA0;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

if ((lcA1) === null) { gt = 219; break IF; }
var stA0 = (refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = org_netbeans_html_boot_spi_Fn(false))).access$000__Ljava_util_Map_2();
if ((stA0) !== null) { gt = 35; break IF; }
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var stA0 = (refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = org_netbeans_html_boot_spi_Fn(false))).access$002__Ljava_util_Map_2Ljava_util_Map_2(stA0);
    }
    X_35: for (;;) { IF: if (gt <= 35) {
var stA0 = (refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = org_netbeans_html_boot_spi_Fn(false))).access$000__Ljava_util_Map_2();
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,lcA0['fld_org_netbeans_html_boot_spi_Fn$1_val$resource']);
if (stA0 !== null && !stA0['$instOf_java_util_Set']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Set');
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 77; break IF; }
var stA0 = new vm.java_util_HashSet;
(refs_java_util_HashSet || (refs_java_util_HashSet = vm.java_util_HashSet(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = (refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = org_netbeans_html_boot_spi_Fn(false))).access$000__Ljava_util_Map_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,lcA0['fld_org_netbeans_html_boot_spi_Fn$1_val$resource'], lcA2);
    }
    X_77: for (;;) { IF: if (gt <= 77) {

var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA1);
if ((stI0) == 0) { gt = 219; break IF; }
var stA0 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(lcA0['fld_org_netbeans_html_boot_spi_Fn$1_val$caller']);
var lcA3 = stA0;
var stA0 = invoker.getResourceAsStream__Ljava_io_InputStream_2Ljava_lang_String_2(lcA3,lcA0['fld_org_netbeans_html_boot_spi_Fn$1_val$resource']);
var lcA4 = stA0;
if ((lcA4) !== null) { gt = 136; break IF; }
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA0['fld_org_netbeans_html_boot_spi_Fn$1_val$resource'],"/");
if ((stI0) == 0) { gt = 136; break IF; }
var stA0 = lcA3;var stA1 = invoker.substring__Ljava_lang_String_2I(lcA0['fld_org_netbeans_html_boot_spi_Fn$1_val$resource'],1);
var stA0 = invoker.getResourceAsStream__Ljava_io_InputStream_2Ljava_lang_String_2(stA0,stA1);
var lcA4 = stA0;
    }
    X_136: for (;;) { IF: if (gt <= 136) {

if ((lcA4) !== null) { gt = 180; break IF; }
var stA0 = new vm.java_io_IOException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Cannot find ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA0['fld_org_netbeans_html_boot_spi_Fn$1_val$resource']);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," in ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_io_IOException || (refs_java_io_IOException = vm.java_io_IOException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_180: for (;;) { IF: if (gt <= 180) {
try {var stA0 = new vm.java_io_InputStreamReader;
(refs_java_io_InputStreamReader || (refs_java_io_InputStreamReader = vm.java_io_InputStreamReader(false))).constructor['cons__VLjava_io_InputStream_2Ljava_lang_String_2'].call(stA0, lcA4, "UTF-8");
var lcA5 = stA0;
invoker.loadScript__VLjava_io_Reader_2(lcA1,lcA5);
} catch (e) {
var stA0 = e;{ gt = 209; break IF; }
}
invoker.close__V(lcA4);
{ gt = 219; break IF; }
    }
    X_209: for (;;) { IF: if (gt <= 209) {
try {var lcA6 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_209; }
}
invoker.close__V(lcA4);
{ var stA0 = lcA6; throw lcA6; }
    }
    X_219: for (;;) { IF: if (gt <= 219) {
return;

    }
}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_spi_Fn$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_spi_Fn$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_spi_Fn$1fillInstOf });
    org_netbeans_html_boot_spi_Fn$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/spi/Fn$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_boot_spi_Fn;
    var refs_org_netbeans_html_boot_impl_FnContext;
    var refs_java_util_HashMap;
    var refs_java_util_HashSet;
    var refs_java_lang_StringBuilder;
    var refs_java_io_IOException;
    var refs_java_io_InputStreamReader;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_boot_spi_Fn$1_val$fn'] = null;
    this['fld_org_netbeans_html_boot_spi_Fn$1_val$resource'] = null;
    this['fld_org_netbeans_html_boot_spi_Fn$1_val$caller'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_spi_Fn$1 = org_netbeans_html_boot_spi_Fn$1;

vm.java_util_HashSet = link('java/util/HashSet', function(f) { vm.java_util_HashSet =  f; });
vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });
vm.java_lang_Deprecated = link('java/lang/Deprecated', function(f) { vm.java_lang_Deprecated =  f; });

function net_java_html_js_JavaScriptBody() {
  var m;
  var CLS = net_java_html_js_JavaScriptBody;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.args___3Ljava_lang_String_2 = function() {
};
c['args___3Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.body__Ljava_lang_String_2 = function() {
};
c['body__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.javacall__Z = function() {
  return 0;
};
c['javacall__Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.wait4js__Z = function() {
  return 1;
};
c['wait4js__Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.keepAlive__Z = function() {
  return 1;
};
c['keepAlive__Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_js_JavaScriptBodyfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_js_JavaScriptBody', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_js_JavaScriptBodyfillInstOf });
    net_java_html_js_JavaScriptBodyfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/js/JavaScriptBody';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_annotation_Annotation(false).constructor.$class
    ]; };
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : (refs_java_lang_annotation_RetentionPolicy || (refs_java_lang_annotation_RetentionPolicy = vm.java_lang_annotation_RetentionPolicy(false)))['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('CLASS')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [(refs_java_lang_annotation_ElementType || (refs_java_lang_annotation_ElementType = vm.java_lang_annotation_ElementType(false)))['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('METHOD'),
(refs_java_lang_annotation_ElementType || (refs_java_lang_annotation_ElementType = vm.java_lang_annotation_ElementType(false)))['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('CONSTRUCTOR')]
}

    };
    var refs_java_lang_annotation_RetentionPolicy;
    var refs_java_lang_annotation_ElementType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_js_JavaScriptBody = registerClass(exports,'net_java_html_js_JavaScriptBody',net_java_html_js_JavaScriptBody);

vm.java_lang_annotation_ElementType = link('java/lang/annotation/ElementType', function(f) { vm.java_lang_annotation_ElementType =  f; });
vm.java_lang_annotation_Target = link('java/lang/annotation/Target', function(f) { vm.java_lang_annotation_Target =  f; });
vm.java_lang_annotation_RetentionPolicy = link('java/lang/annotation/RetentionPolicy', function(f) { vm.java_lang_annotation_RetentionPolicy =  f; });
vm.java_lang_annotation_Retention = link('java/lang/annotation/Retention', function(f) { vm.java_lang_annotation_Retention =  f; });
vm.java_lang_annotation_Annotation = link('java/lang/annotation/Annotation', function(f) { vm.java_lang_annotation_Annotation =  f; });

function net_java_html_js_JavaScriptResource() {
  var m;
  var CLS = net_java_html_js_JavaScriptResource;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.value__Ljava_lang_String_2 = function() {
};
c['value__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_js_JavaScriptResourcefillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_js_JavaScriptResource', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_js_JavaScriptResourcefillInstOf });
    net_java_html_js_JavaScriptResourcefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/js/JavaScriptResource';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_annotation_Annotation(false).constructor.$class
    ]; };
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : (refs_java_lang_annotation_RetentionPolicy || (refs_java_lang_annotation_RetentionPolicy = vm.java_lang_annotation_RetentionPolicy(false)))['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('CLASS')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [(refs_java_lang_annotation_ElementType || (refs_java_lang_annotation_ElementType = vm.java_lang_annotation_ElementType(false)))['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('TYPE')]
}

    };
    var refs_java_lang_annotation_RetentionPolicy;
    var refs_java_lang_annotation_ElementType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_js_JavaScriptResource = registerClass(exports,'net_java_html_js_JavaScriptResource',net_java_html_js_JavaScriptResource);


function org_netbeans_html_boot_impl_FnUtils$1() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$1;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_ClassReader(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V_3B = function(lcA1) {
  var  lcA0 = this;
(refs_org_objectweb_asm_ClassReader || (refs_org_objectweb_asm_ClassReader = vm.org_objectweb_asm_ClassReader(false))).constructor['cons__V_3B'].call(lcA0, lcA1);
return;

};
CLS['cons__V_3B'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.readShort__SI = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = (refs_org_objectweb_asm_ClassReader || (refs_org_objectweb_asm_ClassReader = vm.org_objectweb_asm_ClassReader(false)))['readShort__SI'].call(lcA0, lcI1);
var lcI2 = stI0;
if ((lcI1) != ((6))) { gt = 21; break IF; }
if ((lcI2) <= ((51))) { gt = 21; break IF; }
return (51);
    }
    X_21: for (;;) { IF: if (gt <= 21) {

return lcI2;

    }
}}
};
c['readShort__SI'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$1fillInstOf });
    org_netbeans_html_boot_impl_FnUtils$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_org_objectweb_asm_ClassReader;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_FnUtils$1 = org_netbeans_html_boot_impl_FnUtils$1;

vm.org_objectweb_asm_ClassReader = link('org/objectweb/asm/ClassReader', function(f) { vm.org_objectweb_asm_ClassReader =  f; });

function org_netbeans_html_boot_impl_FnUtils$2() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$2;
  if (!CLS.$class) {
    var pp = org_netbeans_html_boot_impl_JsCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_boot_impl_JsCallback || (refs_org_netbeans_html_boot_impl_JsCallback = org_netbeans_html_boot_impl_JsCallback(false))).constructor.cons__V.call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.callMethod__Ljava_lang_CharSequence_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
if ((lcA1) === null) { gt = 24; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"vm.raw$");
{ gt = 32; break IF; }
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"vm.");
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stA0 = lcA5;var stA1 = c.mangle__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(lcA2, lcA3, lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"(");
if ((lcA1) === null) { gt = 64; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,lcA1);
    }
    X_64: for (;;) { IF: if (gt <= 64) {

return lcA5;

    }
}}}}
};
    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$2', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$2fillInstOf });
    org_netbeans_html_boot_impl_FnUtils$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_boot_impl_JsCallback;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_FnUtils$2 = org_netbeans_html_boot_impl_FnUtils$2;


function org_netbeans_html_boot_impl_JsCallback() {
  var m;
  var CLS = org_netbeans_html_boot_impl_JsCallback;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.parse__Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var lcI3 = 0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = invoker.indexOf__ILjava_lang_String_2I(lcA1,".@", lcI3);
var lcI4 = stI0;
if ((lcI4) != (-1)) { gt = 43; break IF; }
var stA0 = lcA2;var stA1 = invoker.substring__Ljava_lang_String_2I(lcA1,lcI3);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(lcA2);
var lcA1 = stA0;
{ gt = 296; break IF; }
    }
    X_43: for (;;) { IF: if (gt <= 43) {

var lcI5 = lcI4;
    }
    X_47: for (;;) { IF: if (gt <= 47) {

if ((lcI5) <= 0) { gt = 73; break IF; }
var stA0 = lcA1;lcI5 += -1;
var stI0 = invoker.charAt__CI(stA0,lcI5);
var stI0 = (refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false)))['isJavaIdentifierPart__ZC'](stI0);
if ((stI0) != 0) { gt = 0; continue X_47; }
lcI5++;
{ gt = 73; break IF; }
    }
    X_73: for (;;) { IF: if (gt <= 73) {

var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,lcI5, lcI4);
var lcA6 = stA0;
var stA0 = lcA2;var stA1 = invoker.substring__Ljava_lang_String_2II(lcA1,lcI3, lcI5);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stI0 = invoker.indexOf__III(lcA1,(40), lcI4);
var lcI7 = stI0;
var stI0 = invoker.indexOf__III(lcA1,(41), lcI7);
var lcI8 = stI0;
var stI0 = invoker.indexOf__ILjava_lang_String_2I(lcA1,"::", lcI4);
var lcI9 = stI0;
if ((lcI7) == (-1)) { gt = 143; break IF; }
if ((lcI8) == (-1)) { gt = 143; break IF; }
if ((lcI9) != (-1)) { gt = 170; break IF; }
    }
    X_143: for (;;) { IF: if (gt <= 143) {
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Wrong format of instance callback. Should be: 'inst.@pkg.Class::method(Ljava/lang/Object;)(param)':\n");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA1);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_170: for (;;) { IF: if (gt <= 170) {

var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,(((lcI4) + (2)) | 0), lcI9);
var lcA10 = stA0;
var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,(((lcI9) + (2)) | 0), lcI7);
var lcA11 = stA0;
var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,lcI7, (((lcI8) + (1)) | 0));
var lcA12 = stA0;
var stI0 = invoker.indexOf__III(lcA1,(40), (((lcI8) + (1)) | 0));
var lcI13 = stI0;
if ((lcI13) != (-1)) { gt = 251; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Wrong format of instance callback. Should be: 'inst.@pkg.Class::method(Ljava/lang/Object;)(param)':\n");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA1);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_251: for (;;) { IF: if (gt <= 251) {

var stA0 = lcA2;var stA1 = lcA0.callMethod__Ljava_lang_CharSequence_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(lcA6, lcA10, lcA11, lcA12);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stI0 = invoker.charAt__CI(lcA1,(((lcI13) + (1)) | 0));
if ((stI0) == ((41))) { gt = 288; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA2,",");
    }
    X_288: for (;;) { IF: if (gt <= 288) {

var lcI3 = (((lcI13) + (1)) | 0);
{ gt = 0; continue X_10; }
    }
    X_296: for (;;) { IF: if (gt <= 296) {

var lcI3 = 0;
var lcA2 = null;
    }
    X_300: for (;;) { IF: if (gt <= 300) {

var stI0 = invoker.indexOf__ILjava_lang_String_2I(lcA1,"@", lcI3);
var lcI4 = stI0;
if ((lcI4) != (-1)) { gt = 336; break IF; }
if ((lcA2) !== null) { gt = 321; break IF; }
return lcA1;
    }
    X_321: for (;;) { IF: if (gt <= 321) {

var stA0 = lcA2;var stA1 = invoker.substring__Ljava_lang_String_2I(lcA1,lcI3);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(lcA2);
return stA0;
    }
    X_336: for (;;) { IF: if (gt <= 336) {

if ((lcA2) !== null) { gt = 348; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
    }
    X_348: for (;;) { IF: if (gt <= 348) {

var stA0 = lcA2;var stA1 = invoker.substring__Ljava_lang_String_2II(lcA1,lcI3, lcI4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stI0 = invoker.indexOf__III(lcA1,(40), lcI4);
var lcI5 = stI0;
var stI0 = invoker.indexOf__III(lcA1,(41), lcI5);
var lcI6 = stI0;
var stI0 = invoker.indexOf__ILjava_lang_String_2I(lcA1,"::", lcI4);
var lcI7 = stI0;
var stI0 = invoker.indexOf__III(lcA1,(40), (((lcI6) + (1)) | 0));
var lcI8 = stI0;
if ((lcI5) == (-1)) { gt = 426; break IF; }
if ((lcI6) == (-1)) { gt = 426; break IF; }
if ((lcI7) == (-1)) { gt = 426; break IF; }
if ((lcI8) != (-1)) { gt = 453; break IF; }
    }
    X_426: for (;;) { IF: if (gt <= 426) {
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Wrong format of static callback. Should be: '@pkg.Class::staticMethod(Ljava/lang/Object;)(param)':\n");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA1);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_453: for (;;) { IF: if (gt <= 453) {

var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,(((lcI4) + (1)) | 0), lcI7);
var lcA9 = stA0;
var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,(((lcI7) + (2)) | 0), lcI5);
var lcA10 = stA0;
var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,lcI5, (((lcI6) + (1)) | 0));
var lcA11 = stA0;
var stA0 = lcA2;var stA1 = lcA0.callMethod__Ljava_lang_CharSequence_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(null, lcA9, lcA10, lcA11);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var lcI3 = (((lcI8) + (1)) | 0);
{ gt = 0; continue X_300; }

    }
}}}}}}}}}}}}}}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.callMethod__Ljava_lang_CharSequence_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.mangle__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA2,"(");
if ((stI0) == 0) { gt = 15; break IF; }
var stA0 = invoker.substring__Ljava_lang_String_2I(lcA2,1);
var lcA2 = stA0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {

var stI0 = invoker.endsWith__ZLjava_lang_String_2(lcA2,")");
if ((stI0) == 0) { gt = 36; break IF; }
var stA0 = lcA2;var stI1 = 0;var stI2 = invoker.length__I(lcA2);
var stA0 = invoker.substring__Ljava_lang_String_2II(stA0,stI1, (((stI2) - (1)) | 0));
var lcA2 = stA0;
    }
    X_36: for (;;) { IF: if (gt <= 36) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA1 = c.replace__Ljava_lang_String_2Ljava_lang_String_2(lcA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"$");
var stA1 = c.replace__Ljava_lang_String_2Ljava_lang_String_2(lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"$");
var stA1 = c.replace__Ljava_lang_String_2Ljava_lang_String_2(lcA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.replace__Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = invoker.replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(lcA0,"_", "_1");
var stA0 = invoker.replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(stA0,";", "_2");
var stA0 = invoker.replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(stA0,"[", "_3");
var stA0 = invoker.replace__Ljava_lang_String_2CC(stA0,(46), (95));
var stA0 = invoker.replace__Ljava_lang_String_2CC(stA0,(47), (95));
return stA0;

};
    m.access = 10;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_JsCallbackfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_JsCallback', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_JsCallbackfillInstOf });
    org_netbeans_html_boot_impl_JsCallbackfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/JsCallback';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_Character;
    var refs_java_lang_IllegalStateException;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_JsCallback = org_netbeans_html_boot_impl_JsCallback;

vm.java_lang_Character = link('java/lang/Character', function(f) { vm.java_lang_Character =  f; });

function org_netbeans_html_boot_impl_FnUtils$ClassWriterEx() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$ClassWriterEx;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_ClassWriter(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._loader = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$ClassWriterEx_loader'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$ClassWriterEx_loader']; };
    m = CLS.cons__VLjava_lang_ClassLoader_2Lorg_objectweb_asm_ClassReader_2I = function(lcA1, lcA2, lcI3) {
  var  lcA0 = this;
(refs_org_objectweb_asm_ClassWriter || (refs_org_objectweb_asm_ClassWriter = vm.org_objectweb_asm_ClassWriter(false))).constructor['cons__VLorg_objectweb_asm_ClassReader_2I'].call(lcA0, lcA2, lcI3);
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$ClassWriterEx_loader'] = lcA1;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.getCommonSuperClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = invoker.replace__Ljava_lang_String_2CC(lcA1,(47), (46));
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2ZLjava_lang_ClassLoader_2'](stA0, 0, lcA0['fld_org_netbeans_html_boot_impl_FnUtils$ClassWriterEx_loader']);
var lcA3 = stA0;
var stA0 = invoker.replace__Ljava_lang_String_2CC(lcA2,(47), (46));
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2ZLjava_lang_ClassLoader_2'](stA0, 0, lcA0['fld_org_netbeans_html_boot_impl_FnUtils$ClassWriterEx_loader']);
var lcA4 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 38; break IF; }}
throw e;
}{ gt = 53; break IF; }
    }
    X_38: for (;;) { IF: if (gt <= 38) {
var lcA5 = stA0;
var stA0 = new vm.java_lang_RuntimeException;
var stA1 = stA0;var stA2 = invoker.toString__Ljava_lang_String_2(lcA5);
(refs_java_lang_RuntimeException || (refs_java_lang_RuntimeException = vm.java_lang_RuntimeException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stI0 = invoker.isAssignableFrom__ZLjava_lang_Class_2(lcA3,lcA4);
if ((stI0) == 0) { gt = 64; break IF; }
return lcA1;
    }
    X_64: for (;;) { IF: if (gt <= 64) {

var stI0 = invoker.isAssignableFrom__ZLjava_lang_Class_2(lcA4,lcA3);
if ((stI0) == 0) { gt = 75; break IF; }
return lcA2;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stI0 = invoker.isInterface__Z(lcA3);
if ((stI0) != 0) { gt = 90; break IF; }
var stI0 = invoker.isInterface__Z(lcA4);
if ((stI0) == 0) { gt = 93; break IF; }
    }
    X_90: for (;;) { IF: if (gt <= 90) {

return "java/lang/Object";
    }
    X_93: for (;;) { IF: if (gt <= 93) {

var stA0 = invoker.getSuperclass__Ljava_lang_Class_2(lcA3);
var lcA3 = stA0;
var stI0 = invoker.isAssignableFrom__ZLjava_lang_Class_2(lcA3,lcA4);
if ((stI0) == 0) { gt = 0; continue X_93; }
var stA0 = invoker.getName__Ljava_lang_String_2(lcA3);
var stA0 = invoker.replace__Ljava_lang_String_2CC(stA0,(46), (47));
return stA0;

    }
}}}}}}}
};
c['getCommonSuperClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$ClassWriterExfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$ClassWriterEx', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$ClassWriterExfillInstOf });
    org_netbeans_html_boot_impl_FnUtils$ClassWriterExfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$ClassWriterEx';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_org_objectweb_asm_ClassWriter;
    var refs_java_lang_Class;
    var refs_java_lang_RuntimeException;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_boot_impl_FnUtils$ClassWriterEx_loader'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_FnUtils$ClassWriterEx = org_netbeans_html_boot_impl_FnUtils$ClassWriterEx;

vm.java_lang_RuntimeException = link('java/lang/RuntimeException', function(f) { vm.java_lang_RuntimeException =  f; });
vm.org_objectweb_asm_ClassWriter = link('org/objectweb/asm/ClassWriter', function(f) { vm.org_objectweb_asm_ClassWriter =  f; });

function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_signature_SignatureVisitor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$2 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1_this$2'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1_this$2']; };
    m = CLS.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1_this$2'] = lcA1;
(refs_org_objectweb_asm_signature_SignatureVisitor || (refs_org_objectweb_asm_signature_SignatureVisitor = vm.org_objectweb_asm_signature_SignatureVisitor(false))).constructor['cons__VI'].call(lcA0, lcI2);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.visitClassType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1_this$2'];var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"[");
var stA2 = (refs_org_objectweb_asm_Type || (refs_org_objectweb_asm_Type = vm.org_objectweb_asm_Type(false)))['getObjectType__Lorg_objectweb_asm_Type_2Ljava_lang_String_2'](lcA1);
var stA2 = invoker.getDescriptor__Ljava_lang_String_2(stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA1 = (refs_org_objectweb_asm_Type || (refs_org_objectweb_asm_Type = vm.org_objectweb_asm_Type(false)))['getType__Lorg_objectweb_asm_Type_2Ljava_lang_String_2'](stA1);
var stA0 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false))).access$802__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2Lorg_objectweb_asm_Type_2(stA0, stA1);
return;

};
c['visitClassType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitBaseType__VC = function(lcI1) {
  var  lcA0 = this;
var stA0 = lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1_this$2'];var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2C(stA1,lcI1);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA1 = (refs_org_objectweb_asm_Type || (refs_org_objectweb_asm_Type = vm.org_objectweb_asm_Type(false)))['getType__Lorg_objectweb_asm_Type_2Ljava_lang_String_2'](stA1);
var stA0 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false))).access$802__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2Lorg_objectweb_asm_Type_2(stA0, stA1);
return;

};
c['visitBaseType__VC'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1fillInstOf });
    org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$FindInClass$FindInMethod$1SV$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_org_objectweb_asm_signature_SignatureVisitor;
    var refs_java_lang_StringBuilder;
    var refs_org_objectweb_asm_Type;
    var refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1_this$2'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1 = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1;


function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_signature_SignatureVisitor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._nowReturn = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_nowReturn'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_nowReturn']; };
  m = c._returnType = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_returnType'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_returnType']; };
  m = c._index = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_index'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_index']; };
  m = c._loadIndex = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_loadIndex'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_loadIndex']; };
  m = c._val$offset = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_val$offset'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_val$offset']; };
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1']; };
    m = CLS.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1'] = lcA1;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_val$offset'] = lcI2;
(refs_org_objectweb_asm_signature_SignatureVisitor || (refs_org_objectweb_asm_signature_SignatureVisitor = vm.org_objectweb_asm_signature_SignatureVisitor(false))).constructor['cons__VI'].call(lcA0, 262144);
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_loadIndex'] = lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_val$offset'];
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.visitBaseType__VC = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,lcI1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA0 = (refs_org_objectweb_asm_Type || (refs_org_objectweb_asm_Type = vm.org_objectweb_asm_Type(false)))['getType__Lorg_objectweb_asm_Type_2Ljava_lang_String_2'](stA0);
var lcA2 = stA0;
if ((lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_nowReturn']) == 0) { gt = 36; break IF; }
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_returnType'] = lcA2;
return;
    }
    X_36: for (;;) { IF: if (gt <= 36) {

(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false))).access$301__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1'], (89));
var stA0 = lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1'];var stI1 = (17);var stA2 = lcA0;var stA3 = stA2;
var stI3 = stA3['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_index'];var stI4 = stI3, stA3 = stA2, stI2 = stI4;
stA3['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_index'] = (((stI4) + (1)) | 0);
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false))).access$401__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II(stA0, stI1, stI2);
var stA0 = lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1'];var stI1 = invoker.getOpcode__II(lcA2,(21));
var stA2 = lcA0;var stA3 = stA2;
var stI3 = stA3['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_loadIndex'];var stI4 = stI3, stA3 = stA2, stI2 = stI4;
stA3['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_loadIndex'] = (((stI4) + (1)) | 0);
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false))).access$501__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II(stA0, stI1, stI2);
switch (lcI1) {
  case 66:{ gt = 266; break IF; }
  case 67:{ gt = 260; break IF; }
  case 68:{ gt = 238; break IF; }
  case 69:{ gt = 272; break IF; }
  case 70:{ gt = 232; break IF; }
  case 71:{ gt = 272; break IF; }
  case 72:{ gt = 272; break IF; }
  case 73:{ gt = 204; break IF; }
  case 74:{ gt = 210; break IF; }
  case 75:{ gt = 272; break IF; }
  case 76:{ gt = 272; break IF; }
  case 77:{ gt = 272; break IF; }
  case 78:{ gt = 272; break IF; }
  case 79:{ gt = 272; break IF; }
  case 80:{ gt = 272; break IF; }
  case 81:{ gt = 272; break IF; }
  case 82:{ gt = 272; break IF; }
  case 83:{ gt = 226; break IF; }
  case 84:{ gt = 272; break IF; }
  case 85:{ gt = 272; break IF; }
  case 86:{ gt = 272; break IF; }
  case 87:{ gt = 272; break IF; }
  case 88:{ gt = 272; break IF; }
  case 89:{ gt = 272; break IF; }
  case 90:{ gt = 254; break IF; }
  default: { gt = 272; break IF; }
}
    }
    X_204: for (;;) { IF: if (gt <= 204) {

var lcA3 = "java/lang/Integer";
{ gt = 284; break IF; }
    }
    X_210: for (;;) { IF: if (gt <= 210) {

var lcA3 = "java/lang/Long";
var stA0 = lcA0;var stA1 = stA0;
stA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_loadIndex'] = (((stA1['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_loadIndex']) + (1)) | 0);
{ gt = 284; break IF; }
    }
    X_226: for (;;) { IF: if (gt <= 226) {

var lcA3 = "java/lang/Short";
{ gt = 284; break IF; }
    }
    X_232: for (;;) { IF: if (gt <= 232) {

var lcA3 = "java/lang/Float";
{ gt = 284; break IF; }
    }
    X_238: for (;;) { IF: if (gt <= 238) {

var lcA3 = "java/lang/Double";
var stA0 = lcA0;var stA1 = stA0;
stA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_loadIndex'] = (((stA1['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_loadIndex']) + (1)) | 0);
{ gt = 284; break IF; }
    }
    X_254: for (;;) { IF: if (gt <= 254) {

var lcA3 = "java/lang/Boolean";
{ gt = 284; break IF; }
    }
    X_260: for (;;) { IF: if (gt <= 260) {

var lcA3 = "java/lang/Character";
{ gt = 284; break IF; }
    }
    X_266: for (;;) { IF: if (gt <= 266) {

var lcA3 = "java/lang/Byte";
{ gt = 284; break IF; }
    }
    X_272: for (;;) { IF: if (gt <= 272) {
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = invoker.toString__Ljava_lang_String_2(lcA2);
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_284: for (;;) { IF: if (gt <= 284) {

var stA0 = lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1'];var stI1 = (184);var stA2 = lcA3;var stA3 = "valueOf";var stA4 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA4);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,"(");
var stA4 = invoker.append__Ljava_lang_StringBuilder_2C(stA4,lcI1);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,")L");
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,lcA3);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,";");
var stA4 = invoker.toString__Ljava_lang_String_2(stA4);
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false))).access$601__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stI1, stA2, stA3, stA4);
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false))).access$701__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1'], (83));
return;

    }
}}}}}}}}}}}}
};
c['visitBaseType__VC'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitArrayType__Lorg_objectweb_asm_signature_SignatureVisitor_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_nowReturn']) == 0) { gt = 18; break IF; }
var stA0 = new org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1;
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1 || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1 = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1(false))).constructor.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2I.call(stA0, lcA0, 262144);
return stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

c.loadObject__V.call(lcA0);
var stA0 = new vm.org_objectweb_asm_signature_SignatureWriter;
(refs_org_objectweb_asm_signature_SignatureWriter || (refs_org_objectweb_asm_signature_SignatureWriter = vm.org_objectweb_asm_signature_SignatureWriter(false))).constructor['cons__V'].call(stA0);
return stA0;

    }
}}
};
c['visitArrayType__Lorg_objectweb_asm_signature_SignatureVisitor_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitClassType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_nowReturn']) == 0) { gt = 16; break IF; }
var stA0 = lcA0;var stA1 = (refs_org_objectweb_asm_Type || (refs_org_objectweb_asm_Type = vm.org_objectweb_asm_Type(false)))['getObjectType__Lorg_objectweb_asm_Type_2Ljava_lang_String_2'](lcA1);
stA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_returnType'] = stA1;
return;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

c.loadObject__V.call(lcA0);
return;

    }
}}
};
c['visitClassType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitReturnType__Lorg_objectweb_asm_signature_SignatureVisitor_2 = function() {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_nowReturn'] = 1;
return lcA0;

};
c['visitReturnType__Lorg_objectweb_asm_signature_SignatureVisitor_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadObject__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false))).access$901__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1'], (89));
var stA0 = lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1'];var stI1 = (17);var stA2 = lcA0;var stA3 = stA2;
var stI3 = stA3['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_index'];var stI4 = stI3, stA3 = stA2, stI2 = stI4;
stA3['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_index'] = (((stI4) + (1)) | 0);
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false))).access$1001__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II(stA0, stI1, stI2);
var stA0 = lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1'];var stI1 = (25);var stA2 = lcA0;var stA3 = stA2;
var stI3 = stA3['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_loadIndex'];var stI4 = stI3, stA3 = stA2, stI2 = stI4;
stA3['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_loadIndex'] = (((stI4) + (1)) | 0);
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false))).access$1101__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II(stA0, stI1, stI2);
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false))).access$1201__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1'], (83));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.access$802__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2Lorg_objectweb_asm_Type_2 = function(lcA0, lcA1) {
var stA0 = lcA0;var stA1 = lcA1;var stA2 = stA1, stA1 = stA0, stA0 = stA2;
stA1['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_returnType'] = stA2;
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1400__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_index'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$800__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_returnType'];

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SVfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SVfillInstOf });
    org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SVfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$FindInClass$FindInMethod$1SV';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_org_objectweb_asm_signature_SignatureVisitor;
    var refs_java_lang_StringBuilder;
    var refs_org_objectweb_asm_Type;
    var refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod;
    var refs_java_lang_IllegalStateException;
    var refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1;
    var refs_org_objectweb_asm_signature_SignatureWriter;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_nowReturn'] = 0;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_returnType'] = null;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_index'] = 0;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_loadIndex'] = 0;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_val$offset'] = 0;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV;

vm.org_objectweb_asm_signature_SignatureWriter = link('org/objectweb/asm/signature/SignatureWriter', function(f) { vm.org_objectweb_asm_signature_SignatureWriter =  f; });

function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_MethodVisitor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._name = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_name'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_name']; };
  m = c._desc = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_desc'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_desc']; };
  m = c._access = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_access'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_access']; };
  m = c._fia = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia']; };
  m = c._bodyGenerated = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_bodyGenerated'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_bodyGenerated']; };
  CLS['fld_$assertionsDisabled'] = 0;
  m = c._$assertionsDisabled = function (v) {  if (arguments.length == 1) CLS['fld_$assertionsDisabled'] = v; return CLS['fld_$assertionsDisabled']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0']; };
    m = CLS.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass_2ILjava_lang_String_2Ljava_lang_String_2Lorg_objectweb_asm_MethodVisitor_2 = function(lcA1, lcI2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0'] = lcA1;
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false))).constructor['cons__VILorg_objectweb_asm_MethodVisitor_2'].call(lcA0, 262144, lcA5);
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_access'] = lcI2;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_name'] = lcA3;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_desc'] = lcA4;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.visitAnnotation__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2Z = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.equals__ZLjava_lang_Object_2("Lnet/java/html/js/JavaScriptBody;",lcA1);
if ((stI0) == 0) { gt = 26; break IF; }
var stI0 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$008__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0']);
var stA0 = new org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno;
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false))).constructor.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2.call(stA0, lcA0);
return stA0;
    }
    X_26: for (;;) { IF: if (gt <= 26) {

var stA0 = (refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitAnnotation__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2Z'].call(lcA0, lcA1, lcI2);
return stA0;

    }
}}
};
c['visitAnnotation__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.generateJSBody__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.visitCode__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia']) !== null) { gt = 8; break IF; }
return;
    }
    X_8: for (;;) { IF: if (gt <= 8) {

var stI0 = c.generateBody__ZZ.call(lcA0, 1);
return;

    }
}}
};
c['visitCode__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.generateBody__ZZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_bodyGenerated']) == 0) { gt = 9; break IF; }
return 0;
    }
    X_9: for (;;) { IF: if (gt <= 9) {

lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_bodyGenerated'] = 1;
if ((c['_mv'].call(lcA0)) === null) { gt = 119; break IF; }
var stA0 = (refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitAnnotation__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2Z'].call(lcA0, "Lnet/java/html/js/JavaScriptBody;", 0);
var lcA2 = stA0;
var stA0 = invoker.visitArray__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2(lcA2,"args");
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia']['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_args']);
var lcA4 = stA0;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 82; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA5 = stA0;
invoker.visit__VLjava_lang_String_2Ljava_lang_Object_2(lcA3,null, lcA5);
{ gt = 0; continue X_50; }
    }
    X_82: for (;;) { IF: if (gt <= 82) {

invoker.visitEnd__V(lcA3);
var stA0 = lcA2;var stA1 = "javacall";var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia']['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_javacall']);
invoker.visit__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
invoker.visit__VLjava_lang_String_2Ljava_lang_Object_2(lcA2,"body", lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia']['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_body']);
invoker.visitEnd__V(lcA2);
    }
    X_119: for (;;) { IF: if (gt <= 119) {

if ((lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia']['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_javacall']) == 0) { gt = 167; break IF; }
var stA0 = (refs_org_netbeans_html_boot_impl_FnUtils || (refs_org_netbeans_html_boot_impl_FnUtils = org_netbeans_html_boot_impl_FnUtils(false))).callback__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia']['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_body']);
var lcA2 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__VLjava_util_Collection_2'].call(stA0, lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia']['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_args']);
var lcA3 = stA0;
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA3,"vm");
{ gt = 183; break IF; }
    }
    X_167: for (;;) { IF: if (gt <= 167) {

var lcA2 = lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia']['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_body'];
var lcA3 = lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia']['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_args'];
    }
    X_183: for (;;) { IF: if (gt <= 183) {

var stA0 = lcA0;var stI1 = (178);var stA2 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0']);
var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"$$fn$$");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_name']);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"_");
var stI4 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$000__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0']);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2I(stA3,stI4);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitFieldInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(stA0, stI1, stA2, stA3, "Lorg/netbeans/html/boot/spi/Fn;");
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, (89));
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, (184), "org/netbeans/html/boot/spi/Fn", "isValid", "(Lorg/netbeans/html/boot/spi/Fn;)Z");
var stA0 = new vm.org_objectweb_asm_Label;
(refs_org_objectweb_asm_Label || (refs_org_objectweb_asm_Label = vm.org_objectweb_asm_Label(false))).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitJumpInsn__VILorg_objectweb_asm_Label_2'].call(lcA0, (154), lcA4);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, (87));
var stA0 = lcA0;var stA1 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0']);
var stA1 = (refs_org_objectweb_asm_Type || (refs_org_objectweb_asm_Type = vm.org_objectweb_asm_Type(false)))['getObjectType__Lorg_objectweb_asm_Type_2Ljava_lang_String_2'](stA1);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitLdcInsn__VLjava_lang_Object_2'].call(stA0, stA1);
var stA0 = lcA0;if ((lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia']['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_keepAlive']) == 0) { gt = 308; break IF; }
var stI1 = 4;{ gt = 309; break IF; }
    }
    X_308: for (;;) { IF: if (gt <= 308) {

var stI1 = 3;    }
    X_309: for (;;) { IF: if (gt <= 309) {
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(stA0, stI1);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitLdcInsn__VLjava_lang_Object_2'].call(lcA0, lcA2);
var stA0 = lcA0;var stI1 = (17);var stI2 = invoker.size__I(lcA3);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitIntInsn__VII'].call(stA0, stI1, stI2);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitTypeInsn__VILjava_lang_String_2'].call(lcA0, (189), "java/lang/String");
var lcI5 = 0;
var lcI6 = 0;
    }
    X_344: for (;;) { IF: if (gt <= 344) {

var stI0 = lcI6;var stI1 = invoker.size__I(lcA3);
if ((stI0) >= (stI1)) { gt = 428; break IF; }
if ((c._$assertionsDisabled()) != 0) { gt = 374; break IF; }
if ((lcI5) == 0) { gt = 374; break IF; }
var stA0 = new vm.java_lang_AssertionError;
(refs_java_lang_AssertionError || (refs_java_lang_AssertionError = vm.java_lang_AssertionError(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_374: for (;;) { IF: if (gt <= 374) {

var stA0 = invoker.get__Ljava_lang_Object_2I(lcA3,lcI6);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA7 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2("vm",lcA7);
var lcI5 = stI0;
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, (89));
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitIntInsn__VII'].call(lcA0, (16), lcI6);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitLdcInsn__VLjava_lang_Object_2'].call(lcA0, lcA7);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, (83));
lcI6++;
{ gt = 0; continue X_344; }
    }
    X_428: for (;;) { IF: if (gt <= 428) {

(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, (184), "org/netbeans/html/boot/spi/Fn", "define", "(Ljava/lang/Class;ZLjava/lang/String;[Ljava/lang/String;)Lorg/netbeans/html/boot/spi/Fn;");
var stA0 = new vm.org_objectweb_asm_Label;
(refs_org_objectweb_asm_Label || (refs_org_objectweb_asm_Label = vm.org_objectweb_asm_Label(false))).constructor['cons__V'].call(stA0);
var lcA6 = stA0;
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, (89));
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitJumpInsn__VILorg_objectweb_asm_Label_2'].call(lcA0, (198), lcA6);
var stA0 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$200__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0']);
if ((stA0) === null) { gt = 513; break IF; }
var stA0 = lcA0;var stA1 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0']);
var stA1 = (refs_org_objectweb_asm_Type || (refs_org_objectweb_asm_Type = vm.org_objectweb_asm_Type(false)))['getObjectType__Lorg_objectweb_asm_Type_2Ljava_lang_String_2'](stA1);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitLdcInsn__VLjava_lang_Object_2'].call(stA0, stA1);
var stA0 = lcA0;var stA1 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$200__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0']);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitLdcInsn__VLjava_lang_Object_2'].call(stA0, stA1);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, (184), "org/netbeans/html/boot/spi/Fn", "preload", "(Lorg/netbeans/html/boot/spi/Fn;Ljava/lang/Class;Ljava/lang/String;)Lorg/netbeans/html/boot/spi/Fn;");
    }
    X_513: for (;;) { IF: if (gt <= 513) {

(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, (89));
var stA0 = lcA0;var stI1 = (179);var stA2 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0']);
var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"$$fn$$");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_name']);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"_");
var stI4 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$000__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0']);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2I(stA3,stI4);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitFieldInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(stA0, stI1, stA2, stA3, "Lorg/netbeans/html/boot/spi/Fn;");
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitLabel__VLorg_objectweb_asm_Label_2'].call(lcA0, lcA4);
if (((lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_access'] & (8))) != 0) { gt = 601; break IF; }
var lcI7 = 1;
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitIntInsn__VII'].call(lcA0, (25), 0);
{ gt = 609; break IF; }
    }
    X_601: for (;;) { IF: if (gt <= 601) {

var lcI7 = 0;
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, 1);
    }
    X_609: for (;;) { IF: if (gt <= 609) {

var stA0 = lcA0;var stI1 = (17);var stI2 = invoker.size__I(lcA3);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitIntInsn__VII'].call(stA0, stI1, stI2);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitTypeInsn__VILjava_lang_String_2'].call(lcA0, (189), "java/lang/Object");
var stA0 = new org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV;
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false))).constructor.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I.call(stA0, lcA0, lcI7);
var lcA8 = stA0;
var stA0 = new vm.org_objectweb_asm_signature_SignatureReader;
(refs_org_objectweb_asm_signature_SignatureReader || (refs_org_objectweb_asm_signature_SignatureReader = vm.org_objectweb_asm_signature_SignatureReader(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_desc']);
var lcA9 = stA0;
invoker.accept__VLorg_objectweb_asm_signature_SignatureVisitor_2(lcA9,lcA8);
if ((lcI5) == 0) { gt = 811; break IF; }
c.access$1301__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I(lcA0, (89));
var stA0 = lcA0;var stI1 = (17);var stI2 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false))).access$1400__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2(lcA8);
c.access$1501__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II(stA0, stI1, stI2);
var stA0 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0']);
var stI0 = invoker.lastIndexOf__II(stA0,(47));
var lcI10 = stI0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA1 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0']);
var stA1 = invoker.substring__Ljava_lang_String_2II(stA1,0, (((lcI10) + (1)) | 0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"$JsCallbacks$");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA11 = stA0;
var stA0 = lcA0;var stI1 = (178);var stA2 = lcA11;var stA3 = "VM";var stA4 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA4);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,"L");
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,lcA11);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,";");
var stA4 = invoker.toString__Ljava_lang_String_2(stA4);
c.access$1601__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stI1, stA2, stA3, stA4);
var stA0 = lcA0;var stI1 = (182);var stA2 = lcA11;var stA3 = "current";var stA4 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA4);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,"()L");
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,lcA11);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,";");
var stA4 = invoker.toString__Ljava_lang_String_2(stA4);
c.access$1701__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stI1, stA2, stA3, stA4);
c.access$1801__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I(lcA0, (83));
    }
    X_811: for (;;) { IF: if (gt <= 811) {

if ((lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia']['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_wait4js']) == 0) { gt = 1081; break IF; }
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, (182), "org/netbeans/html/boot/spi/Fn", "invoke", "(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;");
var stA0 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false))).access$800__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2(lcA8);
var stI0 = invoker.getSort__I(stA0);
switch (stI0) {
  case 0: { gt = 884; break IF; }
  case 1: { gt = 919; break IF; }
  case 9: { gt = 894; break IF; }
  case 10: { gt = 894; break IF; }
  default: { gt = 993; break IF; }
}
    }
    X_884: for (;;) { IF: if (gt <= 884) {

(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, (177));
{ gt = 1101; break IF; }
    }
    X_894: for (;;) { IF: if (gt <= 894) {

var stA0 = lcA0;var stI1 = (192);var stA2 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false))).access$800__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2(lcA8);
var stA2 = invoker.getInternalName__Ljava_lang_String_2(stA2);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitTypeInsn__VILjava_lang_String_2'].call(stA0, stI1, stA2);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, (176));
{ gt = 1101; break IF; }
    }
    X_919: for (;;) { IF: if (gt <= 919) {
var stA0 = new vm.org_objectweb_asm_Label;
(refs_org_objectweb_asm_Label || (refs_org_objectweb_asm_Label = vm.org_objectweb_asm_Label(false))).constructor['cons__V'].call(stA0);
var lcA10 = stA0;
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, (89));
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitJumpInsn__VILorg_objectweb_asm_Label_2'].call(lcA0, (198), lcA10);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitTypeInsn__VILjava_lang_String_2'].call(lcA0, (192), "java/lang/Boolean");
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, (182), "java/lang/Boolean", "booleanValue", "()Z");
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, (172));
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitLabel__VLorg_objectweb_asm_Label_2'].call(lcA0, lcA10);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, 3);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, (172));
{ gt = 1101; break IF; }
    }
    X_993: for (;;) { IF: if (gt <= 993) {

(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitTypeInsn__VILjava_lang_String_2'].call(lcA0, (192), "java/lang/Number");
var stA0 = lcA0;var stI1 = (182);var stA2 = "java/lang/Number";var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA4 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false))).access$800__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2(lcA8);
var stA4 = invoker.getClassName__Ljava_lang_String_2(stA4);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,stA4);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"Value");
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
var stA4 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA4);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,"()");
var stA5 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false))).access$800__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2(lcA8);
var stA5 = invoker.getDescriptor__Ljava_lang_String_2(stA5);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,stA5);
var stA4 = invoker.toString__Ljava_lang_String_2(stA4);
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(stA0, stI1, stA2, stA3, stA4);
var stA0 = lcA0;var stA1 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false))).access$800__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2(lcA8);
var stI1 = invoker.getOpcode__II(stA1,(172));
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(stA0, stI1);
{ gt = 1101; break IF; }
    }
    X_1081: for (;;) { IF: if (gt <= 1081) {

(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, (182), "org/netbeans/html/boot/spi/Fn", "invokeLater", "(Ljava/lang/Object;[Ljava/lang/Object;)V");
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, (177));
    }
    X_1101: for (;;) { IF: if (gt <= 1101) {

(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitLabel__VLorg_objectweb_asm_Label_2'].call(lcA0, lcA6);
if ((lcI1) == 0) { gt = 1118; break IF; }
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitCode__V'].call(lcA0);
{ gt = 1159; break IF; }
    }
    X_1118: for (;;) { IF: if (gt <= 1118) {

(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitTypeInsn__VILjava_lang_String_2'].call(lcA0, (187), "java/lang/IllegalStateException");
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, (89));
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitLdcInsn__VLjava_lang_Object_2'].call(lcA0, "No presenter active. Use BrwsrCtx.execute!");
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, (183), "java/lang/IllegalStateException", "<init>", "(Ljava/lang/String;)V");
invoker.visitInsn__VI(lcA0,(191));
    }
    X_1159: for (;;) { IF: if (gt <= 1159) {

return 1;

    }
}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.visitEnd__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitEnd__V'].call(lcA0);
if ((lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia']) === null) { gt = 76; break IF; }
var stI0 = c.generateBody__ZZ.call(lcA0, 0);
if ((stI0) == 0) { gt = 25; break IF; }
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitMaxs__VII'].call(lcA0, 1, 0);
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stA0 = lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0'];var stI1 = (10);var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"$$fn$$");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_name']);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"_");
var stI3 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$000__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0']);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,stI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA0 = stA0.superField__Lorg_objectweb_asm_FieldVisitor_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2(stI1, stA2, "Lorg/netbeans/html/boot/spi/Fn;", null, null);
    }
    X_76: for (;;) { IF: if (gt <= 76) {
return;

    }
}}}
};
c['visitEnd__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.access$301__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I = function(lcA0, lcI1) {
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, lcI1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$401__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II = function(lcA0, lcI1, lcI2) {
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitIntInsn__VII'].call(lcA0, lcI1, lcI2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$501__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II = function(lcA0, lcI1, lcI2) {
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitVarInsn__VII'].call(lcA0, lcI1, lcI2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$601__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcI1, lcA2, lcA3, lcA4) {
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, lcI1, lcA2, lcA3, lcA4);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$701__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I = function(lcA0, lcI1) {
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, lcI1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$901__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I = function(lcA0, lcI1) {
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, lcI1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1001__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II = function(lcA0, lcI1, lcI2) {
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitIntInsn__VII'].call(lcA0, lcI1, lcI2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1101__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II = function(lcA0, lcI1, lcI2) {
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitVarInsn__VII'].call(lcA0, lcI1, lcI2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1201__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I = function(lcA0, lcI1) {
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, lcI1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1301__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I = function(lcA0, lcI1) {
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, lcI1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1501__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II = function(lcA0, lcI1, lcI2) {
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitIntInsn__VII'].call(lcA0, lcI1, lcI2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1601__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcI1, lcA2, lcA3, lcA4) {
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitFieldInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, lcI1, lcA2, lcA3, lcA4);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1701__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcI1, lcA2, lcA3, lcA4) {
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, lcI1, lcA2, lcA3, lcA4);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1801__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I = function(lcA0, lcI1) {
(refs_org_objectweb_asm_MethodVisitor || (refs_org_objectweb_asm_MethodVisitor = vm.org_objectweb_asm_MethodVisitor(false)))['visitInsn__VI'].call(lcA0, lcI1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1900__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_2 = function(lcA0, lcA1) {
c.generateJSBody__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_2.call(lcA0, lcA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.desiredAssertionStatus__Z((refs_org_netbeans_html_boot_impl_FnUtils || (refs_org_netbeans_html_boot_impl_FnUtils = org_netbeans_html_boot_impl_FnUtils(false))).constructor.$class);
if ((stI0) != 0) { gt = 12; break IF; }
var stI0 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
c._$assertionsDisabled(stI0);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethodfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethodfillInstOf });
    org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethodfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$FindInClass$FindInMethod';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_org_objectweb_asm_MethodVisitor;
    var refs_org_netbeans_html_boot_impl_FnUtils$FindInClass;
    var refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno;
    var refs_java_lang_Boolean;
    var refs_org_netbeans_html_boot_impl_FnUtils;
    var refs_java_util_ArrayList;
    var refs_java_lang_StringBuilder;
    var refs_org_objectweb_asm_Label;
    var refs_org_objectweb_asm_Type;
    var refs_java_lang_AssertionError;
    var refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV;
    var refs_org_objectweb_asm_signature_SignatureReader;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_name'] = null;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_desc'] = null;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_access'] = 0;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia'] = null;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_bodyGenerated'] = 0;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod;

vm.org_objectweb_asm_signature_SignatureReader = link('org/objectweb/asm/signature/SignatureReader', function(f) { vm.org_objectweb_asm_signature_SignatureReader =  f; });
vm.java_lang_AssertionError = link('java/lang/AssertionError', function(f) { vm.java_lang_AssertionError =  f; });
vm.org_objectweb_asm_Label = link('org/objectweb/asm/Label', function(f) { vm.org_objectweb_asm_Label =  f; });
vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });

function org_netbeans_html_boot_impl_FnUtils() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.transform___3B_3BLjava_lang_ClassLoader_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new org_netbeans_html_boot_impl_FnUtils$1;
(refs_org_netbeans_html_boot_impl_FnUtils$1 || (refs_org_netbeans_html_boot_impl_FnUtils$1 = org_netbeans_html_boot_impl_FnUtils$1(false))).constructor.cons__V_3B.call(stA0, lcA0);
var lcA2 = stA0;
var stA0 = new org_netbeans_html_boot_impl_FnUtils$FindInClass;
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).constructor.cons__VLjava_lang_ClassLoader_2Lorg_objectweb_asm_ClassVisitor_2.call(stA0, lcA1, null);
var lcA3 = stA0;
invoker.accept__VLorg_objectweb_asm_ClassVisitor_2I(lcA2,lcA3, 0);
var stI0 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$000__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA3);
if ((stI0) <= 0) { gt = 69; break IF; }
var stA0 = new org_netbeans_html_boot_impl_FnUtils$ClassWriterEx;
(refs_org_netbeans_html_boot_impl_FnUtils$ClassWriterEx || (refs_org_netbeans_html_boot_impl_FnUtils$ClassWriterEx = org_netbeans_html_boot_impl_FnUtils$ClassWriterEx(false))).constructor.cons__VLjava_lang_ClassLoader_2Lorg_objectweb_asm_ClassReader_2I.call(stA0, lcA1, lcA2, 3);
var lcA4 = stA0;
var stA0 = new org_netbeans_html_boot_impl_FnUtils$FindInClass;
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).constructor.cons__VLjava_lang_ClassLoader_2Lorg_objectweb_asm_ClassVisitor_2.call(stA0, lcA1, lcA4);
var lcA5 = stA0;
invoker.accept__VLorg_objectweb_asm_ClassVisitor_2I(lcA2,lcA5, 0);
var stA0 = invoker.toByteArray___3B(lcA4);
var lcA0 = stA0;
    }
    X_69: for (;;) { IF: if (gt <= 69) {

return lcA0;

    }
}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.newLoader__Ljava_lang_ClassLoader_2Lorg_netbeans_html_boot_impl_FindResources_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_ClassLoader_2 = function(lcA0, lcA1, lcA2) {
var stA0 = new org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl;
(refs_org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl || (refs_org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl = org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl(false))).constructor.cons__VLjava_lang_ClassLoader_2Lorg_netbeans_html_boot_impl_FindResources_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA0, lcA2, lcA0, lcA1);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.callback__Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new org_netbeans_html_boot_impl_FnUtils$2;
(refs_org_netbeans_html_boot_impl_FnUtils$2 || (refs_org_netbeans_html_boot_impl_FnUtils$2 = org_netbeans_html_boot_impl_FnUtils$2(false))).constructor.cons__V.call(stA0);
var stA0 = stA0.parse__Ljava_lang_String_2Ljava_lang_String_2(lcA0);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtilsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtilsfillInstOf });
    org_netbeans_html_boot_impl_FnUtilsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_org_netbeans_html_boot_impl_FnUtils$1;
    var refs_org_netbeans_html_boot_impl_FnUtils$FindInClass;
    var refs_org_netbeans_html_boot_impl_FnUtils$ClassWriterEx;
    var refs_org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl;
    var refs_org_netbeans_html_boot_impl_FnUtils$2;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_FnUtils = org_netbeans_html_boot_impl_FnUtils;


function org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl;
  if (!CLS.$class) {
    var pp = org_netbeans_html_boot_impl_JsClassLoader(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._f = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl_f'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl_f']; };
  m = c._d = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl_d'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl_d']; };
    m = CLS.cons__VLjava_lang_ClassLoader_2Lorg_netbeans_html_boot_impl_FindResources_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
(refs_org_netbeans_html_boot_impl_JsClassLoader || (refs_org_netbeans_html_boot_impl_JsClassLoader = org_netbeans_html_boot_impl_JsClassLoader(false))).constructor.cons__VLjava_lang_ClassLoader_2.call(lcA0, lcA1);
var stA0 = lcA0;var stI1 = invoker.desiredAssertionStatus__Z((refs_org_netbeans_html_boot_impl_JsClassLoader || (refs_org_netbeans_html_boot_impl_JsClassLoader = org_netbeans_html_boot_impl_JsClassLoader(false))).constructor.$class);
invoker.setDefaultAssertionStatus__VZ(stA0,stI1);
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl_f'] = lcA2;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl_d'] = lcA3;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.findResource__Ljava_net_URL_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c.res__Ljava_util_List_2Ljava_lang_String_2Z.call(lcA0, lcA1, 1);
var lcA2 = stA0;
var stI0 = invoker.isEmpty__Z(lcA2);
if ((stI0) == 0) { gt = 20; break IF; }
var stA0 = null;{ gt = 30; break IF; }
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = invoker.get__Ljava_lang_Object_2I(lcA2,0);
if (stA0 !== null && !stA0['$instOf_java_net_URL']) vm.java_lang_Class(false).castEx(stA0, 'java.net.URL');
    }
    X_30: for (;;) { IF: if (gt <= 30) {
return stA0;

    }
}}}
};
c['findResource__Ljava_net_URL_2Ljava_lang_String_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.findResources__Ljava_util_Enumeration_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = c.res__Ljava_util_List_2Ljava_lang_String_2Z.call(lcA0, lcA1, 0);
var stA0 = (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['enumeration__Ljava_util_Enumeration_2Ljava_util_Collection_2'](stA0);
return stA0;

};
c['findResources__Ljava_util_Enumeration_2Ljava_lang_String_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.res__Ljava_util_List_2Ljava_lang_String_2Z = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl_f'].findResources__VLjava_lang_String_2Ljava_util_Collection_2Z(lcA1, lcA3, lcI2);
return lcA3;

};
    m.access = 2;
    m.cls = CLS;
    m = c.findClass__Ljava_lang_Class_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA1,"javafx");
if ((stI0) == 0) { gt = 14; break IF; }
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2'](lcA1);
return stA0;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA1,"netscape");
if ((stI0) == 0) { gt = 28; break IF; }
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2'](lcA1);
return stA0;
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA1,"com.sun");
if ((stI0) == 0) { gt = 42; break IF; }
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2'](lcA1);
return stA0;
    }
    X_42: for (;;) { IF: if (gt <= 42) {

var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA1,"org.netbeans.html.context.spi");
if ((stI0) == 0) { gt = 56; break IF; }
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2'](lcA1);
return stA0;
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA1,"net.java.html.BrwsrCtx");
if ((stI0) == 0) { gt = 70; break IF; }
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2'](lcA1);
return stA0;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stA0 = lcA1;var stA1 = invoker.getName__Ljava_lang_String_2((refs_org_netbeans_html_boot_impl_JsClassLoader || (refs_org_netbeans_html_boot_impl_JsClassLoader = org_netbeans_html_boot_impl_JsClassLoader(false))).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 85; break IF; }
return (refs_org_netbeans_html_boot_impl_JsClassLoader || (refs_org_netbeans_html_boot_impl_JsClassLoader = org_netbeans_html_boot_impl_JsClassLoader(false))).constructor.$class;
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stA0 = lcA1;var stA1 = invoker.getName__Ljava_lang_String_2((refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = org_netbeans_html_boot_spi_Fn(false))).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 100; break IF; }
return (refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = org_netbeans_html_boot_spi_Fn(false))).constructor.$class;
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stA0 = lcA1;var stA1 = invoker.getName__Ljava_lang_String_2((refs_org_netbeans_html_boot_spi_Fn$Presenter || (refs_org_netbeans_html_boot_spi_Fn$Presenter = org_netbeans_html_boot_spi_Fn$Presenter(false))).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 115; break IF; }
return (refs_org_netbeans_html_boot_spi_Fn$Presenter || (refs_org_netbeans_html_boot_spi_Fn$Presenter = org_netbeans_html_boot_spi_Fn$Presenter(false))).constructor.$class;
    }
    X_115: for (;;) { IF: if (gt <= 115) {

var stA0 = lcA1;var stA1 = invoker.getName__Ljava_lang_String_2((refs_org_netbeans_html_boot_spi_Fn$ToJavaScript || (refs_org_netbeans_html_boot_spi_Fn$ToJavaScript = org_netbeans_html_boot_spi_Fn$ToJavaScript(false))).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 130; break IF; }
return (refs_org_netbeans_html_boot_spi_Fn$ToJavaScript || (refs_org_netbeans_html_boot_spi_Fn$ToJavaScript = org_netbeans_html_boot_spi_Fn$ToJavaScript(false))).constructor.$class;
    }
    X_130: for (;;) { IF: if (gt <= 130) {

var stA0 = lcA1;var stA1 = invoker.getName__Ljava_lang_String_2((refs_org_netbeans_html_boot_spi_Fn$FromJavaScript || (refs_org_netbeans_html_boot_spi_Fn$FromJavaScript = org_netbeans_html_boot_spi_Fn$FromJavaScript(false))).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 145; break IF; }
return (refs_org_netbeans_html_boot_spi_Fn$FromJavaScript || (refs_org_netbeans_html_boot_spi_Fn$FromJavaScript = org_netbeans_html_boot_spi_Fn$FromJavaScript(false))).constructor.$class;
    }
    X_145: for (;;) { IF: if (gt <= 145) {

var stA0 = lcA1;var stA1 = invoker.getName__Ljava_lang_String_2((refs_org_netbeans_html_boot_impl_FnUtils || (refs_org_netbeans_html_boot_impl_FnUtils = org_netbeans_html_boot_impl_FnUtils(false))).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 160; break IF; }
return (refs_org_netbeans_html_boot_impl_FnUtils || (refs_org_netbeans_html_boot_impl_FnUtils = org_netbeans_html_boot_impl_FnUtils(false))).constructor.$class;
    }
    X_160: for (;;) { IF: if (gt <= 160) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,"org.netbeans.html.boot.spi.Fn");
if ((stI0) != 0) { gt = 187; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,"org.netbeans.html.boot.impl.FnUtils");
if ((stI0) != 0) { gt = 187; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,"org.netbeans.html.boot.impl.FnContext");
if ((stI0) == 0) { gt = 192; break IF; }
    }
    X_187: for (;;) { IF: if (gt <= 187) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2'](lcA1);
return stA0;
    }
    X_192: for (;;) { IF: if (gt <= 192) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.replace__Ljava_lang_String_2CC(lcA1,(46), (47));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.findResource__Ljava_net_URL_2Ljava_lang_String_2(stA0,stA1);
var lcA2 = stA0;
if ((lcA2) === null) { gt = 434; break IF; }
var lcA3 = null;
try {
var stA0 = invoker.openStream__Ljava_io_InputStream_2(lcA2);
var lcA3 = stA0;
var stI0 = invoker.available__I(lcA3);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[B', null, stI0);
var lcA4 = stA0;
var lcI5 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 374; break IF; }}
var stA0 = e;{ gt = 405; break IF; }
}    }
    X_245: for (;;) { IF: if (gt <= 245) {
try {
if ((lcI5) >= ((lcA4).length)) { gt = 312; break IF; }
var stI0 = invoker.read__I_3BII(lcA3,lcA4, lcI5, ((((lcA4).length) - (lcI5)) | 0));
var lcI6 = stI0;
if ((lcI6) != (-1)) { gt = 302; break IF; }
var stA0 = new vm.java_io_IOException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't read ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA2);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_io_IOException || (refs_java_io_IOException = vm.java_io_IOException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 374; break IF; }}
var stA0 = e;{ gt = 405; break IF; }
}    }
    X_302: for (;;) { IF: if (gt <= 302) {
try {
var lcI5 = (((lcI5) + (lcI6)) | 0);
{ gt = 0; continue X_245; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 374; break IF; }}
var stA0 = e;{ gt = 405; break IF; }
}    }
    X_312: for (;;) { IF: if (gt <= 312) {
try {
invoker.close__V(lcA3);
var lcA3 = null;
var stI0 = (refs_org_netbeans_html_boot_impl_JsPkgCache || (refs_org_netbeans_html_boot_impl_JsPkgCache = org_netbeans_html_boot_impl_JsPkgCache(false))).process__ZLjava_lang_ClassLoader_2Ljava_lang_String_2(lcA0, lcA1);
if ((stI0) == 0) { gt = 334; break IF; }
var stA0 = (refs_org_netbeans_html_boot_impl_FnUtils || (refs_org_netbeans_html_boot_impl_FnUtils = org_netbeans_html_boot_impl_FnUtils(false))).transform___3B_3BLjava_lang_ClassLoader_2(lcA4, lcA0);
var lcA4 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 374; break IF; }}
var stA0 = e;{ gt = 405; break IF; }
}    }
    X_334: for (;;) { IF: if (gt <= 334) {
try {
var stA0 = invoker.defineClass__Ljava_lang_Class_2Ljava_lang_String_2_3BII(lcA0,lcA1, lcA4, 0, (lcA4).length);
var lcA6 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 374; break IF; }}
var stA0 = e;{ gt = 405; break IF; }
}try {
if ((lcA3) === null) { gt = 355; break IF; }
invoker.close__V(lcA3);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 358; break IF; }}
throw e;
}    }
    X_355: for (;;) { IF: if (gt <= 355) {
{ gt = 371; break IF; }
    }
    X_358: for (;;) { IF: if (gt <= 358) {
var lcA7 = stA0;
var stA0 = new vm.java_lang_ClassNotFoundException;
(refs_java_lang_ClassNotFoundException || (refs_java_lang_ClassNotFoundException = vm.java_lang_ClassNotFoundException(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_Throwable_2'].call(stA0, null, lcA7);
{ var stA0 = stA0; throw stA0; }
    }
    X_371: for (;;) { IF: if (gt <= 371) {

return lcA6;
    }
    X_374: for (;;) { IF: if (gt <= 374) {
try {var lcA4 = stA0;
var stA0 = new vm.java_lang_ClassNotFoundException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't load ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA1);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_ClassNotFoundException || (refs_java_lang_ClassNotFoundException = vm.java_lang_ClassNotFoundException(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_Throwable_2'].call(stA1, stA2, lcA4);
{ var stA0 = stA0; throw stA0; }
} catch (e) {
var stA0 = e;{ gt = 405; break IF; }
}    }
    X_405: for (;;) { IF: if (gt <= 405) {
try {var lcA8 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_405; }
}try {
if ((lcA3) === null) { gt = 415; break IF; }
invoker.close__V(lcA3);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 418; break IF; }}
throw e;
}    }
    X_415: for (;;) { IF: if (gt <= 415) {
{ gt = 431; break IF; }
    }
    X_418: for (;;) { IF: if (gt <= 418) {
var lcA9 = stA0;
var stA0 = new vm.java_lang_ClassNotFoundException;
(refs_java_lang_ClassNotFoundException || (refs_java_lang_ClassNotFoundException = vm.java_lang_ClassNotFoundException(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_Throwable_2'].call(stA0, null, lcA9);
{ var stA0 = stA0; throw stA0; }
    }
    X_431: for (;;) { IF: if (gt <= 431) {

{ var stA0 = lcA8; throw lcA8; }
    }
    X_434: for (;;) { IF: if (gt <= 434) {

var stA0 = (refs_org_netbeans_html_boot_impl_JsClassLoader || (refs_org_netbeans_html_boot_impl_JsClassLoader = org_netbeans_html_boot_impl_JsClassLoader(false)))['findClass__Ljava_lang_Class_2Ljava_lang_String_2'].call(lcA0, lcA1);
return stA0;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
c['findClass__Ljava_lang_Class_2Ljava_lang_String_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = invoker.defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl_d'],lcA1, lcA2);
return stA0;

};
    m.access = 132;
    m.cls = CLS;
    m = c.loadScript__VLjava_io_Reader_2 = function(lcA1) {
  var  lcA0 = this;
invoker.loadScript__VLjava_io_Reader_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl_d'],lcA1);
return;

};
    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImplfillInstOf });
    org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImplfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$JsClassLoaderImpl';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_boot_impl_JsClassLoader;
    var refs_java_util_Collections;
    var refs_java_util_ArrayList;
    var refs_java_lang_Class;
    var refs_org_netbeans_html_boot_spi_Fn;
    var refs_org_netbeans_html_boot_spi_Fn$Presenter;
    var refs_org_netbeans_html_boot_spi_Fn$ToJavaScript;
    var refs_org_netbeans_html_boot_spi_Fn$FromJavaScript;
    var refs_org_netbeans_html_boot_impl_FnUtils;
    var refs_java_lang_StringBuilder;
    var refs_java_io_IOException;
    var refs_org_netbeans_html_boot_impl_JsPkgCache;
    var refs_java_lang_ClassNotFoundException;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl_f'] = null;
    this['fld_org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl_d'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl = org_netbeans_html_boot_impl_FnUtils$JsClassLoaderImpl;


function org_netbeans_html_boot_impl_JsPkgCache() {
  var m;
  var CLS = org_netbeans_html_boot_impl_JsPkgCache;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._props = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_JsPkgCache_props'] = v; return this['fld_org_netbeans_html_boot_impl_JsPkgCache_props']; };
  CLS['fld_CACHE'] = null;
  m = c._CACHE = function (v) {  if (arguments.length == 1) CLS['fld_CACHE'] = v; return CLS['fld_CACHE']; };
  CLS['fld_NONE'] = null;
  m = c._NONE = function (v) {  if (arguments.length == 1) CLS['fld_NONE'] = v; return CLS['fld_NONE']; };
  CLS['fld_LOG'] = null;
  m = c._LOG = function (v) {  if (arguments.length == 1) CLS['fld_LOG'] = v; return CLS['fld_LOG']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = new vm.java_util_WeakHashMap;
(refs_java_util_WeakHashMap || (refs_java_util_WeakHashMap = vm.java_util_WeakHashMap(false))).constructor['cons__V'].call(stA1);
stA0['fld_org_netbeans_html_boot_impl_JsPkgCache_props'] = stA1;
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.process__ZLjava_lang_ClassLoader_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,"org.netbeans.html.boot.impl.Test");
if ((stI0) == 0) { gt = 11; break IF; }
return 1;
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stA0 = c._CACHE();var stA1 = stA0;
var lcA5 = stA1;
try {
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(c._CACHE(),lcA0);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_boot_impl_JsPkgCache']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.boot.impl.JsPkgCache');
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 54; break IF; }
var stA0 = new org_netbeans_html_boot_impl_JsPkgCache;
c.constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(c._CACHE(),lcA0, lcA3);
} catch (e) {
var stA0 = e;{ gt = 128; break IF; }
}    }
    X_54: for (;;) { IF: if (gt <= 54) {
try {
var stI0 = invoker.lastIndexOf__II(lcA1,(46));
var lcI6 = stI0;
var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,0, (((lcI6) + (1)) | 0));
var stA0 = invoker.replace__Ljava_lang_String_2CC(stA0,(46), (47));
var lcA4 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA3['fld_org_netbeans_html_boot_impl_JsPkgCache_props'],lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Set']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Set');
var lcA2 = stA0;
if ((lcA2) !== (c._NONE())) { gt = 107; break IF; }
} catch (e) {
var stA0 = e;{ gt = 128; break IF; }
}return 0;
    }
    X_107: for (;;) { IF: if (gt <= 107) {
try {
if ((lcA2) === null) { gt = 122; break IF; }
var stI0 = invoker.contains__ZLjava_lang_Object_2(lcA2,lcA1);
} catch (e) {
var stA0 = e;{ gt = 128; break IF; }
}return stI0;
    }
    X_122: for (;;) { IF: if (gt <= 122) {
try {
} catch (e) {
var stA0 = e;{ gt = 128; break IF; }
}{ gt = 136; break IF; }
    }
    X_128: for (;;) { IF: if (gt <= 128) {
try {var lcA7 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_128; }
}
{ var stA0 = lcA7; throw lcA7; }
    }
    X_136: for (;;) { IF: if (gt <= 136) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"net.java.html.js.classes");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA5 = stA0;
try {
var stA0 = invoker.getResources__Ljava_util_Enumeration_2Ljava_lang_String_2(lcA0,lcA5);
var lcA6 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 169; break IF; }}
throw e;
}{ gt = 174; break IF; }
    }
    X_169: for (;;) { IF: if (gt <= 169) {
var lcA7 = stA0;
var lcA6 = null;
    }
    X_174: for (;;) { IF: if (gt <= 174) {

if ((lcA6) === null) { gt = 189; break IF; }
var stI0 = invoker.hasMoreElements__Z(lcA6);
if ((stI0) != 0) { gt = 224; break IF; }
    }
    X_189: for (;;) { IF: if (gt <= 189) {

var stA0 = c._CACHE();var stA1 = stA0;
var lcA7 = stA1;
try {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3['fld_org_netbeans_html_boot_impl_JsPkgCache_props'],lcA4, c._NONE());
} catch (e) {
var stA0 = e;{ gt = 216; break IF; }
}return 0;
    }
    X_216: for (;;) { IF: if (gt <= 216) {
try {var lcA8 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_216; }
}
{ var stA0 = lcA8; throw lcA8; }
    }
    X_224: for (;;) { IF: if (gt <= 224) {
try {var stA0 = new vm.java_util_TreeSet;
(refs_java_util_TreeSet || (refs_java_util_TreeSet = vm.java_util_TreeSet(false))).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 320; break IF; }}
throw e;
}    }
    X_233: for (;;) { IF: if (gt <= 233) {
try {
var stI0 = invoker.hasMoreElements__Z(lcA6);
if ((stI0) == 0) { gt = 314; break IF; }
var stA0 = invoker.nextElement__Ljava_lang_Object_2(lcA6);
if (stA0 !== null && !stA0['$instOf_java_net_URL']) vm.java_lang_Class(false).castEx(stA0, 'java.net.URL');
var lcA8 = stA0;
var stA0 = new vm.java_io_BufferedReader;
var stA1 = stA0;var stA2 = new vm.java_io_InputStreamReader;
var stA3 = stA2;var stA4 = invoker.openStream__Ljava_io_InputStream_2(lcA8);
(refs_java_io_InputStreamReader || (refs_java_io_InputStreamReader = vm.java_io_InputStreamReader(false))).constructor['cons__VLjava_io_InputStream_2Ljava_lang_String_2'].call(stA3, stA4, "UTF-8");
(refs_java_io_BufferedReader || (refs_java_io_BufferedReader = vm.java_io_BufferedReader(false))).constructor['cons__VLjava_io_Reader_2'].call(stA1, stA2);
var lcA9 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 320; break IF; }}
throw e;
}    }
    X_278: for (;;) { IF: if (gt <= 278) {
try {
var stA0 = invoker.readLine__Ljava_lang_String_2(lcA9);
var lcA10 = stA0;
if ((lcA10) !== null) { gt = 293; break IF; }
{ gt = 306; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 320; break IF; }}
throw e;
}    }
    X_293: for (;;) { IF: if (gt <= 293) {
try {
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA7,lcA10);
{ gt = 0; continue X_278; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 320; break IF; }}
throw e;
}    }
    X_306: for (;;) { IF: if (gt <= 306) {
try {
invoker.close__V(lcA9);
{ gt = 0; continue X_233; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 320; break IF; }}
throw e;
}    }
    X_314: for (;;) { IF: if (gt <= 314) {
try {
var lcA2 = lcA7;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 320; break IF; }}
throw e;
}{ gt = 357; break IF; }
    }
    X_320: for (;;) { IF: if (gt <= 320) {
var lcA7 = stA0;
var stA0 = c._LOG();var stA1 = (refs_java_util_logging_Level || (refs_java_util_logging_Level = vm.java_util_logging_Level(false)))['_WARNING']();var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't read ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA5);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,stA1, stA2, lcA7);
var lcA2 = c._NONE();
    }
    X_357: for (;;) { IF: if (gt <= 357) {

var stA0 = c._CACHE();var stA1 = stA0;
var lcA7 = stA1;
try {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3['fld_org_netbeans_html_boot_impl_JsPkgCache_props'],lcA4, lcA2);
var stI0 = invoker.contains__ZLjava_lang_Object_2(lcA2,lcA1);
} catch (e) {
var stA0 = e;{ gt = 388; break IF; }
}return stI0;
    }
    X_388: for (;;) { IF: if (gt <= 388) {
try {var lcA11 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_388; }
}
{ var stA0 = lcA11; throw lcA11; }

    }
}}}}}}}}}}}}}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.java_util_WeakHashMap;
(refs_java_util_WeakHashMap || (refs_java_util_WeakHashMap = vm.java_util_WeakHashMap(false))).constructor['cons__V'].call(stA0);
c._CACHE(stA0);
var stA0 = (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['emptySet__Ljava_util_Set_2']();
c._NONE(stA0);
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stA0 = (refs_java_util_logging_Logger || (refs_java_util_logging_Logger = vm.java_util_logging_Logger(false)))['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
c._LOG(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_JsPkgCachefillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_JsPkgCache', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_JsPkgCachefillInstOf });
    org_netbeans_html_boot_impl_JsPkgCachefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/JsPkgCache';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_Object;
    var refs_java_util_WeakHashMap;
    var refs_java_lang_StringBuilder;
    var refs_java_util_TreeSet;
    var refs_java_io_InputStreamReader;
    var refs_java_io_BufferedReader;
    var refs_java_util_logging_Level;
    var refs_java_util_Collections;
    var refs_java_util_logging_Logger;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_boot_impl_JsPkgCache_props'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_JsPkgCache = org_netbeans_html_boot_impl_JsPkgCache;

vm.java_util_TreeSet = link('java/util/TreeSet', function(f) { vm.java_util_TreeSet =  f; });
vm.java_util_WeakHashMap = link('java/util/WeakHashMap', function(f) { vm.java_util_WeakHashMap =  f; });

function org_netbeans_html_boot_spi_Fn$FromJavaScript() {
  var m;
  var CLS = org_netbeans_html_boot_spi_Fn$FromJavaScript;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.toJava__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
};
c['toJava__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_spi_Fn$FromJavaScriptfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_spi_Fn$FromJavaScriptfillInstOf });
    org_netbeans_html_boot_spi_Fn$FromJavaScriptfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/spi/Fn$FromJavaScript';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1537;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_spi_Fn$FromJavaScript = registerClass(exports,'org_netbeans_html_boot_spi_Fn$FromJavaScript',org_netbeans_html_boot_spi_Fn$FromJavaScript);


function org_netbeans_html_boot_spi_Fn$ToJavaScript() {
  var m;
  var CLS = org_netbeans_html_boot_spi_Fn$ToJavaScript;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
};
c['toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_spi_Fn$ToJavaScriptfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_spi_Fn$ToJavaScript', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_spi_Fn$ToJavaScriptfillInstOf });
    org_netbeans_html_boot_spi_Fn$ToJavaScriptfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/spi/Fn$ToJavaScript';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1537;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_spi_Fn$ToJavaScript = registerClass(exports,'org_netbeans_html_boot_spi_Fn$ToJavaScript',org_netbeans_html_boot_spi_Fn$ToJavaScript);

vm.java_util_Collections = link('java/util/Collections', function(f) { vm.java_util_Collections =  f; });

function org_netbeans_html_boot_impl_JsClassLoader() {
  var m;
  var CLS = org_netbeans_html_boot_impl_JsClassLoader;
  if (!CLS.$class) {
    var pp = vm.java_lang_ClassLoader(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLjava_lang_ClassLoader_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_ClassLoader || (refs_java_lang_ClassLoader = vm.java_lang_ClassLoader(false))).constructor['cons__VLjava_lang_ClassLoader_2'].call(lcA0, lcA1);
var stA0 = lcA0;var stI1 = invoker.desiredAssertionStatus__Z(c.constructor.$class);
invoker.setDefaultAssertionStatus__VZ(stA0,stI1);
return;

};
CLS['cons__VLjava_lang_ClassLoader_2'] = m;

    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_JsClassLoaderfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_JsClassLoader', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_JsClassLoaderfillInstOf });
    org_netbeans_html_boot_impl_JsClassLoaderfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/JsClassLoader';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_ClassLoader;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_JsClassLoader = org_netbeans_html_boot_impl_JsClassLoader;

vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });

function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_AnnotationVisitor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._args = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_args'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_args']; };
  m = c._body = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_body'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_body']; };
  m = c._javacall = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_javacall'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_javacall']; };
  m = c._wait4js = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_wait4js'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_wait4js']; };
  m = c._keepAlive = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_keepAlive'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_keepAlive']; };
  CLS['fld_$assertionsDisabled'] = 0;
  m = c._$assertionsDisabled = function (v) {  if (arguments.length == 1) CLS['fld_$assertionsDisabled'] = v; return CLS['fld_$assertionsDisabled']; };
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_this$1'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_this$1']; };
    m = CLS.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_this$1'] = lcA1;
(refs_org_objectweb_asm_AnnotationVisitor || (refs_org_objectweb_asm_AnnotationVisitor = vm.org_objectweb_asm_AnnotationVisitor(false))).constructor['cons__VI'].call(lcA0, 262144);
var stA0 = lcA0;var stA1 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA1);
stA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_args'] = stA1;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_javacall'] = 0;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_wait4js'] = 1;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_keepAlive'] = 1;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.visit__VLjava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== null) { gt = 19; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(lcA2, 'java.lang.String');
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_args'],lcA2);
return;
    }
    X_19: for (;;) { IF: if (gt <= 19) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,"javacall");
if ((stI0) == 0) { gt = 40; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(lcA2, 'java.lang.Boolean');
var stA0 = lcA0;var stI1 = invoker.booleanValue__Z(lcA2);
stA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_javacall'] = stI1;
return;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,"wait4js");
if ((stI0) == 0) { gt = 61; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(lcA2, 'java.lang.Boolean');
var stA0 = lcA0;var stI1 = invoker.booleanValue__Z(lcA2);
stA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_wait4js'] = stI1;
return;
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,"keepAlive");
if ((stI0) == 0) { gt = 82; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(lcA2, 'java.lang.Boolean');
var stA0 = lcA0;var stI1 = invoker.booleanValue__Z(lcA2);
stA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_keepAlive'] = stI1;
return;
    }
    X_82: for (;;) { IF: if (gt <= 82) {

if ((c._$assertionsDisabled()) != 0) { gt = 105; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,"body");
if ((stI0) != 0) { gt = 105; break IF; }
var stA0 = new vm.java_lang_AssertionError;
(refs_java_lang_AssertionError || (refs_java_lang_AssertionError = vm.java_lang_AssertionError(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_105: for (;;) { IF: if (gt <= 105) {

if (lcA2 !== null && !lcA2['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(lcA2, 'java.lang.String');
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_body'] = lcA2;
return;

    }
}}}}}}
};
c['visit__VLjava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitArray__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
return lcA0;

};
c['visitArray__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitEnd__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_body']) === null) { gt = 15; break IF; }
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false))).access$1900__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_this$1'], lcA0);
    }
    X_15: for (;;) { IF: if (gt <= 15) {
return;

    }
}}
};
c['visitEnd__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.desiredAssertionStatus__Z((refs_org_netbeans_html_boot_impl_FnUtils || (refs_org_netbeans_html_boot_impl_FnUtils = org_netbeans_html_boot_impl_FnUtils(false))).constructor.$class);
if ((stI0) != 0) { gt = 12; break IF; }
var stI0 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
c._$assertionsDisabled(stI0);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnnofillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnnofillInstOf });
    org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnnofillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$FindInClass$FindInMethod$FindInAnno';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_org_objectweb_asm_AnnotationVisitor;
    var refs_java_util_ArrayList;
    var refs_java_lang_AssertionError;
    var refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod;
    var refs_org_netbeans_html_boot_impl_FnUtils;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_args'] = null;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_body'] = null;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_javacall'] = 0;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_wait4js'] = 0;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_keepAlive'] = 0;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno;

vm.org_objectweb_asm_AnnotationVisitor = link('org/objectweb/asm/AnnotationVisitor', function(f) { vm.org_objectweb_asm_AnnotationVisitor =  f; });

function org_netbeans_html_boot_impl_FnUtils$FindInClass() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$FindInClass;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_ClassVisitor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._name = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_name'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_name']; };
  m = c._found = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_found'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_found']; };
  m = c._resource = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_resource'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_resource']; };
    m = CLS.cons__VLjava_lang_ClassLoader_2Lorg_objectweb_asm_ClassVisitor_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
(refs_org_objectweb_asm_ClassVisitor || (refs_org_objectweb_asm_ClassVisitor = vm.org_objectweb_asm_ClassVisitor(false))).constructor['cons__VILorg_objectweb_asm_ClassVisitor_2'].call(lcA0, 262144, lcA2);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.visit__VIILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(lcI1, lcI2, lcA3, lcA4, lcA5, lcA6) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_name'] = lcA3;
(refs_org_objectweb_asm_ClassVisitor || (refs_org_objectweb_asm_ClassVisitor = vm.org_objectweb_asm_ClassVisitor(false)))['visit__VIILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_String_2'].call(lcA0, lcI1, lcI2, lcA3, lcA4, lcA5, lcA6);
return;

};
c['visit__VIILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitAnnotation__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2Z = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_org_objectweb_asm_ClassVisitor || (refs_org_objectweb_asm_ClassVisitor = vm.org_objectweb_asm_ClassVisitor(false)))['visitAnnotation__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2Z'].call(lcA0, lcA1, lcI2);
var lcA3 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2("Lnet/java/html/js/JavaScriptResource;",lcA1);
if ((stI0) == 0) { gt = 26; break IF; }
var stA0 = new org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource;
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource = org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource(false))).constructor.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass_2Lorg_objectweb_asm_AnnotationVisitor_2.call(stA0, lcA0, lcA3);
return stA0;
    }
    X_26: for (;;) { IF: if (gt <= 26) {

return lcA3;

    }
}}
};
c['visitAnnotation__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitMethod__Lorg_objectweb_asm_MethodVisitor_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(lcI1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = new org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod;
var stA1 = stA0;var stA2 = lcA0;var stI3 = lcI1;var stA4 = lcA2;var stA5 = lcA3;var stA6 = (refs_org_objectweb_asm_ClassVisitor || (refs_org_objectweb_asm_ClassVisitor = vm.org_objectweb_asm_ClassVisitor(false)))['visitMethod__Lorg_objectweb_asm_MethodVisitor_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_String_2'].call(lcA0, (lcI1 & (-257)), lcA2, lcA3, lcA4, lcA5);
(refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false))).constructor.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass_2ILjava_lang_String_2Ljava_lang_String_2Lorg_objectweb_asm_MethodVisitor_2.call(stA1, stA2, stI3, stA4, stA5, stA6);
return stA0;

};
c['visitMethod__Lorg_objectweb_asm_MethodVisitor_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitField__Lorg_objectweb_asm_FieldVisitor_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcI1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA2,"$$fn$$");
if ((stI0) == 0) { gt = 11; break IF; }
return null;
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stA0 = lcA0.superField__Lorg_objectweb_asm_FieldVisitor_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2(lcI1, lcA2, lcA3, lcA4, lcA5);
return stA0;

    }
}}
};
c['visitField__Lorg_objectweb_asm_FieldVisitor_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.superField__Lorg_objectweb_asm_FieldVisitor_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcI1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = (refs_org_objectweb_asm_ClassVisitor || (refs_org_objectweb_asm_ClassVisitor = vm.org_objectweb_asm_ClassVisitor(false)))['visitField__Lorg_objectweb_asm_FieldVisitor_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(lcA0, lcI1, lcA2, lcA3, lcA4, lcA5);
return stA0;

};
    m.access = 16;
    m.cls = CLS;
    m = c.access$000__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_found'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$008__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = stA0;
var stI1 = stA1['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_found'];var stI2 = stI1, stA1 = stA0, stI0 = stI2;
stA1['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_found'] = (((stI2) + (1)) | 0);
return stI0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_name'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_resource'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$202__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = lcA0;var stA1 = lcA1;var stA2 = stA1, stA1 = stA0, stA0 = stA2;
stA1['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_resource'] = stA2;
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$FindInClassfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$FindInClass', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$FindInClassfillInstOf });
    org_netbeans_html_boot_impl_FnUtils$FindInClassfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$FindInClass';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_org_objectweb_asm_ClassVisitor;
    var refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource;
    var refs_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_name'] = null;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_found'] = 0;
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_resource'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass;


function org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_AnnotationVisitor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource_this$0'] = v; return this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource_this$0']; };
    m = CLS.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass_2Lorg_objectweb_asm_AnnotationVisitor_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource_this$0'] = lcA1;
(refs_org_objectweb_asm_AnnotationVisitor || (refs_org_objectweb_asm_AnnotationVisitor = vm.org_objectweb_asm_AnnotationVisitor(false))).constructor['cons__VILorg_objectweb_asm_AnnotationVisitor_2'].call(lcA0, 262144, lcA2);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.visit__VLjava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

(refs_org_objectweb_asm_AnnotationVisitor || (refs_org_objectweb_asm_AnnotationVisitor = vm.org_objectweb_asm_AnnotationVisitor(false)))['visit__VLjava_lang_String_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2);
if (lcA2 !== null && !lcA2['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(lcA2, 'java.lang.String');
var lcA3 = lcA2;
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA3,"/");
if ((stI0) == 0) { gt = 32; break IF; }
var stA0 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$202__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2Ljava_lang_String_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource_this$0'], lcA3);
{ gt = 90; break IF; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stA0 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource_this$0']);
var stI0 = invoker.lastIndexOf__II(stA0,(47));
var lcI4 = stI0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA1 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource_this$0']);
var stA1 = invoker.substring__Ljava_lang_String_2II(stA1,0, (((lcI4) + (1)) | 0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA3);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA5 = stA0;
var stA0 = (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass || (refs_org_netbeans_html_boot_impl_FnUtils$FindInClass = org_netbeans_html_boot_impl_FnUtils$FindInClass(false))).access$202__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2Ljava_lang_String_2(lcA0['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource_this$0'], lcA5);
    }
    X_90: for (;;) { IF: if (gt <= 90) {
return;

    }
}}}
};
c['visit__VLjava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResourcefillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResourcefillInstOf });
    org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResourcefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$FindInClass$LoadResource';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_org_objectweb_asm_AnnotationVisitor;
    var refs_org_netbeans_html_boot_impl_FnUtils$FindInClass;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource = org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource;

vm.org_objectweb_asm_ClassVisitor = link('org/objectweb/asm/ClassVisitor', function(f) { vm.org_objectweb_asm_ClassVisitor =  f; });
vm.org_objectweb_asm_MethodVisitor = link('org/objectweb/asm/MethodVisitor', function(f) { vm.org_objectweb_asm_MethodVisitor =  f; });
vm.org_objectweb_asm_Type = link('org/objectweb/asm/Type', function(f) { vm.org_objectweb_asm_Type =  f; });
vm.org_objectweb_asm_signature_SignatureVisitor = link('org/objectweb/asm/signature/SignatureVisitor', function(f) { vm.org_objectweb_asm_signature_SignatureVisitor =  f; });

function org_netbeans_html_boot_impl_JavaScriptProcesor$1() {
  var m;
  var CLS = org_netbeans_html_boot_impl_JavaScriptProcesor$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$SwitchMap$javax$lang$model$type$TypeKind'] = null;
  m = c._$SwitchMap$javax$lang$model$type$TypeKind = function (v) {  if (arguments.length == 1) CLS['fld_$SwitchMap$javax$lang$model$type$TypeKind'] = v; return CLS['fld_$SwitchMap$javax$lang$model$type$TypeKind']; };
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = (refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['values___3Ljavax_lang_model_type_TypeKind_2']();
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, (stA0).length);
c._$SwitchMap$javax$lang$model$type$TypeKind(stA0);
try {
var stA0 = c._$SwitchMap$javax$lang$model$type$TypeKind();var stI1 = invoker.ordinal__I((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_INT']());
Array.at(stA0, stI1, 1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 23; break IF; }}
throw e;
}{ gt = 24; break IF; }
    }
    X_23: for (;;) { IF: if (gt <= 23) {
var lcA0 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {
try {
var stA0 = c._$SwitchMap$javax$lang$model$type$TypeKind();var stI1 = invoker.ordinal__I((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_BOOLEAN']());
Array.at(stA0, stI1, 2);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 38; break IF; }}
throw e;
}{ gt = 39; break IF; }
    }
    X_38: for (;;) { IF: if (gt <= 38) {
var lcA0 = stA0;
    }
    X_39: for (;;) { IF: if (gt <= 39) {
try {
var stA0 = c._$SwitchMap$javax$lang$model$type$TypeKind();var stI1 = invoker.ordinal__I((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_BYTE']());
Array.at(stA0, stI1, 3);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 53; break IF; }}
throw e;
}{ gt = 54; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {
var lcA0 = stA0;
    }
    X_54: for (;;) { IF: if (gt <= 54) {
try {
var stA0 = c._$SwitchMap$javax$lang$model$type$TypeKind();var stI1 = invoker.ordinal__I((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_CHAR']());
Array.at(stA0, stI1, 4);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 68; break IF; }}
throw e;
}{ gt = 69; break IF; }
    }
    X_68: for (;;) { IF: if (gt <= 68) {
var lcA0 = stA0;
    }
    X_69: for (;;) { IF: if (gt <= 69) {
try {
var stA0 = c._$SwitchMap$javax$lang$model$type$TypeKind();var stI1 = invoker.ordinal__I((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_SHORT']());
Array.at(stA0, stI1, 5);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 83; break IF; }}
throw e;
}{ gt = 84; break IF; }
    }
    X_83: for (;;) { IF: if (gt <= 83) {
var lcA0 = stA0;
    }
    X_84: for (;;) { IF: if (gt <= 84) {
try {
var stA0 = c._$SwitchMap$javax$lang$model$type$TypeKind();var stI1 = invoker.ordinal__I((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_DOUBLE']());
Array.at(stA0, stI1, (6));
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 99; break IF; }}
throw e;
}{ gt = 100; break IF; }
    }
    X_99: for (;;) { IF: if (gt <= 99) {
var lcA0 = stA0;
    }
    X_100: for (;;) { IF: if (gt <= 100) {
try {
var stA0 = c._$SwitchMap$javax$lang$model$type$TypeKind();var stI1 = invoker.ordinal__I((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_FLOAT']());
Array.at(stA0, stI1, (7));
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 115; break IF; }}
throw e;
}{ gt = 116; break IF; }
    }
    X_115: for (;;) { IF: if (gt <= 115) {
var lcA0 = stA0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {
try {
var stA0 = c._$SwitchMap$javax$lang$model$type$TypeKind();var stI1 = invoker.ordinal__I((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_LONG']());
Array.at(stA0, stI1, (8));
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 131; break IF; }}
throw e;
}{ gt = 132; break IF; }
    }
    X_131: for (;;) { IF: if (gt <= 131) {
var lcA0 = stA0;
    }
    X_132: for (;;) { IF: if (gt <= 132) {
return;

    }
}}}}}}}}}}}}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_JavaScriptProcesor$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_JavaScriptProcesor$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_JavaScriptProcesor$1fillInstOf });
    org_netbeans_html_boot_impl_JavaScriptProcesor$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/JavaScriptProcesor$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_javax_lang_model_type_TypeKind;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_JavaScriptProcesor$1 = org_netbeans_html_boot_impl_JavaScriptProcesor$1;

vm.java_lang_NoSuchFieldError = link('java/lang/NoSuchFieldError', function(f) { vm.java_lang_NoSuchFieldError =  f; });
vm.javax_lang_model_type_TypeKind = link('javax/lang/model/type/TypeKind', function(f) { vm.javax_lang_model_type_TypeKind =  f; });

function org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback() {
  var m;
  var CLS = org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback;
  if (!CLS.$class) {
    var pp = org_netbeans_html_boot_impl_JsCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._e = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_e'] = v; return this['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_e']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_this$0'] = v; return this['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_this$0']; };
    m = CLS.cons__VLorg_netbeans_html_boot_impl_JavaScriptProcesor_2Ljavax_lang_model_element_Element_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_this$0'] = lcA1;
(refs_org_netbeans_html_boot_impl_JsCallback || (refs_org_netbeans_html_boot_impl_JsCallback = org_netbeans_html_boot_impl_JsCallback(false))).constructor.cons__V.call(lcA0);
lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_e'] = lcA2;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.callMethod__Ljava_lang_CharSequence_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_org_netbeans_html_boot_impl_JavaScriptProcesor || (refs_org_netbeans_html_boot_impl_JavaScriptProcesor = org_netbeans_html_boot_impl_JavaScriptProcesor(false))).access$000__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2(lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_this$0']);
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(stA0);
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,lcA2);
var lcA5 = stA0;
if ((lcA5) !== null) { gt = 71; break IF; }
var stA0 = (refs_org_netbeans_html_boot_impl_JavaScriptProcesor || (refs_org_netbeans_html_boot_impl_JavaScriptProcesor = org_netbeans_html_boot_impl_JavaScriptProcesor(false))).access$100__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2(lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_this$0']);
var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(stA0);
var stA1 = (refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Callback to non-existing class ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA2);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_e']);
return "";
    }
    X_71: for (;;) { IF: if (gt <= 71) {

var lcA6 = null;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA5);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA8 = stA0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = invoker.hasNext__Z(lcA8);
if ((stI0) == 0) { gt = 198; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA9 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA9);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_METHOD']())) { gt = 135; break IF; }
{ gt = 0; continue X_97; }
    }
    X_135: for (;;) { IF: if (gt <= 135) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,lcA3);
if ((stI0) == 0) { gt = 195; break IF; }
if (lcA9 !== null && !lcA9['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA9, 'javax.lang.model.element.ExecutableElement');
var stA0 = c.findParamTypes__Ljava_lang_String_2Ljavax_lang_model_element_ExecutableElement_2.call(lcA0, lcA9);
var lcA10 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA10,lcA4);
if ((stI0) == 0) { gt = 182; break IF; }
if (lcA9 !== null && !lcA9['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA9, 'javax.lang.model.element.ExecutableElement');
var lcA6 = lcA9;
{ gt = 198; break IF; }
    }
    X_182: for (;;) { IF: if (gt <= 182) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA7,lcA10);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\n");
    }
    X_195: for (;;) { IF: if (gt <= 195) {
{ gt = 0; continue X_97; }
    }
    X_198: for (;;) { IF: if (gt <= 198) {

if ((lcA6) !== null) { gt = 341; break IF; }
var stI0 = invoker.length__I(lcA7);
if ((stI0) != 0) { gt = 266; break IF; }
var stA0 = (refs_org_netbeans_html_boot_impl_JavaScriptProcesor || (refs_org_netbeans_html_boot_impl_JavaScriptProcesor = org_netbeans_html_boot_impl_JavaScriptProcesor(false))).access$200__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2(lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_this$0']);
var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(stA0);
var stA1 = (refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Callback to class ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," with unknown method ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_e']);
{ gt = 426; break IF; }
    }
    X_266: for (;;) { IF: if (gt <= 266) {

var stA0 = (refs_org_netbeans_html_boot_impl_JavaScriptProcesor || (refs_org_netbeans_html_boot_impl_JavaScriptProcesor = org_netbeans_html_boot_impl_JavaScriptProcesor(false))).access$300__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2(lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_this$0']);
var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(stA0);
var stA1 = (refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Callback to ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,".");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," with wrong parameters: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA4);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,". Only known parameters are ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA7);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_e']);
{ gt = 426; break IF; }
    }
    X_341: for (;;) { IF: if (gt <= 341) {

var stA0 = (refs_org_netbeans_html_boot_impl_JavaScriptProcesor || (refs_org_netbeans_html_boot_impl_JavaScriptProcesor = org_netbeans_html_boot_impl_JavaScriptProcesor(false))).access$500__Ljava_util_Map_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2(lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_this$0']);
var stA1 = (refs_org_netbeans_html_boot_impl_JavaScriptProcesor || (refs_org_netbeans_html_boot_impl_JavaScriptProcesor = org_netbeans_html_boot_impl_JavaScriptProcesor(false))).access$400__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_e']);
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA8 = stA0;
if ((lcA8) !== null) { gt = 401; break IF; }
var stA0 = new vm.java_util_TreeMap;
(refs_java_util_TreeMap || (refs_java_util_TreeMap = vm.java_util_TreeMap(false))).constructor['cons__V'].call(stA0);
var lcA8 = stA0;
var stA0 = (refs_org_netbeans_html_boot_impl_JavaScriptProcesor || (refs_org_netbeans_html_boot_impl_JavaScriptProcesor = org_netbeans_html_boot_impl_JavaScriptProcesor(false))).access$500__Ljava_util_Map_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2(lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_this$0']);
var stA1 = (refs_org_netbeans_html_boot_impl_JavaScriptProcesor || (refs_org_netbeans_html_boot_impl_JavaScriptProcesor = org_netbeans_html_boot_impl_JavaScriptProcesor(false))).access$400__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_e']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, lcA8);
    }
    X_401: for (;;) { IF: if (gt <= 401) {

var stA0 = lcA2;var stA1 = lcA3;var stA2 = c.findParamTypes__Ljava_lang_String_2Ljavax_lang_model_element_ExecutableElement_2.call(lcA0, lcA6);
var stA0 = (refs_org_netbeans_html_boot_impl_JsCallback || (refs_org_netbeans_html_boot_impl_JsCallback = org_netbeans_html_boot_impl_JsCallback(false))).mangle__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stA1, stA2);
var lcA9 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA8,lcA9, lcA6);
    }
    X_426: for (;;) { IF: if (gt <= 426) {

return "";

    }
}}}}}}}}}}}
};
    m.access = 4;
    m.cls = CLS;
    m = c.findParamTypes__Ljava_lang_String_2Ljavax_lang_model_element_ExecutableElement_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA1);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_type_ExecutableType']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.type.ExecutableType');
var lcA2 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(40));
var stA0 = invoker.getParameterTypes__Ljava_util_List_2(lcA2);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_38: for (;;) { IF: if (gt <= 38) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 330; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_type_TypeMirror']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.type.TypeMirror');
var lcA5 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA5);
var stI0 = invoker.isPrimitive__Z(stA0);
if ((stI0) == 0) { gt = 245; break IF; }
var stA0 = (refs_org_netbeans_html_boot_impl_JavaScriptProcesor$1 || (refs_org_netbeans_html_boot_impl_JavaScriptProcesor$1 = org_netbeans_html_boot_impl_JavaScriptProcesor$1(false)))._$SwitchMap$javax$lang$model$type$TypeKind();var stA1 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA5);
var stI1 = invoker.ordinal__I(stA1);
switch ((stA0[stI1] || Array.at(stA0, stI1))) {
  case 1:{ gt = 132; break IF; }
  case 2:{ gt = 142; break IF; }
  case 3:{ gt = 152; break IF; }
  case 4:{ gt = 162; break IF; }
  case 5:{ gt = 172; break IF; }
  case 6:{ gt = 182; break IF; }
  case 7:{ gt = 192; break IF; }
  case 8:{ gt = 202; break IF; }
  default: { gt = 212; break IF; }
}
    }
    X_132: for (;;) { IF: if (gt <= 132) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(73));
{ gt = 327; break IF; }
    }
    X_142: for (;;) { IF: if (gt <= 142) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(90));
{ gt = 327; break IF; }
    }
    X_152: for (;;) { IF: if (gt <= 152) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(66));
{ gt = 327; break IF; }
    }
    X_162: for (;;) { IF: if (gt <= 162) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(67));
{ gt = 327; break IF; }
    }
    X_172: for (;;) { IF: if (gt <= 172) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(83));
{ gt = 327; break IF; }
    }
    X_182: for (;;) { IF: if (gt <= 182) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(68));
{ gt = 327; break IF; }
    }
    X_192: for (;;) { IF: if (gt <= 192) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(70));
{ gt = 327; break IF; }
    }
    X_202: for (;;) { IF: if (gt <= 202) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(74));
{ gt = 327; break IF; }
    }
    X_212: for (;;) { IF: if (gt <= 212) {
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Uknown ");
var stA3 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA5);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_245: for (;;) { IF: if (gt <= 245) {

var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA5);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_ARRAY']())) { gt = 280; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(91));
if (lcA5 !== null && !lcA5['$instOf_javax_lang_model_type_ArrayType']) vm.java_lang_Class(false).castEx(lcA5, 'javax.lang.model.type.ArrayType');
var stA0 = invoker.getComponentType__Ljavax_lang_model_type_TypeMirror_2(lcA5);
var lcA5 = stA0;
{ gt = 0; continue X_245; }
    }
    X_280: for (;;) { IF: if (gt <= 280) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(76));
var stA0 = (refs_org_netbeans_html_boot_impl_JavaScriptProcesor || (refs_org_netbeans_html_boot_impl_JavaScriptProcesor = org_netbeans_html_boot_impl_JavaScriptProcesor(false))).access$600__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2(lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_this$0']);
var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(stA0);
var lcA6 = stA0;
var stA0 = lcA6;var stA1 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(lcA6,lcA5);
var stA0 = invoker.asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2(stA0,stA1);
var lcA7 = stA0;
(refs_org_netbeans_html_boot_impl_JavaScriptProcesor || (refs_org_netbeans_html_boot_impl_JavaScriptProcesor = org_netbeans_html_boot_impl_JavaScriptProcesor(false))).access$700__VLjava_lang_StringBuilder_2Ljavax_lang_model_element_Element_2C(lcA3, lcA7, (59));
    }
    X_327: for (;;) { IF: if (gt <= 327) {
{ gt = 0; continue X_38; }
    }
    X_330: for (;;) { IF: if (gt <= 330) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(41));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA3);
return stA0;

    }
}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallbackfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallbackfillInstOf });
    org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallbackfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/JavaScriptProcesor$VerifyCallback';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_boot_impl_JsCallback;
    var refs_org_netbeans_html_boot_impl_JavaScriptProcesor;
    var refs_javax_tools_Diagnostic$Kind;
    var refs_java_lang_StringBuilder;
    var refs_javax_lang_model_element_ElementKind;
    var refs_java_util_TreeMap;
    var refs_org_netbeans_html_boot_impl_JavaScriptProcesor$1;
    var refs_java_lang_IllegalStateException;
    var refs_javax_lang_model_type_TypeKind;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_e'] = null;
    this['fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback = org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback;

vm.java_util_TreeMap = link('java/util/TreeMap', function(f) { vm.java_util_TreeMap =  f; });
vm.javax_lang_model_element_ElementKind = link('javax/lang/model/element/ElementKind', function(f) { vm.javax_lang_model_element_ElementKind =  f; });
vm.javax_tools_Diagnostic$Kind = link('javax/tools/Diagnostic$Kind', function(f) { vm.javax_tools_Diagnostic$Kind =  f; });

function org_netbeans_html_boot_impl_JavaScriptProcesor() {
  var m;
  var CLS = org_netbeans_html_boot_impl_JavaScriptProcesor;
  if (!CLS.$class) {
    var pp = vm.javax_annotation_processing_AbstractProcessor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._javacalls = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_JavaScriptProcesor_javacalls'] = v; return this['fld_org_netbeans_html_boot_impl_JavaScriptProcesor_javacalls']; };
  m = c._bodies = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_boot_impl_JavaScriptProcesor_bodies'] = v; return this['fld_org_netbeans_html_boot_impl_JavaScriptProcesor_bodies']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_javax_annotation_processing_AbstractProcessor || (refs_javax_annotation_processing_AbstractProcessor = vm.javax_annotation_processing_AbstractProcessor(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA1);
stA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor_javacalls'] = stA1;
var stA0 = lcA0;var stA1 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA1);
stA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor_bodies'] = stA1;
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSupportedAnnotationTypes__Ljava_util_Set_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_util_HashSet;
(refs_java_util_HashSet || (refs_java_util_HashSet = vm.java_util_HashSet(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = lcA1;var stA1 = invoker.getName__Ljava_lang_String_2((refs_net_java_html_js_JavaScriptBody || (refs_net_java_html_js_JavaScriptBody = net_java_html_js_JavaScriptBody(false))).constructor.$class);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stA0 = lcA1;var stA1 = invoker.getName__Ljava_lang_String_2((refs_net_java_html_js_JavaScriptResource || (refs_net_java_html_js_JavaScriptResource = net_java_html_js_JavaScriptResource(false))).constructor.$class);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
return lcA1;

};
c['getSupportedAnnotationTypes__Ljava_util_Set_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.process__ZLjava_util_Set_2Ljavax_annotation_processing_RoundEnvironment_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(c['_processingEnv'].call(lcA0));
var lcA3 = stA0;
var stA0 = invoker.getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2(lcA2,(refs_net_java_html_js_JavaScriptBody || (refs_net_java_html_js_JavaScriptBody = net_java_html_js_JavaScriptBody(false))).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 484; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA5 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA5);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_METHOD']())) { gt = 76; break IF; }
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA5);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_CONSTRUCTOR']())) { gt = 76; break IF; }
{ gt = 0; continue X_25; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

if (lcA5 !== null && !lcA5['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA5, 'javax.lang.model.element.ExecutableElement');
var lcA6 = lcA5;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA6);
var lcA7 = stA0;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA5,(refs_net_java_html_js_JavaScriptBody || (refs_net_java_html_js_JavaScriptBody = net_java_html_js_JavaScriptBody(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_js_JavaScriptBody']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.js.JavaScriptBody');
var lcA8 = stA0;
if ((lcA8) !== null) { gt = 114; break IF; }
{ gt = 0; continue X_25; }
    }
    X_114: for (;;) { IF: if (gt <= 114) {

var stA0 = lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor_bodies'];var stA1 = c.findPkg__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA5);
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
if (stA0 !== null && !stA0['$instOf_java_util_Set']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Set');
var lcA9 = stA0;
if ((lcA9) !== null) { gt = 164; break IF; }
var stA0 = new vm.java_util_HashSet;
(refs_java_util_HashSet || (refs_java_util_HashSet = vm.java_util_HashSet(false))).constructor['cons__V'].call(stA0);
var lcA9 = stA0;
var stA0 = lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor_bodies'];var stA1 = c.findPkg__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA5);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, lcA9);
    }
    X_164: for (;;) { IF: if (gt <= 164) {

var stA0 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA5);
var lcA10 = stA0;
    }
    X_173: for (;;) { IF: if (gt <= 173) {

var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA10);
var stI0 = invoker.isClass__Z(stA0);
if ((stI0) != 0) { gt = 211; break IF; }
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA10);
var stI0 = invoker.isInterface__Z(stA0);
if ((stI0) != 0) { gt = 211; break IF; }
var stA0 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA10);
var lcA10 = stA0;
{ gt = 0; continue X_173; }
    }
    X_211: for (;;) { IF: if (gt <= 211) {

if (lcA10 !== null && !lcA10['$instOf_javax_lang_model_element_TypeElement']) vm.java_lang_Class(false).castEx(lcA10, 'javax.lang.model.element.TypeElement');
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA9,lcA10);
var stA0 = invoker.args___3Ljava_lang_String_2(lcA8);
var lcA9 = stA0;
var stI0 = invoker.size__I(lcA7);
if ((stI0) == ((lcA9).length)) { gt = 259; break IF; }
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(lcA3,(refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_ERROR'](), "Number of args arguments does not match real arguments!", lcA5);
    }
    X_259: for (;;) { IF: if (gt <= 259) {

var lcI10 = 0;
    }
    X_262: for (;;) { IF: if (gt <= 262) {

if ((lcI10) >= ((lcA9).length)) { gt = 346; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA7,lcI10);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(stA0);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,(lcA9[lcI10] || Array.at(lcA9, lcI10)));
if ((stI0) != 0) { gt = 340; break IF; }
var stA0 = lcA3;var stA1 = (refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_WARNING']();var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Actual method parameter names and args ones ");
var stA3 = (refs_java_util_Arrays || (refs_java_util_Arrays = vm.java_util_Arrays(false)))['toString__Ljava_lang_String_2_3Ljava_lang_Object_2'](lcA9);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," differ");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, lcA5);
    }
    X_340: for (;;) { IF: if (gt <= 340) {
lcI10++;
{ gt = 0; continue X_262; }
    }
    X_346: for (;;) { IF: if (gt <= 346) {

var stI0 = invoker.wait4js__Z(lcA8);
if ((stI0) != 0) { gt = 387; break IF; }
var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA6);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) === ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_VOID']())) { gt = 387; break IF; }
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(lcA3,(refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_ERROR'](), "Methods that don't wait for JavaScript to finish must return void!", lcA5);
    }
    X_387: for (;;) { IF: if (gt <= 387) {

var stI0 = invoker.javacall__Z(lcA8);
if ((stI0) != 0) { gt = 425; break IF; }
var stA0 = invoker.body__Ljava_lang_String_2(lcA8);
var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(stA0,".@");
if ((stI0) == 0) { gt = 425; break IF; }
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(lcA3,(refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_WARNING'](), "Usage of .@ usually requires javacall=true", lcA5);
    }
    X_425: for (;;) { IF: if (gt <= 425) {

var stI0 = invoker.javacall__Z(lcA8);
if ((stI0) == 0) { gt = 481; break IF; }
var stA0 = new org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback;
(refs_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback || (refs_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback = org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false))).constructor.cons__VLorg_netbeans_html_boot_impl_JavaScriptProcesor_2Ljavax_lang_model_element_Element_2.call(stA0, lcA0, lcA5);
var lcA10 = stA0;
try {
var stA0 = lcA10;var stA1 = invoker.body__Ljava_lang_String_2(lcA8);
var stA0 = stA0.parse__Ljava_lang_String_2Ljava_lang_String_2(stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_IllegalStateException']) {var stA0 = e;{ gt = 463; break IF; }}
throw e;
}{ gt = 481; break IF; }
    }
    X_463: for (;;) { IF: if (gt <= 463) {
var lcA11 = stA0;
var stA0 = lcA3;var stA1 = (refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_ERROR']();var stA2 = invoker.getLocalizedMessage__Ljava_lang_String_2(lcA11);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, lcA5);
    }
    X_481: for (;;) { IF: if (gt <= 481) {
{ gt = 0; continue X_25; }
    }
    X_484: for (;;) { IF: if (gt <= 484) {

var stA0 = invoker.getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2(lcA2,(refs_net_java_html_js_JavaScriptResource || (refs_net_java_html_js_JavaScriptResource = net_java_html_js_JavaScriptResource(false))).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_499: for (;;) { IF: if (gt <= 499) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 858; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA5 = stA0;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA5,(refs_net_java_html_js_JavaScriptResource || (refs_net_java_html_js_JavaScriptResource = net_java_html_js_JavaScriptResource(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_js_JavaScriptResource']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.js.JavaScriptResource');
var lcA6 = stA0;
if ((lcA6) !== null) { gt = 543; break IF; }
{ gt = 0; continue X_499; }
    }
    X_543: for (;;) { IF: if (gt <= 543) {

var stA0 = invoker.value__Ljava_lang_String_2(lcA6);
var stI0 = invoker.startsWith__ZLjava_lang_String_2(stA0,"/");
if ((stI0) == 0) { gt = 574; break IF; }
var stA0 = invoker.value__Ljava_lang_String_2(lcA6);
var stA0 = invoker.substring__Ljava_lang_String_2I(stA0,1);
var lcA7 = stA0;
{ gt = 616; break IF; }
    }
    X_574: for (;;) { IF: if (gt <= 574) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA1 = c.findPkg__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA5);
var stA1 = invoker.replace__Ljava_lang_String_2CC(stA1,(46), (47));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"/");
var stA1 = invoker.value__Ljava_lang_String_2(lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA7 = stA0;
    }
    X_616: for (;;) { IF: if (gt <= 616) {
try {
var stA0 = invoker.getFiler__Ljavax_annotation_processing_Filer_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.getResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(stA0,(refs_javax_tools_StandardLocation || (refs_javax_tools_StandardLocation = vm.javax_tools_StandardLocation(false)))['_SOURCE_PATH'](), "", lcA7);
var lcA8 = stA0;
var stA0 = invoker.openInputStream__Ljava_io_InputStream_2(lcA8);
invoker.close__V(stA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 652; break IF; }}
throw e;
}{ gt = 761; break IF; }
    }
    X_652: for (;;) { IF: if (gt <= 652) {
var lcA8 = stA0;
try {
var stA0 = invoker.getFiler__Ljavax_annotation_processing_Filer_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.getResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(stA0,(refs_javax_tools_StandardLocation || (refs_javax_tools_StandardLocation = vm.javax_tools_StandardLocation(false)))['_CLASS_OUTPUT'](), "", lcA7);
var lcA9 = stA0;
var stA0 = invoker.openInputStream__Ljava_io_InputStream_2(lcA9);
invoker.close__V(stA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 690; break IF; }}
throw e;
}{ gt = 761; break IF; }
    }
    X_690: for (;;) { IF: if (gt <= 690) {
var lcA9 = stA0;
try {
var stA0 = invoker.getFiler__Ljavax_annotation_processing_Filer_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.getResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(stA0,(refs_javax_tools_StandardLocation || (refs_javax_tools_StandardLocation = vm.javax_tools_StandardLocation(false)))['_CLASS_PATH'](), "", lcA7);
var lcA10 = stA0;
var stA0 = invoker.openInputStream__Ljava_io_InputStream_2(lcA10);
invoker.close__V(stA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 728; break IF; }}
throw e;
}{ gt = 761; break IF; }
    }
    X_728: for (;;) { IF: if (gt <= 728) {
var lcA10 = stA0;
var stA0 = lcA3;var stA1 = (refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Cannot find resource ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA7);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, lcA5);
    }
    X_761: for (;;) { IF: if (gt <= 761) {

var lcI8 = 0;
var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA5);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA9 = stA0;
    }
    X_778: for (;;) { IF: if (gt <= 778) {

var stI0 = invoker.hasNext__Z(lcA9);
if ((stI0) == 0) { gt = 837; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA9);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA10 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA10);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_METHOD']())) { gt = 816; break IF; }
{ gt = 0; continue X_778; }
    }
    X_816: for (;;) { IF: if (gt <= 816) {

var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA10,(refs_net_java_html_js_JavaScriptBody || (refs_net_java_html_js_JavaScriptBody = net_java_html_js_JavaScriptBody(false))).constructor.$class);
if ((stA0) === null) { gt = 834; break IF; }
var lcI8 = 1;
{ gt = 837; break IF; }
    }
    X_834: for (;;) { IF: if (gt <= 834) {
{ gt = 0; continue X_778; }
    }
    X_837: for (;;) { IF: if (gt <= 837) {

if ((lcI8) != 0) { gt = 855; break IF; }
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(lcA3,(refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_ERROR'](), "At least one method needs @JavaScriptBody annotation. Otherwise it is not guaranteed the resource will ever be loaded,", lcA5);
    }
    X_855: for (;;) { IF: if (gt <= 855) {
{ gt = 0; continue X_499; }
    }
    X_858: for (;;) { IF: if (gt <= 858) {

var stI0 = invoker.processingOver__Z(lcA2);
if ((stI0) == 0) { gt = 892; break IF; }
c.generateCallbackClass__VLjava_util_Map_2.call(lcA0, lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor_javacalls']);
c.generateJavaScriptBodyList__VLjava_util_Map_2.call(lcA0, lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor_bodies']);
invoker.clear__V(lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor_javacalls']);
    }
    X_892: for (;;) { IF: if (gt <= 892) {

return 1;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
c['process__ZLjava_util_Set_2Ljavax_annotation_processing_RoundEnvironment_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCompletions__Ljava_lang_Iterable_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA1);
if ((stA0) !== ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_METHOD']())) { gt = 147; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA3);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,"args");
if ((stI0) == 0) { gt = 147; break IF; }
if (lcA1 !== null && !lcA1['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA1, 'javax.lang.model.element.ExecutableElement');
var lcA6 = lcA1;
var lcA7 = "";
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"{ ");
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA6);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA8 = stA0;
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stI0 = invoker.hasNext__Z(lcA8);
if ((stI0) == 0) { gt = 126; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var lcA9 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,lcA7);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var lcA7 = ", ";
{ gt = 0; continue X_69; }
    }
    X_126: for (;;) { IF: if (gt <= 126) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5," }");
var stI0 = 1;var stA1 = invoker.toString__Ljava_lang_String_2(lcA5);
var stA1 = (refs_javax_annotation_processing_Completions || (refs_javax_annotation_processing_Completions = vm.javax_annotation_processing_Completions(false)))['of__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2'](stA1);
var stA0 = (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['nCopies__Ljava_util_List_2ILjava_lang_Object_2'](stI0, stA1);
return stA0;
    }
    X_147: for (;;) { IF: if (gt <= 147) {

return null;

    }
}}}}
};
c['getCompletions__Ljava_lang_Iterable_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.dumpElems__VLjava_lang_StringBuilder_2Ljavax_lang_model_element_Element_2C = function(lcA0, lcA1, lcI2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== null) { gt = 5; break IF; }
return;
    }
    X_5: for (;;) { IF: if (gt <= 5) {

var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA1);
if ((stA0) !== ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_PACKAGE']())) { gt = 49; break IF; }
if (lcA1 !== null && !lcA1['$instOf_javax_lang_model_element_PackageElement']) vm.java_lang_Class(false).castEx(lcA1, 'javax.lang.model.element.PackageElement');
var lcA3 = lcA1;
var stA0 = lcA0;var stA1 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(lcA3);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA1 = invoker.replace__Ljava_lang_String_2CC(stA1,(46), (47));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(47));
return;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA1);
var lcA3 = stA0;
c.dumpElems__VLjava_lang_StringBuilder_2Ljavax_lang_model_element_Element_2C(lcA0, lcA3, (36));
var stA0 = lcA0;var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA0,lcI2);
return;

    }
}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.generateJavaScriptBodyList__VLjava_util_Map_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isEmpty__Z(lcA1);
if ((stI0) == 0) { gt = 10; break IF; }
return;
    }
    X_10: for (;;) { IF: if (gt <= 10) {
try {
var stA0 = invoker.getFiler__Ljavax_annotation_processing_Filer_2(c['_processingEnv'].call(lcA0));
var stA1 = (refs_javax_tools_StandardLocation || (refs_javax_tools_StandardLocation = vm.javax_tools_StandardLocation(false)))['_CLASS_OUTPUT']();var stA2 = "";var stA3 = "META-INF/net.java.html.js.classes";var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljavax/lang/model/element/Element;', vm.javax_lang_model_element_Element, 0);
var stA0 = invoker.createResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, stA3, stA4);
var lcA2 = stA0;
var stA0 = new vm.java_io_PrintWriter;
var stA1 = stA0;var stA2 = new vm.java_io_OutputStreamWriter;
var stA3 = stA2;var stA4 = invoker.openOutputStream__Ljava_io_OutputStream_2(lcA2);
(refs_java_io_OutputStreamWriter || (refs_java_io_OutputStreamWriter = vm.java_io_OutputStreamWriter(false))).constructor['cons__VLjava_io_OutputStream_2Ljava_lang_String_2'].call(stA3, stA4, "UTF-8");
(refs_java_io_PrintWriter || (refs_java_io_PrintWriter = vm.java_io_PrintWriter(false))).constructor['cons__VLjava_io_Writer_2'].call(stA1, stA2);
var lcA3 = stA0;
var stA0 = invoker.entrySet__Ljava_util_Set_2(lcA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
throw e;
}    }
    X_72: for (;;) { IF: if (gt <= 72) {
try {
var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 356; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map$Entry');
var lcA5 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA6 = stA0;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_java_util_Set']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Set');
var lcA7 = stA0;
var stA0 = invoker.getFiler__Ljavax_annotation_processing_Filer_2(c['_processingEnv'].call(lcA0));
var stA1 = (refs_javax_tools_StandardLocation || (refs_javax_tools_StandardLocation = vm.javax_tools_StandardLocation(false)))['_CLASS_OUTPUT']();var stA2 = lcA6;var stA3 = "net.java.html.js.classes";var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljavax/lang/model/element/Element;', vm.javax_lang_model_element_Element, 1);
var stA5 = stA4;var stI6 = 0;var stA7 = invoker.iterator__Ljava_util_Iterator_2(lcA7);
var stA7 = invoker.next__Ljava_lang_Object_2(stA7);
if (stA7 !== null && !stA7['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA7, 'javax.lang.model.element.Element');
Array.at(stA5, stI6, stA7);
var stA0 = invoker.createResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, stA3, stA4);
var lcA8 = stA0;
var stA0 = invoker.openOutputStream__Ljava_io_OutputStream_2(lcA8);
var lcA9 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
throw e;
}try {var stA0 = new vm.java_io_PrintWriter;
var stA1 = stA0;var stA2 = new vm.java_io_OutputStreamWriter;
(refs_java_io_OutputStreamWriter || (refs_java_io_OutputStreamWriter = vm.java_io_OutputStreamWriter(false))).constructor['cons__VLjava_io_OutputStream_2Ljava_lang_String_2'].call(stA2, lcA9, "UTF-8");
(refs_java_io_PrintWriter || (refs_java_io_PrintWriter = vm.java_io_PrintWriter(false))).constructor['cons__VLjava_io_Writer_2'].call(stA1, stA2);
var lcA10 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA7);
var lcA11 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 275; break IF; }}
var stA0 = e;{ gt = 343; break IF; }
}    }
    X_201: for (;;) { IF: if (gt <= 201) {
try {
var stI0 = invoker.hasNext__Z(lcA11);
if ((stI0) == 0) { gt = 257; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA11);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_TypeElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.TypeElement');
var lcA12 = stA0;
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.getBinaryName__Ljavax_lang_model_element_Name_2Ljavax_lang_model_element_TypeElement_2(stA0,lcA12);
var lcA13 = stA0;
invoker.println__VLjava_lang_Object_2(lcA10,lcA13);
invoker.println__VLjava_lang_Object_2(lcA3,lcA13);
{ gt = 0; continue X_201; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 275; break IF; }}
var stA0 = e;{ gt = 343; break IF; }
}    }
    X_257: for (;;) { IF: if (gt <= 257) {
try {
invoker.flush__V(lcA10);
invoker.close__V(lcA10);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 275; break IF; }}
var stA0 = e;{ gt = 343; break IF; }
}try {
invoker.close__V(lcA9);
{ gt = 353; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
throw e;
}    }
    X_275: for (;;) { IF: if (gt <= 275) {
try {var lcA10 = stA0;
var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(c['_processingEnv'].call(lcA0));
var stA1 = (refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Failed to write to ");
var stA3 = invoker.getKey__Ljava_lang_Object_2(lcA5);
if (stA3 !== null && !stA3['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA3, 'java.lang.String');
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,": ");
var stA3 = invoker.toString__Ljava_lang_String_2(lcA10);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2(stA0,stA1, stA2);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
var stA0 = e;{ gt = 343; break IF; }
}try {
invoker.close__V(lcA9);
{ gt = 353; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
throw e;
}    }
    X_343: for (;;) { IF: if (gt <= 343) {
try {var lcA14 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
var stA0 = e;{ gt = 0; continue X_343; }
}try {
invoker.close__V(lcA9);
{ var stA0 = lcA14; throw lcA14; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
throw e;
}    }
    X_353: for (;;) { IF: if (gt <= 353) {
try {{ gt = 0; continue X_72; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
throw e;
}    }
    X_356: for (;;) { IF: if (gt <= 356) {
try {
invoker.close__V(lcA3);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
throw e;
}{ gt = 403; break IF; }
    }
    X_363: for (;;) { IF: if (gt <= 363) {
var lcA2 = stA0;
var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(c['_processingEnv'].call(lcA0));
var stA1 = (refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Failed to write to META-INF/net.java.html.js.classes: ");
var stA3 = invoker.toString__Ljava_lang_String_2(lcA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2(stA0,stA1, stA2);
    }
    X_403: for (;;) { IF: if (gt <= 403) {
return;

    }
}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateCallbackClass__VLjava_util_Map_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.entrySet__Ljava_util_Set_2(lcA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA2 = stA0;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 438; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map$Entry');
var lcA3 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA4 = stA0;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA5 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA6 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"package ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,";\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"public final class $JsCallbacks$ {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"  static final $JsCallbacks$ VM = new $JsCallbacks$(null);\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"  private final org.netbeans.html.boot.spi.Fn.Presenter p;\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"  private $JsCallbacks$ last;\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"  private $JsCallbacks$(org.netbeans.html.boot.spi.Fn.Presenter p) {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    this.p = p;\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"  }\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"  final $JsCallbacks$ current() {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    org.netbeans.html.boot.spi.Fn.Presenter now = org.netbeans.html.boot.spi.Fn.activePresenter();\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    if (now == p) return this;\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    if (last != null && now == last.p) return last;\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    return last = new $JsCallbacks$(now);\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"  }\n");
var stA0 = invoker.entrySet__Ljava_util_Set_2(lcA5);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA7 = stA0;
    }
    X_198: for (;;) { IF: if (gt <= 198) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 287; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map$Entry');
var lcA8 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA9 = stA0;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.ExecutableElement');
var lcA10 = stA0;
c.generateMethod__VZLjavax_lang_model_element_ExecutableElement_2Ljava_lang_StringBuilder_2Ljava_lang_String_2.call(lcA0, 0, lcA10, lcA6, lcA9);
var stA0 = lcA0;var stI1 = 1;var stA2 = lcA10;var stA3 = lcA6;var stA4 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA4);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,"raw$");
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,lcA9);
var stA4 = invoker.toString__Ljava_lang_String_2(stA4);
c.generateMethod__VZLjavax_lang_model_element_ExecutableElement_2Ljava_lang_StringBuilder_2Ljava_lang_String_2.call(stA0, stI1, stA2, stA3, stA4);
{ gt = 0; continue X_198; }
    }
    X_287: for (;;) { IF: if (gt <= 287) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"}\n");
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".$JsCallbacks$");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA7 = stA0;
try {
var stA0 = invoker.getFiler__Ljavax_annotation_processing_Filer_2(c['_processingEnv'].call(lcA0));
var stA1 = lcA7;var stA2 = invoker.values__Ljava_util_Collection_2(lcA5);
var stI3 = invoker.size__I(lcA5);
var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljavax/lang/model/element/Element;', vm.javax_lang_model_element_Element, stI3);
var stA2 = invoker.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(stA2,stA3);
if (stA2 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA2, 1, vm.javax_lang_model_element_Element)) vm.java_lang_Class(false).castEx(stA2, '');
var stA0 = invoker.createSourceFile__Ljavax_tools_JavaFileObject_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2(stA0,stA1, stA2);
var stA0 = invoker.openWriter__Ljava_io_Writer_2(stA0);
var lcA8 = stA0;
var stA0 = lcA8;var stA1 = invoker.toString__Ljava_lang_String_2(lcA6);
invoker.write__VLjava_lang_String_2(stA0,stA1);
invoker.close__V(lcA8);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 383; break IF; }}
throw e;
}{ gt = 435; break IF; }
    }
    X_383: for (;;) { IF: if (gt <= 383) {
var lcA8 = stA0;
var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(c['_processingEnv'].call(lcA0));
var stA1 = (refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't write ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA7);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,": ");
var stA3 = invoker.getMessage__Ljava_lang_String_2(lcA8);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2(stA0,stA1, stA2);
    }
    X_435: for (;;) { IF: if (gt <= 435) {
{ gt = 0; continue X_12; }
    }
    X_438: for (;;) { IF: if (gt <= 438) {
return;

    }
}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateMethod__VZLjavax_lang_model_element_ExecutableElement_2Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(lcI1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA2);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_STATIC']());
var lcI5 = stI0;
if ((lcI5) == 0) { gt = 26; break IF; }
if ((lcI1) == 0) { gt = 26; break IF; }
return;
    }
    X_26: for (;;) { IF: if (gt <= 26) {

var stA0 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA2);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_TypeElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.TypeElement');
var lcA6 = stA0;
var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var lcA7 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"\n  public java.lang.Object ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var lcA8 = "";
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA9 = stA0;
if ((lcI5) != 0) { gt = 154; break IF; }
if ((lcI1) == 0) { gt = 131; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"java.lang.Object self");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA9,"    if (p instanceof org.netbeans.html.boot.spi.Fn.FromJavaScript) {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA9,"      self");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0," = ((org.netbeans.html.boot.spi.Fn.FromJavaScript)p).toJava(self");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,");\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA9,"    }\n");
{ gt = 150; break IF; }
    }
    X_131: for (;;) { IF: if (gt <= 131) {

var stA0 = lcA3;var stA1 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3," self");
    }
    X_150: for (;;) { IF: if (gt <= 150) {

var lcA8 = ", ";
    }
    X_154: for (;;) { IF: if (gt <= 154) {

var lcI10 = 0;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA2);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA11 = stA0;
    }
    X_170: for (;;) { IF: if (gt <= 170) {

var stI0 = invoker.hasNext__Z(lcA11);
if ((stI0) == 0) { gt = 319; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA11);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var lcA12 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA8);
lcI10++;
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA12);
var lcA13 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA13);
var stI0 = invoker.isPrimitive__Z(stA0);
if ((stI0) != 0) { gt = 293; break IF; }
var stA0 = "java.lang.String";var stA1 = invoker.toString__Ljava_lang_String_2(lcA13);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) != 0) { gt = 293; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"java.lang.Object");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA9,"    if (p instanceof org.netbeans.html.boot.spi.Fn.FromJavaScript) {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA9,"      arg");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,lcI10);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0," = ((org.netbeans.html.boot.spi.Fn.FromJavaScript)p).toJava(arg");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,lcI10);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,");\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA9,"    }\n");
{ gt = 300; break IF; }
    }
    X_293: for (;;) { IF: if (gt <= 293) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(lcA3,lcA13);
    }
    X_300: for (;;) { IF: if (gt <= 300) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3," arg");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,lcI10);
var lcA8 = ", ";
{ gt = 0; continue X_170; }
    }
    X_319: for (;;) { IF: if (gt <= 319) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,") throws Throwable {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(lcA3,lcA9);
var stI0 = c.useTryResources__Z.call(lcA0);
if ((stI0) == 0) { gt = 350; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"    try (java.io.Closeable a = org.netbeans.html.boot.spi.Fn.activate(p)) { \n");
{ gt = 357; break IF; }
    }
    X_350: for (;;) { IF: if (gt <= 350) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"    java.io.Closeable a = org.netbeans.html.boot.spi.Fn.activate(p); try {\n");
    }
    X_357: for (;;) { IF: if (gt <= 357) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"    ");
var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA2);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) === ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_VOID']())) { gt = 388; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"java.lang.Object $ret = ");
    }
    X_388: for (;;) { IF: if (gt <= 388) {

if ((lcI5) == 0) { gt = 422; break IF; }
var stA0 = lcA3;var stA1 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA2);
if (stA1 !== null && !stA1['$instOf_javax_lang_model_element_TypeElement']) vm.java_lang_Class(false).castEx(stA1, 'javax.lang.model.element.TypeElement');
var stA1 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(46));
{ gt = 462; break IF; }
    }
    X_422: for (;;) { IF: if (gt <= 422) {

if ((lcI1) == 0) { gt = 455; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"((");
var stA0 = lcA3;var stA1 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,")self).");
{ gt = 462; break IF; }
    }
    X_455: for (;;) { IF: if (gt <= 455) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"self.");
    }
    X_462: for (;;) { IF: if (gt <= 462) {

var stA0 = lcA3;var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"(");
var lcI10 = 0;
var lcA8 = "";
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA2);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA11 = stA0;
    }
    X_500: for (;;) { IF: if (gt <= 500) {

var stI0 = invoker.hasNext__Z(lcA11);
if ((stI0) == 0) { gt = 575; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA11);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var lcA12 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA8);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"(");
var stA1 = lcA7;var stA2 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA12);
var stA1 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,")arg");
lcI10++;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,lcI10);
var lcA8 = ", ";
{ gt = 0; continue X_500; }
    }
    X_575: for (;;) { IF: if (gt <= 575) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,");\n");
var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA2);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_VOID']())) { gt = 609; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"    return null;\n");
{ gt = 637; break IF; }
    }
    X_609: for (;;) { IF: if (gt <= 609) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"    if (p instanceof org.netbeans.html.boot.spi.Fn.ToJavaScript) {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"      $ret = ((org.netbeans.html.boot.spi.Fn.ToJavaScript)p).toJavaScript($ret);\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"    }\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"    return $ret;\n");
    }
    X_637: for (;;) { IF: if (gt <= 637) {

var stI0 = c.useTryResources__Z.call(lcA0);
if ((stI0) == 0) { gt = 654; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"    }\n");
{ gt = 675; break IF; }
    }
    X_654: for (;;) { IF: if (gt <= 654) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"    } finally {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"      a.close();\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"    }\n");
    }
    X_675: for (;;) { IF: if (gt <= 675) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"  }\n");
return;

    }
}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.useTryResources__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = invoker.getSourceVersion__Ljavax_lang_model_SourceVersion_2(c['_processingEnv'].call(lcA0));
var stI0 = invoker.compareTo__ILjava_lang_Enum_2(stA0,(refs_javax_lang_model_SourceVersion || (refs_javax_lang_model_SourceVersion = vm.javax_lang_model_SourceVersion(false)))['_RELEASE_7']());
if ((stI0) < 0) { gt = 22; break IF; }
var stI0 = 1;{ gt = 23; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_LinkageError']) {var stA0 = e;{ gt = 24; break IF; }}
throw e;
}    }
    X_22: for (;;) { IF: if (gt <= 22) {
try {
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_LinkageError']) {var stA0 = e;{ gt = 24; break IF; }}
throw e;
}var stI0 = 0;    }
    X_23: for (;;) { IF: if (gt <= 23) {
return stI0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {
var lcA1 = stA0;
return 0;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.findPkg__Ljava_lang_String_2Ljavax_lang_model_element_Element_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA0);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_PACKAGE']())) { gt = 22; break IF; }
var stA0 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA0);
var lcA0 = stA0;
{ gt = 0; continue X_0; }
    }
    X_22: for (;;) { IF: if (gt <= 22) {

if (lcA0 !== null && !lcA0['$instOf_javax_lang_model_element_PackageElement']) vm.java_lang_Class(false).castEx(lcA0, 'javax.lang.model.element.PackageElement');
var stA0 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(lcA0);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;

    }
}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.access$000__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2 = function(lcA0) {
return c['_processingEnv'].call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2 = function(lcA0) {
return c['_processingEnv'].call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2 = function(lcA0) {
return c['_processingEnv'].call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$300__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2 = function(lcA0) {
return c['_processingEnv'].call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$400__Ljava_lang_String_2Ljavax_lang_model_element_Element_2 = function(lcA0) {
var stA0 = c.findPkg__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA0);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$500__Ljava_util_Map_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_boot_impl_JavaScriptProcesor_javacalls'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$600__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2 = function(lcA0) {
return c['_processingEnv'].call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$700__VLjava_lang_StringBuilder_2Ljavax_lang_model_element_Element_2C = function(lcA0, lcA1, lcI2) {
c.dumpElems__VLjava_lang_StringBuilder_2Ljavax_lang_model_element_Element_2C(lcA0, lcA1, lcI2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_JavaScriptProcesorfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_JavaScriptProcesor', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_JavaScriptProcesorfillInstOf });
    org_netbeans_html_boot_impl_JavaScriptProcesorfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/JavaScriptProcesor';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_javax_annotation_processing_AbstractProcessor;
    var refs_java_util_HashMap;
    var refs_java_util_HashSet;
    var refs_net_java_html_js_JavaScriptBody;
    var refs_net_java_html_js_JavaScriptResource;
    var refs_javax_lang_model_element_ElementKind;
    var refs_javax_tools_Diagnostic$Kind;
    var refs_java_lang_StringBuilder;
    var refs_java_util_Arrays;
    var refs_javax_lang_model_type_TypeKind;
    var refs_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback;
    var refs_javax_tools_StandardLocation;
    var refs_javax_annotation_processing_Completions;
    var refs_java_util_Collections;
    var refs_java_io_OutputStreamWriter;
    var refs_java_io_PrintWriter;
    var refs_javax_lang_model_element_Modifier;
    var refs_javax_lang_model_SourceVersion;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_boot_impl_JavaScriptProcesor_javacalls'] = null;
    this['fld_org_netbeans_html_boot_impl_JavaScriptProcesor_bodies'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_JavaScriptProcesor = registerClass(exports,'org_netbeans_html_boot_impl_JavaScriptProcesor',org_netbeans_html_boot_impl_JavaScriptProcesor);

vm.javax_lang_model_SourceVersion = link('javax/lang/model/SourceVersion', function(f) { vm.javax_lang_model_SourceVersion =  f; });
vm.javax_lang_model_element_Modifier = link('javax/lang/model/element/Modifier', function(f) { vm.javax_lang_model_element_Modifier =  f; });
vm.javax_lang_model_element_Element = link('javax/lang/model/element/Element', function(f) { vm.javax_lang_model_element_Element =  f; });
vm.java_io_OutputStreamWriter = link('java/io/OutputStreamWriter', function(f) { vm.java_io_OutputStreamWriter =  f; });
vm.javax_annotation_processing_Completions = link('javax/annotation/processing/Completions', function(f) { vm.javax_annotation_processing_Completions =  f; });
vm.javax_tools_StandardLocation = link('javax/tools/StandardLocation', function(f) { vm.javax_tools_StandardLocation =  f; });
vm.javax_annotation_processing_AbstractProcessor = link('javax/annotation/processing/AbstractProcessor', function(f) { vm.javax_annotation_processing_AbstractProcessor =  f; });

function org_netbeans_html_boot_impl_JsAgent() {
  var m;
  var CLS = org_netbeans_html_boot_impl_JsAgent;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.premain__VLjava_lang_String_2Ljava_lang_instrument_Instrumentation_2 = function(lcA0, lcA1) {
var stA0 = lcA1;var stA1 = new org_netbeans_html_boot_impl_JsAgent;
c.constructor.cons__V.call(stA1);
invoker.addTransformer__VLjava_lang_instrument_ClassFileTransformer_2(stA0,stA1);
return;

};
    m.access = 9;
    m.cls = CLS;
    m = c.agentmain__VLjava_lang_String_2Ljava_lang_instrument_Instrumentation_2 = function(lcA0, lcA1) {
var stA0 = lcA1;var stA1 = new org_netbeans_html_boot_impl_JsAgent;
c.constructor.cons__V.call(stA1);
invoker.addTransformer__VLjava_lang_instrument_ClassFileTransformer_2(stA0,stA1);
return;

};
    m.access = 9;
    m.cls = CLS;
    m = c.transform___3BLjava_lang_ClassLoader_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_security_ProtectionDomain_2_3B = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stI0 = (refs_org_netbeans_html_boot_impl_JsPkgCache || (refs_org_netbeans_html_boot_impl_JsPkgCache = org_netbeans_html_boot_impl_JsPkgCache(false))).process__ZLjava_lang_ClassLoader_2Ljava_lang_String_2(lcA1, lcA2);
if ((stI0) == 0) { gt = 15; break IF; }
var stA0 = (refs_org_netbeans_html_boot_impl_FnUtils || (refs_org_netbeans_html_boot_impl_FnUtils = org_netbeans_html_boot_impl_FnUtils(false))).transform___3B_3BLjava_lang_ClassLoader_2(lcA5, lcA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 18; break IF; }}
throw e;
}return stA0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {
try {
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 18; break IF; }}
throw e;
}return lcA5;
    }
    X_18: for (;;) { IF: if (gt <= 18) {
var lcA6 = stA0;
return lcA5;

    }
}}}
};
c['transform___3BLjava_lang_ClassLoader_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_security_ProtectionDomain_2_3B'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_JsAgentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_JsAgent', { value : true });
      vm.java_lang_instrument_ClassFileTransformer(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_JsAgentfillInstOf });
    org_netbeans_html_boot_impl_JsAgentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/JsAgent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_instrument_ClassFileTransformer(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_org_netbeans_html_boot_impl_JsPkgCache;
    var refs_org_netbeans_html_boot_impl_FnUtils;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_impl_JsAgent = org_netbeans_html_boot_impl_JsAgent;

vm.java_lang_instrument_ClassFileTransformer = link('java/lang/instrument/ClassFileTransformer', function(f) { vm.java_lang_instrument_ClassFileTransformer =  f; });

function org_netbeans_html_boot_spi_Fn$KeepAlive() {
  var m;
  var CLS = org_netbeans_html_boot_spi_Fn$KeepAlive;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2_3Z = function(lcA1, lcA2, lcA3) {
};
c['defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2_3Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_spi_Fn$KeepAlivefillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_spi_Fn$KeepAlive', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_spi_Fn$KeepAlivefillInstOf });
    org_netbeans_html_boot_spi_Fn$KeepAlivefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/spi/Fn$KeepAlive';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1537;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_boot_spi_Fn$KeepAlive = registerClass(exports,'org_netbeans_html_boot_spi_Fn$KeepAlive',org_netbeans_html_boot_spi_Fn$KeepAlive);

  invoker.run__V = function(target) {
    return target['run__V']();
  };
  invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2 = function(target, p1, p2) {
    return target['getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2'](p1,p2);
  };
  invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2'](p1,p2);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.toString__Ljava_lang_String_2 = function(target) {
    return target['toString__Ljava_lang_String_2']();
  };
  invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2 = function(target, p1, p2, p3) {
    return target['log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2'](p1,p2,p3);
  };
  invoker.getResource__Ljava_net_URL_2Ljava_lang_String_2 = function(target, p1) {
    return target['getResource__Ljava_net_URL_2Ljava_lang_String_2'](p1);
  };
  invoker.println__VLjava_lang_String_2 = function(target, p1) {
    return target['println__VLjava_lang_String_2'](p1);
  };
  invoker.append__Ljava_io_PrintWriter_2Ljava_lang_CharSequence_2 = function(target, p1) {
    return target['append__Ljava_io_PrintWriter_2Ljava_lang_CharSequence_2'](p1);
  };
  invoker.println__VLjava_lang_Object_2 = function(target, p1) {
    return target['println__VLjava_lang_Object_2'](p1);
  };
  invoker.openStream__Ljava_io_InputStream_2 = function(target) {
    return target['openStream__Ljava_io_InputStream_2']();
  };
  invoker.readLine__Ljava_lang_String_2 = function(target) {
    return target['readLine__Ljava_lang_String_2']();
  };
  invoker.close__V = function(target) {
    return target['close__V']();
  };
  invoker.printStackTrace__VLjava_io_PrintWriter_2 = function(target, p1) {
    return target['printStackTrace__VLjava_io_PrintWriter_2'](p1);
  };
  invoker.flush__V = function(target) {
    return target['flush__V']();
  };
  invoker.getName__Ljava_lang_String_2 = function(target) {
    return target['getName__Ljava_lang_String_2']();
  };
  invoker.get__Ljava_lang_Object_2 = function(target) {
    return target['get__Ljava_lang_Object_2']();
  };
  invoker.set__VLjava_lang_Object_2 = function(target, p1) {
    return target['set__VLjava_lang_Object_2'](p1);
  };
  invoker.getClass__Ljava_lang_Class_2 = function(target) {
    return target['getClass__Ljava_lang_Class_2']();
  };
  invoker.iterator__Ljava_util_Iterator_2 = function(target) {
    return target['iterator__Ljava_util_Iterator_2']();
  };
  invoker.hasNext__Z = function(target) {
    return target['hasNext__Z']();
  };
  invoker.next__Ljava_lang_Object_2 = function(target) {
    return target['next__Ljava_lang_Object_2']();
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2'](p1);
  };
  invoker.getClassLoader__Ljava_lang_ClassLoader_2 = function(target) {
    return target['getClassLoader__Ljava_lang_ClassLoader_2']();
  };
  invoker.getParent__Ljava_lang_ClassLoader_2 = function(target) {
    return target['getParent__Ljava_lang_ClassLoader_2']();
  };
  invoker.displayPage__VLjava_net_URL_2Ljava_lang_Runnable_2 = function(target, p1, p2) {
    return target['displayPage__VLjava_net_URL_2Ljava_lang_Runnable_2'](p1,p2);
  };
  invoker.lastIndexOf__II = function(target, p1) {
    return target['lastIndexOf__II'](p1);
  };
  invoker.substring__Ljava_lang_String_2II = function(target, p1, p2) {
    return target['substring__Ljava_lang_String_2II'](p1,p2);
  };
  invoker.substring__Ljava_lang_String_2I = function(target, p1) {
    return target['substring__Ljava_lang_String_2I'](p1);
  };
  invoker.toURI__Ljava_net_URI_2 = function(target) {
    return target['toURI__Ljava_net_URI_2']();
  };
  invoker.toURL__Ljava_net_URL_2 = function(target) {
    return target['toURL__Ljava_net_URL_2']();
  };
  invoker.getProtectionDomain__Ljava_security_ProtectionDomain_2 = function(target) {
    return target['getProtectionDomain__Ljava_security_ProtectionDomain_2']();
  };
  invoker.getCodeSource__Ljava_security_CodeSource_2 = function(target) {
    return target['getCodeSource__Ljava_security_CodeSource_2']();
  };
  invoker.getLocation__Ljava_net_URL_2 = function(target) {
    return target['getLocation__Ljava_net_URL_2']();
  };
  invoker.initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2 = function(target, p1) {
    return target['initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2'](p1);
  };
  invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2'](p1,p2,p3);
  };
  invoker.openConnection__Ljava_net_URLConnection_2 = function(target) {
    return target['openConnection__Ljava_net_URLConnection_2']();
  };
  invoker.getJarFileURL__Ljava_net_URL_2 = function(target) {
    return target['getJarFileURL__Ljava_net_URL_2']();
  };
  invoker.getLanguage__Ljava_lang_String_2 = function(target) {
    return target['getLanguage__Ljava_lang_String_2']();
  };
  invoker.getCountry__Ljava_lang_String_2 = function(target) {
    return target['getCountry__Ljava_lang_String_2']();
  };
  invoker.setReadTimeout__VI = function(target, p1) {
    return target['setReadTimeout__VI'](p1);
  };
  invoker.getResponseCode__I = function(target) {
    return target['getResponseCode__I']();
  };
  invoker.append__Ljava_lang_StringBuilder_2I = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2I'](p1);
  };
  invoker.getInputStream__Ljava_io_InputStream_2 = function(target) {
    return target['getInputStream__Ljava_io_InputStream_2']();
  };
  invoker.add__ZLjava_lang_Object_2 = function(target, p1) {
    return target['add__ZLjava_lang_Object_2'](p1);
  };
  invoker.getResources__Ljava_util_Enumeration_2Ljava_lang_String_2 = function(target, p1) {
    return target['getResources__Ljava_util_Enumeration_2Ljava_lang_String_2'](p1);
  };
  invoker.hasMoreElements__Z = function(target) {
    return target['hasMoreElements__Z']();
  };
  invoker.nextElement__Ljava_lang_Object_2 = function(target) {
    return target['nextElement__Ljava_lang_Object_2']();
  };
  invoker.setContextClassLoader__VLjava_lang_ClassLoader_2 = function(target, p1) {
    return target['setContextClassLoader__VLjava_lang_ClassLoader_2'](p1);
  };
  invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I = function(target, p1, p2, p3) {
    return target['register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I'](p1,p2,p3);
  };
  invoker.build__Lnet_java_html_BrwsrCtx_2 = function(target) {
    return target['build__Lnet_java_html_BrwsrCtx_2']();
  };
  invoker.execute__VLjava_lang_Runnable_2 = function(target, p1) {
    return target['execute__VLjava_lang_Runnable_2'](p1);
  };
  invoker.defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2_3Z = function(target, p1, p2, p3) {
    return target['defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2_3Z'](p1,p2,p3);
  };
  invoker.defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(target, p1, p2) {
    return target['defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2'](p1,p2);
  };
  invoker.invokeLater__VLjava_lang_Object_2_3Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['invokeLater__VLjava_lang_Object_2_3Ljava_lang_Object_2'](p1,p2);
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.getResourceAsStream__Ljava_io_InputStream_2Ljava_lang_String_2 = function(target, p1) {
    return target['getResourceAsStream__Ljava_io_InputStream_2Ljava_lang_String_2'](p1);
  };
  invoker.startsWith__ZLjava_lang_String_2 = function(target, p1) {
    return target['startsWith__ZLjava_lang_String_2'](p1);
  };
  invoker.loadScript__VLjava_io_Reader_2 = function(target, p1) {
    return target['loadScript__VLjava_io_Reader_2'](p1);
  };
  invoker.indexOf__ILjava_lang_String_2I = function(target, p1, p2) {
    return target['indexOf__ILjava_lang_String_2I'](p1,p2);
  };
  invoker.charAt__CI = function(target, p1) {
    return target['charAt__CI'](p1);
  };
  invoker.indexOf__III = function(target, p1, p2) {
    return target['indexOf__III'](p1,p2);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2'](p1);
  };
  invoker.endsWith__ZLjava_lang_String_2 = function(target, p1) {
    return target['endsWith__ZLjava_lang_String_2'](p1);
  };
  invoker.length__I = function(target) {
    return target['length__I']();
  };
  invoker.replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2 = function(target, p1, p2) {
    return target['replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2'](p1,p2);
  };
  invoker.replace__Ljava_lang_String_2CC = function(target, p1, p2) {
    return target['replace__Ljava_lang_String_2CC'](p1,p2);
  };
  invoker.isAssignableFrom__ZLjava_lang_Class_2 = function(target, p1) {
    return target['isAssignableFrom__ZLjava_lang_Class_2'](p1);
  };
  invoker.isInterface__Z = function(target) {
    return target['isInterface__Z']();
  };
  invoker.getSuperclass__Ljava_lang_Class_2 = function(target) {
    return target['getSuperclass__Ljava_lang_Class_2']();
  };
  invoker.getDescriptor__Ljava_lang_String_2 = function(target) {
    return target['getDescriptor__Ljava_lang_String_2']();
  };
  invoker.append__Ljava_lang_StringBuilder_2C = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2C'](p1);
  };
  invoker.getOpcode__II = function(target, p1) {
    return target['getOpcode__II'](p1);
  };
  invoker.equals__ZLjava_lang_Object_2 = function(target, p1) {
    return target['equals__ZLjava_lang_Object_2'](p1);
  };
  invoker.visitArray__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2 = function(target, p1) {
    return target['visitArray__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2'](p1);
  };
  invoker.visit__VLjava_lang_String_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['visit__VLjava_lang_String_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.visitEnd__V = function(target) {
    return target['visitEnd__V']();
  };
  invoker.size__I = function(target) {
    return target['size__I']();
  };
  invoker.get__Ljava_lang_Object_2I = function(target, p1) {
    return target['get__Ljava_lang_Object_2I'](p1);
  };
  invoker.accept__VLorg_objectweb_asm_signature_SignatureVisitor_2 = function(target, p1) {
    return target['accept__VLorg_objectweb_asm_signature_SignatureVisitor_2'](p1);
  };
  invoker.getSort__I = function(target) {
    return target['getSort__I']();
  };
  invoker.getInternalName__Ljava_lang_String_2 = function(target) {
    return target['getInternalName__Ljava_lang_String_2']();
  };
  invoker.getClassName__Ljava_lang_String_2 = function(target) {
    return target['getClassName__Ljava_lang_String_2']();
  };
  invoker.visitInsn__VI = function(target, p1) {
    return target['visitInsn__VI'](p1);
  };
  invoker.desiredAssertionStatus__Z = function(target) {
    return target['desiredAssertionStatus__Z']();
  };
  invoker.accept__VLorg_objectweb_asm_ClassVisitor_2I = function(target, p1, p2) {
    return target['accept__VLorg_objectweb_asm_ClassVisitor_2I'](p1,p2);
  };
  invoker.toByteArray___3B = function(target) {
    return target['toByteArray___3B']();
  };
  invoker.setDefaultAssertionStatus__VZ = function(target, p1) {
    return target['setDefaultAssertionStatus__VZ'](p1);
  };
  invoker.isEmpty__Z = function(target) {
    return target['isEmpty__Z']();
  };
  invoker.findResource__Ljava_net_URL_2Ljava_lang_String_2 = function(target, p1) {
    return target['findResource__Ljava_net_URL_2Ljava_lang_String_2'](p1);
  };
  invoker.available__I = function(target) {
    return target['available__I']();
  };
  invoker.read__I_3BII = function(target, p1, p2, p3) {
    return target['read__I_3BII'](p1,p2,p3);
  };
  invoker.defineClass__Ljava_lang_Class_2Ljava_lang_String_2_3BII = function(target, p1, p2, p3, p4) {
    return target['defineClass__Ljava_lang_Class_2Ljava_lang_String_2_3BII'](p1,p2,p3,p4);
  };
  invoker.contains__ZLjava_lang_Object_2 = function(target, p1) {
    return target['contains__ZLjava_lang_Object_2'](p1);
  };
  invoker.booleanValue__Z = function(target) {
    return target['booleanValue__Z']();
  };
  invoker.ordinal__I = function(target) {
    return target['ordinal__I']();
  };
  invoker.getElementUtils__Ljavax_lang_model_util_Elements_2 = function(target) {
    return target['getElementUtils__Ljavax_lang_model_util_Elements_2']();
  };
  invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2 = function(target, p1) {
    return target['getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2'](p1);
  };
  invoker.getMessager__Ljavax_annotation_processing_Messager_2 = function(target) {
    return target['getMessager__Ljavax_annotation_processing_Messager_2']();
  };
  invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2 = function(target, p1, p2, p3) {
    return target['printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2'](p1,p2,p3);
  };
  invoker.getEnclosedElements__Ljava_util_List_2 = function(target) {
    return target['getEnclosedElements__Ljava_util_List_2']();
  };
  invoker.getKind__Ljavax_lang_model_element_ElementKind_2 = function(target) {
    return target['getKind__Ljavax_lang_model_element_ElementKind_2']();
  };
  invoker.getSimpleName__Ljavax_lang_model_element_Name_2 = function(target) {
    return target['getSimpleName__Ljavax_lang_model_element_Name_2']();
  };
  invoker.contentEquals__ZLjava_lang_CharSequence_2 = function(target, p1) {
    return target['contentEquals__ZLjava_lang_CharSequence_2'](p1);
  };
  invoker.asType__Ljavax_lang_model_type_TypeMirror_2 = function(target) {
    return target['asType__Ljavax_lang_model_type_TypeMirror_2']();
  };
  invoker.getParameterTypes__Ljava_util_List_2 = function(target) {
    return target['getParameterTypes__Ljava_util_List_2']();
  };
  invoker.getKind__Ljavax_lang_model_type_TypeKind_2 = function(target) {
    return target['getKind__Ljavax_lang_model_type_TypeKind_2']();
  };
  invoker.isPrimitive__Z = function(target) {
    return target['isPrimitive__Z']();
  };
  invoker.getComponentType__Ljavax_lang_model_type_TypeMirror_2 = function(target) {
    return target['getComponentType__Ljavax_lang_model_type_TypeMirror_2']();
  };
  invoker.getTypeUtils__Ljavax_lang_model_util_Types_2 = function(target) {
    return target['getTypeUtils__Ljavax_lang_model_util_Types_2']();
  };
  invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2 = function(target, p1) {
    return target['erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2'](p1);
  };
  invoker.asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2 = function(target, p1) {
    return target['asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2'](p1);
  };
  invoker.getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2 = function(target, p1) {
    return target['getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2'](p1);
  };
  invoker.getParameters__Ljava_util_List_2 = function(target) {
    return target['getParameters__Ljava_util_List_2']();
  };
  invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2 = function(target, p1) {
    return target['getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2'](p1);
  };
  invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2 = function(target) {
    return target['getEnclosingElement__Ljavax_lang_model_element_Element_2']();
  };
  invoker.isClass__Z = function(target) {
    return target['isClass__Z']();
  };
  invoker.args___3Ljava_lang_String_2 = function(target) {
    return target['args___3Ljava_lang_String_2']();
  };
  invoker.wait4js__Z = function(target) {
    return target['wait4js__Z']();
  };
  invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2 = function(target) {
    return target['getReturnType__Ljavax_lang_model_type_TypeMirror_2']();
  };
  invoker.javacall__Z = function(target) {
    return target['javacall__Z']();
  };
  invoker.body__Ljava_lang_String_2 = function(target) {
    return target['body__Ljava_lang_String_2']();
  };
  invoker.contains__ZLjava_lang_CharSequence_2 = function(target, p1) {
    return target['contains__ZLjava_lang_CharSequence_2'](p1);
  };
  invoker.getLocalizedMessage__Ljava_lang_String_2 = function(target) {
    return target['getLocalizedMessage__Ljava_lang_String_2']();
  };
  invoker.value__Ljava_lang_String_2 = function(target) {
    return target['value__Ljava_lang_String_2']();
  };
  invoker.getFiler__Ljavax_annotation_processing_Filer_2 = function(target) {
    return target['getFiler__Ljavax_annotation_processing_Filer_2']();
  };
  invoker.getResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2 = function(target, p1, p2, p3) {
    return target['getResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2'](p1,p2,p3);
  };
  invoker.openInputStream__Ljava_io_InputStream_2 = function(target) {
    return target['openInputStream__Ljava_io_InputStream_2']();
  };
  invoker.processingOver__Z = function(target) {
    return target['processingOver__Z']();
  };
  invoker.clear__V = function(target) {
    return target['clear__V']();
  };
  invoker.getQualifiedName__Ljavax_lang_model_element_Name_2 = function(target) {
    return target['getQualifiedName__Ljavax_lang_model_element_Name_2']();
  };
  invoker.createResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2 = function(target, p1, p2, p3, p4) {
    return target['createResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2'](p1,p2,p3,p4);
  };
  invoker.openOutputStream__Ljava_io_OutputStream_2 = function(target) {
    return target['openOutputStream__Ljava_io_OutputStream_2']();
  };
  invoker.entrySet__Ljava_util_Set_2 = function(target) {
    return target['entrySet__Ljava_util_Set_2']();
  };
  invoker.getKey__Ljava_lang_Object_2 = function(target) {
    return target['getKey__Ljava_lang_Object_2']();
  };
  invoker.getValue__Ljava_lang_Object_2 = function(target) {
    return target['getValue__Ljava_lang_Object_2']();
  };
  invoker.getBinaryName__Ljavax_lang_model_element_Name_2Ljavax_lang_model_element_TypeElement_2 = function(target, p1) {
    return target['getBinaryName__Ljavax_lang_model_element_Name_2Ljavax_lang_model_element_TypeElement_2'](p1);
  };
  invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2 = function(target, p1, p2) {
    return target['printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2'](p1,p2);
  };
  invoker.values__Ljava_util_Collection_2 = function(target) {
    return target['values__Ljava_util_Collection_2']();
  };
  invoker.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(target, p1) {
    return target['toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2'](p1);
  };
  invoker.createSourceFile__Ljavax_tools_JavaFileObject_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2 = function(target, p1, p2) {
    return target['createSourceFile__Ljavax_tools_JavaFileObject_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2'](p1,p2);
  };
  invoker.openWriter__Ljava_io_Writer_2 = function(target) {
    return target['openWriter__Ljava_io_Writer_2']();
  };
  invoker.write__VLjava_lang_String_2 = function(target, p1) {
    return target['write__VLjava_lang_String_2'](p1);
  };
  invoker.getMessage__Ljava_lang_String_2 = function(target) {
    return target['getMessage__Ljava_lang_String_2']();
  };
  invoker.getModifiers__Ljava_util_Set_2 = function(target) {
    return target['getModifiers__Ljava_util_Set_2']();
  };
  invoker.getSourceVersion__Ljavax_lang_model_SourceVersion_2 = function(target) {
    return target['getSourceVersion__Ljavax_lang_model_SourceVersion_2']();
  };
  invoker.compareTo__ILjava_lang_Enum_2 = function(target, p1) {
    return target['compareTo__ILjava_lang_Enum_2'](p1);
  };
  invoker.addTransformer__VLjava_lang_instrument_ClassFileTransformer_2 = function(target, p1) {
    return target['addTransformer__VLjava_lang_instrument_ClassFileTransformer_2'](p1);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpBZ2VudC1DbGFzczogb3JnLm5ldGJlYW5zLmh0bWwuYm9vdC5pbXBsLkpzQWdlbnQNCkJuZC1MYXN0TW9kaWZpZWQ6IDE1MTA1NzcxNzY2NDANCkJ1aWxkLUpkazogMS44LjBfMTQ0DQpCdWlsdC1CeTogZGV2ZWwNCkJ1bmRsZS1EZXNjcmlwdGlvbjogQnVpbGRlciB0byBsYXVuY2ggeW91ciBKYXZhL0hUTUwgYmFzZWQgYXBwbGljYXRpb24uDQpCdW5kbGUtRG9jVVJMOiBodHRwOi8vbmV0YmVhbnMub3JnDQpCdW5kbGUtTGljZW5zZTogaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC50eHQNCkJ1bmRsZS1NYW5pZmVzdFZlcnNpb246IDINCkJ1bmRsZS1OYW1lOiBCcm93c2VyIEJvb3RzdHJhcA0KQnVuZGxlLVN5bWJvbGljTmFtZTogbmV0LmphdmEuaHRtbC5ib290DQpCdW5kbGUtVmVuZG9yOiBOZXRCZWFucw0KQnVuZGxlLVZlcnNpb246IDEuNS4xDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gQnVuZGxlIFBsdWdpbg0KRWNsaXBzZS1CdWRkeVBvbGljeTogZGVwZW5kZW50DQpFeHBvcnQtUGFja2FnZTogbmV0LmphdmEuaHRtbC5qczt2ZXJzaW9uPSIxLjUuMSIsbmV0LmphdmEuaHRtbC5ib290O3ZlcnMNCiBpb249IjEuNS4xIixvcmcubmV0YmVhbnMuaHRtbC5ib290LnNwaTt2ZXJzaW9uPSIxLjUuMSINCkltcG9ydC1QYWNrYWdlOiBqYXZheC5hbm5vdGF0aW9uLnByb2Nlc3NpbmcsamF2YXgubGFuZy5tb2RlbCxqYXZheC5sYW5nLg0KIG1vZGVsLmVsZW1lbnQsamF2YXgubGFuZy5tb2RlbC50eXBlLGphdmF4LmxhbmcubW9kZWwudXRpbCxqYXZheC50b29scyxuDQogZXQuamF2YS5odG1sLG5ldC5qYXZhLmh0bWwuanM7dmVyc2lvbj0iWzEuNSwyKSIsb3JnLm5ldGJlYW5zLmh0bWwuY29udGUNCiB4dC5zcGksb3JnLm9iamVjdHdlYi5hc207dmVyc2lvbj0iWzUuMCw2KSI7cmVzb2x1dGlvbjo9b3B0aW9uYWwsb3JnLm9iag0KIGVjdHdlYi5hc20uc2lnbmF0dXJlO3ZlcnNpb249Ils1LjAsNikiO3Jlc29sdXRpb246PW9wdGlvbmFsDQpQcmVtYWluLUNsYXNzOiBvcmcubmV0YmVhbnMuaHRtbC5ib290LmltcGwuSnNBZ2VudA0KUmVxdWlyZS1DYXBhYmlsaXR5OiBvc2dpLmV4dGVuZGVyO3Jlc29sdXRpb246PW9wdGlvbmFsO2ZpbHRlcjo9Iihvc2dpLmV4DQogdGVuZGVyPW9zZ2kuc2VydmljZWxvYWRlci5wcm9jZXNzb3IpIixvc2dpLnNlcnZpY2Vsb2FkZXI7ZmlsdGVyOj0iKG9zZ2kNCiAuc2VydmljZWxvYWRlcj1vcmcubmV0YmVhbnMuaHRtbC5ib290LnNwaS5GbiRQcmVzZW50ZXIpIjtjYXJkaW5hbGl0eTo9bQ0KIHVsdGlwbGU7cmVzb2x1dGlvbjo9b3B0aW9uYWwNClRvb2w6IEJuZC0yLjEuMC4yMDEzMDQyNi0xMjIyMTMNCg==');
  exports['registerResource']('META-INF/DEPENDENCIES', 'Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCi8vIFRyYW5zaXRpdmUgZGVwZW5kZW5jaWVzIG9mIHRoaXMgcHJvamVjdCBkZXRlcm1pbmVkIGZyb20gdGhlCi8vIG1hdmVuIHBvbSBvcmdhbml6ZWQgYnkgb3JnYW5pemF0aW9uLgovLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCkJyb3dzZXIgQm9vdHN0cmFwCgoKCgoK');
  exports['registerResource']('META-INF/DISCLAIMER', 'QnJvd3NlciBCb290c3RyYXAgaXMgYW4gZWZmb3J0IHVuZGVyZ29pbmcgaW5jdWJhdGlvbiBhdCB0aGUgQXBhY2hlIFNvZnR3YXJlIApGb3VuZGF0aW9uIChBU0YpLCBzcG9uc29yZWQgYnkgdGhlIEFwYWNoZSBJbmN1YmF0b3IgUE1DLiAKCkluY3ViYXRpb24gaXMgcmVxdWlyZWQgb2YgYWxsIG5ld2x5IGFjY2VwdGVkIHByb2plY3RzIHVudGlsIGEgZnVydGhlciByZXZpZXcgCmluZGljYXRlcyB0aGF0IHRoZSBpbmZyYXN0cnVjdHVyZSwgY29tbXVuaWNhdGlvbnMsIGFuZCBkZWNpc2lvbiBtYWtpbmcgcHJvY2VzcyAKaGF2ZSBzdGFiaWxpemVkIGluIGEgbWFubmVyIGNvbnNpc3RlbnQgd2l0aCBvdGhlciBzdWNjZXNzZnVsIEFTRiBwcm9qZWN0cy4gCgpXaGlsZSBpbmN1YmF0aW9uIHN0YXR1cyBpcyBub3QgbmVjZXNzYXJpbHkgYSByZWZsZWN0aW9uIG9mIHRoZSBjb21wbGV0ZW5lc3MgCm9yIHN0YWJpbGl0eSBvZiB0aGUgY29kZSwgaXQgZG9lcyBpbmRpY2F0ZSB0aGF0IHRoZSBwcm9qZWN0IGhhcyB5ZXQgdG8gYmUgCmZ1bGx5IGVuZG9yc2VkIGJ5IHRoZSBBU0YuCg==');
  exports['registerResource']('META-INF/LICENSE', 'CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwYWNoZSBMaWNlbnNlCiAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcnNpb24gMi4wLCBKYW51YXJ5IDIwMDQKICAgICAgICAgICAgICAgICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzLwoKICAgVEVSTVMgQU5EIENPTkRJVElPTlMgRk9SIFVTRSwgUkVQUk9EVUNUSU9OLCBBTkQgRElTVFJJQlVUSU9OCgogICAxLiBEZWZpbml0aW9ucy4KCiAgICAgICJMaWNlbnNlIiBzaGFsbCBtZWFuIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBmb3IgdXNlLCByZXByb2R1Y3Rpb24sCiAgICAgIGFuZCBkaXN0cmlidXRpb24gYXMgZGVmaW5lZCBieSBTZWN0aW9ucyAxIHRocm91Z2ggOSBvZiB0aGlzIGRvY3VtZW50LgoKICAgICAgIkxpY2Vuc29yIiBzaGFsbCBtZWFuIHRoZSBjb3B5cmlnaHQgb3duZXIgb3IgZW50aXR5IGF1dGhvcml6ZWQgYnkKICAgICAgdGhlIGNvcHlyaWdodCBvd25lciB0aGF0IGlzIGdyYW50aW5nIHRoZSBMaWNlbnNlLgoKICAgICAgIkxlZ2FsIEVudGl0eSIgc2hhbGwgbWVhbiB0aGUgdW5pb24gb2YgdGhlIGFjdGluZyBlbnRpdHkgYW5kIGFsbAogICAgICBvdGhlciBlbnRpdGllcyB0aGF0IGNvbnRyb2wsIGFyZSBjb250cm9sbGVkIGJ5LCBvciBhcmUgdW5kZXIgY29tbW9uCiAgICAgIGNvbnRyb2wgd2l0aCB0aGF0IGVudGl0eS4gRm9yIHRoZSBwdXJwb3NlcyBvZiB0aGlzIGRlZmluaXRpb24sCiAgICAgICJjb250cm9sIiBtZWFucyAoaSkgdGhlIHBvd2VyLCBkaXJlY3Qgb3IgaW5kaXJlY3QsIHRvIGNhdXNlIHRoZQogICAgICBkaXJlY3Rpb24gb3IgbWFuYWdlbWVudCBvZiBzdWNoIGVudGl0eSwgd2hldGhlciBieSBjb250cmFjdCBvcgogICAgICBvdGhlcndpc2UsIG9yIChpaSkgb3duZXJzaGlwIG9mIGZpZnR5IHBlcmNlbnQgKDUwJSkgb3IgbW9yZSBvZiB0aGUKICAgICAgb3V0c3RhbmRpbmcgc2hhcmVzLCBvciAoaWlpKSBiZW5lZmljaWFsIG93bmVyc2hpcCBvZiBzdWNoIGVudGl0eS4KCiAgICAgICJZb3UiIChvciAiWW91ciIpIHNoYWxsIG1lYW4gYW4gaW5kaXZpZHVhbCBvciBMZWdhbCBFbnRpdHkKICAgICAgZXhlcmNpc2luZyBwZXJtaXNzaW9ucyBncmFudGVkIGJ5IHRoaXMgTGljZW5zZS4KCiAgICAgICJTb3VyY2UiIGZvcm0gc2hhbGwgbWVhbiB0aGUgcHJlZmVycmVkIGZvcm0gZm9yIG1ha2luZyBtb2RpZmljYXRpb25zLAogICAgICBpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIHNvZnR3YXJlIHNvdXJjZSBjb2RlLCBkb2N1bWVudGF0aW9uCiAgICAgIHNvdXJjZSwgYW5kIGNvbmZpZ3VyYXRpb24gZmlsZXMuCgogICAgICAiT2JqZWN0IiBmb3JtIHNoYWxsIG1lYW4gYW55IGZvcm0gcmVzdWx0aW5nIGZyb20gbWVjaGFuaWNhbAogICAgICB0cmFuc2Zvcm1hdGlvbiBvciB0cmFuc2xhdGlvbiBvZiBhIFNvdXJjZSBmb3JtLCBpbmNsdWRpbmcgYnV0CiAgICAgIG5vdCBsaW1pdGVkIHRvIGNvbXBpbGVkIG9iamVjdCBjb2RlLCBnZW5lcmF0ZWQgZG9jdW1lbnRhdGlvbiwKICAgICAgYW5kIGNvbnZlcnNpb25zIHRvIG90aGVyIG1lZGlhIHR5cGVzLgoKICAgICAgIldvcmsiIHNoYWxsIG1lYW4gdGhlIHdvcmsgb2YgYXV0aG9yc2hpcCwgd2hldGhlciBpbiBTb3VyY2Ugb3IKICAgICAgT2JqZWN0IGZvcm0sIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBMaWNlbnNlLCBhcyBpbmRpY2F0ZWQgYnkgYQogICAgICBjb3B5cmlnaHQgbm90aWNlIHRoYXQgaXMgaW5jbHVkZWQgaW4gb3IgYXR0YWNoZWQgdG8gdGhlIHdvcmsKICAgICAgKGFuIGV4YW1wbGUgaXMgcHJvdmlkZWQgaW4gdGhlIEFwcGVuZGl4IGJlbG93KS4KCiAgICAgICJEZXJpdmF0aXZlIFdvcmtzIiBzaGFsbCBtZWFuIGFueSB3b3JrLCB3aGV0aGVyIGluIFNvdXJjZSBvciBPYmplY3QKICAgICAgZm9ybSwgdGhhdCBpcyBiYXNlZCBvbiAob3IgZGVyaXZlZCBmcm9tKSB0aGUgV29yayBhbmQgZm9yIHdoaWNoIHRoZQogICAgICBlZGl0b3JpYWwgcmV2aXNpb25zLCBhbm5vdGF0aW9ucywgZWxhYm9yYXRpb25zLCBvciBvdGhlciBtb2RpZmljYXRpb25zCiAgICAgIHJlcHJlc2VudCwgYXMgYSB3aG9sZSwgYW4gb3JpZ2luYWwgd29yayBvZiBhdXRob3JzaGlwLiBGb3IgdGhlIHB1cnBvc2VzCiAgICAgIG9mIHRoaXMgTGljZW5zZSwgRGVyaXZhdGl2ZSBXb3JrcyBzaGFsbCBub3QgaW5jbHVkZSB3b3JrcyB0aGF0IHJlbWFpbgogICAgICBzZXBhcmFibGUgZnJvbSwgb3IgbWVyZWx5IGxpbmsgKG9yIGJpbmQgYnkgbmFtZSkgdG8gdGhlIGludGVyZmFjZXMgb2YsCiAgICAgIHRoZSBXb3JrIGFuZCBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YuCgogICAgICAiQ29udHJpYnV0aW9uIiBzaGFsbCBtZWFuIGFueSB3b3JrIG9mIGF1dGhvcnNoaXAsIGluY2x1ZGluZwogICAgICB0aGUgb3JpZ2luYWwgdmVyc2lvbiBvZiB0aGUgV29yayBhbmQgYW55IG1vZGlmaWNhdGlvbnMgb3IgYWRkaXRpb25zCiAgICAgIHRvIHRoYXQgV29yayBvciBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YsIHRoYXQgaXMgaW50ZW50aW9uYWxseQogICAgICBzdWJtaXR0ZWQgdG8gTGljZW5zb3IgZm9yIGluY2x1c2lvbiBpbiB0aGUgV29yayBieSB0aGUgY29weXJpZ2h0IG93bmVyCiAgICAgIG9yIGJ5IGFuIGluZGl2aWR1YWwgb3IgTGVnYWwgRW50aXR5IGF1dGhvcml6ZWQgdG8gc3VibWl0IG9uIGJlaGFsZiBvZgogICAgICB0aGUgY29weXJpZ2h0IG93bmVyLiBGb3IgdGhlIHB1cnBvc2VzIG9mIHRoaXMgZGVmaW5pdGlvbiwgInN1Ym1pdHRlZCIKICAgICAgbWVhbnMgYW55IGZvcm0gb2YgZWxlY3Ryb25pYywgdmVyYmFsLCBvciB3cml0dGVuIGNvbW11bmljYXRpb24gc2VudAogICAgICB0byB0aGUgTGljZW5zb3Igb3IgaXRzIHJlcHJlc2VudGF0aXZlcywgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0bwogICAgICBjb21tdW5pY2F0aW9uIG9uIGVsZWN0cm9uaWMgbWFpbGluZyBsaXN0cywgc291cmNlIGNvZGUgY29udHJvbCBzeXN0ZW1zLAogICAgICBhbmQgaXNzdWUgdHJhY2tpbmcgc3lzdGVtcyB0aGF0IGFyZSBtYW5hZ2VkIGJ5LCBvciBvbiBiZWhhbGYgb2YsIHRoZQogICAgICBMaWNlbnNvciBmb3IgdGhlIHB1cnBvc2Ugb2YgZGlzY3Vzc2luZyBhbmQgaW1wcm92aW5nIHRoZSBXb3JrLCBidXQKICAgICAgZXhjbHVkaW5nIGNvbW11bmljYXRpb24gdGhhdCBpcyBjb25zcGljdW91c2x5IG1hcmtlZCBvciBvdGhlcndpc2UKICAgICAgZGVzaWduYXRlZCBpbiB3cml0aW5nIGJ5IHRoZSBjb3B5cmlnaHQgb3duZXIgYXMgIk5vdCBhIENvbnRyaWJ1dGlvbi4iCgogICAgICAiQ29udHJpYnV0b3IiIHNoYWxsIG1lYW4gTGljZW5zb3IgYW5kIGFueSBpbmRpdmlkdWFsIG9yIExlZ2FsIEVudGl0eQogICAgICBvbiBiZWhhbGYgb2Ygd2hvbSBhIENvbnRyaWJ1dGlvbiBoYXMgYmVlbiByZWNlaXZlZCBieSBMaWNlbnNvciBhbmQKICAgICAgc3Vic2VxdWVudGx5IGluY29ycG9yYXRlZCB3aXRoaW4gdGhlIFdvcmsuCgogICAyLiBHcmFudCBvZiBDb3B5cmlnaHQgTGljZW5zZS4gU3ViamVjdCB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCBlYWNoIENvbnRyaWJ1dG9yIGhlcmVieSBncmFudHMgdG8gWW91IGEgcGVycGV0dWFsLAogICAgICB3b3JsZHdpZGUsIG5vbi1leGNsdXNpdmUsIG5vLWNoYXJnZSwgcm95YWx0eS1mcmVlLCBpcnJldm9jYWJsZQogICAgICBjb3B5cmlnaHQgbGljZW5zZSB0byByZXByb2R1Y2UsIHByZXBhcmUgRGVyaXZhdGl2ZSBXb3JrcyBvZiwKICAgICAgcHVibGljbHkgZGlzcGxheSwgcHVibGljbHkgcGVyZm9ybSwgc3VibGljZW5zZSwgYW5kIGRpc3RyaWJ1dGUgdGhlCiAgICAgIFdvcmsgYW5kIHN1Y2ggRGVyaXZhdGl2ZSBXb3JrcyBpbiBTb3VyY2Ugb3IgT2JqZWN0IGZvcm0uCgogICAzLiBHcmFudCBvZiBQYXRlbnQgTGljZW5zZS4gU3ViamVjdCB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCBlYWNoIENvbnRyaWJ1dG9yIGhlcmVieSBncmFudHMgdG8gWW91IGEgcGVycGV0dWFsLAogICAgICB3b3JsZHdpZGUsIG5vbi1leGNsdXNpdmUsIG5vLWNoYXJnZSwgcm95YWx0eS1mcmVlLCBpcnJldm9jYWJsZQogICAgICAoZXhjZXB0IGFzIHN0YXRlZCBpbiB0aGlzIHNlY3Rpb24pIHBhdGVudCBsaWNlbnNlIHRvIG1ha2UsIGhhdmUgbWFkZSwKICAgICAgdXNlLCBvZmZlciB0byBzZWxsLCBzZWxsLCBpbXBvcnQsIGFuZCBvdGhlcndpc2UgdHJhbnNmZXIgdGhlIFdvcmssCiAgICAgIHdoZXJlIHN1Y2ggbGljZW5zZSBhcHBsaWVzIG9ubHkgdG8gdGhvc2UgcGF0ZW50IGNsYWltcyBsaWNlbnNhYmxlCiAgICAgIGJ5IHN1Y2ggQ29udHJpYnV0b3IgdGhhdCBhcmUgbmVjZXNzYXJpbHkgaW5mcmluZ2VkIGJ5IHRoZWlyCiAgICAgIENvbnRyaWJ1dGlvbihzKSBhbG9uZSBvciBieSBjb21iaW5hdGlvbiBvZiB0aGVpciBDb250cmlidXRpb24ocykKICAgICAgd2l0aCB0aGUgV29yayB0byB3aGljaCBzdWNoIENvbnRyaWJ1dGlvbihzKSB3YXMgc3VibWl0dGVkLiBJZiBZb3UKICAgICAgaW5zdGl0dXRlIHBhdGVudCBsaXRpZ2F0aW9uIGFnYWluc3QgYW55IGVudGl0eSAoaW5jbHVkaW5nIGEKICAgICAgY3Jvc3MtY2xhaW0gb3IgY291bnRlcmNsYWltIGluIGEgbGF3c3VpdCkgYWxsZWdpbmcgdGhhdCB0aGUgV29yawogICAgICBvciBhIENvbnRyaWJ1dGlvbiBpbmNvcnBvcmF0ZWQgd2l0aGluIHRoZSBXb3JrIGNvbnN0aXR1dGVzIGRpcmVjdAogICAgICBvciBjb250cmlidXRvcnkgcGF0ZW50IGluZnJpbmdlbWVudCwgdGhlbiBhbnkgcGF0ZW50IGxpY2Vuc2VzCiAgICAgIGdyYW50ZWQgdG8gWW91IHVuZGVyIHRoaXMgTGljZW5zZSBmb3IgdGhhdCBXb3JrIHNoYWxsIHRlcm1pbmF0ZQogICAgICBhcyBvZiB0aGUgZGF0ZSBzdWNoIGxpdGlnYXRpb24gaXMgZmlsZWQuCgogICA0LiBSZWRpc3RyaWJ1dGlvbi4gWW91IG1heSByZXByb2R1Y2UgYW5kIGRpc3RyaWJ1dGUgY29waWVzIG9mIHRoZQogICAgICBXb3JrIG9yIERlcml2YXRpdmUgV29ya3MgdGhlcmVvZiBpbiBhbnkgbWVkaXVtLCB3aXRoIG9yIHdpdGhvdXQKICAgICAgbW9kaWZpY2F0aW9ucywgYW5kIGluIFNvdXJjZSBvciBPYmplY3QgZm9ybSwgcHJvdmlkZWQgdGhhdCBZb3UKICAgICAgbWVldCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6CgogICAgICAoYSkgWW91IG11c3QgZ2l2ZSBhbnkgb3RoZXIgcmVjaXBpZW50cyBvZiB0aGUgV29yayBvcgogICAgICAgICAgRGVyaXZhdGl2ZSBXb3JrcyBhIGNvcHkgb2YgdGhpcyBMaWNlbnNlOyBhbmQKCiAgICAgIChiKSBZb3UgbXVzdCBjYXVzZSBhbnkgbW9kaWZpZWQgZmlsZXMgdG8gY2FycnkgcHJvbWluZW50IG5vdGljZXMKICAgICAgICAgIHN0YXRpbmcgdGhhdCBZb3UgY2hhbmdlZCB0aGUgZmlsZXM7IGFuZAoKICAgICAgKGMpIFlvdSBtdXN0IHJldGFpbiwgaW4gdGhlIFNvdXJjZSBmb3JtIG9mIGFueSBEZXJpdmF0aXZlIFdvcmtzCiAgICAgICAgICB0aGF0IFlvdSBkaXN0cmlidXRlLCBhbGwgY29weXJpZ2h0LCBwYXRlbnQsIHRyYWRlbWFyaywgYW5kCiAgICAgICAgICBhdHRyaWJ1dGlvbiBub3RpY2VzIGZyb20gdGhlIFNvdXJjZSBmb3JtIG9mIHRoZSBXb3JrLAogICAgICAgICAgZXhjbHVkaW5nIHRob3NlIG5vdGljZXMgdGhhdCBkbyBub3QgcGVydGFpbiB0byBhbnkgcGFydCBvZgogICAgICAgICAgdGhlIERlcml2YXRpdmUgV29ya3M7IGFuZAoKICAgICAgKGQpIElmIHRoZSBXb3JrIGluY2x1ZGVzIGEgIk5PVElDRSIgdGV4dCBmaWxlIGFzIHBhcnQgb2YgaXRzCiAgICAgICAgICBkaXN0cmlidXRpb24sIHRoZW4gYW55IERlcml2YXRpdmUgV29ya3MgdGhhdCBZb3UgZGlzdHJpYnV0ZSBtdXN0CiAgICAgICAgICBpbmNsdWRlIGEgcmVhZGFibGUgY29weSBvZiB0aGUgYXR0cmlidXRpb24gbm90aWNlcyBjb250YWluZWQKICAgICAgICAgIHdpdGhpbiBzdWNoIE5PVElDRSBmaWxlLCBleGNsdWRpbmcgdGhvc2Ugbm90aWNlcyB0aGF0IGRvIG5vdAogICAgICAgICAgcGVydGFpbiB0byBhbnkgcGFydCBvZiB0aGUgRGVyaXZhdGl2ZSBXb3JrcywgaW4gYXQgbGVhc3Qgb25lCiAgICAgICAgICBvZiB0aGUgZm9sbG93aW5nIHBsYWNlczogd2l0aGluIGEgTk9USUNFIHRleHQgZmlsZSBkaXN0cmlidXRlZAogICAgICAgICAgYXMgcGFydCBvZiB0aGUgRGVyaXZhdGl2ZSBXb3Jrczsgd2l0aGluIHRoZSBTb3VyY2UgZm9ybSBvcgogICAgICAgICAgZG9jdW1lbnRhdGlvbiwgaWYgcHJvdmlkZWQgYWxvbmcgd2l0aCB0aGUgRGVyaXZhdGl2ZSBXb3Jrczsgb3IsCiAgICAgICAgICB3aXRoaW4gYSBkaXNwbGF5IGdlbmVyYXRlZCBieSB0aGUgRGVyaXZhdGl2ZSBXb3JrcywgaWYgYW5kCiAgICAgICAgICB3aGVyZXZlciBzdWNoIHRoaXJkLXBhcnR5IG5vdGljZXMgbm9ybWFsbHkgYXBwZWFyLiBUaGUgY29udGVudHMKICAgICAgICAgIG9mIHRoZSBOT1RJQ0UgZmlsZSBhcmUgZm9yIGluZm9ybWF0aW9uYWwgcHVycG9zZXMgb25seSBhbmQKICAgICAgICAgIGRvIG5vdCBtb2RpZnkgdGhlIExpY2Vuc2UuIFlvdSBtYXkgYWRkIFlvdXIgb3duIGF0dHJpYnV0aW9uCiAgICAgICAgICBub3RpY2VzIHdpdGhpbiBEZXJpdmF0aXZlIFdvcmtzIHRoYXQgWW91IGRpc3RyaWJ1dGUsIGFsb25nc2lkZQogICAgICAgICAgb3IgYXMgYW4gYWRkZW5kdW0gdG8gdGhlIE5PVElDRSB0ZXh0IGZyb20gdGhlIFdvcmssIHByb3ZpZGVkCiAgICAgICAgICB0aGF0IHN1Y2ggYWRkaXRpb25hbCBhdHRyaWJ1dGlvbiBub3RpY2VzIGNhbm5vdCBiZSBjb25zdHJ1ZWQKICAgICAgICAgIGFzIG1vZGlmeWluZyB0aGUgTGljZW5zZS4KCiAgICAgIFlvdSBtYXkgYWRkIFlvdXIgb3duIGNvcHlyaWdodCBzdGF0ZW1lbnQgdG8gWW91ciBtb2RpZmljYXRpb25zIGFuZAogICAgICBtYXkgcHJvdmlkZSBhZGRpdGlvbmFsIG9yIGRpZmZlcmVudCBsaWNlbnNlIHRlcm1zIGFuZCBjb25kaXRpb25zCiAgICAgIGZvciB1c2UsIHJlcHJvZHVjdGlvbiwgb3IgZGlzdHJpYnV0aW9uIG9mIFlvdXIgbW9kaWZpY2F0aW9ucywgb3IKICAgICAgZm9yIGFueSBzdWNoIERlcml2YXRpdmUgV29ya3MgYXMgYSB3aG9sZSwgcHJvdmlkZWQgWW91ciB1c2UsCiAgICAgIHJlcHJvZHVjdGlvbiwgYW5kIGRpc3RyaWJ1dGlvbiBvZiB0aGUgV29yayBvdGhlcndpc2UgY29tcGxpZXMgd2l0aAogICAgICB0aGUgY29uZGl0aW9ucyBzdGF0ZWQgaW4gdGhpcyBMaWNlbnNlLgoKICAgNS4gU3VibWlzc2lvbiBvZiBDb250cmlidXRpb25zLiBVbmxlc3MgWW91IGV4cGxpY2l0bHkgc3RhdGUgb3RoZXJ3aXNlLAogICAgICBhbnkgQ29udHJpYnV0aW9uIGludGVudGlvbmFsbHkgc3VibWl0dGVkIGZvciBpbmNsdXNpb24gaW4gdGhlIFdvcmsKICAgICAgYnkgWW91IHRvIHRoZSBMaWNlbnNvciBzaGFsbCBiZSB1bmRlciB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCB3aXRob3V0IGFueSBhZGRpdGlvbmFsIHRlcm1zIG9yIGNvbmRpdGlvbnMuCiAgICAgIE5vdHdpdGhzdGFuZGluZyB0aGUgYWJvdmUsIG5vdGhpbmcgaGVyZWluIHNoYWxsIHN1cGVyc2VkZSBvciBtb2RpZnkKICAgICAgdGhlIHRlcm1zIG9mIGFueSBzZXBhcmF0ZSBsaWNlbnNlIGFncmVlbWVudCB5b3UgbWF5IGhhdmUgZXhlY3V0ZWQKICAgICAgd2l0aCBMaWNlbnNvciByZWdhcmRpbmcgc3VjaCBDb250cmlidXRpb25zLgoKICAgNi4gVHJhZGVtYXJrcy4gVGhpcyBMaWNlbnNlIGRvZXMgbm90IGdyYW50IHBlcm1pc3Npb24gdG8gdXNlIHRoZSB0cmFkZQogICAgICBuYW1lcywgdHJhZGVtYXJrcywgc2VydmljZSBtYXJrcywgb3IgcHJvZHVjdCBuYW1lcyBvZiB0aGUgTGljZW5zb3IsCiAgICAgIGV4Y2VwdCBhcyByZXF1aXJlZCBmb3IgcmVhc29uYWJsZSBhbmQgY3VzdG9tYXJ5IHVzZSBpbiBkZXNjcmliaW5nIHRoZQogICAgICBvcmlnaW4gb2YgdGhlIFdvcmsgYW5kIHJlcHJvZHVjaW5nIHRoZSBjb250ZW50IG9mIHRoZSBOT1RJQ0UgZmlsZS4KCiAgIDcuIERpc2NsYWltZXIgb2YgV2FycmFudHkuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvcgogICAgICBhZ3JlZWQgdG8gaW4gd3JpdGluZywgTGljZW5zb3IgcHJvdmlkZXMgdGhlIFdvcmsgKGFuZCBlYWNoCiAgICAgIENvbnRyaWJ1dG9yIHByb3ZpZGVzIGl0cyBDb250cmlidXRpb25zKSBvbiBhbiAiQVMgSVMiIEJBU0lTLAogICAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IKICAgICAgaW1wbGllZCwgaW5jbHVkaW5nLCB3aXRob3V0IGxpbWl0YXRpb24sIGFueSB3YXJyYW50aWVzIG9yIGNvbmRpdGlvbnMKICAgICAgb2YgVElUTEUsIE5PTi1JTkZSSU5HRU1FTlQsIE1FUkNIQU5UQUJJTElUWSwgb3IgRklUTkVTUyBGT1IgQQogICAgICBQQVJUSUNVTEFSIFBVUlBPU0UuIFlvdSBhcmUgc29sZWx5IHJlc3BvbnNpYmxlIGZvciBkZXRlcm1pbmluZyB0aGUKICAgICAgYXBwcm9wcmlhdGVuZXNzIG9mIHVzaW5nIG9yIHJlZGlzdHJpYnV0aW5nIHRoZSBXb3JrIGFuZCBhc3N1bWUgYW55CiAgICAgIHJpc2tzIGFzc29jaWF0ZWQgd2l0aCBZb3VyIGV4ZXJjaXNlIG9mIHBlcm1pc3Npb25zIHVuZGVyIHRoaXMgTGljZW5zZS4KCiAgIDguIExpbWl0YXRpb24gb2YgTGlhYmlsaXR5LiBJbiBubyBldmVudCBhbmQgdW5kZXIgbm8gbGVnYWwgdGhlb3J5LAogICAgICB3aGV0aGVyIGluIHRvcnQgKGluY2x1ZGluZyBuZWdsaWdlbmNlKSwgY29udHJhY3QsIG9yIG90aGVyd2lzZSwKICAgICAgdW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IChzdWNoIGFzIGRlbGliZXJhdGUgYW5kIGdyb3NzbHkKICAgICAgbmVnbGlnZW50IGFjdHMpIG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzaGFsbCBhbnkgQ29udHJpYnV0b3IgYmUKICAgICAgbGlhYmxlIHRvIFlvdSBmb3IgZGFtYWdlcywgaW5jbHVkaW5nIGFueSBkaXJlY3QsIGluZGlyZWN0LCBzcGVjaWFsLAogICAgICBpbmNpZGVudGFsLCBvciBjb25zZXF1ZW50aWFsIGRhbWFnZXMgb2YgYW55IGNoYXJhY3RlciBhcmlzaW5nIGFzIGEKICAgICAgcmVzdWx0IG9mIHRoaXMgTGljZW5zZSBvciBvdXQgb2YgdGhlIHVzZSBvciBpbmFiaWxpdHkgdG8gdXNlIHRoZQogICAgICBXb3JrIChpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIGRhbWFnZXMgZm9yIGxvc3Mgb2YgZ29vZHdpbGwsCiAgICAgIHdvcmsgc3RvcHBhZ2UsIGNvbXB1dGVyIGZhaWx1cmUgb3IgbWFsZnVuY3Rpb24sIG9yIGFueSBhbmQgYWxsCiAgICAgIG90aGVyIGNvbW1lcmNpYWwgZGFtYWdlcyBvciBsb3NzZXMpLCBldmVuIGlmIHN1Y2ggQ29udHJpYnV0b3IKICAgICAgaGFzIGJlZW4gYWR2aXNlZCBvZiB0aGUgcG9zc2liaWxpdHkgb2Ygc3VjaCBkYW1hZ2VzLgoKICAgOS4gQWNjZXB0aW5nIFdhcnJhbnR5IG9yIEFkZGl0aW9uYWwgTGlhYmlsaXR5LiBXaGlsZSByZWRpc3RyaWJ1dGluZwogICAgICB0aGUgV29yayBvciBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YsIFlvdSBtYXkgY2hvb3NlIHRvIG9mZmVyLAogICAgICBhbmQgY2hhcmdlIGEgZmVlIGZvciwgYWNjZXB0YW5jZSBvZiBzdXBwb3J0LCB3YXJyYW50eSwgaW5kZW1uaXR5LAogICAgICBvciBvdGhlciBsaWFiaWxpdHkgb2JsaWdhdGlvbnMgYW5kL29yIHJpZ2h0cyBjb25zaXN0ZW50IHdpdGggdGhpcwogICAgICBMaWNlbnNlLiBIb3dldmVyLCBpbiBhY2NlcHRpbmcgc3VjaCBvYmxpZ2F0aW9ucywgWW91IG1heSBhY3Qgb25seQogICAgICBvbiBZb3VyIG93biBiZWhhbGYgYW5kIG9uIFlvdXIgc29sZSByZXNwb25zaWJpbGl0eSwgbm90IG9uIGJlaGFsZgogICAgICBvZiBhbnkgb3RoZXIgQ29udHJpYnV0b3IsIGFuZCBvbmx5IGlmIFlvdSBhZ3JlZSB0byBpbmRlbW5pZnksCiAgICAgIGRlZmVuZCwgYW5kIGhvbGQgZWFjaCBDb250cmlidXRvciBoYXJtbGVzcyBmb3IgYW55IGxpYWJpbGl0eQogICAgICBpbmN1cnJlZCBieSwgb3IgY2xhaW1zIGFzc2VydGVkIGFnYWluc3QsIHN1Y2ggQ29udHJpYnV0b3IgYnkgcmVhc29uCiAgICAgIG9mIHlvdXIgYWNjZXB0aW5nIGFueSBzdWNoIHdhcnJhbnR5IG9yIGFkZGl0aW9uYWwgbGlhYmlsaXR5LgoKICAgRU5EIE9GIFRFUk1TIEFORCBDT05ESVRJT05TCgogICBBUFBFTkRJWDogSG93IHRvIGFwcGx5IHRoZSBBcGFjaGUgTGljZW5zZSB0byB5b3VyIHdvcmsuCgogICAgICBUbyBhcHBseSB0aGUgQXBhY2hlIExpY2Vuc2UgdG8geW91ciB3b3JrLCBhdHRhY2ggdGhlIGZvbGxvd2luZwogICAgICBib2lsZXJwbGF0ZSBub3RpY2UsIHdpdGggdGhlIGZpZWxkcyBlbmNsb3NlZCBieSBicmFja2V0cyAiW10iCiAgICAgIHJlcGxhY2VkIHdpdGggeW91ciBvd24gaWRlbnRpZnlpbmcgaW5mb3JtYXRpb24uIChEb24ndCBpbmNsdWRlCiAgICAgIHRoZSBicmFja2V0cyEpICBUaGUgdGV4dCBzaG91bGQgYmUgZW5jbG9zZWQgaW4gdGhlIGFwcHJvcHJpYXRlCiAgICAgIGNvbW1lbnQgc3ludGF4IGZvciB0aGUgZmlsZSBmb3JtYXQuIFdlIGFsc28gcmVjb21tZW5kIHRoYXQgYQogICAgICBmaWxlIG9yIGNsYXNzIG5hbWUgYW5kIGRlc2NyaXB0aW9uIG9mIHB1cnBvc2UgYmUgaW5jbHVkZWQgb24gdGhlCiAgICAgIHNhbWUgInByaW50ZWQgcGFnZSIgYXMgdGhlIGNvcHlyaWdodCBub3RpY2UgZm9yIGVhc2llcgogICAgICBpZGVudGlmaWNhdGlvbiB3aXRoaW4gdGhpcmQtcGFydHkgYXJjaGl2ZXMuCgogICBDb3B5cmlnaHQgW3l5eXldIFtuYW1lIG9mIGNvcHlyaWdodCBvd25lcl0KCiAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwogICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCiAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoKICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoKICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQogICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAogICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAogICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4K');
  exports['registerResource']('META-INF/NOTICE', 'CkJyb3dzZXIgQm9vdHN0cmFwCkNvcHlyaWdodCAyMDE3IE5ldEJlYW5zCgpUaGlzIHByb2R1Y3QgaW5jbHVkZXMgc29mdHdhcmUgZGV2ZWxvcGVkIGF0ClRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoaHR0cDovL3d3dy5hcGFjaGUub3JnLykuCgoK');
  exports['registerResource']('META-INF/services/javax.annotation.processing.Processor', 'b3JnLm5ldGJlYW5zLmh0bWwuYm9vdC5pbXBsLkphdmFTY3JpcHRQcm9jZXNvcgo=');
  exports['registerResource']('net/java/html/boot/html4j.txt', 'PT09PQogICAgTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZQogICAgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlCiAgICBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbgogICAgcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZQogICAgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZQogICAgIkxpY2Vuc2UiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZQogICAgd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoKICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCgogICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLAogICAgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4KICAgICJBUyBJUyIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWQogICAgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlCiAgICBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zCiAgICB1bmRlciB0aGUgTGljZW5zZS4KPT09PQoK');
});