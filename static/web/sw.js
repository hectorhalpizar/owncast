if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let t={};const r=e=>c(e,a),f={module:{uri:a},exports:t,require:r};i[a]=Promise.all(s.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-cfcbb1a0"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1031.a97ac7d5947ca894.js",revision:"a97ac7d5947ca894"},{url:"/_next/static/chunks/1053.adb29a47c34b267a.js",revision:"adb29a47c34b267a"},{url:"/_next/static/chunks/1071.a77505a640429fb1.js",revision:"a77505a640429fb1"},{url:"/_next/static/chunks/1084.8bd09a422bf924f1.js",revision:"8bd09a422bf924f1"},{url:"/_next/static/chunks/1115-3cc893267bfc23c9.js",revision:"3cc893267bfc23c9"},{url:"/_next/static/chunks/1117-9ad7734a1a33285f.js",revision:"9ad7734a1a33285f"},{url:"/_next/static/chunks/112.495e704b740805e0.js",revision:"495e704b740805e0"},{url:"/_next/static/chunks/1183-aa425286604b823d.js",revision:"aa425286604b823d"},{url:"/_next/static/chunks/1287-49be23dcd0f9908a.js",revision:"49be23dcd0f9908a"},{url:"/_next/static/chunks/1390.f5747dcb0964940e.js",revision:"f5747dcb0964940e"},{url:"/_next/static/chunks/1429.eaba5a71af1454d2.js",revision:"eaba5a71af1454d2"},{url:"/_next/static/chunks/1446.80225a10401347d7.js",revision:"80225a10401347d7"},{url:"/_next/static/chunks/1469.d9e463593fe54fb9.js",revision:"d9e463593fe54fb9"},{url:"/_next/static/chunks/1506.d3d0f3bd814a6460.js",revision:"d3d0f3bd814a6460"},{url:"/_next/static/chunks/1570.4bca873f6146d35f.js",revision:"4bca873f6146d35f"},{url:"/_next/static/chunks/1616-a63e78bce078fa50.js",revision:"a63e78bce078fa50"},{url:"/_next/static/chunks/1639.a69f56d8e2858f44.js",revision:"a69f56d8e2858f44"},{url:"/_next/static/chunks/1650.06a77268379b94b2.js",revision:"06a77268379b94b2"},{url:"/_next/static/chunks/1660.76cc05d00e5034ad.js",revision:"76cc05d00e5034ad"},{url:"/_next/static/chunks/1682.1cc436d76541e373.js",revision:"1cc436d76541e373"},{url:"/_next/static/chunks/1706.cc34054ebca747bc.js",revision:"cc34054ebca747bc"},{url:"/_next/static/chunks/1750-ad2005b96d9f1a35.js",revision:"ad2005b96d9f1a35"},{url:"/_next/static/chunks/177.3359462c66b636ba.js",revision:"3359462c66b636ba"},{url:"/_next/static/chunks/1770.ffd38031b937c10a.js",revision:"ffd38031b937c10a"},{url:"/_next/static/chunks/1789.7b256e8721f99673.js",revision:"7b256e8721f99673"},{url:"/_next/static/chunks/1873.ad239337a916524b.js",revision:"ad239337a916524b"},{url:"/_next/static/chunks/1914.14eca754101c7263.js",revision:"14eca754101c7263"},{url:"/_next/static/chunks/1920.69952d11b23d14f9.js",revision:"69952d11b23d14f9"},{url:"/_next/static/chunks/2029.150570ca467c0f7a.js",revision:"150570ca467c0f7a"},{url:"/_next/static/chunks/2040.2b48b43e5c9bbd94.js",revision:"2b48b43e5c9bbd94"},{url:"/_next/static/chunks/2119.56737871073263a3.js",revision:"56737871073263a3"},{url:"/_next/static/chunks/2130.558652d85a21dd04.js",revision:"558652d85a21dd04"},{url:"/_next/static/chunks/2136.d79aae5ef8b027c6.js",revision:"d79aae5ef8b027c6"},{url:"/_next/static/chunks/2154-ab924128a7e76a7e.js",revision:"ab924128a7e76a7e"},{url:"/_next/static/chunks/2155.92848022039e1b03.js",revision:"92848022039e1b03"},{url:"/_next/static/chunks/2200.984fffa57a9d939c.js",revision:"984fffa57a9d939c"},{url:"/_next/static/chunks/228.bcd421992bab4a0b.js",revision:"bcd421992bab4a0b"},{url:"/_next/static/chunks/2295.52acccadbd8a39f3.js",revision:"52acccadbd8a39f3"},{url:"/_next/static/chunks/2306.e3ecc3934cd527cd.js",revision:"e3ecc3934cd527cd"},{url:"/_next/static/chunks/2314.ce3a0e1828ad2d06.js",revision:"ce3a0e1828ad2d06"},{url:"/_next/static/chunks/2386.4ea76c10cc41063a.js",revision:"4ea76c10cc41063a"},{url:"/_next/static/chunks/2391.ae3f69fddebd77ec.js",revision:"ae3f69fddebd77ec"},{url:"/_next/static/chunks/2406.04743ed8b26fbb4f.js",revision:"04743ed8b26fbb4f"},{url:"/_next/static/chunks/2502-9845296641279760.js",revision:"9845296641279760"},{url:"/_next/static/chunks/2542.82fcb9f7206aadce.js",revision:"82fcb9f7206aadce"},{url:"/_next/static/chunks/2551.f01fe1c31557ca2d.js",revision:"f01fe1c31557ca2d"},{url:"/_next/static/chunks/2554.a1d1381079cf74f3.js",revision:"a1d1381079cf74f3"},{url:"/_next/static/chunks/2572.3b029749032721bc.js",revision:"3b029749032721bc"},{url:"/_next/static/chunks/2602.3b2af210da49468a.js",revision:"3b2af210da49468a"},{url:"/_next/static/chunks/2647.0c48f4ef405f6522.js",revision:"0c48f4ef405f6522"},{url:"/_next/static/chunks/2657-754a4f3814f532c3.js",revision:"754a4f3814f532c3"},{url:"/_next/static/chunks/2675.3af9b237ab623dbf.js",revision:"3af9b237ab623dbf"},{url:"/_next/static/chunks/2850.c40dc7deb016ee73.js",revision:"c40dc7deb016ee73"},{url:"/_next/static/chunks/2862.24c1386c74b74de0.js",revision:"24c1386c74b74de0"},{url:"/_next/static/chunks/2870.4fbc41352f764a3f.js",revision:"4fbc41352f764a3f"},{url:"/_next/static/chunks/2949-1e1ec177c80e0850.js",revision:"1e1ec177c80e0850"},{url:"/_next/static/chunks/297-f3323e7519abfac5.js",revision:"f3323e7519abfac5"},{url:"/_next/static/chunks/3033.5505256ec6976f9c.js",revision:"5505256ec6976f9c"},{url:"/_next/static/chunks/305.89841c282a61cef8.js",revision:"89841c282a61cef8"},{url:"/_next/static/chunks/3061.e43e8f7aa492e5b9.js",revision:"e43e8f7aa492e5b9"},{url:"/_next/static/chunks/310.4771c1bb0b1937cc.js",revision:"4771c1bb0b1937cc"},{url:"/_next/static/chunks/3114.66f6225b8d339ef9.js",revision:"66f6225b8d339ef9"},{url:"/_next/static/chunks/3181.53bbf187ed91c83a.js",revision:"53bbf187ed91c83a"},{url:"/_next/static/chunks/3193.59107ecddef79789.js",revision:"59107ecddef79789"},{url:"/_next/static/chunks/3203.cbe74052c374223c.js",revision:"cbe74052c374223c"},{url:"/_next/static/chunks/3236.8a35791797e51ed9.js",revision:"8a35791797e51ed9"},{url:"/_next/static/chunks/3247-3bcf37888a628177.js",revision:"3bcf37888a628177"},{url:"/_next/static/chunks/3283.0c55fd8a1a0f7c80.js",revision:"0c55fd8a1a0f7c80"},{url:"/_next/static/chunks/3314.141e2dca41748fac.js",revision:"141e2dca41748fac"},{url:"/_next/static/chunks/346-801ea0d05946b099.js",revision:"801ea0d05946b099"},{url:"/_next/static/chunks/3465.77dee7ec6cc7e947.js",revision:"77dee7ec6cc7e947"},{url:"/_next/static/chunks/3482.f8558073446e8bd9.js",revision:"f8558073446e8bd9"},{url:"/_next/static/chunks/3509.b3d99b2815ff8ca5.js",revision:"b3d99b2815ff8ca5"},{url:"/_next/static/chunks/3519.2a44d25a006ebc05.js",revision:"2a44d25a006ebc05"},{url:"/_next/static/chunks/3530-ae9aa19058b4eca5.js",revision:"ae9aa19058b4eca5"},{url:"/_next/static/chunks/3535.1f80d0f04163ad2c.js",revision:"1f80d0f04163ad2c"},{url:"/_next/static/chunks/3594.a535e97b9a9d1080.js",revision:"a535e97b9a9d1080"},{url:"/_next/static/chunks/3626.0f00551f8575fe8d.js",revision:"0f00551f8575fe8d"},{url:"/_next/static/chunks/3632.ef4bed423b91344d.js",revision:"ef4bed423b91344d"},{url:"/_next/static/chunks/3657-d4be59f63c85e718.js",revision:"d4be59f63c85e718"},{url:"/_next/static/chunks/370.0a341b2da3b6a0db.js",revision:"0a341b2da3b6a0db"},{url:"/_next/static/chunks/3732.87d81c39b4447a61.js",revision:"87d81c39b4447a61"},{url:"/_next/static/chunks/3747.36e9ea225d543396.js",revision:"36e9ea225d543396"},{url:"/_next/static/chunks/3883.5e03e3a398cf3720.js",revision:"5e03e3a398cf3720"},{url:"/_next/static/chunks/3889.c6efe2b839004628.js",revision:"c6efe2b839004628"},{url:"/_next/static/chunks/3989.2431f9d1a616d8d2.js",revision:"2431f9d1a616d8d2"},{url:"/_next/static/chunks/3993.45bba5349434ad56.js",revision:"45bba5349434ad56"},{url:"/_next/static/chunks/402.3f3e56dcc798bafe.js",revision:"3f3e56dcc798bafe"},{url:"/_next/static/chunks/4144.d7264e550bf9aa39.js",revision:"d7264e550bf9aa39"},{url:"/_next/static/chunks/4163.0e0c9ed3e1aa5112.js",revision:"0e0c9ed3e1aa5112"},{url:"/_next/static/chunks/4212.15885059e8078ec8.js",revision:"15885059e8078ec8"},{url:"/_next/static/chunks/4259.4ad737ece07732bd.js",revision:"4ad737ece07732bd"},{url:"/_next/static/chunks/4262.007de8e037824de7.js",revision:"007de8e037824de7"},{url:"/_next/static/chunks/4293.7b5c769ac9f34b69.js",revision:"7b5c769ac9f34b69"},{url:"/_next/static/chunks/4316-98f4bed5d3f6042f.js",revision:"98f4bed5d3f6042f"},{url:"/_next/static/chunks/4323.9603162e5cba433d.js",revision:"9603162e5cba433d"},{url:"/_next/static/chunks/443-ae979a7de394e164.js",revision:"ae979a7de394e164"},{url:"/_next/static/chunks/4439.7f32805042ce478e.js",revision:"7f32805042ce478e"},{url:"/_next/static/chunks/449-231c2f62a8600913.js",revision:"231c2f62a8600913"},{url:"/_next/static/chunks/4511.949892f0fb796cb1.js",revision:"949892f0fb796cb1"},{url:"/_next/static/chunks/46.19b30be647546336.js",revision:"19b30be647546336"},{url:"/_next/static/chunks/4619.2e56d2dadd31044e.js",revision:"2e56d2dadd31044e"},{url:"/_next/static/chunks/4793.072bc0cc2fd492b9.js",revision:"072bc0cc2fd492b9"},{url:"/_next/static/chunks/4796.c545e50f2ff935e7.js",revision:"c545e50f2ff935e7"},{url:"/_next/static/chunks/4812.8df1cf6b1556ba3d.js",revision:"8df1cf6b1556ba3d"},{url:"/_next/static/chunks/4817.adfc474aeeabd73e.js",revision:"adfc474aeeabd73e"},{url:"/_next/static/chunks/4879.2d2fd34b79f431f5.js",revision:"2d2fd34b79f431f5"},{url:"/_next/static/chunks/4909.0453a210de895b5d.js",revision:"0453a210de895b5d"},{url:"/_next/static/chunks/4928.080a0fdd58299219.js",revision:"080a0fdd58299219"},{url:"/_next/static/chunks/4955.1468e8043f64b60d.js",revision:"1468e8043f64b60d"},{url:"/_next/static/chunks/4997.5f5aa516b3da7371.js",revision:"5f5aa516b3da7371"},{url:"/_next/static/chunks/4ad82c5e-0edd4551f1ff2509.js",revision:"0edd4551f1ff2509"},{url:"/_next/static/chunks/5042.8721a75f6fc0841d.js",revision:"8721a75f6fc0841d"},{url:"/_next/static/chunks/5072.40d762de2f02a1f3.js",revision:"40d762de2f02a1f3"},{url:"/_next/static/chunks/5134.a121d8d21d1c9247.js",revision:"a121d8d21d1c9247"},{url:"/_next/static/chunks/518.0603d0bf63dc2778.js",revision:"0603d0bf63dc2778"},{url:"/_next/static/chunks/5180-d8b6a39351d895d5.js",revision:"d8b6a39351d895d5"},{url:"/_next/static/chunks/520.9ac879d0b9da7d2b.js",revision:"9ac879d0b9da7d2b"},{url:"/_next/static/chunks/5211.f9b6e158f37adef7.js",revision:"f9b6e158f37adef7"},{url:"/_next/static/chunks/5223-8efec1e0ecde0d75.js",revision:"8efec1e0ecde0d75"},{url:"/_next/static/chunks/5308-9091a638fab75544.js",revision:"9091a638fab75544"},{url:"/_next/static/chunks/5342.2e56029326c1b7da.js",revision:"2e56029326c1b7da"},{url:"/_next/static/chunks/5372.156686248b75341d.js",revision:"156686248b75341d"},{url:"/_next/static/chunks/5384.3f671646f5dba576.js",revision:"3f671646f5dba576"},{url:"/_next/static/chunks/5450.7e6af9177ca2f175.js",revision:"7e6af9177ca2f175"},{url:"/_next/static/chunks/5584.0e6dc2d2709e6782.js",revision:"0e6dc2d2709e6782"},{url:"/_next/static/chunks/5648.517b7d5b08dc25e0.js",revision:"517b7d5b08dc25e0"},{url:"/_next/static/chunks/565.b94d1d7941154f15.js",revision:"b94d1d7941154f15"},{url:"/_next/static/chunks/5746.d9fb9044901271b0.js",revision:"d9fb9044901271b0"},{url:"/_next/static/chunks/5753.e3f8077ac4a7ad1b.js",revision:"e3f8077ac4a7ad1b"},{url:"/_next/static/chunks/5775.195051b6b1a6a37e.js",revision:"195051b6b1a6a37e"},{url:"/_next/static/chunks/5815.a2728b3992c996c3.js",revision:"a2728b3992c996c3"},{url:"/_next/static/chunks/5819.a59443e62006c745.js",revision:"a59443e62006c745"},{url:"/_next/static/chunks/5867.119ec409fce07e8c.js",revision:"119ec409fce07e8c"},{url:"/_next/static/chunks/5879.e0ef43b09c377987.js",revision:"e0ef43b09c377987"},{url:"/_next/static/chunks/5888-ef1bfbc45cee7a35.js",revision:"ef1bfbc45cee7a35"},{url:"/_next/static/chunks/5889-333643a4598c48f6.js",revision:"333643a4598c48f6"},{url:"/_next/static/chunks/5963.d9a6edc498c878a7.js",revision:"d9a6edc498c878a7"},{url:"/_next/static/chunks/604.c2cdee2ddb0a10ab.js",revision:"c2cdee2ddb0a10ab"},{url:"/_next/static/chunks/6062.8312a369a57e3fc3.js",revision:"8312a369a57e3fc3"},{url:"/_next/static/chunks/6092.0734f1cd002634a4.js",revision:"0734f1cd002634a4"},{url:"/_next/static/chunks/6121.07bf76517bbc2dd2.js",revision:"07bf76517bbc2dd2"},{url:"/_next/static/chunks/6166-012dabcfff92c832.js",revision:"012dabcfff92c832"},{url:"/_next/static/chunks/6167-befd1cf6abf01a92.js",revision:"befd1cf6abf01a92"},{url:"/_next/static/chunks/617.359b421db498d43e.js",revision:"359b421db498d43e"},{url:"/_next/static/chunks/6179-cce56c214647e403.js",revision:"cce56c214647e403"},{url:"/_next/static/chunks/6242-cc9e3c83344931d6.js",revision:"cc9e3c83344931d6"},{url:"/_next/static/chunks/6327.7e444c0014cae9af.js",revision:"7e444c0014cae9af"},{url:"/_next/static/chunks/6356-c5443fab6eee53fa.js",revision:"c5443fab6eee53fa"},{url:"/_next/static/chunks/6395.6e51d035839ff4ba.js",revision:"6e51d035839ff4ba"},{url:"/_next/static/chunks/6443.a1c9257ad6c47d80.js",revision:"a1c9257ad6c47d80"},{url:"/_next/static/chunks/6471.8d3d51f0a565139c.js",revision:"8d3d51f0a565139c"},{url:"/_next/static/chunks/6665.3b98dde37384ff53.js",revision:"3b98dde37384ff53"},{url:"/_next/static/chunks/6681.6c275564ea00028b.js",revision:"6c275564ea00028b"},{url:"/_next/static/chunks/6692.e42dfb241035b482.js",revision:"e42dfb241035b482"},{url:"/_next/static/chunks/673.5310afdb2da5faad.js",revision:"5310afdb2da5faad"},{url:"/_next/static/chunks/6732.84304dd7b14dbeb2.js",revision:"84304dd7b14dbeb2"},{url:"/_next/static/chunks/6766.a21c43db7429b9fb.js",revision:"a21c43db7429b9fb"},{url:"/_next/static/chunks/6774.5c9b63b6ec7ab86f.js",revision:"5c9b63b6ec7ab86f"},{url:"/_next/static/chunks/6864.bc0dc3ad91b89d11.js",revision:"bc0dc3ad91b89d11"},{url:"/_next/static/chunks/6991.be0212d2d320173c.js",revision:"be0212d2d320173c"},{url:"/_next/static/chunks/7001.5485d8645b90f0e1.js",revision:"5485d8645b90f0e1"},{url:"/_next/static/chunks/7025.2f30b2f7a18bbb93.js",revision:"2f30b2f7a18bbb93"},{url:"/_next/static/chunks/7042-dad877ca6d940739.js",revision:"dad877ca6d940739"},{url:"/_next/static/chunks/7043-1270a1c9c55c2e6b.js",revision:"1270a1c9c55c2e6b"},{url:"/_next/static/chunks/7070-2f4555358dc70d8d.js",revision:"2f4555358dc70d8d"},{url:"/_next/static/chunks/7213.d8a3150d04a604bc.js",revision:"d8a3150d04a604bc"},{url:"/_next/static/chunks/7268.59e371f49c71ef57.js",revision:"59e371f49c71ef57"},{url:"/_next/static/chunks/7315.3ca5dd95b74450ea.js",revision:"3ca5dd95b74450ea"},{url:"/_next/static/chunks/7365.72718ce4ca51b05b.js",revision:"72718ce4ca51b05b"},{url:"/_next/static/chunks/7370.20336fca6f462b00.js",revision:"20336fca6f462b00"},{url:"/_next/static/chunks/7421.6e55431a3f7b261d.js",revision:"6e55431a3f7b261d"},{url:"/_next/static/chunks/7475.0017763814cf5003.js",revision:"0017763814cf5003"},{url:"/_next/static/chunks/7525.f7c93eb403c6c9c0.js",revision:"f7c93eb403c6c9c0"},{url:"/_next/static/chunks/7528-895672430c4905f2.js",revision:"895672430c4905f2"},{url:"/_next/static/chunks/758.b8b4c9d9c7352c21.js",revision:"b8b4c9d9c7352c21"},{url:"/_next/static/chunks/7590.5339f77c17d3d934.js",revision:"5339f77c17d3d934"},{url:"/_next/static/chunks/75fc9c18.a8c9805be41684e2.js",revision:"a8c9805be41684e2"},{url:"/_next/static/chunks/7601.1bdb63794564ce90.js",revision:"1bdb63794564ce90"},{url:"/_next/static/chunks/7609-6c2ce6e6b07a80ec.js",revision:"6c2ce6e6b07a80ec"},{url:"/_next/static/chunks/7625.3a2f34330b648239.js",revision:"3a2f34330b648239"},{url:"/_next/static/chunks/7663.86973451931fd69d.js",revision:"86973451931fd69d"},{url:"/_next/static/chunks/7741.7030bf5313e605c6.js",revision:"7030bf5313e605c6"},{url:"/_next/static/chunks/7762.97de838d8f13b395.js",revision:"97de838d8f13b395"},{url:"/_next/static/chunks/7786-bbf2de5c978e89ab.js",revision:"bbf2de5c978e89ab"},{url:"/_next/static/chunks/7849.faee46a6d273f530.js",revision:"faee46a6d273f530"},{url:"/_next/static/chunks/7884-b5ec5ed2c40fb490.js",revision:"b5ec5ed2c40fb490"},{url:"/_next/static/chunks/7892.50ab9965519db2c2.js",revision:"50ab9965519db2c2"},{url:"/_next/static/chunks/7917.5c7bddf6daba650e.js",revision:"5c7bddf6daba650e"},{url:"/_next/static/chunks/795.ebb8cda6df17690f.js",revision:"ebb8cda6df17690f"},{url:"/_next/static/chunks/7988.696122313ba244a4.js",revision:"696122313ba244a4"},{url:"/_next/static/chunks/8007.93977d4debda4434.js",revision:"93977d4debda4434"},{url:"/_next/static/chunks/802.759f4110e1be85d3.js",revision:"759f4110e1be85d3"},{url:"/_next/static/chunks/8029.aa6c08cba91dd332.js",revision:"aa6c08cba91dd332"},{url:"/_next/static/chunks/8076.09506e03cdfc0a08.js",revision:"09506e03cdfc0a08"},{url:"/_next/static/chunks/8082-29434f79b65d9cc6.js",revision:"29434f79b65d9cc6"},{url:"/_next/static/chunks/8142.c9f248d0f814e8b8.js",revision:"c9f248d0f814e8b8"},{url:"/_next/static/chunks/8171.da41f4d3690366fc.js",revision:"da41f4d3690366fc"},{url:"/_next/static/chunks/8173.4316459855995f41.js",revision:"4316459855995f41"},{url:"/_next/static/chunks/8253.5acaa79726badce3.js",revision:"5acaa79726badce3"},{url:"/_next/static/chunks/8283.56888ee351ada4c6.js",revision:"56888ee351ada4c6"},{url:"/_next/static/chunks/83-e209a407ef1abab3.js",revision:"e209a407ef1abab3"},{url:"/_next/static/chunks/831.9c6141a3b4416ec5.js",revision:"9c6141a3b4416ec5"},{url:"/_next/static/chunks/8393.4276c63baa000f93.js",revision:"4276c63baa000f93"},{url:"/_next/static/chunks/8413.ddca7eaf1d188e76.js",revision:"ddca7eaf1d188e76"},{url:"/_next/static/chunks/8468.9aa93610d4b2f568.js",revision:"9aa93610d4b2f568"},{url:"/_next/static/chunks/8527.dc5deaa5998b33d9.js",revision:"dc5deaa5998b33d9"},{url:"/_next/static/chunks/8561.e0ae2c126e26850c.js",revision:"e0ae2c126e26850c"},{url:"/_next/static/chunks/8586.bc540419efbb9328.js",revision:"bc540419efbb9328"},{url:"/_next/static/chunks/8661.fde903b1b56d6a1b.js",revision:"fde903b1b56d6a1b"},{url:"/_next/static/chunks/870.c1277ad0599a1203.js",revision:"c1277ad0599a1203"},{url:"/_next/static/chunks/8716.cbb13108a00c50e0.js",revision:"cbb13108a00c50e0"},{url:"/_next/static/chunks/8770.44d2f8c73be18acf.js",revision:"44d2f8c73be18acf"},{url:"/_next/static/chunks/8813.02694305feb42871.js",revision:"02694305feb42871"},{url:"/_next/static/chunks/8818.164f8ceb284510ed.js",revision:"164f8ceb284510ed"},{url:"/_next/static/chunks/8836.3763cfc4ce606e37.js",revision:"3763cfc4ce606e37"},{url:"/_next/static/chunks/885-b54e06a66af6d2bb.js",revision:"b54e06a66af6d2bb"},{url:"/_next/static/chunks/889.64194b207c6ed4a5.js",revision:"64194b207c6ed4a5"},{url:"/_next/static/chunks/8915.47932f86417996a7.js",revision:"47932f86417996a7"},{url:"/_next/static/chunks/8987.a957618eeceed203.js",revision:"a957618eeceed203"},{url:"/_next/static/chunks/9036.c9b8dc198096982d.js",revision:"c9b8dc198096982d"},{url:"/_next/static/chunks/9069.c284b555f72225d7.js",revision:"c284b555f72225d7"},{url:"/_next/static/chunks/9071.8c9b70f05e2417d6.js",revision:"8c9b70f05e2417d6"},{url:"/_next/static/chunks/9121.b49c2c698eb6b977.js",revision:"b49c2c698eb6b977"},{url:"/_next/static/chunks/9155.c8b958eb1c154d33.js",revision:"c8b958eb1c154d33"},{url:"/_next/static/chunks/9232.61d440e4c3b2b427.js",revision:"61d440e4c3b2b427"},{url:"/_next/static/chunks/9296.553274ed12ae2963.js",revision:"553274ed12ae2963"},{url:"/_next/static/chunks/9307-24717389bb75d97f.js",revision:"24717389bb75d97f"},{url:"/_next/static/chunks/9333.4d834ef2dc927834.js",revision:"4d834ef2dc927834"},{url:"/_next/static/chunks/944-372b5eef04ea5030.js",revision:"372b5eef04ea5030"},{url:"/_next/static/chunks/9498.aeebb41032b1674d.js",revision:"aeebb41032b1674d"},{url:"/_next/static/chunks/9516.0132a0c208fc33f1.js",revision:"0132a0c208fc33f1"},{url:"/_next/static/chunks/9532-0e5d809462580224.js",revision:"0e5d809462580224"},{url:"/_next/static/chunks/9558.9bf5494ebdf03040.js",revision:"9bf5494ebdf03040"},{url:"/_next/static/chunks/9587.cd404daa8a02ca05.js",revision:"cd404daa8a02ca05"},{url:"/_next/static/chunks/9595.bab8afd961ca028d.js",revision:"bab8afd961ca028d"},{url:"/_next/static/chunks/9607.366af86ac9696739.js",revision:"366af86ac9696739"},{url:"/_next/static/chunks/9671.4bb3c3b79d5a1bb8.js",revision:"4bb3c3b79d5a1bb8"},{url:"/_next/static/chunks/9712.2c26e7a0ac94afc8.js",revision:"2c26e7a0ac94afc8"},{url:"/_next/static/chunks/9713.f1d5b41171c6487d.js",revision:"f1d5b41171c6487d"},{url:"/_next/static/chunks/9781.f87962a71d4ea1e0.js",revision:"f87962a71d4ea1e0"},{url:"/_next/static/chunks/9796-56b98b49ff4cd1a6.js",revision:"56b98b49ff4cd1a6"},{url:"/_next/static/chunks/9831.a090f5f3c082ad56.js",revision:"a090f5f3c082ad56"},{url:"/_next/static/chunks/9887.d5cc7cc4f6172491.js",revision:"d5cc7cc4f6172491"},{url:"/_next/static/chunks/9900.42769e95982726f5.js",revision:"42769e95982726f5"},{url:"/_next/static/chunks/9904-0489fa44bfbb8dfe.js",revision:"0489fa44bfbb8dfe"},{url:"/_next/static/chunks/9972.2718a68ae9d750c6.js",revision:"2718a68ae9d750c6"},{url:"/_next/static/chunks/cff3e69d-920d199a4cb08a5f.js",revision:"920d199a4cb08a5f"},{url:"/_next/static/chunks/d6e1aeb5-e220627ae34c8306.js",revision:"e220627ae34c8306"},{url:"/_next/static/chunks/ee8b1517-934790469ca49323.js",revision:"934790469ca49323"},{url:"/_next/static/chunks/framework-945b357d4a851f4b.js",revision:"945b357d4a851f4b"},{url:"/_next/static/chunks/main-c37479b55e61634b.js",revision:"c37479b55e61634b"},{url:"/_next/static/chunks/pages/_app-3ccba80bac70c569.js",revision:"3ccba80bac70c569"},{url:"/_next/static/chunks/pages/_error-6ddff449d199572c.js",revision:"6ddff449d199572c"},{url:"/_next/static/chunks/pages/embed/chat/readonly-c6f1f5dd06bb6eb9.js",revision:"c6f1f5dd06bb6eb9"},{url:"/_next/static/chunks/pages/embed/chat/readwrite-c47d0d0b9fa65b68.js",revision:"c47d0d0b9fa65b68"},{url:"/_next/static/chunks/pages/embed/video-9b93350a24877a99.js",revision:"9b93350a24877a99"},{url:"/_next/static/chunks/pages/index-104085ae54e4c5ea.js",revision:"104085ae54e4c5ea"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-8e55bc3720a97fd9.js",revision:"8e55bc3720a97fd9"},{url:"/_next/static/css/03bb3483e4cfa1b6.css",revision:"03bb3483e4cfa1b6"},{url:"/_next/static/css/0c70d116e6bcd329.css",revision:"0c70d116e6bcd329"},{url:"/_next/static/css/1f5fd3205098cc2c.css",revision:"1f5fd3205098cc2c"},{url:"/_next/static/css/22f76f542c0c1295.css",revision:"22f76f542c0c1295"},{url:"/_next/static/css/6d9d754b8167b619.css",revision:"6d9d754b8167b619"},{url:"/_next/static/css/79a332200ba0e826.css",revision:"79a332200ba0e826"},{url:"/_next/static/css/7c118fcc50a4ba29.css",revision:"7c118fcc50a4ba29"},{url:"/_next/static/css/7e0fea9a6c3abdcb.css",revision:"7e0fea9a6c3abdcb"},{url:"/_next/static/css/8841579222b5034b.css",revision:"8841579222b5034b"},{url:"/_next/static/css/91dee75f0f5d528b.css",revision:"91dee75f0f5d528b"},{url:"/_next/static/css/9ca4489da31a01c6.css",revision:"9ca4489da31a01c6"},{url:"/_next/static/css/a4eece00d7cccf69.css",revision:"a4eece00d7cccf69"},{url:"/_next/static/css/c1478bc9943d52ed.css",revision:"c1478bc9943d52ed"},{url:"/_next/static/css/d14f51de0d46d6eb.css",revision:"d14f51de0d46d6eb"},{url:"/_next/static/css/d29c5cd9368918c4.css",revision:"d29c5cd9368918c4"},{url:"/_next/static/css/ef3f4486f04adedc.css",revision:"ef3f4486f04adedc"},{url:"/_next/static/css/fa4ff817387ab552.css",revision:"fa4ff817387ab552"},{url:"/_next/static/jWSR6p1XharFoasChw282/_buildManifest.js",revision:"53dd7409b02a59d1a72c4df373bc4b8d"},{url:"/_next/static/jWSR6p1XharFoasChw282/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/airplay.c25573d0.svg",revision:"c25573d0"},{url:"/_next/static/media/inter-cyrillic-300-normal.7335a360.woff2",revision:"7335a360"},{url:"/_next/static/media/inter-cyrillic-300-normal.edcd2385.woff",revision:"edcd2385"},{url:"/_next/static/media/inter-cyrillic-400-normal.4cc6e28c.woff",revision:"4cc6e28c"},{url:"/_next/static/media/inter-cyrillic-400-normal.547767ef.woff2",revision:"547767ef"},{url:"/_next/static/media/inter-cyrillic-600-normal.8c69e1bb.woff2",revision:"8c69e1bb"},{url:"/_next/static/media/inter-cyrillic-600-normal.c0105440.woff",revision:"c0105440"},{url:"/_next/static/media/inter-cyrillic-800-normal.0e80493d.woff2",revision:"0e80493d"},{url:"/_next/static/media/inter-cyrillic-800-normal.9a8d829d.woff",revision:"9a8d829d"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.5df3b45f.woff2",revision:"5df3b45f"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.be7b9715.woff",revision:"be7b9715"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.2440d5f8.woff2",revision:"2440d5f8"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.6e13bad4.woff",revision:"6e13bad4"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.62fe61a7.woff",revision:"62fe61a7"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.dd95b020.woff2",revision:"dd95b020"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.1c9e8f72.woff2",revision:"1c9e8f72"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.bf337f41.woff",revision:"bf337f41"},{url:"/_next/static/media/inter-greek-300-normal.14123a0c.woff2",revision:"14123a0c"},{url:"/_next/static/media/inter-greek-300-normal.ec3d0adc.woff",revision:"ec3d0adc"},{url:"/_next/static/media/inter-greek-400-normal.573bacd1.woff2",revision:"573bacd1"},{url:"/_next/static/media/inter-greek-400-normal.d6adbb78.woff",revision:"d6adbb78"},{url:"/_next/static/media/inter-greek-600-normal.61c756cf.woff",revision:"61c756cf"},{url:"/_next/static/media/inter-greek-600-normal.ee808ffe.woff2",revision:"ee808ffe"},{url:"/_next/static/media/inter-greek-800-normal.fe474d33.woff2",revision:"fe474d33"},{url:"/_next/static/media/inter-greek-800-normal.fe668711.woff",revision:"fe668711"},{url:"/_next/static/media/inter-greek-ext-300-normal.7b467784.woff2",revision:"7b467784"},{url:"/_next/static/media/inter-greek-ext-300-normal.fb5ad981.woff",revision:"fb5ad981"},{url:"/_next/static/media/inter-greek-ext-400-normal.f196e968.woff",revision:"f196e968"},{url:"/_next/static/media/inter-greek-ext-400-normal.f8992900.woff2",revision:"f8992900"},{url:"/_next/static/media/inter-greek-ext-600-normal.a46b5cba.woff",revision:"a46b5cba"},{url:"/_next/static/media/inter-greek-ext-600-normal.d05f940f.woff2",revision:"d05f940f"},{url:"/_next/static/media/inter-greek-ext-800-normal.1b2bb72c.woff",revision:"1b2bb72c"},{url:"/_next/static/media/inter-greek-ext-800-normal.95d04d18.woff2",revision:"95d04d18"},{url:"/_next/static/media/inter-latin-300-normal.0a506d8e.woff2",revision:"0a506d8e"},{url:"/_next/static/media/inter-latin-300-normal.38608292.woff",revision:"38608292"},{url:"/_next/static/media/inter-latin-400-normal.360a94a9.woff2",revision:"360a94a9"},{url:"/_next/static/media/inter-latin-400-normal.38abad60.woff",revision:"38abad60"},{url:"/_next/static/media/inter-latin-600-normal.8ad7b5a9.woff",revision:"8ad7b5a9"},{url:"/_next/static/media/inter-latin-600-normal.efad9519.woff2",revision:"efad9519"},{url:"/_next/static/media/inter-latin-800-normal.ab3f402a.woff2",revision:"ab3f402a"},{url:"/_next/static/media/inter-latin-800-normal.d1597229.woff",revision:"d1597229"},{url:"/_next/static/media/inter-latin-ext-300-normal.3033d32d.woff2",revision:"3033d32d"},{url:"/_next/static/media/inter-latin-ext-300-normal.9eef1747.woff",revision:"9eef1747"},{url:"/_next/static/media/inter-latin-ext-400-normal.732723e2.woff2",revision:"732723e2"},{url:"/_next/static/media/inter-latin-ext-400-normal.d1f6a5a2.woff",revision:"d1f6a5a2"},{url:"/_next/static/media/inter-latin-ext-600-normal.43dc1cee.woff2",revision:"43dc1cee"},{url:"/_next/static/media/inter-latin-ext-600-normal.8756e10d.woff",revision:"8756e10d"},{url:"/_next/static/media/inter-latin-ext-800-normal.0d8f8dff.woff",revision:"0d8f8dff"},{url:"/_next/static/media/inter-latin-ext-800-normal.396ab648.woff2",revision:"396ab648"},{url:"/_next/static/media/inter-vietnamese-300-normal.ad9ef503.woff2",revision:"ad9ef503"},{url:"/_next/static/media/inter-vietnamese-300-normal.b4574483.woff",revision:"b4574483"},{url:"/_next/static/media/inter-vietnamese-400-normal.1411920a.woff",revision:"1411920a"},{url:"/_next/static/media/inter-vietnamese-400-normal.de4fc44f.woff2",revision:"de4fc44f"},{url:"/_next/static/media/inter-vietnamese-600-normal.8b0a74d0.woff",revision:"8b0a74d0"},{url:"/_next/static/media/inter-vietnamese-600-normal.9d518599.woff2",revision:"9d518599"},{url:"/_next/static/media/inter-vietnamese-800-normal.6d6c1e5d.woff",revision:"6d6c1e5d"},{url:"/_next/static/media/inter-vietnamese-800-normal.922627b4.woff2",revision:"922627b4"},{url:"/_next/static/media/poppins-latin-400-normal.916d3686.woff2",revision:"916d3686"},{url:"/_next/static/media/poppins-latin-400-normal.cbe785df.woff",revision:"cbe785df"},{url:"/_next/static/media/poppins-latin-600-normal.c070cf14.woff",revision:"c070cf14"},{url:"/_next/static/media/poppins-latin-600-normal.d8692086.woff2",revision:"d8692086"},{url:"/_next/static/media/poppins-latin-ext-400-normal.56cb5e9c.woff2",revision:"56cb5e9c"},{url:"/_next/static/media/poppins-latin-ext-400-normal.fbcaaafb.woff",revision:"fbcaaafb"},{url:"/_next/static/media/poppins-latin-ext-600-normal.33e72839.woff",revision:"33e72839"},{url:"/_next/static/media/poppins-latin-ext-600-normal.dd51f42e.woff2",revision:"dd51f42e"},{url:"/favicon.ico",revision:"2f3f8d056ba7cca2dafbdeb51b2d793c"},{url:"/fediverse-white.png",revision:"203a177d28810e5d9e35dd3478bd5d17"},{url:"/fonts/inter/Inter-Black.woff",revision:"d0b121f3a9d3d88afdfd6902d31ee9a0"},{url:"/fonts/inter/Inter-Black.woff2",revision:"661569afe57a38e1529a775a465da20b"},{url:"/fonts/inter/Inter-BlackItalic.woff",revision:"e3329b2b90e1f9bcafd4a36604215dc1"},{url:"/fonts/inter/Inter-BlackItalic.woff2",revision:"a3cc36c89047d530522fc999a22cce54"},{url:"/fonts/inter/Inter-Bold.woff",revision:"99a0d9a7e4c99c17bfdd94a22a5cf94e"},{url:"/fonts/inter/Inter-Bold.woff2",revision:"444a7284663a3bc886683eb81450b294"},{url:"/fonts/inter/Inter-BoldItalic.woff",revision:"3aa31f7356ea9db132b3b2bd8a65df44"},{url:"/fonts/inter/Inter-BoldItalic.woff2",revision:"96284e2a02af46d9ffa2d189eaad5483"},{url:"/fonts/inter/Inter-ExtraBold.woff",revision:"ab70688a1c9d6525584b123575f6c0a5"},{url:"/fonts/inter/Inter-ExtraBold.woff2",revision:"37da9eecf61ebced804b266b14eef98e"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff",revision:"728a4c7df3ed1b2bc077010063f9ef1c"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff2",revision:"fcc7d60ef790b43eb520fdc5c7348799"},{url:"/fonts/inter/Inter-ExtraLight.woff",revision:"dd19efda9c6e88ad83a5b052915899f7"},{url:"/fonts/inter/Inter-ExtraLight.woff2",revision:"b3b2ed6a20c538e9c809f4df5c04ac2a"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff",revision:"a6566ae6fa3c58b48f888d7c9c234d52"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff2",revision:"079cd1e71cd4f73bef86f72deced6d03"},{url:"/fonts/inter/Inter-Italic.woff",revision:"f137a90d649b6ab032563856df323f40"},{url:"/fonts/inter/Inter-Italic.woff2",revision:"fd26ff23f831db9ae85a805386529385"},{url:"/fonts/inter/Inter-Light.woff",revision:"5d3776eb78374b0ebbce639adadf73d1"},{url:"/fonts/inter/Inter-Light.woff2",revision:"780dd2adb71f18d7a357ab7f65e881d6"},{url:"/fonts/inter/Inter-LightItalic.woff",revision:"d0fa7cbcf9ca5edb6ebe41fd8d49e1fb"},{url:"/fonts/inter/Inter-LightItalic.woff2",revision:"df29c53403b2e13dc56df3e291c32f09"},{url:"/fonts/inter/Inter-Medium.woff",revision:"c0638bea87a05fdfa2bb3bba2efe54e4"},{url:"/fonts/inter/Inter-Medium.woff2",revision:"75db5319e7e87c587019a5df08d7272c"},{url:"/fonts/inter/Inter-MediumItalic.woff",revision:"a1b588627dd12c556a7e3cd81e400ecf"},{url:"/fonts/inter/Inter-MediumItalic.woff2",revision:"f1e11535e56c67698e263673f625103e"},{url:"/fonts/inter/Inter-Regular.woff",revision:"3ac83020fe53b617b79b5e2ad66764af"},{url:"/fonts/inter/Inter-Regular.woff2",revision:"dc131113894217b5031000575d9de002"},{url:"/fonts/inter/Inter-SemiBold.woff",revision:"66a68ffab2bf40553e847e8f025f75be"},{url:"/fonts/inter/Inter-SemiBold.woff2",revision:"007ad31a53f4ab3f58ee74f2308482ce"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff",revision:"6cd13dbd150ac0c7f337a2939a3d50a8"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff2",revision:"3031b683bafcd9ded070c00d784f4626"},{url:"/fonts/inter/Inter-Thin.woff",revision:"b068b7189120a6626e3cfe2a8b917d0f"},{url:"/fonts/inter/Inter-Thin.woff2",revision:"d52e5e38715502616522eb3e9963b69b"},{url:"/fonts/inter/Inter-ThinItalic.woff",revision:"97bec98832c92f799aeebf670b83ff6c"},{url:"/fonts/inter/Inter-ThinItalic.woff2",revision:"a9780071b7f498c1523602910a5ef242"},{url:"/fonts/inter/Inter-italic.var.woff2",revision:"1f7ca6383ea7c74a7f5ddd76c3d3cef2"},{url:"/fonts/inter/Inter-roman.var.woff2",revision:"66c6e40883646a7ad993108b2ce2da32"},{url:"/fonts/inter/Inter.var.woff2",revision:"8dd26c3dd0125fb16ce19b8f5e8273fb"},{url:"/fonts/inter/inter.css",revision:"178297900cc42c19e1e47fbc2487abe5"},{url:"/img/favicon/android-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/android-icon-192x192.png",revision:"dd8a4c74ec2be516a57d40df25540ab8"},{url:"/img/favicon/android-icon-36x36.png",revision:"77887a8a93baed7eaeb316be4b31a7f9"},{url:"/img/favicon/android-icon-48x48.png",revision:"d1ff9fb0528cb9100ad5ee5fd7ece71f"},{url:"/img/favicon/android-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/android-icon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/apple-icon-114x114.png",revision:"efd8a26a33f16975715ce8c56169d730"},{url:"/img/favicon/apple-icon-120x120.png",revision:"56dcc09f7674f293595117b3181dcf88"},{url:"/img/favicon/apple-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/apple-icon-152x152.png",revision:"368ae8346bc9bb8d3f89ef48acb094f9"},{url:"/img/favicon/apple-icon-180x180.png",revision:"c691e02bc0b7df6cb31da017b420cba5"},{url:"/img/favicon/apple-icon-57x57.png",revision:"90555efc26d3a34a3979c133868f9d34"},{url:"/img/favicon/apple-icon-60x60.png",revision:"06dda52763aee5612d79999966488f79"},{url:"/img/favicon/apple-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/apple-icon-76x76.png",revision:"fedee38a4cf4d5918f8dbd1657c709c9"},{url:"/img/favicon/apple-icon-precomposed.png",revision:"8ad8bbee4eb631f76e89807878622aed"},{url:"/img/favicon/apple-icon.png",revision:"fb7eaf4e8ef1e852bd28b08f46ae6309"},{url:"/img/favicon/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/img/favicon/favicon-16x16.png",revision:"3dba5d08ad8a2a4de265448afa2fd03c"},{url:"/img/favicon/favicon-32x32.png",revision:"0ae932cc803789d645a2409cb67db049"},{url:"/img/favicon/favicon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/ms-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/ms-icon-150x150.png",revision:"6224c535c86d618e36a97da48e52056b"},{url:"/img/favicon/ms-icon-310x310.png",revision:"c391dc97d4c01177bd07291c1f694063"},{url:"/img/favicon/ms-icon-70x70.png",revision:"4cb3f77034cab3de7b60cd7d954042d1"},{url:"/img/fediverse-black.png",revision:"b5ede08246f4a691dff8dcefe39c984d"},{url:"/img/fediverse-color.png",revision:"6264c2ac70632db6e3447581da838d1b"},{url:"/img/follow.svg",revision:"8f185615cd7242792c8bd73b359b2498"},{url:"/img/indieauth.png",revision:"7fbf89da18a721dc25a16393b8a62e82"},{url:"/img/like.svg",revision:"2af8fcf2ffc5a028b9b300538a5e766e"},{url:"/img/repost.svg",revision:"12830cd3f1099b40670e8a69b40efa27"},{url:"/manifest.json",revision:"3ebf89ccef77c69bcd65ed8757086c99"},{url:"/serviceWorker.js",revision:"0fefbecf45aefe5354045cbf926e6a25"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:c,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/\.(?:ts|m3u8)$/i,new e.NetworkOnly,"GET"),e.registerRoute((e=>e.pathname.startsWith("/admin/")),new e.NetworkOnly({fetchOptions:{credentials:"same-origin"},plugins:[]}),"GET"),e.registerRoute((e=>e.pathname.startsWith("/api/")),new e.NetworkOnly,"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
