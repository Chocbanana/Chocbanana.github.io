(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[1967],{8828:function(e){"use strict";e.exports=Object.assign},5123:function(e,t,r){"use strict";r.d(t,{L:function(){return Le}});var n=r(6540),o=r(6942),i=r.n(o),a=r(9612),s=r(1942),c=r(6519),u=r(4373),l=r(4848);const f=(0,u.A)("h4");f.displayName="DivStyledAsH4";const d=n.forwardRef((({className:e,bsPrefix:t,as:r=f,...n},o)=>(t=(0,c.oU)(t,"alert-heading"),(0,l.jsx)(r,{ref:o,className:i()(e,t),...n}))));d.displayName="AlertHeading";var p=d,m=r(4727);const y=n.forwardRef((({className:e,bsPrefix:t,as:r=m.A,...n},o)=>(t=(0,c.oU)(t,"alert-link"),(0,l.jsx)(r,{ref:o,className:i()(e,t),...n}))));y.displayName="AlertLink";var h=y,b=r(7285),v=r(8515);const g=n.forwardRef(((e,t)=>{const{bsPrefix:r,show:n=!0,closeLabel:o="Close alert",closeVariant:u,className:f,children:d,variant:p="primary",onClose:m,dismissible:y,transition:h=b.A,...g}=(0,a.Zw)(e,{show:"onClose"}),T=(0,c.oU)(r,"alert"),w=(0,s.A)((e=>{m&&m(!1,e)})),A=!0===h?b.A:h,C=(0,l.jsxs)("div",{role:"alert",...A?void 0:g,ref:t,className:i()(f,T,p&&`${T}-${p}`,y&&`${T}-dismissible`),children:[y&&(0,l.jsx)(v.A,{onClick:w,"aria-label":o,variant:u}),d]});return A?(0,l.jsx)(A,{unmountOnExit:!0,...g,ref:void 0,in:n,children:C}):n?C:null}));g.displayName="Alert";var T,w,A,C,O=Object.assign(g,{Link:h,Heading:p}),x=r(5227),S=r(5556),E=r.n(S),j=r(2098),N=r.n(j),P=r(115),k=r.n(P),L=r(8828),I=r.n(L),R="bodyAttributes",M="htmlAttributes",U="titleAttributes",H={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},_=(Object.keys(H).map((function(e){return H[e]})),"charset"),B="cssText",D="href",q="http-equiv",F="innerHTML",$="itemprop",Y="name",z="property",K="rel",V="src",W="target",Z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},G="defaultTitle",J="defer",Q="encodeSpecialCharacters",X="onChangeClientState",ee="titleTemplate",te=Object.keys(Z).reduce((function(e,t){return e[Z[t]]=t,e}),{}),re=[H.NOSCRIPT,H.SCRIPT,H.STYLE],ne="data-react-helmet",oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},se=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},ce=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ue=function(e){var t=me(e,H.TITLE),r=me(e,ee);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=me(e,G);return t||n||void 0},le=function(e){return me(e,X)||function(){}},fe=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ae({},e,t)}),{})},de=function(e,t){return t.filter((function(e){return void 0!==e[H.BASE]})).map((function(e){return e[H.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},pe=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ge("Helmet: "+e+' should be of type "Array". Instead found type "'+oe(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],c=s.toLowerCase();-1===t.indexOf(c)||r===K&&"canonical"===e[r].toLowerCase()||c===K&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==F&&s!==B&&s!==$||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],c=I()({},n[s],o[s]);n[s]=c}return e}),[]).reverse()},me=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ye=(T=Date.now(),function(e){var t=Date.now();t-T>16?(T=t,e(t)):setTimeout((function(){ye(e)}),0)}),he=function(e){return clearTimeout(e)},be="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ye:r.g.requestAnimationFrame||ye,ve="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||he:r.g.cancelAnimationFrame||he,ge=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Te=null,we=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;Oe(H.BODY,n),Oe(H.HTML,o),Ce(f,d);var p={baseTag:xe(H.BASE,r),linkTags:xe(H.LINK,i),metaTags:xe(H.META,a),noscriptTags:xe(H.NOSCRIPT,s),scriptTags:xe(H.SCRIPT,u),styleTags:xe(H.STYLE,l)},m={},y={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=p[e].oldTags)})),t&&t(),c(e,m,y)},Ae=function(e){return Array.isArray(e)?e.join(""):e},Ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=Ae(e)),Oe(H.TITLE,t)},Oe=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(ne),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var c=a[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(ne):r.getAttribute(ne)!==a.join(",")&&r.setAttribute(ne,a.join(","))}},xe=function(e,t){var r=document.head||document.querySelector(H.HEAD),n=r.querySelectorAll(e+"["+ne+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===F)r.innerHTML=t.innerHTML;else if(n===B)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(ne,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},Se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Z[r]||r]=e[r],t}),t)},je=function(e,t,r){switch(e){case H.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(o={key:e})[ne]=!0,i=Ee(r,o),[n.createElement(H.TITLE,i,e)];var e,r,o,i},toString:function(){return function(e,t,r,n){var o=Se(r),i=Ae(t);return o?"<"+e+" "+ne+'="true" '+o+">"+ce(i,n)+"</"+e+">":"<"+e+" "+ne+'="true">'+ce(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case R:case M:return{toComponent:function(){return Ee(t)},toString:function(){return Se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var o,i=((o={key:r})[ne]=!0,o);return Object.keys(t).forEach((function(e){var r=Z[e]||e;if(r===F||r===B){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),n.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===F||e===B)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+ce(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===re.indexOf(e);return t+"<"+e+" "+ne+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},Ne=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:je(H.BASE,t,n),bodyAttributes:je(R,r,n),htmlAttributes:je(M,o,n),link:je(H.LINK,i,n),meta:je(H.META,a,n),noscript:je(H.NOSCRIPT,s,n),script:je(H.SCRIPT,c,n),style:je(H.STYLE,u,n),title:je(H.TITLE,{title:f,titleAttributes:d},n)}},Pe=N()((function(e){return{baseTag:de([D,W],e),bodyAttributes:fe(R,e),defer:me(e,J),encode:me(e,Q),htmlAttributes:fe(M,e),linkTags:pe(H.LINK,[K,D],e),metaTags:pe(H.META,[Y,_,q,z,$],e),noscriptTags:pe(H.NOSCRIPT,[F],e),onChangeClientState:le(e),scriptTags:pe(H.SCRIPT,[V,F],e),styleTags:pe(H.STYLE,[B],e),title:ue(e),titleAttributes:fe(U,e)}}),(function(e){Te&&ve(Te),e.defer?Te=be((function(){we(e,(function(){Te=null}))})):(we(e),Te=null)}),Ne)((function(){return null})),ke=(w=Pe,C=A=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!k()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case H.SCRIPT:case H.NOSCRIPT:return{innerHTML:t};case H.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return ae({},n,((t={})[r.type]=[].concat(n[r.type]||[],[ae({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case H.TITLE:return ae({},o,((t={})[n.type]=a,t.titleAttributes=ae({},i),t));case H.BODY:return ae({},o,{bodyAttributes:ae({},i)});case H.HTML:return ae({},o,{htmlAttributes:ae({},i)})}return ae({},o,((r={})[n.type]=ae({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=ae({},t);return Object.keys(e).forEach((function(t){var n;r=ae({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,o={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[te[r]||r]=e[r],t}),t)}(se(n,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case H.LINK:case H.META:case H.NOSCRIPT:case H.SCRIPT:case H.STYLE:o=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=se(e,["children"]),o=ae({},r);return t&&(o=this.mapChildrenToProps(t,o)),n.createElement(w,o)},ie(t,null,[{key:"canUseDOM",set:function(e){w.canUseDOM=e}}]),t}(n.Component),A.propTypes={base:E().object,bodyAttributes:E().object,children:E().oneOfType([E().arrayOf(E().node),E().node]),defaultTitle:E().string,defer:E().bool,encodeSpecialCharacters:E().bool,htmlAttributes:E().object,link:E().arrayOf(E().object),meta:E().arrayOf(E().object),noscript:E().arrayOf(E().object),onChangeClientState:E().func,script:E().arrayOf(E().object),style:E().arrayOf(E().object),title:E().string,titleAttributes:E().object,titleTemplate:E().string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=w.peek,A.rewind=function(){var e=w.rewind();return e||(e=Ne({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},C);ke.renderStatic=ke.rewind;const Le=e=>{let{href:t,imgSrc:r,title:o,width:i,height:a}=e;return n.createElement("div",null,n.createElement(O,{className:"my-3 text-center"},n.createElement("b",null,"Tap on edge of picture to scroll through album pics")),n.createElement(x.r,{"data-flickr-embed":"true","data-header":"true","data-footer":"true",href:t,title:o},n.createElement("img",{src:r,width:i,height:a,alt:o,style:{minWidth:"200px"}})),n.createElement(ke,null,n.createElement("script",{async:!0,src:"//embedr.flickr.com/assets/client-code.js",charset:"utf-8"})))};Le.defaultProps={width:"100%",height:"100%",title:""}},763:function(e,t,r){"use strict";r.d(t,{A:function(){return k}});var n=r(6942),o=r.n(n),i=r(6540),a=r(6519),s=r(4848);const c=i.forwardRef((({className:e,bsPrefix:t,as:r="div",...n},i)=>(t=(0,a.oU)(t,"card-body"),(0,s.jsx)(r,{ref:i,className:o()(e,t),...n}))));c.displayName="CardBody";var u=c;const l=i.forwardRef((({className:e,bsPrefix:t,as:r="div",...n},i)=>(t=(0,a.oU)(t,"card-footer"),(0,s.jsx)(r,{ref:i,className:o()(e,t),...n}))));l.displayName="CardFooter";var f=l,d=r(581);const p=i.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},c)=>{const u=(0,a.oU)(e,"card-header"),l=(0,i.useMemo)((()=>({cardHeaderBsPrefix:u})),[u]);return(0,s.jsx)(d.A.Provider,{value:l,children:(0,s.jsx)(r,{ref:c,...n,className:o()(t,u)})})}));p.displayName="CardHeader";var m=p;const y=i.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...i},c)=>{const u=(0,a.oU)(e,"card-img");return(0,s.jsx)(n,{ref:c,className:o()(r?`${u}-${r}`:u,t),...i})}));y.displayName="CardImg";var h=y;const b=i.forwardRef((({className:e,bsPrefix:t,as:r="div",...n},i)=>(t=(0,a.oU)(t,"card-img-overlay"),(0,s.jsx)(r,{ref:i,className:o()(e,t),...n}))));b.displayName="CardImgOverlay";var v=b;const g=i.forwardRef((({className:e,bsPrefix:t,as:r="a",...n},i)=>(t=(0,a.oU)(t,"card-link"),(0,s.jsx)(r,{ref:i,className:o()(e,t),...n}))));g.displayName="CardLink";var T=g,w=r(4373);const A=(0,w.A)("h6"),C=i.forwardRef((({className:e,bsPrefix:t,as:r=A,...n},i)=>(t=(0,a.oU)(t,"card-subtitle"),(0,s.jsx)(r,{ref:i,className:o()(e,t),...n}))));C.displayName="CardSubtitle";var O=C;const x=i.forwardRef((({className:e,bsPrefix:t,as:r="p",...n},i)=>(t=(0,a.oU)(t,"card-text"),(0,s.jsx)(r,{ref:i,className:o()(e,t),...n}))));x.displayName="CardText";var S=x;const E=(0,w.A)("h5"),j=i.forwardRef((({className:e,bsPrefix:t,as:r=E,...n},i)=>(t=(0,a.oU)(t,"card-title"),(0,s.jsx)(r,{ref:i,className:o()(e,t),...n}))));j.displayName="CardTitle";var N=j;const P=i.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:i,body:c=!1,children:l,as:f="div",...d},p)=>{const m=(0,a.oU)(e,"card");return(0,s.jsx)(f,{ref:p,...d,className:o()(t,m,r&&`bg-${r}`,n&&`text-${n}`,i&&`border-${i}`),children:c?(0,s.jsx)(u,{children:l}):l})}));P.displayName="Card";var k=Object.assign(P,{Img:h,Title:N,Subtitle:O,Body:u,Link:T,Text:S,Header:m,Footer:f,ImgOverlay:v})},4354:function(e,t,r){"use strict";r.d(t,{t:function(){return l}});var n=r(6942),o=r.n(n),i=r(6540),a=r(5556),s=r.n(a),c=r(6519),u=r(4848);const l={bsPrefix:s().string,fluid:s().bool,rounded:s().bool,roundedCircle:s().bool,thumbnail:s().bool},f=i.forwardRef((({bsPrefix:e,className:t,fluid:r=!1,rounded:n=!1,roundedCircle:i=!1,thumbnail:a=!1,...s},l)=>(e=(0,c.oU)(e,"img"),(0,u.jsx)("img",{ref:l,...s,className:o()(t,r&&`${e}-fluid`,n&&"rounded",i&&"rounded-circle",a&&`${e}-thumbnail`)}))));f.displayName="Image",t.A=f},115:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,u,l;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!i(e[u[c]],a[u[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},2098:function(e,t,r){"use strict";var n,o=r(6540),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=e(u.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",s),f}}}}]);
//# sourceMappingURL=784ef4457ac9bc88c4a3f0f20253a599edc05ef9-ce4143decd0a2c9ece79.js.map