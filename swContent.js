"use strict";
(function (e) {
  var n = {};
  function t(u) {
    if (n[u]) return n[u].exports;
    var r = (n[u] = { i: u, l: !1, exports: {} });
    return e[u].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, u) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: u });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var u = Object.create(null);
      if (
        (t.r(u),
        Object.defineProperty(u, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var r in e)
          t.d(
            u,
            r,
            function (n) {
              return e[n];
            }.bind(null, r)
          );
      return u;
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = "/"),
    t((t.s = 1));
})([
  ,
  function (e, n) {
    self.SwEventHandlers2 = {
      onUsrFetch(e) {
        e.respondWith(new Response("", { status: 404 }));
      },
      usrFetchResponse: (e, n) => new Response("", { status: 404 }),
    };
  },
]);
