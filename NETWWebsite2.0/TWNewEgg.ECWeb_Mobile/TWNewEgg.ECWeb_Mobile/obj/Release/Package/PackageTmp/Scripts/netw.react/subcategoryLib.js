!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){e.exports=n(129)},6:function(e,t){"use strict";e.exports=nemReact.flux},8:function(e,t){"use strict";var n=function(e){var t,n={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};e.exports=n},9:function(e,t){"use strict";function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function o(e){return"number"==typeof e}function s(e){return"object"===("undefined"==typeof e?"undefined":a(e))&&null!==e}function i(e){return void 0===e}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!o(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,o,a,u,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],i(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(s(n))for(a=Array.prototype.slice.call(arguments,1),c=n.slice(),o=c.length,u=0;o>u;u++)c[u].apply(this,a);return!0},n.prototype.addListener=function(e,t){var o;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(o=i(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,o&&o>0&&this._events[e].length>o&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),o||(o=!0,t.apply(this,arguments))}if(!r(t))throw TypeError("listener must be a function");var o=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,o,i,a;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],i=n.length,o=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(a=i;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){o=a;break}if(0>o)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],r(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},10:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;10>n;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(s){return!1}}var o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,i,a=n(e),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var c in r)o.call(r,c)&&(a[c]=r[c]);if(Object.getOwnPropertySymbols){i=Object.getOwnPropertySymbols(r);for(var h=0;h<i.length;h++)s.call(r,i[h])&&(a[i[h]]=r[i[h]])}}return a}},129:function(e,t,n){"use strict";var r=n(130),o=n(132),s=n(133),i=n(134),a=n(135),u=n(136);nemReact.setModules("SubCategoryAction",r),nemReact.setModules("CategoryParentAction",o),nemReact.setModules("SubCategoryTopTenAction",s),nemReact.setModules("SubCategoryStore",i),nemReact.setModules("CategoryParentStore",a),nemReact.setModules("SubCategoryTopTenStore",u)},130:function(e,t,n){"use strict";var r=n(6),o=n(131),s=nemReact.require("NetwApiCall"),i=o.SubCategoryMethods,a=window._netwHost,u=a+"/api/SubCategory",c={url:u,async:!0,cache:!0,dataType:"json",contentType:"application/json",crossDomain:!0,headers:{},customAuthorization:!1},h=new s(c);e.exports={getSubItems:function(e,t,n){var o="maxPrice&minPrice&PVID&OrderBy={0}&Page={1}&ItemsQty=6&CategoryID={2}";return isNaN(parseInt(e,10))?void r.dispatch({type:i.SUB_GET,currentPage:n,categoryID:0,order:t,subItems:null}):("string"!=typeof t&&(t="CreatDate"),"number"!=typeof n&&(n=1),o=o.replace("{0}",t),o=o.replace("{1}",n),o=o.replace("{2}",e),void h.get(o).then(function(o){r.dispatch({type:i.SUB_GET,currentPage:n,categoryID:e,order:t,subItems:o})}))}}},131:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(8),s=r(o);e.exports={SubCategoryMethods:(0,s["default"])({SUB_GET:null,SUB_GETTOP:null,SUB_GETPARENT:null})}},132:function(e,t,n){"use strict";var r=n(6),o=n(131),s=nemReact.require("NetwApiCall"),i=o.SubCategoryMethods,a=window._netwHost,u=a+"/api/Item/GetItemParentCategories",c={url:u,async:!0,cache:!0,dataType:"json",contentType:"application/json",crossDomain:!0,headers:{},customAuthorization:!1},h=new s(c);e.exports={getItemParentCate:function(e){var t="CategoryId=";"undefined"==typeof e||isNaN(parseInt(e,10))||(t+=e.toString()),h.get(t).then(function(t){r.dispatch({type:i.SUB_GETPARENT,categoryID:e,categoryParent:t})})}}},133:function(e,t,n){"use strict";var r=n(6),o=n(131),s=nemReact.require("NetwApiCall"),i=o.SubCategoryMethods,a=window._netwHost,u=a+"/api/CategoryTopTenItems",c={url:u,async:!0,cache:!0,dataType:"json",contentType:"application/json",crossDomain:!0,headers:{},customAuthorization:!1},h=new s(c);e.exports={getTopTen:function(e){var t="categoryID=";"undefined"==typeof e||isNaN(parseInt(e,10))||(t+=e.toString()),h.get(t).then(function(t){r.dispatch({type:i.SUB_GETTOP,categoryID:e,topTen:t})})}}},134:function(e,t,n){"use strict";function r(e,t,n,r){if(!e)return void(f.hasData=!1);if(0==e.CategoryItemInfo_ViewList.length?(f.maxPage=t,f.hasData=!1):(f.maxPage=999,f.hasData=!0),f.hasOwnProperty("subCategoryItems"))for(var s=o(n,r),i=0;i<e.CategoryItemInfo_ViewList.length;i++){for(var a=!1,u=0;u<f.subCategoryItems.length&&!s;u++)e.CategoryItemInfo_ViewList[i].ID==f.subCategoryItems[u].ID&&(a=!0);a||f.subCategoryItems.push(e.CategoryItemInfo_ViewList[i])}else f.subCategoryItems=e.CategoryItemInfo_ViewList;f.currentPage=t,f.categoryID=n,f.order=r}function o(e,t){return f.categoryID===e&&f.order===t?!1:(f.subCategoryItems.length=0,!0)}var s=n(6),i=n(131),a=n(9).EventEmitter,u=n(10),c=i.SubCategoryMethods,h="subCategoryChange",f={currentPage:0,maxPage:999,categoryID:0,order:"CreateDate",hasData:!0},p=u({},a.prototype,{emitChange:function(){this.emit(h)},addChangeListener:function(e){this.on(h,e)},removeChangeListener:function(e){this.removeListener(h,e)},getCurrentPage:function(){var e=0;return f.hasOwnProperty("currentPage")&&(e=f.currentPage),e},getMaxPage:function(){var e=999;return f.hasOwnProperty("maxPage")&&(e=f.maxPage),e},getCategoryID:function(){var e=0;return f.hasOwnProperty("categoryID")&&(e=f.categoryID),e},getHasData:function(){var e=!0;return f.hasOwnProperty("hasData")&&(e=f.hasData),e},getSubItems:function(){var e=[];return f.hasOwnProperty("subCategoryItems")&&(e=f.subCategoryItems),e}});p.dispatchToken=s.register(function(e){switch(e.type){case c.SUB_GET:r(e.subItems,e.currentPage,e.categoryID,e.order),p.emitChange()}}),e.exports=p},135:function(e,t,n){"use strict";function r(e){if(e&&"object"===("undefined"==typeof e?"undefined":o(e)))f=e;else{var t={DropDownItems:[{CategoryID:0,Title:"商品分類"}]};f=t}}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=n(6),i=n(131),a=n(9).EventEmitter,u=n(10),c=i.SubCategoryMethods,h="cateParentChange",f={},p=u({},a.prototype,{emitChange:function(){this.emit(h)},addChangeListener:function(e){this.on(h,e)},removeChangeListener:function(e){this.removeListener(h,e)},getAll:function(){return f}});p.dispatchToken=s.register(function(e){switch(e.type){case c.SUB_GETPARENT:r(e.categoryParent),p.emitChange()}}),e.exports=p},136:function(e,t,n){"use strict";function r(e,t){var n={categoryID:e,topTenData:[]};f.length>15&&f.shift(),t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(n.topTenData=t),f.push(n)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=n(6),i=n(131),a=n(9).EventEmitter,u=n(10),c=i.SubCategoryMethods,h="topTenChange",f=[],p=u({},a.prototype,{emitChange:function(){this.emit(h)},addChangeListener:function(e){this.on(h,e)},removeChangeListener:function(e){this.removeListener(h,e)},getTopTen:function(e){for(var t={},n=0;n<f.length;n++)f[n].categoryID===e&&(t=f[n]);return t}});p.dispatchToken=s.register(function(e){switch(e.type){case c.SUB_GETTOP:r(e.categoryID,e.topTen),p.emitChange()}}),e.exports=p}});