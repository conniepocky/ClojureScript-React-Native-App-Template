// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__24752_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__24752_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: when registering ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),", expected a collection of interceptors, got:"].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: when registering",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),", given an empty interceptor chain"].join(''));
} else {
}

var temp__5457__auto___24753 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5457__auto___24753)){
var not_i_24754 = temp__5457__auto___24753;
if(cljs.core.fn_QMARK_.call(null,not_i_24754)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: when registering ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:"].join(''),not_i_24754);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: when registering ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),", expected interceptors, but got:"].join(''),not_i_24754);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__5455__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5455__auto__)){
var interceptors = temp__5455__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: while handling \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frame.events._STAR_handling_STAR_),"\", dispatch-sync was called for \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),"\". You can't call dispatch-sync within an event handler."].join(''));
} else {
var _STAR_handling_STAR_24755 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_24756 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__24727__auto___24769 = re_frame.interop.now.call(null);
var duration__24728__auto___24770 = (end__24727__auto___24769 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__24757_24771 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__24758_24772 = null;
var count__24759_24773 = (0);
var i__24760_24774 = (0);
while(true){
if((i__24760_24774 < count__24759_24773)){
var vec__24761_24775 = cljs.core._nth.call(null,chunk__24758_24772,i__24760_24774);
var k__24729__auto___24776 = cljs.core.nth.call(null,vec__24761_24775,(0),null);
var cb__24730__auto___24777 = cljs.core.nth.call(null,vec__24761_24775,(1),null);
try{cb__24730__auto___24777.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24728__auto___24770,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e24764){if((e24764 instanceof java.lang.Exception)){
var e__24731__auto___24778 = e24764;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24729__auto___24776,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24731__auto___24778);
} else {
throw e24764;

}
}

var G__24779 = seq__24757_24771;
var G__24780 = chunk__24758_24772;
var G__24781 = count__24759_24773;
var G__24782 = (i__24760_24774 + (1));
seq__24757_24771 = G__24779;
chunk__24758_24772 = G__24780;
count__24759_24773 = G__24781;
i__24760_24774 = G__24782;
continue;
} else {
var temp__5457__auto___24783 = cljs.core.seq.call(null,seq__24757_24771);
if(temp__5457__auto___24783){
var seq__24757_24784__$1 = temp__5457__auto___24783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24757_24784__$1)){
var c__4319__auto___24785 = cljs.core.chunk_first.call(null,seq__24757_24784__$1);
var G__24786 = cljs.core.chunk_rest.call(null,seq__24757_24784__$1);
var G__24787 = c__4319__auto___24785;
var G__24788 = cljs.core.count.call(null,c__4319__auto___24785);
var G__24789 = (0);
seq__24757_24771 = G__24786;
chunk__24758_24772 = G__24787;
count__24759_24773 = G__24788;
i__24760_24774 = G__24789;
continue;
} else {
var vec__24765_24790 = cljs.core.first.call(null,seq__24757_24784__$1);
var k__24729__auto___24791 = cljs.core.nth.call(null,vec__24765_24790,(0),null);
var cb__24730__auto___24792 = cljs.core.nth.call(null,vec__24765_24790,(1),null);
try{cb__24730__auto___24792.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24728__auto___24770,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e24768){if((e24768 instanceof java.lang.Exception)){
var e__24731__auto___24793 = e24768;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24729__auto___24791,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24731__auto___24793);
} else {
throw e24768;

}
}

var G__24794 = cljs.core.next.call(null,seq__24757_24784__$1);
var G__24795 = null;
var G__24796 = (0);
var G__24797 = (0);
seq__24757_24771 = G__24794;
chunk__24758_24772 = G__24795;
count__24759_24773 = G__24796;
i__24760_24774 = G__24797;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_24756;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_24755;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1547484319280
