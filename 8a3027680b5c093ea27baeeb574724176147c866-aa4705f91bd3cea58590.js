(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[26],{8828:function(e){"use strict";e.exports=Object.assign},2158:function(e,t,r){"use strict";r.d(t,{L:function(){return Re},j:function(){return Pe}});var n=r(6540),o=r(6942),a=r.n(o),i=r(9612),s=r(1942),l=r(6519),c=r(4373),u=r(4848);const f=(0,c.A)("h4");f.displayName="DivStyledAsH4";const d=n.forwardRef((({className:e,bsPrefix:t,as:r=f,...n},o)=>(t=(0,l.oU)(t,"alert-heading"),(0,u.jsx)(r,{ref:o,className:a()(e,t),...n}))));d.displayName="AlertHeading";var p=d,m=r(4727);const h=n.forwardRef((({className:e,bsPrefix:t,as:r=m.A,...n},o)=>(t=(0,l.oU)(t,"alert-link"),(0,u.jsx)(r,{ref:o,className:a()(e,t),...n}))));h.displayName="AlertLink";var y=h,b=r(7285),g=r(8515);const v=n.forwardRef(((e,t)=>{const{bsPrefix:r,show:n=!0,closeLabel:o="Close alert",closeVariant:c,className:f,children:d,variant:p="primary",onClose:m,dismissible:h,transition:y=b.A,...v}=(0,i.Zw)(e,{show:"onClose"}),w=(0,l.oU)(r,"alert"),C=(0,s.A)((e=>{m&&m(!1,e)})),x=!0===y?b.A:y,T=(0,u.jsxs)("div",{role:"alert",...x?void 0:v,ref:t,className:a()(f,w,p&&`${w}-${p}`,h&&`${w}-dismissible`),children:[h&&(0,u.jsx)(g.A,{onClick:C,"aria-label":o,variant:c}),d]});return x?(0,u.jsx)(x,{unmountOnExit:!0,...v,ref:void 0,in:n,children:T}):n?T:null}));v.displayName="Alert";var w,C,x,T,E=Object.assign(v,{Link:y,Heading:p}),A=r(5227),O=r(5556),S=r.n(O),k=r(2098),j=r.n(k),N=r(115),F=r.n(N),P=r(8828),R=r.n(P),L="bodyAttributes",I="htmlAttributes",M="titleAttributes",_={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},B=(Object.keys(_).map((function(e){return _[e]})),"charset"),D="cssText",H="href",U="http-equiv",Y="innerHTML",q="itemprop",$="name",G="property",z="rel",W="src",J="target",K={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},X="defaultTitle",V="defer",Z="encodeSpecialCharacters",Q="onChangeClientState",ee="titleTemplate",te=Object.keys(K).reduce((function(e,t){return e[K[t]]=t,e}),{}),re=[_.NOSCRIPT,_.SCRIPT,_.STYLE],ne="data-react-helmet",oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},se=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},le=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ce=function(e){var t=me(e,_.TITLE),r=me(e,ee);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=me(e,X);return t||n||void 0},ue=function(e){return me(e,Q)||function(){}},fe=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ie({},e,t)}),{})},de=function(e,t){return t.filter((function(e){return void 0!==e[_.BASE]})).map((function(e){return e[_.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},pe=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ve("Helmet: "+e+' should be of type "Array". Instead found type "'+oe(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var s=a[i],l=s.toLowerCase();-1===t.indexOf(l)||r===z&&"canonical"===e[r].toLowerCase()||l===z&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(s)||s!==Y&&s!==D&&s!==q||(r=s)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][c]&&(o[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var s=a[i],l=R()({},n[s],o[s]);n[s]=l}return e}),[]).reverse()},me=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},he=(w=Date.now(),function(e){var t=Date.now();t-w>16?(w=t,e(t)):setTimeout((function(){he(e)}),0)}),ye=function(e){return clearTimeout(e)},be="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||he:r.g.requestAnimationFrame||he,ge="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ye:r.g.cancelAnimationFrame||ye,ve=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},we=null,Ce=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;Ee(_.BODY,n),Ee(_.HTML,o),Te(f,d);var p={baseTag:Ae(_.BASE,r),linkTags:Ae(_.LINK,a),metaTags:Ae(_.META,i),noscriptTags:Ae(_.NOSCRIPT,s),scriptTags:Ae(_.SCRIPT,c),styleTags:Ae(_.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},xe=function(e){return Array.isArray(e)?e.join(""):e},Te=function(e,t){void 0!==e&&document.title!==e&&(document.title=xe(e)),Ee(_.TITLE,t)},Ee=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(ne),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),s=0;s<i.length;s++){var l=i[s],c=t[l]||"";r.getAttribute(l)!==c&&r.setAttribute(l,c),-1===o.indexOf(l)&&o.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(ne):r.getAttribute(ne)!==i.join(",")&&r.setAttribute(ne,i.join(","))}},Ae=function(e,t){var r=document.head||document.querySelector(_.HEAD),n=r.querySelectorAll(e+"["+ne+"]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===Y)r.innerHTML=t.innerHTML;else if(n===D)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(ne,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},Oe=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[K[r]||r]=e[r],t}),t)},ke=function(e,t,r){switch(e){case _.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(o={key:e})[ne]=!0,a=Se(r,o),[n.createElement(_.TITLE,a,e)];var e,r,o,a},toString:function(){return function(e,t,r,n){var o=Oe(r),a=xe(t);return o?"<"+e+" "+ne+'="true" '+o+">"+le(a,n)+"</"+e+">":"<"+e+" "+ne+'="true">'+le(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case L:case I:return{toComponent:function(){return Se(t)},toString:function(){return Oe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var o,a=((o={key:r})[ne]=!0,o);return Object.keys(t).forEach((function(e){var r=K[e]||e;if(r===Y||r===D){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),n.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===Y||e===D)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+le(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===re.indexOf(e);return t+"<"+e+" "+ne+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},je=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:ke(_.BASE,t,n),bodyAttributes:ke(L,r,n),htmlAttributes:ke(I,o,n),link:ke(_.LINK,a,n),meta:ke(_.META,i,n),noscript:ke(_.NOSCRIPT,s,n),script:ke(_.SCRIPT,l,n),style:ke(_.STYLE,c,n),title:ke(_.TITLE,{title:f,titleAttributes:d},n)}},Ne=j()((function(e){return{baseTag:de([H,J],e),bodyAttributes:fe(L,e),defer:me(e,V),encode:me(e,Z),htmlAttributes:fe(I,e),linkTags:pe(_.LINK,[z,H],e),metaTags:pe(_.META,[$,B,U,G,q],e),noscriptTags:pe(_.NOSCRIPT,[Y],e),onChangeClientState:ue(e),scriptTags:pe(_.SCRIPT,[W,Y],e),styleTags:pe(_.STYLE,[D],e),title:ce(e),titleAttributes:fe(M,e)}}),(function(e){we&&ge(we),e.defer?we=be((function(){Ce(e,(function(){we=null}))})):(Ce(e),we=null)}),je)((function(){return null})),Fe=(C=Ne,T=x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!F()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case _.SCRIPT:case _.NOSCRIPT:return{innerHTML:t};case _.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return ie({},n,((t={})[r.type]=[].concat(n[r.type]||[],[ie({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case _.TITLE:return ie({},o,((t={})[n.type]=i,t.titleAttributes=ie({},a),t));case _.BODY:return ie({},o,{bodyAttributes:ie({},a)});case _.HTML:return ie({},o,{htmlAttributes:ie({},a)})}return ie({},o,((r={})[n.type]=ie({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=ie({},t);return Object.keys(e).forEach((function(t){var n;r=ie({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,o={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,a=n.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[te[r]||r]=e[r],t}),t)}(se(n,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case _.LINK:case _.META:case _.NOSCRIPT:case _.SCRIPT:case _.STYLE:o=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=se(e,["children"]),o=ie({},r);return t&&(o=this.mapChildrenToProps(t,o)),n.createElement(C,o)},ae(t,null,[{key:"canUseDOM",set:function(e){C.canUseDOM=e}}]),t}(n.Component),x.propTypes={base:S().object,bodyAttributes:S().object,children:S().oneOfType([S().arrayOf(S().node),S().node]),defaultTitle:S().string,defer:S().bool,encodeSpecialCharacters:S().bool,htmlAttributes:S().object,link:S().arrayOf(S().object),meta:S().arrayOf(S().object),noscript:S().arrayOf(S().object),onChangeClientState:S().func,script:S().arrayOf(S().object),style:S().arrayOf(S().object),title:S().string,titleAttributes:S().object,titleTemplate:S().string},x.defaultProps={defer:!0,encodeSpecialCharacters:!0},x.peek=C.peek,x.rewind=function(){var e=C.rewind();return e||(e=je({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},T);Fe.renderStatic=Fe.rewind;const Pe=e=>{let{}=e;return n.createElement("div",null,n.createElement("blockquote",{className:"instagram-media","data-instgrm-permalink":"https://www.instagram.com/reel/DBJ31kbyoJ-/?utm_source=ig_embed&utm_campaign=loading","data-instgrm-version":14,style:{background:"#FFF",border:0,borderRadius:3,boxShadow:"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",margin:1,maxWidth:540,minWidth:326,padding:0,width:"calc(100% - 2px)"}},n.createElement("div",{style:{padding:16}}," ",n.createElement("a",{href:"https://www.instagram.com/reel/DBJ31kbyoJ-/?utm_source=ig_embed&utm_campaign=loading",style:{background:"#FFFFFF",lineHeight:0,padding:"0 0",textAlign:"center",textDecoration:"none",width:"100%"},target:"_blank"}," ",n.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}}," ",n.createElement("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",flexGrow:0,height:40,marginRight:14,width:40}})," ",n.createElement("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"center"}}," ",n.createElement("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,flexGrow:0,height:14,marginBottom:6,width:100}})," ",n.createElement("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,flexGrow:0,height:14,width:60}}))),n.createElement("div",{style:{padding:"19% 0"}})," ",n.createElement("div",{style:{display:"block",height:50,margin:"0 auto 12px",width:50}},n.createElement("svg",{width:"50px",height:"50px",viewBox:"0 0 60 60",version:"1.1",xmlns:"https://www.w3.org/2000/svg",xmlnsXlink:"https://www.w3.org/1999/xlink"},n.createElement("g",{stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.createElement("g",{transform:"translate(-511.000000, -20.000000)",fill:"#000000"},n.createElement("g",null,n.createElement("path",{d:"M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"})))))),n.createElement("div",{style:{paddingTop:8}}," ",n.createElement("div",{style:{color:"#3897f0",fontFamily:"Arial,sans-serif",fontSize:14,fontStyle:"normal",fontWeight:550,lineHeight:18}},"View this post on Instagram")),n.createElement("div",{style:{padding:"12.5% 0"}})," ",n.createElement("div",{style:{display:"flex",flexDirection:"row",marginBottom:14,alignItems:"center"}},n.createElement("div",null," ",n.createElement("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"12.5px",width:"12.5px",transform:"translateX(0px) translateY(7px)"}})," ",n.createElement("div",{style:{backgroundColor:"#F4F4F4",height:"12.5px",transform:"rotate(-45deg) translateX(3px) translateY(1px)",width:"12.5px",flexGrow:0,marginRight:14,marginLeft:2}})," ",n.createElement("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"12.5px",width:"12.5px",transform:"translateX(9px) translateY(-18px)"}})),n.createElement("div",{style:{marginLeft:8}}," ",n.createElement("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",flexGrow:0,height:20,width:20}})," ",n.createElement("div",{style:{width:0,height:0,borderTop:"2px solid transparent",borderLeft:"6px solid #f4f4f4",borderBottom:"2px solid transparent",transform:"translateX(16px) translateY(-4px) rotate(30deg)"}})),n.createElement("div",{style:{marginLeft:"auto"}}," ",n.createElement("div",{style:{width:0,borderTop:"8px solid #F4F4F4",borderRight:"8px solid transparent",transform:"translateY(16px)"}})," ",n.createElement("div",{style:{backgroundColor:"#F4F4F4",flexGrow:0,height:12,width:16,transform:"translateY(-4px)"}})," ",n.createElement("div",{style:{width:0,height:0,borderTop:"8px solid #F4F4F4",borderLeft:"8px solid transparent",transform:"translateY(-4px) translateX(8px)"}})))," ",n.createElement("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"center",marginBottom:24}}," ",n.createElement("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,flexGrow:0,height:14,marginBottom:6,width:224}})," ",n.createElement("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,flexGrow:0,height:14,width:144}}))),n.createElement("p",{style:{color:"#c9c8cd",fontFamily:"Arial,sans-serif",fontSize:14,lineHeight:17,marginBottom:0,marginTop:8,overflow:"hidden",padding:"8px 0 7px",textAlign:"center",textOverflow:"ellipsis",whiteSpace:"nowrap"}},n.createElement("a",{href:"https://www.instagram.com/reel/DBJ31kbyoJ-/?utm_source=ig_embed&utm_campaign=loading",style:{color:"#c9c8cd",fontFamily:"Arial,sans-serif",fontSize:14,fontStyle:"normal",fontWeight:"normal",lineHeight:17,textDecoration:"none"},target:"_blank"},"A post shared by Bhavana (@bhavan.art)")))),n.createElement(Fe,null,n.createElement("script",{async:!0,src:"//www.instagram.com/embed.js"})))},Re=e=>{let{href:t,imgSrc:r,title:o,width:a,height:i}=e;return n.createElement("div",null,n.createElement(E,{className:"my-3 text-center"},n.createElement("b",null,"Tap on edge of picture to scroll through album pics")),n.createElement(A.r,{"data-flickr-embed":"true","data-header":"true","data-footer":"true",href:t,title:o},n.createElement("img",{src:r,width:a,height:i,alt:o,style:{minWidth:"200px"}})),n.createElement(Fe,null,n.createElement("script",{async:!0,src:"//embedr.flickr.com/assets/client-code.js",charset:"utf-8"})))};Re.defaultProps={width:"100%",height:"100%",title:""}},763:function(e,t,r){"use strict";r.d(t,{A:function(){return F}});var n=r(6942),o=r.n(n),a=r(6540),i=r(6519),s=r(4848);const l=a.forwardRef((({className:e,bsPrefix:t,as:r="div",...n},a)=>(t=(0,i.oU)(t,"card-body"),(0,s.jsx)(r,{ref:a,className:o()(e,t),...n}))));l.displayName="CardBody";var c=l;const u=a.forwardRef((({className:e,bsPrefix:t,as:r="div",...n},a)=>(t=(0,i.oU)(t,"card-footer"),(0,s.jsx)(r,{ref:a,className:o()(e,t),...n}))));u.displayName="CardFooter";var f=u,d=r(581);const p=a.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},l)=>{const c=(0,i.oU)(e,"card-header"),u=(0,a.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,s.jsx)(d.A.Provider,{value:u,children:(0,s.jsx)(r,{ref:l,...n,className:o()(t,c)})})}));p.displayName="CardHeader";var m=p;const h=a.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...a},l)=>{const c=(0,i.oU)(e,"card-img");return(0,s.jsx)(n,{ref:l,className:o()(r?`${c}-${r}`:c,t),...a})}));h.displayName="CardImg";var y=h;const b=a.forwardRef((({className:e,bsPrefix:t,as:r="div",...n},a)=>(t=(0,i.oU)(t,"card-img-overlay"),(0,s.jsx)(r,{ref:a,className:o()(e,t),...n}))));b.displayName="CardImgOverlay";var g=b;const v=a.forwardRef((({className:e,bsPrefix:t,as:r="a",...n},a)=>(t=(0,i.oU)(t,"card-link"),(0,s.jsx)(r,{ref:a,className:o()(e,t),...n}))));v.displayName="CardLink";var w=v,C=r(4373);const x=(0,C.A)("h6"),T=a.forwardRef((({className:e,bsPrefix:t,as:r=x,...n},a)=>(t=(0,i.oU)(t,"card-subtitle"),(0,s.jsx)(r,{ref:a,className:o()(e,t),...n}))));T.displayName="CardSubtitle";var E=T;const A=a.forwardRef((({className:e,bsPrefix:t,as:r="p",...n},a)=>(t=(0,i.oU)(t,"card-text"),(0,s.jsx)(r,{ref:a,className:o()(e,t),...n}))));A.displayName="CardText";var O=A;const S=(0,C.A)("h5"),k=a.forwardRef((({className:e,bsPrefix:t,as:r=S,...n},a)=>(t=(0,i.oU)(t,"card-title"),(0,s.jsx)(r,{ref:a,className:o()(e,t),...n}))));k.displayName="CardTitle";var j=k;const N=a.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:a,body:l=!1,children:u,as:f="div",...d},p)=>{const m=(0,i.oU)(e,"card");return(0,s.jsx)(f,{ref:p,...d,className:o()(t,m,r&&`bg-${r}`,n&&`text-${n}`,a&&`border-${a}`),children:l?(0,s.jsx)(c,{children:u}):u})}));N.displayName="Card";var F=Object.assign(N,{Img:y,Title:j,Subtitle:E,Body:c,Link:w,Text:O,Header:m,Footer:f,ImgOverlay:g})},4354:function(e,t,r){"use strict";r.d(t,{t:function(){return u}});var n=r(6942),o=r.n(n),a=r(6540),i=r(5556),s=r.n(i),l=r(6519),c=r(4848);const u={bsPrefix:s().string,fluid:s().bool,rounded:s().bool,roundedCircle:s().bool,thumbnail:s().bool},f=a.forwardRef((({bsPrefix:e,className:t,fluid:r=!1,rounded:n=!1,roundedCircle:a=!1,thumbnail:i=!1,...s},u)=>(e=(0,l.oU)(e,"img"),(0,c.jsx)("img",{ref:u,...s,className:o()(t,r&&`${e}-fluid`,n&&"rounded",a&&"rounded-circle",i&&`${e}-thumbnail`)}))));f.displayName="Image",t.A=f},115:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,l,c,u;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(l=s;0!=l--;)if(!a(e[l],i[l]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((s=e.length)!=i.length)return!1;for(l=s;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!a(e[c[l]],i[c[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},2098:function(e,t,r){"use strict";var n,o=r(6540),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function u(){l=e(c.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){c.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",s),f}}}}]);
//# sourceMappingURL=8a3027680b5c093ea27baeeb574724176147c866-aa4705f91bd3cea58590.js.map