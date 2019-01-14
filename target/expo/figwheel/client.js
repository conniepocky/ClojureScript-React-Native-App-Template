// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e31710){if((e31710 instanceof Error)){
var e = e31710;
return "Error: Unable to stringify";
} else {
throw e31710;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31713 = arguments.length;
switch (G__31713) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31711_SHARP_){
if(typeof p1__31711_SHARP_ === 'string'){
return p1__31711_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31711_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31716 = arguments.length;
var i__4500__auto___31717 = (0);
while(true){
if((i__4500__auto___31717 < len__4499__auto___31716)){
args__4502__auto__.push((arguments[i__4500__auto___31717]));

var G__31718 = (i__4500__auto___31717 + (1));
i__4500__auto___31717 = G__31718;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31715){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31715));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31720 = arguments.length;
var i__4500__auto___31721 = (0);
while(true){
if((i__4500__auto___31721 < len__4499__auto___31720)){
args__4502__auto__.push((arguments[i__4500__auto___31721]));

var G__31722 = (i__4500__auto___31721 + (1));
i__4500__auto___31721 = G__31722;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31719){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31719));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31723){
var map__31724 = p__31723;
var map__31724__$1 = ((((!((map__31724 == null)))?(((((map__31724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31724):map__31724);
var message = cljs.core.get.call(null,map__31724__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31724__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27080__auto___31803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___31803,ch){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___31803,ch){
return (function (state_31775){
var state_val_31776 = (state_31775[(1)]);
if((state_val_31776 === (7))){
var inst_31771 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31777_31804 = state_31775__$1;
(statearr_31777_31804[(2)] = inst_31771);

(statearr_31777_31804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (1))){
var state_31775__$1 = state_31775;
var statearr_31778_31805 = state_31775__$1;
(statearr_31778_31805[(2)] = null);

(statearr_31778_31805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (4))){
var inst_31728 = (state_31775[(7)]);
var inst_31728__$1 = (state_31775[(2)]);
var state_31775__$1 = (function (){var statearr_31779 = state_31775;
(statearr_31779[(7)] = inst_31728__$1);

return statearr_31779;
})();
if(cljs.core.truth_(inst_31728__$1)){
var statearr_31780_31806 = state_31775__$1;
(statearr_31780_31806[(1)] = (5));

} else {
var statearr_31781_31807 = state_31775__$1;
(statearr_31781_31807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (15))){
var inst_31735 = (state_31775[(8)]);
var inst_31750 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31735);
var inst_31751 = cljs.core.first.call(null,inst_31750);
var inst_31752 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31751);
var inst_31753 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31752)].join('');
var inst_31754 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31753);
var state_31775__$1 = state_31775;
var statearr_31782_31808 = state_31775__$1;
(statearr_31782_31808[(2)] = inst_31754);

(statearr_31782_31808[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (13))){
var inst_31759 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31783_31809 = state_31775__$1;
(statearr_31783_31809[(2)] = inst_31759);

(statearr_31783_31809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (6))){
var state_31775__$1 = state_31775;
var statearr_31784_31810 = state_31775__$1;
(statearr_31784_31810[(2)] = null);

(statearr_31784_31810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (17))){
var inst_31757 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31785_31811 = state_31775__$1;
(statearr_31785_31811[(2)] = inst_31757);

(statearr_31785_31811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (3))){
var inst_31773 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31775__$1,inst_31773);
} else {
if((state_val_31776 === (12))){
var inst_31734 = (state_31775[(9)]);
var inst_31748 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31734,opts);
var state_31775__$1 = state_31775;
if(cljs.core.truth_(inst_31748)){
var statearr_31786_31812 = state_31775__$1;
(statearr_31786_31812[(1)] = (15));

} else {
var statearr_31787_31813 = state_31775__$1;
(statearr_31787_31813[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (2))){
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31775__$1,(4),ch);
} else {
if((state_val_31776 === (11))){
var inst_31735 = (state_31775[(8)]);
var inst_31740 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31741 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31735);
var inst_31742 = cljs.core.async.timeout.call(null,(1000));
var inst_31743 = [inst_31741,inst_31742];
var inst_31744 = (new cljs.core.PersistentVector(null,2,(5),inst_31740,inst_31743,null));
var state_31775__$1 = state_31775;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31775__$1,(14),inst_31744);
} else {
if((state_val_31776 === (9))){
var inst_31735 = (state_31775[(8)]);
var inst_31761 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31762 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31735);
var inst_31763 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31762);
var inst_31764 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31763)].join('');
var inst_31765 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31764);
var state_31775__$1 = (function (){var statearr_31788 = state_31775;
(statearr_31788[(10)] = inst_31761);

return statearr_31788;
})();
var statearr_31789_31814 = state_31775__$1;
(statearr_31789_31814[(2)] = inst_31765);

(statearr_31789_31814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (5))){
var inst_31728 = (state_31775[(7)]);
var inst_31730 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31731 = (new cljs.core.PersistentArrayMap(null,2,inst_31730,null));
var inst_31732 = (new cljs.core.PersistentHashSet(null,inst_31731,null));
var inst_31733 = figwheel.client.focus_msgs.call(null,inst_31732,inst_31728);
var inst_31734 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31733);
var inst_31735 = cljs.core.first.call(null,inst_31733);
var inst_31736 = figwheel.client.autoload_QMARK_.call(null);
var state_31775__$1 = (function (){var statearr_31790 = state_31775;
(statearr_31790[(8)] = inst_31735);

(statearr_31790[(9)] = inst_31734);

return statearr_31790;
})();
if(cljs.core.truth_(inst_31736)){
var statearr_31791_31815 = state_31775__$1;
(statearr_31791_31815[(1)] = (8));

} else {
var statearr_31792_31816 = state_31775__$1;
(statearr_31792_31816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (14))){
var inst_31746 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31793_31817 = state_31775__$1;
(statearr_31793_31817[(2)] = inst_31746);

(statearr_31793_31817[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (16))){
var state_31775__$1 = state_31775;
var statearr_31794_31818 = state_31775__$1;
(statearr_31794_31818[(2)] = null);

(statearr_31794_31818[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (10))){
var inst_31767 = (state_31775[(2)]);
var state_31775__$1 = (function (){var statearr_31795 = state_31775;
(statearr_31795[(11)] = inst_31767);

return statearr_31795;
})();
var statearr_31796_31819 = state_31775__$1;
(statearr_31796_31819[(2)] = null);

(statearr_31796_31819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (8))){
var inst_31734 = (state_31775[(9)]);
var inst_31738 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31734,opts);
var state_31775__$1 = state_31775;
if(cljs.core.truth_(inst_31738)){
var statearr_31797_31820 = state_31775__$1;
(statearr_31797_31820[(1)] = (11));

} else {
var statearr_31798_31821 = state_31775__$1;
(statearr_31798_31821[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27080__auto___31803,ch))
;
return ((function (switch__26990__auto__,c__27080__auto___31803,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26991__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26991__auto____0 = (function (){
var statearr_31799 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31799[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26991__auto__);

(statearr_31799[(1)] = (1));

return statearr_31799;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26991__auto____1 = (function (state_31775){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_31775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e31800){if((e31800 instanceof Object)){
var ex__26994__auto__ = e31800;
var statearr_31801_31822 = state_31775;
(statearr_31801_31822[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31823 = state_31775;
state_31775 = G__31823;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26991__auto__ = function(state_31775){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26991__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26991__auto____1.call(this,state_31775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26991__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26991__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___31803,ch))
})();
var state__27082__auto__ = (function (){var statearr_31802 = f__27081__auto__.call(null);
(statearr_31802[(6)] = c__27080__auto___31803);

return statearr_31802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___31803,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31824_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31824_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31826 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31826){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e31825){if((e31825 instanceof Error)){
var e = e31825;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31826], null));
} else {
var e = e31825;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_31826))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31827){
var map__31828 = p__31827;
var map__31828__$1 = ((((!((map__31828 == null)))?(((((map__31828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31828):map__31828);
var opts = map__31828__$1;
var build_id = cljs.core.get.call(null,map__31828__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31828,map__31828__$1,opts,build_id){
return (function (p__31830){
var vec__31831 = p__31830;
var seq__31832 = cljs.core.seq.call(null,vec__31831);
var first__31833 = cljs.core.first.call(null,seq__31832);
var seq__31832__$1 = cljs.core.next.call(null,seq__31832);
var map__31834 = first__31833;
var map__31834__$1 = ((((!((map__31834 == null)))?(((((map__31834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31834):map__31834);
var msg = map__31834__$1;
var msg_name = cljs.core.get.call(null,map__31834__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31832__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31831,seq__31832,first__31833,seq__31832__$1,map__31834,map__31834__$1,msg,msg_name,_,map__31828,map__31828__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31831,seq__31832,first__31833,seq__31832__$1,map__31834,map__31834__$1,msg,msg_name,_,map__31828,map__31828__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31828,map__31828__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31836){
var vec__31837 = p__31836;
var seq__31838 = cljs.core.seq.call(null,vec__31837);
var first__31839 = cljs.core.first.call(null,seq__31838);
var seq__31838__$1 = cljs.core.next.call(null,seq__31838);
var map__31840 = first__31839;
var map__31840__$1 = ((((!((map__31840 == null)))?(((((map__31840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31840):map__31840);
var msg = map__31840__$1;
var msg_name = cljs.core.get.call(null,map__31840__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31838__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31842){
var map__31843 = p__31842;
var map__31843__$1 = ((((!((map__31843 == null)))?(((((map__31843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31843):map__31843);
var on_compile_warning = cljs.core.get.call(null,map__31843__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31843__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31843,map__31843__$1,on_compile_warning,on_compile_fail){
return (function (p__31845){
var vec__31846 = p__31845;
var seq__31847 = cljs.core.seq.call(null,vec__31846);
var first__31848 = cljs.core.first.call(null,seq__31847);
var seq__31847__$1 = cljs.core.next.call(null,seq__31847);
var map__31849 = first__31848;
var map__31849__$1 = ((((!((map__31849 == null)))?(((((map__31849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31849):map__31849);
var msg = map__31849__$1;
var msg_name = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31847__$1;
var pred__31851 = cljs.core._EQ_;
var expr__31852 = msg_name;
if(cljs.core.truth_(pred__31851.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31852))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31851.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31852))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31843,map__31843__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto__,msg_hist,msg_names,msg){
return (function (state_31941){
var state_val_31942 = (state_31941[(1)]);
if((state_val_31942 === (7))){
var inst_31861 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
if(cljs.core.truth_(inst_31861)){
var statearr_31943_31990 = state_31941__$1;
(statearr_31943_31990[(1)] = (8));

} else {
var statearr_31944_31991 = state_31941__$1;
(statearr_31944_31991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (20))){
var inst_31935 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31945_31992 = state_31941__$1;
(statearr_31945_31992[(2)] = inst_31935);

(statearr_31945_31992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (27))){
var inst_31931 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31946_31993 = state_31941__$1;
(statearr_31946_31993[(2)] = inst_31931);

(statearr_31946_31993[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (1))){
var inst_31854 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31941__$1 = state_31941;
if(cljs.core.truth_(inst_31854)){
var statearr_31947_31994 = state_31941__$1;
(statearr_31947_31994[(1)] = (2));

} else {
var statearr_31948_31995 = state_31941__$1;
(statearr_31948_31995[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (24))){
var inst_31933 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31949_31996 = state_31941__$1;
(statearr_31949_31996[(2)] = inst_31933);

(statearr_31949_31996[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (4))){
var inst_31939 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31941__$1,inst_31939);
} else {
if((state_val_31942 === (15))){
var inst_31937 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31950_31997 = state_31941__$1;
(statearr_31950_31997[(2)] = inst_31937);

(statearr_31950_31997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (21))){
var inst_31890 = (state_31941[(2)]);
var inst_31891 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31892 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31891);
var state_31941__$1 = (function (){var statearr_31951 = state_31941;
(statearr_31951[(7)] = inst_31890);

return statearr_31951;
})();
var statearr_31952_31998 = state_31941__$1;
(statearr_31952_31998[(2)] = inst_31892);

(statearr_31952_31998[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (31))){
var inst_31920 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31941__$1 = state_31941;
if(cljs.core.truth_(inst_31920)){
var statearr_31953_31999 = state_31941__$1;
(statearr_31953_31999[(1)] = (34));

} else {
var statearr_31954_32000 = state_31941__$1;
(statearr_31954_32000[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (32))){
var inst_31929 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31955_32001 = state_31941__$1;
(statearr_31955_32001[(2)] = inst_31929);

(statearr_31955_32001[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (33))){
var inst_31916 = (state_31941[(2)]);
var inst_31917 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31918 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31917);
var state_31941__$1 = (function (){var statearr_31956 = state_31941;
(statearr_31956[(8)] = inst_31916);

return statearr_31956;
})();
var statearr_31957_32002 = state_31941__$1;
(statearr_31957_32002[(2)] = inst_31918);

(statearr_31957_32002[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (13))){
var inst_31875 = figwheel.client.heads_up.clear.call(null);
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31941__$1,(16),inst_31875);
} else {
if((state_val_31942 === (22))){
var inst_31896 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31897 = figwheel.client.heads_up.append_warning_message.call(null,inst_31896);
var state_31941__$1 = state_31941;
var statearr_31958_32003 = state_31941__$1;
(statearr_31958_32003[(2)] = inst_31897);

(statearr_31958_32003[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (36))){
var inst_31927 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31959_32004 = state_31941__$1;
(statearr_31959_32004[(2)] = inst_31927);

(statearr_31959_32004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (29))){
var inst_31907 = (state_31941[(2)]);
var inst_31908 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31909 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31908);
var state_31941__$1 = (function (){var statearr_31960 = state_31941;
(statearr_31960[(9)] = inst_31907);

return statearr_31960;
})();
var statearr_31961_32005 = state_31941__$1;
(statearr_31961_32005[(2)] = inst_31909);

(statearr_31961_32005[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (6))){
var inst_31856 = (state_31941[(10)]);
var state_31941__$1 = state_31941;
var statearr_31962_32006 = state_31941__$1;
(statearr_31962_32006[(2)] = inst_31856);

(statearr_31962_32006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (28))){
var inst_31903 = (state_31941[(2)]);
var inst_31904 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31905 = figwheel.client.heads_up.display_warning.call(null,inst_31904);
var state_31941__$1 = (function (){var statearr_31963 = state_31941;
(statearr_31963[(11)] = inst_31903);

return statearr_31963;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31941__$1,(29),inst_31905);
} else {
if((state_val_31942 === (25))){
var inst_31901 = figwheel.client.heads_up.clear.call(null);
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31941__$1,(28),inst_31901);
} else {
if((state_val_31942 === (34))){
var inst_31922 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31941__$1,(37),inst_31922);
} else {
if((state_val_31942 === (17))){
var inst_31881 = (state_31941[(2)]);
var inst_31882 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31883 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31882);
var state_31941__$1 = (function (){var statearr_31964 = state_31941;
(statearr_31964[(12)] = inst_31881);

return statearr_31964;
})();
var statearr_31965_32007 = state_31941__$1;
(statearr_31965_32007[(2)] = inst_31883);

(statearr_31965_32007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (3))){
var inst_31873 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31941__$1 = state_31941;
if(cljs.core.truth_(inst_31873)){
var statearr_31966_32008 = state_31941__$1;
(statearr_31966_32008[(1)] = (13));

} else {
var statearr_31967_32009 = state_31941__$1;
(statearr_31967_32009[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (12))){
var inst_31869 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31968_32010 = state_31941__$1;
(statearr_31968_32010[(2)] = inst_31869);

(statearr_31968_32010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (2))){
var inst_31856 = (state_31941[(10)]);
var inst_31856__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31941__$1 = (function (){var statearr_31969 = state_31941;
(statearr_31969[(10)] = inst_31856__$1);

return statearr_31969;
})();
if(cljs.core.truth_(inst_31856__$1)){
var statearr_31970_32011 = state_31941__$1;
(statearr_31970_32011[(1)] = (5));

} else {
var statearr_31971_32012 = state_31941__$1;
(statearr_31971_32012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (23))){
var inst_31899 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31941__$1 = state_31941;
if(cljs.core.truth_(inst_31899)){
var statearr_31972_32013 = state_31941__$1;
(statearr_31972_32013[(1)] = (25));

} else {
var statearr_31973_32014 = state_31941__$1;
(statearr_31973_32014[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (35))){
var state_31941__$1 = state_31941;
var statearr_31974_32015 = state_31941__$1;
(statearr_31974_32015[(2)] = null);

(statearr_31974_32015[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (19))){
var inst_31894 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31941__$1 = state_31941;
if(cljs.core.truth_(inst_31894)){
var statearr_31975_32016 = state_31941__$1;
(statearr_31975_32016[(1)] = (22));

} else {
var statearr_31976_32017 = state_31941__$1;
(statearr_31976_32017[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (11))){
var inst_31865 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31977_32018 = state_31941__$1;
(statearr_31977_32018[(2)] = inst_31865);

(statearr_31977_32018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (9))){
var inst_31867 = figwheel.client.heads_up.clear.call(null);
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31941__$1,(12),inst_31867);
} else {
if((state_val_31942 === (5))){
var inst_31858 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31941__$1 = state_31941;
var statearr_31978_32019 = state_31941__$1;
(statearr_31978_32019[(2)] = inst_31858);

(statearr_31978_32019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (14))){
var inst_31885 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31941__$1 = state_31941;
if(cljs.core.truth_(inst_31885)){
var statearr_31979_32020 = state_31941__$1;
(statearr_31979_32020[(1)] = (18));

} else {
var statearr_31980_32021 = state_31941__$1;
(statearr_31980_32021[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (26))){
var inst_31911 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31941__$1 = state_31941;
if(cljs.core.truth_(inst_31911)){
var statearr_31981_32022 = state_31941__$1;
(statearr_31981_32022[(1)] = (30));

} else {
var statearr_31982_32023 = state_31941__$1;
(statearr_31982_32023[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (16))){
var inst_31877 = (state_31941[(2)]);
var inst_31878 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31879 = figwheel.client.heads_up.display_exception.call(null,inst_31878);
var state_31941__$1 = (function (){var statearr_31983 = state_31941;
(statearr_31983[(13)] = inst_31877);

return statearr_31983;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31941__$1,(17),inst_31879);
} else {
if((state_val_31942 === (30))){
var inst_31913 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31914 = figwheel.client.heads_up.display_warning.call(null,inst_31913);
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31941__$1,(33),inst_31914);
} else {
if((state_val_31942 === (10))){
var inst_31871 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31984_32024 = state_31941__$1;
(statearr_31984_32024[(2)] = inst_31871);

(statearr_31984_32024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (18))){
var inst_31887 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31888 = figwheel.client.heads_up.display_exception.call(null,inst_31887);
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31941__$1,(21),inst_31888);
} else {
if((state_val_31942 === (37))){
var inst_31924 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31985_32025 = state_31941__$1;
(statearr_31985_32025[(2)] = inst_31924);

(statearr_31985_32025[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (8))){
var inst_31863 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31941__$1,(11),inst_31863);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27080__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26990__auto__,c__27080__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26991__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26991__auto____0 = (function (){
var statearr_31986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31986[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26991__auto__);

(statearr_31986[(1)] = (1));

return statearr_31986;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26991__auto____1 = (function (state_31941){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_31941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e31987){if((e31987 instanceof Object)){
var ex__26994__auto__ = e31987;
var statearr_31988_32026 = state_31941;
(statearr_31988_32026[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32027 = state_31941;
state_31941 = G__32027;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26991__auto__ = function(state_31941){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26991__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26991__auto____1.call(this,state_31941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26991__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26991__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto__,msg_hist,msg_names,msg))
})();
var state__27082__auto__ = (function (){var statearr_31989 = f__27081__auto__.call(null);
(statearr_31989[(6)] = c__27080__auto__);

return statearr_31989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto__,msg_hist,msg_names,msg))
);

return c__27080__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27080__auto___32056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___32056,ch){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___32056,ch){
return (function (state_32042){
var state_val_32043 = (state_32042[(1)]);
if((state_val_32043 === (1))){
var state_32042__$1 = state_32042;
var statearr_32044_32057 = state_32042__$1;
(statearr_32044_32057[(2)] = null);

(statearr_32044_32057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (2))){
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32042__$1,(4),ch);
} else {
if((state_val_32043 === (3))){
var inst_32040 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32042__$1,inst_32040);
} else {
if((state_val_32043 === (4))){
var inst_32030 = (state_32042[(7)]);
var inst_32030__$1 = (state_32042[(2)]);
var state_32042__$1 = (function (){var statearr_32045 = state_32042;
(statearr_32045[(7)] = inst_32030__$1);

return statearr_32045;
})();
if(cljs.core.truth_(inst_32030__$1)){
var statearr_32046_32058 = state_32042__$1;
(statearr_32046_32058[(1)] = (5));

} else {
var statearr_32047_32059 = state_32042__$1;
(statearr_32047_32059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (5))){
var inst_32030 = (state_32042[(7)]);
var inst_32032 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32030);
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32042__$1,(8),inst_32032);
} else {
if((state_val_32043 === (6))){
var state_32042__$1 = state_32042;
var statearr_32048_32060 = state_32042__$1;
(statearr_32048_32060[(2)] = null);

(statearr_32048_32060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (7))){
var inst_32038 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
var statearr_32049_32061 = state_32042__$1;
(statearr_32049_32061[(2)] = inst_32038);

(statearr_32049_32061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (8))){
var inst_32034 = (state_32042[(2)]);
var state_32042__$1 = (function (){var statearr_32050 = state_32042;
(statearr_32050[(8)] = inst_32034);

return statearr_32050;
})();
var statearr_32051_32062 = state_32042__$1;
(statearr_32051_32062[(2)] = null);

(statearr_32051_32062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27080__auto___32056,ch))
;
return ((function (switch__26990__auto__,c__27080__auto___32056,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26991__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26991__auto____0 = (function (){
var statearr_32052 = [null,null,null,null,null,null,null,null,null];
(statearr_32052[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26991__auto__);

(statearr_32052[(1)] = (1));

return statearr_32052;
});
var figwheel$client$heads_up_plugin_$_state_machine__26991__auto____1 = (function (state_32042){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_32042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e32053){if((e32053 instanceof Object)){
var ex__26994__auto__ = e32053;
var statearr_32054_32063 = state_32042;
(statearr_32054_32063[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32064 = state_32042;
state_32042 = G__32064;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26991__auto__ = function(state_32042){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26991__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26991__auto____1.call(this,state_32042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26991__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26991__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___32056,ch))
})();
var state__27082__auto__ = (function (){var statearr_32055 = f__27081__auto__.call(null);
(statearr_32055[(6)] = c__27080__auto___32056);

return statearr_32055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___32056,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto__){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto__){
return (function (state_32070){
var state_val_32071 = (state_32070[(1)]);
if((state_val_32071 === (1))){
var inst_32065 = cljs.core.async.timeout.call(null,(3000));
var state_32070__$1 = state_32070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32070__$1,(2),inst_32065);
} else {
if((state_val_32071 === (2))){
var inst_32067 = (state_32070[(2)]);
var inst_32068 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32070__$1 = (function (){var statearr_32072 = state_32070;
(statearr_32072[(7)] = inst_32067);

return statearr_32072;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32070__$1,inst_32068);
} else {
return null;
}
}
});})(c__27080__auto__))
;
return ((function (switch__26990__auto__,c__27080__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26991__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26991__auto____0 = (function (){
var statearr_32073 = [null,null,null,null,null,null,null,null];
(statearr_32073[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26991__auto__);

(statearr_32073[(1)] = (1));

return statearr_32073;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26991__auto____1 = (function (state_32070){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_32070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e32074){if((e32074 instanceof Object)){
var ex__26994__auto__ = e32074;
var statearr_32075_32077 = state_32070;
(statearr_32075_32077[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32078 = state_32070;
state_32070 = G__32078;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26991__auto__ = function(state_32070){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26991__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26991__auto____1.call(this,state_32070);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26991__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26991__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto__))
})();
var state__27082__auto__ = (function (){var statearr_32076 = f__27081__auto__.call(null);
(statearr_32076[(6)] = c__27080__auto__);

return statearr_32076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto__))
);

return c__27080__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto__,figwheel_version,temp__5457__auto__){
return (function (state_32085){
var state_val_32086 = (state_32085[(1)]);
if((state_val_32086 === (1))){
var inst_32079 = cljs.core.async.timeout.call(null,(2000));
var state_32085__$1 = state_32085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32085__$1,(2),inst_32079);
} else {
if((state_val_32086 === (2))){
var inst_32081 = (state_32085[(2)]);
var inst_32082 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32083 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32082);
var state_32085__$1 = (function (){var statearr_32087 = state_32085;
(statearr_32087[(7)] = inst_32081);

return statearr_32087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32085__$1,inst_32083);
} else {
return null;
}
}
});})(c__27080__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__26990__auto__,c__27080__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26991__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26991__auto____0 = (function (){
var statearr_32088 = [null,null,null,null,null,null,null,null];
(statearr_32088[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26991__auto__);

(statearr_32088[(1)] = (1));

return statearr_32088;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26991__auto____1 = (function (state_32085){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_32085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e32089){if((e32089 instanceof Object)){
var ex__26994__auto__ = e32089;
var statearr_32090_32092 = state_32085;
(statearr_32090_32092[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32093 = state_32085;
state_32085 = G__32093;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26991__auto__ = function(state_32085){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26991__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26991__auto____1.call(this,state_32085);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26991__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26991__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27082__auto__ = (function (){var statearr_32091 = f__27081__auto__.call(null);
(statearr_32091[(6)] = c__27080__auto__);

return statearr_32091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto__,figwheel_version,temp__5457__auto__))
);

return c__27080__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32094){
var map__32095 = p__32094;
var map__32095__$1 = ((((!((map__32095 == null)))?(((((map__32095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32095):map__32095);
var file = cljs.core.get.call(null,map__32095__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32095__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32095__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32097 = "";
var G__32097__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32097),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32097);
var G__32097__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32097__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32097__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32097__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32097__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32098){
var map__32099 = p__32098;
var map__32099__$1 = ((((!((map__32099 == null)))?(((((map__32099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32099):map__32099);
var ed = map__32099__$1;
var formatted_exception = cljs.core.get.call(null,map__32099__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32099__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32099__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32101_32105 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32102_32106 = null;
var count__32103_32107 = (0);
var i__32104_32108 = (0);
while(true){
if((i__32104_32108 < count__32103_32107)){
var msg_32109 = cljs.core._nth.call(null,chunk__32102_32106,i__32104_32108);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32109);


var G__32110 = seq__32101_32105;
var G__32111 = chunk__32102_32106;
var G__32112 = count__32103_32107;
var G__32113 = (i__32104_32108 + (1));
seq__32101_32105 = G__32110;
chunk__32102_32106 = G__32111;
count__32103_32107 = G__32112;
i__32104_32108 = G__32113;
continue;
} else {
var temp__5457__auto___32114 = cljs.core.seq.call(null,seq__32101_32105);
if(temp__5457__auto___32114){
var seq__32101_32115__$1 = temp__5457__auto___32114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32101_32115__$1)){
var c__4319__auto___32116 = cljs.core.chunk_first.call(null,seq__32101_32115__$1);
var G__32117 = cljs.core.chunk_rest.call(null,seq__32101_32115__$1);
var G__32118 = c__4319__auto___32116;
var G__32119 = cljs.core.count.call(null,c__4319__auto___32116);
var G__32120 = (0);
seq__32101_32105 = G__32117;
chunk__32102_32106 = G__32118;
count__32103_32107 = G__32119;
i__32104_32108 = G__32120;
continue;
} else {
var msg_32121 = cljs.core.first.call(null,seq__32101_32115__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32121);


var G__32122 = cljs.core.next.call(null,seq__32101_32115__$1);
var G__32123 = null;
var G__32124 = (0);
var G__32125 = (0);
seq__32101_32105 = G__32122;
chunk__32102_32106 = G__32123;
count__32103_32107 = G__32124;
i__32104_32108 = G__32125;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32126){
var map__32127 = p__32126;
var map__32127__$1 = ((((!((map__32127 == null)))?(((((map__32127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32127):map__32127);
var w = map__32127__$1;
var message = cljs.core.get.call(null,map__32127__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/expo/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/expo/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32129 = cljs.core.seq.call(null,plugins);
var chunk__32130 = null;
var count__32131 = (0);
var i__32132 = (0);
while(true){
if((i__32132 < count__32131)){
var vec__32133 = cljs.core._nth.call(null,chunk__32130,i__32132);
var k = cljs.core.nth.call(null,vec__32133,(0),null);
var plugin = cljs.core.nth.call(null,vec__32133,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32139 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32129,chunk__32130,count__32131,i__32132,pl_32139,vec__32133,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32139.call(null,msg_hist);
});})(seq__32129,chunk__32130,count__32131,i__32132,pl_32139,vec__32133,k,plugin))
);
} else {
}


var G__32140 = seq__32129;
var G__32141 = chunk__32130;
var G__32142 = count__32131;
var G__32143 = (i__32132 + (1));
seq__32129 = G__32140;
chunk__32130 = G__32141;
count__32131 = G__32142;
i__32132 = G__32143;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32129);
if(temp__5457__auto__){
var seq__32129__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32129__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32129__$1);
var G__32144 = cljs.core.chunk_rest.call(null,seq__32129__$1);
var G__32145 = c__4319__auto__;
var G__32146 = cljs.core.count.call(null,c__4319__auto__);
var G__32147 = (0);
seq__32129 = G__32144;
chunk__32130 = G__32145;
count__32131 = G__32146;
i__32132 = G__32147;
continue;
} else {
var vec__32136 = cljs.core.first.call(null,seq__32129__$1);
var k = cljs.core.nth.call(null,vec__32136,(0),null);
var plugin = cljs.core.nth.call(null,vec__32136,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32148 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32129,chunk__32130,count__32131,i__32132,pl_32148,vec__32136,k,plugin,seq__32129__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32148.call(null,msg_hist);
});})(seq__32129,chunk__32130,count__32131,i__32132,pl_32148,vec__32136,k,plugin,seq__32129__$1,temp__5457__auto__))
);
} else {
}


var G__32149 = cljs.core.next.call(null,seq__32129__$1);
var G__32150 = null;
var G__32151 = (0);
var G__32152 = (0);
seq__32129 = G__32149;
chunk__32130 = G__32150;
count__32131 = G__32151;
i__32132 = G__32152;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__32154 = arguments.length;
switch (G__32154) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32155_32160 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32156_32161 = null;
var count__32157_32162 = (0);
var i__32158_32163 = (0);
while(true){
if((i__32158_32163 < count__32157_32162)){
var msg_32164 = cljs.core._nth.call(null,chunk__32156_32161,i__32158_32163);
figwheel.client.socket.handle_incoming_message.call(null,msg_32164);


var G__32165 = seq__32155_32160;
var G__32166 = chunk__32156_32161;
var G__32167 = count__32157_32162;
var G__32168 = (i__32158_32163 + (1));
seq__32155_32160 = G__32165;
chunk__32156_32161 = G__32166;
count__32157_32162 = G__32167;
i__32158_32163 = G__32168;
continue;
} else {
var temp__5457__auto___32169 = cljs.core.seq.call(null,seq__32155_32160);
if(temp__5457__auto___32169){
var seq__32155_32170__$1 = temp__5457__auto___32169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32155_32170__$1)){
var c__4319__auto___32171 = cljs.core.chunk_first.call(null,seq__32155_32170__$1);
var G__32172 = cljs.core.chunk_rest.call(null,seq__32155_32170__$1);
var G__32173 = c__4319__auto___32171;
var G__32174 = cljs.core.count.call(null,c__4319__auto___32171);
var G__32175 = (0);
seq__32155_32160 = G__32172;
chunk__32156_32161 = G__32173;
count__32157_32162 = G__32174;
i__32158_32163 = G__32175;
continue;
} else {
var msg_32176 = cljs.core.first.call(null,seq__32155_32170__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32176);


var G__32177 = cljs.core.next.call(null,seq__32155_32170__$1);
var G__32178 = null;
var G__32179 = (0);
var G__32180 = (0);
seq__32155_32160 = G__32177;
chunk__32156_32161 = G__32178;
count__32157_32162 = G__32179;
i__32158_32163 = G__32180;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32185 = arguments.length;
var i__4500__auto___32186 = (0);
while(true){
if((i__4500__auto___32186 < len__4499__auto___32185)){
args__4502__auto__.push((arguments[i__4500__auto___32186]));

var G__32187 = (i__4500__auto___32186 + (1));
i__4500__auto___32186 = G__32187;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32182){
var map__32183 = p__32182;
var map__32183__$1 = ((((!((map__32183 == null)))?(((((map__32183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32183):map__32183);
var opts = map__32183__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32181){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32181));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32188){if((e32188 instanceof Error)){
var e = e32188;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32188;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32189){
var map__32190 = p__32189;
var map__32190__$1 = ((((!((map__32190 == null)))?(((((map__32190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32190):map__32190);
var msg_name = cljs.core.get.call(null,map__32190__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1547484324558
