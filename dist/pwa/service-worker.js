if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return c[e]||(n=new Promise(async n=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=n}else importScripts(e),n()})),n.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},n=(n,c)=>{Promise.all(n.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(n)};self.define=(n,i,f)=>{c[n]||(c[n]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+n.slice(1)};return Promise.all(i.map(n=>{switch(n){case"exports":return c;case"module":return r;default:return e(n)}})).then(e=>{const n=f(...e);return c.default||(c.default=n),c})}))}}define("./service-worker.js",["./workbox-17d1bea3"],(function(e){"use strict";e.setCacheNameDetails({prefix:"gen-tracker"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/app.0e433876.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/vendor.35507dec.css",revision:"cef14712aec77aee21544044eccf3a5d"},{url:"favicon.ico",revision:"e93fbedf2457667d0ad4f6ed012def40"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4ad3ff04.woff",revision:"57d7c5f1564284b8704b641ecb899e01"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.7a292951.woff2",revision:"7df112be03585591874096e3254cdf34"},{url:"icons/apple-icon-120x120.png",revision:"2c5e4f92436cbb09e775acefbd4e5737"},{url:"icons/apple-icon-152x152.png",revision:"059b8976c03f2b818f02a7412e44f720"},{url:"icons/apple-icon-167x167.png",revision:"13a64b1b0930abfb608729c7d838c34f"},{url:"icons/apple-icon-180x180.png",revision:"874fd7000d5dc8e5c319247b1a52cc3a"},{url:"icons/apple-launch-1125x2436.png",revision:"969ad7689e4a687352a33f2fe014573a"},{url:"icons/apple-launch-1242x2208.png",revision:"59f7ce3bde7bdf7bb371349a65f6690c"},{url:"icons/apple-launch-1242x2688.png",revision:"d47df111281ffe7c2f053d62e5b492e4"},{url:"icons/apple-launch-1536x2048.png",revision:"3c174c8c64b11d7d8ed3c4bf0f74ded5"},{url:"icons/apple-launch-1668x2224.png",revision:"e2c0924b5537f1eb1e306d763be77045"},{url:"icons/apple-launch-1668x2388.png",revision:"a088625e5118653aa0fa3d954d24c578"},{url:"icons/apple-launch-2048x2732.png",revision:"5e97cce3b793c3328897a0d6805ef657"},{url:"icons/apple-launch-640x1136.png",revision:"805d405a0754ee229901becbd98f1ab9"},{url:"icons/apple-launch-750x1334.png",revision:"2388ab4a0e692cb47608101afe9518c5"},{url:"icons/apple-launch-828x1792.png",revision:"288d0d02fb45072f4ea1ffdd33a01014"},{url:"icons/favicon-128x128.png",revision:"b3f5cea2171bb86284d0f4f38b5afd29"},{url:"icons/favicon-16x16.png",revision:"8ec3a6fd37b7bed1f4ffeaabddd27464"},{url:"icons/favicon-32x32.png",revision:"a42d2bb5bda62d71ed5b5e4c79b6967b"},{url:"icons/favicon-96x96.png",revision:"95efede26cf7cad6d0dd8979e7925210"},{url:"icons/icon-128x128.png",revision:"b3f5cea2171bb86284d0f4f38b5afd29"},{url:"icons/icon-192x192.png",revision:"cce8050ec1d5c395a0a972e5c1313afd"},{url:"icons/icon-256x256.png",revision:"4a64e7d9eba7038dcdd5faf423f558de"},{url:"icons/icon-384x384.png",revision:"154d7c352e3607f76153b1bdc01644cb"},{url:"icons/icon-512x512.png",revision:"a3fa4ec2916de9f2d478b1f32fcf1301"},{url:"icons/ms-icon-144x144.png",revision:"4ba5616dc7c8b55d328ab85177ae9f60"},{url:"icons/safari-pinned-tab.svg",revision:"20018e2a40a8bf324bd6b72492ea5e60"},{url:"index.html",revision:"897430448328bfa1f11aaa7ef523af4b"},{url:"js/2.ac310ae7.js",revision:"4365530b389b752bc3ac5e913e5bb84e"},{url:"js/3.279e9439.js",revision:"8831dd47b7ce66319100d70c9aaf1c1c"},{url:"js/4.7e655a05.js",revision:"b45cf0eed3f80f1fa135d499ba4a03a9"},{url:"js/app.f77a0fa8.js",revision:"444005f5e8ada060794beb4f1871560e"},{url:"js/vendor.075e2ff6.js",revision:"f439a87eac6ba639a283003e750d655b"},{url:"manifest.json",revision:"3b173563d0bf8853aa69d19efe820cd9"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
