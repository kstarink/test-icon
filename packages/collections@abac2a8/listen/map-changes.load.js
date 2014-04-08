montageDefine("abac2a8","listen/map-changes",{dependencies:["weak-map","../list","../dict"],factory:function(e,t,n){"use strict";function i(){throw Error("Can't construct. MapChanges is a mixin.")}var r=e("weak-map"),a=e("../list");n.exports=i,Object.prototype.hasOwnProperty;var s=new r;i.prototype.getAllMapChangeDescriptors=function(){var t=e("../dict");return s.has(this)||s.set(this,t()),s.get(this)},i.prototype.getMapChangeDescriptor=function(e){var t=this.getAllMapChangeDescriptors();return e=e||"",t.has(e)||t.set(e,{willChangeListeners:new a,changeListeners:new a}),t.get(e)},i.prototype.addMapChangeListener=function(e,t,n){!this.isObservable&&this.makeObservable&&this.makeObservable();var i,r=this.getMapChangeDescriptor(t);i=n?r.willChangeListeners:r.changeListeners,i.push(e),Object.defineProperty(this,"dispatchesMapChanges",{value:!0,writable:!0,configurable:!0,enumerable:!1});var a=this;return function(){a&&(a.removeMapChangeListener(e,t,n),a=null)}},i.prototype.removeMapChangeListener=function(e,t,n){var i,r=this.getMapChangeDescriptor(t);i=n?r.willChangeListeners:r.changeListeners;var a=i.findLast(e);if(!a)throw Error("Can't remove map change listener: does not exist: token "+JSON.stringify(t));a["delete"]()},i.prototype.dispatchMapChange=function(e,t,n){var i=this.getAllMapChangeDescriptors(),r="Map"+(n?"WillChange":"Change");i.forEach(function(i,a){if(!i.isActive){i.isActive=!0;var s;s=n?i.willChangeListeners:i.changeListeners;var o="handle"+(a.slice(0,1).toUpperCase()+a.slice(1))+r;try{s.forEach(function(n){if(n[o])n[o](t,e,this);else{if(!n.call)throw Error("Handler "+n+" has no method "+o+" and is not callable");n.call(n,t,e,this)}},this)}finally{i.isActive=!1}}},this)},i.prototype.addBeforeMapChangeListener=function(e,t){return this.addMapChangeListener(e,t,!0)},i.prototype.removeBeforeMapChangeListener=function(e,t){return this.removeMapChangeListener(e,t,!0)},i.prototype.dispatchBeforeMapChange=function(e,t){return this.dispatchMapChange(e,t,!0)}}});