!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire55a5;t.register("bV6KY",(function(n,o){e(n.exports,"Connector",(function(){return l}));var i=t("4JAgF"),r=t("9HoHC"),u=t("kKjPA"),a=t("buw1Y"),l=function(){"use strict";function e(){(0,i.default)(this,e)}return(0,r.default)(e,[{key:"hasIndex",value:function(){return!1}},{key:"storage",value:function(){return new u.LiaStorage}},{key:"initSettings",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a.Settings.init(e,t)}},{key:"setSettings",value:function(e){localStorage.setItem(a.Settings.PORT,JSON.stringify(e))}},{key:"getSettings",value:function(){var e=localStorage.getItem(a.Settings.PORT),t=null;if("string"==typeof e){try{t=JSON.parse(e)}catch(e){console.warn("getSettings =>",e)}t||(t=a.Settings.default),window.innerWidth<=768&&(t.table_of_contents=!1)}return t}},{key:"open",value:function(e,t,n){}},{key:"load",value:function(e){}},{key:"store",value:function(e){}},{key:"update",value:function(e,t){}},{key:"slide",value:function(e){}},{key:"getIndex",value:function(){}},{key:"deleteFromIndex",value:function(e){}},{key:"storeToIndex",value:function(e){}},{key:"restoreFromIndex",value:function(e,t){}},{key:"reset",value:function(e,t){this.initSettings(null,!0)}},{key:"getFromIndex",value:function(e){return null}}]),e}()})),t.register("kKjPA",(function(n,o){e(n.exports,"LiaStorage",(function(){return a}));var i=t("4JAgF"),r=t("9HoHC"),u=t("dVhHy"),a=function(){"use strict";function e(){(0,i.default)(this,e)}return(0,r.default)(e,[{key:"getItems",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];"string"==typeof e&&(e=[e]);for(var t={},n=0;n<e.length;n++){var o=localStorage.getItem(e[n]);t[e[n]]=o?JSON.parse(o):o}return t}},{key:"setItems",value:function(e){this._setLocal(e)}},{key:"_setLocal",value:function(e){var t=!0,n=!1,o=void 0;if("object"==typeof e)try{for(var i,r=Object.entries(e)[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var a=(0,u.default)(i.value,2),l=a[0],f=a[1];localStorage.setItem(l,JSON.stringify(f))}}catch(e){n=!0,o=e}finally{try{t||null==r.return||r.return()}finally{if(n)throw o}}}}]),e}()}))}();