"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[123],{666:function(e,r,t){t.r(r);var a=t(88),l=t(41),o=t(258),_=t(30),n=t(411),u=t(89),y=t(3),d=t(4),i=new a.b("rotateKey",e=>{e.assertFromServer()});r.default=(0,a.c)().step("uploadKeys",()=>(0,l.H)().then(e=>{var r=(0,d.w)("iq",{xmlns:"encrypt",type:"set",to:d.l,id:(0,d.u)()},(0,d.w)("rotate",null,(0,o.b)(e)));return __LOG__(2)`rotateKey uploading`,(0,_.b)(r,i).then(e=>{if(e.success)return{};var r=e.errorCode;if(406===r)return __LOG__(4)`rotateKey generated bad key`,{};if(409===r)return{shouldUploadAll:!0};if(r>=500)throw __LOG__(2)`rotateKey server error ${r}, wait a day`,new u.b({algo:{type:"constant",delay:1e3*y.b}});return __LOG__(4)`rotateKey unrecognized error ${r}`,{shouldUploadAll:!0}})})).finalStep("maybeUploadAll",e=>{if(e.shouldUploadAll)return __LOG__(2)`rotateKey reupload all keys`,(0,n.default)()}).end()}}]);