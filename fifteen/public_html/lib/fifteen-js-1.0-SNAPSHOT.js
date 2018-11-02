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
vm.java_lang_Object = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Object;
  return link('java/lang/Object', function(f) { vm.java_lang_Object = f;})(instance);
}
vm.java_lang_Class = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Class;
  return link('java/lang/Class', function(f) { vm.java_lang_Class = f;})(instance);
}
vm.java_lang_ArithmeticException = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_ArithmeticException;
  return link('java/lang/ArithmeticException', function(f) { vm.java_lang_ArithmeticException = f;})(instance);
}

function com_dukescript_demo_fifteen_js_$JsCallbacks$() {
  var m;
  var CLS = com_dukescript_demo_fifteen_js_$JsCallbacks$;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_VM'] = null;
  m = c._VM = function (v) {  if (arguments.length == 1) CLS['fld_VM'] = v; return CLS['fld_VM']; };
  m = c._p = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_demo_fifteen_js_$JsCallbacks$_p'] = v; return this['fld_com_dukescript_demo_fifteen_js_$JsCallbacks$_p']; };
  m = c._last = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_demo_fifteen_js_$JsCallbacks$_last'] = v; return this['fld_com_dukescript_demo_fifteen_js_$JsCallbacks$_last']; };
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
return (refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
};
    m.access = 2;
    m.cls = CLS;
    m = c.current__Lcom_dukescript_demo_fifteen_js_$JsCallbacks$_2 = function() {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
return c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA1, lcA1);
};
    m.access = 16;
    m.cls = CLS;
    m = c.java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
return invoker.run__V(lcA1);
};
c['java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Runnable_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
return invoker.run__V(lcA1);
};
c['raw$java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new com_dukescript_demo_fifteen_js_$JsCallbacks$;
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA0, null);
c._VM(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_demo_fifteen_js_$JsCallbacks$fillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_demo_fifteen_js_$JsCallbacks$', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_demo_fifteen_js_$JsCallbacks$fillInstOf });
    com_dukescript_demo_fifteen_js_$JsCallbacks$fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/demo/fifteen/js/$JsCallbacks$';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_Object;
    var refs_org_netbeans_html_boot_spi_Fn;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_com_dukescript_demo_fifteen_js_$JsCallbacks$_p'] = null;
    this['fld_com_dukescript_demo_fifteen_js_$JsCallbacks$_last'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_demo_fifteen_js_$JsCallbacks$ = registerClass(exports,'com_dukescript_demo_fifteen_js_$JsCallbacks$',com_dukescript_demo_fifteen_js_$JsCallbacks$);

vm.java_lang_Throwable = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Throwable;
  return link('java/lang/Throwable', function(f) { vm.java_lang_Throwable = f;})(instance);
}
vm.org_netbeans_html_boot_spi_Fn = link('org/netbeans/html/boot/spi/Fn', function(f) { vm.org_netbeans_html_boot_spi_Fn =  f; });

function com_dukescript_demo_fifteen_js_PlatformServices() {
  var m;
  var CLS = com_dukescript_demo_fifteen_js_PlatformServices;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$getPreferencesImpl_1'] = null;
  m = c._$$fn$$getPreferencesImpl_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getPreferencesImpl_1'] = v; return CLS['fld_$$fn$$getPreferencesImpl_1']; };
  CLS['fld_$$fn$$setPreferencesImpl_2'] = null;
  m = c._$$fn$$setPreferencesImpl_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setPreferencesImpl_2'] = v; return CLS['fld_$$fn$$setPreferencesImpl_2']; };
  CLS['fld_$$fn$$confirmImpl_3'] = null;
  m = c._$$fn$$confirmImpl_3 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$confirmImpl_3'] = v; return CLS['fld_$$fn$$confirmImpl_3']; };
  CLS['fld_$$fn$$screenSizeImpl_4'] = null;
  m = c._$$fn$$screenSizeImpl_4 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$screenSizeImpl_4'] = v; return CLS['fld_$$fn$$screenSizeImpl_4']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPreferences__Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = c.getPreferencesImpl__Ljava_lang_String_2Ljava_lang_String_2(lcA1);
return stA0;

};
c['getPreferences__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPreferences__VLjava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.setPreferencesImpl__VLjava_lang_String_2Ljava_lang_String_2(lcA1, lcA2);
return;

};
c['setPreferences__VLjava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.confirmByUser__VLjava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.confirmImpl__VLjava_lang_String_2Ljava_lang_Runnable_2(lcA1, lcA2);
return;

};
c['confirmByUser__VLjava_lang_String_2Ljava_lang_Runnable_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getScreenSize___3I = function() {
  var  lcA0 = this;
var stA0 = c.screenSizeImpl___3Ljava_lang_Object_2();
var lcA1 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, 2);
if ((lcA1[0] || Array.at(lcA1, 0)) !== null && !(lcA1[0] || Array.at(lcA1, 0))['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx((lcA1[0] || Array.at(lcA1, 0)), 'java.lang.Number');
var stA1 = stA0;var stI2 = 0;var stI3 = invoker.intValue__I((lcA1[0] || Array.at(lcA1, 0)));
Array.at(stA1, stI2, stI3);
if ((lcA1[1] || Array.at(lcA1, 1)) !== null && !(lcA1[1] || Array.at(lcA1, 1))['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx((lcA1[1] || Array.at(lcA1, 1)), 'java.lang.Number');
var stA1 = stA0;var stI2 = 1;var stI3 = invoker.intValue__I((lcA1[1] || Array.at(lcA1, 1)));
Array.at(stA1, stI2, stI3);
return stA0;

};
c['getScreenSize___3I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPreferencesImpl__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(key) {

  key = vm.java_lang_Class(false).toJS(key);if (!window.localStorage) return null;
return window.localStorage.getItem(key);

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.setPreferencesImpl__VLjava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(key,value) {

  key = vm.java_lang_Class(false).toJS(key);
  value = vm.java_lang_Class(false).toJS(value);if (!window.localStorage) return;
window.localStorage.setItem(key, value);

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.confirmImpl__VLjava_lang_String_2Ljava_lang_Runnable_2 = function() {
  var r = (function(msg,callback) {

  msg = vm.java_lang_Class(false).toJS(msg);
  callback = vm.java_lang_Class(false).toJS(callback);if (confirm(msg)) {
  vm.java_lang_Class(false).toJS(vm.com_dukescript_demo_fifteen_js_$JsCallbacks$(false)._VM().java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Runnable_2(callback));
}

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = c.screenSizeImpl___3Ljava_lang_Object_2 = function() {
  var r = (function() {
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

return [x, y];

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_demo_fifteen_js_PlatformServicesfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_demo_fifteen_js_PlatformServices', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_demo_fifteen_js_PlatformServicesfillInstOf });
    com_dukescript_demo_fifteen_js_PlatformServicesfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/demo/fifteen/js/PlatformServices';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_demo_fifteen_js_PlatformServices = registerClass(exports,'com_dukescript_demo_fifteen_js_PlatformServices',com_dukescript_demo_fifteen_js_PlatformServices);

  invoker.run__V = function(target) {
    return target['run__V']();
  };
  invoker.close__V = function(target) {
    return target['close__V']();
  };
  invoker.addSuppressed__VLjava_lang_Throwable_2 = function(target, p1) {
    return target['addSuppressed__VLjava_lang_Throwable_2'](p1);
  };
  invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['toJava__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.intValue__I = function(target) {
    return target['intValue__I']();
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTQxMTc1MjcxNTM3DQpCdWlsZC1KZGs6IDEuOC4wXzExMg0KQnVpbHQtQnk6IGFudG9uZXBwbGUNCkJ1bmRsZS1EZXNjcmlwdGlvbjogRGVtb3Mgb2YgRHVrZVNjcmlwdA0KQnVuZGxlLUxpY2Vuc2U6IGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogZmlmdGVlbiBKYXZhU2NyaXB0IExpYnJhcmllcw0KQnVuZGxlLVN5bWJvbGljTmFtZTogY29tLmR1a2VzY3JpcHQuZGVtby5maWZ0ZWVuLmpzDQpCdW5kbGUtVmVyc2lvbjogMS4wLjAuU05BUFNIT1QNCkNyZWF0ZWQtQnk6IEFwYWNoZSBNYXZlbiBCdW5kbGUgUGx1Z2luDQpFeHBvcnQtUGFja2FnZTogY29tLmR1a2VzY3JpcHQuZGVtby5maWZ0ZWVuLmpzO3ZlcnNpb249IjEuMC4wLlNOQVBTSE9UIg0KSW1wb3J0LVBhY2thZ2U6IG9yZy5uZXRiZWFucy5odG1sLmJvb3Quc3BpO3ZlcnNpb249IlsxLjUsMikiDQpUb29sOiBCbmQtMi4xLjAuMjAxMzA0MjYtMTIyMjEzDQo=');
});