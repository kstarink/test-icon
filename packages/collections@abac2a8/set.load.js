montageDefine("abac2a8","set",{dependencies:["./shim","./list","./fast-set","./generic-collection","./generic-set","./listen/property-changes","./listen/range-changes","set"],factory:function(e,t,n){"use strict";function i(e,t,n,r){return this instanceof i?(t=t||Object.equals,n=n||Object.hash,r=r||Function.noop,this.contentEquals=t,this.contentHash=n,this.getDefault=r,this.order=new this.Order(void 0,t),this.store=new this.Store(void 0,function(e,n){return t(e.value,n.value)},function(e){return n(e.value)}),this.length=0,this.addEach(e),void 0):new i(e,t,n,r)}e("./shim");var r=e("./list"),a=e("./fast-set"),s=e("./generic-collection"),o=e("./generic-set"),l=e("./listen/property-changes"),c=e("./listen/range-changes");n.exports=i,i.Set=i,Object.addEach(i.prototype,s.prototype),Object.addEach(i.prototype,o.prototype),Object.addEach(i.prototype,l.prototype),Object.addEach(i.prototype,c.prototype),i.prototype.Order=r,i.prototype.Store=a,i.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentHash,this.getDefault)},i.prototype.has=function(e){var t=new this.order.Node(e);return this.store.has(t)},i.prototype.get=function(e,t){if(t)throw Error("Set#get does not support second argument: equals");var n=new this.order.Node(e);return n=this.store.get(n),n?n.value:this.getDefault(e)},i.prototype.add=function(e){var t=new this.order.Node(e);if(!this.store.has(t)){var n=this.length;return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([e],[],n),this.order.add(e),t=this.order.head.prev,this.store.add(t),this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],n),!0}return!1},i.prototype["delete"]=function(e,t){if(t)throw Error("Set#delete does not support second argument: equals");var n=new this.order.Node(e);if(this.store.has(n)){var n=this.store.get(n);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[e],n.index),this.store["delete"](n),this.order.splice(n,1),this.length--,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[e],n.index),!0}return!1},i.prototype.pop=function(){if(this.length){var e=this.order.head.prev.value;return this["delete"](e),e}},i.prototype.shift=function(){if(this.length){var e=this.order.head.next.value;return this["delete"](e),e}},i.prototype.one=function(){return this.length>0?this.store.one().value:void 0},i.prototype.clear=function(){var e;this.dispatchesRangeChanges&&(e=this.toArray(),this.dispatchBeforeRangeChange([],e,0)),this.store.clear(),this.order.clear(),this.length=0,this.dispatchesRangeChanges&&this.dispatchRangeChange([],e,0)},i.prototype.reduce=function(e,t){var n=arguments[2],i=this.order,r=0;return i.reduce(function(t,i){return e.call(n,t,i,r++,this)},t,this)},i.prototype.reduceRight=function(e,t){var n=arguments[2],i=this.order,r=this.length-1;return i.reduceRight(function(t,i){return e.call(n,t,i,r--,this)},t,this)},i.prototype.iterate=function(){return this.order.iterate()},i.prototype.log=function(){var e=this.store;return e.log.apply(e,arguments)},i.prototype.makeObservable=function(){this.order.makeObservable()}}});