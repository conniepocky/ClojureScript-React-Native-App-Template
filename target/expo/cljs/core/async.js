// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27140 = arguments.length;
switch (G__27140) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27141 = (function (f,blockable,meta27142){
this.f = f;
this.blockable = blockable;
this.meta27142 = meta27142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27143,meta27142__$1){
var self__ = this;
var _27143__$1 = this;
return (new cljs.core.async.t_cljs$core$async27141(self__.f,self__.blockable,meta27142__$1));
});

cljs.core.async.t_cljs$core$async27141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27143){
var self__ = this;
var _27143__$1 = this;
return self__.meta27142;
});

cljs.core.async.t_cljs$core$async27141.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27141.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27141.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27141.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27142","meta27142",-807886137,null)], null);
});

cljs.core.async.t_cljs$core$async27141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27141";

cljs.core.async.t_cljs$core$async27141.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27141");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27141.
 */
cljs.core.async.__GT_t_cljs$core$async27141 = (function cljs$core$async$__GT_t_cljs$core$async27141(f__$1,blockable__$1,meta27142){
return (new cljs.core.async.t_cljs$core$async27141(f__$1,blockable__$1,meta27142));
});

}

return (new cljs.core.async.t_cljs$core$async27141(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27147 = arguments.length;
switch (G__27147) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27150 = arguments.length;
switch (G__27150) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27153 = arguments.length;
switch (G__27153) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27155 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27155);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27155,ret){
return (function (){
return fn1.call(null,val_27155);
});})(val_27155,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27157 = arguments.length;
switch (G__27157) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___27159 = n;
var x_27160 = (0);
while(true){
if((x_27160 < n__4376__auto___27159)){
(a[x_27160] = (0));

var G__27161 = (x_27160 + (1));
x_27160 = G__27161;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27162 = (i + (1));
i = G__27162;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27163 = (function (flag,meta27164){
this.flag = flag;
this.meta27164 = meta27164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27165,meta27164__$1){
var self__ = this;
var _27165__$1 = this;
return (new cljs.core.async.t_cljs$core$async27163(self__.flag,meta27164__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27165){
var self__ = this;
var _27165__$1 = this;
return self__.meta27164;
});})(flag))
;

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27163.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27164","meta27164",1248255094,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27163";

cljs.core.async.t_cljs$core$async27163.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27163");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27163.
 */
cljs.core.async.__GT_t_cljs$core$async27163 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27163(flag__$1,meta27164){
return (new cljs.core.async.t_cljs$core$async27163(flag__$1,meta27164));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27163(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27166 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27166 = (function (flag,cb,meta27167){
this.flag = flag;
this.cb = cb;
this.meta27167 = meta27167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27168,meta27167__$1){
var self__ = this;
var _27168__$1 = this;
return (new cljs.core.async.t_cljs$core$async27166(self__.flag,self__.cb,meta27167__$1));
});

cljs.core.async.t_cljs$core$async27166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27168){
var self__ = this;
var _27168__$1 = this;
return self__.meta27167;
});

cljs.core.async.t_cljs$core$async27166.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27166.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27167","meta27167",993761047,null)], null);
});

cljs.core.async.t_cljs$core$async27166.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27166";

cljs.core.async.t_cljs$core$async27166.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27166");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27166.
 */
cljs.core.async.__GT_t_cljs$core$async27166 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27166(flag__$1,cb__$1,meta27167){
return (new cljs.core.async.t_cljs$core$async27166(flag__$1,cb__$1,meta27167));
});

}

return (new cljs.core.async.t_cljs$core$async27166(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27169_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27169_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27170_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27170_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27171 = (i + (1));
i = G__27171;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27177 = arguments.length;
var i__4500__auto___27178 = (0);
while(true){
if((i__4500__auto___27178 < len__4499__auto___27177)){
args__4502__auto__.push((arguments[i__4500__auto___27178]));

var G__27179 = (i__4500__auto___27178 + (1));
i__4500__auto___27178 = G__27179;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27174){
var map__27175 = p__27174;
var map__27175__$1 = ((((!((map__27175 == null)))?(((((map__27175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27175):map__27175);
var opts = map__27175__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27172){
var G__27173 = cljs.core.first.call(null,seq27172);
var seq27172__$1 = cljs.core.next.call(null,seq27172);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27173,seq27172__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27181 = arguments.length;
switch (G__27181) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27080__auto___27227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___27227){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___27227){
return (function (state_27205){
var state_val_27206 = (state_27205[(1)]);
if((state_val_27206 === (7))){
var inst_27201 = (state_27205[(2)]);
var state_27205__$1 = state_27205;
var statearr_27207_27228 = state_27205__$1;
(statearr_27207_27228[(2)] = inst_27201);

(statearr_27207_27228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (1))){
var state_27205__$1 = state_27205;
var statearr_27208_27229 = state_27205__$1;
(statearr_27208_27229[(2)] = null);

(statearr_27208_27229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (4))){
var inst_27184 = (state_27205[(7)]);
var inst_27184__$1 = (state_27205[(2)]);
var inst_27185 = (inst_27184__$1 == null);
var state_27205__$1 = (function (){var statearr_27209 = state_27205;
(statearr_27209[(7)] = inst_27184__$1);

return statearr_27209;
})();
if(cljs.core.truth_(inst_27185)){
var statearr_27210_27230 = state_27205__$1;
(statearr_27210_27230[(1)] = (5));

} else {
var statearr_27211_27231 = state_27205__$1;
(statearr_27211_27231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (13))){
var state_27205__$1 = state_27205;
var statearr_27212_27232 = state_27205__$1;
(statearr_27212_27232[(2)] = null);

(statearr_27212_27232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (6))){
var inst_27184 = (state_27205[(7)]);
var state_27205__$1 = state_27205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27205__$1,(11),to,inst_27184);
} else {
if((state_val_27206 === (3))){
var inst_27203 = (state_27205[(2)]);
var state_27205__$1 = state_27205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27205__$1,inst_27203);
} else {
if((state_val_27206 === (12))){
var state_27205__$1 = state_27205;
var statearr_27213_27233 = state_27205__$1;
(statearr_27213_27233[(2)] = null);

(statearr_27213_27233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (2))){
var state_27205__$1 = state_27205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27205__$1,(4),from);
} else {
if((state_val_27206 === (11))){
var inst_27194 = (state_27205[(2)]);
var state_27205__$1 = state_27205;
if(cljs.core.truth_(inst_27194)){
var statearr_27214_27234 = state_27205__$1;
(statearr_27214_27234[(1)] = (12));

} else {
var statearr_27215_27235 = state_27205__$1;
(statearr_27215_27235[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (9))){
var state_27205__$1 = state_27205;
var statearr_27216_27236 = state_27205__$1;
(statearr_27216_27236[(2)] = null);

(statearr_27216_27236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (5))){
var state_27205__$1 = state_27205;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27217_27237 = state_27205__$1;
(statearr_27217_27237[(1)] = (8));

} else {
var statearr_27218_27238 = state_27205__$1;
(statearr_27218_27238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (14))){
var inst_27199 = (state_27205[(2)]);
var state_27205__$1 = state_27205;
var statearr_27219_27239 = state_27205__$1;
(statearr_27219_27239[(2)] = inst_27199);

(statearr_27219_27239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (10))){
var inst_27191 = (state_27205[(2)]);
var state_27205__$1 = state_27205;
var statearr_27220_27240 = state_27205__$1;
(statearr_27220_27240[(2)] = inst_27191);

(statearr_27220_27240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (8))){
var inst_27188 = cljs.core.async.close_BANG_.call(null,to);
var state_27205__$1 = state_27205;
var statearr_27221_27241 = state_27205__$1;
(statearr_27221_27241[(2)] = inst_27188);

(statearr_27221_27241[(1)] = (10));


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
});})(c__27080__auto___27227))
;
return ((function (switch__26990__auto__,c__27080__auto___27227){
return (function() {
var cljs$core$async$state_machine__26991__auto__ = null;
var cljs$core$async$state_machine__26991__auto____0 = (function (){
var statearr_27222 = [null,null,null,null,null,null,null,null];
(statearr_27222[(0)] = cljs$core$async$state_machine__26991__auto__);

(statearr_27222[(1)] = (1));

return statearr_27222;
});
var cljs$core$async$state_machine__26991__auto____1 = (function (state_27205){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_27205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e27223){if((e27223 instanceof Object)){
var ex__26994__auto__ = e27223;
var statearr_27224_27242 = state_27205;
(statearr_27224_27242[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27243 = state_27205;
state_27205 = G__27243;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$state_machine__26991__auto__ = function(state_27205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26991__auto____1.call(this,state_27205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26991__auto____0;
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26991__auto____1;
return cljs$core$async$state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___27227))
})();
var state__27082__auto__ = (function (){var statearr_27225 = f__27081__auto__.call(null);
(statearr_27225[(6)] = c__27080__auto___27227);

return statearr_27225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___27227))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27244){
var vec__27245 = p__27244;
var v = cljs.core.nth.call(null,vec__27245,(0),null);
var p = cljs.core.nth.call(null,vec__27245,(1),null);
var job = vec__27245;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27080__auto___27416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___27416,res,vec__27245,v,p,job,jobs,results){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___27416,res,vec__27245,v,p,job,jobs,results){
return (function (state_27252){
var state_val_27253 = (state_27252[(1)]);
if((state_val_27253 === (1))){
var state_27252__$1 = state_27252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27252__$1,(2),res,v);
} else {
if((state_val_27253 === (2))){
var inst_27249 = (state_27252[(2)]);
var inst_27250 = cljs.core.async.close_BANG_.call(null,res);
var state_27252__$1 = (function (){var statearr_27254 = state_27252;
(statearr_27254[(7)] = inst_27249);

return statearr_27254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27252__$1,inst_27250);
} else {
return null;
}
}
});})(c__27080__auto___27416,res,vec__27245,v,p,job,jobs,results))
;
return ((function (switch__26990__auto__,c__27080__auto___27416,res,vec__27245,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____0 = (function (){
var statearr_27255 = [null,null,null,null,null,null,null,null];
(statearr_27255[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__);

(statearr_27255[(1)] = (1));

return statearr_27255;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____1 = (function (state_27252){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_27252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e27256){if((e27256 instanceof Object)){
var ex__26994__auto__ = e27256;
var statearr_27257_27417 = state_27252;
(statearr_27257_27417[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27418 = state_27252;
state_27252 = G__27418;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__ = function(state_27252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____1.call(this,state_27252);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___27416,res,vec__27245,v,p,job,jobs,results))
})();
var state__27082__auto__ = (function (){var statearr_27258 = f__27081__auto__.call(null);
(statearr_27258[(6)] = c__27080__auto___27416);

return statearr_27258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___27416,res,vec__27245,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27259){
var vec__27260 = p__27259;
var v = cljs.core.nth.call(null,vec__27260,(0),null);
var p = cljs.core.nth.call(null,vec__27260,(1),null);
var job = vec__27260;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___27419 = n;
var __27420 = (0);
while(true){
if((__27420 < n__4376__auto___27419)){
var G__27263_27421 = type;
var G__27263_27422__$1 = (((G__27263_27421 instanceof cljs.core.Keyword))?G__27263_27421.fqn:null);
switch (G__27263_27422__$1) {
case "compute":
var c__27080__auto___27424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27420,c__27080__auto___27424,G__27263_27421,G__27263_27422__$1,n__4376__auto___27419,jobs,results,process,async){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (__27420,c__27080__auto___27424,G__27263_27421,G__27263_27422__$1,n__4376__auto___27419,jobs,results,process,async){
return (function (state_27276){
var state_val_27277 = (state_27276[(1)]);
if((state_val_27277 === (1))){
var state_27276__$1 = state_27276;
var statearr_27278_27425 = state_27276__$1;
(statearr_27278_27425[(2)] = null);

(statearr_27278_27425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (2))){
var state_27276__$1 = state_27276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27276__$1,(4),jobs);
} else {
if((state_val_27277 === (3))){
var inst_27274 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27276__$1,inst_27274);
} else {
if((state_val_27277 === (4))){
var inst_27266 = (state_27276[(2)]);
var inst_27267 = process.call(null,inst_27266);
var state_27276__$1 = state_27276;
if(cljs.core.truth_(inst_27267)){
var statearr_27279_27426 = state_27276__$1;
(statearr_27279_27426[(1)] = (5));

} else {
var statearr_27280_27427 = state_27276__$1;
(statearr_27280_27427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (5))){
var state_27276__$1 = state_27276;
var statearr_27281_27428 = state_27276__$1;
(statearr_27281_27428[(2)] = null);

(statearr_27281_27428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (6))){
var state_27276__$1 = state_27276;
var statearr_27282_27429 = state_27276__$1;
(statearr_27282_27429[(2)] = null);

(statearr_27282_27429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (7))){
var inst_27272 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27283_27430 = state_27276__$1;
(statearr_27283_27430[(2)] = inst_27272);

(statearr_27283_27430[(1)] = (3));


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
});})(__27420,c__27080__auto___27424,G__27263_27421,G__27263_27422__$1,n__4376__auto___27419,jobs,results,process,async))
;
return ((function (__27420,switch__26990__auto__,c__27080__auto___27424,G__27263_27421,G__27263_27422__$1,n__4376__auto___27419,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____0 = (function (){
var statearr_27284 = [null,null,null,null,null,null,null];
(statearr_27284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__);

(statearr_27284[(1)] = (1));

return statearr_27284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____1 = (function (state_27276){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_27276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e27285){if((e27285 instanceof Object)){
var ex__26994__auto__ = e27285;
var statearr_27286_27431 = state_27276;
(statearr_27286_27431[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27432 = state_27276;
state_27276 = G__27432;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__ = function(state_27276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____1.call(this,state_27276);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__;
})()
;})(__27420,switch__26990__auto__,c__27080__auto___27424,G__27263_27421,G__27263_27422__$1,n__4376__auto___27419,jobs,results,process,async))
})();
var state__27082__auto__ = (function (){var statearr_27287 = f__27081__auto__.call(null);
(statearr_27287[(6)] = c__27080__auto___27424);

return statearr_27287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(__27420,c__27080__auto___27424,G__27263_27421,G__27263_27422__$1,n__4376__auto___27419,jobs,results,process,async))
);


break;
case "async":
var c__27080__auto___27433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27420,c__27080__auto___27433,G__27263_27421,G__27263_27422__$1,n__4376__auto___27419,jobs,results,process,async){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (__27420,c__27080__auto___27433,G__27263_27421,G__27263_27422__$1,n__4376__auto___27419,jobs,results,process,async){
return (function (state_27300){
var state_val_27301 = (state_27300[(1)]);
if((state_val_27301 === (1))){
var state_27300__$1 = state_27300;
var statearr_27302_27434 = state_27300__$1;
(statearr_27302_27434[(2)] = null);

(statearr_27302_27434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (2))){
var state_27300__$1 = state_27300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27300__$1,(4),jobs);
} else {
if((state_val_27301 === (3))){
var inst_27298 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27300__$1,inst_27298);
} else {
if((state_val_27301 === (4))){
var inst_27290 = (state_27300[(2)]);
var inst_27291 = async.call(null,inst_27290);
var state_27300__$1 = state_27300;
if(cljs.core.truth_(inst_27291)){
var statearr_27303_27435 = state_27300__$1;
(statearr_27303_27435[(1)] = (5));

} else {
var statearr_27304_27436 = state_27300__$1;
(statearr_27304_27436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (5))){
var state_27300__$1 = state_27300;
var statearr_27305_27437 = state_27300__$1;
(statearr_27305_27437[(2)] = null);

(statearr_27305_27437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (6))){
var state_27300__$1 = state_27300;
var statearr_27306_27438 = state_27300__$1;
(statearr_27306_27438[(2)] = null);

(statearr_27306_27438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (7))){
var inst_27296 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
var statearr_27307_27439 = state_27300__$1;
(statearr_27307_27439[(2)] = inst_27296);

(statearr_27307_27439[(1)] = (3));


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
});})(__27420,c__27080__auto___27433,G__27263_27421,G__27263_27422__$1,n__4376__auto___27419,jobs,results,process,async))
;
return ((function (__27420,switch__26990__auto__,c__27080__auto___27433,G__27263_27421,G__27263_27422__$1,n__4376__auto___27419,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____0 = (function (){
var statearr_27308 = [null,null,null,null,null,null,null];
(statearr_27308[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__);

(statearr_27308[(1)] = (1));

return statearr_27308;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____1 = (function (state_27300){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_27300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e27309){if((e27309 instanceof Object)){
var ex__26994__auto__ = e27309;
var statearr_27310_27440 = state_27300;
(statearr_27310_27440[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27441 = state_27300;
state_27300 = G__27441;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__ = function(state_27300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____1.call(this,state_27300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__;
})()
;})(__27420,switch__26990__auto__,c__27080__auto___27433,G__27263_27421,G__27263_27422__$1,n__4376__auto___27419,jobs,results,process,async))
})();
var state__27082__auto__ = (function (){var statearr_27311 = f__27081__auto__.call(null);
(statearr_27311[(6)] = c__27080__auto___27433);

return statearr_27311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(__27420,c__27080__auto___27433,G__27263_27421,G__27263_27422__$1,n__4376__auto___27419,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27263_27422__$1)].join('')));

}

var G__27442 = (__27420 + (1));
__27420 = G__27442;
continue;
} else {
}
break;
}

var c__27080__auto___27443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___27443,jobs,results,process,async){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___27443,jobs,results,process,async){
return (function (state_27333){
var state_val_27334 = (state_27333[(1)]);
if((state_val_27334 === (1))){
var state_27333__$1 = state_27333;
var statearr_27335_27444 = state_27333__$1;
(statearr_27335_27444[(2)] = null);

(statearr_27335_27444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (2))){
var state_27333__$1 = state_27333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27333__$1,(4),from);
} else {
if((state_val_27334 === (3))){
var inst_27331 = (state_27333[(2)]);
var state_27333__$1 = state_27333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27333__$1,inst_27331);
} else {
if((state_val_27334 === (4))){
var inst_27314 = (state_27333[(7)]);
var inst_27314__$1 = (state_27333[(2)]);
var inst_27315 = (inst_27314__$1 == null);
var state_27333__$1 = (function (){var statearr_27336 = state_27333;
(statearr_27336[(7)] = inst_27314__$1);

return statearr_27336;
})();
if(cljs.core.truth_(inst_27315)){
var statearr_27337_27445 = state_27333__$1;
(statearr_27337_27445[(1)] = (5));

} else {
var statearr_27338_27446 = state_27333__$1;
(statearr_27338_27446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (5))){
var inst_27317 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27333__$1 = state_27333;
var statearr_27339_27447 = state_27333__$1;
(statearr_27339_27447[(2)] = inst_27317);

(statearr_27339_27447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (6))){
var inst_27319 = (state_27333[(8)]);
var inst_27314 = (state_27333[(7)]);
var inst_27319__$1 = cljs.core.async.chan.call(null,(1));
var inst_27320 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27321 = [inst_27314,inst_27319__$1];
var inst_27322 = (new cljs.core.PersistentVector(null,2,(5),inst_27320,inst_27321,null));
var state_27333__$1 = (function (){var statearr_27340 = state_27333;
(statearr_27340[(8)] = inst_27319__$1);

return statearr_27340;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27333__$1,(8),jobs,inst_27322);
} else {
if((state_val_27334 === (7))){
var inst_27329 = (state_27333[(2)]);
var state_27333__$1 = state_27333;
var statearr_27341_27448 = state_27333__$1;
(statearr_27341_27448[(2)] = inst_27329);

(statearr_27341_27448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (8))){
var inst_27319 = (state_27333[(8)]);
var inst_27324 = (state_27333[(2)]);
var state_27333__$1 = (function (){var statearr_27342 = state_27333;
(statearr_27342[(9)] = inst_27324);

return statearr_27342;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27333__$1,(9),results,inst_27319);
} else {
if((state_val_27334 === (9))){
var inst_27326 = (state_27333[(2)]);
var state_27333__$1 = (function (){var statearr_27343 = state_27333;
(statearr_27343[(10)] = inst_27326);

return statearr_27343;
})();
var statearr_27344_27449 = state_27333__$1;
(statearr_27344_27449[(2)] = null);

(statearr_27344_27449[(1)] = (2));


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
});})(c__27080__auto___27443,jobs,results,process,async))
;
return ((function (switch__26990__auto__,c__27080__auto___27443,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____0 = (function (){
var statearr_27345 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__);

(statearr_27345[(1)] = (1));

return statearr_27345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____1 = (function (state_27333){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_27333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e27346){if((e27346 instanceof Object)){
var ex__26994__auto__ = e27346;
var statearr_27347_27450 = state_27333;
(statearr_27347_27450[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27451 = state_27333;
state_27333 = G__27451;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__ = function(state_27333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____1.call(this,state_27333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___27443,jobs,results,process,async))
})();
var state__27082__auto__ = (function (){var statearr_27348 = f__27081__auto__.call(null);
(statearr_27348[(6)] = c__27080__auto___27443);

return statearr_27348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___27443,jobs,results,process,async))
);


var c__27080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto__,jobs,results,process,async){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto__,jobs,results,process,async){
return (function (state_27386){
var state_val_27387 = (state_27386[(1)]);
if((state_val_27387 === (7))){
var inst_27382 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
var statearr_27388_27452 = state_27386__$1;
(statearr_27388_27452[(2)] = inst_27382);

(statearr_27388_27452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (20))){
var state_27386__$1 = state_27386;
var statearr_27389_27453 = state_27386__$1;
(statearr_27389_27453[(2)] = null);

(statearr_27389_27453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (1))){
var state_27386__$1 = state_27386;
var statearr_27390_27454 = state_27386__$1;
(statearr_27390_27454[(2)] = null);

(statearr_27390_27454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (4))){
var inst_27351 = (state_27386[(7)]);
var inst_27351__$1 = (state_27386[(2)]);
var inst_27352 = (inst_27351__$1 == null);
var state_27386__$1 = (function (){var statearr_27391 = state_27386;
(statearr_27391[(7)] = inst_27351__$1);

return statearr_27391;
})();
if(cljs.core.truth_(inst_27352)){
var statearr_27392_27455 = state_27386__$1;
(statearr_27392_27455[(1)] = (5));

} else {
var statearr_27393_27456 = state_27386__$1;
(statearr_27393_27456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (15))){
var inst_27364 = (state_27386[(8)]);
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27386__$1,(18),to,inst_27364);
} else {
if((state_val_27387 === (21))){
var inst_27377 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
var statearr_27394_27457 = state_27386__$1;
(statearr_27394_27457[(2)] = inst_27377);

(statearr_27394_27457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (13))){
var inst_27379 = (state_27386[(2)]);
var state_27386__$1 = (function (){var statearr_27395 = state_27386;
(statearr_27395[(9)] = inst_27379);

return statearr_27395;
})();
var statearr_27396_27458 = state_27386__$1;
(statearr_27396_27458[(2)] = null);

(statearr_27396_27458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (6))){
var inst_27351 = (state_27386[(7)]);
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27386__$1,(11),inst_27351);
} else {
if((state_val_27387 === (17))){
var inst_27372 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
if(cljs.core.truth_(inst_27372)){
var statearr_27397_27459 = state_27386__$1;
(statearr_27397_27459[(1)] = (19));

} else {
var statearr_27398_27460 = state_27386__$1;
(statearr_27398_27460[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (3))){
var inst_27384 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27386__$1,inst_27384);
} else {
if((state_val_27387 === (12))){
var inst_27361 = (state_27386[(10)]);
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27386__$1,(14),inst_27361);
} else {
if((state_val_27387 === (2))){
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27386__$1,(4),results);
} else {
if((state_val_27387 === (19))){
var state_27386__$1 = state_27386;
var statearr_27399_27461 = state_27386__$1;
(statearr_27399_27461[(2)] = null);

(statearr_27399_27461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (11))){
var inst_27361 = (state_27386[(2)]);
var state_27386__$1 = (function (){var statearr_27400 = state_27386;
(statearr_27400[(10)] = inst_27361);

return statearr_27400;
})();
var statearr_27401_27462 = state_27386__$1;
(statearr_27401_27462[(2)] = null);

(statearr_27401_27462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (9))){
var state_27386__$1 = state_27386;
var statearr_27402_27463 = state_27386__$1;
(statearr_27402_27463[(2)] = null);

(statearr_27402_27463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (5))){
var state_27386__$1 = state_27386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27403_27464 = state_27386__$1;
(statearr_27403_27464[(1)] = (8));

} else {
var statearr_27404_27465 = state_27386__$1;
(statearr_27404_27465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (14))){
var inst_27364 = (state_27386[(8)]);
var inst_27366 = (state_27386[(11)]);
var inst_27364__$1 = (state_27386[(2)]);
var inst_27365 = (inst_27364__$1 == null);
var inst_27366__$1 = cljs.core.not.call(null,inst_27365);
var state_27386__$1 = (function (){var statearr_27405 = state_27386;
(statearr_27405[(8)] = inst_27364__$1);

(statearr_27405[(11)] = inst_27366__$1);

return statearr_27405;
})();
if(inst_27366__$1){
var statearr_27406_27466 = state_27386__$1;
(statearr_27406_27466[(1)] = (15));

} else {
var statearr_27407_27467 = state_27386__$1;
(statearr_27407_27467[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (16))){
var inst_27366 = (state_27386[(11)]);
var state_27386__$1 = state_27386;
var statearr_27408_27468 = state_27386__$1;
(statearr_27408_27468[(2)] = inst_27366);

(statearr_27408_27468[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (10))){
var inst_27358 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
var statearr_27409_27469 = state_27386__$1;
(statearr_27409_27469[(2)] = inst_27358);

(statearr_27409_27469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (18))){
var inst_27369 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
var statearr_27410_27470 = state_27386__$1;
(statearr_27410_27470[(2)] = inst_27369);

(statearr_27410_27470[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (8))){
var inst_27355 = cljs.core.async.close_BANG_.call(null,to);
var state_27386__$1 = state_27386;
var statearr_27411_27471 = state_27386__$1;
(statearr_27411_27471[(2)] = inst_27355);

(statearr_27411_27471[(1)] = (10));


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
});})(c__27080__auto__,jobs,results,process,async))
;
return ((function (switch__26990__auto__,c__27080__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____0 = (function (){
var statearr_27412 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__);

(statearr_27412[(1)] = (1));

return statearr_27412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____1 = (function (state_27386){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_27386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e27413){if((e27413 instanceof Object)){
var ex__26994__auto__ = e27413;
var statearr_27414_27472 = state_27386;
(statearr_27414_27472[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27473 = state_27386;
state_27386 = G__27473;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__ = function(state_27386){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____1.call(this,state_27386);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto__,jobs,results,process,async))
})();
var state__27082__auto__ = (function (){var statearr_27415 = f__27081__auto__.call(null);
(statearr_27415[(6)] = c__27080__auto__);

return statearr_27415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto__,jobs,results,process,async))
);

return c__27080__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27475 = arguments.length;
switch (G__27475) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27478 = arguments.length;
switch (G__27478) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27481 = arguments.length;
switch (G__27481) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27080__auto___27530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___27530,tc,fc){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___27530,tc,fc){
return (function (state_27507){
var state_val_27508 = (state_27507[(1)]);
if((state_val_27508 === (7))){
var inst_27503 = (state_27507[(2)]);
var state_27507__$1 = state_27507;
var statearr_27509_27531 = state_27507__$1;
(statearr_27509_27531[(2)] = inst_27503);

(statearr_27509_27531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (1))){
var state_27507__$1 = state_27507;
var statearr_27510_27532 = state_27507__$1;
(statearr_27510_27532[(2)] = null);

(statearr_27510_27532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (4))){
var inst_27484 = (state_27507[(7)]);
var inst_27484__$1 = (state_27507[(2)]);
var inst_27485 = (inst_27484__$1 == null);
var state_27507__$1 = (function (){var statearr_27511 = state_27507;
(statearr_27511[(7)] = inst_27484__$1);

return statearr_27511;
})();
if(cljs.core.truth_(inst_27485)){
var statearr_27512_27533 = state_27507__$1;
(statearr_27512_27533[(1)] = (5));

} else {
var statearr_27513_27534 = state_27507__$1;
(statearr_27513_27534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (13))){
var state_27507__$1 = state_27507;
var statearr_27514_27535 = state_27507__$1;
(statearr_27514_27535[(2)] = null);

(statearr_27514_27535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (6))){
var inst_27484 = (state_27507[(7)]);
var inst_27490 = p.call(null,inst_27484);
var state_27507__$1 = state_27507;
if(cljs.core.truth_(inst_27490)){
var statearr_27515_27536 = state_27507__$1;
(statearr_27515_27536[(1)] = (9));

} else {
var statearr_27516_27537 = state_27507__$1;
(statearr_27516_27537[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (3))){
var inst_27505 = (state_27507[(2)]);
var state_27507__$1 = state_27507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27507__$1,inst_27505);
} else {
if((state_val_27508 === (12))){
var state_27507__$1 = state_27507;
var statearr_27517_27538 = state_27507__$1;
(statearr_27517_27538[(2)] = null);

(statearr_27517_27538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (2))){
var state_27507__$1 = state_27507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27507__$1,(4),ch);
} else {
if((state_val_27508 === (11))){
var inst_27484 = (state_27507[(7)]);
var inst_27494 = (state_27507[(2)]);
var state_27507__$1 = state_27507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27507__$1,(8),inst_27494,inst_27484);
} else {
if((state_val_27508 === (9))){
var state_27507__$1 = state_27507;
var statearr_27518_27539 = state_27507__$1;
(statearr_27518_27539[(2)] = tc);

(statearr_27518_27539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (5))){
var inst_27487 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27488 = cljs.core.async.close_BANG_.call(null,fc);
var state_27507__$1 = (function (){var statearr_27519 = state_27507;
(statearr_27519[(8)] = inst_27487);

return statearr_27519;
})();
var statearr_27520_27540 = state_27507__$1;
(statearr_27520_27540[(2)] = inst_27488);

(statearr_27520_27540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (14))){
var inst_27501 = (state_27507[(2)]);
var state_27507__$1 = state_27507;
var statearr_27521_27541 = state_27507__$1;
(statearr_27521_27541[(2)] = inst_27501);

(statearr_27521_27541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (10))){
var state_27507__$1 = state_27507;
var statearr_27522_27542 = state_27507__$1;
(statearr_27522_27542[(2)] = fc);

(statearr_27522_27542[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (8))){
var inst_27496 = (state_27507[(2)]);
var state_27507__$1 = state_27507;
if(cljs.core.truth_(inst_27496)){
var statearr_27523_27543 = state_27507__$1;
(statearr_27523_27543[(1)] = (12));

} else {
var statearr_27524_27544 = state_27507__$1;
(statearr_27524_27544[(1)] = (13));

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
});})(c__27080__auto___27530,tc,fc))
;
return ((function (switch__26990__auto__,c__27080__auto___27530,tc,fc){
return (function() {
var cljs$core$async$state_machine__26991__auto__ = null;
var cljs$core$async$state_machine__26991__auto____0 = (function (){
var statearr_27525 = [null,null,null,null,null,null,null,null,null];
(statearr_27525[(0)] = cljs$core$async$state_machine__26991__auto__);

(statearr_27525[(1)] = (1));

return statearr_27525;
});
var cljs$core$async$state_machine__26991__auto____1 = (function (state_27507){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_27507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e27526){if((e27526 instanceof Object)){
var ex__26994__auto__ = e27526;
var statearr_27527_27545 = state_27507;
(statearr_27527_27545[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27546 = state_27507;
state_27507 = G__27546;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$state_machine__26991__auto__ = function(state_27507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26991__auto____1.call(this,state_27507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26991__auto____0;
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26991__auto____1;
return cljs$core$async$state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___27530,tc,fc))
})();
var state__27082__auto__ = (function (){var statearr_27528 = f__27081__auto__.call(null);
(statearr_27528[(6)] = c__27080__auto___27530);

return statearr_27528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___27530,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto__){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto__){
return (function (state_27567){
var state_val_27568 = (state_27567[(1)]);
if((state_val_27568 === (7))){
var inst_27563 = (state_27567[(2)]);
var state_27567__$1 = state_27567;
var statearr_27569_27587 = state_27567__$1;
(statearr_27569_27587[(2)] = inst_27563);

(statearr_27569_27587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (1))){
var inst_27547 = init;
var state_27567__$1 = (function (){var statearr_27570 = state_27567;
(statearr_27570[(7)] = inst_27547);

return statearr_27570;
})();
var statearr_27571_27588 = state_27567__$1;
(statearr_27571_27588[(2)] = null);

(statearr_27571_27588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (4))){
var inst_27550 = (state_27567[(8)]);
var inst_27550__$1 = (state_27567[(2)]);
var inst_27551 = (inst_27550__$1 == null);
var state_27567__$1 = (function (){var statearr_27572 = state_27567;
(statearr_27572[(8)] = inst_27550__$1);

return statearr_27572;
})();
if(cljs.core.truth_(inst_27551)){
var statearr_27573_27589 = state_27567__$1;
(statearr_27573_27589[(1)] = (5));

} else {
var statearr_27574_27590 = state_27567__$1;
(statearr_27574_27590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (6))){
var inst_27547 = (state_27567[(7)]);
var inst_27554 = (state_27567[(9)]);
var inst_27550 = (state_27567[(8)]);
var inst_27554__$1 = f.call(null,inst_27547,inst_27550);
var inst_27555 = cljs.core.reduced_QMARK_.call(null,inst_27554__$1);
var state_27567__$1 = (function (){var statearr_27575 = state_27567;
(statearr_27575[(9)] = inst_27554__$1);

return statearr_27575;
})();
if(inst_27555){
var statearr_27576_27591 = state_27567__$1;
(statearr_27576_27591[(1)] = (8));

} else {
var statearr_27577_27592 = state_27567__$1;
(statearr_27577_27592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (3))){
var inst_27565 = (state_27567[(2)]);
var state_27567__$1 = state_27567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27567__$1,inst_27565);
} else {
if((state_val_27568 === (2))){
var state_27567__$1 = state_27567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27567__$1,(4),ch);
} else {
if((state_val_27568 === (9))){
var inst_27554 = (state_27567[(9)]);
var inst_27547 = inst_27554;
var state_27567__$1 = (function (){var statearr_27578 = state_27567;
(statearr_27578[(7)] = inst_27547);

return statearr_27578;
})();
var statearr_27579_27593 = state_27567__$1;
(statearr_27579_27593[(2)] = null);

(statearr_27579_27593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (5))){
var inst_27547 = (state_27567[(7)]);
var state_27567__$1 = state_27567;
var statearr_27580_27594 = state_27567__$1;
(statearr_27580_27594[(2)] = inst_27547);

(statearr_27580_27594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (10))){
var inst_27561 = (state_27567[(2)]);
var state_27567__$1 = state_27567;
var statearr_27581_27595 = state_27567__$1;
(statearr_27581_27595[(2)] = inst_27561);

(statearr_27581_27595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (8))){
var inst_27554 = (state_27567[(9)]);
var inst_27557 = cljs.core.deref.call(null,inst_27554);
var state_27567__$1 = state_27567;
var statearr_27582_27596 = state_27567__$1;
(statearr_27582_27596[(2)] = inst_27557);

(statearr_27582_27596[(1)] = (10));


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
});})(c__27080__auto__))
;
return ((function (switch__26990__auto__,c__27080__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26991__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26991__auto____0 = (function (){
var statearr_27583 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27583[(0)] = cljs$core$async$reduce_$_state_machine__26991__auto__);

(statearr_27583[(1)] = (1));

return statearr_27583;
});
var cljs$core$async$reduce_$_state_machine__26991__auto____1 = (function (state_27567){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_27567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e27584){if((e27584 instanceof Object)){
var ex__26994__auto__ = e27584;
var statearr_27585_27597 = state_27567;
(statearr_27585_27597[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27598 = state_27567;
state_27567 = G__27598;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26991__auto__ = function(state_27567){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26991__auto____1.call(this,state_27567);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26991__auto____0;
cljs$core$async$reduce_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26991__auto____1;
return cljs$core$async$reduce_$_state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto__))
})();
var state__27082__auto__ = (function (){var statearr_27586 = f__27081__auto__.call(null);
(statearr_27586[(6)] = c__27080__auto__);

return statearr_27586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto__))
);

return c__27080__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto__,f__$1){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto__,f__$1){
return (function (state_27604){
var state_val_27605 = (state_27604[(1)]);
if((state_val_27605 === (1))){
var inst_27599 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27604__$1 = state_27604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27604__$1,(2),inst_27599);
} else {
if((state_val_27605 === (2))){
var inst_27601 = (state_27604[(2)]);
var inst_27602 = f__$1.call(null,inst_27601);
var state_27604__$1 = state_27604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27604__$1,inst_27602);
} else {
return null;
}
}
});})(c__27080__auto__,f__$1))
;
return ((function (switch__26990__auto__,c__27080__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26991__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26991__auto____0 = (function (){
var statearr_27606 = [null,null,null,null,null,null,null];
(statearr_27606[(0)] = cljs$core$async$transduce_$_state_machine__26991__auto__);

(statearr_27606[(1)] = (1));

return statearr_27606;
});
var cljs$core$async$transduce_$_state_machine__26991__auto____1 = (function (state_27604){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_27604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e27607){if((e27607 instanceof Object)){
var ex__26994__auto__ = e27607;
var statearr_27608_27610 = state_27604;
(statearr_27608_27610[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27611 = state_27604;
state_27604 = G__27611;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26991__auto__ = function(state_27604){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26991__auto____1.call(this,state_27604);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26991__auto____0;
cljs$core$async$transduce_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26991__auto____1;
return cljs$core$async$transduce_$_state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto__,f__$1))
})();
var state__27082__auto__ = (function (){var statearr_27609 = f__27081__auto__.call(null);
(statearr_27609[(6)] = c__27080__auto__);

return statearr_27609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto__,f__$1))
);

return c__27080__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27613 = arguments.length;
switch (G__27613) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto__){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto__){
return (function (state_27638){
var state_val_27639 = (state_27638[(1)]);
if((state_val_27639 === (7))){
var inst_27620 = (state_27638[(2)]);
var state_27638__$1 = state_27638;
var statearr_27640_27661 = state_27638__$1;
(statearr_27640_27661[(2)] = inst_27620);

(statearr_27640_27661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27639 === (1))){
var inst_27614 = cljs.core.seq.call(null,coll);
var inst_27615 = inst_27614;
var state_27638__$1 = (function (){var statearr_27641 = state_27638;
(statearr_27641[(7)] = inst_27615);

return statearr_27641;
})();
var statearr_27642_27662 = state_27638__$1;
(statearr_27642_27662[(2)] = null);

(statearr_27642_27662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27639 === (4))){
var inst_27615 = (state_27638[(7)]);
var inst_27618 = cljs.core.first.call(null,inst_27615);
var state_27638__$1 = state_27638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27638__$1,(7),ch,inst_27618);
} else {
if((state_val_27639 === (13))){
var inst_27632 = (state_27638[(2)]);
var state_27638__$1 = state_27638;
var statearr_27643_27663 = state_27638__$1;
(statearr_27643_27663[(2)] = inst_27632);

(statearr_27643_27663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27639 === (6))){
var inst_27623 = (state_27638[(2)]);
var state_27638__$1 = state_27638;
if(cljs.core.truth_(inst_27623)){
var statearr_27644_27664 = state_27638__$1;
(statearr_27644_27664[(1)] = (8));

} else {
var statearr_27645_27665 = state_27638__$1;
(statearr_27645_27665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27639 === (3))){
var inst_27636 = (state_27638[(2)]);
var state_27638__$1 = state_27638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27638__$1,inst_27636);
} else {
if((state_val_27639 === (12))){
var state_27638__$1 = state_27638;
var statearr_27646_27666 = state_27638__$1;
(statearr_27646_27666[(2)] = null);

(statearr_27646_27666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27639 === (2))){
var inst_27615 = (state_27638[(7)]);
var state_27638__$1 = state_27638;
if(cljs.core.truth_(inst_27615)){
var statearr_27647_27667 = state_27638__$1;
(statearr_27647_27667[(1)] = (4));

} else {
var statearr_27648_27668 = state_27638__$1;
(statearr_27648_27668[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27639 === (11))){
var inst_27629 = cljs.core.async.close_BANG_.call(null,ch);
var state_27638__$1 = state_27638;
var statearr_27649_27669 = state_27638__$1;
(statearr_27649_27669[(2)] = inst_27629);

(statearr_27649_27669[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27639 === (9))){
var state_27638__$1 = state_27638;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27650_27670 = state_27638__$1;
(statearr_27650_27670[(1)] = (11));

} else {
var statearr_27651_27671 = state_27638__$1;
(statearr_27651_27671[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27639 === (5))){
var inst_27615 = (state_27638[(7)]);
var state_27638__$1 = state_27638;
var statearr_27652_27672 = state_27638__$1;
(statearr_27652_27672[(2)] = inst_27615);

(statearr_27652_27672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27639 === (10))){
var inst_27634 = (state_27638[(2)]);
var state_27638__$1 = state_27638;
var statearr_27653_27673 = state_27638__$1;
(statearr_27653_27673[(2)] = inst_27634);

(statearr_27653_27673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27639 === (8))){
var inst_27615 = (state_27638[(7)]);
var inst_27625 = cljs.core.next.call(null,inst_27615);
var inst_27615__$1 = inst_27625;
var state_27638__$1 = (function (){var statearr_27654 = state_27638;
(statearr_27654[(7)] = inst_27615__$1);

return statearr_27654;
})();
var statearr_27655_27674 = state_27638__$1;
(statearr_27655_27674[(2)] = null);

(statearr_27655_27674[(1)] = (2));


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
});})(c__27080__auto__))
;
return ((function (switch__26990__auto__,c__27080__auto__){
return (function() {
var cljs$core$async$state_machine__26991__auto__ = null;
var cljs$core$async$state_machine__26991__auto____0 = (function (){
var statearr_27656 = [null,null,null,null,null,null,null,null];
(statearr_27656[(0)] = cljs$core$async$state_machine__26991__auto__);

(statearr_27656[(1)] = (1));

return statearr_27656;
});
var cljs$core$async$state_machine__26991__auto____1 = (function (state_27638){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_27638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e27657){if((e27657 instanceof Object)){
var ex__26994__auto__ = e27657;
var statearr_27658_27675 = state_27638;
(statearr_27658_27675[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27676 = state_27638;
state_27638 = G__27676;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$state_machine__26991__auto__ = function(state_27638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26991__auto____1.call(this,state_27638);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26991__auto____0;
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26991__auto____1;
return cljs$core$async$state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto__))
})();
var state__27082__auto__ = (function (){var statearr_27659 = f__27081__auto__.call(null);
(statearr_27659[(6)] = c__27080__auto__);

return statearr_27659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto__))
);

return c__27080__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27677 = (function (ch,cs,meta27678){
this.ch = ch;
this.cs = cs;
this.meta27678 = meta27678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27679,meta27678__$1){
var self__ = this;
var _27679__$1 = this;
return (new cljs.core.async.t_cljs$core$async27677(self__.ch,self__.cs,meta27678__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27679){
var self__ = this;
var _27679__$1 = this;
return self__.meta27678;
});})(cs))
;

cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27677.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27678","meta27678",-1769562253,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27677";

cljs.core.async.t_cljs$core$async27677.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27677");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27677.
 */
cljs.core.async.__GT_t_cljs$core$async27677 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27677(ch__$1,cs__$1,meta27678){
return (new cljs.core.async.t_cljs$core$async27677(ch__$1,cs__$1,meta27678));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27677(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27080__auto___27899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___27899,cs,m,dchan,dctr,done){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___27899,cs,m,dchan,dctr,done){
return (function (state_27814){
var state_val_27815 = (state_27814[(1)]);
if((state_val_27815 === (7))){
var inst_27810 = (state_27814[(2)]);
var state_27814__$1 = state_27814;
var statearr_27816_27900 = state_27814__$1;
(statearr_27816_27900[(2)] = inst_27810);

(statearr_27816_27900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (20))){
var inst_27713 = (state_27814[(7)]);
var inst_27725 = cljs.core.first.call(null,inst_27713);
var inst_27726 = cljs.core.nth.call(null,inst_27725,(0),null);
var inst_27727 = cljs.core.nth.call(null,inst_27725,(1),null);
var state_27814__$1 = (function (){var statearr_27817 = state_27814;
(statearr_27817[(8)] = inst_27726);

return statearr_27817;
})();
if(cljs.core.truth_(inst_27727)){
var statearr_27818_27901 = state_27814__$1;
(statearr_27818_27901[(1)] = (22));

} else {
var statearr_27819_27902 = state_27814__$1;
(statearr_27819_27902[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (27))){
var inst_27757 = (state_27814[(9)]);
var inst_27762 = (state_27814[(10)]);
var inst_27682 = (state_27814[(11)]);
var inst_27755 = (state_27814[(12)]);
var inst_27762__$1 = cljs.core._nth.call(null,inst_27755,inst_27757);
var inst_27763 = cljs.core.async.put_BANG_.call(null,inst_27762__$1,inst_27682,done);
var state_27814__$1 = (function (){var statearr_27820 = state_27814;
(statearr_27820[(10)] = inst_27762__$1);

return statearr_27820;
})();
if(cljs.core.truth_(inst_27763)){
var statearr_27821_27903 = state_27814__$1;
(statearr_27821_27903[(1)] = (30));

} else {
var statearr_27822_27904 = state_27814__$1;
(statearr_27822_27904[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (1))){
var state_27814__$1 = state_27814;
var statearr_27823_27905 = state_27814__$1;
(statearr_27823_27905[(2)] = null);

(statearr_27823_27905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (24))){
var inst_27713 = (state_27814[(7)]);
var inst_27732 = (state_27814[(2)]);
var inst_27733 = cljs.core.next.call(null,inst_27713);
var inst_27691 = inst_27733;
var inst_27692 = null;
var inst_27693 = (0);
var inst_27694 = (0);
var state_27814__$1 = (function (){var statearr_27824 = state_27814;
(statearr_27824[(13)] = inst_27691);

(statearr_27824[(14)] = inst_27694);

(statearr_27824[(15)] = inst_27693);

(statearr_27824[(16)] = inst_27692);

(statearr_27824[(17)] = inst_27732);

return statearr_27824;
})();
var statearr_27825_27906 = state_27814__$1;
(statearr_27825_27906[(2)] = null);

(statearr_27825_27906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (39))){
var state_27814__$1 = state_27814;
var statearr_27829_27907 = state_27814__$1;
(statearr_27829_27907[(2)] = null);

(statearr_27829_27907[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (4))){
var inst_27682 = (state_27814[(11)]);
var inst_27682__$1 = (state_27814[(2)]);
var inst_27683 = (inst_27682__$1 == null);
var state_27814__$1 = (function (){var statearr_27830 = state_27814;
(statearr_27830[(11)] = inst_27682__$1);

return statearr_27830;
})();
if(cljs.core.truth_(inst_27683)){
var statearr_27831_27908 = state_27814__$1;
(statearr_27831_27908[(1)] = (5));

} else {
var statearr_27832_27909 = state_27814__$1;
(statearr_27832_27909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (15))){
var inst_27691 = (state_27814[(13)]);
var inst_27694 = (state_27814[(14)]);
var inst_27693 = (state_27814[(15)]);
var inst_27692 = (state_27814[(16)]);
var inst_27709 = (state_27814[(2)]);
var inst_27710 = (inst_27694 + (1));
var tmp27826 = inst_27691;
var tmp27827 = inst_27693;
var tmp27828 = inst_27692;
var inst_27691__$1 = tmp27826;
var inst_27692__$1 = tmp27828;
var inst_27693__$1 = tmp27827;
var inst_27694__$1 = inst_27710;
var state_27814__$1 = (function (){var statearr_27833 = state_27814;
(statearr_27833[(13)] = inst_27691__$1);

(statearr_27833[(14)] = inst_27694__$1);

(statearr_27833[(15)] = inst_27693__$1);

(statearr_27833[(16)] = inst_27692__$1);

(statearr_27833[(18)] = inst_27709);

return statearr_27833;
})();
var statearr_27834_27910 = state_27814__$1;
(statearr_27834_27910[(2)] = null);

(statearr_27834_27910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (21))){
var inst_27736 = (state_27814[(2)]);
var state_27814__$1 = state_27814;
var statearr_27838_27911 = state_27814__$1;
(statearr_27838_27911[(2)] = inst_27736);

(statearr_27838_27911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (31))){
var inst_27762 = (state_27814[(10)]);
var inst_27766 = done.call(null,null);
var inst_27767 = cljs.core.async.untap_STAR_.call(null,m,inst_27762);
var state_27814__$1 = (function (){var statearr_27839 = state_27814;
(statearr_27839[(19)] = inst_27766);

return statearr_27839;
})();
var statearr_27840_27912 = state_27814__$1;
(statearr_27840_27912[(2)] = inst_27767);

(statearr_27840_27912[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (32))){
var inst_27757 = (state_27814[(9)]);
var inst_27756 = (state_27814[(20)]);
var inst_27755 = (state_27814[(12)]);
var inst_27754 = (state_27814[(21)]);
var inst_27769 = (state_27814[(2)]);
var inst_27770 = (inst_27757 + (1));
var tmp27835 = inst_27756;
var tmp27836 = inst_27755;
var tmp27837 = inst_27754;
var inst_27754__$1 = tmp27837;
var inst_27755__$1 = tmp27836;
var inst_27756__$1 = tmp27835;
var inst_27757__$1 = inst_27770;
var state_27814__$1 = (function (){var statearr_27841 = state_27814;
(statearr_27841[(9)] = inst_27757__$1);

(statearr_27841[(20)] = inst_27756__$1);

(statearr_27841[(22)] = inst_27769);

(statearr_27841[(12)] = inst_27755__$1);

(statearr_27841[(21)] = inst_27754__$1);

return statearr_27841;
})();
var statearr_27842_27913 = state_27814__$1;
(statearr_27842_27913[(2)] = null);

(statearr_27842_27913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (40))){
var inst_27782 = (state_27814[(23)]);
var inst_27786 = done.call(null,null);
var inst_27787 = cljs.core.async.untap_STAR_.call(null,m,inst_27782);
var state_27814__$1 = (function (){var statearr_27843 = state_27814;
(statearr_27843[(24)] = inst_27786);

return statearr_27843;
})();
var statearr_27844_27914 = state_27814__$1;
(statearr_27844_27914[(2)] = inst_27787);

(statearr_27844_27914[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (33))){
var inst_27773 = (state_27814[(25)]);
var inst_27775 = cljs.core.chunked_seq_QMARK_.call(null,inst_27773);
var state_27814__$1 = state_27814;
if(inst_27775){
var statearr_27845_27915 = state_27814__$1;
(statearr_27845_27915[(1)] = (36));

} else {
var statearr_27846_27916 = state_27814__$1;
(statearr_27846_27916[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (13))){
var inst_27703 = (state_27814[(26)]);
var inst_27706 = cljs.core.async.close_BANG_.call(null,inst_27703);
var state_27814__$1 = state_27814;
var statearr_27847_27917 = state_27814__$1;
(statearr_27847_27917[(2)] = inst_27706);

(statearr_27847_27917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (22))){
var inst_27726 = (state_27814[(8)]);
var inst_27729 = cljs.core.async.close_BANG_.call(null,inst_27726);
var state_27814__$1 = state_27814;
var statearr_27848_27918 = state_27814__$1;
(statearr_27848_27918[(2)] = inst_27729);

(statearr_27848_27918[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (36))){
var inst_27773 = (state_27814[(25)]);
var inst_27777 = cljs.core.chunk_first.call(null,inst_27773);
var inst_27778 = cljs.core.chunk_rest.call(null,inst_27773);
var inst_27779 = cljs.core.count.call(null,inst_27777);
var inst_27754 = inst_27778;
var inst_27755 = inst_27777;
var inst_27756 = inst_27779;
var inst_27757 = (0);
var state_27814__$1 = (function (){var statearr_27849 = state_27814;
(statearr_27849[(9)] = inst_27757);

(statearr_27849[(20)] = inst_27756);

(statearr_27849[(12)] = inst_27755);

(statearr_27849[(21)] = inst_27754);

return statearr_27849;
})();
var statearr_27850_27919 = state_27814__$1;
(statearr_27850_27919[(2)] = null);

(statearr_27850_27919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (41))){
var inst_27773 = (state_27814[(25)]);
var inst_27789 = (state_27814[(2)]);
var inst_27790 = cljs.core.next.call(null,inst_27773);
var inst_27754 = inst_27790;
var inst_27755 = null;
var inst_27756 = (0);
var inst_27757 = (0);
var state_27814__$1 = (function (){var statearr_27851 = state_27814;
(statearr_27851[(9)] = inst_27757);

(statearr_27851[(20)] = inst_27756);

(statearr_27851[(12)] = inst_27755);

(statearr_27851[(27)] = inst_27789);

(statearr_27851[(21)] = inst_27754);

return statearr_27851;
})();
var statearr_27852_27920 = state_27814__$1;
(statearr_27852_27920[(2)] = null);

(statearr_27852_27920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (43))){
var state_27814__$1 = state_27814;
var statearr_27853_27921 = state_27814__$1;
(statearr_27853_27921[(2)] = null);

(statearr_27853_27921[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (29))){
var inst_27798 = (state_27814[(2)]);
var state_27814__$1 = state_27814;
var statearr_27854_27922 = state_27814__$1;
(statearr_27854_27922[(2)] = inst_27798);

(statearr_27854_27922[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (44))){
var inst_27807 = (state_27814[(2)]);
var state_27814__$1 = (function (){var statearr_27855 = state_27814;
(statearr_27855[(28)] = inst_27807);

return statearr_27855;
})();
var statearr_27856_27923 = state_27814__$1;
(statearr_27856_27923[(2)] = null);

(statearr_27856_27923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (6))){
var inst_27746 = (state_27814[(29)]);
var inst_27745 = cljs.core.deref.call(null,cs);
var inst_27746__$1 = cljs.core.keys.call(null,inst_27745);
var inst_27747 = cljs.core.count.call(null,inst_27746__$1);
var inst_27748 = cljs.core.reset_BANG_.call(null,dctr,inst_27747);
var inst_27753 = cljs.core.seq.call(null,inst_27746__$1);
var inst_27754 = inst_27753;
var inst_27755 = null;
var inst_27756 = (0);
var inst_27757 = (0);
var state_27814__$1 = (function (){var statearr_27857 = state_27814;
(statearr_27857[(9)] = inst_27757);

(statearr_27857[(20)] = inst_27756);

(statearr_27857[(29)] = inst_27746__$1);

(statearr_27857[(30)] = inst_27748);

(statearr_27857[(12)] = inst_27755);

(statearr_27857[(21)] = inst_27754);

return statearr_27857;
})();
var statearr_27858_27924 = state_27814__$1;
(statearr_27858_27924[(2)] = null);

(statearr_27858_27924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (28))){
var inst_27773 = (state_27814[(25)]);
var inst_27754 = (state_27814[(21)]);
var inst_27773__$1 = cljs.core.seq.call(null,inst_27754);
var state_27814__$1 = (function (){var statearr_27859 = state_27814;
(statearr_27859[(25)] = inst_27773__$1);

return statearr_27859;
})();
if(inst_27773__$1){
var statearr_27860_27925 = state_27814__$1;
(statearr_27860_27925[(1)] = (33));

} else {
var statearr_27861_27926 = state_27814__$1;
(statearr_27861_27926[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (25))){
var inst_27757 = (state_27814[(9)]);
var inst_27756 = (state_27814[(20)]);
var inst_27759 = (inst_27757 < inst_27756);
var inst_27760 = inst_27759;
var state_27814__$1 = state_27814;
if(cljs.core.truth_(inst_27760)){
var statearr_27862_27927 = state_27814__$1;
(statearr_27862_27927[(1)] = (27));

} else {
var statearr_27863_27928 = state_27814__$1;
(statearr_27863_27928[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (34))){
var state_27814__$1 = state_27814;
var statearr_27864_27929 = state_27814__$1;
(statearr_27864_27929[(2)] = null);

(statearr_27864_27929[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (17))){
var state_27814__$1 = state_27814;
var statearr_27865_27930 = state_27814__$1;
(statearr_27865_27930[(2)] = null);

(statearr_27865_27930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (3))){
var inst_27812 = (state_27814[(2)]);
var state_27814__$1 = state_27814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27814__$1,inst_27812);
} else {
if((state_val_27815 === (12))){
var inst_27741 = (state_27814[(2)]);
var state_27814__$1 = state_27814;
var statearr_27866_27931 = state_27814__$1;
(statearr_27866_27931[(2)] = inst_27741);

(statearr_27866_27931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (2))){
var state_27814__$1 = state_27814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27814__$1,(4),ch);
} else {
if((state_val_27815 === (23))){
var state_27814__$1 = state_27814;
var statearr_27867_27932 = state_27814__$1;
(statearr_27867_27932[(2)] = null);

(statearr_27867_27932[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (35))){
var inst_27796 = (state_27814[(2)]);
var state_27814__$1 = state_27814;
var statearr_27868_27933 = state_27814__$1;
(statearr_27868_27933[(2)] = inst_27796);

(statearr_27868_27933[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (19))){
var inst_27713 = (state_27814[(7)]);
var inst_27717 = cljs.core.chunk_first.call(null,inst_27713);
var inst_27718 = cljs.core.chunk_rest.call(null,inst_27713);
var inst_27719 = cljs.core.count.call(null,inst_27717);
var inst_27691 = inst_27718;
var inst_27692 = inst_27717;
var inst_27693 = inst_27719;
var inst_27694 = (0);
var state_27814__$1 = (function (){var statearr_27869 = state_27814;
(statearr_27869[(13)] = inst_27691);

(statearr_27869[(14)] = inst_27694);

(statearr_27869[(15)] = inst_27693);

(statearr_27869[(16)] = inst_27692);

return statearr_27869;
})();
var statearr_27870_27934 = state_27814__$1;
(statearr_27870_27934[(2)] = null);

(statearr_27870_27934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (11))){
var inst_27713 = (state_27814[(7)]);
var inst_27691 = (state_27814[(13)]);
var inst_27713__$1 = cljs.core.seq.call(null,inst_27691);
var state_27814__$1 = (function (){var statearr_27871 = state_27814;
(statearr_27871[(7)] = inst_27713__$1);

return statearr_27871;
})();
if(inst_27713__$1){
var statearr_27872_27935 = state_27814__$1;
(statearr_27872_27935[(1)] = (16));

} else {
var statearr_27873_27936 = state_27814__$1;
(statearr_27873_27936[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (9))){
var inst_27743 = (state_27814[(2)]);
var state_27814__$1 = state_27814;
var statearr_27874_27937 = state_27814__$1;
(statearr_27874_27937[(2)] = inst_27743);

(statearr_27874_27937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (5))){
var inst_27689 = cljs.core.deref.call(null,cs);
var inst_27690 = cljs.core.seq.call(null,inst_27689);
var inst_27691 = inst_27690;
var inst_27692 = null;
var inst_27693 = (0);
var inst_27694 = (0);
var state_27814__$1 = (function (){var statearr_27875 = state_27814;
(statearr_27875[(13)] = inst_27691);

(statearr_27875[(14)] = inst_27694);

(statearr_27875[(15)] = inst_27693);

(statearr_27875[(16)] = inst_27692);

return statearr_27875;
})();
var statearr_27876_27938 = state_27814__$1;
(statearr_27876_27938[(2)] = null);

(statearr_27876_27938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (14))){
var state_27814__$1 = state_27814;
var statearr_27877_27939 = state_27814__$1;
(statearr_27877_27939[(2)] = null);

(statearr_27877_27939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (45))){
var inst_27804 = (state_27814[(2)]);
var state_27814__$1 = state_27814;
var statearr_27878_27940 = state_27814__$1;
(statearr_27878_27940[(2)] = inst_27804);

(statearr_27878_27940[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (26))){
var inst_27746 = (state_27814[(29)]);
var inst_27800 = (state_27814[(2)]);
var inst_27801 = cljs.core.seq.call(null,inst_27746);
var state_27814__$1 = (function (){var statearr_27879 = state_27814;
(statearr_27879[(31)] = inst_27800);

return statearr_27879;
})();
if(inst_27801){
var statearr_27880_27941 = state_27814__$1;
(statearr_27880_27941[(1)] = (42));

} else {
var statearr_27881_27942 = state_27814__$1;
(statearr_27881_27942[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (16))){
var inst_27713 = (state_27814[(7)]);
var inst_27715 = cljs.core.chunked_seq_QMARK_.call(null,inst_27713);
var state_27814__$1 = state_27814;
if(inst_27715){
var statearr_27882_27943 = state_27814__$1;
(statearr_27882_27943[(1)] = (19));

} else {
var statearr_27883_27944 = state_27814__$1;
(statearr_27883_27944[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (38))){
var inst_27793 = (state_27814[(2)]);
var state_27814__$1 = state_27814;
var statearr_27884_27945 = state_27814__$1;
(statearr_27884_27945[(2)] = inst_27793);

(statearr_27884_27945[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (30))){
var state_27814__$1 = state_27814;
var statearr_27885_27946 = state_27814__$1;
(statearr_27885_27946[(2)] = null);

(statearr_27885_27946[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (10))){
var inst_27694 = (state_27814[(14)]);
var inst_27692 = (state_27814[(16)]);
var inst_27702 = cljs.core._nth.call(null,inst_27692,inst_27694);
var inst_27703 = cljs.core.nth.call(null,inst_27702,(0),null);
var inst_27704 = cljs.core.nth.call(null,inst_27702,(1),null);
var state_27814__$1 = (function (){var statearr_27886 = state_27814;
(statearr_27886[(26)] = inst_27703);

return statearr_27886;
})();
if(cljs.core.truth_(inst_27704)){
var statearr_27887_27947 = state_27814__$1;
(statearr_27887_27947[(1)] = (13));

} else {
var statearr_27888_27948 = state_27814__$1;
(statearr_27888_27948[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (18))){
var inst_27739 = (state_27814[(2)]);
var state_27814__$1 = state_27814;
var statearr_27889_27949 = state_27814__$1;
(statearr_27889_27949[(2)] = inst_27739);

(statearr_27889_27949[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (42))){
var state_27814__$1 = state_27814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27814__$1,(45),dchan);
} else {
if((state_val_27815 === (37))){
var inst_27682 = (state_27814[(11)]);
var inst_27773 = (state_27814[(25)]);
var inst_27782 = (state_27814[(23)]);
var inst_27782__$1 = cljs.core.first.call(null,inst_27773);
var inst_27783 = cljs.core.async.put_BANG_.call(null,inst_27782__$1,inst_27682,done);
var state_27814__$1 = (function (){var statearr_27890 = state_27814;
(statearr_27890[(23)] = inst_27782__$1);

return statearr_27890;
})();
if(cljs.core.truth_(inst_27783)){
var statearr_27891_27950 = state_27814__$1;
(statearr_27891_27950[(1)] = (39));

} else {
var statearr_27892_27951 = state_27814__$1;
(statearr_27892_27951[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (8))){
var inst_27694 = (state_27814[(14)]);
var inst_27693 = (state_27814[(15)]);
var inst_27696 = (inst_27694 < inst_27693);
var inst_27697 = inst_27696;
var state_27814__$1 = state_27814;
if(cljs.core.truth_(inst_27697)){
var statearr_27893_27952 = state_27814__$1;
(statearr_27893_27952[(1)] = (10));

} else {
var statearr_27894_27953 = state_27814__$1;
(statearr_27894_27953[(1)] = (11));

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
});})(c__27080__auto___27899,cs,m,dchan,dctr,done))
;
return ((function (switch__26990__auto__,c__27080__auto___27899,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26991__auto__ = null;
var cljs$core$async$mult_$_state_machine__26991__auto____0 = (function (){
var statearr_27895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27895[(0)] = cljs$core$async$mult_$_state_machine__26991__auto__);

(statearr_27895[(1)] = (1));

return statearr_27895;
});
var cljs$core$async$mult_$_state_machine__26991__auto____1 = (function (state_27814){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_27814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e27896){if((e27896 instanceof Object)){
var ex__26994__auto__ = e27896;
var statearr_27897_27954 = state_27814;
(statearr_27897_27954[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27955 = state_27814;
state_27814 = G__27955;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26991__auto__ = function(state_27814){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26991__auto____1.call(this,state_27814);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26991__auto____0;
cljs$core$async$mult_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26991__auto____1;
return cljs$core$async$mult_$_state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___27899,cs,m,dchan,dctr,done))
})();
var state__27082__auto__ = (function (){var statearr_27898 = f__27081__auto__.call(null);
(statearr_27898[(6)] = c__27080__auto___27899);

return statearr_27898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___27899,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27957 = arguments.length;
switch (G__27957) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27969 = arguments.length;
var i__4500__auto___27970 = (0);
while(true){
if((i__4500__auto___27970 < len__4499__auto___27969)){
args__4502__auto__.push((arguments[i__4500__auto___27970]));

var G__27971 = (i__4500__auto___27970 + (1));
i__4500__auto___27970 = G__27971;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27963){
var map__27964 = p__27963;
var map__27964__$1 = ((((!((map__27964 == null)))?(((((map__27964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27964):map__27964);
var opts = map__27964__$1;
var statearr_27966_27972 = state;
(statearr_27966_27972[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27964,map__27964__$1,opts){
return (function (val){
var statearr_27967_27973 = state;
(statearr_27967_27973[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27964,map__27964__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27968_27974 = state;
(statearr_27968_27974[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27959){
var G__27960 = cljs.core.first.call(null,seq27959);
var seq27959__$1 = cljs.core.next.call(null,seq27959);
var G__27961 = cljs.core.first.call(null,seq27959__$1);
var seq27959__$2 = cljs.core.next.call(null,seq27959__$1);
var G__27962 = cljs.core.first.call(null,seq27959__$2);
var seq27959__$3 = cljs.core.next.call(null,seq27959__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27960,G__27961,G__27962,seq27959__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27975 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27975 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27976){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27976 = meta27976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27977,meta27976__$1){
var self__ = this;
var _27977__$1 = this;
return (new cljs.core.async.t_cljs$core$async27975(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27976__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27977){
var self__ = this;
var _27977__$1 = this;
return self__.meta27976;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27975.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27976","meta27976",-930188623,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27975.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27975";

cljs.core.async.t_cljs$core$async27975.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27975");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27975.
 */
cljs.core.async.__GT_t_cljs$core$async27975 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27975(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27976){
return (new cljs.core.async.t_cljs$core$async27975(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27976));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27975(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27080__auto___28139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___28139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___28139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28079){
var state_val_28080 = (state_28079[(1)]);
if((state_val_28080 === (7))){
var inst_27994 = (state_28079[(2)]);
var state_28079__$1 = state_28079;
var statearr_28081_28140 = state_28079__$1;
(statearr_28081_28140[(2)] = inst_27994);

(statearr_28081_28140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (20))){
var inst_28006 = (state_28079[(7)]);
var state_28079__$1 = state_28079;
var statearr_28082_28141 = state_28079__$1;
(statearr_28082_28141[(2)] = inst_28006);

(statearr_28082_28141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (27))){
var state_28079__$1 = state_28079;
var statearr_28083_28142 = state_28079__$1;
(statearr_28083_28142[(2)] = null);

(statearr_28083_28142[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (1))){
var inst_27981 = (state_28079[(8)]);
var inst_27981__$1 = calc_state.call(null);
var inst_27983 = (inst_27981__$1 == null);
var inst_27984 = cljs.core.not.call(null,inst_27983);
var state_28079__$1 = (function (){var statearr_28084 = state_28079;
(statearr_28084[(8)] = inst_27981__$1);

return statearr_28084;
})();
if(inst_27984){
var statearr_28085_28143 = state_28079__$1;
(statearr_28085_28143[(1)] = (2));

} else {
var statearr_28086_28144 = state_28079__$1;
(statearr_28086_28144[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (24))){
var inst_28053 = (state_28079[(9)]);
var inst_28039 = (state_28079[(10)]);
var inst_28030 = (state_28079[(11)]);
var inst_28053__$1 = inst_28030.call(null,inst_28039);
var state_28079__$1 = (function (){var statearr_28087 = state_28079;
(statearr_28087[(9)] = inst_28053__$1);

return statearr_28087;
})();
if(cljs.core.truth_(inst_28053__$1)){
var statearr_28088_28145 = state_28079__$1;
(statearr_28088_28145[(1)] = (29));

} else {
var statearr_28089_28146 = state_28079__$1;
(statearr_28089_28146[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (4))){
var inst_27997 = (state_28079[(2)]);
var state_28079__$1 = state_28079;
if(cljs.core.truth_(inst_27997)){
var statearr_28090_28147 = state_28079__$1;
(statearr_28090_28147[(1)] = (8));

} else {
var statearr_28091_28148 = state_28079__$1;
(statearr_28091_28148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (15))){
var inst_28024 = (state_28079[(2)]);
var state_28079__$1 = state_28079;
if(cljs.core.truth_(inst_28024)){
var statearr_28092_28149 = state_28079__$1;
(statearr_28092_28149[(1)] = (19));

} else {
var statearr_28093_28150 = state_28079__$1;
(statearr_28093_28150[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (21))){
var inst_28029 = (state_28079[(12)]);
var inst_28029__$1 = (state_28079[(2)]);
var inst_28030 = cljs.core.get.call(null,inst_28029__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28031 = cljs.core.get.call(null,inst_28029__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28032 = cljs.core.get.call(null,inst_28029__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28079__$1 = (function (){var statearr_28094 = state_28079;
(statearr_28094[(11)] = inst_28030);

(statearr_28094[(13)] = inst_28031);

(statearr_28094[(12)] = inst_28029__$1);

return statearr_28094;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28079__$1,(22),inst_28032);
} else {
if((state_val_28080 === (31))){
var inst_28061 = (state_28079[(2)]);
var state_28079__$1 = state_28079;
if(cljs.core.truth_(inst_28061)){
var statearr_28095_28151 = state_28079__$1;
(statearr_28095_28151[(1)] = (32));

} else {
var statearr_28096_28152 = state_28079__$1;
(statearr_28096_28152[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (32))){
var inst_28038 = (state_28079[(14)]);
var state_28079__$1 = state_28079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28079__$1,(35),out,inst_28038);
} else {
if((state_val_28080 === (33))){
var inst_28029 = (state_28079[(12)]);
var inst_28006 = inst_28029;
var state_28079__$1 = (function (){var statearr_28097 = state_28079;
(statearr_28097[(7)] = inst_28006);

return statearr_28097;
})();
var statearr_28098_28153 = state_28079__$1;
(statearr_28098_28153[(2)] = null);

(statearr_28098_28153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (13))){
var inst_28006 = (state_28079[(7)]);
var inst_28013 = inst_28006.cljs$lang$protocol_mask$partition0$;
var inst_28014 = (inst_28013 & (64));
var inst_28015 = inst_28006.cljs$core$ISeq$;
var inst_28016 = (cljs.core.PROTOCOL_SENTINEL === inst_28015);
var inst_28017 = ((inst_28014) || (inst_28016));
var state_28079__$1 = state_28079;
if(cljs.core.truth_(inst_28017)){
var statearr_28099_28154 = state_28079__$1;
(statearr_28099_28154[(1)] = (16));

} else {
var statearr_28100_28155 = state_28079__$1;
(statearr_28100_28155[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (22))){
var inst_28038 = (state_28079[(14)]);
var inst_28039 = (state_28079[(10)]);
var inst_28037 = (state_28079[(2)]);
var inst_28038__$1 = cljs.core.nth.call(null,inst_28037,(0),null);
var inst_28039__$1 = cljs.core.nth.call(null,inst_28037,(1),null);
var inst_28040 = (inst_28038__$1 == null);
var inst_28041 = cljs.core._EQ_.call(null,inst_28039__$1,change);
var inst_28042 = ((inst_28040) || (inst_28041));
var state_28079__$1 = (function (){var statearr_28101 = state_28079;
(statearr_28101[(14)] = inst_28038__$1);

(statearr_28101[(10)] = inst_28039__$1);

return statearr_28101;
})();
if(cljs.core.truth_(inst_28042)){
var statearr_28102_28156 = state_28079__$1;
(statearr_28102_28156[(1)] = (23));

} else {
var statearr_28103_28157 = state_28079__$1;
(statearr_28103_28157[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (36))){
var inst_28029 = (state_28079[(12)]);
var inst_28006 = inst_28029;
var state_28079__$1 = (function (){var statearr_28104 = state_28079;
(statearr_28104[(7)] = inst_28006);

return statearr_28104;
})();
var statearr_28105_28158 = state_28079__$1;
(statearr_28105_28158[(2)] = null);

(statearr_28105_28158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (29))){
var inst_28053 = (state_28079[(9)]);
var state_28079__$1 = state_28079;
var statearr_28106_28159 = state_28079__$1;
(statearr_28106_28159[(2)] = inst_28053);

(statearr_28106_28159[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (6))){
var state_28079__$1 = state_28079;
var statearr_28107_28160 = state_28079__$1;
(statearr_28107_28160[(2)] = false);

(statearr_28107_28160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (28))){
var inst_28049 = (state_28079[(2)]);
var inst_28050 = calc_state.call(null);
var inst_28006 = inst_28050;
var state_28079__$1 = (function (){var statearr_28108 = state_28079;
(statearr_28108[(7)] = inst_28006);

(statearr_28108[(15)] = inst_28049);

return statearr_28108;
})();
var statearr_28109_28161 = state_28079__$1;
(statearr_28109_28161[(2)] = null);

(statearr_28109_28161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (25))){
var inst_28075 = (state_28079[(2)]);
var state_28079__$1 = state_28079;
var statearr_28110_28162 = state_28079__$1;
(statearr_28110_28162[(2)] = inst_28075);

(statearr_28110_28162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (34))){
var inst_28073 = (state_28079[(2)]);
var state_28079__$1 = state_28079;
var statearr_28111_28163 = state_28079__$1;
(statearr_28111_28163[(2)] = inst_28073);

(statearr_28111_28163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (17))){
var state_28079__$1 = state_28079;
var statearr_28112_28164 = state_28079__$1;
(statearr_28112_28164[(2)] = false);

(statearr_28112_28164[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (3))){
var state_28079__$1 = state_28079;
var statearr_28113_28165 = state_28079__$1;
(statearr_28113_28165[(2)] = false);

(statearr_28113_28165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (12))){
var inst_28077 = (state_28079[(2)]);
var state_28079__$1 = state_28079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28079__$1,inst_28077);
} else {
if((state_val_28080 === (2))){
var inst_27981 = (state_28079[(8)]);
var inst_27986 = inst_27981.cljs$lang$protocol_mask$partition0$;
var inst_27987 = (inst_27986 & (64));
var inst_27988 = inst_27981.cljs$core$ISeq$;
var inst_27989 = (cljs.core.PROTOCOL_SENTINEL === inst_27988);
var inst_27990 = ((inst_27987) || (inst_27989));
var state_28079__$1 = state_28079;
if(cljs.core.truth_(inst_27990)){
var statearr_28114_28166 = state_28079__$1;
(statearr_28114_28166[(1)] = (5));

} else {
var statearr_28115_28167 = state_28079__$1;
(statearr_28115_28167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (23))){
var inst_28038 = (state_28079[(14)]);
var inst_28044 = (inst_28038 == null);
var state_28079__$1 = state_28079;
if(cljs.core.truth_(inst_28044)){
var statearr_28116_28168 = state_28079__$1;
(statearr_28116_28168[(1)] = (26));

} else {
var statearr_28117_28169 = state_28079__$1;
(statearr_28117_28169[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (35))){
var inst_28064 = (state_28079[(2)]);
var state_28079__$1 = state_28079;
if(cljs.core.truth_(inst_28064)){
var statearr_28118_28170 = state_28079__$1;
(statearr_28118_28170[(1)] = (36));

} else {
var statearr_28119_28171 = state_28079__$1;
(statearr_28119_28171[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (19))){
var inst_28006 = (state_28079[(7)]);
var inst_28026 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28006);
var state_28079__$1 = state_28079;
var statearr_28120_28172 = state_28079__$1;
(statearr_28120_28172[(2)] = inst_28026);

(statearr_28120_28172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (11))){
var inst_28006 = (state_28079[(7)]);
var inst_28010 = (inst_28006 == null);
var inst_28011 = cljs.core.not.call(null,inst_28010);
var state_28079__$1 = state_28079;
if(inst_28011){
var statearr_28121_28173 = state_28079__$1;
(statearr_28121_28173[(1)] = (13));

} else {
var statearr_28122_28174 = state_28079__$1;
(statearr_28122_28174[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (9))){
var inst_27981 = (state_28079[(8)]);
var state_28079__$1 = state_28079;
var statearr_28123_28175 = state_28079__$1;
(statearr_28123_28175[(2)] = inst_27981);

(statearr_28123_28175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (5))){
var state_28079__$1 = state_28079;
var statearr_28124_28176 = state_28079__$1;
(statearr_28124_28176[(2)] = true);

(statearr_28124_28176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (14))){
var state_28079__$1 = state_28079;
var statearr_28125_28177 = state_28079__$1;
(statearr_28125_28177[(2)] = false);

(statearr_28125_28177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (26))){
var inst_28039 = (state_28079[(10)]);
var inst_28046 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28039);
var state_28079__$1 = state_28079;
var statearr_28126_28178 = state_28079__$1;
(statearr_28126_28178[(2)] = inst_28046);

(statearr_28126_28178[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (16))){
var state_28079__$1 = state_28079;
var statearr_28127_28179 = state_28079__$1;
(statearr_28127_28179[(2)] = true);

(statearr_28127_28179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (38))){
var inst_28069 = (state_28079[(2)]);
var state_28079__$1 = state_28079;
var statearr_28128_28180 = state_28079__$1;
(statearr_28128_28180[(2)] = inst_28069);

(statearr_28128_28180[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (30))){
var inst_28039 = (state_28079[(10)]);
var inst_28030 = (state_28079[(11)]);
var inst_28031 = (state_28079[(13)]);
var inst_28056 = cljs.core.empty_QMARK_.call(null,inst_28030);
var inst_28057 = inst_28031.call(null,inst_28039);
var inst_28058 = cljs.core.not.call(null,inst_28057);
var inst_28059 = ((inst_28056) && (inst_28058));
var state_28079__$1 = state_28079;
var statearr_28129_28181 = state_28079__$1;
(statearr_28129_28181[(2)] = inst_28059);

(statearr_28129_28181[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (10))){
var inst_27981 = (state_28079[(8)]);
var inst_28002 = (state_28079[(2)]);
var inst_28003 = cljs.core.get.call(null,inst_28002,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28004 = cljs.core.get.call(null,inst_28002,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28005 = cljs.core.get.call(null,inst_28002,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28006 = inst_27981;
var state_28079__$1 = (function (){var statearr_28130 = state_28079;
(statearr_28130[(7)] = inst_28006);

(statearr_28130[(16)] = inst_28003);

(statearr_28130[(17)] = inst_28004);

(statearr_28130[(18)] = inst_28005);

return statearr_28130;
})();
var statearr_28131_28182 = state_28079__$1;
(statearr_28131_28182[(2)] = null);

(statearr_28131_28182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (18))){
var inst_28021 = (state_28079[(2)]);
var state_28079__$1 = state_28079;
var statearr_28132_28183 = state_28079__$1;
(statearr_28132_28183[(2)] = inst_28021);

(statearr_28132_28183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (37))){
var state_28079__$1 = state_28079;
var statearr_28133_28184 = state_28079__$1;
(statearr_28133_28184[(2)] = null);

(statearr_28133_28184[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (8))){
var inst_27981 = (state_28079[(8)]);
var inst_27999 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27981);
var state_28079__$1 = state_28079;
var statearr_28134_28185 = state_28079__$1;
(statearr_28134_28185[(2)] = inst_27999);

(statearr_28134_28185[(1)] = (10));


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
});})(c__27080__auto___28139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26990__auto__,c__27080__auto___28139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26991__auto__ = null;
var cljs$core$async$mix_$_state_machine__26991__auto____0 = (function (){
var statearr_28135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28135[(0)] = cljs$core$async$mix_$_state_machine__26991__auto__);

(statearr_28135[(1)] = (1));

return statearr_28135;
});
var cljs$core$async$mix_$_state_machine__26991__auto____1 = (function (state_28079){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_28079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e28136){if((e28136 instanceof Object)){
var ex__26994__auto__ = e28136;
var statearr_28137_28186 = state_28079;
(statearr_28137_28186[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28187 = state_28079;
state_28079 = G__28187;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26991__auto__ = function(state_28079){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26991__auto____1.call(this,state_28079);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26991__auto____0;
cljs$core$async$mix_$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26991__auto____1;
return cljs$core$async$mix_$_state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___28139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27082__auto__ = (function (){var statearr_28138 = f__27081__auto__.call(null);
(statearr_28138[(6)] = c__27080__auto___28139);

return statearr_28138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___28139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28189 = arguments.length;
switch (G__28189) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28193 = arguments.length;
switch (G__28193) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__28191_SHARP_){
if(cljs.core.truth_(p1__28191_SHARP_.call(null,topic))){
return p1__28191_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28191_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28194 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28194 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28195){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28195 = meta28195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28196,meta28195__$1){
var self__ = this;
var _28196__$1 = this;
return (new cljs.core.async.t_cljs$core$async28194(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28195__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28194.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28196){
var self__ = this;
var _28196__$1 = this;
return self__.meta28195;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28194.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28194.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28194.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28194.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28194.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28194.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28194.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28194.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28195","meta28195",-399515197,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28194";

cljs.core.async.t_cljs$core$async28194.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28194");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28194.
 */
cljs.core.async.__GT_t_cljs$core$async28194 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28194(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28195){
return (new cljs.core.async.t_cljs$core$async28194(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28195));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28194(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27080__auto___28314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___28314,mults,ensure_mult,p){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___28314,mults,ensure_mult,p){
return (function (state_28268){
var state_val_28269 = (state_28268[(1)]);
if((state_val_28269 === (7))){
var inst_28264 = (state_28268[(2)]);
var state_28268__$1 = state_28268;
var statearr_28270_28315 = state_28268__$1;
(statearr_28270_28315[(2)] = inst_28264);

(statearr_28270_28315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (20))){
var state_28268__$1 = state_28268;
var statearr_28271_28316 = state_28268__$1;
(statearr_28271_28316[(2)] = null);

(statearr_28271_28316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (1))){
var state_28268__$1 = state_28268;
var statearr_28272_28317 = state_28268__$1;
(statearr_28272_28317[(2)] = null);

(statearr_28272_28317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (24))){
var inst_28247 = (state_28268[(7)]);
var inst_28256 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28247);
var state_28268__$1 = state_28268;
var statearr_28273_28318 = state_28268__$1;
(statearr_28273_28318[(2)] = inst_28256);

(statearr_28273_28318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (4))){
var inst_28199 = (state_28268[(8)]);
var inst_28199__$1 = (state_28268[(2)]);
var inst_28200 = (inst_28199__$1 == null);
var state_28268__$1 = (function (){var statearr_28274 = state_28268;
(statearr_28274[(8)] = inst_28199__$1);

return statearr_28274;
})();
if(cljs.core.truth_(inst_28200)){
var statearr_28275_28319 = state_28268__$1;
(statearr_28275_28319[(1)] = (5));

} else {
var statearr_28276_28320 = state_28268__$1;
(statearr_28276_28320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (15))){
var inst_28241 = (state_28268[(2)]);
var state_28268__$1 = state_28268;
var statearr_28277_28321 = state_28268__$1;
(statearr_28277_28321[(2)] = inst_28241);

(statearr_28277_28321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (21))){
var inst_28261 = (state_28268[(2)]);
var state_28268__$1 = (function (){var statearr_28278 = state_28268;
(statearr_28278[(9)] = inst_28261);

return statearr_28278;
})();
var statearr_28279_28322 = state_28268__$1;
(statearr_28279_28322[(2)] = null);

(statearr_28279_28322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (13))){
var inst_28223 = (state_28268[(10)]);
var inst_28225 = cljs.core.chunked_seq_QMARK_.call(null,inst_28223);
var state_28268__$1 = state_28268;
if(inst_28225){
var statearr_28280_28323 = state_28268__$1;
(statearr_28280_28323[(1)] = (16));

} else {
var statearr_28281_28324 = state_28268__$1;
(statearr_28281_28324[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (22))){
var inst_28253 = (state_28268[(2)]);
var state_28268__$1 = state_28268;
if(cljs.core.truth_(inst_28253)){
var statearr_28282_28325 = state_28268__$1;
(statearr_28282_28325[(1)] = (23));

} else {
var statearr_28283_28326 = state_28268__$1;
(statearr_28283_28326[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (6))){
var inst_28247 = (state_28268[(7)]);
var inst_28249 = (state_28268[(11)]);
var inst_28199 = (state_28268[(8)]);
var inst_28247__$1 = topic_fn.call(null,inst_28199);
var inst_28248 = cljs.core.deref.call(null,mults);
var inst_28249__$1 = cljs.core.get.call(null,inst_28248,inst_28247__$1);
var state_28268__$1 = (function (){var statearr_28284 = state_28268;
(statearr_28284[(7)] = inst_28247__$1);

(statearr_28284[(11)] = inst_28249__$1);

return statearr_28284;
})();
if(cljs.core.truth_(inst_28249__$1)){
var statearr_28285_28327 = state_28268__$1;
(statearr_28285_28327[(1)] = (19));

} else {
var statearr_28286_28328 = state_28268__$1;
(statearr_28286_28328[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (25))){
var inst_28258 = (state_28268[(2)]);
var state_28268__$1 = state_28268;
var statearr_28287_28329 = state_28268__$1;
(statearr_28287_28329[(2)] = inst_28258);

(statearr_28287_28329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (17))){
var inst_28223 = (state_28268[(10)]);
var inst_28232 = cljs.core.first.call(null,inst_28223);
var inst_28233 = cljs.core.async.muxch_STAR_.call(null,inst_28232);
var inst_28234 = cljs.core.async.close_BANG_.call(null,inst_28233);
var inst_28235 = cljs.core.next.call(null,inst_28223);
var inst_28209 = inst_28235;
var inst_28210 = null;
var inst_28211 = (0);
var inst_28212 = (0);
var state_28268__$1 = (function (){var statearr_28288 = state_28268;
(statearr_28288[(12)] = inst_28212);

(statearr_28288[(13)] = inst_28234);

(statearr_28288[(14)] = inst_28209);

(statearr_28288[(15)] = inst_28211);

(statearr_28288[(16)] = inst_28210);

return statearr_28288;
})();
var statearr_28289_28330 = state_28268__$1;
(statearr_28289_28330[(2)] = null);

(statearr_28289_28330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (3))){
var inst_28266 = (state_28268[(2)]);
var state_28268__$1 = state_28268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28268__$1,inst_28266);
} else {
if((state_val_28269 === (12))){
var inst_28243 = (state_28268[(2)]);
var state_28268__$1 = state_28268;
var statearr_28290_28331 = state_28268__$1;
(statearr_28290_28331[(2)] = inst_28243);

(statearr_28290_28331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (2))){
var state_28268__$1 = state_28268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28268__$1,(4),ch);
} else {
if((state_val_28269 === (23))){
var state_28268__$1 = state_28268;
var statearr_28291_28332 = state_28268__$1;
(statearr_28291_28332[(2)] = null);

(statearr_28291_28332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (19))){
var inst_28249 = (state_28268[(11)]);
var inst_28199 = (state_28268[(8)]);
var inst_28251 = cljs.core.async.muxch_STAR_.call(null,inst_28249);
var state_28268__$1 = state_28268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28268__$1,(22),inst_28251,inst_28199);
} else {
if((state_val_28269 === (11))){
var inst_28209 = (state_28268[(14)]);
var inst_28223 = (state_28268[(10)]);
var inst_28223__$1 = cljs.core.seq.call(null,inst_28209);
var state_28268__$1 = (function (){var statearr_28292 = state_28268;
(statearr_28292[(10)] = inst_28223__$1);

return statearr_28292;
})();
if(inst_28223__$1){
var statearr_28293_28333 = state_28268__$1;
(statearr_28293_28333[(1)] = (13));

} else {
var statearr_28294_28334 = state_28268__$1;
(statearr_28294_28334[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (9))){
var inst_28245 = (state_28268[(2)]);
var state_28268__$1 = state_28268;
var statearr_28295_28335 = state_28268__$1;
(statearr_28295_28335[(2)] = inst_28245);

(statearr_28295_28335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (5))){
var inst_28206 = cljs.core.deref.call(null,mults);
var inst_28207 = cljs.core.vals.call(null,inst_28206);
var inst_28208 = cljs.core.seq.call(null,inst_28207);
var inst_28209 = inst_28208;
var inst_28210 = null;
var inst_28211 = (0);
var inst_28212 = (0);
var state_28268__$1 = (function (){var statearr_28296 = state_28268;
(statearr_28296[(12)] = inst_28212);

(statearr_28296[(14)] = inst_28209);

(statearr_28296[(15)] = inst_28211);

(statearr_28296[(16)] = inst_28210);

return statearr_28296;
})();
var statearr_28297_28336 = state_28268__$1;
(statearr_28297_28336[(2)] = null);

(statearr_28297_28336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (14))){
var state_28268__$1 = state_28268;
var statearr_28301_28337 = state_28268__$1;
(statearr_28301_28337[(2)] = null);

(statearr_28301_28337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (16))){
var inst_28223 = (state_28268[(10)]);
var inst_28227 = cljs.core.chunk_first.call(null,inst_28223);
var inst_28228 = cljs.core.chunk_rest.call(null,inst_28223);
var inst_28229 = cljs.core.count.call(null,inst_28227);
var inst_28209 = inst_28228;
var inst_28210 = inst_28227;
var inst_28211 = inst_28229;
var inst_28212 = (0);
var state_28268__$1 = (function (){var statearr_28302 = state_28268;
(statearr_28302[(12)] = inst_28212);

(statearr_28302[(14)] = inst_28209);

(statearr_28302[(15)] = inst_28211);

(statearr_28302[(16)] = inst_28210);

return statearr_28302;
})();
var statearr_28303_28338 = state_28268__$1;
(statearr_28303_28338[(2)] = null);

(statearr_28303_28338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (10))){
var inst_28212 = (state_28268[(12)]);
var inst_28209 = (state_28268[(14)]);
var inst_28211 = (state_28268[(15)]);
var inst_28210 = (state_28268[(16)]);
var inst_28217 = cljs.core._nth.call(null,inst_28210,inst_28212);
var inst_28218 = cljs.core.async.muxch_STAR_.call(null,inst_28217);
var inst_28219 = cljs.core.async.close_BANG_.call(null,inst_28218);
var inst_28220 = (inst_28212 + (1));
var tmp28298 = inst_28209;
var tmp28299 = inst_28211;
var tmp28300 = inst_28210;
var inst_28209__$1 = tmp28298;
var inst_28210__$1 = tmp28300;
var inst_28211__$1 = tmp28299;
var inst_28212__$1 = inst_28220;
var state_28268__$1 = (function (){var statearr_28304 = state_28268;
(statearr_28304[(12)] = inst_28212__$1);

(statearr_28304[(17)] = inst_28219);

(statearr_28304[(14)] = inst_28209__$1);

(statearr_28304[(15)] = inst_28211__$1);

(statearr_28304[(16)] = inst_28210__$1);

return statearr_28304;
})();
var statearr_28305_28339 = state_28268__$1;
(statearr_28305_28339[(2)] = null);

(statearr_28305_28339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (18))){
var inst_28238 = (state_28268[(2)]);
var state_28268__$1 = state_28268;
var statearr_28306_28340 = state_28268__$1;
(statearr_28306_28340[(2)] = inst_28238);

(statearr_28306_28340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (8))){
var inst_28212 = (state_28268[(12)]);
var inst_28211 = (state_28268[(15)]);
var inst_28214 = (inst_28212 < inst_28211);
var inst_28215 = inst_28214;
var state_28268__$1 = state_28268;
if(cljs.core.truth_(inst_28215)){
var statearr_28307_28341 = state_28268__$1;
(statearr_28307_28341[(1)] = (10));

} else {
var statearr_28308_28342 = state_28268__$1;
(statearr_28308_28342[(1)] = (11));

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
});})(c__27080__auto___28314,mults,ensure_mult,p))
;
return ((function (switch__26990__auto__,c__27080__auto___28314,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26991__auto__ = null;
var cljs$core$async$state_machine__26991__auto____0 = (function (){
var statearr_28309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28309[(0)] = cljs$core$async$state_machine__26991__auto__);

(statearr_28309[(1)] = (1));

return statearr_28309;
});
var cljs$core$async$state_machine__26991__auto____1 = (function (state_28268){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_28268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e28310){if((e28310 instanceof Object)){
var ex__26994__auto__ = e28310;
var statearr_28311_28343 = state_28268;
(statearr_28311_28343[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28344 = state_28268;
state_28268 = G__28344;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$state_machine__26991__auto__ = function(state_28268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26991__auto____1.call(this,state_28268);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26991__auto____0;
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26991__auto____1;
return cljs$core$async$state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___28314,mults,ensure_mult,p))
})();
var state__27082__auto__ = (function (){var statearr_28312 = f__27081__auto__.call(null);
(statearr_28312[(6)] = c__27080__auto___28314);

return statearr_28312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___28314,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28346 = arguments.length;
switch (G__28346) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28349 = arguments.length;
switch (G__28349) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28352 = arguments.length;
switch (G__28352) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27080__auto___28419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___28419,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___28419,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28391){
var state_val_28392 = (state_28391[(1)]);
if((state_val_28392 === (7))){
var state_28391__$1 = state_28391;
var statearr_28393_28420 = state_28391__$1;
(statearr_28393_28420[(2)] = null);

(statearr_28393_28420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28392 === (1))){
var state_28391__$1 = state_28391;
var statearr_28394_28421 = state_28391__$1;
(statearr_28394_28421[(2)] = null);

(statearr_28394_28421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28392 === (4))){
var inst_28355 = (state_28391[(7)]);
var inst_28357 = (inst_28355 < cnt);
var state_28391__$1 = state_28391;
if(cljs.core.truth_(inst_28357)){
var statearr_28395_28422 = state_28391__$1;
(statearr_28395_28422[(1)] = (6));

} else {
var statearr_28396_28423 = state_28391__$1;
(statearr_28396_28423[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28392 === (15))){
var inst_28387 = (state_28391[(2)]);
var state_28391__$1 = state_28391;
var statearr_28397_28424 = state_28391__$1;
(statearr_28397_28424[(2)] = inst_28387);

(statearr_28397_28424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28392 === (13))){
var inst_28380 = cljs.core.async.close_BANG_.call(null,out);
var state_28391__$1 = state_28391;
var statearr_28398_28425 = state_28391__$1;
(statearr_28398_28425[(2)] = inst_28380);

(statearr_28398_28425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28392 === (6))){
var state_28391__$1 = state_28391;
var statearr_28399_28426 = state_28391__$1;
(statearr_28399_28426[(2)] = null);

(statearr_28399_28426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28392 === (3))){
var inst_28389 = (state_28391[(2)]);
var state_28391__$1 = state_28391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28391__$1,inst_28389);
} else {
if((state_val_28392 === (12))){
var inst_28377 = (state_28391[(8)]);
var inst_28377__$1 = (state_28391[(2)]);
var inst_28378 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28377__$1);
var state_28391__$1 = (function (){var statearr_28400 = state_28391;
(statearr_28400[(8)] = inst_28377__$1);

return statearr_28400;
})();
if(cljs.core.truth_(inst_28378)){
var statearr_28401_28427 = state_28391__$1;
(statearr_28401_28427[(1)] = (13));

} else {
var statearr_28402_28428 = state_28391__$1;
(statearr_28402_28428[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28392 === (2))){
var inst_28354 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28355 = (0);
var state_28391__$1 = (function (){var statearr_28403 = state_28391;
(statearr_28403[(7)] = inst_28355);

(statearr_28403[(9)] = inst_28354);

return statearr_28403;
})();
var statearr_28404_28429 = state_28391__$1;
(statearr_28404_28429[(2)] = null);

(statearr_28404_28429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28392 === (11))){
var inst_28355 = (state_28391[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28391,(10),Object,null,(9));
var inst_28364 = chs__$1.call(null,inst_28355);
var inst_28365 = done.call(null,inst_28355);
var inst_28366 = cljs.core.async.take_BANG_.call(null,inst_28364,inst_28365);
var state_28391__$1 = state_28391;
var statearr_28405_28430 = state_28391__$1;
(statearr_28405_28430[(2)] = inst_28366);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28391__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28392 === (9))){
var inst_28355 = (state_28391[(7)]);
var inst_28368 = (state_28391[(2)]);
var inst_28369 = (inst_28355 + (1));
var inst_28355__$1 = inst_28369;
var state_28391__$1 = (function (){var statearr_28406 = state_28391;
(statearr_28406[(7)] = inst_28355__$1);

(statearr_28406[(10)] = inst_28368);

return statearr_28406;
})();
var statearr_28407_28431 = state_28391__$1;
(statearr_28407_28431[(2)] = null);

(statearr_28407_28431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28392 === (5))){
var inst_28375 = (state_28391[(2)]);
var state_28391__$1 = (function (){var statearr_28408 = state_28391;
(statearr_28408[(11)] = inst_28375);

return statearr_28408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28391__$1,(12),dchan);
} else {
if((state_val_28392 === (14))){
var inst_28377 = (state_28391[(8)]);
var inst_28382 = cljs.core.apply.call(null,f,inst_28377);
var state_28391__$1 = state_28391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28391__$1,(16),out,inst_28382);
} else {
if((state_val_28392 === (16))){
var inst_28384 = (state_28391[(2)]);
var state_28391__$1 = (function (){var statearr_28409 = state_28391;
(statearr_28409[(12)] = inst_28384);

return statearr_28409;
})();
var statearr_28410_28432 = state_28391__$1;
(statearr_28410_28432[(2)] = null);

(statearr_28410_28432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28392 === (10))){
var inst_28359 = (state_28391[(2)]);
var inst_28360 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28391__$1 = (function (){var statearr_28411 = state_28391;
(statearr_28411[(13)] = inst_28359);

return statearr_28411;
})();
var statearr_28412_28433 = state_28391__$1;
(statearr_28412_28433[(2)] = inst_28360);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28391__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28392 === (8))){
var inst_28373 = (state_28391[(2)]);
var state_28391__$1 = state_28391;
var statearr_28413_28434 = state_28391__$1;
(statearr_28413_28434[(2)] = inst_28373);

(statearr_28413_28434[(1)] = (5));


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
});})(c__27080__auto___28419,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26990__auto__,c__27080__auto___28419,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26991__auto__ = null;
var cljs$core$async$state_machine__26991__auto____0 = (function (){
var statearr_28414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28414[(0)] = cljs$core$async$state_machine__26991__auto__);

(statearr_28414[(1)] = (1));

return statearr_28414;
});
var cljs$core$async$state_machine__26991__auto____1 = (function (state_28391){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_28391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e28415){if((e28415 instanceof Object)){
var ex__26994__auto__ = e28415;
var statearr_28416_28435 = state_28391;
(statearr_28416_28435[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28436 = state_28391;
state_28391 = G__28436;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$state_machine__26991__auto__ = function(state_28391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26991__auto____1.call(this,state_28391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26991__auto____0;
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26991__auto____1;
return cljs$core$async$state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___28419,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27082__auto__ = (function (){var statearr_28417 = f__27081__auto__.call(null);
(statearr_28417[(6)] = c__27080__auto___28419);

return statearr_28417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___28419,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28439 = arguments.length;
switch (G__28439) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27080__auto___28493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___28493,out){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___28493,out){
return (function (state_28471){
var state_val_28472 = (state_28471[(1)]);
if((state_val_28472 === (7))){
var inst_28450 = (state_28471[(7)]);
var inst_28451 = (state_28471[(8)]);
var inst_28450__$1 = (state_28471[(2)]);
var inst_28451__$1 = cljs.core.nth.call(null,inst_28450__$1,(0),null);
var inst_28452 = cljs.core.nth.call(null,inst_28450__$1,(1),null);
var inst_28453 = (inst_28451__$1 == null);
var state_28471__$1 = (function (){var statearr_28473 = state_28471;
(statearr_28473[(7)] = inst_28450__$1);

(statearr_28473[(9)] = inst_28452);

(statearr_28473[(8)] = inst_28451__$1);

return statearr_28473;
})();
if(cljs.core.truth_(inst_28453)){
var statearr_28474_28494 = state_28471__$1;
(statearr_28474_28494[(1)] = (8));

} else {
var statearr_28475_28495 = state_28471__$1;
(statearr_28475_28495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28472 === (1))){
var inst_28440 = cljs.core.vec.call(null,chs);
var inst_28441 = inst_28440;
var state_28471__$1 = (function (){var statearr_28476 = state_28471;
(statearr_28476[(10)] = inst_28441);

return statearr_28476;
})();
var statearr_28477_28496 = state_28471__$1;
(statearr_28477_28496[(2)] = null);

(statearr_28477_28496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28472 === (4))){
var inst_28441 = (state_28471[(10)]);
var state_28471__$1 = state_28471;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28471__$1,(7),inst_28441);
} else {
if((state_val_28472 === (6))){
var inst_28467 = (state_28471[(2)]);
var state_28471__$1 = state_28471;
var statearr_28478_28497 = state_28471__$1;
(statearr_28478_28497[(2)] = inst_28467);

(statearr_28478_28497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28472 === (3))){
var inst_28469 = (state_28471[(2)]);
var state_28471__$1 = state_28471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28471__$1,inst_28469);
} else {
if((state_val_28472 === (2))){
var inst_28441 = (state_28471[(10)]);
var inst_28443 = cljs.core.count.call(null,inst_28441);
var inst_28444 = (inst_28443 > (0));
var state_28471__$1 = state_28471;
if(cljs.core.truth_(inst_28444)){
var statearr_28480_28498 = state_28471__$1;
(statearr_28480_28498[(1)] = (4));

} else {
var statearr_28481_28499 = state_28471__$1;
(statearr_28481_28499[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28472 === (11))){
var inst_28441 = (state_28471[(10)]);
var inst_28460 = (state_28471[(2)]);
var tmp28479 = inst_28441;
var inst_28441__$1 = tmp28479;
var state_28471__$1 = (function (){var statearr_28482 = state_28471;
(statearr_28482[(11)] = inst_28460);

(statearr_28482[(10)] = inst_28441__$1);

return statearr_28482;
})();
var statearr_28483_28500 = state_28471__$1;
(statearr_28483_28500[(2)] = null);

(statearr_28483_28500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28472 === (9))){
var inst_28451 = (state_28471[(8)]);
var state_28471__$1 = state_28471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28471__$1,(11),out,inst_28451);
} else {
if((state_val_28472 === (5))){
var inst_28465 = cljs.core.async.close_BANG_.call(null,out);
var state_28471__$1 = state_28471;
var statearr_28484_28501 = state_28471__$1;
(statearr_28484_28501[(2)] = inst_28465);

(statearr_28484_28501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28472 === (10))){
var inst_28463 = (state_28471[(2)]);
var state_28471__$1 = state_28471;
var statearr_28485_28502 = state_28471__$1;
(statearr_28485_28502[(2)] = inst_28463);

(statearr_28485_28502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28472 === (8))){
var inst_28450 = (state_28471[(7)]);
var inst_28452 = (state_28471[(9)]);
var inst_28451 = (state_28471[(8)]);
var inst_28441 = (state_28471[(10)]);
var inst_28455 = (function (){var cs = inst_28441;
var vec__28446 = inst_28450;
var v = inst_28451;
var c = inst_28452;
return ((function (cs,vec__28446,v,c,inst_28450,inst_28452,inst_28451,inst_28441,state_val_28472,c__27080__auto___28493,out){
return (function (p1__28437_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28437_SHARP_);
});
;})(cs,vec__28446,v,c,inst_28450,inst_28452,inst_28451,inst_28441,state_val_28472,c__27080__auto___28493,out))
})();
var inst_28456 = cljs.core.filterv.call(null,inst_28455,inst_28441);
var inst_28441__$1 = inst_28456;
var state_28471__$1 = (function (){var statearr_28486 = state_28471;
(statearr_28486[(10)] = inst_28441__$1);

return statearr_28486;
})();
var statearr_28487_28503 = state_28471__$1;
(statearr_28487_28503[(2)] = null);

(statearr_28487_28503[(1)] = (2));


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
});})(c__27080__auto___28493,out))
;
return ((function (switch__26990__auto__,c__27080__auto___28493,out){
return (function() {
var cljs$core$async$state_machine__26991__auto__ = null;
var cljs$core$async$state_machine__26991__auto____0 = (function (){
var statearr_28488 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28488[(0)] = cljs$core$async$state_machine__26991__auto__);

(statearr_28488[(1)] = (1));

return statearr_28488;
});
var cljs$core$async$state_machine__26991__auto____1 = (function (state_28471){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_28471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e28489){if((e28489 instanceof Object)){
var ex__26994__auto__ = e28489;
var statearr_28490_28504 = state_28471;
(statearr_28490_28504[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28505 = state_28471;
state_28471 = G__28505;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$state_machine__26991__auto__ = function(state_28471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26991__auto____1.call(this,state_28471);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26991__auto____0;
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26991__auto____1;
return cljs$core$async$state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___28493,out))
})();
var state__27082__auto__ = (function (){var statearr_28491 = f__27081__auto__.call(null);
(statearr_28491[(6)] = c__27080__auto___28493);

return statearr_28491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___28493,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28507 = arguments.length;
switch (G__28507) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27080__auto___28552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___28552,out){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___28552,out){
return (function (state_28531){
var state_val_28532 = (state_28531[(1)]);
if((state_val_28532 === (7))){
var inst_28513 = (state_28531[(7)]);
var inst_28513__$1 = (state_28531[(2)]);
var inst_28514 = (inst_28513__$1 == null);
var inst_28515 = cljs.core.not.call(null,inst_28514);
var state_28531__$1 = (function (){var statearr_28533 = state_28531;
(statearr_28533[(7)] = inst_28513__$1);

return statearr_28533;
})();
if(inst_28515){
var statearr_28534_28553 = state_28531__$1;
(statearr_28534_28553[(1)] = (8));

} else {
var statearr_28535_28554 = state_28531__$1;
(statearr_28535_28554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (1))){
var inst_28508 = (0);
var state_28531__$1 = (function (){var statearr_28536 = state_28531;
(statearr_28536[(8)] = inst_28508);

return statearr_28536;
})();
var statearr_28537_28555 = state_28531__$1;
(statearr_28537_28555[(2)] = null);

(statearr_28537_28555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (4))){
var state_28531__$1 = state_28531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28531__$1,(7),ch);
} else {
if((state_val_28532 === (6))){
var inst_28526 = (state_28531[(2)]);
var state_28531__$1 = state_28531;
var statearr_28538_28556 = state_28531__$1;
(statearr_28538_28556[(2)] = inst_28526);

(statearr_28538_28556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (3))){
var inst_28528 = (state_28531[(2)]);
var inst_28529 = cljs.core.async.close_BANG_.call(null,out);
var state_28531__$1 = (function (){var statearr_28539 = state_28531;
(statearr_28539[(9)] = inst_28528);

return statearr_28539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28531__$1,inst_28529);
} else {
if((state_val_28532 === (2))){
var inst_28508 = (state_28531[(8)]);
var inst_28510 = (inst_28508 < n);
var state_28531__$1 = state_28531;
if(cljs.core.truth_(inst_28510)){
var statearr_28540_28557 = state_28531__$1;
(statearr_28540_28557[(1)] = (4));

} else {
var statearr_28541_28558 = state_28531__$1;
(statearr_28541_28558[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (11))){
var inst_28508 = (state_28531[(8)]);
var inst_28518 = (state_28531[(2)]);
var inst_28519 = (inst_28508 + (1));
var inst_28508__$1 = inst_28519;
var state_28531__$1 = (function (){var statearr_28542 = state_28531;
(statearr_28542[(8)] = inst_28508__$1);

(statearr_28542[(10)] = inst_28518);

return statearr_28542;
})();
var statearr_28543_28559 = state_28531__$1;
(statearr_28543_28559[(2)] = null);

(statearr_28543_28559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (9))){
var state_28531__$1 = state_28531;
var statearr_28544_28560 = state_28531__$1;
(statearr_28544_28560[(2)] = null);

(statearr_28544_28560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (5))){
var state_28531__$1 = state_28531;
var statearr_28545_28561 = state_28531__$1;
(statearr_28545_28561[(2)] = null);

(statearr_28545_28561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (10))){
var inst_28523 = (state_28531[(2)]);
var state_28531__$1 = state_28531;
var statearr_28546_28562 = state_28531__$1;
(statearr_28546_28562[(2)] = inst_28523);

(statearr_28546_28562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (8))){
var inst_28513 = (state_28531[(7)]);
var state_28531__$1 = state_28531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28531__$1,(11),out,inst_28513);
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
});})(c__27080__auto___28552,out))
;
return ((function (switch__26990__auto__,c__27080__auto___28552,out){
return (function() {
var cljs$core$async$state_machine__26991__auto__ = null;
var cljs$core$async$state_machine__26991__auto____0 = (function (){
var statearr_28547 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28547[(0)] = cljs$core$async$state_machine__26991__auto__);

(statearr_28547[(1)] = (1));

return statearr_28547;
});
var cljs$core$async$state_machine__26991__auto____1 = (function (state_28531){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_28531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e28548){if((e28548 instanceof Object)){
var ex__26994__auto__ = e28548;
var statearr_28549_28563 = state_28531;
(statearr_28549_28563[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28564 = state_28531;
state_28531 = G__28564;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$state_machine__26991__auto__ = function(state_28531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26991__auto____1.call(this,state_28531);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26991__auto____0;
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26991__auto____1;
return cljs$core$async$state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___28552,out))
})();
var state__27082__auto__ = (function (){var statearr_28550 = f__27081__auto__.call(null);
(statearr_28550[(6)] = c__27080__auto___28552);

return statearr_28550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___28552,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28566 = (function (f,ch,meta28567){
this.f = f;
this.ch = ch;
this.meta28567 = meta28567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28568,meta28567__$1){
var self__ = this;
var _28568__$1 = this;
return (new cljs.core.async.t_cljs$core$async28566(self__.f,self__.ch,meta28567__$1));
});

cljs.core.async.t_cljs$core$async28566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28568){
var self__ = this;
var _28568__$1 = this;
return self__.meta28567;
});

cljs.core.async.t_cljs$core$async28566.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28566.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28566.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28566.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28566.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28569 = (function (f,ch,meta28567,_,fn1,meta28570){
this.f = f;
this.ch = ch;
this.meta28567 = meta28567;
this._ = _;
this.fn1 = fn1;
this.meta28570 = meta28570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28571,meta28570__$1){
var self__ = this;
var _28571__$1 = this;
return (new cljs.core.async.t_cljs$core$async28569(self__.f,self__.ch,self__.meta28567,self__._,self__.fn1,meta28570__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28571){
var self__ = this;
var _28571__$1 = this;
return self__.meta28570;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28565_SHARP_){
return f1.call(null,(((p1__28565_SHARP_ == null))?null:self__.f.call(null,p1__28565_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28569.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28567","meta28567",-1546947369,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28566","cljs.core.async/t_cljs$core$async28566",1128281152,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28570","meta28570",1912384935,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28569";

cljs.core.async.t_cljs$core$async28569.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28569");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28569.
 */
cljs.core.async.__GT_t_cljs$core$async28569 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28569(f__$1,ch__$1,meta28567__$1,___$2,fn1__$1,meta28570){
return (new cljs.core.async.t_cljs$core$async28569(f__$1,ch__$1,meta28567__$1,___$2,fn1__$1,meta28570));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28569(self__.f,self__.ch,self__.meta28567,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28566.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28566.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28567","meta28567",-1546947369,null)], null);
});

cljs.core.async.t_cljs$core$async28566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28566";

cljs.core.async.t_cljs$core$async28566.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28566");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28566.
 */
cljs.core.async.__GT_t_cljs$core$async28566 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28566(f__$1,ch__$1,meta28567){
return (new cljs.core.async.t_cljs$core$async28566(f__$1,ch__$1,meta28567));
});

}

return (new cljs.core.async.t_cljs$core$async28566(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28572 = (function (f,ch,meta28573){
this.f = f;
this.ch = ch;
this.meta28573 = meta28573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28574,meta28573__$1){
var self__ = this;
var _28574__$1 = this;
return (new cljs.core.async.t_cljs$core$async28572(self__.f,self__.ch,meta28573__$1));
});

cljs.core.async.t_cljs$core$async28572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28574){
var self__ = this;
var _28574__$1 = this;
return self__.meta28573;
});

cljs.core.async.t_cljs$core$async28572.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28572.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28572.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28573","meta28573",-574387952,null)], null);
});

cljs.core.async.t_cljs$core$async28572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28572";

cljs.core.async.t_cljs$core$async28572.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28572");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28572.
 */
cljs.core.async.__GT_t_cljs$core$async28572 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28572(f__$1,ch__$1,meta28573){
return (new cljs.core.async.t_cljs$core$async28572(f__$1,ch__$1,meta28573));
});

}

return (new cljs.core.async.t_cljs$core$async28572(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28575 = (function (p,ch,meta28576){
this.p = p;
this.ch = ch;
this.meta28576 = meta28576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28577,meta28576__$1){
var self__ = this;
var _28577__$1 = this;
return (new cljs.core.async.t_cljs$core$async28575(self__.p,self__.ch,meta28576__$1));
});

cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28577){
var self__ = this;
var _28577__$1 = this;
return self__.meta28576;
});

cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28576","meta28576",-1276639473,null)], null);
});

cljs.core.async.t_cljs$core$async28575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28575";

cljs.core.async.t_cljs$core$async28575.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28575");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28575.
 */
cljs.core.async.__GT_t_cljs$core$async28575 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28575(p__$1,ch__$1,meta28576){
return (new cljs.core.async.t_cljs$core$async28575(p__$1,ch__$1,meta28576));
});

}

return (new cljs.core.async.t_cljs$core$async28575(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28579 = arguments.length;
switch (G__28579) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27080__auto___28619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___28619,out){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___28619,out){
return (function (state_28600){
var state_val_28601 = (state_28600[(1)]);
if((state_val_28601 === (7))){
var inst_28596 = (state_28600[(2)]);
var state_28600__$1 = state_28600;
var statearr_28602_28620 = state_28600__$1;
(statearr_28602_28620[(2)] = inst_28596);

(statearr_28602_28620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28601 === (1))){
var state_28600__$1 = state_28600;
var statearr_28603_28621 = state_28600__$1;
(statearr_28603_28621[(2)] = null);

(statearr_28603_28621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28601 === (4))){
var inst_28582 = (state_28600[(7)]);
var inst_28582__$1 = (state_28600[(2)]);
var inst_28583 = (inst_28582__$1 == null);
var state_28600__$1 = (function (){var statearr_28604 = state_28600;
(statearr_28604[(7)] = inst_28582__$1);

return statearr_28604;
})();
if(cljs.core.truth_(inst_28583)){
var statearr_28605_28622 = state_28600__$1;
(statearr_28605_28622[(1)] = (5));

} else {
var statearr_28606_28623 = state_28600__$1;
(statearr_28606_28623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28601 === (6))){
var inst_28582 = (state_28600[(7)]);
var inst_28587 = p.call(null,inst_28582);
var state_28600__$1 = state_28600;
if(cljs.core.truth_(inst_28587)){
var statearr_28607_28624 = state_28600__$1;
(statearr_28607_28624[(1)] = (8));

} else {
var statearr_28608_28625 = state_28600__$1;
(statearr_28608_28625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28601 === (3))){
var inst_28598 = (state_28600[(2)]);
var state_28600__$1 = state_28600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28600__$1,inst_28598);
} else {
if((state_val_28601 === (2))){
var state_28600__$1 = state_28600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28600__$1,(4),ch);
} else {
if((state_val_28601 === (11))){
var inst_28590 = (state_28600[(2)]);
var state_28600__$1 = state_28600;
var statearr_28609_28626 = state_28600__$1;
(statearr_28609_28626[(2)] = inst_28590);

(statearr_28609_28626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28601 === (9))){
var state_28600__$1 = state_28600;
var statearr_28610_28627 = state_28600__$1;
(statearr_28610_28627[(2)] = null);

(statearr_28610_28627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28601 === (5))){
var inst_28585 = cljs.core.async.close_BANG_.call(null,out);
var state_28600__$1 = state_28600;
var statearr_28611_28628 = state_28600__$1;
(statearr_28611_28628[(2)] = inst_28585);

(statearr_28611_28628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28601 === (10))){
var inst_28593 = (state_28600[(2)]);
var state_28600__$1 = (function (){var statearr_28612 = state_28600;
(statearr_28612[(8)] = inst_28593);

return statearr_28612;
})();
var statearr_28613_28629 = state_28600__$1;
(statearr_28613_28629[(2)] = null);

(statearr_28613_28629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28601 === (8))){
var inst_28582 = (state_28600[(7)]);
var state_28600__$1 = state_28600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28600__$1,(11),out,inst_28582);
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
});})(c__27080__auto___28619,out))
;
return ((function (switch__26990__auto__,c__27080__auto___28619,out){
return (function() {
var cljs$core$async$state_machine__26991__auto__ = null;
var cljs$core$async$state_machine__26991__auto____0 = (function (){
var statearr_28614 = [null,null,null,null,null,null,null,null,null];
(statearr_28614[(0)] = cljs$core$async$state_machine__26991__auto__);

(statearr_28614[(1)] = (1));

return statearr_28614;
});
var cljs$core$async$state_machine__26991__auto____1 = (function (state_28600){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_28600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e28615){if((e28615 instanceof Object)){
var ex__26994__auto__ = e28615;
var statearr_28616_28630 = state_28600;
(statearr_28616_28630[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28631 = state_28600;
state_28600 = G__28631;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$state_machine__26991__auto__ = function(state_28600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26991__auto____1.call(this,state_28600);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26991__auto____0;
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26991__auto____1;
return cljs$core$async$state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___28619,out))
})();
var state__27082__auto__ = (function (){var statearr_28617 = f__27081__auto__.call(null);
(statearr_28617[(6)] = c__27080__auto___28619);

return statearr_28617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___28619,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28633 = arguments.length;
switch (G__28633) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto__){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto__){
return (function (state_28696){
var state_val_28697 = (state_28696[(1)]);
if((state_val_28697 === (7))){
var inst_28692 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28698_28736 = state_28696__$1;
(statearr_28698_28736[(2)] = inst_28692);

(statearr_28698_28736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (20))){
var inst_28662 = (state_28696[(7)]);
var inst_28673 = (state_28696[(2)]);
var inst_28674 = cljs.core.next.call(null,inst_28662);
var inst_28648 = inst_28674;
var inst_28649 = null;
var inst_28650 = (0);
var inst_28651 = (0);
var state_28696__$1 = (function (){var statearr_28699 = state_28696;
(statearr_28699[(8)] = inst_28648);

(statearr_28699[(9)] = inst_28673);

(statearr_28699[(10)] = inst_28650);

(statearr_28699[(11)] = inst_28649);

(statearr_28699[(12)] = inst_28651);

return statearr_28699;
})();
var statearr_28700_28737 = state_28696__$1;
(statearr_28700_28737[(2)] = null);

(statearr_28700_28737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (1))){
var state_28696__$1 = state_28696;
var statearr_28701_28738 = state_28696__$1;
(statearr_28701_28738[(2)] = null);

(statearr_28701_28738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (4))){
var inst_28637 = (state_28696[(13)]);
var inst_28637__$1 = (state_28696[(2)]);
var inst_28638 = (inst_28637__$1 == null);
var state_28696__$1 = (function (){var statearr_28702 = state_28696;
(statearr_28702[(13)] = inst_28637__$1);

return statearr_28702;
})();
if(cljs.core.truth_(inst_28638)){
var statearr_28703_28739 = state_28696__$1;
(statearr_28703_28739[(1)] = (5));

} else {
var statearr_28704_28740 = state_28696__$1;
(statearr_28704_28740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (15))){
var state_28696__$1 = state_28696;
var statearr_28708_28741 = state_28696__$1;
(statearr_28708_28741[(2)] = null);

(statearr_28708_28741[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (21))){
var state_28696__$1 = state_28696;
var statearr_28709_28742 = state_28696__$1;
(statearr_28709_28742[(2)] = null);

(statearr_28709_28742[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (13))){
var inst_28648 = (state_28696[(8)]);
var inst_28650 = (state_28696[(10)]);
var inst_28649 = (state_28696[(11)]);
var inst_28651 = (state_28696[(12)]);
var inst_28658 = (state_28696[(2)]);
var inst_28659 = (inst_28651 + (1));
var tmp28705 = inst_28648;
var tmp28706 = inst_28650;
var tmp28707 = inst_28649;
var inst_28648__$1 = tmp28705;
var inst_28649__$1 = tmp28707;
var inst_28650__$1 = tmp28706;
var inst_28651__$1 = inst_28659;
var state_28696__$1 = (function (){var statearr_28710 = state_28696;
(statearr_28710[(8)] = inst_28648__$1);

(statearr_28710[(10)] = inst_28650__$1);

(statearr_28710[(11)] = inst_28649__$1);

(statearr_28710[(14)] = inst_28658);

(statearr_28710[(12)] = inst_28651__$1);

return statearr_28710;
})();
var statearr_28711_28743 = state_28696__$1;
(statearr_28711_28743[(2)] = null);

(statearr_28711_28743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (22))){
var state_28696__$1 = state_28696;
var statearr_28712_28744 = state_28696__$1;
(statearr_28712_28744[(2)] = null);

(statearr_28712_28744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (6))){
var inst_28637 = (state_28696[(13)]);
var inst_28646 = f.call(null,inst_28637);
var inst_28647 = cljs.core.seq.call(null,inst_28646);
var inst_28648 = inst_28647;
var inst_28649 = null;
var inst_28650 = (0);
var inst_28651 = (0);
var state_28696__$1 = (function (){var statearr_28713 = state_28696;
(statearr_28713[(8)] = inst_28648);

(statearr_28713[(10)] = inst_28650);

(statearr_28713[(11)] = inst_28649);

(statearr_28713[(12)] = inst_28651);

return statearr_28713;
})();
var statearr_28714_28745 = state_28696__$1;
(statearr_28714_28745[(2)] = null);

(statearr_28714_28745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (17))){
var inst_28662 = (state_28696[(7)]);
var inst_28666 = cljs.core.chunk_first.call(null,inst_28662);
var inst_28667 = cljs.core.chunk_rest.call(null,inst_28662);
var inst_28668 = cljs.core.count.call(null,inst_28666);
var inst_28648 = inst_28667;
var inst_28649 = inst_28666;
var inst_28650 = inst_28668;
var inst_28651 = (0);
var state_28696__$1 = (function (){var statearr_28715 = state_28696;
(statearr_28715[(8)] = inst_28648);

(statearr_28715[(10)] = inst_28650);

(statearr_28715[(11)] = inst_28649);

(statearr_28715[(12)] = inst_28651);

return statearr_28715;
})();
var statearr_28716_28746 = state_28696__$1;
(statearr_28716_28746[(2)] = null);

(statearr_28716_28746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (3))){
var inst_28694 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28696__$1,inst_28694);
} else {
if((state_val_28697 === (12))){
var inst_28682 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28717_28747 = state_28696__$1;
(statearr_28717_28747[(2)] = inst_28682);

(statearr_28717_28747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (2))){
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28696__$1,(4),in$);
} else {
if((state_val_28697 === (23))){
var inst_28690 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28718_28748 = state_28696__$1;
(statearr_28718_28748[(2)] = inst_28690);

(statearr_28718_28748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (19))){
var inst_28677 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28719_28749 = state_28696__$1;
(statearr_28719_28749[(2)] = inst_28677);

(statearr_28719_28749[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (11))){
var inst_28648 = (state_28696[(8)]);
var inst_28662 = (state_28696[(7)]);
var inst_28662__$1 = cljs.core.seq.call(null,inst_28648);
var state_28696__$1 = (function (){var statearr_28720 = state_28696;
(statearr_28720[(7)] = inst_28662__$1);

return statearr_28720;
})();
if(inst_28662__$1){
var statearr_28721_28750 = state_28696__$1;
(statearr_28721_28750[(1)] = (14));

} else {
var statearr_28722_28751 = state_28696__$1;
(statearr_28722_28751[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (9))){
var inst_28684 = (state_28696[(2)]);
var inst_28685 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28696__$1 = (function (){var statearr_28723 = state_28696;
(statearr_28723[(15)] = inst_28684);

return statearr_28723;
})();
if(cljs.core.truth_(inst_28685)){
var statearr_28724_28752 = state_28696__$1;
(statearr_28724_28752[(1)] = (21));

} else {
var statearr_28725_28753 = state_28696__$1;
(statearr_28725_28753[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (5))){
var inst_28640 = cljs.core.async.close_BANG_.call(null,out);
var state_28696__$1 = state_28696;
var statearr_28726_28754 = state_28696__$1;
(statearr_28726_28754[(2)] = inst_28640);

(statearr_28726_28754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (14))){
var inst_28662 = (state_28696[(7)]);
var inst_28664 = cljs.core.chunked_seq_QMARK_.call(null,inst_28662);
var state_28696__$1 = state_28696;
if(inst_28664){
var statearr_28727_28755 = state_28696__$1;
(statearr_28727_28755[(1)] = (17));

} else {
var statearr_28728_28756 = state_28696__$1;
(statearr_28728_28756[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (16))){
var inst_28680 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28729_28757 = state_28696__$1;
(statearr_28729_28757[(2)] = inst_28680);

(statearr_28729_28757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (10))){
var inst_28649 = (state_28696[(11)]);
var inst_28651 = (state_28696[(12)]);
var inst_28656 = cljs.core._nth.call(null,inst_28649,inst_28651);
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28696__$1,(13),out,inst_28656);
} else {
if((state_val_28697 === (18))){
var inst_28662 = (state_28696[(7)]);
var inst_28671 = cljs.core.first.call(null,inst_28662);
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28696__$1,(20),out,inst_28671);
} else {
if((state_val_28697 === (8))){
var inst_28650 = (state_28696[(10)]);
var inst_28651 = (state_28696[(12)]);
var inst_28653 = (inst_28651 < inst_28650);
var inst_28654 = inst_28653;
var state_28696__$1 = state_28696;
if(cljs.core.truth_(inst_28654)){
var statearr_28730_28758 = state_28696__$1;
(statearr_28730_28758[(1)] = (10));

} else {
var statearr_28731_28759 = state_28696__$1;
(statearr_28731_28759[(1)] = (11));

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
});})(c__27080__auto__))
;
return ((function (switch__26990__auto__,c__27080__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26991__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26991__auto____0 = (function (){
var statearr_28732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28732[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26991__auto__);

(statearr_28732[(1)] = (1));

return statearr_28732;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26991__auto____1 = (function (state_28696){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_28696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e28733){if((e28733 instanceof Object)){
var ex__26994__auto__ = e28733;
var statearr_28734_28760 = state_28696;
(statearr_28734_28760[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28761 = state_28696;
state_28696 = G__28761;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26991__auto__ = function(state_28696){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26991__auto____1.call(this,state_28696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26991__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26991__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto__))
})();
var state__27082__auto__ = (function (){var statearr_28735 = f__27081__auto__.call(null);
(statearr_28735[(6)] = c__27080__auto__);

return statearr_28735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto__))
);

return c__27080__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28763 = arguments.length;
switch (G__28763) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28766 = arguments.length;
switch (G__28766) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28769 = arguments.length;
switch (G__28769) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27080__auto___28816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___28816,out){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___28816,out){
return (function (state_28793){
var state_val_28794 = (state_28793[(1)]);
if((state_val_28794 === (7))){
var inst_28788 = (state_28793[(2)]);
var state_28793__$1 = state_28793;
var statearr_28795_28817 = state_28793__$1;
(statearr_28795_28817[(2)] = inst_28788);

(statearr_28795_28817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (1))){
var inst_28770 = null;
var state_28793__$1 = (function (){var statearr_28796 = state_28793;
(statearr_28796[(7)] = inst_28770);

return statearr_28796;
})();
var statearr_28797_28818 = state_28793__$1;
(statearr_28797_28818[(2)] = null);

(statearr_28797_28818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (4))){
var inst_28773 = (state_28793[(8)]);
var inst_28773__$1 = (state_28793[(2)]);
var inst_28774 = (inst_28773__$1 == null);
var inst_28775 = cljs.core.not.call(null,inst_28774);
var state_28793__$1 = (function (){var statearr_28798 = state_28793;
(statearr_28798[(8)] = inst_28773__$1);

return statearr_28798;
})();
if(inst_28775){
var statearr_28799_28819 = state_28793__$1;
(statearr_28799_28819[(1)] = (5));

} else {
var statearr_28800_28820 = state_28793__$1;
(statearr_28800_28820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (6))){
var state_28793__$1 = state_28793;
var statearr_28801_28821 = state_28793__$1;
(statearr_28801_28821[(2)] = null);

(statearr_28801_28821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (3))){
var inst_28790 = (state_28793[(2)]);
var inst_28791 = cljs.core.async.close_BANG_.call(null,out);
var state_28793__$1 = (function (){var statearr_28802 = state_28793;
(statearr_28802[(9)] = inst_28790);

return statearr_28802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28793__$1,inst_28791);
} else {
if((state_val_28794 === (2))){
var state_28793__$1 = state_28793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28793__$1,(4),ch);
} else {
if((state_val_28794 === (11))){
var inst_28773 = (state_28793[(8)]);
var inst_28782 = (state_28793[(2)]);
var inst_28770 = inst_28773;
var state_28793__$1 = (function (){var statearr_28803 = state_28793;
(statearr_28803[(7)] = inst_28770);

(statearr_28803[(10)] = inst_28782);

return statearr_28803;
})();
var statearr_28804_28822 = state_28793__$1;
(statearr_28804_28822[(2)] = null);

(statearr_28804_28822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (9))){
var inst_28773 = (state_28793[(8)]);
var state_28793__$1 = state_28793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28793__$1,(11),out,inst_28773);
} else {
if((state_val_28794 === (5))){
var inst_28773 = (state_28793[(8)]);
var inst_28770 = (state_28793[(7)]);
var inst_28777 = cljs.core._EQ_.call(null,inst_28773,inst_28770);
var state_28793__$1 = state_28793;
if(inst_28777){
var statearr_28806_28823 = state_28793__$1;
(statearr_28806_28823[(1)] = (8));

} else {
var statearr_28807_28824 = state_28793__$1;
(statearr_28807_28824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (10))){
var inst_28785 = (state_28793[(2)]);
var state_28793__$1 = state_28793;
var statearr_28808_28825 = state_28793__$1;
(statearr_28808_28825[(2)] = inst_28785);

(statearr_28808_28825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (8))){
var inst_28770 = (state_28793[(7)]);
var tmp28805 = inst_28770;
var inst_28770__$1 = tmp28805;
var state_28793__$1 = (function (){var statearr_28809 = state_28793;
(statearr_28809[(7)] = inst_28770__$1);

return statearr_28809;
})();
var statearr_28810_28826 = state_28793__$1;
(statearr_28810_28826[(2)] = null);

(statearr_28810_28826[(1)] = (2));


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
});})(c__27080__auto___28816,out))
;
return ((function (switch__26990__auto__,c__27080__auto___28816,out){
return (function() {
var cljs$core$async$state_machine__26991__auto__ = null;
var cljs$core$async$state_machine__26991__auto____0 = (function (){
var statearr_28811 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28811[(0)] = cljs$core$async$state_machine__26991__auto__);

(statearr_28811[(1)] = (1));

return statearr_28811;
});
var cljs$core$async$state_machine__26991__auto____1 = (function (state_28793){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_28793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e28812){if((e28812 instanceof Object)){
var ex__26994__auto__ = e28812;
var statearr_28813_28827 = state_28793;
(statearr_28813_28827[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28828 = state_28793;
state_28793 = G__28828;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$state_machine__26991__auto__ = function(state_28793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26991__auto____1.call(this,state_28793);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26991__auto____0;
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26991__auto____1;
return cljs$core$async$state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___28816,out))
})();
var state__27082__auto__ = (function (){var statearr_28814 = f__27081__auto__.call(null);
(statearr_28814[(6)] = c__27080__auto___28816);

return statearr_28814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___28816,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28830 = arguments.length;
switch (G__28830) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27080__auto___28896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___28896,out){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___28896,out){
return (function (state_28868){
var state_val_28869 = (state_28868[(1)]);
if((state_val_28869 === (7))){
var inst_28864 = (state_28868[(2)]);
var state_28868__$1 = state_28868;
var statearr_28870_28897 = state_28868__$1;
(statearr_28870_28897[(2)] = inst_28864);

(statearr_28870_28897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (1))){
var inst_28831 = (new Array(n));
var inst_28832 = inst_28831;
var inst_28833 = (0);
var state_28868__$1 = (function (){var statearr_28871 = state_28868;
(statearr_28871[(7)] = inst_28832);

(statearr_28871[(8)] = inst_28833);

return statearr_28871;
})();
var statearr_28872_28898 = state_28868__$1;
(statearr_28872_28898[(2)] = null);

(statearr_28872_28898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (4))){
var inst_28836 = (state_28868[(9)]);
var inst_28836__$1 = (state_28868[(2)]);
var inst_28837 = (inst_28836__$1 == null);
var inst_28838 = cljs.core.not.call(null,inst_28837);
var state_28868__$1 = (function (){var statearr_28873 = state_28868;
(statearr_28873[(9)] = inst_28836__$1);

return statearr_28873;
})();
if(inst_28838){
var statearr_28874_28899 = state_28868__$1;
(statearr_28874_28899[(1)] = (5));

} else {
var statearr_28875_28900 = state_28868__$1;
(statearr_28875_28900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (15))){
var inst_28858 = (state_28868[(2)]);
var state_28868__$1 = state_28868;
var statearr_28876_28901 = state_28868__$1;
(statearr_28876_28901[(2)] = inst_28858);

(statearr_28876_28901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (13))){
var state_28868__$1 = state_28868;
var statearr_28877_28902 = state_28868__$1;
(statearr_28877_28902[(2)] = null);

(statearr_28877_28902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (6))){
var inst_28833 = (state_28868[(8)]);
var inst_28854 = (inst_28833 > (0));
var state_28868__$1 = state_28868;
if(cljs.core.truth_(inst_28854)){
var statearr_28878_28903 = state_28868__$1;
(statearr_28878_28903[(1)] = (12));

} else {
var statearr_28879_28904 = state_28868__$1;
(statearr_28879_28904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (3))){
var inst_28866 = (state_28868[(2)]);
var state_28868__$1 = state_28868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28868__$1,inst_28866);
} else {
if((state_val_28869 === (12))){
var inst_28832 = (state_28868[(7)]);
var inst_28856 = cljs.core.vec.call(null,inst_28832);
var state_28868__$1 = state_28868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28868__$1,(15),out,inst_28856);
} else {
if((state_val_28869 === (2))){
var state_28868__$1 = state_28868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28868__$1,(4),ch);
} else {
if((state_val_28869 === (11))){
var inst_28848 = (state_28868[(2)]);
var inst_28849 = (new Array(n));
var inst_28832 = inst_28849;
var inst_28833 = (0);
var state_28868__$1 = (function (){var statearr_28880 = state_28868;
(statearr_28880[(10)] = inst_28848);

(statearr_28880[(7)] = inst_28832);

(statearr_28880[(8)] = inst_28833);

return statearr_28880;
})();
var statearr_28881_28905 = state_28868__$1;
(statearr_28881_28905[(2)] = null);

(statearr_28881_28905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (9))){
var inst_28832 = (state_28868[(7)]);
var inst_28846 = cljs.core.vec.call(null,inst_28832);
var state_28868__$1 = state_28868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28868__$1,(11),out,inst_28846);
} else {
if((state_val_28869 === (5))){
var inst_28836 = (state_28868[(9)]);
var inst_28841 = (state_28868[(11)]);
var inst_28832 = (state_28868[(7)]);
var inst_28833 = (state_28868[(8)]);
var inst_28840 = (inst_28832[inst_28833] = inst_28836);
var inst_28841__$1 = (inst_28833 + (1));
var inst_28842 = (inst_28841__$1 < n);
var state_28868__$1 = (function (){var statearr_28882 = state_28868;
(statearr_28882[(12)] = inst_28840);

(statearr_28882[(11)] = inst_28841__$1);

return statearr_28882;
})();
if(cljs.core.truth_(inst_28842)){
var statearr_28883_28906 = state_28868__$1;
(statearr_28883_28906[(1)] = (8));

} else {
var statearr_28884_28907 = state_28868__$1;
(statearr_28884_28907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (14))){
var inst_28861 = (state_28868[(2)]);
var inst_28862 = cljs.core.async.close_BANG_.call(null,out);
var state_28868__$1 = (function (){var statearr_28886 = state_28868;
(statearr_28886[(13)] = inst_28861);

return statearr_28886;
})();
var statearr_28887_28908 = state_28868__$1;
(statearr_28887_28908[(2)] = inst_28862);

(statearr_28887_28908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (10))){
var inst_28852 = (state_28868[(2)]);
var state_28868__$1 = state_28868;
var statearr_28888_28909 = state_28868__$1;
(statearr_28888_28909[(2)] = inst_28852);

(statearr_28888_28909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (8))){
var inst_28841 = (state_28868[(11)]);
var inst_28832 = (state_28868[(7)]);
var tmp28885 = inst_28832;
var inst_28832__$1 = tmp28885;
var inst_28833 = inst_28841;
var state_28868__$1 = (function (){var statearr_28889 = state_28868;
(statearr_28889[(7)] = inst_28832__$1);

(statearr_28889[(8)] = inst_28833);

return statearr_28889;
})();
var statearr_28890_28910 = state_28868__$1;
(statearr_28890_28910[(2)] = null);

(statearr_28890_28910[(1)] = (2));


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
});})(c__27080__auto___28896,out))
;
return ((function (switch__26990__auto__,c__27080__auto___28896,out){
return (function() {
var cljs$core$async$state_machine__26991__auto__ = null;
var cljs$core$async$state_machine__26991__auto____0 = (function (){
var statearr_28891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28891[(0)] = cljs$core$async$state_machine__26991__auto__);

(statearr_28891[(1)] = (1));

return statearr_28891;
});
var cljs$core$async$state_machine__26991__auto____1 = (function (state_28868){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_28868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e28892){if((e28892 instanceof Object)){
var ex__26994__auto__ = e28892;
var statearr_28893_28911 = state_28868;
(statearr_28893_28911[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28912 = state_28868;
state_28868 = G__28912;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$state_machine__26991__auto__ = function(state_28868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26991__auto____1.call(this,state_28868);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26991__auto____0;
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26991__auto____1;
return cljs$core$async$state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___28896,out))
})();
var state__27082__auto__ = (function (){var statearr_28894 = f__27081__auto__.call(null);
(statearr_28894[(6)] = c__27080__auto___28896);

return statearr_28894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___28896,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28914 = arguments.length;
switch (G__28914) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27080__auto___28984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27080__auto___28984,out){
return (function (){
var f__27081__auto__ = (function (){var switch__26990__auto__ = ((function (c__27080__auto___28984,out){
return (function (state_28956){
var state_val_28957 = (state_28956[(1)]);
if((state_val_28957 === (7))){
var inst_28952 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28958_28985 = state_28956__$1;
(statearr_28958_28985[(2)] = inst_28952);

(statearr_28958_28985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (1))){
var inst_28915 = [];
var inst_28916 = inst_28915;
var inst_28917 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28956__$1 = (function (){var statearr_28959 = state_28956;
(statearr_28959[(7)] = inst_28916);

(statearr_28959[(8)] = inst_28917);

return statearr_28959;
})();
var statearr_28960_28986 = state_28956__$1;
(statearr_28960_28986[(2)] = null);

(statearr_28960_28986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (4))){
var inst_28920 = (state_28956[(9)]);
var inst_28920__$1 = (state_28956[(2)]);
var inst_28921 = (inst_28920__$1 == null);
var inst_28922 = cljs.core.not.call(null,inst_28921);
var state_28956__$1 = (function (){var statearr_28961 = state_28956;
(statearr_28961[(9)] = inst_28920__$1);

return statearr_28961;
})();
if(inst_28922){
var statearr_28962_28987 = state_28956__$1;
(statearr_28962_28987[(1)] = (5));

} else {
var statearr_28963_28988 = state_28956__$1;
(statearr_28963_28988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (15))){
var inst_28946 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28964_28989 = state_28956__$1;
(statearr_28964_28989[(2)] = inst_28946);

(statearr_28964_28989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (13))){
var state_28956__$1 = state_28956;
var statearr_28965_28990 = state_28956__$1;
(statearr_28965_28990[(2)] = null);

(statearr_28965_28990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (6))){
var inst_28916 = (state_28956[(7)]);
var inst_28941 = inst_28916.length;
var inst_28942 = (inst_28941 > (0));
var state_28956__$1 = state_28956;
if(cljs.core.truth_(inst_28942)){
var statearr_28966_28991 = state_28956__$1;
(statearr_28966_28991[(1)] = (12));

} else {
var statearr_28967_28992 = state_28956__$1;
(statearr_28967_28992[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (3))){
var inst_28954 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28956__$1,inst_28954);
} else {
if((state_val_28957 === (12))){
var inst_28916 = (state_28956[(7)]);
var inst_28944 = cljs.core.vec.call(null,inst_28916);
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28956__$1,(15),out,inst_28944);
} else {
if((state_val_28957 === (2))){
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28956__$1,(4),ch);
} else {
if((state_val_28957 === (11))){
var inst_28920 = (state_28956[(9)]);
var inst_28924 = (state_28956[(10)]);
var inst_28934 = (state_28956[(2)]);
var inst_28935 = [];
var inst_28936 = inst_28935.push(inst_28920);
var inst_28916 = inst_28935;
var inst_28917 = inst_28924;
var state_28956__$1 = (function (){var statearr_28968 = state_28956;
(statearr_28968[(11)] = inst_28934);

(statearr_28968[(12)] = inst_28936);

(statearr_28968[(7)] = inst_28916);

(statearr_28968[(8)] = inst_28917);

return statearr_28968;
})();
var statearr_28969_28993 = state_28956__$1;
(statearr_28969_28993[(2)] = null);

(statearr_28969_28993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (9))){
var inst_28916 = (state_28956[(7)]);
var inst_28932 = cljs.core.vec.call(null,inst_28916);
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28956__$1,(11),out,inst_28932);
} else {
if((state_val_28957 === (5))){
var inst_28920 = (state_28956[(9)]);
var inst_28924 = (state_28956[(10)]);
var inst_28917 = (state_28956[(8)]);
var inst_28924__$1 = f.call(null,inst_28920);
var inst_28925 = cljs.core._EQ_.call(null,inst_28924__$1,inst_28917);
var inst_28926 = cljs.core.keyword_identical_QMARK_.call(null,inst_28917,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28927 = ((inst_28925) || (inst_28926));
var state_28956__$1 = (function (){var statearr_28970 = state_28956;
(statearr_28970[(10)] = inst_28924__$1);

return statearr_28970;
})();
if(cljs.core.truth_(inst_28927)){
var statearr_28971_28994 = state_28956__$1;
(statearr_28971_28994[(1)] = (8));

} else {
var statearr_28972_28995 = state_28956__$1;
(statearr_28972_28995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (14))){
var inst_28949 = (state_28956[(2)]);
var inst_28950 = cljs.core.async.close_BANG_.call(null,out);
var state_28956__$1 = (function (){var statearr_28974 = state_28956;
(statearr_28974[(13)] = inst_28949);

return statearr_28974;
})();
var statearr_28975_28996 = state_28956__$1;
(statearr_28975_28996[(2)] = inst_28950);

(statearr_28975_28996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (10))){
var inst_28939 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28976_28997 = state_28956__$1;
(statearr_28976_28997[(2)] = inst_28939);

(statearr_28976_28997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (8))){
var inst_28920 = (state_28956[(9)]);
var inst_28924 = (state_28956[(10)]);
var inst_28916 = (state_28956[(7)]);
var inst_28929 = inst_28916.push(inst_28920);
var tmp28973 = inst_28916;
var inst_28916__$1 = tmp28973;
var inst_28917 = inst_28924;
var state_28956__$1 = (function (){var statearr_28977 = state_28956;
(statearr_28977[(14)] = inst_28929);

(statearr_28977[(7)] = inst_28916__$1);

(statearr_28977[(8)] = inst_28917);

return statearr_28977;
})();
var statearr_28978_28998 = state_28956__$1;
(statearr_28978_28998[(2)] = null);

(statearr_28978_28998[(1)] = (2));


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
});})(c__27080__auto___28984,out))
;
return ((function (switch__26990__auto__,c__27080__auto___28984,out){
return (function() {
var cljs$core$async$state_machine__26991__auto__ = null;
var cljs$core$async$state_machine__26991__auto____0 = (function (){
var statearr_28979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28979[(0)] = cljs$core$async$state_machine__26991__auto__);

(statearr_28979[(1)] = (1));

return statearr_28979;
});
var cljs$core$async$state_machine__26991__auto____1 = (function (state_28956){
while(true){
var ret_value__26992__auto__ = (function (){try{while(true){
var result__26993__auto__ = switch__26990__auto__.call(null,state_28956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26993__auto__;
}
break;
}
}catch (e28980){if((e28980 instanceof Object)){
var ex__26994__auto__ = e28980;
var statearr_28981_28999 = state_28956;
(statearr_28981_28999[(5)] = ex__26994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29000 = state_28956;
state_28956 = G__29000;
continue;
} else {
return ret_value__26992__auto__;
}
break;
}
});
cljs$core$async$state_machine__26991__auto__ = function(state_28956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26991__auto____1.call(this,state_28956);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26991__auto____0;
cljs$core$async$state_machine__26991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26991__auto____1;
return cljs$core$async$state_machine__26991__auto__;
})()
;})(switch__26990__auto__,c__27080__auto___28984,out))
})();
var state__27082__auto__ = (function (){var statearr_28982 = f__27081__auto__.call(null);
(statearr_28982[(6)] = c__27080__auto___28984);

return statearr_28982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27082__auto__);
});})(c__27080__auto___28984,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1547484321597
