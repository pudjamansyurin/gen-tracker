(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(e,t,l){"use strict";l.r(t);var c=l("7a23");function a(e,t,l,a,o,n){const b=Object(c["H"])("map-management"),i=Object(c["H"])("q-avatar"),r=Object(c["H"])("q-badge"),s=Object(c["H"])("q-tab"),O=Object(c["H"])("q-tabs"),d=Object(c["H"])("report-log"),j=Object(c["H"])("q-tab-panel"),u=Object(c["H"])("driver-management"),p=Object(c["H"])("global-configuration"),m=Object(c["H"])("q-tab-panels"),f=Object(c["H"])("q-splitter"),v=Object(c["H"])("q-page");return Object(c["B"])(),Object(c["h"])(v,null,{default:Object(c["S"])((()=>[Object(c["l"])(f,{modelValue:e.splitter,"onUpdate:modelValue":t[3]||(t[3]=t=>e.splitter=t),style:{height:"calc(100vh - 50px)"},horizontal:""},{before:Object(c["S"])((()=>[Object(c["l"])(b)])),separator:Object(c["S"])((()=>[Object(c["l"])(i,{color:"grey","text-color":"white",size:"20px",icon:"drag_indicator"})])),after:Object(c["S"])((()=>[Object(c["l"])(O,{modelValue:e.selectedTab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedTab=t),class:"bg-primary text-white",dense:""},{default:Object(c["S"])((()=>[Object(c["l"])(s,{name:"tab-1",label:"Report Log"},{default:Object(c["S"])((()=>[Object(c["l"])(r,{color:"red",floating:""},{default:Object(c["S"])((()=>[Object(c["k"])(Object(c["L"])(e.devReports.length),1)])),_:1})])),_:1}),Object(c["l"])(s,{name:"tab-2",label:"Driver Management"},{default:Object(c["S"])((()=>[Object(c["l"])(r,{color:"red",floating:""},{default:Object(c["S"])((()=>[Object(c["k"])(Object(c["L"])(e.devFingers.length),1)])),_:1})])),_:1}),Object(c["l"])(s,{name:"tab-3",label:"Configuration"})])),_:1},8,["modelValue"]),Object(c["l"])(m,{modelValue:e.selectedTab,"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedTab=t),swipeable:""},{default:Object(c["S"])((()=>[Object(c["l"])(j,{name:"tab-1"},{default:Object(c["S"])((()=>[Object(c["l"])(d,{"content-style":e.contentStyle},null,8,["content-style"])])),_:1}),Object(c["l"])(j,{name:"tab-2"},{default:Object(c["S"])((()=>[Object(c["l"])(u,{"content-style":e.contentStyle},null,8,["content-style"])])),_:1}),Object(c["l"])(j,{name:"tab-3"},{default:Object(c["S"])((()=>[Object(c["l"])(p,{"content-style":e.contentStyle},null,8,["content-style"])])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1})}const o=Object(c["k"])(" No report yet ");function n(e,t,l,a,n,b){const i=Object(c["H"])("q-icon"),r=Object(c["H"])("q-banner"),s=Object(c["H"])("q-chip"),O=Object(c["H"])("q-item-section"),d=Object(c["H"])("q-item-label"),j=Object(c["H"])("q-item"),u=Object(c["H"])("q-virtual-scroll"),p=Object(c["H"])("q-tooltip"),m=Object(c["H"])("q-btn"),f=Object(c["H"])("q-page-sticky");return Object(c["B"])(),Object(c["h"])("div",{style:e.contentStyle},[0==e.devReports.length?(Object(c["B"])(),Object(c["h"])(r,{key:0},{avatar:Object(c["S"])((()=>[Object(c["l"])(i,{name:"info"})])),default:Object(c["S"])((()=>[o])),_:1})):(Object(c["B"])(),Object(c["h"])(u,{key:1,items:e.devReports,separator:""},{default:Object(c["S"])((({item:t,index:l})=>[Object(c["l"])(j,{key:l,active:t.hex===e.report.hex,"active-class":"bg-primary text-white",onClick:l=>e.setReport(t),clickable:"",dense:""},{default:Object(c["S"])((()=>[Object(c["l"])(O,{avatar:""},{default:Object(c["S"])((()=>[Object(c["l"])("div",null,[Object(c["l"])(s,{color:"FULL"==t.frameID.out?"green":"light-green",class:"q-ml-sm text-center",style:{width:"60px"},dark:"",dense:"",square:""},{default:Object(c["S"])((()=>[Object(c["k"])(Object(c["L"])(t.frameID.out),1)])),_:2},1032,["color"]),Object(c["l"])(s,{color:"primary",dark:"",dense:"",square:""},{default:Object(c["S"])((()=>[Object(c["k"])(Object(c["L"])(e.getDatetime(t.logDatetime)),1)])),_:2},1024)])])),_:2},1024),Object(c["l"])(O,null,{default:Object(c["S"])((()=>[Object(c["l"])(d,{class:"ellipsis"},{default:Object(c["S"])((()=>[Object(c["k"])(Object(c["L"])(t.hex),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["active","onClick"])])),_:1},8,["items"])),Object(c["l"])(f,{position:"bottom-right",offset:[18,18]},{default:Object(c["S"])((()=>[Object(c["l"])(m,{onClick:t[1]||(t[1]=t=>e.followState=!e.followState),icon:e.followState?"lock":"lock_open",color:e.followState?"secondary":"grey",disable:0==e.devReports.length,"fab-mini":""},{default:Object(c["S"])((()=>[e.$q.platform.is.desktop?(Object(c["B"])(),Object(c["h"])(p,{key:0,anchor:"top middle",self:"bottom middle"},{default:Object(c["S"])((()=>[Object(c["k"])(Object(c["L"])(e.followState?"Unfollow":"Follow"),1)])),_:1})):Object(c["i"])("",!0)])),_:1},8,["icon","color","disable"])])),_:1})],4)}var b=l("cfbf"),i=l("a7bc"),r=l("5662"),s=l("5502"),O=Object(c["m"])({props:{contentStyle:{type:String,required:!0}},setup(e){const t=Object(s["b"])(),l=Object(c["f"])((()=>t.state.db.report)),a=Object(c["f"])((()=>t.getters["db/devReports"])),o=e=>t.commit(i["k"],e),n=Object(c["f"])((()=>t.state.common.follow)),O=e=>t.commit(r["b"],e),d=Object(c["f"])({get:()=>n.value,set:e=>O(e)}),j=e=>b["a"].unix(e.val).format("HH:mm:ss");return{report:l,devReports:a,followState:d,setReport:o,getDatetime:j}}}),d=l("54e1"),j=l("0016"),u=l("a12b"),p=l("66e5"),m=l("4074"),f=l("b047"),v=l("0170"),g=l("de5e"),S=l("9c40"),h=l("05c0"),k=l("eebe"),y=l.n(k);O.render=n;var q=O;y()(O,"components",{QBanner:d["a"],QIcon:j["a"],QVirtualScroll:u["a"],QItem:p["a"],QItemSection:m["a"],QChip:f["a"],QItemLabel:v["a"],QPageSticky:g["a"],QBtn:S["a"],QTooltip:h["a"]});var H=l("ded3"),_=l.n(H);function w(e,t,l,a,o,n){const b=Object(c["H"])("q-resize-observer"),i=Object(c["H"])("Marker"),r=Object(c["H"])("Polyline"),s=Object(c["H"])("GoogleMap"),O=Object(c["H"])("q-avatar"),d=Object(c["H"])("q-splitter");return Object(c["B"])(),Object(c["h"])(d,{"model-value":e.streetView?50:100},Object(c["j"])({before:Object(c["S"])((()=>[Object(c["l"])(s,{"api-key":"AIzaSyBE8UhrrFkz9m37oowPkHX9to8NXcHw4Ak",class:"fit",center:e.center,zoom:e.zoom},{default:Object(c["S"])((()=>[e.position.valid?(Object(c["B"])(),Object(c["h"])(i,{key:0,options:{position:e.center,icon:e.icon}},null,8,["options"])):Object(c["i"])("",!0),Object(c["l"])(r,{options:_()({path:e.path},e.polyOptions)},null,8,["options"])])),_:1},8,["center","zoom"])])),default:Object(c["S"])((()=>[Object(c["l"])(b,{onResize:t[1]||(t[1]=t=>e.width=t.width)})])),_:2},[e.streetView?{name:"separator",fn:Object(c["S"])((()=>[Object(c["l"])(O,{color:"grey","text-color":"white",size:"20px",icon:"drag_indicator"})]))}:void 0,e.streetView?{name:"after",fn:Object(c["S"])((()=>[]))}:void 0]),1032,["model-value"])}var x=l("4082"),Q=l.n(x),C=l("9482"),R=l("af6a"),F=l("9944");const D=({lng:e,lat:t})=>{const{lngMin:l,lngMax:c,latMin:a,latMax:o}=C["a"].map.borderIndonesia;return e>l&&e<c&&t>a&&t<o},I=e=>{var t;const l=_()(_()({},C["a"].map.centerIndonesia),{},{valid:!1});var c,a;"FULL"==Object(F["e"])(null===e||void 0===e||null===(t=e.frameID)||void 0===t?void 0:t.val)&&(l.lat=null===e||void 0===e||null===(c=e.gpsLatitude)||void 0===c?void 0:c.val,l.lng=null===e||void 0===e||null===(a=e.gpsLongitude)||void 0===a?void 0:a.val,l.valid=D(l));return l};var L=l("7ec9"),T=Object(c["m"])({components:{GoogleMap:L["a"],Marker:L["b"],Polyline:L["c"]},setup(e){const t=Object(s["b"])(),l=Object(c["f"])((()=>t.state.db.report)),a=Object(c["f"])((()=>t.getters["db/devDevice"])),o=Object(c["f"])((()=>t.getters["db/devReports"])),{centerIndonesia:n,zoom:b}=C["a"].map,i=Object(c["D"])({zoom:b,width:0,icon:null,path:[],center:_()({},n),position:_()(_()({},n),{},{valid:!1}),polyOptions:{geodesic:!0,strokeColor:"#F88",strokeOpacity:.75,strokeWeight:2}}),r=e=>{let{valid:t}=e,l=Q()(e,["valid"]);i.zoom=t?17:b,i.center=_()({},t?l:n),i.position=_()(_()({},l),{},{valid:t})},O=e=>{const t=I(e);t.valid&&i.path.push(t)},d=Object(c["f"])((()=>!1));return Object(c["z"])((()=>{const{protocol:e,host:t}=window.location;i.icon=`${e}//${t}/motorcycle.png`})),Object(c["R"])((()=>a.value),((e,t)=>{(null===e||void 0===e?void 0:e.vin)!=(null===t||void 0===t?void 0:t.vin)?(i.path=[],o.value.filter((({frameID:e})=>"FULL"==Object(F["e"])(e.val))).forEach((e=>O(e)))):O(null===e||void 0===e?void 0:e.lastFullReport)}),{lazy:!1,immediate:!0,deep:!0}),Object(c["R"])((()=>l.value),((e,t)=>{var l;const c="FULL"==Object(F["e"])(null===e||void 0===e||null===(l=e.frameID)||void 0===l?void 0:l.val),a=c?e:Object(R["c"])(e,o.value);r(I(a))}),{lazy:!1,immediate:!0}),_()(_()({},Object(c["O"])(i)),{},{streetView:d})}}),V=l("8562"),B=l("3980"),z=l("cb32");T.render=w;var M=T;y()(T,"components",{QSplitter:V["a"],QResizeObserver:B["a"],QAvatar:z["a"]});const E={class:"text-subtitle2"},A=Object(c["k"])(" No finger driver yet ");function N(e,t,l,a,o,n){const b=Object(c["H"])("q-icon"),i=Object(c["H"])("q-banner"),r=Object(c["H"])("q-chip"),s=Object(c["H"])("q-item-section"),O=Object(c["H"])("q-item-label"),d=Object(c["H"])("q-btn"),j=Object(c["H"])("q-item"),u=Object(c["H"])("q-virtual-scroll"),p=Object(c["H"])("q-fab-action"),m=Object(c["H"])("q-fab"),f=Object(c["H"])("q-page-sticky");return Object(c["B"])(),Object(c["h"])("div",{style:e.contentStyle},[Object(c["l"])("div",E,"Last fetch: "+Object(c["L"])(e.getFingerTime()),1),0==e.devFingers.length?(Object(c["B"])(),Object(c["h"])(i,{key:0},{avatar:Object(c["S"])((()=>[Object(c["l"])(b,{name:"info"})])),default:Object(c["S"])((()=>[A])),_:1})):(Object(c["B"])(),Object(c["h"])(u,{key:1,items:e.devFingers,separator:""},{default:Object(c["S"])((({item:t,index:l})=>[Object(c["l"])(j,{key:l,dense:""},{default:Object(c["S"])((()=>[Object(c["l"])(s,{avatar:""},{default:Object(c["S"])((()=>[Object(c["l"])(r,{color:"primary",dark:"",square:""},{default:Object(c["S"])((()=>[Object(c["k"])(Object(c["L"])(t.fingerID),1)])),_:2},1024)])),_:2},1024),Object(c["l"])(s,null,{default:Object(c["S"])((()=>[Object(c["l"])(O,null,{default:Object(c["S"])((()=>[Object(c["k"])("Mr. "+Object(c["L"])(e.name[t.fingerID-1]),1)])),_:2},1024)])),_:2},1024),Object(c["l"])(s,{side:""},{default:Object(c["S"])((()=>[Object(c["l"])(d,{onClick:l=>e.remove(t),size:"sm",icon:"delete",outline:"",unelevated:"",round:""},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])),_:1},8,["items"])),Object(c["l"])(f,{position:"bottom-right",offset:[18,18]},{default:Object(c["S"])((()=>[Object(c["l"])(m,{modelValue:e.fab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.fab=t),"external-label":"","vertical-actions-align":"right",color:"secondary",icon:"keyboard_arrow_left",direction:"left","label-position":"top",padding:"sm"},{default:Object(c["S"])((()=>[Object(c["l"])(p,{onClick:e.fetch,disable:!e.devDevice,"label-position":"top",color:"primary",icon:"download",label:"Fetch","external-label":""},null,8,["onClick","disable"]),Object(c["l"])(p,{onClick:e.add,disable:!e.devDevice,"label-position":"top",color:"green",icon:"upload",label:"Add","external-label":""},null,8,["onClick","disable"]),Object(c["l"])(p,{onClick:e.clear,disable:!e.devDevice,"label-position":"top",color:"orange",icon:"delete_forever",label:"Reset","external-label":""},null,8,["onClick","disable"])])),_:1},8,["modelValue"])])),_:1})],4)}var U=l("b7fa"),$=Object(c["m"])({props:{contentStyle:{type:String,required:!0}},setup(e){const t=Object(c["p"])("sendCommand"),l=Object(s["b"])(),a=Object(c["f"])((()=>l.getters["db/devDevice"])),o=Object(c["f"])((()=>l.getters["db/devFingers"])),n=Object(c["E"])(["One","Two","Three","Four","Five"]),i=Object(c["E"])(!1),r=()=>{var e;const{fingerTime:t}=null!==(e=a.value)&&void 0!==e?e:{};return t?b["a"].unix(t).format("DD-MM-YY HH:mm:ss"):"Unknown"},O=()=>t("FINGER_FETCH"),d=()=>t("FINGER_ADD"),j=({fingerID:e})=>Object(U["a"])(`Are you sure to remove this fingerprint ${e} ?`).onOk((()=>t(`FINGER_DEL=${e}`))),u=()=>Object(U["a"])("Are you sure to clear all fingerprints  ?").onOk((()=>t("FINGER_RST")));return{name:n,fab:i,devFingers:o,devDevice:a,getFingerTime:r,fetch:O,add:d,remove:j,clear:u}}}),P=l("c294"),G=l("72db");$.render=N;var J=$;y()($,"components",{QBanner:d["a"],QIcon:j["a"],QVirtualScroll:u["a"],QItem:p["a"],QItemSection:m["a"],QChip:f["a"],QItemLabel:v["a"],QBtn:S["a"],QPageSticky:g["a"],QFab:P["a"],QFabAction:G["a"]});const Y={class:"row q-gutter-xs"},X={class:"col-auto"},K={key:0,class:"col-auto"},W={class:"col-auto"},Z={class:"col-auto"},ee={class:"col-auto"},te=Object(c["k"])("CSV"),le=Object(c["k"])("JSON"),ce={class:"row q-gutter-xs q-mt-xs"},ae={class:"col-auto"},oe={class:"row q-gutter-xs q-mt-xs"},ne={class:"col-auto"};function be(e,t,l,a,o,n){const b=Object(c["H"])("q-btn"),i=Object(c["H"])("q-item-label"),r=Object(c["H"])("q-item-section"),s=Object(c["H"])("q-item"),O=Object(c["H"])("q-list"),d=Object(c["H"])("q-btn-dropdown"),j=Object(c["H"])("q-uploader"),u=Object(c["H"])("q-toggle"),p=Object(c["I"])("close-popup");return Object(c["B"])(),Object(c["h"])("div",{style:e.contentStyle},[Object(c["l"])("div",Y,[Object(c["l"])("div",X,[Object(c["l"])(b,{icon:"delete",label:"Reset DB",disable:0==e.devices.length,onClick:t[1]||(t[1]=t=>e.clearStore())},null,8,["disable"])]),e.$q.fullscreen.isCapable?(Object(c["B"])(),Object(c["h"])("div",K,[Object(c["l"])(b,{onClick:t[2]||(t[2]=t=>e.$q.fullscreen.toggle()),label:e.$q.fullscreen.isActive?"Full OFF":"Full ON",icon:e.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},null,8,["label","icon"])])):Object(c["i"])("",!0),Object(c["l"])("div",W,[Object(c["l"])(b,{icon:"alarm_on",label:"Calibrate",disable:0==e.devReports.length,onClick:t[3]||(t[3]=t=>e.calibrate())},null,8,["disable"])]),Object(c["l"])("div",Z,[Object(c["l"])(b,{icon:"stop",label:"Commandable",onClick:t[4]||(t[4]=t=>e.ignoreResponse())})]),Object(c["l"])("div",ee,[Object(c["l"])(d,{icon:"cloud_download",label:"Export"},{default:Object(c["S"])((()=>[Object(c["l"])(O,null,{default:Object(c["S"])((()=>[Object(c["T"])(Object(c["l"])(s,{clickable:e.reports.length>0,onClick:t[5]||(t[5]=t=>e.exportCSV(e.reports))},{default:Object(c["S"])((()=>[Object(c["l"])(r,null,{default:Object(c["S"])((()=>[Object(c["l"])(i,null,{default:Object(c["S"])((()=>[te])),_:1})])),_:1})])),_:1},8,["clickable"]),[[p]]),Object(c["T"])(Object(c["l"])(s,{clickable:e.reports.length>0,onClick:t[6]||(t[6]=t=>e.exportJSON(e.reports))},{default:Object(c["S"])((()=>[Object(c["l"])(r,null,{default:Object(c["S"])((()=>[Object(c["l"])(i,null,{default:Object(c["S"])((()=>[le])),_:1})])),_:1})])),_:1},8,["clickable"]),[[p]])])),_:1})])),_:1})])]),Object(c["l"])("div",ce,[Object(c["l"])("div",ae,[Object(c["l"])(j,{ref:"uploader",factory:e.importData,accept:".json",label:"Import JSON","auto-upload":""},null,8,["factory"])])]),Object(c["l"])("div",oe,[Object(c["l"])("div",ne,[Object(c["l"])(u,{modelValue:e.notificationState,"onUpdate:modelValue":t[7]||(t[7]=t=>e.notificationState=t),label:"Notification"},null,8,["modelValue"])])])],4)}l("ddb0"),l("13d5"),l("26e9"),l("e6cf");var ie=l("f23f"),re=l("2e92");const se=e=>e.map((e=>_()({},R["a"].reduce(((t,{field:l,no:c})=>_()(_()({},t),{},{[c]:e[l]?e[l].out:""})),{})))),Oe=()=>R["a"].reduce(((e,{title:t,unit:l})=>e.concat([t+(l?` (${l})`:"")])),[]),de=e=>{const t=new ie["ExportToCsv"]({fieldSeparator:",",quoteStrings:'"',decimalSeparator:".",showLabels:!0,showTitle:!1,title:"My Awesome CSV",useTextFile:!1,useBom:!0,useKeysAsHeaders:!1,headers:Oe()});t.generateCsv(se(e))},je=e=>e?e.map((({hex:e})=>e)):[],ue=e=>{const t=`tracking-${Object(b["a"])().format("YYMMDDHHmmss")}`,l=je(e.slice().reverse()),c="json";Object(re["a"])({data:l,fileName:t,exportType:c})},pe=e=>new Promise(((t,l)=>{e||l();const c=new FileReader;c.onload=e=>t(JSON.parse(e.target.result)),c.readAsText(e)}));var me=l("6ad4"),fe=Object(c["m"])({props:{contentStyle:{type:String,required:!0}},setup(e){const t=Object(c["p"])("sendCommand"),l=Object(c["p"])("ignoreResponse"),a=Object(s["b"])(),o=Object(c["f"])((()=>a.state.db.reports)),n=Object(c["f"])((()=>a.state.db.buffers)),b=Object(c["f"])((()=>a.state.db.devices)),O=Object(c["f"])((()=>a.state.db.command)),d=Object(c["f"])((()=>a.getters["db/devDevice"])),j=Object(c["f"])((()=>a.getters["db/devReports"])),u=e=>a.commit(i["g"],e),p=e=>a.dispatch(me["a"],e),m=Object(c["f"])((()=>a.state.common.notification)),f=e=>a.commit(r["c"],e),v=Object(c["E"])(null),g=Object(c["f"])({get:()=>m.value,set:e=>f(e)}),S=()=>Object(U["a"])("Are you sure to remove all data?").onOk((()=>u())),h=()=>{if(!d.value)return;const e=j.value.find((({frameID:e})=>"FULL"==Object(F["e"])(e.val)));if(!e)return;const l=Object(F["b"])(e);l&&(t(`REPORT_RTC=${l}`),Object(U["c"])("Calibrating device time..","info"))},k=([e])=>{pe(e).then((e=>p(e)))};return Object(c["R"])((()=>n.value.length),(e=>0==e&&v.value.reset()),{deep:!0}),{uploader:v,devices:b,command:O,reports:o,devReports:j,notificationState:g,calibrate:h,clearStore:S,ignoreResponse:l,importData:k,exportJSON:ue,exportCSV:de}}}),ve=l("f20b"),ge=l("1c1c"),Se=l("ee89"),he=l("9564"),ke=l("7f67");fe.render=be;var ye=fe;y()(fe,"components",{QBtn:S["a"],QBtnDropdown:ve["a"],QList:ge["a"],QItem:p["a"],QItemSection:m["a"],QItemLabel:v["a"],QUploader:Se["a"],QToggle:he["a"]}),y()(fe,"directives",{ClosePopup:ke["a"]});var qe=Object(c["m"])({components:{MapManagement:M,ReportLog:q,DriverManagement:J,GlobalConfiguration:ye},setup(e){const t=Object(s["b"])(),l=Object(c["f"])((()=>t.getters["db/devReports"])),a=Object(c["f"])((()=>t.getters["db/devFingers"])),o=Object(c["E"])("tab-1"),n=Object(c["E"])(50),b=Object(c["f"])((()=>`height: calc(100vh - ${n.value}vh - 95px)`));return{selectedTab:o,splitter:n,devReports:l,devFingers:a,contentStyle:b}}}),He=l("9989"),_e=l("429b"),we=l("7460"),xe=l("58a81"),Qe=l("adad"),Ce=l("823b");qe.render=a;t["default"]=qe;y()(qe,"components",{QPage:He["a"],QSplitter:V["a"],QAvatar:z["a"],QTabs:_e["a"],QTab:we["a"],QBadge:xe["a"],QTabPanels:Qe["a"],QTabPanel:Ce["a"]})}}]);