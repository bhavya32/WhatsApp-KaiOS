"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[125],{718:function(e,r,t){t.r(r);var n=t(26),s=t.n(n),a=t(43),o=t(144),u=t(249),i=t(3),l=t(188),c="https://dit.whatsapp.net/deidentified_telemetry",d="245118376424571|3e7d275052f1522bf3200afcf53841a7",v="WAMEventBuffer.dat",f=111e3,p=3067002,_=3067003,y=3067004;function m(e){return{result:e.result,httpResponseCode:e.httpResponseCode,uploadTime:(0,i.u)(e.uploadStartTime)}}function h(){return(h=s()((function*(e,r,t,n){if((yield(0,l.e)())===d)return __LOG__(2)`Removing private stats buffer without submitting it (kill switch)`,(0,l.h)(t.key).then(()=>{e()});var s=(0,i.t)(),u=yield n();if(null==u)return __LOG__(4)`Couldn't get token to submit a private stats buffer`,void e();var f=new FormData;f.append("access_token",d);var p=yield(0,o.d)(u.sharedSecret,t.content),_=`${(0,a.e)(u.token,!0)}+${(0,a.e)(p,!0)}`;f.append("credential",_),f.append("message",new Blob([t.content],{type:"application/octet-stream"}),v),f.append("meta_data",JSON.stringify({t:(0,i.D)(),p:0}));var y,m={method:"POST",body:f,"Content-Type":"multipart/form-data"};try{y=yield fetch(c,m)}catch(e){return __LOG__(3)`Upload of a private stats buffer failed: ${e}`,void r({uploadStartTime:s,result:"error-other"})}var h=y.status,S=r=>{e({uploadStartTime:s,httpResponseCode:h,result:r})},w=e=>{r({uploadStartTime:s,httpResponseCode:h,result:e})};switch(h){case 200:return(0,l.h)(t.key).then(()=>{S("success")});case 429:return void S("error-server-other");case 401:return Promise.all([(0,l.f)(d),(0,l.h)(t.key)]).then(()=>{S("error-access-token")});case 400:var O=yield b(y),g=O.result,P=O.shouldRetry,R={uploadStartTime:s,httpResponseCode:h,result:g};return void("retry"===P?r(R):e(R));case 500:return void w("error-server-other")}__LOG__(3)`Unsupported response status code from PrivateStats upload request: ${h}`,w("error-other")}))).apply(this,arguments)}function b(e){return S.apply(this,arguments)}function S(){return(S=s()((function*(e){var r=yield e.json().catch(()=>{});if("object"!=typeof r)return __LOG__(3)`Unable to parse error response 400 from PrivateStats upload request or parsed response is not an object`,{result:"error-other",shouldRetry:"retry"};var t=r.error;if("object"!=typeof t)return __LOG__(3)`Incorrect or missing error entry in the error response 400 from PrivateStats upload request`,{result:"error-other",shouldRetry:"retry"};var n=t.code,s=t.error_subcode;if("number"!=typeof n||"number"!=typeof s)return __LOG__(3)`Incorrect code or subcode in the error response 400 from PrivateStats upload request`,{result:"error-other",shouldRetry:"retry"};switch(n){case 9:return{result:"error-server-other",shouldRetry:"no-retry"};case f:switch(s){case p:return{result:"error-parsing",shouldRetry:"retry"};case _:return{result:"error-decoding",shouldRetry:"retry"};case y:return{result:"error-credential",shouldRetry:"retry"};default:return __LOG__(3)`Unsupported subcode value in the error response 400 from PrivateStats upload request: ${s}`,{result:"error-other",shouldRetry:"retry"}}default:return __LOG__(3)`Unsupported code value in the error response 400 from PrivateStats upload request: ${n}`,{result:"error-other",shouldRetry:"retry"}}}))).apply(this,arguments)}var w=t(88),O=t(81),g=t(24),P=t(30),R=t(48),L=t(86),k=t(113);function G(e){e[0]&=248,e[31]&=127,e[31]|=64}var T=t(4),A=new(t(51).a)("issuePrivateStatsToken",e=>{var r=e.child("sign_credential");return{signedCredential:r.child("signed_credential").contentBytes(),acsPublicKey:r.child("acs_public_key").contentBytes()}}),U=t(410),q=new O.a;function j(){return q.enqueue(()=>(0,l.g)().then(e=>e?{result:e}:(function(e){var r=(0,i.t)(),t={overallStartTime:r,retryStartTime:r,retryAttemptsLeft:3},n=new Uint8Array(32);self.crypto.getRandomValues(n);var s=new Uint8Array(32);self.crypto.getRandomValues(s);var a=(function(e,r){return(0,k.j)(()=>{var t=(0,k.g)(),n=(0,k.a)(Uint8Array,32);n.set(r),G(n),R.d.scalarbase(t,n);var s=(0,k.d)(e);(0,R.d.add)(s,t);var a=new Uint8Array(32);return(0,k.h)(a,s),a})})(n,s),o=new u.a({name:"issuePrivateStatsToken",timer:{algo:{type:"exponential",first:250},max:1e3},code:e=>{t.retryAttemptsLeft<3&&(t.retryStartTime=(0,i.t)());var r=(0,T.w)("iq",{xmlns:"privatestats",id:(0,T.u)(),type:"get",to:T.l},(0,T.w)("sign_credential",{version:"1"},(0,T.w)("blinded_credential",null,a)));return(0,P.e)(r,A).then(r=>{if(!r.success){var a=(function(e){switch(e.errorCode){case 400:return"bad-request";case 500:return"internal-server-error";case 501:return"feature-not-implemented";case 503:return"service-unavailable";default:return"unknown"}})(r);return __LOG__(3)`issuePrivateStatsToken: failed ${a}`,void("internal-server-error"!==a||t.retryAttemptsLeft<=0?e({result:null,metric:Object.assign({},t,{result:a})}):t.retryAttemptsLeft--)}var o=r.result,u=o.signedCredential,i=o.acsPublicKey,l=(function(e,r,t){return(0,k.j)(()=>{var n=(0,k.g)();if((0,k.l)(n,e))return null;var s=(0,k.g)();if(0!==(0,k.m)(s,t))return null;var a=(0,k.a)(Uint8Array,32);a.set(r),G(a);var o=(0,k.g)();R.d.scalarmult(o,s,a),(0,R.d.add)(n,o);var u=new Uint8Array(32);return(0,k.h)(u,n),u})})(u,s,i);if(null==l)return __LOG__(3)`issuePrivateStatsToken: failed to unblind the signed token`,void e({result:null,metric:Object.assign({},t,{result:"decryption-error"})});var c=g.a.build(n,l),d=(0,R.a)(c.readByteArray());e({result:{token:n,sharedSecret:d},metric:Object.assign({},t,{result:"success"})})}).catch(r=>{if(!(r instanceof L.b))return Promise.reject(r);__LOG__(3)`issuePrivateStatsToken: Disconnected`,t.retryAttemptsLeft<=0?e({result:null,metric:Object.assign({},t,{result:"disconnected"})}):t.retryAttemptsLeft--})}});return o.start(),o.promise()})().then(e=>{var r=Object.assign({},e),t=e.result;return t?(0,l.i)(t).then(()=>r):r})).then(e=>{var r,t,n,s,a,o,u=e.result,l=e.metric;return l&&(t=(r=l).result,n=r.overallStartTime,s=r.retryStartTime,a=r.retryAttemptsLeft,o=(function(e){switch(e){case"success":return 1;case"bad-request":return 2;case"internal-server-error":return 3;case"disconnected":return 5;default:return 4}})(t),WAM.log("regular",2242,void 0,[1,0,o,4,0,(0,i.u)(n),3,0,(0,i.u)(s),2,0,3-a,5,1,"disconnected"!==t,6,0,(0,U.a)()?1:2])),u||__LOG__(3)`Couldn't get a private stats token`,u}))}r.default=(0,w.c)().finalStep("sendAnonymousMetrics",{code:()=>(0,P.o)().then(()=>{return e=j,(0,l.b)("private").then(r=>(function(e,r){var t=e.map(e=>{var t=3,n=[],s=new u.a({name:"uploadPrivateStatsBuffer",timer:{algo:{type:"exponential",first:250},max:1e3},code:s=>(function(e,r,t,n){return h.apply(this,arguments)})(s,e=>{var r=m(e);n.push(r),t<=0?s():t--},e,r)});return s.start(),s.promise().then(r=>{if(null!=r){var t=m(r);n.push(t)}return{uploadedBufferKey:"success"===(null==r?void 0:r.result)?e.key:null,metrics:n}})});return Promise.all(t).then(e=>{var r=e.reduce((e,r)=>(e.push(...r.metrics),e),[]);return{uploadedBufferKeys:e.reduce((e,r)=>(null!=r.uploadedBufferKey&&e.push(r.uploadedBufferKey),e),[]),metrics:r}})})(r,e));var e}).then(e=>{e.metrics.forEach(e=>{(function(e){var r=e.result,t=e.uploadTime,n=e.httpResponseCode,s=(function(e){switch(e){case"success":return 1;case"error-server-other":return 8;case"error-parsing":return 2;case"error-decoding":return 3;case"error-credential":return 4;case"error-other":return 5;default:return 11}})(r);WAM.log("regular",2244,void 0,[1,0,s,2,0,t,3,0,n,6,0,(0,U.a)()?1:2])})(e)})}),stopRetryIf:{timePassedSeconds:600,onStopRetry:()=>{__LOG__(2)`sendAnonymousMetrics timed out, will be restarted later`}}}).end()}}]);