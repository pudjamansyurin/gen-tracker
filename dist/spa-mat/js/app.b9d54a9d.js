(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"034f":function(e,t,n){"use strict";var r=n("fb1c"),i=n.n(r);i.a},"0be1":function(e,t,n){"use strict";n.d(t,"a",function(){return o});n("6b54"),n("f576"),n("ed50"),n("4917"),n("b6e4");var r=n("b639"),i=n("bf3c"),a=[0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],o=function(e){var t=new Int32Array(a);e=e.match(/.{1,8}/g).map(function(e){return Object(i["b"])(e.padEnd(8,"0"))}).join(""),e=r["Buffer"].from(e,"hex");for(var n=4294967295,o=0;o<e.length;o++)n=n<<8^t[255&(n>>24^e[o])];return(n>>>0).toString(16).toUpperCase().padStart(8,"0")}},"110e":function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a});var r=n("1a0d"),i={app:{version:"1.7",title:"GPS Tracker",subTitle:"GEN Indonesia"},socket:{address:"broker.hivemq.com",port:8e3},command:{prefix:"@C",timeoutMS:15e3},frame:{list:["RESPONSE","SIMPLE","FULL"],prefix:"@R",id:{RESPONSE:0,SIMPLE:1,FULL:2}},map:{zoom:3,centerIndonesia:{lat:-2.6000285,lng:118.015776},borderIndonesia:{lngMin:95.011198,lngMax:141.020354,latMin:-11.107187,latMax:5.90713}},timediff:60,timezone:"Asia/Jakarta"},a={data:{labels:[],datasets:[{data:[],label:"",backgroundColor:"#f87979",fill:!0,showLine:!0,pointRadius:2}]},options:{animation:{duration:10},responsive:!0,maintainAspectRatio:!1,legend:{display:!0,align:"end"},scales:{xAxes:[{ticks:{callback:function(e){return Object(r["g"])(e)},max:1,min:0},scaleLabel:{display:!0,labelString:"Log Datetime"}}],yAxes:[{ticks:{beginAtZero:!0,max:1,min:0},scaleLabel:{display:!0,labelString:"Value"}}]}}}},"1a0d":function(e,t,n){"use strict";n.d(t,"c",function(){return m}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return p}),n.d(t,"b",function(){return j}),n.d(t,"f",function(){return h}),n.d(t,"a",function(){return g}),n.d(t,"g",function(){return O});n("6b54"),n("f576"),n("4917");var r=n("9523"),i=n.n(r),a=(n("7514"),n("3156")),o=n.n(a),c=(n("6762"),n("2fdb"),n("ac6a"),n("cadf"),n("2ef0")),u=n.n(c),s=n("110e"),f=n("bf3c"),d=n("7f45"),b=n("e002"),l=function(e){return"string"===typeof e||e instanceof String},m=function(e,t){return u.a.filter(e,u.a.flow(u.a.identity,u.a.values,u.a.join,u.a.toLower,u.a.partialRight(u.a.includes,t)))},p=function(e,t){return Array.isArray(t)?t.reduce(function(t,n){return o()({},t,i()({},n,e.find(function(e){var t=e.field;return t===n}).value))},{}):e.find(function(e){var n=e.field;return n===t}).value},j=function(e){var t=u.a.clone(s["b"].timezone),n=p(e,"gpsLatitude"),r=p(e,"gpsLongitude"),i=p(e,"sendDatetime");n&&r&&(t=b(n,r));var a=d(new Date),o=d(i,"X"),c=Math.abs(d.duration(a.diff(o)).as("seconds"));if(!o.isValid()||c>s["b"].timediff)return a.tz(t).format("YYMMDDHHmmssEE")},h=function(e){var t=e.match(/.{1,2}/g);return t.reduce(function(e,t){var n=Object(f["g"])(t);return e.concat(n.toString().padStart(2,"0"))},"")},g=function(e){var t=e.match(/.{1,2}/g);return t.reduce(function(e,t){return e.concat(Object(f["h"])(parseInt(t),2))},"").toUpperCase()+"00"},O=function(e){return d.unix(e).format("HH:mm:ss")}},"1e5d":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);n("ac6a"),n("a114"),n("d14b"),n("1e5d"),n("7e6d");var r=n("2b0e"),i=n("e84f"),a=n("7051"),o=n("2040"),c=n("cf12"),u=n("46a9"),s=n("32a1"),f=n("f30c"),d=n("ce67"),b=n("7646"),l=n("6580"),m=n("3a08"),p=n("dc23"),j=n("3054"),h=n("6ddb"),g=n("1731"),O=n("482e"),v=n("52b5"),C=n("1180"),E=n("1e55"),S=n("ac83"),R=n("506f"),D=n("9541"),y=n("b8d9"),_=n("7d43"),T=n("91c8"),M=n("79e9"),I=n("5d8b"),A=n("c563"),U=n("db7b"),z=n("c081"),N=n("93f5"),k=n("cc4a"),B=n("363b"),L=n("4bf4"),q=n("ef81"),x=n("0952"),w=n("2a70"),P=n("fe4f"),G=n("bc9b"),V=n("6186"),F=n("2f48"),Q=n("1526"),H=n("2bd2"),$=n("133b"),Y=n("6780"),W=n("a9a0"),K=n("f2eb");r["a"].use(i["a"],{config:{notify:{type:"info"}},components:{QLayout:a["a"],QLayoutHeader:o["a"],QLayoutDrawer:c["a"],QPageContainer:u["a"],QPage:s["a"],QToolbar:f["a"],QToolbarTitle:d["a"],QCard:b["a"],QCardTitle:l["a"],QCardMain:m["a"],QCardMedia:p["a"],QCardSeparator:j["a"],QCardActions:h["a"],QBtnGroup:g["a"],QBtn:O["a"],QIcon:v["a"],QList:C["a"],QListHeader:E["a"],QCollapsible:S["a"],QItem:R["a"],QItemTile:D["a"],QItemMain:y["a"],QItemSide:_["a"],QItemSeparator:T["a"],QField:M["a"],QInput:I["a"],QTabs:A["a"],QTab:U["a"],QTabPane:z["a"],QScrollArea:N["a"],QWindowResizeObservable:k["a"],QResizeObservable:B["a"],QChip:L["a"],QAlert:q["a"],QModal:x["a"],QModalLayout:w["a"],QRange:P["a"],QToggle:G["a"],QSearch:V["a"],QUploader:F["a"]},directives:{Ripple:Q["a"],CloseOverlay:H["a"]},plugins:{Notify:$["a"],Dialog:Y["a"],Loading:W["a"],AppFullscreen:K["a"]}});var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},J=[];X._withStripped=!0;var Z=n("a267"),ee=Z["a"],te=(n("034f"),n("2877")),ne=Object(te["a"])(ee,X,J,!1,null,null,null);ne.options.__file="App.vue";var re,ie,ae=ne.exports,oe=n("2f62"),ce=n("bfa9"),ue=n("9523"),se=n.n(ue),fe=(n("7f7f"),n("448a")),de=n.n(fe),be=(n("7514"),n("2ef0")),le=n.n(be),me=n("1a0d"),pe=n("95e6"),je=n("d87e"),he=(re={},se()(re,je["e"],function(e){var t=e.reports;return function(e){return t.filter(function(t){var n=t.unitID;return n===e}).length}}),se()(re,je["f"],function(e){var t=e.reports;return function(e){var n=Object(me["d"])(e.data,"logDatetime");return!t.find(function(e){var t=e.logDatetime;return t==n})}}),se()(re,je["d"],function(e){var t=e.reports,n=e.theUnit,r=t.filter(function(e){var t=e.unitID;return t===n});return n?r:[]}),se()(re,je["b"],function(e,t){var n=t.devReports.reduce(function(e,t){var n=t.data;return e.concat.apply(e,de()(pe["a"].filter(function(e){var t=e.bit;return Object(pe["b"])(Object(me["d"])(n,"eventsGroup"),t)}).map(function(e){var t=e.name;return{logDatetime:Object(me["d"])(n,"logDatetime"),name:t}})))},[]);return Object(be["groupBy"])(n,"name")}),se()(re,je["a"],function(e){var t=e.commands,n=e.theUnit;return n?t.filter(function(e){var t=e.unitID;return t===n}):[]}),se()(re,je["c"],function(e){var t=e.fingers,n=e.theUnit;return n?t.filter(function(e){var t=e.unitID;return t===n}):[]}),re),ge=(n("20d6"),n("a7bc")),Oe=(ie={},se()(ie,ge["k"],function(e,t){e.loading=t}),se()(ie,ge["o"],function(e){e.calibration=!e.calibration}),se()(ie,ge["e"],function(e){e.theUnit=null,e.theReport=null,e.units=[],e.reports=[],e.commands=[],e.fingers=[]}),se()(ie,ge["n"],function(e,t){e.theUnit=t}),se()(ie,ge["m"],function(e,t){e.theReport=t}),se()(ie,ge["j"],function(e,t){e.cmdBuffer=t}),se()(ie,ge["f"],function(e){e.cmdBuffer=null}),se()(ie,ge["l"],function(e,t){e.cmdBuffer=t.payload,e.theCommand=t}),se()(ie,ge["g"],function(e){e.theCommand=null}),se()(ie,ge["d"],function(e,t){var n=e.units.find(function(e){return e===t});n||e.units.unshift(t),e.theUnit||(e.theUnit=t)}),se()(ie,ge["c"],function(e,t){e.reports.unshift(t)}),se()(ie,ge["a"],function(e,t){e.commands.unshift(t)}),se()(ie,ge["b"],function(e,t){var n=e.fingers.some(function(e){var n=e.unitID,r=e.fingerID;return n===t.unitID&&r===t.fingerID});n||e.fingers.unshift(t)}),se()(ie,ge["h"],function(e,t){var n=e.fingers.findIndex(function(e){var n=e.unitID,r=e.fingerID;return n===t.unitID&&r===t.fingerID});e.fingers.splice(n,1)}),se()(ie,ge["i"],function(e,t){e.fingers=e.fingers.filter(function(e){var n=e.unitID;return n!==t.unitID})}),ie),ve=n("6ad4"),Ce=se()({},ve["a"],function(e){var t=e.commit;t("CLEAR_ALL"),t("CLEAR_THE_COMMAND"),t("CLEAR_COMMAND_BUFFER")}),Ee={loading:!1,calibration:!1,theUnit:null,theReport:null,theCommand:null,cmdBuffer:null,units:[],reports:[],commands:[],fingers:[]},Se={namespaced:!0,state:Ee,getters:he,mutations:Oe,actions:Ce};r["a"].use(oe["a"]);new ce["a"]({storage:window.localStorage});var Re=function(){var e=new oe["a"].Store({modules:{db:Se}});return e},De=n("8c4f"),ye=[{path:"/",component:function(){return n.e("0ea90198").then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e("35422f74").then(n.bind(null,"8b24"))}}]}];ye.push({path:"*",component:function(){return n.e("6afd57c4").then(n.bind(null,"1fd4"))}});var _e=ye;r["a"].use(De["a"]);var Te=function(){var e=new De["a"]({scrollBehavior:function(){return{y:0}},routes:_e,mode:"hash",base:""});return e},Me=function(){var e="function"===typeof Re?Re():Re,t="function"===typeof Te?Te({store:e}):Te;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(ae)}};return{app:n,store:e,router:t}},Ie=n("110e"),Ae=function(e){var t=e.Vue;t.prototype.$config=le.a.cloneDeep(Ie["b"])},Ue=function(e){e.app,e.router;var t=e.Vue;t.prototype.$_=le.a},ze=n("bc3a"),Ne=n.n(ze),ke=function(e){var t=e.Vue;t.prototype.$axios=Ne.a},Be=n("daa7"),Le=n.n(Be),qe=function(e){e.app,e.router,e.store;var t=e.Vue;t.use(Le.a,"ws://".concat(Ie["b"].socket.address,":").concat(Ie["b"].socket.port,"/mqtt"),{username:"garda",password:"energi"})},xe=n("755e"),we=function(e){e.app,e.router;var t=e.Vue;t.use(xe,{load:{key:"AIzaSyBE8UhrrFkz9m37oowPkHX9to8NXcHw4Ak",region:"ID",language:"id"}})},Pe=n("4f22"),Ge=function(e){e.app,e.router;var t=e.Vue;t.use(Pe["a"])},Ve=Me(),Fe=Ve.app,Qe=Ve.store,He=Ve.router;[Ae,Ue,ke,qe,we,Ge].forEach(function(e){e({app:Fe,router:He,store:Qe,Vue:r["a"],ssrContext:null})}),new r["a"](Fe)},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id="4678"},"595a":function(e,t,n){"use strict";n("7f7f"),n("7514");var r=n("1a0d"),i=n("d1cd"),a=n("448a"),o=n.n(a),c=n("9a0a"),u=n("bf3c"),s=[{resCode:0,name:"error",title:"ERROR",color:"red"},{resCode:1,name:"ok",title:"OK",color:"green"},{resCode:2,name:"invalid",title:"INVALID",color:"blue"},{resCode:256,name:"timeout",title:"TIMEOUT",color:"orange"},{resCode:257,name:"unknown",title:"UNKNOWN",color:"purple"}],f=o()(c["b"]).concat([{field:"code",title:"Code",required:!0,size:1,format:function(e){return Object(u["g"])(e)},display:function(e){return e}},{field:"subCode",title:"Sub Code",required:!0,size:1,format:function(e){return Object(u["g"])(e)},display:function(e){return e}},{field:"resCode",title:"Response Code",required:!0,size:1,format:function(e){return Object(u["g"])(e)},display:function(e){var t=s.find(function(t){var n=t.resCode;return n===e});return t?t.title:s.find(function(e){var t=e.name;return"unknown"===t}).title}},{field:"message",title:"Message",required:!0,size:50,format:function(e){return Object(u["d"])(e)},display:function(e){return e}}]);n.d(t,"a",function(){return d});var d=function(e,t){var n,a,o=e.payload,c=e.unitID,u=e.code,d=e.subCode;if(t){var b=Object(i["b"])(t,f);if(a=s.find(function(e){var t=e.resCode;return t===Object(r["d"])(b,"resCode")}),!a)return;if(Object(r["d"])(b,"code")!=u)return;if(Object(r["d"])(b,"subCode")!=d)return;n=Object(r["d"])(b,"message")}else a=s.find(function(e){var t=e.name;return"timeout"===t}),n=null;return{payload:o,unitID:c,res:a,message:n}}},"6ad4":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r="RESET_DATABASE"},"7e6d":function(e,t,n){},"95e6":function(e,t,n){"use strict";var r=[{name:"VCU_NET_SOFT_RESET",bit:0,group:"VCU"},{name:"VCU_NET_HARD_RESET",bit:1,group:"VCU"},{name:"VCU_BIKE_FALLEN",bit:2,group:"VCU"},{name:"VCU_REMOTE_MISSING",bit:3,group:"VCU"},{name:"BMS_DISCHARGE_OVER_CURRENT",bit:30,group:"BMS"},{name:"BMS_CHARGE_OVER_CURRENT",bit:31,group:"BMS"},{name:"BMS_SHORT_CIRCUIT",bit:32,group:"BMS"},{name:"BMS_DISCHARGE_OVER_TEMPERATURE",bit:33,group:"BMS"},{name:"BMS_DISCHARGE_UNDER_TEMPERATURE",bit:34,group:"BMS"},{name:"BMS_CHARGE_OVER_TEMPERATURE",bit:35,group:"BMS"},{name:"BMS_CHARGE_UNDER_TEMPERATURE",bit:36,group:"BMS"},{name:"BMS_UNDER_VOLTAGE",bit:37,group:"BMS"},{name:"BMS_OVER_VOLTAGE",bit:38,group:"BMS"},{name:"BMS_OVER_DISCHARGE_CAPACITY",bit:39,group:"BMS"},{name:"BMS_UNBALANCE",bit:40,group:"BMS"},{name:"BMS_SYSTEM_FAILURE",bit:41,group:"BMS"},{name:"BMS_WARNING_OVER_CURRENT",bit:42,group:"BMS"},{name:"BMS_WARNING_OVER_TEMPERATURE",bit:43,group:"BMS"},{name:"BMS_WARNING_UNDER_VOLTAGE",bit:44,group:"BMS"},{name:"BMS_WARNING_UNBALANCE",bit:45,group:"BMS"}];n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var i=n("da5a"),a=function(e,t){return 1&i.fromNumber(e,1).shiftRight(t)}},"95f8":function(e,t,n){"use strict";var r=n("3156"),i=n.n(r),a=n("278c"),o=n.n(a),c=(n("7514"),n("28a5"),n("448a")),u=n.n(c),s=n("9a0a"),f=n("bf3c"),d=n("1a0d"),b=[{command:"GEN_INFO",desc:"Get VCU firmware information",code:0,subCode:0},{command:"GEN_LED",desc:"Set test LED value",code:0,subCode:1,type:"Bool",range:[0,1]},{command:"GEN_OVERRIDE",desc:"Override the vehicle state",code:0,subCode:2,type:"I8",range:[1,3]},{command:"GEN_FOTA_VCU",desc:"Upgrade VCU firmware",code:0,subCode:3,timeout:3e5},{command:"GEN_FOTA_HMI",desc:"Upgrade HMI firmware",code:0,subCode:4,timeout:6e5},{command:"REPORT_RTC",desc:"Set RTC value ( E start from 1=Monday )",code:1,subCode:0,type:"U64",range:["YYMMDDHHmmssEE"],format:function(e){return Object(d["a"])(e)}},{command:"REPORT_ODOM",desc:"Set odometer value",code:1,subCode:1,type:"U32",range:[0,99999]},{command:"AUDIO_BEEP",desc:"Set beep the audio module",code:2,subCode:0},{command:"AUDIO_MUTE",desc:"Set the audio module mute mode",code:2,subCode:1,type:"Bool",range:[0,1]},{command:"AUDIO_VOL",desc:"Change audio module volume",code:2,subCode:2,type:"U8",range:[0,100]},{command:"FINGER_FETCH",desc:"Get all registered id",code:3,subCode:0},{command:"FINGER_ADD",desc:"Add new fingerprint",code:3,subCode:1},{command:"FINGER_DEL",desc:"Delete fingerprint ID",code:3,subCode:2,type:"U8",range:[1,5]},{command:"FINGER_RST",desc:"Reset all saved fingerprint ID",code:3,subCode:3},{command:"KEYLESS_PAIRING",desc:"Pairing Pocket Keyless",code:4,subCode:0}],l=u()(s["a"]).concat([{field:"code",title:"Code",size:1,format:function(e){return Object(f["b"])(Object(f["h"])(e,2))}},{field:"subCode",title:"Sub Code",size:1,format:function(e){return Object(f["b"])(Object(f["h"])(e,2))}},{field:"value",title:"Value",size:8,format:function(e){return Object(f["b"])(Object(f["h"])(parseInt(e),16))}}]),m=n("c1df"),p=n.n(m);n.d(t,"c",function(){return g}),n.d(t,"b",function(){return h}),n.d(t,"a",function(){return b});var j=function(e,t){if(e)return l.reduce(function(n,r,i){var a=l[l.length-1-i],o=a.field,c=a.format;switch(o){case"value":n=e.hasOwnProperty("format")?e.format(t)+n:c(t||0)+n;break;case"subCode":case"code":n=c(e[o])+n;break;case"size":case"crc":n=c(n)+n;break;case"prefix":n=c()+n;break;default:break}return n},"").toUpperCase()},h=function(e){var t=e,n=null;return e.indexOf("=")>-1&&(t=e.split("=")[0],n=e.split("=")[1]),{prop:t,value:n}},g=function(e){var t=h(e),n=t.prop,r=t.value;if(!e)return"Empty payload.";var a=b.find(function(e){var t=e.command;return t===n});if(!a)return"Unknown command.";if(a.range){if(!r)return"Command need value";var c=o()(a.range,2),u=c[0],s=c[1];if(Object(d["e"])(u)){if("REPORT_RTC"==a.command){if(!p()(r,"YYMMDDHHmmssEE").isValid())return"Datetime invalid"}else if(r.length!=u.length)return"Value length is invalid"}else if(r<u||r>s)return"Value not in range"}else if(r)return"Command dont need value";return i()({},a,{hexData:j(a,r),value:r})}},"9a0a":function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return c});n("f576");var r=n("110e"),i=n("0be1"),a=n("bf3c"),o=[{field:"prefix",title:"Prefix",header:!0,required:!0,size:2,format:function(e){return Object(a["d"])(Object(a["b"])(e))},display:function(e){return e}},{field:"crc",title:"CRC",header:!0,required:!0,chartable:!0,size:4,format:function(e){return Object(a["g"])(Object(a["b"])(e))},display:function(e){return Object(a["h"])(e,8).toUpperCase()}},{field:"size",title:"Size",header:!0,required:!0,chartable:!0,unit:"Bytes",size:1,format:function(e){return Object(a["g"])(Object(a["b"])(e))},display:function(e){return Object(a["c"])(e)}},{field:"frameID",title:"Frame ID",header:!0,required:!0,chartable:!0,size:1,format:function(e){return Object(a["g"])(Object(a["b"])(e))},display:function(e){return r["b"].frame.list[e]}},{field:"unitID",title:"Unit ID",header:!0,required:!0,size:4,format:function(e){return Object(a["g"])(Object(a["b"])(e))},display:function(e){return e}}],c=[{field:"prefix",title:"Prefix",header:!0,size:2,format:function(){return Object(a["b"])(Object(a["a"])(r["b"].command.prefix))}},{field:"crc",title:"CRC",header:!0,size:4,format:function(e){return Object(a["b"])(Object(i["a"])(e).padStart(8,"0"))}},{field:"size",title:"Size",header:!0,size:1,format:function(e){return Object(a["b"])(Object(a["h"])(e.length/2,2))}}]},a267:function(e,t,n){"use strict";(function(e){n("6b54"),n("ac6a");var r=n("3156"),i=n.n(r),a=n("d1cd"),o=n("1a0d"),c=n("2f62"),u=n("d87e"),s=n("a7bc"),f=n("ab1c"),d=n("595a"),b=n("95f8");t["a"]={name:"App",created:function(){this.$root.$on("executeCommand",this.executeCommand),this.$root.$on("ignoreCommand",this.ignoreCommand),this.$root.$on("importReport",this.importReport)},destroyed:function(){this.$root.$off("executeCommand",this.executeCommand),this.$root.$off("ignoreCommand",this.ignoreCommand),this.$root.$off("importReport",this.importReport)},data:function(){return{dismiss:null}},computed:i()({},Object(c["e"])("db",["theCommand","commands","reports","theUnit","calibration"]),Object(c["c"])("db",[u["f"]])),methods:i()({},Object(c["d"])("db",[s["k"],s["d"],s["c"],s["a"],s["l"],s["g"]]),{importReport:function(e){var t=this;e.forEach(function(e){return t.handleFrame(e)})},handleFrame:function(e){var t=Object(a["c"])(e);if(t){var n=Object(o["d"])(t,["unitID","frameID"]),r=n.unitID,i=n.frameID;if(this.ADD_UNITS(r),i===this.$config.frame.id.RESPONSE){console.log("RESPONSE ".concat(e));var c=Object(d["a"])(this.theCommand,e);c&&this.ADD_COMMANDS(c)}else{var u=Object(f["b"])(e);this.uniqueReport(u)?(console.log("REPORT ".concat(e)),this.ADD_REPORTS(u)):console.warn("REPORT (DUPLICATE) ".concat(e))}}else console.error("CORRUPT ".concat(e))},starWaitting:function(){this.SET_LOADING(!0),this.dismiss=this.$q.notify({message:"Sending command....",timeout:0}),this.timers.cmdTimeout.time=this.theCommand.timeout||this.$config.command.timeoutMS,this.$timer.start("cmdTimeout")},stopWaitting:function(e,t){this.dismiss(),this.CLEAR_THE_COMMAND(),this.SET_LOADING(!1),this.timers.cmdTimeout.isRunning&&this.$timer.stop("cmdTimeout"),this.$q.notify({message:e,type:t})},cmdTimeout:function(){this.ADD_COMMANDS(Object(d["a"])(this.theCommand,null))},ignoreCommand:function(){this.stopWaitting("Command ignored.","warning")},parseCommand:function(e){return this.theUnit?this.theCommand?"Command busy.":Object(b["c"])(e):"No device."},executeCommand:function(e){var t=this.parseCommand(e);Object(o["e"])(t)?this.$q.notify({message:t,type:"negative"}):this.SET_THE_COMMAND(i()({},t,{unitID:this.theUnit,payload:e}))}}),mounted:function(){this.$mqtt.subscribe("VCU/#")},mqtt:{"VCU/+/RSP":function(e,t){var n=e.toString("hex").toUpperCase();this.theCommand&&this.handleFrame(n)},"VCU/+/RPT":function(e,t){var n=e.toString("hex").toUpperCase();this.handleFrame(n)}},timers:{cmdTimeout:{time:0}},watch:{theCommand:function(t){if(t){var n=t.unitID,r=t.hexData,i=e.from(r,"hex");this.starWaitting(),this.$mqtt.publish("VCU/".concat(n,"/CMD"),i),console.log("COMMAND ".concat(r))}},reports:function(e){if(e.length>0){var t=e[0],n=t.frameID,r=t.data;if(this.calibration&&n===this.$config.frame.id.FULL){var i=Object(o["b"])(r);i&&(this.$root.$emit("executeCommand","REPORT_RTC=".concat(i)),this.$q.notify({message:"Calibrating device time.."}))}}},commands:function(e){if(e.length>0){var t=e[0].res,n="OK"==t.title,r=n?"Command sent.":"Command is ".concat(t.title),i=n?"positive":"negative";this.stopWaitting(r,i)}}}}}).call(this,n("b639").Buffer)},a7bc:function(e,t,n){"use strict";n.d(t,"k",function(){return r}),n.d(t,"o",function(){return i}),n.d(t,"e",function(){return a}),n.d(t,"n",function(){return o}),n.d(t,"m",function(){return c}),n.d(t,"j",function(){return u}),n.d(t,"f",function(){return s}),n.d(t,"l",function(){return f}),n.d(t,"g",function(){return d}),n.d(t,"d",function(){return b}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return m}),n.d(t,"b",function(){return p}),n.d(t,"h",function(){return j}),n.d(t,"i",function(){return h});var r="SET_LOADING",i="TOGGLE_CALIBRATION",a="CLEAR_ALL",o="SET_THE_UNIT",c="SET_THE_REPORT",u="SET_COMMAND_BUFFER",s="CLEAR_COMMAND_BUFFER",f="SET_THE_COMMAND",d="CLEAR_THE_COMMAND",b="ADD_UNITS",l="ADD_REPORTS",m="ADD_COMMANDS",p="ADD_FINGERS",j="DELETE_FINGERS",h="RESET_FINGERS"},ab1c:function(e,t,n){"use strict";var r=n("448a"),i=n.n(r),a=(n("20d6"),n("110e")),o=n("3156"),c=n.n(o),u=(n("c5f6"),n("c1df")),s=n.n(u),f=n("2ef0"),d=n("1a0d"),b=n("9a0a"),l=n("bf3c"),m=function(e){var t=e.required,n=["sendDatetime","logDatetime"],r=i()(n.reduce(function(e,t){return e.concat([{field:t,title:Object(f["startCase"])(t),required:!0,chartable:!0,size:7,format:function(e){return Number(s()(Object(d["f"])(e),"YYMMDDHHmmssEE").format("X"))},display:function(e){return s()(e,"X").format("ddd, DD MMM YYYY, HH:mm:ss")}}])},[])).concat([{field:"driverID",title:"Driver ID",required:!0,chartable:!0,size:1,format:function(e){return Object(l["g"])(Object(l["b"])(e))},display:function(e){return 255===e?"NONE":Object(l["h"])(e,2).toUpperCase()}},{field:"eventsGroup",title:"Events Group",required:!0,chartable:!0,size:8,format:function(e){return Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["h"])(e,16).toUpperCase()}},{field:"vehicleState",title:"Vehicle State",required:!1,chartable:!0,size:1,format:function(e){return Object(l["f"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}},{field:"gpsLongitude",title:"GPS Longitude",required:!1,chartable:!0,size:4,format:function(e){return 1e-7*Object(l["e"])(Object(l["b"])(e))},display:function(e){return parseFloat(e.toFixed(7))}},{field:"gpsLatitude",title:"GPS Latitude",required:!1,chartable:!0,size:4,format:function(e){return 1e-7*Object(l["e"])(Object(l["b"])(e))},display:function(e){return parseFloat(e.toFixed(7))}},{field:"gpsAltitude",title:"GPS Altitude",required:!1,chartable:!0,unit:"m",size:4,format:function(e){return.1*Object(l["g"])(Object(l["b"])(e))},display:function(e){return parseFloat(e.toFixed(2))}},{field:"gpsHDOP",title:"GPS HDOP",required:!1,chartable:!0,size:1,format:function(e){return.1*Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}},{field:"gpsVDOP",title:"GPS VDOP",required:!1,chartable:!0,size:1,format:function(e){return.1*Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}},{field:"gpsHeading",title:"GPS Heading",required:!1,chartable:!0,unit:"Degree",size:1,format:function(e){return 2*Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}},{field:"gpsSatInUse",title:"GPS Sat. in use",required:!1,chartable:!0,unit:"Sat.",size:1,format:function(e){return Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}},{field:"speed",title:"Vehicle Speed",required:!1,chartable:!0,unit:"Km/hr",size:1,format:function(e){return Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}},{field:"odometer",title:"Odometer",required:!1,chartable:!0,unit:"m",size:4,format:function(e){return Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}},{field:"signal",title:"Signal Quality",required:!1,chartable:!0,unit:"%",size:1,format:function(e){return Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}},{field:"batVoltage",title:"Battery Voltage",required:!1,chartable:!0,unit:"mVolt",size:1,format:function(e){return 18*Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}},{field:"rangeApproximation",title:"Range Approximation",required:!1,chartable:!0,unit:"Km",size:1,format:function(e){return Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}},{field:"batteryEfficiency",title:"Battery Efficiency",required:!1,chartable:!0,unit:"Km/kWh",size:1,format:function(e){return Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}},{field:"tripA",title:"Trip A",required:!1,chartable:!0,unit:"m",size:4,format:function(e){return Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}},{field:"tripB",title:"Trip B",required:!1,chartable:!0,unit:"m",size:4,format:function(e){return Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}}]);return r.filter(function(e){return e.required===t})},p=function(e){for(var t=e.required,n=2,r=[],a=1;a<=n;a++){var o=[{field:"BMSId".concat(a),title:"BMS-".concat(a," ID"),required:!0,size:4,format:function(e){return Object(l["g"])(Object(l["b"])(e))},display:function(e){return 4294967295===e?"NONE":Object(l["h"])(e,8).toUpperCase()}},{field:"BMSVoltage".concat(a),title:"BMS-".concat(a," Voltage"),required:!0,chartable:!0,unit:"Volt",size:2,format:function(e){return.01*Object(l["g"])(Object(l["b"])(e))},display:function(e){return e.toFixed(2)}},{field:"BMSCurrent".concat(a),title:"BMS-".concat(a," Current"),required:!0,chartable:!0,unit:"Ampere",size:2,format:function(e){return.01*Object(l["g"])(Object(l["b"])(e))-50},display:function(e){return e.toFixed(2)}},{field:"BMSSoc".concat(a),title:"BMS-".concat(a," SoC"),required:!1,chartable:!0,unit:"%",size:2,format:function(e){return.01*Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}},{field:"BMSTemperature".concat(a),title:"BMS-".concat(a," Temperature"),required:!1,chartable:!0,unit:"Celcius",size:2,format:function(e){return.1*Object(l["g"])(Object(l["b"])(e))-40},display:function(e){return e.toFixed(2)}}];r=i()(r).concat(o)}return r.filter(function(e){var n=e.required;return n===t})},j=function(){var e=["ManagerTask","IotTask","ReporterTask","CommandTask","GpsTask","GyroTask","RemoteTask","FingerTask","AudioTask","GateTask","CanRxTask","CanTxTask","Hmi2PowerTask"],t=["Yaw","Pitch","Roll"];return i()(e.reduce(function(e,t){return e.concat([{field:"".concat(t,"-wakeup"),title:"".concat(t," wakeup"),required:!1,chartable:!0,unit:"s",size:1,format:function(e){return Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}},{field:"".concat(t,"-stack"),title:"".concat(t," stack"),required:!1,chartable:!0,unit:"words",size:2,format:function(e){return Object(l["g"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}}])},[])).concat(i()(t.reduce(function(e,t){return e.concat([{field:"motion".concat(t),title:"Motion ".concat(t),required:!1,chartable:!0,unit:"Degree",size:1,format:function(e){return Object(l["f"])(Object(l["b"])(e))},display:function(e){return Object(l["c"])(e)}}])},[])))},h=i()(b["b"]).concat(i()(m({required:!0})),i()(p({required:!0})),i()(m({required:!1})),i()(p({required:!1})),i()(j())).map(function(e,t){return c()({},e,{no:t})}),g=n("d1cd");n.d(t,"b",function(){return O}),n.d(t,"c",function(){return E}),n.d(t,"a",function(){return h});var O=function(e){var t=Object(g["b"])(e,g["a"]),n=Object(d["d"])(t,["frameID","unitID"]),r=n.frameID,i=n.unitID,o=h.filter(function(e){var t=a["b"].frame;return r==t.id.FULL||r==t.id.SIMPLE&&e.required});return{unitID:i,frameID:r,hexData:e,data:Object(g["b"])(e,o)}},v=function(e){var t=e.data;return t.filter(function(e){var t=e.required;return t})},C=function(e,t){var n=t.findIndex(function(t){var n=t.hexData;return n===e.hexData});while(n<t.length){var r=t[n++];if(r.frameID===a["b"].frame.id.FULL)return r.data.filter(function(e){var t=e.required;return!t})}return[]},E=function(e,t){return Object(f["orderBy"])(i()(v(e)).concat(i()(C(e,t))),"no")}},bf3c:function(e,t,n){"use strict";n.d(t,"h",function(){return r}),n.d(t,"g",function(){return i}),n.d(t,"f",function(){return o}),n.d(t,"e",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return f});n("c5f6"),n("6b54"),n("f576"),n("2ef0");var r=function(e,t){return e.toString(16).padStart(t,"0")},i=function(e){return parseInt(e,16)},a=function(e){e.length%2!==0&&(e="0"+e);var t=parseInt(e,16),n=Math.pow(2,e.length/2*8);return t>n/2-1&&(t-=n),t},o=function(e){var t=parseInt(e,16);return t>127&&(t-=256),t},c=function(e){for(var t=e.toString(),n="",r=0;r<t.length&&"00"!==t.substr(r,2);r+=2)n+=String.fromCharCode(parseInt(t.substr(r,2),16));return n},u=function(e){for(var t=[],n=0,r=e.length;n<r;n++)t.push(Number(e.charCodeAt(n)).toString(16));return t.join("")},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Number(e).toLocaleString("id",{minimumFractionDigits:t,maximumFractionDigits:t})},f=function(e){var t=[],n=e.length-2;while(n>=0)t.push(e.substr(n,2)),n-=2;return t.join("")}},d1cd:function(e,t,n){"use strict";n.d(t,"b",function(){return f}),n.d(t,"c",function(){return d});n("7514");var r=n("3156"),i=n.n(r),a=(n("6762"),n("2fdb"),n("0be1")),o=n("1a0d"),c=n("9a0a");n.d(t,"a",function(){return c["b"]});var u=n("110e"),s=function(e){var t=c["b"].filter(function(e){var t=e.field;return["prefix","crc"].includes(t)}).map(function(e){var t=e.size;return t}).reduce(function(e,t){return e+t});return Object(a["a"])(e.substring(2*t))},f=function(e,t){var n=0;return t.reduce(function(t,r){var a=r.format(e.substr(n,2*r.size));return n+=2*r.size,t.concat([i()({},r,{value:a,output:r.display(a)})])},[])},d=function(e){var t=f(e,c["b"]);if(Object(o["d"])(t,"prefix")==u["b"].frame.prefix){var n=t.find(function(e){var t=e.field;return"crc"===t}).output;if(n==s(e)){var r=c["b"].filter(function(e){var t=e.field;return["prefix","crc","size"].includes(t)}).map(function(e){var t=e.size;return t}).reduce(function(e,t){return e+t});if(Object(o["d"])(t,"size")==e.length/2-r)return t;console.warn("CORRUPT: Size not same")}else console.warn("CORRUPT: CRC not valid")}else console.warn("CORRUPT: Prefix not same")}},d87e:function(e,t,n){"use strict";n.d(t,"e",function(){return r}),n.d(t,"f",function(){return i}),n.d(t,"d",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return u});var r="getTotalReports",i="uniqueReport",a="devReports",o="devEvents",c="devCommands",u="devFingers"},fb1c:function(e,t,n){}},[[0,"runtime","vendor"]]]);