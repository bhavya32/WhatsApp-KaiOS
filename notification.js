"use strict";
(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var u = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(u.exports, u, u.exports, n), (u.l = !0), u.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var u in e)
          n.d(
            r,
            u,
            function (t) {
              return e[t];
            }.bind(null, u)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/"),
    n((n.s = 471));
})({
  471: function (e, t, n) {
    e.exports = n(472);
  },
  472: function (e, t, n) {
    self.bootstrapQueue = new Promise((e) => {
      var t = !1,
        n = (n, r) => {
          navigator.mozSetMessageHandler(n, (u) => {
            if (t) self.WARN && __LOG__(3)`bootstrapQueue dropping ${n}`;
            else {
              t = !0;
              try {
                self.LOG && __LOG__(2)`bootstrapQueue handler for ${n}`,
                  e(r(u));
              } catch (t) {
                e(), self.ERROR && __LOG__(4)`bootstrapQueue error in ${n}`;
              }
            }
          });
        };
      n("serviceworker-notification", (e) => ({
        type: "notification",
        data: JSON.parse(e.msg),
      })),
        n("activity", (e) => ({ type: "activity", source: e.source }));
    });
  },
});
