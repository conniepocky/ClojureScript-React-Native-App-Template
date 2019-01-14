// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__22244__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22245__i = 0, G__22245__a = new Array(arguments.length -  0);
while (G__22245__i < G__22245__a.length) {G__22245__a[G__22245__i] = arguments[G__22245__i + 0]; ++G__22245__i;}
  args = new cljs.core.IndexedSeq(G__22245__a,0,null);
} 
return G__22244__delegate.call(this,args);};
G__22244.cljs$lang$maxFixedArity = 0;
G__22244.cljs$lang$applyTo = (function (arglist__22246){
var args = cljs.core.seq(arglist__22246);
return G__22244__delegate(args);
});
G__22244.cljs$core$IFn$_invoke$arity$variadic = G__22244__delegate;
return G__22244;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22247__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22248__i = 0, G__22248__a = new Array(arguments.length -  0);
while (G__22248__i < G__22248__a.length) {G__22248__a[G__22248__i] = arguments[G__22248__i + 0]; ++G__22248__i;}
  args = new cljs.core.IndexedSeq(G__22248__a,0,null);
} 
return G__22247__delegate.call(this,args);};
G__22247.cljs$lang$maxFixedArity = 0;
G__22247.cljs$lang$applyTo = (function (arglist__22249){
var args = cljs.core.seq(arglist__22249);
return G__22247__delegate(args);
});
G__22247.cljs$core$IFn$_invoke$arity$variadic = G__22247__delegate;
return G__22247;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1547484315972
