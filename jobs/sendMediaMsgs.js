"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[128],{684:function(e,s,t){t.r(s);var r=t(26),n=t.n(r),i=t(88),a=t(22),u=t(530),d=t(571),o=t(90),f=t(11),_=t(209),v=t(33),l=t(24),h=t(89),c=t(117);function M(){return(M=n()((function*(e,s){for(var t=e.jids,r=e.requests,n=e.key,i=e.toStatus,o=(t.length+(i?1:0))*r.length,f=yield y(n,o),_=0,v=[],l=0;l<t.length;l++){for(var M=t[l],g=yield(0,a.V)(M),w=[],G=0;G<r.length;G++){var L=r[G],O=f[_++],p=(0,d.c)(O,L,s),I=yield(0,a.Tc)(M,p,null,{to:g,identityIds:new Map});if(I&&I.outgoingTo){var S=I.outgoingTo;w.push((0,d.e)(I,S,L,G))}else __LOG__(4)`sendMediaMsgs: result is undefined`,(0,c.p)(M,p)}v.push(...w)}var q=[];if(i){if("success"!==(yield(0,u.ensureStatusSettingsInitialized)()))throw __LOG__(4)`sendStatusMediaMsgs couldn't fetch settings.`,SEND_LOGS("send-status-no-settings"),new h.b({algo:{type:"constant",delay:3e5}});for(var b=0;b<r.length;b++){var m=r[b],x=f[_++];if("audio"!==m.type&&"voice"!==m.type&&"document"!==m.type&&"text/vcard"!==m.type){var D=(0,d.d)(x,m,s),z=yield(0,a.Uc)(D);z?q.push({type:"status",request:m,requestIdx:b,dbMsg:z.dbMsg,to:{to:z.to,identityIds:new Map},origin:e.origin}):(__LOG__(4)`sendMediaMsgs: status result is undefined`,(0,c.q)(D,e.origin))}else __LOG__(4)`Invalid request to send ${m.type} to status`}}return[...v,...q]}))).apply(this,arguments)}function y(e,s){return(0,_.a)(new Uint8Array((0,v.k)(e)),"Share Media Message Keys",7*s).then(e=>{for(var t=[],r=new l.a(e),n=0;n<s;n++){var i=(0,a.q)((0,v.m)(r.readByteArray(7)));t.push(i)}return t})}s.default=(0,i.c)().step("writeToDb",(e,s,t)=>(function(e,s){return M.apply(this,arguments)})(e,t.jobStartTime)).step("hash",(e,s)=>{var t=s.requests.map((e,s)=>()=>(0,o.e)(e.plaintext).then(e=>({hash:e,requestIdx:s})));return(0,f.r)(t).then(s=>{var t=new Map;return s.forEach(e=>{var s=e.hash,r=e.requestIdx;t.set(r,s)}),{results:e,hashes:t}})}).finalStep("finish",(e,s)=>{var t=s.origin,r=[],n=e.results,i=e.hashes;return n.forEach(e=>{var s=i.get(e.requestIdx);if(!s)return __LOG__(4)`sendMediaMsgs: no hash found`,void(0,c.h)(e,{thumbSize:(0,d.b)(e.request),origin:t});r.push((0,d.a)(e,s))}),Promise.all(r).then(()=>{})}).end()}}]);