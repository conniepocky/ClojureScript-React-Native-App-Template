// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31422){
var map__31423 = p__31422;
var map__31423__$1 = ((((!((map__31423 == null)))?(((((map__31423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31423):map__31423);
var m = map__31423__$1;
var n = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31425_31447 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31426_31448 = null;
var count__31427_31449 = (0);
var i__31428_31450 = (0);
while(true){
if((i__31428_31450 < count__31427_31449)){
var f_31451 = cljs.core._nth.call(null,chunk__31426_31448,i__31428_31450);
cljs.core.println.call(null,"  ",f_31451);


var G__31452 = seq__31425_31447;
var G__31453 = chunk__31426_31448;
var G__31454 = count__31427_31449;
var G__31455 = (i__31428_31450 + (1));
seq__31425_31447 = G__31452;
chunk__31426_31448 = G__31453;
count__31427_31449 = G__31454;
i__31428_31450 = G__31455;
continue;
} else {
var temp__5457__auto___31456 = cljs.core.seq.call(null,seq__31425_31447);
if(temp__5457__auto___31456){
var seq__31425_31457__$1 = temp__5457__auto___31456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31425_31457__$1)){
var c__4319__auto___31458 = cljs.core.chunk_first.call(null,seq__31425_31457__$1);
var G__31459 = cljs.core.chunk_rest.call(null,seq__31425_31457__$1);
var G__31460 = c__4319__auto___31458;
var G__31461 = cljs.core.count.call(null,c__4319__auto___31458);
var G__31462 = (0);
seq__31425_31447 = G__31459;
chunk__31426_31448 = G__31460;
count__31427_31449 = G__31461;
i__31428_31450 = G__31462;
continue;
} else {
var f_31463 = cljs.core.first.call(null,seq__31425_31457__$1);
cljs.core.println.call(null,"  ",f_31463);


var G__31464 = cljs.core.next.call(null,seq__31425_31457__$1);
var G__31465 = null;
var G__31466 = (0);
var G__31467 = (0);
seq__31425_31447 = G__31464;
chunk__31426_31448 = G__31465;
count__31427_31449 = G__31466;
i__31428_31450 = G__31467;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31468 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31468);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31468)))?cljs.core.second.call(null,arglists_31468):arglists_31468));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31429_31469 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31430_31470 = null;
var count__31431_31471 = (0);
var i__31432_31472 = (0);
while(true){
if((i__31432_31472 < count__31431_31471)){
var vec__31433_31473 = cljs.core._nth.call(null,chunk__31430_31470,i__31432_31472);
var name_31474 = cljs.core.nth.call(null,vec__31433_31473,(0),null);
var map__31436_31475 = cljs.core.nth.call(null,vec__31433_31473,(1),null);
var map__31436_31476__$1 = ((((!((map__31436_31475 == null)))?(((((map__31436_31475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31436_31475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31436_31475):map__31436_31475);
var doc_31477 = cljs.core.get.call(null,map__31436_31476__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31478 = cljs.core.get.call(null,map__31436_31476__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31474);

cljs.core.println.call(null," ",arglists_31478);

if(cljs.core.truth_(doc_31477)){
cljs.core.println.call(null," ",doc_31477);
} else {
}


var G__31479 = seq__31429_31469;
var G__31480 = chunk__31430_31470;
var G__31481 = count__31431_31471;
var G__31482 = (i__31432_31472 + (1));
seq__31429_31469 = G__31479;
chunk__31430_31470 = G__31480;
count__31431_31471 = G__31481;
i__31432_31472 = G__31482;
continue;
} else {
var temp__5457__auto___31483 = cljs.core.seq.call(null,seq__31429_31469);
if(temp__5457__auto___31483){
var seq__31429_31484__$1 = temp__5457__auto___31483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31429_31484__$1)){
var c__4319__auto___31485 = cljs.core.chunk_first.call(null,seq__31429_31484__$1);
var G__31486 = cljs.core.chunk_rest.call(null,seq__31429_31484__$1);
var G__31487 = c__4319__auto___31485;
var G__31488 = cljs.core.count.call(null,c__4319__auto___31485);
var G__31489 = (0);
seq__31429_31469 = G__31486;
chunk__31430_31470 = G__31487;
count__31431_31471 = G__31488;
i__31432_31472 = G__31489;
continue;
} else {
var vec__31438_31490 = cljs.core.first.call(null,seq__31429_31484__$1);
var name_31491 = cljs.core.nth.call(null,vec__31438_31490,(0),null);
var map__31441_31492 = cljs.core.nth.call(null,vec__31438_31490,(1),null);
var map__31441_31493__$1 = ((((!((map__31441_31492 == null)))?(((((map__31441_31492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31441_31492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31441_31492):map__31441_31492);
var doc_31494 = cljs.core.get.call(null,map__31441_31493__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31495 = cljs.core.get.call(null,map__31441_31493__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31491);

cljs.core.println.call(null," ",arglists_31495);

if(cljs.core.truth_(doc_31494)){
cljs.core.println.call(null," ",doc_31494);
} else {
}


var G__31496 = cljs.core.next.call(null,seq__31429_31484__$1);
var G__31497 = null;
var G__31498 = (0);
var G__31499 = (0);
seq__31429_31469 = G__31496;
chunk__31430_31470 = G__31497;
count__31431_31471 = G__31498;
i__31432_31472 = G__31499;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__31443 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31444 = null;
var count__31445 = (0);
var i__31446 = (0);
while(true){
if((i__31446 < count__31445)){
var role = cljs.core._nth.call(null,chunk__31444,i__31446);
var temp__5457__auto___31500__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31500__$1)){
var spec_31501 = temp__5457__auto___31500__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31501));
} else {
}


var G__31502 = seq__31443;
var G__31503 = chunk__31444;
var G__31504 = count__31445;
var G__31505 = (i__31446 + (1));
seq__31443 = G__31502;
chunk__31444 = G__31503;
count__31445 = G__31504;
i__31446 = G__31505;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31443);
if(temp__5457__auto____$1){
var seq__31443__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31443__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31443__$1);
var G__31506 = cljs.core.chunk_rest.call(null,seq__31443__$1);
var G__31507 = c__4319__auto__;
var G__31508 = cljs.core.count.call(null,c__4319__auto__);
var G__31509 = (0);
seq__31443 = G__31506;
chunk__31444 = G__31507;
count__31445 = G__31508;
i__31446 = G__31509;
continue;
} else {
var role = cljs.core.first.call(null,seq__31443__$1);
var temp__5457__auto___31510__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31510__$2)){
var spec_31511 = temp__5457__auto___31510__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31511));
} else {
}


var G__31512 = cljs.core.next.call(null,seq__31443__$1);
var G__31513 = null;
var G__31514 = (0);
var G__31515 = (0);
seq__31443 = G__31512;
chunk__31444 = G__31513;
count__31445 = G__31514;
i__31446 = G__31515;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1547484324049
