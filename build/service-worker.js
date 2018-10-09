"use strict";var precacheConfig=[["/index.html","b401e8cab2c0bc2fca80fea388c5c684"],["/static/css/main.e86bae8a.css","e86bae8ad84a1e9b74d3e77deaeb0809"],["/static/js/0.50fd29c5.chunk.js","14b9c4f32463979651228dd2284a8266"],["/static/js/1.7077635a.chunk.js","82f984b9cad620d73d86221613636e62"],["/static/js/10.0d125739.chunk.js","00695d90c7846737d4d0f57269fe55c3"],["/static/js/11.305517dd.chunk.js","a05db0688b4fda1ea1198679dd0d93e6"],["/static/js/12.43f035d7.chunk.js","72d888fe2a4132d4c9ac08a624caa048"],["/static/js/13.f3e5be98.chunk.js","649f05704b0032ed3b31e39eacae159b"],["/static/js/14.f9fa0620.chunk.js","b2f3439027102c184b51bab2d019adf2"],["/static/js/2.a0fe997a.chunk.js","0669c0bb1bee3ac72614fda137935508"],["/static/js/3.7955653e.chunk.js","6c103d0baff659747b951ab2a0ac09cc"],["/static/js/4.95af2e8b.chunk.js","3deecd069bfa6a8dd09bf16027527649"],["/static/js/5.cb0a417c.chunk.js","be59500d37550009d693a48c5f145e9e"],["/static/js/6.fb06259a.chunk.js","6aa81208aa3b64f3605cbc8d5f89d551"],["/static/js/7.dceb390b.chunk.js","145c7992a5a2040c5568d7b85b06eb4e"],["/static/js/8.f8669812.chunk.js","97fec648ad9e9eec9dc6906742930e53"],["/static/js/9.bbfc97fc.chunk.js","6d8c47ef79ea3d228a6e1a8307079d56"],["/static/media/404.96c4b695.png","96c4b6952423cb0211f8e23955667a73"],["/static/media/7.6f3b92ce.jpg","6f3b92ce2eb3ef570da604aa793fb85b"],["/static/media/NoAPIKey.efba4584.svg","efba458418121183f956c4cb5b318fb4"],["/static/media/auth0.83b74166.svg","83b74166b8a446a34c35e27ba511cd9a"],["/static/media/bike.6c3eef21.jpg","6c3eef21dcc3691391c2d12fe3386de2"],["/static/media/china.4e4d59b7.svg","4e4d59b7a0903071d743973f8e3b3aab"],["/static/media/facebook-app-symbol.8894c170.svg","8894c170673c8148484cbfb6e357ac66"],["/static/media/firebase.bfa69c4f.svg","bfa69c4f3255d5c564c2ec600ff9885e"],["/static/media/france.bcd389de.svg","bcd389debadb2cf1c0332df62b80c1b9"],["/static/media/google-plus.9c10b190.svg","9c10b190c88b1f2c4f9f497e2e230d1f"],["/static/media/italy.604345b4.svg","604345b476aa52a0245ee2ffd3cd50db"],["/static/media/signin.5f49cbae.svg","5f49cbae70ae18c12593864b93248cc9"],["/static/media/signup.1b64e34c.svg","1b64e34ca984220d117970f23847a025"],["/static/media/spain.6a9dc11f.svg","6a9dc11ff55791478b31156cd09b6b38"],["/static/media/uk.bc48afcc.svg","bc48afcc15d5d9d51255de0b2ee708be"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});