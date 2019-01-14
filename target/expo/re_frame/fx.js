// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__24872 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__24873 = null;
var count__24874 = (0);
var i__24875 = (0);
while(true){
if((i__24875 < count__24874)){
var vec__24876 = cljs.core._nth.call(null,chunk__24873,i__24875);
var effect_k = cljs.core.nth.call(null,vec__24876,(0),null);
var value = cljs.core.nth.call(null,vec__24876,(1),null);
var temp__5455__auto___24882 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__5455__auto___24882)){
var effect_fn_24883 = temp__5455__auto___24882;
effect_fn_24883.call(null,value);
} else {
}


var G__24884 = seq__24872;
var G__24885 = chunk__24873;
var G__24886 = count__24874;
var G__24887 = (i__24875 + (1));
seq__24872 = G__24884;
chunk__24873 = G__24885;
count__24874 = G__24886;
i__24875 = G__24887;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24872);
if(temp__5457__auto__){
var seq__24872__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24872__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24872__$1);
var G__24888 = cljs.core.chunk_rest.call(null,seq__24872__$1);
var G__24889 = c__4319__auto__;
var G__24890 = cljs.core.count.call(null,c__4319__auto__);
var G__24891 = (0);
seq__24872 = G__24888;
chunk__24873 = G__24889;
count__24874 = G__24890;
i__24875 = G__24891;
continue;
} else {
var vec__24879 = cljs.core.first.call(null,seq__24872__$1);
var effect_k = cljs.core.nth.call(null,vec__24879,(0),null);
var value = cljs.core.nth.call(null,vec__24879,(1),null);
var temp__5455__auto___24892 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__5455__auto___24892)){
var effect_fn_24893 = temp__5455__auto___24892;
effect_fn_24893.call(null,value);
} else {
}


var G__24894 = cljs.core.next.call(null,seq__24872__$1);
var G__24895 = null;
var G__24896 = (0);
var G__24897 = (0);
seq__24872 = G__24894;
chunk__24873 = G__24895;
count__24874 = G__24896;
i__24875 = G__24897;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__24898 = cljs.core.seq.call(null,value);
var chunk__24899 = null;
var count__24900 = (0);
var i__24901 = (0);
while(true){
if((i__24901 < count__24900)){
var map__24902 = cljs.core._nth.call(null,chunk__24899,i__24901);
var map__24902__$1 = ((((!((map__24902 == null)))?(((((map__24902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24902):map__24902);
var effect = map__24902__$1;
var ms = cljs.core.get.call(null,map__24902__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24902__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24898,chunk__24899,count__24900,i__24901,map__24902,map__24902__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24898,chunk__24899,count__24900,i__24901,map__24902,map__24902__$1,effect,ms,dispatch))
,ms);
}


var G__24906 = seq__24898;
var G__24907 = chunk__24899;
var G__24908 = count__24900;
var G__24909 = (i__24901 + (1));
seq__24898 = G__24906;
chunk__24899 = G__24907;
count__24900 = G__24908;
i__24901 = G__24909;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24898);
if(temp__5457__auto__){
var seq__24898__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24898__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24898__$1);
var G__24910 = cljs.core.chunk_rest.call(null,seq__24898__$1);
var G__24911 = c__4319__auto__;
var G__24912 = cljs.core.count.call(null,c__4319__auto__);
var G__24913 = (0);
seq__24898 = G__24910;
chunk__24899 = G__24911;
count__24900 = G__24912;
i__24901 = G__24913;
continue;
} else {
var map__24904 = cljs.core.first.call(null,seq__24898__$1);
var map__24904__$1 = ((((!((map__24904 == null)))?(((((map__24904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24904):map__24904);
var effect = map__24904__$1;
var ms = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24898,chunk__24899,count__24900,i__24901,map__24904,map__24904__$1,effect,ms,dispatch,seq__24898__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24898,chunk__24899,count__24900,i__24901,map__24904,map__24904__$1,effect,ms,dispatch,seq__24898__$1,temp__5457__auto__))
,ms);
}


var G__24914 = cljs.core.next.call(null,seq__24898__$1);
var G__24915 = null;
var G__24916 = (0);
var G__24917 = (0);
seq__24898 = G__24914;
chunk__24899 = G__24915;
count__24900 = G__24916;
i__24901 = G__24917;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__24918 = cljs.core.seq.call(null,value);
var chunk__24919 = null;
var count__24920 = (0);
var i__24921 = (0);
while(true){
if((i__24921 < count__24920)){
var event = cljs.core._nth.call(null,chunk__24919,i__24921);
re_frame.router.dispatch.call(null,event);


var G__24922 = seq__24918;
var G__24923 = chunk__24919;
var G__24924 = count__24920;
var G__24925 = (i__24921 + (1));
seq__24918 = G__24922;
chunk__24919 = G__24923;
count__24920 = G__24924;
i__24921 = G__24925;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24918);
if(temp__5457__auto__){
var seq__24918__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24918__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24918__$1);
var G__24926 = cljs.core.chunk_rest.call(null,seq__24918__$1);
var G__24927 = c__4319__auto__;
var G__24928 = cljs.core.count.call(null,c__4319__auto__);
var G__24929 = (0);
seq__24918 = G__24926;
chunk__24919 = G__24927;
count__24920 = G__24928;
i__24921 = G__24929;
continue;
} else {
var event = cljs.core.first.call(null,seq__24918__$1);
re_frame.router.dispatch.call(null,event);


var G__24930 = cljs.core.next.call(null,seq__24918__$1);
var G__24931 = null;
var G__24932 = (0);
var G__24933 = (0);
seq__24918 = G__24930;
chunk__24919 = G__24931;
count__24920 = G__24932;
i__24921 = G__24933;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__24934 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__24935 = null;
var count__24936 = (0);
var i__24937 = (0);
while(true){
if((i__24937 < count__24936)){
var event = cljs.core._nth.call(null,chunk__24935,i__24937);
clear_event.call(null,event);


var G__24938 = seq__24934;
var G__24939 = chunk__24935;
var G__24940 = count__24936;
var G__24941 = (i__24937 + (1));
seq__24934 = G__24938;
chunk__24935 = G__24939;
count__24936 = G__24940;
i__24937 = G__24941;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24934);
if(temp__5457__auto__){
var seq__24934__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24934__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24934__$1);
var G__24942 = cljs.core.chunk_rest.call(null,seq__24934__$1);
var G__24943 = c__4319__auto__;
var G__24944 = cljs.core.count.call(null,c__4319__auto__);
var G__24945 = (0);
seq__24934 = G__24942;
chunk__24935 = G__24943;
count__24936 = G__24944;
i__24937 = G__24945;
continue;
} else {
var event = cljs.core.first.call(null,seq__24934__$1);
clear_event.call(null,event);


var G__24946 = cljs.core.next.call(null,seq__24934__$1);
var G__24947 = null;
var G__24948 = (0);
var G__24949 = (0);
seq__24934 = G__24946;
chunk__24935 = G__24947;
count__24936 = G__24948;
i__24937 = G__24949;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1547484319428
