"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [176],
  {
    619: function (e, t, r) {
      r.r(t),
        r.d(t, "queryQRCode", function () {
          return c;
        });
      var n = r(577),
        s = r(28),
        u = r(6);
      function c() {
        var e = u.u.get();
        return null != e
          ? Promise.resolve((0, s.c)(e))
          : (0, n.a)({
              hasIqToSwhatsappnet: !0,
              qrType: "contact",
              qrAction: "get",
            }).then((e) => {
              if ("SetContactSubscribeResponseSuccess" === e.name) {
                var t = e.value.qrCode;
                return u.u
                  .set(t)
                  .catch(() => {})
                  .then(() => (0, s.c)(t));
              }
              return e.name, (0, s.b)();
            });
      }
    },
  },
]);
