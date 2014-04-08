montageDefine("abac2a8","generic-collection",{dependencies:["./shim-array"],factory:function(e,t,n){"use strict";function i(){throw Error("Can't construct. GenericCollection is a mixin.")}n.exports=i,i.prototype.addEach=function(e){if(e&&Object(e)===e)if("function"==typeof e.forEach)e.forEach(this.add,this);else if("number"==typeof e.length)for(var t=0;e.length>t;t++)this.add(e[t],t);else Object.keys(e).forEach(function(t){this.add(e[t],t)},this);return this},i.prototype.deleteEach=function(e,t){return e.forEach(function(e){this["delete"](e,t)},this),this},i.prototype.forEach=function(e){var t=arguments[1];return this.reduce(function(n,i,r,a,s){e.call(t,i,r,a,s)},void 0)},i.prototype.map=function(e){var t=arguments[1],n=[];return this.reduce(function(i,r,a,s,o){n.push(e.call(t,r,a,s,o))},void 0),n},i.prototype.enumerate=function(e){null==e&&(e=0);var t=[];return this.reduce(function(n,i){t.push([e++,i])},void 0),t},i.prototype.group=function(e,t,n){n=n||Object.equals;var i=[],r=[];return this.forEach(function(a,s,o){var l,s=e.call(t,a,s,o),c=r.indexOf(s,n);-1===c?(l=[],i.push([s,l]),r.push(s)):l=i[c][1],l.push(a)}),i},i.prototype.toArray=function(){return this.map(Function.identity)},i.prototype.toObject=function(){var e={};return this.reduce(function(t,n,i){e[i]=n},void 0),e},i.prototype.filter=function(e){var t=arguments[1],n=this.constructClone();return this.reduce(function(i,r,a,s,o){e.call(t,r,a,s,o)&&n.add(r,a)},void 0),n},i.prototype.every=function(e){var t=arguments[1];return this.reduce(function(n,i,r,a,s){return n&&e.call(t,i,r,a,s)},!0)},i.prototype.some=function(e){var t=arguments[1];return this.reduce(function(n,i,r,a,s){return n||e.call(t,i,r,a,s)},!1)},i.prototype.all=function(){return this.every(Boolean)},i.prototype.any=function(){return this.some(Boolean)},i.prototype.min=function(e){e=e||this.contentCompare||Object.compare;var t=!0;return this.reduce(function(n,i){return t?(t=!1,i):0>e(i,n)?i:n},void 0)},i.prototype.max=function(e){e=e||this.contentCompare||Object.compare;var t=!0;return this.reduce(function(n,i){return t?(t=!1,i):e(i,n)>0?i:n},void 0)},i.prototype.sum=function(e){return e=void 0===e?0:e,this.reduce(function(e,t){return e+t},e)},i.prototype.average=function(e){var t=void 0===e?0:e,n=void 0===e?0:e;return this.reduce(function(e,i){t+=i,n+=1},void 0),t/n},i.prototype.concat=function(){for(var e=this.constructClone(this),t=0;arguments.length>t;t++)e.addEach(arguments[t]);return e},i.prototype.flatten=function(){var e=this;return this.reduce(function(t,n){return n.forEach(function(e){this.push(e)},t,e),t},[])},i.prototype.zip=function(){var e=Array.prototype.slice.call(arguments);return e.unshift(this),Array.unzip(e)},i.prototype.join=function(e){return this.reduce(function(t,n){return t+e+n})},i.prototype.sorted=function(e,t,n){return e=e||this.contentCompare||Object.compare,e.by?(t=e.by,e=e.compare||this.contentCompare||Object.compare):t=t||Function.identity,void 0===n&&(n=1),this.map(function(e){return{by:t(e),value:e}}).sort(function(t,i){return e(t.by,i.by)*n}).map(function(e){return e.value})},i.prototype.reversed=function(){return this.constructClone(this).reverse()},i.prototype.clone=function(e,t){if(void 0===e)e=1/0;else if(0===e)return this;var n=this.constructClone();return this.forEach(function(i,r){n.add(Object.clone(i,e-1,t),r)},this),n},i.prototype.only=function(){return 1===this.length?this.one():void 0},i.prototype.iterator=function(){return this.iterate.apply(this,arguments)},e("./shim-array")}});