var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.postagger;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '7ECDFC7536E01F5BBC17DA3C64B9C470';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = {3:1, 4:1}, $intern_1 = {35:1, 3:1, 4:1}, $intern_2 = {25:1, 3:1, 4:1}, $intern_3 = {3:1}, $intern_4 = 4194303, $intern_5 = 524288, $intern_6 = 16777216, $intern_7 = 33554432, $intern_8 = 67108864, $intern_9 = {8:1, 3:1, 10:1, 7:1}, $intern_10 = {20:1, 16:1, 19:1, 18:1, 21:1, 13:1, 11:1}, $intern_11 = {20:1, 16:1, 19:1, 18:1, 36:1, 21:1, 13:1, 11:1}, $intern_12 = {20:1, 16:1, 19:1, 18:1, 36:1, 21:1, 46:1, 13:1, 11:1}, $intern_13 = {23:1, 3:1, 10:1, 7:1}, $intern_14 = {173:1, 78:1}, $intern_15 = {15:1}, $intern_16 = {3:1, 26:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 202:1, 10:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException;
  }
  return null;
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumSuperclass = superclass;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(61, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_11(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 61);
function $initCause(this$static, cause){
  checkState(!this$static.cause);
  checkCriticalArgument(cause != this$static, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function Throwable(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(4, 1, $intern_0);
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_1(){
  var className, msg;
  return className = $getName(this.___clazz$) , msg = this.getMessage() , msg != null?className + ': ' + msg:className;
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 4);
function Exception(message){
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(33, 4, $intern_0);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 33);
function RuntimeException(){
  captureStackTrace(this, this.detailMessage);
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(5, 33, $intern_0, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 5);
defineClass(80, 5, $intern_0);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 80);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(22, 80, {22:1, 3:1, 4:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 22);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $setLength(this$static, newLength){
  this$static.length = newLength;
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(174, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 174);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function getModuleBaseURL(){
  var key = '__gwtDevModeHook:' + $moduleName + ':moduleBase';
  var global = $wnd || self;
  return global[key] || $moduleBase;
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $scheduleFinally(this$static, cmd){
  this$static.finallyCommands = push_0(this$static.finallyCommands, [cmd, false]);
}

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].nullMethod() && (rescheduled = push_0(rescheduled, t)):($clinit_StyleInjector() , needsInjection) && flush();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        reportToBrowser(instanceOf(e, 22)?dynamicCast(e, 22).getThrown():e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

defineClass(109, 174, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 109);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || ANONYMOUS;
}

var ANONYMOUS = 'anonymous', collector;
defineClass(185, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 185);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(81, 185, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 81);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

defineClass(186, 185, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 186);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(82, 186, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 82);
function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (!reference) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException_0("Can't overwrite cause");
  }
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $insertBefore(this$static, newChild, refChild){
  return this$static.insertBefore(newChild, refChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $replaceChild(this$static, newChild, oldChild){
  return this$static.replaceChild(newChild, oldChild);
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?$setClassName(this$static, oldClassName + ' ' + className):$setClassName(this$static, className);
    return true;
  }
  return false;
}

function $getClassName(this$static){
  return this$static.className || '';
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setId(this$static, id_0){
  this$static.id = id_0;
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setPropertyString(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setTabIndex(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $getNextSiblingElement(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $isOrHasChild(parent_0, child){
  return parent_0.contains(child);
}

function $eventGetCurrentTarget(event_0){
  return event_0.currentTarget || $wnd;
}

function $getTabIndex(elem){
  return typeof elem.tabIndex != 'undefined'?elem.tabIndex:-1;
}

function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $isChecked(this$static){
  return !!this$static.checked;
}

function $isDefaultChecked(this$static){
  return !!this$static.defaultChecked;
}

function $setChecked(this$static, checked){
  this$static.checked = checked;
}

function $setDefaultChecked(this$static, defaultChecked){
  this$static.defaultChecked = defaultChecked;
}

function $setHtmlFor(this$static, htmlFor){
  this$static.htmlFor = htmlFor;
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $clinit_StyleInjector(){
  $clinit_StyleInjector = emptyMethod;
  toInject = [];
  toInjectAtEnd = [];
  toInjectAtStart = [];
  flusher = new StyleInjector$1;
}

function flush(){
  $clinit_StyleInjector();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if (toInjectAtStart.length != 0) {
    css = toInjectAtStart.join('');
    maybeReturn = $injectStyleSheetAtStart(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInjectAtStart && (toReturn = maybeReturn);
    $setLength(toInjectAtStart, 0);
  }
  if (toInject.length != 0) {
    css = toInject.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInject && (toReturn = maybeReturn);
    $setLength(toInject, 0);
  }
  if (toInjectAtEnd.length != 0) {
    css = toInjectAtEnd.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInjectAtEnd && (toReturn = maybeReturn);
    $setLength(toInjectAtEnd, 0);
  }
  needsInjection = false;
  return toReturn;
}

function schedule(){
  $clinit_StyleInjector();
  if (!needsInjection) {
    needsInjection = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), flusher);
  }
}

var flusher, needsInjection = false, toInject, toInjectAtEnd, toInjectAtStart;
function StyleInjector$1(){
}

defineClass(146, 1, {}, StyleInjector$1);
var Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/1', 146);
function $clinit_StyleInjector$StyleInjectorImpl(){
  $clinit_StyleInjector$StyleInjectorImpl = emptyMethod;
  IMPL = new StyleInjector$StyleInjectorImpl;
}

function $createElement(contents){
  var style;
  style = $doc.createElement('style');
  $setPropertyString(style, 'language', 'text/css');
  style.textContent = contents || '';
  return style;
}

function $getHead(this$static){
  var elt;
  if (!this$static.head) {
    elt = $doc.getElementsByTagName('head')[0];
    this$static.head = elt;
  }
  return this$static.head;
}

function $injectStyleSheet(this$static, contents){
  var style;
  style = $createElement(contents);
  $appendChild($getHead(this$static), style);
  return style;
}

function $injectStyleSheetAtStart(this$static, contents){
  var style;
  style = $createElement(contents);
  $insertBefore($getHead(this$static), style, this$static.head.firstChild);
  return style;
}

function StyleInjector$StyleInjectorImpl(){
}

defineClass(145, 1, {}, StyleInjector$StyleInjectorImpl);
var IMPL;
var Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/StyleInjectorImpl', 145);
defineClass(194, 1, {});
_.toString$ = function toString_2(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 194);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(195, 194, {});
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 195);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 26);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next(), 57);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(196, 195, {});
_.getAssociatedType = function getAssociatedType(){
  return $clinit_ClickEvent() , TYPE;
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 196);
defineClass(197, 196, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 197);
defineClass(198, 197, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 198);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE = new DomEvent$Type(new ClickEvent);
}

function ClickEvent(){
}

defineClass(111, 198, {}, ClickEvent);
_.dispatch = function dispatch(handler){
  dynamicCast(handler, 173).onClick(this);
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 111);
defineClass(112, 1, {});
_.hashCode$ = function hashCode_1(){
  return this.index_0;
}
;
_.toString$ = function toString_3(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 112);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(56, 112, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 56);
function DomEvent$Type(flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = dynamicCast(registered.map_0['click'], 26);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, types);
  }
  types.add_1(this);
  this.name_0 = 'click';
}

defineClass(57, 56, {57:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 57);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, value_0){
  this$static.map_0['click'] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(120, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 120);
function CloseEvent_0(){
}

function fire(source){
  var event_0;
  if (TYPE_0) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

defineClass(119, 195, {}, CloseEvent_0);
_.dispatch = function dispatch_0(handler){
  dynamicCast(handler, 203);
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_0(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 119);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || (event_0.dead = false , event_0.source = null);
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 35)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function HandlerManager(source){
  this.eventBus = new HandlerManager$Bus;
  this.source = source;
}

defineClass(58, 1, {16:1}, HandlerManager);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 58);
defineClass(199, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 199);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_2(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  if (!type_0) {
    throw new NullPointerException_0('Cannot add a handler with a null type');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):$doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1;
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_1(handler);
}

function $doFire(this$static, event_0){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_0('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    handlers = $getDispatchList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next();
      try {
        event_0.dispatch(dynamicCast(handler, 78));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 4)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_3(causes, e);
        }
         else 
          throw unwrap($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_0(this$static.map_0, type_0), 31);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put(this$static.map_0, type_0, sourceMap);
  }
  handlers = dynamicCast(sourceMap.get_0(source), 26);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type_0){
  var directHandlers;
  directHandlers = $getHandlerList(this$static, type_0);
  return directHandlers;
}

function $getHandlerList(this$static, type_0){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_0(this$static.map_0, type_0), 31);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.get_0(null), 26);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01_0.size_1();) {
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_1(c$iterator.i++), 204));
        $doAddNow(c.this$01, c.val$type2, c.val$source3, c.val$handler4);
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

defineClass(114, 199, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 114);
function HandlerManager$Bus(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(115, 114, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 115);
function LegacyHandlerWrapper(){
}

defineClass(121, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 121);
function UmbrellaException(causes){
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
  this.causes = causes;
}

function makeCause(causes){
  var iterator;
  iterator = causes.iterator();
  if (!iterator.hasNext()) {
    return null;
  }
  return dynamicCast(iterator.next(), 4);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_0(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext();) {
    t = dynamicCast(t$iterator.next(), 4);
    first?(first = false):(b.string += '; ' , b);
    $append(b, t.getMessage());
  }
  return b.string;
}

defineClass(35, 5, $intern_1, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 35);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(66, 35, $intern_1, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 66);
function $cancel(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new ResponseImpl(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel(this$static);
  alert_0('sth happened, sry bud\n' + (new RequestTimeoutException(this$static.timeoutMillis)).detailMessage);
}

function Request(xmlHttpRequest, timeoutMillis, callback){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw new NullPointerException;
  }
  if (!callback) {
    throw new NullPointerException;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException;
  }
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(159, 1, {}, Request);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 159);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException_0('must be non-negative');
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(161, 1, {});
_.fire = function fire_0(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  $fireOnTimeout(this.this$01);
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 161);
function Request$1(this$0){
  this.this$01 = this$0;
}

defineClass(162, 161, {}, Request$1);
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 162);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  POST = new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 22)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw requestPermissionException;
    }
     else 
      throw unwrap($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 22)) {
      e = $e1;
      throw new RequestException(e.getMessage());
    }
     else 
      throw unwrap($e1);
  }
  return request;
}

function $setHeader(this$static, header, value_0){
  throwIfEmptyOrNull('header', header);
  throwIfEmptyOrNull('value', value_0);
  !this$static.headers && (this$static.headers = new HashMap);
  $putStringValue(this$static.headers, header, value_0);
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers && this$static.headers.size_0 > 0) {
    for (header$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.headers)).this$01); $hasNext(header$iterator);) {
      header = (checkStructuralChange(header$iterator.this$01, header$iterator) , checkCriticalElement($hasNext(header$iterator)) , dynamicCast(header$iterator.current.next(), 15));
      try {
        $setRequestHeader(xmlHttpRequest, dynamicCastToString(header.getKey()), dynamicCastToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 22)) {
          e = $e0;
          throw new RequestException(e.getMessage());
        }
         else 
          throw unwrap($e0);
      }
    }
  }
   else {
    $setRequestHeader(xmlHttpRequest, 'Content-Type', 'text/plain; charset=utf-8');
  }
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(77, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 77);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(165, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 165);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(43, 1, {}, RequestBuilder$Method);
_.toString$ = function toString_4(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 43);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(25, 33, $intern_2, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 25);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(167, 25, $intern_2, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 167);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(172, 25, $intern_2, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 172);
defineClass(201, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 201);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(160, 201, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 160);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw new IllegalArgumentException_0(name_0 + ' cannot be empty');
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw new NullPointerException_0(name_0 + ' cannot be null');
  }
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        $setPropertyString(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        $setPropertyString(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && $setPropertyString(elem, 'dir', '');
        break;
      }

  }
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(7, 1, {3:1, 10:1, 7:1});
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_2(){
  return getHashCode(this);
}
;
_.toString$ = function toString_5(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 7);
function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values(){
  $clinit_HasDirection$Direction();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_3, 39, 0, [RTL, LTR, DEFAULT]);
}

defineClass(39, 7, {39:1, 3:1, 10:1, 7:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 39, Ljava_lang_Enum_2_classLit, values);
function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case TYPE_PRIMITIVE_LONG:
      initValue = {l:0, m:0, h:0};
      break;
    case TYPE_PRIMITIVE_NUMBER:
      initValue = 0;
      break;
    case TYPE_PRIMITIVE_BOOLEAN:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

var TYPE_PRIMITIVE_BOOLEAN = 8, TYPE_PRIMITIVE_LONG = 6, TYPE_PRIMITIVE_NUMBER = 7;
function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap(e){
  var jse;
  if (instanceOf(e, 22)) {
    jse = dynamicCast(e, 22);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 4)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_4;
  a1 = value_0 >> 22 & $intern_4;
  a2 = value_0 < 0?1048575:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_3, 207, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create(value_0));
    return result;
  }
  return create(value_0);
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_4, $intern_4, 524287);
  MIN_VALUE = create0(0, 0, $intern_5);
  fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $add_0(($clinit_RootPanel() , get_0()), new TaggerUI);
}

function $replace(this$static, input_0, replacement){
  return input_0.replace(this$static, replacement);
}

function OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(html){
  if (html == null) {
    throw new NullPointerException_0('html is null');
  }
  this.html = html;
}

defineClass(12, 1, {52:1, 3:1}, OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml);
_.asString = function asString(){
  return this.html;
}
;
_.equals$ = function equals_1(obj){
  if (!instanceOf(obj, 52)) {
    return false;
  }
  return $equals(this.html, dynamicCast(obj, 52).asString());
}
;
_.hashCode$ = function hashCode_3(){
  return getHashCode_0(this.html);
}
;
var Lcom_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 12);
function SafeHtmlString(){
  this.html = '';
}

defineClass(134, 1, {52:1, 3:1}, SafeHtmlString);
_.asString = function asString_0(){
  return this.html;
}
;
_.equals$ = function equals_2(obj){
  if (!instanceOf(obj, 52)) {
    return false;
  }
  return $equals(this.html, dynamicCast(obj, 52).asString());
}
;
_.hashCode$ = function hashCode_4(){
  return getHashCode_0(this.html);
}
;
_.toString$ = function toString_6(){
  return 'safe: "' + this.html + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeHtmlString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlString', 134);
function $clinit_SafeHtmlUtils(){
  $clinit_SafeHtmlUtils = emptyMethod;
  new SafeHtmlString;
  AMP_RE = new RegExp('&', 'g');
  GT_RE = new RegExp('>', 'g');
  LT_RE = new RegExp('<', 'g');
  SQUOT_RE = new RegExp("'", 'g');
  QUOT_RE = new RegExp('"', 'g');
}

function htmlEscape(s){
  $clinit_SafeHtmlUtils();
  s.indexOf('&') != -1 && (s = $replace(AMP_RE, s, '&amp;'));
  s.indexOf('<') != -1 && (s = $replace(LT_RE, s, '&lt;'));
  s.indexOf('>') != -1 && (s = $replace(GT_RE, s, '&gt;'));
  s.indexOf('"') != -1 && (s = $replace(QUOT_RE, s, '&quot;'));
  s.indexOf("'") != -1 && (s = $replace(SQUOT_RE, s, '&#39;'));
  return s;
}

var AMP_RE, GT_RE, LT_RE, QUOT_RE, SQUOT_RE;
defineClass(200, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'AbstractRenderer', 200);
function PassthroughParser(){
}

defineClass(137, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughParser', 137);
function PassthroughRenderer(){
}

defineClass(136, 200, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughRenderer', 136);
function $get(this$static){
  if (!this$static.element) {
    this$static.element = $getElementById($doc, this$static.domId);
    if (!this$static.element) {
      throw new RuntimeException_0('Cannot find element with id "' + this$static.domId + '". Perhaps it is not attached to the document body.');
    }
    this$static.element.removeAttribute('id');
  }
  return this$static.element;
}

function LazyDomElement(domId){
  this.domId = domId;
}

defineClass(9, 1, {}, LazyDomElement);
var Lcom_google_gwt_uibinder_client_LazyDomElement_2_classLit = createForClass('com.google.gwt.uibinder.client', 'LazyDomElement', 9);
function attachToDom(element){
  var origParent, origSibling;
  ensureHiddenDiv();
  origParent = $getParentElement(element);
  origSibling = $getNextSiblingElement(element);
  $appendChild(hiddenDiv, element);
  return new UiBinderUtil$TempAttachment(origParent, origSibling, element);
}

function ensureHiddenDiv(){
  if (!hiddenDiv) {
    hiddenDiv = $doc.createElement('div');
    setVisible(hiddenDiv, false);
    $appendChild(getBodyElement(), hiddenDiv);
  }
}

function orphan(node){
  $removeChild(node.parentNode, node);
}

var hiddenDiv;
function UiBinderUtil$TempAttachment(origParent, origSibling, element){
  this.origParent = origParent;
  this.origSibling = origSibling;
  this.element = element;
}

defineClass(124, 1, {}, UiBinderUtil$TempAttachment);
var Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2_classLit = createForClass('com.google.gwt.uibinder.client', 'UiBinderUtil/TempAttachment', 124);
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function isPotential(o){
  $clinit_DOM();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function sinkEvents(elem, eventBits){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function getEventsSunk(elem){
  return $clinit_DOM() , elem.__eventBits || 0;
}

function getTypeInt(typeName){
  return $eventGetTypeInt(($clinit_DOM() , typeName));
}

function sinkEvents_0(elem, eventBits){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_0?TYPE_0:(TYPE_0 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), type_0, handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_0 && $fireEvent(handlers_0, event_0);
    return null;
  }
  return null;
}

var closeHandlersInitialized = false, handlers_0;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_1 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(113, 195, {}, Window$ClosingEvent);
_.dispatch = function dispatch_1(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_1(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 113);
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(74, 58, {16:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 74);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_5;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return 4194304;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_6;
    case 'gesturechange':
      return $intern_7;
    case 'gestureend':
      return $intern_8;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 19)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_2, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $initEventSystem(){
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $sinkBitlessEvent(elem, eventTypeName){
  var dispatchMap, dispatcher;
  $maybeInitializeEventSystem();
  dispatchMap = bitlessEventDispatchers;
  dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & 65536 && (elem.onerror = bits & 65536?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_5 && (elem.onpaste = bits & $intern_5?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & 4194304 && (elem.ontouchend = bits & 4194304?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_6 && (elem.ongesturestart = bits & $intern_6?dispatchEvent_1:null);
  chMask & $intern_7 && (elem.ongesturechange = bits & $intern_7?dispatchEvent_1:null);
  chMask & $intern_8 && (elem.ongestureend = bits & $intern_8?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  $clinit_DOM();
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOM();
  return;
}

function dispatchDragEvent(evt){
  evt.preventDefault();
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = $eventGetCurrentTarget(evt);
  $setPropertyString(element, '__gwtLastUnhandledEvent', evt.type);
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = $eventGetCurrentTarget(evt);
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureEventDispatchers, dispatchEvent_1, dispatchUnhandledEvent;
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function IncompatibleRemoteServiceException(){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser.');
}

function IncompatibleRemoteServiceException_0(msg){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser. ( ' + msg + ' )');
}

function IncompatibleRemoteServiceException_1(cause){
  RuntimeException_1.call(this, 'The response could not be deserialized', cause);
}

defineClass(50, 5, $intern_0, IncompatibleRemoteServiceException, IncompatibleRemoteServiceException_0, IncompatibleRemoteServiceException_1);
var Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'IncompatibleRemoteServiceException', 50);
function deserialize(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate(streamReader){
  return new IncompatibleRemoteServiceException;
}

function serialize(streamWriter, instance){
  $writeString(streamWriter, instance.detailMessage);
}

function InvocationException(s){
  RuntimeException_1.call(this, s, null);
}

function InvocationException_0(s, cause){
  RuntimeException_1.call(this, s, cause);
}

defineClass(41, 5, $intern_0, InvocationException, InvocationException_0);
var Lcom_google_gwt_user_client_rpc_InvocationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'InvocationException', 41);
function $create(this$static, serviceEntryPoint){
  this$static.builder = new RequestBuilder(($clinit_RequestBuilder() , POST), serviceEntryPoint);
  return this$static;
}

function $doFinish(rb){
  $setHeader(rb, 'X-GWT-Permutation', $strongName);
  $setHeader(rb, 'X-GWT-Module-Base', getModuleBaseURL());
}

function $doSetCallback(rb, callback){
  throwIfNull('callback', callback);
  rb.callback = callback;
}

function $doSetRequestData(rb, data_0){
  rb.requestData = data_0;
}

function $finish(this$static){
  try {
    $doFinish(this$static.builder);
    return this$static.builder;
  }
   finally {
    this$static.builder = null;
  }
}

function $setCallback(this$static, callback){
  $doSetCallback(this$static.builder, callback);
  return this$static;
}

function $setContentType(this$static){
  $setHeader(this$static.builder, 'Content-Type', 'text/x-gwt-rpc; charset=utf-8');
  return this$static;
}

function $setRequestData(this$static, data_0){
  $doSetRequestData(this$static.builder, data_0);
  return this$static;
}

function RpcRequestBuilder(){
}

defineClass(166, 1, {}, RpcRequestBuilder);
var Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcRequestBuilder', 166);
function RpcTokenException(){
  RuntimeException_0.call(this, 'Invalid RPC token');
}

defineClass(144, 5, $intern_0, RpcTokenException);
var Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcTokenException', 144);
function deserialize_0(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_0(streamReader){
  return new RpcTokenException;
}

function SerializationException(msg){
  Exception.call(this, msg);
}

defineClass(42, 33, {42:1, 3:1, 4:1}, SerializationException);
var Lcom_google_gwt_user_client_rpc_SerializationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'SerializationException', 42);
function ServiceDefTarget$NoServiceEntryPointSpecifiedException(){
  InvocationException.call(this, 'Service implementation URL not specified');
}

defineClass(141, 41, $intern_0, ServiceDefTarget$NoServiceEntryPointSpecifiedException);
var Lcom_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'ServiceDefTarget/NoServiceEntryPointSpecifiedException', 141);
function StatusCodeException(statusCode, statusText, encodedResponse){
  InvocationException.call(this, statusCode + ' ' + statusText + ' ' + encodedResponse);
}

defineClass(169, 41, $intern_0, StatusCodeException);
var Lcom_google_gwt_user_client_rpc_StatusCodeException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'StatusCodeException', 169);
function serialize_0(streamWriter, instance){
  $writeString(streamWriter, instance.nullField);
}

function serialize_1(streamWriter, instance){
  $writeBoolean(streamWriter, instance.value_0);
}

function serialize_2(streamWriter, instance){
  var i, n;
  $writeInt(streamWriter, instance.length);
  for (i = 0 , n = instance.length; i < n; ++i) {
    $writeString(streamWriter, instance[i]);
  }
}

function deserialize_1(streamReader, instance){
}

function instantiate_1(streamReader){
  return $getString(streamReader, $readInt(streamReader));
}

function serialize_3(streamWriter, instance){
  $writeInt(streamWriter, $addString(streamWriter, instance));
}

function setDetailMessage(instance, value_0){
  instance.detailMessage = value_0;
}

function serialize_4(streamWriter, instance){
  serialize_6(streamWriter, instance);
}

function serialize_5(streamWriter, instance){
  var array;
  array = instance.nullField;
  $writeObject(streamWriter, array);
}

function serialize_6(streamWriter, instance){
  var obj, obj$iterator, size_0;
  size_0 = instance.size_1();
  append(streamWriter.encodeBuffer, '' + size_0);
  for (obj$iterator = instance.iterator(); obj$iterator.hasNext();) {
    obj = obj$iterator.next();
    $writeObject(streamWriter, obj);
  }
}

function serialize_7(streamWriter, instance){
}

function serialize_8(streamWriter, instance){
}

function serialize_9(streamWriter, instance){
  $writeObject(streamWriter, instance.get_1(0));
}

function serialize_10(streamWriter, instance){
  serialize_6(streamWriter, instance);
}

function serialize_11(streamWriter, instance){
  serialize_6(streamWriter, instance);
}

function serialize_12(streamWriter, instance){
  serialize_6(streamWriter, instance);
}

function serialize_13(streamWriter){
  var size_0;
  size_0 = null.nullMethod();
  append(streamWriter.encodeBuffer, '' + size_0);
  for (null.nullMethod().nullMethod(); null.nullMethod();) {
    null.nullMethod();
    $writeObject(streamWriter, null.nullMethod());
    $writeObject(streamWriter, null.nullMethod());
  }
}

function serialize_14(streamWriter, instance){
  serialize_6(streamWriter, instance);
}

function serialize_15(streamWriter, instance){
  $writeObject(streamWriter, null.nullMethod());
  serialize_13(streamWriter);
}

function serialize_16(streamWriter, instance){
  $writeObject(streamWriter, null.nullMethod());
  serialize_6(streamWriter, instance);
}

function serialize_17(streamWriter, instance){
  serialize_6(streamWriter, instance);
}

function $setFlags(this$static, flags){
  this$static.flags = flags;
}

function $setVersion(this$static, version){
  this$static.version = version;
}

defineClass(76, 1, {});
_.flags = 0;
_.version = 7;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStream', 76);
function $readObject(this$static){
  var token, typeSignature, id_0, instance;
  token = $readInt(this$static);
  if (token < 0) {
    return $get_1(this$static.seenArray, -(token + 1));
  }
  typeSignature = $getString(this$static, token);
  if (typeSignature == null) {
    return null;
  }
  return id_0 = ($add_2(this$static.seenArray, null) , this$static.seenArray.array.length) , instance = $instantiate(this$static.serializer, this$static, typeSignature) , $set(this$static.seenArray, id_0 - 1, instance) , $deserialize(this$static.serializer, this$static, instance, typeSignature) , instance;
}

defineClass(170, 76, {});
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamReader', 170);
function $addString(this$static, string){
  var index_0, o;
  if (string == null) {
    return 0;
  }
  o = dynamicCast($getStringValue(this$static.stringMap, string), 27);
  if (o) {
    return o.value_0;
  }
  $add_2(this$static.stringTable, string);
  index_0 = this$static.stringTable.array.length;
  $putStringValue(this$static.stringMap, string, valueOf(index_0));
  return index_0;
}

function $writeBoolean(this$static, fieldValue){
  append(this$static.encodeBuffer, fieldValue?'1':'0');
}

function $writeInt(this$static, fieldValue){
  append(this$static.encodeBuffer, '' + fieldValue);
}

function $writeObject(this$static, instance){
  var objIndex, typeSignature;
  if (instance == null) {
    $writeInt(this$static, $addString(this$static, null));
    return;
  }
  objIndex = $containsKey(this$static.objectMap, instance)?dynamicCast($get_0(this$static.objectMap, instance), 27).value_0:-1;
  if (objIndex >= 0) {
    append(this$static.encodeBuffer, '' + -(objIndex + 1));
    return;
  }
  $put(this$static.objectMap, instance, valueOf(this$static.objectCount++));
  typeSignature = $getObjectTypeSignature(this$static, instance);
  if (typeSignature == null) {
    throw new SerializationException('could not get type signature for ' + getClass__Ljava_lang_Class___devirtual$(instance));
  }
  $writeInt(this$static, $addString(this$static, typeSignature));
  $serialize(this$static.serializer, this$static, instance, typeSignature);
}

function $writeString(this$static, value_0){
  $writeInt(this$static, $addString(this$static, value_0));
}

defineClass(163, 76, {});
_.objectCount = 0;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamWriter', 163);
function $getString(this$static, index_0){
  return index_0 > 0?this$static.stringTable[index_0 - 1]:null;
}

function $prepareToRead(this$static, encoded){
  this$static.results = eval(encoded);
  this$static.index_0 = this$static.results.length;
  this$static.seenArray.array = initDim(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 3, 1);
  $setVersion(this$static, $readInt(this$static));
  $setFlags(this$static, $readInt(this$static));
  if (this$static.version != 7) {
    throw new IncompatibleRemoteServiceException_0('Expecting version 7 from server, got ' + this$static.version + '.');
  }
  if (((this$static.flags | 3) ^ 3) != 0) {
    throw new IncompatibleRemoteServiceException_0('Got an unknown flag from server: ' + this$static.flags);
  }
  this$static.stringTable = this$static.results[--this$static.index_0];
}

function $readInt(this$static){
  return this$static.results[--this$static.index_0];
}

function ClientSerializationStreamReader(serializer){
  this.seenArray = new ArrayList;
  this.serializer = serializer;
}

defineClass(171, 170, {}, ClientSerializationStreamReader);
_.index_0 = 0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamReader', 171);
function $clinit_ClientSerializationStreamWriter(){
  $clinit_ClientSerializationStreamWriter = emptyMethod;
  regex_0 = getQuotingRegex();
}

function $getObjectTypeSignature(this$static, o){
  var clazz, e, clazz_0, superclass;
  clazz = getClass__Ljava_lang_Class___devirtual$(o);
  if (instanceOf(o, 7)) {
    e = dynamicCast(o, 7);
    clazz = (clazz_0 = e.___clazz$ , superclass = clazz_0.enumSuperclass , superclass == Ljava_lang_Enum_2_classLit?clazz_0:superclass);
  }
  return $getSerializationSignature(this$static.serializer, clazz);
}

function $toString(this$static){
  var buffer;
  buffer = new StringBuilder;
  append(buffer, '' + this$static.version);
  append(buffer, '' + this$static.flags);
  $writeStringTable(this$static, buffer);
  $append(buffer, this$static.encodeBuffer.string);
  return buffer.string;
}

function $writeStringTable(this$static, buffer){
  var s, s$iterator, stringTable;
  stringTable = this$static.stringTable;
  append(buffer, '' + stringTable.array.length);
  for (s$iterator = new AbstractList$IteratorImpl(stringTable); s$iterator.i < s$iterator.this$01_0.size_1();) {
    s = (checkCriticalElement(s$iterator.i < s$iterator.this$01_0.size_1()) , dynamicCastToString(s$iterator.this$01_0.get_1(s$iterator.i++)));
    append(buffer, quoteString(s));
  }
  return buffer;
}

function ClientSerializationStreamWriter(serializer, moduleBaseURL, serializationPolicyStrongName){
  $clinit_ClientSerializationStreamWriter();
  this.objectMap = new IdentityHashMap;
  this.stringMap = new HashMap;
  this.stringTable = new ArrayList;
  this.serializer = serializer;
  this.moduleBaseURL = moduleBaseURL;
  this.serializationPolicyStrongName = serializationPolicyStrongName;
}

function append(sb, token){
  $clinit_ClientSerializationStreamWriter();
  sb.string += token;
  sb.string += '|';
}

function getQuotingRegex(){
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('android') != -1) {
    return /[\u0000\|\\\u0080-\uFFFF]/g;
  }
   else if (ua.indexOf('chrome/11') != -1) {
    return /[\u0000\|\\\u0300-\uFFFF]/g;
  }
   else if (ua.indexOf('webkit') != -1) {
    return /[\u0000\|\\\u0300-\u03ff\u0590-\u05FF\u0600-\u06ff\u0730-\u074A\u07eb-\u07f3\u0940-\u0963\u0980-\u09ff\u0a00-\u0a7f\u0b00-\u0b7f\u0e00-\u0e7f\u0f00-\u0fff\u1900-\u194f\u1a00-\u1a1f\u1b00-\u1b7f\u1cda-\u1cdc\u1dc0-\u1dff\u1f00-\u1fff\u2000-\u206f\u20d0-\u20ff\u2100-\u214f\u2300-\u23ff\u2a00-\u2aff\u3000-\u303f\uaab2-\uaab4\uD800-\uFFFF]/g;
  }
   else {
    return /[\u0000\|\\\uD800-\uFFFF]/g;
  }
}

function quoteString(str){
  var regex = regex_0;
  var idx = 0;
  var out = '';
  var result;
  while ((result = regex.exec(str)) != null) {
    out += str.substring(idx, result.index);
    idx = result.index + 1;
    var ch_0 = result[0].charCodeAt(0);
    if (ch_0 == 0) {
      out += '\\0';
    }
     else if (ch_0 == 92) {
      out += '\\\\';
    }
     else if (ch_0 == 124) {
      out += '\\!';
    }
     else {
      var hex = ch_0.toString(16);
      out += '\\u0000'.substring(0, 6 - hex.length) + hex;
    }
  }
  return out + str.substring(idx);
}

defineClass(164, 163, {}, ClientSerializationStreamWriter);
_.toString$ = function toString_7(){
  return $toString(this);
}
;
var regex_0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamWriter', 164);
function $createStreamReader(this$static, encoded){
  var clientSerializationStreamReader;
  clientSerializationStreamReader = new ClientSerializationStreamReader(this$static.serializer);
  $prepareToRead(clientSerializationStreamReader, getEncodedInstance(encoded));
  return clientSerializationStreamReader;
}

function $doInvoke(this$static, methodName, statsContext, requestData, callback){
  var ex, iex, rb;
  rb = $doPrepareRequestBuilderImpl(this$static, methodName, statsContext, requestData, callback);
  try {
    return throwIfNull('callback', rb.callback) , $doSend(rb, rb.requestData, rb.callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 25)) {
      ex = $e0;
      iex = new InvocationException_0('Unable to initiate the asynchronous service invocation (' + methodName + ') -- check the network connection', ex);
      alert_0('sth happened, sry bud\n' + iex.detailMessage);
    }
     else 
      throw unwrap($e0);
  }
   finally {
    $isStatsAvailable() && $stats_0($bytesStat(statsContext, methodName, requestData.length, 'requestSent'));
  }
  return null;
}

function $doPrepareRequestBuilderImpl(this$static, methodName, statsContext, requestData, callback){
  var responseHandler;
  if (this$static.remoteServiceURL == null) {
    throw new ServiceDefTarget$NoServiceEntryPointSpecifiedException;
  }
  responseHandler = new RequestCallbackAdapter(this$static, methodName, statsContext, callback);
  !this$static.rpcRequestBuilder && (this$static.rpcRequestBuilder = new RpcRequestBuilder);
  $create(this$static.rpcRequestBuilder, this$static.remoteServiceURL);
  $setCallback(this$static.rpcRequestBuilder, responseHandler);
  $setContentType(this$static.rpcRequestBuilder);
  $setRequestData(this$static.rpcRequestBuilder, requestData);
  return $finish(this$static.rpcRequestBuilder);
}

function RemoteServiceProxy(moduleBaseURL, serializer){
  this.moduleBaseURL = moduleBaseURL;
  this.remoteServiceURL = moduleBaseURL + 'taggerservice';
  this.serializer = serializer;
  this.serializationPolicyName = '82A1646BF1B20FB14BDD615ABBD98E06';
}

function getEncodedInstance(encodedResponse){
  if ($equals(encodedResponse.substr(0, 4), '//OK') || $equals(encodedResponse.substr(0, 4), '//EX')) {
    return __substr(encodedResponse, 4, encodedResponse.length - 4);
  }
  return encodedResponse;
}

defineClass(138, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy', 138);
function $finish_0(this$static, callback){
  var payload;
  payload = $toString(this$static.streamWriter);
  $isStatsAvailable() && $stats_0($timeStat(this$static.statsContext, this$static.fullServiceName, 'requestSerialized'));
  return $doInvoke(this$static.this$01, this$static.fullServiceName, this$static.statsContext, payload, callback);
}

function RemoteServiceProxy$ServiceHelper(this$0){
  this.this$01 = this$0;
  this.fullServiceName = 'TaggerService_Proxy.makeHTML';
  this.methodName = 'makeHTML';
  this.statsContext = new RpcStatsContext;
}

defineClass(140, 1, {}, RemoteServiceProxy$ServiceHelper);
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy/ServiceHelper', 140);
function $onResponseReceived(this$static, response){
  var caught, e, encodedResponse, result, statusCode;
  result = null;
  caught = null;
  try {
    encodedResponse = response.xmlHttpRequest.responseText;
    statusCode = response.xmlHttpRequest.status;
    $isStatsAvailable() && $stats_0($bytesStat(this$static.statsContext, this$static.methodName, encodedResponse.length, 'responseReceived'));
    statusCode != 200?(caught = new StatusCodeException(statusCode, response.xmlHttpRequest.statusText, encodedResponse)):encodedResponse == null?(caught = new InvocationException('No response payload from ' + this$static.methodName)):$equals(encodedResponse.substr(0, 4), '//OK')?(result = $read($createStreamReader(this$static.streamFactory, encodedResponse))):$equals(encodedResponse.substr(0, 4), '//EX')?(caught = dynamicCast($readObject($createStreamReader(this$static.streamFactory, encodedResponse)), 4)):(caught = new InvocationException(encodedResponse + ' from ' + this$static.methodName));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 42)) {
      e = $e0;
      caught = new IncompatibleRemoteServiceException_1(e);
    }
     else if (instanceOf($e0, 4)) {
      e = $e0;
      caught = e;
    }
     else 
      throw unwrap($e0);
  }
   finally {
    $isStatsAvailable() && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'responseDeserialized'));
  }
  try {
    !caught?$onSuccess(this$static.callback, result):alert_0('sth happened, sry bud\n' + caught.getMessage());
  }
   finally {
    $isStatsAvailable() && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'end'));
  }
}

function RequestCallbackAdapter(streamFactory, methodName, statsContext, callback){
  this.streamFactory = streamFactory;
  this.callback = callback;
  this.methodName = methodName;
  this.statsContext = statsContext;
}

defineClass(147, 1, {}, RequestCallbackAdapter);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter', 147);
function $clinit_RequestCallbackAdapter$ResponseReader(){
  $clinit_RequestCallbackAdapter$ResponseReader = emptyMethod;
  BOOLEAN = new RequestCallbackAdapter$ResponseReader$1;
  BYTE = new RequestCallbackAdapter$ResponseReader$2;
  CHAR = new RequestCallbackAdapter$ResponseReader$3;
  DOUBLE = new RequestCallbackAdapter$ResponseReader$4;
  FLOAT = new RequestCallbackAdapter$ResponseReader$5;
  INT = new RequestCallbackAdapter$ResponseReader$6;
  LONG = new RequestCallbackAdapter$ResponseReader$7;
  OBJECT = new RequestCallbackAdapter$ResponseReader$8;
  SHORT = new RequestCallbackAdapter$ResponseReader$9;
  STRING = new RequestCallbackAdapter$ResponseReader$10;
  VOID = new RequestCallbackAdapter$ResponseReader$11;
}

function RequestCallbackAdapter$ResponseReader(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_RequestCallbackAdapter$ResponseReader();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, 1), $intern_3, 8, 0, [BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID]);
}

defineClass(8, 7, $intern_9);
var BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader', 8, Ljava_lang_Enum_2_classLit, values_0);
function RequestCallbackAdapter$ResponseReader$1(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BOOLEAN', 0);
}

defineClass(148, 8, $intern_9, RequestCallbackAdapter$ResponseReader$1);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/1', 148, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function $read(streamReader){
  return $getString(streamReader, $readInt(streamReader));
}

function RequestCallbackAdapter$ResponseReader$10(){
  RequestCallbackAdapter$ResponseReader.call(this, 'STRING', 9);
}

defineClass(157, 8, $intern_9, RequestCallbackAdapter$ResponseReader$10);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/10', 157, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$11(){
  RequestCallbackAdapter$ResponseReader.call(this, 'VOID', 10);
}

defineClass(158, 8, $intern_9, RequestCallbackAdapter$ResponseReader$11);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/11', 158, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$2(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BYTE', 1);
}

defineClass(149, 8, $intern_9, RequestCallbackAdapter$ResponseReader$2);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/2', 149, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$3(){
  RequestCallbackAdapter$ResponseReader.call(this, 'CHAR', 2);
}

defineClass(150, 8, $intern_9, RequestCallbackAdapter$ResponseReader$3);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/3', 150, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$4(){
  RequestCallbackAdapter$ResponseReader.call(this, 'DOUBLE', 3);
}

defineClass(151, 8, $intern_9, RequestCallbackAdapter$ResponseReader$4);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/4', 151, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$5(){
  RequestCallbackAdapter$ResponseReader.call(this, 'FLOAT', 4);
}

defineClass(152, 8, $intern_9, RequestCallbackAdapter$ResponseReader$5);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/5', 152, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$6(){
  RequestCallbackAdapter$ResponseReader.call(this, 'INT', 5);
}

defineClass(153, 8, $intern_9, RequestCallbackAdapter$ResponseReader$6);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/6', 153, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$7(){
  RequestCallbackAdapter$ResponseReader.call(this, 'LONG', 6);
}

defineClass(154, 8, $intern_9, RequestCallbackAdapter$ResponseReader$7);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/7', 154, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$8(){
  RequestCallbackAdapter$ResponseReader.call(this, 'OBJECT', 7);
}

defineClass(155, 8, $intern_9, RequestCallbackAdapter$ResponseReader$8);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/8', 155, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$9(){
  RequestCallbackAdapter$ResponseReader.call(this, 'SHORT', 8);
}

defineClass(156, 8, $intern_9, RequestCallbackAdapter$ResponseReader$9);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/9', 156, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function $bytesStat(this$static, method, bytes, eventType){
  var stat = this$static.timeStat(method, eventType);
  stat.bytes = bytes;
  return stat;
}

function $isStatsAvailable(){
  return !!$stats;
}

function $stats_0(data_0){
  return $stats(data_0);
}

function $timeStat(this$static, method, eventType){
  return {moduleName:$moduleName, sessionId:$sessionId, subSystem:'rpc', evtGroup:this$static.requestId, method:method, millis:(new Date).getTime(), type:eventType};
}

function RpcStatsContext(){
  RpcStatsContext_0.call(this, requestIdCounter++);
}

function RpcStatsContext_0(requestId){
  this.requestId = requestId;
}

defineClass(75, 1, {}, RpcStatsContext);
_.timeStat = function timeStat(method, eventType){
  return $timeStat(this, method, eventType);
}
;
_.requestId = 0;
var requestIdCounter = 0;
var Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RpcStatsContext', 75);
function $check(this$static, typeSignature){
  if (!this$static.methodMapNative[typeSignature]) {
    throw new SerializationException(typeSignature);
  }
}

function $deserialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $deserialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function $getSerializationSignature(this$static, clazz){
  return this$static.signatureMapNative[getHashCode(clazz)];
}

function $instantiate(this$static, stream, typeSignature){
  $check(this$static, typeSignature);
  return $instantiate_0(this$static.methodMapNative, stream, typeSignature);
}

function $serialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $serialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function SerializerBase(methodMapNative, signatureMapNative){
  new HashMap;
  this.methodMapNative = methodMapNative;
  this.signatureMapNative = signatureMapNative;
}

defineClass(142, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'SerializerBase', 142);
function $deserialize_0(this$static, stream, instance, signature){
  this$static[signature][1](stream, instance);
}

function $instantiate_0(this$static, stream, signature){
  return this$static[signature][0](stream);
}

function $serialize_0(this$static, stream, instance, signature){
  this$static[signature][2](stream, instance);
}

function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $resolvePotentialElement(){
  throw new UnsupportedOperationException;
}

function $setElement(this$static, elem){
  $setElement_0(this$static, ($clinit_DOM() , elem));
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setVisible(this$static, visible){
  setVisible(($clinit_DOM() , this$static.element), visible);
}

function $sinkBitlessEvent_0(this$static, eventTypeName){
  $clinit_DOM();
  $sinkBitlessEvent(this$static.element, eventTypeName);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

defineClass(13, 1, {18:1, 13:1});
_.resolvePotentialElement = function resolvePotentialElement(){
  return $resolvePotentialElement();
}
;
_.toString$ = function toString_8(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_DOM() , this.element).outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 13);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent_0(this$static, type_0.name_0):this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this$static.element, typeInt | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && this$static.sinkEvents(bitsToAdd);
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      $clinit_DOM();
      setEventListener(this$static.element, null);
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 36)) {
    dynamicCast(this$static.parent_0, 36).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_0("This widget's parent does not implement HasWidgets");
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_0('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

function $sinkEvents_0(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this$static.element, eventBitsToAdd | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= eventBitsToAdd);
}

defineClass(11, 13, $intern_10);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.isAttached = function isAttached(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad(){
}
;
_.onUnload = function onUnload(){
}
;
_.sinkEvents = function sinkEvents_1(eventBitsToAdd){
  $sinkEvents_0(this, eventBitsToAdd);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 11);
defineClass(190, 11, $intern_11);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 190);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_1(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , $getParentElement(elem)), elem);
    $remove_1(this$static.children, w);
  }
  return true;
}

function ComplexPanel(){
  this.children = new WidgetCollection(this);
}

defineClass(65, 190, $intern_11);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove(w){
  return $remove(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 65);
function $add_0(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(87, 65, $intern_11);
_.remove = function remove_0(w){
  var removed;
  removed = $remove(this, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 87);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next(), 11);
    try {
      c.execute(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_3(caught, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(88, 66, $intern_1, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 88);
function AttachDetachException$1(){
}

defineClass(89, 1, {}, AttachDetachException$1);
_.execute = function execute(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 89);
function AttachDetachException$2(){
}

defineClass(90, 1, {}, AttachDetachException$2);
_.execute = function execute_0(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 90);
function FocusWidget(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(70, 11, $intern_10);
_.getTabIndex = function getTabIndex(){
  return $getTabIndex(($clinit_DOM() , this.element));
}
;
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = this.getTabIndex();
  -1 == tabIndex && this.setTabIndex(0);
}
;
_.setTabIndex = function setTabIndex(index_0){
  $setTabIndex(($clinit_DOM() , this.element), index_0);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 70);
function $setHTML(this$static, html){
  $setInnerHTML(($clinit_DOM() , this$static.element), html);
}

function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(71, 70, $intern_10);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 71);
function Button(){
  var e;
  ButtonBase.call(this, (e = $doc.createElement('BUTTON') , e.setAttribute('type', 'button') , e));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Button');
}

defineClass(72, 71, $intern_10, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 72);
function $getValue(this$static){
  return this$static.attached?($clinit_Boolean() , $isChecked(this$static.inputElem)?TRUE:FALSE):($clinit_Boolean() , $isDefaultChecked(this$static.inputElem)?TRUE:FALSE);
}

function $setHTML_0(this$static, html){
  $setTextOrHtml(this$static.directionalTextHelper, html);
}

function $setValue(this$static, value_0){
  var oldValue;
  !value_0 && (value_0 = ($clinit_Boolean() , FALSE));
  oldValue = this$static.attached?($clinit_Boolean() , $isChecked(this$static.inputElem)?TRUE:FALSE):($clinit_Boolean() , $isDefaultChecked(this$static.inputElem)?TRUE:FALSE);
  $setChecked(this$static.inputElem, value_0.value_0);
  $setDefaultChecked(this$static.inputElem, value_0.value_0);
  if (!!oldValue && oldValue.value_0 == value_0.value_0) {
    return;
  }
}

function CheckBox(){
  var e;
  CheckBox_0.call(this, ($clinit_DOM() , e = $doc.createElement('INPUT') , e.type = 'checkbox' , e.value = 'on' , e));
  $setClassName(this.element, 'gwt-CheckBox');
}

function CheckBox_0(elem){
  var uid;
  ButtonBase.call(this, ($clinit_DOM() , $doc.createElement('span')));
  this.inputElem = elem;
  this.labelElem = $doc.createElement('label');
  $appendChild(this.element, this.inputElem);
  $appendChild(this.element, this.labelElem);
  uid = $createUniqueId($doc);
  $setPropertyString(this.inputElem, 'id', uid);
  $setHtmlFor(this.labelElem, uid);
  this.directionalTextHelper = new DirectionalTextHelper(this.labelElem);
  !!this.inputElem && $setTabIndex(this.inputElem, 0);
}

defineClass(14, 71, $intern_10, CheckBox);
_.getTabIndex = function getTabIndex_0(){
  return $getTabIndex(this.inputElem);
}
;
_.onLoad = function onLoad_0(){
  $clinit_DOM();
  setEventListener(this.inputElem, this);
}
;
_.onUnload = function onUnload_0(){
  $clinit_DOM();
  setEventListener(this.inputElem, null);
  $setValue(this, this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE:FALSE):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE:FALSE));
}
;
_.setTabIndex = function setTabIndex_0(index_0){
  !!this.inputElem && $setTabIndex(this.inputElem, index_0);
}
;
_.sinkEvents = function sinkEvents_2(eventBitsToAdd){
  this.eventsToSink == -1?sinkEvents_0(this.inputElem, eventBitsToAdd | getEventsSunk(this.inputElem)):this.eventsToSink == -1?sinkEvents(($clinit_DOM() , this.element), eventBitsToAdd | (this.element.__eventBits || 0)):(this.eventsToSink |= eventBitsToAdd);
}
;
var Lcom_google_gwt_user_client_ui_CheckBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CheckBox', 14);
function $checkInit(this$static){
  if (!this$static.widget) {
    throw new IllegalStateException_0('initWidget() is not called yet');
  }
}

function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget) {
    throw new IllegalStateException_0('Composite.initWidget() may only be called once.');
  }
  $removeFromParent(widget);
  elem = ($clinit_DOM() , widget.element);
  $setElement_0(this$static, elem);
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

defineClass(191, 11, $intern_10);
_.isAttached = function isAttached_0(){
  if (this.widget) {
    return this.widget.attached;
  }
  return false;
}
;
_.onAttach = function onAttach_1(){
  $checkInit(this);
  if (this.eventsToSink != -1) {
    $sinkEvents_0(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  $onAttach(this.widget);
  $clinit_DOM();
  setEventListener(this.element, this);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
  $onBrowserEvent(this.widget, event_0);
}
;
_.onDetach = function onDetach_0(){
  $onDetach(this.widget);
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement(this, $resolvePotentialElement());
  return $clinit_DOM() , this.element;
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 191);
function $setTextOrHtml(this$static, content_0){
  $setInnerHTML(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(135, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 135);
function $addAndReplaceElement(this$static, widget, toReplace){
  var children, next, toRemove;
  if (toReplace == ($clinit_DOM() , widget.element)) {
    return;
  }
  $removeFromParent(widget);
  toRemove = null;
  children = new WidgetCollection$WidgetIterator(this$static.children);
  while (children.index_0 < children.this$01.size_0) {
    next = $next(children);
    if ($isOrHasChild(toReplace, next.element)) {
      if (next.element == toReplace) {
        toRemove = next;
        break;
      }
      $remove_2(children);
    }
  }
  $add_1(this$static.children, widget);
  if (!toRemove) {
    $replaceChild(toReplace.parentNode, widget.element, toReplace);
  }
   else {
    $insertBefore(toReplace.parentNode, widget.element, toReplace);
    $remove(this$static, toRemove);
  }
  $setParent(widget, this$static);
}

function HTMLPanel(html){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
  $setInnerHTML(($clinit_DOM() , this.element), html);
}

defineClass(122, 65, $intern_11, HTMLPanel);
var Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLPanel', 122);
function $clinit_PotentialElement(){
  $clinit_PotentialElement = emptyMethod;
  declareShim();
}

function $setResolver(this$static, resolver){
  $clinit_PotentialElement();
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_4(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_0(){
  $clinit_RootPanel();
  var rp;
  rp = dynamicCast($get_0(rootPanels, null), 46);
  if (rp) {
    return rp;
  }
  rootPanels.size_0 == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  $put(rootPanels, null, rp);
  $add_3(widgetsToDetach, rp);
  return rp;
}

function getBodyElement(){
  $clinit_RootPanel();
  return $doc.body;
}

defineClass(46, 87, $intern_12);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 46);
function RootPanel$1(){
}

defineClass(92, 1, {}, RootPanel$1);
_.execute = function execute_1(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 92);
function RootPanel$2(){
}

defineClass(93, 1, {203:1, 78:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 93);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, getBodyElement());
}

defineClass(91, 46, $intern_12, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 91);
function ValueBoxBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(125, 70, $intern_10);
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  var type_0;
  type_0 = ($clinit_DOM() , $eventGetTypeInt(event_0.type));
  (type_0 & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_1(){
}
;
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase', 125);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = emptyMethod;
  $clinit_ValueBoxBase$TextAlignment();
}

function TextBoxBase(elem){
  ValueBoxBase.call(this, elem, (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser)));
}

defineClass(126, 125, $intern_10);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBoxBase', 126);
function TextArea_0(){
  $clinit_TextBoxBase();
  TextBoxBase.call(this, $doc.createElement('textarea'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-TextArea');
}

defineClass(127, 126, $intern_10, TextArea_0);
var Lcom_google_gwt_user_client_ui_TextArea_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextArea', 127);
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = emptyMethod;
  CENTER = new ValueBoxBase$TextAlignment$1;
  JUSTIFY = new ValueBoxBase$TextAlignment$2;
  LEFT = new ValueBoxBase$TextAlignment$3;
  RIGHT = new ValueBoxBase$TextAlignment$4;
}

function ValueBoxBase$TextAlignment(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_ValueBoxBase$TextAlignment();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, 1), $intern_3, 23, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(23, 7, $intern_13);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment', 23, Ljava_lang_Enum_2_classLit, values_1);
function ValueBoxBase$TextAlignment$1(){
  ValueBoxBase$TextAlignment.call(this, 'CENTER', 0);
}

defineClass(128, 23, $intern_13, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/1', 128, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$2(){
  ValueBoxBase$TextAlignment.call(this, 'JUSTIFY', 1);
}

defineClass(129, 23, $intern_13, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/2', 129, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$3(){
  ValueBoxBase$TextAlignment.call(this, 'LEFT', 2);
}

defineClass(130, 23, $intern_13, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/3', 130, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$4(){
  ValueBoxBase$TextAlignment.call(this, 'RIGHT', 3);
}

defineClass(131, 23, $intern_13, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/4', 131, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function $add_1(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_3, 11, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_0(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_1(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_0(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_3, 11, 4, 0, 1);
}

defineClass(118, 1, {}, WidgetCollection);
_.iterator = function iterator_1(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 118);
function $next(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function $remove_2(this$static){
  if (!this$static.currentWidget) {
    throw new IllegalStateException;
  }
  this$static.this$01.parent_0.remove(this$static.currentWidget);
  --this$static.index_0;
  this$static.currentWidget = null;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(59, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next = function next_0(){
  return $next(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 59);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('safari', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(53, 4, $intern_0);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 53);
defineClass(17, 53, $intern_0);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 17);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4):null);
}

defineClass(79, 17, $intern_0, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 79);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function SimpleEventBus$1(){
}

defineClass(116, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 116);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(117, 1, {204:1}, SimpleEventBus$2);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 117);
function $clinit_TaggerService_Proxy(){
  $clinit_TaggerService_Proxy = emptyMethod;
  SERIALIZER = new TaggerService_TypeSerializer;
}

function $createStreamWriter(this$static){
  var toReturn, clientSerializationStreamWriter;
  toReturn = (clientSerializationStreamWriter = new ClientSerializationStreamWriter(this$static.serializer, this$static.moduleBaseURL, this$static.serializationPolicyName) , clientSerializationStreamWriter.objectCount = 0 , $reset(clientSerializationStreamWriter.objectMap) , $reset(clientSerializationStreamWriter.stringMap) , clientSerializationStreamWriter.stringTable.array = initDim(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 3, 1) , clientSerializationStreamWriter.encodeBuffer = new StringBuilder , $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.moduleBaseURL) , $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.serializationPolicyStrongName) , clientSerializationStreamWriter);
  return toReturn;
}

function $makeHTML(this$static, input_0, tags, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static);
  try {
    streamWriter = ($isStatsAvailable() && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$01) , $writeString(helper.streamWriter, 'com.slaves.java.client.TaggerService') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 2) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, 'java.util.Collection'));
    $writeInt(streamWriter, $addString(streamWriter, input_0));
    $writeObject(streamWriter, tags);
    $finish_0(helper, callback, $clinit_RequestCallbackAdapter$ResponseReader());
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 42)) {
      ex = $e0;
      alert_0('sth happened, sry bud\n' + ex.detailMessage);
    }
     else 
      throw unwrap($e0);
  }
}

function TaggerService_Proxy(){
  $clinit_TaggerService_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), SERIALIZER);
}

defineClass(139, 138, {}, TaggerService_Proxy);
var SERIALIZER;
var Lcom_slaves_java_client_TaggerService_1Proxy_2_classLit = createForClass('com.slaves.java.client', 'TaggerService_Proxy', 139);
function $clinit_TaggerService_TypeSerializer(){
  var result, result_0;
  $clinit_TaggerService_TypeSerializer = emptyMethod;
  methodMapNative_0 = (result = {} , result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate, deserialize, serialize] , result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_0, deserialize_0] , result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_0] , result['java.lang.Boolean/476441737'] = [undefined, undefined, serialize_1] , result['java.lang.String/2004016611'] = [instantiate_1, deserialize_1, serialize_3] , result['[Ljava.lang.String;/2600011424'] = [undefined, undefined, serialize_2] , result['java.util.ArrayList/4159755760'] = [undefined, undefined, serialize_4] , result['java.util.Arrays$ArrayList/2507071751'] = [undefined, undefined, serialize_5] , result['java.util.Collections$EmptyList/4157118744'] = [undefined, undefined, serialize_7] , result['java.util.Collections$EmptySet/3523698179'] = [undefined, undefined, serialize_8] , result['java.util.Collections$SingletonList/1586180994'] = [undefined, undefined, serialize_9] , result['java.util.HashSet/3273092938'] = [undefined, undefined, serialize_10] , result['java.util.LinkedHashSet/95640124'] = [undefined, undefined, serialize_11] , result['java.util.LinkedList/3953877921'] = [undefined, undefined, serialize_12] , result['java.util.Stack/1346942793'] = [undefined, undefined, serialize_14] , result['java.util.TreeMap/1493889780'] = [undefined, undefined, serialize_15] , result['java.util.TreeSet/4043497002'] = [undefined, undefined, serialize_16] , result['java.util.Vector/3057315478'] = [undefined, undefined, serialize_17] , result);
  signatureMapNative_0 = (result_0 = [] , result_0[getHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533' , result_0[getHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298' , result_0[getHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109' , result_0[getHashCode(Ljava_lang_Boolean_2_classLit)] = 'java.lang.Boolean/476441737' , result_0[getHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611' , result_0[getHashCode(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1))] = '[Ljava.lang.String;/2600011424' , result_0[getHashCode(Ljava_util_ArrayList_2_classLit)] = 'java.util.ArrayList/4159755760' , result_0[getHashCode(Ljava_util_Arrays$ArrayList_2_classLit)] = 'java.util.Arrays$ArrayList/2507071751' , result_0[getHashCode(Ljava_util_Collections$EmptyList_2_classLit)] = 'java.util.Collections$EmptyList/4157118744' , result_0[getHashCode(Ljava_util_Collections$EmptySet_2_classLit)] = 'java.util.Collections$EmptySet/3523698179' , result_0[getHashCode(Ljava_util_Collections$SingletonList_2_classLit)] = 'java.util.Collections$SingletonList/1586180994' , result_0[getHashCode(Ljava_util_HashSet_2_classLit)] = 'java.util.HashSet/3273092938' , result_0[getHashCode(Ljava_util_LinkedHashSet_2_classLit)] = 'java.util.LinkedHashSet/95640124' , result_0[getHashCode(Ljava_util_LinkedList_2_classLit)] = 'java.util.LinkedList/3953877921' , result_0[getHashCode(Ljava_util_Stack_2_classLit)] = 'java.util.Stack/1346942793' , result_0[getHashCode(Ljava_util_TreeMap_2_classLit)] = 'java.util.TreeMap/1493889780' , result_0[getHashCode(Ljava_util_TreeSet_2_classLit)] = 'java.util.TreeSet/4043497002' , result_0[getHashCode(Ljava_util_Vector_2_classLit)] = 'java.util.Vector/3057315478' , result_0);
}

function TaggerService_TypeSerializer(){
  $clinit_TaggerService_TypeSerializer();
  SerializerBase.call(this, methodMapNative_0, signatureMapNative_0);
}

defineClass(143, 142, {}, TaggerService_TypeSerializer);
var methodMapNative_0, signatureMapNative_0;
var Lcom_slaves_java_client_TaggerService_1TypeSerializer_2_classLit = createForClass('com.slaves.java.client', 'TaggerService_TypeSerializer', 143);
function TaggerUI(){
  $initWidget(this, $build_f_HTMLPanel1(new TaggerUI_TaggerUIUiBinderImpl$Widgets(this)));
  $setId(this.taggedTextArea, 'taggedText');
  $addClassName(this.taggedTextArea, 'back');
  $setId(this.sidebar_0, 'sidebar');
  this.selectedTags = new HashSet;
  $addDomHandler(this.submit, new TaggerUI$ButtonClickHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $setVisible(this.returnBtn, false);
  $addDomHandler(this.returnBtn, new TaggerUI$1(this, this), (null , TYPE));
}

defineClass(94, 191, $intern_10, TaggerUI);
var Lcom_slaves_java_client_TaggerUI_2_classLit = createForClass('com.slaves.java.client', 'TaggerUI', 94);
function TaggerUI$ButtonClickHandler(this$0){
  this.this$01 = this$0;
}

defineClass(67, 1, $intern_14, TaggerUI$ButtonClickHandler);
_.onClick = function onClick(event_0){
  var callback, tagService;
  $getValue(this.this$01.CCCheckBox).value_0 && $add_3(this.this$01.selectedTags, 'CC');
  $getValue(this.this$01.CDCheckBox).value_0 && $add_3(this.this$01.selectedTags, 'CD');
  if ($getValue(this.this$01.DTCheckBox).value_0) {
    $add_3(this.this$01.selectedTags, 'DT');
    $add_3(this.this$01.selectedTags, 'PDT');
    $add_3(this.this$01.selectedTags, 'WDT');
  }
  $getValue(this.this$01.EXCheckBox).value_0 && $add_3(this.this$01.selectedTags, 'EX');
  $getValue(this.this$01.FWCheckBox).value_0 && $add_3(this.this$01.selectedTags, 'FW');
  $getValue(this.this$01.INCheckBox).value_0 && $add_3(this.this$01.selectedTags, 'IN');
  if ($getValue(this.this$01.JJCheckBox).value_0) {
    $add_3(this.this$01.selectedTags, 'JJ');
    $add_3(this.this$01.selectedTags, 'JJR');
    $add_3(this.this$01.selectedTags, 'JJS');
  }
  $getValue(this.this$01.LSCheckBox).value_0 && $add_3(this.this$01.selectedTags, 'LS');
  if ($getValue(this.this$01.NNCheckBox).value_0) {
    $add_3(this.this$01.selectedTags, 'NN');
    $add_3(this.this$01.selectedTags, 'NNS');
    $add_3(this.this$01.selectedTags, 'NNP');
    $add_3(this.this$01.selectedTags, 'NNPS');
    $add_3(this.this$01.selectedTags, 'PRP');
  }
  if ($getValue(this.this$01.POSCheckBox).value_0) {
    $add_3(this.this$01.selectedTags, 'POS');
    $add_3(this.this$01.selectedTags, 'PRPS');
  }
  if ($getValue(this.this$01.RBCheckBox).value_0) {
    $add_3(this.this$01.selectedTags, 'RB');
    $add_3(this.this$01.selectedTags, 'RBR');
    $add_3(this.this$01.selectedTags, 'RBS');
  }
  $getValue(this.this$01.RPCheckBox).value_0 && $add_3(this.this$01.selectedTags, 'RP');
  $getValue(this.this$01.SYMCheckBox).value_0 && $add_3(this.this$01.selectedTags, 'SYM');
  $getValue(this.this$01.UHCheckBox).value_0 && $add_3(this.this$01.selectedTags, 'UH');
  if ($getValue(this.this$01.VBCheckBox).value_0) {
    $add_3(this.this$01.selectedTags, 'VB');
    $add_3(this.this$01.selectedTags, 'MD');
    $add_3(this.this$01.selectedTags, 'VBG');
    $add_3(this.this$01.selectedTags, 'VBN');
    $add_3(this.this$01.selectedTags, 'VBP');
    $add_3(this.this$01.selectedTags, 'VBZ');
  }
  if ($getValue(this.this$01.WHCheckBox).value_0) {
    $add_3(this.this$01.selectedTags, 'WRB');
    $add_3(this.this$01.selectedTags, 'WP');
    $add_3(this.this$01.selectedTags, 'WPS');
  }
  tagService = new TaggerService_Proxy;
  callback = new TaggerUI$ButtonClickHandler$1(this);
  $makeHTML(tagService, $getPropertyString($getElement(this.this$01.text_0), 'value'), this.this$01.selectedTags, callback);
}
;
var Lcom_slaves_java_client_TaggerUI$ButtonClickHandler_2_classLit = createForClass('com.slaves.java.client', 'TaggerUI/ButtonClickHandler', 67);
function TaggerUI$1(this$0, this$0_1){
  this.this$02 = this$0_1;
  TaggerUI$ButtonClickHandler.call(this, this$0);
}

defineClass(96, 67, $intern_14, TaggerUI$1);
_.onClick = function onClick_0(e){
  $setInnerHTML(this.this$02.taggedTextArea, '');
  $removeClassName(this.this$02.taggedTextArea, 'from');
  $addClassName(this.this$02.taggedTextArea, 'back');
  $setVisible(this.this$02.text_0, true);
  $setVisible(this.this$02.submit, true);
  $removeClassName(this.this$02.sidebar_0, 'invisible');
  $setVisible(this.this$02.returnBtn, false);
  this.this$02.selectedTags = new HashSet;
}
;
var Lcom_slaves_java_client_TaggerUI$1_2_classLit = createForClass('com.slaves.java.client', 'TaggerUI/1', 96);
function $onSuccess(this$static, html){
  $setInnerHTML(this$static.this$11.this$01.taggedTextArea, html);
  $removeClassName(this$static.this$11.this$01.taggedTextArea, 'back');
  $addClassName(this$static.this$11.this$01.taggedTextArea, 'front');
  $setVisible(this$static.this$11.this$01.text_0, false);
  $setVisible(this$static.this$11.this$01.submit, false);
  $addClassName(this$static.this$11.this$01.sidebar_0, 'invisible');
  $setVisible(this$static.this$11.this$01.returnBtn, true);
}

function TaggerUI$ButtonClickHandler$1(this$1){
  this.this$11 = this$1;
}

defineClass(95, 1, {}, TaggerUI$ButtonClickHandler$1);
var Lcom_slaves_java_client_TaggerUI$ButtonClickHandler$1_2_classLit = createForClass('com.slaves.java.client', 'TaggerUI/ButtonClickHandler/1', 95);
function $build_f_HTMLPanel1(this$static){
  var __attachRecord__, f_HTMLPanel1, sidebar_0, taggedTextArea, CCCheckBox, sb, CDCheckBox, sb_0, DTCheckBox, sb_1, EXCheckBox, sb_2, FWCheckBox, sb_3, INCheckBox, sb_4, JJCheckBox, sb_5, LSCheckBox, sb_6, NNCheckBox, sb_7, POSCheckBox, sb_8, RBCheckBox, sb_9, RPCheckBox, sb_10, SYMCheckBox, sb_11, UHCheckBox, sb_12, VBCheckBox, sb_13, WHCheckBox, sb_14, text_0, submit, returnBtn, sb_15, sb_16;
  f_HTMLPanel1 = new HTMLPanel($html19(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10, this$static.domId11, this$static.domId12, this$static.domId13, this$static.domId14, this$static.domId15, this$static.domId16, this$static.domId17, this$static.domId18, this$static.domId19, this$static.domId20).html);
  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));
  sidebar_0 = $get(new LazyDomElement(this$static.domId0));
  this$static.owner.sidebar_0 = sidebar_0;
  $get(this$static.domId1Element);
  $get(this$static.domId2Element);
  $get(this$static.domId3Element);
  $get(this$static.domId4Element);
  $get(this$static.domId5Element);
  $get(this$static.domId6Element);
  $get(this$static.domId7Element);
  $get(this$static.domId8Element);
  $get(this$static.domId9Element);
  $get(this$static.domId10Element);
  $get(this$static.domId11Element);
  $get(this$static.domId12Element);
  $get(this$static.domId13Element);
  $get(this$static.domId14Element);
  $get(this$static.domId15Element);
  $get(this$static.domId16Element);
  $get(this$static.domId17Element);
  taggedTextArea = $get(new LazyDomElement(this$static.domId18));
  this$static.owner.taggedTextArea = taggedTextArea;
  $get(this$static.domId19Element);
  $get(this$static.domId20Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(f_HTMLPanel1, (CCCheckBox = new CheckBox , $setHTML_0(CCCheckBox, (sb = new StringBuilder , sb.string += 'conjunctions' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , this$static.owner.CCCheckBox = CCCheckBox , CCCheckBox), $get(this$static.domId1Element));
  $addAndReplaceElement(f_HTMLPanel1, (CDCheckBox = new CheckBox , $setHTML_0(CDCheckBox, (sb_0 = new StringBuilder , sb_0.string += 'cardinals' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , this$static.owner.CDCheckBox = CDCheckBox , CDCheckBox), $get(this$static.domId2Element));
  $addAndReplaceElement(f_HTMLPanel1, (DTCheckBox = new CheckBox , $setHTML_0(DTCheckBox, (sb_1 = new StringBuilder , sb_1.string += 'determiners' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , this$static.owner.DTCheckBox = DTCheckBox , DTCheckBox), $get(this$static.domId3Element));
  $addAndReplaceElement(f_HTMLPanel1, (EXCheckBox = new CheckBox , $setHTML_0(EXCheckBox, (sb_2 = new StringBuilder , sb_2.string += 'existential "there"' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , this$static.owner.EXCheckBox = EXCheckBox , EXCheckBox), $get(this$static.domId4Element));
  $addAndReplaceElement(f_HTMLPanel1, (FWCheckBox = new CheckBox , $setHTML_0(FWCheckBox, (sb_3 = new StringBuilder , sb_3.string += 'foreign words' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html) , this$static.owner.FWCheckBox = FWCheckBox , FWCheckBox), $get(this$static.domId5Element));
  $addAndReplaceElement(f_HTMLPanel1, (INCheckBox = new CheckBox , $setHTML_0(INCheckBox, (sb_4 = new StringBuilder , sb_4.string += 'prepositions' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html) , this$static.owner.INCheckBox = INCheckBox , INCheckBox), $get(this$static.domId6Element));
  $addAndReplaceElement(f_HTMLPanel1, (JJCheckBox = new CheckBox , $setHTML_0(JJCheckBox, (sb_5 = new StringBuilder , sb_5.string += 'adjectives' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_5.string)).html) , this$static.owner.JJCheckBox = JJCheckBox , JJCheckBox), $get(this$static.domId7Element));
  $addAndReplaceElement(f_HTMLPanel1, (LSCheckBox = new CheckBox , $setHTML_0(LSCheckBox, (sb_6 = new StringBuilder , sb_6.string += 'list markers' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_6.string)).html) , this$static.owner.LSCheckBox = LSCheckBox , LSCheckBox), $get(this$static.domId8Element));
  $addAndReplaceElement(f_HTMLPanel1, (NNCheckBox = new CheckBox , $setHTML_0(NNCheckBox, (sb_7 = new StringBuilder , sb_7.string += 'nouns' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_7.string)).html) , this$static.owner.NNCheckBox = NNCheckBox , NNCheckBox), $get(this$static.domId9Element));
  $addAndReplaceElement(f_HTMLPanel1, (POSCheckBox = new CheckBox , $setHTML_0(POSCheckBox, (sb_8 = new StringBuilder , sb_8.string += 'possession indicators' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_8.string)).html) , this$static.owner.POSCheckBox = POSCheckBox , POSCheckBox), $get(this$static.domId10Element));
  $addAndReplaceElement(f_HTMLPanel1, (RBCheckBox = new CheckBox , $setHTML_0(RBCheckBox, (sb_9 = new StringBuilder , sb_9.string += 'adverbs' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_9.string)).html) , this$static.owner.RBCheckBox = RBCheckBox , RBCheckBox), $get(this$static.domId11Element));
  $addAndReplaceElement(f_HTMLPanel1, (RPCheckBox = new CheckBox , $setHTML_0(RPCheckBox, (sb_10 = new StringBuilder , sb_10.string += 'particles' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_10.string)).html) , this$static.owner.RPCheckBox = RPCheckBox , RPCheckBox), $get(this$static.domId12Element));
  $addAndReplaceElement(f_HTMLPanel1, (SYMCheckBox = new CheckBox , $setHTML_0(SYMCheckBox, (sb_11 = new StringBuilder , sb_11.string += 'symbols' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_11.string)).html) , this$static.owner.SYMCheckBox = SYMCheckBox , SYMCheckBox), $get(this$static.domId13Element));
  $addAndReplaceElement(f_HTMLPanel1, (UHCheckBox = new CheckBox , $setHTML_0(UHCheckBox, (sb_12 = new StringBuilder , sb_12.string += 'interjections' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_12.string)).html) , this$static.owner.UHCheckBox = UHCheckBox , UHCheckBox), $get(this$static.domId14Element));
  $addAndReplaceElement(f_HTMLPanel1, (VBCheckBox = new CheckBox , $setHTML_0(VBCheckBox, (sb_13 = new StringBuilder , sb_13.string += 'verbs' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_13.string)).html) , this$static.owner.VBCheckBox = VBCheckBox , VBCheckBox), $get(this$static.domId15Element));
  $addAndReplaceElement(f_HTMLPanel1, (WHCheckBox = new CheckBox , $setHTML_0(WHCheckBox, (sb_14 = new StringBuilder , sb_14.string += '"wh-" pronouns' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_14.string)).html) , this$static.owner.WHCheckBox = WHCheckBox , WHCheckBox), $get(this$static.domId16Element));
  $addAndReplaceElement(f_HTMLPanel1, (text_0 = new TextArea_0 , this$static.owner.text_0 = text_0 , text_0), $get(this$static.domId17Element));
  $addAndReplaceElement(f_HTMLPanel1, (submit = new Button , $setHTML(submit, (sb_15 = new StringBuilder , sb_15.string += 'Tag my text' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_15.string)).html) , this$static.owner.submit = submit , submit), $get(this$static.domId19Element));
  $addAndReplaceElement(f_HTMLPanel1, (returnBtn = new Button , $setHTML(returnBtn, (sb_16 = new StringBuilder , sb_16.string += 'Back to text entry' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_16.string)).html) , this$static.owner.returnBtn = returnBtn , returnBtn), $get(this$static.domId20Element));
  return f_HTMLPanel1;
}

function TaggerUI_TaggerUIUiBinderImpl$Widgets(owner){
  var style;
  this.owner = owner;
  style = (new TaggerUI_TaggerUIUiBinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_TaggerUI_TaggerUIUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_0);
  $ensureInjected(style);
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId2 = $createUniqueId($doc);
  this.domId3 = $createUniqueId($doc);
  this.domId4 = $createUniqueId($doc);
  this.domId5 = $createUniqueId($doc);
  this.domId6 = $createUniqueId($doc);
  this.domId7 = $createUniqueId($doc);
  this.domId8 = $createUniqueId($doc);
  this.domId9 = $createUniqueId($doc);
  this.domId10 = $createUniqueId($doc);
  this.domId11 = $createUniqueId($doc);
  this.domId12 = $createUniqueId($doc);
  this.domId13 = $createUniqueId($doc);
  this.domId14 = $createUniqueId($doc);
  this.domId15 = $createUniqueId($doc);
  this.domId16 = $createUniqueId($doc);
  this.domId17 = $createUniqueId($doc);
  this.domId18 = $createUniqueId($doc);
  this.domId19 = $createUniqueId($doc);
  this.domId20 = $createUniqueId($doc);
  this.domId1Element = new LazyDomElement(this.domId1);
  this.domId2Element = new LazyDomElement(this.domId2);
  this.domId3Element = new LazyDomElement(this.domId3);
  this.domId4Element = new LazyDomElement(this.domId4);
  this.domId5Element = new LazyDomElement(this.domId5);
  this.domId6Element = new LazyDomElement(this.domId6);
  this.domId7Element = new LazyDomElement(this.domId7);
  this.domId8Element = new LazyDomElement(this.domId8);
  this.domId9Element = new LazyDomElement(this.domId9);
  this.domId10Element = new LazyDomElement(this.domId10);
  this.domId11Element = new LazyDomElement(this.domId11);
  this.domId12Element = new LazyDomElement(this.domId12);
  this.domId13Element = new LazyDomElement(this.domId13);
  this.domId14Element = new LazyDomElement(this.domId14);
  this.domId15Element = new LazyDomElement(this.domId15);
  this.domId16Element = new LazyDomElement(this.domId16);
  this.domId17Element = new LazyDomElement(this.domId17);
  this.domId19Element = new LazyDomElement(this.domId19);
  this.domId20Element = new LazyDomElement(this.domId20);
}

defineClass(110, 1, {}, TaggerUI_TaggerUIUiBinderImpl$Widgets);
var Lcom_slaves_java_client_TaggerUI_1TaggerUIUiBinderImpl$Widgets_2_classLit = createForClass('com.slaves.java.client', 'TaggerUI_TaggerUIUiBinderImpl/Widgets', 110);
function TaggerUI_TaggerUIUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
}

defineClass(132, 1, {}, TaggerUI_TaggerUIUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
var style_0;
var Lcom_slaves_java_client_TaggerUI_1TaggerUIUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.slaves.java.client', 'TaggerUI_TaggerUIUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 132);
function $ensureInjected(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push(toInject, '');
    schedule();
    return true;
  }
  return false;
}

function TaggerUI_TaggerUIUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(133, 1, {}, TaggerUI_TaggerUIUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lcom_slaves_java_client_TaggerUI_1TaggerUIUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.slaves.java.client', 'TaggerUI_TaggerUIUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 133);
function $clinit_TaggerUI_TaggerUIUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_TaggerUI_TaggerUIUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_0 = new TaggerUI_TaggerUIUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html19(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20){
  var sb;
  sb = new StringBuilder;
  sb.string += "<div class='main'> <div id='";
  $append(sb, htmlEscape(arg0));
  sb.string += "'> <span id='";
  $append(sb, htmlEscape(arg1));
  sb.string += "'><\/span><br> <span id='";
  $append(sb, htmlEscape(arg2));
  sb.string += "'><\/span><br> <span id='";
  $append(sb, htmlEscape(arg3));
  sb.string += "'><\/span><br> <span id='";
  $append(sb, htmlEscape(arg4));
  sb.string += "'><\/span><br> <span id='";
  $append(sb, htmlEscape(arg5));
  sb.string += "'><\/span><br> <span id='";
  $append(sb, htmlEscape(arg6));
  sb.string += "'><\/span><br> <span id='";
  $append(sb, htmlEscape(arg7));
  sb.string += "'><\/span><br> <span id='";
  $append(sb, htmlEscape(arg8));
  sb.string += "'><\/span><br> <span id='";
  $append(sb, htmlEscape(arg9));
  sb.string += "'><\/span><br> <span id='";
  $append(sb, htmlEscape(arg10));
  sb.string += "'><\/span><br> <span id='";
  $append(sb, htmlEscape(arg11));
  sb.string += "'><\/span><br> <span id='";
  $append(sb, htmlEscape(arg12));
  sb.string += "'><\/span><br> <span id='";
  $append(sb, htmlEscape(arg13));
  sb.string += "'><\/span><br> <span id='";
  $append(sb, htmlEscape(arg14));
  sb.string += "'><\/span><br> <span id='";
  $append(sb, htmlEscape(arg15));
  sb.string += "'><\/span><br> <span id='";
  $append(sb, htmlEscape(arg16));
  sb.string += "'><\/span><br> <\/div> <div id='textFrame'> <span id='";
  $append(sb, htmlEscape(arg17));
  sb.string += "'><\/span> <\/div> <div id='";
  $append(sb, htmlEscape(arg18));
  sb.string += "'><\/div> <div id='submitButton'> <span id='";
  $append(sb, htmlEscape(arg19));
  sb.string += "'><\/span> <span id='";
  $append(sb, htmlEscape(arg20));
  sb.string += "'><\/span> <\/div> <\/div>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(62, 1, {});
_.toString$ = function toString_9(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 62);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(44, 5, $intern_0, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 44);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE = new Boolean_0(false);
  TRUE = new Boolean_0(true);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

defineClass(37, 1, {3:1, 37:1, 10:1}, Boolean_0);
_.equals$ = function equals_3(o){
  return instanceOf(o, 37) && dynamicCast(o, 37).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_5(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_10(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 37);
function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(34, 5, $intern_0, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 34);
defineClass(60, 1, {3:1, 60:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 60);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(47, 5, $intern_0, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 47);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(30, 5, $intern_0, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 30);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(49, 5, $intern_0, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 49);
function Integer(value_0){
  this.value_0 = value_0;
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(27, 60, {3:1, 10:1, 27:1, 60:1}, Integer);
_.equals$ = function equals_4(o){
  return instanceOf(o, 27) && dynamicCast(o, 27).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_6(){
  return this.value_0;
}
;
_.toString$ = function toString_12(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 27);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, $intern_3, 27, 256, 0, 1);
}

var boxedValues_0;
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(29, 5, $intern_0, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 29);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(6, 62, {202:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 6);
function identityHashCode(o){
  return o == null?0:isJavaString(o)?getHashCode_0(o):getHashCode(o);
}

function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(54, 5, $intern_0, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 54);
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toString_0(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_0('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(188, 1, {});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.toString$ = function toString_13(){
  return $toString_0(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 188);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_0(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = new AbstractHashMap$EntrySetIterator(this$static.entrySet().this$01); $hasNext(iter);) {
    entry = (checkStructuralChange(iter.this$01, iter) , checkCriticalElement($hasNext(iter)) , dynamicCast(iter.current.next(), 15));
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_1(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(187, 1, {31:1});
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.equals$ = function equals_5(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 31)) {
    return false;
  }
  otherMap = dynamicCast(obj, 31);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(otherMap.entrySet().this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , dynamicCast(entry$iterator.current.next(), 15));
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_1(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode$ = function hashCode_7(){
  return hashCode_12(this.entrySet());
}
;
_.put = function put(key, value_0){
  throw new UnsupportedOperationException_0('Put not supported on this map');
}
;
_.size_1 = function size_1(){
  return this.entrySet().this$01.size_0;
}
;
_.toString$ = function toString_14(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_0('{');
  comma = false;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(this.entrySet().this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , dynamicCast(entry$iterator.current.next(), 15));
    comma?(sb.string += ', ' , sb):(comma = true);
    $append(sb, $toString_1(this, entry.getKey()));
    sb.string += '=';
    $append(sb, $toString_1(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 187);
function $containsKey(this$static, key){
  return isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_0(this$static, key){
  return isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_2(key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_2(key) === undefined);
}

function $put(this$static, key, value_0){
  return isJavaString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):this$static.stringMap.put_0(key, value_0);
}

function $remove_3(this$static, key){
  return $remove_5(this$static.hashCodeMap, key);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

function AbstractHashMap(){
  $reset(this);
}

defineClass(63, 187, {31:1});
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_2(key){
  return $get_0(this, key);
}
;
_.put = function put_0(key, value_0){
  return $putStringValue(this, key, value_0);
}
;
_.size_1 = function size_2(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 63);
defineClass(189, 188, {51:1});
_.equals$ = function equals_6(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 51)) {
    return false;
  }
  other = dynamicCast(o, 51);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_8(){
  return hashCode_12(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 189);
function $contains(this$static, o){
  if (instanceOf(o, 15)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 15));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(45, 189, {51:1}, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_2(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 45);
function $hasNext(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function $next_0(this$static){
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext(this$static)) , dynamicCast(this$static.current.next(), 15);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(28, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_0(){
  return $hasNext(this);
}
;
_.next = function next_1(){
  return $next_0(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 28);
defineClass(192, 188, {26:1});
_.add_0 = function add_0(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_1 = function add_1(obj){
  this.add_0(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_7(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 26)) {
    return false;
  }
  other = dynamicCast(o, 26);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next();
    elemOther = iterOther.next();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_9(){
  return hashCode_13(this);
}
;
_.iterator = function iterator_3(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 192);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(48, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_1(){
  return this.i < this.this$01_0.size_1();
}
;
_.next = function next_2(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_1(this.i++);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 48);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(68, 48, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_1(--this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 68);
function $iterator(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(64, 189, {51:1}, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_4(){
  return $iterator(this);
}
;
_.size_1 = function size_4(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 64);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(85, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_2(){
  return $hasNext(this.val$outerIter2);
}
;
_.next = function next_3(){
  var entry;
  entry = $next_0(this.val$outerIter2);
  return entry.getKey();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 85);
defineClass(83, 1, $intern_15);
_.equals$ = function equals_8(other){
  var entry;
  if (!instanceOf(other, 15)) {
    return false;
  }
  entry = dynamicCast(other, 15);
  return equals_13(this.key, entry.getKey()) && equals_13(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_10(){
  return hashCode_15(this.key) ^ hashCode_15(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_15(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 83);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(84, 83, $intern_15, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 84);
defineClass(193, 1, $intern_15);
_.equals$ = function equals_9(other){
  var entry;
  if (!instanceOf(other, 15)) {
    return false;
  }
  entry = dynamicCast(other, 15);
  return equals_13(this.getKey(), entry.getKey()) && equals_13(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_11(){
  return hashCode_15(this.getKey()) ^ hashCode_15(this.getValue());
}
;
_.toString$ = function toString_16(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 193);
function $add_2(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $get_1(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_0(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_13(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $set(this$static, index_0, o){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  setCheck(this$static.array, index_0, o);
  return previous;
}

function ArrayList(){
  this.array = initDim(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 3, 1);
}

function splice(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(32, 192, $intern_16, ArrayList);
_.add_0 = function add_2(index_0, o){
  checkPositionIndex(index_0, this.array.length);
  splice(this.array, index_0, 0, o);
}
;
_.add_1 = function add_3(o){
  return $add_2(this, o);
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_0(this, o, 0) != -1;
}
;
_.get_1 = function get_3(index_0){
  return $get_1(this, index_0);
}
;
_.size_1 = function size_5(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 32);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_12(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_13(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(97, 192, $intern_16, Collections$EmptyList);
_.contains_0 = function contains_3(object){
  return false;
}
;
_.get_1 = function get_4(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_5(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_6(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 97);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(98, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_3(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next = function next_4(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_1(){
  throw new NoSuchElementException;
}
;
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 98);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(123, 5, $intern_0, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 123);
function HashMap(){
  AbstractHashMap.call(this);
}

defineClass(24, 63, {3:1, 31:1}, HashMap);
_.equals = function equals_10(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode_1(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 24);
function $add_3(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_4(this$static, o){
  return $remove_3(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(38, 189, {3:1, 51:1}, HashSet);
_.contains_0 = function contains_4(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_6(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.size_1 = function size_7(){
  return this.map_0.size_0;
}
;
_.toString$ = function toString_17(){
  return $toString_0(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 38);
function IdentityHashMap(){
  AbstractHashMap.call(this);
}

defineClass(168, 63, {3:1, 31:1}, IdentityHashMap);
_.equals$ = function equals_11(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 31)) {
    return false;
  }
  otherMap = dynamicCast(obj, 31);
  if (this.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(otherMap.entrySet().this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , dynamicCast(entry$iterator.current.next(), 15));
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(isJavaString(otherKey)?$hasStringValue(this, otherKey):!!$getEntry(this.hashCodeMap, otherKey))) {
      return false;
    }
    if (maskUndefined(otherValue) !== maskUndefined(isJavaString(otherKey)?$getStringValue(this, otherKey):getEntryValueOrNull($getEntry(this.hashCodeMap, otherKey)))) {
      return false;
    }
  }
  return true;
}
;
_.equals = function equals_12(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2);
}
;
_.getHashCode = function getHashCode_2(key){
  return getHashCode(key);
}
;
_.hashCode$ = function hashCode_14(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , dynamicCast(entry$iterator.current.next(), 15));
    hashCode += identityHashCode(entry.getKey());
    hashCode += identityHashCode(entry.getValue());
  }
  return hashCode;
}
;
var Ljava_util_IdentityHashMap_2_classLit = createForClass('java.util', 'IdentityHashMap', 168);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + this$static.host.getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this$static.host.equals(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_0(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key == null?'0':'' + this$static.host.getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.host.equals(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_5(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = !key?'0':'' + this$static.host.getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if (this$static.host.equals(key, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(73, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 73);
function $hasNext_0(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_3, 15, 0, 0, 1);
}

defineClass(108, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_4(){
  return $hasNext_0(this);
}
;
_.next = function next_5(){
  return checkCriticalElement($hasNext_0(this)) , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 108);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(106, 73, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_1(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 106);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(){
  ArrayList.call(this);
}

defineClass(107, 32, $intern_16, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 107);
function InternalJsMapFactory(){
}

defineClass(103, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 103);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(105, 103, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 105);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(104, 103, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 104);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_0(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $set_0(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(55, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_2 = function get_5(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put_0 = function put_1(key, value_0){
  return $put_1(this, key, value_0);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 55);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(102, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_5(){
  return this.i < this.val$keys2.length;
}
;
_.next = function next_6(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.i++]);
}
;
_.i = 0;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 102);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(69, 193, $intern_15, InternalJsStringMap$2);
_.getKey = function getKey_0(){
  return this.val$key2;
}
;
_.getValue = function getValue_0(){
  return this.this$01.get_2(this.val$key2);
}
;
_.setValue = function setValue_0(object){
  return this.this$01.put_0(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 69);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(99, 55, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_1(entry);
    }
  }
  return list.iterator();
}
;
_.get_2 = function get_6(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1;
}
;
_.put_0 = function put_2(key, value_0){
  return $put_1(this, ':' + key, value_0);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 99);
function InternalJsStringMap$InternalJsStringMapLegacy$1(){
  ArrayList.call(this);
}

defineClass(101, 32, $intern_16, InternalJsStringMap$InternalJsStringMapLegacy$1);
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 101);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(100, 55, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 100);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(40, 5, $intern_0, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 40);
function equals_13(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_15(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

var Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 176), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 178), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 181), Ljava_util_Collections$EmptySet_2_classLit = createForClass('java.util', 'Collections/EmptySet', null), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry'), Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'XsrfToken', null), Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', null), Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', null), Ljava_util_LinkedHashSet_2_classLit = createForClass('java.util', 'LinkedHashSet', null), Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', null), Ljava_util_Vector_2_classLit = createForClass('java.util', 'Vector', null), Ljava_util_Stack_2_classLit = createForClass('java.util', 'Stack', null), Ljava_util_TreeMap_2_classLit = createForClass('java.util', 'TreeMap', null), Ljava_util_TreeSet_2_classLit = createForClass('java.util', 'TreeSet', null);
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=postagger-0.js

