(function(e){function n(n){for(var r,a,c=n[0],i=n[1],l=n[2],s=0,d=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(d.length)d.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={index:0},o={index:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1c54a8c8":"cb1dd922","chunk-2ac912ee":"f6a5ab21","chunk-2d0ab67b":"4d298b01","chunk-2d0c4883":"767e7878","chunk-2d0d3834":"1c744bad","chunk-2d0d7dd6":"ac878ecd","chunk-2d210bdd":"39cca51a","chunk-2d2371b1":"90dd17de","chunk-356f94ae":"7705222e","chunk-38dc79ae":"8221fd9d","chunk-3b1fb108":"cf8f6c4b","chunk-463ff1e7":"085bb145","chunk-5ddaea41":"29d5d364","chunk-656edc03":"5e77b2dc","chunk-a80f119e":"d014e82a","chunk-addaafa4":"91aea94a","chunk-c91c33a2":"a4be5ba5","chunk-dc330266":"eb395e3d"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1c54a8c8":1,"chunk-2ac912ee":1,"chunk-356f94ae":1,"chunk-38dc79ae":1,"chunk-3b1fb108":1,"chunk-463ff1e7":1,"chunk-5ddaea41":1,"chunk-656edc03":1,"chunk-a80f119e":1,"chunk-addaafa4":1,"chunk-c91c33a2":1,"chunk-dc330266":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-1c54a8c8":"238e63ed","chunk-2ac912ee":"4c7b21f3","chunk-2d0ab67b":"31d6cfe0","chunk-2d0c4883":"31d6cfe0","chunk-2d0d3834":"31d6cfe0","chunk-2d0d7dd6":"31d6cfe0","chunk-2d210bdd":"31d6cfe0","chunk-2d2371b1":"31d6cfe0","chunk-356f94ae":"c54076ea","chunk-38dc79ae":"2d147bc0","chunk-3b1fb108":"0b3a7cf0","chunk-463ff1e7":"e171bd32","chunk-5ddaea41":"8dd08b87","chunk-656edc03":"c54076ea","chunk-a80f119e":"238e63ed","chunk-addaafa4":"a15f8ce0","chunk-c91c33a2":"238e63ed","chunk-dc330266":"7e9c846b"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===r||s===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),t(u)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var d=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,t[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var f=s;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("a8fb")},"07a4":function(e,n,t){"use strict";var r=t("a593"),a=t("7736");r["default"].use(a["a"]);var o=new a["a"].Store({state:{token:window.localStorage.getItem("token")?window.localStorage.getItem("token"):null,user:null,loading:!0,themeColor:null},mutations:{setToken:function(e,n){e.token=n,window.localStorage.setItem("token",n)},setUser:function(e,n){e.user=n},setLoding:function(e,n){e.lodding=n},setThemeColor:function(e,n){e.themeColor=n}}});n["a"]=o},4360:function(e,n,t){"use strict";var r=t("07a4");t("59f4"),n["a"]=r["a"]},"559b":function(e,n,t){"use strict";t.d(n,"b",(function(){return f}));t("a450"),t("4057"),t("fc02");var r=t("bbc6"),a=t("82ae"),o=t.n(a),u=t("4360"),c=t("a18c"),i=t("2763"),l=t("e8e8");function s(e){return-1!=e.url.indexOf(l["b"])}function d(){u["a"].commit("setToken",""),u["a"].state.menuModule.menu=[],u["a"].state.menuModule.tabs=[],console.log(u["a"].state.menuModule.tabs),c["a"].push({name:"Login",params:{}})}function f(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;console.log(n),null!=n&&""!=n.trim()&&(n=n.split("###"),Object(i["Notification"])({title:n[0],message:n[1],type:e}))}function m(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return e=e.toUpperCase(),a&&(r["Show-Time"]="Hello"),o()({method:e,url:n,data:"GET"!==t?t:null,params:"GET"===e?t:null,headers:Object.assign({"Content-Type":"application/json;charset=UTF-8"},r)}).then((function(e){return 200==e.code?f("success",e.msg):f("warning",e.msg),e})).catch((function(e){return console.log(e),f("error",e.msg),Promise.reject(e)}))}o.a.defaults.withCredentials=!1,o.a.interceptors.request.use((function(e){try{if(e.data.id&&1==e.data.id)return f("error","系统保留数据，请勿操作"),null}catch(n){}return s(e)&&(e.headers["Authorization"]="Bearer "+u["a"].state.token),e}),(function(e){return Promise.reject(e)})),o.a.interceptors.response.use((function(e){return console.log(e),200==e.data.code&&e.data.token,void 0==e.config.headers["Show-Time"]&&void 0!=Object(r["a"])(e.data.msg)&&(e.data.msg=null),e.data}),(function(e){console.log(e);var n=e.response.data?e.response.data:{code:404,msg:null,data:null};return s(e.response.config)?(void 0==e.response.config.headers["Show-Time"]&&401!=n.code&&(n.msg=null),401==n.code&&d(),Promise.reject(n)):(n={code:200,msg:null,data:null},Promise.reject(n))}));var h={qiniu:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){var n=qiniu.upload(e.file,e.path+e.file.name,e.token,{region:qiniu.region.z2});n.subscribe((function(e){console.log(e)}),(function(e){console.log(e.message)}),(function(n){console.log(n);var t={fileName:n.key,hash:n.hash,fileType:n.mimeType,fileSize:n.size};return m("post",e.url,t)}))}))};n["a"]={req:o.a,get:function(e,n,t){return m("get",e,n,void 0,t)},post:function(e,n,t,r){return m("post",e,n,r,t)},put:function(e,n,t){return m("put",e,n,void 0,t)},delete:function(e,n,t){return m("delete",e,n,void 0,t)},upload:function(e,n,t){return 0==e.indexOf("http")?m("post",e,n,{"Content-Type":"application/x-www-form-urlencoded"},t):h[e](n)}}},"56d7":function(e,n,t){"use strict";t.r(n);t("a450"),t("25ba"),t("5f1c"),t("6ba0"),t("b47f");var r=t("a593"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],u={name:"app"},c=u,i=(t("034f"),t("5d22")),l=Object(i["a"])(c,a,o,!1,null,null,null),s=l.exports,d=t("4360"),f=t("a18c"),m=t("2763"),h=t.n(m),p=(t("8f1e"),t("845d")),b=t.n(p),v=t("4d28"),g=t.n(v),y=function(e){Object.defineProperties(e.prototype,{$chart:{get:function(){return{resize:function(e){g.a.init(document.getElementById(e)).resize()},homeChart:function(e){var n=this;this.chart=g.a.init(document.getElementById(e)),this.chart.clear();var t={title:{text:""},tooltip:{trigger:"axis"},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"邮件营销",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]}]};this.chart.setOption(t),window.onresize=function(){n.chart.resize()},setTimeout((function(){n.chart.resize(chart)}),200)},cpuChart:function(e){var n=this;this.chart=g.a.init(document.getElementById(e)),this.chart.clear();var t=[{name:"1",value:820},{name:"2",value:932},{name:"3",value:901},{name:"4",value:934},{name:"5",value:1290},{name:"6",value:1330},{name:"7",vlaue:1320}];t=[];var r={xAxis:{type:"category",boundaryGap:!1,data:t.map((function(e){return e.name}))},yAxis:{type:"value"},series:[{data:t.map((function(e){return e.value})),type:"line",areaStyle:{}}]};return this.chart.setOption(r),window.onresize=function(){n.chart.resize()},setTimeout((function(){n.chart.resize(e)}),200),this.chart},memoryChart:function(e){var n=this;this.chart=g.a.init(document.getElementById(e)),this.chart.clear();var t=[],r={xAxis:{type:"category",boundaryGap:!1,data:t.map((function(e){return e.name}))},yAxis:{type:"value"},series:[{data:t.map((function(e){return e.value})),type:"line",areaStyle:{}}]};return this.chart.setOption(r),window.onresize=function(){n.chart.resize()},setTimeout((function(){n.chart.resize(e)}),200),this.chart}}}}})},k={install:y},w=t("559b"),A=t("e8e8"),S={changeStatus:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return w["a"].post(e,n,t).then((function(e){200==e.code&&Object(w["b"])("success","修改状态成功")})).catch((function(e){Object(w["b"])("error","修改错误")}))}},O=S;t("9f60"),t("94f0"),t("0c84"),t("2843"),t("4057"),t("8dee"),t("aa18"),t("982e"),t("32ea"),t("1bc78");function x(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=E(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return u=e.done,e},e:function(e){c=!0,o=e},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw o}}}}function E(e,n){if(e){if("string"===typeof e)return T(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?T(e,n):void 0}}function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var I=function(e){return"Home"==e||("NotFound"==e||("Forbidden"==e||!!d["a"].state.user&&j(d["a"].state.user.menus,e,0)))},_=3,j=function e(n,t,r){if(null==n||0==n.length||r>=_)return!1;var a,o=x(n);try{for(o.s();!(a=o.n()).done;){var u=a.value;if(u.component==t)return!0;if(e(u.children,t,r+1))return!0}}catch(c){o.e(c)}finally{o.f()}return!1},P=function(e,n){Object.keys(e).forEach((function(t){Array.isArray(e[t])?e[t].splice(0):n.$set(e,t,null)}))},M=function(e,n,t){return Object.keys(e).forEach((function(r){t.$set(e,r,n[r])})),e},F=function(e){return JSON.parse(JSON.stringify(e))},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=A["b"];return null==e&&(e=""),0==e.indexOf("http")?e:("/"==e.charAt(0)?n+=e:n+="/"+e,n)},L=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"导出数据",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];n.filter((function(e){return!r.includes(e.key)})),console.log(e,n);var a=document.createElement("form");a.action=A["a"],a.method="POST",a.style.display="none";var o="<input name='_token' value='"+window.localStorage.getItem("token")+"'/>";o+="<input name='name' value='"+t+"'/>",n.forEach((function(e,n){o+="<input name='columns["+n+"].key' value='"+e.key+"'/>",o+="<input name='columns["+n+"].value' value='"+e.value+"'/>"})),o+="<input name='data' value='"+JSON.stringify(e)+"'/>",a.innerHTML=o,console.log(o),document.body.appendChild(a),a.submit()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;console.log(e);var n=e.isFullScreen||e.mozIsFullScreen||e.webkitIsFullScreen,t=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;return n?e.exitFullscreen?e.exitFullscreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.webkitCancelFullScreen?e.webkitCancelFullScreen():e.msExitFullscreen&&e.msExitFullscreen():t.call(e),!n},R={copyObj:M,clearObj:P,getDeepObj:F,verifyAuth:I,buildAvatar:C,exportExcel:L,fullScreen:N},U=R,z=function(e,n){console[e](n)},q=function(e){z("info",e)},H=function(e){z("warn",e)},$=function(e){z("error",e)},B={info:q,warn:H,error:$},D=B,G={install:function(e){e.component("MyPagination",(function(){return t.e("chunk-addaafa4").then(t.bind(null,"1799"))})),e.component("SearchBar",(function(){return t.e("chunk-2d0ab67b").then(t.bind(null,"14ac"))}))}},J=G;r["default"].component(b.a.name,b.a),r["default"].use(k),r["default"].prototype.$axios=w["a"],r["default"].prototype.$api=A["c"],r["default"].prototype.$http=O,r["default"].prototype.$tools=U,r["default"].prototype.$log=D,r["default"].prototype.$tips=h.a,r["default"].use(J),r["default"].config.productionTip=!1,r["default"].use(h.a),f["a"].beforeEach((function(e,n,t){d["a"].state.token?"Login"==e.name?(console.log("已登录了"),setTimeout((function(){t(!1)}),1500)):null==e.path||null==e.name?t({name:"NotFound"}):e.meta.anonymous||U.verifyAuth(e.name)?(d["a"].dispatch("menuModule/clickMenuItem",e),t()):t({name:"Forbidden"}):"Login"!==e.name?t({name:"Login"}):t()})),new r["default"]({router:f["a"],store:d["a"],render:function(e){return e(s)}}).$mount("#app")},"59f4":function(e,n,t){"use strict";t.r(n);t("9f60"),t("94f0"),t("4057"),t("a7e5"),t("e5b4"),t("6a61");var r=t("60b5"),a=(t("a450"),t("1bc78"),t("c5cb"),t("0c84"),t("2843"),t("c38b"),t("07a4")),o=t("e8e8"),u=t("559b"),c=t("a18c");function i(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=l(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return u=e.done,e},e:function(e){c=!0,o=e},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw o}}}}function l(e,n){if(e){if("string"===typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}a["a"].registerModule("menuModule",{namespaced:!0,state:{menus:[],menusOriginal:{},tabs:[],breadcrumb:[],activeItem:"",isCollapse:!1,getMenuFlag:!1},getters:{subMenu:function(e){var n=e.menus.filter((function(e){return e.sub})).map((function(e){return e.sub}));return Array.from(new Set(n))},itemMenu:function(e){return function(n,t){var r=e.menus.filter((function(e){return e.sub==n&&e.group==t&&e.name})).map((function(e){return{name:e.name,index:e.path}}));return Array.from(new Set(r))}}},mutations:{initMenus:function(e,n){n.forEach((function(e){return e.children.forEach((function(n){return n.path=e.path+n.path}))})),e.menus=n},setMenusOriginal:function(e,n){e.menusOriginal=n},initTabs:function(e,n){e.tabs=n},addTab:function(e,n){null!=n&&e.tabs.push(n)},switchTab:function(e,n){e.activeItem=n,"Home"!=n?e.menus.forEach((function(t){return t.children.forEach((function(r){r.component!=n||(e.breadcrumb=[t.name,r.name])}))})):e.breadcrumb=[]},breadcrumb:function(e,n){e.breadcrumb=n}},actions:{getMenu:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].get(o["c"].USER_INFO,{},!1).then((function(e){a["a"].commit("setUser",e.data),console.log(a["a"].state.user),n.commit("initMenus",e.data.menus),n.commit("setMenusOriginal",e.data.menusOriginal)}));case 2:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),clickMenuItem:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,t){var r,a,o,u,c,l,s,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.name,"NotFound"!==t.name&&"Forbidden"!==t.name){e.next=3;break}return e.abrupt("return");case 3:if("Home"==r||n.state.tabs.find((function(e){return e.index==r}))){e.next=40;break}a=null,o=i(n.state.menus),e.prev=6,o.s();case 8:if((u=o.n()).done){e.next=30;break}c=u.value,l=i(c.children),e.prev=11,l.s();case 13:if((s=l.n()).done){e.next=20;break}if(d=s.value,d.component!=r){e.next=18;break}return a={label:d.name,path:d.path,index:d.component,closable:!0,icon:d.icon},e.abrupt("break",30);case 18:e.next=13;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](11),l.e(e.t0);case 25:return e.prev=25,l.f(),e.finish(25);case 28:e.next=8;break;case 30:e.next=35;break;case 32:e.prev=32,e.t1=e["catch"](6),o.e(e.t1);case 35:return e.prev=35,o.f(),e.finish(35);case 38:a||(a={label:t.meta.tabName,path:t.path,index:t.name,closable:!0,icon:"el-icon-s-help"}),n.commit("addTab",a);case 40:n.commit("switchTab",r);case 41:case"end":return e.stop()}}),e,null,[[6,32,35,38],[11,22,25,28]])})));function n(n,t){return e.apply(this,arguments)}return n}(),closeTab:function(e,n){var t=e.state.tabs.findIndex((function(e){return e.index==n})),r=e.state.activeItem,a=e.state.tabs.filter((function(e){return e.index!=n}));e.commit("initTabs",a),r==n&&(e.commit("switchTab",0==t?"Home":a[t-1].index),c["a"].push({name:0==t?"Home":a[t-1].index}))}}})},a18c:function(e,n,t){"use strict";var r=t("a593"),a=t("8aaf");r["default"].use(a["a"]);var o=a["a"].prototype.push;a["a"].prototype.push=function(e){return o.call(this,e).catch((function(e){return e}))};var u=new a["a"]({routes:[{path:"/login",name:"Login",component:function(){return t.e("chunk-463ff1e7").then(t.bind(null,"a55b"))}},{path:"/",component:function(){return t.e("chunk-5ddaea41").then(t.bind(null,"283b"))},children:[{path:"",name:"Home",component:function(){return t.e("chunk-dc330266").then(t.bind(null,"bb51"))},meta:{keepAlive:!0,anonymous:!0}},{path:"/mine",name:"Mine",component:function(){return t.e("chunk-2d0c4883").then(t.bind(null,"3adc"))},meta:{keepAlive:!1,anonymous:!0,tabName:"我的信息"}},{path:"/mine/password",name:"Password",component:function(){return t.e("chunk-2d2371b1").then(t.bind(null,"fa66"))},meta:{keepAlive:!1,anonymous:!0,tabName:"修改密码"}},{path:"/system/user",name:"User",component:function(){return t.e("chunk-a80f119e").then(t.bind(null,"0d31"))},meta:{keepAlive:!1}},{path:"/system/role",name:"Role",component:function(){return t.e("chunk-1c54a8c8").then(t.bind(null,"8269"))},meta:{keepAlive:!1}},{path:"/system/menu",name:"Menu",component:function(){return t.e("chunk-2d0d3834").then(t.bind(null,"5ca1"))},meta:{keepAlive:!1}},{path:"/system/task",name:"Task",component:function(){return t.e("chunk-c91c33a2").then(t.bind(null,"22c3"))},meta:{keepAlive:!1}},{path:"/monitor/log/operate",name:"OperateLog",component:function(){return t.e("chunk-356f94ae").then(t.bind(null,"1d8f"))},meta:{keepAlive:!1}},{path:"/monitor/log/exception",name:"ExceptionLog",component:function(){return t.e("chunk-656edc03").then(t.bind(null,"da0e"))},meta:{keepAlive:!1}},{path:"/monitor/system",name:"SystemInfo",component:function(){return t.e("chunk-38dc79ae").then(t.bind(null,"958b"))},meta:{keepAlive:!0}},{path:"/monitor/druid",name:"Druid",component:function(){return t.e("chunk-3b1fb108").then(t.bind(null,"7095"))},meta:{keepAlive:!0}},{path:"/tools/smtp",name:"SMTP",component:function(){return t.e("chunk-2d0d7dd6").then(t.bind(null,"7942"))},meta:{keepAlive:!1}},{path:"/403",name:"Forbidden",component:function(){return t.e("chunk-2d210bdd").then(t.bind(null,"b8d5"))},meta:{anonymous:!0}},{path:"/404",name:"NotFound",component:function(){return t.e("chunk-2ac912ee").then(t.bind(null,"be4d"))},meta:{anonymous:!0}}]}]});n["a"]=u},a8fb:function(e,n,t){},e8e8:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return u}));t("32ea"),t("1bc78");var r=window.localStorage.getItem("API_PATH")||"http://127.0.0.1:8999",a=r+"/api",o={SERVER_BASE:r,LOGIN:"/login",LOGOUT:"/logout",QUOTE:"https://api.ixiaowai.cn/ylapi/index.php/?code=json",HUMBLE_DOG_DIARY:"http://test.isiyuan.net/tiangou/tg.php",HUMBLE_DOG_DIARY1:"https://v1.alapi.cn/api/dog?format=text",USER_API:"/user",USER_INFO:"/user/info",USER_TRACK:"/user/info/track",ROLE_API:"/role",ROLE_MENU_API:"/role/menu",MENU_API:"/menu",MENU_TREE_API:"/menu/tree",TASK_API:"/task",LOG_API:"/log",SYSTEM_API:"/system",PROP_API:"/prop",MAIL_API:"/mail",MAIL_SEND:"/mail/send",EXCEL_EXPORT:"/excel",TOKEN_QINIU:"/token/qiniu",FILE_UPLOAD:"/upload",OAUTH_QQ:r+"/oauth/render/qq"},u=a+o.EXCEL_EXPORT,c=function(){var e=/^(http)[s]{0,1}(:\/\/)/;return Object.keys(o).forEach((function(n){o[n]=e.test(o[n])?o[n]:a+o[n]})),o};n["c"]=c()}});