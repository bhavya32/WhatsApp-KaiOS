"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[65],{631:function(t,i,a){a.r(i);var e=a(114),n=a(4),r=a(22),o=a(38),s=a(3),u=a(75),d=a(12),p=a(105),c=a(442),f=a(56),m=a(6);function v(t){var i=[];return t.forEachChildWithTag("message",t=>{var a=t.attrString("id"),e=t.attrString("type");switch(e){case"media":var n=t.child("media");n.assertAttr("type","msg");var r=n.maybeAttrString("l10n"),o=n.attrString("mediatype");if("image"!==o&&"video"!==o&&"gif"!==o)return __LOG__(3)`Unknown PSA status mediatype ${o}`,void SEND_LOGS("unknown-psa-status-mediatype");var s=n.contentBytes(),d=(0,u.a)(f.h,s);i.push({id:a,type:"media",mediatype:o,proto:d,plaintext:s,l10n:r});break;case"text":var p=t.contentBytes(),c=t.hasAttr("fb"),m=(0,u.a)(f.h,p);i.push({type:"text",id:a,fromFb:c,plaintext:p,proto:m});break;default:return __LOG__(3)`Unknown PSA status type ${e}`,void SEND_LOGS("unknown-psa-status-type")}}),i}var l=new e.b("incomingPSANotification",t=>{t.assertTag("notification"),t.assertAttr("type","psa");var i,a=t.attrString("id"),e=t.attrTime("t"),n=t.attrFromPhoneJid();if("status"!==n.type)return __LOG__(4)`Received status PSA notification from unknown author ${n}`,{type:"other",externalId:a,from:n,ts:e};var r=t.maybeChild("campaign");if(r){var o=r.attrString("id");i=r.hasChild("revoke")?{campaignId:o,revoke:!0}:{campaignId:o,messages:v(r),duration:r.maybeAttrInt("duration")||void 0}}else i={campaignId:a,messages:v(t)};return{type:"status",from:n,ts:e,campaign:i,externalId:a}});i.default=(0,e.c)("incomingPSANotification",l,t=>{var i=(0,n.w)("ack",{to:(0,n.m)(t.from),participant:(0,n.j)(t.from),id:(0,n.b)(t.externalId),class:"notification"});switch(t.type){case"status":var a=t.ts,e=t.campaign;if(e.revoke)return r.Zb(e.campaignId).then(()=>i);var u=e.campaignId,f=e.duration,v=e.messages,l=[];return v.forEach(t=>{var i=(0,c.a)({externalId:t.id,author:"@psa",ts:a,proto:t.proto,bytes:t.plaintext,edit:-1,verifiedNameSerial:null,verifiedLevel:null,verifiedNameCert:null,pushname:null,urlNumber:!1,urlText:!1,campaignId:u,campaignDuration:f},t.l10n,t.fromFb);if(!i)throw __LOG__(4)`incomingPSANotification: unrecognized proto`,SEND_LOGS("psa-notification-null"),new Error("Unrecognized Proto");var e=i.msg;if(e.type===o.c.IMAGE||e.type===o.c.VIDEO||e.type===o.c.GIF){var n=e.height,r=e.width;if(n&&r&&!(function(t){var i=t.height,a=t.width,e=m.i.get();return e.height>e.width?i>a:a>i})({height:n,width:r}))return void __LOG__(2)`incomingPSANotification: dropping media msg with wrong ratio`}l.push(i)}),r.Rc(l).then(t=>{var i=t.filter(Boolean);if(0!==i.length){var a=i[i.length-1],e=(0,p.c)(a.author,(0,s.D)());e&&(0,d.c)("event","statusAuthorUpdated",{author:e})}}).then(()=>i);default:return __LOG__(3)`Unhandled incoming psa notification`,SEND_LOGS("unhandled-psa-notification",.1),i}})}}]);