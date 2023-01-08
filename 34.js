"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [34],
  {
    618: function (t, e, n) {
      n.r(e),
        n.d(e, "onRegistrationSms", function () {
          return l;
        }),
        n.d(e, "stopSmsPoller", function () {
          return d;
        });
      var s = n(249),
        i = n(21),
        r = {},
        o = !1,
        _ = null;
      function a(t) {
        _ && _.handleSms(t.message);
      }
      function l(t) {
        __LOG__(2)`onRegistrationSms: start`,
          _ && (__LOG__(2)`onRegistrationSms: stopping smsListener`, _.stop()),
          o ||
            (__LOG__(2)`onRegistrationSms: adding mozMobileMessage listener`,
            navigator.mozMobileMessage.addEventListener("received", a),
            (o = !0));
        try {
          __LOG__(2)`onRegistrationSms: creating new smsListener`,
            (_ = new (class {
              constructor(t) {
                (this.checkedUntil = Date.now()),
                  (this.loop = new s.a({
                    name: "SmsPoller",
                    timer: {
                      jitter: 0,
                      algo: { type: "constant", delay: 2e3 },
                    },
                    code: (t) => this.readSms(t),
                  })),
                  (this.Eq = t);
              }
              readSms(t) {
                var e = this.checkedUntil,
                  n = navigator.mozMobileMessage.getMessages(void 0, !0);
                return (
                  __LOG__(2)`Reading SMS from the phone until ${new Date(e)}`,
                  (function (t, e) {
                    return new Promise((n) => {
                      (t.onsuccess = () => {
                        if (t.result) {
                          var s = e(t.result);
                          s !== r ? n(s) : t.continue();
                        } else t.done ? n(null) : t.continue();
                      }),
                        (t.onerror = function (t) {
                          __LOG__(4)`Failed to read SMS: ${t}`, n(null);
                        });
                    });
                  })(n, (t) => {
                    if ("sms" === t.type)
                      return t.timestamp > e
                        ? ((this.checkedUntil = t.timestamp), u(t) || r)
                        : null;
                  }).then((e) => {
                    e && t(e);
                  })
                );
              }
              handleSms(t) {
                __LOG__(2)`handleSms: got notified about sms`;
                var e = u(t);
                e &&
                  (__LOG__(2)`handleSms: detected code`,
                  this.loop.endWithValue(e));
              }
              start() {
                this.loop.start(),
                  this.loop.promise().then((t) => {
                    this === _ && ((_ = null), null != t && this.Eq(t));
                  });
              }
              stop() {
                this === _ && (_ = null), this.loop.endWithValue(null);
              }
            })(t)),
            __LOG__(2)`onRegistrationSms: starting smsListener`,
            _.start();
        } catch (t) {
          __LOG__(4)`Failed to start smsListener ${t}`;
        }
      }
      function d() {
        __LOG__(2)`stopSmsPoller: start`,
          _ && (__LOG__(2)`stopSmsPoller: stopping smsListener`, _.stop()),
          __LOG__(2)`stopSmsPoller: removing mozMobileMessage listener`,
          navigator.mozMobileMessage.removeEventListener("received", a);
      }
      function u(t) {
        if ("sms" === t.type)
          if ("string" == typeof t.body) {
            var e = -1 !== t.body.indexOf("WhatsApp"),
              n = /[0-9]{3}-[0-9]{3}/.exec(t.body),
              s = new RegExp(
                `(?:WhatsApp|${(0, i.k)(1110)}).*?([0-9]{3})-([0-9]{3})`
              ).exec(t.body);
            if (s) {
              __LOG__(
                2
              )`Received SMS during registration and could extract the code from it`;
              var r = s[1].split(""),
                o = s[2].split("");
              return [
                parseInt(r[0], 10),
                parseInt(r[1], 10),
                parseInt(r[2], 10),
                parseInt(o[0], 10),
                parseInt(o[1], 10),
                parseInt(o[2], 10),
              ];
            }
            if (e) {
              var _ = n
                ? "also found a matching code"
                : "but did not find a valid code";
              __LOG__(
                2
              )`Received SMS during registration including [WhatsApp] keyword, ${_}. But the full regexp did not match`;
            } else __LOG__(2)`Received non-relevant SMS during registration`;
          } else
            __LOG__(
              2
            )`Received SMS during registration but body is not a string: ${typeof t.body}`;
        else
          __LOG__(2)`Received SMS during registration but with type: ${t.type}`;
      }
    },
  },
]);
