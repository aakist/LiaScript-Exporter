var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequire55a5;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var h=new Error("Cannot find module '"+e+"'");throw h.code="MODULE_NOT_FOUND",h}).register=function(e,t){i[e]=t},e.parcelRequire55a5=n);var s=n("jt8lu");customElements.define("lia-terminal",class extends HTMLElement{connectedCallback(){this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver.disconnect()}update(){this.height_&&(this.style.maxHeight="none",this.style.height=this.height_)}get height(){return this.height_}set height(e){this.height_!=e&&(this.height_=e,this.update())}constructor(){super();let e=this;this.resizeObserver=new(0,s.default)((function(t){e.style.height&&(e.height_=e.style.height,e.update(),e.dispatchEvent(new CustomEvent("onchangeheight")))}))}});