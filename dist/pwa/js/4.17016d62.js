(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-splitter",{staticStyle:{height:"calc(100vh - 50px)"},attrs:{horizontal:""},scopedSlots:e._u([{key:"before",fn:function(){return[a("map-management")]},proxy:!0},{key:"separator",fn:function(){return[a("q-avatar",{attrs:{color:"grey","text-color":"white",size:"20px",icon:"drag_indicator"}})]},proxy:!0},{key:"after",fn:function(){return[a("q-tabs",{staticClass:"bg-primary text-white",attrs:{dense:""},model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},[a("q-tab",{attrs:{name:"tab-1",label:"Report Log"}},[a("q-badge",{attrs:{color:"red",floating:""}},[e._v(e._s(e.devReports.length))])],1),a("q-tab",{attrs:{name:"tab-2",label:"Driver Management"}},[a("q-badge",{attrs:{color:"red",floating:""}},[e._v(e._s(e.devFingers.length))])],1),a("q-tab",{attrs:{name:"tab-3",label:"Configuration"}})],1),a("q-tab-panels",{attrs:{swipeable:""},model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},[a("q-tab-panel",{attrs:{name:"tab-1"}},[a("report-log",{attrs:{"content-style":e.contentStyle}})],1),a("q-tab-panel",{attrs:{name:"tab-2"}},[a("driver-management",{attrs:{"content-style":e.contentStyle}})],1),a("q-tab-panel",{attrs:{name:"tab-3"}},[a("global-configuration",{attrs:{"content-style":e.contentStyle}})],1)],1)]},proxy:!0}]),model:{value:e.splitter,callback:function(t){e.splitter=t},expression:"splitter"}})],1)},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-splitter",{attrs:{value:e.streetView?50:100},scopedSlots:e._u([{key:"before",fn:function(){return[a("gmap-map",{staticClass:"fit",attrs:{center:e.center,zoom:e.zoom,options:e.options,"map-type-id":"roadmap"}},[e.position.valid?a("gmap-marker",{attrs:{position:e.position}}):e._e(),e.path.length>0?a("gmap-polyline",{ref:"polyline",attrs:{path:e.path}}):e._e()],1)]},proxy:!0},e.streetView?{key:"separator",fn:function(){return[a("q-avatar",{attrs:{color:"grey","text-color":"white",size:"20px",icon:"drag_indicator"}})]},proxy:!0}:null,e.streetView?{key:"after",fn:function(){return[a("gmap-street-view-panorama",{staticClass:"fit",attrs:{position:e.position,pov:e.pov,zoom:1},on:{pano_changed:e.updatePano,pov_changed:e.updatePov}})]},proxy:!0}:null],null,!0)},[a("q-resize-observer",{on:{resize:e.onResize}})],1)},l=[],s=a("4082"),i=a.n(s),c=a("ded3"),p=a.n(c),d=a("9482"),u=a("9944");const b=({lng:e,lat:t})=>{let{borderIndonesia:a}=d["a"].map;return e>a.lngMin&&e<a.lngMax&&t>a.latMin&&t<a.latMax},v=({frameID:e,gpsLatitude:t,gpsLongitude:a})=>{let o=p()(p()({},d["a"].map.centerIndonesia),{},{valid:!1});return e.val===Object(u["e"])("FULL")&&(o.lat=t.val,o.lng=a.val,o.valid=b(o)),o},m=({frameID:e,gpsHeading:t})=>e.val===Object(u["e"])("FULL")?t.val:0;var f=a("e4fd"),g=a("8d7e"),y={setup(e){const{useState:t,useGetters:a}=Object(g["a"])("db"),{report:o}=t(["report"]),{devReports:r}=a(["devReports"]),{centerIndonesia:n,zoom:l}=d["a"].map,s=Object(f["reactive"])({streetView:!1,pov:null,pano:null,path:[],zoom:l,center:p()({},n),position:p()(p()({},n),{},{valid:!1}),options:{zoomControl:!0,mapTypeControl:!1,scaleControl:!0,streetViewControl:!1,rotateControl:!1,fullscreenControl:!0,disableDefaultUi:!0}}),c=e=>s.pov=e,u=e=>s.pano=e,b=e=>{let{valid:t}=e,a=i()(e,["valid"]);s.zoom=t?17:l,s.center=p()({},t?a:n),s.position=p()(p()({},a),{},{valid:t})},y=({width:e})=>s.streetView=e>500;return Object(f["watch"])((()=>r.value[0]),(e=>{if(!e)return;let t=v(e);t.valid&&s.path.push(t)}),{lazy:!1}),Object(f["watch"])((()=>o.value),(e=>{e&&(b(v(e)),s.pov&&c(p()(p()({},s.pov),{},{heading:m(e)})))}),{lazy:!1}),p()(p()({},Object(f["toRefs"])(s)),{},{updatePov:c,updatePano:u,onResize:y})}},h=y,q=a("2877"),x=a("8562"),S=a("3980"),_=a("cb32"),k=a("eebe"),w=a.n(k),O=Object(q["a"])(h,n,l,!1,null,null,null),C=O.exports;w()(O,"components",{QSplitter:x["a"],QResizeObserver:S["a"],QAvatar:_["a"]});var j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:e.contentStyle},[0==e.devReports.length?a("q-banner",{scopedSlots:e._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[e._v("\n    No report yet\n  ")]):a("q-virtual-scroll",{attrs:{items:e.devReports,separator:""},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.item,r=t.index;return[a("q-item",{key:r,attrs:{active:o.hex===e.report.hex,"active-class":"bg-primary text-white",clickable:"",dense:""},on:{click:function(t){return e.setReport(o)}}},[a("q-item-section",{attrs:{avatar:""}},[a("div",[a("q-chip",{staticClass:"q-ml-sm text-center",staticStyle:{width:"60px"},attrs:{color:"FULL"==o.frameID.out?"green":"light-green",dark:"",dense:"",square:""}},[e._v(e._s(o.frameID.out))]),a("q-chip",{attrs:{color:"primary",dark:"",dense:"",square:""}},[e._v(e._s(e.getDatetime(o.logDatetime)))])],1)]),a("q-item-section",[a("q-item-label",{staticClass:"ellipsis"},[e._v(e._s(o.hex))])],1)],1)]}}])}),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-btn",{attrs:{icon:e.followState?"lock":"lock_open",color:e.followState?"secondary":"grey",disable:0==e.devReports.length,"fab-mini":""},on:{click:function(t){e.followState=!e.followState}}},[a("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle"}},[e._v(e._s(e.followState?"Unfollow":"Follow"))])],1)],1)],1)},Q=[],R=a("c1df"),D=a.n(R),F=a("a7bc"),T=a("5662"),I={props:{contentStyle:{type:String,required:!0}},setup(e){const t=Object(g["a"])("db"),{report:a}=t.useState(["report"]),{devReports:o}=t.useGetters(["devReports"]),{[F["k"]]:r}=t.useMutations([F["k"]]),n=Object(g["a"])("common"),{follow:l}=n.useState(["follow"]),{[T["b"]]:s}=n.useMutations([T["b"]]),i=Object(f["computed"])({get:()=>l.value,set:e=>s(e)}),c=e=>D.a.unix(e.val).format("HH:mm:ss");return{report:a,devReports:o,followState:i,setReport:r,getDatetime:c}}},z=I,M=a("54e1"),L=a("0016"),E=a("a12b"),A=a("66e5"),N=a("4074"),V=a("b047"),P=a("0170"),$=a("de5e"),G=a("9c40"),H=a("05c0"),B=Object(q["a"])(z,j,Q,!1,null,null,null),U=B.exports;w()(B,"components",{QBanner:M["a"],QIcon:L["a"],QVirtualScroll:E["a"],QItem:A["a"],QItemSection:N["a"],QChip:V["a"],QItemLabel:P["a"],QPageSticky:$["a"],QBtn:G["a"],QTooltip:H["a"]});var J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:e.contentStyle},[a("div",{staticClass:"text-subtitle2"},[e._v("Last fetch: "+e._s(e.getFingerTime()))]),0==e.devFingers.length?a("q-banner",{scopedSlots:e._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[e._v("\n    No finger driver yet\n  ")]):a("q-virtual-scroll",{attrs:{items:e.devFingers,separator:""},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.item,r=t.index;return[a("q-item",{key:r,attrs:{dense:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-chip",{attrs:{color:"primary",dark:"",square:""}},[e._v(e._s(o.fingerID))])],1),a("q-item-section",[a("q-item-label",[e._v("Mr. "+e._s(e.name[o.fingerID-1]))])],1),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{loading:e.processing,size:"sm",icon:"delete",outline:"",unelevated:"",round:""},on:{click:function(t){return e.remove(o)}}})],1)],1)]}}])}),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-fab",{attrs:{"external-label":"","vertical-actions-align":"right",color:"secondary",icon:"keyboard_arrow_left",direction:"left","label-position":"top",padding:"sm",disable:e.processing},model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[a("q-fab-action",{attrs:{disable:e.processing||!e.devDevice,"label-position":"top",color:"primary",icon:"download",label:"Fetch","external-label":""},on:{click:e.fetch}}),a("q-fab-action",{attrs:{disable:e.processing||!e.devDevice,"label-position":"top",color:"green",icon:"upload",label:"Add","external-label":""},on:{click:e.add}}),a("q-fab-action",{attrs:{disable:e.processing||!e.devDevice,"label-position":"top",color:"orange",icon:"delete_forever",label:"Reset","external-label":""},on:{click:e.clear}})],1)],1)],1)},Y=[],K=a("b7fa3"),W=a("2ef0"),X=a("6ad4"),Z={props:{contentStyle:{type:String,required:!0}},setup(e){const{useGetters:t,useActions:a}=Object(g["a"])("db"),{devFingers:o,devDevice:r}=t(["devFingers","devDevice"]),{[X["a"]]:n}=a([X["a"]]),l=Object(f["ref"])(["One","Two","Three","Four","Five"]),s=Object(f["ref"])(!1),i=()=>{let e=Object(W["get"])(r.value,"fingerTime");return e?D.a.unix(e).format("DD-MM-YY HH:mm:ss"):"Unknown"},c=()=>n({payload:"FINGER_FETCH"}),p=()=>n({payload:"FINGER_ADD"}),d=({fingerID:e})=>Object(K["a"])(`Are you sure to remove this fingerprint ${e} ?`).onOk((()=>n({payload:`FINGER_DEL=${e}`}))),u=()=>Object(K["a"])("Are you sure to clear all fingerprints  ?").onOk((()=>n({payload:"FINGER_RST"})));return{name:l,fab:s,devFingers:o,devDevice:r,getFingerTime:i,fetch:c,add:p,remove:d,clear:u}}},ee=Z,te=a("c294"),ae=a("72db"),oe=Object(q["a"])(ee,J,Y,!1,null,null,null),re=oe.exports;w()(oe,"components",{QBanner:M["a"],QIcon:L["a"],QVirtualScroll:E["a"],QItem:A["a"],QItemSection:N["a"],QChip:V["a"],QItemLabel:P["a"],QBtn:G["a"],QPageSticky:$["a"],QFab:te["a"],QFabAction:ae["a"]});var ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:e.contentStyle},[a("div",{staticClass:"row q-gutter-xs"},[a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"delete",label:"Reset DB",disable:0==e.devices.length},on:{click:function(t){return e.clearStore()}}})],1),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"alarm_on",label:"Calibrate",disable:0==e.devReports.length},on:{click:function(t){return e.calibrate()}}})],1),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"stop",label:"Ignore command",disable:!e.command.exec},on:{click:function(t){return e.ignoreCommand()}}})],1),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"cloud_download",label:"Export CSV",disable:0==e.reports.length},nativeOn:{click:function(t){return e.exportCSV(e.reports)}}})],1),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"cloud_download",label:"Export JSON",disable:0==e.reports.length},nativeOn:{click:function(t){return e.exportJSON(e.reports)}}})],1)]),a("div",{staticClass:"row q-gutter-xs q-mt-xs"},[a("div",{staticClass:"col-auto"},[a("q-uploader",{ref:"uploader",attrs:{factory:e.importData,accept:".json",label:"Import JSON","auto-upload":""}})],1)]),a("div",{staticClass:"row q-gutter-xs q-mt-xs"},[a("div",{staticClass:"col-auto"},[a("q-toggle",{attrs:{label:"Notification"},model:{value:e.notificationState,callback:function(t){e.notificationState=t},expression:"notificationState"}})],1)])])},le=[],se=(a("ddb0"),a("13d5"),a("26e9"),a("fb6a"),a("e6cf"),a("af6a")),ie=a("f23f"),ce=a("2e92");const pe=e=>e.map((e=>p()({},se["a"].reduce(((t,{field:a,no:o})=>p()(p()({},t),{},{[o]:e[a]?e[a].out:""})),{})))),de=()=>se["a"].reduce(((e,{title:t,unit:a})=>e.concat([t+(a?` (${a})`:"")])),[]),ue=e=>{const t=new ie["ExportToCsv"]({fieldSeparator:",",quoteStrings:'"',decimalSeparator:".",showLabels:!0,showTitle:!1,title:"My Awesome CSV",useTextFile:!1,useBom:!0,useKeysAsHeaders:!1,headers:de()});t.generateCsv(pe(e))},be=e=>e?e.map((({hex:e})=>e)):[],ve=e=>{const t=`tracking-${D()().format("YYMMDDHHmmss")}`,a=be(e.slice().reverse()),o="json";Object(ce["a"])({data:a,fileName:t,exportType:o})},me=e=>new Promise(((t,a)=>{e||a();let o=new FileReader;o.onload=e=>t(JSON.parse(e.target.result)),o.readAsText(e)}));var fe={props:{contentStyle:{type:String,required:!0}},setup(e){const t=Object(g["a"])("db"),{devices:a,command:o,reports:r}=t.useState(["devices","command","reports"]),{devDevice:n,devReports:l}=t.useGetters(["devDevice","devReports"]),{[F["f"]]:s,[F["a"]]:i}=t.useMutations([F["f"],X["e"],F["a"]]),{[X["e"]]:c,[X["a"]]:p}=t.useActions([X["e"],X["a"]]),d=Object(g["a"])("common"),{notification:b}=d.useState(["notification"]),{[T["c"]]:v}=d.useMutations([T["c"]]),m=Object(f["ref"])(null),y=Object(f["computed"])({get:()=>b.value,set:e=>v(e)}),h=()=>Object(K["a"])("Are you sure to remove all data?").onOk((()=>s())),q=()=>{Object(K["b"])("Command ignored.","warning"),c()},x=()=>{if(!n)return;let e=l.value.find((({frameID:e})=>e.val==Object(u["e"])("FULL")));if(!e)return;let t=Object(u["b"])(e);t&&(p({payload:`REPORT_RTC=${t}`}),Object(K["b"])("Calibrating device time..","info"))},S=([e])=>me(e).then((e=>{e.forEach((e=>i(e))),m.value.reset()}));return{uploader:m,devices:a,command:o,reports:r,devReports:l,notificationState:y,calibrate:x,clearStore:h,ignoreCommand:q,importData:S,exportJSON:ve,exportCSV:ue}}},ge=fe,ye=a("ee89"),he=a("9564"),qe=Object(q["a"])(ge,ne,le,!1,null,null,null),xe=qe.exports;w()(qe,"components",{QBtn:G["a"],QUploader:ye["a"],QToggle:he["a"]});var Se={components:{MapManagement:C,ReportLog:U,DriverManagement:re,GlobalConfiguration:xe},setup(e){const{useGetters:t}=Object(g["a"])("db"),{devReports:a,devFingers:o}=t(["devReports","devFingers"]),r=Object(f["ref"])("tab-1"),n=Object(f["ref"])(50),l=Object(f["computed"])((()=>`height: calc(100vh - ${n.value}vh - 95px)`));return{selectedTab:r,splitter:n,devReports:a,devFingers:o,contentStyle:l}}},_e=Se,ke=a("9989"),we=a("429b"),Oe=a("7460"),Ce=a("58a81"),je=a("adad"),Qe=a("823b"),Re=Object(q["a"])(_e,o,r,!1,null,null,null);t["default"]=Re.exports;w()(Re,"components",{QPage:ke["a"],QSplitter:x["a"],QAvatar:_["a"],QTabs:we["a"],QTab:Oe["a"],QBadge:Ce["a"],QTabPanels:je["a"],QTabPanel:Qe["a"]})}}]);