(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(t,e,a){"use strict";a.r(e);var r,s,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHr LpR lFr"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",{staticClass:"bg-primary text-white"},[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.drawer.left=!t.drawer.left}}}),a("q-toolbar-title",[t._v("\n        "+t._s(t.$config.app.title)+"\n        "),a("q-item-label",{staticClass:"text-white",attrs:{caption:""}},[t._v("\n          "+t._s(t.$config.app.subTitle)+" v."+t._s(t.$config.app.version)+"\n        ")])],1),t.$q.fullscreen.isCapable?a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:t.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},on:{click:function(e){return t.$q.fullscreen.toggle()}}}):t._e(),a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"more_vert"},on:{click:function(e){t.drawer.right=!t.drawer.right}}})],1)],1),a("q-drawer",{attrs:{"content-class":t.darkerClass,"show-if-above":"",bordered:""},model:{value:t.drawer.left,callback:function(e){t.$set(t.drawer,"left",e)},expression:"drawer.left"}},[a("q-splitter",{staticStyle:{height:"100vh"},attrs:{unit:"px",horizontal:""},scopedSlots:t._u([{key:"before",fn:function(){return[a("unit-management",{attrs:{height:t.splitter}})]},proxy:!0},{key:"separator",fn:function(){return[a("q-avatar",{staticClass:"text-right",attrs:{color:"secondary","text-color":"white",size:"20px",icon:"drag_indicator"}})]},proxy:!0},{key:"after",fn:function(){return[a("report-reader",{attrs:{height:t.splitter}})]},proxy:!0}]),model:{value:t.splitter,callback:function(e){t.splitter=e},expression:"splitter"}})],1),a("q-drawer",{attrs:{side:"right","content-class":t.darkerClass,"show-if-above":"",bordered:""},model:{value:t.drawer.right,callback:function(e){t.$set(t.drawer,"right",e)},expression:"drawer.right"}},[a("command-management",{staticStyle:{height:"120px"}}),a("response-log",{attrs:{height:120}})],1),a("q-page-container",[a("router-view")],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-bar",{staticClass:"bg-blue text-white"},[a("q-toolbar-title",{staticClass:"text-subtitle1"},[t._v("\n      Response Reader\n    ")]),t.theReport?a("q-badge",{attrs:{color:t.fullFrame?"green":"light-green"}},[t._v("\n      "+t._s(t.fullFrame?"FULL":"SIMPLE")+"\n    ")]):t._e()],1),a("q-virtual-scroll",{style:"height: calc(100vh - "+t.height+"px - 34px)",attrs:{items:t.reportFields,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;e.index;return[a("q-item",{key:r,attrs:{clickable:t.hasHistory(r),active:t.historyField==r,"active-class":"bg-primary text-white",dark:t.darker},on:{click:function(e){return t.openHistory(r)}}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v("\n            "+t._s(t.getSubField(r,"title"))+"\n          ")]),a("q-item-label",{attrs:{lines:"2",caption:""}},[t._v("\n            "+t._s(t.theReportData[r].out)+"\n            "+t._s(t.getSubField(r,"unit"))+"\n          ")])],1),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:t.realtimeField(r)?"cloud_download":"cloud_off",color:t.realtimeField(r)?"green":"red"}})],1)],1)]}},{key:"after",fn:function(){return[0==t.reportFields.length?a("q-banner",{attrs:{dark:t.darker},scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[t._v("\n        No active report yet\n      ")]):t._e()]},proxy:!0}])}),t.historyField?a("report-history-modal",{attrs:{field:t.historyField},on:{close:function(e){t.historyField=null}}}):t._e()],1)},o=[],c=a("ded3"),d=a.n(c),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{maximized:t.$q.screen.lt.md,"full-height":"","full-width":""},on:{hide:function(e){return t.$emit("close")}},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}},[a("q-layout",{class:t.darkerClass,attrs:{view:"Lhh lpR fff",container:""}},[a("q-header",{staticClass:"bg-primary"},[a("q-toolbar",[a("q-toolbar-title",[t.$q.screen.gt.sm?a("span",{staticClass:"text-weight-bold"},[t._v("HISTORY")]):t._e(),t._v("\n          "+t._s(this.theField.title)+"\n          "),t.chart.data?a("q-chip",{attrs:{dark:"",dense:"",square:""}},[t._v("\n            "+t._s(t.chart.data.labels.length)+"\n          ")]):t._e()],1),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),a("q-page-container",[a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"row"},[a("div",{class:t.eventGroup?"col-xs-12 col-sm-12 col-md-8 col-lg-9":"col-12"},[a("div",{staticClass:"q-pa-sm"},[a("line-chart",{staticStyle:{height:"60vh"},attrs:{param:t.chart,update:t.history.update,dark:t.darker}}),a("q-range",{attrs:{min:t.range.min,max:t.range.max,disable:t.range.disable,"drag-range":t.control.drag,snap:"",square:""},model:{value:t.range.value,callback:function(e){t.$set(t.range,"value",e)},expression:"range.value"}}),a("div",{staticClass:"row justify-between items-center content-center"},[a("div",{staticClass:"col-auto"},[a("q-toggle",{staticClass:"q-ma-xs",attrs:{label:"Begin Zero",dark:t.darker},model:{value:t.control.beginAtZero,callback:function(e){t.$set(t.control,"beginAtZero",e)},expression:"control.beginAtZero"}}),a("q-toggle",{staticClass:"q-ma-xs",attrs:{disable:t.control.maximize,label:"Lock Window",dark:t.darker},model:{value:t.control.drag,callback:function(e){t.$set(t.control,"drag",e)},expression:"control.drag"}}),a("q-toggle",{staticClass:"q-ma-xs",attrs:{disable:t.control.maximize,label:"Follow Data",dark:t.darker},model:{value:t.control.follow,callback:function(e){t.$set(t.control,"follow",e)},expression:"control.follow"}}),a("q-toggle",{staticClass:"q-ma-xs",attrs:{label:"Max Range",dark:t.darker},model:{value:t.control.maximize,callback:function(e){t.$set(t.control,"maximize",e)},expression:"control.maximize"}})],1),a("div",{staticClass:"col-auto"},[a("q-input",{staticClass:"q-ma-xs",staticStyle:{width:"130px"},attrs:{value:t.rangeSample,dark:t.darker,type:"number",prefix:"Sample :",disable:"","hide-bottom-space":"",filled:"",dense:""}})],1)])],1)]),t.eventGroup?a("div",{staticClass:"col-xs-12 col-sm-12 col-md-4 col-lg-3"},[a("div",{staticClass:"q-pa-sm scroll"},[a("event-group-reader",{attrs:{"current-value":t.currentValue}})],1)]):t._e()])])],1)],1)],1)},u=[],p=(a("26e9"),a("d87e")),m=a("2f62"),b=a("1a0d"),g=a("110e"),f=a("2ef0"),x=a("ab1c"),v=a("1fca"),_={extends:v["a"],props:{param:{type:Object,required:!0},update:{type:Object,required:!0},dark:{type:Boolean,default:!1}},mounted(){this.render()},methods:{render(){this.renderChart(this.param.data,this.param.options)}},watch:{"update.data":function(t){this.$data._chart.update()},"update.options":function(t){this.render()}}},q=_,k=a("2877"),y=Object(k["a"])(q,r,s,!1,null,null,null),C=y.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-list",{attrs:{dark:t.darker,bordered:""}},t._l(t.devEvents,(function(e,r){return a("q-expansion-item",{key:r,attrs:{label:r+" ",caption:"("+e.length+") times","header-class":"text-"+(t.activeEvent(r)?"green":"grey"),dark:t.darker,"expand-separator":""}},[a("q-virtual-scroll",{staticStyle:{"max-height":"80vh"},attrs:{items:e,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.item;e.index;return[a("q-item",{key:r+"-"+s.time,attrs:{dark:t.darker}},[a("q-item-section",[a("q-item-label",{attrs:{caption:""}},[t._v(t._s(s.time))])],1)],1)]}}],null,!0)})],1)})),1)},w=[],O=a("95e6"),M=a("ae51"),R={props:{currentValue:Number},mixins:[M["a"]],data(){return{EVENT_LIST:this.$_.cloneDeep(O["a"])}},computed:d()({},Object(m["c"])("db",[p["b"]])),methods:{activeEvent(t){let e=O["a"].find((({name:e})=>e===t)).bit;return Object(O["b"])(this.currentValue,e)}}},S=R,L=a("1c1c"),$=a("3b73"),T=a("a12b"),I=a("66e5"),j=a("4074"),F=a("0170"),E=a("eebe"),A=a.n(E),B=Object(k["a"])(S,Q,w,!1,null,null,null),D=B.exports;A()(B,"components",{QList:L["a"],QExpansionItem:$["a"],QVirtualScroll:T["a"],QItem:I["a"],QItemSection:j["a"],QItemLabel:F["a"]});var N={props:{field:{required:!0}},mixins:[M["a"]],components:{LineChart:C,EventGroupReader:D},data(){return{currentValue:0,modalOpen:!1,chart:Object(f["cloneDeep"])(g["a"]),tmp:{max:null,sample:null,follow:!1,drag:!1},range:{disable:!1,sample:10,min:0,max:null,value:{min:0,max:null}},control:{beginAtZero:!1,maximize:!0,follow:!1,drag:!1},history:{update:{data:!1,options:!1}}}},computed:d()(d()({},Object(m["c"])("db",[p["d"],p["b"]])),{},{theField(){return Object(b["d"])(x["a"],this.field)},eventGroup(){return"eventsGroup"===this.field&&Object.keys(this.devEvents).length>0},rangeSample(){let{iMin:t,iMax:e}=this.findRange(this.range.value);return e-t+1}}),methods:{getLabel(t){let{labels:e}=this.chart.data;return t>=0?e[t]:e[e.length-1]},findRange({min:t,max:e}){let{labels:a}=this.chart.data,r=t?a.findIndex((e=>e>=t)):0,s=e?this.$_.findLastIndex(a,(t=>t<=e)):a.length-1;return{iMin:r,iMax:s}},findRangeX({iMin:t,iMax:e}){let{labels:a}=this.chart.data,r=a[t],s=a[e];return{xMin:r,xMax:s}},findRangeY({iMin:t,iMax:e}){let{data:a}=this.chart.data.datasets[0],r=a.filter(((a,r)=>r>=t&&r<=e)),s=this.$_.min(r),n=this.$_.max(r);return this.control.beginAtZero&&(s>0?s=0:n=0),n==s&&(s>=0?n+=1:s-=1),{yMin:s,yMax:n}},applyRange(t){let{iMin:e,iMax:a}=this.findRange(this.range.value),{xMax:r}=this.findRangeX({iMin:e,iMax:a}),s=a-e;(this.control.maximize||this.control.follow)&&(a=this.chart.data.labels.length-1,r=this.getLabel(a),this.control.maximize&&(e=0)),t?t--:(t=a-e,this.control.drag&&(t=s,this.control.follow||(r=this.getLabel(e+t)))),this.range.value={min:this.getLabel(a-t),max:r}},scaleChart(){let{iMin:t,iMax:e}=this.findRange(this.range.value),{xMin:a,xMax:r}=this.findRangeX({iMin:t,iMax:e}),{yMin:s,yMax:n}=this.findRangeY({iMin:t,iMax:e});this.currentValue=r,this.chart.options.scales.xAxes[0].ticks.max=r,this.chart.options.scales.xAxes[0].ticks.min=a,this.chart.options.scales.yAxes[0].ticks.max=n,this.chart.options.scales.yAxes[0].ticks.min=s,this.chart.options.scales.yAxes[0].ticks.beginAtZero=this.control.beginAtZero,this.history.update.options=!this.history.update.options,this.$nextTick((()=>this.modalOpen=!0))},grabLabelsAndDatasets(t){let e=[],a=[];return t.forEach((t=>{t[this.field]&&(e.push(t[this.field].val),a.push(t.logDatetime.val))})),{datasets:e.reverse(),labels:a.reverse()}},writeChart(t){let{labels:e,datasets:a}=this.grabLabelsAndDatasets(t);t.length>1?(this.chart.data.labels=e,this.chart.data.datasets[0].data=a):(this.chart.data.labels.push(e[0]),this.chart.data.datasets[0].data.push(a[0])),this.range.min=this.getLabel(0),this.range.max=this.getLabel(-1),this.history.update.data=!this.history.update.data},prepareChart(){let{title:t,unit:e}=this.theField;this.chart.data.datasets[0].label=t,this.chart.options.scales.yAxes[0].scaleLabel.labelString=e||"Value",this.history.update.options=!this.history.update.options},changeColor(t){this.chart.options.legend.labels.fontColor=t,this.chart.options.scales.xAxes[0].ticks.fontColor=t,this.chart.options.scales.xAxes[0].scaleLabel.fontColor=t,this.chart.options.scales.xAxes[0].gridLines.color=t,this.chart.options.scales.yAxes[0].ticks.fontColor=t,this.chart.options.scales.yAxes[0].scaleLabel.fontColor=t,this.chart.options.scales.yAxes[0].gridLines.color=t}},mounted(){this.prepareChart(),this.writeChart(this.devReports),this.applyRange()},watch:{devReports:{handler(t){let e=t[0];e[this.field]&&(this.writeChart([e]),this.applyRange())}},"control.maximize":{immediate:!0,handler(t){let e=null;t?(this.tmp.max=this.range.value.max,this.tmp.sample=this.rangeSample,this.tmp.drag=this.control.drag,this.tmp.follow=this.control.follow,this.range.disable=!0,this.control.follow=!1,this.control.drag=!1):(this.range.disable=!1,this.control.follow=this.tmp.follow,this.control.drag=this.tmp.drag,this.range.value.max=this.tmp.max,e=this.tmp.sample),this.applyRange(e)}},"range.value":{deep:!0,handler(t){this.scaleChart()}},"control.beginAtZero":{handler(t){this.scaleChart()}},darker:{immediate:!0,handler(t){this.changeColor(t?"#FFF":"#666"),this.history.update.options=!this.history.update.options}}}},U=N,H=a("24e8"),z=a("4d5a"),V=a("e359"),P=a("65c6"),Z=a("6ac5"),G=a("b047"),X=a("9c40"),Y=a("09e3"),J=a("9989"),W=a("7bbf"),K=a("9564"),tt=a("27f9"),et=a("7f67"),at=Object(k["a"])(U,h,u,!1,null,null,null),rt=at.exports;A()(at,"components",{QDialog:H["a"],QLayout:z["a"],QHeader:V["a"],QToolbar:P["a"],QToolbarTitle:Z["a"],QChip:G["a"],QBtn:X["a"],QPageContainer:Y["a"],QPage:J["a"],QRange:W["a"],QToggle:K["a"],QInput:tt["a"]}),A()(at,"directives",{ClosePopup:et["a"]});var st={mixins:[M["a"]],props:{height:{required:!0}},components:{ReportHistoryModal:rt},data(){return{historyField:null}},computed:d()(d()(d()({},Object(m["e"])("db",["theReport"])),Object(m["c"])("db",[p["d"]])),{},{theReportData(){return d()(d()({},Object(x["b"])(this.theReport,this.devReports)),this.theReport)},reportFields(){return Object.keys(this.$_.omit(this.theReportData,"hex"))},fullFrame(){return this.theReport.frameID.val===this.$config.frame.id.FULL}}),methods:{openHistory(t){this.hasHistory(t)&&(this.historyField=t)},hasHistory(t){let{chartable:e}=Object(b["d"])(x["a"],t),a=this.devReports.filter((({[t]:e})=>e));return e&&a.length>=2},realtimeField(t){let{required:e}=Object(b["d"])(x["a"],t);return this.theReport.frameID.val===this.$config.frame.id.FULL||e},getSubField(t,e){return Object(b["d"])(x["a"],t)[e]}}},nt=st,it=a("d847"),lt=a("58a81"),ot=a("0016"),ct=a("54e1"),dt=Object(k["a"])(nt,l,o,!1,null,null,null),ht=dt.exports;A()(dt,"components",{QBar:it["a"],QToolbarTitle:Z["a"],QBadge:lt["a"],QVirtualScroll:T["a"],QItem:I["a"],QItemSection:j["a"],QItemLabel:F["a"],QIcon:ot["a"],QBanner:ct["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-bar",{staticClass:"bg-blue text-white"},[a("q-toolbar-title",{staticClass:"text-subtitle1"},[t._v("\n      Unit Management\n      "),t.units.length>0?a("q-badge",{attrs:{color:"red",align:"top"}},[t._v("\n        "+t._s(t.units.length)+"\n      ")]):t._e()],1)],1),a("q-virtual-scroll",{style:"height: calc("+t.height+"px - 32px)",attrs:{items:t.units,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,s=e.index;return[a("q-item",{key:s,attrs:{active:r===t.theUnit,"active-class":"bg-primary text-white",dark:t.darker,clickable:"",dense:""},on:{click:function(e){return t.setTheUnit(r)}}},[a("q-item-section",[a("q-item-label",{staticClass:"text-subtitle2"},[t._v("\n            "+t._s(r.toString())+"\n          ")])],1),a("q-item-section",{attrs:{side:""}},[a("q-chip",{attrs:{dark:!t.darker,dense:"",square:""}},[t._v("\n            "+t._s(t.getTotalReports(r))+"\n          ")])],1)],1)]}},{key:"after",fn:function(){return[0==t.units.length?a("q-banner",{attrs:{dark:t.darker},scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[t._v("\n        No unit yet\n      ")]):t._e()]},proxy:!0}])})],1)},pt=[],mt=a("a7bc"),bt={mixins:[M["a"]],props:{height:{required:!0}},computed:d()(d()({},Object(m["e"])("db",["units","theUnit"])),Object(m["c"])("db",[p["e"]])),methods:d()(d()({},Object(m["d"])("db",[mt["n"]])),{},{setTheUnit(t){this.loading||this.SET_THE_UNIT(t)}})},gt=bt,ft=Object(k["a"])(gt,ut,pt,!1,null,null,null),xt=ft.exports;A()(ft,"components",{QBar:it["a"],QToolbarTitle:Z["a"],QBadge:lt["a"],QVirtualScroll:T["a"],QItem:I["a"],QItemSection:j["a"],QItemLabel:F["a"],QChip:G["a"],QBanner:ct["a"],QIcon:ot["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-bar",{staticClass:"bg-blue text-white"},[a("q-toolbar-title",{staticClass:"text-subtitle1"},[t._v("\n      Response Log\n      "),t.devCommands.length>0?a("q-badge",{attrs:{color:"red",align:"top"}},[t._v("\n        "+t._s(t.devCommands.length)+"\n      ")]):t._e()],1)],1),a("q-virtual-scroll",{style:"height: calc(100vh - "+t.height+"px - 33px)",attrs:{items:t.devCommands,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,s=e.index;return[a("q-item",{key:s,attrs:{dark:t.darker,clickable:""},on:{click:function(e){return t.applyCommand(r.payload)}}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(r.payload))]),a("q-item-label",{attrs:{lines:"2",caption:""}},[t._v("\n            "+t._s(r.message)+"\n          ")])],1),a("q-item-section",{attrs:{side:""}},[a("q-chip",{attrs:{color:t.parseResCode(r.resCode).color,dark:"",dense:"",square:""}},[t._v("\n            "+t._s(t.parseResCode(r.resCode).title)+"\n          ")])],1)],1)]}},{key:"after",fn:function(){return[0==t.devCommands.length?a("q-banner",{attrs:{dark:t.darker},scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[t._v("\n        No response yet\n      ")]):t._e()]},proxy:!0}])})],1)},_t=[],qt=a("595a"),kt={mixins:[M["a"]],props:{height:{required:!0}},computed:d()(d()({},Object(m["e"])("db",["loading"])),Object(m["c"])("db",[p["a"]])),methods:d()(d()({},Object(m["d"])("db",[mt["k"]])),{},{applyCommand(t){this.loading||this.SET_THE_CMD_BUFFER(t)},parseResCode(t){return Object(qt["a"])(t)}})},yt=kt,Ct=Object(k["a"])(yt,vt,_t,!1,null,null,null),Qt=Ct.exports;A()(Ct,"components",{QBar:it["a"],QToolbarTitle:Z["a"],QBadge:lt["a"],QVirtualScroll:T["a"],QItem:I["a"],QItemSection:j["a"],QItemLabel:F["a"],QChip:G["a"],QBanner:ct["a"],QIcon:ot["a"]});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-bar",{staticClass:"bg-blue text-white"},[a("q-toolbar-title",{staticClass:"text-subtitle1"},[t._v("\n      Command Management\n    ")]),t.COMMAND_LIST.length>0?a("q-btn",{attrs:{icon:"info",size:"xs",round:"",dense:""},nativeOn:{click:function(e){t.modalOpen=!0}}}):t._e()],1),a("div",{staticClass:"q-pa-sm"},[a("q-input",{attrs:{label:"Input Command:",hint:"Press ENTER to send.",type:"text","stack-label":"",dark:t.darker,disable:t.loading||!t.theUnit,readonly:t.loading,loading:t.loading},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.execCommand()}},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"send"},on:{click:function(e){return t.execCommand()}}})]},proxy:!0}]),model:{value:t.commandBuffer,callback:function(e){t.commandBuffer=e},expression:"commandBuffer"}})],1),a("command-list-modal",{on:{select:t.selectCommand},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}})],1)},Ot=[],Mt=a("95f8"),Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{maximized:t.$q.screen.lt.md,"full-width":"","full-height":""},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}},[a("q-layout",{class:t.darkerClass,attrs:{view:"Lhh lpR fff",container:""}},[a("q-header",{staticClass:"bg-primary"},[a("q-toolbar",[a("q-toolbar-title",[a("span",{staticClass:"text-weight-bold"},[t._v("COMMAND LIST")]),t.COMMAND_LIST.length>0?a("q-chip",{attrs:{dark:"",dense:"",square:""}},[t._v("\n            "+t._s(t.COMMAND_LIST.length)+"\n          ")]):t._e()],1),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),a("q-page-container",[a("q-page",{attrs:{padding:""}},[a("q-virtual-scroll",{attrs:{items:t.searchResult,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,s=e.index;return[a("q-item",{key:s,attrs:{dark:t.darker,clickable:""},on:{click:function(e){return t.$emit("select",r.command)}}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(r.command))]),a("q-item-label",{attrs:{lines:"2",caption:""}},[t._v(t._s(r.desc))])],1),r.type?a("q-item-section",{attrs:{side:""}},[a("q-item-label",{attrs:{lines:"1"}},[a("q-chip",{attrs:{dark:"",dense:"",square:"",color:"grey"}},[t._v("\n                    "+t._s(r.type)+"\n                  ")])],1),r.range?a("q-item-label",{attrs:{lines:"2"}},[a("q-chip",{attrs:{dark:"",dense:"",square:"",color:"primary"}},[t._v("\n                    "+t._s(t.getRange(r.range))+"\n                  ")])],1):t._e()],1):t._e()],1)]}}])})],1)],1)],1)],1)},St=[],Lt=(a("ddb0"),{emits:["select"],props:{value:{required:!0,type:Boolean}},mixins:[M["a"]],data(){return{COMMAND_LIST:this.$_.cloneDeep(Mt["a"]),keyword:""}},computed:{modalOpen:{get(){return this.value},set(t){this.$emit("input",t)}},searchResult(){return Object(b["c"])(this.COMMAND_LIST,this.keyword)}},methods:{getRange(t){const[e,a]=t;return a?`[ ${e}, ${a} ]`:`[ ${e} ]`}}}),$t=Lt,Tt=Object(k["a"])($t,Rt,St,!1,null,null,null),It=Tt.exports;A()(Tt,"components",{QDialog:H["a"],QLayout:z["a"],QHeader:V["a"],QToolbar:P["a"],QToolbarTitle:Z["a"],QChip:G["a"],QBtn:X["a"],QPageContainer:Y["a"],QPage:J["a"],QVirtualScroll:T["a"],QItem:I["a"],QItemSection:j["a"],QItemLabel:F["a"]}),A()(Tt,"directives",{ClosePopup:et["a"]});var jt={mixins:[M["a"]],components:{CommandListModal:It},data(){return{COMMAND_LIST:this.$_.cloneDeep(Mt["a"]),modalOpen:!1}},computed:d()(d()({},Object(m["e"])("db",["theUnit","theCmdBuffer"])),{},{commandBuffer:{get(){return this.theCmdBuffer},set(t){this.SET_THE_CMD_BUFFER(t.toUpperCase())}}}),methods:d()(d()({},Object(m["d"])("db",[mt["k"]])),{},{selectCommand(t){this.modalOpen=!1,this.SET_THE_CMD_BUFFER(t)},execCommand(){this.$root.$emit("executeCommand",this.commandBuffer)}})},Ft=jt,Et=Object(k["a"])(Ft,wt,Ot,!1,null,null,null),At=Et.exports;A()(Et,"components",{QBar:it["a"],QToolbarTitle:Z["a"],QBtn:X["a"],QInput:tt["a"],QIcon:ot["a"]});var Bt={name:"MyLayout",mixins:[M["a"]],components:{ReportReader:ht,UnitManagement:xt,ResponseLog:Qt,CommandManagement:At},data(){return{drawer:{left:this.$q.platform.is.desktop,right:!1},splitter:150}}},Dt=Bt,Nt=a("9404"),Ut=a("8562"),Ht=a("cb32"),zt=Object(k["a"])(Dt,n,i,!1,null,null,null);e["default"]=zt.exports;A()(zt,"components",{QLayout:z["a"],QHeader:V["a"],QToolbar:P["a"],QBtn:X["a"],QToolbarTitle:Z["a"],QItemLabel:F["a"],QDrawer:Nt["a"],QSplitter:Ut["a"],QAvatar:Ht["a"],QPageContainer:Y["a"]})},ae51:function(t,e,a){"use strict";var r=a("ded3"),s=a.n(r),n=a("2f62");e["a"]={computed:s()(s()({},Object(n["e"])("db",["loading","darker"])),{},{darkerClass(){return this.darker?"bg-dark text-white":"bg-white text-grey-9"}})}}}]);