"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[58],{637:function(r,n,e){e.r(n),e.d(n,"backendErrorParser",(function(){return o})),e.d(n,"handleError",(function(){return t}));var o=new(e(51).a)("errorParser",r=>{r.assertTag("error");var n=r.attrInt("code");switch(n){case 479:return __LOG__(4)`Invalid stanza sent (smax-invalid)`,void SEND_LOGS("smax-invalid");default:return(function(r){__LOG__(4)`Unknown error code: ${r}`,SEND_LOGS("unknown-error-code")})(n)}});function t(r){return o.parse(r),Promise.resolve("NO_ACK")}}}]);