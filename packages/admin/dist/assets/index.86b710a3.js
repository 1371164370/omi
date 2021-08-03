var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,n,s)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s;import{s as r,W as l,a as d,h as c,t as h,b as m,r as f,c as u}from"./vendor.5dd7de05.js";let b;const p={},g=function(e,t){if(!t||0===t.length)return e();if(void 0===b){const e=document.createElement("link").relList;b=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`./${e}`)in p)return;p[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":b,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))};var _=Object.defineProperty,x=Object.getOwnPropertyDescriptor;let w=class extends l{constructor(){super(...arguments),this.items=[{label:"中文",value:"zh"},{label:"English",value:"en"}],this.isShowColorPicker=!1,this.toggle=e=>{this.isShowColorPicker=!this.isShowColorPicker,this.update(),e.stopPropagation()},this.onColorChange=e=>{this.store.themeColor=e.detail.color,d("primary",e.detail.color)},this.onMenuChange=e=>{this.store.isLeftPanelClosed=e.detail,this.store.isLeftPanelClosed?this.store.openLeftPanel():this.store.closeLeftPanel()},this.onItemSelect=e=>{this.store.setLocals(e.detail.value)}}install(){g((()=>import("./index.esm.835b2dab.js")),["assets/index.esm.835b2dab.js","assets/vendor.5dd7de05.js"]),window.addEventListener("click",(()=>{this.isShowColorPicker=!1,this.update()}))}render(){return c("div",{class:h`bg-gray-100 h-12 text-left border-b-1`},c("div",{class:h`flex justify-between`},c("div",{class:h`flex flex-row p-1 order-1`},c("o-hamburger-menu",{class:h`mt-1.5 ml-1 scale-75 flex-row`,color:"rgb(107, 114, 128)",active:!this.store.isLeftPanelClosed,onchange:this.onMenuChange}),c("img",{class:h`w-8 m-1 ml-3 flex-row`,src:"./assets/logo.a690a1ac.svg",alt:"logo"}),c("h1",{class:h`ml-3 leading-10 text-gray-500 flex-row`},"OMI ADMIN"),c("div",{class:h`flex-row mt-1.5 ml-3`},c("o-select",{css:"\n            .o-select .o-input__inner {\n              width: 117px;\n            ",size:"mini","onitem-select":this.onItemSelect,value:this.store.locale,items:this.items}))),c("div",{class:h`flex flex-row text-gray-500 gap-x-4 items-center order-3 p-1 mr-3`},c("div",{class:h`flex-row `},c("div",{class:h`cursor-pointer`,onClick:this.toggle,style:{color:this.store.themeColor}},c("o-icon-palette",null),this.store.localeMap.base.Theme),this.isShowColorPicker&&c("o-color-picker",{onchange:this.onColorChange,onClick:e=>e.stopPropagation(),class:h`absolute right-0 z-50`,save:!1,preview:!1,button:!1,clear:!1,width:"300px"})),c("o-icon-notifications",{class:h`flex-row cursor-pointer`}),c("o-icon-settings",{class:h`flex-row cursor-pointer`}),c("a",{href:"https://github.com/Tencent/omi",target:"_blank",class:h`flex-row`},c("o-icon-git-hub",null)),c("o-avatar",{class:h`flex-row cursor-pointer`,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}))))}};w.css=r.target,w=((e,t,n,s)=>{for(var i,o=s>1?void 0:s?x(t,n):t,a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s?i(t,n,o):i(o))||o);return s&&o&&_(t,n,o),o})([m("layout-header")],w);var v=Object.defineProperty,y=Object.getOwnPropertyDescriptor;let k=class extends l{constructor(){super(...arguments),this.onNodeClick=e=>{if(!e.detail.children){const t=this.store.tabs.find((t=>t.id===e.detail.id));t?this.store.tabsActiveIndex=this.store.tabs.indexOf(t):(this.store.tabs.push({label:e.detail.label,closeable:!1,id:e.detail.id,href:e.detail.href}),this.store.tabsActiveIndex=this.store.tabs.length-1)}e.detail.md&&e.detail.md.then((e=>{this.store.markdown=e.default}))}}install(){g((()=>import("./emoji-people.76bb5adb.js").then((function(e){return e.e}))),["assets/emoji-people.76bb5adb.js","assets/vendor.5dd7de05.js"]),g((()=>import("./ballot.765c6f18.js").then((function(e){return e.b}))),["assets/ballot.765c6f18.js","assets/vendor.5dd7de05.js"])}installed(){this.store.ui.leftPanel=this}render(){return c("div",{style:"height:calc(100vh - 3rem)",class:h`text-left border-r-1 relative`},c("o-tree",{"onnode-click":this.onNodeClick,data:this.store.treeData}))}};k.css=[r.target,".menu {\n  position: absolute;\n  cursor: pointer;\n  background-color: #acb7c1;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  width: 8px;\n  bottom: 0;\n  margin-top: -25px;\n  right: -8px;\n  z-index: 999;\n}\n\n.menu svg {\n  font-size: 10px;\n  display: inline-block;\n  position: relative;\n  top: -2px;\n  right: 1px;\n}\n\n.menu.closed svg {\n  transform: rotate(180deg);\n}"],k=((e,t,n,s)=>{for(var i,o=s>1?void 0:s?y(t,n):t,a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s?i(t,n,o):i(o))||o);return s&&o&&v(t,n,o),o})([m("layout-left-panel")],k);var P=Object.defineProperty,E=Object.getOwnPropertyDescriptor;let O=class extends l{constructor(){super(...arguments),this.onChange=e=>{const t=this.store.tabs.find((t=>t.id===e.detail.tab.id));this.store.tabsActiveIndex=this.store.tabs.indexOf(t),this.store.selectTreeNodeById(e.detail.tab.id),location.hash=e.detail.tab.href},this.onRemove=e=>{let t=e.detail.index;this.store.tabsActiveIndex===e.detail.index?(t-=1,t<0&&(t=0),this.store.tabsActiveIndex=t):this.store.tabsActiveIndex>t&&(this.store.tabsActiveIndex-=1);const n=this.store.tabs[this.store.tabsActiveIndex];this.store.selectTreeNodeById(n.id),location.hash=n.href}}installed(){this.store.ui.baseLayout=this,window.addEventListener("resize",(()=>{this.update()}))}getMainContentWidth(){return window.innerWidth-(this.store.isLeftPanelClosed?0:256)+"px"}render(){return c(c.f,null,c("layout-header",{class:h`h-12 block`}),c("div",{class:h`flex flex-row`},c("layout-left-panel",{class:h`${this.store.isLeftPanelClosed?"sm:w-0 -translate-x-full":"sm:w-64 w-3/4 translate-x-0"} flex-none overflow-hidden bg-white z-50 transition-all duration-500 ease-in-out  sm:relative fixed `}),c("layout-container",{class:h`flex-1 flex-grow`},c("div",{class:h`overflow-auto`,style:{width:this.getMainContentWidth()}},c("o-tabs",{closable:!0,type:"card",list:this.store.tabs,onchange:this.onChange,onremove:this.onRemove,"active-index":this.store.tabsActiveIndex})),c("div",{style:{height:"calc(100vh - 90px)",width:this.getMainContentWidth()},class:h`overflow-auto`},c("slot",null)))))}};O.css=[r.target,"\n.is-closed{\n  width: 0;\n  transform: translateX(-100%);\n}\n"],O=((e,t,n,s)=>{for(var i,o=s>1?void 0:s?E(t,n):t,a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s?i(t,n,o):i(o))||o);return s&&o&&P(t,n,o),o})([m("basic-layout")],O);var L=Object.defineProperty,T=Object.getOwnPropertyDescriptor;let C=class extends l{render(){return c("div",null,c("slot",null))}};C.css=r.target,C=((e,t,n,s)=>{for(var i,o=s>1?void 0:s?T(t,n):t,a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s?i(t,n,o):i(o))||o);return s&&o&&L(t,n,o),o})([m("layout-container")],C);var I=Object.defineProperty,j=Object.getOwnPropertyDescriptor;let A=class extends l{render(){return c("div",{class:h``},c("div",{class:h`w-4/5 sm:w-96 m-auto pt-52`},c("svg",{version:"1.1",viewBox:"0 0 800 600",xmlns:"http://www.w3.org/2000/svg"},c("symbol",{id:"text"},c("text",{x:"2%",y:"35%",class:"text"},"Welcome to"),c("text",{x:"69%",y:"35%",class:"text"},"Admin")),c("symbol",{id:"omi"},c("text",{x:"46%",y:"35%",class:"text"},"OMI")),c("g",null,c("use",{"xlink:href":"#omi",class:"use-omi"}),c("use",{"xlink:href":"#omi",class:"use-omi"}),c("use",{"xlink:href":"#omi",class:"use-omi"}),c("use",{"xlink:href":"#omi",class:"use-omi"}),c("use",{"xlink:href":"#omi",class:"use-omi"})),c("g",null,c("use",{"xlink:href":"#text",class:"use-text"}),c("use",{"xlink:href":"#text",class:"use-text"}),c("use",{"xlink:href":"#text",class:"use-text"}),c("use",{"xlink:href":"#text",class:"use-text"}),c("use",{"xlink:href":"#text",class:"use-text"})))))}};A.css=[r.target,'.text {\n  font-size: 60px;\n  font-family: cursive;\n}\n\n\n/* line 19, ../../src/css/source/_chat.scss */\nsvg {\n  width: 100%;\n  height: 100%;\n}\n\n/* line 27, ../../src/css/source/_chat.scss */\n.use-text {\n  fill: none;\n  stroke: white;\n  stroke-dashoffset: 35%;\n  stroke-dasharray: 0 87.5%;\n  stroke-width: 2px;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss "#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"*/\n.use-text:nth-child(1) {\n  stroke: #777e7a;\n  animation: animation1 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(2) {\n  stroke: #777e7a;\n  animation: animation2 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(3) {\n  stroke: #777e7a;\n  animation: animation3 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(4) {\n  stroke: #777e7a;\n  animation: animation4 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(5) {\n  stroke: #777e7a;\n  animation: animation5 8s infinite ease-in-out forwards;\n\n}\n\n.use-omi {\n  fill: none;\n  stroke: white;\n  stroke-dashoffset: 35%;\n  stroke-dasharray: 0 87.5%;\n  stroke-width: 2px;\n\n}\n\n.use-omi:nth-child(1) {\n  stroke: #07c160;\n  animation: animation1 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(2) {\n  stroke: #07c160;\n  animation: animation2 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(3) {\n  stroke: #07c160;\n  animation: animation3 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(4) {\n  stroke: #07c160;\n  animation: animation4 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(5) {\n  stroke: #07c160;\n  animation: animation5 8s infinite ease-in-out forwards;\n\n}\n\n@keyframes animation1 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 7%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 7%;\n  }\n}\n\n@keyframes animation2 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 14%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 14%;\n  }\n}\n\n@keyframes animation3 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 21%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 21%;\n  }\n}\n\n@keyframes animation4 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 28%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 28%;\n  }\n}\n\n@keyframes animation5 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 35%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 35%;\n  }\n}\n'],A=((e,t,n,s)=>{for(var i,o=s>1?void 0:s?j(t,n):t,a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s?i(t,n,o):i(o))||o);return s&&o&&I(t,n,o),o})([m("admin-main-welcome")],A);const D=e=>[{label:e.base.Demo1,icon:"description",href:"#/docs/demo1",md:g((()=>import("./demo.d6adbe13.js")),[]),id:27},{label:e.base.Demo2,icon:"description",href:"#/docs/demo2",md:g((()=>import("./demo2.00871e17.js")),[]),id:17}];var R=Object.defineProperty,M=Object.getOwnPropertyDescriptor;let V=class extends l{constructor(){super(...arguments),this.data={tagName:"admin-main-welcome"}}getMdByName(e,t){const n=`#/docs/${e}`,s=t.find((e=>e.href===n));if(s)return s.md;for(let i=0,o=t.length;i<o;i++)if(t[i].children){const e=this.findNodeByHash(n,t[i].children);if(e)return e.md}}async transitionTo(e){await this.transition.leave(),this.data.tagName=e,this.update(),await this.transition.enter()}installed(){this.store.ui.myApp=this,u("/",(()=>{this.update()})),u("/welcome",(()=>{this.transitionTo("admin-main-welcome")})),u("/table/basic",(()=>{g((()=>import("./basic-table.89c3a8ea.js")),["assets/basic-table.89c3a8ea.js","assets/vendor.5dd7de05.js","assets/index.esm.3b7c1bc2.js","assets/index.esm.60684e58.js"]).then((()=>this.transitionTo("basic-table")))})),u("/dashboard",(()=>{g((()=>import("./admin-dashboard.fe1f6d87.js")),["assets/admin-dashboard.fe1f6d87.js","assets/vendor.5dd7de05.js","assets/index.esm.3b7c1bc2.js","assets/index.esm.a6ebd05d.js"]).then((()=>this.transitionTo("admin-dashboard")))})),u("/md-editor",(()=>{g((()=>import("./md-editor.5a0c3424.js")),["assets/md-editor.5a0c3424.js","assets/md-editor.b217a3ba.css","assets/vendor.5dd7de05.js"]).then((()=>this.transitionTo("md-editor")))})),u("/table/edit",(()=>{g((()=>import("./inline-editing.cb7b44a8.js")),["assets/inline-editing.cb7b44a8.js","assets/vendor.5dd7de05.js","assets/index.esm.3b7c1bc2.js","assets/index.esm.a6ebd05d.js","assets/index.esm.60684e58.js"]).then((()=>this.transitionTo("inline-editing")))})),u("/docs/:name",(e=>{this.getMdByName(e.params.name,this.store.treeData).then((e=>{this.payload={mdContent:e.default},g((()=>import("./admin-docs.88902780.js")),["assets/admin-docs.88902780.js","assets/admin-docs.3537c82c.css","assets/vendor.5dd7de05.js","assets/___vite-browser-external_commonjs-proxy.c246d441.js"]).then((()=>this.transitionTo("admin-docs")))}))})),u("/table/pagination",(()=>{g((()=>import("./pagination-table.1684ef5f.js")),["assets/pagination-table.1684ef5f.js","assets/vendor.5dd7de05.js","assets/index.esm.3b7c1bc2.js","assets/index.esm.a6ebd05d.js","assets/index.esm.60684e58.js"]).then((()=>this.transitionTo("pagination-table")))})),u("/form",(()=>{g((()=>import("./admin-form.b021b0d1.js")),["assets/admin-form.b021b0d1.js","assets/vendor.5dd7de05.js","assets/index.esm.a1c13fc3.js"]).then((()=>this.transitionTo("admin-form")))})),u("/comment",(()=>{g((()=>import("./admin-comment.47ca7a55.js")),["assets/admin-comment.47ca7a55.js","assets/admin-comment.cc2186d8.css","assets/vendor.5dd7de05.js","assets/index.esm.a1c13fc3.js"]).then((()=>this.transitionTo("admin-comment")))})),u("/icon",(()=>{g((()=>import("./admin-icon.f911eb8d.js")),["assets/admin-icon.f911eb8d.js","assets/vendor.5dd7de05.js"]).then((()=>this.transitionTo("admin-icon")))})),u("/error",(()=>{g((()=>import("./status-error.5c30bd6c.js")),["assets/status-error.5c30bd6c.js","assets/vendor.5dd7de05.js"]).then((()=>this.transitionTo("status-error")))})),u("/loading-component",(()=>{g((()=>import("./loading-component.5c13301a.js")),["assets/loading-component.5c13301a.js","assets/vendor.5dd7de05.js","assets/admin-docs.88902780.js","assets/admin-docs.3537c82c.css","assets/___vite-browser-external_commonjs-proxy.c246d441.js","assets/code-demo.1277254a.js","assets/masonry.1bbdd785.js"]).then((()=>this.transitionTo("loading-component")))})),u("/toast-component",(()=>{g((()=>import("./toast-component.9f83829d.js")),["assets/toast-component.9f83829d.js","assets/vendor.5dd7de05.js","assets/admin-docs.88902780.js","assets/admin-docs.3537c82c.css","assets/___vite-browser-external_commonjs-proxy.c246d441.js","assets/masonry.1bbdd785.js"]).then((()=>this.transitionTo("toast-component")))})),u("/card-component",(()=>{g((()=>import("./card-component.e9e6f818.js")),["assets/card-component.e9e6f818.js","assets/vendor.5dd7de05.js","assets/admin-docs.88902780.js","assets/admin-docs.3537c82c.css","assets/___vite-browser-external_commonjs-proxy.c246d441.js","assets/code-demo.1277254a.js","assets/masonry.1bbdd785.js"]).then((()=>this.transitionTo("card-component")))})),u("/warning",(()=>{g((()=>import("./status-warning.9d3af894.js")),["assets/status-warning.9d3af894.js","assets/vendor.5dd7de05.js"]).then((()=>this.transitionTo("status-warning")))})),u("*",(function(){console.log("not found")})),location.hash&&this.routeTo(location.hash)}findNodeByHash(e,t){const n=t.find((t=>t.href===e));if(n)return n;for(let s=0,i=t.length;s<i;s++)if(t[s].children){const n=this.findNodeByHash(e,t[s].children);if(n)return n}}routeTo(e){const t=this.findNodeByHash(e,this.store.treeData);if(this.store.selectTreeNodeById(t.id),!t.children){const e=this.store.tabs.find((e=>e.id===t.id));e?this.store.tabsActiveIndex=this.store.tabs.indexOf(e):(this.store.tabs.push({label:t.label,closeable:!1,id:t.id,href:t.href}),this.store.tabsActiveIndex=this.store.tabs.length-1)}t.md&&t.md.then((e=>{this.store.markdown=e.default}))}render(){return c("basic-layout",null,c("o-transition",{ref:e=>this.transition=e,appear:!0,name:"fade"},c(this.data.tagName,(e=((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&a(e,n,t[n]);if(s)for(var n of s(t))o.call(t,n)&&a(e,n,t[n]);return e})({},this.payload),r={class:h`block`},t(e,n(r))))));var e,r}};V.css=[r.target,".fade-leave-to,\n.fade-enter {\n  opacity: 0;\n  transform: translateX(15px);\n}\n\n.fade-leave-active,\n.fade-enter-active {\n  transition: all 300ms ease-in;\n}\n"],V=((e,t,n,s)=>{for(var i,o=s>1?void 0:s?M(t,n):t,a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s?i(t,n,o):i(o))||o);return s&&o&&R(t,n,o),o})([m("my-app")],V),new class{constructor(e){this.themeColor="#07c160",this.installed=e.installed,this.locale=e.locale,this.isLeftPanelClosed=window.innerWidth<640,this.ignoreAttrs=!0,this.ui={},this.markdown="",this.html="",this.localeMap={},this.setLocals(this.locale,(()=>{this.tabs=[{label:this.localeMap.base.Welcome,href:"#/welcome",closable:!1,id:2}],this.tabsActiveIndex=0})),this.isInstalled=!1}setLocals(e,t){this.locale=e,function(e){switch(e){case"./l10n/en/base.ts":return g((()=>import("./base.e4d6a983.js")),[]);case"./l10n/zh/base.ts":return g((()=>import("./base.87716c35.js")),[]);default:return new Promise((function(t,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./l10n/${e}/base.ts`).then((e=>{this.localeMap=e,t&&t(),this.treeData=[{label:e.base.ManagerWorkbench,sign:"●",expanded:!0,id:1,icon:"ac-unit-outlined",children:[{sign:"M",label:e.base.WelcomePage,icon:"emoji-people",color:"#07c160",selected:!0,href:"#/welcome",id:2},{label:e.base.Dashboard,icon:"dashboard",href:"#/dashboard",id:98},{label:e.base.BasicTable,icon:"grid-on",href:"#/table/basic",id:4},{label:e.base.TableDeleteAnimation,icon:"grid-on",href:"#/table/pagination",id:5},{label:e.base.InlineEditing,icon:"grid-on",href:"#/table/edit",id:25},{label:e.base.Form,expanded:!0,id:9,href:"#/form",icon:"list-alt"},{label:e.base.MarkdownEditor,icon:"grid-on",href:"#/md-editor",id:26},{label:e.base.MaterialIcons,expanded:!0,id:10,href:"#/icon",icon:"sentiment-satisfied-alt"}]},{label:e.base.Others,sign:"●",expanded:!0,id:6,icon:"ac-unit-outlined",children:[{sign:"90020",label:e.base.Error,icon:"error",color:"#F56C6C",href:"#/error",id:7},{sign:"993",label:e.base.Warning,icon:"warning",color:"#E6A23C",href:"#/warning",id:8},{sign:"993",label:e.base.Comment,icon:"comment",href:"#/comment",id:120},{label:e.base.ExternalLink,icon:"insert-link",href:"https://github.com/Tencent/omi",id:119,target:"_blank"}]},{label:e.base.MarkdownDocs,expanded:!0,id:6,icon:"ac-unit-outlined",children:D(e)},{label:e.base.Components,expanded:!0,id:11,icon:"ac-unit-outlined",children:[{label:e.base.Loading,id:12,icon:"ac-unit-outlined",href:"#/loading-component"},{label:e.base.Toast,id:13,icon:"ac-unit-outlined",href:"#/toast-component"},{label:e.base.Card,id:14,icon:"ac-unit-outlined",href:"#/card-component"}]}],this.tabs.forEach((e=>{e.label=this.getTabLabelById(e.id)})),this.isInstalled?this.ui.myApp.update():(this.installed(this),this.isInstalled=!0)}))}getTabLabelById(e){const t=this.treeData.find((t=>t.id===e));if(t)return t.label;for(let n=0,s=this.treeData.length;n<s;n++){const t=this.treeData[n].children.find((t=>t.id===e));if(t)return t.label}}toggleLeftPanel(){this.isLeftPanelClosed=!this.isLeftPanelClosed,this.ui.baseLayout.update()}openLeftPanel(){this.isLeftPanelClosed=!1,this.ui.baseLayout.update()}closeLeftPanel(){this.isLeftPanelClosed=!0,this.ui.baseLayout.update()}selectTreeNodeById(e){this.treeData.forEach((t=>{this.deselect(t,e)}))}deselect(e,t){e.selected=!1,e.children&&e.children.forEach((e=>{e.selected=!1,this.deselect(e,t)})),e.id===t&&(e.selected=!0)}}({locale:"zh",installed(e){f(c("my-app",{name:"Omi"}),"#root",e)}});export{g as _};
