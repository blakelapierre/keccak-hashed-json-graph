webpackJsonp([0],{"+EiC":function(t){t.exports={selected:"selected__3rVjq"}},"/+Z2":function(t,e,n){"use strict";function r(t){if(null==t)throw new TypeError("Cannot destructure undefined")}function i(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[0]!==e[0])return!1;return!0}function u(t){var e=JSON.stringify(t);return{hash:P(e),json:e}}function l(t){var e=[],n=[t],r=[];console.log("fully hashing",t);var i=u(Object.keys(t).reduce(function(i,s){var a=t[s];if(console.log(s,a,typeof a),"string"==typeof a){console.log("got string",a);var u=P(a);i[s]=u,e.push(u),n.push(a),r.push(void 0)}else if(Array.isArray(a)){console.log("got array");var c=l(a),h=c.hashes,f=c.objects,p=c.jsons;i[s]=o,e.push.apply(e,h),n.push.apply(n,f),r.push.apply(r,p)}else if("object"==typeof a){console.log("got object");var d=l(a),b=d.hashes,v=d.objects,g=d.jsons;i[s]=o,e.push.apply(e,b),n.push.apply(n,v),r.push.apply(r,g)}return i},{})),o=i.hash,s=i.json;return e.unshift(o),r.unshift(s),console.log("hash",e,n,r),{hashes:e,objects:n,jsons:r}}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return m});var c=n("KM04"),h=(n.n(c),n("sw5u")),f=(n.n(h),n("vO8M")),p=(n.n(f),n("LtVz"),n("pptu")),d=(n("NBoq"),n("DtTT")),b=n("EGbH"),v=this,g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},y="localhost"===window.location.hostname?"localhost:9999":"db.fact.company",m=function(t){function e(e){var n=o(this,t.call(this));n.state={log:[],delay:500,failCount:0},n.state.data=e.store.data;var r=e.store;return n.store=r,n}return s(e,t),e.prototype.onTextAdd=function(t){for(var e=l({text:t}),n=e.hashes,r=e.objects,i=e.jsons,o=0;o<n.length;o++){console.log("settings",t,n[o],r[o],i[o]);var s=n[o].substring(7),a=i[o];if(void 0===this.state.data[s]){var u=new XMLHttpRequest;u.open("POST","http://"+y+"/keccak/"+s,!0),u.send(a)}this.setState(transforms.addData.bind(this,s,a))}return n},e.prototype.onTextTagsAdd=function(t,e){for(var n={text:t,tags:e},r=u(n),i=r.hash,o=r.json,s=[i],a=[o],l=0;l<s.length;l++){console.log("setting",t,s[l],a[l]);var c=s[l].substring(7),h=a[l];void 0===this.state.data[c]&&this.store.addData(h),this.setState(this.props.store.transforms.addData.bind(this,c,h))}},e.prototype.render=function(t,e){var r=e.data,o=t.text,s=t.tags,a=t.store,u=i(t,["text","tags","store"]),l=a.hosts,h=a.data,f=a.log;return n.i(c.h)("home",null,n.i(c.h)("left",null,n.i(c.h)(d.a,null,l.map(function(t){return n.i(c.h)("container",{header:"db ("+t+")"},n.i(c.h)(j,g({},g({store:a},u),{data:r})))}),n.i(c.h)("container",{header:"localStorage"},n.i(c.h)(k,g({items:["ceec1972c7f3e92c0483c1d8fc1b50676176b877278d0157350dd41c51f0f14d"],data:{ceec1972c7f3e92c0483c1d8fc1b50676176b877278d0157350dd41c51f0f14d:["456"]}},u))),n.i(c.h)("container",{header:"store"},n.i(c.h)(k,g({items:f,data:h},u))))),n.i(c.h)("right",null,n.i(c.h)(C,{text:o,tags:s,onAdd:this.onTextTagsAdd.bind(this)})))},e}(c.Component),j=function(t){function e(e){var n=o(this,t.call(this));return n.state={failCount:0,filters:[],references:{},items:[]},n.state.data=e.data,n.store=e.store,n.setFilters(),n}return s(e,t),e.prototype.setFilters=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];console.log("setting filters",t,this.state.filters),(0===t.length&&0===this.state.filters.length||!a(t,this.state.filters))&&(this.setState(function(e){return console.log("data",e.data),e.filters=t,e.items.splice(0),e}),console.log("setFilters",t,this.state.filters),this.subscribe(t))},e.prototype.subscribe=function(t){function e(t){return r.setState.call(r,t)}var n=this,r=this,i=this.store,o=this.token=this.token||{};return this.token.cancel&&this.token.cancel(),console.log("subscribing",t),(this.subscription||Promise.resolve()).then(function(){var s=function(t){console.log("hashes",t),t.reverse().reduce(function(t,n){return n||o.canceled?i.getData(n).then(function(t){return e(i.transforms.addData.bind(r,n,t))}).then(function(){return i.getJsonReferences(n)}).then(function(t){return e(function(e){return e.references[n]=t,e.items.unshift(n),console.log("references",t),e})}):t},Promise.resolve()).catch(function(t){return console.log("big error",t)})};return n.subscription=new Promise(function(e,n){(t[0]?i.getSubscribeJsonKey(t[0],s,o):i.getSubscribeLatest(s,o)).then(function(){return r.state.failCount=0}).then(function(){o.canceled||(state.items.splice(0),r.subscribe.call(r,t))}).then(e).catch(function(){console.log("subscription catch!",t),o.canceled?n():(setTimeout(function(){state.items.splice(0),r.subscribe.bind(r,t)},r.state.delay=100*Math.pow(2,r.state.failCount=(r.state.failCount||0)+1)),e())})})})},e.prototype.render=function(t,e){var r=e.data,i=void 0===r?[]:r,o=e.references,s=e.items,a=this.setFilters;return n.i(c.h)("filter-view",null,n.i(c.h)(O,g({setFilters:a.bind(this)},t)),n.i(c.h)(k,g({},t,{data:i,references:o,items:s})))},e}(c.Component),O=function(t){function e(){for(var e,n,r,i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];return e=n=o(this,t.call.apply(t,[this].concat(s))),n.state={filters:[]},r=e,o(n,r)}return s(e,t),e.prototype.addFilter=function(){var t=this;this.setState(function(e){return-1===e.filters.indexOf(t.input.value)&&e.filters.push(t.input.value),e}),this.props.setFilters(this.state.filters.slice())},e.prototype.removeFilter=function(t){this.setState(function(e){var n=e.filters.indexOf(t);return n>=0&&e.filters.splice(n,1),e}),console.log("filter removed",t,this.state.filters),this.props.setFilters(this.state.filters.slice())},e.prototype.render=function(t,e){var i=this,o=e.filters;return r(t),n.i(c.h)("filter-input",null,o.map(function(t){return n.i(c.h)("filter",null,n.i(c.h)("remove",{onClick:i.removeFilter.bind(i,t)},"x"),t)}),n.i(c.h)("input",{type:"text",onKeyUp:function(t){return 13===t.which?i.addFilter():void 0},ref:function(t){return i.input=t},value:""}),n.i(c.h)("button",{onClick:this.addFilter.bind(this)},"+"))},e}(c.Component),k=function(t){var e=t.data,r=t.items,o=t.route,s=i(t,["data","items","route"]);return n.i(c.h)("db",null,r.length,r.map(function(t){return(e[t]||[]).map(function(e){return n.i(c.h)(p.a,g({hash:t,obj:JSON.parse(e),onClick:function(){return o("/keccak/"+t)}},s))})}))},x=(n.i(c.h)("data",null),n.i(c.h)("label",null,"Text")),w=n.i(c.h)("label",null,"Tags (separate with commas)"),C=function(t){var e=t.text,r=t.tags,i=t.onAdd;return n.i(c.h)("text-input",null,n.i(c.h)("div",null,x,n.i(c.h)("textarea",{autofocus:!0,value:e,ref:function(t){return v.textarea=t}})),n.i(c.h)("div",null,w,n.i(c.h)("textarea",{value:r,ref:function(t){return v.tags=t}})),n.i(c.h)("button",{onClick:function(){return i(v.textarea.value,v.tags.value.length>0?v.tags.value.split(","):void 0)&v.textarea.focus()}},"Add"))},P=function(t){return"keccak:"+n.i(b.a)(t)}},DtTT:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return u});var o=n("KM04"),s=(n.n(o),n("+EiC")),a=n.n(s),u=function(t){function e(e){var n=r(this,t.call(this,e));return n.state={selected:0,expanded:!0},n}return i(e,t),e.prototype.render=function(t,e){var r=this,i=t.children,s=t.className,u=e.selected,l=e.expanded;return n.i(o.h)("tab-panel",{className:a.a[s]},n.i(o.h)("headers",null,i.map(function(t,e){var i=t.attributes.header;return n.i(o.h)("selector",{className:u===e?a.a.selected:"",onClick:function(){return r.setState({selected:e,expanded:!0})}},u===e?n.i(o.h)("expander",{onClick:function(t){return r.setState({expanded:!l})&t.stopPropagation()}},l?"-":"+"):void 0,n.i(o.h)("text",null,i))})),l?i[u]:void 0)},e}(o.Component)},LtVz:function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return a});var r=n("KM04"),i=(n.n(r),n("QD63")),o=(n.n(i),n("sw5u")),s=(n.n(o),function(t){return t.settings.colorHash?n.i(r.h)(a,t):n.i(r.h)("hash",null,t.hash)}),a=function(t){var e=t.hash,i=t.hashFnName,o=t.route;return n.i(r.h)("color-hash",{title:e,onClick:function(){return o("/"+i+"/"+e)}},e.match(/[0-9a-f]{8}/g).map(function(t){return n.i(r.h)("span",{style:"background-color: rgba("+parseInt(t.substring(0,2),16)+", "+parseInt(t.substring(2,4),16)+", "+parseInt(t.substring(4,6),16)+", "+(parseInt(t.substring(6,8),16)/255/2+.3)+");"},t)}))}},NBoq:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}n.d(e,"a",function(){return h});var i=n("KM04"),o=(n.n(i),n("sw5u")),s=(n.n(o),n("rYS7")),a=n.n(s),u=n("LtVz"),l=n("sr9F"),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},h=function(t){var e=t.hash,o=t.data,s=t.onClick,h=r(t,["hash","data","onClick"]);return n.i(i.h)("raw",{onClick:s},n.i(i.h)("table",null,n.i(i.h)("tbody",null,n.i(i.h)("tr",null,n.i(i.h)("td",null,n.i(i.h)("data",null,n.i(l.a)(o,h)))),n.i(i.h)("tr",{className:a.a.info},n.i(i.h)("td",null,n.i(i.h)(u.b,c({hash:e},h)))))))}},QD63:function(){},auzC:function(){},pptu:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function i(t){var e=t.references,r=t.hash,i=e[r]||{};return n.i(a.h)("json",{onClick:t.onClick},n.i(a.h)(o,t),n.i(a.h)("lower",null,n.i(a.h)(l.a,t),n.i(a.h)("references",null,Object.keys(i).map(function(t){return n.i(a.h)("reference",null,n.i(a.h)("key",null,t)," ",n.i(a.h)("count",null,i[t]))}))))}function o(t){var e=t.obj,i=r(t,["obj"]);return n.i(a.h)("key-values",null,Object.keys(e).map(function(t){return n.i(a.h)("key-value",null,n.i(a.h)("value",null,s(e[t],i)),n.i(a.h)("key",null,n.i(a.h)("span",null,t)))}))}function s(t,e){switch(typeof t){case"object":return n.i(a.h)(o,h({},e,{obj:t}));case"string":return n.i(c.a)(t,e);default:return t}}n.d(e,"a",function(){return i});var a=n("KM04"),u=(n.n(a),n("auzC")),l=(n.n(u),n("LtVz")),c=n("sr9F"),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},rYS7:function(){},sr9F:function(t,e,n){"use strict";function r(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1],r=/(ftp|http|https|keccak):(\/\/)?([^ "]+)/gi,a=[],u=void 0;null!==(u=r.exec(t));){var l=t.indexOf(u[0]),c=u[1],h=t.substring(0,l),f=t.substring(l+u[0].length);a.push(h),a.push("keccak"===c?n.i(i.h)(o.b,s({},e,{hash:u[3]})):n.i(i.h)("a",{href:u[0],onClick:function(t){return t.stopPropagation()},target:"linkIframe"},u[0])),t=f}return a.push(t),a}var i=n("KM04"),o=(n.n(i),n("LtVz")),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.a=r},vO8M:function(t){t.exports={selected:"selected__Gj1B3",label:"label__bnOZh",info:"info__3tmHj"}}});
//# sourceMappingURL=route-home.chunk.a2c05.js.map