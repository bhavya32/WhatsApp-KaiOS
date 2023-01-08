"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[28],{614:function(r,e,t){t.r(e),t.d(e,"setProfilePictureJob",(function(){return B})),t.d(e,"setGroupPictureJob",(function(){return F})),t.d(e,"resendProfilePicture",(function(){return J}));var n=t(26),u=t.n(n),i=t(7),a=t(12),o=t(70),v=t(88),f=t(6),c=t(11),l=t(72),d=t(89),s=t(30),p=t(28),m=t(29);function I(r){var e=(0,m.a)(r,"field");if(!e.success)return e;var t=(0,m.e)(r,"name");if(!t.success)return t;var n=(0,m.e)(r,"reason");return n.success?(0,p.c)({name:t.value,reason:n.value}):n}var E=t(208);function b(r,e){var t=(0,m.a)(r,"iq");if(!t.success)return t;var n=(0,m.k)(r,"error");if(!n.success)return n;var u=(function(r,e){var t=(0,m.a)(r,"iq");if(!t.success)return t;var n=(0,E.b)(e,["id"]);if(!n.success)return n;var u=(0,m.l)(m.e,r,"id",n.value);if(!u.success)return u;var i=(0,E.b)(e,["to"]);if(!i.success)return i;var a=(0,m.l)(m.e,r,"from",i.value);if(!a.success)return a;var o=(0,m.l)(m.e,r,"type","error");return o.success?(0,p.c)({type:o.value}):o})(r,e);if(!u.success)return u;var i=(function(r){var e=(function(r){var e=(0,m.a)(r,"error");if(!e.success)return e;var t=(0,m.l)(m.e,r,"text","bad-request");if(!t.success)return t;var n=(0,m.l)(m.e,r,"code","400");return n.success?(0,p.c)({text:t.value,code:n.value}):n})(r);if(e.success)return(0,p.c)({name:"IQErrorBadRequest",value:e.value});var t=(function(r){var e=(0,m.a)(r,"error");if(!e.success)return e;var t=(0,m.l)(m.e,r,"text","not-authorized");if(!t.success)return t;var n=(0,m.l)(m.e,r,"code","401");return n.success?(0,p.c)({text:t.value,code:n.value}):n})(r);if(t.success)return(0,p.c)({name:"IQErrorNotAuthorized",value:t.value});var n=(function(r){var e=(0,m.a)(r,"error");if(!e.success)return e;var t=(0,m.q)(r,"field",I);if(!t.success)return t;var n=(0,m.l)(m.e,r,"text","not-acceptable");if(!n.success)return n;var u=(0,m.l)(m.e,r,"code","406");return u.success?(0,p.c)({text:n.value,code:u.value,field:t.value}):u})(r);if(n.success)return(0,p.c)({name:"IQErrorNotAcceptable",value:n.value});var u=(function(r){var e=(0,m.a)(r,"error");if(!e.success)return e;var t=(0,m.l)(m.e,r,"text","rate-overlimit");if(!t.success)return t;var n=(0,m.l)(m.e,r,"code","429");return n.success?(0,p.c)({text:t.value,code:n.value}):n})(r);if(u.success)return(0,p.c)({name:"IQErrorRateOverlimit",value:u.value});var i=(function(r){var e=(0,m.a)(r,"error");if(!e.success)return e;var t=(0,m.l)(m.e,r,"text","internal-server-error");if(!t.success)return t;var n=(0,m.l)(m.e,r,"code","500");return n.success?(0,p.c)({text:t.value,code:n.value}):n})(r);if(i.success)return(0,p.c)({name:"IQErrorInternalServerError",value:i.value});var a=(function(r){var e=(0,m.a)(r,"error");if(!e.success)return e;var t=(0,m.l)(m.e,r,"text","feature-not-implemented");if(!t.success)return t;var n=(0,m.l)(m.e,r,"code","501");return n.success?(0,p.c)({text:t.value,code:n.value}):n})(r);if(a.success)return(0,p.c)({name:"IQErrorFeatureNotImplemented",value:a.value});var o=(function(r){var e=(0,m.a)(r,"error");if(!e.success)return e;var t=(0,m.l)(m.e,r,"text","service-unavailable");if(!t.success)return t;var n=(0,m.l)(m.e,r,"code","503");return n.success?(0,p.c)({text:t.value,code:n.value}):n})(r);return o.success?(0,p.c)({name:"IQErrorServiceUnavailable",value:o.value}):(0,m.j)(r,["IQErrorBadRequest","IQErrorNotAuthorized","IQErrorNotAcceptable","IQErrorRateOverlimit","IQErrorInternalServerError","IQErrorFeatureNotImplemented","IQErrorServiceUnavailable"],[e,t,n,u,i,a,o])})(n.value);return i.success?(0,p.c)(Object.assign({},u.value,{o:i.value})):i}function h(r,e){var t=(0,m.a)(r,"iq");if(!t.success)return t;var n=(0,E.b)(e,["id"]);if(!n.success)return n;var u=(0,m.l)(m.e,r,"id",n.value);if(!u.success)return u;var i=(0,E.b)(e,["to"]);if(!i.success)return i;var a=(0,m.l)(m.e,r,"from",i.value);if(!a.success)return a;var o=(0,m.l)(m.e,r,"type","result");return o.success?(0,p.c)({type:o.value}):o}function S(r,e){var t=(0,m.a)(r,"iq");if(!t.success)return t;var n=h(r,e);return n.success,n}function x(r,e){var t=(0,m.a)(r,"iq");if(!t.success)return t;var n=(0,m.k)(r,"picture");if(!n.success)return n;var u=(0,m.e)(n.value,"id");if(!u.success)return u;var i=h(r,e);return i.success?(0,p.c)(Object.assign({pictureId:u.value},i.value)):i}var q=t(378);t(254);var Q=t(193),O=t(294),P=t(4);function R(r){var e=r.pictureId,t=r.pictureType,n=r.pictureElementValue;return(0,Q.a)("picture",{id:(0,q.a)(P.b,e),type:(0,q.a)(P.b,t)},n)}function g(r){var e=r.pictureArgs,t=r.hasIqWebSet;return(function(r,e){var t=(function(r){var e=r.iqTarget;return(function(r){var e=(0,Q.a)("iq",{to:P.l});return(0,O.a)(r,e)})((function(r){var e=(0,Q.a)("iq",{id:(0,P.u)(),type:"set"});return(0,O.a)(r,e)})((0,Q.a)("iq",{xmlns:"w:profile:picture",target:(0,q.a)(P.d,e)})))})(e);return(0,O.a)(r,t)})((0,Q.a)("iq",{web:(0,q.b)("set",t)},(function(r,e,t,n){if(null==e)return[];var u=e.length;if(u<0)throw new Error("expected at least 0 children, but found "+u);if(u>2)throw new Error("expected at most 2 children, but found "+u);return e.map(e=>r(e))})(R,e)),r)}var w=t(375),y=t(376);function A(r,e){return N.apply(this,arguments)}function N(){return(N=u()((function*(r,e){var t=g(r),n=yield(0,s.k)(t,e),u=x(n,t);if(u.success)return{name:"SetResponseSuccessSet",value:u.value};var i=S(n,t);if(i.success)return{name:"SetResponseSuccessDelete",value:i.value};var a=b(n,t);if(a.success)return{name:"SetResponseError",value:a.value};throw new w.a((0,y.a)("Set",{SuccessSet:u,SuccessDelete:i,Error:a}))}))).apply(this,arguments)}var j=t(118),U=t(86),z={400:(0,l.d)("bad-request"),406:(0,l.d)("bad-size-or-format"),429:(0,l.d)("unknown"),500:(0,l.d)("server-error"),501:(0,l.d)("server-error"),503:(0,l.d)("server-error")},G=Object.assign({},z,{401:(0,l.d)("not-yourself")}),_=Object.assign({},z,{401:(0,l.d)("not-in-group")}),B=(0,v.c)().finalStep("setProfilePicture",r=>{var e=r.picture;return D(f.t.get(),e).then(r=>{if(r){var e=r.o.value.code;return G[e]}}).catch((0,j.a)(U.b,()=>(0,l.d)("disconnected")))}).end(),F=(0,v.c)().finalStep("setGroupPicture",r=>D(r.jid,r.picture).then(r=>{if(r){var e=r.o.value.code;return _[e]}}).catch((0,j.a)(U.b,()=>(0,l.d)("disconnected")))).end();function M(r,e,t){return W.apply(this,arguments)}function W(){return(W=u()((function*(r,e,t){var n=null!==e?new Uint8Array(yield(0,c.h)(e)):null;return A({pictureArgs:n?[{pictureElementValue:n}]:void 0,hasIqWebSet:!1,iqTarget:(0,i.p)(r)},t)}))).apply(this,arguments)}function D(r,e){return M(r,e,{timeoutSeconds:20}).then(t=>{if(__LOG__(2)`sendProfilePicture`,"SetResponseError"===t.name)return WAM.log("regular",468,void 0,[4,3,null==e?void 0:e.size,1,0,3]),t.value;WAM.log("regular",468,void 0,[4,3,null==e?void 0:e.size,1,0,1]);var n=t.value.pictureId;return null!=e&&null!=n?((0,d.c)("image canvas"),f.f.set("passed"),(0,a.e)("event","profilePicReceived",{image:e}).then(t=>{var u=t.croppedImage,i=parseInt(n,10);return(0,o.getProfilePicTable)().storeThumb(r,{photoId:i,icon:u,thumb:e}).then(()=>{(0,a.c)("event","avatarsUpdated",{changed:[{jid:r,photoId:i}]})})})):(0,o.getProfilePicTable)().storeEmptyThumb(r).then(()=>{(0,a.c)("event","avatarsUpdated",{changed:[{jid:r,photoId:null}]})})})}function J(){return(0,o.getProfilePicTable)().getThumb(f.t.get()).then(r=>M(f.t.get(),(null==r?void 0:r.image)||null).then(r=>{if(!r){var e=r.o.value.code;return G[e]}}))}}}]);