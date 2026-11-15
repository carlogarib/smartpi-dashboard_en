var kc=Object.defineProperty;var Sc=Object.getOwnPropertyDescriptor;var S=(n,i,e,t)=>{for(var s=t>1?void 0:t?Sc(i,e):i,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(t?o(i,e,s):o(s))||s);return t&&s&&kc(i,e,s),s};var ds=globalThis,us=ds.ShadowRoot&&(ds.ShadyCSS===void 0||ds.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gr=Symbol(),qa=new WeakMap,Dn=class{constructor(i,e,t){if(this._$cssResult$=!0,t!==gr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=e}get styleSheet(){let i=this.o,e=this.t;if(us&&i===void 0){let t=e!==void 0&&e.length===1;t&&(i=qa.get(e)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),t&&qa.set(e,i))}return i}toString(){return this.cssText}},ms=n=>new Dn(typeof n=="string"?n:n+"",void 0,gr),ve=(n,...i)=>{let e=n.length===1?n[0]:i.reduce((t,s,r)=>t+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Dn(e,n,gr)},Ha=(n,i)=>{if(us)n.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of i){let t=document.createElement("style"),s=ds.litNonce;s!==void 0&&t.setAttribute("nonce",s),t.textContent=e.cssText,n.appendChild(t)}},br=us?n=>n:n=>n instanceof CSSStyleSheet?(i=>{let e="";for(let t of i.cssRules)e+=t.cssText;return ms(e)})(n):n;var{is:Ac,defineProperty:Cc,getOwnPropertyDescriptor:Pc,getOwnPropertyNames:Tc,getOwnPropertySymbols:Mc,getPrototypeOf:Ec}=Object,fs=globalThis,Na=fs.trustedTypes,Lc=Na?Na.emptyScript:"",Rc=fs.reactiveElementPolyfillSupport,On=(n,i)=>n,qn={toAttribute(n,i){switch(i){case Boolean:n=n?Lc:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,i){let e=n;switch(i){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},hs=(n,i)=>!Ac(n,i),ja={attribute:!0,type:String,converter:qn,reflect:!1,useDefault:!1,hasChanged:hs};Symbol.metadata??=Symbol("metadata"),fs.litPropertyMetadata??=new WeakMap;var ni=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,e=ja){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(i,e),!e.noAccessor){let t=Symbol(),s=this.getPropertyDescriptor(i,t,e);s!==void 0&&Cc(this.prototype,i,s)}}static getPropertyDescriptor(i,e,t){let{get:s,set:r}=Pc(this.prototype,i)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){let a=s?.call(this);r?.call(this,o),this.requestUpdate(i,a,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??ja}static _$Ei(){if(this.hasOwnProperty(On("elementProperties")))return;let i=Ec(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(On("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(On("properties"))){let e=this.properties,t=[...Tc(e),...Mc(e)];for(let s of t)this.createProperty(s,e[s])}let i=this[Symbol.metadata];if(i!==null){let e=litPropertyMetadata.get(i);if(e!==void 0)for(let[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let s=this._$Eu(e,t);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){let e=[];if(Array.isArray(i)){let t=new Set(i.flat(1/0).reverse());for(let s of t)e.unshift(br(s))}else i!==void 0&&e.push(br(i));return e}static _$Eu(i,e){let t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(i=>i(this))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){let i=new Map,e=this.constructor.elementProperties;for(let t of e.keys())this.hasOwnProperty(t)&&(i.set(t,this[t]),delete this[t]);i.size>0&&(this._$Ep=i)}createRenderRoot(){let i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ha(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(i=>i.hostConnected?.())}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach(i=>i.hostDisconnected?.())}attributeChangedCallback(i,e,t){this._$AK(i,t)}_$ET(i,e){let t=this.constructor.elementProperties.get(i),s=this.constructor._$Eu(i,t);if(s!==void 0&&t.reflect===!0){let r=(t.converter?.toAttribute!==void 0?t.converter:qn).toAttribute(e,t.type);this._$Em=i,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(i,e){let t=this.constructor,s=t._$Eh.get(i);if(s!==void 0&&this._$Em!==s){let r=t.getPropertyOptions(s),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:qn;this._$Em=s;let a=o.fromAttribute(e,r.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(i,e,t,s=!1,r){if(i!==void 0){let o=this.constructor;if(s===!1&&(r=this[i]),t??=o.getPropertyOptions(i),!((t.hasChanged??hs)(r,e)||t.useDefault&&t.reflect&&r===this._$Ej?.get(i)&&!this.hasAttribute(o._$Eu(i,t))))return;this.C(i,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,e,{useDefault:t,reflect:s,wrapped:r},o){t&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,o??e??this[i]),r!==!0||o!==void 0)||(this._$AL.has(i)||(this.hasUpdated||t||(e=void 0),this._$AL.set(i,e)),s===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[s,r]of t){let{wrapped:o}=r,a=this[s];o!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,r,a)}}let i=!1,e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(t){throw i=!1,this._$EM(),t}i&&this._$AE(e)}willUpdate(i){}_$AE(i){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(i){}firstUpdated(i){}};ni.elementStyles=[],ni.shadowRootOptions={mode:"open"},ni[On("elementProperties")]=new Map,ni[On("finalized")]=new Map,Rc?.({ReactiveElement:ni}),(fs.reactiveElementVersions??=[]).push("2.1.2");var yr=globalThis,Ua=n=>n,gs=yr.trustedTypes,Ba=gs?gs.createPolicy("lit-html",{createHTML:n=>n}):void 0,xr="$lit$",si=`lit$${Math.random().toFixed(9).slice(2)}$`,wr="?"+si,Fc=`<${wr}>`,Ri=document,Nn=()=>Ri.createComment(""),jn=n=>n===null||typeof n!="object"&&typeof n!="function",$r=Array.isArray,Za=n=>$r(n)||typeof n?.[Symbol.iterator]=="function",vr=`[ 	
\f\r]`,Hn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Va=/-->/g,Wa=/>/g,Ei=RegExp(`>|${vr}(?:([^\\s"'>=/]+)(${vr}*=${vr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ga=/'/g,Ka=/"/g,Ja=/^(?:script|style|textarea|title)$/i,_r=n=>(i,...e)=>({_$litType$:n,strings:i,values:e}),b=_r(1),Fe=_r(2),Zd=_r(3),Mt=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Ya=new WeakMap,Li=Ri.createTreeWalker(Ri,129);function Qa(n,i){if(!$r(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ba!==void 0?Ba.createHTML(i):i}var Xa=(n,i)=>{let e=n.length-1,t=[],s,r=i===2?"<svg>":i===3?"<math>":"",o=Hn;for(let a=0;a<e;a++){let c=n[a],p,h,f=-1,u=0;for(;u<c.length&&(o.lastIndex=u,h=o.exec(c),h!==null);)u=o.lastIndex,o===Hn?h[1]==="!--"?o=Va:h[1]!==void 0?o=Wa:h[2]!==void 0?(Ja.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=Ei):h[3]!==void 0&&(o=Ei):o===Ei?h[0]===">"?(o=s??Hn,f=-1):h[1]===void 0?f=-2:(f=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?Ei:h[3]==='"'?Ka:Ga):o===Ka||o===Ga?o=Ei:o===Va||o===Wa?o=Hn:(o=Ei,s=void 0);let y=o===Ei&&n[a+1].startsWith("/>")?" ":"";r+=o===Hn?c+Fc:f>=0?(t.push(p),c.slice(0,f)+xr+c.slice(f)+si+y):c+si+(f===-2?a:y)}return[Qa(n,r+(n[e]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),t]},Un=class n{constructor({strings:i,_$litType$:e},t){let s;this.parts=[];let r=0,o=0,a=i.length-1,c=this.parts,[p,h]=Xa(i,e);if(this.el=n.createElement(p,t),Li.currentNode=this.el.content,e===2||e===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=Li.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let f of s.getAttributeNames())if(f.endsWith(xr)){let u=h[o++],y=s.getAttribute(f).split(si),$=/([.?@])?(.*)/.exec(u);c.push({type:1,index:r,name:$[2],strings:y,ctor:$[1]==="."?vs:$[1]==="?"?ys:$[1]==="@"?xs:zi}),s.removeAttribute(f)}else f.startsWith(si)&&(c.push({type:6,index:r}),s.removeAttribute(f));if(Ja.test(s.tagName)){let f=s.textContent.split(si),u=f.length-1;if(u>0){s.textContent=gs?gs.emptyScript:"";for(let y=0;y<u;y++)s.append(f[y],Nn()),Li.nextNode(),c.push({type:2,index:++r});s.append(f[u],Nn())}}}else if(s.nodeType===8)if(s.data===wr)c.push({type:2,index:r});else{let f=-1;for(;(f=s.data.indexOf(si,f+1))!==-1;)c.push({type:7,index:r}),f+=si.length-1}r++}}static createElement(i,e){let t=Ri.createElement("template");return t.innerHTML=i,t}};function Fi(n,i,e=n,t){if(i===Mt)return i;let s=t!==void 0?e._$Co?.[t]:e._$Cl,r=jn(i)?void 0:i._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,e,t)),t!==void 0?(e._$Co??=[])[t]=s:e._$Cl=s),s!==void 0&&(i=Fi(n,s._$AS(n,i.values),s,t)),i}var bs=class{constructor(i,e){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){let{el:{content:e},parts:t}=this._$AD,s=(i?.creationScope??Ri).importNode(e,!0);Li.currentNode=s;let r=Li.nextNode(),o=0,a=0,c=t[0];for(;c!==void 0;){if(o===c.index){let p;c.type===2?p=new gn(r,r.nextSibling,this,i):c.type===1?p=new c.ctor(r,c.name,c.strings,this,i):c.type===6&&(p=new ws(r,this,i)),this._$AV.push(p),c=t[++a]}o!==c?.index&&(r=Li.nextNode(),o++)}return Li.currentNode=Ri,s}p(i){let e=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(i,t,e),e+=t.strings.length-2):t._$AI(i[e])),e++}},gn=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,e,t,s){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=i,this._$AB=e,this._$AM=t,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode,e=this._$AM;return e!==void 0&&i?.nodeType===11&&(i=e.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,e=this){i=Fi(this,i,e),jn(i)?i===P||i==null||i===""?(this._$AH!==P&&this._$AR(),this._$AH=P):i!==this._$AH&&i!==Mt&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):Za(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==P&&jn(this._$AH)?this._$AA.nextSibling.data=i:this.T(Ri.createTextNode(i)),this._$AH=i}$(i){let{values:e,_$litType$:t}=i,s=typeof t=="number"?this._$AC(i):(t.el===void 0&&(t.el=Un.createElement(Qa(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===s)this._$AH.p(e);else{let r=new bs(s,this),o=r.u(this.options);r.p(e),this.T(o),this._$AH=r}}_$AC(i){let e=Ya.get(i.strings);return e===void 0&&Ya.set(i.strings,e=new Un(i)),e}k(i){$r(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,t,s=0;for(let r of i)s===e.length?e.push(t=new n(this.O(Nn()),this.O(Nn()),this,this.options)):t=e[s],t._$AI(r),s++;s<e.length&&(this._$AR(t&&t._$AB.nextSibling,s),e.length=s)}_$AR(i=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);i!==this._$AB;){let t=Ua(i).nextSibling;Ua(i).remove(),i=t}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}},zi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,e,t,s,r){this.type=1,this._$AH=P,this._$AN=void 0,this.element=i,this.name=e,this._$AM=s,this.options=r,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=P}_$AI(i,e=this,t,s){let r=this.strings,o=!1;if(r===void 0)i=Fi(this,i,e,0),o=!jn(i)||i!==this._$AH&&i!==Mt,o&&(this._$AH=i);else{let a=i,c,p;for(i=r[0],c=0;c<r.length-1;c++)p=Fi(this,a[t+c],e,c),p===Mt&&(p=this._$AH[c]),o||=!jn(p)||p!==this._$AH[c],p===P?i=P:i!==P&&(i+=(p??"")+r[c+1]),this._$AH[c]=p}o&&!s&&this.j(i)}j(i){i===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},vs=class extends zi{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===P?void 0:i}},ys=class extends zi{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==P)}},xs=class extends zi{constructor(i,e,t,s,r){super(i,e,t,s,r),this.type=5}_$AI(i,e=this){if((i=Fi(this,i,e,0)??P)===Mt)return;let t=this._$AH,s=i===P&&t!==P||i.capture!==t.capture||i.once!==t.once||i.passive!==t.passive,r=i!==P&&(t===P||s);s&&this.element.removeEventListener(this.name,this,t),r&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}},ws=class{constructor(i,e,t){this.element=i,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(i){Fi(this,i)}},eo={M:xr,P:si,A:wr,C:1,L:Xa,R:bs,D:Za,V:Fi,I:gn,H:zi,N:ys,U:xs,B:vs,F:ws},zc=yr.litHtmlPolyfillSupport;zc?.(Un,gn),(yr.litHtmlVersions??=[]).push("3.3.3");var to=(n,i,e)=>{let t=e?.renderBefore??i,s=t._$litPart$;if(s===void 0){let r=e?.renderBefore??null;t._$litPart$=s=new gn(i.insertBefore(Nn(),r),r,void 0,e??{})}return s._$AI(n),s};var kr=globalThis,ce=class extends ni{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=to(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Mt}};ce._$litElement$=!0,ce.finalized=!0,kr.litElementHydrateSupport?.({LitElement:ce});var Ic=kr.litElementPolyfillSupport;Ic?.({LitElement:ce});(kr.litElementVersions??=[]).push("4.2.2");var we=n=>(i,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,i)}):customElements.define(n,i)};var Dc={attribute:!0,type:String,converter:qn,reflect:!1,hasChanged:hs},Oc=(n=Dc,i,e)=>{let{kind:t,metadata:s}=e,r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),t==="setter"&&((n=Object.create(n)).wrapped=!0),r.set(e.name,n),t==="accessor"){let{name:o}=e;return{set(a){let c=i.get.call(this);i.set.call(this,a),this.requestUpdate(o,c,n,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,n,a),a}}}if(t==="setter"){let{name:o}=e;return function(a){let c=this[o];i.call(this,a),this.requestUpdate(o,c,n,!0,a)}}throw Error("Unsupported decorator location: "+t)};function U(n){return(i,e)=>typeof e=="object"?Oc(n,i,e):((t,s,r)=>{let o=s.hasOwnProperty(r);return s.constructor.createProperty(r,t),o?Object.getOwnPropertyDescriptor(s,r):void 0})(n,i,e)}function Z(n){return U({...n,state:!0,attribute:!1})}function fe(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)}function _(n,i){return i.split(".").reduce((e,t)=>fe(e)?e[t]:void 0,n)}function K(n){return typeof n=="number"&&Number.isFinite(n)?n:null}function T(n,i="",e=2){let t=K(n);return t!==null?t.toLocaleString("fr-FR",{maximumFractionDigits:e})+i:typeof n=="boolean"?n?"Oui":"Non":typeof n=="string"&&n.trim()!==""?n:"Indisponible"}function Bn(n){return _(n.live,"control.mode")==="hysteresis"||_(n.live,"learning.stage")==="bootstrap"}function ot(n,i,e){if(!(e&&_(n,e)!==!0)&&!(i.startsWith("analysis.twin.")&&!i.endsWith("reliable")&&(_(n,"analysis.twin.twin_model_reliable")!==!0||_(n,"analysis.twin.twin_warming_up")!==!1)))return _(n,i)}function qc(n,i){return Object.values(n.states).find(t=>t.entity_id.startsWith("climate.")&&_(t.attributes,"specific_states.regulation_diagnostics")===i)??null}function bn(n){if(!n||!fe(n.states))return[];let i=[];for(let e of Object.values(n.states)){if(!e?.entity_id?.startsWith("sensor.")||!fe(e.attributes))continue;let t=e.attributes;if(t.schema_version!==2||!fe(t.live)||!fe(t.history))continue;let s=qc(n,e.entity_id),o=(typeof t.friendly_name=="string"?t.friendly_name:e.entity_id).replace(/ SmartPI Diagnostics$/i,"");i.push({entityId:e.entity_id,climateId:s?.entity_id??null,name:typeof s?.attributes.friendly_name=="string"?s.attributes.friendly_name:o,state:e.state,lastUpdated:e.last_updated??null,available:e.state!=="unknown"&&e.state!=="unavailable",temperatureUnit:(()=>{let a=_(s?.attributes,"configuration.temperature_unit")??s?.attributes.temperature_unit??n.config?.unit_system?.temperature;return a==="\xB0C"||a==="\xB0F"?a:null})(),live:e.state==="unknown"||e.state==="unavailable"?{}:t.live,history:t.history})}return i.sort((e,t)=>e.name.localeCompare(t.name,"fr"))}function io(n){let i=[];if(!n.available)return["Capteur indisponible : ses anciens attributs ne repr\xE9sentent pas des valeurs actuelles."];i.push("Le mod\xE8le A/B reste une estimation apprise ; consulter son \xE9tat de confiance avant toute interpr\xE9tation physique."),Bn(n)&&i.push("Apprentissage initial par hyst\xE9r\xE9sis : la commande appliqu\xE9e ne provient pas n\xE9cessairement de la somme PI + FF. Ce d\xE9calage ne prouve pas une anomalie."),_(n.live,"control.in_deadtime_window")===!0&&i.push("Fen\xEAtre de temps mort en cours. Des observations d\u2019apprentissage peuvent \xEAtre rejet\xE9es pendant cette fen\xEAtre."),_(n.live,"model.tau_reliable")===!1&&i.push("Constante de temps \u03C4 d\xE9clar\xE9e non fiable : ne pas interpr\xE9ter sa valeur brute comme une dur\xE9e physique valid\xE9e."),_(n.live,"analysis.twin.twin_T_steady_reliable")===!1&&i.push("Temp\xE9rature d\u2019\xE9quilibre pr\xE9dite non fiable : elle n\u2019est pas utilis\xE9e comme indication de confort ou d\u2019atteignabilit\xE9.");let e=_(n.live,"feedforward.ff3_status");return typeof e=="string"&&e.startsWith("disabled:")&&i.push("FF3 non actif ; motif publi\xE9 par SmartPI : "+e+"."),i}var Hc=["temperature.indoor","setpoint.filtered_setpoint","power.applied_percent","power.command_percent","power.pi_percent","power.ff_percent","model.a","model.b","control.kp","control.ki","temperature.integral_error"];function Ht(n){if(typeof n=="number")return Number.isFinite(n)&&n>0?n:null;if(typeof n!="string"||!/(Z|[+-]\d\d:\d\d)$/.test(n))return null;let i=Date.parse(n);return Number.isFinite(i)?i/1e3:null}function so(n){if(!Array.isArray(n))throw new Error("R\xE9ponse Recorder invalide (liste attendue).");let i=[];for(let e of n){if(!fe(e))continue;let t=Ht(e.lu??e.last_updated);if(t===null)continue;let s=fe(e.a)?e.a:fe(e.attributes)?e.attributes:{},r=typeof e.s=="string"?e.s:typeof e.state=="string"?e.state:"unknown",o=s.schema_version===2&&r!=="unavailable"&&r!=="unknown";i.push({time:t,state:r,history:o&&fe(s.history)?s.history:{},live:o&&fe(s.live)?s.live:{}})}return gi(i)}function gi(n){return[...new Map(n.map(i=>[i.time,i])).values()].sort((i,e)=>i.time-e.time)}function Vn(n){return n.unit==="\xB0C"||n.unit==="\xB0F"?n.unit:null}function Ii(n){return new Set(n.map(Vn)).size===1?Vn(n[0])??"unit\xE9 source":"unit\xE9 source"}function Wn(n){return new Set(n.map(Vn)).size<=1}function ri(n,i){return Vn(n)===Vn(i)&&(n.context??null)===(i.context??null)}function ze(n,i){if(i==="error"){let e=K(_(n.history,"temperature.indoor")),t=K(_(n.history,"setpoint.filtered_setpoint"));return e===null||t===null?null:K(t-e)}return i.startsWith("live.")?K(ot(n.live,i.slice(5))):K(_(n.history,i))}function no(n){if(n.length<2)return null;n.sort((e,t)=>e-t);let i=Math.floor(n.length/2);return n.length%2?n[i]:n[i-1]/2+n[i]/2}function ro(n){let i=[],e,t=!0,s=null,r=null;for(let a of n){let c=ze(a,"error");c!==null&&(e&&!ri(e,a)&&(t=!1),e??=a,i.push(c),s!==null&&(r=Math.max(r??0,a.time-s)),s=a.time)}let o=i.map(Math.abs);return{pairs:i.length,signedMedian:t?no(i):null,absoluteMedian:t?no(o):null,largestInterval:t?r:null}}function Sr(n){return n.some(i=>Hc.some(e=>ze(i,e)!==null))}function ao(n){let i=[];for(let e=1;e<n.length;e++){let t=n[e-1],s=n[e],r=K(_(t.history,"setpoint.filtered_setpoint")),o=K(_(s.history,"setpoint.filtered_setpoint"));ri(t,s)&&r!==null&&o!==null&&r!==o&&i.push({time:s.time,label:`Consigne filtr\xE9e ${r} \u2192 ${o} ${Ii([t,s])}`,provenance:"Variation observ\xE9e entre publications ; ce n\u2019est pas n\xE9cessairement une modification utilisateur."}),t.state!==s.state&&i.push({time:s.time,label:`Phase / \xE9tat : ${t.state} \u2192 ${s.state}`,provenance:"Transition observ\xE9e entre deux \xE9tats du capteur ; instant exact interne non disponible."});for(let[a,c]of[["control.saturation_state","Saturation"],["feedforward.ff3_status","FF3"],["control.in_deadtime_window","Temps mort"],["learning.last_reason","Apprentissage"],["governance.thermal_update_reason","Gouvernance"],["autocalib.state","Autocalibration"]]){let p=_(t.live,a),h=_(s.live,a);p!=null&&h!==void 0&&h!==null&&p!==h&&i.push({time:s.time,label:`${c} : ${String(h)}`,provenance:`Comparaison des publications live enregistr\xE9es ou de session : ${a}.`})}}return i}var _s=class{constructor(){this.buffers=new Map;this.revisions=new Map}collect(i,e,t=Date.now()/1e3,s){let r=new Set(i.map(o=>o.entityId));for(let o of this.buffers.keys())r.has(o)||(this.buffers.delete(o),this.revisions.delete(o));for(let o of i){let a=e[o.entityId]?.last_updated,c=Ht(a);if(!a||c===null||this.revisions.get(o.entityId)===a)continue;this.revisions.set(o.entityId,a);let p=this.buffers.get(o.entityId)??[];if(p.length&&c<=p[p.length-1].time)continue;let h=p.length===0?t:c,f=o.climateId?e[o.climateId]:void 0,y=_(f?.attributes,"configuration.temperature_unit")??f?.attributes.temperature_unit??s,$={time:h,observedAt:p.length===0,unit:y==="\xB0C"||y==="\xB0F"?y:null,context:JSON.stringify([o.climateId,f?.state,y]),state:o.state,history:o.available?o.history:{},live:o.live};this.buffers.set(o.entityId,gi([...p,$]).filter(k=>k.time>=t-48*3600).slice(-12e3))}}get(i){return this.buffers.get(i)??[]}clear(){this.buffers.clear(),this.revisions.clear()}};function oo(n){let i=[],e=(t,s)=>{let r=K(_(t.live,`learning.accepted_updates_${s}`));return r!==null&&Number.isSafeInteger(r)&&r>=0?r:null};for(let t=1;t<n.length;t++){let[s,r]=[n[t-1],n[t]];if(!ri(s,r)||[s,r].some(a=>["unknown","unavailable","inactive"].includes(a.state)))continue;let o={time:r.time,observedAt:r.observedAt,temperature:ze(r,"temperature.indoor")};for(let a of["A","B"]){let c=a.toLowerCase(),p=e(s,c),h=e(r,c),f=ze(r,`model.${c}`),u=a==="A"?`${Ii([r])}/min/u`:"min\u207B\xB9",y=f===null?"valeur indisponible":`${f} ${u}`;p!==null&&h!==null&&h>p&&i.push({...o,kind:a,label:`${a} \xB7 +${h-p} accept\xE9(s) entre ${new Date(s.time*1e3).toLocaleString()} et cette publication \xB7 ${y}`});let $=K(_(s.live,`learning.emea_samples_${c}`)),k=K(_(r.live,`learning.emea_samples_${c}`));!(p!==null&&h!==null&&h>p)&&$!==null&&k!==null&&$>=0&&k>$&&i.push({...o,kind:a,label:`${a} \xB7 +${k-$} mesure(s) collect\xE9e(s) entre ${new Date(s.time*1e3).toLocaleString()} et cette publication \xB7 ${y}`})}for(let[a,c]of[["heat","Chauffe"],["cool","Refroidissement"]]){let p=$=>K(ot($.live,`model.deadtime_${a}_s`,`model.deadtime_${a}_reliable`)),h=p(r),f=`analysis.deadtime.${a}_last_outcome`,u=_(s.live,f),y=typeof u=="string"&&u!=="detected"&&_(r.live,f)==="detected";if(y||h!==null&&h>=0&&h!==p(s)){let $=h!==null&&h>=0?`m\xE9diane ${h} s`:"m\xE9diane indisponible";i.push({...o,kind:c,label:`${c} \xB7 ${y?"d\xE9tection observ\xE9e \xB7 ":""}${$}`})}}}return i}async function lo(n,i,e,t,s=()=>!1){if(!i.startsWith("sensor.")||!Number.isFinite(e)||!Number.isFinite(t)||t<=e||t-e>48*3600)throw new Error("Fen\xEAtre historique invalide.");let r=[];for(let o=e;o<t;o+=12*3600){if(s())throw new Error("Lecture annul\xE9e.");let a=Math.min(t,o+12*3600),c=await n.callWS({type:"history/history_during_period",start_time:new Date(o*1e3).toISOString(),end_time:new Date(a*1e3).toISOString(),entity_ids:[i],include_start_time_state:!1,significant_changes_only:!1,minimal_response:!1,no_attributes:!1});if(!fe(c))throw new Error("Format de r\xE9ponse Recorder non reconnu.");let p=so(c[i]??[]);if(r.push(...p.filter(h=>h.time>=o&&h.time<=a)),r.length>1e5)throw new Error("Volume historique trop important ; utiliser l\u2019historique de session.")}return gi(r)}var Nc={setpoint:[["Trajectoire active","setpoint.trajectory_active"],["Boost actif","setpoint.boost_active"]],temperature:[["Temp\xE9rature ext\xE9rieure","temperature.outdoor"," \xB0C"],["Pente int\xE9rieure publi\xE9e","analysis.control.temperature_slope_h"," \xB0C/h",3]],pi:[["Erreur de la voie P","analysis.control.error_p"," \xB0C",4],["Erreur brute de la voie I","temperature.error"," \xB0C",4],["\xC9tat de l\u2019int\xE9grale","temperature.integral_error","",6],["Gain proportionnel Kp","control.kp","",6],["Gain int\xE9gral Ki","control.ki","",6],["Temps int\xE9gral Ti","control.ti_min"," min"],["Source de Kp","analysis.governance.kp_source"],["D\xE9cision sur les gains","analysis.governance.last_decision_gains"]],ff:[["FF1 \xB7 anticipation thermique","analysis.feedforward.u_ff1"," (ratio)",6],["FF2 \xB7 correction apprise","analysis.feedforward.u_ff2"," (ratio)",6],["FF3 \xB7 correction pr\xE9dictive","analysis.feedforward.u_ff3"," (ratio)",6],["Candidat avec FF3","analysis.feedforward.u_ff_effective"," (ratio)",6],["Bande morte active","control.in_deadband"],["Anticipation avant FF3","analysis.feedforward.u_ff_final"," (ratio)",6],["Motif de gel de FF2","analysis.feedforward.ff2_freeze_reason"],["Observateur stationnaire","feedforward.fftrim.stationary.state"],["Dernier rejet stationnaire","feedforward.fftrim.stationary.last_reject_reason"],["Observateur p\xE9riodique","feedforward.fftrim.periodic.state"],["Dernier rejet p\xE9riodique","feedforward.fftrim.periodic.last_reject_reason"],["Transfert de correction","feedforward.fftrim.transfer.state"],["Motif du transfert","feedforward.fftrim.transfer.reason"]],command:[["Sortie PI publi\xE9e","power.pi_percent"," %"],["Anticipation retenue","power.ff_percent"," %"]],direct:[["\xC9tat de l\u2019hyst\xE9r\xE9sis","control.hysteresis_state"],["Phase de calibration","calibration.state"],["Autocalibration","autocalib.state"]],limits:[["Commande demand\xE9e","power.command_percent"," %"],["Commande appliqu\xE9e","power.applied_percent"," %"],["Saturation d\xE9clar\xE9e","control.saturation_state"],["Temporisation impos\xE9e","analysis.control.forced_by_timing"],["Correction anti-windup \u0394u","analysis.control.aw_du"," (ratio)",6],["Source de protection de l\u2019int\xE9grale","temperature.integral_guard_source"]],applied:[["Cycle engag\xE9","power.current_cycle_percent"," %"],["Candidat au cycle suivant","power.next_cycle_percent"," %"],["Lin\xE9arisation de vanne","power.valve_linearization_enabled"],["Cycle engag\xE9 \xB7 espace lin\xE9aire","power.linear_current_cycle_percent"," %"],["Candidat au cycle suivant \xB7 espace lin\xE9aire","power.linear_next_cycle_percent"," %"],["Statut du retour de commande","feedforward.fftrim.command_ownership.status"]],model:[["Pertes B","model.b"," min\u207B\xB9",6],["Constante thermique \u03C4","model.tau_min"," min",2,"model.tau_reliable"],["Temps mort en chauffe","model.deadtime_heat_s"," s",0,"model.deadtime_heat_reliable"],["Temps mort en refroidissement","model.deadtime_cool_s"," s",0,"model.deadtime_cool_reliable"],["\xC9tape d\u2019apprentissage","learning.stage"],["Dernier motif d\u2019apprentissage","learning.last_reason"],["Gouvernance thermique","governance.thermal_update_decision"],["Motif de gouvernance","governance.thermal_update_reason"],["\xC9tat du jumeau thermique","feedforward.twin_status"],["Temp\xE9rature pr\xE9dite","analysis.twin.twin_T_pred"," \xB0C"],["\xC9quilibre pr\xE9dit","analysis.twin.twin_T_steady"," \xB0C",2,"analysis.twin.twin_T_steady_reliable"]]},jc={pi:6,ff:5,limits:5},bi=class{constructor(i){this.diagnostic=i}get live(){return this.diagnostic.available?this.diagnostic.live:{}}get directMode(){return this.diagnostic.available?["CoolDown","HeatUp","CoolDownFinal"].includes(String(_(this.live,"calibration.state")))||_(this.live,"control.phase")==="Calibration"?"Calibration":Bn(this.diagnostic)||_(this.live,"control.phase")==="Hysteresis"?"Hyst\xE9r\xE9sis":null:null}get bypass(){return this.directMode!==null}get route(){return this.bypass?"direct":_(this.live,"control.mode")==="smartpi"?"pi":"unavailable"}get timingForced(){let i=_(this.live,"analysis.control.forced_by_timing");return typeof i=="boolean"?i:null}get saturation(){let i=_(this.live,"control.saturation_state");return i==="SAT_HI"?"Saturation haute d\xE9clar\xE9e":i==="SAT_LO"?"Saturation basse d\xE9clar\xE9e":null}unit(i){return i?.replace("\xB0C",this.diagnostic.temperatureUnit===void 0?"\xB0C":this.diagnostic.temperatureUnit??"unit\xE9 source")}detail(i,e){let t=i.id==="command"&&this.bypass?"direct":i.id,s=Nc[t]??[];return(e?s:s.slice(0,jc[t]??4)).map(([r,o,a,c,p])=>{let h=ot(this.live,o,p);return{label:r,path:o,reliability:p,value:T(a===void 0?h:K(h),this.unit(a),c)}})}blocks(){let i=this.live,e=this.bypass,t=this.route==="pi"?"Voie SmartPI":"Chemin non v\xE9rifi\xE9",s=(r,o,a,c,p,h,f)=>({id:r,title:o,path:a,value:T(K(_(i,a)),this.unit(c),a==="model.a"?6:2),explanation:p,reason:T(_(i,h)),reasonPath:h,status:f==="Contourn\xE9"?f:K(_(i,a))===null?"Indisponible":f??"Publi\xE9"});return[s("setpoint","Consigne filtr\xE9e","setpoint.filtered_setpoint"," \xB0C","Le fa\xE7onnage agit sur la voie proportionnelle en r\xE9gime Stable. La voie int\xE9grale utilise la consigne brute, absente du contrat historique.","setpoint.trajectory_source"),s("temperature","Temp\xE9rature int\xE9rieure","temperature.indoor"," \xB0C","Mesure publi\xE9e par SmartPI, pas une pr\xE9diction du mod\xE8le.","control.phase"),s("pi","R\xE9gulateur PI","power.pi_percent"," %","P utilise une erreur de consigne filtr\xE9e ; I utilise une erreur brute sign\xE9e par le mode HVAC. Le graphique d\u2019\xE9cart filtr\xE9 ne reconstruit pas cette int\xE9grale.","temperature.integral_mode",e?"Contourn\xE9":t),s("ff","Feedforward","power.ff_percent"," %","Entr\xE9es du feedforward : consigne brute, ext\xE9rieur et mod\xE8le A/B ; corrections apprises et pr\xE9dictives selon disponibilit\xE9. FF1 et FF2 sont combin\xE9s puis born\xE9s ; FF3 modifie cette sortie avec une seconde borne, mais en bande morte le runtime retient FF final sans FF3. Ce n\u2019est pas une somme libre de toutes les contributions.","feedforward.ff3_status",e?"Contourn\xE9":t),s("command",this.directMode??"Commande demand\xE9e",e?"power.applied_percent":"power.command_percent"," %",e?"L\u2019hyst\xE9r\xE9sis ou la calibration utilise un chemin direct. PI + FF ne doit pas \xEAtre reli\xE9 \xE0 la commande appliqu\xE9e dans ce r\xE9gime.":"En voie PI : clamp(PI + FF retenu, 0, 1) en espace lin\xE9aire. FF retenu est power.ff_percent : en bande morte, SmartPI retient FF final sans FF3. Les valeurs sont publi\xE9es, sans recalcul.",e?"control.phase":"control.saturation_state",e?"Voir sortie appliqu\xE9e":"Publi\xE9"),s("limits","Limitations et timing","power.limited_percent"," %","La pente et le maximum pr\xE9c\xE8dent les contraintes de timing ; une courbe de vanne peut ensuite changer l\u2019espace de commande. Aucun motif n\u2019est d\xE9duit d\u2019un simple \xE9cart.","analysis.control.integral_guard_mode",e?"Contourn\xE9":t),s("applied","Commande appliqu\xE9e","power.applied_percent"," %","Sortie publi\xE9e apr\xE8s les contraintes de sortie. Elle ne mesure ni \xE9nergie ni chaleur livr\xE9e ; le cycle en cours est publi\xE9 s\xE9par\xE9ment.","feedforward.fftrim.command_ownership.reason"),s("model","Pi\xE8ce et mod\xE8le A/B","model.a"," \xB0C/min/u","La pi\xE8ce est un syst\xE8me physique. A/B ne sont que son mod\xE8le appris ; la confiance publi\xE9e ne constitue pas une validation physique ind\xE9pendante.","model.confidence")]}chain(){let i=this.live;return[["PI","power.pi_percent",!1],["FF1","analysis.feedforward.u_ff1",!0],["FF2","analysis.feedforward.u_ff2",!0],["FF final","analysis.feedforward.u_ff_final",!0],["FF3","analysis.feedforward.u_ff3",!0],["FF effectif","analysis.feedforward.u_ff_effective",!0],["Hold","power.hold_percent",!1],["Demand\xE9e","power.command_percent",!1],["Limit\xE9e","power.limited_percent",!1],["Appliqu\xE9e","power.applied_percent",!1]].map(([e,t,s])=>{let r=K(_(i,t));return{label:e,path:t,value:r===null?null:r*(s?100:1)}})}};var Uc="uplot",Bc="u-hz",Vc="u-vt",Wc="u-title",Gc="u-wrap",Kc="u-under",Yc="u-over",Zc="u-axis",qi="u-off",Jc="u-select",Qc="u-cursor-x",Xc="u-cursor-y",ep="u-cursor-pt",tp="u-legend",ip="u-live",np="u-inline",sp="u-series",rp="u-marker",co="u-label",ap="u-value",Kn="width",Yn="height";var po="bottom",vn="left",Ar="right",Ur="#000",uo=Ur+"0",Cr="mousemove",mo="mousedown",Pr="mouseup",fo="mouseenter",ho="mouseleave",go="dblclick",op="resize",lp="scroll",bo="change",Ps="dppxchange",Br="--",kn=typeof window<"u",Rr=kn?document:null,xn=kn?window:null,cp=kn?navigator:null,he,ks;function Fr(){let n=devicePixelRatio;he!=n&&(he=n,ks&&Ir(bo,ks,Fr),ks=matchMedia(`(min-resolution: ${he-.001}dppx) and (max-resolution: ${he+.001}dppx)`),Hi(bo,ks,Fr),xn.dispatchEvent(new CustomEvent(Ps)))}function yt(n,i){if(i!=null){let e=n.classList;!e.contains(i)&&e.add(i)}}function zr(n,i){let e=n.classList;e.contains(i)&&e.remove(i)}function Te(n,i,e){n.style[i]=e+"px"}function Nt(n,i,e,t){let s=Rr.createElement(n);return i!=null&&yt(s,i),e?.insertBefore(s,t),s}function Et(n,i){return Nt("div",n,i)}var vo=new WeakMap;function Jt(n,i,e,t,s){let r="translate("+i+"px,"+e+"px)",o=vo.get(n);r!=o&&(n.style.transform=r,vo.set(n,r),i<0||e<0||i>t||e>s?yt(n,qi):zr(n,qi))}var yo=new WeakMap;function xo(n,i,e){let t=i+e,s=yo.get(n);t!=s&&(yo.set(n,t),n.style.background=i,n.style.borderColor=e)}var wo=new WeakMap;function $o(n,i,e,t){let s=i+""+e,r=wo.get(n);s!=r&&(wo.set(n,s),n.style.height=e+"px",n.style.width=i+"px",n.style.marginLeft=t?-i/2+"px":0,n.style.marginTop=t?-e/2+"px":0)}var Vr={passive:!0},pp={...Vr,capture:!0};function Hi(n,i,e,t){i.addEventListener(n,e,t?pp:Vr)}function Ir(n,i,e,t){i.removeEventListener(n,e,Vr)}kn&&Fr();function jt(n,i,e,t){let s;e=e||0,t=t||i.length-1;let r=t<=2147483647;for(;t-e>1;)s=r?e+t>>1:xt((e+t)/2),i[s]<n?e=s:t=s;return n-i[e]<=i[t]-n?e:t}function Zo(n){return(e,t,s)=>{let r=-1,o=-1;for(let a=t;a<=s;a++)if(n(e[a])){r=a;break}for(let a=s;a>=t;a--)if(n(e[a])){o=a;break}return[r,o]}}var Jo=n=>n!=null,Qo=n=>n!=null&&n>0,Es=Zo(Jo),dp=Zo(Qo);function up(n,i,e,t=0,s=!1){let r=s?dp:Es,o=s?Qo:Jo;[i,e]=r(n,i,e);let a=n[i],c=n[i];if(i>-1)if(t==1)a=n[i],c=n[e];else if(t==-1)a=n[e],c=n[i];else for(let p=i;p<=e;p++){let h=n[p];o(h)&&(h<a?a=h:h>c&&(c=h))}return[a??$e,c??-$e]}function Ls(n,i,e,t){let s=So(n),r=So(i);n==i&&(s==-1?(n*=e,i/=e):(n/=e,i*=e));let o=e==10?ai:Xo,a=s==1?xt:Lt,c=r==1?Lt:xt,p=a(o(Ue(n))),h=c(o(Ue(i))),f=wn(e,p),u=wn(e,h);return e==10&&(p<0&&(f=_e(f,-p)),h<0&&(u=_e(u,-h))),t||e==2?(n=f*s,i=u*r):(n=nl(n,f),i=Rs(i,u)),[n,i]}function Wr(n,i,e,t){let s=Ls(n,i,e,t);return n==0&&(s[0]=0),i==0&&(s[1]=0),s}var Gr=.1,_o={mode:3,pad:Gr},Jn={pad:0,soft:null,mode:0},mp={min:Jn,max:Jn};function Ts(n,i,e,t){return Fs(e)?ko(n,i,e):(Jn.pad=e,Jn.soft=t?0:null,Jn.mode=t?3:0,ko(n,i,mp))}function ue(n,i){return n??i}function fp(n,i,e){for(i=ue(i,0),e=ue(e,n.length-1);i<=e;){if(n[i]!=null)return!0;i++}return!1}function ko(n,i,e){let t=e.min,s=e.max,r=ue(t.pad,0),o=ue(s.pad,0),a=ue(t.hard,-$e),c=ue(s.hard,$e),p=ue(t.soft,$e),h=ue(s.soft,-$e),f=ue(t.mode,0),u=ue(s.mode,0),y=i-n,$=ai(y),k=lt(Ue(n),Ue(i)),x=ai(k),M=Ue(x-$);(y<1e-24||M>10)&&(y=0,(n==0||i==0)&&(y=1e-24,f==2&&p!=$e&&(r=0),u==2&&h!=-$e&&(o=0)));let C=y||k||1e3,F=ai(C),E=wn(10,xt(F)),X=C*(y==0?n==0?.1:1:r),H=_e(nl(n-X,E/10),24),D=n>=p&&(f==1||f==3&&H<=p||f==2&&H>=p)?p:$e,ee=lt(a,H<D&&n>=D?D:Ut(D,H)),se=C*(y==0?i==0?.1:1:o),Q=_e(Rs(i+se,E/10),24),I=i<=h&&(u==1||u==3&&Q>=h||u==2&&Q<=h)?h:-$e,ie=Ut(c,Q>I&&i<=I?I:lt(I,Q));return ee==ie&&ee==0&&(ie=100),[ee,ie]}var hp=new Intl.NumberFormat(kn?cp.language:"en-US"),Kr=n=>hp.format(n),wt=Math,Cs=wt.PI,Ue=wt.abs,xt=wt.floor,je=wt.round,Lt=wt.ceil,Ut=wt.min,lt=wt.max,wn=wt.pow,So=wt.sign,ai=wt.log10,Xo=wt.log2,gp=(n,i=1)=>wt.sinh(n)*i,Tr=(n,i=1)=>wt.asinh(n/i),$e=1/0;function Ao(n){return(ai((n^n>>31)-(n>>31))|0)+1}function Dr(n,i,e){return Ut(lt(n,i),e)}function el(n){return typeof n=="function"}function le(n){return el(n)?n:()=>n}var bp=()=>{},tl=n=>n,il=(n,i)=>i,vp=n=>null,Co=n=>!0,Po=(n,i)=>n==i,yp=/\.\d*?(?=9{6,}|0{6,})/gm,ji=n=>{if(rl(n)||yi.has(n))return n;let i=`${n}`,e=i.match(yp);if(e==null)return n;let t=e[0].length-1;if(i.indexOf("e-")!=-1){let[s,r]=i.split("e");return+`${ji(s)}e${r}`}return _e(n,t)};function Di(n,i){return ji(_e(ji(n/i))*i)}function Rs(n,i){return ji(Lt(ji(n/i))*i)}function nl(n,i){return ji(xt(ji(n/i))*i)}function _e(n,i=0){if(rl(n))return n;let e=10**i,t=n*e*(1+Number.EPSILON);return je(t)/e}var yi=new Map;function sl(n){return((""+n).split(".")[1]||"").length}function Xn(n,i,e,t){let s=[],r=t.map(sl);for(let o=i;o<e;o++){let a=Ue(o),c=_e(wn(n,o),a);for(let p=0;p<t.length;p++){let h=n==10?+`${t[p]}e${o}`:t[p]*c,f=(o>=0?0:a)+(o>=r[p]?0:r[p]),u=n==10?h:_e(h,f);s.push(u),yi.set(u,f)}}return s}var Qn={},Yr=[],$n=[null,null],vi=Array.isArray,rl=Number.isInteger,xp=n=>n===void 0;function To(n){return typeof n=="string"}function Fs(n){if(n==null||typeof n!="object")return!1;let i=Object.getPrototypeOf(n);for(;i!==null;){let e=Object.getOwnPropertyDescriptor(i,"constructor");if(e!==void 0)return Object.prototype.hasOwnProperty.call(e,"value")&&(e.value==null||e.value===Object);i=Object.getPrototypeOf(i)}return!0}function wp(n){return n!=null&&typeof n=="object"}var $p=Object.getPrototypeOf(Uint8Array);function Ni(n,i=Fs){let e;if(vi(n)){let t=n.find(s=>s!=null);if(vi(t)||i(t)){e=Array(n.length);for(let s=0;s<n.length;s++)e[s]=Ni(n[s],i)}else e=n.slice()}else if(n instanceof $p)e=n.slice();else if(i(n)){e={};for(let t in n)t!=="__proto__"&&t!=="constructor"&&t!=="prototype"&&Object.prototype.hasOwnProperty.call(n,t)&&Object.defineProperty(e,t,{value:Ni(n[t],i),writable:!0,enumerable:!0,configurable:!0})}else e=n;return e}function qe(n){for(let i=1;i<arguments.length;i++){let e=arguments[i];for(let t in e)t!=="__proto__"&&t!=="constructor"&&t!=="prototype"&&Object.prototype.hasOwnProperty.call(e,t)&&(Object.prototype.hasOwnProperty.call(n,t)&&Fs(n[t])?qe(n[t],Ni(e[t])):Object.prototype.hasOwnProperty.call(n,t)?n[t]=Ni(e[t]):Object.defineProperty(n,t,{value:Ni(e[t]),writable:!0,enumerable:!0,configurable:!0}))}return n}var _p=0,kp=1,Sp=2;function Ap(n,i,e){for(let t=0,s,r=-1;t<i.length;t++){let o=i[t];if(o>r){for(s=o-1;s>=0&&n[s]==null;)n[s--]=null;for(s=o+1;s<e&&n[s]==null;)n[r=s++]=null}}}function Cp(n,i){if(Mp(n)){let o=n[0].slice();for(let a=1;a<n.length;a++)o.push(...n[a].slice(1));return Ep(o[0])||(o=Tp(o)),o}let e=new Set;for(let o=0;o<n.length;o++){let c=n[o][0],p=c.length;for(let h=0;h<p;h++)e.add(c[h])}let t=[Array.from(e).sort((o,a)=>o-a)],s=t[0].length,r=new Map;for(let o=0;o<s;o++)r.set(t[0][o],o);for(let o=0;o<n.length;o++){let a=n[o],c=a[0];for(let p=1;p<a.length;p++){let h=a[p],f=Array(s).fill(void 0),u=i?i[o][p]:kp,y=[];for(let $=0;$<h.length;$++){let k=h[$],x=r.get(c[$]);k===null?u!=_p&&(f[x]=k,u==Sp&&y.push(x)):f[x]=k}Ap(f,y,s),t.push(f)}}return t}var Pp=typeof queueMicrotask>"u"?n=>Promise.resolve().then(n):queueMicrotask;function Tp(n){let i=n[0],e=i.length,t=Array(e);for(let r=0;r<t.length;r++)t[r]=r;t.sort((r,o)=>i[r]-i[o]);let s=[];for(let r=0;r<n.length;r++){let o=n[r],a=Array(e);for(let c=0;c<e;c++)a[c]=o[t[c]];s.push(a)}return s}function Mp(n){let i=n[0][0],e=i.length;for(let t=1;t<n.length;t++){let s=n[t][0];if(s.length!=e)return!1;if(s!=i){for(let r=0;r<e;r++)if(s[r]!=i[r])return!1}}return!0}function Ep(n,i=100){let e=n.length;if(e<=1)return!0;let t=0,s=e-1;for(;t<=s&&n[t]==null;)t++;for(;s>=t&&n[s]==null;)s--;if(s<=t)return!0;let r=lt(1,xt((s-t+1)/i));for(let o=n[t],a=t+r;a<=s;a+=r){let c=n[a];if(c!=null){if(c<=o)return!1;o=c}}return!0}var al=["January","February","March","April","May","June","July","August","September","October","November","December"],ol=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function ll(n){return n.slice(0,3)}var Lp=ol.map(ll),Rp=al.map(ll),Fp={MMMM:al,MMM:Rp,WWWW:ol,WWW:Lp};function Gn(n){return(n<10?"0":"")+n}function zp(n){return(n<10?"00":n<100?"0":"")+n}var Ip={YYYY:n=>n.getFullYear(),YY:n=>(n.getFullYear()+"").slice(2),MMMM:(n,i)=>i.MMMM[n.getMonth()],MMM:(n,i)=>i.MMM[n.getMonth()],MM:n=>Gn(n.getMonth()+1),M:n=>n.getMonth()+1,DD:n=>Gn(n.getDate()),D:n=>n.getDate(),WWWW:(n,i)=>i.WWWW[n.getDay()],WWW:(n,i)=>i.WWW[n.getDay()],HH:n=>Gn(n.getHours()),H:n=>n.getHours(),h:n=>{let i=n.getHours();return i==0?12:i>12?i-12:i},AA:n=>n.getHours()>=12?"PM":"AM",aa:n=>n.getHours()>=12?"pm":"am",a:n=>n.getHours()>=12?"p":"a",mm:n=>Gn(n.getMinutes()),m:n=>n.getMinutes(),ss:n=>Gn(n.getSeconds()),s:n=>n.getSeconds(),fff:n=>zp(n.getMilliseconds())};function Zr(n,i){i=i||Fp;let e=[],t=/\{([a-z]+)\}|[^{]+/gi,s;for(;s=t.exec(n);)e.push(s[0][0]=="{"?Ip[s[1]]:s[0]);return r=>{let o="";for(let a=0;a<e.length;a++)o+=typeof e[a]=="string"?e[a]:e[a](r,i);return o}}var Dp=new Intl.DateTimeFormat().resolvedOptions().timeZone;function Op(n,i){let e;return i=="UTC"||i=="Etc/UTC"?e=new Date(+n+n.getTimezoneOffset()*6e4):i==Dp?e=n:(e=new Date(n.toLocaleString("en-US",{timeZone:i})),e.setMilliseconds(n.getMilliseconds())),e}var cl=n=>n%1==0,Ms=[1,2,2.5,5],qp=Xn(10,-32,0,Ms),pl=Xn(10,0,32,Ms),Hp=pl.filter(cl),Oi=qp.concat(pl),Jr=`
`,dl="{YYYY}",Mo=Jr+dl,ul="{M}/{D}",Zn=Jr+ul,Ss=Zn+"/{YY}",ml="{aa}",Np="{h}:{mm}",yn=Np+ml,Eo=Jr+yn,Lo=":{ss}",be=null;function fl(n){let i=n*1e3,e=i*60,t=e*60,s=t*24,r=s*30,o=s*365,c=(n==1?Xn(10,0,3,Ms).filter(cl):Xn(10,-3,0,Ms)).concat([i,i*5,i*10,i*15,i*30,e,e*5,e*10,e*15,e*30,t,t*2,t*3,t*4,t*6,t*8,t*12,s,s*2,s*3,s*4,s*5,s*6,s*7,s*8,s*9,s*10,s*15,r,r*2,r*3,r*4,r*6,o,o*2,o*5,o*10,o*25,o*50,o*100]),p=[[o,dl,be,be,be,be,be,be,1],[s*28,"{MMM}",Mo,be,be,be,be,be,1],[s,ul,Mo,be,be,be,be,be,1],[t,"{h}"+ml,Ss,be,Zn,be,be,be,1],[e,yn,Ss,be,Zn,be,be,be,1],[i,Lo,Ss+" "+yn,be,Zn+" "+yn,be,Eo,be,1],[n,Lo+".{fff}",Ss+" "+yn,be,Zn+" "+yn,be,Eo,be,1]];function h(f){return(u,y,$,k,x,M)=>{let C=[],F=x>=o,E=x>=r&&x<o,X=f($),H=_e(X*n,3),D=Mr(X.getFullYear(),F?0:X.getMonth(),E||F?1:X.getDate()),ee=_e(D*n,3);if(E||F){let se=E?x/r:0,Q=F?x/o:0,I=H==ee?H:_e(Mr(D.getFullYear()+Q,D.getMonth()+se,1)*n,3),ie=new Date(je(I/n)),R=ie.getFullYear(),Y=ie.getMonth();for(let B=0;I<=k;B++){let ae=Mr(R+Q*B,Y+se*B,1),V=ae-f(_e(ae*n,3));I=_e((+ae+V)*n,3),I<=k&&C.push(I)}}else{let se=x>=s?s:x,Q=xt($)-xt(H),I=ee+Q+Rs(H-ee,se);C.push(I);let ie=f(I),R=ie.getHours()+ie.getMinutes()/e+ie.getSeconds()/t,Y=x/t,B=u.axes[y]._space,ae=M/B;for(;I=_e(I+x,n==1?0:3),!(I>k);)if(Y>1){let V=xt(_e(R+Y,6))%24,pe=f(I).getHours()-V;pe>1&&(pe=-1),I-=pe*t,R=(R+Y)%24;let ye=C[C.length-1];_e((I-ye)/x,3)*ae>=.7&&C.push(I)}else C.push(I)}return C}}return[c,p,h]}var[jp,Up,Bp]=fl(1),[Vp,Wp,Gp]=fl(.001);Xn(2,-53,53,[1]);function Ro(n,i){return n.map(e=>e.map((t,s)=>s==0||s==8||t==null?t:i(s==1||e[8]==0?t:e[1]+t)))}function Fo(n,i){return(e,t,s,r,o)=>{let a=i.find($=>o>=$[0])||i[i.length-1],c,p,h,f,u,y;return t.map($=>{let k=n($),x=k.getFullYear(),M=k.getMonth(),C=k.getDate(),F=k.getHours(),E=k.getMinutes(),X=k.getSeconds(),H=x!=c&&a[2]||M!=p&&a[3]||C!=h&&a[4]||F!=f&&a[5]||E!=u&&a[6]||X!=y&&a[7]||a[1];return c=x,p=M,h=C,f=F,u=E,y=X,H(k)})}}function Kp(n,i){let e=Zr(i);return(t,s,r,o,a)=>s.map(c=>e(n(c)))}function Mr(n,i,e){return new Date(n,i,e)}function zo(n,i){return i(n)}var Yp="{YYYY}-{MM}-{DD} {h}:{mm}{aa}";function Io(n,i){return(e,t,s,r)=>r==null?Br:i(n(t))}function Zp(n,i){let e=n.series[i];return e.width?e.stroke(n,i):e.points.width?e.points.stroke(n,i):null}function Jp(n,i){return n.series[i].fill(n,i)}var Qp={show:!0,live:!0,isolate:!1,mount:bp,markers:{show:!0,width:2,stroke:Zp,fill:Jp,dash:"solid"},idx:null,idxs:null,values:[]};function Xp(n,i){let e=n.cursor.points,t=Et(),s=e.size(n,i);Te(t,Kn,s),Te(t,Yn,s);let r=s/-2;Te(t,"marginLeft",r),Te(t,"marginTop",r);let o=e.width(n,i,s);return o&&Te(t,"borderWidth",o),t}function ed(n,i){let e=n.series[i].points;return e._fill||e._stroke}function td(n,i){let e=n.series[i].points;return e._stroke||e._fill}function id(n,i){return n.series[i].points.size}var Er=[0,0];function nd(n,i,e){return Er[0]=i,Er[1]=e,Er}function As(n,i,e,t=!0){return s=>{s.button==0&&(!t||s.target==i)&&e(s)}}function Lr(n,i,e,t=!0){return s=>{(!t||s.target==i)&&e(s)}}var sd={show:!0,x:!0,y:!0,lock:!1,move:nd,points:{one:!1,show:Xp,size:id,width:0,stroke:td,fill:ed},bind:{mousedown:As,mouseup:As,click:As,dblclick:As,mousemove:Lr,mouseleave:Lr,mouseenter:Lr},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(n,i)=>{i.stopPropagation(),i.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(n,i,e,t,s)=>t-s,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},hl={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},Qr=qe({},hl,{filter:il}),gl=qe({},Qr,{size:10}),bl=qe({},hl,{show:!1}),Xr='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',vl="bold "+Xr,yl=1.5,Do={show:!0,scale:"x",stroke:Ur,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:vl,side:2,grid:Qr,ticks:gl,border:bl,font:Xr,lineGap:yl,rotate:0},rd="Value",ad="Time",Oo={show:!0,scale:"x",auto:!1,sorted:1,min:$e,max:-$e,idxs:[]};function od(n,i,e,t,s){return i.map(r=>r==null?"":Kr(r))}function ld(n,i,e,t,s,r,o){let a=[],c=yi.get(s)||0;e=o?e:_e(Rs(e,s),c);for(let p=e;p<=t;p=_e(p+s,c))a.push(Object.is(p,-0)?0:p);return a}function Or(n,i,e,t,s,r,o){let a=[],c=n.scales[n.axes[i].scale].log,p=c==10?ai:Xo,h=xt(p(e));s=wn(c,h),c==10&&(s=Oi[jt(s,Oi)]);let f=e,u=s*c;c==10&&(u=Oi[jt(u,Oi)]);do a.push(f),f=f+s,c==10&&!yi.has(f)&&(f=_e(f,yi.get(s))),f>=u&&(s=f,u=s*c,c==10&&(u=Oi[jt(u,Oi)]));while(f<=t);return a}function cd(n,i,e,t,s,r,o){let c=n.scales[n.axes[i].scale].asinh,p=t>c?Or(n,i,lt(c,e),t,s):[c],h=t>=0&&e<=0?[0]:[];return(e<-c?Or(n,i,lt(c,-t),-e,s):[c]).reverse().map(u=>-u).concat(h,p)}var xl=/./,pd=/[12357]/,dd=/[125]/,qo=/1/,qr=(n,i,e,t)=>n.map((s,r)=>i==4&&s==0||r%t==0&&e.test(s.toExponential()[s<0?1:0])?s:null);function ud(n,i,e,t,s){let r=n.axes[e],o=r.scale,a=n.scales[o],c=n.valToPos,p=r._space,h=c(10,o),f=c(9,o)-h>=p?xl:c(7,o)-h>=p?pd:c(5,o)-h>=p?dd:qo;if(f==qo){let u=Ue(c(1,o)-h);if(u<p)return qr(i.slice().reverse(),a.distr,f,Lt(p/u)).reverse()}return qr(i,a.distr,f,1)}function md(n,i,e,t,s){let r=n.axes[e],o=r.scale,a=r._space,c=n.valToPos,p=Ue(c(1,o)-c(2,o));return p<a?qr(i.slice().reverse(),3,xl,Lt(a/p)).reverse():i}function fd(n,i,e,t){return t==null?Br:i==null?"":Kr(i)}var Ho={show:!0,scale:"y",stroke:Ur,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:vl,side:3,grid:Qr,ticks:gl,border:bl,font:Xr,lineGap:yl,rotate:0};function hd(n,i){let e=3+(n||1)*2;return _e(e*i,3)}function gd(n,i){let{scale:e,idxs:t}=n.series[0],s=n._data[0],r=n.valToPos(s[t[0]],e,!0),o=n.valToPos(s[t[1]],e,!0),a=Ue(o-r),c=n.series[i],p=a/(c.points.space*he);return t[1]-t[0]<=p}var No={scale:null,auto:!0,sorted:0,min:$e,max:-$e},wl=(n,i,e,t,s)=>s,jo={show:!0,auto:!0,sorted:0,gaps:wl,alpha:1,facets:[qe({},No,{scale:"x"}),qe({},No,{scale:"y"})]},Uo={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:wl,alpha:1,points:{show:gd,filter:null},values:null,min:$e,max:-$e,idxs:[],path:null,clip:null};function bd(n,i,e,t,s){return e/10}var $l={time:!0,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},vd=qe({},$l,{time:!1,ori:1}),Bo={};function _l(n,i){let e=Bo[n];return e||(e={key:n,plots:[],sub(t){e.plots.push(t)},unsub(t){e.plots=e.plots.filter(s=>s!=t)},pub(t,s,r,o,a,c,p){for(let h=0;h<e.plots.length;h++)e.plots[h]!=s&&e.plots[h].pub(t,s,r,o,a,c,p)}},n!=null&&(Bo[n]=e)),e}var _n=1,Hr=2;function Ui(n,i,e){let t=n.mode,s=n.series[i],r=t==2?n._data[i]:n._data,o=n.scales,a=n.bbox,c=r[0],p=t==2?r[1]:r[i],h=t==2?o[s.facets[0].scale]:o[n.series[0].scale],f=t==2?o[s.facets[1].scale]:o[s.scale],u=a.left,y=a.top,$=a.width,k=a.height,x=n.valToPosH,M=n.valToPosV;return h.ori==0?e(s,c,p,h,f,x,M,u,y,$,k,Is,Sn,Os,Sl,Cl):e(s,c,p,h,f,M,x,y,u,k,$,Ds,An,ia,Al,Pl)}function ea(n,i){let e=0,t=0,s=ue(n.bands,Yr);for(let r=0;r<s.length;r++){let o=s[r];o.series[0]==i?e=o.dir:o.series[1]==i&&(o.dir==1?t|=1:t|=2)}return[e,t==1?-1:t==2?1:t==3?2:0]}function yd(n,i,e,t,s){let r=n.mode,o=n.series[i],a=r==2?o.facets[1].scale:o.scale,c=n.scales[a];return s==-1?c.min:s==1?c.max:c.distr==3?c.dir==1?c.min:c.max:0}function oi(n,i,e,t,s,r){return Ui(n,i,(o,a,c,p,h,f,u,y,$,k,x)=>{let M=o.pxRound,C=p.dir*(p.ori==0?1:-1),F=p.ori==0?Sn:An,E,X;C==1?(E=e,X=t):(E=t,X=e);let H=M(f(a[E],p,k,y)),D=M(u(c[E],h,x,$)),ee=M(f(a[X],p,k,y)),se=M(u(r==1?h.max:h.min,h,x,$)),Q=new Path2D(s);return F(Q,ee,se),F(Q,H,se),F(Q,H,D),Q})}function zs(n,i,e,t,s,r){let o=null;if(n.length>0){o=new Path2D;let a=i==0?Os:ia,c=e;for(let f=0;f<n.length;f++){let u=n[f];if(u[1]>u[0]){let y=u[0]-c;y>0&&a(o,c,t,y,t+r),c=u[1]}}let p=e+s-c,h=10;p>0&&a(o,c,t-h/2,p,t+r+h)}return o}function xd(n,i,e){let t=n[n.length-1];t&&t[0]==i?t[1]=e:n.push([i,e])}function ta(n,i,e,t,s,r,o){let a=[],c=n.length;for(let p=s==1?e:t;p>=e&&p<=t;p+=s)if(i[p]===null){let f=p,u=p;if(s==1)for(;++p<=t&&i[p]===null;)u=p;else for(;--p>=e&&i[p]===null;)u=p;let y=r(n[f]),$=u==f?y:r(n[u]),k=f-s;y=o<=0&&k>=0&&k<c?r(n[k]):y;let M=u+s;$=o>=0&&M>=0&&M<c?r(n[M]):$,$>=y&&a.push([y,$])}return a}function Vo(n){return n==0?tl:n==1?je:i=>Di(i,n)}function kl(n){let i=n==0?Is:Ds,e=n==0?(s,r,o,a,c,p)=>{s.arcTo(r,o,a,c,p)}:(s,r,o,a,c,p)=>{s.arcTo(o,r,c,a,p)},t=n==0?(s,r,o,a,c)=>{s.rect(r,o,a,c)}:(s,r,o,a,c)=>{s.rect(o,r,c,a)};return(s,r,o,a,c,p=0,h=0)=>{p==0&&h==0?t(s,r,o,a,c):(p=Ut(p,a/2,c/2),h=Ut(h,a/2,c/2),i(s,r+p,o),e(s,r+a,o,r+a,o+c,p),e(s,r+a,o+c,r,o+c,h),e(s,r,o+c,r,o,h),e(s,r,o,r+a,o,p),s.closePath())}}var Is=(n,i,e)=>{n.moveTo(i,e)},Ds=(n,i,e)=>{n.moveTo(e,i)},Sn=(n,i,e)=>{n.lineTo(i,e)},An=(n,i,e)=>{n.lineTo(e,i)},Os=kl(0),ia=kl(1),Sl=(n,i,e,t,s,r)=>{n.arc(i,e,t,s,r)},Al=(n,i,e,t,s,r)=>{n.arc(e,i,t,s,r)},Cl=(n,i,e,t,s,r,o)=>{n.bezierCurveTo(i,e,t,s,r,o)},Pl=(n,i,e,t,s,r,o)=>{n.bezierCurveTo(e,i,s,t,o,r)};function Tl(n){return(i,e,t,s,r)=>Ui(i,e,(o,a,c,p,h,f,u,y,$,k,x)=>{let{pxRound:M,points:C}=o,F,E;p.ori==0?(F=Is,E=Sl):(F=Ds,E=Al);let X=_e(C.width*he,3),H=(C.size-C.width)/2*he,D=_e(H*2,3),ee=new Path2D,se=new Path2D,{left:Q,top:I,width:ie,height:R}=i.bbox;Os(se,Q-D,I-D,ie+D*2,R+D*2);let Y=B=>{if(c[B]!=null){let ae=M(f(a[B],p,k,y)),V=M(u(c[B],h,x,$));F(ee,ae+H,V),E(ee,ae,V,H,0,Cs*2)}};if(r)r.forEach(Y);else for(let B=t;B<=s;B++)Y(B);return{stroke:X>0?ee:null,fill:ee,clip:se,flags:_n|Hr}})}function Ml(n){return(i,e,t,s,r,o)=>{t!=s&&(r!=t&&o!=t&&n(i,e,t),r!=s&&o!=s&&n(i,e,s),n(i,e,o))}}var wd=Ml(Sn),$d=Ml(An);function El(n){let i=ue(n?.alignGaps,0);return(e,t,s,r)=>Ui(e,t,(o,a,c,p,h,f,u,y,$,k,x)=>{[s,r]=Es(c,s,r);let M=o.pxRound,C=R=>M(f(R,p,k,y)),F=R=>M(u(R,h,x,$)),E,X;p.ori==0?(E=Sn,X=wd):(E=An,X=$d);let H=p.dir*(p.ori==0?1:-1),D={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:_n},ee=D.stroke,se=!1;if(r-s>=k*4){let R=W=>e.posToVal(W,p.key,!0),Y=null,B=null,ae,V,pt,Me=C(a[H==1?s:r]),pe=C(a[s]),ye=C(a[r]),re=R(H==1?pe+1:ye-1);for(let W=H==1?s:r;W>=s&&W<=r;W+=H){let He=a[W],Ee=(H==1?He<re:He>re)?Me:C(He),ge=c[W];Ee==Me?ge!=null?(V=ge,Y==null?(E(ee,Ee,F(V)),ae=Y=B=V):V<Y?Y=V:V>B&&(B=V)):ge===null&&(se=!0):(Y!=null&&X(ee,Me,F(Y),F(B),F(ae),F(V)),ge!=null?(V=ge,E(ee,Ee,F(V)),Y=B=ae=V):(Y=B=null,ge===null&&(se=!0)),Me=Ee,re=R(Me+H))}Y!=null&&Y!=B&&pt!=Me&&X(ee,Me,F(Y),F(B),F(ae),F(V))}else for(let R=H==1?s:r;R>=s&&R<=r;R+=H){let Y=c[R];Y===null?se=!0:Y!=null&&E(ee,C(a[R]),F(Y))}let[I,ie]=ea(e,t);if(o.fill!=null||I!=0){let R=D.fill=new Path2D(ee),Y=o.fillTo(e,t,o.min,o.max,I),B=F(Y),ae=C(a[s]),V=C(a[r]);H==-1&&([V,ae]=[ae,V]),E(R,V,B),E(R,ae,B)}if(!o.spanGaps){let R=[];se&&R.push(...ta(a,c,s,r,H,C,i)),D.gaps=R=o.gaps(e,t,s,r,R),D.clip=zs(R,p.ori,y,$,k,x)}return ie!=0&&(D.band=ie==2?[oi(e,t,s,r,ee,-1),oi(e,t,s,r,ee,1)]:oi(e,t,s,r,ee,ie)),D})}function _d(n){let i=ue(n.align,1),e=ue(n.ascDesc,!1),t=ue(n.alignGaps,0),s=ue(n.extend,!1);return(r,o,a,c)=>Ui(r,o,(p,h,f,u,y,$,k,x,M,C,F)=>{[a,c]=Es(f,a,c);let E=p.pxRound,{left:X,width:H}=r.bbox,D=pe=>E($(pe,u,C,x)),ee=pe=>E(k(pe,y,F,M)),se=u.ori==0?Sn:An,Q={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:_n},I=Q.stroke,ie=u.dir*(u.ori==0?1:-1),R=ee(f[ie==1?a:c]),Y=D(h[ie==1?a:c]),B=Y,ae=Y;s&&i==-1&&(ae=X,se(I,ae,R)),se(I,Y,R);for(let pe=ie==1?a:c;pe>=a&&pe<=c;pe+=ie){let ye=f[pe];if(ye==null)continue;let re=D(h[pe]),W=ee(ye);i==1?se(I,re,R):se(I,B,W),se(I,re,W),R=W,B=re}let V=B;s&&i==1&&(V=X+H,se(I,V,R));let[pt,Me]=ea(r,o);if(p.fill!=null||pt!=0){let pe=Q.fill=new Path2D(I),ye=p.fillTo(r,o,p.min,p.max,pt),re=ee(ye);se(pe,V,re),se(pe,ae,re)}if(!p.spanGaps){let pe=[];pe.push(...ta(h,f,a,c,ie,D,t));let ye=p.width*he/2,re=e||i==1?ye:-ye,W=e||i==-1?-ye:ye;pe.forEach(He=>{He[0]+=re,He[1]+=W}),Q.gaps=pe=p.gaps(r,o,a,c,pe),Q.clip=zs(pe,u.ori,x,M,C,F)}return Me!=0&&(Q.band=Me==2?[oi(r,o,a,c,I,-1),oi(r,o,a,c,I,1)]:oi(r,o,a,c,I,Me)),Q})}function Wo(n,i,e,t,s,r,o=$e){if(n.length>1){let a=null;for(let c=0,p=1/0;c<n.length;c++)if(i[c]!==void 0){if(a!=null){let h=Ue(n[c]-n[a]);h<p&&(p=h,o=Ue(e(n[c],t,s,r)-e(n[a],t,s,r)))}a=c}}return o}function kd(n){n=n||Qn;let i=ue(n.size,[.6,$e,1]),e=n.align||0,t=n.gap||0,s=n.radius;s=s==null?[0,0]:typeof s=="number"?[s,0]:s;let r=le(s),o=1-i[0],a=ue(i[1],$e),c=ue(i[2],1),p=ue(n.disp,Qn),h=ue(n.each,y=>{}),{fill:f,stroke:u}=p;return(y,$,k,x)=>Ui(y,$,(M,C,F,E,X,H,D,ee,se,Q,I)=>{let ie=M.pxRound,R=e,Y=t*he,B=a*he,ae=c*he,V,pt;E.ori==0?[V,pt]=r(y,$):[pt,V]=r(y,$);let Me=E.dir*(E.ori==0?1:-1),pe=E.ori==0?Os:ia,ye=E.ori==0?h:(N,ke,Ne,Xi,_i,Vt,ki)=>{h(N,ke,Ne,_i,Xi,ki,Vt)},re=ue(y.bands,Yr).find(N=>N.series[0]==$),W=re!=null?re.dir:0,He=M.fillTo(y,$,M.min,M.max,W),it=ie(D(He,X,I,se)),Ee,ge,zt,ft=Q,Re=ie(M.width*he),Bt=!1,ei=null,kt=null,pi=null,Zi=null;f!=null&&(Re==0||u!=null)&&(Bt=!0,ei=f.values(y,$,k,x),kt=new Map,new Set(ei).forEach(N=>{N!=null&&kt.set(N,new Path2D)}),Re>0&&(pi=u.values(y,$,k,x),Zi=new Map,new Set(pi).forEach(N=>{N!=null&&Zi.set(N,new Path2D)})));let{x0:Ji,size:Tn}=p;if(Ji!=null&&Tn!=null){R=1,C=Ji.values(y,$,k,x),Ji.unit==2&&(C=C.map(Ne=>y.posToVal(ee+Ne*Q,E.key,!0)));let N=Tn.values(y,$,k,x);Tn.unit==2?ge=N[0]*Q:ge=H(N[0],E,Q,ee)-H(0,E,Q,ee),ft=Wo(C,F,H,E,Q,ee,ft),zt=ft-ge+Y}else ft=Wo(C,F,H,E,Q,ee,ft),zt=ft*o+Y,ge=ft-zt;zt<1&&(zt=0),Re>=ge/2&&(Re=0),zt<5&&(ie=tl);let ts=zt>0,wi=ft-zt-(ts?Re:0);ge=ie(Dr(wi,ae,B)),Ee=(R==0?ge/2:R==Me?0:ge)-R*Me*((R==0?Y/2:0)+(ts?Re/2:0));let nt={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},Qi=Bt?null:new Path2D,ti=null;if(re!=null)ti=y.data[re.series[1]];else{let{y0:N,y1:ke}=p;N!=null&&ke!=null&&(F=ke.values(y,$,k,x),ti=N.values(y,$,k,x))}let $i=V*ge,ne=pt*ge;for(let N=Me==1?k:x;N>=k&&N<=x;N+=Me){let ke=F[N];if(ke==null)continue;if(ti!=null){let dt=ti[N]??0;if(ke-dt==0)continue;it=D(dt,X,I,se)}let Ne=E.distr!=2||p!=null?C[N]:N,Xi=H(Ne,E,Q,ee),_i=D(ue(ke,He),X,I,se),Vt=ie(Xi-Ee),ki=ie(lt(_i,it)),ht=ie(Ut(_i,it)),St=ki-ht;if(ke!=null){let dt=ke<0?ne:$i,It=ke<0?$i:ne;Bt?(Re>0&&pi[N]!=null&&pe(Zi.get(pi[N]),Vt,ht+xt(Re/2),ge,lt(0,St-Re),dt,It),ei[N]!=null&&pe(kt.get(ei[N]),Vt,ht+xt(Re/2),ge,lt(0,St-Re),dt,It)):pe(Qi,Vt,ht+xt(Re/2),ge,lt(0,St-Re),dt,It),ye(y,$,N,Vt-Re/2,ht,ge+Re,St)}}return Re>0?nt.stroke=Bt?Zi:Qi:Bt||(nt._fill=M.width==0?M._fill:M._stroke??M._fill,nt.width=0),nt.fill=Bt?kt:Qi,nt})}function Sd(n,i){let e=ue(i?.alignGaps,0);return(t,s,r,o)=>Ui(t,s,(a,c,p,h,f,u,y,$,k,x,M)=>{[r,o]=Es(p,r,o);let C=a.pxRound,F=V=>C(u(V,h,x,$)),E=V=>C(y(V,f,M,k)),X,H,D;h.ori==0?(X=Is,D=Sn,H=Cl):(X=Ds,D=An,H=Pl);let ee=h.dir*(h.ori==0?1:-1),se=F(c[ee==1?r:o]),Q=se,I=[],ie=[];for(let V=ee==1?r:o;V>=r&&V<=o;V+=ee)if(p[V]!=null){let Me=c[V],pe=F(Me);I.push(Q=pe),ie.push(E(p[V]))}let R={stroke:n(I,ie,X,D,H,C),fill:null,clip:null,band:null,gaps:null,flags:_n},Y=R.stroke,[B,ae]=ea(t,s);if(a.fill!=null||B!=0){let V=R.fill=new Path2D(Y),pt=a.fillTo(t,s,a.min,a.max,B),Me=E(pt);D(V,Q,Me),D(V,se,Me)}if(!a.spanGaps){let V=[];V.push(...ta(c,p,r,o,ee,F,e)),R.gaps=V=a.gaps(t,s,r,o,V),R.clip=zs(V,h.ori,$,k,x,M)}return ae!=0&&(R.band=ae==2?[oi(t,s,r,o,Y,-1),oi(t,s,r,o,Y,1)]:oi(t,s,r,o,Y,ae)),R})}function Ad(n){return Sd(Cd,n)}function Cd(n,i,e,t,s,r){let o=n.length;if(o<2)return null;let a=new Path2D;if(e(a,n[0],i[0]),o==2)t(a,n[1],i[1]);else{let c=Array(o),p=Array(o-1),h=Array(o-1),f=Array(o-1);for(let u=0;u<o-1;u++)h[u]=i[u+1]-i[u],f[u]=n[u+1]-n[u],p[u]=h[u]/f[u];c[0]=p[0];for(let u=1;u<o-1;u++)p[u]===0||p[u-1]===0||p[u-1]>0!=p[u]>0?c[u]=0:(c[u]=3*(f[u-1]+f[u])/((2*f[u]+f[u-1])/p[u-1]+(f[u]+2*f[u-1])/p[u]),isFinite(c[u])||(c[u]=0));c[o-1]=p[o-2];for(let u=0;u<o-1;u++)s(a,n[u]+f[u]/3,i[u]+c[u]*f[u]/3,n[u+1]-f[u]/3,i[u+1]-c[u+1]*f[u]/3,n[u+1],i[u+1])}return a}var Nr=new Set;function Go(){for(let n of Nr)n.syncRect(!0)}kn&&(Hi(op,xn,Go),Hi(lp,xn,Go,!0),Hi(Ps,xn,()=>{Ze.pxRatio=he}));var Pd=El(),Td=Tl();function Ko(n,i,e,t){return(t?[n[0],n[1]].concat(n.slice(2)):[n[0]].concat(n.slice(1))).map((r,o)=>jr(r,o,i,e))}function Md(n,i){return n.map((e,t)=>t==0?{}:qe({},i,e))}function jr(n,i,e,t){return qe({},i==0?e:t,n)}function Ll(n,i,e){return i==null?$n:[i,e]}var Ed=Ll;function Ld(n,i,e){return i==null?$n:Ts(i,e,Gr,!0)}function Rl(n,i,e,t){return i==null?$n:Ls(i,e,n.scales[t].log,!1)}var Rd=Rl;function Fl(n,i,e,t){return i==null?$n:Wr(i,e,n.scales[t].log,!1)}var Fd=Fl;function zd(n,i,e,t,s){let r=lt(Ao(n),Ao(i)),o=i-n,a=jt(s/t*o,e);do{let c=e[a],p=t*c/o;if(p>=s&&r+(c<5?yi.get(c):0)<=17)return[c,p]}while(++a<e.length);return[0,0]}function Yo(n){let i,e;return n=n.replace(/(\d+)px/,(t,s)=>(i=je((e=+s)*he))+"px"),[n,i,e]}function Id(n){n.show&&[n.font,n.labelFont].forEach(i=>{let e=_e(i[2]*he,1);i[0]=i[0].replace(/[0-9.]+px/,e+"px"),i[1]=e})}function Ze(n,i,e){let t={mode:ue(n.mode,1)},s=t.mode;function r(l,d,m,g){let v=d.valToPct(l);return g+m*(d.dir==-1?1-v:v)}function o(l,d,m,g){let v=d.valToPct(l);return g+m*(d.dir==-1?v:1-v)}function a(l,d,m,g){return d.ori==0?r(l,d,m,g):o(l,d,m,g)}t.valToPosH=r,t.valToPosV=o;let c=!1;t.status=0;let p=t.root=Et(Uc);if(n.id!=null&&(p.id=n.id),yt(p,n.class),n.title){let l=Et(Wc,p);l.textContent=n.title}let h=Nt("canvas"),f=t.ctx=h.getContext("2d"),u=Et(Gc,p);Hi("click",u,l=>{l.target===$&&(Ae!=dn||Le!=un)&&Qe.click(t,l)},!0);let y=t.under=Et(Kc,u);u.appendChild(h);let $=t.over=Et(Yc,u);n=Ni(n);let k=+ue(n.pxAlign,1),x=Vo(k);(n.plugins||[]).forEach(l=>{l.opts&&(n=l.opts(t,n)||n)});let M=n.ms||.001,C=t.series=s==1?Ko(n.series||[],Oo,Uo,!1):Md(n.series||[null],jo),F=t.axes=Ko(n.axes||[],Do,Ho,!0),E=t.scales={},X=t.bands=n.bands||[];X.forEach(l=>{l.fill=le(l.fill||null),l.dir=ue(l.dir,-1)});let H=s==2?C[1].facets[0].scale:C[0].scale,D={axes:cc,series:sc},ee=(n.drawOrder||["axes","series"]).map(l=>D[l]);function se(l){let d=l.distr==3?m=>ai(m>0?m:l.clamp(t,m,l.min,l.max,l.key)):l.distr==4?m=>Tr(m,l.asinh):l.distr==100?m=>l.fwd(m):m=>m;return m=>{let g=d(m),{_min:v,_max:w}=l,A=w-v;return(g-v)/A}}function Q(l){let d=E[l];if(d==null){let m=(n.scales||Qn)[l]||Qn;if(m.from!=null){Q(m.from);let g=qe({},E[m.from],m,{key:l});g.valToPct=se(g),E[l]=g}else{d=E[l]=qe({},l==H?$l:vd,m),d.key=l;let g=d.time,v=d.range,w=vi(v);if((l!=H||s==2&&!g)&&(w&&(v[0]==null||v[1]==null)&&(v={min:v[0]==null?_o:{mode:1,hard:v[0],soft:v[0]},max:v[1]==null?_o:{mode:1,hard:v[1],soft:v[1]}},w=!1),!w&&Fs(v))){let A=v;v=(L,z,O)=>z==null?$n:Ts(z,O,A)}d.range=le(v||(g?Ed:l==H?d.distr==3?Rd:d.distr==4?Fd:Ll:d.distr==3?Rl:d.distr==4?Fl:Ld)),d.auto=le(w?!1:d.auto),d.clamp=le(d.clamp||bd),d._min=d._max=null,d.valToPct=se(d)}}}Q("x"),Q("y"),s==1&&C.forEach(l=>{Q(l.scale)}),F.forEach(l=>{Q(l.scale)});for(let l in n.scales)Q(l);let I=E[H],ie=I.distr,R,Y;I.ori==0?(yt(p,Bc),R=r,Y=o):(yt(p,Vc),R=o,Y=r);let B={};for(let l in E){let d=E[l];(d.min!=null||d.max!=null)&&(B[l]={min:d.min,max:d.max},d.min=d.max=null)}let ae=n.tzDate||(l=>new Date(je(l/M))),V=n.fmtDate||Zr,pt=M==1?Bp(ae):Gp(ae),Me=Fo(ae,Ro(M==1?Up:Wp,V)),pe=Io(ae,zo(Yp,V)),ye=[],re=t.legend=qe({},Qp,n.legend),W=t.cursor=qe({},sd,{drag:{y:s==2}},n.cursor),He=re.show,it=W.show,Ee=re.markers;re.idxs=ye,Ee.width=le(Ee.width),Ee.dash=le(Ee.dash),Ee.stroke=le(Ee.stroke),Ee.fill=le(Ee.fill);let ge,zt,ft,Re=[],Bt=[],ei,kt=!1,pi={};if(re.live){let l=C[1]?C[1].values:null;kt=l!=null,ei=kt?l(t,1,0):{_:0};for(let d in ei)pi[d]=Br}if(He)if(ge=Nt("table",tp,p),ft=Nt("tbody",null,ge),re.mount(t,ge),kt){zt=Nt("thead",null,ge,ft);let l=Nt("tr",null,zt);Nt("th",null,l);for(var Zi in ei)Nt("th",co,l).textContent=Zi}else yt(ge,np),re.live&&yt(ge,ip);let Ji={show:!0},Tn={show:!1};function ts(l,d){if(d==0&&(kt||!re.live||s==2))return $n;let m=[],g=Nt("tr",sp,ft,ft.childNodes[d]);yt(g,l.class),l.show||yt(g,qi);let v=Nt("th",null,g);if(Ee.show){let L=Et(rp,v);if(d>0){let z=Ee.width(t,d);z&&(L.style.border=z+"px "+Ee.dash(t,d)+" "+Ee.stroke(t,d)),L.style.background=Ee.fill(t,d)}}let w=Et(co,v);l.label instanceof HTMLElement?w.appendChild(l.label):w.textContent=l.label,d>0&&(Ee.show||(w.style.color=l.width>0?Ee.stroke(t,d):Ee.fill(t,d)),nt("click",v,L=>{if(W._lock)return;Ai(L);let z=C.indexOf(l);if((L.ctrlKey||L.metaKey)!=re.isolate){let O=C.some((q,j)=>j>0&&j!=z&&q.show);C.forEach((q,j)=>{j>0&&Gt(j,O?j==z?Ji:Tn:Ji,!0,Oe.setSeries)})}else Gt(z,{show:!l.show},!0,Oe.setSeries)},!1),tn&&nt(fo,v,L=>{W._lock||(Ai(L),Gt(C.indexOf(l),fn,!0,Oe.setSeries))},!1));for(var A in ei){let L=Nt("td",ap,g);L.textContent="--",m.push(L)}return[g,m]}let wi=new Map;function nt(l,d,m,g=!0){let v=wi.get(d)||{},w=W.bind[l](t,d,m,g);w&&(Hi(l,d,v[l]=w),wi.set(d,v))}function Qi(l,d,m){let g=wi.get(d)||{};for(let v in g)(l==null||v==l)&&(Ir(v,d,g[v]),delete g[v]);l==null&&wi.delete(d)}let ti=0,$i=0,ne=0,N=0,ke=0,Ne=0,Xi=ke,_i=Ne,Vt=ne,ki=N,ht=0,St=0,dt=0,It=0;t.bbox={};let Gs=!1,is=!1,en=!1,Si=!1,ns=!1,At=!1;function Ks(l,d,m){(m||l!=t.width||d!=t.height)&&ca(l,d),on(!1),en=!0,is=!0,ln()}function ca(l,d){t.width=ti=ne=l,t.height=$i=N=d,ke=Ne=0,Jl(),Ql();let m=t.bbox;ht=m.left=Di(ke*he,.5),St=m.top=Di(Ne*he,.5),dt=m.width=Di(ne*he,.5),It=m.height=Di(N*he,.5)}let Kl=3;function Yl(){let l=!1,d=0;for(;!l;){d++;let m=oc(d),g=lc(d);l=d==Kl||m&&g,l||(ca(t.width,t.height),is=!0)}}function Zl({width:l,height:d}){Ks(l,d)}t.setSize=Zl;function Jl(){let l=!1,d=!1,m=!1,g=!1;F.forEach((v,w)=>{if(v.show&&v._show){let{side:A,_size:L}=v,z=A%2,O=v.label!=null?v.labelSize:0,q=L+O;q>0&&(z?(ne-=q,A==3?(ke+=q,g=!0):m=!0):(N-=q,A==0?(Ne+=q,l=!0):d=!0))}}),Ci[0]=l,Ci[1]=m,Ci[2]=d,Ci[3]=g,ne-=di[1]+di[3],ke+=di[3],N-=di[2]+di[0],Ne+=di[0]}function Ql(){let l=ke+ne,d=Ne+N,m=ke,g=Ne;function v(w,A){switch(w){case 1:return l+=A,l-A;case 2:return d+=A,d-A;case 3:return m-=A,m+A;case 0:return g-=A,g+A}}F.forEach((w,A)=>{if(w.show&&w._show){let L=w.side;w._pos=v(L,w._size),w.label!=null&&(w._lpos=v(L,w.labelSize))}})}if(W.dataIdx==null){let l=W.hover,d=l.skip=new Set(l.skip??[]);d.add(void 0);let m=l.prox=le(l.prox),g=l.bias??=0;W.dataIdx=(v,w,A,L)=>{if(w==0)return A;let z=A,O=m(v,w,A,L)??$e,q=O>=0&&O<$e,j=I.ori==0?ne:N,te=W.left,me=i[0],de=i[w];if(d.has(de[A])){z=null;let oe=null,J=null,G;if(g==0||g==-1)for(G=A;oe==null&&G-- >0;)d.has(de[G])||(oe=G);if(g==0||g==1)for(G=A;J==null&&G++<de.length;)d.has(de[G])||(J=G);if(oe!=null||J!=null)if(q){let Pe=oe==null?-1/0:R(me[oe],I,j,0),Ie=J==null?1/0:R(me[J],I,j,0),Ye=te-Pe,xe=Ie-te;Ye<=xe?Ye<=O&&(z=oe):xe<=O&&(z=J)}else z=J==null?oe:oe==null?J:A-oe<=J-A?oe:J}else q&&Ue(te-R(me[A],I,j,0))>O&&(z=null);return z}}let Ai=l=>{W.event=l};W.idxs=ye,W._lock=!1;let et=W.points;et.show=le(et.show),et.size=le(et.size),et.stroke=le(et.stroke),et.width=le(et.width),et.fill=le(et.fill);let Wt=t.focus=qe({},n.focus||{alpha:.3},W.focus),tn=Wt.prox>=0,nn=tn&&et.one,Ct=[],sn=[],rn=[];function pa(l,d){let m=et.show(t,d);if(m instanceof HTMLElement)return yt(m,ep),yt(m,l.class),Jt(m,-10,-10,ne,N),$.insertBefore(m,Ct[d]),m}function da(l,d){if(s==1||d>0){let m=s==1&&E[l.scale].time,g=l.value;l.value=m?To(g)?Io(ae,zo(g,V)):g||pe:g||fd,l.label=l.label||(m?ad:rd)}if(nn||d>0){l.width=l.width==null?1:l.width,l.paths=l.paths||Pd||vp,l.fillTo=le(l.fillTo||yd),l.pxAlign=+ue(l.pxAlign,k),l.pxRound=Vo(l.pxAlign),l.stroke=le(l.stroke||null),l.fill=le(l.fill||null),l._stroke=l._fill=l._paths=l._focus=null;let m=hd(lt(1,l.width),1),g=l.points=qe({},{size:m,width:lt(1,m*.2),stroke:l.stroke,space:m*2,paths:Td,_stroke:null,_fill:null},l.points);g.show=le(g.show),g.filter=le(g.filter),g.fill=le(g.fill),g.stroke=le(g.stroke),g.paths=le(g.paths),g.pxAlign=l.pxAlign}if(He){let m=ts(l,d);Re.splice(d,0,m[0]),Bt.splice(d,0,m[1]),re.values.push(null)}if(it){ye.splice(d,0,null);let m=null;nn?d==0&&(m=pa(l,d)):d>0&&(m=pa(l,d)),Ct.splice(d,0,m),sn.splice(d,0,0),rn.splice(d,0,0)}Ke("addSeries",d)}function Xl(l,d){d=d??C.length,l=s==1?jr(l,d,Oo,Uo):jr(l,d,{},jo),C.splice(d,0,l),da(C[d],d)}t.addSeries=Xl;function ec(l){if(C.splice(l,1),He){re.values.splice(l,1),Bt.splice(l,1);let d=Re.splice(l,1)[0];Qi(null,d.firstChild),d.remove()}it&&(ye.splice(l,1),Ct.splice(l,1)[0].remove(),sn.splice(l,1),rn.splice(l,1)),Ke("delSeries",l)}t.delSeries=ec;let Ci=[!1,!1,!1,!1];function tc(l,d){if(l._show=l.show,l.show){let m=l.side%2,g=E[l.scale];g==null&&(l.scale=m?C[1].scale:H,g=E[l.scale]);let v=g.time;l.size=le(l.size),l.space=le(l.space),l.rotate=le(l.rotate),vi(l.incrs)&&l.incrs.forEach(A=>{!yi.has(A)&&yi.set(A,sl(A))}),l.incrs=le(l.incrs||(g.distr==2?Hp:v?M==1?jp:Vp:Oi)),l.splits=le(l.splits||(v&&g.distr==1?pt:g.distr==3?Or:g.distr==4?cd:ld)),l.stroke=le(l.stroke),l.grid.stroke=le(l.grid.stroke),l.ticks.stroke=le(l.ticks.stroke),l.border.stroke=le(l.border.stroke);let w=l.values;l.values=vi(w)&&!vi(w[0])?le(w):v?vi(w)?Fo(ae,Ro(w,V)):To(w)?Kp(ae,w):w||Me:w||od,l.filter=le(l.filter||(g.distr>=3&&g.log==10?ud:g.distr==3&&g.log==2?md:il)),l.font=Yo(l.font),l.labelFont=Yo(l.labelFont),l._size=l.size(t,null,d,0),l._space=l._rotate=l._incrs=l._found=l._splits=l._values=null,l._size>0&&(Ci[d]=!0,l._el=Et(Zc,u))}}function Mn(l,d,m,g){let[v,w,A,L]=m,z=d%2,O=0;return z==0&&(L||w)&&(O=d==0&&!v||d==2&&!A?je(Do.size/3):0),z==1&&(v||A)&&(O=d==1&&!w||d==3&&!L?je(Ho.size/2):0),O}let ua=t.padding=(n.padding||[Mn,Mn,Mn,Mn]).map(l=>le(ue(l,Mn))),di=t._padding=ua.map((l,d)=>l(t,d,Ci,0)),Je,Be=null,Ve=null,ss=s==1?C[0].idxs:null,Dt=null,En=!1;function ma(l,d){if(i=l??[],t.data=t._data=i,s==2){Je=0;for(let m=1;m<C.length;m++)Je+=i[m][0].length}else{i.length==0&&(t.data=t._data=i=[[]]),Dt=i[0],Je=Dt.length;let m=i;if(ie==2){m=i.slice();let g=m[0]=Array(Je);for(let v=0;v<Je;v++)g[v]=v}t._data=i=m}if(on(!0),Ke("setData"),ie==2&&(en=!0),d!==!1){let m=I;m.auto(t,En)?Ys():mi(H,m.min,m.max),Si=Si||W.left>=0,At=!0,ln()}}t.setData=ma;function Ys(){En=!0;let l,d;s==1&&(Je>0?(Be=ss[0]=0,Ve=ss[1]=Je-1,l=i[0][Be],d=i[0][Ve],ie==2?(l=Be,d=Ve):l==d&&(ie==3?[l,d]=Ls(l,l,I.log,!1):ie==4?[l,d]=Wr(l,l,I.log,!1):I.time?d=l+je(86400/M):[l,d]=Ts(l,d,Gr,!0))):(Be=ss[0]=l=null,Ve=ss[1]=d=null)),mi(H,l,d)}let rs,an,Zs,Js,Qs,Xs,er,tr,ir,ut;function fa(l,d,m,g,v,w){l??=uo,m??=Yr,g??="butt",v??=uo,w??="round",l!=rs&&(f.strokeStyle=rs=l),v!=an&&(f.fillStyle=an=v),d!=Zs&&(f.lineWidth=Zs=d),w!=Qs&&(f.lineJoin=Qs=w),g!=Xs&&(f.lineCap=Xs=g),m!=Js&&f.setLineDash(Js=m)}function ha(l,d,m,g){d!=an&&(f.fillStyle=an=d),l!=er&&(f.font=er=l),m!=tr&&(f.textAlign=tr=m),g!=ir&&(f.textBaseline=ir=g)}function nr(l,d,m,g,v=0){if(g.length>0&&l.auto(t,En)&&(d==null||d.min==null)){let w=ue(Be,0),A=ue(Ve,g.length-1),L=m.min==null?up(g,w,A,v,l.distr==3):[m.min,m.max];l.min=Ut(l.min,m.min=L[0]),l.max=lt(l.max,m.max=L[1])}}let ga={min:null,max:null};function ic(){for(let g in E){let v=E[g];B[g]==null&&(v.min==null||B[H]!=null&&v.auto(t,En))&&(B[g]=ga)}for(let g in E){let v=E[g];B[g]==null&&v.from!=null&&B[v.from]!=null&&(B[g]=ga)}B[H]!=null&&on(!0);let l={};for(let g in B){let v=B[g];if(v!=null){let w=l[g]=Ni(E[g],wp);if(v.min!=null)qe(w,v);else if(g!=H||s==2)if(Je==0&&w.from==null){let A=w.range(t,null,null,g);w.min=A[0],w.max=A[1]}else w.min=$e,w.max=-$e}}if(Je>0){C.forEach((g,v)=>{if(s==1){let w=g.scale,A=B[w];if(A==null)return;let L=l[w];if(v==0){let z=L.range(t,L.min,L.max,w);L.min=z[0],L.max=z[1],Be=jt(L.min,i[0]),Ve=jt(L.max,i[0]),Ve-Be>1&&(i[0][Be]<L.min&&Be++,i[0][Ve]>L.max&&Ve--),g.min=Dt[Be],g.max=Dt[Ve]}else g.show&&g.auto&&nr(L,A,g,i[v],g.sorted);g.idxs[0]=Be,g.idxs[1]=Ve}else if(v>0&&g.show&&g.auto){let[w,A]=g.facets,L=w.scale,z=A.scale,[O,q]=i[v],j=l[L],te=l[z];j!=null&&nr(j,B[L],w,O,w.sorted),te!=null&&nr(te,B[z],A,q,A.sorted),g.min=A.min,g.max=A.max}});for(let g in l){let v=l[g],w=B[g];if(v.from==null&&(w==null||w.min==null)){let A=v.range(t,v.min==$e?null:v.min,v.max==-$e?null:v.max,g);v.min=A[0],v.max=A[1]}}}for(let g in l){let v=l[g];if(v.from!=null){let w=l[v.from];if(w.min==null)v.min=v.max=null;else{let A=v.range(t,w.min,w.max,g);v.min=A[0],v.max=A[1]}}}let d={},m=!1;for(let g in l){let v=l[g],w=E[g];if(w.min!=v.min||w.max!=v.max){w.min=v.min,w.max=v.max;let A=w.distr;w._min=A==3?ai(w.min):A==4?Tr(w.min,w.asinh):A==100?w.fwd(w.min):w.min,w._max=A==3?ai(w.max):A==4?Tr(w.max,w.asinh):A==100?w.fwd(w.max):w.max,d[g]=m=!0}}if(m){C.forEach((g,v)=>{s==2?v>0&&d.y&&(g._paths=null):d[g.scale]&&(g._paths=null)});for(let g in d)en=!0,Ke("setScale",g);it&&W.left>=0&&(Si=At=!0)}for(let g in B)B[g]=null}function nc(l){let d=Dr(Be-1,0,Je-1),m=Dr(Ve+1,0,Je-1);for(;l[d]==null&&d>0;)d--;for(;l[m]==null&&m<Je-1;)m++;return[d,m]}function sc(){if(Je>0){let l=C.some(d=>d._focus)&&ut!=Wt.alpha;l&&(f.globalAlpha=ut=Wt.alpha),C.forEach((d,m)=>{if(m>0&&d.show&&(ba(m,!1),ba(m,!0),d._paths==null)){let g=ut;ut!=d.alpha&&(f.globalAlpha=ut=d.alpha);let v=s==2?[0,i[m][0].length-1]:nc(i[m]);d._paths=d.paths(t,m,v[0],v[1]),ut!=g&&(f.globalAlpha=ut=g)}}),C.forEach((d,m)=>{if(m>0&&d.show){let g=ut;ut!=d.alpha&&(f.globalAlpha=ut=d.alpha),d._paths!=null&&va(m,!1);{let v=d._paths!=null?d._paths.gaps:null,w=d.points.show(t,m,Be,Ve,v),A=d.points.filter(t,m,w,v);(w||A)&&(d.points._paths=d.points.paths(t,m,Be,Ve,A),va(m,!0))}ut!=g&&(f.globalAlpha=ut=g),Ke("drawSeries",m)}}),l&&(f.globalAlpha=ut=1)}}function ba(l,d){let m=d?C[l].points:C[l];m._stroke=m.stroke(t,l),m._fill=m.fill(t,l)}function va(l,d){let m=d?C[l].points:C[l],{stroke:g,fill:v,clip:w,flags:A,_stroke:L=m._stroke,_fill:z=m._fill,_width:O=m.width}=m._paths;O=_e(O*he,3);let q=null,j=O%2/2;d&&z==null&&(z=O>0?"#fff":L);let te=m.pxAlign==1&&j>0;if(te&&f.translate(j,j),!d){let me=ht-O/2,de=St-O/2,oe=dt+O,J=It+O;q=new Path2D,q.rect(me,de,oe,J)}d?sr(L,O,m.dash,m.cap,z,g,v,A,w):rc(l,L,O,m.dash,m.cap,z,g,v,A,q,w),te&&f.translate(-j,-j)}function rc(l,d,m,g,v,w,A,L,z,O,q){let j=!1;z!=0&&X.forEach((te,me)=>{if(te.series[0]==l){let de=C[te.series[1]],oe=i[te.series[1]],J=(de._paths||Qn).band;vi(J)&&(J=te.dir==1?J[0]:J[1]);let G,Pe=null;de.show&&J&&fp(oe,Be,Ve)?(Pe=te.fill(t,me)||w,G=de._paths.clip):J=null,sr(d,m,g,v,Pe,A,L,z,O,q,G,J),j=!0}}),j||sr(d,m,g,v,w,A,L,z,O,q)}let ya=_n|Hr;function sr(l,d,m,g,v,w,A,L,z,O,q,j){fa(l,d,m,g,v),(z||O||j)&&(f.save(),z&&f.clip(z),O&&f.clip(O)),j?(L&ya)==ya?(f.clip(j),q&&f.clip(q),os(v,A),as(l,w,d)):L&Hr?(os(v,A),f.clip(j),as(l,w,d)):L&_n&&(f.save(),f.clip(j),q&&f.clip(q),os(v,A),f.restore(),as(l,w,d)):(os(v,A),as(l,w,d)),(z||O||j)&&f.restore()}function as(l,d,m){m>0&&(d instanceof Map?d.forEach((g,v)=>{f.strokeStyle=rs=v,f.stroke(g)}):d!=null&&l&&f.stroke(d))}function os(l,d){d instanceof Map?d.forEach((m,g)=>{f.fillStyle=an=g,f.fill(m)}):d!=null&&l&&f.fill(d)}function ac(l,d,m,g){let v=F[l],w;if(g<=0)w=[0,0];else{let A=v._space=v.space(t,l,d,m,g),L=v._incrs=v.incrs(t,l,d,m,g,A);w=zd(d,m,L,g,A)}return v._found=w}function rr(l,d,m,g,v,w,A,L,z,O){let q=A%2/2;k==1&&f.translate(q,q),fa(L,A,z,O,L),f.beginPath();let j,te,me,de,oe=v+(g==0||g==3?-w:w);m==0?(te=v,de=oe):(j=v,me=oe);for(let J=0;J<l.length;J++)d[J]!=null&&(m==0?j=me=l[J]:te=de=l[J],f.moveTo(j,te),f.lineTo(me,de));f.stroke(),k==1&&f.translate(-q,-q)}function oc(l){let d=!0;return F.forEach((m,g)=>{if(!m.show)return;let v=E[m.scale];if(v.min==null){m._show&&(d=!1,m._show=!1,on(!1));return}else m._show||(d=!1,m._show=!0,on(!1));let w=m.side,A=w%2,{min:L,max:z}=v,[O,q]=ac(g,L,z,A==0?ne:N);if(q==0)return;let j=v.distr==2,te=m._splits=m.splits(t,g,L,z,O,q,j),me=v.distr==2?te.map(G=>Dt[G]):te,de=v.distr==2?Dt[te[1]]-Dt[te[0]]:O,oe=m._values=m.values(t,m.filter(t,me,g,q,de),g,q,de);m._rotate=w==2?m.rotate(t,oe,g,q):0;let J=m._size;m._size=Lt(m.size(t,oe,g,l)),J!=null&&m._size!=J&&(d=!1)}),d}function lc(l){let d=!0;return ua.forEach((m,g)=>{let v=m(t,g,Ci,l);v!=di[g]&&(d=!1),di[g]=v}),d}function cc(){for(let l=0;l<F.length;l++){let d=F[l];if(!d.show||!d._show)continue;let m=d.side,g=m%2,v,w,A=d.stroke(t,l),L=m==0||m==3?-1:1,[z,O]=d._found;if(d.label!=null){let rt=d.labelGap*L,vt=je((d._lpos+rt)*he);ha(d.labelFont[0],A,"center",m==2?"top":po),f.save(),g==1?(v=w=0,f.translate(vt,je(St+It/2)),f.rotate((m==3?-Cs:Cs)/2)):(v=je(ht+dt/2),w=vt);let Mi=el(d.label)?d.label(t,l,z,O):d.label;f.fillText(Mi,v,w),f.restore()}if(O==0)continue;let q=E[d.scale],j=g==0?dt:It,te=g==0?ht:St,me=d._splits,de=q.distr==2?me.map(rt=>Dt[rt]):me,oe=q.distr==2?Dt[me[1]]-Dt[me[0]]:z,J=d.ticks,G=d.border,Pe=J.show?J.size:0,Ie=je(Pe*he),Ye=je((d.alignTo==2?d._size-Pe-d.gap:d.gap)*he),xe=d._rotate*-Cs/180,De=x(d._pos*he),gt=(Ie+Ye)*L,st=De+gt;w=g==0?st:0,v=g==1?st:0;let Pt=d.font[0],Ot=d.align==1?vn:d.align==2?Ar:xe>0?vn:xe<0?Ar:g==0?"center":m==3?Ar:vn,Yt=xe||g==1?"middle":m==2?"top":po;ha(Pt,A,Ot,Yt);let bt=d.font[1]*d.lineGap,Tt=me.map(rt=>x(a(rt,q,j,te))),qt=d._values;for(let rt=0;rt<qt.length;rt++){let vt=qt[rt];if(vt!=null){g==0?v=Tt[rt]:w=Tt[rt],vt=""+vt;let Mi=vt.indexOf(`
`)==-1?[vt]:vt.split(/\n/gm);for(let at=0;at<Mi.length;at++){let Oa=Mi[at];xe?(f.save(),f.translate(v,w+at*bt),f.rotate(xe),f.fillText(Oa,0,0),f.restore()):f.fillText(Oa,v,w+at*bt)}}}J.show&&rr(Tt,J.filter(t,de,l,O,oe),g,m,De,Ie,_e(J.width*he,3),J.stroke(t,l),J.dash,J.cap);let Zt=d.grid;Zt.show&&rr(Tt,Zt.filter(t,de,l,O,oe),g,g==0?2:1,g==0?St:ht,g==0?It:dt,_e(Zt.width*he,3),Zt.stroke(t,l),Zt.dash,Zt.cap),G.show&&rr([De],[1],g==0?1:0,g==0?1:2,g==1?St:ht,g==1?It:dt,_e(G.width*he,3),G.stroke(t,l),G.dash,G.cap)}Ke("drawAxes")}function on(l){C.forEach((d,m)=>{m>0&&(d._paths=null,l&&(s==1?(d.min=null,d.max=null):d.facets.forEach(g=>{g.min=null,g.max=null})))})}let ls=!1,ar=!1,Ln=[];function pc(){ar=!1;for(let l=0;l<Ln.length;l++)Ke(...Ln[l]);Ln.length=0}function ln(){ls||(Pp(xa),ls=!0)}function dc(l,d=!1){ls=!0,ar=d,l(t),xa(),d&&Ln.length>0&&queueMicrotask(pc)}t.batch=dc;function xa(){if(Gs&&(ic(),Gs=!1),en&&(Yl(),en=!1),is){if(Te(y,vn,ke),Te(y,"top",Ne),Te(y,Kn,ne),Te(y,Yn,N),Te($,vn,ke),Te($,"top",Ne),Te($,Kn,ne),Te($,Yn,N),Te(u,Kn,ti),Te(u,Yn,$i),h.width=je(ti*he),h.height=je($i*he),F.forEach(({_el:l,_show:d,_size:m,_pos:g,side:v})=>{if(l!=null)if(d){let w=v===3||v===0?m:0,A=v%2==1;Te(l,A?"left":"top",g-w),Te(l,A?"width":"height",m),Te(l,A?"top":"left",A?Ne:ke),Te(l,A?"height":"width",A?N:ne),zr(l,qi)}else yt(l,qi)}),rs=an=Zs=Qs=Xs=er=tr=ir=Js=null,ut=1,zn(!0),ke!=Xi||Ne!=_i||ne!=Vt||N!=ki){on(!1);let l=ne/Vt,d=N/ki;if(it&&!Si&&W.left>=0){W.left*=l,W.top*=d,cn&&Jt(cn,je(W.left),0,ne,N),pn&&Jt(pn,0,je(W.top),ne,N);for(let m=0;m<Ct.length;m++){let g=Ct[m];g!=null&&(sn[m]*=l,rn[m]*=d,Jt(g,Lt(sn[m]),Lt(rn[m]),ne,N))}}if(Ce.show&&!ns&&Ce.left>=0&&Ce.width>0){Ce.left*=l,Ce.width*=l,Ce.top*=d,Ce.height*=d;for(let m in ur)Te(mn,m,Ce[m])}Xi=ke,_i=Ne,Vt=ne,ki=N}Ke("setSize"),is=!1}ti>0&&$i>0&&(f.clearRect(0,0,h.width,h.height),Ke("drawClear"),ee.forEach(l=>l()),Ke("draw")),Ce.show&&ns&&(cs(Ce),ns=!1),it&&Si&&(Ti(null,!0,!1),Si=!1),re.show&&re.live&&At&&(pr(),At=!1),c||(c=!0,t.status=1,Ke("ready")),En=!1,ls=!1}t.redraw=(l,d)=>{en=d||!1,l!==!1?mi(H,I.min,I.max):ln()};function or(l,d){let m=E[l];if(m.from==null){if(Je==0){let g=m.range(t,d.min,d.max,l);d.min=g[0],d.max=g[1]}if(d.min>d.max){let g=d.min;d.min=d.max,d.max=g}if(Je>1&&d.min!=null&&d.max!=null&&d.max-d.min<1e-16)return;l==H&&m.distr==2&&Je>0&&(d.min=jt(d.min,i[0]),d.max=jt(d.max,i[0]),d.min==d.max&&d.max++),B[l]=d,Gs=!0,ln()}}t.setScale=or;let lr,cr,cn,pn,wa,$a,dn,un,_a,ka,Ae,Le,ui=!1,Qe=W.drag,We=Qe.x,Ge=Qe.y;it&&(W.x&&(lr=Et(Qc,$)),W.y&&(cr=Et(Xc,$)),I.ori==0?(cn=lr,pn=cr):(cn=cr,pn=lr),Ae=W.left,Le=W.top);let Ce=t.select=qe({show:!0,over:!0,left:0,width:0,top:0,height:0},n.select),mn=Ce.show?Et(Jc,Ce.over?$:y):null;function cs(l,d){if(Ce.show){for(let m in l)Ce[m]=l[m],m in ur&&Te(mn,m,l[m]);d!==!1&&Ke("setSelect")}}t.setSelect=cs;function uc(l){if(C[l].show)He&&zr(Re[l],qi);else if(He&&yt(Re[l],qi),it){let m=nn?Ct[0]:Ct[l];m!=null&&Jt(m,-10,-10,ne,N)}}function mi(l,d,m){or(l,{min:d,max:m})}function Gt(l,d,m,g){d.focus!=null&&bc(l),d.show!=null&&C.forEach((v,w)=>{w>0&&(l==w||l==null)&&(v.show=d.show,uc(w),s==2?(mi(v.facets[0].scale,null,null),mi(v.facets[1].scale,null,null)):mi(v.scale,null,null),ln())}),m!==!1&&Ke("setSeries",l,d),g&&In("setSeries",t,l,d)}t.setSeries=Gt;function mc(l,d){qe(X[l],d)}function fc(l,d){l.fill=le(l.fill||null),l.dir=ue(l.dir,-1),d=d??X.length,X.splice(d,0,l)}function hc(l){l==null?X.length=0:X.splice(l,1)}t.addBand=fc,t.setBand=mc,t.delBand=hc;function gc(l,d){C[l].alpha=d,it&&Ct[l]!=null&&(Ct[l].style.opacity=d),He&&Re[l]&&(Re[l].style.opacity=d)}let ii,fi,Pi,fn={focus:!0};function bc(l){if(l!=Pi){let d=l==null,m=Wt.alpha!=1;C.forEach((g,v)=>{if(s==1||v>0){let w=d||v==0||v==l;g._focus=d?null:w,m&&gc(v,w?1:Wt.alpha)}}),Pi=l,m&&ln()}}He&&tn&&nt(ho,ge,l=>{W._lock||(Ai(l),Pi!=null&&Gt(null,fn,!0,Oe.setSeries))});function Kt(l,d,m){let g=E[d];m&&(l=l/he-(g.ori==1?Ne:ke));let v=ne;g.ori==1&&(v=N,l=v-l),g.dir==-1&&(l=v-l);let w=g._min,A=g._max,L=l/v,z=w+(A-w)*L,O=g.distr;return O==3?wn(10,z):O==4?gp(z,g.asinh):O==100?g.bwd(z):z}function vc(l,d){let m=Kt(l,H,d);return jt(m,i[0],Be,Ve)}t.valToIdx=l=>jt(l,i[0]),t.posToIdx=vc,t.posToVal=Kt,t.valToPos=(l,d,m)=>E[d].ori==0?r(l,E[d],m?dt:ne,m?ht:0):o(l,E[d],m?It:N,m?St:0),t.setCursor=(l,d,m)=>{Ae=l.left,Le=l.top,Ti(null,d,m)};function Sa(l,d){Te(mn,vn,Ce.left=l),Te(mn,Kn,Ce.width=d)}function Aa(l,d){Te(mn,"top",Ce.top=l),Te(mn,Yn,Ce.height=d)}let Rn=I.ori==0?Sa:Aa,Fn=I.ori==1?Sa:Aa;function yc(){if(He&&re.live)for(let l=s==2?1:0;l<C.length;l++){if(l==0&&kt)continue;let d=re.values[l],m=0;for(let g in d)Bt[l][m++].firstChild.nodeValue=d[g]}}function pr(l,d){if(l!=null&&(l.idxs?l.idxs.forEach((m,g)=>{ye[g]=m}):xp(l.idx)||ye.fill(l.idx),re.idx=ye[0]),He&&re.live){for(let m=0;m<C.length;m++)(m>0||s==1&&!kt)&&xc(m,ye[m]);yc()}At=!1,d!==!1&&Ke("setLegend")}t.setLegend=pr;function xc(l,d){let m=C[l],g=l==0&&ie==2?Dt:i[l],v;kt?v=m.values(t,l,d)??pi:(v=m.value(t,d==null?null:g[d],l,d),v=v==null?pi:{_:v}),re.values[l]=v}function Ti(l,d,m){_a=Ae,ka=Le,[Ae,Le]=W.move(t,Ae,Le),W.left=Ae,W.top=Le,it&&(cn&&Jt(cn,je(Ae),0,ne,N),pn&&Jt(pn,0,je(Le),ne,N));let g,v=Be>Ve;ii=$e,fi=null;let w=I.ori==0?ne:N,A=I.ori==1?ne:N;if(Ae<0||Je==0||v){g=W.idx=null;for(let L=0;L<C.length;L++){let z=Ct[L];z!=null&&Jt(z,-10,-10,ne,N)}tn&&Gt(null,fn,!0,l==null&&Oe.setSeries),re.live&&(ye.fill(g),At=!0)}else{let L,z,O;s==1&&(L=I.ori==0?Ae:Le,z=Kt(L,H),g=W.idx=jt(z,i[0],Be,Ve),O=R(i[0][g],I,w,0));let q=-10,j=-10,te=0,me=0,de=!0,oe="",J="";for(let G=s==2?1:0;G<C.length;G++){let Pe=C[G],Ie=ye[G],Ye=Ie==null?null:s==1?i[G][Ie]:i[G][1][Ie],xe=W.dataIdx(t,G,g,z),De=xe==null?null:s==1?i[G][xe]:i[G][1][xe];if(At=At||De!=Ye||xe!=Ie,ye[G]=xe,G>0&&Pe.show){let gt=xe==null?-10:xe==g?O:R(s==1?i[0][xe]:i[G][0][xe],I,w,0),st=De==null?-10:Y(De,s==1?E[Pe.scale]:E[Pe.facets[1].scale],A,0);if(tn&&De!=null){let Pt=I.ori==1?Ae:Le,Ot=Ue(Wt.dist(t,G,xe,st,Pt));if(Ot<ii){let Yt=Wt.bias;if(Yt!=0){let bt=Kt(Pt,Pe.scale),Tt=De>=0?1:-1,qt=bt>=0?1:-1;qt==Tt&&(qt==1?Yt==1?De>=bt:De<=bt:Yt==1?De<=bt:De>=bt)&&(ii=Ot,fi=G)}else ii=Ot,fi=G}}if(At||nn){let Pt,Ot;I.ori==0?(Pt=gt,Ot=st):(Pt=st,Ot=gt);let Yt,bt,Tt,qt,Zt,rt,vt=!0,Mi=et.bbox;if(Mi!=null){vt=!1;let at=Mi(t,G);Tt=at.left,qt=at.top,Yt=at.width,bt=at.height}else Tt=Pt,qt=Ot,Yt=bt=et.size(t,G);if(rt=et.fill(t,G),Zt=et.stroke(t,G),nn)G==fi&&ii<=Wt.prox&&(q=Tt,j=qt,te=Yt,me=bt,de=vt,oe=rt,J=Zt);else{let at=Ct[G];at!=null&&(sn[G]=Tt,rn[G]=qt,$o(at,Yt,bt,vt),xo(at,rt,Zt),Jt(at,Lt(Tt),Lt(qt),ne,N))}}}}if(nn){let G=Wt.prox,Pe=Pi==null?ii<=G:ii>G||fi!=Pi;if(At||Pe){let Ie=Ct[0];Ie!=null&&(sn[0]=q,rn[0]=j,$o(Ie,te,me,de),xo(Ie,oe,J),Jt(Ie,Lt(q),Lt(j),ne,N))}}}if(Ce.show&&ui)if(l!=null){let[L,z]=Oe.scales,[O,q]=Oe.match,[j,te]=l.cursor.sync.scales,me=l.cursor.drag;if(We=me._x,Ge=me._y,We||Ge){let{left:de,top:oe,width:J,height:G}=l.select,Pe=l.scales[j].ori,Ie=l.posToVal,Ye,xe,De,gt,st,Pt=L!=null&&O(L,j),Ot=z!=null&&q(z,te);Pt&&We?(Pe==0?(Ye=de,xe=J):(Ye=oe,xe=G),De=E[L],gt=R(Ie(Ye,j),De,w,0),st=R(Ie(Ye+xe,j),De,w,0),Rn(Ut(gt,st),Ue(st-gt))):Rn(0,w),Ot&&Ge?(Pe==1?(Ye=de,xe=J):(Ye=oe,xe=G),De=E[z],gt=Y(Ie(Ye,te),De,A,0),st=Y(Ie(Ye+xe,te),De,A,0),Fn(Ut(gt,st),Ue(st-gt))):Fn(0,A)}else mr()}else{let L=Ue(_a-wa),z=Ue(ka-$a);if(I.ori==1){let te=L;L=z,z=te}We=Qe.x&&L>=Qe.dist,Ge=Qe.y&&z>=Qe.dist;let O=Qe.uni;O!=null?We&&Ge&&(We=L>=O,Ge=z>=O,!We&&!Ge&&(z>L?Ge=!0:We=!0)):Qe.x&&Qe.y&&(We||Ge)&&(We=Ge=!0);let q,j;We&&(I.ori==0?(q=dn,j=Ae):(q=un,j=Le),Rn(Ut(q,j),Ue(j-q)),Ge||Fn(0,A)),Ge&&(I.ori==1?(q=dn,j=Ae):(q=un,j=Le),Fn(Ut(q,j),Ue(j-q)),We||Rn(0,w)),!We&&!Ge&&(Rn(0,0),Fn(0,0))}if(Qe._x=We,Qe._y=Ge,l==null){if(m){if(Da!=null){let[L,z]=Oe.scales;Oe.values[0]=L!=null?Kt(I.ori==0?Ae:Le,L):null,Oe.values[1]=z!=null?Kt(I.ori==1?Ae:Le,z):null}In(Cr,t,Ae,Le,ne,N,g)}if(tn){let L=m&&Oe.setSeries,z=Wt.prox;Pi==null?ii<=z&&Gt(fi,fn,!0,L):ii>z?Gt(null,fn,!0,L):fi!=Pi&&Gt(fi,fn,!0,L)}}At&&(re.idx=g,pr()),d!==!1&&Ke("setCursor")}let hi=null;Object.defineProperty(t,"rect",{get(){return hi==null&&zn(!1),hi}});function zn(l=!1){l?hi=null:(hi=$.getBoundingClientRect(),Ke("syncRect",hi))}function Ca(l,d,m,g,v,w,A){W._lock||ui&&l!=null&&l.movementX==0&&l.movementY==0||(dr(l,d,m,g,v,w,A,!1,l!=null),l!=null?Ti(null,!0,!0):Ti(d,!0,!1))}function dr(l,d,m,g,v,w,A,L,z){if(hi==null&&zn(!1),Ai(l),l!=null)m=l.clientX-hi.left,g=l.clientY-hi.top;else{if(m<0||g<0){Ae=-10,Le=-10;return}let[O,q]=Oe.scales,j=d.cursor.sync,[te,me]=j.values,[de,oe]=j.scales,[J,G]=Oe.match,Pe=d.axes[0].side%2==1,Ie=I.ori==0?ne:N,Ye=I.ori==1?ne:N,xe=Pe?w:v,De=Pe?v:w,gt=Pe?g:m,st=Pe?m:g;if(de!=null?m=J(O,de)?a(te,E[O],Ie,0):-10:m=Ie*(gt/xe),oe!=null?g=G(q,oe)?a(me,E[q],Ye,0):-10:g=Ye*(st/De),I.ori==1){let Pt=m;m=g,g=Pt}}z&&(d==null||d.cursor.event.type==Cr)&&((m<=1||m>=ne-1)&&(m=Di(m,ne)),(g<=1||g>=N-1)&&(g=Di(g,N))),L?(wa=m,$a=g,[dn,un]=W.move(t,m,g)):(Ae=m,Le=g)}let ur={width:0,height:0,left:0,top:0};function mr(){cs(ur,!1)}let Pa,Ta,Ma,Ea;function La(l,d,m,g,v,w,A){ui=!0,We=Ge=Qe._x=Qe._y=!1,dr(l,d,m,g,v,w,A,!0,!1),l!=null&&(nt(Pr,Rr,Ra,!1),In(mo,t,dn,un,ne,N,null));let{left:L,top:z,width:O,height:q}=Ce;Pa=L,Ta=z,Ma=O,Ea=q}function Ra(l,d,m,g,v,w,A){ui=Qe._x=Qe._y=!1,dr(l,d,m,g,v,w,A,!1,!0);let{left:L,top:z,width:O,height:q}=Ce,j=O>0||q>0,te=Pa!=L||Ta!=z||Ma!=O||Ea!=q;if(j&&te&&cs(Ce),Qe.setScale&&j&&te){let me=L,de=O,oe=z,J=q;if(I.ori==1&&(me=z,de=q,oe=L,J=O),We&&mi(H,Kt(me,H),Kt(me+de,H)),Ge)for(let G in E){let Pe=E[G];G!=H&&Pe.from==null&&Pe.min!=$e&&mi(G,Kt(oe+J,G),Kt(oe,G))}mr()}else W.lock&&(W._lock=!W._lock,Ti(d,!0,l!=null));l!=null&&(Qi(Pr,Rr),In(Pr,t,Ae,Le,ne,N,null))}function wc(l,d,m,g,v,w,A){if(W._lock)return;Ai(l);let L=ui;if(ui){let z=!0,O=!0,q=10,j,te;I.ori==0?(j=We,te=Ge):(j=Ge,te=We),j&&te&&(z=Ae<=q||Ae>=ne-q,O=Le<=q||Le>=N-q),j&&z&&(Ae=Ae<dn?0:ne),te&&O&&(Le=Le<un?0:N),Ti(null,!0,!0),ui=!1}Ae=-10,Le=-10,ye.fill(null),Ti(null,!0,!0),L&&(ui=L)}function Fa(l,d,m,g,v,w,A){W._lock||(Ai(l),Ys(),mr(),l!=null&&In(go,t,Ae,Le,ne,N,null))}function za(){F.forEach(Id),Ks(t.width,t.height,!0)}Hi(Ps,xn,za);let hn={};hn.mousedown=La,hn.mousemove=Ca,hn.mouseup=Ra,hn.dblclick=Fa,hn.setSeries=(l,d,m,g)=>{let v=Oe.match[2];m=v(t,d,m),m!=-1&&Gt(m,g,!0,!1)},it&&(nt(mo,$,La),nt(Cr,$,Ca),nt(fo,$,l=>{Ai(l),zn(!1)}),nt(ho,$,wc),nt(go,$,Fa),Nr.add(t),t.syncRect=zn);let ps=t.hooks=n.hooks||{};function Ke(l,d,m){ar?Ln.push([l,d,m]):l in ps&&ps[l].forEach(g=>{g.call(null,t,d,m)})}(n.plugins||[]).forEach(l=>{for(let d in l.hooks)ps[d]=(ps[d]||[]).concat(l.hooks[d])});let Ia=(l,d,m)=>m,Oe=qe({key:null,setSeries:!1,filters:{pub:Co,sub:Co},scales:[H,C[1]?C[1].scale:null],match:[Po,Po,Ia],values:[null,null]},W.sync);Oe.match.length==2&&Oe.match.push(Ia),W.sync=Oe;let Da=Oe.key,fr=_l(Da);function In(l,d,m,g,v,w,A){Oe.filters.pub(l,d,m,g,v,w,A)&&fr.pub(l,d,m,g,v,w,A)}fr.sub(t);function $c(l,d,m,g,v,w,A){Oe.filters.sub(l,d,m,g,v,w,A)&&hn[l](null,d,m,g,v,w,A)}t.pub=$c;function _c(){fr.unsub(t),Nr.delete(t),wi.clear(),Ir(Ps,xn,za),p.remove(),ge?.remove(),Ke("destroy")}t.destroy=_c;function hr(){Ke("init",n,i),ma(i||n.data,!1),B[H]?or(H,B[H]):Ys(),ns=Ce.show&&(Ce.width>0||Ce.height>0),Si=At=!0,Ks(n.width,n.height)}return C.forEach(da),F.forEach(tc),e?e instanceof HTMLElement?(e.appendChild(p),hr()):e(t,hr):hr(),t}Ze.assign=qe;Ze.fmtNum=Kr;Ze.rangeNum=Ts;Ze.rangeLog=Ls;Ze.rangeAsinh=Wr;Ze.orient=Ui;Ze.pxRatio=he;Ze.join=Cp;Ze.fmtDate=Zr,Ze.tzDate=Op;Ze.sync=_l;{Ze.addGap=xd,Ze.clipGaps=zs;let n=Ze.paths={points:Tl};n.linear=El,n.stepped=_d,n.bars=kd,n.spline=Ad}var zl='.uplot, .uplot *, .uplot *::before, .uplot *::after {box-sizing: border-box;}.uplot {font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";line-height: 1.5;width: min-content;}.u-title {text-align: center;font-size: 18px;font-weight: bold;}.u-wrap {position: relative;user-select: none;}.u-over, .u-under {position: absolute;}.u-under {overflow: hidden;}.uplot canvas {display: block;position: relative;width: 100%;height: 100%;}.u-axis {position: absolute;}.u-legend {font-size: 14px;margin: auto;text-align: center;}.u-inline {display: block;}.u-inline * {display: inline-block;}.u-inline tr {margin-right: 16px;}.u-legend th {font-weight: 600;}.u-legend th > * {vertical-align: middle;display: inline-block;}.u-legend .u-marker {width: 1em;height: 1em;margin-right: 4px;background-clip: padding-box !important;}.u-inline.u-live th::after {content: ":";vertical-align: middle;}.u-inline:not(.u-live) .u-value {display: none;}.u-series > * {padding: 4px;}.u-series th {cursor: pointer;}.u-legend .u-off > * {opacity: 0.3;}.u-select {background: rgba(0,0,0,0.07);position: absolute;pointer-events: none;}.u-cursor-x, .u-cursor-y {position: absolute;left: 0;top: 0;pointer-events: none;will-change: transform;}.u-hz .u-cursor-x, .u-vt .u-cursor-y {height: 100%;border-right: 1px dashed #607D8B;}.u-hz .u-cursor-y, .u-vt .u-cursor-x {width: 100%;border-bottom: 1px dashed #607D8B;}.u-cursor-pt {position: absolute;top: 0;left: 0;border-radius: 50%;border: 0 solid;pointer-events: none;will-change: transform;/*this has to be !important since we set inline "background" shorthand */background-clip: padding-box !important;}.u-axis.u-off, .u-select.u-off, .u-cursor-x.u-off, .u-cursor-y.u-off, .u-cursor-pt.u-off {display: none;}';function Il(n){if(["unknown","unavailable"].includes(n.state))return null;let i=ze(n,"power.command_percent"),e=ze(n,"power.applied_percent");return i!==null&&e!==null&&e>=0&&e<=100?[i,e]:null}var Bi=class n{constructor(i,e){this.kind=e;let t=gi(i);if(this.total=t.length,this.unit=Ii(t),this.compatibleUnits=Wn(t),!this.compatibleUnits){this.valid=0,this.points=[],this.reduced=!1,this.distinct=0;return}let s=[],r=0,o=0,a=null,c;for(let p of t){c&&!ri(c,p)&&++o,c=p,a!==null&&p.time-a>n.GAP_SECONDS&&++o,a=p.time;let h=ze(p,e==="scatter"?"error":"model.a"),f=ze(p,e==="scatter"?"power.applied_percent":"model.b");if(!Number.isFinite(p.time)||p.time<0||p.time>864e10||["unknown","unavailable"].includes(p.state)||h===null||f===null||e==="scatter"&&(f<0||f>100)){++o;continue}++r;let u=s.at(-1);e==="model"&&u?.segment===o&&u.x===h&&u.y===f&&u.observedAt===!!p.observedAt?(u.lastTime=p.time,++u.publications):s.push({time:p.time,lastTime:p.time,x:h,y:f,segment:o,publications:1,observedAt:!!p.observedAt})}this.valid=r,this.distinct=s.length,this.reduced=s.length>n.MAX_POINTS,this.points=this.reduced?e==="model"?s.slice(-n.MAX_POINTS):Array.from({length:n.MAX_POINTS},(p,h)=>s[Math.round(h*(s.length-1)/(n.MAX_POINTS-1))]):s}static{this.MAX_POINTS=600}static{this.GAP_SECONDS=600}};var Xe=class extends ce{constructor(){super(...arguments);this.samples=[];this.curves=[];this.range=[0,1];this.heading="";this.syncKey="smartpi";this.percent=!1;this.inspectable=!1;this.selectedTime=null;this.marks=[];this.thermalPhases=!1;this.commandComparison=!1;this.legendTime=null;this.lastSignature="";this.applying=!1;this.themeMedia=matchMedia("(prefers-color-scheme: dark)");this.themeChange=()=>this.draw();this.hiddenCurves=new Set}connectedCallback(){super.connectedCallback(),this.themeMedia.addEventListener("change",this.themeChange),this.hasUpdated&&this.updateComplete.then(()=>this.draw())}disconnectedCallback(){this.themeMedia.removeEventListener("change",this.themeChange),this.dispose(),super.disconnectedCallback()}dispose(){cancelAnimationFrame(this.layoutFrame??0),this.layoutFrame=void 0,this.observer?.disconnect(),this.observer=void 0,this.plot?.destroy(),this.plot=void 0}willUpdate(e){e.has("syncKey")&&(this.legendTime=null),e.has("selectedTime")&&(this.legendTime=this.selectedTime)}updated(e){let t=JSON.stringify([this.curves,this.heading,this.syncKey,this.percent,this.thermalPhases,this.commandComparison,this.range]);if(this.lastSamples===this.samples&&this.lastSignature===t){(e.has("selectedTime")||e.has("marks"))&&this.plot?.redraw(!1,!1);return}this.lastSamples=this.samples,this.lastSignature=t,this.draw()}inspect(e){this.legendTime=e,this.inspectable&&this.dispatchEvent(new CustomEvent("inspect-publication",{detail:e,bubbles:!0,composed:!0}))}toggleSeries(e){let t=this.curves[e].label,s=this.hiddenCurves.has(t);this.plot&&this.plot.setSeries(e+1,{show:s}),s?this.hiddenCurves.delete(t):this.hiddenCurves.add(t),this.requestUpdate()}showCurve(e){let t=this.curves.findIndex(s=>s.path===e);t>=0&&this.hiddenCurves.has(this.curves[t].label)&&this.toggleSeries(t)}continuous(e,t){let s=t.time-e.time;return s>0&&s<=Bi.GAP_SECONDS&&ri(e,t)}drawThermalPhases(e){if(!this.thermalPhases)return;let{left:t,top:s,width:r,height:o}=e.bbox,a=e.ctx;a.save(),a.beginPath(),a.rect(t,s,r,o),a.clip(),a.globalAlpha=1;let c=0,p=0,h=0,f=()=>{if(!h)return;let u=e.valToPos(c,"x",!0),y=e.valToPos(p,"x",!0)-u;a.fillStyle=h>0?"rgba(216,137,46,.14)":"rgba(38,137,202,.14)",a.fillRect(u,s,y,o),a.fillStyle=h>0?"#d8892e":"#2689ca",a.fillRect(u,s+o-6*devicePixelRatio,y,6*devicePixelRatio)};for(let u=1;u<this.samples.length;u++){let y=this.samples[u-1],$=this.samples[u],k=ze(y,"temperature.indoor"),x=ze($,"temperature.indoor"),M=k===null||x===null||!this.continuous(y,$)?0:Math.sign(x-k);M!==h&&(f(),c=y.time,h=M),p=$.time}f(),a.restore()}drawMarks(e,t){if(!this.marks.length)return;let{left:s,top:r,width:o,height:a}=e.bbox,c=e.ctx,p=8*devicePixelRatio;c.save(),c.font=`bold ${p}px sans-serif`,c.textAlign="center",c.textBaseline="middle";let h=new Map;for(let f of this.marks){let u=e.valToPos(f.time,"x",!0);if(u<s||u>s+o||u-(h.get(f.kind)??-1/0)<p*3)continue;h.set(f.kind,u);let y=f.kind==="A"||f.kind==="B",$=f.kind==="A"||f.kind==="Chauffe",k=y?f.temperature===null||this.hiddenCurves.has("Int\xE9rieure mesur\xE9e")?r+p*($?1:3):Math.max(r+p*2,Math.min(r+a-p*6,e.valToPos(f.temperature,"y",!0)))+p*($?-1.1:1.1):r+a-p*($?3:1);c.fillStyle=$?"#17638d":"#6f448a",c.strokeStyle=t,c.beginPath(),f.kind==="B"?(c.moveTo(u,k-p),c.lineTo(u+p,k),c.lineTo(u,k+p),c.lineTo(u-p,k),c.closePath()):c.arc(u,k,p*.8,0,2*Math.PI),c.fill(),c.stroke(),c.fillStyle="#fff",c.fillText(f.kind==="Chauffe"?"\u2191":f.kind==="Refroidissement"?"\u2193":f.kind,u,k)}c.restore()}publishLayout(e){cancelAnimationFrame(this.layoutFrame??0),this.layoutFrame=requestAnimationFrame(()=>{if(this.layoutFrame=void 0,!this.plot||!this.isConnected)return;let t=e.getBoundingClientRect(),s=this.plot.over.getBoundingClientRect();this.dispatchEvent(new CustomEvent("plot-layout",{detail:{left:s.left-t.left,right:t.right-s.right},bubbles:!0,composed:!0}))})}draw(){if(!this.isConnected)return;let e=this.renderRoot.querySelector(".plot");if(!e)return;let t=this.plot;if(t&&t.series.forEach((a,c)=>{c&&typeof a.label=="string"&&(a.show===!1?this.hiddenCurves.add(a.label):this.hiddenCurves.delete(a.label))}),this.dispose(),!this.samples.length||!this.samples.some(a=>this.curves.some(c=>this.seriesValue(a,c)!==null)))return;let s=getComputedStyle(this),r=s.getPropertyValue("--primary-text-color").trim()||"#555",o=[this.samples.map(a=>a.time),...this.curves.map(a=>this.samples.map(c=>this.seriesValue(c,a)))];this.applying=!0,this.plot=new Ze({width:Math.max(240,e.clientWidth),height:245,scales:{x:{time:!0,min:this.range[0],max:this.range[1]},y:this.percent?{range:(a,c,p)=>[Math.min(0,c??0),Math.max(100,p??100)]}:{}},legend:{show:!1},cursor:{sync:{key:this.syncKey},drag:{x:!0,y:!1}},bands:this.commandComparison?[{series:[1,2],fill:"rgba(180,105,30,.22)"},{series:[2,1],fill:"rgba(30,120,155,.22)"}]:[],axes:[{stroke:r,space:100,grid:{show:!1},values:(a,c)=>c.map(p=>new Date(p*1e3).toLocaleDateString(void 0,{month:"2-digit",day:"2-digit"})+`
`+new Date(p*1e3).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})),size:55},{stroke:r,values:(a,c)=>c.map(p=>p.toLocaleString(void 0,{maximumFractionDigits:6})),grid:{stroke:"rgba(128,128,128,.15)"},size:65}],series:[{label:"Date",value:(a,c)=>c==null?"\u2014":new Date(c*1e3).toLocaleString()},...this.curves.map(a=>({label:a.label,stroke:a.color,width:2,dash:a.dash,spanGaps:!1,gaps:(c,p,h,f,u)=>{let y=[...u];for(let k=h+1;k<=f;k++)this.continuous(this.samples[k-1],this.samples[k])||y.push([Math.round(c.valToPos(this.samples[k-1].time,"x",!0)),Math.round(c.valToPos(this.samples[k].time,"x",!0))]);let $=[];for(let k of y.sort((x,M)=>x[0]-M[0])){let x=$.at(-1);x&&k[0]<=x[1]?x[1]=Math.max(x[1],k[1]):$.push([...k])}return $},show:!this.hiddenCurves.has(a.label),paths:a.step?Ze.paths.stepped({align:1}):void 0,points:{show:this.samples.length<3},value:(c,p)=>p==null?"Indisponible":`${p.toLocaleString(void 0,{maximumFractionDigits:a.unit.includes("min")?6:3})} ${a.unit}`}))],hooks:{setCursor:[a=>{let c=a.cursor.idx;if(!this.applying&&c!=null&&a.cursor.left>=0){let p=a.data[0][c];p!==void 0&&(this.legendTime=p)}}],draw:[a=>{if(this.drawThermalPhases(a),this.drawMarks(a,r),this.selectedTime===null)return;let{left:c,top:p,width:h,height:f}=a.bbox,u=a.valToPos(this.selectedTime,"x",!0);if(u<c||u>c+h)return;let y=a.ctx;y.save(),y.strokeStyle=r,y.setLineDash([5,4]),y.beginPath(),y.moveTo(u,p),y.lineTo(u,p+f),y.stroke(),y.restore()}],setSeries:[a=>{a.status!==1||a!==this.plot||(a.series.forEach((c,p)=>{p&&typeof c.label=="string"&&(c.show===!1?this.hiddenCurves.add(c.label):this.hiddenCurves.delete(c.label))}),this.requestUpdate())}],setScale:[(a,c)=>{c==="x"&&a.status===1&&a===this.plot&&!this.applying&&a.scales.x.min!=null&&a.scales.x.max!=null&&(Math.abs(a.scales.x.min-this.range[0])>.01||Math.abs(a.scales.x.max-this.range[1])>.01)&&this.dispatchEvent(new CustomEvent("time-range",{detail:[a.scales.x.min,a.scales.x.max],bubbles:!0,composed:!0}))}]}},o,e),this.applying=!1,this.publishLayout(e),this.observer=new ResizeObserver(()=>{this.plot&&this.plot.width!==Math.max(240,e.clientWidth)&&(this.applying=!0,this.plot.setSize({width:Math.max(240,e.clientWidth),height:245}),this.applying=!1,this.publishLayout(e))}),this.observer.observe(e)}seriesValue(e,t){if(!this.commandComparison)return ze(e,t.path);let s=Il(e);return s===null?null:t.path==="power.command_percent"?s[0]:t.path==="power.applied_percent"?s[1]:null}render(){let e=this.samples.filter(a=>this.curves.some(c=>this.seriesValue(a,c)!==null)).length,t=this.samples.filter(a=>a.time>=this.range[0]&&a.time<=this.range[1]),s=t.find(a=>a.time===this.legendTime),r=s??t.at(-1),o=!s;return b`<h3>${this.heading}</h3>
      <div class="series-controls" role="group" aria-label="Séries affichées">
        ${this.curves.map((a,c)=>b`<button
              aria-pressed=${!this.hiddenCurves.has(a.label)}
              @click=${()=>this.toggleSeries(c)}
            >
              <span style=${"background:"+a.color} aria-hidden="true"></span
              >${a.label}
            </button>`)}
      </div>
      <div class="plot" aria-label=${this.heading}
        @pointerdown=${a=>{this.pointerStart=a.button===0?a.clientX:void 0}}
        @click=${{capture:!0,handleEvent:a=>{let c=this.plot;if(!c||!a.composedPath().includes(c.over)||this.pointerStart===void 0||Math.abs(a.clientX-this.pointerStart)>4)return;let p=c.data[0][c.posToIdx(a.clientX-c.over.getBoundingClientRect().left)];p!==void 0&&this.inspect(p)}}}></div>
      <slot name="context-bars"></slot>
      ${r?b`<div class="publication-values" aria-label="Valeurs de la publication">
        <div class="publication-date">${o?"Derni\xE8re publication de la fen\xEAtre":"Publication s\xE9lectionn\xE9e"}
          · <time datetime=${new Date(r.time*1e3).toISOString()}>${new Date(r.time*1e3).toLocaleString()}</time>
          ${o?"":b`<button type="button" @click=${()=>{this.inspectable?this.inspect(t.at(-1).time):this.legendTime=null}}>Dernière publication</button>`}</div>
        <dl>${this.curves.map(a=>{let c=this.seriesValue(r,a);return b`<div class=${this.hiddenCurves.has(a.label)?"series-muted":""}>
            <dt><span style=${"background:"+a.color} aria-hidden="true"></span>${a.label}</dt>
            <dd>${c===null?"Absente \xE0 cet instant":c.toLocaleString(void 0,{maximumFractionDigits:3})+" "+a.unit}</dd>
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
                    ${this.curves.map(a=>b`<th>${a.label} (${a.unit})</th>`)}
                  </tr>
                </thead>
                <tbody>
                  ${this.samples.slice(-200).map(a=>b`<tr>
                        <td>${this.inspectable?b`<button type="button" aria-pressed=${a.time===this.selectedTime}
                              @click=${()=>this.inspect(a.time)}>${new Date(a.time*1e3).toLocaleString()}</button>`:new Date(a.time*1e3).toLocaleString()}</td>
                        ${this.curves.map(c=>b`<td>
                              ${this.seriesValue(a,c)??"Indisponible"}
                            </td>`)}
                      </tr>`)}
                </tbody>
              </table>
            </div>
            <p>
              200 dernières publications maximum dans la table ; courbe
              complète.
            </p>
          </details>`:b`<p>Aucune valeur disponible pour cette fenêtre.</p>`}`}};Xe.styles=[ms(zl),ve`
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
    `],S([U({attribute:!1})],Xe.prototype,"samples",2),S([U({attribute:!1})],Xe.prototype,"curves",2),S([U({attribute:!1})],Xe.prototype,"range",2),S([U()],Xe.prototype,"heading",2),S([U()],Xe.prototype,"syncKey",2),S([U({type:Boolean})],Xe.prototype,"percent",2),S([U({type:Boolean})],Xe.prototype,"inspectable",2),S([U({attribute:!1})],Xe.prototype,"selectedTime",2),S([U({attribute:!1})],Xe.prototype,"marks",2),S([U({type:Boolean})],Xe.prototype,"thermalPhases",2),S([U({type:Boolean})],Xe.prototype,"commandComparison",2),S([Z()],Xe.prototype,"legendTime",2),Xe=S([we("smartpi-time-chart")],Xe);var na=[{key:"window",label:"Fen\xEAtre",color:"#28799c"},{key:"safety",label:"S\xE9curit\xE9",color:"#ae4e48"},{key:"overpowering",label:"D\xE9lestage",color:"#99651d"}];function sa(n,i,e,t){if(!Number.isFinite(e)||!Number.isFinite(t)||t<=e)return[];let s=[...new Map(n.filter(c=>Number.isFinite(c.suspensions_observed_at)).map(c=>[c.suspensions_observed_at,c])).values()].sort((c,p)=>c.suspensions_observed_at-p.suspensions_observed_at),r=[],o=(c,p,h)=>{if(p<=c)return;let f=r.at(-1);f&&f.end===c&&f.state===h?f.end=p:r.push({start:c,end:p,state:h})},a=e;for(let c=0;c<s.length-1;c++){let p=s[c],h=s[c+1],f=p.suspensions_observed_at,u=h.suspensions_observed_at,y=Math.max(e,f),$=Math.min(t,u);if($<=y)continue;a<y&&o(a,y,"unknown");let k=u-f<=600&&!!p.climate_id&&p.climate_id===h.climate_id,x=p[i];o(y,$,k?i==="window"?x==="on"?"active":x==="off"?"inactive":"unknown":x===!0?"active":x===!1?"inactive":"unknown":"unknown"),a=$}return a<t&&o(a,t,"unknown"),r}var li=class extends ce{constructor(){super(...arguments);this.points=[];this.range=[0,1];this.inset={left:65,right:0};this.error=""}render(){let[e,t]=this.range,s=t-e,r=o=>new Date(o*1e3).toLocaleString("fr-FR");return b`<section aria-label="Suspensions observées dans le carnet local">
      <div class="heading"><strong>Suspensions observées</strong><span>Carnet local · mêmes heures que le graphique</span></div>
      <div class="aligned" style=${`margin-left:${this.inset.left}px;margin-right:${this.inset.right}px`}>
      ${na.map(o=>{let a=sa(this.points,o.key,e,t),c=a.filter(h=>h.state==="active"),p=a.some(h=>h.state!=="unknown");return b`<div class="row"><div class="label"><span class="dot" style=${`background:var(--${o.key},${o.color})`} aria-hidden="true"></span>${o.label}<small>${c.length?"Activit\xE9 observ\xE9e":p?"Aucune activit\xE9 observ\xE9e":"Non archiv\xE9"}</small></div>
          <div class="track" role="img" aria-label=${`${o.label} : ${c.length} plage(s) active(s) ; hachures : inconnu`}>
          ${s>0?a.map(h=>b`<span class=${h.state} title=${`${o.label} \xB7 ${h.state==="active"?"Actif":h.state==="inactive"?"Inactif":"Inconnu"} \xB7 ${r(h.start)} \u2192 ${r(h.end)}`} style=${`left:${100*(h.start-e)/s}%;width:${100*(h.end-h.start)/s}%;--active:var(--${o.key},${o.color})`}></span>`):""}</div>
        </div>`})}
      </div>
      <p class="legend"><span class="key active-key"></span>Actif <span class="key inactive-key"></span>Inactif <span class="key unknown"></span>Inconnu / non archivé</p>
      <p class="scope">États VTherm du carnet local, séparés des courbes Recorder ou de session.</p>
      ${this.error?b`<p role="status">${this.error}</p>`:""}
      <details><summary>Lire les plages de suspension</summary><div class="table"><table><caption>Plages actives observées · ${r(e)} → ${r(t)}</caption><thead><tr><th>Motif</th><th>Début observé</th><th>Fin encadrée</th></tr></thead><tbody>
      ${na.flatMap(o=>sa(this.points,o.key,e,t).filter(a=>a.state==="active").map(a=>b`<tr><th>${o.label}</th><td>${r(a.start)}</td><td>${r(a.end)}</td></tr>`))}
      </tbody></table></div><p>Pas de reconstruction avant la collecte, après la dernière observation ni au travers d’une interruption supérieure à 10 min. Une absence de plage active ne prouve pas l’absence de suspension dans les périodes inconnues. Les barres décrivent les états publiés ; elles n’attribuent pas les variations de température à une cause.</p></details>
    </section>`}};li.styles=ve`:host{display:block;min-width:0;color:var(--primary-text-color)}section{border-top:1px solid var(--divider-color);padding-top:14px;margin:12px 0 8px}.heading{display:flex;gap:8px 18px;align-items:baseline;flex-wrap:wrap;font-size:12px}.heading span,.scope,p,small{color:var(--secondary-text-color);font-size:11px;line-height:1.5}.aligned{margin-top:12px}.row{margin-bottom:10px}.label{font-size:12px;display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin-bottom:4px}.label small{margin-left:auto}.dot{width:7px;height:7px;border-radius:50%;display:inline-block}.track{height:8px;position:relative;border-radius:3px;overflow:hidden;background:var(--divider-color,#e0e4e7)}.track>span{position:absolute;top:0;height:100%}.active{background:var(--active)}.inactive{background:var(--divider-color,#e0e4e7)}.unknown{background:repeating-linear-gradient(135deg,transparent 0 3px,var(--secondary-text-color,#64727a) 3px 4px);opacity:.4}.legend{display:flex;align-items:center;gap:7px;flex-wrap:wrap}.key{width:18px;height:7px;display:inline-block}.active-key{background:#6e6670}.inactive-key{background:var(--divider-color,#e0e4e7)}summary{font-size:12px;min-height:44px;display:flex;align-items:center;cursor:pointer}summary:focus-visible{outline:3px solid var(--primary-color);outline-offset:3px}.table{overflow:auto}table{font-size:12px;border-collapse:collapse;width:100%}caption{text-align:left;padding:8px 0}td,th{text-align:left;padding:7px;border-bottom:1px solid var(--divider-color)}@media(prefers-color-scheme:dark){:host{--window:#64bfe3;--safety:#f08b82;--overpowering:#e9b364}}`,S([U({attribute:!1})],li.prototype,"points",2),S([U({attribute:!1})],li.prototype,"range",2),S([U({attribute:!1})],li.prototype,"inset",2),S([U()],li.prototype,"error",2),li=S([we("smartpi-suspension-ribbon")],li);function Dl(n,i){let e={...i.live};for(let[t,s]of Object.entries({temperature:["indoor","integral_error"],setpoint:["filtered_setpoint"],power:["applied_percent","command_percent","pi_percent","ff_percent"],model:["a","b"],control:["kp","ki"]})){let r=e[t];e[t]={...fe(r)?r:{},...Object.fromEntries(s.map(o=>[o,K(_(i.history,`${t}.${o}`)===void 0?_(i.live,`${t}.${o}`):_(i.history,`${t}.${o}`))]))}}return{...n,state:i.state,available:!["unknown","unavailable"].includes(i.state),lastUpdated:new Date(i.time*1e3).toISOString(),climateId:null,temperatureUnit:i.unit??null,live:e,history:i.history}}var ci=class extends ce{constructor(){super(...arguments);this.expert=!1;this.historical=!1}render(){if(!this.diagnostic)return P;let e=new bi(this.diagnostic),t=e.blocks(),[s,r,o,a,c,p,h,f]=t,u=e.route,y=e.directMode,$=e.timingForced,k=e.saturation,x=`${this.diagnostic.entityId}/${y??u}`,M=R=>{this.selected={context:x,id:R}},C=u==="direct"?c:u==="pi"&&($===!0||k)?p:h,F=(this.selected?.context===x?t.find(R=>R.id===this.selected?.id):void 0)??C,E=y?`Voie directe \xB7 ${y}`:u==="pi"?"Voie PI + anticipation":"Chemin non v\xE9rifi\xE9",X=y?["PI/FF contourn\xE9s",`SmartPI d\xE9clare une voie directe en ${y.toLocaleLowerCase("fr-FR")}.`]:u!=="pi"?["Motif indisponible","Cette publication ne permet pas de v\xE9rifier le chemin de commande."]:$===!0?["Temporisation impos\xE9e","SmartPI signale une contrainte de dur\xE9e minimale."]:k?[k,"SmartPI publie l\u2019\xE9tat de saturation de la voie PI."]:$===!1?["Temporisation non impos\xE9e","Le drapeau de temporisation impos\xE9e est inactif."]:["Motif indisponible","Cette publication ne renseigne pas la temporisation."],H=u==="pi"&&($===!0||k!==null),D=u==="direct"?[[c,"D\xE9cision",y,"Voie directe"],[h,"Sortie","Appliqu\xE9e",h.value]]:[[c,"Demande",u==="pi"?"PI + anticipation":"Demand\xE9e",c.value],[p,"Contraintes","Limites et timing",u==="pi"?p.value:"Chemin non v\xE9rifi\xE9"],[h,"Sortie","Appliqu\xE9e",h.value]],ee=u==="pi"?[r,s,o,a,f]:[r,s,f],se=this.diagnostic.lastUpdated,Q=se?new Date(se):null,I=this.diagnostic.available&&Q&&Number.isFinite(Q.valueOf())?b`${this.historical?"Publication archiv\xE9e":"Derni\xE8re mise \xE0 jour du capteur"} : <time datetime=${Q.toISOString()}>${new Intl.DateTimeFormat("fr-FR",{dateStyle:"short",timeStyle:"medium"}).format(Q)}</time>`:"Horodatage des donn\xE9es actuelles indisponible",ie=[[20,20],[20,155],[235,20],[235,155],[450,80],[660,80],[660,265],[235,300]];return b`<div class="intro">
        <div>
          <span class="eyebrow">COMPRENDRE LA COMMANDE</span>
          <h3>${this.historical?"Le r\xE9gulateur, \xE0 cette publication":"Le r\xE9gulateur, en direct"}</h3>
        </div>
        <span class="badge route-badge">${E}</span>
      </div>
      <p class="muted stamp">${I}</p>
      <dl class="snapshot">
        <div><dt>Température intérieure</dt><dd>${r.value}</dd><small>Mesure publiée</small></div>
        <div><dt>Consigne filtrée</dt><dd>${s.value}</dd><small>${e.bypass?"Voie P contourn\xE9e":"Voie proportionnelle"}</small></div>
        <div><dt>Commande demandée</dt><dd>${e.bypass?"\u2014":c.value}</dd>
          <small>${e.bypass?"Voie PI contourn\xE9e":"Demande publi\xE9e"}</small></div>
        <div><dt>Commande appliquée</dt><dd>${h.value}</dd><small>Signal de commande</small></div>
      </dl>
      <div class="work">
      <section class="route" aria-labelledby="route-title">
        <h4 id="route-title">Chemin de commande</h4>
        <div class="note ${H?"warning":""}">
          <strong>${X[0]}</strong><p>${X[1]}</p>
        </div>
        <ol class="steps">
          ${D.map(([R,Y,B,ae],V)=>b`<li>
            ${V>0&&u!=="unavailable"?b`<span class="arrow" aria-hidden="true">→</span>`:P}
            <button type="button" class="step" data-block=${R.id} aria-pressed=${R.id===F.id}
              aria-controls="signal-inspector" @click=${()=>M(R.id)}>
              <small>${Y}</small><strong>${B}</strong><span>${ae}</span>
            </button></li>`)}
        </ol>
        <div class="quick-blocks" role="group" aria-label="Signaux associés">
          ${ee.map(R=>b`<button type="button" aria-pressed=${R.id===F.id}
            aria-controls="signal-inspector" @click=${()=>M(R.id)}>${R.id==="ff"?"Anticipation":R.title}</button>`)}
        </div>
      </section>
      <aside id="signal-inspector" aria-labelledby="signal-title">
        <span class="eyebrow">INSPECTION DU SIGNAL</span>
        <h4 id="signal-title" aria-live="polite">${F.title} <span class="badge">${F.status}</span></h4>
        <p>${F.explanation}</p>
        <dl>
          <div><dt>Valeur du bloc</dt><dd>${F.value}</dd>
            ${this.expert?b`<code>attributes.live.${F.path}</code>`:null}</div>
          <div><dt>Motif ou contexte publié</dt><dd>${F.reason}</dd>
            ${this.expert?b`<code>attributes.live.${F.reasonPath}</code>`:null}</div>
          ${e.detail(F,this.expert).map(R=>b`<div>
            <dt>${R.label}</dt><dd>${R.value}</dd>
            ${this.expert?b`<code>attributes.live.${R.path}</code>${R.reliability?b`<code>Fiabilité · ${R.reliability}</code>`:null}`:null}
          </div>`)}
        </dl>
        ${F.status==="Contourn\xE9"?b`<p class="muted">Ces valeurs décrivent un bloc hors du chemin actif.</p>`:P}
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
          ${e.route==="pi"?Fe`<path class="flow" d="M205 65 H235"/><path class="flow" d="M205 195 H220 V95 H235"/><path class="flow" d="M420 65 H435 V115 H450"/><path class="flow" d="M420 195 H435 V145 H450"/>`:e.bypass?Fe`<path class="flow bypass" d="M635 125 H647 V310 H660"/>`:null}
          ${e.route==="pi"?Fe`<path class="flow" d="M635 125 H660"/><path class="flow" d="M752 170 V265"/>`:null}
          ${u!=="unavailable"?Fe`<path class="flow feedback" d="M660 315 H420" />
            <path class="flow feedback" d="M235 345 H110 V245" />`:P}
          ${t.map((R,Y)=>Fe`<g role="button" tabindex="0" aria-pressed=${R.id===F.id} aria-label=${`${R.title} : ${R.value}. ${R.status}`} class=${"block "+(R.id===F.id?"selected":"")+(R.status==="Contourn\xE9"?" inactive":"")} transform=${`translate(${ie[Y][0]},${ie[Y][1]})`} @click=${()=>M(R.id)} @keydown=${B=>{(B.key==="Enter"||B.key===" ")&&(B.preventDefault(),M(R.id))}}>
          <title>${R.explanation}</title><rect width="185" height="90" rx="10"/><text x="13" y="23" class="title">${R.title}</text><text x="13" y="50" class="value">${R.value}</text><text x="13" y="73" class="status">${R.status}</text>
        </g>`)}
        </svg>
      </div>
      <div class="mobile">
        ${t.map(R=>b`<button
              type="button"
              aria-pressed=${R.id===F.id}
              @click=${()=>M(R.id)}
            >
              ${R.title}<strong>${R.value}</strong><small>${R.status}</small>
            </button>`)}
      </div>
      </details>`}};ci.styles=ve`
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
  `,S([U({attribute:!1})],ci.prototype,"diagnostic",2),S([U({type:Boolean})],ci.prototype,"expert",2),S([U({type:Boolean})],ci.prototype,"historical",2),S([Z()],ci.prototype,"selected",2),ci=S([we("smartpi-control-diagram")],ci);var Cn=class extends ce{render(){if(!this.diagnostic)return b``;let i=new bi(this.diagnostic),e=i.chain(),t=Math.max(100,...e.map(s=>Math.abs(s.value??0)));return b`<h3>Chaîne U <span>Instantané · % de commande</span></h3>
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
            <strong>${T(s.value," %",2)}</strong>
          </div>`)}
      <p>
        Ces diagnostics peuvent décrire un candidat et un cycle déjà engagé.
        Leurs différences ne sont pas une preuve de perte ni de limitation.
      </p>
      <p>
        Échelle symétrique ±${T(t," %")} ; aucune composante hors 0–100
        % n’est tronquée. Ratios FF convertis ×100 pour cette vue.
      </p>
      <p>
        Raison FF2 :
        ${T(_(this.diagnostic.live,"analysis.feedforward.ff2_freeze_reason"))}
        · FF3 : ${T(_(this.diagnostic.live,"feedforward.ff3_status"))} ·
        Intégrale :
        ${T(_(this.diagnostic.live,"temperature.integral_mode"))}
      </p>
      ${_(this.diagnostic.live,"power.valve_linearization_enabled")===!0?b`<p>
            Courbe de vanne active : les espaces linéaire et actionneur
            diffèrent. Aucun écart causal n’est calculé entre ces étapes.
          </p>`:null}`}};Cn.styles=ve`
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
  `,S([U({attribute:!1})],Cn.prototype,"diagnostic",2),Cn=S([we("smartpi-command-chain")],Cn);var Pn=n=>Math.abs(n)>=1e4||n!==0&&Math.abs(n)<1e-4?n.toExponential(2):n.toLocaleString("fr-FR",{maximumFractionDigits:6}),Ol=(n,i)=>{let e=Math.max(3,Math.min(10,Math.ceil(Math.log10(Math.abs(n/i)||1))+1));return Math.abs(n)>=1e4||n!==0&&Math.abs(n)<.001?n.toExponential(e-1):n.toLocaleString("fr-FR",{maximumSignificantDigits:e})},Vi=n=>new Date(n*1e3).toLocaleString("fr-FR"),$t=class extends ce{constructor(){super(...arguments);this.samples=[];this.kind="scatter";this.source="";this.contextId="";this.inspectable=!1;this.selected=-1;this.page=0;this.plotWidth=720;this.projection=new Bi([],"scatter")}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(e=>{let t=Math.max(240,Math.round(e[0].contentRect.width));t!==this.plotWidth&&(this.plotWidth=t)}),this.observer.observe(this)}disconnectedCallback(){this.observer?.disconnect(),this.observer=void 0,super.disconnectedCallback()}willUpdate(e){if(e.has("samples")||e.has("kind")){let t=this.projection.points[this.selected]?.time;this.projection=new Bi(this.samples,this.kind),this.selected=this.projection.points.findIndex(s=>s.time===t),this.page=Math.min(this.page,Math.max(0,Math.ceil(this.projection.points.length/25)-1))}e.has("contextId")&&(this.selected=-1,this.page=0)}select(e){let t=this.projection.points;this.selected=Math.max(0,Math.min(t.length-1,e));let s=t[this.selected];s&&this.inspectable&&this.dispatchEvent(new CustomEvent("inspect-publication",{detail:s.time,bubbles:!0,composed:!0}))}bounds(e,t=!1){let s=Math.min(...e),r=Math.max(...e);t&&(s=Math.min(0,s),r=Math.max(0,r));let o=r-s,a=o?o*.08:Math.abs(s)>0?Math.abs(s)*.05:.001;return[Number.isFinite(s-a)?s-a:s,Number.isFinite(r+a)?r+a:r]}coordinates(){let e=this.projection.points,t=this.bounds(e.map(o=>o.x),this.kind==="scatter"),s=this.kind==="scatter"?[0,100]:this.bounds(e.map(o=>o.y)),r=(o,a)=>{let c=Math.max(Math.abs(a[0]),Math.abs(a[1]),Number.MIN_VALUE),p=a[0]/c,h=a[1]/c;return h===p?.5:(o/c-p)/(h-p)};return{xr:t,yr:s,x:o=>78+r(o,t)*(this.plotWidth-102),y:o=>240-r(o,s)*202}}clickPlot(e){let t=e.currentTarget,s=t.getScreenCTM();if(!s)return;let{x:r,y:o}=new DOMPoint(e.clientX,e.clientY).matrixTransform(s.inverse()),{x:a,y:c}=this.coordinates(),p=0,h=1/0;this.projection.points.forEach((f,u)=>{let y=(a(f.x)-r)**2+(c(f.y)-o)**2;y<h&&(h=y,p=u)}),this.select(p)}render(){let e=this.kind==="model",t=this.projection,s=t.points,r=e?"Parcours des coefficients A/B":"\xC9cart filtr\xE9 et commande appliqu\xE9e",o=e?`A publi\xE9 (${t.unit}/min/u)`:`Consigne filtr\xE9e \u2212 mesure (${t.unit})`,a=e?"B publi\xE9 (min\u207B\xB9)":"Commande appliqu\xE9e (%)",c=this.selected<0?s.length-1:Math.min(this.selected,s.length-1),p=s[c],{x:h,y:f,xr:u,yr:y}=s.length?this.coordinates():{x:x=>0,y:x=>0,xr:[0,1],yr:[0,1]},$=[];if(e){let x=-1;for(let M of s)x!==M.segment?($.push(`M ${h(M.x)} ${f(M.y)}`),x=M.segment):$[$.length-1]+=` L ${h(M.x)} ${f(M.y)}`}let k=this.plotWidth<500?[0,.5,1]:[0,.25,.5,.75,1];return b`<section aria-labelledby="projection-title">
      <h3 id="projection-title">${r}</h3>
      <p class="source">${this.source} · ${t.valid} / ${t.total} publications couplées</p>
      ${s.length?b`
        <p class="axis-label">${a}</p>
        <svg viewBox=${`0 0 ${this.plotWidth} 292`} role="img" aria-label=${`${r}. ${s.length} points affich\xE9s. ${o} ; ${a}. La s\xE9lection est accessible avec les contr\xF4les Publication.`} @click=${this.clickPlot}>
          ${k.map(x=>{let M=240-x*202;return Fe`<line x1="78" x2=${this.plotWidth-24} y1=${M} y2=${M} class="grid"/><text x="65" y=${M+5} text-anchor="end">${Ol(y[0]*(1-x)+y[1]*x,(y[1]-y[0])/(k.length-1))}</text>`})}
          <line x1="78" x2=${this.plotWidth-24} y1="240" y2="240" class="axis"/><line x1="78" x2="78" y1="38" y2="240" class="axis"/>
          ${k.map(x=>Fe`<text x=${78+x*(this.plotWidth-102)} y="267" text-anchor="middle">${Ol(u[0]*(1-x)+u[1]*x,(u[1]-u[0])/(k.length-1))}</text>`)}
          ${e?P:Fe`<line x1=${h(0)} x2=${h(0)} y1="38" y2="240" class="zero"/>`}
          ${$.map(x=>Fe`<path class="trajectory" d=${x}/>`)}
          ${s.map((x,M)=>Fe`<circle cx=${h(x.x)} cy=${f(x.y)} r=${M===c?6:3} class=${M===c?"selected-point":e&&M===0?"first-point":"point"}/>`)}
          ${e?Fe`<text x=${h(s.at(-1).x)+8} y=${f(s.at(-1).y)-10}>${s.length===1?"Unique":s[0].x===s.at(-1).x&&s[0].y===s.at(-1).y?"D\xE9but / fin":"Fin"}</text>`:P}
        </svg>
        <p class="axis-label x-label">${o}</p>
        ${e?b`<p class="legend"><span>○ Premier couple affiché · ${Vi(s[0].time)}</span><span>Dernier couple · ${Vi(s.at(-1).lastTime)}</span></p>`:P}
        <div class="selection-controls"><button type="button" aria-label=${`Publication pr\xE9c\xE9dente \xB7 ${r}`} ?disabled=${c<=0} @click=${()=>this.select(c-1)}>←</button>
          <label>Publication <input type="range" min="0" max=${s.length-1} step="1" .value=${String(c)} aria-label=${`Publication \xB7 ${r}`} aria-valuetext=${p?`${Vi(p.time)} ; ${Pn(p.x)}, ${Pn(p.y)}`:""} @input=${x=>this.select(Number(x.currentTarget.value))}></label>
          <button type="button" aria-label=${`Publication suivante \xB7 ${r}`} ?disabled=${c>=s.length-1} @click=${()=>this.select(c+1)}>→</button></div>
        <p class="selection" role="status">${p?b`${Vi(p.time)}${p.observedAt?" (heure d\u2019observation)":""} · ${e?"A":"\xC9cart"} ${Pn(p.x)} · ${e?"B":"Appliqu\xE9e"} ${Pn(p.y)}${e?b` · ${p.publications} publication(s)${p.lastTime!==p.time?b` jusqu’au ${Vi(p.lastTime)}`:P}`:" %"}`:P}</p>
        <details><summary>Table des points affichés (${s.length})</summary>
          <div class="table-wrap"><table><caption>${r} · points affichés</caption><thead><tr><th>Date</th><th>${o}</th><th>${a}</th>${e?b`<th>Publications regroupées</th>`:P}</tr></thead><tbody>
            ${s.slice(this.page*25,(this.page+1)*25).map(x=>b`<tr><td><button type="button" @click=${()=>this.select(s.indexOf(x))}>${Vi(x.time)}${x.observedAt?" (observation)":""}</button>${x.lastTime!==x.time?b` → ${Vi(x.lastTime)}`:P}</td><td>${Pn(x.x)}</td><td>${Pn(x.y)}</td>${e?b`<td>${x.publications}</td>`:P}</tr>`)}
          </tbody></table></div>
          <div class="pages"><button type="button" ?disabled=${this.page===0} @click=${()=>--this.page}>Page précédente</button><span>${this.page+1} / ${Math.ceil(s.length/25)}</span><button type="button" ?disabled=${(this.page+1)*25>=s.length} @click=${()=>++this.page}>Page suivante</button></div>
        </details>`:b`<p class="empty">Aucun couple ${e?"A/B":"\xE9cart / commande"} exploitable dans cette source et cette fenêtre.</p>`}
      ${t.compatibleUnits?P:b`<p class="notice">Unités archivées différentes : aucun axe commun. Réduisez la période.</p>`}
      ${t.reduced?b`<p class="notice">${e?"600 derniers couples distincts affich\xE9s":"600 publications r\xE9parties dans la fen\xEAtre pour le dessin"} sur ${t.distinct}. Zoomez pour examiner une période plus courte. La sélection et la table portent sur ces points affichés.</p>`:P}
      <p class="foot">${e?"Les couples identiques successifs sont regroup\xE9s. Les traits suivent les publications, coup\xE9s aux donn\xE9es manquantes et interruptions sup\xE9rieures \xE0 10 min. Une variation ne prouve pas un apprentissage accept\xE9 ; la confiance actuelle ne valide pas le pass\xE9.":"Chaque point associe deux valeurs de la m\xEAme publication. Le nombre de points ne repr\xE9sente pas une dur\xE9e ; cet \xE9cart filtr\xE9 n\u2019est ni l\u2019erreur de l\u2019int\xE9grateur ni une mesure de confort. Aucun ajustement de courbe n\u2019est calcul\xE9."}</p>
    </section>`}};$t.styles=ve`
    :host{display:block;color:var(--primary-text-color,#192b31);min-width:0;--plot:#176b8c;--selected:#984d14}*{box-sizing:border-box}h3{margin:0 0 8px;font-size:16px}.source,.axis-label,.foot,.legend{font-size:12px;color:var(--secondary-text-color,#526268);line-height:1.6}.axis-label{margin:10px 0 0}.x-label{text-align:center;margin:0}.legend{display:flex;flex-wrap:wrap;gap:8px 18px}svg{display:block;width:100%;height:auto;max-height:340px;cursor:crosshair;overflow:visible}svg text{font:14px sans-serif;fill:var(--secondary-text-color,#526268)}.grid,.axis{stroke:var(--divider-color,#c6d0d4);stroke-width:1}.zero{stroke:var(--secondary-text-color,#526268);stroke-dasharray:4 5;opacity:.6}.point{fill:var(--plot);opacity:.55}.first-point{fill:none;stroke:var(--plot);stroke-width:2}.trajectory{fill:none;stroke:var(--plot);stroke-width:1.5;opacity:.55}.selected-point{fill:var(--selected);stroke:var(--card-background-color,#fff);stroke-width:2}.selection-controls{display:flex;align-items:center;gap:12px;margin-top:14px}.selection-controls label{flex:1;font-size:12px}.selection-controls input{display:block;width:100%;min-height:44px;accent-color:var(--plot)}button{font:inherit;color:inherit;background:var(--card-background-color,#fff);border:1px solid var(--divider-color,#b5c0c4);border-radius:7px;min-width:44px;min-height:44px;padding:8px 12px;cursor:pointer}button:disabled{opacity:.5;cursor:default}button:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid var(--primary-color,#167883);outline-offset:3px}.selection,.notice,.empty{font-size:13px;line-height:1.6;overflow-wrap:anywhere}.selection{font-variant-numeric:tabular-nums}.pages{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;flex-wrap:wrap}.table-wrap{overflow:auto;max-width:100%}table{border-collapse:collapse;width:100%;font-size:12px}th,td{text-align:left;padding:8px;border-bottom:1px solid var(--divider-color,#d2dbdd)}caption{text-align:left;padding:10px 0}summary{min-height:44px;padding:12px 0;font-size:13px;cursor:pointer}@media(max-width:520px){svg text{font-size:11px}.selection-controls{gap:7px}}@media(prefers-color-scheme:dark){:host{--plot:#80c8e6;--selected:#efb278}}
  `,S([U({attribute:!1})],$t.prototype,"samples",2),S([U()],$t.prototype,"kind",2),S([U()],$t.prototype,"source",2),S([U()],$t.prototype,"contextId",2),S([U({type:Boolean})],$t.prototype,"inspectable",2),S([Z()],$t.prototype,"selected",2),S([Z()],$t.prototype,"page",2),S([Z()],$t.prototype,"plotWidth",2),$t=S([we("smartpi-diagnostic-projection")],$t);var ra=[{label:"Int\xE9rieure mesur\xE9e",path:"temperature.indoor",color:"#2689ca",unit:"\xB0C"},{label:"Consigne filtr\xE9e",path:"setpoint.filtered_setpoint",color:"#d6892e",unit:"\xB0C",step:!0}],qs=ra.map(n=>n.step?{...n,dash:[6,4]}:n),Od=["A","B","Chauffe","Refroidissement"],Hs=[{label:"Appliqu\xE9e",path:"power.applied_percent",color:"#2689ca",unit:"%",step:!0},{label:"Demand\xE9e",path:"power.command_percent",color:"#d6892e",unit:"%",step:!0},{label:"PI",path:"power.pi_percent",color:"#9d78bd",unit:"%",step:!0},{label:"FF",path:"power.ff_percent",color:"#39a38a",unit:"%",step:!0}],qd=new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2,signDisplay:"exceptZero"}),Se=class extends ce{constructor(){super(...arguments);this.session=[];this.observations=[];this.observationError="";this.tab="evolution";this.hiddenLearning=[];this.expert=!1;this.hours=24;this.end=Date.now()/1e3;this.range=[this.end-86400,this.end];this.recorder=[];this.loading=!1;this.error="";this.preferSession=!1;this.followNow=!0;this.replay=!1;this.livePublicationMissing=!1;this.piMemoryOpen=!1;this.generation=0;this.recorderEntity=""}async inspectBlock(e){this.block=e,e!=="model"&&this.renderRoot.querySelector(".command-chart smartpi-time-chart")?.showCurve(`power.${e}_percent`),await this.updateComplete,this.renderRoot.querySelector("#block-title")?.focus()}inspect(e){this.diagnostic&&(this.livePublicationMissing=!1,this.followNow=!1,this.inspection={entityId:this.diagnostic.entityId,recorder:this.usingRecorder,time:e})}async inspectEvent(e){this.inspect(e),await this.updateComplete,this.renderRoot.querySelector("#inspection-title")?.focus()}async openLivePublication(){let e=Ht(this.diagnostic?.lastUpdated),t=this.usingRecorder?this.recorder:this.session,s=this.diagnostic?.available&&e!==null?this.windowData(t).samples.find(r=>!r.observedAt&&r.time===e):void 0;this.tab="evolution",this.inspection=void 0,this.livePublicationMissing=!s,s&&this.inspect(s.time),await this.updateComplete,this.renderRoot.querySelector("#inspection-title")?.focus()}get usingRecorder(){return this.recorderEntity===this.diagnostic?.entityId&&!this.preferSession&&Sr(this.recorder)}willUpdate(e){if(this.followNow&&!this.usingRecorder&&(e.has("session")||e.has("preferSession")||e.has("recorder"))){let t=this.session.at(-1)?.time;t!==void 0&&t>this.range[1]&&(this.end=t,this.range=[t-this.hours*3600,t])}}windowData(e){if(this.filteredCache?.all===e&&this.filteredCache.start===this.range[0]&&this.filteredCache.end===this.range[1])return this.filteredCache;let t=e.filter(s=>s.time>=this.range[0]&&s.time<=this.range[1]);return this.filteredCache={all:e,start:this.range[0],end:this.range[1],samples:t,tracking:ro(t),events:ao(e).filter(s=>s.time>=this.range[0]&&s.time<=this.range[1])}}updated(e){let t=e.get("diagnostic");e.has("diagnostic")&&t?.entityId!==this.diagnostic?.entityId&&(this.recorder=[],this.preferSession=!1,this.livePublicationMissing=!1,this.reset(),this.load())}disconnectedCallback(){++this.generation,this.filteredCache=void 0,this.recorder=[],this.session=[],this.loading=!1,super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.load()}reset(){this.followNow=!0,this.end=Date.now()/1e3,this.range=[this.end-this.hours*3600,this.end]}shift(e){this.followNow=!1;let t=this.range[1]-this.range[0],s=Date.now()/1e3,r=this.end-48*3600,o=Math.min(s,Math.max(r+t,this.range[1]+e*t/2));this.range=[o-t,o]}zoom(e){this.followNow=!1;let[t,s]=this.range,r=Math.max(60,Math.min(48*3600,(s-t)*e));this.range=[s-r,s]}async load(){this.inspection=void 0,this.livePublicationMissing=!1;let e=++this.generation,t=this.diagnostic;if(this.loading=!0,this.error="",this.recorder=[],!t||!this.hass?.callWS){this.error="Lecture Recorder non disponible dans cette connexion. Historique de session utilis\xE9.",this.loading=!1;return}try{let s=Date.now()/1e3,r=await lo(this.hass,t.entityId,s-48*3600,s,()=>e!==this.generation);if(e!==this.generation)return;this.recorderEntity=t.entityId,this.recorder=r,Sr(r)||(this.error="Recorder ne fournit aucune s\xE9rie v2 exploitable. Historique de session utilis\xE9.")}catch(s){if(e!==this.generation)return;this.error=s instanceof Error&&s.message.startsWith("Format")?s.message:"Lecture Recorder refus\xE9e ou impossible. Historique de session utilis\xE9 ; v\xE9rifier les droits et Recorder."}finally{e===this.generation&&(this.loading=!1)}}trackingPanel(e,t,s){let{pairs:r,signedMedian:o,absoluteMedian:a,largestInterval:c}=e;return b`<section class="pane tracking" aria-labelledby="tracking-heading">
      <div class="tracking-title">
        <h3 id="tracking-heading">Écart à la consigne filtrée</h3>
        <span>Consigne filtrée − température intérieure</span>
      </div>
      <dl class="metrics">
        <div><dt>Couples valides</dt><dd>${r} / ${t}</dd></div>
        <div><dt>Médiane signée</dt><dd>${o===null?"Indisponible":`${qd.format(o)} ${s}`}</dd></div>
        <div><dt>Médiane absolue</dt><dd>${T(a," "+s)}</dd></div>
        <div><dt>Plus long intervalle entre couples</dt><dd>${T(c===null?null:c/60," min",1)}</dd></div>
      </dl>
      ${r>=2&&o===null?b`<p>Résumé indisponible : les couples traversent des unités ou des contextes enregistrés différents. Réduisez la période.</p>`:P}
      <p>${r<2?"Deux couples valides dans la fen\xEAtre sont n\xE9cessaires pour r\xE9sumer l\u2019\xE9cart.":"Un \xE9cart positif indique une temp\xE9rature sous la consigne filtr\xE9e. La m\xE9diane absolue indique la taille typique de l\u2019\xE9cart observ\xE9."}</p>
      <details>
        <summary>Méthode et limites</summary>
        <p>Chaque couple provient d’une même publication et compte une fois, indépendamment de l’intervalle entre les points. Les publications incomplètes sont exclues des médianes. Le plus long intervalle décrit l’espacement des couples valides.</p>
        <p>Ces valeurs décrivent les publications de la source et de la fenêtre affichées. L’évaluation d’une durée de confort ou d’une réponse à un changement de consigne demande des données et un protocole adaptés.</p>
      </details>
    </section>`}inspectionPanel(e,t,s){let r=t?{...e,state:t.state,available:t.state!=="unknown"&&t.state!=="unavailable",live:t.live,history:t.history,lastUpdated:new Date(t.time*1e3).toISOString(),climateId:null,temperatureUnit:t.unit??null}:e,o=new bi(r).route,a=t?s?"Recorder":"Session":"Instantan\xE9 SmartPI",c=t?new Date(t.time*1e3):e.lastUpdated?new Date(e.lastUpdated):null,p=(C,F="")=>C==null&&t&&r.available?"Non archiv\xE9":T(C,F.replace("\xB0C",t?t.unit??"unit\xE9 source":e.temperatureUnit??"unit\xE9 source")),h=[["Temp\xE9rature int\xE9rieure mesur\xE9e","temperature.indoor"," \xB0C"],["Consigne filtr\xE9e","setpoint.filtered_setpoint"," \xB0C"],["Commande demand\xE9e","power.command_percent"," %"],["Commande appliqu\xE9e","power.applied_percent"," %"]],f=this.block,u=(C,F)=>b`<button type="button" aria-pressed=${f===C} aria-controls="block-detail"
        @click=${()=>void this.inspectBlock(C)}>${F}</button>`,y=o==="direct"?["Consigne et mesure","Hyst\xE9r\xE9sis ou calibration","Commande publi\xE9e","Pi\xE8ce"]:["Consigne et mesure",b`<span>Voies P et I</span> → ${u("pi","PI")}`,b`+ ${u("ff","Anticipation")}`,"Limites et temporisation","Commande publi\xE9e","Pi\xE8ce"],$={pi:[["Contribution PI","power.pi_percent"," %"]],ff:[["Anticipation retenue","power.ff_percent"," %"]],model:[["Gain thermique estim\xE9 A","model.a"," \xB0C/min/u"],["Pertes estim\xE9es B","model.b"," min\u207B\xB9"]]},k="analysis.twin.twin_T_steady",x=_(r.live,k)==null?p(void 0):p(ot(r.live,k,"analysis.twin.twin_T_steady_reliable")," \xB0C"),M=t?Dl(e,t):null;return b`${t?b`<section class="replay-bar">
      <strong>Historique · ${a} · ${c?.toLocaleString()}</strong>
      <label>Parcourir les publications <input aria-label="Publication historique" type="range" min="0" max=${Math.max(0,this.windowData(s?this.recorder:this.session).samples.length-1)}
        .value=${String(this.windowData(s?this.recorder:this.session).samples.findIndex(C=>C.time===t.time))}
        @input=${C=>{let F=this.windowData(s?this.recorder:this.session).samples[Number(C.target.value)];F&&this.inspect(F.time)}}></label>
      <button type="button" aria-pressed=${this.replay} @click=${()=>{this.replay=!this.replay}}>Schéma de cette publication</button>
      <p>Uniquement les champs archivés. Consigne normale, fenêtre et mode HVAC non déduits de l’état actuel.</p>
      ${this.replay&&M?b`<smartpi-control-diagram .historical=${!0} .diagnostic=${M} .expert=${this.expert}></smartpi-control-diagram>`:P}
    </section>`:P}<section class="synoptic" aria-labelledby="synoptic-title">
        <h3 id="synoptic-title">Synoptique de régulation</h3>
        <ol class="signal-path" aria-label=${o==="unavailable"?"Sch\xE9ma de r\xE9f\xE9rence":"Voie d\xE9clar\xE9e"}>
          ${y.map((C,F)=>b`<li class=${o==="unavailable"?"":"active-path"}>
            ${F?b`<span aria-hidden="true">${F===2&&o!=="direct"?"":"\u2192"}</span>`:P}
            ${C}</li>`)}
        </ol>
        <p>${o==="pi"?"Voie PI active":o==="direct"?"Voie directe d\xE9clar\xE9e":"Chemin actif non v\xE9rifi\xE9"}</p>
        <p>↶ Retour de la mesure · ${u("model","Mod\xE8le thermique")}</p>
      </section>
      <aside class="publication" aria-labelledby="inspection-title">
        <h3 id="inspection-title" tabindex="-1">${t?"Publication s\xE9lectionn\xE9e":"En direct"}</h3>
        <p role="status" class="inspection-status">
          ${a} · ${t?.observedAt?"Observation de session":"Publication"} ·
          ${c&&Number.isFinite(c.valueOf())?b`<time datetime=${c.toISOString()}>${c.toLocaleString()}</time>`:"Horodatage indisponible"}
        </p>
        <dl>
          <dt>État publié</dt><dd>${r.state}</dd>
          ${h.map(([C,F,E])=>b`<dt>${C}</dt>
            <dd>${p(t?ze(t,F):_(e.live,F),E)}</dd>`)}
          ${t?b`<dt>Écart à la consigne filtrée</dt><dd>${p(ze(t,"error")," \xB0C")}</dd>`:P}
          <dt>État de l’intégrale</dt><dd>${p(_(r.live,"temperature.integral_mode"))}</dd>
          <dt>Saturation déclarée</dt><dd>${p(_(r.live,"control.saturation_state"))}</dd>
          <dt>Limitation par temporisation</dt><dd>${p(_(r.live,"analysis.control.forced_by_timing"))}</dd>
        </dl>
        <div id="block-detail">
          ${f?b`<h4 id="block-title" tabindex="-1">
              ${{pi:"D\xE9tails PI",ff:"D\xE9tails anticipation",model:"D\xE9tails du mod\xE8le"}[f]}
            </h4>
            <dl>${$[f].map(([C,F,E])=>b`<dt>${C}</dt>
              <dd>${p(t?ze(t,F):_(e.live,F),E)}</dd>`)}
              ${f==="pi"?b`<dt>Erreur de la voie P</dt>
                <dd>${p(_(r.live,"analysis.control.error_p")," \xB0C")}</dd>
                <dt>Erreur brute de la voie I</dt>
                <dd>${p(_(r.live,"temperature.error")," \xB0C")}</dd>`:P}
              ${f==="ff"?b`<dt>État FF3</dt>
                <dd>${p(_(r.live,"feedforward.ff3_status"))}</dd>`:P}
              ${f==="model"?b`<dt>Équilibre estimé par le Twin</dt><dd>${x}</dd>`:P}
            </dl>`:P}
        </div>
        <button type="button" aria-disabled=${!t} @click=${()=>{this.inspection=void 0}}>
          Revenir au direct
        </button>
        <button type="button" @click=${()=>this.renderRoot.querySelector("#journal-title")?.focus()}>
          Voir le journal
        </button>
      </aside>`}render(){let e=this.diagnostic;if(!e)return P;let t=this.usingRecorder,s=t?this.recorder:this.session,{samples:r,events:o,tracking:a}=this.windowData(s),c=this.tab==="learning",p=c?oo(s).filter(x=>x.time>=this.range[0]&&x.time<=this.range[1]&&!this.hiddenLearning.includes(x.kind)):[],h=this.tab==="regulation",f=this.tab==="evolution",u=this.inspection,y=f&&u?.entityId===e.entityId&&u.recorder===t?r.find(x=>x.time===u.time):void 0,$=Ii(r),k=(x,M,C=!1,F=M.some(E=>E.unit.includes("\xB0C")))=>b`<section class=${C?"chart command-chart":"chart"}>
        ${F&&!Wn(r)?b`<p role="status">Unités archivées différentes dans cette fenêtre. Réduisez la période pour comparer des valeurs de même unité.</p>`:P}
        <smartpi-time-chart
          .heading=${x}
          .marks=${c&&M===qs?p:[]}
          .thermalPhases=${c&&M===qs}
          .samples=${!F||Wn(r)?r:[]}
          .curves=${M.map(E=>({...E,unit:E.unit.replace("\xB0C",$)}))}
          .range=${this.range}
          .percent=${C}
          .syncKey=${e.entityId}
          .inspectable=${f}
          .selectedTime=${y?.time??null}
          @plot-layout=${E=>{let X=E.currentTarget.querySelector("smartpi-suspension-ribbon");X&&(X.inset=E.detail)}}
          @inspect-publication=${E=>this.inspect(E.detail)}
          @time-range=${E=>{E.detail[1]>E.detail[0]&&(this.followNow=!1,this.range=E.detail)}}
        >${M===ra||M===qs?b`<smartpi-suspension-ribbon slot="context-bars" .points=${this.observations} .range=${this.range} .error=${this.observationError}></smartpi-suspension-ribbon>`:P}</smartpi-time-chart>
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
            @change=${x=>this.expert=x.target.checked}
          />
          Mode expert</label
        >
      </div>
      <nav aria-label="Vues de diagnostic">
        ${[["evolution","Supervision"],["regulation","R\xE9gulation en direct"],["model","Sant\xE9 du mod\xE8le"],["learning","Apprentissage"]].map(([x,M])=>b`<button
              class=${this.tab===x?"active":""}
              aria-pressed=${this.tab===x}
              @click=${()=>{this.livePublicationMissing=!1,this.tab=x}}
            >
              ${M}
            </button>`)}
      </nav>
      ${h?b`<p class="foot">La période et la source ci-dessous concernent le graphe historique. Le schéma reste l’instantané actuel.</p>`:P}
      <div class="toolbar">
        <div class="periods" role="group" aria-label="Plage temporelle">
          ${[1,3,6,12,24,48].map(x=>b`<button
                aria-pressed=${x===this.hours}
                class=${x===this.hours?"chosen":""}
                @click=${()=>{this.hours=x,this.reset()}}
              >
                ${x} h
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
          >${r.length} publications ·
          ${new Date(this.range[0]*1e3).toLocaleString()} →
          ${new Date(this.range[1]*1e3).toLocaleString()}</span
        ><label
          ><input
            type="checkbox"
            .checked=${this.preferSession}
            @change=${x=>{this.inspection=void 0,this.replay=!1,this.livePublicationMissing=!1,this.preferSession=x.target.checked}}
          />
          Session uniquement</label
        >
      </div>
      ${t?P:b`<label class="follow"
            ><input
              type="checkbox"
              .checked=${this.followNow}
              @change=${x=>{this.followNow=x.target.checked,this.followNow&&this.reset()}}
            />
            Suivre les nouvelles publications de session</label
          >`}
      ${this.loading?b`<p role="status" class="notice">
            Lecture de l’historique… La collecte de session continue.
          </p>`:P}
      ${this.error?b`<p role="status" class="notice">${this.error}</p>`:P}
      ${r.length?P:b`<p class="notice">
            Aucune publication dans cette fenêtre. Sélectionner une plage plus
            large ou attendre une mise à jour normale de Home Assistant.
          </p>`}
      <details class="pane quality-panel"><summary>Qualité des données de la fenêtre</summary>
        <p>${t?"Recorder":"Session"} · ${r.length} publications · ${r.filter(x=>ze(x,"temperature.indoor")!==null&&ze(x,"setpoint.filtered_setpoint")!==null&&ze(x,"power.applied_percent")!==null).length} avec mesure, consigne filtrée et commande.
        ${r.filter((x,M)=>M>0&&x.time-r[M-1].time>600).length} interruption(s) entre publications > 10 min.</p>
        <p>Unité historique : ${$}. Une unité absente des archives n’est pas remplacée par celle du thermostat actuel.</p>
        <p>Les publications sont irrégulières. Ces nombres ne constituent pas un pourcentage de couverture temporelle. Aucun trou n’est rempli et aucune confiance actuelle n’est appliquée au passé.</p>
      </details>
      ${f&&this.livePublicationMissing?b`<p class="notice" role="status">La publication du direct est introuvable dans la source et la fenêtre affichées. L’inspecteur affiche l’instantané actuel.</p>`:P}
      ${this.tab==="evolution"?b`<div class="supervision">
            ${this.inspectionPanel(e,y,t)}
            <div class="trends">
            ${k("Temp\xE9rature et consigne filtr\xE9e",ra)}
            ${k("Commande du r\xE9gulateur \xB7 pas des watts",Hs,!0)}
            ${k("\xC9cart consigne filtr\xE9e \u2212 temp\xE9rature int\xE9rieure",[{label:"\xC9cart filtr\xE9",path:"error",color:"#bc7254",unit:"\xB0C"}])}
            <p class="foot">
              Écart calculé uniquement avec deux valeurs du même état. Ce n’est
              pas l’erreur de l’intégrateur ni une mesure de confort. Aucune
              zone de bande morte n’est extrapolée. Les points sont des
              publications irrégulières ; une ligne ne constitue pas une mesure
              intermédiaire.
            </p>
            ${this.trackingPanel(a,r.length,Ii(r))}
            <details class="pane pi-memory" ?open=${this.piMemoryOpen}
              @toggle=${x=>{this.piMemoryOpen=x.currentTarget.open}}><summary>Gains et mémoire du PI</summary>
              <p class="foot">Valeurs internes natives publiées par SmartPI, sur trois échelles séparées et sans conversion d’unité.
                L’état de l’intégrale décrit sa mémoire interne, pas sa contribution à la commande ni un pourcentage de chauffe.
                Seuls les champs archivés dans la source et la fenêtre sélectionnées sont tracés ; une valeur absente reste un trou.</p>
              ${this.piMemoryOpen?b`${k("Gain proportionnel Kp",[{label:"Kp publi\xE9",path:"control.kp",color:"#2689ca",unit:"",step:!0}],!1,!0)}
              ${k("Gain int\xE9gral Ki",[{label:"Ki publi\xE9",path:"control.ki",color:"#9d78bd",unit:"",step:!0}],!1,!0)}
              ${k("\xC9tat de l\u2019int\xE9grale",[{label:"M\xE9moire int\xE9grale publi\xE9e",path:"temperature.integral_error",color:"#bc7254",unit:""}],!1,!0)}`:P}
            </details>
            <section class="chart"><smartpi-diagnostic-projection .samples=${r} kind="scatter"
              .source=${t?"Recorder":"Session"} .contextId=${`${e.entityId}/${t}/${this.range.join("/")}`}
              .inspectable=${!0} @inspect-publication=${x=>this.inspect(x.detail)}></smartpi-diagnostic-projection></section>
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
                  .samples=${r} .range=${this.range} .percent=${!0} .commandComparison=${!0} .syncKey=${e.entityId}
                  .curves=${[Hs[1],Hs[0]]}
                  @time-range=${x=>{x.detail[1]>x.detail[0]&&(this.followNow=!1,this.range=x.detail)}}></smartpi-time-chart>
                <p class="foot">La zone relie la demande publiée et la sortie appliquée de la même publication.
                  Ce n’est ni une énergie perdue ni un diagnostic de cause. Les motifs historiques
                  ne sont disponibles que si cette source les a conservés. Les données manquantes et
                  interruptions supérieures à 10 min coupent le tracé. Les courbes en escalier ne sont pas des mesures intermédiaires.</p>
              </section>`:c?b`
              <section class="pane">
                <div class="periods" role="group" aria-label="Repères d’apprentissage">
                  ${Od.map((x,M)=>b`
                    <button type="button" aria-pressed=${!this.hiddenLearning.includes(x)}
                      @click=${()=>{this.hiddenLearning=this.hiddenLearning.includes(x)?this.hiddenLearning.filter(C=>C!==x):[...this.hiddenLearning,x]}}>${["\u25CF","\u25C6","\u2191","\u2193"][M]} ${x}</button>`)}
                </div>
                <p class="foot">Les repères sont datés à la publication ou à l’observation.
                  Les lettres A et B indiquent une hausse du compteur de mises à jour
                  acceptées ou de mesures collectées entre deux publications. Le détail distingue les deux. Deux lettres à la même date peuvent
                  regrouper des apprentissages survenus à des instants différents.
                  ${r.some(x=>_(x.live,"learning")!==void 0)?"Consultez le d\xE9tail pour conna\xEEtre l\u2019intervalle observ\xE9.":"Cette source ne contient pas les compteurs historiques. Les rep\xE8res A/B sont indisponibles ici. La session conserve les diagnostics re\xE7us pendant l\u2019ouverture du panneau."}
                  Zoomez pour séparer les repères rapprochés.</p>
                <p class="foot">Fond orange · température en hausse. Fond bleu · température
                  en baisse. Fond neutre · valeur stable ou absente. Ces intervalles
                  comparent les mesures successives.</p>
                ${t&&!r.some(x=>_(x.live,"learning")!==void 0)?b`<p class="notice">Le Recorder sélectionné contient les courbes, mais pas les
                    compteurs d’apprentissage. Les événements passés ne peuvent pas être datés.
                    <button type="button" @click=${()=>{this.preferSession=!0,this.inspection=void 0}}>
                      Observer les prochains apprentissages en session</button></p>`:P}
                ${k("Temp\xE9rature et consigne filtr\xE9e",qs)}
                ${k("Activit\xE9 du r\xE9gulateur \xB7 commande appliqu\xE9e",[Hs[0]],!0)}
                <p class="foot">En mode chauffage, une commande positive correspond à une
                  chauffe commandée, zéro à un arrêt de commande. La température peut
                  encore monter après l’arrêt. La commande est exprimée en pourcentage.</p>
                ${r.some(x=>_(x.live,"learning.emea_samples_a")!==void 0||_(x.live,"learning.emea_samples_b")!==void 0)?k("Collecte du mod\xE8le \xB7 nombre de mesures conserv\xE9es",[{label:"Mesures A",path:"live.learning.emea_samples_a",color:"#17638d",unit:"mesures",step:!0},{label:"Mesures B",path:"live.learning.emea_samples_b",color:"#6f448a",unit:"mesures",step:!0}]):P}
                <p>Temps morts actuels · chauffe
                  ${T(ot(e.live,"model.deadtime_heat_s","model.deadtime_heat_reliable")," s")}
                  · refroidissement
                  ${T(ot(e.live,"model.deadtime_cool_s","model.deadtime_cool_reliable")," s")}</p>
                <p class="foot">↑ Chauffe et ↓ Refroidissement repèrent des publications.
                  Les durées sont des médianes. Les bornes des épisodes ne sont pas publiées.
                  ${r.some(x=>_(x.live,"analysis.deadtime")||_(x.live,"model.deadtime_heat_reliable")!==void 0||_(x.live,"model.deadtime_cool_reliable")!==void 0)?"La couverture d\xE9pend des donn\xE9es pr\xE9sentes dans chaque publication.":"Cette fen\xEAtre ne contient pas de diagnostics historiques de temps mort."}</p>
                <details>
                  <summary>Détail des repères (${p.length})</summary>
                  ${p.length?b`<ol>
                    ${p.slice(-60).reverse().map(x=>b`<li>
                      <time datetime=${new Date(x.time*1e3).toISOString()}>${new Date(x.time*1e3).toLocaleString()}</time>
                      ${x.observedAt?" (observation)":""} · ${x.label}
                    </li>`)}
                  </ol>
                  ${p.length>60?b`<p class="foot">60 derniers repères. Zoomez pour consulter une plage plus courte.</p>`:P}`:b`<p>Aucun repère observable avec les filtres et les données de cette fenêtre.</p>`}
                </details>
              </section>`:b`
              <div class="model-heading">
                <h3>Modèle appris</h3>
                <span
                  >Confiance actuelle :
                  ${T(_(e.live,"model.confidence"))}</span
                >
              </div>
              ${k("A \xB7 gain de chauffe estim\xE9",[{label:"A appris",path:"model.a",color:"#2689ca",unit:"\xB0C/min/u",step:!0}])}
              ${k("B \xB7 pertes thermiques estim\xE9es",[{label:"B appris",path:"model.b",color:"#39a38a",unit:"min\u207B\xB9",step:!0}])}
              <p class="foot">
                La confiance actuelle ne valide pas rétroactivement ces séries.
                Le contrat history ne contient pas de confiance historique ni de
                mesures de référence A/B.
              </p>
              <section class="pane"><smartpi-diagnostic-projection .samples=${r} kind="model"
                .source=${t?"Recorder":"Session"} .contextId=${`${e.entityId}/${t}/${this.range.join("/")}`}>
              </smartpi-diagnostic-projection></section>
              <section class="pane">
                <h3>Temps morts · instantané</h3>
                <div class="metrics">
                  ${[["Chauffe","model.deadtime_heat_s","model.deadtime_heat_reliable"],["Refroidissement","model.deadtime_cool_s","model.deadtime_cool_reliable"],["Constante \u03C4","model.tau_min","model.tau_reliable"]].map(([x,M,C])=>b`<div>
                        <span>${x}</span
                        ><strong
                          >${T(ot(e.live,M,C),M==="model.tau_min"?" min":" s")}</strong
                        ><small
                          >Fiable : ${T(_(e.live,C))}</small
                        >
                      </div>`)}
                </div>
                <p>
                  Détection : ${T(_(e.live,"analysis.deadtime.state"))}
                </p>
              </section>
              <section class="pane">
                <h3>Thermal Twin · instantané</h3>
                <p>
                  Modèle fiable :
                  ${T(_(e.live,"analysis.twin.twin_model_reliable"))} ·
                  Initialisation du Twin :
                  ${T(_(e.live,"analysis.twin.twin_warming_up"))}
                </p>
                <div class="metrics">
                  ${[["Temp\xE9rature estim\xE9e","twin_T_hat"," \xB0C"],["Temp\xE9rature pr\xE9dite","twin_T_pred"," \xB0C"],["Innovation","twin_innovation"," \xB0C"],["RMSE innovation \xB7 EMA","twin_rmse_30"," \xB0C"],["Perturbation estim\xE9e","twin_perturbation_dTdt"," \xB0C/min"]].map(([x,M,C])=>b`<div>
                        <span>${x}</span
                        ><strong
                          >${T(ot(e.live,"analysis.twin."+M),C,4)}</strong
                        >
                      </div>`)}
                </div>
                <p>
                  Équilibre :
                  ${T(ot(e.live,"analysis.twin.twin_T_steady","analysis.twin.twin_T_steady_reliable")," \xB0C")}
                  · Consigne atteignable (prédiction) :
                  ${T(ot(e.live,"analysis.twin.twin_setpoint_reachable","analysis.twin.twin_T_steady_reliable"))}
                </p>
                <p class="foot">
                  Aucune courbe Twin : ces valeurs ne font pas partie des huit
                  séries Recorder standard. Fiabilité déclarée ≠ exactitude
                  physique démontrée.
                </p>
              </section>
            `}
      ${h||c?P:b`<section class="timeline">
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
          ${o.slice(-60).reverse().map(x=>b`<li>
                  <time>${new Date(x.time*1e3).toLocaleString()}</time>
                  <div>
                    ${f?b`<button type="button" aria-pressed=${y?.time===x.time}
                          @click=${()=>void this.inspectEvent(x.time)}>${x.label}</button>`:b`<strong>${x.label}</strong>`}${this.expert?b`<p>${x.provenance}</p>`:P}
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
          </details>`:P}
    </div>`}};Se.styles=ve`
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
  `,S([U({attribute:!1})],Se.prototype,"hass",2),S([U({attribute:!1})],Se.prototype,"diagnostic",2),S([U({attribute:!1})],Se.prototype,"session",2),S([U({attribute:!1})],Se.prototype,"observations",2),S([U()],Se.prototype,"observationError",2),S([Z()],Se.prototype,"tab",2),S([Z()],Se.prototype,"hiddenLearning",2),S([Z()],Se.prototype,"expert",2),S([Z()],Se.prototype,"hours",2),S([Z()],Se.prototype,"end",2),S([Z()],Se.prototype,"range",2),S([Z()],Se.prototype,"recorder",2),S([Z()],Se.prototype,"loading",2),S([Z()],Se.prototype,"error",2),S([Z()],Se.prototype,"preferSession",2),S([Z()],Se.prototype,"followNow",2),S([Z()],Se.prototype,"inspection",2),S([Z()],Se.prototype,"replay",2),S([Z()],Se.prototype,"livePublicationMissing",2),S([Z()],Se.prototype,"piMemoryOpen",2),S([Z()],Se.prototype,"block",2),Se=S([we("smartpi-visual-diagnostics")],Se);var Wi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ql=n=>(...i)=>({_$litDirective$:n,values:i}),Ns=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,e,t){this._$Ct=i,this._$AM=e,this._$Ci=t}_$AS(i,e){return this.update(i,e)}update(i,e){return this.render(...e)}};var{I:jm}=eo;var Hl=n=>n.strings===void 0;var Hd={},Nl=(n,i=Hd)=>n._$AH=i;var jl=ql(class extends Ns{constructor(n){if(super(n),n.type!==Wi.PROPERTY&&n.type!==Wi.ATTRIBUTE&&n.type!==Wi.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Hl(n))throw Error("`live` bindings can only contain a single expression")}render(n){return n}update(n,[i]){if(i===Mt||i===P)return i;let e=n.element,t=n.name;if(n.type===Wi.PROPERTY){if(i===e[t])return Mt}else if(n.type===Wi.BOOLEAN_ATTRIBUTE){if(!!i===e.hasAttribute(t))return Mt}else if(n.type===Wi.ATTRIBUTE&&e.getAttribute(t)===i+"")return Mt;return Nl(n),i}});var Ul={none:"Manuel",frost:"Hors gel",eco:"\xC9co",comfort:"Confort",boost:"Boost",activity:"Activit\xE9"},tt=class{constructor(i,e){this.hass=i;this.diagnostic=e;let t=e.climateId?i?.states[e.climateId]:void 0,s=Object.values(i?.states??{}).filter(r=>r.entity_id.startsWith("climate.")&&_(r.attributes,"specific_states.regulation_diagnostics")===e.entityId);this.climate=s.length===1&&t?.entity_id.startsWith("climate.")&&_(t.attributes,"specific_states.regulation_diagnostics")===e.entityId?t:void 0}get attributes(){return this.climate?.attributes??{}}get available(){return this.diagnostic.available&&!!this.climate&&!["unknown","unavailable"].includes(this.climate.state)}get unit(){let i=_(this.attributes,"configuration.temperature_unit")??this.attributes.temperature_unit??this.hass?.config?.unit_system?.temperature;return i==="\xB0C"||i==="\xB0F"?i:null}get measured(){return this.diagnostic.available?K(_(this.diagnostic.live,"temperature.indoor")):null}get target(){return this.available?K(this.attributes.temperature):null}get filtered(){return this.diagnostic.available?K(_(this.diagnostic.live,"setpoint.filtered_setpoint")):null}get minimum(){return K(this.attributes.min_temp)}get maximum(){return K(this.attributes.max_temp)}get step(){let i=K(this.attributes.target_temp_step)??K(_(this.attributes,"configuration.target_temperature_step"));return i!==null&&i>0?i:null}get locked(){return _(this.attributes,"specific_states.is_locked")===!0}get canSetTemperature(){let i=K(this.attributes.supported_features);return this.available&&!this.locked&&this.unit!==null&&this.target!==null&&this.minimum!==null&&this.maximum!==null&&this.maximum>this.minimum&&this.step!==null&&i!==null&&(i&1)!==0&&!["heat_cool","auto"].includes(this.climate.state)}get presets(){let i=this.attributes.preset_modes;if(!this.available||!Array.isArray(i))return[];let e=["off","not_home"].includes(String(_(this.attributes,"presence_manager.presence_state"))),t=this.climate?.state==="cool"?"_cool":"",s=this.climate?.state==="heat"||this.climate?.state==="cool";return[...new Set(i.filter(r=>typeof r=="string"&&r.length>0))].map(r=>({id:r,label:Object.hasOwn(Ul,r)?Ul[r]:r,temperature:s&&this.unit!==null&&!["none","activity"].includes(r)?K(_(this.attributes,`preset_temperatures.${r}${t}${e?"_away":""}_temp`)):null}))}get canSetPreset(){let i=K(this.attributes.supported_features);return this.available&&!this.locked&&i!==null&&(i&16)!==0&&this.presets.length>0}get context(){return JSON.stringify([this.diagnostic.entityId,this.climate?.entity_id,this.available,this.climate?.state,this.attributes.temperature,this.attributes.preset_mode,this.minimum,this.maximum,this.step,this.unit,this.locked,this.attributes.supported_features,this.presets])}choiceTemperature(i){return i?.kind==="temperature"?i.value:i?.kind==="preset"?this.presets.find(e=>e.id===i.value)?.temperature??null:this.target}validate(i){if(!i||i.kind!=="temperature"&&i.kind!=="preset")return!1;if(i.kind==="preset")return this.canSetPreset&&this.presets.some(o=>o.id===i.value);if(!this.canSetTemperature||!Number.isFinite(i.value))return!1;let{minimum:e,maximum:t,step:s}=this;if(i.value<e||i.value>t)return!1;let r=(i.value-e)/s;return Math.abs(r-Math.round(r))<1e-6}shift(i,e){let t=this.minimum,s=this.maximum,r=this.step,o=(i-t)/r,a=e>0?Math.floor(o+1e-6)+1:Math.ceil(o-1e-6)-1;return Number(Math.min(s,Math.max(t,t+a*r)).toFixed(6))}get scale(){let i=[this.measured,this.target,...this.presets.map(s=>s.temperature)].filter(s=>s!==null),e=i.length?Math.min(...i):16,t=i.length?Math.max(...i):22;return[Math.floor(e-1),Math.ceil(Math.max(t+1,e+4))]}currentPublication(i){if(!this.available)return!1;let e=Date.parse(this.diagnostic.lastUpdated??""),t=Date.parse(this.climate.last_changed??this.climate.last_updated??"");return Number.isFinite(i)&&Number.isFinite(e)&&Number.isFinite(t)&&e>=t&&i-e<=6e5&&e<=i+6e4}appliedEffort(i=Date.now()){if(!this.currentPublication(i))return null;let e=K(_(this.diagnostic.live,"power.applied_percent"));if(e===null||e<0||e>100)return null;let t=this.climate.state;return{percent:e,direction:t==="heat"?1:t==="cool"?-1:0,label:t==="heat"?"Commande de chauffe":t==="cool"?"Commande de refroidissement":"Commande appliqu\xE9e"}}maintenanceEffort(i=Date.now()){let e=this.appliedEffort(i),t=this.diagnostic.live;if(!e||e.direction!==1||e.percent<=0||this.unit===null||this.measured===null||this.target===null||this.filtered!==this.target||this.measured<this.target||_(t,"control.mode")!=="smartpi"||_(t,"control.phase")!=="Stable"||_(t,"control.in_deadband")!==!1||_(t,"calibration.state")!=="Idle"||_(t,"setpoint.trajectory_active")!==!1||_(t,"setpoint.boost_active")!==!1||K(_(t,"power.hold_percent"))!==0)return null;let s=K(_(t,"power.ff_percent")),r=K(_(t,"power.pi_percent")),o=K(_(t,"power.command_percent"));return s===null||s<=0||s>100||r===null||r>0||o===null||o<=0||o>100||Math.abs(s+r-o)>.2?null:{ff:s,pi:r}}setpointPosition(i=Date.now()){if(!this.currentPublication(i)||this.unit===null||this.measured===null||this.target===null||!["heat","cool"].includes(this.climate.state))return null;let e=Math.round(this.measured*10)-Math.round(this.target*10);return Number.isFinite(e)?{kind:e===0?"aligned":e>0?"above":"below",overshoot:this.climate.state==="heat"?e>0:e<0,direction:e===0?0:e>0?-1:1,gap:Math.abs(e)/10,target:this.target}:null}twinPresentation(i=!1,e=!1,t=Date.now()){let s=h=>({estimated:null,predicted:null,eta:null,detail:h});if(i)return s("Aper\xE7u du r\xE9glage \xB7 la projection de la consigne active est masqu\xE9e.");if(e)return s("En attente d\u2019une nouvelle publication apr\xE8s le changement de consigne.");if(!this.available||this.unit===null||!["heat","cool"].includes(this.climate.state))return s("Projection indisponible dans cet \xE9tat du thermostat.");if(!this.currentPublication(t))return s("Donn\xE9es Twin r\xE9centes indisponibles.");let r=h=>_(this.diagnostic.live,"analysis.twin."+h);if(r("twin_warming_up")===!0)return s("Le Twin est en cours d\u2019initialisation.");if(r("twin_status")!=="ok"||r("twin_model_reliable")!==!0||r("twin_warming_up")!==!1)return s("Le Twin ne publie pas de mod\xE8le fiable disponible.");let o=K(r("twin_T_hat")),a=K(r("twin_T_pred")),c=this.eta(!1,t),p=c?.detail??"Aucun d\xE9lai calculable publi\xE9 par le Twin.";if(!c){let h=r("eta_reason");_(this.diagnostic.live,"model.tau_reliable")!==!0?p="ETA indisponible \xB7 constante de temps non fiable.":h==="unreachable"?p=this.climate.state==="heat"&&this.measured!==null&&this.target!==null&&this.measured>this.target?"Pas de d\xE9lai de retour : l\u2019ETA simule une chauffe maximale alors que la mesure d\xE9passe la consigne.":"La consigne n\u2019est pas atteinte dans le sc\xE9nario ETA du Twin ; ce r\xE9sultat ne d\xE9crit pas toutes les actions du r\xE9gulateur.":h==="too_far"?p="Le d\xE9lai publi\xE9 d\xE9passe l\u2019horizon de 48 h affichable.":h==="missing_text"?p="ETA indisponible \xB7 temp\xE9rature ext\xE9rieure manquante.":h==="not_reliable"?p="ETA indisponible \xB7 mod\xE8le d\xE9clar\xE9 non fiable pour ce calcul.":(h==="ok"||h==="already_reached")&&(p="ETA en attente de donn\xE9es coh\xE9rentes et r\xE9centes pour la consigne active.")}return{estimated:o,predicted:a,eta:c,detail:p}}eta(i=!1,e=Date.now()){if(i||!this.available||this.target===null||this.measured===null||this.unit===null||!["heat","cool"].includes(this.climate.state))return null;let t=Date.parse(this.diagnostic.lastUpdated??""),s=Date.parse(this.climate.last_updated??"");if(!Number.isFinite(t)||!Number.isFinite(s)||t<s||e-t>10*6e4||t>e+6e4)return null;let r=this.diagnostic.live,o=h=>_(r,"analysis.twin."+h);if(o("twin_status")!=="ok"||o("twin_model_reliable")!==!0||o("twin_warming_up")!==!1||_(r,"model.tau_reliable")!==!0)return null;let a=K(o("eta_s")),c=o("eta_reason");if(c==="already_reached"&&a===0)return{label:"\xC0 la consigne",detail:"Selon la tol\xE9rance du Twin SmartPI.",seconds:0};if(c!=="ok"||a===null||a<=0||a>48*3600)return null;let p=Math.ceil(a/60);return{label:p<60?`\u2248 ${p} min`:`\u2248 ${Math.floor(p/60)} h ${String(p%60).padStart(2,"0")}`,detail:"Meilleur cas du Twin \xB7 conditions constantes, commande maximale en chauffe. Pas une heure d\u2019arriv\xE9e garantie.",seconds:a}}};var mt=class{constructor(i){this.hass=i}async request(i,e,t={}){if((i===void 0?e!=="get"||Object.keys(t).length>0:!i.startsWith("sensor."))||typeof this.hass.callWS!="function")throw new Error("L\u2019observatoire local n\u2019est pas disponible dans cette connexion.");let s;try{return await Promise.race([this.hass.callWS({type:"smartpi_dashboard/observatory",...i===void 0?{}:{entity_id:i},action:e,payload:t}),new Promise((r,o)=>{s=setTimeout(()=>o(new Error(e==="get"?"L\u2019observatoire ne r\xE9pond pas. R\xE9essayez.":"R\xE9sultat non confirm\xE9. Actualisez le carnet avant de r\xE9essayer.")),8e3)})])}catch(r){throw fe(r)&&typeof r.message=="string"&&!(r instanceof Error)?new Error(r.message.slice(0,300)):r}finally{clearTimeout(s)}}static orphans(i){if(!fe(i)||!Array.isArray(i.orphans)||i.orphans.length>32||!i.orphans.every(e=>fe(e)&&typeof e.entity_id=="string"&&/^sensor\.[a-z0-9_]+$/.test(e.entity_id)&&e.entity_id.length<=255&&["bookmarks","trials","forecasts","receipts","points"].every(t=>Number.isSafeInteger(e[t])&&e[t]>=0&&e[t]<=1200)))throw new Error("Liste des carnets non reconnue. V\xE9rifiez la version du composant.");return i.orphans}static room(i){let e=u=>typeof u=="string"&&u.length>0&&u.length<=100,t=u=>typeof u=="number"&&Number.isFinite(u),s=u=>u===null||t(u),r=u=>t(u)&&u>=0&&u<=864e10,o=(u,y,$)=>u[y]===void 0||$(u[y]),a=u=>u==="\xB0C"||u==="\xB0F",c=u=>e(u.id)&&r(u.started_at)&&o(u,"reason",e)&&o(u,"ended_at",r),p=u=>fe(u)&&(u.kind==="temperature"?t(u.value):u.kind==="preset"&&e(u.value)),h={bookmarks:[30,u=>e(u.id)&&e(u.label)&&r(u.created_at)&&t(u.temperature)&&t(u.target)&&a(u.unit)&&s(u.outdoor)&&(u.preset===null||e(u.preset))],receipts:[50,u=>c(u)&&["pending","observed","excluded"].includes(String(u.status))&&p(u.choice)&&(u.unit===null||a(u.unit))&&["pending","accepted","uncertain"].includes(String(u.service_result))&&(u.confirmed_at===null||r(u.confirmed_at))&&["applied_at","response_at"].every(y=>o(u,y,r))&&["applied_percent","response_temperature"].every(y=>o(u,y,t))],trials:[50,u=>c(u)&&e(u.label)&&t(u.target)&&a(u.unit)&&s(u.baseline)&&s(u.outdoor)&&["pending","finished","excluded"].includes(String(u.status))&&["unknown","good","cold","hot"].includes(String(u.feedback))&&o(u,"missing_publications",y=>Number.isSafeInteger(y)&&y>=0)&&fe(u.summary)&&Number.isSafeInteger(u.summary.publications)&&u.summary.publications>=0&&["minimum","maximum","last","max_abs_error","outdoor_min","outdoor_max"].every(y=>s(u.summary[y]))&&["first_at","last_at"].every(y=>u.summary[y]===null||r(u.summary[y]))],forecasts:[100,u=>c(u)&&t(u.target)&&t(u.temperature)&&a(u.unit)&&t(u.eta_s)&&u.eta_s>0&&u.eta_s<=172800&&["pending","reached","excluded"].includes(String(u.status))&&o(u,"outdoor",s)&&(u.status!=="reached"||r(u.observed_at)&&t(u.observed_s)&&u.observed_s>=0)]},f=u=>fe(u)&&r(u.time)&&["temperature","target","outdoor","applied"].every(y=>s(u[y]))&&["unit","mode","climate_id","preset","window"].every(y=>u[y]===null||o(u,y,e))&&["bound","safety","overpowering"].every(y=>u[y]===null||o(u,y,$=>typeof $=="boolean"))&&o(u,"suspensions_observed_at",y=>y===null||r(y));if(fe(i)&&i.points!==void 0&&(!Array.isArray(i.points)||i.points.length>1200||!i.points.every(f)))throw new Error("Points d\u2019observation non reconnus.");if(!fe(i)||i.current!==null&&!fe(i.current)||!Object.entries(h).every(([u,[y,$]])=>Array.isArray(i[u])&&i[u].length<=y&&i[u].every(k=>fe(k)&&$(k))))throw new Error("R\xE9ponse de l\u2019observatoire non reconnue. Rechargez apr\xE8s la mise \xE0 jour du composant.");return i}};async function Bl(n,i,e,t,s=()=>!0){e={...e};let r=bn(n).find(h=>h.entityId===i.entityId&&h.climateId===i.climateId);if(!r||typeof n.callService!="function")throw new Error("Commande indisponible dans cette connexion.");let o=new tt(n,r);if(o.context!==t)throw new Error("Le thermostat a chang\xE9. S\xE9lectionnez \xE0 nouveau votre choix.");if(!o.validate(e))throw new Error("Ce r\xE9glage n\u2019est plus disponible ou ne respecte pas les limites du thermostat.");let a=new mt(n),c=null,p=!1;try{let h=await a.request(r.entityId,"receipt_begin",{choice:e});fe(h)&&typeof h.id=="string"&&(c=h.id)}catch{}try{let h=bn(n).find(u=>u.entityId===i.entityId&&u.climateId===i.climateId),f=h?new tt(n,h):void 0;if(!s()||!f||f.context!==t||!f.validate(e))throw new Error("Le thermostat a chang\xE9 avant l\u2019envoi. S\xE9lectionnez \xE0 nouveau votre choix.");p=!0,e.kind==="temperature"?await n.callService("climate","set_temperature",{entity_id:r.climateId,temperature:e.value}):await n.callService("climate","set_preset_mode",{entity_id:r.climateId,preset_mode:e.value})}catch(h){throw c&&await a.request(r.entityId,"receipt_finish",{id:c,success:!1,not_sent:!p}).catch(()=>{}),h}return c&&await a.request(r.entityId,"receipt_finish",{id:c,success:!0}).catch(()=>{}),{receipt:c}}var Vl={hvac_off_manual:"Arr\xEAt manuel publi\xE9",hvac_off_auto_start_stop:"Arr\xEAt automatique publi\xE9",hvac_off_window_detection:"Fen\xEAtre ouverte : arr\xEAt publi\xE9",hvac_off_sleep_mode:"Mode sommeil publi\xE9",hvac_off_safety_detection:"S\xE9curit\xE9 : arr\xEAt publi\xE9",hvac_off_central_mode:"Mode central : arr\xEAt publi\xE9",hvac_off_inhibition:"Inhibition : arr\xEAt publi\xE9",overpowering_detected:"D\xE9lestage d\xE9tect\xE9",safety_detected:"S\xE9curit\xE9 d\xE9tect\xE9e",target_temp_window_eco:"Fen\xEAtre ouverte : consigne \xC9co retenue",target_temp_window_frost:"Fen\xEAtre ouverte : consigne hors gel retenue",target_temp_power:"Consigne de d\xE9lestage retenue",target_temp_central_mode:"Consigne du mode central retenue",target_temp_activity_detected:"Consigne li\xE9e \xE0 l\u2019activit\xE9",target_temp_activity_not_detected:"Consigne li\xE9e \xE0 l\u2019absence d\u2019activit\xE9",target_temp_absence_detected:"Consigne d\u2019absence retenue",target_temp_timed_preset:"Preset temporis\xE9 actif",not_initialized:"Initialisation incompl\xE8te",underlying_unavailable:"\xC9quipement sous-jacent indisponible"},js=class{constructor(i){this.model=i}get reasons(){if(!this.model.available)return[];let i=this.model.attributes,e=_(i,"specific_states.messages"),s=[["off","sleep"].includes(this.model.climate?.state??"")?_(i,"specific_states.hvac_off_reason"):null,_(i,"specific_states.hvac_mode_reason"),...Array.isArray(e)?e:[]];return _(i,"specific_states.inhibition.inhibited")===!0&&s.unshift("hvac_off_inhibition"),[...new Set(s.filter(r=>typeof r=="string"&&r.length>0))].map(r=>({code:r,label:Object.hasOwn(Vl,r)?Vl[r]:r}))}get requested(){let i=this.model.attributes.requested_state;return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}get requestedTemperature(){return K(this.requested.target_temperature)}advice(i){if(!i||!this.model.available)return[];let e=[];this.model.locked&&e.push("Le thermostat est verrouill\xE9."),this.model.climate?.state==="off"&&e.push("Le thermostat est arr\xEAt\xE9. Changer la consigne ne le remettra pas automatiquement en marche."),this.reasons.some(o=>["hvac_off_window_detection","hvac_off_safety_detection","hvac_off_inhibition","hvac_off_central_mode","overpowering_detected","target_temp_power","target_temp_window_eco","target_temp_window_frost"].includes(o.code))&&e.push("Une priorit\xE9 publi\xE9e intervient. Ce choix ne supprime pas cette priorit\xE9.");let t=this.model.choiceTemperature(i),s=this.model.target,r=K(_(this.model.diagnostic.live,"power.applied_percent"));return this.model.climate?.state==="heat"&&t!==null&&s!==null&&t>s&&r===100&&e.push("La commande appliqu\xE9e est d\xE9j\xE0 \xE0 100 %. Monter la consigne n\u2019augmentera pas la commande actuelle."),i.kind==="temperature"&&this.model.attributes.preset_mode!=="none"&&e.push("Une temp\xE9rature manuelle remplace le preset actif. Vos plannings restent g\xE9r\xE9s \xE0 l\u2019ext\xE9rieur du panneau."),e}};var Rt=class extends ce{constructor(){super(...arguments);this.sending=!1;this.message="";this.failed=!1;this.context="";this.diagnosticId="";this.generation=0}willUpdate(){if(!this.diagnostic)return;let e=new tt(this.hass,this.diagnostic).context;if(e!==this.context){let t=!this.context||this.diagnosticId!==this.diagnostic.entityId;this.diagnosticId=this.diagnostic.entityId,this.context=e,this.choice=void 0,this.message=t?"":this.sending?"Le thermostat a chang\xE9. V\xE9rifiez les valeurs re\xE7ues.":"",this.failed=!1,this.awaitingPublication=t?void 0:this.diagnostic.lastUpdated,++this.generation}}updated(){clearTimeout(this.etaTimer);let e=Date.parse(this.diagnostic?.lastUpdated??"")+600001-Date.now();Number.isFinite(e)&&e>0&&(this.etaTimer=setTimeout(()=>this.requestUpdate(),e))}disconnectedCallback(){++this.generation,clearTimeout(this.etaTimer),this.choice=void 0,this.sending&&(this.sending=!1,this.activeRequest=void 0,this.failed=!0,this.message="R\xE9sultat non confirm\xE9 apr\xE8s la fermeture du panneau. V\xE9rifiez les valeurs re\xE7ues avant un nouveau choix.",this.awaitingPublication=this.diagnostic?.lastUpdated),super.disconnectedCallback()}choose(e){this.sending||(this.choice=e,this.message="",this.failed=!1)}cancel(){this.choice=void 0,this.message=""}async previewTemperature(e){if(!this.diagnostic||this.sending)return!1;let t={kind:"temperature",value:e};return new tt(this.hass,this.diagnostic).validate(t)?(this.choose(t),await this.updateComplete,this.renderRoot.querySelector(".apply")?.focus(),!0):!1}async apply(){if(!this.hass||!this.diagnostic||!this.choice||this.sending)return;let e=++this.generation,t=this.choice,s=this.context,r=Symbol();this.activeRequest=r,this.sending=!0,this.message="Envoi en cours\u2026",this.failed=!1;try{let o=await Bl(this.hass,this.diagnostic,t,s,()=>this.isConnected&&e===this.generation&&!!this.diagnostic&&new tt(this.hass,this.diagnostic).context===s);if(e!==this.generation||!this.isConnected)return;this.awaitingPublication=this.diagnostic.lastUpdated,this.choice=void 0,this.message="Demande envoy\xE9e. Les valeurs affich\xE9es restent celles re\xE7ues de Home Assistant."+(o.receipt?"":" Re\xE7u non disponible.")}catch(o){if(e!==this.generation||!this.isConnected)return;this.failed=!0,this.message=o instanceof Error?o.message:"Envoi impossible. V\xE9rifiez le thermostat avant de r\xE9essayer."}finally{this.activeRequest===r&&(this.activeRequest=void 0,this.sending=!1),this.dispatchEvent(new CustomEvent("observatory-refresh",{detail:{entityId:this.diagnostic?.entityId},bubbles:!0,composed:!0}))}}render(){if(!this.diagnostic)return P;let e=new tt(this.hass,this.diagnostic),t=new js(e),s=t.advice(this.choice),r=e.unit??"",o=e.choiceTemperature(this.choice),[a,c]=e.scale,p=Math.min(a,o??a),h=Math.max(c,o??c),f=D=>60+(D-p)/(h-p)*880,u=e.measured,y=e.target,$=e.appliedEffort(),k=e.setpointPosition(),x=e.maintenanceEffort(),M=e.twinPresentation(!!this.choice,this.awaitingPublication!==void 0&&this.awaitingPublication===this.diagnostic.lastUpdated),C=M.eta,F=typeof this.hass?.callService=="function",E=e.presets.find(D=>D.id===(this.choice?.kind==="preset"?this.choice.value:e.attributes.preset_mode)),X=this.choice?.kind==="preset"?E?.label??this.choice.value:"Temp\xE9rature manuelle",H=Array.from({length:5},(D,ee)=>p+(h-p)*ee/4);return b`<section aria-labelledby="journey-title">
      <div class="heading"><h3 id="journey-title">Trajet thermique</h3>
        <span class="mode">${e.available?e.climate?.state==="off"?"Thermostat arr\xEAt\xE9":e.attributes.hvac_action==="heating"?"En chauffe":e.attributes.hvac_action==="cooling"?"En refroidissement":"En direct":"Thermostat indisponible"}</span></div>
      <div class="readings">
        <div><span class="caption"><i class="dot"></i>Actuellement</span><strong class="measured" aria-label=${u===null?"Temp\xE9rature indisponible":P}>${u===null?"\u2014":T(u,"",1)}<small> ${r}</small></strong></div>
        <div class="destination"><span class="caption"><i class="diamond"></i>Consigne active</span><strong aria-label=${y===null?"Consigne indisponible":P}>${y===null?"\u2014":T(y,"",1)}<small> ${e.unit??""}</small></strong>
          <span class="preset-name">${e.presets.find(D=>D.id===e.attributes.preset_mode)?.label??""}</span></div>
      </div>
      <div class="journey-signals">
      <div class="effort-band" aria-label="Commande et écart à la consigne active">
        <span class="signal-caption">RÉGULATION · COMMANDE</span>
        ${$?b`
          <div class="effort-heading"><span>${$.label}</span><strong>${$.percent>0&&$.percent<.01?"< 0,01 %":T($.percent," %",2)}</strong></div>
          <div class=${"effort-track "+($.direction<0?"cool":$.direction===0?"neutral":"heat")}
            role="meter" aria-label=${$.label+" appliqu\xE9e"} aria-valuemin="0" aria-valuemax="100" aria-valuenow=${$.percent} aria-valuetext=${T($.percent," % appliqu\xE9s",4)}>
            ${$.percent>0?b`<span class=${"effort-arrow "+($.direction<0?"reverse":$.direction===0?"neutral":"")} style=${`width:${$.percent}%`} aria-hidden="true"></span>`:P}
          </div>`:b`<p class="effort-missing">Commande appliquée · données récentes indisponibles</p>`}
        ${x?b`<div class="maintenance"><strong>Chauffe de maintien</strong><span class="maintenance-caption">Le FF compense les pertes · le PI ajuste</span>
          <div class="contributions"><span>FF <b>+${T(x.ff," %",1)}</b></span><span>PI <b>${T(x.pi," %",1)}</b></span></div>
          <p>La commande entretient la chaleur pour maintenir la consigne. Elle n’indique pas une montée en température mesurée.</p></div>`:P}
        <div class=${"setpoint-position "+(k?.overshoot?"overshoot":"")}>
          ${k?.overshoot?b`<span class="return-chevron" data-direction=${k.direction<0?"left":"right"} aria-hidden="true">${k.direction<0?"\u2039":"\u203A"}</span>
            <span>${k.kind==="above"?"Au-dessus de +":"Au-dessous de \u2212"}${T(k.gap,r,1)} · retour visé vers ${T(k.target,r,1)}</span>`:k?.kind==="aligned"?b`<span class="aligned-mark" aria-hidden="true">◇</span><span>À la consigne affichée</span>`:k?b`<span>Encore ${T(k.gap,r,1)} vers la consigne active</span>`:b`<span>Écart à la consigne indisponible</span>`}
        </div>
      </div>
      <div class="twin-signal" aria-label="Projection du Thermal Twin">
        <div class="twin-heading"><span class="signal-caption">THERMAL TWIN · MODÈLE</span><span class="twin-badge">${M.predicted!==null?"Projection disponible":"En attente"}</span></div>
        ${M.predicted!==null?b`<div class="twin-values">
          <div><span>État estimé</span><strong>${T(M.estimated,r,2)}</strong></div>
          ${M.estimated!==null?b`<svg class="twin-arrow" viewBox="0 0 100 24" aria-hidden="true"><path d="M2 12 H94 M86 5 L94 12 L86 19"/></svg>`:P}
          <div><span>Prédiction publiée</span><strong>${T(M.predicted,r,2)}</strong></div>
        </div><p class="twin-footnote">Sorties du même pas de calcul · horizon non publié</p>`:P}
        <div class=${"twin-eta "+(C?"eta available":"")}><span>ETA · consigne active</span><strong>${C?.label??"Non calculable"}</strong></div>
        <p class="eta-detail">${M.detail}</p>
      </div>
      </div>
      ${e.unit!==null?b`<svg class="rail" viewBox="0 0 1000 210" role="img" aria-label=${`\xC9chelle de temp\xE9rature. Mesure ${T(u,r,1)}. Consigne active ${T(y,r,1)}.${this.choice?` Aper\xE7u ${T(o,r,1)}.`:""}`}>
        <line x1="60" x2="940" y1="95" y2="95" class="axis"/>
        ${e.presets.filter(D=>D.temperature!==null).map(D=>Fe`<line x1=${f(D.temperature)} x2=${f(D.temperature)} y1="84" y2="108" class="preset-tick"><title>${D.label} ${T(D.temperature,r,1)}</title></line>`)}
        ${u!==null&&y!==null?Fe`<line x1=${f(u)} x2=${f(y)} y1="95" y2="95" class="distance"/>`:P}
        ${H.map(D=>Fe`<line x1=${f(D)} x2=${f(D)} y1="135" y2="142" class="tick"/><text x=${f(D)} y="171" text-anchor="middle">${T(D,"\xB0",1)}</text>`)}
        ${u!==null?Fe`<line x1=${f(u)} x2=${f(u)} y1="44" y2="95" class="measured-line"/><circle cx=${f(u)} cy="95" r="11" class="current-point"/><text x=${f(u)} y="30" text-anchor="middle" class="current-label">${T(u,"\xB0",1)}</text>`:P}
        ${y!==null?Fe`<path d=${`M ${f(y)} 83 l 12 12 -12 12 -12 -12 Z`} class="target-point"/>`:P}
        ${this.choice&&o!==null?Fe`<line x1=${f(o)} x2=${f(o)} y1="56" y2="124" class="preview-line"/><path d=${`M ${f(o)} 83 l 12 12 -12 12 -12 -12 Z`} class="preview-point"/>`:P}
      </svg>`:P}
      <details class="authority"><summary>Qui a la main ? <span>${t.reasons[0]?.label??"Origine du r\xE9glage non publi\xE9e"}</span></summary>
        <p class="note">Demande conservée · ${T(t.requestedTemperature,r,1)}
          · consigne retenue · ${T(y,r,1)}</p>
        ${t.reasons.length?b`<ul>${t.reasons.map(D=>b`<li>${D.label} <small>(${D.code})</small></li>`)}</ul>`:b`<p class="note">Aucun motif de priorité publié dans cet instantané.</p>`}
        <p class="note">Ces motifs décrivent les priorités du thermostat. Ils n’identifient pas la personne ou l’automatisation à l’origine du changement.</p>
      </details>
      <div class="presets" role="group" aria-label="Choisir un preset">
        ${e.presets.map(D=>b`<button type="button" class=${"preset "+(e.attributes.preset_mode===D.id?"active":"")}
          aria-pressed=${this.choice?.kind==="preset"&&this.choice.value===D.id}
          ?disabled=${!F||!e.canSetPreset||this.sending} @click=${()=>this.choose({kind:"preset",value:D.id})}>
          <span>${D.label}${e.attributes.preset_mode===D.id?b`<span class="active-label"> · actif</span>`:P}</span>
          <strong>${D.temperature===null?"\u2014":T(D.temperature,r,1)}</strong></button>`)}
      </div>
      ${e.canSetTemperature?b`<div class="temperature-control">
        <label for="temperature">Choisir une température <span>${T(o??y,r,1)}</span></label>
        <div class="adjust"><button type="button" aria-label="Diminuer la température" ?disabled=${!F||this.sending||(o??y)<=e.minimum}
          @click=${()=>this.choose({kind:"temperature",value:e.shift(o??y,-1)})}>−</button>
          <input id="temperature" type="range" min=${e.minimum} max=${e.maximum} step=${e.step}
            .value=${jl(String(o??y))} aria-valuetext=${T(o??y,r,1)} ?disabled=${!F||this.sending}
            @input=${D=>this.choose({kind:"temperature",value:Number(D.currentTarget.value)})}/>
          <button type="button" aria-label="Augmenter la température" ?disabled=${!F||this.sending||(o??y)>=e.maximum}
            @click=${()=>this.choose({kind:"temperature",value:e.shift(o??y,1)})}>+</button></div>
      </div>`:P}
      ${this.choice?b`<div class="preview" aria-label="Aperçu du réglage"><div><span class="caption">Aperçu · ${X}</span>
        <strong>${o!==null?T(o,r,1):"Temp\xE9rature d\xE9termin\xE9e par le thermostat"}</strong></div>
        <div class="actions"><button type="button" ?disabled=${this.sending} @click=${this.cancel}>Annuler</button>
          <button type="button" class="apply" ?disabled=${this.sending||!e.validate(this.choice)} @click=${this.apply}>${this.sending?"Envoi\u2026":"Appliquer"}</button></div></div>`:P}
      ${s.length?b`<ul class="advice" aria-label="Avant d’appliquer">${s.map(D=>b`<li>${D}</li>`)}</ul>`:P}
      <p class=${"status "+(this.failed?"error":"")} role="status" aria-live="polite">${this.message}</p>
      ${e.locked?b`<p class="note">Thermostat verrouillé.</p>`:P}
      ${e.climate?P:b`<p class="note">Aucun thermostat explicitement lié à ce diagnostic.</p>`}
      ${e.filtered!==null&&y!==null&&Math.abs(e.filtered-y)>.01?b`<p class="note">Consigne filtrée de la régulation : ${T(e.filtered,r,1)}</p>`:P}
      <p class="note scheduling">Les plannings restent gérés par ha-chauffage ou Scheduler.</p>
    </section>`}};Rt.styles=ve`
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
  `,S([U({attribute:!1})],Rt.prototype,"hass",2),S([U({attribute:!1})],Rt.prototype,"diagnostic",2),S([Z()],Rt.prototype,"choice",2),S([Z()],Rt.prototype,"sending",2),S([Z()],Rt.prototype,"message",2),S([Z()],Rt.prototype,"failed",2),S([Z()],Rt.prototype,"awaitingPublication",2),Rt=S([we("smartpi-thermal-journey")],Rt);var Us=class{static describe(i,e,t=!0,s=Date.now()/1e3){let r=Ht(e);return t?i==null||typeof i=="number"&&!Number.isFinite(i)?"Valeur absente":r===null||r>s+60?"Horodatage non v\xE9rifiable":s-r>600?"Publication ancienne":"Publication r\xE9cente":"Source indisponible"}},Bs=class n{constructor(i,e){this.tolerance=e;this.episodes=[];this.excluded=0;if(!Number.isFinite(e)||e<0)throw new Error("Tol\xE9rance invalide");let t=[...new Map(i.map(a=>[a.time,a])).values()].filter(a=>Number.isFinite(a.time)).sort((a,c)=>a.time-c.time),s,r="",o;for(let a of t){let c=JSON.stringify([a.climate_id,a.mode,a.target,a.unit]),p=K(a.temperature)!==null&&K(a.target)!==null&&["\xB0C","\xB0F"].includes(a.unit??"")&&["heat","cool"].includes(a.mode??"")&&typeof a.climate_id=="string"&&a.bound===!0&&a.window!=="on"&&a.safety!==!0&&a.overpowering!==!0,h=!!o&&a.time-o.time>n.GAP;if((!p||h||r!==c)&&(s&&(s.endReason=p?h?"Interruption > 10 min":"Consigne, mode, unit\xE9 ou liaison modifi\xE9":"Donn\xE9e ou contexte exclu"),s=void 0),!p){this.excluded++,o=a,r=c;continue}let f=a.temperature,u=a.target;s?s.bracketedSeconds+=a.time-s.end:(s={start:a.time,end:a.time,target:u,baseline:f,unit:a.unit,mode:a.mode,minimum:f,maximum:f,last:f,publications:0,bracketedSeconds:0,firstWithin:null,overshoot:0,endReason:"Fin des observations disponibles",contextKnown:!0},this.episodes.push(s)),s.end=a.time,s.minimum=Math.min(s.minimum,f),s.maximum=Math.max(s.maximum,f),s.last=f,s.publications++,s.contextKnown&&=["on","off"].includes(a.window??"")&&typeof a.safety=="boolean"&&typeof a.overpowering=="boolean",s.firstWithin===null&&Math.abs(u-f)<=e&&(s.firstWithin=a.time-s.start);let y=Math.sign(u-s.baseline);y&&(s.overshoot=Math.max(s.overshoot,y*(f-u))),o=a,r=c}}static{this.GAP=600}},Vs=class{constructor(i,e,t,s){this.segments=[];let r=[],o,a=0;for(let c of gi(i).filter(p=>p.time>=t&&p.time<=s)){let p=ze(c,"error"),h=ze(c,"power.applied_percent"),f=!c.observedAt&&c.unit===e&&!["unknown","unavailable"].includes(c.state)&&p!==null&&h!==null&&h>=0&&h<=100;(!f||o&&(c.time-o.time>600||!ri(c,o)))&&(r.length&&this.segments.push(r),r=[]),f&&(r.push({time:c.time,error:p,applied:h}),a++),o=c}r.length&&this.segments.push(r),this.valid=a}};var Gi=class extends ce{constructor(){super(...arguments);this.points=[];this.tolerance=.2}render(){let e=new Bs(this.points,this.tolerance);return b`<section><h3>Réponses aux consignes normales</h3><p>Observations prospectives locales · maximum 48 h / 1 200 points. Aucun passé Recorder reconstruit.</p>
  <label>Tolérance de lecture (unité de chaque épisode) <select .value=${String(this.tolerance)} @change=${t=>{this.tolerance=Number(t.target.value)}}><option value="0">Exacte</option><option value="0.2">± 0,2</option><option value="0.5">± 0,5</option></select></label>
  <p>Ce seuil de lecture n’est ni la bande morte SmartPI ni une norme de confort. ${e.excluded} point(s) exclu(s) : contexte non confirmé, indisponibilité ou motif de suspension publié.</p>
  ${e.episodes.length?b`<ol>${e.episodes.slice(-20).reverse().map(t=>b`<li><strong>${T(t.baseline,t.unit)} → ${T(t.target,t.unit)} · ${t.mode==="heat"?"Chauffage":"Refroidissement"}</strong>
   <p>${new Date(t.start*1e3).toLocaleString("fr-FR")} → ${new Date(t.end*1e3).toLocaleString("fr-FR")} · ${t.endReason}</p>
   <dl><div><dt>Plage mesurée</dt><dd>${T(t.minimum)} → ${T(t.maximum,t.unit)}</dd></div>
    <div><dt>Première présence dans la tolérance</dt><dd>${t.firstWithin===null?"Non observ\xE9e":Math.round(t.firstWithin/60)+" min depuis le premier point"}</dd></div>
    <div><dt>Dépassement dans le sens du trajet initial</dt><dd>${T(t.overshoot,t.unit)}</dd></div>
    <div><dt>Publications / durée encadrée</dt><dd>${t.publications} / ${Math.round(t.bracketedSeconds/60)} min</dd></div></dl>
   ${t.contextKnown?"":b`<p>Contexte fenêtre, sécurité ou délestage partiellement non archivé. Aucune conclusion causale.</p>`}
  </li>`)}</ol><p>20 derniers segments sur ${e.episodes.length}. Le début est la première observation disponible, pas nécessairement l’instant du changement. L’atteinte est datée à une publication ; aucune durée de stabilisation continue n’est déduite.</p>`:b`<p>En attente d’observations éligibles après cette mise à jour.</p>`}
 </section>`}};Gi.styles=ve`:host{display:block}h3{font-size:16px}p,label{font-size:12px;line-height:1.6;color:var(--secondary-text-color)}select{display:block;min-height:44px;margin:6px 0;background:var(--card-background-color);color:var(--primary-text-color);border:1px solid var(--divider-color);border-radius:6px;padding:8px}select:focus-visible{outline:3px solid var(--primary-color)}ol{padding:0;list-style:none}li{border-top:1px solid var(--divider-color);padding:14px 0;overflow-wrap:anywhere}strong{font-size:14px}dl{display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:12px}dt{color:var(--secondary-text-color)}dd{margin:5px 0}@media(max-width:600px){dl{grid-template-columns:1fr}}`,S([U({attribute:!1})],Gi.prototype,"points",2),S([U({type:Number})],Gi.prototype,"tolerance",2),Gi=S([we("smartpi-response-episodes")],Gi);var _t=n=>{let i=K(n);return i===null?"Non observ\xE9":new Date(i*1e3).toLocaleString("fr-FR")},aa=n=>{let i=K(n);return i===null?"\u2014":`${Math.round(i/60)} min`},oa={pending:"Observation en cours",observed:"\xC9volution observ\xE9e",excluded:"Interrompu",finished:"Termin\xE9",reached:"Atteinte observ\xE9e"},Wl={unknown:"Non renseign\xE9",good:"J\u2019\xE9tais bien",cold:"J\u2019avais froid",hot:"J\u2019avais chaud"},ct=class extends ce{constructor(){super(...arguments);this.tab="receipts";this.loading=!1;this.saving=!1;this.error="";this.message="";this.eraseArmed=!1;this.comparison=[];this.entity="";this.signature="";this.generation=0}updated(){let e=this.diagnostic?.entityId??"";e!==this.entity&&(++this.generation,clearTimeout(this.timer),this.entity=e,this.room=void 0,this.comparison=[],this.eraseArmed=!1,this.error="",this.message="",this.saving=!1,this.refresh());let t=this.diagnostic?.climateId?this.hass?.states[this.diagnostic.climateId]?.last_updated:"",s=`${e}/${this.diagnostic?.lastUpdated}/${t}`;s!==this.signature&&(this.signature=s,clearTimeout(this.timer),this.timer=setTimeout(()=>{this.saving||this.refresh()},500))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.refresh()}disconnectedCallback(){++this.generation,clearTimeout(this.timer),this.saving=!1,this.loading=!1,this.message="",this.eraseArmed=!1,super.disconnectedCallback()}publishPoints(e=""){this.dispatchEvent(new CustomEvent("observatory-points",{detail:{entityId:this.entity,points:e?[]:this.room?.points??[],error:e},bubbles:!0,composed:!0}))}async refresh(){if(!this.hass||!this.entity||this.saving)return;let e=++this.generation,t=this.entity;this.loading=!this.room;try{let s=await new mt(this.hass).request(t,"get");if(e!==this.generation||!this.isConnected)return;this.room=mt.room(s),this.error="",this.publishPoints()}catch(s){e===this.generation&&(this.error=s instanceof Error?s.message:"Lecture de l\u2019observatoire refus\xE9e. V\xE9rifiez les droits administrateur et le composant.",this.publishPoints(this.error))}finally{e===this.generation&&(this.loading=!1)}}async mutate(e,t={}){if(!this.hass||!this.entity||this.saving)return;let s=this.entity,r=++this.generation;this.saving=!0,this.message="Enregistrement local\u2026",this.error="";try{let o=new mt(this.hass),a=await o.request(s,e,t);if(e==="clear"&&(a=await o.request(s,"get")),r!==this.generation||!this.isConnected)return;this.room=mt.room(a),this.message=e==="clear"?"Les donn\xE9es de cette pi\xE8ce ont \xE9t\xE9 effac\xE9es.":"Enregistr\xE9 localement dans Home Assistant.",this.publishPoints(),this.eraseArmed=!1}catch(o){r===this.generation&&(this.error=o instanceof Error?o.message:"Enregistrement refus\xE9 ou impossible.",this.message="")}finally{r===this.generation&&(this.saving=!1)}}submit(e,t){e.preventDefault();let r=e.currentTarget.elements.namedItem("label");this.mutate(t,{label:r.value})}toggleComparison(e){this.comparison=this.comparison.includes(e)?this.comparison.filter(t=>t!==e):[...this.comparison.slice(-1),e]}trialMetrics(e){let t=e.summary;return b`<dl class="metrics">
      <div><dt>Consigne</dt><dd>${T(e.target,e.unit,1)}</dd></div>
      <div><dt>Mesure au départ</dt><dd>${T(e.baseline,e.unit,1)}</dd></div>
      <div><dt>Plage observée</dt><dd>${T(t.minimum,"",1)} → ${T(t.maximum,e.unit,1)}</dd></div>
      <div><dt>Dernière mesure</dt><dd>${T(t.last,e.unit,1)}</dd></div>
      <div><dt>Écart absolu maximal observé</dt><dd>${T(t.max_abs_error,e.unit,2)}</dd></div>
      <div><dt>Publications retenues / manquantes</dt><dd>${t.publications} / ${e.missing_publications??0}</dd></div>
      <div><dt>Extérieur observé</dt><dd>${T(t.outdoor_min,"",1)} → ${T(t.outdoor_max,e.unit,1)}</dd></div>
      <div><dt>Première / dernière publication</dt><dd>${_t(t.first_at)} · ${_t(t.last_at)}</dd></div>
    </dl>`}render(){let e=this.diagnostic;if(!e)return P;let t=new tt(this.hass,e),s=this.room,r=this.saving||!s,o=s?.trials.filter(a=>this.comparison.includes(a.id))??[];return b`<section aria-labelledby="observatory-title" aria-busy=${this.loading||this.saving}>
      <div class="heading"><div><h2 id="observatory-title">Mon observatoire</h2><p class="muted">${e.name} · souvenirs et observations conservés dans Home Assistant</p></div>
        <button type="button" class="refresh" ?disabled=${this.loading||this.saving} @click=${this.refresh}>Actualiser</button></div>
      <nav class="tabs" aria-label="Vues de l’observatoire">${[["receipts","Re\xE7us de chauffe"],["bookmarks","Souvenirs"],["trials","Mes essais"],["forecasts","Carnet du Twin"]].map(([a,c])=>b`<button type="button" data-view=${a} aria-pressed=${this.tab===a} @click=${()=>{this.tab=a,this.message=""}}>${c}</button>`)}</nav>
      <p class="status" role="status" aria-live="polite">${this.loading?"Lecture du carnet local\u2026":this.message}</p>
      ${this.error?b`<p class="error" role="alert">${this.error}</p>`:P}
      ${s?b`
        ${this.tab==="receipts"?b`<p class="intro">De la demande au retour mesuré, chaque étape garde sa propre preuve.</p>
          ${s.receipts.length?b`<ol class="entries">${[...s.receipts].reverse().map(a=>b`<li>
            <div class="row"><strong>${a.choice.kind==="temperature"?b`Demande de ${T(a.choice.value,a.unit??"",1)}`:b`Preset demandé · ${a.choice.value}`}</strong><span class="badge">${oa[a.status]??a.status}</span></div>
            <p class="muted">${_t(a.started_at)}</p>
            <ol class="receipt-stages">
              <li><strong>Service</strong><span>${a.service_result==="accepted"?"Retour accept\xE9":a.service_result==="uncertain"?"Retour incertain":"En attente du retour"}</span></li>
              <li><strong>Consigne HA</strong><span>${a.confirmed_at===null?"Non confirm\xE9e":_t(a.confirmed_at)}</span></li>
              <li><strong>Commande publiée</strong><span>${a.applied_at===void 0?"Non observ\xE9e":b`${T(a.applied_percent," %",1)} · ${_t(a.applied_at)}`}</span></li>
              <li><strong>Température</strong><span>${a.response_at===void 0?"\xC9volution non observ\xE9e":b`${T(a.response_temperature,a.unit??"",1)} · ${_t(a.response_at)}`}</span></li>
            </ol>
            ${a.reason?b`<p class="muted">${a.reason}</p>`:P}
            <button type="button" class="quiet" ?disabled=${r} @click=${()=>this.mutate("receipt_delete",{id:a.id})}>Supprimer ce reçu</button>
          </li>`)}</ol>`:b`<p class="empty">Vos prochains changements effectués depuis ce panneau apparaîtront ici.</p>`}
          <p class="foot">Un retour de service ne prouve pas une chauffe physique. L’évolution de température est une observation ; son attribution au chauffage n’est pas démontrée.</p>`:P}
        ${this.tab==="bookmarks"?b`<p class="intro">Gardez le souvenir d’un moment où vous étiez bien, avec ses conditions.</p>
          <form @submit=${a=>this.submit(a,"bookmark_save")}><label for="bookmark-name">Nom du souvenir</label><div class="form-row"><input id="bookmark-name" name="label" maxlength="100" required placeholder="Lecture, canapé…" ?disabled=${r}><button type="submit" ?disabled=${r||!t.available}>Là, je suis bien</button></div></form>
          ${s.bookmarks.length?b`<ul class="entries">${[...s.bookmarks].reverse().map(a=>b`<li><div class="row"><strong>${a.label}</strong><span class="muted">${_t(a.created_at)}</span></div>
            <div class="memory-values"><span>Mesure <strong>${T(a.temperature,a.unit,1)}</strong></span><span>Consigne <strong>${T(a.target,a.unit,1)}</strong></span><span>Extérieur <strong>${T(a.outdoor,a.unit,1)}</strong></span></div>
            <p class="muted">Preset ce jour-là · ${a.preset??"Non publi\xE9"} · aujourd’hui ${T(t.measured,t.unit??"",1)}, extérieur ${T(e.live.temperature&&e.live.temperature.outdoor,t.unit??"",1)}</p>
            <div class="actions"><button type="button" ?disabled=${this.saving||a.unit!==t.unit||!t.validate({kind:"temperature",value:a.target})} @click=${()=>this.dispatchEvent(new CustomEvent("prepare-temperature",{detail:{entityId:e.entityId,value:a.target},bubbles:!0,composed:!0}))}>Préparer ${T(a.target,a.unit,1)}</button>
              <button type="button" class="quiet" ?disabled=${r} @click=${()=>this.mutate("bookmark_delete",{id:a.id})}>Supprimer</button></div>
          </li>`)}</ul>`:b`<p class="empty">Aucun souvenir dans cette pièce.</p>`}<p class="foot">Préparer ouvre un aperçu à valider. Une même température ne garantit pas le même ressenti.</p>`:P}
        ${this.tab==="trials"?b`<p class="intro">Observez un réglage déjà actif, puis notez votre ressenti. Démarrer un essai ne change aucune consigne.</p>
          <form @submit=${a=>this.submit(a,"trial_start")}><label for="trial-name">Nom de l’essai</label><div class="form-row"><input id="trial-name" name="label" maxlength="100" required placeholder="Mon réglage de soirée…" ?disabled=${r}><button type="submit" ?disabled=${r||!t.available||s.trials.some(a=>a.status==="pending")}>Observer ce réglage</button></div></form>
          ${s.trials.length?b`<ul class="entries">${[...s.trials].reverse().map(a=>b`<li><div class="row"><strong>${a.label}</strong><span class="badge">${oa[a.status]??a.status}</span></div>
            <p class="muted">${_t(a.started_at)}${a.ended_at?b` → ${_t(a.ended_at)}`:P} · ${a.reason??"Collecte des prochaines publications"}</p>
            ${this.trialMetrics(a)}
            <div class="actions"><label class="compare"><input type="checkbox" .checked=${this.comparison.includes(a.id)} @change=${()=>this.toggleComparison(a.id)}>Comparer</label>
              <label>Ressenti <select aria-label=${`Ressenti pour ${a.label}`} .value=${a.feedback} ?disabled=${r} @change=${c=>this.mutate("trial_feedback",{id:a.id,feedback:c.currentTarget.value})}>${Object.entries(Wl).map(([c,p])=>b`<option value=${c}>${p}</option>`)}</select></label>
              ${a.status==="pending"?b`<button type="button" ?disabled=${r} @click=${()=>this.mutate("trial_stop",{id:a.id})}>Terminer l’essai</button>`:P}
              <button type="button" class="quiet" ?disabled=${r} @click=${()=>this.mutate("trial_delete",{id:a.id})}>Supprimer</button></div>
          </li>`)}</ul>`:b`<p class="empty">Aucun essai enregistré.</p>`}
          ${o.length===2?b`<section class="comparison"><h3>Deux observations côte à côte</h3>
            ${o[0].unit!==o[1].unit?b`<p>Unités différentes : comparaison numérique désactivée.</p>`:b`<div class="table-wrap"><table><thead><tr><th>Observation</th>${o.map(a=>b`<th>${a.label}</th>`)}</tr></thead><tbody>
              <tr><th>Consigne</th>${o.map(a=>b`<td>${T(a.target,a.unit,1)}</td>`)}</tr>
              <tr><th>Plage mesurée</th>${o.map(a=>b`<td>${T(a.summary.minimum,"",1)} → ${T(a.summary.maximum,a.unit,1)}</td>`)}</tr>
              <tr><th>Extérieur au départ</th>${o.map(a=>b`<td>${T(a.outdoor,a.unit,1)}</td>`)}</tr>
              <tr><th>Publications</th>${o.map(a=>b`<td>${a.summary.publications}</td>`)}</tr>
              <tr><th>Ressenti déclaré</th>${o.map(a=>b`<td>${Wl[a.feedback]??a.feedback}</td>`)}</tr>
            </tbody></table></div>`}
            <p class="foot">Conditions et durées peuvent différer. Ces observations ne prouvent pas qu’un réglage a causé un résultat ni une économie.</p></section>`:P}`:P}
        ${this.tab==="forecasts"?b`<p class="intro">Les prévisions sont conservées à leur émission, puis confrontées aux publications suivantes.</p>
          <section class="forecast-validity"><h3>Ce que ce carnet permet de vérifier</h3><p>Chaque ETA est figée à son émission. Le marqueur annoncé indique un meilleur cas sous commande maximale ; le marqueur observé indique la première publication d’atteinte. Ces scénarios ne sont pas équivalents : aucun score de précision ni intervalle de confiance n’est calculé.</p><p>Prévisions de température à horizon fixe : non évaluables ici, l’horizon n’est pas publié. Une évaluation future exigera horizon, commande et conditions comparables.</p></section>
          <p class="counts">${s.forecasts.filter(a=>a.status==="reached").length} atteinte(s) observée(s) · ${s.forecasts.filter(a=>a.status==="excluded").length} épisode(s) interrompu(s) · ${s.forecasts.filter(a=>a.status==="pending").length} en cours</p>
          ${s.forecasts.length?b`<ul class="entries">${[...s.forecasts].reverse().map(a=>b`<li><div class="row"><strong>${T(a.temperature,"",1)} → ${T(a.target,a.unit,1)}</strong><span class="badge">${oa[a.status]??a.status}</span></div>
            <p class="muted">Prévision publiée le ${_t(a.started_at)}</p>
            <div class="forecast-track" aria-hidden="true"><span style=${"left:"+100*a.eta_s/Math.max(a.eta_s,a.observed_s??0,1)+"%"}>◇</span>${a.status==="reached"?b`<span class="observed" style=${"left:"+100*(a.observed_s??0)/Math.max(a.eta_s,a.observed_s??0,1)+"%"}>●</span>`:P}</div>
            <p class="foot">◇ Meilleur cas : ${_t(a.started_at+a.eta_s)} · ● Atteinte : ${a.status==="reached"?_t(a.observed_at):"Non observ\xE9e"}. Échelle propre à cet épisode, origine à l’émission.</p><div class="memory-values"><span>Meilleur cas annoncé <strong>${aa(a.eta_s)}</strong></span>
              ${a.status==="reached"?b`<span>Atteinte observée après <strong>${aa(a.observed_s)}</strong></span><span>Écart au meilleur cas <strong>${aa((a.observed_s??0)-a.eta_s)}</strong></span>`:P}</div>
            <p class="muted">${a.status==="reached"?b`Première publication d’atteinte : ${_t(a.observed_at)}`:a.reason}</p>
            <button type="button" class="quiet" ?disabled=${r} @click=${()=>this.mutate("forecast_delete",{id:a.id})}>Supprimer cette observation</button>
          </li>`)}</ul>`:b`<p class="empty">La collecte commencera avec les prochains ETA éligibles publiés par le Twin. Aucun passé n’est reconstruit.</p>`}
          <p class="foot">Le meilleur cas n’est pas la trajectoire réelle du PI. L’atteinte est datée à la première publication qui la confirme. Les épisodes interrompus ne comptent pas comme des réussites.</p>`:P}
      `:P}
      ${s?b`<details class="episodes"><summary>Bilans par épisode de consigne</summary><smartpi-response-episodes .points=${s.points??[]}></smartpi-response-episodes></details>`:P}
      <details class="storage"><summary>Conservation et suppression</summary><p class="foot">Collecte locale même panneau fermé : 48 h de points récents, 30 jours d’épisodes, au plus 50 reçus, 50 essais et 100 prévisions par pièce. Les 30 souvenirs maximum restent jusqu’à suppression. Les interruptions ne sont pas comblées.</p>
        ${this.eraseArmed?b`<p>Effacer les souvenirs et tous les épisodes de cette pièce ?</p><div class="actions"><button type="button" ?disabled=${r} @click=${()=>this.mutate("clear")}>Confirmer l’effacement</button><button type="button" @click=${()=>this.eraseArmed=!1}>Annuler</button></div>`:b`<button type="button" ?disabled=${r} @click=${()=>this.eraseArmed=!0}>Effacer les données de cette pièce</button>`}</details>
    </section>`}};ct.styles=ve`
    .episodes{border-top:1px solid var(--divider-color);margin-top:16px}.episodes summary{min-height:44px;padding:14px 0;font-size:13px;cursor:pointer}
    .forecast-validity{border-inline-start:3px solid var(--primary-color);padding-left:12px;margin:16px 0}
    .forecast-track{position:relative;margin:24px 18px;height:20px;border-top:2px solid var(--divider-color)}.forecast-track span{position:absolute;top:-11px;transform:translateX(-50%);color:var(--primary-text-color);font-size:18px}.forecast-track .observed{top:1px;color:var(--primary-color)}
    :host{display:block;margin:20px 0;color:var(--primary-text-color,#192b31)}*{box-sizing:border-box}section{min-width:0}h2{font-size:20px;margin:0}h3{font-size:16px}p{font-size:13px;line-height:1.55}.heading,.row{display:flex;justify-content:space-between;align-items:center;gap:12px}.heading{margin-bottom:12px}.heading p{margin:6px 0 0}.muted,.foot{color:var(--secondary-text-color,#526268)}.muted,.foot,.counts{font-size:12px}.tabs{display:flex;flex-wrap:wrap;gap:7px;border-bottom:1px solid var(--divider-color,#d2dbdd);padding-bottom:12px}.tabs button[aria-pressed=true]{border-color:var(--primary-color,#167883);box-shadow:inset 0 -3px var(--primary-color,#167883)}
    button,input,select{font:inherit;color:inherit;border:1px solid var(--divider-color,#b5c0c4);background:var(--card-background-color,#fff);border-radius:8px;min-height:44px;padding:9px 12px;font-size:13px}button{cursor:pointer}button:disabled{opacity:.5;cursor:default}button:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible{outline:3px solid var(--primary-color,#167883);outline-offset:3px}.quiet{background:transparent;font-size:12px}.status:empty{display:none}.error{color:var(--error-color,#b31e18)}.entries{list-style:none;padding:0;margin:16px 0}.entries>li{padding:18px 0;border-top:1px solid var(--divider-color,#d2dbdd);overflow-wrap:anywhere}.badge{border:1px solid var(--divider-color,#d2dbdd);padding:5px 8px;border-radius:20px;font-size:11px}.receipt-stages{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;list-style:none;padding:0}.receipt-stages li{border-inline-start:2px solid var(--primary-color,#167883);padding-left:10px;display:flex;flex-direction:column;gap:7px;font-size:12px}.receipt-stages strong{font-size:12px}.receipt-stages span{color:var(--secondary-text-color,#526268)}
    form{margin:18px 0}label{font-size:13px;display:block}.form-row{display:flex;gap:8px;margin-top:7px}.form-row input{flex:1;min-width:0}.actions{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-top:12px}.compare{display:flex;align-items:center;gap:7px;min-height:44px}.compare input{min-height:24px;width:24px;height:24px;accent-color:var(--primary-color,#167883)}.memory-values{display:flex;flex-wrap:wrap;gap:14px 28px;font-size:12px}.memory-values strong{display:block;font-size:19px;margin-top:5px;font-weight:500}.metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;font-size:12px}dt{color:var(--secondary-text-color,#526268)}dd{margin:5px 0 0;font-size:14px}.table-wrap{overflow:auto;max-width:100%}table{border-collapse:collapse;min-width:100%;font-size:13px}th,td{text-align:left;padding:10px;border-bottom:1px solid var(--divider-color,#d2dbdd);overflow-wrap:anywhere}.storage{border-top:1px solid var(--divider-color,#d2dbdd);margin-top:18px;padding-top:4px}.storage summary{cursor:pointer;min-height:44px;padding:14px 0;font-size:12px}.empty{padding:20px 0;color:var(--secondary-text-color,#526268)}
    @media(max-width:600px){.receipt-stages{grid-template-columns:repeat(2,minmax(0,1fr))}.heading{align-items:flex-start}.refresh{font-size:12px}.form-row{flex-direction:column}.row{align-items:flex-start;flex-wrap:wrap}.metrics{grid-template-columns:1fr}.tabs button{flex:1 1 125px}.memory-values{gap:14px}}
  `,S([U({attribute:!1})],ct.prototype,"hass",2),S([U({attribute:!1})],ct.prototype,"diagnostic",2),S([Z()],ct.prototype,"tab",2),S([Z()],ct.prototype,"room",2),S([Z()],ct.prototype,"loading",2),S([Z()],ct.prototype,"saving",2),S([Z()],ct.prototype,"error",2),S([Z()],ct.prototype,"message",2),S([Z()],ct.prototype,"eraseArmed",2),S([Z()],ct.prototype,"comparison",2),ct=S([we("smartpi-observatory")],ct);var Ft=class extends ce{constructor(){super(...arguments);this.rooms=[];this.busy=!1;this.loaded=!1;this.error="";this.armed="";this.generation=0}disconnectedCallback(){++this.generation,this.busy=!1,this.loaded=!1,super.disconnectedCallback()}async load(){if(!this.hass||this.busy)return;let e=++this.generation;this.busy=!0,this.error="";try{let t=await new mt(this.hass).request(void 0,"get");if(e!==this.generation||!this.isConnected)return;this.rooms=mt.orphans(t),this.loaded=!0}catch(t){e===this.generation&&(this.error=t instanceof Error?t.message:"Lecture des carnets impossible.")}finally{e===this.generation&&(this.busy=!1)}}async act(e,t=!1){if(!this.hass||this.busy)return;let s=++this.generation;this.busy=!0,this.error="";try{let r=new mt(this.hass),o=await r.request(e,t?"clear":"get");if(s!==this.generation||!this.isConnected)return;t?(this.inspected=void 0,this.armed="",this.busy=!1,await this.load(),this.dispatchEvent(new CustomEvent("observatory-recovery",{bubbles:!0,composed:!0}))):this.inspected={id:e,room:mt.room(o)}}catch(r){s===this.generation&&(this.error=r instanceof Error?r.message:"Op\xE9ration impossible.")}finally{s===this.generation&&(this.busy=!1)}}render(){return b`<details @toggle=${e=>{e.currentTarget.open&&!this.loaded&&this.load()}}>
    <summary>Carnets sans diagnostic</summary>
    <p>Retrouver les observations de capteurs supprimés ou renommés. Leur suppression libère une place dans le carnet local (32 pièces maximum).</p>
    <button type="button" ?disabled=${this.busy} @click=${this.load}>${this.busy?"Lecture\u2026":"Actualiser la liste"}</button>
    ${this.error?b`<p role="alert">${this.error}</p>`:P}
    ${this.loaded&&!this.rooms.length?b`<p role="status">Aucun carnet orphelin.</p>`:P}
    <ul>${this.rooms.map(e=>b`<li><strong>${e.entity_id}</strong><p>${e.bookmarks} souvenir(s) · ${e.trials} essai(s) · ${e.forecasts} prévision(s) · ${e.receipts} reçu(s)</p>
      <button type="button" ?disabled=${this.busy} @click=${()=>this.act(e.entity_id)}>Consulter</button>
      ${this.armed===e.entity_id?b`<p>Effacer définitivement les souvenirs et observations de ce carnet ?</p><button type="button" ?disabled=${this.busy} @click=${()=>this.act(e.entity_id,!0)}>Confirmer la suppression</button><button type="button" ?disabled=${this.busy} @click=${()=>this.armed=""}>Annuler</button>`:b`<button type="button" ?disabled=${this.busy} @click=${()=>this.armed=e.entity_id}>Supprimer ce carnet</button>`}
      ${this.inspected?.id===e.entity_id?b`<div class="inspection"><h4>Carnet conservé</h4>
        ${this.inspected.room.bookmarks.map(t=>b`<p>${t.label} · ${t.target} ${t.unit} · ${new Date(t.created_at*1e3).toLocaleString("fr-FR")}</p>`)}
        ${this.inspected.room.trials.map(t=>b`<p>${t.label} · ${t.target} ${t.unit} · ${t.status}</p>`)}
        ${this.inspected.room.receipts.map(t=>b`<p>Reçu · ${new Date(t.started_at*1e3).toLocaleString("fr-FR")} · ${t.choice.value} ${t.choice.kind==="temperature"?t.unit??"unit\xE9 source":""} · ${t.status} · ${t.reason??t.service_result}</p>`)}
        ${this.inspected.room.forecasts.map(t=>b`<p>Prévision Twin · ${new Date(t.started_at*1e3).toLocaleString("fr-FR")} · cible ${t.target} ${t.unit} · meilleur cas annoncé ${Math.round(t.eta_s/60)} min · ${t.status} · ${t.reason??""}</p>`)}
        <p>${this.inspected.room.points?.length??0} point(s) d’observation conservé(s). Ce carnet n’est plus lié à un diagnostic actif.</p></div>`:P}
    </li>`)}</ul></details>`}};Ft.styles=ve`:host{display:block;margin:20px 0;color:var(--primary-text-color)}details{border-top:1px solid var(--divider-color);padding:10px 0}summary{min-height:44px;line-height:44px;font-size:13px;cursor:pointer}p{font-size:12px;line-height:1.6;color:var(--secondary-text-color)}ul{list-style:none;padding:0}li{border-top:1px solid var(--divider-color);padding:14px 0;overflow-wrap:anywhere;font-size:13px}button{font:inherit;font-size:12px;background:var(--card-background-color);color:inherit;border:1px solid var(--divider-color);border-radius:6px;min-height:44px;padding:8px 12px;margin:4px 8px 4px 0;cursor:pointer}button:focus-visible,summary:focus-visible{outline:3px solid var(--primary-color);outline-offset:3px}button:disabled{opacity:.5}.inspection{padding:8px 0}`,S([U({attribute:!1})],Ft.prototype,"hass",2),S([Z()],Ft.prototype,"rooms",2),S([Z()],Ft.prototype,"busy",2),S([Z()],Ft.prototype,"loaded",2),S([Z()],Ft.prototype,"error",2),S([Z()],Ft.prototype,"armed",2),S([Z()],Ft.prototype,"inspected",2),Ft=S([we("smartpi-orphan-notebooks")],Ft);var Qt=class extends ce{constructor(){super(...arguments);this.date="";this.source="SmartPI";this.available=!0;this.now=Date.now()/1e3}render(){let e=Us.describe(this.value,this.date,this.available,this.now);return b`<span title=${`${this.source} \xB7 ${this.date||"Date absente"}`}><span aria-hidden="true">${e==="Publication r\xE9cente"?"\u25CF":"\u25CB"}</span> ${e} · ${this.source}
      ${Ht(this.date)!==null?b`<time datetime=${this.date}>${new Date(this.date).toLocaleString("fr-FR")}</time>`:""}</span>`}};Qt.styles=ve`:host{display:block;font-size:11px;font-weight:400;line-height:1.5;color:var(--secondary-text-color)}time{display:block;font-variant-numeric:tabular-nums}`,S([U({attribute:!1})],Qt.prototype,"value",2),S([U()],Qt.prototype,"date",2),S([U()],Qt.prototype,"source",2),S([U({type:Boolean})],Qt.prototype,"available",2),S([U({type:Number})],Qt.prototype,"now",2),Qt=S([we("smartpi-publication-quality")],Qt);var Gl={none:"Aucun motif indiqu\xE9",init:"Initialisation",reset:"R\xE9initialisation",deadband_hysteresis_shell:"Int\xE9grale conserv\xE9e dans la couronne d\u2019hyst\xE9r\xE9sis de la bande morte",pi_deadband_shell_hold:"PI admissible pour l\u2019observation FF dans la bordure de bande morte",setpoint_change:"Protection apr\xE8s changement de consigne",off_resume:"Protection apr\xE8s reprise depuis l\u2019arr\xEAt",window_resume:"Protection apr\xE8s fermeture de fen\xEAtre",power_shedding_resume:"Protection apr\xE8s d\xE9lestage",disturbance_recovery:"Protection pendant la r\xE9cup\xE9ration d\u2019une perturbation",warming_up:"Initialisation de l\u2019observation",collecting:"Collecte en cours",waiting_deadtime:"Attente d\u2019un temps mort exploitable",ready:"Fen\xEAtre admissible",rejected:"Observation refus\xE9e",observer_rejected:"Observation refus\xE9e",stationary:"Observation stationnaire",periodic:"Observation p\xE9riodique",applied:"Transfert appliqu\xE9",awaiting_cycle_boundary:"Attente d\u2019une fronti\xE8re de cycle",awaiting_post_aw_boundary:"Attente de la fronti\xE8re apr\xE8s anti-windup",updated_bumpless:"Mise \xE0 jour avec transfert de l\u2019int\xE9grale",causal_update_without_transfer:"Correction FF sans transfert de l\u2019int\xE9grale",skipped:"Mise \xE0 jour non appliqu\xE9e",deadtime_unreliable:"Temps mort non fiable",causal_power_not_covered:"Commande causale insuffisamment couverte",washout:"Attente apr\xE8s interruption de l\u2019observation",not_enough_measurements:"Mesures distinctes insuffisantes",window_too_short:"Fen\xEAtre d\u2019observation trop courte",incomplete_observer_result:"R\xE9sultat d\u2019observation incomplet","skip: no external temp":"Observation non retenue : temp\xE9rature ext\xE9rieure absente","skip: ff3_active":"Observation non retenue : FF3 actif","skip: bootstrap - active deadtime not yet learned":"Observation non retenue : temps mort actif encore inconnu","skip: bootstrap - passive deadtime not yet learned":"Observation non retenue : temps mort passif encore inconnu","skip: resume cool-down":"Observation non retenue : attente apr\xE8s reprise","skip: deadtime window":"Observation non retenue : fen\xEAtre de temps mort actif","skip: deadtime window (cool)":"Observation non retenue : fen\xEAtre de temps mort passif","skip: setpoint transient":"Observation non retenue : transition de consigne","skip: delta too small":"Observation non retenue : variation thermique trop faible","skip: slope outlier":"Observation non retenue : pente atypique","skip: low excitation (u mid)":"Observation non retenue : excitation insuffisante","power not constant":"Commande non constante","passive baseline not settled":"R\xE9f\xE9rence passive non stabilis\xE9e","no outdoor temperature":"Temp\xE9rature ext\xE9rieure absente","late crossings insufficient":"Changements de niveau tardifs insuffisants","no baseline crossing":"Aucun changement de niveau dans la r\xE9f\xE9rence","passive slope unknown":"Pente passive inconnue","no active response":"Aucune r\xE9ponse active exploitable","intercept not resolvable":"D\xE9lai non identifiable",estimated:"Estimation obtenue","episode interrupted by restart":"\xC9pisode interrompu par un red\xE9marrage"};function es(n){return typeof n!="string"||!n.trim()?"Indisponible":Object.hasOwn(Gl,n)?`${Gl[n]} (${n})`:`Code publi\xE9 \xB7 ${n.length>300?n.slice(0,300)+"\u2026":n}`}var Nd=new Intl.NumberFormat("fr-FR",{maximumFractionDigits:6}),la=(n,i="")=>{let e=K(n);return e===null?"Indisponible":`${Nd.format(e).replace("-","\u2212")}${i}`},Ki=n=>{let i=K(n);return i===null||!Number.isFinite(i*100)?"Indisponible":la(i*100," points de commande")};function jd(n,i){if(typeof n!="string"||!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(n)||!Number.isFinite(Date.parse(n))||!Number.isFinite(i)||Date.parse(n)>i+6e4)return null;let e=Number(n.slice(0,4)),t=Number(n.slice(5,7)),s=Number(n.slice(8,10)),r=[31,e%4===0&&(e%100!==0||e%400===0)?29:28,31,30,31,30,31,31,30,31,30,31];return t<1||t>12||s<1||s>r[t-1]||Number(n.slice(11,13))>23?null:n}var Ws=class{constructor(i,e=!0,t=Date.now()){e||(i={});let s=(a,c,p)=>({key:a,label:c,value:es(_(i,p))}),r=(a,c,p,h="")=>({key:a,label:c,value:la(_(i,p),h)});this.maintenance=[s("hold-source","Origine du maintien de l\u2019int\xE9grale","temperature.integral_hold_source"),s("hold-mode","Mode de maintien de l\u2019int\xE9grale","temperature.integral_hold_mode"),s("guard-source","Origine de la protection de l\u2019int\xE9grale","temperature.integral_guard_source"),...fe(_(i,"feedforward.fftrim"))?[s("observation-mode","Observation FF2","feedforward.fftrim.observation_mode"),s("stationary-state","Fen\xEAtre stationnaire","feedforward.fftrim.stationary.state"),s("periodic-state","Fen\xEAtre p\xE9riodique","feedforward.fftrim.periodic.state"),s("trim-reject","Dernier motif d\u2019observation FF2","feedforward.fftrim.last_reject_reason"),s("trim-update","Derni\xE8re issue FF2","feedforward.fftrim.last_update_reason"),s("transfer-state","Transfert courant","feedforward.fftrim.transfer.state"),s("transfer-reason","Motif du transfert courant","feedforward.fftrim.transfer.reason")]:[]];let o=_(i,"feedforward.fftrim.last_transaction");this.transaction=fe(o)?{date:jd(o.timestamp_utc,t),rows:[{key:"transaction-mode",label:"Observation",value:es(o.observation_mode)},{key:"transaction-state",label:"\xC9tat publi\xE9",value:es(o.state)},{key:"transaction-reason",label:"Motif publi\xE9",value:es(o.reason)},{key:"transaction-quality",label:"Qualit\xE9 publi\xE9e",value:es(o.quality)},{key:"requested-trim",label:"Variation FF2 demand\xE9e",value:Ki(o.requested_trim_delta)},{key:"stored-trim",label:"Variation FF2 m\xE9moris\xE9e",value:Ki(o.stored_trim_delta)},{key:"transferable-i",label:"Part d\u2019int\xE9grale transf\xE9rable publi\xE9e",value:Ki(o.transferable_i_power)},{key:"requested-i",label:"Transfert de l\u2019int\xE9grale demand\xE9",value:Ki(o.requested_i_transfer)},{key:"i-transfer",label:"Transfert de l\u2019int\xE9grale appliqu\xE9",value:Ki(o.applied_i_transfer)},{key:"trim-delta",label:"Variation FF2 appliqu\xE9e",value:Ki(o.applied_trim_delta)},{key:"net-delta",label:"Variation nette de commande publi\xE9e",value:Ki(o.net_command_delta)}]}:null,this.learning=[s("learning-reason","Dernier motif d\u2019apprentissage","learning.last_reason"),r("warmup-count","Mise en r\xE9gime de l\u2019anticipation \xB7 compteur accept\xE9","analysis.learning.ff_warmup_ok_count"),r("warmup-cycles","Mise en r\xE9gime de l\u2019anticipation \xB7 cycles publi\xE9s","analysis.learning.ff_warmup_cycles"),r("response-lag","D\xE9lai de r\xE9ponse publi\xE9","analysis.learning.response_lag.lag_s"," s"),r("lag-estimates","Estimations du d\xE9lai","analysis.learning.response_lag.estimates"),r("lag-episodes","\xC9pisodes observ\xE9s pour le d\xE9lai","analysis.learning.response_lag.episodes"),r("lag-target","Seuil d\u2019\xE9pisodes publi\xE9","analysis.learning.response_lag.episodes_target"),s("lag-reason","Motif du d\xE9lai de r\xE9ponse","analysis.learning.response_lag.last_reason"),{key:"tau",label:"Constante de temps \u03C4",value:_(i,"model.tau_reliable")===!0?la(_(i,"model.tau_min")," min"):"Non interpr\xE9table \xB7 fiabilit\xE9 non \xE9tablie"}]}};var xi=class extends ce{constructor(){super(...arguments);this.mode="maintenance";this.now=Date.now()/1e3}rows(e){return b`<dl>${e.map(t=>b`<div data-field=${t.key}><dt>${t.label}</dt><dd>${t.value}</dd></div>`)}</dl>`}render(){let e=this.diagnostic;if(!e)return P;let t=new Ws(e.live,e.available,this.now*1e3),s=this.mode==="learning";return b`<details class="explanation"><summary>${s?"Comprendre l\u2019apprentissage":"Pourquoi ce maintien ?"}</summary>
      <smartpi-publication-quality .now=${this.now} .value=${e.live} .date=${e.lastUpdated??""} .available=${e.available}></smartpi-publication-quality>
      <p>${s?"Les compteurs et motifs d\xE9crivent la derni\xE8re situation publi\xE9e. Ils ne pr\xE9disent pas la date de fin de l\u2019apprentissage.":"Le maintien de l\u2019int\xE9grale conserve sa m\xE9moire. Il ne signifie pas \xE0 lui seul un arr\xEAt de la chauffe ; les commandes FF et PI gardent leur r\xF4le."}</p>
      ${this.rows(s?t.learning:t.maintenance)}
      ${s?P:b`<section data-transaction><h4>Dernier transfert FF2 conservé</h4>
        ${t.transaction?b`<p>${t.transaction.date?b`<time datetime=${t.transaction.date}>${new Date(t.transaction.date).toLocaleString("fr-FR")}</time>`:"Horodatage du transfert non v\xE9rifiable"}</p>
          <smartpi-publication-quality source="Transfert SmartPI" .now=${this.now} .value=${t.transaction.rows} .date=${t.transaction.date??""} .available=${e.available}></smartpi-publication-quality>
          ${this.rows(t.transaction.rows)}
          <p>Chaque variation est exprimée en points de commande, sans mesure de puissance thermique. Ce transfert conservé peut être antérieur à la publication actuelle ; un champ absent ne permet pas de conclure à une commande inchangée.</p>`:b`<p>Aucun transfert daté publié. Les champs manquants ne sont pas reconstruits.</p>`}
      </section>`}
    </details>`}};xi.styles=ve`:host{display:block;margin-block:12px;color:var(--primary-text-color)}details{border:1px solid var(--divider-color);border-radius:12px;padding:0 14px}summary{min-height:44px;display:list-item;align-content:center;cursor:pointer;font-weight:600}summary:focus-visible{outline:3px solid var(--primary-color);outline-offset:3px}p{font-size:12px;line-height:1.6;color:var(--secondary-text-color)}dl{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:12px;margin:16px 0}dt{font-size:11px;color:var(--secondary-text-color)}dd{font-size:12px;line-height:1.6;margin:3px 0 0;overflow-wrap:anywhere}section{border-top:1px solid var(--divider-color)}h4{font-size:13px}time{font-variant-numeric:tabular-nums}`,S([U({attribute:!1})],xi.prototype,"diagnostic",2),S([U()],xi.prototype,"mode",2),S([U({type:Number})],xi.prototype,"now",2),xi=S([we("smartpi-explanations")],xi);var Yi=class extends ce{constructor(){super(...arguments);this.rooms=[];this.end=Date.now()/1e3}render(){let e=this.end-3600;return b`<details><summary>Comparer les pièces · dernière heure de session</summary>
   <p>Mêmes axes de temps, d’écart filtré et de commande dans chaque groupe d’unité. Aucune hiérarchie de performance entre pièces.</p>
   ${["\xB0C","\xB0F"].map(t=>{let s=this.rooms.filter(o=>o.unit===t).map(o=>({...o,trace:new Vs(o.samples,t,e,this.end)}));if(!s.length)return"";let r=1;for(let o of s)for(let a of o.trace.segments)for(let c of a)r=Math.max(r,Math.abs(c.error));return b`<h3>${t} · écart ${(-r).toLocaleString("fr-FR")} à ${r.toLocaleString("fr-FR")} · commande 0–100 %</h3>
     <div class="rooms">${s.map(o=>b`<section><h4>${o.name}</h4>
      ${o.trace.valid?b`<svg preserveAspectRatio="none" viewBox="0 0 300 130" role="img" aria-label=${`${o.name} : \xE9cart filtr\xE9 en haut, commande en bas ; ${o.trace.valid} publications`}>
       <path d="M0 35H300 M0 120H300" stroke="var(--divider-color)"/>
       ${o.trace.segments.map(a=>a.filter((c,p)=>p>=a.length-600)).map(a=>Fe`<polyline vector-effect="non-scaling-stroke" points=${a.map(c=>`${300*(c.time-e)/3600},${35-28*c.error/r}`).join(" ")} fill="none" stroke="#3288c5" stroke-width="2"/>
        <polyline vector-effect="non-scaling-stroke" points=${a.map(c=>`${300*(c.time-e)/3600},${120-.45*c.applied}`).join(" ")} fill="none" stroke="#c07339" stroke-width="2"/>
        ${a.length===1?Fe`<circle cx=${300*(a[0].time-e)/3600} cy=${35-28*a[0].error/r} r="2" fill="#3288c5"/><circle cx=${300*(a[0].time-e)/3600} cy=${120-.45*a[0].applied} r="2" fill="#c07339"/>`:""}`)}
      </svg>`:b`<p>En attente de publications datées avec unité enregistrée.</p>`}
      <p>${o.trace.valid} publications couplées · bleu : consigne filtrée − mesure · orange : commande · 600 derniers points maximum par segment.</p>
      <details><summary>Valeurs accessibles</summary><div class="table"><table><thead><tr><th>Date</th><th>Écart ${t}</th><th>Commande %</th></tr></thead><tbody>${o.trace.segments.flat().slice(-60).map(a=>b`<tr><td>${new Date(a.time*1e3).toLocaleTimeString("fr-FR")}</td><td>${a.error.toLocaleString("fr-FR")}</td><td>${a.applied.toLocaleString("fr-FR")}</td></tr>`)}</tbody></table></div><p>60 dernières publications maximum ; tracé de toute l’heure.</p></details>
     </section>`)}</div>`})}
   ${this.rooms.some(t=>!t.unit)?b`<p>Unité non vérifiable : certaines pièces sont exclues de la comparaison.</p>`:""}
   <p>${new Date(e*1e3).toLocaleTimeString("fr-FR")} → ${new Date(this.end*1e3).toLocaleTimeString("fr-FR")} · Session seulement, sans fusion Recorder. Pas de raccord entre données absentes, changement de contexte ou interruption > 10 min. Les segments relient des publications ; ce ne sont pas des mesures intermédiaires.</p>
  </details>`}};Yi.styles=ve`:host{display:block;margin:18px 0;color:var(--primary-text-color)}details{border-top:1px solid var(--divider-color);padding:10px 0}summary{cursor:pointer;min-height:44px;padding:12px 0;font-size:14px;font-weight:600}summary:focus-visible{outline:3px solid var(--primary-color);outline-offset:2px}p{font-size:12px;line-height:1.5;color:var(--secondary-text-color)}h3{font-size:13px}h4{font-size:14px;margin:8px 0}svg{width:100%;height:145px;display:block}.rooms{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px}section{min-width:0;overflow-wrap:anywhere}.table{overflow:auto}table{width:100%;font-size:12px;border-collapse:collapse}td,th{text-align:left;padding:6px;border-bottom:1px solid var(--divider-color)}@media(max-width:500px){.rooms{grid-template-columns:1fr}}`,S([U({attribute:!1})],Yi.prototype,"rooms",2),S([U({type:Number})],Yi.prototype,"end",2),Yi=S([we("smartpi-room-comparison")],Yi);var Ud=new Intl.DateTimeFormat("fr-FR",{dateStyle:"medium",timeStyle:"short"}),Bd=[{title:"R\xE9gulation PI et cha\xEEne U",note:"S\xE9parer commande calcul\xE9e, limitation et commande appliqu\xE9e.",fields:[{label:"Phase",path:"control.phase"},{label:"Mode",path:"control.mode"},{label:"Kp",path:"control.kp",digits:6},{label:"Ki",path:"control.ki",digits:6},{label:"Ti",path:"control.ti_min",unit:" min"},{label:"Part PI",path:"power.pi_percent",unit:" %"},{label:"Part FF",path:"power.ff_percent",unit:" %"},{label:"Commande demand\xE9e",path:"power.command_percent",unit:" %"},{label:"Commande limit\xE9e",path:"power.limited_percent",unit:" %"},{label:"Commande appliqu\xE9e",path:"power.applied_percent",unit:" %"},{label:"Cycle en cours",path:"power.current_cycle_percent",unit:" %"},{label:"Cycle suivant",path:"power.next_cycle_percent",unit:" %"},{label:"\xC9tat saturation",path:"control.saturation_state"},{label:"Int\xE9grale",path:"temperature.integral_error",digits:6},{label:"Gestion int\xE9grale",path:"temperature.integral_mode"},{label:"Anti-windup \u0394u",path:"analysis.control.aw_du",digits:6},{label:"Bande morte",path:"control.in_deadband"},{label:"Proche consigne",path:"control.in_near_band"}]},{title:"Mod\xE8le thermique A / B",note:"Le mod\xE8le 1R1C est appris (A : \xB0C/min \xE0 commande unitaire ; B : min\u207B\xB9) ; sa fiabilit\xE9 est distincte de la valeur affich\xE9e.",fields:[{label:"Gain de chauffe A",path:"model.a",digits:6},{label:"Pertes B",path:"model.b",digits:6},{label:"Confiance A/B",path:"model.confidence"},{label:"Constante \u03C4",path:"model.tau_min",unit:" min",reliable:"model.tau_reliable"},{label:"Fiabilit\xE9 \u03C4",path:"model.tau_reliable"},{label:"Temps mort de chauffe",path:"model.deadtime_heat_s",unit:" s",digits:0,reliable:"model.deadtime_heat_reliable"},{label:"Fiabilit\xE9 chauffe",path:"model.deadtime_heat_reliable"},{label:"Temps mort de refroidissement",path:"model.deadtime_cool_s",unit:" s",digits:0,reliable:"model.deadtime_cool_reliable"},{label:"Fiabilit\xE9 refroidissement",path:"model.deadtime_cool_reliable"},{label:"Stabilit\xE9 A",path:"model.a_stability_ratio",digits:3},{label:"Stabilit\xE9 B",path:"model.b_stability_ratio",digits:3},{label:"D\xE9tection du temps mort",path:"analysis.deadtime.state"},{label:"Derni\xE8re issue chauffe",path:"analysis.deadtime.heat_last_outcome"},{label:"Derni\xE8re issue refroidissement",path:"analysis.deadtime.cool_last_outcome"}]},{title:"Apprentissage et gouvernance",note:"Voir les fen\xEAtres, le bootstrap, les rejets et les d\xE9cisions de gouvernance.",fields:[{label:"Apprentissage autoris\xE9",path:"learning.enabled"},{label:"\xC9tape",path:"learning.stage"},{label:"\xC9tat du bootstrap",path:"learning.bootstrap_status"},{label:"Mesures A",path:"learning.emea_samples_a",digits:0},{label:"Mesures B",path:"learning.emea_samples_b",digits:0},{label:"Mises \xE0 jour A accept\xE9es",path:"learning.accepted_updates_a",digits:0},{label:"Mises \xE0 jour B accept\xE9es",path:"learning.accepted_updates_b",digits:0},{label:"Dernier motif",path:"learning.last_reason"},{label:"D\xE9rive A",path:"learning.a_drift_state"},{label:"D\xE9rive B",path:"learning.b_drift_state"},{label:"R\xE9gime thermique",path:"governance.regime"},{label:"D\xE9cision thermique",path:"governance.thermal_update_decision"},{label:"Raison d\xE9cision",path:"governance.thermal_update_reason"},{label:"D\xE9cision gains",path:"analysis.governance.last_decision_gains"},{label:"Source Kp",path:"analysis.governance.kp_source"},{label:"D\xE9lai de r\xE9ponse",path:"analysis.learning.response_lag.lag_s",unit:" s",digits:0},{label:"Motif d\xE9lai",path:"analysis.learning.response_lag.last_reason"}]},{title:"Feedforward FF1 / FF2 / FF3",note:"Les contributions u_ff sont des ratios (1 = 100 % de commande), pas des watts. Comprendre le refus \xE9ventuel d\u2019une correction.",fields:[{label:"\xC9tat FF3",path:"feedforward.ff3_status"},{label:"Raison FF",path:"analysis.feedforward.reason"},{label:"FF1",path:"analysis.feedforward.u_ff1",digits:6},{label:"FF2",path:"analysis.feedforward.u_ff2",digits:6},{label:"FF3",path:"analysis.feedforward.u_ff3",digits:6},{label:"FF effectif",path:"analysis.feedforward.u_ff_effective",digits:6},{label:"FF2 gel\xE9",path:"analysis.feedforward.ff2_frozen"},{label:"Raison gel FF2",path:"analysis.feedforward.ff2_freeze_reason"},{label:"Observateur stationnaire",path:"feedforward.fftrim.stationary.state"},{label:"Rejet stationnaire",path:"feedforward.fftrim.stationary.last_reject_reason"},{label:"Observateur p\xE9riodique",path:"feedforward.fftrim.periodic.state"},{label:"Rejet p\xE9riodique",path:"feedforward.fftrim.periodic.last_reject_reason"},{label:"Transfert FFTrim",path:"feedforward.fftrim.transfer.state"},{label:"Motif transfert",path:"feedforward.fftrim.transfer.reason"}]},{title:"Thermal Twin",note:"Une pr\xE9diction doit avoir son propre drapeau de fiabilit\xE9.",fields:[{label:"\xC9tat Twin",path:"feedforward.twin_status"},{label:"Mod\xE8le Twin fiable",path:"analysis.twin.twin_model_reliable"},{label:"Temp\xE9rature estim\xE9e",path:"analysis.twin.twin_T_hat",unit:" \xB0C"},{label:"Temp\xE9rature pr\xE9dite",path:"analysis.twin.twin_T_pred",unit:" \xB0C"},{label:"Innovation",path:"analysis.twin.twin_innovation",unit:" \xB0C",digits:4},{label:"RMSE de l\u2019innovation \xB7 EMA",path:"analysis.twin.twin_rmse_30",unit:" \xB0C",digits:4},{label:"\xC9quilibre estim\xE9",path:"analysis.twin.twin_T_steady",unit:" \xB0C",reliable:"analysis.twin.twin_T_steady_reliable"},{label:"Fiabilit\xE9 \xE9quilibre",path:"analysis.twin.twin_T_steady_reliable"},{label:"Consigne atteignable (pr\xE9diction)",path:"analysis.twin.twin_setpoint_reachable",reliable:"analysis.twin.twin_T_steady_reliable"},{label:"ETA",path:"analysis.twin.eta_s",unit:" s",digits:0},{label:"Motif ETA",path:"analysis.twin.eta_reason"}]},{title:"Consigne, trajectoire, calibration",note:"Les \xE9tats internes restent affich\xE9s sans action de pilotage.",fields:[{label:"Consigne filtr\xE9e",path:"setpoint.filtered_setpoint",unit:" \xB0C"},{label:"Trajectoire active",path:"setpoint.trajectory_active"},{label:"Source de trajectoire",path:"setpoint.trajectory_source"},{label:"Boost",path:"setpoint.boost_active"},{label:"Phase trajectoire",path:"analysis.trajectory.phase"},{label:"Freinage n\xE9cessaire",path:"analysis.trajectory.braking_needed"},{label:"Autocalibration",path:"autocalib.state"},{label:"Mod\xE8le d\xE9grad\xE9",path:"autocalib.model_degraded"},{label:"\xC9tat de calibration",path:"calibration.state"},{label:"Tentatives",path:"calibration.retry_count",digits:0}]}],Xt=class extends ce{constructor(){super(...arguments);this.narrow=!1;this.selectedId="";this.sessionHistory=new _s}connectedCallback(){super.connectedCallback(),this.freshnessTimer=setInterval(()=>this.requestUpdate(),3e4)}willUpdate(e){e.has("hass")&&this.hass&&this.sessionHistory.collect(bn(this.hass),this.hass.states,Date.now()/1e3,this.hass.config?.unit_system?.temperature)}disconnectedCallback(){clearInterval(this.freshnessTimer),this.freshnessTimer=void 0,this.sessionHistory.clear(),super.disconnectedCallback()}metric(e,t,s="",r=2,o=""){return b`<div class="metric"><span>${e}</span><strong>${T(t,s,r)}</strong><smartpi-publication-quality .now=${Date.now()/1e3} .value=${t} .date=${o}></smartpi-publication-quality></div>`}power(e,t,s){let r=K(t),o=r===null?0:Math.min(100,Math.max(0,r));return b`<div class="power"><div class="power-label"><span>${e}</span><strong>${T(t," %",1)}</strong></div>
      <div class="track" aria-label=${e+" "+T(t," %",1)}>
        <div class=${"fill "+s} style=${"width:"+o+"%"}></div>
      </div></div>`}field(e,t,s){let r=T(ot(t,e.path,e.reliable),(e.unit??"").replace("\xB0C",s),e.digits??2);return b`<div class="detail" title=${e.path}><span>${e.label}</span><strong>${r}</strong></div>`}showDiagnostic(e){let t=e.live,s=io(e),r=Bn(e),o=!r&&_(t,"learning.stage")==="monitoring",a=b`
          <smartpi-explanations mode="learning" .diagnostic=${e} .now=${Date.now()/1e3}></smartpi-explanations>
          <div class="columns">
            ${["a","b"].map(p=>{let h=K(_(t,`learning.emea_samples_${p}`)),f=K(_(t,`learning.bootstrap_target_${p}`)),u=K(_(t,"learning.history_target")),y=h!==null&&h>=0&&u!==null&&u>0,$=y?Math.min(100,100*h/u):null;return b`<div>
                <div class="flex spread"><strong>${p.toUpperCase()} · ${p==="a"?"chauffe":"pertes thermiques"}</strong>
                  <span>${T($," %",0)}</span></div>
                ${o?P:b`<progress aria-label=${`Historique de ${p.toUpperCase()}`}
                  max=${u??1} value=${y?Math.min(h,u):P}></progress>`}
                <p class="muted small">${T(h,"",0)} / ${T(u,"",0)} mesures conservées
                  · premier palier ${T(f,"",0)}
                  ${h!==null&&f!==null?h>=f?"atteint":"en cours":""}</p>
                <p class="muted small">Mises à jour acceptées · ${T(_(t,`learning.accepted_updates_${p}`),"",0)}</p>
              </div>`})}
          </div>
          <p class="muted small">Les pourcentages décrivent le remplissage de l’historique.
            Confiance publiée · ${T(_(t,"model.confidence"))}
            · τ fiable · ${T(_(t,"model.tau_reliable"))}</p>
          <div class="columns">
            ${["heat","cool"].map(p=>{let h=_(t,`model.deadtime_${p}_reliable`);return b`<div><strong>Temps mort · ${p==="heat"?"chauffe":"refroidissement"}</strong>
                <p>${h===!0?T(_(t,`model.deadtime_${p}_s`)," s",0):h===!1?"En attente d\u2019une mesure fiable":"Indisponible"}</p>
                <p class="muted small">Dernière issue · ${T(_(t,`analysis.deadtime.${p}_last_outcome`))}</p></div>`})}
          </div>
          ${r?b`<p><strong>Prochaine étape</strong> ·
            ${String(_(t,"learning.bootstrap_status")).includes("waiting response lag")?"Les premi\xE8res mesures sont collect\xE9es. SmartPI attend de r\xE9soudre le d\xE9lai de r\xE9ponse.":_(t,"model.deadtime_heat_reliable")===!1||_(t,"model.deadtime_cool_reliable")===!1?"Acqu\xE9rir les temps morts encore en attente pour d\xE9bloquer les observations correspondantes.":"Collecter les premi\xE8res mesures A et B acceptables par SmartPI."}</p>`:P}
          ${r?b`<p><strong>Étape initiale</strong> · ${T(_(t,"learning.bootstrap_status"))}</p>`:P}
          ${_(t,"learning.enabled")===!1?b`<p>Apprentissage désactivé selon SmartPI.</p>`:P}
          <p>Détection en cours · ${T(_(t,"analysis.deadtime.state"))}
            · attente écoulée ${T(_(t,"analysis.deadtime.waiting_elapsed_s")," s",0)}</p>
          <p>Délai de réponse · ${T(_(t,"analysis.learning.response_lag.lag_s")," s",0)}
            · épisodes ${T(_(t,"analysis.learning.response_lag.episodes"),"",0)}</p>
          <p class="muted small">Motif d’apprentissage · ${T(_(t,"learning.last_reason"))}
            · motif du délai · ${T(_(t,"analysis.learning.response_lag.last_reason"))}</p>
          <p class="muted small">Si les compteurs restent à zéro, les états et motifs ci-dessus
            décrivent la dernière situation publiée. Une nouvelle mesure dépend d’une
            observation exploitable acceptée par SmartPI.</p>
`,c=Ht(e.lastUpdated);return b`
      <section class="hero">
        <div class="flex spread">
          <div><div class="eyebrow">THERMOSTAT SÉLECTIONNÉ</div><h2>${e.name}</h2>
            <div class="muted small">${e.climateId??e.entityId}</div></div>
          <span class="tag">${r?"Apprentissage / hyst\xE9r\xE9sis":T(_(t,"control.phase"))}</span>
        </div>
        <p class="muted small">Dernière publication ${c===null?"indisponible":b`<time datetime=${e.lastUpdated??""}>${Ud.format(c*1e3)}</time>`}</p>
        <smartpi-thermal-journey .hass=${this.hass} .diagnostic=${e}
          @observatory-refresh=${p=>{p.detail.entityId===e.entityId&&this.renderRoot.querySelector("smartpi-observatory")?.refresh()}}></smartpi-thermal-journey>
        <smartpi-explanations mode="maintenance" .diagnostic=${e} .now=${Date.now()/1e3}></smartpi-explanations>
        <div class="metrics">
          ${this.metric("Commande appliqu\xE9e",_(t,"power.applied_percent")," %",1,e.lastUpdated??"")}
          ${this.metric("Temp\xE9rature ext\xE9rieure",_(t,"temperature.outdoor"),new tt(this.hass,e).unit??"",2,e.lastUpdated??"")}
        </div>
        <section class="learn" aria-label="Avancement de l’apprentissage">
          <div class="flex spread"><h3>${o?"Surveillance du mod\xE8le":"Apprentissage du mod\xE8le"}</h3>
            <strong>${T({bootstrap:"Initialisation",learning:"Collecte du mod\xE8le",monitoring:"Surveillance",degraded:"Mod\xE8le \xE0 consolider"}[String(_(t,"learning.stage"))]??_(t,"learning.stage"))}</strong></div>
          ${o?b`<p class="muted small">Collecte initiale achevée · le modèle reste sous surveillance.</p>
            <details class="learning-details"><summary>Mesures, fiabilité et motifs <span class="chevron" aria-hidden="true">⌄</span></summary>${a}</details>`:a}
        </section>
      </section>
      <smartpi-observatory .hass=${this.hass} .diagnostic=${e}
        @observatory-points=${p=>{p.detail.entityId===e.entityId&&(this.observationData=p.detail)}}
        @prepare-temperature=${p=>{if(p.detail.entityId!==e.entityId)return;let h=this.renderRoot.querySelector("smartpi-thermal-journey");h&&h.previewTemperature(p.detail.value).then(f=>{f&&h.scrollIntoView({block:"center"})})}}></smartpi-observatory>
      <smartpi-visual-diagnostics .hass=${this.hass} .diagnostic=${e} .session=${this.sessionHistory.get(e.entityId)} .observations=${this.observationData?.entityId===e.entityId?this.observationData.points:[]} .observationError=${this.observationData?.entityId===e.entityId?this.observationData.error:""}></smartpi-visual-diagnostics>
      <details class="surface technical"><summary>Diagnostics techniques complets</summary>
      <section><h3>Comprendre la situation</h3><ul>${s.map(p=>b`<li>${p}</li>`)}</ul></section>
      <div class="subhead"><h2>Diagnostics techniques</h2><span class="muted small">Déplier pour comprendre les détails</span></div>
      <div class="details-list">
        ${Bd.map(p=>b`<details class="surface">
          <summary>${p.title}<span class="chevron">⌄</span></summary>
          <p class="muted small">${p.note}</p>
          <div class="detail-grid">${p.fields.map(h=>this.field(h,t,e.temperatureUnit??"unit\xE9 source"))}</div>
        </details>`)}
      </div>
      <details class="surface raw"><summary>Diagnostic brut JSON <span class="chevron">⌄</span></summary>
        <pre>${JSON.stringify({schema_version:2,state:e.state,live:e.live,history:e.history},null,2)}</pre>
      </details>
      </details>
    `}thermostatTile(e,t){let s=new tt(this.hass,e),r=s.available?s.climate.state==="off"?"off":s.attributes.preset_mode:void 0,o={frost:"Hors gel",eco:"\xC9co",comfort:"Confort",boost:"Boost",off:"Arr\xEAt",none:"Manuel",activity:"Activit\xE9"},a=typeof r=="string"&&Object.hasOwn(o,r),c=a?r:"unknown",p=a?o[r]:typeof r=="string"&&r.trim()?r:"Mode indisponible",h=s.appliedEffort(),f=Ht(e.lastUpdated),u=f!==null&&Date.now()/1e3-f>600;return b`<button type="button" class=${"tile mode-"+c+(t?" selected":"")}
      @click=${()=>{this.selectedId=e.entityId}} aria-pressed=${t}>
      <span class="tile-level" style=${"height:"+(h?.percent??0)+"%"} aria-hidden="true"></span>
      <strong class="tile-name">${e.name}</strong>
      <span class="tile-mode">${p}<span class="tile-check" aria-hidden="true">${t?"\u2713":""}</span></span>
      <span class="big">${T(s.measured,s.unit?" "+s.unit:"")}</span>
      <span class="tile-target" title=${"Thermostat \xB7 "+(s.climate?.last_updated??"Date absente")}>Consigne <b>${T(s.target,s.unit?" "+s.unit:"")}</b></span>
      <span class="tile-bottom" title=${"SmartPI \xB7 "+(e.lastUpdated??"Date absente")}>Filtrée ${T(s.filtered,s.unit?" "+s.unit:"")}</span>
      <span class="tile-command">Commande <b>${h?T(h.percent," %",1):"\u2014"}</b></span>
      <smartpi-publication-quality .now=${Date.now()/1e3} .value=${s.measured} .date=${e.lastUpdated??""} .available=${e.available}></smartpi-publication-quality>
      ${h?P:b`<span class="tile-status">${e.available?u?"Publication ancienne":"Commande indisponible":"Diagnostic indisponible"}</span>`}
    </button>`}render(){let e=bn(this.hass),t=e.find(s=>s.entityId===this.selectedId)??e[0];return b`<div class="header"><ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
       <div class="head-text"><h1>SmartPI Dashboard</h1><span>Comprendre la régulation thermique</span></div>
       <span class="tag readonly">Température & supervision</span></div>
      <main>
        <div class="flex spread intro"><h2>Mes thermostats</h2>
          <span class="muted small">${e.length} diagnostic${e.length>1?"s":""} SmartPI v2</span></div>
        ${e.length===0?b`<section class="surface empty"><h3>Aucun diagnostic SmartPI v2 détecté</h3>
          <p>Rechercher les capteurs sensor.* dotés de schema_version=2 et des objets live/history dans les outils de développement de Home Assistant.</p></section>`:b`<div class="tiles">${e.map(s=>this.thermostatTile(s,t?.entityId===s.entityId))}</div>
          <smartpi-room-comparison .rooms=${e.map(s=>({id:s.entityId,name:s.name,unit:new tt(this.hass,s).unit,samples:this.sessionHistory.get(s.entityId)}))} .end=${Date.now()/1e3}></smartpi-room-comparison>
          ${t?this.showDiagnostic(t):P}`}
        <smartpi-orphan-notebooks .hass=${this.hass} @observatory-recovery=${()=>void this.renderRoot.querySelector("smartpi-observatory")?.refresh()}></smartpi-orphan-notebooks>
        <footer>Source : capteurs SmartPI Diagnostics v2 · Réglage de température et de preset sur sélection explicite</footer>
      </main>`}};Xt.styles=ve`
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
  `,S([U({attribute:!1})],Xt.prototype,"hass",2),S([U({attribute:!1})],Xt.prototype,"panel",2),S([U({type:Boolean})],Xt.prototype,"narrow",2),S([Z()],Xt.prototype,"selectedId",2),S([Z()],Xt.prototype,"observationData",2),Xt=S([we("smartpi-dashboard-panel")],Xt);export{Xt as SmartPIDashboardPanel};
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
