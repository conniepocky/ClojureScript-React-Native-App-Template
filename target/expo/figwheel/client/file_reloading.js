// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30270_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30270_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30271 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30272 = null;
var count__30273 = (0);
var i__30274 = (0);
while(true){
if((i__30274 < count__30273)){
var n = cljs.core._nth.call(null,chunk__30272,i__30274);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30275 = seq__30271;
var G__30276 = chunk__30272;
var G__30277 = count__30273;
var G__30278 = (i__30274 + (1));
seq__30271 = G__30275;
chunk__30272 = G__30276;
count__30273 = G__30277;
i__30274 = G__30278;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30271);
if(temp__5457__auto__){
var seq__30271__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30271__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30271__$1);
var G__30279 = cljs.core.chunk_rest.call(null,seq__30271__$1);
var G__30280 = c__4319__auto__;
var G__30281 = cljs.core.count.call(null,c__4319__auto__);
var G__30282 = (0);
seq__30271 = G__30279;
chunk__30272 = G__30280;
count__30273 = G__30281;
i__30274 = G__30282;
continue;
} else {
var n = cljs.core.first.call(null,seq__30271__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30283 = cljs.core.next.call(null,seq__30271__$1);
var G__30284 = null;
var G__30285 = (0);
var G__30286 = (0);
seq__30271 = G__30283;
chunk__30272 = G__30284;
count__30273 = G__30285;
i__30274 = G__30286;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30287){
var vec__30288 = p__30287;
var _ = cljs.core.nth.call(null,vec__30288,(0),null);
var v = cljs.core.nth.call(null,vec__30288,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__30291){
var vec__30292 = p__30291;
var k = cljs.core.nth.call(null,vec__30292,(0),null);
var v = cljs.core.nth.call(null,vec__30292,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30304_30312 = cljs.core.seq.call(null,deps);
var chunk__30305_30313 = null;
var count__30306_30314 = (0);
var i__30307_30315 = (0);
while(true){
if((i__30307_30315 < count__30306_30314)){
var dep_30316 = cljs.core._nth.call(null,chunk__30305_30313,i__30307_30315);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_30316;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30316));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30316,(depth + (1)),state);
} else {
}


var G__30317 = seq__30304_30312;
var G__30318 = chunk__30305_30313;
var G__30319 = count__30306_30314;
var G__30320 = (i__30307_30315 + (1));
seq__30304_30312 = G__30317;
chunk__30305_30313 = G__30318;
count__30306_30314 = G__30319;
i__30307_30315 = G__30320;
continue;
} else {
var temp__5457__auto___30321 = cljs.core.seq.call(null,seq__30304_30312);
if(temp__5457__auto___30321){
var seq__30304_30322__$1 = temp__5457__auto___30321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30304_30322__$1)){
var c__4319__auto___30323 = cljs.core.chunk_first.call(null,seq__30304_30322__$1);
var G__30324 = cljs.core.chunk_rest.call(null,seq__30304_30322__$1);
var G__30325 = c__4319__auto___30323;
var G__30326 = cljs.core.count.call(null,c__4319__auto___30323);
var G__30327 = (0);
seq__30304_30312 = G__30324;
chunk__30305_30313 = G__30325;
count__30306_30314 = G__30326;
i__30307_30315 = G__30327;
continue;
} else {
var dep_30328 = cljs.core.first.call(null,seq__30304_30322__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_30328;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30328));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30328,(depth + (1)),state);
} else {
}


var G__30329 = cljs.core.next.call(null,seq__30304_30322__$1);
var G__30330 = null;
var G__30331 = (0);
var G__30332 = (0);
seq__30304_30312 = G__30329;
chunk__30305_30313 = G__30330;
count__30306_30314 = G__30331;
i__30307_30315 = G__30332;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30308){
var vec__30309 = p__30308;
var seq__30310 = cljs.core.seq.call(null,vec__30309);
var first__30311 = cljs.core.first.call(null,seq__30310);
var seq__30310__$1 = cljs.core.next.call(null,seq__30310);
var x = first__30311;
var xs = seq__30310__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30309,seq__30310,first__30311,seq__30310__$1,x,xs,get_deps__$1){
return (function (p1__30295_SHARP_){
return clojure.set.difference.call(null,p1__30295_SHARP_,x);
});})(vec__30309,seq__30310,first__30311,seq__30310__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30333 = cljs.core.seq.call(null,provides);
var chunk__30334 = null;
var count__30335 = (0);
var i__30336 = (0);
while(true){
if((i__30336 < count__30335)){
var prov = cljs.core._nth.call(null,chunk__30334,i__30336);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30337_30345 = cljs.core.seq.call(null,requires);
var chunk__30338_30346 = null;
var count__30339_30347 = (0);
var i__30340_30348 = (0);
while(true){
if((i__30340_30348 < count__30339_30347)){
var req_30349 = cljs.core._nth.call(null,chunk__30338_30346,i__30340_30348);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30349,prov);


var G__30350 = seq__30337_30345;
var G__30351 = chunk__30338_30346;
var G__30352 = count__30339_30347;
var G__30353 = (i__30340_30348 + (1));
seq__30337_30345 = G__30350;
chunk__30338_30346 = G__30351;
count__30339_30347 = G__30352;
i__30340_30348 = G__30353;
continue;
} else {
var temp__5457__auto___30354 = cljs.core.seq.call(null,seq__30337_30345);
if(temp__5457__auto___30354){
var seq__30337_30355__$1 = temp__5457__auto___30354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30337_30355__$1)){
var c__4319__auto___30356 = cljs.core.chunk_first.call(null,seq__30337_30355__$1);
var G__30357 = cljs.core.chunk_rest.call(null,seq__30337_30355__$1);
var G__30358 = c__4319__auto___30356;
var G__30359 = cljs.core.count.call(null,c__4319__auto___30356);
var G__30360 = (0);
seq__30337_30345 = G__30357;
chunk__30338_30346 = G__30358;
count__30339_30347 = G__30359;
i__30340_30348 = G__30360;
continue;
} else {
var req_30361 = cljs.core.first.call(null,seq__30337_30355__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30361,prov);


var G__30362 = cljs.core.next.call(null,seq__30337_30355__$1);
var G__30363 = null;
var G__30364 = (0);
var G__30365 = (0);
seq__30337_30345 = G__30362;
chunk__30338_30346 = G__30363;
count__30339_30347 = G__30364;
i__30340_30348 = G__30365;
continue;
}
} else {
}
}
break;
}


var G__30366 = seq__30333;
var G__30367 = chunk__30334;
var G__30368 = count__30335;
var G__30369 = (i__30336 + (1));
seq__30333 = G__30366;
chunk__30334 = G__30367;
count__30335 = G__30368;
i__30336 = G__30369;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30333);
if(temp__5457__auto__){
var seq__30333__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30333__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30333__$1);
var G__30370 = cljs.core.chunk_rest.call(null,seq__30333__$1);
var G__30371 = c__4319__auto__;
var G__30372 = cljs.core.count.call(null,c__4319__auto__);
var G__30373 = (0);
seq__30333 = G__30370;
chunk__30334 = G__30371;
count__30335 = G__30372;
i__30336 = G__30373;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30333__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30341_30374 = cljs.core.seq.call(null,requires);
var chunk__30342_30375 = null;
var count__30343_30376 = (0);
var i__30344_30377 = (0);
while(true){
if((i__30344_30377 < count__30343_30376)){
var req_30378 = cljs.core._nth.call(null,chunk__30342_30375,i__30344_30377);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30378,prov);


var G__30379 = seq__30341_30374;
var G__30380 = chunk__30342_30375;
var G__30381 = count__30343_30376;
var G__30382 = (i__30344_30377 + (1));
seq__30341_30374 = G__30379;
chunk__30342_30375 = G__30380;
count__30343_30376 = G__30381;
i__30344_30377 = G__30382;
continue;
} else {
var temp__5457__auto___30383__$1 = cljs.core.seq.call(null,seq__30341_30374);
if(temp__5457__auto___30383__$1){
var seq__30341_30384__$1 = temp__5457__auto___30383__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30341_30384__$1)){
var c__4319__auto___30385 = cljs.core.chunk_first.call(null,seq__30341_30384__$1);
var G__30386 = cljs.core.chunk_rest.call(null,seq__30341_30384__$1);
var G__30387 = c__4319__auto___30385;
var G__30388 = cljs.core.count.call(null,c__4319__auto___30385);
var G__30389 = (0);
seq__30341_30374 = G__30386;
chunk__30342_30375 = G__30387;
count__30343_30376 = G__30388;
i__30344_30377 = G__30389;
continue;
} else {
var req_30390 = cljs.core.first.call(null,seq__30341_30384__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30390,prov);


var G__30391 = cljs.core.next.call(null,seq__30341_30384__$1);
var G__30392 = null;
var G__30393 = (0);
var G__30394 = (0);
seq__30341_30374 = G__30391;
chunk__30342_30375 = G__30392;
count__30343_30376 = G__30393;
i__30344_30377 = G__30394;
continue;
}
} else {
}
}
break;
}


var G__30395 = cljs.core.next.call(null,seq__30333__$1);
var G__30396 = null;
var G__30397 = (0);
var G__30398 = (0);
seq__30333 = G__30395;
chunk__30334 = G__30396;
count__30335 = G__30397;
i__30336 = G__30398;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30399_30403 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30400_30404 = null;
var count__30401_30405 = (0);
var i__30402_30406 = (0);
while(true){
if((i__30402_30406 < count__30401_30405)){
var ns_30407 = cljs.core._nth.call(null,chunk__30400_30404,i__30402_30406);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30407);


var G__30408 = seq__30399_30403;
var G__30409 = chunk__30400_30404;
var G__30410 = count__30401_30405;
var G__30411 = (i__30402_30406 + (1));
seq__30399_30403 = G__30408;
chunk__30400_30404 = G__30409;
count__30401_30405 = G__30410;
i__30402_30406 = G__30411;
continue;
} else {
var temp__5457__auto___30412 = cljs.core.seq.call(null,seq__30399_30403);
if(temp__5457__auto___30412){
var seq__30399_30413__$1 = temp__5457__auto___30412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30399_30413__$1)){
var c__4319__auto___30414 = cljs.core.chunk_first.call(null,seq__30399_30413__$1);
var G__30415 = cljs.core.chunk_rest.call(null,seq__30399_30413__$1);
var G__30416 = c__4319__auto___30414;
var G__30417 = cljs.core.count.call(null,c__4319__auto___30414);
var G__30418 = (0);
seq__30399_30403 = G__30415;
chunk__30400_30404 = G__30416;
count__30401_30405 = G__30417;
i__30402_30406 = G__30418;
continue;
} else {
var ns_30419 = cljs.core.first.call(null,seq__30399_30413__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30419);


var G__30420 = cljs.core.next.call(null,seq__30399_30413__$1);
var G__30421 = null;
var G__30422 = (0);
var G__30423 = (0);
seq__30399_30403 = G__30420;
chunk__30400_30404 = G__30421;
count__30401_30405 = G__30422;
i__30402_30406 = G__30423;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30424__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30425__i = 0, G__30425__a = new Array(arguments.length -  0);
while (G__30425__i < G__30425__a.length) {G__30425__a[G__30425__i] = arguments[G__30425__i + 0]; ++G__30425__i;}
  args = new cljs.core.IndexedSeq(G__30425__a,0,null);
} 
return G__30424__delegate.call(this,args);};
G__30424.cljs$lang$maxFixedArity = 0;
G__30424.cljs$lang$applyTo = (function (arglist__30426){
var args = cljs.core.seq(arglist__30426);
return G__30424__delegate(args);
});
G__30424.cljs$core$IFn$_invoke$arity$variadic = G__30424__delegate;
return G__30424;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__30427_SHARP_,p2__30428_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30427_SHARP_)].join('')),p2__30428_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__30429_SHARP_,p2__30430_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30429_SHARP_)].join(''),p2__30430_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30431 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30431.addCallback(((function (G__30431){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30431))
);

G__30431.addErrback(((function (G__30431){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30431))
);

return G__30431;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30432){if((e30432 instanceof Error)){
var e = e30432;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30432;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30433){if((e30433 instanceof Error)){
var e = e30433;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30433;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30434 = cljs.core._EQ_;
var expr__30435 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30434.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30435))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30434.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30435))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30434.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30435))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30434,expr__30435){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30434,expr__30435))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30437,callback){
var map__30438 = p__30437;
var map__30438__$1 = ((((!((map__30438 == null)))?(((((map__30438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30438):map__30438);
var file_msg = map__30438__$1;
var request_url = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30438,map__30438__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30438,map__30438__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto__){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto__){
return (function (state_30478){
var state_val_30479 = (state_30478[(1)]);
if((state_val_30479 === (7))){
var inst_30474 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
var statearr_30480_30507 = state_30478__$1;
(statearr_30480_30507[(2)] = inst_30474);

(statearr_30480_30507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (1))){
var state_30478__$1 = state_30478;
var statearr_30481_30508 = state_30478__$1;
(statearr_30481_30508[(2)] = null);

(statearr_30481_30508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (4))){
var inst_30442 = (state_30478[(7)]);
var inst_30442__$1 = (state_30478[(2)]);
var state_30478__$1 = (function (){var statearr_30482 = state_30478;
(statearr_30482[(7)] = inst_30442__$1);

return statearr_30482;
})();
if(cljs.core.truth_(inst_30442__$1)){
var statearr_30483_30509 = state_30478__$1;
(statearr_30483_30509[(1)] = (5));

} else {
var statearr_30484_30510 = state_30478__$1;
(statearr_30484_30510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (15))){
var inst_30459 = (state_30478[(8)]);
var inst_30456 = (state_30478[(9)]);
var inst_30461 = inst_30459.call(null,inst_30456);
var state_30478__$1 = state_30478;
var statearr_30485_30511 = state_30478__$1;
(statearr_30485_30511[(2)] = inst_30461);

(statearr_30485_30511[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (13))){
var inst_30468 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
var statearr_30486_30512 = state_30478__$1;
(statearr_30486_30512[(2)] = inst_30468);

(statearr_30486_30512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (6))){
var state_30478__$1 = state_30478;
var statearr_30487_30513 = state_30478__$1;
(statearr_30487_30513[(2)] = null);

(statearr_30487_30513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (17))){
var inst_30465 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
var statearr_30488_30514 = state_30478__$1;
(statearr_30488_30514[(2)] = inst_30465);

(statearr_30488_30514[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (3))){
var inst_30476 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30478__$1,inst_30476);
} else {
if((state_val_30479 === (12))){
var state_30478__$1 = state_30478;
var statearr_30489_30515 = state_30478__$1;
(statearr_30489_30515[(2)] = null);

(statearr_30489_30515[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (2))){
var state_30478__$1 = state_30478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30478__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30479 === (11))){
var inst_30447 = (state_30478[(10)]);
var inst_30454 = figwheel.client.file_reloading.blocking_load.call(null,inst_30447);
var state_30478__$1 = state_30478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30478__$1,(14),inst_30454);
} else {
if((state_val_30479 === (9))){
var inst_30447 = (state_30478[(10)]);
var state_30478__$1 = state_30478;
if(cljs.core.truth_(inst_30447)){
var statearr_30490_30516 = state_30478__$1;
(statearr_30490_30516[(1)] = (11));

} else {
var statearr_30491_30517 = state_30478__$1;
(statearr_30491_30517[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (5))){
var inst_30448 = (state_30478[(11)]);
var inst_30442 = (state_30478[(7)]);
var inst_30447 = cljs.core.nth.call(null,inst_30442,(0),null);
var inst_30448__$1 = cljs.core.nth.call(null,inst_30442,(1),null);
var state_30478__$1 = (function (){var statearr_30492 = state_30478;
(statearr_30492[(10)] = inst_30447);

(statearr_30492[(11)] = inst_30448__$1);

return statearr_30492;
})();
if(cljs.core.truth_(inst_30448__$1)){
var statearr_30493_30518 = state_30478__$1;
(statearr_30493_30518[(1)] = (8));

} else {
var statearr_30494_30519 = state_30478__$1;
(statearr_30494_30519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (14))){
var inst_30447 = (state_30478[(10)]);
var inst_30459 = (state_30478[(8)]);
var inst_30456 = (state_30478[(2)]);
var inst_30457 = console.log("Loading!",inst_30447);
var inst_30458 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30459__$1 = cljs.core.get.call(null,inst_30458,inst_30447);
var state_30478__$1 = (function (){var statearr_30495 = state_30478;
(statearr_30495[(8)] = inst_30459__$1);

(statearr_30495[(9)] = inst_30456);

(statearr_30495[(12)] = inst_30457);

return statearr_30495;
})();
if(cljs.core.truth_(inst_30459__$1)){
var statearr_30496_30520 = state_30478__$1;
(statearr_30496_30520[(1)] = (15));

} else {
var statearr_30497_30521 = state_30478__$1;
(statearr_30497_30521[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (16))){
var inst_30456 = (state_30478[(9)]);
var inst_30463 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30456);
var state_30478__$1 = state_30478;
var statearr_30498_30522 = state_30478__$1;
(statearr_30498_30522[(2)] = inst_30463);

(statearr_30498_30522[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (10))){
var inst_30470 = (state_30478[(2)]);
var state_30478__$1 = (function (){var statearr_30499 = state_30478;
(statearr_30499[(13)] = inst_30470);

return statearr_30499;
})();
var statearr_30500_30523 = state_30478__$1;
(statearr_30500_30523[(2)] = null);

(statearr_30500_30523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (8))){
var inst_30448 = (state_30478[(11)]);
var inst_30450 = console.log("Evaling!",inst_30448);
var inst_30451 = eval(inst_30448);
var state_30478__$1 = (function (){var statearr_30501 = state_30478;
(statearr_30501[(14)] = inst_30450);

return statearr_30501;
})();
var statearr_30502_30524 = state_30478__$1;
(statearr_30502_30524[(2)] = inst_30451);

(statearr_30502_30524[(1)] = (10));


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
});})(c__27080__auto__))
;
return ((function (switch__26990__auto__,c__27080__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26991__auto__ = null;
var figwheel$client$file_reloading$state_machine__26991__auto____0 = (function (){
var statearr_30503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30503[(0)] = figwheel$client$file_reloading$state_machine__26991__auto__);

(statearr_30503[(1)] = (1));

return statearr_30503;
});
var figwheel$client$file_reloading$state_machine__26991__auto____1 = (function (state_30478){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_30478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e30504){if((e30504 instanceof Object)){
var ex__26994__auto__ = e30504;
var statearr_30505_30525 = state_30478;
(statearr_30505_30525[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30526 = state_30478;
state_30478 = G__30526;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26991__auto__ = function(state_30478){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26991__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26991__auto____1.call(this,state_30478);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26991__auto____0;
figwheel$client$file_reloading$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26991__auto____1;
return figwheel$client$file_reloading$state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto__))
})();
var state__27082__auto__ = (function (){var statearr_30506 = f__27081__auto__.call(null);
(statearr_30506[(6)] = c__27080__auto__);

return statearr_30506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto__))
);

return c__27080__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30528 = arguments.length;
switch (G__30528) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30530,callback){
var map__30531 = p__30530;
var map__30531__$1 = ((((!((map__30531 == null)))?(((((map__30531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30531):map__30531);
var file_msg = map__30531__$1;
var namespace = cljs.core.get.call(null,map__30531__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30531,map__30531__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30531,map__30531__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30533){
var map__30534 = p__30533;
var map__30534__$1 = ((((!((map__30534 == null)))?(((((map__30534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30534):map__30534);
var file_msg = map__30534__$1;
var namespace = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30536){
var map__30537 = p__30536;
var map__30537__$1 = ((((!((map__30537 == null)))?(((((map__30537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30537):map__30537);
var file_msg = map__30537__$1;
var namespace = cljs.core.get.call(null,map__30537__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30539,callback){
var map__30540 = p__30539;
var map__30540__$1 = ((((!((map__30540 == null)))?(((((map__30540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30540):map__30540);
var file_msg = map__30540__$1;
var request_url = cljs.core.get.call(null,map__30540__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30540__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27080__auto___30590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___30590,out){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___30590,out){
return (function (state_30575){
var state_val_30576 = (state_30575[(1)]);
if((state_val_30576 === (1))){
var inst_30549 = cljs.core.seq.call(null,files);
var inst_30550 = cljs.core.first.call(null,inst_30549);
var inst_30551 = cljs.core.next.call(null,inst_30549);
var inst_30552 = files;
var state_30575__$1 = (function (){var statearr_30577 = state_30575;
(statearr_30577[(7)] = inst_30551);

(statearr_30577[(8)] = inst_30550);

(statearr_30577[(9)] = inst_30552);

return statearr_30577;
})();
var statearr_30578_30591 = state_30575__$1;
(statearr_30578_30591[(2)] = null);

(statearr_30578_30591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30576 === (2))){
var inst_30552 = (state_30575[(9)]);
var inst_30558 = (state_30575[(10)]);
var inst_30557 = cljs.core.seq.call(null,inst_30552);
var inst_30558__$1 = cljs.core.first.call(null,inst_30557);
var inst_30559 = cljs.core.next.call(null,inst_30557);
var inst_30560 = (inst_30558__$1 == null);
var inst_30561 = cljs.core.not.call(null,inst_30560);
var state_30575__$1 = (function (){var statearr_30579 = state_30575;
(statearr_30579[(11)] = inst_30559);

(statearr_30579[(10)] = inst_30558__$1);

return statearr_30579;
})();
if(inst_30561){
var statearr_30580_30592 = state_30575__$1;
(statearr_30580_30592[(1)] = (4));

} else {
var statearr_30581_30593 = state_30575__$1;
(statearr_30581_30593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30576 === (3))){
var inst_30573 = (state_30575[(2)]);
var state_30575__$1 = state_30575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30575__$1,inst_30573);
} else {
if((state_val_30576 === (4))){
var inst_30558 = (state_30575[(10)]);
var inst_30563 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30558);
var state_30575__$1 = state_30575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30575__$1,(7),inst_30563);
} else {
if((state_val_30576 === (5))){
var inst_30569 = cljs.core.async.close_BANG_.call(null,out);
var state_30575__$1 = state_30575;
var statearr_30582_30594 = state_30575__$1;
(statearr_30582_30594[(2)] = inst_30569);

(statearr_30582_30594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30576 === (6))){
var inst_30571 = (state_30575[(2)]);
var state_30575__$1 = state_30575;
var statearr_30583_30595 = state_30575__$1;
(statearr_30583_30595[(2)] = inst_30571);

(statearr_30583_30595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30576 === (7))){
var inst_30559 = (state_30575[(11)]);
var inst_30565 = (state_30575[(2)]);
var inst_30566 = cljs.core.async.put_BANG_.call(null,out,inst_30565);
var inst_30552 = inst_30559;
var state_30575__$1 = (function (){var statearr_30584 = state_30575;
(statearr_30584[(12)] = inst_30566);

(statearr_30584[(9)] = inst_30552);

return statearr_30584;
})();
var statearr_30585_30596 = state_30575__$1;
(statearr_30585_30596[(2)] = null);

(statearr_30585_30596[(1)] = (2));


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
});})(c__27080__auto___30590,out))
;
return ((function (switch__26990__auto__,c__27080__auto___30590,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26991__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26991__auto____0 = (function (){
var statearr_30586 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30586[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26991__auto__);

(statearr_30586[(1)] = (1));

return statearr_30586;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26991__auto____1 = (function (state_30575){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_30575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e30587){if((e30587 instanceof Object)){
var ex__26994__auto__ = e30587;
var statearr_30588_30597 = state_30575;
(statearr_30588_30597[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30598 = state_30575;
state_30575 = G__30598;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26991__auto__ = function(state_30575){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26991__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26991__auto____1.call(this,state_30575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26991__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26991__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___30590,out))
})();
var state__27082__auto__ = (function (){var statearr_30589 = f__27081__auto__.call(null);
(statearr_30589[(6)] = c__27080__auto___30590);

return statearr_30589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___30590,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30599,opts){
var map__30600 = p__30599;
var map__30600__$1 = ((((!((map__30600 == null)))?(((((map__30600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30600):map__30600);
var eval_body = cljs.core.get.call(null,map__30600__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30600__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30602){var e = e30602;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30603_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30603_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30604){
var vec__30605 = p__30604;
var k = cljs.core.nth.call(null,vec__30605,(0),null);
var v = cljs.core.nth.call(null,vec__30605,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30608){
var vec__30609 = p__30608;
var k = cljs.core.nth.call(null,vec__30609,(0),null);
var v = cljs.core.nth.call(null,vec__30609,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30615,p__30616){
var map__30617 = p__30615;
var map__30617__$1 = ((((!((map__30617 == null)))?(((((map__30617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30617):map__30617);
var opts = map__30617__$1;
var before_jsload = cljs.core.get.call(null,map__30617__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30617__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30617__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30618 = p__30616;
var map__30618__$1 = ((((!((map__30618 == null)))?(((((map__30618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30618):map__30618);
var msg = map__30618__$1;
var files = cljs.core.get.call(null,map__30618__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30618__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30618__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30772){
var state_val_30773 = (state_30772[(1)]);
if((state_val_30773 === (7))){
var inst_30632 = (state_30772[(7)]);
var inst_30633 = (state_30772[(8)]);
var inst_30635 = (state_30772[(9)]);
var inst_30634 = (state_30772[(10)]);
var inst_30640 = cljs.core._nth.call(null,inst_30633,inst_30635);
var inst_30641 = figwheel.client.file_reloading.eval_body.call(null,inst_30640,opts);
var inst_30642 = (inst_30635 + (1));
var tmp30774 = inst_30632;
var tmp30775 = inst_30633;
var tmp30776 = inst_30634;
var inst_30632__$1 = tmp30774;
var inst_30633__$1 = tmp30775;
var inst_30634__$1 = tmp30776;
var inst_30635__$1 = inst_30642;
var state_30772__$1 = (function (){var statearr_30777 = state_30772;
(statearr_30777[(7)] = inst_30632__$1);

(statearr_30777[(8)] = inst_30633__$1);

(statearr_30777[(9)] = inst_30635__$1);

(statearr_30777[(11)] = inst_30641);

(statearr_30777[(10)] = inst_30634__$1);

return statearr_30777;
})();
var statearr_30778_30861 = state_30772__$1;
(statearr_30778_30861[(2)] = null);

(statearr_30778_30861[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (20))){
var inst_30675 = (state_30772[(12)]);
var inst_30683 = figwheel.client.file_reloading.sort_files.call(null,inst_30675);
var state_30772__$1 = state_30772;
var statearr_30779_30862 = state_30772__$1;
(statearr_30779_30862[(2)] = inst_30683);

(statearr_30779_30862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (27))){
var state_30772__$1 = state_30772;
var statearr_30780_30863 = state_30772__$1;
(statearr_30780_30863[(2)] = null);

(statearr_30780_30863[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (1))){
var inst_30624 = (state_30772[(13)]);
var inst_30621 = before_jsload.call(null,files);
var inst_30622 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30623 = (function (){return ((function (inst_30624,inst_30621,inst_30622,state_val_30773,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30612_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30612_SHARP_);
});
;})(inst_30624,inst_30621,inst_30622,state_val_30773,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30624__$1 = cljs.core.filter.call(null,inst_30623,files);
var inst_30625 = cljs.core.not_empty.call(null,inst_30624__$1);
var state_30772__$1 = (function (){var statearr_30781 = state_30772;
(statearr_30781[(14)] = inst_30621);

(statearr_30781[(15)] = inst_30622);

(statearr_30781[(13)] = inst_30624__$1);

return statearr_30781;
})();
if(cljs.core.truth_(inst_30625)){
var statearr_30782_30864 = state_30772__$1;
(statearr_30782_30864[(1)] = (2));

} else {
var statearr_30783_30865 = state_30772__$1;
(statearr_30783_30865[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (24))){
var state_30772__$1 = state_30772;
var statearr_30784_30866 = state_30772__$1;
(statearr_30784_30866[(2)] = null);

(statearr_30784_30866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (39))){
var inst_30725 = (state_30772[(16)]);
var state_30772__$1 = state_30772;
var statearr_30785_30867 = state_30772__$1;
(statearr_30785_30867[(2)] = inst_30725);

(statearr_30785_30867[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (46))){
var inst_30767 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
var statearr_30786_30868 = state_30772__$1;
(statearr_30786_30868[(2)] = inst_30767);

(statearr_30786_30868[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (4))){
var inst_30669 = (state_30772[(2)]);
var inst_30670 = cljs.core.List.EMPTY;
var inst_30671 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30670);
var inst_30672 = (function (){return ((function (inst_30669,inst_30670,inst_30671,state_val_30773,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30613_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30613_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30613_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30613_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_30669,inst_30670,inst_30671,state_val_30773,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30673 = cljs.core.filter.call(null,inst_30672,files);
var inst_30674 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30675 = cljs.core.concat.call(null,inst_30673,inst_30674);
var state_30772__$1 = (function (){var statearr_30787 = state_30772;
(statearr_30787[(17)] = inst_30671);

(statearr_30787[(12)] = inst_30675);

(statearr_30787[(18)] = inst_30669);

return statearr_30787;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30788_30869 = state_30772__$1;
(statearr_30788_30869[(1)] = (16));

} else {
var statearr_30789_30870 = state_30772__$1;
(statearr_30789_30870[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (15))){
var inst_30659 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
var statearr_30790_30871 = state_30772__$1;
(statearr_30790_30871[(2)] = inst_30659);

(statearr_30790_30871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (21))){
var inst_30685 = (state_30772[(19)]);
var inst_30685__$1 = (state_30772[(2)]);
var inst_30686 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30685__$1);
var state_30772__$1 = (function (){var statearr_30791 = state_30772;
(statearr_30791[(19)] = inst_30685__$1);

return statearr_30791;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30772__$1,(22),inst_30686);
} else {
if((state_val_30773 === (31))){
var inst_30770 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30772__$1,inst_30770);
} else {
if((state_val_30773 === (32))){
var inst_30725 = (state_30772[(16)]);
var inst_30730 = inst_30725.cljs$lang$protocol_mask$partition0$;
var inst_30731 = (inst_30730 & (64));
var inst_30732 = inst_30725.cljs$core$ISeq$;
var inst_30733 = (cljs.core.PROTOCOL_SENTINEL === inst_30732);
var inst_30734 = ((inst_30731) || (inst_30733));
var state_30772__$1 = state_30772;
if(cljs.core.truth_(inst_30734)){
var statearr_30792_30872 = state_30772__$1;
(statearr_30792_30872[(1)] = (35));

} else {
var statearr_30793_30873 = state_30772__$1;
(statearr_30793_30873[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (40))){
var inst_30747 = (state_30772[(20)]);
var inst_30746 = (state_30772[(2)]);
var inst_30747__$1 = cljs.core.get.call(null,inst_30746,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30748 = cljs.core.get.call(null,inst_30746,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30749 = cljs.core.not_empty.call(null,inst_30747__$1);
var state_30772__$1 = (function (){var statearr_30794 = state_30772;
(statearr_30794[(20)] = inst_30747__$1);

(statearr_30794[(21)] = inst_30748);

return statearr_30794;
})();
if(cljs.core.truth_(inst_30749)){
var statearr_30795_30874 = state_30772__$1;
(statearr_30795_30874[(1)] = (41));

} else {
var statearr_30796_30875 = state_30772__$1;
(statearr_30796_30875[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (33))){
var state_30772__$1 = state_30772;
var statearr_30797_30876 = state_30772__$1;
(statearr_30797_30876[(2)] = false);

(statearr_30797_30876[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (13))){
var inst_30645 = (state_30772[(22)]);
var inst_30649 = cljs.core.chunk_first.call(null,inst_30645);
var inst_30650 = cljs.core.chunk_rest.call(null,inst_30645);
var inst_30651 = cljs.core.count.call(null,inst_30649);
var inst_30632 = inst_30650;
var inst_30633 = inst_30649;
var inst_30634 = inst_30651;
var inst_30635 = (0);
var state_30772__$1 = (function (){var statearr_30798 = state_30772;
(statearr_30798[(7)] = inst_30632);

(statearr_30798[(8)] = inst_30633);

(statearr_30798[(9)] = inst_30635);

(statearr_30798[(10)] = inst_30634);

return statearr_30798;
})();
var statearr_30799_30877 = state_30772__$1;
(statearr_30799_30877[(2)] = null);

(statearr_30799_30877[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (22))){
var inst_30688 = (state_30772[(23)]);
var inst_30685 = (state_30772[(19)]);
var inst_30689 = (state_30772[(24)]);
var inst_30693 = (state_30772[(25)]);
var inst_30688__$1 = (state_30772[(2)]);
var inst_30689__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30688__$1);
var inst_30690 = (function (){var all_files = inst_30685;
var res_SINGLEQUOTE_ = inst_30688__$1;
var res = inst_30689__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30688,inst_30685,inst_30689,inst_30693,inst_30688__$1,inst_30689__$1,state_val_30773,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30614_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30614_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30688,inst_30685,inst_30689,inst_30693,inst_30688__$1,inst_30689__$1,state_val_30773,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30691 = cljs.core.filter.call(null,inst_30690,inst_30688__$1);
var inst_30692 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30693__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30692);
var inst_30694 = cljs.core.not_empty.call(null,inst_30693__$1);
var state_30772__$1 = (function (){var statearr_30800 = state_30772;
(statearr_30800[(23)] = inst_30688__$1);

(statearr_30800[(26)] = inst_30691);

(statearr_30800[(24)] = inst_30689__$1);

(statearr_30800[(25)] = inst_30693__$1);

return statearr_30800;
})();
if(cljs.core.truth_(inst_30694)){
var statearr_30801_30878 = state_30772__$1;
(statearr_30801_30878[(1)] = (23));

} else {
var statearr_30802_30879 = state_30772__$1;
(statearr_30802_30879[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (36))){
var state_30772__$1 = state_30772;
var statearr_30803_30880 = state_30772__$1;
(statearr_30803_30880[(2)] = false);

(statearr_30803_30880[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (41))){
var inst_30747 = (state_30772[(20)]);
var inst_30751 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30752 = cljs.core.map.call(null,inst_30751,inst_30747);
var inst_30753 = cljs.core.pr_str.call(null,inst_30752);
var inst_30754 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30753)].join('');
var inst_30755 = figwheel.client.utils.log.call(null,inst_30754);
var state_30772__$1 = state_30772;
var statearr_30804_30881 = state_30772__$1;
(statearr_30804_30881[(2)] = inst_30755);

(statearr_30804_30881[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (43))){
var inst_30748 = (state_30772[(21)]);
var inst_30758 = (state_30772[(2)]);
var inst_30759 = cljs.core.not_empty.call(null,inst_30748);
var state_30772__$1 = (function (){var statearr_30805 = state_30772;
(statearr_30805[(27)] = inst_30758);

return statearr_30805;
})();
if(cljs.core.truth_(inst_30759)){
var statearr_30806_30882 = state_30772__$1;
(statearr_30806_30882[(1)] = (44));

} else {
var statearr_30807_30883 = state_30772__$1;
(statearr_30807_30883[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (29))){
var inst_30688 = (state_30772[(23)]);
var inst_30685 = (state_30772[(19)]);
var inst_30691 = (state_30772[(26)]);
var inst_30689 = (state_30772[(24)]);
var inst_30725 = (state_30772[(16)]);
var inst_30693 = (state_30772[(25)]);
var inst_30721 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30724 = (function (){var all_files = inst_30685;
var res_SINGLEQUOTE_ = inst_30688;
var res = inst_30689;
var files_not_loaded = inst_30691;
var dependencies_that_loaded = inst_30693;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30688,inst_30685,inst_30691,inst_30689,inst_30725,inst_30693,inst_30721,state_val_30773,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30723){
var map__30808 = p__30723;
var map__30808__$1 = ((((!((map__30808 == null)))?(((((map__30808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30808):map__30808);
var namespace = cljs.core.get.call(null,map__30808__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30688,inst_30685,inst_30691,inst_30689,inst_30725,inst_30693,inst_30721,state_val_30773,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30725__$1 = cljs.core.group_by.call(null,inst_30724,inst_30691);
var inst_30727 = (inst_30725__$1 == null);
var inst_30728 = cljs.core.not.call(null,inst_30727);
var state_30772__$1 = (function (){var statearr_30810 = state_30772;
(statearr_30810[(28)] = inst_30721);

(statearr_30810[(16)] = inst_30725__$1);

return statearr_30810;
})();
if(inst_30728){
var statearr_30811_30884 = state_30772__$1;
(statearr_30811_30884[(1)] = (32));

} else {
var statearr_30812_30885 = state_30772__$1;
(statearr_30812_30885[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (44))){
var inst_30748 = (state_30772[(21)]);
var inst_30761 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30748);
var inst_30762 = cljs.core.pr_str.call(null,inst_30761);
var inst_30763 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30762)].join('');
var inst_30764 = figwheel.client.utils.log.call(null,inst_30763);
var state_30772__$1 = state_30772;
var statearr_30813_30886 = state_30772__$1;
(statearr_30813_30886[(2)] = inst_30764);

(statearr_30813_30886[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (6))){
var inst_30666 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
var statearr_30814_30887 = state_30772__$1;
(statearr_30814_30887[(2)] = inst_30666);

(statearr_30814_30887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (28))){
var inst_30691 = (state_30772[(26)]);
var inst_30718 = (state_30772[(2)]);
var inst_30719 = cljs.core.not_empty.call(null,inst_30691);
var state_30772__$1 = (function (){var statearr_30815 = state_30772;
(statearr_30815[(29)] = inst_30718);

return statearr_30815;
})();
if(cljs.core.truth_(inst_30719)){
var statearr_30816_30888 = state_30772__$1;
(statearr_30816_30888[(1)] = (29));

} else {
var statearr_30817_30889 = state_30772__$1;
(statearr_30817_30889[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (25))){
var inst_30689 = (state_30772[(24)]);
var inst_30705 = (state_30772[(2)]);
var inst_30706 = cljs.core.not_empty.call(null,inst_30689);
var state_30772__$1 = (function (){var statearr_30818 = state_30772;
(statearr_30818[(30)] = inst_30705);

return statearr_30818;
})();
if(cljs.core.truth_(inst_30706)){
var statearr_30819_30890 = state_30772__$1;
(statearr_30819_30890[(1)] = (26));

} else {
var statearr_30820_30891 = state_30772__$1;
(statearr_30820_30891[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (34))){
var inst_30741 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
if(cljs.core.truth_(inst_30741)){
var statearr_30821_30892 = state_30772__$1;
(statearr_30821_30892[(1)] = (38));

} else {
var statearr_30822_30893 = state_30772__$1;
(statearr_30822_30893[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (17))){
var state_30772__$1 = state_30772;
var statearr_30823_30894 = state_30772__$1;
(statearr_30823_30894[(2)] = recompile_dependents);

(statearr_30823_30894[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (3))){
var state_30772__$1 = state_30772;
var statearr_30824_30895 = state_30772__$1;
(statearr_30824_30895[(2)] = null);

(statearr_30824_30895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (12))){
var inst_30662 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
var statearr_30825_30896 = state_30772__$1;
(statearr_30825_30896[(2)] = inst_30662);

(statearr_30825_30896[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (2))){
var inst_30624 = (state_30772[(13)]);
var inst_30631 = cljs.core.seq.call(null,inst_30624);
var inst_30632 = inst_30631;
var inst_30633 = null;
var inst_30634 = (0);
var inst_30635 = (0);
var state_30772__$1 = (function (){var statearr_30826 = state_30772;
(statearr_30826[(7)] = inst_30632);

(statearr_30826[(8)] = inst_30633);

(statearr_30826[(9)] = inst_30635);

(statearr_30826[(10)] = inst_30634);

return statearr_30826;
})();
var statearr_30827_30897 = state_30772__$1;
(statearr_30827_30897[(2)] = null);

(statearr_30827_30897[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (23))){
var inst_30688 = (state_30772[(23)]);
var inst_30685 = (state_30772[(19)]);
var inst_30691 = (state_30772[(26)]);
var inst_30689 = (state_30772[(24)]);
var inst_30693 = (state_30772[(25)]);
var inst_30696 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30698 = (function (){var all_files = inst_30685;
var res_SINGLEQUOTE_ = inst_30688;
var res = inst_30689;
var files_not_loaded = inst_30691;
var dependencies_that_loaded = inst_30693;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30688,inst_30685,inst_30691,inst_30689,inst_30693,inst_30696,state_val_30773,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30697){
var map__30828 = p__30697;
var map__30828__$1 = ((((!((map__30828 == null)))?(((((map__30828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30828):map__30828);
var request_url = cljs.core.get.call(null,map__30828__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30688,inst_30685,inst_30691,inst_30689,inst_30693,inst_30696,state_val_30773,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30699 = cljs.core.reverse.call(null,inst_30693);
var inst_30700 = cljs.core.map.call(null,inst_30698,inst_30699);
var inst_30701 = cljs.core.pr_str.call(null,inst_30700);
var inst_30702 = figwheel.client.utils.log.call(null,inst_30701);
var state_30772__$1 = (function (){var statearr_30830 = state_30772;
(statearr_30830[(31)] = inst_30696);

return statearr_30830;
})();
var statearr_30831_30898 = state_30772__$1;
(statearr_30831_30898[(2)] = inst_30702);

(statearr_30831_30898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (35))){
var state_30772__$1 = state_30772;
var statearr_30832_30899 = state_30772__$1;
(statearr_30832_30899[(2)] = true);

(statearr_30832_30899[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (19))){
var inst_30675 = (state_30772[(12)]);
var inst_30681 = figwheel.client.file_reloading.expand_files.call(null,inst_30675);
var state_30772__$1 = state_30772;
var statearr_30833_30900 = state_30772__$1;
(statearr_30833_30900[(2)] = inst_30681);

(statearr_30833_30900[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (11))){
var state_30772__$1 = state_30772;
var statearr_30834_30901 = state_30772__$1;
(statearr_30834_30901[(2)] = null);

(statearr_30834_30901[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (9))){
var inst_30664 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
var statearr_30835_30902 = state_30772__$1;
(statearr_30835_30902[(2)] = inst_30664);

(statearr_30835_30902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (5))){
var inst_30635 = (state_30772[(9)]);
var inst_30634 = (state_30772[(10)]);
var inst_30637 = (inst_30635 < inst_30634);
var inst_30638 = inst_30637;
var state_30772__$1 = state_30772;
if(cljs.core.truth_(inst_30638)){
var statearr_30836_30903 = state_30772__$1;
(statearr_30836_30903[(1)] = (7));

} else {
var statearr_30837_30904 = state_30772__$1;
(statearr_30837_30904[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (14))){
var inst_30645 = (state_30772[(22)]);
var inst_30654 = cljs.core.first.call(null,inst_30645);
var inst_30655 = figwheel.client.file_reloading.eval_body.call(null,inst_30654,opts);
var inst_30656 = cljs.core.next.call(null,inst_30645);
var inst_30632 = inst_30656;
var inst_30633 = null;
var inst_30634 = (0);
var inst_30635 = (0);
var state_30772__$1 = (function (){var statearr_30838 = state_30772;
(statearr_30838[(7)] = inst_30632);

(statearr_30838[(8)] = inst_30633);

(statearr_30838[(9)] = inst_30635);

(statearr_30838[(32)] = inst_30655);

(statearr_30838[(10)] = inst_30634);

return statearr_30838;
})();
var statearr_30839_30905 = state_30772__$1;
(statearr_30839_30905[(2)] = null);

(statearr_30839_30905[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (45))){
var state_30772__$1 = state_30772;
var statearr_30840_30906 = state_30772__$1;
(statearr_30840_30906[(2)] = null);

(statearr_30840_30906[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (26))){
var inst_30688 = (state_30772[(23)]);
var inst_30685 = (state_30772[(19)]);
var inst_30691 = (state_30772[(26)]);
var inst_30689 = (state_30772[(24)]);
var inst_30693 = (state_30772[(25)]);
var inst_30708 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30710 = (function (){var all_files = inst_30685;
var res_SINGLEQUOTE_ = inst_30688;
var res = inst_30689;
var files_not_loaded = inst_30691;
var dependencies_that_loaded = inst_30693;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30688,inst_30685,inst_30691,inst_30689,inst_30693,inst_30708,state_val_30773,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30709){
var map__30841 = p__30709;
var map__30841__$1 = ((((!((map__30841 == null)))?(((((map__30841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30841):map__30841);
var namespace = cljs.core.get.call(null,map__30841__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30841__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30688,inst_30685,inst_30691,inst_30689,inst_30693,inst_30708,state_val_30773,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30711 = cljs.core.map.call(null,inst_30710,inst_30689);
var inst_30712 = cljs.core.pr_str.call(null,inst_30711);
var inst_30713 = figwheel.client.utils.log.call(null,inst_30712);
var inst_30714 = (function (){var all_files = inst_30685;
var res_SINGLEQUOTE_ = inst_30688;
var res = inst_30689;
var files_not_loaded = inst_30691;
var dependencies_that_loaded = inst_30693;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30688,inst_30685,inst_30691,inst_30689,inst_30693,inst_30708,inst_30710,inst_30711,inst_30712,inst_30713,state_val_30773,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30688,inst_30685,inst_30691,inst_30689,inst_30693,inst_30708,inst_30710,inst_30711,inst_30712,inst_30713,state_val_30773,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30715 = setTimeout(inst_30714,(10));
var state_30772__$1 = (function (){var statearr_30843 = state_30772;
(statearr_30843[(33)] = inst_30713);

(statearr_30843[(34)] = inst_30708);

return statearr_30843;
})();
var statearr_30844_30907 = state_30772__$1;
(statearr_30844_30907[(2)] = inst_30715);

(statearr_30844_30907[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (16))){
var state_30772__$1 = state_30772;
var statearr_30845_30908 = state_30772__$1;
(statearr_30845_30908[(2)] = reload_dependents);

(statearr_30845_30908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (38))){
var inst_30725 = (state_30772[(16)]);
var inst_30743 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30725);
var state_30772__$1 = state_30772;
var statearr_30846_30909 = state_30772__$1;
(statearr_30846_30909[(2)] = inst_30743);

(statearr_30846_30909[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (30))){
var state_30772__$1 = state_30772;
var statearr_30847_30910 = state_30772__$1;
(statearr_30847_30910[(2)] = null);

(statearr_30847_30910[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (10))){
var inst_30645 = (state_30772[(22)]);
var inst_30647 = cljs.core.chunked_seq_QMARK_.call(null,inst_30645);
var state_30772__$1 = state_30772;
if(inst_30647){
var statearr_30848_30911 = state_30772__$1;
(statearr_30848_30911[(1)] = (13));

} else {
var statearr_30849_30912 = state_30772__$1;
(statearr_30849_30912[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (18))){
var inst_30679 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
if(cljs.core.truth_(inst_30679)){
var statearr_30850_30913 = state_30772__$1;
(statearr_30850_30913[(1)] = (19));

} else {
var statearr_30851_30914 = state_30772__$1;
(statearr_30851_30914[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (42))){
var state_30772__$1 = state_30772;
var statearr_30852_30915 = state_30772__$1;
(statearr_30852_30915[(2)] = null);

(statearr_30852_30915[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (37))){
var inst_30738 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
var statearr_30853_30916 = state_30772__$1;
(statearr_30853_30916[(2)] = inst_30738);

(statearr_30853_30916[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (8))){
var inst_30632 = (state_30772[(7)]);
var inst_30645 = (state_30772[(22)]);
var inst_30645__$1 = cljs.core.seq.call(null,inst_30632);
var state_30772__$1 = (function (){var statearr_30854 = state_30772;
(statearr_30854[(22)] = inst_30645__$1);

return statearr_30854;
})();
if(inst_30645__$1){
var statearr_30855_30917 = state_30772__$1;
(statearr_30855_30917[(1)] = (10));

} else {
var statearr_30856_30918 = state_30772__$1;
(statearr_30856_30918[(1)] = (11));

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
});})(c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26990__auto__,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26991__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26991__auto____0 = (function (){
var statearr_30857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30857[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26991__auto__);

(statearr_30857[(1)] = (1));

return statearr_30857;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26991__auto____1 = (function (state_30772){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_30772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e30858){if((e30858 instanceof Object)){
var ex__26994__auto__ = e30858;
var statearr_30859_30919 = state_30772;
(statearr_30859_30919[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30920 = state_30772;
state_30772 = G__30920;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26991__auto__ = function(state_30772){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26991__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26991__auto____1.call(this,state_30772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26991__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26991__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27082__auto__ = (function (){var statearr_30860 = f__27081__auto__.call(null);
(statearr_30860[(6)] = c__27080__auto__);

return statearr_30860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto__,map__30617,map__30617__$1,opts,before_jsload,on_jsload,reload_dependents,map__30618,map__30618__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27080__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30923,link){
var map__30924 = p__30923;
var map__30924__$1 = ((((!((map__30924 == null)))?(((((map__30924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30924):map__30924);
var file = cljs.core.get.call(null,map__30924__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30924,map__30924__$1,file){
return (function (p1__30921_SHARP_,p2__30922_SHARP_){
if(cljs.core._EQ_.call(null,p1__30921_SHARP_,p2__30922_SHARP_)){
return p1__30921_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30924,map__30924__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30927){
var map__30928 = p__30927;
var map__30928__$1 = ((((!((map__30928 == null)))?(((((map__30928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30928):map__30928);
var match_length = cljs.core.get.call(null,map__30928__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30928__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30926_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30926_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30930_SHARP_,p2__30931_SHARP_){
return cljs.core.assoc.call(null,p1__30930_SHARP_,cljs.core.get.call(null,p2__30931_SHARP_,key),p2__30931_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30932 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30932);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30932);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30933,p__30934){
var map__30935 = p__30933;
var map__30935__$1 = ((((!((map__30935 == null)))?(((((map__30935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30935):map__30935);
var on_cssload = cljs.core.get.call(null,map__30935__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30936 = p__30934;
var map__30936__$1 = ((((!((map__30936 == null)))?(((((map__30936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30936):map__30936);
var files_msg = map__30936__$1;
var files = cljs.core.get.call(null,map__30936__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1547484323623
