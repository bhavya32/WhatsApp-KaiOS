"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[136],{680:function(e,n,r){r.r(n),r.d(n,"sendWrittenMsg",(function(){return _}));var s=r(2),t=r(88),i=r(3),a=r(117),d=r(42),l=r(547),o=r(517),u=r(513),_=(0,t.c)().finalStep("encryptAndSend",{code:e=>{var n=e.mediaUploaded,r=e.origin;return v(e).then(t=>{if(t){var i=t.dbMsg;if(!(0,d.l)(i.ack)){if(i.type===s.f.REVOKED)return __LOG__(2)`sendWrittenMsg msg was revoked before sent`,void(0,a.g)(t,{origin:r});var o,u=e.outgoingTo;return"status"===t.type?o=(0,l.b)(t,u.to):(t.type,o=(0,l.a)(t,u.to)),o.then(e=>{var s,i,d,l;switch(e){case"sent":(0,a.j)(t,{thumbSize:null==(s=t.mediaInfo)||null==(i=s.preview)?void 0:i.byteLength,origin:r},n);break;case"skip-revoke":case"skip-self":case"skip-sender-backfill":break;default:(0,a.h)(t,{origin:r,thumbSize:null==(d=t.mediaInfo)||null==(l=d.preview)?void 0:l.byteLength})}})}__LOG__(2)`sendWrittenMsg msg already sent`}else __LOG__(2)`sendWrittenMsg: msg was deleted`})},stopRetryIf:{timePassedSeconds:i.b,onStopRetry:e=>{var n=e.origin;return v(e).then(e=>{if(e){var r=(0,o.f)(e);return(0,u.e)(r,s.a.EXPIRED).then(()=>{var r,s;(0,a.i)(e,{origin:n,thumbSize:null==(r=e.mediaInfo)||null==(s=r.preview)?void 0:s.byteLength},!0)})}__LOG__(3)`encryptAndSend: msg no longer exists`})}}}).end();function v(e){return void 0!==e.msgId?(0,o.c)(e.msgId):(0,o.d)(e.chat,e.rowId)}}}]);