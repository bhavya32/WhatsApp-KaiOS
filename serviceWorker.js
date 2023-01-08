"use strict";
(function (e) {
  var n = {};
  function t(c) {
    if (n[c]) return n[c].exports;
    var l = (n[c] = { i: c, l: !1, exports: {} });
    return e[c].call(l.exports, l, l.exports, t), (l.l = !0), l.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, c) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: c });
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
      var c = Object.create(null);
      if (
        (t.r(c),
        Object.defineProperty(c, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var l in e)
          t.d(
            c,
            l,
            function (n) {
              return e[n];
            }.bind(null, l)
          );
      return c;
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
    t((t.s = 0));
})([
  function (e, n) {
    function t() {
      self.removeEventListener("push", c),
        self.removeEventListener("pushsubscriptionchange", c),
        self.removeEventListener("notificationclick", l);
    }
    function c(e) {
      e.waitUntil(
        self.clients.matchAll({ includeUncontrolled: !0 }).then((e) => {
          if (!e.length)
            return (
              self.SwEventHandlers || self.importScripts("./backend.js"),
              self.SwEventHandlers.onPush(t)
            );
          e.forEach((e) => e.postMessage({ type: "receivedPush" }));
        })
      );
    }
    function l(e) {
      e.waitUntil(
        self.clients.matchAll().then((n) => {
          e.notification.close(), console.log("matchAll " + n.length);
          var t = e.notification.data;
          if ("handleCall" === t.action) {
            if (
              (self.SwEventHandlers || self.importScripts("./backend.js"),
              "reject" === e.action)
            )
              return self.SwEventHandlers.onCallRejected();
            self.SwEventHandlers.onCallAccepted(), (t.option = e.action);
          }
          0 === n.length
            ? self.clients.openApp({ msg: JSON.stringify(t) })
            : n[0].postMessage({
                type: "clickedNotification",
                msg: JSON.stringify(t),
              });
        })
      );
    }
    self.origin || (self.origin = "app://kaios.whatsapp.net"),
      console.log("ServiceWorker started"),
      self.addEventListener("push", c),
      self.addEventListener("pushsubscriptionchange", c),
      self.addEventListener("notificationclick", l),
      self.addEventListener("activate", (e) => {
        e.waitUntil(
          Promise.all([
            self.clients.claim(),
            caches
              .keys()
              .then((e) =>
                Promise.all(
                  e.map(
                    (e) => (
                      console.log("WA deleting cache " + e),
                      caches.delete(e).catch(() => {})
                    )
                  )
                )
              )
              .then(() => {}),
          ])
        );
      });
  },
]);
