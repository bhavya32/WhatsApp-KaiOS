"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[122],{711:function(e,o,t){t.r(o),t.d(o,"revokeQRCode",(function(){return r}));var c=t(577),s=t(28),n=t(6),r=(0,t(88).c)().step("deleteCachedCode",()=>n.u.delete()).step("revokeCode",()=>(0,c.a)({hasIqToSwhatsappnet:!0,qrType:"contact",qrAction:"revoke"}).then(e=>"SetContactSubscribeResponseSuccess"===e.name?(0,s.c)(e.value.qrCode):(e.name,(0,s.b)()))).finalStep("cacheNewCode",e=>e.success?n.u.set(e.value).then(()=>e):e).end()}}]);