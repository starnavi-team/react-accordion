!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("st-react-accordion",[],t):"object"==typeof exports?exports["st-react-accordion"]=t():e["st-react-accordion"]=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=6)}([function(e,t,r){e.exports=r(4)()},function(e,t,r){"use strict";e.exports=r(2)},function(e,t,r){"use strict";
/** @license React v16.5.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(3),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.async_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112;o&&Symbol.for("react.placeholder");var y="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,i,c,u){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,o,i,c,u],a=0;(e=Error(t.replace(/%s/g,function(){return l[a++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function b(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||h}function g(){}function O(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var _=O.prototype=new g;_.constructor=O,n(_,b.prototype),_.isPureReactComponent=!0;var j={current:null,currentDispatcher:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n=void 0,o={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var a=Array(l),s=0;s<l;s++)a[s]=arguments[s+2];o.children=a}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var k=/\/+/g,E=[];function T(e,t,r,n){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function C(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function $(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var l=!1;if(null===t)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case i:case c:l=!0}}if(l)return n(o,t,""===r?"."+N(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){var s=r+N(u=t[a],a);l+=e(u,s,n,o)}else if(s=null===t||"object"!=typeof t?null:"function"==typeof(s=y&&t[y]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),a=0;!(u=t.next()).done;)l+=e(u=u.value,s=r+N(u,a++),n,o);else"object"===u&&m("31","[object Object]"==(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return l}(e,"",t,r)}function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function R(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,n,r,function(e){return e}):null!=e&&(w(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(k,"$&/")+"/")+r)),n.push(e))}function A(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(k,"$&/")+"/"),$(e,I,t=T(t,i,n,o)),C(t)}var M={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return A(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;$(e,R,t=T(null,null,t,r)),C(t)},count:function(e){return $(e,function(){return null},null)},toArray:function(e){var t=[];return A(e,t,null,function(e){return e}),t},only:function(e){return w(e)||m("143"),e}},createRef:function(){return{current:null}},Component:b,PureComponent:O,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null,unstable_read:null}).Provider={$$typeof:s,_context:e},e.Consumer=e,e.unstable_read=function(e,t){var r=j.currentDispatcher;return null===r&&m("277"),r.readContext(e,t)}.bind(null,e),e},forwardRef:function(e){return{$$typeof:d,render:e}},Fragment:u,StrictMode:l,unstable_AsyncMode:p,unstable_Profiler:a,createElement:P,cloneElement:function(e,t,r){(null===e||void 0===e)&&m("267",e);var o=void 0,c=n({},e.props),u=e.key,l=e.ref,a=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,a=j.current),void 0!==t.key&&(u=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)S.call(t,o)&&!x.hasOwnProperty(o)&&(c[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))c.children=r;else if(1<o){s=Array(o);for(var f=0;f<o;f++)s[f]=arguments[f+2];c.children=s}return{$$typeof:i,type:e.type,key:u,ref:l,props:c,_owner:a}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:w,version:"16.5.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:j,assign:n}},U={default:M},q=U&&M||U;e.exports=q.default||q},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,c,u=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var a in r=Object(arguments[l]))o.call(r,a)&&(u[a]=r[a]);if(n){c=n(r);for(var s=0;s<c.length;s++)i.call(r,c[s])&&(u[c[s]]=r[c[s]])}}return u}},function(e,t,r){"use strict";var n=r(5);function o(){}e.exports=function(){function e(e,t,r,o,i,c){if(c!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=o,r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),i=r(0);class c extends n.Component{render(){const{children:e,style:t,className:r}=this.props;return o.a.createElement("div",{style:t,className:r},e)}}c.propTypes={style:i.object,className:i.string,children:i.any};var u=c;function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class a extends n.Component{constructor(...e){super(...e),l(this,"state",{isOpened:!1}),l(this,"onBodyToggle",()=>{this.setState({isOpened:!this.state.isOpened})})}render(){const e=o.a.Children.map(this.props.children,e=>o.a.cloneElement(e,{isOpened:this.state.isOpened,onBodyToggle:this.onBodyToggle}));return o.a.createElement("div",{style:this.props.style,className:this.props.className},e)}}a.propTypes={style:i.object,className:i.string,children:i.any};var s=a;class f extends n.Component{render(){const{onBodyToggle:e,children:t,style:r,className:n}=this.props;return o.a.createElement("div",{style:r,className:n,onClick:e},t)}}f.propTypes={style:i.object,className:i.string,children:i.any};var p=f;class d extends n.Component{render(){const{children:e,isOpened:t,style:r,className:n}=this.props;return o.a.createElement("div",null,t&&o.a.createElement("div",{style:r,className:n},e))}}d.propTypes={style:i.object,className:i.string,children:i.any,isOpened:i.bool};var y=d;r.d(t,"Accordion",function(){return u}),r.d(t,"Item",function(){return s}),r.d(t,"ItemTitle",function(){return p}),r.d(t,"ItemBody",function(){return y})}])});