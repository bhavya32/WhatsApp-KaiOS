"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[140],{648:function(n,e,t){t.r(e);var u=t(30),o=t(4),r=t(88),s=new(t(51).a)("setGroupAnnouncement",n=>({}));e.default=(0,r.c)().finalStep("setGroupAnnouncement",n=>{var e=n.groupJid,t=n.announcement,r=(0,o.w)("iq",{to:(0,o.g)(e),type:"set",xmlns:"w:g2",id:(0,o.u)()},t?(0,o.w)("announcement",null):(0,o.w)("not_announcement",null));return(0,u.b)(r,s).then(n=>{n.success||__LOG__(4)`setGroupAnnouncement error`})}).end()}}]);