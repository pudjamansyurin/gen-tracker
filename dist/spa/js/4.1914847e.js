(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-splitter",{staticStyle:{height:"calc(100vh - 50px)"},attrs:{horizontal:""},scopedSlots:t._u([{key:"before",fn:function(){return[a("map-management")]},proxy:!0},{key:"separator",fn:function(){return[a("q-avatar",{attrs:{color:"grey","text-color":"white",size:"20px",icon:"drag_indicator"}})]},proxy:!0},{key:"after",fn:function(){return[a("q-tabs",{staticClass:"bg-primary text-white",attrs:{dense:""},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[a("q-tab",{attrs:{name:"tab-1",label:"Report Log"}},[a("q-badge",{attrs:{color:"red",floating:""}},[t._v(t._s(t.devReports.length))])],1),a("q-tab",{attrs:{name:"tab-2",label:"Driver Management"}},[a("q-badge",{attrs:{color:"red",floating:""}},[t._v(t._s(t.devFingers.length))])],1),a("q-tab",{attrs:{name:"tab-3",label:"Configuration"}})],1),a("q-tab-panels",{attrs:{swipeable:""},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[a("q-tab-panel",{attrs:{name:"tab-1"}},[a("report-log",{attrs:{"content-style":t.contentStyle}})],1),a("q-tab-panel",{attrs:{name:"tab-2"}},[a("driver-management",{attrs:{"content-style":t.contentStyle}})],1),a("q-tab-panel",{attrs:{name:"tab-3"}},[a("global-configuration",{attrs:{"content-style":t.contentStyle}})],1)],1)]},proxy:!0}]),model:{value:t.splitter,callback:function(e){t.splitter=e},expression:"splitter"}})],1)},n=[],r=a("ded3"),i=a.n(r),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-splitter",{attrs:{value:t.showStreetView?50:100},scopedSlots:t._u([{key:"before",fn:function(){return[a("gmap-map",{staticClass:"fit",attrs:{center:t.center,zoom:t.zoom,options:t.options,"map-type-id":"roadmap"}},[t.position.valid?a("gmap-marker",{attrs:{position:t.position}}):t._e(),t.path.length>0?a("gmap-polyline",{ref:"polyline",attrs:{path:t.path}}):t._e()],1)]},proxy:!0},t.showStreetView?{key:"separator",fn:function(){return[a("q-avatar",{attrs:{color:"grey","text-color":"white",size:"20px",icon:"drag_indicator"}})]},proxy:!0}:null,t.showStreetView?{key:"after",fn:function(){return[a("gmap-street-view-panorama",{staticClass:"fit",attrs:{position:t.position,pov:t.pov,zoom:1},on:{pano_changed:t.updatePano,pov_changed:t.updatePov}})]},proxy:!0}:null],null,!0)})},s=[],c=a("4082"),d=a.n(c),p=a("110e"),m=a("1a0d");const u=({lng:t,lat:e})=>{let{borderIndonesia:a}=p["a"].map;return t>a.lngMin&&t<a.lngMax&&e>a.latMin&&e<a.latMax},b=({frameID:t,gpsLatitude:e,gpsLongitude:a})=>{let o=i()(i()({},p["a"].map.centerIndonesia),{},{valid:!1});return t.val===Object(m["e"])("FULL")&&(o.lat=e.val,o.lng=a.val,o.valid=u(o)),o},f=({frameID:t,gpsHeading:e})=>t.val===Object(m["e"])("FULL")?e.val:0;var v=a("d87e"),g=a("2f62"),h={data(){return{center:i()({},p["a"].map.centerIndonesia),position:i()(i()({},p["a"].map.centerIndonesia),{},{valid:!1}),zoom:p["a"].map.zoom,pov:null,pano:null,path:[],options:{zoomControl:!0,mapTypeControl:!1,scaleControl:!0,streetViewControl:!1,rotateControl:!1,fullscreenControl:!0,disableDefaultUi:!0}}},computed:i()(i()(i()({},Object(g["e"])("db",["report"])),Object(g["c"])("db",[v["f"]])),{},{showStreetView(){return this.$q.screen.gt.xs}}),methods:{updatePov(t){this.pov=t},updatePano(t){this.pano=t},setPosition(t){let{valid:e}=t,a=d()(t,["valid"]);e?(this.zoom=17,this.center=i()({},a)):(this.zoom=p["a"].map.zoom,this.center=i()({},p["a"].map.centerIndonesia)),this.position=i()(i()({},a),{},{valid:e})}},watch:{"devReports.0":{immediate:!0,handler(t){if(!t)return;let e=b(t);e.valid&&this.path.push(e)}},report:{immediate:!0,handler(t){t&&(this.setPosition(b(t)),this.pov&&this.updatePov(i()(i()({},this.pov),{},{heading:f(t)})))}}}},y=h,S=a("2877"),x=a("8562"),q=a("cb32"),_=a("eebe"),O=a.n(_),w=Object(S["a"])(y,l,s,!1,null,null,null),k=w.exports;O()(w,"components",{QSplitter:x["a"],QAvatar:q["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.contentStyle},[0==t.devReports.length?a("q-banner",{scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[t._v("\n    No report yet\n  ")]):a("q-virtual-scroll",{attrs:{items:t.devReports,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.item,n=e.index;return[a("q-item",{key:n,attrs:{active:o.hex===t.report.hex,"active-class":"bg-primary text-white",clickable:"",dense:""},on:{click:function(e){return t.SET_REPORT(o)}}},[a("q-item-section",{attrs:{avatar:""}},[a("div",[a("q-chip",{staticClass:"q-ml-sm text-center",staticStyle:{width:"60px"},attrs:{color:"FULL"==o.frameID.out?"green":"light-green",dark:"",dense:"",square:""}},[t._v(t._s(o.frameID.out))]),a("q-chip",{attrs:{color:"primary",dark:"",dense:"",square:""}},[t._v(t._s(t.getDatetime(o.logDatetime)))])],1)]),a("q-item-section",[a("q-item-label",{staticClass:"ellipsis"},[t._v(t._s(o.hex))])],1)],1)]}}])}),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-btn",{attrs:{icon:t.followState?"lock":"lock_open",color:t.followState?"secondary":"grey",disable:0==t.devReports.length,"fab-mini":""},on:{click:function(e){t.followState=!t.followState}}},[a("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle"}},[t._v(t._s(t.followState?"Unfollow":"Follow"))])],1)],1)],1)},T=[],I=a("c1df"),Q=a.n(I),D=a("a7bc"),j=a("5662"),N=a("ae51"),E={mixins:[N["a"]],props:{contentStyle:{type:String,required:!0}},computed:i()(i()(i()(i()({},Object(g["e"])("db",["report"])),Object(g["e"])("common",["follow"])),Object(g["c"])("db",[v["f"]])),{},{followState:{get(){return this.follow},set(t){this.SET_FOLLOW(t)}}}),methods:i()(i()(i()({},Object(g["d"])("db",[D["i"]])),Object(g["d"])("common",[j["c"]])),{},{getDatetime(t){return Q.a.unix(t.val).format("HH:mm:ss")}})},M=E,A=a("54e1"),R=a("0016"),F=a("a12b"),L=a("66e5"),P=a("4074"),$=a("b047"),z=a("0170"),V=a("de5e"),B=a("9c40"),H=a("05c0"),J=Object(S["a"])(M,C,T,!1,null,null,null),U=J.exports;O()(J,"components",{QBanner:A["a"],QIcon:R["a"],QVirtualScroll:F["a"],QItem:L["a"],QItemSection:P["a"],QChip:$["a"],QItemLabel:z["a"],QPageSticky:V["a"],QBtn:B["a"],QTooltip:H["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.contentStyle},[a("div",{staticClass:"text-subtitle2"},[t._v("Last fetch: "+t._s(t.fingerTime()))]),0==t.devFingers.length?a("q-banner",{scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[t._v("\n    No finger driver yet\n  ")]):a("q-virtual-scroll",{attrs:{items:t.devFingers,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.item,n=e.index;return[a("q-item",{key:n,attrs:{dense:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-chip",{attrs:{color:"primary",dark:"",square:""}},[t._v(t._s(o.fingerID))])],1),a("q-item-section",[a("q-item-label",[t._v("Mr. "+t._s(t.name[o.fingerID-1]))])],1),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{loading:t.loading,size:"sm",icon:"delete",outline:"",unelevated:"",round:""},on:{click:function(e){return t.remove(o)}}})],1)],1)]}}])}),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-fab",{attrs:{"external-label":"","vertical-actions-align":"right",color:"secondary",icon:"keyboard_arrow_left",direction:"left","label-position":"top",padding:"sm",disable:t.loading},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[a("q-fab-action",{attrs:{disable:t.loading||!t.devDevice,"label-position":"top",color:"primary",icon:"download",label:"Fetch","external-label":""},on:{click:t.fetch}}),a("q-fab-action",{attrs:{disable:t.loading||!t.devDevice,"label-position":"top",color:"green",icon:"upload",label:"Add","external-label":""},on:{click:t.add}}),a("q-fab-action",{attrs:{disable:t.loading||!t.devDevice,"label-position":"top",color:"orange",icon:"delete_forever",label:"Reset","external-label":""},on:{click:t.clear}})],1)],1)],1)},Y=[],K=a("41f5"),W=a("2ef0"),X=a("6ad4"),Z={mixins:[N["a"]],props:{contentStyle:{type:String,required:!0}},data(){return{name:["One","Two","Three","Four","Five"],fab:!1}},computed:i()({},Object(g["c"])("db",[v["d"],v["b"]])),methods:i()(i()({},Object(g["b"])("db",[X["a"]])),{},{fingerTime(){let t=Object(W["get"])(this.devDevice,"fingerTime");return t?Q.a.unix(t).format("DD-MM-YY HH:mm:ss"):"Unknown"},fetch(){this.INSERT_COMMAND({payload:"FINGER_FETCH"})},add(){this.INSERT_COMMAND({payload:"FINGER_ADD"})},remove({fingerID:t}){Object(K["a"])(`Are you sure to remove this fingerprint ${t} ?`).onOk((()=>this.INSERT_COMMAND({payload:`FINGER_DEL=${t}`})))},clear(){Object(K["a"])("Are you sure to clear all fingerprints  ?").onOk((()=>this.INSERT_COMMAND({payload:"FINGER_RST"})))}})},tt=Z,et=a("c294"),at=a("72db"),ot=Object(S["a"])(tt,G,Y,!1,null,null,null),nt=ot.exports;O()(ot,"components",{QBanner:A["a"],QIcon:R["a"],QVirtualScroll:F["a"],QItem:L["a"],QItemSection:P["a"],QChip:$["a"],QItemLabel:z["a"],QBtn:B["a"],QPageSticky:V["a"],QFab:et["a"],QFabAction:at["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.contentStyle},[a("div",{staticClass:"row q-gutter-xs"},[a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"delete",color:"negative",label:"Clear data",disable:0==t.devices.length},on:{click:function(e){return t.clearStore()}}})],1),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"stop",color:"primary",label:"Ignore command",disable:!t.command.exec},on:{click:function(e){return t.ignoreCommand()}}})],1),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"cloud_download",color:"green",label:"Export CSV",disable:0==t.reports.length},nativeOn:{click:function(e){return t.exportCSV()}}})],1),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"cloud_download",color:"purple",label:"Export JSON",disable:0==t.reports.length},nativeOn:{click:function(e){return t.exportJSON()}}})],1)]),a("div",{staticClass:"row q-gutter-xs q-mt-xs"},[a("div",{staticClass:"col-auto"},[a("q-uploader",{ref:"importer",attrs:{factory:t.importJSON,accept:".json",label:"Import JSON"},on:{finishImport:t.finishImport}})],1)]),a("div",{staticClass:"row q-gutter-xs q-mt-xs"},[a("div",{staticClass:"col-auto"},[a("q-toggle",{attrs:{disable:0==t.devices.length,label:"Time Calibration"},model:{value:t.calibrationState,callback:function(e){t.calibrationState=e},expression:"calibrationState"}})],1),a("div",{staticClass:"col-auto"},[a("q-toggle",{attrs:{label:"Notification"},model:{value:t.notificationState,callback:function(e){t.notificationState=e},expression:"notificationState"}})],1)])])},it=[],lt=(a("13d5"),a("e6cf"),a("ab1c")),st=a("f23f"),ct=a("2e92");const dt=t=>t.map((t=>i()({},lt["a"].reduce(((e,{field:a,no:o})=>i()(i()({},e),{},{[o]:t[a]?t[a].out:""})),{})))),pt=()=>lt["a"].reduce(((t,{title:e,unit:a})=>t.concat([e+(a?` (${a})`:"")])),[]),mt=t=>{const e=new st["ExportToCsv"]({fieldSeparator:",",quoteStrings:'"',decimalSeparator:".",showLabels:!0,showTitle:!1,title:"My Awesome CSV",useTextFile:!1,useBom:!0,useKeysAsHeaders:!1,headers:pt()});e.generateCsv(dt(t))},ut=t=>t?t.map((({hex:t})=>t)):[],bt=t=>{const e=`tracking-${Q()().format("YYMMDDHHmmss")}`,a=ut(t),o="json";Object(ct["a"])({data:a,fileName:e,exportType:o})},ft=t=>new Promise(((e,a)=>{t||a();let o=new FileReader;o.onload=t=>e(JSON.parse(t.target.result)),o.readAsText(t)}));var vt={mixins:[N["a"]],props:{contentStyle:{type:String,required:!0}},computed:i()(i()(i()({},Object(g["e"])("common",["calibration","notification"])),Object(g["e"])("db",["devices","command","reports"])),{},{calibrationState:{get(){return this.calibration},set(t){this.SET_CALIBRATION(t)}},notificationState:{get(){return this.notification},set(t){this.SET_NOTIFICATION(t)}}}),methods:i()(i()(i()({},Object(g["d"])("common",[j["a"],j["e"]])),Object(g["d"])("db",[D["e"],X["d"]])),{},{finishImport(){this.$refs.importer.reset()},exportJSON(){bt(this.reports)},exportCSV(){mt(this.reports)},importJSON(t){ft(t[0]).then((t=>this.$root.$emit("importData",t)))},clearStore(){Object(K["a"])("Are you sure to remove all data?").onOk((()=>this.CLEAR_DATABASE()))},ignoreCommand(){Object(K["c"])("Command ignored.","warning"),this.STOP_COMMAND()}})},gt=vt,ht=a("ee89"),yt=a("9564"),St=Object(S["a"])(gt,rt,it,!1,null,null,null),xt=St.exports;O()(St,"components",{QBtn:B["a"],QUploader:ht["a"],QToggle:yt["a"]});var qt={mixins:[N["a"]],components:{MapManagement:k,ReportLog:U,DriverManagement:nt,GlobalConfiguration:xt},data(){return{selectedTab:"tab-1",splitter:50}},computed:i()(i()({},Object(g["c"])("db",[v["f"],v["d"]])),{},{contentStyle(){return`height: calc(100vh - ${this.splitter}vh - 95px)`}})},_t=qt,Ot=a("9989"),wt=a("429b"),kt=a("7460"),Ct=a("58a81"),Tt=a("adad"),It=a("823b"),Qt=Object(S["a"])(_t,o,n,!1,null,null,null);e["default"]=Qt.exports;O()(Qt,"components",{QPage:Ot["a"],QSplitter:x["a"],QAvatar:q["a"],QTabs:wt["a"],QTab:kt["a"],QBadge:Ct["a"],QTabPanels:Tt["a"],QTabPanel:It["a"]})}}]);