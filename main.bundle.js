!function(){"use strict";var t={d:function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}};function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],c=!0,u=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{c||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,r)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[H]}function i(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===W}(t)||Array.isArray(t)||!!t[z]||!!t.constructor[z]||d(t)||s(t))}function c(t,e,r){void 0===r&&(r=!1),0===u(t)?(r?Object.keys:V)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function u(t){var e=t[H];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:d(t)?2:s(t)?3:0}function a(t,e){return 2===u(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function f(t,e,r){var n=u(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function l(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function d(t){return F&&t instanceof Map}function s(t){return U&&t instanceof Set}function p(t){return t.o||t.t}function v(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=$(t);delete e[H];for(var r=V(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function y(t,e){return void 0===e&&(e=!1),b(t)||o(t)||!i(t)||(u(t)>1&&(t.set=t.add=t.clear=t.delete=h),Object.freeze(t),e&&c(t,(function(t,e){return y(e,!0)}),!0)),t}function h(){n(2)}function b(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function m(t){var e=q[t];return e||n(18,t),e}function g(){return C}function O(t,e){e&&(m("Patches"),t.u=[],t.s=[],t.v=e)}function w(t){E(t),t.p.forEach(j),t.p=null}function E(t){t===C&&(C=t.l)}function P(t){return C={p:[],l:C,h:t,m:!0,_:0}}function j(t){var e=t[H];0===e.i||1===e.i?e.j():e.O=!0}function S(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.g||m("ES5").S(e,t,o),o?(r[H].P&&(w(e),n(4)),i(t)&&(t=A(e,t),e.l||I(e,t)),e.u&&m("Patches").M(r[H].t,t,e.u,e.s)):t=A(e,r,[]),w(e),e.u&&e.v(e.u,e.s),t!==X?t:void 0}function A(t,e,r){if(b(e))return e;var n=e[H];if(!n)return c(e,(function(o,i){return _(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return I(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=v(n.k):n.o;c(3===n.i?new Set(o):o,(function(e,i){return _(t,n,o,e,i,r)})),I(t,o,!1),r&&t.u&&m("Patches").R(n,r,t.u,t.s)}return n.o}function _(t,e,r,n,c,u){if(o(c)){var l=A(t,c,u&&e&&3!==e.i&&!a(e.D,n)?u.concat(n):void 0);if(f(r,n,l),!o(l))return;t.m=!1}if(i(c)&&!b(c)){if(!t.h.F&&t._<1)return;A(t,c),e&&e.A.l||I(t,c)}}function I(t,e,r){void 0===r&&(r=!1),t.h.F&&t.m&&y(e,r)}function D(t,e){var r=t[H];return(r?p(r):t)[e]}function L(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function k(t){t.P||(t.P=!0,t.l&&k(t.l))}function N(t){t.o||(t.o=v(t.t))}function x(t,e,r){var n=d(e)?m("MapSet").N(e,r):s(e)?m("MapSet").T(e,r):t.g?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:g(),P:!1,I:!1,D:{},l:e,t,k:null,o:null,j:null,C:!1},o=n,i=J;r&&(o=[n],i=G);var c=Proxy.revocable(o,i),u=c.revoke,a=c.proxy;return n.k=a,n.j=u,a}(e,r):m("ES5").J(e,r);return(r?r.A:g()).p.push(n),n}function R(t){return o(t)||n(22,t),function t(e){if(!i(e))return e;var r,n=e[H],o=u(e);if(n){if(!n.P&&(n.i<4||!m("ES5").K(n)))return n.t;n.I=!0,r=T(e,o),n.I=!1}else r=T(e,o);return c(r,(function(e,o){n&&function(t,e){return 2===u(t)?t.get(e):t[e]}(n.t,e)===o||f(r,e,t(o))})),3===o?new Set(r):r}(t)}function T(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return v(t)}t.d({},{H:function(){return oe},h:function(){return ne}});var B,C,M="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),F="undefined"!=typeof Map,U="undefined"!=typeof Set,K="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,X=M?Symbol.for("immer-nothing"):((B={})["immer-nothing"]=!0,B),z=M?Symbol.for("immer-draftable"):"__$immer_draftable",H=M?Symbol.for("immer-state"):"__$immer_state",W=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),V="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,$=Object.getOwnPropertyDescriptors||function(t){var e={};return V(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},q={},J={get:function(t,e){if(e===H)return t;var r=p(t);if(!a(r,e))return function(t,e,r){var n,o=L(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!i(n)?n:n===D(t.t,e)?(N(t),t.o[e]=x(t.A.h,n,t)):n},has:function(t,e){return e in p(t)},ownKeys:function(t){return Reflect.ownKeys(p(t))},set:function(t,e,r){var n=L(p(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=D(p(t),e),i=null==o?void 0:o[H];if(i&&i.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(l(r,o)&&(void 0!==r||a(t.t,e)))return!0;N(t),k(t)}return t.o[e]===r&&"number"!=typeof r&&(void 0!==r||e in t.o)||(t.o[e]=r,t.D[e]=!0,!0)},deleteProperty:function(t,e){return void 0!==D(t.t,e)||e in t.t?(t.D[e]=!1,N(t),k(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=p(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},G={};c(J,(function(t,e){G[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),G.deleteProperty=function(t,e){return G.set.call(this,t,e,void 0)},G.set=function(t,e,r){return J.set.call(this,t[0],e,r,t[0])};var Y=function(){function t(t){var e=this;this.g=K,this.F=!0,this.produce=function(t,r,o){if("function"==typeof t&&"function"!=typeof r){var c=r;r=t;var u=e;return function(t){var e=this;void 0===t&&(t=c);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return u.produce(t,(function(t){var n;return(n=r).call.apply(n,[e,t].concat(o))}))}}var a;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(t)){var f=P(e),l=x(e,t,void 0),d=!0;try{a=r(l),d=!1}finally{d?w(f):E(f)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(t){return O(f,o),S(t,f)}),(function(t){throw w(f),t})):(O(f,o),S(a,f))}if(!t||"object"!=typeof t){if(void 0===(a=r(t))&&(a=t),a===X&&(a=void 0),e.F&&y(a,!0),o){var s=[],p=[];m("Patches").M(t,a,s,p),o(s,p)}return a}n(21,t)},this.produceWithPatches=function(t,r){if("function"==typeof t)return function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.produceWithPatches(r,(function(e){return t.apply(void 0,[e].concat(o))}))};var n,o,i=e.produce(t,r,(function(t,e){n=t,o=e}));return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(t){return[t,n,o]})):[i,n,o]},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){i(t)||n(8),o(t)&&(t=R(t));var e=P(this),r=x(this,t,void 0);return r[H].C=!0,E(e),r},e.finishDraft=function(t,e){var r=(t&&t[H]).A;return O(r,e),S(void 0,r)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!K&&n(20),this.g=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}r>-1&&(e=e.slice(r+1));var i=m("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e)}))},t}(),Q=new Y,Z=Q.produce;Q.produceWithPatches.bind(Q),Q.setAutoFreeze.bind(Q),Q.setUseProxies.bind(Q),Q.applyPatches.bind(Q),Q.createDraft.bind(Q),Q.finishDraft.bind(Q);const tt=Z;function et(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function rt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function nt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(r),!0).forEach((function(e){et(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):rt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function ot(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var it="function"==typeof Symbol&&Symbol.observable||"@@observable",ct=function(){return Math.random().toString(36).substring(7).split("").join(".")},ut={INIT:"@@redux/INIT"+ct(),REPLACE:"@@redux/REPLACE"+ct(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ct()}};function at(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function ft(t,e,r){var n;if("function"==typeof e&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(ot(0));if("function"==typeof e&&void 0===r&&(r=e,e=void 0),void 0!==r){if("function"!=typeof r)throw new Error(ot(1));return r(ft)(t,e)}if("function"!=typeof t)throw new Error(ot(2));var o=t,i=e,c=[],u=c,a=!1;function f(){u===c&&(u=c.slice())}function l(){if(a)throw new Error(ot(3));return i}function d(t){if("function"!=typeof t)throw new Error(ot(4));if(a)throw new Error(ot(5));var e=!0;return f(),u.push(t),function(){if(e){if(a)throw new Error(ot(6));e=!1,f();var r=u.indexOf(t);u.splice(r,1),c=null}}}function s(t){if(!at(t))throw new Error(ot(7));if(void 0===t.type)throw new Error(ot(8));if(a)throw new Error(ot(9));try{a=!0,i=o(i,t)}finally{a=!1}for(var e=c=u,r=0;r<e.length;r++)(0,e[r])();return t}function p(t){if("function"!=typeof t)throw new Error(ot(10));o=t,s({type:ut.REPLACE})}function v(){var t,e=d;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(ot(11));function r(){t.next&&t.next(l())}return r(),{unsubscribe:e(r)}}})[it]=function(){return this},t}return s({type:ut.INIT}),(n={dispatch:s,subscribe:d,getState:l,replaceReducer:p})[it]=v,n}function lt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function dt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error(ot(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=e.map((function(t){return t(o)}));return n=lt.apply(void 0,i)(r.dispatch),nt(nt({},r),{},{dispatch:n})}}}function st(t){return function(e){var r=e.dispatch,n=e.getState;return function(e){return function(o){return"function"==typeof o?o(r,n,t):e(o)}}}}var pt=st();pt.withExtraArgument=st;const vt=pt;var yt,ht=(yt=function(t,e){return yt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},yt(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}yt(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),bt=function(t,e){for(var r=0,n=e.length,o=t.length;r<n;r++,o++)t[o]=e[r];return t},mt=Object.defineProperty,gt=(Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols),Ot=Object.prototype.hasOwnProperty,wt=Object.prototype.propertyIsEnumerable,Et=function(t,e,r){return e in t?mt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},Pt=function(t,e){for(var r in e||(e={}))Ot.call(e,r)&&Et(t,r,e[r]);if(gt)for(var n=0,o=gt(e);n<o.length;n++)r=o[n],wt.call(e,r)&&Et(t,r,e[r]);return t},jt="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?lt:lt.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var St=function(t){function e(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=t.apply(this,r)||this;return Object.setPrototypeOf(o,e.prototype),o}return ht(e,t),Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.prototype.concat.apply(this,e)},e.prototype.prepend=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 1===t.length&&Array.isArray(t[0])?new(e.bind.apply(e,bt([void 0],t[0].concat(this)))):new(e.bind.apply(e,bt([void 0],t.concat(this))))},e}(Array);function At(t,e){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(e){var o=e.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Pt(Pt({type:t,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:t,payload:r[0]}}return r.toString=function(){return""+t},r.type=t,r.match=function(e){return e.type===t},r}function _t(t){var e,r={},n=[],o={addCase:function(t,e){var n="string"==typeof t?t:t.type;if(n in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[n]=e,o},addMatcher:function(t,e){return n.push({matcher:t,reducer:e}),o},addDefaultCase:function(t){return e=t,o}};return t(o),[r,n,e]}function It(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");var r,n="function"==typeof t.initialState?t.initialState:tt(t.initialState,(function(){})),c=t.reducers||{},u=Object.keys(c),a={},f={},l={};function d(){var e="function"==typeof t.extraReducers?_t(t.extraReducers):[t.extraReducers],r=e[0],c=void 0===r?{}:r,u=e[1],a=void 0===u?[]:u,l=e[2],d=void 0===l?void 0:l,s=Pt(Pt({},c),f);return function(t,e,r,n){void 0===r&&(r=[]);var c,u="function"==typeof e?_t(e):[e,r,n],a=u[0],f=u[1],l=u[2];if(function(t){return"function"==typeof t}(t))c=function(){return tt(t(),(function(){}))};else{var d=tt(t,(function(){}));c=function(){return d}}function s(t,e){void 0===t&&(t=c());var r=bt([a[e.type]],f.filter((function(t){return(0,t.matcher)(e)})).map((function(t){return t.reducer})));return 0===r.filter((function(t){return!!t})).length&&(r=[l]),r.reduce((function(t,r){if(r){var n;if(o(t))return void 0===(n=r(t,e))?t:n;if(i(t))return tt(t,(function(t){return r(t,e)}));if(void 0===(n=r(t,e))){if(null===t)return t;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return t}),t)}return s.getInitialState=c,s}(n,s,a,d)}return u.forEach((function(t){var r,n,o=c[t],i=e+"/"+t;"reducer"in o?(r=o.reducer,n=o.prepare):r=o,a[t]=r,f[i]=r,l[t]=n?At(i,n):At(i)})),{name:e,reducer:function(t,e){return r||(r=d()),r(t,e)},actions:l,caseReducers:a,getInitialState:function(){return r||(r=d()),r.getInitialState()}}}function Dt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Lt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Dt(Object(r),!0).forEach((function(e){et(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Dt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}!function(){function t(t,e){var r=i[t];return r?r.enumerable=e:i[t]=r={configurable:!0,enumerable:e,get:function(){var e=this[H];return J.get(e,t)},set:function(e){var r=this[H];J.set(r,t,e)}},r}function e(t){for(var e=t.length-1;e>=0;e--){var o=t[e][H];if(!o.P)switch(o.i){case 5:n(o)&&k(o);break;case 4:r(o)&&k(o)}}}function r(t){for(var e=t.t,r=t.k,n=V(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==H){var c=e[i];if(void 0===c&&!a(e,i))return!0;var u=r[i],f=u&&u[H];if(f?f.t!==c:!l(u,c))return!0}}var d=!!e[H];return n.length!==V(e).length+(d?0:1)}function n(t){var e=t.k;if(e.length!==t.t.length)return!0;var r=Object.getOwnPropertyDescriptor(e,e.length-1);if(r&&!r.get)return!0;for(var n=0;n<e.length;n++)if(!e.hasOwnProperty(n))return!0;return!1}var i={};!function(t,e){q[t]||(q[t]=e)}("ES5",{J:function(e,r){var n=Array.isArray(e),o=function(e,r){if(e){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,t(o,!0));return n}var i=$(r);delete i[H];for(var c=V(i),u=0;u<c.length;u++){var a=c[u];i[a]=t(a,e||!!i[a].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,e),i={i:n?5:4,A:r?r.A:g(),P:!1,I:!1,D:{},l:r,t:e,k:o,o:null,O:!1,C:!1};return Object.defineProperty(o,H,{value:i,writable:!0}),o},S:function(t,r,i){i?o(r)&&r[H].A===t&&e(t.p):(t.u&&function t(e){if(e&&"object"==typeof e){var r=e[H];if(r){var o=r.t,i=r.k,u=r.D,f=r.i;if(4===f)c(i,(function(e){e!==H&&(void 0!==o[e]||a(o,e)?u[e]||t(i[e]):(u[e]=!0,k(r)))})),c(o,(function(t){void 0!==i[t]||a(i,t)||(u[t]=!1,k(r))}));else if(5===f){if(n(r)&&(k(r),u.length=!0),i.length<o.length)for(var l=i.length;l<o.length;l++)u[l]=!1;else for(var d=o.length;d<i.length;d++)u[d]=!0;for(var s=Math.min(i.length,o.length),p=0;p<s;p++)i.hasOwnProperty(p)||(u[p]=!0),void 0===u[p]&&t(i[p])}}}}(t.p[0]),e(t.p))},K:function(t){return 4===t.i?r(t):n(t)}})}();var kt=It({name:"bid",initialState:[],reducers:{addBid:{reducer:function(t,e){return t.push(e.payload),t},prepare:function(t){return{payload:Lt({},t)}}}}}),Nt=It({name:"pair",initialState:{},reducers:{updatePairs:{reducer:function(t,e){return Lt(Lt({},t),e.payload)},prepare:function(t){return{payload:Lt({},t)}}},updateCurrentPair:{reducer:function(t,e){return Lt(Lt({},t),e.payload)},prepare:function(t){return{payload:Lt({},t)}}}}}),xt=kt.actions.addBid,Rt=Nt.actions,Tt=Rt.updatePairs,Bt=Rt.updateCurrentPair,Ct=new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"numeric",hour:"numeric",minute:"numeric",year:"2-digit",second:"numeric"}),Mt="USD",Ft=document.getElementById("timer"),Ut=document.getElementById("reverse"),Kt=document.getElementById("home-link"),Xt=document.getElementById("archive-link"),zt=document.getElementById("trade"),Ht=document.getElementById("archive"),Wt=document.getElementById("archive-head"),Vt=document.getElementById("buy-field"),$t=document.getElementById("sell-field"),qt=document.getElementById("currency-1"),Jt=document.getElementById("currency-2"),Gt=document.getElementById("modal"),Yt=document.getElementById("order-descr"),Qt=document.getElementById("input-volume"),Zt=document.getElementById("ok-btn"),te=document.getElementById("cancel-btn");function ee(){Gt.classList.remove("show-modal")}function re(){var t=new Date;Ft.innerHTML="".concat("0".concat(t.getHours()).slice(-2),":").concat("0".concat(t.getMinutes()).slice(-2),":").concat("0".concat(t.getSeconds()).slice(-2))}var ne=function(t){var e,r=function(t){return function(t){void 0===t&&(t={});var e=t.thunk,r=void 0===e||e,n=(t.immutableCheck,t.serializableCheck,new St);return r&&(function(t){return"boolean"==typeof t}(r)?n.push(vt):n.push(vt.withExtraArgument(r.extraArgument))),n}(t)},n=t||{},o=n.reducer,i=void 0===o?void 0:o,c=n.middleware,u=void 0===c?r():c,a=n.devTools,f=void 0===a||a,l=n.preloadedState,d=void 0===l?void 0:l,s=n.enhancers,p=void 0===s?void 0:s;if("function"==typeof i)e=i;else{if(!function(t){if("object"!=typeof t||null===t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;for(var r=e;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return e===r}(i))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');e=function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var o=e[n];"function"==typeof t[o]&&(r[o]=t[o])}var i,c=Object.keys(r);try{!function(t){Object.keys(t).forEach((function(e){var r=t[e];if(void 0===r(void 0,{type:ut.INIT}))throw new Error(ot(12));if(void 0===r(void 0,{type:ut.PROBE_UNKNOWN_ACTION()}))throw new Error(ot(13))}))}(r)}catch(t){i=t}return function(t,e){if(void 0===t&&(t={}),i)throw i;for(var n=!1,o={},u=0;u<c.length;u++){var a=c[u],f=r[a],l=t[a],d=f(l,e);if(void 0===d)throw e&&e.type,new Error(ot(14));o[a]=d,n=n||d!==l}return(n=n||c.length!==Object.keys(t).length)?o:t}}(i)}var v=u;"function"==typeof v&&(v=v(r));var y=dt.apply(void 0,v),h=lt;f&&(h=jt(Pt({trace:!1},"object"==typeof f&&f)));var b=[y];return Array.isArray(p)?b=bt([y],p):"function"==typeof p&&(b=p(b)),ft(e,d,h.apply(void 0,b))}({reducer:{bid:kt.reducer,pair:Nt.reducer}}),oe=document.getElementById("pairs");function ie(t){var e={current:oe.value};t.forEach((function(t){var n=r(t,2),o=n[0],i=n[1],c=(100*Math.random()).toFixed(4);e["".concat(o,"-").concat(i)]=[c,(1.02*+c).toFixed(4)],e["".concat(i,"-").concat(o)]=[(1/+c).toFixed(4),(1/(1.02*+c)).toFixed(4)]})),ne.dispatch(Tt(e))}window.addEventListener("load",(function(){var t=[[Mt,"RUB"],[Mt,"EUR"],[Mt,"YEN"],[Mt,"GBP"]];!function(t){var e="";t.forEach((function(t){var n=r(t,2),o=n[0],i=n[1];e+='\n            <option value="'.concat(o,"-").concat(i,'">').concat(o,"/").concat(i,'</option>\n            <option value="').concat(i,"-").concat(o,'">').concat(i,"/").concat(o,"</option>\n        ")})),oe.innerHTML=e}(t),ne.subscribe((function(){var t,e;e=r((t=ne.getState().pair)[t.current],2),qt.innerHTML=e[0],Jt.innerHTML=e[1]})),ie(t),re(),setInterval((function(){ie(t)}),2e3),setInterval((function(){re()}),1e3),function(){var t="";function e(e){var n=ne.getState().pair,o=n.current,i=r(n[o],2),c=i[0],u=i[1],a=o.split("-").join("/"),f="green-color",l=c;"sell"===(t=e.currentTarget.dataset.type)&&(f="red-color",l=u),Gt.classList.add("show-modal"),Yt.innerHTML='\n            <span class="'.concat(f,'">').concat(t.toUpperCase(),"</span> ").concat(l," ").concat(a,"\n        "),Zt.addEventListener("click",(function(){if(ee(),Qt.value){var e=function(t,e,n){var o=r(ne.getState().pair[t],2),i=o[0],c=o[1],u=+i;"sell"===n&&(u=+c);var a=Ct.format(new Date);return{side:n,price:u,instrument:t.split("-").join("/"),volume:e,timestamp:a}}(o,+Qt.value,t);ne.dispatch(xt(e)),function(t){var e=t.side,r=t.price,n=t.instrument,o=t.volume,i=t.timestamp,c="green-color";"sell"===e&&(c="red-color");var u=e.charAt(0).toUpperCase()+e.slice(1),a='\n            <div class="archive-items__item">\n                <div class="'.concat(c,'">').concat(u,"</div>\n                <div>").concat(r,"</div>\n                <div>").concat(n,"</div>\n                <div>").concat(o,"</div>\n                <div>").concat(i,"</div>\n            </div>\n        ");Wt.insertAdjacentHTML("afterend",a)}(e),Qt.value=""}}))}Ut.addEventListener("click",(function(){oe.value=oe.value.split("-").reverse().join("-"),ne.dispatch(Bt({current:oe.value}))})),oe.addEventListener("change",(function(){ne.dispatch(Bt({current:oe.value}))})),Kt.addEventListener("click",(function(t){t.preventDefault(),zt.classList.remove("hidden"),Ht.classList.add("hidden"),Kt.parentElement.classList.add("active"),Xt.parentElement.classList.remove("active")})),Xt.addEventListener("click",(function(t){t.preventDefault(),Ht.classList.remove("hidden"),zt.classList.add("hidden"),Xt.parentElement.classList.add("active"),Kt.parentElement.classList.remove("active")})),Vt.addEventListener("click",e),$t.addEventListener("click",e),Qt.addEventListener("input",(function(){!Number.isNaN(+Qt.value)&&Qt.value?(Zt.classList.remove("validate"),Zt.disabled=!1):(Zt.classList.add("validate"),Zt.disabled=!0)})),te.addEventListener("click",(function(){ee(),Qt.value=""}))}()}))}();