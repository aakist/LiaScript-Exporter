function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire55a5;t.register("8t8eM",(function(n,o){e(n.exports,"Connector",(function(){return l}));var s=t("lYqYe"),r=t("5899m"),i=t("lAsdg");class l{hasIndex(){return!1}connect(e){e&&(this.send=e)}storage(){return new r.LiaStorage}initSettings(e,t=!1){i.initSettings(this.send,e||void 0,t)}setSettings(e){localStorage.setItem(s.default.SETTINGS,JSON.stringify(e))}getSettings(){const e=localStorage.getItem(s.default.SETTINGS);let t=null;if("string"==typeof e){try{t=JSON.parse(e)}catch(e){console.warn("getSettings =>",e)}t||(t=i.defaultSettings),window.innerWidth<=768&&(t.table_of_contents=!1)}return t}open(e,t,n,o){}load(e){}store(e){}update(e,t){}slide(e){}getIndex(){}deleteFromIndex(e){}storeToIndex(e){}restoreFromIndex(e,t){}reset(e,t){this.initSettings(null,!0)}getFromIndex(e){this.send({topic:s.default.RESTORE,message:null,section:-1})}constructor(){this.send=e=>null}}})),t.register("5899m",(function(t,n){e(t.exports,"LiaStorage",(function(){return o}));class o{getItems(e=[]){"string"==typeof e&&(e=[e]);let t={};for(let n=0;n<e.length;n++){let o=localStorage.getItem(e[n]);t[e[n]]=o?JSON.parse(o):o}return t}setItems(e){this._setLocal(e)}_setLocal(e){if("object"==typeof e)for(const[t,n]of Object.entries(e))localStorage.setItem(t,JSON.stringify(n))}constructor(){}}}));