(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.KamiFlash = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
    @license @nocompile
    Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    (function () {

      (function(){if(void 0===window.Reflect||void 0===window.customElements||window.customElements.polyfillWrapFlushCallback)return;const a=HTMLElement;window.HTMLElement=function HTMLElement(){return Reflect.construct(a,[],this.constructor)},HTMLElement.prototype=a.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,a);})();

    }());

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    /**
    @license @nocompile
    Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    (function(){/*

     Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    var r,t="undefined"!=typeof window&&window===this?this:"undefined"!=typeof commonjsGlobal&&null!=commonjsGlobal?commonjsGlobal:this,ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value);};function da(){da=function(){};t.Symbol||(t.Symbol=ea);}var ea=function(){var a=0;return function(b){return "jscomp_symbol_"+(b||"")+a++}}();
    function fa(){da();var a=t.Symbol.iterator;a||(a=t.Symbol.iterator=t.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ca(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(this)}});fa=function(){};}function ha(a){var b=0;return ia(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ia(a){fa();a={next:a};a[t.Symbol.iterator]=function(){return this};return a}function ja(a){fa();var b=a[Symbol.iterator];return b?b.call(a):ha(a)}
    function ka(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var la;if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={Ga:!0},oa={};try{oa.__proto__=na;ma=oa.Ga;break a}catch(a){}ma=!1;}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;}var pa=la;function qa(){this.f=!1;this.b=null;this.aa=void 0;this.a=1;this.F=0;this.c=null;}
    function ra(a){if(a.f)throw new TypeError("Generator is already running");a.f=!0;}qa.prototype.u=function(a){this.aa=a;};function sa(a,b){a.c={Ja:b,Na:!0};a.a=a.F;}qa.prototype.return=function(a){this.c={return:a};this.a=this.F;};function ta(a,b){a.a=3;return {value:b}}function ua(a){this.a=new qa;this.b=a;}function va(a,b){ra(a.a);var c=a.a.b;if(c)return wa(a,"return"in c?c["return"]:function(a){return {value:a,done:!0}},b,a.a.return);a.a.return(b);return xa(a)}
    function wa(a,b,c,d){try{var e=b.call(a.a.b,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.f=!1,e;var f=e.value;}catch(g){return a.a.b=null,sa(a.a,g),xa(a)}a.a.b=null;d.call(a.a,f);return xa(a)}function xa(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.f=!1,{value:b.value,done:!1}}catch(c){a.a.aa=void 0,sa(a.a,c);}a.a.f=!1;if(a.a.c){b=a.a.c;a.a.c=null;if(b.Na)throw b.Ja;return {value:b.return,done:!0}}return {value:void 0,done:!0}}
    function ya(a){this.next=function(b){ra(a.a);a.a.b?b=wa(a,a.a.b.next,b,a.a.u):(a.a.u(b),b=xa(a));return b};this.throw=function(b){ra(a.a);a.a.b?b=wa(a,a.a.b["throw"],b,a.a.u):(sa(a.a,b),b=xa(a));return b};this.return=function(b){return va(a,b)};fa();this[Symbol.iterator]=function(){return this};}function Ba(a,b){b=new ya(new ua(b));pa&&pa(b,a.prototype);return b}
    (function(){if(!function(){var a=document.createEvent("Event");a.initEvent("foo",!0,!0);a.preventDefault();return a.defaultPrevented}()){var a=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(a.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return !0},configurable:!0}));};}var b=/Trident/.test(navigator.userAgent);if(!window.Event||b&&"function"!==typeof window.Event){var c=window.Event;window.Event=function(a,b){b=b||{};var c=document.createEvent("Event");
    c.initEvent(a,!!b.bubbles,!!b.cancelable);return c};if(c){for(var d in c)window.Event[d]=c[d];window.Event.prototype=c.prototype;}}if(!window.CustomEvent||b&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(a,b){b=b||{};var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c},window.CustomEvent.prototype=window.Event.prototype;if(!window.MouseEvent||b&&"function"!==typeof window.MouseEvent){b=window.MouseEvent;window.MouseEvent=
    function(a,b){b=b||{};var c=document.createEvent("MouseEvent");c.initMouseEvent(a,!!b.bubbles,!!b.cancelable,b.view||window,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);return c};if(b)for(d in b)window.MouseEvent[d]=b[d];window.MouseEvent.prototype=b.prototype;}Array.from||(Array.from=function(a){return [].slice.call(a)});Object.assign||(Object.assign=function(a,b){for(var c=[].slice.call(arguments,1),d=0,e;d<c.length;d++)if(e=c[d])for(var f=
    a,n=e,q=Object.getOwnPropertyNames(n),I=0;I<q.length;I++)e=q[I],f[e]=n[e];return a});})();(function(){function a(){}function b(a,b){if(!a.childNodes.length)return [];switch(a.nodeType){case Node.DOCUMENT_NODE:return Q.call(a,b);case Node.DOCUMENT_FRAGMENT_NODE:return Eb.call(a,b);default:return x.call(a,b)}}var c="undefined"===typeof HTMLTemplateElement,d=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),e=!1;/Trident/.test(navigator.userAgent)&&function(){function a(a,b){if(a instanceof DocumentFragment)for(var d;d=a.firstChild;)c.call(this,d,b);else c.call(this,
    a,b);return a}e=!0;var b=Node.prototype.cloneNode;Node.prototype.cloneNode=function(a){a=b.call(this,a);this instanceof DocumentFragment&&(a.__proto__=DocumentFragment.prototype);return a};DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},
    configurable:!0},nodeName:{get:function(){return "#document-fragment"},configurable:!0}});var c=Node.prototype.insertBefore;Node.prototype.insertBefore=a;var d=Node.prototype.appendChild;Node.prototype.appendChild=function(b){b instanceof DocumentFragment?a.call(this,b,null):d.call(this,b);return b};var f=Node.prototype.removeChild,g=Node.prototype.replaceChild;Node.prototype.replaceChild=function(b,c){b instanceof DocumentFragment?(a.call(this,b,c),f.call(this,c)):g.call(this,b,c);return c};Document.prototype.createDocumentFragment=
    function(){var a=this.createElement("df");a.__proto__=DocumentFragment.prototype;return a};var h=Document.prototype.importNode;Document.prototype.importNode=function(a,b){b=h.call(this,a,b||!1);a instanceof DocumentFragment&&(b.__proto__=DocumentFragment.prototype);return b};}();var f=Node.prototype.cloneNode,g=Document.prototype.createElement,h=Document.prototype.importNode,k=Node.prototype.removeChild,l=Node.prototype.appendChild,n=Node.prototype.replaceChild,q=DOMParser.prototype.parseFromString,
    I=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(a){this.innerHTML=a;}},v=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},x=Element.prototype.querySelectorAll,Q=Document.prototype.querySelectorAll,Eb=DocumentFragment.prototype.querySelectorAll,Fb=function(){if(!c){var a=document.createElement("template"),b=document.createElement("template");b.content.appendChild(document.createElement("div"));
    a.content.appendChild(b);a=a.cloneNode(!0);return 0===a.content.childNodes.length||0===a.content.firstChild.content.childNodes.length||d}}();if(c){var T=document.implementation.createHTMLDocument("template"),Ja=!0,p=document.createElement("style");p.textContent="template{display:none;}";var za=document.head;za.insertBefore(p,za.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var aa=!document.createElement("div").hasOwnProperty("innerHTML");a.S=function(b){if(!b.content&&b.namespaceURI===
    document.documentElement.namespaceURI){b.content=T.createDocumentFragment();for(var c;c=b.firstChild;)l.call(b.content,c);if(aa)b.__proto__=a.prototype;else if(b.cloneNode=function(b){return a.b(this,b)},Ja)try{m(b),y(b);}catch(vh){Ja=!1;}a.a(b.content);}};var X={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},m=function(b){Object.defineProperty(b,"innerHTML",{get:function(){return ba(this)},set:function(b){var c=X[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(b)||
    ["",""])[1].toLowerCase()];if(c)for(var d=0;d<c.length;d++)b="<"+c[d]+">"+b+"</"+c[d]+">";T.body.innerHTML=b;for(a.a(T);this.content.firstChild;)k.call(this.content,this.content.firstChild);b=T.body;if(c)for(d=0;d<c.length;d++)b=b.lastChild;for(;b.firstChild;)l.call(this.content,b.firstChild);},configurable:!0});},y=function(a){Object.defineProperty(a,"outerHTML",{get:function(){return "<template>"+this.innerHTML+"</template>"},set:function(a){if(this.parentNode){T.body.innerHTML=a;for(a=this.ownerDocument.createDocumentFragment();T.body.firstChild;)l.call(a,
    T.body.firstChild);n.call(this.parentNode,a,this);}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");},configurable:!0});};m(a.prototype);y(a.prototype);a.a=function(c){c=b(c,"template");for(var d=0,e=c.length,f;d<e&&(f=c[d]);d++)a.S(f);};document.addEventListener("DOMContentLoaded",function(){a.a(document);});Document.prototype.createElement=function(){var b=g.apply(this,arguments);"template"===b.localName&&a.S(b);return b};DOMParser.prototype.parseFromString=
    function(){var b=q.apply(this,arguments);a.a(b);return b};Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return ba(this)},set:function(b){I.set.call(this,b);a.a(this);},configurable:!0,enumerable:!0});var Y=/[&\u00A0"]/g,Gb=/[&\u00A0<>]/g,Ka=function(a){switch(a){case "&":return "&amp;";case "<":return "&lt;";case ">":return "&gt;";case '"':return "&quot;";case "\u00a0":return "&nbsp;"}};p=function(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b};var Aa=p("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
    La=p("style script xmp iframe noembed noframes plaintext noscript".split(" ")),ba=function(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):v.get.call(a),e=0,f=d.length,g;e<f&&(g=d[e]);e++){a:{var h=g;var k=a;var l=b;switch(h.nodeType){case Node.ELEMENT_NODE:for(var n=h.localName,m="<"+n,q=h.attributes,x=0;k=q[x];x++)m+=" "+k.name+'="'+k.value.replace(Y,Ka)+'"';m+=">";h=Aa[n]?m:m+ba(h,l)+"</"+n+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&La[k.localName]?h:h.replace(Gb,Ka);break a;
    case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),Error("not implemented");}}c+=h;}return c};}if(c||Fb){a.b=function(a,b){var c=f.call(a,!1);this.S&&this.S(c);b&&(l.call(c.content,f.call(a.content,!0)),Ma(c.content,a.content));return c};var Ma=function(c,d){if(d.querySelectorAll&&(d=b(d,"template"),0!==d.length)){c=b(c,"template");for(var e=0,f=c.length,g,h;e<f;e++)h=d[e],g=c[e],a&&a.S&&a.S(h),n.call(g.parentNode,sf.call(h,!0),g);}},sf=Node.prototype.cloneNode=
    function(b){if(!e&&d&&this instanceof DocumentFragment)if(b)var c=tf.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&"template"===this.localName&&this.namespaceURI==document.documentElement.namespaceURI?c=a.b(this,b):c=f.call(this,b);b&&Ma(c,this);return c},tf=Document.prototype.importNode=function(c,d){d=d||!1;if("template"===c.localName)return a.b(c,d);var e=h.call(this,c,d);if(d){Ma(e,c);c=b(e,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
    for(var f,k=0;k<c.length;k++){f=c[k];d=g.call(document,"script");d.textContent=f.textContent;for(var l=f.attributes,m=0,q;m<l.length;m++)q=l[m],d.setAttribute(q.name,q.value);n.call(f.parentNode,d,f);}}return e};}c&&(window.HTMLTemplateElement=a);})();var Ca=setTimeout;function Da(){}function Ea(a,b){return function(){a.apply(b,arguments);}}function u(a){if(!(this instanceof u))throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this.I=0;this.oa=!1;this.w=void 0;this.U=[];Fa(a,this);}
    function Ga(a,b){for(;3===a.I;)a=a.w;0===a.I?a.U.push(b):(a.oa=!0,Ha(function(){var c=1===a.I?b.Pa:b.Qa;if(null===c)(1===a.I?Ia:Na)(b.ma,a.w);else{try{var d=c(a.w);}catch(e){Na(b.ma,e);return}Ia(b.ma,d);}}));}function Ia(a,b){try{if(b===a)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"===typeof b||"function"===typeof b)){var c=b.then;if(b instanceof u){a.I=3;a.w=b;Oa(a);return}if("function"===typeof c){Fa(Ea(c,b),a);return}}a.I=1;a.w=b;Oa(a);}catch(d){Na(a,d);}}
    function Na(a,b){a.I=2;a.w=b;Oa(a);}function Oa(a){2===a.I&&0===a.U.length&&Ha(function(){a.oa||"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",a.w);});for(var b=0,c=a.U.length;b<c;b++)Ga(a,a.U[b]);a.U=null;}function Pa(a,b,c){this.Pa="function"===typeof a?a:null;this.Qa="function"===typeof b?b:null;this.ma=c;}function Fa(a,b){var c=!1;try{a(function(a){c||(c=!0,Ia(b,a));},function(a){c||(c=!0,Na(b,a));});}catch(d){c||(c=!0,Na(b,d));}}
    u.prototype["catch"]=function(a){return this.then(null,a)};u.prototype.then=function(a,b){var c=new this.constructor(Da);Ga(this,new Pa(a,b,c));return c};u.prototype["finally"]=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){return b.reject(c)})})};
    function Qa(a){return new u(function(b,c){function d(a,g){try{if(g&&("object"===typeof g||"function"===typeof g)){var h=g.then;if("function"===typeof h){h.call(g,function(b){d(a,b);},c);return}}e[a]=g;0===--f&&b(e);}catch(n){c(n);}}if(!a||"undefined"===typeof a.length)throw new TypeError("Promise.all accepts an array");var e=Array.prototype.slice.call(a);if(0===e.length)return b([]);for(var f=e.length,g=0;g<e.length;g++)d(g,e[g]);})}
    function Ra(a){return a&&"object"===typeof a&&a.constructor===u?a:new u(function(b){b(a);})}function Sa(a){return new u(function(b,c){c(a);})}function Ta(a){return new u(function(b,c){for(var d=0,e=a.length;d<e;d++)a[d].then(b,c);})}var Ha="function"===typeof setImmediate&&function(a){setImmediate(a);}||function(a){Ca(a,0);};/*

    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    if(!window.Promise){window.Promise=u;u.prototype.then=u.prototype.then;u.all=Qa;u.race=Ta;u.resolve=Ra;u.reject=Sa;var Ua=document.createTextNode(""),Va=[];(new MutationObserver(function(){for(var a=Va.length,b=0;b<a;b++)Va[b]();Va.splice(0,a);})).observe(Ua,{characterData:!0});Ha=function(a){Va.push(a);Ua.textContent=0<Ua.textContent.length?"":"a";};}(function(a,b){if(!(b in a)){var c=typeof commonjsGlobal===typeof c?window:commonjsGlobal,d=0,e=""+Math.random(),f="__\u0001symbol@@"+e,g=a.getOwnPropertyNames,h=a.getOwnPropertyDescriptor,k=a.create,l=a.keys,n=a.freeze||a,q=a.defineProperty,I=a.defineProperties,v=h(a,"getOwnPropertyNames"),x=a.prototype,Q=x.hasOwnProperty,Eb=x.propertyIsEnumerable,Fb=x.toString,T=function(a,b,c){Q.call(a,f)||q(a,f,{enumerable:!1,configurable:!1,writable:!1,value:{}});a[f]["@@"+b]=c;},Ja=function(a,b){var c=k(a);g(b).forEach(function(a){X.call(b,
    a)&&Aa(c,a,b[a]);});return c},p=function(){},za=function(a){return a!=f&&!Q.call(Y,a)},aa=function(a){return a!=f&&Q.call(Y,a)},X=function(a){var b=""+a;return aa(b)?Q.call(this,b)&&this[f]["@@"+b]:Eb.call(this,a)},m=function(b){q(x,b,{enumerable:!1,configurable:!0,get:p,set:function(a){ba(this,b,{enumerable:!1,configurable:!0,writable:!0,value:a});T(this,b,!0);}});return n(Y[b]=q(a(b),"constructor",Gb))},y=function(a){if(this&&this!==c)throw new TypeError("Symbol is not a constructor");return m("__\u0001symbol:".concat(a||
    "",e,++d))},Y=k(null),Gb={value:y},Ka=function(a){return Y[a]},Aa=function(a,b,c){var d=""+b;if(aa(d)){b=ba;if(c.enumerable){var e=k(c);e.enumerable=!1;}else e=c;b(a,d,e);T(a,d,!!c.enumerable);}else q(a,b,c);return a},La=function(a){return g(a).filter(aa).map(Ka)};v.value=Aa;q(a,"defineProperty",v);v.value=La;q(a,b,v);v.value=function(a){return g(a).filter(za)};q(a,"getOwnPropertyNames",v);v.value=function(a,b){var c=La(b);c.length?l(b).concat(c).forEach(function(c){X.call(b,c)&&Aa(a,c,b[c]);}):I(a,
    b);return a};q(a,"defineProperties",v);v.value=X;q(x,"propertyIsEnumerable",v);v.value=y;q(c,"Symbol",v);v.value=function(a){a="__\u0001symbol:".concat("__\u0001symbol:",a,e);return a in x?Y[a]:m(a)};q(y,"for",v);v.value=function(a){if(za(a))throw new TypeError(a+" is not a symbol");return Q.call(Y,a)?a.slice(20,-e.length):void 0};q(y,"keyFor",v);v.value=function(a,b){var c=h(a,b);c&&aa(b)&&(c.enumerable=X.call(a,b));return c};q(a,"getOwnPropertyDescriptor",v);v.value=function(a,b){return 1===arguments.length?
    k(a):Ja(a,b)};q(a,"create",v);v.value=function(){var a=Fb.call(this);return "[object String]"===a&&aa(this)?"[object Symbol]":a};q(x,"toString",v);try{var ba=k(q({},"__\u0001symbol:",{get:function(){return q(this,"__\u0001symbol:",{value:!1})["__\u0001symbol:"]}}))["__\u0001symbol:"]||q;}catch(Ma){ba=function(a,b,c){var d=h(x,b);delete x[b];q(a,b,c);q(x,b,d);};}}})(Object,"getOwnPropertySymbols");
    (function(a){var b=a.defineProperty,c=a.prototype,d=c.toString,e;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(f){if(!(f in Symbol))switch(b(Symbol,f,{value:Symbol(f)}),f){case "toStringTag":e=a.getOwnPropertyDescriptor(c,"toString"),e.value=function(){var a=d.call(this),b=this[Symbol.toStringTag];return "undefined"===typeof b?a:"[object "+b+"]"},b(c,"toString",e);}});})(Object,Symbol);
    (function(a,b,c){function d(){return this}b[a]||(b[a]=function(){var b=0,c=this,g={next:function(){var a=c.length<=b;return a?{done:a}:{done:a,value:c[b++]}}};g[a]=d;return g});c[a]||(c[a]=function(){var b=String.fromCodePoint,c=this,g=0,h=c.length,k={next:function(){var a=h<=g,d=a?"":b(c.codePointAt(g));g+=d.length;return a?{done:a}:{done:a,value:d}}};k[a]=d;return k});})(Symbol.iterator,Array.prototype,String.prototype);/*

    Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    var Wa=Object.prototype.toString;Object.prototype.toString=function(){return void 0===this?"[object Undefined]":null===this?"[object Null]":Wa.call(this)};Object.keys=function(a){return Object.getOwnPropertyNames(a).filter(function(b){return (b=Object.getOwnPropertyDescriptor(a,b))&&b.enumerable})};var Xa=window.Symbol.iterator;
    String.prototype[Xa]&&String.prototype.codePointAt||(String.prototype[Xa]=function Ya(){var b,c=this;return Ba(Ya,function(d){1==d.a&&(b=0);if(3!=d.a)return b<c.length?d=ta(d,c[b]):(d.a=0,d=void 0),d;b++;d.a=2;})});Set.prototype[Xa]||(Set.prototype[Xa]=function Za(){var b,c=this,d;return Ba(Za,function(e){1==e.a&&(b=[],c.forEach(function(c){b.push(c);}),d=0);if(3!=e.a)return d<b.length?e=ta(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2;})});
    Map.prototype[Xa]||(Map.prototype[Xa]=function $a(){var b,c=this,d;return Ba($a,function(e){1==e.a&&(b=[],c.forEach(function(c,d){b.push([d,c]);}),d=0);if(3!=e.a)return d<b.length?e=ta(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2;})});/*

     Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    window.WebComponents=window.WebComponents||{flags:{}};var ab=document.querySelector('script[src*="webcomponents-bundle"]'),bb=/wc-(.+)/,w={};if(!w.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var b;a[0]&&(b=a[0].match(bb))&&(w[b[1]]=a[1]||!0);});if(ab)for(var cb=0,db=void 0;db=ab.attributes[cb];cb++)"src"!==db.name&&(w[db.name]=db.value||!0);if(w.log&&w.log.split){var eb=w.log.split(",");w.log={};eb.forEach(function(a){w.log[a]=!0;});}else w.log={};}
    window.WebComponents.flags=w;var fb=w.shadydom;fb&&(window.ShadyDOM=window.ShadyDOM||{},window.ShadyDOM.force=fb);var gb=w.register||w.ce;gb&&window.customElements&&(window.customElements.forcePolyfill=gb);/*

    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    function hb(){}hb.prototype.toJSON=function(){return {}};function z(a){a.__shady||(a.__shady=new hb);return a.__shady}function A(a){return a&&a.__shady}var B=window.ShadyDOM||{};B.La=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var ib=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");B.D=!!(ib&&ib.configurable&&ib.get);B.ka=B.force||!B.La;B.M=B.noPatch||!1;B.ta=B.preferPerformance;var jb=navigator.userAgent.match("Trident");B.ya=jb;function kb(a){return (a=A(a))&&void 0!==a.firstChild}function C(a){return "ShadyRoot"===a.Da}function lb(a){return (a=(a=A(a))&&a.root)&&mb(a)}
    var nb=Element.prototype,ob=nb.matches||nb.matchesSelector||nb.mozMatchesSelector||nb.msMatchesSelector||nb.oMatchesSelector||nb.webkitMatchesSelector,pb=document.createTextNode(""),qb=0,rb=[];(new MutationObserver(function(){for(;rb.length;)try{rb.shift()();}catch(a){throw pb.textContent=qb++,a;}})).observe(pb,{characterData:!0});function sb(a){rb.push(a);pb.textContent=qb++;}var tb=!!document.contains;function ub(a,b){for(;b;){if(b==a)return !0;b=b.__shady_parentNode;}return !1}
    function vb(a){for(var b=a.length-1;0<=b;b--){var c=a[b],d=c.getAttribute("id")||c.getAttribute("name");d&&"length"!==d&&isNaN(d)&&(a[d]=c);}a.item=function(b){return a[b]};a.namedItem=function(b){if("length"!==b&&isNaN(b)&&a[b])return a[b];for(var c=ja(a),d=c.next();!d.done;d=c.next())if(d=d.value,(d.getAttribute("id")||d.getAttribute("name"))==b)return d;return null};return a}function wb(a){var b=[];for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)b.push(a);return b}
    function xb(a){var b=[];for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b.push(a);return b}function D(a,b,c,d){c=void 0===c?"":c;for(var e in b){var f=b[e];if(!(d&&0<=d.indexOf(e))){f.configurable=!0;var g=c+e;if(f.value)a[g]=f.value;else try{Object.defineProperty(a,g,f);}catch(h){}}}}function E(a){var b={};Object.getOwnPropertyNames(a).forEach(function(c){b[c]=Object.getOwnPropertyDescriptor(a,c);});return b}var yb=[],zb;function Ab(a){zb||(zb=!0,sb(Bb));yb.push(a);}function Bb(){zb=!1;for(var a=!!yb.length;yb.length;)yb.shift()();return a}Bb.list=yb;function Cb(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.$=new Set;}function Db(a){a.a||(a.a=!0,sb(function(){a.flush();}));}Cb.prototype.flush=function(){if(this.a){this.a=!1;var a=this.takeRecords();a.length&&this.$.forEach(function(b){b(a);});}};Cb.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return []};
    function Hb(a,b){var c=z(a);c.V||(c.V=new Cb);c.V.$.add(b);var d=c.V;return {Ca:b,P:d,Ea:a,takeRecords:function(){return d.takeRecords()}}}function Ib(a){var b=a&&a.P;b&&(b.$.delete(a.Ca),b.$.size||(z(a.Ea).V=null));}
    function Jb(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})}var Kb=/[&\u00A0"]/g,Lb=/[&\u00A0<>]/g;function Mb(a){switch(a){case "&":return "&amp;";case "<":return "&lt;";case ">":return "&gt;";case '"':return "&quot;";case "\u00a0":return "&nbsp;"}}function Nb(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var Ob=Nb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),Pb=Nb("style script xmp iframe noembed noframes plaintext noscript".split(" "));
    function Qb(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g=void 0;e<f&&(g=d[e]);e++){a:{var h=g;var k=a,l=b;switch(h.nodeType){case Node.ELEMENT_NODE:k=h.localName;for(var n="<"+k,q=h.attributes,I=0,v;v=q[I];I++)n+=" "+v.name+'="'+v.value.replace(Kb,Mb)+'"';n+=">";h=Ob[k]?n:n+Qb(h,l)+"</"+k+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&Pb[k.localName]?h:h.replace(Lb,Mb);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),
    Error("not implemented");}}c+=h;}return c}var Rb=B.D,Sb={querySelector:function(a){return this.__shady_native_querySelector(a)},querySelectorAll:function(a){return this.__shady_native_querySelectorAll(a)}},Tb={};function Ub(a){Tb[a]=function(b){return b["__shady_native_"+a]};}function Vb(a,b){D(a,b,"__shady_native_");for(var c in b)Ub(c);}function F(a,b){b=void 0===b?[]:b;for(var c=0;c<b.length;c++){var d=b[c],e=Object.getOwnPropertyDescriptor(a,d);e&&(Object.defineProperty(a,"__shady_native_"+d,e),e.value?Sb[d]||(Sb[d]=e.value):Ub(d));}}
    var G=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),H=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1),Wb=document.implementation.createHTMLDocument("inert");function Xb(a){for(var b;b=a.__shady_native_firstChild;)a.__shady_native_removeChild(b);}var Yb=["firstElementChild","lastElementChild","children","childElementCount"],Zb=["querySelector","querySelectorAll"];
    function $b(){var a=["dispatchEvent","addEventListener","removeEventListener"];window.EventTarget?F(window.EventTarget.prototype,a):(F(Node.prototype,a),F(Window.prototype,a));Rb?F(Node.prototype,"parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")):Vb(Node.prototype,{parentNode:{get:function(){G.currentNode=this;return G.parentNode()}},firstChild:{get:function(){G.currentNode=this;return G.firstChild()}},lastChild:{get:function(){G.currentNode=
    this;return G.lastChild()}},previousSibling:{get:function(){G.currentNode=this;return G.previousSibling()}},nextSibling:{get:function(){G.currentNode=this;return G.nextSibling()}},childNodes:{get:function(){var a=[];G.currentNode=this;for(var c=G.firstChild();c;)a.push(c),c=G.nextSibling();return a}},parentElement:{get:function(){H.currentNode=this;return H.parentNode()}},textContent:{get:function(){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(var a=document.createTreeWalker(this,
    NodeFilter.SHOW_TEXT,null,!1),c="",d;d=a.nextNode();)c+=d.nodeValue;return c;default:return this.nodeValue}},set:function(a){if("undefined"===typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:Xb(this);(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_native_insertBefore(document.createTextNode(a),void 0);break;default:this.nodeValue=a;}}}});F(Node.prototype,"appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
    F(HTMLElement.prototype,["parentElement","contains"]);a={firstElementChild:{get:function(){H.currentNode=this;return H.firstChild()}},lastElementChild:{get:function(){H.currentNode=this;return H.lastChild()}},children:{get:function(){var a=[];H.currentNode=this;for(var c=H.firstChild();c;)a.push(c),c=H.nextSibling();return vb(a)}},childElementCount:{get:function(){return this.children?this.children.length:0}}};Rb?(F(Element.prototype,Yb),F(Element.prototype,["previousElementSibling","nextElementSibling",
    "innerHTML","className"]),F(HTMLElement.prototype,["children","innerHTML","className"])):(Vb(Element.prototype,a),Vb(Element.prototype,{previousElementSibling:{get:function(){H.currentNode=this;return H.previousSibling()}},nextElementSibling:{get:function(){H.currentNode=this;return H.nextSibling()}},innerHTML:{get:function(){return Qb(this,wb)},set:function(a){var b="template"===this.localName?this.content:this;Xb(b);var d=this.localName||"div";d=this.namespaceURI&&this.namespaceURI!==Wb.namespaceURI?
    Wb.createElementNS(this.namespaceURI,d):Wb.createElement(d);d.innerHTML=a;for(a="template"===this.localName?d.content:d;d=a.__shady_native_firstChild;)b.__shady_native_insertBefore(d,void 0);}},className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a);}}}));F(Element.prototype,"setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));F(Element.prototype,Zb);F(HTMLElement.prototype,["focus","blur"]);window.HTMLTemplateElement&&
    F(window.HTMLTemplateElement.prototype,["innerHTML"]);Rb?F(DocumentFragment.prototype,Yb):Vb(DocumentFragment.prototype,a);F(DocumentFragment.prototype,Zb);Rb?(F(Document.prototype,Yb),F(Document.prototype,["activeElement"])):Vb(Document.prototype,a);F(Document.prototype,["importNode","getElementById"]);F(Document.prototype,Zb);}var ac=E({get childNodes(){return this.__shady_childNodes},get firstChild(){return this.__shady_firstChild},get lastChild(){return this.__shady_lastChild},get childElementCount(){return this.__shady_childElementCount},get children(){return this.__shady_children},get firstElementChild(){return this.__shady_firstElementChild},get lastElementChild(){return this.__shady_lastElementChild},get shadowRoot(){return this.__shady_shadowRoot}}),bc=E({get textContent(){return this.__shady_textContent},set textContent(a){this.__shady_textContent=
    a;},get innerHTML(){return this.__shady_innerHTML},set innerHTML(a){return this.__shady_innerHTML=a}}),cc=E({get parentElement(){return this.__shady_parentElement},get parentNode(){return this.__shady_parentNode},get nextSibling(){return this.__shady_nextSibling},get previousSibling(){return this.__shady_previousSibling},get nextElementSibling(){return this.__shady_nextElementSibling},get previousElementSibling(){return this.__shady_previousElementSibling},get className(){return this.__shady_className},
    set className(a){return this.__shady_className=a}}),dc;for(dc in ac)ac[dc].enumerable=!1;for(var ec in bc)bc[ec].enumerable=!1;for(var fc in cc)cc[fc].enumerable=!1;var gc=B.D||B.M,hc=gc?function(){}:function(a){var b=z(a);b.Aa||(b.Aa=!0,D(a,cc));},ic=gc?function(){}:function(a){var b=z(a);b.za||(b.za=!0,D(a,ac),window.customElements&&!B.M||D(a,bc));};var jc="__eventWrappers"+Date.now(),kc=function(){var a=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return a?function(b){return a.get.call(b)}:null}(),lc=function(){function a(){}var b=!1,c={get capture(){b=!0;}};window.addEventListener("test",a,c);window.removeEventListener("test",a,c);return b}();function mc(a){if(a&&"object"===typeof a){var b=!!a.capture;var c=!!a.once;var d=!!a.passive;var e=a.O;}else b=!!a,d=c=!1;return {ua:e,capture:b,once:c,passive:d,sa:lc?a:b}}
    var nc={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,
    drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},oc={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};function pc(a){return a instanceof Node?a.__shady_getRootNode():a}
    function qc(a,b){var c=[],d=a;for(a=pc(a);d;)c.push(d),d.__shady_assignedSlot?d=d.__shady_assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d=d.host:d=d.__shady_parentNode;c[c.length-1]===document&&c.push(window);return c}function rc(a){a.__composedPath||(a.__composedPath=qc(a.target,!0));return a.__composedPath}function sc(a,b){if(!C)return a;a=qc(a,!0);for(var c=0,d,e=void 0,f,g=void 0;c<b.length;c++)if(d=b[c],f=pc(d),f!==e&&(g=a.indexOf(f),e=f),!C(f)||-1<g)return d}
    function tc(a){function b(b,d){b=new a(b,d);b.__composed=d&&!!d.composed;return b}b.__proto__=a;b.prototype=a.prototype;return b}var uc={focus:!0,blur:!0};function vc(a){return a.__target!==a.target||a.__relatedTarget!==a.relatedTarget}function wc(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!vc(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.__immediatePropagationStopped);d++);}
    function xc(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];wc(a,d,"capture");if(a.ga)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=A(d);f=f&&f.root;if(0===c||f&&f===e)if(wc(a,d,"bubble"),d!==window&&(e=d.__shady_getRootNode()),a.ga)break}}
    function yc(a,b,c,d,e,f){for(var g=0;g<a.length;g++){var h=a[g],k=h.type,l=h.capture,n=h.once,q=h.passive;if(b===h.node&&c===k&&d===l&&e===n&&f===q)return g}return -1}
    function zc(a,b,c){var d=mc(c),e=d.capture,f=d.once,g=d.passive,h=d.ua;d=d.sa;if(b){var k=typeof b;if("function"===k||"object"===k)if("object"!==k||b.handleEvent&&"function"===typeof b.handleEvent){if(oc[a])return this.__shady_native_addEventListener(a,b,d);var l=h||this;if(h=b[jc]){if(-1<yc(h,l,a,e,f,g))return}else b[jc]=[];h=function(d){f&&this.__shady_removeEventListener(a,b,c);d.__target||Ac(d);if(l!==this){var e=Object.getOwnPropertyDescriptor(d,"currentTarget");Object.defineProperty(d,"currentTarget",
    {get:function(){return l},configurable:!0});}d.__previousCurrentTarget=d.currentTarget;if(!C(l)&&"slot"!==l.localName||-1!=d.composedPath().indexOf(l))if(d.composed||-1<d.composedPath().indexOf(l))if(vc(d)&&d.target===d.relatedTarget)d.eventPhase===Event.BUBBLING_PHASE&&d.stopImmediatePropagation();else if(d.eventPhase===Event.CAPTURING_PHASE||d.bubbles||d.target===l||l instanceof Window){var g="function"===k?b.call(l,d):b.handleEvent&&b.handleEvent(d);l!==this&&(e?(Object.defineProperty(d,"currentTarget",
    e),e=null):delete d.currentTarget);return g}};b[jc].push({node:l,type:a,capture:e,once:f,passive:g,ab:h});uc[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][e?"capture":"bubble"].push(h)):this.__shady_native_addEventListener(a,h,d);}}}
    function Bc(a,b,c){if(b){var d=mc(c);c=d.capture;var e=d.once,f=d.passive,g=d.ua;d=d.sa;if(oc[a])return this.__shady_native_removeEventListener(a,b,d);var h=g||this;g=void 0;var k=null;try{k=b[jc];}catch(l){}k&&(e=yc(k,h,a,c,e,f),-1<e&&(g=k.splice(e,1)[0].ab,k.length||(b[jc]=void 0)));this.__shady_native_removeEventListener(a,g||b,d);g&&uc[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][c?"capture":"bubble"],b=a.indexOf(g),-1<b&&a.splice(b,1));}}
    function Cc(){for(var a in uc)window.__shady_native_addEventListener(a,function(a){a.__target||(Ac(a),xc(a));},!0);}
    var Dc=E({get composed(){void 0===this.__composed&&(kc?this.__composed="focusin"===this.type||"focusout"===this.type||kc(this):!1!==this.isTrusted&&(this.__composed=nc[this.type]));return this.__composed||!1},composedPath:function(){this.__composedPath||(this.__composedPath=qc(this.__target,this.composed));return this.__composedPath},get target(){return sc(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){if(!this.__relatedTarget)return null;this.__relatedTargetComposedPath||
    (this.__relatedTargetComposedPath=qc(this.__relatedTarget,!0));return sc(this.currentTarget||this.__previousCurrentTarget,this.__relatedTargetComposedPath)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.ga=!0;},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);this.ga=this.__immediatePropagationStopped=!0;}});
    function Ac(a){a.__target=a.target;a.__relatedTarget=a.relatedTarget;if(B.D){var b=Object.getPrototypeOf(a);if(!Object.hasOwnProperty(b,"__shady_patchedProto")){var c=Object.create(b);c.__shady_sourceProto=b;D(c,Dc);b.__shady_patchedProto=c;}a.__proto__=b.__shady_patchedProto;}else D(a,Dc);}var Ec=tc(Event),Fc=tc(CustomEvent),Gc=tc(MouseEvent);
    function Hc(){if(!kc&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var a=function(){var a=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.__shady_dispatchEvent(a);};Element.prototype.click?Element.prototype.click=a:HTMLElement.prototype.click&&(HTMLElement.prototype.click=a);}}var Ic=Object.getOwnPropertyNames(Document.prototype).filter(function(a){return "on"===a.substring(0,2)});function Jc(a,b){return {index:a,W:[],Z:b}}
    function Kc(a,b,c,d){var e=0,f=0,g=0,h=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k;}if(b==a.length&&d==c.length){h=a.length;for(var l=c.length,n=0;n<k-g&&Lc(a[--h],c[--l]);)n++;h=n;}e+=g;f+=g;b-=h;d-=h;if(0==b-e&&0==d-f)return [];if(e==b){for(b=Jc(e,0);f<d;)b.W.push(c[f++]);return [b]}if(f==d)return [Jc(e,b-e)];k=e;g=f;d=d-g+1;h=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(h),b[l][0]=l;for(l=0;l<h;l++)b[0][l]=l;for(l=1;l<d;l++)for(n=1;n<h;n++)if(a[k+n-1]===c[g+l-1])b[l][n]=
    b[l-1][n-1];else{var q=b[l-1][n]+1,I=b[l][n-1]+1;b[l][n]=q<I?q:I;}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)0==k?(a.push(2),g--):0==g?(a.push(3),k--):(h=b[k-1][g-1],l=b[k-1][g],n=b[k][g-1],q=l<n?l<h?l:h:n<h?n:h,q==h?(h==d?a.push(0):(a.push(1),d=h),k--,g--):q==l?(a.push(3),k--,d=l):(a.push(2),g--,d=n));a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=Jc(e,0));b.Z++;e++;b.W.push(c[f]);f++;break;case 2:b||(b=Jc(e,0));
    b.Z++;e++;break;case 3:b||(b=Jc(e,0)),b.W.push(c[f]),f++;}b&&k.push(b);return k}function Lc(a,b){return a===b}function Mc(a,b,c,d){hc(a);d=d||null;var e=z(a),f=d?z(d):null;e.previousSibling=d?f.previousSibling:b.__shady_lastChild;if(f=A(e.previousSibling))f.nextSibling=a;if(f=A(e.nextSibling=d))f.previousSibling=a;e.parentNode=b;d?d===c.firstChild&&(c.firstChild=a):(c.lastChild=a,c.firstChild||(c.firstChild=a));c.childNodes=null;}
    function Nc(a,b,c){ic(b);var d=z(b);void 0!==d.firstChild&&(d.childNodes=null);if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)Mc(a,b,d,c);else Mc(a,b,d,c);}
    function Oc(a,b){var c=z(a);b=z(b);a===b.firstChild&&(b.firstChild=c.nextSibling);a===b.lastChild&&(b.lastChild=c.previousSibling);a=c.previousSibling;var d=c.nextSibling;a&&(z(a).nextSibling=d);d&&(z(d).previousSibling=a);c.parentNode=c.previousSibling=c.nextSibling=void 0;void 0!==b.childNodes&&(b.childNodes=null);}
    function Pc(a,b){var c=z(a);if(b||void 0===c.firstChild){c.childNodes=null;var d=c.firstChild=a.__shady_native_firstChild;c.lastChild=a.__shady_native_lastChild;ic(a);c=d;for(d=void 0;c;c=c.__shady_native_nextSibling){var e=z(c);e.parentNode=b||a;e.nextSibling=c.__shady_native_nextSibling;e.previousSibling=d||null;d=c;hc(c);}}}var Qc=null;function Rc(){Qc||(Qc=window.ShadyCSS&&window.ShadyCSS.ScopingShim);return Qc||null}function Sc(a,b){var c=Rc();c&&c.unscopeNode(a,b);}function Tc(a,b){var c=Rc();if(!c)return !0;if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){c=!0;for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)c=c&&Tc(a,b);return c}return a.nodeType!==Node.ELEMENT_NODE?!0:c.currentScopeForNode(a)===b}function Uc(a){if(a.nodeType!==Node.ELEMENT_NODE)return "";var b=Rc();return b?b.currentScopeForNode(a):""}
    function Vc(a,b){if(a)for(a.nodeType===Node.ELEMENT_NODE&&b(a),a=a.__shady_firstChild;a;a=a.__shady_nextSibling)a.nodeType===Node.ELEMENT_NODE&&Vc(a,b);}var Wc=window.document,Xc=B.ta,Yc=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),Zc=Yc&&Yc.get;function $c(a){for(var b;b=a.__shady_firstChild;)a.__shady_removeChild(b);}function ad(a){var b=A(a);if(b&&void 0!==b.ca)for(b=a.__shady_firstChild;b;b=b.__shady_nextSibling)ad(b);if(a=A(a))a.ca=void 0;}function bd(a){var b=a;a&&"slot"===a.localName&&(b=(b=(b=A(a))&&b.T)&&b.length?b[0]:bd(a.__shady_nextSibling));return b}
    function cd(a,b,c){if(a=(a=A(a))&&a.V)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),Db(a);}
    var gd=E({get parentNode(){var a=A(this);a=a&&a.parentNode;return void 0!==a?a:this.__shady_native_parentNode},get firstChild(){var a=A(this);a=a&&a.firstChild;return void 0!==a?a:this.__shady_native_firstChild},get lastChild(){var a=A(this);a=a&&a.lastChild;return void 0!==a?a:this.__shady_native_lastChild},get nextSibling(){var a=A(this);a=a&&a.nextSibling;return void 0!==a?a:this.__shady_native_nextSibling},get previousSibling(){var a=A(this);a=a&&a.previousSibling;return void 0!==a?a:this.__shady_native_previousSibling},
    get childNodes(){if(kb(this)){var a=A(this);if(!a.childNodes){a.childNodes=[];for(var b=this.__shady_firstChild;b;b=b.__shady_nextSibling)a.childNodes.push(b);}var c=a.childNodes;}else c=this.__shady_native_childNodes;c.item=function(a){return c[a]};return c},get parentElement(){var a=A(this);(a=a&&a.parentNode)&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:this.__shady_native_parentElement},get isConnected(){if(Zc&&Zc.call(this))return !0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return !1;
    var a=this.ownerDocument;if(tb){if(a.__shady_native_contains(this))return !0}else if(a.documentElement&&a.documentElement.__shady_native_contains(this))return !0;for(a=this;a&&!(a instanceof Document);)a=a.__shady_parentNode||(C(a)?a.host:void 0);return !!(a&&a instanceof Document)},get textContent(){if(kb(this)){for(var a=[],b=this.__shady_firstChild;b;b=b.__shady_nextSibling)b.nodeType!==Node.COMMENT_NODE&&a.push(b.__shady_textContent);return a.join("")}return this.__shady_native_textContent},set textContent(a){if("undefined"===
    typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!kb(this)&&B.D){var b=this.__shady_firstChild;(b!=this.__shady_lastChild||b&&b.nodeType!=Node.TEXT_NODE)&&$c(this);this.__shady_native_textContent=a;}else $c(this),(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_insertBefore(document.createTextNode(a));break;default:this.nodeValue=a;}},insertBefore:function(a,b){if(this.ownerDocument!==Wc&&a.ownerDocument!==Wc)return this.__shady_native_insertBefore(a,
    b),a;if(a===this)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(b){var c=A(b);c=c&&c.parentNode;if(void 0!==c&&c!==this||void 0===c&&b.__shady_native_parentNode!==this)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(b===a)return a;var d=[],e=(c=dd(this))?c.host.localName:Uc(this),f=a.__shady_parentNode;if(f){var g=Uc(a);var h=!!c||!dd(a)||Xc&&void 0!==
    this.__noInsertionPoint;f.__shady_removeChild(a,h);}f=!0;var k=(!Xc||void 0===a.__noInsertionPoint&&void 0===this.__noInsertionPoint)&&!Tc(a,e),l=c&&!a.__noInsertionPoint&&(!Xc||a.nodeType===Node.DOCUMENT_FRAGMENT_NODE);if(l||k)k&&(g=g||Uc(a)),Vc(a,function(a){l&&"slot"===a.localName&&d.push(a);if(k){var b=g;Rc()&&(b&&Sc(a,b),(b=Rc())&&b.scopeNode(a,e));}});d.length&&(ed(c),c.c.push.apply(c.c,d instanceof Array?d:ka(ja(d))),J(c));kb(this)&&(Nc(a,this,b),c=A(this),lb(this)?(J(c.root),f=!1):c.root&&(f=
    !1));f?(c=C(this)?this.host:this,b?(b=bd(b),c.__shady_native_insertBefore(a,b)):c.__shady_native_appendChild(a)):a.ownerDocument!==this.ownerDocument&&this.ownerDocument.adoptNode(a);cd(this,a);return a},appendChild:function(a){if(this!=a||!C(a))return this.__shady_insertBefore(a)},removeChild:function(a,b){b=void 0===b?!1:b;if(this.ownerDocument!==Wc)return this.__shady_native_removeChild(a);if(a.__shady_parentNode!==this)throw Error("The node to be removed is not a child of this node: "+a);var c=
    dd(a),d=c&&fd(c,a),e=A(this);if(kb(this)&&(Oc(a,this),lb(this))){J(e.root);var f=!0;}if(Rc()&&!b&&c&&a.nodeType!==Node.TEXT_NODE){var g=Uc(a);Vc(a,function(a){Sc(a,g);});}ad(a);c&&((b=this&&"slot"===this.localName)&&(f=!0),(d||b)&&J(c));f||(f=C(this)?this.host:this,(!e.root&&"slot"!==a.localName||f===a.__shady_native_parentNode)&&f.__shady_native_removeChild(a));cd(this,null,a);return a},replaceChild:function(a,b){this.__shady_insertBefore(a,b);this.__shady_removeChild(b);return a},cloneNode:function(a){if("template"==
    this.localName)return this.__shady_native_cloneNode(a);var b=this.__shady_native_cloneNode(!1);if(a&&b.nodeType!==Node.ATTRIBUTE_NODE){a=this.__shady_firstChild;for(var c;a;a=a.__shady_nextSibling)c=a.__shady_cloneNode(!0),b.__shady_appendChild(c);}return b},getRootNode:function(a){if(this&&this.nodeType){var b=z(this),c=b.ca;void 0===c&&(C(this)?(c=this,b.ca=c):(c=(c=this.__shady_parentNode)?c.__shady_getRootNode(a):this,document.documentElement.__shady_native_contains(this)&&(b.ca=c)));return c}},
    contains:function(a){return ub(this,a)}});function hd(a,b,c){var d=[];id(a,b,c,d);return d}function id(a,b,c,d){for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling){var e;if(e=a.nodeType===Node.ELEMENT_NODE){e=a;var f=b,g=c,h=d,k=f(e);k&&h.push(e);g&&g(k)?e=k:(id(e,f,g,h),e=void 0);}if(e)break}}
    var jd=E({get firstElementChild(){var a=A(this);if(a&&void 0!==a.firstChild){for(a=this.__shady_firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_firstElementChild},get lastElementChild(){var a=A(this);if(a&&void 0!==a.lastChild){for(a=this.__shady_lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_lastElementChild},get children(){return kb(this)?vb(Array.prototype.filter.call(xb(this),
    function(a){return a.nodeType===Node.ELEMENT_NODE})):this.__shady_native_children},get childElementCount(){var a=this.__shady_children;return a?a.length:0}}),kd=E({querySelector:function(a){return hd(this,function(b){return ob.call(b,a)},function(a){return !!a})[0]||null},querySelectorAll:function(a,b){if(b){b=Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));var c=this.__shady_getRootNode();return b.filter(function(a){return a.__shady_getRootNode()==c})}return hd(this,function(b){return ob.call(b,
    a)})}}),ld=B.ta&&!B.M?Object.assign({},jd):jd;Object.assign(jd,kd);var md=E({getElementById:function(a){return ""===a?null:hd(this,function(b){return b.id==a},function(a){return !!a})[0]||null}});var nd=E({get activeElement(){var a=B.D?document.__shady_native_activeElement:document.activeElement;if(!a||!a.nodeType)return null;var b=!!C(this);if(!(this===document||b&&this.host!==a&&this.host.__shady_native_contains(a)))return null;for(b=dd(a);b&&b!==this;)a=b.host,b=dd(a);return this===document?b?null:a:b===this?a:null}});var od=document.implementation.createHTMLDocument("inert"),pd=E({get innerHTML(){return kb(this)?Qb("template"===this.localName?this.content:this,xb):this.__shady_native_innerHTML},set innerHTML(a){if("template"===this.localName)this.__shady_native_innerHTML=a;else{$c(this);var b=this.localName||"div";b=this.namespaceURI&&this.namespaceURI!==od.namespaceURI?od.createElementNS(this.namespaceURI,b):od.createElement(b);for(B.D?b.__shady_native_innerHTML=a:b.innerHTML=a;a=b.__shady_firstChild;)this.__shady_insertBefore(a);}}});var qd=E({addEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.O=c.O||this;this.host.__shady_addEventListener(a,b,c);},removeEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.O=c.O||this;this.host.__shady_removeEventListener(a,b,c);}});function rd(a,b){D(a,qd,b);D(a,nd,b);D(a,pd,b);D(a,jd,b);B.M&&!b?(D(a,gd,b),D(a,md,b)):B.D||(D(a,cc),D(a,ac),D(a,bc));}var sd={},td=B.deferConnectionCallbacks&&"loading"===document.readyState,ud;function vd(a){var b=[];do b.unshift(a);while(a=a.__shady_parentNode);return b}function wd(a,b,c){if(a!==sd)throw new TypeError("Illegal constructor");this.a=null;xd(this,b,c);}
    function xd(a,b,c){a.Da="ShadyRoot";a.host=b;a.mode=c&&c.mode;Pc(a.host);b=z(a.host);b.root=a;b.Ta="closed"!==a.mode?a:null;b=z(a);b.firstChild=b.lastChild=b.parentNode=b.nextSibling=b.previousSibling=null;if(B.preferPerformance)for(;b=a.host.__shady_native_firstChild;)a.host.__shady_native_removeChild(b);else J(a);}function J(a){a.R||(a.R=!0,Ab(function(){return yd(a)}));}
    function yd(a){var b;if(b=a.R){for(var c;a;)a:{a.R&&(c=a),b=a;a=b.host.__shady_getRootNode();if(C(a)&&(b=A(b.host))&&0<b.Y)break a;a=void 0;}b=c;}(c=b)&&c._renderSelf();}
    wd.prototype._renderSelf=function(){var a=td;td=!0;this.R=!1;if(this.a){zd(this);for(var b=0,c;b<this.a.length;b++){c=this.a[b];var d=A(c),e=d.assignedNodes;d.assignedNodes=[];d.T=[];if(d.qa=e)for(d=0;d<e.length;d++){var f=A(e[d]);f.ha=f.assignedSlot;f.assignedSlot===c&&(f.assignedSlot=null);}}for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)Ad(this,b);for(b=0;b<this.a.length;b++){c=this.a[b];e=A(c);if(!e.assignedNodes.length)for(d=c.__shady_firstChild;d;d=d.__shady_nextSibling)Ad(this,
    d,c);(d=(d=A(c.__shady_parentNode))&&d.root)&&(mb(d)||d.R)&&d._renderSelf();Bd(this,e.T,e.assignedNodes);if(d=e.qa){for(f=0;f<d.length;f++)A(d[f]).ha=null;e.qa=null;d.length>e.assignedNodes.length&&(e.ja=!0);}e.ja&&(e.ja=!1,Cd(this,c));}c=this.a;b=[];for(e=0;e<c.length;e++)d=c[e].__shady_parentNode,(f=A(d))&&f.root||!(0>b.indexOf(d))||b.push(d);for(c=0;c<b.length;c++){f=b[c];e=f===this?this.host:f;d=[];for(f=f.__shady_firstChild;f;f=f.__shady_nextSibling)if("slot"==f.localName)for(var g=A(f).T,h=0;h<
    g.length;h++)d.push(g[h]);else d.push(f);f=wb(e);g=Kc(d,d.length,f,f.length);for(var k=h=0,l=void 0;h<g.length&&(l=g[h]);h++){for(var n=0,q=void 0;n<l.W.length&&(q=l.W[n]);n++)q.__shady_native_parentNode===e&&e.__shady_native_removeChild(q),f.splice(l.index+k,1);k-=l.Z;}k=0;for(l=void 0;k<g.length&&(l=g[k]);k++)for(h=f[l.index],n=l.index;n<l.index+l.Z;n++)q=d[n],e.__shady_native_insertBefore(q,h),f.splice(n,0,q);}}if(!B.preferPerformance&&!this.pa)for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)c=
    A(b),b.__shady_native_parentNode!==this.host||"slot"!==b.localName&&c.assignedSlot||this.host.__shady_native_removeChild(b);this.pa=!0;td=a;ud&&ud();};function Ad(a,b,c){var d=z(b),e=d.ha;d.ha=null;c||(c=(a=a.b[b.__shady_slot||"__catchall"])&&a[0]);c?(z(c).assignedNodes.push(b),d.assignedSlot=c):d.assignedSlot=void 0;e!==d.assignedSlot&&d.assignedSlot&&(z(d.assignedSlot).ja=!0);}
    function Bd(a,b,c){for(var d=0,e=void 0;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=A(e).assignedNodes;f&&f.length&&Bd(a,b,f);}else b.push(c[d]);}function Cd(a,b){b.__shady_native_dispatchEvent(new Event("slotchange"));b=A(b);b.assignedSlot&&Cd(a,b.assignedSlot);}function ed(a){a.c=a.c||[];a.a=a.a||[];a.b=a.b||{};}
    function zd(a){if(a.c&&a.c.length){for(var b=a.c,c,d=0;d<b.length;d++){var e=b[d];Pc(e);var f=e.__shady_parentNode;Pc(f);f=A(f);f.Y=(f.Y||0)+1;f=Dd(e);a.b[f]?(c=c||{},c[f]=!0,a.b[f].push(e)):a.b[f]=[e];a.a.push(e);}if(c)for(var g in c)a.b[g]=Ed(a.b[g]);a.c=[];}}function Dd(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.Ba=b}
    function Ed(a){return a.sort(function(a,c){a=vd(a);for(var b=vd(c),e=0;e<a.length;e++){c=a[e];var f=b[e];if(c!==f)return a=xb(c.__shady_parentNode),a.indexOf(c)-a.indexOf(f)}})}
    function fd(a,b){if(a.a){zd(a);var c=a.b,d;for(d in c)for(var e=c[d],f=0;f<e.length;f++){var g=e[f];if(ub(b,g)){e.splice(f,1);var h=a.a.indexOf(g);0<=h&&(a.a.splice(h,1),(h=A(g.__shady_parentNode))&&h.Y&&h.Y--);f--;g=A(g);if(h=g.T)for(var k=0;k<h.length;k++){var l=h[k],n=l.__shady_native_parentNode;n&&n.__shady_native_removeChild(l);}g.T=[];g.assignedNodes=[];h=!0;}}return h}}function mb(a){zd(a);return !(!a.a||!a.a.length)}
    (function(a){a.__proto__=DocumentFragment.prototype;rd(a,"__shady_");rd(a);Object.defineProperties(a,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}});["localName","namespaceURI","prefix"].forEach(function(b){Object.defineProperty(a,b,{value:void 0,configurable:!0});});["ownerDocument","baseURI","isConnected"].forEach(function(b){Object.defineProperty(a,b,{get:function(){return this.host[b]},
    configurable:!0});});})(wd.prototype);
    if(window.customElements&&B.ka&&!B.preferPerformance){var Fd=new Map;ud=function(){var a=[];Fd.forEach(function(b,c){a.push([c,b]);});Fd.clear();for(var b=0;b<a.length;b++){var c=a[b][0];a[b][1]?c.__shadydom_connectedCallback():c.__shadydom_disconnectedCallback();}};td&&document.addEventListener("readystatechange",function(){td=!1;ud();},{once:!0});var Gd=function(a,b,c){var d=0,e="__isConnected"+d++;if(b||c)a.prototype.connectedCallback=a.prototype.__shadydom_connectedCallback=function(){td?Fd.set(this,
    !0):this[e]||(this[e]=!0,b&&b.call(this));},a.prototype.disconnectedCallback=a.prototype.__shadydom_disconnectedCallback=function(){td?this.isConnected||Fd.set(this,!1):this[e]&&(this[e]=!1,c&&c.call(this));};return a},Hd=window.customElements.define,define=function(a,b){var c=b.prototype.connectedCallback,d=b.prototype.disconnectedCallback;Hd.call(window.customElements,a,Gd(b,c,d));b.prototype.connectedCallback=c;b.prototype.disconnectedCallback=d;};window.customElements.define=define;Object.defineProperty(window.CustomElementRegistry.prototype,
    "define",{value:define,configurable:!0});}function dd(a){a=a.__shady_getRootNode();if(C(a))return a}function Id(a){this.node=a;}r=Id.prototype;r.addEventListener=function(a,b,c){return this.node.__shady_addEventListener(a,b,c)};r.removeEventListener=function(a,b,c){return this.node.__shady_removeEventListener(a,b,c)};r.appendChild=function(a){return this.node.__shady_appendChild(a)};r.insertBefore=function(a,b){return this.node.__shady_insertBefore(a,b)};r.removeChild=function(a){return this.node.__shady_removeChild(a)};r.replaceChild=function(a,b){return this.node.__shady_replaceChild(a,b)};
    r.cloneNode=function(a){return this.node.__shady_cloneNode(a)};r.getRootNode=function(a){return this.node.__shady_getRootNode(a)};r.contains=function(a){return this.node.__shady_contains(a)};r.dispatchEvent=function(a){return this.node.__shady_dispatchEvent(a)};r.setAttribute=function(a,b){this.node.__shady_setAttribute(a,b);};r.getAttribute=function(a){return this.node.__shady_native_getAttribute(a)};r.hasAttribute=function(a){return this.node.__shady_native_hasAttribute(a)};r.removeAttribute=function(a){this.node.__shady_removeAttribute(a);};
    r.attachShadow=function(a){return this.node.__shady_attachShadow(a)};r.focus=function(){this.node.__shady_native_focus();};r.blur=function(){this.node.__shady_blur();};r.importNode=function(a,b){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_importNode(a,b)};r.getElementById=function(a){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_getElementById(a)};r.querySelector=function(a){return this.node.__shady_querySelector(a)};
    r.querySelectorAll=function(a,b){return this.node.__shady_querySelectorAll(a,b)};r.assignedNodes=function(a){if("slot"===this.node.localName)return this.node.__shady_assignedNodes(a)};
    t.Object.defineProperties(Id.prototype,{activeElement:{configurable:!0,enumerable:!0,get:function(){if(C(this.node)||this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_activeElement}},_activeElement:{configurable:!0,enumerable:!0,get:function(){return this.activeElement}},host:{configurable:!0,enumerable:!0,get:function(){if(C(this.node))return this.node.host}},parentNode:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_parentNode}},firstChild:{configurable:!0,
    enumerable:!0,get:function(){return this.node.__shady_firstChild}},lastChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastChild}},nextSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextSibling}},previousSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousSibling}},childNodes:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childNodes}},parentElement:{configurable:!0,enumerable:!0,
    get:function(){return this.node.__shady_parentElement}},firstElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_firstElementChild}},lastElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastElementChild}},nextElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextElementSibling}},previousElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousElementSibling}},
    children:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_children}},childElementCount:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childElementCount}},shadowRoot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_shadowRoot}},assignedSlot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_assignedSlot}},isConnected:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_isConnected}},innerHTML:{configurable:!0,
    enumerable:!0,get:function(){return this.node.__shady_innerHTML},set:function(a){this.node.__shady_innerHTML=a;}},textContent:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_textContent},set:function(a){this.node.__shady_textContent=a;}},slot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_slot},set:function(a){this.node.__shady_slot=a;}},className:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_className},set:function(a){return this.node.__shady_className=
    a}}});Ic.forEach(function(a){Object.defineProperty(Id.prototype,a,{get:function(){return this.node["__shady_"+a]},set:function(b){this.node["__shady_"+a]=b;},configurable:!0});});var Jd=new WeakMap;function Kd(a){if(C(a)||a instanceof Id)return a;var b=Jd.get(a);b||(b=new Id(a),Jd.set(a,b));return b}var Ld=E({dispatchEvent:function(a){Bb();return this.__shady_native_dispatchEvent(a)},addEventListener:zc,removeEventListener:Bc});var Md=E({get assignedSlot(){var a=this.__shady_parentNode;(a=a&&a.__shady_shadowRoot)&&yd(a);return (a=A(this))&&a.assignedSlot||null}});var Nd=window.document;function Od(a,b){if("slot"===b)a=a.__shady_parentNode,lb(a)&&J(A(a).root);else if("slot"===a.localName&&"name"===b&&(b=dd(a))){if(b.a){zd(b);var c=a.Ba,d=Dd(a);if(d!==c){c=b.b[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.b[d]||(b.b[d]=[]);c.push(a);1<c.length&&(b.b[d]=Ed(c));}}J(b);}}
    var Pd=E({get previousElementSibling(){var a=A(this);if(a&&void 0!==a.previousSibling){for(a=this.__shady_previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_previousElementSibling},get nextElementSibling(){var a=A(this);if(a&&void 0!==a.nextSibling){for(a=this.__shady_nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_nextElementSibling},get slot(){return this.getAttribute("slot")},
    set slot(a){this.__shady_setAttribute("slot",a);},get shadowRoot(){var a=A(this);return a&&a.Ta||null},get className(){return this.getAttribute("class")||""},set className(a){this.__shady_setAttribute("class",a);},setAttribute:function(a,b){if(this.ownerDocument!==Nd)this.__shady_native_setAttribute(a,b);else{var c;(c=Rc())&&"class"===a?(c.setElementClass(this,b),c=!0):c=!1;c||(this.__shady_native_setAttribute(a,b),Od(this,a));}},removeAttribute:function(a){this.__shady_native_removeAttribute(a);Od(this,
    a);},attachShadow:function(a){if(!this)throw Error("Must provide a host.");if(!a)throw Error("Not enough arguments.");if(a.shadyUpgradeFragment&&!B.ya){var b=a.shadyUpgradeFragment;b.__proto__=ShadowRoot.prototype;xd(b,this,a);Pc(b,b);a=b.__noInsertionPoint?null:b.querySelectorAll("slot");b.__noInsertionPoint=void 0;if(a&&a.length){var c=b;ed(c);c.c.push.apply(c.c,a instanceof Array?a:ka(ja(a)));J(b);}b.host.__shady_native_appendChild(b);}else b=new wd(sd,this,a);return b}});var Qd=E({blur:function(){var a=A(this);(a=(a=a&&a.root)&&a.activeElement)?a.__shady_blur():this.__shady_native_blur();}});Ic.forEach(function(a){Qd[a]={set:function(b){var c=z(this),d=a.substring(2);c.N||(c.N={});c.N[a]&&this.removeEventListener(d,c.N[a]);this.__shady_addEventListener(d,b);c.N[a]=b;},get:function(){var b=A(this);return b&&b.N&&b.N[a]},configurable:!0};});var Rd=E({assignedNodes:function(a){if("slot"===this.localName){var b=this.__shady_getRootNode();b&&C(b)&&yd(b);return (b=A(this))?(a&&a.flatten?b.T:b.assignedNodes)||[]:[]}},addEventListener:function(a,b,c){if("slot"!==this.localName||"slotchange"===a)zc.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.O=this;d.__shady_addEventListener(a,b,c);}},removeEventListener:function(a,
    b,c){if("slot"!==this.localName||"slotchange"===a)Bc.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.O=this;d.__shady_removeEventListener(a,b,c);}}});var Sd=window.document,Td=E({importNode:function(a,b){if(a.ownerDocument!==Sd||"template"===a.localName)return this.__shady_native_importNode(a,b);var c=this.__shady_native_importNode(a,!1);if(b)for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b=this.__shady_importNode(a,!0),c.__shady_appendChild(b);return c}});var Ud=E({addEventListener:zc.bind(window),removeEventListener:Bc.bind(window)});var Vd={};Object.getOwnPropertyDescriptor(HTMLElement.prototype,"parentElement")&&(Vd.parentElement=gd.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"contains")&&(Vd.contains=gd.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"children")&&(Vd.children=jd.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML")&&(Vd.innerHTML=pd.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"className")&&(Vd.className=Pd.className);
    var Wd={EventTarget:[Ld],Node:[gd,window.EventTarget?null:Ld],Text:[Md],Element:[Pd,jd,Md,!B.D||"innerHTML"in Element.prototype?pd:null,window.HTMLSlotElement?null:Rd],HTMLElement:[Qd,Vd],HTMLSlotElement:[Rd],DocumentFragment:[ld,md],Document:[Td,ld,md,nd],Window:[Ud]},Xd=B.D?null:["innerHTML","textContent"];function Yd(a){var b=a?null:Xd,c={},d;for(d in Wd)c.ea=window[d]&&window[d].prototype,Wd[d].forEach(function(c){return function(d){return c.ea&&d&&D(c.ea,d,a,b)}}(c)),c={ea:c.ea};}if(B.ka){var ShadyDOM={inUse:B.ka,patch:function(a){ic(a);hc(a);return a},isShadyRoot:C,enqueue:Ab,flush:Bb,flushInitial:function(a){!a.pa&&a.R&&yd(a);},settings:B,filterMutations:Jb,observeChildren:Hb,unobserveChildren:Ib,deferConnectionCallbacks:B.deferConnectionCallbacks,preferPerformance:B.preferPerformance,handlesDynamicScoping:!0,wrap:B.M?Kd:function(a){return a},Wrapper:Id,composedPath:rc,noPatch:B.M,nativeMethods:Sb,nativeTree:Tb};window.ShadyDOM=ShadyDOM;$b();Yd("__shady_");Object.defineProperty(document,
    "_activeElement",nd.activeElement);D(Window.prototype,Ud,"__shady_");B.M||(Yd(),Hc());Cc();window.Event=Ec;window.CustomEvent=Fc;window.MouseEvent=Gc;window.ShadowRoot=wd;}var Zd=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function $d(a){var b=Zd.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return !b&&a}function K(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return !(!a||!(a.__CE_isImportDocument||a instanceof Document))}
    function ae(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
    function be(a,b,c){c=void 0===c?new Set:c;for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)be(d,b,c);d=ae(a,e);continue}else if("template"===f){d=ae(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)be(e,b,c);}d=d.firstChild?d.firstChild:ae(a,d);}}function L(a,b,c){a[b]=c;}function ce(){this.a=new Map;this.u=new Map;this.c=[];this.f=[];this.b=!1;}function de(a,b,c){a.a.set(b,c);a.u.set(c.constructorFunction,c);}function ee(a,b){a.b=!0;a.c.push(b);}function fe(a,b){a.b=!0;a.f.push(b);}function ge(a,b){a.b&&be(b,function(b){return he(a,b)});}function he(a,b){if(a.b&&!b.__CE_patched){b.__CE_patched=!0;for(var c=0;c<a.c.length;c++)a.c[c](b);for(c=0;c<a.f.length;c++)a.f[c](b);}}
    function M(a,b){var c=[];be(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):ie(a,d);}}function N(a,b){var c=[];be(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d);}}
    function O(a,b,c){c=void 0===c?{}:c;var d=c.$a||new Set,e=c.fa||function(b){return ie(a,b)},f=[];be(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var c=b.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var c=b.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);O(a,c,{$a:f,fa:e});}});}else f.push(b);},d);
    if(a.b)for(b=0;b<f.length;b++)he(a,f[b]);for(b=0;b<f.length;b++)e(f[b]);}
    function ie(a,b){if(void 0===b.__CE_state){var c=b.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=a.a.get(b.localName)){c.constructionStack.push(b);var d=c.constructorFunction;try{try{if(new d!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop();}}catch(g){throw b.__CE_state=2,g;}b.__CE_state=1;b.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=
    c[d],f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null);}K(b)&&a.connectedCallback(b);}}}ce.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a);};ce.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a);};
    ce.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e);};function je(a){var b=document;this.b=a;this.a=b;this.P=void 0;O(this.b,this.a);"loading"===this.a.readyState&&(this.P=new MutationObserver(this.c.bind(this)),this.P.observe(this.a,{childList:!0,subtree:!0}));}function ke(a){a.P&&a.P.disconnect();}je.prototype.c=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||ke(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)O(this.b,c[d]);};function le(){var a=this;this.a=this.w=void 0;this.b=new Promise(function(b){a.a=b;a.w&&b(a.w);});}le.prototype.resolve=function(a){if(this.w)throw Error("Already resolved.");this.w=a;this.a&&this.a(a);};function P(a){this.c=!1;this.a=a;this.F=new Map;this.f=function(a){return a()};this.b=!1;this.u=[];this.aa=new je(a);}r=P.prototype;
    r.wa=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!$d(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var d=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");
    return b},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var g=d("disconnectedCallback");var h=d("adoptedCallback");var k=d("attributeChangedCallback");var l=b.observedAttributes||[];}catch(n){return}finally{this.c=!1;}b={localName:a,constructorFunction:b,connectedCallback:f,disconnectedCallback:g,adoptedCallback:h,attributeChangedCallback:k,observedAttributes:l,constructionStack:[]};de(this.a,
    a,b);this.u.push(b);this.b||(this.b=!0,this.f(function(){return me(c)}));};r.fa=function(a){O(this.a,a);};
    function me(a){if(!1!==a.b){a.b=!1;for(var b=a.u,c=[],d=new Map,e=0;e<b.length;e++)d.set(b[e].localName,[]);O(a.a,document,{fa:function(b){if(void 0===b.__CE_state){var e=b.localName,f=d.get(e);f?f.push(b):a.a.a.get(e)&&c.push(b);}}});for(e=0;e<c.length;e++)ie(a.a,c[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=d.get(f.localName);for(var g=0;g<f.length;g++)ie(a.a,f[g]);(e=a.F.get(e))&&e.resolve(void 0);}}}r.get=function(a){if(a=this.a.a.get(a))return a.constructorFunction};
    r.xa=function(a){if(!$d(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.F.get(a);if(b)return b.b;b=new le;this.F.set(a,b);this.a.a.get(a)&&!this.u.some(function(b){return b.localName===a})&&b.resolve(void 0);return b.b};r.Ra=function(a){ke(this.aa);var b=this.f;this.f=function(c){return a(function(){return b(c)})};};window.CustomElementRegistry=P;P.prototype.define=P.prototype.wa;P.prototype.upgrade=P.prototype.fa;P.prototype.get=P.prototype.get;
    P.prototype.whenDefined=P.prototype.xa;P.prototype.polyfillWrapFlushCallback=P.prototype.Ra;var ne=window.Document.prototype.createElement,oe=window.Document.prototype.createElementNS,pe=window.Document.prototype.importNode,qe=window.Document.prototype.prepend,re=window.Document.prototype.append,se=window.DocumentFragment.prototype.prepend,te=window.DocumentFragment.prototype.append,ue=window.Node.prototype.cloneNode,ve=window.Node.prototype.appendChild,we=window.Node.prototype.insertBefore,xe=window.Node.prototype.removeChild,ye=window.Node.prototype.replaceChild,ze=Object.getOwnPropertyDescriptor(window.Node.prototype,
    "textContent"),Ae=window.Element.prototype.attachShadow,Be=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Ce=window.Element.prototype.getAttribute,De=window.Element.prototype.setAttribute,Ee=window.Element.prototype.removeAttribute,Fe=window.Element.prototype.getAttributeNS,Ge=window.Element.prototype.setAttributeNS,He=window.Element.prototype.removeAttributeNS,Ie=window.Element.prototype.insertAdjacentElement,Je=window.Element.prototype.insertAdjacentHTML,Ke=window.Element.prototype.prepend,
    Le=window.Element.prototype.append,Me=window.Element.prototype.before,Ne=window.Element.prototype.after,Oe=window.Element.prototype.replaceWith,Pe=window.Element.prototype.remove,Qe=window.HTMLElement,Re=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),Se=window.HTMLElement.prototype.insertAdjacentElement,Te=window.HTMLElement.prototype.insertAdjacentHTML;var Ue=new function(){};function Ve(){var a=We;window.HTMLElement=function(){function b(){var b=this.constructor,d=a.u.get(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=ne.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,he(a,e),e;d=e.length-1;var f=e[d];if(f===Ue)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
    e[d]=Ue;Object.setPrototypeOf(f,b.prototype);he(a,f);return f}b.prototype=Qe.prototype;Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});return b}();}function Xe(a,b,c){function d(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var f=[],l=0;l<d.length;l++){var n=d[l];n instanceof Element&&K(n)&&f.push(n);if(n instanceof DocumentFragment)for(n=n.firstChild;n;n=n.nextSibling)e.push(n);else e.push(n);}b.apply(this,d);for(d=0;d<f.length;d++)N(a,f[d]);if(K(this))for(d=0;d<e.length;d++)f=e[d],f instanceof Element&&M(a,f);}}void 0!==c.da&&(b.prepend=d(c.da));void 0!==c.append&&(b.append=d(c.append));}function Ye(){var a=We;L(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=a.a.get(b);if(c)return new c.constructorFunction}b=ne.call(this,b);he(a,b);return b});L(Document.prototype,"importNode",function(b,c){b=pe.call(this,b,!!c);this.__CE_hasRegistry?O(a,b):ge(a,b);return b});L(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.a.get(c);if(d)return new d.constructorFunction}b=oe.call(this,
    b,c);he(a,b);return b});Xe(a,Document.prototype,{da:qe,append:re});}function Ze(){function a(a,d){Object.defineProperty(a,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,a);else{var c=void 0;if(this.firstChild){var e=this.childNodes,h=e.length;if(0<h&&K(this)){c=Array(h);for(var k=0;k<h;k++)c[k]=e[k];}}d.set.call(this,a);if(c)for(a=0;a<c.length;a++)N(b,c[a]);}}});}var b=We;L(Node.prototype,"insertBefore",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);
    a=we.call(this,a,d);if(K(this))for(d=0;d<c.length;d++)M(b,c[d]);return a}c=K(a);d=we.call(this,a,d);c&&N(b,a);K(this)&&M(b,a);return d});L(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=ve.call(this,a);if(K(this))for(var e=0;e<c.length;e++)M(b,c[e]);return a}c=K(a);e=ve.call(this,a);c&&N(b,a);K(this)&&M(b,a);return e});L(Node.prototype,"cloneNode",function(a){a=ue.call(this,!!a);this.ownerDocument.__CE_hasRegistry?O(b,a):
    ge(b,a);return a});L(Node.prototype,"removeChild",function(a){var c=K(a),e=xe.call(this,a);c&&N(b,a);return e});L(Node.prototype,"replaceChild",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=ye.call(this,a,d);if(K(this))for(N(b,d),d=0;d<c.length;d++)M(b,c[d]);return a}c=K(a);var f=ye.call(this,a,d),g=K(this);g&&N(b,d);c&&N(b,a);g&&M(b,a);return f});ze&&ze.get?a(Node.prototype,ze):ee(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=
    [],b=0;b<this.childNodes.length;b++){var c=this.childNodes[b];c.nodeType!==Node.COMMENT_NODE&&a.push(c.textContent);}return a.join("")},set:function(a){for(;this.firstChild;)xe.call(this,this.firstChild);null!=a&&""!==a&&ve.call(this,document.createTextNode(a));}});});}function $e(a){function b(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var h=[],k=0;k<d.length;k++){var l=d[k];l instanceof Element&&K(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)e.push(l);else e.push(l);}b.apply(this,d);for(d=0;d<h.length;d++)N(a,h[d]);if(K(this))for(d=0;d<e.length;d++)h=e[d],h instanceof Element&&M(a,h);}}var c=Element.prototype;void 0!==Me&&(c.before=b(Me));void 0!==Me&&(c.after=b(Ne));void 0!==Oe&&
    L(c,"replaceWith",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var g=[],h=0;h<c.length;h++){var k=c[h];k instanceof Element&&K(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)d.push(k);else d.push(k);}h=K(this);Oe.apply(this,c);for(c=0;c<g.length;c++)N(a,g[c]);if(h)for(N(a,this),c=0;c<d.length;c++)g=d[c],g instanceof Element&&M(a,g);});void 0!==Pe&&L(c,"remove",function(){var b=K(this);Pe.call(this);b&&N(a,this);});}function af(){function a(a,b){Object.defineProperty(a,"innerHTML",{enumerable:b.enumerable,configurable:!0,get:b.get,set:function(a){var c=this,e=void 0;K(this)&&(e=[],be(this,function(a){a!==c&&e.push(a);}));b.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var g=e[f];1===g.__CE_state&&d.disconnectedCallback(g);}this.ownerDocument.__CE_hasRegistry?O(d,this):ge(d,this);return a}});}function b(a,b){L(a,"insertAdjacentElement",function(a,c){var e=K(c);a=b.call(this,a,c);e&&N(d,c);K(a)&&M(d,c);return a});}
    function c(a,b){function c(a,b){for(var c=[];a!==b;a=a.nextSibling)c.push(a);for(b=0;b<c.length;b++)O(d,c[b]);}L(a,"insertAdjacentHTML",function(a,d){a=a.toLowerCase();if("beforebegin"===a){var e=this.previousSibling;b.call(this,a,d);c(e||this.parentNode.firstChild,this);}else if("afterbegin"===a)e=this.firstChild,b.call(this,a,d),c(this.firstChild,e);else if("beforeend"===a)e=this.lastChild,b.call(this,a,d),c(e||this.firstChild,null);else if("afterend"===a)e=this.nextSibling,b.call(this,a,d),c(this.nextSibling,
    e);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");});}var d=We;Ae&&L(Element.prototype,"attachShadow",function(a){a=Ae.call(this,a);var b=d;if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var c=0;c<b.c.length;c++)b.c[c](a);}return this.__CE_shadowRoot=a});Be&&Be.get?a(Element.prototype,Be):Re&&Re.get?a(HTMLElement.prototype,Re):fe(d,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return ue.call(this,
    !0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:this,d=oe.call(document,this.namespaceURI,this.localName);for(d.innerHTML=a;0<c.childNodes.length;)xe.call(c,c.childNodes[0]);for(a=b?d.content:d;0<a.childNodes.length;)ve.call(c,a.childNodes[0]);}});});L(Element.prototype,"setAttribute",function(a,b){if(1!==this.__CE_state)return De.call(this,a,b);var c=Ce.call(this,a);De.call(this,a,b);b=Ce.call(this,a);d.attributeChangedCallback(this,a,c,b,null);});L(Element.prototype,
    "setAttributeNS",function(a,b,c){if(1!==this.__CE_state)return Ge.call(this,a,b,c);var e=Fe.call(this,a,b);Ge.call(this,a,b,c);c=Fe.call(this,a,b);d.attributeChangedCallback(this,b,e,c,a);});L(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return Ee.call(this,a);var b=Ce.call(this,a);Ee.call(this,a);null!==b&&d.attributeChangedCallback(this,a,b,null,null);});L(Element.prototype,"removeAttributeNS",function(a,b){if(1!==this.__CE_state)return He.call(this,a,b);var c=Fe.call(this,
    a,b);He.call(this,a,b);var e=Fe.call(this,a,b);c!==e&&d.attributeChangedCallback(this,b,c,e,a);});Se?b(HTMLElement.prototype,Se):Ie?b(Element.prototype,Ie):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");Te?c(HTMLElement.prototype,Te):Je?c(Element.prototype,Je):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");Xe(d,Element.prototype,{da:Ke,append:Le});$e(d);}var bf=window.customElements;if(!bf||bf.forcePolyfill||"function"!=typeof bf.define||"function"!=typeof bf.get){var We=new ce;Ve();Ye();Xe(We,DocumentFragment.prototype,{da:se,append:te});Ze();af();document.__CE_hasRegistry=!0;var customElements=new P(We);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements});}function cf(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName="";}
    function df(a){a=a.replace(ef,"").replace(ff,"");var b=gf,c=a,d=new cf;d.start=0;d.end=c.length;for(var e=d,f=0,g=c.length;f<g;f++)if("{"===c[f]){e.rules||(e.rules=[]);var h=e,k=h.rules[h.rules.length-1]||null;e=new cf;e.start=f+1;e.parent=h;e.previous=k;h.rules.push(e);}else"}"===c[f]&&(e.end=f+1,e=e.parent||d);return b(d,a)}
    function gf(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=hf(c),c=c.replace(jf," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=kf:c.match(lf)&&(a.type=mf,a.keyframesName=a.selector.split(jf).pop()):a.type=0===c.indexOf("--")?nf:of);if(c=a.rules)for(var d=0,e=c.length,f=void 0;d<e&&(f=c[d]);d++)gf(f,
    b);return a}function hf(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,c){a=c;for(c=6-a.length;c--;)a="0"+a;return "\\"+a})}
    function pf(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=e.length,h=void 0;f<g&&(h=e[f]);f++)d=pf(h,b,d);}else b?b=a.cssText:(b=a.cssText,b=b.replace(qf,"").replace(rf,""),b=b.replace(uf,"").replace(vf,"")),(d=b.trim())&&(d="  "+d+"\n");}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
    var of=1,mf=7,kf=4,nf=1E3,ef=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,ff=/@import[^;]*;/gim,qf=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,rf=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,uf=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,vf=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,lf=/^@[^\s]*keyframes/,jf=/\s+/g;var R=!(window.ShadyDOM&&window.ShadyDOM.inUse),wf;function xf(a){wf=a&&a.shimcssproperties?!1:R||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"));}var yf;window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(yf=window.ShadyCSS.cssBuild);var zf=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);
    window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?wf=window.ShadyCSS.nativeCss:window.ShadyCSS?(xf(window.ShadyCSS),window.ShadyCSS=void 0):xf(window.WebComponents&&window.WebComponents.flags);var S=wf,Af=yf;var Bf=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Cf=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Df=/(--[\w-]+)\s*([:,;)]|$)/gi,Ef=/(animation\s*:)|(animation-name\s*:)/,Ff=/@media\s(.*)/,Gf=/\{[^}]*\}/g;var Hf=new Set;function If(a,b){if(!a)return "";"string"===typeof a&&(a=df(a));b&&Jf(a,b);return pf(a,S)}function Kf(a){!a.__cssRules&&a.textContent&&(a.__cssRules=df(a.textContent));return a.__cssRules||null}function Lf(a){return !!a.parent&&a.parent.type===mf}function Jf(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===kf){var g=a.selector.match(Ff);g&&(window.matchMedia(g[1]).matches||(e=!0));}f===of?b(a):c&&f===mf?c(a):f===nf&&(e=!0);if((a=a.rules)&&!e)for(e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++)Jf(g,b,c,d);}}
    function Mf(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;Nf(e,c,d);return e}var Of=null;function Pf(a){a=document.createComment(" Shady DOM styles for "+a+" ");var b=document.head;b.insertBefore(a,(Of?Of.nextSibling:null)||b.firstChild);return Of=a}function Nf(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);Of?a.compareDocumentPosition(Of)===Node.DOCUMENT_POSITION_PRECEDING&&(Of=a):Of=a;}
    function Qf(a,b){for(var c=0,d=a.length;b<d;b++)if("("===a[b])c++;else if(")"===a[b]&&0===--c)return b;return -1}function Rf(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var d=Qf(a,c+3),e=a.substring(c+4,d);c=a.substring(0,c);a=Rf(a.substring(d+1),b);d=e.indexOf(",");return -1===d?b(c,e.trim(),"",a):b(c,e.substring(0,d).trim(),e.substring(d+1).trim(),a)}function Sf(a,b){R?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b);}
    var Tf=window.ShadyDOM&&window.ShadyDOM.wrap||function(a){return a};function Uf(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return {is:b,X:c}}function Vf(a){for(var b=[],c="",d=0;0<=d&&d<a.length;d++)if("("===a[d]){var e=Qf(a,d);c+=a.slice(d,e+1);d=e;}else","===a[d]?(b.push(c),c=""):c+=a[d];c&&b.push(c);return b}
    function Wf(a){if(void 0!==Af)return Af;if(void 0===a.__cssBuild){var b=a.getAttribute("css-build");if(b)a.__cssBuild=b;else{a:{b="template"===a.localName?a.content.firstChild:a.firstChild;if(b instanceof Comment&&(b=b.textContent.trim().split(":"),"css-build"===b[0])){b=b[1];break a}b="";}if(""!==b){var c="template"===a.localName?a.content.firstChild:a.firstChild;c.parentNode.removeChild(c);}a.__cssBuild=b;}}return a.__cssBuild||""}
    function Xf(a){a=void 0===a?"":a;return ""!==a&&S?R?"shadow"===a:"shady"===a:!1}function Yf(){}function Zf(a,b){$f(U,a,function(a){ag(a,b||"");});}function $f(a,b,c){b.nodeType===Node.ELEMENT_NODE&&c(b);var d;"template"===b.localName?d=(b.content||b._content||b).childNodes:d=b.children||b.childNodes;if(d)for(b=0;b<d.length;b++)$f(a,d[b],c);}
    function ag(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute("class");c?d&&(b=d.replace("style-scope","").replace(b,""),Sf(a,b)):Sf(a,(d?d+" ":"")+"style-scope "+b);}}function bg(a,b,c){$f(U,a,function(a){ag(a,b,!0);ag(a,c);});}function cg(a,b){$f(U,a,function(a){ag(a,b||"",!0);});}
    function dg(a,b,c,d,e){var f=U;e=void 0===e?"":e;""===e&&(R||"shady"===(void 0===d?"":d)?e=If(b,c):(a=Uf(a),e=eg(f,b,a.is,a.X,c)+"\n\n"));return e.trim()}function eg(a,b,c,d,e){var f=fg(c,d);c=c?"."+c:"";return If(b,function(b){b.c||(b.selector=b.C=gg(a,b,a.b,c,f),b.c=!0);e&&e(b,c,f);})}function fg(a,b){return b?"[is="+a+"]":a}
    function gg(a,b,c,d,e){var f=Vf(b.selector);if(!Lf(b)){b=0;for(var g=f.length,h=void 0;b<g&&(h=f[b]);b++)f[b]=c.call(a,h,d,e);}return f.filter(function(a){return !!a}).join(",")}function hg(a){return a.replace(ig,function(a,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return ":"+c+"("+d+")"})}
    function jg(a){for(var b=[],c;c=a.match(kg);){var d=c.index,e=Qf(a,d);if(-1===e)throw Error(c.input+" selector missing ')'");c=a.slice(d,e+1);a=a.replace(c,"\ue000");b.push(c);}return {na:a,matches:b}}function lg(a,b){var c=a.split("\ue000");return b.reduce(function(a,b,f){return a+b+c[f+1]},c[0])}
    Yf.prototype.b=function(a,b,c){var d=!1;a=a.trim();var e=ig.test(a);e&&(a=a.replace(ig,function(a,b,c){return ":"+b+"("+c.replace(/\s/g,"")+")"}),a=hg(a));var f=kg.test(a);if(f){var g=jg(a);a=g.na;g=g.matches;}a=a.replace(mg,":host $1");a=a.replace(ng,function(a,e,f){d||(a=og(f,e,b,c),d=d||a.stop,e=a.Ha,f=a.value);return e+f});f&&(a=lg(a,g));e&&(a=hg(a));return a=a.replace(pg,function(a,b,c,d){return '[dir="'+c+'"] '+b+d+", "+b+'[dir="'+c+'"]'+d})};
    function og(a,b,c,d){var e=a.indexOf("::slotted");0<=a.indexOf(":host")?a=qg(a,d):0!==e&&(a=c?rg(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(sg,function(a,b){return " > "+b}));}return {value:a,Ha:b,stop:f}}function rg(a,b){a=a.split(/(\[.+?\])/);for(var c=[],d=0;d<a.length;d++)if(1===d%2)c.push(a[d]);else{var e=a[d];if(""!==e||d!==a.length-1)e=e.split(":"),e[0]+=b,c.push(e.join(":"));}return c.join("")}
    function qg(a,b){var c=a.match(tg);return (c=c&&c[2].trim()||"")?c[0].match(ug)?a.replace(tg,function(a,c,f){return b+f}):c.split(ug)[0]===b?c:"should_not_match":a.replace(":host",b)}function vg(a){":root"===a.selector&&(a.selector="html");}Yf.prototype.c=function(a){return a.match(":host")?"":a.match("::slotted")?this.b(a,":not(.style-scope)"):rg(a.trim(),":not(.style-scope)")};t.Object.defineProperties(Yf.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return "style-scope"}}});
    var ig=/:(nth[-\w]+)\(([^)]+)\)/,ng=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,ug=/[[.:#*]/,mg=/^(::slotted)/,tg=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,sg=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,pg=/(.*):dir\((?:(ltr|rtl))\)(.*)/,kg=/:(?:matches|any|-(?:webkit|moz)-any)/,U=new Yf;function wg(a,b,c,d,e){this.L=a||null;this.b=b||null;this.la=c||[];this.G=null;this.cssBuild=e||"";this.X=d||"";this.a=this.H=this.K=null;}function V(a){return a?a.__styleInfo:null}function xg(a,b){return a.__styleInfo=b}wg.prototype.c=function(){return this.L};wg.prototype._getStyleRules=wg.prototype.c;function yg(a){var b=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return b&&b.call(this,a)}var zg=navigator.userAgent.match("Trident");function Ag(){}function Bg(a){var b={},c=[],d=0;Jf(a,function(a){Cg(a);a.index=d++;a=a.A.cssText;for(var c;c=Df.exec(a);){var e=c[1];":"!==c[2]&&(b[e]=!0);}},function(a){c.push(a);});a.b=c;a=[];for(var e in b)a.push(e);return a}
    function Cg(a){if(!a.A){var b={},c={};Dg(a,c)&&(b.J=c,a.rules=null);b.cssText=a.parsedCssText.replace(Gf,"").replace(Bf,"");a.A=b;}}function Dg(a,b){var c=a.A;if(c){if(c.J)return Object.assign(b,c.J),!0}else{c=a.parsedCssText;for(var d;a=Bf.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0;}return d}}
    function Eg(a,b,c){b&&(b=0<=b.indexOf(";")?Fg(a,b,c):Rf(b,function(b,e,f,g){if(!e)return b+g;(e=Eg(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=Eg(a,c[f]||f,c)||f;return b+(e||"")+g}));return b&&b.trim()||""}
    function Fg(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){Cf.lastIndex=0;if(f=Cf.exec(e))e=Eg(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var g=e.substring(f);g=g.trim();g=Eg(a,g,c)||g;e=e.substring(0,f)+g;}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||"";}return b.join(";")}
    function Gg(a,b){var c={},d=[];Jf(a,function(a){a.A||Cg(a);var e=a.C||a.parsedSelector;b&&a.A.J&&e&&yg.call(b,e)&&(Dg(a,c),a=a.index,e=parseInt(a/32,10),d[e]=(d[e]||0)|1<<a%32);},null,!0);return {J:c,key:d}}
    function Hg(a,b,c,d){b.A||Cg(b);if(b.A.J){var e=Uf(a);a=e.is;e=e.X;e=a?fg(a,e):"html";var f=b.parsedSelector,g=":host > *"===f||"html"===f,h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));if(g||h)c=e,h&&(b.C||(b.C=gg(U,b,U.b,a?"."+a:"",e)),c=b.C||e),d({na:c,Oa:h,bb:g});}}function Ig(a,b,c){var d={},e={};Jf(b,function(b){Hg(a,b,c,function(c){yg.call(a._element||a,c.na)&&(c.Oa?Dg(b,d):Dg(b,e));});},null,!0);return {Ua:e,Ma:d}}
    function Jg(a,b,c,d){var e=Uf(b),f=fg(e.is,e.X),g=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),h=V(b);e=h.L;h=h.cssBuild;var k=Kg(e,d);return dg(b,e,function(b){var e="";b.A||Cg(b);b.A.cssText&&(e=Fg(a,b.A.cssText,c));b.cssText=e;if(!R&&!Lf(b)&&b.cssText){var h=e=b.cssText;null==b.ra&&(b.ra=Ef.test(e));if(b.ra)if(null==b.ba){b.ba=[];for(var l in k)h=k[l],h=h(e),e!==h&&(e=h,b.ba.push(l));}else{for(l=0;l<b.ba.length;++l)h=k[b.ba[l]],e=h(e);h=e;}b.cssText=h;b.C=
    b.C||b.selector;e="."+d;l=Vf(b.C);h=0;for(var v=l.length,x=void 0;h<v&&(x=l[h]);h++)l[h]=x.match(g)?x.replace(f,e):e+" "+x;b.selector=l.join(",");}},h)}function Kg(a,b){a=a.b;var c={};if(!R&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,g=b;f.f=new RegExp("\\b"+f.keyframesName+"(?!\\B|-)","g");f.a=f.keyframesName+"-"+g;f.C=f.C||f.selector;f.selector=f.C.replace(f.keyframesName,f.a);c[e.keyframesName]=Lg(e);}return c}function Lg(a){return function(b){return b.replace(a.f,a.a)}}
    function Mg(a,b){var c=Ng,d=Kf(a);a.textContent=If(d,function(a){var d=a.cssText=a.parsedCssText;a.A&&a.A.cssText&&(d=d.replace(qf,"").replace(rf,""),a.cssText=Fg(c,d,b));});}t.Object.defineProperties(Ag.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return "x-scope"}}});var Ng=new Ag;var Og={},Pg=window.customElements;if(Pg&&!R&&!zf){var Qg=Pg.define;Pg.define=function(a,b,c){Og[a]||(Og[a]=Pf(a));Qg.call(Pg,a,b,c);};}function Rg(){this.cache={};}Rg.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({J:b,styleElement:c,H:d});100<e.length&&e.shift();this.cache[a]=e;};function Sg(){}var Tg=new RegExp(U.a+"\\s*([^\\s]*)");function Ug(a){return (a=(a.classList&&a.classList.value?a.classList.value:a.getAttribute("class")||"").match(Tg))?a[1]:""}function Vg(a){var b=Tf(a).getRootNode();return b===a||b===a.ownerDocument?"":(a=b.host)?Uf(a).is:""}
    function Wg(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode(),g=Ug(e);if(g&&f===e.ownerDocument&&("style"!==e.localName&&"template"!==e.localName||""===Wf(e)))cg(e,g);else if(f instanceof ShadowRoot)for(f=Vg(e),f!==g&&bg(e,g,f),e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+U.a+")"),g=0;g<e.length;g++){f=e[g];
    var h=Vg(f);h&&ag(f,h);}}}}}
    if(!(R||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var Xg=new MutationObserver(Wg),Yg=function(a){Xg.observe(a,{childList:!0,subtree:!0});};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)Yg(document);else{var Zg=function(){Yg(document.body);};window.HTMLImports?window.HTMLImports.whenReady(Zg):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){Zg();document.removeEventListener("readystatechange",a);};document.addEventListener("readystatechange",
    a);}else Zg();});}Sg=function(){Wg(Xg.takeRecords());};}var $g=Sg;var ah={};var bh=Promise.resolve();function ch(a){if(a=ah[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1;}function dh(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function eh(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a._validating||(a._validating=!0,bh.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a._validating=!1;}));}var fh={},gh=new Rg;function W(){this.F={};this.c=document.documentElement;var a=new cf;a.rules=[];this.f=xg(this.c,new wg(a));this.u=!1;this.b=this.a=null;}r=W.prototype;r.flush=function(){$g();};r.Ka=function(a){return Kf(a)};r.Ya=function(a){return If(a)};r.prepareTemplate=function(a,b,c){this.prepareTemplateDom(a,b);this.prepareTemplateStyles(a,b,c);};
    r.prepareTemplateStyles=function(a,b,c){if(!a._prepared&&!zf){R||Og[b]||(Og[b]=Pf(b));a._prepared=!0;a.name=b;a.extends=c;ah[b]=a;var d=Wf(a),e=Xf(d);c={is:b,extends:c};for(var f=[],g=a.content.querySelectorAll("style"),h=0;h<g.length;h++){var k=g[h];if(k.hasAttribute("shady-unscoped")){if(!R){var l=k.textContent;Hf.has(l)||(Hf.add(l),l=k.cloneNode(!0),document.head.appendChild(l));k.parentNode.removeChild(k);}}else f.push(k.textContent),k.parentNode.removeChild(k);}f=f.join("").trim()+(fh[b]||"");
    hh(this);if(!e){if(g=!d)g=Cf.test(f)||Bf.test(f),Cf.lastIndex=0,Bf.lastIndex=0;h=df(f);g&&S&&this.a&&this.a.transformRules(h,b);a._styleAst=h;}g=[];S||(g=Bg(a._styleAst));if(!g.length||S)h=R?a.content:null,b=Og[b]||null,d=dg(c,a._styleAst,null,d,e?f:""),d=d.length?Mf(d,c.is,h,b):null,a._style=d;a.a=g;}};r.Sa=function(a,b){fh[b]=a.join(" ");};r.prepareTemplateDom=function(a,b){if(!zf){var c=Wf(a);R||"shady"===c||a._domPrepared||(a._domPrepared=!0,Zf(a.content,b));}};
    function ih(a){var b=Uf(a),c=b.is;b=b.X;var d=Og[c]||null,e=ah[c];if(e){c=e._styleAst;var f=e.a;e=Wf(e);b=new wg(c,d,f,b,e);xg(a,b);return b}}function jh(a){!a.b&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.b=window.ShadyCSS.CustomStyleInterface,a.b.transformCallback=function(b){a.va(b);},a.b.validateCallback=function(){requestAnimationFrame(function(){(a.b.enqueued||a.u)&&a.flushCustomStyles();});});}
    function hh(a){!a.a&&window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(a.a=window.ShadyCSS.ApplyShim,a.a.invalidCallback=ch);jh(a);}
    r.flushCustomStyles=function(){if(!zf&&(hh(this),this.b)){var a=this.b.processStyles();if(this.b.enqueued&&!Xf(this.f.cssBuild)){if(S){if(!this.f.cssBuild)for(var b=0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);if(c&&S&&this.a){var d=Kf(c);hh(this);this.a.transformRules(d);c.textContent=If(d);}}}else{kh(this,this.c,this.f);for(b=0;b<a.length;b++)(c=this.b.getStyleForCustomStyle(a[b]))&&Mg(c,this.f.K);this.u&&this.styleDocument();}this.b.enqueued=!1;}}};
    r.styleElement=function(a,b){if(zf){if(b){V(a)||xg(a,new wg(null));var c=V(a);c.G=c.G||{};Object.assign(c.G,b);lh(this,a,c);}}else if(c=V(a)||ih(a))if(a!==this.c&&(this.u=!0),b&&(c.G=c.G||{},Object.assign(c.G,b)),S)lh(this,a,c);else if(this.flush(),kh(this,a,c),c.la&&c.la.length){b=Uf(a).is;var d;a:{if(d=gh.cache[b])for(var e=d.length-1;0<=e;e--){var f=d[e];b:{var g=c.la;for(var h=0;h<g.length;h++){var k=g[h];if(f.J[k]!==c.K[k]){g=!1;break b}}g=!0;}if(g){d=f;break a}}d=void 0;}g=d?d.styleElement:null;
    e=c.H;(f=d&&d.H)||(f=this.F[b]=(this.F[b]||0)+1,f=b+"-"+f);c.H=f;f=c.H;h=Ng;h=g?g.textContent||"":Jg(h,a,c.K,f);k=V(a);var l=k.a;l&&!R&&l!==g&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));R?k.a?(k.a.textContent=h,g=k.a):h&&(g=Mf(h,f,a.shadowRoot,k.b)):g?g.parentNode||(zg&&-1<h.indexOf("@media")&&(g.textContent=h),Nf(g,null,k.b)):h&&(g=Mf(h,f,null,k.b));g&&(g._useCount=g._useCount||0,k.a!=g&&g._useCount++,k.a=g);f=g;R||(g=c.H,k=h=a.getAttribute("class")||"",e&&(k=h.replace(new RegExp("\\s*x-scope\\s*"+
    e+"\\s*","g")," ")),k+=(k?" ":"")+"x-scope "+g,h!==k&&Sf(a,k));d||gh.store(b,c.K,f,c.H);}};
    function lh(a,b,c){var d=Uf(b).is;if(c.G){var e=c.G,f;for(f in e)null===f?b.style.removeProperty(f):b.style.setProperty(f,e[f]);}e=ah[d];if(!(!e&&b!==a.c||e&&""!==Wf(e))&&e&&e._style&&!dh(e)){if(dh(e)||e._applyShimValidatingVersion!==e._applyShimNextVersion)hh(a),a.a&&a.a.transformRules(e._styleAst,d),e._style.textContent=dg(b,c.L),eh(e);R&&(a=b.shadowRoot)&&(a=a.querySelector("style"))&&(a.textContent=dg(b,c.L));c.L=e._styleAst;}}
    function mh(a,b){return (b=Tf(b).getRootNode().host)?V(b)||ih(b)?b:mh(a,b):a.c}function kh(a,b,c){var d=mh(a,b),e=V(d),f=e.K;d===a.c||f||(kh(a,d,e),f=e.K);a=Object.create(f||null);d=Ig(b,c.L,c.cssBuild);b=Gg(e.L,b).J;Object.assign(a,d.Ma,b,d.Ua);b=c.G;for(var g in b)if((e=b[g])||0===e)a[g]=e;g=Ng;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=Eg(g,a[d],a);c.K=a;}r.styleDocument=function(a){this.styleSubtree(this.c,a);};
    r.styleSubtree=function(a,b){var c=Tf(a),d=c.shadowRoot;(d||a===this.c)&&this.styleElement(a,b);if(a=d&&(d.children||d.childNodes))for(c=0;c<a.length;c++)this.styleSubtree(a[c]);else if(c=c.children||c.childNodes)for(a=0;a<c.length;a++)this.styleSubtree(c[a]);};
    r.va=function(a){var b=this,c=Wf(a);c!==this.f.cssBuild&&(this.f.cssBuild=c);if(!Xf(c)){var d=Kf(a);Jf(d,function(a){if(R)vg(a);else{var d=U;a.selector=a.parsedSelector;vg(a);a.selector=a.C=gg(d,a,d.c,void 0,void 0);}S&&""===c&&(hh(b),b.a&&b.a.transformRule(a));});S?a.textContent=If(d):this.f.L.rules.push(d);}};r.getComputedStyleValue=function(a,b){var c;S||(c=(V(a)||V(mh(this,a))).K[b]);return (c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};
    r.Xa=function(a,b){var c=Tf(a).getRootNode();b=b?b.split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d){d=d.split(/\s/);for(var e=0;e<d.length;e++)if(d[e]===U.a){c=d[e+1];break}}}c&&b.push(U.a,c);S||(c=V(a))&&c.H&&b.push(Ng.a,c.H);Sf(a,b.join(" "));};r.Fa=function(a){return V(a)};r.Wa=function(a,b){ag(a,b);};r.Za=function(a,b){ag(a,b,!0);};r.Va=function(a){return Vg(a)};r.Ia=function(a){return Ug(a)};W.prototype.flush=W.prototype.flush;W.prototype.prepareTemplate=W.prototype.prepareTemplate;
    W.prototype.styleElement=W.prototype.styleElement;W.prototype.styleDocument=W.prototype.styleDocument;W.prototype.styleSubtree=W.prototype.styleSubtree;W.prototype.getComputedStyleValue=W.prototype.getComputedStyleValue;W.prototype.setElementClass=W.prototype.Xa;W.prototype._styleInfoForNode=W.prototype.Fa;W.prototype.transformCustomStyleForDocument=W.prototype.va;W.prototype.getStyleAst=W.prototype.Ka;W.prototype.styleAstToString=W.prototype.Ya;W.prototype.flushCustomStyles=W.prototype.flushCustomStyles;
    W.prototype.scopeNode=W.prototype.Wa;W.prototype.unscopeNode=W.prototype.Za;W.prototype.scopeForNode=W.prototype.Va;W.prototype.currentScopeForNode=W.prototype.Ia;W.prototype.prepareAdoptedCssText=W.prototype.Sa;Object.defineProperties(W.prototype,{nativeShadow:{get:function(){return R}},nativeCss:{get:function(){return S}}});var Z=new W,nh,oh;window.ShadyCSS&&(nh=window.ShadyCSS.ApplyShim,oh=window.ShadyCSS.CustomStyleInterface);
    window.ShadyCSS={ScopingShim:Z,prepareTemplate:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplate(a,b,c);},prepareTemplateDom:function(a,b){Z.prepareTemplateDom(a,b);},prepareTemplateStyles:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplateStyles(a,b,c);},styleSubtree:function(a,b){Z.flushCustomStyles();Z.styleSubtree(a,b);},styleElement:function(a){Z.flushCustomStyles();Z.styleElement(a);},styleDocument:function(a){Z.flushCustomStyles();Z.styleDocument(a);},flushCustomStyles:function(){Z.flushCustomStyles();},
    getComputedStyleValue:function(a,b){return Z.getComputedStyleValue(a,b)},nativeCss:S,nativeShadow:R,cssBuild:Af,disableRuntime:zf};nh&&(window.ShadyCSS.ApplyShim=nh);oh&&(window.ShadyCSS.CustomStyleInterface=oh);(function(a){function b(a){""==a&&(f.call(this),this.i=!0);return a.toLowerCase()}function c(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,63,96].indexOf(b)?a:encodeURIComponent(a)}function d(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,96].indexOf(b)?a:encodeURIComponent(a)}function e(a,e,g){function h(a){}var k=e||"scheme start",x=0,p="",v=!1,Q=!1;a:for(;(void 0!=a[x-1]||0==x)&&!this.i;){var m=a[x];switch(k){case "scheme start":if(m&&q.test(m))p+=m.toLowerCase(),
    k="scheme";else if(e){break a}else{p="";k="no scheme";continue}break;case "scheme":if(m&&I.test(m))p+=m.toLowerCase();else if(":"==m){this.h=p;p="";if(e)break a;void 0!==l[this.h]&&(this.B=!0);k="file"==this.h?"relative":this.B&&g&&g.h==this.h?"relative or authority":this.B?"authority first slash":"scheme data";}else if(e){break a}else{p="";x=0;k="no scheme";continue}break;case "scheme data":"?"==m?(this.o="?",k="query"):"#"==
    m?(this.v="#",k="fragment"):void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.ia+=c(m));break;case "no scheme":if(g&&void 0!==l[g.h]){k="relative";continue}else f.call(this),this.i=!0;break;case "relative or authority":if("/"==m&&"/"==a[x+1])k="authority ignore slashes";else{k="relative";continue}break;case "relative":this.B=!0;"file"!=this.h&&(this.h=g.h);if(void 0==m){this.j=g.j;this.m=g.m;this.l=g.l.slice();this.o=g.o;this.s=g.s;this.g=g.g;break a}else if("/"==
    m||"\\"==m)k="relative slash";else if("?"==m)this.j=g.j,this.m=g.m,this.l=g.l.slice(),this.o="?",this.s=g.s,this.g=g.g,k="query";else if("#"==m)this.j=g.j,this.m=g.m,this.l=g.l.slice(),this.o=g.o,this.v="#",this.s=g.s,this.g=g.g,k="fragment";else{k=a[x+1];var y=a[x+2];if("file"!=this.h||!q.test(m)||":"!=k&&"|"!=k||void 0!=y&&"/"!=y&&"\\"!=y&&"?"!=y&&"#"!=y)this.j=g.j,this.m=g.m,this.s=g.s,this.g=g.g,this.l=g.l.slice(),this.l.pop();k="relative path";continue}break;
    case "relative slash":if("/"==m||"\\"==m)k="file"==this.h?"file host":"authority ignore slashes";else{"file"!=this.h&&(this.j=g.j,this.m=g.m,this.s=g.s,this.g=g.g);k="relative path";continue}break;case "authority first slash":if("/"==m)k="authority second slash";else{k="authority ignore slashes";continue}break;case "authority second slash":k="authority ignore slashes";if("/"!=m){continue}break;case "authority ignore slashes":if("/"!=
    m&&"\\"!=m){k="authority";continue}break;case "authority":if("@"==m){v&&(p+="%40");v=!0;for(m=0;m<p.length;m++)y=p[m],"\t"==y||"\n"==y||"\r"==y?h("Invalid whitespace in authority."):":"==y&&null===this.g?this.g="":(y=c(y),null!==this.g?this.g+=y:this.s+=y);p="";}else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){x-=p.length;p="";k="host";continue}else p+=m;break;case "file host":if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){2!=p.length||
    !q.test(p[0])||":"!=p[1]&&"|"!=p[1]?(0!=p.length&&(this.j=b.call(this,p),p=""),k="relative path start"):k="relative path";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid whitespace in file host."):p+=m;break;case "host":case "hostname":if(":"!=m||Q)if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){this.j=b.call(this,p);p="";k="relative path start";if(e)break a;continue}else"\t"!=m&&"\n"!=m&&"\r"!=m?("["==m?Q=!0:"]"==m&&(Q=!1),p+=m):h("Invalid code point in host/hostname: "+m);else if(this.j=b.call(this,
    p),p="",k="port","hostname"==e)break a;break;case "port":if(/[0-9]/.test(m))p+=m;else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m||e){""!=p&&(p=parseInt(p,10),p!=l[this.h]&&(this.m=p+""),p="");if(e)break a;k="relative path start";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid code point in port: "+m):(f.call(this),this.i=!0);break;case "relative path start":k="relative path";if("/"!=m&&"\\"!=m)continue;break;case "relative path":if(void 0!=m&&"/"!=m&&"\\"!=
    m&&(e||"?"!=m&&"#"!=m))"\t"!=m&&"\n"!=m&&"\r"!=m&&(p+=c(m));else{if(y=n[p.toLowerCase()])p=y;".."==p?(this.l.pop(),"/"!=m&&"\\"!=m&&this.l.push("")):"."==p&&"/"!=m&&"\\"!=m?this.l.push(""):"."!=p&&("file"==this.h&&0==this.l.length&&2==p.length&&q.test(p[0])&&"|"==p[1]&&(p=p[0]+":"),this.l.push(p));p="";"?"==m?(this.o="?",k="query"):"#"==m&&(this.v="#",k="fragment");}break;case "query":e||"#"!=m?void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.o+=d(m)):(this.v=
    "#",k="fragment");break;case "fragment":void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.v+=m);}x++;}}function f(){this.s=this.ia=this.h="";this.g=null;this.m=this.j="";this.l=[];this.v=this.o="";this.B=this.i=!1;}function g(a,b){void 0===b||b instanceof g||(b=new g(String(b)));this.a=a;f.call(this);a=this.a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");e.call(this,a,null,b);}var h=!1;try{var k=new URL("b","http://a");k.pathname="c%20d";h="http://a/c%20d"===k.href;}catch(x){}if(!h){var l=Object.create(null);l.ftp=
    21;l.file=0;l.gopher=70;l.http=80;l.https=443;l.ws=80;l.wss=443;var n=Object.create(null);n["%2e"]=".";n[".%2e"]="..";n["%2e."]="..";n["%2e%2e"]="..";var q=/[a-zA-Z]/,I=/[a-zA-Z0-9\+\-\.]/;g.prototype={toString:function(){return this.href},get href(){if(this.i)return this.a;var a="";if(""!=this.s||null!=this.g)a=this.s+(null!=this.g?":"+this.g:"")+"@";return this.protocol+(this.B?"//"+a+this.host:"")+this.pathname+this.o+this.v},set href(a){f.call(this);e.call(this,a);},get protocol(){return this.h+
    ":"},set protocol(a){this.i||e.call(this,a+":","scheme start");},get host(){return this.i?"":this.m?this.j+":"+this.m:this.j},set host(a){!this.i&&this.B&&e.call(this,a,"host");},get hostname(){return this.j},set hostname(a){!this.i&&this.B&&e.call(this,a,"hostname");},get port(){return this.m},set port(a){!this.i&&this.B&&e.call(this,a,"port");},get pathname(){return this.i?"":this.B?"/"+this.l.join("/"):this.ia},set pathname(a){!this.i&&this.B&&(this.l=[],e.call(this,a,"relative path start"));},get search(){return this.i||
    !this.o||"?"==this.o?"":this.o},set search(a){!this.i&&this.B&&(this.o="?","?"==a[0]&&(a=a.slice(1)),e.call(this,a,"query"));},get hash(){return this.i||!this.v||"#"==this.v?"":this.v},set hash(a){this.i||(a?(this.v="#","#"==a[0]&&(a=a.slice(1)),e.call(this,a,"fragment")):this.v="");},get origin(){var a;if(this.i||!this.h)return "";switch(this.h){case "data":case "file":case "javascript":case "mailto":return "null"}return (a=this.host)?this.h+"://"+a:""}};var v=a.URL;v&&(g.createObjectURL=function(a){return v.createObjectURL.apply(v,
    arguments)},g.revokeObjectURL=function(a){v.revokeObjectURL(a);});a.URL=g;}})(window);Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var a=(this.ownerDocument||this).querySelector("base[href]");return a&&a.href||window.location.href},configurable:!0,enumerable:!0});var ph=document.createElement("style");ph.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var qh=document.querySelector("head");qh.insertBefore(ph,qh.firstChild);var rh=window.customElements,sh=!1,th=null;rh.polyfillWrapFlushCallback&&rh.polyfillWrapFlushCallback(function(a){th=a;sh&&a();});function uh(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document);th&&th();sh=!0;window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}));}
    "complete"!==document.readyState?(window.addEventListener("load",uh),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",uh);uh();})):uh();}).call(commonjsGlobal);

    // Copyright 2014 Google Inc. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    //     You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    //     See the License for the specific language governing permissions and
    // limitations under the License.

    !function(){var a={},b={};!function(a,b){function c(a){if("number"==typeof a)return a;var b={};for(var c in a)b[c]=a[c];return b}function d(){this._delay=0,this._endDelay=0,this._fill="none",this._iterationStart=0,this._iterations=1,this._duration=0,this._playbackRate=1,this._direction="normal",this._easing="linear",this._easingFunction=x;}function e(){return a.isDeprecated("Invalid timing inputs","2016-03-02","TypeError exceptions will be thrown instead.",!0)}function f(b,c,e){var f=new d;return c&&(f.fill="both",f.duration="auto"),"number"!=typeof b||isNaN(b)?void 0!==b&&Object.getOwnPropertyNames(b).forEach(function(c){if("auto"!=b[c]){if(("number"==typeof f[c]||"duration"==c)&&("number"!=typeof b[c]||isNaN(b[c])))return;if("fill"==c&&-1==v.indexOf(b[c]))return;if("direction"==c&&-1==w.indexOf(b[c]))return;if("playbackRate"==c&&1!==b[c]&&a.isDeprecated("AnimationEffectTiming.playbackRate","2014-11-28","Use Animation.playbackRate instead."))return;f[c]=b[c];}}):f.duration=b,f}function g(a){return "number"==typeof a&&(a=isNaN(a)?{duration:0}:{duration:a}),a}function h(b,c){return b=a.numericTimingToObject(b),f(b,c)}function i(a,b,c,d){return a<0||a>1||c<0||c>1?x:function(e){function f(a,b,c){return 3*a*(1-c)*(1-c)*c+3*b*(1-c)*c*c+c*c*c}if(e<=0){var g=0;return a>0?g=b/a:!b&&c>0&&(g=d/c),g*e}if(e>=1){var h=0;return c<1?h=(d-1)/(c-1):1==c&&a<1&&(h=(b-1)/(a-1)),1+h*(e-1)}for(var i=0,j=1;i<j;){var k=(i+j)/2,l=f(a,c,k);if(Math.abs(e-l)<1e-5)return f(b,d,k);l<e?i=k:j=k;}return f(b,d,k)}}function j(a,b){return function(c){if(c>=1)return 1;var d=1/a;return (c+=b*d)-c%d}}function k(a){C||(C=document.createElement("div").style),C.animationTimingFunction="",C.animationTimingFunction=a;var b=C.animationTimingFunction;if(""==b&&e())throw new TypeError(a+" is not a valid value for easing");return b}function l(a){if("linear"==a)return x;var b=E.exec(a);if(b)return i.apply(this,b.slice(1).map(Number));var c=F.exec(a);if(c)return j(Number(c[1]),A);var d=G.exec(a);return d?j(Number(d[1]),{start:y,middle:z,end:A}[d[2]]):B[a]||x}function m(a){return Math.abs(n(a)/a.playbackRate)}function n(a){return 0===a.duration||0===a.iterations?0:a.duration*a.iterations}function o(a,b,c){if(null==b)return H;var d=c.delay+a+c.endDelay;return b<Math.min(c.delay,d)?I:b>=Math.min(c.delay+a,d)?J:K}function p(a,b,c,d,e){switch(d){case I:return "backwards"==b||"both"==b?0:null;case K:return c-e;case J:return "forwards"==b||"both"==b?a:null;case H:return null}}function q(a,b,c,d,e){var f=e;return 0===a?b!==I&&(f+=c):f+=d/a,f}function r(a,b,c,d,e,f){var g=a===1/0?b%1:a%1;return 0!==g||c!==J||0===d||0===e&&0!==f||(g=1),g}function s(a,b,c,d){return a===J&&b===1/0?1/0:1===c?Math.floor(d)-1:Math.floor(d)}function t(a,b,c){var d=a;if("normal"!==a&&"reverse"!==a){var e=b;"alternate-reverse"===a&&(e+=1),d="normal",e!==1/0&&e%2!=0&&(d="reverse");}return "normal"===d?c:1-c}function u(a,b,c){var d=o(a,b,c),e=p(a,c.fill,b,d,c.delay);if(null===e)return null;var f=q(c.duration,d,c.iterations,e,c.iterationStart),g=r(f,c.iterationStart,d,c.iterations,e,c.duration),h=s(d,c.iterations,g,f),i=t(c.direction,h,g);return c._easingFunction(i)}var v="backwards|forwards|both|none".split("|"),w="reverse|alternate|alternate-reverse".split("|"),x=function(a){return a};d.prototype={_setMember:function(b,c){this["_"+b]=c,this._effect&&(this._effect._timingInput[b]=c,this._effect._timing=a.normalizeTimingInput(this._effect._timingInput),this._effect.activeDuration=a.calculateActiveDuration(this._effect._timing),this._effect._animation&&this._effect._animation._rebuildUnderlyingAnimation());},get playbackRate(){return this._playbackRate},set delay(a){this._setMember("delay",a);},get delay(){return this._delay},set endDelay(a){this._setMember("endDelay",a);},get endDelay(){return this._endDelay},set fill(a){this._setMember("fill",a);},get fill(){return this._fill},set iterationStart(a){if((isNaN(a)||a<0)&&e())throw new TypeError("iterationStart must be a non-negative number, received: "+a);this._setMember("iterationStart",a);},get iterationStart(){return this._iterationStart},set duration(a){if("auto"!=a&&(isNaN(a)||a<0)&&e())throw new TypeError("duration must be non-negative or auto, received: "+a);this._setMember("duration",a);},get duration(){return this._duration},set direction(a){this._setMember("direction",a);},get direction(){return this._direction},set easing(a){this._easingFunction=l(k(a)),this._setMember("easing",a);},get easing(){return this._easing},set iterations(a){if((isNaN(a)||a<0)&&e())throw new TypeError("iterations must be non-negative, received: "+a);this._setMember("iterations",a);},get iterations(){return this._iterations}};var y=1,z=.5,A=0,B={ease:i(.25,.1,.25,1),"ease-in":i(.42,0,1,1),"ease-out":i(0,0,.58,1),"ease-in-out":i(.42,0,.58,1),"step-start":j(1,y),"step-middle":j(1,z),"step-end":j(1,A)},C=null,D="\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",E=new RegExp("cubic-bezier\\("+D+","+D+","+D+","+D+"\\)"),F=/steps\(\s*(\d+)\s*\)/,G=/steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,H=0,I=1,J=2,K=3;a.cloneTimingInput=c,a.makeTiming=f,a.numericTimingToObject=g,a.normalizeTimingInput=h,a.calculateActiveDuration=m,a.calculateIterationProgress=u,a.calculatePhase=o,a.normalizeEasing=k,a.parseEasingFunction=l;}(a),function(a,b){function c(a,b){return a in k?k[a][b]||b:b}function d(a){return "display"===a||0===a.lastIndexOf("animation",0)||0===a.lastIndexOf("transition",0)}function e(a,b,e){if(!d(a)){var f=h[a];if(f){i.style[a]=b;for(var g in f){var j=f[g],k=i.style[j];e[j]=c(j,k);}}else e[a]=c(a,b);}}function f(a){var b=[];for(var c in a)if(!(c in["easing","offset","composite"])){var d=a[c];Array.isArray(d)||(d=[d]);for(var e,f=d.length,g=0;g<f;g++)e={},e.offset="offset"in a?a.offset:1==f?1:g/(f-1),"easing"in a&&(e.easing=a.easing),"composite"in a&&(e.composite=a.composite),e[c]=d[g],b.push(e);}return b.sort(function(a,b){return a.offset-b.offset}),b}function g(b){function c(){var a=d.length;null==d[a-1].offset&&(d[a-1].offset=1),a>1&&null==d[0].offset&&(d[0].offset=0);for(var b=0,c=d[0].offset,e=1;e<a;e++){var f=d[e].offset;if(null!=f){for(var g=1;g<e-b;g++)d[b+g].offset=c+(f-c)*g/(e-b);b=e,c=f;}}}if(null==b)return [];window.Symbol&&Symbol.iterator&&Array.prototype.from&&b[Symbol.iterator]&&(b=Array.from(b)),Array.isArray(b)||(b=f(b));for(var d=b.map(function(b){var c={};for(var d in b){var f=b[d];if("offset"==d){if(null!=f){if(f=Number(f),!isFinite(f))throw new TypeError("Keyframe offsets must be numbers.");if(f<0||f>1)throw new TypeError("Keyframe offsets must be between 0 and 1.")}}else if("composite"==d){if("add"==f||"accumulate"==f)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"add compositing is not supported"};if("replace"!=f)throw new TypeError("Invalid composite mode "+f+".")}else f="easing"==d?a.normalizeEasing(f):""+f;e(d,f,c);}return void 0==c.offset&&(c.offset=null),void 0==c.easing&&(c.easing="linear"),c}),g=!0,h=-1/0,i=0;i<d.length;i++){var j=d[i].offset;if(null!=j){if(j<h)throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");h=j;}else g=!1;}return d=d.filter(function(a){return a.offset>=0&&a.offset<=1}),g||c(),d}var h={background:["backgroundImage","backgroundPosition","backgroundSize","backgroundRepeat","backgroundAttachment","backgroundOrigin","backgroundClip","backgroundColor"],border:["borderTopColor","borderTopStyle","borderTopWidth","borderRightColor","borderRightStyle","borderRightWidth","borderBottomColor","borderBottomStyle","borderBottomWidth","borderLeftColor","borderLeftStyle","borderLeftWidth"],borderBottom:["borderBottomWidth","borderBottomStyle","borderBottomColor"],borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderLeft:["borderLeftWidth","borderLeftStyle","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderRight:["borderRightWidth","borderRightStyle","borderRightColor"],borderTop:["borderTopWidth","borderTopStyle","borderTopColor"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],flex:["flexGrow","flexShrink","flexBasis"],font:["fontFamily","fontSize","fontStyle","fontVariant","fontWeight","lineHeight"],margin:["marginTop","marginRight","marginBottom","marginLeft"],outline:["outlineColor","outlineStyle","outlineWidth"],padding:["paddingTop","paddingRight","paddingBottom","paddingLeft"]},i=document.createElementNS("http://www.w3.org/1999/xhtml","div"),j={thin:"1px",medium:"3px",thick:"5px"},k={borderBottomWidth:j,borderLeftWidth:j,borderRightWidth:j,borderTopWidth:j,fontSize:{"xx-small":"60%","x-small":"75%",small:"89%",medium:"100%",large:"120%","x-large":"150%","xx-large":"200%"},fontWeight:{normal:"400",bold:"700"},outlineWidth:j,textShadow:{none:"0px 0px 0px transparent"},boxShadow:{none:"0px 0px 0px 0px transparent"}};a.convertToArrayForm=f,a.normalizeKeyframes=g;}(a),function(a){var b={};a.isDeprecated=function(a,c,d,e){var f=e?"are":"is",g=new Date,h=new Date(c);return h.setMonth(h.getMonth()+3),!(g<h&&(a in b||console.warn("Web Animations: "+a+" "+f+" deprecated and will stop working on "+h.toDateString()+". "+d),b[a]=!0,1))},a.deprecated=function(b,c,d,e){var f=e?"are":"is";if(a.isDeprecated(b,c,d,e))throw new Error(b+" "+f+" no longer supported. "+d)};}(a),function(){if(document.documentElement.animate){var c=document.documentElement.animate([],0),d=!0;if(c&&(d=!1,"play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function(a){void 0===c[a]&&(d=!0);})),!d)return}!function(a,b,c){function d(a){for(var b={},c=0;c<a.length;c++)for(var d in a[c])if("offset"!=d&&"easing"!=d&&"composite"!=d){var e={offset:a[c].offset,easing:a[c].easing,value:a[c][d]};b[d]=b[d]||[],b[d].push(e);}for(var f in b){var g=b[f];if(0!=g[0].offset||1!=g[g.length-1].offset)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"Partial keyframes are not supported"}}return b}function e(c){var d=[];for(var e in c)for(var f=c[e],g=0;g<f.length-1;g++){var h=g,i=g+1,j=f[h].offset,k=f[i].offset,l=j,m=k;0==g&&(l=-1/0,0==k&&(i=h)),g==f.length-2&&(m=1/0,1==j&&(h=i)),d.push({applyFrom:l,applyTo:m,startOffset:f[h].offset,endOffset:f[i].offset,easingFunction:a.parseEasingFunction(f[h].easing),property:e,interpolation:b.propertyInterpolation(e,f[h].value,f[i].value)});}return d.sort(function(a,b){return a.startOffset-b.startOffset}),d}b.convertEffectInput=function(c){var f=a.normalizeKeyframes(c),g=d(f),h=e(g);return function(a,c){if(null!=c)h.filter(function(a){return c>=a.applyFrom&&c<a.applyTo}).forEach(function(d){var e=c-d.startOffset,f=d.endOffset-d.startOffset,g=0==f?0:d.easingFunction(e/f);b.apply(a,d.property,d.interpolation(g));});else for(var d in g)"offset"!=d&&"easing"!=d&&"composite"!=d&&b.clear(a,d);}};}(a,b),function(a,b,c){function d(a){return a.replace(/-(.)/g,function(a,b){return b.toUpperCase()})}function e(a,b,c){h[c]=h[c]||[],h[c].push([a,b]);}function f(a,b,c){for(var f=0;f<c.length;f++){e(a,b,d(c[f]));}}function g(c,e,f){var g=c;/-/.test(c)&&!a.isDeprecated("Hyphenated property names","2016-03-22","Use camelCase instead.",!0)&&(g=d(c)),"initial"!=e&&"initial"!=f||("initial"==e&&(e=i[g]),"initial"==f&&(f=i[g]));for(var j=e==f?[]:h[g],k=0;j&&k<j.length;k++){var l=j[k][0](e),m=j[k][0](f);if(void 0!==l&&void 0!==m){var n=j[k][1](l,m);if(n){var o=b.Interpolation.apply(null,n);return function(a){return 0==a?e:1==a?f:o(a)}}}}return b.Interpolation(!1,!0,function(a){return a?f:e})}var h={};b.addPropertiesHandler=f;var i={backgroundColor:"transparent",backgroundPosition:"0% 0%",borderBottomColor:"currentColor",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px",borderBottomWidth:"3px",borderLeftColor:"currentColor",borderLeftWidth:"3px",borderRightColor:"currentColor",borderRightWidth:"3px",borderSpacing:"2px",borderTopColor:"currentColor",borderTopLeftRadius:"0px",borderTopRightRadius:"0px",borderTopWidth:"3px",bottom:"auto",clip:"rect(0px, 0px, 0px, 0px)",color:"black",fontSize:"100%",fontWeight:"400",height:"auto",left:"auto",letterSpacing:"normal",lineHeight:"120%",marginBottom:"0px",marginLeft:"0px",marginRight:"0px",marginTop:"0px",maxHeight:"none",maxWidth:"none",minHeight:"0px",minWidth:"0px",opacity:"1.0",outlineColor:"invert",outlineOffset:"0px",outlineWidth:"3px",paddingBottom:"0px",paddingLeft:"0px",paddingRight:"0px",paddingTop:"0px",right:"auto",strokeDasharray:"none",strokeDashoffset:"0px",textIndent:"0px",textShadow:"0px 0px 0px transparent",top:"auto",transform:"",verticalAlign:"0px",visibility:"visible",width:"auto",wordSpacing:"normal",zIndex:"auto"};b.propertyInterpolation=g;}(a,b),function(a,b,c){function d(b){var c=a.calculateActiveDuration(b),d=function(d){return a.calculateIterationProgress(c,d,b)};return d._totalDuration=b.delay+c+b.endDelay,d}b.KeyframeEffect=function(c,e,f,g){var h,i=d(a.normalizeTimingInput(f)),j=b.convertEffectInput(e),k=function(){j(c,h);};return k._update=function(a){return null!==(h=i(a))},k._clear=function(){j(c,null);},k._hasSameTarget=function(a){return c===a},k._target=c,k._totalDuration=i._totalDuration,k._id=g,k};}(a,b),function(a,b){function c(a,b){return !(!b.namespaceURI||-1==b.namespaceURI.indexOf("/svg"))&&(g in a||(a[g]=/Trident|MSIE|IEMobile|Edge|Android 4/i.test(a.navigator.userAgent)),a[g])}function d(a,b,c){c.enumerable=!0,c.configurable=!0,Object.defineProperty(a,b,c);}function e(a){this._element=a,this._surrogateStyle=document.createElementNS("http://www.w3.org/1999/xhtml","div").style,this._style=a.style,this._length=0,this._isAnimatedProperty={},this._updateSvgTransformAttr=c(window,a),this._savedTransformAttr=null;for(var b=0;b<this._style.length;b++){var d=this._style[b];this._surrogateStyle[d]=this._style[d];}this._updateIndices();}function f(a){if(!a._webAnimationsPatchedStyle){var b=new e(a);try{d(a,"style",{get:function(){return b}});}catch(b){a.style._set=function(b,c){a.style[b]=c;},a.style._clear=function(b){a.style[b]="";};}a._webAnimationsPatchedStyle=a.style;}}var g="_webAnimationsUpdateSvgTransformAttr",h={cssText:1,length:1,parentRule:1},i={getPropertyCSSValue:1,getPropertyPriority:1,getPropertyValue:1,item:1,removeProperty:1,setProperty:1},j={removeProperty:1,setProperty:1};e.prototype={get cssText(){return this._surrogateStyle.cssText},set cssText(a){for(var b={},c=0;c<this._surrogateStyle.length;c++)b[this._surrogateStyle[c]]=!0;this._surrogateStyle.cssText=a,this._updateIndices();for(var c=0;c<this._surrogateStyle.length;c++)b[this._surrogateStyle[c]]=!0;for(var d in b)this._isAnimatedProperty[d]||this._style.setProperty(d,this._surrogateStyle.getPropertyValue(d));},get length(){return this._surrogateStyle.length},get parentRule(){return this._style.parentRule},_updateIndices:function(){for(;this._length<this._surrogateStyle.length;)Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,get:function(a){return function(){return this._surrogateStyle[a]}}(this._length)}),this._length++;for(;this._length>this._surrogateStyle.length;)this._length--,Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,value:void 0});},_set:function(b,c){this._style[b]=c,this._isAnimatedProperty[b]=!0,this._updateSvgTransformAttr&&"transform"==a.unprefixedPropertyName(b)&&(null==this._savedTransformAttr&&(this._savedTransformAttr=this._element.getAttribute("transform")),this._element.setAttribute("transform",a.transformToSvgMatrix(c)));},_clear:function(b){this._style[b]=this._surrogateStyle[b],this._updateSvgTransformAttr&&"transform"==a.unprefixedPropertyName(b)&&(this._savedTransformAttr?this._element.setAttribute("transform",this._savedTransformAttr):this._element.removeAttribute("transform"),this._savedTransformAttr=null),delete this._isAnimatedProperty[b];}};for(var k in i)e.prototype[k]=function(a,b){return function(){var c=this._surrogateStyle[a].apply(this._surrogateStyle,arguments);return b&&(this._isAnimatedProperty[arguments[0]]||this._style[a].apply(this._style,arguments),this._updateIndices()),c}}(k,k in j);for(var l in document.documentElement.style)l in h||l in i||function(a){d(e.prototype,a,{get:function(){return this._surrogateStyle[a]},set:function(b){this._surrogateStyle[a]=b,this._updateIndices(),this._isAnimatedProperty[a]||(this._style[a]=b);}});}(l);a.apply=function(b,c,d){f(b),b.style._set(a.propertyName(c),d);},a.clear=function(b,c){b._webAnimationsPatchedStyle&&b.style._clear(a.propertyName(c));};}(b),function(a){window.Element.prototype.animate=function(b,c){var d="";return c&&c.id&&(d=c.id),a.timeline._play(a.KeyframeEffect(this,b,c,d))};}(b),function(a,b){function c(a,b,d){if("number"==typeof a&&"number"==typeof b)return a*(1-d)+b*d;if("boolean"==typeof a&&"boolean"==typeof b)return d<.5?a:b;if(a.length==b.length){for(var e=[],f=0;f<a.length;f++)e.push(c(a[f],b[f],d));return e}throw"Mismatched interpolation arguments "+a+":"+b}a.Interpolation=function(a,b,d){return function(e){return d(c(a,b,e))}};}(b),function(a,b){function c(a,b,c){return Math.max(Math.min(a,c),b)}function d(b,d,e){var f=a.dot(b,d);f=c(f,-1,1);var g=[];if(1===f)g=b;else for(var h=Math.acos(f),i=1*Math.sin(e*h)/Math.sqrt(1-f*f),j=0;j<4;j++)g.push(b[j]*(Math.cos(e*h)-f*i)+d[j]*i);return g}var e=function(){function a(a,b){for(var c=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],d=0;d<4;d++)for(var e=0;e<4;e++)for(var f=0;f<4;f++)c[d][e]+=b[d][f]*a[f][e];return c}function b(a){return 0==a[0][2]&&0==a[0][3]&&0==a[1][2]&&0==a[1][3]&&0==a[2][0]&&0==a[2][1]&&1==a[2][2]&&0==a[2][3]&&0==a[3][2]&&1==a[3][3]}function c(c,d,e,f,g){for(var h=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],i=0;i<4;i++)h[i][3]=g[i];for(var i=0;i<3;i++)for(var j=0;j<3;j++)h[3][i]+=c[j]*h[j][i];var k=f[0],l=f[1],m=f[2],n=f[3],o=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];o[0][0]=1-2*(l*l+m*m),o[0][1]=2*(k*l-m*n),o[0][2]=2*(k*m+l*n),o[1][0]=2*(k*l+m*n),o[1][1]=1-2*(k*k+m*m),o[1][2]=2*(l*m-k*n),o[2][0]=2*(k*m-l*n),o[2][1]=2*(l*m+k*n),o[2][2]=1-2*(k*k+l*l),h=a(h,o);var p=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];e[2]&&(p[2][1]=e[2],h=a(h,p)),e[1]&&(p[2][1]=0,p[2][0]=e[0],h=a(h,p)),e[0]&&(p[2][0]=0,p[1][0]=e[0],h=a(h,p));for(var i=0;i<3;i++)for(var j=0;j<3;j++)h[i][j]*=d[i];return b(h)?[h[0][0],h[0][1],h[1][0],h[1][1],h[3][0],h[3][1]]:h[0].concat(h[1],h[2],h[3])}return c}();a.composeMatrix=e,a.quat=d;}(b),function(a,b,c){a.sequenceNumber=0;var d=function(a,b,c){this.target=a,this.currentTime=b,this.timelineTime=c,this.type="finish",this.bubbles=!1,this.cancelable=!1,this.currentTarget=a,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now();};b.Animation=function(b){this.id="",b&&b._id&&(this.id=b._id),this._sequenceNumber=a.sequenceNumber++,this._currentTime=0,this._startTime=null,this._paused=!1,this._playbackRate=1,this._inTimeline=!0,this._finishedFlag=!0,this.onfinish=null,this._finishHandlers=[],this._effect=b,this._inEffect=this._effect._update(0),this._idle=!0,this._currentTimePending=!1;},b.Animation.prototype={_ensureAlive:function(){this.playbackRate<0&&0===this.currentTime?this._inEffect=this._effect._update(-1):this._inEffect=this._effect._update(this.currentTime),this._inTimeline||!this._inEffect&&this._finishedFlag||(this._inTimeline=!0,b.timeline._animations.push(this));},_tickCurrentTime:function(a,b){a!=this._currentTime&&(this._currentTime=a,this._isFinished&&!b&&(this._currentTime=this._playbackRate>0?this._totalDuration:0),this._ensureAlive());},get currentTime(){return this._idle||this._currentTimePending?null:this._currentTime},set currentTime(a){a=+a,isNaN(a)||(b.restart(),this._paused||null==this._startTime||(this._startTime=this._timeline.currentTime-a/this._playbackRate),this._currentTimePending=!1,this._currentTime!=a&&(this._idle&&(this._idle=!1,this._paused=!0),this._tickCurrentTime(a,!0),b.applyDirtiedAnimation(this)));},get startTime(){return this._startTime},set startTime(a){a=+a,isNaN(a)||this._paused||this._idle||(this._startTime=a,this._tickCurrentTime((this._timeline.currentTime-this._startTime)*this.playbackRate),b.applyDirtiedAnimation(this));},get playbackRate(){return this._playbackRate},set playbackRate(a){if(a!=this._playbackRate){var c=this.currentTime;this._playbackRate=a,this._startTime=null,"paused"!=this.playState&&"idle"!=this.playState&&(this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),b.applyDirtiedAnimation(this)),null!=c&&(this.currentTime=c);}},get _isFinished(){return !this._idle&&(this._playbackRate>0&&this._currentTime>=this._totalDuration||this._playbackRate<0&&this._currentTime<=0)},get _totalDuration(){return this._effect._totalDuration},get playState(){return this._idle?"idle":null==this._startTime&&!this._paused&&0!=this.playbackRate||this._currentTimePending?"pending":this._paused?"paused":this._isFinished?"finished":"running"},_rewind:function(){if(this._playbackRate>=0)this._currentTime=0;else{if(!(this._totalDuration<1/0))throw new DOMException("Unable to rewind negative playback rate animation with infinite duration","InvalidStateError");this._currentTime=this._totalDuration;}},play:function(){this._paused=!1,(this._isFinished||this._idle)&&(this._rewind(),this._startTime=null),this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),b.applyDirtiedAnimation(this);},pause:function(){this._isFinished||this._paused||this._idle?this._idle&&(this._rewind(),this._idle=!1):this._currentTimePending=!0,this._startTime=null,this._paused=!0;},finish:function(){this._idle||(this.currentTime=this._playbackRate>0?this._totalDuration:0,this._startTime=this._totalDuration-this.currentTime,this._currentTimePending=!1,b.applyDirtiedAnimation(this));},cancel:function(){this._inEffect&&(this._inEffect=!1,this._idle=!0,this._paused=!1,this._finishedFlag=!0,this._currentTime=0,this._startTime=null,this._effect._update(null),b.applyDirtiedAnimation(this));},reverse:function(){this.playbackRate*=-1,this.play();},addEventListener:function(a,b){"function"==typeof b&&"finish"==a&&this._finishHandlers.push(b);},removeEventListener:function(a,b){if("finish"==a){var c=this._finishHandlers.indexOf(b);c>=0&&this._finishHandlers.splice(c,1);}},_fireEvents:function(a){if(this._isFinished){if(!this._finishedFlag){var b=new d(this,this._currentTime,a),c=this._finishHandlers.concat(this.onfinish?[this.onfinish]:[]);setTimeout(function(){c.forEach(function(a){a.call(b.target,b);});},0),this._finishedFlag=!0;}}else this._finishedFlag=!1;},_tick:function(a,b){this._idle||this._paused||(null==this._startTime?b&&(this.startTime=a-this._currentTime/this.playbackRate):this._isFinished||this._tickCurrentTime((a-this._startTime)*this.playbackRate)),b&&(this._currentTimePending=!1,this._fireEvents(a));},get _needsTick(){return this.playState in{pending:1,running:1}||!this._finishedFlag},_targetAnimations:function(){var a=this._effect._target;return a._activeAnimations||(a._activeAnimations=[]),a._activeAnimations},_markTarget:function(){var a=this._targetAnimations();-1===a.indexOf(this)&&a.push(this);},_unmarkTarget:function(){var a=this._targetAnimations(),b=a.indexOf(this);-1!==b&&a.splice(b,1);}};}(a,b),function(a,b,c){function d(a){var b=j;j=[],a<q.currentTime&&(a=q.currentTime),q._animations.sort(e),q._animations=h(a,!0,q._animations)[0],b.forEach(function(b){b[1](a);}),g(),l=void 0;}function e(a,b){return a._sequenceNumber-b._sequenceNumber}function f(){this._animations=[],this.currentTime=window.performance&&performance.now?performance.now():0;}function g(){o.forEach(function(a){a();}),o.length=0;}function h(a,c,d){p=!0,n=!1,b.timeline.currentTime=a,m=!1;var e=[],f=[],g=[],h=[];return d.forEach(function(b){b._tick(a,c),b._inEffect?(f.push(b._effect),b._markTarget()):(e.push(b._effect),b._unmarkTarget()),b._needsTick&&(m=!0);var d=b._inEffect||b._needsTick;b._inTimeline=d,d?g.push(b):h.push(b);}),o.push.apply(o,e),o.push.apply(o,f),m&&requestAnimationFrame(function(){}),p=!1,[g,h]}var i=window.requestAnimationFrame,j=[],k=0;window.requestAnimationFrame=function(a){var b=k++;return 0==j.length&&i(d),j.push([b,a]),b},window.cancelAnimationFrame=function(a){j.forEach(function(b){b[0]==a&&(b[1]=function(){});});},f.prototype={_play:function(c){c._timing=a.normalizeTimingInput(c.timing);var d=new b.Animation(c);return d._idle=!1,d._timeline=this,this._animations.push(d),b.restart(),b.applyDirtiedAnimation(d),d}};var l=void 0,m=!1,n=!1;b.restart=function(){return m||(m=!0,requestAnimationFrame(function(){}),n=!0),n},b.applyDirtiedAnimation=function(a){if(!p){a._markTarget();var c=a._targetAnimations();c.sort(e),h(b.timeline.currentTime,!1,c.slice())[1].forEach(function(a){var b=q._animations.indexOf(a);-1!==b&&q._animations.splice(b,1);}),g();}};var o=[],p=!1,q=new f;b.timeline=q;}(a,b),function(a,b){function c(a,b){for(var c=0,d=0;d<a.length;d++)c+=a[d]*b[d];return c}function d(a,b){return [a[0]*b[0]+a[4]*b[1]+a[8]*b[2]+a[12]*b[3],a[1]*b[0]+a[5]*b[1]+a[9]*b[2]+a[13]*b[3],a[2]*b[0]+a[6]*b[1]+a[10]*b[2]+a[14]*b[3],a[3]*b[0]+a[7]*b[1]+a[11]*b[2]+a[15]*b[3],a[0]*b[4]+a[4]*b[5]+a[8]*b[6]+a[12]*b[7],a[1]*b[4]+a[5]*b[5]+a[9]*b[6]+a[13]*b[7],a[2]*b[4]+a[6]*b[5]+a[10]*b[6]+a[14]*b[7],a[3]*b[4]+a[7]*b[5]+a[11]*b[6]+a[15]*b[7],a[0]*b[8]+a[4]*b[9]+a[8]*b[10]+a[12]*b[11],a[1]*b[8]+a[5]*b[9]+a[9]*b[10]+a[13]*b[11],a[2]*b[8]+a[6]*b[9]+a[10]*b[10]+a[14]*b[11],a[3]*b[8]+a[7]*b[9]+a[11]*b[10]+a[15]*b[11],a[0]*b[12]+a[4]*b[13]+a[8]*b[14]+a[12]*b[15],a[1]*b[12]+a[5]*b[13]+a[9]*b[14]+a[13]*b[15],a[2]*b[12]+a[6]*b[13]+a[10]*b[14]+a[14]*b[15],a[3]*b[12]+a[7]*b[13]+a[11]*b[14]+a[15]*b[15]]}function e(a){var b=a.rad||0;return ((a.deg||0)/360+(a.grad||0)/400+(a.turn||0))*(2*Math.PI)+b}function f(a){switch(a.t){case"rotatex":var b=e(a.d[0]);return [1,0,0,0,0,Math.cos(b),Math.sin(b),0,0,-Math.sin(b),Math.cos(b),0,0,0,0,1];case"rotatey":var b=e(a.d[0]);return [Math.cos(b),0,-Math.sin(b),0,0,1,0,0,Math.sin(b),0,Math.cos(b),0,0,0,0,1];case"rotate":case"rotatez":var b=e(a.d[0]);return [Math.cos(b),Math.sin(b),0,0,-Math.sin(b),Math.cos(b),0,0,0,0,1,0,0,0,0,1];case"rotate3d":var c=a.d[0],d=a.d[1],f=a.d[2],b=e(a.d[3]),g=c*c+d*d+f*f;if(0===g)c=1,d=0,f=0;else if(1!==g){var h=Math.sqrt(g);c/=h,d/=h,f/=h;}var i=Math.sin(b/2),j=i*Math.cos(b/2),k=i*i;return [1-2*(d*d+f*f)*k,2*(c*d*k+f*j),2*(c*f*k-d*j),0,2*(c*d*k-f*j),1-2*(c*c+f*f)*k,2*(d*f*k+c*j),0,2*(c*f*k+d*j),2*(d*f*k-c*j),1-2*(c*c+d*d)*k,0,0,0,0,1];case"scale":return [a.d[0],0,0,0,0,a.d[1],0,0,0,0,1,0,0,0,0,1];case"scalex":return [a.d[0],0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"scaley":return [1,0,0,0,0,a.d[0],0,0,0,0,1,0,0,0,0,1];case"scalez":return [1,0,0,0,0,1,0,0,0,0,a.d[0],0,0,0,0,1];case"scale3d":return [a.d[0],0,0,0,0,a.d[1],0,0,0,0,a.d[2],0,0,0,0,1];case"skew":var l=e(a.d[0]),m=e(a.d[1]);return [1,Math.tan(m),0,0,Math.tan(l),1,0,0,0,0,1,0,0,0,0,1];case"skewx":var b=e(a.d[0]);return [1,0,0,0,Math.tan(b),1,0,0,0,0,1,0,0,0,0,1];case"skewy":var b=e(a.d[0]);return [1,Math.tan(b),0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"translate":var c=a.d[0].px||0,d=a.d[1].px||0;return [1,0,0,0,0,1,0,0,0,0,1,0,c,d,0,1];case"translatex":var c=a.d[0].px||0;return [1,0,0,0,0,1,0,0,0,0,1,0,c,0,0,1];case"translatey":var d=a.d[0].px||0;return [1,0,0,0,0,1,0,0,0,0,1,0,0,d,0,1];case"translatez":var f=a.d[0].px||0;return [1,0,0,0,0,1,0,0,0,0,1,0,0,0,f,1];case"translate3d":var c=a.d[0].px||0,d=a.d[1].px||0,f=a.d[2].px||0;return [1,0,0,0,0,1,0,0,0,0,1,0,c,d,f,1];case"perspective":return [1,0,0,0,0,1,0,0,0,0,1,a.d[0].px?-1/a.d[0].px:0,0,0,0,1];case"matrix":return [a.d[0],a.d[1],0,0,a.d[2],a.d[3],0,0,0,0,1,0,a.d[4],a.d[5],0,1];case"matrix3d":return a.d}}function g(a){return 0===a.length?[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]:a.map(f).reduce(d)}function h(a){return [i(g(a))]}var i=function(){function a(a){return a[0][0]*a[1][1]*a[2][2]+a[1][0]*a[2][1]*a[0][2]+a[2][0]*a[0][1]*a[1][2]-a[0][2]*a[1][1]*a[2][0]-a[1][2]*a[2][1]*a[0][0]-a[2][2]*a[0][1]*a[1][0]}function b(b){for(var c=1/a(b),d=b[0][0],e=b[0][1],f=b[0][2],g=b[1][0],h=b[1][1],i=b[1][2],j=b[2][0],k=b[2][1],l=b[2][2],m=[[(h*l-i*k)*c,(f*k-e*l)*c,(e*i-f*h)*c,0],[(i*j-g*l)*c,(d*l-f*j)*c,(f*g-d*i)*c,0],[(g*k-h*j)*c,(j*e-d*k)*c,(d*h-e*g)*c,0]],n=[],o=0;o<3;o++){for(var p=0,q=0;q<3;q++)p+=b[3][q]*m[q][o];n.push(p);}return n.push(1),m.push(n),m}function d(a){return [[a[0][0],a[1][0],a[2][0],a[3][0]],[a[0][1],a[1][1],a[2][1],a[3][1]],[a[0][2],a[1][2],a[2][2],a[3][2]],[a[0][3],a[1][3],a[2][3],a[3][3]]]}function e(a,b){for(var c=[],d=0;d<4;d++){for(var e=0,f=0;f<4;f++)e+=a[f]*b[f][d];c.push(e);}return c}function f(a){var b=g(a);return [a[0]/b,a[1]/b,a[2]/b]}function g(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])}function h(a,b,c,d){return [c*a[0]+d*b[0],c*a[1]+d*b[1],c*a[2]+d*b[2]]}function i(a,b){return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]}function j(j){var k=[j.slice(0,4),j.slice(4,8),j.slice(8,12),j.slice(12,16)];if(1!==k[3][3])return null;for(var l=[],m=0;m<4;m++)l.push(k[m].slice());for(var m=0;m<3;m++)l[m][3]=0;if(0===a(l))return null;var n,o=[];k[0][3]||k[1][3]||k[2][3]?(o.push(k[0][3]),o.push(k[1][3]),o.push(k[2][3]),o.push(k[3][3]),n=e(o,d(b(l)))):n=[0,0,0,1];var p=k[3].slice(0,3),q=[];q.push(k[0].slice(0,3));var r=[];r.push(g(q[0])),q[0]=f(q[0]);var s=[];q.push(k[1].slice(0,3)),s.push(c(q[0],q[1])),q[1]=h(q[1],q[0],1,-s[0]),r.push(g(q[1])),q[1]=f(q[1]),s[0]/=r[1],q.push(k[2].slice(0,3)),s.push(c(q[0],q[2])),q[2]=h(q[2],q[0],1,-s[1]),s.push(c(q[1],q[2])),q[2]=h(q[2],q[1],1,-s[2]),r.push(g(q[2])),q[2]=f(q[2]),s[1]/=r[2],s[2]/=r[2];var t=i(q[1],q[2]);if(c(q[0],t)<0)for(var m=0;m<3;m++)r[m]*=-1,q[m][0]*=-1,q[m][1]*=-1,q[m][2]*=-1;var u,v,w=q[0][0]+q[1][1]+q[2][2]+1;return w>1e-4?(u=.5/Math.sqrt(w),v=[(q[2][1]-q[1][2])*u,(q[0][2]-q[2][0])*u,(q[1][0]-q[0][1])*u,.25/u]):q[0][0]>q[1][1]&&q[0][0]>q[2][2]?(u=2*Math.sqrt(1+q[0][0]-q[1][1]-q[2][2]),v=[.25*u,(q[0][1]+q[1][0])/u,(q[0][2]+q[2][0])/u,(q[2][1]-q[1][2])/u]):q[1][1]>q[2][2]?(u=2*Math.sqrt(1+q[1][1]-q[0][0]-q[2][2]),v=[(q[0][1]+q[1][0])/u,.25*u,(q[1][2]+q[2][1])/u,(q[0][2]-q[2][0])/u]):(u=2*Math.sqrt(1+q[2][2]-q[0][0]-q[1][1]),v=[(q[0][2]+q[2][0])/u,(q[1][2]+q[2][1])/u,.25*u,(q[1][0]-q[0][1])/u]),[p,r,s,v,n]}return j}();a.dot=c,a.makeMatrixDecomposition=h,a.transformListToMatrix=g;}(b),function(a){function b(a,b){var c=a.exec(b);if(c)return c=a.ignoreCase?c[0].toLowerCase():c[0],[c,b.substr(c.length)]}function c(a,b){b=b.replace(/^\s*/,"");var c=a(b);if(c)return [c[0],c[1].replace(/^\s*/,"")]}function d(a,d,e){a=c.bind(null,a);for(var f=[];;){var g=a(e);if(!g)return [f,e];if(f.push(g[0]),e=g[1],!(g=b(d,e))||""==g[1])return [f,e];e=g[1];}}function e(a,b){for(var c=0,d=0;d<b.length&&(!/\s|,/.test(b[d])||0!=c);d++)if("("==b[d])c++;else if(")"==b[d]&&(c--,0==c&&d++,c<=0))break;var e=a(b.substr(0,d));return void 0==e?void 0:[e,b.substr(d)]}function f(a,b){for(var c=a,d=b;c&&d;)c>d?c%=d:d%=c;return c=a*b/(c+d)}function g(a){return function(b){var c=a(b);return c&&(c[0]=void 0),c}}function h(a,b){return function(c){return a(c)||[b,c]}}function i(b,c){for(var d=[],e=0;e<b.length;e++){var f=a.consumeTrimmed(b[e],c);if(!f||""==f[0])return;void 0!==f[0]&&d.push(f[0]),c=f[1];}if(""==c)return d}function j(a,b,c,d,e){for(var g=[],h=[],i=[],j=f(d.length,e.length),k=0;k<j;k++){var l=b(d[k%d.length],e[k%e.length]);if(!l)return;g.push(l[0]),h.push(l[1]),i.push(l[2]);}return [g,h,function(b){var d=b.map(function(a,b){return i[b](a)}).join(c);return a?a(d):d}]}function k(a,b,c){for(var d=[],e=[],f=[],g=0,h=0;h<c.length;h++)if("function"==typeof c[h]){var i=c[h](a[g],b[g++]);d.push(i[0]),e.push(i[1]),f.push(i[2]);}else!function(a){d.push(!1),e.push(!1),f.push(function(){return c[a]});}(h);return [d,e,function(a){for(var b="",c=0;c<a.length;c++)b+=f[c](a[c]);return b}]}a.consumeToken=b,a.consumeTrimmed=c,a.consumeRepeated=d,a.consumeParenthesised=e,a.ignore=g,a.optional=h,a.consumeList=i,a.mergeNestedRepeated=j.bind(null,null),a.mergeWrappedNestedRepeated=j,a.mergeList=k;}(b),function(a){function b(b){function c(b){var c=a.consumeToken(/^inset/i,b);return c?(d.inset=!0,c):(c=a.consumeLengthOrPercent(b))?(d.lengths.push(c[0]),c):(c=a.consumeColor(b),c?(d.color=c[0],c):void 0)}var d={inset:!1,lengths:[],color:null},e=a.consumeRepeated(c,/^/,b);if(e&&e[0].length)return [d,e[1]]}function c(c){var d=a.consumeRepeated(b,/^,/,c);if(d&&""==d[1])return d[0]}function d(b,c){for(;b.lengths.length<Math.max(b.lengths.length,c.lengths.length);)b.lengths.push({px:0});for(;c.lengths.length<Math.max(b.lengths.length,c.lengths.length);)c.lengths.push({px:0});if(b.inset==c.inset&&!!b.color==!!c.color){for(var d,e=[],f=[[],0],g=[[],0],h=0;h<b.lengths.length;h++){var i=a.mergeDimensions(b.lengths[h],c.lengths[h],2==h);f[0].push(i[0]),g[0].push(i[1]),e.push(i[2]);}if(b.color&&c.color){var j=a.mergeColors(b.color,c.color);f[1]=j[0],g[1]=j[1],d=j[2];}return [f,g,function(a){for(var c=b.inset?"inset ":" ",f=0;f<e.length;f++)c+=e[f](a[0][f])+" ";return d&&(c+=d(a[1])),c}]}}function e(b,c,d,e){function f(a){return {inset:a,color:[0,0,0,0],lengths:[{px:0},{px:0},{px:0},{px:0}]}}for(var g=[],h=[],i=0;i<d.length||i<e.length;i++){var j=d[i]||f(e[i].inset),k=e[i]||f(d[i].inset);g.push(j),h.push(k);}return a.mergeNestedRepeated(b,c,g,h)}var f=e.bind(null,d,", ");a.addPropertiesHandler(c,f,["box-shadow","text-shadow"]);}(b),function(a,b){function c(a){return a.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function d(a,b,c){return Math.min(b,Math.max(a,c))}function e(a){if(/^\s*[-+]?(\d*\.)?\d+\s*$/.test(a))return Number(a)}function f(a,b){return [a,b,c]}function g(a,b){if(0!=a)return i(0,1/0)(a,b)}function h(a,b){return [a,b,function(a){return Math.round(d(1,1/0,a))}]}function i(a,b){return function(e,f){return [e,f,function(e){return c(d(a,b,e))}]}}function j(a){var b=a.trim().split(/\s*[\s,]\s*/);if(0!==b.length){for(var c=[],d=0;d<b.length;d++){var f=e(b[d]);if(void 0===f)return;c.push(f);}return c}}function k(a,b){if(a.length==b.length)return [a,b,function(a){return a.map(c).join(" ")}]}function l(a,b){return [a,b,Math.round]}a.clamp=d,a.addPropertiesHandler(j,k,["stroke-dasharray"]),a.addPropertiesHandler(e,i(0,1/0),["border-image-width","line-height"]),a.addPropertiesHandler(e,i(0,1),["opacity","shape-image-threshold"]),a.addPropertiesHandler(e,g,["flex-grow","flex-shrink"]),a.addPropertiesHandler(e,h,["orphans","widows"]),a.addPropertiesHandler(e,l,["z-index"]),a.parseNumber=e,a.parseNumberList=j,a.mergeNumbers=f,a.numberToString=c;}(b),function(a,b){function c(a,b){if("visible"==a||"visible"==b)return [0,1,function(c){return c<=0?a:c>=1?b:"visible"}]}a.addPropertiesHandler(String,c,["visibility"]);}(b),function(a,b){function c(a){a=a.trim(),f.fillStyle="#000",f.fillStyle=a;var b=f.fillStyle;if(f.fillStyle="#fff",f.fillStyle=a,b==f.fillStyle){f.fillRect(0,0,1,1);var c=f.getImageData(0,0,1,1).data;f.clearRect(0,0,1,1);var d=c[3]/255;return [c[0]*d,c[1]*d,c[2]*d,d]}}function d(b,c){return [b,c,function(b){function c(a){return Math.max(0,Math.min(255,a))}if(b[3])for(var d=0;d<3;d++)b[d]=Math.round(c(b[d]/b[3]));return b[3]=a.numberToString(a.clamp(0,1,b[3])),"rgba("+b.join(",")+")"}]}var e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");e.width=e.height=1;var f=e.getContext("2d");a.addPropertiesHandler(c,d,["background-color","border-bottom-color","border-left-color","border-right-color","border-top-color","color","fill","flood-color","lighting-color","outline-color","stop-color","stroke","text-decoration-color"]),a.consumeColor=a.consumeParenthesised.bind(null,c),a.mergeColors=d;}(b),function(a,b){function c(a){function b(){var b=h.exec(a);g=b?b[0]:void 0;}function c(){var a=Number(g);return b(),a}function d(){if("("!==g)return c();b();var a=f();return ")"!==g?NaN:(b(),a)}function e(){for(var a=d();"*"===g||"/"===g;){var c=g;b();var e=d();"*"===c?a*=e:a/=e;}return a}function f(){for(var a=e();"+"===g||"-"===g;){var c=g;b();var d=e();"+"===c?a+=d:a-=d;}return a}var g,h=/([\+\-\w\.]+|[\(\)\*\/])/g;return b(),f()}function d(a,b){if("0"==(b=b.trim().toLowerCase())&&"px".search(a)>=0)return {px:0};if(/^[^(]*$|^calc/.test(b)){b=b.replace(/calc\(/g,"(");var d={};b=b.replace(a,function(a){return d[a]=null,"U"+a});for(var e="U("+a.source+")",f=b.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g,"N").replace(new RegExp("N"+e,"g"),"D").replace(/\s[+-]\s/g,"O").replace(/\s/g,""),g=[/N\*(D)/g,/(N|D)[*\/]N/g,/(N|D)O\1/g,/\((N|D)\)/g],h=0;h<g.length;)g[h].test(f)?(f=f.replace(g[h],"$1"),h=0):h++;if("D"==f){for(var i in d){var j=c(b.replace(new RegExp("U"+i,"g"),"").replace(new RegExp(e,"g"),"*0"));if(!isFinite(j))return;d[i]=j;}return d}}}function e(a,b){return f(a,b,!0)}function f(b,c,d){var e,f=[];for(e in b)f.push(e);for(e in c)f.indexOf(e)<0&&f.push(e);return b=f.map(function(a){return b[a]||0}),c=f.map(function(a){return c[a]||0}),[b,c,function(b){var c=b.map(function(c,e){return 1==b.length&&d&&(c=Math.max(c,0)),a.numberToString(c)+f[e]}).join(" + ");return b.length>1?"calc("+c+")":c}]}var g="px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",h=d.bind(null,new RegExp(g,"g")),i=d.bind(null,new RegExp(g+"|%","g")),j=d.bind(null,/deg|rad|grad|turn/g);a.parseLength=h,a.parseLengthOrPercent=i,a.consumeLengthOrPercent=a.consumeParenthesised.bind(null,i),a.parseAngle=j,a.mergeDimensions=f;var k=a.consumeParenthesised.bind(null,h),l=a.consumeRepeated.bind(void 0,k,/^/),m=a.consumeRepeated.bind(void 0,l,/^,/);a.consumeSizePairList=m;var n=function(a){var b=m(a);if(b&&""==b[1])return b[0]},o=a.mergeNestedRepeated.bind(void 0,e," "),p=a.mergeNestedRepeated.bind(void 0,o,",");a.mergeNonNegativeSizePair=o,a.addPropertiesHandler(n,p,["background-size"]),a.addPropertiesHandler(i,e,["border-bottom-width","border-image-width","border-left-width","border-right-width","border-top-width","flex-basis","font-size","height","line-height","max-height","max-width","outline-width","width"]),a.addPropertiesHandler(i,f,["border-bottom-left-radius","border-bottom-right-radius","border-top-left-radius","border-top-right-radius","bottom","left","letter-spacing","margin-bottom","margin-left","margin-right","margin-top","min-height","min-width","outline-offset","padding-bottom","padding-left","padding-right","padding-top","perspective","right","shape-margin","stroke-dashoffset","text-indent","top","vertical-align","word-spacing"]);}(b),function(a,b){function c(b){return a.consumeLengthOrPercent(b)||a.consumeToken(/^auto/,b)}function d(b){var d=a.consumeList([a.ignore(a.consumeToken.bind(null,/^rect/)),a.ignore(a.consumeToken.bind(null,/^\(/)),a.consumeRepeated.bind(null,c,/^,/),a.ignore(a.consumeToken.bind(null,/^\)/))],b);if(d&&4==d[0].length)return d[0]}function e(b,c){return "auto"==b||"auto"==c?[!0,!1,function(d){var e=d?b:c;if("auto"==e)return "auto";var f=a.mergeDimensions(e,e);return f[2](f[0])}]:a.mergeDimensions(b,c)}function f(a){return "rect("+a+")"}var g=a.mergeWrappedNestedRepeated.bind(null,f,e,", ");a.parseBox=d,a.mergeBoxes=g,a.addPropertiesHandler(d,g,["clip"]);}(b),function(a,b){function c(a){return function(b){var c=0;return a.map(function(a){return a===k?b[c++]:a})}}function d(a){return a}function e(b){if("none"==(b=b.toLowerCase().trim()))return [];for(var c,d=/\s*(\w+)\(([^)]*)\)/g,e=[],f=0;c=d.exec(b);){if(c.index!=f)return;f=c.index+c[0].length;var g=c[1],h=n[g];if(!h)return;var i=c[2].split(","),j=h[0];if(j.length<i.length)return;for(var k=[],o=0;o<j.length;o++){var p,q=i[o],r=j[o];if(void 0===(p=q?{A:function(b){return "0"==b.trim()?m:a.parseAngle(b)},N:a.parseNumber,T:a.parseLengthOrPercent,L:a.parseLength}[r.toUpperCase()](q):{a:m,n:k[0],t:l}[r]))return;k.push(p);}if(e.push({t:g,d:k}),d.lastIndex==b.length)return e}}function f(a){return a.toFixed(6).replace(".000000","")}function g(b,c){if(b.decompositionPair!==c){b.decompositionPair=c;var d=a.makeMatrixDecomposition(b);}if(c.decompositionPair!==b){c.decompositionPair=b;var e=a.makeMatrixDecomposition(c);}return null==d[0]||null==e[0]?[[!1],[!0],function(a){return a?c[0].d:b[0].d}]:(d[0].push(0),e[0].push(1),[d,e,function(b){var c=a.quat(d[0][3],e[0][3],b[5]);return a.composeMatrix(b[0],b[1],b[2],c,b[4]).map(f).join(",")}])}function h(a){return a.replace(/[xy]/,"")}function i(a){return a.replace(/(x|y|z|3d)?$/,"3d")}function j(b,c){var d=a.makeMatrixDecomposition&&!0,e=!1;if(!b.length||!c.length){b.length||(e=!0,b=c,c=[]);for(var f=0;f<b.length;f++){var j=b[f].t,k=b[f].d,l="scale"==j.substr(0,5)?1:0;c.push({t:j,d:k.map(function(a){if("number"==typeof a)return l;var b={};for(var c in a)b[c]=l;return b})});}}var m=function(a,b){return "perspective"==a&&"perspective"==b||("matrix"==a||"matrix3d"==a)&&("matrix"==b||"matrix3d"==b)},o=[],p=[],q=[];if(b.length!=c.length){if(!d)return;var r=g(b,c);o=[r[0]],p=[r[1]],q=[["matrix",[r[2]]]];}else for(var f=0;f<b.length;f++){var j,s=b[f].t,t=c[f].t,u=b[f].d,v=c[f].d,w=n[s],x=n[t];if(m(s,t)){if(!d)return;var r=g([b[f]],[c[f]]);o.push(r[0]),p.push(r[1]),q.push(["matrix",[r[2]]]);}else{if(s==t)j=s;else if(w[2]&&x[2]&&h(s)==h(t))j=h(s),u=w[2](u),v=x[2](v);else{if(!w[1]||!x[1]||i(s)!=i(t)){if(!d)return;var r=g(b,c);o=[r[0]],p=[r[1]],q=[["matrix",[r[2]]]];break}j=i(s),u=w[1](u),v=x[1](v);}for(var y=[],z=[],A=[],B=0;B<u.length;B++){var C="number"==typeof u[B]?a.mergeNumbers:a.mergeDimensions,r=C(u[B],v[B]);y[B]=r[0],z[B]=r[1],A.push(r[2]);}o.push(y),p.push(z),q.push([j,A]);}}if(e){var D=o;o=p,p=D;}return [o,p,function(a){return a.map(function(a,b){var c=a.map(function(a,c){return q[b][1][c](a)}).join(",");return "matrix"==q[b][0]&&16==c.split(",").length&&(q[b][0]="matrix3d"),q[b][0]+"("+c+")"}).join(" ")}]}var k=null,l={px:0},m={deg:0},n={matrix:["NNNNNN",[k,k,0,0,k,k,0,0,0,0,1,0,k,k,0,1],d],matrix3d:["NNNNNNNNNNNNNNNN",d],rotate:["A"],rotatex:["A"],rotatey:["A"],rotatez:["A"],rotate3d:["NNNA"],perspective:["L"],scale:["Nn",c([k,k,1]),d],scalex:["N",c([k,1,1]),c([k,1])],scaley:["N",c([1,k,1]),c([1,k])],scalez:["N",c([1,1,k])],scale3d:["NNN",d],skew:["Aa",null,d],skewx:["A",null,c([k,m])],skewy:["A",null,c([m,k])],translate:["Tt",c([k,k,l]),d],translatex:["T",c([k,l,l]),c([k,l])],translatey:["T",c([l,k,l]),c([l,k])],translatez:["L",c([l,l,k])],translate3d:["TTL",d]};a.addPropertiesHandler(e,j,["transform"]),a.transformToSvgMatrix=function(b){var c=a.transformListToMatrix(e(b));return "matrix("+f(c[0])+" "+f(c[1])+" "+f(c[4])+" "+f(c[5])+" "+f(c[12])+" "+f(c[13])+")"};}(b),function(a){function b(a){var b=Number(a);if(!(isNaN(b)||b<100||b>900||b%100!=0))return b}function c(b){return b=100*Math.round(b/100),b=a.clamp(100,900,b),400===b?"normal":700===b?"bold":String(b)}function d(a,b){return [a,b,c]}a.addPropertiesHandler(b,d,["font-weight"]);}(b),function(a){function b(a){var b={};for(var c in a)b[c]=-a[c];return b}function c(b){return a.consumeToken(/^(left|center|right|top|bottom)\b/i,b)||a.consumeLengthOrPercent(b)}function d(b,d){var e=a.consumeRepeated(c,/^/,d);if(e&&""==e[1]){var f=e[0];if(f[0]=f[0]||"center",f[1]=f[1]||"center",3==b&&(f[2]=f[2]||{px:0}),f.length==b){if(/top|bottom/.test(f[0])||/left|right/.test(f[1])){var h=f[0];f[0]=f[1],f[1]=h;}if(/left|right|center|Object/.test(f[0])&&/top|bottom|center|Object/.test(f[1]))return f.map(function(a){return "object"==typeof a?a:g[a]})}}}function e(d){var e=a.consumeRepeated(c,/^/,d);if(e){for(var f=e[0],h=[{"%":50},{"%":50}],i=0,j=!1,k=0;k<f.length;k++){var l=f[k];"string"==typeof l?(j=/bottom|right/.test(l),i={left:0,right:0,center:i,top:1,bottom:1}[l],h[i]=g[l],"center"==l&&i++):(j&&(l=b(l),l["%"]=(l["%"]||0)+100),h[i]=l,i++,j=!1);}return [h,e[1]]}}function f(b){var c=a.consumeRepeated(e,/^,/,b);if(c&&""==c[1])return c[0]}var g={left:{"%":0},center:{"%":50},right:{"%":100},top:{"%":0},bottom:{"%":100}},h=a.mergeNestedRepeated.bind(null,a.mergeDimensions," ");a.addPropertiesHandler(d.bind(null,3),h,["transform-origin"]),a.addPropertiesHandler(d.bind(null,2),h,["perspective-origin"]),a.consumePosition=e,a.mergeOffsetList=h;var i=a.mergeNestedRepeated.bind(null,h,", ");a.addPropertiesHandler(f,i,["background-position","object-position"]);}(b),function(a){function b(b){var c=a.consumeToken(/^circle/,b);if(c&&c[0])return ["circle"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0,/^\(/)),d,a.ignore(a.consumeToken.bind(void 0,/^at/)),a.consumePosition,a.ignore(a.consumeToken.bind(void 0,/^\)/))],c[1]));var f=a.consumeToken(/^ellipse/,b);if(f&&f[0])return ["ellipse"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0,/^\(/)),e,a.ignore(a.consumeToken.bind(void 0,/^at/)),a.consumePosition,a.ignore(a.consumeToken.bind(void 0,/^\)/))],f[1]));var g=a.consumeToken(/^polygon/,b);return g&&g[0]?["polygon"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0,/^\(/)),a.optional(a.consumeToken.bind(void 0,/^nonzero\s*,|^evenodd\s*,/),"nonzero,"),a.consumeSizePairList,a.ignore(a.consumeToken.bind(void 0,/^\)/))],g[1])):void 0}function c(b,c){if(b[0]===c[0])return "circle"==b[0]?a.mergeList(b.slice(1),c.slice(1),["circle(",a.mergeDimensions," at ",a.mergeOffsetList,")"]):"ellipse"==b[0]?a.mergeList(b.slice(1),c.slice(1),["ellipse(",a.mergeNonNegativeSizePair," at ",a.mergeOffsetList,")"]):"polygon"==b[0]&&b[1]==c[1]?a.mergeList(b.slice(2),c.slice(2),["polygon(",b[1],g,")"]):void 0}var d=a.consumeParenthesised.bind(null,a.parseLengthOrPercent),e=a.consumeRepeated.bind(void 0,d,/^/),f=a.mergeNestedRepeated.bind(void 0,a.mergeDimensions," "),g=a.mergeNestedRepeated.bind(void 0,f,",");a.addPropertiesHandler(b,c,["shape-outside"]);}(b),function(a,b){function c(a,b){b.concat([a]).forEach(function(b){b in document.documentElement.style&&(d[a]=b),e[b]=a;});}var d={},e={};c("transform",["webkitTransform","msTransform"]),c("transformOrigin",["webkitTransformOrigin"]),c("perspective",["webkitPerspective"]),c("perspectiveOrigin",["webkitPerspectiveOrigin"]),a.propertyName=function(a){return d[a]||a},a.unprefixedPropertyName=function(a){return e[a]||a};}(b);}(),function(){if(void 0===document.createElement("div").animate([]).oncancel){var a;if(window.performance&&performance.now)var a=function(){return performance.now()};else var a=function(){return Date.now()};var b=function(a,b,c){this.target=a,this.currentTime=b,this.timelineTime=c,this.type="cancel",this.bubbles=!1,this.cancelable=!1,this.currentTarget=a,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now();},c=window.Element.prototype.animate;window.Element.prototype.animate=function(d,e){var f=c.call(this,d,e);f._cancelHandlers=[],f.oncancel=null;var g=f.cancel;f.cancel=function(){g.call(this);var c=new b(this,null,a()),d=this._cancelHandlers.concat(this.oncancel?[this.oncancel]:[]);setTimeout(function(){d.forEach(function(a){a.call(c.target,c);});},0);};var h=f.addEventListener;f.addEventListener=function(a,b){"function"==typeof b&&"cancel"==a?this._cancelHandlers.push(b):h.call(this,a,b);};var i=f.removeEventListener;return f.removeEventListener=function(a,b){if("cancel"==a){var c=this._cancelHandlers.indexOf(b);c>=0&&this._cancelHandlers.splice(c,1);}else i.call(this,a,b);},f};}}(),function(a){var b=document.documentElement,c=null,d=!1;try{var e=getComputedStyle(b).getPropertyValue("opacity"),f="0"==e?"1":"0";c=b.animate({opacity:[f,f]},{duration:1}),c.currentTime=0,d=getComputedStyle(b).getPropertyValue("opacity")==f;}catch(a){}finally{c&&c.cancel();}if(!d){var g=window.Element.prototype.animate;window.Element.prototype.animate=function(b,c){return window.Symbol&&Symbol.iterator&&Array.prototype.from&&b[Symbol.iterator]&&(b=Array.from(b)),Array.isArray(b)||null===b||(b=a.convertToArrayForm(b)),g.call(this,b,c)};}}(a);}();

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    const nativeShadow = !(window['ShadyDOM'] && window['ShadyDOM']['inUse']);
    let nativeCssVariables_;

    /**
     * @param {(ShadyCSSOptions | ShadyCSSInterface)=} settings
     */
    function calcCssVariables(settings) {
      if (settings && settings['shimcssproperties']) {
        nativeCssVariables_ = false;
      } else {
        // chrome 49 has semi-working css vars, check if box-shadow works
        // safari 9.1 has a recalc bug: https://bugs.webkit.org/show_bug.cgi?id=155782
        // However, shim css custom properties are only supported with ShadyDOM enabled,
        // so fall back on native if we do not detect ShadyDOM
        // Edge 15: custom properties used in ::before and ::after will also be used in the parent element
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12414257/
        nativeCssVariables_ = nativeShadow || Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) &&
          window.CSS && CSS.supports && CSS.supports('box-shadow', '0 0 0 var(--foo)'));
      }
    }

    /** @type {string | undefined} */
    let cssBuild;
    if (window.ShadyCSS && window.ShadyCSS.cssBuild !== undefined) {
      cssBuild = window.ShadyCSS.cssBuild;
    }

    /** @type {boolean} */
    const disableRuntime = Boolean(window.ShadyCSS && window.ShadyCSS.disableRuntime);

    if (window.ShadyCSS && window.ShadyCSS.nativeCss !== undefined) {
      nativeCssVariables_ = window.ShadyCSS.nativeCss;
    } else if (window.ShadyCSS) {
      calcCssVariables(window.ShadyCSS);
      // reset window variable to let ShadyCSS API take its place
      window.ShadyCSS = undefined;
    } else {
      calcCssVariables(window['WebComponents'] && window['WebComponents']['flags']);
    }

    // Hack for type error under new type inference which doesn't like that
    // nativeCssVariables is updated in a function and assigns the type
    // `function(): ?` instead of `boolean`.
    const nativeCssVariables = /** @type {boolean} */(nativeCssVariables_);

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /** @unrestricted */
    class StyleNode {
      constructor() {
        /** @type {number} */
        this['start'] = 0;
        /** @type {number} */
        this['end'] = 0;
        /** @type {StyleNode} */
        this['previous'] = null;
        /** @type {StyleNode} */
        this['parent'] = null;
        /** @type {Array<StyleNode>} */
        this['rules'] = null;
        /** @type {string} */
        this['parsedCssText'] = '';
        /** @type {string} */
        this['cssText'] = '';
        /** @type {boolean} */
        this['atRule'] = false;
        /** @type {number} */
        this['type'] = 0;
        /** @type {string} */
        this['keyframesName'] = '';
        /** @type {string} */
        this['selector'] = '';
        /** @type {string} */
        this['parsedSelector'] = '';
      }
    }

    // given a string of css, return a simple rule tree
    /**
     * @param {string} text
     * @return {StyleNode}
     */
    function parse(text) {
      text = clean(text);
      return parseCss(lex(text), text);
    }

    // remove stuff we don't care about that may hinder parsing
    /**
     * @param {string} cssText
     * @return {string}
     */
    function clean(cssText) {
      return cssText.replace(RX.comments, '').replace(RX.port, '');
    }

    // super simple {...} lexer that returns a node tree
    /**
     * @param {string} text
     * @return {StyleNode}
     */
    function lex(text) {
      let root = new StyleNode();
      root['start'] = 0;
      root['end'] = text.length;
      let n = root;
      for (let i = 0, l = text.length; i < l; i++) {
        if (text[i] === OPEN_BRACE) {
          if (!n['rules']) {
            n['rules'] = [];
          }
          let p = n;
          let previous = p['rules'][p['rules'].length - 1] || null;
          n = new StyleNode();
          n['start'] = i + 1;
          n['parent'] = p;
          n['previous'] = previous;
          p['rules'].push(n);
        } else if (text[i] === CLOSE_BRACE) {
          n['end'] = i + 1;
          n = n['parent'] || root;
        }
      }
      return root;
    }

    // add selectors/cssText to node tree
    /**
     * @param {StyleNode} node
     * @param {string} text
     * @return {StyleNode}
     */
    function parseCss(node, text) {
      let t = text.substring(node['start'], node['end'] - 1);
      node['parsedCssText'] = node['cssText'] = t.trim();
      if (node['parent']) {
        let ss = node['previous'] ? node['previous']['end'] : node['parent']['start'];
        t = text.substring(ss, node['start'] - 1);
        t = _expandUnicodeEscapes(t);
        t = t.replace(RX.multipleSpaces, ' ');
        // TODO(sorvell): ad hoc; make selector include only after last ;
        // helps with mixin syntax
        t = t.substring(t.lastIndexOf(';') + 1);
        let s = node['parsedSelector'] = node['selector'] = t.trim();
        node['atRule'] = (s.indexOf(AT_START) === 0);
        // note, support a subset of rule types...
        if (node['atRule']) {
          if (s.indexOf(MEDIA_START) === 0) {
            node['type'] = types.MEDIA_RULE;
          } else if (s.match(RX.keyframesRule)) {
            node['type'] = types.KEYFRAMES_RULE;
            node['keyframesName'] =
              node['selector'].split(RX.multipleSpaces).pop();
          }
        } else {
          if (s.indexOf(VAR_START) === 0) {
            node['type'] = types.MIXIN_RULE;
          } else {
            node['type'] = types.STYLE_RULE;
          }
        }
      }
      let r$ = node['rules'];
      if (r$) {
        for (let i = 0, l = r$.length, r;
          (i < l) && (r = r$[i]); i++) {
          parseCss(r, text);
        }
      }
      return node;
    }

    /**
     * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
     * expanded form that doesn't require trailing space `\000033`
     * @param {string} s
     * @return {string}
     */
    function _expandUnicodeEscapes(s) {
      return s.replace(/\\([0-9a-f]{1,6})\s/gi, function() {
        let code = arguments[1],
          repeat = 6 - code.length;
        while (repeat--) {
          code = '0' + code;
        }
        return '\\' + code;
      });
    }

    /**
     * stringify parsed css.
     * @param {StyleNode} node
     * @param {boolean=} preserveProperties
     * @param {string=} text
     * @return {string}
     */
    function stringify(node, preserveProperties, text = '') {
      // calc rule cssText
      let cssText = '';
      if (node['cssText'] || node['rules']) {
        let r$ = node['rules'];
        if (r$ && !_hasMixinRules(r$)) {
          for (let i = 0, l = r$.length, r;
            (i < l) && (r = r$[i]); i++) {
            cssText = stringify(r, preserveProperties, cssText);
          }
        } else {
          cssText = preserveProperties ? node['cssText'] :
            removeCustomProps(node['cssText']);
          cssText = cssText.trim();
          if (cssText) {
            cssText = '  ' + cssText + '\n';
          }
        }
      }
      // emit rule if there is cssText
      if (cssText) {
        if (node['selector']) {
          text += node['selector'] + ' ' + OPEN_BRACE + '\n';
        }
        text += cssText;
        if (node['selector']) {
          text += CLOSE_BRACE + '\n\n';
        }
      }
      return text;
    }

    /**
     * @param {Array<StyleNode>} rules
     * @return {boolean}
     */
    function _hasMixinRules(rules) {
      let r = rules[0];
      return Boolean(r) && Boolean(r['selector']) && r['selector'].indexOf(VAR_START) === 0;
    }

    /**
     * @param {string} cssText
     * @return {string}
     */
    function removeCustomProps(cssText) {
      cssText = removeCustomPropAssignment(cssText);
      return removeCustomPropApply(cssText);
    }

    /**
     * @param {string} cssText
     * @return {string}
     */
    function removeCustomPropAssignment(cssText) {
      return cssText
        .replace(RX.customProp, '')
        .replace(RX.mixinProp, '');
    }

    /**
     * @param {string} cssText
     * @return {string}
     */
    function removeCustomPropApply(cssText) {
      return cssText
        .replace(RX.mixinApply, '')
        .replace(RX.varApply, '');
    }

    /** @enum {number} */
    const types = {
      STYLE_RULE: 1,
      KEYFRAMES_RULE: 7,
      MEDIA_RULE: 4,
      MIXIN_RULE: 1000
    };

    const OPEN_BRACE = '{';
    const CLOSE_BRACE = '}';

    // helper regexp's
    const RX = {
      comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      port: /@import[^;]*;/gim,
      customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      keyframesRule: /^@[^\s]*keyframes/,
      multipleSpaces: /\s+/g
    };

    const VAR_START = '--';
    const MEDIA_START = '@media';
    const AT_START = '@';

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    const VAR_ASSIGN = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;
    const MIXIN_MATCH = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;
    const MEDIA_MATCH = /@media\s(.*)/;

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /** @type {!Set<string>} */
    const styleTextSet = new Set();

    const scopingAttribute = 'shady-unscoped';

    /**
     * Add a specifically-marked style to the document directly, and only one copy of that style.
     *
     * @param {!HTMLStyleElement} style
     * @return {undefined}
     */
    function processUnscopedStyle(style) {
      const text = style.textContent;
      if (!styleTextSet.has(text)) {
        styleTextSet.add(text);
        const newStyle = style.cloneNode(true);
        document.head.appendChild(newStyle);
      }
    }

    /**
     * Check if a style is supposed to be unscoped
     * @param {!HTMLStyleElement} style
     * @return {boolean} true if the style has the unscoping attribute
     */
    function isUnscopedStyle(style) {
      return style.hasAttribute(scopingAttribute);
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * @param {string|StyleNode} rules
     * @param {function(StyleNode)=} callback
     * @return {string}
     */
    function toCssText (rules, callback) {
      if (!rules) {
        return '';
      }
      if (typeof rules === 'string') {
        rules = parse(rules);
      }
      if (callback) {
        forEachRule(rules, callback);
      }
      return stringify(rules, nativeCssVariables);
    }

    /**
     * @param {HTMLStyleElement} style
     * @return {StyleNode}
     */
    function rulesForStyle(style) {
      if (!style['__cssRules'] && style.textContent) {
        style['__cssRules'] = parse(style.textContent);
      }
      return style['__cssRules'] || null;
    }

    /**
     * @param {StyleNode} node
     * @param {Function=} styleRuleCallback
     * @param {Function=} keyframesRuleCallback
     * @param {boolean=} onlyActiveRules
     */
    function forEachRule(node, styleRuleCallback, keyframesRuleCallback, onlyActiveRules) {
      if (!node) {
        return;
      }
      let skipRules = false;
      let type = node['type'];
      if (onlyActiveRules) {
        if (type === types.MEDIA_RULE) {
          let matchMedia = node['selector'].match(MEDIA_MATCH);
          if (matchMedia) {
            // if rule is a non matching @media rule, skip subrules
            if (!window.matchMedia(matchMedia[1]).matches) {
              skipRules = true;
            }
          }
        }
      }
      if (type === types.STYLE_RULE) {
        styleRuleCallback(node);
      } else if (keyframesRuleCallback &&
        type === types.KEYFRAMES_RULE) {
        keyframesRuleCallback(node);
      } else if (type === types.MIXIN_RULE) {
        skipRules = true;
      }
      let r$ = node['rules'];
      if (r$ && !skipRules) {
        for (let i=0, l=r$.length, r; (i<l) && (r=r$[i]); i++) {
          forEachRule(r, styleRuleCallback, keyframesRuleCallback, onlyActiveRules);
        }
      }
    }

    /**
     * Walk from text[start] matching parens and
     * returns position of the outer end paren
     * @param {string} text
     * @param {number} start
     * @return {number}
     */
    function findMatchingParen(text, start) {
      let level = 0;
      for (let i=start, l=text.length; i < l; i++) {
        if (text[i] === '(') {
          level++;
        } else if (text[i] === ')') {
          if (--level === 0) {
            return i;
          }
        }
      }
      return -1;
    }

    /**
     * @param {string} str
     * @param {function(string, string, string, string)} callback
     */
    function processVariableAndFallback(str, callback) {
      // find 'var('
      let start = str.indexOf('var(');
      if (start === -1) {
        // no var?, everything is prefix
        return callback(str, '', '', '');
      }
      //${prefix}var(${inner})${suffix}
      let end = findMatchingParen(str, start + 3);
      let inner = str.substring(start + 4, end);
      let prefix = str.substring(0, start);
      // suffix may have other variables
      let suffix = processVariableAndFallback(str.substring(end + 1), callback);
      let comma = inner.indexOf(',');
      // value and fallback args should be trimmed to match in property lookup
      if (comma === -1) {
        // variable, no fallback
        return callback(prefix, inner.trim(), '', suffix);
      }
      // var(${value},${fallback})
      let value = inner.substring(0, comma).trim();
      let fallback = inner.substring(comma + 1).trim();
      return callback(prefix, value, fallback, suffix);
    }

    /**
     * @type {function(*):*}
     */
    const wrap = window['ShadyDOM'] && window['ShadyDOM']['wrap'] || ((node) => node);

    /**
     * @param {Element | {is: string, extends: string}} element
     * @return {{is: string, typeExtension: string}}
     */
    function getIsExtends(element) {
      let localName = element['localName'];
      let is = '', typeExtension = '';
      /*
      NOTE: technically, this can be wrong for certain svg elements
      with `-` in the name like `<font-face>`
      */
      if (localName) {
        if (localName.indexOf('-') > -1) {
          is = localName;
        } else {
          typeExtension = localName;
          is = (element.getAttribute && element.getAttribute('is')) || '';
        }
      } else {
        is = /** @type {?} */(element).is;
        typeExtension = /** @type {?} */(element).extends;
      }
      return {is, typeExtension};
    }

    /**
     * @param {Element|DocumentFragment} element
     * @return {string}
     */
    function gatherStyleText(element) {
      /** @type {!Array<string>} */
      const styleTextParts = [];
      const styles = /** @type {!NodeList<!HTMLStyleElement>} */(element.querySelectorAll('style'));
      for (let i = 0; i < styles.length; i++) {
        const style = styles[i];
        if (isUnscopedStyle(style)) {
          if (!nativeShadow) {
            processUnscopedStyle(style);
            style.parentNode.removeChild(style);
          }
        } else {
          styleTextParts.push(style.textContent);
          style.parentNode.removeChild(style);
        }
      }
      return styleTextParts.join('').trim();
    }

    const CSS_BUILD_ATTR = 'css-build';

    /**
     * Return the polymer-css-build "build type" applied to this element
     *
     * @param {!HTMLElement} element
     * @return {string} Can be "", "shady", or "shadow"
     */
    function getCssBuild(element) {
      if (cssBuild !== undefined) {
        return /** @type {string} */(cssBuild);
      }
      if (element.__cssBuild === undefined) {
        // try attribute first, as it is the common case
        const attrValue = element.getAttribute(CSS_BUILD_ATTR);
        if (attrValue) {
          element.__cssBuild = attrValue;
        } else {
          const buildComment = getBuildComment(element);
          if (buildComment !== '') {
            // remove build comment so it is not needlessly copied into every element instance
            removeBuildComment(element);
          }
          element.__cssBuild = buildComment;
        }
      }
      return element.__cssBuild || '';
    }

    /**
     * Check if the given element, either a <template> or <style>, has been processed
     * by polymer-css-build.
     *
     * If so, then we can make a number of optimizations:
     * - polymer-css-build will decompose mixins into individual CSS Custom Properties,
     * so the ApplyShim can be skipped entirely.
     * - Under native ShadowDOM, the style text can just be copied into each instance
     * without modification
     * - If the build is "shady" and ShadyDOM is in use, the styling does not need
     * scoping beyond the shimming of CSS Custom Properties
     *
     * @param {!HTMLElement} element
     * @return {boolean}
     */
    function elementHasBuiltCss(element) {
      return getCssBuild(element) !== '';
    }

    /**
     * For templates made with tagged template literals, polymer-css-build will
     * insert a comment of the form `<!--css-build:shadow-->`
     *
     * @param {!HTMLElement} element
     * @return {string}
     */
    function getBuildComment(element) {
      const buildComment = element.localName === 'template' ?
          /** @type {!HTMLTemplateElement} */ (element).content.firstChild :
          element.firstChild;
      if (buildComment instanceof Comment) {
        const commentParts = buildComment.textContent.trim().split(':');
        if (commentParts[0] === CSS_BUILD_ATTR) {
          return commentParts[1];
        }
      }
      return '';
    }

    /**
     * @param {!HTMLElement} element
     */
    function removeBuildComment(element) {
      const buildComment = element.localName === 'template' ?
          /** @type {!HTMLTemplateElement} */ (element).content.firstChild :
          element.firstChild;
      buildComment.parentNode.removeChild(buildComment);
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * @param {Element} element
     * @param {Object=} properties
     */
    function updateNativeProperties(element, properties) {
      // remove previous properties
      for (let p in properties) {
        // NOTE: for bc with shim, don't apply null values.
        if (p === null) {
          element.style.removeProperty(p);
        } else {
          element.style.setProperty(p, properties[p]);
        }
      }
    }

    /**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */
    function getComputedStyleValue(element, property) {
      /**
       * @const {string}
       */
      const value = window.getComputedStyle(element).getPropertyValue(property);
      if (!value) {
        return '';
      } else {
        return value.trim();
      }
    }

    /**
     * return true if `cssText` contains a mixin definition or consumption
     * @param {string} cssText
     * @return {boolean}
     */
    function detectMixin(cssText) {
      const has = MIXIN_MATCH.test(cssText) || VAR_ASSIGN.test(cssText);
      // reset state of the regexes
      MIXIN_MATCH.lastIndex = 0;
      VAR_ASSIGN.lastIndex = 0;
      return has;
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    const APPLY_NAME_CLEAN = /;\s*/m;
    const INITIAL_INHERIT = /^\s*(initial)|(inherit)\s*$/;
    const IMPORTANT = /\s*!important/;

    // separator used between mixin-name and mixin-property-name when producing properties
    // NOTE: plain '-' may cause collisions in user styles
    const MIXIN_VAR_SEP = '_-_';

    // map of mixin to property names
    // --foo: {border: 2px} -> {properties: {(--foo, ['border'])}, dependants: {'element-name': proto}}
    class MixinMap {
      constructor() {
        /** @type {!Object<string, !MixinMapEntry>} */
        this._map = {};
      }
      /**
       * @param {string} name
       * @param {!PropertyEntry} props
       */
      set(name, props) {
        name = name.trim();
        this._map[name] = {
          properties: props,
          dependants: {}
        };
      }
      /**
       * @param {string} name
       * @return {MixinMapEntry}
       */
      get(name) {
        name = name.trim();
        return this._map[name] || null;
      }
    }

    /**
     * Callback for when an element is marked invalid
     * @type {?function(string)}
     */
    let invalidCallback = null;

    /** @unrestricted */
    class ApplyShim {
      constructor() {
        /** @type {?string} */
        this._currentElement = null;
        /** @type {HTMLMetaElement} */
        this._measureElement = null;
        this._map = new MixinMap();
      }
      /**
       * return true if `cssText` contains a mixin definition or consumption
       * @param {string} cssText
       * @return {boolean}
       */
      detectMixin(cssText) {
        return detectMixin(cssText);
      }

      /**
       * Gather styles into one style for easier processing
       * @param {!HTMLTemplateElement} template
       * @return {HTMLStyleElement}
       */
      gatherStyles(template) {
        const styleText = gatherStyleText(template.content);
        if (styleText) {
          const style = /** @type {!HTMLStyleElement} */(document.createElement('style'));
          style.textContent = styleText;
          template.content.insertBefore(style, template.content.firstChild);
          return style;
        }
        return null;
      }
      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @return {StyleNode}
       */
      transformTemplate(template, elementName) {
        if (template._gatheredStyle === undefined) {
          template._gatheredStyle = this.gatherStyles(template);
        }
        /** @type {HTMLStyleElement} */
        const style = template._gatheredStyle;
        return style ? this.transformStyle(style, elementName) : null;
      }
      /**
       * @param {!HTMLStyleElement} style
       * @param {string} elementName
       * @return {StyleNode}
       */
      transformStyle(style, elementName = '') {
        let ast = rulesForStyle(style);
        this.transformRules(ast, elementName);
        style.textContent = toCssText(ast);
        return ast;
      }
      /**
       * @param {!HTMLStyleElement} style
       * @return {StyleNode}
       */
      transformCustomStyle(style) {
        let ast = rulesForStyle(style);
        forEachRule(ast, (rule) => {
          if (rule['selector'] === ':root') {
            rule['selector'] = 'html';
          }
          this.transformRule(rule);
        });
        style.textContent = toCssText(ast);
        return ast;
      }
      /**
       * @param {StyleNode} rules
       * @param {string} elementName
       */
      transformRules(rules, elementName) {
        this._currentElement = elementName;
        forEachRule(rules, (r) => {
          this.transformRule(r);
        });
        this._currentElement = null;
      }
      /**
       * @param {!StyleNode} rule
       */
      transformRule(rule) {
        rule['cssText'] = this.transformCssText(rule['parsedCssText'], rule);
        // :root was only used for variable assignment in property shim,
        // but generates invalid selectors with real properties.
        // replace with `:host > *`, which serves the same effect
        if (rule['selector'] === ':root') {
          rule['selector'] = ':host > *';
        }
      }
      /**
       * @param {string} cssText
       * @param {!StyleNode} rule
       * @return {string}
       */
      transformCssText(cssText, rule) {
        // produce variables
        cssText = cssText.replace(VAR_ASSIGN, (matchText, propertyName, valueProperty, valueMixin) =>
          this._produceCssProperties(matchText, propertyName, valueProperty, valueMixin, rule));
        // consume mixins
        return this._consumeCssProperties(cssText, rule);
      }
      /**
       * @param {string} property
       * @return {string}
       */
      _getInitialValueForProperty(property) {
        if (!this._measureElement) {
          this._measureElement = /** @type {HTMLMetaElement} */(document.createElement('meta'));
          this._measureElement.setAttribute('apply-shim-measure', '');
          this._measureElement.style.all = 'initial';
          document.head.appendChild(this._measureElement);
        }
        return window.getComputedStyle(this._measureElement).getPropertyValue(property);
      }
      /**
       * Walk over all rules before this rule to find fallbacks for mixins
       *
       * @param {!StyleNode} startRule
       * @return {!Object}
       */
      _fallbacksFromPreviousRules(startRule) {
        // find the "top" rule
        let topRule = startRule;
        while (topRule['parent']) {
          topRule = topRule['parent'];
        }
        const fallbacks = {};
        let seenStartRule = false;
        forEachRule(topRule, (r) => {
          // stop when we hit the input rule
          seenStartRule = seenStartRule || r === startRule;
          if (seenStartRule) {
            return;
          }
          // NOTE: Only matching selectors are "safe" for this fallback processing
          // It would be prohibitive to run `matchesSelector()` on each selector,
          // so we cheat and only check if the same selector string is used, which
          // guarantees things like specificity matching
          if (r['selector'] === startRule['selector']) {
            Object.assign(fallbacks, this._cssTextToMap(r['parsedCssText']));
          }
        });
        return fallbacks;
      }
      /**
       * replace mixin consumption with variable consumption
       * @param {string} text
       * @param {!StyleNode=} rule
       * @return {string}
       */
      _consumeCssProperties(text, rule) {
        /** @type {Array} */
        let m = null;
        // loop over text until all mixins with defintions have been applied
        while((m = MIXIN_MATCH.exec(text))) {
          let matchText = m[0];
          let mixinName = m[1];
          let idx = m.index;
          // collect properties before apply to be "defaults" if mixin might override them
          // match includes a "prefix", so find the start and end positions of @apply
          let applyPos = idx + matchText.indexOf('@apply');
          let afterApplyPos = idx + matchText.length;
          // find props defined before this @apply
          let textBeforeApply = text.slice(0, applyPos);
          let textAfterApply = text.slice(afterApplyPos);
          let defaults = rule ? this._fallbacksFromPreviousRules(rule) : {};
          Object.assign(defaults, this._cssTextToMap(textBeforeApply));
          let replacement = this._atApplyToCssProperties(mixinName, defaults);
          // use regex match position to replace mixin, keep linear processing time
          text = `${textBeforeApply}${replacement}${textAfterApply}`;
          // move regex search to _after_ replacement
          MIXIN_MATCH.lastIndex = idx + replacement.length;
        }
        return text;
      }
      /**
       * produce variable consumption at the site of mixin consumption
       * `@apply` --foo; -> for all props (${propname}: var(--foo_-_${propname}, ${fallback[propname]}}))
       * Example:
       *  border: var(--foo_-_border); padding: var(--foo_-_padding, 2px)
       *
       * @param {string} mixinName
       * @param {Object} fallbacks
       * @return {string}
       */
      _atApplyToCssProperties(mixinName, fallbacks) {
        mixinName = mixinName.replace(APPLY_NAME_CLEAN, '');
        let vars = [];
        let mixinEntry = this._map.get(mixinName);
        // if we depend on a mixin before it is created
        // make a sentinel entry in the map to add this element as a dependency for when it is defined.
        if (!mixinEntry) {
          this._map.set(mixinName, {});
          mixinEntry = this._map.get(mixinName);
        }
        if (mixinEntry) {
          if (this._currentElement) {
            mixinEntry.dependants[this._currentElement] = true;
          }
          let p, parts, f;
          const properties = mixinEntry.properties;
          for (p in properties) {
            f = fallbacks && fallbacks[p];
            parts = [p, ': var(', mixinName, MIXIN_VAR_SEP, p];
            if (f) {
              parts.push(',', f.replace(IMPORTANT, ''));
            }
            parts.push(')');
            if (IMPORTANT.test(properties[p])) {
              parts.push(' !important');
            }
            vars.push(parts.join(''));
          }
        }
        return vars.join('; ');
      }

      /**
       * @param {string} property
       * @param {string} value
       * @return {string}
       */
      _replaceInitialOrInherit(property, value) {
        let match = INITIAL_INHERIT.exec(value);
        if (match) {
          if (match[1]) {
            // initial
            // replace `initial` with the concrete initial value for this property
            value = this._getInitialValueForProperty(property);
          } else {
            // inherit
            // with this purposfully illegal value, the variable will be invalid at
            // compute time (https://www.w3.org/TR/css-variables/#invalid-at-computed-value-time)
            // and for inheriting values, will behave similarly
            // we cannot support the same behavior for non inheriting values like 'border'
            value = 'apply-shim-inherit';
          }
        }
        return value;
      }

      /**
       * "parse" a mixin definition into a map of properties and values
       * cssTextToMap('border: 2px solid black') -> ('border', '2px solid black')
       * @param {string} text
       * @param {boolean=} replaceInitialOrInherit
       * @return {!Object<string, string>}
       */
      _cssTextToMap(text, replaceInitialOrInherit = false) {
        let props = text.split(';');
        let property, value;
        let out = {};
        for (let i = 0, p, sp; i < props.length; i++) {
          p = props[i];
          if (p) {
            sp = p.split(':');
            // ignore lines that aren't definitions like @media
            if (sp.length > 1) {
              property = sp[0].trim();
              // some properties may have ':' in the value, like data urls
              value = sp.slice(1).join(':');
              if (replaceInitialOrInherit) {
                value = this._replaceInitialOrInherit(property, value);
              }
              out[property] = value;
            }
          }
        }
        return out;
      }

      /**
       * @param {MixinMapEntry} mixinEntry
       */
      _invalidateMixinEntry(mixinEntry) {
        if (!invalidCallback) {
          return;
        }
        for (let elementName in mixinEntry.dependants) {
          if (elementName !== this._currentElement) {
            invalidCallback(elementName);
          }
        }
      }

      /**
       * @param {string} matchText
       * @param {string} propertyName
       * @param {?string} valueProperty
       * @param {?string} valueMixin
       * @param {!StyleNode} rule
       * @return {string}
       */
      _produceCssProperties(matchText, propertyName, valueProperty, valueMixin, rule) {
        // handle case where property value is a mixin
        if (valueProperty) {
          // form: --mixin2: var(--mixin1), where --mixin1 is in the map
          processVariableAndFallback(valueProperty, (prefix, value) => {
            if (value && this._map.get(value)) {
              valueMixin = `@apply ${value};`;
            }
          });
        }
        if (!valueMixin) {
          return matchText;
        }
        let mixinAsProperties = this._consumeCssProperties('' + valueMixin, rule);
        let prefix = matchText.slice(0, matchText.indexOf('--'));
        // `initial` and `inherit` as properties in a map should be replaced because
        // these keywords are eagerly evaluated when the mixin becomes CSS Custom Properties,
        // and would set the variable value, rather than carry the keyword to the `var()` usage.
        let mixinValues = this._cssTextToMap(mixinAsProperties, true);
        let combinedProps = mixinValues;
        let mixinEntry = this._map.get(propertyName);
        let oldProps = mixinEntry && mixinEntry.properties;
        if (oldProps) {
          // NOTE: since we use mixin, the map of properties is updated here
          // and this is what we want.
          combinedProps = Object.assign(Object.create(oldProps), mixinValues);
        } else {
          this._map.set(propertyName, combinedProps);
        }
        let out = [];
        let p, v;
        // set variables defined by current mixin
        let needToInvalidate = false;
        for (p in combinedProps) {
          v = mixinValues[p];
          // if property not defined by current mixin, set initial
          if (v === undefined) {
            v = 'initial';
          }
          if (oldProps && !(p in oldProps)) {
            needToInvalidate = true;
          }
          out.push(`${propertyName}${MIXIN_VAR_SEP}${p}: ${v}`);
        }
        if (needToInvalidate) {
          this._invalidateMixinEntry(mixinEntry);
        }
        if (mixinEntry) {
          mixinEntry.properties = combinedProps;
        }
        // because the mixinMap is global, the mixin might conflict with
        // a different scope's simple variable definition:
        // Example:
        // some style somewhere:
        // --mixin1:{ ... }
        // --mixin2: var(--mixin1);
        // some other element:
        // --mixin1: 10px solid red;
        // --foo: var(--mixin1);
        // In this case, we leave the original variable definition in place.
        if (valueProperty) {
          prefix = `${matchText};${prefix}`;
        }
        return `${prefix}${out.join('; ')};`;
      }
    }

    /* exports */
    /* eslint-disable no-self-assign */
    ApplyShim.prototype['detectMixin'] = ApplyShim.prototype.detectMixin;
    ApplyShim.prototype['transformStyle'] = ApplyShim.prototype.transformStyle;
    ApplyShim.prototype['transformCustomStyle'] = ApplyShim.prototype.transformCustomStyle;
    ApplyShim.prototype['transformRules'] = ApplyShim.prototype.transformRules;
    ApplyShim.prototype['transformRule'] = ApplyShim.prototype.transformRule;
    ApplyShim.prototype['transformTemplate'] = ApplyShim.prototype.transformTemplate;
    ApplyShim.prototype['_separator'] = MIXIN_VAR_SEP;
    /* eslint-enable no-self-assign */
    Object.defineProperty(ApplyShim.prototype, 'invalidCallback', {
      /** @return {?function(string)} */
      get() {
        return invalidCallback;
      },
      /** @param {?function(string)} cb */
      set(cb) {
        invalidCallback = cb;
      }
    });

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * @const {!Object<string, !HTMLTemplateElement>}
     */
    const templateMap = {};

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /*
     * Utilities for handling invalidating apply-shim mixins for a given template.
     *
     * The invalidation strategy involves keeping track of the "current" version of a template's mixins, and updating that count when a mixin is invalidated.
     * The template
     */

    /** @const {string} */
    const CURRENT_VERSION = '_applyShimCurrentVersion';

    /** @const {string} */
    const NEXT_VERSION = '_applyShimNextVersion';

    /** @const {string} */
    const VALIDATING_VERSION = '_applyShimValidatingVersion';

    /**
     * @const {Promise<void>}
     */
    const promise = Promise.resolve();

    /**
     * @param {string} elementName
     */
    function invalidate(elementName){
      let template = templateMap[elementName];
      if (template) {
        invalidateTemplate(template);
      }
    }

    /**
     * This function can be called multiple times to mark a template invalid
     * and signal that the style inside must be regenerated.
     *
     * Use `startValidatingTemplate` to begin an asynchronous validation cycle.
     * During that cycle, call `templateIsValidating` to see if the template must
     * be revalidated
     * @param {HTMLTemplateElement} template
     */
    function invalidateTemplate(template) {
      // default the current version to 0
      template[CURRENT_VERSION] = template[CURRENT_VERSION] || 0;
      // ensure the "validating for" flag exists
      template[VALIDATING_VERSION] = template[VALIDATING_VERSION] || 0;
      // increment the next version
      template[NEXT_VERSION] = (template[NEXT_VERSION] || 0) + 1;
    }

    /**
     * @param {HTMLTemplateElement} template
     * @return {boolean}
     */
    function templateIsValid(template) {
      return template[CURRENT_VERSION] === template[NEXT_VERSION];
    }

    /**
     * Returns true if the template is currently invalid and `startValidating` has been called since the last invalidation.
     * If false, the template must be validated.
     * @param {HTMLTemplateElement} template
     * @return {boolean}
     */
    function templateIsValidating(template) {
      return !templateIsValid(template) && template[VALIDATING_VERSION] === template[NEXT_VERSION];
    }

    /**
     * Begin an asynchronous invalidation cycle.
     * This should be called after every validation of a template
     *
     * After one microtask, the template will be marked as valid until the next call to `invalidateTemplate`
     * @param {HTMLTemplateElement} template
     */
    function startValidatingTemplate(template) {
      // remember that the current "next version" is the reason for this validation cycle
      template[VALIDATING_VERSION] = template[NEXT_VERSION];
      // however, there only needs to be one async task to clear the counters
      if (!template._validating) {
        template._validating = true;
        promise.then(function() {
          // sync the current version to let future invalidations cause a refresh cycle
          template[CURRENT_VERSION] = template[NEXT_VERSION];
          template._validating = false;
        });
      }
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /** @type {Promise<void>} */
    let readyPromise = null;

    /** @type {?function(?function())} */
    let whenReady = window['HTMLImports'] && window['HTMLImports']['whenReady'] || null;

    /** @type {function()} */
    let resolveFn;

    /**
     * @param {?function()} callback
     */
    function documentWait(callback) {
      requestAnimationFrame(function() {
        if (whenReady) {
          whenReady(callback);
        } else {
          if (!readyPromise) {
            readyPromise = new Promise((resolve) => {resolveFn = resolve;});
            if (document.readyState === 'complete') {
              resolveFn();
            } else {
              document.addEventListener('readystatechange', () => {
                if (document.readyState === 'complete') {
                  resolveFn();
                }
              });
            }
          }
          readyPromise.then(function(){ callback && callback(); });
        }
      });
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    const SEEN_MARKER = '__seenByShadyCSS';
    const CACHED_STYLE = '__shadyCSSCachedStyle';

    /** @type {?function(!HTMLStyleElement)} */
    let transformFn = null;

    /** @type {?function()} */
    let validateFn = null;

    /**
    This interface is provided to add document-level <style> elements to ShadyCSS for processing.
    These styles must be processed by ShadyCSS to simulate ShadowRoot upper-bound encapsulation from outside styles
    In addition, these styles may also need to be processed for @apply rules and CSS Custom Properties

    To add document-level styles to ShadyCSS, one can call `ShadyCSS.addDocumentStyle(styleElement)` or `ShadyCSS.addDocumentStyle({getStyle: () => styleElement})`

    In addition, if the process used to discover document-level styles can be synchronously flushed, one should set `ShadyCSS.documentStyleFlush`.
    This function will be called when calculating styles.

    An example usage of the document-level styling api can be found in `examples/document-style-lib.js`

    @unrestricted
    */
    class CustomStyleInterface {
      constructor() {
        /** @type {!Array<!CustomStyleProvider>} */
        this['customStyles'] = [];
        this['enqueued'] = false;
        // NOTE(dfreedm): use quotes here to prevent closure inlining to `function(){}`;
        documentWait(() => {
          if (window['ShadyCSS']['flushCustomStyles']) {
            window['ShadyCSS']['flushCustomStyles']();
          }
        });
      }
      /**
       * Queue a validation for new custom styles to batch style recalculations
       */
      enqueueDocumentValidation() {
        if (this['enqueued'] || !validateFn) {
          return;
        }
        this['enqueued'] = true;
        documentWait(validateFn);
      }
      /**
       * @param {!HTMLStyleElement} style
       */
      addCustomStyle(style) {
        if (!style[SEEN_MARKER]) {
          style[SEEN_MARKER] = true;
          this['customStyles'].push(style);
          this.enqueueDocumentValidation();
        }
      }
      /**
       * @param {!CustomStyleProvider} customStyle
       * @return {HTMLStyleElement}
       */
      getStyleForCustomStyle(customStyle) {
        if (customStyle[CACHED_STYLE]) {
          return customStyle[CACHED_STYLE];
        }
        let style;
        if (customStyle['getStyle']) {
          style = customStyle['getStyle']();
        } else {
          style = customStyle;
        }
        return style;
      }
      /**
       * @return {!Array<!CustomStyleProvider>}
       */
      processStyles() {
        const cs = this['customStyles'];
        for (let i = 0; i < cs.length; i++) {
          const customStyle = cs[i];
          if (customStyle[CACHED_STYLE]) {
            continue;
          }
          const style = this.getStyleForCustomStyle(customStyle);
          if (style) {
            // HTMLImports polyfill may have cloned the style into the main document,
            // which is referenced with __appliedElement.
            const styleToTransform = /** @type {!HTMLStyleElement} */(style['__appliedElement'] || style);
            if (transformFn) {
              transformFn(styleToTransform);
            }
            customStyle[CACHED_STYLE] = styleToTransform;
          }
        }
        return cs;
      }
    }

    /* eslint-disable no-self-assign */
    CustomStyleInterface.prototype['addCustomStyle'] = CustomStyleInterface.prototype.addCustomStyle;
    CustomStyleInterface.prototype['getStyleForCustomStyle'] = CustomStyleInterface.prototype.getStyleForCustomStyle;
    CustomStyleInterface.prototype['processStyles'] = CustomStyleInterface.prototype.processStyles;
    /* eslint-enable no-self-assign */

    Object.defineProperties(CustomStyleInterface.prototype, {
      'transformCallback': {
        /** @return {?function(!HTMLStyleElement)} */
        get() {
          return transformFn;
        },
        /** @param {?function(!HTMLStyleElement)} fn */
        set(fn) {
          transformFn = fn;
        }
      },
      'validateCallback': {
        /** @return {?function()} */
        get() {
          return validateFn;
        },
        /**
         * @param {?function()} fn
         * @this {CustomStyleInterface}
         */
        set(fn) {
          let needsEnqueue = false;
          if (!validateFn) {
            needsEnqueue = true;
          }
          validateFn = fn;
          if (needsEnqueue) {
            this.enqueueDocumentValidation();
          }
        },
      }
    });

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /** @const {ApplyShim} */
    const applyShim = new ApplyShim();

    class ApplyShimInterface {
      constructor() {
        /** @type {?CustomStyleInterfaceInterface} */
        this.customStyleInterface = null;
        applyShim['invalidCallback'] = invalidate;
      }
      ensure() {
        if (this.customStyleInterface) {
          return;
        }
        if (window.ShadyCSS.CustomStyleInterface) {
          this.customStyleInterface =
              /** @type {!CustomStyleInterfaceInterface} */ (
                  window.ShadyCSS.CustomStyleInterface);
          this.customStyleInterface['transformCallback'] = (style) => {
            applyShim.transformCustomStyle(style);
          };
          this.customStyleInterface['validateCallback'] = () => {
            requestAnimationFrame(() => {
              if (this.customStyleInterface['enqueued']) {
                this.flushCustomStyles();
              }
            });
          };
        }
      }
      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       */
      prepareTemplate(template, elementName) {
        this.ensure();
        if (elementHasBuiltCss(template)) {
          return;
        }
        templateMap[elementName] = template;
        let ast = applyShim.transformTemplate(template, elementName);
        // save original style ast to use for revalidating instances
        template['_styleAst'] = ast;
      }
      flushCustomStyles() {
        this.ensure();
        if (!this.customStyleInterface) {
          return;
        }
        let styles = this.customStyleInterface['processStyles']();
        if (!this.customStyleInterface['enqueued']) {
          return;
        }
        for (let i = 0; i < styles.length; i++ ) {
          let cs = styles[i];
          let style = this.customStyleInterface['getStyleForCustomStyle'](cs);
          if (style) {
            applyShim.transformCustomStyle(style);
          }
        }
        this.customStyleInterface['enqueued'] = false;
      }
      /**
       * @param {HTMLElement} element
       * @param {Object=} properties
       */
      styleSubtree(element, properties) {
        this.ensure();
        if (properties) {
          updateNativeProperties(element, properties);
        }
        if (element.shadowRoot) {
          this.styleElement(element);
          let shadowChildren =
              /** @type {!ParentNode} */ (element.shadowRoot).children ||
              element.shadowRoot.childNodes;
          for (let i = 0; i < shadowChildren.length; i++) {
            this.styleSubtree(/** @type {HTMLElement} */(shadowChildren[i]));
          }
        } else {
          let children = element.children || element.childNodes;
          for (let i = 0; i < children.length; i++) {
            this.styleSubtree(/** @type {HTMLElement} */(children[i]));
          }
        }
      }
      /**
       * @param {HTMLElement} element
       */
      styleElement(element) {
        this.ensure();
        let {is} = getIsExtends(element);
        let template = templateMap[is];
        if (template && elementHasBuiltCss(template)) {
          return;
        }
        if (template && !templateIsValid(template)) {
          // only revalidate template once
          if (!templateIsValidating(template)) {
            this.prepareTemplate(template, is);
            startValidatingTemplate(template);
          }
          // update this element instance
          let root = element.shadowRoot;
          if (root) {
            let style = /** @type {HTMLStyleElement} */(root.querySelector('style'));
            if (style) {
              // reuse the template's style ast, it has all the original css text
              style['__cssRules'] = template['_styleAst'];
              style.textContent = toCssText(template['_styleAst']);
            }
          }
        }
      }
      /**
       * @param {Object=} properties
       */
      styleDocument(properties) {
        this.ensure();
        this.styleSubtree(document.body, properties);
      }
    }

    if (!window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
      const applyShimInterface = new ApplyShimInterface();
      let CustomStyleInterface$$1 = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;

      /** @suppress {duplicate} */
      window.ShadyCSS = {
        /**
         * @param {!HTMLTemplateElement} template
         * @param {string} elementName
         * @param {string=} elementExtends
         */
        prepareTemplate(template, elementName, elementExtends) { // eslint-disable-line no-unused-vars
          applyShimInterface.flushCustomStyles();
          applyShimInterface.prepareTemplate(template, elementName);
        },

        /**
         * @param {!HTMLTemplateElement} template
         * @param {string} elementName
         * @param {string=} elementExtends
         */
        prepareTemplateStyles(template, elementName, elementExtends) {
          window.ShadyCSS.prepareTemplate(template, elementName, elementExtends);
        },

        /**
         * @param {!HTMLTemplateElement} template
         * @param {string} elementName
         */
        prepareTemplateDom(template, elementName) {}, // eslint-disable-line no-unused-vars

        /**
         * @param {!HTMLElement} element
         * @param {Object=} properties
         */
        styleSubtree(element, properties) {
          applyShimInterface.flushCustomStyles();
          applyShimInterface.styleSubtree(element, properties);
        },

        /**
         * @param {!HTMLElement} element
         */
        styleElement(element) {
          applyShimInterface.flushCustomStyles();
          applyShimInterface.styleElement(element);
        },

        /**
         * @param {Object=} properties
         */
        styleDocument(properties) {
          applyShimInterface.flushCustomStyles();
          applyShimInterface.styleDocument(properties);
        },

        /**
         * @param {Element} element
         * @param {string} property
         * @return {string}
         */
        getComputedStyleValue(element, property) {
          return getComputedStyleValue(element, property);
        },

        flushCustomStyles() {
          applyShimInterface.flushCustomStyles();
        },

        nativeCss: nativeCssVariables,
        nativeShadow: nativeShadow,
        cssBuild: cssBuild,
        disableRuntime: disableRuntime,
      };

      if (CustomStyleInterface$$1) {
        window.ShadyCSS.CustomStyleInterface = CustomStyleInterface$$1;
      }
    }

    window.ShadyCSS.ApplyShim = applyShim;

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /* eslint-disable no-unused-vars */
    /**
     * When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
     * We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
     *
     * @param {string} prop Property name
     * @param {?Object} obj Reference object
     * @return {string} Potentially renamed property name
     */
    window.JSCompiler_renameProperty = function(prop, obj) {
      return prop;
    };

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    let CSS_URL_RX = /(url\()([^)]*)(\))/g;
    let ABS_URL = /(^\/[^\/])|(^#)|(^[\w-\d]*:)/;
    let workingURL;
    let resolveDoc;
    /**
     * Resolves the given URL against the provided `baseUri'.
     *
     * Note that this function performs no resolution for URLs that start
     * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
     * URL resolution, use `window.URL`.
     *
     * @param {string} url Input URL to resolve
     * @param {?string=} baseURI Base URI to resolve the URL against
     * @return {string} resolved URL
     */
    function resolveUrl(url, baseURI) {
      if (url && ABS_URL.test(url)) {
        return url;
      }
      if (url === '//') {
        return url;
      }
      // Lazy feature detection.
      if (workingURL === undefined) {
        workingURL = false;
        try {
          const u = new URL('b', 'http://a');
          u.pathname = 'c%20d';
          workingURL = (u.href === 'http://a/c%20d');
        } catch (e) {
          // silently fail
        }
      }
      if (!baseURI) {
        baseURI = document.baseURI || window.location.href;
      }
      if (workingURL) {
        try {
          return (new URL(url, baseURI)).href;
        } catch (e) {
          // Bad url or baseURI structure. Do not attempt to resolve.
          return url;
        }
      }
      // Fallback to creating an anchor into a disconnected document.
      if (!resolveDoc) {
        resolveDoc = document.implementation.createHTMLDocument('temp');
        resolveDoc.base = resolveDoc.createElement('base');
        resolveDoc.head.appendChild(resolveDoc.base);
        resolveDoc.anchor = resolveDoc.createElement('a');
        resolveDoc.body.appendChild(resolveDoc.anchor);
      }
      resolveDoc.base.href = baseURI;
      resolveDoc.anchor.href = url;
      return resolveDoc.anchor.href || url;

    }

    /**
     * Resolves any relative URL's in the given CSS text against the provided
     * `ownerDocument`'s `baseURI`.
     *
     * @param {string} cssText CSS text to process
     * @param {string} baseURI Base URI to resolve the URL against
     * @return {string} Processed CSS text with resolved URL's
     */
    function resolveCss(cssText, baseURI) {
      return cssText.replace(CSS_URL_RX, function(m, pre, url, post) {
        return pre + '\'' +
          resolveUrl(url.replace(/["']/g, ''), baseURI) +
          '\'' + post;
      });
    }

    /**
     * Returns a path from a given `url`. The path includes the trailing
     * `/` from the url.
     *
     * @param {string} url Input URL to transform
     * @return {string} resolved path
     */
    function pathFromUrl(url) {
      return url.substring(0, url.lastIndexOf('/') + 1);
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    const useShadow = !(window.ShadyDOM);
    const useNativeCSSProperties = Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss);
    const useNativeCustomElements = !(window.customElements.polyfillWrapFlushCallback);


    /**
     * Globally settable property that is automatically assigned to
     * `ElementMixin` instances, useful for binding in templates to
     * make URL's relative to an application's root.  Defaults to the main
     * document URL, but can be overridden by users.  It may be useful to set
     * `rootPath` to provide a stable application mount path when
     * using client side routing.
     */
    let rootPath = pathFromUrl(document.baseURI || window.location.href);

    /**
     * A global callback used to sanitize any value before inserting it into the DOM.
     * The callback signature is:
     *
     *  function sanitizeDOMValue(value, name, type, node) { ... }
     *
     * Where:
     *
     * `value` is the value to sanitize.
     * `name` is the name of an attribute or property (for example, href).
     * `type` indicates where the value is being inserted: one of property, attribute, or text.
     * `node` is the node where the value is being inserted.
     *
     * @type {(function(*,string,string,Node):*)|undefined}
     */
    let sanitizeDOMValue = window.Polymer && window.Polymer.sanitizeDOMValue || undefined;

    /**
     * Globally settable property to make Polymer Gestures use passive TouchEvent listeners when recognizing gestures.
     * When set to `true`, gestures made from touch will not be able to prevent scrolling, allowing for smoother
     * scrolling performance.
     * Defaults to `false` for backwards compatibility.
     */
    let passiveTouchGestures = false;

    /**
     * Setting to ensure Polymer template evaluation only occurs based on tempates
     * defined in trusted script.  When true, `<dom-module>` re-registration is
     * disallowed, `<dom-bind>` is disabled, and `<dom-if>`/`<dom-repeat>`
     * templates will only evaluate in the context of a trusted element template.
     */
    let strictTemplatePolicy = false;

    /**
     * Setting to enable dom-module lookup from Polymer.Element.  By default,
     * templates must be defined in script using the `static get template()`
     * getter and the `html` tag function.  To enable legacy loading of templates
     * via dom-module, set this flag to true.
     */
    let allowTemplateFromDomModule = false;

    /**
     * Setting to skip processing style includes and re-writing urls in css styles.
     * Normally "included" styles are pulled into the element and all urls in styles
     * are re-written to be relative to the containing script url.
     * If no includes or relative urls are used in styles, these steps can be
     * skipped as an optimization.
     */
    let legacyOptimizations = false;

    /**
     * Setting to perform initial rendering synchronously when running under ShadyDOM.
     * This matches the behavior of Polymer 1.
     */
    let syncInitialRender = false;

    /**
     * Setting to cancel synthetic click events fired by older mobile browsers. Modern browsers
     * no longer fire synthetic click events, and the cancellation behavior can interfere
     * when programmatically clicking on elements.
     */
    let cancelSyntheticClickEvents = true;

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    // unique global id for deduping mixins.
    let dedupeId = 0;

    /* eslint-disable valid-jsdoc */
    /**
     * Wraps an ES6 class expression mixin such that the mixin is only applied
     * if it has not already been applied its base argument. Also memoizes mixin
     * applications.
     *
     * @template T
     * @param {T} mixin ES6 class expression mixin to wrap
     * @return {T}
     * @suppress {invalidCasts}
     */
    const dedupingMixin = function(mixin) {
      let mixinApplications = /** @type {!MixinFunction} */(mixin).__mixinApplications;
      if (!mixinApplications) {
        mixinApplications = new WeakMap();
        /** @type {!MixinFunction} */(mixin).__mixinApplications = mixinApplications;
      }
      // maintain a unique id for each mixin
      let mixinDedupeId = dedupeId++;
      function dedupingMixin(base) {
        let baseSet = /** @type {!MixinFunction} */(base).__mixinSet;
        if (baseSet && baseSet[mixinDedupeId]) {
          return base;
        }
        let map = mixinApplications;
        let extended = map.get(base);
        if (!extended) {
          extended = /** @type {!Function} */(mixin)(base);
          map.set(base, extended);
        }
        // copy inherited mixin set from the extended class, or the base class
        // NOTE: we avoid use of Set here because some browser (IE11)
        // cannot extend a base Set via the constructor.
        let mixinSet = Object.create(/** @type {!MixinFunction} */(extended).__mixinSet || baseSet || null);
        mixinSet[mixinDedupeId] = true;
        /** @type {!MixinFunction} */(extended).__mixinSet = mixinSet;
        return extended;
      }

      return dedupingMixin;
    };
    /* eslint-enable valid-jsdoc */

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    let modules = {};
    let lcModules = {};
    /**
     * Sets a dom-module into the global registry by id.
     *
     * @param {string} id dom-module id
     * @param {DomModule} module dom-module instance
     * @return {void}
     */
    function setModule(id, module) {
      // store id separate from lowercased id so that
      // in all cases mixedCase id will stored distinctly
      // and lowercase version is a fallback
      modules[id] = lcModules[id.toLowerCase()] = module;
    }
    /**
     * Retrieves a dom-module from the global registry by id.
     *
     * @param {string} id dom-module id
     * @return {DomModule!} dom-module instance
     */
    function findModule(id) {
      return modules[id] || lcModules[id.toLowerCase()];
    }

    function styleOutsideTemplateCheck(inst) {
      if (inst.querySelector('style')) {
        console.warn('dom-module %s has style outside template', inst.id);
      }
    }

    /**
     * The `dom-module` element registers the dom it contains to the name given
     * by the module's id attribute. It provides a unified database of dom
     * accessible via its static `import` API.
     *
     * A key use case of `dom-module` is for providing custom element `<template>`s
     * via HTML imports that are parsed by the native HTML parser, that can be
     * relocated during a bundling pass and still looked up by `id`.
     *
     * Example:
     *
     *     <dom-module id="foo">
     *       <img src="stuff.png">
     *     </dom-module>
     *
     * Then in code in some other location that cannot access the dom-module above
     *
     *     let img = customElements.get('dom-module').import('foo', 'img');
     *
     * @customElement
     * @extends HTMLElement
     * @summary Custom element that provides a registry of relocatable DOM content
     *   by `id` that is agnostic to bundling.
     * @unrestricted
     */
    class DomModule extends HTMLElement {

      /** @override */
      static get observedAttributes() { return ['id']; }

      /**
       * Retrieves the element specified by the css `selector` in the module
       * registered by `id`. For example, this.import('foo', 'img');
       * @param {string} id The id of the dom-module in which to search.
       * @param {string=} selector The css selector by which to find the element.
       * @return {Element} Returns the element which matches `selector` in the
       * module registered at the specified `id`.
       *
       * @export
       * @nocollapse Referred to indirectly in style-gather.js
       */
      static import(id, selector) {
        if (id) {
          let m = findModule(id);
          if (m && selector) {
            return m.querySelector(selector);
          }
          return m;
        }
        return null;
      }

      /* eslint-disable no-unused-vars */
      /**
       * @param {string} name Name of attribute.
       * @param {?string} old Old value of attribute.
       * @param {?string} value Current value of attribute.
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       * @override
       */
      attributeChangedCallback(name, old, value, namespace) {
        if (old !== value) {
          this.register();
        }
      }
      /* eslint-enable no-unused-args */

      /**
       * The absolute URL of the original location of this `dom-module`.
       *
       * This value will differ from this element's `ownerDocument` in the
       * following ways:
       * - Takes into account any `assetpath` attribute added during bundling
       *   to indicate the original location relative to the bundled location
       * - Uses the HTMLImports polyfill's `importForElement` API to ensure
       *   the path is relative to the import document's location since
       *   `ownerDocument` is not currently polyfilled
       */
      get assetpath() {
        // Don't override existing assetpath.
        if (!this.__assetpath) {
          // note: assetpath set via an attribute must be relative to this
          // element's location; accomodate polyfilled HTMLImports
          const owner = window.HTMLImports && HTMLImports.importForElement ?
            HTMLImports.importForElement(this) || document : this.ownerDocument;
          const url = resolveUrl(
            this.getAttribute('assetpath') || '', owner.baseURI);
          this.__assetpath = pathFromUrl(url);
        }
        return this.__assetpath;
      }

      /**
       * Registers the dom-module at a given id. This method should only be called
       * when a dom-module is imperatively created. For
       * example, `document.createElement('dom-module').register('foo')`.
       * @param {string=} id The id at which to register the dom-module.
       * @return {void}
       */
      register(id) {
        id = id || this.id;
        if (id) {
          // Under strictTemplatePolicy, reject and null out any re-registered
          // dom-module since it is ambiguous whether first-in or last-in is trusted
          if (strictTemplatePolicy && findModule(id) !== undefined) {
            setModule(id, null);
            throw new Error(`strictTemplatePolicy: dom-module ${id} re-registered`);
          }
          this.id = id;
          setModule(id, this);
          styleOutsideTemplateCheck(this);
        }
      }
    }

    DomModule.prototype['modules'] = modules;

    customElements.define('dom-module', DomModule);

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    const MODULE_STYLE_LINK_SELECTOR = 'link[rel=import][type~=css]';
    const INCLUDE_ATTR = 'include';
    const SHADY_UNSCOPED_ATTR = 'shady-unscoped';

    /**
     * @param {string} moduleId .
     * @return {?DomModule} .
     */
    function importModule(moduleId) {
      return /** @type {?DomModule} */(DomModule.import(moduleId));
    }

    function styleForImport(importDoc) {
      // NOTE: polyfill affordance.
      // under the HTMLImports polyfill, there will be no 'body',
      // but the import pseudo-doc can be used directly.
      let container = importDoc.body ? importDoc.body : importDoc;
      const importCss = resolveCss(container.textContent,
        importDoc.baseURI);
      const style = document.createElement('style');
      style.textContent = importCss;
      return style;
    }


    /**
     * Returns a list of <style> elements in a space-separated list of `dom-module`s.
     *
     * @function
     * @param {string} moduleIds List of dom-module id's within which to
     * search for css.
     * @return {!Array<!HTMLStyleElement>} Array of contained <style> elements
     */
    function stylesFromModules(moduleIds) {
     const modules = moduleIds.trim().split(/\s+/);
     const styles = [];
     for (let i=0; i < modules.length; i++) {
       styles.push(...stylesFromModule(modules[i]));
     }
     return styles;
    }

    /**
     * Returns a list of <style> elements in a given `dom-module`.
     * Styles in a `dom-module` can come either from `<style>`s within the
     * first `<template>`, or else from one or more
     * `<link rel="import" type="css">` links outside the template.
     *
     * @param {string} moduleId dom-module id to gather styles from
     * @return {!Array<!HTMLStyleElement>} Array of contained styles.
     */
    function stylesFromModule(moduleId) {
      const m = importModule(moduleId);

      if (!m) {
        console.warn('Could not find style data in module named', moduleId);
        return [];
      }

      if (m._styles === undefined) {
        const styles = [];
        // module imports: <link rel="import" type="css">
        styles.push(..._stylesFromModuleImports(m));
        // include css from the first template in the module
        const template = /** @type {?HTMLTemplateElement} */(
            m.querySelector('template'));
        if (template) {
          styles.push(...stylesFromTemplate(template,
            /** @type {templateWithAssetPath} */(m).assetpath));
        }

        m._styles = styles;
      }

      return m._styles;
    }

    /**
     * Returns the `<style>` elements within a given template.
     *
     * @param {!HTMLTemplateElement} template Template to gather styles from
     * @param {string=} baseURI baseURI for style content
     * @return {!Array<!HTMLStyleElement>} Array of styles
     */
    function stylesFromTemplate(template, baseURI) {
      if (!template._styles) {
        const styles = [];
        // if element is a template, get content from its .content
        const e$ = template.content.querySelectorAll('style');
        for (let i=0; i < e$.length; i++) {
          let e = e$[i];
          // support style sharing by allowing styles to "include"
          // other dom-modules that contain styling
          let include = e.getAttribute(INCLUDE_ATTR);
          if (include) {
            styles.push(...stylesFromModules(include).filter(function(item, index, self) {
              return self.indexOf(item) === index;
            }));
          }
          if (baseURI) {
            e.textContent =
                resolveCss(e.textContent, /** @type {string} */ (baseURI));
          }
          styles.push(e);
        }
        template._styles = styles;
      }
      return template._styles;
    }

    /**
     * Returns a list of <style> elements  from stylesheets loaded via `<link rel="import" type="css">` links within the specified `dom-module`.
     *
     * @param {string} moduleId Id of `dom-module` to gather CSS from
     * @return {!Array<!HTMLStyleElement>} Array of contained styles.
     */
    function stylesFromModuleImports(moduleId) {
     let m = importModule(moduleId);
     return m ? _stylesFromModuleImports(m) : [];
    }

    /**
     * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
     * @return {!Array<!HTMLStyleElement>} Array of contained styles
     */
    function _stylesFromModuleImports(module) {
      const styles = [];
      const p$ = module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);
      for (let i=0; i < p$.length; i++) {
        let p = p$[i];
        if (p.import) {
          const importDoc = p.import;
          const unscoped = p.hasAttribute(SHADY_UNSCOPED_ATTR);
          if (unscoped && !importDoc._unscopedStyle) {
            const style = styleForImport(importDoc);
            style.setAttribute(SHADY_UNSCOPED_ATTR, '');
            importDoc._unscopedStyle = style;
          } else if (!importDoc._style) {
            importDoc._style = styleForImport(importDoc);
          }
          styles.push(unscoped ? importDoc._unscopedStyle : importDoc._style);
        }
      }
      return styles;
    }

    /**
     *
     * Returns CSS text of styles in a space-separated list of `dom-module`s.
     * Note: This method is deprecated, use `stylesFromModules` instead.
     *
     * @deprecated
     * @param {string} moduleIds List of dom-module id's within which to
     * search for css.
     * @return {string} Concatenated CSS content from specified `dom-module`s
     */
    function cssFromModules(moduleIds) {
     let modules = moduleIds.trim().split(/\s+/);
     let cssText = '';
     for (let i=0; i < modules.length; i++) {
       cssText += cssFromModule(modules[i]);
     }
     return cssText;
    }

    /**
     * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
     * can come either from `<style>`s within the first `<template>`, or else
     * from one or more `<link rel="import" type="css">` links outside the
     * template.
     *
     * Any `<styles>` processed are removed from their original location.
     * Note: This method is deprecated, use `styleFromModule` instead.
     *
     * @deprecated
     * @param {string} moduleId dom-module id to gather styles from
     * @return {string} Concatenated CSS content from specified `dom-module`
     */
    function cssFromModule(moduleId) {
      let m = importModule(moduleId);
      if (m && m._cssText === undefined) {
        // module imports: <link rel="import" type="css">
        let cssText = _cssFromModuleImports(m);
        // include css from the first template in the module
        let t = /** @type {?HTMLTemplateElement} */(m.querySelector('template'));
        if (t) {
          cssText += cssFromTemplate(t,
            /** @type {templateWithAssetPath} */(m).assetpath);
        }
        m._cssText = cssText || null;
      }
      if (!m) {
        console.warn('Could not find style data in module named', moduleId);
      }
      return m && m._cssText || '';
    }

    /**
     * Returns CSS text of `<styles>` within a given template.
     *
     * Any `<styles>` processed are removed from their original location.
     * Note: This method is deprecated, use `styleFromTemplate` instead.
     *
     * @deprecated
     * @param {!HTMLTemplateElement} template Template to gather styles from
     * @param {string} baseURI Base URI to resolve the URL against
     * @return {string} Concatenated CSS content from specified template
     */
    function cssFromTemplate(template, baseURI) {
      let cssText = '';
      const e$ = stylesFromTemplate(template, baseURI);
      // if element is a template, get content from its .content
      for (let i=0; i < e$.length; i++) {
        let e = e$[i];
        if (e.parentNode) {
          e.parentNode.removeChild(e);
        }
        cssText += e.textContent;
      }
      return cssText;
    }

    /**
     * @deprecated
     * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
     * @return {string} Concatenated CSS content from links in the dom-module
     */
    function _cssFromModuleImports(module) {
      let cssText = '';
      let styles = _stylesFromModuleImports(module);
      for (let i=0; i < styles.length; i++) {
        cssText += styles[i].textContent;
      }
      return cssText;
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /* eslint-disable valid-jsdoc */
    /**
     * Node wrapper to ensure ShadowDOM safe operation regardless of polyfill
     * presence or mode. Note that with the introduction of `ShadyDOM.noPatch`,
     * a node wrapper must be used to access ShadowDOM API.
     * This is similar to using `Polymer.dom` but relies exclusively
     * on the presence of the ShadyDOM polyfill rather than requiring the loading
     * of legacy (Polymer.dom) API.
     * @type {function(Node):Node}
     */
    const wrap$1 = (window['ShadyDOM'] && window['ShadyDOM']['noPatch'] && window['ShadyDOM']['wrap']) ?
      window['ShadyDOM']['wrap'] :
      (window['ShadyDOM'] ? (n) => ShadyDOM['patch'](n) : (n) => n);

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * Module with utilities for manipulating structured data path strings.
     *
     * @summary Module with utilities for manipulating structured data path strings.
     */

    /**
     * Returns true if the given string is a structured data path (has dots).
     *
     * Example:
     *
     * ```
     * isPath('foo.bar.baz') // true
     * isPath('foo')         // false
     * ```
     *
     * @param {string} path Path string
     * @return {boolean} True if the string contained one or more dots
     */
    function isPath(path) {
      return path.indexOf('.') >= 0;
    }

    /**
     * Returns the root property name for the given path.
     *
     * Example:
     *
     * ```
     * root('foo.bar.baz') // 'foo'
     * root('foo')         // 'foo'
     * ```
     *
     * @param {string} path Path string
     * @return {string} Root property name
     */
    function root(path) {
      let dotIndex = path.indexOf('.');
      if (dotIndex === -1) {
        return path;
      }
      return path.slice(0, dotIndex);
    }

    /**
     * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
     * Returns true if the given path is an ancestor of the base path.
     *
     * Example:
     *
     * ```
     * isAncestor('foo.bar', 'foo')         // true
     * isAncestor('foo.bar', 'foo.bar')     // false
     * isAncestor('foo.bar', 'foo.bar.baz') // false
     * ```
     *
     * @param {string} base Path string to test against.
     * @param {string} path Path string to test.
     * @return {boolean} True if `path` is an ancestor of `base`.
     */
    function isAncestor(base, path) {
      //     base.startsWith(path + '.');
      return base.indexOf(path + '.') === 0;
    }

    /**
     * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
     *
     * Example:
     *
     * ```
     * isDescendant('foo.bar', 'foo.bar.baz') // true
     * isDescendant('foo.bar', 'foo.bar')     // false
     * isDescendant('foo.bar', 'foo')         // false
     * ```
     *
     * @param {string} base Path string to test against.
     * @param {string} path Path string to test.
     * @return {boolean} True if `path` is a descendant of `base`.
     */
    function isDescendant(base, path) {
      //     path.startsWith(base + '.');
      return path.indexOf(base + '.') === 0;
    }

    /**
     * Replaces a previous base path with a new base path, preserving the
     * remainder of the path.
     *
     * User must ensure `path` has a prefix of `base`.
     *
     * Example:
     *
     * ```
     * translate('foo.bar', 'zot', 'foo.bar.baz') // 'zot.baz'
     * ```
     *
     * @param {string} base Current base string to remove
     * @param {string} newBase New base string to replace with
     * @param {string} path Path to translate
     * @return {string} Translated string
     */
    function translate(base, newBase, path) {
      return newBase + path.slice(base.length);
    }

    /**
     * @param {string} base Path string to test against
     * @param {string} path Path string to test
     * @return {boolean} True if `path` is equal to `base`
     */
    function matches(base, path) {
      return (base === path) ||
             isAncestor(base, path) ||
             isDescendant(base, path);
    }

    /**
     * Converts array-based paths to flattened path.  String-based paths
     * are returned as-is.
     *
     * Example:
     *
     * ```
     * normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
     * normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
     * ```
     *
     * @param {string | !Array<string|number>} path Input path
     * @return {string} Flattened path
     */
    function normalize(path) {
      if (Array.isArray(path)) {
        let parts = [];
        for (let i=0; i<path.length; i++) {
          let args = path[i].toString().split('.');
          for (let j=0; j<args.length; j++) {
            parts.push(args[j]);
          }
        }
        return parts.join('.');
      } else {
        return path;
      }
    }

    /**
     * Splits a path into an array of property names. Accepts either arrays
     * of path parts or strings.
     *
     * Example:
     *
     * ```
     * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
     * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
     * ```
     *
     * @param {string | !Array<string|number>} path Input path
     * @return {!Array<string>} Array of path parts
     * @suppress {checkTypes}
     */
    function split(path) {
      if (Array.isArray(path)) {
        return normalize(path).split('.');
      }
      return path.toString().split('.');
    }

    /**
     * Reads a value from a path.  If any sub-property in the path is `undefined`,
     * this method returns `undefined` (will never throw.
     *
     * @param {Object} root Object from which to dereference path from
     * @param {string | !Array<string|number>} path Path to read
     * @param {Object=} info If an object is provided to `info`, the normalized
     *  (flattened) path will be set to `info.path`.
     * @return {*} Value at path, or `undefined` if the path could not be
     *  fully dereferenced.
     */
    function get(root, path, info) {
      let prop = root;
      let parts = split(path);
      // Loop over path parts[0..n-1] and dereference
      for (let i=0; i<parts.length; i++) {
        if (!prop) {
          return;
        }
        let part = parts[i];
        prop = prop[part];
      }
      if (info) {
        info.path = parts.join('.');
      }
      return prop;
    }

    /**
     * Sets a value to a path.  If any sub-property in the path is `undefined`,
     * this method will no-op.
     *
     * @param {Object} root Object from which to dereference path from
     * @param {string | !Array<string|number>} path Path to set
     * @param {*} value Value to set to path
     * @return {string | undefined} The normalized version of the input path
     */
    function set(root, path, value) {
      let prop = root;
      let parts = split(path);
      let last = parts[parts.length-1];
      if (parts.length > 1) {
        // Loop over path parts[0..n-2] and dereference
        for (let i=0; i<parts.length-1; i++) {
          let part = parts[i];
          prop = prop[part];
          if (!prop) {
            return;
          }
        }
        // Set value to object at end of path
        prop[last] = value;
      } else {
        // Simple property set
        prop[path] = value;
      }
      return parts.join('.');
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    const caseMap = {};
    const DASH_TO_CAMEL = /-[a-z]/g;
    const CAMEL_TO_DASH = /([A-Z])/g;

    /**
     * @fileoverview Module with utilities for converting between "dash-case" and
     * "camelCase" identifiers.
     */

    /**
     * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
     * (e.g. `fooBarBaz`).
     *
     * @param {string} dash Dash-case identifier
     * @return {string} Camel-case representation of the identifier
     */
    function dashToCamelCase(dash) {
      return caseMap[dash] || (
        caseMap[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(DASH_TO_CAMEL,
          (m) => m[1].toUpperCase()
        )
      );
    }

    /**
     * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
     * (e.g. `foo-bar-baz`).
     *
     * @param {string} camel Camel-case identifier
     * @return {string} Dash-case representation of the identifier
     */
    function camelToDashCase(camel) {
      return caseMap[camel] || (
        caseMap[camel] = camel.replace(CAMEL_TO_DASH, '-$1').toLowerCase()
      );
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    // Microtask implemented using Mutation Observer
    let microtaskCurrHandle = 0;
    let microtaskLastHandle = 0;
    let microtaskCallbacks = [];
    let microtaskNodeContent = 0;
    let microtaskNode = document.createTextNode('');
    new window.MutationObserver(microtaskFlush).observe(microtaskNode, {characterData: true});

    function microtaskFlush() {
      const len = microtaskCallbacks.length;
      for (let i = 0; i < len; i++) {
        let cb = microtaskCallbacks[i];
        if (cb) {
          try {
            cb();
          } catch (e) {
            setTimeout(() => { throw e; });
          }
        }
      }
      microtaskCallbacks.splice(0, len);
      microtaskLastHandle += len;
    }

    /**
     * Async interface wrapper around `setTimeout`.
     *
     * @namespace
     * @summary Async interface wrapper around `setTimeout`.
     */
    const timeOut = {
      /**
       * Returns a sub-module with the async interface providing the provided
       * delay.
       *
       * @memberof timeOut
       * @param {number=} delay Time to wait before calling callbacks in ms
       * @return {!AsyncInterface} An async timeout interface
       */
      after(delay) {
        return {
          run(fn) { return window.setTimeout(fn, delay); },
          cancel(handle) {
            window.clearTimeout(handle);
          }
        };
      },
      /**
       * Enqueues a function called in the next task.
       *
       * @memberof timeOut
       * @param {!Function} fn Callback to run
       * @param {number=} delay Delay in milliseconds
       * @return {number} Handle used for canceling task
       */
      run(fn, delay) {
        return window.setTimeout(fn, delay);
      },
      /**
       * Cancels a previously enqueued `timeOut` callback.
       *
       * @memberof timeOut
       * @param {number} handle Handle returned from `run` of callback to cancel
       * @return {void}
       */
      cancel(handle) {
        window.clearTimeout(handle);
      }
    };

    /**
     * Async interface for enqueuing callbacks that run at microtask timing.
     *
     * Note that microtask timing is achieved via a single `MutationObserver`,
     * and thus callbacks enqueued with this API will all run in a single
     * batch, and not interleaved with other microtasks such as promises.
     * Promises are avoided as an implementation choice for the time being
     * due to Safari bugs that cause Promises to lack microtask guarantees.
     *
     * @namespace
     * @summary Async interface for enqueuing callbacks that run at microtask
     *   timing.
     */
    const microTask = {

      /**
       * Enqueues a function called at microtask timing.
       *
       * @memberof microTask
       * @param {!Function=} callback Callback to run
       * @return {number} Handle used for canceling task
       */
      run(callback) {
        microtaskNode.textContent = microtaskNodeContent++;
        microtaskCallbacks.push(callback);
        return microtaskCurrHandle++;
      },

      /**
       * Cancels a previously enqueued `microTask` callback.
       *
       * @memberof microTask
       * @param {number} handle Handle returned from `run` of callback to cancel
       * @return {void}
       */
      cancel(handle) {
        const idx = handle - microtaskLastHandle;
        if (idx >= 0) {
          if (!microtaskCallbacks[idx]) {
            throw new Error('invalid async handle: ' + handle);
          }
          microtaskCallbacks[idx] = null;
        }
      }

    };

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /** @const {!AsyncInterface} */
    const microtask = microTask;

    /**
     * Element class mixin that provides basic meta-programming for creating one
     * or more property accessors (getter/setter pair) that enqueue an async
     * (batched) `_propertiesChanged` callback.
     *
     * For basic usage of this mixin, call `MyClass.createProperties(props)`
     * once at class definition time to create property accessors for properties
     * named in props, implement `_propertiesChanged` to react as desired to
     * property changes, and implement `static get observedAttributes()` and
     * include lowercase versions of any property names that should be set from
     * attributes. Last, call `this._enableProperties()` in the element's
     * `connectedCallback` to enable the accessors.
     *
     * @mixinFunction
     * @polymer
     * @summary Element class mixin for reacting to property changes from
     *   generated property accessors.
     * @template T
     * @param {function(new:T)} superClass Class to apply mixin to.
     * @return {function(new:T)} superClass with mixin applied.
     */
    const PropertiesChanged = dedupingMixin(
        /**
         * @template T
         * @param {function(new:T)} superClass Class to apply mixin to.
         * @return {function(new:T)} superClass with mixin applied.
         */
        (superClass) => {

      /**
       * @polymer
       * @mixinClass
       * @implements {Polymer_PropertiesChanged}
       * @unrestricted
       */
      class PropertiesChanged extends superClass {

        /**
         * Creates property accessors for the given property names.
         * @param {!Object} props Object whose keys are names of accessors.
         * @return {void}
         * @protected
         * @nocollapse
         */
        static createProperties(props) {
          const proto = this.prototype;
          for (let prop in props) {
            // don't stomp an existing accessor
            if (!(prop in proto)) {
              proto._createPropertyAccessor(prop);
            }
          }
        }

        /**
         * Returns an attribute name that corresponds to the given property.
         * The attribute name is the lowercased property name. Override to
         * customize this mapping.
         * @param {string} property Property to convert
         * @return {string} Attribute name corresponding to the given property.
         *
         * @protected
         * @nocollapse
         */
        static attributeNameForProperty(property) {
          return property.toLowerCase();
        }

        /**
         * Override point to provide a type to which to deserialize a value to
         * a given property.
         * @param {string} name Name of property
         *
         * @protected
         * @nocollapse
         */
        static typeForProperty(name) { } //eslint-disable-line no-unused-vars

        /**
         * Creates a setter/getter pair for the named property with its own
         * local storage.  The getter returns the value in the local storage,
         * and the setter calls `_setProperty`, which updates the local storage
         * for the property and enqueues a `_propertiesChanged` callback.
         *
         * This method may be called on a prototype or an instance.  Calling
         * this method may overwrite a property value that already exists on
         * the prototype/instance by creating the accessor.
         *
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created; the
         *   protected `_setProperty` function must be used to set the property
         * @return {void}
         * @protected
         * @override
         */
        _createPropertyAccessor(property, readOnly) {
          this._addPropertyToAttributeMap(property);
          if (!this.hasOwnProperty('__dataHasAccessor')) {
            this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor);
          }
          if (!this.__dataHasAccessor[property]) {
            this.__dataHasAccessor[property] = true;
            this._definePropertyAccessor(property, readOnly);
          }
        }

        /**
         * Adds the given `property` to a map matching attribute names
         * to property names, using `attributeNameForProperty`. This map is
         * used when deserializing attribute values to properties.
         *
         * @param {string} property Name of the property
         * @override
         */
        _addPropertyToAttributeMap(property) {
          if (!this.hasOwnProperty('__dataAttributes')) {
            this.__dataAttributes = Object.assign({}, this.__dataAttributes);
          }
          if (!this.__dataAttributes[property]) {
            const attr = this.constructor.attributeNameForProperty(property);
            this.__dataAttributes[attr] = property;
          }
        }

        /**
         * Defines a property accessor for the given property.
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created
         * @return {void}
         * @override
         */
         _definePropertyAccessor(property, readOnly) {
          Object.defineProperty(this, property, {
            /* eslint-disable valid-jsdoc */
            /** @this {PropertiesChanged} */
            get() {
              return this._getProperty(property);
            },
            /** @this {PropertiesChanged} */
            set: readOnly ? function () {} : function (value) {
              this._setProperty(property, value);
            }
            /* eslint-enable */
          });
        }

        constructor() {
          super();
          /** @type {boolean} */
          this.__dataEnabled = false;
          this.__dataReady = false;
          this.__dataInvalid = false;
          this.__data = {};
          this.__dataPending = null;
          this.__dataOld = null;
          this.__dataInstanceProps = null;
          this.__serializing = false;
          this._initializeProperties();
        }

        /**
         * Lifecycle callback called when properties are enabled via
         * `_enableProperties`.
         *
         * Users may override this function to implement behavior that is
         * dependent on the element having its property data initialized, e.g.
         * from defaults (initialized from `constructor`, `_initializeProperties`),
         * `attributeChangedCallback`, or values propagated from host e.g. via
         * bindings.  `super.ready()` must be called to ensure the data system
         * becomes enabled.
         *
         * @return {void}
         * @public
         * @override
         */
        ready() {
          this.__dataReady = true;
          this._flushProperties();
        }

        /**
         * Initializes the local storage for property accessors.
         *
         * Provided as an override point for performing any setup work prior
         * to initializing the property accessor system.
         *
         * @return {void}
         * @protected
         * @override
         */
        _initializeProperties() {
          // Capture instance properties; these will be set into accessors
          // during first flush. Don't set them here, since we want
          // these to overwrite defaults/constructor assignments
          for (let p in this.__dataHasAccessor) {
            if (this.hasOwnProperty(p)) {
              this.__dataInstanceProps = this.__dataInstanceProps || {};
              this.__dataInstanceProps[p] = this[p];
              delete this[p];
            }
          }
        }

        /**
         * Called at ready time with bag of instance properties that overwrote
         * accessors when the element upgraded.
         *
         * The default implementation sets these properties back into the
         * setter at ready time.  This method is provided as an override
         * point for customizing or providing more efficient initialization.
         *
         * @param {Object} props Bag of property values that were overwritten
         *   when creating property accessors.
         * @return {void}
         * @protected
         * @override
         */
        _initializeInstanceProperties(props) {
          Object.assign(this, props);
        }

        /**
         * Updates the local storage for a property (via `_setPendingProperty`)
         * and enqueues a `_proeprtiesChanged` callback.
         *
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @return {void}
         * @protected
         * @override
         */
        _setProperty(property, value) {
          if (this._setPendingProperty(property, value)) {
            this._invalidateProperties();
          }
        }

        /**
         * Returns the value for the given property.
         * @param {string} property Name of property
         * @return {*} Value for the given property
         * @protected
         * @override
         */
        _getProperty(property) {
          return this.__data[property];
        }

        /* eslint-disable no-unused-vars */
        /**
         * Updates the local storage for a property, records the previous value,
         * and adds it to the set of "pending changes" that will be passed to the
         * `_propertiesChanged` callback.  This method does not enqueue the
         * `_propertiesChanged` callback.
         *
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @param {boolean=} ext Not used here; affordance for closure
         * @return {boolean} Returns true if the property changed
         * @protected
         * @override
         */
        _setPendingProperty(property, value, ext) {
          let old = this.__data[property];
          let changed = this._shouldPropertyChange(property, value, old);
          if (changed) {
            if (!this.__dataPending) {
              this.__dataPending = {};
              this.__dataOld = {};
            }
            // Ensure old is captured from the last turn
            if (this.__dataOld && !(property in this.__dataOld)) {
              this.__dataOld[property] = old;
            }
            this.__data[property] = value;
            this.__dataPending[property] = value;
          }
          return changed;
        }
        /* eslint-enable */

        /**
         * Marks the properties as invalid, and enqueues an async
         * `_propertiesChanged` callback.
         *
         * @return {void}
         * @protected
         * @override
         */
        _invalidateProperties() {
          if (!this.__dataInvalid && this.__dataReady) {
            this.__dataInvalid = true;
            microtask.run(() => {
              if (this.__dataInvalid) {
                this.__dataInvalid = false;
                this._flushProperties();
              }
            });
          }
        }

        /**
         * Call to enable property accessor processing. Before this method is
         * called accessor values will be set but side effects are
         * queued. When called, any pending side effects occur immediately.
         * For elements, generally `connectedCallback` is a normal spot to do so.
         * It is safe to call this method multiple times as it only turns on
         * property accessors once.
         *
         * @return {void}
         * @protected
         * @override
         */
        _enableProperties() {
          if (!this.__dataEnabled) {
            this.__dataEnabled = true;
            if (this.__dataInstanceProps) {
              this._initializeInstanceProperties(this.__dataInstanceProps);
              this.__dataInstanceProps = null;
            }
            this.ready();
          }
        }

        /**
         * Calls the `_propertiesChanged` callback with the current set of
         * pending changes (and old values recorded when pending changes were
         * set), and resets the pending set of changes. Generally, this method
         * should not be called in user code.
         *
         * @return {void}
         * @protected
         * @override
         */
        _flushProperties() {
          const props = this.__data;
          const changedProps = this.__dataPending;
          const old = this.__dataOld;
          if (this._shouldPropertiesChange(props, changedProps, old)) {
            this.__dataPending = null;
            this.__dataOld = null;
            this._propertiesChanged(props, changedProps, old);
          }
        }

        /**
         * Called in `_flushProperties` to determine if `_propertiesChanged`
         * should be called. The default implementation returns true if
         * properties are pending. Override to customize when
         * `_propertiesChanged` is called.
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {?Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {?Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {boolean} true if changedProps is truthy
         * @override
         */
        _shouldPropertiesChange(currentProps, changedProps, oldProps) { // eslint-disable-line no-unused-vars
          return Boolean(changedProps);
        }

        /**
         * Callback called when any properties with accessors created via
         * `_createPropertyAccessor` have been set.
         *
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {?Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {?Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {void}
         * @protected
         * @override
         */
        _propertiesChanged(currentProps, changedProps, oldProps) { // eslint-disable-line no-unused-vars
        }

        /**
         * Method called to determine whether a property value should be
         * considered as a change and cause the `_propertiesChanged` callback
         * to be enqueued.
         *
         * The default implementation returns `true` if a strict equality
         * check fails. The method always returns false for `NaN`.
         *
         * Override this method to e.g. provide stricter checking for
         * Objects/Arrays when using immutable patterns.
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         *   and enqueue a `_proeprtiesChanged` callback
         * @protected
         * @override
         */
        _shouldPropertyChange(property, value, old) {
          return (
            // Strict equality check
            (old !== value &&
              // This ensures (old==NaN, value==NaN) always returns false
              (old === old || value === value))
          );
        }

        /**
         * Implements native Custom Elements `attributeChangedCallback` to
         * set an attribute value to a property via `_attributeToProperty`.
         *
         * @param {string} name Name of attribute that changed
         * @param {?string} old Old attribute value
         * @param {?string} value New attribute value
         * @param {?string} namespace Attribute namespace.
         * @return {void}
         * @suppress {missingProperties} Super may or may not implement the callback
         * @override
         */
        attributeChangedCallback(name, old, value, namespace) {
          if (old !== value) {
            this._attributeToProperty(name, value);
          }
          if (super.attributeChangedCallback) {
            super.attributeChangedCallback(name, old, value, namespace);
          }
        }

        /**
         * Deserializes an attribute to its associated property.
         *
         * This method calls the `_deserializeValue` method to convert the string to
         * a typed value.
         *
         * @param {string} attribute Name of attribute to deserialize.
         * @param {?string} value of the attribute.
         * @param {*=} type type to deserialize to, defaults to the value
         * returned from `typeForProperty`
         * @return {void}
         * @override
         */
        _attributeToProperty(attribute, value, type) {
          if (!this.__serializing) {
            const map = this.__dataAttributes;
            const property = map && map[attribute] || attribute;
            this[property] = this._deserializeValue(value, type ||
              this.constructor.typeForProperty(property));
          }
        }

        /**
         * Serializes a property to its associated attribute.
         *
         * @suppress {invalidCasts} Closure can't figure out `this` is an element.
         *
         * @param {string} property Property name to reflect.
         * @param {string=} attribute Attribute name to reflect to.
         * @param {*=} value Property value to refect.
         * @return {void}
         * @override
         */
        _propertyToAttribute(property, attribute, value) {
          this.__serializing = true;
          value = (arguments.length < 3) ? this[property] : value;
          this._valueToNodeAttribute(/** @type {!HTMLElement} */(this), value,
            attribute || this.constructor.attributeNameForProperty(property));
          this.__serializing = false;
        }

        /**
         * Sets a typed value to an HTML attribute on a node.
         *
         * This method calls the `_serializeValue` method to convert the typed
         * value to a string.  If the `_serializeValue` method returns `undefined`,
         * the attribute will be removed (this is the default for boolean
         * type `false`).
         *
         * @param {Element} node Element to set attribute to.
         * @param {*} value Value to serialize.
         * @param {string} attribute Attribute name to serialize to.
         * @return {void}
         * @override
         */
        _valueToNodeAttribute(node, value, attribute) {
          const str = this._serializeValue(value);
          if (attribute === 'class' || attribute === 'name' || attribute === 'slot') {
            node = /** @type {?Element} */(wrap$1(node));
          }
          if (str === undefined) {
            node.removeAttribute(attribute);
          } else {
            node.setAttribute(attribute, str);
          }
        }

        /**
         * Converts a typed JavaScript value to a string.
         *
         * This method is called when setting JS property values to
         * HTML attributes.  Users may override this method to provide
         * serialization for custom types.
         *
         * @param {*} value Property value to serialize.
         * @return {string | undefined} String serialized from the provided
         * property  value.
         * @override
         */
        _serializeValue(value) {
          switch (typeof value) {
            case 'boolean':
              return value ? '' : undefined;
            default:
              return value != null ? value.toString() : undefined;
          }
        }

        /**
         * Converts a string to a typed JavaScript value.
         *
         * This method is called when reading HTML attribute values to
         * JS properties.  Users may override this method to provide
         * deserialization for custom `type`s. Types for `Boolean`, `String`,
         * and `Number` convert attributes to the expected types.
         *
         * @param {?string} value Value to deserialize.
         * @param {*=} type Type to deserialize the string to.
         * @return {*} Typed value deserialized from the provided string.
         * @override
         */
        _deserializeValue(value, type) {
          switch (type) {
            case Boolean:
              return (value !== null);
            case Number:
              return Number(value);
            default:
              return value;
          }
        }

      }

      return PropertiesChanged;
    });

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    // Save map of native properties; this forms a blacklist or properties
    // that won't have their values "saved" by `saveAccessorValue`, since
    // reading from an HTMLElement accessor from the context of a prototype throws
    const nativeProperties = {};
    let proto = HTMLElement.prototype;
    while (proto) {
      let props = Object.getOwnPropertyNames(proto);
      for (let i=0; i<props.length; i++) {
        nativeProperties[props[i]] = true;
      }
      proto = Object.getPrototypeOf(proto);
    }

    /**
     * Used to save the value of a property that will be overridden with
     * an accessor. If the `model` is a prototype, the values will be saved
     * in `__dataProto`, and it's up to the user (or downstream mixin) to
     * decide how/when to set these values back into the accessors.
     * If `model` is already an instance (it has a `__data` property), then
     * the value will be set as a pending property, meaning the user should
     * call `_invalidateProperties` or `_flushProperties` to take effect
     *
     * @param {Object} model Prototype or instance
     * @param {string} property Name of property
     * @return {void}
     * @private
     */
    function saveAccessorValue(model, property) {
      // Don't read/store value for any native properties since they could throw
      if (!nativeProperties[property]) {
        let value = model[property];
        if (value !== undefined) {
          if (model.__data) {
            // Adding accessor to instance; update the property
            // It is the user's responsibility to call _flushProperties
            model._setPendingProperty(property, value);
          } else {
            // Adding accessor to proto; save proto's value for instance-time use
            if (!model.__dataProto) {
              model.__dataProto = {};
            } else if (!model.hasOwnProperty(JSCompiler_renameProperty('__dataProto', model))) {
              model.__dataProto = Object.create(model.__dataProto);
            }
            model.__dataProto[property] = value;
          }
        }
      }
    }

    /**
     * Element class mixin that provides basic meta-programming for creating one
     * or more property accessors (getter/setter pair) that enqueue an async
     * (batched) `_propertiesChanged` callback.
     *
     * For basic usage of this mixin:
     *
     * -   Declare attributes to observe via the standard `static get
     *     observedAttributes()`. Use `dash-case` attribute names to represent
     *     `camelCase` property names.
     * -   Implement the `_propertiesChanged` callback on the class.
     * -   Call `MyClass.createPropertiesForAttributes()` **once** on the class to
     *     generate property accessors for each observed attribute. This must be
     *     called before the first instance is created, for example, by calling it
     *     before calling `customElements.define`. It can also be called lazily from
     *     the element's `constructor`, as long as it's guarded so that the call is
     *     only made once, when the first instance is created.
     * -   Call `this._enableProperties()` in the element's `connectedCallback` to
     *     enable the accessors.
     *
     * Any `observedAttributes` will automatically be
     * deserialized via `attributeChangedCallback` and set to the associated
     * property using `dash-case`-to-`camelCase` convention.
     *
     * @mixinFunction
     * @polymer
     * @appliesMixin PropertiesChanged
     * @summary Element class mixin for reacting to property changes from
     *   generated property accessors.
     * @template T
     * @param {function(new:T)} superClass Class to apply mixin to.
     * @return {function(new:T)} superClass with mixin applied.
     */
    const PropertyAccessors = dedupingMixin(superClass => {

      /**
       * @constructor
       * @implements {Polymer_PropertiesChanged}
       * @unrestricted
       * @private
       */
       const base = PropertiesChanged(superClass);

      /**
       * @polymer
       * @mixinClass
       * @implements {Polymer_PropertyAccessors}
       * @extends {base}
       * @unrestricted
       */
      class PropertyAccessors extends base {

        /**
         * Generates property accessors for all attributes in the standard
         * static `observedAttributes` array.
         *
         * Attribute names are mapped to property names using the `dash-case` to
         * `camelCase` convention
         *
         * @return {void}
         * @nocollapse
         */
        static createPropertiesForAttributes() {
          let a$ =  /** @type {?} */ (this).observedAttributes;
          for (let i=0; i < a$.length; i++) {
            this.prototype._createPropertyAccessor(dashToCamelCase(a$[i]));
          }
        }

        /**
         * Returns an attribute name that corresponds to the given property.
         * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
         * @param {string} property Property to convert
         * @return {string} Attribute name corresponding to the given property.
         *
         * @protected
         * @nocollapse
         */
        static attributeNameForProperty(property) {
          return camelToDashCase(property);
        }

        /**
         * Overrides PropertiesChanged implementation to initialize values for
         * accessors created for values that already existed on the element
         * prototype.
         *
         * @return {void}
         * @protected
         * @override
         */
        _initializeProperties() {
          if (this.__dataProto) {
            this._initializeProtoProperties(this.__dataProto);
            this.__dataProto = null;
          }
          super._initializeProperties();
        }

        /**
         * Called at instance time with bag of properties that were overwritten
         * by accessors on the prototype when accessors were created.
         *
         * The default implementation sets these properties back into the
         * setter at instance time.  This method is provided as an override
         * point for customizing or providing more efficient initialization.
         *
         * @param {Object} props Bag of property values that were overwritten
         *   when creating property accessors.
         * @return {void}
         * @protected
         * @override
         */
        _initializeProtoProperties(props) {
          for (let p in props) {
            this._setProperty(p, props[p]);
          }
        }

        /**
         * Ensures the element has the given attribute. If it does not,
         * assigns the given value to the attribute.
         *
         * @suppress {invalidCasts} Closure can't figure out `this` is infact an
         *     element
         *
         * @param {string} attribute Name of attribute to ensure is set.
         * @param {string} value of the attribute.
         * @return {void}
         * @override
         */
        _ensureAttribute(attribute, value) {
          const el = /** @type {!HTMLElement} */(this);
          if (!el.hasAttribute(attribute)) {
            this._valueToNodeAttribute(el, value, attribute);
          }
        }

        /**
         * Overrides PropertiesChanged implemention to serialize objects as JSON.
         *
         * @param {*} value Property value to serialize.
         * @return {string | undefined} String serialized from the provided property
         *     value.
         * @override
         */
        _serializeValue(value) {
          /* eslint-disable no-fallthrough */
          switch (typeof value) {
            case 'object':
              if (value instanceof Date) {
                return value.toString();
              } else if (value) {
                try {
                  return JSON.stringify(value);
                } catch(x) {
                  return '';
                }
              }

            default:
              return super._serializeValue(value);
          }
        }

        /**
         * Converts a string to a typed JavaScript value.
         *
         * This method is called by Polymer when reading HTML attribute values to
         * JS properties.  Users may override this method on Polymer element
         * prototypes to provide deserialization for custom `type`s.  Note,
         * the `type` argument is the value of the `type` field provided in the
         * `properties` configuration object for a given property, and is
         * by convention the constructor for the type to deserialize.
         *
         *
         * @param {?string} value Attribute value to deserialize.
         * @param {*=} type Type to deserialize the string to.
         * @return {*} Typed value deserialized from the provided string.
         * @override
         */
        _deserializeValue(value, type) {
          /**
           * @type {*}
           */
          let outValue;
          switch (type) {
            case Object:
              try {
                outValue = JSON.parse(/** @type {string} */(value));
              } catch(x) {
                // allow non-JSON literals like Strings and Numbers
                outValue = value;
              }
              break;
            case Array:
              try {
                outValue = JSON.parse(/** @type {string} */(value));
              } catch(x) {
                outValue = null;
                console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${value}`);
              }
              break;
            case Date:
              outValue = isNaN(value) ? String(value) : Number(value);
              outValue = new Date(outValue);
              break;
            default:
              outValue = super._deserializeValue(value, type);
              break;
          }
          return outValue;
        }
        /* eslint-enable no-fallthrough */

        /**
         * Overrides PropertiesChanged implementation to save existing prototype
         * property value so that it can be reset.
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created
         *
         * When calling on a prototype, any overwritten values are saved in
         * `__dataProto`, and it is up to the subclasser to decide how/when
         * to set those properties back into the accessor.  When calling on an
         * instance, the overwritten value is set via `_setPendingProperty`,
         * and the user should call `_invalidateProperties` or `_flushProperties`
         * for the values to take effect.
         * @protected
         * @return {void}
         * @override
         */
        _definePropertyAccessor(property, readOnly) {
          saveAccessorValue(this, property);
          super._definePropertyAccessor(property, readOnly);
        }

        /**
         * Returns true if this library created an accessor for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if an accessor was created
         * @override
         */
        _hasAccessor(property) {
          return this.__dataHasAccessor && this.__dataHasAccessor[property];
        }

        /**
         * Returns true if the specified property has a pending change.
         *
         * @param {string} prop Property name
         * @return {boolean} True if property has a pending change
         * @protected
         * @override
         */
        _isPropertyPending(prop) {
          return Boolean(this.__dataPending && (prop in this.__dataPending));
        }

      }

      return PropertyAccessors;

    });

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    // 1.x backwards-compatible auto-wrapper for template type extensions
    // This is a clear layering violation and gives favored-nation status to
    // dom-if and dom-repeat templates.  This is a conceit we're choosing to keep
    // a.) to ease 1.x backwards-compatibility due to loss of `is`, and
    // b.) to maintain if/repeat capability in parser-constrained elements
    //     (e.g. table, select) in lieu of native CE type extensions without
    //     massive new invention in this space (e.g. directive system)
    const templateExtensions = {
      'dom-if': true,
      'dom-repeat': true
    };
    function wrapTemplateExtension(node) {
      let is = node.getAttribute('is');
      if (is && templateExtensions[is]) {
        let t = node;
        t.removeAttribute('is');
        node = t.ownerDocument.createElement(is);
        t.parentNode.replaceChild(node, t);
        node.appendChild(t);
        while(t.attributes.length) {
          node.setAttribute(t.attributes[0].name, t.attributes[0].value);
          t.removeAttribute(t.attributes[0].name);
        }
      }
      return node;
    }

    function findTemplateNode(root, nodeInfo) {
      // recursively ascend tree until we hit root
      let parent = nodeInfo.parentInfo && findTemplateNode(root, nodeInfo.parentInfo);
      // unwind the stack, returning the indexed node at each level
      if (parent) {
        // note: marginally faster than indexing via childNodes
        // (http://jsperf.com/childnodes-lookup)
        for (let n=parent.firstChild, i=0; n; n=n.nextSibling) {
          if (nodeInfo.parentIndex === i++) {
            return n;
          }
        }
      } else {
        return root;
      }
    }

    // construct `$` map (from id annotations)
    function applyIdToMap(inst, map, node, nodeInfo) {
      if (nodeInfo.id) {
        map[nodeInfo.id] = node;
      }
    }

    // install event listeners (from event annotations)
    function applyEventListener(inst, node, nodeInfo) {
      if (nodeInfo.events && nodeInfo.events.length) {
        for (let j=0, e$=nodeInfo.events, e; (j<e$.length) && (e=e$[j]); j++) {
          inst._addMethodEventListenerToNode(node, e.name, e.value, inst);
        }
      }
    }

    // push configuration references at configure time
    function applyTemplateContent(inst, node, nodeInfo) {
      if (nodeInfo.templateInfo) {
        node._templateInfo = nodeInfo.templateInfo;
      }
    }

    function createNodeEventHandler(context, eventName, methodName) {
      // Instances can optionally have a _methodHost which allows redirecting where
      // to find methods. Currently used by `templatize`.
      context = context._methodHost || context;
      let handler = function(e) {
        if (context[methodName]) {
          context[methodName](e, e.detail);
        } else {
          console.warn('listener method `' + methodName + '` not defined');
        }
      };
      return handler;
    }

    /**
     * Element mixin that provides basic template parsing and stamping, including
     * the following template-related features for stamped templates:
     *
     * - Declarative event listeners (`on-eventname="listener"`)
     * - Map of node id's to stamped node instances (`this.$.id`)
     * - Nested template content caching/removal and re-installation (performance
     *   optimization)
     *
     * @mixinFunction
     * @polymer
     * @summary Element class mixin that provides basic template parsing and stamping
     * @template T
     * @param {function(new:T)} superClass Class to apply mixin to.
     * @return {function(new:T)} superClass with mixin applied.
     */
    const TemplateStamp = dedupingMixin(
        /**
         * @template T
         * @param {function(new:T)} superClass Class to apply mixin to.
         * @return {function(new:T)} superClass with mixin applied.
         */
        (superClass) => {

      /**
       * @polymer
       * @mixinClass
       * @implements {Polymer_TemplateStamp}
       */
      class TemplateStamp extends superClass {

        /**
         * Scans a template to produce template metadata.
         *
         * Template-specific metadata are stored in the object returned, and node-
         * specific metadata are stored in objects in its flattened `nodeInfoList`
         * array.  Only nodes in the template that were parsed as nodes of
         * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
         * contains an `index` (`childNodes` index in parent) and optionally
         * `parent`, which points to node info of its parent (including its index).
         *
         * The template metadata object returned from this method has the following
         * structure (many fields optional):
         *
         * ```js
         *   {
         *     // Flattened list of node metadata (for nodes that generated metadata)
         *     nodeInfoList: [
         *       {
         *         // `id` attribute for any nodes with id's for generating `$` map
         *         id: {string},
         *         // `on-event="handler"` metadata
         *         events: [
         *           {
         *             name: {string},   // event name
         *             value: {string},  // handler method name
         *           }, ...
         *         ],
         *         // Notes when the template contained a `<slot>` for shady DOM
         *         // optimization purposes
         *         hasInsertionPoint: {boolean},
         *         // For nested `<template>`` nodes, nested template metadata
         *         templateInfo: {object}, // nested template metadata
         *         // Metadata to allow efficient retrieval of instanced node
         *         // corresponding to this metadata
         *         parentInfo: {number},   // reference to parent nodeInfo>
         *         parentIndex: {number},  // index in parent's `childNodes` collection
         *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
         *       },
         *       ...
         *     ],
         *     // When true, the template had the `strip-whitespace` attribute
         *     // or was nested in a template with that setting
         *     stripWhitespace: {boolean},
         *     // For nested templates, nested template content is moved into
         *     // a document fragment stored here; this is an optimization to
         *     // avoid the cost of nested template cloning
         *     content: {DocumentFragment}
         *   }
         * ```
         *
         * This method kicks off a recursive treewalk as follows:
         *
         * ```
         *    _parseTemplate <---------------------+
         *      _parseTemplateContent              |
         *        _parseTemplateNode  <------------|--+
         *          _parseTemplateNestedTemplate --+  |
         *          _parseTemplateChildNodes ---------+
         *          _parseTemplateNodeAttributes
         *            _parseTemplateNodeAttribute
         *
         * ```
         *
         * These methods may be overridden to add custom metadata about templates
         * to either `templateInfo` or `nodeInfo`.
         *
         * Note that this method may be destructive to the template, in that
         * e.g. event annotations may be removed after being noted in the
         * template metadata.
         *
         * @param {!HTMLTemplateElement} template Template to parse
         * @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
         *   template, for parsing nested templates
         * @return {!TemplateInfo} Parsed template metadata
         * @nocollapse
         */
        static _parseTemplate(template, outerTemplateInfo) {
          // since a template may be re-used, memo-ize metadata
          if (!template._templateInfo) {
            // TODO(rictic): fix typing
            let /** ? */ templateInfo = template._templateInfo = {};
            templateInfo.nodeInfoList = [];
            templateInfo.stripWhiteSpace =
              (outerTemplateInfo && outerTemplateInfo.stripWhiteSpace) ||
              template.hasAttribute('strip-whitespace');
             // TODO(rictic): fix typing
             this._parseTemplateContent(
                 template, templateInfo, /** @type {?} */ ({parent: null}));
          }
          return template._templateInfo;
        }

        /**
         * See docs for _parseTemplateNode.
         *
         * @param {!HTMLTemplateElement} template .
         * @param {!TemplateInfo} templateInfo .
         * @param {!NodeInfo} nodeInfo .
         * @return {boolean} .
         * @nocollapse
         */
        static _parseTemplateContent(template, templateInfo, nodeInfo) {
          return this._parseTemplateNode(template.content, templateInfo, nodeInfo);
        }

        /**
         * Parses template node and adds template and node metadata based on
         * the current node, and its `childNodes` and `attributes`.
         *
         * This method may be overridden to add custom node or template specific
         * metadata based on this node.
         *
         * @param {Node} node Node to parse
         * @param {!TemplateInfo} templateInfo Template metadata for current template
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @nocollapse
         */
        static _parseTemplateNode(node, templateInfo, nodeInfo) {
          let noted = false;
          let element = /** @type {!HTMLTemplateElement} */ (node);
          if (element.localName == 'template' && !element.hasAttribute('preserve-content')) {
            noted = this._parseTemplateNestedTemplate(element, templateInfo, nodeInfo) || noted;
          } else if (element.localName === 'slot') {
            // For ShadyDom optimization, indicating there is an insertion point
            templateInfo.hasInsertionPoint = true;
          }
          if (element.firstChild) {
            this._parseTemplateChildNodes(element, templateInfo, nodeInfo);
          }
          if (element.hasAttributes && element.hasAttributes()) {
            noted = this._parseTemplateNodeAttributes(element, templateInfo, nodeInfo) || noted;
          }
          return noted;
        }

        /**
         * Parses template child nodes for the given root node.
         *
         * This method also wraps whitelisted legacy template extensions
         * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
         * wrappers, collapses text nodes, and strips whitespace from the template
         * if the `templateInfo.stripWhitespace` setting was provided.
         *
         * @param {Node} root Root node whose `childNodes` will be parsed
         * @param {!TemplateInfo} templateInfo Template metadata for current template
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @return {void}
         */
        static _parseTemplateChildNodes(root, templateInfo, nodeInfo) {
          if (root.localName === 'script' || root.localName === 'style') {
            return;
          }
          for (let node=root.firstChild, parentIndex=0, next; node; node=next) {
            // Wrap templates
            if (node.localName == 'template') {
              node = wrapTemplateExtension(node);
            }
            // collapse adjacent textNodes: fixes an IE issue that can cause
            // text nodes to be inexplicably split =(
            // note that root.normalize() should work but does not so we do this
            // manually.
            next = node.nextSibling;
            if (node.nodeType === Node.TEXT_NODE) {
              let /** Node */ n = next;
              while (n && (n.nodeType === Node.TEXT_NODE)) {
                node.textContent += n.textContent;
                next = n.nextSibling;
                root.removeChild(n);
                n = next;
              }
              // optionally strip whitespace
              if (templateInfo.stripWhiteSpace && !node.textContent.trim()) {
                root.removeChild(node);
                continue;
              }
            }
            let childInfo =
                /** @type {!NodeInfo} */ ({parentIndex, parentInfo: nodeInfo});
            if (this._parseTemplateNode(node, templateInfo, childInfo)) {
              childInfo.infoIndex = templateInfo.nodeInfoList.push(childInfo) - 1;
            }
            // Increment if not removed
            if (node.parentNode) {
              parentIndex++;
            }
          }
        }

        /**
         * Parses template content for the given nested `<template>`.
         *
         * Nested template info is stored as `templateInfo` in the current node's
         * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
         * It will then be the responsibility of the host to set it back to the
         * template and for users stamping nested templates to use the
         * `_contentForTemplate` method to retrieve the content for this template
         * (an optimization to avoid the cost of cloning nested template content).
         *
         * @param {HTMLTemplateElement} node Node to parse (a <template>)
         * @param {TemplateInfo} outerTemplateInfo Template metadata for current template
         *   that includes the template `node`
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @nocollapse
         */
        static _parseTemplateNestedTemplate(node, outerTemplateInfo, nodeInfo) {
          // TODO(rictic): the type of node should be non-null
          let element = /** @type {!HTMLTemplateElement} */ (node);
          let templateInfo = this._parseTemplate(element, outerTemplateInfo);
          let content = templateInfo.content =
              element.content.ownerDocument.createDocumentFragment();
          content.appendChild(element.content);
          nodeInfo.templateInfo = templateInfo;
          return true;
        }

        /**
         * Parses template node attributes and adds node metadata to `nodeInfo`
         * for nodes of interest.
         *
         * @param {Element} node Node to parse
         * @param {!TemplateInfo} templateInfo Template metadata for current
         *     template
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @nocollapse
         */
        static _parseTemplateNodeAttributes(node, templateInfo, nodeInfo) {
          // Make copy of original attribute list, since the order may change
          // as attributes are added and removed
          let noted = false;
          let attrs = Array.from(node.attributes);
          for (let i=attrs.length-1, a; (a=attrs[i]); i--) {
            noted = this._parseTemplateNodeAttribute(node, templateInfo, nodeInfo, a.name, a.value) || noted;
          }
          return noted;
        }

        /**
         * Parses a single template node attribute and adds node metadata to
         * `nodeInfo` for attributes of interest.
         *
         * This implementation adds metadata for `on-event="handler"` attributes
         * and `id` attributes.
         *
         * @param {Element} node Node to parse
         * @param {!TemplateInfo} templateInfo Template metadata for current template
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @param {string} name Attribute name
         * @param {string} value Attribute value
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @nocollapse
         */
        static _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
          // events (on-*)
          if (name.slice(0, 3) === 'on-') {
            node.removeAttribute(name);
            nodeInfo.events = nodeInfo.events || [];
            nodeInfo.events.push({
              name: name.slice(3),
              value
            });
            return true;
          }
          // static id
          else if (name === 'id') {
            nodeInfo.id = value;
            return true;
          }
          return false;
        }

        /**
         * Returns the `content` document fragment for a given template.
         *
         * For nested templates, Polymer performs an optimization to cache nested
         * template content to avoid the cost of cloning deeply nested templates.
         * This method retrieves the cached content for a given template.
         *
         * @param {HTMLTemplateElement} template Template to retrieve `content` for
         * @return {DocumentFragment} Content fragment
         * @nocollapse
         */
        static _contentForTemplate(template) {
          let templateInfo = /** @type {HTMLTemplateElementWithInfo} */ (template)._templateInfo;
          return (templateInfo && templateInfo.content) || template.content;
        }

        /**
         * Clones the provided template content and returns a document fragment
         * containing the cloned dom.
         *
         * The template is parsed (once and memoized) using this library's
         * template parsing features, and provides the following value-added
         * features:
         * * Adds declarative event listeners for `on-event="handler"` attributes
         * * Generates an "id map" for all nodes with id's under `$` on returned
         *   document fragment
         * * Passes template info including `content` back to templates as
         *   `_templateInfo` (a performance optimization to avoid deep template
         *   cloning)
         *
         * Note that the memoized template parsing process is destructive to the
         * template: attributes for bindings and declarative event listeners are
         * removed after being noted in notes, and any nested `<template>.content`
         * is removed and stored in notes as well.
         *
         * @param {!HTMLTemplateElement} template Template to stamp
         * @return {!StampedTemplate} Cloned template content
         * @override
         */
        _stampTemplate(template) {
          // Polyfill support: bootstrap the template if it has not already been
          if (template && !template.content &&
              window.HTMLTemplateElement && HTMLTemplateElement.decorate) {
            HTMLTemplateElement.decorate(template);
          }
          let templateInfo = this.constructor._parseTemplate(template);
          let nodeInfo = templateInfo.nodeInfoList;
          let content = templateInfo.content || template.content;
          let dom = /** @type {DocumentFragment} */ (document.importNode(content, true));
          // NOTE: ShadyDom optimization indicating there is an insertion point
          dom.__noInsertionPoint = !templateInfo.hasInsertionPoint;
          let nodes = dom.nodeList = new Array(nodeInfo.length);
          dom.$ = {};
          for (let i=0, l=nodeInfo.length, info; (i<l) && (info=nodeInfo[i]); i++) {
            let node = nodes[i] = findTemplateNode(dom, info);
            applyIdToMap(this, dom.$, node, info);
            applyTemplateContent(this, node, info);
            applyEventListener(this, node, info);
          }
          dom = /** @type {!StampedTemplate} */(dom); // eslint-disable-line no-self-assign
          return dom;
        }

        /**
         * Adds an event listener by method name for the event provided.
         *
         * This method generates a handler function that looks up the method
         * name at handling time.
         *
         * @param {!EventTarget} node Node to add listener on
         * @param {string} eventName Name of event
         * @param {string} methodName Name of method
         * @param {*=} context Context the method will be called on (defaults
         *   to `node`)
         * @return {Function} Generated handler function
         * @override
         */
        _addMethodEventListenerToNode(node, eventName, methodName, context) {
          context = context || node;
          let handler = createNodeEventHandler(context, eventName, methodName);
          this._addEventListenerToNode(node, eventName, handler);
          return handler;
        }

        /**
         * Override point for adding custom or simulated event handling.
         *
         * @param {!EventTarget} node Node to add event listener to
         * @param {string} eventName Name of event
         * @param {function(!Event):void} handler Listener function to add
         * @return {void}
         * @override
         */
        _addEventListenerToNode(node, eventName, handler) {
          node.addEventListener(eventName, handler);
        }

        /**
         * Override point for adding custom or simulated event handling.
         *
         * @param {!EventTarget} node Node to remove event listener from
         * @param {string} eventName Name of event
         * @param {function(!Event):void} handler Listener function to remove
         * @return {void}
         * @override
         */
        _removeEventListenerFromNode(node, eventName, handler) {
          node.removeEventListener(eventName, handler);
        }

      }

      return TemplateStamp;

    });

    /**
     * @fileoverview
     * @suppress {checkPrototypalTypes}
     * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
     * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
     * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
     * Google as part of the polymer project is also subject to an additional IP
     * rights grant found at http://polymer.github.io/PATENTS.txt
     */

    // Monotonically increasing unique ID used for de-duping effects triggered
    // from multiple properties in the same turn
    let dedupeId$1 = 0;

    /**
     * Property effect types; effects are stored on the prototype using these keys
     * @enum {string}
     */
    const TYPES = {
      COMPUTE: '__computeEffects',
      REFLECT: '__reflectEffects',
      NOTIFY: '__notifyEffects',
      PROPAGATE: '__propagateEffects',
      OBSERVE: '__observeEffects',
      READ_ONLY: '__readOnly'
    };

    /** @const {!RegExp} */
    const capitalAttributeRegex = /[A-Z]/;

    /**
     * Ensures that the model has an own-property map of effects for the given type.
     * The model may be a prototype or an instance.
     *
     * Property effects are stored as arrays of effects by property in a map,
     * by named type on the model. e.g.
     *
     *   __computeEffects: {
     *     foo: [ ... ],
     *     bar: [ ... ]
     *   }
     *
     * If the model does not yet have an effect map for the type, one is created
     * and returned.  If it does, but it is not an own property (i.e. the
     * prototype had effects), the the map is deeply cloned and the copy is
     * set on the model and returned, ready for new effects to be added.
     *
     * @param {Object} model Prototype or instance
     * @param {string} type Property effect type
     * @return {Object} The own-property map of effects for the given type
     * @private
     */
    function ensureOwnEffectMap(model, type) {
      let effects = model[type];
      if (!effects) {
        effects = model[type] = {};
      } else if (!model.hasOwnProperty(type)) {
        effects = model[type] = Object.create(model[type]);
        for (let p in effects) {
          let protoFx = effects[p];
          let instFx = effects[p] = Array(protoFx.length);
          for (let i=0; i<protoFx.length; i++) {
            instFx[i] = protoFx[i];
          }
        }
      }
      return effects;
    }

    // -- effects ----------------------------------------------

    /**
     * Runs all effects of a given type for the given set of property changes
     * on an instance.
     *
     * @param {!Polymer_PropertyEffects} inst The instance with effects to run
     * @param {?Object} effects Object map of property-to-Array of effects
     * @param {?Object} props Bag of current property changes
     * @param {?Object=} oldProps Bag of previous values for changed properties
     * @param {boolean=} hasPaths True with `props` contains one or more paths
     * @param {*=} extraArgs Additional metadata to pass to effect function
     * @return {boolean} True if an effect ran for this property
     * @private
     */
    function runEffects(inst, effects, props, oldProps, hasPaths, extraArgs) {
      if (effects) {
        let ran = false;
        let id = dedupeId$1++;
        for (let prop in props) {
          if (runEffectsForProperty(
                  inst, /** @type {!Object} */ (effects), id, prop, props, oldProps,
                  hasPaths, extraArgs)) {
            ran = true;
          }
        }
        return ran;
      }
      return false;
    }

    /**
     * Runs a list of effects for a given property.
     *
     * @param {!Polymer_PropertyEffects} inst The instance with effects to run
     * @param {!Object} effects Object map of property-to-Array of effects
     * @param {number} dedupeId Counter used for de-duping effects
     * @param {string} prop Name of changed property
     * @param {*} props Changed properties
     * @param {*} oldProps Old properties
     * @param {boolean=} hasPaths True with `props` contains one or more paths
     * @param {*=} extraArgs Additional metadata to pass to effect function
     * @return {boolean} True if an effect ran for this property
     * @private
     */
    function runEffectsForProperty(inst, effects, dedupeId, prop, props, oldProps, hasPaths, extraArgs) {
      let ran = false;
      let rootProperty = hasPaths ? root(prop) : prop;
      let fxs = effects[rootProperty];
      if (fxs) {
        for (let i=0, l=fxs.length, fx; (i<l) && (fx=fxs[i]); i++) {
          if ((!fx.info || fx.info.lastRun !== dedupeId) &&
              (!hasPaths || pathMatchesTrigger(prop, fx.trigger))) {
            if (fx.info) {
              fx.info.lastRun = dedupeId;
            }
            fx.fn(inst, prop, props, oldProps, fx.info, hasPaths, extraArgs);
            ran = true;
          }
        }
      }
      return ran;
    }

    /**
     * Determines whether a property/path that has changed matches the trigger
     * criteria for an effect.  A trigger is a descriptor with the following
     * structure, which matches the descriptors returned from `parseArg`.
     * e.g. for `foo.bar.*`:
     * ```
     * trigger: {
     *   name: 'a.b',
     *   structured: true,
     *   wildcard: true
     * }
     * ```
     * If no trigger is given, the path is deemed to match.
     *
     * @param {string} path Path or property that changed
     * @param {?DataTrigger} trigger Descriptor
     * @return {boolean} Whether the path matched the trigger
     */
    function pathMatchesTrigger(path, trigger) {
      if (trigger) {
        let triggerPath = /** @type {string} */ (trigger.name);
        return (triggerPath == path) ||
            !!(trigger.structured && isAncestor(triggerPath, path)) ||
            !!(trigger.wildcard && isDescendant(triggerPath, path));
      } else {
        return true;
      }
    }

    /**
     * Implements the "observer" effect.
     *
     * Calls the method with `info.methodName` on the instance, passing the
     * new and old values.
     *
     * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
     * @param {string} property Name of property
     * @param {Object} props Bag of current property changes
     * @param {Object} oldProps Bag of previous values for changed properties
     * @param {?} info Effect metadata
     * @return {void}
     * @private
     */
    function runObserverEffect(inst, property, props, oldProps, info) {
      let fn = typeof info.method === "string" ? inst[info.method] : info.method;
      let changedProp = info.property;
      if (fn) {
        fn.call(inst, inst.__data[changedProp], oldProps[changedProp]);
      } else if (!info.dynamicFn) {
        console.warn('observer method `' + info.method + '` not defined');
      }
    }

    /**
     * Runs "notify" effects for a set of changed properties.
     *
     * This method differs from the generic `runEffects` method in that it
     * will dispatch path notification events in the case that the property
     * changed was a path and the root property for that path didn't have a
     * "notify" effect.  This is to maintain 1.0 behavior that did not require
     * `notify: true` to ensure object sub-property notifications were
     * sent.
     *
     * @param {!Polymer_PropertyEffects} inst The instance with effects to run
     * @param {Object} notifyProps Bag of properties to notify
     * @param {Object} props Bag of current property changes
     * @param {Object} oldProps Bag of previous values for changed properties
     * @param {boolean} hasPaths True with `props` contains one or more paths
     * @return {void}
     * @private
     */
    function runNotifyEffects(inst, notifyProps, props, oldProps, hasPaths) {
      // Notify
      let fxs = inst[TYPES.NOTIFY];
      let notified;
      let id = dedupeId$1++;
      // Try normal notify effects; if none, fall back to try path notification
      for (let prop in notifyProps) {
        if (notifyProps[prop]) {
          if (fxs && runEffectsForProperty(inst, fxs, id, prop, props, oldProps, hasPaths)) {
            notified = true;
          } else if (hasPaths && notifyPath(inst, prop, props)) {
            notified = true;
          }
        }
      }
      // Flush host if we actually notified and host was batching
      // And the host has already initialized clients; this prevents
      // an issue with a host observing data changes before clients are ready.
      let host;
      if (notified && (host = inst.__dataHost) && host._invalidateProperties) {
        host._invalidateProperties();
      }
    }

    /**
     * Dispatches {property}-changed events with path information in the detail
     * object to indicate a sub-path of the property was changed.
     *
     * @param {!Polymer_PropertyEffects} inst The element from which to fire the
     *     event
     * @param {string} path The path that was changed
     * @param {Object} props Bag of current property changes
     * @return {boolean} Returns true if the path was notified
     * @private
     */
    function notifyPath(inst, path, props) {
      let rootProperty = root(path);
      if (rootProperty !== path) {
        let eventName = camelToDashCase(rootProperty) + '-changed';
        dispatchNotifyEvent(inst, eventName, props[path], path);
        return true;
      }
      return false;
    }

    /**
     * Dispatches {property}-changed events to indicate a property (or path)
     * changed.
     *
     * @param {!Polymer_PropertyEffects} inst The element from which to fire the
     *     event
     * @param {string} eventName The name of the event to send
     *     ('{property}-changed')
     * @param {*} value The value of the changed property
     * @param {string | null | undefined} path If a sub-path of this property
     *     changed, the path that changed (optional).
     * @return {void}
     * @private
     * @suppress {invalidCasts}
     */
    function dispatchNotifyEvent(inst, eventName, value, path) {
      let detail = {
        value: value,
        queueProperty: true
      };
      if (path) {
        detail.path = path;
      }
      wrap$1(/** @type {!HTMLElement} */(inst)).dispatchEvent(new CustomEvent(eventName, { detail }));
    }

    /**
     * Implements the "notify" effect.
     *
     * Dispatches a non-bubbling event named `info.eventName` on the instance
     * with a detail object containing the new `value`.
     *
     * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
     * @param {string} property Name of property
     * @param {Object} props Bag of current property changes
     * @param {Object} oldProps Bag of previous values for changed properties
     * @param {?} info Effect metadata
     * @param {boolean} hasPaths True with `props` contains one or more paths
     * @return {void}
     * @private
     */
    function runNotifyEffect(inst, property, props, oldProps, info, hasPaths) {
      let rootProperty = hasPaths ? root(property) : property;
      let path = rootProperty != property ? property : null;
      let value = path ? get(inst, path) : inst.__data[property];
      if (path && value === undefined) {
        value = props[property];  // specifically for .splices
      }
      dispatchNotifyEvent(inst, info.eventName, value, path);
    }

    /**
     * Handler function for 2-way notification events. Receives context
     * information captured in the `addNotifyListener` closure from the
     * `__notifyListeners` metadata.
     *
     * Sets the value of the notified property to the host property or path.  If
     * the event contained path information, translate that path to the host
     * scope's name for that path first.
     *
     * @param {CustomEvent} event Notification event (e.g. '<property>-changed')
     * @param {!Polymer_PropertyEffects} inst Host element instance handling the
     *     notification event
     * @param {string} fromProp Child element property that was bound
     * @param {string} toPath Host property/path that was bound
     * @param {boolean} negate Whether the binding was negated
     * @return {void}
     * @private
     */
    function handleNotification(event, inst, fromProp, toPath, negate) {
      let value;
      let detail = /** @type {Object} */(event.detail);
      let fromPath = detail && detail.path;
      if (fromPath) {
        toPath = translate(fromProp, toPath, fromPath);
        value = detail && detail.value;
      } else {
        value = event.currentTarget[fromProp];
      }
      value = negate ? !value : value;
      if (!inst[TYPES.READ_ONLY] || !inst[TYPES.READ_ONLY][toPath]) {
        if (inst._setPendingPropertyOrPath(toPath, value, true, Boolean(fromPath))
          && (!detail || !detail.queueProperty)) {
          inst._invalidateProperties();
        }
      }
    }

    /**
     * Implements the "reflect" effect.
     *
     * Sets the attribute named `info.attrName` to the given property value.
     *
     * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
     * @param {string} property Name of property
     * @param {Object} props Bag of current property changes
     * @param {Object} oldProps Bag of previous values for changed properties
     * @param {?} info Effect metadata
     * @return {void}
     * @private
     */
    function runReflectEffect(inst, property, props, oldProps, info) {
      let value = inst.__data[property];
      if (sanitizeDOMValue) {
        value = sanitizeDOMValue(value, info.attrName, 'attribute', /** @type {Node} */(inst));
      }
      inst._propertyToAttribute(property, info.attrName, value);
    }

    /**
     * Runs "computed" effects for a set of changed properties.
     *
     * This method differs from the generic `runEffects` method in that it
     * continues to run computed effects based on the output of each pass until
     * there are no more newly computed properties.  This ensures that all
     * properties that will be computed by the initial set of changes are
     * computed before other effects (binding propagation, observers, and notify)
     * run.
     *
     * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
     * @param {?Object} changedProps Bag of changed properties
     * @param {?Object} oldProps Bag of previous values for changed properties
     * @param {boolean} hasPaths True with `props` contains one or more paths
     * @return {void}
     * @private
     */
    function runComputedEffects(inst, changedProps, oldProps, hasPaths) {
      let computeEffects = inst[TYPES.COMPUTE];
      if (computeEffects) {
        let inputProps = changedProps;
        while (runEffects(inst, computeEffects, inputProps, oldProps, hasPaths)) {
          Object.assign(/** @type {!Object} */ (oldProps), inst.__dataOld);
          Object.assign(/** @type {!Object} */ (changedProps), inst.__dataPending);
          inputProps = inst.__dataPending;
          inst.__dataPending = null;
        }
      }
    }

    /**
     * Implements the "computed property" effect by running the method with the
     * values of the arguments specified in the `info` object and setting the
     * return value to the computed property specified.
     *
     * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
     * @param {string} property Name of property
     * @param {?Object} props Bag of current property changes
     * @param {?Object} oldProps Bag of previous values for changed properties
     * @param {?} info Effect metadata
     * @return {void}
     * @private
     */
    function runComputedEffect(inst, property, props, oldProps, info) {
      let result = runMethodEffect(inst, property, props, oldProps, info);
      let computedProp = info.methodInfo;
      if (inst.__dataHasAccessor && inst.__dataHasAccessor[computedProp]) {
        inst._setPendingProperty(computedProp, result, true);
      } else {
        inst[computedProp] = result;
      }
    }

    /**
     * Computes path changes based on path links set up using the `linkPaths`
     * API.
     *
     * @param {!Polymer_PropertyEffects} inst The instance whose props are changing
     * @param {string} path Path that has changed
     * @param {*} value Value of changed path
     * @return {void}
     * @private
     */
    function computeLinkedPaths(inst, path, value) {
      let links = inst.__dataLinkedPaths;
      if (links) {
        let link;
        for (let a in links) {
          let b = links[a];
          if (isDescendant(a, path)) {
            link = translate(a, b, path);
            inst._setPendingPropertyOrPath(link, value, true, true);
          } else if (isDescendant(b, path)) {
            link = translate(b, a, path);
            inst._setPendingPropertyOrPath(link, value, true, true);
          }
        }
      }
    }

    // -- bindings ----------------------------------------------

    /**
     * Adds binding metadata to the current `nodeInfo`, and binding effects
     * for all part dependencies to `templateInfo`.
     *
     * @param {Function} constructor Class that `_parseTemplate` is currently
     *   running on
     * @param {TemplateInfo} templateInfo Template metadata for current template
     * @param {NodeInfo} nodeInfo Node metadata for current template node
     * @param {string} kind Binding kind, either 'property', 'attribute', or 'text'
     * @param {string} target Target property name
     * @param {!Array<!BindingPart>} parts Array of binding part metadata
     * @param {string=} literal Literal text surrounding binding parts (specified
     *   only for 'property' bindings, since these must be initialized as part
     *   of boot-up)
     * @return {void}
     * @private
     */
    function addBinding(constructor, templateInfo, nodeInfo, kind, target, parts, literal) {
      // Create binding metadata and add to nodeInfo
      nodeInfo.bindings = nodeInfo.bindings || [];
      let /** Binding */ binding = { kind, target, parts, literal, isCompound: (parts.length !== 1) };
      nodeInfo.bindings.push(binding);
      // Add listener info to binding metadata
      if (shouldAddListener(binding)) {
        let {event, negate} = binding.parts[0];
        binding.listenerEvent = event || (camelToDashCase(target) + '-changed');
        binding.listenerNegate = negate;
      }
      // Add "propagate" property effects to templateInfo
      let index = templateInfo.nodeInfoList.length;
      for (let i=0; i<binding.parts.length; i++) {
        let part = binding.parts[i];
        part.compoundIndex = i;
        addEffectForBindingPart(constructor, templateInfo, binding, part, index);
      }
    }

    /**
     * Adds property effects to the given `templateInfo` for the given binding
     * part.
     *
     * @param {Function} constructor Class that `_parseTemplate` is currently
     *   running on
     * @param {TemplateInfo} templateInfo Template metadata for current template
     * @param {!Binding} binding Binding metadata
     * @param {!BindingPart} part Binding part metadata
     * @param {number} index Index into `nodeInfoList` for this node
     * @return {void}
     */
    function addEffectForBindingPart(constructor, templateInfo, binding, part, index) {
      if (!part.literal) {
        if (binding.kind === 'attribute' && binding.target[0] === '-') {
          console.warn('Cannot set attribute ' + binding.target +
            ' because "-" is not a valid attribute starting character');
        } else {
          let dependencies = part.dependencies;
          let info = { index, binding, part, evaluator: constructor };
          for (let j=0; j<dependencies.length; j++) {
            let trigger = dependencies[j];
            if (typeof trigger == 'string') {
              trigger = parseArg(trigger);
              trigger.wildcard = true;
            }
            constructor._addTemplatePropertyEffect(templateInfo, trigger.rootProperty, {
              fn: runBindingEffect,
              info, trigger
            });
          }
        }
      }
    }

    /**
     * Implements the "binding" (property/path binding) effect.
     *
     * Note that binding syntax is overridable via `_parseBindings` and
     * `_evaluateBinding`.  This method will call `_evaluateBinding` for any
     * non-literal parts returned from `_parseBindings`.  However,
     * there is no support for _path_ bindings via custom binding parts,
     * as this is specific to Polymer's path binding syntax.
     *
     * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
     * @param {string} path Name of property
     * @param {Object} props Bag of current property changes
     * @param {Object} oldProps Bag of previous values for changed properties
     * @param {?} info Effect metadata
     * @param {boolean} hasPaths True with `props` contains one or more paths
     * @param {Array} nodeList List of nodes associated with `nodeInfoList` template
     *   metadata
     * @return {void}
     * @private
     */
    function runBindingEffect(inst, path, props, oldProps, info, hasPaths, nodeList) {
      let node = nodeList[info.index];
      let binding = info.binding;
      let part = info.part;
      // Subpath notification: transform path and set to client
      // e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop
      if (hasPaths && part.source && (path.length > part.source.length) &&
          (binding.kind == 'property') && !binding.isCompound &&
          node.__isPropertyEffectsClient &&
          node.__dataHasAccessor && node.__dataHasAccessor[binding.target]) {
        let value = props[path];
        path = translate(part.source, binding.target, path);
        if (node._setPendingPropertyOrPath(path, value, false, true)) {
          inst._enqueueClient(node);
        }
      } else {
        let value = info.evaluator._evaluateBinding(inst, part, path, props, oldProps, hasPaths);
        // Propagate value to child
        applyBindingValue(inst, node, binding, part, value);
      }
    }

    /**
     * Sets the value for an "binding" (binding) effect to a node,
     * either as a property or attribute.
     *
     * @param {!Polymer_PropertyEffects} inst The instance owning the binding effect
     * @param {Node} node Target node for binding
     * @param {!Binding} binding Binding metadata
     * @param {!BindingPart} part Binding part metadata
     * @param {*} value Value to set
     * @return {void}
     * @private
     */
    function applyBindingValue(inst, node, binding, part, value) {
      value = computeBindingValue(node, value, binding, part);
      if (sanitizeDOMValue) {
        value = sanitizeDOMValue(value, binding.target, binding.kind, node);
      }
      if (binding.kind == 'attribute') {
        // Attribute binding
        inst._valueToNodeAttribute(/** @type {Element} */(node), value, binding.target);
      } else {
        // Property binding
        let prop = binding.target;
        if (node.__isPropertyEffectsClient &&
            node.__dataHasAccessor && node.__dataHasAccessor[prop]) {
          if (!node[TYPES.READ_ONLY] || !node[TYPES.READ_ONLY][prop]) {
            if (node._setPendingProperty(prop, value)) {
              inst._enqueueClient(node);
            }
          }
        } else  {
          inst._setUnmanagedPropertyToNode(node, prop, value);
        }
      }
    }

    /**
     * Transforms an "binding" effect value based on compound & negation
     * effect metadata, as well as handling for special-case properties
     *
     * @param {Node} node Node the value will be set to
     * @param {*} value Value to set
     * @param {!Binding} binding Binding metadata
     * @param {!BindingPart} part Binding part metadata
     * @return {*} Transformed value to set
     * @private
     */
    function computeBindingValue(node, value, binding, part) {
      if (binding.isCompound) {
        let storage = node.__dataCompoundStorage[binding.target];
        storage[part.compoundIndex] = value;
        value = storage.join('');
      }
      if (binding.kind !== 'attribute') {
        // Some browsers serialize `undefined` to `"undefined"`
        if (binding.target === 'textContent' ||
            (binding.target === 'value' &&
              (node.localName === 'input' || node.localName === 'textarea'))) {
          value = value == undefined ? '' : value;
        }
      }
      return value;
    }

    /**
     * Returns true if a binding's metadata meets all the requirements to allow
     * 2-way binding, and therefore a `<property>-changed` event listener should be
     * added:
     * - used curly braces
     * - is a property (not attribute) binding
     * - is not a textContent binding
     * - is not compound
     *
     * @param {!Binding} binding Binding metadata
     * @return {boolean} True if 2-way listener should be added
     * @private
     */
    function shouldAddListener(binding) {
      return Boolean(binding.target) &&
             binding.kind != 'attribute' &&
             binding.kind != 'text' &&
             !binding.isCompound &&
             binding.parts[0].mode === '{';
    }

    /**
     * Setup compound binding storage structures, notify listeners, and dataHost
     * references onto the bound nodeList.
     *
     * @param {!Polymer_PropertyEffects} inst Instance that bas been previously
     *     bound
     * @param {TemplateInfo} templateInfo Template metadata
     * @return {void}
     * @private
     */
    function setupBindings(inst, templateInfo) {
      // Setup compound storage, dataHost, and notify listeners
      let {nodeList, nodeInfoList} = templateInfo;
      if (nodeInfoList.length) {
        for (let i=0; i < nodeInfoList.length; i++) {
          let info = nodeInfoList[i];
          let node = nodeList[i];
          let bindings = info.bindings;
          if (bindings) {
            for (let i=0; i<bindings.length; i++) {
              let binding = bindings[i];
              setupCompoundStorage(node, binding);
              addNotifyListener(node, inst, binding);
            }
          }
          node.__dataHost = inst;
        }
      }
    }

    /**
     * Initializes `__dataCompoundStorage` local storage on a bound node with
     * initial literal data for compound bindings, and sets the joined
     * literal parts to the bound property.
     *
     * When changes to compound parts occur, they are first set into the compound
     * storage array for that property, and then the array is joined to result in
     * the final value set to the property/attribute.
     *
     * @param {Node} node Bound node to initialize
     * @param {Binding} binding Binding metadata
     * @return {void}
     * @private
     */
    function setupCompoundStorage(node, binding) {
      if (binding.isCompound) {
        // Create compound storage map
        let storage = node.__dataCompoundStorage ||
          (node.__dataCompoundStorage = {});
        let parts = binding.parts;
        // Copy literals from parts into storage for this binding
        let literals = new Array(parts.length);
        for (let j=0; j<parts.length; j++) {
          literals[j] = parts[j].literal;
        }
        let target = binding.target;
        storage[target] = literals;
        // Configure properties with their literal parts
        if (binding.literal && binding.kind == 'property') {
          // Note, className needs style scoping so this needs wrapping.
          // We may also want to consider doing this for `textContent` and
          // `innerHTML`.
          if (target === 'className') {
            node = wrap$1(node);
          }
          node[target] = binding.literal;
        }
      }
    }

    /**
     * Adds a 2-way binding notification event listener to the node specified
     *
     * @param {Object} node Child element to add listener to
     * @param {!Polymer_PropertyEffects} inst Host element instance to handle
     *     notification event
     * @param {Binding} binding Binding metadata
     * @return {void}
     * @private
     */
    function addNotifyListener(node, inst, binding) {
      if (binding.listenerEvent) {
        let part = binding.parts[0];
        node.addEventListener(binding.listenerEvent, function(e) {
          handleNotification(e, inst, binding.target, part.source, part.negate);
        });
      }
    }

    // -- for method-based effects (complexObserver & computed) --------------

    /**
     * Adds property effects for each argument in the method signature (and
     * optionally, for the method name if `dynamic` is true) that calls the
     * provided effect function.
     *
     * @param {Element | Object} model Prototype or instance
     * @param {!MethodSignature} sig Method signature metadata
     * @param {string} type Type of property effect to add
     * @param {Function} effectFn Function to run when arguments change
     * @param {*=} methodInfo Effect-specific information to be included in
     *   method effect metadata
     * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
     *   method names should be included as a dependency to the effect. Note,
     *   defaults to true if the signature is static (sig.static is true).
     * @return {void}
     * @private
     */
    function createMethodEffect(model, sig, type, effectFn, methodInfo, dynamicFn) {
      dynamicFn = sig.static || (dynamicFn &&
        (typeof dynamicFn !== 'object' || dynamicFn[sig.methodName]));
      let info = {
        methodName: sig.methodName,
        args: sig.args,
        methodInfo,
        dynamicFn
      };
      for (let i=0, arg; (i<sig.args.length) && (arg=sig.args[i]); i++) {
        if (!arg.literal) {
          model._addPropertyEffect(arg.rootProperty, type, {
            fn: effectFn, info: info, trigger: arg
          });
        }
      }
      if (dynamicFn) {
        model._addPropertyEffect(sig.methodName, type, {
          fn: effectFn, info: info
        });
      }
    }

    /**
     * Calls a method with arguments marshaled from properties on the instance
     * based on the method signature contained in the effect metadata.
     *
     * Multi-property observers, computed properties, and inline computing
     * functions call this function to invoke the method, then use the return
     * value accordingly.
     *
     * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
     * @param {string} property Name of property
     * @param {Object} props Bag of current property changes
     * @param {Object} oldProps Bag of previous values for changed properties
     * @param {?} info Effect metadata
     * @return {*} Returns the return value from the method invocation
     * @private
     */
    function runMethodEffect(inst, property, props, oldProps, info) {
      // Instances can optionally have a _methodHost which allows redirecting where
      // to find methods. Currently used by `templatize`.
      let context = inst._methodHost || inst;
      let fn = context[info.methodName];
      if (fn) {
        let args = inst._marshalArgs(info.args, property, props);
        return fn.apply(context, args);
      } else if (!info.dynamicFn) {
        console.warn('method `' + info.methodName + '` not defined');
      }
    }

    const emptyArray = [];

    // Regular expressions used for binding
    const IDENT  = '(?:' + '[a-zA-Z_$][\\w.:$\\-*]*' + ')';
    const NUMBER = '(?:' + '[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?' + ')';
    const SQUOTE_STRING = '(?:' + '\'(?:[^\'\\\\]|\\\\.)*\'' + ')';
    const DQUOTE_STRING = '(?:' + '"(?:[^"\\\\]|\\\\.)*"' + ')';
    const STRING = '(?:' + SQUOTE_STRING + '|' + DQUOTE_STRING + ')';
    const ARGUMENT = '(?:(' + IDENT + '|' + NUMBER + '|' +  STRING + ')\\s*' + ')';
    const ARGUMENTS = '(?:' + ARGUMENT + '(?:,\\s*' + ARGUMENT + ')*' + ')';
    const ARGUMENT_LIST = '(?:' + '\\(\\s*' +
                                  '(?:' + ARGUMENTS + '?' + ')' +
                                '\\)\\s*' + ')';
    const BINDING = '(' + IDENT + '\\s*' + ARGUMENT_LIST + '?' + ')'; // Group 3
    const OPEN_BRACKET = '(\\[\\[|{{)' + '\\s*';
    const CLOSE_BRACKET = '(?:]]|}})';
    const NEGATE = '(?:(!)\\s*)?'; // Group 2
    const EXPRESSION = OPEN_BRACKET + NEGATE + BINDING + CLOSE_BRACKET;
    const bindingRegex = new RegExp(EXPRESSION, "g");

    /**
     * Create a string from binding parts of all the literal parts
     *
     * @param {!Array<BindingPart>} parts All parts to stringify
     * @return {string} String made from the literal parts
     */
    function literalFromParts(parts) {
      let s = '';
      for (let i=0; i<parts.length; i++) {
        let literal = parts[i].literal;
        s += literal || '';
      }
      return s;
    }

    /**
     * Parses an expression string for a method signature, and returns a metadata
     * describing the method in terms of `methodName`, `static` (whether all the
     * arguments are literals), and an array of `args`
     *
     * @param {string} expression The expression to parse
     * @return {?MethodSignature} The method metadata object if a method expression was
     *   found, otherwise `undefined`
     * @private
     */
    function parseMethod(expression) {
      // tries to match valid javascript property names
      let m = expression.match(/([^\s]+?)\(([\s\S]*)\)/);
      if (m) {
        let methodName = m[1];
        let sig = { methodName, static: true, args: emptyArray };
        if (m[2].trim()) {
          // replace escaped commas with comma entity, split on un-escaped commas
          let args = m[2].replace(/\\,/g, '&comma;').split(',');
          return parseArgs(args, sig);
        } else {
          return sig;
        }
      }
      return null;
    }

    /**
     * Parses an array of arguments and sets the `args` property of the supplied
     * signature metadata object. Sets the `static` property to false if any
     * argument is a non-literal.
     *
     * @param {!Array<string>} argList Array of argument names
     * @param {!MethodSignature} sig Method signature metadata object
     * @return {!MethodSignature} The updated signature metadata object
     * @private
     */
    function parseArgs(argList, sig) {
      sig.args = argList.map(function(rawArg) {
        let arg = parseArg(rawArg);
        if (!arg.literal) {
          sig.static = false;
        }
        return arg;
      }, this);
      return sig;
    }

    /**
     * Parses an individual argument, and returns an argument metadata object
     * with the following fields:
     *
     *   {
     *     value: 'prop',        // property/path or literal value
     *     literal: false,       // whether argument is a literal
     *     structured: false,    // whether the property is a path
     *     rootProperty: 'prop', // the root property of the path
     *     wildcard: false       // whether the argument was a wildcard '.*' path
     *   }
     *
     * @param {string} rawArg The string value of the argument
     * @return {!MethodArg} Argument metadata object
     * @private
     */
    function parseArg(rawArg) {
      // clean up whitespace
      let arg = rawArg.trim()
        // replace comma entity with comma
        .replace(/&comma;/g, ',')
        // repair extra escape sequences; note only commas strictly need
        // escaping, but we allow any other char to be escaped since its
        // likely users will do this
        .replace(/\\(.)/g, '\$1')
        ;
      // basic argument descriptor
      let a = {
        name: arg,
        value: '',
        literal: false
      };
      // detect literal value (must be String or Number)
      let fc = arg[0];
      if (fc === '-') {
        fc = arg[1];
      }
      if (fc >= '0' && fc <= '9') {
        fc = '#';
      }
      switch(fc) {
        case "'":
        case '"':
          a.value = arg.slice(1, -1);
          a.literal = true;
          break;
        case '#':
          a.value = Number(arg);
          a.literal = true;
          break;
      }
      // if not literal, look for structured path
      if (!a.literal) {
        a.rootProperty = root(arg);
        // detect structured path (has dots)
        a.structured = isPath(arg);
        if (a.structured) {
          a.wildcard = (arg.slice(-2) == '.*');
          if (a.wildcard) {
            a.name = arg.slice(0, -2);
          }
        }
      }
      return a;
    }

    function getArgValue(data, props, path) {
      let value = get(data, path);
      // when data is not stored e.g. `splices`, get the value from changedProps
      // TODO(kschaaf): Note, this can cause a rare issue where the wildcard
      // info.value could pull a stale value out of changedProps during a reentrant
      // change that sets the value back to undefined.
      // https://github.com/Polymer/polymer/issues/5479
      if (value === undefined) {
        value = props[path];
      }
      return value;
    }

    // data api

    /**
     * Sends array splice notifications (`.splices` and `.length`)
     *
     * Note: this implementation only accepts normalized paths
     *
     * @param {!Polymer_PropertyEffects} inst Instance to send notifications to
     * @param {Array} array The array the mutations occurred on
     * @param {string} path The path to the array that was mutated
     * @param {Array} splices Array of splice records
     * @return {void}
     * @private
     */
    function notifySplices(inst, array, path, splices) {
      inst.notifyPath(path + '.splices', { indexSplices: splices });
      inst.notifyPath(path + '.length', array.length);
    }

    /**
     * Creates a splice record and sends an array splice notification for
     * the described mutation
     *
     * Note: this implementation only accepts normalized paths
     *
     * @param {!Polymer_PropertyEffects} inst Instance to send notifications to
     * @param {Array} array The array the mutations occurred on
     * @param {string} path The path to the array that was mutated
     * @param {number} index Index at which the array mutation occurred
     * @param {number} addedCount Number of added items
     * @param {Array} removed Array of removed items
     * @return {void}
     * @private
     */
    function notifySplice(inst, array, path, index, addedCount, removed) {
      notifySplices(inst, array, path, [{
        index: index,
        addedCount: addedCount,
        removed: removed,
        object: array,
        type: 'splice'
      }]);
    }

    /**
     * Returns an upper-cased version of the string.
     *
     * @param {string} name String to uppercase
     * @return {string} Uppercased string
     * @private
     */
    function upper(name) {
      return name[0].toUpperCase() + name.substring(1);
    }

    /**
     * Element class mixin that provides meta-programming for Polymer's template
     * binding and data observation (collectively, "property effects") system.
     *
     * This mixin uses provides the following key static methods for adding
     * property effects to an element class:
     * - `addPropertyEffect`
     * - `createPropertyObserver`
     * - `createMethodObserver`
     * - `createNotifyingProperty`
     * - `createReadOnlyProperty`
     * - `createReflectedProperty`
     * - `createComputedProperty`
     * - `bindTemplate`
     *
     * Each method creates one or more property accessors, along with metadata
     * used by this mixin's implementation of `_propertiesChanged` to perform
     * the property effects.
     *
     * Underscored versions of the above methods also exist on the element
     * prototype for adding property effects on instances at runtime.
     *
     * Note that this mixin overrides several `PropertyAccessors` methods, in
     * many cases to maintain guarantees provided by the Polymer 1.x features;
     * notably it changes property accessors to be synchronous by default
     * whereas the default when using `PropertyAccessors` standalone is to be
     * async by default.
     *
     * @mixinFunction
     * @polymer
     * @appliesMixin TemplateStamp
     * @appliesMixin PropertyAccessors
     * @summary Element class mixin that provides meta-programming for Polymer's
     * template binding and data observation system.
     * @template T
     * @param {function(new:T)} superClass Class to apply mixin to.
     * @return {function(new:T)} superClass with mixin applied.
     */
    const PropertyEffects = dedupingMixin(superClass => {

      /**
       * @constructor
       * @implements {Polymer_PropertyAccessors}
       * @implements {Polymer_TemplateStamp}
       * @unrestricted
       * @private
       */
      const propertyEffectsBase = TemplateStamp(PropertyAccessors(superClass));

      /**
       * @polymer
       * @mixinClass
       * @implements {Polymer_PropertyEffects}
       * @extends {propertyEffectsBase}
       * @unrestricted
       */
      class PropertyEffects extends propertyEffectsBase {

        constructor() {
          super();
          /** @type {boolean} */
          // Used to identify users of this mixin, ala instanceof
          this.__isPropertyEffectsClient = true;
          /** @type {number} */
          // NOTE: used to track re-entrant calls to `_flushProperties`
          // path changes dirty check against `__dataTemp` only during one "turn"
          // and are cleared when `__dataCounter` returns to 0.
          this.__dataCounter = 0;
          /** @type {boolean} */
          this.__dataClientsReady;
          /** @type {Array} */
          this.__dataPendingClients;
          /** @type {Object} */
          this.__dataToNotify;
          /** @type {Object} */
          this.__dataLinkedPaths;
          /** @type {boolean} */
          this.__dataHasPaths;
          /** @type {Object} */
          this.__dataCompoundStorage;
          /** @type {Polymer_PropertyEffects} */
          this.__dataHost;
          /** @type {!Object} */
          this.__dataTemp;
          /** @type {boolean} */
          this.__dataClientsInitialized;
          /** @type {!Object} */
          this.__data;
          /** @type {!Object|null} */
          this.__dataPending;
          /** @type {!Object} */
          this.__dataOld;
          /** @type {Object} */
          this.__computeEffects;
          /** @type {Object} */
          this.__reflectEffects;
          /** @type {Object} */
          this.__notifyEffects;
          /** @type {Object} */
          this.__propagateEffects;
          /** @type {Object} */
          this.__observeEffects;
          /** @type {Object} */
          this.__readOnly;
          /** @type {!TemplateInfo} */
          this.__templateInfo;
        }

        /**
         * @return {!Object<string, string>} Effect prototype property name map.
         */
        get PROPERTY_EFFECT_TYPES() {
          return TYPES;
        }

        /**
         * @override
         * @return {void}
         */
        _initializeProperties() {
          super._initializeProperties();
          hostStack.registerHost(this);
          this.__dataClientsReady = false;
          this.__dataPendingClients = null;
          this.__dataToNotify = null;
          this.__dataLinkedPaths = null;
          this.__dataHasPaths = false;
          // May be set on instance prior to upgrade
          this.__dataCompoundStorage = this.__dataCompoundStorage || null;
          this.__dataHost = this.__dataHost || null;
          this.__dataTemp = {};
          this.__dataClientsInitialized = false;
        }

        /**
         * Overrides `PropertyAccessors` implementation to provide a
         * more efficient implementation of initializing properties from
         * the prototype on the instance.
         *
         * @override
         * @param {Object} props Properties to initialize on the prototype
         * @return {void}
         */
        _initializeProtoProperties(props) {
          this.__data = Object.create(props);
          this.__dataPending = Object.create(props);
          this.__dataOld = {};
        }

        /**
         * Overrides `PropertyAccessors` implementation to avoid setting
         * `_setProperty`'s `shouldNotify: true`.
         *
         * @override
         * @param {Object} props Properties to initialize on the instance
         * @return {void}
         */
        _initializeInstanceProperties(props) {
          let readOnly = this[TYPES.READ_ONLY];
          for (let prop in props) {
            if (!readOnly || !readOnly[prop]) {
              this.__dataPending = this.__dataPending || {};
              this.__dataOld = this.__dataOld || {};
              this.__data[prop] = this.__dataPending[prop] = props[prop];
            }
          }
        }

        // Prototype setup ----------------------------------------

        /**
         * Equivalent to static `addPropertyEffect` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @override
         * @param {string} property Property that should trigger the effect
         * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @param {Object=} effect Effect metadata object
         * @return {void}
         * @protected
         */
        _addPropertyEffect(property, type, effect) {
          this._createPropertyAccessor(property, type == TYPES.READ_ONLY);
          // effects are accumulated into arrays per property based on type
          let effects = ensureOwnEffectMap(this, type)[property];
          if (!effects) {
            effects = this[type][property] = [];
          }
          effects.push(effect);
        }

        /**
         * Removes the given property effect.
         *
         * @override
         * @param {string} property Property the effect was associated with
         * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @param {Object=} effect Effect metadata object to remove
         * @return {void}
         */
        _removePropertyEffect(property, type, effect) {
          let effects = ensureOwnEffectMap(this, type)[property];
          let idx = effects.indexOf(effect);
          if (idx >= 0) {
            effects.splice(idx, 1);
          }
        }

        /**
         * Returns whether the current prototype/instance has a property effect
         * of a certain type.
         *
         * @override
         * @param {string} property Property name
         * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @return {boolean} True if the prototype/instance has an effect of this
         *     type
         * @protected
         */
        _hasPropertyEffect(property, type) {
          let effects = this[type];
          return Boolean(effects && effects[property]);
        }

        /**
         * Returns whether the current prototype/instance has a "read only"
         * accessor for the given property.
         *
         * @override
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this
         *     type
         * @protected
         */
        _hasReadOnlyEffect(property) {
          return this._hasPropertyEffect(property, TYPES.READ_ONLY);
        }

        /**
         * Returns whether the current prototype/instance has a "notify"
         * property effect for the given property.
         *
         * @override
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this
         *     type
         * @protected
         */
        _hasNotifyEffect(property) {
          return this._hasPropertyEffect(property, TYPES.NOTIFY);
        }

        /**
         * Returns whether the current prototype/instance has a "reflect to
         * attribute" property effect for the given property.
         *
         * @override
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this
         *     type
         * @protected
         */
        _hasReflectEffect(property) {
          return this._hasPropertyEffect(property, TYPES.REFLECT);
        }

        /**
         * Returns whether the current prototype/instance has a "computed"
         * property effect for the given property.
         *
         * @override
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this
         *     type
         * @protected
         */
        _hasComputedEffect(property) {
          return this._hasPropertyEffect(property, TYPES.COMPUTE);
        }

        // Runtime ----------------------------------------

        /**
         * Sets a pending property or path.  If the root property of the path in
         * question had no accessor, the path is set, otherwise it is enqueued
         * via `_setPendingProperty`.
         *
         * This function isolates relatively expensive functionality necessary
         * for the public API (`set`, `setProperties`, `notifyPath`, and property
         * change listeners via {{...}} bindings), such that it is only done
         * when paths enter the system, and not at every propagation step.  It
         * also sets a `__dataHasPaths` flag on the instance which is used to
         * fast-path slower path-matching code in the property effects host paths.
         *
         * `path` can be a path string or array of path parts as accepted by the
         * public API.
         *
         * @override
         * @param {string | !Array<number|string>} path Path to set
         * @param {*} value Value to set
         * @param {boolean=} shouldNotify Set to true if this change should
         *  cause a property notification event dispatch
         * @param {boolean=} isPathNotification If the path being set is a path
         *   notification of an already changed value, as opposed to a request
         *   to set and notify the change.  In the latter `false` case, a dirty
         *   check is performed and then the value is set to the path before
         *   enqueuing the pending property change.
         * @return {boolean} Returns true if the property/path was enqueued in
         *   the pending changes bag.
         * @protected
         */
        _setPendingPropertyOrPath(path, value, shouldNotify, isPathNotification) {
          if (isPathNotification ||
              root(Array.isArray(path) ? path[0] : path) !== path) {
            // Dirty check changes being set to a path against the actual object,
            // since this is the entry point for paths into the system; from here
            // the only dirty checks are against the `__dataTemp` cache to prevent
            // duplicate work in the same turn only. Note, if this was a notification
            // of a change already set to a path (isPathNotification: true),
            // we always let the change through and skip the `set` since it was
            // already dirty checked at the point of entry and the underlying
            // object has already been updated
            if (!isPathNotification) {
              let old = get(this, path);
              path = /** @type {string} */ (set(this, path, value));
              // Use property-accessor's simpler dirty check
              if (!path || !super._shouldPropertyChange(path, value, old)) {
                return false;
              }
            }
            this.__dataHasPaths = true;
            if (this._setPendingProperty(/**@type{string}*/(path), value, shouldNotify)) {
              computeLinkedPaths(this, /**@type{string}*/ (path), value);
              return true;
            }
          } else {
            if (this.__dataHasAccessor && this.__dataHasAccessor[path]) {
              return this._setPendingProperty(/**@type{string}*/(path), value, shouldNotify);
            } else {
              this[path] = value;
            }
          }
          return false;
        }

        /**
         * Applies a value to a non-Polymer element/node's property.
         *
         * The implementation makes a best-effort at binding interop:
         * Some native element properties have side-effects when
         * re-setting the same value (e.g. setting `<input>.value` resets the
         * cursor position), so we do a dirty-check before setting the value.
         * However, for better interop with non-Polymer custom elements that
         * accept objects, we explicitly re-set object changes coming from the
         * Polymer world (which may include deep object changes without the
         * top reference changing), erring on the side of providing more
         * information.
         *
         * Users may override this method to provide alternate approaches.
         *
         * @override
         * @param {!Node} node The node to set a property on
         * @param {string} prop The property to set
         * @param {*} value The value to set
         * @return {void}
         * @protected
         */
        _setUnmanagedPropertyToNode(node, prop, value) {
          // It is a judgment call that resetting primitives is
          // "bad" and resettings objects is also "good"; alternatively we could
          // implement a whitelist of tag & property values that should never
          // be reset (e.g. <input>.value && <select>.value)
          if (value !== node[prop] || typeof value == 'object') {
            // Note, className needs style scoping so this needs wrapping.
            if (prop === 'className') {
              node = /** @type {!Node} */(wrap$1(node));
            }
            node[prop] = value;
          }
        }

        /**
         * Overrides the `PropertiesChanged` implementation to introduce special
         * dirty check logic depending on the property & value being set:
         *
         * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
         *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
         * 2. Object set to simple property (e.g. 'prop': {...})
         *    Stored in `__dataTemp` and `__data`, dirty checked against
         *    `__dataTemp` by default implementation of `_shouldPropertyChange`
         * 3. Primitive value set to simple property (e.g. 'prop': 42)
         *    Stored in `__data`, dirty checked against `__data`
         *
         * The dirty-check is important to prevent cycles due to two-way
         * notification, but paths and objects are only dirty checked against any
         * previous value set during this turn via a "temporary cache" that is
         * cleared when the last `_propertiesChanged` exits. This is so:
         * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
         *    due to array mutations like shift/unshift/splice; this is fine
         *    since path changes are dirty-checked at user entry points like `set`
         * b. dirty-checking for objects only lasts one turn to allow the user
         *    to mutate the object in-place and re-set it with the same identity
         *    and have all sub-properties re-propagated in a subsequent turn.
         *
         * The temp cache is not necessarily sufficient to prevent invalid array
         * paths, since a splice can happen during the same turn (with pathological
         * user code); we could introduce a "fixup" for temporarily cached array
         * paths if needed: https://github.com/Polymer/polymer/issues/4227
         *
         * @override
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @param {boolean=} shouldNotify True if property should fire notification
         *   event (applies only for `notify: true` properties)
         * @return {boolean} Returns true if the property changed
         */
        _setPendingProperty(property, value, shouldNotify) {
          let propIsPath = this.__dataHasPaths && isPath(property);
          let prevProps = propIsPath ? this.__dataTemp : this.__data;
          if (this._shouldPropertyChange(property, value, prevProps[property])) {
            if (!this.__dataPending) {
              this.__dataPending = {};
              this.__dataOld = {};
            }
            // Ensure old is captured from the last turn
            if (!(property in this.__dataOld)) {
              this.__dataOld[property] = this.__data[property];
            }
            // Paths are stored in temporary cache (cleared at end of turn),
            // which is used for dirty-checking, all others stored in __data
            if (propIsPath) {
              this.__dataTemp[property] = value;
            } else {
              this.__data[property] = value;
            }
            // All changes go into pending property bag, passed to _propertiesChanged
            this.__dataPending[property] = value;
            // Track properties that should notify separately
            if (propIsPath || (this[TYPES.NOTIFY] && this[TYPES.NOTIFY][property])) {
              this.__dataToNotify = this.__dataToNotify || {};
              this.__dataToNotify[property] = shouldNotify;
            }
            return true;
          }
          return false;
        }

        /**
         * Overrides base implementation to ensure all accessors set `shouldNotify`
         * to true, for per-property notification tracking.
         *
         * @override
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @return {void}
         */
        _setProperty(property, value) {
          if (this._setPendingProperty(property, value, true)) {
            this._invalidateProperties();
          }
        }

        /**
         * Overrides `PropertyAccessor`'s default async queuing of
         * `_propertiesChanged`: if `__dataReady` is false (has not yet been
         * manually flushed), the function no-ops; otherwise flushes
         * `_propertiesChanged` synchronously.
         *
         * @override
         * @return {void}
         */
        _invalidateProperties() {
          if (this.__dataReady) {
            this._flushProperties();
          }
        }

        /**
         * Enqueues the given client on a list of pending clients, whose
         * pending property changes can later be flushed via a call to
         * `_flushClients`.
         *
         * @override
         * @param {Object} client PropertyEffects client to enqueue
         * @return {void}
         * @protected
         */
        _enqueueClient(client) {
          this.__dataPendingClients = this.__dataPendingClients || [];
          if (client !== this) {
            this.__dataPendingClients.push(client);
          }
        }

        /**
         * Overrides superclass implementation.
         *
         * @override
         * @return {void}
         * @protected
         */
        _flushProperties() {
          this.__dataCounter++;
          super._flushProperties();
          this.__dataCounter--;
        }

        /**
         * Flushes any clients previously enqueued via `_enqueueClient`, causing
         * their `_flushProperties` method to run.
         *
         * @override
         * @return {void}
         * @protected
         */
        _flushClients() {
          if (!this.__dataClientsReady) {
            this.__dataClientsReady = true;
            this._readyClients();
            // Override point where accessors are turned on; importantly,
            // this is after clients have fully readied, providing a guarantee
            // that any property effects occur only after all clients are ready.
            this.__dataReady = true;
          } else {
            this.__enableOrFlushClients();
          }
        }

        // NOTE: We ensure clients either enable or flush as appropriate. This
        // handles two corner cases:
        // (1) clients flush properly when connected/enabled before the host
        // enables; e.g.
        //   (a) Templatize stamps with no properties and does not flush and
        //   (b) the instance is inserted into dom and
        //   (c) then the instance flushes.
        // (2) clients enable properly when not connected/enabled when the host
        // flushes; e.g.
        //   (a) a template is runtime stamped and not yet connected/enabled
        //   (b) a host sets a property, causing stamped dom to flush
        //   (c) the stamped dom enables.
        __enableOrFlushClients() {
          let clients = this.__dataPendingClients;
          if (clients) {
            this.__dataPendingClients = null;
            for (let i=0; i < clients.length; i++) {
              let client = clients[i];
              if (!client.__dataEnabled) {
                client._enableProperties();
              } else if (client.__dataPending) {
                client._flushProperties();
              }
            }
          }
        }

        /**
         * Perform any initial setup on client dom. Called before the first
         * `_flushProperties` call on client dom and before any element
         * observers are called.
         *
         * @override
         * @return {void}
         * @protected
         */
        _readyClients() {
          this.__enableOrFlushClients();
        }

        /**
         * Sets a bag of property changes to this instance, and
         * synchronously processes all effects of the properties as a batch.
         *
         * Property names must be simple properties, not paths.  Batched
         * path propagation is not supported.
         *
         * @override
         * @param {Object} props Bag of one or more key-value pairs whose key is
         *   a property and value is the new value to set for that property.
         * @param {boolean=} setReadOnly When true, any private values set in
         *   `props` will be set. By default, `setProperties` will not set
         *   `readOnly: true` root properties.
         * @return {void}
         * @public
         */
        setProperties(props, setReadOnly) {
          for (let path in props) {
            if (setReadOnly || !this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][path]) {
              //TODO(kschaaf): explicitly disallow paths in setProperty?
              // wildcard observers currently only pass the first changed path
              // in the `info` object, and you could do some odd things batching
              // paths, e.g. {'foo.bar': {...}, 'foo': null}
              this._setPendingPropertyOrPath(path, props[path], true);
            }
          }
          this._invalidateProperties();
        }

        /**
         * Overrides `PropertyAccessors` so that property accessor
         * side effects are not enabled until after client dom is fully ready.
         * Also calls `_flushClients` callback to ensure client dom is enabled
         * that was not enabled as a result of flushing properties.
         *
         * @override
         * @return {void}
         */
        ready() {
          // It is important that `super.ready()` is not called here as it
          // immediately turns on accessors. Instead, we wait until `readyClients`
          // to enable accessors to provide a guarantee that clients are ready
          // before processing any accessors side effects.
          this._flushProperties();
          // If no data was pending, `_flushProperties` will not `flushClients`
          // so ensure this is done.
          if (!this.__dataClientsReady) {
            this._flushClients();
          }
          // Before ready, client notifications do not trigger _flushProperties.
          // Therefore a flush is necessary here if data has been set.
          if (this.__dataPending) {
            this._flushProperties();
          }
        }

        /**
         * Implements `PropertyAccessors`'s properties changed callback.
         *
         * Runs each class of effects for the batch of changed properties in
         * a specific order (compute, propagate, reflect, observe, notify).
         *
         * @override
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {?Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {?Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {void}
         */
        _propertiesChanged(currentProps, changedProps, oldProps) {
          // ----------------------------
          // let c = Object.getOwnPropertyNames(changedProps || {});
          // window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
          // if (window.debug) { debugger; }
          // ----------------------------
          let hasPaths = this.__dataHasPaths;
          this.__dataHasPaths = false;
          // Compute properties
          runComputedEffects(this, changedProps, oldProps, hasPaths);
          // Clear notify properties prior to possible reentry (propagate, observe),
          // but after computing effects have a chance to add to them
          let notifyProps = this.__dataToNotify;
          this.__dataToNotify = null;
          // Propagate properties to clients
          this._propagatePropertyChanges(changedProps, oldProps, hasPaths);
          // Flush clients
          this._flushClients();
          // Reflect properties
          runEffects(this, this[TYPES.REFLECT], changedProps, oldProps, hasPaths);
          // Observe properties
          runEffects(this, this[TYPES.OBSERVE], changedProps, oldProps, hasPaths);
          // Notify properties to host
          if (notifyProps) {
            runNotifyEffects(this, notifyProps, changedProps, oldProps, hasPaths);
          }
          // Clear temporary cache at end of turn
          if (this.__dataCounter == 1) {
            this.__dataTemp = {};
          }
          // ----------------------------
          // window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
          // ----------------------------
        }

        /**
         * Called to propagate any property changes to stamped template nodes
         * managed by this element.
         *
         * @override
         * @param {Object} changedProps Bag of changed properties
         * @param {Object} oldProps Bag of previous values for changed properties
         * @param {boolean} hasPaths True with `props` contains one or more paths
         * @return {void}
         * @protected
         */
        _propagatePropertyChanges(changedProps, oldProps, hasPaths) {
          if (this[TYPES.PROPAGATE]) {
            runEffects(this, this[TYPES.PROPAGATE], changedProps, oldProps, hasPaths);
          }
          let templateInfo = this.__templateInfo;
          while (templateInfo) {
            runEffects(this, templateInfo.propertyEffects, changedProps, oldProps,
              hasPaths, templateInfo.nodeList);
            templateInfo = templateInfo.nextTemplateInfo;
          }
        }

        /**
         * Aliases one data path as another, such that path notifications from one
         * are routed to the other.
         *
         * @override
         * @param {string | !Array<string|number>} to Target path to link.
         * @param {string | !Array<string|number>} from Source path to link.
         * @return {void}
         * @public
         */
        linkPaths(to, from) {
          to = normalize(to);
          from = normalize(from);
          this.__dataLinkedPaths = this.__dataLinkedPaths || {};
          this.__dataLinkedPaths[to] = from;
        }

        /**
         * Removes a data path alias previously established with `_linkPaths`.
         *
         * Note, the path to unlink should be the target (`to`) used when
         * linking the paths.
         *
         * @override
         * @param {string | !Array<string|number>} path Target path to unlink.
         * @return {void}
         * @public
         */
        unlinkPaths(path) {
          path = normalize(path);
          if (this.__dataLinkedPaths) {
            delete this.__dataLinkedPaths[path];
          }
        }

        /**
         * Notify that an array has changed.
         *
         * Example:
         *
         *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
         *     ...
         *     this.items.splice(1, 1, {name: 'Sam'});
         *     this.items.push({name: 'Bob'});
         *     this.notifySplices('items', [
         *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1,
         *         object: this.items, type: 'splice' },
         *       { index: 3, removed: [], addedCount: 1,
         *         object: this.items, type: 'splice'}
         *     ]);
         *
         * @param {string} path Path that should be notified.
         * @param {Array} splices Array of splice records indicating ordered
         *   changes that occurred to the array. Each record should have the
         *   following fields:
         *    * index: index at which the change occurred
         *    * removed: array of items that were removed from this index
         *    * addedCount: number of new items added at this index
         *    * object: a reference to the array in question
         *    * type: the string literal 'splice'
         *
         *   Note that splice records _must_ be normalized such that they are
         *   reported in index order (raw results from `Object.observe` are not
         *   ordered and must be normalized/merged before notifying).
         *
         * @override
         * @return {void}
         * @public
         */
        notifySplices(path, splices) {
          let info = {path: ''};
          let array = /** @type {Array} */(get(this, path, info));
          notifySplices(this, array, info.path, splices);
        }

        /**
         * Convenience method for reading a value from a path.
         *
         * Note, if any part in the path is undefined, this method returns
         * `undefined` (this method does not throw when dereferencing undefined
         * paths).
         *
         * @override
         * @param {(string|!Array<(string|number)>)} path Path to the value
         *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
         *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
         *   bracketed expressions are not supported; string-based path parts
         *   *must* be separated by dots.  Note that when dereferencing array
         *   indices, the index may be used as a dotted part directly
         *   (e.g. `users.12.name` or `['users', 12, 'name']`).
         * @param {Object=} root Root object from which the path is evaluated.
         * @return {*} Value at the path, or `undefined` if any part of the path
         *   is undefined.
         * @public
         */
        get(path, root$$1) {
          return get(root$$1 || this, path);
        }

        /**
         * Convenience method for setting a value to a path and notifying any
         * elements bound to the same path.
         *
         * Note, if any part in the path except for the last is undefined,
         * this method does nothing (this method does not throw when
         * dereferencing undefined paths).
         *
         * @override
         * @param {(string|!Array<(string|number)>)} path Path to the value
         *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
         *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
         *   bracketed expressions are not supported; string-based path parts
         *   *must* be separated by dots.  Note that when dereferencing array
         *   indices, the index may be used as a dotted part directly
         *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
         * @param {*} value Value to set at the specified path.
         * @param {Object=} root Root object from which the path is evaluated.
         *   When specified, no notification will occur.
         * @return {void}
         * @public
         */
        set(path, value, root$$1) {
          if (root$$1) {
            set(root$$1, path, value);
          } else {
            if (!this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][/** @type {string} */(path)]) {
              if (this._setPendingPropertyOrPath(path, value, true)) {
                this._invalidateProperties();
              }
            }
          }
        }

        /**
         * Adds items onto the end of the array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.push`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @override
         * @param {string | !Array<string|number>} path Path to array.
         * @param {...*} items Items to push onto array
         * @return {number} New length of the array.
         * @public
         */
        push(path, ...items) {
          let info = {path: ''};
          let array = /** @type {Array}*/(get(this, path, info));
          let len = array.length;
          let ret = array.push(...items);
          if (items.length) {
            notifySplice(this, array, info.path, len, items.length, []);
          }
          return ret;
        }

        /**
         * Removes an item from the end of array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.pop`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @override
         * @param {string | !Array<string|number>} path Path to array.
         * @return {*} Item that was removed.
         * @public
         */
        pop(path) {
          let info = {path: ''};
          let array = /** @type {Array} */(get(this, path, info));
          let hadLength = Boolean(array.length);
          let ret = array.pop();
          if (hadLength) {
            notifySplice(this, array, info.path, array.length, 0, [ret]);
          }
          return ret;
        }

        /**
         * Starting from the start index specified, removes 0 or more items
         * from the array and inserts 0 or more new items in their place.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.splice`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @override
         * @param {string | !Array<string|number>} path Path to array.
         * @param {number} start Index from which to start removing/inserting.
         * @param {number=} deleteCount Number of items to remove.
         * @param {...*} items Items to insert into array.
         * @return {Array} Array of removed items.
         * @public
         */
        splice(path, start, deleteCount, ...items) {
          let info = {path : ''};
          let array = /** @type {Array} */(get(this, path, info));
          // Normalize fancy native splice handling of crazy start values
          if (start < 0) {
            start = array.length - Math.floor(-start);
          } else if (start) {
            start = Math.floor(start);
          }
          // array.splice does different things based on the number of arguments
          // you pass in. Therefore, array.splice(0) and array.splice(0, undefined)
          // do different things. In the former, the whole array is cleared. In the
          // latter, no items are removed.
          // This means that we need to detect whether 1. one of the arguments
          // is actually passed in and then 2. determine how many arguments
          // we should pass on to the native array.splice
          //
          let ret;
          // Omit any additional arguments if they were not passed in
          if (arguments.length === 2) {
            ret = array.splice(start);
          // Either start was undefined and the others were defined, but in this
          // case we can safely pass on all arguments
          //
          // Note: this includes the case where none of the arguments were passed in,
          // e.g. this.splice('array'). However, if both start and deleteCount
          // are undefined, array.splice will not modify the array (as expected)
          } else {
            ret = array.splice(start, deleteCount, ...items);
          }
          // At the end, check whether any items were passed in (e.g. insertions)
          // or if the return array contains items (e.g. deletions).
          // Only notify if items were added or deleted.
          if (items.length || ret.length) {
            notifySplice(this, array, info.path, start, items.length, ret);
          }
          return ret;
        }

        /**
         * Removes an item from the beginning of array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.pop`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @override
         * @param {string | !Array<string|number>} path Path to array.
         * @return {*} Item that was removed.
         * @public
         */
        shift(path) {
          let info = {path: ''};
          let array = /** @type {Array} */(get(this, path, info));
          let hadLength = Boolean(array.length);
          let ret = array.shift();
          if (hadLength) {
            notifySplice(this, array, info.path, 0, 0, [ret]);
          }
          return ret;
        }

        /**
         * Adds items onto the beginning of the array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.push`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @override
         * @param {string | !Array<string|number>} path Path to array.
         * @param {...*} items Items to insert info array
         * @return {number} New length of the array.
         * @public
         */
        unshift(path, ...items) {
          let info = {path: ''};
          let array = /** @type {Array} */(get(this, path, info));
          let ret = array.unshift(...items);
          if (items.length) {
            notifySplice(this, array, info.path, 0, items.length, []);
          }
          return ret;
        }

        /**
         * Notify that a path has changed.
         *
         * Example:
         *
         *     this.item.user.name = 'Bob';
         *     this.notifyPath('item.user.name');
         *
         * @override
         * @param {string} path Path that should be notified.
         * @param {*=} value Value at the path (optional).
         * @return {void}
         * @public
         */
        notifyPath(path, value) {
          /** @type {string} */
          let propPath;
          if (arguments.length == 1) {
            // Get value if not supplied
            let info = {path: ''};
            value = get(this, path, info);
            propPath = info.path;
          } else if (Array.isArray(path)) {
            // Normalize path if needed
            propPath = normalize(path);
          } else {
            propPath = /** @type{string} */(path);
          }
          if (this._setPendingPropertyOrPath(propPath, value, true, true)) {
            this._invalidateProperties();
          }
        }

        /**
         * Equivalent to static `createReadOnlyProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @override
         * @param {string} property Property name
         * @param {boolean=} protectedSetter Creates a custom protected setter
         *   when `true`.
         * @return {void}
         * @protected
         */
        _createReadOnlyProperty(property, protectedSetter) {
          this._addPropertyEffect(property, TYPES.READ_ONLY);
          if (protectedSetter) {
            this['_set' + upper(property)] = /** @this {PropertyEffects} */function(value) {
              this._setProperty(property, value);
            };
          }
        }

        /**
         * Equivalent to static `createPropertyObserver` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @override
         * @param {string} property Property name
         * @param {string|function(*,*)} method Function or name of observer method
         *     to call
         * @param {boolean=} dynamicFn Whether the method name should be included as
         *   a dependency to the effect.
         * @return {void}
         * @protected
         */
        _createPropertyObserver(property, method, dynamicFn) {
          let info = { property, method, dynamicFn: Boolean(dynamicFn) };
          this._addPropertyEffect(property, TYPES.OBSERVE, {
            fn: runObserverEffect, info, trigger: {name: property}
          });
          if (dynamicFn) {
            this._addPropertyEffect(/** @type {string} */(method), TYPES.OBSERVE, {
              fn: runObserverEffect, info, trigger: {name: method}
            });
          }
        }

        /**
         * Equivalent to static `createMethodObserver` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @override
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating
         *   whether method names should be included as a dependency to the effect.
         * @return {void}
         * @protected
         */
        _createMethodObserver(expression, dynamicFn) {
          let sig = parseMethod(expression);
          if (!sig) {
            throw new Error("Malformed observer expression '" + expression + "'");
          }
          createMethodEffect(this, sig, TYPES.OBSERVE, runMethodEffect, null, dynamicFn);
        }

        /**
         * Equivalent to static `createNotifyingProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @override
         * @param {string} property Property name
         * @return {void}
         * @protected
         */
        _createNotifyingProperty(property) {
          this._addPropertyEffect(property, TYPES.NOTIFY, {
            fn: runNotifyEffect,
            info: {
              eventName: camelToDashCase(property) + '-changed',
              property: property
            }
          });
        }

        /**
         * Equivalent to static `createReflectedProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @override
         * @param {string} property Property name
         * @return {void}
         * @protected
         * @suppress {missingProperties} go/missingfnprops
         */
        _createReflectedProperty(property) {
          let attr = this.constructor.attributeNameForProperty(property);
          if (attr[0] === '-') {
            console.warn('Property ' + property + ' cannot be reflected to attribute ' +
              attr + ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.');
          } else {
            this._addPropertyEffect(property, TYPES.REFLECT, {
              fn: runReflectEffect,
              info: {
                attrName: attr
              }
            });
          }
        }

        /**
         * Equivalent to static `createComputedProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @override
         * @param {string} property Name of computed property to set
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating
         *   whether method names should be included as a dependency to the effect.
         * @return {void}
         * @protected
         */
        _createComputedProperty(property, expression, dynamicFn) {
          let sig = parseMethod(expression);
          if (!sig) {
            throw new Error("Malformed computed expression '" + expression + "'");
          }
          createMethodEffect(this, sig, TYPES.COMPUTE, runComputedEffect, property, dynamicFn);
        }

        /**
         * Gather the argument values for a method specified in the provided array
         * of argument metadata.
         *
         * The `path` and `value` arguments are used to fill in wildcard descriptor
         * when the method is being called as a result of a path notification.
         *
         * @param {!Array<!MethodArg>} args Array of argument metadata
         * @param {string} path Property/path name that triggered the method effect
         * @param {Object} props Bag of current property changes
         * @return {Array<*>} Array of argument values
         * @private
         */
        _marshalArgs(args, path, props) {
          const data = this.__data;
          const values = [];
          for (let i=0, l=args.length; i<l; i++) {
            let {name, structured, wildcard, value, literal} = args[i];
            if (!literal) {
              if (wildcard) {
                const matches$$1 = isDescendant(name, path);
                const pathValue = getArgValue(data, props, matches$$1 ? path : name);
                value = {
                  path: matches$$1 ? path : name,
                  value: pathValue,
                  base: matches$$1 ? get(data, name) : pathValue
                };
              } else {
                value = structured ? getArgValue(data, props, name) : data[name];
              }
            }
            values[i] = value;
          }
          return values;
        }

        // -- static class methods ------------

        /**
         * Ensures an accessor exists for the specified property, and adds
         * to a list of "property effects" that will run when the accessor for
         * the specified property is set.  Effects are grouped by "type", which
         * roughly corresponds to a phase in effect processing.  The effect
         * metadata should be in the following form:
         *
         *     {
         *       fn: effectFunction, // Reference to function to call to perform effect
         *       info: { ... }       // Effect metadata passed to function
         *       trigger: {          // Optional triggering metadata; if not provided
         *         name: string      // the property is treated as a wildcard
         *         structured: boolean
         *         wildcard: boolean
         *       }
         *     }
         *
         * Effects are called from `_propertiesChanged` in the following order by
         * type:
         *
         * 1. COMPUTE
         * 2. PROPAGATE
         * 3. REFLECT
         * 4. OBSERVE
         * 5. NOTIFY
         *
         * Effect functions are called with the following signature:
         *
         *     effectFunction(inst, path, props, oldProps, info, hasPaths)
         *
         * @param {string} property Property that should trigger the effect
         * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @param {Object=} effect Effect metadata object
         * @return {void}
         * @protected
         * @nocollapse
         */
        static addPropertyEffect(property, type, effect) {
          this.prototype._addPropertyEffect(property, type, effect);
        }

        /**
         * Creates a single-property observer for the given property.
         *
         * @param {string} property Property name
         * @param {string|function(*,*)} method Function or name of observer method to call
         * @param {boolean=} dynamicFn Whether the method name should be included as
         *   a dependency to the effect.
         * @return {void}
         * @protected
         * @nocollapse
         */
        static createPropertyObserver(property, method, dynamicFn) {
          this.prototype._createPropertyObserver(property, method, dynamicFn);
        }

        /**
         * Creates a multi-property "method observer" based on the provided
         * expression, which should be a string in the form of a normal JavaScript
         * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
         * should correspond to a property or path in the context of this
         * prototype (or instance), or may be a literal string or number.
         *
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating
         * @return {void}
         *   whether method names should be included as a dependency to the effect.
         * @protected
         * @nocollapse
         */
        static createMethodObserver(expression, dynamicFn) {
          this.prototype._createMethodObserver(expression, dynamicFn);
        }

        /**
         * Causes the setter for the given property to dispatch `<property>-changed`
         * events to notify of changes to the property.
         *
         * @param {string} property Property name
         * @return {void}
         * @protected
         * @nocollapse
         */
        static createNotifyingProperty(property) {
          this.prototype._createNotifyingProperty(property);
        }

        /**
         * Creates a read-only accessor for the given property.
         *
         * To set the property, use the protected `_setProperty` API.
         * To create a custom protected setter (e.g. `_setMyProp()` for
         * property `myProp`), pass `true` for `protectedSetter`.
         *
         * Note, if the property will have other property effects, this method
         * should be called first, before adding other effects.
         *
         * @param {string} property Property name
         * @param {boolean=} protectedSetter Creates a custom protected setter
         *   when `true`.
         * @return {void}
         * @protected
         * @nocollapse
         */
        static createReadOnlyProperty(property, protectedSetter) {
          this.prototype._createReadOnlyProperty(property, protectedSetter);
        }

        /**
         * Causes the setter for the given property to reflect the property value
         * to a (dash-cased) attribute of the same name.
         *
         * @param {string} property Property name
         * @return {void}
         * @protected
         * @nocollapse
         */
        static createReflectedProperty(property) {
          this.prototype._createReflectedProperty(property);
        }

        /**
         * Creates a computed property whose value is set to the result of the
         * method described by the given `expression` each time one or more
         * arguments to the method changes.  The expression should be a string
         * in the form of a normal JavaScript function signature:
         * `'methodName(arg1, [..., argn])'`
         *
         * @param {string} property Name of computed property to set
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
         *   method names should be included as a dependency to the effect.
         * @return {void}
         * @protected
         * @nocollapse
         */
        static createComputedProperty(property, expression, dynamicFn) {
          this.prototype._createComputedProperty(property, expression, dynamicFn);
        }

        /**
         * Parses the provided template to ensure binding effects are created
         * for them, and then ensures property accessors are created for any
         * dependent properties in the template.  Binding effects for bound
         * templates are stored in a linked list on the instance so that
         * templates can be efficiently stamped and unstamped.
         *
         * @param {!HTMLTemplateElement} template Template containing binding
         *   bindings
         * @return {!TemplateInfo} Template metadata object
         * @protected
         * @nocollapse
         */
        static bindTemplate(template) {
          return this.prototype._bindTemplate(template);
        }

        // -- binding ----------------------------------------------

        /**
         * Equivalent to static `bindTemplate` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * This method may be called on the prototype (for prototypical template
         * binding, to avoid creating accessors every instance) once per prototype,
         * and will be called with `runtimeBinding: true` by `_stampTemplate` to
         * create and link an instance of the template metadata associated with a
         * particular stamping.
         *
         * @override
         * @param {!HTMLTemplateElement} template Template containing binding
         *   bindings
         * @param {boolean=} instanceBinding When false (default), performs
         *   "prototypical" binding of the template and overwrites any previously
         *   bound template for the class. When true (as passed from
         *   `_stampTemplate`), the template info is instanced and linked into
         *   the list of bound templates.
         * @return {!TemplateInfo} Template metadata object; for `runtimeBinding`,
         *   this is an instance of the prototypical template info
         * @protected
         * @suppress {missingProperties} go/missingfnprops
         */
        _bindTemplate(template, instanceBinding) {
          let templateInfo = this.constructor._parseTemplate(template);
          let wasPreBound = this.__templateInfo == templateInfo;
          // Optimization: since this is called twice for proto-bound templates,
          // don't attempt to recreate accessors if this template was pre-bound
          if (!wasPreBound) {
            for (let prop in templateInfo.propertyEffects) {
              this._createPropertyAccessor(prop);
            }
          }
          if (instanceBinding) {
            // For instance-time binding, create instance of template metadata
            // and link into list of templates if necessary
            templateInfo = /** @type {!TemplateInfo} */(Object.create(templateInfo));
            templateInfo.wasPreBound = wasPreBound;
            if (!wasPreBound && this.__templateInfo) {
              let last = this.__templateInfoLast || this.__templateInfo;
              this.__templateInfoLast = last.nextTemplateInfo = templateInfo;
              templateInfo.previousTemplateInfo = last;
              return templateInfo;
            }
          }
          return this.__templateInfo = templateInfo;
        }

        /**
         * Adds a property effect to the given template metadata, which is run
         * at the "propagate" stage of `_propertiesChanged` when the template
         * has been bound to the element via `_bindTemplate`.
         *
         * The `effect` object should match the format in `_addPropertyEffect`.
         *
         * @param {Object} templateInfo Template metadata to add effect to
         * @param {string} prop Property that should trigger the effect
         * @param {Object=} effect Effect metadata object
         * @return {void}
         * @protected
         * @nocollapse
         */
        static _addTemplatePropertyEffect(templateInfo, prop, effect) {
          let hostProps = templateInfo.hostProps = templateInfo.hostProps || {};
          hostProps[prop] = true;
          let effects = templateInfo.propertyEffects = templateInfo.propertyEffects || {};
          let propEffects = effects[prop] = effects[prop] || [];
          propEffects.push(effect);
        }

        /**
         * Stamps the provided template and performs instance-time setup for
         * Polymer template features, including data bindings, declarative event
         * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
         * is returned containing the stamped DOM, ready for insertion into the
         * DOM.
         *
         * This method may be called more than once; however note that due to
         * `shadycss` polyfill limitations, only styles from templates prepared
         * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
         * to the shadow root and support CSS custom properties), and note that
         * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
         * any styles required by in runtime-stamped templates must be included
         * in the main element template.
         *
         * @param {!HTMLTemplateElement} template Template to stamp
         * @return {!StampedTemplate} Cloned template content
         * @override
         * @protected
         */
        _stampTemplate(template) {
          // Ensures that created dom is `_enqueueClient`'d to this element so
          // that it can be flushed on next call to `_flushProperties`
          hostStack.beginHosting(this);
          let dom = super._stampTemplate(template);
          hostStack.endHosting(this);
          let templateInfo = /** @type {!TemplateInfo} */(this._bindTemplate(template, true));
          // Add template-instance-specific data to instanced templateInfo
          templateInfo.nodeList = dom.nodeList;
          // Capture child nodes to allow unstamping of non-prototypical templates
          if (!templateInfo.wasPreBound) {
            let nodes = templateInfo.childNodes = [];
            for (let n=dom.firstChild; n; n=n.nextSibling) {
              nodes.push(n);
            }
          }
          dom.templateInfo = templateInfo;
          // Setup compound storage, 2-way listeners, and dataHost for bindings
          setupBindings(this, templateInfo);
          // Flush properties into template nodes if already booted
          if (this.__dataReady) {
            runEffects(this, templateInfo.propertyEffects, this.__data, null,
              false, templateInfo.nodeList);
          }
          return dom;
        }

        /**
         * Removes and unbinds the nodes previously contained in the provided
         * DocumentFragment returned from `_stampTemplate`.
         *
         * @override
         * @param {!StampedTemplate} dom DocumentFragment previously returned
         *   from `_stampTemplate` associated with the nodes to be removed
         * @return {void}
         * @protected
         */
        _removeBoundDom(dom) {
          // Unlink template info
          let templateInfo = dom.templateInfo;
          if (templateInfo.previousTemplateInfo) {
            templateInfo.previousTemplateInfo.nextTemplateInfo =
              templateInfo.nextTemplateInfo;
          }
          if (templateInfo.nextTemplateInfo) {
            templateInfo.nextTemplateInfo.previousTemplateInfo =
              templateInfo.previousTemplateInfo;
          }
          if (this.__templateInfoLast == templateInfo) {
            this.__templateInfoLast = templateInfo.previousTemplateInfo;
          }
          templateInfo.previousTemplateInfo = templateInfo.nextTemplateInfo = null;
          // Remove stamped nodes
          let nodes = templateInfo.childNodes;
          for (let i=0; i<nodes.length; i++) {
            let node = nodes[i];
            node.parentNode.removeChild(node);
          }
        }

        /**
         * Overrides default `TemplateStamp` implementation to add support for
         * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
         * array is added to `nodeInfo` and populated with binding metadata
         * with information capturing the binding target, and a `parts` array
         * with one or more metadata objects capturing the source(s) of the
         * binding.
         *
         * @param {Node} node Node to parse
         * @param {TemplateInfo} templateInfo Template metadata for current template
         * @param {NodeInfo} nodeInfo Node metadata for current template node
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @protected
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         * @nocollapse
         */
        static _parseTemplateNode(node, templateInfo, nodeInfo) {
          // TODO(https://github.com/google/closure-compiler/issues/3240):
          //     Change back to just super.methodCall()
          let noted = propertyEffectsBase._parseTemplateNode.call(
            this, node, templateInfo, nodeInfo);
          if (node.nodeType === Node.TEXT_NODE) {
            let parts = this._parseBindings(node.textContent, templateInfo);
            if (parts) {
              // Initialize the textContent with any literal parts
              // NOTE: default to a space here so the textNode remains; some browsers
              // (IE) omit an empty textNode following cloneNode/importNode.
              node.textContent = literalFromParts(parts) || ' ';
              addBinding(this, templateInfo, nodeInfo, 'text', 'textContent', parts);
              noted = true;
            }
          }
          return noted;
        }

        /**
         * Overrides default `TemplateStamp` implementation to add support for
         * parsing bindings from attributes.  A `bindings`
         * array is added to `nodeInfo` and populated with binding metadata
         * with information capturing the binding target, and a `parts` array
         * with one or more metadata objects capturing the source(s) of the
         * binding.
         *
         * @param {Element} node Node to parse
         * @param {TemplateInfo} templateInfo Template metadata for current template
         * @param {NodeInfo} nodeInfo Node metadata for current template node
         * @param {string} name Attribute name
         * @param {string} value Attribute value
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @protected
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         * @nocollapse
         */
        static _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
          let parts = this._parseBindings(value, templateInfo);
          if (parts) {
            // Attribute or property
            let origName = name;
            let kind = 'property';
            // The only way we see a capital letter here is if the attr has
            // a capital letter in it per spec. In this case, to make sure
            // this binding works, we go ahead and make the binding to the attribute.
            if (capitalAttributeRegex.test(name)) {
              kind = 'attribute';
            } else if (name[name.length-1] == '$') {
              name = name.slice(0, -1);
              kind = 'attribute';
            }
            // Initialize attribute bindings with any literal parts
            let literal = literalFromParts(parts);
            if (literal && kind == 'attribute') {
              // Ensure a ShadyCSS template scoped style is not removed
              // when a class$ binding's initial literal value is set.
              if (name == 'class' && node.hasAttribute('class')) {
                literal += ' ' + node.getAttribute(name);
              }
              node.setAttribute(name, literal);
            }
            // Clear attribute before removing, since IE won't allow removing
            // `value` attribute if it previously had a value (can't
            // unconditionally set '' before removing since attributes with `$`
            // can't be set using setAttribute)
            if (node.localName === 'input' && origName === 'value') {
              node.setAttribute(origName, '');
            }
            // Remove annotation
            node.removeAttribute(origName);
            // Case hackery: attributes are lower-case, but bind targets
            // (properties) are case sensitive. Gambit is to map dash-case to
            // camel-case: `foo-bar` becomes `fooBar`.
            // Attribute bindings are excepted.
            if (kind === 'property') {
              name = dashToCamelCase(name);
            }
            addBinding(this, templateInfo, nodeInfo, kind, name, parts, literal);
            return true;
          } else {
            // TODO(https://github.com/google/closure-compiler/issues/3240):
            //     Change back to just super.methodCall()
            return propertyEffectsBase._parseTemplateNodeAttribute.call(
              this, node, templateInfo, nodeInfo, name, value);
          }
        }

        /**
         * Overrides default `TemplateStamp` implementation to add support for
         * binding the properties that a nested template depends on to the template
         * as `_host_<property>`.
         *
         * @param {Node} node Node to parse
         * @param {TemplateInfo} templateInfo Template metadata for current template
         * @param {NodeInfo} nodeInfo Node metadata for current template node
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @protected
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         * @nocollapse
         */
        static _parseTemplateNestedTemplate(node, templateInfo, nodeInfo) {
          // TODO(https://github.com/google/closure-compiler/issues/3240):
          //     Change back to just super.methodCall()
          let noted = propertyEffectsBase._parseTemplateNestedTemplate.call(
            this, node, templateInfo, nodeInfo);
          // Merge host props into outer template and add bindings
          let hostProps = nodeInfo.templateInfo.hostProps;
          let mode = '{';
          for (let source in hostProps) {
            let parts = [{ mode, source, dependencies: [source] }];
            addBinding(this, templateInfo, nodeInfo, 'property', '_host_' + source, parts);
          }
          return noted;
        }

        /**
         * Called to parse text in a template (either attribute values or
         * textContent) into binding metadata.
         *
         * Any overrides of this method should return an array of binding part
         * metadata  representing one or more bindings found in the provided text
         * and any "literal" text in between.  Any non-literal parts will be passed
         * to `_evaluateBinding` when any dependencies change.  The only required
         * fields of each "part" in the returned array are as follows:
         *
         * - `dependencies` - Array containing trigger metadata for each property
         *   that should trigger the binding to update
         * - `literal` - String containing text if the part represents a literal;
         *   in this case no `dependencies` are needed
         *
         * Additional metadata for use by `_evaluateBinding` may be provided in
         * each part object as needed.
         *
         * The default implementation handles the following types of bindings
         * (one or more may be intermixed with literal strings):
         * - Property binding: `[[prop]]`
         * - Path binding: `[[object.prop]]`
         * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
         * - Two-way property or path bindings (supports negation):
         *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
         * - Inline computed method (supports negation):
         *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
         *
         * The default implementation uses a regular expression for best
         * performance. However, the regular expression uses a white-list of
         * allowed characters in a data-binding, which causes problems for
         * data-bindings that do use characters not in this white-list.
         *
         * Instead of updating the white-list with all allowed characters,
         * there is a StrictBindingParser (see lib/mixins/strict-binding-parser)
         * that uses a state machine instead. This state machine is able to handle
         * all characters. However, it is slightly less performant, therefore we
         * extracted it into a separate optional mixin.
         *
         * @param {string} text Text to parse from attribute or textContent
         * @param {Object} templateInfo Current template metadata
         * @return {Array<!BindingPart>} Array of binding part metadata
         * @protected
         * @nocollapse
         */
        static _parseBindings(text, templateInfo) {
          let parts = [];
          let lastIndex = 0;
          let m;
          // Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
          // Regex matches:
          //        Iteration 1:  Iteration 2:
          // m[1]: '{{'          '[['
          // m[2]: ''            '!'
          // m[3]: 'prop'        'compute(foo,bar)'
          while ((m = bindingRegex.exec(text)) !== null) {
            // Add literal part
            if (m.index > lastIndex) {
              parts.push({literal: text.slice(lastIndex, m.index)});
            }
            // Add binding part
            let mode = m[1][0];
            let negate = Boolean(m[2]);
            let source = m[3].trim();
            let customEvent = false, notifyEvent = '', colon = -1;
            if (mode == '{' && (colon = source.indexOf('::')) > 0) {
              notifyEvent = source.substring(colon + 2);
              source = source.substring(0, colon);
              customEvent = true;
            }
            let signature = parseMethod(source);
            let dependencies = [];
            if (signature) {
              // Inline computed function
              let {args, methodName} = signature;
              for (let i=0; i<args.length; i++) {
                let arg = args[i];
                if (!arg.literal) {
                  dependencies.push(arg);
                }
              }
              let dynamicFns = templateInfo.dynamicFns;
              if (dynamicFns && dynamicFns[methodName] || signature.static) {
                dependencies.push(methodName);
                signature.dynamicFn = true;
              }
            } else {
              // Property or path
              dependencies.push(source);
            }
            parts.push({
              source, mode, negate, customEvent, signature, dependencies,
              event: notifyEvent
            });
            lastIndex = bindingRegex.lastIndex;
          }
          // Add a final literal part
          if (lastIndex && lastIndex < text.length) {
            let literal = text.substring(lastIndex);
            if (literal) {
              parts.push({
                literal: literal
              });
            }
          }
          if (parts.length) {
            return parts;
          } else {
            return null;
          }
        }

        /**
         * Called to evaluate a previously parsed binding part based on a set of
         * one or more changed dependencies.
         *
         * @param {!Polymer_PropertyEffects} inst Element that should be used as
         *     scope for binding dependencies
         * @param {BindingPart} part Binding part metadata
         * @param {string} path Property/path that triggered this effect
         * @param {Object} props Bag of current property changes
         * @param {Object} oldProps Bag of previous values for changed properties
         * @param {boolean} hasPaths True with `props` contains one or more paths
         * @return {*} Value the binding part evaluated to
         * @protected
         * @nocollapse
         */
        static _evaluateBinding(inst, part, path, props, oldProps, hasPaths) {
          let value;
          if (part.signature) {
            value = runMethodEffect(inst, path, props, oldProps, part.signature);
          } else if (path != part.source) {
            value = get(inst, part.source);
          } else {
            if (hasPaths && isPath(path)) {
              value = get(inst, path);
            } else {
              value = inst.__data[path];
            }
          }
          if (part.negate) {
            value = !value;
          }
          return value;
        }

      }

      return PropertyEffects;
    });

    /**
     * Helper api for enqueuing client dom created by a host element.
     *
     * By default elements are flushed via `_flushProperties` when
     * `connectedCallback` is called. Elements attach their client dom to
     * themselves at `ready` time which results from this first flush.
     * This provides an ordering guarantee that the client dom an element
     * creates is flushed before the element itself (i.e. client `ready`
     * fires before host `ready`).
     *
     * However, if `_flushProperties` is called *before* an element is connected,
     * as for example `Templatize` does, this ordering guarantee cannot be
     * satisfied because no elements are connected. (Note: Bound elements that
     * receive data do become enqueued clients and are properly ordered but
     * unbound elements are not.)
     *
     * To maintain the desired "client before host" ordering guarantee for this
     * case we rely on the "host stack. Client nodes registers themselves with
     * the creating host element when created. This ensures that all client dom
     * is readied in the proper order, maintaining the desired guarantee.
     *
     * @private
     */
    class HostStack {
      constructor() {
        this.stack = [];
      }

      /**
       * @param {*} inst Instance to add to hostStack
       * @return {void}
       */
      registerHost(inst) {
        if (this.stack.length) {
          let host = this.stack[this.stack.length-1];
          host._enqueueClient(inst);
        }
      }

      /**
       * @param {*} inst Instance to begin hosting
       * @return {void}
       */
      beginHosting(inst) {
        this.stack.push(inst);
      }

      /**
       * @param {*} inst Instance to end hosting
       * @return {void}
       */
      endHosting(inst) {
        let stackLen = this.stack.length;
        if (stackLen && this.stack[stackLen-1] == inst) {
          this.stack.pop();
        }
      }
    }
    const hostStack = new HostStack();

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * Registers a class prototype for telemetry purposes.
     * @param {!PolymerElementConstructor} prototype Element prototype to register
     * @protected
     */
    function register(prototype) {
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * Creates a copy of `props` with each property normalized such that
     * upgraded it is an object with at least a type property { type: Type}.
     *
     * @param {Object} props Properties to normalize
     * @return {Object} Copy of input `props` with normalized properties that
     * are in the form {type: Type}
     * @private
     */
    function normalizeProperties(props) {
      const output = {};
      for (let p in props) {
        const o = props[p];
        output[p] = (typeof o === 'function') ? {type: o} : o;
      }
      return output;
    }

    /**
     * Mixin that provides a minimal starting point to using the PropertiesChanged
     * mixin by providing a mechanism to declare properties in a static
     * getter (e.g. static get properties() { return { foo: String } }). Changes
     * are reported via the `_propertiesChanged` method.
     *
     * This mixin provides no specific support for rendering. Users are expected
     * to create a ShadowRoot and put content into it and update it in whatever
     * way makes sense. This can be done in reaction to properties changing by
     * implementing `_propertiesChanged`.
     *
     * @mixinFunction
     * @polymer
     * @appliesMixin PropertiesChanged
     * @summary Mixin that provides a minimal starting point for using
     * the PropertiesChanged mixin by providing a declarative `properties` object.
     * @template T
     * @param {function(new:T)} superClass Class to apply mixin to.
     * @return {function(new:T)} superClass with mixin applied.
     */
    const PropertiesMixin = dedupingMixin(superClass => {

     /**
      * @constructor
      * @implements {Polymer_PropertiesChanged}
      * @private
      */
     const base = PropertiesChanged(superClass);

     /**
      * Returns the super class constructor for the given class, if it is an
      * instance of the PropertiesMixin.
      *
      * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
      * @return {?PropertiesMixinConstructor} Super class constructor
      */
     function superPropertiesClass(constructor) {
       const superCtor = Object.getPrototypeOf(constructor);

       // Note, the `PropertiesMixin` class below only refers to the class
       // generated by this call to the mixin; the instanceof test only works
       // because the mixin is deduped and guaranteed only to apply once, hence
       // all constructors in a proto chain will see the same `PropertiesMixin`
       return (superCtor.prototype instanceof PropertiesMixin) ?
         /** @type {!PropertiesMixinConstructor} */ (superCtor) : null;
     }

     /**
      * Returns a memoized version of the `properties` object for the
      * given class. Properties not in object format are converted to at
      * least {type}.
      *
      * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
      * @return {Object} Memoized properties object
      */
     function ownProperties(constructor) {
       if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownProperties', constructor))) {
         let props = null;

         if (constructor.hasOwnProperty(JSCompiler_renameProperty('properties', constructor))) {
           const properties = constructor.properties;

           if (properties) {
            props = normalizeProperties(properties);
           }
         }

         constructor.__ownProperties = props;
       }
       return constructor.__ownProperties;
     }

     /**
      * @polymer
      * @mixinClass
      * @extends {base}
      * @implements {Polymer_PropertiesMixin}
      * @unrestricted
      */
     class PropertiesMixin extends base {

       /**
        * Implements standard custom elements getter to observes the attributes
        * listed in `properties`.
        * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
        * @nocollapse
        */
       static get observedAttributes() {
         if (!this.hasOwnProperty('__observedAttributes')) {
           register(this.prototype);
           const props = this._properties;
           this.__observedAttributes = props ? Object.keys(props).map(p => this.attributeNameForProperty(p)) : [];
         }
         return this.__observedAttributes;
       }

       /**
        * Finalizes an element definition, including ensuring any super classes
        * are also finalized. This includes ensuring property
        * accessors exist on the element prototype. This method calls
        * `_finalizeClass` to finalize each constructor in the prototype chain.
        * @return {void}
        * @nocollapse
        */
       static finalize() {
         if (!this.hasOwnProperty(JSCompiler_renameProperty('__finalized', this))) {
           const superCtor = superPropertiesClass(/** @type {!PropertiesMixinConstructor} */(this));
           if (superCtor) {
             superCtor.finalize();
           }
           this.__finalized = true;
           this._finalizeClass();
         }
       }

       /**
        * Finalize an element class. This includes ensuring property
        * accessors exist on the element prototype. This method is called by
        * `finalize` and finalizes the class constructor.
        *
        * @protected
        * @nocollapse
        */
       static _finalizeClass() {
         const props = ownProperties(/** @type {!PropertiesMixinConstructor} */(this));
         if (props) {
           /** @type {?} */ (this).createProperties(props);
         }
       }

       /**
        * Returns a memoized version of all properties, including those inherited
        * from super classes. Properties not in object format are converted to
        * at least {type}.
        *
        * @return {Object} Object containing properties for this class
        * @protected
        * @nocollapse
        */
       static get _properties() {
         if (!this.hasOwnProperty(
           JSCompiler_renameProperty('__properties', this))) {
           const superCtor = superPropertiesClass(/** @type {!PropertiesMixinConstructor} */(this));
           this.__properties = Object.assign({},
             superCtor && superCtor._properties,
             ownProperties(/** @type {PropertiesMixinConstructor} */(this)));
         }
         return this.__properties;
       }

       /**
        * Overrides `PropertiesChanged` method to return type specified in the
        * static `properties` object for the given property.
        * @param {string} name Name of property
        * @return {*} Type to which to deserialize attribute
        *
        * @protected
        * @nocollapse
        */
       static typeForProperty(name) {
         const info = this._properties[name];
         return info && info.type;
       }

       /**
        * Overrides `PropertiesChanged` method and adds a call to
        * `finalize` which lazily configures the element's property accessors.
        * @override
        * @return {void}
        */
       _initializeProperties() {
         this.constructor.finalize();
         super._initializeProperties();
       }

       /**
        * Called when the element is added to a document.
        * Calls `_enableProperties` to turn on property system from
        * `PropertiesChanged`.
        * @suppress {missingProperties} Super may or may not implement the callback
        * @return {void}
        * @override
        */
       connectedCallback() {
         if (super.connectedCallback) {
           super.connectedCallback();
         }
         this._enableProperties();
       }

       /**
        * Called when the element is removed from a document
        * @suppress {missingProperties} Super may or may not implement the callback
        * @return {void}
        * @override
        */
       disconnectedCallback() {
         if (super.disconnectedCallback) {
           super.disconnectedCallback();
         }
       }

     }

     return PropertiesMixin;

    });

    /**
     * @fileoverview
     * @suppress {checkPrototypalTypes}
     * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
     * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
     * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
     * Google as part of the polymer project is also subject to an additional IP
     * rights grant found at http://polymer.github.io/PATENTS.txt
     */

    /**
     * Current Polymer version in Semver notation.
     * @type {string} Semver notation of the current version of Polymer.
     */
    const version = '3.3.0';

    const builtCSS = window.ShadyCSS && window.ShadyCSS['cssBuild'];

    /**
     * Element class mixin that provides the core API for Polymer's meta-programming
     * features including template stamping, data-binding, attribute deserialization,
     * and property change observation.
     *
     * Subclassers may provide the following static getters to return metadata
     * used to configure Polymer's features for the class:
     *
     * - `static get is()`: When the template is provided via a `dom-module`,
     *   users should return the `dom-module` id from a static `is` getter.  If
     *   no template is needed or the template is provided directly via the
     *   `template` getter, there is no need to define `is` for the element.
     *
     * - `static get template()`: Users may provide the template directly (as
     *   opposed to via `dom-module`) by implementing a static `template` getter.
     *   The getter must return an `HTMLTemplateElement`.
     *
     * - `static get properties()`: Should return an object describing
     *   property-related metadata used by Polymer features (key: property name
     *   value: object containing property metadata). Valid keys in per-property
     *   metadata include:
     *   - `type` (String|Number|Object|Array|...): Used by
     *     `attributeChangedCallback` to determine how string-based attributes
     *     are deserialized to JavaScript property values.
     *   - `notify` (boolean): Causes a change in the property to fire a
     *     non-bubbling event called `<property>-changed`. Elements that have
     *     enabled two-way binding to the property use this event to observe changes.
     *   - `readOnly` (boolean): Creates a getter for the property, but no setter.
     *     To set a read-only property, use the private setter method
     *     `_setProperty(property, value)`.
     *   - `observer` (string): Observer method name that will be called when
     *     the property changes. The arguments of the method are
     *     `(value, previousValue)`.
     *   - `computed` (string): String describing method and dependent properties
     *     for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
     *     Computed properties are read-only by default and can only be changed
     *     via the return value of the computing method.
     *
     * - `static get observers()`: Array of strings describing multi-property
     *   observer methods and their dependent properties (e.g.
     *   `'observeABC(a, b, c)'`).
     *
     * The base class provides default implementations for the following standard
     * custom element lifecycle callbacks; users may override these, but should
     * call the super method to ensure
     * - `constructor`: Run when the element is created or upgraded
     * - `connectedCallback`: Run each time the element is connected to the
     *   document
     * - `disconnectedCallback`: Run each time the element is disconnected from
     *   the document
     * - `attributeChangedCallback`: Run each time an attribute in
     *   `observedAttributes` is set or removed (note: this element's default
     *   `observedAttributes` implementation will automatically return an array
     *   of dash-cased attributes based on `properties`)
     *
     * @mixinFunction
     * @polymer
     * @appliesMixin PropertyEffects
     * @appliesMixin PropertiesMixin
     * @property rootPath {string} Set to the value of `rootPath`,
     *   which defaults to the main document path
     * @property importPath {string} Set to the value of the class's static
     *   `importPath` property, which defaults to the path of this element's
     *   `dom-module` (when `is` is used), but can be overridden for other
     *   import strategies.
     * @summary Element class mixin that provides the core API for Polymer's
     * meta-programming features.
     * @template T
     * @param {function(new:T)} superClass Class to apply mixin to.
     * @return {function(new:T)} superClass with mixin applied.
     */
    const ElementMixin = dedupingMixin(base => {
      /**
       * @constructor
       * @implements {Polymer_PropertyEffects}
       * @implements {Polymer_PropertiesMixin}
       * @extends {HTMLElement}
       * @private
       */
      const polymerElementBase = PropertiesMixin(PropertyEffects(base));

      /**
       * Returns a list of properties with default values.
       * This list is created as an optimization since it is a subset of
       * the list returned from `_properties`.
       * This list is used in `_initializeProperties` to set property defaults.
       *
       * @param {PolymerElementConstructor} constructor Element class
       * @return {PolymerElementProperties} Flattened properties for this class
       *   that have default values
       * @private
       */
      function propertyDefaults(constructor) {
        if (!constructor.hasOwnProperty(
          JSCompiler_renameProperty('__propertyDefaults', constructor))) {
          constructor.__propertyDefaults = null;
          let props = constructor._properties;
          for (let p in props) {
            let info = props[p];
            if ('value' in info) {
              constructor.__propertyDefaults = constructor.__propertyDefaults || {};
              constructor.__propertyDefaults[p] = info;
            }
          }
        }
        return constructor.__propertyDefaults;
      }

      /**
       * Returns a memoized version of the `observers` array.
       * @param {PolymerElementConstructor} constructor Element class
       * @return {Array} Array containing own observers for the given class
       * @protected
       */
      function ownObservers(constructor) {
        if (!constructor.hasOwnProperty(
          JSCompiler_renameProperty('__ownObservers', constructor))) {
          constructor.__ownObservers =
              constructor.hasOwnProperty(
                  JSCompiler_renameProperty('observers', constructor)) ?
              /** @type {PolymerElementConstructor} */ (constructor).observers :
              null;
        }
        return constructor.__ownObservers;
      }

      /**
       * Creates effects for a property.
       *
       * Note, once a property has been set to
       * `readOnly`, `computed`, `reflectToAttribute`, or `notify`
       * these values may not be changed. For example, a subclass cannot
       * alter these settings. However, additional `observers` may be added
       * by subclasses.
       *
       * The info object should contain property metadata as follows:
       *
       * * `type`: {function} type to which an attribute matching the property
       * is deserialized. Note the property is camel-cased from a dash-cased
       * attribute. For example, 'foo-bar' attribute is deserialized to a
       * property named 'fooBar'.
       *
       * * `readOnly`: {boolean} creates a readOnly property and
       * makes a private setter for the private of the form '_setFoo' for a
       * property 'foo',
       *
       * * `computed`: {string} creates a computed property. A computed property
       * is also automatically set to `readOnly: true`. The value is calculated
       * by running a method and arguments parsed from the given string. For
       * example 'compute(foo)' will compute a given property when the
       * 'foo' property changes by executing the 'compute' method. This method
       * must return the computed value.
       *
       * * `reflectToAttribute`: {boolean} If true, the property value is reflected
       * to an attribute of the same name. Note, the attribute is dash-cased
       * so a property named 'fooBar' is reflected as 'foo-bar'.
       *
       * * `notify`: {boolean} sends a non-bubbling notification event when
       * the property changes. For example, a property named 'foo' sends an
       * event named 'foo-changed' with `event.detail` set to the value of
       * the property.
       *
       * * observer: {string} name of a method that runs when the property
       * changes. The arguments of the method are (value, previousValue).
       *
       * Note: Users may want control over modifying property
       * effects via subclassing. For example, a user might want to make a
       * reflectToAttribute property not do so in a subclass. We've chosen to
       * disable this because it leads to additional complication.
       * For example, a readOnly effect generates a special setter. If a subclass
       * disables the effect, the setter would fail unexpectedly.
       * Based on feedback, we may want to try to make effects more malleable
       * and/or provide an advanced api for manipulating them.
       *
       * @param {!PolymerElement} proto Element class prototype to add accessors
       *   and effects to
       * @param {string} name Name of the property.
       * @param {Object} info Info object from which to create property effects.
       * Supported keys:
       * @param {Object} allProps Flattened map of all properties defined in this
       *   element (including inherited properties)
       * @return {void}
       * @private
       */
      function createPropertyFromConfig(proto, name, info, allProps) {
        // computed forces readOnly...
        if (info.computed) {
          info.readOnly = true;
        }
        // Note, since all computed properties are readOnly, this prevents
        // adding additional computed property effects (which leads to a confusing
        // setup where multiple triggers for setting a property)
        // While we do have `hasComputedEffect` this is set on the property's
        // dependencies rather than itself.
        if (info.computed) {
          if (proto._hasReadOnlyEffect(name)) {
            console.warn(`Cannot redefine computed property '${name}'.`);
          } else {
            proto._createComputedProperty(name, info.computed, allProps);
          }
        }
        if (info.readOnly && !proto._hasReadOnlyEffect(name)) {
          proto._createReadOnlyProperty(name, !info.computed);
        } else if (info.readOnly === false && proto._hasReadOnlyEffect(name)) {
          console.warn(`Cannot make readOnly property '${name}' non-readOnly.`);
        }
        if (info.reflectToAttribute && !proto._hasReflectEffect(name)) {
          proto._createReflectedProperty(name);
        } else if (info.reflectToAttribute === false && proto._hasReflectEffect(name)) {
          console.warn(`Cannot make reflected property '${name}' non-reflected.`);
        }
        if (info.notify && !proto._hasNotifyEffect(name)) {
          proto._createNotifyingProperty(name);
        } else if (info.notify === false && proto._hasNotifyEffect(name)) {
          console.warn(`Cannot make notify property '${name}' non-notify.`);
        }
        // always add observer
        if (info.observer) {
          proto._createPropertyObserver(name, info.observer, allProps[info.observer]);
        }
        // always create the mapping from attribute back to property for deserialization.
        proto._addPropertyToAttributeMap(name);
      }

      /**
       * Process all style elements in the element template. Styles with the
       * `include` attribute are processed such that any styles in
       * the associated "style modules" are included in the element template.
       * @param {PolymerElementConstructor} klass Element class
       * @param {!HTMLTemplateElement} template Template to process
       * @param {string} is Name of element
       * @param {string} baseURI Base URI for element
       * @private
       */
      function processElementStyles(klass, template, is, baseURI) {
        if (!builtCSS) {
          const templateStyles = template.content.querySelectorAll('style');
          const stylesWithImports = stylesFromTemplate(template);
          // insert styles from <link rel="import" type="css"> at the top of the template
          const linkedStyles = stylesFromModuleImports(is);
          const firstTemplateChild = template.content.firstElementChild;
          for (let idx = 0; idx < linkedStyles.length; idx++) {
            let s = linkedStyles[idx];
            s.textContent = klass._processStyleText(s.textContent, baseURI);
            template.content.insertBefore(s, firstTemplateChild);
          }
          // keep track of the last "concrete" style in the template we have encountered
          let templateStyleIndex = 0;
          // ensure all gathered styles are actually in this template.
          for (let i = 0; i < stylesWithImports.length; i++) {
            let s = stylesWithImports[i];
            let templateStyle = templateStyles[templateStyleIndex];
            // if the style is not in this template, it's been "included" and
            // we put a clone of it in the template before the style that included it
            if (templateStyle !== s) {
              s = s.cloneNode(true);
              templateStyle.parentNode.insertBefore(s, templateStyle);
            } else {
              templateStyleIndex++;
            }
            s.textContent = klass._processStyleText(s.textContent, baseURI);
          }
        }
        if (window.ShadyCSS) {
          window.ShadyCSS.prepareTemplate(template, is);
        }
      }

      /**
       * Look up template from dom-module for element
       *
       * @param {string} is Element name to look up
       * @return {?HTMLTemplateElement|undefined} Template found in dom module, or
       *   undefined if not found
       * @protected
       */
      function getTemplateFromDomModule(is) {
        let template = null;
        // Under strictTemplatePolicy in 3.x+, dom-module lookup is only allowed
        // when opted-in via allowTemplateFromDomModule
        if (is && (!strictTemplatePolicy || allowTemplateFromDomModule)) {
          template = /** @type {?HTMLTemplateElement} */ (
              DomModule.import(is, 'template'));
          // Under strictTemplatePolicy, require any element with an `is`
          // specified to have a dom-module
          if (strictTemplatePolicy && !template) {
            throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${is}`);
          }
        }
        return template;
      }

      /**
       * @polymer
       * @mixinClass
       * @unrestricted
       * @implements {Polymer_ElementMixin}
       * @extends {polymerElementBase}
       */
      class PolymerElement extends polymerElementBase {

        /**
         * Current Polymer version in Semver notation.
         * @type {string} Semver notation of the current version of Polymer.
         * @nocollapse
         */
        static get polymerElementVersion() {
          return version;
        }

        /**
         * Override of PropertiesMixin _finalizeClass to create observers and
         * find the template.
         * @return {void}
         * @protected
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         * @nocollapse
         */
        static _finalizeClass() {
          // TODO(https://github.com/google/closure-compiler/issues/3240):
          //     Change back to just super.methodCall()
          polymerElementBase._finalizeClass.call(this);
          const observers = ownObservers(this);
          if (observers) {
            this.createObservers(observers, this._properties);
          }
          this._prepareTemplate();
        }

        /** @nocollapse */
        static _prepareTemplate() {
          // note: create "working" template that is finalized at instance time
          let template = /** @type {PolymerElementConstructor} */ (this).template;
          if (template) {
            if (typeof template === 'string') {
              console.error('template getter must return HTMLTemplateElement');
              template = null;
            } else if (!legacyOptimizations) {
              template = template.cloneNode(true);
            }
          }

          /** @override */
          this.prototype._template = template;
        }

        /**
         * Override of PropertiesChanged createProperties to create accessors
         * and property effects for all of the properties.
         * @param {!Object} props .
         * @return {void}
         * @protected
         * @nocollapse
         */
        static createProperties(props) {
          for (let p in props) {
            createPropertyFromConfig(
                /** @type {?} */ (this.prototype), p, props[p], props);
          }
        }

        /**
         * Creates observers for the given `observers` array.
         * Leverages `PropertyEffects` to create observers.
         * @param {Object} observers Array of observer descriptors for
         *   this class
         * @param {Object} dynamicFns Object containing keys for any properties
         *   that are functions and should trigger the effect when the function
         *   reference is changed
         * @return {void}
         * @protected
         * @nocollapse
         */
        static createObservers(observers, dynamicFns) {
          const proto = this.prototype;
          for (let i=0; i < observers.length; i++) {
            proto._createMethodObserver(observers[i], dynamicFns);
          }
        }

        /**
         * Returns the template that will be stamped into this element's shadow root.
         *
         * If a `static get is()` getter is defined, the default implementation
         * will return the first `<template>` in a `dom-module` whose `id`
         * matches this element's `is`.
         *
         * Users may override this getter to return an arbitrary template
         * (in which case the `is` getter is unnecessary). The template returned
         * must be an `HTMLTemplateElement`.
         *
         * Note that when subclassing, if the super class overrode the default
         * implementation and the subclass would like to provide an alternate
         * template via a `dom-module`, it should override this getter and
         * return `DomModule.import(this.is, 'template')`.
         *
         * If a subclass would like to modify the super class template, it should
         * clone it rather than modify it in place.  If the getter does expensive
         * work such as cloning/modifying a template, it should memoize the
         * template for maximum performance:
         *
         *   let memoizedTemplate;
         *   class MySubClass extends MySuperClass {
         *     static get template() {
         *       if (!memoizedTemplate) {
         *         memoizedTemplate = super.template.cloneNode(true);
         *         let subContent = document.createElement('div');
         *         subContent.textContent = 'This came from MySubClass';
         *         memoizedTemplate.content.appendChild(subContent);
         *       }
         *       return memoizedTemplate;
         *     }
         *   }
         *
         * @return {!HTMLTemplateElement|string} Template to be stamped
         * @nocollapse
         */
        static get template() {
          // Explanation of template-related properties:
          // - constructor.template (this getter): the template for the class.
          //     This can come from the prototype (for legacy elements), from a
          //     dom-module, or from the super class's template (or can be overridden
          //     altogether by the user)
          // - constructor._template: memoized version of constructor.template
          // - prototype._template: working template for the element, which will be
          //     parsed and modified in place. It is a cloned version of
          //     constructor.template, saved in _finalizeClass(). Note that before
          //     this getter is called, for legacy elements this could be from a
          //     _template field on the info object passed to Polymer(), a behavior,
          //     or set in registered(); once the static getter runs, a clone of it
          //     will overwrite it on the prototype as the working template.
          if (!this.hasOwnProperty(JSCompiler_renameProperty('_template', this))) {
            this._template =
              // If user has put template on prototype (e.g. in legacy via registered
              // callback or info object), prefer that first
              this.prototype.hasOwnProperty(JSCompiler_renameProperty('_template', this.prototype)) ?
              this.prototype._template :
              // Look in dom-module associated with this element's is
              (getTemplateFromDomModule(/** @type {PolymerElementConstructor}*/ (this).is) ||
              // Next look for superclass template (call the super impl this
              // way so that `this` points to the superclass)
              Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/ (this).prototype).constructor.template);
          }
          return this._template;
        }

        /**
         * Set the template.
         *
         * @param {!HTMLTemplateElement|string} value Template to set.
         * @nocollapse
         */
        static set template(value) {
          this._template = value;
        }

        /**
         * Path matching the url from which the element was imported.
         *
         * This path is used to resolve url's in template style cssText.
         * The `importPath` property is also set on element instances and can be
         * used to create bindings relative to the import path.
         *
         * For elements defined in ES modules, users should implement
         * `static get importMeta() { return import.meta; }`, and the default
         * implementation of `importPath` will  return `import.meta.url`'s path.
         * For elements defined in HTML imports, this getter will return the path
         * to the document containing a `dom-module` element matching this
         * element's static `is` property.
         *
         * Note, this path should contain a trailing `/`.
         *
         * @return {string} The import path for this element class
         * @suppress {missingProperties}
         * @nocollapse
         */
        static get importPath() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('_importPath', this))) {
            const meta = this.importMeta;
            if (meta) {
              this._importPath = pathFromUrl(meta.url);
            } else {
              const module = DomModule.import(/** @type {PolymerElementConstructor} */ (this).is);
              this._importPath = (module && module.assetpath) ||
                Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/ (this).prototype).constructor.importPath;
            }
          }
          return this._importPath;
        }

        constructor() {
          super();
          /** @type {HTMLTemplateElement} */
          this._template;
          /** @type {string} */
          this._importPath;
          /** @type {string} */
          this.rootPath;
          /** @type {string} */
          this.importPath;
          /** @type {StampedTemplate | HTMLElement | ShadowRoot} */
          this.root;
          /** @type {!Object<string, !Element>} */
          this.$;
        }

        /**
         * Overrides the default `PropertyAccessors` to ensure class
         * metaprogramming related to property accessors and effects has
         * completed (calls `finalize`).
         *
         * It also initializes any property defaults provided via `value` in
         * `properties` metadata.
         *
         * @return {void}
         * @override
         * @suppress {invalidCasts,missingProperties} go/missingfnprops
         */
        _initializeProperties() {
          this.constructor.finalize();
          // note: finalize template when we have access to `localName` to
          // avoid dependence on `is` for polyfilling styling.
          this.constructor._finalizeTemplate(/** @type {!HTMLElement} */(this).localName);
          super._initializeProperties();
          // set path defaults
          this.rootPath = rootPath;
          this.importPath = this.constructor.importPath;
          // apply property defaults...
          let p$ = propertyDefaults(this.constructor);
          if (!p$) {
            return;
          }
          for (let p in p$) {
            let info = p$[p];
            // Don't set default value if there is already an own property, which
            // happens when a `properties` property with default but no effects had
            // a property set (e.g. bound) by its host before upgrade
            if (!this.hasOwnProperty(p)) {
              let value = typeof info.value == 'function' ?
                info.value.call(this) :
                info.value;
              // Set via `_setProperty` if there is an accessor, to enable
              // initializing readOnly property defaults
              if (this._hasAccessor(p)) {
                this._setPendingProperty(p, value, true);
              } else {
                this[p] = value;
              }
            }
          }
        }

        /**
         * Gather style text for a style element in the template.
         *
         * @param {string} cssText Text containing styling to process
         * @param {string} baseURI Base URI to rebase CSS paths against
         * @return {string} The processed CSS text
         * @protected
         * @nocollapse
         */
        static _processStyleText(cssText, baseURI) {
          return resolveCss(cssText, baseURI);
        }

        /**
        * Configures an element `proto` to function with a given `template`.
        * The element name `is` and extends `ext` must be specified for ShadyCSS
        * style scoping.
        *
        * @param {string} is Tag name (or type extension name) for this element
        * @return {void}
        * @protected
        * @nocollapse
        */
        static _finalizeTemplate(is) {
          /** @const {HTMLTemplateElement} */
          const template = this.prototype._template;
          if (template && !template.__polymerFinalized) {
            template.__polymerFinalized = true;
            const importPath = this.importPath;
            const baseURI = importPath ? resolveUrl(importPath) : '';
            // e.g. support `include="module-name"`, and ShadyCSS
            processElementStyles(this, template, is, baseURI);
            this.prototype._bindTemplate(template);
          }
        }

        /**
         * Provides a default implementation of the standard Custom Elements
         * `connectedCallback`.
         *
         * The default implementation enables the property effects system and
         * flushes any pending properties, and updates shimmed CSS properties
         * when using the ShadyCSS scoping/custom properties polyfill.
         *
         * @override
         * @suppress {missingProperties, invalidCasts} Super may or may not
         *     implement the callback
         * @return {void}
         */
        connectedCallback() {
          if (window.ShadyCSS && this._template) {
            window.ShadyCSS.styleElement(/** @type {!HTMLElement} */(this));
          }
          super.connectedCallback();
        }

        /**
         * Stamps the element template.
         *
         * @return {void}
         * @override
         */
        ready() {
          if (this._template) {
            this.root = this._stampTemplate(this._template);
            this.$ = this.root.$;
          }
          super.ready();
        }

        /**
         * Implements `PropertyEffects`'s `_readyClients` call. Attaches
         * element dom by calling `_attachDom` with the dom stamped from the
         * element's template via `_stampTemplate`. Note that this allows
         * client dom to be attached to the element prior to any observers
         * running.
         *
         * @return {void}
         * @override
         */
        _readyClients() {
          if (this._template) {
            this.root = this._attachDom(/** @type {StampedTemplate} */(this.root));
          }
          // The super._readyClients here sets the clients initialized flag.
          // We must wait to do this until after client dom is created/attached
          // so that this flag can be checked to prevent notifications fired
          // during this process from being handled before clients are ready.
          super._readyClients();
        }


        /**
         * Attaches an element's stamped dom to itself. By default,
         * this method creates a `shadowRoot` and adds the dom to it.
         * However, this method may be overridden to allow an element
         * to put its dom in another location.
         *
         * @override
         * @throws {Error}
         * @suppress {missingReturn}
         * @param {StampedTemplate} dom to attach to the element.
         * @return {ShadowRoot} node to which the dom has been attached.
         */
        _attachDom(dom) {
          const n = wrap$1(this);
          if (n.attachShadow) {
            if (dom) {
              if (!n.shadowRoot) {
                n.attachShadow({mode: 'open', shadyUpgradeFragment: dom});
                n.shadowRoot.appendChild(dom);
              }
              if (syncInitialRender && window.ShadyDOM) {
                ShadyDOM.flushInitial(n.shadowRoot);
              }
              return n.shadowRoot;
            }
            return null;
          } else {
            throw new Error('ShadowDOM not available. ' +
              // TODO(sorvell): move to compile-time conditional when supported
            'PolymerElement can create dom as children instead of in ' +
            'ShadowDOM by setting `this.root = this;\` before \`ready\`.');
          }
        }

        /**
         * When using the ShadyCSS scoping and custom property shim, causes all
         * shimmed styles in this element (and its subtree) to be updated
         * based on current custom property values.
         *
         * The optional parameter overrides inline custom property styles with an
         * object of properties where the keys are CSS properties, and the values
         * are strings.
         *
         * Example: `this.updateStyles({'--color': 'blue'})`
         *
         * These properties are retained unless a value of `null` is set.
         *
         * Note: This function does not support updating CSS mixins.
         * You can not dynamically change the value of an `@apply`.
         *
         * @override
         * @param {Object=} properties Bag of custom property key/values to
         *   apply to this element.
         * @return {void}
         * @suppress {invalidCasts}
         */
        updateStyles(properties) {
          if (window.ShadyCSS) {
            window.ShadyCSS.styleSubtree(/** @type {!HTMLElement} */(this), properties);
          }
        }

        /**
         * Rewrites a given URL relative to a base URL. The base URL defaults to
         * the original location of the document containing the `dom-module` for
         * this element. This method will return the same URL before and after
         * bundling.
         *
         * Note that this function performs no resolution for URLs that start
         * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
         * URL resolution, use `window.URL`.
         *
         * @override
         * @param {string} url URL to resolve.
         * @param {string=} base Optional base URL to resolve against, defaults
         * to the element's `importPath`
         * @return {string} Rewritten URL relative to base
         */
        resolveUrl(url, base) {
          if (!base && this.importPath) {
            base = resolveUrl(this.importPath);
          }
          return resolveUrl(url, base);
        }

        /**
         * Overrides `PropertyEffects` to add map of dynamic functions on
         * template info, for consumption by `PropertyEffects` template binding
         * code. This map determines which method templates should have accessors
         * created for them.
         *
         * @param {!HTMLTemplateElement} template Template
         * @param {!TemplateInfo} templateInfo Template metadata for current template
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @return {boolean} .
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         * @nocollapse
         */
        static _parseTemplateContent(template, templateInfo, nodeInfo) {
          templateInfo.dynamicFns = templateInfo.dynamicFns || this._properties;
          // TODO(https://github.com/google/closure-compiler/issues/3240):
          //     Change back to just super.methodCall()
          return polymerElementBase._parseTemplateContent.call(
            this, template, templateInfo, nodeInfo);
        }

        /**
         * Overrides `PropertyEffects` to warn on use of undeclared properties in
         * template.
         *
         * @param {Object} templateInfo Template metadata to add effect to
         * @param {string} prop Property that should trigger the effect
         * @param {Object=} effect Effect metadata object
         * @return {void}
         * @protected
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         * @nocollapse
         */
        static _addTemplatePropertyEffect(templateInfo, prop, effect) {
          // Warn if properties are used in template without being declared.
          // Properties must be listed in `properties` to be included in
          // `observedAttributes` since CE V1 reads that at registration time, and
          // since we want to keep template parsing lazy, we can't automatically
          // add undeclared properties used in templates to `observedAttributes`.
          // The warning is only enabled in `legacyOptimizations` mode, since
          // we don't want to spam existing users who might have adopted the
          // shorthand when attribute deserialization is not important.
          if (legacyOptimizations && !(prop in this._properties)) {
            console.warn(`Property '${prop}' used in template but not declared in 'properties'; ` +
              `attribute will not be observed.`);
          }
          // TODO(https://github.com/google/closure-compiler/issues/3240):
          //     Change back to just super.methodCall()
          return polymerElementBase._addTemplatePropertyEffect.call(
            this, templateInfo, prop, effect);
        }

      }

      return PolymerElement;
    });

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * @summary Collapse multiple callbacks into one invocation after a timer.
     */
    class Debouncer {
      constructor() {
        this._asyncModule = null;
        this._callback = null;
        this._timer = null;
      }
      /**
       * Sets the scheduler; that is, a module with the Async interface,
       * a callback and optional arguments to be passed to the run function
       * from the async module.
       *
       * @param {!AsyncInterface} asyncModule Object with Async interface.
       * @param {function()} callback Callback to run.
       * @return {void}
       */
      setConfig(asyncModule, callback) {
        this._asyncModule = asyncModule;
        this._callback = callback;
        this._timer = this._asyncModule.run(() => {
          this._timer = null;
          debouncerQueue.delete(this);
          this._callback();
        });
      }
      /**
       * Cancels an active debouncer and returns a reference to itself.
       *
       * @return {void}
       */
      cancel() {
        if (this.isActive()) {
          this._cancelAsync();
          // Canceling a debouncer removes its spot from the flush queue,
          // so if a debouncer is manually canceled and re-debounced, it
          // will reset its flush order (this is a very minor difference from 1.x)
          // Re-debouncing via the `debounce` API retains the 1.x FIFO flush order
          debouncerQueue.delete(this);
        }
      }
      /**
       * Cancels a debouncer's async callback.
       *
       * @return {void}
       */
      _cancelAsync() {
        if (this.isActive()) {
          this._asyncModule.cancel(/** @type {number} */(this._timer));
          this._timer = null;
        }
      }
      /**
       * Flushes an active debouncer and returns a reference to itself.
       *
       * @return {void}
       */
      flush() {
        if (this.isActive()) {
          this.cancel();
          this._callback();
        }
      }
      /**
       * Returns true if the debouncer is active.
       *
       * @return {boolean} True if active.
       */
      isActive() {
        return this._timer != null;
      }
      /**
       * Creates a debouncer if no debouncer is passed as a parameter
       * or it cancels an active debouncer otherwise. The following
       * example shows how a debouncer can be called multiple times within a
       * microtask and "debounced" such that the provided callback function is
       * called once. Add this method to a custom element:
       *
       * ```js
       * import {microTask} from '@polymer/polymer/lib/utils/async.js';
       * import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';
       * // ...
       *
       * _debounceWork() {
       *   this._debounceJob = Debouncer.debounce(this._debounceJob,
       *       microTask, () => this._doWork());
       * }
       * ```
       *
       * If the `_debounceWork` method is called multiple times within the same
       * microtask, the `_doWork` function will be called only once at the next
       * microtask checkpoint.
       *
       * Note: In testing it is often convenient to avoid asynchrony. To accomplish
       * this with a debouncer, you can use `enqueueDebouncer` and
       * `flush`. For example, extend the above example by adding
       * `enqueueDebouncer(this._debounceJob)` at the end of the
       * `_debounceWork` method. Then in a test, call `flush` to ensure
       * the debouncer has completed.
       *
       * @param {Debouncer?} debouncer Debouncer object.
       * @param {!AsyncInterface} asyncModule Object with Async interface
       * @param {function()} callback Callback to run.
       * @return {!Debouncer} Returns a debouncer object.
       */
      static debounce(debouncer, asyncModule, callback) {
        if (debouncer instanceof Debouncer) {
          // Cancel the async callback, but leave in debouncerQueue if it was
          // enqueued, to maintain 1.x flush order
          debouncer._cancelAsync();
        } else {
          debouncer = new Debouncer();
        }
        debouncer.setConfig(asyncModule, callback);
        return debouncer;
      }
    }

    let debouncerQueue = new Set();

    /**
     * Adds a `Debouncer` to a list of globally flushable tasks.
     *
     * @param {!Debouncer} debouncer Debouncer to enqueue
     * @return {void}
     */
    const enqueueDebouncer = function(debouncer) {
      debouncerQueue.add(debouncer);
    };

    /**
     * Flushes any enqueued debouncers
     *
     * @return {boolean} Returns whether any debouncers were flushed
     */
    const flushDebouncers = function() {
      const didFlush = Boolean(debouncerQueue.size);
      // If new debouncers are added while flushing, Set.forEach will ensure
      // newly added ones are also flushed
      debouncerQueue.forEach(debouncer => {
        try {
          debouncer.flush();
        } catch(e) {
          setTimeout(() => {
            throw e;
          });
        }
      });
      return didFlush;
    };

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    // detect native touch action support
    let HAS_NATIVE_TA = typeof document.head.style.touchAction === 'string';
    let GESTURE_KEY = '__polymerGestures';
    let HANDLED_OBJ = '__polymerGesturesHandled';
    let TOUCH_ACTION = '__polymerGesturesTouchAction';
    // radius for tap and track
    let TAP_DISTANCE = 25;
    let TRACK_DISTANCE = 5;
    // number of last N track positions to keep
    let TRACK_LENGTH = 2;

    // Disabling "mouse" handlers for 2500ms is enough
    let MOUSE_TIMEOUT = 2500;
    let MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'click'];
    // an array of bitmask values for mapping MouseEvent.which to MouseEvent.buttons
    let MOUSE_WHICH_TO_BUTTONS = [0, 1, 4, 2];
    let MOUSE_HAS_BUTTONS = (function() {
      try {
        return new MouseEvent('test', {buttons: 1}).buttons === 1;
      } catch (e) {
        return false;
      }
    })();

    /**
     * @param {string} name Possible mouse event name
     * @return {boolean} true if mouse event, false if not
     */
    function isMouseEvent(name) {
      return MOUSE_EVENTS.indexOf(name) > -1;
    }

    /* eslint no-empty: ["error", { "allowEmptyCatch": true }] */
    // check for passive event listeners
    let SUPPORTS_PASSIVE = false;
    (function() {
      try {
        let opts = Object.defineProperty({}, 'passive', {get() {SUPPORTS_PASSIVE = true;}});
        window.addEventListener('test', null, opts);
        window.removeEventListener('test', null, opts);
      } catch(e) {}
    })();

    /**
     * Generate settings for event listeners, dependant on `passiveTouchGestures`
     *
     * @param {string} eventName Event name to determine if `{passive}` option is
     *   needed
     * @return {{passive: boolean} | undefined} Options to use for addEventListener
     *   and removeEventListener
     */
    function PASSIVE_TOUCH(eventName) {
      if (isMouseEvent(eventName) || eventName === 'touchend') {
        return;
      }
      if (HAS_NATIVE_TA && SUPPORTS_PASSIVE && passiveTouchGestures) {
        return {passive: true};
      } else {
        return;
      }
    }

    // Check for touch-only devices
    let IS_TOUCH_ONLY = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);

    // keep track of any labels hit by the mouseCanceller
    /** @type {!Array<!HTMLLabelElement>} */
    const clickedLabels = [];

    /** @type {!Object<boolean>} */
    const labellable = {
      'button': true,
      'input': true,
      'keygen': true,
      'meter': true,
      'output': true,
      'textarea': true,
      'progress': true,
      'select': true
    };

    // Defined at https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#enabling-and-disabling-form-controls:-the-disabled-attribute
    /** @type {!Object<boolean>} */
    const canBeDisabled = {
      'button': true,
      'command': true,
      'fieldset': true,
      'input': true,
      'keygen': true,
      'optgroup': true,
      'option': true,
      'select': true,
      'textarea': true
    };

    /**
     * @param {HTMLElement} el Element to check labelling status
     * @return {boolean} element can have labels
     */
    function canBeLabelled(el) {
      return labellable[el.localName] || false;
    }

    /**
     * @param {HTMLElement} el Element that may be labelled.
     * @return {!Array<!HTMLLabelElement>} Relevant label for `el`
     */
    function matchingLabels(el) {
      let labels = Array.prototype.slice.call(/** @type {HTMLInputElement} */(el).labels || []);
      // IE doesn't have `labels` and Safari doesn't populate `labels`
      // if element is in a shadowroot.
      // In this instance, finding the non-ancestor labels is enough,
      // as the mouseCancellor code will handle ancstor labels
      if (!labels.length) {
        labels = [];
        let root = el.getRootNode();
        // if there is an id on `el`, check for all labels with a matching `for` attribute
        if (el.id) {
          let matching = root.querySelectorAll(`label[for = ${el.id}]`);
          for (let i = 0; i < matching.length; i++) {
            labels.push(/** @type {!HTMLLabelElement} */(matching[i]));
          }
        }
      }
      return labels;
    }

    // touch will make synthetic mouse events
    // `preventDefault` on touchend will cancel them,
    // but this breaks `<input>` focus and link clicks
    // disable mouse handlers for MOUSE_TIMEOUT ms after
    // a touchend to ignore synthetic mouse events
    let mouseCanceller = function(mouseEvent) {
      // Check for sourceCapabilities, used to distinguish synthetic events
      // if mouseEvent did not come from a device that fires touch events,
      // it was made by a real mouse and should be counted
      // http://wicg.github.io/InputDeviceCapabilities/#dom-inputdevicecapabilities-firestouchevents
      let sc = mouseEvent.sourceCapabilities;
      if (sc && !sc.firesTouchEvents) {
        return;
      }
      // skip synthetic mouse events
      mouseEvent[HANDLED_OBJ] = {skip: true};
      // disable "ghost clicks"
      if (mouseEvent.type === 'click') {
        let clickFromLabel = false;
        let path = getComposedPath(mouseEvent);
        for (let i = 0; i < path.length; i++) {
          if (path[i].nodeType === Node.ELEMENT_NODE) {
            if (path[i].localName === 'label') {
              clickedLabels.push(/** @type {!HTMLLabelElement} */ (path[i]));
            } else if (canBeLabelled(/** @type {!HTMLElement} */ (path[i]))) {
              let ownerLabels =
                  matchingLabels(/** @type {!HTMLElement} */ (path[i]));
              // check if one of the clicked labels is labelling this element
              for (let j = 0; j < ownerLabels.length; j++) {
                clickFromLabel = clickFromLabel || clickedLabels.indexOf(ownerLabels[j]) > -1;
              }
            }
          }
          if (path[i] === POINTERSTATE.mouse.target) {
            return;
          }
        }
        // if one of the clicked labels was labelling the target element,
        // this is not a ghost click
        if (clickFromLabel) {
          return;
        }
        mouseEvent.preventDefault();
        mouseEvent.stopPropagation();
      }
    };

    /**
     * @param {boolean=} setup True to add, false to remove.
     * @return {void}
     */
    function setupTeardownMouseCanceller(setup) {
      let events = IS_TOUCH_ONLY ? ['click'] : MOUSE_EVENTS;
      for (let i = 0, en; i < events.length; i++) {
        en = events[i];
        if (setup) {
          // reset clickLabels array
          clickedLabels.length = 0;
          document.addEventListener(en, mouseCanceller, true);
        } else {
          document.removeEventListener(en, mouseCanceller, true);
        }
      }
    }

    function ignoreMouse(e) {
      if (!cancelSyntheticClickEvents) {
        return;
      }
      if (!POINTERSTATE.mouse.mouseIgnoreJob) {
        setupTeardownMouseCanceller(true);
      }
      let unset = function() {
        setupTeardownMouseCanceller();
        POINTERSTATE.mouse.target = null;
        POINTERSTATE.mouse.mouseIgnoreJob = null;
      };
      POINTERSTATE.mouse.target = getComposedPath(e)[0];
      POINTERSTATE.mouse.mouseIgnoreJob = Debouncer.debounce(
            POINTERSTATE.mouse.mouseIgnoreJob
          , timeOut.after(MOUSE_TIMEOUT)
          , unset);
    }

    /**
     * @param {MouseEvent} ev event to test for left mouse button down
     * @return {boolean} has left mouse button down
     */
    function hasLeftMouseButton(ev) {
      let type = ev.type;
      // exit early if the event is not a mouse event
      if (!isMouseEvent(type)) {
        return false;
      }
      // ev.button is not reliable for mousemove (0 is overloaded as both left button and no buttons)
      // instead we use ev.buttons (bitmask of buttons) or fall back to ev.which (deprecated, 0 for no buttons, 1 for left button)
      if (type === 'mousemove') {
        // allow undefined for testing events
        let buttons = ev.buttons === undefined ? 1 : ev.buttons;
        if ((ev instanceof window.MouseEvent) && !MOUSE_HAS_BUTTONS) {
          buttons = MOUSE_WHICH_TO_BUTTONS[ev.which] || 0;
        }
        // buttons is a bitmask, check that the left button bit is set (1)
        return Boolean(buttons & 1);
      } else {
        // allow undefined for testing events
        let button = ev.button === undefined ? 0 : ev.button;
        // ev.button is 0 in mousedown/mouseup/click for left button activation
        return button === 0;
      }
    }

    function isSyntheticClick(ev) {
      if (ev.type === 'click') {
        // ev.detail is 0 for HTMLElement.click in most browsers
        if (ev.detail === 0) {
          return true;
        }
        // in the worst case, check that the x/y position of the click is within
        // the bounding box of the target of the event
        // Thanks IE 10 >:(
        let t = _findOriginalTarget(ev);
        // make sure the target of the event is an element so we can use getBoundingClientRect,
        // if not, just assume it is a synthetic click
        if (!t.nodeType || /** @type {Element} */(t).nodeType !== Node.ELEMENT_NODE) {
          return true;
        }
        let bcr = /** @type {Element} */(t).getBoundingClientRect();
        // use page x/y to account for scrolling
        let x = ev.pageX, y = ev.pageY;
        // ev is a synthetic click if the position is outside the bounding box of the target
        return !((x >= bcr.left && x <= bcr.right) && (y >= bcr.top && y <= bcr.bottom));
      }
      return false;
    }

    let POINTERSTATE = {
      mouse: {
        target: null,
        mouseIgnoreJob: null
      },
      touch: {
        x: 0,
        y: 0,
        id: -1,
        scrollDecided: false
      }
    };

    function firstTouchAction(ev) {
      let ta = 'auto';
      let path = getComposedPath(ev);
      for (let i = 0, n; i < path.length; i++) {
        n = path[i];
        if (n[TOUCH_ACTION]) {
          ta = n[TOUCH_ACTION];
          break;
        }
      }
      return ta;
    }

    function trackDocument(stateObj, movefn, upfn) {
      stateObj.movefn = movefn;
      stateObj.upfn = upfn;
      document.addEventListener('mousemove', movefn);
      document.addEventListener('mouseup', upfn);
    }

    function untrackDocument(stateObj) {
      document.removeEventListener('mousemove', stateObj.movefn);
      document.removeEventListener('mouseup', stateObj.upfn);
      stateObj.movefn = null;
      stateObj.upfn = null;
    }

    if (cancelSyntheticClickEvents) {
      // use a document-wide touchend listener to start the ghost-click prevention mechanism
      // Use passive event listeners, if supported, to not affect scrolling performance
      document.addEventListener('touchend', ignoreMouse, SUPPORTS_PASSIVE ? {passive: true} : false);
    }

    /**
     * Returns the composedPath for the given event.
     * @param {Event} event to process
     * @return {!Array<!EventTarget>} Path of the event
     */
    const getComposedPath = window.ShadyDOM && window.ShadyDOM.noPatch ?
      window.ShadyDOM.composedPath :
      (event) => event.composedPath && event.composedPath() || [];

    /** @type {!Object<string, !GestureRecognizer>} */
    const gestures = {};

    /** @type {!Array<!GestureRecognizer>} */
    const recognizers = [];

    /**
     * Finds the element rendered on the screen at the provided coordinates.
     *
     * Similar to `document.elementFromPoint`, but pierces through
     * shadow roots.
     *
     * @param {number} x Horizontal pixel coordinate
     * @param {number} y Vertical pixel coordinate
     * @return {Element} Returns the deepest shadowRoot inclusive element
     * found at the screen position given.
     */
    function deepTargetFind(x, y) {
      let node = document.elementFromPoint(x, y);
      let next = node;
      // this code path is only taken when native ShadowDOM is used
      // if there is a shadowroot, it may have a node at x/y
      // if there is not a shadowroot, exit the loop
      while (next && next.shadowRoot && !window.ShadyDOM) {
        // if there is a node at x/y in the shadowroot, look deeper
        let oldNext = next;
        next = next.shadowRoot.elementFromPoint(x, y);
        // on Safari, elementFromPoint may return the shadowRoot host
        if (oldNext === next) {
          break;
        }
        if (next) {
          node = next;
        }
      }
      return node;
    }

    /**
     * a cheaper check than ev.composedPath()[0];
     *
     * @private
     * @param {Event|Touch} ev Event.
     * @return {EventTarget} Returns the event target.
     */
    function _findOriginalTarget(ev) {
      const path = getComposedPath(/** @type {?Event} */ (ev));
      // It shouldn't be, but sometimes path is empty (window on Safari).
      return path.length > 0 ? path[0] : ev.target;
    }

    /**
     * @private
     * @param {Event} ev Event.
     * @return {void}
     */
    function _handleNative(ev) {
      let handled;
      let type = ev.type;
      let node = ev.currentTarget;
      let gobj = node[GESTURE_KEY];
      if (!gobj) {
        return;
      }
      let gs = gobj[type];
      if (!gs) {
        return;
      }
      if (!ev[HANDLED_OBJ]) {
        ev[HANDLED_OBJ] = {};
        if (type.slice(0, 5) === 'touch') {
          ev = /** @type {TouchEvent} */(ev); // eslint-disable-line no-self-assign
          let t = ev.changedTouches[0];
          if (type === 'touchstart') {
            // only handle the first finger
            if (ev.touches.length === 1) {
              POINTERSTATE.touch.id = t.identifier;
            }
          }
          if (POINTERSTATE.touch.id !== t.identifier) {
            return;
          }
          if (!HAS_NATIVE_TA) {
            if (type === 'touchstart' || type === 'touchmove') {
              _handleTouchAction(ev);
            }
          }
        }
      }
      handled = ev[HANDLED_OBJ];
      // used to ignore synthetic mouse events
      if (handled.skip) {
        return;
      }
      // reset recognizer state
      for (let i = 0, r; i < recognizers.length; i++) {
        r = recognizers[i];
        if (gs[r.name] && !handled[r.name]) {
          if (r.flow && r.flow.start.indexOf(ev.type) > -1 && r.reset) {
            r.reset();
          }
        }
      }
      // enforce gesture recognizer order
      for (let i = 0, r; i < recognizers.length; i++) {
        r = recognizers[i];
        if (gs[r.name] && !handled[r.name]) {
          handled[r.name] = true;
          r[type](ev);
        }
      }
    }

    /**
     * @private
     * @param {TouchEvent} ev Event.
     * @return {void}
     */
    function _handleTouchAction(ev) {
      let t = ev.changedTouches[0];
      let type = ev.type;
      if (type === 'touchstart') {
        POINTERSTATE.touch.x = t.clientX;
        POINTERSTATE.touch.y = t.clientY;
        POINTERSTATE.touch.scrollDecided = false;
      } else if (type === 'touchmove') {
        if (POINTERSTATE.touch.scrollDecided) {
          return;
        }
        POINTERSTATE.touch.scrollDecided = true;
        let ta = firstTouchAction(ev);
        let shouldPrevent = false;
        let dx = Math.abs(POINTERSTATE.touch.x - t.clientX);
        let dy = Math.abs(POINTERSTATE.touch.y - t.clientY);
        if (!ev.cancelable) ; else if (ta === 'none') {
          shouldPrevent = true;
        } else if (ta === 'pan-x') {
          shouldPrevent = dy > dx;
        } else if (ta === 'pan-y') {
          shouldPrevent = dx > dy;
        }
        if (shouldPrevent) {
          ev.preventDefault();
        } else {
          prevent('track');
        }
      }
    }

    /**
     * Adds an event listener to a node for the given gesture type.
     *
     * @param {!EventTarget} node Node to add listener on
     * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
     * @param {!function(!Event):void} handler Event listener function to call
     * @return {boolean} Returns true if a gesture event listener was added.
     */
    function addListener(node, evType, handler) {
      if (gestures[evType]) {
        _add(node, evType, handler);
        return true;
      }
      return false;
    }

    /**
     * Removes an event listener from a node for the given gesture type.
     *
     * @param {!EventTarget} node Node to remove listener from
     * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
     * @param {!function(!Event):void} handler Event listener function previously passed to
     *  `addListener`.
     * @return {boolean} Returns true if a gesture event listener was removed.
     */
    function removeListener(node, evType, handler) {
      if (gestures[evType]) {
        _remove(node, evType, handler);
        return true;
      }
      return false;
    }

    /**
     * automate the event listeners for the native events
     *
     * @private
     * @param {!EventTarget} node Node on which to add the event.
     * @param {string} evType Event type to add.
     * @param {function(!Event)} handler Event handler function.
     * @return {void}
     */
    function _add(node, evType, handler) {
      let recognizer = gestures[evType];
      let deps = recognizer.deps;
      let name = recognizer.name;
      let gobj = node[GESTURE_KEY];
      if (!gobj) {
        node[GESTURE_KEY] = gobj = {};
      }
      for (let i = 0, dep, gd; i < deps.length; i++) {
        dep = deps[i];
        // don't add mouse handlers on iOS because they cause gray selection overlays
        if (IS_TOUCH_ONLY && isMouseEvent(dep) && dep !== 'click') {
          continue;
        }
        gd = gobj[dep];
        if (!gd) {
          gobj[dep] = gd = {_count: 0};
        }
        if (gd._count === 0) {
          node.addEventListener(dep, _handleNative, PASSIVE_TOUCH(dep));
        }
        gd[name] = (gd[name] || 0) + 1;
        gd._count = (gd._count || 0) + 1;
      }
      node.addEventListener(evType, handler);
      if (recognizer.touchAction) {
        setTouchAction(node, recognizer.touchAction);
      }
    }

    /**
     * automate event listener removal for native events
     *
     * @private
     * @param {!EventTarget} node Node on which to remove the event.
     * @param {string} evType Event type to remove.
     * @param {function(!Event): void} handler Event handler function.
     * @return {void}
     */
    function _remove(node, evType, handler) {
      let recognizer = gestures[evType];
      let deps = recognizer.deps;
      let name = recognizer.name;
      let gobj = node[GESTURE_KEY];
      if (gobj) {
        for (let i = 0, dep, gd; i < deps.length; i++) {
          dep = deps[i];
          gd = gobj[dep];
          if (gd && gd[name]) {
            gd[name] = (gd[name] || 1) - 1;
            gd._count = (gd._count || 1) - 1;
            if (gd._count === 0) {
              node.removeEventListener(dep, _handleNative, PASSIVE_TOUCH(dep));
            }
          }
        }
      }
      node.removeEventListener(evType, handler);
    }

    /**
     * Registers a new gesture event recognizer for adding new custom
     * gesture event types.
     *
     * @param {!GestureRecognizer} recog Gesture recognizer descriptor
     * @return {void}
     */
    function register$1(recog) {
      recognizers.push(recog);
      for (let i = 0; i < recog.emits.length; i++) {
        gestures[recog.emits[i]] = recog;
      }
    }

    /**
     * @private
     * @param {string} evName Event name.
     * @return {Object} Returns the gesture for the given event name.
     */
    function _findRecognizerByEvent(evName) {
      for (let i = 0, r; i < recognizers.length; i++) {
        r = recognizers[i];
        for (let j = 0, n; j < r.emits.length; j++) {
          n = r.emits[j];
          if (n === evName) {
            return r;
          }
        }
      }
      return null;
    }

    /**
     * Sets scrolling direction on node.
     *
     * This value is checked on first move, thus it should be called prior to
     * adding event listeners.
     *
     * @param {!EventTarget} node Node to set touch action setting on
     * @param {string} value Touch action value
     * @return {void}
     */
    function setTouchAction(node, value) {
      if (HAS_NATIVE_TA && node instanceof HTMLElement) {
        // NOTE: add touchAction async so that events can be added in
        // custom element constructors. Otherwise we run afoul of custom
        // elements restriction against settings attributes (style) in the
        // constructor.
        microTask.run(() => {
          node.style.touchAction = value;
        });
      }
      node[TOUCH_ACTION] = value;
    }

    /**
     * Dispatches an event on the `target` element of `type` with the given
     * `detail`.
     * @private
     * @param {!EventTarget} target The element on which to fire an event.
     * @param {string} type The type of event to fire.
     * @param {!Object=} detail The detail object to populate on the event.
     * @return {void}
     */
    function _fire(target, type, detail) {
      let ev = new Event(type, { bubbles: true, cancelable: true, composed: true });
      ev.detail = detail;
      wrap$1(/** @type {!Node} */(target)).dispatchEvent(ev);
      // forward `preventDefault` in a clean way
      if (ev.defaultPrevented) {
        let preventer = detail.preventer || detail.sourceEvent;
        if (preventer && preventer.preventDefault) {
          preventer.preventDefault();
        }
      }
    }

    /**
     * Prevents the dispatch and default action of the given event name.
     *
     * @param {string} evName Event name.
     * @return {void}
     */
    function prevent(evName) {
      let recognizer = _findRecognizerByEvent(evName);
      if (recognizer.info) {
        recognizer.info.prevent = true;
      }
    }

    /* eslint-disable valid-jsdoc */

    register$1({
      name: 'downup',
      deps: ['mousedown', 'touchstart', 'touchend'],
      flow: {
        start: ['mousedown', 'touchstart'],
        end: ['mouseup', 'touchend']
      },
      emits: ['down', 'up'],

      info: {
        movefn: null,
        upfn: null
      },

      /**
       * @this {GestureRecognizer}
       * @return {void}
       */
      reset: function() {
        untrackDocument(this.info);
      },

      /**
       * @this {GestureRecognizer}
       * @param {MouseEvent} e
       * @return {void}
       */
      mousedown: function(e) {
        if (!hasLeftMouseButton(e)) {
          return;
        }
        let t = _findOriginalTarget(e);
        let self = this;
        let movefn = function movefn(e) {
          if (!hasLeftMouseButton(e)) {
            downupFire('up', t, e);
            untrackDocument(self.info);
          }
        };
        let upfn = function upfn(e) {
          if (hasLeftMouseButton(e)) {
            downupFire('up', t, e);
          }
          untrackDocument(self.info);
        };
        trackDocument(this.info, movefn, upfn);
        downupFire('down', t, e);
      },
      /**
       * @this {GestureRecognizer}
       * @param {TouchEvent} e
       * @return {void}
       */
      touchstart: function(e) {
        downupFire('down', _findOriginalTarget(e), e.changedTouches[0], e);
      },
      /**
       * @this {GestureRecognizer}
       * @param {TouchEvent} e
       * @return {void}
       */
      touchend: function(e) {
        downupFire('up', _findOriginalTarget(e), e.changedTouches[0], e);
      }
    });

    /**
     * @param {string} type
     * @param {EventTarget} target
     * @param {Event|Touch} event
     * @param {Event=} preventer
     * @return {void}
     */
    function downupFire(type, target, event, preventer) {
      if (!target) {
        return;
      }
      _fire(target, type, {
        x: event.clientX,
        y: event.clientY,
        sourceEvent: event,
        preventer: preventer,
        prevent: function(e) {
          return prevent(e);
        }
      });
    }

    register$1({
      name: 'track',
      touchAction: 'none',
      deps: ['mousedown', 'touchstart', 'touchmove', 'touchend'],
      flow: {
        start: ['mousedown', 'touchstart'],
        end: ['mouseup', 'touchend']
      },
      emits: ['track'],

      info: {
        x: 0,
        y: 0,
        state: 'start',
        started: false,
        moves: [],
        /** @this {GestureInfo} */
        addMove: function(move) {
          if (this.moves.length > TRACK_LENGTH) {
            this.moves.shift();
          }
          this.moves.push(move);
        },
        movefn: null,
        upfn: null,
        prevent: false
      },

      /**
       * @this {GestureRecognizer}
       * @return {void}
       */
      reset: function() {
        this.info.state = 'start';
        this.info.started = false;
        this.info.moves = [];
        this.info.x = 0;
        this.info.y = 0;
        this.info.prevent = false;
        untrackDocument(this.info);
      },

      /**
       * @this {GestureRecognizer}
       * @param {MouseEvent} e
       * @return {void}
       */
      mousedown: function(e) {
        if (!hasLeftMouseButton(e)) {
          return;
        }
        let t = _findOriginalTarget(e);
        let self = this;
        let movefn = function movefn(e) {
          let x = e.clientX, y = e.clientY;
          if (trackHasMovedEnough(self.info, x, y)) {
            // first move is 'start', subsequent moves are 'move', mouseup is 'end'
            self.info.state = self.info.started ? (e.type === 'mouseup' ? 'end' : 'track') : 'start';
            if (self.info.state === 'start') {
              // if and only if tracking, always prevent tap
              prevent('tap');
            }
            self.info.addMove({x: x, y: y});
            if (!hasLeftMouseButton(e)) {
              // always fire "end"
              self.info.state = 'end';
              untrackDocument(self.info);
            }
            if (t) {
              trackFire(self.info, t, e);
            }
            self.info.started = true;
          }
        };
        let upfn = function upfn(e) {
          if (self.info.started) {
            movefn(e);
          }

          // remove the temporary listeners
          untrackDocument(self.info);
        };
        // add temporary document listeners as mouse retargets
        trackDocument(this.info, movefn, upfn);
        this.info.x = e.clientX;
        this.info.y = e.clientY;
      },
      /**
       * @this {GestureRecognizer}
       * @param {TouchEvent} e
       * @return {void}
       */
      touchstart: function(e) {
        let ct = e.changedTouches[0];
        this.info.x = ct.clientX;
        this.info.y = ct.clientY;
      },
      /**
       * @this {GestureRecognizer}
       * @param {TouchEvent} e
       * @return {void}
       */
      touchmove: function(e) {
        let t = _findOriginalTarget(e);
        let ct = e.changedTouches[0];
        let x = ct.clientX, y = ct.clientY;
        if (trackHasMovedEnough(this.info, x, y)) {
          if (this.info.state === 'start') {
            // if and only if tracking, always prevent tap
            prevent('tap');
          }
          this.info.addMove({x: x, y: y});
          trackFire(this.info, t, ct);
          this.info.state = 'track';
          this.info.started = true;
        }
      },
      /**
       * @this {GestureRecognizer}
       * @param {TouchEvent} e
       * @return {void}
       */
      touchend: function(e) {
        let t = _findOriginalTarget(e);
        let ct = e.changedTouches[0];
        // only trackend if track was started and not aborted
        if (this.info.started) {
          // reset started state on up
          this.info.state = 'end';
          this.info.addMove({x: ct.clientX, y: ct.clientY});
          trackFire(this.info, t, ct);
        }
      }
    });

    /**
     * @param {!GestureInfo} info
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    function trackHasMovedEnough(info, x, y) {
      if (info.prevent) {
        return false;
      }
      if (info.started) {
        return true;
      }
      let dx = Math.abs(info.x - x);
      let dy = Math.abs(info.y - y);
      return (dx >= TRACK_DISTANCE || dy >= TRACK_DISTANCE);
    }

    /**
     * @param {!GestureInfo} info
     * @param {?EventTarget} target
     * @param {Touch} touch
     * @return {void}
     */
    function trackFire(info, target, touch) {
      if (!target) {
        return;
      }
      let secondlast = info.moves[info.moves.length - 2];
      let lastmove = info.moves[info.moves.length - 1];
      let dx = lastmove.x - info.x;
      let dy = lastmove.y - info.y;
      let ddx, ddy = 0;
      if (secondlast) {
        ddx = lastmove.x - secondlast.x;
        ddy = lastmove.y - secondlast.y;
      }
      _fire(target, 'track', {
        state: info.state,
        x: touch.clientX,
        y: touch.clientY,
        dx: dx,
        dy: dy,
        ddx: ddx,
        ddy: ddy,
        sourceEvent: touch,
        hover: function() {
          return deepTargetFind(touch.clientX, touch.clientY);
        }
      });
    }

    register$1({
      name: 'tap',
      deps: ['mousedown', 'click', 'touchstart', 'touchend'],
      flow: {
        start: ['mousedown', 'touchstart'],
        end: ['click', 'touchend']
      },
      emits: ['tap'],
      info: {
        x: NaN,
        y: NaN,
        prevent: false
      },
      /**
       * @this {GestureRecognizer}
       * @return {void}
       */
      reset: function() {
        this.info.x = NaN;
        this.info.y = NaN;
        this.info.prevent = false;
      },
      /**
       * @this {GestureRecognizer}
       * @param {MouseEvent} e
       * @return {void}
       */
      mousedown: function(e) {
        if (hasLeftMouseButton(e)) {
          this.info.x = e.clientX;
          this.info.y = e.clientY;
        }
      },
      /**
       * @this {GestureRecognizer}
       * @param {MouseEvent} e
       * @return {void}
       */
      click: function(e) {
        if (hasLeftMouseButton(e)) {
          trackForward(this.info, e);
        }
      },
      /**
       * @this {GestureRecognizer}
       * @param {TouchEvent} e
       * @return {void}
       */
      touchstart: function(e) {
        const touch = e.changedTouches[0];
        this.info.x = touch.clientX;
        this.info.y = touch.clientY;
      },
      /**
       * @this {GestureRecognizer}
       * @param {TouchEvent} e
       * @return {void}
       */
      touchend: function(e) {
        trackForward(this.info, e.changedTouches[0], e);
      }
    });

    /**
     * @param {!GestureInfo} info
     * @param {Event | Touch} e
     * @param {Event=} preventer
     * @return {void}
     */
    function trackForward(info, e, preventer) {
      let dx = Math.abs(e.clientX - info.x);
      let dy = Math.abs(e.clientY - info.y);
      // find original target from `preventer` for TouchEvents, or `e` for MouseEvents
      let t = _findOriginalTarget((preventer || e));
      if (!t || (canBeDisabled[/** @type {!HTMLElement} */(t).localName] && t.hasAttribute('disabled'))) {
        return;
      }
      // dx,dy can be NaN if `click` has been simulated and there was no `down` for `start`
      if (isNaN(dx) || isNaN(dy) || (dx <= TAP_DISTANCE && dy <= TAP_DISTANCE) || isSyntheticClick(e)) {
        // prevent taps from being generated if an event has canceled them
        if (!info.prevent) {
          _fire(t, 'tap', {
            x: e.clientX,
            y: e.clientY,
            sourceEvent: e,
            preventer: preventer
          });
        }
      }
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * Element class mixin that provides API for adding Polymer's cross-platform
     * gesture events to nodes.
     *
     * The API is designed to be compatible with override points implemented
     * in `TemplateStamp` such that declarative event listeners in
     * templates will support gesture events when this mixin is applied along with
     * `TemplateStamp`.
     *
     * @mixinFunction
     * @polymer
     * @summary Element class mixin that provides API for adding Polymer's
     *   cross-platform gesture events to nodes
     * @template T
     * @param {function(new:T)} superClass Class to apply mixin to.
     * @return {function(new:T)} superClass with mixin applied.
     */
    const GestureEventListeners = dedupingMixin((superClass) => {
      /**
       * @polymer
       * @mixinClass
       * @implements {Polymer_GestureEventListeners}
       */
      class GestureEventListeners extends superClass {
        /**
         * Add the event listener to the node if it is a gestures event.
         *
         * @param {!EventTarget} node Node to add event listener to
         * @param {string} eventName Name of event
         * @param {function(!Event):void} handler Listener function to add
         * @return {void}
         * @override
         */
        _addEventListenerToNode(node, eventName, handler) {
          if (!addListener(node, eventName, handler)) {
            super._addEventListenerToNode(node, eventName, handler);
          }
        }

        /**
         * Remove the event listener to the node if it is a gestures event.
         *
         * @param {!EventTarget} node Node to remove event listener from
         * @param {string} eventName Name of event
         * @param {function(!Event):void} handler Listener function to remove
         * @return {void}
         * @override
         */
        _removeEventListenerFromNode(node, eventName, handler) {
          if (!removeListener(node, eventName, handler)) {
            super._removeEventListenerFromNode(node, eventName, handler);
          }
        }
      }

      return GestureEventListeners;
    });

    /**
     * @fileoverview
     * @suppress {checkPrototypalTypes}
     * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
     * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
     * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
     * Google as part of the polymer project is also subject to an additional IP
     * rights grant found at http://polymer.github.io/PATENTS.txt
     */

    const HOST_DIR = /:host\(:dir\((ltr|rtl)\)\)/g;
    const HOST_DIR_REPLACMENT = ':host([dir="$1"])';

    const EL_DIR = /([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g;
    const EL_DIR_REPLACMENT = ':host([dir="$2"]) $1';

    const DIR_CHECK = /:dir\((?:ltr|rtl)\)/;

    const SHIM_SHADOW = Boolean(window['ShadyDOM'] && window['ShadyDOM']['inUse']);

    /**
     * @type {!Array<!Polymer_DirMixin>}
     */
    const DIR_INSTANCES = [];

    /** @type {?MutationObserver} */
    let observer = null;

    let DOCUMENT_DIR = '';

    function getRTL() {
      DOCUMENT_DIR = document.documentElement.getAttribute('dir');
    }

    /**
     * @param {!Polymer_DirMixin} instance Instance to set RTL status on
     */
    function setRTL(instance) {
      if (!instance.__autoDirOptOut) {
        const el = /** @type {!HTMLElement} */(instance);
        el.setAttribute('dir', DOCUMENT_DIR);
      }
    }

    function updateDirection() {
      getRTL();
      DOCUMENT_DIR = document.documentElement.getAttribute('dir');
      for (let i = 0; i < DIR_INSTANCES.length; i++) {
        setRTL(DIR_INSTANCES[i]);
      }
    }

    function takeRecords() {
      if (observer && observer.takeRecords().length) {
        updateDirection();
      }
    }

    /**
     * Element class mixin that allows elements to use the `:dir` CSS Selector to
     * have text direction specific styling.
     *
     * With this mixin, any stylesheet provided in the template will transform
     * `:dir` into `:host([dir])` and sync direction with the page via the
     * element's `dir` attribute.
     *
     * Elements can opt out of the global page text direction by setting the `dir`
     * attribute directly in `ready()` or in HTML.
     *
     * Caveats:
     * - Applications must set `<html dir="ltr">` or `<html dir="rtl">` to sync
     *   direction
     * - Automatic left-to-right or right-to-left styling is sync'd with the
     *   `<html>` element only.
     * - Changing `dir` at runtime is supported.
     * - Opting out of the global direction styling is permanent
     *
     * @mixinFunction
     * @polymer
     * @appliesMixin PropertyAccessors
     * @template T
     * @param {function(new:T)} superClass Class to apply mixin to.
     * @return {function(new:T)} superClass with mixin applied.
     */
    const DirMixin = dedupingMixin((base) => {

      if (!SHIM_SHADOW) {
        if (!observer) {
          getRTL();
          observer = new MutationObserver(updateDirection);
          observer.observe(document.documentElement, {attributes: true, attributeFilter: ['dir']});
        }
      }

      /**
       * @constructor
       * @implements {Polymer_PropertyAccessors}
       * @private
       */
      const elementBase = PropertyAccessors(base);

      /**
       * @polymer
       * @mixinClass
       * @implements {Polymer_DirMixin}
       */
      class Dir extends elementBase {

        /**
         * @param {string} cssText .
         * @param {string} baseURI .
         * @return {string} .
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         * @nocollapse
         */
        static _processStyleText(cssText, baseURI) {
          // TODO(https://github.com/google/closure-compiler/issues/3240):
          //     Change back to just super.methodCall()
          cssText = elementBase._processStyleText.call(this, cssText, baseURI);
          if (!SHIM_SHADOW && DIR_CHECK.test(cssText)) {
            cssText = this._replaceDirInCssText(cssText);
            this.__activateDir = true;
          }
          return cssText;
        }

        /**
         * Replace `:dir` in the given CSS text
         *
         * @param {string} text CSS text to replace DIR
         * @return {string} Modified CSS
         * @nocollapse
         */
        static _replaceDirInCssText(text) {
          let replacedText = text;
          replacedText = replacedText.replace(HOST_DIR, HOST_DIR_REPLACMENT);
          replacedText = replacedText.replace(EL_DIR, EL_DIR_REPLACMENT);
          return replacedText;
        }

        constructor() {
          super();
          /** @type {boolean} */
          this.__autoDirOptOut = false;
        }

        /**
         * @override
         * @suppress {invalidCasts} Closure doesn't understand that `this` is an
         *     HTMLElement
         * @return {void}
         */
        ready() {
          super.ready();
          this.__autoDirOptOut = /** @type {!HTMLElement} */(this).hasAttribute('dir');
        }

        /**
         * @override
         * @suppress {missingProperties} If it exists on elementBase, it can be
         *   super'd
         * @return {void}
         */
        connectedCallback() {
          if (elementBase.prototype.connectedCallback) {
            super.connectedCallback();
          }
          if (this.constructor.__activateDir) {
            takeRecords();
            DIR_INSTANCES.push(this);
            setRTL(this);
          }
        }

        /**
         * @override
         * @suppress {missingProperties} If it exists on elementBase, it can be
         *   super'd
         * @return {void}
         */
        disconnectedCallback() {
          if (elementBase.prototype.disconnectedCallback) {
            super.disconnectedCallback();
          }
          if (this.constructor.__activateDir) {
            const idx = DIR_INSTANCES.indexOf(this);
            if (idx > -1) {
              DIR_INSTANCES.splice(idx, 1);
            }
          }
        }
      }

      Dir.__activateDir = false;

      return Dir;
    });

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    function resolve() {
      document.body.removeAttribute('unresolved');
    }

    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      resolve();
    } else {
      window.addEventListener('DOMContentLoaded', resolve);
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    function newSplice(index, removed, addedCount) {
      return {
        index: index,
        removed: removed,
        addedCount: addedCount
      };
    }

    const EDIT_LEAVE = 0;
    const EDIT_UPDATE = 1;
    const EDIT_ADD = 2;
    const EDIT_DELETE = 3;

    // Note: This function is *based* on the computation of the Levenshtein
    // "edit" distance. The one change is that "updates" are treated as two
    // edits - not one. With Array splices, an update is really a delete
    // followed by an add. By retaining this, we optimize for "keeping" the
    // maximum array items in the original array. For example:
    //
    //   'xxxx123' -> '123yyyy'
    //
    // With 1-edit updates, the shortest path would be just to update all seven
    // characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
    // leaves the substring '123' intact.
    function calcEditDistances(current, currentStart, currentEnd,
                                old, oldStart, oldEnd) {
      // "Deletion" columns
      let rowCount = oldEnd - oldStart + 1;
      let columnCount = currentEnd - currentStart + 1;
      let distances = new Array(rowCount);

      // "Addition" rows. Initialize null column.
      for (let i = 0; i < rowCount; i++) {
        distances[i] = new Array(columnCount);
        distances[i][0] = i;
      }

      // Initialize null row
      for (let j = 0; j < columnCount; j++)
        distances[0][j] = j;

      for (let i = 1; i < rowCount; i++) {
        for (let j = 1; j < columnCount; j++) {
          if (equals(current[currentStart + j - 1], old[oldStart + i - 1]))
            distances[i][j] = distances[i - 1][j - 1];
          else {
            let north = distances[i - 1][j] + 1;
            let west = distances[i][j - 1] + 1;
            distances[i][j] = north < west ? north : west;
          }
        }
      }

      return distances;
    }

    // This starts at the final weight, and walks "backward" by finding
    // the minimum previous weight recursively until the origin of the weight
    // matrix.
    function spliceOperationsFromEditDistances(distances) {
      let i = distances.length - 1;
      let j = distances[0].length - 1;
      let current = distances[i][j];
      let edits = [];
      while (i > 0 || j > 0) {
        if (i == 0) {
          edits.push(EDIT_ADD);
          j--;
          continue;
        }
        if (j == 0) {
          edits.push(EDIT_DELETE);
          i--;
          continue;
        }
        let northWest = distances[i - 1][j - 1];
        let west = distances[i - 1][j];
        let north = distances[i][j - 1];

        let min;
        if (west < north)
          min = west < northWest ? west : northWest;
        else
          min = north < northWest ? north : northWest;

        if (min == northWest) {
          if (northWest == current) {
            edits.push(EDIT_LEAVE);
          } else {
            edits.push(EDIT_UPDATE);
            current = northWest;
          }
          i--;
          j--;
        } else if (min == west) {
          edits.push(EDIT_DELETE);
          i--;
          current = west;
        } else {
          edits.push(EDIT_ADD);
          j--;
          current = north;
        }
      }

      edits.reverse();
      return edits;
    }

    /**
     * Splice Projection functions:
     *
     * A splice map is a representation of how a previous array of items
     * was transformed into a new array of items. Conceptually it is a list of
     * tuples of
     *
     *   <index, removed, addedCount>
     *
     * which are kept in ascending index order of. The tuple represents that at
     * the |index|, |removed| sequence of items were removed, and counting forward
     * from |index|, |addedCount| items were added.
     */

    /**
     * Lacking individual splice mutation information, the minimal set of
     * splices can be synthesized given the previous state and final state of an
     * array. The basic approach is to calculate the edit distance matrix and
     * choose the shortest path through it.
     *
     * Complexity: O(l * p)
     *   l: The length of the current array
     *   p: The length of the old array
     *
     * @param {!Array} current The current "changed" array for which to
     * calculate splices.
     * @param {number} currentStart Starting index in the `current` array for
     * which splices are calculated.
     * @param {number} currentEnd Ending index in the `current` array for
     * which splices are calculated.
     * @param {!Array} old The original "unchanged" array to compare `current`
     * against to determine splices.
     * @param {number} oldStart Starting index in the `old` array for
     * which splices are calculated.
     * @param {number} oldEnd Ending index in the `old` array for
     * which splices are calculated.
     * @return {!Array} Returns an array of splice record objects. Each of these
     * contains: `index` the location where the splice occurred; `removed`
     * the array of removed items from this location; `addedCount` the number
     * of items added at this location.
     */
    function calcSplices(current, currentStart, currentEnd,
                          old, oldStart, oldEnd) {
      let prefixCount = 0;
      let suffixCount = 0;
      let splice;

      let minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
      if (currentStart == 0 && oldStart == 0)
        prefixCount = sharedPrefix(current, old, minLength);

      if (currentEnd == current.length && oldEnd == old.length)
        suffixCount = sharedSuffix(current, old, minLength - prefixCount);

      currentStart += prefixCount;
      oldStart += prefixCount;
      currentEnd -= suffixCount;
      oldEnd -= suffixCount;

      if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0)
        return [];

      if (currentStart == currentEnd) {
        splice = newSplice(currentStart, [], 0);
        while (oldStart < oldEnd)
          splice.removed.push(old[oldStart++]);

        return [ splice ];
      } else if (oldStart == oldEnd)
        return [ newSplice(currentStart, [], currentEnd - currentStart) ];

      let ops = spliceOperationsFromEditDistances(
          calcEditDistances(current, currentStart, currentEnd,
                                 old, oldStart, oldEnd));

      splice = undefined;
      let splices = [];
      let index = currentStart;
      let oldIndex = oldStart;
      for (let i = 0; i < ops.length; i++) {
        switch(ops[i]) {
          case EDIT_LEAVE:
            if (splice) {
              splices.push(splice);
              splice = undefined;
            }

            index++;
            oldIndex++;
            break;
          case EDIT_UPDATE:
            if (!splice)
              splice = newSplice(index, [], 0);

            splice.addedCount++;
            index++;

            splice.removed.push(old[oldIndex]);
            oldIndex++;
            break;
          case EDIT_ADD:
            if (!splice)
              splice = newSplice(index, [], 0);

            splice.addedCount++;
            index++;
            break;
          case EDIT_DELETE:
            if (!splice)
              splice = newSplice(index, [], 0);

            splice.removed.push(old[oldIndex]);
            oldIndex++;
            break;
        }
      }

      if (splice) {
        splices.push(splice);
      }
      return splices;
    }

    function sharedPrefix(current, old, searchLength) {
      for (let i = 0; i < searchLength; i++)
        if (!equals(current[i], old[i]))
          return i;
      return searchLength;
    }

    function sharedSuffix(current, old, searchLength) {
      let index1 = current.length;
      let index2 = old.length;
      let count = 0;
      while (count < searchLength && equals(current[--index1], old[--index2]))
        count++;

      return count;
    }

    /**
     * Returns an array of splice records indicating the minimum edits required
     * to transform the `previous` array into the `current` array.
     *
     * Splice records are ordered by index and contain the following fields:
     * - `index`: index where edit started
     * - `removed`: array of removed items from this index
     * - `addedCount`: number of items added at this index
     *
     * This function is based on the Levenshtein "minimum edit distance"
     * algorithm. Note that updates are treated as removal followed by addition.
     *
     * The worst-case time complexity of this algorithm is `O(l * p)`
     *   l: The length of the current array
     *   p: The length of the previous array
     *
     * However, the worst-case complexity is reduced by an `O(n)` optimization
     * to detect any shared prefix & suffix between the two arrays and only
     * perform the more expensive minimum edit distance calculation over the
     * non-shared portions of the arrays.
     *
     * @function
     * @param {!Array} current The "changed" array for which splices will be
     * calculated.
     * @param {!Array} previous The "unchanged" original array to compare
     * `current` against to determine the splices.
     * @return {!Array} Returns an array of splice record objects. Each of these
     * contains: `index` the location where the splice occurred; `removed`
     * the array of removed items from this location; `addedCount` the number
     * of items added at this location.
     */
    function calculateSplices(current, previous) {
      return calcSplices(current, 0, current.length, previous, 0,
                              previous.length);
    }

    function equals(currentValue, previousValue) {
      return currentValue === previousValue;
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * Returns true if `node` is a slot element
     * @param {!Node} node Node to test.
     * @return {boolean} Returns true if the given `node` is a slot
     * @private
     */
    function isSlot(node) {
      return (node.localName === 'slot');
    }

    /**
     * Class that listens for changes (additions or removals) to
     * "flattened nodes" on a given `node`. The list of flattened nodes consists
     * of a node's children and, for any children that are `<slot>` elements,
     * the expanded flattened list of `assignedNodes`.
     * For example, if the observed node has children `<a></a><slot></slot><b></b>`
     * and the `<slot>` has one `<div>` assigned to it, then the flattened
     * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
     * `<slot>` elements assigned to it, these are flattened as well.
     *
     * The provided `callback` is called whenever any change to this list
     * of flattened nodes occurs, where an addition or removal of a node is
     * considered a change. The `callback` is called with one argument, an object
     * containing an array of any `addedNodes` and `removedNodes`.
     *
     * Note: the callback is called asynchronous to any changes
     * at a microtask checkpoint. This is because observation is performed using
     * `MutationObserver` and the `<slot>` element's `slotchange` event which
     * are asynchronous.
     *
     * An example:
     * ```js
     * class TestSelfObserve extends PolymerElement {
     *   static get is() { return 'test-self-observe';}
     *   connectedCallback() {
     *     super.connectedCallback();
     *     this._observer = new FlattenedNodesObserver(this, (info) => {
     *       this.info = info;
     *     });
     *   }
     *   disconnectedCallback() {
     *     super.disconnectedCallback();
     *     this._observer.disconnect();
     *   }
     * }
     * customElements.define(TestSelfObserve.is, TestSelfObserve);
     * ```
     *
     * @summary Class that listens for changes (additions or removals) to
     * "flattened nodes" on a given `node`.
     * @implements {PolymerDomApi.ObserveHandle}
     */
    let FlattenedNodesObserver = class {

      /**
       * Returns the list of flattened nodes for the given `node`.
       * This list consists of a node's children and, for any children
       * that are `<slot>` elements, the expanded flattened list of `assignedNodes`.
       * For example, if the observed node has children `<a></a><slot></slot><b></b>`
       * and the `<slot>` has one `<div>` assigned to it, then the flattened
       * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
       * `<slot>` elements assigned to it, these are flattened as well.
       *
       * @param {!HTMLElement|!HTMLSlotElement} node The node for which to
       *      return the list of flattened nodes.
       * @return {!Array<!Node>} The list of flattened nodes for the given `node`.
       * @nocollapse See https://github.com/google/closure-compiler/issues/2763
       */
      // eslint-disable-next-line
      static getFlattenedNodes(node) {
        const wrapped = wrap$1(node);
        if (isSlot(node)) {
          node = /** @type {!HTMLSlotElement} */(node); // eslint-disable-line no-self-assign
          return wrapped.assignedNodes({flatten: true});
        } else {
          return Array.from(wrapped.childNodes).map((node) => {
            if (isSlot(node)) {
              node = /** @type {!HTMLSlotElement} */(node); // eslint-disable-line no-self-assign
              return wrap$1(node).assignedNodes({flatten: true});
            } else {
              return [node];
            }
          }).reduce((a, b) => a.concat(b), []);
        }
      }

      /**
       * @param {!HTMLElement} target Node on which to listen for changes.
       * @param {?function(this: Element, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Function called when there are additions
       * or removals from the target's list of flattened nodes.
       */
      // eslint-disable-next-line
      constructor(target, callback) {
        /**
         * @type {MutationObserver}
         * @private
         */
        this._shadyChildrenObserver = null;
        /**
         * @type {MutationObserver}
         * @private
         */
        this._nativeChildrenObserver = null;
        this._connected = false;
        /**
         * @type {!HTMLElement}
         * @private
         */
        this._target = target;
        this.callback = callback;
        this._effectiveNodes = [];
        this._observer = null;
        this._scheduled = false;
        /**
         * @type {function()}
         * @private
         */
        this._boundSchedule = () => {
          this._schedule();
        };
        this.connect();
        this._schedule();
      }

      /**
       * Activates an observer. This method is automatically called when
       * a `FlattenedNodesObserver` is created. It should only be called to
       * re-activate an observer that has been deactivated via the `disconnect` method.
       *
       * @return {void}
       */
      connect() {
        if (isSlot(this._target)) {
          this._listenSlots([this._target]);
        } else if (wrap$1(this._target).children) {
          this._listenSlots(
              /** @type {!NodeList<!Node>} */ (wrap$1(this._target).children));
          if (window.ShadyDOM) {
            this._shadyChildrenObserver =
              ShadyDOM.observeChildren(this._target, (mutations) => {
                this._processMutations(mutations);
              });
          } else {
            this._nativeChildrenObserver =
              new MutationObserver((mutations) => {
                this._processMutations(mutations);
              });
            this._nativeChildrenObserver.observe(this._target, {childList: true});
          }
        }
        this._connected = true;
      }

      /**
       * Deactivates the flattened nodes observer. After calling this method
       * the observer callback will not be called when changes to flattened nodes
       * occur. The `connect` method may be subsequently called to reactivate
       * the observer.
       *
       * @return {void}
       * @override
       */
      disconnect() {
        if (isSlot(this._target)) {
          this._unlistenSlots([this._target]);
        } else if (wrap$1(this._target).children) {
          this._unlistenSlots(
              /** @type {!NodeList<!Node>} */ (wrap$1(this._target).children));
          if (window.ShadyDOM && this._shadyChildrenObserver) {
            ShadyDOM.unobserveChildren(this._shadyChildrenObserver);
            this._shadyChildrenObserver = null;
          } else if (this._nativeChildrenObserver) {
            this._nativeChildrenObserver.disconnect();
            this._nativeChildrenObserver = null;
          }
        }
        this._connected = false;
      }

      /**
       * @return {void}
       * @private
       */
      _schedule() {
        if (!this._scheduled) {
          this._scheduled = true;
          microTask.run(() => this.flush());
        }
      }

      /**
       * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
       * @return {void}
       * @private
       */
      _processMutations(mutations) {
        this._processSlotMutations(mutations);
        this.flush();
      }

      /**
       * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
       * @return {void}
       * @private
       */
      _processSlotMutations(mutations) {
        if (mutations) {
          for (let i=0; i < mutations.length; i++) {
            let mutation = mutations[i];
            if (mutation.addedNodes) {
              this._listenSlots(mutation.addedNodes);
            }
            if (mutation.removedNodes) {
              this._unlistenSlots(mutation.removedNodes);
            }
          }
        }
      }

      /**
       * Flushes the observer causing any pending changes to be immediately
       * delivered the observer callback. By default these changes are delivered
       * asynchronously at the next microtask checkpoint.
       *
       * @return {boolean} Returns true if any pending changes caused the observer
       * callback to run.
       */
      flush() {
        if (!this._connected) {
          return false;
        }
        if (window.ShadyDOM) {
          ShadyDOM.flush();
        }
        if (this._nativeChildrenObserver) {
          this._processSlotMutations(this._nativeChildrenObserver.takeRecords());
        } else if (this._shadyChildrenObserver) {
          this._processSlotMutations(this._shadyChildrenObserver.takeRecords());
        }
        this._scheduled = false;
        let info = {
          target: this._target,
          addedNodes: [],
          removedNodes: []
        };
        let newNodes = this.constructor.getFlattenedNodes(this._target);
        let splices = calculateSplices(newNodes,
          this._effectiveNodes);
        // process removals
        for (let i=0, s; (i<splices.length) && (s=splices[i]); i++) {
          for (let j=0, n; (j < s.removed.length) && (n=s.removed[j]); j++) {
            info.removedNodes.push(n);
          }
        }
        // process adds
        for (let i=0, s; (i<splices.length) && (s=splices[i]); i++) {
          for (let j=s.index; j < s.index + s.addedCount; j++) {
            info.addedNodes.push(newNodes[j]);
          }
        }
        // update cache
        this._effectiveNodes = newNodes;
        let didFlush = false;
        if (info.addedNodes.length || info.removedNodes.length) {
          didFlush = true;
          this.callback.call(this._target, info);
        }
        return didFlush;
      }

      /**
       * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
       * @return {void}
       * @private
       */
      _listenSlots(nodeList) {
        for (let i=0; i < nodeList.length; i++) {
          let n = nodeList[i];
          if (isSlot(n)) {
            n.addEventListener('slotchange', this._boundSchedule);
          }
        }
      }

      /**
       * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
       * @return {void}
       * @private
       */
      _unlistenSlots(nodeList) {
        for (let i=0; i < nodeList.length; i++) {
          let n = nodeList[i];
          if (isSlot(n)) {
            n.removeEventListener('slotchange', this._boundSchedule);
          }
        }
      }

    };

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * Forces several classes of asynchronously queued tasks to flush:
     * - Debouncers added via `enqueueDebouncer`
     * - ShadyDOM distribution
     *
     * @return {void}
     */
    const flush$1 = function() {
      let shadyDOM, debouncers;
      do {
        shadyDOM = window.ShadyDOM && ShadyDOM.flush();
        if (window.ShadyCSS && window.ShadyCSS.ScopingShim) {
          window.ShadyCSS.ScopingShim.flush();
        }
        debouncers = flushDebouncers();
      } while (shadyDOM || debouncers);
    };

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    /* eslint-enable no-unused-vars */

    const p = Element.prototype;
    /**
     * @const {function(this:Node, string): boolean}
     */
    const normalizedMatchesSelector = p.matches || p.matchesSelector ||
      p.mozMatchesSelector || p.msMatchesSelector ||
      p.oMatchesSelector || p.webkitMatchesSelector;

    /**
     * Cross-platform `element.matches` shim.
     *
     * @function matchesSelector
     * @param {!Node} node Node to check selector against
     * @param {string} selector Selector to match
     * @return {boolean} True if node matched selector
     */
    const matchesSelector = function(node, selector) {
      return normalizedMatchesSelector.call(node, selector);
    };

    /**
     * Node API wrapper class returned from `Polymer.dom.(target)` when
     * `target` is a `Node`.
     * @implements {PolymerDomApi}
     * @unrestricted
     */
    class DomApiNative {

      /**
       * @param {Node} node Node for which to create a Polymer.dom helper object.
       */
      constructor(node) {
        if (window['ShadyDOM'] && window['ShadyDOM']['inUse']) {
          window['ShadyDOM']['patch'](node);
        }
        this.node = node;
      }

      /**
       * Returns an instance of `FlattenedNodesObserver` that
       * listens for node changes on this element.
       *
       * @param {function(this:HTMLElement, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Called when direct or distributed children
       *   of this element changes
       * @return {!PolymerDomApi.ObserveHandle} Observer instance
       * @override
       */
      observeNodes(callback) {
        return new FlattenedNodesObserver(
            /** @type {!HTMLElement} */(this.node), callback);
      }

      /**
       * Disconnects an observer previously created via `observeNodes`
       *
       * @param {!PolymerDomApi.ObserveHandle} observerHandle Observer instance
       *   to disconnect.
       * @return {void}
       * @override
       */
      unobserveNodes(observerHandle) {
        observerHandle.disconnect();
      }

      /**
       * Provided as a backwards-compatible API only.  This method does nothing.
       * @return {void}
       */
      notifyObserver() {}

      /**
       * Returns true if the provided node is contained with this element's
       * light-DOM children or shadow root, including any nested shadow roots
       * of children therein.
       *
       * @param {Node} node Node to test
       * @return {boolean} Returns true if the given `node` is contained within
       *   this element's light or shadow DOM.
       * @override
       */
      deepContains(node) {
        if (wrap$1(this.node).contains(node)) {
          return true;
        }
        let n = node;
        let doc = node.ownerDocument;
        // walk from node to `this` or `document`
        while (n && n !== doc && n !== this.node) {
          // use logical parentnode, or native ShadowRoot host
          n = wrap$1(n).parentNode || wrap$1(n).host;
        }
        return n === this.node;
      }

      /**
       * Returns the root node of this node.  Equivalent to `getRootNode()`.
       *
       * @return {Node} Top most element in the dom tree in which the node
       * exists. If the node is connected to a document this is either a
       * shadowRoot or the document; otherwise, it may be the node
       * itself or a node or document fragment containing it.
       * @override
       */
      getOwnerRoot() {
        return wrap$1(this.node).getRootNode();
      }

      /**
       * For slot elements, returns the nodes assigned to the slot; otherwise
       * an empty array. It is equivalent to `<slot>.addignedNodes({flatten:true})`.
       *
       * @return {!Array<!Node>} Array of assigned nodes
       * @override
       */
      getDistributedNodes() {
        return (this.node.localName === 'slot') ?
          wrap$1(this.node).assignedNodes({flatten: true}) :
          [];
      }

      /**
       * Returns an array of all slots this element was distributed to.
       *
       * @return {!Array<!HTMLSlotElement>} Description
       * @override
       */
      getDestinationInsertionPoints() {
        let ip$ = [];
        let n = wrap$1(this.node).assignedSlot;
        while (n) {
          ip$.push(n);
          n = wrap$1(n).assignedSlot;
        }
        return ip$;
      }

      /**
       * Calls `importNode` on the `ownerDocument` for this node.
       *
       * @param {!Node} node Node to import
       * @param {boolean} deep True if the node should be cloned deeply during
       *   import
       * @return {Node} Clone of given node imported to this owner document
       */
      importNode(node, deep) {
        let doc = this.node instanceof Document ? this.node :
          this.node.ownerDocument;
        return wrap$1(doc).importNode(node, deep);
      }

      /**
       * @return {!Array<!Node>} Returns a flattened list of all child nodes and
       * nodes assigned to child slots.
       * @override
       */
      getEffectiveChildNodes() {
        return FlattenedNodesObserver.getFlattenedNodes(
            /** @type {!HTMLElement} */ (this.node));
      }

      /**
       * Returns a filtered list of flattened child elements for this element based
       * on the given selector.
       *
       * @param {string} selector Selector to filter nodes against
       * @return {!Array<!HTMLElement>} List of flattened child elements
       * @override
       */
      queryDistributedElements(selector) {
        let c$ = this.getEffectiveChildNodes();
        let list = [];
        for (let i=0, l=c$.length, c; (i<l) && (c=c$[i]); i++) {
          if ((c.nodeType === Node.ELEMENT_NODE) &&
              matchesSelector(c, selector)) {
            list.push(c);
          }
        }
        return list;
      }

      /**
       * For shadow roots, returns the currently focused element within this
       * shadow root.
       *
       * return {Node|undefined} Currently focused element
       * @override
       */
      get activeElement() {
        let node = this.node;
        return node._activeElement !== undefined ? node._activeElement : node.activeElement;
      }
    }

    function forwardMethods(proto, methods) {
      for (let i=0; i < methods.length; i++) {
        let method = methods[i];
        /* eslint-disable valid-jsdoc */
        proto[method] = /** @this {DomApiNative} */ function() {
          return this.node[method].apply(this.node, arguments);
        };
        /* eslint-enable */
      }
    }

    function forwardReadOnlyProperties(proto, properties) {
      for (let i=0; i < properties.length; i++) {
        let name = properties[i];
        Object.defineProperty(proto, name, {
          get: function() {
            const domApi = /** @type {DomApiNative} */(this);
            return domApi.node[name];
          },
          configurable: true
        });
      }
    }

    function forwardProperties(proto, properties) {
      for (let i=0; i < properties.length; i++) {
        let name = properties[i];
        Object.defineProperty(proto, name, {
          /**
           * @this {DomApiNative}
           * @return {*} .
           */
          get: function() {
            return this.node[name];
          },
          /**
           * @this {DomApiNative}
           * @param {*} value .
           */
          set: function(value) {
            this.node[name] = value;
          },
          configurable: true
        });
      }
    }


    /**
     * Event API wrapper class returned from `dom.(target)` when
     * `target` is an `Event`.
     */
    class EventApi {
      constructor(event) {
        this.event = event;
      }

      /**
       * Returns the first node on the `composedPath` of this event.
       *
       * @return {!EventTarget} The node this event was dispatched to
       */
      get rootTarget() {
        return this.path[0];
      }

      /**
       * Returns the local (re-targeted) target for this event.
       *
       * @return {!EventTarget} The local (re-targeted) target for this event.
       */
      get localTarget() {
        return this.event.target;
      }

      /**
       * Returns the `composedPath` for this event.
       * @return {!Array<!EventTarget>} The nodes this event propagated through
       */
      get path() {
        return this.event.composedPath();
      }
    }

    /**
     * @function
     * @param {boolean=} deep
     * @return {!Node}
     */
    DomApiNative.prototype.cloneNode;
    /**
     * @function
     * @param {!Node} node
     * @return {!Node}
     */
    DomApiNative.prototype.appendChild;
    /**
     * @function
     * @param {!Node} newChild
     * @param {Node} refChild
     * @return {!Node}
     */
    DomApiNative.prototype.insertBefore;
    /**
     * @function
     * @param {!Node} node
     * @return {!Node}
     */
    DomApiNative.prototype.removeChild;
    /**
     * @function
     * @param {!Node} oldChild
     * @param {!Node} newChild
     * @return {!Node}
     */
    DomApiNative.prototype.replaceChild;
    /**
     * @function
     * @param {string} name
     * @param {string} value
     * @return {void}
     */
    DomApiNative.prototype.setAttribute;
    /**
     * @function
     * @param {string} name
     * @return {void}
     */
    DomApiNative.prototype.removeAttribute;
    /**
     * @function
     * @param {string} selector
     * @return {?Element}
     */
    DomApiNative.prototype.querySelector;
    /**
     * @function
     * @param {string} selector
     * @return {!NodeList<!Element>}
     */
    DomApiNative.prototype.querySelectorAll;

    /** @type {?Node} */
    DomApiNative.prototype.parentNode;
    /** @type {?Node} */
    DomApiNative.prototype.firstChild;
    /** @type {?Node} */
    DomApiNative.prototype.lastChild;
    /** @type {?Node} */
    DomApiNative.prototype.nextSibling;
    /** @type {?Node} */
    DomApiNative.prototype.previousSibling;
    /** @type {?HTMLElement} */
    DomApiNative.prototype.firstElementChild;
    /** @type {?HTMLElement} */
    DomApiNative.prototype.lastElementChild;
    /** @type {?HTMLElement} */
    DomApiNative.prototype.nextElementSibling;
    /** @type {?HTMLElement} */
    DomApiNative.prototype.previousElementSibling;
    /** @type {!Array<!Node>} */
    DomApiNative.prototype.childNodes;
    /** @type {!Array<!HTMLElement>} */
    DomApiNative.prototype.children;
    /** @type {?DOMTokenList} */
    DomApiNative.prototype.classList;

    /** @type {string} */
    DomApiNative.prototype.textContent;
    /** @type {string} */
    DomApiNative.prototype.innerHTML;

    let DomApiImpl = DomApiNative;

    if (window['ShadyDOM'] && window['ShadyDOM']['inUse'] && window['ShadyDOM']['noPatch'] && window['ShadyDOM']['Wrapper']) {

      /**
       * @private
       * @extends {HTMLElement}
       */
      class Wrapper extends window['ShadyDOM']['Wrapper'] {}

      // copy bespoke API onto wrapper
      Object.getOwnPropertyNames(DomApiNative.prototype).forEach((prop) => {
        if (prop != 'activeElement') {
          Wrapper.prototype[prop] = DomApiNative.prototype[prop];
        }
      });

      // Note, `classList` is here only for legacy compatibility since it does not
      // trigger distribution in v1 Shadow DOM.
      forwardReadOnlyProperties(Wrapper.prototype, [
        'classList'
      ]);

      DomApiImpl = Wrapper;

      Object.defineProperties(EventApi.prototype, {

        // Returns the "lowest" node in the same root as the event's currentTarget.
        // When in `noPatch` mode, this must be calculated by walking the event's
        // path.
        localTarget: {
          get() {
            const current = this.event.currentTarget;
            const currentRoot = current && dom(current).getOwnerRoot();
            const p$ = this.path;
            for (let i = 0; i < p$.length; i++) {
              const e = p$[i];
              if (dom(e).getOwnerRoot() === currentRoot) {
                return e;
              }
            }
          },
          configurable: true
        },

        path: {
          get() {
            return window['ShadyDOM']['composedPath'](this.event);
          },
          configurable: true
        }
      });

    } else {

      // Methods that can provoke distribution or must return the logical, not
      // composed tree.
      forwardMethods(DomApiNative.prototype, [
        'cloneNode', 'appendChild', 'insertBefore', 'removeChild',
        'replaceChild', 'setAttribute', 'removeAttribute',
        'querySelector', 'querySelectorAll'
      ]);

      // Properties that should return the logical, not composed tree. Note, `classList`
      // is here only for legacy compatibility since it does not trigger distribution
      // in v1 Shadow DOM.
      forwardReadOnlyProperties(DomApiNative.prototype, [
        'parentNode', 'firstChild', 'lastChild',
        'nextSibling', 'previousSibling', 'firstElementChild',
        'lastElementChild', 'nextElementSibling', 'previousElementSibling',
        'childNodes', 'children', 'classList'
      ]);

      forwardProperties(DomApiNative.prototype, [
        'textContent', 'innerHTML', 'className'
      ]);
    }

    /**
     * Legacy DOM and Event manipulation API wrapper factory used to abstract
     * differences between native Shadow DOM and "Shady DOM" when polyfilling on
     * older browsers.
     *
     * Note that in Polymer 2.x use of `Polymer.dom` is no longer required and
     * in the majority of cases simply facades directly to the standard native
     * API.
     *
     * @summary Legacy DOM and Event manipulation API wrapper factory used to
     * abstract differences between native Shadow DOM and "Shady DOM."
     * @param {(Node|Event|DomApiNative|EventApi)=} obj Node or event to operate on
     * @return {!DomApiNative|!EventApi} Wrapper providing either node API or event API
     */
    const dom = function(obj) {
      obj = obj || document;
      if (obj instanceof DomApiImpl) {
        return /** @type {!DomApi} */(obj);
      }
      if (obj instanceof EventApi) {
        return /** @type {!EventApi} */(obj);
      }
      let helper = obj['__domApi'];
      if (!helper) {
        if (obj instanceof Event) {
          helper = new EventApi(obj);
        } else {
          helper = new DomApiImpl(/** @type {Node} */(obj));
        }
        obj['__domApi'] = helper;
      }
      return helper;
    };

    /**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    const ShadyDOM$1 = window.ShadyDOM;
    const ShadyCSS = window.ShadyCSS;

    /**
     * Return true if node scope is correct.
     *
     * @param {!Element} node Node to check scope
     * @param {!Node} scope Scope reference
     * @return {boolean} True if node is in scope
     */
    function sameScope(node, scope) {
      return wrap$1(node).getRootNode() === scope;
    }

    /**
     * Ensure that elements in a ShadowDOM container are scoped correctly.
     * This function is only needed when ShadyDOM is used and unpatched DOM APIs are used in third party code.
     * This can happen in noPatch mode or when specialized APIs like ranges or tables are used to mutate DOM.
     *
     * @param  {!Element} container Container element to scope
     * @param  {boolean=} shouldObserve if true, start a mutation observer for added nodes to the container
     * @return {?MutationObserver} Returns a new MutationObserver on `container` if `shouldObserve` is true.
     */
    function scopeSubtree(container, shouldObserve = false) {
      // If using native ShadowDOM, abort
      if (!ShadyDOM$1 || !ShadyCSS) {
        return null;
      }
      // ShadyCSS handles DOM mutations when ShadyDOM does not handle scoping itself
      if (!ShadyDOM$1['handlesDynamicScoping']) {
        return null;
      }
      const ScopingShim = ShadyCSS['ScopingShim'];
      // if ScopingShim is not available, abort
      if (!ScopingShim) {
        return null;
      }
      // capture correct scope for container
      const containerScope = ScopingShim['scopeForNode'](container);
      const root = wrap$1(container).getRootNode();

      const scopify = (node) => {
        if (!sameScope(node, root)) {
          return;
        }
        // NOTE: native qSA does not honor scoped DOM, but it is faster, and the same behavior as Polymer v1
        const elements = Array.from(ShadyDOM$1['nativeMethods']['querySelectorAll'].call(node, '*'));
        elements.push(node);
        for (let i = 0; i < elements.length; i++) {
          const el = elements[i];
          if (!sameScope(el, root)) {
            continue;
          }
          const currentScope = ScopingShim['currentScopeForNode'](el);
          if (currentScope !== containerScope) {
            if (currentScope !== '') {
              ScopingShim['unscopeNode'](el, currentScope);
            }
            ScopingShim['scopeNode'](el, containerScope);
          }
        }
      };

      // scope everything in container
      scopify(container);

      if (shouldObserve) {
        const mo = new MutationObserver((mxns) => {
          for (let i = 0; i < mxns.length; i++) {
            const mxn = mxns[i];
            for (let j = 0; j < mxn.addedNodes.length; j++) {
              const addedNode = mxn.addedNodes[j];
              if (addedNode.nodeType === Node.ELEMENT_NODE) {
                scopify(addedNode);
              }
            }
          }
        });
        mo.observe(container, {childList: true, subtree: true});
        return mo;
      } else {
        return null;
      }
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    let styleInterface = window.ShadyCSS;

    /**
     * Element class mixin that provides Polymer's "legacy" API intended to be
     * backward-compatible to the greatest extent possible with the API
     * found on the Polymer 1.x `Polymer.Base` prototype applied to all elements
     * defined using the `Polymer({...})` function.
     *
     * @mixinFunction
     * @polymer
     * @appliesMixin ElementMixin
     * @appliesMixin GestureEventListeners
     * @property isAttached {boolean} Set to `true` in this element's
     *   `connectedCallback` and `false` in `disconnectedCallback`
     * @summary Element class mixin that provides Polymer's "legacy" API
     */
    const LegacyElementMixin = dedupingMixin((base) => {
      /**
       * @constructor
       * @implements {Polymer_ElementMixin}
       * @implements {Polymer_GestureEventListeners}
       * @implements {Polymer_DirMixin}
       * @extends {HTMLElement}
       * @private
       */
      const legacyElementBase = DirMixin(GestureEventListeners(ElementMixin(base)));

      /**
       * Map of simple names to touch action names
       * @dict
       */
      const DIRECTION_MAP = {
        'x': 'pan-x',
        'y': 'pan-y',
        'none': 'none',
        'all': 'auto'
      };

      /**
       * @polymer
       * @mixinClass
       * @extends {legacyElementBase}
       * @implements {Polymer_LegacyElementMixin}
       * @unrestricted
       */
      class LegacyElement extends legacyElementBase {

        constructor() {
          super();
          /** @type {boolean} */
          this.isAttached;
          /** @type {?WeakMap<!Element, !Object<string, !Function>>} */
          this.__boundListeners;
          /** @type {?Object<string, ?Function>} */
          this._debouncers;
        }

        /**
         * Forwards `importMeta` from the prototype (i.e. from the info object
         * passed to `Polymer({...})`) to the static API.
         *
         * @return {!Object} The `import.meta` object set on the prototype
         * @suppress {missingProperties} `this` is always in the instance in
         *  closure for some reason even in a static method, rather than the class
         * @nocollapse
         */
        static get importMeta() {
          return this.prototype.importMeta;
        }

        /**
         * Legacy callback called during the `constructor`, for overriding
         * by the user.
         * @override
         * @return {void}
         */
        created() {}

        /**
         * Provides an implementation of `connectedCallback`
         * which adds Polymer legacy API's `attached` method.
         * @return {void}
         * @override
         */
        connectedCallback() {
          super.connectedCallback();
          this.isAttached = true;
          this.attached();
        }

        /**
         * Legacy callback called during `connectedCallback`, for overriding
         * by the user.
         * @override
         * @return {void}
         */
        attached() {}

        /**
         * Provides an implementation of `disconnectedCallback`
         * which adds Polymer legacy API's `detached` method.
         * @return {void}
         * @override
         */
        disconnectedCallback() {
          super.disconnectedCallback();
          this.isAttached = false;
          this.detached();
        }

        /**
         * Legacy callback called during `disconnectedCallback`, for overriding
         * by the user.
         * @override
         * @return {void}
         */
        detached() {}

        /**
         * Provides an override implementation of `attributeChangedCallback`
         * which adds the Polymer legacy API's `attributeChanged` method.
         * @param {string} name Name of attribute.
         * @param {?string} old Old value of attribute.
         * @param {?string} value Current value of attribute.
         * @param {?string} namespace Attribute namespace.
         * @return {void}
         * @override
         */
        attributeChangedCallback(name, old, value, namespace) {
          if (old !== value) {
            super.attributeChangedCallback(name, old, value, namespace);
            this.attributeChanged(name, old, value);
          }
        }

        /**
         * Legacy callback called during `attributeChangedChallback`, for overriding
         * by the user.
         * @param {string} name Name of attribute.
         * @param {?string} old Old value of attribute.
         * @param {?string} value Current value of attribute.
         * @return {void}
         * @override
         */
        attributeChanged(name, old, value) {} // eslint-disable-line no-unused-vars

        /**
         * Overrides the default `Polymer.PropertyEffects` implementation to
         * add support for class initialization via the `_registered` callback.
         * This is called only when the first instance of the element is created.
         *
         * @return {void}
         * @override
         * @suppress {invalidCasts}
         */
        _initializeProperties() {
          let proto = Object.getPrototypeOf(this);
          if (!proto.hasOwnProperty('__hasRegisterFinished')) {
            this._registered();
            // backstop in case the `_registered` implementation does not set this
            proto.__hasRegisterFinished = true;
          }
          super._initializeProperties();
          this.root = /** @type {HTMLElement} */(this);
          this.created();
          // Ensure listeners are applied immediately so that they are
          // added before declarative event listeners. This allows an element to
          // decorate itself via an event prior to any declarative listeners
          // seeing the event. Note, this ensures compatibility with 1.x ordering.
          this._applyListeners();
        }

        /**
         * Called automatically when an element is initializing.
         * Users may override this method to perform class registration time
         * work. The implementation should ensure the work is performed
         * only once for the class.
         * @protected
         * @return {void}
         * @override
         */
        _registered() {}

        /**
         * Overrides the default `Polymer.PropertyEffects` implementation to
         * add support for installing `hostAttributes` and `listeners`.
         *
         * @return {void}
         * @override
         */
        ready() {
          this._ensureAttributes();
          super.ready();
        }

        /**
         * Ensures an element has required attributes. Called when the element
         * is being readied via `ready`. Users should override to set the
         * element's required attributes. The implementation should be sure
         * to check and not override existing attributes added by
         * the user of the element. Typically, setting attributes should be left
         * to the element user and not done here; reasonable exceptions include
         * setting aria roles and focusability.
         * @protected
         * @return {void}
         * @override
         */
        _ensureAttributes() {}

        /**
         * Adds element event listeners. Called when the element
         * is being readied via `ready`. Users should override to
         * add any required element event listeners.
         * In performance critical elements, the work done here should be kept
         * to a minimum since it is done before the element is rendered. In
         * these elements, consider adding listeners asynchronously so as not to
         * block render.
         * @protected
         * @return {void}
         * @override
         */
        _applyListeners() {}

        /**
         * Converts a typed JavaScript value to a string.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features. To customize
         * how properties are serialized to attributes for attribute bindings and
         * `reflectToAttribute: true` properties as well as this method, override
         * the `_serializeValue` method provided by `Polymer.PropertyAccessors`.
         *
         * @param {*} value Value to deserialize
         * @return {string | undefined} Serialized value
         * @override
         */
        serialize(value) {
          return this._serializeValue(value);
        }

        /**
         * Converts a string to a typed JavaScript value.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.  To customize
         * how attributes are deserialized to properties for in
         * `attributeChangedCallback`, override `_deserializeValue` method
         * provided by `Polymer.PropertyAccessors`.
         *
         * @param {string} value String to deserialize
         * @param {*} type Type to deserialize the string to
         * @return {*} Returns the deserialized value in the `type` given.
         * @override
         */
        deserialize(value, type) {
          return this._deserializeValue(value, type);
        }

        /**
         * Serializes a property to its associated attribute.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.
         *
         * @param {string} property Property name to reflect.
         * @param {string=} attribute Attribute name to reflect.
         * @param {*=} value Property value to reflect.
         * @return {void}
         * @override
         */
        reflectPropertyToAttribute(property, attribute, value) {
          this._propertyToAttribute(property, attribute, value);
        }

        /**
         * Sets a typed value to an HTML attribute on a node.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.
         *
         * @param {*} value Value to serialize.
         * @param {string} attribute Attribute name to serialize to.
         * @param {Element} node Element to set attribute to.
         * @return {void}
         * @override
         */
        serializeValueToAttribute(value, attribute, node) {
          this._valueToNodeAttribute(/** @type {Element} */ (node || this), value, attribute);
        }

        /**
         * Copies own properties (including accessor descriptors) from a source
         * object to a target object.
         *
         * @param {Object} prototype Target object to copy properties to.
         * @param {Object} api Source object to copy properties from.
         * @return {Object} prototype object that was passed as first argument.
         * @override
         */
        extend(prototype, api) {
          if (!(prototype && api)) {
            return prototype || api;
          }
          let n$ = Object.getOwnPropertyNames(api);
          for (let i=0, n; (i<n$.length) && (n=n$[i]); i++) {
            let pd = Object.getOwnPropertyDescriptor(api, n);
            if (pd) {
              Object.defineProperty(prototype, n, pd);
            }
          }
          return prototype;
        }

        /**
         * Copies props from a source object to a target object.
         *
         * Note, this method uses a simple `for...in` strategy for enumerating
         * properties.  To ensure only `ownProperties` are copied from source
         * to target and that accessor implementations are copied, use `extend`.
         *
         * @param {!Object} target Target object to copy properties to.
         * @param {!Object} source Source object to copy properties from.
         * @return {!Object} Target object that was passed as first argument.
         * @override
         */
        mixin(target, source) {
          for (let i in source) {
            target[i] = source[i];
          }
          return target;
        }

        /**
         * Sets the prototype of an object.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.
         * @param {Object} object The object on which to set the prototype.
         * @param {Object} prototype The prototype that will be set on the given
         * `object`.
         * @return {Object} Returns the given `object` with its prototype set
         * to the given `prototype` object.
         * @override
         */
        chainObject(object, prototype) {
          if (object && prototype && object !== prototype) {
            object.__proto__ = prototype;
          }
          return object;
        }

        /* **** Begin Template **** */

        /**
         * Calls `importNode` on the `content` of the `template` specified and
         * returns a document fragment containing the imported content.
         *
         * @param {HTMLTemplateElement} template HTML template element to instance.
         * @return {!DocumentFragment} Document fragment containing the imported
         *   template content.
         * @override
         * @suppress {missingProperties} go/missingfnprops
         */
        instanceTemplate(template) {
          let content = this.constructor._contentForTemplate(template);
          let dom$$1 = /** @type {!DocumentFragment} */
            (document.importNode(content, true));
          return dom$$1;
        }

        /* **** Begin Events **** */



        /**
         * Dispatches a custom event with an optional detail value.
         *
         * @param {string} type Name of event type.
         * @param {*=} detail Detail value containing event-specific
         *   payload.
         * @param {{ bubbles: (boolean|undefined), cancelable: (boolean|undefined),
         *     composed: (boolean|undefined) }=}
         *  options Object specifying options.  These may include:
         *  `bubbles` (boolean, defaults to `true`),
         *  `cancelable` (boolean, defaults to false), and
         *  `node` on which to fire the event (HTMLElement, defaults to `this`).
         * @return {!Event} The new event that was fired.
         * @override
         */
        fire(type, detail, options) {
          options = options || {};
          detail = (detail === null || detail === undefined) ? {} : detail;
          let event = new Event(type, {
            bubbles: options.bubbles === undefined ? true : options.bubbles,
            cancelable: Boolean(options.cancelable),
            composed: options.composed === undefined ? true: options.composed
          });
          event.detail = detail;
          let node = options.node || this;
          wrap$1(node).dispatchEvent(event);
          return event;
        }

        /**
         * Convenience method to add an event listener on a given element,
         * late bound to a named method on this element.
         *
         * @param {?EventTarget} node Element to add event listener to.
         * @param {string} eventName Name of event to listen for.
         * @param {string} methodName Name of handler method on `this` to call.
         * @return {void}
         * @override
         */
        listen(node, eventName, methodName) {
          node = /** @type {!EventTarget} */ (node || this);
          let hbl = this.__boundListeners ||
            (this.__boundListeners = new WeakMap());
          let bl = hbl.get(node);
          if (!bl) {
            bl = {};
            hbl.set(node, bl);
          }
          let key = eventName + methodName;
          if (!bl[key]) {
            bl[key] = this._addMethodEventListenerToNode(
                /** @type {!Node} */ (node), eventName, methodName, this);
          }
        }

        /**
         * Convenience method to remove an event listener from a given element,
         * late bound to a named method on this element.
         *
         * @param {?EventTarget} node Element to remove event listener from.
         * @param {string} eventName Name of event to stop listening to.
         * @param {string} methodName Name of handler method on `this` to not call
         anymore.
         * @return {void}
         * @override
         */
        unlisten(node, eventName, methodName) {
          node = /** @type {!EventTarget} */ (node || this);
          let bl = this.__boundListeners &&
              this.__boundListeners.get(/** @type {!Element} */ (node));
          let key = eventName + methodName;
          let handler = bl && bl[key];
          if (handler) {
            this._removeEventListenerFromNode(
                /** @type {!Node} */ (node), eventName, handler);
            bl[key] = /** @type {?} */ (null);
          }
        }

        /**
         * Override scrolling behavior to all direction, one direction, or none.
         *
         * Valid scroll directions:
         *   - 'all': scroll in any direction
         *   - 'x': scroll only in the 'x' direction
         *   - 'y': scroll only in the 'y' direction
         *   - 'none': disable scrolling for this node
         *
         * @param {string=} direction Direction to allow scrolling
         * Defaults to `all`.
         * @param {Element=} node Element to apply scroll direction setting.
         * Defaults to `this`.
         * @return {void}
         * @override
         */
        setScrollDirection(direction, node) {
          setTouchAction(
              /** @type {!Element} */ (node || this),
              DIRECTION_MAP[direction] || 'auto');
        }
        /* **** End Events **** */

        /**
         * Convenience method to run `querySelector` on this local DOM scope.
         *
         * This function calls `Polymer.dom(this.root).querySelector(slctr)`.
         *
         * @param {string} slctr Selector to run on this local DOM scope
         * @return {Element} Element found by the selector, or null if not found.
         * @override
         */
        $$(slctr) {
          // Note, no need to `wrap` this because root is always patched
          return this.root.querySelector(slctr);
        }

        /**
         * Return the element whose local dom within which this element
         * is contained. This is a shorthand for
         * `this.getRootNode().host`.
         * @this {Element}
         * @return {?Node} The element whose local dom within which this element is
         * contained.
         * @override
         */
        get domHost() {
          let root$$1 = wrap$1(this).getRootNode();
          return (root$$1 instanceof DocumentFragment) ? /** @type {ShadowRoot} */ (root$$1).host : root$$1;
        }

        /**
         * Force this element to distribute its children to its local dom.
         * This should not be necessary as of Polymer 2.0.2 and is provided only
         * for backwards compatibility.
         * @return {void}
         * @override
         */
        distributeContent() {
          const thisEl = /** @type {Element} */ (this);
          const domApi = /** @type {PolymerDomApi} */(dom(thisEl));
          if (window.ShadyDOM && domApi.shadowRoot) {
            ShadyDOM.flush();
          }
        }

        /**
         * Returns a list of nodes that are the effective childNodes. The effective
         * childNodes list is the same as the element's childNodes except that
         * any `<content>` elements are replaced with the list of nodes distributed
         * to the `<content>`, the result of its `getDistributedNodes` method.
         * @return {!Array<!Node>} List of effective child nodes.
         * @suppress {invalidCasts} LegacyElementMixin must be applied to an
         *     HTMLElement
         * @override
         */
        getEffectiveChildNodes() {
          const thisEl = /** @type {Element} */ (this);
          const domApi = /** @type {PolymerDomApi} */ (dom(thisEl));
          return domApi.getEffectiveChildNodes();
        }

        /**
         * Returns a list of nodes distributed within this element that match
         * `selector`. These can be dom children or elements distributed to
         * children that are insertion points.
         * @param {string} selector Selector to run.
         * @return {!Array<!Node>} List of distributed elements that match selector.
         * @suppress {invalidCasts} LegacyElementMixin must be applied to an
         * HTMLElement
         * @override
         */
        queryDistributedElements(selector) {
          const thisEl = /** @type {Element} */ (this);
          const domApi = /** @type {PolymerDomApi} */ (dom(thisEl));
          return domApi.queryDistributedElements(selector);
        }

        /**
         * Returns a list of elements that are the effective children. The effective
         * children list is the same as the element's children except that
         * any `<content>` elements are replaced with the list of elements
         * distributed to the `<content>`.
         *
         * @return {!Array<!Node>} List of effective children.
         * @override
         */
        getEffectiveChildren() {
          let list = this.getEffectiveChildNodes();
          return list.filter(function(/** @type {!Node} */ n) {
            return (n.nodeType === Node.ELEMENT_NODE);
          });
        }

        /**
         * Returns a string of text content that is the concatenation of the
         * text content's of the element's effective childNodes (the elements
         * returned by <a href="#getEffectiveChildNodes>getEffectiveChildNodes</a>.
         *
         * @return {string} List of effective children.
         * @override
         */
        getEffectiveTextContent() {
          let cn = this.getEffectiveChildNodes();
          let tc = [];
          for (let i=0, c; (c = cn[i]); i++) {
            if (c.nodeType !== Node.COMMENT_NODE) {
              tc.push(c.textContent);
            }
          }
          return tc.join('');
        }

        /**
         * Returns the first effective childNode within this element that
         * match `selector`. These can be dom child nodes or elements distributed
         * to children that are insertion points.
         * @param {string} selector Selector to run.
         * @return {Node} First effective child node that matches selector.
         * @override
         */
        queryEffectiveChildren(selector) {
          let e$ = this.queryDistributedElements(selector);
          return e$ && e$[0];
        }

        /**
         * Returns a list of effective childNodes within this element that
         * match `selector`. These can be dom child nodes or elements distributed
         * to children that are insertion points.
         * @param {string} selector Selector to run.
         * @return {!Array<!Node>} List of effective child nodes that match
         *     selector.
         * @override
         */
        queryAllEffectiveChildren(selector) {
          return this.queryDistributedElements(selector);
        }

        /**
         * Returns a list of nodes distributed to this element's `<slot>`.
         *
         * If this element contains more than one `<slot>` in its local DOM,
         * an optional selector may be passed to choose the desired content.
         *
         * @param {string=} slctr CSS selector to choose the desired
         *   `<slot>`.  Defaults to `content`.
         * @return {!Array<!Node>} List of distributed nodes for the `<slot>`.
         * @override
         */
        getContentChildNodes(slctr) {
          // Note, no need to `wrap` this because root is always
          let content = this.root.querySelector(slctr || 'slot');
          return content ?
              /** @type {PolymerDomApi} */ (dom(content)).getDistributedNodes() :
              [];
        }

        /**
         * Returns a list of element children distributed to this element's
         * `<slot>`.
         *
         * If this element contains more than one `<slot>` in its
         * local DOM, an optional selector may be passed to choose the desired
         * content.  This method differs from `getContentChildNodes` in that only
         * elements are returned.
         *
         * @param {string=} slctr CSS selector to choose the desired
         *   `<content>`.  Defaults to `content`.
         * @return {!Array<!HTMLElement>} List of distributed nodes for the
         *   `<slot>`.
         * @suppress {invalidCasts}
         * @override
         */
        getContentChildren(slctr) {
          let children = /** @type {!Array<!HTMLElement>} */(this.getContentChildNodes(slctr).filter(function(n) {
            return (n.nodeType === Node.ELEMENT_NODE);
          }));
          return children;
        }

        /**
         * Checks whether an element is in this element's light DOM tree.
         *
         * @param {?Node} node The element to be checked.
         * @return {boolean} true if node is in this element's light DOM tree.
         * @suppress {invalidCasts} LegacyElementMixin must be applied to an
         * HTMLElement
         * @override
         */
        isLightDescendant(node) {
          const thisNode = /** @type {Node} */ (this);
          return thisNode !== node && wrap$1(thisNode).contains(node) &&
            wrap$1(thisNode).getRootNode() === wrap$1(node).getRootNode();
        }

        /**
         * Checks whether an element is in this element's local DOM tree.
         *
         * @param {!Element} node The element to be checked.
         * @return {boolean} true if node is in this element's local DOM tree.
         * @override
         */
        isLocalDescendant(node) {
          return this.root === wrap$1(node).getRootNode();
        }

        /**
         * No-op for backwards compatibility. This should now be handled by
         * ShadyCss library.
         * @param  {!Element} container Container element to scope
         * @param  {boolean=} shouldObserve if true, start a mutation observer for added nodes to the container
         * @return {?MutationObserver} Returns a new MutationObserver on `container` if `shouldObserve` is true.
         * @override
         */
        scopeSubtree(container, shouldObserve = false) {
          return scopeSubtree(container, shouldObserve);
        }

        /**
         * Returns the computed style value for the given property.
         * @param {string} property The css property name.
         * @return {string} Returns the computed css property value for the given
         * `property`.
         * @suppress {invalidCasts} LegacyElementMixin must be applied to an
         *     HTMLElement
         * @override
         */
        getComputedStyleValue(property) {
          return styleInterface.getComputedStyleValue(/** @type {!Element} */(this), property);
        }

        // debounce

        /**
         * Call `debounce` to collapse multiple requests for a named task into
         * one invocation which is made after the wait time has elapsed with
         * no new request.  If no wait time is given, the callback will be called
         * at microtask timing (guaranteed before paint).
         *
         *     debouncedClickAction(e) {
         *       // will not call `processClick` more than once per 100ms
         *       this.debounce('click', function() {
         *        this.processClick();
         *       } 100);
         *     }
         *
         * @param {string} jobName String to identify the debounce job.
         * @param {function():void} callback Function that is called (with `this`
         *   context) when the wait time elapses.
         * @param {number=} wait Optional wait time in milliseconds (ms) after the
         *   last signal that must elapse before invoking `callback`
         * @return {!Object} Returns a debouncer object on which exists the
         * following methods: `isActive()` returns true if the debouncer is
         * active; `cancel()` cancels the debouncer if it is active;
         * `flush()` immediately invokes the debounced callback if the debouncer
         * is active.
         * @override
         */
        debounce(jobName, callback, wait) {
          this._debouncers = this._debouncers || {};
          return this._debouncers[jobName] = Debouncer.debounce(
                this._debouncers[jobName]
              , wait > 0 ? timeOut.after(wait) : microTask
              , callback.bind(this));
        }

        /**
         * Returns whether a named debouncer is active.
         *
         * @param {string} jobName The name of the debouncer started with `debounce`
         * @return {boolean} Whether the debouncer is active (has not yet fired).
         * @override
         */
        isDebouncerActive(jobName) {
          this._debouncers = this._debouncers || {};
          let debouncer = this._debouncers[jobName];
          return !!(debouncer && debouncer.isActive());
        }

        /**
         * Immediately calls the debouncer `callback` and inactivates it.
         *
         * @param {string} jobName The name of the debouncer started with `debounce`
         * @return {void}
         * @override
         */
        flushDebouncer(jobName) {
          this._debouncers = this._debouncers || {};
          let debouncer = this._debouncers[jobName];
          if (debouncer) {
            debouncer.flush();
          }
        }

        /**
         * Cancels an active debouncer.  The `callback` will not be called.
         *
         * @param {string} jobName The name of the debouncer started with `debounce`
         * @return {void}
         * @override
         */
        cancelDebouncer(jobName) {
          this._debouncers = this._debouncers || {};
          let debouncer = this._debouncers[jobName];
          if (debouncer) {
            debouncer.cancel();
          }
        }

        /**
         * Runs a callback function asynchronously.
         *
         * By default (if no waitTime is specified), async callbacks are run at
         * microtask timing, which will occur before paint.
         *
         * @param {!Function} callback The callback function to run, bound to
         *     `this`.
         * @param {number=} waitTime Time to wait before calling the
         *   `callback`.  If unspecified or 0, the callback will be run at microtask
         *   timing (before paint).
         * @return {number} Handle that may be used to cancel the async job.
         * @override
         */
        async(callback, waitTime) {
          return waitTime > 0 ? timeOut.run(callback.bind(this), waitTime) :
              ~microTask.run(callback.bind(this));
        }

        /**
         * Cancels an async operation started with `async`.
         *
         * @param {number} handle Handle returned from original `async` call to
         *   cancel.
         * @return {void}
         * @override
         */
        cancelAsync(handle) {
          handle < 0 ? microTask.cancel(~handle) :
              timeOut.cancel(handle);
        }

        // other

        /**
         * Convenience method for creating an element and configuring it.
         *
         * @param {string} tag HTML element tag to create.
         * @param {Object=} props Object of properties to configure on the
         *    instance.
         * @return {!Element} Newly created and configured element.
         * @override
         */
        create(tag, props) {
          let elt = document.createElement(tag);
          if (props) {
            if (elt.setProperties) {
              elt.setProperties(props);
            } else {
              for (let n in props) {
                elt[n] = props[n];
              }
            }
          }
          return elt;
        }

        /**
         * Polyfill for Element.prototype.matches, which is sometimes still
         * prefixed.
         *
         * @param {string} selector Selector to test.
         * @param {!Element=} node Element to test the selector against.
         * @return {boolean} Whether the element matches the selector.
         * @override
         */
        elementMatches(selector, node) {
          return matchesSelector( (node || this), selector);
        }

        /**
         * Toggles an HTML attribute on or off.
         *
         * @param {string} name HTML attribute name
         * @param {boolean=} bool Boolean to force the attribute on or off.
         *    When unspecified, the state of the attribute will be reversed.
         * @return {boolean} true if the attribute now exists
         * @override
         */
        toggleAttribute(name, bool) {
          let node = /** @type {Element} */(this);
          if (arguments.length === 3) {
            node = /** @type {Element} */(arguments[2]);
          }
          if (arguments.length == 1) {
            bool = !node.hasAttribute(name);
          }
          if (bool) {
            wrap$1(node).setAttribute(name, '');
            return true;
          } else {
            wrap$1(node).removeAttribute(name);
            return false;
          }
        }


        /**
         * Toggles a CSS class on or off.
         *
         * @param {string} name CSS class name
         * @param {boolean=} bool Boolean to force the class on or off.
         *    When unspecified, the state of the class will be reversed.
         * @param {Element=} node Node to target.  Defaults to `this`.
         * @return {void}
         * @override
         */
        toggleClass(name, bool, node) {
          node = /** @type {Element} */ (node || this);
          if (arguments.length == 1) {
            bool = !node.classList.contains(name);
          }
          if (bool) {
            node.classList.add(name);
          } else {
            node.classList.remove(name);
          }
        }

        /**
         * Cross-platform helper for setting an element's CSS `transform` property.
         *
         * @param {string} transformText Transform setting.
         * @param {Element=} node Element to apply the transform to.
         * Defaults to `this`
         * @return {void}
         * @override
         */
        transform(transformText, node) {
          node = /** @type {Element} */ (node || this);
          node.style.webkitTransform = transformText;
          node.style.transform = transformText;
        }

        /**
         * Cross-platform helper for setting an element's CSS `translate3d`
         * property.
         *
         * @param {number|string} x X offset.
         * @param {number|string} y Y offset.
         * @param {number|string} z Z offset.
         * @param {Element=} node Element to apply the transform to.
         * Defaults to `this`.
         * @return {void}
         * @override
         */
        translate3d(x, y, z, node) {
          node = /** @type {Element} */ (node || this);
          this.transform('translate3d(' + x + ',' + y + ',' + z + ')', node);
        }

        /**
         * Removes an item from an array, if it exists.
         *
         * If the array is specified by path, a change notification is
         * generated, so that observers, data bindings and computed
         * properties watching that path can update.
         *
         * If the array is passed directly, **no change
         * notification is generated**.
         *
         * @param {string | !Array<number|string>} arrayOrPath Path to array from
         *     which to remove the item
         *   (or the array itself).
         * @param {*} item Item to remove.
         * @return {Array} Array containing item removed.
         * @override
         */
        arrayDelete(arrayOrPath, item) {
          let index;
          if (Array.isArray(arrayOrPath)) {
            index = arrayOrPath.indexOf(item);
            if (index >= 0) {
              return arrayOrPath.splice(index, 1);
            }
          } else {
            let arr = get(this, arrayOrPath);
            index = arr.indexOf(item);
            if (index >= 0) {
              return this.splice(arrayOrPath, index, 1);
            }
          }
          return null;
        }

        // logging

        /**
         * Facades `console.log`/`warn`/`error` as override point.
         *
         * @param {string} level One of 'log', 'warn', 'error'
         * @param {Array} args Array of strings or objects to log
         * @return {void}
         * @override
         */
        _logger(level, args) {
          // accept ['foo', 'bar'] and [['foo', 'bar']]
          if (Array.isArray(args) && args.length === 1 && Array.isArray(args[0])) {
            args = args[0];
          }
          switch(level) {
            case 'log':
            case 'warn':
            case 'error':
              console[level](...args);
          }
        }

        /**
         * Facades `console.log` as an override point.
         *
         * @param {...*} args Array of strings or objects to log
         * @return {void}
         * @override
         */
        _log(...args) {
          this._logger('log', args);
        }

        /**
         * Facades `console.warn` as an override point.
         *
         * @param {...*} args Array of strings or objects to log
         * @return {void}
         * @override
         */
        _warn(...args) {
          this._logger('warn', args);
        }

        /**
         * Facades `console.error` as an override point.
         *
         * @param {...*} args Array of strings or objects to log
         * @return {void}
         * @override
         */
        _error(...args) {
          this._logger('error', args);
        }

        /**
         * Formats a message using the element type an a method name.
         *
         * @param {string} methodName Method name to associate with message
         * @param {...*} args Array of strings or objects to log
         * @return {Array} Array with formatting information for `console`
         *   logging.
         * @override
         */
        _logf(methodName, ...args) {
          return ['[%s::%s]', this.is, methodName, ...args];
        }

      }

      LegacyElement.prototype.is = '';

      return LegacyElement;
    });

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    const lifecycleProps = {
      attached: true,
      detached: true,
      ready: true,
      created: true,
      beforeRegister: true,
      registered: true,
      attributeChanged: true,
      listeners: true,
      hostAttributes: true
    };

    const excludeOnInfo = {
      attached: true,
      detached: true,
      ready: true,
      created: true,
      beforeRegister: true,
      registered: true,
      attributeChanged: true,
      behaviors: true,
      _noAccessors: true
    };

    const excludeOnBehaviors = Object.assign({
      listeners: true,
      hostAttributes: true,
      properties: true,
      observers: true,
    }, excludeOnInfo);

    function copyProperties(source, target, excludeProps) {
      const noAccessors = source._noAccessors;
      const propertyNames = Object.getOwnPropertyNames(source);
      for (let i = 0; i < propertyNames.length; i++) {
        let p = propertyNames[i];
        if (p in excludeProps) {
          continue;
        }
        if (noAccessors) {
          target[p] = source[p];
        } else {
          let pd = Object.getOwnPropertyDescriptor(source, p);
          if (pd) {
            // ensure property is configurable so that a later behavior can
            // re-configure it.
            pd.configurable = true;
            Object.defineProperty(target, p, pd);
          }
        }
      }
    }

    // NOTE:
    // 1.x
    // Behaviors were mixed in *in reverse order* and de-duped on the fly.
    // The rule was that behavior properties were copied onto the element
    // prototype if and only if the property did not already exist.
    // Given: Polymer{ behaviors: [A, B, C, A, B]}, property copy order was:
    // (1), B, (2), A, (3) C. This means prototype properties win over
    // B properties win over A win over C. This mirrors what would happen
    // with inheritance if element extended B extended A extended C.
    //
    // Again given, Polymer{ behaviors: [A, B, C, A, B]}, the resulting
    // `behaviors` array was [C, A, B].
    // Behavior lifecycle methods were called in behavior array order
    // followed by the element, e.g. (1) C.created, (2) A.created,
    // (3) B.created, (4) element.created. There was no support for
    // super, and "super-behavior" methods were callable only by name).
    //
    // 2.x
    // Behaviors are made into proper mixins which live in the
    // element's prototype chain. Behaviors are placed in the element prototype
    // eldest to youngest and de-duped youngest to oldest:
    // So, first [A, B, C, A, B] becomes [C, A, B] then,
    // the element prototype becomes (oldest) (1) PolymerElement, (2) class(C),
    // (3) class(A), (4) class(B), (5) class(Polymer({...})).
    // Result:
    // This means element properties win over B properties win over A win
    // over C. (same as 1.x)
    // If lifecycle is called (super then me), order is
    // (1) C.created, (2) A.created, (3) B.created, (4) element.created
    // (again same as 1.x)
    function applyBehaviors(proto, behaviors, lifecycle) {
      for (let i=0; i<behaviors.length; i++) {
        applyInfo(proto, behaviors[i], lifecycle, excludeOnBehaviors);
      }
    }

    function applyInfo(proto, info, lifecycle, excludeProps) {
      copyProperties(info, proto, excludeProps);
      for (let p in lifecycleProps) {
        if (info[p]) {
          lifecycle[p] = lifecycle[p] || [];
          lifecycle[p].push(info[p]);
        }
      }
    }

    /**
     * @param {Array} behaviors List of behaviors to flatten.
     * @param {Array=} list Target list to flatten behaviors into.
     * @param {Array=} exclude List of behaviors to exclude from the list.
     * @return {!Array} Returns the list of flattened behaviors.
     */
    function flattenBehaviors(behaviors, list, exclude) {
      list = list || [];
      for (let i=behaviors.length-1; i >= 0; i--) {
        let b = behaviors[i];
        if (b) {
          if (Array.isArray(b)) {
            flattenBehaviors(b, list);
          } else {
            // dedup
            if (list.indexOf(b) < 0 && (!exclude || exclude.indexOf(b) < 0)) {
              list.unshift(b);
            }
          }
        } else {
          console.warn('behavior is null, check for missing or 404 import');
        }
      }
      return list;
    }

    /**
     * Copies property descriptors from source to target, overwriting all fields
     * of any previous descriptor for a property *except* for `value`, which is
     * merged in from the target if it does not exist on the source.
     *
     * @param {*} target Target properties object
     * @param {*} source Source properties object
     */
    function mergeProperties(target, source) {
      for (const p in source) {
        const targetInfo = target[p];
        const sourceInfo = source[p];
        if (!('value' in sourceInfo) && targetInfo && ('value' in targetInfo)) {
          target[p] = Object.assign({value: targetInfo.value}, sourceInfo);
        } else {
          target[p] = sourceInfo;
        }
      }
    }

    /* Note about construction and extension of legacy classes.
      [Changed in Q4 2018 to optimize performance.]

      When calling `Polymer` or `mixinBehaviors`, the generated class below is
      made. The list of behaviors was previously made into one generated class per
      behavior, but this is no longer the case as behaviors are now called
      manually. Note, there may *still* be multiple generated classes in the
      element's prototype chain if extension is used with `mixinBehaviors`.

      The generated class is directly tied to the info object and behaviors
      used to create it. That list of behaviors is filtered so it's only the
      behaviors not active on the superclass. In order to call through to the
      entire list of lifecycle methods, it's important to call `super`.

      The element's `properties` and `observers` are controlled via the finalization
      mechanism provided by `PropertiesMixin`. `Properties` and `observers` are
      collected by manually traversing the prototype chain and merging.

      To limit changes, the `_registered` method is called via `_initializeProperties`
      and not `_finalizeClass`.

    */
    /**
     * @param {!PolymerInit} info Polymer info object
     * @param {function(new:HTMLElement)} Base base class to extend with info object
     * @param {Object=} behaviors behaviors to copy into the element
     * @return {function(new:HTMLElement)} Generated class
     * @suppress {checkTypes}
     * @private
     */
    function GenerateClassFromInfo(info, Base, behaviors) {

      // manages behavior and lifecycle processing (filled in after class definition)
      let behaviorList;
      const lifecycle = {};

      /** @private */
      class PolymerGenerated extends Base {

        // explicitly not calling super._finalizeClass
        /** @nocollapse */
        static _finalizeClass() {
          // if calling via a subclass that hasn't been generated, pass through to super
          if (!this.hasOwnProperty(JSCompiler_renameProperty('generatedFrom', this))) {
            // TODO(https://github.com/google/closure-compiler/issues/3240):
            //     Change back to just super.methodCall()
            Base._finalizeClass.call(this);
          } else {
            // interleave properties and observers per behavior and `info`
            if (behaviorList) {
              for (let i=0, b; i < behaviorList.length; i++) {
                b = behaviorList[i];
                if (b.properties) {
                  this.createProperties(b.properties);
                }
                if (b.observers) {
                  this.createObservers(b.observers, b.properties);
                }
              }
            }
            if (info.properties) {
              this.createProperties(info.properties);
            }
            if (info.observers) {
              this.createObservers(info.observers, info.properties);
            }
            // make sure to prepare the element template
            this._prepareTemplate();
          }
        }

        /** @nocollapse */
        static get properties() {
          const properties = {};
          if (behaviorList) {
            for (let i=0; i < behaviorList.length; i++) {
              mergeProperties(properties, behaviorList[i].properties);
            }
          }
          mergeProperties(properties, info.properties);
          return properties;
        }

        /** @nocollapse */
        static get observers() {
          let observers = [];
          if (behaviorList) {
            for (let i=0, b; i < behaviorList.length; i++) {
              b = behaviorList[i];
              if (b.observers) {
                observers = observers.concat(b.observers);
              }
            }
          }
          if (info.observers) {
            observers = observers.concat(info.observers);
          }
          return observers;
        }

        /**
         * @return {void}
         */
        created() {
          super.created();
          const list = lifecycle.created;
          if (list) {
            for (let i=0; i < list.length; i++) {
              list[i].call(this);
            }
          }
        }

        /**
         * @return {void}
         */
        _registered() {
          /* NOTE: `beforeRegister` is called here for bc, but the behavior
            is different than in 1.x. In 1.0, the method was called *after*
            mixing prototypes together but *before* processing of meta-objects.
            However, dynamic effects can still be set here and can be done either
            in `beforeRegister` or `registered`. It is no longer possible to set
            `is` in `beforeRegister` as you could in 1.x.
          */
          // only proceed if the generated class' prototype has not been registered.
          const generatedProto = PolymerGenerated.prototype;
          if (!generatedProto.hasOwnProperty('__hasRegisterFinished')) {
            generatedProto.__hasRegisterFinished = true;
            // ensure superclass is registered first.
            super._registered();
            // copy properties onto the generated class lazily if we're optimizing,
            if (legacyOptimizations) {
              copyPropertiesToProto(generatedProto);
            }
            // make sure legacy lifecycle is called on the *element*'s prototype
            // and not the generated class prototype; if the element has been
            // extended, these are *not* the same.
            const proto = Object.getPrototypeOf(this);
            let list = lifecycle.beforeRegister;
            if (list) {
              for (let i=0; i < list.length; i++) {
                list[i].call(proto);
              }
            }
            list = lifecycle.registered;
            if (list) {
              for (let i=0; i < list.length; i++) {
                list[i].call(proto);
              }
            }
          }
        }

        /**
         * @return {void}
         */
        _applyListeners() {
          super._applyListeners();
          const list = lifecycle.listeners;
          if (list) {
            for (let i=0; i < list.length; i++) {
              const listeners = list[i];
              if (listeners) {
                for (let l in listeners) {
                  this._addMethodEventListenerToNode(this, l, listeners[l]);
                }
              }
            }
          }
        }

        // note: exception to "super then me" rule;
        // do work before calling super so that super attributes
        // only apply if not already set.
        /**
         * @return {void}
         */
        _ensureAttributes() {
          const list = lifecycle.hostAttributes;
          if (list) {
            for (let i=list.length-1; i >= 0; i--) {
              const hostAttributes = list[i];
              for (let a in hostAttributes) {
                  this._ensureAttribute(a, hostAttributes[a]);
                }
            }
          }
          super._ensureAttributes();
        }

        /**
         * @return {void}
         */
        ready() {
          super.ready();
          let list = lifecycle.ready;
          if (list) {
            for (let i=0; i < list.length; i++) {
              list[i].call(this);
            }
          }
        }

        /**
         * @return {void}
         */
        attached() {
          super.attached();
          let list = lifecycle.attached;
          if (list) {
            for (let i=0; i < list.length; i++) {
              list[i].call(this);
            }
          }
        }

        /**
         * @return {void}
         */
        detached() {
          super.detached();
          let list = lifecycle.detached;
          if (list) {
            for (let i=0; i < list.length; i++) {
              list[i].call(this);
            }
          }
        }

        /**
         * Implements native Custom Elements `attributeChangedCallback` to
         * set an attribute value to a property via `_attributeToProperty`.
         *
         * @param {string} name Name of attribute that changed
         * @param {?string} old Old attribute value
         * @param {?string} value New attribute value
         * @return {void}
         */
        attributeChanged(name, old, value) {
          super.attributeChanged();
          let list = lifecycle.attributeChanged;
          if (list) {
            for (let i=0; i < list.length; i++) {
              list[i].call(this, name, old, value);
            }
          }
        }
      }

      // apply behaviors, note actual copying is done lazily at first instance creation
      if (behaviors) {
        // NOTE: ensure the behavior is extending a class with
        // legacy element api. This is necessary since behaviors expect to be able
        // to access 1.x legacy api.
        if (!Array.isArray(behaviors)) {
          behaviors = [behaviors];
        }
        let superBehaviors = Base.prototype.behaviors;
        // get flattened, deduped list of behaviors *not* already on super class
        behaviorList = flattenBehaviors(behaviors, null, superBehaviors);
        PolymerGenerated.prototype.behaviors = superBehaviors ?
          superBehaviors.concat(behaviors) : behaviorList;
      }

      const copyPropertiesToProto = (proto) => {
        if (behaviorList) {
          applyBehaviors(proto, behaviorList, lifecycle);
        }
        applyInfo(proto, info, lifecycle, excludeOnInfo);
      };

      // copy properties if we're not optimizing
      if (!legacyOptimizations) {
        copyPropertiesToProto(PolymerGenerated.prototype);
      }

      PolymerGenerated.generatedFrom = info;

      return PolymerGenerated;
    }

    /**
     * Generates a class that extends `LegacyElement` based on the
     * provided info object.  Metadata objects on the `info` object
     * (`properties`, `observers`, `listeners`, `behaviors`, `is`) are used
     * for Polymer's meta-programming systems, and any functions are copied
     * to the generated class.
     *
     * Valid "metadata" values are as follows:
     *
     * `is`: String providing the tag name to register the element under. In
     * addition, if a `dom-module` with the same id exists, the first template
     * in that `dom-module` will be stamped into the shadow root of this element,
     * with support for declarative event listeners (`on-...`), Polymer data
     * bindings (`[[...]]` and `{{...}}`), and id-based node finding into
     * `this.$`.
     *
     * `properties`: Object describing property-related metadata used by Polymer
     * features (key: property names, value: object containing property metadata).
     * Valid keys in per-property metadata include:
     * - `type` (String|Number|Object|Array|...): Used by
     *   `attributeChangedCallback` to determine how string-based attributes
     *   are deserialized to JavaScript property values.
     * - `notify` (boolean): Causes a change in the property to fire a
     *   non-bubbling event called `<property>-changed`. Elements that have
     *   enabled two-way binding to the property use this event to observe changes.
     * - `readOnly` (boolean): Creates a getter for the property, but no setter.
     *   To set a read-only property, use the private setter method
     *   `_setProperty(property, value)`.
     * - `observer` (string): Observer method name that will be called when
     *   the property changes. The arguments of the method are
     *   `(value, previousValue)`.
     * - `computed` (string): String describing method and dependent properties
     *   for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
     *   Computed properties are read-only by default and can only be changed
     *   via the return value of the computing method.
     *
     * `observers`: Array of strings describing multi-property observer methods
     *  and their dependent properties (e.g. `'observeABC(a, b, c)'`).
     *
     * `listeners`: Object describing event listeners to be added to each
     *  instance of this element (key: event name, value: method name).
     *
     * `behaviors`: Array of additional `info` objects containing metadata
     * and callbacks in the same format as the `info` object here which are
     * merged into this element.
     *
     * `hostAttributes`: Object listing attributes to be applied to the host
     *  once created (key: attribute name, value: attribute value).  Values
     *  are serialized based on the type of the value.  Host attributes should
     *  generally be limited to attributes such as `tabIndex` and `aria-...`.
     *  Attributes in `hostAttributes` are only applied if a user-supplied
     *  attribute is not already present (attributes in markup override
     *  `hostAttributes`).
     *
     * In addition, the following Polymer-specific callbacks may be provided:
     * - `registered`: called after first instance of this element,
     * - `created`: called during `constructor`
     * - `attached`: called during `connectedCallback`
     * - `detached`: called during `disconnectedCallback`
     * - `ready`: called before first `attached`, after all properties of
     *   this element have been propagated to its template and all observers
     *   have run
     *
     * @param {!PolymerInit} info Object containing Polymer metadata and functions
     *   to become class methods.
     * @template T
     * @param {function(T):T} mixin Optional mixin to apply to legacy base class
     *   before extending with Polymer metaprogramming.
     * @return {function(new:HTMLElement)} Generated class
     */
    const Class = function(info, mixin) {
      if (!info) {
        console.warn('Polymer.Class requires `info` argument');
      }
      let klass = mixin ? mixin(LegacyElementMixin(HTMLElement)) :
          LegacyElementMixin(HTMLElement);
      klass = GenerateClassFromInfo(info, klass, info.behaviors);
      // decorate klass with registration info
      klass.is = klass.prototype.is = info.is;
      return klass;
    };

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * Legacy class factory and registration helper for defining Polymer
     * elements.
     *
     * This method is equivalent to
     *
     *     import {Class} from '@polymer/polymer/lib/legacy/class.js';
     *     customElements.define(info.is, Class(info));
     *
     * See `Class` for details on valid legacy metadata format for `info`.
     *
     * @global
     * @override
     * @function
     * @param {!PolymerInit} info Object containing Polymer metadata and functions
     *   to become class methods.
     * @return {function(new: HTMLElement)} Generated class
     * @suppress {duplicate, invalidCasts, checkTypes}
     */
    const Polymer = function(info) {
      // if input is a `class` (aka a function with a prototype), use the prototype
      // remember that the `constructor` will never be called
      let klass;
      if (typeof info === 'function') {
        klass = info;
      } else {
        klass = Polymer.Class(info);
      }
      customElements.define(klass.is, /** @type {!HTMLElement} */(klass));
      return klass;
    };

    Polymer.Class = Class;

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    // Common implementation for mixin & behavior
    function mutablePropertyChange(inst, property, value, old, mutableData) {
      let isObject;
      if (mutableData) {
        isObject = (typeof value === 'object' && value !== null);
        // Pull `old` for Objects from temp cache, but treat `null` as a primitive
        if (isObject) {
          old = inst.__dataTemp[property];
        }
      }
      // Strict equality check, but return false for NaN===NaN
      let shouldChange = (old !== value && (old === old || value === value));
      // Objects are stored in temporary cache (cleared at end of
      // turn), which is used for dirty-checking
      if (isObject && shouldChange) {
        inst.__dataTemp[property] = value;
      }
      return shouldChange;
    }

    /**
     * Element class mixin to skip strict dirty-checking for objects and arrays
     * (always consider them to be "dirty"), for use on elements utilizing
     * `PropertyEffects`
     *
     * By default, `PropertyEffects` performs strict dirty checking on
     * objects, which means that any deep modifications to an object or array will
     * not be propagated unless "immutable" data patterns are used (i.e. all object
     * references from the root to the mutation were changed).
     *
     * Polymer also provides a proprietary data mutation and path notification API
     * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
     * mutation and notification of deep changes in an object graph to all elements
     * bound to the same object graph.
     *
     * In cases where neither immutable patterns nor the data mutation API can be
     * used, applying this mixin will cause Polymer to skip dirty checking for
     * objects and arrays (always consider them to be "dirty").  This allows a
     * user to make a deep modification to a bound object graph, and then either
     * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
     * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
     * elements that wish to be updated based on deep mutations must apply this
     * mixin or otherwise skip strict dirty checking for objects/arrays.
     * Specifically, any elements in the binding tree between the source of a
     * mutation and the consumption of it must apply this mixin or enable the
     * `OptionalMutableData` mixin.
     *
     * In order to make the dirty check strategy configurable, see
     * `OptionalMutableData`.
     *
     * Note, the performance characteristics of propagating large object graphs
     * will be worse as opposed to using strict dirty checking with immutable
     * patterns or Polymer's path notification API.
     *
     * @mixinFunction
     * @polymer
     * @summary Element class mixin to skip strict dirty-checking for objects
     *   and arrays
     * @template T
     * @param {function(new:T)} superClass Class to apply mixin to.
     * @return {function(new:T)} superClass with mixin applied.
     */
    const MutableData = dedupingMixin(superClass => {

      /**
       * @polymer
       * @mixinClass
       * @implements {Polymer_MutableData}
       */
      class MutableData extends superClass {
        /**
         * Overrides `PropertyEffects` to provide option for skipping
         * strict equality checking for Objects and Arrays.
         *
         * This method pulls the value to dirty check against from the `__dataTemp`
         * cache (rather than the normal `__data` cache) for Objects.  Since the temp
         * cache is cleared at the end of a turn, this implementation allows
         * side-effects of deep object changes to be processed by re-setting the
         * same object (using the temp cache as an in-turn backstop to prevent
         * cycles due to 2-way notification).
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         * @protected
         */
        _shouldPropertyChange(property, value, old) {
          return mutablePropertyChange(this, property, value, old, true);
        }

      }

      return MutableData;

    });

    /**
     * Element class mixin to add the optional ability to skip strict
     * dirty-checking for objects and arrays (always consider them to be
     * "dirty") by setting a `mutable-data` attribute on an element instance.
     *
     * By default, `PropertyEffects` performs strict dirty checking on
     * objects, which means that any deep modifications to an object or array will
     * not be propagated unless "immutable" data patterns are used (i.e. all object
     * references from the root to the mutation were changed).
     *
     * Polymer also provides a proprietary data mutation and path notification API
     * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
     * mutation and notification of deep changes in an object graph to all elements
     * bound to the same object graph.
     *
     * In cases where neither immutable patterns nor the data mutation API can be
     * used, applying this mixin will allow Polymer to skip dirty checking for
     * objects and arrays (always consider them to be "dirty").  This allows a
     * user to make a deep modification to a bound object graph, and then either
     * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
     * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
     * elements that wish to be updated based on deep mutations must apply this
     * mixin or otherwise skip strict dirty checking for objects/arrays.
     * Specifically, any elements in the binding tree between the source of a
     * mutation and the consumption of it must enable this mixin or apply the
     * `MutableData` mixin.
     *
     * While this mixin adds the ability to forgo Object/Array dirty checking,
     * the `mutableData` flag defaults to false and must be set on the instance.
     *
     * Note, the performance characteristics of propagating large object graphs
     * will be worse by relying on `mutableData: true` as opposed to using
     * strict dirty checking with immutable patterns or Polymer's path notification
     * API.
     *
     * @mixinFunction
     * @polymer
     * @summary Element class mixin to optionally skip strict dirty-checking
     *   for objects and arrays
     */
    const OptionalMutableData = dedupingMixin(superClass => {

      /**
       * @mixinClass
       * @polymer
       * @implements {Polymer_OptionalMutableData}
       */
      class OptionalMutableData extends superClass {

        /** @nocollapse */
        static get properties() {
          return {
            /**
             * Instance-level flag for configuring the dirty-checking strategy
             * for this element.  When true, Objects and Arrays will skip dirty
             * checking, otherwise strict equality checking will be used.
             */
            mutableData: Boolean
          };
        }

        /**
         * Overrides `PropertyEffects` to provide option for skipping
         * strict equality checking for Objects and Arrays.
         *
         * When `this.mutableData` is true on this instance, this method
         * pulls the value to dirty check against from the `__dataTemp` cache
         * (rather than the normal `__data` cache) for Objects.  Since the temp
         * cache is cleared at the end of a turn, this implementation allows
         * side-effects of deep object changes to be processed by re-setting the
         * same object (using the temp cache as an in-turn backstop to prevent
         * cycles due to 2-way notification).
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         * @protected
         */
        _shouldPropertyChange(property, value, old) {
          return mutablePropertyChange(this, property, value, old, this.mutableData);
        }
      }

      return OptionalMutableData;

    });

    // Export for use by legacy behavior
    MutableData._mutablePropertyChange = mutablePropertyChange;

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    // Base class for HTMLTemplateElement extension that has property effects
    // machinery for propagating host properties to children. This is an ES5
    // class only because Babel (incorrectly) requires super() in the class
    // constructor even though no `this` is used and it returns an instance.
    let newInstance = null;

    /**
     * @constructor
     * @extends {HTMLTemplateElement}
     * @private
     */
    function HTMLTemplateElementExtension() { return newInstance; }
    HTMLTemplateElementExtension.prototype = Object.create(HTMLTemplateElement.prototype, {
      constructor: {
        value: HTMLTemplateElementExtension,
        writable: true
      }
    });

    /**
     * @constructor
     * @implements {Polymer_PropertyEffects}
     * @extends {HTMLTemplateElementExtension}
     * @private
     */
    const DataTemplate = PropertyEffects(HTMLTemplateElementExtension);

    /**
     * @constructor
     * @implements {Polymer_MutableData}
     * @extends {DataTemplate}
     * @private
     */
    const MutableDataTemplate = MutableData(DataTemplate);

    // Applies a DataTemplate subclass to a <template> instance
    function upgradeTemplate(template, constructor) {
      newInstance = template;
      Object.setPrototypeOf(template, constructor.prototype);
      new constructor();
      newInstance = null;
    }

    /**
     * Base class for TemplateInstance.
     * @constructor
     * @extends {HTMLElement}
     * @implements {Polymer_PropertyEffects}
     * @private
     */
    const templateInstanceBase = PropertyEffects(
        // This cast shouldn't be neccessary, but Closure doesn't understand that
        // "class {}" is a constructor function.
        /** @type {function(new:Object)} */(class {}));

    /**
     * @polymer
     * @customElement
     * @appliesMixin PropertyEffects
     * @unrestricted
     */
    class TemplateInstanceBase extends templateInstanceBase {
      constructor(props) {
        super();
        this._configureProperties(props);
        /** @type {!StampedTemplate} */
        this.root = this._stampTemplate(this.__dataHost);
        // Save list of stamped children
        let children = [];
        /** @suppress {invalidCasts} */
        this.children = /** @type {!NodeList} */ (children);
        // Polymer 1.x did not use `Polymer.dom` here so not bothering.
        for (let n = this.root.firstChild; n; n=n.nextSibling) {
          children.push(n);
          n.__templatizeInstance = this;
        }
        if (this.__templatizeOwner &&
          this.__templatizeOwner.__hideTemplateChildren__) {
          this._showHideChildren(true);
        }
        // Flush props only when props are passed if instance props exist
        // or when there isn't instance props.
        let options = this.__templatizeOptions;
        if ((props && options.instanceProps) || !options.instanceProps) {
          this._enableProperties();
        }
      }
      /**
       * Configure the given `props` by calling `_setPendingProperty`. Also
       * sets any properties stored in `__hostProps`.
       * @private
       * @param {Object} props Object of property name-value pairs to set.
       * @return {void}
       */
      _configureProperties(props) {
        let options = this.__templatizeOptions;
        if (options.forwardHostProp) {
          for (let hprop in this.__hostProps) {
            this._setPendingProperty(hprop, this.__dataHost['_host_' + hprop]);
          }
        }
        // Any instance props passed in the constructor will overwrite host props;
        // normally this would be a user error but we don't specifically filter them
        for (let iprop in props) {
          this._setPendingProperty(iprop, props[iprop]);
        }
      }
      /**
       * Forwards a host property to this instance.  This method should be
       * called on instances from the `options.forwardHostProp` callback
       * to propagate changes of host properties to each instance.
       *
       * Note this method enqueues the change, which are flushed as a batch.
       *
       * @param {string} prop Property or path name
       * @param {*} value Value of the property to forward
       * @return {void}
       */
      forwardHostProp(prop, value) {
        if (this._setPendingPropertyOrPath(prop, value, false, true)) {
          this.__dataHost._enqueueClient(this);
        }
      }

      /**
       * Override point for adding custom or simulated event handling.
       *
       * @override
       * @param {!Node} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to add
       * @return {void}
       */
      _addEventListenerToNode(node, eventName, handler) {
        if (this._methodHost && this.__templatizeOptions.parentModel) {
          // If this instance should be considered a parent model, decorate
          // events this template instance as `model`
          this._methodHost._addEventListenerToNode(node, eventName, (e) => {
            e.model = this;
            handler(e);
          });
        } else {
          // Otherwise delegate to the template's host (which could be)
          // another template instance
          let templateHost = this.__dataHost.__dataHost;
          if (templateHost) {
            templateHost._addEventListenerToNode(node, eventName, handler);
          }
        }
      }
      /**
       * Shows or hides the template instance top level child elements. For
       * text nodes, `textContent` is removed while "hidden" and replaced when
       * "shown."
       * @param {boolean} hide Set to true to hide the children;
       * set to false to show them.
       * @return {void}
       * @protected
       */
      _showHideChildren(hide) {
        let c = this.children;
        for (let i=0; i<c.length; i++) {
          let n = c[i];
          // Ignore non-changes
          if (Boolean(hide) != Boolean(n.__hideTemplateChildren__)) {
            if (n.nodeType === Node.TEXT_NODE) {
              if (hide) {
                n.__polymerTextContent__ = n.textContent;
                n.textContent = '';
              } else {
                n.textContent = n.__polymerTextContent__;
              }
            // remove and replace slot
            } else if (n.localName === 'slot') {
              if (hide) {
                n.__polymerReplaced__ = document.createComment('hidden-slot');
                wrap$1(wrap$1(n).parentNode).replaceChild(n.__polymerReplaced__, n);
              } else {
                const replace = n.__polymerReplaced__;
                if (replace) {
                  wrap$1(wrap$1(replace).parentNode).replaceChild(n, replace);
                }
              }
            }

            else if (n.style) {
              if (hide) {
                n.__polymerDisplay__ = n.style.display;
                n.style.display = 'none';
              } else {
                n.style.display = n.__polymerDisplay__;
              }
            }
          }
          n.__hideTemplateChildren__ = hide;
          if (n._showHideChildren) {
            n._showHideChildren(hide);
          }
        }
      }
      /**
       * Overrides default property-effects implementation to intercept
       * textContent bindings while children are "hidden" and cache in
       * private storage for later retrieval.
       *
       * @override
       * @param {!Node} node The node to set a property on
       * @param {string} prop The property to set
       * @param {*} value The value to set
       * @return {void}
       * @protected
       */
      _setUnmanagedPropertyToNode(node, prop, value) {
        if (node.__hideTemplateChildren__ &&
            node.nodeType == Node.TEXT_NODE && prop == 'textContent') {
          node.__polymerTextContent__ = value;
        } else {
          super._setUnmanagedPropertyToNode(node, prop, value);
        }
      }
      /**
       * Find the parent model of this template instance.  The parent model
       * is either another templatize instance that had option `parentModel: true`,
       * or else the host element.
       *
       * @return {!Polymer_PropertyEffects} The parent model of this instance
       */
      get parentModel() {
        let model = this.__parentModel;
        if (!model) {
          let options;
          model = this;
          do {
            // A template instance's `__dataHost` is a <template>
            // `model.__dataHost.__dataHost` is the template's host
            model = model.__dataHost.__dataHost;
          } while ((options = model.__templatizeOptions) && !options.parentModel);
          this.__parentModel = model;
        }
        return model;
      }

      /**
       * Stub of HTMLElement's `dispatchEvent`, so that effects that may
       * dispatch events safely no-op.
       *
       * @param {Event} event Event to dispatch
       * @return {boolean} Always true.
       * @override
       */
       dispatchEvent(event) { // eslint-disable-line no-unused-vars
         return true;
      }
    }

    /** @type {!DataTemplate} */
    TemplateInstanceBase.prototype.__dataHost;
    /** @type {!TemplatizeOptions} */
    TemplateInstanceBase.prototype.__templatizeOptions;
    /** @type {!Polymer_PropertyEffects} */
    TemplateInstanceBase.prototype._methodHost;
    /** @type {!Object} */
    TemplateInstanceBase.prototype.__templatizeOwner;
    /** @type {!Object} */
    TemplateInstanceBase.prototype.__hostProps;

    /**
     * @constructor
     * @extends {TemplateInstanceBase}
     * @implements {Polymer_MutableData}
     * @private
     */
    const MutableTemplateInstanceBase = MutableData(
        // This cast shouldn't be necessary, but Closure doesn't seem to understand
        // this constructor.
        /** @type {function(new:TemplateInstanceBase)} */(TemplateInstanceBase));

    function findMethodHost(template) {
      // Technically this should be the owner of the outermost template.
      // In shadow dom, this is always getRootNode().host, but we can
      // approximate this via cooperation with our dataHost always setting
      // `_methodHost` as long as there were bindings (or id's) on this
      // instance causing it to get a dataHost.
      let templateHost = template.__dataHost;
      return templateHost && templateHost._methodHost || templateHost;
    }

    /* eslint-disable valid-jsdoc */
    /**
     * @suppress {missingProperties} class.prototype is not defined for some reason
     */
    function createTemplatizerClass(template, templateInfo, options) {
      /**
       * @constructor
       * @extends {TemplateInstanceBase}
       */
      let templatizerBase = options.mutableData ?
        MutableTemplateInstanceBase : TemplateInstanceBase;

      // Affordance for global mixins onto TemplatizeInstance
      if (templatize.mixin) {
        templatizerBase = templatize.mixin(templatizerBase);
      }

      /**
       * Anonymous class created by the templatize
       * @constructor
       * @private
       */
      let klass = class extends templatizerBase { };
      /** @override */
      klass.prototype.__templatizeOptions = options;
      klass.prototype._bindTemplate(template);
      addNotifyEffects(klass, template, templateInfo, options);
      return klass;
    }

    /**
     * Adds propagate effects from the template to the template instance for
     * properties that the host binds to the template using the `_host_` prefix.
     * 
     * @suppress {missingProperties} class.prototype is not defined for some reason
     */
    function addPropagateEffects(template, templateInfo, options) {
      let userForwardHostProp = options.forwardHostProp;
      if (userForwardHostProp && templateInfo.hasHostProps) {
        // Provide data API and property effects on memoized template class
        let klass = templateInfo.templatizeTemplateClass;
        if (!klass) {
          /**
           * @constructor
           * @extends {DataTemplate}
           */
          let templatizedBase = options.mutableData ? MutableDataTemplate : DataTemplate;
          /** @private */
          klass = templateInfo.templatizeTemplateClass =
            class TemplatizedTemplate extends templatizedBase {};
          // Add template - >instances effects
          // and host <- template effects
          let hostProps = templateInfo.hostProps;
          for (let prop in hostProps) {
            klass.prototype._addPropertyEffect('_host_' + prop,
              klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,
              {fn: createForwardHostPropEffect(prop, userForwardHostProp)});
            klass.prototype._createNotifyingProperty('_host_' + prop);
          }
        }
        upgradeTemplate(template, klass);
        // Mix any pre-bound data into __data; no need to flush this to
        // instances since they pull from the template at instance-time
        if (template.__dataProto) {
          // Note, generally `__dataProto` could be chained, but it's guaranteed
          // to not be since this is a vanilla template we just added effects to
          Object.assign(template.__data, template.__dataProto);
        }
        // Clear any pending data for performance
        template.__dataTemp = {};
        template.__dataPending = null;
        template.__dataOld = null;
        template._enableProperties();
      }
    }
    /* eslint-enable valid-jsdoc */

    function createForwardHostPropEffect(hostProp, userForwardHostProp) {
      return function forwardHostProp(template, prop, props) {
        userForwardHostProp.call(template.__templatizeOwner,
          prop.substring('_host_'.length), props[prop]);
      };
    }

    function addNotifyEffects(klass, template, templateInfo, options) {
      let hostProps = templateInfo.hostProps || {};
      for (let iprop in options.instanceProps) {
        delete hostProps[iprop];
        let userNotifyInstanceProp = options.notifyInstanceProp;
        if (userNotifyInstanceProp) {
          klass.prototype._addPropertyEffect(iprop,
            klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,
            {fn: createNotifyInstancePropEffect(iprop, userNotifyInstanceProp)});
        }
      }
      if (options.forwardHostProp && template.__dataHost) {
        for (let hprop in hostProps) {
          // As we're iterating hostProps in this function, note whether
          // there were any, for an optimization in addPropagateEffects
          if (!templateInfo.hasHostProps) {
            templateInfo.hasHostProps = true;
          }
          klass.prototype._addPropertyEffect(hprop,
            klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,
            {fn: createNotifyHostPropEffect()});
        }
      }
    }

    function createNotifyInstancePropEffect(instProp, userNotifyInstanceProp) {
      return function notifyInstanceProp(inst, prop, props) {
        userNotifyInstanceProp.call(inst.__templatizeOwner,
          inst, prop, props[prop]);
      };
    }

    function createNotifyHostPropEffect() {
      return function notifyHostProp(inst, prop, props) {
        inst.__dataHost._setPendingPropertyOrPath('_host_' + prop, props[prop], true, true);
      };
    }


    /**
     * Returns an anonymous `PropertyEffects` class bound to the
     * `<template>` provided.  Instancing the class will result in the
     * template being stamped into a document fragment stored as the instance's
     * `root` property, after which it can be appended to the DOM.
     *
     * Templates may utilize all Polymer data-binding features as well as
     * declarative event listeners.  Event listeners and inline computing
     * functions in the template will be called on the host of the template.
     *
     * The constructor returned takes a single argument dictionary of initial
     * property values to propagate into template bindings.  Additionally
     * host properties can be forwarded in, and instance properties can be
     * notified out by providing optional callbacks in the `options` dictionary.
     *
     * Valid configuration in `options` are as follows:
     *
     * - `forwardHostProp(property, value)`: Called when a property referenced
     *   in the template changed on the template's host. As this library does
     *   not retain references to templates instanced by the user, it is the
     *   templatize owner's responsibility to forward host property changes into
     *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
     *    method on the generated class should be called to forward host
     *   properties into the template to prevent unnecessary property-changed
     *   notifications. Any properties referenced in the template that are not
     *   defined in `instanceProps` will be notified up to the template's host
     *   automatically.
     * - `instanceProps`: Dictionary of property names that will be added
     *   to the instance by the templatize owner.  These properties shadow any
     *   host properties, and changes within the template to these properties
     *   will result in `notifyInstanceProp` being called.
     * - `mutableData`: When `true`, the generated class will skip strict
     *   dirty-checking for objects and arrays (always consider them to be
     *   "dirty").
     * - `notifyInstanceProp(instance, property, value)`: Called when
     *   an instance property changes.  Users may choose to call `notifyPath`
     *   on e.g. the owner to notify the change.
     * - `parentModel`: When `true`, events handled by declarative event listeners
     *   (`on-event="handler"`) will be decorated with a `model` property pointing
     *   to the template instance that stamped it.  It will also be returned
     *   from `instance.parentModel` in cases where template instance nesting
     *   causes an inner model to shadow an outer model.
     *
     * All callbacks are called bound to the `owner`. Any context
     * needed for the callbacks (such as references to `instances` stamped)
     * should be stored on the `owner` such that they can be retrieved via
     * `this`.
     *
     * When `options.forwardHostProp` is declared as an option, any properties
     * referenced in the template will be automatically forwarded from the host of
     * the `<template>` to instances, with the exception of any properties listed in
     * the `options.instanceProps` object.  `instanceProps` are assumed to be
     * managed by the owner of the instances, either passed into the constructor
     * or set after the fact.  Note, any properties passed into the constructor will
     * always be set to the instance (regardless of whether they would normally
     * be forwarded from the host).
     *
     * Note that `templatize()` can be run only once for a given `<template>`.
     * Further calls will result in an error. Also, there is a special
     * behavior if the template was duplicated through a mechanism such as
     * `<dom-repeat>` or `<test-fixture>`. In this case, all calls to
     * `templatize()` return the same class for all duplicates of a template.
     * The class returned from `templatize()` is generated only once using
     * the `options` from the first call. This means that any `options`
     * provided to subsequent calls will be ignored. Therefore, it is very
     * important not to close over any variables inside the callbacks. Also,
     * arrow functions must be avoided because they bind the outer `this`.
     * Inside the callbacks, any contextual information can be accessed
     * through `this`, which points to the `owner`.
     *
     * @param {!HTMLTemplateElement} template Template to templatize
     * @param {Polymer_PropertyEffects=} owner Owner of the template instances;
     *   any optional callbacks will be bound to this owner.
     * @param {Object=} options Options dictionary (see summary for details)
     * @return {function(new:TemplateInstanceBase, Object=)} Generated class bound
     *   to the template provided
     * @suppress {invalidCasts}
     */
    function templatize(template, owner, options) {
      // Under strictTemplatePolicy, the templatized element must be owned
      // by a (trusted) Polymer element, indicated by existence of _methodHost;
      // e.g. for dom-if & dom-repeat in main document, _methodHost is null
      if (strictTemplatePolicy && !findMethodHost(template)) {
        throw new Error('strictTemplatePolicy: template owner not trusted');
      }
      options = /** @type {!TemplatizeOptions} */(options || {});
      if (template.__templatizeOwner) {
        throw new Error('A <template> can only be templatized once');
      }
      template.__templatizeOwner = owner;
      const ctor = owner ? owner.constructor : TemplateInstanceBase;
      let templateInfo = ctor._parseTemplate(template);
      // Get memoized base class for the prototypical template, which
      // includes property effects for binding template & forwarding
      /**
       * @constructor
       * @extends {TemplateInstanceBase}
       */
      let baseClass = templateInfo.templatizeInstanceClass;
      if (!baseClass) {
        baseClass = createTemplatizerClass(template, templateInfo, options);
        templateInfo.templatizeInstanceClass = baseClass;
      }
      // Host property forwarding must be installed onto template instance
      addPropagateEffects(template, templateInfo, options);
      // Subclass base class and add reference for this specific template
      /** @private */
      let klass = class TemplateInstance extends baseClass {};
      /** @override */
      klass.prototype._methodHost = findMethodHost(template);
      /** @override */
      klass.prototype.__dataHost = /** @type {!DataTemplate} */ (template);
      /** @override */
      klass.prototype.__templatizeOwner = /** @type {!Object} */ (owner);
      /** @override */
      klass.prototype.__hostProps = templateInfo.hostProps;
      klass = /** @type {function(new:TemplateInstanceBase)} */(klass); //eslint-disable-line no-self-assign
      return klass;
    }

    /**
     * Returns the template "model" associated with a given element, which
     * serves as the binding scope for the template instance the element is
     * contained in. A template model is an instance of
     * `TemplateInstanceBase`, and should be used to manipulate data
     * associated with this template instance.
     *
     * Example:
     *
     *   let model = modelForElement(el);
     *   if (model.index < 10) {
     *     model.set('item.checked', true);
     *   }
     *
     * @param {HTMLTemplateElement} template The model will be returned for
     *   elements stamped from this template
     * @param {Node=} node Node for which to return a template model.
     * @return {TemplateInstanceBase} Template instance representing the
     *   binding scope for the element
     */
    function modelForElement(template, node) {
      let model;
      while (node) {
        // An element with a __templatizeInstance marks the top boundary
        // of a scope; walk up until we find one, and then ensure that
        // its __dataHost matches `this`, meaning this dom-repeat stamped it
        if ((model = node.__templatizeInstance)) {
          // Found an element stamped by another template; keep walking up
          // from its __dataHost
          if (model.__dataHost != template) {
            node = model.__dataHost;
          } else {
            return model;
          }
        } else {
          // Still in a template scope, keep going up until
          // a __templatizeInstance is found
          node = wrap$1(node).parentNode;
        }
      }
      return null;
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    let elementsHidden = false;

    /**
     * @return {boolean} True if elements will be hidden globally
     */
    function hideElementsGlobally() {
      if (legacyOptimizations && !useShadow) {
        if (!elementsHidden) {
          elementsHidden = true;
          const style = document.createElement('style');
          style.textContent = 'dom-bind,dom-if,dom-repeat{display:none;}';
          document.head.appendChild(style);
        }
        return true;
      }
      return false;
    }

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * @constructor
     * @extends {HTMLElement}
     * @implements {Polymer_PropertyEffects}
     * @implements {Polymer_OptionalMutableData}
     * @implements {Polymer_GestureEventListeners}
     * @private
     */
    const domBindBase =
      GestureEventListeners(
        OptionalMutableData(
          PropertyEffects(HTMLElement)));

    /**
     * Custom element to allow using Polymer's template features (data binding,
     * declarative event listeners, etc.) in the main document without defining
     * a new custom element.
     *
     * `<template>` tags utilizing bindings may be wrapped with the `<dom-bind>`
     * element, which will immediately stamp the wrapped template into the main
     * document and bind elements to the `dom-bind` element itself as the
     * binding scope.
     *
     * @polymer
     * @customElement
     * @appliesMixin PropertyEffects
     * @appliesMixin OptionalMutableData
     * @appliesMixin GestureEventListeners
     * @extends {domBindBase}
     * @summary Custom element to allow using Polymer's template features (data
     *   binding, declarative event listeners, etc.) in the main document.
     */
    class DomBind extends domBindBase {

      static get observedAttributes() { return ['mutable-data']; }

      constructor() {
        super();
        if (strictTemplatePolicy) {
          throw new Error(`strictTemplatePolicy: dom-bind not allowed`);
        }
        this.root = null;
        this.$ = null;
        this.__children = null;
      }

      /* eslint-disable no-unused-vars */
      /**
       * @override
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       */
      attributeChangedCallback(name, old, value, namespace) {
        // assumes only one observed attribute
        this.mutableData = true;
      }

      /**
       * @override
       * @return {void}
       */
      connectedCallback() {
        if (!hideElementsGlobally()) {
          this.style.display = 'none';
        }
        this.render();
      }

      /**
       * @override
       * @return {void}
       */
      disconnectedCallback() {
        this.__removeChildren();
      }

      __insertChildren() {
        wrap$1(wrap$1(this).parentNode).insertBefore(this.root, this);
      }

      __removeChildren() {
        if (this.__children) {
          for (let i=0; i<this.__children.length; i++) {
            this.root.appendChild(this.__children[i]);
          }
        }
      }

      /**
       * Forces the element to render its content. This is typically only
       * necessary to call if HTMLImports with the async attribute are used.
       * @return {void}
       */
      render() {
        let template;
        if (!this.__children) {
          template = /** @type {HTMLTemplateElement} */(template || this.querySelector('template'));
          if (!template) {
            // Wait until childList changes and template should be there by then
            let observer = new MutationObserver(() => {
              template = /** @type {HTMLTemplateElement} */(this.querySelector('template'));
              if (template) {
                observer.disconnect();
                this.render();
              } else {
                throw new Error('dom-bind requires a <template> child');
              }
            });
            observer.observe(this, {childList: true});
            return;
          }
          this.root = this._stampTemplate(
            /** @type {!HTMLTemplateElement} */(template));
          this.$ = this.root.$;
          this.__children = [];
          for (let n=this.root.firstChild; n; n=n.nextSibling) {
            this.__children[this.__children.length] = n;
          }
          this._enableProperties();
        }
        this.__insertChildren();
        this.dispatchEvent(new CustomEvent('dom-change', {
          bubbles: true,
          composed: true
        }));
      }

    }

    customElements.define('dom-bind', DomBind);

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * Class representing a static string value which can be used to filter
     * strings by asseting that they have been created via this class. The
     * `value` property returns the string passed to the constructor.
     */
    class LiteralString {
      constructor(string) {
        /** @type {string} */
        this.value = string.toString();
      }
      /**
       * @return {string} LiteralString string value
       * @override
       */
      toString() {
        return this.value;
      }
    }

    /**
     * @param {*} value Object to stringify into HTML
     * @return {string} HTML stringified form of `obj`
     */
    function literalValue(value) {
      if (value instanceof LiteralString) {
        return /** @type {!LiteralString} */(value).value;
      } else {
        throw new Error(
            `non-literal value passed to Polymer's htmlLiteral function: ${value}`
        );
      }
    }

    /**
     * @param {*} value Object to stringify into HTML
     * @return {string} HTML stringified form of `obj`
     */
    function htmlValue(value) {
      if (value instanceof HTMLTemplateElement) {
        return /** @type {!HTMLTemplateElement } */(value).innerHTML;
      } else if (value instanceof LiteralString) {
        return literalValue(value);
      } else {
        throw new Error(
            `non-template value passed to Polymer's html function: ${value}`);
      }
    }

    /**
     * A template literal tag that creates an HTML <template> element from the
     * contents of the string.
     *
     * This allows you to write a Polymer Template in JavaScript.
     *
     * Templates can be composed by interpolating `HTMLTemplateElement`s in
     * expressions in the JavaScript template literal. The nested template's
     * `innerHTML` is included in the containing template.  The only other
     * values allowed in expressions are those returned from `htmlLiteral`
     * which ensures only literal values from JS source ever reach the HTML, to
     * guard against XSS risks.
     *
     * All other values are disallowed in expressions to help prevent XSS
     * attacks; however, `htmlLiteral` can be used to compose static
     * string values into templates. This is useful to compose strings into
     * places that do not accept html, like the css text of a `style`
     * element.
     *
     * Example:
     *
     *     static get template() {
     *       return html`
     *         <style>:host{ content:"..." }</style>
     *         <div class="shadowed">${this.partialTemplate}</div>
     *         ${super.template}
     *       `;
     *     }
     *     static get partialTemplate() { return html`<span>Partial!</span>`; }
     *
     * @param {!ITemplateArray} strings Constant parts of tagged template literal
     * @param {...*} values Variable parts of tagged template literal
     * @return {!HTMLTemplateElement} Constructed HTMLTemplateElement
     */
    const html = function html(strings, ...values) {
      const template = /** @type {!HTMLTemplateElement} */(document.createElement('template'));
      template.innerHTML = values.reduce((acc, v, idx) =>
          acc + htmlValue(v) + strings[idx + 1], strings[0]);
      return template;
    };

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * Base class that provides the core API for Polymer's meta-programming
     * features including template stamping, data-binding, attribute deserialization,
     * and property change observation.
     *
     * @customElement
     * @polymer
     * @constructor
     * @implements {Polymer_ElementMixin}
     * @extends HTMLElement
     * @appliesMixin ElementMixin
     * @summary Custom element base class that provides the core API for Polymer's
     *   key meta-programming features including template stamping, data-binding,
     *   attribute deserialization, and property change observation
     */
    const PolymerElement = ElementMixin(HTMLElement);

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * @constructor
     * @implements {Polymer_OptionalMutableData}
     * @extends {PolymerElement}
     * @private
     */
    const domRepeatBase = OptionalMutableData(PolymerElement);

    /**
     * The `<dom-repeat>` element will automatically stamp and binds one instance
     * of template content to each object in a user-provided array.
     * `dom-repeat` accepts an `items` property, and one instance of the template
     * is stamped for each item into the DOM at the location of the `dom-repeat`
     * element.  The `item` property will be set on each instance's binding
     * scope, thus templates should bind to sub-properties of `item`.
     *
     * Example:
     *
     * ```html
     * <dom-module id="employee-list">
     *
     *   <template>
     *
     *     <div> Employee list: </div>
     *     <dom-repeat items="{{employees}}">
     *       <template>
     *         <div>First name: <span>{{item.first}}</span></div>
     *         <div>Last name: <span>{{item.last}}</span></div>
     *       </template>
     *     </dom-repeat>
     *
     *   </template>
     *
     * </dom-module>
     * ```
     *
     * With the following custom element definition:
     *
     * ```js
     * class EmployeeList extends PolymerElement {
     *   static get is() { return 'employee-list'; }
     *   static get properties() {
     *     return {
     *       employees: {
     *         value() {
     *           return [
     *             {first: 'Bob', last: 'Smith'},
     *             {first: 'Sally', last: 'Johnson'},
     *             ...
     *           ];
     *         }
     *       }
     *     };
     *   }
     * }
     * ```
     *
     * Notifications for changes to items sub-properties will be forwarded to template
     * instances, which will update via the normal structured data notification system.
     *
     * Mutations to the `items` array itself should be made using the Array
     * mutation API's on the PropertyEffects mixin (`push`, `pop`, `splice`,
     * `shift`, `unshift`), and template instances will be kept in sync with the
     * data in the array.
     *
     * Events caught by event handlers within the `dom-repeat` template will be
     * decorated with a `model` property, which represents the binding scope for
     * each template instance.  The model should be used to manipulate data on the
     * instance, for example `event.model.set('item.checked', true);`.
     *
     * Alternatively, the model for a template instance for an element stamped by
     * a `dom-repeat` can be obtained using the `modelForElement` API on the
     * `dom-repeat` that stamped it, for example
     * `this.$.domRepeat.modelForElement(event.target).set('item.checked', true);`.
     * This may be useful for manipulating instance data of event targets obtained
     * by event handlers on parents of the `dom-repeat` (event delegation).
     *
     * A view-specific filter/sort may be applied to each `dom-repeat` by supplying a
     * `filter` and/or `sort` property.  This may be a string that names a function on
     * the host, or a function may be assigned to the property directly.  The functions
     * should implemented following the standard `Array` filter/sort API.
     *
     * In order to re-run the filter or sort functions based on changes to sub-fields
     * of `items`, the `observe` property may be set as a space-separated list of
     * `item` sub-fields that should cause a re-filter/sort when modified.  If
     * the filter or sort function depends on properties not contained in `items`,
     * the user should observe changes to those properties and call `render` to update
     * the view based on the dependency change.
     *
     * For example, for an `dom-repeat` with a filter of the following:
     *
     * ```js
     * isEngineer(item) {
     *   return item.type == 'engineer' || item.manager.type == 'engineer';
     * }
     * ```
     *
     * Then the `observe` property should be configured as follows:
     *
     * ```html
     * <dom-repeat items="{{employees}}" filter="isEngineer" observe="type manager.type">
     * ```
     *
     * @customElement
     * @polymer
     * @extends {domRepeatBase}
     * @appliesMixin OptionalMutableData
     * @summary Custom element for stamping instance of a template bound to
     *   items in an array.
     */
    class DomRepeat extends domRepeatBase {

      // Not needed to find template; can be removed once the analyzer
      // can find the tag name from customElements.define call
      static get is() { return 'dom-repeat'; }

      static get template() { return null; }

      static get properties() {

        /**
         * Fired whenever DOM is added or removed by this template (by
         * default, rendering occurs lazily).  To force immediate rendering, call
         * `render`.
         *
         * @event dom-change
         */
        return {

          /**
           * An array containing items determining how many instances of the template
           * to stamp and that that each template instance should bind to.
           */
          items: {
            type: Array
          },

          /**
           * The name of the variable to add to the binding scope for the array
           * element associated with a given template instance.
           */
          as: {
            type: String,
            value: 'item'
          },

          /**
           * The name of the variable to add to the binding scope with the index
           * of the instance in the sorted and filtered list of rendered items.
           * Note, for the index in the `this.items` array, use the value of the
           * `itemsIndexAs` property.
           */
          indexAs: {
            type: String,
            value: 'index'
          },

          /**
           * The name of the variable to add to the binding scope with the index
           * of the instance in the `this.items` array. Note, for the index of
           * this instance in the sorted and filtered list of rendered items,
           * use the value of the `indexAs` property.
           */
          itemsIndexAs: {
            type: String,
            value: 'itemsIndex'
          },

          /**
           * A function that should determine the sort order of the items.  This
           * property should either be provided as a string, indicating a method
           * name on the element's host, or else be an actual function.  The
           * function should match the sort function passed to `Array.sort`.
           * Using a sort function has no effect on the underlying `items` array.
           */
          sort: {
            type: Function,
            observer: '__sortChanged'
          },

          /**
           * A function that can be used to filter items out of the view.  This
           * property should either be provided as a string, indicating a method
           * name on the element's host, or else be an actual function.  The
           * function should match the sort function passed to `Array.filter`.
           * Using a filter function has no effect on the underlying `items` array.
           */
          filter: {
            type: Function,
            observer: '__filterChanged'
          },

          /**
           * When using a `filter` or `sort` function, the `observe` property
           * should be set to a space-separated list of the names of item
           * sub-fields that should trigger a re-sort or re-filter when changed.
           * These should generally be fields of `item` that the sort or filter
           * function depends on.
           */
          observe: {
            type: String,
            observer: '__observeChanged'
          },

          /**
           * When using a `filter` or `sort` function, the `delay` property
           * determines a debounce time in ms after a change to observed item
           * properties that must pass before the filter or sort is re-run.
           * This is useful in rate-limiting shuffling of the view when
           * item changes may be frequent.
           */
          delay: Number,

          /**
           * Count of currently rendered items after `filter` (if any) has been applied.
           * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
           * set of template instances is rendered.
           *
           */
          renderedItemCount: {
            type: Number,
            notify: true,
            readOnly: true
          },

          /**
           * Defines an initial count of template instances to render after setting
           * the `items` array, before the next paint, and puts the `dom-repeat`
           * into "chunking mode".  The remaining items will be created and rendered
           * incrementally at each animation frame therof until all instances have
           * been rendered.
           */
          initialCount: {
            type: Number,
            observer: '__initializeChunking'
          },

          /**
           * When `initialCount` is used, this property defines a frame rate (in
           * fps) to target by throttling the number of instances rendered each
           * frame to not exceed the budget for the target frame rate.  The
           * framerate is effectively the number of `requestAnimationFrame`s that
           * it tries to allow to actually fire in a given second. It does this
           * by measuring the time between `rAF`s and continuously adjusting the
           * number of items created each `rAF` to maintain the target framerate.
           * Setting this to a higher number allows lower latency and higher
           * throughput for event handlers and other tasks, but results in a
           * longer time for the remaining items to complete rendering.
           */
          targetFramerate: {
            type: Number,
            value: 20
          },

          _targetFrameTime: {
            type: Number,
            computed: '__computeFrameTime(targetFramerate)'
          }

        };

      }

      static get observers() {
        return [ '__itemsChanged(items.*)' ];
      }

      constructor() {
        super();
        this.__instances = [];
        this.__limit = Infinity;
        this.__pool = [];
        this.__renderDebouncer = null;
        this.__itemsIdxToInstIdx = {};
        this.__chunkCount = null;
        this.__lastChunkTime = null;
        this.__sortFn = null;
        this.__filterFn = null;
        this.__observePaths = null;
        /** @type {?function(new:TemplateInstanceBase, Object=)} */
        this.__ctor = null;
        this.__isDetached = true;
        this.template = null;
      }

      /**
       * @override
       * @return {void}
       */
      disconnectedCallback() {
        super.disconnectedCallback();
        this.__isDetached = true;
        for (let i=0; i<this.__instances.length; i++) {
          this.__detachInstance(i);
        }
      }

      /**
       * @override
       * @return {void}
       */
      connectedCallback() {
        super.connectedCallback();
        if (!hideElementsGlobally()) {
          this.style.display = 'none';
        }
        // only perform attachment if the element was previously detached.
        if (this.__isDetached) {
          this.__isDetached = false;
          let wrappedParent = wrap$1(wrap$1(this).parentNode);
          for (let i=0; i<this.__instances.length; i++) {
            this.__attachInstance(i, wrappedParent);
          }
        }
      }

      __ensureTemplatized() {
        // Templatizing (generating the instance constructor) needs to wait
        // until ready, since won't have its template content handed back to
        // it until then
        if (!this.__ctor) {
          let template = this.template = /** @type {HTMLTemplateElement} */(this.querySelector('template'));
          if (!template) {
            // // Wait until childList changes and template should be there by then
            let observer = new MutationObserver(() => {
              if (this.querySelector('template')) {
                observer.disconnect();
                this.__render();
              } else {
                throw new Error('dom-repeat requires a <template> child');
              }
            });
            observer.observe(this, {childList: true});
            return false;
          }
          // Template instance props that should be excluded from forwarding
          let instanceProps = {};
          instanceProps[this.as] = true;
          instanceProps[this.indexAs] = true;
          instanceProps[this.itemsIndexAs] = true;
          this.__ctor = templatize(template, this, {
            mutableData: this.mutableData,
            parentModel: true,
            instanceProps: instanceProps,
            /**
             * @this {DomRepeat}
             * @param {string} prop Property to set
             * @param {*} value Value to set property to
             */
            forwardHostProp: function(prop, value) {
              let i$ = this.__instances;
              for (let i=0, inst; (i<i$.length) && (inst=i$[i]); i++) {
                inst.forwardHostProp(prop, value);
              }
            },
            /**
             * @this {DomRepeat}
             * @param {Object} inst Instance to notify
             * @param {string} prop Property to notify
             * @param {*} value Value to notify
             */
            notifyInstanceProp: function(inst, prop, value) {
              if (matches(this.as, prop)) {
                let idx = inst[this.itemsIndexAs];
                if (prop == this.as) {
                  this.items[idx] = value;
                }
                let path = translate(this.as, `${JSCompiler_renameProperty('items', this)}.${idx}`, prop);
                this.notifyPath(path, value);
              }
            }
          });
        }
        return true;
      }

      __getMethodHost() {
        // Technically this should be the owner of the outermost template.
        // In shadow dom, this is always getRootNode().host, but we can
        // approximate this via cooperation with our dataHost always setting
        // `_methodHost` as long as there were bindings (or id's) on this
        // instance causing it to get a dataHost.
        return this.__dataHost._methodHost || this.__dataHost;
      }

      __functionFromPropertyValue(functionOrMethodName) {
        if (typeof functionOrMethodName === 'string') {
          let methodName = functionOrMethodName;
          let obj = this.__getMethodHost();
          return function() { return obj[methodName].apply(obj, arguments); };
        }

        return functionOrMethodName;
      }

      __sortChanged(sort) {
        this.__sortFn = this.__functionFromPropertyValue(sort);
        if (this.items) { this.__debounceRender(this.__render); }
      }

      __filterChanged(filter) {
        this.__filterFn = this.__functionFromPropertyValue(filter);
        if (this.items) { this.__debounceRender(this.__render); }
      }

      __computeFrameTime(rate) {
        return Math.ceil(1000/rate);
      }

      __initializeChunking() {
        if (this.initialCount) {
          this.__limit = this.initialCount;
          this.__chunkCount = this.initialCount;
          this.__lastChunkTime = performance.now();
        }
      }

      __tryRenderChunk() {
        // Debounced so that multiple calls through `_render` between animation
        // frames only queue one new rAF (e.g. array mutation & chunked render)
        if (this.items && this.__limit < this.items.length) {
          this.__debounceRender(this.__requestRenderChunk);
        }
      }

      __requestRenderChunk() {
        requestAnimationFrame(()=>this.__renderChunk());
      }

      __renderChunk() {
        // Simple auto chunkSize throttling algorithm based on feedback loop:
        // measure actual time between frames and scale chunk count by ratio
        // of target/actual frame time
        let currChunkTime = performance.now();
        let ratio = this._targetFrameTime / (currChunkTime - this.__lastChunkTime);
        this.__chunkCount = Math.round(this.__chunkCount * ratio) || 1;
        this.__limit += this.__chunkCount;
        this.__lastChunkTime = currChunkTime;
        this.__debounceRender(this.__render);
      }

      __observeChanged() {
        this.__observePaths = this.observe &&
          this.observe.replace('.*', '.').split(' ');
      }

      __itemsChanged(change) {
        if (this.items && !Array.isArray(this.items)) {
          console.warn('dom-repeat expected array for `items`, found', this.items);
        }
        // If path was to an item (e.g. 'items.3' or 'items.3.foo'), forward the
        // path to that instance synchronously (returns false for non-item paths)
        if (!this.__handleItemPath(change.path, change.value)) {
          // Otherwise, the array was reset ('items') or spliced ('items.splices'),
          // so queue a full refresh
          this.__initializeChunking();
          this.__debounceRender(this.__render);
        }
      }

      __handleObservedPaths(path) {
        // Handle cases where path changes should cause a re-sort/filter
        if (this.__sortFn || this.__filterFn) {
          if (!path) {
            // Always re-render if the item itself changed
            this.__debounceRender(this.__render, this.delay);
          } else if (this.__observePaths) {
            // Otherwise, re-render if the path changed matches an observed path
            let paths = this.__observePaths;
            for (let i=0; i<paths.length; i++) {
              if (path.indexOf(paths[i]) === 0) {
                this.__debounceRender(this.__render, this.delay);
              }
            }
          }
        }
      }

      /**
       * @param {function(this:DomRepeat)} fn Function to debounce.
       * @param {number=} delay Delay in ms to debounce by.
       */
      __debounceRender(fn, delay = 0) {
        this.__renderDebouncer = Debouncer.debounce(
              this.__renderDebouncer
            , delay > 0 ? timeOut.after(delay) : microTask
            , fn.bind(this));
        enqueueDebouncer(this.__renderDebouncer);
      }

      /**
       * Forces the element to render its content. Normally rendering is
       * asynchronous to a provoking change. This is done for efficiency so
       * that multiple changes trigger only a single render. The render method
       * should be called if, for example, template rendering is required to
       * validate application state.
       * @return {void}
       */
      render() {
        // Queue this repeater, then flush all in order
        this.__debounceRender(this.__render);
        flush$1();
      }

      __render() {
        if (!this.__ensureTemplatized()) {
          // No template found yet
          return;
        }
        this.__applyFullRefresh();
        // Reset the pool
        // TODO(kschaaf): Reuse pool across turns and nested templates
        // Now that objects/arrays are re-evaluated when set, we can safely
        // reuse pooled instances across turns, however we still need to decide
        // semantics regarding how long to hold, how many to hold, etc.
        this.__pool.length = 0;
        // Set rendered item count
        this._setRenderedItemCount(this.__instances.length);
        // Notify users
        this.dispatchEvent(new CustomEvent('dom-change', {
          bubbles: true,
          composed: true
        }));
        // Check to see if we need to render more items
        this.__tryRenderChunk();
      }

      __applyFullRefresh() {
        let items = this.items || [];
        let isntIdxToItemsIdx = new Array(items.length);
        for (let i=0; i<items.length; i++) {
          isntIdxToItemsIdx[i] = i;
        }
        // Apply user filter
        if (this.__filterFn) {
          isntIdxToItemsIdx = isntIdxToItemsIdx.filter((i, idx, array) =>
            this.__filterFn(items[i], idx, array));
        }
        // Apply user sort
        if (this.__sortFn) {
          isntIdxToItemsIdx.sort((a, b) => this.__sortFn(items[a], items[b]));
        }
        // items->inst map kept for item path forwarding
        const itemsIdxToInstIdx = this.__itemsIdxToInstIdx = {};
        let instIdx = 0;
        // Generate instances and assign items
        const limit = Math.min(isntIdxToItemsIdx.length, this.__limit);
        for (; instIdx<limit; instIdx++) {
          let inst = this.__instances[instIdx];
          let itemIdx = isntIdxToItemsIdx[instIdx];
          let item = items[itemIdx];
          itemsIdxToInstIdx[itemIdx] = instIdx;
          if (inst) {
            inst._setPendingProperty(this.as, item);
            inst._setPendingProperty(this.indexAs, instIdx);
            inst._setPendingProperty(this.itemsIndexAs, itemIdx);
            inst._flushProperties();
          } else {
            this.__insertInstance(item, instIdx, itemIdx);
          }
        }
        // Remove any extra instances from previous state
        for (let i=this.__instances.length-1; i>=instIdx; i--) {
          this.__detachAndRemoveInstance(i);
        }
      }

      __detachInstance(idx) {
        let inst = this.__instances[idx];
        const wrappedRoot = wrap$1(inst.root);
        for (let i=0; i<inst.children.length; i++) {
          let el = inst.children[i];
          wrappedRoot.appendChild(el);
        }
        return inst;
      }

      __attachInstance(idx, parent) {
        let inst = this.__instances[idx];
        // Note, this is pre-wrapped as an optimization
        parent.insertBefore(inst.root, this);
      }

      __detachAndRemoveInstance(idx) {
        let inst = this.__detachInstance(idx);
        if (inst) {
          this.__pool.push(inst);
        }
        this.__instances.splice(idx, 1);
      }

      __stampInstance(item, instIdx, itemIdx) {
        let model = {};
        model[this.as] = item;
        model[this.indexAs] = instIdx;
        model[this.itemsIndexAs] = itemIdx;
        return new this.__ctor(model);
      }

      __insertInstance(item, instIdx, itemIdx) {
        let inst = this.__pool.pop();
        if (inst) {
          // TODO(kschaaf): If the pool is shared across turns, hostProps
          // need to be re-set to reused instances in addition to item
          inst._setPendingProperty(this.as, item);
          inst._setPendingProperty(this.indexAs, instIdx);
          inst._setPendingProperty(this.itemsIndexAs, itemIdx);
          inst._flushProperties();
        } else {
          inst = this.__stampInstance(item, instIdx, itemIdx);
        }
        let beforeRow = this.__instances[instIdx + 1];
        let beforeNode = beforeRow ? beforeRow.children[0] : this;
        wrap$1(wrap$1(this).parentNode).insertBefore(inst.root, beforeNode);
        this.__instances[instIdx] = inst;
        return inst;
      }

      // Implements extension point from Templatize mixin
      /**
       * Shows or hides the template instance top level child elements. For
       * text nodes, `textContent` is removed while "hidden" and replaced when
       * "shown."
       * @param {boolean} hidden Set to true to hide the children;
       * set to false to show them.
       * @return {void}
       * @protected
       */
      _showHideChildren(hidden) {
        for (let i=0; i<this.__instances.length; i++) {
          this.__instances[i]._showHideChildren(hidden);
        }
      }

      // Called as a side effect of a host items.<key>.<path> path change,
      // responsible for notifying item.<path> changes to inst for key
      __handleItemPath(path, value) {
        let itemsPath = path.slice(6); // 'items.'.length == 6
        let dot = itemsPath.indexOf('.');
        let itemsIdx = dot < 0 ? itemsPath : itemsPath.substring(0, dot);
        // If path was index into array...
        if (itemsIdx == parseInt(itemsIdx, 10)) {
          let itemSubPath = dot < 0 ? '' : itemsPath.substring(dot+1);
          // If the path is observed, it will trigger a full refresh
          this.__handleObservedPaths(itemSubPath);
          // Note, even if a rull refresh is triggered, always do the path
          // notification because unless mutableData is used for dom-repeat
          // and all elements in the instance subtree, a full refresh may
          // not trigger the proper update.
          let instIdx = this.__itemsIdxToInstIdx[itemsIdx];
          let inst = this.__instances[instIdx];
          if (inst) {
            let itemPath = this.as + (itemSubPath ? '.' + itemSubPath : '');
            // This is effectively `notifyPath`, but avoids some of the overhead
            // of the public API
            inst._setPendingPropertyOrPath(itemPath, value, false, true);
            inst._flushProperties();
          }
          return true;
        }
      }

      /**
       * Returns the item associated with a given element stamped by
       * this `dom-repeat`.
       *
       * Note, to modify sub-properties of the item,
       * `modelForElement(el).set('item.<sub-prop>', value)`
       * should be used.
       *
       * @param {!HTMLElement} el Element for which to return the item.
       * @return {*} Item associated with the element.
       */
      itemForElement(el) {
        let instance = this.modelForElement(el);
        return instance && instance[this.as];
      }

      /**
       * Returns the inst index for a given element stamped by this `dom-repeat`.
       * If `sort` is provided, the index will reflect the sorted order (rather
       * than the original array order).
       *
       * @param {!HTMLElement} el Element for which to return the index.
       * @return {?number} Row index associated with the element (note this may
       *   not correspond to the array index if a user `sort` is applied).
       */
      indexForElement(el) {
        let instance = this.modelForElement(el);
        return instance && instance[this.indexAs];
      }

      /**
       * Returns the template "model" associated with a given element, which
       * serves as the binding scope for the template instance the element is
       * contained in. A template model
       * should be used to manipulate data associated with this template instance.
       *
       * Example:
       *
       *   let model = modelForElement(el);
       *   if (model.index < 10) {
       *     model.set('item.checked', true);
       *   }
       *
       * @param {!HTMLElement} el Element for which to return a template model.
       * @return {TemplateInstanceBase} Model representing the binding scope for
       *   the element.
       */
      modelForElement(el) {
        return modelForElement(this.template, el);
      }

    }

    customElements.define(DomRepeat.is, DomRepeat);

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * The `<dom-if>` element will stamp a light-dom `<template>` child when
     * the `if` property becomes truthy, and the template can use Polymer
     * data-binding and declarative event features when used in the context of
     * a Polymer element's template.
     *
     * When `if` becomes falsy, the stamped content is hidden but not
     * removed from dom. When `if` subsequently becomes truthy again, the content
     * is simply re-shown. This approach is used due to its favorable performance
     * characteristics: the expense of creating template content is paid only
     * once and lazily.
     *
     * Set the `restamp` property to true to force the stamped content to be
     * created / destroyed when the `if` condition changes.
     *
     * @customElement
     * @polymer
     * @extends PolymerElement
     * @summary Custom element that conditionally stamps and hides or removes
     *   template content based on a boolean flag.
     */
    class DomIf extends PolymerElement {

      // Not needed to find template; can be removed once the analyzer
      // can find the tag name from customElements.define call
      static get is() { return 'dom-if'; }

      static get template() { return null; }

      static get properties() {

        return {

          /**
           * Fired whenever DOM is added or removed/hidden by this template (by
           * default, rendering occurs lazily).  To force immediate rendering, call
           * `render`.
           *
           * @event dom-change
           */

          /**
           * A boolean indicating whether this template should stamp.
           */
          if: {
            type: Boolean,
            observer: '__debounceRender'
          },

          /**
           * When true, elements will be removed from DOM and discarded when `if`
           * becomes false and re-created and added back to the DOM when `if`
           * becomes true.  By default, stamped elements will be hidden but left
           * in the DOM when `if` becomes false, which is generally results
           * in better performance.
           */
          restamp: {
            type: Boolean,
            observer: '__debounceRender'
          }

        };

      }

      constructor() {
        super();
        this.__renderDebouncer = null;
        this.__invalidProps = null;
        this.__instance = null;
        this._lastIf = false;
        this.__ctor = null;
        this.__hideTemplateChildren__ = false;
      }

      __debounceRender() {
        // Render is async for 2 reasons:
        // 1. To eliminate dom creation trashing if user code thrashes `if` in the
        //    same turn. This was more common in 1.x where a compound computed
        //    property could result in the result changing multiple times, but is
        //    mitigated to a large extent by batched property processing in 2.x.
        // 2. To avoid double object propagation when a bag including values bound
        //    to the `if` property as well as one or more hostProps could enqueue
        //    the <dom-if> to flush before the <template>'s host property
        //    forwarding. In that scenario creating an instance would result in
        //    the host props being set once, and then the enqueued changes on the
        //    template would set properties a second time, potentially causing an
        //    object to be set to an instance more than once.  Creating the
        //    instance async from flushing data ensures this doesn't happen. If
        //    we wanted a sync option in the future, simply having <dom-if> flush
        //    (or clear) its template's pending host properties before creating
        //    the instance would also avoid the problem.
        this.__renderDebouncer = Debouncer.debounce(
              this.__renderDebouncer
            , microTask
            , () => this.__render());
        enqueueDebouncer(this.__renderDebouncer);
      }

      /**
       * @override
       * @return {void}
       */
      disconnectedCallback() {
        super.disconnectedCallback();
        const parent = wrap$1(this).parentNode;
        if (!parent || (parent.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
            !wrap$1(parent).host)) {
          this.__teardownInstance();
        }
      }

      /**
       * @override
       * @return {void}
       */
      connectedCallback() {
        super.connectedCallback();
        if (!hideElementsGlobally()) {
          this.style.display = 'none';
        }
        if (this.if) {
          this.__debounceRender();
        }
      }

      /**
       * Forces the element to render its content. Normally rendering is
       * asynchronous to a provoking change. This is done for efficiency so
       * that multiple changes trigger only a single render. The render method
       * should be called if, for example, template rendering is required to
       * validate application state.
       * @return {void}
       */
      render() {
        flush$1();
      }

      __render() {
        if (this.if) {
          if (!this.__ensureInstance()) {
            // No template found yet
            return;
          }
          this._showHideChildren();
        } else if (this.restamp) {
          this.__teardownInstance();
        }
        if (!this.restamp && this.__instance) {
          this._showHideChildren();
        }
        if (this.if != this._lastIf) {
          this.dispatchEvent(new CustomEvent('dom-change', {
            bubbles: true,
            composed: true
          }));
          this._lastIf = this.if;
        }
      }

      __ensureInstance() {
        let parentNode = wrap$1(this).parentNode;
        // Guard against element being detached while render was queued
        if (parentNode) {
          if (!this.__ctor) {
            let template = /** @type {HTMLTemplateElement} */(wrap$1(this).querySelector('template'));
            if (!template) {
              // Wait until childList changes and template should be there by then
              let observer = new MutationObserver(() => {
                if (wrap$1(this).querySelector('template')) {
                  observer.disconnect();
                  this.__render();
                } else {
                  throw new Error('dom-if requires a <template> child');
                }
              });
              observer.observe(this, {childList: true});
              return false;
            }
            this.__ctor = templatize(template, this, {
              // dom-if templatizer instances require `mutable: true`, as
              // `__syncHostProperties` relies on that behavior to sync objects
              mutableData: true,
              /**
               * @param {string} prop Property to forward
               * @param {*} value Value of property
               * @this {DomIf}
               */
              forwardHostProp: function(prop, value) {
                if (this.__instance) {
                  if (this.if) {
                    this.__instance.forwardHostProp(prop, value);
                  } else {
                    // If we have an instance but are squelching host property
                    // forwarding due to if being false, note the invalidated
                    // properties so `__syncHostProperties` can sync them the next
                    // time `if` becomes true
                    this.__invalidProps = this.__invalidProps || Object.create(null);
                    this.__invalidProps[root(prop)] = true;
                  }
                }
              }
            });
          }
          if (!this.__instance) {
            this.__instance = new this.__ctor();
            wrap$1(parentNode).insertBefore(this.__instance.root, this);
          } else {
            this.__syncHostProperties();
            let c$ = this.__instance.children;
            if (c$ && c$.length) {
              // Detect case where dom-if was re-attached in new position
              let lastChild = wrap$1(this).previousSibling;
              if (lastChild !== c$[c$.length-1]) {
                for (let i=0, n; (i<c$.length) && (n=c$[i]); i++) {
                  wrap$1(parentNode).insertBefore(n, this);
                }
              }
            }
          }
        }
        return true;
      }

      __syncHostProperties() {
        let props = this.__invalidProps;
        if (props) {
          for (let prop in props) {
            this.__instance._setPendingProperty(prop, this.__dataHost[prop]);
          }
          this.__invalidProps = null;
          this.__instance._flushProperties();
        }
      }

      __teardownInstance() {
        if (this.__instance) {
          let c$ = this.__instance.children;
          if (c$ && c$.length) {
            // use first child parent, for case when dom-if may have been detached
            let parent = wrap$1(c$[0]).parentNode;
            // Instance children may be disconnected from parents when dom-if
            // detaches if a tree was innerHTML'ed
            if (parent) {
              parent = wrap$1(parent);
              for (let i=0, n; (i<c$.length) && (n=c$[i]); i++) {
                parent.removeChild(n);
              }
            }
          }
          this.__instance = null;
          this.__invalidProps = null;
        }
      }

      /**
       * Shows or hides the template instance top level child elements. For
       * text nodes, `textContent` is removed while "hidden" and replaced when
       * "shown."
       * @return {void}
       * @protected
       * @suppress {visibility}
       */
      _showHideChildren() {
        let hidden = this.__hideTemplateChildren__ || !this.if;
        if (this.__instance) {
          this.__instance._showHideChildren(hidden);
        }
      }

    }

    customElements.define(DomIf.is, DomIf);

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    /**
     * Element mixin for recording dynamic associations between item paths in a
     * master `items` array and a `selected` array such that path changes to the
     * master array (at the host) element or elsewhere via data-binding) are
     * correctly propagated to items in the selected array and vice-versa.
     *
     * The `items` property accepts an array of user data, and via the
     * `select(item)` and `deselect(item)` API, updates the `selected` property
     * which may be bound to other parts of the application, and any changes to
     * sub-fields of `selected` item(s) will be kept in sync with items in the
     * `items` array.  When `multi` is false, `selected` is a property
     * representing the last selected item.  When `multi` is true, `selected`
     * is an array of multiply selected items.
     *
     * @polymer
     * @mixinFunction
     * @appliesMixin ElementMixin
     * @summary Element mixin for recording dynamic associations between item paths in a
     * master `items` array and a `selected` array
     */
    let ArraySelectorMixin = dedupingMixin(superClass => {

      /**
       * @constructor
       * @implements {Polymer_ElementMixin}
       * @private
       */
      let elementBase = ElementMixin(superClass);

      /**
       * @polymer
       * @mixinClass
       * @implements {Polymer_ArraySelectorMixin}
       * @unrestricted
       */
      class ArraySelectorMixin extends elementBase {

        static get properties() {
          return {

            /**
             * An array containing items from which selection will be made.
             */
            items: {
              type: Array,
            },

            /**
             * When `true`, multiple items may be selected at once (in this case,
             * `selected` is an array of currently selected items).  When `false`,
             * only one item may be selected at a time.
             */
            multi: {
              type: Boolean,
              value: false,
            },

            /**
             * When `multi` is true, this is an array that contains any selected.
             * When `multi` is false, this is the currently selected item, or `null`
             * if no item is selected.
             * @type {?Object|?Array<!Object>}
             */
            selected: {type: Object, notify: true},

            /**
             * When `multi` is false, this is the currently selected item, or `null`
             * if no item is selected.
             * @type {?Object}
             */
            selectedItem: {type: Object, notify: true},

            /**
             * When `true`, calling `select` on an item that is already selected
             * will deselect the item.
             */
            toggle: {type: Boolean, value: false}

          };
        }

        static get observers() {
          return ['__updateSelection(multi, items.*)'];
        }

        constructor() {
          super();
          this.__lastItems = null;
          this.__lastMulti = null;
          this.__selectedMap = null;
        }

        __updateSelection(multi, itemsInfo) {
          let path = itemsInfo.path;
          if (path == JSCompiler_renameProperty('items', this)) {
            // Case 1 - items array changed, so diff against previous array and
            // deselect any removed items and adjust selected indices
            let newItems = itemsInfo.base || [];
            let lastItems = this.__lastItems;
            let lastMulti = this.__lastMulti;
            if (multi !== lastMulti) {
              this.clearSelection();
            }
            if (lastItems) {
              let splices = calculateSplices(newItems, lastItems);
              this.__applySplices(splices);
            }
            this.__lastItems = newItems;
            this.__lastMulti = multi;
          } else if (itemsInfo.path == `${JSCompiler_renameProperty('items', this)}.splices`) {
            // Case 2 - got specific splice information describing the array mutation:
            // deselect any removed items and adjust selected indices
            this.__applySplices(itemsInfo.value.indexSplices);
          } else {
            // Case 3 - an array element was changed, so deselect the previous
            // item for that index if it was previously selected
            let part = path.slice(`${JSCompiler_renameProperty('items', this)}.`.length);
            let idx = parseInt(part, 10);
            if ((part.indexOf('.') < 0) && part == idx) {
              this.__deselectChangedIdx(idx);
            }
          }
        }

        __applySplices(splices) {
          let selected = this.__selectedMap;
          // Adjust selected indices and mark removals
          for (let i=0; i<splices.length; i++) {
            let s = splices[i];
            selected.forEach((idx, item) => {
              if (idx < s.index) ; else if (idx >= s.index + s.removed.length) {
                // adjust index
                selected.set(item, idx + s.addedCount - s.removed.length);
              } else {
                // remove index
                selected.set(item, -1);
              }
            });
            for (let j=0; j<s.addedCount; j++) {
              let idx = s.index + j;
              if (selected.has(this.items[idx])) {
                selected.set(this.items[idx], idx);
              }
            }
          }
          // Update linked paths
          this.__updateLinks();
          // Remove selected items that were removed from the items array
          let sidx = 0;
          selected.forEach((idx, item) => {
            if (idx < 0) {
              if (this.multi) {
                this.splice(JSCompiler_renameProperty('selected', this), sidx, 1);
              } else {
                this.selected = this.selectedItem = null;
              }
              selected.delete(item);
            } else {
              sidx++;
            }
          });
        }

        __updateLinks() {
          this.__dataLinkedPaths = {};
          if (this.multi) {
            let sidx = 0;
            this.__selectedMap.forEach(idx => {
              if (idx >= 0) {
                this.linkPaths(
                    `${JSCompiler_renameProperty('items', this)}.${idx}`,
                    `${JSCompiler_renameProperty('selected', this)}.${sidx++}`);
              }
            });
          } else {
            this.__selectedMap.forEach(idx => {
              this.linkPaths(
                  JSCompiler_renameProperty('selected', this),
                  `${JSCompiler_renameProperty('items', this)}.${idx}`);
              this.linkPaths(
                  JSCompiler_renameProperty('selectedItem', this),
                  `${JSCompiler_renameProperty('items', this)}.${idx}`);
            });
          }
        }

        /**
         * Clears the selection state.
         * @override
         * @return {void}
         */
        clearSelection() {
          // Unbind previous selection
          this.__dataLinkedPaths = {};
          // The selected map stores 3 pieces of information:
          // key: items array object
          // value: items array index
          // order: selected array index
          this.__selectedMap = new Map();
          // Initialize selection
          this.selected = this.multi ? [] : null;
          this.selectedItem = null;
        }

        /**
         * Returns whether the item is currently selected.
         *
         * @override
         * @param {*} item Item from `items` array to test
         * @return {boolean} Whether the item is selected
         */
        isSelected(item) {
          return this.__selectedMap.has(item);
        }

        /**
         * Returns whether the item is currently selected.
         *
         * @override
         * @param {number} idx Index from `items` array to test
         * @return {boolean} Whether the item is selected
         */
        isIndexSelected(idx) {
          return this.isSelected(this.items[idx]);
        }

        __deselectChangedIdx(idx) {
          let sidx = this.__selectedIndexForItemIndex(idx);
          if (sidx >= 0) {
            let i = 0;
            this.__selectedMap.forEach((idx, item) => {
              if (sidx == i++) {
                this.deselect(item);
              }
            });
          }
        }

        __selectedIndexForItemIndex(idx) {
          let selected = this.__dataLinkedPaths[`${JSCompiler_renameProperty('items', this)}.${idx}`];
          if (selected) {
            return parseInt(selected.slice(`${JSCompiler_renameProperty('selected', this)}.`.length), 10);
          }
        }

        /**
         * Deselects the given item if it is already selected.
         *
         * @override
         * @param {*} item Item from `items` array to deselect
         * @return {void}
         */
        deselect(item) {
          let idx = this.__selectedMap.get(item);
          if (idx >= 0) {
            this.__selectedMap.delete(item);
            let sidx;
            if (this.multi) {
              sidx = this.__selectedIndexForItemIndex(idx);
            }
            this.__updateLinks();
            if (this.multi) {
              this.splice(JSCompiler_renameProperty('selected', this), sidx, 1);
            } else {
              this.selected = this.selectedItem = null;
            }
          }
        }

        /**
         * Deselects the given index if it is already selected.
         *
         * @override
         * @param {number} idx Index from `items` array to deselect
         * @return {void}
         */
        deselectIndex(idx) {
          this.deselect(this.items[idx]);
        }

        /**
         * Selects the given item.  When `toggle` is true, this will automatically
         * deselect the item if already selected.
         *
         * @override
         * @param {*} item Item from `items` array to select
         * @return {void}
         */
        select(item) {
          this.selectIndex(this.items.indexOf(item));
        }

        /**
         * Selects the given index.  When `toggle` is true, this will automatically
         * deselect the item if already selected.
         *
         * @override
         * @param {number} idx Index from `items` array to select
         * @return {void}
         */
        selectIndex(idx) {
          let item = this.items[idx];
          if (!this.isSelected(item)) {
            if (!this.multi) {
              this.__selectedMap.clear();
            }
            this.__selectedMap.set(item, idx);
            this.__updateLinks();
            if (this.multi) {
              this.push(JSCompiler_renameProperty('selected', this), item);
            } else {
              this.selected = this.selectedItem = item;
            }
          } else if (this.toggle) {
            this.deselectIndex(idx);
          }
        }

      }

      return ArraySelectorMixin;

    });

    /**
     * @constructor
     * @extends {PolymerElement}
     * @implements {Polymer_ArraySelectorMixin}
     * @private
     */
    let baseArraySelector = ArraySelectorMixin(PolymerElement);

    /**
     * Element implementing the `ArraySelector` mixin, which records
     * dynamic associations between item paths in a master `items` array and a
     * `selected` array such that path changes to the master array (at the host)
     * element or elsewhere via data-binding) are correctly propagated to items
     * in the selected array and vice-versa.
     *
     * The `items` property accepts an array of user data, and via the
     * `select(item)` and `deselect(item)` API, updates the `selected` property
     * which may be bound to other parts of the application, and any changes to
     * sub-fields of `selected` item(s) will be kept in sync with items in the
     * `items` array.  When `multi` is false, `selected` is a property
     * representing the last selected item.  When `multi` is true, `selected`
     * is an array of multiply selected items.
     *
     * Example:
     *
     * ```js
     * import {PolymerElement} from '@polymer/polymer';
     * import '@polymer/polymer/lib/elements/array-selector.js';
     *
     * class EmployeeList extends PolymerElement {
     *   static get _template() {
     *     return html`
     *         <div> Employee list: </div>
     *         <dom-repeat id="employeeList" items="{{employees}}">
     *           <template>
     *             <div>First name: <span>{{item.first}}</span></div>
     *               <div>Last name: <span>{{item.last}}</span></div>
     *               <button on-click="toggleSelection">Select</button>
     *           </template>
     *         </dom-repeat>
     *
     *         <array-selector id="selector"
     *                         items="{{employees}}"
     *                         selected="{{selected}}"
     *                         multi toggle></array-selector>
     *
     *         <div> Selected employees: </div>
     *         <dom-repeat items="{{selected}}">
     *           <template>
     *             <div>First name: <span>{{item.first}}</span></div>
     *             <div>Last name: <span>{{item.last}}</span></div>
     *           </template>
     *         </dom-repeat>`;
     *   }
     *   static get is() { return 'employee-list'; }
     *   static get properties() {
     *     return {
     *       employees: {
     *         value() {
     *           return [
     *             {first: 'Bob', last: 'Smith'},
     *             {first: 'Sally', last: 'Johnson'},
     *             ...
     *           ];
     *         }
     *       }
     *     };
     *   }
     *   toggleSelection(e) {
     *     const item = this.$.employeeList.itemForElement(e.target);
     *     this.$.selector.select(item);
     *   }
     * }
     * ```
     *
     * @polymer
     * @customElement
     * @extends {baseArraySelector}
     * @appliesMixin ArraySelectorMixin
     * @summary Custom element that links paths between an input `items` array and
     *   an output `selected` item or array based on calls to its selection API.
     */
    class ArraySelector extends baseArraySelector {
      // Not needed to find template; can be removed once the analyzer
      // can find the tag name from customElements.define call
      static get is() { return 'array-selector'; }
      static get template() { return null; }
    }
    customElements.define(ArraySelector.is, ArraySelector);

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    const customStyleInterface = new CustomStyleInterface();

    if (!window.ShadyCSS) {
      window.ShadyCSS = {
        /**
         * @param {!HTMLTemplateElement} template
         * @param {string} elementName
         * @param {string=} elementExtends
         */
        prepareTemplate(template, elementName, elementExtends) {}, // eslint-disable-line no-unused-vars

        /**
         * @param {!HTMLTemplateElement} template
         * @param {string} elementName
         */
        prepareTemplateDom(template, elementName) {}, // eslint-disable-line no-unused-vars

        /**
         * @param {!HTMLTemplateElement} template
         * @param {string} elementName
         * @param {string=} elementExtends
         */
        prepareTemplateStyles(template, elementName, elementExtends) {}, // eslint-disable-line no-unused-vars

        /**
         * @param {Element} element
         * @param {Object=} properties
         */
        styleSubtree(element, properties) {
          customStyleInterface.processStyles();
          updateNativeProperties(element, properties);
        },

        /**
         * @param {Element} element
         */
        styleElement(element) { // eslint-disable-line no-unused-vars
          customStyleInterface.processStyles();
        },

        /**
         * @param {Object=} properties
         */
        styleDocument(properties) {
          customStyleInterface.processStyles();
          updateNativeProperties(document.body, properties);
        },

        /**
         * @param {Element} element
         * @param {string} property
         * @return {string}
         */
        getComputedStyleValue(element, property) {
          return getComputedStyleValue(element, property);
        },

        flushCustomStyles() {},
        nativeCss: nativeCssVariables,
        nativeShadow: nativeShadow,
        cssBuild: cssBuild,
        disableRuntime: disableRuntime,
      };
    }

    window.ShadyCSS.CustomStyleInterface = customStyleInterface;

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    const attr = 'include';

    const CustomStyleInterface$1 = window.ShadyCSS.CustomStyleInterface;

    /**
     * Custom element for defining styles in the main document that can take
     * advantage of [shady DOM](https://github.com/webcomponents/shadycss) shims
     * for style encapsulation, custom properties, and custom mixins.
     *
     * - Document styles defined in a `<custom-style>` are shimmed to ensure they
     *   do not leak into local DOM when running on browsers without native
     *   Shadow DOM.
     * - Custom properties can be defined in a `<custom-style>`. Use the `html` selector
     *   to define custom properties that apply to all custom elements.
     * - Custom mixins can be defined in a `<custom-style>`, if you import the optional
     *   [apply shim](https://github.com/webcomponents/shadycss#about-applyshim)
     *   (`shadycss/apply-shim.html`).
     *
     * To use:
     *
     * - Import `custom-style.html`.
     * - Place a `<custom-style>` element in the main document, wrapping an inline `<style>` tag that
     *   contains the CSS rules you want to shim.
     *
     * For example:
     *
     * ```html
     * <!-- import apply shim--only required if using mixins -->
     * <link rel="import" href="bower_components/shadycss/apply-shim.html">
     * <!-- import custom-style element -->
     * <link rel="import" href="bower_components/polymer/lib/elements/custom-style.html">
     *
     * <custom-style>
     *   <style>
     *     html {
     *       --custom-color: blue;
     *       --custom-mixin: {
     *         font-weight: bold;
     *         color: red;
     *       };
     *     }
     *   </style>
     * </custom-style>
     * ```
     *
     * @customElement
     * @extends HTMLElement
     * @summary Custom element for defining styles in the main document that can
     *   take advantage of Polymer's style scoping and custom properties shims.
     */
    class CustomStyle extends HTMLElement {
      constructor() {
        super();
        this._style = null;
        CustomStyleInterface$1.addCustomStyle(this);
      }
      /**
       * Returns the light-DOM `<style>` child this element wraps.  Upon first
       * call any style modules referenced via the `include` attribute will be
       * concatenated to this element's `<style>`.
       *
       * @export
       * @return {HTMLStyleElement} This element's light-DOM `<style>`
       */
      getStyle() {
        if (this._style) {
          return this._style;
        }
        const style = /** @type {HTMLStyleElement} */(this.querySelector('style'));
        if (!style) {
          return null;
        }
        this._style = style;
        const include = style.getAttribute(attr);
        if (include) {
          style.removeAttribute(attr);
          /** @suppress {deprecated} */
          style.textContent = cssFromModules(include) + style.textContent;
        }
        /*
        HTML Imports styling the main document are deprecated in Chrome
        https://crbug.com/523952

        If this element is not in the main document, then it must be in an HTML Import document.
        In that case, move the custom style to the main document.

        The ordering of `<custom-style>` should stay the same as when loaded by HTML Imports, but there may be odd
        cases of ordering w.r.t the main document styles.
        */
        if (this.ownerDocument !== window.document) {
          window.document.head.appendChild(this);
        }
        return this._style;
      }
    }

    window.customElements.define('custom-style', CustomStyle);

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    let mutablePropertyChange$1;
    /** @suppress {missingProperties} */
    (() => {
      mutablePropertyChange$1 = MutableData._mutablePropertyChange;
    })();

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    // bc
    const Base = LegacyElementMixin(HTMLElement).prototype;

    /**
    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */

    /**
    The `<iron-flex-layout>` component provides simple ways to use
    [CSS flexible box
    layout](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes),
    also known as flexbox. Note that this is an old element, that was written
    before all modern browsers had non-prefixed flex styles. As such, nowadays you
    don't really need to use this element anymore, and can use CSS flex styles
    directly in your code.

    This component provides two different ways to use flexbox:

    1. [Layout
    classes](https://github.com/PolymerElements/iron-flex-layout/tree/master/iron-flex-layout-classes.html).
    The layout class stylesheet provides a simple set of class-based flexbox rules,
    that let you specify layout properties directly in markup. You must include this
    file in every element that needs to use them.

        Sample use:

        ```
        <custom-element-demo>
          <template>
            <script src="../webcomponentsjs/webcomponents-lite.js"></script>
            <next-code-block></next-code-block>
          </template>
        </custom-element-demo>
        ```

        ```js
        import {html} from '@polymer/polymer/lib/utils/html-tag.js';
        import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';

        const template = html`
          <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
          <style>
            .test { width: 100px; }
          </style>
          <div class="layout horizontal center-center">
            <div class="test">horizontal layout center alignment</div>
          </div>
        `;
        document.body.appendChild(template.content);
        ```

    2. [Custom CSS
    mixins](https://github.com/PolymerElements/iron-flex-layout/blob/master/iron-flex-layout.html).
    The mixin stylesheet includes custom CSS mixins that can be applied inside a CSS
    rule using the `@apply` function.

    Please note that the old [/deep/ layout
    classes](https://github.com/PolymerElements/iron-flex-layout/tree/master/classes)
    are deprecated, and should not be used. To continue using layout properties
    directly in markup, please switch to using the new `dom-module`-based
    [layout
    classes](https://github.com/PolymerElements/iron-flex-layout/tree/master/iron-flex-layout-classes.html).
    Please note that the new version does not use `/deep/`, and therefore requires
    you to import the `dom-modules` in every element that needs to use them.

    @group Iron Elements
    @pseudoElement iron-flex-layout
    @demo demo/index.html
    */
    const template = html`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;

    template.setAttribute('style', 'display: none;');
    document.head.appendChild(template.content);

    var style = document.createElement('style');
    style.textContent = '[hidden] { display: none !important; }';
    document.head.appendChild(style);

    /**
    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */

    class IronMeta {
      /**
       * @param {{
       *   type: (string|null|undefined),
       *   key: (string|null|undefined),
       *   value: *,
       * }=} options
       */
      constructor(options) {
        IronMeta[' '](options);

        /** @type {string} */
        this.type = (options && options.type) || 'default';
        /** @type {string|null|undefined} */
        this.key = options && options.key;
        if (options && 'value' in options) {
          /** @type {*} */
          this.value = options.value;
        }
      }

      /** @return {*} */
      get value() {
        var type = this.type;
        var key = this.key;

        if (type && key) {
          return IronMeta.types[type] && IronMeta.types[type][key];
        }
      }

      /** @param {*} value */
      set value(value) {
        var type = this.type;
        var key = this.key;

        if (type && key) {
          type = IronMeta.types[type] = IronMeta.types[type] || {};
          if (value == null) {
            delete type[key];
          } else {
            type[key] = value;
          }
        }
      }

      /** @return {!Array<*>} */
      get list() {
        var type = this.type;

        if (type) {
          var items = IronMeta.types[this.type];
          if (!items) {
            return [];
          }

          return Object.keys(items).map(function(key) {
            return metaDatas[this.type][key];
          }, this);
        }
      }

      /**
       * @param {string} key
       * @return {*}
       */
      byKey(key) {
        this.key = key;
        return this.value;
      }
    }
    // This function is used to convince Closure not to remove constructor calls
    // for instances that are not held anywhere. For example, when
    // `new IronMeta({...})` is used only for the side effect of adding a value.
    IronMeta[' '] = function() {};

    IronMeta.types = {};

    var metaDatas = IronMeta.types;

    /**
    `iron-meta` is a generic element you can use for sharing information across the
    DOM tree. It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern)
    such that any instance of iron-meta has access to the shared information. You
    can use `iron-meta` to share whatever you want (or create an extension [like
    x-meta] for enhancements).

    The `iron-meta` instances containing your actual data can be loaded in an
    import, or constructed in any way you see fit. The only requirement is that you
    create them before you try to access them.

    Examples:

    If I create an instance like this:

        <iron-meta key="info" value="foo/bar"></iron-meta>

    Note that value="foo/bar" is the metadata I've defined. I could define more
    attributes or use child nodes to define additional metadata.

    Now I can access that element (and it's metadata) from any iron-meta instance
    via the byKey method, e.g.

        meta.byKey('info');

    Pure imperative form would be like:

        document.createElement('iron-meta').byKey('info');

    Or, in a Polymer element, you can include a meta in your template:

        <iron-meta id="meta"></iron-meta>
        ...
        this.$.meta.byKey('info');

    @group Iron Elements
    @demo demo/index.html
    @element iron-meta
    */
    Polymer({

      is: 'iron-meta',

      properties: {

        /**
         * The type of meta-data.  All meta-data of the same type is stored
         * together.
         * @type {string}
         */
        type: {
          type: String,
          value: 'default',
        },

        /**
         * The key used to store `value` under the `type` namespace.
         * @type {?string}
         */
        key: {
          type: String,
        },

        /**
         * The meta-data to store or retrieve.
         * @type {*}
         */
        value: {
          type: String,
          notify: true,
        },

        /**
         * If true, `value` is set to the iron-meta instance itself.
         */
        self: {type: Boolean, observer: '_selfChanged'},

        __meta: {type: Boolean, computed: '__computeMeta(type, key, value)'}
      },

      hostAttributes: {hidden: true},

      __computeMeta: function(type, key, value) {
        var meta = new IronMeta({type: type, key: key});

        if (value !== undefined && value !== meta.value) {
          meta.value = value;
        } else if (this.value !== meta.value) {
          this.value = meta.value;
        }

        return meta;
      },

      get list() {
        return this.__meta && this.__meta.list;
      },

      _selfChanged: function(self) {
        if (self) {
          this.value = this;
        }
      },

      /**
       * Retrieves meta data value by key.
       *
       * @method byKey
       * @param {string} key The key of the meta-data to be returned.
       * @return {*}
       */
      byKey: function(key) {
        return new IronMeta({type: this.type, key: key}).value;
      }
    });

    /**
    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */

    /**

    The `iron-icon` element displays an icon. By default an icon renders as a 24px
    square.

    Example using src:

        <iron-icon src="star.png"></iron-icon>

    Example setting size to 32px x 32px:

        <iron-icon class="big" src="big_star.png"></iron-icon>

        <style is="custom-style">
          .big {
            --iron-icon-height: 32px;
            --iron-icon-width: 32px;
          }
        </style>

    The iron elements include several sets of icons. To use the default set of
    icons, import `iron-icons.js` and use the `icon` attribute to specify an icon:

        <script type="module">
          import "@polymer/iron-icons/iron-icons.js";
        </script>

        <iron-icon icon="menu"></iron-icon>

    To use a different built-in set of icons, import the specific
    `iron-icons/<iconset>-icons.js`, and specify the icon as `<iconset>:<icon>`.
    For example, to use a communication icon, you would use:

        <script type="module">
          import "@polymer/iron-icons/communication-icons.js";
        </script>

        <iron-icon icon="communication:email"></iron-icon>

    You can also create custom icon sets of bitmap or SVG icons.

    Example of using an icon named `cherry` from a custom iconset with the ID
    `fruit`:

        <iron-icon icon="fruit:cherry"></iron-icon>

    See `<iron-iconset>` and `<iron-iconset-svg>` for more information about how to
    create a custom iconset.

    See the `iron-icons` demo to see the icons available in the various iconsets.

    ### Styling

    The following custom properties are available for styling:

    Custom property | Description | Default
    ----------------|-------------|----------
    `--iron-icon` | Mixin applied to the icon | {}
    `--iron-icon-width` | Width of the icon | `24px`
    `--iron-icon-height` | Height of the icon | `24px`
    `--iron-icon-fill-color` | Fill color of the svg icon | `currentcolor`
    `--iron-icon-stroke-color` | Stroke color of the svg icon | none

    @group Iron Elements
    @element iron-icon
    @demo demo/index.html
    @hero hero.svg
    @homepage polymer.github.io
    */
    Polymer({
      _template: html`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,

      is: 'iron-icon',

      properties: {

        /**
         * The name of the icon to use. The name should be of the form:
         * `iconset_name:icon_name`.
         */
        icon: {type: String},

        /**
         * The name of the theme to used, if one is specified by the
         * iconset.
         */
        theme: {type: String},

        /**
         * If using iron-icon without an iconset, you can set the src to be
         * the URL of an individual icon image file. Note that this will take
         * precedence over a given icon attribute.
         */
        src: {type: String},

        /**
         * @type {!IronMeta}
         */
        _meta: {value: Base.create('iron-meta', {type: 'iconset'})}

      },

      observers: [
        '_updateIcon(_meta, isAttached)',
        '_updateIcon(theme, isAttached)',
        '_srcChanged(src, isAttached)',
        '_iconChanged(icon, isAttached)'
      ],

      _DEFAULT_ICONSET: 'icons',

      _iconChanged: function(icon) {
        var parts = (icon || '').split(':');
        this._iconName = parts.pop();
        this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;
        this._updateIcon();
      },

      _srcChanged: function(src) {
        this._updateIcon();
      },

      _usesIconset: function() {
        return this.icon || !this.src;
      },

      /** @suppress {visibility} */
      _updateIcon: function() {
        if (this._usesIconset()) {
          if (this._img && this._img.parentNode) {
            dom(this.root).removeChild(this._img);
          }
          if (this._iconName === '') {
            if (this._iconset) {
              this._iconset.removeIcon(this);
            }
          } else if (this._iconsetName && this._meta) {
            this._iconset = /** @type {?Polymer.Iconset} */ (
                this._meta.byKey(this._iconsetName));
            if (this._iconset) {
              this._iconset.applyIcon(this, this._iconName, this.theme);
              this.unlisten(window, 'iron-iconset-added', '_updateIcon');
            } else {
              this.listen(window, 'iron-iconset-added', '_updateIcon');
            }
          }
        } else {
          if (this._iconset) {
            this._iconset.removeIcon(this);
          }
          if (!this._img) {
            this._img = document.createElement('img');
            this._img.style.width = '100%';
            this._img.style.height = '100%';
            this._img.draggable = false;
          }
          this._img.src = this.src;
          dom(this.root).appendChild(this._img);
        }
      }
    });

    /**
    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */
    /**
     * The `iron-iconset-svg` element allows users to define their own icon sets
     * that contain svg icons. The svg icon elements should be children of the
     * `iron-iconset-svg` element. Multiple icons should be given distinct id's.
     *
     * Using svg elements to create icons has a few advantages over traditional
     * bitmap graphics like jpg or png. Icons that use svg are vector based so
     * they are resolution independent and should look good on any device. They
     * are stylable via css. Icons can be themed, colorized, and even animated.
     *
     * Example:
     *
     *     <iron-iconset-svg name="my-svg-icons" size="24">
     *       <svg>
     *         <defs>
     *           <g id="shape">
     *             <rect x="12" y="0" width="12" height="24" />
     *             <circle cx="12" cy="12" r="12" />
     *           </g>
     *         </defs>
     *       </svg>
     *     </iron-iconset-svg>
     *
     * This will automatically register the icon set "my-svg-icons" to the iconset
     * database.  To use these icons from within another element, make a
     * `iron-iconset` element and call the `byId` method
     * to retrieve a given iconset. To apply a particular icon inside an
     * element use the `applyIcon` method. For example:
     *
     *     iconset.applyIcon(iconNode, 'car');
     *
     * @element iron-iconset-svg
     * @demo demo/index.html
     * @implements {Polymer.Iconset}
     */
    Polymer({
      is: 'iron-iconset-svg',

      properties: {

        /**
         * The name of the iconset.
         */
        name: {type: String, observer: '_nameChanged'},

        /**
         * The size of an individual icon. Note that icons must be square.
         */
        size: {type: Number, value: 24},

        /**
         * Set to true to enable mirroring of icons where specified when they are
         * stamped. Icons that should be mirrored should be decorated with a
         * `mirror-in-rtl` attribute.
         *
         * NOTE: For performance reasons, direction will be resolved once per
         * document per iconset, so moving icons in and out of RTL subtrees will
         * not cause their mirrored state to change.
         */
        rtlMirroring: {type: Boolean, value: false},

        /**
         * Set to true to measure RTL based on the dir attribute on the body or
         * html elements (measured on document.body or document.documentElement as
         * available).
         */
        useGlobalRtlAttribute: {type: Boolean, value: false}
      },

      created: function() {
        this._meta = new IronMeta({type: 'iconset', key: null, value: null});
      },

      attached: function() {
        this.style.display = 'none';
      },

      /**
       * Construct an array of all icon names in this iconset.
       *
       * @return {!Array} Array of icon names.
       */
      getIconNames: function() {
        this._icons = this._createIconMap();
        return Object.keys(this._icons).map(function(n) {
          return this.name + ':' + n;
        }, this);
      },

      /**
       * Applies an icon to the given element.
       *
       * An svg icon is prepended to the element's shadowRoot if it exists,
       * otherwise to the element itself.
       *
       * If RTL mirroring is enabled, and the icon is marked to be mirrored in
       * RTL, the element will be tested (once and only once ever for each
       * iconset) to determine the direction of the subtree the element is in.
       * This direction will apply to all future icon applications, although only
       * icons marked to be mirrored will be affected.
       *
       * @method applyIcon
       * @param {Element} element Element to which the icon is applied.
       * @param {string} iconName Name of the icon to apply.
       * @return {?Element} The svg element which renders the icon.
       */
      applyIcon: function(element, iconName) {
        // Remove old svg element
        this.removeIcon(element);
        // install new svg element
        var svg = this._cloneIcon(
            iconName, this.rtlMirroring && this._targetIsRTL(element));
        if (svg) {
          // insert svg element into shadow root, if it exists
          var pde = dom(element.root || element);
          pde.insertBefore(svg, pde.childNodes[0]);
          return element._svgIcon = svg;
        }
        return null;
      },

      /**
       * Remove an icon from the given element by undoing the changes effected
       * by `applyIcon`.
       *
       * @param {Element} element The element from which the icon is removed.
       */
      removeIcon: function(element) {
        // Remove old svg element
        if (element._svgIcon) {
          dom(element.root || element).removeChild(element._svgIcon);
          element._svgIcon = null;
        }
      },

      /**
       * Measures and memoizes the direction of the element. Note that this
       * measurement is only done once and the result is memoized for future
       * invocations.
       */
      _targetIsRTL: function(target) {
        if (this.__targetIsRTL == null) {
          if (this.useGlobalRtlAttribute) {
            var globalElement =
                (document.body && document.body.hasAttribute('dir')) ?
                document.body :
                document.documentElement;

            this.__targetIsRTL = globalElement.getAttribute('dir') === 'rtl';
          } else {
            if (target && target.nodeType !== Node.ELEMENT_NODE) {
              target = target.host;
            }

            this.__targetIsRTL =
                target && window.getComputedStyle(target)['direction'] === 'rtl';
          }
        }

        return this.__targetIsRTL;
      },

      /**
       *
       * When name is changed, register iconset metadata
       *
       */
      _nameChanged: function() {
        this._meta.value = null;
        this._meta.key = this.name;
        this._meta.value = this;

        this.async(function() {
          this.fire('iron-iconset-added', this, {node: window});
        });
      },

      /**
       * Create a map of child SVG elements by id.
       *
       * @return {!Object} Map of id's to SVG elements.
       */
      _createIconMap: function() {
        // Objects chained to Object.prototype (`{}`) have members. Specifically,
        // on FF there is a `watch` method that confuses the icon map, so we
        // need to use a null-based object here.
        var icons = Object.create(null);
        dom(this).querySelectorAll('[id]').forEach(function(icon) {
          icons[icon.id] = icon;
        });
        return icons;
      },

      /**
       * Produce installable clone of the SVG element matching `id` in this
       * iconset, or `undefined` if there is no matching element.
       *
       * @return {Element} Returns an installable clone of the SVG element
       * matching `id`.
       */
      _cloneIcon: function(id, mirrorAllowed) {
        // create the icon map on-demand, since the iconset itself has no discrete
        // signal to know when it's children are fully parsed
        this._icons = this._icons || this._createIconMap();
        return this._prepareSvgClone(this._icons[id], this.size, mirrorAllowed);
      },

      /**
       * @param {Element} sourceSvg
       * @param {number} size
       * @param {Boolean} mirrorAllowed
       * @return {Element}
       */
      _prepareSvgClone: function(sourceSvg, size, mirrorAllowed) {
        if (sourceSvg) {
          var content = sourceSvg.cloneNode(true),
              svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
              viewBox =
                  content.getAttribute('viewBox') || '0 0 ' + size + ' ' + size,
              cssText =
                  'pointer-events: none; display: block; width: 100%; height: 100%;';

          if (mirrorAllowed && content.hasAttribute('mirror-in-rtl')) {
            cssText +=
                '-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;';
          }

          svg.setAttribute('viewBox', viewBox);
          svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
          svg.setAttribute('focusable', 'false');
          // TODO(dfreedm): `pointer-events: none` works around
          // https://crbug.com/370136
          // TODO(sjmiles): inline style may not be ideal, but avoids requiring a
          // shadow-root
          svg.style.cssText = cssText;
          svg.appendChild(content).removeAttribute('id');
          return svg;
        }
        return null;
      }

    });

    /**
    @license
    Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */

    /**

    `iron-icons` is a utility import that includes the definition for the
    `iron-icon` element, `iron-iconset-svg` element, as well as an import for the
    default icon set.

    The `iron-icons` directory also includes imports for additional icon sets that
    can be loaded into your project.

    Example loading icon set:

        <script type="module">
          import '@polymer/iron-icons/maps-icons.js';
        </script>

    To use an icon from one of these sets, first prefix your `iron-icon` with the
    icon set name, followed by a colon, ":", and then the icon id.

    Example using the directions-bus icon from the maps icon set:

        <iron-icon icon="maps:directions-bus"></iron-icon>

    See [iron-icon](https://www.webcomponents.org/element/@polymer/iron-icon) for
    more information about working with icons.

    See [iron-iconset](https://www.webcomponents.org/element/@polymer/iron-iconset)
    and
    [iron-iconset-svg](https://www.webcomponents.org/element/@polymer/iron-iconset-svg)
    for more information about how to create a custom iconset.

    @group Iron Elements
    @pseudoElement iron-icons
    @demo demo/index.html
    */

    const template$1 = html`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;

    document.head.appendChild(template$1.content);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics$1 = function(d, b) {
        extendStatics$1 = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics$1(d, b);
    };

    function __extends$1(d, b) {
        extendStatics$1(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
    @license @nocompile
    Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    (function () {

      (function(){if(void 0===window.Reflect||void 0===window.customElements||window.customElements.polyfillWrapFlushCallback)return;const a=HTMLElement;window.HTMLElement=function HTMLElement(){return Reflect.construct(a,[],this.constructor)},HTMLElement.prototype=a.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,a);})();

    }());

    var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    /**
    @license @nocompile
    Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    (function(){/*

     Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    var r,t="undefined"!=typeof window&&window===this?this:"undefined"!=typeof commonjsGlobal$1&&null!=commonjsGlobal$1?commonjsGlobal$1:this,ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value);};function da(){da=function(){};t.Symbol||(t.Symbol=ea);}var ea=function(){var a=0;return function(b){return "jscomp_symbol_"+(b||"")+a++}}();
    function fa(){da();var a=t.Symbol.iterator;a||(a=t.Symbol.iterator=t.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ca(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(this)}});fa=function(){};}function ha(a){var b=0;return ia(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ia(a){fa();a={next:a};a[t.Symbol.iterator]=function(){return this};return a}function ja(a){fa();var b=a[Symbol.iterator];return b?b.call(a):ha(a)}
    function ka(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var la;if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={Ga:!0},oa={};try{oa.__proto__=na;ma=oa.Ga;break a}catch(a){}ma=!1;}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;}var pa=la;function qa(){this.f=!1;this.b=null;this.aa=void 0;this.a=1;this.F=0;this.c=null;}
    function ra(a){if(a.f)throw new TypeError("Generator is already running");a.f=!0;}qa.prototype.u=function(a){this.aa=a;};function sa(a,b){a.c={Ja:b,Na:!0};a.a=a.F;}qa.prototype.return=function(a){this.c={return:a};this.a=this.F;};function ta(a,b){a.a=3;return {value:b}}function ua(a){this.a=new qa;this.b=a;}function va(a,b){ra(a.a);var c=a.a.b;if(c)return wa(a,"return"in c?c["return"]:function(a){return {value:a,done:!0}},b,a.a.return);a.a.return(b);return xa(a)}
    function wa(a,b,c,d){try{var e=b.call(a.a.b,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.f=!1,e;var f=e.value;}catch(g){return a.a.b=null,sa(a.a,g),xa(a)}a.a.b=null;d.call(a.a,f);return xa(a)}function xa(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.f=!1,{value:b.value,done:!1}}catch(c){a.a.aa=void 0,sa(a.a,c);}a.a.f=!1;if(a.a.c){b=a.a.c;a.a.c=null;if(b.Na)throw b.Ja;return {value:b.return,done:!0}}return {value:void 0,done:!0}}
    function ya(a){this.next=function(b){ra(a.a);a.a.b?b=wa(a,a.a.b.next,b,a.a.u):(a.a.u(b),b=xa(a));return b};this.throw=function(b){ra(a.a);a.a.b?b=wa(a,a.a.b["throw"],b,a.a.u):(sa(a.a,b),b=xa(a));return b};this.return=function(b){return va(a,b)};fa();this[Symbol.iterator]=function(){return this};}function Ba(a,b){b=new ya(new ua(b));pa&&pa(b,a.prototype);return b}
    (function(){if(!function(){var a=document.createEvent("Event");a.initEvent("foo",!0,!0);a.preventDefault();return a.defaultPrevented}()){var a=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(a.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return !0},configurable:!0}));};}var b=/Trident/.test(navigator.userAgent);if(!window.Event||b&&"function"!==typeof window.Event){var c=window.Event;window.Event=function(a,b){b=b||{};var c=document.createEvent("Event");
    c.initEvent(a,!!b.bubbles,!!b.cancelable);return c};if(c){for(var d in c)window.Event[d]=c[d];window.Event.prototype=c.prototype;}}if(!window.CustomEvent||b&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(a,b){b=b||{};var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c},window.CustomEvent.prototype=window.Event.prototype;if(!window.MouseEvent||b&&"function"!==typeof window.MouseEvent){b=window.MouseEvent;window.MouseEvent=
    function(a,b){b=b||{};var c=document.createEvent("MouseEvent");c.initMouseEvent(a,!!b.bubbles,!!b.cancelable,b.view||window,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);return c};if(b)for(d in b)window.MouseEvent[d]=b[d];window.MouseEvent.prototype=b.prototype;}Array.from||(Array.from=function(a){return [].slice.call(a)});Object.assign||(Object.assign=function(a,b){for(var c=[].slice.call(arguments,1),d=0,e;d<c.length;d++)if(e=c[d])for(var f=
    a,n=e,q=Object.getOwnPropertyNames(n),I=0;I<q.length;I++)e=q[I],f[e]=n[e];return a});})();(function(){function a(){}function b(a,b){if(!a.childNodes.length)return [];switch(a.nodeType){case Node.DOCUMENT_NODE:return Q.call(a,b);case Node.DOCUMENT_FRAGMENT_NODE:return Eb.call(a,b);default:return x.call(a,b)}}var c="undefined"===typeof HTMLTemplateElement,d=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),e=!1;/Trident/.test(navigator.userAgent)&&function(){function a(a,b){if(a instanceof DocumentFragment)for(var d;d=a.firstChild;)c.call(this,d,b);else c.call(this,
    a,b);return a}e=!0;var b=Node.prototype.cloneNode;Node.prototype.cloneNode=function(a){a=b.call(this,a);this instanceof DocumentFragment&&(a.__proto__=DocumentFragment.prototype);return a};DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},
    configurable:!0},nodeName:{get:function(){return "#document-fragment"},configurable:!0}});var c=Node.prototype.insertBefore;Node.prototype.insertBefore=a;var d=Node.prototype.appendChild;Node.prototype.appendChild=function(b){b instanceof DocumentFragment?a.call(this,b,null):d.call(this,b);return b};var f=Node.prototype.removeChild,g=Node.prototype.replaceChild;Node.prototype.replaceChild=function(b,c){b instanceof DocumentFragment?(a.call(this,b,c),f.call(this,c)):g.call(this,b,c);return c};Document.prototype.createDocumentFragment=
    function(){var a=this.createElement("df");a.__proto__=DocumentFragment.prototype;return a};var h=Document.prototype.importNode;Document.prototype.importNode=function(a,b){b=h.call(this,a,b||!1);a instanceof DocumentFragment&&(b.__proto__=DocumentFragment.prototype);return b};}();var f=Node.prototype.cloneNode,g=Document.prototype.createElement,h=Document.prototype.importNode,k=Node.prototype.removeChild,l=Node.prototype.appendChild,n=Node.prototype.replaceChild,q=DOMParser.prototype.parseFromString,
    I=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(a){this.innerHTML=a;}},v=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},x=Element.prototype.querySelectorAll,Q=Document.prototype.querySelectorAll,Eb=DocumentFragment.prototype.querySelectorAll,Fb=function(){if(!c){var a=document.createElement("template"),b=document.createElement("template");b.content.appendChild(document.createElement("div"));
    a.content.appendChild(b);a=a.cloneNode(!0);return 0===a.content.childNodes.length||0===a.content.firstChild.content.childNodes.length||d}}();if(c){var T=document.implementation.createHTMLDocument("template"),Ja=!0,p=document.createElement("style");p.textContent="template{display:none;}";var za=document.head;za.insertBefore(p,za.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var aa=!document.createElement("div").hasOwnProperty("innerHTML");a.S=function(b){if(!b.content&&b.namespaceURI===
    document.documentElement.namespaceURI){b.content=T.createDocumentFragment();for(var c;c=b.firstChild;)l.call(b.content,c);if(aa)b.__proto__=a.prototype;else if(b.cloneNode=function(b){return a.b(this,b)},Ja)try{m(b),y(b);}catch(vh){Ja=!1;}a.a(b.content);}};var X={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},m=function(b){Object.defineProperty(b,"innerHTML",{get:function(){return ba(this)},set:function(b){var c=X[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(b)||
    ["",""])[1].toLowerCase()];if(c)for(var d=0;d<c.length;d++)b="<"+c[d]+">"+b+"</"+c[d]+">";T.body.innerHTML=b;for(a.a(T);this.content.firstChild;)k.call(this.content,this.content.firstChild);b=T.body;if(c)for(d=0;d<c.length;d++)b=b.lastChild;for(;b.firstChild;)l.call(this.content,b.firstChild);},configurable:!0});},y=function(a){Object.defineProperty(a,"outerHTML",{get:function(){return "<template>"+this.innerHTML+"</template>"},set:function(a){if(this.parentNode){T.body.innerHTML=a;for(a=this.ownerDocument.createDocumentFragment();T.body.firstChild;)l.call(a,
    T.body.firstChild);n.call(this.parentNode,a,this);}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");},configurable:!0});};m(a.prototype);y(a.prototype);a.a=function(c){c=b(c,"template");for(var d=0,e=c.length,f;d<e&&(f=c[d]);d++)a.S(f);};document.addEventListener("DOMContentLoaded",function(){a.a(document);});Document.prototype.createElement=function(){var b=g.apply(this,arguments);"template"===b.localName&&a.S(b);return b};DOMParser.prototype.parseFromString=
    function(){var b=q.apply(this,arguments);a.a(b);return b};Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return ba(this)},set:function(b){I.set.call(this,b);a.a(this);},configurable:!0,enumerable:!0});var Y=/[&\u00A0"]/g,Gb=/[&\u00A0<>]/g,Ka=function(a){switch(a){case "&":return "&amp;";case "<":return "&lt;";case ">":return "&gt;";case '"':return "&quot;";case "\u00a0":return "&nbsp;"}};p=function(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b};var Aa=p("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
    La=p("style script xmp iframe noembed noframes plaintext noscript".split(" ")),ba=function(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):v.get.call(a),e=0,f=d.length,g;e<f&&(g=d[e]);e++){a:{var h=g;var k=a;var l=b;switch(h.nodeType){case Node.ELEMENT_NODE:for(var n=h.localName,m="<"+n,q=h.attributes,x=0;k=q[x];x++)m+=" "+k.name+'="'+k.value.replace(Y,Ka)+'"';m+=">";h=Aa[n]?m:m+ba(h,l)+"</"+n+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&La[k.localName]?h:h.replace(Gb,Ka);break a;
    case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),Error("not implemented");}}c+=h;}return c};}if(c||Fb){a.b=function(a,b){var c=f.call(a,!1);this.S&&this.S(c);b&&(l.call(c.content,f.call(a.content,!0)),Ma(c.content,a.content));return c};var Ma=function(c,d){if(d.querySelectorAll&&(d=b(d,"template"),0!==d.length)){c=b(c,"template");for(var e=0,f=c.length,g,h;e<f;e++)h=d[e],g=c[e],a&&a.S&&a.S(h),n.call(g.parentNode,sf.call(h,!0),g);}},sf=Node.prototype.cloneNode=
    function(b){if(!e&&d&&this instanceof DocumentFragment)if(b)var c=tf.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&"template"===this.localName&&this.namespaceURI==document.documentElement.namespaceURI?c=a.b(this,b):c=f.call(this,b);b&&Ma(c,this);return c},tf=Document.prototype.importNode=function(c,d){d=d||!1;if("template"===c.localName)return a.b(c,d);var e=h.call(this,c,d);if(d){Ma(e,c);c=b(e,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
    for(var f,k=0;k<c.length;k++){f=c[k];d=g.call(document,"script");d.textContent=f.textContent;for(var l=f.attributes,m=0,q;m<l.length;m++)q=l[m],d.setAttribute(q.name,q.value);n.call(f.parentNode,d,f);}}return e};}c&&(window.HTMLTemplateElement=a);})();var Ca=setTimeout;function Da(){}function Ea(a,b){return function(){a.apply(b,arguments);}}function u(a){if(!(this instanceof u))throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this.I=0;this.oa=!1;this.w=void 0;this.U=[];Fa(a,this);}
    function Ga(a,b){for(;3===a.I;)a=a.w;0===a.I?a.U.push(b):(a.oa=!0,Ha(function(){var c=1===a.I?b.Pa:b.Qa;if(null===c)(1===a.I?Ia:Na)(b.ma,a.w);else{try{var d=c(a.w);}catch(e){Na(b.ma,e);return}Ia(b.ma,d);}}));}function Ia(a,b){try{if(b===a)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"===typeof b||"function"===typeof b)){var c=b.then;if(b instanceof u){a.I=3;a.w=b;Oa(a);return}if("function"===typeof c){Fa(Ea(c,b),a);return}}a.I=1;a.w=b;Oa(a);}catch(d){Na(a,d);}}
    function Na(a,b){a.I=2;a.w=b;Oa(a);}function Oa(a){2===a.I&&0===a.U.length&&Ha(function(){a.oa||"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",a.w);});for(var b=0,c=a.U.length;b<c;b++)Ga(a,a.U[b]);a.U=null;}function Pa(a,b,c){this.Pa="function"===typeof a?a:null;this.Qa="function"===typeof b?b:null;this.ma=c;}function Fa(a,b){var c=!1;try{a(function(a){c||(c=!0,Ia(b,a));},function(a){c||(c=!0,Na(b,a));});}catch(d){c||(c=!0,Na(b,d));}}
    u.prototype["catch"]=function(a){return this.then(null,a)};u.prototype.then=function(a,b){var c=new this.constructor(Da);Ga(this,new Pa(a,b,c));return c};u.prototype["finally"]=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){return b.reject(c)})})};
    function Qa(a){return new u(function(b,c){function d(a,g){try{if(g&&("object"===typeof g||"function"===typeof g)){var h=g.then;if("function"===typeof h){h.call(g,function(b){d(a,b);},c);return}}e[a]=g;0===--f&&b(e);}catch(n){c(n);}}if(!a||"undefined"===typeof a.length)throw new TypeError("Promise.all accepts an array");var e=Array.prototype.slice.call(a);if(0===e.length)return b([]);for(var f=e.length,g=0;g<e.length;g++)d(g,e[g]);})}
    function Ra(a){return a&&"object"===typeof a&&a.constructor===u?a:new u(function(b){b(a);})}function Sa(a){return new u(function(b,c){c(a);})}function Ta(a){return new u(function(b,c){for(var d=0,e=a.length;d<e;d++)a[d].then(b,c);})}var Ha="function"===typeof setImmediate&&function(a){setImmediate(a);}||function(a){Ca(a,0);};/*

    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    if(!window.Promise){window.Promise=u;u.prototype.then=u.prototype.then;u.all=Qa;u.race=Ta;u.resolve=Ra;u.reject=Sa;var Ua=document.createTextNode(""),Va=[];(new MutationObserver(function(){for(var a=Va.length,b=0;b<a;b++)Va[b]();Va.splice(0,a);})).observe(Ua,{characterData:!0});Ha=function(a){Va.push(a);Ua.textContent=0<Ua.textContent.length?"":"a";};}(function(a,b){if(!(b in a)){var c=typeof commonjsGlobal$1===typeof c?window:commonjsGlobal$1,d=0,e=""+Math.random(),f="__\u0001symbol@@"+e,g=a.getOwnPropertyNames,h=a.getOwnPropertyDescriptor,k=a.create,l=a.keys,n=a.freeze||a,q=a.defineProperty,I=a.defineProperties,v=h(a,"getOwnPropertyNames"),x=a.prototype,Q=x.hasOwnProperty,Eb=x.propertyIsEnumerable,Fb=x.toString,T=function(a,b,c){Q.call(a,f)||q(a,f,{enumerable:!1,configurable:!1,writable:!1,value:{}});a[f]["@@"+b]=c;},Ja=function(a,b){var c=k(a);g(b).forEach(function(a){X.call(b,
    a)&&Aa(c,a,b[a]);});return c},p=function(){},za=function(a){return a!=f&&!Q.call(Y,a)},aa=function(a){return a!=f&&Q.call(Y,a)},X=function(a){var b=""+a;return aa(b)?Q.call(this,b)&&this[f]["@@"+b]:Eb.call(this,a)},m=function(b){q(x,b,{enumerable:!1,configurable:!0,get:p,set:function(a){ba(this,b,{enumerable:!1,configurable:!0,writable:!0,value:a});T(this,b,!0);}});return n(Y[b]=q(a(b),"constructor",Gb))},y=function(a){if(this&&this!==c)throw new TypeError("Symbol is not a constructor");return m("__\u0001symbol:".concat(a||
    "",e,++d))},Y=k(null),Gb={value:y},Ka=function(a){return Y[a]},Aa=function(a,b,c){var d=""+b;if(aa(d)){b=ba;if(c.enumerable){var e=k(c);e.enumerable=!1;}else e=c;b(a,d,e);T(a,d,!!c.enumerable);}else q(a,b,c);return a},La=function(a){return g(a).filter(aa).map(Ka)};v.value=Aa;q(a,"defineProperty",v);v.value=La;q(a,b,v);v.value=function(a){return g(a).filter(za)};q(a,"getOwnPropertyNames",v);v.value=function(a,b){var c=La(b);c.length?l(b).concat(c).forEach(function(c){X.call(b,c)&&Aa(a,c,b[c]);}):I(a,
    b);return a};q(a,"defineProperties",v);v.value=X;q(x,"propertyIsEnumerable",v);v.value=y;q(c,"Symbol",v);v.value=function(a){a="__\u0001symbol:".concat("__\u0001symbol:",a,e);return a in x?Y[a]:m(a)};q(y,"for",v);v.value=function(a){if(za(a))throw new TypeError(a+" is not a symbol");return Q.call(Y,a)?a.slice(20,-e.length):void 0};q(y,"keyFor",v);v.value=function(a,b){var c=h(a,b);c&&aa(b)&&(c.enumerable=X.call(a,b));return c};q(a,"getOwnPropertyDescriptor",v);v.value=function(a,b){return 1===arguments.length?
    k(a):Ja(a,b)};q(a,"create",v);v.value=function(){var a=Fb.call(this);return "[object String]"===a&&aa(this)?"[object Symbol]":a};q(x,"toString",v);try{var ba=k(q({},"__\u0001symbol:",{get:function(){return q(this,"__\u0001symbol:",{value:!1})["__\u0001symbol:"]}}))["__\u0001symbol:"]||q;}catch(Ma){ba=function(a,b,c){var d=h(x,b);delete x[b];q(a,b,c);q(x,b,d);};}}})(Object,"getOwnPropertySymbols");
    (function(a){var b=a.defineProperty,c=a.prototype,d=c.toString,e;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(f){if(!(f in Symbol))switch(b(Symbol,f,{value:Symbol(f)}),f){case "toStringTag":e=a.getOwnPropertyDescriptor(c,"toString"),e.value=function(){var a=d.call(this),b=this[Symbol.toStringTag];return "undefined"===typeof b?a:"[object "+b+"]"},b(c,"toString",e);}});})(Object,Symbol);
    (function(a,b,c){function d(){return this}b[a]||(b[a]=function(){var b=0,c=this,g={next:function(){var a=c.length<=b;return a?{done:a}:{done:a,value:c[b++]}}};g[a]=d;return g});c[a]||(c[a]=function(){var b=String.fromCodePoint,c=this,g=0,h=c.length,k={next:function(){var a=h<=g,d=a?"":b(c.codePointAt(g));g+=d.length;return a?{done:a}:{done:a,value:d}}};k[a]=d;return k});})(Symbol.iterator,Array.prototype,String.prototype);/*

    Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    var Wa=Object.prototype.toString;Object.prototype.toString=function(){return void 0===this?"[object Undefined]":null===this?"[object Null]":Wa.call(this)};Object.keys=function(a){return Object.getOwnPropertyNames(a).filter(function(b){return (b=Object.getOwnPropertyDescriptor(a,b))&&b.enumerable})};var Xa=window.Symbol.iterator;
    String.prototype[Xa]&&String.prototype.codePointAt||(String.prototype[Xa]=function Ya(){var b,c=this;return Ba(Ya,function(d){1==d.a&&(b=0);if(3!=d.a)return b<c.length?d=ta(d,c[b]):(d.a=0,d=void 0),d;b++;d.a=2;})});Set.prototype[Xa]||(Set.prototype[Xa]=function Za(){var b,c=this,d;return Ba(Za,function(e){1==e.a&&(b=[],c.forEach(function(c){b.push(c);}),d=0);if(3!=e.a)return d<b.length?e=ta(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2;})});
    Map.prototype[Xa]||(Map.prototype[Xa]=function $a(){var b,c=this,d;return Ba($a,function(e){1==e.a&&(b=[],c.forEach(function(c,d){b.push([d,c]);}),d=0);if(3!=e.a)return d<b.length?e=ta(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2;})});/*

     Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    window.WebComponents=window.WebComponents||{flags:{}};var ab=document.querySelector('script[src*="webcomponents-bundle"]'),bb=/wc-(.+)/,w={};if(!w.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var b;a[0]&&(b=a[0].match(bb))&&(w[b[1]]=a[1]||!0);});if(ab)for(var cb=0,db=void 0;db=ab.attributes[cb];cb++)"src"!==db.name&&(w[db.name]=db.value||!0);if(w.log&&w.log.split){var eb=w.log.split(",");w.log={};eb.forEach(function(a){w.log[a]=!0;});}else w.log={};}
    window.WebComponents.flags=w;var fb=w.shadydom;fb&&(window.ShadyDOM=window.ShadyDOM||{},window.ShadyDOM.force=fb);var gb=w.register||w.ce;gb&&window.customElements&&(window.customElements.forcePolyfill=gb);/*

    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    function hb(){}hb.prototype.toJSON=function(){return {}};function z(a){a.__shady||(a.__shady=new hb);return a.__shady}function A(a){return a&&a.__shady}var B=window.ShadyDOM||{};B.La=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var ib=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");B.D=!!(ib&&ib.configurable&&ib.get);B.ka=B.force||!B.La;B.M=B.noPatch||!1;B.ta=B.preferPerformance;var jb=navigator.userAgent.match("Trident");B.ya=jb;function kb(a){return (a=A(a))&&void 0!==a.firstChild}function C(a){return "ShadyRoot"===a.Da}function lb(a){return (a=(a=A(a))&&a.root)&&mb(a)}
    var nb=Element.prototype,ob=nb.matches||nb.matchesSelector||nb.mozMatchesSelector||nb.msMatchesSelector||nb.oMatchesSelector||nb.webkitMatchesSelector,pb=document.createTextNode(""),qb=0,rb=[];(new MutationObserver(function(){for(;rb.length;)try{rb.shift()();}catch(a){throw pb.textContent=qb++,a;}})).observe(pb,{characterData:!0});function sb(a){rb.push(a);pb.textContent=qb++;}var tb=!!document.contains;function ub(a,b){for(;b;){if(b==a)return !0;b=b.__shady_parentNode;}return !1}
    function vb(a){for(var b=a.length-1;0<=b;b--){var c=a[b],d=c.getAttribute("id")||c.getAttribute("name");d&&"length"!==d&&isNaN(d)&&(a[d]=c);}a.item=function(b){return a[b]};a.namedItem=function(b){if("length"!==b&&isNaN(b)&&a[b])return a[b];for(var c=ja(a),d=c.next();!d.done;d=c.next())if(d=d.value,(d.getAttribute("id")||d.getAttribute("name"))==b)return d;return null};return a}function wb(a){var b=[];for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)b.push(a);return b}
    function xb(a){var b=[];for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b.push(a);return b}function D(a,b,c,d){c=void 0===c?"":c;for(var e in b){var f=b[e];if(!(d&&0<=d.indexOf(e))){f.configurable=!0;var g=c+e;if(f.value)a[g]=f.value;else try{Object.defineProperty(a,g,f);}catch(h){}}}}function E(a){var b={};Object.getOwnPropertyNames(a).forEach(function(c){b[c]=Object.getOwnPropertyDescriptor(a,c);});return b}var yb=[],zb;function Ab(a){zb||(zb=!0,sb(Bb));yb.push(a);}function Bb(){zb=!1;for(var a=!!yb.length;yb.length;)yb.shift()();return a}Bb.list=yb;function Cb(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.$=new Set;}function Db(a){a.a||(a.a=!0,sb(function(){a.flush();}));}Cb.prototype.flush=function(){if(this.a){this.a=!1;var a=this.takeRecords();a.length&&this.$.forEach(function(b){b(a);});}};Cb.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return []};
    function Hb(a,b){var c=z(a);c.V||(c.V=new Cb);c.V.$.add(b);var d=c.V;return {Ca:b,P:d,Ea:a,takeRecords:function(){return d.takeRecords()}}}function Ib(a){var b=a&&a.P;b&&(b.$.delete(a.Ca),b.$.size||(z(a.Ea).V=null));}
    function Jb(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})}var Kb=/[&\u00A0"]/g,Lb=/[&\u00A0<>]/g;function Mb(a){switch(a){case "&":return "&amp;";case "<":return "&lt;";case ">":return "&gt;";case '"':return "&quot;";case "\u00a0":return "&nbsp;"}}function Nb(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var Ob=Nb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),Pb=Nb("style script xmp iframe noembed noframes plaintext noscript".split(" "));
    function Qb(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g=void 0;e<f&&(g=d[e]);e++){a:{var h=g;var k=a,l=b;switch(h.nodeType){case Node.ELEMENT_NODE:k=h.localName;for(var n="<"+k,q=h.attributes,I=0,v;v=q[I];I++)n+=" "+v.name+'="'+v.value.replace(Kb,Mb)+'"';n+=">";h=Ob[k]?n:n+Qb(h,l)+"</"+k+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&Pb[k.localName]?h:h.replace(Lb,Mb);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),
    Error("not implemented");}}c+=h;}return c}var Rb=B.D,Sb={querySelector:function(a){return this.__shady_native_querySelector(a)},querySelectorAll:function(a){return this.__shady_native_querySelectorAll(a)}},Tb={};function Ub(a){Tb[a]=function(b){return b["__shady_native_"+a]};}function Vb(a,b){D(a,b,"__shady_native_");for(var c in b)Ub(c);}function F(a,b){b=void 0===b?[]:b;for(var c=0;c<b.length;c++){var d=b[c],e=Object.getOwnPropertyDescriptor(a,d);e&&(Object.defineProperty(a,"__shady_native_"+d,e),e.value?Sb[d]||(Sb[d]=e.value):Ub(d));}}
    var G=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),H=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1),Wb=document.implementation.createHTMLDocument("inert");function Xb(a){for(var b;b=a.__shady_native_firstChild;)a.__shady_native_removeChild(b);}var Yb=["firstElementChild","lastElementChild","children","childElementCount"],Zb=["querySelector","querySelectorAll"];
    function $b(){var a=["dispatchEvent","addEventListener","removeEventListener"];window.EventTarget?F(window.EventTarget.prototype,a):(F(Node.prototype,a),F(Window.prototype,a));Rb?F(Node.prototype,"parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")):Vb(Node.prototype,{parentNode:{get:function(){G.currentNode=this;return G.parentNode()}},firstChild:{get:function(){G.currentNode=this;return G.firstChild()}},lastChild:{get:function(){G.currentNode=
    this;return G.lastChild()}},previousSibling:{get:function(){G.currentNode=this;return G.previousSibling()}},nextSibling:{get:function(){G.currentNode=this;return G.nextSibling()}},childNodes:{get:function(){var a=[];G.currentNode=this;for(var c=G.firstChild();c;)a.push(c),c=G.nextSibling();return a}},parentElement:{get:function(){H.currentNode=this;return H.parentNode()}},textContent:{get:function(){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(var a=document.createTreeWalker(this,
    NodeFilter.SHOW_TEXT,null,!1),c="",d;d=a.nextNode();)c+=d.nodeValue;return c;default:return this.nodeValue}},set:function(a){if("undefined"===typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:Xb(this);(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_native_insertBefore(document.createTextNode(a),void 0);break;default:this.nodeValue=a;}}}});F(Node.prototype,"appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
    F(HTMLElement.prototype,["parentElement","contains"]);a={firstElementChild:{get:function(){H.currentNode=this;return H.firstChild()}},lastElementChild:{get:function(){H.currentNode=this;return H.lastChild()}},children:{get:function(){var a=[];H.currentNode=this;for(var c=H.firstChild();c;)a.push(c),c=H.nextSibling();return vb(a)}},childElementCount:{get:function(){return this.children?this.children.length:0}}};Rb?(F(Element.prototype,Yb),F(Element.prototype,["previousElementSibling","nextElementSibling",
    "innerHTML","className"]),F(HTMLElement.prototype,["children","innerHTML","className"])):(Vb(Element.prototype,a),Vb(Element.prototype,{previousElementSibling:{get:function(){H.currentNode=this;return H.previousSibling()}},nextElementSibling:{get:function(){H.currentNode=this;return H.nextSibling()}},innerHTML:{get:function(){return Qb(this,wb)},set:function(a){var b="template"===this.localName?this.content:this;Xb(b);var d=this.localName||"div";d=this.namespaceURI&&this.namespaceURI!==Wb.namespaceURI?
    Wb.createElementNS(this.namespaceURI,d):Wb.createElement(d);d.innerHTML=a;for(a="template"===this.localName?d.content:d;d=a.__shady_native_firstChild;)b.__shady_native_insertBefore(d,void 0);}},className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a);}}}));F(Element.prototype,"setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));F(Element.prototype,Zb);F(HTMLElement.prototype,["focus","blur"]);window.HTMLTemplateElement&&
    F(window.HTMLTemplateElement.prototype,["innerHTML"]);Rb?F(DocumentFragment.prototype,Yb):Vb(DocumentFragment.prototype,a);F(DocumentFragment.prototype,Zb);Rb?(F(Document.prototype,Yb),F(Document.prototype,["activeElement"])):Vb(Document.prototype,a);F(Document.prototype,["importNode","getElementById"]);F(Document.prototype,Zb);}var ac=E({get childNodes(){return this.__shady_childNodes},get firstChild(){return this.__shady_firstChild},get lastChild(){return this.__shady_lastChild},get childElementCount(){return this.__shady_childElementCount},get children(){return this.__shady_children},get firstElementChild(){return this.__shady_firstElementChild},get lastElementChild(){return this.__shady_lastElementChild},get shadowRoot(){return this.__shady_shadowRoot}}),bc=E({get textContent(){return this.__shady_textContent},set textContent(a){this.__shady_textContent=
    a;},get innerHTML(){return this.__shady_innerHTML},set innerHTML(a){return this.__shady_innerHTML=a}}),cc=E({get parentElement(){return this.__shady_parentElement},get parentNode(){return this.__shady_parentNode},get nextSibling(){return this.__shady_nextSibling},get previousSibling(){return this.__shady_previousSibling},get nextElementSibling(){return this.__shady_nextElementSibling},get previousElementSibling(){return this.__shady_previousElementSibling},get className(){return this.__shady_className},
    set className(a){return this.__shady_className=a}}),dc;for(dc in ac)ac[dc].enumerable=!1;for(var ec in bc)bc[ec].enumerable=!1;for(var fc in cc)cc[fc].enumerable=!1;var gc=B.D||B.M,hc=gc?function(){}:function(a){var b=z(a);b.Aa||(b.Aa=!0,D(a,cc));},ic=gc?function(){}:function(a){var b=z(a);b.za||(b.za=!0,D(a,ac),window.customElements&&!B.M||D(a,bc));};var jc="__eventWrappers"+Date.now(),kc=function(){var a=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return a?function(b){return a.get.call(b)}:null}(),lc=function(){function a(){}var b=!1,c={get capture(){b=!0;}};window.addEventListener("test",a,c);window.removeEventListener("test",a,c);return b}();function mc(a){if(a&&"object"===typeof a){var b=!!a.capture;var c=!!a.once;var d=!!a.passive;var e=a.O;}else b=!!a,d=c=!1;return {ua:e,capture:b,once:c,passive:d,sa:lc?a:b}}
    var nc={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,
    drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},oc={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};function pc(a){return a instanceof Node?a.__shady_getRootNode():a}
    function qc(a,b){var c=[],d=a;for(a=pc(a);d;)c.push(d),d.__shady_assignedSlot?d=d.__shady_assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d=d.host:d=d.__shady_parentNode;c[c.length-1]===document&&c.push(window);return c}function rc(a){a.__composedPath||(a.__composedPath=qc(a.target,!0));return a.__composedPath}function sc(a,b){if(!C)return a;a=qc(a,!0);for(var c=0,d,e=void 0,f,g=void 0;c<b.length;c++)if(d=b[c],f=pc(d),f!==e&&(g=a.indexOf(f),e=f),!C(f)||-1<g)return d}
    function tc(a){function b(b,d){b=new a(b,d);b.__composed=d&&!!d.composed;return b}b.__proto__=a;b.prototype=a.prototype;return b}var uc={focus:!0,blur:!0};function vc(a){return a.__target!==a.target||a.__relatedTarget!==a.relatedTarget}function wc(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!vc(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.__immediatePropagationStopped);d++);}
    function xc(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];wc(a,d,"capture");if(a.ga)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=A(d);f=f&&f.root;if(0===c||f&&f===e)if(wc(a,d,"bubble"),d!==window&&(e=d.__shady_getRootNode()),a.ga)break}}
    function yc(a,b,c,d,e,f){for(var g=0;g<a.length;g++){var h=a[g],k=h.type,l=h.capture,n=h.once,q=h.passive;if(b===h.node&&c===k&&d===l&&e===n&&f===q)return g}return -1}
    function zc(a,b,c){var d=mc(c),e=d.capture,f=d.once,g=d.passive,h=d.ua;d=d.sa;if(b){var k=typeof b;if("function"===k||"object"===k)if("object"!==k||b.handleEvent&&"function"===typeof b.handleEvent){if(oc[a])return this.__shady_native_addEventListener(a,b,d);var l=h||this;if(h=b[jc]){if(-1<yc(h,l,a,e,f,g))return}else b[jc]=[];h=function(d){f&&this.__shady_removeEventListener(a,b,c);d.__target||Ac(d);if(l!==this){var e=Object.getOwnPropertyDescriptor(d,"currentTarget");Object.defineProperty(d,"currentTarget",
    {get:function(){return l},configurable:!0});}d.__previousCurrentTarget=d.currentTarget;if(!C(l)&&"slot"!==l.localName||-1!=d.composedPath().indexOf(l))if(d.composed||-1<d.composedPath().indexOf(l))if(vc(d)&&d.target===d.relatedTarget)d.eventPhase===Event.BUBBLING_PHASE&&d.stopImmediatePropagation();else if(d.eventPhase===Event.CAPTURING_PHASE||d.bubbles||d.target===l||l instanceof Window){var g="function"===k?b.call(l,d):b.handleEvent&&b.handleEvent(d);l!==this&&(e?(Object.defineProperty(d,"currentTarget",
    e),e=null):delete d.currentTarget);return g}};b[jc].push({node:l,type:a,capture:e,once:f,passive:g,ab:h});uc[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][e?"capture":"bubble"].push(h)):this.__shady_native_addEventListener(a,h,d);}}}
    function Bc(a,b,c){if(b){var d=mc(c);c=d.capture;var e=d.once,f=d.passive,g=d.ua;d=d.sa;if(oc[a])return this.__shady_native_removeEventListener(a,b,d);var h=g||this;g=void 0;var k=null;try{k=b[jc];}catch(l){}k&&(e=yc(k,h,a,c,e,f),-1<e&&(g=k.splice(e,1)[0].ab,k.length||(b[jc]=void 0)));this.__shady_native_removeEventListener(a,g||b,d);g&&uc[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][c?"capture":"bubble"],b=a.indexOf(g),-1<b&&a.splice(b,1));}}
    function Cc(){for(var a in uc)window.__shady_native_addEventListener(a,function(a){a.__target||(Ac(a),xc(a));},!0);}
    var Dc=E({get composed(){void 0===this.__composed&&(kc?this.__composed="focusin"===this.type||"focusout"===this.type||kc(this):!1!==this.isTrusted&&(this.__composed=nc[this.type]));return this.__composed||!1},composedPath:function(){this.__composedPath||(this.__composedPath=qc(this.__target,this.composed));return this.__composedPath},get target(){return sc(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){if(!this.__relatedTarget)return null;this.__relatedTargetComposedPath||
    (this.__relatedTargetComposedPath=qc(this.__relatedTarget,!0));return sc(this.currentTarget||this.__previousCurrentTarget,this.__relatedTargetComposedPath)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.ga=!0;},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);this.ga=this.__immediatePropagationStopped=!0;}});
    function Ac(a){a.__target=a.target;a.__relatedTarget=a.relatedTarget;if(B.D){var b=Object.getPrototypeOf(a);if(!Object.hasOwnProperty(b,"__shady_patchedProto")){var c=Object.create(b);c.__shady_sourceProto=b;D(c,Dc);b.__shady_patchedProto=c;}a.__proto__=b.__shady_patchedProto;}else D(a,Dc);}var Ec=tc(Event),Fc=tc(CustomEvent),Gc=tc(MouseEvent);
    function Hc(){if(!kc&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var a=function(){var a=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.__shady_dispatchEvent(a);};Element.prototype.click?Element.prototype.click=a:HTMLElement.prototype.click&&(HTMLElement.prototype.click=a);}}var Ic=Object.getOwnPropertyNames(Document.prototype).filter(function(a){return "on"===a.substring(0,2)});function Jc(a,b){return {index:a,W:[],Z:b}}
    function Kc(a,b,c,d){var e=0,f=0,g=0,h=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k;}if(b==a.length&&d==c.length){h=a.length;for(var l=c.length,n=0;n<k-g&&Lc(a[--h],c[--l]);)n++;h=n;}e+=g;f+=g;b-=h;d-=h;if(0==b-e&&0==d-f)return [];if(e==b){for(b=Jc(e,0);f<d;)b.W.push(c[f++]);return [b]}if(f==d)return [Jc(e,b-e)];k=e;g=f;d=d-g+1;h=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(h),b[l][0]=l;for(l=0;l<h;l++)b[0][l]=l;for(l=1;l<d;l++)for(n=1;n<h;n++)if(a[k+n-1]===c[g+l-1])b[l][n]=
    b[l-1][n-1];else{var q=b[l-1][n]+1,I=b[l][n-1]+1;b[l][n]=q<I?q:I;}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)0==k?(a.push(2),g--):0==g?(a.push(3),k--):(h=b[k-1][g-1],l=b[k-1][g],n=b[k][g-1],q=l<n?l<h?l:h:n<h?n:h,q==h?(h==d?a.push(0):(a.push(1),d=h),k--,g--):q==l?(a.push(3),k--,d=l):(a.push(2),g--,d=n));a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=Jc(e,0));b.Z++;e++;b.W.push(c[f]);f++;break;case 2:b||(b=Jc(e,0));
    b.Z++;e++;break;case 3:b||(b=Jc(e,0)),b.W.push(c[f]),f++;}b&&k.push(b);return k}function Lc(a,b){return a===b}function Mc(a,b,c,d){hc(a);d=d||null;var e=z(a),f=d?z(d):null;e.previousSibling=d?f.previousSibling:b.__shady_lastChild;if(f=A(e.previousSibling))f.nextSibling=a;if(f=A(e.nextSibling=d))f.previousSibling=a;e.parentNode=b;d?d===c.firstChild&&(c.firstChild=a):(c.lastChild=a,c.firstChild||(c.firstChild=a));c.childNodes=null;}
    function Nc(a,b,c){ic(b);var d=z(b);void 0!==d.firstChild&&(d.childNodes=null);if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)Mc(a,b,d,c);else Mc(a,b,d,c);}
    function Oc(a,b){var c=z(a);b=z(b);a===b.firstChild&&(b.firstChild=c.nextSibling);a===b.lastChild&&(b.lastChild=c.previousSibling);a=c.previousSibling;var d=c.nextSibling;a&&(z(a).nextSibling=d);d&&(z(d).previousSibling=a);c.parentNode=c.previousSibling=c.nextSibling=void 0;void 0!==b.childNodes&&(b.childNodes=null);}
    function Pc(a,b){var c=z(a);if(b||void 0===c.firstChild){c.childNodes=null;var d=c.firstChild=a.__shady_native_firstChild;c.lastChild=a.__shady_native_lastChild;ic(a);c=d;for(d=void 0;c;c=c.__shady_native_nextSibling){var e=z(c);e.parentNode=b||a;e.nextSibling=c.__shady_native_nextSibling;e.previousSibling=d||null;d=c;hc(c);}}}var Qc=null;function Rc(){Qc||(Qc=window.ShadyCSS&&window.ShadyCSS.ScopingShim);return Qc||null}function Sc(a,b){var c=Rc();c&&c.unscopeNode(a,b);}function Tc(a,b){var c=Rc();if(!c)return !0;if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){c=!0;for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)c=c&&Tc(a,b);return c}return a.nodeType!==Node.ELEMENT_NODE?!0:c.currentScopeForNode(a)===b}function Uc(a){if(a.nodeType!==Node.ELEMENT_NODE)return "";var b=Rc();return b?b.currentScopeForNode(a):""}
    function Vc(a,b){if(a)for(a.nodeType===Node.ELEMENT_NODE&&b(a),a=a.__shady_firstChild;a;a=a.__shady_nextSibling)a.nodeType===Node.ELEMENT_NODE&&Vc(a,b);}var Wc=window.document,Xc=B.ta,Yc=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),Zc=Yc&&Yc.get;function $c(a){for(var b;b=a.__shady_firstChild;)a.__shady_removeChild(b);}function ad(a){var b=A(a);if(b&&void 0!==b.ca)for(b=a.__shady_firstChild;b;b=b.__shady_nextSibling)ad(b);if(a=A(a))a.ca=void 0;}function bd(a){var b=a;a&&"slot"===a.localName&&(b=(b=(b=A(a))&&b.T)&&b.length?b[0]:bd(a.__shady_nextSibling));return b}
    function cd(a,b,c){if(a=(a=A(a))&&a.V)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),Db(a);}
    var gd=E({get parentNode(){var a=A(this);a=a&&a.parentNode;return void 0!==a?a:this.__shady_native_parentNode},get firstChild(){var a=A(this);a=a&&a.firstChild;return void 0!==a?a:this.__shady_native_firstChild},get lastChild(){var a=A(this);a=a&&a.lastChild;return void 0!==a?a:this.__shady_native_lastChild},get nextSibling(){var a=A(this);a=a&&a.nextSibling;return void 0!==a?a:this.__shady_native_nextSibling},get previousSibling(){var a=A(this);a=a&&a.previousSibling;return void 0!==a?a:this.__shady_native_previousSibling},
    get childNodes(){if(kb(this)){var a=A(this);if(!a.childNodes){a.childNodes=[];for(var b=this.__shady_firstChild;b;b=b.__shady_nextSibling)a.childNodes.push(b);}var c=a.childNodes;}else c=this.__shady_native_childNodes;c.item=function(a){return c[a]};return c},get parentElement(){var a=A(this);(a=a&&a.parentNode)&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:this.__shady_native_parentElement},get isConnected(){if(Zc&&Zc.call(this))return !0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return !1;
    var a=this.ownerDocument;if(tb){if(a.__shady_native_contains(this))return !0}else if(a.documentElement&&a.documentElement.__shady_native_contains(this))return !0;for(a=this;a&&!(a instanceof Document);)a=a.__shady_parentNode||(C(a)?a.host:void 0);return !!(a&&a instanceof Document)},get textContent(){if(kb(this)){for(var a=[],b=this.__shady_firstChild;b;b=b.__shady_nextSibling)b.nodeType!==Node.COMMENT_NODE&&a.push(b.__shady_textContent);return a.join("")}return this.__shady_native_textContent},set textContent(a){if("undefined"===
    typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!kb(this)&&B.D){var b=this.__shady_firstChild;(b!=this.__shady_lastChild||b&&b.nodeType!=Node.TEXT_NODE)&&$c(this);this.__shady_native_textContent=a;}else $c(this),(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_insertBefore(document.createTextNode(a));break;default:this.nodeValue=a;}},insertBefore:function(a,b){if(this.ownerDocument!==Wc&&a.ownerDocument!==Wc)return this.__shady_native_insertBefore(a,
    b),a;if(a===this)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(b){var c=A(b);c=c&&c.parentNode;if(void 0!==c&&c!==this||void 0===c&&b.__shady_native_parentNode!==this)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(b===a)return a;var d=[],e=(c=dd(this))?c.host.localName:Uc(this),f=a.__shady_parentNode;if(f){var g=Uc(a);var h=!!c||!dd(a)||Xc&&void 0!==
    this.__noInsertionPoint;f.__shady_removeChild(a,h);}f=!0;var k=(!Xc||void 0===a.__noInsertionPoint&&void 0===this.__noInsertionPoint)&&!Tc(a,e),l=c&&!a.__noInsertionPoint&&(!Xc||a.nodeType===Node.DOCUMENT_FRAGMENT_NODE);if(l||k)k&&(g=g||Uc(a)),Vc(a,function(a){l&&"slot"===a.localName&&d.push(a);if(k){var b=g;Rc()&&(b&&Sc(a,b),(b=Rc())&&b.scopeNode(a,e));}});d.length&&(ed(c),c.c.push.apply(c.c,d instanceof Array?d:ka(ja(d))),J(c));kb(this)&&(Nc(a,this,b),c=A(this),lb(this)?(J(c.root),f=!1):c.root&&(f=
    !1));f?(c=C(this)?this.host:this,b?(b=bd(b),c.__shady_native_insertBefore(a,b)):c.__shady_native_appendChild(a)):a.ownerDocument!==this.ownerDocument&&this.ownerDocument.adoptNode(a);cd(this,a);return a},appendChild:function(a){if(this!=a||!C(a))return this.__shady_insertBefore(a)},removeChild:function(a,b){b=void 0===b?!1:b;if(this.ownerDocument!==Wc)return this.__shady_native_removeChild(a);if(a.__shady_parentNode!==this)throw Error("The node to be removed is not a child of this node: "+a);var c=
    dd(a),d=c&&fd(c,a),e=A(this);if(kb(this)&&(Oc(a,this),lb(this))){J(e.root);var f=!0;}if(Rc()&&!b&&c&&a.nodeType!==Node.TEXT_NODE){var g=Uc(a);Vc(a,function(a){Sc(a,g);});}ad(a);c&&((b=this&&"slot"===this.localName)&&(f=!0),(d||b)&&J(c));f||(f=C(this)?this.host:this,(!e.root&&"slot"!==a.localName||f===a.__shady_native_parentNode)&&f.__shady_native_removeChild(a));cd(this,null,a);return a},replaceChild:function(a,b){this.__shady_insertBefore(a,b);this.__shady_removeChild(b);return a},cloneNode:function(a){if("template"==
    this.localName)return this.__shady_native_cloneNode(a);var b=this.__shady_native_cloneNode(!1);if(a&&b.nodeType!==Node.ATTRIBUTE_NODE){a=this.__shady_firstChild;for(var c;a;a=a.__shady_nextSibling)c=a.__shady_cloneNode(!0),b.__shady_appendChild(c);}return b},getRootNode:function(a){if(this&&this.nodeType){var b=z(this),c=b.ca;void 0===c&&(C(this)?(c=this,b.ca=c):(c=(c=this.__shady_parentNode)?c.__shady_getRootNode(a):this,document.documentElement.__shady_native_contains(this)&&(b.ca=c)));return c}},
    contains:function(a){return ub(this,a)}});function hd(a,b,c){var d=[];id(a,b,c,d);return d}function id(a,b,c,d){for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling){var e;if(e=a.nodeType===Node.ELEMENT_NODE){e=a;var f=b,g=c,h=d,k=f(e);k&&h.push(e);g&&g(k)?e=k:(id(e,f,g,h),e=void 0);}if(e)break}}
    var jd=E({get firstElementChild(){var a=A(this);if(a&&void 0!==a.firstChild){for(a=this.__shady_firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_firstElementChild},get lastElementChild(){var a=A(this);if(a&&void 0!==a.lastChild){for(a=this.__shady_lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_lastElementChild},get children(){return kb(this)?vb(Array.prototype.filter.call(xb(this),
    function(a){return a.nodeType===Node.ELEMENT_NODE})):this.__shady_native_children},get childElementCount(){var a=this.__shady_children;return a?a.length:0}}),kd=E({querySelector:function(a){return hd(this,function(b){return ob.call(b,a)},function(a){return !!a})[0]||null},querySelectorAll:function(a,b){if(b){b=Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));var c=this.__shady_getRootNode();return b.filter(function(a){return a.__shady_getRootNode()==c})}return hd(this,function(b){return ob.call(b,
    a)})}}),ld=B.ta&&!B.M?Object.assign({},jd):jd;Object.assign(jd,kd);var md=E({getElementById:function(a){return ""===a?null:hd(this,function(b){return b.id==a},function(a){return !!a})[0]||null}});var nd=E({get activeElement(){var a=B.D?document.__shady_native_activeElement:document.activeElement;if(!a||!a.nodeType)return null;var b=!!C(this);if(!(this===document||b&&this.host!==a&&this.host.__shady_native_contains(a)))return null;for(b=dd(a);b&&b!==this;)a=b.host,b=dd(a);return this===document?b?null:a:b===this?a:null}});var od=document.implementation.createHTMLDocument("inert"),pd=E({get innerHTML(){return kb(this)?Qb("template"===this.localName?this.content:this,xb):this.__shady_native_innerHTML},set innerHTML(a){if("template"===this.localName)this.__shady_native_innerHTML=a;else{$c(this);var b=this.localName||"div";b=this.namespaceURI&&this.namespaceURI!==od.namespaceURI?od.createElementNS(this.namespaceURI,b):od.createElement(b);for(B.D?b.__shady_native_innerHTML=a:b.innerHTML=a;a=b.__shady_firstChild;)this.__shady_insertBefore(a);}}});var qd=E({addEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.O=c.O||this;this.host.__shady_addEventListener(a,b,c);},removeEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.O=c.O||this;this.host.__shady_removeEventListener(a,b,c);}});function rd(a,b){D(a,qd,b);D(a,nd,b);D(a,pd,b);D(a,jd,b);B.M&&!b?(D(a,gd,b),D(a,md,b)):B.D||(D(a,cc),D(a,ac),D(a,bc));}var sd={},td=B.deferConnectionCallbacks&&"loading"===document.readyState,ud;function vd(a){var b=[];do b.unshift(a);while(a=a.__shady_parentNode);return b}function wd(a,b,c){if(a!==sd)throw new TypeError("Illegal constructor");this.a=null;xd(this,b,c);}
    function xd(a,b,c){a.Da="ShadyRoot";a.host=b;a.mode=c&&c.mode;Pc(a.host);b=z(a.host);b.root=a;b.Ta="closed"!==a.mode?a:null;b=z(a);b.firstChild=b.lastChild=b.parentNode=b.nextSibling=b.previousSibling=null;if(B.preferPerformance)for(;b=a.host.__shady_native_firstChild;)a.host.__shady_native_removeChild(b);else J(a);}function J(a){a.R||(a.R=!0,Ab(function(){return yd(a)}));}
    function yd(a){var b;if(b=a.R){for(var c;a;)a:{a.R&&(c=a),b=a;a=b.host.__shady_getRootNode();if(C(a)&&(b=A(b.host))&&0<b.Y)break a;a=void 0;}b=c;}(c=b)&&c._renderSelf();}
    wd.prototype._renderSelf=function(){var a=td;td=!0;this.R=!1;if(this.a){zd(this);for(var b=0,c;b<this.a.length;b++){c=this.a[b];var d=A(c),e=d.assignedNodes;d.assignedNodes=[];d.T=[];if(d.qa=e)for(d=0;d<e.length;d++){var f=A(e[d]);f.ha=f.assignedSlot;f.assignedSlot===c&&(f.assignedSlot=null);}}for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)Ad(this,b);for(b=0;b<this.a.length;b++){c=this.a[b];e=A(c);if(!e.assignedNodes.length)for(d=c.__shady_firstChild;d;d=d.__shady_nextSibling)Ad(this,
    d,c);(d=(d=A(c.__shady_parentNode))&&d.root)&&(mb(d)||d.R)&&d._renderSelf();Bd(this,e.T,e.assignedNodes);if(d=e.qa){for(f=0;f<d.length;f++)A(d[f]).ha=null;e.qa=null;d.length>e.assignedNodes.length&&(e.ja=!0);}e.ja&&(e.ja=!1,Cd(this,c));}c=this.a;b=[];for(e=0;e<c.length;e++)d=c[e].__shady_parentNode,(f=A(d))&&f.root||!(0>b.indexOf(d))||b.push(d);for(c=0;c<b.length;c++){f=b[c];e=f===this?this.host:f;d=[];for(f=f.__shady_firstChild;f;f=f.__shady_nextSibling)if("slot"==f.localName)for(var g=A(f).T,h=0;h<
    g.length;h++)d.push(g[h]);else d.push(f);f=wb(e);g=Kc(d,d.length,f,f.length);for(var k=h=0,l=void 0;h<g.length&&(l=g[h]);h++){for(var n=0,q=void 0;n<l.W.length&&(q=l.W[n]);n++)q.__shady_native_parentNode===e&&e.__shady_native_removeChild(q),f.splice(l.index+k,1);k-=l.Z;}k=0;for(l=void 0;k<g.length&&(l=g[k]);k++)for(h=f[l.index],n=l.index;n<l.index+l.Z;n++)q=d[n],e.__shady_native_insertBefore(q,h),f.splice(n,0,q);}}if(!B.preferPerformance&&!this.pa)for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)c=
    A(b),b.__shady_native_parentNode!==this.host||"slot"!==b.localName&&c.assignedSlot||this.host.__shady_native_removeChild(b);this.pa=!0;td=a;ud&&ud();};function Ad(a,b,c){var d=z(b),e=d.ha;d.ha=null;c||(c=(a=a.b[b.__shady_slot||"__catchall"])&&a[0]);c?(z(c).assignedNodes.push(b),d.assignedSlot=c):d.assignedSlot=void 0;e!==d.assignedSlot&&d.assignedSlot&&(z(d.assignedSlot).ja=!0);}
    function Bd(a,b,c){for(var d=0,e=void 0;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=A(e).assignedNodes;f&&f.length&&Bd(a,b,f);}else b.push(c[d]);}function Cd(a,b){b.__shady_native_dispatchEvent(new Event("slotchange"));b=A(b);b.assignedSlot&&Cd(a,b.assignedSlot);}function ed(a){a.c=a.c||[];a.a=a.a||[];a.b=a.b||{};}
    function zd(a){if(a.c&&a.c.length){for(var b=a.c,c,d=0;d<b.length;d++){var e=b[d];Pc(e);var f=e.__shady_parentNode;Pc(f);f=A(f);f.Y=(f.Y||0)+1;f=Dd(e);a.b[f]?(c=c||{},c[f]=!0,a.b[f].push(e)):a.b[f]=[e];a.a.push(e);}if(c)for(var g in c)a.b[g]=Ed(a.b[g]);a.c=[];}}function Dd(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.Ba=b}
    function Ed(a){return a.sort(function(a,c){a=vd(a);for(var b=vd(c),e=0;e<a.length;e++){c=a[e];var f=b[e];if(c!==f)return a=xb(c.__shady_parentNode),a.indexOf(c)-a.indexOf(f)}})}
    function fd(a,b){if(a.a){zd(a);var c=a.b,d;for(d in c)for(var e=c[d],f=0;f<e.length;f++){var g=e[f];if(ub(b,g)){e.splice(f,1);var h=a.a.indexOf(g);0<=h&&(a.a.splice(h,1),(h=A(g.__shady_parentNode))&&h.Y&&h.Y--);f--;g=A(g);if(h=g.T)for(var k=0;k<h.length;k++){var l=h[k],n=l.__shady_native_parentNode;n&&n.__shady_native_removeChild(l);}g.T=[];g.assignedNodes=[];h=!0;}}return h}}function mb(a){zd(a);return !(!a.a||!a.a.length)}
    (function(a){a.__proto__=DocumentFragment.prototype;rd(a,"__shady_");rd(a);Object.defineProperties(a,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}});["localName","namespaceURI","prefix"].forEach(function(b){Object.defineProperty(a,b,{value:void 0,configurable:!0});});["ownerDocument","baseURI","isConnected"].forEach(function(b){Object.defineProperty(a,b,{get:function(){return this.host[b]},
    configurable:!0});});})(wd.prototype);
    if(window.customElements&&B.ka&&!B.preferPerformance){var Fd=new Map;ud=function(){var a=[];Fd.forEach(function(b,c){a.push([c,b]);});Fd.clear();for(var b=0;b<a.length;b++){var c=a[b][0];a[b][1]?c.__shadydom_connectedCallback():c.__shadydom_disconnectedCallback();}};td&&document.addEventListener("readystatechange",function(){td=!1;ud();},{once:!0});var Gd=function(a,b,c){var d=0,e="__isConnected"+d++;if(b||c)a.prototype.connectedCallback=a.prototype.__shadydom_connectedCallback=function(){td?Fd.set(this,
    !0):this[e]||(this[e]=!0,b&&b.call(this));},a.prototype.disconnectedCallback=a.prototype.__shadydom_disconnectedCallback=function(){td?this.isConnected||Fd.set(this,!1):this[e]&&(this[e]=!1,c&&c.call(this));};return a},Hd=window.customElements.define,define=function(a,b){var c=b.prototype.connectedCallback,d=b.prototype.disconnectedCallback;Hd.call(window.customElements,a,Gd(b,c,d));b.prototype.connectedCallback=c;b.prototype.disconnectedCallback=d;};window.customElements.define=define;Object.defineProperty(window.CustomElementRegistry.prototype,
    "define",{value:define,configurable:!0});}function dd(a){a=a.__shady_getRootNode();if(C(a))return a}function Id(a){this.node=a;}r=Id.prototype;r.addEventListener=function(a,b,c){return this.node.__shady_addEventListener(a,b,c)};r.removeEventListener=function(a,b,c){return this.node.__shady_removeEventListener(a,b,c)};r.appendChild=function(a){return this.node.__shady_appendChild(a)};r.insertBefore=function(a,b){return this.node.__shady_insertBefore(a,b)};r.removeChild=function(a){return this.node.__shady_removeChild(a)};r.replaceChild=function(a,b){return this.node.__shady_replaceChild(a,b)};
    r.cloneNode=function(a){return this.node.__shady_cloneNode(a)};r.getRootNode=function(a){return this.node.__shady_getRootNode(a)};r.contains=function(a){return this.node.__shady_contains(a)};r.dispatchEvent=function(a){return this.node.__shady_dispatchEvent(a)};r.setAttribute=function(a,b){this.node.__shady_setAttribute(a,b);};r.getAttribute=function(a){return this.node.__shady_native_getAttribute(a)};r.hasAttribute=function(a){return this.node.__shady_native_hasAttribute(a)};r.removeAttribute=function(a){this.node.__shady_removeAttribute(a);};
    r.attachShadow=function(a){return this.node.__shady_attachShadow(a)};r.focus=function(){this.node.__shady_native_focus();};r.blur=function(){this.node.__shady_blur();};r.importNode=function(a,b){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_importNode(a,b)};r.getElementById=function(a){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_getElementById(a)};r.querySelector=function(a){return this.node.__shady_querySelector(a)};
    r.querySelectorAll=function(a,b){return this.node.__shady_querySelectorAll(a,b)};r.assignedNodes=function(a){if("slot"===this.node.localName)return this.node.__shady_assignedNodes(a)};
    t.Object.defineProperties(Id.prototype,{activeElement:{configurable:!0,enumerable:!0,get:function(){if(C(this.node)||this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_activeElement}},_activeElement:{configurable:!0,enumerable:!0,get:function(){return this.activeElement}},host:{configurable:!0,enumerable:!0,get:function(){if(C(this.node))return this.node.host}},parentNode:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_parentNode}},firstChild:{configurable:!0,
    enumerable:!0,get:function(){return this.node.__shady_firstChild}},lastChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastChild}},nextSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextSibling}},previousSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousSibling}},childNodes:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childNodes}},parentElement:{configurable:!0,enumerable:!0,
    get:function(){return this.node.__shady_parentElement}},firstElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_firstElementChild}},lastElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastElementChild}},nextElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextElementSibling}},previousElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousElementSibling}},
    children:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_children}},childElementCount:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childElementCount}},shadowRoot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_shadowRoot}},assignedSlot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_assignedSlot}},isConnected:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_isConnected}},innerHTML:{configurable:!0,
    enumerable:!0,get:function(){return this.node.__shady_innerHTML},set:function(a){this.node.__shady_innerHTML=a;}},textContent:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_textContent},set:function(a){this.node.__shady_textContent=a;}},slot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_slot},set:function(a){this.node.__shady_slot=a;}},className:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_className},set:function(a){return this.node.__shady_className=
    a}}});Ic.forEach(function(a){Object.defineProperty(Id.prototype,a,{get:function(){return this.node["__shady_"+a]},set:function(b){this.node["__shady_"+a]=b;},configurable:!0});});var Jd=new WeakMap;function Kd(a){if(C(a)||a instanceof Id)return a;var b=Jd.get(a);b||(b=new Id(a),Jd.set(a,b));return b}var Ld=E({dispatchEvent:function(a){Bb();return this.__shady_native_dispatchEvent(a)},addEventListener:zc,removeEventListener:Bc});var Md=E({get assignedSlot(){var a=this.__shady_parentNode;(a=a&&a.__shady_shadowRoot)&&yd(a);return (a=A(this))&&a.assignedSlot||null}});var Nd=window.document;function Od(a,b){if("slot"===b)a=a.__shady_parentNode,lb(a)&&J(A(a).root);else if("slot"===a.localName&&"name"===b&&(b=dd(a))){if(b.a){zd(b);var c=a.Ba,d=Dd(a);if(d!==c){c=b.b[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.b[d]||(b.b[d]=[]);c.push(a);1<c.length&&(b.b[d]=Ed(c));}}J(b);}}
    var Pd=E({get previousElementSibling(){var a=A(this);if(a&&void 0!==a.previousSibling){for(a=this.__shady_previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_previousElementSibling},get nextElementSibling(){var a=A(this);if(a&&void 0!==a.nextSibling){for(a=this.__shady_nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_nextElementSibling},get slot(){return this.getAttribute("slot")},
    set slot(a){this.__shady_setAttribute("slot",a);},get shadowRoot(){var a=A(this);return a&&a.Ta||null},get className(){return this.getAttribute("class")||""},set className(a){this.__shady_setAttribute("class",a);},setAttribute:function(a,b){if(this.ownerDocument!==Nd)this.__shady_native_setAttribute(a,b);else{var c;(c=Rc())&&"class"===a?(c.setElementClass(this,b),c=!0):c=!1;c||(this.__shady_native_setAttribute(a,b),Od(this,a));}},removeAttribute:function(a){this.__shady_native_removeAttribute(a);Od(this,
    a);},attachShadow:function(a){if(!this)throw Error("Must provide a host.");if(!a)throw Error("Not enough arguments.");if(a.shadyUpgradeFragment&&!B.ya){var b=a.shadyUpgradeFragment;b.__proto__=ShadowRoot.prototype;xd(b,this,a);Pc(b,b);a=b.__noInsertionPoint?null:b.querySelectorAll("slot");b.__noInsertionPoint=void 0;if(a&&a.length){var c=b;ed(c);c.c.push.apply(c.c,a instanceof Array?a:ka(ja(a)));J(b);}b.host.__shady_native_appendChild(b);}else b=new wd(sd,this,a);return b}});var Qd=E({blur:function(){var a=A(this);(a=(a=a&&a.root)&&a.activeElement)?a.__shady_blur():this.__shady_native_blur();}});Ic.forEach(function(a){Qd[a]={set:function(b){var c=z(this),d=a.substring(2);c.N||(c.N={});c.N[a]&&this.removeEventListener(d,c.N[a]);this.__shady_addEventListener(d,b);c.N[a]=b;},get:function(){var b=A(this);return b&&b.N&&b.N[a]},configurable:!0};});var Rd=E({assignedNodes:function(a){if("slot"===this.localName){var b=this.__shady_getRootNode();b&&C(b)&&yd(b);return (b=A(this))?(a&&a.flatten?b.T:b.assignedNodes)||[]:[]}},addEventListener:function(a,b,c){if("slot"!==this.localName||"slotchange"===a)zc.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.O=this;d.__shady_addEventListener(a,b,c);}},removeEventListener:function(a,
    b,c){if("slot"!==this.localName||"slotchange"===a)Bc.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.O=this;d.__shady_removeEventListener(a,b,c);}}});var Sd=window.document,Td=E({importNode:function(a,b){if(a.ownerDocument!==Sd||"template"===a.localName)return this.__shady_native_importNode(a,b);var c=this.__shady_native_importNode(a,!1);if(b)for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b=this.__shady_importNode(a,!0),c.__shady_appendChild(b);return c}});var Ud=E({addEventListener:zc.bind(window),removeEventListener:Bc.bind(window)});var Vd={};Object.getOwnPropertyDescriptor(HTMLElement.prototype,"parentElement")&&(Vd.parentElement=gd.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"contains")&&(Vd.contains=gd.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"children")&&(Vd.children=jd.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML")&&(Vd.innerHTML=pd.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"className")&&(Vd.className=Pd.className);
    var Wd={EventTarget:[Ld],Node:[gd,window.EventTarget?null:Ld],Text:[Md],Element:[Pd,jd,Md,!B.D||"innerHTML"in Element.prototype?pd:null,window.HTMLSlotElement?null:Rd],HTMLElement:[Qd,Vd],HTMLSlotElement:[Rd],DocumentFragment:[ld,md],Document:[Td,ld,md,nd],Window:[Ud]},Xd=B.D?null:["innerHTML","textContent"];function Yd(a){var b=a?null:Xd,c={},d;for(d in Wd)c.ea=window[d]&&window[d].prototype,Wd[d].forEach(function(c){return function(d){return c.ea&&d&&D(c.ea,d,a,b)}}(c)),c={ea:c.ea};}if(B.ka){var ShadyDOM={inUse:B.ka,patch:function(a){ic(a);hc(a);return a},isShadyRoot:C,enqueue:Ab,flush:Bb,flushInitial:function(a){!a.pa&&a.R&&yd(a);},settings:B,filterMutations:Jb,observeChildren:Hb,unobserveChildren:Ib,deferConnectionCallbacks:B.deferConnectionCallbacks,preferPerformance:B.preferPerformance,handlesDynamicScoping:!0,wrap:B.M?Kd:function(a){return a},Wrapper:Id,composedPath:rc,noPatch:B.M,nativeMethods:Sb,nativeTree:Tb};window.ShadyDOM=ShadyDOM;$b();Yd("__shady_");Object.defineProperty(document,
    "_activeElement",nd.activeElement);D(Window.prototype,Ud,"__shady_");B.M||(Yd(),Hc());Cc();window.Event=Ec;window.CustomEvent=Fc;window.MouseEvent=Gc;window.ShadowRoot=wd;}var Zd=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function $d(a){var b=Zd.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return !b&&a}function K(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return !(!a||!(a.__CE_isImportDocument||a instanceof Document))}
    function ae(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
    function be(a,b,c){c=void 0===c?new Set:c;for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)be(d,b,c);d=ae(a,e);continue}else if("template"===f){d=ae(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)be(e,b,c);}d=d.firstChild?d.firstChild:ae(a,d);}}function L(a,b,c){a[b]=c;}function ce(){this.a=new Map;this.u=new Map;this.c=[];this.f=[];this.b=!1;}function de(a,b,c){a.a.set(b,c);a.u.set(c.constructorFunction,c);}function ee(a,b){a.b=!0;a.c.push(b);}function fe(a,b){a.b=!0;a.f.push(b);}function ge(a,b){a.b&&be(b,function(b){return he(a,b)});}function he(a,b){if(a.b&&!b.__CE_patched){b.__CE_patched=!0;for(var c=0;c<a.c.length;c++)a.c[c](b);for(c=0;c<a.f.length;c++)a.f[c](b);}}
    function M(a,b){var c=[];be(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):ie(a,d);}}function N(a,b){var c=[];be(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d);}}
    function O(a,b,c){c=void 0===c?{}:c;var d=c.$a||new Set,e=c.fa||function(b){return ie(a,b)},f=[];be(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var c=b.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var c=b.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);O(a,c,{$a:f,fa:e});}});}else f.push(b);},d);
    if(a.b)for(b=0;b<f.length;b++)he(a,f[b]);for(b=0;b<f.length;b++)e(f[b]);}
    function ie(a,b){if(void 0===b.__CE_state){var c=b.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=a.a.get(b.localName)){c.constructionStack.push(b);var d=c.constructorFunction;try{try{if(new d!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop();}}catch(g){throw b.__CE_state=2,g;}b.__CE_state=1;b.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=
    c[d],f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null);}K(b)&&a.connectedCallback(b);}}}ce.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a);};ce.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a);};
    ce.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e);};function je(a){var b=document;this.b=a;this.a=b;this.P=void 0;O(this.b,this.a);"loading"===this.a.readyState&&(this.P=new MutationObserver(this.c.bind(this)),this.P.observe(this.a,{childList:!0,subtree:!0}));}function ke(a){a.P&&a.P.disconnect();}je.prototype.c=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||ke(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)O(this.b,c[d]);};function le(){var a=this;this.a=this.w=void 0;this.b=new Promise(function(b){a.a=b;a.w&&b(a.w);});}le.prototype.resolve=function(a){if(this.w)throw Error("Already resolved.");this.w=a;this.a&&this.a(a);};function P(a){this.c=!1;this.a=a;this.F=new Map;this.f=function(a){return a()};this.b=!1;this.u=[];this.aa=new je(a);}r=P.prototype;
    r.wa=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!$d(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var d=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");
    return b},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var g=d("disconnectedCallback");var h=d("adoptedCallback");var k=d("attributeChangedCallback");var l=b.observedAttributes||[];}catch(n){return}finally{this.c=!1;}b={localName:a,constructorFunction:b,connectedCallback:f,disconnectedCallback:g,adoptedCallback:h,attributeChangedCallback:k,observedAttributes:l,constructionStack:[]};de(this.a,
    a,b);this.u.push(b);this.b||(this.b=!0,this.f(function(){return me(c)}));};r.fa=function(a){O(this.a,a);};
    function me(a){if(!1!==a.b){a.b=!1;for(var b=a.u,c=[],d=new Map,e=0;e<b.length;e++)d.set(b[e].localName,[]);O(a.a,document,{fa:function(b){if(void 0===b.__CE_state){var e=b.localName,f=d.get(e);f?f.push(b):a.a.a.get(e)&&c.push(b);}}});for(e=0;e<c.length;e++)ie(a.a,c[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=d.get(f.localName);for(var g=0;g<f.length;g++)ie(a.a,f[g]);(e=a.F.get(e))&&e.resolve(void 0);}}}r.get=function(a){if(a=this.a.a.get(a))return a.constructorFunction};
    r.xa=function(a){if(!$d(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.F.get(a);if(b)return b.b;b=new le;this.F.set(a,b);this.a.a.get(a)&&!this.u.some(function(b){return b.localName===a})&&b.resolve(void 0);return b.b};r.Ra=function(a){ke(this.aa);var b=this.f;this.f=function(c){return a(function(){return b(c)})};};window.CustomElementRegistry=P;P.prototype.define=P.prototype.wa;P.prototype.upgrade=P.prototype.fa;P.prototype.get=P.prototype.get;
    P.prototype.whenDefined=P.prototype.xa;P.prototype.polyfillWrapFlushCallback=P.prototype.Ra;var ne=window.Document.prototype.createElement,oe=window.Document.prototype.createElementNS,pe=window.Document.prototype.importNode,qe=window.Document.prototype.prepend,re=window.Document.prototype.append,se=window.DocumentFragment.prototype.prepend,te=window.DocumentFragment.prototype.append,ue=window.Node.prototype.cloneNode,ve=window.Node.prototype.appendChild,we=window.Node.prototype.insertBefore,xe=window.Node.prototype.removeChild,ye=window.Node.prototype.replaceChild,ze=Object.getOwnPropertyDescriptor(window.Node.prototype,
    "textContent"),Ae=window.Element.prototype.attachShadow,Be=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Ce=window.Element.prototype.getAttribute,De=window.Element.prototype.setAttribute,Ee=window.Element.prototype.removeAttribute,Fe=window.Element.prototype.getAttributeNS,Ge=window.Element.prototype.setAttributeNS,He=window.Element.prototype.removeAttributeNS,Ie=window.Element.prototype.insertAdjacentElement,Je=window.Element.prototype.insertAdjacentHTML,Ke=window.Element.prototype.prepend,
    Le=window.Element.prototype.append,Me=window.Element.prototype.before,Ne=window.Element.prototype.after,Oe=window.Element.prototype.replaceWith,Pe=window.Element.prototype.remove,Qe=window.HTMLElement,Re=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),Se=window.HTMLElement.prototype.insertAdjacentElement,Te=window.HTMLElement.prototype.insertAdjacentHTML;var Ue=new function(){};function Ve(){var a=We;window.HTMLElement=function(){function b(){var b=this.constructor,d=a.u.get(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=ne.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,he(a,e),e;d=e.length-1;var f=e[d];if(f===Ue)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
    e[d]=Ue;Object.setPrototypeOf(f,b.prototype);he(a,f);return f}b.prototype=Qe.prototype;Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});return b}();}function Xe(a,b,c){function d(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var f=[],l=0;l<d.length;l++){var n=d[l];n instanceof Element&&K(n)&&f.push(n);if(n instanceof DocumentFragment)for(n=n.firstChild;n;n=n.nextSibling)e.push(n);else e.push(n);}b.apply(this,d);for(d=0;d<f.length;d++)N(a,f[d]);if(K(this))for(d=0;d<e.length;d++)f=e[d],f instanceof Element&&M(a,f);}}void 0!==c.da&&(b.prepend=d(c.da));void 0!==c.append&&(b.append=d(c.append));}function Ye(){var a=We;L(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=a.a.get(b);if(c)return new c.constructorFunction}b=ne.call(this,b);he(a,b);return b});L(Document.prototype,"importNode",function(b,c){b=pe.call(this,b,!!c);this.__CE_hasRegistry?O(a,b):ge(a,b);return b});L(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.a.get(c);if(d)return new d.constructorFunction}b=oe.call(this,
    b,c);he(a,b);return b});Xe(a,Document.prototype,{da:qe,append:re});}function Ze(){function a(a,d){Object.defineProperty(a,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,a);else{var c=void 0;if(this.firstChild){var e=this.childNodes,h=e.length;if(0<h&&K(this)){c=Array(h);for(var k=0;k<h;k++)c[k]=e[k];}}d.set.call(this,a);if(c)for(a=0;a<c.length;a++)N(b,c[a]);}}});}var b=We;L(Node.prototype,"insertBefore",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);
    a=we.call(this,a,d);if(K(this))for(d=0;d<c.length;d++)M(b,c[d]);return a}c=K(a);d=we.call(this,a,d);c&&N(b,a);K(this)&&M(b,a);return d});L(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=ve.call(this,a);if(K(this))for(var e=0;e<c.length;e++)M(b,c[e]);return a}c=K(a);e=ve.call(this,a);c&&N(b,a);K(this)&&M(b,a);return e});L(Node.prototype,"cloneNode",function(a){a=ue.call(this,!!a);this.ownerDocument.__CE_hasRegistry?O(b,a):
    ge(b,a);return a});L(Node.prototype,"removeChild",function(a){var c=K(a),e=xe.call(this,a);c&&N(b,a);return e});L(Node.prototype,"replaceChild",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=ye.call(this,a,d);if(K(this))for(N(b,d),d=0;d<c.length;d++)M(b,c[d]);return a}c=K(a);var f=ye.call(this,a,d),g=K(this);g&&N(b,d);c&&N(b,a);g&&M(b,a);return f});ze&&ze.get?a(Node.prototype,ze):ee(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=
    [],b=0;b<this.childNodes.length;b++){var c=this.childNodes[b];c.nodeType!==Node.COMMENT_NODE&&a.push(c.textContent);}return a.join("")},set:function(a){for(;this.firstChild;)xe.call(this,this.firstChild);null!=a&&""!==a&&ve.call(this,document.createTextNode(a));}});});}function $e(a){function b(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var h=[],k=0;k<d.length;k++){var l=d[k];l instanceof Element&&K(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)e.push(l);else e.push(l);}b.apply(this,d);for(d=0;d<h.length;d++)N(a,h[d]);if(K(this))for(d=0;d<e.length;d++)h=e[d],h instanceof Element&&M(a,h);}}var c=Element.prototype;void 0!==Me&&(c.before=b(Me));void 0!==Me&&(c.after=b(Ne));void 0!==Oe&&
    L(c,"replaceWith",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var g=[],h=0;h<c.length;h++){var k=c[h];k instanceof Element&&K(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)d.push(k);else d.push(k);}h=K(this);Oe.apply(this,c);for(c=0;c<g.length;c++)N(a,g[c]);if(h)for(N(a,this),c=0;c<d.length;c++)g=d[c],g instanceof Element&&M(a,g);});void 0!==Pe&&L(c,"remove",function(){var b=K(this);Pe.call(this);b&&N(a,this);});}function af(){function a(a,b){Object.defineProperty(a,"innerHTML",{enumerable:b.enumerable,configurable:!0,get:b.get,set:function(a){var c=this,e=void 0;K(this)&&(e=[],be(this,function(a){a!==c&&e.push(a);}));b.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var g=e[f];1===g.__CE_state&&d.disconnectedCallback(g);}this.ownerDocument.__CE_hasRegistry?O(d,this):ge(d,this);return a}});}function b(a,b){L(a,"insertAdjacentElement",function(a,c){var e=K(c);a=b.call(this,a,c);e&&N(d,c);K(a)&&M(d,c);return a});}
    function c(a,b){function c(a,b){for(var c=[];a!==b;a=a.nextSibling)c.push(a);for(b=0;b<c.length;b++)O(d,c[b]);}L(a,"insertAdjacentHTML",function(a,d){a=a.toLowerCase();if("beforebegin"===a){var e=this.previousSibling;b.call(this,a,d);c(e||this.parentNode.firstChild,this);}else if("afterbegin"===a)e=this.firstChild,b.call(this,a,d),c(this.firstChild,e);else if("beforeend"===a)e=this.lastChild,b.call(this,a,d),c(e||this.firstChild,null);else if("afterend"===a)e=this.nextSibling,b.call(this,a,d),c(this.nextSibling,
    e);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");});}var d=We;Ae&&L(Element.prototype,"attachShadow",function(a){a=Ae.call(this,a);var b=d;if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var c=0;c<b.c.length;c++)b.c[c](a);}return this.__CE_shadowRoot=a});Be&&Be.get?a(Element.prototype,Be):Re&&Re.get?a(HTMLElement.prototype,Re):fe(d,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return ue.call(this,
    !0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:this,d=oe.call(document,this.namespaceURI,this.localName);for(d.innerHTML=a;0<c.childNodes.length;)xe.call(c,c.childNodes[0]);for(a=b?d.content:d;0<a.childNodes.length;)ve.call(c,a.childNodes[0]);}});});L(Element.prototype,"setAttribute",function(a,b){if(1!==this.__CE_state)return De.call(this,a,b);var c=Ce.call(this,a);De.call(this,a,b);b=Ce.call(this,a);d.attributeChangedCallback(this,a,c,b,null);});L(Element.prototype,
    "setAttributeNS",function(a,b,c){if(1!==this.__CE_state)return Ge.call(this,a,b,c);var e=Fe.call(this,a,b);Ge.call(this,a,b,c);c=Fe.call(this,a,b);d.attributeChangedCallback(this,b,e,c,a);});L(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return Ee.call(this,a);var b=Ce.call(this,a);Ee.call(this,a);null!==b&&d.attributeChangedCallback(this,a,b,null,null);});L(Element.prototype,"removeAttributeNS",function(a,b){if(1!==this.__CE_state)return He.call(this,a,b);var c=Fe.call(this,
    a,b);He.call(this,a,b);var e=Fe.call(this,a,b);c!==e&&d.attributeChangedCallback(this,b,c,e,a);});Se?b(HTMLElement.prototype,Se):Ie?b(Element.prototype,Ie):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");Te?c(HTMLElement.prototype,Te):Je?c(Element.prototype,Je):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");Xe(d,Element.prototype,{da:Ke,append:Le});$e(d);}var bf=window.customElements;if(!bf||bf.forcePolyfill||"function"!=typeof bf.define||"function"!=typeof bf.get){var We=new ce;Ve();Ye();Xe(We,DocumentFragment.prototype,{da:se,append:te});Ze();af();document.__CE_hasRegistry=!0;var customElements=new P(We);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements});}function cf(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName="";}
    function df(a){a=a.replace(ef,"").replace(ff,"");var b=gf,c=a,d=new cf;d.start=0;d.end=c.length;for(var e=d,f=0,g=c.length;f<g;f++)if("{"===c[f]){e.rules||(e.rules=[]);var h=e,k=h.rules[h.rules.length-1]||null;e=new cf;e.start=f+1;e.parent=h;e.previous=k;h.rules.push(e);}else"}"===c[f]&&(e.end=f+1,e=e.parent||d);return b(d,a)}
    function gf(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=hf(c),c=c.replace(jf," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=kf:c.match(lf)&&(a.type=mf,a.keyframesName=a.selector.split(jf).pop()):a.type=0===c.indexOf("--")?nf:of);if(c=a.rules)for(var d=0,e=c.length,f=void 0;d<e&&(f=c[d]);d++)gf(f,
    b);return a}function hf(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,c){a=c;for(c=6-a.length;c--;)a="0"+a;return "\\"+a})}
    function pf(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=e.length,h=void 0;f<g&&(h=e[f]);f++)d=pf(h,b,d);}else b?b=a.cssText:(b=a.cssText,b=b.replace(qf,"").replace(rf,""),b=b.replace(uf,"").replace(vf,"")),(d=b.trim())&&(d="  "+d+"\n");}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
    var of=1,mf=7,kf=4,nf=1E3,ef=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,ff=/@import[^;]*;/gim,qf=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,rf=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,uf=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,vf=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,lf=/^@[^\s]*keyframes/,jf=/\s+/g;var R=!(window.ShadyDOM&&window.ShadyDOM.inUse),wf;function xf(a){wf=a&&a.shimcssproperties?!1:R||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"));}var yf;window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(yf=window.ShadyCSS.cssBuild);var zf=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);
    window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?wf=window.ShadyCSS.nativeCss:window.ShadyCSS?(xf(window.ShadyCSS),window.ShadyCSS=void 0):xf(window.WebComponents&&window.WebComponents.flags);var S=wf,Af=yf;var Bf=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Cf=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Df=/(--[\w-]+)\s*([:,;)]|$)/gi,Ef=/(animation\s*:)|(animation-name\s*:)/,Ff=/@media\s(.*)/,Gf=/\{[^}]*\}/g;var Hf=new Set;function If(a,b){if(!a)return "";"string"===typeof a&&(a=df(a));b&&Jf(a,b);return pf(a,S)}function Kf(a){!a.__cssRules&&a.textContent&&(a.__cssRules=df(a.textContent));return a.__cssRules||null}function Lf(a){return !!a.parent&&a.parent.type===mf}function Jf(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===kf){var g=a.selector.match(Ff);g&&(window.matchMedia(g[1]).matches||(e=!0));}f===of?b(a):c&&f===mf?c(a):f===nf&&(e=!0);if((a=a.rules)&&!e)for(e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++)Jf(g,b,c,d);}}
    function Mf(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;Nf(e,c,d);return e}var Of=null;function Pf(a){a=document.createComment(" Shady DOM styles for "+a+" ");var b=document.head;b.insertBefore(a,(Of?Of.nextSibling:null)||b.firstChild);return Of=a}function Nf(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);Of?a.compareDocumentPosition(Of)===Node.DOCUMENT_POSITION_PRECEDING&&(Of=a):Of=a;}
    function Qf(a,b){for(var c=0,d=a.length;b<d;b++)if("("===a[b])c++;else if(")"===a[b]&&0===--c)return b;return -1}function Rf(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var d=Qf(a,c+3),e=a.substring(c+4,d);c=a.substring(0,c);a=Rf(a.substring(d+1),b);d=e.indexOf(",");return -1===d?b(c,e.trim(),"",a):b(c,e.substring(0,d).trim(),e.substring(d+1).trim(),a)}function Sf(a,b){R?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b);}
    var Tf=window.ShadyDOM&&window.ShadyDOM.wrap||function(a){return a};function Uf(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return {is:b,X:c}}function Vf(a){for(var b=[],c="",d=0;0<=d&&d<a.length;d++)if("("===a[d]){var e=Qf(a,d);c+=a.slice(d,e+1);d=e;}else","===a[d]?(b.push(c),c=""):c+=a[d];c&&b.push(c);return b}
    function Wf(a){if(void 0!==Af)return Af;if(void 0===a.__cssBuild){var b=a.getAttribute("css-build");if(b)a.__cssBuild=b;else{a:{b="template"===a.localName?a.content.firstChild:a.firstChild;if(b instanceof Comment&&(b=b.textContent.trim().split(":"),"css-build"===b[0])){b=b[1];break a}b="";}if(""!==b){var c="template"===a.localName?a.content.firstChild:a.firstChild;c.parentNode.removeChild(c);}a.__cssBuild=b;}}return a.__cssBuild||""}
    function Xf(a){a=void 0===a?"":a;return ""!==a&&S?R?"shadow"===a:"shady"===a:!1}function Yf(){}function Zf(a,b){$f(U,a,function(a){ag(a,b||"");});}function $f(a,b,c){b.nodeType===Node.ELEMENT_NODE&&c(b);var d;"template"===b.localName?d=(b.content||b._content||b).childNodes:d=b.children||b.childNodes;if(d)for(b=0;b<d.length;b++)$f(a,d[b],c);}
    function ag(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute("class");c?d&&(b=d.replace("style-scope","").replace(b,""),Sf(a,b)):Sf(a,(d?d+" ":"")+"style-scope "+b);}}function bg(a,b,c){$f(U,a,function(a){ag(a,b,!0);ag(a,c);});}function cg(a,b){$f(U,a,function(a){ag(a,b||"",!0);});}
    function dg(a,b,c,d,e){var f=U;e=void 0===e?"":e;""===e&&(R||"shady"===(void 0===d?"":d)?e=If(b,c):(a=Uf(a),e=eg(f,b,a.is,a.X,c)+"\n\n"));return e.trim()}function eg(a,b,c,d,e){var f=fg(c,d);c=c?"."+c:"";return If(b,function(b){b.c||(b.selector=b.C=gg(a,b,a.b,c,f),b.c=!0);e&&e(b,c,f);})}function fg(a,b){return b?"[is="+a+"]":a}
    function gg(a,b,c,d,e){var f=Vf(b.selector);if(!Lf(b)){b=0;for(var g=f.length,h=void 0;b<g&&(h=f[b]);b++)f[b]=c.call(a,h,d,e);}return f.filter(function(a){return !!a}).join(",")}function hg(a){return a.replace(ig,function(a,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return ":"+c+"("+d+")"})}
    function jg(a){for(var b=[],c;c=a.match(kg);){var d=c.index,e=Qf(a,d);if(-1===e)throw Error(c.input+" selector missing ')'");c=a.slice(d,e+1);a=a.replace(c,"\ue000");b.push(c);}return {na:a,matches:b}}function lg(a,b){var c=a.split("\ue000");return b.reduce(function(a,b,f){return a+b+c[f+1]},c[0])}
    Yf.prototype.b=function(a,b,c){var d=!1;a=a.trim();var e=ig.test(a);e&&(a=a.replace(ig,function(a,b,c){return ":"+b+"("+c.replace(/\s/g,"")+")"}),a=hg(a));var f=kg.test(a);if(f){var g=jg(a);a=g.na;g=g.matches;}a=a.replace(mg,":host $1");a=a.replace(ng,function(a,e,f){d||(a=og(f,e,b,c),d=d||a.stop,e=a.Ha,f=a.value);return e+f});f&&(a=lg(a,g));e&&(a=hg(a));return a=a.replace(pg,function(a,b,c,d){return '[dir="'+c+'"] '+b+d+", "+b+'[dir="'+c+'"]'+d})};
    function og(a,b,c,d){var e=a.indexOf("::slotted");0<=a.indexOf(":host")?a=qg(a,d):0!==e&&(a=c?rg(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(sg,function(a,b){return " > "+b}));}return {value:a,Ha:b,stop:f}}function rg(a,b){a=a.split(/(\[.+?\])/);for(var c=[],d=0;d<a.length;d++)if(1===d%2)c.push(a[d]);else{var e=a[d];if(""!==e||d!==a.length-1)e=e.split(":"),e[0]+=b,c.push(e.join(":"));}return c.join("")}
    function qg(a,b){var c=a.match(tg);return (c=c&&c[2].trim()||"")?c[0].match(ug)?a.replace(tg,function(a,c,f){return b+f}):c.split(ug)[0]===b?c:"should_not_match":a.replace(":host",b)}function vg(a){":root"===a.selector&&(a.selector="html");}Yf.prototype.c=function(a){return a.match(":host")?"":a.match("::slotted")?this.b(a,":not(.style-scope)"):rg(a.trim(),":not(.style-scope)")};t.Object.defineProperties(Yf.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return "style-scope"}}});
    var ig=/:(nth[-\w]+)\(([^)]+)\)/,ng=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,ug=/[[.:#*]/,mg=/^(::slotted)/,tg=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,sg=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,pg=/(.*):dir\((?:(ltr|rtl))\)(.*)/,kg=/:(?:matches|any|-(?:webkit|moz)-any)/,U=new Yf;function wg(a,b,c,d,e){this.L=a||null;this.b=b||null;this.la=c||[];this.G=null;this.cssBuild=e||"";this.X=d||"";this.a=this.H=this.K=null;}function V(a){return a?a.__styleInfo:null}function xg(a,b){return a.__styleInfo=b}wg.prototype.c=function(){return this.L};wg.prototype._getStyleRules=wg.prototype.c;function yg(a){var b=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return b&&b.call(this,a)}var zg=navigator.userAgent.match("Trident");function Ag(){}function Bg(a){var b={},c=[],d=0;Jf(a,function(a){Cg(a);a.index=d++;a=a.A.cssText;for(var c;c=Df.exec(a);){var e=c[1];":"!==c[2]&&(b[e]=!0);}},function(a){c.push(a);});a.b=c;a=[];for(var e in b)a.push(e);return a}
    function Cg(a){if(!a.A){var b={},c={};Dg(a,c)&&(b.J=c,a.rules=null);b.cssText=a.parsedCssText.replace(Gf,"").replace(Bf,"");a.A=b;}}function Dg(a,b){var c=a.A;if(c){if(c.J)return Object.assign(b,c.J),!0}else{c=a.parsedCssText;for(var d;a=Bf.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0;}return d}}
    function Eg(a,b,c){b&&(b=0<=b.indexOf(";")?Fg(a,b,c):Rf(b,function(b,e,f,g){if(!e)return b+g;(e=Eg(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=Eg(a,c[f]||f,c)||f;return b+(e||"")+g}));return b&&b.trim()||""}
    function Fg(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){Cf.lastIndex=0;if(f=Cf.exec(e))e=Eg(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var g=e.substring(f);g=g.trim();g=Eg(a,g,c)||g;e=e.substring(0,f)+g;}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||"";}return b.join(";")}
    function Gg(a,b){var c={},d=[];Jf(a,function(a){a.A||Cg(a);var e=a.C||a.parsedSelector;b&&a.A.J&&e&&yg.call(b,e)&&(Dg(a,c),a=a.index,e=parseInt(a/32,10),d[e]=(d[e]||0)|1<<a%32);},null,!0);return {J:c,key:d}}
    function Hg(a,b,c,d){b.A||Cg(b);if(b.A.J){var e=Uf(a);a=e.is;e=e.X;e=a?fg(a,e):"html";var f=b.parsedSelector,g=":host > *"===f||"html"===f,h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));if(g||h)c=e,h&&(b.C||(b.C=gg(U,b,U.b,a?"."+a:"",e)),c=b.C||e),d({na:c,Oa:h,bb:g});}}function Ig(a,b,c){var d={},e={};Jf(b,function(b){Hg(a,b,c,function(c){yg.call(a._element||a,c.na)&&(c.Oa?Dg(b,d):Dg(b,e));});},null,!0);return {Ua:e,Ma:d}}
    function Jg(a,b,c,d){var e=Uf(b),f=fg(e.is,e.X),g=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),h=V(b);e=h.L;h=h.cssBuild;var k=Kg(e,d);return dg(b,e,function(b){var e="";b.A||Cg(b);b.A.cssText&&(e=Fg(a,b.A.cssText,c));b.cssText=e;if(!R&&!Lf(b)&&b.cssText){var h=e=b.cssText;null==b.ra&&(b.ra=Ef.test(e));if(b.ra)if(null==b.ba){b.ba=[];for(var l in k)h=k[l],h=h(e),e!==h&&(e=h,b.ba.push(l));}else{for(l=0;l<b.ba.length;++l)h=k[b.ba[l]],e=h(e);h=e;}b.cssText=h;b.C=
    b.C||b.selector;e="."+d;l=Vf(b.C);h=0;for(var v=l.length,x=void 0;h<v&&(x=l[h]);h++)l[h]=x.match(g)?x.replace(f,e):e+" "+x;b.selector=l.join(",");}},h)}function Kg(a,b){a=a.b;var c={};if(!R&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,g=b;f.f=new RegExp("\\b"+f.keyframesName+"(?!\\B|-)","g");f.a=f.keyframesName+"-"+g;f.C=f.C||f.selector;f.selector=f.C.replace(f.keyframesName,f.a);c[e.keyframesName]=Lg(e);}return c}function Lg(a){return function(b){return b.replace(a.f,a.a)}}
    function Mg(a,b){var c=Ng,d=Kf(a);a.textContent=If(d,function(a){var d=a.cssText=a.parsedCssText;a.A&&a.A.cssText&&(d=d.replace(qf,"").replace(rf,""),a.cssText=Fg(c,d,b));});}t.Object.defineProperties(Ag.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return "x-scope"}}});var Ng=new Ag;var Og={},Pg=window.customElements;if(Pg&&!R&&!zf){var Qg=Pg.define;Pg.define=function(a,b,c){Og[a]||(Og[a]=Pf(a));Qg.call(Pg,a,b,c);};}function Rg(){this.cache={};}Rg.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({J:b,styleElement:c,H:d});100<e.length&&e.shift();this.cache[a]=e;};function Sg(){}var Tg=new RegExp(U.a+"\\s*([^\\s]*)");function Ug(a){return (a=(a.classList&&a.classList.value?a.classList.value:a.getAttribute("class")||"").match(Tg))?a[1]:""}function Vg(a){var b=Tf(a).getRootNode();return b===a||b===a.ownerDocument?"":(a=b.host)?Uf(a).is:""}
    function Wg(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode(),g=Ug(e);if(g&&f===e.ownerDocument&&("style"!==e.localName&&"template"!==e.localName||""===Wf(e)))cg(e,g);else if(f instanceof ShadowRoot)for(f=Vg(e),f!==g&&bg(e,g,f),e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+U.a+")"),g=0;g<e.length;g++){f=e[g];
    var h=Vg(f);h&&ag(f,h);}}}}}
    if(!(R||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var Xg=new MutationObserver(Wg),Yg=function(a){Xg.observe(a,{childList:!0,subtree:!0});};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)Yg(document);else{var Zg=function(){Yg(document.body);};window.HTMLImports?window.HTMLImports.whenReady(Zg):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){Zg();document.removeEventListener("readystatechange",a);};document.addEventListener("readystatechange",
    a);}else Zg();});}Sg=function(){Wg(Xg.takeRecords());};}var $g=Sg;var ah={};var bh=Promise.resolve();function ch(a){if(a=ah[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1;}function dh(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function eh(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a._validating||(a._validating=!0,bh.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a._validating=!1;}));}var fh={},gh=new Rg;function W(){this.F={};this.c=document.documentElement;var a=new cf;a.rules=[];this.f=xg(this.c,new wg(a));this.u=!1;this.b=this.a=null;}r=W.prototype;r.flush=function(){$g();};r.Ka=function(a){return Kf(a)};r.Ya=function(a){return If(a)};r.prepareTemplate=function(a,b,c){this.prepareTemplateDom(a,b);this.prepareTemplateStyles(a,b,c);};
    r.prepareTemplateStyles=function(a,b,c){if(!a._prepared&&!zf){R||Og[b]||(Og[b]=Pf(b));a._prepared=!0;a.name=b;a.extends=c;ah[b]=a;var d=Wf(a),e=Xf(d);c={is:b,extends:c};for(var f=[],g=a.content.querySelectorAll("style"),h=0;h<g.length;h++){var k=g[h];if(k.hasAttribute("shady-unscoped")){if(!R){var l=k.textContent;Hf.has(l)||(Hf.add(l),l=k.cloneNode(!0),document.head.appendChild(l));k.parentNode.removeChild(k);}}else f.push(k.textContent),k.parentNode.removeChild(k);}f=f.join("").trim()+(fh[b]||"");
    hh(this);if(!e){if(g=!d)g=Cf.test(f)||Bf.test(f),Cf.lastIndex=0,Bf.lastIndex=0;h=df(f);g&&S&&this.a&&this.a.transformRules(h,b);a._styleAst=h;}g=[];S||(g=Bg(a._styleAst));if(!g.length||S)h=R?a.content:null,b=Og[b]||null,d=dg(c,a._styleAst,null,d,e?f:""),d=d.length?Mf(d,c.is,h,b):null,a._style=d;a.a=g;}};r.Sa=function(a,b){fh[b]=a.join(" ");};r.prepareTemplateDom=function(a,b){if(!zf){var c=Wf(a);R||"shady"===c||a._domPrepared||(a._domPrepared=!0,Zf(a.content,b));}};
    function ih(a){var b=Uf(a),c=b.is;b=b.X;var d=Og[c]||null,e=ah[c];if(e){c=e._styleAst;var f=e.a;e=Wf(e);b=new wg(c,d,f,b,e);xg(a,b);return b}}function jh(a){!a.b&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.b=window.ShadyCSS.CustomStyleInterface,a.b.transformCallback=function(b){a.va(b);},a.b.validateCallback=function(){requestAnimationFrame(function(){(a.b.enqueued||a.u)&&a.flushCustomStyles();});});}
    function hh(a){!a.a&&window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(a.a=window.ShadyCSS.ApplyShim,a.a.invalidCallback=ch);jh(a);}
    r.flushCustomStyles=function(){if(!zf&&(hh(this),this.b)){var a=this.b.processStyles();if(this.b.enqueued&&!Xf(this.f.cssBuild)){if(S){if(!this.f.cssBuild)for(var b=0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);if(c&&S&&this.a){var d=Kf(c);hh(this);this.a.transformRules(d);c.textContent=If(d);}}}else{kh(this,this.c,this.f);for(b=0;b<a.length;b++)(c=this.b.getStyleForCustomStyle(a[b]))&&Mg(c,this.f.K);this.u&&this.styleDocument();}this.b.enqueued=!1;}}};
    r.styleElement=function(a,b){if(zf){if(b){V(a)||xg(a,new wg(null));var c=V(a);c.G=c.G||{};Object.assign(c.G,b);lh(this,a,c);}}else if(c=V(a)||ih(a))if(a!==this.c&&(this.u=!0),b&&(c.G=c.G||{},Object.assign(c.G,b)),S)lh(this,a,c);else if(this.flush(),kh(this,a,c),c.la&&c.la.length){b=Uf(a).is;var d;a:{if(d=gh.cache[b])for(var e=d.length-1;0<=e;e--){var f=d[e];b:{var g=c.la;for(var h=0;h<g.length;h++){var k=g[h];if(f.J[k]!==c.K[k]){g=!1;break b}}g=!0;}if(g){d=f;break a}}d=void 0;}g=d?d.styleElement:null;
    e=c.H;(f=d&&d.H)||(f=this.F[b]=(this.F[b]||0)+1,f=b+"-"+f);c.H=f;f=c.H;h=Ng;h=g?g.textContent||"":Jg(h,a,c.K,f);k=V(a);var l=k.a;l&&!R&&l!==g&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));R?k.a?(k.a.textContent=h,g=k.a):h&&(g=Mf(h,f,a.shadowRoot,k.b)):g?g.parentNode||(zg&&-1<h.indexOf("@media")&&(g.textContent=h),Nf(g,null,k.b)):h&&(g=Mf(h,f,null,k.b));g&&(g._useCount=g._useCount||0,k.a!=g&&g._useCount++,k.a=g);f=g;R||(g=c.H,k=h=a.getAttribute("class")||"",e&&(k=h.replace(new RegExp("\\s*x-scope\\s*"+
    e+"\\s*","g")," ")),k+=(k?" ":"")+"x-scope "+g,h!==k&&Sf(a,k));d||gh.store(b,c.K,f,c.H);}};
    function lh(a,b,c){var d=Uf(b).is;if(c.G){var e=c.G,f;for(f in e)null===f?b.style.removeProperty(f):b.style.setProperty(f,e[f]);}e=ah[d];if(!(!e&&b!==a.c||e&&""!==Wf(e))&&e&&e._style&&!dh(e)){if(dh(e)||e._applyShimValidatingVersion!==e._applyShimNextVersion)hh(a),a.a&&a.a.transformRules(e._styleAst,d),e._style.textContent=dg(b,c.L),eh(e);R&&(a=b.shadowRoot)&&(a=a.querySelector("style"))&&(a.textContent=dg(b,c.L));c.L=e._styleAst;}}
    function mh(a,b){return (b=Tf(b).getRootNode().host)?V(b)||ih(b)?b:mh(a,b):a.c}function kh(a,b,c){var d=mh(a,b),e=V(d),f=e.K;d===a.c||f||(kh(a,d,e),f=e.K);a=Object.create(f||null);d=Ig(b,c.L,c.cssBuild);b=Gg(e.L,b).J;Object.assign(a,d.Ma,b,d.Ua);b=c.G;for(var g in b)if((e=b[g])||0===e)a[g]=e;g=Ng;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=Eg(g,a[d],a);c.K=a;}r.styleDocument=function(a){this.styleSubtree(this.c,a);};
    r.styleSubtree=function(a,b){var c=Tf(a),d=c.shadowRoot;(d||a===this.c)&&this.styleElement(a,b);if(a=d&&(d.children||d.childNodes))for(c=0;c<a.length;c++)this.styleSubtree(a[c]);else if(c=c.children||c.childNodes)for(a=0;a<c.length;a++)this.styleSubtree(c[a]);};
    r.va=function(a){var b=this,c=Wf(a);c!==this.f.cssBuild&&(this.f.cssBuild=c);if(!Xf(c)){var d=Kf(a);Jf(d,function(a){if(R)vg(a);else{var d=U;a.selector=a.parsedSelector;vg(a);a.selector=a.C=gg(d,a,d.c,void 0,void 0);}S&&""===c&&(hh(b),b.a&&b.a.transformRule(a));});S?a.textContent=If(d):this.f.L.rules.push(d);}};r.getComputedStyleValue=function(a,b){var c;S||(c=(V(a)||V(mh(this,a))).K[b]);return (c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};
    r.Xa=function(a,b){var c=Tf(a).getRootNode();b=b?b.split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d){d=d.split(/\s/);for(var e=0;e<d.length;e++)if(d[e]===U.a){c=d[e+1];break}}}c&&b.push(U.a,c);S||(c=V(a))&&c.H&&b.push(Ng.a,c.H);Sf(a,b.join(" "));};r.Fa=function(a){return V(a)};r.Wa=function(a,b){ag(a,b);};r.Za=function(a,b){ag(a,b,!0);};r.Va=function(a){return Vg(a)};r.Ia=function(a){return Ug(a)};W.prototype.flush=W.prototype.flush;W.prototype.prepareTemplate=W.prototype.prepareTemplate;
    W.prototype.styleElement=W.prototype.styleElement;W.prototype.styleDocument=W.prototype.styleDocument;W.prototype.styleSubtree=W.prototype.styleSubtree;W.prototype.getComputedStyleValue=W.prototype.getComputedStyleValue;W.prototype.setElementClass=W.prototype.Xa;W.prototype._styleInfoForNode=W.prototype.Fa;W.prototype.transformCustomStyleForDocument=W.prototype.va;W.prototype.getStyleAst=W.prototype.Ka;W.prototype.styleAstToString=W.prototype.Ya;W.prototype.flushCustomStyles=W.prototype.flushCustomStyles;
    W.prototype.scopeNode=W.prototype.Wa;W.prototype.unscopeNode=W.prototype.Za;W.prototype.scopeForNode=W.prototype.Va;W.prototype.currentScopeForNode=W.prototype.Ia;W.prototype.prepareAdoptedCssText=W.prototype.Sa;Object.defineProperties(W.prototype,{nativeShadow:{get:function(){return R}},nativeCss:{get:function(){return S}}});var Z=new W,nh,oh;window.ShadyCSS&&(nh=window.ShadyCSS.ApplyShim,oh=window.ShadyCSS.CustomStyleInterface);
    window.ShadyCSS={ScopingShim:Z,prepareTemplate:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplate(a,b,c);},prepareTemplateDom:function(a,b){Z.prepareTemplateDom(a,b);},prepareTemplateStyles:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplateStyles(a,b,c);},styleSubtree:function(a,b){Z.flushCustomStyles();Z.styleSubtree(a,b);},styleElement:function(a){Z.flushCustomStyles();Z.styleElement(a);},styleDocument:function(a){Z.flushCustomStyles();Z.styleDocument(a);},flushCustomStyles:function(){Z.flushCustomStyles();},
    getComputedStyleValue:function(a,b){return Z.getComputedStyleValue(a,b)},nativeCss:S,nativeShadow:R,cssBuild:Af,disableRuntime:zf};nh&&(window.ShadyCSS.ApplyShim=nh);oh&&(window.ShadyCSS.CustomStyleInterface=oh);(function(a){function b(a){""==a&&(f.call(this),this.i=!0);return a.toLowerCase()}function c(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,63,96].indexOf(b)?a:encodeURIComponent(a)}function d(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,96].indexOf(b)?a:encodeURIComponent(a)}function e(a,e,g){function h(a){}var k=e||"scheme start",x=0,p="",v=!1,Q=!1;a:for(;(void 0!=a[x-1]||0==x)&&!this.i;){var m=a[x];switch(k){case "scheme start":if(m&&q.test(m))p+=m.toLowerCase(),
    k="scheme";else if(e){break a}else{p="";k="no scheme";continue}break;case "scheme":if(m&&I.test(m))p+=m.toLowerCase();else if(":"==m){this.h=p;p="";if(e)break a;void 0!==l[this.h]&&(this.B=!0);k="file"==this.h?"relative":this.B&&g&&g.h==this.h?"relative or authority":this.B?"authority first slash":"scheme data";}else if(e){break a}else{p="";x=0;k="no scheme";continue}break;case "scheme data":"?"==m?(this.o="?",k="query"):"#"==
    m?(this.v="#",k="fragment"):void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.ia+=c(m));break;case "no scheme":if(g&&void 0!==l[g.h]){k="relative";continue}else f.call(this),this.i=!0;break;case "relative or authority":if("/"==m&&"/"==a[x+1])k="authority ignore slashes";else{k="relative";continue}break;case "relative":this.B=!0;"file"!=this.h&&(this.h=g.h);if(void 0==m){this.j=g.j;this.m=g.m;this.l=g.l.slice();this.o=g.o;this.s=g.s;this.g=g.g;break a}else if("/"==
    m||"\\"==m)k="relative slash";else if("?"==m)this.j=g.j,this.m=g.m,this.l=g.l.slice(),this.o="?",this.s=g.s,this.g=g.g,k="query";else if("#"==m)this.j=g.j,this.m=g.m,this.l=g.l.slice(),this.o=g.o,this.v="#",this.s=g.s,this.g=g.g,k="fragment";else{k=a[x+1];var y=a[x+2];if("file"!=this.h||!q.test(m)||":"!=k&&"|"!=k||void 0!=y&&"/"!=y&&"\\"!=y&&"?"!=y&&"#"!=y)this.j=g.j,this.m=g.m,this.s=g.s,this.g=g.g,this.l=g.l.slice(),this.l.pop();k="relative path";continue}break;
    case "relative slash":if("/"==m||"\\"==m)k="file"==this.h?"file host":"authority ignore slashes";else{"file"!=this.h&&(this.j=g.j,this.m=g.m,this.s=g.s,this.g=g.g);k="relative path";continue}break;case "authority first slash":if("/"==m)k="authority second slash";else{k="authority ignore slashes";continue}break;case "authority second slash":k="authority ignore slashes";if("/"!=m){continue}break;case "authority ignore slashes":if("/"!=
    m&&"\\"!=m){k="authority";continue}break;case "authority":if("@"==m){v&&(p+="%40");v=!0;for(m=0;m<p.length;m++)y=p[m],"\t"==y||"\n"==y||"\r"==y?h("Invalid whitespace in authority."):":"==y&&null===this.g?this.g="":(y=c(y),null!==this.g?this.g+=y:this.s+=y);p="";}else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){x-=p.length;p="";k="host";continue}else p+=m;break;case "file host":if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){2!=p.length||
    !q.test(p[0])||":"!=p[1]&&"|"!=p[1]?(0!=p.length&&(this.j=b.call(this,p),p=""),k="relative path start"):k="relative path";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid whitespace in file host."):p+=m;break;case "host":case "hostname":if(":"!=m||Q)if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){this.j=b.call(this,p);p="";k="relative path start";if(e)break a;continue}else"\t"!=m&&"\n"!=m&&"\r"!=m?("["==m?Q=!0:"]"==m&&(Q=!1),p+=m):h("Invalid code point in host/hostname: "+m);else if(this.j=b.call(this,
    p),p="",k="port","hostname"==e)break a;break;case "port":if(/[0-9]/.test(m))p+=m;else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m||e){""!=p&&(p=parseInt(p,10),p!=l[this.h]&&(this.m=p+""),p="");if(e)break a;k="relative path start";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid code point in port: "+m):(f.call(this),this.i=!0);break;case "relative path start":k="relative path";if("/"!=m&&"\\"!=m)continue;break;case "relative path":if(void 0!=m&&"/"!=m&&"\\"!=
    m&&(e||"?"!=m&&"#"!=m))"\t"!=m&&"\n"!=m&&"\r"!=m&&(p+=c(m));else{if(y=n[p.toLowerCase()])p=y;".."==p?(this.l.pop(),"/"!=m&&"\\"!=m&&this.l.push("")):"."==p&&"/"!=m&&"\\"!=m?this.l.push(""):"."!=p&&("file"==this.h&&0==this.l.length&&2==p.length&&q.test(p[0])&&"|"==p[1]&&(p=p[0]+":"),this.l.push(p));p="";"?"==m?(this.o="?",k="query"):"#"==m&&(this.v="#",k="fragment");}break;case "query":e||"#"!=m?void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.o+=d(m)):(this.v=
    "#",k="fragment");break;case "fragment":void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.v+=m);}x++;}}function f(){this.s=this.ia=this.h="";this.g=null;this.m=this.j="";this.l=[];this.v=this.o="";this.B=this.i=!1;}function g(a,b){void 0===b||b instanceof g||(b=new g(String(b)));this.a=a;f.call(this);a=this.a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");e.call(this,a,null,b);}var h=!1;try{var k=new URL("b","http://a");k.pathname="c%20d";h="http://a/c%20d"===k.href;}catch(x){}if(!h){var l=Object.create(null);l.ftp=
    21;l.file=0;l.gopher=70;l.http=80;l.https=443;l.ws=80;l.wss=443;var n=Object.create(null);n["%2e"]=".";n[".%2e"]="..";n["%2e."]="..";n["%2e%2e"]="..";var q=/[a-zA-Z]/,I=/[a-zA-Z0-9\+\-\.]/;g.prototype={toString:function(){return this.href},get href(){if(this.i)return this.a;var a="";if(""!=this.s||null!=this.g)a=this.s+(null!=this.g?":"+this.g:"")+"@";return this.protocol+(this.B?"//"+a+this.host:"")+this.pathname+this.o+this.v},set href(a){f.call(this);e.call(this,a);},get protocol(){return this.h+
    ":"},set protocol(a){this.i||e.call(this,a+":","scheme start");},get host(){return this.i?"":this.m?this.j+":"+this.m:this.j},set host(a){!this.i&&this.B&&e.call(this,a,"host");},get hostname(){return this.j},set hostname(a){!this.i&&this.B&&e.call(this,a,"hostname");},get port(){return this.m},set port(a){!this.i&&this.B&&e.call(this,a,"port");},get pathname(){return this.i?"":this.B?"/"+this.l.join("/"):this.ia},set pathname(a){!this.i&&this.B&&(this.l=[],e.call(this,a,"relative path start"));},get search(){return this.i||
    !this.o||"?"==this.o?"":this.o},set search(a){!this.i&&this.B&&(this.o="?","?"==a[0]&&(a=a.slice(1)),e.call(this,a,"query"));},get hash(){return this.i||!this.v||"#"==this.v?"":this.v},set hash(a){this.i||(a?(this.v="#","#"==a[0]&&(a=a.slice(1)),e.call(this,a,"fragment")):this.v="");},get origin(){var a;if(this.i||!this.h)return "";switch(this.h){case "data":case "file":case "javascript":case "mailto":return "null"}return (a=this.host)?this.h+"://"+a:""}};var v=a.URL;v&&(g.createObjectURL=function(a){return v.createObjectURL.apply(v,
    arguments)},g.revokeObjectURL=function(a){v.revokeObjectURL(a);});a.URL=g;}})(window);Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var a=(this.ownerDocument||this).querySelector("base[href]");return a&&a.href||window.location.href},configurable:!0,enumerable:!0});var ph=document.createElement("style");ph.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var qh=document.querySelector("head");qh.insertBefore(ph,qh.firstChild);var rh=window.customElements,sh=!1,th=null;rh.polyfillWrapFlushCallback&&rh.polyfillWrapFlushCallback(function(a){th=a;sh&&a();});function uh(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document);th&&th();sh=!0;window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}));}
    "complete"!==document.readyState?(window.addEventListener("load",uh),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",uh);uh();})):uh();}).call(commonjsGlobal$1);

    var KamiComponent = /** @class */ (function (_super) {
        __extends$1(KamiComponent, _super);
        function KamiComponent() {
            var _this = 
            // Always call super first in constructor
            _super.call(this) || this;
            _this.isObservable = false;
            /**
             * @property {URL} url - the current browser url
             */
            _this.url = new URL(window.location.href);
            //init props from children
            _this.setProperties();
            /**
             * @property {HTMLElement} shadow - the shadow root of your component
             */
            _this.shadow = _this.attachShadow({ mode: 'open' });
            /**
             * Use this dom to get children.
             * Call the querySelector directly from this property.
             * @property {HTMLDivElement} wrapper - main dom of your component
             */
            _this.wrapper = document.createElement('div');
            /**
             * @property {HTMLStyleElement}  styleScope - style dom
             */
            _this.styleScope = document.createElement('style');
            //set the type for the style dom
            _this.styleScope.type = 'text/css';
            //generate the style and dom of your component
            _this.render();
            //append your component to the shadow root
            //display the component
            _this.initComponent();
            //init all your event listener
            _this.initEventListener();
            return _this;
        }
        /**
         * This methode update your attribute set in the props object.
         * @param {String} name - the attribute name
         * @param {String} oldValue - the old value
         * @param {String} newValue - the new value
         */
        KamiComponent.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
            if (this.isObservable) {
                this.props[name] = newValue;
            }
        };
        /**
         * This methode will observer the target which you have pass in param.
         * When one of the property of your target is set the render() and initEventlistener() will be call.
         * Which reload dynamicaly your component.
         * @param {Object} target - object which will be observed
         * @returns {ProxyConstructor}
         */
        KamiComponent.prototype.observe = function (target) {
            var _this = this;
            this.isObservable = true;
            //create a proxy to observe your props
            return new Proxy(target, {
                //just return your props
                get: function (obj, prop) {
                    return obj[prop];
                },
                //rerender your component and his listener
                set: function (obj, prop, value) {
                    //set the props value
                    obj[prop] = value;
                    //rerender the component
                    _this.render();
                    //reload listener
                    _this.initEventListener();
                    return true;
                }
            });
        };
        /**
         * Generate the dom structure and style of your component.
         * It will update the wrapper and styleScope property.
         * @returns {Component} this
         */
        KamiComponent.prototype.render = function () {
            //reload dom structure
            this.wrapper.innerHTML = this.renderHtml();
            //reload style
            this.styleScope.textContent = this.renderStyle();
            return this;
        };
        /**
         * Init the web component
         */
        KamiComponent.prototype.initComponent = function () {
            this.shadow.appendChild(this.styleScope);
            this.shadow.appendChild(this.wrapper);
        };
        /**
         * Convert a String into a boolean
         * @param {String} val - the data to convert in bool
         * @returns {Boolean} the boolean converted
         */
        KamiComponent.prototype.toBoolean = function (val) {
            var a = {
                'true': true,
                'false': false
            };
            return a[val];
        };
        /**
         * Get a param form the url.
         * @param {String} param - the param name
         */
        KamiComponent.prototype.getUrlParam = function (param) {
            return this.url.searchParams.get(param);
        };
        /**
         * Set or update the value of a param into the browser url.
         * @param {Object} object
         * @param {String} object.param - the param name
         * @param {String} object.value - the value
         * @returns {Component} this
         */
        KamiComponent.prototype.setUrlParam = function (param, value) {
            //boolean to check if a update url is needed
            var newUrl = false;
            if (value.toString() != '') {
                //check if the param already exist
                this.getUrlParam(param) ?
                    //update the param
                    this.url.searchParams.set(param, value) :
                    //add the param
                    this.url.searchParams.append(param, value);
                //update url is needed
                newUrl = true;
            }
            //check if value param is empty
            if (value.toString() == '' && this.getUrlParam(param) && !newUrl) {
                //delete a param
                this.url.searchParams.delete(param);
                //update url is needed
                newUrl = true;
            }
            if (newUrl == true) {
                //update the browser url
                window.history.pushState({}, '', this.url.toString());
            }
            return this;
        };
        return KamiComponent;
    }(HTMLElement));

    var Type;
    (function (Type) {
        Type["OK"] = "OK";
        Type["ERROR"] = "ERROR";
        Type["WARNING"] = "WARNING";
        Type["INFO"] = "INFO";
    })(Type || (Type = {}));
    var Type$1 = Type;

    var Color;
    (function (Color) {
        Color["OK"] = "#00bf9a";
        Color["ERROR"] = "#fd77a4";
        Color["WARNING"] = "#ff9f89";
        Color["INFO"] = "#419ef9";
    })(Color || (Color = {}));
    var Color$1 = Color;

    var Icon;
    (function (Icon) {
        Icon["OK"] = "check";
        Icon["ERROR"] = "error";
        Icon["WARNING"] = "warning";
        Icon["INFO"] = "info";
    })(Icon || (Icon = {}));
    var Icon$1 = Icon;

    /**
     * Create a simple flash message
     * @class KamiFlash
     * @extends KamiComponent
     */
    var KamiFlash = /** @class */ (function (_super) {
        __extends(KamiFlash, _super);
        function KamiFlash() {
            var _this = _super.call(this) || this;
            _this.close = _this.wrapper.querySelector('#close');
            _this.flash = _this.wrapper.querySelector('.flash');
            return _this;
        }
        Object.defineProperty(KamiFlash, "observedAttributes", {
            get: function () {
                return ['typeprops', 'messageprops'];
            },
            enumerable: true,
            configurable: true
        });
        KamiFlash.prototype.setProperties = function () {
            var type = this.getAttribute('typeProps') || 'OK';
            this.props = this.observe({
                type: Type$1[type],
                icon: Icon$1[type],
                message: this.getAttribute('messageProps') || 'Write your message flash here'
            });
        };
        KamiFlash.prototype.initEventListener = function () {
            var _this = this;
            //reinit this property because this method
            //is call before the constructor of this class
            this.flash = this.wrapper.querySelector('.flash');
            this.close = this.wrapper.querySelector('#close');
            this.close.addEventListener('click', function () {
                _this.flash.animate([
                    { opacity: '1', transform: 'translateY(0px)' },
                    { opacity: '0', transform: 'translateY(30px)' }
                ], {
                    duration: 500,
                    easing: 'ease'
                }).onfinish = function () {
                    //delete this component.
                    _this.remove();
                };
            });
        };
        /**
         * This method is call when the compenent it create.
         * Here it use to add an enter animation
         */
        KamiFlash.prototype.connectedCallback = function () {
            var _this = this;
            if (this.flash && this.close) {
                this.flash.animate([
                    { opacity: '0', transform: 'translateY(20px)' },
                    { opacity: '1', transform: 'translateY(0px)' }
                ], {
                    duration: 500,
                    easing: 'ease'
                });
                setTimeout(function () {
                    _this.close.animate([
                        { opacity: '0', transform: 'translateX(20px) rotateZ(45deg)' },
                        { opacity: '1', transform: 'translateX(0px) rotateZ(0deg)' }
                    ], {
                        duration: 500,
                        easing: 'ease'
                    }).onfinish = function () {
                        _this.close.style.opacity = '1';
                    };
                }, 400);
            }
        };
        KamiFlash.prototype.renderHtml = function () {
            return "\n        \n            <div class=\"flash\">\n                <div class=\"flash__message flash__message--" + this.props.type + " shadow__bottom--30px\">\n                    <iron-icon icon=\"" + this.props.icon + "\"></iron-icon>\n                    <div class=\"flash__text\">" + this.props.message + "</div>\n                    <iron-icon class=\"flash__close\" id=\"close\" icon=\"close\"></iron-icon>\n                </div>\n            </div>\n        ";
        };
        KamiFlash.prototype.renderStyle = function () {
            return "\n\n            .flash{\n                position: fixed;\n                bottom: 20px;\n                width: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                transition: all 1s ease;\n                z-index: 100;\n            }\n\n            .flash__message{\n                padding: 10px;\n                border-radius: .2857rem;\n                align-items: center;\n                justify-content: space-around;\n                display: flex;\n            }\n\n            .flash__text{\n                padding-right: 10px;\n                padding-left: 10px;\n                font-family: sans-serif;\n            }\n\n            .flash__message--" + Type$1.ERROR + "{\n                background-color: " + Color$1.ERROR + ";\n                color: white;\n            }\n\n            .flash__message--" + Type$1.OK + "{\n                background-color: " + Color$1.OK + ";\n                color: white;\n            }\n\n            .flash__message--" + Type$1.WARNING + "{\n                background-color: " + Type$1.WARNING + ";\n                color: white;\n            }\n\n            .flash__close{\n                cursor: pointer;\n                opacity: 0;\n            }\n\n            .flash__close:hover{\n                transition : all 0.5s ease;\n            }\n        ";
        };
        return KamiFlash;
    }(KamiComponent));

    return KamiFlash;

})));
//# sourceMappingURL=KamiFlash.umd.js.map
