(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(e,t,a){"use strict";a.r(t);var r,s,l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHr LpR lFr"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",{staticClass:"bg-primary text-white"},[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.drawer.left=!e.drawer.left}}}),a("q-toolbar-title",[e._v("\n        "+e._s(e.app.title)+"\n        "),a("q-item-label",{staticClass:"text-white",attrs:{caption:""}},[e._v(e._s(e.app.subTitle)+" v."+e._s(e.app.version))])],1),e.$q.fullscreen.isCapable?a("q-btn",{attrs:{icon:e.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen",flat:"",dense:"",round:""},on:{click:function(t){return e.$q.fullscreen.toggle()}}}):e._e(),a("q-btn",{attrs:{icon:e.$q.dark.isActive?"light_mode":"dark_mode",flat:"",dense:"",round:""},on:{click:function(t){return e.$q.dark.toggle()}}}),a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"more_vert"},on:{click:function(t){e.drawer.right=!e.drawer.right}}})],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:""},model:{value:e.drawer.left,callback:function(t){e.$set(e.drawer,"left",t)},expression:"drawer.left"}},[a("q-splitter",{staticStyle:{height:"100vh"},attrs:{unit:"px",horizontal:""},scopedSlots:e._u([{key:"before",fn:function(){return[a("device-management",{attrs:{height:e.hDeviceManagement}})]},proxy:!0},{key:"separator",fn:function(){return[a("q-avatar",{attrs:{color:"grey","text-color":"white",size:"20px",icon:"drag_indicator"}})]},proxy:!0},{key:"after",fn:function(){return[a("report-reader",{attrs:{height:e.splitter}})]},proxy:!0}]),model:{value:e.splitter,callback:function(t){e.splitter=t},expression:"splitter"}})],1),a("q-drawer",{attrs:{side:"right","show-if-above":"",bordered:""},model:{value:e.drawer.right,callback:function(t){e.$set(e.drawer,"right",t)},expression:"drawer.right"}},[a("command-management",{style:e.hCommandManagement}),a("response-log",{attrs:{height:e.hResponseLog}})],1),a("q-page-container",[a("router-view")],1)],1)},i=[],n=a("ded3"),o=a.n(n),c=a("5662"),d=a("2f62"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-bar",{staticClass:"bg-blue text-white"},[a("q-toolbar-title",{staticClass:"text-subtitle1"},[e._v("Report Reader")]),a("q-btn",{attrs:{icon:e.treeState?"list":"account_tree",color:"primary",unelevated:"",push:"",dense:""},on:{click:function(t){e.treeState=!e.treeState}}},[a("q-tooltip",{attrs:{anchor:"center left",self:"center right"}},[e._v(e._s(e.treeState?"List":"Tree"))])],1)],1),e.theReport?[e.treeState?a("tree-report-reader",{attrs:{selected:e.field,report:e.theReport,height:e.hTree},on:{"update:selected":e.open}}):a("list-report-reader",{attrs:{selected:e.field,report:e.theReport,height:e.hList},on:{"update:selected":e.open}})]:a("q-banner",{scopedSlots:e._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[e._v("\n    No active report yet\n  ")]),e.field?a("report-history-modal",{attrs:{field:e.field},on:{close:function(t){return e.reset()}}}):e._e()],2)},u=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-dialog",{attrs:{maximized:e.$q.screen.lt.md,"full-height":"","full-width":""},on:{hide:function(t){return e.$emit("close")}},model:{value:e.modalOpen,callback:function(t){e.modalOpen=t},expression:"modalOpen"}},[a("q-layout",{attrs:{view:"Lhh lpR fff",container:""}},[a("q-header",{staticClass:"bg-primary"},[a("q-toolbar",[a("q-toolbar-title",[e.$q.screen.gt.sm?a("span",{staticClass:"text-weight-bold"},[e._v("HISTORY")]):e._e(),e._v("\n          "+e._s(this.theField.title)+"\n          "),e.chart.data?a("q-chip",{attrs:{dark:"",dense:"",square:""}},[e._v(e._s(e.chart.data.labels.length))]):e._e()],1),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),a("q-page-container",[a("q-page",{class:e.$q.dark.isActive?"bg-black":"bg-white",attrs:{padding:""}},[a("div",{staticClass:"row"},[a("div",{class:e.eventGroup?"col-xs-12 col-sm-12 col-md-8 col-lg-9":"col-12"},[a("div",{staticClass:"q-pa-sm"},[a("line-chart",{staticStyle:{height:"60vh"},attrs:{param:e.chart,update:e.history.update}}),a("q-range",{attrs:{min:e.range.min,max:e.range.max,disable:e.range.disable,"drag-range":e.control.drag,snap:"",square:""},model:{value:e.range.value,callback:function(t){e.$set(e.range,"value",t)},expression:"range.value"}}),a("div",{staticClass:"row justify-between items-center content-center"},[a("div",{staticClass:"col-auto"},[a("q-toggle",{staticClass:"q-ma-xs",attrs:{label:"Begin Zero"},model:{value:e.control.beginAtZero,callback:function(t){e.$set(e.control,"beginAtZero",t)},expression:"control.beginAtZero"}}),a("q-toggle",{staticClass:"q-ma-xs",attrs:{disable:e.control.maximize,label:"Lock Window"},model:{value:e.control.drag,callback:function(t){e.$set(e.control,"drag",t)},expression:"control.drag"}}),a("q-toggle",{staticClass:"q-ma-xs",attrs:{disable:e.control.maximize,label:"Follow Data"},model:{value:e.control.follow,callback:function(t){e.$set(e.control,"follow",t)},expression:"control.follow"}}),a("q-toggle",{staticClass:"q-ma-xs",attrs:{label:"Max Range"},model:{value:e.control.maximize,callback:function(t){e.$set(e.control,"maximize",t)},expression:"control.maximize"}})],1),a("div",{staticClass:"col-auto"},[a("q-input",{staticClass:"q-ma-xs",staticStyle:{width:"130px"},attrs:{value:e.rangeSample,type:"number",prefix:"Sample :",disable:"","hide-bottom-space":"",filled:"",dense:""}})],1)])],1)]),e.eventGroup?a("div",{staticClass:"col-xs-12 col-sm-12 col-md-4 col-lg-3"},[a("div",{staticClass:"q-pa-sm scroll"},[a("event-group-reader",{attrs:{"current-value":e.currentValue}})],1)]):e._e()])])],1)],1)],1)},m=[],b=a("d87e"),g=a("1a0d"),f=a("ab1c"),v=a("1fca"),x={extends:v["a"],props:{param:{type:Object,required:!0},update:{type:Object,required:!0},dark:{type:Boolean,default:!1}},mounted(){this.render()},methods:{render(){this.renderChart(this.param.data,this.param.options)}},watch:{"update.data":function(e){this.$data._chart.update()},"update.options":function(e){this.render()}}},q=x,y=a("2877"),_=Object(y["a"])(q,r,s,!1,null,null,null),k=_.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-list",{attrs:{bordered:""}},e._l(e.devEvents,(function(t,r){return a("q-expansion-item",{key:r,attrs:{label:r+" ",caption:"("+t.length+") times","header-class":"text-"+(e.activeEvent(r)?"green":"grey"),"expand-separator":""}},[a("q-virtual-scroll",{staticStyle:{"max-height":"50vh"},attrs:{items:t,separator:""},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.item;return[a("q-item",{key:r+"-"+s.time},[a("q-item-section",[a("q-item-label",{attrs:{caption:""}},[e._v(e._s(s.time))])],1)],1)]}}],null,!0)})],1)})),1)},O=[],w=a("95e6"),Q=a("2ef0"),M=a("ae51"),j={props:{currentValue:Number},mixins:[M["a"]],data(){return{EVENT_LIST:Object(Q["cloneDeep"])(w["a"])}},computed:o()({},Object(d["c"])("db",[b["c"]])),methods:{activeEvent(e){let t=w["a"].find((({name:t})=>t===e)).bit;return Object(w["b"])(this.currentValue,t)}}},S=j,R=a("1c1c"),L=a("3b73"),I=a("a12b"),T=a("66e5"),$=a("4074"),A=a("0170"),D=a("eebe"),E=a.n(D),N=Object(y["a"])(S,C,O,!1,null,null,null),B=N.exports;E()(N,"components",{QList:R["a"],QExpansionItem:L["a"],QVirtualScroll:I["a"],QItem:T["a"],QItemSection:$["a"],QItemLabel:A["a"]});a("ddb0");var z=a("c1df"),F=a.n(z);const V=a("6612");var Z={data:{labels:[],datasets:[{data:[],label:"",backgroundColor:"#f87979",fill:!0,showLine:!0,pointRadius:2}]},options:{animation:{duration:10},responsive:!0,maintainAspectRatio:!1,legend:{display:!1,align:"end",labels:{fontColor:"#666"}},scales:{xAxes:[{ticks:{callback:function(e){return F.a.unix(e).format("HH:mm:ss")},max:1,min:0,fontColor:"#666"},scaleLabel:{display:!0,labelString:"Log Datetime",fontColor:"#666"},gridLines:{display:!0,lineWidth:.3,color:"#666"}}],yAxes:[{ticks:{callback:function(e){return V(e).format("0.00a")},beginAtZero:!0,max:1,min:0,fontColor:"#666"},scaleLabel:{display:!0,labelString:"Value",fontColor:"#666"},gridLines:{display:!0,lineWidth:.3,color:"#666"}}]}}},P={data(){return{chart:Object(Q["cloneDeep"])(Z),history:{update:{data:!1,options:!1}}}},methods:{setChartScales({xMin:e,xMax:t,yMin:a,yMax:r},{beginAtZero:s}){this.chart.options.scales.xAxes[0].ticks.max=t,this.chart.options.scales.xAxes[0].ticks.min=e,this.chart.options.scales.yAxes[0].ticks.max=r,this.chart.options.scales.yAxes[0].ticks.min=a,this.chart.options.scales.yAxes[0].ticks.beginAtZero=s,this.history.update.options=!this.history.update.options},setChartData({labels:e,datasets:t}){this.chart.data.labels.push(...e),this.chart.data.datasets[0].data.push(...t),this.history.update.data=!this.history.update.data},setChartLabel({title:e,unit:t}){this.chart.data.datasets[0].label=e,this.chart.options.scales.yAxes[0].scaleLabel.labelString=t||"Value",this.history.update.options=!this.history.update.options},setChartColor(e){this.chart.options.legend.labels.fontColor=e,this.chart.options.scales.xAxes[0].ticks.fontColor=e,this.chart.options.scales.xAxes[0].scaleLabel.fontColor=e,this.chart.options.scales.xAxes[0].gridLines.color=e,this.chart.options.scales.yAxes[0].ticks.fontColor=e,this.chart.options.scales.yAxes[0].scaleLabel.fontColor=e,this.chart.options.scales.yAxes[0].gridLines.color=e,this.history.update.options=!this.history.update.options}}};a("26e9");const H=({labels:e},{min:t,max:a})=>{let r=t?e.findIndex((e=>e>=t)):0,s=a?Object(Q["findLastIndex"])(e,(e=>e<=a)):e.length-1;return{iMin:r,iMax:s}},G=({labels:e},{iMin:t,iMax:a})=>{let r=e[t],s=e[a];return{xMin:r,xMax:s}},U=({data:e},{beginAtZero:t},{iMin:a,iMax:r})=>{let s=e.filter(((e,t)=>t>=a&&t<=r)),l=Object(Q["min"])(s),i=Object(Q["max"])(s);return t&&(l>0?l=0:i=0),i==l&&(l>=0?i+=1:l-=1),{yMin:l,yMax:i}},W=({labels:e},t)=>t>=0?e[t]:e[e.length-1],J=(e,t)=>{let a=[],r=[];return e.forEach((e=>{e[t]&&(a.push(e[t].val),r.push(e.logDatetime.val))})),{datasets:a.reverse(),labels:r.reverse()}};var K={props:{field:{required:!0}},mixins:[M["a"],P],components:{LineChart:k,EventGroupReader:B},data(){return{currentValue:0,modalOpen:!1,tmp:{max:null,sample:null,follow:!1,drag:!1},range:{disable:!1,sample:10,min:0,max:null,value:{min:0,max:null}},control:{beginAtZero:!1,maximize:!0,follow:!1,drag:!1}}},computed:o()(o()({},Object(d["c"])("db",[b["f"],b["c"]])),{},{theField(){return Object(g["f"])(f["a"],this.field)},eventGroup(){return"eventsGroup"===this.field&&Object.keys(this.devEvents).length>0},rangeSample(){let{iMin:e,iMax:t}=H(this.chart.data,this.range.value);return t-e+1}}),methods:{applyRange(e){let{iMin:t,iMax:a}=H(this.chart.data,this.range.value),{xMax:r}=G(this.chart.data,{iMin:t,iMax:a}),s=a-t;(this.control.maximize||this.control.follow)&&(a=this.chart.data.labels.length-1,r=W(this.chart.data,a),this.control.maximize&&(t=0)),e?e--:(e=a-t,this.control.drag&&(e=s,this.control.follow||(r=W(this.chart.data,t+e)))),this.range.value={min:W(this.chart.data,a-e),max:r}},scaleChart(){let e=H(this.chart.data,this.range.value),{xMin:t,xMax:a}=G(this.chart.data,e),{yMin:r,yMax:s}=U(this.chart.data.datasets[0],this.control,e);this.currentValue=a,this.setChartScales({xMin:t,xMax:a,yMin:r,yMax:s},this.control),this.$nextTick((()=>this.modalOpen=!0))},writeChart(e){this.setChartData(J(e,this.field)),this.range.min=W(this.chart.data,0),this.range.max=W(this.chart.data,-1)}},mounted(){this.setChartLabel(this.field),this.writeChart(this.devReports),this.applyRange()},watch:{"devReports.0":{handler(e){e&&e[this.field]&&(this.writeChart([e]),this.applyRange())}},"control.maximize":{immediate:!0,handler(e){let t=null;e?(this.tmp.max=this.range.value.max,this.tmp.sample=this.rangeSample,this.tmp.drag=this.control.drag,this.tmp.follow=this.control.follow,this.range.disable=!0,this.control.follow=!1,this.control.drag=!1):(this.range.disable=!1,this.control.follow=this.tmp.follow,this.control.drag=this.tmp.drag,this.range.value.max=this.tmp.max,t=this.tmp.sample),this.applyRange(t)}},"range.value":{deep:!0,handler(e){this.scaleChart()}},"control.beginAtZero":{handler(e){this.scaleChart()}},"$q.dark.isActive":{immediate:!0,handler(e){this.setChartColor(e?"#FFF":"#666")}}}},Y=K,X=a("24e8"),ee=a("4d5a"),te=a("e359"),ae=a("65c6"),re=a("6ac5"),se=a("b047"),le=a("9c40"),ie=a("09e3"),ne=a("9989"),oe=a("7bbf"),ce=a("9564"),de=a("27f9"),pe=a("7f67"),ue=Object(y["a"])(Y,h,m,!1,null,null,null),he=ue.exports;E()(ue,"components",{QDialog:X["a"],QLayout:ee["a"],QHeader:te["a"],QToolbar:ae["a"],QToolbarTitle:re["a"],QChip:se["a"],QBtn:le["a"],QPageContainer:ie["a"],QPage:ne["a"],QRange:oe["a"],QToggle:ce["a"],QInput:de["a"]}),E()(ue,"directives",{ClosePopup:pe["a"]});var me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-input",{attrs:{placeholder:"Filter...",clearable:"",filled:"",dense:""},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("div",{staticStyle:{"overflow-y":"scroll"},style:e.height},[a("q-tree",{attrs:{selected:e.selected,nodes:e.nodes,filter:e.filter,color:"primary","node-key":"label","default-expand-all":""},on:{"update:selected":function(t){return e.$emit("update:selected",t)}},scopedSlots:e._u([{key:"default-header",fn:function(t){var r=t.node;return[a("span",{staticClass:"text-weight-bold"},[e._v(e._s(e.getFieldNodeTitle(r.label)))]),r.data?a("span",[e._v(": "+e._s(r.data.out)+" "+e._s(r.data.unit))]):e._e()]}}])})],1)],1)},be=[],ge=(a("13d5"),a("5319"),{emits:["update:selected"],props:{report:{required:!0},selected:{required:!0},height:{required:!0}},data(){return{filter:""}},computed:{nodes(){return this.report?this.toArrayTree(this.groupNodes()):[]}},methods:{getFieldNodeTitle(e){let t=this.report[e];if(t){let e=t.group.split(".");return this.removeWords(t.title,e)}return e.toUpperCase()},removeWords(e,t){return t.reduce(((e,t)=>{const a=new RegExp(t,"gi");return e.replace(a,"")}),e)},groupBy(e){return Object.keys(e).reduce(((t,a)=>{let r=e[a],{group:s}=r,l=[o()(o()({},r),{},{field:a})];return t[s]&&(l=[...t[s],...l]),o()(o()({},t),{},{[s]:l})}),{})},groupNodes(){let e=this.groupBy(Object(Q["omit"])(this.report,"hex")),t=Object.keys(e).reduce(((t,a)=>Object(Q["set"])(t,a,e[a].reduce(((e,t)=>o()(o()({},e),{},{[t.field]:t})),{}))),{});return t},toArrayTree(e){return Object.keys(e).map((t=>e[t].hasOwnProperty("field")?{label:t,data:e[t]}:{label:t,children:this.toArrayTree(e[t])}))}}}),fe=ge,ve=a("7f41"),xe=Object(y["a"])(fe,me,be,!1,null,null,null),qe=xe.exports;E()(xe,"components",{QInput:de["a"],QTree:ve["a"]});var ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-virtual-scroll",{style:e.height,attrs:{items:e.fields,separator:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[a("q-item",{key:r,attrs:{active:e.selected==r,"active-class":"bg-primary text-white",clickable:""},on:{click:function(t){return e.$emit("update:selected",r)}}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[e._v(e._s(e.report[r].title))]),a("q-item-label",{attrs:{lines:"2",caption:""}},[e._v("\n          "+e._s(e.report[r].out)+"\n          "+e._s(e.report[r].unit)+"\n        ")])],1),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:e.realtime(r)?"cloud_download":"cloud_off",color:e.realtime(r)?"green":"red"}})],1)],1)]}}])})},_e=[],ke={props:{report:{required:!0},selected:{required:!0},height:{required:!0}},computed:{fields(){return Object.keys(Object(Q["omit"])(this.report,"hex"))}},methods:{realtime(e){let{required:t}=Object(g["f"])(f["a"],e);return this.report.frameID.val===Object(g["e"])("FULL")||t}}},Ce=ke,Oe=a("0016"),we=Object(y["a"])(Ce,ye,_e,!1,null,null,null),Qe=we.exports;E()(we,"components",{QVirtualScroll:I["a"],QItem:T["a"],QItemSection:$["a"],QItemLabel:A["a"],QIcon:Oe["a"]});var Me={mixins:[M["a"]],props:{height:{required:!0}},components:{ReportHistoryModal:he,TreeReportReader:qe,ListReportReader:Qe},data(){return{field:null}},computed:o()(o()(o()(o()({},Object(d["e"])("db",["report"])),Object(d["e"])("common",["tree"])),Object(d["c"])("db",[b["f"]])),{},{treeState:{get(){return this.tree},set(e){this.SET_TREE(e)}},theReport(){if(!this.report)return;let e=Object(f["d"])(this.report);if(this.report.frameId!=Object(g["e"])("FULL")){let t=Object(f["b"])(this.report,this.devReports);t&&(e=o()(o()({},Object(f["d"])(t)),e))}return e},hList(){return`height: calc(100vh - ${this.height}px - 34px)`},hTree(){return` height: calc(100vh - ${this.height}px - 73px)`}}),methods:o()(o()({},Object(d["d"])("common",[c["e"]])),{},{open(e){if(!e)return;let t=Object(g["f"])(f["a"],e);if(!Object(Q["get"])(t,"chartable"))return;let a=this.devReports.filter((({[e]:t})=>t));a.length<2||(this.field=e)},reset(){this.field=null}})},je=Me,Se=a("d847"),Re=a("05c0"),Le=a("54e1"),Ie=Object(y["a"])(je,p,u,!1,null,null,null),Te=Ie.exports;E()(Ie,"components",{QBar:Se["a"],QToolbarTitle:re["a"],QBtn:le["a"],QTooltip:Re["a"],QBanner:Le["a"],QIcon:Oe["a"]});var $e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-bar",{staticClass:"bg-blue text-white"},[a("q-toolbar-title",{staticClass:"text-subtitle1"},[e._v("\n      Device Management\n      "),e.devices.length>0?a("q-badge",{attrs:{color:"red",align:"top"}},[e._v(e._s(e.devices.length))]):e._e()],1)],1),0==e.devices.length?a("q-banner",{scopedSlots:e._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[e._v("\n    No unit yet\n  ")]):a("q-virtual-scroll",{style:e.height,attrs:{items:e.devices,separator:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item,s=t.index;return[a("q-item",{key:s,attrs:{active:e.active(r),"active-class":"bg-primary text-white",clickable:!e.loading,dense:""},on:{click:function(t){return e.SET_UNITID(r.unitID)}}},[a("q-item-section",[a("q-item-label",{staticClass:"text-subtitle2"},[e._v(e._s(r.unitID.toString()))])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",{class:{"text-white":e.active(r)},attrs:{caption:""}},[e._v(e._s(e.devLastReport(r.unitID)))]),a("q-item-label",{class:{"text-white":e.active(r)},attrs:{caption:""}},[a("b",[e._v(e._s(e.devTotalReports(r.unitID)))]),e._v(" reports\n          ")])],1)],1)]}}])})],1)},Ae=[],De=a("a7bc"),Ee={mixins:[M["a"]],props:{height:{required:!0}},computed:o()(o()({},Object(d["e"])("db",["devices"])),Object(d["c"])("db",[b["b"],b["h"],b["e"]])),methods:o()(o()({},Object(d["d"])("db",[De["j"]])),{},{active({unitID:e}){return e===Object(Q["get"])(this.devDevice,"unitID")}})},Ne=Ee,Be=a("58a81"),ze=Object(y["a"])(Ne,$e,Ae,!1,null,null,null),Fe=ze.exports;E()(ze,"components",{QBar:Se["a"],QToolbarTitle:re["a"],QBadge:Be["a"],QBanner:Le["a"],QIcon:Oe["a"],QVirtualScroll:I["a"],QItem:T["a"],QItemSection:$["a"],QItemLabel:A["a"]});var Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-bar",{staticClass:"bg-blue text-white"},[a("q-toolbar-title",{staticClass:"text-subtitle1"},[e._v("\n      Response Log\n      "),e.devResponses.length>0?a("q-badge",{attrs:{color:"red",align:"top"}},[e._v(e._s(e.devResponses.length))]):e._e()],1)],1),0==e.devResponses.length?a("q-banner",{scopedSlots:e._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[e._v("\n    No response yet\n  ")]):a("q-virtual-scroll",{style:e.height,attrs:{items:e.devResponses,separator:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item,s=t.index;return[a("q-item",{key:s,attrs:{clickable:!e.loading},on:{click:function(t){return e.writeCommand(r)}}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[e._v(e._s(r.payload))]),a("q-item-label",{attrs:{lines:"2",caption:""}},[e._v(e._s(e.parseMessage(r.message)))])],1),a("q-item-section",{attrs:{side:""}},[a("q-chip",{attrs:{color:e.parseResCode(r.resCode).color,dark:"",dense:"",square:""}},[e._v(e._s(e.parseResCode(r.resCode).title))])],1)],1)]}}])})],1)},Ze=[],Pe=a("595a"),He=a("6ad4"),Ge={mixins:[M["a"]],props:{height:{required:!0}},computed:o()({},Object(d["c"])("db",[b["g"]])),methods:o()(o()({},Object(d["b"])("db",[He["a"]])),{},{writeCommand({payload:e}){this.INSERT_COMMAND({payload:e,exec:!1})},parseResCode(e){return Object(Pe["b"])(e)},parseMessage(e){return Object(Pe["a"])(e)}})},Ue=Ge,We=Object(y["a"])(Ue,Ve,Ze,!1,null,null,null),Je=We.exports;E()(We,"components",{QBar:Se["a"],QToolbarTitle:re["a"],QBadge:Be["a"],QBanner:Le["a"],QIcon:Oe["a"],QVirtualScroll:I["a"],QItem:T["a"],QItemSection:$["a"],QItemLabel:A["a"],QChip:se["a"]});var Ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-bar",{staticClass:"bg-blue text-white"},[a("q-toolbar-title",{staticClass:"text-subtitle1"},[e._v("Command Management")]),e.COMMAND_LIST.length>0?a("q-btn",{attrs:{color:"primary",icon:"info",dense:"",push:"",unelevated:""},nativeOn:{click:function(t){e.modalOpen=!0}}},[a("q-tooltip",{attrs:{anchor:"center left",self:"center right"}},[e._v("List")])],1):e._e()],1),a("div",{staticClass:"q-pa-sm"},[a("q-input",{attrs:{label:"Input Command:",hint:"Press ENTER to send.",type:"text","stack-label":"",disable:e.loading||!e.devDevice,readonly:e.loading,loading:e.loading},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.execCommand()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"send"},on:{click:function(t){return e.execCommand()}}})]},proxy:!0}]),model:{value:e.payload,callback:function(t){e.payload=t},expression:"payload"}})],1),a("command-list-modal",{on:{select:e.writeCommand},model:{value:e.modalOpen,callback:function(t){e.modalOpen=t},expression:"modalOpen"}})],1)},Ye=[],Xe=a("95f8"),et=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-dialog",{attrs:{maximized:e.$q.screen.lt.md,"full-width":"","full-height":""},model:{value:e.modalOpen,callback:function(t){e.modalOpen=t},expression:"modalOpen"}},[a("q-layout",{attrs:{view:"Lhh lpR fff",container:""}},[a("q-header",{staticClass:"bg-primary"},[a("q-toolbar",[e.$q.screen.gt.xs?[a("q-toolbar-title",[a("span",{staticClass:"text-weight-bold"},[e._v("COMMAND LIST")]),e.COMMAND_LIST.length>0?a("q-chip",{attrs:{dark:"",dense:"",square:""}},[e._v(e._s(e.COMMAND_LIST.length))]):e._e()],1),a("q-space")]:e._e(),a("q-input",{class:{"full-width":e.$q.screen.lt.sm},attrs:{placeholder:"Filter...",dark:"",clearable:"",square:"",outlined:"",dense:""},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ml-sm",attrs:{flat:"",round:"",dense:"",icon:"close"}})],2)],1),a("q-page-container",[a("q-page",{class:e.$q.dark.isActive?"bg-black":"bg-white",attrs:{padding:""}},[0==e.searchResults.length?a("q-banner",{scopedSlots:e._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[e._v("\n          No matching commands\n        ")]):a("q-virtual-scroll",{attrs:{items:e.searchResults,separator:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item,s=t.index;return[a("q-item",{key:s,attrs:{clickable:!e.loading},on:{click:function(t){return e.select(r)}}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[e._v(e._s(r.command))]),a("q-item-label",{attrs:{lines:"2",caption:""}},[e._v(e._s(r.desc))])],1),r.type?a("q-item-section",{attrs:{side:""}},[a("q-item-label",{attrs:{lines:"1"}},[a("q-chip",{attrs:{dark:"",dense:"",square:"",color:"grey"}},[e._v(e._s(r.type))])],1),r.range?a("q-item-label",{attrs:{lines:"2"}},[a("q-chip",{attrs:{dark:"",dense:"",square:"",color:"primary"}},[e._v(e._s(e.getRange(r.range)))])],1):e._e()],1):e._e()],1)]}}])})],1)],1)],1)],1)},tt=[],at={emits:["select"],props:{value:{required:!0,type:Boolean}},mixins:[M["a"]],data(){return{COMMAND_LIST:Object(Q["cloneDeep"])(Xe["a"]),keyword:""}},computed:{modalOpen:{get(){return this.value},set(e){this.$emit("input",e)}},searchResults(){return Object(g["d"])(this.COMMAND_LIST,this.keyword||"")}},methods:{getRange(e){const[t,a]=e;return a?`[ ${t}, ${a} ]`:`[ ${t} ]`},select({command:e}){this.$emit("select",e),this.modalOpen=!1}}},rt=at,st=a("2c91"),lt=Object(y["a"])(rt,et,tt,!1,null,null,null),it=lt.exports;E()(lt,"components",{QDialog:X["a"],QLayout:ee["a"],QHeader:te["a"],QToolbar:ae["a"],QToolbarTitle:re["a"],QChip:se["a"],QSpace:st["a"],QInput:de["a"],QBtn:le["a"],QPageContainer:ie["a"],QPage:ne["a"],QBanner:Le["a"],QIcon:Oe["a"],QVirtualScroll:I["a"],QItem:T["a"],QItemSection:$["a"],QItemLabel:A["a"]}),E()(lt,"directives",{ClosePopup:pe["a"]});var nt={mixins:[M["a"]],components:{CommandListModal:it},data(){return{COMMAND_LIST:Object(Q["cloneDeep"])(Xe["a"]),modalOpen:!1}},computed:o()(o()(o()({},Object(d["e"])("db",["command"])),Object(d["c"])("db",[b["b"]])),{},{payload:{get(){return this.command.payload},set(e){this.INSERT_COMMAND({payload:e.toUpperCase(),exec:!1})}}}),methods:o()(o()({},Object(d["b"])("db",[He["a"]])),{},{writeCommand(e){this.payload=e},execCommand(){this.INSERT_COMMAND({payload:this.payload,exec:!0})}})},ot=nt,ct=Object(y["a"])(ot,Ke,Ye,!1,null,null,null),dt=ct.exports;E()(ct,"components",{QBar:Se["a"],QToolbarTitle:re["a"],QBtn:le["a"],QTooltip:Re["a"],QInput:de["a"],QIcon:Oe["a"]});var pt=a("110e"),ut={name:"MyLayout",mixins:[M["a"]],components:{ReportReader:Te,DeviceManagement:Fe,ResponseLog:Je,CommandManagement:dt},data(){return{drawer:{left:this.$q.platform.is.desktop,right:!1},app:pt["a"].app,splitter:150}},computed:o()(o()({},Object(d["e"])("common",["darker"])),{},{hCommandManagement(){return"height: 120px"},hResponseLog(){return`height: calc(100vh - ${this.hCommandManagement} - 33px)`},hDeviceManagement(){return`height: calc(${this.splitter}px - 32px)`}}),methods:o()({},Object(d["d"])("common",[c["b"]])),mounted(){this.$q.dark.set(this.darker)},watch:{"$q.dark.isActive":function(e){this.SET_DARKER(e)}}},ht=ut,mt=a("9404"),bt=a("8562"),gt=a("cb32"),ft=Object(y["a"])(ht,l,i,!1,null,null,null);t["default"]=ft.exports;E()(ft,"components",{QLayout:ee["a"],QHeader:te["a"],QToolbar:ae["a"],QBtn:le["a"],QToolbarTitle:re["a"],QItemLabel:A["a"],QDrawer:mt["a"],QSplitter:bt["a"],QAvatar:gt["a"],QPageContainer:ie["a"]})}}]);