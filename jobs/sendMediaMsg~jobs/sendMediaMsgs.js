"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[27],{571:function(e,t,i){i.d(t,"a",(function(){return b})),i.d(t,"e",(function(){return z})),i.d(t,"c",(function(){return x})),i.d(t,"d",(function(){return k})),i.d(t,"b",(function(){return M}));var r=i(26),n=i.n(r),u=i(9),o=i(119),a=i(39),s=i(22),d=i(513),c=i(93),g=i(276),f=i(2),m=i(37),l=i.n(m),h=i(312),v=i(12),p=i(117),y=i(16);function b(e,t){return w.apply(this,arguments)}function w(){return(w=n()((function*(e,t){var i=e.request,r=e.dbMsg.id,n=yield(0,s.c)(r,t,i.preview||null);if(n){var u,m=n.mediaId;if("video"===i.type||"gif"===i.type){var l={frame:yield(0,o.getChunkTable)().storeFrame(m,i.frame),rotation:i.rotation};yield(0,s.sc)(m,l)}if("ok"===(u=(0,g.a)(i)?yield(0,g.e)(n,i.filepath):yield(0,c.h)(r,m,i.plaintext,"dont-save")).type)"gif"===i.type&&(yield(0,a.b)().waitUntilPersisted(y.e.addRecentGif(t,i))),yield(0,a.b)().waitUntilPersisted(y.e.uploadMedia(r,e.to,e.origin));else{var h,b;switch(u.type,u.error){case"gone":h=f.a.CONTENT_GONE,b={type:"error",error:"noLongerExists"};break;case"not-enough-space":h=f.a.CONTENT_GONE,b={type:"error",error:"notEnoughUploadSpace"};break;default:u.error,h=f.a.FAILED,b={type:"error",error:"unknown"}}(0,p.h)(e,{thumbSize:M(i),origin:e.origin}),yield(0,d.e)(r,h),(0,v.c)("event","msgMediaStatusUpdated",{msgId:r,mediaStatus:b})}}else __LOG__(2)`sendMediaMsg msg removed while processing`}))).apply(this,arguments)}function z(e,t,i,r){return(0,u.L)(e.chat.jid,{user:n=>({type:"user",jid:n,dbMsg:e.dbMsg,request:i,requestIdx:r,to:t}),group:n=>({type:"group",jid:n,dbMsg:e.dbMsg,request:i,requestIdx:r,to:t})})}function x(e,t,i,r,n){switch(t.type){case"voice":return(0,h.r)(e,i,r,{duration:t.duration,size:t.plaintext.size,mimetype:t.plaintext.type,waveform:t.waveform});case"image":return(0,h.h)(e,i,r,n,{bg:t.bg,width:t.width,height:t.height,text:t.caption,size:t.plaintext.size},t.preview,null,t.viewOnce?"active":void 0,t.uploadSource);case"gif":return(0,h.e)(e,i,r,n,{text:t.caption,bg:t.bg,width:t.width,height:t.height,duration:t.duration,gifAttribution:t.gifAttribution,size:t.plaintext.size,mimetype:t.plaintext.type},t.preview);case"video":return(0,h.q)(e,i,r,n,{text:t.caption,bg:t.bg,width:t.width,height:t.height,duration:t.duration,size:t.plaintext.size,mimetype:t.plaintext.type},t.preview,null,t.viewOnce?"active":void 0,t.uploadSource);case"audio":return(0,h.a)(e,i,r,{duration:t.duration,size:t.plaintext.size,mimetype:t.plaintext.type});case"text/vcard":return(0,h.b)(e,i,r,{mimetype:"text/vcard",fileName:t.filename,isVCard:!0,size:t.plaintext.size,contactsCount:t.contactsCount,uiVCards:t.uiVCards},null);default:return t.type,(0,h.b)(e,i,r,{fileName:t.filename,size:t.plaintext.size,pages:t.pages,mimetype:t.mimetype},t.preview||null,void 0)}}function k(e,t,i){switch(t.type){case"image":return(0,h.k)(e,i,{text:t.caption,height:t.height,width:t.width,bg:t.bg,size:t.plaintext.size},t.preview);case"video":return(0,h.m)(e,i,{text:t.caption,bg:t.bg,width:t.width,height:t.height,duration:t.duration,size:t.plaintext.size,mimetype:t.plaintext.type},t.preview);case"gif":return(0,h.j)(e,i,{text:t.caption,bg:t.bg,width:t.width,height:t.height,duration:t.duration,gifAttribution:t.gifAttribution,size:t.plaintext.size,mimetype:t.plaintext.type},t.preview);case"voice":return(0,h.n)(e,i,{duration:t.duration,size:t.plaintext.size,mimetype:t.plaintext.type,waveform:t.waveform,backgroundColor:t.backgroundColor});default:return(0,l.a)(t.type)}}function M(e){if("gif"===e.type||"image"===e.type||"video"===e.type)return e.preview.byteLength}}}]);