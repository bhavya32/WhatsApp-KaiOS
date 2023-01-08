"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[96],{705:function(e,t,i){i.r(t),i.d(t,"addFavoriteGif",(function(){return l})),i.d(t,"addFavoriteGifsFromChat",(function(){return _})),i.d(t,"removeFavoriteGif",(function(){return c})),i.d(t,"removeFavoriteGifFromId",(function(){return G}));var r=i(26),n=i.n(r),a=i(88),o=i(12),d=i(89),f=i(87),v=i(14),u=i(238),s=i(90);t.default=(0,a.c)().step("saveToStorage",(function(){var e=n()((function*(e){var t=e.plaintextHash,i=e.request;(0,d.c)("addRecentGif");var r=i.plaintext,n=yield(0,u.l)(t);if(n&&null!=n.contentPath)__LOG__(2)`addRecentGif: gif already exists and has content.`;else{var a;if(n)a=n.relativePath;else{__LOG__(2)`addRecentGif: adding new recent gif`;var o=r.type||v.G;a=(0,f.f)(o),yield(0,u.b)(t,a)}if(yield(0,u.a)(t)){var s=yield g(a,r);if(s)return(0,u.r)(t,i,s)}else __LOG__(2)`addRecentGif: gif is not worth enough to be stored`}}));return function(t){return e.apply(this,arguments)}})()).finalStep("purgeDeleted",(e,t)=>{if(t.plaintextHash,(0,o.c)("event","refreshRecentGifs",{}),e&&e.length>0)return __LOG__(2)`addRecentGif: Purging media content ${e.length}`,Promise.all(e.map(e=>F(e).then(()=>(0,u.q)(e)))).then(()=>{})}).end();var l=(0,a.c)().finalStep("saveToStorage",(function(){var e=n()((function*(e){var t=e.plaintextHash,i=e.request;(0,d.c)("addFavoriteGif");var r=t;r||(r=yield(0,s.e)(i.plaintext));var n=yield(0,u.f)(r);if(n&&n.contentPath)__LOG__(2)`addFavoriteGif: gif already exists and has content.`;else{var a;if(__LOG__(2)`addFavoriteGif: adding new favorite gif`,n)a=n.relativePath;else{var l=i.plaintext.type||v.G;a=(0,f.f)(l),yield(0,u.c)(r,a,i)}var _=yield g(a,i.plaintext);if(!_)return(0,u.d)(r);var c=yield(0,u.o)(r,_,i);c&&(0,o.c)("event","addFavoriteGifs",{gifs:[c]})}}));return function(t){return e.apply(this,arguments)}})()).end(),_=(0,a.c)().finalStep("saveToStorage",(function(){var e=n()((function*(e){var t=e.msgIds,i=yield(0,u.i)(t);if(0!==i.length){var r=i.map(e=>{var t=e.plaintextHash,i=e.request,r=i.plaintext.type,n=(0,f.f)(r);return(0,u.c)(t,n,i).then(e=>{if(null!=e)return g(n,i.plaintext).then(e=>e?(0,u.o)(t,e,i):(0,u.d)(t));__LOG__(3)`addFavoriteGifsFromChat: didn't favorite ${t}`})});yield Promise.all(r).then(e=>{var t=e.filter(Boolean);t.length>0&&(0,o.c)("event","addFavoriteGifs",{gifs:t})})}else __LOG__(2)`addFavoriteGifsFromChat: no favorite to add`}));return function(t){return e.apply(this,arguments)}})()).end(),c=(0,a.c)().finalStep("removeFromStorage",(function(){var e=n()((function*(e){var t=e.plaintextHash;(0,d.c)("deleteFavouriteGif");var i=yield(0,u.f)(t);i&&i.contentPath?(yield F(i.contentPath),yield(0,u.d)(t),(0,o.c)("event","removeFavoriteGif",{plaintextHash:t})):__LOG__(2)`deleteFavouriteGif: gif does not exist exists and has content`}));return function(t){return e.apply(this,arguments)}})()).end(),G=(0,a.c)().finalStep("removeFromStorage",(function(){var e=n()((function*(e){var t=e.gifId,i=e.gifAttribution;(0,d.c)("deleteFavouriteGifFromId");var r=yield(0,u.g)(t,i);if(r&&r.contentPath){var n=r.contentPath,a=r.plaintextHash;yield F(n),yield(0,u.e)(t,i),(0,o.c)("event","removeFavoriteGif",{plaintextHash:a})}else __LOG__(2)`deleteFavouriteGif: gif does not exist exists and has content`}));return function(t){return e.apply(this,arguments)}})()).end();function g(e,t){return h.apply(this,arguments)}function h(){return(h=n()((function*(e,t){var i=(yield(0,o.e)("page","craftMediaFilesystemPath",{path:e})).path;yield F(i);var r=yield(0,o.e)("page","putBlobToPhoneStorage",{path:i,blob:t});return"ok"!==r.result?(__LOG__(3)`putGifBlobInStorage: There was an error when trying to put blob in storage`,null):r.path}))).apply(this,arguments)}function F(e){return(0,o.e)("page","deletePath",{path:e})}}}]);