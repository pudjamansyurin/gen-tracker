(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],d=0,b=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&b.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={1:0},o=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{2:"94445a46",3:"abebbea8",4:"59b90c73"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(e);var s=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}i[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=s;o.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"004b":function(e,t,n){"use strict";(function(e){var r=n("9944"),i=n("b7fa"),o=n("8b56"),a=n("a55c"),c=n("6ad4"),u=n("7a23"),s=n("5502");t["a"]=function({publisher:t,awaitCommand:n,ignoreResponse:d,addDevices:l}){const b=Object(s["b"])(),f=Object(u["f"])((()=>b.state.db.commands)),m=Object(u["f"])((()=>b.getters["db/devDevice"])),p=e=>b.dispatch(c["b"],e),O=Object(u["E"])(null),g=e=>{if(!e)return Object(i["c"])("No payload");if(!m.value)return Object(i["c"])("No device");const{unitID:t,status:r,commandable:c}=m.value;if(n.value)return Object(i["c"])("Command busy");if(!c)return Object(i["c"])("Device busy");e=e.toUpperCase();const u=Object(a["e"])(e);if(!u)return;if("string"===typeof u)return Object(i["c"])(u);const s=Object(a["b"])(u,t);p(s),O.value=setTimeout(d,3e3,o["a"].TIMEOUT)},j=(e,t)=>{const o=parseInt(t.split("/")[1]),c=e.toString("hex").toUpperCase(),u=!c;if(console.warn(`COMMANDABLE ${o}, ${u}`),l([{unitID:o,commandable:u}]),u)return Object(i["c"])("Device commandable","info");if(!n.value)return;const{lastCommand:s}=m.value,d=Object(a["d"])(c);Object(r["g"])(d,"sendDatetime")==s.sendDatetime&&clearTimeout(O.value)},v=e=>{};return Object(u["R"])((()=>f.value),(()=>{if(!n.value)return;const{unitID:r,hexCmd:i}=f.value[0],o=e.from(i,"hex");console.log(`COMMAND ${i}`),t(r,o)}),{deep:!0}),{sendCommand:g,handleCommand:j,handleLostCommand:v}}}).call(this,n("b639").Buffer)},"0161":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n("ded3"),i=n.n(r),o=(n("13d5"),n("9944")),a=n("b9a2"),c=n("9482");const u=(e,t)=>{let n=0;return t.reduce(((t,r)=>{let o=r.format(e.substr(n,2*r.size));return n+=2*r.size,t.concat([i()(i()({},r),{},{value:o,output:r.display(o)})])}),[])},s=(e,t)=>{const n=t==c["a"].prefix.report?a["b"]:a["a"],r=u(e,n);if(Object(o["g"])(r,"prefix")!=t)return console.warn("CORRUPT: Prefix not same");const i=n.filter((({field:e})=>["prefix","size"].includes(e))).map((({size:e})=>e)).reduce(((e,t)=>e+t));return Object(o["g"])(r,"size")!=e.length/2-i?console.warn("CORRUPT: Size not same"):r}},"018e":function(e,t){},1:function(e,t){},10:function(e,t){},2:function(e,t){},2166:function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return s}));n("4d90");const r=(e,t)=>e.toString(16).padStart(t,"0"),i=e=>parseInt(e,16),o=e=>{e.length%2!==0&&(e="0"+e);let t=parseInt(e,16),n=Math.pow(2,e.length/2*8);return t>n/2-1&&(t-=n),t},a=e=>{let t=parseInt(e,16);return t>127&&(t-=256),t},c=e=>{let t="";e=e.toString();for(let n=0;n<e.length&&"00"!==e.substr(n,2);n+=2)t+=String.fromCharCode(parseInt(e.substr(n,2),16));return t},u=e=>{let t=[];for(let n=0,r=e.length;n<r;n++)t.push(Number(e.charCodeAt(n)).toString(16));return t.join("")},s=(e,t=0)=>Number(e).toLocaleString("id",{minimumFractionDigits:t,maximumFractionDigits:t}),d=e=>{const t=[];let n=e.length-2;while(n>=0)t.push(e.substr(n,2)),n-=2;return t.join("")}},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("ddb0");var r=n("7a23"),i=(n("7d6e"),n("e54f"),n("985d"),n("0047"),n("b05d")),o=n("5638"),a=n("42d2"),c=n("436b"),u=n("2a19"),s=n("b12a"),d=n("0967"),l=n("ff52"),b={config:{notify:{type:"info"}},lang:o["a"],iconSet:a["a"],plugins:{Dialog:c["a"],Notify:u["a"],AppFullscreen:s["a"],Platform:d["b"],Dark:l["a"]}};function f(e,t,n,i,o,a){const c=Object(r["H"])("router-view");return Object(r["B"])(),Object(r["h"])(c)}var m=n("ded3"),p=n.n(m),O=n("e7fc"),g=n.n(O),j=n("b7fa"),v=n("9482"),h=function(){const e=Object(r["E"])(null),{host:t,username:n,password:i}=v["a"].mqtt,o=g.a.connect(t,{clientId:E(),username:n,password:i,clean:d["b"].is.mobile,keepalive:60,reconnectPeriod:1e3,connectTimeout:3e4});Object(r["w"])((()=>{var t;Object.keys(e.value).forEach((t=>delete e.value[t])),null===(t=o)||void 0===t||t.end(),o=null})),o.on("connect",(()=>Object(j["c"])("Client connected","info"))),o.on("reconnect",(()=>Object(j["c"])("Reconnecting...","info"))),o.on("error",(e=>{Object(j["c"])(`Connection error: ${e}`,"error"),o.end()})),o.on("message",((t,n,r)=>Object.keys(e.value).forEach((r=>D(t,r)&&e.value[r](n,t)))));const a=(t,n,r)=>{var i;e.value=p()(p()({},e.value),{},{[t]:r}),null===(i=o)||void 0===i||i.subscribe(t,n)},c=e=>{var t;null===(t=o)||void 0===t||t.unubscribe(e,(()=>console.log(`${e} unsubscribed`)))},u=(e,t,n)=>{var r;return null===(r=o)||void 0===r?void 0:r.publish(e,t,n)};return{subscribe:a,unsubscribe:c,publish:u}};const D=(e,t)=>{let n=e.split("/"),r=t.split("/");if(!e.includes("#")&&!t.includes("#")&&n.length!==r.length)return!1;r.length<n.length&&(r=e.split("/"),n=t.split("/"));let i=!0;return n.forEach(((e,t)=>{"+"===e||"#"===e||r[t]&&"+"===r[t]||r[t]&&"#"===r[t]||r[t]&&r[t]===e||(i=!1)})),i},E=()=>{var e;let t=null!==(e=window.localStorage.getItem("clientId"))&&void 0!==e?e:"mqttjs_"+Math.random().toString(16).substr(2,8);return window.localStorage.setItem("clientId",t),t};var C=n("a7bc"),I=n("a55c"),R=n("cfbf"),S=n("5502"),y=function({addDevices:e}){const t=Object(S["b"])(),n=e=>t.commit(C["d"],e),r=e=>t.commit(C["j"],e),i=e=>t.commit(C["h"],e),o=({payload:t,unitID:o,message:a})=>{let{prop:c,value:u}=Object(I["c"])(t);"FINGER_FETCH"==c?(a.length>0&&a.split(",").forEach((e=>n({unitID:o,fingerID:e}))),e([{unitID:o,fingerTime:Object(R["a"])().unix()}])):"FINGER_ADD"==c?n({unitID:o,fingerID:a}):"FINGER_DEL"==c?r({unitID:o,fingerID:u}):"FINGER_RST"==c&&i({unitID:o})};return{handleFinger:o}},_=n("6ad4"),N=n("9944"),T=n("8b56"),M=n("0161"),w=n("2ef0"),U=function({publisher:e,awaitCommand:t,handleFinger:n}){const i=Object(S["b"])(),o=Object(r["f"])((()=>i.state.db.devices)),a=Object(r["f"])((()=>i.getters["db/devDevice"])),c=e=>i.dispatch(_["d"],e),u=(e,n)=>{if(!t.value)return;const r=Object(T["b"])(n);Object(T["c"])(r);const{unitID:i,sendDatetime:o,code:a,subCode:u,payload:s,status:d}=e;c(p()({unitID:i,sendDatetime:o,code:a,subCode:u,payload:s},r))},s=(n,r)=>{const i=n.toString("hex").toUpperCase();if(!i)return;if(!Object(M["b"])(i,v["a"].prefix.response))return console.error(`CORRUPT ${i}`);const a=Object(T["f"])(i),c=Object(N["g"])(a,"unitID"),s=o.value.find((e=>e.unitID===c));if(!s)return;if(!t.value)return console.error(`RESPONSE ${i}`);console.warn(`RESPONSE ${i}`);const{lastCommand:d}=s;Object(T["g"])(d,a)&&(u(d,a),e(c,null))},d=t=>{var n;const{unitID:r,lastCommand:i}=null!==(n=a.value)&&void 0!==n?n:{};i&&u(i,null!==t&&void 0!==t?t:T["a"].CANCELLED),e(r,null)};return Object(r["R"])((()=>a.value),(e=>{const{lastCommand:r}=null!==e&&void 0!==e?e:{};r&&(t.value||r.resCode==T["a"].OK&&n(r))}),{deep:!0}),{ignoreResponse:d,handleResponse:s}},A=n("004b"),k=function({handleReports:e}){const t=Object(S["b"])(),n=Object(r["f"])((()=>t.state.db.buffers)),i=e=>t.commit(C["i"],e),o=e=>t.commit(C["n"],e),a=e=>t.dispatch(_["a"],e),c=Object(r["E"])(null),u=()=>{if(n.value.length>0){const t=n.value;e(t),i(t)}else o()},s=(e,t)=>{const n=e.toString("hex").toUpperCase();if(n)return Object(M["b"])(n,v["a"].prefix.report)?void a([n]):console.error(`CORRUPT ${n}`)};return Object(r["z"])((()=>c.value=setInterval(u,1e3))),Object(r["w"])((()=>clearInterval(c.value))),{handleBuffer:s}},B=(n("13d5"),n("af6a")),x=function({handleEvents:e,handleLostCommand:t}){const n=Object(S["b"])(),i=Object(r["f"])((()=>n.state.db.reports)),o=Object(r["f"])((()=>n.getters["db/devDevice"])),a=e=>n.commit(C["k"],e),c=e=>n.dispatch(_["c"],e),u=Object(r["f"])((()=>n.state.common.follow)),s=e=>{const{val:t}=e.sendDatetime,{val:n}=e.logDatetime;return i.value.some((({logDatetime:e})=>e.val==n))?(Object(j["c"])("Report duplicate","info"),console.error("^REPORT (DUPLICATE)")):(Math.abs(Object(N["c"])(t,"years"))>1&&(Object(j["c"])("Report expired","info"),console.error("^REPORT (EXPIRED)")),e)},d=e=>{let t=e.reduce(((e,t)=>{console.log(`REPORT ${t}`);let n=s(Object(B["d"])(t));return n?[...e,n]:e}),[]);c(t)};return Object(r["R"])((()=>o.value),((t,n)=>{var r;const i=null===t||void 0===t?void 0:t.lastReport,o=null===n||void 0===n?void 0:n.lastReport;if(!i)return a(null);(i.unitID.val!=(null===o||void 0===o||null===(r=o.unitID)||void 0===r?void 0:r.val)||u.value)&&a(i),e(i,o)}),{lazy:!1,immediate:!0,deep:!0}),{handleReports:d}},P=n("fd30"),z=function(){const e=Object(S["b"])(),t=Object(r["f"])((()=>e.state.common.notification)),n=(e,n)=>{if(!t.value)return;if(!n)return;let r=Object(P["d"])(e.eventsGroup),i=Object(P["d"])(n.eventsGroup),o=r.filter((e=>!i.includes(e)));o.forEach((t=>Object(j["d"])(t,e.logDatetime.out)))};return{handleEvents:n}},F=function(){const e=Object(S["b"])(),t=Object(r["f"])((()=>e.getters["db/devDevice"])),n=t=>e.commit(C["c"],t),i=Object(r["f"])((()=>{var e;const{lastCommand:n}=null!==(e=t.value)&&void 0!==e?e:{};return n&&!n.hasOwnProperty("resCode")})),o=(e,t)=>{const r=parseInt(t.split("/")[1]),i=parseInt(e);console.warn(`STATUS ${r},${i}`),n([{unitID:r,status:i}])};return Object(r["R"])((()=>t.value),((e,t)=>{if(!e||!t)return;const{status:n}=t,{status:r}=e;n!=r&&Object(j["d"])("DEVICE "+(r?"ONLINE":"OFFLINE"),Object(R["a"])().format("ddd, DD-MM-YY HH:mm:ss"))}),{deep:!0}),{awaitCommand:i,handleStatus:o,addDevices:n}},q=Object(r["m"])({setup(e){const{subscribe:t,publish:n}=h(),i=(e,t)=>{n(`VCU/${e}/CMD`,t,{qos:2,retain:!0}),t||n(`VCU/${e}/RSP`,t,{qos:1,retain:!0})},{addDevices:o,handleStatus:a,awaitCommand:c}=F(),{handleFinger:u}=y({addDevices:o}),{handleResponse:s,ignoreResponse:d}=U({publisher:i,awaitCommand:c,handleFinger:u}),{sendCommand:l,handleCommand:b,handleLostCommand:f}=Object(A["a"])({publisher:i,awaitCommand:c,ignoreResponse:d,addDevices:o}),{handleEvents:m}=z(),{handleReports:p}=x({handleEvents:m,handleLostCommand:f}),{handleBuffer:O}=k({handleReports:p});Object(r["z"])((()=>{t("VCU/+/CMD",{qos:1},b),t("VCU/+/RPT",{qos:1},O),t("VCU/+/RSP",{qos:1},s),t("VCU/+/STS",{qos:1},a)})),Object(r["C"])("awaitCommand",c),Object(r["C"])("sendCommand",l),Object(r["C"])("ignoreResponse",d)}});q.render=f;var L=q,V=n("4bde"),G=n("bfa9"),$=function(){return{darker:!1,tree:!1,follow:!0,notification:!0}},H=n("4930b"),Y=n.n(H),K=n("5662"),W={[Object(N["h"])(K["a"])](e,t){e.darker=t},[Object(N["h"])(K["b"])](e,t){e.follow=t},[Object(N["h"])(K["d"])](e,t){e.tree=t},[Object(N["h"])(K["c"])](e,t){e.notification=t}},J=n("018e"),Q=n.n(J),X={namespaced:!0,state:$,getters:Y.a,mutations:W,actions:Q.a},Z=function(){return{buffering:null,buffers:[],unitID:null,devices:[],report:null,reports:[],commands:[],fingers:[]}},ee={reportIdxByUnitID:({reports:e})=>e.reduce(((e,{unitID:t},n)=>{var r;return e[t.val]=null!==(r=e[t.val])&&void 0!==r?r:[],e[t.val].push(n),e}),{}),reportByUnitID:(e,t)=>n=>{var r;return(null!==(r=t.reportIdxByUnitID[n])&&void 0!==r?r:[]).map((t=>e.reports[t]))},devReports({unitID:e},t){return t.reportByUnitID(e)},devEvents(e,t){return Object(P["b"])(t.devReports)},devDevice({devices:e,unitID:t}){return e.find((e=>e.unitID===t))},devCommands({commands:e,unitID:t}){return e.filter((e=>e.unitID===t))},devResponses({responses:e,unitID:t}){return e.filter((e=>e.unitID===t))},devFingers({fingers:e,unitID:t}){return e.filter((e=>e.unitID===t))}},te={[Object(N["h"])(C["g"])](e){Object.assign(e,Z())},[Object(N["h"])(C["l"])](e,t){e.unitID=t},[Object(N["h"])(C["k"])](e,t){e.report=t},[Object(N["h"])(C["c"])](e,t){t.forEach((t=>{let n=e.devices.findIndex((({unitID:e})=>e===t.unitID));n<0?e.devices.unshift(p()({status:0,sendDatetime:0,commandable:!0},t)):e.devices.splice(n,1,p()(p()({},e.devices[n]),t))})),e.unitID||(e.unitID=t[t.length-1].unitID)},[Object(N["h"])(C["m"])](e){e.buffering||(e.buffering=Object(j["b"])("Syncing...","Please wait a moment"))},[Object(N["h"])(C["n"])](e){var t;null!==(t=e.buffering)&&void 0!==t&&t.hide&&e.buffering.hide(),e.buffering=null},[Object(N["h"])(C["a"])](e,t){e.buffers.push(...t)},[Object(N["h"])(C["i"])](e,t){e.buffers=[...e.buffers.filter((e=>!t.includes(e)))]},[Object(N["h"])(C["e"])](e,t){const n=t.map((e=>Object.freeze(e)));e.reports=[...Object(w["orderBy"])([...e.reports,...n],"logDatetime.val","desc")];const r=d["b"].is.desktop?500:100;e.reports.length>r-1&&e.reports.splice(r,e.reports.length-r)},[Object(N["h"])(C["b"])](e,t){e.commands.unshift(t);const n=d["b"].is.desktop?50:10;e.commands.length>n&&e.commands.pop()},[Object(N["h"])(C["f"])](e,t){let n=e.commands.findIndex((({unitID:e})=>e===t.unitID));n>=0&&e.commands.splice(n,1,t)},[Object(N["h"])(C["d"])](e,t){let n=e.fingers.find((({unitID:e,fingerID:n})=>e===t.unitID&&n===t.fingerID));n||e.fingers.unshift(t)},[Object(N["h"])(C["j"])](e,t){let n=e.fingers.findIndex((({unitID:e,fingerID:n})=>e===t.unitID&&n===t.fingerID));e.fingers.splice(n,1)},[Object(N["h"])(C["h"])](e,t){e.fingers=e.fingers.filter((({unitID:e})=>e!==t.unitID))}},ne=(n("26e9"),{[Object(N["h"])(_["a"])]({state:e,commit:t},n){n.length>1&&t(Object(N["h"])(C["m"])),t(Object(N["h"])(C["a"]),n)},[Object(N["h"])(_["c"])]({state:e,commit:t},n){n.length>1&&t(Object(N["h"])(C["m"])),t(Object(N["h"])(C["e"]),n.slice().reverse()),t(Object(N["h"])(C["c"]),n.map((e=>p()({unitID:e.unitID.val,sendDatetime:e.sendDatetime.val,lastReport:e},"FULL"==Object(N["e"])(e.frameID.val)&&{lastFullReport:e}))))},[Object(N["h"])(_["b"])]({commit:e},t){e(Object(N["h"])(C["b"]),t),e(Object(N["h"])(C["c"]),[{unitID:t.unitID,lastCommand:t}])},[Object(N["h"])(_["d"])]({state:e,commit:t},n){t(Object(N["h"])(C["f"]),n),t(Object(N["h"])(C["c"]),[{unitID:n.unitID,lastCommand:n}])}}),re={namespaced:!0,state:Z(),getters:ee,mutations:te,actions:ne};const ie=["common","db"].map((e=>new G["a"]({key:`${e}_key`,storage:window.localStorage,reducer:t=>({[e]:p()({},t[e])})}).plugin));var oe=Object(V["store"])((function(){const e=Object(S["a"])({modules:{common:X,db:re},plugins:[...ie],strict:!1});return e})),ae=n("6c02");const ce=[{path:"/",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"8b24"))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"e51e"))}];var ue=ce,se=Object(V["route"])((function(){const e=ae["b"],t=Object(ae["a"])({scrollBehavior:()=>({left:0,top:0}),routes:ue,history:e("")});return t})),de=async function(e){const t="function"===typeof oe?await oe({}):oe,n="function"===typeof se?await se({store:t}):se;t.$router=n;const r=e(L);return r.use(i["a"],b),{app:r,store:t,router:n}},le=n("9483");Object(le["a"])("service-worker.js",{ready(){console.log("Service worker is active.")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),u["a"].create({message:"New content is available; please refresh.",color:"red",icon:"refresh",timeout:0,actions:[{label:"Refresh",color:"yellow",handler:()=>{window.localStorage.removeItem("db_key"),window.location.reload()}},{label:"Dismiss",color:"white",handler:()=>window.localStorage.removeItem("db_key")}]})},offline(){console.log("No internet connection found. App is running in offline mode.")},error(){console.error("Error during service worker registration:")}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(0).then(n.t.bind(null,"a0db",7));async function be({app:e,router:t,store:n}){e.use(t),e.use(n),e.mount("#q-app")}de(r["g"]).then(be)},3:function(e,t){},4:function(e,t){},"4930b":function(e,t){},5:function(e,t){},5662:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a}));const r="common/SET_DARKER",i="common/SET_TREE",o="common/SET_FOLLOW",a="common/SET_NOTIFICATION"},"5f15":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return O}));var r=n("ded3"),i=n.n(r),o=(n("13d5"),n("ddb0"),n("cfbf")),a=n("9482"),c=n("2ef0"),u=n("9944"),s=n("b9a2"),d=n("2166");const l={UNKNOWN:-3,LOST:-2,BACKUP:-1,NORMAL:0,STANDBY:1,READY:2,RUN:3},b=e=>Object.keys(l)[Object.values(l).findIndex((t=>t===parseInt(e)))],f=({required:e})=>[{group:"packet",field:"frameID",title:"Frame ID",required:!0,chartable:!0,size:1,format:e=>Object(d["g"])(Object(d["b"])(e)),display:e=>a["a"].frames[e]},{group:"packet.datetime",field:"logDatetime",title:"Log Datetime",required:!0,chartable:!0,size:7,format:e=>Number(Object(o["a"])(Object(u["i"])(e),"YYMMDDHHmmss0d").unix()),display:e=>o["a"].unix(e).format("ddd, DD-MM-YY HH:mm:ss")},{group:"vcu",field:"driverID",title:"Driver ID",required:!0,chartable:!0,size:1,format:e=>Object(d["g"])(Object(d["b"])(e)),display:e=>255===e?"NONE":Object(d["h"])(e,2).toUpperCase()},{group:"vcu",field:"eventsGroup",title:"Events Group",required:!0,chartable:!0,size:8,format:e=>Object(d["g"])(Object(d["b"])(e)),display:e=>Object(d["h"])(e,16).toUpperCase()},{group:"vcu",field:"vehicleState",title:"Vehicle State",required:!0,chartable:!0,size:1,format:e=>Object(d["f"])(Object(d["b"])(e)),display:e=>b(e)},{group:"vcu",field:"uptime",title:"Uptime",required:!0,chartable:!0,unit:"hour",size:4,format:e=>Object(d["g"])(Object(d["b"])(e))/3600,display:e=>Object(d["c"])(e,2)},{group:"vcu.gps",field:"gpsLongitude",title:"GPS Longitude",required:!1,chartable:!0,size:4,format:e=>1e-7*Object(d["e"])(Object(d["b"])(e)),display:e=>parseFloat(e.toFixed(7))},{group:"vcu.gps",field:"gpsLatitude",title:"GPS Latitude",required:!1,chartable:!0,size:4,format:e=>1e-7*Object(d["e"])(Object(d["b"])(e)),display:e=>parseFloat(e.toFixed(7))},{group:"vcu.gps",field:"gpsAltitude",title:"GPS Altitude",required:!1,chartable:!0,unit:"m",size:4,format:e=>.1*Object(d["g"])(Object(d["b"])(e)),display:e=>parseFloat(e.toFixed(2))},{group:"vcu.gps",field:"gpsHDOP",title:"GPS HDOP",required:!1,chartable:!0,size:1,format:e=>.1*Object(d["g"])(Object(d["b"])(e)),display:e=>parseFloat(e.toFixed(2))},{group:"vcu.gps",field:"gpsVDOP",title:"GPS VDOP",required:!1,chartable:!0,size:1,format:e=>.1*Object(d["g"])(Object(d["b"])(e)),display:e=>parseFloat(e.toFixed(2))},{group:"vcu.gps",field:"gpsHeading",title:"GPS Heading",required:!1,chartable:!0,unit:"Degree",size:1,format:e=>2*Object(d["g"])(Object(d["b"])(e)),display:e=>Object(d["c"])(e)},{group:"vcu.gps",field:"gpsSatInUse",title:"GPS Sat. in use",required:!1,chartable:!0,unit:"Sat.",size:1,format:e=>Object(d["g"])(Object(d["b"])(e)),display:e=>Object(d["c"])(e)},{group:"vcu",field:"speed",title:"Vehicle Speed",required:!1,chartable:!0,unit:"Km/hr",size:1,format:e=>Object(d["g"])(Object(d["b"])(e)),display:e=>Object(d["c"])(e)},{group:"vcu.trip",field:"odometer",title:"Odometer",required:!1,chartable:!0,unit:"Km",size:4,format:e=>Object(d["g"])(Object(d["b"])(e)),display:e=>Object(d["c"])(e)},{group:"vcu",field:"signal",title:"Signal Quality",required:!1,chartable:!0,unit:"%",size:1,format:e=>Object(d["g"])(Object(d["b"])(e)),display:e=>Object(d["c"])(e)},{group:"vcu",field:"batVoltage",title:"Battery Voltage",required:!1,chartable:!0,unit:"mVolt",size:1,format:e=>18*Object(d["g"])(Object(d["b"])(e)),display:e=>Object(d["c"])(e)},{group:"vcu.estimation",field:"rangeEstimation",title:"Range Estimation",required:!1,chartable:!0,unit:"Km",size:1,format:e=>Object(d["g"])(Object(d["b"])(e)),display:e=>Object(d["c"])(e)},{group:"vcu.estimation",field:"batteryEstimation",title:"Battery Estimation",required:!1,chartable:!0,unit:"Km/kWh",size:1,format:e=>Object(d["g"])(Object(d["b"])(e)),display:e=>Object(d["c"])(e)},{group:"vcu.trip",field:"tripA",title:"Trip A",required:!1,chartable:!0,unit:"m",size:4,format:e=>Object(d["g"])(Object(d["b"])(e)),display:e=>Object(d["c"])(e)},{group:"vcu.trip",field:"tripB",title:"Trip B",required:!1,chartable:!0,unit:"m",size:4,format:e=>Object(d["g"])(Object(d["b"])(e)),display:e=>Object(d["c"])(e)}].filter((({required:t})=>t===e)),m=({required:e})=>["One","Two"].reduce(((e,t)=>e.concat([{group:`bms.${t}`,field:`bms${t}Id`,title:`BMS ${t} ID`,required:!0,size:4,format:e=>Object(d["g"])(Object(d["b"])(e)),display:e=>4294967295===e?"NONE":Object(d["h"])(e,8).toUpperCase()},{group:`bms.${t}`,field:`bms${t}Voltage`,title:`BMS ${t} Voltage`,required:!0,chartable:!0,unit:"Volt",size:2,format:e=>.01*Object(d["g"])(Object(d["b"])(e)),display:e=>e.toFixed(2)},{group:`bms.${t}`,field:`bms${t}Current`,title:`BMS ${t} Current`,required:!0,chartable:!0,unit:"Ampere",size:2,format:e=>.01*Object(d["g"])(Object(d["b"])(e))-50,display:e=>e.toFixed(2)},{group:`bms.${t}`,field:`bms${t}Soc`,title:`BMS ${t} SoC`,required:!1,chartable:!0,unit:"%",size:2,format:e=>.01*Object(d["g"])(Object(d["b"])(e)),display:e=>Object(d["c"])(e)},{group:`bms.${t}`,field:`bms${t}Temperature`,title:`BMS ${t} Temperature`,required:!1,chartable:!0,unit:"Celcius",size:2,format:e=>.1*Object(d["g"])(Object(d["b"])(e))-40,display:e=>e.toFixed(2)}])),[]).filter((({required:t})=>t===e)),p=()=>{const e=["managerTask","iotTask","reporterTask","commandTask","gpsTask","gyroTask","remoteTask","fingerTask","audioTask","gateTask","canRxTask","canTxTask"],t=["Yaw (U/D)","Pitch (F/B)","Roll (L/R)"];return[...e.reduce(((e,t)=>e.concat([{group:"vcu.task.wakeup",field:`${t}Wakeup`,title:`${Object(c["startCase"])(t)} wakeup`,required:!1,chartable:!0,unit:"s",size:1,format:e=>Object(d["g"])(Object(d["b"])(e)),display:e=>Object(d["c"])(e)},{group:"vcu.task.stack",field:`${t}Stack`,title:`${Object(c["startCase"])(t)} stack`,required:!1,chartable:!0,unit:"Bytes",size:2,format:e=>Object(d["g"])(Object(d["b"])(e)),display:e=>Object(d["c"])(e)}])),[]),...t.reduce(((e,t)=>e.concat([{group:"vcu.gyro",field:`gyro${t}`,title:`Gyro ${t}`,required:!1,chartable:!0,unit:"Degree",size:1,format:e=>Object(d["f"])(Object(d["b"])(e)),display:e=>Object(d["c"])(e)}])),[])]},O=[...s["b"],...f({required:!0}),...m({required:!0}),...f({required:!1}),...m({required:!1}),...p()].map(((e,t)=>i()(i()({},e),{},{no:t})))},6:function(e,t){},"6ad4":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return a}));const r="db/INSERT_BUFFERS",i="db/INSERT_REPORTS",o="db/INSERT_COMMAND",a="db/INSERT_RESPONSE"},7:function(e,t){},8:function(e,t){},"8b56":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return f})),n.d(t,"b",(function(){return O})),n.d(t,"e",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return j}));n("5319");var r=n("9944"),i=n("0161"),o=n("b7fa"),a=n("5f15"),c=(n("ddb0"),n("b9a2")),u=n("2166");const s=[...c["a"],{field:"resCode",title:"Response Code",required:!0,size:1,format:e=>Object(u["g"])(e),display:e=>{let t=l.find((({resCode:t})=>t===e));return t||(t=l.find((({resCode:e})=>e===d.UNKNOWN))),t.name}},{field:"message",title:"Message",required:!0,size:200,format:e=>Object(u["d"])(e),display:e=>e}],d={ERROR:0,OK:1,INVALID:2,CANCELLED:255,TIMEOUT:256,UNKNOWN:257},l=[{resCode:0,name:"Error",icon:"error",color:"red"},{resCode:1,name:"Ok",icon:"check",color:"green"},{resCode:2,name:"Invalid",icon:"remove_circle",color:"blue"},{resCode:255,name:"Cancelled",icon:"cancel",color:"yellow"},{resCode:256,name:"Timeout",icon:"timer_off",color:"orange"},{resCode:257,name:"Unknown",icon:"help",color:"purple"}],b=e=>Object(i["a"])(e,s),f=(e,t)=>{if(Object(r["g"])(t,"unitID")==e.unitID&&Object(r["g"])(t,"code")==e.code&&Object(r["g"])(t,"subCode")==e.subCode)return!0},m=e=>l.find((({resCode:t})=>t===e)),p=e=>{var t;return null!==(t=m(e))&&void 0!==t?t:m(d.UNKNOWN)},O=e=>{let t,n;return"object"===typeof e?(t=p(Object(r["g"])(e,"resCode")),n=Object(r["g"])(e,"message")):t=p(e),t||(t=p(d.UNKNOWN)),{resCode:t.resCode,message:n}},g=e=>{if(!e)return;let t=Object.keys(a["b"]),n=Object.values(a["b"]);return e.replace(/\{(.+?)\}/g,(function(e,r){let i=n.findIndex((e=>e===parseInt(r)));return t[i]}))},j=({resCode:e})=>{let t=e==d.OK,n=m(e),r=t?"positive":"negative",i=t?"Command sent.":`Command ${n.name}`;Object(o["c"])(i,r)}},9:function(e,t){},9482:function(e,t,n){"use strict";t["a"]={app:{version:"2.11",title:"eBike Tracker",subTitle:"GEN Indonesia"},mqtt:{host:"wss://test.mosquitto.org:8081/mqtt",username:"",password:""},prefix:{report:"@R",command:"@C",response:"@S"},frames:["SIMPLE","FULL"],map:{zoom:3,centerIndonesia:{lat:-2.6000285,lng:118.015776},borderIndonesia:{lngMin:95.011198,lngMax:141.020354,latMin:-11.107187,latMax:5.90713}},timezone:"Asia/Jakarta"}},9944:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return b})),n.d(t,"b",(function(){return m})),n.d(t,"i",(function(){return p})),n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return g})),n.d(t,"h",(function(){return j}));var r=n("ded3"),i=n.n(r),o=(n("13d5"),n("4d90"),n("9482")),a=n("2166"),c=n("2ef0"),u=n("cfbf");const s=n("e002"),d=(e,t)=>Object(c["filter"])(e,Object(c["flow"])(c["identity"],c["values"],c["join"],c["toLower"],Object(c["partialRight"])(c["includes"],t))),l=(e,t,n)=>{let r=e.find((({field:e})=>e===t));return Array.isArray(t)?t.reduce(((t,o)=>(r=e.find((({field:e})=>e===o)),i()(i()({},t),{},{[o]:n?r[n]:r}))),{}):n?r[n]:r},b=(e,t)=>l(e,t,"value"),f=(e,t,n)=>{let r=Object(u["a"])();n&&(r=u["a"].unix(n));let i=r.diff(u["a"].unix(e));return u["a"].duration(i).as(t)},m=({gpsLatitude:e,gpsLongitude:t,sendDatetime:n})=>{let r=Object(c["clone"])(o["a"].timezone);e.val&&t.val&&(r=s(e.val,t.val));let i=Object(u["a"])();return i.tz(r).format("YYMMDDHHmmss0d")},p=e=>{let t=e.match(/.{1,2}/g);return t.reduce(((e,t)=>e.concat(Object(a["g"])(t).toString().padStart(2,"0"))),"")},O=e=>{let t=e.match(/.{1,2}/g);return t.reduce(((e,t)=>e.concat(Object(a["h"])(parseInt(t),2))),"").toUpperCase()},g=e=>o["a"].frames[e],j=e=>e.split("/")[1]},a55c:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return O})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return m}));var r=n("ded3"),i=n.n(r),o=(n("13d5"),n("ddb0"),n("2ef0"),n("cfbf")),a=n("b9a2"),c=n("2166"),u=n("9944");const s=[...a["a"],{field:"value",title:"Value",size:200,format:e=>e,display:e=>e,formatCmd:(e,t)=>Object(c["b"])(Object(c["h"])(parseInt(null!==e&&void 0!==e?e:0),2*(null!==t&&void 0!==t?t:0)))}],d=[{command:"GEN_INFO",desc:"Gather device information",code:0,subCode:0},{command:"GEN_LED",desc:"Control system led",code:0,subCode:1,size:1,type:"bool",range:[0,1]},{command:"GEN_OVERRIDE",desc:"Override vehicle state",code:0,subCode:2,size:1,type:"uint8_t",range:[1,3]},{command:"REPORT_RTC",desc:"Set datetime ( d [0=Sunday] )",code:1,subCode:0,size:7,type:"uint8_t",range:["YYMMDDHHmmss0d"],formatCmd:e=>Object(u["a"])(e),validator:e=>Object(o["a"])(e,"YYMMDDHHmmss0d",!0).isValid()},{command:"REPORT_ODOM",desc:"Set odometer (km)",code:1,subCode:1,size:4,type:"uint32_t",range:[0,99999]},{command:"AUDIO_BEEP",desc:"Beep the audio module",code:2,subCode:0},{command:"AUDIO_MUTE",desc:"Mute the audio module",code:2,subCode:1,size:1,type:"bool",range:[0,1]},{command:"FINGER_FETCH",desc:"Get all registered id",code:3,subCode:0,timeout:15},{command:"FINGER_ADD",desc:"Add a new fingerprint",code:3,subCode:1,timeout:20},{command:"FINGER_DEL",desc:"Delete a fingerprint",code:3,subCode:2,size:1,type:"uint8_t",range:[1,5],timeout:15},{command:"FINGER_RST",desc:"Reset all fingerprints",code:3,subCode:3,timeout:15},{command:"REMOTE_PAIRING",desc:"Keyless pairing mode",code:4,subCode:0,timeout:15},{command:"REMOTE_UNITID",desc:"Set device unique id",code:4,subCode:1,size:4,type:"uint32_t",range:[0,4294967295]},{command:"FOTA_VCU",desc:"Upgrade VCU firmware",code:5,subCode:0,timeout:360},{command:"FOTA_HMI",desc:"Upgrade HMI firmware",code:5,subCode:1,timeout:720},{command:"NET_SEND_USSD",desc:"Send USSD (ex: *123*10*3#)",code:6,subCode:0,size:20,type:"char",formatCmd:e=>Object(c["a"])(e),validator:e=>e.length<20&&e.startsWith("*")&&e.endsWith("#")},{command:"NET_READ_SMS",desc:"Read last SMS",code:6,subCode:1}];var l=n("0161");n("9482");const b=e=>Object(l["a"])(e,s),f=(e,t)=>{const n=Object(o["a"])().unix(),r=s.reduce(((r,i,o)=>{let{field:a,formatCmd:c}=s[s.length-o-1];switch(a){case"value":r=e.hasOwnProperty("formatCmd")?e.formatCmd(e.value)+r:c(e.value,e.size)+r;break;case"subCode":case"code":r=c(e[a])+r;break;case"sendDatetime":r=c(n)+r;break;case"unitID":r=c(t)+r;break;case"size":case"prefix":r=c(r)+r;break;default:break}return r}),"").toUpperCase();return i()(i()({},e),{},{unitID:t,sendDatetime:n,hexCmd:r})},m=e=>{let t=e,n=null;return e.indexOf("=")>-1&&(t=e.split("=")[0],n=e.split("=")[1]),{prop:t,value:n}},p=e=>{var t;const{prop:n,value:r}=m(e),o=d.find((({command:e})=>e===n));return i()(i()({},o),{},{timeout:null!==(t=null===o||void 0===o?void 0:o.timeout)&&void 0!==t?t:10,payload:e,value:r})},O=e=>{const t=p(e);if(!t)return"Unknown command.";if(t.size){if(!t.value)return"Command need value";if(t.validator){if(!t.validator(t.value))return"Value is invalid"}else{const[e,n]=t.range;if(t.value<e||t.value>n)return"Value not in range"}}else if(t.value)return"Command dont need value";return t}},a7bc:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"l",(function(){return i})),n.d(t,"k",(function(){return o})),n.d(t,"m",(function(){return a})),n.d(t,"n",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"i",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"j",(function(){return p})),n.d(t,"h",(function(){return O}));const r="db/CLEAR_DATABASE",i="db/SET_UNITID",o="db/SET_REPORT",a="db/START_BUFFERING",c="db/STOP_BUFFERING",u="db/ADD_BUFFERS",s="db/FREE_BUFFER",d="db/ADD_DEVICES",l="db/ADD_REPORTS",b="db/ADD_COMMANDS",f="db/ADD_RESPONSE",m="db/ADD_FINGERS",p="db/REMOVE_FINGERS",O="db/CLEAR_FINGERS"},af6a:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n("ded3"),i=n.n(r),o=(n("13d5"),n("5f15"));n.d(t,"a",(function(){return o["a"]}));var a=n("9944"),c=n("0161"),u=n("cfbf");const s=e=>{let t=Object(a["g"])(Object(c["a"])(e,o["a"]),"frameID"),n=o["a"].filter((({required:e})=>"FULL"==Object(a["e"])(t)||"SIMPLE"==Object(a["e"])(t)&&e));return Object(c["a"])(e,n)},d=e=>{let t=s(e);return t.reduce(((e,{field:t,value:n,output:r,unit:o})=>i()(i()({},e),{},{[t]:{val:n,out:r}})),{hex:e})},l=e=>Object.keys(e).reduce(((t,n)=>{let r=e[n];if("hex"!=n){let{group:e,title:t,unit:c}=Object(a["f"])(o["a"],n);r=i()(i()({},r),{},{group:e,title:t,unit:c})}return i()(i()({},t),{},{[n]:r})}),{}),b=(e,t)=>{if(!e)return;let n=t.findIndex((({hex:t})=>t===e.hex));if(!(n<0))while(n<t.length){let e=t[n++];if("FULL"==Object(a["e"])(e.frameID.val))return e}},f=e=>e?u["a"].unix(e).endOf("second").fromNow():"Unknown ago"},b7fa:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n("ff52"),i=n("436b"),o=n("2a19"),a=n("cf57");const c=(e,t)=>{const{protocol:n,host:r}=window.location,i=`${n}//${r}/icons/favicon-32x32.png`,o=()=>{if(!("serviceWorker"in navigator))return console.error("No service worker");navigator.serviceWorker.getRegistration().then((n=>{n?n.showNotification(e,{body:t,icon:i}):new Notification(e,{body:t,icon:i})}))};if(!("Notification"in window))return console.error("No notification support");"granted"===Notification.permission?o():"denied"!==Notification.permission&&Notification.requestPermission().then((e=>"granted"===e&&o()))},u=(e,t="negative",n=5e3)=>o["a"].create({type:t,message:e,timeout:n}),s=e=>i["a"].create({message:e,title:"Confirmation",dark:r["a"].isActive,preventClose:!0,cancel:!0}),d=(e,t)=>i["a"].create({title:e,message:t,dark:r["a"].isActive,persistent:!0,ok:!1,progress:{spinner:a["a"],color:"primary"}})},b9a2:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));n("ddb0");var r=n("9482"),i=n("cfbf"),o=n("2166"),a=n("9944");const c=[{group:"packet",field:"prefix",title:"Prefix",header:!0,required:!0,size:2,format:e=>Object(o["d"])(Object(o["b"])(e)),display:e=>e,formatCmd:e=>Object(o["b"])(Object(o["a"])(r["a"].prefix.command))},{group:"packet",field:"size",title:"Size",header:!0,required:!0,chartable:!0,unit:"Bytes",size:1,format:e=>Object(o["g"])(Object(o["b"])(e)),display:e=>Object(o["c"])(e),formatCmd:e=>Object(o["b"])(Object(o["h"])(e.length/2,2))},{group:"packet",field:"unitID",title:"Unit ID",header:!0,required:!0,size:4,format:e=>Object(o["g"])(Object(o["b"])(e)),display:e=>e,formatCmd:e=>Object(o["b"])(Object(o["h"])(e,8))},{group:"packet.datetime",field:"sendDatetime",title:"Send Datetime",header:!0,required:!0,chartable:!0,size:7,format:e=>Number(Object(i["a"])(Object(a["i"])(e),"YYMMDDHHmmss0d").unix()),display:e=>i["a"].unix(e).format("ddd, DD-MM-YY HH:mm:ss"),formatCmd:e=>Object(a["a"])(i["a"].unix(e).format("YYMMDDHHmmss0d"))}],u=[...c,{group:"command",field:"code",title:"Code",header:!0,required:!0,size:1,format:e=>Object(o["g"])(e),display:e=>e,formatCmd:e=>Object(o["b"])(Object(o["h"])(e,2))},{group:"command",field:"subCode",title:"Sub Code",header:!0,required:!0,size:1,format:e=>Object(o["g"])(e),display:e=>e,formatCmd:e=>Object(o["b"])(Object(o["h"])(e,2))}]},cfbf:function(e,t,n){"use strict";const r=n("5a0c"),i=n("d772"),o=n("4208"),a=n("0ecf"),c=n("1953"),u=n("f906");r.extend(u),r.extend(i),r.extend(o),r.extend(a),r.extend(c),t["a"]=r},fd30:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return s}));n("13d5"),n("ddb0");const r=[{name:"VCU_NET_SOFT_RESET",bit:0,group:"VCU"},{name:"VCU_NET_HARD_RESET",bit:1,group:"VCU"},{name:"VCU_REMOTE_MISSING",bit:2,group:"VCU"},{name:"VCU_BIKE_FALLEN",bit:3,group:"VCU"},{name:"VCU_BIKE_MOVED",bit:4,group:"VCU"},{name:"BMS_DISCHARGE_OVER_CURRENT",bit:30,group:"BMS"},{name:"BMS_CHARGE_OVER_CURRENT",bit:31,group:"BMS"},{name:"BMS_SHORT_CIRCUIT",bit:32,group:"BMS"},{name:"BMS_DISCHARGE_OVER_TEMPERATURE",bit:33,group:"BMS"},{name:"BMS_DISCHARGE_UNDER_TEMPERATURE",bit:34,group:"BMS"},{name:"BMS_CHARGE_OVER_TEMPERATURE",bit:35,group:"BMS"},{name:"BMS_CHARGE_UNDER_TEMPERATURE",bit:36,group:"BMS"},{name:"BMS_UNDER_VOLTAGE",bit:37,group:"BMS"},{name:"BMS_OVER_VOLTAGE",bit:38,group:"BMS"},{name:"BMS_OVER_DISCHARGE_CAPACITY",bit:39,group:"BMS"},{name:"BMS_UNBALANCE",bit:40,group:"BMS"},{name:"BMS_SYSTEM_FAILURE",bit:41,group:"BMS"},{name:"BMS_WARNING_OVER_CURRENT",bit:42,group:"BMS"},{name:"BMS_WARNING_OVER_TEMPERATURE",bit:43,group:"BMS"},{name:"BMS_WARNING_UNDER_VOLTAGE",bit:44,group:"BMS"},{name:"BMS_WARNING_UNBALANCE",bit:45,group:"BMS"}];var i=n("2ef0"),o=n("cfbf");const a=n("da5a"),c=(e,t)=>1&a.fromNumber(e,1).shiftRight(t),u=e=>r.filter((({bit:t})=>c(e.val,t))).map((({name:e})=>e)),s=e=>Object(i["groupBy"])(e.reduce(((e,{eventsGroup:t,logDatetime:n})=>e.concat(...r.filter((({bit:e})=>c(t.val,e))).map((({name:e})=>({time:o["a"].unix(n.val).format("HH:mm:ss"),name:e}))))),[]),"name")}});