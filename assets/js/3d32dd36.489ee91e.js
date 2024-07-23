/*! For license information please see 3d32dd36.489ee91e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[65240],{347382:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>s});var r=t(824246),o=t(511151);const u={id:"frontend-plugin-api.iconbundleblueprint",title:"IconBundleBlueprint",description:"API reference for IconBundleBlueprint"},i=void 0,c={id:"reference/frontend-plugin-api.iconbundleblueprint",title:"IconBundleBlueprint",description:"API reference for IconBundleBlueprint",source:"@site/../docs/reference/frontend-plugin-api.iconbundleblueprint.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.iconbundleblueprint",permalink:"/docs/reference/frontend-plugin-api.iconbundleblueprint",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.iconbundleblueprint.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.iconbundleblueprint",title:"IconBundleBlueprint",description:"API reference for IconBundleBlueprint"}},a={},s=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.iconbundleblueprint",children:(0,r.jsx)(n.code,{children:"IconBundleBlueprint"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'IconBundleBlueprint: import("../wiring").ExtensionBlueprint<{\n    icons: {\n        [x: string]: IconComponent;\n    };\n}, import("../wiring").AnyExtensionInputMap, {\n    icons: import("../wiring").ConfigurableExtensionDataRef<"core.icons", {\n        [x: string]: IconComponent;\n    }, {}>;\n}, unknown, {\n    icons: import("../wiring").ConfigurableExtensionDataRef<"core.icons", {\n        [x: string]: IconComponent;\n    }, {}>;\n}>\n'})})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,u={},s=null,l=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!a.hasOwnProperty(r)&&(u[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===u[r]&&(u[r]=n[r]);return{$$typeof:o,type:e,key:s,ref:l,props:u,_owner:c.current}}n.Fragment=u,n.jsx=s,n.jsxs=s},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,b={};function h(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||y}function _(){}function v(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=h.prototype;var g=v.prototype=new _;g.constructor=v,m(g,h.prototype),g.isPureReactComponent=!0;var S=Array.isArray,x=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function w(e,n,r){var o,u={},i=null,c=null;if(null!=n)for(o in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(i=""+n.key),n)x.call(n,o)&&!E.hasOwnProperty(o)&&(u[o]=n[o]);var a=arguments.length-2;if(1===a)u.children=r;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];u.children=s}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:t,type:e,key:i,ref:c,props:u,_owner:k.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var C=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function I(e,n,o,u,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case r:a=!0}}if(a)return i=i(a=e),e=""===u?"."+R(a,0):u,S(i)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),I(i,n,o,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),n.push(i)),1;if(a=0,u=""===u?".":u+":",S(e))for(var s=0;s<e.length;s++){var l=u+R(c=e[s],s);a+=I(c,n,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(c=e.next()).done;)a+=I(c=c.value,n,o,l=u+R(c,s++),i);else if("object"===c)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,n,t){if(null==e)return e;var r=[],o=0;return I(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function O(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},B={transition:null},A={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:B,ReactCurrentOwner:k};n.Children={map:$,forEach:function(e,n,t){$(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=h,n.Fragment=o,n.Profiler=i,n.PureComponent=v,n.StrictMode=u,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),u=e.key,i=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,c=k.current),void 0!==n.key&&(u=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)x.call(n,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==a?a[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){a=Array(s);for(var l=0;l<s;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:t,type:e.type,key:u,ref:i,props:o,_owner:c}},n.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},n.createElement=w,n.createFactory=function(e){var n=w.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=j,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=B.transition;B.transition={};try{e()}finally{B.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return P.current.useCallback(e,n)},n.useContext=function(e){return P.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return P.current.useDeferredValue(e)},n.useEffect=function(e,n){return P.current.useEffect(e,n)},n.useId=function(){return P.current.useId()},n.useImperativeHandle=function(e,n,t){return P.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return P.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return P.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return P.current.useMemo(e,n)},n.useReducer=function(e,n,t){return P.current.useReducer(e,n,t)},n.useRef=function(e){return P.current.useRef(e)},n.useState=function(e){return P.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return P.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return P.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var r=t(667294);const o={},u=r.createContext(o);function i(e){const n=r.useContext(u);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(u.Provider,{value:n},e.children)}}}]);