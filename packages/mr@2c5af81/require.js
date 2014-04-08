(function(e){if("undefined"!=typeof bootstrap)"undefined"!=typeof window?bootstrap("require",function(t,n){var i=t("promise"),r=t("mini-url");e(n,i,r),t("require/browser")}):bootstrap("require",function(t,n){var i=t("promise").Promise,r=t("mini-url");e(n,i,r)});else{if("undefined"==typeof process)throw Error("Can't support require on this platform");var t=require("q"),n=require("url");e(exports,t,n),require("./node")}})(function(e,t,n){function i(t,i){if(i=i||{},"string"==typeof t&&(t={location:t}),t.main&&(t.location=i.mainPackageLocation),t.name&&i.registry&&i.registry[t.name]&&(t.location=i.registry[t.name]),!t.location&&i.packagesDirectory&&t.name&&(t.location=n.resolve(i.packagesDirectory,t.name+"/")),!t.location)return t;if(/\/$/.test(t.location)||(t.location+="/"),!e.isAbsolute(t.location)){if(!i.location)throw Error("Dependency locations must be fully qualified: "+JSON.stringify(t));t.location=n.resolve(i.location,t.location)}return t.name&&(i.registry[t.name]=t.location),t}function r(t,r,a){/\/$/.test(t)||(t+="/");var o=Object.create(a);o.name=r.name,o.location=t||e.getLocation(),o.packageDescription=r,o.useScriptInjection=r.useScriptInjection,void 0!==r.production&&(o.production=r.production);var c=o.modules=o.modules||{},u=o.registry;void 0===o.name||u[o.name]||(u[o.name]=o.location);var h=r.overlay||{};"string"==typeof r.browser?h.browser={redirects:{"":r.browser}}:"object"==typeof r.browser&&(h.browser={redirects:r.browser}),o.overlays=o.overlays||e.overlays,o.overlays.forEach(function(e){if(h[e]){var t=h[e];for(var n in t)r[n]=t[n]}}),delete r.overlay,o.packagesDirectory=n.resolve(t,"node_modules/"),void 0!==r.main&&(c[""]={id:"",redirect:l(s(r.main,"")),location:o.location});var d=r.redirects;void 0!==d&&Object.keys(d).forEach(function(e){c[e]={id:e,redirect:l(s(d[e],e)),location:n.resolve(t,e)}});var p=r.mappings||{};return[r.dependencies,o.production?null:r.devDependencies].forEach(function(e){e&&Object.keys(e).forEach(function(t){p[t]||(p[t]={name:t,version:e[t]})})}),Object.keys(p).forEach(function(e){p[e]=i(p[e],o,e)}),o.mappings=p,o}function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function s(e,t){e+="";var n=e.split("/"),i=[];if(n.length&&"."===n[0]||".."===n[0]){var r=t.split("/");r.pop(),n.unshift.apply(n,r)}for(var a=0,s=n.length;s>a;a++){var o=n[a];""===o||"."===o||(".."===o?i.length&&i.pop():i.push(o))}return i.join("/")}if(!this)throw Error("Require does not work in strict mode.");e.makeRequire=function(r){function o(e){var t=e.toLowerCase();return a(f,t)||(f[t]={id:e,display:(r.name||r.location)+"#"+e,require:m}),f[t]}function u(e,t){var i=o(e);i.exports=t,i.location=n.resolve(r.location,e),i.directory=n.resolve(i.location,"./"),i.injected=!0,delete i.redirect,delete i.mappingRedirect}function h(e,n,i){var r=o(e);return i=i||{},a(i,e)?void 0:(i[e]=!0,v(e,n).then(function(){return t.all(r.dependencies.map(function(t){t=s(t,e);var n=o(t),r=n.dependees=n.dependees||{};return r[e]=!0,h(t,e,i)}))},function(e){r.error=e}))}function d(e,t){var i=o(e);if(i.id!==e)throw Error("Can't require module "+JSON.stringify(i.id)+" by alternate spelling "+JSON.stringify(e));if(i.error){var r=Error("Can't require module "+JSON.stringify(i.id)+" via "+JSON.stringify(t)+" because "+i.error.message);throw r.cause=i.error,r}if(void 0!==i.redirect)return d(i.redirect,t);if(void 0!==i.mappingRedirect)return i.mappingRequire(i.mappingRedirect,t);if(void 0!==i.exports)return i.exports;if(void 0===i.factory)throw Error("Can't require module "+JSON.stringify(e)+" via "+JSON.stringify(t));i.directory=n.resolve(i.location,"./"),i.exports={};var a;try{a=i.factory.call(void 0,g(e),i.exports,i)}catch(s){throw delete i.exports,s}return void 0!==a&&(i.exports=a),i.exports}function p(e,t,n){var i=r.location;if(t.location===i)return e;var s=!!n;if(n=n||{},a(n,i))return null;n[i]=!0;for(var o in r.mappings){var l=r.mappings[o];if(i=l.location,r.hasPackage(i)){var c=r.getPackage(i),u=c.identify(e,t,n);if(null!==u)return""===u?o:o+"/"+u}}if(s)return null;throw Error("Can't identify "+e+" from "+t.location)}function g(t){var n=function(e){var n=s(e,t);return d(n,t)};return n.async=function(e){var i=s(e,t);return o(e),h(i,t).then(function(){return n(i)})},n.resolve=function(e){return l(s(e,t))},n.getModule=o,n.getModuleDescriptor=o,n.load=v,n.deepLoad=h,n.loadPackage=function(t,n){return n?e.loadPackage(t,n):r.loadPackage(t,r)},n.hasPackage=function(e){return r.hasPackage(e)},n.getPackage=function(e){return r.getPackage(e)},n.isMainPackage=function(){return n.location===r.mainPackageLocation},n.injectPackageDescription=function(t,n){e.injectPackageDescription(t,n,r)},n.injectPackageDescriptionLocation=function(t,n){e.injectPackageDescriptionLocation(t,n,r)},n.injectMapping=function(e,t){e=i(e,r,t),t=t||e.name,r.mappings[t]=e},n.injectDependency=function(e){n.injectMapping({name:e},e)},n.identify=p,n.inject=u,r.exposedConfigs.forEach(function(e){n[e]=r[e]}),n.config=r,n.read=r.read,n}var m;r=r||{},r.location=n.resolve(r.location||e.getLocation(),"./"),r.paths=r.paths||[r.location],r.mappings=r.mappings||{},r.exposedConfigs=r.exposedConfigs||e.exposedConfigs,r.moduleTypes=r.moduleTypes||[],r.makeLoader=r.makeLoader||e.makeLoader,r.load=r.load||r.makeLoader(r),r.makeCompiler=r.makeCompiler||e.makeCompiler,r.compile=r.compile||r.makeCompiler(r),r.parseDependencies=r.parseDependencies||e.parseDependencies,r.read=r.read||e.read;var f=r.modules=r.modules||{},v=c(function(e){var n=o(e);return t.fcall(function(){return void 0===n.factory&&void 0===n.exports&&void 0===n.redirect?t.fcall(r.load,e,n):void 0}).then(function(){r.compile(n);var e=n.dependencies=n.dependencies||[];void 0!==n.redirect&&e.push(n.redirect),void 0!==n.extraDependencies&&Array.prototype.push.apply(n.dependencies,n.extraDependencies)})});return m=g("")},e.injectPackageDescription=function(e,n,i){var r=i.descriptions=i.descriptions||{};r[e]=t.resolve(n)},e.injectPackageDescriptionLocation=function(e,t,n){var i=n.descriptionLocations=n.descriptionLocations||{};i[e]=t},e.loadPackageDescription=function(t,i){var r=t.location,a=i.descriptions=i.descriptions||{};if(void 0===a[r]){var s,o=i.descriptionLocations=i.descriptionLocations||{};s=o[r]?o[r]:n.resolve(r,"package.json"),a[r]=(i.read||e.read)(s).then(function(e){try{return JSON.parse(e)}catch(t){throw t.message=t.message+" in "+JSON.stringify(s),t}})}return a[r]},e.loadPackage=function(t,n){if(t=i(t,n),!t.location)throw Error("Can't find dependency: "+JSON.stringify(t));var a=t.location;n=Object.create(n||null);var s=n.loadingPackages=n.loadingPackages||{},o=n.packages={};n.registry=n.registry||Object.create(null),n.mainPackageLocation=a,n.hasPackage=function(e){if(e=i(e,n),!e.location)return!1;var t=e.location;return!!o[t]},n.getPackage=function(e){if(e=i(e,n),!e.location)throw Error("Can't find dependency: "+JSON.stringify(e)+" from "+n.location);var t=e.location;if(!o[t])throw s[t]?Error("Dependency has not finished loading: "+JSON.stringify(e)):Error("Dependency was not loaded: "+JSON.stringify(e));return o[t]},n.loadPackage=function(t,a){if(t=i(t,a),!t.location)throw Error("Can't find dependency: "+JSON.stringify(t)+" from "+n.location);var l=t.location;return s[l]||(s[l]=e.loadPackageDescription(t,n).then(function(t){var i=r(l,t,n),a=e.makeRequire(i);return o[l]=a,a})),s[l]};var l=n.loadPackage(t);return l.location=a,l.async=function(e,t){return l.then(function(n){return n.async(e,t)})},l},e.resolve=s;var o=/\.([^\/\.]+)$/;e.extension=function(e){var t=o.exec(e);return t?t[1]:void 0},e.isAbsolute=function(e){return/^[\w\-]+:/.test(e)},e.parseDependencies=function(e){var t={};return(e+"").replace(/(?:^|[^\w\$_.])require\s*\(\s*["']([^"']*)["']\s*\)/g,function(e,n){t[n]=!0}),Object.keys(t)},e.DependenciesCompiler=function(t,n){return function(i){return i.dependencies||void 0===i.text||(i.dependencies=t.parseDependencies(i.text)),n(i),i&&!i.dependencies&&(i.dependencies=i.text||i.factory?e.parseDependencies(i.text||i.factory):[]),i}},e.ShebangCompiler=function(e,t){return function(e){e.text&&(e.text=e.text.replace(/^#!/,"//#!")),t(e)}},e.LintCompiler=function(e,n){return function(i){try{n(i)}catch(r){throw e.lint&&t.nextTick(function(){e.lint(i)}),r}}},e.exposedConfigs=["paths","mappings","location","packageDescription","packages","modules"],e.makeCompiler=function(t){return e.JsonCompiler(t,e.ShebangCompiler(t,e.DependenciesCompiler(t,e.LintCompiler(t,e.Compiler(t)))))},e.JsonCompiler=function(e,t){return function(e){var n=(e.location||"").match(/\.json$/);return n?(e.exports=JSON.parse(e.text),e):t(e)}},e.MappingsLoader=function(t,n){return t.mappings=t.mappings||{},t.name=t.name,function(i,r){var a=t.mappings,s=Object.keys(a),o=s.length;if(e.isAbsolute(i))return n(i,r);void 0!==t.name&&0===i.indexOf(t.name)&&"/"===i.charAt(t.name.length)&&console.warn("Package reflexive module ignored:",i);var l,c;for(l=0;o>l;l++)if(c=s[l],i===c||0===i.indexOf(c)&&"/"===i.charAt(c.length)){var u=a[c],h=i.slice(c.length+1);return t.loadPackage(u,t).then(function(e){return r.mappingRedirect=h,r.mappingRequire=e,e.deepLoad(h,t.location)})}return n(i,r)}},e.LocationLoader=function(t,i){return function(r,a){var s=r,o=e.extension(r);(!o||"js"!==o&&"json"!==o&&-1===t.moduleTypes.indexOf(o))&&(s+=".js");var l=n.resolve(t.location,s);return i(l,a)}},e.MemoizedLoader=function(e,t){var n=e.cache=e.cache||{};return c(t,n)};var l=function(e){var t=/^(.*)\.js$/.exec(e);return t&&(e=t[1]),e},c=function(e,n){return n=n||{},function(i,r){return a(n,i)||(n[i]=t.fcall(e,i,r)),n[i]}}});