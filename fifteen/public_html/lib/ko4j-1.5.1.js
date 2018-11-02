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

function org_netbeans_html_ko4j_$JsCallbacks$() {
  var m;
  var CLS = org_netbeans_html_ko4j_$JsCallbacks$;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_VM'] = null;
  m = c._VM = function (v) {  if (arguments.length == 1) CLS['fld_VM'] = v; return CLS['fld_VM']; };
  m = c._p = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_$JsCallbacks$_p'] = v; return this['fld_org_netbeans_html_ko4j_$JsCallbacks$_p']; };
  m = c._last = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_$JsCallbacks$_last'] = v; return this['fld_org_netbeans_html_ko4j_$JsCallbacks$_last']; };
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
return (refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
};
    m.access = 2;
    m.cls = CLS;
    m = c.current__Lorg_netbeans_html_ko4j_$JsCallbacks$_2 = function() {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
return c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA1, lcA1);
};
    m.access = 16;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1json_1spi_1JSONCall$notifySuccess$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
return invoker.notifySuccess__VLjava_lang_Object_2(lcA1,lcA2);
};
c['org_1netbeans_1html_1json_1spi_1JSONCall$notifySuccess$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1json_1spi_1JSONCall$notifySuccess$Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
return invoker.notifySuccess__VLjava_lang_Object_2(lcA1,lcA2);
};
c['raw$org_1netbeans_1html_1json_1spi_1JSONCall$notifySuccess$Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1KOTransfer$notifyError$Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
return (refs_org_netbeans_html_ko4j_KOTransfer || (refs_org_netbeans_html_ko4j_KOTransfer = org_netbeans_html_ko4j_KOTransfer(false))).notifyError__VLjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcA2);
};
c['org_1netbeans_1html_1ko4j_1KOTransfer$notifyError$Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1KOTransfer$notifySuccess$Ljava_1lang_1Object_12Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
  if (lcA3 === undefined) lcA3 = null;
return (refs_org_netbeans_html_ko4j_KOTransfer || (refs_org_netbeans_html_ko4j_KOTransfer = org_netbeans_html_ko4j_KOTransfer(false))).notifySuccess__VLjava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1, lcA2, lcA3);
};
c['org_1netbeans_1html_1ko4j_1KOTransfer$notifySuccess$Ljava_1lang_1Object_12Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1Knockout$call$ILjava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
  if (lcA3 === undefined) lcA3 = null;
  if (lcA4 === undefined) lcA4 = null;
return lcA1.call__VILjava_lang_Object_2Ljava_lang_Object_2(lcI2, lcA3, lcA4);
};
c['org_1netbeans_1html_1ko4j_1Knockout$call$ILjava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1Knockout$call$ILjava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
  if (lcA3 === undefined) lcA3 = null;
  if (lcA4 === undefined) lcA4 = null;
return lcA1.call__VILjava_lang_Object_2Ljava_lang_Object_2(lcI2, lcA3, lcA4);
};
c['raw$org_1netbeans_1html_1ko4j_1Knockout$call$ILjava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1Knockout$getValue$I__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
return lcA1.getValue__Ljava_lang_Object_2I(lcI2);
};
c['org_1netbeans_1html_1ko4j_1Knockout$getValue$I__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1Knockout$getValue$I__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
return lcA1.getValue__Ljava_lang_Object_2I(lcI2);
};
c['raw$org_1netbeans_1html_1ko4j_1Knockout$getValue$I__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1Knockout$setValue$ILjava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
  if (lcA3 === undefined) lcA3 = null;
return lcA1.setValue__VILjava_lang_Object_2(lcI2, lcA3);
};
c['org_1netbeans_1html_1ko4j_1Knockout$setValue$ILjava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1Knockout$setValue$ILjava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
  if (lcA3 === undefined) lcA3 = null;
return lcA1.setValue__VILjava_lang_Object_2(lcI2, lcA3);
};
c['raw$org_1netbeans_1html_1ko4j_1Knockout$setValue$ILjava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1LoadWS$onClose$ZILjava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2ZILjava_lang_String_2 = function(lcA1, lcI2, lcI3, lcA4) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
  if (lcI3 === undefined) lcI3 = null;
  if (lcA4 === undefined) lcA4 = null;
return lcA1.onClose__VZILjava_lang_String_2(lcI2, lcI3, lcA4);
};
c['org_1netbeans_1html_1ko4j_1LoadWS$onClose$ZILjava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2ZILjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1LoadWS$onClose$ZILjava_1lang_1String_12__Ljava_lang_Object_2Ljava_lang_Object_2ZILjava_lang_String_2 = function(lcA1, lcI2, lcI3, lcA4) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
  if (lcI3 === undefined) lcI3 = null;
  if (lcA4 === undefined) lcA4 = null;
return lcA1.onClose__VZILjava_lang_String_2(lcI2, lcI3, lcA4);
};
c['raw$org_1netbeans_1html_1ko4j_1LoadWS$onClose$ZILjava_1lang_1String_12__Ljava_lang_Object_2Ljava_lang_Object_2ZILjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1LoadWS$onError$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
return lcA1.onError__VLjava_lang_Object_2(lcA2);
};
c['org_1netbeans_1html_1ko4j_1LoadWS$onError$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1LoadWS$onError$Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
return lcA1.onError__VLjava_lang_Object_2(lcA2);
};
c['raw$org_1netbeans_1html_1ko4j_1LoadWS$onError$Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1LoadWS$onMessage$Ljava_1lang_1Object_12Ljava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
  if (lcA3 === undefined) lcA3 = null;
return lcA1.onMessage__VLjava_lang_Object_2Ljava_lang_String_2(lcA2, lcA3);
};
c['org_1netbeans_1html_1ko4j_1LoadWS$onMessage$Ljava_1lang_1Object_12Ljava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1LoadWS$onMessage$Ljava_1lang_1Object_12Ljava_1lang_1String_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
  if (lcA3 === undefined) lcA3 = null;
return lcA1.onMessage__VLjava_lang_Object_2Ljava_lang_String_2(lcA2, lcA3);
};
c['raw$org_1netbeans_1html_1ko4j_1LoadWS$onMessage$Ljava_1lang_1Object_12Ljava_1lang_1String_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1LoadWS$onOpen$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
return lcA1.onOpen__VLjava_lang_Object_2(lcA2);
};
c['org_1netbeans_1html_1ko4j_1LoadWS$onOpen$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1LoadWS$onOpen$Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
return lcA1.onOpen__VLjava_lang_Object_2(lcA2);
};
c['raw$org_1netbeans_1html_1ko4j_1LoadWS$onOpen$Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new org_netbeans_html_ko4j_$JsCallbacks$;
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA0, null);
c._VM(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_$JsCallbacks$fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_$JsCallbacks$', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_$JsCallbacks$fillInstOf });
    org_netbeans_html_ko4j_$JsCallbacks$fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/$JsCallbacks$';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_Object;
    var refs_org_netbeans_html_boot_spi_Fn;
    var refs_org_netbeans_html_ko4j_KOTransfer;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_ko4j_$JsCallbacks$_p'] = null;
    this['fld_org_netbeans_html_ko4j_$JsCallbacks$_last'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_$JsCallbacks$ = registerClass(exports,'org_netbeans_html_ko4j_$JsCallbacks$',org_netbeans_html_ko4j_$JsCallbacks$);


function org_netbeans_html_ko4j_KOTransfer() {
  var m;
  var CLS = org_netbeans_html_ko4j_KOTransfer;
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
    m = c.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA1 != null && lcA1['$instOf_org_netbeans_html_ko4j_KOTransfer$JSObjToStr'] ? 1 : 0;
if ((stI0) == 0) { gt = 15; break IF; }
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_KOTransfer$JSObjToStr']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.KOTransfer$JSObjToStr');
var lcA1 = lcA1['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_obj'];
    }
    X_15: for (;;) { IF: if (gt <= 15) {

(refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = org_netbeans_html_ko4j_LoadJSON(false))).extractJSON__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(lcA1, lcA2, lcA3);
return;

    }
}}
};
c['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isJSONP__Z(lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
var stA0 = (refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = org_netbeans_html_ko4j_LoadJSON(false))).createJSONP__Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1);
var lcA2 = stA0;
var stA0 = invoker.composeURL__Ljava_lang_String_2Ljava_lang_String_2(lcA1,lcA2);
(refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = org_netbeans_html_ko4j_LoadJSON(false))).loadJSONP__VLjava_lang_String_2Ljava_lang_String_2(stA0, lcA2);
{ gt = 246; break IF; }
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var lcA2 = null;
var stI0 = invoker.isDoOutput__Z(lcA1);
if ((stI0) == 0) { gt = 69; break IF; }
try {var stA0 = new vm.java_io_ByteArrayOutputStream;
(refs_java_io_ByteArrayOutputStream || (refs_java_io_ByteArrayOutputStream = vm.java_io_ByteArrayOutputStream(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
invoker.writeData__VLjava_io_OutputStream_2(lcA1,lcA3);
var stA0 = new vm.java_lang_String;
var stA1 = stA0;var stA2 = invoker.toByteArray___3B(lcA3);
(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor['cons__V_3BLjava_lang_String_2'].call(stA1, stA2, "UTF-8");
var lcA2 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 63; break IF; }}
throw e;
}{ gt = 69; break IF; }
    }
    X_63: for (;;) { IF: if (gt <= 63) {
var lcA3 = stA0;
invoker.notifyError__VLjava_lang_Throwable_2(lcA1,lcA3);
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA0 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['asList__Ljava_util_List_2_3Ljava_lang_Object_2'](stA0);
var lcA3 = stA0;
var stA0 = invoker.getHeaders__Ljava_lang_String_2(lcA1);
var lcA4 = stA0;
if ((lcA4) === null) { gt = 226; break IF; }
var lcI5 = 0;
    }
    X_91: for (;;) { IF: if (gt <= 91) {

var stI0 = lcI5;var stI1 = invoker.length__I(lcA4);
if ((stI0) >= (stI1)) { gt = 226; break IF; }
var stI0 = invoker.indexOf__III(lcA4,(58), lcI5);
var lcI6 = stI0;
if ((lcI6) != (-1)) { gt = 121; break IF; }
{ gt = 226; break IF; }
    }
    X_121: for (;;) { IF: if (gt <= 121) {

var stI0 = invoker.indexOf__III(lcA4,(13), lcI6);
var lcI7 = stI0;
var stI0 = invoker.indexOf__III(lcA4,(10), lcI6);
var lcI8 = stI0;
if ((lcI7) != (-1)) { gt = 156; break IF; }
var stI0 = invoker.length__I(lcA4);
var lcI7 = stI0;
    }
    X_156: for (;;) { IF: if (gt <= 156) {

if ((lcI8) != (-1)) { gt = 169; break IF; }
var stI0 = invoker.length__I(lcA4);
var lcI8 = stI0;
    }
    X_169: for (;;) { IF: if (gt <= 169) {

var stA0 = lcA3;var stA1 = invoker.substring__Ljava_lang_String_2II(lcA4,lcI5, lcI6);
var stA1 = invoker.trim__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stA0 = lcA3;var stA1 = lcA4;var stI2 = (((lcI6) + (1)) | 0);var stI3 = (refs_java_lang_Math || (refs_java_lang_Math = vm.java_lang_Math(false)))['min__III'](lcI7, lcI8);
var stA1 = invoker.substring__Ljava_lang_String_2II(stA1,stI2, stI3);
var stA1 = invoker.trim__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stI0 = (refs_java_lang_Math || (refs_java_lang_Math = vm.java_lang_Math(false)))['max__III'](lcI7, lcI8);
var lcI5 = stI0;
{ gt = 0; continue X_91; }
    }
    X_226: for (;;) { IF: if (gt <= 226) {

var stA0 = invoker.composeURL__Ljava_lang_String_2Ljava_lang_String_2(lcA1,null);
var stA1 = lcA1;var stA2 = invoker.getMethod__Ljava_lang_String_2(lcA1);
var stA3 = lcA2;var stA4 = invoker.toArray___3Ljava_lang_Object_2(lcA3);
(refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = org_netbeans_html_ko4j_LoadJSON(false))).loadJSON__VLjava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_Object_2(stA0, stA1, stA2, stA3, stA4);
    }
    X_246: for (;;) { IF: if (gt <= 246) {
return;

    }
}}}}}}}}}}
};
c['loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = new vm.java_io_InputStreamReader;
(refs_java_io_InputStreamReader || (refs_java_io_InputStreamReader = vm.java_io_InputStreamReader(false))).constructor['cons__VLjava_io_InputStream_2Ljava_lang_String_2'].call(stA0, lcA1, "UTF-8");
var lcA3 = stA0;
    }
    X_19: for (;;) { IF: if (gt <= 19) {

var stI0 = invoker.read__I(lcA3);
var lcI4 = stI0;
if ((lcI4) != (-1)) { gt = 34; break IF; }
{ gt = 45; break IF; }
    }
    X_34: for (;;) { IF: if (gt <= 34) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA2,(((lcI4) << 16) >> 16));
{ gt = 0; continue X_19; }
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA2);
var stA0 = (refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = org_netbeans_html_ko4j_LoadJSON(false))).parse__Ljava_lang_Object_2Ljava_lang_String_2(stA0);
return stA0;

    }
}}}}
};
c['toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.notifySuccess__VLjava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA2, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 57; break IF; }
if (lcA2 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA2, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA2, '');
if (lcA2 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA2, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA2, '');
var lcA4 = lcA2;
var lcI5 = 0;
    }
    X_19: for (;;) { IF: if (gt <= 19) {

if ((lcI5) >= ((lcA4).length)) { gt = 51; break IF; }
var stA0 = lcA4;var stI1 = lcI5;var stA2 = new org_netbeans_html_ko4j_KOTransfer$JSObjToStr;
(refs_org_netbeans_html_ko4j_KOTransfer$JSObjToStr || (refs_org_netbeans_html_ko4j_KOTransfer$JSObjToStr = org_netbeans_html_ko4j_KOTransfer$JSObjToStr(false))).constructor.cons__VLjava_lang_Object_2Ljava_lang_Object_2.call(stA2, lcA1, (lcA4[lcI5] || Array.at(lcA4, lcI5)));
Array.at(stA0, stI1, stA2);
lcI5++;
{ gt = 0; continue X_19; }
    }
    X_51: for (;;) { IF: if (gt <= 51) {

var lcA3 = lcA4;
{ gt = 67; break IF; }
    }
    X_57: for (;;) { IF: if (gt <= 57) {
var stA0 = new org_netbeans_html_ko4j_KOTransfer$JSObjToStr;
(refs_org_netbeans_html_ko4j_KOTransfer$JSObjToStr || (refs_org_netbeans_html_ko4j_KOTransfer$JSObjToStr = org_netbeans_html_ko4j_KOTransfer$JSObjToStr(false))).constructor.cons__VLjava_lang_Object_2Ljava_lang_Object_2.call(stA0, lcA1, lcA2);
var lcA3 = stA0;
    }
    X_67: for (;;) { IF: if (gt <= 67) {

if (lcA0 !== null && !lcA0['$instOf_org_netbeans_html_json_spi_JSONCall']) vm.java_lang_Class(false).castEx(lcA0, 'org.netbeans.html.json.spi.JSONCall');
invoker.notifySuccess__VLjava_lang_Object_2(lcA0,lcA3);
return;

    }
}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.notifyError__VLjava_lang_Object_2Ljava_lang_Object_2 = function(lcA0, lcA1) {
if (lcA0 !== null && !lcA0['$instOf_org_netbeans_html_json_spi_JSONCall']) vm.java_lang_Class(false).castEx(lcA0, 'org.netbeans.html.json.spi.JSONCall');
var stA0 = lcA0;var stA1 = new vm.java_lang_Exception;
var stA2 = stA1;var stA3 = invoker.toString__Ljava_lang_String_2(lcA1);
(refs_java_lang_Exception || (refs_java_lang_Exception = vm.java_lang_Exception(false))).constructor['cons__VLjava_lang_String_2'].call(stA2, stA3);
invoker.notifyError__VLjava_lang_Throwable_2(stA0,stA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KOTransferfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_KOTransfer', { value : true });
      vm.org_netbeans_html_json_spi_Transfer(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KOTransferfillInstOf });
    org_netbeans_html_ko4j_KOTransferfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/KOTransfer';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.org_netbeans_html_json_spi_Transfer(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Lorg/netbeans/html/context/spi/Contexts$Id;" : {
"value" : ["xhr"]
}

    };
    var refs_java_lang_Object;
    var refs_org_netbeans_html_ko4j_LoadJSON;
    var refs_java_io_ByteArrayOutputStream;
    var refs_java_lang_String;
    var refs_net_java_html_json_Models;
    var refs_java_lang_Math;
    var refs_java_lang_StringBuilder;
    var refs_java_io_InputStreamReader;
    var refs_org_netbeans_html_ko4j_KOTransfer$JSObjToStr;
    var refs_java_lang_Exception;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_KOTransfer = org_netbeans_html_ko4j_KOTransfer;

vm.org_netbeans_html_context_spi_Contexts$Id = link('org/netbeans/html/context/spi/Contexts$Id', function(f) { vm.org_netbeans_html_context_spi_Contexts$Id =  f; });
vm.org_netbeans_html_json_spi_Transfer = link('org/netbeans/html/json/spi/Transfer', function(f) { vm.org_netbeans_html_json_spi_Transfer =  f; });
vm.java_lang_Exception = link('java/lang/Exception', function(f) { vm.java_lang_Exception =  f; });
vm.java_io_InputStreamReader = link('java/io/InputStreamReader', function(f) { vm.java_io_InputStreamReader =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.java_lang_Math = link('java/lang/Math', function(f) { vm.java_lang_Math =  f; });
vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });
vm.java_io_IOException = link('java/io/IOException', function(f) { vm.java_io_IOException =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.java_io_ByteArrayOutputStream = link('java/io/ByteArrayOutputStream', function(f) { vm.java_io_ByteArrayOutputStream =  f; });

function org_netbeans_html_ko4j_LoadJSON() {
  var m;
  var CLS = org_netbeans_html_ko4j_LoadJSON;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$defineIfUnused_1'] = null;
  m = c._$$fn$$defineIfUnused_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$defineIfUnused_1'] = v; return CLS['fld_$$fn$$defineIfUnused_1']; };
  CLS['fld_$$fn$$parse_2'] = null;
  m = c._$$fn$$parse_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$parse_2'] = v; return CLS['fld_$$fn$$parse_2']; };
  CLS['fld_$$fn$$loadJSON_3'] = null;
  m = c._$$fn$$loadJSON_3 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$loadJSON_3'] = v; return CLS['fld_$$fn$$loadJSON_3']; };
  CLS['fld_$$fn$$loadJSONP_4'] = null;
  m = c._$$fn$$loadJSONP_4 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$loadJSONP_4'] = v; return CLS['fld_$$fn$$loadJSONP_4']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.createJSONP__Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.hashCode__I(lcA0);
var lcI1 = stI0;
    }
    X_5: for (;;) { IF: if (gt <= 5) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"jsonp");
var stA1 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['toHexString__Ljava_lang_String_2I'](lcI1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stI0 = c.defineIfUnused__ZLjava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA2, lcA0);
if ((stI0) == 0) { gt = 38; break IF; }
return lcA2;
    }
    X_38: for (;;) { IF: if (gt <= 38) {
lcI1++;
{ gt = 0; continue X_5; }

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.defineIfUnused__ZLjava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function() {
  var r = (function(name,done) {

  name = vm.java_lang_Class(false).toJS(name);
  done = vm.java_lang_Class(false).toJS(done);if (window[name]) return false;
 window[name] = function(data) {
   delete window[name];
  var el = window.document.getElementById(name);
  el.parentNode.removeChild(el);
  vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1json_1spi_1JSONCall$notifySuccess$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_Object_2(done,data));
};
return true;

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.parse__Ljava_lang_Object_2Ljava_lang_String_2 = function() {
  var r = (function(s) {

  s = vm.java_lang_Class(false).toJS(s);return eval('(' + s + ')');
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = c.loadJSON__VLjava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_Object_2 = function() {
  var r = (function(url,done,method,data,hp) {

  url = vm.java_lang_Class(false).toJS(url);
  done = vm.java_lang_Class(false).toJS(done);
  method = vm.java_lang_Class(false).toJS(method);
  data = vm.java_lang_Class(false).toJS(data);
  hp = vm.java_lang_Class(false).toJS(hp);var request = new XMLHttpRequest();
if (!method) method = 'GET';
request.open(method, url, true);
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
for (var i = 0; i < hp.length; i += 2) {
  var h = hp[i];
  var v = hp[i + 1];
  request.setRequestHeader(h, v);
}
request.onreadystatechange = function() {
  if (request.readyState !== 4) return;
  var r = request.response || request.responseText;
  try {
    var str = r;
    if (request.status !== 0)
      if (request.status < 100 || request.status >= 400) throw request.status + ': ' + request.statusText;    try { r = eval('(' + r + ')'); } catch (ignore) { }    vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1KOTransfer$notifySuccess$Ljava_1lang_1Object_12Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(done, str, r));
  } catch (error) {;
    vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1KOTransfer$notifyError$Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(done, error));
  }
};
request.onerror = function (e) {
  vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1KOTransfer$notifyError$Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(done, e.type + ' status ' + request.status));
};
if (data) request.send(data);
else request.send();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = c.loadJSONP__VLjava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(url,jsonp) {

  url = vm.java_lang_Class(false).toJS(url);
  jsonp = vm.java_lang_Class(false).toJS(jsonp);var scrpt = window.document.createElement('script');
 scrpt.setAttribute('src', url);
 scrpt.setAttribute('id', jsonp);
 scrpt.setAttribute('type', 'text/javascript');
 var body = document.getElementsByTagName('body')[0];
 body.appendChild(scrpt);

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = c.extractJSON__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI3 = 0;
    }
    X_2: for (;;) { IF: if (gt <= 2) {

if ((lcI3) >= ((lcA1).length)) { gt = 24; break IF; }
var stA0 = lcA2;var stI1 = lcI3;var stA2 = (refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout(false))).getProperty__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2(lcA0, (lcA1[lcI3] || Array.at(lcA1, lcI3)));
Array.at(stA0, stI1, stA2);
lcI3++;
{ gt = 0; continue X_2; }
    }
    X_24: for (;;) { IF: if (gt <= 24) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_LoadJSONfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_LoadJSON', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_LoadJSONfillInstOf });
    org_netbeans_html_ko4j_LoadJSONfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/LoadJSON';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_Integer;
    var refs_org_netbeans_html_ko4j_Knockout;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_LoadJSON = org_netbeans_html_ko4j_LoadJSON;


function org_netbeans_html_ko4j_Knockout() {
  var m;
  var CLS = org_netbeans_html_ko4j_Knockout;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._props = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_Knockout_props'] = v; return this['fld_org_netbeans_html_ko4j_Knockout_props']; };
  m = c._funcs = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_Knockout_funcs'] = v; return this['fld_org_netbeans_html_ko4j_Knockout_funcs']; };
  m = c._js = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_Knockout_js'] = v; return this['fld_org_netbeans_html_ko4j_Knockout_js']; };
  m = c._strong = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_Knockout_strong'] = v; return this['fld_org_netbeans_html_ko4j_Knockout_strong']; };
  CLS['fld_$$fn$$getProperty_1'] = null;
  m = c._$$fn$$getProperty_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getProperty_1'] = v; return CLS['fld_$$fn$$getProperty_1']; };
  CLS['fld_$$fn$$valueHasMutated_2'] = null;
  m = c._$$fn$$valueHasMutated_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$valueHasMutated_2'] = v; return CLS['fld_$$fn$$valueHasMutated_2']; };
  CLS['fld_$$fn$$applyBindings_3'] = null;
  m = c._$$fn$$applyBindings_3 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$applyBindings_3'] = v; return CLS['fld_$$fn$$applyBindings_3']; };
  CLS['fld_$$fn$$allocJS_4'] = null;
  m = c._$$fn$$allocJS_4 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$allocJS_4'] = v; return CLS['fld_$$fn$$allocJS_4']; };
  CLS['fld_$$fn$$wrapModel_5'] = null;
  m = c._$$fn$$wrapModel_5 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$wrapModel_5'] = v; return CLS['fld_$$fn$$wrapModel_5']; };
  CLS['fld_$$fn$$clean_6'] = null;
  m = c._$$fn$$clean_6 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$clean_6'] = v; return CLS['fld_$$fn$$clean_6']; };
  CLS['fld_$$fn$$toModelImpl_7'] = null;
  m = c._$$fn$$toModelImpl_7 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$toModelImpl_7'] = v; return CLS['fld_$$fn$$toModelImpl_7']; };
    m = c.getProperty__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2 = function() {
  var r = (function(object,property) {

  object = vm.java_lang_Class(false).toJS(object);
  property = vm.java_lang_Class(false).toJS(property);var ret;
if (property === null) ret = object;
else if (object === null) ret = null;
else ret = object[property];
if (typeof ret !== 'undefined' && ret !== null) {
  if (typeof ko !== 'undefined' && ko['utils'] && ko['utils']['unwrapObservable']) {
    return ko['utils']['unwrapObservable'](ret);
  }
  return ret;
}
return null;

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
lcA0['fld_org_netbeans_html_ko4j_Knockout_strong'] = lcA1;
lcA0['fld_org_netbeans_html_ko4j_Knockout_js'] = lcA2;
var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/PropertyBinding;', vm.org_netbeans_html_json_spi_PropertyBinding, (lcA3).length);
stA0['fld_org_netbeans_html_ko4j_Knockout_props'] = stA1;
var lcI5 = 0;
    }
    X_26: for (;;) { IF: if (gt <= 26) {

if ((lcI5) >= ((lcA3).length)) { gt = 53; break IF; }
var stA0 = lcA0['fld_org_netbeans_html_ko4j_Knockout_props'];var stI1 = lcI5;var stA2 = invoker.weak__Lorg_netbeans_html_json_spi_PropertyBinding_2((lcA3[lcI5] || Array.at(lcA3, lcI5)));
Array.at(stA0, stI1, stA2);
lcI5++;
{ gt = 0; continue X_26; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/FunctionBinding;', vm.org_netbeans_html_json_spi_FunctionBinding, (lcA4).length);
stA0['fld_org_netbeans_html_ko4j_Knockout_funcs'] = stA1;
var lcI5 = 0;
    }
    X_66: for (;;) { IF: if (gt <= 66) {

if ((lcI5) >= ((lcA4).length)) { gt = 95; break IF; }
var stA0 = lcA0['fld_org_netbeans_html_ko4j_Knockout_funcs'];var stI1 = lcI5;var stA2 = invoker.weak__Lorg_netbeans_html_json_spi_FunctionBinding_2((lcA4[lcI5] || Array.at(lcA4, lcI5)));
Array.at(stA0, stI1, stA2);
lcI5++;
{ gt = 0; continue X_66; }
    }
    X_95: for (;;) { IF: if (gt <= 95) {
return;

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.js__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_ko4j_Knockout_js'];

};
    m.access = 16;
    m.cls = CLS;
    m = c.cleanUp__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA0 = null;
if ((lcA0) !== null) { gt = 7; break IF; }
return;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

c.clean__VLjava_lang_Object_2(lcA0['fld_org_netbeans_html_ko4j_Knockout_js']);
lcA0['fld_org_netbeans_html_ko4j_Knockout_js'] = null;
lcA0['fld_org_netbeans_html_ko4j_Knockout_props'] = null;
lcA0['fld_org_netbeans_html_ko4j_Knockout_funcs'] = null;
{ gt = 0; continue X_0; }

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.hold__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 16;
    m.cls = CLS;
    m = c.get__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_ko4j_Knockout_strong'];

};
    m.access = 16;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2I = function(lcI1) {
  var  lcA0 = this;
var stA0 = invoker.getValue__Ljava_lang_Object_2((lcA0['fld_org_netbeans_html_ko4j_Knockout_props'][lcI1] || Array.at(lcA0['fld_org_netbeans_html_ko4j_Knockout_props'], lcI1)));
return stA0;

};
    m.access = 16;
    m.cls = CLS;
    m = c.setValue__VILjava_lang_Object_2 = function(lcI1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA2 != null && lcA2['$instOf_org_netbeans_html_ko4j_Knockout'] ? 1 : 0;
if ((stI0) == 0) { gt = 15; break IF; }
if (lcA2 !== null && !lcA2['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA2, 'org.netbeans.html.ko4j.Knockout');
var stA0 = lcA2.get__Ljava_lang_Object_2();
var lcA2 = stA0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {

invoker.setValue__VLjava_lang_Object_2((lcA0['fld_org_netbeans_html_ko4j_Knockout_props'][lcI1] || Array.at(lcA0['fld_org_netbeans_html_ko4j_Knockout_props'], lcI1)),lcA2);
return;

    }
}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.call__VILjava_lang_Object_2Ljava_lang_Object_2 = function(lcI1, lcA2, lcA3) {
  var  lcA0 = this;
invoker.call__VLjava_lang_Object_2Ljava_lang_Object_2((lcA0['fld_org_netbeans_html_ko4j_Knockout_funcs'][lcI1] || Array.at(lcA0['fld_org_netbeans_html_ko4j_Knockout_funcs'], lcI1)),lcA2, lcA3);
return;

};
    m.access = 16;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
  var r = (function(model,prop,oldValue,newValue) {

  model = vm.java_lang_Class(false).toJS(model);
  prop = vm.java_lang_Class(false).toJS(prop);
  oldValue = vm.java_lang_Class(false).toJS(oldValue);
  newValue = vm.java_lang_Class(false).toJS(newValue);if (model) {
  var koProp = model[prop];
  if (koProp) {
    var koFire = koProp['valueHasMutated'];
    if (koFire) {
      if (oldValue !== null || newValue !== null) {
        koFire(newValue);
      } else {
        koFire();
      }
    }
  }
}

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = c.applyBindings__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2 = function() {
  var r = (function(id,bindings) {

  id = vm.java_lang_Class(false).toJS(id);
  bindings = vm.java_lang_Class(false).toJS(bindings);var d = window['document'];
var e = id ? d['getElementById'](id) : d['body'];
ko['cleanNode'](e);
ko['applyBindings'](bindings, e);
return bindings['ko4j'];

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = c.allocJS___3Ljava_lang_Object_2I = function() {
  var r = (function(cnt) {

  cnt = vm.java_lang_Class(false).toJS(cnt);var arr = new Array(cnt);
for (var i = 0; i < cnt; i++) arr[i] = new Object();
return arr;

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = c.wrapModel__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Number_2Ljava_lang_Object_2_3Ljava_lang_String_2 = function() {
  var r = (function(thiz,ret,copyFrom,propNames,propInfo,propValues,funcNames) {

  thiz = vm.java_lang_Class(false).toJS(thiz);
  ret = vm.java_lang_Class(false).toJS(ret);
  copyFrom = vm.java_lang_Class(false).toJS(copyFrom);
  propNames = vm.java_lang_Class(false).toJS(propNames);
  propInfo = vm.java_lang_Class(false).toJS(propInfo);
  propValues = vm.java_lang_Class(false).toJS(propValues);
  funcNames = vm.java_lang_Class(false).toJS(funcNames);Object.defineProperty(ret, 'ko4j', { value : thiz });
function normalValue(r) {
  if (r) try { var br = r.valueOf(); } catch (err) {}
  return br === undefined ? r: br;
}
function koComputed(index, name, readOnly, value) {
  var orig = copyFrom ? copyFrom[name] : null;
  if (!ko['isObservable'](orig)) {
    orig = null;
    var trigger = ko['observable']()['extend']({'notify':'always'});
  } else {
    var trigger = orig;
  }
  function realGetter() {
    var self = ret['ko4j'];
    try {
      var v = self ? vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1Knockout$getValue$I__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2I(self,index)) : null;
      return v;
    } catch (e) {
      alert("Cannot call getValue on " + self + " prop: " + name + " error: " + e);
    }
  }
  var activeGetter = orig ? orig : function() { return value; };
  var bnd = {
    'read': function() {
      trigger();
      if (orig) {
        var r = orig();
      } else {
        var r = activeGetter();
        activeGetter = realGetter;
      }
      return normalValue(r);;
    },
    'owner': ret
  };
  if (!readOnly) {
    function write(val) {
      if (orig) orig(val);
      var self = ret['ko4j'];
      if (!self) return;
      var model = val ? val['ko4j'] : null;
      vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1Knockout$setValue$ILjava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2(self,index, model ? model : val));
    };
    bnd['write'] = write;
    if (orig) {
      write(orig());
      orig.subscribe(write);
    }
  };
  var cmpt = ko['computed'](bnd);
  cmpt['valueHasMutated'] = function(val) {
    if (arguments.length === 1) activeGetter = function() { return val; };
    trigger(val);
  };
  ret[name] = cmpt;
}
for (var i = 0; i < propNames.length; i++) {
  if ((propInfo[i] & 2) !== 0) {
    ret[propNames[i]] = normalValue(propValues[i]);
  } else {
    koComputed(i, propNames[i], (propInfo[i] & 1) !== 0, propValues[i]);
  }
}
function koExpose(index, name) {
  ret[name] = function(data, ev) {
    var self = ret['ko4j'];
    if (!self) return;
    vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1Knockout$call$ILjava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2Ljava_lang_Object_2(self,index, data, ev));
  };
}
for (var i = 0; i < funcNames.length; i++) {
  koExpose(i, funcNames[i]);
}

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = c.clean__VLjava_lang_Object_2 = function() {
  var r = (function(js) {

  js = vm.java_lang_Class(false).toJS(js);delete js['ko4j'];
for (var p in js) {
  delete js[p];
};


}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.toModelImpl__Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
  var r = (function(o) {

  o = vm.java_lang_Class(false).toJS(o);return o['ko4j'] ? o['ko4j'] : o;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c.toModelImpl__Ljava_lang_Object_2Ljava_lang_Object_2(lcA0);
var lcA1 = stA0;
var stI0 = lcA1 != null && lcA1['$instOf_org_netbeans_html_ko4j_Knockout'] ? 1 : 0;
if ((stI0) == 0) { gt = 20; break IF; }
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.Knockout');
var stA0 = lcA1.get__Ljava_lang_Object_2();
return stA0;
    }
    X_20: for (;;) { IF: if (gt <= 20) {

return lcA1;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KnockoutfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_Knockout', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KnockoutfillInstOf });
    org_netbeans_html_ko4j_KnockoutfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/Knockout';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
// resource from org/netbeans/html/ko4j/knockout-3.4.0.js

(0 || eval)("/*!\n"
 + " * Knockout JavaScript library v3.4.0\n"
 + " * (c) Steven Sanderson - http://knockoutjs.com/\n"
 + " * License: MIT (http://www.opensource.org/licenses/mit-license.php)\n"
 + " */\n"
 + "\n"
 + "(function() {(function(n){var x=this||(0,eval)(\"this\"),u=x.document,M=x.navigator,v=x.jQuery,F=x.JSON;(function(n){\"function\"===typeof define&&define.amd?define([\"exports\",\"require\"],n):\"object\"===typeof exports&&\"object\"===typeof module?n(module.exports||exports):n(x.ko={})})(function(N,O){function J(a,c){return null===a||typeof a in T?a===c:!1}function U(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=n;b()},c))}}function V(b,c){var d;return function(){clearTimeout(d);d=a.a.setTimeout(b,c)}}function W(a,\n"
 + "c){c&&c!==I?\"beforeChange\"===c?this.Kb(a):this.Ha(a,c):this.Lb(a)}function X(a,c){null!==c&&c.k&&c.k()}function Y(a,c){var d=this.Hc,e=d[s];e.R||(this.lb&&this.Ma[c]?(d.Pb(c,a,this.Ma[c]),this.Ma[c]=null,--this.lb):e.r[c]||d.Pb(c,a,e.s?{ia:a}:d.uc(a)))}function K(b,c,d,e){a.d[b]={init:function(b,g,k,l,m){var h,r;a.m(function(){var q=a.a.c(g()),p=!d!==!q,A=!r;if(A||c||p!==h)A&&a.va.Aa()&&(r=a.a.ua(a.f.childNodes(b),!0)),p?(A||a.f.da(b,a.a.ua(r)),a.eb(e?e(m,q):m,b)):a.f.xa(b),h=p},null,{i:b});return{controlsDescendantBindings:!0}}};\n"
 + "a.h.ta[b]=!1;a.f.Z[b]=!0}var a=\"undefined\"!==typeof N?N:{};a.b=function(b,c){for(var d=b.split(\".\"),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.G=function(a,c,d){a[c]=d};a.version=\"3.4.0\";a.b(\"version\",a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1};a.a=function(){function b(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}function e(b,c,d,e){var h=b[c].match(r)||\n"
 + "[];a.a.q(d.match(r),function(b){a.a.pa(h,b,e)});b[c]=h.join(\" \")}var f={__proto__:[]}instanceof Array,g=\"function\"===typeof Symbol,k={},l={};k[M&&/Firefox\\/2/i.test(M.userAgent)?\"KeyboardEvent\":\"UIEvents\"]=[\"keyup\",\"keydown\",\"keypress\"];k.MouseEvents=\"click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave\".split(\" \");b(k,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)l[b[c]]=a});var m={propertychange:!0},h=u&&function(){for(var a=3,b=u.createElement(\"div\"),c=\n"
 + "b.getElementsByTagName(\"i\");b.innerHTML=\"\\x3c!--[if gt IE \"+ ++a+\"]><i></i><![endif]--\\x3e\",c[0];);return 4<a?a:n}(),r=/\\S+/g;return{cc:[\"authenticity_token\",/^__RequestVerificationToken(_.*)?$/],q:function(a,b){for(var c=0,d=a.length;c<d;c++)b(a[c],c)},o:function(a,b){if(\"function\"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},Sb:function(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d))return a[d];\n"
 + "return null},La:function(b,c){var d=a.a.o(b,c);0<d?b.splice(d,1):0===d&&b.shift()},Tb:function(b){b=b||[];for(var c=[],d=0,e=b.length;d<e;d++)0>a.a.o(c,b[d])&&c.push(b[d]);return c},fb:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)c.push(b(a[d],d));return c},Ka:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)b(a[d],d)&&c.push(a[d]);return c},ra:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},pa:function(b,c,d){var e=\n"
 + "a.a.o(a.a.zb(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},ka:f,extend:c,Xa:d,Ya:f?d:c,D:b,Ca:function(a,b){if(!a)return a;var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=b(a[d],d,a));return c},ob:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},jc:function(b){b=a.a.V(b);for(var c=(b[0]&&b[0].ownerDocument||u).createElement(\"div\"),d=0,e=b.length;d<e;d++)c.appendChild(a.$(b[d]));return c},ua:function(b,c){for(var d=0,e=b.length,h=[];d<e;d++){var m=b[d].cloneNode(!0);h.push(c?a.$(m):m)}return h},\n"
 + "da:function(b,c){a.a.ob(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},qc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],h=e.parentNode,m=0,l=c.length;m<l;m++)h.insertBefore(c[m],e);m=0;for(l=d.length;m<l;m++)a.removeNode(d[m])}},za:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),\n"
 + "c=c.nextSibling;a.push(d)}}return a},sc:function(a,b){7>h?a.setAttribute(\"selected\",b):a.selected=b},$a:function(a){return null===a||a===n?\"\":a.trim?a.trim():a.toString().replace(/^[\\s\\xa0]+|[\\s\\xa0]+$/g,\"\")},nd:function(a,b){a=a||\"\";return b.length>a.length?!1:a.substring(0,b.length)===b},Mc:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=\n"
 + "b;)a=a.parentNode;return!!a},nb:function(b){return a.a.Mc(b,b.ownerDocument.documentElement)},Qb:function(b){return!!a.a.Sb(b,a.a.nb)},A:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},Wb:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.Wb(b),c)},$b:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0)},p:function(b,c,d){var e=a.a.Wb(d);d=h&&m[c];if(a.options.useOnlyNativeEvents||\n"
 + "d||!v)if(d||\"function\"!=typeof b.addEventListener)if(\"undefined\"!=typeof b.attachEvent){var l=function(a){e.call(b,a)},f=\"on\"+c;b.attachEvent(f,l);a.a.F.oa(b,function(){b.detachEvent(f,l)})}else throw Error(\"Browser doesn't support addEventListener or attachEvent\");else b.addEventListener(c,e,!1);else v(b).bind(c,e)},Da:function(b,c){if(!b||!b.nodeType)throw Error(\"element must be a DOM node when calling triggerEvent\");var d;\"input\"===a.a.A(b)&&b.type&&\"click\"==c.toLowerCase()?(d=b.type,d=\"checkbox\"==\n"
 + "d||\"radio\"==d):d=!1;if(a.options.useOnlyNativeEvents||!v||d)if(\"function\"==typeof u.createEvent)if(\"function\"==typeof b.dispatchEvent)d=u.createEvent(l[c]||\"HTMLEvents\"),d.initEvent(c,!0,!0,x,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error(\"The supplied element doesn't support dispatchEvent\");else if(d&&b.click)b.click();else if(\"undefined\"!=typeof b.fireEvent)b.fireEvent(\"on\"+c);else throw Error(\"Browser doesn't support triggering events\");else v(b).trigger(c)},c:function(b){return a.H(b)?\n"
 + "b():b},zb:function(b){return a.H(b)?b.t():b},bb:function(b,c,d){var h;c&&(\"object\"===typeof b.classList?(h=b.classList[d?\"add\":\"remove\"],a.a.q(c.match(r),function(a){h.call(b.classList,a)})):\"string\"===typeof b.className.baseVal?e(b.className,\"baseVal\",c,d):e(b,\"className\",c,d))},Za:function(b,c){var d=a.a.c(c);if(null===d||d===n)d=\"\";var e=a.f.firstChild(b);!e||3!=e.nodeType||a.f.nextSibling(e)?a.f.da(b,[b.ownerDocument.createTextNode(d)]):e.data=d;a.a.Rc(b)},rc:function(a,b){a.name=b;if(7>=h)try{a.mergeAttributes(u.createElement(\"<input name='\"+\n"
 + "a.name+\"'/>\"),!1)}catch(c){}},Rc:function(a){9<=h&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},Nc:function(a){if(h){var b=a.style.width;a.style.width=0;a.style.width=b}},hd:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},V:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},Yb:function(a){return g?Symbol(a):a},rd:6===h,sd:7===h,C:h,ec:function(b,c){for(var d=a.a.V(b.getElementsByTagName(\"input\")).concat(a.a.V(b.getElementsByTagName(\"textarea\"))),\n"
 + "e=\"string\"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},h=[],m=d.length-1;0<=m;m--)e(d[m])&&h.push(d[m]);return h},ed:function(b){return\"string\"==typeof b&&(b=a.a.$a(b))?F&&F.parse?F.parse(b):(new Function(\"return \"+b))():null},Eb:function(b,c,d){if(!F||!F.stringify)throw Error(\"Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js\");\n"
 + "return F.stringify(a.a.c(b),c,d)},fd:function(c,d,e){e=e||{};var h=e.params||{},m=e.includeFields||this.cc,l=c;if(\"object\"==typeof c&&\"form\"===a.a.A(c))for(var l=c.action,f=m.length-1;0<=f;f--)for(var g=a.a.ec(c,m[f]),k=g.length-1;0<=k;k--)h[g[k].name]=g[k].value;d=a.a.c(d);var r=u.createElement(\"form\");r.style.display=\"none\";r.action=l;r.method=\"post\";for(var n in d)c=u.createElement(\"input\"),c.type=\"hidden\",c.name=n,c.value=a.a.Eb(a.a.c(d[n])),r.appendChild(c);b(h,function(a,b){var c=u.createElement(\"input\");\n"
 + "c.type=\"hidden\";c.name=a;c.value=b;r.appendChild(c)});u.body.appendChild(r);e.submitter?e.submitter(r):r.submit();setTimeout(function(){r.parentNode.removeChild(r)},0)}}}();a.b(\"utils\",a.a);a.b(\"utils.arrayForEach\",a.a.q);a.b(\"utils.arrayFirst\",a.a.Sb);a.b(\"utils.arrayFilter\",a.a.Ka);a.b(\"utils.arrayGetDistinctValues\",a.a.Tb);a.b(\"utils.arrayIndexOf\",a.a.o);a.b(\"utils.arrayMap\",a.a.fb);a.b(\"utils.arrayPushAll\",a.a.ra);a.b(\"utils.arrayRemoveItem\",a.a.La);a.b(\"utils.extend\",a.a.extend);a.b(\"utils.fieldsIncludedWithJsonPost\",\n"
 + "a.a.cc);a.b(\"utils.getFormFields\",a.a.ec);a.b(\"utils.peekObservable\",a.a.zb);a.b(\"utils.postJson\",a.a.fd);a.b(\"utils.parseJson\",a.a.ed);a.b(\"utils.registerEventHandler\",a.a.p);a.b(\"utils.stringifyJson\",a.a.Eb);a.b(\"utils.range\",a.a.hd);a.b(\"utils.toggleDomNodeCssClass\",a.a.bb);a.b(\"utils.triggerEvent\",a.a.Da);a.b(\"utils.unwrapObservable\",a.a.c);a.b(\"utils.objectForEach\",a.a.D);a.b(\"utils.addOrRemoveItem\",a.a.pa);a.b(\"utils.setTextContent\",a.a.Za);a.b(\"unwrap\",a.a.c);Function.prototype.bind||(Function.prototype.bind=\n"
 + "function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.e=new function(){function a(b,g){var k=b[d];if(!k||\"null\"===k||!e[k]){if(!g)return n;k=b[d]=\"ko\"+c++;e[k]={}}return e[k]}var c=0,d=\"__ko__\"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===n?n:e[d]},set:function(c,d,e){if(e!==n||a(c,!1)!==n)a(c,!0)[d]=\n"
 + "e},clear:function(a){var b=a[d];return b?(delete e[b],a[d]=null,!0):!1},I:function(){return c++ +d}}};a.b(\"utils.domData\",a.a.e);a.b(\"utils.domData.clear\",a.a.e.clear);a.a.F=new function(){function b(b,c){var e=a.a.e.get(b,d);e===n&&c&&(e=[],a.a.e.set(b,d,e));return e}function c(d){var e=b(d,!1);if(e)for(var e=e.slice(0),l=0;l<e.length;l++)e[l](d);a.a.e.clear(d);a.a.F.cleanExternalData(d);if(f[d.nodeType])for(e=d.firstChild;d=e;)e=d.nextSibling,8===d.nodeType&&c(d)}var d=a.a.e.I(),e={1:!0,8:!0,9:!0},\n"
 + "f={1:!0,9:!0};return{oa:function(a,c){if(\"function\"!=typeof c)throw Error(\"Callback must be a function\");b(a,!0).push(c)},pc:function(c,e){var l=b(c,!1);l&&(a.a.La(l,e),0==l.length&&a.a.e.set(c,d,n))},$:function(b){if(e[b.nodeType]&&(c(b),f[b.nodeType])){var d=[];a.a.ra(d,b.getElementsByTagName(\"*\"));for(var l=0,m=d.length;l<m;l++)c(d[l])}return b},removeNode:function(b){a.$(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){v&&\"function\"==typeof v.cleanData&&v.cleanData([a])}}};\n"
 + "a.$=a.a.F.$;a.removeNode=a.a.F.removeNode;a.b(\"cleanNode\",a.$);a.b(\"removeNode\",a.removeNode);a.b(\"utils.domNodeDisposal\",a.a.F);a.b(\"utils.domNodeDisposal.addDisposeCallback\",a.a.F.oa);a.b(\"utils.domNodeDisposal.removeDisposeCallback\",a.a.F.pc);(function(){var b=[0,\"\",\"\"],c=[1,\"<table>\",\"</table>\"],d=[3,\"<table><tbody><tr>\",\"</tr></tbody></table>\"],e=[1,\"<select multiple='multiple'>\",\"</select>\"],f={thead:c,tbody:c,tfoot:c,tr:[2,\"<table><tbody>\",\"</tbody></table>\"],td:d,th:d,option:e,optgroup:e},\n"
 + "g=8>=a.a.C;a.a.ma=function(c,d){var e;if(v)if(v.parseHTML)e=v.parseHTML(c,d)||[];else{if((e=v.clean([c],d))&&e[0]){for(var h=e[0];h.parentNode&&11!==h.parentNode.nodeType;)h=h.parentNode;h.parentNode&&h.parentNode.removeChild(h)}}else{(e=d)||(e=u);var h=e.parentWindow||e.defaultView||x,r=a.a.$a(c).toLowerCase(),q=e.createElement(\"div\"),p;p=(r=r.match(/^<([a-z]+)[ >]/))&&f[r[1]]||b;r=p[0];p=\"ignored<div>\"+p[1]+c+p[2]+\"</div>\";\"function\"==typeof h.innerShiv?q.appendChild(h.innerShiv(p)):(g&&e.appendChild(q),\n"
 + "q.innerHTML=p,g&&q.parentNode.removeChild(q));for(;r--;)q=q.lastChild;e=a.a.V(q.lastChild.childNodes)}return e};a.a.Cb=function(b,c){a.a.ob(b);c=a.a.c(c);if(null!==c&&c!==n)if(\"string\"!=typeof c&&(c=c.toString()),v)v(b).html(c);else for(var d=a.a.ma(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b(\"utils.parseHtmlFragment\",a.a.ma);a.b(\"utils.setHtml\",a.a.Cb);a.M=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.M.lc(c.nodeValue);null!=f&&e.push({Lc:c,cd:f})}else if(1==c.nodeType)for(var f=\n"
 + "0,g=c.childNodes,k=g.length;f<k;f++)b(g[f],e)}var c={};return{wb:function(a){if(\"function\"!=typeof a)throw Error(\"You can only pass a function to ko.memoization.memoize()\");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return\"\\x3c!--[ko_memo:\"+b+\"]--\\x3e\"},xc:function(a,b){var f=c[a];if(f===n)throw Error(\"Couldn't find any memo with ID \"+a+\". Perhaps it's already been unmemoized.\");try{return f.apply(null,b||[]),\n"
 + "!0}finally{delete c[a]}},yc:function(c,e){var f=[];b(c,f);for(var g=0,k=f.length;g<k;g++){var l=f[g].Lc,m=[l];e&&a.a.ra(m,e);a.M.xc(f[g].cd,m);l.nodeValue=\"\";l.parentNode&&l.parentNode.removeChild(l)}},lc:function(a){return(a=a.match(/^\\[ko_memo\\:(.*?)\\]$/))?a[1]:null}}}();a.b(\"memoization\",a.M);a.b(\"memoization.memoize\",a.M.wb);a.b(\"memoization.unmemoize\",a.M.xc);a.b(\"memoization.parseMemoText\",a.M.lc);a.b(\"memoization.unmemoizeDomNodeAndDescendants\",a.M.yc);a.Y=function(){function b(){if(e)for(var b=\n"
 + "e,c=0,m;g<e;)if(m=d[g++]){if(g>b){if(5E3<=++c){g=e;a.a.$b(Error(\"'Too much recursion' after processing \"+c+\" task groups.\"));break}b=e}try{m()}catch(h){a.a.$b(h)}}}function c(){b();g=e=d.length=0}var d=[],e=0,f=1,g=0;return{scheduler:x.MutationObserver?function(a){var b=u.createElement(\"div\");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle(\"foo\")}}(c):u&&\"onreadystatechange\"in u.createElement(\"script\")?function(a){var b=u.createElement(\"script\");b.onreadystatechange=\n"
 + "function(){b.onreadystatechange=null;u.documentElement.removeChild(b);b=null;a()};u.documentElement.appendChild(b)}:function(a){setTimeout(a,0)},Wa:function(b){e||a.Y.scheduler(c);d[e++]=b;return f++},cancel:function(a){a-=f-e;a>=g&&a<e&&(d[a]=null)},resetForTesting:function(){var a=e-g;g=e=d.length=0;return a},md:b}}();a.b(\"tasks\",a.Y);a.b(\"tasks.schedule\",a.Y.Wa);a.b(\"tasks.runEarly\",a.Y.md);a.ya={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.B({read:b,write:function(e){clearTimeout(d);\n"
 + "d=a.a.setTimeout(function(){b(e)},c)}})},rateLimit:function(a,c){var d,e,f;\"number\"==typeof c?d=c:(d=c.timeout,e=c.method);a.cb=!1;f=\"notifyWhenChangesStop\"==e?V:U;a.Ta(function(a){return f(a,d)})},deferred:function(b,c){if(!0!==c)throw Error(\"The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.\");b.cb||(b.cb=!0,b.Ta(function(c){var e;return function(){a.Y.cancel(e);e=a.Y.Wa(c);b.notifySubscribers(n,\"dirty\")}}))},notify:function(a,c){a.equalityComparer=\n"
 + "\"always\"==c?null:J}};var T={undefined:1,\"boolean\":1,number:1,string:1};a.b(\"extenders\",a.ya);a.vc=function(b,c,d){this.ia=b;this.gb=c;this.Kc=d;this.R=!1;a.G(this,\"dispose\",this.k)};a.vc.prototype.k=function(){this.R=!0;this.Kc()};a.J=function(){a.a.Ya(this,D);D.rb(this)};var I=\"change\",D={rb:function(a){a.K={};a.Nb=1},X:function(b,c,d){var e=this;d=d||I;var f=new a.vc(e,c?b.bind(c):b,function(){a.a.La(e.K[d],f);e.Ia&&e.Ia(d)});e.sa&&e.sa(d);e.K[d]||(e.K[d]=[]);e.K[d].push(f);return f},notifySubscribers:function(b,\n"
 + "c){c=c||I;c===I&&this.zc();if(this.Pa(c))try{a.l.Ub();for(var d=this.K[c].slice(0),e=0,f;f=d[e];++e)f.R||f.gb(b)}finally{a.l.end()}},Na:function(){return this.Nb},Uc:function(a){return this.Na()!==a},zc:function(){++this.Nb},Ta:function(b){var c=this,d=a.H(c),e,f,g;c.Ha||(c.Ha=c.notifySubscribers,c.notifySubscribers=W);var k=b(function(){c.Mb=!1;d&&g===c&&(g=c());e=!1;c.tb(f,g)&&c.Ha(f=g)});c.Lb=function(a){c.Mb=e=!0;g=a;k()};c.Kb=function(a){e||(f=a,c.Ha(a,\"beforeChange\"))}},Pa:function(a){return this.K[a]&&\n"
 + "this.K[a].length},Sc:function(b){if(b)return this.K[b]&&this.K[b].length||0;var c=0;a.a.D(this.K,function(a,b){\"dirty\"!==a&&(c+=b.length)});return c},tb:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},extend:function(b){var c=this;b&&a.a.D(b,function(b,e){var f=a.ya[b];\"function\"==typeof f&&(c=f(c,e)||c)});return c}};a.G(D,\"subscribe\",D.X);a.G(D,\"extend\",D.extend);a.G(D,\"getSubscriptionsCount\",D.Sc);a.a.ka&&a.a.Xa(D,Function.prototype);a.J.fn=D;a.hc=function(a){return null!=\n"
 + "a&&\"function\"==typeof a.X&&\"function\"==typeof a.notifySubscribers};a.b(\"subscribable\",a.J);a.b(\"isSubscribable\",a.hc);a.va=a.l=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{Ub:b,end:c,oc:function(b){if(e){if(!a.hc(b))throw Error(\"Only subscribable things can act as dependencies\");e.gb.call(e.Gc,b,b.Cc||(b.Cc=++f))}},w:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},Aa:function(){if(e)return e.m.Aa()},Sa:function(){if(e)return e.Sa}}}();a.b(\"computedContext\",\n"
 + "a.va);a.b(\"computedContext.getDependenciesCount\",a.va.Aa);a.b(\"computedContext.isInitial\",a.va.Sa);a.b(\"ignoreDependencies\",a.qd=a.l.w);var E=a.a.Yb(\"_latestValue\");a.N=function(b){function c(){if(0<arguments.length)return c.tb(c[E],arguments[0])&&(c.ga(),c[E]=arguments[0],c.fa()),this;a.l.oc(c);return c[E]}c[E]=b;a.a.ka||a.a.extend(c,a.J.fn);a.J.fn.rb(c);a.a.Ya(c,B);a.options.deferUpdates&&a.ya.deferred(c,!0);return c};var B={equalityComparer:J,t:function(){return this[E]},fa:function(){this.notifySubscribers(this[E])},\n"
 + "ga:function(){this.notifySubscribers(this[E],\"beforeChange\")}};a.a.ka&&a.a.Xa(B,a.J.fn);var H=a.N.gd=\"__ko_proto__\";B[H]=a.N;a.Oa=function(b,c){return null===b||b===n||b[H]===n?!1:b[H]===c?!0:a.Oa(b[H],c)};a.H=function(b){return a.Oa(b,a.N)};a.Ba=function(b){return\"function\"==typeof b&&b[H]===a.N||\"function\"==typeof b&&b[H]===a.B&&b.Vc?!0:!1};a.b(\"observable\",a.N);a.b(\"isObservable\",a.H);a.b(\"isWriteableObservable\",a.Ba);a.b(\"isWritableObservable\",a.Ba);a.b(\"observable.fn\",B);a.G(B,\"peek\",B.t);a.G(B,\n"
 + "\"valueHasMutated\",B.fa);a.G(B,\"valueWillMutate\",B.ga);a.la=function(b){b=b||[];if(\"object\"!=typeof b||!(\"length\"in b))throw Error(\"The argument passed when initializing an observable array must be an array, or null, or undefined.\");b=a.N(b);a.a.Ya(b,a.la.fn);return b.extend({trackArrayChanges:!0})};a.la.fn={remove:function(b){for(var c=this.t(),d=[],e=\"function\"!=typeof b||a.H(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];e(g)&&(0===d.length&&this.ga(),d.push(g),c.splice(f,1),f--)}d.length&&\n"
 + "this.fa();return d},removeAll:function(b){if(b===n){var c=this.t(),d=c.slice(0);this.ga();c.splice(0,c.length);this.fa();return d}return b?this.remove(function(c){return 0<=a.a.o(b,c)}):[]},destroy:function(b){var c=this.t(),d=\"function\"!=typeof b||a.H(b)?function(a){return a===b}:b;this.ga();for(var e=c.length-1;0<=e;e--)d(c[e])&&(c[e]._destroy=!0);this.fa()},destroyAll:function(b){return b===n?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.o(b,c)}):[]},indexOf:function(b){var c=\n"
 + "this();return a.a.o(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.ga(),this.t()[d]=c,this.fa())}};a.a.ka&&a.a.Xa(a.la.fn,a.N.fn);a.a.q(\"pop push reverse shift sort splice unshift\".split(\" \"),function(b){a.la.fn[b]=function(){var a=this.t();this.ga();this.Vb(a,b,arguments);var d=a[b].apply(a,arguments);this.fa();return d===a?this:d}});a.a.q([\"slice\"],function(b){a.la.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b(\"observableArray\",a.la);a.ya.trackArrayChanges=function(b,\n"
 + "c){function d(){if(!e){e=!0;var c=b.notifySubscribers;b.notifySubscribers=function(a,b){b&&b!==I||++k;return c.apply(this,arguments)};var d=[].concat(b.t()||[]);f=null;g=b.X(function(c){c=[].concat(c||[]);if(b.Pa(\"arrayChange\")){var e;if(!f||1<k)f=a.a.ib(d,c,b.hb);e=f}d=c;f=null;k=0;e&&e.length&&b.notifySubscribers(e,\"arrayChange\")})}}b.hb={};c&&\"object\"==typeof c&&a.a.extend(b.hb,c);b.hb.sparse=!0;if(!b.Vb){var e=!1,f=null,g,k=0,l=b.sa,m=b.Ia;b.sa=function(a){l&&l.call(b,a);\"arrayChange\"===a&&d()};\n"
 + "b.Ia=function(a){m&&m.call(b,a);\"arrayChange\"!==a||b.Pa(\"arrayChange\")||(g.k(),e=!1)};b.Vb=function(b,c,d){function m(a,b,c){return l[l.length]={status:a,value:b,index:c}}if(e&&!k){var l=[],g=b.length,t=d.length,G=0;switch(c){case \"push\":G=g;case \"unshift\":for(c=0;c<t;c++)m(\"added\",d[c],G+c);break;case \"pop\":G=g-1;case \"shift\":g&&m(\"deleted\",b[G],G);break;case \"splice\":c=Math.min(Math.max(0,0>d[0]?g+d[0]:d[0]),g);for(var g=1===t?g:Math.min(c+(d[1]||0),g),t=c+t-2,G=Math.max(g,t),P=[],n=[],Q=2;c<G;++c,\n"
 + "++Q)c<g&&n.push(m(\"deleted\",b[c],c)),c<t&&P.push(m(\"added\",d[Q],c));a.a.dc(n,P);break;default:return}f=l}}}};var s=a.a.Yb(\"_state\");a.m=a.B=function(b,c,d){function e(){if(0<arguments.length){if(\"function\"===typeof f)f.apply(g.pb,arguments);else throw Error(\"Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.\");return this}a.l.oc(e);(g.S||g.s&&e.Qa())&&e.aa();return g.T}\"object\"===typeof b?d=b:(d=d||{},b&&(d.read=\n"
 + "b));if(\"function\"!=typeof d.read)throw Error(\"Pass a function that returns the value of the ko.computed\");var f=d.write,g={T:n,S:!0,Ra:!1,Fb:!1,R:!1,Va:!1,s:!1,jd:d.read,pb:c||d.owner,i:d.disposeWhenNodeIsRemoved||d.i||null,wa:d.disposeWhen||d.wa,mb:null,r:{},L:0,bc:null};e[s]=g;e.Vc=\"function\"===typeof f;a.a.ka||a.a.extend(e,a.J.fn);a.J.fn.rb(e);a.a.Ya(e,z);d.pure?(g.Va=!0,g.s=!0,a.a.extend(e,$)):d.deferEvaluation&&a.a.extend(e,aa);a.options.deferUpdates&&a.ya.deferred(e,!0);g.i&&(g.Fb=!0,g.i.nodeType||\n"
 + "(g.i=null));g.s||d.deferEvaluation||e.aa();g.i&&e.ba()&&a.a.F.oa(g.i,g.mb=function(){e.k()});return e};var z={equalityComparer:J,Aa:function(){return this[s].L},Pb:function(a,c,d){if(this[s].Va&&c===this)throw Error(\"A 'pure' computed must not be called recursively\");this[s].r[a]=d;d.Ga=this[s].L++;d.na=c.Na()},Qa:function(){var a,c,d=this[s].r;for(a in d)if(d.hasOwnProperty(a)&&(c=d[a],c.ia.Uc(c.na)))return!0},bd:function(){this.Fa&&!this[s].Ra&&this.Fa()},ba:function(){return this[s].S||0<this[s].L},\n"
 + "ld:function(){this.Mb||this.ac()},uc:function(a){if(a.cb&&!this[s].i){var c=a.X(this.bd,this,\"dirty\"),d=a.X(this.ld,this);return{ia:a,k:function(){c.k();d.k()}}}return a.X(this.ac,this)},ac:function(){var b=this,c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[s].bc),this[s].bc=a.a.setTimeout(function(){b.aa(!0)},c)):b.Fa?b.Fa():b.aa(!0)},aa:function(b){var c=this[s],d=c.wa;if(!c.Ra&&!c.R){if(c.i&&!a.a.nb(c.i)||d&&d()){if(!c.Fb){this.k();return}}else c.Fb=!1;c.Ra=!0;try{this.Qc(b)}finally{c.Ra=!1}c.L||\n"
 + "this.k()}},Qc:function(b){var c=this[s],d=c.Va?n:!c.L,e={Hc:this,Ma:c.r,lb:c.L};a.l.Ub({Gc:e,gb:Y,m:this,Sa:d});c.r={};c.L=0;e=this.Pc(c,e);this.tb(c.T,e)&&(c.s||this.notifySubscribers(c.T,\"beforeChange\"),c.T=e,c.s?this.zc():b&&this.notifySubscribers(c.T));d&&this.notifySubscribers(c.T,\"awake\")},Pc:function(b,c){try{var d=b.jd;return b.pb?d.call(b.pb):d()}finally{a.l.end(),c.lb&&!b.s&&a.a.D(c.Ma,X),b.S=!1}},t:function(){var a=this[s];(a.S&&!a.L||a.s&&this.Qa())&&this.aa();return a.T},Ta:function(b){a.J.fn.Ta.call(this,\n"
 + "b);this.Fa=function(){this.Kb(this[s].T);this[s].S=!0;this.Lb(this)}},k:function(){var b=this[s];!b.s&&b.r&&a.a.D(b.r,function(a,b){b.k&&b.k()});b.i&&b.mb&&a.a.F.pc(b.i,b.mb);b.r=null;b.L=0;b.R=!0;b.S=!1;b.s=!1;b.i=null}},$={sa:function(b){var c=this,d=c[s];if(!d.R&&d.s&&\"change\"==b){d.s=!1;if(d.S||c.Qa())d.r=null,d.L=0,d.S=!0,c.aa();else{var e=[];a.a.D(d.r,function(a,b){e[b.Ga]=a});a.a.q(e,function(a,b){var e=d.r[a],l=c.uc(e.ia);l.Ga=b;l.na=e.na;d.r[a]=l})}d.R||c.notifySubscribers(d.T,\"awake\")}},\n"
 + "Ia:function(b){var c=this[s];c.R||\"change\"!=b||this.Pa(\"change\")||(a.a.D(c.r,function(a,b){b.k&&(c.r[a]={ia:b.ia,Ga:b.Ga,na:b.na},b.k())}),c.s=!0,this.notifySubscribers(n,\"asleep\"))},Na:function(){var b=this[s];b.s&&(b.S||this.Qa())&&this.aa();return a.J.fn.Na.call(this)}},aa={sa:function(a){\"change\"!=a&&\"beforeChange\"!=a||this.t()}};a.a.ka&&a.a.Xa(z,a.J.fn);var R=a.N.gd;a.m[R]=a.N;z[R]=a.m;a.Xc=function(b){return a.Oa(b,a.m)};a.Yc=function(b){return a.Oa(b,a.m)&&b[s]&&b[s].Va};a.b(\"computed\",a.m);\n"
 + "a.b(\"dependentObservable\",a.m);a.b(\"isComputed\",a.Xc);a.b(\"isPureComputed\",a.Yc);a.b(\"computed.fn\",z);a.G(z,\"peek\",z.t);a.G(z,\"dispose\",z.k);a.G(z,\"isActive\",z.ba);a.G(z,\"getDependenciesCount\",z.Aa);a.nc=function(b,c){if(\"function\"===typeof b)return a.m(b,c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.m(b,c)};a.b(\"pureComputed\",a.nc);(function(){function b(a,f,g){g=g||new d;a=f(a);if(\"object\"!=typeof a||null===a||a===n||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof\n"
 + "Number||a instanceof Boolean)return a;var k=a instanceof Array?[]:{};g.save(a,k);c(a,function(c){var d=f(a[c]);switch(typeof d){case \"boolean\":case \"number\":case \"string\":case \"function\":k[c]=d;break;case \"object\":case \"undefined\":var h=g.get(d);k[c]=h!==n?h:b(d,f,g)}});return k}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);\"function\"==typeof a.toJSON&&b(\"toJSON\")}else for(c in a)b(c)}function d(){this.keys=[];this.Ib=[]}a.wc=function(c){if(0==arguments.length)throw Error(\"When calling ko.toJS, pass the object you want to convert.\");\n"
 + "return b(c,function(b){for(var c=0;a.H(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.wc(b);return a.a.Eb(b,c,d)};d.prototype={save:function(b,c){var d=a.a.o(this.keys,b);0<=d?this.Ib[d]=c:(this.keys.push(b),this.Ib.push(c))},get:function(b){b=a.a.o(this.keys,b);return 0<=b?this.Ib[b]:n}}})();a.b(\"toJS\",a.wc);a.b(\"toJSON\",a.toJSON);(function(){a.j={u:function(b){switch(a.a.A(b)){case \"option\":return!0===b.__ko__hasDomDataOptionValue__?a.a.e.get(b,a.d.options.xb):7>=a.a.C?b.getAttributeNode(\"value\")&&\n"
 + "b.getAttributeNode(\"value\").specified?b.value:b.text:b.value;case \"select\":return 0<=b.selectedIndex?a.j.u(b.options[b.selectedIndex]):n;default:return b.value}},ha:function(b,c,d){switch(a.a.A(b)){case \"option\":switch(typeof c){case \"string\":a.a.e.set(b,a.d.options.xb,n);\"__ko__hasDomDataOptionValue__\"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.e.set(b,a.d.options.xb,c),b.__ko__hasDomDataOptionValue__=!0,b.value=\"number\"===typeof c?c:\"\"}break;case \"select\":if(\"\"===c||\n"
 + "null===c)c=n;for(var e=-1,f=0,g=b.options.length,k;f<g;++f)if(k=a.j.u(b.options[f]),k==c||\"\"==k&&c===n){e=f;break}if(d||0<=e||c===n&&1<b.size)b.selectedIndex=e;break;default:if(null===c||c===n)c=\"\";b.value=c}}}})();a.b(\"selectExtensions\",a.j);a.b(\"selectExtensions.readValue\",a.j.u);a.b(\"selectExtensions.writeValue\",a.j.ha);a.h=function(){function b(b){b=a.a.$a(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=[],d=b.match(e),r,k=[],p=0;if(d){d.push(\",\");for(var A=0,y;y=d[A];++A){var t=y.charCodeAt(0);\n"
 + "if(44===t){if(0>=p){c.push(r&&k.length?{key:r,value:k.join(\"\")}:{unknown:r||k.join(\"\")});r=p=0;k=[];continue}}else if(58===t){if(!p&&!r&&1===k.length){r=k.pop();continue}}else 47===t&&A&&1<y.length?(t=d[A-1].match(f))&&!g[t[0]]&&(b=b.substr(b.indexOf(y)+1),d=b.match(e),d.push(\",\"),A=-1,y=\"/\"):40===t||123===t||91===t?++p:41===t||125===t||93===t?--p:r||k.length||34!==t&&39!==t||(y=y.slice(1,-1));k.push(y)}}return c}var c=[\"true\",\"false\",\"null\",\"undefined\"],d=/^(?:[$_a-z][$\\w]*|(.+)(\\.\\s*[$_a-z][$\\w]*|\\[.+\\]))$/i,\n"
 + "e=RegExp(\"\\\"(?:[^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'(?:[^'\\\\\\\\]|\\\\\\\\.)*'|/(?:[^/\\\\\\\\]|\\\\\\\\.)*/w*|[^\\\\s:,/][^,\\\"'{}()/:[\\\\]]*[^\\\\s,\\\"'{}()/:[\\\\]]|[^\\\\s]\",\"g\"),f=/[\\])\"'A-Za-z0-9_$]+$/,g={\"in\":1,\"return\":1,\"typeof\":1},k={};return{ta:[],ea:k,yb:b,Ua:function(e,m){function h(b,e){var m;if(!A){var l=a.getBindingHandler(b);if(l&&l.preprocess&&!(e=l.preprocess(e,b,h)))return;if(l=k[b])m=e,0<=a.a.o(c,m)?m=!1:(l=m.match(d),m=null===l?!1:l[1]?\"Object(\"+l[1]+\")\"+l[2]:m),l=m;l&&g.push(\"'\"+b+\"':function(_z){\"+m+\"=_z}\")}p&&(e=\n"
 + "\"function(){return \"+e+\" }\");f.push(\"'\"+b+\"':\"+e)}m=m||{};var f=[],g=[],p=m.valueAccessors,A=m.bindingParams,y=\"string\"===typeof e?b(e):e;a.a.q(y,function(a){h(a.key||a.unknown,a.value)});g.length&&h(\"_ko_property_writers\",\"{\"+g.join(\",\")+\" }\");return f.join(\",\")},ad:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},Ea:function(b,c,d,e,f){if(b&&a.H(b))!a.Ba(b)||f&&b.t()===e||b(e);else if((b=c.get(\"_ko_property_writers\"))&&b[d])b[d](e)}}}();a.b(\"expressionRewriting\",a.h);a.b(\"expressionRewriting.bindingRewriteValidators\",\n"
 + "a.h.ta);a.b(\"expressionRewriting.parseObjectLiteral\",a.h.yb);a.b(\"expressionRewriting.preProcessBindings\",a.h.Ua);a.b(\"expressionRewriting._twoWayBindings\",a.h.ea);a.b(\"jsonExpressionRewriting\",a.h);a.b(\"jsonExpressionRewriting.insertPropertyAccessorsIntoJson\",a.h.Ua);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&k.test(f?a.text:a.nodeValue)}function d(a,d){for(var e=a,f=1,l=[];e=e.nextSibling;){if(c(e)&&(f--,0===f))return l;l.push(e);\n"
 + "b(e)&&f++}if(!d)throw Error(\"Cannot find closing comment tag to match: \"+a.nodeValue);return null}function e(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=u&&\"\\x3c!--test--\\x3e\"===u.createComment(\"test\").text,g=f?/^\\x3c!--\\s*ko(?:\\s+([\\s\\S]+))?\\s*--\\x3e$/:/^\\s*ko(?:\\s+([\\s\\S]+))?\\s*$/,k=f?/^\\x3c!--\\s*\\/ko\\s*--\\x3e$/:/^\\s*\\/ko\\s*$/,l={ul:!0,ol:!0};a.f={Z:{},childNodes:function(a){return b(a)?d(a):a.childNodes},xa:function(c){if(b(c)){c=a.f.childNodes(c);for(var d=\n"
 + "0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.ob(c)},da:function(c,d){if(b(c)){a.f.xa(c);for(var e=c.nextSibling,f=0,l=d.length;f<l;f++)e.parentNode.insertBefore(d[f],e)}else a.a.da(c,d)},mc:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},gc:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.f.mc(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||\n"
 + "c(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling},Tc:b,pd:function(a){return(a=(f?a.text:a.nodeValue).match(g))?a[1]:null},kc:function(d){if(l[a.a.A(d)]){var h=d.firstChild;if(h){do if(1===h.nodeType){var f;f=h.firstChild;var g=null;if(f){do if(g)g.push(f);else if(b(f)){var k=e(f,!0);k?f=k:g=[f]}else c(f)&&(g=[f]);while(f=f.nextSibling)}if(f=g)for(g=h.nextSibling,k=0;k<f.length;k++)g?d.insertBefore(f[k],\n"
 + "g):d.appendChild(f[k])}while(h=h.nextSibling)}}}}})();a.b(\"virtualElements\",a.f);a.b(\"virtualElements.allowedBindings\",a.f.Z);a.b(\"virtualElements.emptyNode\",a.f.xa);a.b(\"virtualElements.insertAfter\",a.f.gc);a.b(\"virtualElements.prepend\",a.f.mc);a.b(\"virtualElements.setDomNodeChildren\",a.f.da);(function(){a.Q=function(){this.Fc={}};a.a.extend(a.Q.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute(\"data-bind\")||a.g.getComponentNameForNode(b);case 8:return a.f.Tc(b);\n"
 + "default:return!1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.g.Ob(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.g.Ob(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute(\"data-bind\");case 8:return a.f.pd(b);default:return null}},parseBindingsString:function(b,c,d,e){try{var f=this.Fc,g=b+(e&&e.valueAccessors||\n"
 + "\"\"),k;if(!(k=f[g])){var l,m=\"with($context){with($data||{}){return{\"+a.h.Ua(b,e)+\"}}}\";l=new Function(\"$context\",\"$element\",m);k=f[g]=l}return k(c,d)}catch(h){throw h.message=\"Unable to parse bindings.\\nBindings value: \"+b+\"\\nMessage: \"+h.message,h;}}});a.Q.instance=new a.Q})();a.b(\"bindingProvider\",a.Q);(function(){function b(a){return function(){return a}}function c(a){return a()}function d(b){return a.a.Ca(a.l.w(b),function(a,c){return function(){return b()[c]}})}function e(c,e,h){return\"function\"===\n"
 + "typeof c?d(c.bind(null,e,h)):a.a.Ca(c,b)}function f(a,b){return d(this.getBindings.bind(this,a,b))}function g(b,c,d){var e,h=a.f.firstChild(c),f=a.Q.instance,m=f.preprocessNode;if(m){for(;e=h;)h=a.f.nextSibling(e),m.call(f,e);h=a.f.firstChild(c)}for(;e=h;)h=a.f.nextSibling(e),k(b,e,d)}function k(b,c,d){var e=!0,h=1===c.nodeType;h&&a.f.kc(c);if(h&&d||a.Q.instance.nodeHasBindings(c))e=m(c,null,b,d).shouldBindDescendants;e&&!r[a.a.A(c)]&&g(b,c,!h)}function l(b){var c=[],d={},e=[];a.a.D(b,function Z(h){if(!d[h]){var f=\n"
 + "a.getBindingHandler(h);f&&(f.after&&(e.push(h),a.a.q(f.after,function(c){if(b[c]){if(-1!==a.a.o(e,c))throw Error(\"Cannot combine the following bindings, because they have a cyclic dependency: \"+e.join(\", \"));Z(c)}}),e.length--),c.push({key:h,fc:f}));d[h]=!0}});return c}function m(b,d,e,h){var m=a.a.e.get(b,q);if(!d){if(m)throw Error(\"You cannot apply bindings multiple times to the same element.\");a.a.e.set(b,q,!0)}!m&&h&&a.tc(b,e);var g;if(d&&\"function\"!==typeof d)g=d;else{var k=a.Q.instance,r=k.getBindingAccessors||\n"
 + "f,p=a.B(function(){(g=d?d(e,b):r.call(k,b,e))&&e.P&&e.P();return g},null,{i:b});g&&p.ba()||(p=null)}var u;if(g){var v=p?function(a){return function(){return c(p()[a])}}:function(a){return g[a]},s=function(){return a.a.Ca(p?p():g,c)};s.get=function(a){return g[a]&&c(v(a))};s.has=function(a){return a in g};h=l(g);a.a.q(h,function(c){var d=c.fc.init,h=c.fc.update,f=c.key;if(8===b.nodeType&&!a.f.Z[f])throw Error(\"The binding '\"+f+\"' cannot be used with virtual elements\");try{\"function\"==typeof d&&a.l.w(function(){var a=\n"
 + "d(b,v(f),s,e.$data,e);if(a&&a.controlsDescendantBindings){if(u!==n)throw Error(\"Multiple bindings (\"+u+\" and \"+f+\") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.\");u=f}}),\"function\"==typeof h&&a.B(function(){h(b,v(f),s,e.$data,e)},null,{i:b})}catch(m){throw m.message='Unable to process binding \"'+f+\": \"+g[f]+'\"\\nMessage: '+m.message,m;}})}return{shouldBindDescendants:u===n}}function h(b){return b&&b instanceof a.U?b:new a.U(b)}\n"
 + "a.d={};var r={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.d[b]};a.U=function(b,c,d,e){var h=this,f=\"function\"==typeof b&&!a.H(b),m,g=a.B(function(){var m=f?b():b,l=a.a.c(m);c?(c.P&&c.P(),a.a.extend(h,c),g&&(h.P=g)):(h.$parents=[],h.$root=l,h.ko=a);h.$rawData=m;h.$data=l;d&&(h[d]=l);e&&e(h,c,l);return h.$data},null,{wa:function(){return m&&!a.a.Qb(m)},i:!0});g.ba()&&(h.P=g,g.equalityComparer=null,m=[],g.Ac=function(b){m.push(b);a.a.F.oa(b,function(b){a.a.La(m,b);m.length||\n"
 + "(g.k(),h.P=g=n)})})};a.U.prototype.createChildContext=function(b,c,d){return new a.U(b,this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.U.prototype.extend=function(b){return new a.U(this.P||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;a.a.extend(c,\"function\"==typeof b?b():b)})};var q=a.a.e.I(),p=a.a.e.I();a.tc=function(b,c){if(2==arguments.length)a.a.e.set(b,p,c),c.P&&c.P.Ac(b);else return a.a.e.get(b,\n"
 + "p)};a.Ja=function(b,c,d){1===b.nodeType&&a.f.kc(b);return m(b,c,h(d),!0)};a.Dc=function(b,c,d){d=h(d);return a.Ja(b,e(c,d,b),d)};a.eb=function(a,b){1!==b.nodeType&&8!==b.nodeType||g(h(a),b,!0)};a.Rb=function(a,b){!v&&x.jQuery&&(v=x.jQuery);if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error(\"ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node\");b=b||x.document.body;k(h(a),b,!0)};a.kb=function(b){switch(b.nodeType){case 1:case 8:var c=a.tc(b);if(c)return c;\n"
 + "if(b.parentNode)return a.kb(b.parentNode)}return n};a.Jc=function(b){return(b=a.kb(b))?b.$data:n};a.b(\"bindingHandlers\",a.d);a.b(\"applyBindings\",a.Rb);a.b(\"applyBindingsToDescendants\",a.eb);a.b(\"applyBindingAccessorsToNode\",a.Ja);a.b(\"applyBindingsToNode\",a.Dc);a.b(\"contextFor\",a.kb);a.b(\"dataFor\",a.Jc)})();(function(b){function c(c,e){var m=f.hasOwnProperty(c)?f[c]:b,h;m?m.X(e):(m=f[c]=new a.J,m.X(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,Zc:e};delete f[c];h||e?m.notifySubscribers(b):\n"
 + "a.Y.Wa(function(){m.notifySubscribers(b)})}),h=!0)}function d(a,b){e(\"getConfig\",[a],function(c){c?e(\"loadComponent\",[a,c],function(a){b(a,c)}):b(null,null)})}function e(c,d,f,h){h||(h=a.g.loaders.slice(0));var g=h.shift();if(g){var q=g[c];if(q){var p=!1;if(q.apply(g,d.concat(function(a){p?f(null):null!==a?f(a):e(c,d,f,h)}))!==b&&(p=!0,!g.suppressLoaderExceptions))throw Error(\"Component loaders must supply values by invoking the callback, not by returning values synchronously.\");}else e(c,d,f,h)}else f(null)}\n"
 + "var f={},g={};a.g={get:function(d,e){var f=g.hasOwnProperty(d)?g[d]:b;f?f.Zc?a.l.w(function(){e(f.definition)}):a.Y.Wa(function(){e(f.definition)}):c(d,e)},Xb:function(a){delete g[a]},Jb:e};a.g.loaders=[];a.b(\"components\",a.g);a.b(\"components.get\",a.g.get);a.b(\"components.clearCachedDefinition\",a.g.Xb)})();(function(){function b(b,c,d,e){function g(){0===--y&&e(k)}var k={},y=2,t=d.template;d=d.viewModel;t?f(c,t,function(c){a.g.Jb(\"loadTemplate\",[b,c],function(a){k.template=a;g()})}):g();d?f(c,d,function(c){a.g.Jb(\"loadViewModel\",\n"
 + "[b,c],function(a){k[l]=a;g()})}):g()}function c(a,b,d){if(\"function\"===typeof b)d(function(a){return new b(a)});else if(\"function\"===typeof b[l])d(b[l]);else if(\"instance\"in b){var e=b.instance;d(function(){return e})}else\"viewModel\"in b?c(a,b.viewModel,d):a(\"Unknown viewModel value: \"+b)}function d(b){switch(a.a.A(b)){case \"script\":return a.a.ma(b.text);case \"textarea\":return a.a.ma(b.value);case \"template\":if(e(b.content))return a.a.ua(b.content.childNodes)}return a.a.ua(b.childNodes)}function e(a){return x.DocumentFragment?\n"
 + "a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){\"string\"===typeof b.require?O||x.require?(O||x.require)([b.require],c):a(\"Uses require, but no AMD loader is present\"):c(b)}function g(a){return function(b){throw Error(\"Component '\"+a+\"': \"+b);}}var k={};a.g.register=function(b,c){if(!c)throw Error(\"Invalid configuration for \"+b);if(a.g.ub(b))throw Error(\"Component \"+b+\" is already registered\");k[b]=c};a.g.ub=function(a){return k.hasOwnProperty(a)};a.g.od=function(b){delete k[b];\n"
 + "a.g.Xb(b)};a.g.Zb={getConfig:function(a,b){b(k.hasOwnProperty(a)?k[a]:null)},loadComponent:function(a,c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,c,f){b=g(b);if(\"string\"===typeof c)f(a.a.ma(c));else if(c instanceof Array)f(c);else if(e(c))f(a.a.V(c.childNodes));else if(c.element)if(c=c.element,x.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if(\"string\"===typeof c){var l=u.getElementById(c);l?f(d(l)):b(\"Cannot find element with ID \"+c)}else b(\"Unknown element type: \"+\n"
 + "c);else b(\"Unknown template value: \"+c)},loadViewModel:function(a,b,d){c(g(a),b,d)}};var l=\"createViewModel\";a.b(\"components.register\",a.g.register);a.b(\"components.isRegistered\",a.g.ub);a.b(\"components.unregister\",a.g.od);a.b(\"components.defaultLoader\",a.g.Zb);a.g.loaders.push(a.g.Zb);a.g.Bc=k})();(function(){function b(b,e){var f=b.getAttribute(\"params\");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Ca(f,function(c){return a.m(c,null,{i:b})}),g=a.a.Ca(f,function(c){var e=\n"
 + "c.t();return c.ba()?a.m({read:function(){return a.a.c(c())},write:a.Ba(e)&&function(a){c()(a)},i:b}):e});g.hasOwnProperty(\"$raw\")||(g.$raw=f);return g}return{$raw:{}}}a.g.getComponentNameForNode=function(b){var c=a.a.A(b);if(a.g.ub(c)&&(-1!=c.indexOf(\"-\")||\"[object HTMLUnknownElement]\"==\"\"+b||8>=a.a.C&&b.tagName===c))return c};a.g.Ob=function(c,e,f,g){if(1===e.nodeType){var k=a.g.getComponentNameForNode(e);if(k){c=c||{};if(c.component)throw Error('Cannot use the \"component\" binding on a custom element matching a component');\n"
 + "var l={name:k,params:b(e,f)};c.component=g?function(){return l}:l}}return c};var c=new a.Q;9>a.a.C&&(a.g.register=function(a){return function(b){u.createElement(b);return a.apply(this,arguments)}}(a.g.register),u.createDocumentFragment=function(b){return function(){var c=b(),f=a.g.Bc,g;for(g in f)f.hasOwnProperty(g)&&c.createElement(g);return c}}(u.createDocumentFragment))})();(function(b){function c(b,c,d){c=c.template;if(!c)throw Error(\"Component '\"+b+\"' has no template\");b=a.a.ua(c);a.f.da(d,b)}\n"
 + "function d(a,b,c,d){var e=a.createViewModel;return e?e.call(a,d,{element:b,templateNodes:c}):d}var e=0;a.d.component={init:function(f,g,k,l,m){function h(){var a=r&&r.dispose;\"function\"===typeof a&&a.call(r);q=r=null}var r,q,p=a.a.V(a.f.childNodes(f));a.a.F.oa(f,h);a.m(function(){var l=a.a.c(g()),k,t;\"string\"===typeof l?k=l:(k=a.a.c(l.name),t=a.a.c(l.params));if(!k)throw Error(\"No component name specified\");var n=q=++e;a.g.get(k,function(e){if(q===n){h();if(!e)throw Error(\"Unknown component '\"+k+\n"
 + "\"'\");c(k,e,f);var g=d(e,f,p,t);e=m.createChildContext(g,b,function(a){a.$component=g;a.$componentTemplateNodes=p});r=g;a.eb(e,f)}})},null,{i:f});return{controlsDescendantBindings:!0}}};a.f.Z.component=!0})();var S={\"class\":\"className\",\"for\":\"htmlFor\"};a.d.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.D(d,function(c,d){d=a.a.c(d);var g=!1===d||null===d||d===n;g&&b.removeAttribute(c);8>=a.a.C&&c in S?(c=S[c],g?b.removeAttribute(c):b[c]=d):g||b.setAttribute(c,d.toString());\"name\"===c&&a.a.rc(b,\n"
 + "g?\"\":d.toString())})}};(function(){a.d.checked={after:[\"value\",\"attr\"],init:function(b,c,d){function e(){var e=b.checked,f=p?g():e;if(!a.va.Sa()&&(!l||e)){var m=a.l.w(c);if(h){var k=r?m.t():m;q!==f?(e&&(a.a.pa(k,f,!0),a.a.pa(k,q,!1)),q=f):a.a.pa(k,f,e);r&&a.Ba(m)&&m(k)}else a.h.Ea(m,d,\"checked\",f,!0)}}function f(){var d=a.a.c(c());b.checked=h?0<=a.a.o(d,g()):k?d:g()===d}var g=a.nc(function(){return d.has(\"checkedValue\")?a.a.c(d.get(\"checkedValue\")):d.has(\"value\")?a.a.c(d.get(\"value\")):b.value}),k=\n"
 + "\"checkbox\"==b.type,l=\"radio\"==b.type;if(k||l){var m=c(),h=k&&a.a.c(m)instanceof Array,r=!(h&&m.push&&m.splice),q=h?g():n,p=l||h;l&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.m(e,null,{i:b});a.a.p(b,\"click\",e);a.m(f,null,{i:b});m=n}}};a.h.ea.checked=!0;a.d.checkedValue={update:function(b,c){b.value=a.a.c(c())}}})();a.d.css={update:function(b,c){var d=a.a.c(c());null!==d&&\"object\"==typeof d?a.a.D(d,function(c,d){d=a.a.c(d);a.a.bb(b,c,d)}):(d=a.a.$a(String(d||\"\")),a.a.bb(b,b.__ko__cssValue,\n"
 + "!1),b.__ko__cssValue=d,a.a.bb(b,d,!0))}};a.d.enable={update:function(b,c){var d=a.a.c(c());d&&b.disabled?b.removeAttribute(\"disabled\"):d||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return!a.a.c(c())})}};a.d.event={init:function(b,c,d,e,f){var g=c()||{};a.a.D(g,function(g){\"string\"==typeof g&&a.a.p(b,g,function(b){var m,h=c()[g];if(h){try{var r=a.a.V(arguments);e=f.$data;r.unshift(e);m=h.apply(e,r)}finally{!0!==m&&(b.preventDefault?b.preventDefault():\n"
 + "b.returnValue=!1)}!1===d.get(g+\"Bubble\")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={ic:function(b){return function(){var c=b(),d=a.a.zb(c);if(!d||\"number\"==typeof d.length)return{foreach:c,templateEngine:a.W.sb};a.a.c(c);return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.W.sb}}},init:function(b,c){return a.d.template.init(b,\n"
 + "a.d.foreach.ic(c))},update:function(b,c,d,e,f){return a.d.template.update(b,a.d.foreach.ic(c),d,e,f)}};a.h.ta.foreach=!1;a.f.Z.foreach=!0;a.d.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if(\"activeElement\"in f){var g;try{g=f.activeElement}catch(h){g=f.body}e=g===b}f=c();a.h.Ea(f,d,\"hasfocus\",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.p(b,\"focus\",f);a.a.p(b,\"focusin\",f);a.a.p(b,\"blur\",g);a.a.p(b,\n"
 + "\"focusout\",g)},update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),a.l.w(a.a.Da,null,[b,d?\"focusin\":\"focusout\"]))}};a.h.ea.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.h.ea.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Cb(b,c())}};K(\"if\");K(\"ifnot\",!1,!0);K(\"with\",!0,!1,function(a,c){return a.createChildContext(c)});var L={};\n"
 + "a.d.options={init:function(b){if(\"select\"!==a.a.A(b))throw Error(\"options binding applies only to SELECT elements\");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.Ka(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return\"function\"==d?b(a):\"string\"==d?a[b]:c}function g(c,e){if(A&&h)a.j.ha(b,a.a.c(d.get(\"value\")),!0);else if(p.length){var f=0<=a.a.o(p,a.j.u(e[0]));a.a.sc(e[0],f);A&&!f&&a.l.w(a.a.Da,null,[b,\n"
 + "\"change\"])}}var k=b.multiple,l=0!=b.length&&k?b.scrollTop:null,m=a.a.c(c()),h=d.get(\"valueAllowUnset\")&&d.has(\"value\"),r=d.get(\"optionsIncludeDestroyed\");c={};var q,p=[];h||(k?p=a.a.fb(e(),a.j.u):0<=b.selectedIndex&&p.push(a.j.u(b.options[b.selectedIndex])));m&&(\"undefined\"==typeof m.length&&(m=[m]),q=a.a.Ka(m,function(b){return r||b===n||null===b||!a.a.c(b._destroy)}),d.has(\"optionsCaption\")&&(m=a.a.c(d.get(\"optionsCaption\")),null!==m&&m!==n&&q.unshift(L)));var A=!1;c.beforeRemove=function(a){b.removeChild(a)};\n"
 + "m=g;d.has(\"optionsAfterRender\")&&\"function\"==typeof d.get(\"optionsAfterRender\")&&(m=function(b,c){g(0,c);a.l.w(d.get(\"optionsAfterRender\"),null,[c[0],b!==L?b:n])});a.a.Bb(b,q,function(c,e,g){g.length&&(p=!h&&g[0].selected?[a.j.u(g[0])]:[],A=!0);e=b.ownerDocument.createElement(\"option\");c===L?(a.a.Za(e,d.get(\"optionsCaption\")),a.j.ha(e,n)):(g=f(c,d.get(\"optionsValue\"),c),a.j.ha(e,a.a.c(g)),c=f(c,d.get(\"optionsText\"),g),a.a.Za(e,c));return[e]},c,m);a.l.w(function(){h?a.j.ha(b,a.a.c(d.get(\"value\")),\n"
 + "!0):(k?p.length&&e().length<p.length:p.length&&0<=b.selectedIndex?a.j.u(b.options[b.selectedIndex])!==p[0]:p.length||0<=b.selectedIndex)&&a.a.Da(b,\"change\")});a.a.Nc(b);l&&20<Math.abs(l-b.scrollTop)&&(b.scrollTop=l)}};a.d.options.xb=a.a.e.I();a.d.selectedOptions={after:[\"options\",\"foreach\"],init:function(b,c,d){a.a.p(b,\"change\",function(){var e=c(),f=[];a.a.q(b.getElementsByTagName(\"option\"),function(b){b.selected&&f.push(a.j.u(b))});a.h.Ea(e,d,\"selectedOptions\",f)})},update:function(b,c){if(\"select\"!=\n"
 + "a.a.A(b))throw Error(\"values binding applies only to SELECT elements\");var d=a.a.c(c()),e=b.scrollTop;d&&\"number\"==typeof d.length&&a.a.q(b.getElementsByTagName(\"option\"),function(b){var c=0<=a.a.o(d,a.j.u(b));b.selected!=c&&a.a.sc(b,c)});b.scrollTop=e}};a.h.ea.selectedOptions=!0;a.d.style={update:function(b,c){var d=a.a.c(c()||{});a.a.D(d,function(c,d){d=a.a.c(d);if(null===d||d===n||!1===d)d=\"\";b.style[c]=d})}};a.d.submit={init:function(b,c,d,e,f){if(\"function\"!=typeof c())throw Error(\"The value for a submit binding must be a function\");\n"
 + "a.a.p(b,\"submit\",function(a){var d,e=c();try{d=e.call(f.$data,b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Za(b,c())}};a.f.Z.text=!0;(function(){if(x&&x.navigator)var b=function(a){if(a)return parseFloat(a[1])},c=x.opera&&x.opera.version&&parseInt(x.opera.version()),d=x.navigator.userAgent,e=b(d.match(/^(?:(?!chrome).)*version\\/([^ ]*) safari/i)),f=b(d.match(/Firefox\\/([^ ]*)/));\n"
 + "if(10>a.a.C)var g=a.a.e.I(),k=a.a.e.I(),l=function(b){var c=this.activeElement;(c=c&&a.a.e.get(c,k))&&c(b)},m=function(b,c){var d=b.ownerDocument;a.a.e.get(d,g)||(a.a.e.set(d,g,!0),a.a.p(d,\"selectionchange\",l));a.a.e.set(b,k,c)};a.d.textInput={init:function(b,d,g){function l(c,d){a.a.p(b,c,d)}function k(){var c=a.a.c(d());if(null===c||c===n)c=\"\";v!==n&&c===v?a.a.setTimeout(k,4):b.value!==c&&(u=c,b.value=c)}function y(){s||(v=b.value,s=a.a.setTimeout(t,4))}function t(){clearTimeout(s);v=s=n;var c=\n"
 + "b.value;u!==c&&(u=c,a.h.Ea(d(),g,\"textInput\",c))}var u=b.value,s,v,x=9==a.a.C?y:t;10>a.a.C?(l(\"propertychange\",function(a){\"value\"===a.propertyName&&x(a)}),8==a.a.C&&(l(\"keyup\",t),l(\"keydown\",t)),8<=a.a.C&&(m(b,x),l(\"dragend\",y))):(l(\"input\",t),5>e&&\"textarea\"===a.a.A(b)?(l(\"keydown\",y),l(\"paste\",y),l(\"cut\",y)):11>c?l(\"keydown\",y):4>f&&(l(\"DOMAutoComplete\",t),l(\"dragdrop\",t),l(\"drop\",t)));l(\"change\",t);a.m(k,null,{i:b})}};a.h.ea.textInput=!0;a.d.textinput={preprocess:function(a,b,c){c(\"textInput\",\n"
 + "a)}}})();a.d.uniqueName={init:function(b,c){if(c()){var d=\"ko_unique_\"+ ++a.d.uniqueName.Ic;a.a.rc(b,d)}}};a.d.uniqueName.Ic=0;a.d.value={after:[\"options\",\"foreach\"],init:function(b,c,d){if(\"input\"!=b.tagName.toLowerCase()||\"checkbox\"!=b.type&&\"radio\"!=b.type){var e=[\"change\"],f=d.get(\"valueUpdate\"),g=!1,k=null;f&&(\"string\"==typeof f&&(f=[f]),a.a.ra(e,f),e=a.a.Tb(e));var l=function(){k=null;g=!1;var e=c(),f=a.j.u(b);a.h.Ea(e,d,\"value\",f)};!a.a.C||\"input\"!=b.tagName.toLowerCase()||\"text\"!=b.type||\n"
 + "\"off\"==b.autocomplete||b.form&&\"off\"==b.form.autocomplete||-1!=a.a.o(e,\"propertychange\")||(a.a.p(b,\"propertychange\",function(){g=!0}),a.a.p(b,\"focus\",function(){g=!1}),a.a.p(b,\"blur\",function(){g&&l()}));a.a.q(e,function(c){var d=l;a.a.nd(c,\"after\")&&(d=function(){k=a.j.u(b);a.a.setTimeout(l,0)},c=c.substring(5));a.a.p(b,c,d)});var m=function(){var e=a.a.c(c()),f=a.j.u(b);if(null!==k&&e===k)a.a.setTimeout(m,0);else if(e!==f)if(\"select\"===a.a.A(b)){var g=d.get(\"valueAllowUnset\"),f=function(){a.j.ha(b,\n"
 + "e,g)};f();g||e===a.j.u(b)?a.a.setTimeout(f,0):a.l.w(a.a.Da,null,[b,\"change\"])}else a.j.ha(b,e)};a.m(m,null,{i:b})}else a.Ja(b,{checkedValue:c})},update:function(){}};a.h.ea.value=!0;a.d.visible={update:function(b,c){var d=a.a.c(c()),e=\"none\"!=b.style.display;d&&!e?b.style.display=\"\":!d&&e&&(b.style.display=\"none\")}};(function(b){a.d[b]={init:function(c,d,e,f,g){return a.d.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,g)}}})(\"click\");a.O=function(){};a.O.prototype.renderTemplateSource=\n"
 + "function(){throw Error(\"Override renderTemplateSource\");};a.O.prototype.createJavaScriptEvaluatorBlock=function(){throw Error(\"Override createJavaScriptEvaluatorBlock\");};a.O.prototype.makeTemplateSource=function(b,c){if(\"string\"==typeof b){c=c||u;var d=c.getElementById(b);if(!d)throw Error(\"Cannot find template with ID \"+b);return new a.v.n(d)}if(1==b.nodeType||8==b.nodeType)return new a.v.qa(b);throw Error(\"Unknown template type: \"+b);};a.O.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,\n"
 + "e);return this.renderTemplateSource(a,c,d,e)};a.O.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data(\"isRewritten\")};a.O.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data(\"isRewritten\",!0)};a.b(\"templateEngine\",a.O);a.Gb=function(){function b(b,c,d,k){b=a.h.yb(b);for(var l=a.h.ta,m=0;m<b.length;m++){var h=b[m].key;if(l.hasOwnProperty(h)){var r=l[h];if(\"function\"===typeof r){if(h=\n"
 + "r(b[m].value))throw Error(h);}else if(!r)throw Error(\"This template engine does not support the '\"+h+\"' binding within its templates\");}}d=\"ko.__tr_ambtns(function($context,$element){return(function(){return{ \"+a.h.Ua(b,{valueAccessors:!0})+\" } })()},'\"+d.toLowerCase()+\"')\";return k.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\\d*)(?:\\s+(?!data-bind\\s*=\\s*)[a-z0-9\\-]+(?:=(?:\\\"[^\\\"]*\\\"|\\'[^\\']*\\'|[^>]*))?)*\\s+)data-bind\\s*=\\s*([\"'])([\\s\\S]*?)\\3/gi,d=/\\x3c!--\\s*ko\\b\\s*([\\s\\S]*?)\\s*--\\x3e/g;return{Oc:function(b,\n"
 + "c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Gb.dd(b,c)},d)},dd:function(a,f){return a.replace(c,function(a,c,d,e,h){return b(h,c,d,f)}).replace(d,function(a,c){return b(c,\"\\x3c!-- ko --\\x3e\",\"#comment\",f)})},Ec:function(b,c){return a.M.wb(function(d,k){var l=d.nextSibling;l&&l.nodeName.toLowerCase()===c&&a.Ja(l,b,k)})}}}();a.b(\"__tr_ambtns\",a.Gb.Ec);(function(){a.v={};a.v.n=function(b){if(this.n=b){var c=a.a.A(b);this.ab=\"script\"===c?1:\"textarea\"===c?2:\"template\"==c&&\n"
 + "b.content&&11===b.content.nodeType?3:4}};a.v.n.prototype.text=function(){var b=1===this.ab?\"text\":2===this.ab?\"value\":\"innerHTML\";if(0==arguments.length)return this.n[b];var c=arguments[0];\"innerHTML\"===b?a.a.Cb(this.n,c):this.n[b]=c};var b=a.a.e.I()+\"_\";a.v.n.prototype.data=function(c){if(1===arguments.length)return a.a.e.get(this.n,b+c);a.a.e.set(this.n,b+c,arguments[1])};var c=a.a.e.I();a.v.n.prototype.nodes=function(){var b=this.n;if(0==arguments.length)return(a.a.e.get(b,c)||{}).jb||(3===this.ab?\n"
 + "b.content:4===this.ab?b:n);a.a.e.set(b,c,{jb:arguments[0]})};a.v.qa=function(a){this.n=a};a.v.qa.prototype=new a.v.n;a.v.qa.prototype.text=function(){if(0==arguments.length){var b=a.a.e.get(this.n,c)||{};b.Hb===n&&b.jb&&(b.Hb=b.jb.innerHTML);return b.Hb}a.a.e.set(this.n,c,{Hb:arguments[0]})};a.b(\"templateSources\",a.v);a.b(\"templateSources.domElement\",a.v.n);a.b(\"templateSources.anonymousTemplate\",a.v.qa)})();(function(){function b(b,c,d){var e;for(c=a.f.nextSibling(c);b&&(e=b)!==c;)b=a.f.nextSibling(e),\n"
 + "d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,k=a.Q.instance,n=k.preprocessNode;if(n){b(e,f,function(a,b){var c=a.previousSibling,d=n.call(k,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):(c.push(e,f),a.a.za(c,g))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.Rb(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.M.yc(b,[d])});a.a.za(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,\n"
 + "e,f,k,q){q=q||{};var p=(b&&d(b)||f||{}).ownerDocument,n=q.templateEngine||g;a.Gb.Oc(f,n,p);f=n.renderTemplate(f,k,q,p);if(\"number\"!=typeof f.length||0<f.length&&\"number\"!=typeof f[0].nodeType)throw Error(\"Template engine must return an array of DOM nodes\");p=!1;switch(e){case \"replaceChildren\":a.f.da(b,f);p=!0;break;case \"replaceNode\":a.a.qc(b,f);p=!0;break;case \"ignoreTargetNode\":break;default:throw Error(\"Unknown renderMode: \"+e);}p&&(c(f,k),q.afterRender&&a.l.w(q.afterRender,null,[f,k.$data]));\n"
 + "return f}function f(b,c,d){return a.H(b)?b():\"function\"===typeof b?b(c,d):b}var g;a.Db=function(b){if(b!=n&&!(b instanceof a.O))throw Error(\"templateEngine must inherit from ko.templateEngine\");g=b};a.Ab=function(b,c,h,k,q){h=h||{};if((h.templateEngine||g)==n)throw Error(\"Set a template engine before calling renderTemplate\");q=q||\"replaceChildren\";if(k){var p=d(k);return a.B(function(){var g=c&&c instanceof a.U?c:new a.U(a.a.c(c)),n=f(b,g.$data,g),g=e(k,q,n,g,h);\"replaceNode\"==q&&(k=g,p=d(k))},null,\n"
 + "{wa:function(){return!p||!a.a.nb(p)},i:p&&\"replaceNode\"==q?p.parentNode:p})}return a.M.wb(function(d){a.Ab(b,c,h,d,\"replaceNode\")})};a.kd=function(b,d,g,k,q){function p(a,b){c(b,s);g.afterRender&&g.afterRender(b,a);s=null}function u(a,c){s=q.createChildContext(a,g.as,function(a){a.$index=c});var d=f(b,a,s);return e(null,\"ignoreTargetNode\",d,s,g)}var s;return a.B(function(){var b=a.a.c(d)||[];\"undefined\"==typeof b.length&&(b=[b]);b=a.a.Ka(b,function(b){return g.includeDestroyed||b===n||null===b||!a.a.c(b._destroy)});\n"
 + "a.l.w(a.a.Bb,null,[k,b,u,g,p])},null,{i:k})};var k=a.a.e.I();a.d.template={init:function(b,c){var d=a.a.c(c());if(\"string\"==typeof d||d.name)a.f.xa(b);else{if(\"nodes\"in d){if(d=d.nodes||[],a.H(d))throw Error('The \"nodes\" option must be a plain, non-observable array.');}else d=a.f.childNodes(b);d=a.a.jc(d);(new a.v.qa(b)).nodes(d)}return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c(),s;c=a.a.c(g);d=!0;e=null;\"string\"==typeof c?c={}:(g=c.name,\"if\"in c&&(d=a.a.c(c[\"if\"])),d&&\"ifnot\"in\n"
 + "c&&(d=!a.a.c(c.ifnot)),s=a.a.c(c.data));\"foreach\"in c?e=a.kd(g||b,d&&c.foreach||[],c,b,f):d?(f=\"data\"in c?f.createChildContext(s,c.as):f,e=a.Ab(g||b,f,c,b)):a.f.xa(b);f=e;(s=a.a.e.get(b,k))&&\"function\"==typeof s.k&&s.k();a.a.e.set(b,k,f&&f.ba()?f:n)}};a.h.ta.template=function(b){b=a.h.yb(b);return 1==b.length&&b[0].unknown||a.h.ad(b,\"name\")?null:\"This template engine does not support anonymous templates nested within its templates\"};a.f.Z.template=!0})();a.b(\"setTemplateEngine\",a.Db);a.b(\"renderTemplate\",\n"
 + "a.Ab);a.a.dc=function(a,c,d){if(a.length&&c.length){var e,f,g,k,l;for(e=f=0;(!d||e<d)&&(k=a[f]);++f){for(g=0;l=c[g];++g)if(k.value===l.value){k.moved=l.index;l.moved=k.index;c.splice(g,1);e=g=0;break}e+=g}}};a.a.ib=function(){function b(b,d,e,f,g){var k=Math.min,l=Math.max,m=[],h,n=b.length,q,p=d.length,s=p-n||1,u=n+p+1,t,v,x;for(h=0;h<=n;h++)for(v=t,m.push(t=[]),x=k(p,h+s),q=l(0,h-1);q<=x;q++)t[q]=q?h?b[h-1]===d[q-1]?v[q-1]:k(v[q]||u,t[q-1]||u)+1:q+1:h+1;k=[];l=[];s=[];h=n;for(q=p;h||q;)p=m[h][q]-\n"
 + "1,q&&p===m[h][q-1]?l.push(k[k.length]={status:e,value:d[--q],index:q}):h&&p===m[h-1][q]?s.push(k[k.length]={status:f,value:b[--h],index:h}):(--q,--h,g.sparse||k.push({status:\"retained\",value:d[q]}));a.a.dc(s,l,!g.dontLimitMoves&&10*n);return k.reverse()}return function(a,d,e){e=\"boolean\"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,\"added\",\"deleted\",e):b(d,a,\"deleted\",\"added\",e)}}();a.b(\"utils.compareArrays\",a.a.ib);(function(){function b(b,c,d,k,l){var m=[],\n"
 + "h=a.B(function(){var h=c(d,l,a.a.za(m,b))||[];0<m.length&&(a.a.qc(m,h),k&&a.l.w(k,null,[d,h,l]));m.length=0;a.a.ra(m,h)},null,{i:b,wa:function(){return!a.a.Qb(m)}});return{ca:m,B:h.ba()?h:n}}var c=a.a.e.I(),d=a.a.e.I();a.a.Bb=function(e,f,g,k,l){function m(b,c){w=q[c];v!==c&&(D[b]=w);w.qb(v++);a.a.za(w.ca,e);u.push(w);z.push(w)}function h(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.q(c[d].ca,function(a){b(a,d,c[d].ja)})}f=f||[];k=k||{};var r=a.a.e.get(e,c)===n,q=a.a.e.get(e,c)||[],p=a.a.fb(q,\n"
 + "function(a){return a.ja}),s=a.a.ib(p,f,k.dontLimitMoves),u=[],t=0,v=0,x=[],z=[];f=[];for(var D=[],p=[],w,C=0,B,E;B=s[C];C++)switch(E=B.moved,B.status){case \"deleted\":E===n&&(w=q[t],w.B&&(w.B.k(),w.B=n),a.a.za(w.ca,e).length&&(k.beforeRemove&&(u.push(w),z.push(w),w.ja===d?w=null:f[C]=w),w&&x.push.apply(x,w.ca)));t++;break;case \"retained\":m(C,t++);break;case \"added\":E!==n?m(C,E):(w={ja:B.value,qb:a.N(v++)},u.push(w),z.push(w),r||(p[C]=w))}a.a.e.set(e,c,u);h(k.beforeMove,D);a.a.q(x,k.beforeRemove?a.$:\n"
 + "a.removeNode);for(var C=0,r=a.f.firstChild(e),F;w=z[C];C++){w.ca||a.a.extend(w,b(e,g,w.ja,l,w.qb));for(t=0;s=w.ca[t];r=s.nextSibling,F=s,t++)s!==r&&a.f.gc(e,s,F);!w.Wc&&l&&(l(w.ja,w.ca,w.qb),w.Wc=!0)}h(k.beforeRemove,f);for(C=0;C<f.length;++C)f[C]&&(f[C].ja=d);h(k.afterMove,D);h(k.afterAdd,p)}})();a.b(\"utils.setDomNodeChildrenFromArrayMapping\",a.a.Bb);a.W=function(){this.allowTemplateRewriting=!1};a.W.prototype=new a.O;a.W.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.C?0:b.nodes)?\n"
 + "b.nodes():null)return a.a.V(c.cloneNode(!0).childNodes);b=b.text();return a.a.ma(b,e)};a.W.sb=new a.W;a.Db(a.W.sb);a.b(\"nativeTemplateEngine\",a.W);(function(){a.vb=function(){var a=this.$c=function(){if(!v||!v.tmpl)return 0;try{if(0<=v.tmpl.tag.tmpl.open.toString().indexOf(\"__\"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,f,g){g=g||u;f=f||{};if(2>a)throw Error(\"Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.\");var k=b.data(\"precompiled\");\n"
 + "k||(k=b.text()||\"\",k=v.template(null,\"{{ko_with $item.koBindingContext}}\"+k+\"{{/ko_with}}\"),b.data(\"precompiled\",k));b=[e.$data];e=v.extend({koBindingContext:e},f.templateOptions);e=v.tmpl(k,b,e);e.appendTo(g.createElement(\"div\"));v.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return\"{{ko_code ((function() { return \"+a+\" })()) }}\"};this.addTemplate=function(a,b){u.write(\"<script type='text/html' id='\"+a+\"'>\"+b+\"\\x3c/script>\")};0<a&&(v.tmpl.tag.ko_code={open:\"__.push($1 || '');\"},\n"
 + "v.tmpl.tag.ko_with={open:\"with($1) {\",close:\"} \"})};a.vb.prototype=new a.O;var b=new a.vb;0<b.$c&&a.Db(b);a.b(\"jqueryTmplTemplateEngine\",a.vb)})()})})();})();\n"
 + "");

  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_ko4j_Knockout_props'] = null;
    this['fld_org_netbeans_html_ko4j_Knockout_funcs'] = null;
    this['fld_org_netbeans_html_ko4j_Knockout_js'] = null;
    this['fld_org_netbeans_html_ko4j_Knockout_strong'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout;

vm.java_lang_Integer = link('java/lang/Integer', function(f) { vm.java_lang_Integer =  f; });

function org_netbeans_html_ko4j_KOTransfer$JSObjToStr() {
  var m;
  var CLS = org_netbeans_html_ko4j_KOTransfer$JSObjToStr;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._str = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_str'] = v; return this['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_str']; };
  m = c._obj = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_obj'] = v; return this['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_obj']; };
    m = CLS.cons__VLjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;if ((lcA1) !== null) { gt = 14; break IF; }
var stA1 = "";{ gt = 18; break IF; }
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stA1 = invoker.toString__Ljava_lang_String_2(lcA1);
    }
    X_18: for (;;) { IF: if (gt <= 18) {
stA0['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_str'] = stA1;
lcA0['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_obj'] = lcA2;
return;

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_str'];

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KOTransfer$JSObjToStrfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_KOTransfer$JSObjToStr', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KOTransfer$JSObjToStrfillInstOf });
    org_netbeans_html_ko4j_KOTransfer$JSObjToStrfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/KOTransfer$JSObjToStr';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_str'] = null;
    this['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_obj'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_KOTransfer$JSObjToStr = org_netbeans_html_ko4j_KOTransfer$JSObjToStr;

vm.org_netbeans_html_boot_spi_Fn = link('org/netbeans/html/boot/spi/Fn', function(f) { vm.org_netbeans_html_boot_spi_Fn =  f; });

function org_netbeans_html_ko4j_KO4J() {
  var m;
  var CLS = org_netbeans_html_ko4j_KO4J;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._ko4j = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_KO4J_ko4j'] = v; return this['fld_org_netbeans_html_ko4j_KO4J_ko4j']; };
  m = c._trans = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_KO4J_trans'] = v; return this['fld_org_netbeans_html_ko4j_KO4J_trans']; };
  m = c._socks = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_KO4J_socks'] = v; return this['fld_org_netbeans_html_ko4j_KO4J_socks']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(lcA0, null);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2'] = m;

    m.anno = {"Ljava/lang/Deprecated;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.knockout__Lorg_netbeans_html_json_spi_Technology_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_ko4j_KO4J_ko4j']) !== null) { gt = 18; break IF; }
var stA0 = lcA0;var stA1 = new org_netbeans_html_ko4j_KOTech;
(refs_org_netbeans_html_ko4j_KOTech || (refs_org_netbeans_html_ko4j_KOTech = org_netbeans_html_ko4j_KOTech(false))).constructor.cons__V.call(stA1);
stA0['fld_org_netbeans_html_ko4j_KO4J_ko4j'] = stA1;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

return lcA0['fld_org_netbeans_html_ko4j_KO4J_ko4j'];

    }
}}
};
c['knockout__Lorg_netbeans_html_json_spi_Technology_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.transfer__Lorg_netbeans_html_json_spi_Transfer_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_ko4j_KO4J_trans']) !== null) { gt = 18; break IF; }
var stA0 = lcA0;var stA1 = new org_netbeans_html_ko4j_KOTransfer;
(refs_org_netbeans_html_ko4j_KOTransfer || (refs_org_netbeans_html_ko4j_KOTransfer = org_netbeans_html_ko4j_KOTransfer(false))).constructor.cons__V.call(stA1);
stA0['fld_org_netbeans_html_ko4j_KO4J_trans'] = stA1;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

return lcA0['fld_org_netbeans_html_ko4j_KO4J_trans'];

    }
}}
};
c['transfer__Lorg_netbeans_html_json_spi_Transfer_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.websockets__Lorg_netbeans_html_json_spi_WSTransfer_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stI0 = (refs_org_netbeans_html_ko4j_KOSockets || (refs_org_netbeans_html_ko4j_KOSockets = org_netbeans_html_ko4j_KOSockets(false))).areWebSocketsSupported__Z();
if ((stI0) != 0) { gt = 8; break IF; }
return null;
    }
    X_8: for (;;) { IF: if (gt <= 8) {

if ((lcA0['fld_org_netbeans_html_ko4j_KO4J_socks']) !== null) { gt = 26; break IF; }
var stA0 = lcA0;var stA1 = new org_netbeans_html_ko4j_KOSockets;
(refs_org_netbeans_html_ko4j_KOSockets || (refs_org_netbeans_html_ko4j_KOSockets = org_netbeans_html_ko4j_KOSockets(false))).constructor.cons__V.call(stA1);
stA0['fld_org_netbeans_html_ko4j_KO4J_socks'] = stA1;
    }
    X_26: for (;;) { IF: if (gt <= 26) {

return lcA0['fld_org_netbeans_html_ko4j_KO4J_socks'];

    }
}}}
};
c['websockets__Lorg_netbeans_html_json_spi_WSTransfer_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_json_spi_Technology || (refs_org_netbeans_html_json_spi_Technology = vm.org_netbeans_html_json_spi_Technology(false))).constructor.$class;var stA2 = lcA0.knockout__Lorg_netbeans_html_json_spi_Technology_2();
var stA0 = invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I(stA0,stA1, stA2, (100));
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_json_spi_Transfer || (refs_org_netbeans_html_json_spi_Transfer = vm.org_netbeans_html_json_spi_Transfer(false))).constructor.$class;var stA2 = lcA0.transfer__Lorg_netbeans_html_json_spi_Transfer_2();
var stA0 = invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I(stA0,stA1, stA2, (100));
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_json_spi_WSTransfer || (refs_org_netbeans_html_json_spi_WSTransfer = vm.org_netbeans_html_json_spi_WSTransfer(false))).constructor.$class;var stA2 = lcA0.websockets__Lorg_netbeans_html_json_spi_WSTransfer_2();
var stA0 = invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I(stA0,stA1, stA2, (100));
return;

};
c['fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KO4JfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_KO4J', { value : true });
      vm.org_netbeans_html_context_spi_Contexts$Provider(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KO4JfillInstOf });
    org_netbeans_html_ko4j_KO4JfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/KO4J';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.org_netbeans_html_context_spi_Contexts$Provider(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_org_netbeans_html_ko4j_KOTech;
    var refs_org_netbeans_html_ko4j_KOTransfer;
    var refs_org_netbeans_html_ko4j_KOSockets;
    var refs_org_netbeans_html_json_spi_Technology;
    var refs_org_netbeans_html_json_spi_Transfer;
    var refs_org_netbeans_html_json_spi_WSTransfer;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_ko4j_KO4J_ko4j'] = null;
    this['fld_org_netbeans_html_ko4j_KO4J_trans'] = null;
    this['fld_org_netbeans_html_ko4j_KO4J_socks'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_KO4J = registerClass(exports,'org_netbeans_html_ko4j_KO4J',org_netbeans_html_ko4j_KO4J);

vm.org_netbeans_html_context_spi_Contexts$Provider = link('org/netbeans/html/context/spi/Contexts$Provider', function(f) { vm.org_netbeans_html_context_spi_Contexts$Provider =  f; });
vm.org_netbeans_html_json_spi_WSTransfer = link('org/netbeans/html/json/spi/WSTransfer', function(f) { vm.org_netbeans_html_json_spi_WSTransfer =  f; });
vm.org_netbeans_html_json_spi_Technology = link('org/netbeans/html/json/spi/Technology', function(f) { vm.org_netbeans_html_json_spi_Technology =  f; });

function org_netbeans_html_ko4j_KOSockets() {
  var m;
  var CLS = org_netbeans_html_ko4j_KOSockets;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$areWebSocketsSupported_1'] = null;
  m = c._$$fn$$areWebSocketsSupported_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$areWebSocketsSupported_1'] = v; return CLS['fld_$$fn$$areWebSocketsSupported_1']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.open__Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new org_netbeans_html_ko4j_LoadWS;
(refs_org_netbeans_html_ko4j_LoadWS || (refs_org_netbeans_html_ko4j_LoadWS = org_netbeans_html_ko4j_LoadWS(false))).constructor.cons__VLorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_String_2.call(stA0, lcA2, lcA1);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.send__VLorg_netbeans_html_ko4j_LoadWS_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA1.send__VLorg_netbeans_html_json_spi_JSONCall_2(lcA2);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.close__VLorg_netbeans_html_ko4j_LoadWS_2 = function(lcA1) {
  var  lcA0 = this;
lcA1.close__V();
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.areWebSocketsSupported__Z = function() {
  var r = (function() {
if (window['WebSocket']) return true; else return false;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 24;
    m.cls = CLS;
    m = c.close__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_LoadWS']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.LoadWS');
lcA0.close__VLorg_netbeans_html_ko4j_LoadWS_2(lcA1);
return;

};
c['close__VLjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_LoadWS']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.LoadWS');
lcA0.send__VLorg_netbeans_html_ko4j_LoadWS_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1, lcA2);
return;

};
c['send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.open__Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1, lcA2);
return stA0;

};
c['open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KOSocketsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_KOSockets', { value : true });
      vm.org_netbeans_html_json_spi_WSTransfer(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KOSocketsfillInstOf });
    org_netbeans_html_ko4j_KOSocketsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/KOSockets';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.org_netbeans_html_json_spi_WSTransfer(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Lorg/netbeans/html/context/spi/Contexts$Id;" : {
"value" : ["websocket"]
}

    };
    var refs_java_lang_Object;
    var refs_org_netbeans_html_ko4j_LoadWS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_KOSockets = org_netbeans_html_ko4j_KOSockets;


function org_netbeans_html_ko4j_LoadWS() {
  var m;
  var CLS = org_netbeans_html_ko4j_LoadWS;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._ws = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_LoadWS_ws'] = v; return this['fld_org_netbeans_html_ko4j_LoadWS_ws']; };
  m = c._call = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_LoadWS_call'] = v; return this['fld_org_netbeans_html_ko4j_LoadWS_call']; };
  CLS['fld_$$fn$$toJSON_1'] = null;
  m = c._$$fn$$toJSON_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$toJSON_1'] = v; return CLS['fld_$$fn$$toJSON_1']; };
  CLS['fld_$$fn$$initWebSocket_2'] = null;
  m = c._$$fn$$initWebSocket_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$initWebSocket_2'] = v; return CLS['fld_$$fn$$initWebSocket_2']; };
  CLS['fld_$$fn$$send_3'] = null;
  m = c._$$fn$$send_3 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$send_3'] = v; return CLS['fld_$$fn$$send_3']; };
  CLS['fld_$$fn$$close_4'] = null;
  m = c._$$fn$$close_4 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$close_4'] = v; return CLS['fld_$$fn$$close_4']; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
lcA0['fld_org_netbeans_html_ko4j_LoadWS_call'] = lcA1;
var stA0 = lcA0;var stA1 = c.initWebSocket__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2(lcA0, lcA2);
stA0['fld_org_netbeans_html_ko4j_LoadWS_ws'] = stA1;
if ((lcA0['fld_org_netbeans_html_ko4j_LoadWS_ws']) !== null) { gt = 55; break IF; }
var stA0 = lcA1;var stA1 = new vm.java_lang_IllegalArgumentException;
var stA2 = stA1;var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"Wrong URL: ");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA2);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
(refs_java_lang_IllegalArgumentException || (refs_java_lang_IllegalArgumentException = vm.java_lang_IllegalArgumentException(false))).constructor['cons__VLjava_lang_String_2'].call(stA2, stA3);
invoker.notifyError__VLjava_lang_Throwable_2(stA0,stA1);
    }
    X_55: for (;;) { IF: if (gt <= 55) {
return;

    }
}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.send__VLorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1) {
  var  lcA0 = this;
c.push__VLorg_netbeans_html_json_spi_JSONCall_2.call(lcA0, lcA1);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.push__VLorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = lcA0['fld_org_netbeans_html_ko4j_LoadWS_ws'];var stA2 = invoker.getMessage__Ljava_lang_String_2(lcA1);
c.send__VLjava_lang_Object_2Ljava_lang_String_2.call(stA0, stA1, stA2);
return;

};
    m.access = 34;
    m.cls = CLS;
    m = c.onOpen__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isDoOutput__Z(lcA0['fld_org_netbeans_html_ko4j_LoadWS_call']);
if ((stI0) != 0) { gt = 18; break IF; }
invoker.notifySuccess__VLjava_lang_Object_2(lcA0['fld_org_netbeans_html_ko4j_LoadWS_call'],null);
    }
    X_18: for (;;) { IF: if (gt <= 18) {
return;

    }
}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.toJSON__Ljava_lang_Object_2Ljava_lang_String_2 = function() {
  var r = (function(data) {

  data = vm.java_lang_Class(false).toJS(data);try {
    return eval('(' + data + ')');
  } catch (error) {;
    return data;
  }

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = c.toJSON__Ljava_lang_Object_2Ljava_lang_String_2(lcA2);
var lcA3 = stA0;
invoker.notifySuccess__VLjava_lang_Object_2(lcA0['fld_org_netbeans_html_ko4j_LoadWS_call'],lcA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.onError__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0['fld_org_netbeans_html_ko4j_LoadWS_call'];var stA1 = new vm.java_lang_Exception;
var stA2 = stA1;var stA3 = invoker.toString__Ljava_lang_String_2(lcA1);
(refs_java_lang_Exception || (refs_java_lang_Exception = vm.java_lang_Exception(false))).constructor['cons__VLjava_lang_String_2'].call(stA2, stA3);
invoker.notifyError__VLjava_lang_Throwable_2(stA0,stA1);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.onClose__VZILjava_lang_String_2 = function(lcI1, lcI2, lcA3) {
  var  lcA0 = this;
invoker.notifyError__VLjava_lang_Throwable_2(lcA0['fld_org_netbeans_html_ko4j_LoadWS_call'],null);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.initWebSocket__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2 = function() {
  var r = (function(back,url) {

  back = vm.java_lang_Class(false).toJS(back);
  url = vm.java_lang_Class(false).toJS(url);if (window.WebSocket) {
  try {
    var ws = new window.WebSocket(url);
    ws.onopen = function(ev) {
      vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1LoadWS$onOpen$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2(back,ev));
    };
    ws.onmessage = function(ev) {
      vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1LoadWS$onMessage$Ljava_1lang_1Object_12Ljava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2Ljava_lang_String_2(back,ev, ev.data));
    };
    ws.onerror = function(ev) {
      vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1LoadWS$onError$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2(back,ev));
    };
    ws.onclose = function(ev) {
      vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1LoadWS$onClose$ZILjava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2ZILjava_lang_String_2(back,ev.wasClean, ev.code, ev.reason));
    };
    return ws;
  } catch (ex) {
    return null;
  }
} else {
  return null;
}

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.send__VLjava_lang_Object_2Ljava_lang_String_2 = function() {
  var r = (function(ws,msg) {

  ws = vm.java_lang_Class(false).toJS(ws);
  msg = vm.java_lang_Class(false).toJS(msg);ws.send(msg);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 2;
    m.cls = CLS;
    m = c.close__VLjava_lang_Object_2 = function() {
  var r = (function(ws) {

  ws = vm.java_lang_Class(false).toJS(ws);ws.close();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.close__V = function() {
  var  lcA0 = this;
c.close__VLjava_lang_Object_2(lcA0['fld_org_netbeans_html_ko4j_LoadWS_ws']);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_LoadWSfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_LoadWS', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_LoadWSfillInstOf });
    org_netbeans_html_ko4j_LoadWSfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/LoadWS';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_IllegalArgumentException;
    var refs_java_lang_Exception;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_ko4j_LoadWS_ws'] = null;
    this['fld_org_netbeans_html_ko4j_LoadWS_call'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_LoadWS = org_netbeans_html_ko4j_LoadWS;

vm.java_lang_IllegalArgumentException = link('java/lang/IllegalArgumentException', function(f) { vm.java_lang_IllegalArgumentException =  f; });

function org_netbeans_html_ko4j_KOTech() {
  var m;
  var CLS = org_netbeans_html_ko4j_KOTech;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._jsObjects = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_KOTech_jsObjects'] = v; return this['fld_org_netbeans_html_ko4j_KOTech_jsObjects']; };
  m = c._jsIndex = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_KOTech_jsIndex'] = v; return this['fld_org_netbeans_html_ko4j_KOTech_jsIndex']; };
  CLS['fld_applied'] = null;
  m = c._applied = function (v) {  if (arguments.length == 1) CLS['fld_applied'] = v; return CLS['fld_applied']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.wrapModel__Lorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = lcA0.createKO__Lorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2_3Lorg_netbeans_html_ko4j_Knockout_2(lcA1, lcA2, lcA3, lcA4, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.createKO__Lorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2_3Lorg_netbeans_html_ko4j_Knockout_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (lcA3).length);
var lcA6 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Number;', vm.java_lang_Number, (lcA3).length);
var lcA7 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (lcA3).length);
var lcA8 = stA0;
var lcI9 = 0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

if ((lcI9) >= ((lcA6).length)) { gt = 124; break IF; }
var stA0 = lcA6;var stI1 = lcI9;var stA2 = invoker.getPropertyName__Ljava_lang_String_2((lcA3[lcI9] || Array.at(lcA3, lcI9)));
Array.at(stA0, stI1, stA2);
var stI0 = invoker.isReadOnly__Z((lcA3[lcI9] || Array.at(lcA3, lcI9)));
if ((stI0) == 0) { gt = 58; break IF; }
var stI0 = 1;{ gt = 59; break IF; }
    }
    X_58: for (;;) { IF: if (gt <= 58) {

var stI0 = 0;    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI1 = invoker.isConstant__Z((lcA3[lcI9] || Array.at(lcA3, lcI9)));
if ((stI1) == 0) { gt = 73; break IF; }
var stI1 = 2;{ gt = 74; break IF; }
    }
    X_73: for (;;) { IF: if (gt <= 73) {

var stI1 = 0;    }
    X_74: for (;;) { IF: if (gt <= 74) {

var lcI10 = (((stI0) + (stI1)) | 0);
var stA0 = lcA7;var stI1 = lcI9;var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI10);
Array.at(stA0, stI1, stA2);
var stA0 = invoker.getValue__Ljava_lang_Object_2((lcA3[lcI9] || Array.at(lcA3, lcI9)));
var lcA11 = stA0;
var stI0 = lcA11 != null && lcA11['$instOf_java_lang_Enum'] ? 1 : 0;
if ((stI0) == 0) { gt = 111; break IF; }
var stA0 = invoker.toString__Ljava_lang_String_2(lcA11);
var lcA11 = stA0;
    }
    X_111: for (;;) { IF: if (gt <= 111) {

Array.at(lcA8, lcI9, lcA11);
lcI9++;
{ gt = 0; continue X_24; }
    }
    X_124: for (;;) { IF: if (gt <= 124) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (lcA4).length);
var lcA9 = stA0;
var lcI10 = 0;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

if ((lcI10) >= ((lcA9).length)) { gt = 162; break IF; }
var stA0 = lcA9;var stI1 = lcI10;var stA2 = invoker.getFunctionName__Ljava_lang_String_2((lcA4[lcI10] || Array.at(lcA4, lcI10)));
Array.at(stA0, stI1, stA2);
lcI10++;
{ gt = 0; continue X_135; }
    }
    X_162: for (;;) { IF: if (gt <= 162) {

var stA0 = c.getJSObject__Ljava_lang_Object_2.call(lcA0);
var lcA10 = stA0;
var stA0 = new org_netbeans_html_ko4j_Knockout;
(refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout(false))).constructor.cons__VLjava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2.call(stA0, lcA1, lcA10, lcA3, lcA4);
var lcA11 = stA0;
if ((lcA5) === null) { gt = 194; break IF; }
Array.at(lcA5, 0, lcA11);
    }
    X_194: for (;;) { IF: if (gt <= 194) {

(refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout(false))).wrapModel__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Number_2Ljava_lang_Object_2_3Ljava_lang_String_2(lcA11, lcA10, lcA2, lcA6, lcA7, lcA8, lcA9);
return lcA11;

    }
}}}}}}}}}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.getJSObject__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI1 = (64);
if ((lcA0['fld_org_netbeans_html_ko4j_KOTech_jsObjects']) === null) { gt = 56; break IF; }
var stI0 = lcA0['fld_org_netbeans_html_ko4j_KOTech_jsIndex'];var stI1 = (lcA0['fld_org_netbeans_html_ko4j_KOTech_jsObjects']).length;var stI2 = stI1;
var lcI1 = stI2;
if ((stI0) >= (stI1)) { gt = 56; break IF; }
var lcA2 = (lcA0['fld_org_netbeans_html_ko4j_KOTech_jsObjects'][lcA0['fld_org_netbeans_html_ko4j_KOTech_jsIndex']] || Array.at(lcA0['fld_org_netbeans_html_ko4j_KOTech_jsObjects'], lcA0['fld_org_netbeans_html_ko4j_KOTech_jsIndex']));
Array.at(lcA0['fld_org_netbeans_html_ko4j_KOTech_jsObjects'], lcA0['fld_org_netbeans_html_ko4j_KOTech_jsIndex'], null);
var stA0 = lcA0;var stA1 = stA0;
stA0['fld_org_netbeans_html_ko4j_KOTech_jsIndex'] = (((stA1['fld_org_netbeans_html_ko4j_KOTech_jsIndex']) + (1)) | 0);
return lcA2;
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stA0 = lcA0;var stA1 = (refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout(false))).allocJS___3Ljava_lang_Object_2I(__mul32(lcI1,2));
stA0['fld_org_netbeans_html_ko4j_KOTech_jsObjects'] = stA1;
lcA0['fld_org_netbeans_html_ko4j_KOTech_jsIndex'] = 1;
var lcA2 = (lcA0['fld_org_netbeans_html_ko4j_KOTech_jsObjects'][0] || Array.at(lcA0['fld_org_netbeans_html_ko4j_KOTech_jsObjects'], 0));
Array.at(lcA0['fld_org_netbeans_html_ko4j_KOTech_jsObjects'], 0, null);
return lcA2;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.wrapModel__Lorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.valueHasMutated__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0.valueHasMutated__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1, lcA2, null, null);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.valueHasMutated__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
(refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout(false))).cleanUp__V();
if ((lcA1) === null) { gt = 33; break IF; }
var stI0 = lcA4 != null && lcA4['$instOf_java_lang_Enum'] ? 1 : 0;
if ((stI0) == 0) { gt = 22; break IF; }
var stA0 = invoker.toString__Ljava_lang_String_2(lcA4);
var lcA4 = stA0;
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var stA0 = lcA1.js__Ljava_lang_Object_2();
(refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout(false))).valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0, lcA2, lcA3, lcA4);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return;

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.applyBindings__VLorg_netbeans_html_ko4j_Knockout_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.applyBindings__VLjava_lang_String_2Lorg_netbeans_html_ko4j_Knockout_2(null, lcA1);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_String_2Lorg_netbeans_html_ko4j_Knockout_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1;var stA1 = lcA2.js__Ljava_lang_Object_2();
var stA0 = (refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout(false))).applyBindings__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0, stA1);
var lcA3 = stA0;
var stI0 = lcA3 != null && lcA3['$instOf_org_netbeans_html_ko4j_Knockout'] ? 1 : 0;
if ((stI0) == 0) { gt = 36; break IF; }
if (lcA3 !== null && !lcA3['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA3, 'org.netbeans.html.ko4j.Knockout');
lcA3.hold__V();
if (lcA3 !== null && !lcA3['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA3, 'org.netbeans.html.ko4j.Knockout');
var stI0 = invoker.add__ZLjava_lang_Object_2(c._applied(),lcA3);
    }
    X_36: for (;;) { IF: if (gt <= 36) {
return;

    }
}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
return lcA1;

};
c['wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.runSafe__VLjava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;
invoker.run__V(lcA1);
return;

};
c['runSafe__VLjava_lang_Runnable_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout(false))).toModel__Ljava_lang_Object_2Ljava_lang_Object_2(lcA2);
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
return stA0;

};
c['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toJavaScript__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA1.js__Ljava_lang_Object_2();
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = lcA0.wrapModel__Lorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2(lcA1, lcA2, lcA3, lcA4);
return stA0;

};
c['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.Knockout');
lcA0.applyBindings__VLorg_netbeans_html_ko4j_Knockout_2(lcA1);
return;

};
c['applyBindings__VLjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
if (lcA3 !== null && !lcA3['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA3, 'org.netbeans.html.ko4j.Knockout');
lcA0.expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2(lcA1, lcA2, lcA3);
return;

};
c['expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.Knockout');
lcA0.valueHasMutated__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_String_2(lcA1, lcA2);
return;

};
c['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
if (lcA3 !== null && !lcA3['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA3, 'org.netbeans.html.ko4j.Knockout');
lcA0.bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2(lcA1, lcA2, lcA3);
return;

};
c['bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0.wrapModel__Lorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2(lcA1);
return stA0;

};
c['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.Knockout');
lcA0.valueHasMutated__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1, lcA2, lcA3, lcA4);
return;

};
c['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA2 !== null && !lcA2['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA2, 'org.netbeans.html.ko4j.Knockout');
lcA0.applyBindings__VLjava_lang_String_2Lorg_netbeans_html_ko4j_Knockout_2(lcA1, lcA2);
return;

};
c['applyBindings__VLjava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.Knockout');
var stA0 = lcA0.toJavaScript__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2(lcA1);
return stA0;

};
c['toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/ko4j/Knockout;', vm.org_netbeans_html_ko4j_Knockout, 0);
var stA0 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['asList__Ljava_util_List_2_3Ljava_lang_Object_2'](stA0);
c._applied(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;    __mul32 = function(x, y) {
        return (((x * (y >> 16)) << 16) + x * (y & 0xFFFF)) | 0;
    };

    c.constructor = CLS;
    function org_netbeans_html_ko4j_KOTechfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_KOTech', { value : true });
      vm.org_netbeans_html_json_spi_Technology$BatchCopy(false)['fillInstOf'](x);
      vm.org_netbeans_html_json_spi_Technology$ValueMutated(false)['fillInstOf'](x);
      vm.org_netbeans_html_json_spi_Technology$ApplyId(false)['fillInstOf'](x);
      vm.org_netbeans_html_json_spi_Technology$ToJavaScript(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KOTechfillInstOf });
    org_netbeans_html_ko4j_KOTechfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/KOTech';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.org_netbeans_html_json_spi_Technology$BatchCopy(false).constructor.$class,
        vm.org_netbeans_html_json_spi_Technology$ValueMutated(false).constructor.$class,
        vm.org_netbeans_html_json_spi_Technology$ApplyId(false).constructor.$class,
        vm.org_netbeans_html_json_spi_Technology$ToJavaScript(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Lorg/netbeans/html/context/spi/Contexts$Id;" : {
"value" : ["ko4j"]
}

    };
    c.class__V();
    var refs_java_lang_Object;
    var refs_java_lang_Integer;
    var refs_org_netbeans_html_ko4j_Knockout;
    var refs_java_lang_UnsupportedOperationException;
    var refs_net_java_html_json_Models;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_ko4j_KOTech_jsObjects'] = null;
    this['fld_org_netbeans_html_ko4j_KOTech_jsIndex'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_KOTech = org_netbeans_html_ko4j_KOTech;

vm.org_netbeans_html_json_spi_Technology$ToJavaScript = link('org/netbeans/html/json/spi/Technology$ToJavaScript', function(f) { vm.org_netbeans_html_json_spi_Technology$ToJavaScript =  f; });
vm.org_netbeans_html_json_spi_Technology$ApplyId = link('org/netbeans/html/json/spi/Technology$ApplyId', function(f) { vm.org_netbeans_html_json_spi_Technology$ApplyId =  f; });
vm.org_netbeans_html_json_spi_Technology$ValueMutated = link('org/netbeans/html/json/spi/Technology$ValueMutated', function(f) { vm.org_netbeans_html_json_spi_Technology$ValueMutated =  f; });
vm.org_netbeans_html_json_spi_Technology$BatchCopy = link('org/netbeans/html/json/spi/Technology$BatchCopy', function(f) { vm.org_netbeans_html_json_spi_Technology$BatchCopy =  f; });
vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });
vm.java_lang_Deprecated = link('java/lang/Deprecated', function(f) { vm.java_lang_Deprecated =  f; });
  invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['toJava__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.notifySuccess__VLjava_lang_Object_2 = function(target, p1) {
    return target['notifySuccess__VLjava_lang_Object_2'](p1);
  };
  invoker.close__V = function(target) {
    return target['close__V']();
  };
  invoker.toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.isJSONP__Z = function(target) {
    return target['isJSONP__Z']();
  };
  invoker.composeURL__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['composeURL__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.isDoOutput__Z = function(target) {
    return target['isDoOutput__Z']();
  };
  invoker.writeData__VLjava_io_OutputStream_2 = function(target, p1) {
    return target['writeData__VLjava_io_OutputStream_2'](p1);
  };
  invoker.toByteArray___3B = function(target) {
    return target['toByteArray___3B']();
  };
  invoker.notifyError__VLjava_lang_Throwable_2 = function(target, p1) {
    return target['notifyError__VLjava_lang_Throwable_2'](p1);
  };
  invoker.getHeaders__Ljava_lang_String_2 = function(target) {
    return target['getHeaders__Ljava_lang_String_2']();
  };
  invoker.length__I = function(target) {
    return target['length__I']();
  };
  invoker.indexOf__III = function(target, p1, p2) {
    return target['indexOf__III'](p1,p2);
  };
  invoker.substring__Ljava_lang_String_2II = function(target, p1, p2) {
    return target['substring__Ljava_lang_String_2II'](p1,p2);
  };
  invoker.trim__Ljava_lang_String_2 = function(target) {
    return target['trim__Ljava_lang_String_2']();
  };
  invoker.add__ZLjava_lang_Object_2 = function(target, p1) {
    return target['add__ZLjava_lang_Object_2'](p1);
  };
  invoker.getMethod__Ljava_lang_String_2 = function(target) {
    return target['getMethod__Ljava_lang_String_2']();
  };
  invoker.toArray___3Ljava_lang_Object_2 = function(target) {
    return target['toArray___3Ljava_lang_Object_2']();
  };
  invoker.read__I = function(target) {
    return target['read__I']();
  };
  invoker.append__Ljava_lang_StringBuilder_2C = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2C'](p1);
  };
  invoker.toString__Ljava_lang_String_2 = function(target) {
    return target['toString__Ljava_lang_String_2']();
  };
  invoker.hashCode__I = function(target) {
    return target['hashCode__I']();
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.weak__Lorg_netbeans_html_json_spi_PropertyBinding_2 = function(target) {
    return target['weak__Lorg_netbeans_html_json_spi_PropertyBinding_2']();
  };
  invoker.weak__Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(target) {
    return target['weak__Lorg_netbeans_html_json_spi_FunctionBinding_2']();
  };
  invoker.getValue__Ljava_lang_Object_2 = function(target) {
    return target['getValue__Ljava_lang_Object_2']();
  };
  invoker.setValue__VLjava_lang_Object_2 = function(target, p1) {
    return target['setValue__VLjava_lang_Object_2'](p1);
  };
  invoker.call__VLjava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['call__VLjava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I = function(target, p1, p2, p3) {
    return target['register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I'](p1,p2,p3);
  };
  invoker.getMessage__Ljava_lang_String_2 = function(target) {
    return target['getMessage__Ljava_lang_String_2']();
  };
  invoker.getPropertyName__Ljava_lang_String_2 = function(target) {
    return target['getPropertyName__Ljava_lang_String_2']();
  };
  invoker.isReadOnly__Z = function(target) {
    return target['isReadOnly__Z']();
  };
  invoker.isConstant__Z = function(target) {
    return target['isConstant__Z']();
  };
  invoker.getFunctionName__Ljava_lang_String_2 = function(target) {
    return target['getFunctionName__Ljava_lang_String_2']();
  };
  invoker.run__V = function(target) {
    return target['run__V']();
  };
  invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['cast__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTEwNTc3MjU5MDM4DQpCdWlsZC1KZGs6IDEuOC4wXzE0NA0KQnVpbHQtQnk6IGRldmVsDQpCdW5kbGUtRGVzY3JpcHRpb246IEJpbmRzIG5ldC5qYXZhLmh0bWwuanNvbiBBUElzIHRvZ2V0aGVyIHdpdGgga25vY2tvdXQNCiAuanMNCkJ1bmRsZS1Eb2NVUkw6IGh0dHA6Ly9uZXRiZWFucy5vcmcNCkJ1bmRsZS1MaWNlbnNlOiBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLnR4dA0KQnVuZGxlLU1hbmlmZXN0VmVyc2lvbjogMg0KQnVuZGxlLU5hbWU6IEtub2Nrb3V0LmpzIGZvciBKYXZhDQpCdW5kbGUtU3ltYm9saWNOYW1lOiBvcmcubmV0YmVhbnMuaHRtbC5rbzRqDQpCdW5kbGUtVmVuZG9yOiBOZXRCZWFucw0KQnVuZGxlLVZlcnNpb246IDEuNS4xDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gQnVuZGxlIFBsdWdpbg0KSW1wb3J0LVBhY2thZ2U6IG5ldC5qYXZhLmh0bWwuanNvbixvcmcubmV0YmVhbnMuaHRtbC5ib290LnNwaSxvcmcubmV0YmVhDQogbnMuaHRtbC5jb250ZXh0LnNwaSxvcmcubmV0YmVhbnMuaHRtbC5qc29uLnNwaQ0KUHJvdmlkZS1DYXBhYmlsaXR5OiBvc2dpLnNlcnZpY2Vsb2FkZXI7b3NnaS5zZXJ2aWNlbG9hZGVyPW9yZy5uZXRiZWFucy5oDQogdG1sLmNvbnRleHQuc3BpLkNvbnRleHRzJFByb3ZpZGVyDQpSZXF1aXJlLUNhcGFiaWxpdHk6IG9zZ2kuZXh0ZW5kZXI7cmVzb2x1dGlvbjo9b3B0aW9uYWw7ZmlsdGVyOj0iKG9zZ2kuZXgNCiB0ZW5kZXI9b3NnaS5zZXJ2aWNlbG9hZGVyLnJlZ2lzdHJhcikiDQpUb29sOiBCbmQtMi4xLjAuMjAxMzA0MjYtMTIyMjEzDQo=');
  exports['registerResource']('META-INF/DEPENDENCIES', 'Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCi8vIFRyYW5zaXRpdmUgZGVwZW5kZW5jaWVzIG9mIHRoaXMgcHJvamVjdCBkZXRlcm1pbmVkIGZyb20gdGhlCi8vIG1hdmVuIHBvbSBvcmdhbml6ZWQgYnkgb3JnYW5pemF0aW9uLgovLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCktub2Nrb3V0LmpzIGZvciBKYXZhCgoKCgoKRnJvbTogJ0tub2Nrb3V0LmpzIHRlYW0nIChodHRwOi8va25vY2tvdXRqcy5jb20vKQogIC0gS25vY2tvdXQgSmF2YVNjcmlwdCBsaWJyYXJ5IHYzLjQuMAogICAgTGljZW5zZTogTUlUIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocCkK');
  exports['registerResource']('META-INF/DISCLAIMER', 'S25vY2tvdXQuanMgZm9yIEphdmEgaXMgYW4gZWZmb3J0IHVuZGVyZ29pbmcgaW5jdWJhdGlvbiBhdCB0aGUgQXBhY2hlIFNvZnR3YXJlIApGb3VuZGF0aW9uIChBU0YpLCBzcG9uc29yZWQgYnkgdGhlIEFwYWNoZSBJbmN1YmF0b3IgUE1DLiAKCkluY3ViYXRpb24gaXMgcmVxdWlyZWQgb2YgYWxsIG5ld2x5IGFjY2VwdGVkIHByb2plY3RzIHVudGlsIGEgZnVydGhlciByZXZpZXcgCmluZGljYXRlcyB0aGF0IHRoZSBpbmZyYXN0cnVjdHVyZSwgY29tbXVuaWNhdGlvbnMsIGFuZCBkZWNpc2lvbiBtYWtpbmcgcHJvY2VzcyAKaGF2ZSBzdGFiaWxpemVkIGluIGEgbWFubmVyIGNvbnNpc3RlbnQgd2l0aCBvdGhlciBzdWNjZXNzZnVsIEFTRiBwcm9qZWN0cy4gCgpXaGlsZSBpbmN1YmF0aW9uIHN0YXR1cyBpcyBub3QgbmVjZXNzYXJpbHkgYSByZWZsZWN0aW9uIG9mIHRoZSBjb21wbGV0ZW5lc3MgCm9yIHN0YWJpbGl0eSBvZiB0aGUgY29kZSwgaXQgZG9lcyBpbmRpY2F0ZSB0aGF0IHRoZSBwcm9qZWN0IGhhcyB5ZXQgdG8gYmUgCmZ1bGx5IGVuZG9yc2VkIGJ5IHRoZSBBU0YuCg==');
  exports['registerResource']('META-INF/LICENSE', 'CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwYWNoZSBMaWNlbnNlCiAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcnNpb24gMi4wLCBKYW51YXJ5IDIwMDQKICAgICAgICAgICAgICAgICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzLwoKICAgVEVSTVMgQU5EIENPTkRJVElPTlMgRk9SIFVTRSwgUkVQUk9EVUNUSU9OLCBBTkQgRElTVFJJQlVUSU9OCgogICAxLiBEZWZpbml0aW9ucy4KCiAgICAgICJMaWNlbnNlIiBzaGFsbCBtZWFuIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBmb3IgdXNlLCByZXByb2R1Y3Rpb24sCiAgICAgIGFuZCBkaXN0cmlidXRpb24gYXMgZGVmaW5lZCBieSBTZWN0aW9ucyAxIHRocm91Z2ggOSBvZiB0aGlzIGRvY3VtZW50LgoKICAgICAgIkxpY2Vuc29yIiBzaGFsbCBtZWFuIHRoZSBjb3B5cmlnaHQgb3duZXIgb3IgZW50aXR5IGF1dGhvcml6ZWQgYnkKICAgICAgdGhlIGNvcHlyaWdodCBvd25lciB0aGF0IGlzIGdyYW50aW5nIHRoZSBMaWNlbnNlLgoKICAgICAgIkxlZ2FsIEVudGl0eSIgc2hhbGwgbWVhbiB0aGUgdW5pb24gb2YgdGhlIGFjdGluZyBlbnRpdHkgYW5kIGFsbAogICAgICBvdGhlciBlbnRpdGllcyB0aGF0IGNvbnRyb2wsIGFyZSBjb250cm9sbGVkIGJ5LCBvciBhcmUgdW5kZXIgY29tbW9uCiAgICAgIGNvbnRyb2wgd2l0aCB0aGF0IGVudGl0eS4gRm9yIHRoZSBwdXJwb3NlcyBvZiB0aGlzIGRlZmluaXRpb24sCiAgICAgICJjb250cm9sIiBtZWFucyAoaSkgdGhlIHBvd2VyLCBkaXJlY3Qgb3IgaW5kaXJlY3QsIHRvIGNhdXNlIHRoZQogICAgICBkaXJlY3Rpb24gb3IgbWFuYWdlbWVudCBvZiBzdWNoIGVudGl0eSwgd2hldGhlciBieSBjb250cmFjdCBvcgogICAgICBvdGhlcndpc2UsIG9yIChpaSkgb3duZXJzaGlwIG9mIGZpZnR5IHBlcmNlbnQgKDUwJSkgb3IgbW9yZSBvZiB0aGUKICAgICAgb3V0c3RhbmRpbmcgc2hhcmVzLCBvciAoaWlpKSBiZW5lZmljaWFsIG93bmVyc2hpcCBvZiBzdWNoIGVudGl0eS4KCiAgICAgICJZb3UiIChvciAiWW91ciIpIHNoYWxsIG1lYW4gYW4gaW5kaXZpZHVhbCBvciBMZWdhbCBFbnRpdHkKICAgICAgZXhlcmNpc2luZyBwZXJtaXNzaW9ucyBncmFudGVkIGJ5IHRoaXMgTGljZW5zZS4KCiAgICAgICJTb3VyY2UiIGZvcm0gc2hhbGwgbWVhbiB0aGUgcHJlZmVycmVkIGZvcm0gZm9yIG1ha2luZyBtb2RpZmljYXRpb25zLAogICAgICBpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIHNvZnR3YXJlIHNvdXJjZSBjb2RlLCBkb2N1bWVudGF0aW9uCiAgICAgIHNvdXJjZSwgYW5kIGNvbmZpZ3VyYXRpb24gZmlsZXMuCgogICAgICAiT2JqZWN0IiBmb3JtIHNoYWxsIG1lYW4gYW55IGZvcm0gcmVzdWx0aW5nIGZyb20gbWVjaGFuaWNhbAogICAgICB0cmFuc2Zvcm1hdGlvbiBvciB0cmFuc2xhdGlvbiBvZiBhIFNvdXJjZSBmb3JtLCBpbmNsdWRpbmcgYnV0CiAgICAgIG5vdCBsaW1pdGVkIHRvIGNvbXBpbGVkIG9iamVjdCBjb2RlLCBnZW5lcmF0ZWQgZG9jdW1lbnRhdGlvbiwKICAgICAgYW5kIGNvbnZlcnNpb25zIHRvIG90aGVyIG1lZGlhIHR5cGVzLgoKICAgICAgIldvcmsiIHNoYWxsIG1lYW4gdGhlIHdvcmsgb2YgYXV0aG9yc2hpcCwgd2hldGhlciBpbiBTb3VyY2Ugb3IKICAgICAgT2JqZWN0IGZvcm0sIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBMaWNlbnNlLCBhcyBpbmRpY2F0ZWQgYnkgYQogICAgICBjb3B5cmlnaHQgbm90aWNlIHRoYXQgaXMgaW5jbHVkZWQgaW4gb3IgYXR0YWNoZWQgdG8gdGhlIHdvcmsKICAgICAgKGFuIGV4YW1wbGUgaXMgcHJvdmlkZWQgaW4gdGhlIEFwcGVuZGl4IGJlbG93KS4KCiAgICAgICJEZXJpdmF0aXZlIFdvcmtzIiBzaGFsbCBtZWFuIGFueSB3b3JrLCB3aGV0aGVyIGluIFNvdXJjZSBvciBPYmplY3QKICAgICAgZm9ybSwgdGhhdCBpcyBiYXNlZCBvbiAob3IgZGVyaXZlZCBmcm9tKSB0aGUgV29yayBhbmQgZm9yIHdoaWNoIHRoZQogICAgICBlZGl0b3JpYWwgcmV2aXNpb25zLCBhbm5vdGF0aW9ucywgZWxhYm9yYXRpb25zLCBvciBvdGhlciBtb2RpZmljYXRpb25zCiAgICAgIHJlcHJlc2VudCwgYXMgYSB3aG9sZSwgYW4gb3JpZ2luYWwgd29yayBvZiBhdXRob3JzaGlwLiBGb3IgdGhlIHB1cnBvc2VzCiAgICAgIG9mIHRoaXMgTGljZW5zZSwgRGVyaXZhdGl2ZSBXb3JrcyBzaGFsbCBub3QgaW5jbHVkZSB3b3JrcyB0aGF0IHJlbWFpbgogICAgICBzZXBhcmFibGUgZnJvbSwgb3IgbWVyZWx5IGxpbmsgKG9yIGJpbmQgYnkgbmFtZSkgdG8gdGhlIGludGVyZmFjZXMgb2YsCiAgICAgIHRoZSBXb3JrIGFuZCBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YuCgogICAgICAiQ29udHJpYnV0aW9uIiBzaGFsbCBtZWFuIGFueSB3b3JrIG9mIGF1dGhvcnNoaXAsIGluY2x1ZGluZwogICAgICB0aGUgb3JpZ2luYWwgdmVyc2lvbiBvZiB0aGUgV29yayBhbmQgYW55IG1vZGlmaWNhdGlvbnMgb3IgYWRkaXRpb25zCiAgICAgIHRvIHRoYXQgV29yayBvciBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YsIHRoYXQgaXMgaW50ZW50aW9uYWxseQogICAgICBzdWJtaXR0ZWQgdG8gTGljZW5zb3IgZm9yIGluY2x1c2lvbiBpbiB0aGUgV29yayBieSB0aGUgY29weXJpZ2h0IG93bmVyCiAgICAgIG9yIGJ5IGFuIGluZGl2aWR1YWwgb3IgTGVnYWwgRW50aXR5IGF1dGhvcml6ZWQgdG8gc3VibWl0IG9uIGJlaGFsZiBvZgogICAgICB0aGUgY29weXJpZ2h0IG93bmVyLiBGb3IgdGhlIHB1cnBvc2VzIG9mIHRoaXMgZGVmaW5pdGlvbiwgInN1Ym1pdHRlZCIKICAgICAgbWVhbnMgYW55IGZvcm0gb2YgZWxlY3Ryb25pYywgdmVyYmFsLCBvciB3cml0dGVuIGNvbW11bmljYXRpb24gc2VudAogICAgICB0byB0aGUgTGljZW5zb3Igb3IgaXRzIHJlcHJlc2VudGF0aXZlcywgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0bwogICAgICBjb21tdW5pY2F0aW9uIG9uIGVsZWN0cm9uaWMgbWFpbGluZyBsaXN0cywgc291cmNlIGNvZGUgY29udHJvbCBzeXN0ZW1zLAogICAgICBhbmQgaXNzdWUgdHJhY2tpbmcgc3lzdGVtcyB0aGF0IGFyZSBtYW5hZ2VkIGJ5LCBvciBvbiBiZWhhbGYgb2YsIHRoZQogICAgICBMaWNlbnNvciBmb3IgdGhlIHB1cnBvc2Ugb2YgZGlzY3Vzc2luZyBhbmQgaW1wcm92aW5nIHRoZSBXb3JrLCBidXQKICAgICAgZXhjbHVkaW5nIGNvbW11bmljYXRpb24gdGhhdCBpcyBjb25zcGljdW91c2x5IG1hcmtlZCBvciBvdGhlcndpc2UKICAgICAgZGVzaWduYXRlZCBpbiB3cml0aW5nIGJ5IHRoZSBjb3B5cmlnaHQgb3duZXIgYXMgIk5vdCBhIENvbnRyaWJ1dGlvbi4iCgogICAgICAiQ29udHJpYnV0b3IiIHNoYWxsIG1lYW4gTGljZW5zb3IgYW5kIGFueSBpbmRpdmlkdWFsIG9yIExlZ2FsIEVudGl0eQogICAgICBvbiBiZWhhbGYgb2Ygd2hvbSBhIENvbnRyaWJ1dGlvbiBoYXMgYmVlbiByZWNlaXZlZCBieSBMaWNlbnNvciBhbmQKICAgICAgc3Vic2VxdWVudGx5IGluY29ycG9yYXRlZCB3aXRoaW4gdGhlIFdvcmsuCgogICAyLiBHcmFudCBvZiBDb3B5cmlnaHQgTGljZW5zZS4gU3ViamVjdCB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCBlYWNoIENvbnRyaWJ1dG9yIGhlcmVieSBncmFudHMgdG8gWW91IGEgcGVycGV0dWFsLAogICAgICB3b3JsZHdpZGUsIG5vbi1leGNsdXNpdmUsIG5vLWNoYXJnZSwgcm95YWx0eS1mcmVlLCBpcnJldm9jYWJsZQogICAgICBjb3B5cmlnaHQgbGljZW5zZSB0byByZXByb2R1Y2UsIHByZXBhcmUgRGVyaXZhdGl2ZSBXb3JrcyBvZiwKICAgICAgcHVibGljbHkgZGlzcGxheSwgcHVibGljbHkgcGVyZm9ybSwgc3VibGljZW5zZSwgYW5kIGRpc3RyaWJ1dGUgdGhlCiAgICAgIFdvcmsgYW5kIHN1Y2ggRGVyaXZhdGl2ZSBXb3JrcyBpbiBTb3VyY2Ugb3IgT2JqZWN0IGZvcm0uCgogICAzLiBHcmFudCBvZiBQYXRlbnQgTGljZW5zZS4gU3ViamVjdCB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCBlYWNoIENvbnRyaWJ1dG9yIGhlcmVieSBncmFudHMgdG8gWW91IGEgcGVycGV0dWFsLAogICAgICB3b3JsZHdpZGUsIG5vbi1leGNsdXNpdmUsIG5vLWNoYXJnZSwgcm95YWx0eS1mcmVlLCBpcnJldm9jYWJsZQogICAgICAoZXhjZXB0IGFzIHN0YXRlZCBpbiB0aGlzIHNlY3Rpb24pIHBhdGVudCBsaWNlbnNlIHRvIG1ha2UsIGhhdmUgbWFkZSwKICAgICAgdXNlLCBvZmZlciB0byBzZWxsLCBzZWxsLCBpbXBvcnQsIGFuZCBvdGhlcndpc2UgdHJhbnNmZXIgdGhlIFdvcmssCiAgICAgIHdoZXJlIHN1Y2ggbGljZW5zZSBhcHBsaWVzIG9ubHkgdG8gdGhvc2UgcGF0ZW50IGNsYWltcyBsaWNlbnNhYmxlCiAgICAgIGJ5IHN1Y2ggQ29udHJpYnV0b3IgdGhhdCBhcmUgbmVjZXNzYXJpbHkgaW5mcmluZ2VkIGJ5IHRoZWlyCiAgICAgIENvbnRyaWJ1dGlvbihzKSBhbG9uZSBvciBieSBjb21iaW5hdGlvbiBvZiB0aGVpciBDb250cmlidXRpb24ocykKICAgICAgd2l0aCB0aGUgV29yayB0byB3aGljaCBzdWNoIENvbnRyaWJ1dGlvbihzKSB3YXMgc3VibWl0dGVkLiBJZiBZb3UKICAgICAgaW5zdGl0dXRlIHBhdGVudCBsaXRpZ2F0aW9uIGFnYWluc3QgYW55IGVudGl0eSAoaW5jbHVkaW5nIGEKICAgICAgY3Jvc3MtY2xhaW0gb3IgY291bnRlcmNsYWltIGluIGEgbGF3c3VpdCkgYWxsZWdpbmcgdGhhdCB0aGUgV29yawogICAgICBvciBhIENvbnRyaWJ1dGlvbiBpbmNvcnBvcmF0ZWQgd2l0aGluIHRoZSBXb3JrIGNvbnN0aXR1dGVzIGRpcmVjdAogICAgICBvciBjb250cmlidXRvcnkgcGF0ZW50IGluZnJpbmdlbWVudCwgdGhlbiBhbnkgcGF0ZW50IGxpY2Vuc2VzCiAgICAgIGdyYW50ZWQgdG8gWW91IHVuZGVyIHRoaXMgTGljZW5zZSBmb3IgdGhhdCBXb3JrIHNoYWxsIHRlcm1pbmF0ZQogICAgICBhcyBvZiB0aGUgZGF0ZSBzdWNoIGxpdGlnYXRpb24gaXMgZmlsZWQuCgogICA0LiBSZWRpc3RyaWJ1dGlvbi4gWW91IG1heSByZXByb2R1Y2UgYW5kIGRpc3RyaWJ1dGUgY29waWVzIG9mIHRoZQogICAgICBXb3JrIG9yIERlcml2YXRpdmUgV29ya3MgdGhlcmVvZiBpbiBhbnkgbWVkaXVtLCB3aXRoIG9yIHdpdGhvdXQKICAgICAgbW9kaWZpY2F0aW9ucywgYW5kIGluIFNvdXJjZSBvciBPYmplY3QgZm9ybSwgcHJvdmlkZWQgdGhhdCBZb3UKICAgICAgbWVldCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6CgogICAgICAoYSkgWW91IG11c3QgZ2l2ZSBhbnkgb3RoZXIgcmVjaXBpZW50cyBvZiB0aGUgV29yayBvcgogICAgICAgICAgRGVyaXZhdGl2ZSBXb3JrcyBhIGNvcHkgb2YgdGhpcyBMaWNlbnNlOyBhbmQKCiAgICAgIChiKSBZb3UgbXVzdCBjYXVzZSBhbnkgbW9kaWZpZWQgZmlsZXMgdG8gY2FycnkgcHJvbWluZW50IG5vdGljZXMKICAgICAgICAgIHN0YXRpbmcgdGhhdCBZb3UgY2hhbmdlZCB0aGUgZmlsZXM7IGFuZAoKICAgICAgKGMpIFlvdSBtdXN0IHJldGFpbiwgaW4gdGhlIFNvdXJjZSBmb3JtIG9mIGFueSBEZXJpdmF0aXZlIFdvcmtzCiAgICAgICAgICB0aGF0IFlvdSBkaXN0cmlidXRlLCBhbGwgY29weXJpZ2h0LCBwYXRlbnQsIHRyYWRlbWFyaywgYW5kCiAgICAgICAgICBhdHRyaWJ1dGlvbiBub3RpY2VzIGZyb20gdGhlIFNvdXJjZSBmb3JtIG9mIHRoZSBXb3JrLAogICAgICAgICAgZXhjbHVkaW5nIHRob3NlIG5vdGljZXMgdGhhdCBkbyBub3QgcGVydGFpbiB0byBhbnkgcGFydCBvZgogICAgICAgICAgdGhlIERlcml2YXRpdmUgV29ya3M7IGFuZAoKICAgICAgKGQpIElmIHRoZSBXb3JrIGluY2x1ZGVzIGEgIk5PVElDRSIgdGV4dCBmaWxlIGFzIHBhcnQgb2YgaXRzCiAgICAgICAgICBkaXN0cmlidXRpb24sIHRoZW4gYW55IERlcml2YXRpdmUgV29ya3MgdGhhdCBZb3UgZGlzdHJpYnV0ZSBtdXN0CiAgICAgICAgICBpbmNsdWRlIGEgcmVhZGFibGUgY29weSBvZiB0aGUgYXR0cmlidXRpb24gbm90aWNlcyBjb250YWluZWQKICAgICAgICAgIHdpdGhpbiBzdWNoIE5PVElDRSBmaWxlLCBleGNsdWRpbmcgdGhvc2Ugbm90aWNlcyB0aGF0IGRvIG5vdAogICAgICAgICAgcGVydGFpbiB0byBhbnkgcGFydCBvZiB0aGUgRGVyaXZhdGl2ZSBXb3JrcywgaW4gYXQgbGVhc3Qgb25lCiAgICAgICAgICBvZiB0aGUgZm9sbG93aW5nIHBsYWNlczogd2l0aGluIGEgTk9USUNFIHRleHQgZmlsZSBkaXN0cmlidXRlZAogICAgICAgICAgYXMgcGFydCBvZiB0aGUgRGVyaXZhdGl2ZSBXb3Jrczsgd2l0aGluIHRoZSBTb3VyY2UgZm9ybSBvcgogICAgICAgICAgZG9jdW1lbnRhdGlvbiwgaWYgcHJvdmlkZWQgYWxvbmcgd2l0aCB0aGUgRGVyaXZhdGl2ZSBXb3Jrczsgb3IsCiAgICAgICAgICB3aXRoaW4gYSBkaXNwbGF5IGdlbmVyYXRlZCBieSB0aGUgRGVyaXZhdGl2ZSBXb3JrcywgaWYgYW5kCiAgICAgICAgICB3aGVyZXZlciBzdWNoIHRoaXJkLXBhcnR5IG5vdGljZXMgbm9ybWFsbHkgYXBwZWFyLiBUaGUgY29udGVudHMKICAgICAgICAgIG9mIHRoZSBOT1RJQ0UgZmlsZSBhcmUgZm9yIGluZm9ybWF0aW9uYWwgcHVycG9zZXMgb25seSBhbmQKICAgICAgICAgIGRvIG5vdCBtb2RpZnkgdGhlIExpY2Vuc2UuIFlvdSBtYXkgYWRkIFlvdXIgb3duIGF0dHJpYnV0aW9uCiAgICAgICAgICBub3RpY2VzIHdpdGhpbiBEZXJpdmF0aXZlIFdvcmtzIHRoYXQgWW91IGRpc3RyaWJ1dGUsIGFsb25nc2lkZQogICAgICAgICAgb3IgYXMgYW4gYWRkZW5kdW0gdG8gdGhlIE5PVElDRSB0ZXh0IGZyb20gdGhlIFdvcmssIHByb3ZpZGVkCiAgICAgICAgICB0aGF0IHN1Y2ggYWRkaXRpb25hbCBhdHRyaWJ1dGlvbiBub3RpY2VzIGNhbm5vdCBiZSBjb25zdHJ1ZWQKICAgICAgICAgIGFzIG1vZGlmeWluZyB0aGUgTGljZW5zZS4KCiAgICAgIFlvdSBtYXkgYWRkIFlvdXIgb3duIGNvcHlyaWdodCBzdGF0ZW1lbnQgdG8gWW91ciBtb2RpZmljYXRpb25zIGFuZAogICAgICBtYXkgcHJvdmlkZSBhZGRpdGlvbmFsIG9yIGRpZmZlcmVudCBsaWNlbnNlIHRlcm1zIGFuZCBjb25kaXRpb25zCiAgICAgIGZvciB1c2UsIHJlcHJvZHVjdGlvbiwgb3IgZGlzdHJpYnV0aW9uIG9mIFlvdXIgbW9kaWZpY2F0aW9ucywgb3IKICAgICAgZm9yIGFueSBzdWNoIERlcml2YXRpdmUgV29ya3MgYXMgYSB3aG9sZSwgcHJvdmlkZWQgWW91ciB1c2UsCiAgICAgIHJlcHJvZHVjdGlvbiwgYW5kIGRpc3RyaWJ1dGlvbiBvZiB0aGUgV29yayBvdGhlcndpc2UgY29tcGxpZXMgd2l0aAogICAgICB0aGUgY29uZGl0aW9ucyBzdGF0ZWQgaW4gdGhpcyBMaWNlbnNlLgoKICAgNS4gU3VibWlzc2lvbiBvZiBDb250cmlidXRpb25zLiBVbmxlc3MgWW91IGV4cGxpY2l0bHkgc3RhdGUgb3RoZXJ3aXNlLAogICAgICBhbnkgQ29udHJpYnV0aW9uIGludGVudGlvbmFsbHkgc3VibWl0dGVkIGZvciBpbmNsdXNpb24gaW4gdGhlIFdvcmsKICAgICAgYnkgWW91IHRvIHRoZSBMaWNlbnNvciBzaGFsbCBiZSB1bmRlciB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCB3aXRob3V0IGFueSBhZGRpdGlvbmFsIHRlcm1zIG9yIGNvbmRpdGlvbnMuCiAgICAgIE5vdHdpdGhzdGFuZGluZyB0aGUgYWJvdmUsIG5vdGhpbmcgaGVyZWluIHNoYWxsIHN1cGVyc2VkZSBvciBtb2RpZnkKICAgICAgdGhlIHRlcm1zIG9mIGFueSBzZXBhcmF0ZSBsaWNlbnNlIGFncmVlbWVudCB5b3UgbWF5IGhhdmUgZXhlY3V0ZWQKICAgICAgd2l0aCBMaWNlbnNvciByZWdhcmRpbmcgc3VjaCBDb250cmlidXRpb25zLgoKICAgNi4gVHJhZGVtYXJrcy4gVGhpcyBMaWNlbnNlIGRvZXMgbm90IGdyYW50IHBlcm1pc3Npb24gdG8gdXNlIHRoZSB0cmFkZQogICAgICBuYW1lcywgdHJhZGVtYXJrcywgc2VydmljZSBtYXJrcywgb3IgcHJvZHVjdCBuYW1lcyBvZiB0aGUgTGljZW5zb3IsCiAgICAgIGV4Y2VwdCBhcyByZXF1aXJlZCBmb3IgcmVhc29uYWJsZSBhbmQgY3VzdG9tYXJ5IHVzZSBpbiBkZXNjcmliaW5nIHRoZQogICAgICBvcmlnaW4gb2YgdGhlIFdvcmsgYW5kIHJlcHJvZHVjaW5nIHRoZSBjb250ZW50IG9mIHRoZSBOT1RJQ0UgZmlsZS4KCiAgIDcuIERpc2NsYWltZXIgb2YgV2FycmFudHkuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvcgogICAgICBhZ3JlZWQgdG8gaW4gd3JpdGluZywgTGljZW5zb3IgcHJvdmlkZXMgdGhlIFdvcmsgKGFuZCBlYWNoCiAgICAgIENvbnRyaWJ1dG9yIHByb3ZpZGVzIGl0cyBDb250cmlidXRpb25zKSBvbiBhbiAiQVMgSVMiIEJBU0lTLAogICAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IKICAgICAgaW1wbGllZCwgaW5jbHVkaW5nLCB3aXRob3V0IGxpbWl0YXRpb24sIGFueSB3YXJyYW50aWVzIG9yIGNvbmRpdGlvbnMKICAgICAgb2YgVElUTEUsIE5PTi1JTkZSSU5HRU1FTlQsIE1FUkNIQU5UQUJJTElUWSwgb3IgRklUTkVTUyBGT1IgQQogICAgICBQQVJUSUNVTEFSIFBVUlBPU0UuIFlvdSBhcmUgc29sZWx5IHJlc3BvbnNpYmxlIGZvciBkZXRlcm1pbmluZyB0aGUKICAgICAgYXBwcm9wcmlhdGVuZXNzIG9mIHVzaW5nIG9yIHJlZGlzdHJpYnV0aW5nIHRoZSBXb3JrIGFuZCBhc3N1bWUgYW55CiAgICAgIHJpc2tzIGFzc29jaWF0ZWQgd2l0aCBZb3VyIGV4ZXJjaXNlIG9mIHBlcm1pc3Npb25zIHVuZGVyIHRoaXMgTGljZW5zZS4KCiAgIDguIExpbWl0YXRpb24gb2YgTGlhYmlsaXR5LiBJbiBubyBldmVudCBhbmQgdW5kZXIgbm8gbGVnYWwgdGhlb3J5LAogICAgICB3aGV0aGVyIGluIHRvcnQgKGluY2x1ZGluZyBuZWdsaWdlbmNlKSwgY29udHJhY3QsIG9yIG90aGVyd2lzZSwKICAgICAgdW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IChzdWNoIGFzIGRlbGliZXJhdGUgYW5kIGdyb3NzbHkKICAgICAgbmVnbGlnZW50IGFjdHMpIG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzaGFsbCBhbnkgQ29udHJpYnV0b3IgYmUKICAgICAgbGlhYmxlIHRvIFlvdSBmb3IgZGFtYWdlcywgaW5jbHVkaW5nIGFueSBkaXJlY3QsIGluZGlyZWN0LCBzcGVjaWFsLAogICAgICBpbmNpZGVudGFsLCBvciBjb25zZXF1ZW50aWFsIGRhbWFnZXMgb2YgYW55IGNoYXJhY3RlciBhcmlzaW5nIGFzIGEKICAgICAgcmVzdWx0IG9mIHRoaXMgTGljZW5zZSBvciBvdXQgb2YgdGhlIHVzZSBvciBpbmFiaWxpdHkgdG8gdXNlIHRoZQogICAgICBXb3JrIChpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIGRhbWFnZXMgZm9yIGxvc3Mgb2YgZ29vZHdpbGwsCiAgICAgIHdvcmsgc3RvcHBhZ2UsIGNvbXB1dGVyIGZhaWx1cmUgb3IgbWFsZnVuY3Rpb24sIG9yIGFueSBhbmQgYWxsCiAgICAgIG90aGVyIGNvbW1lcmNpYWwgZGFtYWdlcyBvciBsb3NzZXMpLCBldmVuIGlmIHN1Y2ggQ29udHJpYnV0b3IKICAgICAgaGFzIGJlZW4gYWR2aXNlZCBvZiB0aGUgcG9zc2liaWxpdHkgb2Ygc3VjaCBkYW1hZ2VzLgoKICAgOS4gQWNjZXB0aW5nIFdhcnJhbnR5IG9yIEFkZGl0aW9uYWwgTGlhYmlsaXR5LiBXaGlsZSByZWRpc3RyaWJ1dGluZwogICAgICB0aGUgV29yayBvciBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YsIFlvdSBtYXkgY2hvb3NlIHRvIG9mZmVyLAogICAgICBhbmQgY2hhcmdlIGEgZmVlIGZvciwgYWNjZXB0YW5jZSBvZiBzdXBwb3J0LCB3YXJyYW50eSwgaW5kZW1uaXR5LAogICAgICBvciBvdGhlciBsaWFiaWxpdHkgb2JsaWdhdGlvbnMgYW5kL29yIHJpZ2h0cyBjb25zaXN0ZW50IHdpdGggdGhpcwogICAgICBMaWNlbnNlLiBIb3dldmVyLCBpbiBhY2NlcHRpbmcgc3VjaCBvYmxpZ2F0aW9ucywgWW91IG1heSBhY3Qgb25seQogICAgICBvbiBZb3VyIG93biBiZWhhbGYgYW5kIG9uIFlvdXIgc29sZSByZXNwb25zaWJpbGl0eSwgbm90IG9uIGJlaGFsZgogICAgICBvZiBhbnkgb3RoZXIgQ29udHJpYnV0b3IsIGFuZCBvbmx5IGlmIFlvdSBhZ3JlZSB0byBpbmRlbW5pZnksCiAgICAgIGRlZmVuZCwgYW5kIGhvbGQgZWFjaCBDb250cmlidXRvciBoYXJtbGVzcyBmb3IgYW55IGxpYWJpbGl0eQogICAgICBpbmN1cnJlZCBieSwgb3IgY2xhaW1zIGFzc2VydGVkIGFnYWluc3QsIHN1Y2ggQ29udHJpYnV0b3IgYnkgcmVhc29uCiAgICAgIG9mIHlvdXIgYWNjZXB0aW5nIGFueSBzdWNoIHdhcnJhbnR5IG9yIGFkZGl0aW9uYWwgbGlhYmlsaXR5LgoKICAgRU5EIE9GIFRFUk1TIEFORCBDT05ESVRJT05TCgogICBBUFBFTkRJWDogSG93IHRvIGFwcGx5IHRoZSBBcGFjaGUgTGljZW5zZSB0byB5b3VyIHdvcmsuCgogICAgICBUbyBhcHBseSB0aGUgQXBhY2hlIExpY2Vuc2UgdG8geW91ciB3b3JrLCBhdHRhY2ggdGhlIGZvbGxvd2luZwogICAgICBib2lsZXJwbGF0ZSBub3RpY2UsIHdpdGggdGhlIGZpZWxkcyBlbmNsb3NlZCBieSBicmFja2V0cyAiW10iCiAgICAgIHJlcGxhY2VkIHdpdGggeW91ciBvd24gaWRlbnRpZnlpbmcgaW5mb3JtYXRpb24uIChEb24ndCBpbmNsdWRlCiAgICAgIHRoZSBicmFja2V0cyEpICBUaGUgdGV4dCBzaG91bGQgYmUgZW5jbG9zZWQgaW4gdGhlIGFwcHJvcHJpYXRlCiAgICAgIGNvbW1lbnQgc3ludGF4IGZvciB0aGUgZmlsZSBmb3JtYXQuIFdlIGFsc28gcmVjb21tZW5kIHRoYXQgYQogICAgICBmaWxlIG9yIGNsYXNzIG5hbWUgYW5kIGRlc2NyaXB0aW9uIG9mIHB1cnBvc2UgYmUgaW5jbHVkZWQgb24gdGhlCiAgICAgIHNhbWUgInByaW50ZWQgcGFnZSIgYXMgdGhlIGNvcHlyaWdodCBub3RpY2UgZm9yIGVhc2llcgogICAgICBpZGVudGlmaWNhdGlvbiB3aXRoaW4gdGhpcmQtcGFydHkgYXJjaGl2ZXMuCgogICBDb3B5cmlnaHQgW3l5eXldIFtuYW1lIG9mIGNvcHlyaWdodCBvd25lcl0KCiAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwogICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCiAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoKICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoKICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQogICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAogICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAogICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCgpUaGlzIHByb2R1Y3QgYnVuZGxlcyBLbm9ja291dCBKYXZhU2NyaXB0IGxpYnJhcnkgdjMuNC4wLAp3aGljaCBpcyBhdmFpbGFibGUgdW5kZXIgYSBNSVQgbGljZW5zZToKClRoZSBNSVQgTGljZW5zZSAoTUlUKSAtIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwCgpDb3B5cmlnaHQgKGMpIFN0ZXZlbiBTYW5kZXJzb24sIHRoZSBLbm9ja291dC5qcyB0ZWFtLCBhbmQgb3RoZXIgY29udHJpYnV0b3JzCmh0dHA6Ly9rbm9ja291dGpzLmNvbS8KClBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkKb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgIlNvZnR3YXJlIiksIHRvIGRlYWwKaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cwp0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsCmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcwpmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOgoKVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4KYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuCgpUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgIkFTIElTIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUgpJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwKRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFCkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIKTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwKT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTgpUSEUgU09GVFdBUkUuCg==');
  exports['registerResource']('META-INF/NOTICE', 'Cktub2Nrb3V0LmpzIGZvciBKYXZhCkNvcHlyaWdodCAyMDE3IE5ldEJlYW5zCgpUaGlzIHByb2R1Y3QgaW5jbHVkZXMgc29mdHdhcmUgZGV2ZWxvcGVkIGF0ClRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoaHR0cDovL3d3dy5hcGFjaGUub3JnLykuCgoK');
  exports['registerResource']('META-INF/services/org.netbeans.html.context.spi.Contexts$Provider', 'b3JnLm5ldGJlYW5zLmh0bWwua280ai5LTzRKCg==');
});