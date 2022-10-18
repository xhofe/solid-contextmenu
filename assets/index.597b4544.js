(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const k={},Re=(e,t)=>e===t,Ue=Symbol("solid-proxy"),We=Symbol("solid-track"),z={equals:Re};let Ge=Me;const I={},q=1,ee=2,Pe={owned:null,cleanups:null,context:null,owner:null};var _=null;let J=null,x=null,G=null,L=null,B=null,ce=0;function X(e,t){const n=x,i=_,s=e.length===0,o=s?Pe:{owned:null,cleanups:null,context:null,owner:t||i},r=s?e:()=>e(()=>de(o));_=o,x=null;try{return ae(r,!0)}finally{x=n,_=i}}function D(e,t){t=t?Object.assign({},z,t):z;const n={value:e,observers:null,observerSlots:null,pending:I,comparator:t.equals||void 0},i=s=>(typeof s=="function"&&(s=s(n.pending!==I?n.pending:n.value)),ue(n,s));return[Oe.bind(n),i]}function De(e,t,n){const i=fe(e,t,!0,q);Q(i)}function T(e,t,n){const i=fe(e,t,!1,q);Q(i)}function N(e,t,n){n=n?Object.assign({},z,n):z;const i=fe(e,t,!0,0);return i.pending=I,i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,Q(i),Oe.bind(i)}function Te(e){if(G)return e();let t;const n=G=[];try{t=e()}finally{G=null}return ae(()=>{for(let i=0;i<n.length;i+=1){const s=n[i];if(s.pending!==I){const o=s.pending;s.pending=I,ue(s,o)}}},!1),t}function R(e){let t,n=x;return x=null,t=e(),x=n,t}function K(e){return _===null||(_.cleanups===null?_.cleanups=[e]:_.cleanups.push(e)),e}function Xe(e){const t=Symbol("context");return{id:t,Provider:Ze(t),defaultValue:e}}function Ye(e){let t;return(t=He(_,e.id))!==void 0?t:e.defaultValue}function ke(e){const t=N(e);return N(()=>le(t()))}function Oe(){const e=J;if(this.sources&&(this.state||e)){const t=L;L=null,this.state===q||e?Q(this):te(this),L=t}if(x){const t=this.observers?this.observers.length:0;x.sources?(x.sources.push(this),x.sourceSlots.push(t)):(x.sources=[this],x.sourceSlots=[t]),this.observers?(this.observers.push(x),this.observerSlots.push(x.sources.length-1)):(this.observers=[x],this.observerSlots=[x.sources.length-1])}return this.value}function ue(e,t,n){if(G)return e.pending===I&&G.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let i=!1;return e.value=t,e.observers&&e.observers.length&&ae(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s];i&&J.disposed.has(o),(i&&!o.tState||!i&&!o.state)&&(o.pure?L.push(o):B.push(o),o.observers&&je(o)),i||(o.state=q)}if(L.length>1e6)throw L=[],new Error},!1),t}function Q(e){if(!e.fn)return;de(e);const t=_,n=x,i=ce;x=_=e,Je(e,e.value,i),x=n,_=t}function Je(e,t,n){let i;try{i=e.fn(t)}catch(s){qe(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?ue(e,i):e.value=i,e.updatedAt=n)}function fe(e,t,n,i=q,s){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:_,context:null,pure:n};return _===null||_!==Pe&&(_.owned?_.owned.push(o):_.owned=[o]),o}function Be(e){const t=J;if(e.state===0||t)return;if(e.state===ee||t)return te(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ce);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===q||t)Q(e);else if(e.state===ee||t){const s=L;L=null,te(e,n[0]),L=s}}function ae(e,t){if(L)return e();let n=!1;t||(L=[]),B?n=!0:B=[],ce++;try{const i=e();return Qe(n),i}catch(i){L||(B=null),qe(i)}}function Qe(e){L&&(Me(L),L=null),!e&&(B.length?Te(()=>{Ge(B),B=null}):B=null)}function Me(e){for(let t=0;t<e.length;t++)Be(e[t])}function te(e,t){const n=J;e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];s.sources&&(s.state===q||n?s!==t&&Be(s):(s.state===ee||n)&&te(s,t))}}function je(e){const t=J;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=ee,i.pure?L.push(i):B.push(i),i.observers&&je(i))}}function de(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),r=n.observerSlots.pop();i<s.length&&(o.sourceSlots[r]=i,s[i]=o,n.observerSlots[i]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)de(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function qe(e){throw e}function He(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:He(e.owner,t):void 0}function le(e){if(typeof e=="function"&&!e.length)return le(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=le(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function Ze(e){return function(n){let i;return De(()=>i=R(()=>(_.context={[e]:n.value},ke(()=>n.children)))),i}}const ze=Symbol("fallback");function we(e){for(let t=0;t<e.length;t++)e[t]()}function et(e,t,n={}){let i=[],s=[],o=[],r=0,l=t.length>1?[]:null;return K(()=>we(o)),()=>{let a=e()||[],u,c;return a[We],R(()=>{let g=a.length,v,h,C,A,f,d,y,w,m;if(g===0)r!==0&&(we(o),o=[],i=[],s=[],r=0,l&&(l=[])),n.fallback&&(i=[ze],s[0]=X($=>(o[0]=$,n.fallback())),r=1);else if(r===0){for(s=new Array(g),c=0;c<g;c++)i[c]=a[c],s[c]=X(p);r=g}else{for(C=new Array(g),A=new Array(g),l&&(f=new Array(g)),d=0,y=Math.min(r,g);d<y&&i[d]===a[d];d++);for(y=r-1,w=g-1;y>=d&&w>=d&&i[y]===a[w];y--,w--)C[w]=s[y],A[w]=o[y],l&&(f[w]=l[y]);for(v=new Map,h=new Array(w+1),c=w;c>=d;c--)m=a[c],u=v.get(m),h[c]=u===void 0?-1:u,v.set(m,c);for(u=d;u<=y;u++)m=i[u],c=v.get(m),c!==void 0&&c!==-1?(C[c]=s[u],A[c]=o[u],l&&(f[c]=l[u]),c=h[c],v.set(m,c)):o[u]();for(c=d;c<g;c++)c in C?(s[c]=C[c],o[c]=A[c],l&&(l[c]=f[c],l[c](c))):s[c]=X(p);s=s.slice(0,r=g),i=a.slice(0)}return s});function p(g){if(o[c]=g,l){const[v,h]=D(c);return l[c]=h,t(a[c],v)}return t(a[c])}}}function b(e,t){return R(()=>e(t||{}))}function Z(){return!0}const Fe={get(e,t,n){return t===Ue?n:e.get(t)},has(e,t){return e.has(t)},set:Z,deleteProperty:Z,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Z,deleteProperty:Z}},ownKeys(e){return e.keys()}};function oe(e){return(e=typeof e=="function"?e():e)==null?{}:e}function Y(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const i=oe(e[n])[t];if(i!==void 0)return i}},has(t){for(let n=e.length-1;n>=0;n--)if(t in oe(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(oe(e[n])));return[...new Set(t)]}},Fe)}function he(e,...t){const n=new Set(t.flat()),i=Object.getOwnPropertyDescriptors(e),s=t.map(o=>{const r={};for(let l=0;l<o.length;l++){const a=o[l];Object.defineProperty(r,a,i[a]?i[a]:{get(){return e[a]},set(){return!0}})}return r});return s.push(new Proxy({get(o){return n.has(o)?void 0:e[o]},has(o){return n.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!n.has(o))}},Fe)),s}function ve(e){const t="fallback"in e&&{fallback:()=>e.fallback};return N(et(()=>e.each,e.children,t||void 0))}function ne(e){let t=!1;const n=N(()=>e.when,void 0,{equals:(i,s)=>t?i===s:!i==!s});return N(()=>{const i=n();if(i){const s=e.children;return(t=typeof s=="function"&&s.length>0)?R(()=>s(i)):s}return e.fallback})}const tt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],nt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...tt]),it=new Set(["innerHTML","textContent","innerText","children"]),st={className:"class",htmlFor:"for"},be={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},ot=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),lt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function rt(e,t,n){let i=n.length,s=t.length,o=i,r=0,l=0,a=t[s-1].nextSibling,u=null;for(;r<s||l<o;){if(t[r]===n[l]){r++,l++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===r){const c=o<i?l?n[l-1].nextSibling:n[o-l]:a;for(;l<o;)e.insertBefore(n[l++],c)}else if(o===l)for(;r<s;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[o-1]&&n[l]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[l++],t[r++].nextSibling),e.insertBefore(n[--o],c),t[s]=n[o]}else{if(!u){u=new Map;let p=l;for(;p<o;)u.set(n[p],p++)}const c=u.get(t[r]);if(c!=null)if(l<c&&c<o){let p=r,g=1,v;for(;++p<s&&p<o&&!((v=u.get(t[p]))==null||v!==c+g);)g++;if(g>c-l){const h=t[r];for(;l<c;)e.insertBefore(n[l++],h)}else e.replaceChild(n[l++],t[r++])}else r++;else t[r++].remove()}}}const xe="_$DX_DELEGATE";function ct(e,t,n){let i;return X(s=>{i=s,t===document?e():S(t,e(),t.firstChild?null:void 0,n)}),()=>{i(),t.textContent=""}}function H(e,t,n){const i=document.createElement("template");i.innerHTML=e;let s=i.content.firstChild;return n&&(s=s.firstChild),s}function se(e,t=window.document){const n=t[xe]||(t[xe]=new Set);for(let i=0,s=e.length;i<s;i++){const o=e[i];n.has(o)||(n.add(o),t.addEventListener(o,yt))}}function ut(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ft(e,t,n,i){i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i)}function M(e,t){t==null?e.removeAttribute("class"):e.className=t}function at(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n)}function dt(e,t,n={}){const i=Object.keys(t||{}),s=Object.keys(n);let o,r;for(o=0,r=s.length;o<r;o++){const l=s[o];!l||l==="undefined"||t[l]||(Ae(e,l,!1),delete n[l])}for(o=0,r=i.length;o<r;o++){const l=i[o],a=!!t[l];!l||l==="undefined"||n[l]===a||!a||(Ae(e,l,!0),n[l]=a)}return n}function ht(e,t,n={}){const i=e.style,s=typeof n=="string";if(t==null&&s||typeof t=="string")return i.cssText=t;s&&(i.cssText=void 0,n={}),t||(t={});let o,r;for(r in n)t[r]==null&&i.removeProperty(r),delete n[r];for(r in t)o=t[r],o!==n[r]&&(i.setProperty(r,o),n[r]=o);return n}function me(e,t,n,i){typeof t=="function"?T(s=>$e(e,t(),s,n,i)):$e(e,t,void 0,n,i)}function S(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return V(e,t,i,n);T(s=>V(e,t(),s,n),i)}function mt(e,t,n,i,s={},o=!1){t||(t={});for(const r in s)if(!(r in t)){if(r==="children")continue;_e(e,r,null,s[r],n,o)}for(const r in t){if(r==="children"){i||V(e,t.children);continue}const l=t[r];s[r]=_e(e,r,l,s[r],n,o)}}function gt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ae(e,t,n){const i=t.trim().split(/\s+/);for(let s=0,o=i.length;s<o;s++)e.classList.toggle(i[s],n)}function _e(e,t,n,i,s,o){let r,l,a;if(t==="style")return ht(e,n,i);if(t==="classList")return dt(e,n,i);if(n===i)return i;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);i&&e.removeEventListener(u,i),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);i&&e.removeEventListener(u,i,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),c=ot.has(u);if(!c&&i){const p=Array.isArray(i)?i[0]:i;e.removeEventListener(u,p)}(c||n)&&(at(e,u,n,c),c&&se([u]))}else if((a=it.has(t))||!s&&(be[t]||(l=nt.has(t)))||(r=e.nodeName.includes("-")))t==="class"||t==="className"?M(e,n):r&&!l&&!a?e[gt(t)]=n:e[be[t]||t]=n;else{const u=s&&t.indexOf(":")>-1&&lt[t.split(":")[0]];u?ft(e,u,t,n):ut(e,st[t]||t,n)}return n}function yt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),k.registry&&!k.done&&(k.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>i.remove()));n!==null;){const i=n[t];if(i&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?i.call(n,s,e):i.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function $e(e,t,n={},i,s){return t||(t={}),!s&&"children"in t&&T(()=>n.children=V(e,t.children,n.children)),t.ref&&t.ref(e),T(()=>mt(e,t,i,!0,n,!0)),n}function V(e,t,n,i,s){for(k.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,r=i!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(k.context)return n;if(o==="number"&&(t=t.toString()),r){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=F(e,n,i,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(k.context)return n;n=F(e,n,i)}else{if(o==="function")return T(()=>{let l=t();for(;typeof l=="function";)l=l();n=V(e,l,n,i)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(re(l,t,n,s))return T(()=>n=V(e,l,n,i,!0)),()=>n;if(k.context){for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=F(e,n,i),r)return n}else a?n.length===0?Ce(e,l,i):rt(e,n,l):(n&&F(e),Ce(e,l));n=l}else if(t instanceof Node){if(k.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=F(e,n,i,t);F(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function re(e,t,n,i){let s=!1;for(let o=0,r=t.length;o<r;o++){let l=t[o],a=n&&n[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))s=re(e,l,a)||s;else if(typeof l=="function")if(i){for(;typeof l=="function";)l=l();s=re(e,Array.isArray(l)?l:[l],a)||s}else e.push(l),s=!0;else{const u=String(l);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return s}function Ce(e,t,n){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function F(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(s!==l){const a=l.parentNode===e;!o&&!r?a?e.replaceChild(s,l):e.insertBefore(s,n):a&&l.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const pt="http://www.w3.org/2000/svg";function wt(e,t=!1){return t?document.createElementNS(pt,e):document.createElement(e)}function vt(e){const{useShadow:t}=e,n=document.createTextNode(""),i=e.mount||document.body;function s(){if(k.context){const[o,r]=D(!1);return queueMicrotask(()=>r(!0)),()=>o()&&e.children}else return()=>e.children}if(i instanceof HTMLHeadElement){const[o,r]=D(!1),l=()=>r(!0);X(a=>S(i,()=>o()?a():s()(),null)),K(()=>{k.context?queueMicrotask(l):l()})}else{const o=wt(e.isSVG?"g":"div",e.isSVG),r=t&&o.attachShadow?o.attachShadow({mode:"open"}):o;Object.defineProperty(o,"host",{get(){return n.parentNode}}),S(r,s()),i.appendChild(o),e.ref&&e.ref(o),K(()=>i.removeChild(o))}return n}var P=(e=>(e.menu="solid-contextmenu",e.submenu="solid-contextmenu solid-contextmenu__submenu",e.submenuArrow="solid-contextmenu__submenu-arrow",e.submenuOpen="solid-contextmenu__submenu--is-open",e.separator="solid-contextmenu__separator",e.item="solid-contextmenu__item",e.itemDisabled="solid-contextmenu__item--disabled",e.itemContent="solid-contextmenu__item__content",e.theme="solid-contextmenu__theme--",e.animationWillEnter="solid-contextmenu__will-enter--",e.animationWillLeave="solid-contextmenu__will-leave--",e))(P||{});const W={fade:"fade",flip:"flip",scale:"scale",slide:"slide"};function Ee(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}const bt=e=>{let t,n=!0;const[i,s]=D(),[o,r]=D(),l=ke(()=>e.children),a=e.name||"s";e=Y({name:a,enterActiveClass:a+"-enter-active",enterClass:a+"-enter",enterToClass:a+"-enter-to",exitActiveClass:a+"-exit-active",exitClass:a+"-exit",exitToClass:a+"-exit-to"},e);const{onBeforeEnter:u,onEnter:c,onAfterEnter:p,onBeforeExit:g,onExit:v,onAfterExit:h}=e;function C(f,d){if(!n||e.appear){let y=function(E){f&&(!E||E.target===f)&&(f.removeEventListener("transitionend",y),f.removeEventListener("animationend",y),f.classList.remove(...m),f.classList.remove(...$),Te(()=>{i()!==f&&s(f),o()===f&&r(void 0)}),p&&p(f),e.mode==="inout"&&A(f,d))};const w=e.enterClass.split(" "),m=e.enterActiveClass.split(" "),$=e.enterToClass.split(" ");u&&u(f),f.classList.add(...w),f.classList.add(...m),Ee(()=>{f.classList.remove(...w),f.classList.add(...$),c&&c(f,()=>y()),(!c||c.length<2)&&(f.addEventListener("transitionend",y),f.addEventListener("animationend",y))})}d&&!e.mode?r(f):s(f)}function A(f,d){const y=e.exitClass.split(" "),w=e.exitActiveClass.split(" "),m=e.exitToClass.split(" ");if(!d.parentNode)return $();g&&g(d),d.classList.add(...y),d.classList.add(...w),Ee(()=>{d.classList.remove(...y),d.classList.add(...m)}),v&&v(d,()=>$()),(!v||v.length<2)&&(d.addEventListener("transitionend",$),d.addEventListener("animationend",$));function $(E){(!E||E.target===d)&&(d.removeEventListener("transitionend",$),d.removeEventListener("animationend",$),d.classList.remove(...w),d.classList.remove(...m),i()===d&&s(void 0),h&&h(d),e.mode==="outin"&&C(f,d))}}return De(f=>{for(t=l();typeof t=="function";)t=t();return R(()=>(t&&t!==f&&(e.mode!=="outin"?C(t,f):n&&s(t)),f&&f!==t&&e.mode!=="inout"&&A(t,f),n=!1,t))}),[i,o]};function xt(e){return{all:e=e||new Map,on:function(t,n){var i=e.get(t);i?i.push(n):e.set(t,[n])},off:function(t,n){var i=e.get(t);i&&(n?i.splice(i.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var i=e.get(t);i&&i.slice().map(function(s){s(n)}),(i=e.get("*"))&&i.slice().map(function(s){s(t,n)})}}}const O=xt(),Ie=Xe(),Ke=()=>Ye(Ie);function Ve(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Ve(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function ge(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=Ve(e))&&(i&&(i+=" "),i+=t);return i}const At=H("<div></div>"),Le=(e,t,n)=>e+t<=n?e:e<t?n-t:e-t,_t=(e,t)=>{const n={width:window.innerWidth,height:window.innerHeight};return{x:Le(e.x,t.width,n.width),y:Le(e.y,t.height,n.height)}},$t=e=>{const[t,n]=he(e,["id","theme","animation","onShown","onHidden"]),[i,s]=D(!1),[o,r]=D({x:0,y:0});let l;const[a,u]=D();O.on("show",h=>{h.id===t.id&&(h.event.preventDefault(),u(h.props),s(!0),r(h.position??_t({x:h.event.clientX,y:h.event.clientY},{width:l.offsetWidth,height:l.offsetHeight})))});const c=()=>{O.emit("hide",t.id),s(!1)},p=Y({shown:i,animation:"scale",hide:c,props:a},t);O.on("hideAll",()=>{c()}),K(()=>{O.off("show"),O.off("hideAll")});const g=N(()=>{let h="";return t.animation&&(h=`solid-contextmenu-${t.animation}`),console.log(h),h}),v=N(()=>({enterActiveClass:g()+"-enter-active",exitActiveClass:g()+"-exit-active"}));return b(Ie.Provider,{value:p,get children(){return b(vt,{get children(){return b(bt,Y(v,{get children(){return b(ne,{get when(){return i()},get children(){const h=At.cloneNode(!0),C=l;return typeof C=="function"?C(h):l=h,Ct(h,()=>c()),me(h,n,!1,!1),T(A=>{const f=ge(P.menu,n.class,{[`${P.theme}${t.theme}`]:t.theme}),d=o().x+"px",y=o().y+"px";return f!==A._v$&&M(h,A._v$=f),d!==A._v$2&&h.style.setProperty("left",A._v$2=d),y!==A._v$3&&h.style.setProperty("top",A._v$3=y),A},{_v$:void 0,_v$2:void 0,_v$3:void 0}),h}})}}))}})}})};function Ct(e,t){const n=i=>!e.contains(i.target)&&t()?.();document.body.addEventListener("click",n),K(()=>document.body.removeEventListener("click",n))}function Et(e){return typeof e=="function"}function ie(e,t){return Et(e)?e(t):e}const Lt=H("<div><div></div></div>"),j=e=>{const[t,n]=he(e,["hidden","disabled","onClick","data","children"]),i=Y({hidden:!1,disabled:!1},t),{props:s,hide:o}=Ke(),r=N(()=>({props:s(),data:e.data})),l=N(()=>ie(i.disabled,r())),a=N(()=>ie(i.hidden,r())),u=c=>{l()||(e.onClick?.({event:c,...r()}),o())};return b(ne,{get when(){return!a()},get children(){const c=Lt.cloneNode(!0),p=c.firstChild;return c.$$click=u,me(c,n,!1,!0),S(p,()=>t.children),T(g=>{const v=ge(P.item,{[P.itemDisabled]:l()}),h=P.itemContent;return v!==g._v$&&M(c,g._v$=v),h!==g._v$2&&M(p,g._v$2=h),g},{_v$:void 0,_v$2:void 0}),c}})};se(["click"]);const St=H("<div></div>"),Nt=()=>(()=>{const e=St.cloneNode(!0);return T(()=>M(e,P.separator)),e})(),Pt=H("<div></div>"),Dt=H("<div><div><span></span></div></div>"),Tt=e=>{const[t,n]=he(e,["arrow","children","disabled","hidden","label","class"]),i=Y({arrow:"\u25B6\uFE0F",disabled:!1,hidden:!1},t),{props:s,id:o}=Ke(),r=N(()=>({props:s()})),l=N(()=>ie(i.disabled,r())),a=N(()=>ie(i.hidden,r()));let u,c;const[p,g]=D({x:0,y:0}),v=()=>{const f=u.getBoundingClientRect(),d=c.getBoundingClientRect(),y={width:window.innerWidth,height:window.innerHeight};let w=f.right;w+d.width>y.width&&(f.left-d.width>0?w=f.left-d.width:w=y.width-d.width);let m=f.top;m+d.height>y.height&&(f.bottom-d.height>0?m=f.bottom-d.height:m=y.height-d.height),g({x:w,y:m}),console.log(p())},[h,C]=D(!1),A=()=>{C(!0),v()};return O.on("hide",f=>{f===o&&C(!1)}),K(()=>{O.off("hide")}),b(ne,{get when(){return!a()},get children(){const f=Dt.cloneNode(!0),d=f.firstChild,y=d.firstChild;f.$$click=()=>h()?C(!1):A(),f.addEventListener("mouseleave",()=>C(!1)),f.addEventListener("mouseenter",()=>A()),me(f,n,!1,!0);const w=u;return typeof w=="function"?w(d):u=d,S(d,()=>i.label,y),S(y,()=>i.arrow),S(f,b(ne,{get when(){return h()},get children(){const m=Pt.cloneNode(!0),$=c;return typeof $=="function"?$(m):c=m,S(m,()=>i.children),T(E=>{const U=P.submenu,ye=p().x+"px",pe=p().y+"px";return U!==E._v$&&M(m,E._v$=U),ye!==E._v$2&&m.style.setProperty("left",E._v$2=ye),pe!==E._v$3&&m.style.setProperty("top",E._v$3=pe),E},{_v$:void 0,_v$2:void 0,_v$3:void 0}),m}}),null),T(m=>{const $=ge(P.item,t.class,{[P.itemDisabled]:l()}),E=P.itemContent,U=P.submenuArrow;return $!==m._v$4&&M(f,m._v$4=$),E!==m._v$5&&M(d,m._v$5=E),U!==m._v$6&&M(y,m._v$6=U),m},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),f}})};se(["click"]);const kt=e=>({show:(t,n)=>{O.emit("show",{id:n?.id||e?.id,props:n?.props||e?.props,event:t,position:n?.position})},hideAll:()=>{O.emit("hideAll")}}),Ot=H("<div><h4>right click</h4><select></select><select></select></div>"),Se=H("<option></option>"),Ne=1,Bt=()=>{const[e,t]=D(W.scale),[n,i]=D("light"),{show:s}=kt({id:Ne,props:"lala"});return(()=>{const o=Ot.cloneNode(!0),r=o.firstChild,l=r.nextSibling,a=l.nextSibling;return o.$$contextmenu=u=>{s(u,{props:1})},o.style.setProperty("height","100vh"),o.style.setProperty("display","flex"),o.style.setProperty("flex-direction","column"),o.style.setProperty("justify-content","center"),o.style.setProperty("align-items","center"),o.style.setProperty("gap","0.5rem"),l.addEventListener("change",u=>{t(u.currentTarget.value)}),S(l,b(ve,{get each(){return[W.scale,W.fade,W.flip,W.slide]},children:u=>(()=>{const c=Se.cloneNode(!0);return c.value=u,S(c,u),c})()})),a.addEventListener("change",u=>{i(u.currentTarget.value)}),S(a,b(ve,{each:["light","dark"],children:u=>(()=>{const c=Se.cloneNode(!0);return c.value=u,S(c,u),c})()})),S(o,b($t,{id:Ne,get animation(){return e()},get theme(){return n()},get children(){return[b(j,{children:"\u26A1 Beautiful"}),b(j,{children:"\u{1F60A} Easy use"}),b(Nt,{}),b(j,{children:"\u{1F495} Built with heart"}),b(Tt,{label:"\u25B6\uFE0F submenu",get children(){return[b(j,{children:"\u{1F44B} Hello"}),b(j,{children:"\u{1F600} Hello"}),b(j,{children:"\u{1F91D} \u4F60\u597D"})]}}),b(j,{disabled:!0,children:"\u274C Disabled"})]}}),null),o})()};se(["contextmenu"]);ct(()=>b(Bt,{}),document.getElementById("root"));