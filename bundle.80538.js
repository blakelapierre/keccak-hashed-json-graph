!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,r,i){for(var u,a,c=0,s=[];c<e.length;c++)a=e[c],o[a]&&s.push(o[a][0]),o[a]=0;for(u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u]);for(n&&n(e,r,i);s.length;)s.shift()()};var r={},o={3:0};e.e=function(t){function n(){a.onerror=a.onload=null,clearTimeout(c);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}var r=o[t];if(0===r)return new Promise(function(t){t()});if(r)return r[2];var i=new Promise(function(e,n){r=o[t]=[e,n]});r[2]=i;var u=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,e.nc&&a.setAttribute("nonce",e.nc),a.src=e.p+""+({0:"route-home",1:"route-detail",2:"route-profile"}[t]||t)+".chunk."+{0:"a2c05",1:"63c12",2:"d6c3e"}[t]+".js";var c=setTimeout(n,12e4);return a.onerror=a.onload=n,u.appendChild(a),i},e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e.oe=function(t){throw console.error(t),t},e(e.s=0)}({"/QC5":function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){void 0===n&&(n=w);var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),a={};if(i&&i[1])for(var c=i[1].split("&"),s=0;s<c.length;s++){var l=c[s].split("=");a[decodeURIComponent(l[0])]=decodeURIComponent(l.slice(1).join("="))}t=u(t.replace(o,"")),e=u(e||"");for(var f=Math.max(t.length,e.length),p=0;p<f;p++)if(e[p]&&":"===e[p].charAt(0)){var h=e[p].replace(/(^\:|[+*?]+$)/g,""),d=(e[p].match(/[+*?]+$/)||w)[0]||"",v=~d.indexOf("+"),_=~d.indexOf("*"),m=t[p]||"";if(!m&&!_&&(d.indexOf("?")<0||v)){r=!1;break}if(a[h]=decodeURIComponent(m),v||_){a[h]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){r=!1;break}return(!0===n.default||!1!==r)&&a}function i(t,e){var n=t.attributes||w,r=e.attributes||w;return n.default?1:r.default?-1:a(n.path)-a(r.path)||n.path.length-r.path.length}function u(t){return c(t).split("/")}function a(t){return(c(t).match(/\/+/g)||"").length}function c(t){return t.replace(/(^\/+|\/+$)/g,"")}function s(t){return null!=t.__preactattr_||"undefined"!=typeof Symbol&&null!=t[Symbol.for("preactattr")]}function l(t,e){void 0===e&&(e="push"),C&&C[e]?C[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function f(){var t;return t=C&&C.location?C.location:C&&C.getCurrentLocation?C.getCurrentLocation():"undefined"!=typeof location?location:N,""+(t.pathname||"")+(t.search||"")}function p(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),h(t)&&l(t,e?"replace":"push"),d(t)}function h(t){for(var e=x.length;e--;)if(x[e].canRoute(t))return!0;return!1}function d(t){for(var e=!1,n=0;n<x.length;n++)!0===x[n].routeTo(t)&&(e=!0);for(var r=j.length;r--;)j[r](t);return e}function v(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return p(e)}}function _(t){if(0==t.button)return v(t.currentTarget||t.target||this),m(t)}function m(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&s(e)){if(e.hasAttribute("native"))return;if(v(e))return m(t)}}while(e=e.parentNode)}}function g(){k||("function"==typeof addEventListener&&(C||addEventListener("popstate",function(){return d(f())}),addEventListener("click",y)),k=!0)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"subscribers",function(){return j}),n.d(e,"getCurrentUrl",function(){return f}),n.d(e,"route",function(){return p}),n.d(e,"Router",function(){return O}),n.d(e,"Route",function(){return S}),n.d(e,"Link",function(){return L});var b=n("KM04"),w=(n.n(b),{}),C=null,x=[],j=[],N={},k=!1,O=function(t){function e(e){t.call(this,e),e.history&&(C=e.history),this.state={url:e.url||f()},g()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){x.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;C&&(this.unlisten=C.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),x.splice(x.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,u){return t.slice().sort(i).map(function(t){var i=t.attributes||{},a=i.path,c=o(e,a,i);if(c){if(!1!==u){var s={url:e,matches:c};return r(s,c),n.i(b.cloneElement)(t,s)}return t}return!1}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(n,o,!0),u=i[0]||null;this._didRoute=!!u;var a=this.previousUrl;return o!==a&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:a,active:i,current:u})),u},e}(b.Component),L=function(t){return n.i(b.h)("a",r({onClick:_},t))},S=function(t){return n.i(b.h)(t.component,t)};O.subscribers=j,O.getCurrentUrl=f,O.route=p,O.Router=O,O.Route=S,O.Link=L,e.default=O},0:function(t,e,n){t.exports=n("IdxA")},E1C8:function(t,e,n){"use strict";function r(t){n.e(0).then(function(){t(n("/+Z2"))}.bind(null,n)).catch(n.oe)}var o=n("j8lA");e.a=n.n(o)()(r)},EGbH:function(t,e){"use strict";e.a=function(){var t,e,n,r,o,i,u,a;return n=function(t,e){this.lo=t||0,this.hi=e||0},n.clone=function(t){return new n(t.lo,t.hi)},n.prototype={xor:function(t){return this.lo^=t.lo,this.hi^=t.hi,this},not:function(){return new n(~this.lo,~this.hi)},and:function(t){return this.lo&=t.lo,this.hi&=t.hi,this},circ:function(t){var e,n;return t>=32&&(e=this.lo,this.lo=this.hi,this.hi=e,t-=32),0===t?this:(n=32-t,e=(this.hi<<t)+(this.lo>>>n),this.lo=(this.lo<<t)+(this.hi>>>n),this.hi=e,this)},toString:function(){var t,e;return t=function(t){return("00"+t.toString(16)).slice(-2)},e=function(e){return t(255&e)+t(e>>>8)+t(e>>>16)+t(e>>>24)},function(){return e(this.lo)+e(this.hi)}}()},o=function(t){var e,r=[];for(e=0;e<t;e+=1)r[e]=new n;return r},e=function(t){var r=function t(e,n){return t.array[e%5+n%5*5]};return r.array=t||o(25),r.clone=function(){return new e(r.array.map(n.clone))},r},r=[0,10,20,5,15,16,1,11,21,6,7,17,2,12,22,23,8,18,3,13,14,24,9,19,4],i="0,1;0,8082;z,808A;z,yy;0,808B;0,y0001;z,y8081;z,8009;0,8A;0,88;0,y8009;0,y000A;0,y808B;z,8B;z,8089;z,8003;z,8002;z,80;0,800A;z,y000A;z,y8081;z,8080;0,y0001;z,y8008".replace(/z/g,"80000000").replace(/y/g,"8000").split(";").map(function(t){var e=t.split(",");return new n(parseInt(e[1],16),parseInt(e[0],16))}),u=[0,1,62,28,27,36,44,6,55,20,3,10,43,25,39,41,45,15,21,8,18,2,61,56,14],a=function(){var e,a,c,s,l,f,p,h;for(p=0;p<24;p+=1){for(l=o(5),e=0;e<5;e+=1)for(a=0;a<5;a+=1)l[e].xor(t(e,a));for(f=l.map(n.clone),f=f.concat(f.splice(0,1)),e=0;e<5;e+=1)f[e].circ(1).xor(l[(e+4)%5]);for(e=0;e<5;e+=1)for(a=0;a<5;a+=1)t(e,a).xor(f[e]);for(e=0;e<5;e+=1)for(a=0;a<5;a+=1)t(e,a).circ(u[5*a+e]);for(h=t.array.slice(0),c=0;c<25;c+=1)t.array[r[c]]=h[c];for(s=t.clone(),e=0;e<5;e+=1)for(a=0;a<5;a+=1)t(e,a).xor(s(e+1,a).not().and(s(e+2,a)));t(0,0).xor(i[p])}},function(r){if(t=new e,r.length%68==67)r+="老";else{for(r+="";r.length%68!=67;)r+="\0";r+="耀"}var o,i;for(o=0;o<r.length;o+=68){for(i=0;i<68;i+=4)t.array[i/4].xor(new n(r.charCodeAt(o+i)+65536*r.charCodeAt(o+i+1),r.charCodeAt(o+i+2)+65536*r.charCodeAt(o+i+3)));a()}return t.array.slice(0,4).join("")}}()},IdxA:function(t,e,n){"use strict";var r=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register("/sw.js");var o=function(t){return t&&t.default||t};if("function"==typeof o(n("JkW7"))){var i=document.body.firstElementChild,u=function(){var t=o(n("JkW7"));i=(0,r.render)((0,r.h)(t),document.body,i)};u()}},JkW7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("rq4c");n.n(r);e.default=n("qLaj").a},KM04:function(t){!function(){"use strict";function e(){}function n(t,n){var r,o,i,u,a=A;for(u=arguments.length;u-- >2;)E.push(arguments[u]);for(n&&null!=n.children&&(E.length||E.push(n.children),delete n.children);E.length;)if((o=E.pop())&&void 0!==o.pop)for(u=o.length;u--;)E.push(o[u]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof t)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(i=!1)),i&&r?a[a.length-1]+=o:a===A?a=[o]:a.push(o),r=i;var c=new e;return c.nodeName=t,c.children=a,c.attributes=null==n?void 0:n,c.key=null==n?void 0:n.key,void 0!==M.vnode&&M.vnode(c),c}function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){return n(t.nodeName,r(r({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==T.push(t)&&(M.debounceRendering||U)(u)}function u(){var t,e=T;for(T=[];t=e.pop();)t.__d&&k(t)}function a(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&c(t,e.nodeName):n||t._componentConstructor===e.nodeName}function c(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function s(t){var e=r({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===e[o]&&(e[o]=n[o]);return e}function l(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function f(t){var e=t.parentNode;e&&e.removeChild(t)}function p(t,e,n,r,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)n&&n(null),r&&r(t);else if("class"!==e||o)if("style"===e){if(r&&"string"!=typeof r&&"string"!=typeof n||(t.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(t.style[i]="");for(var i in r)t.style[i]="number"==typeof r[i]&&!1===R.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===e)r&&(t.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var u=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),r?n||t.addEventListener(e,d,u):t.removeEventListener(e,d,u),(t.__l||(t.__l={}))[e]=r}else if("list"!==e&&"type"!==e&&!o&&e in t)h(t,e,null==r?"":r),null!=r&&!1!==r||t.removeAttribute(e);else{var a=o&&e!==(e=e.replace(/^xlink\:?/,""));null==r||!1===r?a?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof r&&(a?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):t.setAttribute(e,r))}else t.className=r||""}function h(t,e,n){try{t[e]=n}catch(t){}}function d(t){return this.__l[t.type](M.event&&M.event(t)||t)}function v(){for(var t;t=J.pop();)M.afterMount&&M.afterMount(t),t.componentDidMount&&t.componentDidMount()}function _(t,e,n,r,o,i){K++||(I=null!=o&&void 0!==o.ownerSVGElement,W=null!=t&&!("__preactattr_"in t));var u=m(t,e,n,r,i);return o&&u.parentNode!==o&&o.appendChild(u),--K||(W=!1,i||v()),u}function m(t,e,n,r,o){var i=t,u=I;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),g(t,!0))),i.__preactattr_=!0,i;var a=e.nodeName;if("function"==typeof a)return O(t,e,n,r);if(I="svg"===a||"foreignObject"!==a&&I,a+="",(!t||!c(t,a))&&(i=l(a,I),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),g(t,!0)}var s=i.firstChild,f=i.__preactattr_,p=e.children;if(null==f){f=i.__preactattr_={};for(var h=i.attributes,d=h.length;d--;)f[h[d].name]=h[d].value}return!W&&p&&1===p.length&&"string"==typeof p[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=p[0]&&(s.nodeValue=p[0]):(p&&p.length||null!=s)&&y(i,p,n,r,W||null!=f.dangerouslySetInnerHTML),w(i,e.attributes,f),I=u,i}function y(t,e,n,r,o){var i,u,c,s,l,p=t.childNodes,h=[],d={},v=0,_=0,y=p.length,b=0,w=e?e.length:0;if(0!==y)for(var C=0;C<y;C++){var x=p[C],j=x.__preactattr_,N=w&&j?x._component?x._component.__k:j.key:null;null!=N?(v++,d[N]=x):(j||(void 0!==x.splitText?!o||x.nodeValue.trim():o))&&(h[b++]=x)}if(0!==w)for(var C=0;C<w;C++){s=e[C],l=null;var N=s.key;if(null!=N)v&&void 0!==d[N]&&(l=d[N],d[N]=void 0,v--);else if(!l&&_<b)for(i=_;i<b;i++)if(void 0!==h[i]&&a(u=h[i],s,o)){l=u,h[i]=void 0,i===b-1&&b--,i===_&&_++;break}l=m(l,s,n,r),c=p[C],l&&l!==t&&l!==c&&(null==c?t.appendChild(l):l===c.nextSibling?f(c):t.insertBefore(l,c))}if(v)for(var C in d)void 0!==d[C]&&g(d[C],!1);for(;_<=b;)void 0!==(l=h[b--])&&g(l,!1)}function g(t,e){var n=t._component;n?L(n):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||f(t),b(t))}function b(t){for(t=t.lastChild;t;){var e=t.previousSibling;g(t,!0),t=e}}function w(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||p(t,r,n[r],n[r]=void 0,I);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||p(t,r,n[r],n[r]=e[r],I)}function C(t){var e=t.constructor.name;(z[e]||(z[e]=[])).push(t)}function x(t,e,n){var r,o=z[t.name];if(t.prototype&&t.prototype.render?(r=new t(e,n),S.call(r,e,n)):(r=new S(e,n),r.constructor=t,r.render=j),o)for(var i=o.length;i--;)if(o[i].constructor===t){r.__b=o[i].__b,o.splice(i,1);break}return r}function j(t,e,n){return this.constructor(t,n)}function N(t,e,n,r,o){t.__x||(t.__x=!0,(t.__r=e.ref)&&delete e.ref,(t.__k=e.key)&&delete e.key,!t.base||o?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r),r&&r!==t.context&&(t.__c||(t.__c=t.context),t.context=r),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===M.syncComponentUpdates&&t.base?i(t):k(t,1,o)),t.__r&&t.__r(t))}function k(t,e,n,o){if(!t.__x){var i,u,a,c=t.props,l=t.state,f=t.context,p=t.__p||c,h=t.__s||l,d=t.__c||f,m=t.base,y=t.__b,b=m||y,w=t._component,C=!1;if(m&&(t.props=p,t.state=h,t.context=d,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(c,l,f)?C=!0:t.componentWillUpdate&&t.componentWillUpdate(c,l,f),t.props=c,t.state=l,t.context=f),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!C){i=t.render(c,l,f),t.getChildContext&&(f=r(r({},f),t.getChildContext()));var j,O,S=i&&i.nodeName;if("function"==typeof S){var P=s(i);u=w,u&&u.constructor===S&&P.key==u.__k?N(u,P,1,f,!1):(j=u,t._component=u=x(S,P,f),u.__b=u.__b||y,u.__u=t,N(u,P,0,f,!1),k(u,1,n,!0)),O=u.base}else a=b,j=w,j&&(a=t._component=null),(b||1===e)&&(a&&(a._component=null),O=_(a,i,f,n||!m,b&&b.parentNode,!0));if(b&&O!==b&&u!==w){var E=b.parentNode;E&&O!==E&&(E.replaceChild(O,b),j||(b._component=null,g(b,!1)))}if(j&&L(j),t.base=O,O&&!o){for(var A=t,U=t;U=U.__u;)(A=U).base=O;O._component=A,O._componentConstructor=A.constructor}}if(!m||n?J.unshift(t):C||(t.componentDidUpdate&&t.componentDidUpdate(p,h,d),M.afterUpdate&&M.afterUpdate(t)),null!=t.__h)for(;t.__h.length;)t.__h.pop().call(t);K||o||v()}}function O(t,e,n,r){for(var o=t&&t._component,i=o,u=t,a=o&&t._componentConstructor===e.nodeName,c=a,l=s(e);o&&!c&&(o=o.__u);)c=o.constructor===e.nodeName;return o&&c&&(!r||o._component)?(N(o,l,3,n,r),t=o.base):(i&&!a&&(L(i),t=u=null),o=x(e.nodeName,l,n),t&&!o.__b&&(o.__b=t,u=null),N(o,l,1,n,r),t=o.base,u&&t!==u&&(u._component=null,g(u,!1))),t}function L(t){M.beforeUnmount&&M.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?L(n):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.__b=e,f(e),C(t),b(e)),t.__r&&t.__r(null)}function S(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{}}function P(t,e,n){return _(n,t,{},!1,e,!1)}var M={},E=[],A=[],U="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,R=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,T=[],J=[],K=0,I=!1,W=!1,z={};r(S.prototype,{setState:function(t,e){var n=this.state;this.__s||(this.__s=r({},n)),r(n,"function"==typeof t?t(n,this.props):t),e&&(this.__h=this.__h||[]).push(e),i(this)},forceUpdate:function(t){t&&(this.__h=this.__h||[]).push(t),k(this,2)},render:function(){}});var D={h:n,createElement:n,cloneElement:o,Component:S,render:P,rerender:u,options:M};t.exports=D}()},LMli:function(t,e,n){"use strict";function r(t){n.e(1).then(function(){t(n("NNim"))}.bind(null,n)).catch(n.oe)}var o=n("j8lA");e.a=n.n(o)()(r)},gNuw:function(t,e,n){"use strict";function r(t){n.e(2).then(function(){t(n("4I0x"))}.bind(null,n)).catch(n.oe)}var o=n("j8lA"),i=n.n(o);i()(r)},j8lA:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){function e(){var e=this;r.Component.call(this);var n=function(t){e.setState({child:t&&t.default||t})},o=t(n);o&&o.then&&o.then(n)}return e.prototype=new r.Component,e.prototype.constructor=e,e.prototype.render=function(t,e){return(0,r.h)(e.child,t)},e};var r=n("KM04")},qLaj:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t,e){return console.log("storing",t),new Promise(function(n){j.addData(t,e,N),n()})}function u(t,e){return new Promise(function(n,r){var o=new XMLHttpRequest;o.open("POST","http://"+x+"/"+w+"/"+t,!0),o.send(e),o.addEventListener("loadend",n),o.addEventListener("error",r)})}function a(t,e){return new Promise(function(n){if(localStorage){for(var r=JSON.parse(localStorage[t]||"[]"),o=0;o<r.length;o++)if(e===r[o])return n();r.unshift(e),n()}})}function c(t,e){s(t,e,N.jsonReferences)}function s(t,e,n){console.log("try classify",e,n);try{var r=JSON.parse(e);if(console.log(r),Array.isArray(r));else if("object"==typeof r)for(var o in r){var i=r[o];if("string"==typeof i){var u=i.match(/^keccak:([0-9a-f]{64})$/);if(u){console.log("match2",u);var a=u[1],c=n[a]=n[a]||{},s=c[o]=c[o]||[];s.unshift(t),console.log("jsonref",{jsonReferences:n})}}}}catch(t){}}function l(t,e){return new Promise(function(n,r){var o=t.data[e];o&&n(o[0]),r()})}function f(t){return new Promise(function(e,n){localStorage||n();var r=localStorage[t];r?e(JSON.parse(r)[0]):n()})}function p(t){return console.log("lookup",t),h("http://"+x+"/"+w+"/"+t)}function h(t){return new Promise(function(e,n){var r=new XMLHttpRequest;r.open("GET",t),r.addEventListener("load",function(){return 200===r.status?e(r.responseText):n(r.status.toString())}),r.addEventListener("error",n),r.addEventListener("timeout",n),r.send()})}function d(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r,o){var i=new XMLHttpRequest,u=0;i.open("GET",t),i.addEventListener("readystatechange",function(t){var n=t.target.responseText.substring(u);u+=n.length,e(n)}),i.addEventListener("loadend",function(){return r()}),i.addEventListener("error",o),i.addEventListener("timeout",o),n.cancel=function(){console.log("canceling",t),n.canceled=!0,i.abort()},n.canceled=!1,i.send()})}n.d(e,"a",function(){return k});var v=n("KM04"),_=(n.n(v),n("/QC5")),m=(n("sIAo"),n("E1C8")),y=n("LMli"),g=(n("gNuw"),n("EGbH")),b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};console.log(y.a);var w="keccak",C=["localhost:9999","db.fact.company"],x="localhost"===window.location.hostname?"localhost:9999":"db.fact.company",j={addData:function(t,e,n){for(var r=n.data[t]=n.data[t]||[],o=n.log,i=0;i<r.length;i++)if(r[i]===e)return n;return r.unshift(e),o.unshift(t),n}},N={hosts:C,transforms:j,data:{},log:[],jsonReferences:{},addData:function(t){return new Promise(function(e){var r=n.i(g.a)(t);i(r,t).then(function(){return u(r,t)}).then(function(){return a(r,t)}).then(function(){return c(r,t)}).then(function(){return e({hash:r,data:t})})})},getData:function(t){return new Promise(function(e,n){return l(N,t).then(e).catch(function(){return f(t).then(function(e){return i(t,e).then(function(){return e})}).then(e).catch(function(){return p(t).then(function(e){return i(t,e).then(function(){return e})}).then(e).catch(n)})})})},getReferencesByKey:function(t,e){return h("http://"+x+"/"+w+"/"+t+"/json/"+e).then(function(t){return JSON.parse(t||"[]")})},getJsonReferences:function(t){return h("http://"+x+"/"+w+"/"+t+"/json").then(function(t){return JSON.parse(t||"{}")}).catch(function(){return{}})},getLatest:function(){return h("http://"+x+"/"+w+"/latest").then(function(t){return t.split("\n")})},getSubscribeLatest:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return d("http://"+x+"/"+w+"/subscribe/latest",function(e){return t(e.split("\n"))},e)},getSubscribeJsonKey:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r="http://"+x+"/"+w+"/subscribe/json/"+t,o=N.pendingGetSubscribeJsonKey[t];return console.log("subscribing",r,o),o||(N.pendingGetSubscribeJsonKey[t]=new Promise(function(o,i){d(r,function(t){return e(t.split("\n"))},n).then(function(e){console.log("stream done",e),delete N.pendingGetSubscribeJsonKey[t],o(e)}).catch(function(e){console.log("stream error",e),delete N.pendingGetSubscribeJsonKey[t],i(e)})}))},pendingGetSubscribeJsonKey:{}},k=function(t){function e(){for(var e,n,o,i=arguments.length,u=Array(i),a=0;a<i;a++)u[a]=arguments[a];return e=n=r(this,t.call.apply(t,[this].concat(u))),n.handleRoute=function(t){n.currentUrl=t.url},o=e,r(n,o)}return o(e,t),e.prototype.render=function(){var t={store:N,route:_.route,hashFnName:w,settings:{colorHash:!0}};return n.i(v.h)("div",{id:"app"},n.i(v.h)(_.Router,{onChange:this.handleRoute},n.i(v.h)(m.a,b({path:"/"},t)),n.i(v.h)(y.a,b({path:"/"+t.hashFnName+"/:hash"},t))))},e}(v.Component)},rq4c:function(){},sIAo:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=n("KM04"),u=(n.n(i),n("sw5u")),a=(n.n(u),n("u3et")),c=n.n(a),s=n.i(i.h)("h1",null,"Preact App");!function(t){function e(){return r(this,t.apply(this,arguments))}o(e,t),e.prototype.render=function(){return n.i(i.h)("header",{class:c.a.header},s,n.i(i.h)("nav",null,n.i(i.h)(u.Link,{activeClassName:c.a.active,href:"/"},"Home"),n.i(i.h)(u.Link,{activeClassName:c.a.active,href:"/profile"},"Me"),n.i(i.h)(u.Link,{activeClassName:c.a.active,href:"/profile/john"},"John")))}}(i.Component)},sw5u:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n("KM04"),c=n("/QC5"),s=e.Match=function(t){function e(){for(var e,n,r,i=arguments.length,u=Array(i),a=0;a<i;a++)u[a]=arguments[a];return e=n=o(this,t.call.apply(t,[this].concat(u))),n.update=function(t){n.nextUrl=t,n.setState({})},r=e,o(n,r)}return i(e,t),e.prototype.componentDidMount=function(){c.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){c.subscribers.splice(c.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,c.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children[0]&&t.children[0]({url:e,path:n,matches:n===t.path})},e}(a.Component),l=function(t){var e=t.activeClassName,n=t.path,o=r(t,["activeClassName","path"]);return(0,a.h)(s,{path:n||o.href},function(t){var n=t.matches;return(0,a.h)(c.Link,u({},o,{class:[o.class||o.className,n&&e].filter(Boolean).join(" ")}))})};e.Link=l,e.default=s,s.Link=l},u3et:function(t){t.exports={header:"header__3QGkI",active:"active__3gItZ"}}});
//# sourceMappingURL=bundle.80538.js.map