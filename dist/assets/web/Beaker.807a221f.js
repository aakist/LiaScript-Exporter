!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire55a5;e.register("5HUCs",(function(t,n){var r,a,i,s;r=t.exports,a="Sync",i=function(){return v},Object.defineProperty(r,a,{get:i,set:s,enumerable:!0,configurable:!0});var l=e("aPYZr"),o=e("4JAgF"),d=e("9HoHC"),u=e("8WkQI"),f=e("aPvD2"),p=e("aBvOn"),c=e("gNsil"),h=e("8rJSp"),v=function(e){"use strict";(0,c.default)(n,e);var t=(0,h.default)(n);function n(){var e;return(0,o.default)(this,n),e=t.apply(this,arguments),(0,u.default)((0,l.default)(e),"peerIds",new Set),e}return(0,d.default)(n,[{key:"destroy",value:function(){this.peerChannelEvent&&this.peerChannelEvent.close(),(0,f.default)((0,p.default)(n.prototype),"destroy",this).call(this)}},{key:"connect",value:function(e){if(window.beaker){(0,f.default)((0,p.default)(n.prototype),"connect",this).call(this,e),this.peerIds=new Set,this.peerEvent=window.beaker.peersockets.watch();var t=this;this.peerEvent.addEventListener("join",(function(e){t.peerIds.add(e.peerId)})),this.peerEvent.addEventListener("leave",(function(e){t.peerIds.delete(e.peerId),console.warn("LEAVE",e)}));var r=this.uniqueID();r&&(this.peerChannelEvent=window.beaker.peersockets.join(r),this.peerChannelEvent.addEventListener("message",(function(e){e.message&&t.applyUpdate(e.message)})),this.sendConnect())}}},{key:"broadcast",value:function(e){var t=!0,n=!1,r=void 0;if(this.peerChannelEvent)try{for(var a,i=this.peerIds[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var s=a.value;this.peerChannelEvent.send(s,e)}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}}]),n}(e("bhxid").Sync)}))}();