(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function eh(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function th(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Pe(s)?jw(s):th(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Pe(t))return t;if(we(t))return t}}const $w=/;(?![^(]*\))/g,Vw=/:([^]+)/,Bw=/\/\*.*?\*\//gs;function jw(t){const e={};return t.replace(Bw,"").split($w).forEach(n=>{if(n){const s=n.split(Vw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ja(t){let e="";if(Pe(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=Ja(t[n]);s&&(e+=s+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Hw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zw=eh(Hw);function rm(t){return!!t||t===""}function Ww(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Rs(t[s],e[s]);return n}function Rs(t,e){if(t===e)return!0;let n=uf(t),s=uf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Tr(t),s=Tr(e),n||s)return t===e;if(n=$(t),s=$(e),n||s)return n&&s?Ww(t,e):!1;if(n=we(t),s=we(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Rs(t[o],e[o]))return!1}}return String(t)===String(e)}function nh(t,e){return t.findIndex(n=>Rs(n,e))}const ri=t=>Pe(t)?t:t==null?"":$(t)||we(t)&&(t.toString===lm||!G(t.toString))?JSON.stringify(t,om,2):String(t),om=(t,e)=>e&&e.__v_isRef?om(t,e.value):ai(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Mi(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!$(e)&&!cm(e)?String(e):e,ge={},oi=[],Ut=()=>{},qw=()=>!1,Kw=/^on[^a-z]/,Za=t=>Kw.test(t),sh=t=>t.startsWith("onUpdate:"),ht=Object.assign,ih=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gw=Object.prototype.hasOwnProperty,te=(t,e)=>Gw.call(t,e),$=Array.isArray,ai=t=>Yr(t)==="[object Map]",Mi=t=>Yr(t)==="[object Set]",uf=t=>Yr(t)==="[object Date]",G=t=>typeof t=="function",Pe=t=>typeof t=="string",Tr=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",am=t=>we(t)&&G(t.then)&&G(t.catch),lm=Object.prototype.toString,Yr=t=>lm.call(t),Qw=t=>Yr(t).slice(8,-1),cm=t=>Yr(t)==="[object Object]",rh=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qo=eh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),el=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Yw=/-(\w)/g,nn=el(t=>t.replace(Yw,(e,n)=>n?n.toUpperCase():"")),Xw=/\B([A-Z])/g,Li=el(t=>t.replace(Xw,"-$1").toLowerCase()),tl=el(t=>t.charAt(0).toUpperCase()+t.slice(1)),nc=el(t=>t?`on${tl(t)}`:""),Ir=(t,e)=>!Object.is(t,e),Yo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},la=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ca=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let hf;const Jw=()=>hf||(hf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Nt;class um{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Zw(t){return new um(t)}function eE(t,e=Nt){e&&e.active&&e.effects.push(t)}function tE(){return Nt}const oh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},hm=t=>(t.w&Qn)>0,dm=t=>(t.n&Qn)>0,nE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Qn},sE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];hm(i)&&!dm(i)?i.delete(t):e[n++]=i,i.w&=~Qn,i.n&=~Qn}e.length=n}},Bc=new WeakMap;let ir=0,Qn=1;const jc=30;let Ot;const Ts=Symbol(""),Hc=Symbol("");class ah{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,eE(this,s)}run(){if(!this.active)return this.fn();let e=Ot,n=Bn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ot,Ot=this,Bn=!0,Qn=1<<++ir,ir<=jc?nE(this):df(this),this.fn()}finally{ir<=jc&&sE(this),Qn=1<<--ir,Ot=this.parent,Bn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ot===this?this.deferStop=!0:this.active&&(df(this),this.onStop&&this.onStop(),this.active=!1)}}function df(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Bn=!0;const fm=[];function Fi(){fm.push(Bn),Bn=!1}function Ui(){const t=fm.pop();Bn=t===void 0?!0:t}function gt(t,e,n){if(Bn&&Ot){let s=Bc.get(t);s||Bc.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=oh()),pm(i)}}function pm(t,e){let n=!1;ir<=jc?dm(t)||(t.n|=Qn,n=!hm(t)):n=!t.has(Ot),n&&(t.add(Ot),Ot.deps.push(t))}function In(t,e,n,s,i,r){const o=Bc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?rh(n)&&a.push(o.get("length")):(a.push(o.get(Ts)),ai(t)&&a.push(o.get(Hc)));break;case"delete":$(t)||(a.push(o.get(Ts)),ai(t)&&a.push(o.get(Hc)));break;case"set":ai(t)&&a.push(o.get(Ts));break}if(a.length===1)a[0]&&zc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);zc(oh(l))}}function zc(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&ff(s);for(const s of n)s.computed||ff(s)}function ff(t,e){(t!==Ot||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const iE=eh("__proto__,__v_isRef,__isVue"),gm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tr)),rE=lh(),oE=lh(!1,!0),aE=lh(!0),pf=lE();function lE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let r=0,o=this.length;r<o;r++)gt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(re)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Fi();const s=re(this)[e].apply(this,n);return Ui(),s}}),t}function cE(t){const e=re(this);return gt(e,"has",t),e.hasOwnProperty(t)}function lh(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?CE:wm:e?vm:ym).get(s))return s;const o=$(s);if(!t){if(o&&te(pf,i))return Reflect.get(pf,i,r);if(i==="hasOwnProperty")return cE}const a=Reflect.get(s,i,r);return(Tr(i)?gm.has(i):iE(i))||(t||gt(s,"get",i),e)?a:et(a)?o&&rh(i)?a:a.value:we(a)?t?Em(a):sl(a):a}}const uE=mm(),hE=mm(!0);function mm(t=!1){return function(n,s,i,r){let o=n[s];if(vi(o)&&et(o)&&!et(i))return!1;if(!t&&(!ua(i)&&!vi(i)&&(o=re(o),i=re(i)),!$(n)&&et(o)&&!et(i)))return o.value=i,!0;const a=$(n)&&rh(s)?Number(s)<n.length:te(n,s),l=Reflect.set(n,s,i,r);return n===re(r)&&(a?Ir(i,o)&&In(n,"set",s,i):In(n,"add",s,i)),l}}function dE(t,e){const n=te(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&In(t,"delete",e,void 0),s}function fE(t,e){const n=Reflect.has(t,e);return(!Tr(e)||!gm.has(e))&&gt(t,"has",e),n}function pE(t){return gt(t,"iterate",$(t)?"length":Ts),Reflect.ownKeys(t)}const _m={get:rE,set:uE,deleteProperty:dE,has:fE,ownKeys:pE},gE={get:aE,set(t,e){return!0},deleteProperty(t,e){return!0}},mE=ht({},_m,{get:oE,set:hE}),ch=t=>t,nl=t=>Reflect.getPrototypeOf(t);function Co(t,e,n=!1,s=!1){t=t.__v_raw;const i=re(t),r=re(e);n||(e!==r&&gt(i,"get",e),gt(i,"get",r));const{has:o}=nl(i),a=s?ch:n?dh:br;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function So(t,e=!1){const n=this.__v_raw,s=re(n),i=re(t);return e||(t!==i&&gt(s,"has",t),gt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ao(t,e=!1){return t=t.__v_raw,!e&&gt(re(t),"iterate",Ts),Reflect.get(t,"size",t)}function gf(t){t=re(t);const e=re(this);return nl(e).has.call(e,t)||(e.add(t),In(e,"add",t,t)),this}function mf(t,e){e=re(e);const n=re(this),{has:s,get:i}=nl(n);let r=s.call(n,t);r||(t=re(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Ir(e,o)&&In(n,"set",t,e):In(n,"add",t,e),this}function _f(t){const e=re(this),{has:n,get:s}=nl(e);let i=n.call(e,t);i||(t=re(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&In(e,"delete",t,void 0),r}function yf(){const t=re(this),e=t.size!==0,n=t.clear();return e&&In(t,"clear",void 0,void 0),n}function ko(t,e){return function(s,i){const r=this,o=r.__v_raw,a=re(o),l=e?ch:t?dh:br;return!t&&gt(a,"iterate",Ts),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Ro(t,e,n){return function(...s){const i=this.__v_raw,r=re(i),o=ai(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?ch:e?dh:br;return!e&&gt(r,"iterate",l?Hc:Ts),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function On(t){return function(...e){return t==="delete"?!1:this}}function _E(){const t={get(r){return Co(this,r)},get size(){return Ao(this)},has:So,add:gf,set:mf,delete:_f,clear:yf,forEach:ko(!1,!1)},e={get(r){return Co(this,r,!1,!0)},get size(){return Ao(this)},has:So,add:gf,set:mf,delete:_f,clear:yf,forEach:ko(!1,!0)},n={get(r){return Co(this,r,!0)},get size(){return Ao(this,!0)},has(r){return So.call(this,r,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:ko(!0,!1)},s={get(r){return Co(this,r,!0,!0)},get size(){return Ao(this,!0)},has(r){return So.call(this,r,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:ko(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ro(r,!1,!1),n[r]=Ro(r,!0,!1),e[r]=Ro(r,!1,!0),s[r]=Ro(r,!0,!0)}),[t,n,e,s]}const[yE,vE,wE,EE]=_E();function uh(t,e){const n=e?t?EE:wE:t?vE:yE;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const TE={get:uh(!1,!1)},IE={get:uh(!1,!0)},bE={get:uh(!0,!1)},ym=new WeakMap,vm=new WeakMap,wm=new WeakMap,CE=new WeakMap;function SE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function AE(t){return t.__v_skip||!Object.isExtensible(t)?0:SE(Qw(t))}function sl(t){return vi(t)?t:hh(t,!1,_m,TE,ym)}function kE(t){return hh(t,!1,mE,IE,vm)}function Em(t){return hh(t,!0,gE,bE,wm)}function hh(t,e,n,s,i){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=AE(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function li(t){return vi(t)?li(t.__v_raw):!!(t&&t.__v_isReactive)}function vi(t){return!!(t&&t.__v_isReadonly)}function ua(t){return!!(t&&t.__v_isShallow)}function Tm(t){return li(t)||vi(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Im(t){return la(t,"__v_skip",!0),t}const br=t=>we(t)?sl(t):t,dh=t=>we(t)?Em(t):t;function bm(t){Bn&&Ot&&(t=re(t),pm(t.dep||(t.dep=oh())))}function Cm(t,e){t=re(t);const n=t.dep;n&&zc(n)}function et(t){return!!(t&&t.__v_isRef===!0)}function jn(t){return RE(t,!1)}function RE(t,e){return et(t)?t:new xE(t,e)}class xE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:br(e)}get value(){return bm(this),this._value}set value(e){const n=this.__v_isShallow||ua(e)||vi(e);e=n?e:re(e),Ir(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:br(e),Cm(this))}}function Sm(t){return et(t)?t.value:t}const NE={get:(t,e,n)=>Sm(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return et(i)&&!et(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Am(t){return li(t)?t:new Proxy(t,NE)}var km;class OE{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[km]=!1,this._dirty=!0,this.effect=new ah(e,()=>{this._dirty||(this._dirty=!0,Cm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=re(this);return bm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}km="__v_isReadonly";function DE(t,e,n=!1){let s,i;const r=G(t);return r?(s=t,i=Ut):(s=t.get,i=t.set),new OE(s,i,r||!i,n)}function Hn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){il(r,e,n)}return i}function $t(t,e,n,s){if(G(t)){const r=Hn(t,e,n,s);return r&&am(r)&&r.catch(o=>{il(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push($t(t[r],e,n,s));return i}function il(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Hn(l,null,10,[t,o,a]);return}}PE(t,n,i,s)}function PE(t,e,n,s=!0){console.error(t)}let Cr=!1,Wc=!1;const Je=[];let Gt=0;const ci=[];let fn=null,ps=0;const Rm=Promise.resolve();let fh=null;function xm(t){const e=fh||Rm;return t?e.then(this?t.bind(this):t):e}function ME(t){let e=Gt+1,n=Je.length;for(;e<n;){const s=e+n>>>1;Sr(Je[s])<t?e=s+1:n=s}return e}function ph(t){(!Je.length||!Je.includes(t,Cr&&t.allowRecurse?Gt+1:Gt))&&(t.id==null?Je.push(t):Je.splice(ME(t.id),0,t),Nm())}function Nm(){!Cr&&!Wc&&(Wc=!0,fh=Rm.then(Dm))}function LE(t){const e=Je.indexOf(t);e>Gt&&Je.splice(e,1)}function FE(t){$(t)?ci.push(...t):(!fn||!fn.includes(t,t.allowRecurse?ps+1:ps))&&ci.push(t),Nm()}function vf(t,e=Cr?Gt+1:0){for(;e<Je.length;e++){const n=Je[e];n&&n.pre&&(Je.splice(e,1),e--,n())}}function Om(t){if(ci.length){const e=[...new Set(ci)];if(ci.length=0,fn){fn.push(...e);return}for(fn=e,fn.sort((n,s)=>Sr(n)-Sr(s)),ps=0;ps<fn.length;ps++)fn[ps]();fn=null,ps=0}}const Sr=t=>t.id==null?1/0:t.id,UE=(t,e)=>{const n=Sr(t)-Sr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Dm(t){Wc=!1,Cr=!0,Je.sort(UE);const e=Ut;try{for(Gt=0;Gt<Je.length;Gt++){const n=Je[Gt];n&&n.active!==!1&&Hn(n,null,14)}}finally{Gt=0,Je.length=0,Om(),Cr=!1,fh=null,(Je.length||ci.length)&&Dm()}}function $E(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ge;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ge;d&&(i=n.map(p=>Pe(p)?p.trim():p)),h&&(i=n.map(ca))}let a,l=s[a=nc(e)]||s[a=nc(nn(e))];!l&&r&&(l=s[a=nc(Li(e))]),l&&$t(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$t(c,t,6,i)}}function Pm(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=Pm(c,e,!0);u&&(a=!0,ht(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(we(t)&&s.set(t,null),null):($(r)?r.forEach(l=>o[l]=null):ht(o,r),we(t)&&s.set(t,o),o)}function rl(t,e){return!t||!Za(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,Li(e))||te(t,e))}let We=null,Mm=null;function ha(t){const e=We;return We=t,Mm=t&&t.type.__scopeId||null,e}function $n(t,e=We,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Rf(-1);const r=ha(e);let o;try{o=t(...i)}finally{ha(r),s._d&&Rf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function sc(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:y}=t;let b,O;const K=ha(t);try{if(n.shapeFlag&4){const V=i||s;b=Kt(u.call(V,V,h,r,p,d,m)),O=l}else{const V=e;b=Kt(V.length>1?V(r,{attrs:l,slots:a,emit:c}):V(r,null)),O=e.props?l:VE(l)}}catch(V){dr.length=0,il(V,t,1),b=Ee(Yn)}let R=b;if(O&&y!==!1){const V=Object.keys(O),{shapeFlag:fe}=R;V.length&&fe&7&&(o&&V.some(sh)&&(O=BE(O,o)),R=wi(R,O))}return n.dirs&&(R=wi(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),b=R,ha(K),b}const VE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Za(n))&&((e||(e={}))[n]=t[n]);return e},BE=(t,e)=>{const n={};for(const s in t)(!sh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function jE(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?wf(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!rl(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?wf(s,o,c):!0:!!o;return!1}function wf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!rl(n,r))return!0}return!1}function HE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const zE=t=>t.__isSuspense;function WE(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):FE(t)}function qc(t,e){if(Se){let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[t]=e}}function Is(t,e,n=!1){const s=Se||We;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&G(e)?e.call(s.proxy):e}}const xo={};function ic(t,e,n){return Lm(t,e,n)}function Lm(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ge){const a=tE()===(Se==null?void 0:Se.scope)?Se:null;let l,c=!1,u=!1;if(et(t)?(l=()=>t.value,c=ua(t)):li(t)?(l=()=>t,s=!0):$(t)?(u=!0,c=t.some(R=>li(R)||ua(R)),l=()=>t.map(R=>{if(et(R))return R.value;if(li(R))return ms(R);if(G(R))return Hn(R,a,2)})):G(t)?e?l=()=>Hn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),$t(t,a,3,[d])}:l=Ut,e&&s){const R=l;l=()=>ms(R())}let h,d=R=>{h=O.onStop=()=>{Hn(R,a,4)}},p;if(Rr)if(d=Ut,e?n&&$t(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const R=UT();p=R.__watcherHandles||(R.__watcherHandles=[])}else return Ut;let m=u?new Array(t.length).fill(xo):xo;const y=()=>{if(O.active)if(e){const R=O.run();(s||c||(u?R.some((V,fe)=>Ir(V,m[fe])):Ir(R,m)))&&(h&&h(),$t(e,a,3,[R,m===xo?void 0:u&&m[0]===xo?[]:m,d]),m=R)}else O.run()};y.allowRecurse=!!e;let b;i==="sync"?b=y:i==="post"?b=()=>ft(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),b=()=>ph(y));const O=new ah(l,b);e?n?y():m=O.run():i==="post"?ft(O.run.bind(O),a&&a.suspense):O.run();const K=()=>{O.stop(),a&&a.scope&&ih(a.scope.effects,O)};return p&&p.push(K),K}function qE(t,e,n){const s=this.proxy,i=Pe(t)?t.includes(".")?Fm(s,t):()=>s[t]:t.bind(s,s);let r;G(e)?r=e:(r=e.handler,n=e);const o=Se;Ei(this);const a=Lm(i,r.bind(s),n);return o?Ei(o):bs(),a}function Fm(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function ms(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),et(t))ms(t.value,e);else if($(t))for(let n=0;n<t.length;n++)ms(t[n],e);else if(Mi(t)||ai(t))t.forEach(n=>{ms(n,e)});else if(cm(t))for(const n in t)ms(t[n],e);return t}function gh(t){return G(t)?{setup:t,name:t.name}:t}const ur=t=>!!t.type.__asyncLoader,Um=t=>t.type.__isKeepAlive;function KE(t,e){$m(t,"a",e)}function GE(t,e){$m(t,"da",e)}function $m(t,e,n=Se){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ol(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Um(i.parent.vnode)&&QE(s,e,n,i),i=i.parent}}function QE(t,e,n,s){const i=ol(e,t,s,!0);Vm(()=>{ih(s[e],i)},n)}function ol(t,e,n=Se,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Fi(),Ei(n);const a=$t(e,n,t,o);return bs(),Ui(),a});return s?i.unshift(r):i.push(r),r}}const xn=t=>(e,n=Se)=>(!Rr||t==="sp")&&ol(t,(...s)=>e(...s),n),YE=xn("bm"),XE=xn("m"),JE=xn("bu"),ZE=xn("u"),eT=xn("bum"),Vm=xn("um"),tT=xn("sp"),nT=xn("rtg"),sT=xn("rtc");function iT(t,e=Se){ol("ec",t,e)}function rT(t,e){const n=We;if(n===null)return t;const s=cl(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ge]=e[r];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&ms(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function cs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Fi(),$t(l,n,8,[t.el,a,t,e]),Ui())}}const mh="components";function Ef(t,e){return jm(mh,t,!0,e)||t}const Bm=Symbol();function oT(t){return Pe(t)?jm(mh,t,!1)||t:t||Bm}function jm(t,e,n=!0,s=!1){const i=We||Se;if(i){const r=i.type;if(t===mh){const a=MT(r,!1);if(a&&(a===e||a===nn(e)||a===tl(nn(e))))return r}const o=Tf(i[t]||r[t],e)||Tf(i.appContext[t],e);return!o&&s?r:o}}function Tf(t,e){return t&&(t[e]||t[nn(e)]||t[tl(nn(e))])}function _h(t,e,n={},s,i){if(We.isCE||We.parent&&ur(We.parent)&&We.parent.isCE)return e!=="default"&&(n.name=e),Ee("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),Ne();const o=r&&Hm(r(n)),a=kr(bt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Hm(t){return t.some(e=>Zm(e)?!(e.type===Yn||e.type===bt&&!Hm(e.children)):!0)?t:null}const Kc=t=>t?s_(t)?cl(t)||t.proxy:Kc(t.parent):null,hr=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Kc(t.parent),$root:t=>Kc(t.root),$emit:t=>t.emit,$options:t=>yh(t),$forceUpdate:t=>t.f||(t.f=()=>ph(t.update)),$nextTick:t=>t.n||(t.n=xm.bind(t.proxy)),$watch:t=>qE.bind(t)}),rc=(t,e)=>t!==ge&&!t.__isScriptSetup&&te(t,e),aT={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(rc(s,e))return o[e]=1,s[e];if(i!==ge&&te(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&te(c,e))return o[e]=3,r[e];if(n!==ge&&te(n,e))return o[e]=4,n[e];Gc&&(o[e]=0)}}const u=hr[e];let h,d;if(u)return e==="$attrs"&&gt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ge&&te(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,te(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return rc(i,e)?(i[e]=n,!0):s!==ge&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ge&&te(t,o)||rc(e,o)||(a=r[0])&&te(a,o)||te(s,o)||te(hr,o)||te(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Gc=!0;function lT(t){const e=yh(t),n=t.proxy,s=t.ctx;Gc=!1,e.beforeCreate&&If(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:y,deactivated:b,beforeDestroy:O,beforeUnmount:K,destroyed:R,unmounted:V,render:fe,renderTracked:Me,renderTriggered:dt,errorCaptured:Ae,serverPrefetch:Ht,expose:oe,inheritAttrs:It,components:rs,directives:os,filters:Zl}=e;if(c&&cT(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Ie in o){const he=o[Ie];G(he)&&(s[Ie]=he.bind(n))}if(i){const Ie=i.call(n,n);we(Ie)&&(t.data=sl(Ie))}if(Gc=!0,r)for(const Ie in r){const he=r[Ie],as=G(he)?he.bind(n,n):G(he.get)?he.get.bind(n,n):Ut,Io=!G(he)&&G(he.set)?he.set.bind(n):Ut,ls=Yt({get:as,set:Io});Object.defineProperty(s,Ie,{enumerable:!0,configurable:!0,get:()=>ls.value,set:zt=>ls.value=zt})}if(a)for(const Ie in a)zm(a[Ie],s,n,Ie);if(l){const Ie=G(l)?l.call(n):l;Reflect.ownKeys(Ie).forEach(he=>{qc(he,Ie[he])})}u&&If(u,t,"c");function at(Ie,he){$(he)?he.forEach(as=>Ie(as.bind(n))):he&&Ie(he.bind(n))}if(at(YE,h),at(XE,d),at(JE,p),at(ZE,m),at(KE,y),at(GE,b),at(iT,Ae),at(sT,Me),at(nT,dt),at(eT,K),at(Vm,V),at(tT,Ht),$(oe))if(oe.length){const Ie=t.exposed||(t.exposed={});oe.forEach(he=>{Object.defineProperty(Ie,he,{get:()=>n[he],set:as=>n[he]=as})})}else t.exposed||(t.exposed={});fe&&t.render===Ut&&(t.render=fe),It!=null&&(t.inheritAttrs=It),rs&&(t.components=rs),os&&(t.directives=os)}function cT(t,e,n=Ut,s=!1){$(t)&&(t=Qc(t));for(const i in t){const r=t[i];let o;we(r)?"default"in r?o=Is(r.from||i,r.default,!0):o=Is(r.from||i):o=Is(r),et(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function If(t,e,n){$t($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function zm(t,e,n,s){const i=s.includes(".")?Fm(n,s):()=>n[s];if(Pe(t)){const r=e[t];G(r)&&ic(i,r)}else if(G(t))ic(i,t.bind(n));else if(we(t))if($(t))t.forEach(r=>zm(r,e,n,s));else{const r=G(t.handler)?t.handler.bind(n):e[t.handler];G(r)&&ic(i,r,t)}}function yh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>da(l,c,o,!0)),da(l,e,o)),we(e)&&r.set(e,l),l}function da(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&da(t,r,n,!0),i&&i.forEach(o=>da(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=uT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const uT={data:bf,props:hs,emits:hs,methods:hs,computed:hs,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:hs,directives:hs,watch:dT,provide:bf,inject:hT};function bf(t,e){return e?t?function(){return ht(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function hT(t,e){return hs(Qc(t),Qc(e))}function Qc(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function hs(t,e){return t?ht(ht(Object.create(null),t),e):e}function dT(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const s in e)n[s]=lt(t[s],e[s]);return n}function fT(t,e,n,s=!1){const i={},r={};la(r,ll,1),t.propsDefaults=Object.create(null),Wm(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:kE(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function pT(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=re(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(rl(t.emitsOptions,d))continue;const p=e[d];if(l)if(te(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const m=nn(d);i[m]=Yc(l,a,m,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Wm(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!te(e,h)&&((u=Li(h))===h||!te(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Yc(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!te(e,h))&&(delete r[h],c=!0)}c&&In(t,"set","$attrs")}function Wm(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Qo(l))continue;const c=e[l];let u;i&&te(i,u=nn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:rl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=re(n),c=a||ge;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Yc(i,l,h,c[h],t,!te(c,h))}}return o}function Yc(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&G(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Ei(i),s=c[n]=l.call(null,e),bs())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Li(n))&&(s=!0))}return s}function qm(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!G(t)){const u=h=>{l=!0;const[d,p]=qm(h,e,!0);ht(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return we(t)&&s.set(t,oi),oi;if($(r))for(let u=0;u<r.length;u++){const h=nn(r[u]);Cf(h)&&(o[h]=ge)}else if(r)for(const u in r){const h=nn(u);if(Cf(h)){const d=r[u],p=o[h]=$(d)||G(d)?{type:d}:Object.assign({},d);if(p){const m=kf(Boolean,p.type),y=kf(String,p.type);p[0]=m>-1,p[1]=y<0||m<y,(m>-1||te(p,"default"))&&a.push(h)}}}const c=[o,a];return we(t)&&s.set(t,c),c}function Cf(t){return t[0]!=="$"}function Sf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Af(t,e){return Sf(t)===Sf(e)}function kf(t,e){return $(e)?e.findIndex(n=>Af(n,t)):G(e)&&Af(e,t)?0:-1}const Km=t=>t[0]==="_"||t==="$stable",vh=t=>$(t)?t.map(Kt):[Kt(t)],gT=(t,e,n)=>{if(e._n)return e;const s=$n((...i)=>vh(e(...i)),n);return s._c=!1,s},Gm=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Km(i))continue;const r=t[i];if(G(r))e[i]=gT(i,r,s);else if(r!=null){const o=vh(r);e[i]=()=>o}}},Qm=(t,e)=>{const n=vh(e);t.slots.default=()=>n},mT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),la(e,"_",n)):Gm(e,t.slots={})}else t.slots={},e&&Qm(t,e);la(t.slots,ll,1)},_T=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ge;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(ht(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Gm(e,i)),o=e}else e&&(Qm(t,e),o={default:1});if(r)for(const a in i)!Km(a)&&!(a in o)&&delete i[a]};function Ym(){return{app:null,config:{isNativeTag:qw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yT=0;function vT(t,e){return function(s,i=null){G(s)||(s=Object.assign({},s)),i!=null&&!we(i)&&(i=null);const r=Ym(),o=new Set;let a=!1;const l=r.app={_uid:yT++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:$T,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Ee(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,cl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Xc(t,e,n,s,i=!1){if($(t)){t.forEach((d,p)=>Xc(d,e&&($(e)?e[p]:e),n,s,i));return}if(ur(s)&&!i)return;const r=s.shapeFlag&4?cl(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ge?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Pe(c)?(u[c]=null,te(h,c)&&(h[c]=null)):et(c)&&(c.value=null)),G(l))Hn(l,a,12,[o,u]);else{const d=Pe(l),p=et(l);if(d||p){const m=()=>{if(t.f){const y=d?te(h,l)?h[l]:u[l]:l.value;i?$(y)&&ih(y,r):$(y)?y.includes(r)||y.push(r):d?(u[l]=[r],te(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,te(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,ft(m,n)):m()}}}const ft=WE;function wT(t){return ET(t)}function ET(t,e){const n=Jw();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Ut,insertStaticContent:m}=t,y=(f,g,_,w=null,v=null,S=null,N=!1,C=null,A=!!g.dynamicChildren)=>{if(f===g)return;f&&!Xi(f,g)&&(w=bo(f),zt(f,v,S,!0),f=null),g.patchFlag===-2&&(A=!1,g.dynamicChildren=null);const{type:E,ref:M,shapeFlag:D}=g;switch(E){case al:b(f,g,_,w);break;case Yn:O(f,g,_,w);break;case Xo:f==null&&K(g,_,w,N);break;case bt:rs(f,g,_,w,v,S,N,C,A);break;default:D&1?fe(f,g,_,w,v,S,N,C,A):D&6?os(f,g,_,w,v,S,N,C,A):(D&64||D&128)&&E.process(f,g,_,w,v,S,N,C,A,Ks)}M!=null&&v&&Xc(M,f&&f.ref,S,g||f,!g)},b=(f,g,_,w)=>{if(f==null)s(g.el=a(g.children),_,w);else{const v=g.el=f.el;g.children!==f.children&&c(v,g.children)}},O=(f,g,_,w)=>{f==null?s(g.el=l(g.children||""),_,w):g.el=f.el},K=(f,g,_,w)=>{[f.el,f.anchor]=m(f.children,g,_,w,f.el,f.anchor)},R=({el:f,anchor:g},_,w)=>{let v;for(;f&&f!==g;)v=d(f),s(f,_,w),f=v;s(g,_,w)},V=({el:f,anchor:g})=>{let _;for(;f&&f!==g;)_=d(f),i(f),f=_;i(g)},fe=(f,g,_,w,v,S,N,C,A)=>{N=N||g.type==="svg",f==null?Me(g,_,w,v,S,N,C,A):Ht(f,g,v,S,N,C,A)},Me=(f,g,_,w,v,S,N,C)=>{let A,E;const{type:M,props:D,shapeFlag:L,transition:z,dirs:Q}=f;if(A=f.el=o(f.type,S,D&&D.is,D),L&8?u(A,f.children):L&16&&Ae(f.children,A,null,w,v,S&&M!=="foreignObject",N,C),Q&&cs(f,null,w,"created"),dt(A,f,f.scopeId,N,w),D){for(const ce in D)ce!=="value"&&!Qo(ce)&&r(A,ce,null,D[ce],S,f.children,w,v,dn);"value"in D&&r(A,"value",null,D.value),(E=D.onVnodeBeforeMount)&&qt(E,w,f)}Q&&cs(f,null,w,"beforeMount");const de=(!v||v&&!v.pendingBranch)&&z&&!z.persisted;de&&z.beforeEnter(A),s(A,g,_),((E=D&&D.onVnodeMounted)||de||Q)&&ft(()=>{E&&qt(E,w,f),de&&z.enter(A),Q&&cs(f,null,w,"mounted")},v)},dt=(f,g,_,w,v)=>{if(_&&p(f,_),w)for(let S=0;S<w.length;S++)p(f,w[S]);if(v){let S=v.subTree;if(g===S){const N=v.vnode;dt(f,N,N.scopeId,N.slotScopeIds,v.parent)}}},Ae=(f,g,_,w,v,S,N,C,A=0)=>{for(let E=A;E<f.length;E++){const M=f[E]=C?Pn(f[E]):Kt(f[E]);y(null,M,g,_,w,v,S,N,C)}},Ht=(f,g,_,w,v,S,N)=>{const C=g.el=f.el;let{patchFlag:A,dynamicChildren:E,dirs:M}=g;A|=f.patchFlag&16;const D=f.props||ge,L=g.props||ge;let z;_&&us(_,!1),(z=L.onVnodeBeforeUpdate)&&qt(z,_,g,f),M&&cs(g,f,_,"beforeUpdate"),_&&us(_,!0);const Q=v&&g.type!=="foreignObject";if(E?oe(f.dynamicChildren,E,C,_,w,Q,S):N||he(f,g,C,null,_,w,Q,S,!1),A>0){if(A&16)It(C,g,D,L,_,w,v);else if(A&2&&D.class!==L.class&&r(C,"class",null,L.class,v),A&4&&r(C,"style",D.style,L.style,v),A&8){const de=g.dynamicProps;for(let ce=0;ce<de.length;ce++){const ke=de[ce],Rt=D[ke],Gs=L[ke];(Gs!==Rt||ke==="value")&&r(C,ke,Rt,Gs,v,f.children,_,w,dn)}}A&1&&f.children!==g.children&&u(C,g.children)}else!N&&E==null&&It(C,g,D,L,_,w,v);((z=L.onVnodeUpdated)||M)&&ft(()=>{z&&qt(z,_,g,f),M&&cs(g,f,_,"updated")},w)},oe=(f,g,_,w,v,S,N)=>{for(let C=0;C<g.length;C++){const A=f[C],E=g[C],M=A.el&&(A.type===bt||!Xi(A,E)||A.shapeFlag&70)?h(A.el):_;y(A,E,M,null,w,v,S,N,!0)}},It=(f,g,_,w,v,S,N)=>{if(_!==w){if(_!==ge)for(const C in _)!Qo(C)&&!(C in w)&&r(f,C,_[C],null,N,g.children,v,S,dn);for(const C in w){if(Qo(C))continue;const A=w[C],E=_[C];A!==E&&C!=="value"&&r(f,C,E,A,N,g.children,v,S,dn)}"value"in w&&r(f,"value",_.value,w.value)}},rs=(f,g,_,w,v,S,N,C,A)=>{const E=g.el=f?f.el:a(""),M=g.anchor=f?f.anchor:a("");let{patchFlag:D,dynamicChildren:L,slotScopeIds:z}=g;z&&(C=C?C.concat(z):z),f==null?(s(E,_,w),s(M,_,w),Ae(g.children,_,M,v,S,N,C,A)):D>0&&D&64&&L&&f.dynamicChildren?(oe(f.dynamicChildren,L,_,v,S,N,C),(g.key!=null||v&&g===v.subTree)&&Xm(f,g,!0)):he(f,g,_,M,v,S,N,C,A)},os=(f,g,_,w,v,S,N,C,A)=>{g.slotScopeIds=C,f==null?g.shapeFlag&512?v.ctx.activate(g,_,w,N,A):Zl(g,_,w,v,S,N,A):sf(f,g,A)},Zl=(f,g,_,w,v,S,N)=>{const C=f.component=xT(f,w,v);if(Um(f)&&(C.ctx.renderer=Ks),NT(C),C.asyncDep){if(v&&v.registerDep(C,at),!f.el){const A=C.subTree=Ee(Yn);O(null,A,g,_)}return}at(C,f,g,_,v,S,N)},sf=(f,g,_)=>{const w=g.component=f.component;if(jE(f,g,_))if(w.asyncDep&&!w.asyncResolved){Ie(w,g,_);return}else w.next=g,LE(w.update),w.update();else g.el=f.el,w.vnode=g},at=(f,g,_,w,v,S,N)=>{const C=()=>{if(f.isMounted){let{next:M,bu:D,u:L,parent:z,vnode:Q}=f,de=M,ce;us(f,!1),M?(M.el=Q.el,Ie(f,M,N)):M=Q,D&&Yo(D),(ce=M.props&&M.props.onVnodeBeforeUpdate)&&qt(ce,z,M,Q),us(f,!0);const ke=sc(f),Rt=f.subTree;f.subTree=ke,y(Rt,ke,h(Rt.el),bo(Rt),f,v,S),M.el=ke.el,de===null&&HE(f,ke.el),L&&ft(L,v),(ce=M.props&&M.props.onVnodeUpdated)&&ft(()=>qt(ce,z,M,Q),v)}else{let M;const{el:D,props:L}=g,{bm:z,m:Q,parent:de}=f,ce=ur(g);if(us(f,!1),z&&Yo(z),!ce&&(M=L&&L.onVnodeBeforeMount)&&qt(M,de,g),us(f,!0),D&&tc){const ke=()=>{f.subTree=sc(f),tc(D,f.subTree,f,v,null)};ce?g.type.__asyncLoader().then(()=>!f.isUnmounted&&ke()):ke()}else{const ke=f.subTree=sc(f);y(null,ke,_,w,f,v,S),g.el=ke.el}if(Q&&ft(Q,v),!ce&&(M=L&&L.onVnodeMounted)){const ke=g;ft(()=>qt(M,de,ke),v)}(g.shapeFlag&256||de&&ur(de.vnode)&&de.vnode.shapeFlag&256)&&f.a&&ft(f.a,v),f.isMounted=!0,g=_=w=null}},A=f.effect=new ah(C,()=>ph(E),f.scope),E=f.update=()=>A.run();E.id=f.uid,us(f,!0),E()},Ie=(f,g,_)=>{g.component=f;const w=f.vnode.props;f.vnode=g,f.next=null,pT(f,g.props,w,_),_T(f,g.children,_),Fi(),vf(),Ui()},he=(f,g,_,w,v,S,N,C,A=!1)=>{const E=f&&f.children,M=f?f.shapeFlag:0,D=g.children,{patchFlag:L,shapeFlag:z}=g;if(L>0){if(L&128){Io(E,D,_,w,v,S,N,C,A);return}else if(L&256){as(E,D,_,w,v,S,N,C,A);return}}z&8?(M&16&&dn(E,v,S),D!==E&&u(_,D)):M&16?z&16?Io(E,D,_,w,v,S,N,C,A):dn(E,v,S,!0):(M&8&&u(_,""),z&16&&Ae(D,_,w,v,S,N,C,A))},as=(f,g,_,w,v,S,N,C,A)=>{f=f||oi,g=g||oi;const E=f.length,M=g.length,D=Math.min(E,M);let L;for(L=0;L<D;L++){const z=g[L]=A?Pn(g[L]):Kt(g[L]);y(f[L],z,_,null,v,S,N,C,A)}E>M?dn(f,v,S,!0,!1,D):Ae(g,_,w,v,S,N,C,A,D)},Io=(f,g,_,w,v,S,N,C,A)=>{let E=0;const M=g.length;let D=f.length-1,L=M-1;for(;E<=D&&E<=L;){const z=f[E],Q=g[E]=A?Pn(g[E]):Kt(g[E]);if(Xi(z,Q))y(z,Q,_,null,v,S,N,C,A);else break;E++}for(;E<=D&&E<=L;){const z=f[D],Q=g[L]=A?Pn(g[L]):Kt(g[L]);if(Xi(z,Q))y(z,Q,_,null,v,S,N,C,A);else break;D--,L--}if(E>D){if(E<=L){const z=L+1,Q=z<M?g[z].el:w;for(;E<=L;)y(null,g[E]=A?Pn(g[E]):Kt(g[E]),_,Q,v,S,N,C,A),E++}}else if(E>L)for(;E<=D;)zt(f[E],v,S,!0),E++;else{const z=E,Q=E,de=new Map;for(E=Q;E<=L;E++){const _t=g[E]=A?Pn(g[E]):Kt(g[E]);_t.key!=null&&de.set(_t.key,E)}let ce,ke=0;const Rt=L-Q+1;let Gs=!1,af=0;const Yi=new Array(Rt);for(E=0;E<Rt;E++)Yi[E]=0;for(E=z;E<=D;E++){const _t=f[E];if(ke>=Rt){zt(_t,v,S,!0);continue}let Wt;if(_t.key!=null)Wt=de.get(_t.key);else for(ce=Q;ce<=L;ce++)if(Yi[ce-Q]===0&&Xi(_t,g[ce])){Wt=ce;break}Wt===void 0?zt(_t,v,S,!0):(Yi[Wt-Q]=E+1,Wt>=af?af=Wt:Gs=!0,y(_t,g[Wt],_,null,v,S,N,C,A),ke++)}const lf=Gs?TT(Yi):oi;for(ce=lf.length-1,E=Rt-1;E>=0;E--){const _t=Q+E,Wt=g[_t],cf=_t+1<M?g[_t+1].el:w;Yi[E]===0?y(null,Wt,_,cf,v,S,N,C,A):Gs&&(ce<0||E!==lf[ce]?ls(Wt,_,cf,2):ce--)}}},ls=(f,g,_,w,v=null)=>{const{el:S,type:N,transition:C,children:A,shapeFlag:E}=f;if(E&6){ls(f.component.subTree,g,_,w);return}if(E&128){f.suspense.move(g,_,w);return}if(E&64){N.move(f,g,_,Ks);return}if(N===bt){s(S,g,_);for(let D=0;D<A.length;D++)ls(A[D],g,_,w);s(f.anchor,g,_);return}if(N===Xo){R(f,g,_);return}if(w!==2&&E&1&&C)if(w===0)C.beforeEnter(S),s(S,g,_),ft(()=>C.enter(S),v);else{const{leave:D,delayLeave:L,afterLeave:z}=C,Q=()=>s(S,g,_),de=()=>{D(S,()=>{Q(),z&&z()})};L?L(S,Q,de):de()}else s(S,g,_)},zt=(f,g,_,w=!1,v=!1)=>{const{type:S,props:N,ref:C,children:A,dynamicChildren:E,shapeFlag:M,patchFlag:D,dirs:L}=f;if(C!=null&&Xc(C,null,_,f,!0),M&256){g.ctx.deactivate(f);return}const z=M&1&&L,Q=!ur(f);let de;if(Q&&(de=N&&N.onVnodeBeforeUnmount)&&qt(de,g,f),M&6)Uw(f.component,_,w);else{if(M&128){f.suspense.unmount(_,w);return}z&&cs(f,null,g,"beforeUnmount"),M&64?f.type.remove(f,g,_,v,Ks,w):E&&(S!==bt||D>0&&D&64)?dn(E,g,_,!1,!0):(S===bt&&D&384||!v&&M&16)&&dn(A,g,_),w&&rf(f)}(Q&&(de=N&&N.onVnodeUnmounted)||z)&&ft(()=>{de&&qt(de,g,f),z&&cs(f,null,g,"unmounted")},_)},rf=f=>{const{type:g,el:_,anchor:w,transition:v}=f;if(g===bt){Fw(_,w);return}if(g===Xo){V(f);return}const S=()=>{i(_),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:N,delayLeave:C}=v,A=()=>N(_,S);C?C(f.el,S,A):A()}else S()},Fw=(f,g)=>{let _;for(;f!==g;)_=d(f),i(f),f=_;i(g)},Uw=(f,g,_)=>{const{bum:w,scope:v,update:S,subTree:N,um:C}=f;w&&Yo(w),v.stop(),S&&(S.active=!1,zt(N,f,g,_)),C&&ft(C,g),ft(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},dn=(f,g,_,w=!1,v=!1,S=0)=>{for(let N=S;N<f.length;N++)zt(f[N],g,_,w,v)},bo=f=>f.shapeFlag&6?bo(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),of=(f,g,_)=>{f==null?g._vnode&&zt(g._vnode,null,null,!0):y(g._vnode||null,f,g,null,null,null,_),vf(),Om(),g._vnode=f},Ks={p:y,um:zt,m:ls,r:rf,mt:Zl,mc:Ae,pc:he,pbc:oe,n:bo,o:t};let ec,tc;return e&&([ec,tc]=e(Ks)),{render:of,hydrate:ec,createApp:vT(of,ec)}}function us({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Xm(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Pn(i[r]),a.el=o.el),n||Xm(o,a)),a.type===al&&(a.el=o.el)}}function TT(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const IT=t=>t.__isTeleport,bt=Symbol(void 0),al=Symbol(void 0),Yn=Symbol(void 0),Xo=Symbol(void 0),dr=[];let Pt=null;function Ne(t=!1){dr.push(Pt=t?null:[])}function bT(){dr.pop(),Pt=dr[dr.length-1]||null}let Ar=1;function Rf(t){Ar+=t}function Jm(t){return t.dynamicChildren=Ar>0?Pt||oi:null,bT(),Ar>0&&Pt&&Pt.push(t),t}function ct(t,e,n,s,i,r){return Jm(ie(t,e,n,s,i,r,!0))}function kr(t,e,n,s,i){return Jm(Ee(t,e,n,s,i,!0))}function Zm(t){return t?t.__v_isVNode===!0:!1}function Xi(t,e){return t.type===e.type&&t.key===e.key}const ll="__vInternal",e_=({key:t})=>t??null,Jo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Pe(t)||et(t)||G(t)?{i:We,r:t,k:e,f:!!n}:t:null;function ie(t,e=null,n=null,s=0,i=null,r=t===bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&e_(e),ref:e&&Jo(e),scopeId:Mm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:We};return a?(wh(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Pe(n)?8:16),Ar>0&&!o&&Pt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Pt.push(l),l}const Ee=CT;function CT(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Bm)&&(t=Yn),Zm(t)){const a=wi(t,e,!0);return n&&wh(a,n),Ar>0&&!r&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(LT(t)&&(t=t.__vccOpts),e){e=ST(e);let{class:a,style:l}=e;a&&!Pe(a)&&(e.class=Ja(a)),we(l)&&(Tm(l)&&!$(l)&&(l=ht({},l)),e.style=th(l))}const o=Pe(t)?1:zE(t)?128:IT(t)?64:we(t)?4:G(t)?2:0;return ie(t,e,n,s,i,o,r,!0)}function ST(t){return t?Tm(t)||ll in t?ht({},t):t:null}function wi(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?t_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&e_(a),ref:e&&e.ref?n&&i?$(i)?i.concat(Jo(e)):[i,Jo(e)]:Jo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wi(t.ssContent),ssFallback:t.ssFallback&&wi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Jc(t=" ",e=0){return Ee(al,null,t,e)}function AT(t,e){const n=Ee(Xo,null,t);return n.staticCount=e,n}function zn(t="",e=!1){return e?(Ne(),kr(Yn,null,t)):Ee(Yn,null,t)}function Kt(t){return t==null||typeof t=="boolean"?Ee(Yn):$(t)?Ee(bt,null,t.slice()):typeof t=="object"?Pn(t):Ee(al,null,String(t))}function Pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:wi(t)}function wh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),wh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ll in e)?e._ctx=We:i===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[Jc(e)]):n=8);t.children=e,t.shapeFlag|=n}function t_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ja([e.class,s.class]));else if(i==="style")e.style=th([e.style,s.style]);else if(Za(i)){const r=e[i],o=s[i];o&&r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function qt(t,e,n,s=null){$t(t,e,7,[n,s])}const kT=Ym();let RT=0;function xT(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||kT,r={uid:RT++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new um(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qm(s,i),emitsOptions:Pm(s,i),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:s.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=$E.bind(null,r),t.ce&&t.ce(r),r}let Se=null;const n_=()=>Se||We,Ei=t=>{Se=t,t.scope.on()},bs=()=>{Se&&Se.scope.off(),Se=null};function s_(t){return t.vnode.shapeFlag&4}let Rr=!1;function NT(t,e=!1){Rr=e;const{props:n,children:s}=t.vnode,i=s_(t);fT(t,n,i,e),mT(t,s);const r=i?OT(t,e):void 0;return Rr=!1,r}function OT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Im(new Proxy(t.ctx,aT));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?PT(t):null;Ei(t),Fi();const r=Hn(s,t,0,[t.props,i]);if(Ui(),bs(),am(r)){if(r.then(bs,bs),e)return r.then(o=>{xf(t,o,e)}).catch(o=>{il(o,t,0)});t.asyncDep=r}else xf(t,r,e)}else i_(t,e)}function xf(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=Am(e)),i_(t,n)}let Nf;function i_(t,e,n){const s=t.type;if(!t.render){if(!e&&Nf&&!s.render){const i=s.template||yh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=ht(ht({isCustomElement:r,delimiters:a},o),l);s.render=Nf(i,c)}}t.render=s.render||Ut}Ei(t),Fi(),lT(t),Ui(),bs()}function DT(t){return new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}})}function PT(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=DT(t))},slots:t.slots,emit:t.emit,expose:e}}function cl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Am(Im(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hr)return hr[n](t)},has(e,n){return n in e||n in hr}}))}function MT(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function LT(t){return G(t)&&"__vccOpts"in t}const Yt=(t,e)=>DE(t,e,Rr),FT=Symbol(""),UT=()=>Is(FT),$T="3.2.47",VT="http://www.w3.org/2000/svg",gs=typeof document<"u"?document:null,Of=gs&&gs.createElement("template"),BT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?gs.createElementNS(VT,t):gs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>gs.createTextNode(t),createComment:t=>gs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Of.innerHTML=s?`<svg>${t}</svg>`:t;const a=Of.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function jT(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function HT(t,e,n){const s=t.style,i=Pe(n);if(n&&!i){if(e&&!Pe(e))for(const r in e)n[r]==null&&Zc(s,r,"");for(const r in n)Zc(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Df=/\s*!important$/;function Zc(t,e,n){if($(n))n.forEach(s=>Zc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=zT(t,e);Df.test(n)?t.setProperty(Li(s),n.replace(Df,""),"important"):t[s]=n}}const Pf=["Webkit","Moz","ms"],oc={};function zT(t,e){const n=oc[e];if(n)return n;let s=nn(e);if(s!=="filter"&&s in t)return oc[e]=s;s=tl(s);for(let i=0;i<Pf.length;i++){const r=Pf[i]+s;if(r in t)return oc[e]=r}return e}const Mf="http://www.w3.org/1999/xlink";function WT(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mf,e.slice(6,e.length)):t.setAttributeNS(Mf,e,n);else{const r=zw(e);n==null||r&&!rm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function qT(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=rm(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function gn(t,e,n,s){t.addEventListener(e,n,s)}function KT(t,e,n,s){t.removeEventListener(e,n,s)}function GT(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=QT(e);if(s){const c=r[e]=JT(s,i);gn(t,a,c,l)}else o&&(KT(t,a,o,l),r[e]=void 0)}}const Lf=/(?:Once|Passive|Capture)$/;function QT(t){let e;if(Lf.test(t)){e={};let s;for(;s=t.match(Lf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Li(t.slice(2)),e]}let ac=0;const YT=Promise.resolve(),XT=()=>ac||(YT.then(()=>ac=0),ac=Date.now());function JT(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;$t(ZT(s,n.value),e,5,[s])};return n.value=t,n.attached=XT(),n}function ZT(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ff=/^on[a-z]/,eI=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?jT(t,s,i):e==="style"?HT(t,n,s):Za(e)?sh(e)||GT(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tI(t,e,s,i))?qT(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),WT(t,e,s,i))};function tI(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ff.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ff.test(e)&&Pe(n)?!1:e in t}const Xn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>Yo(e,n):e};function nI(t){t.target.composing=!0}function Uf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $f={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Xn(i);const r=s||i.props&&i.props.type==="number";gn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=ca(a)),t._assign(a)}),n&&gn(t,"change",()=>{t.value=t.value.trim()}),e||(gn(t,"compositionstart",nI),gn(t,"compositionend",Uf),gn(t,"change",Uf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Xn(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&ca(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},sI={deep:!0,created(t,e,n){t._assign=Xn(n),gn(t,"change",()=>{const s=t._modelValue,i=Ti(t),r=t.checked,o=t._assign;if($(s)){const a=nh(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Mi(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(r_(t,r))})},mounted:Vf,beforeUpdate(t,e,n){t._assign=Xn(n),Vf(t,e,n)}};function Vf(t,{value:e,oldValue:n},s){t._modelValue=e,$(e)?t.checked=nh(e,s.props.value)>-1:Mi(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Rs(e,r_(t,!0)))}const iI={created(t,{value:e},n){t.checked=Rs(e,n.props.value),t._assign=Xn(n),gn(t,"change",()=>{t._assign(Ti(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Xn(s),e!==n&&(t.checked=Rs(e,s.props.value))}},rI={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Mi(e);gn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ca(Ti(o)):Ti(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=Xn(s)},mounted(t,{value:e}){Bf(t,e)},beforeUpdate(t,e,n){t._assign=Xn(n)},updated(t,{value:e}){Bf(t,e)}};function Bf(t,e){const n=t.multiple;if(!(n&&!$(e)&&!Mi(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=Ti(r);if(n)$(e)?r.selected=nh(e,o)>-1:r.selected=e.has(o);else if(Rs(Ti(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ti(t){return"_value"in t?t._value:t.value}function r_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const oI={created(t,e,n){No(t,e,n,null,"created")},mounted(t,e,n){No(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){No(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){No(t,e,n,s,"updated")}};function aI(t,e){switch(t){case"SELECT":return rI;case"TEXTAREA":return $f;default:switch(e){case"checkbox":return sI;case"radio":return iI;default:return $f}}}function No(t,e,n,s,i){const o=aI(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}const lI=["ctrl","shift","alt","meta"],cI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>lI.some(n=>t[`${n}Key`]&&!e.includes(n))},uI=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=cI[e[i]];if(r&&r(n,e))return}return t(n,...s)},hI=ht({patchProp:eI},BT);let jf;function dI(){return jf||(jf=wT(hI))}const fI=(...t)=>{const e=dI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=pI(s);if(!i)return;const r=e._component;!G(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function pI(t){return Pe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw $i(e)},$i=function(t){return new Error("Firebase Database ("+o_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(a_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new mI;const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l_=function(t){const e=a_(t);return ul.encodeByteArray(e,!0)},fa=function(t){return l_(t).replace(/\./g,"")},pa=function(t){try{return ul.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t){return c_(void 0,t)}function c_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!yI(n)||(t[n]=c_(t[n],e[n]));return t}function yI(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=()=>vI().__FIREBASE_DEFAULTS__,EI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pa(t[1]);return e&&JSON.parse(e)},Eh=()=>{try{return wI()||EI()||TI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},u_=t=>{var e,n;return(n=(e=Eh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},II=t=>{const e=u_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},bI=()=>{var t;return(t=Eh())===null||t===void 0?void 0:t.config},h_=t=>{var e;return(e=Eh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[fa(JSON.stringify(n)),fa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Th(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function SI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function d_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AI(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function f_(){return o_.NODE_ADMIN===!0}function p_(){try{return typeof indexedDB=="object"}catch{return!1}}function kI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI="FirebaseError";class un extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=RI,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vi.prototype.create)}}class Vi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?xI(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new un(i,a,s)}}function xI(t,e){return t.replace(NI,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const NI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t){return JSON.parse(t)}function ze(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Nr(pa(r[0])||""),n=Nr(pa(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},OI=function(t){const e=g_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},DI=function(t){const e=g_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function eu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ga(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ma(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Hf(r)&&Hf(o)){if(!ma(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Hf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function MI(t,e){const n=new LI(t,e);return n.subscribe.bind(n)}class LI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");FI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=lc),i.error===void 0&&(i.error=lc),i.complete===void 0&&(i.complete=lc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lc(){}function UI(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,k(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){return t&&t._delegate?t._delegate:t}class Bt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new xr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jI(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:BI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BI(t){return t===ds?void 0:t}function jI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const zI={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},WI=ne.INFO,qI={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},KI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=qI[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xr{constructor(e){this.name=e,this._logLevel=WI,this._logHandler=KI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const GI=(t,e)=>e.some(n=>t instanceof n);let zf,Wf;function QI(){return zf||(zf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YI(){return Wf||(Wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m_=new WeakMap,tu=new WeakMap,__=new WeakMap,cc=new WeakMap,Ih=new WeakMap;function XI(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Wn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&m_.set(n,t)}).catch(()=>{}),Ih.set(e,t),e}function JI(t){if(tu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});tu.set(t,e)}let nu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||__.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZI(t){nu=t(nu)}function eb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(uc(this),e,...n);return __.set(s,e.sort?e.sort():[e]),Wn(s)}:YI().includes(t)?function(...e){return t.apply(uc(this),e),Wn(m_.get(this))}:function(...e){return Wn(t.apply(uc(this),e))}}function tb(t){return typeof t=="function"?eb(t):(t instanceof IDBTransaction&&JI(t),GI(t,QI())?new Proxy(t,nu):t)}function Wn(t){if(t instanceof IDBRequest)return XI(t);if(cc.has(t))return cc.get(t);const e=tb(t);return e!==t&&(cc.set(t,e),Ih.set(e,t)),e}const uc=t=>Ih.get(t);function nb(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Wn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Wn(o.result),l.oldVersion,l.newVersion,Wn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const sb=["get","getKey","getAll","getAllKeys","count"],ib=["put","add","delete","clear"],hc=new Map;function qf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hc.get(e))return hc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ib.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||sb.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return hc.set(e,r),r}ZI(t=>({...t,get:(e,n,s)=>qf(e,n)||t.get(e,n,s),has:(e,n)=>!!qf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ob(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ob(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const su="@firebase/app",Kf="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new Xr("@firebase/app"),ab="@firebase/app-compat",lb="@firebase/analytics-compat",cb="@firebase/analytics",ub="@firebase/app-check-compat",hb="@firebase/app-check",db="@firebase/auth",fb="@firebase/auth-compat",pb="@firebase/database",gb="@firebase/database-compat",mb="@firebase/functions",_b="@firebase/functions-compat",yb="@firebase/installations",vb="@firebase/installations-compat",wb="@firebase/messaging",Eb="@firebase/messaging-compat",Tb="@firebase/performance",Ib="@firebase/performance-compat",bb="@firebase/remote-config",Cb="@firebase/remote-config-compat",Sb="@firebase/storage",Ab="@firebase/storage-compat",kb="@firebase/firestore",Rb="@firebase/firestore-compat",xb="firebase",Nb="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="[DEFAULT]",Ob={[su]:"fire-core",[ab]:"fire-core-compat",[cb]:"fire-analytics",[lb]:"fire-analytics-compat",[hb]:"fire-app-check",[ub]:"fire-app-check-compat",[db]:"fire-auth",[fb]:"fire-auth-compat",[pb]:"fire-rtdb",[gb]:"fire-rtdb-compat",[mb]:"fire-fn",[_b]:"fire-fn-compat",[yb]:"fire-iid",[vb]:"fire-iid-compat",[wb]:"fire-fcm",[Eb]:"fire-fcm-compat",[Tb]:"fire-perf",[Ib]:"fire-perf-compat",[bb]:"fire-rc",[Cb]:"fire-rc-compat",[Sb]:"fire-gcs",[Ab]:"fire-gcs-compat",[kb]:"fire-fst",[Rb]:"fire-fst-compat","fire-js":"fire-js",[xb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new Map,ru=new Map;function Db(t,e){try{t.container.addComponent(e)}catch(n){xs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sn(t){const e=t.name;if(ru.has(e))return xs.debug(`There were multiple attempts to register component ${e}.`),!1;ru.set(e,t);for(const n of _a.values())Db(n,t);return!0}function bh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qn=new Vi("app","Firebase",Pb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=Nb;function y_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:iu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw qn.create("bad-app-name",{appName:String(i)});if(n||(n=bI()),!n)throw qn.create("no-options");const r=_a.get(i);if(r){if(ma(n,r.options)&&ma(s,r.config))return r;throw qn.create("duplicate-app",{appName:i})}const o=new HI(i);for(const l of ru.values())o.addComponent(l);const a=new Mb(n,s,o);return _a.set(i,a),a}function Ch(t=iu){const e=_a.get(t);if(!e&&t===iu)return y_();if(!e)throw qn.create("no-app",{appName:t});return e}function wt(t,e,n){var s;let i=(s=Ob[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xs.warn(a.join(" "));return}sn(new Bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb="firebase-heartbeat-database",Fb=1,Or="firebase-heartbeat-store";let dc=null;function v_(){return dc||(dc=nb(Lb,Fb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Or)}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),dc}async function Ub(t){try{return(await v_()).transaction(Or).objectStore(Or).get(w_(t))}catch(e){if(e instanceof un)xs.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xs.warn(n.message)}}}async function Gf(t,e){try{const s=(await v_()).transaction(Or,"readwrite");return await s.objectStore(Or).put(e,w_(t)),s.done}catch(n){if(n instanceof un)xs.warn(n.message);else{const s=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xs.warn(s.message)}}}function w_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=1024,Vb=30*24*60*60*1e3;class Bb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Vb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qf(),{heartbeatsToSend:n,unsentEntries:s}=jb(this._heartbeatsCache.heartbeats),i=fa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Qf(){return new Date().toISOString().substring(0,10)}function jb(t,e=$b){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Yf(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Hb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return p_()?kI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ub(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yf(t){return fa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t){sn(new Bt("platform-logger",e=>new rb(e),"PRIVATE")),sn(new Bt("heartbeat",e=>new Bb(e),"PRIVATE")),wt(su,Kf,t),wt(su,Kf,"esm2017"),wt("fire-js","")}zb("");function Sh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function E_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wb=E_,T_=new Vi("auth","Firebase",E_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new Xr("@firebase/auth");function qb(t,...e){ya.logLevel<=ne.WARN&&ya.warn(`Auth (${ns}): ${t}`,...e)}function Zo(t,...e){ya.logLevel<=ne.ERROR&&ya.error(`Auth (${ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,...e){throw Ah(t,...e)}function Zt(t,...e){return Ah(t,...e)}function Kb(t,e,n){const s=Object.assign(Object.assign({},Wb()),{[e]:n});return new Vi("auth","Firebase",s).create(e,{appName:t.name})}function Ah(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return T_.create(t,...e)}function B(t,e,...n){if(!t)throw Ah(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zo(e),new Error(e)}function Cn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Gb(){return Xf()==="http:"||Xf()==="https:"}function Xf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gb()||SI()||"connection"in navigator)?navigator.onLine:!0}function Yb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=Th()||d_()}get(){return Qb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=new Jr(3e4,6e4);function b_(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zr(t,e,n,s,i={}){return C_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Bi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),I_.fetch()(S_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function C_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Xb),e);try{const i=new eC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Oo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Oo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Oo(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Kb(t,u,c);bn(t,u)}}catch(i){if(i instanceof un)throw i;bn(t,"network-request-failed",{message:String(i)})}}async function Zb(t,e,n,s,i={}){const r=await Zr(t,e,n,s,i);return"mfaPendingCredential"in r&&bn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function S_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?kh(t.config,i):`${t.config.apiScheme}://${i}`}class eC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Zt(this.auth,"network-request-failed")),Jb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Zt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(t,e){return Zr(t,"POST","/v1/accounts:delete",e)}async function nC(t,e){return Zr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sC(t,e=!1){const n=mt(t),s=await n.getIdToken(e),i=Rh(s);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:fr(fc(i.auth_time)),issuedAtTime:fr(fc(i.iat)),expirationTime:fr(fc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function fc(t){return Number(t)*1e3}function Rh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Zo("JWT malformed, contained fewer than 3 sections"),null;try{const i=pa(n);return i?JSON.parse(i):(Zo("Failed to decode base64 JWT payload"),null)}catch(i){return Zo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function iC(t){const e=Rh(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof un&&rC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function rC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fr(this.lastLoginAt),this.creationTime=fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Dr(t,nC(n,{idToken:s}));B(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?cC(r.providerUserInfo):[],a=lC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new A_(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function aC(t){const e=mt(t);await va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lC(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function cC(t){return t.map(e=>{var{providerId:n}=e,s=Sh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(t,e){const n=await C_(t,{},async()=>{const s=Bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=S_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",I_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await uC(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Pr;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(B(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pr,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Sh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new A_(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Dr(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sC(this,e)}reload(){return aC(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await va(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dr(this,tC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,O=(c=n.createdAt)!==null&&c!==void 0?c:void 0,K=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:V,isAnonymous:fe,providerData:Me,stsTokenManager:dt}=n;B(R&&dt,e,"internal-error");const Ae=Pr.fromJSON(this.name,dt);B(typeof R=="string",e,"internal-error"),Dn(h,e.name),Dn(d,e.name),B(typeof V=="boolean",e,"internal-error"),B(typeof fe=="boolean",e,"internal-error"),Dn(p,e.name),Dn(m,e.name),Dn(y,e.name),Dn(b,e.name),Dn(O,e.name),Dn(K,e.name);const Ht=new Cs({uid:R,auth:e,email:d,emailVerified:V,displayName:h,isAnonymous:fe,photoURL:m,phoneNumber:p,tenantId:y,stsTokenManager:Ae,createdAt:O,lastLoginAt:K});return Me&&Array.isArray(Me)&&(Ht.providerData=Me.map(oe=>Object.assign({},oe))),b&&(Ht._redirectEventId=b),Ht}static async _fromIdTokenResponse(e,n,s=!1){const i=new Pr;i.updateFromServerResponse(n);const r=new Cs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await va(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=new Map;function _n(t){Cn(t instanceof Function,"Expected a class definition");let e=Jf.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}k_.type="NONE";const Zf=k_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ea(this.userKey,i.apiKey,r),this.fullPersistenceKey=ea("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ui(_n(Zf),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||_n(Zf);const o=ea(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Cs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ui(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ui(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(N_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(R_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(D_(e))return"Blackberry";if(P_(e))return"Webos";if(xh(e))return"Safari";if((e.includes("chrome/")||x_(e))&&!e.includes("edge/"))return"Chrome";if(O_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function R_(t=rt()){return/firefox\//i.test(t)}function xh(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function x_(t=rt()){return/crios\//i.test(t)}function N_(t=rt()){return/iemobile/i.test(t)}function O_(t=rt()){return/android/i.test(t)}function D_(t=rt()){return/blackberry/i.test(t)}function P_(t=rt()){return/webos/i.test(t)}function dl(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hC(t=rt()){var e;return dl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dC(){return AI()&&document.documentMode===10}function M_(t=rt()){return dl(t)||O_(t)||P_(t)||D_(t)||/windows phone/i.test(t)||N_(t)}function fC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t,e=[]){let n;switch(t){case"Browser":n=ep(rt());break;case"Worker":n=`${ep(rt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ns}/${s}`}async function F_(t,e){return Zr(t,"GET","/v2/recaptchaConfig",b_(t,e))}function tp(t){return t!==void 0&&t.enterprise!==void 0}class U_{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $_(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Zt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",pC().appendChild(s)})}function gC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const mC="https://www.google.com/recaptcha/enterprise.js?render=",_C="recaptcha-enterprise",yC="NO_RECAPTCHA";class vC{constructor(e){this.type=_C,this.auth=fl(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{F_(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new U_(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;tp(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(yC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&tp(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}$_(mC+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new np(this),this.idTokenSubscription=new np(this),this.beforeStateQueue=new wC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await va(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}async initializeRecaptchaConfig(){const e=await F_(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new U_(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new vC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=L_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fl(t){return mt(t)}class np{constructor(e){this.auth=e,this.observer=null,this.addObserver=MI(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t,e){const n=bh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ma(r,e??{}))return i;bn(i,"already-initialized")}return n.initialize({options:e})}function IC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function bC(t,e,n){const s=fl(t);B(s._canInitEmulator,s,"emulator-config-failed"),B(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=V_(e),{host:o,port:a}=CC(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||SC()}function V_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CC(t){const e=V_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:sp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:sp(o)}}}function sp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e){return Zb(t,"POST","/v1/accounts:signInWithIdp",b_(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC="http://localhost";class Ns extends B_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Sh(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ns(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,hi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hi(e,n)}buildRequest(){const e={requestUri:AC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends j_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends eo{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ns._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ln.credential(n,s)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends eo{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends eo{constructor(){super("twitter.com")}static credential(e,n){return Ns._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Un.credential(n,s)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Cs._fromIdTokenResponse(e,s,i),o=ip(s);return new bi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=ip(s);return new bi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function ip(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends un{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,wa.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new wa(e,n,s,i)}}function H_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?wa._fromErrorAndOperation(t,r,e,s):r})}async function kC(t,e,n=!1){const s=await Dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bi._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Dr(t,H_(s,i,e,t),n);B(r.idToken,s,"internal-error");const o=Rh(r.idToken);B(o,s,"internal-error");const{sub:a}=o;return B(t.uid===a,s,"user-mismatch"),bi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&bn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(t,e,n=!1){const s="signIn",i=await H_(t,s,e),r=await bi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function z_(t,e,n,s){return mt(t).onIdTokenChanged(e,n,s)}function NC(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}const Ea="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ea,"1"),this.storage.removeItem(Ea),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(){const t=rt();return xh(t)||dl(t)}const DC=1e3,PC=10;class q_ extends W_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=OC()&&fC(),this.fallbackToPolling=M_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);dC()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PC):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},DC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}q_.type="LOCAL";const MC=q_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_ extends W_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}K_.type="SESSION";const G_=K_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new pl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await LC(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Nh("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function UC(t){en().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function $C(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BC(){return Q_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="firebaseLocalStorageDb",jC=1,Ta="firebaseLocalStorage",X_="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gl(t,e){return t.transaction([Ta],e?"readwrite":"readonly").objectStore(Ta)}function HC(){const t=indexedDB.deleteDatabase(Y_);return new to(t).toPromise()}function au(){const t=indexedDB.open(Y_,jC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ta,{keyPath:X_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ta)?e(s):(s.close(),await HC(),e(await au()))})})}async function rp(t,e,n){const s=gl(t,!0).put({[X_]:e,value:n});return new to(s).toPromise()}async function zC(t,e){const n=gl(t,!1).get(e),s=await new to(n).toPromise();return s===void 0?null:s.value}function op(t,e){const n=gl(t,!0).delete(e);return new to(n).toPromise()}const WC=800,qC=3;class J_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await au(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>qC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Q_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pl._getInstance(BC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $C(),!this.activeServiceWorker)return;this.sender=new FC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await au();return await rp(e,Ea,"1"),await op(e,Ea),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>rp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>zC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>op(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=gl(i,!1).getAll();return new to(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}J_.type="LOCAL";const KC=J_;new Jr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t,e){return e?_n(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh extends B_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QC(t){return xC(t.auth,new Oh(t),t.bypassAuthState)}function YC(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),RC(n,new Oh(t),t.bypassAuthState)}async function XC(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),kC(n,new Oh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QC;case"linkViaPopup":case"linkViaRedirect":return XC;case"reauthViaPopup":case"reauthViaRedirect":return YC;default:bn(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=new Jr(2e3,1e4);class ei extends Z_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ei.currentPopupAction&&ei.currentPopupAction.cancel(),ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Nh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JC.get())};e()}}ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="pendingRedirect",ta=new Map;class eS extends Z_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ta.get(this.auth._key());if(!e){try{const s=await tS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ta.set(this.auth._key(),e)}return this.bypassAuthState||ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tS(t,e){const n=iS(e),s=sS(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function nS(t,e){ta.set(t._key(),e)}function sS(t){return _n(t._redirectPersistence)}function iS(t){return ea(ZC,t.config.apiKey,t.name)}async function rS(t,e,n=!1){const s=fl(t),i=GC(s,e),o=await new eS(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=10*60*1e3;class aS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ey(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oS&&this.cachedEventUids.clear(),this.cachedEventUids.has(ap(e))}saveEventToCache(e){this.cachedEventUids.add(ap(e)),this.lastProcessedEventTime=Date.now()}}function ap(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ey({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ey(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cS(t,e={}){return Zr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hS=/^https?/;async function dS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cS(t);for(const n of e)try{if(fS(n))return}catch{}bn(t,"unauthorized-domain")}function fS(t){const e=ou(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!hS.test(n))return!1;if(uS.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=new Jr(3e4,6e4);function lp(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gS(t){return new Promise((e,n)=>{var s,i,r;function o(){lp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lp(),n(Zt(t,"network-request-failed"))},timeout:pS.get()})}if(!((i=(s=en().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=en().gapi)===null||r===void 0)&&r.load)o();else{const a=gC("iframefcb");return en()[a]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},$_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw na=null,e})}let na=null;function mS(t){return na=na||gS(t),na}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=new Jr(5e3,15e3),yS="__/auth/iframe",vS="emulator/auth/iframe",wS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ES=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TS(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kh(e,vS):`https://${t.config.authDomain}/${yS}`,s={apiKey:e.apiKey,appName:t.name,v:ns},i=ES.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Bi(s).slice(1)}`}async function IS(t){const e=await mS(t),n=en().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:TS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wS,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),a=en().setTimeout(()=>{r(o)},_S.get());function l(){en().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CS=500,SS=600,AS="_blank",kS="http://localhost";class cp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RS(t,e,n,s=CS,i=SS){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bS),{width:s.toString(),height:i.toString(),top:r,left:o}),c=rt().toLowerCase();n&&(a=x_(c)?AS:n),R_(c)&&(e=e||kS,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(hC(c)&&a!=="_self")return xS(e||"",a),new cp(null);const h=window.open(e||"",a,u);B(h,t,"popup-blocked");try{h.focus()}catch{}return new cp(h)}function xS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS="__/auth/handler",OS="emulator/auth/handler",DS=encodeURIComponent("fac");async function up(t,e,n,s,i,r){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ns,eventId:i};if(e instanceof j_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof eo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${DS}=${encodeURIComponent(l)}`:"";return`${PS(t)}?${Bi(a).slice(1)}${c}`}function PS({config:t}){return t.emulator?kh(t,OS):`https://${t.authDomain}/${NS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="webStorageSupport";class MS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=G_,this._completeRedirectFn=rS,this._overrideRedirectResult=nS}async _openPopup(e,n,s,i){var r;Cn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await up(e,n,s,ou(),i);return RS(e,o,Nh())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await up(e,n,s,ou(),i);return UC(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Cn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await IS(e),s=new aS(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pc,{type:pc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[pc];o!==void 0&&n(!!o),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return M_()||xh()||dl()}}const LS=MS;var hp="@firebase/auth",dp="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $S(t){sn(new Bt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),B(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:L_(t)},c=new EC(s,i,r,l);return IC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),sn(new Bt("auth-internal",e=>{const n=fl(e.getProvider("auth").getImmediate());return(s=>new FS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(hp,dp,US(t)),wt(hp,dp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=5*60,BS=h_("authIdTokenMaxAge")||VS;let fp=null;const jS=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>BS)return;const i=n==null?void 0:n.token;fp!==i&&(fp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function HS(t=Ch()){const e=bh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TC(t,{popupRedirectResolver:LS,persistence:[KC,MC,G_]}),s=h_("authTokenSyncURL");if(s){const r=jS(s);NC(n,r,()=>r(n.currentUser)),z_(n,o=>r(o))}const i=u_("auth");return i&&bC(n,`http://${i}`),n}$S("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=new Map,WS={activated:!1,tokenObservers:[]};function rn(t){return zS.get(t)||Object.assign({},WS)}const pp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new xr,await KS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new xr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function KS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ia=new Vi("appCheck","AppCheck",GS);function QS(t){if(!rn(t).activated)throw Ia.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS="firebase-app-check-database",XS=1,lu="firebase-app-check-store";let Do=null;function JS(){return Do||(Do=new Promise((t,e)=>{try{const n=indexedDB.open(YS,XS);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Ia.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(lu,{keyPath:"compositeKey"})}}}catch(n){e(Ia.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Do)}function ZS(t,e){return eA(tA(t),e)}async function eA(t,e){const s=(await JS()).transaction(lu,"readwrite"),r=s.objectStore(lu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Ia.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function tA(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new Xr("@firebase/app-check");function gp(t,e){return p_()?ZS(t,e).catch(n=>{cu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA={error:"UNKNOWN_ERROR"};function sA(t){return ul.encodeString(JSON.stringify(t),!1)}async function uu(t,e=!1){const n=t.app;QS(n);const s=rn(n);let i=s.token,r;if(i&&!rr(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(rr(l)?i=l:await gp(n,void 0))}if(!e&&i&&rr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await rn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?cu.warn(l.message):cu.error(l),r=l}let a;return i?r?rr(i)?a={token:i.token,internalError:r}:a=_p(r):(a={token:i.token},s.token=i,await gp(n,i)):a=_p(r),o&&oA(n,a),a}function iA(t,e,n,s){const{app:i}=t,r=rn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&rr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),mp(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>mp(t))}function ty(t,e){const n=rn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function mp(t){const{app:e}=t,n=rn(e);let s=n.tokenRefresher;s||(s=rA(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function rA(t){const{app:e}=t;return new qS(async()=>{const n=rn(e);let s;if(n.token?s=await uu(t,!0):s=await uu(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=rn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},pp.RETRIAL_MIN_WAIT,pp.RETRIAL_MAX_WAIT)}function oA(t,e){const n=rn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function rr(t){return t.expireTimeMillis-Date.now()>0}function _p(t){return{token:sA(nA),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=rn(this.app);for(const n of e)ty(this.app,n.next);return Promise.resolve()}}function lA(t,e){return new aA(t,e)}function cA(t){return{getToken:e=>uu(t,e),addTokenListener:e=>iA(t,"INTERNAL",e),removeTokenListener:e=>ty(t.app,e)}}const uA="@firebase/app-check",hA="0.7.0",dA="app-check",yp="app-check-internal";function fA(){sn(new Bt(dA,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return lA(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(yp).initialize()})),sn(new Bt(yp,t=>{const e=t.getProvider("app-check").getImmediate();return cA(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),wt(uA,hA)}fA();var pA="firebase",gA="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt(pA,gA,"app");const ny=Symbol("firebaseApp");function sy(t){return n_()&&Is(ny,null)||Ch(t)}const Po=new WeakMap;function mA(t,e){if(!Po.has(t)){const n=Zw(!0);Po.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Po.delete(t)}}return Po.get(t)}const _A=new WeakMap,Mo=new WeakMap;function yA(t){const e=sy(t);if(!Mo.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{Mo.set(e,r),n(r.value)}];Mo.set(e,i)}return Mo.get(e)}function vA(t,e){const n=HS(e);z_(n,s=>{const i=yA();t.value=s,Array.isArray(i)&&i[1](t)})}const vp="@firebase/database",wp="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iy="";function wA(t){iy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ze(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Nr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Nn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new EA(e)}}catch{}return new TA},_s=ry("localStorage"),hu=ry("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new Xr("@firebase/database"),IA=function(){let t=1;return function(){return t++}}(),oy=function(t){const e=$I(t),n=new PI;n.update(e);const s=n.digest();return ul.encodeByteArray(s)},no=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=no.apply(null,s):typeof s=="object"?e+=ze(s):e+=s,e+=" "}return e};let Ss=null,Ep=!0;const bA=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(di.logLevel=ne.VERBOSE,Ss=di.log.bind(di),e&&hu.set("logging_enabled",!0)):typeof t=="function"?Ss=t:(Ss=null,hu.remove("logging_enabled"))},Qe=function(...t){if(Ep===!0&&(Ep=!1,Ss===null&&hu.get("logging_enabled")===!0&&bA(!0)),Ss){const e=no.apply(null,t);Ss(e)}},so=function(t){return function(...e){Qe(t,...e)}},du=function(...t){const e="FIREBASE INTERNAL ERROR: "+no(...t);di.error(e)},Os=function(...t){const e=`FIREBASE FATAL ERROR: ${no(...t)}`;throw di.error(e),new Error(e)},Et=function(...t){const e="FIREBASE WARNING: "+no(...t);di.warn(e)},CA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ay=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},SA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ci="[MIN_NAME]",Ds="[MAX_NAME]",ji=function(t,e){if(t===e)return 0;if(t===Ci||e===Ds)return-1;if(e===Ci||t===Ds)return 1;{const n=Tp(t),s=Tp(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},AA=function(t,e){return t===e?0:t<e?-1:1},Ji=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ze(e))},Dh=function(t){if(typeof t!="object"||t===null)return ze(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ze(e[s]),n+=":",n+=Dh(t[e[s]]);return n+="}",n},ly=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const cy=function(t){k(!ay(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},kA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},xA=new RegExp("^-?(0*)\\d{1,10}$"),NA=-2147483648,OA=2147483647,Tp=function(t){if(xA.test(t)){const e=Number(t);if(e>=NA&&e<=OA)return e}return null},io=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Et("Exception was thrown by user callback.",n),e},Math.floor(0))}},DA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},pr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Et(e)}}class fu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="5",uy="v",hy="s",dy="r",fy="f",py=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gy="ls",my="p",pu="ac",_y="websocket",yy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_s.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_s.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function FA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function vy(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let s;if(e===_y)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===yy)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);FA(t)&&(n.ns=t.namespace);const i=[];return kt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.counters_={}}incrementCounter(e,n=1){Nn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _I(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc={},mc={};function Mh(t){const e=t.toString();return gc[e]||(gc[e]=new UA),gc[e]}function $A(t,e){const n=t.toString();return mc[n]||(mc[n]=e()),mc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&io(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="start",BA="close",jA="pLPCommand",HA="pRTLPCB",wy="id",Ey="pw",Ty="ser",zA="cb",WA="seg",qA="ts",KA="d",GA="dframe",Iy=1870,by=30,QA=Iy-by,YA=25e3,XA=3e4;class ti{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=so(e),this.stats_=Mh(n),this.urlFn=l=>(this.appCheckToken&&(l[pu]=this.appCheckToken),vy(n,yy,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(XA)),SA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lh((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ip)this.id=a,this.password=l;else if(o===BA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ip]="t",s[Ty]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[zA]=this.scriptTagHolder.uniqueCallbackIdentifier),s[uy]=Ph,this.transportSessionId&&(s[hy]=this.transportSessionId),this.lastSessionId&&(s[gy]=this.lastSessionId),this.applicationId&&(s[my]=this.applicationId),this.appCheckToken&&(s[pu]=this.appCheckToken),typeof location<"u"&&location.hostname&&py.test(location.hostname)&&(s[dy]=fy);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ti.forceAllow_=!0}static forceDisallow(){ti.forceDisallow_=!0}static isAvailable(){return ti.forceAllow_?!0:!ti.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kA()&&!RA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=l_(n),i=ly(s,QA);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[GA]="t",s[wy]=e,s[Ey]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ze(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lh{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=IA(),window[jA+this.uniqueCallbackIdentifier]=e,window[HA+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Qe("frame writing exception"),a.stack&&Qe(a.stack),Qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[wy]=this.myID,e[Ey]=this.myPW,e[Ty]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+by+s.length<=Iy;){const o=this.pendingSegs.shift();s=s+"&"+WA+i+"="+o.seg+"&"+qA+i+"="+o.ts+"&"+KA+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(YA)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=16384,ZA=45e3;let ba=null;typeof MozWebSocket<"u"?ba=MozWebSocket:typeof WebSocket<"u"&&(ba=WebSocket);class Dt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=so(this.connId),this.stats_=Mh(n),this.connURL=Dt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[uy]=Ph,typeof location<"u"&&location.hostname&&py.test(location.hostname)&&(o[dy]=fy),n&&(o[hy]=n),s&&(o[gy]=s),i&&(o[pu]=i),r&&(o[my]=r),vy(e,_y,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_s.set("previous_websocket_failure",!0);try{let s;f_(),this.mySock=new ba(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ba!==null&&!Dt.forceDisallow_}static previouslyFailed(){return _s.isInMemoryStorage||_s.get("previous_websocket_failure")===!0}markConnectionHealthy(){_s.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Nr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ly(n,JA);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ZA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Dt.responsesRequiredToBeHealthy=2;Dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ti,Dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Dt&&Dt.isAvailable();let s=n&&!Dt.previouslyFailed();if(e.webSocketOnly&&(n||Et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Dt];else{const i=this.transports_=[];for(const r of Mr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Mr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=6e4,tk=5e3,nk=10*1024,sk=100*1024,_c="t",bp="d",ik="s",Cp="r",rk="e",Sp="o",Ap="a",kp="n",Rp="p",ok="h";class ak{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=so("c:"+this.id+":"),this.transportManager_=new Mr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=pr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_c in e){const n=e[_c];n===Ap?this.upgradeIfSecondaryHealthy_():n===Cp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ji("t",e),s=Ji("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Rp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ap,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ji("t",e),s=Ji("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ji(_c,e);if(bp in e){const s=e[bp];if(n===ok){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===kp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ik?this.onConnectionShutdown_(s):n===Cp?this.onReset_(s):n===rk?du("Server Error: "+s):n===Sp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):du("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ph!==s&&Et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),pr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ek))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):pr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Rp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_s.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends Sy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Th()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ca}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=32,Np=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new ye("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Jn(t){return t.pieces_.length-t.pieceNum_}function me(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ye(t.pieces_,e)}function Ay(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function lk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ky(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ry(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ye(e,0)}function $e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ye)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ye(n,0)}function X(t){return t.pieceNum_>=t.pieces_.length}function St(t,e){const n=Z(t),s=Z(e);if(n===null)return e;if(n===s)return St(me(t),me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xy(t,e){if(Jn(t)!==Jn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Mt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Jn(t)>Jn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class ck{constructor(e,n){this.errorPrefix_=n,this.parts_=ky(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=hl(this.parts_[s]);Ny(this)}}function uk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=hl(e),Ny(t)}function hk(t){const e=t.parts_.pop();t.byteLength_-=hl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ny(t){if(t.byteLength_>Np)throw new Error(t.errorPrefix_+"has a key path longer than "+Np+" bytes ("+t.byteLength_+").");if(t.parts_.length>xp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xp+") or object contains a cycle "+fs(t))}function fs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends Sy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Fh}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=1e3,dk=60*5*1e3,Op=30*1e3,fk=1.3,pk=3e4,gk="server_kill",Dp=3;class En extends Cy{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=En.nextPersistentConnectionId_++,this.log_=so("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zi,this.maxReconnectDelay_=dk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!f_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ca.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ze(r)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new xr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;En.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Nn(e,"w")){const s=Ii(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||DI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Op)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=OI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ze(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):du("Unrecognized action received from server: "+ze(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pk&&(this.reconnectDelay_=Zi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+En.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Qe("getToken() completed but was canceled"):(Qe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new ak(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Et(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(gk)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Et(h),l())}}}interrupt(e){Qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],eu(this.interruptReasons_)&&(this.reconnectDelay_=Zi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Dh(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ye(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dp&&(this.reconnectDelay_=Op,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+iy.replace(/\./g,"-")]=1,Th()?e["framework.cordova"]=1:d_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ca.getInstance().currentlyOnline();return eu(this.interruptReasons_)&&e}}En.nextPersistentConnectionId_=0;En.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ee(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ee(Ci,e),i=new ee(Ci,n);return this.compare(s,i)!==0}minPost(){return ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo;class Oy extends ml{static get __EMPTY_NODE(){return Lo}static set __EMPTY_NODE(e){Lo=e}compare(e,n){return ji(e.name,n.name)}isDefinedOn(e){throw $i("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(Ds,Lo)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,Lo)}toString(){return".key"}}const fi=new Oy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ue.RED,this.left=i??pt.EMPTY_NODE,this.right=r??pt.EMPTY_NODE}copy(e,n,s,i,r){return new Ue(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return pt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class mk{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pt{constructor(e,n=pt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new pt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new pt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Fo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Fo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Fo(this.root_,null,this.comparator_,!0,e)}}pt.EMPTY_NODE=new mk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t,e){return ji(t.name,e.name)}function Uh(t,e){return ji(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gu;function yk(t){gu=t}const Dy=function(t){return typeof t=="number"?"number:"+cy(t):"string:"+t},Py=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Nn(e,".sv"),"Priority must be a string or number.")}else k(t===gu||t.isEmpty(),"priority of unexpected type.");k(t===gu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pp;class Le{constructor(e,n=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Py(this.priorityNode_)}static set __childrenNodeConstructor(e){Pp=e}static get __childrenNodeConstructor(){return Pp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:Z(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(k(s!==".priority"||Jn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=cy(this.value_):e+=this.value_,this.lazyHash_=oy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Le.VALUE_TYPE_ORDER.indexOf(n),r=Le.VALUE_TYPE_ORDER.indexOf(s);return k(i>=0,"Unknown leaf type: "+n),k(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let My,Ly;function vk(t){My=t}function wk(t){Ly=t}class Ek extends ml{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ji(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(Ds,new Le("[PRIORITY-POST]",Ly))}makePost(e,n){const s=My(e);return new ee(n,new Le("[PRIORITY-POST]",s))}toString(){return".priority"}}const tt=new Ek;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=Math.log(2);class Ik{constructor(e){const n=r=>parseInt(Math.log(r)/Tk,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sa=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ue(d,h.node,Ue.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=i(l,p),y=i(p+1,c);return h=t[p],d=n?n(h):h,new Ue(d,h.node,Ue.BLACK,m,y)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,y){const b=h-m,O=h;h-=m;const K=i(b+1,O),R=t[b],V=n?n(R):R;p(new Ue(V,R.node,y,null,K))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),b=Math.pow(2,l.count-(m+1));y?d(b,Ue.BLACK):(d(b,Ue.BLACK),d(b,Ue.RED))}return u},o=new Ik(t.length),a=r(o);return new pt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc;const Qs={};class yn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(Qs&&tt,"ChildrenNode.ts has not been loaded"),yc=yc||new yn({".priority":Qs},{".priority":tt}),yc}get(e){const n=Ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pt?n:null}hasIndex(e){return Nn(this.indexSet_,e.toString())}addIndex(e,n){k(e!==fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ee.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Sa(s,e.getCompare()):a=Qs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new yn(u,c)}addToIndexes(e,n){const s=ga(this.indexes_,(i,r)=>{const o=Ii(this.indexSet_,r);if(k(o,"Missing index implementation for "+r),i===Qs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Sa(a,o.getCompare())}else return Qs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new yn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ga(this.indexes_,i=>{if(i===Qs)return i;{const r=n.get(e.name);return r?i.remove(new ee(e.name,r)):i}});return new yn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er;class ae{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Py(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return er||(er=new ae(new pt(Uh),null,yn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||er}updatePriority(e){return this.children_.isEmpty()?this:new ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?er:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ee(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?er:this.priorityNode_;return new ae(i,o,r)}}updateChild(e,n){const s=Z(e);if(s===null)return n;{k(Z(e)!==".priority"||Jn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(me(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(tt,(o,a)=>{n[o]=a.val(e),s++,r&&ae.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dy(this.getPriority().val())+":"),this.forEachChild(tt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":oy(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ee(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ro?-1:0}withIndex(e){if(e===fi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ae(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(tt),i=n.getIterator(tt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fi?null:this.indexMap_.get(e.toString())}}ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bk extends ae{constructor(){super(new pt(Uh),ae.EMPTY_NODE,yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ae.EMPTY_NODE}isEmpty(){return!1}}const ro=new bk;Object.defineProperties(ee,{MIN:{value:new ee(Ci,ae.EMPTY_NODE)},MAX:{value:new ee(Ds,ro)}});Oy.__EMPTY_NODE=ae.EMPTY_NODE;Le.__childrenNodeConstructor=ae;yk(ro);wk(ro);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=!0;function Ye(t,e=null){if(t===null)return ae.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Le(n,Ye(e))}if(!(t instanceof Array)&&Ck){const n=[];let s=!1;if(kt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ye(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return ae.EMPTY_NODE;const r=Sa(n,_k,o=>o.name,Uh);if(s){const o=Sa(n,tt.getCompare());return new ae(r,Ye(e),new yn({".priority":o},{".priority":tt}))}else return new ae(r,Ye(e),yn.Default)}else{let n=ae.EMPTY_NODE;return kt(t,(s,i)=>{if(Nn(t,s)&&s.substring(0,1)!=="."){const r=Ye(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ye(e))}}vk(Ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk extends ml{constructor(e){super(),this.indexPath_=e,k(!X(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ji(e.name,n.name):r}makePost(e,n){const s=Ye(e),i=ae.EMPTY_NODE.updateChild(this.indexPath_,s);return new ee(n,i)}maxPost(){const e=ae.EMPTY_NODE.updateChild(this.indexPath_,ro);return new ee(Ds,e)}toString(){return ky(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak extends ml{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ji(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const s=Ye(e);return new ee(n,s)}toString(){return".value"}}const kk=new Ak;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t){return{type:"value",snapshotNode:t}}function xk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Nk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Mp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ok(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=tt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ci}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ds}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===tt}copy(){const e=new $h;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Lp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===tt?n="$priority":t.index_===kk?n="$value":t.index_===fi?n="$key":(k(t.index_ instanceof Sk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ze(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ze(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ze(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ze(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ze(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Fp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==tt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Cy{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=so("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Aa.getListenId_(e,s),a={};this.listens_[o]=a;const l=Lp(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ii(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Aa.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Lp(e._queryParams),s=e._path.toString(),i=new xr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Bi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Nr(a.responseText)}catch{Et("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Et("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(){this.rootNode_=ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(){return{value:null,children:new Map}}function Fy(t,e,n){if(X(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Z(e);t.children.has(s)||t.children.set(s,ka());const i=t.children.get(s);e=me(e),Fy(i,e,n)}}function mu(t,e,n){t.value!==null?n(e,t.value):Pk(t,(s,i)=>{const r=new ye(e.toString()+"/"+s);mu(i,r,n)})}function Pk(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&kt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=10*1e3,Lk=30*1e3,Fk=5*60*1e3;class Uk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Mk(e);const s=Up+(Lk-Up)*Math.random();pr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;kt(e,(i,r)=>{r>0&&Nn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),pr(this.reportStats_.bind(this),Math.floor(Math.random()*2*Fk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xt||(Xt={}));function Uy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $y(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xt.ACK_USER_WRITE,this.source=Uy()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new Ra(ue(),n,this.revert)}}else return k(Z(this.path)===e,"operationForChild called for unrelated child."),new Ra(me(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xt.OVERWRITE}operationForChild(e){return X(this.path)?new Ps(this.source,ue(),this.snap.getImmediateChild(e)):new Ps(this.source,me(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xt.MERGE}operationForChild(e){if(X(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new Ps(this.source,ue(),n.value):new Lr(this.source,ue(),n)}else return k(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Lr(this.source,me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function $k(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ok(o.childName,o.snapshotNode))}),tr(t,i,"child_removed",e,s,n),tr(t,i,"child_added",e,s,n),tr(t,i,"child_moved",r,s,n),tr(t,i,"child_changed",e,s,n),tr(t,i,"value",e,s,n),i}function tr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Bk(t,a,l)),o.forEach(a=>{const l=Vk(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Vk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Bk(t,e,n){if(e.childName==null||n.childName==null)throw $i("Should only compare child_ events.");const s=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t,e){return{eventCache:t,serverCache:e}}function gr(t,e,n,s){return By(new Vh(e,n,s),t.serverCache)}function jy(t,e,n,s){return By(t.eventCache,new Vh(e,n,s))}function _u(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ms(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc;const jk=()=>(vc||(vc=new pt(AA)),vc);class pe{constructor(e,n=jk()){this.value=e,this.children=n}static fromObject(e){let n=new pe(null);return kt(e,(s,i)=>{n=n.set(new ye(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(X(e))return null;{const s=Z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(me(e),n);return r!=null?{path:$e(new ye(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const n=Z(e),s=this.children.get(n);return s!==null?s.subtree(me(e)):new pe(null)}}set(e,n){if(X(e))return new pe(n,this.children);{const s=Z(e),r=(this.children.get(s)||new pe(null)).set(me(e),n),o=this.children.insert(s,r);return new pe(this.value,o)}}remove(e){if(X(e))return this.children.isEmpty()?new pe(null):new pe(null,this.children);{const n=Z(e),s=this.children.get(n);if(s){const i=s.remove(me(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new pe(null):new pe(this.value,r)}else return this}}get(e){if(X(e))return this.value;{const n=Z(e),s=this.children.get(n);return s?s.get(me(e)):null}}setTree(e,n){if(X(e))return n;{const s=Z(e),r=(this.children.get(s)||new pe(null)).setTree(me(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new pe(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_($e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(X(e))return null;{const r=Z(e),o=this.children.get(r);return o?o.findOnPath_(me(e),$e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,s){if(X(e))return this;{this.value&&s(n,this.value);const i=Z(e),r=this.children.get(i);return r?r.foreachOnPath_(me(e),$e(n,i),s):new pe(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_($e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.writeTree_=e}static empty(){return new Vt(new pe(null))}}function mr(t,e,n){if(X(e))return new Vt(new pe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=St(i,e);return r=r.updateChild(o,n),new Vt(t.writeTree_.set(i,r))}else{const i=new pe(n),r=t.writeTree_.setTree(e,i);return new Vt(r)}}}function $p(t,e,n){let s=t;return kt(n,(i,r)=>{s=mr(s,$e(e,i),r)}),s}function Vp(t,e){if(X(e))return Vt.empty();{const n=t.writeTree_.setTree(e,new pe(null));return new Vt(n)}}function yu(t,e){return $s(t,e)!=null}function $s(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(St(n.path,e)):null}function Bp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(tt,(s,i)=>{e.push(new ee(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ee(s,i.value))}),e}function Kn(t,e){if(X(e))return t;{const n=$s(t,e);return n!=null?new Vt(new pe(n)):new Vt(t.writeTree_.subtree(e))}}function vu(t){return t.writeTree_.isEmpty()}function Si(t,e){return Hy(ue(),t.writeTree_,e)}function Hy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(k(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Hy($e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild($e(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t,e){return Qy(e,t)}function Hk(t,e,n,s,i){k(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=mr(t.visibleWrites,e,n)),t.lastWriteId=s}function zk(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Wk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&qk(a,s.path)?i=!1:Mt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Kk(t),!0;if(s.snap)t.visibleWrites=Vp(t.visibleWrites,s.path);else{const a=s.children;kt(a,l=>{t.visibleWrites=Vp(t.visibleWrites,$e(s.path,l))})}return!0}else return!1}function qk(t,e){if(t.snap)return Mt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Mt($e(t.path,n),e))return!0;return!1}function Kk(t){t.visibleWrites=Wy(t.allWrites,Gk,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Gk(t){return t.visible}function Wy(t,e,n){let s=Vt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Mt(n,o)?(a=St(n,o),s=mr(s,a,r.snap)):Mt(o,n)&&(a=St(o,n),s=mr(s,ue(),r.snap.getChild(a)));else if(r.children){if(Mt(n,o))a=St(n,o),s=$p(s,a,r.children);else if(Mt(o,n))if(a=St(o,n),X(a))s=$p(s,ue(),r.children);else{const l=Ii(r.children,Z(a));if(l){const c=l.getChild(me(a));s=mr(s,ue(),c)}}}else throw $i("WriteRecord should have .snap or .children")}}return s}function qy(t,e,n,s,i){if(!s&&!i){const r=$s(t.visibleWrites,e);if(r!=null)return r;{const o=Kn(t.visibleWrites,e);if(vu(o))return n;if(n==null&&!yu(o,ue()))return null;{const a=n||ae.EMPTY_NODE;return Si(o,a)}}}else{const r=Kn(t.visibleWrites,e);if(!i&&vu(r))return n;if(!i&&n==null&&!yu(r,ue()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Mt(c.path,e)||Mt(e,c.path))},a=Wy(t.allWrites,o,e),l=n||ae.EMPTY_NODE;return Si(a,l)}}}function Qk(t,e,n){let s=ae.EMPTY_NODE;const i=$s(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(tt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Kn(t.visibleWrites,e);return n.forEachChild(tt,(o,a)=>{const l=Si(Kn(r,new ye(o)),a);s=s.updateImmediateChild(o,l)}),Bp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Kn(t.visibleWrites,e);return Bp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Yk(t,e,n,s,i){k(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=$e(e,n);if(yu(t.visibleWrites,r))return null;{const o=Kn(t.visibleWrites,r);return vu(o)?i.getChild(n):Si(o,i.getChild(n))}}function Xk(t,e,n,s){const i=$e(e,n),r=$s(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Kn(t.visibleWrites,i);return Si(o,s.getNode().getImmediateChild(n))}else return null}function Jk(t,e){return $s(t.visibleWrites,e)}function Zk(t,e,n,s,i,r,o){let a;const l=Kn(t.visibleWrites,e),c=$s(l,ue());if(c!=null)a=c;else if(n!=null)a=Si(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function eR(){return{visibleWrites:Vt.empty(),allWrites:[],lastWriteId:-1}}function wu(t,e,n,s){return qy(t.writeTree,t.treePath,e,n,s)}function Ky(t,e){return Qk(t.writeTree,t.treePath,e)}function jp(t,e,n,s){return Yk(t.writeTree,t.treePath,e,n,s)}function xa(t,e){return Jk(t.writeTree,$e(t.treePath,e))}function tR(t,e,n,s,i,r){return Zk(t.writeTree,t.treePath,e,n,s,i,r)}function Bh(t,e,n){return Xk(t.writeTree,t.treePath,e,n)}function Gy(t,e){return Qy($e(t.treePath,e),t.writeTree)}function Qy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Mp(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Nk(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,xk(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Mp(s,e.snapshotNode,i.oldSnap));else throw $i("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Yy=new sR;class jh{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Vh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bh(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ms(this.viewCache_),r=tR(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function iR(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function rR(t,e,n,s,i){const r=new nR;let o,a;if(n.type===Xt.OVERWRITE){const c=n;c.source.fromUser?o=Eu(t,e,c.path,c.snap,s,i,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!X(c.path),o=Na(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Xt.MERGE){const c=n;c.source.fromUser?o=aR(t,e,c.path,c.children,s,i,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Tu(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Xt.ACK_USER_WRITE){const c=n;c.revert?o=uR(t,e,c.path,s,i,r):o=lR(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Xt.LISTEN_COMPLETE)o=cR(t,e,n.path,s,r);else throw $i("Unknown operation type: "+n.type);const l=r.getChanges();return oR(e,o,l),{viewCache:o,changes:l}}function oR(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=_u(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Rk(_u(e)))}}function Xy(t,e,n,s,i,r){const o=e.eventCache;if(xa(s,n)!=null)return e;{let a,l;if(X(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ms(e),u=c instanceof ae?c:ae.EMPTY_NODE,h=Ky(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=wu(s,Ms(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Z(n);if(c===".priority"){k(Jn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=jp(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=me(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=jp(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Bh(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return gr(e,a,o.isFullyInitialized()||X(n),t.filter.filtersNodes())}}function Na(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(X(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=Z(n);if(!l.isCompleteForPath(n)&&Jn(n)>1)return e;const m=me(n),b=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),p,b,m,Yy,null)}const h=jy(e,c,l.isFullyInitialized()||X(n),u.filtersNodes()),d=new jh(i,h,r);return Xy(t,h,n,i,d,a)}function Eu(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new jh(i,e,r);if(X(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=gr(e,c,!0,t.filter.filtersNodes());else{const h=Z(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=gr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=me(n),p=a.getNode().getImmediateChild(h);let m;if(X(d))m=s;else{const y=u.getCompleteChild(h);y!=null?Ay(d)===".priority"&&y.getChild(Ry(d)).isEmpty()?m=y:m=y.updateChild(d,s):m=ae.EMPTY_NODE}if(p.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=gr(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Hp(t,e){return t.eventCache.isCompleteForChild(e)}function aR(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=$e(n,l);Hp(e,Z(u))&&(a=Eu(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=$e(n,l);Hp(e,Z(u))||(a=Eu(t,a,u,c,i,r,o))}),a}function zp(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Tu(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;X(n)?c=s:c=new pe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=zp(t,p,d);l=Na(t,l,new ye(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),y=zp(t,m,d);l=Na(t,l,new ye(h),y,i,r,o,a)}}),l}function lR(t,e,n,s,i,r,o){if(xa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(X(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Na(t,e,n,l.getNode().getChild(n),i,r,a,o);if(X(n)){let c=new pe(null);return l.getNode().forEachChild(fi,(u,h)=>{c=c.set(new ye(u),h)}),Tu(t,e,n,c,i,r,a,o)}else return e}else{let c=new pe(null);return s.foreach((u,h)=>{const d=$e(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Tu(t,e,n,c,i,r,a,o)}}function cR(t,e,n,s,i){const r=e.serverCache,o=jy(e,r.getNode(),r.isFullyInitialized()||X(n),r.isFiltered());return Xy(t,o,n,s,Yy,i)}function uR(t,e,n,s,i,r){let o;if(xa(s,n)!=null)return e;{const a=new jh(s,e,i),l=e.eventCache.getNode();let c;if(X(n)||Z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=wu(s,Ms(e));else{const h=e.serverCache.getNode();k(h instanceof ae,"serverChildren would be complete if leaf node"),u=Ky(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Z(n);let h=Bh(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,me(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ae.EMPTY_NODE,me(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=wu(s,Ms(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||xa(s,ue())!=null,gr(e,c,o,t.filter.filtersNodes())}}function hR(t,e){const n=Ms(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!X(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function Wp(t,e,n,s){e.type===Xt.MERGE&&e.source.queryId!==null&&(k(Ms(t.viewCache_),"We should always have a full cache before handling merges"),k(_u(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=rR(t.processor_,i,e,n,s);return iR(t.processor_,r.viewCache),k(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,dR(t,r.changes,r.viewCache.eventCache.getNode(),null)}function dR(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return $k(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qp;function fR(t){k(!qp,"__referenceConstructor has already been defined"),qp=t}function Hh(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return k(r!=null,"SyncTree gave us an op for an invalid query."),Wp(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Wp(o,e,n,s));return r}}function zh(t,e){let n=null;for(const s of t.views.values())n=n||hR(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kp;function pR(t){k(!Kp,"__referenceConstructor has already been defined"),Kp=t}class Gp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pe(null),this.pendingWriteTree_=eR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gR(t,e,n,s,i){return Hk(t.pendingWriteTree_,e,n,s,i),i?yl(t,new Ps(Uy(),e,n)):[]}function ni(t,e,n=!1){const s=zk(t.pendingWriteTree_,e);if(Wk(t.pendingWriteTree_,e)){let r=new pe(null);return s.snap!=null?r=r.set(ue(),!0):kt(s.children,o=>{r=r.set(new ye(o),!0)}),yl(t,new Ra(s.path,r,n))}else return[]}function _l(t,e,n){return yl(t,new Ps($y(),e,n))}function mR(t,e,n){const s=pe.fromObject(n);return yl(t,new Lr($y(),e,s))}function _R(t,e,n,s){const i=tv(t,s);if(i!=null){const r=nv(i),o=r.path,a=r.queryId,l=St(o,e),c=new Ps(Vy(a),l,n);return sv(t,o,c)}else return[]}function yR(t,e,n,s){const i=tv(t,s);if(i){const r=nv(i),o=r.path,a=r.queryId,l=St(o,e),c=pe.fromObject(n),u=new Lr(Vy(a),l,c);return sv(t,o,u)}else return[]}function Jy(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=St(o,e),c=zh(a,l);if(c)return c});return qy(i,e,r,n,!0)}function yl(t,e){return Zy(e,t.syncPointTree_,null,zy(t.pendingWriteTree_,ue()))}function Zy(t,e,n,s){if(X(t.path))return ev(t,e,n,s);{const i=e.get(ue());n==null&&i!=null&&(n=zh(i,ue()));let r=[];const o=Z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Gy(s,o);r=r.concat(Zy(a,l,c,u))}return i&&(r=r.concat(Hh(i,t,s,n))),r}}function ev(t,e,n,s){const i=e.get(ue());n==null&&i!=null&&(n=zh(i,ue()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Gy(s,o),u=t.operationForChild(o);u&&(r=r.concat(ev(u,a,l,c)))}),i&&(r=r.concat(Hh(i,t,s,n))),r}function tv(t,e){return t.tagToQueryMap.get(e)}function nv(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ye(t.substr(0,e))}}function sv(t,e,n){const s=t.syncPointTree_.get(e);k(s,"Missing sync point for query tag that we're tracking");const i=zy(t.pendingWriteTree_,e);return Hh(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wh(n)}node(){return this.node_}}class qh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$e(this.path_,e);return new qh(this.syncTree_,n)}node(){return Jy(this.syncTree_,this.path_)}}const vR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Qp=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return wR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ER(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},wR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},ER=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&k(!1,"Unexpected increment value: "+s);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},TR=function(t,e,n,s){return Kh(e,new qh(n,t),s)},IR=function(t,e,n){return Kh(t,new Wh(e),n)};function Kh(t,e,n){const s=t.getPriority().val(),i=Qp(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Qp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Le(a,Ye(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Le(i))),o.forEachChild(tt,(a,l)=>{const c=Kh(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Qh(t,e){let n=e instanceof ye?e:new ye(e),s=t,i=Z(n);for(;i!==null;){const r=Ii(s.node.children,i)||{children:{},childCount:0};s=new Gh(i,s,r),n=me(n),i=Z(n)}return s}function Hi(t){return t.node.value}function iv(t,e){t.node.value=e,Iu(t)}function rv(t){return t.node.childCount>0}function bR(t){return Hi(t)===void 0&&!rv(t)}function vl(t,e){kt(t.node.children,(n,s)=>{e(new Gh(n,t,s))})}function ov(t,e,n,s){n&&!s&&e(t),vl(t,i=>{ov(i,e,!0,s)}),n&&s&&e(t)}function CR(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function oo(t){return new ye(t.parent===null?t.name:oo(t.parent)+"/"+t.name)}function Iu(t){t.parent!==null&&SR(t.parent,t.name,t)}function SR(t,e,n){const s=bR(n),i=Nn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Iu(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Iu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=/[\[\].#$\/\u0000-\u001F\u007F]/,kR=/[\[\].#$\u0000-\u001F\u007F]/,wc=10*1024*1024,av=function(t){return typeof t=="string"&&t.length!==0&&!AR.test(t)},RR=function(t){return typeof t=="string"&&t.length!==0&&!kR.test(t)},xR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),RR(t)},lv=function(t,e,n){const s=n instanceof ye?new ck(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+fs(s));if(typeof e=="function")throw new Error(t+"contains a function "+fs(s)+" with contents = "+e.toString());if(ay(e))throw new Error(t+"contains "+e.toString()+" "+fs(s));if(typeof e=="string"&&e.length>wc/3&&hl(e)>wc)throw new Error(t+"contains a string greater than "+wc+" utf8 bytes "+fs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(kt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!av(o)))throw new Error(t+" contains an invalid key ("+o+") "+fs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uk(s,o),lv(t,a,s),hk(s)}),i&&r)throw new Error(t+' contains ".value" child '+fs(s)+" in addition to actual children.")}},NR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!av(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xR(n))throw new Error(UI(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function DR(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!xy(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Vs(t,e,n){DR(t,n),PR(t,s=>Mt(s,e)||Mt(e,s))}function PR(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(MR(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function MR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ss&&Qe("event: "+n.toString()),io(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="repo_interrupt",FR=25;class UR{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new OR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ka(),this.transactionQueueTree_=new Gh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $R(t,e,n){if(t.stats_=Mh(t.repoInfo_),t.forceRestClient_||DA())t.server_=new Aa(t.repoInfo_,(s,i,r,o)=>{Yp(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ze(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new En(t.repoInfo_,e,(s,i,r,o)=>{Yp(t,s,i,r,o)},s=>{Xp(t,s)},s=>{BR(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=$A(t.repoInfo_,()=>new Uk(t.stats_,t.server_)),t.infoData_=new Dk,t.infoSyncTree_=new Gp({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=_l(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Yh(t,"connected",!1),t.serverSyncTree_=new Gp({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Vs(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function VR(t){const n=t.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function cv(t){return vR({timestamp:VR(t)})}function Yp(t,e,n,s,i){t.dataUpdateCount++;const r=new ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ga(n,c=>Ye(c));o=yR(t.serverSyncTree_,r,l,i)}else{const l=Ye(n);o=_R(t.serverSyncTree_,r,l,i)}else if(s){const l=ga(n,c=>Ye(c));o=mR(t.serverSyncTree_,r,l)}else{const l=Ye(n);o=_l(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Jh(t,r)),Vs(t.eventQueue_,a,o)}function Xp(t,e){Yh(t,"connected",e),e===!1&&HR(t)}function BR(t,e){kt(e,(n,s)=>{Yh(t,n,s)})}function Yh(t,e,n){const s=new ye("/.info/"+e),i=Ye(n);t.infoData_.updateSnapshot(s,i);const r=_l(t.infoSyncTree_,s,i);Vs(t.eventQueue_,s,r)}function jR(t){return t.nextWriteId_++}function HR(t){uv(t,"onDisconnectEvents");const e=cv(t),n=ka();mu(t.onDisconnect_,ue(),(i,r)=>{const o=TR(i,r,t.serverSyncTree_,e);Fy(n,i,o)});let s=[];mu(n,ue(),(i,r)=>{s=s.concat(_l(t.serverSyncTree_,i,r));const o=KR(t,i);Jh(t,o)}),t.onDisconnect_=ka(),Vs(t.eventQueue_,ue(),s)}function zR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(LR)}function uv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Qe(n,...e)}function hv(t,e,n){return Jy(t.serverSyncTree_,e,n)||ae.EMPTY_NODE}function Xh(t,e=t.transactionQueueTree_){if(e||wl(t,e),Hi(e)){const n=fv(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&WR(t,oo(e),n)}else rv(e)&&vl(e,n=>{Xh(t,n)})}function WR(t,e,n){const s=n.map(c=>c.currentWriteId),i=hv(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];k(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=St(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{uv(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(ni(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();wl(t,Qh(t.transactionQueueTree_,e)),Xh(t,t.transactionQueueTree_),Vs(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)io(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Et("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Jh(t,e)}},o)}function Jh(t,e){const n=dv(t,e),s=oo(n),i=fv(t,n);return qR(t,i,s),s}function qR(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=St(n,l.path);let u=!1,h;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(ni(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=FR)u=!0,h="maxretry",i=i.concat(ni(t.serverSyncTree_,l.currentWriteId,!0));else{const d=hv(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){lv("transaction failed: Data returned ",p,l.path);let m=Ye(p);typeof p=="object"&&p!=null&&Nn(p,".priority")||(m=m.updatePriority(d.getPriority()));const b=l.currentWriteId,O=cv(t),K=IR(m,d,O);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=K,l.currentWriteId=jR(t),o.splice(o.indexOf(b),1),i=i.concat(gR(t.serverSyncTree_,l.path,K,l.currentWriteId,l.applyLocally)),i=i.concat(ni(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",i=i.concat(ni(t.serverSyncTree_,l.currentWriteId,!0))}Vs(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}wl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)io(s[a]);Xh(t,t.transactionQueueTree_)}function dv(t,e){let n,s=t.transactionQueueTree_;for(n=Z(e);n!==null&&Hi(s)===void 0;)s=Qh(s,n),e=me(e),n=Z(e);return s}function fv(t,e){const n=[];return pv(t,e,n),n.sort((s,i)=>s.order-i.order),n}function pv(t,e,n){const s=Hi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);vl(e,i=>{pv(t,i,n)})}function wl(t,e){const n=Hi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,iv(e,n.length>0?n:void 0)}vl(e,s=>{wl(t,s)})}function KR(t,e){const n=oo(dv(t,e)),s=Qh(t.transactionQueueTree_,e);return CR(s,i=>{Ec(t,i)}),Ec(t,s),ov(s,i=>{Ec(t,i)}),n}function Ec(t,e){const n=Hi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ni(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?iv(e,void 0):n.length=r+1,Vs(t.eventQueue_,oo(e),i);for(let o=0;o<s.length;o++)io(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function QR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Et(`Invalid query segment '${n}' in query '${t}'`)}return e}const Jp=function(t,e){const n=YR(t),s=n.namespace;n.domain==="firebase.com"&&Os(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Os("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||CA();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new LA(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ye(n.pathString)}},YR=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=GR(t.substring(u,h)));const d=QR(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return X(this._path)?null:Ay(this._path)}get ref(){return new zi(this._repo,this._path)}get _queryIdentifier(){const e=Fp(this._queryParams),n=Dh(e);return n==="{}"?"default":n}get _queryObject(){return Fp(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof Zh))return!1;const n=this._repo===e._repo,s=xy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+lk(this._path)}}class zi extends Zh{constructor(e,n){super(e,n,new $h,!1)}get parent(){const e=Ry(this._path);return e===null?null:new zi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}fR(zi);pR(zi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="FIREBASE_DATABASE_EMULATOR_HOST",bu={};let JR=!1;function ZR(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Os("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Jp(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[XR]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Jp(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new fu(fu.OWNER):new MA(t.name,t.options,e);NR("Invalid Firebase Database URL",o),X(o.path)||Os("Database URL must point to the root of a Firebase Database (not including a child path).");const h=t1(a,t,u,new PA(t.name,n));return new n1(h,t)}function e1(t,e){const n=bu[e];(!n||n[t.key]!==t)&&Os(`Database ${e}(${t.repoInfo_}) has already been deleted.`),zR(t),delete n[t.key]}function t1(t,e,n,s){let i=bu[e.name];i||(i={},bu[e.name]=i);let r=i[t.toURLString()];return r&&Os("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new UR(t,JR,n,s),i[t.toURLString()]=r,r}class n1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($R(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zi(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(e1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Os("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t){wA(ns),sn(new Bt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ZR(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),wt(vp,wp,t),wt(vp,wp,"esm2017")}En.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};En.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};s1();var i1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,ed=ed||{},j=i1||self;function Oa(){}function El(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ao(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function r1(t){return Object.prototype.hasOwnProperty.call(t,Tc)&&t[Tc]||(t[Tc]=++o1)}var Tc="closure_uid_"+(1e9*Math.random()>>>0),o1=0;function a1(t,e,n){return t.call.apply(t.bind,arguments)}function l1(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=a1:nt=l1,nt.apply(null,arguments)}function Uo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function ss(){this.s=this.s,this.o=this.o}var c1=0;ss.prototype.s=!1;ss.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),c1!=0)&&r1(this)};ss.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function td(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Zp(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(El(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var u1=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",Oa,e),j.removeEventListener("test",Oa,e)}catch{}return t}();function Da(t){return/^[\s\xa0]*$/.test(t)}var eg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ic(t,e){return t<e?-1:t>e?1:0}function Tl(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function Qt(t){return Tl().indexOf(t)!=-1}function nd(t){return nd[" "](t),t}nd[" "]=Oa;function mv(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var h1=Qt("Opera"),Ai=Qt("Trident")||Qt("MSIE"),_v=Qt("Edge"),Cu=_v||Ai,yv=Qt("Gecko")&&!(Tl().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge"))&&!(Qt("Trident")||Qt("MSIE"))&&!Qt("Edge"),d1=Tl().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge");function vv(){var t=j.document;return t?t.documentMode:void 0}var Pa;e:{var bc="",Cc=function(){var t=Tl();if(yv)return/rv:([^\);]+)(\)|;)/.exec(t);if(_v)return/Edge\/([\d\.]+)/.exec(t);if(Ai)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(d1)return/WebKit\/(\S+)/.exec(t);if(h1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Cc&&(bc=Cc?Cc[1]:""),Ai){var Sc=vv();if(Sc!=null&&Sc>parseFloat(bc)){Pa=String(Sc);break e}}Pa=bc}var f1={};function p1(){return mv(f1,9,function(){let t=0;const e=eg(String(Pa)).split("."),n=eg("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ic(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ic(i[2].length==0,r[2].length==0)||Ic(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Su;if(j.document&&Ai){var tg=vv();Su=tg||parseInt(Pa,10)||void 0}else Su=void 0;var g1=Su;function Fr(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(yv){e:{try{nd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:m1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fr.$.h.call(this)}}Be(Fr,st);var m1={2:"touch",3:"pen",4:"mouse"};Fr.prototype.h=function(){Fr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lo="closure_listenable_"+(1e6*Math.random()|0),_1=0;function y1(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++_1,this.fa=this.ia=!1}function Il(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function sd(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function wv(t){const e={};for(const n in t)e[n]=t[n];return e}const ng="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ev(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<ng.length;r++)n=ng[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function bl(t){this.src=t,this.g={},this.h=0}bl.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ku(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new y1(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function Au(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=gv(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Il(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ku(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var id="closure_lm_"+(1e6*Math.random()|0),Ac={};function Tv(t,e,n,s,i){if(s&&s.once)return bv(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Tv(t,e[r],n,s,i);return null}return n=ad(n),t&&t[lo]?t.O(e,n,ao(s)?!!s.capture:!!s,i):Iv(t,e,n,!1,s,i)}function Iv(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=ao(i)?!!i.capture:!!i,a=od(t);if(a||(t[id]=a=new bl(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=v1(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)u1||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Sv(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function v1(){function t(n){return e.call(t.src,t.listener,n)}const e=w1;return t}function bv(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)bv(t,e[r],n,s,i);return null}return n=ad(n),t&&t[lo]?t.P(e,n,ao(s)?!!s.capture:!!s,i):Iv(t,e,n,!0,s,i)}function Cv(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Cv(t,e[r],n,s,i);else s=ao(s)?!!s.capture:!!s,n=ad(n),t&&t[lo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ku(r,n,s,i),-1<n&&(Il(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=od(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ku(e,n,s,i)),(n=-1<t?e[t]:null)&&rd(n))}function rd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[lo])Au(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Sv(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=od(e))?(Au(n,t),n.h==0&&(n.src=null,e[id]=null)):Il(t)}}}function Sv(t){return t in Ac?Ac[t]:Ac[t]="on"+t}function w1(t,e){if(t.fa)t=!0;else{e=new Fr(e,this);var n=t.listener,s=t.la||t.src;t.ia&&rd(t),t=n.call(s,e)}return t}function od(t){return t=t[id],t instanceof bl?t:null}var kc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ad(t){return typeof t=="function"?t:(t[kc]||(t[kc]=function(e){return t.handleEvent(e)}),t[kc])}function Ve(){ss.call(this),this.i=new bl(this),this.S=this,this.J=null}Be(Ve,ss);Ve.prototype[lo]=!0;Ve.prototype.removeEventListener=function(t,e,n,s){Cv(this,t,e,n,s)};function qe(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var i=e;e=new st(s,t),Ev(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=$o(o,s,!0,e)&&i}if(o=e.g=t,i=$o(o,s,!0,e)&&i,i=$o(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=$o(o,s,!1,e)&&i}Ve.prototype.N=function(){if(Ve.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Il(n[s]);delete t.g[e],t.h--}}this.J=null};Ve.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ve.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function $o(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Au(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var ld=j.JSON.stringify;function E1(){var t=Rv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class T1{constructor(){this.h=this.g=null}add(e,n){const s=Av.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Av=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new I1,t=>t.reset());class I1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function b1(t){j.setTimeout(()=>{throw t},0)}function kv(t,e){Ru||C1(),xu||(Ru(),xu=!0),Rv.add(t,e)}var Ru;function C1(){var t=j.Promise.resolve(void 0);Ru=function(){t.then(S1)}}var xu=!1,Rv=new T1;function S1(){for(var t;t=E1();){try{t.h.call(t.g)}catch(n){b1(n)}var e=Av;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xu=!1}function Cl(t,e){Ve.call(this),this.h=t||1,this.g=e||j,this.j=nt(this.qb,this),this.l=Date.now()}Be(Cl,Ve);x=Cl.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),qe(this,"tick"),this.ga&&(cd(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function cd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){Cl.$.N.call(this),cd(this),delete this.g};function ud(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function xv(t){t.g=ud(()=>{t.g=null,t.i&&(t.i=!1,xv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class A1 extends ss{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:xv(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ur(t){ss.call(this),this.h=t,this.g={}}Be(Ur,ss);var sg=[];function Nv(t,e,n,s){Array.isArray(n)||(n&&(sg[0]=n.toString()),n=sg);for(var i=0;i<n.length;i++){var r=Tv(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ov(t){sd(t.g,function(e,n){this.g.hasOwnProperty(n)&&rd(e)},t),t.g={}}Ur.prototype.N=function(){Ur.$.N.call(this),Ov(this)};Ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sl(){this.g=!0}Sl.prototype.Ea=function(){this.g=!1};function k1(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function R1(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function si(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+N1(t,n)+(s?" "+s:"")})}function x1(t,e){t.info(function(){return"TIMEOUT: "+e})}Sl.prototype.info=function(){};function N1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ld(n)}catch{return e}}var Bs={},ig=null;function Al(){return ig=ig||new Ve}Bs.Ta="serverreachability";function Dv(t){st.call(this,Bs.Ta,t)}Be(Dv,st);function $r(t){const e=Al();qe(e,new Dv(e))}Bs.STAT_EVENT="statevent";function Pv(t,e){st.call(this,Bs.STAT_EVENT,t),this.stat=e}Be(Pv,st);function ut(t){const e=Al();qe(e,new Pv(e,t))}Bs.Ua="timingevent";function Mv(t,e){st.call(this,Bs.Ua,t),this.size=e}Be(Mv,st);function co(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var kl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Lv={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function hd(){}hd.prototype.h=null;function rg(t){return t.h||(t.h=t.i())}function Fv(){}var uo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function dd(){st.call(this,"d")}Be(dd,st);function fd(){st.call(this,"c")}Be(fd,st);var Nu;function Rl(){}Be(Rl,hd);Rl.prototype.g=function(){return new XMLHttpRequest};Rl.prototype.i=function(){return{}};Nu=new Rl;function ho(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Ur(this),this.P=O1,t=Cu?125:void 0,this.V=new Cl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Uv}function Uv(){this.i=null,this.g="",this.h=!1}var O1=45e3,Ou={},Ma={};x=ho.prototype;x.setTimeout=function(t){this.P=t};function Du(t,e,n){t.L=1,t.v=Nl(Sn(e)),t.s=n,t.S=!0,$v(t,null)}function $v(t,e){t.G=Date.now(),fo(t),t.A=Sn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Kv(n.i,"t",s),t.C=0,n=t.l.I,t.h=new Uv,t.g=p0(t.l,n?e:null,!t.s),0<t.O&&(t.M=new A1(nt(t.Pa,t,t.g),t.O)),Nv(t.U,t.g,"readystatechange",t.nb),e=t.I?wv(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),$r(),k1(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&vn(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const u=vn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Cu||this.g&&(this.h.h||this.g.ja()||cg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?$r(3):$r(2)),xl(this);var n=this.g.da();this.aa=n;t:if(Vv(this)){var s=cg(this.g);t="";var i=s.length,r=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ys(this),_r(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,R1(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Da(a)){var c=a;break t}}c=null}if(n=c)si(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pu(this,n);else{this.i=!1,this.o=3,ut(12),ys(this),_r(this);break e}}this.S?(Bv(this,u,o),Cu&&this.i&&u==3&&(Nv(this.U,this.V,"tick",this.mb),this.V.start())):(si(this.j,this.m,o,null),Pu(this,o)),u==4&&ys(this),this.i&&!this.J&&(u==4?u0(this.l,this):(this.i=!1,fo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),ys(this),_r(this)}}}catch{}finally{}};function Vv(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Bv(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=D1(t,n),i==Ma){e==4&&(t.o=4,ut(14),s=!1),si(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ou){t.o=4,ut(15),si(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else si(t.j,t.m,i,null),Pu(t,i);Vv(t)&&i!=Ma&&i!=Ou&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ut(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),wd(e),e.L=!0,ut(11))):(si(t.j,t.m,n,"[Invalid Chunked Response]"),ys(t),_r(t))}x.mb=function(){if(this.g){var t=vn(this.g),e=this.g.ja();this.C<e.length&&(xl(this),Bv(this,t,e),this.i&&t!=4&&fo(this))}};function D1(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ma:(n=Number(e.substring(n,s)),isNaN(n)?Ou:(s+=1,s+n>e.length?Ma:(e=e.substr(s,n),t.C=s+n,e)))}x.cancel=function(){this.J=!0,ys(this)};function fo(t){t.Y=Date.now()+t.P,jv(t,t.P)}function jv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=co(nt(t.lb,t),e)}function xl(t){t.B&&(j.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(x1(this.j,this.A),this.L!=2&&($r(),ut(17)),ys(this),this.o=2,_r(this)):jv(this,this.Y-t)};function _r(t){t.l.H==0||t.J||u0(t.l,t)}function ys(t){xl(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,cd(t.V),Ov(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Pu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Mu(n.h,t))){if(!t.K&&Mu(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ua(n),Pl(n);else break e;vd(n),ut(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=co(nt(n.ib,n),6e3));if(1>=Yv(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else vs(n,11)}else if((t.K||n.g==t)&&Ua(n),!Da(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const u=c[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=c[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(pd(r,r.h),r.h=null))}if(s.F){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.Da=y,ve(s.G,s.F,y))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=f0(s,s.I?s.oa:null,s.Y),o.K){Xv(s.h,o);var a=o,l=s.K;l&&a.setTimeout(l),a.B&&(xl(a),fo(a)),s.g=o}else l0(s);0<n.i.length&&Ml(n)}else c[0]!="stop"&&c[0]!="close"||vs(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?vs(n,7):yd(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}$r(4)}catch{}}function P1(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(El(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function M1(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(El(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Hv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(El(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=M1(t),s=P1(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var zv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function L1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function As(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof As){this.h=e!==void 0?e:t.h,La(this,t.j),this.s=t.s,this.g=t.g,Fa(this,t.m),this.l=t.l,e=t.i;var n=new Vr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),og(this,n),this.o=t.o}else t&&(n=String(t).match(zv))?(this.h=!!e,La(this,n[1]||"",!0),this.s=or(n[2]||""),this.g=or(n[3]||"",!0),Fa(this,n[4]),this.l=or(n[5]||"",!0),og(this,n[6]||"",!0),this.o=or(n[7]||"")):(this.h=!!e,this.i=new Vr(null,this.h))}As.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ar(e,ag,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ar(e,ag,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ar(n,n.charAt(0)=="/"?$1:U1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ar(n,B1)),t.join("")};function Sn(t){return new As(t)}function La(t,e,n){t.j=n?or(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function og(t,e,n){e instanceof Vr?(t.i=e,j1(t.i,t.h)):(n||(e=ar(e,V1)),t.i=new Vr(e,t.h))}function ve(t,e,n){t.i.set(e,n)}function Nl(t){return ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function or(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ar(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,F1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function F1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ag=/[#\/\?@]/g,U1=/[#\?:]/g,$1=/[#\?]/g,V1=/[#\?@]/g,B1=/#/g;function Vr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function is(t){t.g||(t.g=new Map,t.h=0,t.i&&L1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Vr.prototype;x.add=function(t,e){is(this),this.i=null,t=Wi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wv(t,e){is(t),e=Wi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function qv(t,e){return is(t),e=Wi(t,e),t.g.has(e)}x.forEach=function(t,e){is(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};x.sa=function(){is(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};x.Z=function(t){is(this);let e=[];if(typeof t=="string")qv(this,t)&&(e=e.concat(this.g.get(Wi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return is(this),this.i=null,t=Wi(this,t),qv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Kv(t,e,n){Wv(t,e),0<n.length&&(t.i=null,t.g.set(Wi(t,e),td(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Wi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function j1(t,e){e&&!t.j&&(is(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Wv(this,s),Kv(this,i,n))},t)),t.j=e}var H1=class{constructor(t,e){this.h=t,this.g=e}};function Gv(t){this.l=t||z1,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var z1=10;function Qv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Yv(t){return t.h?1:t.g?t.g.size:0}function Mu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function pd(t,e){t.g?t.g.add(e):t.h=e}function Xv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Gv.prototype.cancel=function(){if(this.i=Jv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Jv(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return td(t.i)}function gd(){}gd.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};gd.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function W1(){this.g=new gd}function q1(t,e,n){const s=n||"";try{Hv(t,function(i,r){let o=i;ao(i)&&(o=ld(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function K1(t,e){const n=new Sl;if(j.Image){const s=new Image;s.onload=Uo(Vo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Uo(Vo,n,s,"TestLoadImage: error",!1,e),s.onabort=Uo(Vo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Uo(Vo,n,s,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Vo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function po(t){this.l=t.fc||null,this.j=t.ob||!1}Be(po,hd);po.prototype.g=function(){return new Ol(this.l,this.j)};po.prototype.i=function(t){return function(){return t}}({});function Ol(t,e){Ve.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=md,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(Ol,Ve);var md=0;x=Ol.prototype;x.open=function(t,e){if(this.readyState!=md)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Br(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,go(this)),this.readyState=md};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Br(this)),this.g&&(this.readyState=3,Br(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Zv(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Zv(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?go(this):Br(this),this.readyState==3&&Zv(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,go(this))};x.Ya=function(t){this.g&&(this.response=t,go(this))};x.ka=function(){this.g&&go(this)};function go(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Br(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Br(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ol.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var G1=j.JSON.parse;function Ce(t){Ve.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=e0,this.L=this.M=!1}Be(Ce,Ve);var e0="",Q1=/^https?$/i,Y1=["POST","PUT"];x=Ce.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Nu.g(),this.C=this.u?rg(this.u):rg(Nu),this.g.onreadystatechange=nt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){lg(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=j.FormData&&t instanceof j.FormData,!(0<=gv(Y1,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{s0(this),0<this.B&&((this.L=X1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.ua,this)):this.A=ud(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){lg(this,r)}};function X1(t){return Ai&&p1()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof ed<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function lg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,t0(t),Dl(t)}function t0(t){t.F||(t.F=!0,qe(t,"complete"),qe(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),Dl(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dl(this,!0)),Ce.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?n0(this):this.kb())};x.kb=function(){n0(this)};function n0(t){if(t.h&&typeof ed<"u"&&(!t.C[1]||vn(t)!=4||t.da()!=2)){if(t.v&&vn(t)==4)ud(t.La,0,t);else if(qe(t,"readystatechange"),vn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.I).match(zv)[1]||null;if(!i&&j.self&&j.self.location){var r=j.self.location.protocol;i=r.substr(0,r.length-1)}s=!Q1.test(i?i.toLowerCase():"")}n=s}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var o=2<vn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",t0(t)}}finally{Dl(t)}}}}function Dl(t,e){if(t.g){s0(t);const n=t.g,s=t.C[0]?Oa:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function s0(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function vn(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),G1(e)}};function cg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case e0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function i0(t){let e="";return sd(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function _d(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=i0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ve(t,e,n))}function nr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function r0(t){this.Ga=0,this.i=[],this.j=new Sl,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=nr("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=nr("baseRetryDelayMs",5e3,t),this.hb=nr("retryDelaySeedMs",1e4,t),this.eb=nr("forwardChannelMaxRetries",2,t),this.xa=nr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new Gv(t&&t.concurrentRequestLimit),this.Ja=new W1,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}x=r0.prototype;x.qa=8;x.H=1;function yd(t){if(o0(t),t.H==3){var e=t.W++,n=Sn(t.G);ve(n,"SID",t.J),ve(n,"RID",e),ve(n,"TYPE","terminate"),mo(t,n),e=new ho(t,t.j,e,void 0),e.L=2,e.v=Nl(Sn(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=p0(e.l,null),e.g.ha(e.v)),e.G=Date.now(),fo(e)}d0(t)}function Pl(t){t.g&&(wd(t),t.g.cancel(),t.g=null)}function o0(t){Pl(t),t.u&&(j.clearTimeout(t.u),t.u=null),Ua(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function Ml(t){Qv(t.h)||t.m||(t.m=!0,kv(t.Na,t),t.C=0)}function J1(t,e){return Yv(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=co(nt(t.Na,t,e),h0(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ho(this,this.j,t,void 0);let r=this.s;if(this.U&&(r?(r=wv(r),Ev(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=a0(this,i,e),n=Sn(this.G),ve(n,"RID",t),ve(n,"CVER",22),this.F&&ve(n,"X-HTTP-Session-Id",this.F),mo(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(i0(r)))+"&"+e:this.o&&_d(n,this.o,r)),pd(this.h,i),this.bb&&ve(n,"TYPE","init"),this.P?(ve(n,"$req",e),ve(n,"SID","null"),i.ba=!0,Du(i,n,null)):Du(i,n,e),this.H=2}}else this.H==3&&(t?ug(this,t):this.i.length==0||Qv(this.h)||ug(this))};function ug(t,e){var n;e?n=e.m:n=t.W++;const s=Sn(t.G);ve(s,"SID",t.J),ve(s,"RID",n),ve(s,"AID",t.V),mo(t,s),t.o&&t.s&&_d(s,t.o,t.s),n=new ho(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=a0(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),pd(t.h,n),Du(n,s,e)}function mo(t,e){t.ma&&sd(t.ma,function(n,s){ve(e,s,n)}),t.l&&Hv({},function(n,s){ve(e,s,n)})}function a0(t,e,n){n=Math.min(t.i.length,n);var s=t.l?nt(t.l.Va,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{q1(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function l0(t){t.g||t.u||(t.ba=1,kv(t.Ma,t),t.A=0)}function vd(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=co(nt(t.Ma,t),h0(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,c0(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=co(nt(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ut(10),Pl(this),c0(this))};function wd(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function c0(t){t.g=new ho(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Sn(t.wa);ve(e,"RID","rpc"),ve(e,"SID",t.J),ve(e,"CI",t.M?"0":"1"),ve(e,"AID",t.V),ve(e,"TYPE","xmlhttp"),mo(t,e),t.o&&t.s&&_d(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Nl(Sn(e)),n.s=null,n.S=!0,$v(n,t)}x.ib=function(){this.v!=null&&(this.v=null,Pl(this),vd(this),ut(19))};function Ua(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function u0(t,e){var n=null;if(t.g==e){Ua(t),wd(t),t.g=null;var s=2}else if(Mu(t.h,e))n=e.F,Xv(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=Al(),qe(s,new Mv(s,n)),Ml(t)}else l0(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(s==1&&J1(t,e)||s==2&&vd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:vs(t,5);break;case 4:vs(t,10);break;case 3:vs(t,6);break;default:vs(t,2)}}}function h0(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function vs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=nt(t.pb,t);n||(n=new As("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||La(n,"https"),Nl(n)),K1(n.toString(),s)}else ut(2);t.H=0,t.l&&t.l.za(e),d0(t),o0(t)}x.pb=function(t){t?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function d0(t){if(t.H=0,t.pa=[],t.l){const e=Jv(t.h);(e.length!=0||t.i.length!=0)&&(Zp(t.pa,e),Zp(t.pa,t.i),t.h.i.length=0,td(t.i),t.i.length=0),t.l.ya()}}function f0(t,e,n){var s=n instanceof As?Sn(n):new As(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Fa(s,s.m);else{var i=j.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new As(null,void 0);s&&La(r,s),e&&(r.g=e),i&&Fa(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&ve(s,n,e),ve(s,"VER",t.qa),mo(t,s),s}function p0(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ce(new po({ob:!0})):new Ce(t.va),e.Oa(t.I),e}function g0(){}x=g0.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.Va=function(){};function $a(){if(Ai&&!(10<=Number(g1)))throw Error("Environmental error: no available transport.")}$a.prototype.g=function(t,e){return new Tt(t,e)};function Tt(t,e){Ve.call(this),this.g=new r0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Da(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Da(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qi(this)}Be(Tt,Ve);Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;ut(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=f0(t,null,t.Y),Ml(t)};Tt.prototype.close=function(){yd(this.g)};Tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ld(t),t=n);e.i.push(new H1(e.fb++,t)),e.H==3&&Ml(e)};Tt.prototype.N=function(){this.g.l=null,delete this.j,yd(this.g),delete this.g,Tt.$.N.call(this)};function m0(t){dd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(m0,dd);function _0(){fd.call(this),this.status=1}Be(_0,fd);function qi(t){this.g=t}Be(qi,g0);qi.prototype.Ba=function(){qe(this.g,"a")};qi.prototype.Aa=function(t){qe(this.g,new m0(t))};qi.prototype.za=function(t){qe(this.g,new _0)};qi.prototype.ya=function(){qe(this.g,"b")};function Z1(){this.blockSize=-1}function jt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Be(jt,Z1);jt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Rc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}jt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)Rc(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){Rc(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){Rc(this,s),i=0;break}}this.h=i,this.i+=e};jt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function le(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var ex={};function Ed(t){return-128<=t&&128>t?mv(ex,t,function(e){return new le([e|0],0>e?-1:0)}):new le([t|0],0>t?-1:0)}function Jt(t){if(isNaN(t)||!isFinite(t))return pi;if(0>t)return He(Jt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Lu;return new le(e,0)}function y0(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return He(y0(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jt(Math.pow(e,8)),s=pi,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=Jt(Math.pow(e,r)),s=s.R(r).add(Jt(o))):(s=s.R(n),s=s.add(Jt(o)))}return s}var Lu=4294967296,pi=Ed(0),Fu=Ed(1),hg=Ed(16777216);x=le.prototype;x.ea=function(){if(Ct(this))return-He(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Lu+s)*e,e*=Lu}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(wn(this))return"0";if(Ct(this))return"-"+He(this).toString(t);for(var e=Jt(Math.pow(t,6)),n=this,s="";;){var i=Ba(n,e).g;n=Va(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,wn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function wn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ct(t){return t.h==-1}x.X=function(t){return t=Va(this,t),Ct(t)?-1:wn(t)?0:1};function He(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new le(n,~t.h).add(Fu)}x.abs=function(){return Ct(this)?He(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new le(n,n[n.length-1]&-2147483648?-1:0)};function Va(t,e){return t.add(He(e))}x.R=function(t){if(wn(this)||wn(t))return pi;if(Ct(this))return Ct(t)?He(this).R(He(t)):He(He(this).R(t));if(Ct(t))return He(this.R(He(t)));if(0>this.X(hg)&&0>t.X(hg))return Jt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,Bo(n,2*s+2*i),n[2*s+2*i+1]+=r*l,Bo(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Bo(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Bo(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new le(n,0)};function Bo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function sr(t,e){this.g=t,this.h=e}function Ba(t,e){if(wn(e))throw Error("division by zero");if(wn(t))return new sr(pi,pi);if(Ct(t))return e=Ba(He(t),e),new sr(He(e.g),He(e.h));if(Ct(e))return e=Ba(t,He(e)),new sr(He(e.g),e.h);if(30<t.g.length){if(Ct(t)||Ct(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Fu,s=e;0>=s.X(t);)n=dg(n),s=dg(s);var i=Ys(n,1),r=Ys(s,1);for(s=Ys(s,2),n=Ys(n,2);!wn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Ys(s,1),n=Ys(n,1)}return e=Va(t,i.R(e)),new sr(i,e)}for(i=pi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Jt(n),o=r.R(e);Ct(o)||0<o.X(t);)n-=s,r=Jt(n),o=r.R(e);wn(r)&&(r=Fu),i=i.add(r),t=Va(t,o)}return new sr(i,t)}x.gb=function(t){return Ba(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new le(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new le(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new le(n,this.h^t.h)};function dg(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new le(n,t.h)}function Ys(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new le(i,t.h)}$a.prototype.createWebChannel=$a.prototype.g;Tt.prototype.send=Tt.prototype.u;Tt.prototype.open=Tt.prototype.m;Tt.prototype.close=Tt.prototype.close;kl.NO_ERROR=0;kl.TIMEOUT=8;kl.HTTP_ERROR=6;Lv.COMPLETE="complete";Fv.EventType=uo;uo.OPEN="a";uo.CLOSE="b";uo.ERROR="c";uo.MESSAGE="d";Ve.prototype.listen=Ve.prototype.O;Ce.prototype.listenOnce=Ce.prototype.P;Ce.prototype.getLastError=Ce.prototype.Sa;Ce.prototype.getLastErrorCode=Ce.prototype.Ia;Ce.prototype.getStatus=Ce.prototype.da;Ce.prototype.getResponseJson=Ce.prototype.Wa;Ce.prototype.getResponseText=Ce.prototype.ja;Ce.prototype.send=Ce.prototype.ha;Ce.prototype.setWithCredentials=Ce.prototype.Oa;jt.prototype.digest=jt.prototype.l;jt.prototype.reset=jt.prototype.reset;jt.prototype.update=jt.prototype.j;le.prototype.add=le.prototype.add;le.prototype.multiply=le.prototype.R;le.prototype.modulo=le.prototype.gb;le.prototype.compare=le.prototype.X;le.prototype.toNumber=le.prototype.ea;le.prototype.toString=le.prototype.toString;le.prototype.getBits=le.prototype.D;le.fromNumber=Jt;le.fromString=y0;var tx=function(){return new $a},nx=function(){return Al()},xc=kl,sx=Lv,ix=Bs,fg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},rx=po,jo=Fv,ox=Ce,ax=jt,gi=le;const pg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new Xr("@firebase/firestore");function gg(){return Ls.logLevel}function P(t,...e){if(Ls.logLevel<=ne.DEBUG){const n=e.map(Td);Ls.debug(`Firestore (${Ki}): ${t}`,...n)}}function An(t,...e){if(Ls.logLevel<=ne.ERROR){const n=e.map(Td);Ls.error(`Firestore (${Ki}): ${t}`,...n)}}function ki(t,...e){if(Ls.logLevel<=ne.WARN){const n=e.map(Td);Ls.warn(`Firestore (${Ki}): ${t}`,...n)}}function Td(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t="Unexpected state"){const e=`FIRESTORE (${Ki}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function _e(t,e){t||H()}function q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class cx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ux{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Gn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(_e(typeof s.accessToken=="string"),new v0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new Ge(e)}}class hx{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class dx{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new hx(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class px{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.T=n.token,new fx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=gx(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function se(t,e){return t<e?-1:t>e?1:0}function Ri(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new De(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new De(0,0))}static max(){return new W(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,s){n===void 0?n=0:n>e.length&&H(),s===void 0?s=e.length-n:s>e.length-n&&H(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return jr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends jr{construct(e,n,s){return new be(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new be(n)}static emptyPath(){return new be([])}}const mx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends jr{construct(e,n,s){return new Ze(e,n,s)}static isValidIdentifier(e){return mx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new U(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new U(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(be.fromString(e))}static fromName(e){return new F(be.fromString(e).popFirst(5))}static empty(){return new F(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new be(e.slice()))}}function _x(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(s===1e9?new De(n+1,0):new De(n,s));return new Zn(i,F.empty(),e)}function yx(t){return new Zn(t.readTime,t.key,-1)}class Zn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Zn(W.min(),F.empty(),-1)}static max(){return new Zn(W.max(),F.empty(),-1)}}function vx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ex{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==wx)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(i=>i?T.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new T((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new T((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function yo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Id.ct=-1;function Ll(t){return t==null}function ja(t){return t===0&&1/t==-1/0}function Tx(t){return typeof t=="number"&&Number.isInteger(t)&&!ja(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function E0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ho(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ho(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ho(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ho(this.root,e,this.comparator,!0)}}class Ho{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??je.RED,this.left=i??je.EMPTY,this.right=r??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new je(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,s,i){return this}insert(t,e,n){return new je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _g(this.data.getIterator())}getIteratorFrom(e){return new _g(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class _g{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new it(Ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ri(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new T0("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const Ix=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(t){if(_e(!!t),typeof t=="string"){let e=0;const n=Ix.exec(t);if(_e(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fs(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cd(t){const e=t.mapValue.fields.__previous_value__;return bd(e)?Cd(e):e}function Hr(t){const e=es(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class zr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bd(t)?4:Cx(t)?9007199254740991:10:H()}function on(t,e){if(t===e)return!0;const n=Us(t);if(n!==Us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hr(t).isEqual(Hr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=es(s.timestampValue),o=es(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Fs(s.bytesValue).isEqual(Fs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return xe(s.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return xe(s.integerValue)===xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=xe(s.doubleValue),o=xe(i.doubleValue);return r===o?ja(r)===ja(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ri(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(mg(r)!==mg(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!on(r[a],o[a])))return!1;return!0}(t,e);default:return H()}}function Wr(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function xi(t,e){if(t===e)return 0;const n=Us(t),s=Us(e);if(n!==s)return se(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=xe(i.integerValue||i.doubleValue),a=xe(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return yg(t.timestampValue,e.timestampValue);case 4:return yg(Hr(t),Hr(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Fs(i),a=Fs(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=se(o[l],a[l]);if(c!==0)return c}return se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=se(xe(i.latitude),xe(r.latitude));return o!==0?o:se(xe(i.longitude),xe(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=xi(o[l],a[l]);if(c)return c}return se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===zo.mapValue&&r===zo.mapValue)return 0;if(i===zo.mapValue)return 1;if(r===zo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=se(a[u],c[u]);if(h!==0)return h;const d=xi(o[a[u]],l[c[u]]);if(d!==0)return d}return se(a.length,c.length)}(t.mapValue,e.mapValue);default:throw H()}}function yg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=es(t),s=es(e),i=se(n.seconds,s.seconds);return i!==0?i:se(n.nanos,s.nanos)}function Ni(t){return Uu(t)}function Uu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=es(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Fs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Uu(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Uu(s.fields[a])}`;return r+"}"}(t.mapValue):H();var e,n}function $u(t){return!!t&&"integerValue"in t}function Sd(t){return!!t&&"arrayValue"in t}function vg(t){return!!t&&"nullValue"in t}function wg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sa(t){return!!t&&"mapValue"in t}function yr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return js(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=yr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Cx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!sa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yr(n)}setAll(e){let n=Ze.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=yr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());sa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];sa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){js(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new vt(yr(this.value))}}function I0(t){const e=[];return js(t.fields,(n,s)=>{const i=new Ze([n]);if(sa(s)){const r=I0(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Xe(e,0,W.min(),W.min(),W.min(),vt.empty(),0)}static newFoundDocument(e,n,s,i){return new Xe(e,1,n,W.min(),s,i,0)}static newNoDocument(e,n){return new Xe(e,2,n,W.min(),W.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new Xe(e,3,n,W.min(),W.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){this.position=e,this.inclusive=n}}function Eg(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=F.comparator(F.fromName(o.referenceValue),n.key):s=xi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Tg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n="asc"){this.field=e,this.dir=n}}function Sx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{}class Oe extends b0{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new kx(e,n,s):n==="array-contains"?new Nx(e,s):n==="in"?new Ox(e,s):n==="not-in"?new Dx(e,s):n==="array-contains-any"?new Px(e,s):new Oe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Rx(e,s):new xx(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xi(n,this.value)):n!==null&&Us(this.value)===Us(n)&&this.matchesComparison(xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class an extends b0{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new an(e,n)}matches(e){return C0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function C0(t){return t.op==="and"}function S0(t){return Ax(t)&&C0(t)}function Ax(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function Vu(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+Ni(t.value);if(S0(t))return t.filters.map(e=>Vu(e)).join(",");{const e=t.filters.map(n=>Vu(n)).join(",");return`${t.op}(${e})`}}function A0(t,e){return t instanceof Oe?function(n,s){return s instanceof Oe&&n.op===s.op&&n.field.isEqual(s.field)&&on(n.value,s.value)}(t,e):t instanceof an?function(n,s){return s instanceof an&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&A0(r,s.filters[o]),!0):!1}(t,e):void H()}function k0(t){return t instanceof Oe?function(e){return`${e.field.canonicalString()} ${e.op} ${Ni(e.value)}`}(t):t instanceof an?function(e){return e.op.toString()+" {"+e.getFilters().map(k0).join(" ,")+"}"}(t):"Filter"}class kx extends Oe{constructor(e,n,s){super(e,n,s),this.key=F.fromName(s.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.matchesComparison(n)}}class Rx extends Oe{constructor(e,n){super(e,"in",n),this.keys=R0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xx extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=R0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function R0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>F.fromName(s.referenceValue))}class Nx extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sd(n)&&Wr(n.arrayValue,this.value)}}class Ox extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wr(this.value.arrayValue,n)}}class Dx extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Wr(this.value.arrayValue,n)}}class Px extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Wr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Ig(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Mx(t,e,n,s,i,r,o)}function Ad(t){const e=q(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Vu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ll(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ni(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ni(s)).join(",")),e.ft=n}return e.ft}function kd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Sx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!A0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tg(t.startAt,e.startAt)&&Tg(t.endAt,e.endAt)}function Bu(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function Lx(t,e,n,s,i,r,o,a){return new Fl(t,e,n,s,i,r,o,a)}function Rd(t){return new Fl(t)}function bg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fx(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ux(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function $x(t){return t.collectionGroup!==null}function mi(t){const e=q(t);if(e.dt===null){e.dt=[];const n=Ux(e),s=Fx(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new vr(n)),e.dt.push(new vr(Ze.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new vr(Ze.keyField(),r))}}}return e.dt}function kn(t){const e=q(t);if(!e._t)if(e.limitType==="F")e._t=Ig(e.path,e.collectionGroup,mi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of mi(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new vr(r.field,o))}const s=e.endAt?new Ha(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ha(e.startAt.position,e.startAt.inclusive):null;e._t=Ig(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function ju(t,e,n){return new Fl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ul(t,e){return kd(kn(t),kn(e))&&t.limitType===e.limitType}function x0(t){return`${Ad(kn(t))}|lt:${t.limitType}`}function Hu(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>k0(s)).join(", ")}]`),Ll(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ni(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ni(s)).join(",")),`Target(${n})`}(kn(t))}; limitType=${t.limitType})`}function $l(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of mi(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Eg(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,mi(n),s)||n.endAt&&!function(i,r,o){const a=Eg(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,mi(n),s))}(t,e)}function Vx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function N0(t){return(e,n)=>{let s=!1;for(const i of mi(t)){const r=Bx(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Bx(t,e,n){const s=t.field.isKeyField()?F.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?xi(a,l):H()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){js(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return E0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=new Te(F.comparator);function Rn(){return jx}const O0=new Te(F.comparator);function lr(...t){let e=O0;for(const n of t)e=e.insert(n.key,n);return e}function D0(t){let e=O0;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ws(){return wr()}function P0(){return wr()}function wr(){return new Gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Hx=new Te(F.comparator),zx=new it(F.comparator);function Y(...t){let e=zx;for(const n of t)e=e.add(n);return e}const Wx=new it(se);function qx(){return Wx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ja(e)?"-0":e}}function L0(t){return{integerValue:""+t}}function Kx(t,e){return Tx(e)?L0(e):M0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this._=void 0}}function Gx(t,e,n){return t instanceof za?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&bd(i)&&(i=Cd(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof qr?U0(t,e):t instanceof Kr?$0(t,e):function(s,i){const r=F0(s,i),o=Cg(r)+Cg(s.wt);return $u(r)&&$u(s.wt)?L0(o):M0(s.serializer,o)}(t,e)}function Qx(t,e,n){return t instanceof qr?U0(t,e):t instanceof Kr?$0(t,e):n}function F0(t,e){return t instanceof Wa?$u(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class za extends Vl{}class qr extends Vl{constructor(e){super(),this.elements=e}}function U0(t,e){const n=V0(e);for(const s of t.elements)n.some(i=>on(i,s))||n.push(s);return{arrayValue:{values:n}}}class Kr extends Vl{constructor(e){super(),this.elements=e}}function $0(t,e){let n=V0(e);for(const s of t.elements)n=n.filter(i=>!on(i,s));return{arrayValue:{values:n}}}class Wa extends Vl{constructor(e,n){super(),this.serializer=e,this.wt=n}}function Cg(t){return xe(t.integerValue||t.doubleValue)}function V0(t){return Sd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Yx(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof qr&&s instanceof qr||n instanceof Kr&&s instanceof Kr?Ri(n.elements,s.elements,on):n instanceof Wa&&s instanceof Wa?on(n.wt,s.wt):n instanceof za&&s instanceof za}(t.transform,e.transform)}class Xx{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ia(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bl{}function B0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new H0(t.key,Tn.none()):new jl(t.key,t.data,Tn.none());{const n=t.data,s=vt.empty();let i=new it(Ze.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Hs(t.key,s,new Lt(i.toArray()),Tn.none())}}function Jx(t,e,n){t instanceof jl?function(s,i,r){const o=s.value.clone(),a=Ag(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Hs?function(s,i,r){if(!ia(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ag(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(j0(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Er(t,e,n,s){return t instanceof jl?function(i,r,o,a){if(!ia(i.precondition,r))return o;const l=i.value.clone(),c=kg(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Hs?function(i,r,o,a){if(!ia(i.precondition,r))return o;const l=kg(i.fieldTransforms,a,r),c=r.data;return c.setAll(j0(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return ia(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Zx(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=F0(s.transform,i||null);r!=null&&(n===null&&(n=vt.empty()),n.set(s.field,r))}return n||null}function Sg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ri(n,s,(i,r)=>Yx(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class jl extends Bl{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hs extends Bl{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function j0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ag(t,e,n){const s=new Map;_e(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Qx(o,a,n[i]))}return s}function kg(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Gx(r,o,e))}return s}class H0 extends Bl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eN extends Bl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Jx(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Er(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Er(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=P0();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=B0(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&Ri(this.mutations,e.mutations,(n,s)=>Sg(n,s))&&Ri(this.baseMutations,e.baseMutations,(n,s)=>Sg(n,s))}}class xd{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){_e(e.mutations.length===s.length);let i=Hx;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new xd(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,J;function iN(t){switch(t){default:return H();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function z0(t){if(t===void 0)return An("GRPC error has no .code"),I.UNKNOWN;switch(t){case Re.OK:return I.OK;case Re.CANCELLED:return I.CANCELLED;case Re.UNKNOWN:return I.UNKNOWN;case Re.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Re.INTERNAL:return I.INTERNAL;case Re.UNAVAILABLE:return I.UNAVAILABLE;case Re.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Re.NOT_FOUND:return I.NOT_FOUND;case Re.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Re.ABORTED:return I.ABORTED;case Re.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Re.DATA_LOSS:return I.DATA_LOSS;default:return H()}}(J=Re||(Re={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Wo}static getOrCreateInstance(){return Wo===null&&(Wo=new Nd),Wo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Wo=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=new gi([4294967295,4294967295],0);function Rg(t){const e=rN().encode(t),n=new ax;return n.update(e),new Uint8Array(n.digest())}function xg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new gi([n,s],0),new gi([i,r],0)]}class Od{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new cr(`Invalid padding: ${n}`);if(s<0)throw new cr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new cr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new cr(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=gi.fromNumber(this.yt)}Tt(e,n,s){let i=e.add(n.multiply(gi.fromNumber(s)));return i.compare(oN)===1&&(i=new gi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=Rg(e),[s,i]=xg(n);for(let r=0;r<this.hashCount;r++){const o=this.Tt(s,i,r);if(!this.Et(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Od(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=Rg(e),[s,i]=xg(n);for(let r=0;r<this.hashCount;r++){const o=this.Tt(s,i,r);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class cr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,vo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Hl(W.min(),i,new Te(se),Rn(),Y())}}class vo{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new vo(s,n,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n,s,i){this.vt=e,this.removedTargetIds=n,this.key=s,this.Pt=i}}class W0{constructor(e,n){this.targetId=e,this.bt=n}}class q0{constructor(e,n,s=ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Ng{constructor(){this.Vt=0,this.St=Dg(),this.Dt=ot.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=Y(),n=Y(),s=Y();return this.St.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:H()}}),new vo(this.Dt,this.Ct,e,n,s)}$t(){this.xt=!1,this.St=Dg()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class aN{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Rn(),this.jt=Og(),this.zt=new Te(se)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const s=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&s.Mt(e.resumeToken);break;case 1:s.qt(),s.Nt||s.$t(),s.Mt(e.resumeToken);break;case 2:s.qt(),s.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(s.Ut(),s.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),s.Mt(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((s,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const s=e.targetId,i=e.bt.count,r=this.ne(s);if(r){const o=r.target;if(Bu(o))if(i===0){const a=new F(o.path);this.Jt(s,a,Xe.newNoDocument(a,W.min()))}else _e(i===1);else{const a=this.se(s);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(s);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(s,c)}(n=Nd.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,h){var d,p,m,y,b,O;const K={localCacheCount:u,existenceFilterCount:h.count},R=h.unchangedNames;return R&&(K.bloomFilter={applied:c===0,hashCount:(d=R==null?void 0:R.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(y=(m=(p=R==null?void 0:R.bits)===null||p===void 0?void 0:p.bitmap)===null||m===void 0?void 0:m.length)!==null&&y!==void 0?y:0,padding:(O=(b=R==null?void 0:R.bits)===null||b===void 0?void 0:b.padding)!==null&&O!==void 0?O:0}),K}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:s,count:i}=e.bt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=Fs(r).toUint8Array()}catch(u){if(u instanceof T0)return ki("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new Od(l,o,a)}catch(u){return ki(u instanceof cr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.yt===0?1:i!==n-this.re(e.targetId,c)?2:0}re(e,n){const s=this.Kt.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.At(a)||(this.Jt(e,r,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((r,o)=>{const a=this.ne(o);if(a){if(r.current&&Bu(a.target)){const l=new F(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,Xe.newNoDocument(l,e))}r.kt&&(n.set(o,r.Ot()),r.$t())}});let s=Y();this.jt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.ne(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.Qt.forEach((r,o)=>o.setReadTime(e));const i=new Hl(e,n,this.zt,this.Qt,s);return this.Qt=Rn(),this.jt=Og(),this.zt=new Te(se),i}Ht(e,n){if(!this.Zt(e))return;const s=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,s),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,s){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),s&&(this.Qt=this.Qt.insert(n,s))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new Ng,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new it(se),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new Ng),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function Og(){return new Te(F.comparator)}function Dg(){return new Te(F.comparator)}const lN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),uN=(()=>({and:"AND",or:"OR"}))();class hN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zu(t,e){return t.useProto3Json||Ll(e)?e:{value:e}}function qa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function K0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dN(t,e){return qa(t,e.toTimestamp())}function tn(t){return _e(!!t),W.fromTimestamp(function(e){const n=es(e);return new De(n.seconds,n.nanos)}(t))}function Dd(t,e){return function(n){return new be(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function G0(t){const e=be.fromString(t);return _e(J0(e)),e}function Wu(t,e){return Dd(t.databaseId,e.path)}function Nc(t,e){const n=G0(e);if(n.get(1)!==t.databaseId.projectId)throw new U(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(Q0(n))}function qu(t,e){return Dd(t.databaseId,e)}function fN(t){const e=G0(t);return e.length===4?be.emptyPath():Q0(e)}function Ku(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Q0(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Pg(t,e,n){return{name:Wu(t,e),fields:n.value.mapValue.fields}}function pN(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(_e(c===void 0||typeof c=="string"),ot.fromBase64String(c||"")):(_e(c===void 0||c instanceof Uint8Array),ot.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?I.UNKNOWN:z0(l.code);return new U(c,l.message||"")}(o);n=new q0(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Nc(t,s.document.name),r=tn(s.document.updateTime),o=s.document.createTime?tn(s.document.createTime):W.min(),a=new vt({mapValue:{fields:s.document.fields}}),l=Xe.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new ra(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Nc(t,s.document),r=s.readTime?tn(s.readTime):W.min(),o=Xe.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ra([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Nc(t,s.document),r=s.removedTargetIds||[];n=new ra([],r,i,null)}else{if(!("filter"in e))return H();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new sN(i,r),a=s.targetId;n=new W0(a,o)}}return n}function gN(t,e){let n;if(e instanceof jl)n={update:Pg(t,e.key,e.value)};else if(e instanceof H0)n={delete:Wu(t,e.key)};else if(e instanceof Hs)n={update:Pg(t,e.key,e.data),updateMask:bN(e.fieldMask)};else{if(!(e instanceof eN))return H();n={verify:Wu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof za)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof qr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Kr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Wa)return{fieldPath:r.field.canonicalString(),increment:o.wt};throw H()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:dN(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(t,e.precondition)),n}function mN(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?tn(s.updateTime):tn(i);return r.isEqual(W.min())&&(r=tn(i)),new Xx(r,s.transformResults||[])}(n,e))):[]}function _N(t,e){return{documents:[qu(t,e.path)]}}function yN(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=qu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=qu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return X0(an.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Js(u.field),direction:EN(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=zu(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function vN(t){let e=fN(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){_e(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Y0(u);return h instanceof an&&S0(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new vr(Zs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ll(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Ha(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Ha(d,h)}(n.endAt)),Lx(e,i,o,r,a,"F",l,c)}function wN(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Y0(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Zs(e.unaryFilter.field);return Oe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Zs(e.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zs(e.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Zs(e.unaryFilter.field);return Oe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(e){return Oe.create(Zs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return an.create(e.compositeFilter.filters.map(n=>Y0(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(t):H()}function EN(t){return lN[t]}function TN(t){return cN[t]}function IN(t){return uN[t]}function Js(t){return{fieldPath:t.canonicalString()}}function Zs(t){return Ze.fromServerFormat(t.fieldPath)}function X0(t){return t instanceof Oe?function(e){if(e.op==="=="){if(wg(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NAN"}};if(vg(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(wg(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NOT_NAN"}};if(vg(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Js(e.field),op:TN(e.op),value:e.value}}}(t):t instanceof an?function(e){const n=e.getFilters().map(s=>X0(s));return n.length===1?n[0]:{compositeFilter:{op:IN(e.op),filters:n}}}(t):H()}function bN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function J0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n,s,i,r=W.min(),o=W.min(),a=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.le=e}}function SN(t){const e=vN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ju(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(){this.sn=new kN}addToCollectionParentIndex(e,n){return this.sn.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Zn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Zn.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class kN{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new it(be.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new it(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Oi(0)}static kn(){return new Oi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(){this.changes=new Gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Er(s.mutation,i,Lt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Y()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Y()){const i=ws();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=lr();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ws();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Y()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Rn();const o=wr(),a=wr();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Hs)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Er(u.mutation,c,u.mutation.getFieldMask(),De.now())):o.set(c.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new xN(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=wr();let i=new Te((o,a)=>o-a),r=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Lt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||Y()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=P0();u.forEach(d=>{if(!r.has(d)){const p=B0(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return F.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$x(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):T.resolve(ws());let a=-1,l=r;return o.next(c=>T.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Y())).next(u=>({batchId:a,changes:D0(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(s=>{let i=lr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=lr();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const l=function(c,u){return new Fl(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Xe.newInvalidDocument(c)))});let o=lr();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Er(c.mutation,l,Lt.empty(),De.now()),$l(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return T.resolve(this.us.get(n))}saveBundleMetadata(e,n){var s;return this.us.set(n.id,{id:(s=n).id,version:s.version,createTime:tn(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(s){return{name:s.name,query:SN(s.bundledQuery),readTime:tn(s.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.overlays=new Te(F.comparator),this.hs=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ws();return T.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.de(e,n,r)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.hs.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.hs.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const i=ws(),r=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Te((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=ws(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=ws(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return T.resolve(a)}de(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(s.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new nN(n,s));let r=this.hs.get(n);r===void 0&&(r=Y(),this.hs.set(n,r)),this.hs.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.ls=new it(Fe.fs),this.ds=new it(Fe._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const s=new Fe(e,n);this.ls=this.ls.add(s),this.ds=this.ds.add(s)}ws(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gs(new Fe(e,n))}ys(e,n){e.forEach(s=>this.removeReference(s,n))}ps(e){const n=new F(new be([])),s=new Fe(n,e),i=new Fe(n,e+1),r=[];return this.ds.forEachInRange([s,i],o=>{this.gs(o),r.push(o.key)}),r}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new F(new be([])),s=new Fe(n,e),i=new Fe(n,e+1);let r=Y();return this.ds.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Fe(e,0),s=this.ls.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Fe{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return F.comparator(e.key,n.key)||se(e.Es,n.Es)}static _s(e,n){return se(e.Es,n.Es)||F.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new it(Fe.fs)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tN(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Fe(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ps(s),r=i<0?0:i;return T.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.vs(o.Es);r.push(a)}),T.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new it(se);return n.forEach(i=>{const r=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.Es)})}),T.resolve(this.bs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;F.isDocumentKey(r)||(r=r.child(""));const o=new Fe(new F(r),0);let a=new it(se);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.Es)),!0)},o),T.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(s=>{const i=this.vs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return T.forEach(n.mutations,i=>{const r=new Fe(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=s})}Dn(e){}containsKey(e,n){const s=new Fe(n,0),i=this.Rs.firstAfterOrEqual(s);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e){this.Ss=e,this.docs=new Te(F.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(e,n){let s=Rn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Xe.newInvalidDocument(i))}),T.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Rn();const o=n.path,a=new F(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||vx(yx(u),s)<=0||(i.has(u.key)||$l(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,n,s,i){H()}Ds(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new LN(this)}getSize(e){return T.resolve(this.size)}}class LN extends RN{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e){this.persistence=e,this.Cs=new Gi(n=>Ad(n),kd),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Pd,this.targetCount=0,this.ks=Oi.Nn()}forEachTarget(e,n){return this.Cs.forEach((s,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.xs&&(this.xs=n),T.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new Oi(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.$n(n),T.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(r).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.Ns.ws(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.Ns.ys(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ns.Ts(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Id(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new FN(this),this.indexManager=new AN,this.remoteDocumentCache=function(s){return new MN(s)}(s=>this.referenceDelegate.Bs(s)),this.serializer=new CN(n),this.Ls=new ON(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ms[e.toKey()];return s||(s=new PN(n,this.referenceDelegate),this.Ms[e.toKey()]=s),s}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,s){P("MemoryPersistence","Starting transaction:",e);const i=new $N(this.Os.next());return this.referenceDelegate.qs(),s(i).next(r=>this.referenceDelegate.Us(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ks(e,n){return T.or(Object.values(this.Ms).map(s=>()=>s.containsKey(e,n)))}}class $N extends Ex{constructor(e){super(),this.currentSequenceNumber=e}}class Md{constructor(e){this.persistence=e,this.Gs=new Pd,this.Qs=null}static js(e){return new Md(e)}get zs(){if(this.Qs)return this.Qs;throw H()}addReference(e,n,s){return this.Gs.addReference(s,n),this.zs.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Gs.removeReference(s,n),this.zs.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),T.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.zs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.zs,s=>{const i=F.fromPath(s);return this.Ws(e,i).next(r=>{r||n.removeEntry(i,W.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(s=>{s?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return T.or([()=>T.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.$i=s,this.Fi=i}static Bi(e,n){let s=Y(),i=Y();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ld(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ui(e,n).next(r=>r||this.Ki(e,n,i,s)).next(r=>r||this.Gi(e,n))}Ui(e,n){if(bg(n))return T.resolve(null);let s=kn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ju(n,null,"F"),s=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Y(...r);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Qi(n,a);return this.ji(n,c,o,l.readTime)?this.Ui(e,ju(n,null,"F")):this.zi(e,c,n,l)}))})))}Ki(e,n,s,i){return bg(n)||i.isEqual(W.min())?this.Gi(e,n):this.qi.getDocuments(e,s).next(r=>{const o=this.Qi(n,r);return this.ji(n,o,s,i)?this.Gi(e,n):(gg()<=ne.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hu(n)),this.zi(e,o,n,_x(i,-1)))})}Qi(e,n){let s=new it(N0(e));return n.forEach((i,r)=>{$l(e,r)&&(s=s.add(r))}),s}ji(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Gi(e,n){return gg()<=ne.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Hu(n)),this.qi.getDocumentsMatchingQuery(e,n,Zn.min())}zi(e,n,s,i){return this.qi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n,s,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new Te(se),this.Ji=new Gi(r=>Ad(r),kd),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(s)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NN(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function jN(t,e,n,s){return new BN(t,e,n,s)}async function Z0(t,e){const n=q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Y();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function HN(t,e){const n=q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=T.resolve();return h.forEach(p=>{d=d.next(()=>c.getEntry(a,p)).next(m=>{const y=l.docVersions.get(p);_e(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),c.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Y();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function ew(t){const e=q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function zN(t,e){const n=q(t),s=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(ot.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,y,b){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,p,u)&&a.push(n.Fs.updateTargetData(r,p))});let l=Rn(),c=Y();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(WN(r,o,e.documentUpdates).next(u=>{l=u.er,c=u.nr})),!s.isEqual(W.min())){const u=n.Fs.getLastRemoteSnapshotVersion(r).next(h=>n.Fs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Hi=i,r))}function WN(t,e,n){let s=Y(),i=Y();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Rn();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{er:o,nr:i}})}function qN(t,e){const n=q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function KN(t,e){const n=q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Fs.getTargetData(s,e).next(r=>r?(i=r,T.resolve(i)):n.Fs.allocateTargetId(s).next(o=>(i=new Vn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Fs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Hi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(s.targetId,s),n.Ji.set(e,s.targetId)),s})}async function Gu(t,e,n){const s=q(t),i=s.Hi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!yo(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Hi=s.Hi.remove(e),s.Ji.delete(i.target)}function Mg(t,e,n){const s=q(t);let i=W.min(),r=Y();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=q(a),h=u.Ji.get(c);return h!==void 0?T.resolve(u.Hi.get(h)):u.Fs.getTargetData(l,c)}(s,o,kn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Wi.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?r:Y())).next(a=>(GN(s,Vx(e),a),{documents:a,sr:r})))}function GN(t,e,n){let s=t.Yi.get(e)||W.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Yi.set(e,s)}class Lg{constructor(){this.activeTargetIds=qx()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QN{constructor(){this.Wr=new Lg,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,s){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Lg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo=null;function Oc(){return qo===null?qo=268435456+Math.round(2147483648*Math.random()):qo++,"0x"+qo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="WebChannelConnection";class ZN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,s,i,r){const o=Oc(),a=this.Io(e,n);P("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.To(l,i,r),this.Eo(e,a,l,s).then(c=>(P("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw ki("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}Ao(e,n,s,i,r,o){return this.po(e,n,s,i,r)}To(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ki,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}Io(e,n){const s=XN[e];return`${this.wo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,s,i){const r=Oc();return new Promise((o,a)=>{const l=new ox;l.setWithCredentials(!0),l.listenOnce(sx.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case xc.NO_ERROR:const u=l.getResponseJson();P(Ke,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case xc.TIMEOUT:P(Ke,`RPC '${e}' ${r} timed out`),a(new U(I.DEADLINE_EXCEEDED,"Request time out"));break;case xc.HTTP_ERROR:const h=l.getStatus();if(P(Ke,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const m=function(y){const b=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(b)>=0?b:I.UNKNOWN}(p.status);a(new U(m,p.message))}else a(new U(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new U(I.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{P(Ke,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);P(Ke,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}Ro(e,n,s){const i=Oc(),r=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tx(),a=nx(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new rx({})),this.To(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const c=r.join("");P(Ke,`Creating RPC '${e}' stream ${i}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,d=!1;const p=new JN({io:y=>{d?P(Ke,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(h||(P(Ke,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),P(Ke,`RPC '${e}' stream ${i} sending:`,y),u.send(y))},ro:()=>u.close()}),m=(y,b,O)=>{y.listen(b,K=>{try{O(K)}catch(R){setTimeout(()=>{throw R},0)}})};return m(u,jo.EventType.OPEN,()=>{d||P(Ke,`RPC '${e}' stream ${i} transport opened.`)}),m(u,jo.EventType.CLOSE,()=>{d||(d=!0,P(Ke,`RPC '${e}' stream ${i} transport closed`),p.fo())}),m(u,jo.EventType.ERROR,y=>{d||(d=!0,ki(Ke,`RPC '${e}' stream ${i} transport errored:`,y),p.fo(new U(I.UNAVAILABLE,"The operation could not be completed")))}),m(u,jo.EventType.MESSAGE,y=>{var b;if(!d){const O=y.data[0];_e(!!O);const K=O,R=K.error||((b=K[0])===null||b===void 0?void 0:b.error);if(R){P(Ke,`RPC '${e}' stream ${i} received error:`,R);const V=R.status;let fe=function(dt){const Ae=Re[dt];if(Ae!==void 0)return z0(Ae)}(V),Me=R.message;fe===void 0&&(fe=I.INTERNAL,Me="Unknown error status: "+V+" with message "+R.message),d=!0,p.fo(new U(fe,Me)),u.close()}else P(Ke,`RPC '${e}' stream ${i} received:`,O),p._o(O)}}),m(a,ix.STAT_EVENT,y=>{y.stat===fg.PROXY?P(Ke,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===fg.NOPROXY&&P(Ke,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.lo()},0),p}}function Dc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t){return new hN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n,s=1e3,i=1.5,r=6e4){this.si=e,this.timerId=n,this.vo=s,this.Po=i,this.bo=r,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),s=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-s);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n,s,i,r,o,a,l){this.si=e,this.Mo=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new tw(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.$o===n&&this.Xo(s,i)},s=>{e(()=>{const i=new U(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Zo(i)})})}Xo(e,n){const s=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{s(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{s(()=>this.Zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eO extends nw{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=pN(this.serializer,e),s=function(i){if(!("targetChange"in i))return W.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?W.min():r.readTime?tn(r.readTime):W.min()}(e);return this.listener.eu(n,s)}nu(e){const n={};n.database=Ku(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;if(o=Bu(a)?{documents:_N(i,a)}:{query:yN(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=K0(i,r.resumeToken);const l=zu(i,r.expectedCount);l!==null&&(o.expectedCount=l)}else if(r.snapshotVersion.compareTo(W.min())>0){o.readTime=qa(i,r.snapshotVersion.toTimestamp());const l=zu(i,r.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const s=wN(this.serializer,e);s&&(n.labels=s),this.zo(n)}su(e){const n={};n.database=Ku(this.serializer),n.removeTarget=e,this.zo(n)}}class tO extends nw{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=mN(e.writeResults,e.commitTime),s=tn(e.commitTime);return this.listener.uu(s,n)}return _e(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Ku(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>gN(this.serializer,s))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new U(I.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.po(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(I.UNKNOWN,i.toString())})}Ao(e,n,s,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Ao(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(I.UNKNOWN,r.toString())})}terminate(){this.hu=!0}}class sO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(An(n),this.wu=!1):P("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=r,this.vu.Jr(o=>{s.enqueueAndForget(async()=>{zs(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=q(a);l.Au.add(4),await wo(l),l.Pu.set("Unknown"),l.Au.delete(4),await Wl(l)}(this))})}),this.Pu=new sO(s,i)}}async function Wl(t){if(zs(t))for(const e of t.Ru)await e(!0)}async function wo(t){for(const e of t.Ru)await e(!1)}function sw(t,e){const n=q(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),$d(n)?Ud(n):Qi(n).Uo()&&Fd(n,e))}function iw(t,e){const n=q(t),s=Qi(n);n.Eu.delete(e),s.Uo()&&rw(n,e),n.Eu.size===0&&(s.Uo()?s.Qo():zs(n)&&n.Pu.set("Unknown"))}function Fd(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qi(t).nu(e)}function rw(t,e){t.bu.Lt(e),Qi(t).su(e)}function Ud(t){t.bu=new aN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Qi(t).start(),t.Pu.mu()}function $d(t){return zs(t)&&!Qi(t).qo()&&t.Eu.size>0}function zs(t){return q(t).Au.size===0}function ow(t){t.bu=void 0}async function rO(t){t.Eu.forEach((e,n)=>{Fd(t,e)})}async function oO(t,e){ow(t),$d(t)?(t.Pu.pu(e),Ud(t)):t.Pu.set("Unknown")}async function aO(t,e,n){if(t.Pu.set("Online"),e instanceof q0&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Eu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Eu.delete(o),s.bu.removeTarget(o))}(t,e)}catch(s){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ka(t,s)}else if(e instanceof ra?t.bu.Wt(e):e instanceof W0?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(W.min()))try{const s=await ew(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.bu.ue(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Eu.get(l);c&&i.Eu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,l)=>{const c=i.Eu.get(a);if(!c)return;i.Eu.set(a,c.withResumeToken(ot.EMPTY_BYTE_STRING,c.snapshotVersion)),rw(i,a);const u=new Vn(c.target,a,l,c.sequenceNumber);Fd(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){P("RemoteStore","Failed to raise snapshot:",s),await Ka(t,s)}}async function Ka(t,e,n){if(!yo(e))throw e;t.Au.add(1),await wo(t),t.Pu.set("Offline"),n||(n=()=>ew(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Wl(t)})}function aw(t,e){return e().catch(n=>Ka(t,n,e))}async function ql(t){const e=q(t),n=ts(e);let s=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;lO(e);)try{const i=await qN(e.localStore,s);if(i===null){e.Tu.length===0&&n.Qo();break}s=i.batchId,cO(e,i)}catch(i){await Ka(e,i)}lw(e)&&cw(e)}function lO(t){return zs(t)&&t.Tu.length<10}function cO(t,e){t.Tu.push(e);const n=ts(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function lw(t){return zs(t)&&!ts(t).qo()&&t.Tu.length>0}function cw(t){ts(t).start()}async function uO(t){ts(t).au()}async function hO(t){const e=ts(t);for(const n of t.Tu)e.ou(n.mutations)}async function dO(t,e,n){const s=t.Tu.shift(),i=xd.from(s,e,n);await aw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ql(t)}async function fO(t,e){e&&ts(t).ru&&await async function(n,s){if(i=s.code,iN(i)&&i!==I.ABORTED){const r=n.Tu.shift();ts(n).Go(),await aw(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ql(n)}var i}(t,e),lw(t)&&cw(t)}async function Ug(t,e){const n=q(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const s=zs(n);n.Au.add(3),await wo(n),s&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Wl(n)}async function pO(t,e){const n=q(t);e?(n.Au.delete(2),await Wl(n)):e||(n.Au.add(2),await wo(n),n.Pu.set("Unknown"))}function Qi(t){return t.Vu||(t.Vu=function(e,n,s){const i=q(e);return i.lu(),new eO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{oo:rO.bind(null,t),co:oO.bind(null,t),eu:aO.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),$d(t)?Ud(t):t.Pu.set("Unknown")):(await t.Vu.stop(),ow(t))})),t.Vu}function ts(t){return t.Su||(t.Su=function(e,n,s){const i=q(e);return i.lu(),new tO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{oo:uO.bind(null,t),co:fO.bind(null,t),cu:hO.bind(null,t),uu:dO.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await ql(t)):(await t.Su.stop(),t.Tu.length>0&&(P("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Vd(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bd(t,e){if(An("AsyncQueue",`${e}: ${t}`),yo(t))return new U(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.comparator=e?(n,s)=>e(n,s)||F.comparator(n.key,s.key):(n,s)=>F.comparator(n.key,s.key),this.keyedMap=lr(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new _i(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new _i;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.Du=new Te(F.comparator)}track(e){const n=e.doc.key,s=this.Du.get(n);s?e.type!==0&&s.type===3?this.Du=this.Du.insert(n,e):e.type===3&&s.type!==1?this.Du=this.Du.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Du=this.Du.remove(n):e.type===1&&s.type===2?this.Du=this.Du.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):H():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,s)=>{e.push(s)}),e}}class Di{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Di(e,n,_i.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ul(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(){this.xu=void 0,this.listeners=[]}}class mO{constructor(){this.queries=new Gi(e=>x0(e),Ul),this.onlineState="Unknown",this.Nu=new Set}}async function _O(t,e){const n=q(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new gO),i)try{r.xu=await n.onListen(s)}catch(o){const a=Bd(o,`Initialization of query '${Hu(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.ku(n.onlineState),r.xu&&e.Mu(r.xu)&&jd(n)}async function yO(t,e){const n=q(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function vO(t,e){const n=q(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Mu(i)&&(s=!0);o.xu=i}}s&&jd(n)}function wO(t,e,n){const s=q(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function jd(t){t.Nu.forEach(e=>{e.next()})}class EO{constructor(e,n,s){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=s||{}}Mu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Di(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Uu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=Di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.key=e}}class hw{constructor(e){this.key=e}}class TO{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Y(),this.mutatedKeys=Y(),this.Zu=N0(e),this.tc=new _i(this.Zu)}get ec(){return this.Ju}nc(e,n){const s=n?n.sc:new $g,i=n?n.tc:this.tc;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=$l(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let b=!1;d&&p?d.data.isEqual(p.data)?m!==y&&(s.track({type:3,doc:p}),b=!0):this.ic(d,p)||(s.track({type:2,doc:p}),b=!0,(l&&this.Zu(p,l)>0||c&&this.Zu(p,c)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),b=!0):d&&!p&&(s.track({type:1,doc:d}),b=!0,(l||c)&&(a=!0)),b&&(p?(o=o.add(p),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{tc:o,sc:s,ji:a,mutatedKeys:r}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const r=e.sc.Cu();r.sort((c,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return p(h)-p(d)}(c.type,u.type)||this.Zu(c.doc,u.doc)),this.rc(s);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,r.length!==0||l?{snapshot:new Di(this.query,e.tc,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new $g,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=Y(),this.tc.forEach(s=>{this.cc(s.key)&&(this.Xu=this.Xu.add(s.key))});const n=[];return e.forEach(s=>{this.Xu.has(s)||n.push(new hw(s))}),this.Xu.forEach(s=>{e.has(s)||n.push(new uw(s))}),n}ac(e){this.Ju=e.sr,this.Xu=Y();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return Di.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class IO{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class bO{constructor(e){this.key=e,this.lc=!1}}class CO{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Gi(a=>x0(a),Ul),this._c=new Map,this.wc=new Set,this.mc=new Te(F.comparator),this.gc=new Map,this.yc=new Pd,this.Ic={},this.Tc=new Map,this.Ec=Oi.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function SO(t,e){const n=LO(t);let s,i;const r=n.dc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.hc();else{const o=await KN(n.localStore,kn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await AO(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&sw(n.remoteStore,o)}return i}async function AO(t,e,n,s,i){t.Rc=(h,d,p)=>async function(m,y,b,O){let K=y.view.nc(b);K.ji&&(K=await Mg(m.localStore,y.query,!1).then(({documents:fe})=>y.view.nc(fe,K)));const R=O&&O.targetChanges.get(y.targetId),V=y.view.applyChanges(K,m.isPrimaryClient,R);return Bg(m,y.targetId,V.uc),V.snapshot}(t,h,d,p);const r=await Mg(t.localStore,e,!0),o=new TO(e,r.sr),a=o.nc(r.documents),l=vo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Bg(t,n,c.uc);const u=new IO(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function kO(t,e){const n=q(t),s=n.dc.get(e),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!Ul(r,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Gu(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),iw(n.remoteStore,s.targetId),Qu(n,s.targetId)}).catch(_o)):(Qu(n,s.targetId),await Gu(n.localStore,s.targetId,!0))}async function RO(t,e,n){const s=FO(t);try{const i=await function(r,o){const a=q(r),l=De.now(),c=o.reduce((d,p)=>d.add(p.key),Y());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Rn(),m=Y();return a.Xi.getEntries(d,c).next(y=>{p=y,p.forEach((b,O)=>{O.isValidDocument()||(m=m.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(y=>{u=y;const b=[];for(const O of o){const K=Zx(O,u.get(O.key).overlayedDocument);K!=null&&b.push(new Hs(O.key,K,I0(K.value.mapValue),Tn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,b,o)}).next(y=>{h=y;const b=y.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,y.batchId,b)})}).then(()=>({batchId:h.batchId,changes:D0(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.Ic[r.currentUser.toKey()];l||(l=new Te(se)),l=l.insert(o,a),r.Ic[r.currentUser.toKey()]=l}(s,i.batchId,n),await Eo(s,i.changes),await ql(s.remoteStore)}catch(i){const r=Bd(i,"Failed to persist write");n.reject(r)}}async function dw(t,e){const n=q(t);try{const s=await zN(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.gc.get(r);o&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?_e(o.lc):i.removedDocuments.size>0&&(_e(o.lc),o.lc=!1))}),await Eo(n,s,e)}catch(s){await _o(s)}}function Vg(t,e,n){const s=q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.dc.forEach((r,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=q(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.ku(o)&&(l=!0)}),l&&jd(a)}(s.eventManager,e),i.length&&s.fc.eu(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function xO(t,e,n){const s=q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.gc.get(e),r=i&&i.key;if(r){let o=new Te(F.comparator);o=o.insert(r,Xe.newNoDocument(r,W.min()));const a=Y().add(r),l=new Hl(W.min(),new Map,new Te(se),o,a);await dw(s,l),s.mc=s.mc.remove(r),s.gc.delete(e),Hd(s)}else await Gu(s.localStore,e,!1).then(()=>Qu(s,e,n)).catch(_o)}async function NO(t,e){const n=q(t),s=e.batch.batchId;try{const i=await HN(n.localStore,e);pw(n,s,null),fw(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Eo(n,i)}catch(i){await _o(i)}}async function OO(t,e,n){const s=q(t);try{const i=await function(r,o){const a=q(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(_e(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);pw(s,e,n),fw(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Eo(s,i)}catch(i){await _o(i)}}function fw(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function pw(t,e,n){const s=q(t);let i=s.Ic[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Ic[s.currentUser.toKey()]=i}}function Qu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.dc.delete(s),n&&t.fc.vc(s,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(s=>{t.yc.containsKey(s)||gw(t,s)})}function gw(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(iw(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Hd(t))}function Bg(t,e,n){for(const s of n)s instanceof uw?(t.yc.addReference(s.key,e),DO(t,s)):s instanceof hw?(P("SyncEngine","Document no longer in limbo: "+s.key),t.yc.removeReference(s.key,e),t.yc.containsKey(s.key)||gw(t,s.key)):H()}function DO(t,e){const n=e.key,s=n.path.canonicalString();t.mc.get(n)||t.wc.has(s)||(P("SyncEngine","New document in limbo: "+n),t.wc.add(s),Hd(t))}function Hd(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new F(be.fromString(e)),s=t.Ec.next();t.gc.set(s,new bO(n)),t.mc=t.mc.insert(n,s),sw(t.remoteStore,new Vn(kn(Rd(n.path)),s,"TargetPurposeLimboResolution",Id.ct))}}async function Eo(t,e,n){const s=q(t),i=[],r=[],o=[];s.dc.isEmpty()||(s.dc.forEach((a,l)=>{o.push(s.Rc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Ld.Bi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.fc.eu(i),await async function(a,l){const c=q(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(l,h=>T.forEach(h.$i,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>T.forEach(h.Fi,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!yo(u))throw u;P("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Hi.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);c.Hi=c.Hi.insert(h,m)}}}(s.localStore,r))}async function PO(t,e){const n=q(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const s=await Z0(n.localStore,e);n.currentUser=e,function(i,r){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new U(I.CANCELLED,r))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Eo(n,s.tr)}}function MO(t,e){const n=q(t),s=n.gc.get(e);if(s&&s.lc)return Y().add(s.key);{let i=Y();const r=n._c.get(e);if(!r)return i;for(const o of r){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function LO(t){const e=q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xO.bind(null,e),e.fc.eu=vO.bind(null,e.eventManager),e.fc.vc=wO.bind(null,e.eventManager),e}function FO(t){const e=q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OO.bind(null,e),e}class jg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=zl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return jN(this.persistence,new VN,e.initialUser,this.serializer)}createPersistence(e){return new UN(Md.js,this.serializer)}createSharedClientState(e){return new QN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class UO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Vg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=PO.bind(null,this.syncEngine),await pO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mO}createDatastore(e){const n=zl(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new ZN(i));var i;return function(r,o,a,l){return new nO(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Vg(this.syncEngine,a,0),o=Fg.D()?new Fg:new YN,new iO(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new CO(s,i,r,o,a,l);return c&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=q(e);P("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await wo(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ge.UNAUTHENTICATED,this.clientId=w0.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{P("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(P("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Bd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Pc(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Z0(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jO(t);P("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Ug(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Ug(e.remoteStore,r)),t._onlineComponents=e}function BO(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function jO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!BO(n))throw n;ki("Error using user provided cache. Falling back to memory cache: "+n),await Pc(t,new jg)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await Pc(t,new jg);return t._offlineComponents}async function mw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await Hg(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await Hg(t,new UO))),t._onlineComponents}function HO(t){return mw(t).then(e=>e.syncEngine)}async function zO(t){const e=await mw(t),n=e.eventManager;return n.onListen=SO.bind(null,e.syncEngine),n.onUnlisten=kO.bind(null,e.syncEngine),n}function WO(t,e,n={}){const s=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new $O({next:h=>{r.enqueueAndForget(()=>yO(i,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new U(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new U(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new EO(Rd(o.path),c,{includeMetadataChanges:!0,Uu:!0});return _O(i,u)}(await zO(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(t,e,n){if(!n)throw new U(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KO(t,e,n,s){if(e===!0&&s===!0)throw new U(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wg(t){if(!F.isDocumentKey(t))throw new U(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function Gr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zd(t);throw new U(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new lx;switch(n.type){case"firstParty":return new dx(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=zg.get(e);n&&(P("ComponentProvider","Removing Datastore"),zg.delete(e),n.terminate())}(this),Promise.resolve()}}function GO(t,e,n,s={}){var i;const r=(t=Gr(t,Wd))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&ki("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ge.MOCK_USER;else{o=CI(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new U(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ge(l)}t._authCredentials=new cx(new v0(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class qd{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new qd(this.firestore,e,this._query)}}class Qr extends qd{constructor(e,n,s){super(e,n,Rd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new F(e))}withConverter(e){return new Qr(this.firestore,e,this._path)}}function QO(t,e,...n){if(t=mt(t),arguments.length===1&&(e=w0.A()),qO("doc","path",e),t instanceof Wd){const s=be.fromString(e,...n);return Wg(s),new At(t,null,new F(s))}{if(!(t instanceof At||t instanceof Qr))throw new U(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(be.fromString(e,...n));return Wg(s),new At(t.firestore,t instanceof Qr?t.converter:null,new F(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new tw(this,"async_queue_retry"),this.Yc=()=>{const n=Dc();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Dc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Dc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Gn;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!yo(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(s=>{this.zc=s,this.Wc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw An("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Wc=!1,s))));return this.Kc=n,n}enqueueAfterDelay(e,n,s){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=Vd.createAndSchedule(this,e,n,s,r=>this.ea(r));return this.jc.push(i),i}Xc(){this.zc&&H()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class Kd extends Wd{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new YO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yw(this),this._firestoreClient.terminate()}}function XO(t,e){const n=typeof t=="object"?t:Ch(),s=typeof t=="string"?t:e||"(default)",i=bh(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=II("firestore");r&&GO(i,...r)}return i}function _w(t){return t._firestoreClient||yw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yw(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new bx(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new VO(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pi(ot.fromBase64String(e))}catch(n){throw new U(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pi(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=/^__.*__$/;class vw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Hs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ww(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Yd{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.oa(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:s,ha:!1});return i.la(e),i}fa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:s,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Ga(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(ww(this.ua)&&JO.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class ZO{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||zl(e)}ga(e,n,s,i=!1){return new Yd({ua:e,methodName:n,ma:s,path:Ze.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eD(t){const e=t._freezeSettings(),n=zl(t._databaseId);return new ZO(t._databaseId,!!e.ignoreUndefinedProperties,n)}class Gl extends Gd{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gl}}function tD(t,e,n,s){const i=t.ga(1,e,n);Tw("Data must be an object, but it was:",i,s);const r=[],o=vt.empty();js(s,(l,c)=>{const u=Xd(e,l,n);c=mt(c);const h=i.fa(u);if(c instanceof Gl)r.push(u);else{const d=Ql(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Lt(r);return new vw(o,a,i.fieldTransforms)}function nD(t,e,n,s,i,r){const o=t.ga(1,e,n),a=[Kg(e,s,n)],l=[i];if(r.length%2!=0)throw new U(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Kg(e,r[d])),l.push(r[d+1]);const c=[],u=vt.empty();for(let d=a.length-1;d>=0;--d)if(!rD(c,a[d])){const p=a[d];let m=l[d];m=mt(m);const y=o.fa(p);if(m instanceof Gl)c.push(p);else{const b=Ql(m,y);b!=null&&(c.push(p),u.set(p,b))}}const h=new Lt(c);return new vw(u,h,o.fieldTransforms)}function Ql(t,e){if(Ew(t=mt(t)))return Tw("Unsupported field value:",e,t),sD(t,e);if(t instanceof Gd)return function(n,s){if(!ww(s.ua))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Ql(o,s.da(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=mt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Kx(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=De.fromDate(n);return{timestampValue:qa(s.serializer,i)}}if(n instanceof De){const i=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:qa(s.serializer,i)}}if(n instanceof Qd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Pi)return{bytesValue:K0(s.serializer,n._byteString)};if(n instanceof At){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Dd(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${zd(n)}`)}(t,e)}function sD(t,e){const n={};return E0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):js(t,(s,i)=>{const r=Ql(i,e.aa(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Ew(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Qd||t instanceof Pi||t instanceof At||t instanceof Gd)}function Tw(t,e,n){if(!Ew(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=zd(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function Kg(t,e,n){if((e=mt(e))instanceof Kl)return e._internalPath;if(typeof e=="string")return Xd(t,e);throw Ga("Field path arguments must be of type string or ",t,!1,void 0,n)}const iD=new RegExp("[~\\*/\\[\\]]");function Xd(t,e,n){if(e.search(iD)>=0)throw Ga(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kl(...e.split("."))._internalPath}catch{throw Ga(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ga(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new U(I.INVALID_ARGUMENT,a+t+l)}function rD(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class oD extends Iw{data(){return super.data()}}function bw(t,e){return typeof e=="string"?Xd(t,e):e instanceof Kl?e._internalPath:e._delegate._internalPath}class aD{convertValue(e,n="none"){switch(Us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return js(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Qd(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Cd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Hr(e));default:return null}}convertTimestamp(e){const n=es(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=be.fromString(e);_e(J0(s));const i=new zr(s.get(1),s.get(3)),r=new F(s.popFirst(5));return i.isEqual(n)||An(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cw extends Iw{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cD(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(bw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class cD extends Cw{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t){t=Gr(t,At);const e=Gr(t.firestore,Kd);return WO(_w(e),t._key).then(n=>pD(e,t,n))}class hD extends aD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function dD(t,e,n,...s){t=Gr(t,At);const i=Gr(t.firestore,Kd),r=eD(i);let o;return o=typeof(e=mt(e))=="string"||e instanceof Kl?nD(r,"updateDoc",t._key,e,n,s):tD(r,"updateDoc",t._key,e),fD(i,[o.toMutation(t._key,Tn.exists(!0))])}function fD(t,e){return function(n,s){const i=new Gn;return n.asyncQueue.enqueueAndForget(async()=>RO(await HO(n),s,i)),i.promise}(_w(t),e)}function pD(t,e,n){const s=n.docs.get(e._key),i=new hD(t);return new Cw(t,i,e._key,s,new lD(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ki=n})(ns),sn(new Bt("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Kd(new ux(n.getProvider("auth-internal")),new px(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zr(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),wt(pg,"3.11.0",t),wt(pg,"3.11.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="firebasestorage.googleapis.com",gD="storageBucket",mD=2*60*1e3,_D=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends un{constructor(e,n,s=0){super(Mc(e),`Firebase Storage: ${n} (${Mc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,hn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Mc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ln;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ln||(ln={}));function Mc(t){return"storage/"+t}function yD(){const t="An unknown error occurred, please check the error payload for server response.";return new hn(ln.UNKNOWN,t)}function vD(){return new hn(ln.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wD(){return new hn(ln.CANCELED,"User canceled the upload/download.")}function ED(t){return new hn(ln.INVALID_URL,"Invalid URL '"+t+"'.")}function TD(t){return new hn(ln.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Gg(t){return new hn(ln.INVALID_ARGUMENT,t)}function Aw(){return new hn(ln.APP_DELETED,"The Firebase app was deleted.")}function ID(t){return new hn(ln.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Ft.makeFromUrl(e,n)}catch{return new Ft(e,"")}if(s.path==="")return s;throw TD(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(V){V.path_=decodeURIComponent(V.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},y=n===Sw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",O=new RegExp(`^https?://${y}/${i}/${b}`,"i"),R=[{regex:a,indices:l,postModify:r},{regex:p,indices:m,postModify:c},{regex:O,indices:{bucket:1,path:2},postModify:c}];for(let V=0;V<R.length;V++){const fe=R[V],Me=fe.regex.exec(e);if(Me){const dt=Me[fe.indices.bucket];let Ae=Me[fe.indices.path];Ae||(Ae=""),s=new Ft(dt,Ae),fe.postModify(s);break}}if(s==null)throw ED(e);return s}}class bD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...b){c||(c=!0,e.apply(null,b))}function h(b){i=setTimeout(()=>{i=null,t(p,l())},b)}function d(){r&&clearTimeout(r)}function p(b,...O){if(c){d();return}if(b){d(),u.call(null,b,...O);return}if(l()||o){d(),u.call(null,b,...O);return}s<64&&(s*=2);let R;a===1?(a=2,R=0):R=(s+Math.random())*1e3,h(R)}let m=!1;function y(b){m||(m=!0,d(),!c&&(i!==null?(b||(a=2),clearTimeout(i),h(0)):b||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function SD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t){return t!==void 0}function Qg(t,e,n,s){if(s<e)throw Gg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Gg(`Invalid value for '${t}'. Expected ${n} or less.`)}function kD(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Qa||(Qa={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Ko(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Qa.NO_ERROR,l=r.getStatus();if(!a||RD(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Qa.ABORT;s(!1,new Ko(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Ko(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());AD(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=yD();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Aw():wD();o(l)}else{const l=vD();o(l)}};this.canceled_?n(!1,new Ko(!1,null,!0)):this.backoffId_=CD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&SD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ko{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ND(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function OD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function PD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function MD(t,e,n,s,i,r,o=!0){const a=kD(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return DD(c,e),ND(c,n),OD(c,r),PD(c,s),new xD(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function FD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let UD=class Yu{constructor(e,n){this._service=e,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Yu(e,n)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return FD(this._location.path)}get storage(){return this._service}get parent(){const e=LD(this._location.path);if(e===null)return null;const n=new Ft(this._location.bucket,e);return new Yu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ID(e)}};function Yg(t,e){const n=e==null?void 0:e[gD];return n==null?null:Ft.makeFromBucketSpec(n,t)}class $D{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Sw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mD,this._maxUploadRetryTime=_D,this._requests=new Set,i!=null?this._bucket=Ft.makeFromBucketSpec(i,this._host):this._bucket=Yg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=Yg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Qg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Qg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new UD(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new bD(Aw());{const o=MD(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Xg="@firebase/storage",Jg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD="storage";function BD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new $D(n,s,i,e,ns)}function jD(){sn(new Bt(VD,BD,"PUBLIC").setMultipleInstances(!0)),wt(Xg,Jg,""),wt(Xg,Jg,"esm2017")}jD();function HD(t){return XO(sy(t))}function zD(t){return(e,n)=>{const s=mA(e,n).run(()=>jn(t));_A.set(e,s),vA(s,e)}}function WD(t,{firebaseApp:e,modules:n=[]}){t.provide(ny,e);for(const s of n)t.use(s.bind(null,e))}const qD=()=>{const t=jn();return{elementRef:t,focus:()=>{if(!t.value)return;let n;t.value instanceof HTMLInputElement&&(n=t.value.value),xm(()=>{if(t.value){if(t.value instanceof HTMLInputElement){const s=t.value,i=s.type;if(["email","password","search","tel","text","url"].includes(i)){i==="email"&&(s.type="text"),s.value=n;const r=s.value.length;s.setSelectionRange(r,r),i!==s.type&&(s.type=i)}}t.value.focus()}})}}},KD=()=>{const t=n_(),e=jn(!1);return{internalPasswordType:Yt(()=>{if(t)return t.props.type==="password"&&e.value?"text":t.props.type}),isPasswordShown:e,onTogglePassword:()=>{e.value=!e.value}}},GD=gh({name:"DynInput",props:{autocomplete:{type:String,default:void 0},disabled:{type:Boolean,default:!1},id:{type:String,default:void 0},inputmode:{type:String,default:void 0,validator:t=>["none","text",void 0].includes(t)},invalid:{type:Boolean,default:!1},label:{type:String,required:!0},maxlength:{type:Number,default:void 0},minlength:{type:Number,default:void 0},modelValue:{type:[String,Number],required:!0},name:{type:String,required:!0},placeholder:{type:String,default:void 0},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:void 0},type:{type:String,default:"text",validator:t=>["password","text"].includes(t)}},setup(t,{emit:e}){const{elementRef:n,focus:s}=qD(),{internalPasswordType:i,isPasswordShown:r,onTogglePassword:o}=KD(),a=Yt(()=>typeof i.value=="string"?i.value:t.type),l=Yt(()=>t.id||t.name),c=Yt({get(){return t.modelValue},set(h){e("update:modelValue",h)}}),u=Yt(()=>{const h={autocomplete:t.autocomplete,disabled:t.disabled,id:l.value,inputmode:t.inputmode,maxlength:t.maxlength,minlength:t.minlength,name:t.name,placeholder:t.placeholder,readonly:t.readonly,required:t.required,tabindex:t.tabindex,type:a.value};switch(t.type){case"password":case"text":default:return h}});return{computedId:l,computedModelValue:c,computedProps:u,focus:s,inputRef:n,isPasswordShown:r,onTogglePassword:o}},emits:["blur","focus","input","keydown","keypress","keyup","change","update:modelValue"]});const To=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},QD={class:"relative"},YD={class:"relative mt-2 flex w-full flex-shrink-0 flex-col-reverse text-left"},XD=["id"],JD=["for"],ZD={key:0,class:"absolute top-0 bottom-0 right-0 z-10 w-14"};function eP(t,e,n,s,i,r){return Ne(),ct("div",QD,[ie("div",YD,[rT(ie("input",t_({"onUpdate:modelValue":e[0]||(e[0]=o=>t.computedModelValue=o)},t.computedProps,{class:["peer max-h-12 w-full appearance-none rounded-lg border bg-blue-xxx-24 px-4 pt-[15px] pb-3.5 leading-none outline-none placeholder:text-gray placeholder:opacity-0 placeholder:transition-opacity enabled:focus:ring-0 enabled:focus:placeholder:opacity-100",[t.invalid?"border-red-alert text-red-alert enabled:border-red-alert enabled:hover:border-red-alert enabled:hover:ring-1 enabled:hover:ring-red-alert enabled:focus:border-red-alert enabled:focus:ring-1 enabled:focus:ring-red-alert":t.disabled?"text-gray":"text-white enabled:hover:text-blue-active enabled:[&:not(readonly)]:border-transparent  enabled:[&:not(readonly)]:focus:border-blue-active",t.$slots.append?"pr-12":""]],id:t.computedId,ref:"inputRef",onBlur:e[1]||(e[1]=o=>t.$emit("blur",o)),onFocus:e[2]||(e[2]=o=>t.$emit("focus",o)),onKeydown:e[3]||(e[3]=o=>t.$emit("keydown",o)),onKeypress:e[4]||(e[4]=o=>t.$emit("keypress",o)),onKeyup:e[5]||(e[5]=o=>t.$emit("keyup",o)),onChange:e[6]||(e[6]=o=>t.$emit("change",o))}),null,16,XD),[[oI,t.computedModelValue]]),ie("label",{class:Ja(["absolute origin-top-left translate-x-4 -translate-y-3.5 leading-5 transition-transform duration-200 ease-out peer-hover:text-blue-active peer-disabled:text-gray motion-reduce:transition-none",[t.invalid?"text-red-alert":t.disabled?"text-gray":"text-gray-90"]]),for:t.computedId},ri(t.label),11,JD),t.$slots.append?(Ne(),ct("span",ZD,[_h(t.$slots,"append",{disabled:t.disabled,invalid:t.invalid,readonly:t.readonly},void 0,!0)])):zn("",!0)])])}const Lc=To(GD,[["render",eP],["__scopeId","data-v-6d8ea01a"]]),tP={},nP={viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},sP=ie("g",{stroke:"currentColor",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"},[ie("path",{d:"M19.518 8.288A22.111 22.111 0 0 1 23.5 12s-5.148 6.5-11.5 6.5a10.3 10.3 0 0 1-3-.464M4.468 15.7A22.105 22.105 0 0 1 .5 12S5.648 5.5 12 5.5c.844.004 1.683.113 2.5.325"}),ie("path",{d:"M8 12a4 4 0 0 1 4-4M16 12a4 4 0 0 1-4 4M21.75 2.25l-19.5 19.5"})],-1),iP=[sP];function rP(t,e){return Ne(),ct("svg",nP,iP)}const oP=To(tP,[["render",rP]]),aP={},lP={viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},cP=ie("g",{stroke:"currentColor",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"},[ie("path",{d:"M23.5 12s-5.148 6.5-11.5 6.5S.5 12 .5 12 5.648 5.5 12 5.5 23.5 12 23.5 12Z"}),ie("circle",{cx:"12",cy:"12",r:"4"}),ie("path",{d:"M12 10a2 2 0 1 1-2 2"})],-1),uP=[cP];function hP(t,e){return Ne(),ct("svg",lP,uP)}const dP=To(aP,[["render",hP]]),fP=gh({name:"DynInputPasswordToggle",components:{IconEyeOpen:dP,IconEyeClosed:oP},props:{targetRef:{type:Object,default:void 0}},setup(t){const e=Yt(()=>t.targetRef&&t.targetRef.disabled),n=Yt(()=>t.targetRef&&t.targetRef.isPasswordShown),s=Yt(()=>t.targetRef&&t.targetRef.type==="password"&&!t.targetRef.readonly);return{isDisabled:e,isVisible:s,isPasswordShown:n,toggle:()=>{t.targetRef&&(t.targetRef.onTogglePassword(),t.targetRef.focus())}}}}),pP=["disabled"];function gP(t,e,n,s,i,r){const o=Ef("IconEyeClosed"),a=Ef("IconEyeOpen");return t.isVisible?(Ne(),ct("button",{key:0,class:"flex h-full w-full flex-col items-center justify-center text-white outline-none hover:text-blue-light focus:text-blue-light disabled:text-gray",disabled:t.isDisabled,type:"button",onClick:e[0]||(e[0]=(...l)=>t.toggle&&t.toggle(...l))},[t.isPasswordShown?(Ne(),kr(o,{key:0,class:"w-6","aria-hidden":"true"})):(Ne(),kr(a,{key:1,class:"w-6","aria-hidden":"true"}))],8,pP)):zn("",!0)}const Fc=To(fP,[["render",gP]]);function mP(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Ws(t){this._maxSize=t,this.clear()}Ws.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ws.prototype.get=function(t){return this._values[t]};Ws.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var _P=/[^.^\]^[]+|(?=\[\]|\.\.)/g,kw=/^\d+$/,yP=/^\d/,vP=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,wP=/^\s*(['"]?)(.*?)(\1)\s*$/,Jd=512,Zg=new Ws(Jd),em=new Ws(Jd),tm=new Ws(Jd),ks={Cache:Ws,split:Xu,normalizePath:Uc,setter:function(t){var e=Uc(t);return em.get(t)||em.set(t,function(s,i){for(var r=0,o=e.length,a=s;r<o-1;){var l=e[r];if(l==="__proto__"||l==="constructor"||l==="prototype")return s;a=a[e[r++]]}a[e[r]]=i})},getter:function(t,e){var n=Uc(t);return tm.get(t)||tm.set(t,function(i){for(var r=0,o=n.length;r<o;)if(i!=null||!e)i=i[n[r++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(Zd(n)||kw.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){EP(Array.isArray(t)?t:Xu(t),e,n)}};function Uc(t){return Zg.get(t)||Zg.set(t,Xu(t).map(function(e){return e.replace(wP,"$2")}))}function Xu(t){return t.match(_P)||[""]}function EP(t,e,n){var s=t.length,i,r,o,a;for(r=0;r<s;r++)i=t[r],i&&(bP(i)&&(i='"'+i+'"'),a=Zd(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,r,t))}function Zd(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function TP(t){return t.match(yP)&&!t.match(kw)}function IP(t){return vP.test(t)}function bP(t){return!Zd(t)&&(TP(t)||IP(t))}const CP=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Yl=t=>t.match(CP)||[],Xl=t=>t[0].toUpperCase()+t.slice(1),ef=(t,e)=>Yl(t).join(e).toLowerCase(),Rw=t=>Yl(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),SP=t=>Xl(Rw(t)),AP=t=>ef(t,"_"),kP=t=>ef(t,"-"),RP=t=>Xl(ef(t," ")),xP=t=>Yl(t).map(Xl).join(" ");var $c={words:Yl,upperFirst:Xl,camelCase:Rw,pascalCase:SP,snakeCase:AP,kebabCase:kP,sentenceCase:RP,titleCase:xP},tf={exports:{}};tf.exports=function(t){return xw(NP(t),t)};tf.exports.array=xw;function xw(t,e){var n=t.length,s=new Array(n),i={},r=n,o=OP(e),a=DP(t);for(e.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});r--;)i[r]||l(t[r],r,new Set);return s;function l(c,u,h){if(h.has(c)){var d;try{d=", node was:"+JSON.stringify(c)}catch{d=""}throw new Error("Cyclic dependency"+d)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!i[u]){i[u]=!0;var p=o.get(c)||new Set;if(p=Array.from(p),u=p.length){h.add(c);do{var m=p[--u];l(m,a.get(m),h)}while(u);h.delete(c)}s[--n]=c}}}function NP(t){for(var e=new Set,n=0,s=t.length;n<s;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function OP(t){for(var e=new Map,n=0,s=t.length;n<s;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function DP(t){for(var e=new Map,n=0,s=t.length;n<s;n++)e.set(t[n],n);return e}var PP=tf.exports;const MP=mP(PP),LP=Object.prototype.toString,FP=Error.prototype.toString,UP=RegExp.prototype.toString,$P=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",VP=/^Symbol\((.*)\)(.*)$/;function BP(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function nm(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return BP(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return $P.call(t).replace(VP,"Symbol($1)");const s=LP.call(t).slice(8,-1);return s==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):s==="Error"||t instanceof Error?"["+FP.call(t)+"]":s==="RegExp"?UP.call(t):null}function yi(t,e){let n=nm(t,e);return n!==null?n:JSON.stringify(t,function(s,i){let r=nm(this[s],e);return r!==null?r:i},2)}function Nw(t){return t==null?[]:[].concat(t)}let jP=/\$\{\s*(\w+)\s*\}/g;class yt extends Error{static formatError(e,n){const s=n.label||n.path||"this";return s!==n.path&&(n=Object.assign({},n,{path:s})),typeof e=="string"?e.replace(jP,(i,r)=>yi(n[r])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,s,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=s,this.type=i,this.errors=[],this.inner=[],Nw(e).forEach(r=>{yt.isError(r)?(this.errors.push(...r.errors),this.inner=this.inner.concat(r.inner.length?r.inner:r)):this.errors.push(r)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,yt)}}let pn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:s})=>{const i=s!=null&&s!==n?` (cast from the value \`${yi(s,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${yi(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${yi(n,!0)}\``+i}},xt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},HP={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Ju={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},zP={isValue:"${path} field must be ${value}"},Zu={noUnknown:"${path} field has unspecified keys: ${unknown}"},WP={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:pn,string:xt,number:HP,date:Ju,object:Zu,array:WP,boolean:zP});const nf=t=>t&&t.__isYupSchema__;class Ya{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:s,then:i,otherwise:r}=n,o=typeof s=="function"?s:(...a)=>a.every(l=>l===s);return new Ya(e,(a,l)=>{var c;let u=o(...a)?i:r;return(c=u==null?void 0:u(l))!=null?c:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let s=this.refs.map(r=>r.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(s,e,n);if(i===void 0||i===e)return e;if(!nf(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Go={context:"$",value:"."};class qs{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Go.context,this.isValue=this.key[0]===Go.value,this.isSibling=!this.isContext&&!this.isValue;let s=this.isContext?Go.context:this.isValue?Go.value:"";this.path=this.key.slice(s.length),this.getter=this.path&&ks.getter(this.path,!0),this.map=n.map}getValue(e,n,s){let i=this.isContext?s:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}qs.prototype.__isYupRef=!0;const Es=t=>t==null;function Xs(t){function e({value:n,path:s="",options:i,originalValue:r,schema:o},a,l){const{name:c,test:u,params:h,message:d,skipAbsent:p}=t;let{parent:m,context:y,abortEarly:b=o.spec.abortEarly}=i;function O(oe){return qs.isRef(oe)?oe.getValue(n,m,y):oe}function K(oe={}){const It=Object.assign({value:n,originalValue:r,label:o.spec.label,path:oe.path||s,spec:o.spec},h,oe.params);for(const os of Object.keys(It))It[os]=O(It[os]);const rs=new yt(yt.formatError(oe.message||d,It),n,It.path,oe.type||c);return rs.params=It,rs}const R=b?a:l;let V={path:s,parent:m,type:c,from:i.from,createError:K,resolve:O,options:i,originalValue:r,schema:o};const fe=oe=>{yt.isError(oe)?R(oe):oe?l(null):R(K())},Me=oe=>{yt.isError(oe)?R(oe):a(oe)},dt=p&&Es(n);if(!i.sync){try{Promise.resolve(dt?!0:u.call(V,n,V)).then(fe,Me)}catch(oe){Me(oe)}return}let Ae;try{var Ht;if(Ae=dt?!0:u.call(V,n,V),typeof((Ht=Ae)==null?void 0:Ht.then)=="function")throw new Error(`Validation test of type: "${V.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(oe){Me(oe);return}fe(Ae)}return e.OPTIONS=t,e}function qP(t,e,n,s=n){let i,r,o;return e?(ks.forEach(e,(a,l,c)=>{let u=l?a.slice(1,a.length-1):a;t=t.resolve({context:s,parent:i,value:n});let h=t.type==="tuple",d=c?parseInt(u,10):0;if(t.innerType||h){if(h&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&d>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[d],t=h?t.spec.types[d]:t.innerType}if(!c){if(!t.fields||!t.fields[u])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[u],t=t.fields[u]}r=u,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:r}):{parent:i,parentPath:e,schema:t}}class Xa extends Set{describe(){const e=[];for(const n of this.values())e.push(qs.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const s of this.values())n.push(e(s));return n}clone(){return new Xa(this.values())}merge(e,n){const s=this.clone();return e.forEach(i=>s.add(i)),n.forEach(i=>s.delete(i)),s}}function ii(t,e=new Map){if(nf(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let s=0;s<t.length;s++)n[s]=ii(t[s],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[s,i]of t.entries())n.set(s,ii(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const s of t)n.add(ii(s,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[s,i]of Object.entries(t))n[s]=ii(i,e)}else throw Error(`Unable to clone ${t}`);return n}class cn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Xa,this._blacklist=new Xa,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(pn.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ii(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let s=e(this);return this._mutate=n,s}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,s=e.clone();const i=Object.assign({},n.spec,s.spec);return s.spec=i,s.internalTests=Object.assign({},n.internalTests,s.internalTests),s._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),s._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),s.tests=n.tests,s.exclusiveTests=n.exclusiveTests,s.withMutation(r=>{e.tests.forEach(o=>{r.test(o.OPTIONS)})}),s.transforms=[...n.transforms,...s.transforms],s}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let s=n.conditions;n=n.clone(),n.conditions=[],n=s.reduce((i,r)=>r.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,s,i;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(s=e.abortEarly)!=null?s:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive})}cast(e,n={}){let s=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",r=s._cast(e,n);if(n.assert!==!1&&!s.isType(r)){if(i&&Es(r))return r;let o=yi(e),a=yi(r);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${s.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return r}_cast(e,n){let s=e===void 0?e:this.transforms.reduce((i,r)=>r.call(this,i,e,this),e);return s===void 0&&(s=this.getDefault(n)),s}_validate(e,n={},s,i){let{path:r,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let c=[];for(let u of Object.values(this.internalTests))u&&c.push(u);this.runTests({path:r,value:l,originalValue:o,options:n,tests:c},s,u=>{if(u.length)return i(u,l);this.runTests({path:r,value:l,originalValue:o,options:n,tests:this.tests},s,i)})}runTests(e,n,s){let i=!1,{tests:r,value:o,originalValue:a,path:l,options:c}=e,u=y=>{i||(i=!0,n(y,o))},h=y=>{i||(i=!0,s(y,o))},d=r.length,p=[];if(!d)return h([]);let m={value:o,originalValue:a,path:l,options:c,schema:this};for(let y=0;y<r.length;y++){const b=r[y];b(m,u,function(K){K&&(p=p.concat(K)),--d<=0&&h(p)})}}asNestedTest({key:e,index:n,parent:s,parentPath:i,originalParent:r,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let c=s[a];const u=Object.assign({},o,{strict:!0,parent:s,value:c,originalValue:r[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${c?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(h,d,p)=>this.resolve(u)._validate(c,u,d,p)}validate(e,n){let s=this.resolve(Object.assign({},n,{value:e}));return new Promise((i,r)=>s._validate(e,n,(o,a)=>{yt.isError(o)&&(o.value=a),r(o)},(o,a)=>{o.length?r(new yt(o,a)):i(a)}))}validateSync(e,n){let s=this.resolve(Object.assign({},n,{value:e})),i;return s._validate(e,Object.assign({},n,{sync:!0}),(r,o)=>{throw yt.isError(r)&&(r.value=o),r},(r,o)=>{if(r.length)throw new yt(r,e);i=o}),i}isValid(e,n){return this.validate(e,n).then(()=>!0,s=>{if(yt.isError(s))return!1;throw s})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(s){if(yt.isError(s))return!1;throw s}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this):ii(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const s=this.clone({nullable:e});return s.internalTests.nullable=Xs({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),s}optionality(e,n){const s=this.clone({optional:e});return s.internalTests.optionality=Xs({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),s}optional(){return this.optionality(!0)}defined(e=pn.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=pn.notNull){return this.nullability(!1,e)}required(e=pn.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=pn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let s=this.clone(),i=Xs(n),r=n.exclusive||n.name&&s.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(s.exclusiveTests[n.name]=!!n.exclusive),s.tests=s.tests.filter(o=>!(o.OPTIONS.name===n.name&&(r||o.OPTIONS.test===i.OPTIONS.test))),s.tests.push(i),s}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let s=this.clone(),i=Nw(e).map(r=>new qs(r));return i.forEach(r=>{r.isSibling&&s.deps.push(r.key)}),s.conditions.push(typeof n=="function"?new Ya(i,n):Ya.fromOptions(i,n)),s}typeError(e){let n=this.clone();return n.internalTests.typeError=Xs({message:e,name:"typeError",skipAbsent:!0,test(s){return this.schema._typeCheck(s)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=pn.oneOf){let s=this.clone();return e.forEach(i=>{s._whitelist.add(i),s._blacklist.delete(i)}),s.internalTests.whiteList=Xs({message:n,name:"oneOf",skipAbsent:!0,test(i){let r=this.schema._whitelist,o=r.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(r).join(", "),resolved:o}})}}),s}notOneOf(e,n=pn.notOneOf){let s=this.clone();return e.forEach(i=>{s._blacklist.add(i),s._whitelist.delete(i)}),s.internalTests.blacklist=Xs({message:n,name:"notOneOf",test(i){let r=this.schema._blacklist,o=r.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(r).join(", "),resolved:o}}):!0}}),s}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:s,meta:i,optional:r,nullable:o}=n.spec;return{meta:i,label:s,optional:r,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,c,u)=>u.findIndex(h=>h.name===l.name)===c)}}}cn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])cn.prototype[`${t}At`]=function(e,n,s={}){const{parent:i,parentPath:r,schema:o}=qP(this,e,n,s.context);return o[t](i&&i[r],Object.assign({},s,{parent:i,path:e}))};for(const t of["equals","is"])cn.prototype[t]=cn.prototype.oneOf;for(const t of["not","nope"])cn.prototype[t]=cn.prototype.notOneOf;let KP=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,GP=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,QP=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,YP=t=>Es(t)||t===t.trim(),XP={}.toString();function oa(){return new Ow}class Ow extends cn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,s)=>{if(!s.spec.coerce||s.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===XP?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||pn.required,name:"required",skipAbsent:!0,test:s=>!!s.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=xt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(s){return s.length===this.resolve(e)}})}min(e,n=xt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(s){return s.length>=this.resolve(e)}})}max(e,n=xt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(s){return s.length<=this.resolve(e)}})}matches(e,n){let s=!1,i,r;return n&&(typeof n=="object"?{excludeEmptyString:s=!1,message:i,name:r}=n:i=n),this.test({name:r||"matches",message:i||xt.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&s||o.search(e)!==-1})}email(e=xt.email){return this.matches(KP,{name:"email",message:e,excludeEmptyString:!0})}url(e=xt.url){return this.matches(GP,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=xt.uuid){return this.matches(QP,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=xt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:YP})}lowercase(e=xt.lowercase){return this.transform(n=>Es(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Es(n)||n===n.toLowerCase()})}uppercase(e=xt.uppercase){return this.transform(n=>Es(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Es(n)||n===n.toUpperCase()})}}oa.prototype=Ow.prototype;var JP=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function ZP(t){var e=[1,4,5,6,7,10,11],n=0,s,i;if(i=JP.exec(t)){for(var r=0,o;o=e[r];++r)i[o]=+i[o]||0;i[2]=(+i[2]||1)-1,i[3]=+i[3]||1,i[7]=i[7]?String(i[7]).substr(0,3):0,(i[8]===void 0||i[8]==="")&&(i[9]===void 0||i[9]==="")?s=+new Date(i[1],i[2],i[3],i[4],i[5],i[6],i[7]):(i[8]!=="Z"&&i[9]!==void 0&&(n=i[10]*60+i[11],i[9]==="+"&&(n=0-n)),s=Date.UTC(i[1],i[2],i[3],i[4],i[5]+n,i[6],i[7]))}else s=Date.parse?Date.parse(t):NaN;return s}let eM=new Date(""),tM=t=>Object.prototype.toString.call(t)==="[object Date]";class Jl extends cn{constructor(){super({type:"date",check(e){return tM(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,s)=>!s.spec.coerce||s.isType(e)||e===null?e:(e=ZP(e),isNaN(e)?Jl.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let s;if(qs.isRef(e))s=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);s=i}return s}min(e,n=Ju.min){let s=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(s)}})}max(e,n=Ju.max){let s=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(s)}})}}Jl.INVALID_DATE=eM;Jl.prototype;function nM(t,e=[]){let n=[],s=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function r(o,a){let l=ks.split(o)[0];s.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];s.add(o),qs.isRef(a)&&a.isSibling?r(a.path,o):nf(a)&&"deps"in a&&a.deps.forEach(l=>r(l,o))}return MP.array(Array.from(s),n).reverse()}function sm(t,e){let n=1/0;return t.some((s,i)=>{var r;if((r=e.path)!=null&&r.includes(s))return n=i,!0}),n}function Dw(t){return(e,n)=>sm(t,e)-sm(t,n)}const sM=(t,e,n)=>{if(typeof t!="string")return t;let s=t;try{s=JSON.parse(t)}catch{}return n.isType(s)?s:t};function aa(t){if("fields"in t){const e={};for(const[n,s]of Object.entries(t.fields))e[n]=aa(s);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=aa(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(aa)}):"optional"in t?t.optional():t}const iM=(t,e)=>{const n=[...ks.normalizePath(e)];if(n.length===1)return n[0]in t;let s=n.pop(),i=ks.getter(ks.join(n),!0)(t);return!!(i&&s in i)};let im=t=>Object.prototype.toString.call(t)==="[object Object]";function rM(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(s=>n.indexOf(s)===-1)}const oM=Dw([]);function Pw(t){return new Mw(t)}class Mw extends cn{constructor(e){super({type:"object",check(n){return im(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=oM,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var s;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let r=this.fields,o=(s=n.stripUnknown)!=null?s:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(h=>!this._nodes.includes(h))),l={},c=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),u=!1;for(const h of a){let d=r[h],p=h in i;if(d){let m,y=i[h];c.path=(n.path?`${n.path}.`:"")+h,d=d.resolve({value:y,context:n.context,parent:l});let b=d instanceof cn?d.spec:void 0,O=b==null?void 0:b.strict;if(b!=null&&b.strip){u=u||h in i;continue}m=!n.__validating||!O?d.cast(i[h],c):i[h],m!==void 0&&(l[h]=m)}else p&&!o&&(l[h]=i[h]);(p!==h in l||l[h]!==i[h])&&(u=!0)}return u?l:i}_validate(e,n={},s,i){let{from:r=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...r],n.__validating=!0,n.originalValue=o,super._validate(e,n,s,(l,c)=>{if(!a||!im(c)){i(l,c);return}o=o||c;let u=[];for(let h of this._nodes){let d=this.fields[h];!d||qs.isRef(d)||u.push(d.asNestedTest({options:n,key:h,parent:c,parentPath:n.path,originalParent:o}))}this.runTests({tests:u,value:c,originalValue:o,options:n},s,h=>{i(h.sort(this._sortErrors).concat(l),c)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),s=n.fields;for(let[i,r]of Object.entries(this.fields)){const o=s[i];s[i]=o===void 0?r:o}return n.withMutation(i=>i.setFields(s,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(s=>{var i;const r=this.fields[s];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[s]})),n[s]=r&&"getDefault"in r?r.getDefault(o):void 0}),n}setFields(e,n){let s=this.clone();return s.fields=e,s._nodes=nM(e,n),s._sortErrors=Dw(Object.keys(e)),n&&(s._excludedEdges=n),s}shape(e,n=[]){return this.clone().withMutation(s=>{let i=s._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...s._excludedEdges,...n]),s.setFields(Object.assign(s.fields,e),i)})}partial(){const e={};for(const[n,s]of Object.entries(this.fields))e[n]="optional"in s&&s.optional instanceof Function?s.optional():s;return this.setFields(e)}deepPartial(){return aa(this)}pick(e){const n={};for(const s of e)this.fields[s]&&(n[s]=this.fields[s]);return this.setFields(n)}omit(e){const n=Object.assign({},this.fields);for(const s of e)delete n[s];return this.setFields(n)}from(e,n,s){let i=ks.getter(e,!0);return this.transform(r=>{if(!r)return r;let o=r;return iM(r,e)&&(o=Object.assign({},r),s||delete o[e],o[n]=i(r)),o})}json(){return this.transform(sM)}noUnknown(e=!0,n=Zu.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let s=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const r=rM(this.schema,i);return!e||r.length===0||this.createError({params:{unknown:r.join(", ")}})}});return s.spec.noUnknown=e,s}unknown(e=!0,n=Zu.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const s={};for(const i of Object.keys(n))s[e(i)]=n[i];return s})}camelCase(){return this.transformKeys($c.camelCase)}snakeCase(){return this.transformKeys($c.snakeCase)}constantCase(){return this.transformKeys(e=>$c.snakeCase(e).toUpperCase())}describe(e){let n=super.describe(e);n.fields={};for(const[i,r]of Object.entries(this.fields)){var s;let o=e;(s=o)!=null&&s.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[i]})),n.fields[i]=r.describe(o)}return n}}Pw.prototype=Mw.prototype;const aM=["onSubmit"],lM=ie("h2",null,"Passwort Ändern",-1),cM=ie("p",{class:"text-sm text-gray mt-2 mb-4"}," Vorgaben: mind. 12 Zeihen, 1 Zahl, 1 Sonderzeichen, 1 Großbuchstabe, 1 Kleinbuchstabe ",-1),uM={class:"flex flex-col md:flex-row gap-1 mb-6"},hM={class:"flex-1"},dM={key:0,class:"text-red-alert text-sm top-full w-full px-2 flex-1"},fM=ie("a",{href:"#",class:"flex-1 font-bebas uppercase tracking-wider md:mt-5 md:pt-px pl-1 text-blue-active hover:text-blue-highlight transition"},"Passwort Vergessen ",-1),pM={class:"flex flex-col md:flex-row gap-3 md:gap-2 mb-7"},gM={class:"flex-1 relative"},mM={key:0,class:"text-red-alert text-sm top-full w-full px-2"},_M={class:"flex-1 relative"},yM={key:0,class:"text-red-alert text-sm top-full w-full px-2"},vM={class:"flex gap-2"},wM=ie("button",{class:"bt bt-primary rounded px-4"},"Änderungen Speichern",-1),EM={__name:"SetPassword",emits:["next","abort"],setup(t,{emit:e}){const n=HD(),s=QO(n,"users","user-one"),i=jn(),r=jn(),o=jn(),a={currentPassword:"",newPassword:"",confirmPassword:""},l=sl({currentPassword:"",newPassword:"",confirmPassword:""}),c=Pw().shape({currentPassword:oa().required("Dieses field ist nötig"),newPassword:oa().required("Dieses field ist nötig").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/,{message:"Passwort muss mind. 1 Zahl, 1 Sonderzeichen, 1 Großbuchstabe, 1 Kleinbuchstabe haben",excludeEmptyString:!0}).min(12,"Passwort muss mind. 12 Zeihen lange sein."),confirmPassword:oa().required("Dieses field ist nötig").test("password-match","Die Passwörter stimmen nicht",d=>d===a.newPassword)}),u=async function(d){await c.fields[d].validate(a[d],{abortEarly:!1}).catch(m=>{l[d]=m.errors[0]})&&(l[d]="")},h=async function(){for(let m in a)await u(m);if(!await c.isValid(a))return;if((await uD(s)).data().password!==a.currentPassword){l.currentPassword="Das Passwort ist nicht genau";return}await dD(s,{password:a.newPassword}),e("next")};return(d,p)=>(Ne(),ct("form",{onSubmit:uI(h,["prevent"])},[lM,cM,ie("fieldset",null,[ie("div",uM,[ie("div",hM,[Ee(Lc,{ref_key:"current_password",ref:i,modelValue:a.currentPassword,"onUpdate:modelValue":p[0]||(p[0]=m=>a.currentPassword=m),name:"current_password",type:"password",label:"Aktuelles Passwort",invalid:!!l.currentPassword,onKeyup:p[1]||(p[1]=m=>u("currentPassword"))},{append:$n(()=>[Ee(Fc,{"target-ref":i.value},null,8,["target-ref"])]),_:1},8,["modelValue","invalid"]),l.currentPassword?(Ne(),ct("p",dM,ri(l.currentPassword),1)):zn("",!0)]),fM])]),ie("fieldset",pM,[ie("div",gM,[Ee(Lc,{ref_key:"new_password",ref:r,modelValue:a.newPassword,"onUpdate:modelValue":p[2]||(p[2]=m=>a.newPassword=m),name:"new_password",type:"password",label:"NeuesPasswort",invalid:!!l.newPassword,onKeyup:p[3]||(p[3]=m=>u("newPassword"))},{append:$n(()=>[Ee(Fc,{"target-ref":r.value},null,8,["target-ref"])]),_:1},8,["modelValue","invalid"]),l.newPassword?(Ne(),ct("p",mM,ri(l.newPassword),1)):zn("",!0)]),ie("div",_M,[Ee(Lc,{ref_key:"confirm_password",ref:o,modelValue:a.confirmPassword,"onUpdate:modelValue":p[4]||(p[4]=m=>a.confirmPassword=m),name:"confirm_password",type:"password",label:"Neues Passwort viederholen",invalid:!!l.confirmPassword,onKeyup:p[5]||(p[5]=m=>u("confirmPassword"))},{append:$n(()=>[Ee(Fc,{"target-ref":o.value},null,8,["target-ref"])]),_:1},8,["modelValue","invalid"]),l.confirmPassword?(Ne(),ct("p",yM,ri(l.confirmPassword),1)):zn("",!0)])]),ie("div",vM,[ie("button",{onClick:p[6]||(p[6]=m=>d.$emit("abort")),type:"button",class:"bt bt-secondary rounded px-4"}," Abbrechen "),wM])],40,aM))}},TM={},IM={viewBox:"0 0 64 37",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round","clip-rule":"evenodd"},bM=AT('<g fill="none" stroke="currentColor"><path d="M60.5 5.5a2 2 0 0 0-2-2h-39a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h39a2 2 0 0 0 2-2v-26Z"></path><path d="M59.399 4.591 39 21.313 18.601 4.591"></path><path d="M63.5 4.5c0-2.208-1.792-4-4-4h-41c-2.208 0-4 1.792-4 4v28c0 2.208 1.792 4 4 4h41c2.208 0 4-1.792 4-4v-28Z"></path></g><path fill="none" stroke="currentColor" stroke-linejoin="miter" d="M3.5 21.5h9m-12-3h12m-9-3h9"></path>',2),CM=[bM];function SM(t,e){return Ne(),ct("svg",IM,CM)}const AM=To(TM,[["render",SM]]),kM={class:"mb-5"},RM={class:"grid grid-cols-[3rem_1fr] items-center gap-3"},xM={key:1,class:"font-oswald font-light text-xl"},NM={class:"col-start-2 text-sm text-gray"},OM={__name:"ToastVue",props:{title:{typeof:String,required:!0},icon:{typeof:String,default:""},message:{typeof:String,default:""}},setup(t){const e={mail:AM};return(n,s)=>(Ne(),ct("div",null,[ie("h2",kM,ri(t.title),1),ie("div",RM,[t.icon?(Ne(),kr(oT(e[t.icon]),{key:0})):zn("",!0),t.message?(Ne(),ct("div",xM,ri(t.message),1)):zn("",!0),ie("div",NM,[_h(n.$slots,"default")])])]))}},DM={key:0,class:"p-5 rounded-lg bg-card-active text-white"},Vc={__name:"StepVue",setup(t){const e=Is("step_counter").value++,n=Is("current_step"),s=Yt(()=>e===n.value);return(i,r)=>Sm(s)?(Ne(),ct("div",DM,[_h(i.$slots,"default")])):zn("",!0)}},PM={class:"container max-w-3xl"},MM=ie("h2",{class:"mb-5"},"Passwort",-1),LM=ie("b",{class:"text-white"},"Max.Mustermann@email.com",-1),FM={__name:"ModuleChangePassword",setup(t){const e=jn(0),n=jn(0);return qc("current_step",e),qc("step_counter",n),(s,i)=>(Ne(),ct("div",PM,[Ee(Vc,null,{default:$n(()=>[MM,ie("button",{class:"bt bt-primary rounded px-4",onClick:i[0]||(i[0]=r=>e.value++)}," Ändern ")]),_:1}),Ee(Vc,null,{default:$n(()=>[Ee(EM,{onNext:i[1]||(i[1]=r=>e.value++),onAbort:i[2]||(i[2]=r=>e.value=0)})]),_:1}),Ee(Vc,null,{default:$n(()=>[Ee(OM,{title:"Passwort Ändern",message:"Code versendet!",icon:"mail"},{default:$n(()=>[Jc(" Wir haben dir eine E-Mail zum Zurűcksethen deines Passwortes an "),LM,Jc(" geschickt. ")]),_:1})]),_:1})]))}},UM=ie("h1",{class:"text-center font-bebas text-4xl md:text-6xl uppercase text-red-alert mt-10 mb-20"}," Password Module ",-1),$M=gh({__name:"App",setup(t){return(e,n)=>(Ne(),ct(bt,null,[UM,Ee(FM)],64))}}),VM={apiKey:"AIzaSyAXS5Y0tbOnro-oktKuQAwhPjjcvd-DvZM",authDomain:"dyn-media-interview.firebaseapp.com",projectId:"dyn-media-interview",storageBucket:"dyn-media-interview.appspot.com",messagingSenderId:"638269505411",appId:"1:638269505411:web:287b01bb3b75e6f57b00b6"},BM=y_(VM),Lw=fI($M);Lw.use(WD,{firebaseApp:BM,modules:[zD()]});Lw.mount("#app");
