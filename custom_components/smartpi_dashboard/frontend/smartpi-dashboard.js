var pc=Object.defineProperty;var dc=Object.getOwnPropertyDescriptor;var z=(n,i,e,t)=>{for(var s=t>1?void 0:t?dc(i,e):i,a=n.length-1,o;a>=0;a--)(o=n[a])&&(s=(t?o(i,e,s):o(s))||s);return t&&s&&pc(i,e,s),s};var is=globalThis,ns=is.ShadowRoot&&(is.ShadyCSS===void 0||is.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rr=Symbol(),Sa=new WeakMap,En=class{constructor(i,e,t){if(this._$cssResult$=!0,t!==rr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=e}get styleSheet(){let i=this.o,e=this.t;if(ns&&i===void 0){let t=e!==void 0&&e.length===1;t&&(i=Sa.get(e)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),t&&Sa.set(e,i))}return i}toString(){return this.cssText}},ss=n=>new En(typeof n=="string"?n:n+"",void 0,rr),Le=(n,...i)=>{let e=n.length===1?n[0]:i.reduce((t,s,a)=>t+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[a+1],n[0]);return new En(e,n,rr)},Aa=(n,i)=>{if(ns)n.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of i){let t=document.createElement("style"),s=is.litNonce;s!==void 0&&t.setAttribute("nonce",s),t.textContent=e.cssText,n.appendChild(t)}},ar=ns?n=>n:n=>n instanceof CSSStyleSheet?(i=>{let e="";for(let t of i.cssRules)e+=t.cssText;return ss(e)})(n):n;var{is:uc,defineProperty:mc,getOwnPropertyDescriptor:fc,getOwnPropertyNames:hc,getOwnPropertySymbols:gc,getPrototypeOf:bc}=Object,rs=globalThis,Ca=rs.trustedTypes,vc=Ca?Ca.emptyScript:"",xc=rs.reactiveElementPolyfillSupport,Ln=(n,i)=>n,zn={toAttribute(n,i){switch(i){case Boolean:n=n?vc:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,i){let e=n;switch(i){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},as=(n,i)=>!uc(n,i),Ta={attribute:!0,type:String,converter:zn,reflect:!1,useDefault:!1,hasChanged:as};Symbol.metadata??=Symbol("metadata"),rs.litPropertyMetadata??=new WeakMap;var ei=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,e=Ta){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(i,e),!e.noAccessor){let t=Symbol(),s=this.getPropertyDescriptor(i,t,e);s!==void 0&&mc(this.prototype,i,s)}}static getPropertyDescriptor(i,e,t){let{get:s,set:a}=fc(this.prototype,i)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){let r=s?.call(this);a?.call(this,o),this.requestUpdate(i,r,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??Ta}static _$Ei(){if(this.hasOwnProperty(Ln("elementProperties")))return;let i=bc(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(Ln("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ln("properties"))){let e=this.properties,t=[...hc(e),...gc(e)];for(let s of t)this.createProperty(s,e[s])}let i=this[Symbol.metadata];if(i!==null){let e=litPropertyMetadata.get(i);if(e!==void 0)for(let[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let s=this._$Eu(e,t);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){let e=[];if(Array.isArray(i)){let t=new Set(i.flat(1/0).reverse());for(let s of t)e.unshift(ar(s))}else i!==void 0&&e.push(ar(i));return e}static _$Eu(i,e){let t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(i=>i(this))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){let i=new Map,e=this.constructor.elementProperties;for(let t of e.keys())this.hasOwnProperty(t)&&(i.set(t,this[t]),delete this[t]);i.size>0&&(this._$Ep=i)}createRenderRoot(){let i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Aa(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(i=>i.hostConnected?.())}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach(i=>i.hostDisconnected?.())}attributeChangedCallback(i,e,t){this._$AK(i,t)}_$ET(i,e){let t=this.constructor.elementProperties.get(i),s=this.constructor._$Eu(i,t);if(s!==void 0&&t.reflect===!0){let a=(t.converter?.toAttribute!==void 0?t.converter:zn).toAttribute(e,t.type);this._$Em=i,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(i,e){let t=this.constructor,s=t._$Eh.get(i);if(s!==void 0&&this._$Em!==s){let a=t.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:zn;this._$Em=s;let r=o.fromAttribute(e,a.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(i,e,t,s=!1,a){if(i!==void 0){let o=this.constructor;if(s===!1&&(a=this[i]),t??=o.getPropertyOptions(i),!((t.hasChanged??as)(a,e)||t.useDefault&&t.reflect&&a===this._$Ej?.get(i)&&!this.hasAttribute(o._$Eu(i,t))))return;this.C(i,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,e,{useDefault:t,reflect:s,wrapped:a},o){t&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,o??e??this[i]),a!==!0||o!==void 0)||(this._$AL.has(i)||(this.hasUpdated||t||(e=void 0),this._$AL.set(i,e)),s===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[s,a]of t){let{wrapped:o}=a,r=this[s];o!==!0||this._$AL.has(s)||r===void 0||this.C(s,void 0,a,r)}}let i=!1,e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(t){throw i=!1,this._$EM(),t}i&&this._$AE(e)}willUpdate(i){}_$AE(i){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(i){}firstUpdated(i){}};ei.elementStyles=[],ei.shadowRootOptions={mode:"open"},ei[Ln("elementProperties")]=new Map,ei[Ln("finalized")]=new Map,xc?.({ReactiveElement:ei}),(rs.reactiveElementVersions??=[]).push("2.1.2");var lr=globalThis,Ma=n=>n,os=lr.trustedTypes,Pa=os?os.createPolicy("lit-html",{createHTML:n=>n}):void 0,cr="$lit$",ti=`lit$${Math.random().toFixed(9).slice(2)}$`,pr="?"+ti,yc=`<${pr}>`,Mi=document,In=()=>Mi.createComment(""),Dn=n=>n===null||typeof n!="object"&&typeof n!="function",dr=Array.isArray,Da=n=>dr(n)||typeof n?.[Symbol.iterator]=="function",or=`[ 	
\f\r]`,Rn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ea=/-->/g,La=/>/g,Ci=RegExp(`>|${or}(?:([^\\s"'>=/]+)(${or}*=${or}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),za=/'/g,Ra=/"/g,Fa=/^(?:script|style|textarea|title)$/i,ur=n=>(i,...e)=>({_$litType$:n,strings:i,values:e}),b=ur(1),ze=ur(2),Rd=ur(3),Mt=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),Ia=new WeakMap,Ti=Mi.createTreeWalker(Mi,129);function qa(n,i){if(!dr(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pa!==void 0?Pa.createHTML(i):i}var Ha=(n,i)=>{let e=n.length-1,t=[],s,a=i===2?"<svg>":i===3?"<math>":"",o=Rn;for(let r=0;r<e;r++){let c=n[r],d,g,f=-1,u=0;for(;u<c.length&&(o.lastIndex=u,g=o.exec(c),g!==null);)u=o.lastIndex,o===Rn?g[1]==="!--"?o=Ea:g[1]!==void 0?o=La:g[2]!==void 0?(Fa.test(g[2])&&(s=RegExp("</"+g[2],"g")),o=Ci):g[3]!==void 0&&(o=Ci):o===Ci?g[0]===">"?(o=s??Rn,f=-1):g[1]===void 0?f=-2:(f=o.lastIndex-g[2].length,d=g[1],o=g[3]===void 0?Ci:g[3]==='"'?Ra:za):o===Ra||o===za?o=Ci:o===Ea||o===La?o=Rn:(o=Ci,s=void 0);let x=o===Ci&&n[r+1].startsWith("/>")?" ":"";a+=o===Rn?c+yc:f>=0?(t.push(d),c.slice(0,f)+cr+c.slice(f)+ti+x):c+ti+(f===-2?r:x)}return[qa(n,a+(n[e]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),t]},Fn=class n{constructor({strings:i,_$litType$:e},t){let s;this.parts=[];let a=0,o=0,r=i.length-1,c=this.parts,[d,g]=Ha(i,e);if(this.el=n.createElement(d,t),Ti.currentNode=this.el.content,e===2||e===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=Ti.nextNode())!==null&&c.length<r;){if(s.nodeType===1){if(s.hasAttributes())for(let f of s.getAttributeNames())if(f.endsWith(cr)){let u=g[o++],x=s.getAttribute(f).split(ti),_=/([.?@])?(.*)/.exec(u);c.push({type:1,index:a,name:_[2],strings:x,ctor:_[1]==="."?cs:_[1]==="?"?ps:_[1]==="@"?ds:Ei}),s.removeAttribute(f)}else f.startsWith(ti)&&(c.push({type:6,index:a}),s.removeAttribute(f));if(Fa.test(s.tagName)){let f=s.textContent.split(ti),u=f.length-1;if(u>0){s.textContent=os?os.emptyScript:"";for(let x=0;x<u;x++)s.append(f[x],In()),Ti.nextNode(),c.push({type:2,index:++a});s.append(f[u],In())}}}else if(s.nodeType===8)if(s.data===pr)c.push({type:2,index:a});else{let f=-1;for(;(f=s.data.indexOf(ti,f+1))!==-1;)c.push({type:7,index:a}),f+=ti.length-1}a++}}static createElement(i,e){let t=Mi.createElement("template");return t.innerHTML=i,t}};function Pi(n,i,e=n,t){if(i===Mt)return i;let s=t!==void 0?e._$Co?.[t]:e._$Cl,a=Dn(i)?void 0:i._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),a===void 0?s=void 0:(s=new a(n),s._$AT(n,e,t)),t!==void 0?(e._$Co??=[])[t]=s:e._$Cl=s),s!==void 0&&(i=Pi(n,s._$AS(n,i.values),s,t)),i}var ls=class{constructor(i,e){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){let{el:{content:e},parts:t}=this._$AD,s=(i?.creationScope??Mi).importNode(e,!0);Ti.currentNode=s;let a=Ti.nextNode(),o=0,r=0,c=t[0];for(;c!==void 0;){if(o===c.index){let d;c.type===2?d=new cn(a,a.nextSibling,this,i):c.type===1?d=new c.ctor(a,c.name,c.strings,this,i):c.type===6&&(d=new us(a,this,i)),this._$AV.push(d),c=t[++r]}o!==c?.index&&(a=Ti.nextNode(),o++)}return Ti.currentNode=Mi,s}p(i){let e=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(i,t,e),e+=t.strings.length-2):t._$AI(i[e])),e++}},cn=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,e,t,s){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=i,this._$AB=e,this._$AM=t,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode,e=this._$AM;return e!==void 0&&i?.nodeType===11&&(i=e.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,e=this){i=Pi(this,i,e),Dn(i)?i===M||i==null||i===""?(this._$AH!==M&&this._$AR(),this._$AH=M):i!==this._$AH&&i!==Mt&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):Da(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==M&&Dn(this._$AH)?this._$AA.nextSibling.data=i:this.T(Mi.createTextNode(i)),this._$AH=i}$(i){let{values:e,_$litType$:t}=i,s=typeof t=="number"?this._$AC(i):(t.el===void 0&&(t.el=Fn.createElement(qa(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===s)this._$AH.p(e);else{let a=new ls(s,this),o=a.u(this.options);a.p(e),this.T(o),this._$AH=a}}_$AC(i){let e=Ia.get(i.strings);return e===void 0&&Ia.set(i.strings,e=new Fn(i)),e}k(i){dr(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,t,s=0;for(let a of i)s===e.length?e.push(t=new n(this.O(In()),this.O(In()),this,this.options)):t=e[s],t._$AI(a),s++;s<e.length&&(this._$AR(t&&t._$AB.nextSibling,s),e.length=s)}_$AR(i=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);i!==this._$AB;){let t=Ma(i).nextSibling;Ma(i).remove(),i=t}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}},Ei=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,e,t,s,a){this.type=1,this._$AH=M,this._$AN=void 0,this.element=i,this.name=e,this._$AM=s,this.options=a,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=M}_$AI(i,e=this,t,s){let a=this.strings,o=!1;if(a===void 0)i=Pi(this,i,e,0),o=!Dn(i)||i!==this._$AH&&i!==Mt,o&&(this._$AH=i);else{let r=i,c,d;for(i=a[0],c=0;c<a.length-1;c++)d=Pi(this,r[t+c],e,c),d===Mt&&(d=this._$AH[c]),o||=!Dn(d)||d!==this._$AH[c],d===M?i=M:i!==M&&(i+=(d??"")+a[c+1]),this._$AH[c]=d}o&&!s&&this.j(i)}j(i){i===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},cs=class extends Ei{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===M?void 0:i}},ps=class extends Ei{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==M)}},ds=class extends Ei{constructor(i,e,t,s,a){super(i,e,t,s,a),this.type=5}_$AI(i,e=this){if((i=Pi(this,i,e,0)??M)===Mt)return;let t=this._$AH,s=i===M&&t!==M||i.capture!==t.capture||i.once!==t.once||i.passive!==t.passive,a=i!==M&&(t===M||s);s&&this.element.removeEventListener(this.name,this,t),a&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}},us=class{constructor(i,e,t){this.element=i,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(i){Pi(this,i)}},Oa={M:cr,P:ti,A:pr,C:1,L:Ha,R:ls,D:Da,V:Pi,I:cn,H:Ei,N:ps,U:ds,B:cs,F:us},wc=lr.litHtmlPolyfillSupport;wc?.(Fn,cn),(lr.litHtmlVersions??=[]).push("3.3.3");var Na=(n,i,e)=>{let t=e?.renderBefore??i,s=t._$litPart$;if(s===void 0){let a=e?.renderBefore??null;t._$litPart$=s=new cn(i.insertBefore(In(),a),a,void 0,e??{})}return s._$AI(n),s};var mr=globalThis,xe=class extends ei{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Na(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Mt}};xe._$litElement$=!0,xe.finalized=!0,mr.litElementHydrateSupport?.({LitElement:xe});var _c=mr.litElementPolyfillSupport;_c?.({LitElement:xe});(mr.litElementVersions??=[]).push("4.2.2");var Fe=n=>(i,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,i)}):customElements.define(n,i)};var $c={attribute:!0,type:String,converter:zn,reflect:!1,hasChanged:as},kc=(n=$c,i,e)=>{let{kind:t,metadata:s}=e,a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),t==="setter"&&((n=Object.create(n)).wrapped=!0),a.set(e.name,n),t==="accessor"){let{name:o}=e;return{set(r){let c=i.get.call(this);i.set.call(this,r),this.requestUpdate(o,c,n,!0,r)},init(r){return r!==void 0&&this.C(o,void 0,n,r),r}}}if(t==="setter"){let{name:o}=e;return function(r){let c=this[o];i.call(this,r),this.requestUpdate(o,c,n,!0,r)}}throw Error("Unsupported decorator location: "+t)};function G(n){return(i,e)=>typeof e=="object"?kc(n,i,e):((t,s,a)=>{let o=s.hasOwnProperty(a);return s.constructor.createProperty(a,t),o?Object.getOwnPropertyDescriptor(s,a):void 0})(n,i,e)}function ne(n){return G({...n,state:!0,attribute:!1})}function Pe(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)}function k(n,i){return i.split(".").reduce((e,t)=>Pe(e)?e[t]:void 0,n)}function K(n){return typeof n=="number"&&Number.isFinite(n)?n:null}function C(n,i="",e=2){let t=K(n);return t!==null?t.toLocaleString("fr-FR",{maximumFractionDigits:e})+i:typeof n=="boolean"?n?"Oui":"Non":typeof n=="string"&&n.trim()!==""?n:"Indisponible"}function qn(n){return k(n.live,"control.mode")==="hysteresis"||k(n.live,"learning.stage")==="bootstrap"}function ot(n,i,e){if(!(e&&k(n,e)!==!0)&&!(i.startsWith("analysis.twin.")&&!i.endsWith("reliable")&&(k(n,"analysis.twin.twin_model_reliable")!==!0||k(n,"analysis.twin.twin_warming_up")!==!1)))return k(n,i)}function Sc(n,i){return Object.values(n.states).find(t=>t.entity_id.startsWith("climate.")&&k(t.attributes,"specific_states.regulation_diagnostics")===i)??null}function pn(n){if(!n||!Pe(n.states))return[];let i=[];for(let e of Object.values(n.states)){if(!e?.entity_id?.startsWith("sensor.")||!Pe(e.attributes))continue;let t=e.attributes;if(t.schema_version!==2||!Pe(t.live)||!Pe(t.history))continue;let s=Sc(n,e.entity_id),o=(typeof t.friendly_name=="string"?t.friendly_name:e.entity_id).replace(/ SmartPI Diagnostics$/i,"");i.push({entityId:e.entity_id,climateId:s?.entity_id??null,name:typeof s?.attributes.friendly_name=="string"?s.attributes.friendly_name:o,state:e.state,lastUpdated:e.last_updated??null,available:e.state!=="unknown"&&e.state!=="unavailable",temperatureUnit:(()=>{let r=k(s?.attributes,"configuration.temperature_unit")??s?.attributes.temperature_unit??n.config?.unit_system?.temperature;return r==="\xB0C"||r==="\xB0F"?r:null})(),live:e.state==="unknown"||e.state==="unavailable"?{}:t.live,history:t.history})}return i.sort((e,t)=>e.name.localeCompare(t.name,"fr"))}function ja(n){let i=[];if(!n.available)return["Capteur indisponible : ses anciens attributs ne repr\xE9sentent pas des valeurs actuelles."];i.push("Le mod\xE8le A/B reste une estimation apprise ; consulter son \xE9tat de confiance avant toute interpr\xE9tation physique."),qn(n)&&i.push("Apprentissage initial par hyst\xE9r\xE9sis : la commande appliqu\xE9e ne provient pas n\xE9cessairement de la somme PI + FF. Ce d\xE9calage ne prouve pas une anomalie."),k(n.live,"control.in_deadtime_window")===!0&&i.push("Fen\xEAtre de temps mort en cours. Des observations d\u2019apprentissage peuvent \xEAtre rejet\xE9es pendant cette fen\xEAtre."),k(n.live,"model.tau_reliable")===!1&&i.push("Constante de temps \u03C4 d\xE9clar\xE9e non fiable : ne pas interpr\xE9ter sa valeur brute comme une dur\xE9e physique valid\xE9e."),k(n.live,"analysis.twin.twin_T_steady_reliable")===!1&&i.push("Temp\xE9rature d\u2019\xE9quilibre pr\xE9dite non fiable : elle n\u2019est pas utilis\xE9e comme indication de confort ou d\u2019atteignabilit\xE9.");let e=k(n.live,"feedforward.ff3_status");return typeof e=="string"&&e.startsWith("disabled:")&&i.push("FF3 non actif ; motif publi\xE9 par SmartPI : "+e+"."),i}var Ac=["temperature.indoor","setpoint.filtered_setpoint","power.applied_percent","power.command_percent","power.pi_percent","power.ff_percent","model.a","model.b"];function qt(n){if(typeof n=="number")return Number.isFinite(n)&&n>0?n:null;if(typeof n!="string"||!/(Z|[+-]\d\d:\d\d)$/.test(n))return null;let i=Date.parse(n);return Number.isFinite(i)?i/1e3:null}function Ba(n){if(!Array.isArray(n))throw new Error("R\xE9ponse Recorder invalide (liste attendue).");let i=[];for(let e of n){if(!Pe(e))continue;let t=qt(e.lu??e.last_updated);if(t===null)continue;let s=Pe(e.a)?e.a:Pe(e.attributes)?e.attributes:{},a=typeof e.s=="string"?e.s:typeof e.state=="string"?e.state:"unknown",o=s.schema_version===2&&a!=="unavailable"&&a!=="unknown";i.push({time:t,state:a,history:o&&Pe(s.history)?s.history:{},live:o&&Pe(s.live)?s.live:{}})}return mi(i)}function mi(n){return[...new Map(n.map(i=>[i.time,i])).values()].sort((i,e)=>i.time-e.time)}function me(n,i){if(i==="error"){let e=K(k(n.history,"temperature.indoor")),t=K(k(n.history,"setpoint.filtered_setpoint"));return e===null||t===null?null:K(t-e)}return i.startsWith("live.")?K(ot(n.live,i.slice(5))):K(k(n.history,i))}function Ua(n){if(n.length<2)return null;n.sort((e,t)=>e-t);let i=Math.floor(n.length/2);return n.length%2?n[i]:n[i-1]/2+n[i]/2}function Va(n){let i=[],e=null,t=null;for(let a of n){let o=me(a,"error");o!==null&&(i.push(o),e!==null&&(t=Math.max(t??0,a.time-e)),e=a.time)}let s=i.map(Math.abs);return{pairs:i.length,signedMedian:Ua(i),absoluteMedian:Ua(s),largestInterval:t}}function fr(n){return n.some(i=>Ac.some(e=>me(i,e)!==null))}function Wa(n){let i=[];for(let e=1;e<n.length;e++){let t=n[e-1],s=n[e],a=K(k(t.history,"setpoint.filtered_setpoint")),o=K(k(s.history,"setpoint.filtered_setpoint"));a!==null&&o!==null&&a!==o&&i.push({time:s.time,label:`Consigne filtr\xE9e ${a} \u2192 ${o} \xB0C`,provenance:"Variation observ\xE9e entre publications ; ce n\u2019est pas n\xE9cessairement une modification utilisateur."}),t.state!==s.state&&i.push({time:s.time,label:`Phase / \xE9tat : ${t.state} \u2192 ${s.state}`,provenance:"Transition observ\xE9e entre deux \xE9tats du capteur ; instant exact interne non disponible."});for(let[r,c]of[["control.saturation_state","Saturation"],["feedforward.ff3_status","FF3"],["control.in_deadtime_window","Temps mort"],["learning.last_reason","Apprentissage"],["governance.thermal_update_reason","Gouvernance"],["autocalib.state","Autocalibration"]]){let d=k(t.live,r),g=k(s.live,r);d!=null&&g!==void 0&&g!==null&&d!==g&&i.push({time:s.time,label:`${c} : ${String(g)}`,provenance:`Comparaison des publications live enregistr\xE9es ou de session : ${r}.`})}}return i}var fs=class{constructor(){this.buffers=new Map;this.revisions=new Map}collect(i,e,t=Date.now()/1e3,s){let a=new Set(i.map(o=>o.entityId));for(let o of this.buffers.keys())a.has(o)||(this.buffers.delete(o),this.revisions.delete(o));for(let o of i){let r=e[o.entityId]?.last_updated,c=qt(r);if(!r||c===null||this.revisions.get(o.entityId)===r)continue;this.revisions.set(o.entityId,r);let d=this.buffers.get(o.entityId)??[];if(d.length&&c<=d[d.length-1].time)continue;let g=d.length===0?t:c,f=o.climateId?e[o.climateId]:void 0,x=k(f?.attributes,"configuration.temperature_unit")??f?.attributes.temperature_unit??s,_={time:g,observedAt:d.length===0,unit:x==="\xB0C"||x==="\xB0F"?x:null,context:JSON.stringify([o.climateId,f?.state,x]),state:o.state,history:o.available?o.history:{},live:o.live};this.buffers.set(o.entityId,mi([...d,_]).filter(A=>A.time>=t-48*3600).slice(-12e3))}}get(i){return this.buffers.get(i)??[]}clear(){this.buffers.clear(),this.revisions.clear()}};function Ga(n){let i=[],e=(t,s)=>{let a=K(k(t.live,`learning.accepted_updates_${s}`));return a!==null&&Number.isSafeInteger(a)&&a>=0?a:null};for(let t=1;t<n.length;t++){let[s,a]=[n[t-1],n[t]];if([s,a].some(r=>["unknown","unavailable","inactive"].includes(r.state)))continue;let o={time:a.time,observedAt:a.observedAt,temperature:me(a,"temperature.indoor")};for(let r of["A","B"]){let c=r.toLowerCase(),d=e(s,c),g=e(a,c),f=me(a,`model.${c}`),x=f===null?"valeur indisponible":`${f} ${r==="A"?"\xB0C/min/u":"min\u207B\xB9"}`;d!==null&&g!==null&&g>d&&i.push({...o,kind:r,label:`${r} \xB7 +${g-d} accept\xE9(s) entre ${new Date(s.time*1e3).toLocaleString()} et cette publication \xB7 ${x}`});let _=K(k(s.live,`learning.emea_samples_${c}`)),A=K(k(a.live,`learning.emea_samples_${c}`));!(d!==null&&g!==null&&g>d)&&_!==null&&A!==null&&_>=0&&A>_&&i.push({...o,kind:r,label:`${r} \xB7 +${A-_} mesure(s) collect\xE9e(s) entre ${new Date(s.time*1e3).toLocaleString()} et cette publication \xB7 ${x}`})}for(let[r,c]of[["heat","Chauffe"],["cool","Refroidissement"]]){let d=_=>K(ot(_.live,`model.deadtime_${r}_s`,`model.deadtime_${r}_reliable`)),g=d(a),f=`analysis.deadtime.${r}_last_outcome`,u=k(s.live,f),x=typeof u=="string"&&u!=="detected"&&k(a.live,f)==="detected";if(x||g!==null&&g>=0&&g!==d(s)){let _=g!==null&&g>=0?`m\xE9diane ${g} s`:"m\xE9diane indisponible";i.push({...o,kind:c,label:`${c} \xB7 ${x?"d\xE9tection observ\xE9e \xB7 ":""}${_}`})}}}return i}async function Ka(n,i,e,t,s=()=>!1){if(!i.startsWith("sensor.")||!Number.isFinite(e)||!Number.isFinite(t)||t<=e||t-e>48*3600)throw new Error("Fen\xEAtre historique invalide.");let a=[];for(let o=e;o<t;o+=12*3600){if(s())throw new Error("Lecture annul\xE9e.");let r=Math.min(t,o+12*3600),c=await n.callWS({type:"history/history_during_period",start_time:new Date(o*1e3).toISOString(),end_time:new Date(r*1e3).toISOString(),entity_ids:[i],include_start_time_state:!1,significant_changes_only:!1,minimal_response:!1,no_attributes:!1});if(!Pe(c))throw new Error("Format de r\xE9ponse Recorder non reconnu.");let d=Ba(c[i]??[]);if(a.push(...d.filter(g=>g.time>=o&&g.time<=r)),a.length>1e5)throw new Error("Volume historique trop important ; utiliser l\u2019historique de session.")}return mi(a)}var Cc={setpoint:[["Trajectoire active","setpoint.trajectory_active"],["Boost actif","setpoint.boost_active"]],temperature:[["Temp\xE9rature ext\xE9rieure","temperature.outdoor"," \xB0C"],["Pente int\xE9rieure publi\xE9e","analysis.control.temperature_slope_h"," \xB0C/h",3]],pi:[["Erreur de la voie P","analysis.control.error_p"," \xB0C",4],["Erreur brute de la voie I","temperature.error"," \xB0C",4],["\xC9tat de l\u2019int\xE9grale","temperature.integral_error","",6],["Gain proportionnel Kp","control.kp","",6],["Gain int\xE9gral Ki","control.ki","",6],["Temps int\xE9gral Ti","control.ti_min"," min"],["Source de Kp","analysis.governance.kp_source"],["D\xE9cision sur les gains","analysis.governance.last_decision_gains"]],ff:[["FF1 \xB7 anticipation thermique","analysis.feedforward.u_ff1"," (ratio)",6],["FF2 \xB7 correction apprise","analysis.feedforward.u_ff2"," (ratio)",6],["FF3 \xB7 correction pr\xE9dictive","analysis.feedforward.u_ff3"," (ratio)",6],["Candidat avec FF3","analysis.feedforward.u_ff_effective"," (ratio)",6],["Bande morte active","control.in_deadband"],["Anticipation avant FF3","analysis.feedforward.u_ff_final"," (ratio)",6],["Motif de gel de FF2","analysis.feedforward.ff2_freeze_reason"],["Observateur stationnaire","feedforward.fftrim.stationary.state"],["Dernier rejet stationnaire","feedforward.fftrim.stationary.last_reject_reason"],["Observateur p\xE9riodique","feedforward.fftrim.periodic.state"],["Dernier rejet p\xE9riodique","feedforward.fftrim.periodic.last_reject_reason"],["Transfert de correction","feedforward.fftrim.transfer.state"],["Motif du transfert","feedforward.fftrim.transfer.reason"]],command:[["Sortie PI publi\xE9e","power.pi_percent"," %"],["Anticipation retenue","power.ff_percent"," %"]],direct:[["\xC9tat de l\u2019hyst\xE9r\xE9sis","control.hysteresis_state"],["Phase de calibration","calibration.state"],["Autocalibration","autocalib.state"]],limits:[["Commande demand\xE9e","power.command_percent"," %"],["Commande appliqu\xE9e","power.applied_percent"," %"],["Saturation d\xE9clar\xE9e","control.saturation_state"],["Temporisation impos\xE9e","analysis.control.forced_by_timing"],["Correction anti-windup \u0394u","analysis.control.aw_du"," (ratio)",6],["Source de protection de l\u2019int\xE9grale","temperature.integral_guard_source"]],applied:[["Cycle engag\xE9","power.current_cycle_percent"," %"],["Candidat au cycle suivant","power.next_cycle_percent"," %"],["Lin\xE9arisation de vanne","power.valve_linearization_enabled"],["Cycle engag\xE9 \xB7 espace lin\xE9aire","power.linear_current_cycle_percent"," %"],["Candidat au cycle suivant \xB7 espace lin\xE9aire","power.linear_next_cycle_percent"," %"],["Statut du retour de commande","feedforward.fftrim.command_ownership.status"]],model:[["Pertes B","model.b"," min\u207B\xB9",6],["Constante thermique \u03C4","model.tau_min"," min",2,"model.tau_reliable"],["Temps mort en chauffe","model.deadtime_heat_s"," s",0,"model.deadtime_heat_reliable"],["Temps mort en refroidissement","model.deadtime_cool_s"," s",0,"model.deadtime_cool_reliable"],["\xC9tape d\u2019apprentissage","learning.stage"],["Dernier motif d\u2019apprentissage","learning.last_reason"],["Gouvernance thermique","governance.thermal_update_decision"],["Motif de gouvernance","governance.thermal_update_reason"],["\xC9tat du jumeau thermique","feedforward.twin_status"],["Temp\xE9rature pr\xE9dite","analysis.twin.twin_T_pred"," \xB0C"],["\xC9quilibre pr\xE9dit","analysis.twin.twin_T_steady"," \xB0C",2,"analysis.twin.twin_T_steady_reliable"]]},Tc={pi:6,ff:5,limits:5},fi=class{constructor(i){this.diagnostic=i}get live(){return this.diagnostic.available?this.diagnostic.live:{}}get directMode(){return this.diagnostic.available?["CoolDown","HeatUp","CoolDownFinal"].includes(String(k(this.live,"calibration.state")))||k(this.live,"control.phase")==="Calibration"?"Calibration":qn(this.diagnostic)||k(this.live,"control.phase")==="Hysteresis"?"Hyst\xE9r\xE9sis":null:null}get bypass(){return this.directMode!==null}get route(){return this.bypass?"direct":k(this.live,"control.mode")==="smartpi"?"pi":"unavailable"}get timingForced(){let i=k(this.live,"analysis.control.forced_by_timing");return typeof i=="boolean"?i:null}get saturation(){let i=k(this.live,"control.saturation_state");return i==="SAT_HI"?"Saturation haute d\xE9clar\xE9e":i==="SAT_LO"?"Saturation basse d\xE9clar\xE9e":null}unit(i){return i?.replace("\xB0C",this.diagnostic.temperatureUnit===void 0?"\xB0C":this.diagnostic.temperatureUnit??"unit\xE9 source")}detail(i,e){let t=i.id==="command"&&this.bypass?"direct":i.id,s=Cc[t]??[];return(e?s:s.slice(0,Tc[t]??4)).map(([a,o,r,c,d])=>{let g=ot(this.live,o,d);return{label:a,path:o,reliability:d,value:C(r===void 0?g:K(g),this.unit(r),c)}})}blocks(){let i=this.live,e=this.bypass,t=this.route==="pi"?"Voie SmartPI":"Chemin non v\xE9rifi\xE9",s=(a,o,r,c,d,g,f)=>({id:a,title:o,path:r,value:C(K(k(i,r)),this.unit(c),r==="model.a"?6:2),explanation:d,reason:C(k(i,g)),reasonPath:g,status:f==="Contourn\xE9"?f:K(k(i,r))===null?"Indisponible":f??"Publi\xE9"});return[s("setpoint","Consigne filtr\xE9e","setpoint.filtered_setpoint"," \xB0C","Le fa\xE7onnage agit sur la voie proportionnelle en r\xE9gime Stable. La voie int\xE9grale utilise la consigne brute, absente du contrat historique.","setpoint.trajectory_source"),s("temperature","Temp\xE9rature int\xE9rieure","temperature.indoor"," \xB0C","Mesure publi\xE9e par SmartPI, pas une pr\xE9diction du mod\xE8le.","control.phase"),s("pi","R\xE9gulateur PI","power.pi_percent"," %","P utilise une erreur de consigne filtr\xE9e ; I utilise une erreur brute sign\xE9e par le mode HVAC. Le graphique d\u2019\xE9cart filtr\xE9 ne reconstruit pas cette int\xE9grale.","temperature.integral_mode",e?"Contourn\xE9":t),s("ff","Feedforward","power.ff_percent"," %","Entr\xE9es du feedforward : consigne brute, ext\xE9rieur et mod\xE8le A/B ; corrections apprises et pr\xE9dictives selon disponibilit\xE9. FF1 et FF2 sont combin\xE9s puis born\xE9s ; FF3 modifie cette sortie avec une seconde borne, mais en bande morte le runtime retient FF final sans FF3. Ce n\u2019est pas une somme libre de toutes les contributions.","feedforward.ff3_status",e?"Contourn\xE9":t),s("command",this.directMode??"Commande demand\xE9e",e?"power.applied_percent":"power.command_percent"," %",e?"L\u2019hyst\xE9r\xE9sis ou la calibration utilise un chemin direct. PI + FF ne doit pas \xEAtre reli\xE9 \xE0 la commande appliqu\xE9e dans ce r\xE9gime.":"En voie PI : clamp(PI + FF retenu, 0, 1) en espace lin\xE9aire. FF retenu est power.ff_percent : en bande morte, SmartPI retient FF final sans FF3. Les valeurs sont publi\xE9es, sans recalcul.",e?"control.phase":"control.saturation_state",e?"Voir sortie appliqu\xE9e":"Publi\xE9"),s("limits","Limitations et timing","power.limited_percent"," %","La pente et le maximum pr\xE9c\xE8dent les contraintes de timing ; une courbe de vanne peut ensuite changer l\u2019espace de commande. Aucun motif n\u2019est d\xE9duit d\u2019un simple \xE9cart.","analysis.control.integral_guard_mode",e?"Contourn\xE9":t),s("applied","Commande appliqu\xE9e","power.applied_percent"," %","Sortie publi\xE9e apr\xE8s les contraintes de sortie. Elle ne mesure ni \xE9nergie ni chaleur livr\xE9e ; le cycle en cours est publi\xE9 s\xE9par\xE9ment.","feedforward.fftrim.command_ownership.reason"),s("model","Pi\xE8ce et mod\xE8le A/B","model.a"," \xB0C/min/u","La pi\xE8ce est un syst\xE8me physique. A/B ne sont que son mod\xE8le appris ; la confiance publi\xE9e ne constitue pas une validation physique ind\xE9pendante.","model.confidence")]}chain(){let i=this.live;return[["PI","power.pi_percent",!1],["FF1","analysis.feedforward.u_ff1",!0],["FF2","analysis.feedforward.u_ff2",!0],["FF final","analysis.feedforward.u_ff_final",!0],["FF3","analysis.feedforward.u_ff3",!0],["FF effectif","analysis.feedforward.u_ff_effective",!0],["Hold","power.hold_percent",!1],["Demand\xE9e","power.command_percent",!1],["Limit\xE9e","power.limited_percent",!1],["Appliqu\xE9e","power.applied_percent",!1]].map(([e,t,s])=>{let a=K(k(i,t));return{label:e,path:t,value:a===null?null:a*(s?100:1)}})}};var Mc="uplot",Pc="u-hz",Ec="u-vt",Lc="u-title",zc="u-wrap",Rc="u-under",Ic="u-over",Dc="u-axis",Ri="u-off",Fc="u-select",qc="u-cursor-x",Hc="u-cursor-y",Oc="u-cursor-pt",Nc="u-legend",jc="u-live",Uc="u-inline",Bc="u-series",Vc="u-marker",Ya="u-label",Wc="u-value",On="width",Nn="height";var Ja="bottom",dn="left",hr="right",Lr="#000",Za=Lr+"0",gr="mousemove",Qa="mousedown",br="mouseup",Xa="mouseenter",eo="mouseleave",to="dblclick",Gc="resize",Kc="scroll",io="change",xs="dppxchange",zr="--",vn=typeof window<"u",_r=vn?document:null,mn=vn?window:null,Yc=vn?navigator:null,fe,hs;function $r(){let n=devicePixelRatio;fe!=n&&(fe=n,hs&&Sr(io,hs,$r),hs=matchMedia(`(min-resolution: ${fe-.001}dppx) and (max-resolution: ${fe+.001}dppx)`),Ii(io,hs,$r),mn.dispatchEvent(new CustomEvent(xs)))}function vt(n,i){if(i!=null){let e=n.classList;!e.contains(i)&&e.add(i)}}function kr(n,i){let e=n.classList;e.contains(i)&&e.remove(i)}function Ae(n,i,e){n.style[i]=e+"px"}function Ht(n,i,e,t){let s=_r.createElement(n);return i!=null&&vt(s,i),e?.insertBefore(s,t),s}function Pt(n,i){return Ht("div",n,i)}var no=new WeakMap;function Yt(n,i,e,t,s){let a="translate("+i+"px,"+e+"px)",o=no.get(n);a!=o&&(n.style.transform=a,no.set(n,a),i<0||e<0||i>t||e>s?vt(n,Ri):kr(n,Ri))}var so=new WeakMap;function ro(n,i,e){let t=i+e,s=so.get(n);t!=s&&(so.set(n,t),n.style.background=i,n.style.borderColor=e)}var ao=new WeakMap;function oo(n,i,e,t){let s=i+""+e,a=ao.get(n);s!=a&&(ao.set(n,s),n.style.height=e+"px",n.style.width=i+"px",n.style.marginLeft=t?-i/2+"px":0,n.style.marginTop=t?-e/2+"px":0)}var Rr={passive:!0},Jc={...Rr,capture:!0};function Ii(n,i,e,t){i.addEventListener(n,e,t?Jc:Rr)}function Sr(n,i,e,t){i.removeEventListener(n,e,Rr)}vn&&$r();function Ot(n,i,e,t){let s;e=e||0,t=t||i.length-1;let a=t<=2147483647;for(;t-e>1;)s=a?e+t>>1:xt((e+t)/2),i[s]<n?e=s:t=s;return n-i[e]<=i[t]-n?e:t}function Do(n){return(e,t,s)=>{let a=-1,o=-1;for(let r=t;r<=s;r++)if(n(e[r])){a=r;break}for(let r=s;r>=t;r--)if(n(e[r])){o=r;break}return[a,o]}}var Fo=n=>n!=null,qo=n=>n!=null&&n>0,_s=Do(Fo),Zc=Do(qo);function Qc(n,i,e,t=0,s=!1){let a=s?Zc:_s,o=s?qo:Fo;[i,e]=a(n,i,e);let r=n[i],c=n[i];if(i>-1)if(t==1)r=n[i],c=n[e];else if(t==-1)r=n[e],c=n[i];else for(let d=i;d<=e;d++){let g=n[d];o(g)&&(g<r?r=g:g>c&&(c=g))}return[r??ye,c??-ye]}function $s(n,i,e,t){let s=po(n),a=po(i);n==i&&(s==-1?(n*=e,i/=e):(n/=e,i*=e));let o=e==10?ii:Ho,r=s==1?xt:Et,c=a==1?Et:xt,d=r(o(Ue(n))),g=c(o(Ue(i))),f=fn(e,d),u=fn(e,g);return e==10&&(d<0&&(f=we(f,-d)),g<0&&(u=we(u,-g))),t||e==2?(n=f*s,i=u*a):(n=Uo(n,f),i=ks(i,u)),[n,i]}function Ir(n,i,e,t){let s=$s(n,i,e,t);return n==0&&(s[0]=0),i==0&&(s[1]=0),s}var Dr=.1,lo={mode:3,pad:Dr},Un={pad:0,soft:null,mode:0},Xc={min:Un,max:Un};function ys(n,i,e,t){return Ss(e)?co(n,i,e):(Un.pad=e,Un.soft=t?0:null,Un.mode=t?3:0,co(n,i,Xc))}function de(n,i){return n??i}function ep(n,i,e){for(i=de(i,0),e=de(e,n.length-1);i<=e;){if(n[i]!=null)return!0;i++}return!1}function co(n,i,e){let t=e.min,s=e.max,a=de(t.pad,0),o=de(s.pad,0),r=de(t.hard,-ye),c=de(s.hard,ye),d=de(t.soft,ye),g=de(s.soft,-ye),f=de(t.mode,0),u=de(s.mode,0),x=i-n,_=ii(x),A=lt(Ue(n),Ue(i)),T=ii(A),w=Ue(T-_);(x<1e-24||w>10)&&(x=0,(n==0||i==0)&&(x=1e-24,f==2&&d!=ye&&(a=0),u==2&&g!=-ye&&(o=0)));let $=x||A||1e3,P=ii($),R=fn(10,xt(P)),ee=$*(x==0?n==0?.1:1:a),O=we(Uo(n-ee,R/10),24),F=n>=d&&(f==1||f==3&&O<=d||f==2&&O>=d)?d:ye,Q=lt(r,O<F&&n>=F?F:Nt(F,O)),se=$*(x==0?i==0?.1:1:o),Z=we(ks(i+se,R/10),24),D=i<=g&&(u==1||u==3&&Z>=g||u==2&&Z<=g)?g:-ye,te=Nt(c,Z>D&&i<=D?D:lt(D,Z));return Q==te&&Q==0&&(te=100),[Q,te]}var tp=new Intl.NumberFormat(vn?Yc.language:"en-US"),Fr=n=>tp.format(n),yt=Math,vs=yt.PI,Ue=yt.abs,xt=yt.floor,je=yt.round,Et=yt.ceil,Nt=yt.min,lt=yt.max,fn=yt.pow,po=yt.sign,ii=yt.log10,Ho=yt.log2,ip=(n,i=1)=>yt.sinh(n)*i,vr=(n,i=1)=>yt.asinh(n/i),ye=1/0;function uo(n){return(ii((n^n>>31)-(n>>31))|0)+1}function Ar(n,i,e){return Nt(lt(n,i),e)}function Oo(n){return typeof n=="function"}function le(n){return Oo(n)?n:()=>n}var np=()=>{},No=n=>n,jo=(n,i)=>i,sp=n=>null,mo=n=>!0,fo=(n,i)=>n==i,rp=/\.\d*?(?=9{6,}|0{6,})/gm,Di=n=>{if(Vo(n)||gi.has(n))return n;let i=`${n}`,e=i.match(rp);if(e==null)return n;let t=e[0].length-1;if(i.indexOf("e-")!=-1){let[s,a]=i.split("e");return+`${Di(s)}e${a}`}return we(n,t)};function Li(n,i){return Di(we(Di(n/i))*i)}function ks(n,i){return Di(Et(Di(n/i))*i)}function Uo(n,i){return Di(xt(Di(n/i))*i)}function we(n,i=0){if(Vo(n))return n;let e=10**i,t=n*e*(1+Number.EPSILON);return je(t)/e}var gi=new Map;function Bo(n){return((""+n).split(".")[1]||"").length}function Vn(n,i,e,t){let s=[],a=t.map(Bo);for(let o=i;o<e;o++){let r=Ue(o),c=we(fn(n,o),r);for(let d=0;d<t.length;d++){let g=n==10?+`${t[d]}e${o}`:t[d]*c,f=(o>=0?0:r)+(o>=a[d]?0:a[d]),u=n==10?g:we(g,f);s.push(u),gi.set(u,f)}}return s}var Bn={},qr=[],hn=[null,null],hi=Array.isArray,Vo=Number.isInteger,ap=n=>n===void 0;function ho(n){return typeof n=="string"}function Ss(n){let i=!1;if(n!=null){let e=n.constructor;i=e==null||e==Object}return i}function op(n){return n!=null&&typeof n=="object"}var lp=Object.getPrototypeOf(Uint8Array),Wo="__proto__";function gn(n,i=Ss){let e;if(hi(n)){let t=n.find(s=>s!=null);if(hi(t)||i(t)){e=Array(n.length);for(let s=0;s<n.length;s++)e[s]=gn(n[s],i)}else e=n.slice()}else if(n instanceof lp)e=n.slice();else if(i(n)){e={};for(let t in n)t!=Wo&&(e[t]=gn(n[t],i))}else e=n;return e}function He(n){let i=arguments;for(let e=1;e<i.length;e++){let t=i[e];for(let s in t)s!=Wo&&(Ss(n[s])?He(n[s],gn(t[s])):n[s]=gn(t[s]))}return n}var cp=0,pp=1,dp=2;function up(n,i,e){for(let t=0,s,a=-1;t<i.length;t++){let o=i[t];if(o>a){for(s=o-1;s>=0&&n[s]==null;)n[s--]=null;for(s=o+1;s<e&&n[s]==null;)n[a=s++]=null}}}function mp(n,i){if(gp(n)){let o=n[0].slice();for(let r=1;r<n.length;r++)o.push(...n[r].slice(1));return bp(o[0])||(o=hp(o)),o}let e=new Set;for(let o=0;o<n.length;o++){let c=n[o][0],d=c.length;for(let g=0;g<d;g++)e.add(c[g])}let t=[Array.from(e).sort((o,r)=>o-r)],s=t[0].length,a=new Map;for(let o=0;o<s;o++)a.set(t[0][o],o);for(let o=0;o<n.length;o++){let r=n[o],c=r[0];for(let d=1;d<r.length;d++){let g=r[d],f=Array(s).fill(void 0),u=i?i[o][d]:pp,x=[];for(let _=0;_<g.length;_++){let A=g[_],T=a.get(c[_]);A===null?u!=cp&&(f[T]=A,u==dp&&x.push(T)):f[T]=A}up(f,x,s),t.push(f)}}return t}var fp=typeof queueMicrotask>"u"?n=>Promise.resolve().then(n):queueMicrotask;function hp(n){let i=n[0],e=i.length,t=Array(e);for(let a=0;a<t.length;a++)t[a]=a;t.sort((a,o)=>i[a]-i[o]);let s=[];for(let a=0;a<n.length;a++){let o=n[a],r=Array(e);for(let c=0;c<e;c++)r[c]=o[t[c]];s.push(r)}return s}function gp(n){let i=n[0][0],e=i.length;for(let t=1;t<n.length;t++){let s=n[t][0];if(s.length!=e)return!1;if(s!=i){for(let a=0;a<e;a++)if(s[a]!=i[a])return!1}}return!0}function bp(n,i=100){let e=n.length;if(e<=1)return!0;let t=0,s=e-1;for(;t<=s&&n[t]==null;)t++;for(;s>=t&&n[s]==null;)s--;if(s<=t)return!0;let a=lt(1,xt((s-t+1)/i));for(let o=n[t],r=t+a;r<=s;r+=a){let c=n[r];if(c!=null){if(c<=o)return!1;o=c}}return!0}var Go=["January","February","March","April","May","June","July","August","September","October","November","December"],Ko=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function Yo(n){return n.slice(0,3)}var vp=Ko.map(Yo),xp=Go.map(Yo),yp={MMMM:Go,MMM:xp,WWWW:Ko,WWW:vp};function Hn(n){return(n<10?"0":"")+n}function wp(n){return(n<10?"00":n<100?"0":"")+n}var _p={YYYY:n=>n.getFullYear(),YY:n=>(n.getFullYear()+"").slice(2),MMMM:(n,i)=>i.MMMM[n.getMonth()],MMM:(n,i)=>i.MMM[n.getMonth()],MM:n=>Hn(n.getMonth()+1),M:n=>n.getMonth()+1,DD:n=>Hn(n.getDate()),D:n=>n.getDate(),WWWW:(n,i)=>i.WWWW[n.getDay()],WWW:(n,i)=>i.WWW[n.getDay()],HH:n=>Hn(n.getHours()),H:n=>n.getHours(),h:n=>{let i=n.getHours();return i==0?12:i>12?i-12:i},AA:n=>n.getHours()>=12?"PM":"AM",aa:n=>n.getHours()>=12?"pm":"am",a:n=>n.getHours()>=12?"p":"a",mm:n=>Hn(n.getMinutes()),m:n=>n.getMinutes(),ss:n=>Hn(n.getSeconds()),s:n=>n.getSeconds(),fff:n=>wp(n.getMilliseconds())};function Hr(n,i){i=i||yp;let e=[],t=/\{([a-z]+)\}|[^{]+/gi,s;for(;s=t.exec(n);)e.push(s[0][0]=="{"?_p[s[1]]:s[0]);return a=>{let o="";for(let r=0;r<e.length;r++)o+=typeof e[r]=="string"?e[r]:e[r](a,i);return o}}var $p=new Intl.DateTimeFormat().resolvedOptions().timeZone;function kp(n,i){let e;return i=="UTC"||i=="Etc/UTC"?e=new Date(+n+n.getTimezoneOffset()*6e4):i==$p?e=n:(e=new Date(n.toLocaleString("en-US",{timeZone:i})),e.setMilliseconds(n.getMilliseconds())),e}var Jo=n=>n%1==0,ws=[1,2,2.5,5],Sp=Vn(10,-32,0,ws),Zo=Vn(10,0,32,ws),Ap=Zo.filter(Jo),zi=Sp.concat(Zo),Or=`
`,Qo="{YYYY}",go=Or+Qo,Xo="{M}/{D}",jn=Or+Xo,gs=jn+"/{YY}",el="{aa}",Cp="{h}:{mm}",un=Cp+el,bo=Or+un,vo=":{ss}",ge=null;function tl(n){let i=n*1e3,e=i*60,t=e*60,s=t*24,a=s*30,o=s*365,c=(n==1?Vn(10,0,3,ws).filter(Jo):Vn(10,-3,0,ws)).concat([i,i*5,i*10,i*15,i*30,e,e*5,e*10,e*15,e*30,t,t*2,t*3,t*4,t*6,t*8,t*12,s,s*2,s*3,s*4,s*5,s*6,s*7,s*8,s*9,s*10,s*15,a,a*2,a*3,a*4,a*6,o,o*2,o*5,o*10,o*25,o*50,o*100]),d=[[o,Qo,ge,ge,ge,ge,ge,ge,1],[s*28,"{MMM}",go,ge,ge,ge,ge,ge,1],[s,Xo,go,ge,ge,ge,ge,ge,1],[t,"{h}"+el,gs,ge,jn,ge,ge,ge,1],[e,un,gs,ge,jn,ge,ge,ge,1],[i,vo,gs+" "+un,ge,jn+" "+un,ge,bo,ge,1],[n,vo+".{fff}",gs+" "+un,ge,jn+" "+un,ge,bo,ge,1]];function g(f){return(u,x,_,A,T,w)=>{let $=[],P=T>=o,R=T>=a&&T<o,ee=f(_),O=we(ee*n,3),F=xr(ee.getFullYear(),P?0:ee.getMonth(),R||P?1:ee.getDate()),Q=we(F*n,3);if(R||P){let se=R?T/a:0,Z=P?T/o:0,D=O==Q?O:we(xr(F.getFullYear()+Z,F.getMonth()+se,1)*n,3),te=new Date(je(D/n)),L=te.getFullYear(),Y=te.getMonth();for(let U=0;D<=A;U++){let ae=xr(L+Z*U,Y+se*U,1),B=ae-f(we(ae*n,3));D=we((+ae+B)*n,3),D<=A&&$.push(D)}}else{let se=T>=s?s:T,Z=xt(_)-xt(O),D=Q+Z+ks(O-Q,se);$.push(D);let te=f(D),L=te.getHours()+te.getMinutes()/e+te.getSeconds()/t,Y=T/t,U=u.axes[x]._space,ae=w/U;for(;D=we(D+T,n==1?0:3),!(D>A);)if(Y>1){let B=xt(we(L+Y,6))%24,ce=f(D).getHours()-B;ce>1&&(ce=-1),D-=ce*t,L=(L+Y)%24;let be=$[$.length-1];we((D-be)/T,3)*ae>=.7&&$.push(D)}else $.push(D)}return $}}return[c,d,g]}var[Tp,Mp,Pp]=tl(1),[Ep,Lp,zp]=tl(.001);Vn(2,-53,53,[1]);function xo(n,i){return n.map(e=>e.map((t,s)=>s==0||s==8||t==null?t:i(s==1||e[8]==0?t:e[1]+t)))}function yo(n,i){return(e,t,s,a,o)=>{let r=i.find(_=>o>=_[0])||i[i.length-1],c,d,g,f,u,x;return t.map(_=>{let A=n(_),T=A.getFullYear(),w=A.getMonth(),$=A.getDate(),P=A.getHours(),R=A.getMinutes(),ee=A.getSeconds(),O=T!=c&&r[2]||w!=d&&r[3]||$!=g&&r[4]||P!=f&&r[5]||R!=u&&r[6]||ee!=x&&r[7]||r[1];return c=T,d=w,g=$,f=P,u=R,x=ee,O(A)})}}function Rp(n,i){let e=Hr(i);return(t,s,a,o,r)=>s.map(c=>e(n(c)))}function xr(n,i,e){return new Date(n,i,e)}function wo(n,i){return i(n)}var Ip="{YYYY}-{MM}-{DD} {h}:{mm}{aa}";function _o(n,i){return(e,t,s,a)=>a==null?zr:i(n(t))}function Dp(n,i){let e=n.series[i];return e.width?e.stroke(n,i):e.points.width?e.points.stroke(n,i):null}function Fp(n,i){return n.series[i].fill(n,i)}var qp={show:!0,live:!0,isolate:!1,mount:np,markers:{show:!0,width:2,stroke:Dp,fill:Fp,dash:"solid"},idx:null,idxs:null,values:[]};function Hp(n,i){let e=n.cursor.points,t=Pt(),s=e.size(n,i);Ae(t,On,s),Ae(t,Nn,s);let a=s/-2;Ae(t,"marginLeft",a),Ae(t,"marginTop",a);let o=e.width(n,i,s);return o&&Ae(t,"borderWidth",o),t}function Op(n,i){let e=n.series[i].points;return e._fill||e._stroke}function Np(n,i){let e=n.series[i].points;return e._stroke||e._fill}function jp(n,i){return n.series[i].points.size}var yr=[0,0];function Up(n,i,e){return yr[0]=i,yr[1]=e,yr}function bs(n,i,e,t=!0){return s=>{s.button==0&&(!t||s.target==i)&&e(s)}}function wr(n,i,e,t=!0){return s=>{(!t||s.target==i)&&e(s)}}var Bp={show:!0,x:!0,y:!0,lock:!1,move:Up,points:{one:!1,show:Hp,size:jp,width:0,stroke:Np,fill:Op},bind:{mousedown:bs,mouseup:bs,click:bs,dblclick:bs,mousemove:wr,mouseleave:wr,mouseenter:wr},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(n,i)=>{i.stopPropagation(),i.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(n,i,e,t,s)=>t-s,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},il={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},Nr=He({},il,{filter:jo}),nl=He({},Nr,{size:10}),sl=He({},il,{show:!1}),jr='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',rl="bold "+jr,al=1.5,$o={show:!0,scale:"x",stroke:Lr,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:rl,side:2,grid:Nr,ticks:nl,border:sl,font:jr,lineGap:al,rotate:0},Vp="Value",Wp="Time",ko={show:!0,scale:"x",auto:!1,sorted:1,min:ye,max:-ye,idxs:[]};function Gp(n,i,e,t,s){return i.map(a=>a==null?"":Fr(a))}function Kp(n,i,e,t,s,a,o){let r=[],c=gi.get(s)||0;e=o?e:we(ks(e,s),c);for(let d=e;d<=t;d=we(d+s,c))r.push(Object.is(d,-0)?0:d);return r}function Cr(n,i,e,t,s,a,o){let r=[],c=n.scales[n.axes[i].scale].log,d=c==10?ii:Ho,g=xt(d(e));s=fn(c,g),c==10&&(s=zi[Ot(s,zi)]);let f=e,u=s*c;c==10&&(u=zi[Ot(u,zi)]);do r.push(f),f=f+s,c==10&&!gi.has(f)&&(f=we(f,gi.get(s))),f>=u&&(s=f,u=s*c,c==10&&(u=zi[Ot(u,zi)]));while(f<=t);return r}function Yp(n,i,e,t,s,a,o){let c=n.scales[n.axes[i].scale].asinh,d=t>c?Cr(n,i,lt(c,e),t,s):[c],g=t>=0&&e<=0?[0]:[];return(e<-c?Cr(n,i,lt(c,-t),-e,s):[c]).reverse().map(u=>-u).concat(g,d)}var ol=/./,Jp=/[12357]/,Zp=/[125]/,So=/1/,Tr=(n,i,e,t)=>n.map((s,a)=>i==4&&s==0||a%t==0&&e.test(s.toExponential()[s<0?1:0])?s:null);function Qp(n,i,e,t,s){let a=n.axes[e],o=a.scale,r=n.scales[o],c=n.valToPos,d=a._space,g=c(10,o),f=c(9,o)-g>=d?ol:c(7,o)-g>=d?Jp:c(5,o)-g>=d?Zp:So;if(f==So){let u=Ue(c(1,o)-g);if(u<d)return Tr(i.slice().reverse(),r.distr,f,Et(d/u)).reverse()}return Tr(i,r.distr,f,1)}function Xp(n,i,e,t,s){let a=n.axes[e],o=a.scale,r=a._space,c=n.valToPos,d=Ue(c(1,o)-c(2,o));return d<r?Tr(i.slice().reverse(),3,ol,Et(r/d)).reverse():i}function ed(n,i,e,t){return t==null?zr:i==null?"":Fr(i)}var Ao={show:!0,scale:"y",stroke:Lr,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:rl,side:3,grid:Nr,ticks:nl,border:sl,font:jr,lineGap:al,rotate:0};function td(n,i){let e=3+(n||1)*2;return we(e*i,3)}function id(n,i){let{scale:e,idxs:t}=n.series[0],s=n._data[0],a=n.valToPos(s[t[0]],e,!0),o=n.valToPos(s[t[1]],e,!0),r=Ue(o-a),c=n.series[i],d=r/(c.points.space*fe);return t[1]-t[0]<=d}var Co={scale:null,auto:!0,sorted:0,min:ye,max:-ye},ll=(n,i,e,t,s)=>s,To={show:!0,auto:!0,sorted:0,gaps:ll,alpha:1,facets:[He({},Co,{scale:"x"}),He({},Co,{scale:"y"})]},Mo={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:ll,alpha:1,points:{show:id,filter:null},values:null,min:ye,max:-ye,idxs:[],path:null,clip:null};function nd(n,i,e,t,s){return e/10}var cl={time:!0,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},sd=He({},cl,{time:!1,ori:1}),Po={};function pl(n,i){let e=Po[n];return e||(e={key:n,plots:[],sub(t){e.plots.push(t)},unsub(t){e.plots=e.plots.filter(s=>s!=t)},pub(t,s,a,o,r,c,d){for(let g=0;g<e.plots.length;g++)e.plots[g]!=s&&e.plots[g].pub(t,s,a,o,r,c,d)}},n!=null&&(Po[n]=e)),e}var bn=1,Mr=2;function Fi(n,i,e){let t=n.mode,s=n.series[i],a=t==2?n._data[i]:n._data,o=n.scales,r=n.bbox,c=a[0],d=t==2?a[1]:a[i],g=t==2?o[s.facets[0].scale]:o[n.series[0].scale],f=t==2?o[s.facets[1].scale]:o[s.scale],u=r.left,x=r.top,_=r.width,A=r.height,T=n.valToPosH,w=n.valToPosV;return g.ori==0?e(s,c,d,g,f,T,w,u,x,_,A,Cs,xn,Ms,ul,fl):e(s,c,d,g,f,w,T,x,u,A,_,Ts,yn,Vr,ml,hl)}function Ur(n,i){let e=0,t=0,s=de(n.bands,qr);for(let a=0;a<s.length;a++){let o=s[a];o.series[0]==i?e=o.dir:o.series[1]==i&&(o.dir==1?t|=1:t|=2)}return[e,t==1?-1:t==2?1:t==3?2:0]}function rd(n,i,e,t,s){let a=n.mode,o=n.series[i],r=a==2?o.facets[1].scale:o.scale,c=n.scales[r];return s==-1?c.min:s==1?c.max:c.distr==3?c.dir==1?c.min:c.max:0}function ni(n,i,e,t,s,a){return Fi(n,i,(o,r,c,d,g,f,u,x,_,A,T)=>{let w=o.pxRound,$=d.dir*(d.ori==0?1:-1),P=d.ori==0?xn:yn,R,ee;$==1?(R=e,ee=t):(R=t,ee=e);let O=w(f(r[R],d,A,x)),F=w(u(c[R],g,T,_)),Q=w(f(r[ee],d,A,x)),se=w(u(a==1?g.max:g.min,g,T,_)),Z=new Path2D(s);return P(Z,Q,se),P(Z,O,se),P(Z,O,F),Z})}function As(n,i,e,t,s,a){let o=null;if(n.length>0){o=new Path2D;let r=i==0?Ms:Vr,c=e;for(let f=0;f<n.length;f++){let u=n[f];if(u[1]>u[0]){let x=u[0]-c;x>0&&r(o,c,t,x,t+a),c=u[1]}}let d=e+s-c,g=10;d>0&&r(o,c,t-g/2,d,t+a+g)}return o}function ad(n,i,e){let t=n[n.length-1];t&&t[0]==i?t[1]=e:n.push([i,e])}function Br(n,i,e,t,s,a,o){let r=[],c=n.length;for(let d=s==1?e:t;d>=e&&d<=t;d+=s)if(i[d]===null){let f=d,u=d;if(s==1)for(;++d<=t&&i[d]===null;)u=d;else for(;--d>=e&&i[d]===null;)u=d;let x=a(n[f]),_=u==f?x:a(n[u]),A=f-s;x=o<=0&&A>=0&&A<c?a(n[A]):x;let w=u+s;_=o>=0&&w>=0&&w<c?a(n[w]):_,_>=x&&r.push([x,_])}return r}function Eo(n){return n==0?No:n==1?je:i=>Li(i,n)}function dl(n){let i=n==0?Cs:Ts,e=n==0?(s,a,o,r,c,d)=>{s.arcTo(a,o,r,c,d)}:(s,a,o,r,c,d)=>{s.arcTo(o,a,c,r,d)},t=n==0?(s,a,o,r,c)=>{s.rect(a,o,r,c)}:(s,a,o,r,c)=>{s.rect(o,a,c,r)};return(s,a,o,r,c,d=0,g=0)=>{d==0&&g==0?t(s,a,o,r,c):(d=Nt(d,r/2,c/2),g=Nt(g,r/2,c/2),i(s,a+d,o),e(s,a+r,o,a+r,o+c,d),e(s,a+r,o+c,a,o+c,g),e(s,a,o+c,a,o,g),e(s,a,o,a+r,o,d),s.closePath())}}var Cs=(n,i,e)=>{n.moveTo(i,e)},Ts=(n,i,e)=>{n.moveTo(e,i)},xn=(n,i,e)=>{n.lineTo(i,e)},yn=(n,i,e)=>{n.lineTo(e,i)},Ms=dl(0),Vr=dl(1),ul=(n,i,e,t,s,a)=>{n.arc(i,e,t,s,a)},ml=(n,i,e,t,s,a)=>{n.arc(e,i,t,s,a)},fl=(n,i,e,t,s,a,o)=>{n.bezierCurveTo(i,e,t,s,a,o)},hl=(n,i,e,t,s,a,o)=>{n.bezierCurveTo(e,i,s,t,o,a)};function gl(n){return(i,e,t,s,a)=>Fi(i,e,(o,r,c,d,g,f,u,x,_,A,T)=>{let{pxRound:w,points:$}=o,P,R;d.ori==0?(P=Cs,R=ul):(P=Ts,R=ml);let ee=we($.width*fe,3),O=($.size-$.width)/2*fe,F=we(O*2,3),Q=new Path2D,se=new Path2D,{left:Z,top:D,width:te,height:L}=i.bbox;Ms(se,Z-F,D-F,te+F*2,L+F*2);let Y=U=>{if(c[U]!=null){let ae=w(f(r[U],d,A,x)),B=w(u(c[U],g,T,_));P(Q,ae+O,B),R(Q,ae,B,O,0,vs*2)}};if(a)a.forEach(Y);else for(let U=t;U<=s;U++)Y(U);return{stroke:ee>0?Q:null,fill:Q,clip:se,flags:bn|Mr}})}function bl(n){return(i,e,t,s,a,o)=>{t!=s&&(a!=t&&o!=t&&n(i,e,t),a!=s&&o!=s&&n(i,e,s),n(i,e,o))}}var od=bl(xn),ld=bl(yn);function vl(n){let i=de(n?.alignGaps,0);return(e,t,s,a)=>Fi(e,t,(o,r,c,d,g,f,u,x,_,A,T)=>{[s,a]=_s(c,s,a);let w=o.pxRound,$=L=>w(f(L,d,A,x)),P=L=>w(u(L,g,T,_)),R,ee;d.ori==0?(R=xn,ee=od):(R=yn,ee=ld);let O=d.dir*(d.ori==0?1:-1),F={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:bn},Q=F.stroke,se=!1;if(a-s>=A*4){let L=V=>e.posToVal(V,d.key,!0),Y=null,U=null,ae,B,pt,Ce=$(r[O==1?s:a]),ce=$(r[s]),be=$(r[a]),re=L(O==1?ce+1:be-1);for(let V=O==1?s:a;V>=s&&V<=a;V+=O){let Oe=r[V],Te=(O==1?Oe<re:Oe>re)?Ce:$(Oe),he=c[V];Te==Ce?he!=null?(B=he,Y==null?(R(Q,Te,P(B)),ae=Y=U=B):B<Y?Y=B:B>U&&(U=B)):he===null&&(se=!0):(Y!=null&&ee(Q,Ce,P(Y),P(U),P(ae),P(B)),he!=null?(B=he,R(Q,Te,P(B)),Y=U=ae=B):(Y=U=null,he===null&&(se=!0)),Ce=Te,re=L(Ce+O))}Y!=null&&Y!=U&&pt!=Ce&&ee(Q,Ce,P(Y),P(U),P(ae),P(B))}else for(let L=O==1?s:a;L>=s&&L<=a;L+=O){let Y=c[L];Y===null?se=!0:Y!=null&&R(Q,$(r[L]),P(Y))}let[D,te]=Ur(e,t);if(o.fill!=null||D!=0){let L=F.fill=new Path2D(Q),Y=o.fillTo(e,t,o.min,o.max,D),U=P(Y),ae=$(r[s]),B=$(r[a]);O==-1&&([B,ae]=[ae,B]),R(L,B,U),R(L,ae,U)}if(!o.spanGaps){let L=[];se&&L.push(...Br(r,c,s,a,O,$,i)),F.gaps=L=o.gaps(e,t,s,a,L),F.clip=As(L,d.ori,x,_,A,T)}return te!=0&&(F.band=te==2?[ni(e,t,s,a,Q,-1),ni(e,t,s,a,Q,1)]:ni(e,t,s,a,Q,te)),F})}function cd(n){let i=de(n.align,1),e=de(n.ascDesc,!1),t=de(n.alignGaps,0),s=de(n.extend,!1);return(a,o,r,c)=>Fi(a,o,(d,g,f,u,x,_,A,T,w,$,P)=>{[r,c]=_s(f,r,c);let R=d.pxRound,{left:ee,width:O}=a.bbox,F=ce=>R(_(ce,u,$,T)),Q=ce=>R(A(ce,x,P,w)),se=u.ori==0?xn:yn,Z={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:bn},D=Z.stroke,te=u.dir*(u.ori==0?1:-1),L=Q(f[te==1?r:c]),Y=F(g[te==1?r:c]),U=Y,ae=Y;s&&i==-1&&(ae=ee,se(D,ae,L)),se(D,Y,L);for(let ce=te==1?r:c;ce>=r&&ce<=c;ce+=te){let be=f[ce];if(be==null)continue;let re=F(g[ce]),V=Q(be);i==1?se(D,re,L):se(D,U,V),se(D,re,V),L=V,U=re}let B=U;s&&i==1&&(B=ee+O,se(D,B,L));let[pt,Ce]=Ur(a,o);if(d.fill!=null||pt!=0){let ce=Z.fill=new Path2D(D),be=d.fillTo(a,o,d.min,d.max,pt),re=Q(be);se(ce,B,re),se(ce,ae,re)}if(!d.spanGaps){let ce=[];ce.push(...Br(g,f,r,c,te,F,t));let be=d.width*fe/2,re=e||i==1?be:-be,V=e||i==-1?-be:be;ce.forEach(Oe=>{Oe[0]+=re,Oe[1]+=V}),Z.gaps=ce=d.gaps(a,o,r,c,ce),Z.clip=As(ce,u.ori,T,w,$,P)}return Ce!=0&&(Z.band=Ce==2?[ni(a,o,r,c,D,-1),ni(a,o,r,c,D,1)]:ni(a,o,r,c,D,Ce)),Z})}function Lo(n,i,e,t,s,a,o=ye){if(n.length>1){let r=null;for(let c=0,d=1/0;c<n.length;c++)if(i[c]!==void 0){if(r!=null){let g=Ue(n[c]-n[r]);g<d&&(d=g,o=Ue(e(n[c],t,s,a)-e(n[r],t,s,a)))}r=c}}return o}function pd(n){n=n||Bn;let i=de(n.size,[.6,ye,1]),e=n.align||0,t=n.gap||0,s=n.radius;s=s==null?[0,0]:typeof s=="number"?[s,0]:s;let a=le(s),o=1-i[0],r=de(i[1],ye),c=de(i[2],1),d=de(n.disp,Bn),g=de(n.each,x=>{}),{fill:f,stroke:u}=d;return(x,_,A,T)=>Fi(x,_,(w,$,P,R,ee,O,F,Q,se,Z,D)=>{let te=w.pxRound,L=e,Y=t*fe,U=r*fe,ae=c*fe,B,pt;R.ori==0?[B,pt]=a(x,_):[pt,B]=a(x,_);let Ce=R.dir*(R.ori==0?1:-1),ce=R.ori==0?Ms:Vr,be=R.ori==0?g:(N,_e,Ne,Wi,xi,Ut,yi)=>{g(N,_e,Ne,xi,Wi,yi,Ut)},re=de(x.bands,qr).find(N=>N.series[0]==_),V=re!=null?re.dir:0,Oe=w.fillTo(x,_,w.min,w.max,V),it=te(F(Oe,ee,D,se)),Te,he,zt,mt=Z,Ee=te(w.width*fe),jt=!1,Zt=null,$t=null,oi=null,Ui=null;f!=null&&(Ee==0||u!=null)&&(jt=!0,Zt=f.values(x,_,A,T),$t=new Map,new Set(Zt).forEach(N=>{N!=null&&$t.set(N,new Path2D)}),Ee>0&&(oi=u.values(x,_,A,T),Ui=new Map,new Set(oi).forEach(N=>{N!=null&&Ui.set(N,new Path2D)})));let{x0:Bi,size:$n}=d;if(Bi!=null&&$n!=null){L=1,$=Bi.values(x,_,A,T),Bi.unit==2&&($=$.map(Ne=>x.posToVal(Q+Ne*Z,R.key,!0)));let N=$n.values(x,_,A,T);$n.unit==2?he=N[0]*Z:he=O(N[0],R,Z,Q)-O(0,R,Z,Q),mt=Lo($,P,O,R,Z,Q,mt),zt=mt-he+Y}else mt=Lo($,P,O,R,Z,Q,mt),zt=mt*o+Y,he=mt-zt;zt<1&&(zt=0),Ee>=he/2&&(Ee=0),zt<5&&(te=No);let Wn=zt>0,bi=mt-zt-(Wn?Ee:0);he=te(Ar(bi,ae,U)),Te=(L==0?he/2:L==Ce?0:he)-L*Ce*((L==0?Y/2:0)+(Wn?Ee/2:0));let nt={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},Vi=jt?null:new Path2D,Qt=null;if(re!=null)Qt=x.data[re.series[1]];else{let{y0:N,y1:_e}=d;N!=null&&_e!=null&&(P=_e.values(x,_,A,T),Qt=N.values(x,_,A,T))}let vi=B*he,ie=pt*he;for(let N=Ce==1?A:T;N>=A&&N<=T;N+=Ce){let _e=P[N];if(_e==null)continue;if(Qt!=null){let dt=Qt[N]??0;if(_e-dt==0)continue;it=F(dt,ee,D,se)}let Ne=R.distr!=2||d!=null?$[N]:N,Wi=O(Ne,R,Z,Q),xi=F(de(_e,Oe),ee,D,se),Ut=te(Wi-Te),yi=te(lt(xi,it)),ft=te(Nt(xi,it)),kt=yi-ft;if(_e!=null){let dt=_e<0?ie:vi,Rt=_e<0?vi:ie;jt?(Ee>0&&oi[N]!=null&&ce(Ui.get(oi[N]),Ut,ft+xt(Ee/2),he,lt(0,kt-Ee),dt,Rt),Zt[N]!=null&&ce($t.get(Zt[N]),Ut,ft+xt(Ee/2),he,lt(0,kt-Ee),dt,Rt)):ce(Vi,Ut,ft+xt(Ee/2),he,lt(0,kt-Ee),dt,Rt),be(x,_,N,Ut-Ee/2,ft,he+Ee,kt)}}return Ee>0?nt.stroke=jt?Ui:Vi:jt||(nt._fill=w.width==0?w._fill:w._stroke??w._fill,nt.width=0),nt.fill=jt?$t:Vi,nt})}function dd(n,i){let e=de(i?.alignGaps,0);return(t,s,a,o)=>Fi(t,s,(r,c,d,g,f,u,x,_,A,T,w)=>{[a,o]=_s(d,a,o);let $=r.pxRound,P=B=>$(u(B,g,T,_)),R=B=>$(x(B,f,w,A)),ee,O,F;g.ori==0?(ee=Cs,F=xn,O=fl):(ee=Ts,F=yn,O=hl);let Q=g.dir*(g.ori==0?1:-1),se=P(c[Q==1?a:o]),Z=se,D=[],te=[];for(let B=Q==1?a:o;B>=a&&B<=o;B+=Q)if(d[B]!=null){let Ce=c[B],ce=P(Ce);D.push(Z=ce),te.push(R(d[B]))}let L={stroke:n(D,te,ee,F,O,$),fill:null,clip:null,band:null,gaps:null,flags:bn},Y=L.stroke,[U,ae]=Ur(t,s);if(r.fill!=null||U!=0){let B=L.fill=new Path2D(Y),pt=r.fillTo(t,s,r.min,r.max,U),Ce=R(pt);F(B,Z,Ce),F(B,se,Ce)}if(!r.spanGaps){let B=[];B.push(...Br(c,d,a,o,Q,P,e)),L.gaps=B=r.gaps(t,s,a,o,B),L.clip=As(B,g.ori,_,A,T,w)}return ae!=0&&(L.band=ae==2?[ni(t,s,a,o,Y,-1),ni(t,s,a,o,Y,1)]:ni(t,s,a,o,Y,ae)),L})}function ud(n){return dd(md,n)}function md(n,i,e,t,s,a){let o=n.length;if(o<2)return null;let r=new Path2D;if(e(r,n[0],i[0]),o==2)t(r,n[1],i[1]);else{let c=Array(o),d=Array(o-1),g=Array(o-1),f=Array(o-1);for(let u=0;u<o-1;u++)g[u]=i[u+1]-i[u],f[u]=n[u+1]-n[u],d[u]=g[u]/f[u];c[0]=d[0];for(let u=1;u<o-1;u++)d[u]===0||d[u-1]===0||d[u-1]>0!=d[u]>0?c[u]=0:(c[u]=3*(f[u-1]+f[u])/((2*f[u]+f[u-1])/d[u-1]+(f[u]+2*f[u-1])/d[u]),isFinite(c[u])||(c[u]=0));c[o-1]=d[o-2];for(let u=0;u<o-1;u++)s(r,n[u]+f[u]/3,i[u]+c[u]*f[u]/3,n[u+1]-f[u]/3,i[u+1]-c[u+1]*f[u]/3,n[u+1],i[u+1])}return r}var Pr=new Set;function zo(){for(let n of Pr)n.syncRect(!0)}vn&&(Ii(Gc,mn,zo),Ii(Kc,mn,zo,!0),Ii(xs,mn,()=>{Je.pxRatio=fe}));var fd=vl(),hd=gl();function Ro(n,i,e,t){return(t?[n[0],n[1]].concat(n.slice(2)):[n[0]].concat(n.slice(1))).map((a,o)=>Er(a,o,i,e))}function gd(n,i){return n.map((e,t)=>t==0?{}:He({},i,e))}function Er(n,i,e,t){return He({},i==0?e:t,n)}function xl(n,i,e){return i==null?hn:[i,e]}var bd=xl;function vd(n,i,e){return i==null?hn:ys(i,e,Dr,!0)}function yl(n,i,e,t){return i==null?hn:$s(i,e,n.scales[t].log,!1)}var xd=yl;function wl(n,i,e,t){return i==null?hn:Ir(i,e,n.scales[t].log,!1)}var yd=wl;function wd(n,i,e,t,s){let a=lt(uo(n),uo(i)),o=i-n,r=Ot(s/t*o,e);do{let c=e[r],d=t*c/o;if(d>=s&&a+(c<5?gi.get(c):0)<=17)return[c,d]}while(++r<e.length);return[0,0]}function Io(n){let i,e;return n=n.replace(/(\d+)px/,(t,s)=>(i=je((e=+s)*fe))+"px"),[n,i,e]}function _d(n){n.show&&[n.font,n.labelFont].forEach(i=>{let e=we(i[2]*fe,1);i[0]=i[0].replace(/[0-9.]+px/,e+"px"),i[1]=e})}function Je(n,i,e){let t={mode:de(n.mode,1)},s=t.mode;function a(l,p,m,h){let v=p.valToPct(l);return h+m*(p.dir==-1?1-v:v)}function o(l,p,m,h){let v=p.valToPct(l);return h+m*(p.dir==-1?v:1-v)}function r(l,p,m,h){return p.ori==0?a(l,p,m,h):o(l,p,m,h)}t.valToPosH=a,t.valToPosV=o;let c=!1;t.status=0;let d=t.root=Pt(Mc);if(n.id!=null&&(d.id=n.id),vt(d,n.class),n.title){let l=Pt(Lc,d);l.textContent=n.title}let g=Ht("canvas"),f=t.ctx=g.getContext("2d"),u=Pt(zc,d);Ii("click",u,l=>{l.target===_&&($e!=sn||Me!=rn)&&Qe.click(t,l)},!0);let x=t.under=Pt(Rc,u);u.appendChild(g);let _=t.over=Pt(Ic,u);n=gn(n);let A=+de(n.pxAlign,1),T=Eo(A);(n.plugins||[]).forEach(l=>{l.opts&&(n=l.opts(t,n)||n)});let w=n.ms||.001,$=t.series=s==1?Ro(n.series||[],ko,Mo,!1):gd(n.series||[null],To),P=t.axes=Ro(n.axes||[],$o,Ao,!0),R=t.scales={},ee=t.bands=n.bands||[];ee.forEach(l=>{l.fill=le(l.fill||null),l.dir=de(l.dir,-1)});let O=s==2?$[1].facets[0].scale:$[0].scale,F={axes:Yl,series:Bl},Q=(n.drawOrder||["axes","series"]).map(l=>F[l]);function se(l){let p=l.distr==3?m=>ii(m>0?m:l.clamp(t,m,l.min,l.max,l.key)):l.distr==4?m=>vr(m,l.asinh):l.distr==100?m=>l.fwd(m):m=>m;return m=>{let h=p(m),{_min:v,_max:y}=l,S=y-v;return(h-v)/S}}function Z(l){let p=R[l];if(p==null){let m=(n.scales||Bn)[l]||Bn;if(m.from!=null){Z(m.from);let h=He({},R[m.from],m,{key:l});h.valToPct=se(h),R[l]=h}else{p=R[l]=He({},l==O?cl:sd,m),p.key=l;let h=p.time,v=p.range,y=hi(v);if((l!=O||s==2&&!h)&&(y&&(v[0]==null||v[1]==null)&&(v={min:v[0]==null?lo:{mode:1,hard:v[0],soft:v[0]},max:v[1]==null?lo:{mode:1,hard:v[1],soft:v[1]}},y=!1),!y&&Ss(v))){let S=v;v=(E,I,q)=>I==null?hn:ys(I,q,S)}p.range=le(v||(h?bd:l==O?p.distr==3?xd:p.distr==4?yd:xl:p.distr==3?yl:p.distr==4?wl:vd)),p.auto=le(y?!1:p.auto),p.clamp=le(p.clamp||nd),p._min=p._max=null,p.valToPct=se(p)}}}Z("x"),Z("y"),s==1&&$.forEach(l=>{Z(l.scale)}),P.forEach(l=>{Z(l.scale)});for(let l in n.scales)Z(l);let D=R[O],te=D.distr,L,Y;D.ori==0?(vt(d,Pc),L=a,Y=o):(vt(d,Ec),L=o,Y=a);let U={};for(let l in R){let p=R[l];(p.min!=null||p.max!=null)&&(U[l]={min:p.min,max:p.max},p.min=p.max=null)}let ae=n.tzDate||(l=>new Date(je(l/w))),B=n.fmtDate||Hr,pt=w==1?Pp(ae):zp(ae),Ce=yo(ae,xo(w==1?Mp:Lp,B)),ce=_o(ae,wo(Ip,B)),be=[],re=t.legend=He({},qp,n.legend),V=t.cursor=He({},Bp,{drag:{y:s==2}},n.cursor),Oe=re.show,it=V.show,Te=re.markers;re.idxs=be,Te.width=le(Te.width),Te.dash=le(Te.dash),Te.stroke=le(Te.stroke),Te.fill=le(Te.fill);let he,zt,mt,Ee=[],jt=[],Zt,$t=!1,oi={};if(re.live){let l=$[1]?$[1].values:null;$t=l!=null,Zt=$t?l(t,1,0):{_:0};for(let p in Zt)oi[p]=zr}if(Oe)if(he=Ht("table",Nc,d),mt=Ht("tbody",null,he),re.mount(t,he),$t){zt=Ht("thead",null,he,mt);let l=Ht("tr",null,zt);Ht("th",null,l);for(var Ui in Zt)Ht("th",Ya,l).textContent=Ui}else vt(he,Uc),re.live&&vt(he,jc);let Bi={show:!0},$n={show:!1};function Wn(l,p){if(p==0&&($t||!re.live||s==2))return hn;let m=[],h=Ht("tr",Bc,mt,mt.childNodes[p]);vt(h,l.class),l.show||vt(h,Ri);let v=Ht("th",null,h);if(Te.show){let E=Pt(Vc,v);if(p>0){let I=Te.width(t,p);I&&(E.style.border=I+"px "+Te.dash(t,p)+" "+Te.stroke(t,p)),E.style.background=Te.fill(t,p)}}let y=Pt(Ya,v);l.label instanceof HTMLElement?y.appendChild(l.label):y.textContent=l.label,p>0&&(Te.show||(y.style.color=l.width>0?Te.stroke(t,p):Te.fill(t,p)),nt("click",v,E=>{if(V._lock)return;_i(E);let I=$.indexOf(l);if((E.ctrlKey||E.metaKey)!=re.isolate){let q=$.some((H,j)=>j>0&&j!=I&&H.show);$.forEach((H,j)=>{j>0&&Vt(j,q?j==I?Bi:$n:Bi,!0,qe.setSeries)})}else Vt(I,{show:!l.show},!0,qe.setSeries)},!1),Ki&&nt(Xa,v,E=>{V._lock||(_i(E),Vt($.indexOf(l),on,!0,qe.setSeries))},!1));for(var S in Zt){let E=Ht("td",Wc,h);E.textContent="--",m.push(E)}return[h,m]}let bi=new Map;function nt(l,p,m,h=!0){let v=bi.get(p)||{},y=V.bind[l](t,p,m,h);y&&(Ii(l,p,v[l]=y),bi.set(p,v))}function Vi(l,p,m){let h=bi.get(p)||{};for(let v in h)(l==null||v==l)&&(Sr(v,p,h[v]),delete h[v]);l==null&&bi.delete(p)}let Qt=0,vi=0,ie=0,N=0,_e=0,Ne=0,Wi=_e,xi=Ne,Ut=ie,yi=N,ft=0,kt=0,dt=0,Rt=0;t.bbox={};let Ds=!1,Gn=!1,Gi=!1,wi=!1,Kn=!1,St=!1;function Fs(l,p,m){(m||l!=t.width||p!=t.height)&&Yr(l,p),Xi(!1),Gi=!0,Gn=!0,en()}function Yr(l,p){t.width=Qt=ie=l,t.height=vi=N=p,_e=Ne=0,Fl(),ql();let m=t.bbox;ft=m.left=Li(_e*fe,.5),kt=m.top=Li(Ne*fe,.5),dt=m.width=Li(ie*fe,.5),Rt=m.height=Li(N*fe,.5)}let Rl=3;function Il(){let l=!1,p=0;for(;!l;){p++;let m=Gl(p),h=Kl(p);l=p==Rl||m&&h,l||(Yr(t.width,t.height),Gn=!0)}}function Dl({width:l,height:p}){Fs(l,p)}t.setSize=Dl;function Fl(){let l=!1,p=!1,m=!1,h=!1;P.forEach((v,y)=>{if(v.show&&v._show){let{side:S,_size:E}=v,I=S%2,q=v.label!=null?v.labelSize:0,H=E+q;H>0&&(I?(ie-=H,S==3?(_e+=H,h=!0):m=!0):(N-=H,S==0?(Ne+=H,l=!0):p=!0))}}),$i[0]=l,$i[1]=m,$i[2]=p,$i[3]=h,ie-=li[1]+li[3],_e+=li[3],N-=li[2]+li[0],Ne+=li[0]}function ql(){let l=_e+ie,p=Ne+N,m=_e,h=Ne;function v(y,S){switch(y){case 1:return l+=S,l-S;case 2:return p+=S,p-S;case 3:return m-=S,m+S;case 0:return h-=S,h+S}}P.forEach((y,S)=>{if(y.show&&y._show){let E=y.side;y._pos=v(E,y._size),y.label!=null&&(y._lpos=v(E,y.labelSize))}})}if(V.dataIdx==null){let l=V.hover,p=l.skip=new Set(l.skip??[]);p.add(void 0);let m=l.prox=le(l.prox),h=l.bias??=0;V.dataIdx=(v,y,S,E)=>{if(y==0)return S;let I=S,q=m(v,y,S,E)??ye,H=q>=0&&q<ye,j=D.ori==0?ie:N,X=V.left,ue=i[0],pe=i[y];if(p.has(pe[S])){I=null;let oe=null,J=null,W;if(h==0||h==-1)for(W=S;oe==null&&W-- >0;)p.has(pe[W])||(oe=W);if(h==0||h==1)for(W=S;J==null&&W++<pe.length;)p.has(pe[W])||(J=W);if(oe!=null||J!=null)if(H){let Se=oe==null?-1/0:L(ue[oe],D,j,0),Ie=J==null?1/0:L(ue[J],D,j,0),Ye=X-Se,ve=Ie-X;Ye<=ve?Ye<=q&&(I=oe):ve<=q&&(I=J)}else I=J==null?oe:oe==null?J:S-oe<=J-S?oe:J}else H&&Ue(X-L(ue[S],D,j,0))>q&&(I=null);return I}}let _i=l=>{V.event=l};V.idxs=be,V._lock=!1;let et=V.points;et.show=le(et.show),et.size=le(et.size),et.stroke=le(et.stroke),et.width=le(et.width),et.fill=le(et.fill);let Bt=t.focus=He({},n.focus||{alpha:.3},V.focus),Ki=Bt.prox>=0,Yi=Ki&&et.one,At=[],Ji=[],Zi=[];function Jr(l,p){let m=et.show(t,p);if(m instanceof HTMLElement)return vt(m,Oc),vt(m,l.class),Yt(m,-10,-10,ie,N),_.insertBefore(m,At[p]),m}function Zr(l,p){if(s==1||p>0){let m=s==1&&R[l.scale].time,h=l.value;l.value=m?ho(h)?_o(ae,wo(h,B)):h||ce:h||ed,l.label=l.label||(m?Wp:Vp)}if(Yi||p>0){l.width=l.width==null?1:l.width,l.paths=l.paths||fd||sp,l.fillTo=le(l.fillTo||rd),l.pxAlign=+de(l.pxAlign,A),l.pxRound=Eo(l.pxAlign),l.stroke=le(l.stroke||null),l.fill=le(l.fill||null),l._stroke=l._fill=l._paths=l._focus=null;let m=td(lt(1,l.width),1),h=l.points=He({},{size:m,width:lt(1,m*.2),stroke:l.stroke,space:m*2,paths:hd,_stroke:null,_fill:null},l.points);h.show=le(h.show),h.filter=le(h.filter),h.fill=le(h.fill),h.stroke=le(h.stroke),h.paths=le(h.paths),h.pxAlign=l.pxAlign}if(Oe){let m=Wn(l,p);Ee.splice(p,0,m[0]),jt.splice(p,0,m[1]),re.values.push(null)}if(it){be.splice(p,0,null);let m=null;Yi?p==0&&(m=Jr(l,p)):p>0&&(m=Jr(l,p)),At.splice(p,0,m),Ji.splice(p,0,0),Zi.splice(p,0,0)}Ke("addSeries",p)}function Hl(l,p){p=p??$.length,l=s==1?Er(l,p,ko,Mo):Er(l,p,{},To),$.splice(p,0,l),Zr($[p],p)}t.addSeries=Hl;function Ol(l){if($.splice(l,1),Oe){re.values.splice(l,1),jt.splice(l,1);let p=Ee.splice(l,1)[0];Vi(null,p.firstChild),p.remove()}it&&(be.splice(l,1),At.splice(l,1)[0].remove(),Ji.splice(l,1),Zi.splice(l,1)),Ke("delSeries",l)}t.delSeries=Ol;let $i=[!1,!1,!1,!1];function Nl(l,p){if(l._show=l.show,l.show){let m=l.side%2,h=R[l.scale];h==null&&(l.scale=m?$[1].scale:O,h=R[l.scale]);let v=h.time;l.size=le(l.size),l.space=le(l.space),l.rotate=le(l.rotate),hi(l.incrs)&&l.incrs.forEach(S=>{!gi.has(S)&&gi.set(S,Bo(S))}),l.incrs=le(l.incrs||(h.distr==2?Ap:v?w==1?Tp:Ep:zi)),l.splits=le(l.splits||(v&&h.distr==1?pt:h.distr==3?Cr:h.distr==4?Yp:Kp)),l.stroke=le(l.stroke),l.grid.stroke=le(l.grid.stroke),l.ticks.stroke=le(l.ticks.stroke),l.border.stroke=le(l.border.stroke);let y=l.values;l.values=hi(y)&&!hi(y[0])?le(y):v?hi(y)?yo(ae,xo(y,B)):ho(y)?Rp(ae,y):y||Ce:y||Gp,l.filter=le(l.filter||(h.distr>=3&&h.log==10?Qp:h.distr==3&&h.log==2?Xp:jo)),l.font=Io(l.font),l.labelFont=Io(l.labelFont),l._size=l.size(t,null,p,0),l._space=l._rotate=l._incrs=l._found=l._splits=l._values=null,l._size>0&&($i[p]=!0,l._el=Pt(Dc,u))}}function kn(l,p,m,h){let[v,y,S,E]=m,I=p%2,q=0;return I==0&&(E||y)&&(q=p==0&&!v||p==2&&!S?je($o.size/3):0),I==1&&(v||S)&&(q=p==1&&!y||p==3&&!E?je(Ao.size/2):0),q}let Qr=t.padding=(n.padding||[kn,kn,kn,kn]).map(l=>le(de(l,kn))),li=t._padding=Qr.map((l,p)=>l(t,p,$i,0)),Ze,Be=null,Ve=null,Yn=s==1?$[0].idxs:null,It=null,Sn=!1;function Xr(l,p){if(i=l??[],t.data=t._data=i,s==2){Ze=0;for(let m=1;m<$.length;m++)Ze+=i[m][0].length}else{i.length==0&&(t.data=t._data=i=[[]]),It=i[0],Ze=It.length;let m=i;if(te==2){m=i.slice();let h=m[0]=Array(Ze);for(let v=0;v<Ze;v++)h[v]=v}t._data=i=m}if(Xi(!0),Ke("setData"),te==2&&(Gi=!0),p!==!1){let m=D;m.auto(t,Sn)?qs():pi(O,m.min,m.max),wi=wi||V.left>=0,St=!0,en()}}t.setData=Xr;function qs(){Sn=!0;let l,p;s==1&&(Ze>0?(Be=Yn[0]=0,Ve=Yn[1]=Ze-1,l=i[0][Be],p=i[0][Ve],te==2?(l=Be,p=Ve):l==p&&(te==3?[l,p]=$s(l,l,D.log,!1):te==4?[l,p]=Ir(l,l,D.log,!1):D.time?p=l+je(86400/w):[l,p]=ys(l,p,Dr,!0))):(Be=Yn[0]=l=null,Ve=Yn[1]=p=null)),pi(O,l,p)}let Jn,Qi,Hs,Os,Ns,js,Us,Bs,Vs,ut;function ea(l,p,m,h,v,y){l??=Za,m??=qr,h??="butt",v??=Za,y??="round",l!=Jn&&(f.strokeStyle=Jn=l),v!=Qi&&(f.fillStyle=Qi=v),p!=Hs&&(f.lineWidth=Hs=p),y!=Ns&&(f.lineJoin=Ns=y),h!=js&&(f.lineCap=js=h),m!=Os&&f.setLineDash(Os=m)}function ta(l,p,m,h){p!=Qi&&(f.fillStyle=Qi=p),l!=Us&&(f.font=Us=l),m!=Bs&&(f.textAlign=Bs=m),h!=Vs&&(f.textBaseline=Vs=h)}function Ws(l,p,m,h,v=0){if(h.length>0&&l.auto(t,Sn)&&(p==null||p.min==null)){let y=de(Be,0),S=de(Ve,h.length-1),E=m.min==null?Qc(h,y,S,v,l.distr==3):[m.min,m.max];l.min=Nt(l.min,m.min=E[0]),l.max=lt(l.max,m.max=E[1])}}let ia={min:null,max:null};function jl(){for(let h in R){let v=R[h];U[h]==null&&(v.min==null||U[O]!=null&&v.auto(t,Sn))&&(U[h]=ia)}for(let h in R){let v=R[h];U[h]==null&&v.from!=null&&U[v.from]!=null&&(U[h]=ia)}U[O]!=null&&Xi(!0);let l={};for(let h in U){let v=U[h];if(v!=null){let y=l[h]=gn(R[h],op);if(v.min!=null)He(y,v);else if(h!=O||s==2)if(Ze==0&&y.from==null){let S=y.range(t,null,null,h);y.min=S[0],y.max=S[1]}else y.min=ye,y.max=-ye}}if(Ze>0){$.forEach((h,v)=>{if(s==1){let y=h.scale,S=U[y];if(S==null)return;let E=l[y];if(v==0){let I=E.range(t,E.min,E.max,y);E.min=I[0],E.max=I[1],Be=Ot(E.min,i[0]),Ve=Ot(E.max,i[0]),Ve-Be>1&&(i[0][Be]<E.min&&Be++,i[0][Ve]>E.max&&Ve--),h.min=It[Be],h.max=It[Ve]}else h.show&&h.auto&&Ws(E,S,h,i[v],h.sorted);h.idxs[0]=Be,h.idxs[1]=Ve}else if(v>0&&h.show&&h.auto){let[y,S]=h.facets,E=y.scale,I=S.scale,[q,H]=i[v],j=l[E],X=l[I];j!=null&&Ws(j,U[E],y,q,y.sorted),X!=null&&Ws(X,U[I],S,H,S.sorted),h.min=S.min,h.max=S.max}});for(let h in l){let v=l[h],y=U[h];if(v.from==null&&(y==null||y.min==null)){let S=v.range(t,v.min==ye?null:v.min,v.max==-ye?null:v.max,h);v.min=S[0],v.max=S[1]}}}for(let h in l){let v=l[h];if(v.from!=null){let y=l[v.from];if(y.min==null)v.min=v.max=null;else{let S=v.range(t,y.min,y.max,h);v.min=S[0],v.max=S[1]}}}let p={},m=!1;for(let h in l){let v=l[h],y=R[h];if(y.min!=v.min||y.max!=v.max){y.min=v.min,y.max=v.max;let S=y.distr;y._min=S==3?ii(y.min):S==4?vr(y.min,y.asinh):S==100?y.fwd(y.min):y.min,y._max=S==3?ii(y.max):S==4?vr(y.max,y.asinh):S==100?y.fwd(y.max):y.max,p[h]=m=!0}}if(m){$.forEach((h,v)=>{s==2?v>0&&p.y&&(h._paths=null):p[h.scale]&&(h._paths=null)});for(let h in p)Gi=!0,Ke("setScale",h);it&&V.left>=0&&(wi=St=!0)}for(let h in U)U[h]=null}function Ul(l){let p=Ar(Be-1,0,Ze-1),m=Ar(Ve+1,0,Ze-1);for(;l[p]==null&&p>0;)p--;for(;l[m]==null&&m<Ze-1;)m++;return[p,m]}function Bl(){if(Ze>0){let l=$.some(p=>p._focus)&&ut!=Bt.alpha;l&&(f.globalAlpha=ut=Bt.alpha),$.forEach((p,m)=>{if(m>0&&p.show&&(na(m,!1),na(m,!0),p._paths==null)){let h=ut;ut!=p.alpha&&(f.globalAlpha=ut=p.alpha);let v=s==2?[0,i[m][0].length-1]:Ul(i[m]);p._paths=p.paths(t,m,v[0],v[1]),ut!=h&&(f.globalAlpha=ut=h)}}),$.forEach((p,m)=>{if(m>0&&p.show){let h=ut;ut!=p.alpha&&(f.globalAlpha=ut=p.alpha),p._paths!=null&&sa(m,!1);{let v=p._paths!=null?p._paths.gaps:null,y=p.points.show(t,m,Be,Ve,v),S=p.points.filter(t,m,y,v);(y||S)&&(p.points._paths=p.points.paths(t,m,Be,Ve,S),sa(m,!0))}ut!=h&&(f.globalAlpha=ut=h),Ke("drawSeries",m)}}),l&&(f.globalAlpha=ut=1)}}function na(l,p){let m=p?$[l].points:$[l];m._stroke=m.stroke(t,l),m._fill=m.fill(t,l)}function sa(l,p){let m=p?$[l].points:$[l],{stroke:h,fill:v,clip:y,flags:S,_stroke:E=m._stroke,_fill:I=m._fill,_width:q=m.width}=m._paths;q=we(q*fe,3);let H=null,j=q%2/2;p&&I==null&&(I=q>0?"#fff":E);let X=m.pxAlign==1&&j>0;if(X&&f.translate(j,j),!p){let ue=ft-q/2,pe=kt-q/2,oe=dt+q,J=Rt+q;H=new Path2D,H.rect(ue,pe,oe,J)}p?Gs(E,q,m.dash,m.cap,I,h,v,S,y):Vl(l,E,q,m.dash,m.cap,I,h,v,S,H,y),X&&f.translate(-j,-j)}function Vl(l,p,m,h,v,y,S,E,I,q,H){let j=!1;I!=0&&ee.forEach((X,ue)=>{if(X.series[0]==l){let pe=$[X.series[1]],oe=i[X.series[1]],J=(pe._paths||Bn).band;hi(J)&&(J=X.dir==1?J[0]:J[1]);let W,Se=null;pe.show&&J&&ep(oe,Be,Ve)?(Se=X.fill(t,ue)||y,W=pe._paths.clip):J=null,Gs(p,m,h,v,Se,S,E,I,q,H,W,J),j=!0}}),j||Gs(p,m,h,v,y,S,E,I,q,H)}let ra=bn|Mr;function Gs(l,p,m,h,v,y,S,E,I,q,H,j){ea(l,p,m,h,v),(I||q||j)&&(f.save(),I&&f.clip(I),q&&f.clip(q)),j?(E&ra)==ra?(f.clip(j),H&&f.clip(H),Qn(v,S),Zn(l,y,p)):E&Mr?(Qn(v,S),f.clip(j),Zn(l,y,p)):E&bn&&(f.save(),f.clip(j),H&&f.clip(H),Qn(v,S),f.restore(),Zn(l,y,p)):(Qn(v,S),Zn(l,y,p)),(I||q||j)&&f.restore()}function Zn(l,p,m){m>0&&(p instanceof Map?p.forEach((h,v)=>{f.strokeStyle=Jn=v,f.stroke(h)}):p!=null&&l&&f.stroke(p))}function Qn(l,p){p instanceof Map?p.forEach((m,h)=>{f.fillStyle=Qi=h,f.fill(m)}):p!=null&&l&&f.fill(p)}function Wl(l,p,m,h){let v=P[l],y;if(h<=0)y=[0,0];else{let S=v._space=v.space(t,l,p,m,h),E=v._incrs=v.incrs(t,l,p,m,h,S);y=wd(p,m,E,h,S)}return v._found=y}function Ks(l,p,m,h,v,y,S,E,I,q){let H=S%2/2;A==1&&f.translate(H,H),ea(E,S,I,q,E),f.beginPath();let j,X,ue,pe,oe=v+(h==0||h==3?-y:y);m==0?(X=v,pe=oe):(j=v,ue=oe);for(let J=0;J<l.length;J++)p[J]!=null&&(m==0?j=ue=l[J]:X=pe=l[J],f.moveTo(j,X),f.lineTo(ue,pe));f.stroke(),A==1&&f.translate(-H,-H)}function Gl(l){let p=!0;return P.forEach((m,h)=>{if(!m.show)return;let v=R[m.scale];if(v.min==null){m._show&&(p=!1,m._show=!1,Xi(!1));return}else m._show||(p=!1,m._show=!0,Xi(!1));let y=m.side,S=y%2,{min:E,max:I}=v,[q,H]=Wl(h,E,I,S==0?ie:N);if(H==0)return;let j=v.distr==2,X=m._splits=m.splits(t,h,E,I,q,H,j),ue=v.distr==2?X.map(W=>It[W]):X,pe=v.distr==2?It[X[1]]-It[X[0]]:q,oe=m._values=m.values(t,m.filter(t,ue,h,H,pe),h,H,pe);m._rotate=y==2?m.rotate(t,oe,h,H):0;let J=m._size;m._size=Et(m.size(t,oe,h,l)),J!=null&&m._size!=J&&(p=!1)}),p}function Kl(l){let p=!0;return Qr.forEach((m,h)=>{let v=m(t,h,$i,l);v!=li[h]&&(p=!1),li[h]=v}),p}function Yl(){for(let l=0;l<P.length;l++){let p=P[l];if(!p.show||!p._show)continue;let m=p.side,h=m%2,v,y,S=p.stroke(t,l),E=m==0||m==3?-1:1,[I,q]=p._found;if(p.label!=null){let rt=p.labelGap*E,bt=je((p._lpos+rt)*fe);ta(p.labelFont[0],S,"center",m==2?"top":Ja),f.save(),h==1?(v=y=0,f.translate(bt,je(kt+Rt/2)),f.rotate((m==3?-vs:vs)/2)):(v=je(ft+dt/2),y=bt);let Ai=Oo(p.label)?p.label(t,l,I,q):p.label;f.fillText(Ai,v,y),f.restore()}if(q==0)continue;let H=R[p.scale],j=h==0?dt:Rt,X=h==0?ft:kt,ue=p._splits,pe=H.distr==2?ue.map(rt=>It[rt]):ue,oe=H.distr==2?It[ue[1]]-It[ue[0]]:I,J=p.ticks,W=p.border,Se=J.show?J.size:0,Ie=je(Se*fe),Ye=je((p.alignTo==2?p._size-Se-p.gap:p.gap)*fe),ve=p._rotate*-vs/180,De=T(p._pos*fe),ht=(Ie+Ye)*E,st=De+ht;y=h==0?st:0,v=h==1?st:0;let Ct=p.font[0],Dt=p.align==1?dn:p.align==2?hr:ve>0?dn:ve<0?hr:h==0?"center":m==3?hr:dn,Gt=ve||h==1?"middle":m==2?"top":Ja;ta(Ct,S,Dt,Gt);let gt=p.font[1]*p.lineGap,Tt=ue.map(rt=>T(r(rt,H,j,X))),Ft=p._values;for(let rt=0;rt<Ft.length;rt++){let bt=Ft[rt];if(bt!=null){h==0?v=Tt[rt]:y=Tt[rt],bt=""+bt;let Ai=bt.indexOf(`
`)==-1?[bt]:bt.split(/\n/gm);for(let at=0;at<Ai.length;at++){let ka=Ai[at];ve?(f.save(),f.translate(v,y+at*gt),f.rotate(ve),f.fillText(ka,0,0),f.restore()):f.fillText(ka,v,y+at*gt)}}}J.show&&Ks(Tt,J.filter(t,pe,l,q,oe),h,m,De,Ie,we(J.width*fe,3),J.stroke(t,l),J.dash,J.cap);let Kt=p.grid;Kt.show&&Ks(Tt,Kt.filter(t,pe,l,q,oe),h,h==0?2:1,h==0?kt:ft,h==0?Rt:dt,we(Kt.width*fe,3),Kt.stroke(t,l),Kt.dash,Kt.cap),W.show&&Ks([De],[1],h==0?1:0,h==0?1:2,h==1?kt:ft,h==1?Rt:dt,we(W.width*fe,3),W.stroke(t,l),W.dash,W.cap)}Ke("drawAxes")}function Xi(l){$.forEach((p,m)=>{m>0&&(p._paths=null,l&&(s==1?(p.min=null,p.max=null):p.facets.forEach(h=>{h.min=null,h.max=null})))})}let Xn=!1,Ys=!1,An=[];function Jl(){Ys=!1;for(let l=0;l<An.length;l++)Ke(...An[l]);An.length=0}function en(){Xn||(fp(aa),Xn=!0)}function Zl(l,p=!1){Xn=!0,Ys=p,l(t),aa(),p&&An.length>0&&queueMicrotask(Jl)}t.batch=Zl;function aa(){if(Ds&&(jl(),Ds=!1),Gi&&(Il(),Gi=!1),Gn){if(Ae(x,dn,_e),Ae(x,"top",Ne),Ae(x,On,ie),Ae(x,Nn,N),Ae(_,dn,_e),Ae(_,"top",Ne),Ae(_,On,ie),Ae(_,Nn,N),Ae(u,On,Qt),Ae(u,Nn,vi),g.width=je(Qt*fe),g.height=je(vi*fe),P.forEach(({_el:l,_show:p,_size:m,_pos:h,side:v})=>{if(l!=null)if(p){let y=v===3||v===0?m:0,S=v%2==1;Ae(l,S?"left":"top",h-y),Ae(l,S?"width":"height",m),Ae(l,S?"top":"left",S?Ne:_e),Ae(l,S?"height":"width",S?N:ie),kr(l,Ri)}else vt(l,Ri)}),Jn=Qi=Hs=Ns=js=Us=Bs=Vs=Os=null,ut=1,Mn(!0),_e!=Wi||Ne!=xi||ie!=Ut||N!=yi){Xi(!1);let l=ie/Ut,p=N/yi;if(it&&!wi&&V.left>=0){V.left*=l,V.top*=p,tn&&Yt(tn,je(V.left),0,ie,N),nn&&Yt(nn,0,je(V.top),ie,N);for(let m=0;m<At.length;m++){let h=At[m];h!=null&&(Ji[m]*=l,Zi[m]*=p,Yt(h,Et(Ji[m]),Et(Zi[m]),ie,N))}}if(ke.show&&!Kn&&ke.left>=0&&ke.width>0){ke.left*=l,ke.width*=l,ke.top*=p,ke.height*=p;for(let m in tr)Ae(an,m,ke[m])}Wi=_e,xi=Ne,Ut=ie,yi=N}Ke("setSize"),Gn=!1}Qt>0&&vi>0&&(f.clearRect(0,0,g.width,g.height),Ke("drawClear"),Q.forEach(l=>l()),Ke("draw")),ke.show&&Kn&&(es(ke),Kn=!1),it&&wi&&(Si(null,!0,!1),wi=!1),re.show&&re.live&&St&&(Xs(),St=!1),c||(c=!0,t.status=1,Ke("ready")),Sn=!1,Xn=!1}t.redraw=(l,p)=>{Gi=p||!1,l!==!1?pi(O,D.min,D.max):en()};function Js(l,p){let m=R[l];if(m.from==null){if(Ze==0){let h=m.range(t,p.min,p.max,l);p.min=h[0],p.max=h[1]}if(p.min>p.max){let h=p.min;p.min=p.max,p.max=h}if(Ze>1&&p.min!=null&&p.max!=null&&p.max-p.min<1e-16)return;l==O&&m.distr==2&&Ze>0&&(p.min=Ot(p.min,i[0]),p.max=Ot(p.max,i[0]),p.min==p.max&&p.max++),U[l]=p,Ds=!0,en()}}t.setScale=Js;let Zs,Qs,tn,nn,oa,la,sn,rn,ca,pa,$e,Me,ci=!1,Qe=V.drag,We=Qe.x,Ge=Qe.y;it&&(V.x&&(Zs=Pt(qc,_)),V.y&&(Qs=Pt(Hc,_)),D.ori==0?(tn=Zs,nn=Qs):(tn=Qs,nn=Zs),$e=V.left,Me=V.top);let ke=t.select=He({show:!0,over:!0,left:0,width:0,top:0,height:0},n.select),an=ke.show?Pt(Fc,ke.over?_:x):null;function es(l,p){if(ke.show){for(let m in l)ke[m]=l[m],m in tr&&Ae(an,m,l[m]);p!==!1&&Ke("setSelect")}}t.setSelect=es;function Ql(l){if($[l].show)Oe&&kr(Ee[l],Ri);else if(Oe&&vt(Ee[l],Ri),it){let m=Yi?At[0]:At[l];m!=null&&Yt(m,-10,-10,ie,N)}}function pi(l,p,m){Js(l,{min:p,max:m})}function Vt(l,p,m,h){p.focus!=null&&nc(l),p.show!=null&&$.forEach((v,y)=>{y>0&&(l==y||l==null)&&(v.show=p.show,Ql(y),s==2?(pi(v.facets[0].scale,null,null),pi(v.facets[1].scale,null,null)):pi(v.scale,null,null),en())}),m!==!1&&Ke("setSeries",l,p),h&&Pn("setSeries",t,l,p)}t.setSeries=Vt;function Xl(l,p){He(ee[l],p)}function ec(l,p){l.fill=le(l.fill||null),l.dir=de(l.dir,-1),p=p??ee.length,ee.splice(p,0,l)}function tc(l){l==null?ee.length=0:ee.splice(l,1)}t.addBand=ec,t.setBand=Xl,t.delBand=tc;function ic(l,p){$[l].alpha=p,it&&At[l]!=null&&(At[l].style.opacity=p),Oe&&Ee[l]&&(Ee[l].style.opacity=p)}let Xt,di,ki,on={focus:!0};function nc(l){if(l!=ki){let p=l==null,m=Bt.alpha!=1;$.forEach((h,v)=>{if(s==1||v>0){let y=p||v==0||v==l;h._focus=p?null:y,m&&ic(v,y?1:Bt.alpha)}}),ki=l,m&&en()}}Oe&&Ki&&nt(eo,he,l=>{V._lock||(_i(l),ki!=null&&Vt(null,on,!0,qe.setSeries))});function Wt(l,p,m){let h=R[p];m&&(l=l/fe-(h.ori==1?Ne:_e));let v=ie;h.ori==1&&(v=N,l=v-l),h.dir==-1&&(l=v-l);let y=h._min,S=h._max,E=l/v,I=y+(S-y)*E,q=h.distr;return q==3?fn(10,I):q==4?ip(I,h.asinh):q==100?h.bwd(I):I}function sc(l,p){let m=Wt(l,O,p);return Ot(m,i[0],Be,Ve)}t.valToIdx=l=>Ot(l,i[0]),t.posToIdx=sc,t.posToVal=Wt,t.valToPos=(l,p,m)=>R[p].ori==0?a(l,R[p],m?dt:ie,m?ft:0):o(l,R[p],m?Rt:N,m?kt:0),t.setCursor=(l,p,m)=>{$e=l.left,Me=l.top,Si(null,p,m)};function da(l,p){Ae(an,dn,ke.left=l),Ae(an,On,ke.width=p)}function ua(l,p){Ae(an,"top",ke.top=l),Ae(an,Nn,ke.height=p)}let Cn=D.ori==0?da:ua,Tn=D.ori==1?da:ua;function rc(){if(Oe&&re.live)for(let l=s==2?1:0;l<$.length;l++){if(l==0&&$t)continue;let p=re.values[l],m=0;for(let h in p)jt[l][m++].firstChild.nodeValue=p[h]}}function Xs(l,p){if(l!=null&&(l.idxs?l.idxs.forEach((m,h)=>{be[h]=m}):ap(l.idx)||be.fill(l.idx),re.idx=be[0]),Oe&&re.live){for(let m=0;m<$.length;m++)(m>0||s==1&&!$t)&&ac(m,be[m]);rc()}St=!1,p!==!1&&Ke("setLegend")}t.setLegend=Xs;function ac(l,p){let m=$[l],h=l==0&&te==2?It:i[l],v;$t?v=m.values(t,l,p)??oi:(v=m.value(t,p==null?null:h[p],l,p),v=v==null?oi:{_:v}),re.values[l]=v}function Si(l,p,m){ca=$e,pa=Me,[$e,Me]=V.move(t,$e,Me),V.left=$e,V.top=Me,it&&(tn&&Yt(tn,je($e),0,ie,N),nn&&Yt(nn,0,je(Me),ie,N));let h,v=Be>Ve;Xt=ye,di=null;let y=D.ori==0?ie:N,S=D.ori==1?ie:N;if($e<0||Ze==0||v){h=V.idx=null;for(let E=0;E<$.length;E++){let I=At[E];I!=null&&Yt(I,-10,-10,ie,N)}Ki&&Vt(null,on,!0,l==null&&qe.setSeries),re.live&&(be.fill(h),St=!0)}else{let E,I,q;s==1&&(E=D.ori==0?$e:Me,I=Wt(E,O),h=V.idx=Ot(I,i[0],Be,Ve),q=L(i[0][h],D,y,0));let H=-10,j=-10,X=0,ue=0,pe=!0,oe="",J="";for(let W=s==2?1:0;W<$.length;W++){let Se=$[W],Ie=be[W],Ye=Ie==null?null:s==1?i[W][Ie]:i[W][1][Ie],ve=V.dataIdx(t,W,h,I),De=ve==null?null:s==1?i[W][ve]:i[W][1][ve];if(St=St||De!=Ye||ve!=Ie,be[W]=ve,W>0&&Se.show){let ht=ve==null?-10:ve==h?q:L(s==1?i[0][ve]:i[W][0][ve],D,y,0),st=De==null?-10:Y(De,s==1?R[Se.scale]:R[Se.facets[1].scale],S,0);if(Ki&&De!=null){let Ct=D.ori==1?$e:Me,Dt=Ue(Bt.dist(t,W,ve,st,Ct));if(Dt<Xt){let Gt=Bt.bias;if(Gt!=0){let gt=Wt(Ct,Se.scale),Tt=De>=0?1:-1,Ft=gt>=0?1:-1;Ft==Tt&&(Ft==1?Gt==1?De>=gt:De<=gt:Gt==1?De<=gt:De>=gt)&&(Xt=Dt,di=W)}else Xt=Dt,di=W}}if(St||Yi){let Ct,Dt;D.ori==0?(Ct=ht,Dt=st):(Ct=st,Dt=ht);let Gt,gt,Tt,Ft,Kt,rt,bt=!0,Ai=et.bbox;if(Ai!=null){bt=!1;let at=Ai(t,W);Tt=at.left,Ft=at.top,Gt=at.width,gt=at.height}else Tt=Ct,Ft=Dt,Gt=gt=et.size(t,W);if(rt=et.fill(t,W),Kt=et.stroke(t,W),Yi)W==di&&Xt<=Bt.prox&&(H=Tt,j=Ft,X=Gt,ue=gt,pe=bt,oe=rt,J=Kt);else{let at=At[W];at!=null&&(Ji[W]=Tt,Zi[W]=Ft,oo(at,Gt,gt,bt),ro(at,rt,Kt),Yt(at,Et(Tt),Et(Ft),ie,N))}}}}if(Yi){let W=Bt.prox,Se=ki==null?Xt<=W:Xt>W||di!=ki;if(St||Se){let Ie=At[0];Ie!=null&&(Ji[0]=H,Zi[0]=j,oo(Ie,X,ue,pe),ro(Ie,oe,J),Yt(Ie,Et(H),Et(j),ie,N))}}}if(ke.show&&ci)if(l!=null){let[E,I]=qe.scales,[q,H]=qe.match,[j,X]=l.cursor.sync.scales,ue=l.cursor.drag;if(We=ue._x,Ge=ue._y,We||Ge){let{left:pe,top:oe,width:J,height:W}=l.select,Se=l.scales[j].ori,Ie=l.posToVal,Ye,ve,De,ht,st,Ct=E!=null&&q(E,j),Dt=I!=null&&H(I,X);Ct&&We?(Se==0?(Ye=pe,ve=J):(Ye=oe,ve=W),De=R[E],ht=L(Ie(Ye,j),De,y,0),st=L(Ie(Ye+ve,j),De,y,0),Cn(Nt(ht,st),Ue(st-ht))):Cn(0,y),Dt&&Ge?(Se==1?(Ye=pe,ve=J):(Ye=oe,ve=W),De=R[I],ht=Y(Ie(Ye,X),De,S,0),st=Y(Ie(Ye+ve,X),De,S,0),Tn(Nt(ht,st),Ue(st-ht))):Tn(0,S)}else ir()}else{let E=Ue(ca-oa),I=Ue(pa-la);if(D.ori==1){let X=E;E=I,I=X}We=Qe.x&&E>=Qe.dist,Ge=Qe.y&&I>=Qe.dist;let q=Qe.uni;q!=null?We&&Ge&&(We=E>=q,Ge=I>=q,!We&&!Ge&&(I>E?Ge=!0:We=!0)):Qe.x&&Qe.y&&(We||Ge)&&(We=Ge=!0);let H,j;We&&(D.ori==0?(H=sn,j=$e):(H=rn,j=Me),Cn(Nt(H,j),Ue(j-H)),Ge||Tn(0,S)),Ge&&(D.ori==1?(H=sn,j=$e):(H=rn,j=Me),Tn(Nt(H,j),Ue(j-H)),We||Cn(0,y)),!We&&!Ge&&(Cn(0,0),Tn(0,0))}if(Qe._x=We,Qe._y=Ge,l==null){if(m){if($a!=null){let[E,I]=qe.scales;qe.values[0]=E!=null?Wt(D.ori==0?$e:Me,E):null,qe.values[1]=I!=null?Wt(D.ori==1?$e:Me,I):null}Pn(gr,t,$e,Me,ie,N,h)}if(Ki){let E=m&&qe.setSeries,I=Bt.prox;ki==null?Xt<=I&&Vt(di,on,!0,E):Xt>I?Vt(null,on,!0,E):di!=ki&&Vt(di,on,!0,E)}}St&&(re.idx=h,Xs()),p!==!1&&Ke("setCursor")}let ui=null;Object.defineProperty(t,"rect",{get(){return ui==null&&Mn(!1),ui}});function Mn(l=!1){l?ui=null:(ui=_.getBoundingClientRect(),Ke("syncRect",ui))}function ma(l,p,m,h,v,y,S){V._lock||ci&&l!=null&&l.movementX==0&&l.movementY==0||(er(l,p,m,h,v,y,S,!1,l!=null),l!=null?Si(null,!0,!0):Si(p,!0,!1))}function er(l,p,m,h,v,y,S,E,I){if(ui==null&&Mn(!1),_i(l),l!=null)m=l.clientX-ui.left,h=l.clientY-ui.top;else{if(m<0||h<0){$e=-10,Me=-10;return}let[q,H]=qe.scales,j=p.cursor.sync,[X,ue]=j.values,[pe,oe]=j.scales,[J,W]=qe.match,Se=p.axes[0].side%2==1,Ie=D.ori==0?ie:N,Ye=D.ori==1?ie:N,ve=Se?y:v,De=Se?v:y,ht=Se?h:m,st=Se?m:h;if(pe!=null?m=J(q,pe)?r(X,R[q],Ie,0):-10:m=Ie*(ht/ve),oe!=null?h=W(H,oe)?r(ue,R[H],Ye,0):-10:h=Ye*(st/De),D.ori==1){let Ct=m;m=h,h=Ct}}I&&(p==null||p.cursor.event.type==gr)&&((m<=1||m>=ie-1)&&(m=Li(m,ie)),(h<=1||h>=N-1)&&(h=Li(h,N))),E?(oa=m,la=h,[sn,rn]=V.move(t,m,h)):($e=m,Me=h)}let tr={width:0,height:0,left:0,top:0};function ir(){es(tr,!1)}let fa,ha,ga,ba;function va(l,p,m,h,v,y,S){ci=!0,We=Ge=Qe._x=Qe._y=!1,er(l,p,m,h,v,y,S,!0,!1),l!=null&&(nt(br,_r,xa,!1),Pn(Qa,t,sn,rn,ie,N,null));let{left:E,top:I,width:q,height:H}=ke;fa=E,ha=I,ga=q,ba=H}function xa(l,p,m,h,v,y,S){ci=Qe._x=Qe._y=!1,er(l,p,m,h,v,y,S,!1,!0);let{left:E,top:I,width:q,height:H}=ke,j=q>0||H>0,X=fa!=E||ha!=I||ga!=q||ba!=H;if(j&&X&&es(ke),Qe.setScale&&j&&X){let ue=E,pe=q,oe=I,J=H;if(D.ori==1&&(ue=I,pe=H,oe=E,J=q),We&&pi(O,Wt(ue,O),Wt(ue+pe,O)),Ge)for(let W in R){let Se=R[W];W!=O&&Se.from==null&&Se.min!=ye&&pi(W,Wt(oe+J,W),Wt(oe,W))}ir()}else V.lock&&(V._lock=!V._lock,Si(p,!0,l!=null));l!=null&&(Vi(br,_r),Pn(br,t,$e,Me,ie,N,null))}function oc(l,p,m,h,v,y,S){if(V._lock)return;_i(l);let E=ci;if(ci){let I=!0,q=!0,H=10,j,X;D.ori==0?(j=We,X=Ge):(j=Ge,X=We),j&&X&&(I=$e<=H||$e>=ie-H,q=Me<=H||Me>=N-H),j&&I&&($e=$e<sn?0:ie),X&&q&&(Me=Me<rn?0:N),Si(null,!0,!0),ci=!1}$e=-10,Me=-10,be.fill(null),Si(null,!0,!0),E&&(ci=E)}function ya(l,p,m,h,v,y,S){V._lock||(_i(l),qs(),ir(),l!=null&&Pn(to,t,$e,Me,ie,N,null))}function wa(){P.forEach(_d),Fs(t.width,t.height,!0)}Ii(xs,mn,wa);let ln={};ln.mousedown=va,ln.mousemove=ma,ln.mouseup=xa,ln.dblclick=ya,ln.setSeries=(l,p,m,h)=>{let v=qe.match[2];m=v(t,p,m),m!=-1&&Vt(m,h,!0,!1)},it&&(nt(Qa,_,va),nt(gr,_,ma),nt(Xa,_,l=>{_i(l),Mn(!1)}),nt(eo,_,oc),nt(to,_,ya),Pr.add(t),t.syncRect=Mn);let ts=t.hooks=n.hooks||{};function Ke(l,p,m){Ys?An.push([l,p,m]):l in ts&&ts[l].forEach(h=>{h.call(null,t,p,m)})}(n.plugins||[]).forEach(l=>{for(let p in l.hooks)ts[p]=(ts[p]||[]).concat(l.hooks[p])});let _a=(l,p,m)=>m,qe=He({key:null,setSeries:!1,filters:{pub:mo,sub:mo},scales:[O,$[1]?$[1].scale:null],match:[fo,fo,_a],values:[null,null]},V.sync);qe.match.length==2&&qe.match.push(_a),V.sync=qe;let $a=qe.key,nr=pl($a);function Pn(l,p,m,h,v,y,S){qe.filters.pub(l,p,m,h,v,y,S)&&nr.pub(l,p,m,h,v,y,S)}nr.sub(t);function lc(l,p,m,h,v,y,S){qe.filters.sub(l,p,m,h,v,y,S)&&ln[l](null,p,m,h,v,y,S)}t.pub=lc;function cc(){nr.unsub(t),Pr.delete(t),bi.clear(),Sr(xs,mn,wa),d.remove(),he?.remove(),Ke("destroy")}t.destroy=cc;function sr(){Ke("init",n,i),Xr(i||n.data,!1),U[O]?Js(O,U[O]):qs(),Kn=ke.show&&(ke.width>0||ke.height>0),wi=St=!0,Fs(n.width,n.height)}return $.forEach(Zr),P.forEach(Nl),e?e instanceof HTMLElement?(e.appendChild(d),sr()):e(t,sr):sr(),t}Je.assign=He;Je.fmtNum=Fr;Je.rangeNum=ys;Je.rangeLog=$s;Je.rangeAsinh=Ir;Je.orient=Fi;Je.pxRatio=fe;Je.join=mp;Je.fmtDate=Hr,Je.tzDate=kp;Je.sync=pl;{Je.addGap=ad,Je.clipGaps=As;let n=Je.paths={points:gl};n.linear=vl,n.stepped=cd,n.bars=pd,n.spline=ud}var _l='.uplot, .uplot *, .uplot *::before, .uplot *::after {box-sizing: border-box;}.uplot {font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";line-height: 1.5;width: min-content;}.u-title {text-align: center;font-size: 18px;font-weight: bold;}.u-wrap {position: relative;user-select: none;}.u-over, .u-under {position: absolute;}.u-under {overflow: hidden;}.uplot canvas {display: block;position: relative;width: 100%;height: 100%;}.u-axis {position: absolute;}.u-legend {font-size: 14px;margin: auto;text-align: center;}.u-inline {display: block;}.u-inline * {display: inline-block;}.u-inline tr {margin-right: 16px;}.u-legend th {font-weight: 600;}.u-legend th > * {vertical-align: middle;display: inline-block;}.u-legend .u-marker {width: 1em;height: 1em;margin-right: 4px;background-clip: padding-box !important;}.u-inline.u-live th::after {content: ":";vertical-align: middle;}.u-inline:not(.u-live) .u-value {display: none;}.u-series > * {padding: 4px;}.u-series th {cursor: pointer;}.u-legend .u-off > * {opacity: 0.3;}.u-select {background: rgba(0,0,0,0.07);position: absolute;pointer-events: none;}.u-cursor-x, .u-cursor-y {position: absolute;left: 0;top: 0;pointer-events: none;will-change: transform;}.u-hz .u-cursor-x, .u-vt .u-cursor-y {height: 100%;border-right: 1px dashed #607D8B;}.u-hz .u-cursor-y, .u-vt .u-cursor-x {width: 100%;border-bottom: 1px dashed #607D8B;}.u-cursor-pt {position: absolute;top: 0;left: 0;border-radius: 50%;border: 0 solid;pointer-events: none;will-change: transform;/*this has to be !important since we set inline "background" shorthand */background-clip: padding-box !important;}.u-axis.u-off, .u-select.u-off, .u-cursor-x.u-off, .u-cursor-y.u-off, .u-cursor-pt.u-off {display: none;}';function $l(n){if(["unknown","unavailable"].includes(n.state))return null;let i=me(n,"power.command_percent"),e=me(n,"power.applied_percent");return i!==null&&e!==null&&e>=0&&e<=100?[i,e]:null}var qi=class n{constructor(i,e){this.kind=e;let t=mi(i);this.total=t.length;let s=[],a=0,o=0,r=null;for(let c of t){r!==null&&c.time-r>n.GAP_SECONDS&&++o,r=c.time;let d=me(c,e==="scatter"?"error":"model.a"),g=me(c,e==="scatter"?"power.applied_percent":"model.b");if(!Number.isFinite(c.time)||c.time<0||c.time>864e10||["unknown","unavailable"].includes(c.state)||d===null||g===null||e==="scatter"&&(g<0||g>100)){++o;continue}++a;let f=s.at(-1);e==="model"&&f?.segment===o&&f.x===d&&f.y===g&&f.observedAt===!!c.observedAt?(f.lastTime=c.time,++f.publications):s.push({time:c.time,lastTime:c.time,x:d,y:g,segment:o,publications:1,observedAt:!!c.observedAt})}this.valid=a,this.distinct=s.length,this.reduced=s.length>n.MAX_POINTS,this.points=this.reduced?e==="model"?s.slice(-n.MAX_POINTS):Array.from({length:n.MAX_POINTS},(c,d)=>s[Math.round(d*(s.length-1)/(n.MAX_POINTS-1))]):s}static{this.MAX_POINTS=600}static{this.GAP_SECONDS=600}};var Xe=class extends xe{constructor(){super(...arguments);this.samples=[];this.curves=[];this.range=[0,1];this.heading="";this.syncKey="smartpi";this.percent=!1;this.inspectable=!1;this.selectedTime=null;this.marks=[];this.thermalPhases=!1;this.commandComparison=!1;this.legendTime=null;this.lastSignature="";this.applying=!1;this.themeMedia=matchMedia("(prefers-color-scheme: dark)");this.themeChange=()=>this.draw();this.hiddenCurves=new Set}connectedCallback(){super.connectedCallback(),this.themeMedia.addEventListener("change",this.themeChange),this.hasUpdated&&this.updateComplete.then(()=>this.draw())}disconnectedCallback(){this.themeMedia.removeEventListener("change",this.themeChange),this.dispose(),super.disconnectedCallback()}dispose(){this.observer?.disconnect(),this.observer=void 0,this.plot?.destroy(),this.plot=void 0}willUpdate(e){e.has("syncKey")&&(this.legendTime=null),e.has("selectedTime")&&(this.legendTime=this.selectedTime)}updated(e){let t=JSON.stringify([this.curves,this.heading,this.syncKey,this.percent,this.thermalPhases,this.commandComparison,this.range]);if(this.lastSamples===this.samples&&this.lastSignature===t){(e.has("selectedTime")||e.has("marks"))&&this.plot?.redraw(!1,!1);return}this.lastSamples=this.samples,this.lastSignature=t,this.draw()}inspect(e){this.legendTime=e,this.inspectable&&this.dispatchEvent(new CustomEvent("inspect-publication",{detail:e,bubbles:!0,composed:!0}))}toggleSeries(e){let t=this.curves[e].label,s=this.hiddenCurves.has(t);this.plot&&this.plot.setSeries(e+1,{show:s}),s?this.hiddenCurves.delete(t):this.hiddenCurves.add(t),this.requestUpdate()}showCurve(e){let t=this.curves.findIndex(s=>s.path===e);t>=0&&this.hiddenCurves.has(this.curves[t].label)&&this.toggleSeries(t)}drawThermalPhases(e){if(!this.thermalPhases)return;let{left:t,top:s,width:a,height:o}=e.bbox,r=e.ctx;r.save(),r.beginPath(),r.rect(t,s,a,o),r.clip(),r.globalAlpha=1;let c=0,d=0,g=0,f=()=>{if(!g)return;let u=e.valToPos(c,"x",!0),x=e.valToPos(d,"x",!0)-u;r.fillStyle=g>0?"rgba(216,137,46,.14)":"rgba(38,137,202,.14)",r.fillRect(u,s,x,o),r.fillStyle=g>0?"#d8892e":"#2689ca",r.fillRect(u,s+o-6*devicePixelRatio,x,6*devicePixelRatio)};for(let u=1;u<this.samples.length;u++){let x=this.samples[u-1],_=this.samples[u],A=me(x,"temperature.indoor"),T=me(_,"temperature.indoor"),w=A===null||T===null?0:Math.sign(T-A);w!==g&&(f(),c=x.time,g=w),d=_.time}f(),r.restore()}drawMarks(e,t){if(!this.marks.length)return;let{left:s,top:a,width:o,height:r}=e.bbox,c=e.ctx,d=8*devicePixelRatio;c.save(),c.font=`bold ${d}px sans-serif`,c.textAlign="center",c.textBaseline="middle";let g=new Map;for(let f of this.marks){let u=e.valToPos(f.time,"x",!0);if(u<s||u>s+o||u-(g.get(f.kind)??-1/0)<d*3)continue;g.set(f.kind,u);let x=f.kind==="A"||f.kind==="B",_=f.kind==="A"||f.kind==="Chauffe",A=x?f.temperature===null||this.hiddenCurves.has("Int\xE9rieure mesur\xE9e")?a+d*(_?1:3):Math.max(a+d*2,Math.min(a+r-d*6,e.valToPos(f.temperature,"y",!0)))+d*(_?-1.1:1.1):a+r-d*(_?3:1);c.fillStyle=_?"#17638d":"#6f448a",c.strokeStyle=t,c.beginPath(),f.kind==="B"?(c.moveTo(u,A-d),c.lineTo(u+d,A),c.lineTo(u,A+d),c.lineTo(u-d,A),c.closePath()):c.arc(u,A,d*.8,0,2*Math.PI),c.fill(),c.stroke(),c.fillStyle="#fff",c.fillText(f.kind==="Chauffe"?"\u2191":f.kind==="Refroidissement"?"\u2193":f.kind,u,A)}c.restore()}draw(){if(!this.isConnected)return;let e=this.renderRoot.querySelector(".plot");if(!e)return;let t=this.plot;if(t&&t.series.forEach((r,c)=>{c&&typeof r.label=="string"&&(r.show===!1?this.hiddenCurves.add(r.label):this.hiddenCurves.delete(r.label))}),this.dispose(),!this.samples.length||!this.samples.some(r=>this.curves.some(c=>this.seriesValue(r,c)!==null)))return;let s=getComputedStyle(this),a=s.getPropertyValue("--primary-text-color").trim()||"#555",o=[this.samples.map(r=>r.time),...this.curves.map(r=>this.samples.map(c=>this.seriesValue(c,r)))];this.applying=!0,this.plot=new Je({width:Math.max(240,e.clientWidth),height:245,scales:{x:{time:!0,min:this.range[0],max:this.range[1]},y:this.percent?{range:(r,c,d)=>[Math.min(0,c??0),Math.max(100,d??100)]}:{}},legend:{show:!1},cursor:{sync:{key:this.syncKey},drag:{x:!0,y:!1}},bands:this.commandComparison?[{series:[1,2],fill:"rgba(180,105,30,.22)"},{series:[2,1],fill:"rgba(30,120,155,.22)"}]:[],axes:[{stroke:a,space:100,grid:{show:!1},values:(r,c)=>c.map(d=>new Date(d*1e3).toLocaleDateString(void 0,{month:"2-digit",day:"2-digit"})+`
`+new Date(d*1e3).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})),size:55},{stroke:a,values:(r,c)=>c.map(d=>d.toLocaleString(void 0,{maximumFractionDigits:6})),grid:{stroke:"rgba(128,128,128,.15)"},size:65}],series:[{label:"Date",value:(r,c)=>c==null?"\u2014":new Date(c*1e3).toLocaleString()},...this.curves.map(r=>({label:r.label,stroke:r.color,width:2,dash:r.dash,spanGaps:!1,gaps:(c,d,g,f,u)=>{if(!this.commandComparison)return u;let x=[...u];for(let A=g+1;A<=f;A++)this.samples[A].time-this.samples[A-1].time>qi.GAP_SECONDS&&x.push([Math.round(c.valToPos(this.samples[A-1].time,"x",!0)),Math.round(c.valToPos(this.samples[A].time,"x",!0))]);let _=[];for(let A of x.sort((T,w)=>T[0]-w[0])){let T=_.at(-1);T&&A[0]<=T[1]?T[1]=Math.max(T[1],A[1]):_.push([...A])}return _},show:!this.hiddenCurves.has(r.label),paths:r.step?Je.paths.stepped({align:1}):void 0,points:{show:this.samples.length<3},value:(c,d)=>d==null?"Indisponible":`${d.toLocaleString(void 0,{maximumFractionDigits:r.unit.includes("min")?6:3})} ${r.unit}`}))],hooks:{setCursor:[r=>{let c=r.cursor.idx;if(!this.applying&&c!=null&&r.cursor.left>=0){let d=r.data[0][c];d!==void 0&&(this.legendTime=d)}}],draw:[r=>{if(this.drawThermalPhases(r),this.drawMarks(r,a),this.selectedTime===null)return;let{left:c,top:d,width:g,height:f}=r.bbox,u=r.valToPos(this.selectedTime,"x",!0);if(u<c||u>c+g)return;let x=r.ctx;x.save(),x.strokeStyle=a,x.setLineDash([5,4]),x.beginPath(),x.moveTo(u,d),x.lineTo(u,d+f),x.stroke(),x.restore()}],setSeries:[r=>{r.status!==1||r!==this.plot||(r.series.forEach((c,d)=>{d&&typeof c.label=="string"&&(c.show===!1?this.hiddenCurves.add(c.label):this.hiddenCurves.delete(c.label))}),this.requestUpdate())}],setScale:[(r,c)=>{c==="x"&&r.status===1&&r===this.plot&&!this.applying&&r.scales.x.min!=null&&r.scales.x.max!=null&&(Math.abs(r.scales.x.min-this.range[0])>.01||Math.abs(r.scales.x.max-this.range[1])>.01)&&this.dispatchEvent(new CustomEvent("time-range",{detail:[r.scales.x.min,r.scales.x.max],bubbles:!0,composed:!0}))}]}},o,e),this.applying=!1,this.observer=new ResizeObserver(()=>{this.plot&&this.plot.width!==Math.max(240,e.clientWidth)&&(this.applying=!0,this.plot.setSize({width:Math.max(240,e.clientWidth),height:245}),this.applying=!1)}),this.observer.observe(e)}seriesValue(e,t){if(!this.commandComparison)return me(e,t.path);let s=$l(e);return s===null?null:t.path==="power.command_percent"?s[0]:t.path==="power.applied_percent"?s[1]:null}render(){let e=this.samples.filter(r=>this.curves.some(c=>this.seriesValue(r,c)!==null)).length,t=this.samples.filter(r=>r.time>=this.range[0]&&r.time<=this.range[1]),s=t.find(r=>r.time===this.legendTime),a=s??t.at(-1),o=!s;return b`<h3>${this.heading}</h3>
      <div class="series-controls" role="group" aria-label="Séries affichées">
        ${this.curves.map((r,c)=>b`<button
              aria-pressed=${!this.hiddenCurves.has(r.label)}
              @click=${()=>this.toggleSeries(c)}
            >
              <span style=${"background:"+r.color} aria-hidden="true"></span
              >${r.label}
            </button>`)}
      </div>
      <div class="plot" aria-label=${this.heading}
        @pointerdown=${r=>{this.pointerStart=r.button===0?r.clientX:void 0}}
        @click=${{capture:!0,handleEvent:r=>{let c=this.plot;if(!c||!r.composedPath().includes(c.over)||this.pointerStart===void 0||Math.abs(r.clientX-this.pointerStart)>4)return;let d=c.data[0][c.posToIdx(r.clientX-c.over.getBoundingClientRect().left)];d!==void 0&&this.inspect(d)}}}></div>
      ${a?b`<div class="publication-values" aria-label="Valeurs de la publication">
        <div class="publication-date">${o?"Derni\xE8re publication de la fen\xEAtre":"Publication s\xE9lectionn\xE9e"}
          · <time datetime=${new Date(a.time*1e3).toISOString()}>${new Date(a.time*1e3).toLocaleString()}</time>
          ${o?"":b`<button type="button" @click=${()=>{this.inspectable?this.inspect(t.at(-1).time):this.legendTime=null}}>Dernière publication</button>`}</div>
        <dl>${this.curves.map(r=>{let c=this.seriesValue(a,r);return b`<div class=${this.hiddenCurves.has(r.label)?"series-muted":""}>
            <dt><span style=${"background:"+r.color} aria-hidden="true"></span>${r.label}</dt>
            <dd>${c===null?"Absente \xE0 cet instant":c.toLocaleString(void 0,{maximumFractionDigits:3})+" "+r.unit}</dd>
          </div>`})}</dl>
      </div>`:b`<p>Aucune publication dans cette fenêtre.</p>`}
      ${e?b`<details>
            <summary>
              Table de données accessible · ${e} publications
            </summary>
            <div class="table">
              <table>
                <thead>
                  <tr>
                    <th>Date locale</th>
                    ${this.curves.map(r=>b`<th>${r.label} (${r.unit})</th>`)}
                  </tr>
                </thead>
                <tbody>
                  ${this.samples.slice(-200).map(r=>b`<tr>
                        <td>${this.inspectable?b`<button type="button" aria-pressed=${r.time===this.selectedTime}
                              @click=${()=>this.inspect(r.time)}>${new Date(r.time*1e3).toLocaleString()}</button>`:new Date(r.time*1e3).toLocaleString()}</td>
                        ${this.curves.map(c=>b`<td>
                              ${this.seriesValue(r,c)??"Indisponible"}
                            </td>`)}
                      </tr>`)}
                </tbody>
              </table>
            </div>
            <p>
              200 dernières publications maximum dans la table ; courbe
              complète.
            </p>
          </details>`:b`<p>Aucune valeur disponible pour cette fenêtre.</p>`}`}};Xe.styles=[ss(_l),Le`
      :host {
        display: block;
        min-width: 0;
      }
      .publication-values{font-size:12px;margin:8px 0 14px}
      .publication-date{color:var(--secondary-text-color);line-height:1.6}
      .publication-date button{font:inherit;color:var(--primary-text-color);background:transparent;border:1px solid var(--divider-color);border-radius:6px;padding:5px 8px;margin-left:6px;cursor:pointer;min-height:32px}
      dl{display:flex;flex-wrap:wrap;gap:8px 16px;margin:8px 0}
      dl div{display:flex;flex-wrap:wrap;gap:5px;border-bottom:1px solid var(--divider-color);padding:5px 0}
      dt{display:flex;align-items:center;gap:6px;font-weight:600}dd{margin:0;font-variant-numeric:tabular-nums}
      dt span{width:9px;height:9px;display:inline-block;border-radius:50%}.series-muted{opacity:.6}
      h3 {
        font-size: 15px;
        margin: 0 0 12px;
      }
      .series-controls {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 10px;
      }
      .series-controls button {
        font: inherit;
        font-size: 12px;
        color: inherit;
        background: transparent;
        border: 1px solid var(--divider-color);
        border-radius: 5px;
        min-height: 32px;
        padding: 6px 9px;
        cursor: pointer;
      }
      .series-controls button[aria-pressed="false"] {
        text-decoration: line-through;
      }
      .series-controls span {
        display: inline-block;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        margin-right: 6px;
      }
      .plot {
        width: 100%;
        min-width: 0;
      }
      .uplot {
        font-family: inherit;
        color: var(--primary-text-color);
      }
      .u-legend {
        font-size: 12px;
        max-width: 100%;
        white-space: normal;
      }
      .u-value {
        font-variant-numeric: tabular-nums;
      }
      .table {
        max-height: 280px;
        overflow: auto;
      }
      table {
        border-collapse: collapse;
        font-size: 12px;
      }
      td,
      th {
        padding: 8px;
        border-bottom: 1px solid var(--divider-color);
        white-space: nowrap;
      }
      details,
      p {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      summary {
        cursor: pointer;
        padding: 10px 0;
      }
      :focus-visible {
        outline: 2px solid var(--primary-color);
      }
    `],z([G({attribute:!1})],Xe.prototype,"samples",2),z([G({attribute:!1})],Xe.prototype,"curves",2),z([G({attribute:!1})],Xe.prototype,"range",2),z([G()],Xe.prototype,"heading",2),z([G()],Xe.prototype,"syncKey",2),z([G({type:Boolean})],Xe.prototype,"percent",2),z([G({type:Boolean})],Xe.prototype,"inspectable",2),z([G({attribute:!1})],Xe.prototype,"selectedTime",2),z([G({attribute:!1})],Xe.prototype,"marks",2),z([G({type:Boolean})],Xe.prototype,"thermalPhases",2),z([G({type:Boolean})],Xe.prototype,"commandComparison",2),z([ne()],Xe.prototype,"legendTime",2),Xe=z([Fe("smartpi-time-chart")],Xe);var si=class extends xe{constructor(){super(...arguments);this.expert=!1;this.historical=!1}render(){if(!this.diagnostic)return M;let e=new fi(this.diagnostic),t=e.blocks(),[s,a,o,r,c,d,g,f]=t,u=e.route,x=e.directMode,_=e.timingForced,A=e.saturation,T=`${this.diagnostic.entityId}/${x??u}`,w=L=>{this.selected={context:T,id:L}},$=u==="direct"?c:u==="pi"&&(_===!0||A)?d:g,P=(this.selected?.context===T?t.find(L=>L.id===this.selected?.id):void 0)??$,R=x?`Voie directe \xB7 ${x}`:u==="pi"?"Voie PI + anticipation":"Chemin non v\xE9rifi\xE9",ee=x?["PI/FF contourn\xE9s",`SmartPI d\xE9clare une voie directe en ${x.toLocaleLowerCase("fr-FR")}.`]:u!=="pi"?["Motif indisponible","Cette publication ne permet pas de v\xE9rifier le chemin de commande."]:_===!0?["Temporisation impos\xE9e","SmartPI signale une contrainte de dur\xE9e minimale."]:A?[A,"SmartPI publie l\u2019\xE9tat de saturation de la voie PI."]:_===!1?["Temporisation non impos\xE9e","Le drapeau de temporisation impos\xE9e est inactif."]:["Motif indisponible","Cette publication ne renseigne pas la temporisation."],O=u==="pi"&&(_===!0||A!==null),F=u==="direct"?[[c,"D\xE9cision",x,"Voie directe"],[g,"Sortie","Appliqu\xE9e",g.value]]:[[c,"Demande",u==="pi"?"PI + anticipation":"Demand\xE9e",c.value],[d,"Contraintes","Limites et timing",u==="pi"?d.value:"Chemin non v\xE9rifi\xE9"],[g,"Sortie","Appliqu\xE9e",g.value]],Q=u==="pi"?[a,s,o,r,f]:[a,s,f],se=this.diagnostic.lastUpdated,Z=se?new Date(se):null,D=this.diagnostic.available&&Z&&Number.isFinite(Z.valueOf())?b`${this.historical?"Publication archiv\xE9e":"Derni\xE8re mise \xE0 jour du capteur"} : <time datetime=${Z.toISOString()}>${new Intl.DateTimeFormat("fr-FR",{dateStyle:"short",timeStyle:"medium"}).format(Z)}</time>`:"Horodatage des donn\xE9es actuelles indisponible",te=[[20,20],[20,155],[235,20],[235,155],[450,80],[660,80],[660,265],[235,300]];return b`<div class="intro">
        <div>
          <span class="eyebrow">COMPRENDRE LA COMMANDE</span>
          <h3>${this.historical?"Le r\xE9gulateur, \xE0 cette publication":"Le r\xE9gulateur, en direct"}</h3>
        </div>
        <span class="badge route-badge">${R}</span>
      </div>
      <p class="muted stamp">${D}</p>
      <dl class="snapshot">
        <div><dt>Température intérieure</dt><dd>${a.value}</dd><small>Mesure publiée</small></div>
        <div><dt>Consigne filtrée</dt><dd>${s.value}</dd><small>${e.bypass?"Voie P contourn\xE9e":"Voie proportionnelle"}</small></div>
        <div><dt>Commande demandée</dt><dd>${e.bypass?"\u2014":c.value}</dd>
          <small>${e.bypass?"Voie PI contourn\xE9e":"Demande publi\xE9e"}</small></div>
        <div><dt>Commande appliquée</dt><dd>${g.value}</dd><small>Signal de commande</small></div>
      </dl>
      <div class="work">
      <section class="route" aria-labelledby="route-title">
        <h4 id="route-title">Chemin de commande</h4>
        <div class="note ${O?"warning":""}">
          <strong>${ee[0]}</strong><p>${ee[1]}</p>
        </div>
        <ol class="steps">
          ${F.map(([L,Y,U,ae],B)=>b`<li>
            ${B>0&&u!=="unavailable"?b`<span class="arrow" aria-hidden="true">→</span>`:M}
            <button type="button" class="step" data-block=${L.id} aria-pressed=${L.id===P.id}
              aria-controls="signal-inspector" @click=${()=>w(L.id)}>
              <small>${Y}</small><strong>${U}</strong><span>${ae}</span>
            </button></li>`)}
        </ol>
        <div class="quick-blocks" role="group" aria-label="Signaux associés">
          ${Q.map(L=>b`<button type="button" aria-pressed=${L.id===P.id}
            aria-controls="signal-inspector" @click=${()=>w(L.id)}>${L.id==="ff"?"Anticipation":L.title}</button>`)}
        </div>
      </section>
      <aside id="signal-inspector" aria-labelledby="signal-title">
        <span class="eyebrow">INSPECTION DU SIGNAL</span>
        <h4 id="signal-title" aria-live="polite">${P.title} <span class="badge">${P.status}</span></h4>
        <p>${P.explanation}</p>
        <dl>
          <div><dt>Valeur du bloc</dt><dd>${P.value}</dd>
            ${this.expert?b`<code>attributes.live.${P.path}</code>`:null}</div>
          <div><dt>Motif ou contexte publié</dt><dd>${P.reason}</dd>
            ${this.expert?b`<code>attributes.live.${P.reasonPath}</code>`:null}</div>
          ${e.detail(P,this.expert).map(L=>b`<div>
            <dt>${L.label}</dt><dd>${L.value}</dd>
            ${this.expert?b`<code>attributes.live.${L.path}</code>${L.reliability?b`<code>Fiabilité · ${L.reliability}</code>`:null}`:null}
          </div>`)}
        </dl>
        ${P.status==="Contourn\xE9"?b`<p class="muted">Ces valeurs décrivent un bloc hors du chemin actif.</p>`:M}
      </aside>
      </div>
      <details class="full">
        <summary>Schéma complet de la boucle</summary>
        <p class="muted">Les flèches pleines montrent le chemin déclaré. Les pointillés représentent le retour de la mesure.</p>
      <div class="diagram">
        <svg
          viewBox="0 0 880 415"
          aria-label="Schéma logique de SmartPI"
          role="group"
        >
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
            </marker>
          </defs>
          ${e.route==="pi"?ze`<path class="flow" d="M205 65 H235"/><path class="flow" d="M205 195 H220 V95 H235"/><path class="flow" d="M420 65 H435 V115 H450"/><path class="flow" d="M420 195 H435 V145 H450"/>`:e.bypass?ze`<path class="flow bypass" d="M635 125 H647 V310 H660"/>`:null}
          ${e.route==="pi"?ze`<path class="flow" d="M635 125 H660"/><path class="flow" d="M752 170 V265"/>`:null}
          ${u!=="unavailable"?ze`<path class="flow feedback" d="M660 315 H420" />
            <path class="flow feedback" d="M235 345 H110 V245" />`:M}
          ${t.map((L,Y)=>ze`<g role="button" tabindex="0" aria-pressed=${L.id===P.id} aria-label=${`${L.title} : ${L.value}. ${L.status}`} class=${"block "+(L.id===P.id?"selected":"")+(L.status==="Contourn\xE9"?" inactive":"")} transform=${`translate(${te[Y][0]},${te[Y][1]})`} @click=${()=>w(L.id)} @keydown=${U=>{(U.key==="Enter"||U.key===" ")&&(U.preventDefault(),w(L.id))}}>
          <title>${L.explanation}</title><rect width="185" height="90" rx="10"/><text x="13" y="23" class="title">${L.title}</text><text x="13" y="50" class="value">${L.value}</text><text x="13" y="73" class="status">${L.status}</text>
        </g>`)}
        </svg>
      </div>
      <div class="mobile">
        ${t.map(L=>b`<button
              type="button"
              aria-pressed=${L.id===P.id}
              @click=${()=>w(L.id)}
            >
              ${L.title}<strong>${L.value}</strong><small>${L.status}</small>
            </button>`)}
      </div>
      </details>`}};si.styles=Le`
    :host {
      display: block;
    }
    h3 {
      font-size: 20px;
      margin: 5px 0;
    }
    h4 {
      margin: 0;
    }
    p {
      line-height: 1.6;
      font-size: 13px;
    }
    .intro {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }
    .eyebrow {
      font-size: 10px;
      letter-spacing: 0.12em;
      color: var(--secondary-text-color);
    }
    .badge {
      display: inline-block;
      font-size: 11px;
      border: 1px solid var(--divider-color);
      padding: 5px 9px;
      border-radius: 20px;
    }
    .muted {
      color: var(--secondary-text-color);
    }
    .route-badge {
      font-weight: 650;
      background: var(--secondary-background-color);
    }
    .stamp { margin: 6px 0 16px; }
    .snapshot {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0;
      border-block: 1px solid var(--divider-color);
      background: var(--secondary-background-color);
      margin: 0;
    }
    .snapshot > div { padding: 12px 14px; border: 0; }
    .snapshot > div + div { border-left: 1px solid var(--divider-color); }
    .snapshot dd {
      font-size: clamp(16px, 2vw, 24px);
      font-variant-numeric: tabular-nums;
    }
    .snapshot small, .step small, .step > span { color: var(--secondary-text-color); }
    .work { display: grid; grid-template-columns: minmax(0, 3fr) minmax(0, 2fr); }
    .route, aside { min-width: 0; padding: 16px; }
    .note {
      border-inline-start: 3px solid var(--primary-color);
      background: var(--secondary-background-color);
      padding: 8px 12px;
      margin: 12px 0;
    }
    .note.warning { border-inline-start-color: var(--warning-color, #ce8d2c); }
    .note strong, .note p { margin: 0; }
    .steps {
      display: flex;
      gap: 6px;
      list-style: none;
      padding: 0;
      margin: 12px 0;
    }
    .steps li {
      display: flex;
      align-items: center;
      gap: 6px;
      flex: 1 1 0;
      min-width: 0;
    }
    .arrow { color: var(--primary-text-color); }
    .step { flex: 1; align-self: stretch; min-width: 0; overflow-wrap: anywhere; }
    .step small { margin-top: 0; }
    .step > span { display: block; margin-top: 3px; font-size: 12px; }
    .quick-blocks { display: flex; flex-wrap: wrap; gap: 6px; }
    .quick-blocks button { min-height: 44px; padding: 7px 10px; font-size: 12px; }
    .full { border-top: 1px solid var(--divider-color); }
    summary { cursor: pointer; min-height: 44px; box-sizing: border-box; padding: 12px 0; }
    svg {
      width: 100%;
      display: block;
    }
    .flow {
      fill: none;
      stroke: var(--primary-color);
      stroke-width: 2;
      marker-end: url(#arrow);
    }
    .bypass {
      stroke: var(--warning-color, #ce8d2c);
    }
    .feedback {
      stroke: var(--secondary-text-color);
      stroke-dasharray: 4 4;
    }
    .block {
      cursor: pointer;
      color: var(--primary-text-color);
    }
    .block rect {
      fill: var(--card-background-color);
      stroke: var(--divider-color);
      stroke-width: 1.5;
    }
    .block.selected rect {
      stroke: var(--primary-color);
      stroke-width: 3;
    }
    .block:focus rect {
      stroke: var(--primary-color);
      stroke-width: 3;
    }
    .block.inactive {
      opacity: 0.5;
    }
    text {
      fill: var(--primary-text-color);
      font-family: inherit;
    }
    .title {
      font-size: 12px;
    }
    .value {
      font-size: 19px;
      font-weight: 600;
    }
    .status {
      font-size: 10px;
      fill: var(--secondary-text-color);
    }
    aside {
      background: var(--secondary-background-color);
      border-left: 1px solid var(--divider-color);
      min-height: 120px;
    }
    code {
      display: block;
      font-size: 11px;
      overflow-wrap: anywhere;
    }
    dl {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 13rem), 1fr));
      gap: 12px 18px;
      margin: 14px 0 0;
    }
    dl > div {
      border-top: 1px solid var(--divider-color);
      padding-top: 7px;
      overflow-wrap: anywhere;
    }
    dt { color: var(--secondary-text-color); font-size: 12px; }
    dd { margin: 3px 0; font-weight: 600; }
    .mobile {
      display: none;
    }
    button {
      font: inherit;
      background: var(--card-background-color);
      color: inherit;
      border: 1px solid var(--divider-color);
      padding: 12px;
      border-radius: 8px;
      text-align: left;
      min-height: 80px;
      cursor: pointer;
    }
    button[aria-pressed="true"] {
      border-color: var(--primary-color);
      box-shadow: inset 0 0 0 1px var(--primary-color);
    }
    strong,
    small {
      display: block;
      margin-top: 6px;
    }
    :focus-visible {
      outline: 3px solid var(--primary-color);
      outline-offset: 2px;
    }
    @media (max-width: 920px) {
      .work { grid-template-columns: 1fr; }
      aside { border-left: 0; border-top: 1px solid var(--divider-color); }
    }
    @media (max-width: 600px) {
      .diagram {
        display: none;
      }
      .mobile {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        margin: 16px 0;
      }
      .intro {
        align-items: flex-start;
      }
      .snapshot { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .snapshot > div:nth-child(3) { border-left: 0; }
      .snapshot > div:nth-child(n + 3) { border-top: 1px solid var(--divider-color); }
      .route, aside { padding: 14px 0; }
      aside { padding-inline: 12px; }
      .step { padding: 7px 5px; font-size: 12px; }
    }
  `,z([G({attribute:!1})],si.prototype,"diagnostic",2),z([G({type:Boolean})],si.prototype,"expert",2),z([G({type:Boolean})],si.prototype,"historical",2),z([ne()],si.prototype,"selected",2),si=z([Fe("smartpi-control-diagram")],si);var wn=class extends xe{render(){if(!this.diagnostic)return b``;let i=new fi(this.diagnostic),e=i.chain(),t=Math.max(100,...e.map(s=>Math.abs(s.value??0)));return b`<h3>Chaîne U <span>Instantané · % de commande</span></h3>
      <p>
        ${i.bypass?"Chemin direct actif : ces contributions PI/FF ne construisent pas la commande appliqu\xE9e.":"FF final = clamp(FF1 + FF2), puis FF effectif = clamp(FF final + FF3). En bande morte, FF final est retenu sans FF3 ; ailleurs FF effectif est retenu. PI et FF retenu pr\xE9c\xE8dent les limites ; Hold est un \xE9tat de maintien, pas une contribution \xE0 additionner."}
      </p>
      ${e.map(s=>b`<div class="row">
            <span title=${"attributes.live."+s.path}>${s.label}</span>
            <div class="track">
              <i></i>${s.value===null?null:b`<b
                    style=${`left:${s.value<0?50+s.value/t*50:50}%;width:${Math.abs(s.value)/t*50}%`}
                    class=${s.value<0?"negative":""}
                  ></b>`}
            </div>
            <strong>${C(s.value," %",2)}</strong>
          </div>`)}
      <p>
        Ces diagnostics peuvent décrire un candidat et un cycle déjà engagé.
        Leurs différences ne sont pas une preuve de perte ni de limitation.
      </p>
      <p>
        Échelle symétrique ±${C(t," %")} ; aucune composante hors 0–100
        % n’est tronquée. Ratios FF convertis ×100 pour cette vue.
      </p>
      <p>
        Raison FF2 :
        ${C(k(this.diagnostic.live,"analysis.feedforward.ff2_freeze_reason"))}
        · FF3 : ${C(k(this.diagnostic.live,"feedforward.ff3_status"))} ·
        Intégrale :
        ${C(k(this.diagnostic.live,"temperature.integral_mode"))}
      </p>
      ${k(this.diagnostic.live,"power.valve_linearization_enabled")===!0?b`<p>
            Courbe de vanne active : les espaces linéaire et actionneur
            diffèrent. Aucun écart causal n’est calculé entre ces étapes.
          </p>`:null}`}};wn.styles=Le`
    :host {
      display: block;
    }
    h3 {
      font-size: 18px;
    }
    h3 span,
    p {
      font-size: 12px;
      color: var(--secondary-text-color);
      line-height: 1.6;
    }
    h3 span {
      font-weight: 400;
      margin-left: 10px;
    }
    .row {
      display: grid;
      grid-template-columns: 100px 1fr 110px;
      gap: 12px;
      align-items: center;
      margin: 13px 0;
      font-size: 13px;
    }
    .track {
      height: 9px;
      position: relative;
      background: var(--divider-color);
      border-radius: 3px;
    }
    .track i {
      position: absolute;
      left: 50%;
      height: 15px;
      top: -3px;
      border-left: 1px solid var(--secondary-text-color);
    }
    b {
      position: absolute;
      top: 0;
      height: 9px;
      background: #3587c4;
      border-radius: 3px;
    }
    b.negative {
      background: #cb7f32;
    }
    strong {
      text-align: right;
      font-variant-numeric: tabular-nums;
    }
    @media (max-width: 500px) {
      .row {
        grid-template-columns: 75px 1fr 90px;
        font-size: 12px;
        gap: 6px;
      }
    }
  `,z([G({attribute:!1})],wn.prototype,"diagnostic",2),wn=z([Fe("smartpi-command-chain")],wn);var _n=n=>Math.abs(n)>=1e4||n!==0&&Math.abs(n)<1e-4?n.toExponential(2):n.toLocaleString("fr-FR",{maximumFractionDigits:6}),kl=(n,i)=>{let e=Math.max(3,Math.min(10,Math.ceil(Math.log10(Math.abs(n/i)||1))+1));return Math.abs(n)>=1e4||n!==0&&Math.abs(n)<.001?n.toExponential(e-1):n.toLocaleString("fr-FR",{maximumSignificantDigits:e})},Hi=n=>new Date(n*1e3).toLocaleString("fr-FR"),wt=class extends xe{constructor(){super(...arguments);this.samples=[];this.kind="scatter";this.source="";this.contextId="";this.inspectable=!1;this.selected=-1;this.page=0;this.plotWidth=720;this.projection=new qi([],"scatter")}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(e=>{let t=Math.max(240,Math.round(e[0].contentRect.width));t!==this.plotWidth&&(this.plotWidth=t)}),this.observer.observe(this)}disconnectedCallback(){this.observer?.disconnect(),this.observer=void 0,super.disconnectedCallback()}willUpdate(e){if(e.has("samples")||e.has("kind")){let t=this.projection.points[this.selected]?.time;this.projection=new qi(this.samples,this.kind),this.selected=this.projection.points.findIndex(s=>s.time===t),this.page=Math.min(this.page,Math.max(0,Math.ceil(this.projection.points.length/25)-1))}e.has("contextId")&&(this.selected=-1,this.page=0)}select(e){let t=this.projection.points;this.selected=Math.max(0,Math.min(t.length-1,e));let s=t[this.selected];s&&this.inspectable&&this.dispatchEvent(new CustomEvent("inspect-publication",{detail:s.time,bubbles:!0,composed:!0}))}bounds(e,t=!1){let s=Math.min(...e),a=Math.max(...e);t&&(s=Math.min(0,s),a=Math.max(0,a));let o=a-s,r=o?o*.08:Math.abs(s)>0?Math.abs(s)*.05:.001;return[Number.isFinite(s-r)?s-r:s,Number.isFinite(a+r)?a+r:a]}coordinates(){let e=this.projection.points,t=this.bounds(e.map(o=>o.x),this.kind==="scatter"),s=this.kind==="scatter"?[0,100]:this.bounds(e.map(o=>o.y)),a=(o,r)=>{let c=Math.max(Math.abs(r[0]),Math.abs(r[1]),Number.MIN_VALUE),d=r[0]/c,g=r[1]/c;return g===d?.5:(o/c-d)/(g-d)};return{xr:t,yr:s,x:o=>78+a(o,t)*(this.plotWidth-102),y:o=>240-a(o,s)*202}}clickPlot(e){let t=e.currentTarget,s=t.getScreenCTM();if(!s)return;let{x:a,y:o}=new DOMPoint(e.clientX,e.clientY).matrixTransform(s.inverse()),{x:r,y:c}=this.coordinates(),d=0,g=1/0;this.projection.points.forEach((f,u)=>{let x=(r(f.x)-a)**2+(c(f.y)-o)**2;x<g&&(g=x,d=u)}),this.select(d)}render(){let e=this.kind==="model",t=this.projection,s=t.points,a=e?"Parcours des coefficients A/B":"\xC9cart filtr\xE9 et commande appliqu\xE9e",o=e?"A publi\xE9 (\xB0C/min/u)":"Consigne filtr\xE9e \u2212 mesure (\xB0C)",r=e?"B publi\xE9 (min\u207B\xB9)":"Commande appliqu\xE9e (%)",c=this.selected<0?s.length-1:Math.min(this.selected,s.length-1),d=s[c],{x:g,y:f,xr:u,yr:x}=s.length?this.coordinates():{x:T=>0,y:T=>0,xr:[0,1],yr:[0,1]},_=[];if(e){let T=-1;for(let w of s)T!==w.segment?(_.push(`M ${g(w.x)} ${f(w.y)}`),T=w.segment):_[_.length-1]+=` L ${g(w.x)} ${f(w.y)}`}let A=this.plotWidth<500?[0,.5,1]:[0,.25,.5,.75,1];return b`<section aria-labelledby="projection-title">
      <h3 id="projection-title">${a}</h3>
      <p class="source">${this.source} · ${t.valid} / ${t.total} publications couplées</p>
      ${s.length?b`
        <p class="axis-label">${r}</p>
        <svg viewBox=${`0 0 ${this.plotWidth} 292`} role="img" aria-label=${`${a}. ${s.length} points affich\xE9s. ${o} ; ${r}. La s\xE9lection est accessible avec les contr\xF4les Publication.`} @click=${this.clickPlot}>
          ${A.map(T=>{let w=240-T*202;return ze`<line x1="78" x2=${this.plotWidth-24} y1=${w} y2=${w} class="grid"/><text x="65" y=${w+5} text-anchor="end">${kl(x[0]*(1-T)+x[1]*T,(x[1]-x[0])/(A.length-1))}</text>`})}
          <line x1="78" x2=${this.plotWidth-24} y1="240" y2="240" class="axis"/><line x1="78" x2="78" y1="38" y2="240" class="axis"/>
          ${A.map(T=>ze`<text x=${78+T*(this.plotWidth-102)} y="267" text-anchor="middle">${kl(u[0]*(1-T)+u[1]*T,(u[1]-u[0])/(A.length-1))}</text>`)}
          ${e?M:ze`<line x1=${g(0)} x2=${g(0)} y1="38" y2="240" class="zero"/>`}
          ${_.map(T=>ze`<path class="trajectory" d=${T}/>`)}
          ${s.map((T,w)=>ze`<circle cx=${g(T.x)} cy=${f(T.y)} r=${w===c?6:3} class=${w===c?"selected-point":e&&w===0?"first-point":"point"}/>`)}
          ${e?ze`<text x=${g(s.at(-1).x)+8} y=${f(s.at(-1).y)-10}>${s.length===1?"Unique":s[0].x===s.at(-1).x&&s[0].y===s.at(-1).y?"D\xE9but / fin":"Fin"}</text>`:M}
        </svg>
        <p class="axis-label x-label">${o}</p>
        ${e?b`<p class="legend"><span>○ Premier couple affiché · ${Hi(s[0].time)}</span><span>Dernier couple · ${Hi(s.at(-1).lastTime)}</span></p>`:M}
        <div class="selection-controls"><button type="button" aria-label=${`Publication pr\xE9c\xE9dente \xB7 ${a}`} ?disabled=${c<=0} @click=${()=>this.select(c-1)}>←</button>
          <label>Publication <input type="range" min="0" max=${s.length-1} step="1" .value=${String(c)} aria-label=${`Publication \xB7 ${a}`} aria-valuetext=${d?`${Hi(d.time)} ; ${_n(d.x)}, ${_n(d.y)}`:""} @input=${T=>this.select(Number(T.currentTarget.value))}></label>
          <button type="button" aria-label=${`Publication suivante \xB7 ${a}`} ?disabled=${c>=s.length-1} @click=${()=>this.select(c+1)}>→</button></div>
        <p class="selection" role="status">${d?b`${Hi(d.time)}${d.observedAt?" (heure d\u2019observation)":""} · ${e?"A":"\xC9cart"} ${_n(d.x)} · ${e?"B":"Appliqu\xE9e"} ${_n(d.y)}${e?b` · ${d.publications} publication(s)${d.lastTime!==d.time?b` jusqu’au ${Hi(d.lastTime)}`:M}`:" %"}`:M}</p>
        <details><summary>Table des points affichés (${s.length})</summary>
          <div class="table-wrap"><table><caption>${a} · points affichés</caption><thead><tr><th>Date</th><th>${o}</th><th>${r}</th>${e?b`<th>Publications regroupées</th>`:M}</tr></thead><tbody>
            ${s.slice(this.page*25,(this.page+1)*25).map(T=>b`<tr><td><button type="button" @click=${()=>this.select(s.indexOf(T))}>${Hi(T.time)}${T.observedAt?" (observation)":""}</button>${T.lastTime!==T.time?b` → ${Hi(T.lastTime)}`:M}</td><td>${_n(T.x)}</td><td>${_n(T.y)}</td>${e?b`<td>${T.publications}</td>`:M}</tr>`)}
          </tbody></table></div>
          <div class="pages"><button type="button" ?disabled=${this.page===0} @click=${()=>--this.page}>Page précédente</button><span>${this.page+1} / ${Math.ceil(s.length/25)}</span><button type="button" ?disabled=${(this.page+1)*25>=s.length} @click=${()=>++this.page}>Page suivante</button></div>
        </details>`:b`<p class="empty">Aucun couple ${e?"A/B":"\xE9cart / commande"} exploitable dans cette source et cette fenêtre.</p>`}
      ${t.reduced?b`<p class="notice">${e?"600 derniers couples distincts affich\xE9s":"600 publications r\xE9parties dans la fen\xEAtre pour le dessin"} sur ${t.distinct}. Zoomez pour examiner une période plus courte. La sélection et la table portent sur ces points affichés.</p>`:M}
      <p class="foot">${e?"Les couples identiques successifs sont regroup\xE9s. Les traits suivent les publications, coup\xE9s aux donn\xE9es manquantes et interruptions sup\xE9rieures \xE0 10 min. Une variation ne prouve pas un apprentissage accept\xE9 ; la confiance actuelle ne valide pas le pass\xE9.":"Chaque point associe deux valeurs de la m\xEAme publication. Le nombre de points ne repr\xE9sente pas une dur\xE9e ; cet \xE9cart filtr\xE9 n\u2019est ni l\u2019erreur de l\u2019int\xE9grateur ni une mesure de confort. Aucun ajustement de courbe n\u2019est calcul\xE9."}</p>
    </section>`}};wt.styles=Le`
    :host{display:block;color:var(--primary-text-color,#192b31);min-width:0;--plot:#176b8c;--selected:#984d14}*{box-sizing:border-box}h3{margin:0 0 8px;font-size:16px}.source,.axis-label,.foot,.legend{font-size:12px;color:var(--secondary-text-color,#526268);line-height:1.6}.axis-label{margin:10px 0 0}.x-label{text-align:center;margin:0}.legend{display:flex;flex-wrap:wrap;gap:8px 18px}svg{display:block;width:100%;height:auto;max-height:340px;cursor:crosshair;overflow:visible}svg text{font:14px sans-serif;fill:var(--secondary-text-color,#526268)}.grid,.axis{stroke:var(--divider-color,#c6d0d4);stroke-width:1}.zero{stroke:var(--secondary-text-color,#526268);stroke-dasharray:4 5;opacity:.6}.point{fill:var(--plot);opacity:.55}.first-point{fill:none;stroke:var(--plot);stroke-width:2}.trajectory{fill:none;stroke:var(--plot);stroke-width:1.5;opacity:.55}.selected-point{fill:var(--selected);stroke:var(--card-background-color,#fff);stroke-width:2}.selection-controls{display:flex;align-items:center;gap:12px;margin-top:14px}.selection-controls label{flex:1;font-size:12px}.selection-controls input{display:block;width:100%;min-height:44px;accent-color:var(--plot)}button{font:inherit;color:inherit;background:var(--card-background-color,#fff);border:1px solid var(--divider-color,#b5c0c4);border-radius:7px;min-width:44px;min-height:44px;padding:8px 12px;cursor:pointer}button:disabled{opacity:.5;cursor:default}button:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid var(--primary-color,#167883);outline-offset:3px}.selection,.notice,.empty{font-size:13px;line-height:1.6;overflow-wrap:anywhere}.selection{font-variant-numeric:tabular-nums}.pages{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;flex-wrap:wrap}.table-wrap{overflow:auto;max-width:100%}table{border-collapse:collapse;width:100%;font-size:12px}th,td{text-align:left;padding:8px;border-bottom:1px solid var(--divider-color,#d2dbdd)}caption{text-align:left;padding:10px 0}summary{min-height:44px;padding:12px 0;font-size:13px;cursor:pointer}@media(max-width:520px){svg text{font-size:11px}.selection-controls{gap:7px}}@media(prefers-color-scheme:dark){:host{--plot:#80c8e6;--selected:#efb278}}
  `,z([G({attribute:!1})],wt.prototype,"samples",2),z([G()],wt.prototype,"kind",2),z([G()],wt.prototype,"source",2),z([G()],wt.prototype,"contextId",2),z([G({type:Boolean})],wt.prototype,"inspectable",2),z([ne()],wt.prototype,"selected",2),z([ne()],wt.prototype,"page",2),z([ne()],wt.prototype,"plotWidth",2),wt=z([Fe("smartpi-diagnostic-projection")],wt);var Sl=[{label:"Int\xE9rieure mesur\xE9e",path:"temperature.indoor",color:"#2689ca",unit:"\xB0C"},{label:"Consigne filtr\xE9e",path:"setpoint.filtered_setpoint",color:"#d6892e",unit:"\xB0C",step:!0}],Wr=Sl.map(n=>n.step?{...n,dash:[6,4]}:n),kd=["A","B","Chauffe","Refroidissement"],Ps=[{label:"Appliqu\xE9e",path:"power.applied_percent",color:"#2689ca",unit:"%",step:!0},{label:"Demand\xE9e",path:"power.command_percent",color:"#d6892e",unit:"%",step:!0},{label:"PI",path:"power.pi_percent",color:"#9d78bd",unit:"%",step:!0},{label:"FF",path:"power.ff_percent",color:"#39a38a",unit:"%",step:!0}],Sd=new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2,signDisplay:"exceptZero"}),Re=class extends xe{constructor(){super(...arguments);this.session=[];this.tab="evolution";this.hiddenLearning=[];this.expert=!1;this.hours=24;this.end=Date.now()/1e3;this.range=[this.end-86400,this.end];this.recorder=[];this.loading=!1;this.error="";this.preferSession=!1;this.followNow=!0;this.replay=!1;this.livePublicationMissing=!1;this.generation=0;this.recorderEntity=""}async inspectBlock(e){this.block=e,e!=="model"&&this.renderRoot.querySelector(".command-chart smartpi-time-chart")?.showCurve(`power.${e}_percent`),await this.updateComplete,this.renderRoot.querySelector("#block-title")?.focus()}inspect(e){this.diagnostic&&(this.livePublicationMissing=!1,this.followNow=!1,this.inspection={entityId:this.diagnostic.entityId,recorder:this.usingRecorder,time:e})}async inspectEvent(e){this.inspect(e),await this.updateComplete,this.renderRoot.querySelector("#inspection-title")?.focus()}async openLivePublication(){let e=qt(this.diagnostic?.lastUpdated),t=this.usingRecorder?this.recorder:this.session,s=this.diagnostic?.available&&e!==null?this.windowData(t).samples.find(a=>!a.observedAt&&a.time===e):void 0;this.tab="evolution",this.inspection=void 0,this.livePublicationMissing=!s,s&&this.inspect(s.time),await this.updateComplete,this.renderRoot.querySelector("#inspection-title")?.focus()}get usingRecorder(){return this.recorderEntity===this.diagnostic?.entityId&&!this.preferSession&&fr(this.recorder)}willUpdate(e){if(this.followNow&&!this.usingRecorder&&(e.has("session")||e.has("preferSession")||e.has("recorder"))){let t=this.session.at(-1)?.time;t!==void 0&&t>this.range[1]&&(this.end=t,this.range=[t-this.hours*3600,t])}}windowData(e){if(this.filteredCache?.all===e&&this.filteredCache.start===this.range[0]&&this.filteredCache.end===this.range[1])return this.filteredCache;let t=e.filter(s=>s.time>=this.range[0]&&s.time<=this.range[1]);return this.filteredCache={all:e,start:this.range[0],end:this.range[1],samples:t,tracking:Va(t),events:Wa(e).filter(s=>s.time>=this.range[0]&&s.time<=this.range[1])}}updated(e){let t=e.get("diagnostic");e.has("diagnostic")&&t?.entityId!==this.diagnostic?.entityId&&(this.recorder=[],this.preferSession=!1,this.livePublicationMissing=!1,this.reset(),this.load())}disconnectedCallback(){++this.generation,this.filteredCache=void 0,this.recorder=[],this.session=[],this.loading=!1,super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.load()}reset(){this.followNow=!0,this.end=Date.now()/1e3,this.range=[this.end-this.hours*3600,this.end]}shift(e){this.followNow=!1;let t=this.range[1]-this.range[0],s=Date.now()/1e3,a=this.end-48*3600,o=Math.min(s,Math.max(a+t,this.range[1]+e*t/2));this.range=[o-t,o]}zoom(e){this.followNow=!1;let[t,s]=this.range,a=Math.max(60,Math.min(48*3600,(s-t)*e));this.range=[s-a,s]}async load(){this.inspection=void 0,this.livePublicationMissing=!1;let e=++this.generation,t=this.diagnostic;if(this.loading=!0,this.error="",this.recorder=[],!t||!this.hass?.callWS){this.error="Lecture Recorder non disponible dans cette connexion. Historique de session utilis\xE9.",this.loading=!1;return}try{let s=Date.now()/1e3,a=await Ka(this.hass,t.entityId,s-48*3600,s,()=>e!==this.generation);if(e!==this.generation)return;this.recorderEntity=t.entityId,this.recorder=a,fr(a)||(this.error="Recorder ne fournit aucune s\xE9rie v2 exploitable. Historique de session utilis\xE9.")}catch(s){if(e!==this.generation)return;this.error=s instanceof Error&&s.message.startsWith("Format")?s.message:"Lecture Recorder refus\xE9e ou impossible. Historique de session utilis\xE9 ; v\xE9rifier les droits et Recorder."}finally{e===this.generation&&(this.loading=!1)}}trackingPanel(e,t){let{pairs:s,signedMedian:a,absoluteMedian:o,largestInterval:r}=e;return b`<section class="pane tracking" aria-labelledby="tracking-heading">
      <div class="tracking-title">
        <h3 id="tracking-heading">Écart à la consigne filtrée</h3>
        <span>Consigne filtrée − température intérieure</span>
      </div>
      <dl class="metrics">
        <div><dt>Couples valides</dt><dd>${s} / ${t}</dd></div>
        <div><dt>Médiane signée</dt><dd>${a===null?"Indisponible":`${Sd.format(a)} \xB0C`}</dd></div>
        <div><dt>Médiane absolue</dt><dd>${C(o," \xB0C")}</dd></div>
        <div><dt>Plus long intervalle entre couples</dt><dd>${C(r===null?null:r/60," min",1)}</dd></div>
      </dl>
      <p>${s<2?"Deux couples valides dans la fen\xEAtre sont n\xE9cessaires pour r\xE9sumer l\u2019\xE9cart.":"Un \xE9cart positif indique une temp\xE9rature sous la consigne filtr\xE9e. La m\xE9diane absolue indique la taille typique de l\u2019\xE9cart observ\xE9."}</p>
      <details>
        <summary>Méthode et limites</summary>
        <p>Chaque couple provient d’une même publication et compte une fois, indépendamment de l’intervalle entre les points. Les publications incomplètes sont exclues des médianes. Le plus long intervalle décrit l’espacement des couples valides.</p>
        <p>Ces valeurs décrivent les publications de la source et de la fenêtre affichées. L’évaluation d’une durée de confort ou d’une réponse à un changement de consigne demande des données et un protocole adaptés.</p>
      </details>
    </section>`}inspectionPanel(e,t,s){let a=t?{...e,state:t.state,available:t.state!=="unknown"&&t.state!=="unavailable",live:t.live,history:t.history,lastUpdated:new Date(t.time*1e3).toISOString(),climateId:null,temperatureUnit:t.unit??null}:e,o=new fi(a).route,r=t?s?"Recorder":"Session":"Instantan\xE9 SmartPI",c=t?new Date(t.time*1e3):e.lastUpdated?new Date(e.lastUpdated):null,d=($,P="")=>$==null&&t&&a.available?"Non archiv\xE9":C($,P.replace("\xB0C",t?t.unit??"unit\xE9 source":e.temperatureUnit??"unit\xE9 source")),g=[["Temp\xE9rature int\xE9rieure mesur\xE9e","temperature.indoor"," \xB0C"],["Consigne filtr\xE9e","setpoint.filtered_setpoint"," \xB0C"],["Commande demand\xE9e","power.command_percent"," %"],["Commande appliqu\xE9e","power.applied_percent"," %"]],f=this.block,u=($,P)=>b`<button type="button" aria-pressed=${f===$} aria-controls="block-detail"
        @click=${()=>void this.inspectBlock($)}>${P}</button>`,x=o==="direct"?["Consigne et mesure","Hyst\xE9r\xE9sis ou calibration","Commande publi\xE9e","Pi\xE8ce"]:["Consigne et mesure",b`<span>Voies P et I</span> → ${u("pi","PI")}`,b`+ ${u("ff","Anticipation")}`,"Limites et temporisation","Commande publi\xE9e","Pi\xE8ce"],_={pi:[["Contribution PI","power.pi_percent"," %"]],ff:[["Anticipation retenue","power.ff_percent"," %"]],model:[["Gain thermique estim\xE9 A","model.a"," \xB0C/min/u"],["Pertes estim\xE9es B","model.b"," min\u207B\xB9"]]},A="analysis.twin.twin_T_steady",T=k(a.live,A)==null?d(void 0):C(ot(a.live,A,"analysis.twin.twin_T_steady_reliable")," \xB0C"),w=t?{...a,live:{...t.live,temperature:{...t.live.temperature??{},indoor:me(t,"temperature.indoor")},setpoint:{...t.live.setpoint??{},filtered_setpoint:me(t,"setpoint.filtered_setpoint")},power:{...t.live.power??{},applied_percent:me(t,"power.applied_percent"),command_percent:me(t,"power.command_percent"),pi_percent:me(t,"power.pi_percent"),ff_percent:me(t,"power.ff_percent")},model:{...t.live.model??{},a:me(t,"model.a"),b:me(t,"model.b")}}}:null;return b`${t?b`<section class="replay-bar">
      <strong>Historique · ${r} · ${c?.toLocaleString()}</strong>
      <label>Parcourir les publications <input aria-label="Publication historique" type="range" min="0" max=${Math.max(0,this.windowData(s?this.recorder:this.session).samples.length-1)}
        .value=${String(this.windowData(s?this.recorder:this.session).samples.findIndex($=>$.time===t.time))}
        @input=${$=>{let P=this.windowData(s?this.recorder:this.session).samples[Number($.target.value)];P&&this.inspect(P.time)}}></label>
      <button type="button" aria-pressed=${this.replay} @click=${()=>{this.replay=!this.replay}}>Schéma de cette publication</button>
      <p>Uniquement les champs archivés. Consigne normale, fenêtre et mode HVAC non déduits de l’état actuel.</p>
      ${this.replay&&w?b`<smartpi-control-diagram .historical=${!0} .diagnostic=${w} .expert=${this.expert}></smartpi-control-diagram>`:M}
    </section>`:M}<section class="synoptic" aria-labelledby="synoptic-title">
        <h3 id="synoptic-title">Synoptique de régulation</h3>
        <ol class="signal-path" aria-label=${o==="unavailable"?"Sch\xE9ma de r\xE9f\xE9rence":"Voie d\xE9clar\xE9e"}>
          ${x.map(($,P)=>b`<li class=${o==="unavailable"?"":"active-path"}>
            ${P?b`<span aria-hidden="true">${P===2&&o!=="direct"?"":"\u2192"}</span>`:M}
            ${$}</li>`)}
        </ol>
        <p>${o==="pi"?"Voie PI active":o==="direct"?"Voie directe d\xE9clar\xE9e":"Chemin actif non v\xE9rifi\xE9"}</p>
        <p>↶ Retour de la mesure · ${u("model","Mod\xE8le thermique")}</p>
      </section>
      <aside class="publication" aria-labelledby="inspection-title">
        <h3 id="inspection-title" tabindex="-1">${t?"Publication s\xE9lectionn\xE9e":"En direct"}</h3>
        <p role="status" class="inspection-status">
          ${r} · ${t?.observedAt?"Observation de session":"Publication"} ·
          ${c&&Number.isFinite(c.valueOf())?b`<time datetime=${c.toISOString()}>${c.toLocaleString()}</time>`:"Horodatage indisponible"}
        </p>
        <dl>
          <dt>État publié</dt><dd>${a.state}</dd>
          ${g.map(([$,P,R])=>b`<dt>${$}</dt>
            <dd>${d(t?me(t,P):k(e.live,P),R)}</dd>`)}
          ${t?b`<dt>Écart à la consigne filtrée</dt><dd>${d(me(t,"error")," \xB0C")}</dd>`:M}
          <dt>État de l’intégrale</dt><dd>${d(k(a.live,"temperature.integral_mode"))}</dd>
          <dt>Saturation déclarée</dt><dd>${d(k(a.live,"control.saturation_state"))}</dd>
          <dt>Limitation par temporisation</dt><dd>${d(k(a.live,"analysis.control.forced_by_timing"))}</dd>
        </dl>
        <div id="block-detail">
          ${f?b`<h4 id="block-title" tabindex="-1">
              ${{pi:"D\xE9tails PI",ff:"D\xE9tails anticipation",model:"D\xE9tails du mod\xE8le"}[f]}
            </h4>
            <dl>${_[f].map(([$,P,R])=>b`<dt>${$}</dt>
              <dd>${d(t?me(t,P):k(e.live,P),R)}</dd>`)}
              ${f==="pi"?b`<dt>Erreur de la voie P</dt>
                <dd>${d(k(a.live,"analysis.control.error_p")," \xB0C")}</dd>
                <dt>Erreur brute de la voie I</dt>
                <dd>${d(k(a.live,"temperature.error")," \xB0C")}</dd>`:M}
              ${f==="ff"?b`<dt>État FF3</dt>
                <dd>${d(k(a.live,"feedforward.ff3_status"))}</dd>`:M}
              ${f==="model"?b`<dt>Équilibre estimé par le Twin</dt><dd>${T}</dd>`:M}
            </dl>`:M}
        </div>
        <button type="button" aria-disabled=${!t} @click=${()=>{this.inspection=void 0}}>
          Revenir au direct
        </button>
        <button type="button" @click=${()=>this.renderRoot.querySelector("#journal-title")?.focus()}>
          Voir le journal
        </button>
      </aside>`}render(){let e=this.diagnostic;if(!e)return M;let t=this.usingRecorder,s=t?this.recorder:this.session,{samples:a,events:o,tracking:r}=this.windowData(s),c=this.tab==="learning",d=c?Ga(s).filter(w=>w.time>=this.range[0]&&w.time<=this.range[1]&&!this.hiddenLearning.includes(w.kind)):[],g=this.tab==="regulation",f=this.tab==="evolution",u=this.inspection,x=f&&u?.entityId===e.entityId&&u.recorder===t?a.find(w=>w.time===u.time):void 0,_=[...new Set(a.map(w=>w.unit))],A=_.length===1&&["\xB0C","\xB0F"].includes(_[0]??"")?_[0]:"unit\xE9 source",T=(w,$,P=!1)=>b`<section class=${P?"chart command-chart":"chart"}>
        <smartpi-time-chart
          .heading=${w}
          .marks=${c&&$===Wr?d:[]}
          .thermalPhases=${c&&$===Wr}
          .samples=${a}
          .curves=${$.map(R=>({...R,unit:R.unit.replace("\xB0C",A)}))}
          .range=${this.range}
          .percent=${P}
          .syncKey=${e.entityId}
          .inspectable=${f}
          .selectedTime=${x?.time??null}
          @inspect-publication=${R=>this.inspect(R.detail)}
          @time-range=${R=>{R.detail[1]>R.detail[0]&&(this.followNow=!1,this.range=R.detail)}}
        ></smartpi-time-chart>
      </section>`;return b`<div class="workspace">
      <div class="top">
        <div>
          <h2>Observatoire de la régulation</h2>
          <span class="subtitle">${e.name}</span>
        </div>
        <label class="expert"
          ><input
            type="checkbox"
            .checked=${this.expert}
            @change=${w=>this.expert=w.target.checked}
          />
          Mode expert</label
        >
      </div>
      <nav aria-label="Vues de diagnostic">
        ${[["evolution","Supervision"],["regulation","R\xE9gulation en direct"],["model","Sant\xE9 du mod\xE8le"],["learning","Apprentissage"]].map(([w,$])=>b`<button
              class=${this.tab===w?"active":""}
              aria-pressed=${this.tab===w}
              @click=${()=>{this.livePublicationMissing=!1,this.tab=w}}
            >
              ${$}
            </button>`)}
      </nav>
      ${g?b`<p class="foot">La période et la source ci-dessous concernent le graphe historique. Le schéma reste l’instantané actuel.</p>`:M}
      <div class="toolbar">
        <div class="periods" role="group" aria-label="Plage temporelle">
          ${[1,3,6,12,24,48].map(w=>b`<button
                aria-pressed=${w===this.hours}
                class=${w===this.hours?"chosen":""}
                @click=${()=>{this.hours=w,this.reset()}}
              >
                ${w} h
              </button>`)}
        </div>
        <div class="tools">
          <button
            aria-label="Période précédente"
            @click=${()=>this.shift(-1)}
          >
            ←</button
          ><button aria-label="Période suivante" @click=${()=>this.shift(1)}>
            →</button
          ><button aria-label="Zoom avant" @click=${()=>this.zoom(.5)}>
            +</button
          ><button aria-label="Zoom arrière" @click=${()=>this.zoom(2)}>
            −</button
          ><button @click=${()=>this.reset()}>Réinitialiser</button
          ><button
            ?disabled=${this.loading}
            @click=${()=>{this.reset(),this.load()}}
          >
            Actualiser Recorder
          </button>
        </div>
      </div>
      <div class="source">
        <strong
          >${t?"Recorder \xB7 historique persistant":"Historique de session \xB7 m\xE9moire temporaire"}</strong
        ><span
          >${a.length} publications ·
          ${new Date(this.range[0]*1e3).toLocaleString()} →
          ${new Date(this.range[1]*1e3).toLocaleString()}</span
        ><label
          ><input
            type="checkbox"
            .checked=${this.preferSession}
            @change=${w=>{this.inspection=void 0,this.replay=!1,this.livePublicationMissing=!1,this.preferSession=w.target.checked}}
          />
          Session uniquement</label
        >
      </div>
      ${t?M:b`<label class="follow"
            ><input
              type="checkbox"
              .checked=${this.followNow}
              @change=${w=>{this.followNow=w.target.checked,this.followNow&&this.reset()}}
            />
            Suivre les nouvelles publications de session</label
          >`}
      ${this.loading?b`<p role="status" class="notice">
            Lecture de l’historique… La collecte de session continue.
          </p>`:M}
      ${this.error?b`<p role="status" class="notice">${this.error}</p>`:M}
      ${a.length?M:b`<p class="notice">
            Aucune publication dans cette fenêtre. Sélectionner une plage plus
            large ou attendre une mise à jour normale de Home Assistant.
          </p>`}
      <details class="pane quality-panel"><summary>Qualité des données de la fenêtre</summary>
        <p>${t?"Recorder":"Session"} · ${a.length} publications · ${a.filter(w=>me(w,"temperature.indoor")!==null&&me(w,"setpoint.filtered_setpoint")!==null&&me(w,"power.applied_percent")!==null).length} avec mesure, consigne filtrée et commande.
        ${a.filter((w,$)=>$>0&&w.time-a[$-1].time>600).length} interruption(s) entre publications > 10 min.</p>
        <p>Unité historique : ${A}. Une unité absente des archives n’est pas remplacée par celle du thermostat actuel.</p>
        <p>Les publications sont irrégulières. Ces nombres ne constituent pas un pourcentage de couverture temporelle. Aucun trou n’est rempli et aucune confiance actuelle n’est appliquée au passé.</p>
      </details>
      ${f&&this.livePublicationMissing?b`<p class="notice" role="status">La publication du direct est introuvable dans la source et la fenêtre affichées. L’inspecteur affiche l’instantané actuel.</p>`:M}
      ${this.tab==="evolution"?b`<div class="supervision">
            ${this.inspectionPanel(e,x,t)}
            <div class="trends">
            ${T("Temp\xE9rature et consigne filtr\xE9e",Sl)}
            ${T("Commande du r\xE9gulateur \xB7 pas des watts",Ps,!0)}
            ${T("\xC9cart consigne filtr\xE9e \u2212 temp\xE9rature int\xE9rieure",[{label:"\xC9cart filtr\xE9",path:"error",color:"#bc7254",unit:"\xB0C"}])}
            <p class="foot">
              Écart calculé uniquement avec deux valeurs du même état. Ce n’est
              pas l’erreur de l’intégrateur ni une mesure de confort. Aucune
              zone de bande morte n’est extrapolée. Les points sont des
              publications irrégulières ; une ligne ne constitue pas une mesure
              intermédiaire.
            </p>
            ${this.trackingPanel(r,a.length)}
            <section class="chart"><smartpi-diagnostic-projection .samples=${a} kind="scatter"
              .source=${t?"Recorder":"Session"} .contextId=${`${e.entityId}/${t}/${this.range.join("/")}`}
              .inspectable=${!0} @inspect-publication=${w=>this.inspect(w.detail)}></smartpi-diagnostic-projection></section>
            </div></div>`:this.tab==="regulation"?b`<section class="pane">
                <smartpi-control-diagram
                  .diagnostic=${e}
                  .expert=${this.expert}
                ></smartpi-control-diagram>
                <button class="open-supervision" type="button"
                  @click=${()=>void this.openLivePublication()}>Voir dans Supervision</button>
              </section>
              <details class="pane chain-details">
                <summary>Chaîne de commande détaillée</summary>
                <smartpi-command-chain .diagnostic=${e}></smartpi-command-chain>
              </details>
              <section class="pane command-comparison">
                <p class="foot">${t?"Recorder":"Session"} · ${new Date(this.range[0]*1e3).toLocaleString()} → ${new Date(this.range[1]*1e3).toLocaleString()}</p>
                <smartpi-time-chart heading="Demande et sortie · écart de commande"
                  .samples=${a} .range=${this.range} .percent=${!0} .commandComparison=${!0} .syncKey=${e.entityId}
                  .curves=${[Ps[1],Ps[0]]}
                  @time-range=${w=>{w.detail[1]>w.detail[0]&&(this.followNow=!1,this.range=w.detail)}}></smartpi-time-chart>
                <p class="foot">La zone relie la demande publiée et la sortie appliquée de la même publication.
                  Ce n’est ni une énergie perdue ni un diagnostic de cause. Les motifs historiques
                  ne sont disponibles que si cette source les a conservés. Les données manquantes et
                  interruptions supérieures à 10 min coupent le tracé. Les courbes en escalier ne sont pas des mesures intermédiaires.</p>
              </section>`:c?b`
              <section class="pane">
                <div class="periods" role="group" aria-label="Repères d’apprentissage">
                  ${kd.map((w,$)=>b`
                    <button type="button" aria-pressed=${!this.hiddenLearning.includes(w)}
                      @click=${()=>{this.hiddenLearning=this.hiddenLearning.includes(w)?this.hiddenLearning.filter(P=>P!==w):[...this.hiddenLearning,w]}}>${["\u25CF","\u25C6","\u2191","\u2193"][$]} ${w}</button>`)}
                </div>
                <p class="foot">Les repères sont datés à la publication ou à l’observation.
                  Les lettres A et B indiquent une hausse du compteur de mises à jour
                  acceptées ou de mesures collectées entre deux publications. Le détail distingue les deux. Deux lettres à la même date peuvent
                  regrouper des apprentissages survenus à des instants différents.
                  ${a.some(w=>k(w.live,"learning")!==void 0)?"Consultez le d\xE9tail pour conna\xEEtre l\u2019intervalle observ\xE9.":"Cette source ne contient pas les compteurs historiques. Les rep\xE8res A/B sont indisponibles ici. La session conserve les diagnostics re\xE7us pendant l\u2019ouverture du panneau."}
                  Zoomez pour séparer les repères rapprochés.</p>
                <p class="foot">Fond orange · température en hausse. Fond bleu · température
                  en baisse. Fond neutre · valeur stable ou absente. Ces intervalles
                  comparent les mesures successives.</p>
                ${t&&!a.some(w=>k(w.live,"learning")!==void 0)?b`<p class="notice">Le Recorder sélectionné contient les courbes, mais pas les
                    compteurs d’apprentissage. Les événements passés ne peuvent pas être datés.
                    <button type="button" @click=${()=>{this.preferSession=!0,this.inspection=void 0}}>
                      Observer les prochains apprentissages en session</button></p>`:M}
                ${T("Temp\xE9rature et consigne filtr\xE9e",Wr)}
                ${T("Activit\xE9 du r\xE9gulateur \xB7 commande appliqu\xE9e",[Ps[0]],!0)}
                <p class="foot">En mode chauffage, une commande positive correspond à une
                  chauffe commandée, zéro à un arrêt de commande. La température peut
                  encore monter après l’arrêt. La commande est exprimée en pourcentage.</p>
                ${a.some(w=>k(w.live,"learning.emea_samples_a")!==void 0||k(w.live,"learning.emea_samples_b")!==void 0)?T("Collecte du mod\xE8le \xB7 nombre de mesures conserv\xE9es",[{label:"Mesures A",path:"live.learning.emea_samples_a",color:"#17638d",unit:"mesures",step:!0},{label:"Mesures B",path:"live.learning.emea_samples_b",color:"#6f448a",unit:"mesures",step:!0}]):M}
                <p>Temps morts actuels · chauffe
                  ${C(ot(e.live,"model.deadtime_heat_s","model.deadtime_heat_reliable")," s")}
                  · refroidissement
                  ${C(ot(e.live,"model.deadtime_cool_s","model.deadtime_cool_reliable")," s")}</p>
                <p class="foot">↑ Chauffe et ↓ Refroidissement repèrent des publications.
                  Les durées sont des médianes. Les bornes des épisodes ne sont pas publiées.
                  ${a.some(w=>k(w.live,"analysis.deadtime")||k(w.live,"model.deadtime_heat_reliable")!==void 0||k(w.live,"model.deadtime_cool_reliable")!==void 0)?"La couverture d\xE9pend des donn\xE9es pr\xE9sentes dans chaque publication.":"Cette fen\xEAtre ne contient pas de diagnostics historiques de temps mort."}</p>
                <details>
                  <summary>Détail des repères (${d.length})</summary>
                  ${d.length?b`<ol>
                    ${d.slice(-60).reverse().map(w=>b`<li>
                      <time datetime=${new Date(w.time*1e3).toISOString()}>${new Date(w.time*1e3).toLocaleString()}</time>
                      ${w.observedAt?" (observation)":""} · ${w.label}
                    </li>`)}
                  </ol>
                  ${d.length>60?b`<p class="foot">60 derniers repères. Zoomez pour consulter une plage plus courte.</p>`:M}`:b`<p>Aucun repère observable avec les filtres et les données de cette fenêtre.</p>`}
                </details>
              </section>`:b`
              <div class="model-heading">
                <h3>Modèle appris</h3>
                <span
                  >Confiance actuelle :
                  ${C(k(e.live,"model.confidence"))}</span
                >
              </div>
              ${T("A \xB7 gain de chauffe estim\xE9",[{label:"A appris",path:"model.a",color:"#2689ca",unit:"\xB0C/min/u",step:!0}])}
              ${T("B \xB7 pertes thermiques estim\xE9es",[{label:"B appris",path:"model.b",color:"#39a38a",unit:"min\u207B\xB9",step:!0}])}
              <p class="foot">
                La confiance actuelle ne valide pas rétroactivement ces séries.
                Le contrat history ne contient pas de confiance historique ni de
                mesures de référence A/B.
              </p>
              <section class="pane"><smartpi-diagnostic-projection .samples=${a} kind="model"
                .source=${t?"Recorder":"Session"} .contextId=${`${e.entityId}/${t}/${this.range.join("/")}`}>
              </smartpi-diagnostic-projection></section>
              <section class="pane">
                <h3>Temps morts · instantané</h3>
                <div class="metrics">
                  ${[["Chauffe","model.deadtime_heat_s","model.deadtime_heat_reliable"],["Refroidissement","model.deadtime_cool_s","model.deadtime_cool_reliable"],["Constante \u03C4","model.tau_min","model.tau_reliable"]].map(([w,$,P])=>b`<div>
                        <span>${w}</span
                        ><strong
                          >${C(ot(e.live,$,P),$==="model.tau_min"?" min":" s")}</strong
                        ><small
                          >Fiable : ${C(k(e.live,P))}</small
                        >
                      </div>`)}
                </div>
                <p>
                  Détection : ${C(k(e.live,"analysis.deadtime.state"))}
                </p>
              </section>
              <section class="pane">
                <h3>Thermal Twin · instantané</h3>
                <p>
                  Modèle fiable :
                  ${C(k(e.live,"analysis.twin.twin_model_reliable"))} ·
                  Initialisation du Twin :
                  ${C(k(e.live,"analysis.twin.twin_warming_up"))}
                </p>
                <div class="metrics">
                  ${[["Temp\xE9rature estim\xE9e","twin_T_hat"," \xB0C"],["Temp\xE9rature pr\xE9dite","twin_T_pred"," \xB0C"],["Innovation","twin_innovation"," \xB0C"],["RMSE innovation \xB7 EMA","twin_rmse_30"," \xB0C"],["Perturbation estim\xE9e","twin_perturbation_dTdt"," \xB0C/min"]].map(([w,$,P])=>b`<div>
                        <span>${w}</span
                        ><strong
                          >${C(ot(e.live,"analysis.twin."+$),P,4)}</strong
                        >
                      </div>`)}
                </div>
                <p>
                  Équilibre :
                  ${C(ot(e.live,"analysis.twin.twin_T_steady","analysis.twin.twin_T_steady_reliable")," \xB0C")}
                  · Consigne atteignable (prédiction) :
                  ${C(ot(e.live,"analysis.twin.twin_setpoint_reachable","analysis.twin.twin_T_steady_reliable"))}
                </p>
                <p class="foot">
                  Aucune courbe Twin : ces valeurs ne font pas partie des huit
                  séries Recorder standard. Fiabilité déclarée ≠ exactitude
                  physique démontrée.
                </p>
              </section>
            `}
      ${g||c?M:b`<section class="timeline">
        <h3 id="journal-title" tabindex="-1">
          Journal des publications
          <span>${o.length} variations observées</span>
        </h3>
        <p class="foot">
          Annotations issues d’une comparaison d’états, pas d’événements
          internes explicitement horodatés. Les motifs absents de Recorder ne
          sont pas reconstruits.
        </p>
        <ol>
          ${o.slice(-60).reverse().map(w=>b`<li>
                  <time>${new Date(w.time*1e3).toLocaleString()}</time>
                  <div>
                    ${f?b`<button type="button" aria-pressed=${x?.time===w.time}
                          @click=${()=>void this.inspectEvent(w.time)}>${w.label}</button>`:b`<strong>${w.label}</strong>`}${this.expert?b`<p>${w.provenance}</p>`:M}
                  </div>
                </li>`)}
        </ol>
        ${o.length===0?b`<p>Aucune transition observable sur cette fenêtre.</p>`:b`<p class="foot">
              60 dernières variations affichées au maximum.
            </p>`}
      </section>`}
      ${this.expert?b`<details class="provenance">
            <summary>Provenance et interactions</summary>
            <p>
              attributes.history pour les huit séries ; attributes.live pour le
              schéma actuel. Glisser horizontalement pour zoomer, légende
              cliquable, curseurs synchronisés ; boutons de zoom/déplacement
              accessibles au clavier et au tactile. Dates affichées dans le
              fuseau du navigateur, avec détails dans les tables.
            </p>
            <p>
              Requête officielle history/history_during_period, attributs
              complets. Aucun service ni changement d’état. La source choisie
              reste distincte : aucune fusion silencieuse entre Recorder et
              session.
            </p>
          </details>`:M}
    </div>`}};Re.styles=Le`
    .replay-bar{grid-column:1/-1;border:2px solid var(--primary-color);border-radius:8px;padding:14px;margin:10px;color:var(--primary-text-color)}
    .replay-bar label{display:block;font-size:13px;margin:12px 0}.replay-bar input{display:block;width:100%;min-height:44px;accent-color:var(--primary-color)}
    .replay-bar button{min-height:44px}.replay-bar p,.quality-panel p{font-size:12px;line-height:1.5}.quality-panel summary{cursor:pointer;min-height:44px;padding-top:12px}

    :host {
      display: block;
      margin-top: 22px;
    }
    .workspace {
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      overflow: hidden;
    }
    .top {
      padding: 22px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .subtitle {
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    h2 {
      font-size: 21px;
      margin: 6px 0;
    }
    h3 {
      font-size: 16px;
    }
    nav {
      display: flex;
      padding: 0 24px;
      border-bottom: 1px solid var(--divider-color);
      gap: 18px;
    }
    button {
      font: inherit;
      color: inherit;
      background: transparent;
      border: 1px solid var(--divider-color);
      padding: 9px 12px;
      border-radius: 6px;
      cursor: pointer;
      min-height: 40px;
    }
    button:disabled {
      opacity: 0.5;
      cursor: wait;
    }
    nav button {
      border: 0;
      border-radius: 0;
      border-bottom: 3px solid transparent;
      padding: 12px 2px;
    }
    nav button.active {
      border-bottom-color: var(--primary-color);
      font-weight: 650;
    }
    button.chosen {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
    }
    .toolbar {
      padding: 18px 24px 12px;
      display: flex;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }
    .periods,
    .tools {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
    }
    .source {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 10px;
      padding: 0 24px 16px;
      font-size: 11px;
      color: var(--secondary-text-color);
      border-bottom: 1px solid var(--divider-color);
    }
    .source strong {
      color: var(--primary-text-color);
    }
    .expert {
      font-size: 12px;
      white-space: nowrap;
    }
    label {
      display: flex;
      align-items: center;
      gap: 5px;
      min-height: 32px;
    }
    input {
      accent-color: var(--primary-color);
    }
    .notice {
      padding: 12px 24px;
      background: var(--secondary-background-color);
      font-size: 13px;
    }
    .open-supervision, .chain-details summary { min-height: 44px; }
    .chain-details summary { cursor: pointer; }
    .chart,
    .pane {
      padding: 22px 24px;
      border-bottom: 1px solid var(--divider-color);
      min-width: 0;
    }
    .foot {
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 1.6;
      margin: 14px 24px;
    }
    .supervision {
      display: grid;
      grid-template-columns: minmax(0, 3fr) minmax(220px, 1fr);
      grid-template-areas: "synoptic synoptic" "trends publication";
    }
    .synoptic { grid-area: synoptic; padding: 12px 24px; border-bottom: 1px solid var(--divider-color); }
    .trends { grid-area: trends; min-width: 0; }
    .publication { grid-area: publication; padding: 12px 18px; border-inline-start: 1px solid var(--divider-color); }
    .publication dt, .inspection-status, .synoptic p { color: var(--secondary-text-color); font-size: 13px; }
    .publication dd { margin: 4px 0 12px; overflow-wrap: anywhere; }
    .signal-path { display: flex; flex-wrap: wrap; gap: 8px; }
    .signal-path li { border: 1px solid var(--divider-color); border-radius: 6px; padding: 8px; }
    .signal-path .active-path, .timeline button[aria-pressed="true"] { border-color: var(--primary-color); }
    @media (max-width: 760px) {
      .supervision { grid-template-columns: minmax(0, 1fr); grid-template-areas: "trends" "publication" "synoptic"; }
      .publication { border-inline-start: 0; }
    }
    .model-heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 24px;
      gap: 12px;
    }
    .model-heading span {
      font-size: 12px;
    }
    .metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 18px;
    }
    .metrics span,
    .metrics small {
      display: block;
      font-size: 12px;
      color: var(--secondary-text-color);
      margin: 7px 0;
    }
    .metrics strong {
      font-size: 20px;
      font-variant-numeric: tabular-nums;
    }
    .tracking {
      background: var(--secondary-background-color, var(--card-background-color));
      border-inline-start: 3px solid var(--primary-color);
    }
    .tracking-title h3 { margin: 0 0 5px; }
    .tracking-title span, .tracking dt {
      color: var(--secondary-text-color);
      font-size: 12px;
    }
    .tracking dl { margin: 16px 0 12px; }
    .tracking dd {
      margin: 4px 0 0;
      font-size: 19px;
      font-weight: 650;
      font-variant-numeric: tabular-nums;
    }
    .tracking p { margin: 10px 0; }
    .tracking summary { font-size: 13px; font-weight: 600; cursor: pointer; }
    .pane p {
      font-size: 13px;
      line-height: 1.6;
    }
    .timeline {
      padding: 16px 24px;
    }
    .timeline h3 {
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }
    .timeline h3 span {
      font-size: 11px;
      font-weight: 400;
      color: var(--secondary-text-color);
    }
    .timeline .foot {
      margin: 10px 0;
    }
    ol {
      list-style: none;
      max-height: 350px;
      overflow: auto;
      padding: 0;
    }
    li {
      display: flex;
      gap: 20px;
      border-top: 1px solid var(--divider-color);
      padding: 12px 0;
      font-size: 12px;
    }
    li time {
      color: var(--secondary-text-color);
      white-space: nowrap;
    }
    li strong {
      font-weight: 500;
    }
    li p {
      color: var(--secondary-text-color);
      line-height: 1.5;
    }
    .provenance {
      padding: 18px 24px;
      font-size: 12px;
      line-height: 1.6;
    }
    :focus-visible {
      outline: 3px solid var(--primary-color);
      outline-offset: 2px;
    }
    @media (max-width: 600px) {
      .top {
        align-items: flex-start;
        flex-direction: column;
      }
      h2 {
        font-size: 18px;
      }
      nav {
        gap: 14px;
        font-size: 13px;
      }
      nav button { min-height: 44px; text-align: start; }
      .chart,
      .pane {
        padding: 18px 10px;
      }
      .toolbar,
      .top,
      .source,
      .timeline {
        padding-left: 14px;
        padding-right: 14px;
      }
      .tools button {
        font-size: 12px;
        padding: 8px;
      }
      li {
        flex-direction: column;
        gap: 6px;
      }
      .metrics strong {
        font-size: 17px;
      }
      .model-heading {
        flex-direction: column;
        align-items: flex-start;
      }
      .timeline h3 {
        flex-direction: column;
      }
      .foot {
        margin: 12px 14px;
      }
    }
  `,z([G({attribute:!1})],Re.prototype,"hass",2),z([G({attribute:!1})],Re.prototype,"diagnostic",2),z([G({attribute:!1})],Re.prototype,"session",2),z([ne()],Re.prototype,"tab",2),z([ne()],Re.prototype,"hiddenLearning",2),z([ne()],Re.prototype,"expert",2),z([ne()],Re.prototype,"hours",2),z([ne()],Re.prototype,"end",2),z([ne()],Re.prototype,"range",2),z([ne()],Re.prototype,"recorder",2),z([ne()],Re.prototype,"loading",2),z([ne()],Re.prototype,"error",2),z([ne()],Re.prototype,"preferSession",2),z([ne()],Re.prototype,"followNow",2),z([ne()],Re.prototype,"inspection",2),z([ne()],Re.prototype,"replay",2),z([ne()],Re.prototype,"livePublicationMissing",2),z([ne()],Re.prototype,"block",2),Re=z([Fe("smartpi-visual-diagnostics")],Re);var Oi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Al=n=>(...i)=>({_$litDirective$:n,values:i}),Es=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,e,t){this._$Ct=i,this._$AM=e,this._$Ci=t}_$AS(i,e){return this.update(i,e)}update(i,e){return this.render(...e)}};var{I:gm}=Oa;var Cl=n=>n.strings===void 0;var Ad={},Tl=(n,i=Ad)=>n._$AH=i;var Ml=Al(class extends Es{constructor(n){if(super(n),n.type!==Oi.PROPERTY&&n.type!==Oi.ATTRIBUTE&&n.type!==Oi.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Cl(n))throw Error("`live` bindings can only contain a single expression")}render(n){return n}update(n,[i]){if(i===Mt||i===M)return i;let e=n.element,t=n.name;if(n.type===Oi.PROPERTY){if(i===e[t])return Mt}else if(n.type===Oi.BOOLEAN_ATTRIBUTE){if(!!i===e.hasAttribute(t))return Mt}else if(n.type===Oi.ATTRIBUTE&&e.getAttribute(t)===i+"")return Mt;return Tl(n),i}});var Pl={none:"Manuel",frost:"Hors gel",eco:"\xC9co",comfort:"Confort",boost:"Boost",activity:"Activit\xE9"},tt=class{constructor(i,e){this.hass=i;this.diagnostic=e;let t=e.climateId?i?.states[e.climateId]:void 0,s=Object.values(i?.states??{}).filter(a=>a.entity_id.startsWith("climate.")&&k(a.attributes,"specific_states.regulation_diagnostics")===e.entityId);this.climate=s.length===1&&t?.entity_id.startsWith("climate.")&&k(t.attributes,"specific_states.regulation_diagnostics")===e.entityId?t:void 0}get attributes(){return this.climate?.attributes??{}}get available(){return this.diagnostic.available&&!!this.climate&&!["unknown","unavailable"].includes(this.climate.state)}get unit(){let i=k(this.attributes,"configuration.temperature_unit")??this.attributes.temperature_unit??this.hass?.config?.unit_system?.temperature;return i==="\xB0C"||i==="\xB0F"?i:null}get measured(){return this.diagnostic.available?K(k(this.diagnostic.live,"temperature.indoor")):null}get target(){return this.available?K(this.attributes.temperature):null}get filtered(){return this.diagnostic.available?K(k(this.diagnostic.live,"setpoint.filtered_setpoint")):null}get minimum(){return K(this.attributes.min_temp)}get maximum(){return K(this.attributes.max_temp)}get step(){let i=K(this.attributes.target_temp_step)??K(k(this.attributes,"configuration.target_temperature_step"));return i!==null&&i>0?i:null}get locked(){return k(this.attributes,"specific_states.is_locked")===!0}get canSetTemperature(){let i=K(this.attributes.supported_features);return this.available&&!this.locked&&this.unit!==null&&this.target!==null&&this.minimum!==null&&this.maximum!==null&&this.maximum>this.minimum&&this.step!==null&&i!==null&&(i&1)!==0&&!["heat_cool","auto"].includes(this.climate.state)}get presets(){let i=this.attributes.preset_modes;if(!this.available||!Array.isArray(i))return[];let e=["off","not_home"].includes(String(k(this.attributes,"presence_manager.presence_state"))),t=this.climate?.state==="cool"?"_cool":"",s=this.climate?.state==="heat"||this.climate?.state==="cool";return[...new Set(i.filter(a=>typeof a=="string"&&a.length>0))].map(a=>({id:a,label:Object.hasOwn(Pl,a)?Pl[a]:a,temperature:s&&this.unit!==null&&!["none","activity"].includes(a)?K(k(this.attributes,`preset_temperatures.${a}${t}${e?"_away":""}_temp`)):null}))}get canSetPreset(){let i=K(this.attributes.supported_features);return this.available&&!this.locked&&i!==null&&(i&16)!==0&&this.presets.length>0}get context(){return JSON.stringify([this.diagnostic.entityId,this.climate?.entity_id,this.available,this.climate?.state,this.attributes.temperature,this.attributes.preset_mode,this.minimum,this.maximum,this.step,this.unit,this.locked,this.attributes.supported_features,this.presets])}choiceTemperature(i){return i?.kind==="temperature"?i.value:i?.kind==="preset"?this.presets.find(e=>e.id===i.value)?.temperature??null:this.target}validate(i){if(!i||i.kind!=="temperature"&&i.kind!=="preset")return!1;if(i.kind==="preset")return this.canSetPreset&&this.presets.some(o=>o.id===i.value);if(!this.canSetTemperature||!Number.isFinite(i.value))return!1;let{minimum:e,maximum:t,step:s}=this;if(i.value<e||i.value>t)return!1;let a=(i.value-e)/s;return Math.abs(a-Math.round(a))<1e-6}shift(i,e){let t=this.minimum,s=this.maximum,a=this.step,o=(i-t)/a,r=e>0?Math.floor(o+1e-6)+1:Math.ceil(o-1e-6)-1;return Number(Math.min(s,Math.max(t,t+r*a)).toFixed(6))}get scale(){let i=[this.measured,this.target,...this.presets.map(s=>s.temperature)].filter(s=>s!==null),e=i.length?Math.min(...i):16,t=i.length?Math.max(...i):22;return[Math.floor(e-1),Math.ceil(Math.max(t+1,e+4))]}currentPublication(i){if(!this.available)return!1;let e=Date.parse(this.diagnostic.lastUpdated??""),t=Date.parse(this.climate.last_changed??this.climate.last_updated??"");return Number.isFinite(i)&&Number.isFinite(e)&&Number.isFinite(t)&&e>=t&&i-e<=6e5&&e<=i+6e4}appliedEffort(i=Date.now()){if(!this.currentPublication(i))return null;let e=K(k(this.diagnostic.live,"power.applied_percent"));if(e===null||e<0||e>100)return null;let t=this.climate.state;return{percent:e,direction:t==="heat"?1:t==="cool"?-1:0,label:t==="heat"?"Commande de chauffe":t==="cool"?"Commande de refroidissement":"Commande appliqu\xE9e"}}maintenanceEffort(i=Date.now()){let e=this.appliedEffort(i),t=this.diagnostic.live;if(!e||e.direction!==1||e.percent<=0||this.unit===null||this.measured===null||this.target===null||this.filtered!==this.target||this.measured<this.target||k(t,"control.mode")!=="smartpi"||k(t,"control.phase")!=="Stable"||k(t,"control.in_deadband")!==!1||k(t,"calibration.state")!=="Idle"||k(t,"setpoint.trajectory_active")!==!1||k(t,"setpoint.boost_active")!==!1||K(k(t,"power.hold_percent"))!==0)return null;let s=K(k(t,"power.ff_percent")),a=K(k(t,"power.pi_percent")),o=K(k(t,"power.command_percent"));return s===null||s<=0||s>100||a===null||a>0||o===null||o<=0||o>100||Math.abs(s+a-o)>.2?null:{ff:s,pi:a}}setpointPosition(i=Date.now()){if(!this.currentPublication(i)||this.unit===null||this.measured===null||this.target===null||!["heat","cool"].includes(this.climate.state))return null;let e=Math.round(this.measured*10)-Math.round(this.target*10);return Number.isFinite(e)?{kind:e===0?"aligned":e>0?"above":"below",overshoot:this.climate.state==="heat"?e>0:e<0,direction:e===0?0:e>0?-1:1,gap:Math.abs(e)/10,target:this.target}:null}twinPresentation(i=!1,e=!1,t=Date.now()){let s=g=>({estimated:null,predicted:null,eta:null,detail:g});if(i)return s("Aper\xE7u du r\xE9glage \xB7 la projection de la consigne active est masqu\xE9e.");if(e)return s("En attente d\u2019une nouvelle publication apr\xE8s le changement de consigne.");if(!this.available||this.unit===null||!["heat","cool"].includes(this.climate.state))return s("Projection indisponible dans cet \xE9tat du thermostat.");if(!this.currentPublication(t))return s("Donn\xE9es Twin r\xE9centes indisponibles.");let a=g=>k(this.diagnostic.live,"analysis.twin."+g);if(a("twin_warming_up")===!0)return s("Le Twin est en cours d\u2019initialisation.");if(a("twin_status")!=="ok"||a("twin_model_reliable")!==!0||a("twin_warming_up")!==!1)return s("Le Twin ne publie pas de mod\xE8le fiable disponible.");let o=K(a("twin_T_hat")),r=K(a("twin_T_pred")),c=this.eta(!1,t),d=c?.detail??"Aucun d\xE9lai calculable publi\xE9 par le Twin.";if(!c){let g=a("eta_reason");k(this.diagnostic.live,"model.tau_reliable")!==!0?d="ETA indisponible \xB7 constante de temps non fiable.":g==="unreachable"?d=this.climate.state==="heat"&&this.measured!==null&&this.target!==null&&this.measured>this.target?"Pas de d\xE9lai de retour : l\u2019ETA simule une chauffe maximale alors que la mesure d\xE9passe la consigne.":"La consigne n\u2019est pas atteinte dans le sc\xE9nario ETA du Twin ; ce r\xE9sultat ne d\xE9crit pas toutes les actions du r\xE9gulateur.":g==="too_far"?d="Le d\xE9lai publi\xE9 d\xE9passe l\u2019horizon de 48 h affichable.":g==="missing_text"?d="ETA indisponible \xB7 temp\xE9rature ext\xE9rieure manquante.":g==="not_reliable"?d="ETA indisponible \xB7 mod\xE8le d\xE9clar\xE9 non fiable pour ce calcul.":(g==="ok"||g==="already_reached")&&(d="ETA en attente de donn\xE9es coh\xE9rentes et r\xE9centes pour la consigne active.")}return{estimated:o,predicted:r,eta:c,detail:d}}eta(i=!1,e=Date.now()){if(i||!this.available||this.target===null||this.measured===null||this.unit===null||!["heat","cool"].includes(this.climate.state))return null;let t=Date.parse(this.diagnostic.lastUpdated??""),s=Date.parse(this.climate.last_updated??"");if(!Number.isFinite(t)||!Number.isFinite(s)||t<s||e-t>10*6e4||t>e+6e4)return null;let a=this.diagnostic.live,o=g=>k(a,"analysis.twin."+g);if(o("twin_status")!=="ok"||o("twin_model_reliable")!==!0||o("twin_warming_up")!==!1||k(a,"model.tau_reliable")!==!0)return null;let r=K(o("eta_s")),c=o("eta_reason");if(c==="already_reached"&&r===0)return{label:"\xC0 la consigne",detail:"Selon la tol\xE9rance du Twin SmartPI.",seconds:0};if(c!=="ok"||r===null||r<=0||r>48*3600)return null;let d=Math.ceil(r/60);return{label:d<60?`\u2248 ${d} min`:`\u2248 ${Math.floor(d/60)} h ${String(d%60).padStart(2,"0")}`,detail:"Meilleur cas du Twin \xB7 conditions constantes, commande maximale en chauffe. Pas une heure d\u2019arriv\xE9e garantie.",seconds:r}}};var ri=class{constructor(i){this.hass=i}async request(i,e,t={}){if(!i.startsWith("sensor.")||typeof this.hass.callWS!="function")throw new Error("L\u2019observatoire local n\u2019est pas disponible dans cette connexion.");let s;try{return await Promise.race([this.hass.callWS({type:"smartpi_dashboard/observatory",entity_id:i,action:e,payload:t}),new Promise((a,o)=>{s=setTimeout(()=>o(new Error(e==="get"?"L\u2019observatoire ne r\xE9pond pas. R\xE9essayez.":"R\xE9sultat non confirm\xE9. Actualisez le carnet avant de r\xE9essayer.")),8e3)})])}catch(a){throw Pe(a)&&typeof a.message=="string"&&!(a instanceof Error)?new Error(a.message.slice(0,300)):a}finally{clearTimeout(s)}}static room(i){let e=u=>typeof u=="string"&&u.length>0&&u.length<=100,t=u=>typeof u=="number"&&Number.isFinite(u),s=u=>u===null||t(u),a=u=>t(u)&&u>=0&&u<=864e10,o=(u,x,_)=>u[x]===void 0||_(u[x]),r=u=>u==="\xB0C"||u==="\xB0F",c=u=>e(u.id)&&a(u.started_at)&&o(u,"reason",e)&&o(u,"ended_at",a),d=u=>Pe(u)&&(u.kind==="temperature"?t(u.value):u.kind==="preset"&&e(u.value)),g={bookmarks:[30,u=>e(u.id)&&e(u.label)&&a(u.created_at)&&t(u.temperature)&&t(u.target)&&r(u.unit)&&s(u.outdoor)&&(u.preset===null||e(u.preset))],receipts:[50,u=>c(u)&&["pending","observed","excluded"].includes(String(u.status))&&d(u.choice)&&(u.unit===null||r(u.unit))&&["pending","accepted","uncertain"].includes(String(u.service_result))&&(u.confirmed_at===null||a(u.confirmed_at))&&["applied_at","response_at"].every(x=>o(u,x,a))&&["applied_percent","response_temperature"].every(x=>o(u,x,t))],trials:[50,u=>c(u)&&e(u.label)&&t(u.target)&&r(u.unit)&&s(u.baseline)&&s(u.outdoor)&&["pending","finished","excluded"].includes(String(u.status))&&["unknown","good","cold","hot"].includes(String(u.feedback))&&o(u,"missing_publications",x=>Number.isSafeInteger(x)&&x>=0)&&Pe(u.summary)&&Number.isSafeInteger(u.summary.publications)&&u.summary.publications>=0&&["minimum","maximum","last","max_abs_error","outdoor_min","outdoor_max"].every(x=>s(u.summary[x]))&&["first_at","last_at"].every(x=>u.summary[x]===null||a(u.summary[x]))],forecasts:[100,u=>c(u)&&t(u.target)&&t(u.temperature)&&r(u.unit)&&t(u.eta_s)&&u.eta_s>0&&u.eta_s<=172800&&["pending","reached","excluded"].includes(String(u.status))&&o(u,"outdoor",s)&&(u.status!=="reached"||a(u.observed_at)&&t(u.observed_s)&&u.observed_s>=0)]},f=u=>Pe(u)&&a(u.time)&&["temperature","target","outdoor","applied"].every(x=>s(u[x]))&&["unit","mode","climate_id","preset","window"].every(x=>u[x]===null||o(u,x,e))&&["bound","safety","overpowering"].every(x=>u[x]===null||o(u,x,_=>typeof _=="boolean"));if(Pe(i)&&i.points!==void 0&&(!Array.isArray(i.points)||i.points.length>1200||!i.points.every(f)))throw new Error("Points d\u2019observation non reconnus.");if(!Pe(i)||i.current!==null&&!Pe(i.current)||!Object.entries(g).every(([u,[x,_]])=>Array.isArray(i[u])&&i[u].length<=x&&i[u].every(A=>Pe(A)&&_(A))))throw new Error("R\xE9ponse de l\u2019observatoire non reconnue. Rechargez apr\xE8s la mise \xE0 jour du composant.");return i}};async function El(n,i,e,t,s=()=>!0){e={...e};let a=pn(n).find(g=>g.entityId===i.entityId&&g.climateId===i.climateId);if(!a||typeof n.callService!="function")throw new Error("Commande indisponible dans cette connexion.");let o=new tt(n,a);if(o.context!==t)throw new Error("Le thermostat a chang\xE9. S\xE9lectionnez \xE0 nouveau votre choix.");if(!o.validate(e))throw new Error("Ce r\xE9glage n\u2019est plus disponible ou ne respecte pas les limites du thermostat.");let r=new ri(n),c=null,d=!1;try{let g=await r.request(a.entityId,"receipt_begin",{choice:e});Pe(g)&&typeof g.id=="string"&&(c=g.id)}catch{}try{let g=pn(n).find(u=>u.entityId===i.entityId&&u.climateId===i.climateId),f=g?new tt(n,g):void 0;if(!s()||!f||f.context!==t||!f.validate(e))throw new Error("Le thermostat a chang\xE9 avant l\u2019envoi. S\xE9lectionnez \xE0 nouveau votre choix.");d=!0,e.kind==="temperature"?await n.callService("climate","set_temperature",{entity_id:a.climateId,temperature:e.value}):await n.callService("climate","set_preset_mode",{entity_id:a.climateId,preset_mode:e.value})}catch(g){throw c&&await r.request(a.entityId,"receipt_finish",{id:c,success:!1,not_sent:!d}).catch(()=>{}),g}return c&&await r.request(a.entityId,"receipt_finish",{id:c,success:!0}).catch(()=>{}),{receipt:c}}var Ll={hvac_off_manual:"Arr\xEAt manuel publi\xE9",hvac_off_auto_start_stop:"Arr\xEAt automatique publi\xE9",hvac_off_window_detection:"Fen\xEAtre ouverte : arr\xEAt publi\xE9",hvac_off_sleep_mode:"Mode sommeil publi\xE9",hvac_off_safety_detection:"S\xE9curit\xE9 : arr\xEAt publi\xE9",hvac_off_central_mode:"Mode central : arr\xEAt publi\xE9",hvac_off_inhibition:"Inhibition : arr\xEAt publi\xE9",overpowering_detected:"D\xE9lestage d\xE9tect\xE9",safety_detected:"S\xE9curit\xE9 d\xE9tect\xE9e",target_temp_window_eco:"Fen\xEAtre ouverte : consigne \xC9co retenue",target_temp_window_frost:"Fen\xEAtre ouverte : consigne hors gel retenue",target_temp_power:"Consigne de d\xE9lestage retenue",target_temp_central_mode:"Consigne du mode central retenue",target_temp_activity_detected:"Consigne li\xE9e \xE0 l\u2019activit\xE9",target_temp_activity_not_detected:"Consigne li\xE9e \xE0 l\u2019absence d\u2019activit\xE9",target_temp_absence_detected:"Consigne d\u2019absence retenue",target_temp_timed_preset:"Preset temporis\xE9 actif",not_initialized:"Initialisation incompl\xE8te",underlying_unavailable:"\xC9quipement sous-jacent indisponible"},Ls=class{constructor(i){this.model=i}get reasons(){if(!this.model.available)return[];let i=this.model.attributes,e=k(i,"specific_states.messages"),s=[["off","sleep"].includes(this.model.climate?.state??"")?k(i,"specific_states.hvac_off_reason"):null,k(i,"specific_states.hvac_mode_reason"),...Array.isArray(e)?e:[]];return k(i,"specific_states.inhibition.inhibited")===!0&&s.unshift("hvac_off_inhibition"),[...new Set(s.filter(a=>typeof a=="string"&&a.length>0))].map(a=>({code:a,label:Object.hasOwn(Ll,a)?Ll[a]:a}))}get requested(){let i=this.model.attributes.requested_state;return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}get requestedTemperature(){return K(this.requested.target_temperature)}advice(i){if(!i||!this.model.available)return[];let e=[];this.model.locked&&e.push("Le thermostat est verrouill\xE9."),this.model.climate?.state==="off"&&e.push("Le thermostat est arr\xEAt\xE9. Changer la consigne ne le remettra pas automatiquement en marche."),this.reasons.some(o=>["hvac_off_window_detection","hvac_off_safety_detection","hvac_off_inhibition","hvac_off_central_mode","overpowering_detected","target_temp_power","target_temp_window_eco","target_temp_window_frost"].includes(o.code))&&e.push("Une priorit\xE9 publi\xE9e intervient. Ce choix ne supprime pas cette priorit\xE9.");let t=this.model.choiceTemperature(i),s=this.model.target,a=K(k(this.model.diagnostic.live,"power.applied_percent"));return this.model.climate?.state==="heat"&&t!==null&&s!==null&&t>s&&a===100&&e.push("La commande appliqu\xE9e est d\xE9j\xE0 \xE0 100 %. Monter la consigne n\u2019augmentera pas la commande actuelle."),i.kind==="temperature"&&this.model.attributes.preset_mode!=="none"&&e.push("Une temp\xE9rature manuelle remplace le preset actif. Vos plannings restent g\xE9r\xE9s \xE0 l\u2019ext\xE9rieur du panneau."),e}};var Lt=class extends xe{constructor(){super(...arguments);this.sending=!1;this.message="";this.failed=!1;this.context="";this.generation=0}willUpdate(){if(!this.diagnostic)return;let e=new tt(this.hass,this.diagnostic).context;if(e!==this.context){let t=!this.context;this.context=e,this.choice=void 0,this.message=t?"":this.sending?"Le thermostat a chang\xE9. V\xE9rifiez les valeurs re\xE7ues.":"",this.failed=!1,this.awaitingPublication=t?void 0:this.diagnostic.lastUpdated,++this.generation}}updated(){clearTimeout(this.etaTimer);let e=Date.parse(this.diagnostic?.lastUpdated??"")+600001-Date.now();Number.isFinite(e)&&e>0&&(this.etaTimer=setTimeout(()=>this.requestUpdate(),e))}disconnectedCallback(){++this.generation,clearTimeout(this.etaTimer),super.disconnectedCallback()}choose(e){this.sending||(this.choice=e,this.message="",this.failed=!1)}cancel(){this.choice=void 0,this.message=""}async previewTemperature(e){if(!this.diagnostic||this.sending)return!1;let t={kind:"temperature",value:e};return new tt(this.hass,this.diagnostic).validate(t)?(this.choose(t),await this.updateComplete,this.renderRoot.querySelector(".apply")?.focus(),!0):!1}async apply(){if(!this.hass||!this.diagnostic||!this.choice||this.sending)return;let e=++this.generation,t=this.choice,s=this.context,a=Symbol();this.activeRequest=a,this.sending=!0,this.message="Envoi en cours\u2026",this.failed=!1;try{let o=await El(this.hass,this.diagnostic,t,s,()=>this.isConnected&&e===this.generation&&!!this.diagnostic&&new tt(this.hass,this.diagnostic).context===s);if(e!==this.generation||!this.isConnected)return;this.awaitingPublication=this.diagnostic.lastUpdated,this.choice=void 0,this.message="Demande envoy\xE9e. Les valeurs affich\xE9es restent celles re\xE7ues de Home Assistant."+(o.receipt?"":" Re\xE7u non disponible.")}catch(o){if(e!==this.generation||!this.isConnected)return;this.failed=!0,this.message=o instanceof Error?o.message:"Envoi impossible. V\xE9rifiez le thermostat avant de r\xE9essayer."}finally{this.activeRequest===a&&(this.activeRequest=void 0,this.sending=!1),this.dispatchEvent(new CustomEvent("observatory-refresh",{detail:{entityId:this.diagnostic?.entityId},bubbles:!0,composed:!0}))}}render(){if(!this.diagnostic)return M;let e=new tt(this.hass,this.diagnostic),t=new Ls(e),s=t.advice(this.choice),a=e.unit??"",o=e.choiceTemperature(this.choice),[r,c]=e.scale,d=Math.min(r,o??r),g=Math.max(c,o??c),f=F=>60+(F-d)/(g-d)*880,u=e.measured,x=e.target,_=e.appliedEffort(),A=e.setpointPosition(),T=e.maintenanceEffort(),w=e.twinPresentation(!!this.choice,this.awaitingPublication!==void 0&&this.awaitingPublication===this.diagnostic.lastUpdated),$=w.eta,P=typeof this.hass?.callService=="function",R=e.presets.find(F=>F.id===(this.choice?.kind==="preset"?this.choice.value:e.attributes.preset_mode)),ee=this.choice?.kind==="preset"?R?.label??this.choice.value:"Temp\xE9rature manuelle",O=Array.from({length:5},(F,Q)=>d+(g-d)*Q/4);return b`<section aria-labelledby="journey-title">
      <div class="heading"><h3 id="journey-title">Trajet thermique</h3>
        <span class="mode">${e.available?e.climate?.state==="off"?"Thermostat arr\xEAt\xE9":e.attributes.hvac_action==="heating"?"En chauffe":e.attributes.hvac_action==="cooling"?"En refroidissement":"En direct":"Thermostat indisponible"}</span></div>
      <div class="readings">
        <div><span class="caption"><i class="dot"></i>Actuellement</span><strong class="measured" aria-label=${u===null?"Temp\xE9rature indisponible":M}>${u===null?"\u2014":C(u,"",1)}<small> ${a}</small></strong></div>
        <div class="destination"><span class="caption"><i class="diamond"></i>Consigne active</span><strong aria-label=${x===null?"Consigne indisponible":M}>${x===null?"\u2014":C(x,"",1)}<small> ${e.unit??""}</small></strong>
          <span class="preset-name">${e.presets.find(F=>F.id===e.attributes.preset_mode)?.label??""}</span></div>
      </div>
      <div class="journey-signals">
      <div class="effort-band" aria-label="Commande et écart à la consigne active">
        <span class="signal-caption">RÉGULATION · COMMANDE</span>
        ${_?b`
          <div class="effort-heading"><span>${_.label}</span><strong>${_.percent>0&&_.percent<.01?"< 0,01 %":C(_.percent," %",2)}</strong></div>
          <div class=${"effort-track "+(_.direction<0?"cool":_.direction===0?"neutral":"heat")}
            role="meter" aria-label=${_.label+" appliqu\xE9e"} aria-valuemin="0" aria-valuemax="100" aria-valuenow=${_.percent} aria-valuetext=${C(_.percent," % appliqu\xE9s",4)}>
            ${_.percent>0?b`<span class=${"effort-arrow "+(_.direction<0?"reverse":_.direction===0?"neutral":"")} style=${`width:${_.percent}%`} aria-hidden="true"></span>`:M}
          </div>`:b`<p class="effort-missing">Commande appliquée · données récentes indisponibles</p>`}
        ${T?b`<div class="maintenance"><strong>Chauffe de maintien</strong><span class="maintenance-caption">Le FF compense les pertes · le PI ajuste</span>
          <div class="contributions"><span>FF <b>+${C(T.ff," %",1)}</b></span><span>PI <b>${C(T.pi," %",1)}</b></span></div>
          <p>La commande entretient la chaleur pour maintenir la consigne. Elle n’indique pas une montée en température mesurée.</p></div>`:M}
        <div class=${"setpoint-position "+(A?.overshoot?"overshoot":"")}>
          ${A?.overshoot?b`<span class="return-chevron" data-direction=${A.direction<0?"left":"right"} aria-hidden="true">${A.direction<0?"\u2039":"\u203A"}</span>
            <span>${A.kind==="above"?"Au-dessus de +":"Au-dessous de \u2212"}${C(A.gap,a,1)} · retour visé vers ${C(A.target,a,1)}</span>`:A?.kind==="aligned"?b`<span class="aligned-mark" aria-hidden="true">◇</span><span>À la consigne affichée</span>`:A?b`<span>Encore ${C(A.gap,a,1)} vers la consigne active</span>`:b`<span>Écart à la consigne indisponible</span>`}
        </div>
      </div>
      <div class="twin-signal" aria-label="Projection du Thermal Twin">
        <div class="twin-heading"><span class="signal-caption">THERMAL TWIN · MODÈLE</span><span class="twin-badge">${w.predicted!==null?"Projection disponible":"En attente"}</span></div>
        ${w.predicted!==null?b`<div class="twin-values">
          <div><span>État estimé</span><strong>${C(w.estimated,a,2)}</strong></div>
          ${w.estimated!==null?b`<svg class="twin-arrow" viewBox="0 0 100 24" aria-hidden="true"><path d="M2 12 H94 M86 5 L94 12 L86 19"/></svg>`:M}
          <div><span>Prédiction publiée</span><strong>${C(w.predicted,a,2)}</strong></div>
        </div><p class="twin-footnote">Sorties du même pas de calcul · horizon non publié</p>`:M}
        <div class=${"twin-eta "+($?"eta available":"")}><span>ETA · consigne active</span><strong>${$?.label??"Non calculable"}</strong></div>
        <p class="eta-detail">${w.detail}</p>
      </div>
      </div>
      ${e.unit!==null?b`<svg class="rail" viewBox="0 0 1000 210" role="img" aria-label=${`\xC9chelle de temp\xE9rature. Mesure ${C(u,a,1)}. Consigne active ${C(x,a,1)}.${this.choice?` Aper\xE7u ${C(o,a,1)}.`:""}`}>
        <line x1="60" x2="940" y1="95" y2="95" class="axis"/>
        ${e.presets.filter(F=>F.temperature!==null).map(F=>ze`<line x1=${f(F.temperature)} x2=${f(F.temperature)} y1="84" y2="108" class="preset-tick"><title>${F.label} ${C(F.temperature,a,1)}</title></line>`)}
        ${u!==null&&x!==null?ze`<line x1=${f(u)} x2=${f(x)} y1="95" y2="95" class="distance"/>`:M}
        ${O.map(F=>ze`<line x1=${f(F)} x2=${f(F)} y1="135" y2="142" class="tick"/><text x=${f(F)} y="171" text-anchor="middle">${C(F,"\xB0",1)}</text>`)}
        ${u!==null?ze`<line x1=${f(u)} x2=${f(u)} y1="44" y2="95" class="measured-line"/><circle cx=${f(u)} cy="95" r="11" class="current-point"/><text x=${f(u)} y="30" text-anchor="middle" class="current-label">${C(u,"\xB0",1)}</text>`:M}
        ${x!==null?ze`<path d=${`M ${f(x)} 83 l 12 12 -12 12 -12 -12 Z`} class="target-point"/>`:M}
        ${this.choice&&o!==null?ze`<line x1=${f(o)} x2=${f(o)} y1="56" y2="124" class="preview-line"/><path d=${`M ${f(o)} 83 l 12 12 -12 12 -12 -12 Z`} class="preview-point"/>`:M}
      </svg>`:M}
      <details class="authority"><summary>Qui a la main ? <span>${t.reasons[0]?.label??"Origine du r\xE9glage non publi\xE9e"}</span></summary>
        <p class="note">Demande conservée · ${C(t.requestedTemperature,a,1)}
          · consigne retenue · ${C(x,a,1)}</p>
        ${t.reasons.length?b`<ul>${t.reasons.map(F=>b`<li>${F.label} <small>(${F.code})</small></li>`)}</ul>`:b`<p class="note">Aucun motif de priorité publié dans cet instantané.</p>`}
        <p class="note">Ces motifs décrivent les priorités du thermostat. Ils n’identifient pas la personne ou l’automatisation à l’origine du changement.</p>
      </details>
      <div class="presets" role="group" aria-label="Choisir un preset">
        ${e.presets.map(F=>b`<button type="button" class=${"preset "+(e.attributes.preset_mode===F.id?"active":"")}
          aria-pressed=${this.choice?.kind==="preset"&&this.choice.value===F.id}
          ?disabled=${!P||!e.canSetPreset||this.sending} @click=${()=>this.choose({kind:"preset",value:F.id})}>
          <span>${F.label}${e.attributes.preset_mode===F.id?b`<span class="active-label"> · actif</span>`:M}</span>
          <strong>${F.temperature===null?"\u2014":C(F.temperature,a,1)}</strong></button>`)}
      </div>
      ${e.canSetTemperature?b`<div class="temperature-control">
        <label for="temperature">Choisir une température <span>${C(o??x,a,1)}</span></label>
        <div class="adjust"><button type="button" aria-label="Diminuer la température" ?disabled=${!P||this.sending||(o??x)<=e.minimum}
          @click=${()=>this.choose({kind:"temperature",value:e.shift(o??x,-1)})}>−</button>
          <input id="temperature" type="range" min=${e.minimum} max=${e.maximum} step=${e.step}
            .value=${Ml(String(o??x))} aria-valuetext=${C(o??x,a,1)} ?disabled=${!P||this.sending}
            @input=${F=>this.choose({kind:"temperature",value:Number(F.currentTarget.value)})}/>
          <button type="button" aria-label="Augmenter la température" ?disabled=${!P||this.sending||(o??x)>=e.maximum}
            @click=${()=>this.choose({kind:"temperature",value:e.shift(o??x,1)})}>+</button></div>
      </div>`:M}
      ${this.choice?b`<div class="preview" aria-label="Aperçu du réglage"><div><span class="caption">Aperçu · ${ee}</span>
        <strong>${o!==null?C(o,a,1):"Temp\xE9rature d\xE9termin\xE9e par le thermostat"}</strong></div>
        <div class="actions"><button type="button" ?disabled=${this.sending} @click=${this.cancel}>Annuler</button>
          <button type="button" class="apply" ?disabled=${this.sending||!e.validate(this.choice)} @click=${this.apply}>${this.sending?"Envoi\u2026":"Appliquer"}</button></div></div>`:M}
      ${s.length?b`<ul class="advice" aria-label="Avant d’appliquer">${s.map(F=>b`<li>${F}</li>`)}</ul>`:M}
      <p class=${"status "+(this.failed?"error":"")} role="status" aria-live="polite">${this.message}</p>
      ${e.locked?b`<p class="note">Thermostat verrouillé.</p>`:M}
      ${e.climate?M:b`<p class="note">Aucun thermostat explicitement lié à ce diagnostic.</p>`}
      ${e.filtered!==null&&x!==null&&Math.abs(e.filtered-x)>.01?b`<p class="note">Consigne filtrée de la régulation : ${C(e.filtered,a,1)}</p>`:M}
      <p class="note scheduling">Les plannings restent gérés par ha-chauffage ou Scheduler.</p>
    </section>`}};Lt.styles=Le`
    :host{display:block;margin-top:22px;--measured:#167883;--target:#a75b19;--effort:#955016;--return:#245e8b;color:var(--primary-text-color,#192b31)}
    *{box-sizing:border-box}section{border-top:1px solid var(--divider-color,#ddd);padding-top:20px}
    .heading{display:flex;justify-content:space-between;align-items:center;gap:12px}h3{margin:0;font-size:16px}.mode,.caption,.note{font-size:12px;color:var(--secondary-text-color,#526268)}
    .readings{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:22px}.readings>div{display:flex;flex-direction:column;gap:5px}.destination{text-align:right;align-items:flex-end}
    .caption{display:flex;gap:7px;align-items:center}.readings strong{font-size:36px;font-weight:500;font-variant-numeric:tabular-nums;line-height:1.2}.readings .measured{font-size:46px;color:var(--measured)}small{font-size:16px;font-weight:400}.preset-name{font-size:13px;color:var(--target);min-height:16px}
    .dot,.diamond{display:inline-block;width:8px;height:8px;flex:none}.dot{border-radius:50%;background:var(--measured)}.diamond{border:2px solid var(--target);transform:rotate(45deg)}
    .effort-band{margin:20px 0 0;min-width:0}.effort-heading{display:flex;justify-content:space-between;gap:12px;font-size:12px;line-height:1.5}.effort-heading strong{font-size:14px;font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap}.effort-track{height:16px;margin-top:5px;position:relative;color:var(--effort)}.effort-track:before{content:"";position:absolute;left:0;right:0;top:7px;height:2px;background:var(--divider-color,#c8d1d3)}.effort-track.cool{color:var(--return)}.effort-track.neutral{color:var(--secondary-text-color,#526268)}.effort-arrow{position:relative;display:block;height:16px;background:currentColor;clip-path:polygon(0 30%,calc(100% - min(10px,50%)) 30%,calc(100% - min(10px,50%)) 0,100% 50%,calc(100% - min(10px,50%)) 100%,calc(100% - min(10px,50%)) 70%,0 70%)}.effort-arrow.reverse{margin-left:auto;transform:scaleX(-1)}.effort-arrow.neutral{clip-path:none;height:6px;top:5px}.effort-missing{margin:0;min-height:42px;font-size:12px;color:var(--secondary-text-color,#526268)}.setpoint-position{display:flex;align-items:center;gap:8px;min-height:30px;font-size:12px;line-height:1.5;color:var(--secondary-text-color,#526268);overflow-wrap:anywhere}.setpoint-position.overshoot{color:var(--return)}.return-chevron{font-size:32px;line-height:24px;font-weight:600;flex:none}.aligned-mark{font-size:20px;line-height:24px;flex:none}
    .rail{display:block;width:100%;height:auto;max-height:180px;overflow:visible;margin:12px 0 0}.axis{stroke:var(--divider-color,#c8d1d3);stroke-width:5;stroke-linecap:round}.distance{stroke:var(--measured);stroke-width:6;stroke-linecap:round}.tick{stroke:var(--secondary-text-color,#526268);stroke-width:1}.preset-tick{stroke:var(--secondary-text-color,#526268);stroke-width:2}
    svg text{font-family:inherit;font-size:22px;fill:var(--secondary-text-color,#526268)}svg .current-label{fill:var(--measured);font-weight:600}.measured-line{stroke:var(--measured);stroke-width:2}.current-point{fill:var(--measured);stroke:var(--card-background-color,#fff);stroke-width:3}.target-point{fill:var(--card-background-color,#fff);stroke:var(--target);stroke-width:4}.preview-line{stroke:var(--target);stroke-width:2;stroke-dasharray:5 5}.preview-point{fill:var(--target);stroke:var(--card-background-color,#fff);stroke-width:3}
    .journey-signals{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:28px;margin-top:26px;border-top:1px solid var(--divider-color,#ddd);border-bottom:1px solid var(--divider-color,#ddd);padding:20px 0}
    .journey-signals .effort-band{margin:0}.signal-caption{display:block;font-size:10px;font-weight:700;letter-spacing:.1em;color:var(--secondary-text-color,#526268);margin-bottom:14px}
    .twin-signal{min-width:0;padding-left:28px;border-left:1px solid var(--divider-color,#ddd);--twin:#536a93}.twin-heading{display:flex;flex-wrap:wrap;gap:4px 12px;align-items:baseline;justify-content:space-between}.twin-badge{font-size:10px;color:var(--twin)}
    .twin-values{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:4px 0 8px}.twin-values>div{min-width:0;display:flex;flex-direction:column;gap:6px}.twin-values>div:last-child{text-align:right}.twin-values span{font-size:11px;color:var(--secondary-text-color,#526268)}.twin-values strong{font-size:24px;line-height:1.2;font-weight:500;white-space:nowrap;font-variant-numeric:tabular-nums;color:var(--twin)}
    .twin-arrow{width:70px;min-width:24px;flex:1;max-width:100px;height:24px;color:var(--twin)}.twin-arrow path{fill:none;stroke:currentColor;stroke-width:1.6;stroke-dasharray:3 4;stroke-linecap:round}.twin-footnote{margin:8px 0 18px;font-size:10px;color:var(--secondary-text-color,#526268);line-height:1.5}
    .twin-eta{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:6px 12px;border-top:1px dashed var(--divider-color,#ddd);padding:12px 0 0;margin-top:12px;font-size:11px;color:var(--secondary-text-color,#526268)}.twin-eta strong{font-size:16px;font-weight:500}.twin-eta.available strong{font-size:22px;color:var(--twin)}.twin-signal .eta-detail{color:var(--secondary-text-color,#526268);font-size:11px;line-height:1.6;margin:8px 0 0}
    .maintenance{margin:14px 0 8px;padding-left:12px;border-left:2px solid var(--effort);font-size:12px;line-height:1.5}.maintenance>strong{font-size:15px;font-weight:500}.maintenance-caption{display:block;font-size:11px;color:var(--secondary-text-color,#526268);margin-top:3px}.maintenance p{font-size:11px;color:var(--secondary-text-color,#526268);margin:6px 0}.contributions{display:flex;flex-wrap:wrap;gap:6px 24px;font-size:11px;margin-top:10px}.contributions b{font-weight:600;font-variant-numeric:tabular-nums;margin-left:5px}
    @media(max-width:700px){.journey-signals{grid-template-columns:1fr;gap:18px}.twin-signal{padding:18px 0 0;border-left:0;border-top:1px solid var(--divider-color,#ddd)}.twin-values strong{font-size:22px}.twin-heading .signal-caption{margin-bottom:12px}}
    @media(prefers-color-scheme:dark){.twin-signal{--twin:#b0c6ee}}
    .presets{display:flex;flex-wrap:wrap;gap:8px}button{font:inherit;color:inherit;cursor:pointer;background:var(--card-background-color,#fff);border:1px solid var(--divider-color,#b5c0c4);border-radius:9px;min-height:44px;padding:9px 13px}button:focus-visible,input:focus-visible{outline:3px solid var(--primary-color,#167883);outline-offset:3px}button:disabled{opacity:.5;cursor:default}button:not(:disabled):hover{border-color:var(--measured)}
    .preset{display:flex;flex:1 1 100px;min-width:0;flex-direction:column;gap:5px;text-align:left;font-size:13px;overflow-wrap:anywhere}.preset strong{font-weight:500;font-size:17px}.preset.active{border-bottom:3px solid var(--target)}.active-label{font-size:11px;color:var(--secondary-text-color,#526268)}.preset[aria-pressed=true]{outline:2px dashed var(--target);outline-offset:2px}
    .temperature-control{margin-top:22px}label{font-size:13px;display:flex;justify-content:space-between;gap:12px}label span{font-weight:600}.adjust{display:flex;gap:14px;align-items:center;margin-top:10px}.adjust button{width:44px;flex:none;font-size:22px;padding:0}input{width:100%;min-width:0;min-height:44px;accent-color:var(--measured);cursor:pointer}
    .authority{margin:0 0 18px;font-size:13px}.authority summary{cursor:pointer;min-height:44px;padding:12px 0}.authority summary span{color:var(--secondary-text-color,#526268);margin-left:8px}.authority ul,.advice{line-height:1.6;padding-left:20px;font-size:13px;overflow-wrap:anywhere}.authority small{font-size:11px}.advice{border-inline-start:3px solid var(--target);list-style:none;padding:4px 12px}
    .preview{display:flex;gap:16px;justify-content:space-between;align-items:center;margin-top:16px;padding:14px 0;border-top:1px dashed var(--target)}.preview strong{display:block;font-size:22px;margin-top:4px}.actions{display:flex;gap:8px}.apply{background:var(--measured);color:#fff;border-color:var(--measured)}.status{font-size:13px;line-height:1.5}.status:empty{display:none}.error{color:var(--error-color,#b31e18)}.note{line-height:1.5;margin:10px 0 0}.scheduling{margin-top:16px}
    @media(max-width:520px){.readings .measured{font-size:38px}.readings strong{font-size:30px}.rail{margin-top:18px}.preview{align-items:stretch;flex-direction:column}.actions button{flex:1}.preset{flex-basis:90px}svg text{font-size:40px}}
    @media(prefers-color-scheme:dark){:host{--measured:#6dcbd2;--target:#efaf6e;--effort:#efaf6e;--return:#9fc9ef}.apply{background:#23666d;border-color:#6dcbd2}}
  `,z([G({attribute:!1})],Lt.prototype,"hass",2),z([G({attribute:!1})],Lt.prototype,"diagnostic",2),z([ne()],Lt.prototype,"choice",2),z([ne()],Lt.prototype,"sending",2),z([ne()],Lt.prototype,"message",2),z([ne()],Lt.prototype,"failed",2),z([ne()],Lt.prototype,"awaitingPublication",2),Lt=z([Fe("smartpi-thermal-journey")],Lt);var zs=class{static describe(i,e,t=!0,s=Date.now()/1e3){let a=qt(e);return t?i==null||typeof i=="number"&&!Number.isFinite(i)?"Valeur absente":a===null||a>s+60?"Horodatage non v\xE9rifiable":s-a>600?"Publication ancienne":"Publication r\xE9cente":"Source indisponible"}},Rs=class n{constructor(i,e){this.tolerance=e;this.episodes=[];this.excluded=0;if(!Number.isFinite(e)||e<0)throw new Error("Tol\xE9rance invalide");let t=[...new Map(i.map(r=>[r.time,r])).values()].filter(r=>Number.isFinite(r.time)).sort((r,c)=>r.time-c.time),s,a="",o;for(let r of t){let c=JSON.stringify([r.climate_id,r.mode,r.target,r.unit]),d=K(r.temperature)!==null&&K(r.target)!==null&&["\xB0C","\xB0F"].includes(r.unit??"")&&["heat","cool"].includes(r.mode??"")&&typeof r.climate_id=="string"&&r.bound===!0&&r.window!=="on"&&r.safety!==!0&&r.overpowering!==!0,g=!!o&&r.time-o.time>n.GAP;if((!d||g||a!==c)&&(s&&(s.endReason=d?g?"Interruption > 10 min":"Consigne, mode, unit\xE9 ou liaison modifi\xE9":"Donn\xE9e ou contexte exclu"),s=void 0),!d){this.excluded++,o=r,a=c;continue}let f=r.temperature,u=r.target;s?s.bracketedSeconds+=r.time-s.end:(s={start:r.time,end:r.time,target:u,baseline:f,unit:r.unit,mode:r.mode,minimum:f,maximum:f,last:f,publications:0,bracketedSeconds:0,firstWithin:null,overshoot:0,endReason:"Fin des observations disponibles",contextKnown:!0},this.episodes.push(s)),s.end=r.time,s.minimum=Math.min(s.minimum,f),s.maximum=Math.max(s.maximum,f),s.last=f,s.publications++,s.contextKnown&&=["on","off"].includes(r.window??"")&&typeof r.safety=="boolean"&&typeof r.overpowering=="boolean",s.firstWithin===null&&Math.abs(u-f)<=e&&(s.firstWithin=r.time-s.start);let x=Math.sign(u-s.baseline);x&&(s.overshoot=Math.max(s.overshoot,x*(f-u))),o=r,a=c}}static{this.GAP=600}},Is=class{constructor(i,e,t,s){this.segments=[];let a=[],o,r=0;for(let c of mi(i).filter(d=>d.time>=t&&d.time<=s)){let d=me(c,"error"),g=me(c,"power.applied_percent"),f=!c.observedAt&&c.unit===e&&!["unknown","unavailable"].includes(c.state)&&d!==null&&g!==null&&g>=0&&g<=100;(!f||o&&(c.time-o.time>600||c.context!==o.context))&&(a.length&&this.segments.push(a),a=[]),f&&(a.push({time:c.time,error:d,applied:g}),r++),o=c}a.length&&this.segments.push(a),this.valid=r}};var Ni=class extends xe{constructor(){super(...arguments);this.points=[];this.tolerance=.2}render(){let e=new Rs(this.points,this.tolerance);return b`<section><h3>Réponses aux consignes normales</h3><p>Observations prospectives locales · maximum 48 h / 1 200 points. Aucun passé Recorder reconstruit.</p>
  <label>Tolérance de lecture (unité de chaque épisode) <select .value=${String(this.tolerance)} @change=${t=>{this.tolerance=Number(t.target.value)}}><option value="0">Exacte</option><option value="0.2">± 0,2</option><option value="0.5">± 0,5</option></select></label>
  <p>Ce seuil de lecture n’est ni la bande morte SmartPI ni une norme de confort. ${e.excluded} point(s) exclu(s) : contexte non confirmé, indisponibilité ou motif de suspension publié.</p>
  ${e.episodes.length?b`<ol>${e.episodes.slice(-20).reverse().map(t=>b`<li><strong>${C(t.baseline,t.unit)} → ${C(t.target,t.unit)} · ${t.mode==="heat"?"Chauffage":"Refroidissement"}</strong>
   <p>${new Date(t.start*1e3).toLocaleString("fr-FR")} → ${new Date(t.end*1e3).toLocaleString("fr-FR")} · ${t.endReason}</p>
   <dl><div><dt>Plage mesurée</dt><dd>${C(t.minimum)} → ${C(t.maximum,t.unit)}</dd></div>
    <div><dt>Première présence dans la tolérance</dt><dd>${t.firstWithin===null?"Non observ\xE9e":Math.round(t.firstWithin/60)+" min depuis le premier point"}</dd></div>
    <div><dt>Dépassement dans le sens du trajet initial</dt><dd>${C(t.overshoot,t.unit)}</dd></div>
    <div><dt>Publications / durée encadrée</dt><dd>${t.publications} / ${Math.round(t.bracketedSeconds/60)} min</dd></div></dl>
   ${t.contextKnown?"":b`<p>Contexte fenêtre, sécurité ou délestage partiellement non archivé. Aucune conclusion causale.</p>`}
  </li>`)}</ol><p>20 derniers segments sur ${e.episodes.length}. Le début est la première observation disponible, pas nécessairement l’instant du changement. L’atteinte est datée à une publication ; aucune durée de stabilisation continue n’est déduite.</p>`:b`<p>En attente d’observations éligibles après cette mise à jour.</p>`}
 </section>`}};Ni.styles=Le`:host{display:block}h3{font-size:16px}p,label{font-size:12px;line-height:1.6;color:var(--secondary-text-color)}select{display:block;min-height:44px;margin:6px 0;background:var(--card-background-color);color:var(--primary-text-color);border:1px solid var(--divider-color);border-radius:6px;padding:8px}select:focus-visible{outline:3px solid var(--primary-color)}ol{padding:0;list-style:none}li{border-top:1px solid var(--divider-color);padding:14px 0;overflow-wrap:anywhere}strong{font-size:14px}dl{display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:12px}dt{color:var(--secondary-text-color)}dd{margin:5px 0}@media(max-width:600px){dl{grid-template-columns:1fr}}`,z([G({attribute:!1})],Ni.prototype,"points",2),z([G({type:Number})],Ni.prototype,"tolerance",2),Ni=z([Fe("smartpi-response-episodes")],Ni);var _t=n=>{let i=K(n);return i===null?"Non observ\xE9":new Date(i*1e3).toLocaleString("fr-FR")},Gr=n=>{let i=K(n);return i===null?"\u2014":`${Math.round(i/60)} min`},Kr={pending:"Observation en cours",observed:"\xC9volution observ\xE9e",excluded:"Interrompu",finished:"Termin\xE9",reached:"Atteinte observ\xE9e"},zl={unknown:"Non renseign\xE9",good:"J\u2019\xE9tais bien",cold:"J\u2019avais froid",hot:"J\u2019avais chaud"},ct=class extends xe{constructor(){super(...arguments);this.tab="receipts";this.loading=!1;this.saving=!1;this.error="";this.message="";this.eraseArmed=!1;this.comparison=[];this.entity="";this.signature="";this.generation=0}updated(){let e=this.diagnostic?.entityId??"";e!==this.entity&&(++this.generation,clearTimeout(this.timer),this.entity=e,this.room=void 0,this.comparison=[],this.eraseArmed=!1,this.error="",this.message="",this.saving=!1,this.refresh());let t=this.diagnostic?.climateId?this.hass?.states[this.diagnostic.climateId]?.last_updated:"",s=`${e}/${this.diagnostic?.lastUpdated}/${t}`;s!==this.signature&&(this.signature=s,clearTimeout(this.timer),this.timer=setTimeout(()=>{this.saving||this.refresh()},500))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.refresh()}disconnectedCallback(){++this.generation,clearTimeout(this.timer),this.saving=!1,this.loading=!1,this.message="",this.eraseArmed=!1,super.disconnectedCallback()}async refresh(){if(!this.hass||!this.entity||this.saving)return;let e=++this.generation,t=this.entity;this.loading=!this.room;try{let s=await new ri(this.hass).request(t,"get");if(e!==this.generation||!this.isConnected)return;this.room=ri.room(s),this.error=""}catch(s){e===this.generation&&(this.error=s instanceof Error?s.message:"Lecture de l\u2019observatoire refus\xE9e. V\xE9rifiez les droits administrateur et le composant.")}finally{e===this.generation&&(this.loading=!1)}}async mutate(e,t={}){if(!this.hass||!this.entity||this.saving)return;let s=this.entity,a=++this.generation;this.saving=!0,this.message="Enregistrement local\u2026",this.error="";try{let o=new ri(this.hass),r=await o.request(s,e,t);if(e==="clear"&&(r=await o.request(s,"get")),a!==this.generation||!this.isConnected)return;this.room=ri.room(r),this.message=e==="clear"?"Les donn\xE9es de cette pi\xE8ce ont \xE9t\xE9 effac\xE9es.":"Enregistr\xE9 localement dans Home Assistant.",this.eraseArmed=!1}catch(o){a===this.generation&&(this.error=o instanceof Error?o.message:"Enregistrement refus\xE9 ou impossible.",this.message="")}finally{a===this.generation&&(this.saving=!1)}}submit(e,t){e.preventDefault();let a=e.currentTarget.elements.namedItem("label");this.mutate(t,{label:a.value})}toggleComparison(e){this.comparison=this.comparison.includes(e)?this.comparison.filter(t=>t!==e):[...this.comparison.slice(-1),e]}trialMetrics(e){let t=e.summary;return b`<dl class="metrics">
      <div><dt>Consigne</dt><dd>${C(e.target,e.unit,1)}</dd></div>
      <div><dt>Mesure au départ</dt><dd>${C(e.baseline,e.unit,1)}</dd></div>
      <div><dt>Plage observée</dt><dd>${C(t.minimum,"",1)} → ${C(t.maximum,e.unit,1)}</dd></div>
      <div><dt>Dernière mesure</dt><dd>${C(t.last,e.unit,1)}</dd></div>
      <div><dt>Écart absolu maximal observé</dt><dd>${C(t.max_abs_error,e.unit,2)}</dd></div>
      <div><dt>Publications retenues / manquantes</dt><dd>${t.publications} / ${e.missing_publications??0}</dd></div>
      <div><dt>Extérieur observé</dt><dd>${C(t.outdoor_min,"",1)} → ${C(t.outdoor_max,e.unit,1)}</dd></div>
      <div><dt>Première / dernière publication</dt><dd>${_t(t.first_at)} · ${_t(t.last_at)}</dd></div>
    </dl>`}render(){let e=this.diagnostic;if(!e)return M;let t=new tt(this.hass,e),s=this.room,a=this.saving||!s,o=s?.trials.filter(r=>this.comparison.includes(r.id))??[];return b`<section aria-labelledby="observatory-title" aria-busy=${this.loading||this.saving}>
      <div class="heading"><div><h2 id="observatory-title">Mon observatoire</h2><p class="muted">${e.name} · souvenirs et observations conservés dans Home Assistant</p></div>
        <button type="button" class="refresh" ?disabled=${this.loading||this.saving} @click=${this.refresh}>Actualiser</button></div>
      <nav class="tabs" aria-label="Vues de l’observatoire">${[["receipts","Re\xE7us de chauffe"],["bookmarks","Souvenirs"],["trials","Mes essais"],["forecasts","Carnet du Twin"]].map(([r,c])=>b`<button type="button" data-view=${r} aria-pressed=${this.tab===r} @click=${()=>{this.tab=r,this.message=""}}>${c}</button>`)}</nav>
      <p class="status" role="status" aria-live="polite">${this.loading?"Lecture du carnet local\u2026":this.message}</p>
      ${this.error?b`<p class="error" role="alert">${this.error}</p>`:M}
      ${s?b`
        ${this.tab==="receipts"?b`<p class="intro">De la demande au retour mesuré, chaque étape garde sa propre preuve.</p>
          ${s.receipts.length?b`<ol class="entries">${[...s.receipts].reverse().map(r=>b`<li>
            <div class="row"><strong>${r.choice.kind==="temperature"?b`Demande de ${C(r.choice.value,r.unit??"",1)}`:b`Preset demandé · ${r.choice.value}`}</strong><span class="badge">${Kr[r.status]??r.status}</span></div>
            <p class="muted">${_t(r.started_at)}</p>
            <ol class="receipt-stages">
              <li><strong>Service</strong><span>${r.service_result==="accepted"?"Retour accept\xE9":r.service_result==="uncertain"?"Retour incertain":"En attente du retour"}</span></li>
              <li><strong>Consigne HA</strong><span>${r.confirmed_at===null?"Non confirm\xE9e":_t(r.confirmed_at)}</span></li>
              <li><strong>Commande publiée</strong><span>${r.applied_at===void 0?"Non observ\xE9e":b`${C(r.applied_percent," %",1)} · ${_t(r.applied_at)}`}</span></li>
              <li><strong>Température</strong><span>${r.response_at===void 0?"\xC9volution non observ\xE9e":b`${C(r.response_temperature,r.unit??"",1)} · ${_t(r.response_at)}`}</span></li>
            </ol>
            ${r.reason?b`<p class="muted">${r.reason}</p>`:M}
            <button type="button" class="quiet" ?disabled=${a} @click=${()=>this.mutate("receipt_delete",{id:r.id})}>Supprimer ce reçu</button>
          </li>`)}</ol>`:b`<p class="empty">Vos prochains changements effectués depuis ce panneau apparaîtront ici.</p>`}
          <p class="foot">Un retour de service ne prouve pas une chauffe physique. L’évolution de température est une observation ; son attribution au chauffage n’est pas démontrée.</p>`:M}
        ${this.tab==="bookmarks"?b`<p class="intro">Gardez le souvenir d’un moment où vous étiez bien, avec ses conditions.</p>
          <form @submit=${r=>this.submit(r,"bookmark_save")}><label for="bookmark-name">Nom du souvenir</label><div class="form-row"><input id="bookmark-name" name="label" maxlength="100" required placeholder="Lecture, canapé…" ?disabled=${a}><button type="submit" ?disabled=${a||!t.available}>Là, je suis bien</button></div></form>
          ${s.bookmarks.length?b`<ul class="entries">${[...s.bookmarks].reverse().map(r=>b`<li><div class="row"><strong>${r.label}</strong><span class="muted">${_t(r.created_at)}</span></div>
            <div class="memory-values"><span>Mesure <strong>${C(r.temperature,r.unit,1)}</strong></span><span>Consigne <strong>${C(r.target,r.unit,1)}</strong></span><span>Extérieur <strong>${C(r.outdoor,r.unit,1)}</strong></span></div>
            <p class="muted">Preset ce jour-là · ${r.preset??"Non publi\xE9"} · aujourd’hui ${C(t.measured,t.unit??"",1)}, extérieur ${C(e.live.temperature&&e.live.temperature.outdoor,t.unit??"",1)}</p>
            <div class="actions"><button type="button" ?disabled=${this.saving||r.unit!==t.unit||!t.validate({kind:"temperature",value:r.target})} @click=${()=>this.dispatchEvent(new CustomEvent("prepare-temperature",{detail:{entityId:e.entityId,value:r.target},bubbles:!0,composed:!0}))}>Préparer ${C(r.target,r.unit,1)}</button>
              <button type="button" class="quiet" ?disabled=${a} @click=${()=>this.mutate("bookmark_delete",{id:r.id})}>Supprimer</button></div>
          </li>`)}</ul>`:b`<p class="empty">Aucun souvenir dans cette pièce.</p>`}<p class="foot">Préparer ouvre un aperçu à valider. Une même température ne garantit pas le même ressenti.</p>`:M}
        ${this.tab==="trials"?b`<p class="intro">Observez un réglage déjà actif, puis notez votre ressenti. Démarrer un essai ne change aucune consigne.</p>
          <form @submit=${r=>this.submit(r,"trial_start")}><label for="trial-name">Nom de l’essai</label><div class="form-row"><input id="trial-name" name="label" maxlength="100" required placeholder="Mon réglage de soirée…" ?disabled=${a}><button type="submit" ?disabled=${a||!t.available||s.trials.some(r=>r.status==="pending")}>Observer ce réglage</button></div></form>
          ${s.trials.length?b`<ul class="entries">${[...s.trials].reverse().map(r=>b`<li><div class="row"><strong>${r.label}</strong><span class="badge">${Kr[r.status]??r.status}</span></div>
            <p class="muted">${_t(r.started_at)}${r.ended_at?b` → ${_t(r.ended_at)}`:M} · ${r.reason??"Collecte des prochaines publications"}</p>
            ${this.trialMetrics(r)}
            <div class="actions"><label class="compare"><input type="checkbox" .checked=${this.comparison.includes(r.id)} @change=${()=>this.toggleComparison(r.id)}>Comparer</label>
              <label>Ressenti <select aria-label=${`Ressenti pour ${r.label}`} .value=${r.feedback} ?disabled=${a} @change=${c=>this.mutate("trial_feedback",{id:r.id,feedback:c.currentTarget.value})}>${Object.entries(zl).map(([c,d])=>b`<option value=${c}>${d}</option>`)}</select></label>
              ${r.status==="pending"?b`<button type="button" ?disabled=${a} @click=${()=>this.mutate("trial_stop",{id:r.id})}>Terminer l’essai</button>`:M}
              <button type="button" class="quiet" ?disabled=${a} @click=${()=>this.mutate("trial_delete",{id:r.id})}>Supprimer</button></div>
          </li>`)}</ul>`:b`<p class="empty">Aucun essai enregistré.</p>`}
          ${o.length===2?b`<section class="comparison"><h3>Deux observations côte à côte</h3>
            ${o[0].unit!==o[1].unit?b`<p>Unités différentes : comparaison numérique désactivée.</p>`:b`<div class="table-wrap"><table><thead><tr><th>Observation</th>${o.map(r=>b`<th>${r.label}</th>`)}</tr></thead><tbody>
              <tr><th>Consigne</th>${o.map(r=>b`<td>${C(r.target,r.unit,1)}</td>`)}</tr>
              <tr><th>Plage mesurée</th>${o.map(r=>b`<td>${C(r.summary.minimum,"",1)} → ${C(r.summary.maximum,r.unit,1)}</td>`)}</tr>
              <tr><th>Extérieur au départ</th>${o.map(r=>b`<td>${C(r.outdoor,r.unit,1)}</td>`)}</tr>
              <tr><th>Publications</th>${o.map(r=>b`<td>${r.summary.publications}</td>`)}</tr>
              <tr><th>Ressenti déclaré</th>${o.map(r=>b`<td>${zl[r.feedback]??r.feedback}</td>`)}</tr>
            </tbody></table></div>`}
            <p class="foot">Conditions et durées peuvent différer. Ces observations ne prouvent pas qu’un réglage a causé un résultat ni une économie.</p></section>`:M}`:M}
        ${this.tab==="forecasts"?b`<p class="intro">Les prévisions sont conservées à leur émission, puis confrontées aux publications suivantes.</p>
          <section class="forecast-validity"><h3>Ce que ce carnet permet de vérifier</h3><p>Chaque ETA est figée à son émission. Le marqueur annoncé indique un meilleur cas sous commande maximale ; le marqueur observé indique la première publication d’atteinte. Ces scénarios ne sont pas équivalents : aucun score de précision ni intervalle de confiance n’est calculé.</p><p>Prévisions de température à horizon fixe : non évaluables ici, l’horizon n’est pas publié. Une évaluation future exigera horizon, commande et conditions comparables.</p></section>
          <p class="counts">${s.forecasts.filter(r=>r.status==="reached").length} atteinte(s) observée(s) · ${s.forecasts.filter(r=>r.status==="excluded").length} épisode(s) interrompu(s) · ${s.forecasts.filter(r=>r.status==="pending").length} en cours</p>
          ${s.forecasts.length?b`<ul class="entries">${[...s.forecasts].reverse().map(r=>b`<li><div class="row"><strong>${C(r.temperature,"",1)} → ${C(r.target,r.unit,1)}</strong><span class="badge">${Kr[r.status]??r.status}</span></div>
            <p class="muted">Prévision publiée le ${_t(r.started_at)}</p>
            <div class="forecast-track" aria-hidden="true"><span style=${"left:"+100*r.eta_s/Math.max(r.eta_s,r.observed_s??0,1)+"%"}>◇</span>${r.status==="reached"?b`<span class="observed" style=${"left:"+100*(r.observed_s??0)/Math.max(r.eta_s,r.observed_s??0,1)+"%"}>●</span>`:M}</div>
            <p class="foot">◇ Meilleur cas : ${_t(r.started_at+r.eta_s)} · ● Atteinte : ${r.status==="reached"?_t(r.observed_at):"Non observ\xE9e"}. Échelle propre à cet épisode, origine à l’émission.</p><div class="memory-values"><span>Meilleur cas annoncé <strong>${Gr(r.eta_s)}</strong></span>
              ${r.status==="reached"?b`<span>Atteinte observée après <strong>${Gr(r.observed_s)}</strong></span><span>Écart au meilleur cas <strong>${Gr((r.observed_s??0)-r.eta_s)}</strong></span>`:M}</div>
            <p class="muted">${r.status==="reached"?b`Première publication d’atteinte : ${_t(r.observed_at)}`:r.reason}</p>
            <button type="button" class="quiet" ?disabled=${a} @click=${()=>this.mutate("forecast_delete",{id:r.id})}>Supprimer cette observation</button>
          </li>`)}</ul>`:b`<p class="empty">La collecte commencera avec les prochains ETA éligibles publiés par le Twin. Aucun passé n’est reconstruit.</p>`}
          <p class="foot">Le meilleur cas n’est pas la trajectoire réelle du PI. L’atteinte est datée à la première publication qui la confirme. Les épisodes interrompus ne comptent pas comme des réussites.</p>`:M}
      `:M}
      ${s?b`<details class="episodes"><summary>Bilans par épisode de consigne</summary><smartpi-response-episodes .points=${s.points??[]}></smartpi-response-episodes></details>`:M}
      <details class="storage"><summary>Conservation et suppression</summary><p class="foot">Collecte locale même panneau fermé : 48 h de points récents, 30 jours d’épisodes, au plus 50 reçus, 50 essais et 100 prévisions par pièce. Les 30 souvenirs maximum restent jusqu’à suppression. Les interruptions ne sont pas comblées.</p>
        ${this.eraseArmed?b`<p>Effacer les souvenirs et tous les épisodes de cette pièce ?</p><div class="actions"><button type="button" ?disabled=${a} @click=${()=>this.mutate("clear")}>Confirmer l’effacement</button><button type="button" @click=${()=>this.eraseArmed=!1}>Annuler</button></div>`:b`<button type="button" ?disabled=${a} @click=${()=>this.eraseArmed=!0}>Effacer les données de cette pièce</button>`}</details>
    </section>`}};ct.styles=Le`
    .episodes{border-top:1px solid var(--divider-color);margin-top:16px}.episodes summary{min-height:44px;padding:14px 0;font-size:13px;cursor:pointer}
    .forecast-validity{border-inline-start:3px solid var(--primary-color);padding-left:12px;margin:16px 0}
    .forecast-track{position:relative;margin:24px 18px;height:20px;border-top:2px solid var(--divider-color)}.forecast-track span{position:absolute;top:-11px;transform:translateX(-50%);color:var(--primary-text-color);font-size:18px}.forecast-track .observed{top:1px;color:var(--primary-color)}
    :host{display:block;margin:20px 0;color:var(--primary-text-color,#192b31)}*{box-sizing:border-box}section{min-width:0}h2{font-size:20px;margin:0}h3{font-size:16px}p{font-size:13px;line-height:1.55}.heading,.row{display:flex;justify-content:space-between;align-items:center;gap:12px}.heading{margin-bottom:12px}.heading p{margin:6px 0 0}.muted,.foot{color:var(--secondary-text-color,#526268)}.muted,.foot,.counts{font-size:12px}.tabs{display:flex;flex-wrap:wrap;gap:7px;border-bottom:1px solid var(--divider-color,#d2dbdd);padding-bottom:12px}.tabs button[aria-pressed=true]{border-color:var(--primary-color,#167883);box-shadow:inset 0 -3px var(--primary-color,#167883)}
    button,input,select{font:inherit;color:inherit;border:1px solid var(--divider-color,#b5c0c4);background:var(--card-background-color,#fff);border-radius:8px;min-height:44px;padding:9px 12px;font-size:13px}button{cursor:pointer}button:disabled{opacity:.5;cursor:default}button:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible{outline:3px solid var(--primary-color,#167883);outline-offset:3px}.quiet{background:transparent;font-size:12px}.status:empty{display:none}.error{color:var(--error-color,#b31e18)}.entries{list-style:none;padding:0;margin:16px 0}.entries>li{padding:18px 0;border-top:1px solid var(--divider-color,#d2dbdd);overflow-wrap:anywhere}.badge{border:1px solid var(--divider-color,#d2dbdd);padding:5px 8px;border-radius:20px;font-size:11px}.receipt-stages{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;list-style:none;padding:0}.receipt-stages li{border-inline-start:2px solid var(--primary-color,#167883);padding-left:10px;display:flex;flex-direction:column;gap:7px;font-size:12px}.receipt-stages strong{font-size:12px}.receipt-stages span{color:var(--secondary-text-color,#526268)}
    form{margin:18px 0}label{font-size:13px;display:block}.form-row{display:flex;gap:8px;margin-top:7px}.form-row input{flex:1;min-width:0}.actions{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-top:12px}.compare{display:flex;align-items:center;gap:7px;min-height:44px}.compare input{min-height:24px;width:24px;height:24px;accent-color:var(--primary-color,#167883)}.memory-values{display:flex;flex-wrap:wrap;gap:14px 28px;font-size:12px}.memory-values strong{display:block;font-size:19px;margin-top:5px;font-weight:500}.metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;font-size:12px}dt{color:var(--secondary-text-color,#526268)}dd{margin:5px 0 0;font-size:14px}.table-wrap{overflow:auto;max-width:100%}table{border-collapse:collapse;min-width:100%;font-size:13px}th,td{text-align:left;padding:10px;border-bottom:1px solid var(--divider-color,#d2dbdd);overflow-wrap:anywhere}.storage{border-top:1px solid var(--divider-color,#d2dbdd);margin-top:18px;padding-top:4px}.storage summary{cursor:pointer;min-height:44px;padding:14px 0;font-size:12px}.empty{padding:20px 0;color:var(--secondary-text-color,#526268)}
    @media(max-width:600px){.receipt-stages{grid-template-columns:repeat(2,minmax(0,1fr))}.heading{align-items:flex-start}.refresh{font-size:12px}.form-row{flex-direction:column}.row{align-items:flex-start;flex-wrap:wrap}.metrics{grid-template-columns:1fr}.tabs button{flex:1 1 125px}.memory-values{gap:14px}}
  `,z([G({attribute:!1})],ct.prototype,"hass",2),z([G({attribute:!1})],ct.prototype,"diagnostic",2),z([ne()],ct.prototype,"tab",2),z([ne()],ct.prototype,"room",2),z([ne()],ct.prototype,"loading",2),z([ne()],ct.prototype,"saving",2),z([ne()],ct.prototype,"error",2),z([ne()],ct.prototype,"message",2),z([ne()],ct.prototype,"eraseArmed",2),z([ne()],ct.prototype,"comparison",2),ct=z([Fe("smartpi-observatory")],ct);var Jt=class extends xe{constructor(){super(...arguments);this.date="";this.source="SmartPI";this.available=!0;this.now=Date.now()/1e3}render(){let e=zs.describe(this.value,this.date,this.available,this.now);return b`<span title=${`${this.source} \xB7 ${this.date||"Date absente"}`}><span aria-hidden="true">${e==="Publication r\xE9cente"?"\u25CF":"\u25CB"}</span> ${e} · ${this.source}
      ${qt(this.date)!==null?b`<time datetime=${this.date}>${new Date(this.date).toLocaleString("fr-FR")}</time>`:""}</span>`}};Jt.styles=Le`:host{display:block;font-size:11px;font-weight:400;line-height:1.5;color:var(--secondary-text-color)}time{display:block;font-variant-numeric:tabular-nums}`,z([G({attribute:!1})],Jt.prototype,"value",2),z([G()],Jt.prototype,"date",2),z([G()],Jt.prototype,"source",2),z([G({type:Boolean})],Jt.prototype,"available",2),z([G({type:Number})],Jt.prototype,"now",2),Jt=z([Fe("smartpi-publication-quality")],Jt);var ji=class extends xe{constructor(){super(...arguments);this.rooms=[];this.end=Date.now()/1e3}render(){let e=this.end-3600;return b`<details><summary>Comparer les pièces · dernière heure de session</summary>
   <p>Mêmes axes de temps, d’écart filtré et de commande dans chaque groupe d’unité. Aucune hiérarchie de performance entre pièces.</p>
   ${["\xB0C","\xB0F"].map(t=>{let s=this.rooms.filter(o=>o.unit===t).map(o=>({...o,trace:new Is(o.samples,t,e,this.end)}));if(!s.length)return"";let a=1;for(let o of s)for(let r of o.trace.segments)for(let c of r)a=Math.max(a,Math.abs(c.error));return b`<h3>${t} · écart ${(-a).toLocaleString("fr-FR")} à ${a.toLocaleString("fr-FR")} · commande 0–100 %</h3>
     <div class="rooms">${s.map(o=>b`<section><h4>${o.name}</h4>
      ${o.trace.valid?b`<svg preserveAspectRatio="none" viewBox="0 0 300 130" role="img" aria-label=${`${o.name} : \xE9cart filtr\xE9 en haut, commande en bas ; ${o.trace.valid} publications`}>
       <path d="M0 35H300 M0 120H300" stroke="var(--divider-color)"/>
       ${o.trace.segments.map(r=>r.filter((c,d)=>d>=r.length-600)).map(r=>ze`<polyline vector-effect="non-scaling-stroke" points=${r.map(c=>`${300*(c.time-e)/3600},${35-28*c.error/a}`).join(" ")} fill="none" stroke="#3288c5" stroke-width="2"/>
        <polyline vector-effect="non-scaling-stroke" points=${r.map(c=>`${300*(c.time-e)/3600},${120-.45*c.applied}`).join(" ")} fill="none" stroke="#c07339" stroke-width="2"/>
        ${r.length===1?ze`<circle cx=${300*(r[0].time-e)/3600} cy=${35-28*r[0].error/a} r="2" fill="#3288c5"/><circle cx=${300*(r[0].time-e)/3600} cy=${120-.45*r[0].applied} r="2" fill="#c07339"/>`:""}`)}
      </svg>`:b`<p>En attente de publications datées avec unité enregistrée.</p>`}
      <p>${o.trace.valid} publications couplées · bleu : consigne filtrée − mesure · orange : commande · 600 derniers points maximum par segment.</p>
      <details><summary>Valeurs accessibles</summary><div class="table"><table><thead><tr><th>Date</th><th>Écart ${t}</th><th>Commande %</th></tr></thead><tbody>${o.trace.segments.flat().slice(-60).map(r=>b`<tr><td>${new Date(r.time*1e3).toLocaleTimeString("fr-FR")}</td><td>${r.error.toLocaleString("fr-FR")}</td><td>${r.applied.toLocaleString("fr-FR")}</td></tr>`)}</tbody></table></div><p>60 dernières publications maximum ; tracé de toute l’heure.</p></details>
     </section>`)}</div>`})}
   ${this.rooms.some(t=>!t.unit)?b`<p>Unité non vérifiable : certaines pièces sont exclues de la comparaison.</p>`:""}
   <p>${new Date(e*1e3).toLocaleTimeString("fr-FR")} → ${new Date(this.end*1e3).toLocaleTimeString("fr-FR")} · Session seulement, sans fusion Recorder. Pas de raccord entre données absentes, changement de contexte ou interruption > 10 min. Les segments relient des publications ; ce ne sont pas des mesures intermédiaires.</p>
  </details>`}};ji.styles=Le`:host{display:block;margin:18px 0;color:var(--primary-text-color)}details{border-top:1px solid var(--divider-color);padding:10px 0}summary{cursor:pointer;min-height:44px;padding:12px 0;font-size:14px;font-weight:600}summary:focus-visible{outline:3px solid var(--primary-color);outline-offset:2px}p{font-size:12px;line-height:1.5;color:var(--secondary-text-color)}h3{font-size:13px}h4{font-size:14px;margin:8px 0}svg{width:100%;height:145px;display:block}.rooms{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px}section{min-width:0;overflow-wrap:anywhere}.table{overflow:auto}table{width:100%;font-size:12px;border-collapse:collapse}td,th{text-align:left;padding:6px;border-bottom:1px solid var(--divider-color)}@media(max-width:500px){.rooms{grid-template-columns:1fr}}`,z([G({attribute:!1})],ji.prototype,"rooms",2),z([G({type:Number})],ji.prototype,"end",2),ji=z([Fe("smartpi-room-comparison")],ji);var Cd=new Intl.DateTimeFormat("fr-FR",{dateStyle:"medium",timeStyle:"short"}),Td=[{title:"R\xE9gulation PI et cha\xEEne U",note:"S\xE9parer commande calcul\xE9e, limitation et commande appliqu\xE9e.",fields:[{label:"Phase",path:"control.phase"},{label:"Mode",path:"control.mode"},{label:"Kp",path:"control.kp",digits:6},{label:"Ki",path:"control.ki",digits:6},{label:"Ti",path:"control.ti_min",unit:" min"},{label:"Part PI",path:"power.pi_percent",unit:" %"},{label:"Part FF",path:"power.ff_percent",unit:" %"},{label:"Commande demand\xE9e",path:"power.command_percent",unit:" %"},{label:"Commande limit\xE9e",path:"power.limited_percent",unit:" %"},{label:"Commande appliqu\xE9e",path:"power.applied_percent",unit:" %"},{label:"Cycle en cours",path:"power.current_cycle_percent",unit:" %"},{label:"Cycle suivant",path:"power.next_cycle_percent",unit:" %"},{label:"\xC9tat saturation",path:"control.saturation_state"},{label:"Int\xE9grale",path:"temperature.integral_error",digits:6},{label:"Gestion int\xE9grale",path:"temperature.integral_mode"},{label:"Anti-windup \u0394u",path:"analysis.control.aw_du",digits:6},{label:"Bande morte",path:"control.in_deadband"},{label:"Proche consigne",path:"control.in_near_band"}]},{title:"Mod\xE8le thermique A / B",note:"Le mod\xE8le 1R1C est appris (A : \xB0C/min \xE0 commande unitaire ; B : min\u207B\xB9) ; sa fiabilit\xE9 est distincte de la valeur affich\xE9e.",fields:[{label:"Gain de chauffe A",path:"model.a",digits:6},{label:"Pertes B",path:"model.b",digits:6},{label:"Confiance A/B",path:"model.confidence"},{label:"Constante \u03C4",path:"model.tau_min",unit:" min",reliable:"model.tau_reliable"},{label:"Fiabilit\xE9 \u03C4",path:"model.tau_reliable"},{label:"Temps mort de chauffe",path:"model.deadtime_heat_s",unit:" s",digits:0,reliable:"model.deadtime_heat_reliable"},{label:"Fiabilit\xE9 chauffe",path:"model.deadtime_heat_reliable"},{label:"Temps mort de refroidissement",path:"model.deadtime_cool_s",unit:" s",digits:0,reliable:"model.deadtime_cool_reliable"},{label:"Fiabilit\xE9 refroidissement",path:"model.deadtime_cool_reliable"},{label:"Stabilit\xE9 A",path:"model.a_stability_ratio",digits:3},{label:"Stabilit\xE9 B",path:"model.b_stability_ratio",digits:3},{label:"D\xE9tection du temps mort",path:"analysis.deadtime.state"},{label:"Derni\xE8re issue chauffe",path:"analysis.deadtime.heat_last_outcome"},{label:"Derni\xE8re issue refroidissement",path:"analysis.deadtime.cool_last_outcome"}]},{title:"Apprentissage et gouvernance",note:"Voir les fen\xEAtres, le bootstrap, les rejets et les d\xE9cisions de gouvernance.",fields:[{label:"Apprentissage autoris\xE9",path:"learning.enabled"},{label:"\xC9tape",path:"learning.stage"},{label:"\xC9tat du bootstrap",path:"learning.bootstrap_status"},{label:"Mesures A",path:"learning.emea_samples_a",digits:0},{label:"Mesures B",path:"learning.emea_samples_b",digits:0},{label:"Mises \xE0 jour A accept\xE9es",path:"learning.accepted_updates_a",digits:0},{label:"Mises \xE0 jour B accept\xE9es",path:"learning.accepted_updates_b",digits:0},{label:"Dernier motif",path:"learning.last_reason"},{label:"D\xE9rive A",path:"learning.a_drift_state"},{label:"D\xE9rive B",path:"learning.b_drift_state"},{label:"R\xE9gime thermique",path:"governance.regime"},{label:"D\xE9cision thermique",path:"governance.thermal_update_decision"},{label:"Raison d\xE9cision",path:"governance.thermal_update_reason"},{label:"D\xE9cision gains",path:"analysis.governance.last_decision_gains"},{label:"Source Kp",path:"analysis.governance.kp_source"},{label:"D\xE9lai de r\xE9ponse",path:"analysis.learning.response_lag.lag_s",unit:" s",digits:0},{label:"Motif d\xE9lai",path:"analysis.learning.response_lag.last_reason"}]},{title:"Feedforward FF1 / FF2 / FF3",note:"Les contributions u_ff sont des ratios (1 = 100 % de commande), pas des watts. Comprendre le refus \xE9ventuel d\u2019une correction.",fields:[{label:"\xC9tat FF3",path:"feedforward.ff3_status"},{label:"Raison FF",path:"analysis.feedforward.reason"},{label:"FF1",path:"analysis.feedforward.u_ff1",digits:6},{label:"FF2",path:"analysis.feedforward.u_ff2",digits:6},{label:"FF3",path:"analysis.feedforward.u_ff3",digits:6},{label:"FF effectif",path:"analysis.feedforward.u_ff_effective",digits:6},{label:"FF2 gel\xE9",path:"analysis.feedforward.ff2_frozen"},{label:"Raison gel FF2",path:"analysis.feedforward.ff2_freeze_reason"},{label:"Observateur stationnaire",path:"feedforward.fftrim.stationary.state"},{label:"Rejet stationnaire",path:"feedforward.fftrim.stationary.last_reject_reason"},{label:"Observateur p\xE9riodique",path:"feedforward.fftrim.periodic.state"},{label:"Rejet p\xE9riodique",path:"feedforward.fftrim.periodic.last_reject_reason"},{label:"Transfert FFTrim",path:"feedforward.fftrim.transfer.state"},{label:"Motif transfert",path:"feedforward.fftrim.transfer.reason"}]},{title:"Thermal Twin",note:"Une pr\xE9diction doit avoir son propre drapeau de fiabilit\xE9.",fields:[{label:"\xC9tat Twin",path:"feedforward.twin_status"},{label:"Mod\xE8le Twin fiable",path:"analysis.twin.twin_model_reliable"},{label:"Temp\xE9rature estim\xE9e",path:"analysis.twin.twin_T_hat",unit:" \xB0C"},{label:"Temp\xE9rature pr\xE9dite",path:"analysis.twin.twin_T_pred",unit:" \xB0C"},{label:"Innovation",path:"analysis.twin.twin_innovation",unit:" \xB0C",digits:4},{label:"RMSE de l\u2019innovation \xB7 EMA",path:"analysis.twin.twin_rmse_30",unit:" \xB0C",digits:4},{label:"\xC9quilibre estim\xE9",path:"analysis.twin.twin_T_steady",unit:" \xB0C",reliable:"analysis.twin.twin_T_steady_reliable"},{label:"Fiabilit\xE9 \xE9quilibre",path:"analysis.twin.twin_T_steady_reliable"},{label:"Consigne atteignable (pr\xE9diction)",path:"analysis.twin.twin_setpoint_reachable",reliable:"analysis.twin.twin_T_steady_reliable"},{label:"ETA",path:"analysis.twin.eta_s",unit:" s",digits:0},{label:"Motif ETA",path:"analysis.twin.eta_reason"}]},{title:"Consigne, trajectoire, calibration",note:"Les \xE9tats internes restent affich\xE9s sans action de pilotage.",fields:[{label:"Consigne filtr\xE9e",path:"setpoint.filtered_setpoint",unit:" \xB0C"},{label:"Trajectoire active",path:"setpoint.trajectory_active"},{label:"Source de trajectoire",path:"setpoint.trajectory_source"},{label:"Boost",path:"setpoint.boost_active"},{label:"Phase trajectoire",path:"analysis.trajectory.phase"},{label:"Freinage n\xE9cessaire",path:"analysis.trajectory.braking_needed"},{label:"Autocalibration",path:"autocalib.state"},{label:"Mod\xE8le d\xE9grad\xE9",path:"autocalib.model_degraded"},{label:"\xC9tat de calibration",path:"calibration.state"},{label:"Tentatives",path:"calibration.retry_count",digits:0}]}],ai=class extends xe{constructor(){super(...arguments);this.narrow=!1;this.selectedId="";this.sessionHistory=new fs}connectedCallback(){super.connectedCallback(),this.freshnessTimer=setInterval(()=>this.requestUpdate(),3e4)}willUpdate(e){e.has("hass")&&this.hass&&this.sessionHistory.collect(pn(this.hass),this.hass.states,Date.now()/1e3,this.hass.config?.unit_system?.temperature)}disconnectedCallback(){clearInterval(this.freshnessTimer),this.freshnessTimer=void 0,this.sessionHistory.clear(),super.disconnectedCallback()}metric(e,t,s="",a=2,o=""){return b`<div class="metric"><span>${e}</span><strong>${C(t,s,a)}</strong><smartpi-publication-quality .now=${Date.now()/1e3} .value=${t} .date=${o}></smartpi-publication-quality></div>`}power(e,t,s){let a=K(t),o=a===null?0:Math.min(100,Math.max(0,a));return b`<div class="power"><div class="power-label"><span>${e}</span><strong>${C(t," %",1)}</strong></div>
      <div class="track" aria-label=${e+" "+C(t," %",1)}>
        <div class=${"fill "+s} style=${"width:"+o+"%"}></div>
      </div></div>`}field(e,t){let s=C(ot(t,e.path,e.reliable),e.unit??"",e.digits??2);return b`<div class="detail" title=${e.path}><span>${e.label}</span><strong>${s}</strong></div>`}showDiagnostic(e){let t=e.live,s=ja(e),a=qn(e),o=!a&&k(t,"learning.stage")==="monitoring",r=b`
          <div class="columns">
            ${["a","b"].map(d=>{let g=K(k(t,`learning.emea_samples_${d}`)),f=K(k(t,`learning.bootstrap_target_${d}`)),u=K(k(t,"learning.history_target")),x=g!==null&&g>=0&&u!==null&&u>0,_=x?Math.min(100,100*g/u):null;return b`<div>
                <div class="flex spread"><strong>${d.toUpperCase()} · ${d==="a"?"chauffe":"pertes thermiques"}</strong>
                  <span>${C(_," %",0)}</span></div>
                ${o?M:b`<progress aria-label=${`Historique de ${d.toUpperCase()}`}
                  max=${u??1} value=${x?Math.min(g,u):M}></progress>`}
                <p class="muted small">${C(g,"",0)} / ${C(u,"",0)} mesures conservées
                  · premier palier ${C(f,"",0)}
                  ${g!==null&&f!==null?g>=f?"atteint":"en cours":""}</p>
                <p class="muted small">Mises à jour acceptées · ${C(k(t,`learning.accepted_updates_${d}`),"",0)}</p>
              </div>`})}
          </div>
          <p class="muted small">Les pourcentages décrivent le remplissage de l’historique.
            Confiance publiée · ${C(k(t,"model.confidence"))}
            · τ fiable · ${C(k(t,"model.tau_reliable"))}</p>
          <div class="columns">
            ${["heat","cool"].map(d=>{let g=k(t,`model.deadtime_${d}_reliable`);return b`<div><strong>Temps mort · ${d==="heat"?"chauffe":"refroidissement"}</strong>
                <p>${g===!0?C(k(t,`model.deadtime_${d}_s`)," s",0):g===!1?"En attente d\u2019une mesure fiable":"Indisponible"}</p>
                <p class="muted small">Dernière issue · ${C(k(t,`analysis.deadtime.${d}_last_outcome`))}</p></div>`})}
          </div>
          ${a?b`<p><strong>Prochaine étape</strong> ·
            ${String(k(t,"learning.bootstrap_status")).includes("waiting response lag")?"Les premi\xE8res mesures sont collect\xE9es. SmartPI attend de r\xE9soudre le d\xE9lai de r\xE9ponse.":k(t,"model.deadtime_heat_reliable")===!1||k(t,"model.deadtime_cool_reliable")===!1?"Acqu\xE9rir les temps morts encore en attente pour d\xE9bloquer les observations correspondantes.":"Collecter les premi\xE8res mesures A et B acceptables par SmartPI."}</p>`:M}
          ${a?b`<p><strong>Étape initiale</strong> · ${C(k(t,"learning.bootstrap_status"))}</p>`:M}
          ${k(t,"learning.enabled")===!1?b`<p>Apprentissage désactivé selon SmartPI.</p>`:M}
          <p>Détection en cours · ${C(k(t,"analysis.deadtime.state"))}
            · attente écoulée ${C(k(t,"analysis.deadtime.waiting_elapsed_s")," s",0)}</p>
          <p>Délai de réponse · ${C(k(t,"analysis.learning.response_lag.lag_s")," s",0)}
            · épisodes ${C(k(t,"analysis.learning.response_lag.episodes"),"",0)}</p>
          <p class="muted small">Motif d’apprentissage · ${C(k(t,"learning.last_reason"))}
            · motif du délai · ${C(k(t,"analysis.learning.response_lag.last_reason"))}</p>
          <p class="muted small">Si les compteurs restent à zéro, les états et motifs ci-dessus
            décrivent la dernière situation publiée. Une nouvelle mesure dépend d’une
            observation exploitable acceptée par SmartPI.</p>
`,c=qt(e.lastUpdated);return b`
      <section class="hero">
        <div class="flex spread">
          <div><div class="eyebrow">THERMOSTAT SÉLECTIONNÉ</div><h2>${e.name}</h2>
            <div class="muted small">${e.climateId??e.entityId}</div></div>
          <span class="tag">${a?"Apprentissage / hyst\xE9r\xE9sis":C(k(t,"control.phase"))}</span>
        </div>
        <p class="muted small">Dernière publication ${c===null?"indisponible":b`<time datetime=${e.lastUpdated??""}>${Cd.format(c*1e3)}</time>`}</p>
        <smartpi-thermal-journey .hass=${this.hass} .diagnostic=${e}
          @observatory-refresh=${d=>{d.detail.entityId===e.entityId&&this.renderRoot.querySelector("smartpi-observatory")?.refresh()}}></smartpi-thermal-journey>
        <div class="metrics">
          ${this.metric("Commande appliqu\xE9e",k(t,"power.applied_percent")," %",1,e.lastUpdated??"")}
          ${this.metric("Temp\xE9rature ext\xE9rieure",k(t,"temperature.outdoor"),new tt(this.hass,e).unit??"",2,e.lastUpdated??"")}
        </div>
        <section class="learn" aria-label="Avancement de l’apprentissage">
          <div class="flex spread"><h3>${o?"Surveillance du mod\xE8le":"Apprentissage du mod\xE8le"}</h3>
            <strong>${C({bootstrap:"Initialisation",learning:"Collecte du mod\xE8le",monitoring:"Surveillance",degraded:"Mod\xE8le \xE0 consolider"}[String(k(t,"learning.stage"))]??k(t,"learning.stage"))}</strong></div>
          ${o?b`<p class="muted small">Collecte initiale achevée · le modèle reste sous surveillance.</p>
            <details class="learning-details"><summary>Mesures, fiabilité et motifs <span class="chevron" aria-hidden="true">⌄</span></summary>${r}</details>`:r}
        </section>
      </section>
      <smartpi-observatory .hass=${this.hass} .diagnostic=${e}
        @prepare-temperature=${d=>{if(d.detail.entityId!==e.entityId)return;let g=this.renderRoot.querySelector("smartpi-thermal-journey");g&&g.previewTemperature(d.detail.value).then(f=>{f&&g.scrollIntoView({block:"center"})})}}></smartpi-observatory>
      <smartpi-visual-diagnostics .hass=${this.hass} .diagnostic=${e} .session=${this.sessionHistory.get(e.entityId)}></smartpi-visual-diagnostics>
      <details class="surface technical"><summary>Diagnostics techniques complets</summary>
      <section><h3>Comprendre la situation</h3><ul>${s.map(d=>b`<li>${d}</li>`)}</ul></section>
      <div class="subhead"><h2>Diagnostics techniques</h2><span class="muted small">Déplier pour comprendre les détails</span></div>
      <div class="details-list">
        ${Td.map(d=>b`<details class="surface">
          <summary>${d.title}<span class="chevron">⌄</span></summary>
          <p class="muted small">${d.note}</p>
          <div class="detail-grid">${d.fields.map(g=>this.field(g,t))}</div>
        </details>`)}
      </div>
      <details class="surface raw"><summary>Diagnostic brut JSON <span class="chevron">⌄</span></summary>
        <pre>${JSON.stringify({schema_version:2,state:e.state,live:e.live,history:e.history},null,2)}</pre>
      </details>
      </details>
    `}thermostatTile(e,t){let s=new tt(this.hass,e),a=s.available?s.climate.state==="off"?"off":s.attributes.preset_mode:void 0,o={frost:"Hors gel",eco:"\xC9co",comfort:"Confort",boost:"Boost",off:"Arr\xEAt",none:"Manuel",activity:"Activit\xE9"},r=typeof a=="string"&&Object.hasOwn(o,a),c=r?a:"unknown",d=r?o[a]:typeof a=="string"&&a.trim()?a:"Mode indisponible",g=s.appliedEffort(),f=qt(e.lastUpdated),u=f!==null&&Date.now()/1e3-f>600;return b`<button type="button" class=${"tile mode-"+c+(t?" selected":"")}
      @click=${()=>{this.selectedId=e.entityId}} aria-pressed=${t}>
      <span class="tile-level" style=${"height:"+(g?.percent??0)+"%"} aria-hidden="true"></span>
      <strong class="tile-name">${e.name}</strong>
      <span class="tile-mode">${d}<span class="tile-check" aria-hidden="true">${t?"\u2713":""}</span></span>
      <span class="big">${C(s.measured,s.unit?" "+s.unit:"")}</span>
      <span class="tile-target" title=${"Thermostat \xB7 "+(s.climate?.last_updated??"Date absente")}>Consigne <b>${C(s.target,s.unit?" "+s.unit:"")}</b></span>
      <span class="tile-bottom" title=${"SmartPI \xB7 "+(e.lastUpdated??"Date absente")}>Filtrée ${C(s.filtered,s.unit?" "+s.unit:"")}</span>
      <span class="tile-command">Commande <b>${g?C(g.percent," %",1):"\u2014"}</b></span>
      <smartpi-publication-quality .now=${Date.now()/1e3} .value=${s.measured} .date=${e.lastUpdated??""} .available=${e.available}></smartpi-publication-quality>
      ${g?M:b`<span class="tile-status">${e.available?u?"Publication ancienne":"Commande indisponible":"Diagnostic indisponible"}</span>`}
    </button>`}render(){let e=pn(this.hass),t=e.find(s=>s.entityId===this.selectedId)??e[0];return b`<div class="header"><ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
       <div class="head-text"><h1>SmartPI Dashboard</h1><span>Comprendre la régulation thermique</span></div>
       <span class="tag readonly">Température & supervision</span></div>
      <main>
        <div class="flex spread intro"><h2>Mes thermostats</h2>
          <span class="muted small">${e.length} diagnostic${e.length>1?"s":""} SmartPI v2</span></div>
        ${e.length===0?b`<section class="surface empty"><h3>Aucun diagnostic SmartPI v2 détecté</h3>
          <p>Rechercher les capteurs sensor.* dotés de schema_version=2 et des objets live/history dans les outils de développement de Home Assistant.</p></section>`:b`<div class="tiles">${e.map(s=>this.thermostatTile(s,t?.entityId===s.entityId))}</div>
          <smartpi-room-comparison .rooms=${e.map(s=>({id:s.entityId,name:s.name,unit:new tt(this.hass,s).unit,samples:this.sessionHistory.get(s.entityId)}))} .end=${Date.now()/1e3}></smartpi-room-comparison>
          ${t?this.showDiagnostic(t):M}`}
        <footer>Source : capteurs SmartPI Diagnostics v2 · Réglage de température et de preset sur sélection explicite</footer>
      </main>`}};ai.styles=Le`
    :host{display:block;min-height:100vh;background:var(--primary-background-color);color:var(--primary-text-color);
      font-family:var(--primary-font-family,Roboto,Arial,sans-serif)}
    *{box-sizing:border-box}
    .header{display:flex;align-items:center;gap:12px;background:var(--app-header-background-color,var(--card-background-color));
      color:var(--app-header-text-color,var(--primary-text-color));padding:10px 18px;border-bottom:1px solid var(--divider-color);min-height:66px}
    .head-text{flex:1}.head-text h1{font-size:20px;margin:0}.head-text span{font-size:12px;opacity:.75}
    .eyebrow{font-size:11px;font-weight:700;letter-spacing:.12em;color:var(--secondary-text-color)}
    .tag{border:1px solid var(--divider-color);border-radius:30px;padding:7px 11px;font-size:12px;white-space:nowrap}
    main{max-width:1260px;margin:auto;padding:23px 18px}
    .flex{display:flex;gap:10px;align-items:center}.spread{justify-content:space-between}.intro{margin-bottom:14px}
    .intro h2,.subhead h2{font-size:22px;margin:5px 0}.small{font-size:12px}.muted{color:var(--secondary-text-color)}
    .tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(175px,1fr));gap:10px;margin-bottom:15px}
    .tile{background:var(--card-background-color);color:inherit;border:1px solid var(--divider-color);border-radius:14px;
      min-height:105px;padding:12px 14px;text-align:left;cursor:pointer;display:flex;flex-direction:column;gap:5px}
    button:focus-visible,summary:focus-visible{outline:3px solid var(--primary-color);outline-offset:3px}
    .tile{overflow-wrap:anywhere;min-width:0}
    .tile{--mode-color:var(--secondary-text-color);position:relative;isolation:isolate;overflow:hidden;border:2px solid var(--mode-color);gap:7px}
    .tile.mode-frost{--mode-color:#3288c5}.tile.mode-eco{--mode-color:#388653}
    .tile.mode-comfort{--mode-color:#c3524b}.tile.mode-boost{--mode-color:#d22f43}
    .tile:hover{box-shadow:0 2px 8px color-mix(in srgb,var(--mode-color) 30%,transparent)}
    .tile.selected{box-shadow:0 0 0 2px var(--card-background-color),0 0 0 4px var(--primary-text-color)}
    .tile-level{position:absolute;inset:auto 0 0;background:var(--mode-color);opacity:.12;z-index:-1;pointer-events:none}
    .tile-name{line-height:1.3}.tile-mode{display:flex;align-items:center;justify-content:space-between;font-size:12px;font-weight:700}
    .tile-check{min-width:14px}.tile-target,.tile-command{display:flex;flex-wrap:wrap;justify-content:space-between;gap:3px 7px;font-size:12px}
    .tile-command{border-top:1px solid var(--divider-color);padding-top:8px;margin-top:3px}
    .tile-status{font-size:11px;color:var(--secondary-text-color)}
    .learning-details{border-top:1px solid var(--divider-color);padding-top:12px}.learning-details summary{font-size:13px;min-height:30px}
    .big{font-size:24px;font-weight:700;font-variant-numeric:tabular-nums}.tile-bottom{font-size:12px;color:var(--secondary-text-color)}
    .hero,.surface{background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:14px}
    .hero{padding:20px;border-inline-start:3px solid var(--primary-color)}.hero h2{margin:4px 0;font-size:25px;overflow-wrap:anywhere}
    .metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:11px;margin-top:14px}
    .metric{background:var(--secondary-background-color,var(--primary-background-color));border-radius:10px;
      padding:14px;display:flex;flex-direction:column;gap:8px;min-width:0}
    .metric span{font-size:12px;color:var(--secondary-text-color)}.metric strong{font-size:21px;overflow-wrap:anywhere}
    .track{height:9px;background:var(--divider-color);border-radius:20px;overflow:hidden;margin-top:8px}
    .fill{height:100%;border-radius:20px}.applied{background:var(--primary-color)}.pi{background:#529ad8}.ff{background:#ab82c6}.cmd{background:#999}
    progress{width:100%;height:16px;accent-color:var(--primary-color)}
    .learn{margin-top:20px;font-size:13px}.columns{display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-top:16px}
    .surface{padding:20px}.surface h3{margin:0 0 13px;font-size:17px}
    .surface p,.surface li{font-size:14px;line-height:1.55}.surface ul{margin:0;padding-left:18px}.surface li{margin-bottom:8px}
    .power{margin:14px 0}.power-label{display:flex;justify-content:space-between;gap:8px;font-size:13px}
    .foot{font-size:12px!important;color:var(--secondary-text-color)}
    .subhead{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:28px 0 12px}
    .details-list{display:grid;gap:10px;margin-bottom:10px}
    summary{display:flex;justify-content:space-between;cursor:pointer;list-style:none;font-weight:600;font-size:15px}
    summary::-webkit-details-marker{display:none}details[open] .chevron{transform:rotate(180deg)}
    .detail-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 18px;margin-top:12px}
    .detail{border-bottom:1px solid var(--divider-color);padding:11px 0;display:flex;justify-content:space-between;gap:12px;font-size:13px}
    .detail span{color:var(--secondary-text-color)}.detail strong{text-align:right;overflow-wrap:anywhere}
    .raw pre{overflow:auto;max-height:340px;background:var(--primary-background-color);padding:12px;border-radius:8px;font-size:11px}
    .soon{margin-top:10px}.empty{margin-bottom:18px}footer{padding:21px 0;color:var(--secondary-text-color);font-size:12px}
    @media(max-width:850px){.metrics{grid-template-columns:repeat(2,1fr)}.columns,.detail-grid{grid-template-columns:1fr}}
    @media(max-width:520px){main{padding:14px 11px}.hero,.surface{padding:15px}.tiles{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
      .tile{padding:10px;min-height:93px}.big{font-size:21px}
      .metric strong{font-size:18px}.hero h2{font-size:23px}.hero .spread{align-items:flex-start;flex-direction:column}
      .subhead{display:block}.readonly{font-size:10px}.head-text h1{font-size:17px}}
  `,z([G({attribute:!1})],ai.prototype,"hass",2),z([G({attribute:!1})],ai.prototype,"panel",2),z([G({type:Boolean})],ai.prototype,"narrow",2),z([ne()],ai.prototype,"selectedId",2),ai=z([Fe("smartpi-dashboard-panel")],ai);export{ai as SmartPIDashboardPanel};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
