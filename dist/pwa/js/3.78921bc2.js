(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"8b24":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{class:e.darkerClass},[a("q-splitter",{staticStyle:{height:"calc(100vh - 50px)"},attrs:{value:40,horizontal:""},scopedSlots:e._u([{key:"before",fn:function(){return[a("map-management")]},proxy:!0},{key:"after",fn:function(){return[a("q-tabs",{staticClass:"bg-primary text-white",model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},[a("q-tab",{attrs:{name:"tab-1",label:"Report Log"}},[a("q-badge",{attrs:{color:"red",floating:""}},[e._v(e._s(e.devReports.length))])],1),a("q-tab",{attrs:{name:"tab-2",label:"Driver Management"}},[a("q-badge",{attrs:{color:"red",floating:""}},[e._v(e._s(e.devFingers.length))])],1),a("q-tab",{attrs:{name:"tab-3",label:"Configuration"}})],1),a("q-tab-panels",{class:e.darkerClass,attrs:{"keep-alive":"",animated:"",swipeable:""},model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},[a("q-tab-panel",{attrs:{name:"tab-1"}},[a("report-log")],1),a("q-tab-panel",{attrs:{name:"tab-2"}},[a("driver-management")],1),a("q-tab-panel",{attrs:{name:"tab-3"}},[a("global-configuration")],1)],1)]},proxy:!0}])})],1)},r=[],i=a("ded3"),s=a.n(i),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-splitter",{attrs:{value:e.showStreetView?50:100},scopedSlots:e._u([{key:"before",fn:function(){return[a("gmap-map",{staticClass:"fit",attrs:{center:e.center,zoom:e.zoom,"map-type-id":"roadmap"}},[e.position.valid?a("gmap-marker",{attrs:{position:e.position}}):e._e(),e.path.length>0?a("gmap-polyline",{ref:"polyline",attrs:{path:e.path}}):e._e()],1)]},proxy:!0},e.showStreetView?{key:"after",fn:function(){return[a("gmap-street-view-panorama",{staticClass:"fit",attrs:{position:e.position,pov:e.pov,zoom:1},on:{pano_changed:e.updatePano,pov_changed:e.updatePov}})]},proxy:!0}:null],null,!0)})},l=[],c=a("4082"),d=a.n(c),m=a("110e");const p=({lng:e,lat:t})=>{let{borderIndonesia:a}=m["b"].map;return e>a.lngMin&&e<a.lngMax&&t>a.latMin&&t<a.latMax},u=({frameID:e,lat:t,lng:a})=>{let n=s()(s()({},m["b"].map.centerIndonesia),{},{valid:!1});return e===m["b"].frame.id.FULL&&(n.lat=t,n.lng=a,n.valid=p(n)),n},b=({frameID:e,heading:t})=>e===m["b"].frame.id.FULL?t:0;var h=a("d87e"),g=a("2f62"),f={data(){return{center:s()({},m["b"].map.centerIndonesia),position:s()(s()({},m["b"].map.centerIndonesia),{},{valid:!1}),zoom:m["b"].map.zoom,pov:null,pano:null,path:[]}},computed:s()(s()(s()({},Object(g["e"])("db",["theReport"])),Object(g["c"])("db",[h["d"]])),{},{showStreetView(){return this.$q.screen.gt.sm}}),methods:{updatePov(e){this.pov=e},updatePano(e){this.pano=e},setPosition(e){let{valid:t}=e,a=d()(e,["valid"]);t?(this.zoom=17,this.center=s()({},a)):(this.zoom=m["b"].map.zoom,this.center=s()({},m["b"].map.centerIndonesia)),this.position=s()(s()({},a),{},{valid:t})}},watch:{devReports:{immediate:!0,handler(e){if(e.length>0){let{frameID:t,gpsLatitude:a,gpsLongitude:n}=e[0],r=u({frameID:t.val,lat:a&&a.val,lng:n&&n.val});r.valid&&this.path.push(r)}}},theReport:{immediate:!0,handler(e){if(e){let{frameID:t,gpsLatitude:a,gpsLongitude:n,gpsHeading:r}=e;this.setPosition(u({frameID:t.val,lat:a&&a.val,lng:n&&n.val})),this.pov&&this.updatePov(s()(s()({},this.pov),{},{heading:b({frameID:t.val,heading:r&&r.val})}))}}}}},v=f,k=a("2877"),q=a("8562"),C=a("eebe"),x=a.n(C),_=Object(k["a"])(v,o,l,!1,null,null,null),S=_.exports;x()(_,"components",{QSplitter:q["a"]});var I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-right"},[a("q-btn",{staticClass:"q-ma-xs",attrs:{color:"green",label:"FOLLOW",icon:e.lock.follow?"lock":"lock_open",dense:"",unelevated:"",outline:!e.lock.follow,loading:e.loading,disable:0==e.devReports.length},on:{click:function(t){e.lock.follow=!e.lock.follow}}})],1),a("div",{staticClass:"col-12"},[a("q-virtual-scroll",{staticStyle:{height:"calc(100vh - 440px)"},attrs:{items:e.devReports,separator:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item,r=t.index;return[a("q-item",{key:r,attrs:{dark:e.darker,active:n.hex===e.theReport.hex,"active-class":"bg-primary text-white",clickable:"",dense:""},on:{click:function(t){return e.SET_THE_REPORT(n)}}},[a("q-item-section",{attrs:{avatar:""}},[a("div",[a("q-chip",{staticClass:"q-ml-sm text-center",staticStyle:{width:"60px"},attrs:{color:"FULL"==n.frameID.out?"green":"light-green",dark:"",dense:"",square:""}},[e._v("\n                "+e._s(n.frameID.out)+"\n              ")]),a("q-chip",{attrs:{color:"primary",dark:"",dense:"",square:""}},[e._v("\n                "+e._s(e.getDatetime(n))+"\n              ")])],1)]),a("q-item-section",[a("q-item-label",{staticClass:"ellipsis"},[e._v("\n              "+e._s(n.hex)+"\n            ")])],1)],1)]}},{key:"after",fn:function(){return[0==e.devReports.length?a("q-banner",{attrs:{dark:e.darker},scopedSlots:e._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[e._v("\n          No report yet\n        ")]):e._e()]},proxy:!0}])})],1)])},D=[],y=a("1a0d"),O=a("a7bc"),E=a("ae51"),w={mixins:[E["a"]],data(){return{lock:{follow:!0}}},computed:s()(s()({},Object(g["e"])("db",["theUnit","theReport"])),Object(g["c"])("db",[h["d"]])),methods:s()(s()({},Object(g["d"])("db",[O["m"]])),{},{getDatetime({logDatetime:e}){return Object(y["i"])(e.val)}}),watch:{devReports:{immediate:!0,handler(e){e.length>0&&this.lock.follow&&this.SET_THE_REPORT(e[0])}}}},R=w,T=a("9c40"),F=a("a12b"),$=a("66e5"),L=a("4074"),Q=a("b047"),j=a("0170"),N=a("54e1"),A=a("0016"),G=Object(k["a"])(R,I,D,!1,null,null,null),P=G.exports;x()(G,"components",{QBtn:T["a"],QVirtualScroll:F["a"],QItem:$["a"],QItemSection:L["a"],QChip:Q["a"],QItemLabel:j["a"],QBanner:N["a"],QIcon:A["a"]});var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row q-gutter-xs"},[a("div",{staticClass:"col-xs-12 text-right"},[a("q-btn",{staticClass:"q-ma-xs",attrs:{color:"purple",label:"FETCH",dense:"",unelevated:"",disable:!e.theUnit,loading:e.loading},on:{click:function(t){return e.fetchFinger()}}}),a("q-btn",{staticClass:"q-ma-xs",attrs:{color:"green",label:"ADD",dense:"",unelevated:"",disable:!e.theUnit,loading:e.loading},on:{click:function(t){return e.addFinger()}}}),a("q-btn",{staticClass:"q-ma-xs",attrs:{color:"red",label:"RESET",dense:"",unelevated:"",disable:e.loading||!e.theUnit,loading:e.loading},on:{click:function(t){return e.resetFinger()}}})],1),a("div",{staticClass:"col-xs-12"},[a("q-virtual-scroll",{staticStyle:{height:"calc(100vh - 450px)"},attrs:{items:e.devFingers,separator:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item,r=t.index;return[a("q-item",{key:r,attrs:{dark:e.darker}},[a("q-item-section",{attrs:{avatar:""}},[a("q-chip",{attrs:{color:"primary",dark:"",square:""}},[e._v("\n              "+e._s(n.fingerID)+"\n            ")])],1),a("q-item-section",[a("q-item-label",[e._v(" Mr. "+e._s(e.name[n.fingerID-1]))])],1),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{loading:e.loading,color:"red",size:"sm",icon:"delete",unelevated:"",round:""},on:{click:function(t){return e.deleteFinger(n)}}})],1)],1)]}},{key:"after",fn:function(){return[0==e.devFingers.length?a("q-banner",{attrs:{dark:e.darker},scopedSlots:e._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[e._v("\n          No finger driver yet\n        ")]):e._e()]},proxy:!0}])})],1)])},H=[],z=a("95f8"),B=a("595a"),U=a("5f41"),J={mixins:[E["a"]],data(){return{name:["One","Two","Three","Four","Five"]}},computed:s()(s()({},Object(g["e"])("db",["theUnit","commands"])),Object(g["c"])("db",[h["c"],h["d"]])),mounted(){this.devReports.length>0&&this.devReports[0].vehicleState.out>=U["b"]["STANDBY"]&&this.fetchFinger()},methods:s()(s()({},Object(g["d"])("db",[O["b"],O["h"],O["i"]])),{},{fetchFinger(){this.$root.$emit("executeCommand","FINGER_FETCH")},addFinger(){this.$root.$emit("executeCommand","FINGER_ADD")},deleteFinger({fingerID:e}){this.$q.dialog({title:"Confirmation",message:`Are you sure to remove this fingerprint *${e}* ?`,dark:this.darker,preventClose:!0,cancel:!0}).onOk((()=>this.$root.$emit("executeCommand",`FINGER_DEL=${e}`)))},resetFinger(){this.$q.dialog({title:"Confirmation",message:"Are you sure to remove all fingerprints  ?",dark:this.darker,preventClose:!0,cancel:!0}).onOk((()=>this.$root.$emit("executeCommand","FINGER_RST")))}}),watch:{commands:{deep:!0,handler(e){if(e.length>0){let{resCode:t,payload:a,unitID:n,message:r}=e[0],i=Object(B["a"])(t);if("OK"==i.title){let{prop:e,value:t}=Object(z["b"])(a);if("FINGER_FETCH"==e){if(r.length>0){let e=r.split(",");for(let t=e.length-1;t>=0;t--)this.ADD_FINGERS({unitID:n,fingerID:e[t]})}}else"FINGER_ADD"==e?this.ADD_FINGERS({unitID:n,fingerID:r}):"FINGER_DEL"==e?this.DELETE_FINGERS({unitID:n,fingerID:t}):"FINGER_RST"==e&&this.RESET_FINGERS({unitID:n})}}}}}},V=J,K=Object(k["a"])(V,M,H,!1,null,null,null),Y=K.exports;x()(K,"components",{QBtn:T["a"],QVirtualScroll:F["a"],QItem:$["a"],QItemSection:L["a"],QChip:Q["a"],QItemLabel:j["a"],QBanner:N["a"],QIcon:A["a"]});var W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-auto q-ma-sm"},[a("q-btn",{staticClass:"q-ma-xs",attrs:{icon:"delete",color:"negative",label:"Clear data",disable:0==e.units.length},on:{click:function(t){return e.clearStore()}}})],1),a("div",{staticClass:"col-auto q-ma-sm"},[a("q-btn",{staticClass:"q-ma-xs",attrs:{icon:"stop",color:"primary",label:"Ignore command",disable:!e.theCommand},on:{click:function(t){return e.$root.$emit("ignoreCommand")}}})],1),a("div",{staticClass:"col-auto q-ma-sm"},[a("q-btn",{staticClass:"q-ma-xs",attrs:{icon:"cloud_download",color:"green",label:"Export CSV",disable:0==e.reports.length},nativeOn:{click:function(t){return e.exportCSV()}}})],1),a("div",{staticClass:"col-auto q-ma-sm"},[a("q-btn",{staticClass:"q-ma-xs",attrs:{icon:"cloud_download",color:"purple",label:"Export JSON",disable:0==e.reports.length},nativeOn:{click:function(t){return e.exportJSON()}}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-auto q-ma-sm"},[a("q-uploader",{ref:"importer",staticClass:"q-ma-sm",attrs:{factory:e.importJSON,dark:e.darker,accept:".json",label:"Import JSON"},on:{finish:e.finish}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-auto q-ma-sm"},[a("q-toggle",{staticClass:"q-pt-lg",attrs:{dark:e.darker,label:"Dark Mode"},model:{value:e.darkState,callback:function(t){e.darkState=t},expression:"darkState"}})],1),a("div",{staticClass:"col-auto q-ma-sm"},[a("q-toggle",{staticClass:"q-pt-lg",attrs:{disable:0==e.units.length,dark:e.darker,label:"Time Calibration"},model:{value:e.calibrationState,callback:function(t){e.calibrationState=t},expression:"calibrationState"}})],1)])])])},X=[],Z=(a("e6cf"),a("6ad4")),ee=(a("13d5"),a("26e9"),a("ab1c")),te=a("f23f"),ae=a("2e92"),ne=a("c1df"),re=a.n(ne);const ie=e=>e.map((e=>s()({},ee["a"].reduce(((t,{field:a,no:n})=>s()(s()({},t),{},{[n]:e[a]?e[a].out:""})),{})))),se=()=>ee["a"].reduce(((e,{title:t,unit:a})=>e.concat([t+(a?` (${a})`:"")])),[]),oe=e=>{const t=new te["ExportToCsv"]({fieldSeparator:",",quoteStrings:'"',decimalSeparator:".",showLabels:!0,showTitle:!1,title:"My Awesome CSV",useTextFile:!1,useBom:!0,useKeysAsHeaders:!1,headers:se()});t.generateCsv(ie(e))},le=e=>e?e.reverse().map((({hex:e})=>e)):[],ce=e=>{const t=`tracking-${re()().format("YYMMDDHHmmss")}`,a=le(e),n="json";Object(ae["a"])({data:a,fileName:t,exportType:n})};var de={mixins:[E["a"]],computed:s()(s()(s()({},Object(g["e"])("db",["units","calibration","theCommand","reports","commands"])),Object(g["c"])("db",[h["d"]])),{},{calibrationState:{get(){return this.calibration},set(e){this.TOGGLE_CALIBRATION()}},darkState:{get(){return this.darker},set(e){this.TOGGLE_DARKER()}}}),methods:s()(s()(s()({},Object(g["d"])("db",[O["o"],O["p"]])),Object(g["b"])("db",[Z["c"]])),{},{finish(){this.$refs.importer.reset()},exportJSON(){ce(this.reports)},exportCSV(){oe(this.reports)},importJSON(e){return new Promise(((t,a)=>{if(0==this.reports.length){let a=new FileReader;a.onload=e=>{this.$root.$emit("importData",JSON.parse(e.target.result)),t()},a.readAsText(e[0])}else this.$q.notify({message:"Database should empty",type:"negative"}),a()}))},clearStore(){this.$q.dialog({title:"Confirmation",message:"Are you sure to remove all data?",dark:this.darker,preventClose:!0,cancel:!0}).onOk((()=>this.RESET_DATABASE()))}}),watch:{devReports:function(e){if(e.length>0&&this.calibration){let{frameID:t,gpsLatitude:a,gpsLongitude:n,sendDatetime:r}=e[0];if(t.val===this.$config.frame.id.FULL){let e=Object(y["b"])({lat:a.val,lng:n.val,datetime:r.val});e&&(this.$root.$emit("executeCommand",`REPORT_RTC=${e}`),this.$q.notify({message:"Calibrating device time.."}))}}}}},me=de,pe=a("ee89"),ue=a("9564"),be=Object(k["a"])(me,W,X,!1,null,null,null),he=be.exports;x()(be,"components",{QBtn:T["a"],QUploader:pe["a"],QToggle:ue["a"]});var ge={mixins:[E["a"]],components:{MapManagement:S,ReportLog:P,DriverManagement:Y,GlobalConfiguration:he},data(){return{selectedTab:"tab-1",mapHeight:300,paneHeight:0,pageWidth:0}},computed:s()({},Object(g["c"])("db",[h["d"],h["c"]]))},fe=ge,ve=a("9989"),ke=a("429b"),qe=a("7460"),Ce=a("58a81"),xe=a("adad"),_e=a("823b"),Se=Object(k["a"])(fe,n,r,!1,null,null,null);t["default"]=Se.exports;x()(Se,"components",{QPage:ve["a"],QSplitter:q["a"],QTabs:ke["a"],QTab:qe["a"],QBadge:Ce["a"],QTabPanels:xe["a"],QTabPanel:_e["a"]})},ae51:function(e,t,a){"use strict";var n=a("ded3"),r=a.n(n),i=a("2f62");t["a"]={computed:r()(r()({},Object(i["e"])("db",["loading","darker"])),{},{darkerClass(){return this.darker?"bg-dark text-white":"bg-white text-grey-9"}})}}}]);