!function(){function t(t,e,i,n){Object.defineProperty(t,e,{get:i,set:n,enumerable:!0,configurable:!0})}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire55a5;e.register("8MvA8",(function(i,n){t(i.exports,"Connector",(function(){return d}));var r=e("9Klpk"),s=e("3bWnf"),o=e("kb0qF"),a=e("6Wo7Q"),c=e("bWNdT"),u=e("knzCS"),l=e("cRTHJ"),f=e("jxbaN"),d=function(t){"use strict";(0,o.default)(i,t);var e=(0,c.default)(i);function i(){var t,n;if((0,r.default)(this,i),(t=e.call(this)).active=!1,t.scaled_passing_score=null,t.db={quiz:[],survey:[],task:[]},t.id={quiz:[],survey:[],task:[]},window.API_1484_11||(null===(n=window.top)||void 0===n?void 0:n.API_1484_11)){var s;h("successfully opened API"),t.scorm=window.API_1484_11||(null===(s=window.top)||void 0===s?void 0:s.API_1484_11),h("loading quizzes ...");try{t.db.quiz=window.config_.quiz||[[]],h(" ... done")}catch(t){v("... failed",t)}h("loading surveys ...");try{t.db.survey=window.config_.survey||[[]],h(" ... done")}catch(t){v("... failed",t)}h("loading tasks ...");try{t.db.task=window.config_.task||[[]],h(" ... done")}catch(t){v("... failed",t)}t.init()}else v("Could not find API");return t}return(0,s.default)(i,[{key:"initSettings",value:function(t){return l.Settings.init(t,!1,this.setSettings)}},{key:"setSettings",value:function(t){this.active&&this.scorm?this.write("cmi.suspend_data",JSON.stringify(t)):v('cannot write to "cmi.suspend_data"')}},{key:"getSettings",value:function(){var t="";try{var e;t=(null===(e=this.scorm)||void 0===e?void 0:e.GetValue("cmi.suspend_data"))||null}catch(t){v("cannot write settings to cmi.suspend_data")}var i=null;if("string"==typeof t){try{i=JSON.parse(t)}catch(t){v("getSettings =>",t)}i||(i=l.Settings.data),window.innerWidth<=768&&(i.table_of_contents=!1)}return i}},{key:"init",value:function(){if(this.scorm){h("Initialize ",this.scorm.Initialize(""));var t=this.scorm.GetValue("cmi.mode");if(this.active="normal"===t,v("Running in",t,"mode, results will ",this.active?"":"NOT","be stored!"),this.scaled_passing_score=JSON.parse(this.scorm.GetValue("cmi.scaled_passing_score")),h("open location ..."),this.location=f.jsonParse(this.scorm.GetValue("cmi.location")),h("... ",this.location),null===this.location){this.slide(0);var e=0;e=this.initFirst("quiz",e),e=this.initFirst("survey",e),e=this.initFirst("task",e)}else{var i=0;i=this.initSecond("quiz",i),i=this.initSecond("survey",i),i=this.initSecond("task",i)}window.SCORE=0,this.score()}}},{key:"initFirst",value:function(t,e){for(var i=0;i<this.db[t].length;i++){this.id[t].push([]);for(var n=0;n<this.db[t][i].length;n++)this.setInteraction(e,"".concat(t,":").concat(i,"-").concat(n)),this.id[t][i].push(e),e++}return e}},{key:"initSecond",value:function(t,e){for(var i=0;i<this.db[t].length;i++){this.id[t].push([]);for(var n=0;n<this.db[t][i].length;n++){var r=this.getInteraction(e);r&&(this.db[t][i][n]=r),this.id[t][i].push(e),e++}}return e}},{key:"open",value:function(t,e,i){null!==this.location&&window.LIA.goto(this.location)}},{key:"load",value:function(t){if(this.active)switch(t.table){case"quiz":case"survey":case"task":return h("loading ",t.table,t.id,this.db.task[t.id]),this.db[t.table][t.id]}}},{key:"store",value:function(t){if(this.active)switch(t.table){case"quiz":this.storeHelper(t),this.score();break;case"survey":case"task":this.storeHelper(t)}}},{key:"storeHelper",value:function(t){for(var e=0;e<this.db[t.table][t.id].length;e++)f.neq(t.data[e],this.db[t.table][t.id][e])&&(this.updateInteraction(this.id[t.table][t.id][e],t.data[e]),this.db[t.table][t.id][e]=t.data[e],"quiz"==t.table&&this.updateQuiz(this.id[t.table][t.id][e],t.data[e]))}},{key:"score",value:function(){if(this.active&&this.scaled_passing_score){for(var t=0,e=0,i=0,n=0,r=0;r<this.db.quiz.length;r++)for(var s=0;s<this.db.quiz[r].length;s++)switch(t+=n=this.db.quiz[r][s].score,this.db.quiz[r][s].solved){case 1:e+=n;case-1:i+=n}var o=0===e?0:e/t;this.write("cmi.score.min","0"),this.write("cmi.score.max",JSON.stringify(t)),this.write("cmi.score.scaled",JSON.stringify(o)),this.write("cmi.score.raw",JSON.stringify(e)),o>=this.scaled_passing_score?(this.write("cmi.success_status","passed"),this.write("cmi.completion_status","completed")):i+e===t?(this.write("cmi.success_status","failed"),this.write("cmi.completion_status","completed")):this.write("cmi.completion_status","incomplete"),window.SCORE=o}}},{key:"write",value:function(t,e){if(this.scorm){if(h("write: ",t,e),"false"===this.scorm.SetValue(t,e)){v("error occurred for",t,e);var i=this.scorm.GetLastError();v("GetLastError:",i),i?(v("GetErrorString:",this.scorm.GetErrorString(i)),v("GetDiagnostic:",this.scorm.GetDiagnostic(i))):v("GetDiagnostic:",this.scorm.GetDiagnostic(""))}this.scorm.Commit("")}}},{key:"slide",value:function(t){this.location=t,this.write("cmi.location",JSON.stringify(t))}},{key:"setInteraction",value:function(t,e){this.write("cmi.interactions.".concat(t,".id"),e),this.write("cmi.interactions.".concat(t,".type"),"long-fill-in")}},{key:"updateQuiz",value:function(t,e){if(this.active)switch(e.solved){case 0:e.trial>0&&this.write("cmi.interactions.".concat(t,".result"),"incorrect");break;case 1:this.write("cmi.interactions.".concat(t,".result"),"correct");break;case-1:this.write("cmi.interactions.".concat(t,".result"),"neutral")}}},{key:"updateInteraction",value:function(t,e){this.write("cmi.interactions.".concat(t,".learner_response"),f.encodeJSON(e))}},{key:"getInteraction",value:function(t){if(!this.active)return null;try{if(this.scorm)return f.decodeJSON(this.scorm.GetValue("cmi.interactions.".concat(t,".learner_response")))}catch(t){v("getInteraction => ",t)}return null}}]),i}(u.Connector);function h(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var n;(n=console).log.apply(n,["SCORM2004: "].concat((0,a.default)(e)))}function v(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var n;(n=console).log.apply(n,["SCORM2004: "].concat((0,a.default)(e)))}})),e.register("knzCS",(function(i,n){t(i.exports,"Connector",(function(){return l}));var r=e("hnmIs"),s=e("9Klpk"),o=e("3bWnf"),a=e("32Euv"),c=e("87lFe"),u=e("cRTHJ"),l=function(){"use strict";function t(){(0,s.default)(this,t)}return(0,o.default)(t,[{key:"hasIndex",value:function(){return!1}},{key:"storage",value:function(){return new c.LiaStorage}},{key:"initSettings",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return u.Settings.init(t,e,this.setSettings)}},{key:"setSettings",value:function(t){try{localStorage.setItem(u.Settings.PORT,JSON.stringify(t))}catch(t){console.warn("cannot write to localStorage")}}},{key:"getSettings",value:function(){var t="";try{t=localStorage.getItem(u.Settings.PORT)}catch(t){console.warn("cannot write to localStorage")}var e=null;if("string"==typeof t){try{e=JSON.parse(t)}catch(t){console.warn("getSettings =>",t)}e||(e=u.Settings.data),window.innerWidth<=768&&(e.table_of_contents=!1)}return e}},{key:"open",value:function(t,e,i){}},{key:"load",value:function(t){}},{key:"store",value:function(t){}},{key:"update",value:function(t,e){}},{key:"slide",value:function(t){}},{key:"getIndex",value:function(){}},{key:"deleteFromIndex",value:function(t){}},{key:"storeToIndex",value:function(t){}},{key:"restoreFromIndex",value:function(t,e){}},{key:"reset",value:function(t,e){this.initSettings(null,!0)}},{key:"getFromIndex",value:function(t){return(0,r.default)((function(){return(0,a.__generator)(this,(function(t){return[2,null]}))}))()}}]),t}()})),e.register("87lFe",(function(i,n){t(i.exports,"LiaStorage",(function(){return a}));var r=e("9Klpk"),s=e("3bWnf"),o=e("5ENmm"),a=function(){"use strict";function t(){(0,r.default)(this,t)}return(0,s.default)(t,[{key:"getItems",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];"string"==typeof t&&(t=[t]);for(var e={},i=0;i<t.length;i++){var n=localStorage.getItem(t[i]);e[t[i]]=n?JSON.parse(n):n}return e}},{key:"setItems",value:function(t){this._setLocal(t)}},{key:"_setLocal",value:function(t){var e=!0,i=!1,n=void 0;if("object"==typeof t)try{for(var r,s=Object.entries(t)[Symbol.iterator]();!(e=(r=s.next()).done);e=!0){var a=(0,o.default)(r.value,2),c=a[0],u=a[1];localStorage.setItem(c,JSON.stringify(u))}}catch(t){i=!0,n=t}finally{try{e||null==s.return||s.return()}finally{if(i)throw n}}}}]),t}()})),e.register("jxbaN",(function(i,n){t(i.exports,"encodeJSON",(function(){return c})),t(i.exports,"decodeJSON",(function(){return u})),t(i.exports,"jsonParse",(function(){return l})),t(i.exports,"neq",(function(){return f}));var r=e("5ENmm"),s={SingleChoice:"sc",MultipleChoice:"mc",Text:"tx",Select:"st",Matrix:"mx",Generic:"gn",error_msg:"err"},o=Object.entries(s).reduce((function(t,e){var i=(0,r.default)(e,2),n=i[0];return t[i[1]]=n,t}),{});function a(t,e){if("object"!=typeof t||null===t)return t;if(Array.isArray(t))return t.map((function(t){return a(t,e)}));var i={},n=!0,s=!1,o=void 0;try{for(var c,u=Object.entries(t)[Symbol.iterator]();!(n=(c=u.next()).done);n=!0){var l=(0,r.default)(c.value,2),f=l[0],d=l[1];i[e[f]||f]=a(d,e)}}catch(t){s=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(s)throw o}}return i}function c(t){return JSON.stringify(a(t,s))}function u(t){return a(JSON.parse(t),o)}function l(t){try{return JSON.parse(t)}catch(t){}return null}function f(t,e){return JSON.stringify(t)!=JSON.stringify(e)}}))}();