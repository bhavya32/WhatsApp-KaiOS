"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[107],{640:function(r,t,i){i.r(t);var n=i(30),o=i(4),a=i(6),e=i(88),p=i(51),u=i(39),s=i(72),d=i(16),c=i(186),f={404:(0,s.c)("not-a-participant")},l=new p.a("promoteGroupParticipantsReplyParser",r=>({id:r.attrString("id"),participants:r.child("promote").mapChildren(r=>{var t=(0,s.e)(r,f);return{jid:r.attrPhoneUserJid("jid"),error:t}})})),m={401:(0,s.d)("not-an-admin"),403:(0,s.d)("not-in-group"),404:(0,s.d)("group-not-found"),500:(0,s.d)("unknown")};t.default=(0,e.c)().finalStep("promoteGroupParticipants",(r,t,i)=>{var e=i.jobStartTime,p=r.groupJid,f=r.participants,j=(0,o.w)("iq",{to:(0,o.g)(p),type:"set",xmlns:"w:g2",id:(0,o.u)()},(0,o.w)("promote",null,f.map(r=>(0,o.w)("participant",{jid:(0,o.g)(r)}))));return(0,n.b)(j,l).then(r=>{if(!r.success)return(0,s.f)(r,m);var t=r.result,i=[],n=[];return t.participants.forEach(r=>{r.error?i.push({jid:r.jid,error:r.error}):n.push(r.jid)}),(0,c.o)("promote",p,{id:t.id,participants:n,author:a.t.get(),ts:e}).then(()=>{if(i.length)return(0,u.b)().waitUntilPersisted(d.e.queryGroup(p))}).then(()=>({failures:i}))})}).end()}}]);