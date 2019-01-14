// Compiled by ClojureScript 1.10.238 {}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__31285 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__31285)){
throw oops.state.prepare_error_from_call_site.call(null,msg,(function (){var data__31032__auto__ = data;
var or__3922__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5455__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var devtools__31033__auto__ = temp__5455__auto__;
var temp__5455__auto____$1 = (devtools__31033__auto__["toolbox"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var toolbox__31034__auto__ = temp__5455__auto____$1;
var temp__5455__auto____$2 = (toolbox__31034__auto__["envelope"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var envelope__31035__auto__ = temp__5455__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__31035__auto__)){
return envelope__31035__auto__.call(null,data__31032__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return data__31032__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__31285)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,(function (){var data__31032__auto__ = data;
var or__3922__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5455__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var devtools__31033__auto__ = temp__5455__auto__;
var temp__5455__auto____$1 = (devtools__31033__auto__["toolbox"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var toolbox__31034__auto__ = temp__5455__auto____$1;
var temp__5455__auto____$2 = (toolbox__31034__auto__["envelope"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var envelope__31035__auto__ = temp__5455__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__31035__auto__)){
return envelope__31035__auto__.call(null,data__31032__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return data__31032__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,false,G__31285)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31285)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__31286 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__31286)){
throw oops.state.prepare_error_from_call_site.call(null,msg,(function (){var data__31032__auto__ = data;
var or__3922__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5455__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var devtools__31033__auto__ = temp__5455__auto__;
var temp__5455__auto____$1 = (devtools__31033__auto__["toolbox"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var toolbox__31034__auto__ = temp__5455__auto____$1;
var temp__5455__auto____$2 = (toolbox__31034__auto__["envelope"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var envelope__31035__auto__ = temp__5455__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__31035__auto__)){
return envelope__31035__auto__.call(null,data__31032__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return data__31032__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__31286)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,(function (){var data__31032__auto__ = data;
var or__3922__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5455__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var devtools__31033__auto__ = temp__5455__auto__;
var temp__5455__auto____$1 = (devtools__31033__auto__["toolbox"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var toolbox__31034__auto__ = temp__5455__auto____$1;
var temp__5455__auto____$2 = (toolbox__31034__auto__["envelope"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var envelope__31035__auto__ = temp__5455__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__31035__auto__)){
return envelope__31035__auto__.call(null,data__31032__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return data__31032__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,false,G__31286)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31286)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31294 = arguments.length;
var i__4500__auto___31295 = (0);
while(true){
if((i__4500__auto___31295 < len__4499__auto___31294)){
args__4502__auto__.push((arguments[i__4500__auto___31295]));

var G__31296 = (i__4500__auto___31295 + (1));
i__4500__auto___31295 = G__31296;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__31289){
var vec__31290 = p__31289;
var info = cljs.core.nth.call(null,vec__31290,(0),null);

if(!(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id))){
var G__31293_31297 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__31293_31297)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__31293_31297)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__31293_31297)){
} else {
if(cljs.core._EQ_.call(null,null,G__31293_31297)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31293_31297)].join('')));

}
}
}
}
} else {
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq31287){
var G__31288 = cljs.core.first.call(null,seq31287);
var seq31287__$1 = cljs.core.next.call(null,seq31287);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31288,seq31287__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_31299 = oops.config.get_child_factory.call(null);
var child_factory_31299__$1 = (function (){var G__31300 = child_factory_31299;
var G__31300__$1 = (((G__31300 instanceof cljs.core.Keyword))?G__31300.fqn:null);
switch (G__31300__$1) {
case "js-obj":
return ((function (G__31300,G__31300__$1,child_factory_31299){
return (function (){
return {};
});
;})(G__31300,G__31300__$1,child_factory_31299))

break;
case "js-array":
return ((function (G__31300,G__31300__$1,child_factory_31299){
return (function (){
return [];
});
;})(G__31300,G__31300__$1,child_factory_31299))

break;
default:
return child_factory_31299;

}
})();

var child_obj_31298 = child_factory_31299__$1.call(null,obj,key);
(obj[key] = child_obj_31298);

return child_obj_31298;
});
oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,check_key_QMARK_){
if(((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.not.call(null,goog.isObject(obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):true
)))))))))){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);

if(cljs.core.truth_(check_key_QMARK_)){
if(((cljs.core._EQ_.call(null,mode,(0))) && (cljs.core.not.call(null,goog.object.containsKey(obj,key))))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
return true;
}
} else {
return true;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_31304 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_31304);

return selector_path_31304;
} else {
var selector_path_31305 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_31305);

return selector_path_31305;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5455__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if(cljs.core.truth_(temp__5455__auto__)){
var issue_31306 = temp__5455__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_31306);
} else {
return null;
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_31315 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_31315,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_31308 = (function (){var path_31307 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_31307,(0));

return path_31307;
})();
var len_31309 = path_31308.length;
var i_31310 = (0);
var obj_31311 = obj;
while(true){
if((i_31310 < len_31309)){
var mode_31312 = (path_31308[i_31310]);
var key_31313 = (path_31308[(i_31310 + (1))]);
var next_obj_31314 = oops.core.get_key_dynamically.call(null,obj_31311,key_31313,mode_31312);
var G__31316 = mode_31312;
switch (G__31316) {
case (0):
var G__31318 = (i_31310 + (2));
var G__31319 = next_obj_31314;
i_31310 = G__31318;
obj_31311 = G__31319;
continue;

break;
case (1):
if(!((next_obj_31314 == null))){
var G__31320 = (i_31310 + (2));
var G__31321 = next_obj_31314;
i_31310 = G__31320;
obj_31311 = G__31321;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_31314 == null))){
var G__31322 = (i_31310 + (2));
var G__31323 = next_obj_31314;
i_31310 = G__31322;
obj_31311 = G__31323;
continue;
} else {
var G__31324 = (i_31310 + (2));
var G__31325 = oops.core.punch_key_dynamically_BANG_.call(null,obj_31311,key_31313);
i_31310 = G__31324;
obj_31311 = G__31325;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31316)].join('')));

}
} else {
return obj_31311;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_31351 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_31351,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_31327 = (function (){var path_31326 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_31326,(0));

return path_31326;
})();
var len_31328 = path_31327.length;
if((len_31328 < (4))){
return [obj,(function (){var path_31330 = path_31327;
var len_31331 = path_31330.length;
var i_31332 = (0);
var obj_31333 = obj;
while(true){
if((i_31332 < len_31331)){
var mode_31334 = (path_31330[i_31332]);
var key_31335 = (path_31330[(i_31332 + (1))]);
var next_obj_31336 = oops.core.get_key_dynamically.call(null,obj_31333,key_31335,mode_31334);
var G__31352 = mode_31334;
switch (G__31352) {
case (0):
var G__31356 = (i_31332 + (2));
var G__31357 = next_obj_31336;
i_31332 = G__31356;
obj_31333 = G__31357;
continue;

break;
case (1):
if(!((next_obj_31336 == null))){
var G__31358 = (i_31332 + (2));
var G__31359 = next_obj_31336;
i_31332 = G__31358;
obj_31333 = G__31359;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_31336 == null))){
var G__31360 = (i_31332 + (2));
var G__31361 = next_obj_31336;
i_31332 = G__31360;
obj_31333 = G__31361;
continue;
} else {
var G__31362 = (i_31332 + (2));
var G__31363 = oops.core.punch_key_dynamically_BANG_.call(null,obj_31333,key_31335);
i_31332 = G__31362;
obj_31333 = G__31363;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31352)].join('')));

}
} else {
return obj_31333;
}
break;
}
})()];
} else {
var target_obj_31329 = (function (){var path_31337 = path_31327.slice((0),(len_31328 - (2)));
var len_31338 = path_31337.length;
var i_31339 = (0);
var obj_31340 = obj;
while(true){
if((i_31339 < len_31338)){
var mode_31341 = (path_31337[i_31339]);
var key_31342 = (path_31337[(i_31339 + (1))]);
var next_obj_31343 = oops.core.get_key_dynamically.call(null,obj_31340,key_31342,mode_31341);
var G__31353 = mode_31341;
switch (G__31353) {
case (0):
var G__31365 = (i_31339 + (2));
var G__31366 = next_obj_31343;
i_31339 = G__31365;
obj_31340 = G__31366;
continue;

break;
case (1):
if(!((next_obj_31343 == null))){
var G__31367 = (i_31339 + (2));
var G__31368 = next_obj_31343;
i_31339 = G__31367;
obj_31340 = G__31368;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_31343 == null))){
var G__31369 = (i_31339 + (2));
var G__31370 = next_obj_31343;
i_31339 = G__31369;
obj_31340 = G__31370;
continue;
} else {
var G__31371 = (i_31339 + (2));
var G__31372 = oops.core.punch_key_dynamically_BANG_.call(null,obj_31340,key_31342);
i_31339 = G__31371;
obj_31340 = G__31372;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31353)].join('')));

}
} else {
return obj_31340;
}
break;
}
})();
return [target_obj_31329,(function (){var path_31344 = [(path_31327[(len_31328 - (2))]),(path_31327[(len_31328 - (1))])];
var len_31345 = path_31344.length;
var i_31346 = (0);
var obj_31347 = target_obj_31329;
while(true){
if((i_31346 < len_31345)){
var mode_31348 = (path_31344[i_31346]);
var key_31349 = (path_31344[(i_31346 + (1))]);
var next_obj_31350 = oops.core.get_key_dynamically.call(null,obj_31347,key_31349,mode_31348);
var G__31354 = mode_31348;
switch (G__31354) {
case (0):
var G__31374 = (i_31346 + (2));
var G__31375 = next_obj_31350;
i_31346 = G__31374;
obj_31347 = G__31375;
continue;

break;
case (1):
if(!((next_obj_31350 == null))){
var G__31376 = (i_31346 + (2));
var G__31377 = next_obj_31350;
i_31346 = G__31376;
obj_31347 = G__31377;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_31350 == null))){
var G__31378 = (i_31346 + (2));
var G__31379 = next_obj_31350;
i_31346 = G__31378;
obj_31347 = G__31379;
continue;
} else {
var G__31380 = (i_31346 + (2));
var G__31381 = oops.core.punch_key_dynamically_BANG_.call(null,obj_31347,key_31349);
i_31346 = G__31380;
obj_31347 = G__31381;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31354)].join('')));

}
} else {
return obj_31347;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_31396 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_31396,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_31383 = (function (){var path_31382 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_31382,(1));

return path_31382;
})();
var len_31386 = path_31383.length;
var parent_obj_path_31387 = path_31383.slice((0),(len_31386 - (2)));
var key_31384 = (path_31383[(len_31386 - (1))]);
var mode_31385 = (path_31383[(len_31386 - (2))]);
var parent_obj_31388 = (function (){var path_31389 = parent_obj_path_31387;
var len_31390 = path_31389.length;
var i_31391 = (0);
var obj_31392 = obj;
while(true){
if((i_31391 < len_31390)){
var mode_31393 = (path_31389[i_31391]);
var key_31394 = (path_31389[(i_31391 + (1))]);
var next_obj_31395 = oops.core.get_key_dynamically.call(null,obj_31392,key_31394,mode_31393);
var G__31397 = mode_31393;
switch (G__31397) {
case (0):
var G__31399 = (i_31391 + (2));
var G__31400 = next_obj_31395;
i_31391 = G__31399;
obj_31392 = G__31400;
continue;

break;
case (1):
if(!((next_obj_31395 == null))){
var G__31401 = (i_31391 + (2));
var G__31402 = next_obj_31395;
i_31391 = G__31401;
obj_31392 = G__31402;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_31395 == null))){
var G__31403 = (i_31391 + (2));
var G__31404 = next_obj_31395;
i_31391 = G__31403;
obj_31392 = G__31404;
continue;
} else {
var G__31405 = (i_31391 + (2));
var G__31406 = oops.core.punch_key_dynamically_BANG_.call(null,obj_31392,key_31394);
i_31391 = G__31405;
obj_31392 = G__31406;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31397)].join('')));

}
} else {
return obj_31392;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_31388,key_31384,val,mode_31385);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1547484323974
