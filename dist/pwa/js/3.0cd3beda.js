(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"8b24":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{class:e.darkerClass},[a("q-resize-observer",{on:{resize:e.onResizePage}}),a("map-management",{attrs:{height:e.mapHeight,pageWidth:e.pageWidth}}),a("q-tabs",{staticClass:"bg-primary text-white",model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},[a("q-tab",{attrs:{name:"tab-1",label:"Report Log"}},[a("q-badge",{attrs:{color:"red",floating:""}},[e._v(e._s(e.devReports.length))])],1),a("q-tab",{attrs:{name:"tab-2",label:"Driver Management"}},[a("q-badge",{attrs:{color:"red",floating:""}},[e._v(e._s(e.devFingers.length))])],1),a("q-tab",{attrs:{name:"tab-3",label:"Configuration"}})],1),a("q-tab-panels",{class:e.darkerClass,attrs:{"keep-alive":"",animated:"",swipeable:""},model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},[a("q-tab-panel",{attrs:{name:"tab-1"}},[a("report-log",{attrs:{height:e.paneHeight}})],1),a("q-tab-panel",{attrs:{name:"tab-2"}},[a("driver-management",{attrs:{height:e.paneHeight}})],1),a("q-tab-panel",{attrs:{name:"tab-3"}},[a("global-configuration")],1)],1)],1)},s=[],r=a("ded3"),n=a.n(r),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row",style:{height:e.height+"px"}},[a("div",{staticClass:"col-xs-12",class:{"col-sm-6":e.showStreetView}},[a("gmap-map",{staticClass:"fit",attrs:{center:e.center,zoom:e.zoom,"map-type-id":"roadmap"}},[e.position.valid?a("gmap-marker",{attrs:{position:e.position}}):e._e(),e.path.length>0?a("gmap-polyline",{ref:"polyline",attrs:{path:e.path}}):e._e()],1)],1),e.showStreetView?a("div",{staticClass:"col-xs-12 col-sm-6"},[a("gmap-street-view-panorama",{staticClass:"fit",attrs:{position:e.position,pov:e.pov,zoom:1},on:{pano_changed:e.updatePano,pov_changed:e.updatePov}})],1):e._e()])},l=[],c=a("4082"),d=a.n(c),m=a("110e");const p=({lng:e,lat:t})=>{let{borderIndonesia:a}=m["b"].map;return e>a.lngMin&&e<a.lngMax&&t>a.latMin&&t<a.latMax},h=({frameID:e,lat:t,lng:a})=>{let i=n()(n()({},m["b"].map.centerIndonesia),{},{valid:!1});return e===m["b"].frame.id.FULL&&(i.lat=t,i.lng=a,i.valid=p(i)),i},g=({frameID:e,heading:t})=>e===m["b"].frame.id.FULL?t:0;var u=a("d87e"),b=a("2f62"),v={props:{height:Number,pageWidth:Number},data(){return{center:n()({},m["b"].map.centerIndonesia),position:n()(n()({},m["b"].map.centerIndonesia),{},{valid:!1}),zoom:m["b"].map.zoom,pov:null,pano:null,path:[]}},computed:n()(n()(n()({},Object(b["e"])("db",["theReport"])),Object(b["c"])("db",[u["d"]])),{},{showStreetView(){return this.pageWidth>=728}}),methods:{updatePov(e){this.pov=e},updatePano(e){this.pano=e},setPosition(e){let{valid:t}=e,a=d()(e,["valid"]);t?(this.zoom=17,this.center=n()({},a)):(this.zoom=m["b"].map.zoom,this.center=n()({},m["b"].map.centerIndonesia)),this.position=n()(n()({},a),{},{valid:t})}},watch:{devReports:{immediate:!0,handler(e){if(e.length>0){let{frameID:t,gpsLatitude:a,gpsLongitude:i}=e[0],s=h({frameID:t.val,lat:a&&a.val,lng:i&&i.val});s.valid&&this.path.push(s)}}},theReport:{immediate:!0,handler(e){if(e){let{frameID:t,gpsLatitude:a,gpsLongitude:i,gpsHeading:s}=e;this.setPosition(h({frameID:t.val,lat:a&&a.val,lng:i&&i.val})),this.pov&&this.updatePov(n()(n()({},this.pov),{},{heading:g({frameID:t.val,heading:s&&s.val})}))}}}}},f=v,q=a("2877"),k=Object(q["a"])(f,o,l,!1,null,null,null),C=k.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row q-gutter-xs"},[a("div",{staticClass:"col-xs-12 text-right"},[a("q-btn",{staticClass:"q-ma-xs",attrs:{color:"green",label:"FOLLOW",icon:e.lock.follow?"lock":"lock_open",dense:"",unelevated:"",outline:!e.lock.follow,loading:e.loading,disable:0==e.devReports.length},on:{click:function(t){e.lock.follow=!e.lock.follow}}})],1),a("div",{staticClass:"col-xs-12"},[e.devReports.length>0?a("q-virtual-scroll",{style:{height:(e.height<150?150:e.height)+"px"},attrs:{items:e.devReports,separator:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item,s=t.index;return[a("q-item",{key:s,attrs:{dark:e.darker,active:i.hex===e.theReport.hex,"active-class":"bg-primary text-white",clickable:"",dense:""},on:{click:function(t){return e.SET_THE_REPORT(i)}}},[a("q-item-section",{attrs:{avatar:""}},[a("div",[a("q-chip",{staticClass:"q-ml-sm text-center",staticStyle:{width:"60px"},attrs:{color:"FULL"==i.frameID.out?"green":"light-green",dark:"",dense:"",square:""}},[e._v("\n                "+e._s(i.frameID.out)+"\n              ")]),a("q-chip",{attrs:{color:"primary",dark:"",dense:"",square:""}},[e._v("\n                "+e._s(e.getDatetime(i))+"\n              ")])],1)]),a("q-item-section",[a("q-item-label",{staticClass:"ellipsis"},[e._v("\n              "+e._s(i.hex)+"\n            ")])],1)],1)]}}],null,!1,860836895)}):a("q-banner",{attrs:{dark:e.darker},scopedSlots:e._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}])},[e._v("\n      No report yet\n    ")])],1)])},_=[],I=a("1a0d"),R=a("a7bc"),S=a("ae51"),w={props:{height:Number},mixins:[S["a"]],data(){return{lock:{follow:!0}}},computed:n()(n()({},Object(b["e"])("db",["theUnit","theReport"])),Object(b["c"])("db",[u["d"]])),methods:n()(n()({},Object(b["d"])("db",[R["m"]])),{},{getDatetime({logDatetime:e}){return Object(I["i"])(e.val)}}),watch:{devReports:{immediate:!0,handler(e){e.length>0&&this.lock.follow&&this.SET_THE_REPORT(e[0])}}}},D=w,O=a("9c40"),E=a("a12b"),T=a("66e5"),F=a("4074"),y=a("b047"),$=a("0170"),L=a("54e1"),N=a("0016"),Q=a("eebe"),j=a.n(Q),A=Object(q["a"])(D,x,_,!1,null,null,null),G=A.exports;j()(A,"components",{QBtn:O["a"],QVirtualScroll:E["a"],QItem:T["a"],QItemSection:F["a"],QChip:y["a"],QItemLabel:$["a"],QBanner:L["a"],QIcon:N["a"]});var z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row q-gutter-xs"},[a("div",{staticClass:"col-xs-12 text-right"},[a("q-btn",{staticClass:"q-ma-xs",attrs:{color:"purple",label:"FETCH",dense:"",unelevated:"",disable:!e.theUnit,loading:e.loading},on:{click:function(t){return e.fetchFinger()}}}),a("q-btn",{staticClass:"q-ma-xs",attrs:{color:"green",label:"ADD",dense:"",unelevated:"",disable:!e.theUnit,loading:e.loading},on:{click:function(t){return e.addFinger()}}}),a("q-btn",{staticClass:"q-ma-xs",attrs:{color:"red",label:"RESET",dense:"",unelevated:"",disable:e.loading||!e.theUnit,loading:e.loading},on:{click:function(t){return e.resetFinger()}}})],1),a("div",{staticClass:"col-xs-12"},[a("q-scroll-area",{style:{height:(e.height<150?150:e.height)+"px"}},[e.devFingers.length>0?a("q-list",{attrs:{dark:e.darker,separator:"",dense:""}},e._l(e.devFingers,(function(t,i){return a("q-item",{key:i,attrs:{dark:e.darker}},[a("q-item-section",{attrs:{avatar:""}},[a("q-chip",{attrs:{color:"primary",dark:"",square:""}},[e._v("\n              "+e._s(t.fingerID)+"\n            ")])],1),a("q-item-section",[a("q-item-label",[e._v(" Mr. "+e._s(e.name[t.fingerID-1]))])],1),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{loading:e.loading,color:"red",size:"sm",icon:"delete",unelevated:"",round:""},on:{click:function(a){return e.deleteFinger(t)}}})],1)],1)})),1):a("q-banner",{attrs:{dark:e.darker},scopedSlots:e._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}])},[e._v("\n        No finger driver yet\n      ")])],1)],1)])},H=[],P=a("95f8"),M=a("595a"),B=a("5f41"),U={props:{height:Number},mixins:[S["a"]],data(){return{name:["One","Two","Three","Four","Five"]}},computed:n()(n()({},Object(b["e"])("db",["theUnit","commands"])),Object(b["c"])("db",[u["c"],u["d"]])),mounted(){this.devReports.length>0&&this.devReports[0].vehicleState.out>=B["b"]["STANDBY"]&&this.fetchFinger()},methods:n()(n()({},Object(b["d"])("db",[R["b"],R["h"],R["i"]])),{},{fetchFinger(){this.$root.$emit("executeCommand","FINGER_FETCH")},addFinger(){this.$root.$emit("executeCommand","FINGER_ADD")},deleteFinger({fingerID:e}){this.$q.dialog({title:"Confirmation",message:`Are you sure to remove this fingerprint *${e}* ?`,dark:this.darker,preventClose:!0,cancel:!0}).onOk((()=>this.$root.$emit("executeCommand",`FINGER_DEL=${e}`)))},resetFinger(){this.$q.dialog({title:"Confirmation",message:"Are you sure to remove all fingerprints  ?",dark:this.darker,preventClose:!0,cancel:!0}).onOk((()=>this.$root.$emit("executeCommand","FINGER_RST")))}}),watch:{commands:{deep:!0,handler(e){if(e.length>0){let{resCode:t,payload:a,unitID:i,message:s}=e[0],r=Object(M["a"])(t);if("OK"==r.title){let{prop:e,value:t}=Object(P["b"])(a);if("FINGER_FETCH"==e){if(s.length>0){let e=s.split(",");for(let t=e.length-1;t>=0;t--)this.ADD_FINGERS({unitID:i,fingerID:e[t]})}}else"FINGER_ADD"==e?this.ADD_FINGERS({unitID:i,fingerID:s}):"FINGER_DEL"==e?this.DELETE_FINGERS({unitID:i,fingerID:t}):"FINGER_RST"==e&&this.RESET_FINGERS({unitID:i})}}}}}},J=U,V=a("4983"),W=a("1c1c"),Y=Object(q["a"])(J,z,H,!1,null,null,null),K=Y.exports;j()(Y,"components",{QBtn:O["a"],QScrollArea:V["a"],QList:W["a"],QItem:T["a"],QItemSection:F["a"],QChip:y["a"],QItemLabel:$["a"],QBanner:L["a"],QIcon:N["a"]});var X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-auto q-ma-sm"},[a("q-btn",{staticClass:"q-ma-xs",attrs:{icon:"delete",color:"negative",label:"Clear data",disable:0==e.units.length},on:{click:function(t){return e.clearStore()}}})],1),a("div",{staticClass:"col-auto q-ma-sm"},[a("q-btn",{staticClass:"q-ma-xs",attrs:{icon:"stop",color:"primary",label:"Ignore command",disable:!e.theCommand},on:{click:function(t){return e.$root.$emit("ignoreCommand")}}})],1),a("div",{staticClass:"col-auto q-ma-sm"},[a("q-btn",{staticClass:"q-ma-xs",attrs:{icon:"cloud_download",color:"green",label:"Export CSV",disable:0==e.reports.length},nativeOn:{click:function(t){return e.exportCSV()}}})],1),a("div",{staticClass:"col-auto q-ma-sm"},[a("q-btn",{staticClass:"q-ma-xs",attrs:{icon:"cloud_download",color:"purple",label:"Export JSON",disable:0==e.reports.length},nativeOn:{click:function(t){return e.exportJSON()}}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-auto q-ma-sm"},[a("q-uploader",{ref:"importer",staticClass:"q-ma-sm",attrs:{factory:e.importJSON,dark:e.darker,accept:".json",label:"Import JSON"},on:{finish:e.finish}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-auto q-ma-sm"},[a("q-toggle",{staticClass:"q-pt-lg",attrs:{dark:e.darker,label:"Dark Mode"},model:{value:e.darkState,callback:function(t){e.darkState=t},expression:"darkState"}})],1),a("div",{staticClass:"col-auto q-ma-sm"},[a("q-toggle",{staticClass:"q-pt-lg",attrs:{disable:0==e.units.length,dark:e.darker,label:"Time Calibration"},model:{value:e.calibrationState,callback:function(t){e.calibrationState=t},expression:"calibrationState"}})],1)])])])},Z=[],ee=(a("26e9"),a("e6cf"),a("6ad4")),te=(a("13d5"),a("ab1c")),ae=a("f23f"),ie=a("2e92"),se=a("c1df"),re=a.n(se);const ne=e=>e.map((e=>n()({},te["a"].reduce(((t,{field:a,no:i})=>n()(n()({},t),{},{[i]:e[a]?e[a].out:""})),{})))),oe=()=>te["a"].reduce(((e,{title:t,unit:a})=>e.concat([t+(a?` (${a})`:"")])),[]),le=()=>{let e=re()().format("YYYYMMDDHHmmss");return`tracking-${e}`},ce=e=>{const t=new ae["ExportToCsv"]({fieldSeparator:",",quoteStrings:'"',decimalSeparator:".",showLabels:!0,showTitle:!1,title:"My Awesome CSV",useTextFile:!1,useBom:!0,useKeysAsHeaders:!1,headers:oe()});t.generateCsv(ne(e))},de=e=>{const t=e.map((({hex:e})=>e)),a=le(),i="json";Object(ie["a"])({data:t,fileName:a,exportType:i})};var me={mixins:[S["a"]],computed:n()(n()(n()({},Object(b["e"])("db",["units","calibration","theCommand","reports"])),Object(b["c"])("db",[u["d"]])),{},{calibrationState:{get(){return this.calibration},set(e){this.TOGGLE_CALIBRATION()}},darkState:{get(){return this.darker},set(e){this.TOGGLE_DARKER()}}}),methods:n()(n()(n()({},Object(b["d"])("db",[R["o"],R["p"]])),Object(b["b"])("db",[ee["a"]])),{},{finish(){this.$refs.importer.reset()},exportJSON(){de(this.reports)},exportCSV(){ce(this.reports)},importJSON(e){return new Promise(((t,a)=>{if(0==this.reports.length){let a=new FileReader;a.onload=e=>{this.$root.$emit("importReport",JSON.parse(e.target.result).reverse()),t()},a.readAsText(e[0])}else this.$q.notify({message:"Database should empty",type:"negative"}),a()}))},clearStore(){this.$q.dialog({title:"Confirmation",message:"Are you sure to remove all data?",dark:this.darker,preventClose:!0,cancel:!0}).onOk((()=>this.RESET_DATABASE()))}}),watch:{devReports:function(e){if(e.length>0&&this.calibration){let{frameID:t,gpsLatitude:a,gpsLongitude:i,sendDatetime:s}=e[0];if(t.val===this.$config.frame.id.FULL){let e=Object(I["b"])({lat:a.val,lng:i.val,datetime:s.val});e&&(this.$root.$emit("executeCommand",`REPORT_RTC=${e}`),this.$q.notify({message:"Calibrating device time.."}))}}}}},pe=me,he=a("ee89"),ge=a("9564"),ue=Object(q["a"])(pe,X,Z,!1,null,null,null),be=ue.exports;j()(ue,"components",{QBtn:O["a"],QUploader:he["a"],QToggle:ge["a"]});var ve={mixins:[S["a"]],components:{MapManagement:C,ReportLog:G,DriverManagement:K,GlobalConfiguration:be},data(){return{selectedTab:"tab-1",mapHeight:300,paneHeight:0,pageWidth:0}},computed:n()({},Object(b["c"])("db",[u["d"],u["c"]])),methods:{onResize(e){this.paneHeight=e-this.mapHeight-180},onResizePage({width:e}){this.pageWidth=e}},watch:{"$q.screen.height":{immediate:!0,handler(e){this.onResize(e)}}}},fe=ve,qe=a("9989"),ke=a("3980"),Ce=a("429b"),xe=a("7460"),_e=a("58a81"),Ie=a("adad"),Re=a("823b"),Se=Object(q["a"])(fe,i,s,!1,null,null,null);t["default"]=Se.exports;j()(Se,"components",{QPage:qe["a"],QResizeObserver:ke["a"],QTabs:Ce["a"],QTab:xe["a"],QBadge:_e["a"],QTabPanels:Ie["a"],QTabPanel:Re["a"]})},ae51:function(e,t,a){"use strict";var i=a("ded3"),s=a.n(i),r=a("2f62");t["a"]={computed:s()(s()({},Object(r["e"])("db",["loading","darker"])),{},{darkerClass(){return this.darker?"bg-dark text-white":"bg-white text-grey-9"}})}}}]);