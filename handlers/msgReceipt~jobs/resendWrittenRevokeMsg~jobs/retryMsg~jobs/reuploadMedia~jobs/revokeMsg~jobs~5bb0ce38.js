"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[1],{513:function(t,r,e){e.d(r,"e",(function(){return D})),e.d(r,"c",(function(){return j})),e.d(r,"a",(function(){return $})),e.d(r,"d",(function(){return E})),e.d(r,"b",(function(){return H}));var n=e(8),a=e.n(n),u=e(3),i=e(15),s=e(16),o=e(36),c=e(109),p=e(58),f=e(5),d=e(7),l=e(9),_=e(2),g=e(82),v=e(62),h=e(66),b=e(96),m=e(49),k=e(187),y=e(177),A=e(42),M=e(10),G=e(105),C=e(39),O=e(46),w=e(308),I=e(14),T=e(32),L=e(11),U=e(517),S=e(184),B=e(185),P=()=>null;function D(t,r){return(0,M.c)("updateSystemAck",e=>(0,O.a)(e.table,"rw",["msgs","chats","groups","groupParticipantsInfo","status","authors","reactions","pollUpdates"],e=>R(e,t,r)),(t,r,e)=>{N(e,t)})}function R(t,r,e,n){return(0,U.b)(t,r).then(r=>{var a;if(null!=r){var u="ownStore"===r.type?r.dbMsg:r.embeddedMsg;if(u.author!==_.b){if(null==u.chat)return __LOG__(4)`_updateSystemAck on incoming status message`,(0,f.e)();if(u.type!==_.f.REVOKED||null==u.adminJid)return __LOG__(4)`_updateSystemAck on incoming message`,(0,f.e)()}if(null==u.ack||(0,A.l)(u.ack))return __LOG__(2)`_updateSystemAck on sent message`,(0,f.e)();u.ack=e,e===_.a.SENT?delete u.resendCount:e===_.a.CLOCK&&(u.resendCount=null!=u.resendCount?u.resendCount+1:1);var i=null!=(a=n&&n(r))?a:r;return(0,U.e)(t,i).then(()=>(function(t,r){return(0,U.h)(r,{chat:r=>J(t,r.chat,r),status:r=>(function(t,r){return(0,g.x)(t).then(t=>({type:"status",dbAuthor:t,dbMsg:r}))})(t,r),reaction:r=>(function(t,r){var e=r.msgId;return(0,k.i)(t,e).then(r=>J(t,r.chat,r)).then(e=>{if(e){var n={type:"addon",dbChat:e.dbChat,dbGroup:e.dbGroup,dbMsg:e.dbMsg,dbAddon:r},a=e.dbChat,u=e.dbMsg;return(0,k.h)(t,a,u,r).then(r=>r?t.chats.put(r).then(()=>Object.assign({},n,{dbChat:r})):n)}})})(t,r),pollUpdate:r=>(function(t,r){return(0,S.j)(t,r.msgId).then(e=>{if(e)return J(t,e.chat,e).then(t=>t&&{type:"addon",dbChat:t.dbChat,dbGroup:t.dbGroup,dbMsg:t.dbMsg,dbAddon:r})})})(t,r),keepInChat:r=>(function(t,r){return(0,o.r)(t,r.msgId).then(r=>{if(null!=r)return J(t,r.chat,r).then(t=>t&&{type:"chat",dbChat:t.dbChat,dbGroup:t.dbGroup,dbMsg:t.dbMsg})})})(t,r)})})(t,i))}})}function j(t,r){return(0,M.c)("resetToClock",e=>(0,O.a)(e.table,"rw",["msgs","groups","groupParticipantsInfo","chats","receipts","reactions","status","authors","pollUpdates"],e=>(0,v.h)(e,t).then(n=>{if(n)return R(e,t,_.a.CLOCK,t=>(0,U.h)(t,{chat:P,status:P,reaction:t=>(t.senderTimestampMs=1e3*r,{type:"ownStore",dbMsg:t}),pollUpdate:P,keepInChat:P})).then(t=>{if(t)return{ackChangedResult:t,outgoingTo:(0,v.g)(n)}});__LOG__(3)`resetToClock no receipt found`})),(t,r,e)=>{if(t){var n=t.ackChangedResult,a=t.outgoingTo;if(N(e,n),"chat"===n.type){var u=n.dbChat,i=n.dbMsg;return{type:"chat",jid:u.jid,dbMsg:i,outgoingTo:a}}if("addon"===n.type){var s=n.dbChat,o=n.dbAddon;return{type:"addon",jid:s.jid,dbMsg:o,outgoingTo:a}}return n.type,{type:"status",dbMsg:n.dbMsg,outgoingTo:a}}return null})}function $(t,r,e,n,u){return(0,M.c)("markMulticastMessageAsSent",i=>(0,O.a)(i.table,"rw",["msgs","chats","groups","groupParticipantsInfo","receipts","reactions","status","authors","pollUpdates"],i=>(function(t,r,e,n,u,i){return(0,f.c)([R(t,r,_.a.SENT,t=>(0,U.h)(t,{chat:t=>({type:"ownStore",dbMsg:x(t,e,n)}),status:t=>(n&&(t.ts=n),{type:"ownStore",dbMsg:t}),reaction:P,pollUpdate:P,keepInChat:P})),i&&q(t,i),z(t,r,u)]).then(t=>a()(t,1)[0])})(i,t,r,e,n,u)),(t,r,e)=>{N(e,t)})}function x(t,r,e){if(null==r||r===I.k)return t;if(!t.validUntil)return t;var n=e?(0,u.k)(r,e):(0,u.k)(r);return n<=(0,u.D)()||n===t.validUntil||(t.validUntil=n),t}function q(t,r){var e=r.isFanout,n=r.participantsInfo,a=r.to;if(e||!n)return(0,f.e)();var u=n.jid,i=n.keyIncrement||0;return(0,o.t)(t,u).then(r=>{if(r){var e=r.keyIncrement||0;if(i===e){var n=(0,w.b)(r,a);if(n)return __LOG__(2)`markParticipantsAsUpToDate updating`,(0,o.B)(t,n);__LOG__(2)`markParticipantsAsUpToDate no change`}else __LOG__(2)`markParticipantsAsUpToDate key updated`}else __LOG__(2)`markParticipantsAsUpToDate no longer exists`})}function z(t,r,e){return null==e||0===e.size?(0,f.e)():(0,v.h)(t,r).then(n=>{if(n){var a=(0,v.a)(n,e);if(a)return t.receipts.put((0,v.q)(a)).then(()=>{});__LOG__(2)`updateReceiptInTransaction ack for ${r} irrelevant`}else __LOG__(3)`updateReceiptInTransaction no receipt for msg ${r}`})}function E(t,r,e,n,u){return(0,M.c)("updateAck",c=>(0,d.y)(r,{chat:r=>(0,O.a)(c.table,"rw",["msgs","chats","groups","groupParticipantsInfo","receipts","media","previews","reactions","pollUpdates"],i=>(function(t,r,e,n,u,i){return(0,f.c)([(0,o.v)(t,r,e),(0,k.g)(t,r,e),(0,S.g)(t,r,e),(0,B.e)(t,r,e)]).then(r=>{var s=a()(r,4),c=s[0],p=s[1],d=s[2],l=s[3];return(function(t,r,e,n,a,u){return 0===r.length?(0,f.e)({updatedDbMsgs:[],validateBusinessCertificate:!1}):(0,f.f)(r.map(r=>()=>F(t,r.id,r.ack,e,n,a).then(n=>{var a=(0,f.e)();if(null!=n&&(r.ack=n,(0,A.h)(e)&&(r.type===_.f.PTT?r.played=!0:(0,b.b)(r)&&null!=r.viewOnceState&&(r.viewOnceState="viewed",a=(0,m.Q)(t,[r],!1),delete r.viewOnceExpiration,delete r.media))),null!=u){var s=(0,y.c)(r.bizInfo,u);s.validateBusinessCertificate&&(i=!0,s.bizConflict&&(r.bizConflict=!0,r.bizInfo=s.msgBizInfo))}return a.then(()=>r)}))).then(r=>0===r.length?{updatedDbMsgs:[],validateBusinessCertificate:i}:t.msgs.bulkPut(r).then(()=>({updatedDbMsgs:r,validateBusinessCertificate:i})));var i})(t,c,u,e,n,i).then(r=>(function(t,r,e,n,a){return 0===r.length?(0,f.e)([]):(0,f.c)(r.map(r=>F(t,(0,T.t)(r.id),r.ack||_.a.RECEIVED,e,n,a).then(t=>{if(null!=t)return r.ack=t,r}))).then(r=>{var e=r.filter(Boolean).map(t=>Object.assign({},t));return 0===e.length?[]:t.reactions.bulkPut(e).then(()=>{var r=new Set(e.map(t=>t.msgId));return(0,f.c)(Array.from(r,r=>(0,k.i)(t,r)))})})})(t,p,u,e,n).then(a=>(function(t,r,e,n,a){if(0===r.length)return(0,f.e)();var u=[];return(0,f.c)(r.map(r=>F(t,(0,T.s)(r.id),r.ack,e,n,a).then(t=>{null!=t&&u.push(Object.assign({},r,{ack:t}))}))).then(()=>{if(0!==u.length)return t.pollUpdates.bulkPut(u).then(()=>{})})})(t,d,u,e,n).then(()=>(function(t,r,e,n,a){return 0===r.length?(0,f.e)([]):(0,f.c)(r.map(r=>{var u=r.keepInChatMsgId,i=r.keepInChatAck;return F(t,u,i,e,n,a).then(t=>{if(null!=t)return{msgId:(0,T.D)(u),ack:t}})})).then(r=>{var e=r.filter(Boolean);if(0===e.length)return[];var n=new Map;return e.forEach(t=>{var r=t.msgId,e=t.ack;return n.set(r,e)}),t.msgs.where("id").anyOf(Array.from(n.keys())).toArray().then(r=>{var e=r.reduce((t,r)=>{var e=r.keptInfo;if(null==e)return t;var a=n.get(r.id);return null==a||(e.ack=a,t.push(r)),t},[]);return 0===e.length?[]:t.msgs.bulkPut(e).then(()=>e)})})})(t,l,u,e,n).then(n=>{var u=r.updatedDbMsgs,i=r.validateBusinessCertificate;if(0===u.length&&0===a.length)return{result:null,validateBusinessCertificate:i};var s=(0,L.u)(u,t=>t.id);return a.forEach(t=>{s.set(t.id,t)}),n.forEach(t=>{s.set(t.id,t)}),(function(t,r,e){return(0,o.i)(t,r).then(r=>K(t,r,e))})(t,e,Array.from(s.values())).then(t=>({result:t,validateBusinessCertificate:i}))}))))})})(i,t,r,e,n,u)).then(t=>{var e=t.result,n=t.validateBusinessCertificate,a=(0,d.q)(r);return a&&n?(0,C.b)().waitUntilPersisted(s.e.validateBusinessCertificate(a)).then(()=>e):e}),status:()=>(0,O.a)(c.table,"rw",["receipts","status","authors"],r=>(function(t,r,e,n){return(0,o.w)(t,r).then(r=>(0,f.c)(r.map(r=>(function(t,r,e,n){return F(t,r.id,r.ack,e,l.h,n).then(e=>{if(e)return r.ack=e,(0,g.q)(t,r).then(()=>r)})})(t,r,n,e))).then(()=>(function(t){return(0,g.x)(t).then(r=>(function(t,r){var e=r.id;return t.receipts.where("msgId").between((0,i.u)(e),(0,i.w)(e)).toArray().then(t=>{var r={};return t.forEach(t=>{var e=(0,i.s)(t.msgId),n=(0,v.r)(t);e&&n&&(r[e]=(0,v.f)(n))}),r})})(t,r).then(t=>({type:"status",dbAuthor:r,receipts:t})))})(t)))})(r,t,e,n))}),(t,r,e)=>{N(e,t)})}function F(t,r,e,n,a,u){return(0,v.h)(t,r).then(i=>{if(i)if(i.chat===a){var s=(0,v.c)(e,n,i,u);if(s){var o=s.updatedAck,c=s.updatedReceipt;return t.receipts.put((0,v.q)(c)).then(()=>o)}__LOG__(2)`updateReceiptInTransaction ack for ${r} irrelevant`}else __LOG__(3)`updateReceiptInTransaction wrong chat`;else __LOG__(3)`updateReceiptInTransaction no receipt for msg ${r}`})}function H(t,r,e,n){var a=Array.from(e).map(t=>({participant:t,ts:n}));return(0,M.f)("markSenderBackfillMessageSent",e=>(0,O.a)(e,"rw",["receipts"],e=>F(e,t,_.a.CLOCK,_.a.SENDER_BACKFILL_SENT,r,a))).then(()=>{})}function J(t,r,e){return(0,o.h)(t,r).then(r=>K(t,r,[e]).then(t=>{if(t&&1===t.dbMsgs.length)return{type:"chat",dbChat:t.dbChat,dbGroup:t.dbGroup,dbMsg:t.dbMsgs[0]}}))}function K(t,r,e){if(!r)return __LOG__(3)`Ignoring acks for non-existent chat`,(0,f.e)();var n=r.dbChat,a=r.dbGroup;return((0,c.maybeMutateChatMsgPreviewFromMsgs)(n,e)?(0,o.D)(t,n).then(()=>n):(0,f.e)(n)).then(t=>({type:"chat",dbChat:t,dbGroup:a,dbMsgs:e}))}function N(t,r){r&&("status"===r.type?(function(t,r){if(void 0!==r.receipts){var e=r.receipts;t.fireAndForget("event","statusReceiptsUpdated",{author:(0,G.b)(r.dbAuthor,(0,u.D)()),receipts:e})}else t.fireAndForget("event","statusAuthorMeUpdated",{author:(0,G.b)(r.dbAuthor,(0,u.D)())})})(t,r):(r.type,(function(t,r){r&&(r.dbMsgs?r.dbMsgs:[r.dbMsg]).forEach(e=>{t.fireAndForget("event","msgAcked",{chat:(0,p.a)(r.dbChat,r.dbGroup),msg:(0,h.c)(e)})})})(t,r)))}}}]);