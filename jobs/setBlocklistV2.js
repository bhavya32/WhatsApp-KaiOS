"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[139],{673:function(e,s,t){t.r(s),t.d(s,"setBlocklistV2",(function(){return v}));var r=t(30),a=t(51),h=t(4),c=t(88),i=t(20),l=t(22),n=t(37),o=t.n(n),d=t(6),u=t(72),_={400:(0,u.d)("bad-request"),406:(0,u.d)("not-acceptable"),500:(0,u.d)("internal-server-error")},m=new a.a("setBlocklistV2",e=>{var s=e.child("list");return s.attrEnum("matched",{true:!0,false:!1})?{type:"hashMatched",dhash:s.maybeAttrString("dhash")}:{type:"hashMismatched",clientDHash:s.maybeAttrString("c_dhash"),dhash:s.maybeAttrString("dhash"),list:(0,i.m)(s.mapChildrenWithTag("item",e=>e.attrPhoneUserJid("jid")))}}),v=(0,c.c)().finalStep("setBlocklistV2",e=>{var s=e.jid,t=e.action;return d.I.get().mdBlocklistV2?(0,l.w)().then(e=>{var a=(0,h.w)("iq",{xmlns:"blocklist",type:"set",to:h.l,id:(0,h.u)()},(0,h.w)("item",{action:(0,h.b)(t),jid:(0,h.g)(s),dhash:e.dhash?(0,h.b)(e.dhash):h.c}));return(0,r.b)(a,m).then(r=>{if(!r.success)return __LOG__(4)`setBlocklistV2 error with code ${r.errorCode}, text ${r.errorText}`,(0,u.f)(r,_);var a=r.result;switch(a.type){case"hashMatched":var h="block"===t?(0,i.a)(e.users,s):(0,i.n)(e.users,(0,i.l)(s));return(0,l.ec)(h,a.dhash,e.dhash).then(()=>({result:"success-hash-matched"}));case"hashMismatched":return(0,l.ec)(a.list,a.dhash,a.clientDHash).then(()=>({result:"success-hash-mismatched"}));default:return(0,o.a)(a.type),{error:{reason:"unknown"}}}})}):(__LOG__(2)`setBlocklistV2 requires md_blocklist_v2 server prop`,{error:{reason:"server-prop-disabled"}})}).end()}}]);