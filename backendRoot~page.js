"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [17],
  [
    ,
    ,
    function (n, t, r) {
      r.d(t, "e", function () {
        return u;
      }),
        r.d(t, "f", function () {
          return o;
        }),
        r.d(t, "d", function () {
          return a;
        }),
        r.d(t, "h", function () {
          return s;
        }),
        r.d(t, "g", function () {
          return c;
        }),
        r(91);
      var e = r(9);
      r.d(t, "b", function () {
        return e.a;
      }),
        r.d(t, "c", function () {
          return e.b;
        });
      var i = r(15);
      r.d(t, "a", function () {
        return i.a;
      });
      var u = {
          IMAGE: 7,
          PTT: 8,
          AUDIO: 9,
          VIDEO: 10,
          GIF: 11,
          DOCUMENT: 18,
          RICH_HSM: 19,
          STICKER: 26,
        },
        o = Object.assign(
          {
            TEXT: 1,
            FUTUREPROOF: 2,
            GROUP_NOTIFICATION: 3,
            REVOKED: 4,
            CIPHERTEXT: 5,
            IDENTITY_CHANGE: 6,
          },
          u,
          {
            VCARD: 12,
            LOCATION: 13,
            EXTENDED_TEXT: 14,
            BUSINESS_NOTIFICATION: 15,
            GROUP_INVITE: 16,
            MD_PLACEHOLDER: 17,
            HSM_BUTTON_REPLY: 20,
            CONTACT_BLOCK_CHANGE: 23,
            EPHEMERAL: 24,
            PRIVACY_CHANGE: 25,
            POLL: 27,
            REACTION: 28,
            KEEP_IN_CHAT: 29,
            POLL_UPDATE: 30,
          }
        ),
        a = { QUICK_REPLY: 1, URL: 2, CALL: 3 };
      function s(n) {
        return void 0 !== n.superadmins;
      }
      var c = { TC_RECEIVED: "1", TC_SENDER: "2" };
    },
    function (n, t, r) {
      r.d(t, "d", function () {
        return i;
      }),
        r.d(t, "b", function () {
          return u;
        }),
        r.d(t, "f", function () {
          return o;
        }),
        r.d(t, "a", function () {
          return a;
        }),
        r.d(t, "c", function () {
          return s;
        }),
        r.d(t, "l", function () {
          return h;
        }),
        r.d(t, "z", function () {
          return v;
        }),
        r.d(t, "i", function () {
          return p;
        }),
        r.d(t, "h", function () {
          return g;
        }),
        r.d(t, "p", function () {
          return _;
        }),
        r.d(t, "B", function () {
          return m;
        }),
        r.d(t, "k", function () {
          return y;
        }),
        r.d(t, "w", function () {
          return b;
        }),
        r.d(t, "g", function () {
          return w;
        }),
        r.d(t, "j", function () {
          return k;
        }),
        r.d(t, "D", function () {
          return E;
        }),
        r.d(t, "r", function () {
          return S;
        }),
        r.d(t, "s", function () {
          return A;
        }),
        r.d(t, "E", function () {
          return O;
        }),
        r.d(t, "y", function () {
          return I;
        }),
        r.d(t, "o", function () {
          return C;
        }),
        r.d(t, "t", function () {
          return T;
        }),
        r.d(t, "u", function () {
          return M;
        }),
        r.d(t, "v", function () {
          return $;
        }),
        r.d(t, "e", function () {
          return N;
        }),
        r.d(t, "A", function () {
          return P;
        }),
        r.d(t, "F", function () {
          return D;
        }),
        r.d(t, "n", function () {
          return L;
        }),
        r.d(t, "m", function () {
          return G;
        }),
        r.d(t, "C", function () {
          return x;
        }),
        r.d(t, "x", function () {
          return R;
        }),
        r.d(t, "q", function () {
          return j;
        });
      var e = r(33),
        i = 3600,
        u = 24 * i,
        o = 7 * u,
        a = 1e3 * i * 24,
        s = 1 << 31,
        c = ~s,
        f = s + 1,
        l = { time: 0, day: -4 },
        d = 0;
      function h() {
        return d;
      }
      function v(n) {
        d = n;
      }
      function p(n) {
        var t = 0 | n;
        return Math.max(f, Math.min(t, c));
      }
      function g(n) {
        return "number" != typeof n ? ((0, e.g)(n) ? f : c) : p(n);
      }
      function _(n) {
        return n < f || n > c;
      }
      function m(n, t) {
        var r = E(),
          e = Math.max(n + t - r, 0);
        return Math.min(1e3 * e, ~(1 << 31));
      }
      function y(n, t) {
        var r = null != t ? t : E();
        return p(Math.ceil(r + Math.max(n, 0)));
      }
      function b(n, t) {
        var r = null != t ? t : E();
        return p(Math.ceil(r - Math.max(n, 0)));
      }
      function w(n) {
        var t = Math.max(n - E(), 0);
        return Math.min(1e3 * t, ~(1 << 31));
      }
      function k(n) {
        var t = w(n);
        return new Promise((n) => {
          setTimeout(n, t);
        });
      }
      function E() {
        return p(Date.now() / 1e3 - d);
      }
      function S() {
        return p(new Date().setHours(0, 0, 0, 0) / 1e3 - d);
      }
      function A(n) {
        return p(x(n).setHours(0, 0, 0, 0) / 1e3 - d);
      }
      function O() {
        return Date.now() - 1e3 * d;
      }
      function I(n) {
        return Math.max(n - E(), 0);
      }
      function C(n) {
        return I(n) > 0;
      }
      function T() {
        return performance.now();
      }
      function M(n) {
        return Math.floor(performance.now() - n);
      }
      function $(n, t) {
        return n < t ? n : t;
      }
      var N = class {
        constructor() {
          var n = T();
          (this.R = n), (this.S = n);
        }
        reset() {
          this.S = T();
        }
        elapsed() {
          return M(this.S);
        }
        cumulative() {
          return M(this.R);
        }
      };
      function P(n) {
        return Math.max(E() - n, 0);
      }
      function D() {
        return new Date();
      }
      function L(n, t, r) {
        return Math.abs(n - t) <= r;
      }
      function G(n, t) {
        return L(E(), n, t);
      }
      function x(n) {
        return new Date(1e3 * n);
      }
      function R(n, t) {
        if (Math.abs(n - t) > u) return !1;
        var r = l.time === n ? l.day : x(n + d).getDay(),
          e = l.time === t ? l.day : x(t + d).getDay();
        return (l.time = t), (l.day = e), r === e;
      }
      function j(n) {
        return n - E() <= u;
      }
    },
    ,
    function (n, t, r) {
      r.d(t, "i", function () {
        return o;
      }),
        r.d(t, "f", function () {
          return a;
        }),
        r.d(t, "c", function () {
          return s;
        }),
        r.d(t, "e", function () {
          return c;
        }),
        r.d(t, "g", function () {
          return f;
        }),
        r.d(t, "l", function () {
          return l;
        }),
        r.d(t, "h", function () {
          return d;
        }),
        r.d(t, "k", function () {
          return h;
        }),
        r.d(t, "j", function () {
          return v;
        }),
        r.d(t, "a", function () {
          return p;
        }),
        r.d(t, "d", function () {
          return g;
        });
      var e = r(135);
      e.a.Promise.PSD && (e.a.Promise.PSD.onunhandled = () => {});
      var i = new Set(),
        u = !1;
      function o(n) {
        return Promise.resolve(n);
      }
      function a(n) {
        return n.reduce(
          (n, t, r) => n.then((n) => t(r).then((t) => (n.push(t), n))),
          c([])
        );
      }
      function s(n) {
        return e.a.Promise.all(n);
      }
      function c(n) {
        return e.a.Promise.resolve(n);
      }
      function f() {
        return Array.from(i).map((n) => n.name);
      }
      function l(n, t) {
        return n.where(t);
      }
      function d(n, t) {
        return n.orderBy(t);
      }
      function h(n, t) {
        return n.where(t);
      }
      function v(n, t) {
        return n.where(t);
      }
      function p() {
        (u = !0),
          Array.from(i).forEach((n) => {
            n.close();
          });
      }
      function g(n) {
        return o(e.a.exists(n));
      }
      (t.b = class {
        constructor(n) {
          var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            r = n(),
            e = r.name;
          if (u)
            throw new Error(
              `new DexieTable("${e}", ...) called after all tables disabled`
            );
          (this.name = e), (this.stores = r), t && this.open();
        }
        open() {
          this.stores.open(), i.add(this);
        }
        close() {
          this.stores.close(), i.delete(this);
        }
        transact(n, t, r) {
          return o(
            this.stores.transaction(
              n,
              t.map((n) => this.stores[n]),
              r
            )
          );
        }
      }),
        e.a.addons.push(function (n) {
          n.Collection.prototype.filterIdx = function (n) {
            var t, r, e, i;
            return (
              (r = function (t) {
                return n(t.value, t.key);
              }),
              ((t = this._ctx).filter =
                ((e = t.filter),
                (i = r),
                e
                  ? i
                    ? function () {
                        return (
                          e.apply(this, arguments) && i.apply(this, arguments)
                        );
                      }
                    : e
                  : i)),
              this
            );
          };
        });
    },
    function (n, t, r) {
      r.d(t, "t", function () {
        return f;
      }),
        r.d(t, "C", function () {
          return l;
        }),
        r.d(t, "a", function () {
          return d;
        }),
        r.d(t, "h", function () {
          return h;
        }),
        r.d(t, "J", function () {
          return v;
        }),
        r.d(t, "P", function () {
          return p;
        }),
        r.d(t, "F", function () {
          return g;
        }),
        r.d(t, "Q", function () {
          return _;
        }),
        r.d(t, "b", function () {
          return m;
        }),
        r.d(t, "I", function () {
          return y;
        }),
        r.d(t, "U", function () {
          return b;
        }),
        r.d(t, "V", function () {
          return w;
        }),
        r.d(t, "k", function () {
          return k;
        }),
        r.d(t, "E", function () {
          return E;
        }),
        r.d(t, "i", function () {
          return S;
        }),
        r.d(t, "g", function () {
          return A;
        }),
        r.d(t, "m", function () {
          return O;
        }),
        r.d(t, "r", function () {
          return I;
        }),
        r.d(t, "L", function () {
          return C;
        }),
        r.d(t, "l", function () {
          return T;
        }),
        r.d(t, "o", function () {
          return M;
        }),
        r.d(t, "D", function () {
          return $;
        }),
        r.d(t, "y", function () {
          return N;
        }),
        r.d(t, "v", function () {
          return P;
        }),
        r.d(t, "u", function () {
          return D;
        }),
        r.d(t, "w", function () {
          return L;
        }),
        r.d(t, "O", function () {
          return G;
        }),
        r.d(t, "K", function () {
          return x;
        }),
        r.d(t, "f", function () {
          return R;
        }),
        r.d(t, "M", function () {
          return j;
        }),
        r.d(t, "e", function () {
          return B;
        }),
        r.d(t, "H", function () {
          return U;
        }),
        r.d(t, "j", function () {
          return q;
        }),
        r.d(t, "R", function () {
          return K;
        }),
        r.d(t, "T", function () {
          return F;
        }),
        r.d(t, "S", function () {
          return z;
        }),
        r.d(t, "p", function () {
          return H;
        }),
        r.d(t, "c", function () {
          return W;
        }),
        r.d(t, "G", function () {
          return V;
        }),
        r.d(t, "n", function () {
          return J;
        }),
        r.d(t, "A", function () {
          return Y;
        }),
        r.d(t, "z", function () {
          return X;
        }),
        r.d(t, "B", function () {
          return Z;
        }),
        r.d(t, "N", function () {
          return Q;
        }),
        r.d(t, "s", function () {
          return nn;
        }),
        r.d(t, "d", function () {
          return tn;
        }),
        r.d(t, "x", function () {
          return rn;
        }),
        r.d(t, "q", function () {
          return en;
        }),
        r.d(t, "X", function () {
          return un;
        }),
        r.d(t, "Z", function () {
          return on;
        }),
        r.d(t, "W", function () {
          return an;
        }),
        r.d(t, "Y", function () {
          return sn;
        });
      var e = r(15),
        i = r(203),
        u = r(3),
        o = r(77),
        a = (r(14), null),
        s = null,
        c = [],
        f = ln(i.c),
        l = ln("pushname", ""),
        d = ln("about", null),
        h = ln(i.b, !1),
        v = fn("status", function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return Object.assign({}, t, n);
        }),
        p = ln("usyncPause", null),
        g = ln("routingInfo", { edgeInfo: null }),
        _ = ln("verboseSecurity", !1),
        m = fn("abProps", function () {
          var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return n;
        }),
        y = fn("serverProps", function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e.c;
          return Object.assign({}, e.c, t, n);
        }),
        b = ln("waInfo"),
        w = ln("waServerInfo"),
        k = fn("generalSettings", function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e.d;
          return Object.assign({}, e.d, t, n);
        }),
        E = ln("regStore2", { type: "UNINITIALIZED" }),
        S = cn(
          "deviceInfo",
          (n) =>
            n &&
            new (class {
              constructor(n) {
                var t;
                (this.mcc = n.carrier.mcc),
                  (this.mnc = n.carrier.mnc),
                  (this.roaming = n.carrier.roaming),
                  (this.lg = n.lg),
                  (this.lc = n.lc),
                  (this.hour12 = null == (t = n.hour12) || t);
                var r = /^(\S+) \{(.+)\}$/.exec(n.os.version),
                  e = r ? `${r[1]}--${r[2]}` : n.os.version;
                (this.osVersion = e),
                  (this.manufacturer = n.hardware),
                  (this.device = n.device),
                  (this.osBuild = n.os.build);
                var i = dn(e),
                  u = dn(n.os.build),
                  o = dn(n.hardware),
                  a = dn(n.device);
                (this.userAgent = `WhatsApp/2.2245.7 KaiOS/${i}+${u} Device/${o}+${a}`),
                  (this.height = n.height),
                  (this.width = n.width);
              }
            })(n)
        ),
        A = ln(i.a, 0),
        O = ln("hwMemory", null),
        I = ln("lastLogSent", u.c),
        C = e.p.reduce((n, t) => ((n[t] = ln("Task." + t)), n), {}),
        T = ln("hadSuccessfulSync", !1),
        M = ln("hasVoip", !1),
        $ = ln("registrationAlert", null),
        N = ln("previousDeltaSyncs", []),
        P = ln("phonebookRevision", -1),
        D = ln("myQRCode", null),
        L = ln("phonebookStats", {}),
        G = ln("twoFactor", { status: "disabled" }),
        x = ln("storageStats", { lastUpdated: void 0 }),
        R = ln("avatarImageDialog", null),
        j = ln(i.d, null),
        B = ln("appBuild", null),
        U = ln("serverExp", null),
        q = ln("ephemeralNuxSeen", !1),
        K = ln("viewOnceNuxSeen", !1),
        F = ln("viewOnceV2NuxSeen", !1),
        z = ln("viewOnceReceiverNuxSeen", !1),
        H = ln("keepInChatNuxSeen", !1),
        W = ln("adminRevokeNuxSeen", !1),
        V = ln("senderRevokeNuxSeen", !1),
        J = ln("hasUserNotice", !1),
        Y = ln("privateStatsId", null),
        X = ln("privateStatsBlockedToken", null),
        Z = ln("privateStatsIds", {}),
        Q = ln("tosGatingAcceptanceStatus", {
          status: "unknown",
          forcedFetchIteration: 0,
        }),
        nn = ln("loggerLoggingToTableStartTime", null),
        tn = fn("advCompanionSyncState", function () {
          var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return n;
        }),
        rn = ln("postUpdateHooks", null),
        en = ln("lang", null);
      function un(n) {
        if (a) throw new Error("initializeInfoStore called twice");
        return (
          __LOG__(2)`initializeInfoStore`,
          (a = n.readAllEntries().then(
            (t) => (
              c.forEach((r) => {
                r.attach(n, t);
              }),
              n
            )
          )).then((n) => {
            if (
              ((s = n),
              S.isDefined() && (0, o.h)(S.get().hour12),
              !f.isDefined())
            )
              return { mode: "reg" };
            var t = j.get();
            if (null != t) {
              if (t.until > Date.now() / 1e3 - A.get())
                return { mode: "tempBanned" };
              j.delete();
            }
            return h.get() ? { mode: "deleting" } : { mode: "main" };
          })
        );
      }
      function on() {
        return a ? a.then((n) => n.destroyDb()) : Promise.resolve();
      }
      function an() {
        a && (s ? s.close() : a.then((n) => n && n.close()));
      }
      function sn() {
        return null != s;
      }
      function cn(n, t) {
        var r = new (class {
          constructor(n, t) {
            (this.bl = void 0), (this.bm = null), (this.bk = n), (this.bn = t);
          }
          attach(n, t) {
            (this.bm = n), (this.bl = this.bn(t.get(this.bk), void 0));
          }
          get() {
            if ((this.bo(), void 0 === this.bl))
              throw new Error(this.bk + " not set in InfoStore");
            return this.bl;
          }
          set(n) {
            var t = this.bo(),
              r = this.bn(n, this.bl);
            return (this.bl = r), t.putOrDelete(this.bk, n);
          }
          setWithin(n, t) {
            return n.putOrDelete(this.bk, t);
          }
          isDefined() {
            return this.bo(), void 0 !== this.bl;
          }
          delete() {
            var n = this.bo();
            return (this.bl = this.bn()), n.putOrDelete(this.bk, void 0);
          }
          dangerouslySetInternal(n) {
            this.bl = this.bn(n, this.bl);
          }
          bo() {
            if (!this.bm)
              throw new Error(this.bk + " is not attached to InfoStore");
            return this.bm;
          }
        })(n, t);
        return c.push(r), r;
      }
      function fn(n, t) {
        var r = new (class {
          constructor(n, t) {
            (this.bl = void 0), (this.bm = null), (this.bk = n), (this.bp = t);
          }
          attach(n, t) {
            (this.bm = n), (this.bl = this.bp(t.get(this.bk), void 0));
          }
          get() {
            if ((this.bo(), void 0 === this.bl))
              throw new Error(this.bk + " not set in InfoStore");
            return this.bl;
          }
          set(n) {
            var t = this.bo();
            return (this.bl = n), t.putOrDelete(this.bk, n);
          }
          setWithin(n, t) {
            return n.putOrDelete(this.bk, t);
          }
          isDefined() {
            return this.bo(), void 0 !== this.bl;
          }
          update(n) {
            var t = this.bo(),
              r = this.bp(n, this.bl);
            return (this.bl = r), t.putOrDelete(this.bk, r);
          }
          flush() {
            return this.bo()
              .get(this.bk)
              .then((n) => {
                this.bl = n;
              });
          }
          bo() {
            if (!this.bm)
              throw new Error(this.bk + " is not attached to InfoStore");
            return this.bm;
          }
        })(n, t);
        return c.push(r), r;
      }
      function ln(n, t) {
        return cn(n, function () {
          var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t;
          return n;
        });
      }
      function dn(n) {
        return encodeURIComponent(n) || "UNKNOWN";
      }
    },
    function (n, t, r) {
      r.d(t, "m", function () {
        return u;
      }),
        r.d(t, "k", function () {
          return o;
        }),
        r.d(t, "b", function () {
          return a;
        }),
        r.d(t, "y", function () {
          return s;
        });
      var e = r(9);
      r.d(t, "B", function () {
        return e.O;
      }),
        r.d(t, "C", function () {
          return e.P;
        }),
        r.d(t, "A", function () {
          return e.N;
        }),
        r.d(t, "l", function () {
          return e.y;
        }),
        r.d(t, "i", function () {
          return e.v;
        }),
        r.d(t, "f", function () {
          return e.s;
        }),
        r.d(t, "u", function () {
          return e.I;
        }),
        r.d(t, "q", function () {
          return e.E;
        }),
        r.d(t, "h", function () {
          return e.u;
        }),
        r.d(t, "p", function () {
          return e.C;
        }),
        r.d(t, "z", function () {
          return e.M;
        }),
        r.d(t, "x", function () {
          return e.L;
        }),
        r.d(t, "e", function () {
          return e.r;
        }),
        r.d(t, "r", function () {
          return e.F;
        }),
        r.d(t, "t", function () {
          return e.H;
        }),
        r.d(t, "j", function () {
          return e.x;
        }),
        r.d(t, "g", function () {
          return e.t;
        }),
        r.d(t, "o", function () {
          return e.A;
        }),
        r.d(t, "v", function () {
          return e.J;
        }),
        r.d(t, "n", function () {
          return e.z;
        }),
        r.d(t, "a", function () {
          return e.l;
        }),
        r.d(t, "c", function () {
          return e.m;
        }),
        r.d(t, "w", function () {
          return e.K;
        }),
        r.d(t, "s", function () {
          return e.G;
        }),
        r.d(t, "d", function () {
          return e.p;
        });
      var i = (0, e.o)({ platform: "whatsapp" }),
        u = i.getUserDomain,
        o = i.getGroupCallDomain;
      function a(n) {
        var t = (0, e.E)(n);
        if (null == t)
          throw new Error("The provided Jid is not a valid PhoneUserJid");
        return t;
      }
      function s(n, t) {
        return (0, e.M)(n, { user: t.chat, group: t.chat, status: t.status });
      }
    },
    function (n, t, r) {
      var e = r(462),
        i = r(463),
        u = r(464),
        o = r(466);
      n.exports = function (n, t) {
        return e(n) || i(n, t) || u(n, t) || o();
      };
    },
    function (n, t, r) {
      r.d(t, "c", function () {
        return a;
      }),
        r.d(t, "a", function () {
          return s;
        }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "h", function () {
          return f;
        }),
        r.d(t, "f", function () {
          return h;
        }),
        r.d(t, "g", function () {
          return v;
        }),
        r.d(t, "i", function () {
          return m;
        }),
        r.d(t, "j", function () {
          return y;
        }),
        r.d(t, "k", function () {
          return b;
        }),
        r.d(t, "d", function () {
          return E;
        }),
        r.d(t, "e", function () {
          return S;
        }),
        r.d(t, "P", function () {
          return M;
        }),
        r.d(t, "N", function () {
          return N;
        }),
        r.d(t, "y", function () {
          return P;
        }),
        r.d(t, "O", function () {
          return L;
        }),
        r.d(t, "v", function () {
          return G;
        }),
        r.d(t, "s", function () {
          return x;
        }),
        r.d(t, "n", function () {
          return R;
        }),
        r.d(t, "I", function () {
          return j;
        }),
        r.d(t, "E", function () {
          return B;
        }),
        r.d(t, "l", function () {
          return U;
        }),
        r.d(t, "m", function () {
          return q;
        }),
        r.d(t, "w", function () {
          return K;
        }),
        r.d(t, "u", function () {
          return F;
        }),
        r.d(t, "r", function () {
          return z;
        }),
        r.d(t, "q", function () {
          return H;
        }),
        r.d(t, "F", function () {
          return W;
        }),
        r.d(t, "B", function () {
          return V;
        }),
        r.d(t, "D", function () {
          return J;
        }),
        r.d(t, "H", function () {
          return Y;
        }),
        r.d(t, "x", function () {
          return X;
        }),
        r.d(t, "t", function () {
          return Z;
        }),
        r.d(t, "A", function () {
          return Q;
        }),
        r.d(t, "W", function () {
          return nn;
        }),
        r.d(t, "X", function () {
          return tn;
        }),
        r.d(t, "R", function () {
          return rn;
        }),
        r.d(t, "T", function () {
          return en;
        }),
        r.d(t, "V", function () {
          return un;
        }),
        r.d(t, "S", function () {
          return on;
        }),
        r.d(t, "U", function () {
          return an;
        }),
        r.d(t, "J", function () {
          return sn;
        }),
        r.d(t, "z", function () {
          return cn;
        }),
        r.d(t, "G", function () {
          return ln;
        }),
        r.d(t, "C", function () {
          return dn;
        }),
        r.d(t, "L", function () {
          return hn;
        }),
        r.d(t, "M", function () {
          return vn;
        }),
        r.d(t, "K", function () {
          return pn;
        }),
        r.d(t, "p", function () {
          return gn;
        }),
        r.d(t, "o", function () {
          return _n;
        }),
        r.d(t, "Q", function () {
          return mn;
        });
      var e = r(8),
        i = r.n(e),
        u = r(37),
        o = r.n(u),
        a = 0,
        s = "@me",
        c = "@system",
        f = "status@broadcast",
        l = "@g.us",
        d = /^([1-9][0-9]{0,19}|(?!10)[1-9][0-9]{4,19}-[1-9][0-9]{9})@g.us$/,
        h = "@msgr",
        v = "msgr",
        p = /^([1-9][0-9]{0,19}(:[1-9][0-9]{0,2})?)@msgr$/,
        g = /^([1-9][0-9]{0,19})@msgr$/,
        _ = /^([1-9][0-9]{0,19})(:0)?@msgr$/,
        m = "s.whatsapp.net",
        y = "@s.whatsapp.net",
        b = "s.whatsapp.net",
        w =
          /^(0|((?!10)[1-9][0-9]{4,19}(\.[0-9]{1,2})?(:[0-9]{1,2})))@s.whatsapp.net$/,
        k = /^(0|((?!10)[1-9][0-9]{4,19})(\.[0-9]{1,2})?)@s.whatsapp.net$/,
        E = "@lid",
        S = "lid",
        A = /^([1-9][0-9]{0,14})@lid$/,
        O = /^([1-9][0-9]{0,14}(:[0-9]{1,2})?)@lid$/,
        I = /^(status|location|[1-9][0-9]{0,19})@broadcast$/,
        C = /^([0-9a-fA-F]{18,32})@call$/,
        T =
          /([0-9a-zA-Z-:]+)@(g\.us|call|s\.whatsapp\.net|broadcast|msgr|lid)/g;
      function M(n) {
        return `${n}${y}`;
      }
      function $(n) {
        return `${n}${h}`;
      }
      function N(n) {
        return n.endsWith(l) ? n : n + "@g.us";
      }
      function P() {
        return l;
      }
      function D(n) {
        if (n.endsWith(y)) return n.slice(0, -y.length);
        if (n.endsWith(h)) return n.slice(0, -h.length);
        if (n.endsWith(E)) return n.slice(0, -E.length);
        throw new Error(`userIdFromJid called with non-user jid "${n}"`);
      }
      function L(n, t) {
        return `${D(n)}:${t}${y}`;
      }
      function G(n) {
        return n.split("@")[0];
      }
      function x(n) {
        return (function (n) {
          var t = n.split("@")[0].split(":"),
            r = t[0],
            e = t[1];
          return { userId: r, deviceID: parseInt(e, 10) };
        })(n).deviceID;
      }
      function R(n) {
        return n === s || n === c ? null : n.endsWith(y) ? n : null;
      }
      function j(n) {
        if (!n.endsWith(y))
          throw new Error(`phoneNumberFromJid called with non-user jid "${n}"`);
        return n.slice(0, -y.length);
      }
      function B(n) {
        return n.endsWith(y) ? n : null;
      }
      function U(n) {
        return n === f ? null : n;
      }
      function q(n) {
        return n === f ? f : null;
      }
      function K(n) {
        var t = n.split("@"),
          r = t[0],
          e = t[1];
        return `${(r = (r = r.split(":")[0]).split(".")[0])}@${e}`;
      }
      function F(n) {
        return K(n);
      }
      function z(n) {
        return `${D(n)}:${a}${y}`;
      }
      function H(n) {
        return (function (n, t) {
          return `${(function (n) {
            if (!n.endsWith(E))
              throw new Error(
                `lidFromLidUserJid called with non-LidUserJid "${n}"`
              );
            return n.slice(0, -E.length);
          })(n)}:${t}${E}`;
        })(n, a);
      }
      function W(n) {
        return x(n) === a;
      }
      function V(n) {
        return n;
      }
      function J(n) {
        return n;
      }
      function Y(n) {
        var t = n.split("@"),
          r = i()(t, 2),
          e = r[0],
          u = r[1],
          o = e.split(":"),
          a = i()(o, 2),
          s = a[0],
          c = a[1],
          f = s.split("."),
          l = i()(f, 2);
        return { user: l[0], device: c, agent: l[1], server: u };
      }
      function X(n) {
        var t = Y(n),
          r = t.user,
          e = t.agent,
          i = void 0 === e ? "0" : e,
          u = t.device;
        return `${r}.${i}:${void 0 === u ? "0" : u}@${t.server}`;
      }
      function Z(n) {
        switch (n.jidType) {
          case "lidUser":
          case "msgrUser":
          case "phoneUser":
            return n.userJid;
          case "group":
            return n.groupJid;
          case "status":
            return n.statusJid;
          case "lidDevice":
          case "msgrDevice":
          case "phoneDevice":
            return n.deviceJid;
          case "broadcast":
            return n.broadcastJid;
          case "call":
            return n.callJid;
          default:
            return (0, o.a)(n.jidType);
        }
      }
      function Q(n) {
        return n === f
          ? { jidType: "status", statusJid: f }
          : k.test(n)
          ? { jidType: "phoneUser", userJid: n }
          : g.test(n)
          ? { jidType: "msgrUser", userJid: n }
          : _.test(n)
          ? { jidType: "msgrUser", userJid: $(n.substr(0, n.indexOf(":"))) }
          : w.test(n)
          ? { jidType: "phoneDevice", deviceJid: n }
          : p.test(n)
          ? { jidType: "msgrDevice", deviceJid: n }
          : d.test(n)
          ? { jidType: "group", groupJid: n.endsWith(l) ? n : n + "@g.us" }
          : I.test(n)
          ? { jidType: "broadcast", broadcastJid: n }
          : C.test(n)
          ? { jidType: "call", callJid: n }
          : A.test(n)
          ? { jidType: "lidUser", userJid: n }
          : O.test(n)
          ? { jidType: "lidDevice", deviceJid: n }
          : { jidType: "unknown" };
      }
      function nn(n) {
        return "status@broadcast" === n ? n : null;
      }
      function tn(n) {
        return k.test(n) || g.test(n) || A.test(n)
          ? n
          : _.test(n)
          ? $(n.substr(0, n.indexOf(":")))
          : null;
      }
      function rn(n) {
        return I.test(n) ? n : null;
      }
      function en(n) {
        return w.test(n) || p.test(n) || O.test(n) ? n : null;
      }
      function un(n) {
        return d.test(n) ? n : null;
      }
      function on(n) {
        return C.test(n) ? n : null;
      }
      function an(n) {
        return "s.whatsapp.net" === n || "g.us" === n ? n : null;
      }
      function sn(n) {
        var t = Y(n),
          r = t.user,
          e = t.device;
        return `${r}:${void 0 === e ? "0" : e}@${t.server}`;
      }
      function cn(n) {
        if (n.endsWith(l)) return n.slice(0, -l.length);
        throw new Error(`groupId called with non-group jid "${n}"`);
      }
      function fn(n) {
        var t = Q(n);
        return "unknown" === t.jidType
          ? n
          : "status" === t.jidType
          ? t.statusJid
          : (t.jidType,
            Z(t).replace(/^([^@]*)([^@][^@][^@][^@])@(.*)$/, "...$2@$3"));
      }
      function ln(n) {
        return n.includes("@") ? n.replace(T, fn) : n;
      }
      function dn(n) {
        return n.endsWith(l) ? n : null;
      }
      function hn(n, t) {
        if (n.endsWith(y)) return t.user(n);
        if (null != dn(n)) return t.group(n);
        throw new Error("Can not switch on chat jid " + n);
      }
      function vn(n, t) {
        return n === f ? t.status() : hn(n, { user: t.user, group: t.group });
      }
      function pn(n, t) {
        return n === f
          ? t.multicast(f)
          : hn(n, { user: t.user, group: t.multicast });
      }
      function gn(n) {
        return `${D(n)}:${a}${(function (n) {
          if (n.endsWith(y)) return y;
          if (n.endsWith(h)) return h;
          if (n.endsWith(E)) return E;
          throw new Error(`userDomainFromJid called with non-user jid "${n}"`);
        })(n)}`;
      }
      function _n(n) {
        var t = "msgr" === n.platform ? h : y;
        return {
          toUserJid: function (n) {
            return `${n}${t}`;
          },
          getUserDomain: function () {
            return t;
          },
          getGroupCallDomain: function () {
            return "@call";
          },
        };
      }
      function mn(n) {
        return n;
      }
    },
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "B", function () {
        return u;
      }),
        r.d(t, "D", function () {
          return o;
        }),
        r.d(t, "x", function () {
          return a;
        }),
        r.d(t, "F", function () {
          return s;
        }),
        r.d(t, "R", function () {
          return c;
        }),
        r.d(t, "y", function () {
          return f;
        }),
        r.d(t, "H", function () {
          return l;
        }),
        r.d(t, "C", function () {
          return d;
        }),
        r.d(t, "z", function () {
          return h;
        }),
        r.d(t, "e", function () {
          return v;
        }),
        r.d(t, "l", function () {
          return p;
        }),
        r.d(t, "n", function () {
          return g;
        }),
        r.d(t, "m", function () {
          return _;
        }),
        r.d(t, "t", function () {
          return m;
        }),
        r.d(t, "Z", function () {
          return y;
        }),
        r.d(t, "ab", function () {
          return b;
        }),
        r.d(t, "V", function () {
          return w;
        }),
        r.d(t, "U", function () {
          return k;
        }),
        r.d(t, "S", function () {
          return E;
        }),
        r.d(t, "T", function () {
          return S;
        }),
        r.d(t, "W", function () {
          return A;
        }),
        r.d(t, "h", function () {
          return O;
        }),
        r.d(t, "c", function () {
          return I;
        }),
        r.d(t, "P", function () {
          return C;
        }),
        r.d(t, "N", function () {
          return T;
        }),
        r.d(t, "s", function () {
          return M;
        }),
        r.d(t, "Q", function () {
          return $;
        }),
        r.d(t, "q", function () {
          return N;
        }),
        r.d(t, "d", function () {
          return P;
        }),
        r.d(t, "u", function () {
          return D;
        }),
        r.d(t, "i", function () {
          return L;
        }),
        r.d(t, "g", function () {
          return G;
        }),
        r.d(t, "f", function () {
          return x;
        }),
        r.d(t, "r", function () {
          return R;
        }),
        r.d(t, "L", function () {
          return j;
        }),
        r.d(t, "M", function () {
          return B;
        }),
        r.d(t, "p", function () {
          return U;
        }),
        r.d(t, "A", function () {
          return q;
        }),
        r.d(t, "j", function () {
          return K;
        }),
        r.d(t, "w", function () {
          return F;
        }),
        r.d(t, "v", function () {
          return z;
        }),
        r.d(t, "G", function () {
          return H;
        }),
        r.d(t, "E", function () {
          return W;
        }),
        r.d(t, "K", function () {
          return V;
        }),
        r.d(t, "J", function () {
          return J;
        }),
        r.d(t, "X", function () {
          return Y;
        }),
        r.d(t, "Y", function () {
          return X;
        }),
        r.d(t, "k", function () {
          return Z;
        }),
        r.d(t, "o", function () {
          return Q;
        }),
        r.d(t, "I", function () {
          return nn;
        }),
        r.d(t, "b", function () {
          return tn;
        }),
        r.d(t, "a", function () {
          return rn;
        }),
        r.d(t, "O", function () {
          return en;
        });
      var e = r(3),
        i = r(11),
        u = 90,
        o = 25,
        a = 139,
        s = 6,
        c = 5,
        f = 80,
        l = 48,
        d = 10,
        h = 10,
        v = 3,
        p = 4,
        g = "https://www.google.com/maps/search/",
        _ = "https://www.google.com/maps/place/",
        m = "https://www.jiocloud.com/s/?t=",
        y = "https://wa.me/",
        b = "whatsapp://",
        w = e.b,
        k = 700,
        E = 100,
        S = 10,
        A = 30,
        O = "composeBox",
        I = "#075e54",
        C = "error.reboot",
        T = 600,
        M = "wa-info-1",
        $ = "wa-signal-1",
        N = "wa-hsm-1",
        P = "wa-avatars-1",
        D = "wa-jobs-1",
        L = "wa-content-1",
        G = "wa-chunks-1",
        x = "91",
        R = { iso: "IN", cc: x },
        j = 4,
        B = 2,
        U = 10,
        q = 30,
        K = 14 * e.b,
        F = (e.b, 3),
        z = F * i.b,
        H = "application/octet-stream",
        W = 30 * e.b,
        V = e.b,
        J = [
          { key: "DefaultPsId", keyHashInt: 113760892, rotationPeriodDays: -1 },
          { key: "IdPreMetrics", keyHashInt: 56300709, rotationPeriodDays: -1 },
          { key: "IdTtl90Days", keyHashInt: 37887164, rotationPeriodDays: 90 },
          { key: "IdTtlDaily", keyHashInt: 248614979, rotationPeriodDays: 1 },
          {
            key: "IdTtlMonthly",
            keyHashInt: 191000728,
            rotationPeriodDays: 30,
          },
          { key: "IdTtlWeekly", keyHashInt: 42196056, rotationPeriodDays: 7 },
        ],
        Y = 20 * i.b,
        X = 20210210,
        Z = 0,
        Q = 20,
        nn = 32,
        tn = 60,
        rn = tn + 12,
        en = tn;
    },
    function (n, t, r) {
      r.d(t, "a", function () {
        return e.a;
      }),
        r.d(t, "h", function () {
          return e.d;
        }),
        r.d(t, "g", function () {
          return e.c;
        }),
        r.d(t, "e", function () {
          return e.b;
        }),
        r.d(t, "C", function () {
          return e.o;
        }),
        r.d(t, "D", function () {
          return e.p;
        }),
        r.d(t, "o", function () {
          return e.e;
        }),
        r.d(t, "d", function () {
          return i.d;
        }),
        r.d(t, "p", function () {
          return i.f;
        }),
        r.d(t, "c", function () {
          return i.c;
        }),
        r.d(t, "b", function () {
          return i.a;
        }),
        r.d(t, "n", function () {
          return i.e;
        }),
        r.d(t, "m", function () {
          return u;
        }),
        r.d(t, "f", function () {
          return s;
        }),
        r.d(t, "k", function () {
          return a;
        }),
        r.d(t, "l", function () {
          return o;
        }),
        r.d(t, "y", function () {
          return f;
        }),
        r.d(t, "F", function () {
          return l;
        }),
        r.d(t, "s", function () {
          return d.g;
        }),
        r.d(t, "r", function () {
          return d.c;
        }),
        r.d(t, "u", function () {
          return d.i;
        }),
        r.d(t, "w", function () {
          return d.v;
        }),
        r.d(t, "t", function () {
          return d.h;
        }),
        r.d(t, "z", function () {
          return d.A;
        }),
        r.d(t, "v", function () {
          return d.m;
        }),
        r.d(t, "E", function () {
          return d.F;
        }),
        r.d(t, "B", function () {
          return d.C;
        }),
        r.d(t, "A", function () {
          return d.B;
        }),
        r.d(t, "i", function () {
          return d.a;
        }),
        r.d(t, "j", function () {
          return d.b;
        }),
        r.d(t, "x", function () {
          return h.a;
        }),
        r.d(t, "q", function () {
          return v;
        });
      var e = r(42),
        i = r(137),
        u = ["HOME", "WORK"],
        o = [
          "TEL",
          "EMAIL",
          "URL",
          "ADR",
          "_IM",
          "X-ABLabel",
          "X-ABADR",
          "N",
          "FN",
          "NICKNAME",
          "VERSION",
          "X-PHONETIC-FIRST-NAME",
          "X-PHONETIC-LAST-NAME",
          "X-WA-BIZ-NAME",
          "ORG",
          "TITLE",
          "BDAY",
          "PHOTO",
        ],
        a = [
          "HOME",
          "WORK",
          "CELL",
          "IPHONE",
          "MAIN",
          "PAGER",
          "_HOMEFAX",
          "_WORKFAX",
        ],
        s = ["fax-home", "fax-office"],
        c = 0;
      function f() {
        return ++c;
      }
      function l(n, t, r) {
        var e, i;
        switch (t.type) {
          case "ADD_GROUP_PARTICIPANTS":
          case "GROUP_INFO":
          case "GROUP_INFO_CHANGE_SUBJECT":
          case "GROUP_INFO_CHANGE_DESCRIPTION":
          case "GROUP_INFO_PARTICIPANTS":
          case "GROUP_INFO_INVITATIONS":
          case "MESSAGE_ADMIN":
            return t.props.chat.id === r;
          case "MEDIA_DRAWER":
            return (null == (e = t.props.useCase.chat) ? void 0 : e.id) === r;
          case "FEATURED_MESSAGES":
            return (null == (i = t.props.chat) ? void 0 : i.id) === r;
          case "SEND_MEDIA":
            var u = n.chatlist.chats[r];
            return t.props.jid === u.jid;
          default:
            return !1;
        }
      }
      r(143);
      var d = r(32),
        h = r(396),
        v = Object.freeze({
          TRIGGERED: 0,
          FETCHED: 1,
          BANNER_SHOW: 2,
          NON_BLOCKING_MODAL_SHOW: 3,
          BLOCKING_MODAL_SHOW: 4,
          EXPIRED: 5,
        });
    },
    function (n, t, r) {
      r.d(t, "g", function () {
        return o;
      }),
        r.d(t, "d", function () {
          return a;
        }),
        r.d(t, "c", function () {
          return s;
        }),
        r.d(t, "f", function () {
          return l;
        }),
        r.d(t, "b", function () {
          return d;
        }),
        r.d(t, "e", function () {
          return h;
        }),
        r.d(t, "a", function () {
          return v;
        });
      var e = r(33),
        i = r(3),
        u = r(97),
        o = {
          createGroup: (n) => `createGroup-${n.title}-${n.timestamp}`,
          setGroupSubject: (n) => n.groupJid,
          setGroupDescription: (n) => n.groupJid,
          setGroupPicture: (n) => n.jid,
          setProfilePicture: () => "setProfilePicture",
          setProfileName: () => "setProfileName",
          setAbout: () => "setAbout",
          setGroupParticipants: (n) => n.groupJid,
          setOneToOneEphemeralSetting: (n) => n.userJid,
          setGroupEphemeralSetting: (n) => n.groupJid,
          markKeepInChatNuxSeen: () => "markKeepInChatNuxSeen",
          revokeQRCode: () => "revokeQRCode",
        };
      function a(n) {
        return o.hasOwnProperty(n);
      }
      function s(n, t) {
        return c(n, t);
      }
      function c(n, t) {
        return o.hasOwnProperty(n) ? o[n](t) : void 0;
      }
      var f = {
        createGroup: (n) => {
          var t;
          return "no-network" === (null == (t = n.error) ? void 0 : t.reason)
            ? 24 * i.b
            : 0;
        },
        setGroupDescription: (n) => ("success" !== n ? i.b : 0),
        setGroupSubject: (n) => ("success" !== n ? i.b : 0),
        setGroupPicture: (n) => (null != n ? i.b : 0),
        setProfilePicture: (n) => (null != n ? i.b : 0),
        setAbout: (n) => (null != n ? i.b : 0),
      };
      function l(n, t) {
        return f.hasOwnProperty(n) ? f[n](t) : void 0;
      }
      function d() {
        return {
          initializeCallLog: "NOOP",
          rehydrateHsm: "NOOP",
          queryGroupInvite: "NOOP",
        };
      }
      var h = {
        updateGeneralSettings: (n) => ({
          type: "updateGeneralSettings",
          args: n,
        }),
        getPrivacySettings: () => ({ type: "getPrivacySettings", args: {} }),
        initLocalSettingsFromServer: () => ({
          type: "initLocalSettingsFromServer",
          args: {},
          uniqKey: "initLocalSettingsFromServer",
        }),
        updateServerWhitelist: () => ({
          type: "updateServerWhitelist",
          args: {},
        }),
        setStatusSettings: (n) => ({ type: "setStatusSettings", args: n }),
        createGroup: (n, t, r, i, u) => ({
          type: "createGroup",
          args: {
            title: n,
            participants: t,
            blob: r,
            key: (0, e.l)(8),
            timestamp: i,
            expiration: u,
          },
        }),
        addGroupParticipants: (n, t) => ({
          type: "addGroupParticipants",
          args: { groupJid: n, participants: t },
        }),
        demoteGroupParticipants: (n, t) => ({
          type: "demoteGroupParticipants",
          args: { groupJid: n, participants: t },
        }),
        promoteGroupParticipants: (n, t) => ({
          type: "promoteGroupParticipants",
          args: { groupJid: n, participants: t },
        }),
        removeGroupParticipants: (n, t) => ({
          type: "removeGroupParticipants",
          args: { groupJid: n, participants: t },
        }),
        revokeGroupInvitations: (n, t) => ({
          type: "revokeGroupInvitations",
          args: { groupJid: n, invitations: t },
        }),
        revokeGroupInviteCode: (n) => ({
          type: "revokeGroupInviteCode",
          args: { groupJid: n },
        }),
        setGroupSubject: (n, t) => ({
          type: "setGroupSubject",
          args: { groupJid: n, subject: t },
          uniqKey: o.setGroupSubject({ groupJid: n }),
        }),
        setGroupDescription: (n, t) => ({
          type: "setGroupDescription",
          args: { groupJid: n, description: t },
          uniqKey: o.setGroupDescription({ groupJid: n }),
        }),
        setGroupEphemeralSetting: (n, t) => ({
          type: "setGroupEphemeralSetting",
          args: { groupJid: n, expiration: t },
          uniqKey: n,
        }),
        setGroupLocked: (n, t) => ({
          type: "setGroupLocked",
          args: { groupJid: n, locked: t },
        }),
        setGroupParticipants: (n, t) => ({
          type: "setGroupParticipants",
          args: { groupJid: n, adminOnly: t },
        }),
        setGroupAnnouncement: (n, t) => ({
          type: "setGroupAnnouncement",
          args: { groupJid: n, announcement: t },
        }),
        setOneToOneEphemeralSetting: (n, t, r) => ({
          type: "setOneToOneEphemeralSetting",
          args: {
            userJid: n,
            expiration: t,
            ephemeralSettingTimestamp: r,
            id: (0, e.l)(7),
          },
        }),
        sendEphemeralSyncResponse: (n, t, r, i) => ({
          type: "sendEphemeralSyncResponse",
          args: {
            userJid: n,
            ephemeralExpiration: t,
            ephemeralSettingTimestamp: r,
            disappearingModeInitiator: i,
            id: (0, e.l)(7),
          },
          uniqKey: `${n}-${r}`,
        }),
        joinGroupViaInvite: (n) => ({
          type: "joinGroupViaInvite",
          args: { code: n },
        }),
        acceptGroupAddRequest: (n, t, r, e) => ({
          type: "acceptGroupAddRequest",
          args: { group: n, code: t, expiration: r, admin: e },
        }),
        sendReaction: (n, t) => ({
          type: "sendReaction",
          args: { msgId: n, text: t, key: (0, e.l)(7) },
        }),
        sendMsg: (n, t, r, i, u) => ({
          type: "sendMsg",
          args: {
            jid: n,
            content: t,
            quoted: r,
            link: u,
            remoteJid: i,
            key: (0, e.l)(7),
          },
        }),
        sendVCardMsg: (n, t, r, i) => ({
          type: "sendVCardMsg",
          args: {
            jid: n,
            content: t,
            quoted: r,
            remoteJid: i,
            key: (0, e.l)(7),
          },
        }),
        sendStatusMsg: (n, t) => ({
          type: "sendStatusMsg",
          args: { content: n, origin: t, key: (0, e.l)(7) },
        }),
        sendMediaMsg: (n, t, r, i) => ({
          type: "sendMediaMsg",
          args: {
            jid: n,
            request: t,
            quoted: r,
            remoteJid: i,
            key: (0, e.l)(7),
          },
        }),
        sendMediaMsgs: (n, t, r, i) => ({
          type: "sendMediaMsgs",
          args: {
            jids: n,
            toStatus: t,
            requests: r,
            origin: i,
            key: (0, e.l)(32),
          },
          version: 1,
        }),
        sendStatusMediaMsg: (n, t) => ({
          type: "sendStatusMediaMsg",
          args: { request: n, origin: t, key: (0, e.l)(7) },
        }),
        sendWrittenMsg: (n, t, r, e) => ({
          type: "sendWrittenMsg",
          args: { msgId: n, origin: r, outgoingTo: t, mediaUploaded: e },
          uniqKey: n,
        }),
        resendWrittenRevokeMsg: (n, t, r) => ({
          type: "resendWrittenRevokeMsg",
          args: { msgId: n, originalRecipientsList: t, phash: r },
          uniqKey: n,
        }),
        senderBackfill: (n, t, r, e) => ({
          type: "senderBackfill",
          args: { msgId: n, originalTo: t, ts: r, primaryIdentityIds: e },
        }),
        forwardMsgs: (n, t, r) => ({
          type: "forwardMsgs",
          args: { msgs: n, jids: t, toStatus: r, key: (0, e.l)(32) },
        }),
        markChatAsRead: (n, t, r) => ({
          type: "markChatAsRead",
          args: { chat: n, startMsg: t, endMsg: r },
          uniqKey: JSON.stringify([n, t, r]),
        }),
        markStatusAsSeen: (n, t) => ({
          type: "markStatusAsSeen",
          args: { authorJid: n, msgId: t },
          uniqKey: t,
        }),
        starMessagesFromChat: (n, t) => ({
          type: "starMessagesFromChat",
          args: { msgIds: n, chatId: t },
        }),
        unstarMessagesFromChat: (n, t) => ({
          type: "unstarMessagesFromChat",
          args: { msgIds: n, chatId: t },
        }),
        keepMessagesFromChat(n, t) {
          var r = new Map();
          return (
            n.forEach((n) => {
              r.set(n, (0, e.l)(7));
            }),
            {
              type: "keepMessagesFromChat",
              args: { kicRequestKeys: r, chatId: t },
            }
          );
        },
        unkeepMessagesFromChat(n, t) {
          var r = new Map();
          return (
            n.forEach((n) => {
              r.set(n, (0, e.l)(7));
            }),
            {
              type: "unkeepMessagesFromChat",
              args: { kicRequestKeys: r, chatId: t },
            }
          );
        },
        blockUser: (n) => ({ type: "blockUser", args: { user: n } }),
        unblockUser: (n) => ({ type: "unblockUser", args: { user: n } }),
        getBlocklist: () => ({ type: "getBlocklist", args: {} }),
        getBlocklistV2: () => ({ type: "getBlocklistV2", args: {} }),
        setBlocklistV2: (n, t) => ({
          type: "setBlocklistV2",
          args: { jid: n, action: t },
        }),
        queryGroup: (n, t, r) => ({
          type: "queryGroup",
          args: { groupJid: n, request: t, phash: r },
        }),
        saveKeyChange: (n, t, r) => ({
          type: "saveKeyChange",
          args: { jid: n, key: (0, e.l)(8), showMsg: r },
          uniqKey: (0, e.m)(t),
        }),
        retryMsg: (n, t) => ({
          type: "retryMsg",
          args: { msgId: n, origin: t },
        }),
        downloadMedia: (n, t) => ({
          type: "downloadMedia",
          args: { msgId: n, source: t },
          uniqKey: n,
        }),
        downloadMediaThumb: (n, t) => ({
          type: "downloadMediaThumb",
          args: { msgId: n },
          uniqKey: t ? String(t) : n,
        }),
        requestReupload: (n) => ({
          type: "requestReupload",
          args: { msgId: n },
          uniqKey: n,
        }),
        reportUserSpam: (n) => ({ type: "reportUserSpam", args: n }),
        reportGroupSpam: (n) => ({ type: "reportGroupSpam", args: n }),
        reportCommunityHomeSpam: (n) => ({
          type: "reportCommunityHomeSpam",
          args: n,
        }),
        markGroupAsMessaged: (n, t) => ({
          type: "markGroupAsMessaged",
          args: { chatId: n, groupJid: t },
        }),
        uploadMedia: (n, t, r) => ({
          type: "uploadMedia",
          args: {
            msgId: n,
            origin: r,
            outgoingTo: t,
            backupToken: (0, e.l)(32),
            backupKey: (0, e.l)(32),
          },
          uniqKey: n,
        }),
        reuploadMedia: (n) => ({
          type: "reuploadMedia",
          args: { msgRef: n, uploadToken: (0, e.l)(32) },
          uniqKey: n.externalId,
        }),
        deleteMsgsFromStorageSetting: (n) => ({
          type: "deleteMsgsFromStorageSetting",
          args: { msgIds: n },
        }),
        deleteChatMsgs: (n, t) => ({
          type: "deleteChatMsgs",
          args: { chatId: n, msgIds: t },
        }),
        revokeChatMsgs: (n, t) => ({
          type: "revokeChatMsgs",
          args: { chatJid: n, msgIds: t },
        }),
        revokeStatusMsg: (n) => ({
          type: "revokeStatusMsg",
          args: { statusMsgId: n },
          uniqKey: n,
        }),
        queryDirtyInfo: (n, t) => ({
          type: "queryDirtyInfo",
          args: { dirtyGroups: n, unsupportedDirtyBits: t },
          uniqKey: "dirty",
        }),
        deleteChat: (n, t) => ({
          type: "deleteChat",
          args: { chatId: n, retainMediaInPhoneStorage: t },
          uniqKey: String(n),
        }),
        deleteChatContents: (n, t) => ({
          type: "deleteChatContents",
          args: { chatId: n, retainMediaInPhoneStorage: t },
          uniqKey: String(n),
        }),
        clearChat: (n, t, r) => ({
          type: "clearChat",
          args: {
            chatId: n,
            retainMediaInPhoneStorage: t,
            keepStarredMessages: r,
          },
          uniqKey: String(n),
        }),
        markPlayed: (n, t) => ({
          type: "markPlayed",
          args: { msgId: n, jid: t },
          uniqKey: n,
        }),
        rotateKey: () => ({
          type: "rotateKey",
          args: {},
          uniqKey: "rotateKey",
        }),
        deleteExpiredPreKeys: (n) => ({
          type: "deleteExpiredPreKeys",
          args: { expirationDays: n },
          uniqKey: "deleteExpiredPreKeys",
        }),
        deleteExpiredDevices: () => ({
          type: "deleteExpiredDevices",
          args: {},
          uniqKey: "deleteExpiredDevices",
        }),
        fetchMissingKeysForContact: (n) => ({
          type: "fetchMissingKeysForContact",
          args: { jid: n },
          uniqKey: n,
        }),
        sendMetrics: () => ({
          type: "sendMetrics",
          args: {},
          uniqKey: "sendMetrics",
        }),
        sendAnonymousMetrics: () => ({
          type: "sendAnonymousMetrics",
          args: {},
          uniqKey: "sendAnonymousMetrics",
        }),
        removeDeadMediaContent: (n) => ({
          type: "removeDeadMediaContent",
          args: {},
          uniqKey: n,
        }),
        validateBusinessCertificate: (n) => ({
          type: "validateBusinessCertificate",
          args: { jid: n },
          uniqKey: n,
        }),
        validateBusinessMsg: (n, t) => ({
          type: "validateBusinessMsg",
          args: { chat: n, content: t },
          uniqKey: JSON.stringify([n, t.msg.author, t.msg.externalId]),
        }),
        getOwnAbout: () => ({ type: "getOwnAbout", args: {} }),
        getUserAbout: (n) => ({
          type: "getUserAbout",
          args: { jid: n },
          uniqKey: n,
        }),
        setAbout: (n) => ({
          type: "setAbout",
          args: { content: n },
          uniqKey: o.setAbout(),
        }),
        requestGdprReport: () => ({ type: "requestGdprReport", args: {} }),
        deleteGdprReport: () => ({ type: "deleteGdprReport", args: {} }),
        setTwoFactor: (n, t) => ({
          type: "setTwoFactor",
          args: { pin: n, email: t },
        }),
        changeTwoFactorPin: (n) => ({
          type: "changeTwoFactorPin",
          args: { pin: n },
        }),
        changeTwoFactorEmail: (n) => ({
          type: "changeTwoFactorEmail",
          args: { email: n },
        }),
        deleteTwoFactor: () => ({ type: "deleteTwoFactor", args: {} }),
        initializeMediaFsMeta: () => ({
          type: "initializeMediaFsMeta",
          args: {},
          uniqKey: "initializeMediaFsMeta",
        }),
        setMsgBg: (n) => ({ type: "setMsgBg", args: { msgId: n }, uniqKey: n }),
        syncDeviceList: (n) => ({ type: "syncDeviceList", args: { users: n } }),
        updateContactPHash: (n, t, r) => ({
          type: "updateContactPHash",
          args: { user: n, devices: t, serverPHash: r },
        }),
        createMissedCallLog: (n, t) => ({
          type: "createMissedCallLog",
          args: { key: n, ts: t },
        }),
        finalizeCallLog: (n, t, r, e) => ({
          type: "finalizeCallLog",
          args: { key: n, callResult: t, duration: r, bytesTransferred: e },
        }),
        deleteCallLogs: (n) => ({ type: "deleteCallLogs", args: { ids: n } }),
        clearAllCallLogs: () => ({ type: "clearAllCallLogs", args: {} }),
        queryAllGroups: () => ({
          type: "queryAllGroups",
          args: {},
          uniqKey: "queryAllGroups",
        }),
        setGroupPicture(n, t) {
          var r = { jid: n, picture: t };
          return {
            type: "setGroupPicture",
            args: r,
            uniqKey: o.setGroupPicture(r),
          };
        },
        setProfilePicture: (n) => ({
          type: "setProfilePicture",
          args: { picture: n },
          uniqKey: o.setProfilePicture(),
        }),
        setProfileName: (n) => ({
          type: "setProfileName",
          args: { pushName: n },
          uniqKey: o.setProfileName(),
        }),
        requestPreKeyDigest: () => ({
          type: "requestPreKeyDigest",
          args: {},
          uniqKey: "requestPreKeyDigest",
        }),
        quickReplyToHsm: (n, t) => ({
          type: "quickReplyToHsm",
          args: { msgId: n, selectedButtonIndex: t },
          uniqKey: `${n}-${t}`,
        }),
        updateChatWallpaper: (n, t, r) => ({
          type: "updateChatWallpaper",
          args: { chatBackgroundSettings: n, chat: t, updateAllChats: r },
          uniqKey: "updateChatWallpaper",
        }),
        convertFutureproofMessage: (n) => ({
          type: "convertFutureproofMessage",
          args: { msgId: n },
          uniqKey: n,
        }),
        processFutureProofMsgs: () => ({
          type: "processFutureProofMsgs",
          args: {},
          uniqKey: "processFutureProofMsgs",
        }),
        downloadUserNoticeContent: (n) => ({
          type: "downloadUserNoticeContent",
          args: { id: n },
        }),
        addContactToSidelist: (n) => ({
          type: "addContactToSidelist",
          args: { userJid: n },
          uniqKey: n,
        }),
        syncUserNoticeState: (n, t, r) => ({
          type: "syncUserNoticeState",
          args: { id: n, state: t, version: r },
        }),
        addRecentGif: (n, t) => ({
          type: "addRecentGif",
          args: { plaintextHash: n, request: t },
          uniqKey: n,
        }),
        addFavoriteGif: (n, t) => ({
          type: "addFavoriteGif",
          args: { plaintextHash: t, request: n },
          uniqKey: t || `${n.gifAttribution}:${n.gifId || ""}`,
        }),
        addFavoriteGifsFromChat: (n) => ({
          type: "addFavoriteGifsFromChat",
          args: { msgIds: n },
        }),
        removeFavoriteGif: (n) => ({
          type: "removeFavoriteGif",
          args: { plaintextHash: n },
          uniqKey: n,
        }),
        removeFavoriteGifFromId: (n, t) => ({
          type: "removeFavoriteGifFromId",
          args: { gifId: n, gifAttribution: t },
          uniqKey: `${t}:${n}`,
        }),
        updateTOSGatingAcceptanceStatus: (n) => ({
          type: "updateTOSGatingAcceptanceStatus",
          args: { notices: n },
        }),
        removeCompanion: (n, t) => ({
          type: "removeCompanion",
          args: { deviceId: n, reason: t },
        }),
        removeAllCompanions: (n) => ({
          type: "removeAllCompanions",
          args: { reason: n },
        }),
        refreshTrustedContactSenderToken: (n, t) => ({
          type: "refreshTrustedContactSenderToken",
          args: { jid: n, ts: t },
          uniqKey: n,
        }),
        resendTrustedContactSenderToken: (n) => ({
          type: "resendTrustedContactSenderToken",
          args: { jid: n },
          uniqKey: n,
        }),
        joinSubGroupRequest: (n, t, r) => ({
          type: "joinSubGroupRequest",
          args: { parentGroupJid: n, subGroupJid: t, isDefaultGroup: r },
        }),
        markKeepInChatNuxSeen: () => ({
          type: "markKeepInChatNuxSeen",
          args: {},
          uniqKey: "markKeepInChatNuxSeen",
        }),
        processPollUpdateOrphans: (n, t, r) => ({
          type: "processPollUpdateOrphans",
          args: { externalId: n, author: t, chatJid: r },
          uniqKey: `${n}-${t}-${r}`,
        }),
        sendPollVotes: (n, t) => ({
          type: "sendPollVotes",
          args: { pollMsgId: n, votes: t, key: (0, e.l)(7) },
        }),
        revokeQRCode: () => ({
          type: "revokeQRCode",
          args: {},
          uniqKey: o.revokeQRCode(),
        }),
      };
      function v(n) {
        var t = {};
        return (
          null == n ||
            n.forEach((n) => {
              var r = n.jobId,
                e = c(n.type, n.original);
              if (e) {
                var i = t[n.type] || {},
                  o =
                    n.step === u.FINISHED_JOB
                      ? {
                          key: e,
                          jobName: n.type,
                          jobId: r,
                          jobIn: n.original,
                          step: { status: "finished", result: n.current },
                        }
                      : {
                          key: e,
                          jobName: n.type,
                          jobId: r,
                          jobIn: n.original,
                          step: { status: "running" },
                        };
                (i[e] = o), (t[n.type] = i);
              }
            }),
          t
        );
      }
    },
    function (n, t, r) {
      r.d(t, "c", function () {
        return l;
      }),
        r.d(t, "b", function () {
          return d;
        }),
        r.d(t, "e", function () {
          return v;
        }),
        r.d(t, "f", function () {
          return p;
        }),
        r.d(t, "a", function () {
          return g;
        }),
        r.d(t, "d", function () {
          return _;
        });
      var e = r(169);
      function i(n) {
        if (!n) return {};
        var t = {};
        return (
          Object.keys(n).forEach((r) => {
            var e = n[r];
            null != e && (t[r] = e);
          }),
          t
        );
      }
      var u,
        o,
        a,
        s,
        c = r(204),
        f = r(6);
      function l() {
        return (0, f.Y)() && null != s;
      }
      function d(n) {
        var t, r, e;
        (a = n),
          __LOG__(2)`initializeAbProps for ${a.type}`,
          (r = (t = f.b.get()).propExpoKeys),
          (e = t.internalExpoKeys),
          (u = r),
          (o = e || new Set()),
          (s = new (class {
            constructor(n) {
              var t = n.abKey,
                r = n.abHash,
                e = n.lastSyncTime,
                i = n.expoKeyStr,
                u = n.refresh,
                o = n.internalExpoKeys,
                a = n.propExpoKeys,
                s = n.propValues,
                c = n.overridePropValues;
              (this.CY = null != c ? c : {}),
                (this.CZ = s),
                (this.Cb = r),
                (this.Ca = t),
                (this.Cc = e),
                (this.Ce = u),
                (this.Cd = i),
                (this.Cf = o),
                (this.Cg = a);
            }
            getAbProp(n) {
              var t;
              return null != this.CY[n]
                ? this.CY[n]
                : null == (t = this.CZ)
                ? void 0
                : t[n];
            }
            getHash() {
              return this.Cb;
            }
            getRefreshSecs() {
              var n;
              return null != (n = this.Ce) ? n : 86400;
            }
            overrideAbProp(n, t) {
              this.CY[n] = t;
            }
            readAll() {
              var n = {
                abKey: this.Ca,
                hash: this.getHash(),
                refresh: this.getRefreshSecs(),
                lastSyncTime: this.Cc || 0,
              };
              if (
                (null != this.Cg && (n.propExpoKeys = this.Cg),
                null != this.Cf && (n.internalExpoKeys = this.Cf),
                null != this.Cd && (n.expoKeyStr = this.Cd),
                null != this.CZ)
              ) {
                var t = this.CZ;
                null != t &&
                  ((n.propValues = i(t)),
                  null != this.CY &&
                    (n.propValues = Object.assign(
                      {},
                      n.propValues,
                      i(this.CY)
                    )));
              }
              return n;
            }
            rewrite(n) {
              var t = n.abKey,
                r = n.abHash,
                e = n.lastSyncTime,
                i = n.expoKeyStr,
                u = n.refresh,
                o = n.internalExpoKeys,
                a = n.propExpoKeys,
                s = n.propValues;
              (this.CZ = s),
                (this.Cb = r),
                (this.Ca = t),
                (this.Cc = e),
                (this.Ce = u),
                (this.Cd = i),
                (this.Cf = o),
                (this.Cg = a);
            }
          })(h()));
      }
      function h() {
        var n = f.b.get(),
          t = n.hash,
          r = n.abKey,
          e = n.expoKeyStr,
          i = n.internalExpoKeys,
          u = n.lastSyncTime,
          o = n.propExpoKeys,
          a = n.propValues,
          s = n.refresh;
        return (
          n.overridePropValues,
          {
            abHash: t,
            abKey: r,
            expoKeyStr: e,
            internalExpoKeys: i,
            lastSyncTime: u,
            propExpoKeys: o,
            propValues: a,
            refresh: s,
            overridePropValues: null,
          }
        );
      }
      function v() {
        if (l())
          return f.b.flush().then(() => {
            s.rewrite(h());
          });
      }
      function p() {
        l() &&
          (s.rewrite(h()),
          "backend" !== a.type
            ? (a.type,
              a.backend.fireAndForget("backend", "syncAbCacheFromStorage", {}))
            : a.bridge.fireAndForget("event", "syncAbCacheFromStorage", {}));
      }
      function g(n, t) {
        if (!l())
          return __LOG__(3)`getAbProp: using defaults for ${n}`, (0, c.b)(n);
        var r = s.getAbProp(n);
        return (
          null == r && (r = (0, c.b)(n)),
          (function (n) {
            if (null != u && null != o) {
              var t = u,
                r = o,
                i = (0, e.a)(c.a, n),
                a = null != i ? t[i] : null;
              if (null != a) {
                var s = a;
                r.has(s) ||
                  (__LOG__(
                    2
                  )`addInternalExpoKey: config ${n} added to exposure set`,
                  r.add(s),
                  f.b.set(
                    Object.assign({}, f.b.get(), {
                      internalExpoKeys: r,
                      expoKeyStr: Array.from(r).join(","),
                    })
                  ));
              }
            }
          })(n),
          r
        );
      }
      function _(n, t) {}
    },
    ,
    ,
    function (n, t, r) {
      function e() {
        return [];
      }
      function i() {
        return [];
      }
      function u(n, t) {
        return n.filter(t);
      }
      function o(n, t) {
        return h(n.map(t));
      }
      function a(n, t) {
        for (var r = n.length === t.length, e = 0; r && e < n.length; e++)
          n[e] !== t[e] && (r = !1);
        return r;
      }
      function s(n, t) {
        for (var r = 0; r < n.length; r++) if (n[r] === t) return n;
        return n.concat([t]).sort();
      }
      function c(n, t) {
        if (n.length < t.length) return !1;
        for (var r = !0, e = 0, i = 0; r && i < t.length; i++)
          do {
            r = n[e] === t[i];
          } while (!r && ++e < n.length);
        return r;
      }
      function f(n, t) {
        for (var r = [], e = 0, i = 0; e < n.length; e++) {
          for (var u = n[e]; i < t.length && u > t[i]; ) i++;
          (i === t.length || u < t[i]) && r.push(u);
        }
        return r;
      }
      function l(n, t) {
        for (var r = [], e = 0, i = 0; e < n.length && i < t.length; ) {
          var u = n[e],
            o = t[i];
          u < o ? e++ : u === o ? (r.push(u), e++, i++) : i++;
        }
        return r;
      }
      function d(n, t) {
        for (var r = [], e = 0, i = 0; e < n.length && i < t.length; )
          n[e] < t[i]
            ? r.push(n[e++])
            : n[e] === t[i]
            ? (r.push(n[e++]), i++)
            : r.push(t[i++]);
        for (; e < n.length; ) r.push(n[e++]);
        for (; i < t.length; ) r.push(t[i++]);
        return r;
      }
      function h(n) {
        return v(n.slice().sort());
      }
      function v(n) {
        for (var t = !1, r = 0; r < n.length - 1; r++)
          n[r] === n[r + 1] && (t = !0);
        if (!t) return n;
        for (var e = [], i = 0; i < n.length - 1; i++)
          n[i] !== n[i + 1] && e.push(n[i]);
        return e.push(n[n.length - 1]), e;
      }
      function p(n) {
        return Array.from(n).sort();
      }
      function g(n, t, r) {
        for (var e = null, i = 0; !e && i < n.length; i++)
          n[i] === t && (((e = n.slice())[i] = r), (e = v(e.sort())));
        return e || n;
      }
      function _(n) {
        return [n];
      }
      function m(n) {
        return n.length < 1;
      }
      r.d(t, "f", function () {
        return e;
      }),
        r.d(t, "e", function () {
          return i;
        }),
        r.d(t, "g", function () {
          return u;
        }),
        r.d(t, "k", function () {
          return o;
        }),
        r.d(t, "b", function () {
          return a;
        }),
        r.d(t, "a", function () {
          return s;
        }),
        r.d(t, "d", function () {
          return c;
        }),
        r.d(t, "n", function () {
          return f;
        }),
        r.d(t, "h", function () {
          return l;
        }),
        r.d(t, "j", function () {
          return d;
        }),
        r.d(t, "m", function () {
          return h;
        }),
        r.d(t, "c", function () {
          return p;
        }),
        r.d(t, "o", function () {
          return g;
        }),
        r.d(t, "l", function () {
          return _;
        }),
        r.d(t, "i", function () {
          return m;
        });
    },
    function (n, t, r) {
      r.d(t, "a", function () {
        return d;
      }),
        r.d(t, "k", function () {
          return h;
        }),
        r.d(t, "j", function () {
          return v;
        }),
        r.d(t, "i", function () {
          return p;
        }),
        r.d(t, "l", function () {
          return g;
        }),
        r.d(t, "h", function () {
          return _;
        }),
        r.d(t, "c", function () {
          return m;
        }),
        r.d(t, "e", function () {
          return y;
        }),
        r.d(t, "d", function () {
          return b;
        }),
        r.d(t, "n", function () {
          return w;
        }),
        r.d(t, "f", function () {
          return k;
        }),
        r.d(t, "g", function () {
          return E;
        }),
        r.d(t, "b", function () {
          return A;
        }),
        r.d(t, "m", function () {
          return O;
        });
      var e,
        i,
        u = new Map([]),
        o = r(8),
        a = r.n(o);
      function s(n, t) {
        var r = "en",
          e = "US",
          i = "en",
          u = (t || self.navigator.language || "-").split("-"),
          o = a()(u, 2),
          s = o[0],
          c = o[1];
        return (
          (s = s.toLowerCase()),
          (c = c && c.toUpperCase()),
          n.includes(s + "-" + c)
            ? ((r = s), (e = c), (i = s + "-" + c))
            : n.includes(s) && ((r = s), (e = c), (i = s)),
          { lg: r, lc: e, langTag: i }
        );
      }
      var c = { ar: !0, fa: !0, ur: !0, he: !0, dv: !0, ku: !0 };
      function f(n) {
        return "number" == typeof n
          ? i.constants[n]
          : (function (n) {
              return u.get(n);
            })(n);
      }
      function l(n) {
        var t = n[n.length - 1];
        return (
          "number" == typeof t
            ? i.dynamics[t]
            : (function (n) {
                return u.get(n);
              })(t)
        ).apply(null, n);
      }
      function d(n) {
        return n;
      }
      function h(n) {
        if ("number" == typeof n || "string" == typeof n) return f(n);
        var t = l(n);
        return "string" == typeof t ? t : t.join("");
      }
      function v(n) {
        return "number" == typeof n || "string" == typeof n ? f(n) : l(n);
      }
      function p(n) {
        return i.translateInt(n);
      }
      function g() {
        return i.zero;
      }
      function _(n, t) {
        for (var r = [], e = h(283), i = !1, u = 0; u < n.length; u++)
          i ? r.push(e) : (i = !0), r.push(n[u]);
        return t && (i && r.push(e), r.push(h(181))), r;
      }
      function m() {
        return e.langTag;
      }
      function y(n) {
        var t;
        null != n && (t = n),
          (e = s(
            ["bn", "en", "gu", "hi", "kn", "ml", "mr", "pa", "ta", "te", "ur"],
            t
          ));
      }
      function b() {
        return (
          null == e &&
            (__LOG__(
              3
            )`Called getLgLc without having set it first; setting browser default`,
            (e = s([
              "bn",
              "en",
              "gu",
              "hi",
              "kn",
              "ml",
              "mr",
              "pa",
              "ta",
              "te",
              "ur",
            ]))),
          e
        );
      }
      function w(n) {
        i = n;
      }
      function k(n) {
        return !!c[n];
      }
      function E() {
        return k(e.lg);
      }
      var S = null;
      function A() {
        return null == S && (S = i.countries()), S;
      }
      function O(n) {
        return `⁨${n}⁩`;
      }
    },
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "c", function () {
          return f;
        }),
        r.d(t, "b", function () {
          return l;
        }),
        r.d(t, "d", function () {
          return K;
        }),
        r.d(t, "e", function () {
          return F;
        });
      var e = r(33),
        i = 65533,
        u = new Uint8Array(10),
        o = new Uint8Array(0),
        a = class n {
          constructor() {
            var t = this,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : o,
              e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            (this.write = function () {
              for (var r = 0; r < arguments.length; r++) {
                var e = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                "string" == typeof e
                  ? t.writeString(e)
                  : "number" == typeof e
                  ? t.writeUint8(e)
                  : e instanceof n
                  ? t.writeBinary(e)
                  : e instanceof ArrayBuffer
                  ? t.writeBuffer(e)
                  : e instanceof Uint8Array && t.writeByteArray(e);
              }
            }),
              r instanceof ArrayBuffer
                ? ((this.Ci = new Uint8Array(r)),
                  (this.Cj = this.Cl = r.byteLength))
                : r instanceof Uint8Array &&
                  ((this.Ci = r), (this.Cj = this.Cl = r.length)),
              (this.Cm = 0),
              (this.Cn = this.Ck = 0),
              (this.Co = null),
              (this.Cp = e),
              (this.Cq = 0),
              (this.Cr = 0);
          }
          size() {
            return this.Cj - this.Ck;
          }
          peek(n, t) {
            this.Cq++;
            var r = this.Ck,
              e = this.Cm;
            try {
              return n(this, t);
            } finally {
              this.Cq--, (this.Ck = r - (this.Cm - e));
            }
          }
          advance(n) {
            this.Cs(n);
          }
          readWithViewParser(n, t, r, e) {
            return t(this.Ct(), this.Cs(n), n, r, e);
          }
          readWithBytesParser(n, t, r, e) {
            return t(this.Ci, this.Cs(n), n, r, e);
          }
          readUint8() {
            return d(this, 1, v, !1);
          }
          readInt8() {
            return d(this, 1, v, !0);
          }
          readUint16() {
            return d(
              this,
              2,
              p,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.Cp
            );
          }
          readInt32() {
            return d(
              this,
              4,
              g,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.Cp
            );
          }
          readUint32() {
            return d(
              this,
              4,
              _,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.Cp
            );
          }
          readInt64() {
            return d(
              this,
              8,
              m,
              K,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.Cp
            );
          }
          readUint64() {
            return d(
              this,
              8,
              m,
              F,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.Cp
            );
          }
          readLong(n) {
            return d(
              this,
              8,
              m,
              n,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Cp
            );
          }
          readFloat32() {
            return d(
              this,
              4,
              y,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.Cp
            );
          }
          readFloat64() {
            return d(
              this,
              8,
              b,
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.Cp
            );
          }
          readVarInt(n) {
            var t = h(this, 0, w, this.size());
            return h(this, t, k, n);
          }
          readBuffer() {
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.size();
            return 0 === n ? new ArrayBuffer(0) : h(this, n, E);
          }
          readByteArray() {
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.size();
            return 0 === n ? new Uint8Array(0) : h(this, n, S);
          }
          readBinary() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.size(),
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.Cp;
            if (0 === t) return new n(void 0, r);
            var e = h(this, t, S);
            return new n(e, r);
          }
          indexOf(n) {
            if (0 === n.length) return 0;
            for (
              var t = this.Ci, r = this.Cj, e = this.Ck, i = 0, u = e, o = e;
              o < r;
              o++
            )
              if (t[o] === n[i]) {
                if ((0 === i && (u = o), ++i === n.byteLength))
                  return o - e - n.byteLength + 1;
              } else i > 0 && ((i = 0), (o = u));
            return -1;
          }
          readString(n) {
            return h(this, n, A);
          }
          ensureCapacity(n) {
            this.Cu(this.Ck + n);
          }
          ensureAdditionalCapacity(n) {
            this.Cu(this.Cl + n);
          }
          writeToView(n, t, r, e) {
            var i = this.Cv(n);
            return t(this.Ct(), i, n, r, e);
          }
          writeToBytes(n, t, r, e) {
            var i = this.Cv(n);
            return t(this.Ci, i, n, r, e);
          }
          writeUint8(n) {
            U(n, 0, 256, "uint8"), I(this, 1, C, n, !1);
          }
          writeInt8(n) {
            U(n, -128, 128, "signed int8"), I(this, 1, C, n, !0);
          }
          writeUint16(n) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Cp;
            U(n, 0, 65536, "uint16"), O(this, 2, T, n, t);
          }
          writeInt16(n) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Cp;
            U(n, -32768, 32768, "signed int16"), O(this, 2, M, n, t);
          }
          writeUint32(n) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Cp;
            U(n, 0, 4294967296, "uint32"), O(this, 4, $, n, t);
          }
          writeInt32(n) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Cp;
            U(n, -2147483648, 2147483648, "signed int32"), O(this, 4, N, n, t);
          }
          writeUint64(n) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Cp;
            U(n, 0, 0x10000000000000000, "uint64"), O(this, 8, P, n, t);
          }
          writeInt64(n) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Cp;
            U(n, -0x8000000000000000, 0x8000000000000000, "signed int64"),
              O(this, 8, P, n, t);
          }
          writeFloat32(n) {
            O(
              this,
              4,
              D,
              n,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Cp
            );
          }
          writeFloat64(n) {
            O(
              this,
              8,
              L,
              n,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Cp
            );
          }
          writeVarInt(n) {
            U(
              n,
              -0x8000000000000000,
              0x8000000000000000,
              "varint (signed int64)"
            );
            var t = n < 0,
              r = t ? -n : n,
              e = Math.floor(r / 4294967296),
              i = r - 4294967296 * e;
            t && ((e = ~e), 0 === i ? e++ : (i = -i)),
              I(this, B(e, i), G, e, i);
          }
          writeVarIntFromHexLong(n) {
            for (
              var t = (0, e.g)(n),
                r = t ? (0, e.j)(n) : n,
                i = (0, e.h)(r),
                u = 0,
                o = 0,
                a = 0;
              a < e.a;
              a++
            )
              (u = (u << 4) | (o >>> 28)), (o = (o << 4) | (0, e.e)(i, a));
            t && ((u = ~u), 0 === o ? u++ : (o = -o)),
              I(this, B(u, o), G, u, o);
          }
          writeBinary(n) {
            var t = n.peek((n) => n.readByteArray());
            if (t.length) {
              var r = this.Cv(t.length);
              this.Ci.set(t, r);
            }
          }
          writeBuffer(n) {
            this.writeByteArray(new Uint8Array(n));
          }
          writeByteArray(n) {
            var t = this.Cv(n.length);
            this.Ci.set(n, t);
          }
          writeBufferView(n) {
            this.writeByteArray(
              new Uint8Array(n.buffer, n.byteOffset, n.byteLength)
            );
          }
          writeString(n) {
            I(this, f(n), x, n);
          }
          writeHexLong(n) {
            O(
              this,
              8,
              R,
              n,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.Cp
            );
          }
          writeBytes() {
            for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
              t[r] = arguments[r];
            for (var e = 0; e < t.length; e++) U(t[e], 0, 256, "byte");
            I(this, t.length, j, t);
          }
          writeAtomically(n, t) {
            this.Cr++;
            var r = this.Cl,
              e = this.Cm;
            try {
              var i = n(this, t);
              return (r = this.Cl), (e = this.Cm), i;
            } finally {
              this.Cr--, (this.Cl = r - (this.Cm - e));
            }
          }
          writeWithVarIntLength(n, t) {
            var r = this.Cl,
              e = this.writeAtomically(n, t),
              i = this.Cl;
            this.writeVarInt(i - r);
            for (var o = this.Cl - i, a = this.Ci, s = 0; s < o; s++)
              u[s] = a[i + s];
            for (var c = i - 1; c >= r; c--) a[c + o] = a[c];
            for (var f = 0; f < o; f++) a[r + f] = u[f];
            return e;
          }
          static build() {
            for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
              r[e] = arguments[e];
            for (var i = 0, u = 0; u < r.length; u++) {
              var o = r[u];
              "string" == typeof o
                ? (i += f(o))
                : "number" == typeof o
                ? i++
                : o instanceof n
                ? (i += o.size())
                : o instanceof ArrayBuffer
                ? (i += o.byteLength)
                : o instanceof Uint8Array && (i += o.length);
            }
            var a = new n();
            return a.ensureCapacity(i), a.write.apply(a, arguments), a;
          }
          Ct() {
            return (
              this.Co ||
              (this.Co = new DataView(this.Ci.buffer, this.Ci.byteOffset))
            );
          }
          Cs(n) {
            if (n < 0)
              throw new Error(
                "ReadError: given negative number of bytes to read"
              );
            var t = this.Ck,
              r = t + n;
            if (r > this.Cj)
              throw new Error(
                t === this.Cj
                  ? "ReadError: tried to read from depleted binary"
                  : "ReadError: tried to read beyond end of binary"
              );
            return (this.Ck = r), this.Cq || (this.Cn = r), t;
          }
          Cu(n) {
            var t = this.Ci;
            if (n <= t.length) return n;
            var r = this.Cn,
              e = n - r,
              i = Math.max(e, 2 * (t.length - r), 64),
              u = new Uint8Array(i);
            return (
              r
                ? (u.set(t.subarray(r)),
                  (this.Cm += r),
                  (this.Ck -= r),
                  (this.Cj -= r),
                  (this.Cl -= r),
                  (this.Cn = 0))
                : u.set(t),
              (this.Ci = u),
              (this.Co = null),
              e
            );
          }
          Cv(n) {
            var t = this.Cu(this.Cl + n),
              r = this.Cl;
            return (this.Cl = t), this.Cr || (this.Cj = t), r;
          }
        },
        s = "",
        c = 0;
      function f(n) {
        if (n === s) return c;
        for (var t = n.length, r = 0, e = 0; e < t; e++) {
          var i = n.charCodeAt(e);
          if (i < 128) r++;
          else if (i < 2048) r += 2;
          else if (i < 55296 || (57344 <= i && i <= 65535)) r += 3;
          else if (55296 <= i && i < 56320 && e + 1 !== t) {
            var u = n.charCodeAt(e + 1);
            56320 <= u && u < 57344 ? (e++, (r += 4)) : (r += 3);
          } else r += 3;
        }
        return (s = n), (c = r);
      }
      function l(n, t, r) {
        var e = t >> 21;
        if (n) {
          var i = Boolean(2097151 & t || r);
          return 0 === e || (-1 === e && i);
        }
        return 0 === e;
      }
      function d(n, t, r, e, i) {
        return n.readWithViewParser(t, r, e, i);
      }
      function h(n, t, r, e, i) {
        return n.readWithBytesParser(t, r, e, i);
      }
      function v(n, t, r, e) {
        return e ? n.getInt8(t) : n.getUint8(t);
      }
      function p(n, t, r, e) {
        return n.getUint16(t, e);
      }
      function g(n, t, r, e) {
        return n.getInt32(t, e);
      }
      function _(n, t, r, e) {
        return n.getUint32(t, e);
      }
      function m(n, t, r, e, i) {
        return e(n.getInt32(i ? t + 4 : t, i), n.getInt32(i ? t : t + 4, i));
      }
      function y(n, t, r, e) {
        return n.getFloat32(t, e);
      }
      function b(n, t, r, e) {
        return n.getFloat64(t, e);
      }
      function w(n, t, r, e) {
        for (var i = Math.min(e, 10), u = 0, o = 128; u < i && 128 & o; )
          o = n[t + u++];
        if (10 === u && o > 1)
          throw new Error("ParseError: varint exceeds 64 bits");
        return 128 & o ? u + 1 : u;
      }
      function k(n, t, r, e) {
        var i = 0,
          u = 0,
          o = r;
        10 === r && (u = 1 & n[t + --o]);
        for (var a = o - 1; a >= 0; a--)
          (i = (i << 7) | (u >>> 25)), (u = (u << 7) | (127 & n[t + a]));
        return e(i, u);
      }
      function E(n, t, r) {
        var e = t + n.byteOffset,
          i = n.buffer;
        return 0 === e && r === i.byteLength ? i : i.slice(e, e + r);
      }
      function S(n, t, r) {
        return n.subarray(t, t + r);
      }
      function A(n, t, r) {
        for (var e = t + r, u = [], o = null, a = t; a < e; a++) {
          u.length > 5e3 &&
            (o || (o = []),
            o.push(String.fromCharCode.apply(String, u)),
            (u = []));
          var s = 0 | n[a];
          if (0 == (128 & s)) u.push(s);
          else if (192 == (224 & s)) {
            var c = z(n, a + 1, e);
            if (c) {
              a++;
              var f = ((31 & s) << 6) | (63 & c);
              f >= 128 ? u.push(f) : u.push(i);
            } else u.push(i);
          } else if (224 == (240 & s)) {
            var l = z(n, a + 1, e),
              d = z(n, a + 2, e);
            if (l && d) {
              a += 2;
              var h = ((15 & s) << 12) | ((63 & l) << 6) | (63 & d);
              h >= 2048 && !(55296 <= h && h < 57344) ? u.push(h) : u.push(i);
            } else l ? (a++, u.push(i)) : u.push(i);
          } else if (240 == (248 & s)) {
            var v = z(n, a + 1, e),
              p = z(n, a + 2, e),
              g = z(n, a + 3, e);
            if (v && p && g) {
              a += 3;
              var _ =
                ((7 & s) << 18) | ((63 & v) << 12) | ((63 & p) << 6) | (63 & g);
              if (_ >= 65536 && _ <= 1114111) {
                var m = _ - 65536;
                u.push(55296 | (m >> 10), 56320 | (1023 & m));
              } else u.push(i);
            } else
              v && p ? ((a += 2), u.push(i)) : v ? (a++, u.push(i)) : u.push(i);
          } else u.push(i);
        }
        var y = String.fromCharCode.apply(String, u);
        return o ? (o.push(y), o.join("")) : y;
      }
      function O(n, t, r, e, i) {
        return n.writeToView(t, r, e, i);
      }
      function I(n, t, r, e, i) {
        return n.writeToBytes(t, r, e, i);
      }
      function C(n, t, r, e) {
        n[t] = e;
      }
      function T(n, t, r, e, i) {
        n.setUint16(t, e, i);
      }
      function M(n, t, r, e, i) {
        n.setInt16(t, e, i);
      }
      function $(n, t, r, e, i) {
        n.setUint32(t, e, i);
      }
      function N(n, t, r, e, i) {
        n.setInt32(t, e, i);
      }
      function P(n, t, r, e, i) {
        var u = e < 0,
          o = u ? -e : e,
          a = Math.floor(o / 4294967296),
          s = o - 4294967296 * a;
        u && ((a = ~a), 0 === s ? a++ : (s = -s)),
          n.setUint32(i ? t + 4 : t, a, i),
          n.setUint32(i ? t : t + 4, s, i);
      }
      function D(n, t, r, e, i) {
        n.setFloat32(t, e, i);
      }
      function L(n, t, r, e, i) {
        n.setFloat64(t, e, i);
      }
      function G(n, t, r, e, i) {
        for (var u = e, o = i, a = t + r - 1, s = t; s < a; s++)
          (n[s] = 128 | (127 & o)), (o = (u << 25) | (o >>> 7)), (u >>>= 7);
        n[a] = o;
      }
      function x(n, t, r, e) {
        for (var i = t, u = e.length, o = 0; o < u; o++) {
          var a = e.charCodeAt(o);
          if (a < 128) n[i++] = a;
          else if (a < 2048)
            (n[i++] = 192 | (a >> 6)), (n[i++] = 128 | (63 & a));
          else if (a < 55296 || 57344 <= a)
            (n[i++] = 224 | (a >> 12)),
              (n[i++] = 128 | ((a >> 6) & 63)),
              (n[i++] = 128 | (63 & a));
          else if (55296 <= a && a < 56320 && o + 1 !== u) {
            var s = e.charCodeAt(o + 1);
            if (56320 <= s && s < 57344) {
              o++;
              var c = 65536 + (((1023 & a) << 10) | (1023 & s));
              (n[i++] = 240 | (c >> 18)),
                (n[i++] = 128 | ((c >> 12) & 63)),
                (n[i++] = 128 | ((c >> 6) & 63)),
                (n[i++] = 128 | (63 & c));
            } else (n[i++] = 239), (n[i++] = 191), (n[i++] = 189);
          } else (n[i++] = 239), (n[i++] = 191), (n[i++] = 189);
        }
      }
      function R(n, t, r, i, u) {
        for (
          var o = (0, e.g)(i), a = (0, e.h)(i), s = 0, c = 0, f = 0;
          f < 16;
          f++
        )
          (s = (s << 4) | (c >>> 28)), (c = (c << 4) | (0, e.e)(a, f));
        o && ((s = ~s), 0 === c ? s++ : (c = -c)),
          n.setUint32(u ? t + 4 : t, s, u),
          n.setUint32(u ? t : t + 4, c, u);
      }
      function j(n, t, r, e) {
        for (var i = 0; i < r; i++) n[t + i] = e[i];
      }
      function B(n, t) {
        var r, e;
        for (n ? ((r = 5), (e = n >>> 3)) : ((r = 1), (e = t >>> 7)); e; )
          r++, (e >>>= 7);
        return r;
      }
      function U(n, t, r, e) {
        if (
          "number" != typeof n ||
          n != n ||
          Math.floor(n) !== n ||
          n < t ||
          n >= r
        )
          throw new TypeError(
            "string" == typeof n
              ? `WriteError: string "${n}" is not a valid ${e}`
              : `WriteError: ${String(n)} is not a valid ${e}`
          );
      }
      function q(n, t, r) {
        var e =
          4294967296 * (t >= 0 || n ? t : 4294967296 + t) +
          (r >= 0 ? r : 4294967296 + r);
        if (!l(n, t, r))
          throw new Error(`ReadError: integer exceeded 53 bits (${e})`);
        return e;
      }
      function K(n, t) {
        return q(!0, n, t);
      }
      function F(n, t) {
        return q(!1, n, t);
      }
      function z(n, t, r) {
        if (t >= r) return 0;
        var e = 0 | n[t];
        return 128 == (192 & e) ? e : 0;
      }
    },
    function (n, t, r) {
      r.d(t, "a", function () {
        return e;
      }),
        r.d(t, "d", function () {
          return i;
        }),
        r.d(t, "b", function () {
          return u;
        }),
        r.d(t, "c", function () {
          return o;
        });
      var e = {
        BLOCKED: "BLOCKLIST_DB_KEY",
        BLOCKLIST_DHASH: "BLOCKLIST_DHASH",
        GROUP_INVITE_REVOKES: "GRP_INV_RVK_DB_KEY",
        APPWRITE_META_KEY: "lastAppWrite",
        REGISTERED: "REGISTERED_DB_KEY",
        INVALID_CONTACTS: "INVALID_CONTACTS_DB_KEY",
        STATUS_PRIVACY_META_KEY: "status",
        STATUS_MMS_THUMB_LAST_CHECKED: "STATUS_MMS_THUMB_LAST_CHECKED",
        PSA_STATUS_META_KEY: "statusPSA",
        DELETED_MEDIA: "DELETED_MEDIA",
        RECENT_EMOJIS: "RECENT_EMOJIS",
        WAM_CHATS_CACHE: "WAM_CHATS_CACHE",
        EPHEMERAL_UPGRADE_TS: "EPHEMERAL_UPGRADE_TS",
        EPHEMERAL_QUERIED_GROUP_SETTINGS: "EPHEMERAL_QUERIED_GROUP_SETTINGS",
        USER_NOTICE: "USER_NOTICE",
        RECENT_GIFS: "RECENT_GIFS",
        ADV_COMPANION_INFO: "ADV_COMPANIONS",
        DELETE_EXPIRED_DEVICES_JOB: "DELETE_EXPIRED_DEVICES_JOB",
        KEEP_IN_CHAT_SYSTEM_MESSAGES_ADDED:
          "KEEP_IN_CHAT_SYSTEM_MESSAGES_ADDED",
      };
      function i(n, t) {
        return n.get(t);
      }
      function u(n) {
        return `${e.DELETED_MEDIA}:${n}`;
      }
      function o(n, t) {
        var r = e.DELETED_MEDIA + ":",
          i = e.DELETED_MEDIA + ";";
        return n.where("key").between(r, i, !1, !1).limit(t).toArray();
      }
    },
    function (n, t) {
      function r(n, t, r, e, i, u, o) {
        try {
          var a = n[u](o),
            s = a.value;
        } catch (n) {
          return void r(n);
        }
        a.done ? t(s) : Promise.resolve(s).then(e, i);
      }
      n.exports = function (n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (i, u) {
            var o = n.apply(t, e);
            function a(n) {
              r(o, i, u, a, s, "next", n);
            }
            function s(n) {
              r(o, i, u, a, s, "throw", n);
            }
            a(void 0);
          });
        };
      };
    },
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "j", function () {
        return f;
      }),
        r.d(t, "i", function () {
          return l;
        }),
        r.d(t, "e", function () {
          return d;
        }),
        r.d(t, "a", function () {
          return h;
        }),
        r.d(t, "c", function () {
          return v;
        }),
        r.d(t, "h", function () {
          return p;
        }),
        r.d(t, "f", function () {
          return b;
        }),
        r.d(t, "g", function () {
          return w;
        }),
        r.d(t, "b", function () {
          return k;
        }),
        r.d(t, "d", function () {
          return E;
        }),
        r.d(t, "k", function () {
          return O;
        });
      var e = r(26),
        i = r.n(e),
        u = r(8),
        o = r.n(u),
        a = r(11),
        s = r(85),
        c = r(110);
      function f(n, t) {
        return new Promise((r, e) => {
          var i = t.responseType,
            u = t.headers,
            o = t.overrideMimeType,
            a = new XMLHttpRequest({ mozSystem: !0 });
          if (
            (a.open("GET", n),
            a.setRequestHeader("User-Agent", "WhatsApp/2.2245.7 K"),
            (a.responseType = i),
            u)
          )
            for (var s in u)
              try {
                a.setRequestHeader(s, u[s]);
              } catch (n) {
                return (
                  __LOG__(
                    4
                  )`Tried to set an incorrect header value in privileged request`,
                  SEND_LOGS("privileged-request-incorrect-header"),
                  void e(n)
                );
              }
          o && a.overrideMimeType(o),
            (a.onprogress = (n) => {
              if (null != t.maxSize) {
                if (n.total > t.maxSize && !t.keepPartial)
                  return (
                    e(new Error("Requested resource was too large")),
                    void a.abort()
                  );
                n.loaded > t.maxSize &&
                  (t.keepPartial
                    ? r({ response: a.response, responseURL: a.responseURL })
                    : e(new Error("Requested resource was too large")),
                  a.abort());
              }
            }),
            (a.onload = () => {
              200 === a.status &&
                r({ response: a.response, responseURL: a.responseURL }),
                e(new Error(`mozHttp.getRequest onerror(${a.statusText})`));
            }),
            (a.onerror = () => {
              e(new Error(`mozHttp.getRequest onerror(${a.statusText})`));
            }),
            a.send();
        });
      }
      function l(n) {
        var t = (function (n) {
          var t = n.toLowerCase();
          return t.startsWith("https://") || t.startsWith("http://");
        })(n)
          ? n
          : "https://" + n;
        try {
          return new URL(t);
        } catch (n) {
          __LOG__(4)`Failed to create Url ${t}: ${n}`;
        }
      }
      function d(n) {
        var t = l(n);
        if (t) return t.hostname;
      }
      var h = {
        OK: 200,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        REQUEST_TIMEOUT: 408,
        GONE: 410,
        PAYLOAD_TOO_LARGE: 413,
        UNSUPPORTED_MEDIA_TYPE: 415,
        INTERNAL_SERVER_ERROR: 500,
        BAD_GATEWAY: 502,
        SERVICE_UNAVAILABLE: 503,
        GATEWAY_TIMEOUT: 504,
        INSUFFICIENT_STORAGE: 507,
      };
      function v(n, t, r) {
        if (!/^https:\/\/[-\w.]+\.\w+$/.test(n))
          throw new Error(`buildUrl given invalid host "${n}"`);
        if (!t.startsWith("/"))
          throw new Error(`buildUrl given invalid path "${t}"`);
        var e = r,
          i = `${n}${t}`;
        if (!e) return i;
        var u = Object.keys(e).map((n) => {
          var t = e[n];
          t instanceof ArrayBuffer && (t = new Uint8Array(t));
          var r =
            t instanceof Uint8Array
              ? Array.prototype.slice
                  .call(t)
                  .map((n) => "%" + n.toString(16))
                  .join("")
              : encodeURIComponent(t.toString());
          return `${encodeURIComponent(n)}=${r}`;
        });
        if (u.length > 0) {
          var o = u.join("&");
          return i.includes("?") ? `${i}&${o}` : `${i}?${o}`;
        }
        return i;
      }
      function p(n) {
        if (!n.startsWith("https://")) throw new Error("Non-https url " + n);
        return n;
      }
      function g(n, t, r) {
        var e;
        return (
          (e = 0 === n ? 0 : Math.pow(2, n)) > t && (e = t),
          r && (e *= 1 + r * Math.random()),
          e
        );
      }
      function _(n, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.1;
        return (0, c.a)(Math.floor(1e3 * g(n, t, r)));
      }
      var m = 180,
        y = 0.1;
      function b(n) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          e = t.max,
          i = void 0 === e ? 10 : e;
        function u(t) {
          return fetch(n, r).catch((n) => (t < i ? o(t) : Promise.reject(n)));
        }
        function o(n) {
          var t = n + 1;
          return _(t, m, y).then(() => u(t));
        }
        return Promise.resolve(u(0));
      }
      function w(n) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          e = t.max,
          i = void 0 === e ? 10 : e;
        function u(t) {
          return fetch(n, r)
            .then((n) =>
              n.ok
                ? n.blob()
                : Promise.reject(
                    new s.a("fetchRetryBlob: fail status " + n.status, n.status)
                  )
            )
            .catch((n) =>
              n instanceof s.a && n.code >= 400 && n.code < 500
                ? Promise.reject(n)
                : t < i
                ? o(t)
                : Promise.reject(n)
            );
        }
        function o(n) {
          var t = n + 1;
          return _(t, m, y).then(() => u(t));
        }
        return Promise.resolve(u(0));
      }
      function k(n) {
        return (0, a.w)(n)
          .map((n) => {
            var t = o()(n, 2),
              r = t[0],
              e = t[1];
            return `${encodeURIComponent(r)}=${encodeURIComponent(e)}`;
          })
          .join("&");
      }
      function E(n, t) {
        return S.apply(this, arguments);
      }
      function S() {
        return (S = i()(function* (n, t) {
          var r, e;
          try {
            r = yield A(n, t);
          } catch (n) {
            return (
              __LOG__(2)`doPostRequest network error ${n}`,
              { type: "network-error" }
            );
          }
          if (
            (__LOG__(2)`doPostRequest http status ${r.status}`,
            r.status !== h.OK)
          )
            return { type: "http-error", code: r.status };
          try {
            e = yield r.json();
          } catch (n) {
            return (
              __LOG__(2)`doPostRequest network error on body ${n}`,
              { type: "body-network-error" }
            );
          }
          return { type: "ok", json: e };
        })).apply(this, arguments);
      }
      function A(n, t) {
        var r;
        return new Promise((e, i) => {
          (r = new XMLHttpRequest({ mozSystem: !0 })).open("POST", n),
            (r.onload = e),
            (r.onerror = () => {
              i(new Error(`mozHttp.getRequest onerror(${r.statusText})`));
            }),
            t && t.body
              ? r.send(new Blob([t.body], { type: "text/plain" }))
              : r.send();
        }).then(() => ({
          status: r.status,
          json: () => Promise.resolve(JSON.parse(r.responseText)),
        }));
      }
      var O = function (n, t) {
        return Promise.resolve(fetch(n, t));
      };
    },
    function (n, t, r) {
      r.d(t, "b", function () {
        return u;
      }),
        r.d(t, "a", function () {
          return o;
        }),
        r.d(t, "H", function () {
          return c;
        }),
        r.d(t, "I", function () {
          return f;
        }),
        r.d(t, "J", function () {
          return l;
        }),
        r.d(t, "q", function () {
          return d;
        }),
        r.d(t, "o", function () {
          return h;
        }),
        r.d(t, "u", function () {
          return v;
        }),
        r.d(t, "h", function () {
          return p;
        }),
        r.d(t, "i", function () {
          return g;
        }),
        r.d(t, "v", function () {
          return _;
        }),
        r.d(t, "c", function () {
          return m;
        }),
        r.d(t, "g", function () {
          return y;
        }),
        r.d(t, "d", function () {
          return b;
        }),
        r.d(t, "A", function () {
          return w;
        }),
        r.d(t, "m", function () {
          return k;
        }),
        r.d(t, "F", function () {
          return E;
        }),
        r.d(t, "C", function () {
          return S;
        }),
        r.d(t, "B", function () {
          return A;
        }),
        r.d(t, "z", function () {
          return O;
        }),
        r.d(t, "e", function () {
          return I;
        }),
        r.d(t, "f", function () {
          return C;
        }),
        r.d(t, "n", function () {
          return T;
        }),
        r.d(t, "G", function () {
          return M;
        }),
        r.d(t, "t", function () {
          return $;
        }),
        r.d(t, "l", function () {
          return N;
        }),
        r.d(t, "y", function () {
          return P;
        }),
        r.d(t, "r", function () {
          return D;
        }),
        r.d(t, "k", function () {
          return L;
        }),
        r.d(t, "x", function () {
          return G;
        }),
        r.d(t, "s", function () {
          return x;
        }),
        r.d(t, "E", function () {
          return R;
        }),
        r.d(t, "D", function () {
          return j;
        }),
        r.d(t, "p", function () {
          return B;
        }),
        r.d(t, "j", function () {
          return U;
        }),
        r.d(t, "w", function () {
          return q;
        }),
        r(8);
      var e = r(11),
        i = r(7),
        u = 0,
        o = 1 / 0,
        a = "r_",
        s = "kic|";
      function c(n, t) {
        var r = m(n);
        return r ? t.chat(r) : t.status(n);
      }
      function f(n, t) {
        var r = m(n);
        return r ? t.chat(r) : t.status(n);
      }
      function l(n, t) {
        var r = m(n);
        return r
          ? t.chat(r)
          : y(n)
          ? t.status(n)
          : (function (n) {
              if (n.startsWith(a)) return n;
            })(n)
          ? t.reaction(n)
          : b(n)
          ? t.keepInChat(n)
          : t.pollUpdate(n);
      }
      function d(n, t) {
        return `${n.toString(16)}_${(0, e.p)(t)}_m`;
      }
      function h(n) {
        return (function (n, t) {
          return `${n.toString(16)}_&${(0, e.p)(0)}_m`;
        })(n);
      }
      function v(n, t) {
        return `s_${n.toString(16)}_${(0, e.p)(t)}`;
      }
      function p(n) {
        return parseInt(n.split("_")[1], 16);
      }
      function g(n) {
        return `s_${n}_/`;
      }
      function _(n) {
        return `s_${n}_g`;
      }
      function m(n) {
        if (n.endsWith("_m")) return n;
      }
      function y(n) {
        if (n.startsWith("s_")) return n;
      }
      function b(n) {
        if (n.startsWith(s)) return n;
      }
      function w(n) {
        var t = m(n);
        return t ? k(t) : null;
      }
      function k(n) {
        return parseInt(n.split("_")[0], 16);
      }
      function E(n) {
        return n + "-quoted-media";
      }
      function S(n) {
        return n + "-media";
      }
      function A(n) {
        return n + "-media-mms";
      }
      function O(n) {
        return n.endsWith("-media-mms");
      }
      function I(n) {
        if (n.endsWith("_m")) return n;
      }
      function C(n) {
        if (n.startsWith("createGroup-")) return n;
      }
      function T(n, t, r) {
        var e = "@me" === t ? t : (0, i.u)(t);
        return "deleted" === r ? `${n}$${e}` : `${n}|${e}`;
      }
      function M(n) {
        if (!n.startsWith(a)) throw Error("Invalid reactionMsgId");
        return parseInt(n.substring(a.length), 10);
      }
      function $(n) {
        return "r_" + n;
      }
      function N(n) {
        return n + "{";
      }
      function P(n) {
        return n + "}";
      }
      function D(n, t, r, e) {
        var u = "@me" === t ? t : (0, i.u)(t);
        return "deleted" === e ? `${n}|${r}$${u}` : `${n}|${r}|${u}`;
      }
      function L(n, t) {
        return n + "|" + t + "{";
      }
      function G(n, t) {
        return n + "|" + t + "}";
      }
      function x(n) {
        return "p_" + n;
      }
      function R(n) {
        if (!n.startsWith("p_")) throw Error("Invalid pollUpdateMsgId");
        return parseInt(n.substring("p_".length), 10);
      }
      function j(n) {
        if (!n.startsWith(s)) throw Error("Invalid keepInChatMsgId: prefix");
        var t = n.split("|");
        if (3 !== t.length) throw Error("Invalid keepInChatMsgId: split");
        return t[1];
      }
      function B(n, t, r) {
        return `kic|${n}|${(r ? 2 * t : 2 * t + 1) - 2}`;
      }
      function U(n) {
        return `kic|${n}|/`;
      }
      function q(n) {
        return `kic|${n}|:`;
      }
    },
    function (n, t, r) {
      r.d(t, "a", function () {
        return e;
      }),
        r.d(t, "l", function () {
          return o;
        }),
        r.d(t, "m", function () {
          return a;
        }),
        r.d(t, "n", function () {
          return s;
        }),
        r.d(t, "k", function () {
          return c;
        }),
        r.d(t, "e", function () {
          return f;
        }),
        r.d(t, "b", function () {
          return d;
        }),
        r.d(t, "c", function () {
          return h;
        }),
        r.d(t, "d", function () {
          return v;
        }),
        r.d(t, "f", function () {
          return g;
        }),
        r.d(t, "h", function () {
          return _;
        }),
        r.d(t, "g", function () {
          return m;
        }),
        r.d(t, "i", function () {
          return y;
        }),
        r.d(t, "j", function () {
          return b;
        });
      var e = 16,
        i = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70],
        u = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102];
      function o(n) {
        var t = new Uint8Array(n);
        return self.crypto.getRandomValues(t), a(t);
      }
      function a(n) {
        for (var t = [], r = 0; r < n.length; r++) {
          var e = n[r];
          t.push(i[e >> 4], i[15 & e]);
        }
        return String.fromCharCode.apply(String, t);
      }
      function s(n) {
        for (var t = [], r = 0; r < n.length; r++) {
          var e = n[r];
          t.push(u[e >> 4], u[15 & e]);
        }
        return String.fromCharCode.apply(String, t);
      }
      function c(n) {
        var t = l(n);
        if (t.length % 2 != 0)
          throw new Error(
            `parseHex given hex "${t}" which is not a multiple of 8-bits.`
          );
        for (
          var r = new Uint8Array(t.length >> 1), e = 0, i = 0;
          e < t.length;
          e += 2, i++
        )
          r[i] = (f(t, e) << 4) | f(t, e + 1);
        return r.buffer;
      }
      function f(n, t) {
        var r = n.charCodeAt(t);
        return r <= 57 ? r - 48 : r <= 70 ? 10 + r - 65 : 10 + r - 97;
      }
      function l(n) {
        if (/[^0-9a-fA-F]/.test(n))
          throw new Error(`"${n}" is not a valid hex`);
        return n;
      }
      function d(n) {
        var t = n.buffer;
        return 0 === n.byteOffset && n.length === t.byteLength
          ? t
          : t.slice(n.byteOffset, n.byteOffset + n.length);
      }
      function h(n) {
        for (var t = !0, r = n.length; t && r; ) {
          var e = n[--r];
          t = 32 <= e && e < 127;
        }
        return t ? JSON.stringify(String.fromCharCode.apply(String, n)) : a(n);
      }
      function v(n, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          e = k(n),
          i = k(t);
        return `${r ? "-" : ""}0x${e}${i}`;
      }
      function p(n, t) {
        for (var r = t - n.length, e = n, i = 0; i < r; i++) e = "0" + e;
        return e;
      }
      function g(n) {
        var t = n < 0;
        return (function (n) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = l(n);
          return w(r, e), `${t ? "-" : ""}0x${p(r, e)}`;
        })(t ? (-n).toString(16) : n.toString(16), t);
      }
      function _(n) {
        return n.substring(n.indexOf("0x") + 2);
      }
      function m(n) {
        return "-" === n[0];
      }
      function y(n, t) {
        var r = m(n);
        if (r !== m(t)) return !r;
        var e = _(n) > _(t);
        return r ? !e : e;
      }
      function b(n) {
        return m(n) ? n.slice(1) : "-" + n;
      }
      function w(n, t) {
        if (n.length > t)
          throw new Error(`"${n}" is longer than ${4 * t} bits.`);
      }
      function k(n) {
        if (n > 4294967295 || n < -4294967296)
          throw new Error("uint32ToLowerCaseHex given number over 32 bits");
        return p((n >= 0 ? n : 4294967296 + n).toString(16), 8);
      }
    },
    ,
    function (n, t, r) {
      r.d(t, "c", function () {
        return u;
      }),
        r.d(t, "m", function () {
          return o;
        }),
        r.d(t, "l", function () {
          return a;
        }),
        r.d(t, "j", function () {
          return s;
        }),
        r.d(t, "i", function () {
          return c;
        }),
        r.d(t, "o", function () {
          return f;
        }),
        r.d(t, "p", function () {
          return l;
        }),
        r.d(t, "e", function () {
          return d;
        }),
        r.d(t, "g", function () {
          return h;
        }),
        r.d(t, "h", function () {
          return v;
        }),
        r.d(t, "f", function () {
          return p;
        }),
        r.d(t, "k", function () {
          return g;
        }),
        r.d(t, "b", function () {
          return _;
        }),
        r.d(t, "a", function () {
          return m;
        }),
        r.d(t, "n", function () {
          return y;
        }),
        r.d(t, "d", function () {
          return b;
        }),
        r.d(t, "r", function () {
          return w;
        }),
        r.d(t, "q", function () {
          return k;
        });
      var e = r(2),
        i = r(32);
      function u(n) {
        return void 0 !== n.chat;
      }
      function o(n) {
        return void 0 === n.chat && void 0 === n.chatJid;
      }
      function a(n) {
        return void 0 !== n.chatJid && void 0 === n.updateType;
      }
      function s(n) {
        return void 0 !== n.chatJid && "vote" === n.updateType;
      }
      function c(n) {
        return n.type === e.f.CIPHERTEXT || n.type === e.f.MD_PLACEHOLDER;
      }
      function f(n) {
        return n.type === e.f.STICKER;
      }
      function l(n) {
        return n.type === e.f.VIDEO || n.type === e.f.GIF;
      }
      function d(n) {
        return (
          n.type === e.f.STICKER ||
          n.type === e.f.IMAGE ||
          n.type === e.f.VIDEO ||
          n.type === e.f.GIF ||
          n.type === e.f.PTT ||
          n.type === e.f.AUDIO ||
          (n.type === e.f.RICH_HSM &&
            !!n.richContent &&
            n.richContent.type === e.f.IMAGE) ||
          (n.type === e.f.RICH_HSM &&
            !!n.richContent &&
            n.richContent.type === e.f.VIDEO) ||
          (n.type === e.f.RICH_HSM &&
            !!n.richContent &&
            n.richContent.type === e.f.DOCUMENT) ||
          n.type === e.f.DOCUMENT
        );
      }
      function h(n) {
        return (
          n.type === e.f.IMAGE ||
          n.type === e.f.VIDEO ||
          n.type === e.f.GIF ||
          n.type === e.f.PTT
        );
      }
      function v(n) {
        return (
          n.type === e.f.TEXT ||
          n.type === e.f.LOCATION ||
          n.type === e.f.GROUP_INVITE
        );
      }
      function p(n) {
        return (
          n.type === e.f.IMAGE ||
          n.type === e.f.STICKER ||
          n.type === e.f.VIDEO ||
          n.type === e.f.GIF ||
          (n.type === e.f.RICH_HSM &&
            !!n.richContent &&
            n.richContent.type === e.f.IMAGE) ||
          (n.type === e.f.RICH_HSM &&
            !!n.richContent &&
            n.richContent.type === e.f.VIDEO) ||
          (n.type === e.f.RICH_HSM &&
            !!n.richContent &&
            n.richContent.type === e.f.DOCUMENT) ||
          n.type === e.f.DOCUMENT
        );
      }
      function g(n) {
        return p(n) || v(n);
      }
      function _(n) {
        if (n.hasPreview) return n.id;
      }
      function m(n) {
        if (n.hasPreview)
          return n.media && "media" === n.hasPreview
            ? (0, i.C)(n.media)
            : n.media && "mms" === n.hasPreview
            ? (0, i.B)(n.media)
            : n.id;
      }
      function y(n) {
        return (
          n.type === e.f.IMAGE ||
          n.type === e.f.VIDEO ||
          n.type === e.f.GIF ||
          n.type === e.f.TEXT
        );
      }
      function b(n) {
        return n.type === e.f.DOCUMENT && !0 === n.isVCard;
      }
      function w(n, t) {
        return u(n) && (n.type === e.f.PTT || k(n));
      }
      function k(n) {
        return null != n.viewOnceState;
      }
    },
    ,
    function (n, t) {
      n.exports = function (n) {
        throw new Error(
          "Impossible value, the default statement should never be reached for value: " +
            n
        );
      };
    },
    function (n, t, r) {
      r.d(t, "b", function () {
        return i;
      }),
        r.d(t, "c", function () {
          return u;
        }),
        r.d(t, "d", function () {
          return o;
        });
      var e = r(2);
      r.d(t, "a", function () {
        return e.b;
      });
      var i = "@psa",
        u = {
          TEXT: e.f.TEXT,
          FUTUREPROOF: e.f.FUTUREPROOF,
          REVOKED: e.f.REVOKED,
          CIPHERTEXT: e.f.CIPHERTEXT,
          IMAGE: e.f.IMAGE,
          VIDEO: e.f.VIDEO,
          GIF: e.f.GIF,
          PTT: e.f.PTT,
        };
      function o(n, t) {
        return n.jid === e.b ? t.me(n) : t.other(n);
      }
    },
    ,
    function (n, t, r) {
      r.d(t, "k", function () {
        return l;
      }),
        r.d(t, "b", function () {
          return d;
        }),
        r.d(t, "c", function () {
          return h;
        }),
        r.d(t, "a", function () {
          return v;
        }),
        r.d(t, "j", function () {
          return p;
        }),
        r.d(t, "g", function () {
          return g;
        }),
        r.d(t, "f", function () {
          return _;
        }),
        r.d(t, "n", function () {
          return m;
        }),
        r.d(t, "o", function () {
          return y;
        }),
        r.d(t, "i", function () {
          return b;
        }),
        r.d(t, "m", function () {
          return w;
        }),
        r.d(t, "l", function () {
          return k;
        }),
        r.d(t, "d", function () {
          return E;
        }),
        r.d(t, "e", function () {
          return S;
        }),
        r.d(t, "h", function () {
          return O;
        });
      var e = r(15),
        i = r(3),
        u = r(33),
        o = r(11),
        a = r(14),
        s = r(121),
        c = r(6),
        f = r(216);
      function l(n) {
        return (
          null != n.mutedUntil &&
          ("always" === n.mutedUntil || (0, i.o)(n.mutedUntil))
        );
      }
      var d = 8,
        h = d * o.b,
        v = 127;
      function p() {
        var n = c.m.get();
        return null == n || n < 512;
      }
      function g() {
        return p() ? 5 : 10;
      }
      function _() {
        return p() ? 1280 : 1600;
      }
      function m(n, t, r) {
        var e = t[0];
        return null == e
          ? (__LOG__(4)`How did we get a VCard without any contact?`, r.onEmpty)
          : 1 === n
          ? r.onSingleContact((0, s.c)(e))
          : e.length > a.y
          ? r.onOthers(n)
          : r.onOneAndOthers(e, n - 1);
      }
      function y(n) {
        return {
          ephemeralMessagesAllowedValues: n.ephemeralMessagesAllowedValues,
          frequentlyForwardedGroupSetting: n.frequentlyForwardedGroupSetting,
          frequentlyForwardedMax: n.frequentlyForwardedMax,
          frequentlyForwardedMessages: n.frequentlyForwardedMessages,
          gifProvider: n.gifProvider,
          maxParticipants: n.maxParticipants,
          maxSubject: n.maxSubject,
          multicastLimitGlobal: n.multicastLimitGlobal,
          groupInviteSending: n.groupInviteSending,
          groupJoinPermissions: n.groupJoinPermissions,
          statusVideoMaxDuration: n.statusVideoMaxDuration,
          voipCallEnabled: (0, f.a)(n),
          mdBlocklistV2: n.mdBlocklistV2,
          vcardAsDocumentSizeKb: n.vcardAsDocumentSizeKb,
          vcardMaxSizeKb: n.vcardMaxSizeKb,
          userNotice: n.userNotice,
        };
      }
      function b(n, t) {
        var r = t[n];
        return null != r && "loaded" === r.status && null != r.photoId;
      }
      function w(n) {
        return n.replace(/\n/g, " ");
      }
      function k(n) {
        return n ? w(n) : n;
      }
      function E(n) {
        return n.replace(/\n{3,}/g, "\n\n");
      }
      function S(n) {
        for (
          var t = new Uint8Array((0, u.k)(n)),
            r = new Uint8Array(t.length + 1),
            e = 0,
            i = 0;
          i < t.length;
          i++
        )
          (e ^= t[i]), (r[i] = t[i]);
        return (r[t.length] = e), (0, u.m)(r);
      }
      var A = (0, o.y)(e.o);
      function O() {
        var n = Math.floor(Math.random() * A.length);
        return A[n];
      }
    },
    ,
    function (n, t, r) {
      r.d(t, "e", function () {
        return e;
      }),
        r.d(t, "f", function () {
          return i;
        }),
        r.d(t, "b", function () {
          return u;
        }),
        r.d(t, "a", function () {
          return o;
        }),
        r.d(t, "c", function () {
          return a;
        }),
        r.d(t, "m", function () {
          return s;
        }),
        r.d(t, "d", function () {
          return c;
        }),
        r.d(t, "o", function () {
          return f;
        }),
        r.d(t, "p", function () {
          return l;
        }),
        r.d(t, "l", function () {
          return d;
        }),
        r.d(t, "i", function () {
          return h;
        }),
        r.d(t, "h", function () {
          return v;
        }),
        r.d(t, "k", function () {
          return p;
        }),
        r.d(t, "g", function () {
          return g;
        }),
        r.d(t, "j", function () {
          return _;
        }),
        r.d(t, "n", function () {
          return m;
        }),
        r(91);
      var e = {
          MEDIUM_RED_VIOLET: 4289080433,
          WASABI: 4287670337,
          SUNDANCE: 4290879551,
          SCARLETT: 4286128440,
          BRANDY_ROSE: 4289628020,
          BRIGHT_SUN: 4293964592,
          EARLS_GREEN: 4290163495,
          PRELUDE: 4291207116,
          CE_SOIR: 4287326608,
          MONA_LISA: 4294937228,
          EMERALD: 4283744869,
          BITTERSWEET: 4294933355,
          SUMMER_SKY: 4280730844,
          MAYA_BLUE: 4283943423,
          SCORPION: 4285818730,
          BALI_HAY: 4286484643,
          CORNFLOWER_BLUE: 4283864831,
          VIVID_VIOLET: 4285408638,
          MONTE_CARLO: 4286237605,
          ELEPHANT: 4280563264,
          POLO_BLUE: 4286747850,
        },
        i = {
          4289080433: "MEDIUM_RED_VIOLET",
          4287670337: "WASABI",
          4290879551: "SUNDANCE",
          4286128440: "SCARLETT",
          4289628020: "BRANDY_ROSE",
          4293964592: "BRIGHT_SUN",
          4290163495: "EARLS_GREEN",
          4291207116: "PRELUDE",
          4287326608: "CE_SOIR",
          4294937228: "MONA_LISA",
          4283744869: "EMERALD",
          4294933355: "BITTERSWEET",
          4280730844: "SUMMER_SKY",
          4283943423: "MAYA_BLUE",
          4285818730: "SCORPION",
          4286484643: "BALI_HAY",
          4283864831: "CORNFLOWER_BLUE",
          4285408638: "VIVID_VIOLET",
          4286237605: "MONTE_CARLO",
          4280563264: "ELEPHANT",
          4286747850: "POLO_BLUE",
        },
        u = 0,
        o = {
          SENDER_BACKFILL_SENT: -7,
          INACTIVE_RECEIVED: -6,
          CONTENT_UNUPLOADABLE: -5,
          CONTENT_TOO_BIG: -4,
          CONTENT_GONE: -3,
          EXPIRED: -2,
          FAILED: -1,
          CLOCK: 0,
          SENT: 1,
          RECEIVED: 2,
          READ: 3,
          PLAYED: 4,
        },
        a = { NONE: 0, GIPHY: 1, TENOR: 2 };
      function s(n) {
        return void 0 === n.type ? n : n.msg;
      }
      var c = {
        GROUPED_WITH_PREV: 1,
        GROUPED_WITH_NEXT: 2,
        JOINED_WITH_PREV: 4,
        JOINED_WITH_NEXT: 8,
        SHOW_AUTHOR: 16,
      };
      function f(n) {
        return "voice" === n.content.type && n.content.isPtt;
      }
      function l(n) {
        return (
          ("video" === n.content.type || "image" === n.content.type) &&
          null != n.content.viewOnceState
        );
      }
      function d(n) {
        return "number" == typeof n && n >= o.SENT;
      }
      function h(n) {
        return "number" == typeof n && n >= o.READ;
      }
      function v(n) {
        return "number" == typeof n && n >= o.PLAYED;
      }
      function p(n) {
        return "number" == typeof n && n >= o.RECEIVED;
      }
      function g(n) {
        return ("number" == typeof n && n < o.CLOCK) || "number" != typeof n;
      }
      function _(n) {
        return "number" != typeof n && "receipt-error" === n.type;
      }
      function m(n) {
        return (
          "vcard" === n.type ||
          "text" === n.type ||
          "image" === n.type ||
          "sticker" === n.type ||
          "video" === n.type ||
          "gif" === n.type ||
          "voice" === n.type ||
          "location" === n.type ||
          "document" === n.type
        );
      }
    },
    function (n, t, r) {
      r.d(t, "a", function () {
        return i;
      }),
        r.d(t, "d", function () {
          return u;
        }),
        r.d(t, "e", function () {
          return o;
        }),
        r.d(t, "b", function () {
          return f;
        }),
        r.d(t, "c", function () {
          return l;
        }),
        r.d(t, "f", function () {
          return d;
        });
      var e = 3e3,
        i = "data:image/jpeg;base64,";
      function u(n) {
        return a(n, 43, 47, !0);
      }
      function o(n) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return a(n, 45, 95, t);
      }
      function a(n, t, r, i) {
        var u =
          Array.isArray(n) || n instanceof ArrayBuffer ? new Uint8Array(n) : n;
        if (u.length <= e) return s(u, t, r, i);
        for (var o = [], a = 0; a < u.length; a += e)
          o.push(s(u.subarray(a, a + e), t, r, i));
        return o.join("");
      }
      function s(n, t, r, e) {
        for (
          var i = Math.ceil((4 * n.length) / 3),
            u = 4 * Math.ceil(n.length / 3),
            o = new Array(u),
            a = 0,
            s = 0;
          a < u;
          a += 4, s += 3
        ) {
          var c = (n[s] << 16) | (n[s + 1] << 8) | n[s + 2];
          (o[a] = c >> 18),
            (o[a + 1] = (c >> 12) & 63),
            (o[a + 2] = (c >> 6) & 63),
            (o[a + 3] = 63 & c);
        }
        for (var f = 0; f < i; f++) {
          var l = o[f];
          o[f] =
            l < 26
              ? 65 + l
              : l < 52
              ? 71 + l
              : l < 62
              ? l - 4
              : 62 === l
              ? t
              : r;
        }
        for (var d = i; d < u; d++) o[d] = 61;
        var h = String.fromCharCode.apply(String, o);
        return e ? h : h.substring(0, i);
      }
      function c(n, t, r, e) {
        for (
          var i = n.length, u = new Int32Array(i + (i % 4)), o = 0;
          o < i;
          o++
        ) {
          var a = n.charCodeAt(o);
          if (65 <= a && a <= 90) u[o] = a - 65;
          else if (97 <= a && a <= 122) u[o] = a - 71;
          else if (48 <= a && a <= 57) u[o] = a + 4;
          else if (a === t) u[o] = 62;
          else {
            if (a !== r) {
              if (a === e) {
                i = o;
                break;
              }
              return (
                null != self.ERROR &&
                  __LOG__(
                    4
                  )`Found unexpected character code while decoding B64 at index ${o}, length ${i}: ${a}`,
                null
              );
            }
            u[o] = 63;
          }
        }
        for (var s = u.length / 4, c = 0, f = 0; c < s; c++, f += 4)
          u[c] = (u[f] << 18) | (u[f + 1] << 12) | (u[f + 2] << 6) | u[f + 3];
        for (
          var l = Math.floor((3 * i) / 4), d = new Uint8Array(l), h = 0, v = 0;
          v + 3 <= l;
          h++, v += 3
        ) {
          var p = u[h];
          (d[v] = p >> 16), (d[v + 1] = (p >> 8) & 255), (d[v + 2] = 255 & p);
        }
        switch (l - v) {
          case 2:
            (d[v] = u[h] >> 16), (d[v + 1] = (u[h] >> 8) & 255);
            break;
          case 1:
            d[v] = u[h] >> 16;
        }
        return d;
      }
      function f(n) {
        var t = c(n, 43, 47, 61);
        if (t) return t.buffer;
        throw new Error("Base64.decode given invalid string");
      }
      function l(n) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = c(n, 45, 95, t ? 61 : -1);
        if (r) return r.buffer;
        throw new Error("Base64.decode given invalid string");
      }
      function d(n) {
        return Math.floor((3 * n.length) / 4);
      }
    },
    function (n, t, r) {
      r.d(t, "c", function () {
        return u;
      }),
        r.d(t, "i", function () {
          return o;
        }),
        r.d(t, "j", function () {
          return a;
        }),
        r.d(t, "k", function () {
          return s;
        }),
        r.d(t, "b", function () {
          return f;
        }),
        r.d(t, "a", function () {
          return l;
        }),
        r.d(t, "d", function () {
          return d;
        }),
        r.d(t, "g", function () {
          return h;
        }),
        r.d(t, "f", function () {
          return v;
        }),
        r.d(t, "h", function () {
          return g;
        }),
        r.d(t, "e", function () {
          return _;
        });
      var e = r(194),
        i = r(73);
      function u(n, t) {
        return t[n] || { jid: n };
      }
      function o(n) {
        return null != n.phonebookPhone;
      }
      function a(n) {
        return !n.noWhatsApp;
      }
      function s(n) {
        return null != n.phonebookPhone || !!n.messaged;
      }
      function c(n, t, r) {
        return n || t || (o(r) ? void 0 : (0, i.c)(r));
      }
      function f(n) {
        return c(n.shortName, n.fullName, n);
      }
      function l(n) {
        return c(n.fullName, n.shortName, n);
      }
      function d(n) {
        var t, r;
        return (
          f(n) ||
          (null == (t = n.lastKnownName) ? void 0 : t.shortName) ||
          (null == (r = n.lastKnownName) ? void 0 : r.fullName)
        );
      }
      function h(n) {
        return null == n ? null : n.value || null;
      }
      function v(n) {
        return (0, i.e)(n) ? ((0, i.d)(n) ? 3 : 2) : 1;
      }
      var p = (0, e.b)((n, t) => {
        if ("ONE_TO_ONE" === n.type) {
          var r = u(n.jid, t);
          return (0, i.d)(r);
        }
        return (
          n.type,
          n.groupInfo.superadmins.map((n) => u(n, t)).some((n) => (0, i.d)(n))
        );
      });
      function g(n, t) {
        return p(n, t);
      }
      function _(n) {
        var t = {};
        return (
          n.forEach((n) => {
            t[n.jid] = n;
          }),
          t
        );
      }
    },
    function (n, t, r) {
      r.d(t, "q", function () {
        return o;
      }),
        r.d(t, "d", function () {
          return a;
        }),
        r.d(t, "c", function () {
          return s;
        }),
        r.d(t, "f", function () {
          return c;
        }),
        r.d(t, "l", function () {
          return f;
        }),
        r.d(t, "h", function () {
          return l;
        }),
        r.d(t, "p", function () {
          return d;
        }),
        r.d(t, "b", function () {
          return h;
        }),
        r.d(t, "a", function () {
          return v;
        }),
        r.d(t, "j", function () {
          return p;
        }),
        r.d(t, "i", function () {
          return g;
        }),
        r.d(t, "m", function () {
          return _;
        }),
        r.d(t, "g", function () {
          return m;
        }),
        r.d(t, "k", function () {
          return y;
        }),
        r.d(t, "e", function () {
          return b;
        }),
        r.d(t, "r", function () {
          return w;
        }),
        r.d(t, "s", function () {
          return k;
        }),
        r.d(t, "o", function () {
          return E;
        }),
        r.d(t, "n", function () {
          return S;
        });
      var e = r(205),
        i = r(44),
        u = r(64);
      function o(n, t) {
        var r = n[t];
        return (r && (0, i.b)(r)) || "‎" + (0, u.d)(t);
      }
      var a = "call",
        s = "handleCall",
        c = "missedCall";
      function f(n) {
        return "whatsapp-call-" + n;
      }
      var l = "openChat";
      function d(n) {
        return "whatsapp-chat-" + n;
      }
      var h = "whatsapp-ban-appeal",
        v = "openBanAppealScreen",
        p = "whatsapp-gdpr",
        g = "openGdprReportScreen";
      function _(n) {
        return "whatsapp-chat-reactions-" + n;
      }
      var m = "newReaction";
      function y(n) {
        return "whatsapp-message-kept-" + n;
      }
      var b = "messageKept";
      function w(n, t) {
        return (0, e.b)().then((r) => {
          (function (n, t, r) {
            n.showNotification(t, r);
          })(r, n, t);
        });
      }
      function k(n, t) {
        new (0, self.Notification)(n, t).close();
      }
      function E(n, t) {
        return (0, e.b)().then((n) => n.getNotifications({ tag: t }));
      }
      function S(n) {
        return (0, e.b)().then((t) =>
          t.getNotifications().then((t) => {
            var r = [];
            return (
              t.forEach((t) => {
                t.data.action === n && r.push(t);
              }),
              r
            );
          })
        );
      }
    },
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "h", function () {
        return i;
      }),
        r.d(t, "f", function () {
          return u;
        }),
        r.d(t, "o", function () {
          return o;
        }),
        r.d(t, "b", function () {
          return a;
        }),
        r.d(t, "c", function () {
          return s;
        }),
        r.d(t, "a", function () {
          return c;
        }),
        r.d(t, "i", function () {
          return f;
        }),
        r.d(t, "g", function () {
          return l;
        }),
        r.d(t, "j", function () {
          return d;
        }),
        r.d(t, "e", function () {
          return h;
        }),
        r.d(t, "l", function () {
          return v;
        }),
        r.d(t, "p", function () {
          return p;
        }),
        r.d(t, "q", function () {
          return g;
        }),
        r.d(t, "k", function () {
          return _;
        }),
        r.d(t, "m", function () {
          return m;
        }),
        r.d(t, "d", function () {
          return y;
        }),
        r.d(t, "n", function () {
          return b;
        });
      var e = r(11);
      function i(n, t) {
        return `${n}:${t}`;
      }
      function u(n) {
        var t = n.split("/");
        return t.length <= 2
          ? (__LOG__(4)`splitSystemPath unexpected system path ${n}`,
            void SEND_LOGS("unexpected-system-path"))
          : i(t[1], _(t.slice(2).join("/")));
      }
      function o(n) {
        var t = n.indexOf(":");
        if (-1 === t) return { relativePath: n };
        var r = n.indexOf("/");
        return -1 !== r && t > r
          ? { relativePath: n }
          : {
              storageName: n.substring(0, t),
              relativePath: n.substring(t + 1),
            };
      }
      var a = "gdpr",
        s = "gdpr",
        c = 65536;
      function f(n, t) {
        return `/usr/chunks/${n}/${(0, e.p)(t)}`;
      }
      function l(n) {
        return "/usr/blobs/" + n;
      }
      function d(n) {
        return `/usr/frame/${n}.jpg`;
      }
      function h(n) {
        return v(n) ? null : _(n);
      }
      function v(n) {
        return n.startsWith("/");
      }
      function p(n, t) {
        return v(n) ? t.uri(n) : t.path(n);
      }
      function g(n, t) {
        return v(n) ? t.uri(n) : t.path(n);
      }
      function _(n) {
        if (n.startsWith("/")) throw Error();
        return n;
      }
      function m(n) {
        if (n.startsWith("/usr/chunked")) {
          var t = /\/(\d+)\?size=(\d+)$/.exec(n);
          if (!t) throw new Error("parseRawContentUri bad uri " + n);
          return {
            type: "chunked",
            mediaId: parseInt(t[1], 10),
            size: parseInt(t[2], 10),
          };
        }
        return { type: "full", chunkId: n };
      }
      function y(n, t) {
        return g(n, {
          uri: (n) =>
            (function (n, t) {
              if (null == t) return n;
              var r = new URL(n, "http://wa.invalid");
              return r.searchParams.set("mt", t), r.pathname + r.search;
            })(n, t),
          path: (n) => n,
        });
      }
      function b(n) {
        var t = new URL(n, "http://wa.invalid");
        return { uri: t.pathname, mimetype: t.searchParams.get("mt") || null };
      }
    },
    ,
    function (n, t, r) {
      r.d(t, "l", function () {
        return u;
      }),
        r.d(t, "m", function () {
          return o;
        }),
        r.d(t, "h", function () {
          return a;
        }),
        r.d(t, "q", function () {
          return s;
        }),
        r.d(t, "p", function () {
          return c;
        }),
        r.d(t, "o", function () {
          return f;
        }),
        r.d(t, "u", function () {
          return l;
        }),
        r.d(t, "b", function () {
          return d;
        }),
        r.d(t, "e", function () {
          return h;
        }),
        r.d(t, "d", function () {
          return v;
        }),
        r.d(t, "f", function () {
          return p;
        }),
        r.d(t, "c", function () {
          return g;
        }),
        r.d(t, "n", function () {
          return _;
        }),
        r.d(t, "g", function () {
          return m;
        }),
        r.d(t, "i", function () {
          return y;
        }),
        r.d(t, "a", function () {
          return w;
        }),
        r.d(t, "v", function () {
          return k;
        }),
        r.d(t, "w", function () {
          return E;
        }),
        r.d(t, "j", function () {
          return S;
        }),
        r.d(t, "k", function () {
          return A;
        }),
        r.d(t, "r", function () {
          return O;
        }),
        r.d(t, "s", function () {
          return I;
        }),
        r.d(t, "t", function () {
          return C;
        });
      var e = r(6),
        i = r(17);
      function u() {
        return (0, i.a)("keep_in_chat_receiver");
      }
      function o() {
        return u() && (0, i.a)("keep_in_chat_sender");
      }
      function a() {
        return (0, i.a)("keep_in_chat_ui_content");
      }
      function s() {
        return (0, i.a)("poll_vote_processing_enabled") || c();
      }
      function c() {
        return (
          (0, i.a)("poll_receiving_enabled") ||
          (0, i.a)("poll_creation_enabled")
        );
      }
      function f() {
        return (0, i.a)("poll_result_details_view_enabled");
      }
      function l() {
        return (0, i.a)("status_quick_reply_enabled");
      }
      function d() {
        return (0, i.a)("reactions_receive");
      }
      function h() {
        return (0, i.a)("reactions_send");
      }
      function v() {
        return (0, i.a)("more_reactions_option");
      }
      function p() {
        return (0, i.a)("reactions_chat_preview");
      }
      function g() {
        return (0, i.a)("message_level_reporting");
      }
      function _() {
        return !m();
      }
      function m() {
        return (
          (0, i.a)("silent_group_exit_db") && (0, i.a)("silent_group_exit")
        );
      }
      function y() {
        return (
          (0, i.a)("silent_group_exit_db") &&
          (0, i.a)("silent_group_exit_dialog")
        );
      }
      var b = ["2", "5", "2", "1"];
      function w() {
        return (
          (function (n, t) {
            for (var r = Math.max(n.length, t.length), e = 0; e < r; e++) {
              if (void 0 === n[e]) return -1;
              if (void 0 === t[e]) return 1;
              var i = parseInt(n[e], 10) - parseInt(t[e], 10);
              if (0 !== i) return i;
            }
            return 0;
          })(e.i.get().osVersion.split("."), b) < 0
        );
      }
      function k() {
        return (0, i.a)("view_once_sp_receiver");
      }
      function E() {
        return (0, i.a)("view_once_sp_sender");
      }
      function S() {
        return (0, i.a)("admin_revoke_receiver");
      }
      function A() {
        return (0, i.a)("admin_revoke_sender");
      }
      function O() {
        return (0, i.a)("sender_revoke_window_receiver");
      }
      function I() {
        return (0, i.a)("sender_revoke_window_sender");
      }
      function C() {
        return (0, i.a)("revokes_logging_unsampled");
      }
    },
    ,
    function (n, t, r) {
      r.d(t, "e", function () {
        return l;
      }),
        r.d(t, "n", function () {
          return d;
        }),
        r.d(t, "o", function () {
          return h;
        }),
        r.d(t, "i", function () {
          return v;
        }),
        r.d(t, "j", function () {
          return p;
        }),
        r.d(t, "k", function () {
          return g;
        }),
        r.d(t, "f", function () {
          return _;
        }),
        r.d(t, "d", function () {
          return m;
        }),
        r.d(t, "g", function () {
          return y;
        }),
        r.d(t, "h", function () {
          return b;
        }),
        r.d(t, "c", function () {
          return w;
        }),
        r.d(t, "m", function () {
          return k;
        }),
        r.d(t, "l", function () {
          return E;
        });
      var e = r(8),
        i = r.n(e),
        u = r(38);
      r.d(t, "b", function () {
        return u.b;
      });
      var o = r(2);
      r.d(t, "a", function () {
        return o.b;
      });
      var a = r(9),
        s = r(7),
        c = r(6),
        f = r(40);
      function l(n) {
        var t = n.groupInfo,
          r = n.participantsInfo;
        if ("parent" === t.groupType)
          throw new Error("called asGroupInfo for a parent group");
        var e = {
          title: (0, f.m)(t.title),
          description: t.description ? (0, f.d)(t.description) : t.description,
          descriptionId: t.descriptionId,
          locked: t.locked,
          isAdmin: t.isAdmin,
          announcement: t.announcement,
          admins: d(r.admins),
          superadmins: d(r.superadmins),
          isInGroup: t.isInTheGroup,
          participants: d(r.participants),
          invitations: r.invitations ? r.invitations : [],
          creatorJid: t.creatorJid,
          creationTs: t.creationTs,
          messaged: t.messaged,
          expiration: t.expiration,
          support: !!t.support,
          suspended: t.suspended,
          isCAG: t.isCAG,
          groupType: t.groupType,
          linkedParent: t.linkedParent,
        };
        (function (n, t) {
          t && (n.pastParticipants = k(t));
        })(e, r.pastParticipants),
          "integrity_delete_parent" === t.deleteReason &&
            (e.communityDeactivated = !0);
        var i = t.leftTs,
          u = t.growthLocked;
        return (
          null != u && (e.growthLocked = u), null != i && (e.leftTs = i), e
        );
      }
      function d(n) {
        for (var t = c.t.get(), r = [], e = 0; e < n.length; e++)
          n[e] !== t && r.push(n[e]);
        return r;
      }
      function h(n, t) {
        return "@me" === n ? t.me() : "@psa" === n ? t.psa() : t.user(n);
      }
      function v(n) {
        return "@me" === n || "@system" === n || "@psa" === n ? null : n;
      }
      function p(n) {
        return n ? g(n) : o.c;
      }
      function g(n) {
        return n === c.t.get() ? o.b : n;
      }
      function _(n) {
        var t = {},
          r = {};
        return (
          n.forEach((n) => {
            var e;
            if (n.outgoing) {
              var i = r[n.user];
              i || (i = r[n.user] = {}), (e = i);
            } else {
              var u = t[n.user];
              u || (u = t[n.user] = {}), (e = u);
            }
            e[n.group] = n.expiresBefore;
          }),
          { received: t, sent: r }
        );
      }
      function m(n) {
        switch (n.type) {
          case o.f.TEXT:
          case o.f.IMAGE:
          case o.f.STICKER:
          case o.f.PTT:
          case o.f.AUDIO:
          case o.f.VIDEO:
          case o.f.GIF:
          case o.f.VCARD:
          case o.f.LOCATION:
          case o.f.GROUP_INVITE:
          case o.f.RICH_HSM:
          case o.f.HSM_BUTTON_REPLY:
          case o.f.DOCUMENT:
          case o.f.POLL:
            return n;
          default:
            return n.type, null;
        }
      }
      function y(n) {
        if ((0, s.p)(n.jid)) return n;
      }
      function b(n) {
        if (n.jid === a.h) return n;
      }
      function w(n) {
        if ("parent" === n.groupType) return n;
      }
      function k(n) {
        return Array.from(n, (n) => {
          var t = i()(n, 2),
            r = t[0],
            e = t[1];
          return { jid: r, exitTime: e.exitTime, reason: e.reason };
        }).sort((n, t) => t.exitTime - n.exitTime);
      }
      function E(n) {
        if (!n) return o.c;
        var t = (0, a.E)(n);
        return t ? g(t) : o.c;
      }
    },
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return a;
      });
      var e = r(7),
        i = r(42),
        u = r(54),
        o = r(3);
      function a(n, t) {
        var r = (function (n) {
            var t = n.starredMsgCount,
              r = n.keptMsgCount,
              e = n.newest,
              u = n.oldestUnread,
              a = n.msgCount,
              s = n.increment,
              c = n.unreadMsgCount,
              f = n.previewMsg,
              l = {
                newest: e,
                oldestUnread: u,
                msgCount: a,
                increment: s,
                unreadMsgCount: c,
              };
            if (
              (t && t > 0 && (l.starredMsgCount = t),
              r && r > 0 && (l.keptMsgCount = r),
              null != f)
            ) {
              var d = (0, i.m)(f);
              null != d.validUntil && d.validUntil < (0, o.D)()
                ? (__LOG__(2)`ExpiredMsg preview on UI`,
                  (d.content = { type: "expired" }),
                  (l.preview = d))
                : (l.preview = f);
            }
            return l;
          })(n),
          a =
            (function (n, t) {
              var r = (0, e.q)(n.jid);
              return r
                ? {
                    type: "ONE_TO_ONE",
                    jid: r,
                    id: n.id,
                    sortBy: n.sortBy,
                    mutedUntil: n.mutedUntil || void 0,
                    archived: n.archived || void 0,
                    msgInfo: t,
                    lastNotified: n.lastNotified || void 0,
                    chatBackgroundSettings: n.chatBackgroundSettings,
                    notStarted: n.notStarted || 0 === n.increment || void 0,
                  }
                : null;
            })(n, r) ||
            (function (n, t, r) {
              var i = (0, e.p)(n.jid);
              return i
                ? t
                  ? {
                      type: "GROUP",
                      jid: i,
                      id: n.id,
                      sortBy: n.sortBy,
                      mutedUntil: n.mutedUntil || void 0,
                      archived: n.archived || void 0,
                      msgInfo: r,
                      groupInfo: (0, u.e)(t),
                      lastNotified: n.lastNotified || void 0,
                      chatBackgroundSettings: n.chatBackgroundSettings,
                      importantMsgCount: n.importantMsgCount,
                    }
                  : (__LOG__(
                      4
                    )`Cannot convert chat ${n.jid} without being given group info`,
                    null)
                : null;
            })(n, t, r);
        if (!a)
          throw (
            (__LOG__(4)`Unable to convert chat ${n.jid}`,
            new Error("Unable to convert chat"))
          );
        return a;
      }
    },
    ,
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "b", function () {
        return c;
      }),
        r.d(t, "c", function () {
          return f;
        }),
        r.d(t, "a", function () {
          return l;
        }),
        r.d(t, "e", function () {
          return h;
        }),
        r.d(t, "f", function () {
          return v;
        }),
        r.d(t, "d", function () {
          return p;
        }),
        r.d(t, "g", function () {
          return g;
        });
      var e = {
          1: '[334,-1,"($1) $2-$3"],10',
          20: '["Ah","[23]"],[334,"1[0125]|[89]00"],["Bg","1[35]|[4-6]|[89][2-9]"],[9,10]',
          211: "333,9",
          212: '["[5-7]BF","5(2[015-7]|3[0-4])|[67]",1],["[58]CE",["5(2[2-489]|3[5-9]|92)|892","5(2([2-48]|9[0-7])|3([5-79]|8[0-7])|924)|892"],1],["5DD",["5(29|38)","5(29|38)[89]"],1],["[5]BBBB","5(4[067]|5[03])"],["8[09];G","8(0|9[013-9])",1],9',
          213: '["[5-8]BBBB","[5-8]"],["9ACBB",9],9',
          216: "233,8",
          218: '[27,"[25-79]",1],9',
          220: "34,7",
          221: '[2322,"[379]"],[3222,8],9',
          222: '"[2-48]ABBB",8',
          223: '[2222,"[246-9]"],8',
          224: '[2222,3],[3222,"[67]"],[8,9]',
          225: "2222,8",
          226: '[2222,"[025-7]"],8',
          227: '[233,"08"],[2222,"[0289]"],8',
          228: '[2222,"[279]"],8',
          229: "2222,8",
          230: '[34,"[2-46]|8[013]"],[44,5],[7,8]',
          231: '[133,"[45]"],[233,2],[234,"[23578]"],[7,8,9]',
          232: "26,8",
          233: '[234,"[235]"],9',
          234: '["CCd","[7-9]"],["CDe","[78]"],["CEf","[78]"],10',
          235: "2222,8",
          236: "2222,8",
          237: '[2222,88],[12222,"[26]"],[8,9]',
          238: "322,7",
          239: "34,7",
          240: '[333,"[235]"],[36,"[89]"],9',
          241: "[2222,0],8",
          242: '[234,"[02]"],[144,8],9',
          243: '[234,1],[333,"[89]"],9',
          244: '[333,"[29]"],9',
          245: '[333,"44|9[567]"],[34,40],[7,9]',
          246: "[34,3],7",
          247: "5",
          248: '[133,"[246]"],7',
          249: '[234,"[19]"],9',
          250: '["2BCC",2],["[7-9]BCC","[7-9]"],9',
          251: '"[1-59]ACD",9',
          252: '[17,"24|[67]"],["BA{5,7}","15|28|6[1-35-9]|799|9[2-9]"],[333,"3[59]|4[89]|6[24-6]|79|8[08]|90"],[8,9]',
          253: "2222,8",
          254: '["BA{5,7}","[24-6]"],[36,7],["CCd","[89]"],9',
          255: '["[24]ACD","[24]"],["[67]BCC","[67]"],["[89]BBD","[89]"],9',
          256: '[45,[202,2024]],[36,"[27-9]|4(6[45]|[7-9])"],[27,"[34]"],9',
          257: "2222,8",
          258: '["[28]ACd","2|8[2-7]"],["80ACC",80],9',
          260: '["[29]AG","[29]"],["800;CC",8],9',
          261: '[2232,"[23]"],9',
          262: '"[268]BBBB",9',
          263: '["7ACd",7],["86BCC","86[24]"],["CCd","2(1[39]|2[0157]|6[14]|7[35]|84)|329"],["[235]ACd","[23]9|54"],["[25]CA{3,5}",["(25|54)8","258[23]|5483"]],["8CF",86],["80ACD",80],[9,10]',
          264: '["8ACD","8[1235]"],["6ACd",6],["870;CC",870],9',
          265: '["2BCC",2],[3222,"[1789]"],9',
          266: "44,8",
          267: '["7ACC",7],8',
          268: '[44,"[027]"],8',
          269: "322,7",
          27: '[333,860],[234,"[1-9]"],9',
          290: "[4,5]",
          291: "133,7",
          297: "34,7",
          298: "6,6",
          299: "222,6",
          30: '[244,"21|7"],[46,"2(2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])"],[334,"[2689]"],10',
          31: '["[1-578]ACD","1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"],["[1-5]BCC","1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],["6;H","6[0-57-9]"],["66;G",66],["[89]0AA{4,7}","80|9"],[9,11]',
          32: "[3222,4],9",
          33: '[3222,8],[12222,"[1-79]"],9',
          34: '["[89]00;CC","[89]00"],["[5-9]BBBB","[568]|[79][0-8]"],9',
          350: "[35,2],8",
          351: '["2ACD","2[12]"],["[2-46-9]BCC","2[3-9]|[346-9]"],9',
          352: '[2223,20],[333,6],["BBBBb","2([0367]|4[3-8])"],["BBBA{1,5}","[3-57]|8[13-9]|9(0[89]|[2-579])|(2|80)[2-9]"],9',
          353: '["AdD",1],["BCd","[2569]|4[1-69]|7[14]"],[333,70],[333,81],[234,"[78]"],[433,1],[2134,8],[244,4],9',
          354: '[34,"[4-9]"],["3BCC",3],[7,8,9]',
          355: '["6[6-9];CD",6],9',
          356: '[44,"[2357-9]"],8',
          357: "26,8",
          358: '["CA{3,7}","([1-3]00|[6-8]0)"],["116C",116],["BA{4,10}","[14]|2[09]|50|7[135]"],["AA{4,11}","[25689][1-8]|3"],[6,7,8,9,10,11]',
          359: '[333,999],["BCd","48|8[7-9]|9[08]"],9',
          36: '["BCd","[2-9]"],9',
          370: '[134,"52[0-79]"],[323,"[7-9]"],[26,"37|4([15]|6[1-8])"],[35,"[3-6]"],8',
          371: '[233,"[269]|8[01]"],8',
          372: '["[3-79]BD",["[369]|4[3-8]|5([0-2]|5[0-478]|6[45])|7[1-9]","[369]|4[3-8]|5([02]|1([0-8]|95)|5[0-478]|6(4[0-4]|5[1-589]))|7[1-9]"]],["70;BD",70],["8000;CC",[800,8000]],["[458]Cd",["40|5|8(00|[1-5])","40|5|8(00[1-9]|[1-5])"]],[7,8]',
          373: '[233,"22|3"],["[25-7]BBC","2[13-9]|[5-7]"],["[89]BE","[89]"],8',
          374: '[26,"1|47"],[26,"4[1349]|[5-7]|9[1-9]"],[35,"[23]"],[323,"8|90"],8',
          375: '[2322,["17[0-3589]|2[4-9]|[34]","17([02358]|1[0-2]|9[0189])|2[4-9]|[34]"],"$1 $2-$3-$4"],[3222,["1(5[24]|6[235]|7[467])|2(1[246]|2[25]|3[26])","1(5[24]|6(2|3[04-9]|5[0346-9])|7([46]|7[37-9]))|2(1[246]|2[25]|3[26])"],"$1 $2-$3-$4"],[423,["1(5[169]|6[3-5]|7[179])|2(1[35]|2[34]|3[3-5])","1(5[169]|6(3[1-3]|4|5[125])|7(1[3-9]|7[0-24-6]|9[2-7]))|2(1[35]|2[34]|3[3-5])"],"$1 $2-$3"],["[89]BCD","8[01]|9"],["82ADD",82],["800;BA{2,4}",800],9',
          376: '[33,"[135-9]"],[44,1],[333,6],[6,9]',
          377: '[2222,"[39]"],[233,4],["6;BBBB",6],[332,8],[8,9]',
          378: '[2222,"[5-7]"],["0549;F",0,"($1) $2"],8',
          379: "10",
          380: '[333,["6[12][29]|(3[1-8]|4[136-8]|5[12457]|6[49])2|(56|65)[24]","6[12][29]|(35|4[1378]|5[12457]|6[49])2|(56|65)[24]|(3[1-46-8]|46)2[013-9]"]],[234,["4[45][0-5]|5(0|6[37])|6([12][018]|[36-8])|7|89|9[1-9]|(48|57)[0137-9]","4[45][0-5]|5(0|6(3[14-7]|7))|6([12][018]|[36-8])|7|89|9[1-9]|(48|57)[0137-9]"]],[45,"[3-6]"],["CCd","[89]"],9',
          381: '["[23]BA{4,9}","(2[389]|39)0"],["[1-3]AA{5,10}","1|2([0-24-7]|[389][1-9])|3([0-8]|9[1-9])"],["6AA{6,8}",6],["[89]BA{3,9}","[89]"],["7[26];A{4,9}","7[26]"],["7[08]AA{4,9}","7[08]"],[8,9,10]',
          382: '[233,"[2-57-9]|6[036-9]"],[8,9]',
          383: '[233,"[23][89]|4[3-79]"],[35,"[89]00"],333,8',
          385: '["1;DC",1],["[2-5]ACd","[2-5]"],["9ACd",9],["[67]ACd","[67]"],["80[01];Bc",8],["80[01];CC",8],[8,9]',
          386: '[1322,"[12]|3[24-8]|4[24-8]|5[2-8]|7[3-8]"],["[3-7]ACC","[37][01]|4[0139]|51|6"],["[89][09];A{3,6}","[89][09]"],["[58]BE","59|8[1-3]"],8',
          387: '[233,"6[1-356]|[7-9]"],[233,"[3-5]","$1 $2-$3"],[2223,6],[8,9]',
          389: '["2;CD",2],["[347]ACC","[347]"],["[58]BABB","[58]"],8',
          39: '["BdD","0[26]|55"],["0[26];DE","0[26]"],["0BdD","0[13-57-9][0159]"],["CA{3,6}",["0[13-57-9][0159]|8(03|4[17]|9[245])","0[13-57-9][0159]|8(03|4[17]|9(2|[45][0-4]))"]],["0CCD","0[13-57-9][2-46-8]"],["0CA{2,6}","0[13-57-9][2-46-8]"],["CCd",["[13]|8(00|4[08]|9[59])","[13]|8(00|4[08]|9(5[5-9]|9))"]],[344,3],[9,10]',
          40: '[234,"[23]1"],[333,"[23][3-7]|[7-9]"],9',
          41: '["[2-9]ACBB","[2-7]|[89]1"],["[89]BCC","8[047]|90"],[32322,860],9',
          420: '["[2-9]BCC","[2-8]|9[015-7]"],["96ACCC",96],["9ACCC","9[36]"],9',
          421: '["2;CCB",2,"$1/$2 $3 $4"],["[3-5]ACBB","[3-5]","$1/$2 $3 $4"],["[689]BCC","[689]"],9',
          423: '[322,"[237-9]"],[234,69],[333,6],7',
          43: '["1;A{3,12}",1],["5ADA{4,7}","5[079]"],["CA{3,10}","316|46|51|732|6(5[0-3579]|[6-9])|7([28]0)|[89]"],["DA{3,9}","2|3(1[1-578]|[3-8])|4[2378]|5[2-6]|6([12]|4[1-9]|5[468])|7(2[1-8]|35|4[1-8]|[5-79])"],[10,11,12,13]',
          44: '["Ee",["1(38|5[23]|69|76|94)","1((38|69)7|5(24|39)|768|946)","1(3873|5(242|39[4-6])|(697|768)[347]|9467)"]],["Df","1([2-69][02-9]|[78])"],[244,["[25]|7(0|6[024-9])","[25]|7(0|6([04-9]|2[356]))"]],[46,7],[334,"[1389]"],10',
          45: "2222,8",
          46: '["8;ccB",8],["[1-69]AcBB","1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"],[3222,"1[2457]|2([247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6([124-689]|7[0-2])|9([125-8]|3[0-5]|4[0-3])"],["7ACBB",7],["9[034]ABBC","9[034]"],[32322,"25[245]|67[3-6]"],9',
          47: '["[489]BBC","[489]"],["[235-7]ABBB","[235-7]"],8',
          48: '[2322,"[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"],[333,"26|39|5[0137]|6[0469]|7[02389]|8[08]"],9',
          49: '["BA{3,13}","3[02]|40|[68]9"],["CA{3,12}",["2(0[1-389]|1[124]|2[18]|3[14])|3([35-9][15]|4[015])|906|(2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(0[1-389]|12[0-8])|3([35-9][15]|4[015])|906|2([13][14]|2[18])|(2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"]],["DA{2,11}",["[24-6]|3([3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(3(0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(2[135]|4[13578]|9[1346])|5(0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(2[1-7]|4[145]|6[1-5]|7[1-4])|8(21|3[1468]|6|7[1467]|8[136])|9(0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(47|60)[1356]|3(3[46]|46|5[49])[1246]|3[4579]3[1357]"]],[34,138],["EA{2,10}",3],["CA{5,11}",181],["CAA{4,10}","1(3|80)|9"],["Ch","1[67]"],["CA{7,12}",8],[56,[185,1850,18500]],[344,7],[47,"18[68]"],[56,"15[0568]"],[47,"15[1279]"],[38,18],["CBh","1(6[023]|7)"],[427,"15[279]"],[328,15],[7,8,9,10,11,12]',
          500: "5",
          501: '[34,"[2-8]",1],["0;800;DC",0,1],7',
          502: '[44,"[2-7]"],[434,1],8',
          503: '[44,"[267]"],[344,"[89]"],8',
          504: '[44,"[237-9]",1],8',
          505: "44,8",
          506: '[44,"[24-7]|8[3-9]"],[334,"[89]0",1],8',
          507: "[44,6,1],8",
          508: '"[45]ABB",6',
          509: "224,8",
          51: "[333,9],9",
          52: '[244,"33|5[56]|81"],[334,"[2-9]"],[1244,"1(33|5[56]|81)"],[1334,1],[10,11]',
          53: '["Ag",7],["BA{4,6}","[2-4]"],[17,5],8',
          54: '[424,["2(2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2([23]02|6([25]|4[6-8])|9([02356]|4[02568]|72|8[23]))|3(3[28]|4([04679]|3[5-8]|5[4-68]|8[2379])|5([2467]|3[237]|8[2-5])|7[1-578]|8([2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(2[24-9]|3[1-59]|47)","2([23]02|6([25]|4(64|[78]))|9([02356]|4([0268]|5[2-6])|72|8[23]))|3(3[28]|4([04679]|3[78]|5(4[46]|8)|8[2379])|5([2467]|3[237]|8[23])|7[1-578]|8([2469]|3[278]|5[56][46]|86[3-6]))|2(2[24-9]|3[1-59]|47)|38([58][78]|7[378])|3(4[35][56]|58[45]|8([38]5|54|76))[4-6]","2([23]02|6([25]|4(64|[78]))|9([02356]|4([0268]|5([24-6]|3[2-5]))|72|8[23]))|3(3[28]|4([04679]|3(5(4[0-25689]|[56])|[78])|58|8[2379])|5([2467]|3[237]|8([23]|4([45]|60)|5(4[0-39]|5|64)))|7[1-578]|8([2469]|3[278]|54(4|5[13-7]|6[89])|86[3-6]))|2(2[24-9]|3[1-59]|47)|38([58][78]|7[378])|3(454|85[56])[46]|3(4(36|5[56])|8([38]5|76))[4-6]"],"$1 $2-$3"],[244,1,"$1 $2-$3"],[334,"[23]","$1 $2-$3"],[334,"[68]",1],[1424,["9(2[2-469]|3[3-578])","9(2(2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(2([23]02|6([25]|4[6-8])|9([02356]|4[02568]|72|8[23]))|3(3[28]|4([04679]|3[5-8]|5[4-68]|8[2379])|5([2467]|3[237]|8[2-5])|7[1-578]|8([2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(2[24-9]|3[1-59]|47)","9(2([23]02|6([25]|4(64|[78]))|9([02356]|4([0268]|5[2-6])|72|8[23]))|3(3[28]|4([04679]|3[78]|5(4[46]|8)|8[2379])|5([2467]|3[237]|8[23])|7[1-578]|8([2469]|3[278]|5([56][46]|[78])|7[378]|8(6[3-6]|[78]))))|92(2[24-9]|3[1-59]|47)|93(4[35][56]|58[45]|8([38]5|54|76))[4-6]","9(2([23]02|6([25]|4(64|[78]))|9([02356]|4([0268]|5([24-6]|3[2-5]))|72|8[23]))|3(3[28]|4([04679]|3(5(4[0-25689]|[56])|[78])|5(4[46]|8)|8[2379])|5([2467]|3[237]|8([23]|4([45]|60)|5(4[0-39]|5|64)))|7[1-578]|8([2469]|3[278]|5(4(4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(6[3-6]|[78]))))|92(2[24-9]|3[1-59]|47)|93(4(36|5[56])|8([38]5|76))[4-6]"],"$1 $2 $3-$4"],[1244,91,"$1 $2 $3-$4"],[1334,9,"$1 $2 $3-$4"],[10,11]',
          55: '[244,"[1-9][1-9]","$1 $2-$3"],[254,"([14689][1-9]|2[12478]|3[1-578]|5[1-5]|7[13-579])9","$1 $2-$3"],["[3589]00;cD","[3589]00"],[10,11]',
          56: '[144,"2[23]"],[234,"[357]|4[1-35]|6[13-57]"],["9;DD",9],["44;CD",44],["[68]00;Cd","60|8"],["600;CBC",60],["1230;CD",1],[54,219],9',
          57: '[17,["1(8[2-9]|9[0-3]|[2-7])|[24-8]","1(8[2-9]|9(09|[1-3])|[2-7])|[24-8]"]],[37,3],["1;CG",["1(80|9[04])","1(800|9(0[01]|4[78]))"]],[8,10]',
          58: "[37,-1,1],10",
          590: '["[56]90;BD",-1,"$1 $2-$3"],9',
          591: '[17,"[23]|4[46]"],[8,"[67]"],[324,8],8',
          592: "34,7",
          593: '[134,"[247]|[356][2-8]",1],[234,9],["1800;Cd",1],[8,9]',
          594: "3222,9",
          595: '["BCd","([26]1|3[289]|4[124678]|7[123]|8[1236])"],["CA{3,6}","[2-9]0"],[36,"9[1-9]"],[234,8700],[333,"[2-8][1-9]"],9',
          596: "3222,9",
          597: '[34,"[6-8]",1],7',
          598: '[233,9],[44,"[24]"],8',
          599: '[34,"[13-7]"],["9;CD",9],[7,8]',
          60: '["3;DD",3,"$1-$2 $3"],["[18]ACd","1[02-46-9][1-9]|8","$1-$2 $3"],["1;[36-8]00;BD","1[36-8]0",1],["11;DD",11,"$1-$2 $3"],["15[49];CD",15,"$1-$2 $3"],[9,10]',
          61: '["BCA{2,4}",16],[333,"14|[45]"],[144,"[2378]"],[433,"1(30|[89])"],9',
          62: '["BA{5,9}","2[124]|[36]1"],["CA{5,7}",800],["CA{5,8}","[2-79]"],["CdC","8[1-35-9]",1],["CA{6,8}",1],[334,804],[3133,80],["CDe",8,1],[2434,0],[9,10,11,12]',
          63: '["DA{4,6}",["3(23|39|46)|4(2[3-6]|[35]9|4[26]|76)|544|88[245]|(52|64|86)2","3(230|397|461)|4(2(35|[46]4|51)|396|4(22|63)|59[347]|76[15])|5(221|446)|642[23]|8(622|8([24]2|5[13]))"]],[334,"[89]"],[434,1],["DbCD",1],10',
          64: '[323,"[89]0"],[134,"24|[346]|7[2-57-9]|9[2-9]","$1-$2 $3"],["CCd","2(10|74)|[59]|80"],["BdD","2[028]"],["BCA{3,5}","2([169]|7[0-35-9])|7|86"],[8,9,10]',
          65: '["[3689]CD","[369]|8[1-9]"],["1[89]00;CD","1[89]"],["7000;DC",70],["800;CD",80],8',
          66: '["BCd","14|[3-9]"],[433,1],9',
          670: "[44,7],8",
          672: "[24,1],[15,3],[5,6]",
          673: '"[2-578]BD",7',
          674: "34,7",
          675: '[34,"[13-689]|27"],[44,"20|7"],[7,8]',
          676: '[34,"7[5-9]|8[47-9]"],[43,0],7',
          677: '[25,"[7-9]"],7',
          678: '[34,"[579]"],7',
          679: '[34,"[35-9]"],[434,0],7',
          680: "34,7",
          681: "222,6",
          682: "23,5",
          683: "4",
          685: '["8Bd",8],["7AE",7],[6,7]',
          686: "8",
          687: '[222,"[2-46-9]|5[0-4]","$1.$2.$3"],6',
          688: "[6,7]",
          689: '[2222,"4[09]|8[79]"],[222,44],[6,8]',
          690: "[4,5,6,7]",
          691: "34,7",
          692: "[34,-1,1],7",
          7: '[4222,["7(1[0-8]|2[1-9])","7(1([0-6]2|7|8[27])|2(1[23]|[2-9]2))","7(1([0-6]2|7|8[27])|2(13[03-69]|62[013-9]))|72[1-57-9]2"]],[5122,["7(1[0-68]|2[1-9])","7(1([06][3-6]|[18]|2[35]|[3-5][3-5])|2([13][3-5]|[24-689]|7[457]))","7(1(0([356]|4[023])|[18]|2(3[013-9]|5)|3[45]|43[013-79]|5(3[1-8]|4[1-7]|5)|6(3[0-35-9]|[4-6]))|2(1(3[178]|[45])|[24-689]|3[35]|7[457]))|7(14|23)4[0-8]|71(33|45)[1-79]"]],[334,7],[3322,"[3489]","$1 $2-$3-$4"],10',
          81: '[334,800,1],["DBd","0077",1],[424,"0088",1],["DCd","00(37|66)",1],["DDe","00(37|66)",1],["DEf","00(37|66)",1],["DFg","00(37|66)",1],[244,"[2579]0|80[1-9]",1],10',
          82: '["AdD",2,1],[234,"60|8",1],["BdD","[1346]|5[1-5]",1],[244,"[57]",1],[533,["003","0030"]],[254,5,1],["EdD",0],[5234,0],[9,10]',
          84: '[244,"2[48]"],[343,"2[0-35-79]"],["[89]ACBB","8(8|9[89])|9"],["1[2689]ACD","1([26]|8[68]|99)"],["[3578]ACD","[357]|8[1-5]"],["86[89];CC","86[89]"],["1[89]00;A{4,6}",["1[89]0","1[89]00"]],[9,10]',
          850: "[334,1],10",
          852: '[44,"[235-7]|[89](0[1-9]|[1-9])"],["800;CC",800],["900;BCC",900],["900;A{2,5}",900],8',
          853: '"[268]CD",8',
          855: '["BCd","[1-9]"],[433,1],[8,9]',
          856: "[2233,2],10",
          86: '["21;DA{4,6}",21],[344,"3(11|7[179])|4([15]1|3[1-35])|5(1|2[37]|3[12]|51|7[13-79]|9[15])|7(31|5[457]|6[09]|91)|8([57]1|98)"],[434,[807,8078]],[344,"1[3-578]"],["10800;CD",[108,1080,10800]],["Ch",950],11',
          880: '["CA{3,7}","3([67]|8[013-9])|4(6[168]|7|[89][18])|5(6[128]|9)|6(28|4[14]|5)|7[2-589]|8(0[014-9]|[12])|9[358]|(3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(44|66)[01346-9]",1],["DA{3,6}","[13-9]",1],10',
          886: '["AdD","[25][2-8]|[346]|7[1-9]|8[237-9]"],[234,"[258]"],[333,9],[244,7],9',
          90: '[334,"512|8[0589]|90"],[3322,["5([0-59]|61)","5([0-59]|616)","5([0-59]|6161)"]],[3322,"[24][1-8]|3[1-9]"],10',
          91: '[55,["600|7([02-8]|19|9[037-9])|8(0[015-9]|[1-9]|20)|9","600|7([078]|19[0-5]|2([02356-9]|[14][017-9]|9[389])|3([025-9]|1[07-9]|[34][017-9])|4([0-35689]|[47][017-9])|5([02346-9]|1[017-9]|5[017-9])|6([02-9]|1[0-257-9])|9([089]|31|7[02-9]))|8(0([01589]|6[67]|7[02-9])|1([0-57-9]|6[07-9])|2(0[078]|[14][07-9]|[235-9])|3([0357-9]|[126][07-9]|4[1-9])|[45]|6([02457-9]|[136][07-9])|7([078][07-9]|[1-69])|8([0-25-9]|3[07-9]|4[047-9])|9([02-9]|1[027-9]))|9","600|7(0|19[0-5]|2([0235679]|[14][017-9]|8([0-569]|[78][089])|9[389])|3([05-8]|1([089]|7[5-9])|2([5-8]|[0-49][089])|3[017-9]|4([07-9]|11)|9([01689]|[2345][089]|40|7[0189]))|4([056]|1([0135-9]|[23][089]|2[089]|4[089])|2(0[089]|[1-7][089]|[89])|3([0-8][089]|9)|4([089]|11|7[02-8])|7([089]|11|7[02-8])|8([0-24-7][089]|[389])|9([0-7][089]|[89]))|5([0346-9]|1[017-9]|2([03-9]|[12][089])|5[017-9])|6([0346-9]|1[0-257-9]|2([0-4].|[5-9][089])|5([0-367][089]|[4589]))|7(0([02-9]|1[089])|[1-9])|8([0-79]|8(0[0189]|11|8[013-9]|9))|9([089]|313|7([02-8]|9[07-9])))|8(0([01589]|6[67]|7([02-8]|9[05-9]))|1([02-57-9]|1([0-35-9]|4[0-46-9])|6([089]|7[02-8]))|2(0([08]|7[02])|[14]([089]|7[02-8])|[235-9])|3([0357-9]|1([089]|7[02-6])|2([09]|77|8[0-689])|4[1-9]|6([089]|7[02-7]))|[45]|6([02457-9]|1([089]|7[02-8])|3([089]|7[02358])|6([08]|7[02-8]|9[01]))|7(0[07-9]|[1-69]|7([089]|7[02-8])|8([089]|7[02-8]))|8([0-25-9]|3([089]|7[02-8])|4([0489]|7[02-68]))|9([02-9]|1([0289]|7[2-6])))|9"]],[244,"11|2[02]|33|4[04]|79[1-9]|80[2-46]"],[334,"1(2[0-249]|3[0-25]|4[145]|[569][14]|7[1257]|8[1346]|[68][1-9])|2(1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(12|[2345]1|57|6[13]|7[14]|80)|7(12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"],[433,"1([23579]|[468][1-9])|[2-8]"],[2343,"008"],[334,140],[424,[160,1600]],["DA{2,4};D",[180,1800]],["DdD",[186,1860]],[4333,"18[06]"],10',
          92: '["Bh","(2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],["Cg",["2(3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(2[2-689]|3[23578]|4[3478]|5[2356])|9(2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(2[3-8]|98)|(2(3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(2[2-689]|3[23578]|4[3478]|5[2356])|9(22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"]],[55,58],[37,3],[2333,"2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],[3333,"[24-9]"],10',
          93: '["[2-7]ACD","[2-7]"],9',
          94: '[234,7],[333,"[1-689]"],9',
          95: '["ACd","[12]"],["BCd","[4-7]|8[1-35]"],["ACA{4,6}","9(2[0-4]|[35-9]|4[137-9])"],[144,2],[334,8],[1333,92],[154,9],[8,9,10]',
          960: '[34,"[3467]|9([1-9]|0[1-9])",1],[334,"[89]00"],7',
          961: '[133,"[13-69]|7([2-57]|62|8[0-7]|9[04-9])|8[02-9]"],[233,"[7-9]"],[7,8]',
          962: '["7;DD","7[457-9]"],["Cf","70|8[0158]|9"],9',
          963: '["BCd","[1-5]"],["9BCC",9],9',
          964: '["BCd","[2-6]"],[334,7],[9,10]',
          965: '["Dd","[169]|2([235]|4[1-35-9])|52"],[35,"[25]"],8',
          966: '[45,9],[234,1],[234,5],["CCd",81],[334,8],9',
          967: '["7BCC","7[0137]"],9',
          968: '["CA{4,6}","[58]"],[26,2],[44,"[79]"],8',
          970: '["5[69]ACC",5],["1[78]00;CC","1[78]"],9',
          971: '["CA{2,9}","60|8"],[315,"[479]"],[234,5],9',
          972: '[234,"[57]",1],[433,12,1],[46,159,1],[1333,"1[7-9]",1],["CbCD",15,"$1-$2 $3-$4"],9',
          973: "44,8",
          974: '["[3-7]CD","[3-7]"],8',
          975: '[2222,"1|77"],8',
          976: '["[12]ABD","[12]1"],["[12]2Af","[12]2[1-3]"],["[12]CE",["[12](27|[3-5])","[12](27|[3-5].)2"]],[44,"[57-9]"],["[12]De",["[12](27|[3-5])","[12](27|[3-5].)[4-9]"]],8',
          977: '["9BG","9(6[013]|7[245]|8)",1],10',
          98: '[244,"[1-8]"],["CCd",9],10',
          992: '[612,[331,3317]],[324,"[34]7|91[78]"],[414,3],[234,"[457-9]"],9',
          993: '[2222,12,"$1 $2-$3-$4"],[26,6],[3122,"13|[2-5]","$1 $2-$3-$4"],8',
          994: '[3222,9],[2322,["[12]|365","[12]|365","[12]|365([0-46-9]|5[0-35-9])"]],[2322,"[3-8]"],9',
          995: '[3222,"[348]"],[333,7],[3222,5],9',
          996: '[45,"3(1[346]|[24-79])"],[333,"[235-79]"],["CCAc",8],9',
          998: '[2322,"[679]"],[7,8,9]',
        },
        i = r(9),
        u = /^(1|2[07]|3[0-469]|4[013-9]|5[1-8]|6[0-6]|7|8[1246]|9[0-58])/,
        o = new Map(),
        a = {};
      function s(n) {
        var t = null != e[n] ? JSON.parse(`[${e[n]}]`) : null;
        if (null == t) return null;
        var r = t.pop();
        return (a[n] = {
          lengths: r,
          formats: t.map(function (n) {
            return new (class {
              constructor(n) {
                var t;
                if (Array.isArray(n)) {
                  t = n[0];
                  var r = n[1];
                  null != r &&
                    -1 !== r &&
                    (Array.isArray(r) || (r = [r]),
                    (this.CR = r.map(function (n) {
                      return new RegExp("^(" + n + ")");
                    }))),
                    (this.CQ = n[2]);
                } else t = n;
                this.CP = new RegExp(
                  `^${(function (n) {
                    return `(${
                      "number" == typeof n
                        ? String(n)
                            .split("")
                            .map((n) => ".".repeat(Number(n)))
                            .join(")(")
                        : n.replace(/;|[a-zA-Z]+/g, (n) =>
                            ";" === n
                              ? ")("
                              : n
                                  .split("")
                                  .map((n) => {
                                    var t = n.charCodeAt(0);
                                    return t >= 97
                                      ? ".".repeat(t - 96) + "?"
                                      : ".".repeat(t - 64);
                                  })
                                  .join(")(")
                          )
                    })`;
                  })(t)}$`
                );
              }
              testAndFormat(n) {
                if (this.CP.test(n) && this.CS(n)) {
                  if ("string" == typeof this.CQ)
                    return n.replace(this.CP, this.CQ);
                  var t = this.CP.exec(n);
                  if (null != t)
                    return t.slice(1).join(null != this.CQ ? "-" : " ");
                }
              }
              CS(n) {
                return (
                  !this.CR ||
                  this.CR.some(function (t) {
                    return t.test(n);
                  })
                );
              }
            })(n);
          }),
        });
      }
      function c(n) {
        var t = n.match(u);
        return t ? t[0] : n.length >= 3 ? n.substring(0, 3) : n;
      }
      function f(n) {
        var t = o.get(n);
        return (
          null == t &&
            ((t = (function (n) {
              var t = n.length > 0 && "+" === n[0] ? n.substring(1) : n,
                r = c(t);
              if (!r) return t;
              var e = t.substring(r.length),
                i = a[r] || s(r);
              if (!i) return "+" + r + " " + e;
              for (var u = i.formats, o = 0; o < u.length; o++) {
                var f = u[o].testAndFormat(e);
                if (null != f && "" !== f) return "+" + r + " " + f;
              }
              return "+" + r + " " + e;
            })(n)),
            o.set(n, t)),
          t
        );
      }
      function l(n) {
        var t = n.match(/\d+/g);
        return null != t ? t.join("") : "";
      }
      var d = /^\+*[\d ()]+$/;
      function h(n) {
        return d.test(n);
      }
      function v(n, t) {
        if (!/^\d+$/.test(t)) return !1;
        var r = a[n] || s(n);
        return (
          !!r &&
          ("number" == typeof r.lengths
            ? r.lengths === t.length
            : r.lengths.includes(t.length))
        );
      }
      function p(n) {
        return f((0, i.I)(n));
      }
      function g(n) {
        return c(n);
      }
    },
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return S;
      }),
        r.d(t, "c", function () {
          return A;
        }),
        r.d(t, "d", function () {
          return I;
        }),
        r.d(t, "b", function () {
          return C;
        });
      var e = r(32),
        i = r(228),
        u = r(2),
        o = r(15),
        a = r(37),
        s = r.n(a),
        c = r(54),
        f = r(40),
        l = r(139),
        d = r(148),
        h = r(35),
        v = r(87),
        p = r(6),
        g = r(96),
        _ = r(17),
        m = new Set([
          "\0",
          "\t",
          "\n",
          "\v",
          "\f",
          "\r",
          " ",
          "",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          "​",
          "\u2028",
          "\u2029",
          " ",
          " ",
          "　",
        ]),
        y = (n) =>
          (function (n, t, r) {
            for (var e = 0, i = n.length; e < i && m.has(n.charAt(e)); ) e++;
            for (var u = e; i - 1 > u && m.has(n.charAt(i - 1)); ) i--;
            return e === i ? "" : 0 === e && i === n.length ? n : n.slice(e, i);
          })(n),
        b = r(137),
        w = r(328),
        k = r(42),
        E = null;
      function S(n) {
        E = n;
      }
      function A(n) {
        var t, r, a;
        switch (n.type) {
          case u.f.TEXT:
            var d = n.linkPreview;
            t = {
              type: "text",
              text: n.text,
              linkPreview: d
                ? Object.assign({}, d, { preview: (0, h.b)(n), bg: n.bg })
                : void 0,
            };
            break;
          case u.f.EXTENDED_TEXT:
            t = { type: "text", text: n.text };
            break;
          case u.f.FUTUREPROOF:
            t = { type: "futureproof", subtype: n.subtype };
            break;
          case u.f.REVOKED:
            (t = { type: "revoked" }),
              null != n.adminJid && (t.adminJid = n.adminJid);
            break;
          case u.f.CIPHERTEXT:
            t = { type: "ciphertext" };
            break;
          case u.f.MD_PLACEHOLDER:
            t = { type: "placeholder" };
            break;
          case u.f.IDENTITY_CHANGE:
            t = { type: "keyschanged", subtype: n.subtype || "primary" };
            break;
          case u.f.PRIVACY_CHANGE:
            t = { type: "privacy", subtype: n.subtype };
            break;
          case u.f.GROUP_NOTIFICATION:
            t = I(n);
            break;
          case u.f.BUSINESS_NOTIFICATION:
            t = C(n);
            break;
          case u.f.IMAGE:
            var v = {
              type: "image",
              mediaStatus: (0, l.a)(n, E),
              preview: (0, h.a)(n),
              highResPreview: null,
              height: n.height,
              width: n.width,
              caption: n.text,
              bg: n.bg,
              size: n.size,
            };
            (t = v), null != n.viewOnceState && (v.viewOnceState = (0, g.e)(n));
            break;
          case u.f.STICKER:
            var m = {
              type: "sticker",
              mediaStatus: (0, l.a)(n, E),
              preview: (0, h.a)(n),
              height: n.height,
              width: n.width,
              size: n.size,
              highResPreview: n.frame,
            };
            (t = m), (m.isNotNativeSupported = !0);
            break;
          case u.f.PTT:
            t = {
              type: "voice",
              duration: n.duration,
              mediaStatus: (0, l.a)(n, E),
              isPtt: !0,
              size: n.size,
              waveform: n.waveform,
            };
            break;
          case u.f.VIDEO:
            var S = {
              type: "video",
              mediaStatus: (0, l.a)(n, E),
              duration: n.duration,
              rotation: n.rotation,
              size: n.size,
              width: n.width,
              height: n.height,
              caption: n.text,
              preview: (0, h.a)(n),
              highResPreview: n.frame,
              bg: n.bg,
            };
            (t = S), null != n.viewOnceState && (S.viewOnceState = (0, g.e)(n));
            break;
          case u.f.GIF:
            t = {
              type: "gif",
              mediaStatus: (0, l.a)(n, E),
              duration: n.duration,
              rotation: n.rotation,
              size: n.size,
              width: n.width,
              height: n.height,
              caption: n.text,
              preview: (0, h.a)(n),
              highResPreview: n.frame,
              attribution: n.gifAttribution,
              bg: n.bg,
            };
            break;
          case u.f.AUDIO:
            t = {
              type: "voice",
              duration: n.duration,
              mediaStatus: (0, l.a)(n, E),
              isPtt: !1,
              size: n.size,
            };
            break;
          case u.f.VCARD:
            t = {
              type: "vcard",
              contacts: (0, i.f)(n.contacts),
              total: n.contacts.length,
            };
            break;
          case u.f.LOCATION:
            t = {
              type: "location",
              lat: n.degreesLatitude,
              lng: n.degreesLongitude,
              address: n.address,
              name: n.name,
              url: n.url,
              preview: (0, h.b)(n),
            };
            break;
          case u.f.GROUP_INVITE:
            t = {
              type: "group_invite",
              groupJid: n.groupJid,
              groupName: (0, f.m)(n.groupName),
              inviteExpiration: n.inviteExpiration,
              inviteCode: n.inviteCode,
              caption: n.caption,
              preview: (0, h.b)(n),
            };
            break;
          case u.f.RICH_HSM:
            t = {
              type: "rich_hsm",
              title: n.title,
              content: n.content,
              footer: n.footer,
            };
            var A = n.richContent,
              T = n.buttons;
            if (A)
              switch (A.type) {
                case u.f.IMAGE:
                case u.f.VIDEO:
                  A.type === u.f.IMAGE
                    ? (t = Object.assign({}, t, {
                        richContent: {
                          type: "image",
                          mediaStatus: (0, l.a)(n, E),
                          preview: (0, h.a)(n),
                          caption: "",
                          bg: n.bg,
                          height: A.height,
                          width: A.width,
                          size: A.size,
                          highResPreview: null,
                        },
                      }))
                    : (A.type,
                      (t = Object.assign({}, t, {
                        richContent: {
                          type: "video",
                          mediaStatus: (0, l.a)(n, E),
                          preview: (0, h.a)(n),
                          caption: "",
                          bg: n.bg,
                          height: A.height,
                          width: A.width,
                          size: A.size,
                          duration: A.duration,
                          rotation: A.rotation,
                          highResPreview: A.frame,
                        },
                      })));
                  break;
                case u.f.LOCATION:
                  t = Object.assign({}, t, {
                    richContent: {
                      type: "location",
                      lat: A.degreesLatitude,
                      lng: A.degreesLongitude,
                      address: A.address,
                      name: A.name,
                      url: A.url,
                      preview: (0, h.a)(n),
                    },
                  });
                  break;
                case u.f.DOCUMENT:
                  t = Object.assign({}, t, {
                    richContent: {
                      type: "document",
                      mediaStatus: (0, l.a)(n, E),
                      preview: (0, h.a)(n),
                      mimetype: A.mimetype,
                      fileName: A.fileName,
                      size: A.size,
                      pages: A.isVCard ? A.contactsCount : A.pages,
                      isVCard: !!A.isVCard,
                    },
                  });
                  break;
                default:
                  return (0, s.a)(A.type);
              }
            if (T) {
              var M = T.map((n) => {
                switch (n.type) {
                  case u.d.URL:
                    return {
                      type: "url",
                      displayText: n.displayText,
                      url: n.url,
                    };
                  case u.d.QUICK_REPLY:
                    return {
                      type: "quick_reply",
                      displayText: n.displayText,
                      payload: n.payload,
                      pressed: n.pressed,
                    };
                  case u.d.CALL:
                    return {
                      type: "call",
                      displayText: n.displayText,
                      phoneNumber: n.phoneNumber,
                    };
                  default:
                    return (0, s.a)(n);
                }
              });
              t = Object.assign({}, t, { buttons: M });
            }
            break;
          case u.f.HSM_BUTTON_REPLY:
            t = { type: "text", text: n.selectedDisplayText };
            break;
          case u.f.DOCUMENT:
            (r = n),
              (a = (0, l.a)(r, E)),
              (t =
                r.isVCard && r.uiVCards && null != r.contactsCount
                  ? {
                      type: "vcard",
                      contacts: r.uiVCards,
                      total: r.contactsCount,
                      isMMS: !0,
                      mediaStatus: a,
                      size: r.size,
                    }
                  : {
                      type: "document",
                      mediaStatus: a,
                      mimetype: r.mimetype,
                      fileName: r.fileName,
                      preview: (0, h.a)(r),
                      bg: r.bg,
                      size: r.size,
                      pages: r.isVCard ? r.contactsCount : r.pages,
                      isVCard: !!r.isVCard,
                      mmsThumb: r.mmsThumb,
                    });
            break;
          case u.f.CONTACT_BLOCK_CHANGE:
            t = { type: "contact_block_change", blocked: n.blocked };
            break;
          case u.f.EPHEMERAL:
            "fail" === n.subtype
              ? (t = {
                  type: "ephemeral_change_fail",
                  expiration: n.expiration,
                })
              : "default-disappearing-mode" === n.subtype
              ? (t = (0, _.a)("disappearing_mode")
                  ? {
                      type: "default-disappearing-mode",
                      ephemeralExpiration: n.ephemeralExpiration,
                      initiator: n.initiator,
                    }
                  : {
                      type: "ephemeral_change",
                      ephemeralExpiration: n.ephemeralExpiration,
                    })
              : "keep-in-chat" === n.subtype
              ? (t = { type: "keep-in-chat" })
              : (n.subtype,
                (t = {
                  type: "ephemeral_change",
                  ephemeralExpiration: n.ephemeralExpiration,
                }),
                n.updated && (t.updated = !0));
            break;
          case u.f.POLL:
            var $ = n.pollVotes,
              N = n.selectableOptionsCount;
            (t = {
              type: "poll",
              name: y(n.name),
              options: n.options.map(y).map(b.g),
              selectableOptionsCount: N,
            }),
              null != $ &&
                (t.pollVotes = Object.assign({}, $, {
                  maxVotes: Math.max(0, ...Array.from($.voteCounts.values())),
                }));
            break;
          default:
            return (0, s.a)(n);
        }
        var P = {
          id: n.id,
          chatId: n.chat,
          ts: n.ts,
          meta: (0, w.a)(n),
          content: t,
          mentionedJids: n.mentionedJids,
          starred: n.starred,
          remoteJid: n.remoteJid,
          expiration: n.expiration || void 0,
          validUntil: n.validUntil,
        };
        n.bizConflict &&
          ((P.bizConflict = n.bizConflict), (P.bizInfo = n.bizInfo)),
          n.reactions && (P.reactions = n.reactions);
        var D = (function (n) {
          var t = n.forwardingScore;
          null == t && (t = n.isForwarded ? 1 : 0);
          var r = p.I.get(),
            e = r.frequentlyForwardedThreshold,
            i = r.frequentlyForwardedMessages;
          return t >= f.a
            ? { status: "frequently-forwarded" }
            : i && t >= e - 1 && n.author !== u.b
            ? { status: "will-become-frequently-forwarded", score: t }
            : t > 0
            ? { status: "forwarded", score: t }
            : void 0;
        })(n);
        D && (P.forwarded = D);
        var L = n.quoted;
        L &&
          (P.quoted = (function (n, t) {
            var r = n.author,
              i = r === u.b ? { fromMe: !0 } : { fromMe: !1, author: r },
              a = (0, c.d)(n.content),
              s = void 0;
            return (
              a &&
                a.type === u.f.STICKER &&
                null != n.id &&
                (s = (0, e.c)(n.id)),
              {
                remoteJid: n.remoteJid,
                id: n.id,
                ts: n.ts,
                meta: i,
                content: a ? O(a) : n.content,
                mentionedJids: n.mentionedJids,
                preview: n.hasPreview ? (0, o.E)(t) : null,
                stickerPreviewMsgId: s,
                bg: n.bg,
              }
            );
          })(L, n.id));
        var G = n.keptInfo;
        if (null != G) {
          var x = G.author,
            R = G.repeatedTimes;
          if (null != G.kept && null != G.validUntil) {
            var j = G.kept,
              B = G.validUntil,
              U = {
                kept: j,
                keptAt: G.ts,
                validUntil: B,
                author: x,
                repeatedTimes: R,
              };
            P.keptInfo = U;
          } else {
            var q = { author: x, repeatedTimes: R };
            P.keptInfo = q;
          }
          var K = P.keptInfo;
          x === u.b && (0, k.g)(G.ack) && (K.ackError = !0);
        }
        return P;
      }
      function O(n) {
        switch (n.type) {
          case u.f.TEXT:
            return { type: "text", text: (0, f.m)(n.text) };
          case u.f.IMAGE:
            return null != n.viewOnceState
              ? { type: "viewOnceImage", viewOnceState: g.a }
              : { type: "image", caption: (0, f.l)(n.text) };
          case u.f.STICKER:
            return { type: "sticker" };
          case u.f.PTT:
            return { type: "voice", duration: n.duration, isPtt: !0 };
          case u.f.VIDEO:
            return null != n.viewOnceState
              ? { type: "viewOnceVideo", viewOnceState: g.a }
              : {
                  type: "video",
                  duration: n.duration,
                  caption: (0, f.l)(n.text),
                };
          case u.f.GIF:
            return { type: "gif", caption: (0, f.l)(n.text) };
          case u.f.AUDIO:
            return { type: "voice", duration: n.duration, isPtt: !1 };
          case u.f.VCARD:
            return {
              type: "vcard",
              displayNames: (0, i.l)(n.contacts).map((n) =>
                (0, f.m)(n.displayName)
              ),
              total: n.contacts.length,
            };
          case u.f.LOCATION:
            return { type: "location", address: n.address, name: n.name };
          case u.f.GROUP_INVITE:
            return { type: "group_invite", caption: (0, f.l)(n.caption) };
          case u.f.RICH_HSM:
            return {
              type: "rich_hsm",
              text: (0, d.c)((0, f.l)(n.title), (0, f.m)(n.content), null),
              subtype: (0, d.d)(n.richContent),
            };
          case u.f.HSM_BUTTON_REPLY:
            return { type: "hsm_button_reply", text: n.selectedDisplayText };
          case u.f.DOCUMENT:
            var t = n.contactsCount;
            return n.isVCard && null != t
              ? {
                  type: "vcard",
                  displayNames: n.uiVCards
                    ? n.uiVCards.map((n) => n.displayName)
                    : [(0, v.i)(n.fileName)],
                  total: t,
                }
              : {
                  type: "document",
                  fileName: n.fileName,
                  mimetype: n.mimetype,
                };
          case u.f.POLL:
            return { type: "poll", name: n.name };
          default:
            return (0, s.a)(n.type);
        }
      }
      function I(n) {
        var t,
          r,
          e,
          i,
          u = n.subtype;
        switch (u) {
          case "add":
          case "remove":
          case "promote":
          case "demote":
          case "cag_promote":
          case "cag_demote":
            return {
              type: "gp2",
              subtype: u,
              subjectIsMe: !!n.involvesMe,
              participants: n.participants || [],
            };
          case "invite":
          case "leave":
          case "modify":
          case "accept":
            return {
              type: "gp2",
              subtype: u,
              subject: n.participants && n.participants[0],
            };
          case "subject":
            return {
              type: "gp2",
              subtype: u,
              title: null != (t = (0, f.l)(n.title)) ? t : "",
            };
          case "create":
            return {
              type: "gp2",
              subtype: u,
              title: null != (r = (0, f.l)(n.title)) ? r : void 0,
            };
          case "cag_create":
            return {
              type: "gp2",
              subtype: u,
              title: null != (e = (0, f.l)(n.title)) ? e : void 0,
            };
          case "description":
          case "description_remove":
          case "revoke_invite":
          case "delete":
          case "closed":
          case "deactivate":
          case "picture":
          case "picture_remove":
          case "locked":
          case "unlocked":
            return { type: "gp2", subtype: u };
          case "announcement":
            return { type: "gp2", subtype: "announce", announce: !0 };
          case "not_announcement":
            return { type: "gp2", subtype: "announce", announce: !1 };
          case "restrict":
            return { type: "gp2", subtype: u, restrict: !!n.restrict };
          case "ephemeral":
            return {
              type: "gp2",
              subtype: "ephemeral",
              expiration: n.expiration,
              updated: !!n.updated,
            };
          case "ephemeral_authorless":
            return {
              type: "gp2",
              subtype: "ephemeral_authorless",
              expiration: n.expiration,
              updated: !!n.updated,
            };
          case "growth_locked":
            return { type: "gp2", subtype: "growth_locked" };
          case "growth_unlocked":
            return { type: "gp2", subtype: "growth_unlocked" };
          case "link_subgroup":
          case "link_cag":
          case "unlink_subgroup":
          case "unlink_cag":
            return {
              type: "gp2",
              subtype: u,
              subject: null != (i = (0, f.l)(n.subject)) ? i : "",
            };
          default:
            throw new Error(
              "groupNotificationContent unrecognized type " + n.subtype
            );
        }
      }
      function C(n) {
        if ("consumer" === n.subtype)
          return { type: "biz", subtype: "consumer", name: n.name };
        if (void 0 === n.name) return { type: "biz", subtype: n.subtype };
        var t = n;
        return { type: "biz", subtype: t.subtype, name: t.name };
      }
    },
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return e;
      });
      var e = class {
        constructor() {
          (this.Q = !1),
            (this.promise = new Promise((n) => {
              this.P = n;
            }));
        }
        resolve(n) {
          (this.Q = !0), this.P(n);
        }
        reject(n) {
          this.resolve(Promise.reject(n));
        }
        resolveWasCalled() {
          return this.Q;
        }
      };
    },
    ,
    function (n, t, r) {
      r.r(t),
        r.d(t, "defineDb", function () {
          return c;
        }),
        r.d(t, "getProfilePicTable", function () {
          return v;
        }),
        r.d(t, "nukeProfilePicTable", function () {
          return p;
        });
      var e = r(5),
        i = r(3),
        u = r(11),
        o = r(138),
        a = r(14),
        s = { thumbnails: "fullImages", icons: "thumbImages" };
      function c(n) {
        n.version(1).stores({ fullImages: "jid", thumbImages: "jid" });
      }
      var f = (0, o.a)(a.d, c);
      function l(n) {
        if (n) return Object.assign({}, n, { photoId: n.photoId || null });
      }
      var d = class extends e.b {
        constructor() {
          super(f);
        }
        getAllStoreNames() {
          return (0, u.y)(s);
        }
        getThumbnailsStore() {
          return this.stores.fullImages;
        }
        getIconsStore() {
          return this.stores.thumbImages;
        }
        getThumb(n) {
          return (0, e.i)(this.getThumbnailsStore().get(n)).then(l);
        }
        getIcon(n) {
          return (0, e.i)(this.getIconsStore().get(n)).then(l);
        }
        getIcons(n) {
          return (0, e.i)(
            this.getIconsStore().where("jid").anyOf(n).toArray()
          ).then((n) => n.map(l));
        }
        refreshLastUpdated(n) {
          var t = (0, i.D)();
          return (0, e.i)(
            this.getThumbnailsStore().update(n, { lastUpdated: t })
          ).then(() => t);
        }
        setDontRetryBefore(n, t) {
          return (0, e.i)(
            this.getThumbnailsStore().update(n, { dontRetryBefore: t })
          );
        }
        storeEmptyThumb(n, t) {
          return this.storeThumb(n, null, t);
        }
        storeThumb(n, t, r) {
          var u = (0, i.D)(),
            o = {
              jid: n,
              photoId: t ? t.photoId : null,
              image: t ? t.thumb : null,
              lastUpdated: u,
            };
          null != r && (o.dontRetryBefore = r);
          var a = {
            jid: n,
            photoId: t ? t.photoId : null,
            image: t ? t.icon : null,
          };
          return this.transact("rw", this.getAllStoreNames(), () =>
            (0, e.c)([
              this.getThumbnailsStore().put(o),
              this.getIconsStore().put(a),
            ])
          ).then(() => o);
        }
        clearRecord(n) {
          return (0, e.i)(
            this.getThumbnailsStore().update(n, { lastUpdated: null })
          ).then(() => {});
        }
        clearRecords(n) {
          return this.transact("rw", [s.thumbnails], () =>
            (0, e.c)(
              n.map((n) =>
                this.getThumbnailsStore().update(n, { lastUpdated: null })
              )
            )
          ).then(() => {});
        }
        deleteRecord(n) {
          return this.transact("rw", this.getAllStoreNames(), () =>
            (0, e.c)([
              this.getThumbnailsStore().delete(n),
              this.getIconsStore().delete(n),
            ]).then(() => {})
          );
        }
        clearStores() {
          return (0, e.i)(
            (0, e.c)([
              this.getThumbnailsStore().clear(),
              this.getIconsStore().clear(),
            ])
          );
        }
      };
      t.default = d;
      var h = null;
      function v() {
        return h || (h = new d()), h;
      }
      function p() {
        return (0, e.i)(v().stores.delete());
      }
    },
    ,
    ,
    function (n, t, r) {
      r.d(t, "i", function () {
        return o;
      }),
        r.d(t, "j", function () {
          return a;
        }),
        r.d(t, "e", function () {
          return s;
        }),
        r.d(t, "d", function () {
          return c;
        }),
        r.d(t, "f", function () {
          return f;
        }),
        r.d(t, "c", function () {
          return l;
        }),
        r.d(t, "b", function () {
          return d;
        }),
        r.d(t, "g", function () {
          return h;
        }),
        r.d(t, "h", function () {
          return v;
        }),
        r.d(t, "k", function () {
          return p;
        });
      var e = r(17),
        i = r(7),
        u = r(98);
      function o(n) {
        var t = [
            ...(0, e.a)("system_msg_numbers_fb_branded").split(","),
            ...(0, e.a)("system_msg_numbers_fb_inc").split(","),
          ],
          r = (0, i.u)(n);
        return t.includes(r);
      }
      function a(n) {
        var t = (0, e.a)("in_app_support_v2_numbers").split(","),
          r = (0, i.u)(n);
        return t.includes(r);
      }
      function s(n) {
        return null != n.verifiedInfo;
      }
      function c(n) {
        return null != n.verifiedInfo && n.verifiedInfo.isApi;
      }
      function f(n) {
        return (
          null != n.verifiedInfo &&
          null != n.verifiedInfo.bsp &&
          n.verifiedInfo.isApi &&
          n.verifiedInfo.bsp.host === u.b.FB
        );
      }
      function l(n) {
        return null != n.verifiedInfo && "high" === n.verifiedInfo.level
          ? n.verifiedInfo.name
          : void 0;
      }
      function d(n, t) {
        if ("ONE_TO_ONE" === n.type) {
          var r = t[n.jid];
          return r && null != r.verifiedInfo ? r.verifiedInfo.level : null;
        }
        return null;
      }
      function h(n) {
        return !n.verifiedInfo || v(n.verifiedInfo);
      }
      function v(n) {
        return (
          !n.isApi ||
          null == n.bsp ||
          null == (t = n.bsp) ||
          (t.actors === u.a.SELF && t.host === u.b.ON_PREMISE)
        );
        var t;
      }
      function p(n, t) {
        var r = n.actors,
          e = n.host;
        if (r === u.a.SELF && e === u.b.ON_PREMISE) return t.SO();
        if (r === u.a.SELF && e === u.b.FB) return t.SF();
        if (r === u.a.BSP && e === u.b.ON_PREMISE) return t.BO();
        if (r === u.a.BSP && e === u.b.FB) return t.BF();
        throw Error("Unreachable code switchOnBspInfo");
      }
      r.d(t, "a", function () {
        return u.b;
      });
    },
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "d", function () {
        return c;
      }),
        r.d(t, "e", function () {
          return f;
        }),
        r.d(t, "f", function () {
          return l;
        }),
        r.d(t, "h", function () {
          return I;
        }),
        r.d(t, "c", function () {
          return C;
        }),
        r.d(t, "i", function () {
          return T;
        }),
        r.d(t, "b", function () {
          return M;
        }),
        r.d(t, "a", function () {
          return N;
        }),
        r.d(t, "g", function () {
          return D;
        });
      var e = r(37),
        i = r.n(e),
        u = r(3),
        o = r(21),
        a = 2 * u.b;
      function s(n) {
        return `${n < 10 ? (0, o.l)() : ""}${(0, o.i)(n)}`;
      }
      function c(n) {
        if ((0, u.D)() - n < a) {
          var t = new Date().getDay(),
            r = (0, u.C)(n).getDay();
          if (t === r) return "TODAY";
          if ((r + 1) % 7 === t) return "YESTERDAY";
        }
        return "LONG_AGO";
      }
      function f(n) {
        var t = (0, u.D)() - n;
        if (t < a) {
          var r = new Date().getDay(),
            e = (0, u.C)(n).getDay();
          if (r === e) return "TODAY";
          if ((e + 1) % 7 === r) return "YESTERDAY";
        } else {
          if (t < 6 * u.b) return "WEEK_AGO";
          if (t < 30 * u.b) return "MONTH_AGO";
        }
        return "LONG_AGO";
      }
      function l(n) {
        var t = (0, u.D)() - n;
        return t < 60
          ? "NOW"
          : t < u.d
          ? Math.floor(t / 60)
          : new Date().getDay() === (0, u.C)(n).getDay()
          ? "TODAY"
          : "YESTERDAY";
      }
      var d = { formatMatcher: "basic" },
        h = Object.assign({}, d, {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        v = Object.assign({}, d, { hour: "numeric", minute: "numeric" }),
        p = Object.assign({}, h, v),
        g = null,
        _ = null,
        m = null,
        y = null,
        b = null,
        w = null,
        k = null,
        E = null,
        S = null,
        A = null,
        O = !1;
      function I(n) {
        O !== n && ((O = n), (b = null), (w = null));
      }
      function C() {
        return (
          null == g &&
            (g = navigator.language).startsWith("ar") &&
            (g += "-u-ca-gregory"),
          g
        );
      }
      function T(n, t) {
        if ("undefined" == typeof Intl) {
          var r = "toLocaleDateTimeString() called but Intl is unavailable";
          return __LOG__(4)`${r}`, SEND_LOGS(r), "";
        }
        var e = n + (0, u.l)();
        switch (t) {
          case "dateAndTime":
            return (
              null == w &&
                (w = new Intl.DateTimeFormat(
                  C(),
                  Object.assign({}, p, { hour12: O })
                )),
              w.format((0, u.C)(e))
            );
          case "date":
            return (
              null == _ && (_ = new Intl.DateTimeFormat(C(), h)),
              _.format((0, u.C)(e))
            );
          case "dateShort":
            return (
              null == m &&
                (m = new Intl.DateTimeFormat(
                  C(),
                  Object.assign({}, h, { year: "2-digit" })
                )),
              m.format((0, u.C)(e))
            );
          case "yearDate":
            return (
              null == y &&
                (y = new Intl.DateTimeFormat(
                  C(),
                  Object.assign({}, d, { month: "short", day: "numeric" })
                )),
              y.format((0, u.C)(e))
            );
          case "weekday":
            return (
              null == k &&
                (k = new Intl.DateTimeFormat(
                  C(),
                  Object.assign({}, d, { weekday: "long" })
                )),
              k.format((0, u.C)(e))
            );
          case "weekdayShort":
            return (
              null == E &&
                (E = new Intl.DateTimeFormat(
                  C(),
                  Object.assign({}, d, { weekday: "short" })
                )),
              E.format((0, u.C)(e))
            );
          case "time":
            return (
              null == b &&
                (b = new Intl.DateTimeFormat(
                  C(),
                  Object.assign({}, v, { hour12: O })
                )),
              b.format((0, u.C)(e))
            );
          case "fulldateShort":
            return (
              null == A &&
                (A = new Intl.DateTimeFormat(
                  C(),
                  Object.assign({}, d, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                )),
              A.format((0, u.C)(e))
            );
          case "fulldate":
            return (
              null == S &&
                (S = new Intl.DateTimeFormat(
                  C(),
                  Object.assign({}, d, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                )),
              S.format((0, u.C)(e))
            );
          default:
            return (0, i.a)(t);
        }
      }
      function M(n) {
        var t = n,
          r = Math.floor(t / 3600);
        t -= 3600 * r;
        var e = Math.floor(t / 60);
        return (
          (t = Math.round(t - 60 * e)),
          r > 0 ? `${(0, o.i)(r)}:${s(e)}:${s(t)}` : `${(0, o.i)(e)}:${s(t)}`
        );
      }
      var $ = null;
      function N(n, t) {
        return (
          null == $ && ($ = new Intl.DateTimeFormat(t, { weekday: "long" })),
          $.format(new Date(2021, 10, n))
        );
      }
      var P = null;
      function D(n, t) {
        var r = new Date();
        return (
          r.setHours(0, n, 0, 0),
          null == P &&
            (P = new Intl.DateTimeFormat(t, {
              hour: "numeric",
              minute: "numeric",
            })),
          P.format(r)
        );
      }
    },
    function (n, t, r) {
      var e, i;
      r.d(t, "a", function () {
        return u;
      });
      var u =
        ((e = class {
          constructor(n) {
            i.call(this), (this.Bq = n);
          }
          onOrBeforeRepaint(n) {
            if (!this.Bs) {
              var t = Date.now(),
                r = this.Bv;
              if (!(0 !== r && t < r)) {
                var e = this.Bu;
                (0 === e || t < e) && (this.Bu = t),
                  this.Br && (clearTimeout(this.Br), (this.Br = 0)),
                  (!this.ts || this.ts > t) && (this.ts = t),
                  (this.Bw = n),
                  (this.Bs = requestAnimationFrame(this.Bx));
              }
            }
          }
          onOrAfter(n, t) {
            o(n);
            var r = Date.now() + n,
              e = this.Bv;
            if (!(0 !== e && r < e)) {
              var i = this.Bu;
              (0 !== i && i < r) ||
                ((this.Bv = r), (!this.Br || this.ts < r) && this.By(r, n, t));
            }
          }
          debounce(n, t) {
            o(n), this.Bz(Date.now(), n, t);
          }
          debounceAndCap(n, t, r) {
            o(n), o(t);
            var e = Date.now(),
              i = e + t,
              u = this.Bv,
              a = this.Bu;
            (0 === u || u <= i) && (0 === a || i < a) && (this.Bu = i),
              this.Bz(e, n, r);
          }
          forceRunNowIfScheduled() {
            this.Br
              ? (clearTimeout(this.Br), this.Bx())
              : this.Bs && (cancelAnimationFrame(this.Bs), this.Bx());
          }
          isScheduled() {
            return 0 !== this.Br || 0 !== this.Bs;
          }
          Bz(n, t, r) {
            var e = n + t,
              i = this.Bv;
            if (!(0 !== i && e < i)) {
              var u = this.ts,
                o = this.Bu;
              0 !== o && o < e
                ? u < o && this.By(o, o - n, r)
                : u < e && this.By(e, t, r);
            }
          }
          By(n, t, r) {
            if (
              (this.Bs && (cancelAnimationFrame(this.Bs), (this.Bs = 0)),
              (this.Bw = r),
              (this.ts = n),
              this.Br)
            ) {
              var e = n - this.Bt;
              if (-16 < e && e < 16) return;
              clearTimeout(this.Br);
            }
            (this.Br = setTimeout(this.Bx, t)), (this.Bt = n);
          }
        }),
        (i = function () {
          (this.Br = 0),
            (this.Bs = 0),
            (this.ts = 0),
            (this.Bt = 0),
            (this.Bu = 0),
            (this.Bv = 0),
            (this.Bw = void 0),
            (this.Bx = () => {
              var n = this.Bw,
                t = this.Bq;
              (this.Bs = 0),
                (this.Br = 0),
                (this.ts = 0),
                (this.Bt = 0),
                (this.Bu = 0),
                (this.Bv = 0),
                (this.Bw = void 0),
                t(n);
            }),
            (this.onOrBefore = (n, t) => {
              o(n);
              var r = Date.now() + n,
                e = this.Bu;
              if (!(0 !== e && e < r)) {
                var i = this.Bv;
                (0 !== i && r < i) ||
                  ((this.Bu = r),
                  this.Bs || (this.Br && !(r < this.ts)) || this.By(r, n, t));
              }
            }),
            (this.forceRunNow = (n) => {
              this.Br && clearTimeout(this.Br),
                this.Bs && cancelAnimationFrame(this.Bs),
                (this.Bw = n),
                this.Bx();
            }),
            (this.cancel = () => {
              this.Br && clearTimeout(this.Br),
                this.Bs && cancelAnimationFrame(this.Bs),
                (this.Br = 0),
                (this.Bs = 0),
                (this.ts = 0),
                (this.Bt = 0),
                (this.Bu = 0),
                (this.Bv = 0),
                (this.Bw = void 0);
            });
        }),
        e);
      function o(n) {
        if (!(n >= 0)) throw new Error("ShiftTimer must be given delay >= 0");
      }
    },
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return e;
      }),
        r.d(t, "b", function () {
          return i;
        });
      var e = class {
          constructor() {
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : -1;
            (this.Dy = Promise.resolve()), (this.Dz = n);
          }
          wait() {
            return this.Dy;
          }
          enqueueHandlers(n, t, r) {
            var e = this.Dy.then(() => n).then(t, r),
              i = e.then();
            return (this.Dy = u(e, this.Dz)), i;
          }
          enqueue(n) {
            var t = this.Dy.then(n),
              r = t.then();
            return (this.Dy = u(t, this.Dz)), r;
          }
        },
        i = class {
          constructor() {
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : -1;
            (this.EA = new Map()), (this.Dz = n);
          }
          waitIfPending(n) {
            return this.EA.get(n);
          }
          wait(n) {
            return this.EA.get(n) || Promise.resolve();
          }
          enqueueHandlers(n, t, r, e) {
            var i = this.wait(n)
              .then(() => t)
              .then(r, e);
            return this.EB(n, i);
          }
          enqueue(n, t) {
            var r = this.wait(n).then(t);
            return this.EB(n, r);
          }
          EB(n, t) {
            var r,
              e = t.then(),
              i = () => {
                this.EA.get(n) === r && this.EA.delete(n);
              };
            return (r = u(t, this.Dz).then(i, i)), this.EA.set(n, r), e;
          }
        };
      function u(n, t) {
        return t >= 0
          ? new Promise((r) => {
              var e = () => {
                r();
              };
              n.then(e, e), setTimeout(e, t);
            })
          : n.then(o, o);
      }
      function o() {}
    },
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "d", function () {
        return i;
      }),
        r.d(t, "b", function () {
          return u;
        }),
        r.d(t, "a", function () {
          return o;
        }),
        r.d(t, "g", function () {
          return s;
        }),
        r.d(t, "e", function () {
          return c;
        }),
        r.d(t, "f", function () {
          return f;
        }),
        r.d(t, "c", function () {
          return l;
        });
      var e = Object.create(Error.prototype, {
        constructor: { value: void 0, writable: !0, configurable: !0 },
      });
      function i(n) {
        var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          r = arguments.length > 2 ? arguments[2] : void 0;
        function i(r) {
          var e = Error.call(this, r);
          (this.message = r),
            (e.name = n),
            (this.name = n),
            t && (this.stack = e.stack);
        }
        return (
          (i.prototype = Object.create(r ? r.prototype : e)),
          (i.prototype.constructor = i),
          i
        );
      }
      i("AggregateError", !0);
      var u = class extends i("TimeoutError", !1) {},
        o = class extends i("HttpError", !1) {
          constructor(n, t) {
            super(n), (this.code = t);
          }
        },
        a = (i("UnimplementedMethod"), !1);
      function s(n) {
        if (null == n || "QuotaExceededError" !== n.name) throw n;
        a = !0;
      }
      function c() {
        return a;
      }
      function f(n) {
        return JSON.stringify(n, Object.getOwnPropertyNames(n));
      }
      var l = class extends Error {
        constructor(n, t) {
          super(n), (this.inner = t);
        }
      };
    },
    ,
    function (n, t, r) {
      r.d(t, "d", function () {
        return c;
      }),
        r.d(t, "a", function () {
          return h;
        }),
        r.d(t, "c", function () {
          return v;
        }),
        r.d(t, "b", function () {
          return p;
        }),
        r.d(t, "e", function () {
          return g;
        }),
        r.d(t, "g", function () {
          return _;
        }),
        r.d(t, "f", function () {
          return m;
        }),
        r.d(t, "h", function () {
          return y;
        }),
        r.d(t, "l", function () {
          return b;
        }),
        r.d(t, "k", function () {
          return w;
        }),
        r.d(t, "j", function () {
          return k;
        }),
        r.d(t, "i", function () {
          return S;
        });
      var e = r(50),
        i = r(11),
        u = r(3),
        o = r(33),
        a = {
          "image/webp": "webp",
          "image/jpeg": "jpg",
          "video/3gpp": "3gp",
          "video/mp4": "mp4",
          "video/mpeg": "mpg",
          "video/avi": "avi",
          "audio/ogg; codecs=opus": "opus",
          "audio/ogg": "ogg",
          "audio/mpeg": "mp3",
          "audio/mp3": "mp3",
          "audio/mp4": "m4a",
          "audio/aac": "aac",
          "audio/amr": "amr",
          "application/pdf": "pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            "docx",
          "text/vcard": "vcf",
        },
        s = { "image/": "IMG", "video/": "VID", "audio/": "AUD" },
        c = (0, e.k)("whatsapp"),
        f = "" + c,
        l = c + "/.private",
        d = c + "/.sent",
        h = c + "/.gifs",
        v = c + "/.status/.sent",
        p = c + "/.status",
        g = (0, e.k)(c + "/.tmp");
      function _(n) {
        var t = a[n] || "bin",
          r = (function () {
            var n = (0, u.F)(),
              t = (0, i.q)(n.getMonth() + 1, 2),
              r = (0, i.q)(n.getDate(), 2);
            return `${n.getFullYear()}${t}${r}`;
          })(),
          e = (0, o.l)(4).toLowerCase(),
          c = n.substring(0, n.indexOf("/") + 1);
        return `WA-${s[c] || "DOC"}-${r}-${e}.${t}`;
      }
      function m(n) {
        var t = _(n);
        return (0, e.k)(`${h}/${t}`);
      }
      function y(n, t) {
        var r = _(n);
        return t.isStatus
          ? t.outgoing
            ? (0, e.k)(`${v}/${r}`)
            : (0, e.k)(`${p}/${r}`)
          : t.outgoing
          ? (0, e.k)(`${d}/${r}`)
          : t.showInGallery
          ? (0, e.k)(`${f}/${r}`)
          : (0, e.k)(`${l}/${r}`);
      }
      function b(n, t) {
        return t.showInGallery
          ? !n.showInGallery
          : (t.showInGallery, !t.isStatus && !!n.isStatus);
      }
      function w(n) {
        var t = k(n);
        return t
          ? !t.showInGallery
          : (__LOG__(4)`Unexpected filesystem path`,
            SEND_LOGS("external-filesystem-path"),
            !1);
      }
      function k(n) {
        var t = (0, e.o)(n).relativePath;
        return t.startsWith(c)
          ? t.startsWith(p)
            ? { isStatus: !0, outgoing: t.startsWith(v) }
            : t.startsWith(d)
            ? { outgoing: !0 }
            : { outgoing: !1, showInGallery: !t.startsWith(l) }
          : null;
      }
      var E = /^(.*.)\.[^.]+$/;
      function S(n) {
        return n.replace(E, "$1");
      }
    },
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return e;
      }),
        r.d(t, "b", function () {
          return i;
        });
      var e = { CHANGED_IN_CHAT: 0, INITIATED_BY_ME: 1, INITIATED_BY_OTHER: 2 },
        i = { KEEP_FOR_ALL: 1, UNDO_KEEP_FOR_ALL: 2 };
    },
    function (n, t, r) {
      r.d(t, "f", function () {
        return d;
      }),
        r.d(t, "b", function () {
          return h;
        }),
        r.d(t, "c", function () {
          return v;
        }),
        r.d(t, "g", function () {
          return p;
        }),
        r.d(t, "i", function () {
          return g;
        }),
        r.d(t, "j", function () {
          return _;
        }),
        r.d(t, "d", function () {
          return m;
        }),
        r.d(t, "l", function () {
          return y;
        }),
        r.d(t, "a", function () {
          return b;
        }),
        r.d(t, "m", function () {
          return w;
        }),
        r.d(t, "e", function () {
          return k;
        }),
        r.d(t, "k", function () {
          return E;
        }),
        r.d(t, "h", function () {
          return S;
        });
      var e = r(102),
        i = r(37),
        u = r.n(i),
        o = r(14),
        a = r(3),
        s = r(195),
        c = r(20),
        f = r(42),
        l = new WeakMap();
      function d(n) {
        if (!l.has(n)) {
          var t = (function (n) {
            switch (n.type) {
              case "image":
              case "gif":
              case "video":
                return n.caption;
              case "text":
                return n.text;
              case "voice":
                return;
              default:
                return (0, u.a)(n.type);
            }
          })(n);
          t && l.set(n, (0, e.e)(t, null));
        }
        return l.get(n);
      }
      function h(n) {
        var t = (16777215 & n).toString(16);
        return "#" + "00000".substring(0, 6 - t.length) + t;
      }
      function v(n, t) {
        return n ? h(n) : t || "#000";
      }
      function p(n) {
        var t = n.findIndex((n) => !(0, f.i)(n.ack));
        return t < 0
          ? { first: null, count: 0 }
          : { first: n[t], count: n.length - t };
      }
      function g(n, t) {
        return t.campaignId
          ? null != t.campaignReadTs
            ? (0, a.n)(n, t.campaignReadTs, o.V)
            : null == t.campaignDuration ||
              (0, a.n)(n, t.ts, t.campaignDuration)
          : !(0, f.l)(t.ack) || (0, a.n)(n, t.ts, o.V);
      }
      function _(n) {
        return n.campaignId && null == n.campaignDuration
          ? n.campaignReadTs
          : n.ts;
      }
      function m(n, t, r) {
        var e = new Set(n);
        switch (t.type) {
          case "whitelist":
            var i = t.whitelist.filter((n) => e.has(n)),
              u = (0, c.m)(i);
            return {
              type: "whitelist",
              participants: u,
              whitelist: u,
              blacklist: r.blacklist,
            };
          case "blacklist":
            var o = new Set(t.blacklist);
            return {
              type: "blacklist",
              participants: (0, c.g)((0, c.c)(e), (n) => !o.has(n)),
              blacklist: (0, c.c)(o),
              whitelist: (0, c.g)(r.whitelist, (n) => e.has(n)),
            };
          default:
            return (
              t.type,
              {
                type: "contacts",
                participants: (0, c.c)(e),
                blacklist: r.blacklist,
                whitelist: (0, c.g)(r.whitelist, (n) => e.has(n)),
              }
            );
        }
      }
      function y(n) {
        switch (n.type) {
          case "contacts":
            return { type: "contacts" };
          case "blacklist":
            return { type: "blacklist", blacklist: n.blacklist };
          default:
            return n.type, { type: "whitelist", whitelist: n.whitelist };
        }
      }
      function b(n) {
        if (n && "@psa" === n.jid) return n;
      }
      function w(n) {
        for (var t = (0, s.a)(n), r = n.indexOf("\n"); r >= 0; )
          (t += 49), (r = n.indexOf("\n", r + 1));
        return t;
      }
      function k(n) {
        return (function (n) {
          var t = n.indexOf("\n");
          if (t < 0) return (0, s.b)(n, 0, o.U);
          for (var r = 0, e = 0; t >= 0; ) {
            var i = n.substring(e, t),
              u = r + (0, s.a)(i) + 50;
            u > o.U
              ? (t = -1)
              : ((e = t + 1), (t = n.indexOf("\n", e)), (r = u));
          }
          return n.substring(0, e) + (0, s.b)(n.substring(e), 0, o.U - r);
        })(n.trim()).trim();
      }
      function E(n) {
        switch (n.from) {
          case "cameraTab":
            return 1;
          case "forwardFromMessages":
            return 3;
          case "externalShare":
            return 4;
          default:
            return n.from, 2;
        }
      }
      function S(n) {
        switch (n.type) {
          case "blacklist":
            return 0 === n.blacklist.length ? 992 : [n.blacklist.length, 265];
          case "whitelist":
            return [n.whitelist.length, 266];
          default:
            return n.type, 992;
        }
      }
    },
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return f;
      }),
        r.d(t, "b", function () {
          return l;
        }),
        r.d(t, "d", function () {
          return d;
        }),
        r.d(t, "h", function () {
          return h;
        }),
        r.d(t, "g", function () {
          return v;
        }),
        r.d(t, "f", function () {
          return p;
        }),
        r.d(t, "e", function () {
          return g;
        }),
        r.d(t, "c", function () {
          return _;
        });
      var e = r(11),
        i = r(2),
        u = r(37),
        o = r.n(u),
        a = r(3),
        s = r(52),
        c = r(6),
        f = "active";
      function l(n) {
        return (
          n.type === i.f.IMAGE ||
          n.type === i.f.VIDEO ||
          (n.type !== i.f.TEXT &&
            n.type !== i.f.CIPHERTEXT &&
            n.type !== i.f.VCARD &&
            n.type !== i.f.PTT &&
            n.type !== i.f.AUDIO &&
            n.type !== i.f.GIF &&
            n.type !== i.f.RICH_HSM &&
            n.type !== i.f.LOCATION &&
            n.type !== i.f.EXTENDED_TEXT &&
            n.type !== i.f.IDENTITY_CHANGE &&
            n.type !== i.f.PRIVACY_CHANGE &&
            n.type !== i.f.MD_PLACEHOLDER &&
            n.type !== i.f.FUTUREPROOF &&
            n.type !== i.f.GROUP_NOTIFICATION &&
            n.type !== i.f.BUSINESS_NOTIFICATION &&
            n.type !== i.f.EPHEMERAL &&
            n.type !== i.f.CONTACT_BLOCK_CHANGE &&
            n.type !== i.f.GROUP_INVITE &&
            n.type !== i.f.DOCUMENT &&
            n.type !== i.f.HSM_BUTTON_REPLY &&
            n.type !== i.f.REVOKED &&
            n.type !== i.f.IMAGE &&
            n.type !== i.f.STICKER &&
            n.type !== i.f.VIDEO &&
            n.type !== i.f.POLL &&
            (0, o.a)(n.type))
        );
      }
      function d(n) {
        return (
          !((0, s.w)() && !(0, s.a)()) &&
          (function (n) {
            switch (n.type) {
              case "image":
              case "video":
                return !0;
              default:
                return !1;
            }
          })(n)
        );
      }
      function h() {
        return !0 !== c.R.get() || ((0, s.w)() && !0 !== c.T.get());
      }
      function v() {
        return !0 !== c.S.get();
      }
      function p(n) {
        switch (n.type) {
          case "image":
          case "video":
            return (0, e.j)(n, { viewOnce: !0 });
          default:
            return n;
        }
      }
      function g(n) {
        return "active" === n.viewOnceState &&
          null != n.viewOnceExpiration &&
          n.viewOnceExpiration < (0, a.D)()
          ? "expired"
          : n.viewOnceState
          ? n.viewOnceState
          : (__LOG__(3)`maybeExpireViewOnceState Expected view once message`,
            "active");
      }
      function _(n) {
        return null != n.content.viewOnceState;
      }
    },
    function (n, t, r) {
      r.r(t),
        r.d(t, "defineDb", function () {
          return l;
        }),
        r.d(t, "jobsTable", function () {
          return g;
        }),
        r.d(t, "DummyJobsTable", function () {
          return _;
        });
      var e = r(5),
        i = r(3),
        u = r(33),
        o = r(85),
        a = r(138),
        s = r(14),
        c = r(133);
      r.d(t, "UNSTARTED_JOB", function () {
        return c.f;
      }),
        r.d(t, "FINISHED_JOB", function () {
          return c.a;
        });
      var f = "appRunId";
      function l(n) {
        n.version(1).stores({
          bookmarks: "++jobId, type, uniqKey",
          meta: "key",
        });
      }
      var d,
        h = (0, a.a)(s.u, l),
        v = class extends e.b {
          constructor() {
            super(h), (this.As = (0, u.l)(8));
          }
          maybeCreateJob(n) {
            var t = n.type,
              r = n.args,
              u = n.version,
              o = void 0 === u ? 1 : u,
              a = n.uniqKey,
              s = p(t, a),
              f = {
                type: t,
                uniqKey: s,
                startTime: (0, i.D)(),
                version: o,
                original: r,
                current: r,
                step: c.f,
                waitUntil: null,
                stepFirstStartTime: null,
                stepHardStartCountAfterTimeout: 0,
                stepUnexpectedErrorCount: 0,
                backedOffCount: 0,
              };
            return a
              ? this.transact("rw", ["bookmarks"], () =>
                  this.stores.bookmarks
                    .where("uniqKey")
                    .equals(s)
                    .toArray()
                    .then((n) => {
                      var t,
                        r = [];
                      if (
                        (n.forEach((n) => {
                          n.step === c.a
                            ? r.push(this.stores.bookmarks.delete(n.jobId))
                            : (t = n);
                        }),
                        t)
                      ) {
                        var i = t.jobId;
                        return (
                          __LOG__(2)`Job with ${s} already exists as ${i}`,
                          (0, e.c)(r).then(() => ({
                            newlyCreated: !1,
                            jobId: i,
                          }))
                        );
                      }
                      return (0, e.c)(r).then(() =>
                        this.stores.bookmarks
                          .add(f)
                          .then((n) => ({ newlyCreated: !0, jobId: n }))
                      );
                    })
                )
              : (0, e.i)(this.stores.bookmarks.add(f)).then((n) => ({
                  newlyCreated: !0,
                  jobId: n,
                }));
          }
          loadBookmark(n) {
            return (0, e.i)(this.stores.bookmarks.get(n));
          }
          loadAllBookmarks() {
            return (0, e.i)(this.stores.bookmarks.toArray());
          }
          saveBookmarkAsPage(n) {
            return this.transact("rw", ["meta", "bookmarks"], () =>
              (0, e.c)([this.At(), this.stores.bookmarks.put(n)])
            );
          }
          saveBookmarkIfNoPage(n) {
            return this.transact("rw", ["meta", "bookmarks"], () =>
              this.Au().then(
                (t) => !!t || this.stores.bookmarks.put(n).then(() => !1)
              )
            );
          }
          removeJob(n) {
            return (0, e.i)(this.stores.bookmarks.delete(n));
          }
          removeFinishedJob(n) {
            return this.transact("rw", ["bookmarks"], () =>
              this.stores.bookmarks
                .get(n)
                .then((t) => {
                  if (t)
                    return t.step !== c.a
                      ? (__LOG__(
                          4
                        )`Tried to clear unfinished job. This can be dangerous. Skipping`,
                        void SEND_LOGS("clear-unfinished-job"))
                      : this.stores.bookmarks.delete(n);
                  __LOG__(2)`removeFinishedJob: No bookmark for job ${n}`;
                })
                .then(() => {})
            );
          }
          updateAppRunId() {
            return (0, e.i)(this.At());
          }
          At() {
            return this.stores.meta.put({ key: f, value: this.As }).catch(o.g);
          }
          checkAppRunId() {
            return (0, e.i)(this.Au());
          }
          Au() {
            return this.stores.meta
              .get(f)
              .then((n) => !n || n.value !== this.As);
          }
          clearFinishedJob(n, t) {
            var r = p(n, t);
            return this.transact("rw", ["bookmarks"], () =>
              this.stores.bookmarks
                .where("uniqKey")
                .equals(r)
                .filter((n) => n.step === c.a)
                .delete()
                .then(
                  (n) => (
                    n > 1 &&
                      (__LOG__(3)`More than one job was found for uniqKey ${t}`,
                      SEND_LOGS("multiple-uniqKey-job")),
                    n > 0
                  )
                )
            );
          }
        };
      function p(n, t) {
        return t ? JSON.stringify([n, t]) : (0, u.l)(32);
      }
      function g() {
        return d || (d = new v()), d;
      }
      t.default = v;
      var _ = class {
        constructor() {
          (this.Av = 1), (this.Aw = new Map());
        }
        maybeCreateJob(n) {
          var t = n.type,
            r = n.args,
            e = n.version,
            o = void 0 === e ? 1 : e,
            a = n.uniqKey,
            s = this.Av++,
            f = {
              jobId: s,
              uniqKey: JSON.stringify([t, a || (0, u.l)(32)]),
              type: t,
              startTime: (0, i.D)(),
              version: o,
              original: r,
              current: r,
              step: c.f,
              waitUntil: null,
              stepFirstStartTime: null,
              stepHardStartCountAfterTimeout: 0,
              stepUnexpectedErrorCount: 0,
              backedOffCount: 0,
            };
          return (
            this.Aw.set(s, f), Promise.resolve({ newlyCreated: !0, jobId: s })
          );
        }
        getJob(n) {
          return this.Aw.get(n);
        }
        removeJob(n) {
          this.Aw.delete(n);
        }
      };
    },
    function (n, t, r) {
      r.d(t, "b", function () {
        return e;
      }),
        r.d(t, "a", function () {
          return i;
        });
      var e = { ON_PREMISE: "1", FB: "2" },
        i = { SELF: "1", BSP: "2" };
    },
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "e", function () {
        return F;
      }),
        r.d(t, "a", function () {
          return z;
        }),
        r.d(t, "d", function () {
          return H;
        }),
        r.d(t, "c", function () {
          return W;
        }),
        r.d(t, "b", function () {
          return V;
        });
      var e,
        i = r(8),
        u = r.n(i),
        o = r(64),
        a = r(7),
        s = r(44),
        c = r(31),
        f = r(6),
        l = r(194),
        d = null,
        h = r(155),
        v = /^\s$/,
        p = {
          bold: 1,
          italic: 1,
          strikethrough: 1,
          code: 3,
          mention: 0,
          emoji: 0,
          link: 0,
          phoneNumber: 0,
        };
      function g(n) {
        return v.test(n);
      }
      function _(n) {
        return "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".includes(n);
      }
      function m(n) {
        return null == n || g(n) || _(n);
      }
      function y(n) {
        return null != n && !g(n);
      }
      function b(n, t, r, e) {
        var i = n.openings[t];
        return (
          !(e && null != i && r <= i + p[t]) &&
          ("italic" !== t ||
            !(function (n, t) {
              return (
                "¯\\_(ツ)_/¯" === n.text.slice(t - 2, t + 7) ||
                "¯\\_(ツ)_/¯" === n.text.slice(t - 6, t + 3)
              );
            })(n, r)) &&
          ("code" === t
            ? "`" === n.text[r + 1] && "`" === n.text[r + 2]
            : e
            ? y(n.text[r - 1]) && m(n.text[r + 1])
            : m(n.text[r - 1]) && y(n.text[r + 1]))
        );
      }
      function w(n, t, r) {
        !(function (n, t) {
          return null != n.openings[t];
        })(n, t)
          ? b(n, t, r, !1) && k(n, t, r)
          : b(n, t, r, !0) && E(n, t, r);
      }
      function k(n, t, r) {
        null == n.openings[t]
          ? ((n.openings[t] = r),
            "phoneNumber" === t &&
              ((n.phoneNumber = ""),
              (n.phoneNumberStartsWithPlus = !1),
              (n.phoneNumberLastSignificantCodePoint = -1),
              (n.phoneNumberParenthesesDepth = 0),
              (n.phoneNumberLeadingZeroes = 0),
              (n.phoneNumberCurrentlyMatchingLeadingZeroes = !0)))
          : __LOG__(4)`Msg formatting: cannot open a style before closing it`;
      }
      function E(n, t, r) {
        var e = n.openings[t];
        if (null != e) {
          var i = p[t];
          if (i > 0 && 0 === n.text.slice(e + i, r).trim().length) return;
          switch (
            ("bold" !== t && S(n, "bold", e),
            "italic" !== t && S(n, "italic", e),
            "strikethrough" !== t && S(n, "strikethrough", e),
            "code" === t &&
              ((function (n, t, r) {
                n.styles = n.styles.filter((n) => {
                  var e = n.type,
                    i = n.start,
                    u = n.end;
                  return (
                    "mention" === e || (i < t && u < t) || (i > r && u > r)
                  );
                });
              })(n, e, r),
              A(n, "bold"),
              A(n, "italic"),
              A(n, "strikethrough")),
            t)
          ) {
            case "bold":
              n.styles.push({ type: "bold", start: e, end: r, children: [] });
              break;
            case "italic":
              n.styles.push({ type: "italic", start: e, end: r, children: [] });
              break;
            case "strikethrough":
              n.styles.push({
                type: "strikethrough",
                start: e,
                end: r,
                children: [],
              });
              break;
            case "code":
              n.styles.push({ type: "code", start: e, end: r, children: [] });
          }
          n.openings[t] = null;
        } else
          __LOG__(4)`Msg formatting: cannot close a style before opening it`;
      }
      function S(n, t, r) {
        null != n.openings[t] && n.openings[t] > r && A(n, t);
      }
      function A(n, t) {
        n.openings[t] = null;
      }
      function O(n) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 === n.length) return n;
        var r = t;
        if (1 === n.length) {
          var e = u()(n, 1),
            i = e[0];
          return (
            "phoneNumber" === i.type && (i.absoluteEndWithoutMarkup -= r), n
          );
        }
        var o = [],
          a = null;
        return (
          n.forEach((n) => {
            (r += p[n.type]),
              null == a
                ? ((a = n),
                  "phoneNumber" === n.type && (n.absoluteEndWithoutMarkup -= r))
                : n.start < a.end
                ? (n.end > a.end &&
                    __LOG__(
                      4
                    )`formatting: all styles should be fully nested or ignored`,
                  (n.start = n.start - a.start - p[a.type]),
                  (n.end = n.end - a.start - p[a.type]),
                  a.children.push(n))
                : ((a.children = O(a.children, p[a.type])),
                  o.push(a),
                  (a = n),
                  "phoneNumber" === n.type &&
                    (n.absoluteEndWithoutMarkup -= r)),
              (r += p[n.type]);
          }),
          null != a && ((a.children = O(a.children, p[a.type])), o.push(a)),
          o
        );
      }
      function I(n, t) {
        (n.phoneNumber = n.phoneNumber + String.fromCodePoint(t)),
          (n.phoneNumberLastSignificantCodePoint = t),
          n.phoneNumberCurrentlyMatchingLeadingZeroes &&
            (48 === t
              ? n.phoneNumberLeadingZeroes++
              : (n.phoneNumberCurrentlyMatchingLeadingZeroes = !1));
      }
      function C(n) {
        n.phoneNumberStartsWithPlus = !0;
      }
      function T(n) {
        n.phoneNumberLastSignificantCodePoint = 45;
      }
      function M(n) {
        n.phoneNumberLastSignificantCodePoint = 32;
      }
      function $(n, t) {
        1 !== n.phoneNumberParenthesesDepth
          ? (n.phoneNumberParenthesesDepth++,
            (n.phoneNumberLastSignificantCodePoint = -1))
          : E(n, "phoneNumber", t);
      }
      function N(n, t) {
        0 === n.phoneNumberParenthesesDepth ||
        n.phoneNumberLastSignificantCodePoint < 48 ||
        n.phoneNumberLastSignificantCodePoint > 57
          ? E(n, "phoneNumber", t)
          : (n.phoneNumberParenthesesDepth--,
            (n.phoneNumberLastSignificantCodePoint = -1));
      }
      var P = (0, l.a)(function (n) {
          return (0, o.g)(n);
        }),
        D = new RegExp(
          "\\.(?:бел|дети|москва|онлайн|орг|рус|рф|сайт|укр|قطر|भारत|বাংলা|გე|台灣|한국|[a-zA-Z]{2,15})",
          "y"
        );
      function L(n, t) {
        return (D.lastIndex = t), D.test(n);
      }
      function G(n, t, r) {
        switch (n.text[r]) {
          case ".":
          case ",":
          case "?":
          case "!":
          case ")":
          case "}":
          case "]":
            return !0;
          case "*":
            return null != t.bold && b(n, "bold", r, !0);
          case "_":
            return null != t.italic && b(n, "italic", r, !0);
          case "~":
            return null != t.strikethrough && b(n, "strikethrough", r, !0);
          case "`":
            return (
              null != t.code &&
              (b(n, "code", r, !0) ||
                ("`" === n.text[r - 1] && b(n, "code", r - 1, !0)) ||
                ("`" === n.text[r - 2] && b(n, "code", r - 2, !0)))
            );
          default:
            return !1;
        }
      }
      function x(n, t, r) {
        if (null != n.openings.link) {
          var i = (function (n, t, r) {
            for (var i = t, u = n.text; _(u[i]); ) ++i;
            for (
              var o = Object.assign({}, n.openings),
                a = n.styles.filter(
                  (n) =>
                    !(
                      i <= n.end &&
                      n.end <= r &&
                      (n.start < i && (o[n.type] = n.start), 1)
                    )
                ),
                s = 0,
                f = r - 1;
              f >= i && G(n, o, f);
              --f
            )
              ++s;
            var l,
              h = r - s,
              v = u.slice(i, h);
            if (
              (e ||
                (e =
                  /^(?:mailto:)?(?:(?:[^<>()\[\]\\.,;:\s@"]+(?:\.[^<>()\[\]\\.,;:\s@"]+)*)|(?:".+"))@(?:(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(?:(?:[a-zA-Z\-0-9\u0080-\uFFFF]+\.)+[a-zA-Z\u0080-\uFFFF]{2,}))$/),
              e.test(v))
            );
            else {
              var p = (0, c.i)(v);
              if (!p) return;
              var g = p.hostname.split(".");
              (
                d ||
                ((d = new Set()),
                "abb|abbott|abc|abudhabi|ac|academy|accountant|actor|ad|ads|adult|ae|aero|af|africa|ag|agency|ai|al|alsace|am|amsterdam|ao|apartments|app|apple|aq|ar|archi|army|art|as|asia|at|au|auction|audio|auto|aws|ax|axa|az|ba|baby|band|bank|bar|barcelona|barclaycard|barclays|basketball|bayern|bb|bd|be|beer|berlin|best|bet|bf|bg|bh|bi|bible|bid|bike|bio|biz|bj|black|blog|blue|bm|bn|bnpparibas|bo|bot|boutique|box|br|bradesco|broker|brother|brussels|bs|bt|build|builders|business|buzz|bw|by|bz|ca|cab|cafe|cam|camera|camp|canon|capital|cards|care|careers|cars|casa|cash|casino|cat|cc|cd|center|ceo|cern|cf|cg|ch|chat|cheap|christmas|chrome|church|ci|city|ck|cl|claims|click|clinic|clothing|cloud|club|cm|cn|co|coach|codes|coffee|college|com|community|company|computer|condos|construction|consulting|contractors|cooking|cool|coop|corsica|coupons|courses|cr|credit|cricket|crs|cruises|cu|cv|cw|cx|cy|cymru|cz|dance|date|dating|de|deals|degree|delivery|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|dj|dk|dm|do|doctor|dog|domains|download|dvag|dz|earth|ec|eco|edu|education|ee|eg|email|energy|engineering|enterprises|es|estate|et|etisalat|eu|eus|events|exchange|expert|exposed|express|fail|faith|family|fan|fans|farm|fashion|fi|film|finance|fish|fishing|fit|fitness|fj|flowers|fm|fo|football|forex|forsale|foundation|fr|frl|fun|fund|furniture|futbol|fyi|ga|gal|gallery|game|games|garden|gd|gdn|ge|gg|gh|gi|gift|gifts|gives|gl|glass|gle|global|gm|gmbh|gn|gold|golf|goog|google|gop|gov|gp|gq|gr|graphics|gratis|green|group|gs|gt|guide|guru|gy|hamburg|haus|health|healthcare|help|here|hermes|hisamitsu|hitachi|hk|hm|hn|hockey|holdings|holiday|homes|honda|horse|hospital|host|hosting|hot|house|how|hr|ht|hu|icu|id|ie|il|im|in|inc|industries|info|ink|institute|insure|int|international|investments|io|iq|ir|irish|is|ismaili|ist|istanbul|it|jcb|je|jewelry|jm|jo|jobs|jp|kaufen|ke|kg|kh|ki|kim|kitchen|kiwi|kn|koeln|komatsu|kp|kpmg|kr|krd|kred|kw|ky|kyoto|kz|la|land|lat|law|lawyer|lb|lc|leclerc|legal|li|lidl|life|lighting|limited|limo|link|live|lk|llc|loan|loans|lol|london|love|lr|ls|lt|ltd|lu|luxury|lv|ly|ma|madrid|maison|management|market|marketing|markets|mba|mc|md|me|media|melbourne|men|menu|mg|miami|mil|mk|ml|mm|mn|mo|mobi|moda|moe|moi|mom|monash|money|monster|moscow|movie|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|nagoya|name|nc|ne|net|network|neustar|news|nf|ng|ngo|ni|nico|ninja|nl|no|np|nrw|ntt|nu|nyc|nz|observer|office|okinawa|om|one|onl|online|ooo|org|organic|ovh|pa|page|paris|partners|parts|party|pe|pet|pf|pg|ph|pharmacy|photo|photography|photos|pics|pictet|pictures|pink|pioneer|pizza|pk|pl|place|plus|pm|pn|poker|porn|post|pr|press|pro|prod|productions|promo|properties|ps|pt|pub|pw|py|qa|quebec|radio|re|realestate|realtor|realty|recipes|red|ren|rent|rentals|repair|report|rest|restaurant|review|reviews|ricoh|rio|rip|ro|rocks|rodeo|rs|ru|rugby|ruhr|run|rw|sa|sale|salon|sandvik|sap|sas|saxo|sb|sbi|sc|schmidt|school|schule|science|scot|sd|se|security|services|sex|sexy|sg|sh|sharp|shiksha|shoes|shop|shopping|show|si|singles|site|sk|ski|sl|sm|sn|sncf|so|soccer|social|software|solar|solutions|sony|soy|space|sport|spot|sr|srl|st|stockholm|store|stream|studio|study|style|su|supply|support|surf|sv|swiss|sx|sy|sydney|systems|sz|taipei|tatamotors|tatar|tax|taxi|tc|td|team|tech|technology|tel|tennis|tf|tg|th|theater|tickets|tips|tires|tj|tk|tl|tm|tn|to|today|tokyo|tools|top|tours|town|toyota|toys|tr|trade|trading|training|travel|trust|tt|tube|tv|tw|tz|ua|ug|uk|university|uno|uol|us|uy|uz|va|vacations|vanguard|vc|ve|vegas|ventures|vet|vg|vi|video|villas|vin|vip|vision|vn|vote|voyage|vu|wales|wang|watch|webcam|weber|website|wedding|weir|wf|wien|wiki|win|wine|work|works|world|ws|wtf|xin|xyz|yandex|ye|yoga|yokohama|youtube|yt|za|zip|zm|zone|zw"
                  .split("|")
                  .forEach((n) => d && d.add(n)),
                [
                  "xn--90ais",
                  "xn--d1acj3b",
                  "xn--80adxhks",
                  "xn--80asehdb",
                  "xn--c1avg",
                  "xn--p1acf",
                  "xn--p1ai",
                  "xn--80aswg",
                  "xn--j1amh",
                  "xn--wgbl6a",
                  "xn--h2brj9c",
                  "xn--54b7fta0cc",
                  "xn--node",
                  "xn--kpry57d",
                  "xn--3e0b707e",
                ].forEach((n) => d && d.add(n)),
                d)
              ).has(g[g.length - 1]) && (l = p.toString());
            }
            if (l) {
              var m = l;
              (n.openings = o), (n.styles = a);
              for (var y = h; y < r; ++y)
                switch (u[y]) {
                  case "*":
                    E(n, "bold", y);
                    break;
                  case "_":
                    E(n, "italic", y);
                    break;
                  case "~":
                    E(n, "strikethrough", y);
                    break;
                  case "`":
                    b(n, "code", y, !0) && E(n, "code", y);
                }
              return (
                j(n) && E(n, "phoneNumber", h),
                {
                  type: "link",
                  start: i,
                  end: h,
                  id: "link" + ++n.uniqueId,
                  href: m,
                  matchedText: v,
                  children: [],
                }
              );
            }
          })(n, t, r);
          null != i && n.styles.push(i),
            E(n, "link", (null == i ? void 0 : i.end) || r);
        }
      }
      function R(n, t) {
        return null != n && null != t && null != n.openings.mention;
      }
      function j(n) {
        return null != n && null != n.openings.phoneNumber;
      }
      function B(n, t, r, e) {
        var i = (function (n, t, r) {
          if (null != n.openings.mention) {
            for (
              var e = n.openings.mention, i = n.text.slice(e + 1, r), u = 0;
              u < t.values.length;
              ++u
            ) {
              var o = t.values[u];
              if (i.startsWith(o))
                return {
                  type: "mention",
                  start: e,
                  end: e + o.length + 1,
                  jid: t.toPhoneUserJid[o],
                  children: [],
                };
            }
            return (n.openings.mention = null), null;
          }
        })(n, t, e);
        return null == i
          ? r
          : (x(n, r, i.start),
            n.styles.push(i),
            E(n, "mention", e),
            j(n) && E(n, "phoneNumber", e),
            i.end + 1);
      }
      function U(n, t) {
        var r = (function (n, t) {
          if (null != n.openings.phoneNumber) {
            if (1 === n.phoneNumberParenthesesDepth) return null;
            var r = n.phoneNumber.slice(
              Math.min(2, n.phoneNumberLeadingZeroes)
            );
            if (0 === r.length) return null;
            var e = !1,
              i = r;
            if (
              n.phoneNumberStartsWithPlus ||
              n.phoneNumberLeadingZeroes >= 2
            ) {
              var u = (0, o.b)(r),
                a = r.slice(u.length);
              e = (0, o.f)(u, a);
            } else {
              var s = P(f.t.get());
              if ((e = (0, o.f)(s, r))) i = `${s}${r}`;
              else {
                var c = (0, o.b)(r);
                if (c === s) {
                  var l = r.slice(c.length);
                  e = (0, o.f)(c, l);
                }
              }
            }
            if (e) {
              var d = n.openings.phoneNumber;
              if (null == d) return null;
              var h = 45 === n.phoneNumberLastSignificantCodePoint ? t - 1 : t,
                v = n.text.slice(d, h);
              return {
                type: "phoneNumber",
                start: d,
                end: h,
                id: "phone" + ++n.uniqueId,
                phoneNumber: i,
                matchedText: v,
                absoluteEndWithoutMarkup: h,
                children: [],
              };
            }
            return null;
          }
        })(n, t);
        return (
          null != r &&
          (n.styles.push(r),
          E(n, "phoneNumber", t),
          n.parsedPhoneNumbers
            ? n.parsedPhoneNumbers.push(r)
            : (n.parsedPhoneNumbers = [r]),
          !0)
        );
      }
      function q(n, t) {
        U(n, t) || E(n, "phoneNumber", t);
      }
      function K(n) {
        return {
          uniqueId: 0,
          text: n,
          openings: {},
          styles: [],
          phoneNumber: "",
          phoneNumberStartsWithPlus: !1,
          phoneNumberLastSignificantCodePoint: -1,
          phoneNumberParenthesesDepth: 0,
          phoneNumberLeadingZeroes: 0,
          phoneNumberCurrentlyMatchingLeadingZeroes: !0,
          parsedPhoneNumbers: null,
        };
      }
      function F(n, t) {
        var r = null,
          e = (function (n) {
            if (null != n && 0 !== n.length) {
              for (
                var t = { values: [], toPhoneUserJid: {} }, r = 0, e = n.length;
                r < e;
                ++r
              ) {
                var i = n[r],
                  u = (0, a.u)(i);
                t.values.push(u), (t.toPhoneUserJid[u] = i);
              }
              return t;
            }
          })(t),
          i = 0,
          u = h.a;
        u.lastIndex = 0;
        for (
          var o = null,
            s = 0,
            c = n.length,
            f = 0,
            l = function () {
              if (f >= n.length) return 0;
              var t = 0;
              if (
                ((!o || f <= s) && ((u.lastIndex = s), (o = u.exec(n))),
                o && o.index === s)
              ) {
                var e = (0, h.e)(n, s);
                if (null != e) {
                  var i = e.normalized,
                    a = e.normalizedRemapped,
                    c = e.originalLength,
                    l = e.chunkId;
                  r || (r = K(n)),
                    (function (n, t, r, e, i, u) {
                      n.styles.push({
                        type: "emoji",
                        start: t,
                        end: t + i,
                        normalized: r,
                        normalizedRemapped: e,
                        chunkId: u,
                        children: [],
                      });
                    })(r, s, i, a, c, l),
                    (t = c);
                }
              }
              return (f = o ? s + t : n.length), t;
            },
            d = !0;
          s < c;

        ) {
          var p = n.codePointAt(s),
            g = (0, h.b)(p);
          R(r, e) && (p < 48 || p > 57) && (i = B(r, e, i, s)),
            v.test(n[s])
              ? (r && x(r, i, s), (i = s + 1))
              : ("(" !== n[s] && ")" !== n[s]) ||
                (r && r.openings.link) ||
                (i = s + 1),
            j(r) &&
              (p < 48 || p > 57) &&
              (45 === p
                ? 0 === r.phoneNumberParenthesesDepth
                  ? 45 === r.phoneNumberLastSignificantCodePoint
                    ? q(r, s)
                    : 0 === r.phoneNumber.length
                    ? E(r, "phoneNumber", s)
                    : T(r)
                  : E(r, "phoneNumber", s)
                : 40 === p ||
                  (41 === p
                    ? N(r, s)
                    : 32 === p
                    ? 32 === r.phoneNumberLastSignificantCodePoint
                      ? E(r, "phoneNumber", s)
                      : U(r, s) || M(r)
                    : q(r, s)));
          var _ = !1;
          switch (p) {
            case 42:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              var m = n.codePointAt(s + 1);
              if (8419 === m || 65039 === m) {
                var y = l();
                y > 0 && ((g = y), (_ = !0));
              }
              _ ||
                (42 === p
                  ? (r || (r = K(n)), w(r, "bold", s))
                  : (j(r) || (r || (r = K(n)), k(r, "phoneNumber", s)),
                    I(r, p)));
              break;
            case 46:
              (null != r && null != r.openings.link) ||
                (L(n, s) && (r || (r = K(n)), k(r, "link", s)));
              break;
            case 64:
              null != e && (r || (r = K(n)), k(r, "mention", s));
              break;
            case 95:
              r || (r = K(n)), w(r, "italic", s);
              break;
            case 96:
              r || (r = K(n)), w(r, "code", s);
              break;
            case 126:
              r || (r = K(n)), w(r, "strikethrough", s);
              break;
            case 10:
            case 13:
              r || (r = K(n)),
                A(r, "bold"),
                A(r, "italic"),
                A(r, "strikethrough");
              break;
            case 43:
              r || (r = K(n)), k(r, "phoneNumber", s), C(r);
              break;
            case 40:
              j(r) || (r || (r = K(n)), k(r, "phoneNumber", s)), $(r, s);
              break;
            default:
              if (p >= 8252 || 169 === p || 174 === p || 35 === p) {
                var b = l();
                b && ((g = b), (_ = !0));
              }
          }
          (s += g), (d = d && _);
        }
        return (
          r &&
            null != r.openings.mention &&
            null != e &&
            (i = B(r, e, i, n.length)),
          r && null != r.openings.link && x(r, i, n.length),
          r && null != r.openings.phoneNumber && q(r, n.length),
          r && r.styles.length > 0
            ? (r.styles.sort((n, t) => n.start - t.start),
              {
                styles: O(r.styles),
                parsedPhoneNumbers: r.parsedPhoneNumbers,
                allEmojis: d,
              })
            : null
        );
      }
      function z(n, t, r, e) {
        if (0 === t.length) return [n];
        var i = [],
          u = 0;
        return (
          t.forEach((t, o) => {
            u < t.start && i.push(n.slice(u, t.start));
            var a = n.slice(t.start + p[t.type], t.end);
            if (0 === a.length) return i;
            i.push(r(a, t, o.toString(), z, e)), (u = t.end + p[t.type]);
          }),
          u < n.length && i.push(n.slice(u)),
          i
        );
      }
      function H(n, t, r) {
        if (r.jid === n) return { name: r.pushname, jid: r.jid };
        var e = (0, s.c)(n, t);
        return { name: e.fullName || e.pushname, jid: n };
      }
      function W(n, t, r, e) {
        return t
          ? z(
              n,
              t.styles,
              (function n(t, r) {
                return (e, i, u) => {
                  return "mention" === i.type
                    ? ((s = (a = H(i.jid, t, r)).name),
                      (c = a.jid),
                      "@" + (s || (0, o.d)(c)))
                    : "emoji" === i.type
                    ? i.normalized
                    : (i.type, z(e, i.children, n(t, r)).join(""));
                  var a, s, c;
                };
              })(r, e)
            ).join("")
          : n;
      }
      function V(n) {
        var t = F(n);
        return t
          ? z(n, t.styles, (n, t, r) => {
              if ("emoji" !== t.type)
                throw new Error("formatEmojiOnly: invalid text");
              return t.normalized;
            }).join("")
          : n;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.r(t),
        r.d(t, "BaseContentTable", function () {
          return E;
        }),
        r.d(t, "maybeMutateChatMsgPreviewFromMsgs", function () {
          return S;
        }),
        r.d(t, "maybeMutateChatMsgPreview", function () {
          return A;
        }),
        r.d(t, "getBlocklistWithStores", function () {
          return O;
        });
      var e = r(8),
        i = r.n(e),
        u = r(11),
        o = r(7),
        a = r(5),
        s = r(42),
        c = r(54),
        f = r(85),
        l = r(3),
        d = r(20),
        h = r(314),
        v = r(6),
        p = r(25),
        g = r(304),
        _ = r(217),
        m = r(212),
        y = r(138),
        b = r(14),
        w = (0, y.a)(b.i, function (n) {
          n
            .version(1)
            .stores({
              meta: "key",
              msgs: "++rowId, &id, externalId, type",
              chats: "++id, &jid",
              contacts: "jid, phonebookPhone",
              groups: "jid",
              receipts: "msgId, chat, sent",
              media: "++mediaId, &plaintextHash, *msgIds",
              previews: "previewId",
            }),
            n
              .version(2)
              .stores({ groupParticipantsInfo: "jid, *participants" }),
            n
              .version(3)
              .stores({
                msgs: "++rowId, &id, externalId, type, starred, [id+starred]",
              }),
            n.version(4),
            n
              .version(5)
              .stores({
                msgs: "++rowId, &id, externalId, type, starred, [id+starred], validUntil",
              }),
            n
              .version(6)
              .stores({
                authors: "++id, &jid, sortBy",
                status: "++rowId, &id, externalId, ts, author, altIndex",
              }),
            n.version(7).stores({ callLogs: "++id, callId, ts" }),
            n
              .version(8)
              .stores({
                favoriteGifs: "++id, &plaintextHash, [gifAttribution+gifId]",
              }),
            n
              .version(9)
              .stores({
                msgs: "++rowId, &id, externalId, type, starred, [id+starred], validUntil, viewOnceExpiration",
              }),
            n
              .version(10)
              .stores({
                orphanedStanzas: "++id, externalId, type, chatJid, author, ts",
              }),
            n
              .version(11)
              .stores({
                reactions:
                  "++id, msgId, externalId, author, senderTimestampMs, &idx",
              }),
            n
              .version(12)
              .stores({ privacyTokens: "++id, jid, type, ts, [type+ts]" }),
            n
              .version(13)
              .stores({
                msgs: "++rowId, &id, externalId, type, starred, [id+starred], validUntil, viewOnceExpiration, [id+keptInfo.kept], keptInfo.externalId",
              }),
            n
              .version(14)
              .stores({
                pollUpdates: "++id, &idx, msgId, [externalId+author]",
              });
        }),
        k = r(58),
        E = class extends a.b {
          constructor() {
            super(w),
              (this.BG = (n) => {
                var t = [],
                  r = [];
                return (
                  n.forEach((n) => {
                    var e = (0, h.a)(n, v.t.get());
                    t.push(e), e !== n && r.push(e);
                  }),
                  r.length > 0
                    ? (__LOG__(3)`Fixing participantInfo`,
                      SEND_LOGS("fix-participants-info"),
                      this.stores.groupParticipantsInfo
                        .bulkPut(r)
                        .then(() => t))
                    : (0, a.e)(t)
                );
              });
          }
          getPreview(n) {
            var t = this.stores.previews.get(n).then((n) => n && n.preview);
            return (0, a.i)(t);
          }
          getBlocklist() {
            return O(this.stores);
          }
          getBlocklistDHash() {
            return (0, p.d)(this.stores.meta, p.a.BLOCKLIST_DHASH).then((n) =>
              n ? n.value : null
            );
          }
          getBlocklistAndDHash() {
            return this.transact("r", ["meta"], () =>
              (0, a.c)([
                (0, p.d)(this.stores.meta, p.a.BLOCKED),
                (0, p.d)(this.stores.meta, p.a.BLOCKLIST_DHASH),
              ]).then((n) => {
                var t = i()(n, 2),
                  r = t[0],
                  e = t[1];
                return {
                  users: r ? r.value : (0, d.f)(),
                  dhash: e ? e.value : null,
                };
              })
            );
          }
          getGroupInviteRevokes() {
            return (0, p.d)(this.stores.meta, p.a.GROUP_INVITE_REVOKES).then(
              (n) => (n ? n.value : [])
            );
          }
          getParticipantsInfoWithUserInTransaction(n) {
            return (0, a.k)(this.stores.groupParticipantsInfo, "participants")
              .equals(n)
              .toArray()
              .then(this.BG);
          }
          checkStarredIndexMissing() {
            return (0, a.i)(
              this.stores.msgs
                .orderBy("starred")
                .first()
                .then(() => !1)
                .catch(() => !0)
            );
          }
          getChats() {
            var n = this.stores.groups.toArray();
            return (0, a.c)([
              n,
              this.stores.groupParticipantsInfo.toArray().then(this.BG),
              this.stores.chats.toArray(),
            ]).then((n) => {
              var t = i()(n, 3),
                r = t[0],
                e = t[1],
                a = t[2],
                s = (0, u.t)(r, (n) => n.jid),
                f = {};
              e.forEach((n) => {
                var t = (0, c.g)(n);
                t && (f[t.jid] = t);
              }),
                __LOG__(2)`getEverything loaded chats and groups`;
              var l = [];
              return (
                a.forEach((n) => {
                  var t = (0, o.p)(n.jid);
                  if (t) {
                    var r = s[t],
                      e = f[t];
                    if (!r || !e)
                      return (
                        __LOG__(4)`Group info not found for group  ${t}`,
                        void SEND_LOGS("group-without-info", 0.001)
                      );
                    "parent" !== r.groupType &&
                      l.push(
                        (0, k.a)(n, { groupInfo: r, participantsInfo: e })
                      );
                  } else l.push((0, k.a)(n));
                }),
                l
              );
            });
          }
          getDbUserNotice() {
            return v.n.get() && (0, m.b)()
              ? (0, p.d)(this.stores.meta, p.a.USER_NOTICE).then((n) =>
                  null == n ? void 0 : n.value
                )
              : (0, a.e)(void 0);
          }
          getEverything() {
            var n = performance.now();
            return this.transact(
              "rw",
              [
                "chats",
                "msgs",
                "contacts",
                "groups",
                "groupParticipantsInfo",
                "meta",
              ],
              () => {
                var t = this.stores.contacts.toArray(),
                  r = this.getChats(),
                  e = this.getBlocklist(),
                  i = this.getGroupInviteRevokes(),
                  u = this.getDbUserNotice().then((n) =>
                    n ? (0, g.b)(n) : void 0
                  );
                return (0, a.c)([r, t, e, i, u]).then((t) => {
                  var r = performance.now() - n,
                    e = t[0].length,
                    i = t[1].length;
                  return (
                    __LOG__(2)`getEverything ${r}ms, ${e} chats, ${i} contacts`,
                    t
                  );
                });
              }
            );
          }
          loadDbMsgRange(n, t, r) {
            return r.start <= 0 && 0 < r.end
              ? this.transact("r", ["chats", "msgs"], () =>
                  this.stores.chats.get(n).then((n) => {
                    if (!n) return null;
                    var e = n.newest,
                      u = n.oldest;
                    if (!e || !u) return null;
                    var o = "beginning" === t ? u : t,
                      s = r.end > 1,
                      c = r.start < 0,
                      f = c ? r.end - 1 : r.end,
                      l = 1 - r.start;
                    return (0, a.c)([
                      s
                        ? this.stores.msgs
                            .where("id")
                            .between(u, o, !0, !c)
                            .reverse()
                            .limit(f)
                            .toArray()
                        : [],
                      c
                        ? this.stores.msgs
                            .where("id")
                            .between(o, e, !0, !0)
                            .limit(l)
                            .toArray()
                        : [],
                    ]).then((n) => {
                      var t = i()(n, 2),
                        r = t[0],
                        o = t[1];
                      o.reverse();
                      var a = [...o, ...r];
                      return {
                        dbMsgs: a,
                        containsOldest:
                          a.length > 0 && a[a.length - 1].id === u,
                        containsNewest: a.length > 0 && a[0].id === e,
                      };
                    });
                  })
                )
              : (__LOG__(
                  4
                )`loadDbMsgRange invalid range [${r.start}, ${r.end})`,
                Promise.resolve());
          }
          updateLastAppWrite() {
            return this.stores.meta
              .put({ key: p.a.APPWRITE_META_KEY, value: (0, l.E)() })
              .catch(f.g);
          }
        };
      function S(n, t) {
        var r = n.previewMsg;
        if (r) {
          var e = (0, s.m)(r).id,
            i = t.find((n) => n.id === e);
          if (i) return A(n, i);
        }
        return !1;
      }
      function A(n, t) {
        var r = n.previewMsg;
        if (!r) return !1;
        if ((0, s.m)(r).id !== t.id) return !1;
        var e = (0, _.a)(t);
        return (
          e
            ? void 0 === r.type || "revoked" === e.content.type
              ? (n.previewMsg = e)
              : (n.previewMsg = Object.assign({}, r, { msg: e }))
            : (__LOG__(
                4
              )`maybeMutateChatMsgPreview tried to generate invalid preview`,
              delete n.previewMsg),
          !0
        );
      }
      function O(n) {
        return (0, p.d)(n.meta, p.a.BLOCKED).then((n) =>
          n ? n.value : (0, d.f)()
        );
      }
    },
    function (n, t, r) {
      r.d(t, "a", function () {
        return u;
      }),
        r.d(t, "b", function () {
          return o;
        });
      var e = r(85),
        i = class extends (0, e.d)("AbortError") {};
      function u(n, t) {
        return new Promise((r, e) => {
          if (null == t ? void 0 : t.aborted) throw new i();
          var u = setTimeout(function () {
            null == t || t.removeEventListener("abort", o), r();
          }, n);
          function o() {
            null == t || t.removeEventListener("abort", o),
              clearTimeout(u),
              e(new i());
          }
          null == t || t.addEventListener("abort", o);
        });
      }
      function o(n, t, r) {
        return new Promise((e, i) => {
          var u = setTimeout(() => {
            try {
              e(r());
            } catch (n) {
              i(n);
            }
          }, t);
          n.then(
            (n) => {
              clearTimeout(u), e(n);
            },
            (n) => {
              clearTimeout(u), i(n);
            }
          );
        });
      }
    },
    ,
    function (n, t, r) {
      function e(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t);
      }
      r.d(t, "a", function () {
        return e;
      });
    },
    ,
    ,
    ,
    ,
    ,
    function (n, t, r) {
      function e(n, t) {
        return (r) => {
          if (Array.isArray(n) ? n.some((n) => r instanceof n) : r instanceof n)
            return t(r);
          throw r;
        };
      }
      r.d(t, "a", function () {
        return e;
      });
    },
    function (n, t, r) {
      r.r(t),
        r.d(t, "defineDb", function () {
          return s;
        }),
        r.d(t, "getChunkTable", function () {
          return h;
        });
      var e = r(5),
        i = r(50),
        u = r(3),
        o = r(138),
        a = r(14);
      function s(n) {
        n.version(1).stores({ chunks: "chunkId, owner, creationTs" });
      }
      function c(n) {
        return "media-" + n;
      }
      var f = (0, o.a)(a.g, s),
        l = class extends e.b {
          constructor() {
            super(f);
          }
          deleteMediaContent(n) {
            __LOG__(2)`deleteMediaContentUri for ${n}`;
            var t = i.m(n);
            if ("chunked" === t.type) {
              var r = t.mediaId,
                u = Math.floor((t.size - 1) / i.a),
                o = i.i(r, 0),
                a = i.i(r, u);
              return (0, e.i)(
                this.stores.chunks
                  .where("chunkId")
                  .between(o, a, !0, !0)
                  .delete()
                  .then(() => {})
              );
            }
            return (
              t.type,
              (0, e.i)(
                this.stores.chunks
                  .where("chunkId")
                  .equals(t.chunkId)
                  .delete()
                  .then(() => {})
              )
            );
          }
          deleteAllByMedia(n) {
            return (
              __LOG__(2)`deleteAllByMedia for media ${n}`,
              (0, e.i)(this.dexieDeleteAllByMedia(n))
            );
          }
          dexieDeleteAllByMedia(n) {
            return (
              __LOG__(2)`dexieDeleteAllByMedia for media ${n}`,
              this.stores.chunks.where("owner").equals(c(n)).delete()
            );
          }
          getFrame(n) {
            return this.BH(n);
          }
          storeStickerFrame(n, t) {
            return this.storeFrame(n, t);
          }
          storeFrame(n, t) {
            var r = i.j(n);
            return (0, e.i)(
              this.stores.chunks.put({
                chunkId: r,
                owner: c(n),
                chunk: t,
                creationTs: (0, u.D)(),
              })
            ).then(() => r);
          }
          getFullContent(n) {
            var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              r = i.n(n),
              e = r.mimetype || a.G,
              u = i.m(r.uri);
            return "chunked" === u.type
              ? this.BI(u.mediaId, 0, u.size, e)
              : (u.type,
                this.BH(u.chunkId).then((n) =>
                  null == n
                    ? null
                    : n.type === e || !1 === t
                    ? n
                    : new Blob([n], { type: e })
                ));
          }
          BH(n) {
            return (0, e.i)(this.stores.chunks.get(n)).then(
              (n) => n && n.chunk
            );
          }
          BI(n, t, r, u) {
            var o = Math.floor(t / i.a),
              a = Math.floor((r - 1) / i.a),
              s = i.i(n, o),
              c = i.i(n, a),
              f = this.stores.chunks
                .where("chunkId")
                .between(s, c, !0, !0)
                .toArray();
            return (0, e.i)(f).then((n) => {
              if (n.length < a - o + 1)
                return (
                  __LOG__(
                    4
                  )`_gatherChunks only ${n.length} chunks between ${s} and ${c}`,
                  null
                );
              var e = new Blob(
                  n.map((n) => n.chunk),
                  { type: u }
                ),
                f = o * i.a;
              return t === f && r - t === e.size ? e : e.slice(t - f, r - f, u);
            });
          }
          storeFullContent(n, t) {
            var r = i.g(n);
            return (0, e.i)(
              this.stores.chunks.put({
                chunkId: r,
                owner: c(n),
                chunk: t,
                creationTs: (0, u.D)(),
              })
            ).then(() => r);
          }
          storeGdprReport(n) {
            return (0, e.i)(
              this.stores.chunks.put({
                chunkId: i.b,
                owner: i.c,
                chunk: n,
                creationTs: (0, u.D)(),
              })
            ).then(() => {});
          }
          getGdprReportBlob() {
            var n = this.stores.chunks.get(i.b);
            return (0, e.i)(n).then((n) => (null == n ? void 0 : n.chunk));
          }
          deleteGdprReport() {
            var n = this.stores.chunks.delete(i.b);
            return (0, e.i)(n).then(() => {});
          }
          clearAll() {
            return (0, e.i)(this.stores.chunks.clear());
          }
        };
      t.default = l;
      var d = null;
      function h() {
        return d || (d = new l()), d;
      }
    },
    ,
    function (n, t, r) {
      r.d(t, "c", function () {
        return u;
      }),
        r.d(t, "a", function () {
          return o;
        }),
        r.d(t, "b", function () {
          return a;
        });
      var e = r(14),
        i = 6 * e.y;
      function u(n) {
        return n.length > e.y ? n.substr(0, e.y) : n;
      }
      function o(n) {
        return n.length > i ? n.substr(0, i) : n;
      }
      function a(n, t) {
        return n.length > i + t ? n.substr(t, i) : n.substr(t);
      }
    },
    ,
    ,
    function (n, t, r) {
      r.d(t, "c", function () {
        return _;
      }),
        r.d(t, "a", function () {
          return m;
        }),
        r.d(t, "e", function () {
          return w;
        }),
        r.d(t, "d", function () {
          return S;
        }),
        r.d(t, "b", function () {
          return A;
        });
      var e = r(21),
        i = r(40),
        u = r(11),
        o = r(45),
        a = r(3),
        s = r(77),
        c = r(307),
        f = r(37),
        l = r.n(f),
        d = r(121),
        h = r(102),
        v = r(148),
        p = r(87),
        g = r(14);
      function _(n) {
        return (0, o.o)(o.h, (0, o.p)(n));
      }
      function m(n) {
        var t = n.affectedChats,
          r = n.newMsgs,
          e = n.changedMsgs,
          i = n.type,
          s = n.contacts,
          c = n.activeChatId,
          f = n.settings,
          d = n.user,
          h = n.fireAndForget;
        return (0, o.n)(o.h).then((n) => {
          var v = (function (n, t, r, e, i, o, a, s) {
              for (
                var c = {},
                  f = (0, u.t)(n, (n) => n.id),
                  l = (0, u.t)(a, (n) => n.data.chatId),
                  d = t.length - 1;
                d >= 0;
                d--
              ) {
                var h = t[d];
                if (h.chatId !== i && !c[h.chatId]) {
                  var v = f[h.chatId];
                  if (!v) {
                    __LOG__(4)`No chat found for notification ${h.chatId}`,
                      SEND_LOGS("no-chat-found", 0.01);
                    continue;
                  }
                  var p = y(h, v, e, o, s);
                  p && (c[h.chatId] = p);
                }
              }
              for (var g = r.length - 1; g >= 0; g--) {
                var _ = r[g],
                  m = _.msg,
                  b = f[m.chatId];
                if (b) {
                  if (_.recent && !c[m.chatId] && m.chatId !== i) {
                    var w = y(m, b, e, o, s);
                    w && (c[m.chatId] = w);
                  } else if ("revoked" === m.content.type) {
                    var k = c[m.chatId];
                    if (k && k.hasPreview && k.msgId === m.id)
                      delete c[m.chatId];
                    else if (!k && l[b.id]) {
                      var E = l[b.id],
                        S = E.data,
                        A = S.msgId;
                      S.hasPreview && A === m.id && E.close();
                    }
                  }
                } else
                  __LOG__(4)`No chat found for notification ${m.chatId}`,
                    SEND_LOGS("no-chat-found", 0.01);
              }
              return (0, u.y)(c);
            })(t, r, e, s, c, f, n, d),
            p = [];
          return (
            v.forEach((n) => {
              if (!n.silent)
                switch (i) {
                  case "short":
                    p.push(
                      (function (n) {
                        var t = n.chatId,
                          r = {
                            body: n.body,
                            tag: (0, o.p)(t),
                            silent: n.silent,
                            data: void 0,
                          };
                        return (
                          (0, o.s)(n.title, r), { chatId: t, ts: (0, a.D)() }
                        );
                      })(n)
                    );
                    break;
                  case "alert":
                    p.push(
                      (function (n) {
                        var t = n.chatId;
                        return (0, o.r)(n.title, {
                          body: n.body,
                          data: {
                            action: o.h,
                            chatId: t,
                            msgId: n.msgId,
                            count: n.count,
                            hasPreview: n.hasPreview,
                          },
                          tag: (0, o.p)(t),
                          silent: n.silent,
                        }).then(() => ({ chatId: t, ts: (0, a.D)() }));
                      })(n)
                    );
                    break;
                  default:
                    (0, l.a)(i);
                }
            }),
            Promise.all(p).then((n) => {
              n.length > 0 &&
                h("backend", "chatsNotified", { chatNotifications: n });
            })
          );
        });
      }
      function y(n, t, r, u, s) {
        if (t) {
          if ("GROUP" === t.type) {
            if (!u.showGroups) return;
            if (
              (0, i.k)(t) &&
              !(function (n, t) {
                return null != n.mentionedJids && n.mentionedJids.includes(t);
              })(n, s.jid)
            )
              return;
          }
          if ("ONE_TO_ONE" === t.type) {
            if (!u.showOneToOne) return;
            if ((0, i.k)(t)) return;
          }
          var c = n.meta;
          if (!c.fromMe) {
            var f = c.author;
            if (f) {
              var l = S(n.content);
              if (l)
                return "GROUP" === t.type
                  ? (function (n, t, r, i, u, s, c) {
                      var f = i.msgInfo.unreadMsgCount,
                        l = i.groupInfo.title,
                        d = E(i, s),
                        h =
                          d ||
                          (0, e.k)([
                            (0, e.m)((0, o.q)(u, n)),
                            (0, e.m)(w(r, u, t.mentionedJids, c)),
                            9,
                          ]),
                        v = (function (n) {
                          return (
                            null != n.lastNotified &&
                            (0, a.m)(
                              n.lastNotified,
                              (function (n) {
                                if ("GROUP" !== n.type) return 0;
                                var t = n.groupInfo.participants.length;
                                return Math.min(120, 30 + 5 * t);
                              })(n)
                            )
                          );
                        })(i);
                      return {
                        chatId: i.id,
                        msgId: t.id,
                        title: l,
                        body: h,
                        silent: v,
                        count: f,
                        hasPreview: null == d,
                      };
                    })(f, n, l, t, r, u, s)
                  : (function (n, t, r, e, i, u, a) {
                      var s = e.msgInfo.unreadMsgCount,
                        c = (0, o.q)(i, n),
                        f = E(e, u),
                        l = f || w(r, i, t.mentionedJids, a);
                      return {
                        chatId: e.id,
                        msgId: t.id,
                        title: c,
                        body: l,
                        count: s,
                        hasPreview: null == f,
                      };
                    })(f, n, l, t, r, u, s);
            }
          }
        } else __LOG__(4)`Somehow msg ${n.id} notified without a chat`;
      }
      function b(n, t, r, e) {
        return (0, h.c)((0, d.c)(n), (0, h.e)(n, r), t, e);
      }
      function w(n, t, r, i) {
        switch (n.type) {
          case "vcard":
            return (
              "👤 " +
              k(
                n.total,
                n.contacts.map((n) => n.displayName)
              )
            );
          case "text":
            return b(n.text, t, r, i);
          case "sticker":
            return "📃 " + (0, e.k)(1001);
          case "image":
            return null != n.viewOnceState
              ? "① " + (0, e.k)(1087)
              : "📷 " + (n.caption ? b(n.caption, t, r, i) : (0, e.k)(672));
          case "video":
            return null != n.viewOnceState
              ? "① " + (0, e.k)(1088)
              : "🎥 " + (n.caption ? b(n.caption, t, r, i) : (0, e.k)(1079));
          case "gif":
            return "🎁 " + (n.caption ? b(n.caption, t, r, i) : (0, e.k)(361));
          case "voice":
            return n.isPtt
              ? "🎤 " + (0, e.k)([(0, s.b)(n.duration), 302])
              : "🎵 " + (0, e.k)([(0, s.b)(n.duration), 8]);
          case "location":
            return "📍 " + (n.name ? (0, d.c)(n.name) : (0, e.k)(544));
          case "group_invite":
            return "👥 " + (n.caption ? (0, d.c)(n.caption) : (0, e.k)(496));
          case "rich_hsm":
            var u = n.richContent,
              o = b((0, v.c)(n.title, n.content, null), t, r, i);
            return u
              ? "image" === u.type
                ? "📷 " + o
                : "video" === u.type
                ? "🎥 " + o
                : "document" === u.type
                ? "📄 " + o
                : (u.type, "📍 " + o)
              : o;
          case "document":
            return n.isVCard && n.pages && n.fileName
              ? "👤 " + k(n.pages, [(0, p.i)(n.fileName)])
              : "📄 " + (0, c.a)(n);
          default:
            return n.type, (0, e.k)(622);
        }
      }
      function k(n, t) {
        return (0, i.n)(n, t, {
          onEmpty: "",
          onSingleContact: (n) => n,
          onOneAndOthers: (n, t) => (0, e.k)([t, n, 298]),
          onOthers: (n) => (0, e.k)([n, 299]),
        });
      }
      function E(n, t) {
        return n.msgInfo.unreadMsgCount > 99
          ? (0, e.k)(1071)
          : !t.showPreviews || n.msgInfo.unreadMsgCount > 1
          ? (0, e.k)([n.msgInfo.unreadMsgCount, 296])
          : void 0;
      }
      function S(n) {
        switch (n.type) {
          case "vcard":
          case "text":
          case "image":
          case "sticker":
          case "video":
          case "gif":
          case "voice":
          case "location":
          case "group_invite":
          case "document":
          case "revoked":
          case "rich_hsm":
            return n;
          case "gp2":
          case "biz":
          case "futureproof":
          case "ciphertext":
          case "placeholder":
          case "keyschanged":
          case "privacy":
          case "ephemeral_change":
          case "ephemeral_change_fail":
          case "default-disappearing-mode":
          case "keep-in-chat":
          case "contact_block_change":
          case "poll":
            return;
          default:
            return (0, l.a)(n);
        }
      }
      function A(n, t) {
        return null != n && null != t && n > g.k && t > g.k;
      }
    },
    ,
    ,
    function (n, t, r) {
      r.r(t),
        r.d(t, "defaultSendLogs", function () {
          return p;
        }),
        r.d(t, "initializeLogger", function () {
          return $;
        }),
        r.d(t, "initializeLogsTable", function () {
          return P;
        }),
        r.d(t, "logsEachFormatted", function () {
          return x;
        }),
        r.d(t, "getInMemoryLogs", function () {
          return R;
        }),
        r.d(t, "nukeLogs", function () {
          return B;
        }),
        r.d(t, "closeLogs", function () {
          return U;
        }),
        r.d(t, "crashlog", function () {
          return K;
        }),
        r.d(t, "buildLogTemplateFunction", function () {
          return F;
        }),
        r.d(t, "serializeTaggedTemplateArgs", function () {
          return z;
        }),
        r.d(t, "enableLoggingToTable", function () {
          return V;
        });
      var e = r(135),
        i = r(5),
        u = r(138),
        o = r(3),
        a = r(6),
        s = r(17),
        c = r(7),
        f = r(33),
        l = "info",
        d = "warn",
        h = "error";
      function v(n) {
        if ("string" == typeof n) return `'${n}'`;
        if (null == n || "object" != typeof n) return String(n);
        if (Array.isArray(n)) return `[${n.join(",")}]`;
        if (n instanceof Uint8Array) {
          if (n.length < 64) return `<<${(0, f.c)(n)}>>`;
          var t = n.subarray(0, 32);
          return `<<${(0, f.c)(t)}, ${n.length - t.length} more bytes>>`;
        }
        return n.toString === Object.prototype.toString
          ? JSON.stringify(n, (n, t) => (n ? String(t) : t))
          : String(n);
      }
      function p() {
        __LOG__(3)`Should send logs but default was not overriden in Logger.js`;
      }
      var g = !1,
        _ = p;
      self.SEND_LOGS = (n, t) => {
        if (!g) {
          if (null != t)
            if (t > 0 && t <= 1) {
              if (Math.random() > t) return;
            } else
              __LOG__(
                4
              )`The sampling argument for sendLogs must be 0 < n <= 1, was ${t}`;
          K("sendLogs", n), _();
        }
      };
      var m = "LTSX0Mo+_*-=.<^!?";
      function y() {
        return m[Math.floor(Math.random() * m.length)];
      }
      var b = y() + y() + y() + y(),
        w = "",
        k = null,
        E = "none",
        S = !1,
        A = !1,
        O = { mute() {}, unmute() {} };
      function I() {
        if (!(0, s.c)()) return 1e3;
        var n = (0, s.a)("logger_memory_lines_threshold");
        return n >= 0 ? n : 1e3;
      }
      var C,
        T = !1,
        M = [];
      function $(n, t) {
        if (T) return O;
        (w = n), (_ = t);
        var r = F(l),
          e = [r, r, F("log"), F(d), F(h)];
        return (
          (self.__LOG__ = function (n, t) {
            return e[n];
          }),
          (T = !0),
          (C = Date.now()),
          O
        );
      }
      var N = "logs-dev-4";
      function P() {
        if (!T) throw new Error("You must call initializeLogger first");
        if (null == k) {
          var n = (0, u.a)(N, (n) => {
            n.version(1).stores({ logs: "++line, localTimeMs" });
          })();
          n.open()
            .then(() => {
              if (null != n) {
                var t = (k = n).logs;
                return t
                  .orderBy("line")
                  .reverse()
                  .offset(1e3)
                  .delete()
                  .then(() =>
                    t
                      .where("localTimeMs")
                      .belowOrEqual(Date.now() - 2592e5)
                      .delete()
                  )
                  .then(L);
              }
            })
            .catch((n) => {
              __LOG__(4)`Unable to open the logs table: ${n}`,
                (E = "none" === E ? "once" : "twice"),
                [
                  "------ INITIALIZING 2.2245.7 ------",
                  q("sendLogs") + " logs-table-broken-open",
                  String(n && "object" == typeof n ? n.stack : n),
                ].forEach((n) => J(n, h)),
                WAM.log("regular", 498, void 0, [
                  3,
                  0,
                  14,
                  2,
                  2,
                  "initializeLogsTable",
                ]),
                j().then(() => {
                  "once" === E && P();
                });
            });
        }
      }
      function D() {
        if (k) {
          var n = k.logs;
          M.forEach((t) => {
            n.add(t);
          }),
            (M = []);
        }
      }
      function L() {
        var n = {
          localTimeMs: C,
          text: "------ INITIALIZING 2.2245.7 ------",
          visualId: b,
          context: w,
          cropped: 0,
          type: l,
        };
        M.unshift(n), W() && D();
      }
      function G(n) {
        var t = n.localTimeMs.toString(),
          r = t.substr(0, t.length - 3),
          e = t.substr(t.length - 3),
          i = n.context;
        return `${r}.${e} ${n.visualId} ${i}: ${(0, c.s)(n.text)}${
          n.cropped ? `... (${n.cropped} more codepoints)` : ""
        }\n`;
      }
      function x(n, t) {
        if (!k && "none" === E)
          throw new Error("Trying to pull logs before initialising logsTable");
        return Promise.resolve()
          .then(() => {
            if (k)
              return (0, i.i)(k.logs.each((t, r) => n(G(t)))).catch((t) => {
                [q("sendLogs") + " logs-table-broken-send", t.stack].forEach(
                  (t) => {
                    var r = H(t, h);
                    n(G(r));
                  }
                );
              });
          })
          .then(() => {
            for (
              var r = 0,
                e = 0,
                i = 0,
                u = 2 * I(),
                o = M.length,
                a = (null == t ? void 0 : t.length) || 0;
              ;

            ) {
              var s = void 0,
                c = void 0,
                f = void 0;
              if (
                (r < o && (s = M[r]),
                e < a && (c = t && t[e]),
                null != s && null != c
                  ? s.localTimeMs < c.localTimeMs
                    ? ((f = s), r++)
                    : ((f = c), e++)
                  : s
                  ? ((f = s), r++)
                  : c && ((f = c), e++),
                null == f)
              )
                break;
              if ((n(G(f)), ++i > u)) {
                n(
                  G({
                    localTimeMs: Date.now(),
                    text: `Too many in-memory log lines scheduled for submission: ${o} ${a}`,
                    visualId: b,
                    context: w,
                    cropped: 0,
                    type: d,
                  })
                );
                break;
              }
            }
          });
      }
      function R() {
        if (!k && "none" === E)
          throw new Error("Trying to pull logs before initialising logsTable");
        return M;
      }
      function j() {
        return (0, i.i)(
          e.a.delete(N).then(() => {
            k = null;
          })
        );
      }
      function B() {
        return j().then(() => {
          g = !0;
        });
      }
      function U() {
        (A = !0), k && (k.close(), (k = null), (g = !0));
      }
      function q(n) {
        return n + " log-version: 2.2245.7 log-reason: ";
      }
      function K(n, t) {
        __LOG__(2)`${q(n)}${t}`,
          WAM.log("regular", 494, void 0, [3, 2, n, 5, 0, 1, 2, 2, t, 6, 0, 7]);
      }
      function F(n) {
        return function (t) {
          for (var r = [], e = 1, i = arguments.length; e < i; ++e)
            r[e - 1] = arguments[e];
          var u = z(t, r);
          return J(u, n), u;
        };
      }
      function z(n, t) {
        if (A) return "";
        for (var r = [n[0]], e = 0; e < t.length; e++)
          r.push(v(t[e]), n[e + 1]);
        return r.join("");
      }
      function H(n, t) {
        var r, e;
        return (
          n.length < 900
            ? ((e = n), (r = 0))
            : ((e = n.substring(0, 800)), (r = n.length - e.length)),
          {
            localTimeMs: Date.now(),
            text: e,
            context: w,
            visualId: b,
            cropped: r,
            type: t,
          }
        );
      }
      function W() {
        var n = null != k && !S;
        if (n) {
          var t = a.s.get();
          null == t
            ? (n = !1)
            : (0, o.m)(t, o.b) ||
              ((n = !1),
              a.s.set(null),
              __LOG__(2)`Logging to table disabled in ${w}`);
        }
        return n;
      }
      function V() {
        null != a.s.get() ||
          S ||
          (a.s.set((0, o.D)()),
          D(),
          __LOG__(2)`Logging to table enabled in ${w}`);
      }
      function J(n, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          e = H(n, t),
          i = W() && !r;
        if (i && null != k)
          k.logs.add(e).catch((n) => {
            (S = !0),
              M.push(e),
              [
                q("sendLogs") + " logs-table-broken-persist-statement",
                String(n && "object" == typeof n ? n.stack : n),
              ].forEach((n) => {
                J(n, h, !0);
              }),
              WAM.log("regular", 498, void 0, [
                3,
                0,
                1,
                2,
                2,
                "persistStatement",
              ]);
          });
        else {
          M.push(e);
          var u = I();
          M.length > u && M.splice(0, u / 2);
        }
      }
    },
    function (n, t, r) {
      r.d(t, "b", function () {
        return m;
      }),
        r.d(t, "d", function () {
          return y;
        }),
        r.d(t, "a", function () {
          return b;
        }),
        r.d(t, "e", function () {
          return w;
        }),
        r.d(t, "f", function () {
          return k;
        }),
        r.d(t, "g", function () {
          return E;
        }),
        r.d(t, "i", function () {
          return S;
        }),
        r.d(t, "c", function () {
          return A;
        }),
        r.d(t, "h", function () {
          return O;
        });
      var e = r(8),
        i = r.n(e),
        u = r(416),
        o = r(78),
        a = r(24),
        s = r(180);
      function c(n, t, r, e) {
        0 === e
          ? d(n, t, 16 | r)
          : 1 === e
          ? d(n, t, 32 | r)
          : -128 <= e && e < 128
          ? (d(n, t, 48 | r), n.writeInt8(e))
          : -32768 <= e && e < 32768
          ? (d(n, t, 64 | r), n.writeInt16(e))
          : -2147483648 <= e && e < 2147483648
          ? (d(n, t, 80 | r), n.writeInt32(e))
          : (d(n, t, 96 | r), n.writeInt64(e));
      }
      function f(n, t, r, e) {
        d(n, t, 112 | r), n.writeFloat64(e);
      }
      function l(n, t, r, e) {
        var i = (0, a.c)(e);
        i < 256
          ? (d(n, t, 128 | r), n.writeUint8(i))
          : i < 65536
          ? (d(n, t, 144 | r), n.writeUint16(i))
          : (d(n, t, 160 | r), n.writeUint32(i)),
          n.writeString(e);
      }
      function d(n, t, r) {
        t < 256
          ? (n.writeUint8(r), n.writeUint8(t))
          : (n.writeUint8(8 | r), n.writeUint16(t));
      }
      function h(n) {
        for (var t = -1, r = 0; r < n.length; r += 3)
          null != n[r + 2] && (t = r);
        return t;
      }
      var v = { putBuffer: (n, t, r) => Promise.resolve() },
        p = r(225),
        g = null;
      function _() {
        return (
          g ||
            (g = new (class {
              constructor() {
                (this.Ab = new Map()), (this.Ac = null);
              }
              getWamInstance(n) {
                var t = this.Ab.get(n);
                return (
                  t ||
                    ((t = new (class {
                      constructor(n) {
                        (this.CB = []),
                          (this.CC = new Map()),
                          (this.CD = !1),
                          (this.CE = new Map()),
                          (this.CH = -1),
                          (this.CI = v),
                          (this.CJ = null),
                          (this.deinitialize = () => {
                            (this.CD = !1),
                              (this.CB = []),
                              this.CC.clear(),
                              (this.CE = new Map()),
                              (this.CH = -1),
                              (this.CI = v),
                              this.serializePending.cancel(),
                              this.finalizeBuffers.cancel();
                          }),
                          (this.enqueueEvent = (n, t, r, e, i, u) => {
                            this.CB.push({
                              type: 1,
                              id: n,
                              commitTime: t,
                              psIdIntValue: r,
                              weight: i,
                              fields: e,
                              resolve: u,
                            }),
                              this.CD && this.serializePending.onOrBefore(3e3);
                          }),
                          (this.enqueueAttributesUpdate = (n) => {
                            var t = { type: 2, delta: [] };
                            n.forEach((n, r) => {
                              void 0 !== n && t.delta.push([r, n]);
                            }),
                              t.delta.length > 0 &&
                                (__LOG__(
                                  2
                                )`WAM: Enqueued ${t.delta.length} attribute keys for update`,
                                this.CB.push(t));
                          }),
                          (this.finalizeBuffers = new o.a(() => {
                            this.CL();
                          })),
                          (this.serializePending = new o.a(() => {
                            this.CM();
                          })),
                          (this.forceSerializePending = () => {
                            this.CD &&
                              this.CK() &&
                              this.serializePending.forceRunNow();
                          }),
                          (this.CA = n);
                      }
                      initialize(n, t, r, e) {
                        if (this.CD)
                          return (
                            __LOG__(
                              4
                            )`WAM: Failed to initialize already initialized WAM`,
                            void SEND_LOGS("wam-initialize")
                          );
                        (this.CG = e),
                          (this.CH = n),
                          (this.CI = r),
                          (this.CJ = t),
                          this.CK() && this.serializePending.forceRunNow(),
                          (this.CD = !0),
                          __LOG__(
                            2
                          )`WAM: Initialized with stream id ${this.CH}`;
                      }
                      CL() {
                        this.CE.forEach((n) => {
                          n.finalize();
                        }),
                          this.CE.size > 0 &&
                            this.serializePending.onOrBefore(3e3);
                      }
                      CN(n) {
                        var t;
                        return (
                          null == (t = this.CG) ? void 0 : t.multipleSequences
                        )
                          ? 0 === n
                            ? "null-psid"
                            : n
                          : "regular";
                      }
                      CO(n) {
                        var t = this.CE.get(n);
                        if (t) return t;
                        var r = this.CN(n);
                        if (null == this.CJ)
                          return (
                            __LOG__(
                              4
                            )`WAM: Sequence number generator not initialised for channel ${this.CA}`,
                            void SEND_LOGS("wam-serializePending")
                          );
                        var e = this.CJ(r);
                        if (
                          ((t = new (class {
                            constructor(n, t, r, e) {
                              (this.DE = !1), (this.DF = !1);
                              var i = new a.a(void 0, !0);
                              switch (
                                (i.writeString("WAM"),
                                i.writeUint8(5),
                                i.writeUint8(t),
                                i.writeUint16(r),
                                n)
                              ) {
                                case "regular":
                                  i.writeUint8(0);
                                  break;
                                default:
                                  i.writeUint8(2);
                              }
                              (this.DA = n),
                                (this.DB = i),
                                (this.DC = r),
                                (this.DD = t),
                                e.forEach((n, t) => {
                                  this.writeGlobal(t, n);
                                });
                            }
                            writeGlobal(n, t) {
                              if (null != t)
                                if ("string" == typeof t) l(this.DB, n, 0, t);
                                else if ("number" == typeof t)
                                  c(this.DB, n, 0, t);
                                else {
                                  if ("boolean" != typeof t)
                                    throw new Error(
                                      "Incorrect value type " + typeof t
                                    );
                                  c(this.DB, n, 0, t ? 1 : 0);
                                }
                              else d(this.DB, n, 0);
                            }
                            writeEvent(n, t, r, e) {
                              var i = this.DB;
                              c(i, 47, 0, Math.floor(n / 1e3));
                              var u = h(r);
                              c(i, t, -1 === u ? 5 : 1, e);
                              for (var o = 0; o <= u; o += 3) {
                                var a = r[o + 2];
                                if (null != a) {
                                  var d = r[o],
                                    v = r[o + 1],
                                    p = o === u ? 6 : 2;
                                  v === s.a.INT
                                    ? c(i, d, p, a)
                                    : v === s.a.BOOL
                                    ? c(i, d, p, a ? 1 : 0)
                                    : v === s.a.STRING
                                    ? l(i, d, p, a)
                                    : f(i, d, p, a);
                                }
                              }
                              this.DF = !0;
                            }
                            getKey() {
                              return {
                                streamId: this.DD,
                                sequenceNumber: this.DC,
                                channel: this.DA,
                              };
                            }
                            getSize() {
                              return this.DB.size();
                            }
                            peek() {
                              return this.DB.peek((n) => n.readByteArray());
                            }
                            isFinalized() {
                              return this.DE;
                            }
                            finalize() {
                              this.DE = !0;
                            }
                            hasEvents() {
                              return this.DF;
                            }
                          })(this.CA, this.CH, e, this.CC)),
                          this.CE.set(n, t),
                          "regular" !== n)
                        )
                          if (null == this.CF)
                            __LOG__(
                              4
                            )`WAM: Tried to create a private buffer without setting private stats ids`,
                              SEND_LOGS("wam-serializePending");
                          else {
                            var i = 0 === n ? "none" : this.CF.get(n);
                            null == i
                              ? (__LOG__(
                                  4
                                )`WAM: Tried to create a private buffer without setting private stats id`,
                                SEND_LOGS("wam-serializePending"))
                              : t.writeGlobal(6005, i);
                          }
                        return t;
                      }
                      CM() {
                        var n = [];
                        this.finalizeBuffers.onOrBefore(3e5);
                        var t = new Map(),
                          r = -1;
                        this.CB.forEach((e, u) => {
                          if (1 === e.type) {
                            var o = !0;
                            t.forEach((n) => {
                              (function (n) {
                                return "number" != typeof n || !isNaN(n);
                              })(n) || (o = !1);
                            });
                            var a,
                              c = (function (n) {
                                for (var t = h(n), r = 0; r <= t; r += 3) {
                                  var e = n[r + 2];
                                  if (
                                    null != e &&
                                    n[r + 1] === s.a.INT &&
                                    isNaN(e)
                                  )
                                    return !1;
                                }
                                return !0;
                              })(e.fields);
                            c && o
                              ? ("regular" === this.CA
                                  ? (a = this.CO("regular"))
                                  : (this.CA,
                                    null == e.psIdIntValue
                                      ? (__LOG__(
                                          4
                                        )`A WAM event in channel private was dropped before serialization. Reason: missing psIdIntValue in the event payload`,
                                        SEND_LOGS("wam-serializePending"))
                                      : (a = this.CO(e.psIdIntValue))),
                                null != a &&
                                  (t.forEach((n, t) => {
                                    var r = this.CC.get(t);
                                    (void 0 !== r && r === n) ||
                                      (this.CE.forEach((r) =>
                                        r.writeGlobal(t, n)
                                      ),
                                      this.CC.set(t, n));
                                  }),
                                  t.clear(),
                                  a.writeEvent(
                                    e.commitTime,
                                    e.id,
                                    e.fields,
                                    e.weight
                                  )))
                              : __LOG__(
                                  3
                                )`A WAM event in channel ${this.CA} was dropped before serialization. Event correct: ${c}, pending attributes correct: ${o}`,
                              null != e.resolve && n.push(e.resolve),
                              (r = u);
                          } else {
                            e.type;
                            for (var f = 0; f < e.delta.length; ++f) {
                              var l = i()(e.delta[f], 2),
                                d = l[0],
                                v = l[1];
                              t.set(d, v);
                            }
                          }
                        });
                        var e = !1;
                        this.CE.forEach((n) => {
                          (n.isFinalized() || n.getSize() > 65536) && (e = !0);
                        });
                        var o = [];
                        this.CE.forEach((n, t) => {
                          n.hasEvents()
                            ? o.push([n.getKey(), n.peek(), this.CN(t)])
                            : __LOG__(
                                3
                              )`Skipping putting buffer to sink, as it does not contain any events`;
                        });
                        var a = (0, u.a)(o, (n) => {
                          var t = i()(n, 3),
                            r = t[0],
                            u = t[1],
                            o = t[2];
                          return this.CI.putBuffer(r, u, e, o);
                        }).then(() => {
                          n.forEach((n) => {
                            n();
                          });
                        });
                        return (
                          (this.CB = this.CB.slice(r + 1)),
                          e &&
                            ((this.CE = new Map()),
                            this.finalizeBuffers.cancel()),
                          a
                        );
                      }
                      CK() {
                        return (
                          this.CB.length > 0 &&
                          this.CB.some((n) => 1 === n.type)
                        );
                      }
                      isInitialized() {
                        return this.CD;
                      }
                      updatePrivateStatsIds(n) {
                        if ("private" !== this.CA)
                          return (
                            __LOG__(
                              4
                            )`WAM: Tried to set private stats ids on a non-private channel`,
                            void SEND_LOGS("wam-updatePrivateStatsIds")
                          );
                        this.CF = n;
                      }
                    })(n)),
                    this.Ab.set(n, t)),
                  t
                );
              }
              initialize(n, t, r, e, i) {
                var u = this.getWamInstance(n);
                if (u.isInitialized())
                  __LOG__(
                    3
                  )`WAM instance for channel ${n} has already been initialized`;
                else {
                  null == this.Ac &&
                    (this.Ac = new (class {
                      constructor(n) {
                        (this.AY = new Map()), (this.AZ = n);
                      }
                      Aa(n, t) {
                        null == t || 0 === t || t < 0
                          ? this.AY.set(n, "uninitialized")
                          : this.AY.set(n, t);
                      }
                      initializeForChannel(n, t) {
                        t.forEach((t, r) => {
                          var e;
                          if ("regular" === n && "regular" === r) this.Aa(r, t);
                          else if ("private" === n && "regular" !== r)
                            this.Aa(r, t);
                          else if (
                            "private" !== n ||
                            (null == (e = this.AZ)
                              ? void 0
                              : e.multipleSequences)
                          ) {
                            var i;
                            __LOG__(
                              4
                            )`SequenceNumberGenerator::initializeForChannel: Incorrect combination of parameters: ${n} ${r} ${
                              null == (i = this.AZ)
                                ? void 0
                                : i.multipleSequences
                            }`;
                          } else this.Aa(r, t);
                        });
                      }
                      next(n) {
                        var t,
                          r = this.AY.get(n);
                        return (
                          (null == r ||
                            "uninitialized" === r ||
                            (t = r + 1) > 65535) &&
                            (t = 1),
                          this.AY.set(n, t),
                          t
                        );
                      }
                    })(i));
                  var o = this.Ac;
                  this.Ac.initializeForChannel(n, r),
                    u.initialize(t, (n) => o.next(n), e, i);
                }
              }
              deinitialize() {
                this.Ab.forEach((n, t) => {
                  n.isInitialized() &&
                    (__LOG__(2)`WamManager: Deinitializing WAM Channel ${t}`,
                    n.deinitialize());
                }),
                  (this.Ac = null);
              }
              enqueueEvent(n, t, r, e, i, u, o) {
                this.getWamInstance(n).enqueueEvent(t, r, e, i, u, o);
              }
              enqueueAttributesUpdate(n, t) {
                this.getWamInstance(n).enqueueAttributesUpdate(t);
              }
              updatePrivateStatsIds(n) {
                this.getWamInstance("private").updatePrivateStatsIds(n);
              }
              forceFlushBuffers() {
                this.Ab.forEach((n) => {
                  n.forceSerializePending();
                });
              }
              rotateBuffers() {
                this.Ab.forEach((n) => {
                  n.finalizeBuffers.forceRunNow();
                });
              }
            })()),
          g
        );
      }
      function m() {}
      function y(n, t, r, e, i) {
        _().initialize(r, n, t, e, i);
      }
      function b() {
        _().deinitialize();
      }
      function w(n, t, r, e, i) {
        var u =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          o = Date.now();
        _().enqueueEvent(n, t, o, r, (0, p.a)(e, i), u);
      }
      function k(n, t, r, e, i) {
        var u =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          o = Date.now();
        return new Promise((a) => {
          _().enqueueEvent(n, t, o, r, (0, p.a)(e, i), u, a);
        });
      }
      function E(n, t) {
        var r = (0, p.c)(n);
        if (null != r) {
          var e = r.deltaRegular,
            i = r.deltaPrivate;
          e.size > 0 && _().enqueueAttributesUpdate("regular", e),
            i.size > 0 && _().enqueueAttributesUpdate("private", i);
        }
      }
      function S(n) {
        _().updatePrivateStatsIds(n);
      }
      function A() {
        _().forceFlushBuffers();
      }
      function O() {
        _().rotateBuffers();
      }
    },
    function (n, t, r) {
      r.d(t, "b", function () {
        return i;
      }),
        r.d(t, "a", function () {
          return u;
        }),
        r.d(t, "c", function () {
          return a;
        });
      var e = r(282);
      function i(n) {
        var t = null,
          r = () => (
            t ||
              (t = (0, e.a)(n).finally(() => {
                t = null;
              })),
            t
          );
        return (r.isPending = () => !!t), r;
      }
      function u(n, t) {
        var r = new Map();
        return (e) => {
          var i,
            u = n(e),
            o = r.get(u);
          if (o) return o;
          try {
            i = Promise.resolve(t(e));
          } catch (n) {
            i = Promise.reject(n);
          }
          var a = i.finally(() => {
            r.delete(u);
          });
          return r.set(u, a), a;
        };
      }
      var o = new Set();
      function a(n) {
        o.add(n),
          n.finally(() => {
            o.delete(n);
          });
      }
    },
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "d", function () {
        return s;
      }),
        r.d(t, "e", function () {
          return c;
        }),
        r.d(t, "b", function () {
          return f;
        }),
        r.d(t, "f", function () {
          return l;
        }),
        r.d(t, "a", function () {
          return d;
        }),
        r.d(t, "c", function () {
          return h;
        });
      var e = r(26),
        i = r.n(e),
        u = r(281),
        o = r(142),
        a = r(3),
        s = class {
          constructor(n) {
            this.feature = n;
          }
          toString() {
            return "RequiresPage: " + this.feature;
          }
        },
        c = class {
          constructor(n) {
            this.backoffOptions = n;
          }
          toString() {
            return "RetryOnBackoff";
          }
        },
        f = class {
          constructor(n) {
            this.result = n;
          }
        },
        l = "$unstarted",
        d = "$finished",
        h = class {
          constructor(n) {
            var t = n.isRestartAfterCrash,
              r = n.accessors,
              e = n.unfinishedJobEntries,
              i = new Map(),
              u = e.then((n) => {
                var e = [],
                  u = [];
                return (
                  n.forEach((n) => {
                    n.stepHardStartCountAfterTimeout >= 5
                      ? e.push(n)
                      : u.push(n);
                  }),
                  Promise.all(
                    e.map((n) => {
                      var t;
                      return (
                        __LOG__(4)`${
                          ((t = n), `[Job ${t.type}] `)
                        }: stuck on the step ${n.step}, aborting the job`,
                        SEND_LOGS("job-stuck-" + n.type),
                        r.deletePersistedJob(n.jobId)
                      );
                    })
                  ).then(() => {
                    u.forEach((n) => {
                      i.has(n.jobId) ||
                        (__LOG__(2)`${v(n)}: restarting`,
                        i.set(n.jobId, this.CT(n, t)));
                    });
                  })
                );
              });
            (this.implementationLoaders = new Map()),
              (this.implementations = new Map()),
              (this.stepBlockers = new WeakMap()),
              (this.accessors = r),
              (this.activeJobs = i),
              (this.initialJobsPromise = u),
              (this.listeners = n.listeners),
              (this.deprecatedJobs = n.deprecatedJobs);
          }
          loadAndRunJobFromId(n) {
            var t = this.activeJobs.get(n);
            if (null != t) return t;
            var r = this.CU(n);
            return this.activeJobs.set(n, r), r;
          }
          CU(n) {
            var t = this;
            return i()(function* () {
              var r = t.initialJobsPromise,
                e = t.accessors;
              yield r;
              var i = yield e.readPersistedJob(n);
              return i
                ? t.CT(i, !1)
                : (__LOG__(3)`Persisted job missing for given ID`, null);
            })();
          }
          CV(n) {
            var t = this.implementations,
              r = this.implementationLoaders,
              e = t.get(n);
            if (e) return e;
            var i = r.get(n);
            if (!i) return null;
            var u = i();
            return t.set(n, u), u;
          }
          CW(n, t) {
            if (null == t || 0 === t.length) return Promise.resolve();
            var r = this.stepBlockers,
              e = r.get(t);
            return (
              null == e &&
                ((e = (0, u.c)(
                  t.map((n) => n()),
                  g
                )),
                r.set(t, e)),
              e(n)
            );
          }
          CX(n, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              e = arguments.length > 3 ? arguments[3] : void 0,
              i = n.step,
              u = t.findIndex((n) => n.stepName === i),
              o = t[u].info(n.current, n.original, _(n, r)),
              s = o.requirements,
              c = o.code,
              l = this.CW(n, s);
            return (
              e && (l = l.then(e)),
              l
                .then(
                  () => (
                    __LOG__(2)`${p(n)}: running step`,
                    c(n.current, n.original, _(n, r))
                  )
                )
                .then((e) => {
                  if (e instanceof f)
                    return __LOG__(2)`${p(n)}: InterruptJob`, e.result;
                  var i = u + 1;
                  if (i >= t.length) return e;
                  var o = t[i];
                  return (
                    (n.step = o.stepName),
                    (n.current = e),
                    (n.stepHardStartCountAfterTimeout = 0),
                    (n.stepFirstStartTime = (0, a.D)()),
                    (n.stepUnexpectedErrorCount = 0),
                    (n.waitUntil = null),
                    (n.backedOffCount = 0),
                    this.accessors
                      .updatePersistedJob(n)
                      .then(() => this.CX(n, t, r))
                  );
                })
            );
          }
          CT(n, t) {
            var r = this;
            return i()(function* () {
              var e,
                u = r.accessors,
                f = r.activeJobs,
                h = r.deprecatedJobs,
                g = r.listeners,
                m = g.onJobFinished,
                y = g.onJobStarted,
                b = yield r.CV(n.type),
                w = h[n.type];
              if (!b) {
                if (!w)
                  return (
                    __LOG__(
                      4
                    )`No implementation for ${n.type}. Maybe it should have been put to the deprecated list?`,
                    SEND_LOGS("missing-job-implementation"),
                    yield u.deletePersistedJob(n.jobId),
                    null
                  );
                if ("NOOP" === w)
                  return (
                    __LOG__(
                      3
                    )`No implementation for deprecated ${n.type}, job deleted`,
                    yield u.deletePersistedJob(n.jobId),
                    null
                  );
                b = yield w();
              }
              var k = b;
              w && __LOG__(2)`Running deprecated job ${n.type}`;
              var E = null != (e = n.stepFirstStartTime) ? e : (0, a.D)();
              if (
                ((n.stepFirstStartTime = E),
                (n.stepUnexpectedErrorCount = n.stepUnexpectedErrorCount || 0),
                (n.backedOffCount = n.backedOffCount || 0),
                n.step === d)
              ) {
                var S = n.waitUntil,
                  A = (0, a.y)(E);
                return (
                  null != S &&
                    (0, a.o)(S) &&
                    A > 0 &&
                    (__LOG__(2)`${v(n)}: skew detected, adjusting accordingly`,
                    (S = (0, a.i)(S - A)),
                    (0, a.o)(S) &&
                      ((n.stepFirstStartTime = (0, a.i)(E - A)),
                      (n.waitUntil = S),
                      yield r.accessors.updatePersistedJob(n))),
                  (null != S && (0, a.o)(S)) ||
                    (__LOG__(2)`${v(
                      n
                    )}: removing completed, expired job from db`,
                    yield u.deletePersistedJob(n.jobId)),
                  f.delete(n.jobId),
                  n.current
                );
              }
              var O =
                n.step !== l ? b.find((t) => t.stepName === n.step) : b[0];
              if (!O)
                return (
                  __LOG__(4)`No implementation for ${n.type}.${n.step}`,
                  SEND_LOGS("missing-job-step"),
                  yield u.deletePersistedJob(n.jobId),
                  null
                );
              n.step = O.stepName;
              var I = () => {
                  var e = n.waitUntil,
                    i = Promise.resolve();
                  if (null != e) {
                    var u = (0, a.k)(a.b);
                    e > u
                      ? (__LOG__(2)`${p(n)}: trim wait from ${e} to ${u}`,
                        (n.waitUntil = u),
                        (i = r.accessors
                          .updatePersistedJob(n)
                          .then(() => (0, a.j)(u))))
                      : (__LOG__(2)`${p(n)}: delaying until ${e}`,
                        (i = (0, a.j)(e)));
                  }
                  return i.then(() =>
                    r
                      .CX(
                        n,
                        k,
                        t,
                        () => (
                          (n.waitUntil = null),
                          (0, a.m)(E, a.b) ||
                            n.stepHardStartCountAfterTimeout++,
                          r.accessors.updatePersistedJob(n)
                        )
                      )
                      .catch((t) => {
                        if (t instanceof s)
                          return (
                            __LOG__(2)`${p(n)}: requires page`,
                            n.stepHardStartCountAfterTimeout > 0 &&
                              (--n.stepHardStartCountAfterTimeout,
                              r.accessors.updatePersistedJob(n)),
                            new Promise(() => {})
                          );
                        if (t instanceof c) {
                          __LOG__(2)`${p(n)}: RetryOnBackoff`;
                          var e = (0, o.c)(
                            ++n.backedOffCount,
                            t.backoffOptions
                          );
                          return (
                            (n.waitUntil = (0, a.k)(Math.ceil(e / 1e3))),
                            n.stepHardStartCountAfterTimeout > 0 &&
                              --n.stepHardStartCountAfterTimeout,
                            r.accessors.updatePersistedJob(n).then(I)
                          );
                        }
                        if (n.stepUnexpectedErrorCount < 1)
                          return (
                            __LOG__(3)`${p(n)}: Unhandled exception. Tried ${
                              n.stepUnexpectedErrorCount
                            } times`,
                            n.stepUnexpectedErrorCount++,
                            r.accessors.updatePersistedJob(n).then(I)
                          );
                        throw t;
                      })
                  );
                },
                C = I(),
                T = C.then(
                  (function () {
                    var t = i()(function* (t) {
                      __LOG__(2)`${p(n)}: finished job`;
                      var e = null;
                      try {
                        e = m(n.jobId, n.type, n.original, t);
                      } catch (t) {
                        __LOG__(
                          4
                        )`onJobFinished for ${n.type} threw exception ${t}`,
                          SEND_LOGS("onJobFinished-threw");
                      }
                      null != e && e > 0
                        ? ((n.waitUntil = (0, a.k)(Math.ceil(e / 1e3))),
                          (n.step = d),
                          (n.current = t),
                          (n.stepFirstStartTime = (0, a.D)()),
                          yield r.accessors.updatePersistedJob(n))
                        : (yield u.deletePersistedJob(n.jobId),
                          f.delete(n.jobId));
                    });
                    return function (n) {
                      return t.apply(this, arguments);
                    };
                  })(),
                  (function () {
                    var r = i()(function* (r) {
                      __LOG__(4)`${n.type} failed with error ${r}`,
                        SEND_LOGS("job-threw-exception-" + n.type);
                      var e = k.find((t) => t.stepName === n.step);
                      if (e) {
                        var i = e.info(n.current, n.original, _(n, t));
                        null != i.stopRetryIf &&
                          (yield i.stopRetryIf.onStopRetry(
                            n.current,
                            n.original,
                            _(n, t)
                          ));
                      } else __LOG__(4)`${n.type}: ${n.step} step not found`;
                      yield u.deletePersistedJob(n.jobId), f.delete(n.jobId);
                    });
                    return function (n) {
                      return r.apply(this, arguments);
                    };
                  })()
                );
              try {
                y(n.jobId, n.type, n.original);
              } catch (t) {
                __LOG__(4)`onJobStarted for ${n.type} threw exception ${t}`,
                  SEND_LOGS("onJobStarted-threw");
              }
              return T.then(() => C);
            })();
          }
          addPersistedJobImplementation(n, t) {
            var r = this.implementationLoaders,
              e = this.deprecatedJobs;
            if (r.has(n))
              return (
                __LOG__(4)`addPersistedJobImplementation called twice for ${n}`,
                void SEND_LOGS("repeat-job-loader")
              );
            e && e[n], r.set(n, t);
          }
          fireAndForget(n) {
            this.accessors.maybeCreateJob(n).then((n) => {
              var t = n.id;
              return this.loadAndRunJobFromId(t);
            });
          }
          waitUntilPersisted(n) {
            return this.accessors.maybeCreateJob(n).then((n) => {
              var t = n.id;
              this.loadAndRunJobFromId(t);
            });
          }
          waitUntilCompleted(n) {
            return this.accessors.maybeCreateJob(n).then((n) => {
              var t = n.id;
              return this.loadAndRunJobFromId(t);
            });
          }
          fireAndForgetNonPersisted(n) {
            __LOG__(
              2
            )`fireAndForgetNonPersisted not implemented in PersistedJobManager`;
          }
          waitUntilCompletedNonPersisted(n) {
            return Promise.resolve(
              () =>
                __LOG__(
                  2
                )`waitUntilCompletedNonPersisted not implemented in PersistedJobManager`
            );
          }
        };
      function v(n) {
        return `Job[${n.jobId}] (${n.type})`;
      }
      function p(n) {
        return `Job[${n.jobId}] (${n.type}.${n.step})`;
      }
      function g(n, t, r) {
        "unsatisfiable" === n
          ? __LOG__(2)`${p(r)} halting because of ${t}`
          : "unsatisfied" === n && __LOG__(2)`${p(r)} waiting on ${t}`;
      }
      function _(n) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return { jobStartTime: n.startTime, afterCrash: t, interruptJob: m };
      }
      function m(n) {
        return new f(n);
      }
    },
    ,
    function (n, t, r) {
      (function (n) {
        var r = Object.keys,
          e = Array.isArray,
          i =
            "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : n;
        function u(n, t) {
          return (
            "object" != typeof t ||
              r(t).forEach(function (r) {
                n[r] = t[r];
              }),
            n
          );
        }
        var o = Object.getPrototypeOf,
          a = {}.hasOwnProperty;
        function s(n, t) {
          return a.call(n, t);
        }
        function c(n, t) {
          "function" == typeof t && (t = t(o(n))),
            r(t).forEach(function (r) {
              l(n, r, t[r]);
            });
        }
        var f = Object.defineProperty;
        function l(n, t, r, e) {
          f(
            n,
            t,
            u(
              r && s(r, "get") && "function" == typeof r.get
                ? { get: r.get, set: r.set, configurable: !0 }
                : { value: r, configurable: !0, writable: !0 },
              e
            )
          );
        }
        function d(n) {
          return {
            from: function (t) {
              return (
                (n.prototype = Object.create(t.prototype)),
                l(n.prototype, "constructor", n),
                { extend: c.bind(null, n.prototype) }
              );
            },
          };
        }
        var h = Object.getOwnPropertyDescriptor,
          v = [].slice;
        function p(n, t, r) {
          return v.call(n, t, r);
        }
        function g(n, t) {
          return t(n);
        }
        function _(n) {
          if (!n) throw new Error("Assertion Failed");
        }
        function m(n) {
          i.setImmediate ? setImmediate(n) : setTimeout(n, 0);
        }
        function y(n, t) {
          return n.reduce(function (n, r, e) {
            var i = t(r, e);
            return i && (n[i[0]] = i[1]), n;
          }, {});
        }
        function b(n, t, r) {
          try {
            n.apply(null, r);
          } catch (n) {
            t && t(n);
          }
        }
        function w(n, t) {
          if (s(n, t)) return n[t];
          if (!t) return n;
          if ("string" != typeof t) {
            for (var r = [], e = 0, i = t.length; e < i; ++e) {
              var u = w(n, t[e]);
              r.push(u);
            }
            return r;
          }
          var o = t.indexOf(".");
          if (-1 !== o) {
            var a = n[t.substr(0, o)];
            return void 0 === a ? void 0 : w(a, t.substr(o + 1));
          }
        }
        function k(n, t, r) {
          if (
            n &&
            void 0 !== t &&
            (!("isFrozen" in Object) || !Object.isFrozen(n))
          )
            if ("string" != typeof t && "length" in t) {
              _("string" != typeof r && "length" in r);
              for (var e = 0, i = t.length; e < i; ++e) k(n, t[e], r[e]);
            } else {
              var u = t.indexOf(".");
              if (-1 !== u) {
                var o = t.substr(0, u),
                  a = t.substr(u + 1);
                if ("" === a) void 0 === r ? delete n[o] : (n[o] = r);
                else {
                  var s = n[o];
                  s || (s = n[o] = {}), k(s, a, r);
                }
              } else void 0 === r ? delete n[t] : (n[t] = r);
            }
        }
        function E(n) {
          var t = {};
          for (var r in n) s(n, r) && (t[r] = n[r]);
          return t;
        }
        var S = [].concat;
        function A(n) {
          return S.apply([], n);
        }
        var O =
          "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set"
            .split(",")
            .concat(
              A(
                [8, 16, 32, 64].map(function (n) {
                  return ["Int", "Uint", "Float"].map(function (t) {
                    return t + n + "Array";
                  });
                })
              )
            )
            .filter(function (n) {
              return i[n];
            })
            .map(function (n) {
              return i[n];
            });
        function I(n) {
          if (!n || "object" != typeof n) return n;
          var t;
          if (e(n)) {
            t = [];
            for (var r = 0, i = n.length; r < i; ++r) t.push(I(n[r]));
          } else if (O.indexOf(n.constructor) >= 0) t = n;
          else
            for (var u in ((t = n.constructor
              ? Object.create(n.constructor.prototype)
              : {}),
            n))
              s(n, u) && (t[u] = I(n[u]));
          return t;
        }
        function C(n, t, e, i) {
          return (
            (e = e || {}),
            (i = i || ""),
            r(n).forEach(function (r) {
              if (s(t, r)) {
                var u = n[r],
                  o = t[r];
                "object" == typeof u &&
                "object" == typeof o &&
                u &&
                o &&
                "" + u.constructor == "" + o.constructor
                  ? C(u, o, e, i + r + ".")
                  : u !== o && (e[i + r] = t[r]);
              } else e[i + r] = void 0;
            }),
            r(t).forEach(function (r) {
              s(n, r) || (e[i + r] = t[r]);
            }),
            e
          );
        }
        var T = "undefined" != typeof Symbol && Symbol.iterator,
          M = T
            ? function (n) {
                var t;
                return null != n && (t = n[T]) && t.apply(n);
              }
            : function () {
                return null;
              },
          $ = {};
        function N(n) {
          var t, r, i, u;
          if (1 === arguments.length) {
            if (e(n)) return n.slice();
            if (this === $ && "string" == typeof n) return [n];
            if ((u = M(n))) {
              for (r = []; !(i = u.next()).done; ) r.push(i.value);
              return r;
            }
            if (null == n) return [n];
            if ("number" == typeof (t = n.length)) {
              for (r = new Array(t); t--; ) r[t] = n[t];
              return r;
            }
            return [n];
          }
          for (t = arguments.length, r = new Array(t); t--; )
            r[t] = arguments[t];
          return r;
        }
        var P =
          "undefined" != typeof location &&
          /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
        function D(n, t) {
          (P = n), (L = t);
        }
        var L = function () {
            return !0;
          },
          G = !new Error("").stack;
        function x() {
          if (G)
            try {
              throw (x.arguments, new Error());
            } catch (n) {
              return n;
            }
          return new Error();
        }
        function R(n, t) {
          var r = n.stack;
          return r
            ? ((t = t || 0),
              0 === r.indexOf(n.name) &&
                (t += (n.name + n.message).split("\n").length),
              r
                .split("\n")
                .slice(t)
                .filter(L)
                .map(function (n) {
                  return "\n" + n;
                })
                .join(""))
            : "";
        }
        var j = [
            "Unknown",
            "Constraint",
            "Data",
            "TransactionInactive",
            "ReadOnly",
            "Version",
            "NotFound",
            "InvalidState",
            "InvalidAccess",
            "Abort",
            "Timeout",
            "QuotaExceeded",
            "Syntax",
            "DataClone",
          ],
          B = [
            "Modify",
            "Bulk",
            "OpenFailed",
            "VersionChange",
            "Schema",
            "Upgrade",
            "InvalidTable",
            "MissingAPI",
            "NoSuchDatabase",
            "InvalidArgument",
            "SubTransaction",
            "Unsupported",
            "Internal",
            "DatabaseClosed",
            "PrematureCommit",
            "ForeignAwait",
          ].concat(j),
          U = {
            VersionChanged:
              "Database version changed by other database connection",
            DatabaseClosed: "Database has been closed",
            Abort: "Transaction aborted",
            TransactionInactive: "Transaction has already completed or failed",
          };
        function q(n, t) {
          (this._e = x()), (this.name = n), (this.message = t);
        }
        function K(n, t, r, e) {
          (this._e = x()),
            (this.failures = t),
            (this.failedKeys = e),
            (this.successCount = r);
        }
        function F(n, t) {
          (this._e = x()),
            (this.name = "BulkError"),
            (this.failures = t),
            (this.message = (function (n, t) {
              return (
                n +
                ". Errors: " +
                t
                  .map(function (n) {
                    return n.toString();
                  })
                  .filter(function (n, t, r) {
                    return r.indexOf(n) === t;
                  })
                  .join("\n")
              );
            })(n, t));
        }
        d(q)
          .from(Error)
          .extend({
            stack: {
              get: function () {
                return (
                  this._stack ||
                  (this._stack =
                    this.name + ": " + this.message + R(this._e, 2))
                );
              },
            },
            toString: function () {
              return this.name + ": " + this.message;
            },
          }),
          d(K).from(q),
          d(F).from(q);
        var z = B.reduce(function (n, t) {
            return (n[t] = t + "Error"), n;
          }, {}),
          H = q,
          W = B.reduce(function (n, t) {
            var r = t + "Error";
            function e(n, e) {
              (this._e = x()),
                (this.name = r),
                n
                  ? "string" == typeof n
                    ? ((this.message = n), (this.inner = e || null))
                    : "object" == typeof n &&
                      ((this.message = n.name + " " + n.message),
                      (this.inner = n))
                  : ((this.message = U[t] || r), (this.inner = null));
            }
            return d(e).from(H), (n[t] = e), n;
          }, {});
        (W.Syntax = SyntaxError), (W.Type = TypeError), (W.Range = RangeError);
        var V = j.reduce(function (n, t) {
            return (n[t + "Error"] = W[t]), n;
          }, {}),
          J = B.reduce(function (n, t) {
            return (
              -1 === ["Syntax", "Type", "Range"].indexOf(t) &&
                (n[t + "Error"] = W[t]),
              n
            );
          }, {});
        function Y() {}
        function X(n) {
          return n;
        }
        function Z(n, t) {
          return null == n || n === X
            ? t
            : function (r) {
                return t(n(r));
              };
        }
        function Q(n, t) {
          return function () {
            n.apply(this, arguments), t.apply(this, arguments);
          };
        }
        function nn(n, t) {
          return n === Y
            ? t
            : function () {
                var r = n.apply(this, arguments);
                void 0 !== r && (arguments[0] = r);
                var e = this.onsuccess,
                  i = this.onerror;
                (this.onsuccess = null), (this.onerror = null);
                var u = t.apply(this, arguments);
                return (
                  e &&
                    (this.onsuccess = this.onsuccess
                      ? Q(e, this.onsuccess)
                      : e),
                  i && (this.onerror = this.onerror ? Q(i, this.onerror) : i),
                  void 0 !== u ? u : r
                );
              };
        }
        function tn(n, t) {
          return n === Y
            ? t
            : function () {
                n.apply(this, arguments);
                var r = this.onsuccess,
                  e = this.onerror;
                (this.onsuccess = this.onerror = null),
                  t.apply(this, arguments),
                  r &&
                    (this.onsuccess = this.onsuccess
                      ? Q(r, this.onsuccess)
                      : r),
                  e && (this.onerror = this.onerror ? Q(e, this.onerror) : e);
              };
        }
        function rn(n, t) {
          return n === Y
            ? t
            : function (r) {
                var e = n.apply(this, arguments);
                u(r, e);
                var i = this.onsuccess,
                  o = this.onerror;
                (this.onsuccess = null), (this.onerror = null);
                var a = t.apply(this, arguments);
                return (
                  i &&
                    (this.onsuccess = this.onsuccess
                      ? Q(i, this.onsuccess)
                      : i),
                  o && (this.onerror = this.onerror ? Q(o, this.onerror) : o),
                  void 0 === e ? (void 0 === a ? void 0 : a) : u(e, a)
                );
              };
        }
        function en(n, t) {
          return n === Y
            ? t
            : function () {
                return (
                  !1 !== t.apply(this, arguments) && n.apply(this, arguments)
                );
              };
        }
        function un(n, t) {
          return n === Y
            ? t
            : function () {
                var r = n.apply(this, arguments);
                if (r && "function" == typeof r.then) {
                  for (
                    var e = this, i = arguments.length, u = new Array(i);
                    i--;

                  )
                    u[i] = arguments[i];
                  return r.then(function () {
                    return t.apply(e, u);
                  });
                }
                return t.apply(this, arguments);
              };
        }
        (J.ModifyError = K), (J.DexieError = q), (J.BulkError = F);
        var on = {},
          an = (function () {
            try {
              return new Function(
                "let F=async ()=>{},p=F();return [p,Object.getPrototypeOf(p),Promise.resolve(),F.constructor];"
              )();
            } catch (t) {
              var n = i.Promise;
              return n ? [n.resolve(), n.prototype, n.resolve()] : [];
            }
          })(),
          sn = an[0],
          cn = an[1],
          fn = an[2],
          ln = cn && cn.then,
          dn = sn && sn.constructor,
          hn = an[3],
          vn = !!fn,
          pn = !1,
          gn = fn
            ? function () {
                fn.then(Rn);
              }
            : i.setImmediate
            ? setImmediate.bind(null, Rn)
            : i.MutationObserver
            ? function () {
                var n = document.createElement("div");
                new MutationObserver(function () {
                  Rn(), (n = null);
                }).observe(n, { attributes: !0 }),
                  n.setAttribute("i", "1");
              }
            : function () {
                setTimeout(Rn, 0);
              },
          _n = function (n, t) {
            On.push([n, t]), yn && (gn(), (yn = !1));
          },
          mn = !0,
          yn = !0,
          bn = [],
          wn = [],
          kn = null,
          En = X,
          Sn = {
            id: "global",
            global: !0,
            ref: 0,
            unhandleds: [],
            onunhandled: st,
            pgp: !1,
            env: {},
            finalize: function () {
              this.unhandleds.forEach(function (n) {
                try {
                  st(n[0], n[1]);
                } catch (n) {}
              });
            },
          },
          An = Sn,
          On = [],
          In = 0,
          Cn = [];
        function Tn(n) {
          if ("object" != typeof this)
            throw new TypeError("Promises must be constructed via new");
          (this._listeners = []), (this.onuncatched = Y), (this._lib = !1);
          var t = (this._PSD = An);
          if (
            (P &&
              ((this._stackHolder = x()),
              (this._prev = null),
              (this._numPrev = 0)),
            "function" != typeof n)
          ) {
            if (n !== on) throw new TypeError("Not a function");
            return (
              (this._state = arguments[1]),
              (this._value = arguments[2]),
              void (!1 === this._state && Pn(this, this._value))
            );
          }
          (this._state = null), (this._value = null), ++t.ref, Nn(this, n);
        }
        var Mn = {
          get: function () {
            var n = An,
              t = Vn;
            function r(r, e) {
              var i = this,
                u = !n.global && (n !== An || t !== Vn);
              u && Zn();
              var o = new Tn(function (t, o) {
                Ln(i, new $n(ut(r, n, u), ut(e, n, u), t, o, n));
              });
              return P && xn(o, this), o;
            }
            return (r.prototype = on), r;
          },
          set: function (n) {
            l(
              this,
              "then",
              n && n.prototype === on
                ? Mn
                : {
                    get: function () {
                      return n;
                    },
                    set: Mn.set,
                  }
            );
          },
        };
        function $n(n, t, r, e, i) {
          (this.onFulfilled = "function" == typeof n ? n : null),
            (this.onRejected = "function" == typeof t ? t : null),
            (this.resolve = r),
            (this.reject = e),
            (this.psd = i);
        }
        function Nn(n, t) {
          try {
            t(function (t) {
              if (null === n._state) {
                if (t === n)
                  throw new TypeError(
                    "A promise cannot be resolved with itself."
                  );
                var r = n._lib && jn();
                t && "function" == typeof t.then
                  ? Nn(n, function (n, r) {
                      t instanceof Tn ? t._then(n, r) : t.then(n, r);
                    })
                  : ((n._state = !0), (n._value = t), Dn(n)),
                  r && Bn();
              }
            }, Pn.bind(null, n));
          } catch (t) {
            Pn(n, t);
          }
        }
        function Pn(n, t) {
          if ((wn.push(t), null === n._state)) {
            var r = n._lib && jn();
            (t = En(t)),
              (n._state = !1),
              (n._value = t),
              P &&
                null !== t &&
                "object" == typeof t &&
                !t._promise &&
                b(function () {
                  var r = (function n(t, r) {
                    var e;
                    return h(t, r) || ((e = o(t)) && n(e, r));
                  })(t, "stack");
                  (t._promise = n),
                    l(t, "stack", {
                      get: function () {
                        return pn
                          ? r && (r.get ? r.get.apply(t) : r.value)
                          : n.stack;
                      },
                    });
                }),
              (function (n) {
                bn.some(function (t) {
                  return t._value === n._value;
                }) || bn.push(n);
              })(n),
              Dn(n),
              r && Bn();
          }
        }
        function Dn(n) {
          var t = n._listeners;
          n._listeners = [];
          for (var r = 0, e = t.length; r < e; ++r) Ln(n, t[r]);
          var i = n._PSD;
          --i.ref || i.finalize(),
            0 === In &&
              (++In,
              _n(function () {
                0 == --In && Un();
              }, []));
        }
        function Ln(n, t) {
          if (null !== n._state) {
            var r = n._state ? t.onFulfilled : t.onRejected;
            if (null === r) return (n._state ? t.resolve : t.reject)(n._value);
            ++t.psd.ref, ++In, _n(Gn, [r, n, t]);
          } else n._listeners.push(t);
        }
        function Gn(n, t, r) {
          try {
            kn = t;
            var e,
              i = t._value;
            t._state
              ? (e = n(i))
              : (wn.length && (wn = []),
                (e = n(i)),
                -1 === wn.indexOf(i) &&
                  (function (n) {
                    for (var t = bn.length; t; )
                      if (bn[--t]._value === n._value)
                        return void bn.splice(t, 1);
                  })(t)),
              r.resolve(e);
          } catch (n) {
            r.reject(n);
          } finally {
            (kn = null), 0 == --In && Un(), --r.psd.ref || r.psd.finalize();
          }
        }
        function xn(n, t) {
          var r = t ? t._numPrev + 1 : 0;
          r < 100 && ((n._prev = t), (n._numPrev = r));
        }
        function Rn() {
          jn() && Bn();
        }
        function jn() {
          var n = mn;
          return (mn = !1), (yn = !1), n;
        }
        function Bn() {
          var n, t, r;
          do {
            for (; On.length > 0; )
              for (n = On, On = [], r = n.length, t = 0; t < r; ++t) {
                var e = n[t];
                e[0].apply(null, e[1]);
              }
          } while (On.length > 0);
          (mn = !0), (yn = !0);
        }
        function Un() {
          var n = bn;
          (bn = []),
            n.forEach(function (n) {
              n._PSD.onunhandled.call(null, n._value, n);
            });
          for (var t = Cn.slice(0), r = t.length; r; ) t[--r]();
        }
        function qn(n) {
          return new Tn(on, !1, n);
        }
        function Kn(n, t) {
          var r = An;
          return function () {
            var e = jn(),
              i = An;
            try {
              return rt(r, !0), n.apply(this, arguments);
            } catch (n) {
              t && t(n);
            } finally {
              rt(i, !1), e && Bn();
            }
          };
        }
        c(Tn.prototype, {
          then: Mn,
          _then: function (n, t) {
            Ln(this, new $n(null, null, n, t, An));
          },
          catch: function (n) {
            if (1 === arguments.length) return this.then(null, n);
            var t = arguments[0],
              r = arguments[1];
            return "function" == typeof t
              ? this.then(null, function (n) {
                  return n instanceof t ? r(n) : qn(n);
                })
              : this.then(null, function (n) {
                  return n && n.name === t ? r(n) : qn(n);
                });
          },
          finally: function (n) {
            return this.then(
              function (t) {
                return n(), t;
              },
              function (t) {
                return n(), qn(t);
              }
            );
          },
          stack: {
            get: function () {
              if (this._stack) return this._stack;
              try {
                pn = !0;
                var n = (function n(t, r, e) {
                  if (r.length === e) return r;
                  var i = "";
                  if (!1 === t._state) {
                    var u,
                      o,
                      a = t._value;
                    null != a
                      ? ((u = a.name || "Error"),
                        (o = a.message || a),
                        (i = R(a, 0)))
                      : ((u = a), (o = "")),
                      r.push(u + (o ? ": " + o : "") + i);
                  }
                  return (
                    P &&
                      ((i = R(t._stackHolder, 2)) &&
                        -1 === r.indexOf(i) &&
                        r.push(i),
                      t._prev && n(t._prev, r, e)),
                    r
                  );
                })(this, [], 20).join("\nFrom previous: ");
                return null !== this._state && (this._stack = n), n;
              } finally {
                pn = !1;
              }
            },
          },
          timeout: function (n, t) {
            var r = this;
            return n < 1 / 0
              ? new Tn(function (e, i) {
                  var u = setTimeout(function () {
                    return i(new W.Timeout(t));
                  }, n);
                  r.then(e, i).finally(clearTimeout.bind(null, u));
                })
              : this;
          },
        }),
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            l(Tn.prototype, Symbol.toStringTag, "Promise"),
          (Sn.env = et()),
          c(Tn, {
            all: function () {
              var n = N.apply(null, arguments).map(Qn);
              return new Tn(function (t, r) {
                0 === n.length && t([]);
                var e = n.length;
                n.forEach(function (i, u) {
                  return Tn.resolve(i).then(function (r) {
                    (n[u] = r), --e || t(n);
                  }, r);
                });
              });
            },
            resolve: function (n) {
              if (n instanceof Tn) return n;
              if (n && "function" == typeof n.then)
                return new Tn(function (t, r) {
                  n.then(t, r);
                });
              var t = new Tn(on, !0, n);
              return xn(t, kn), t;
            },
            reject: qn,
            race: function () {
              var n = N.apply(null, arguments).map(Qn);
              return new Tn(function (t, r) {
                n.map(function (n) {
                  return Tn.resolve(n).then(t, r);
                });
              });
            },
            PSD: {
              get: function () {
                return An;
              },
              set: function (n) {
                return (An = n);
              },
            },
            newPSD: Yn,
            usePSD: it,
            scheduler: {
              get: function () {
                return _n;
              },
              set: function (n) {
                _n = n;
              },
            },
            rejectionMapper: {
              get: function () {
                return En;
              },
              set: function (n) {
                En = n;
              },
            },
            follow: function (n, t) {
              return new Tn(function (r, e) {
                return Yn(
                  function (t, r) {
                    var e = An;
                    (e.unhandleds = []),
                      (e.onunhandled = r),
                      (e.finalize = Q(function () {
                        var n = this;
                        Cn.push(function e() {
                          0 === n.unhandleds.length ? t() : r(n.unhandleds[0]),
                            Cn.splice(Cn.indexOf(e), 1);
                        }),
                          ++In,
                          _n(function () {
                            0 == --In && Un();
                          }, []);
                      }, e.finalize)),
                      n();
                  },
                  t,
                  r,
                  e
                );
              });
            },
          });
        var Fn = { awaits: 0, echoes: 0, id: 0 },
          zn = 0,
          Hn = [],
          Wn = 0,
          Vn = 0,
          Jn = 0;
        function Yn(n, t, r, e) {
          var i = An,
            o = Object.create(i);
          (o.parent = i), (o.ref = 0), (o.global = !1), (o.id = ++Jn);
          var a = Sn.env;
          (o.env = vn
            ? {
                Promise: Tn,
                PromiseProp: { value: Tn, configurable: !0, writable: !0 },
                all: Tn.all,
                race: Tn.race,
                resolve: Tn.resolve,
                reject: Tn.reject,
                nthen: ot(a.nthen, o),
                gthen: ot(a.gthen, o),
              }
            : {}),
            t && u(o, t),
            ++i.ref,
            (o.finalize = function () {
              --this.parent.ref || this.parent.finalize();
            });
          var s = it(o, n, r, e);
          return 0 === o.ref && o.finalize(), s;
        }
        function Xn() {
          return Fn.id || (Fn.id = ++zn), ++Fn.awaits, (Fn.echoes += 7), Fn.id;
        }
        function Zn(n) {
          !Fn.awaits ||
            (n && n !== Fn.id) ||
            (0 == --Fn.awaits && (Fn.id = 0), (Fn.echoes = 7 * Fn.awaits));
        }
        function Qn(n) {
          return Fn.echoes && n && n.constructor === dn
            ? (Xn(),
              n.then(
                function (n) {
                  return Zn(), n;
                },
                function (n) {
                  return Zn(), ct(n);
                }
              ))
            : n;
        }
        function nt(n) {
          ++Vn,
            (Fn.echoes && 0 != --Fn.echoes) || (Fn.echoes = Fn.id = 0),
            Hn.push(An),
            rt(n, !0);
        }
        function tt() {
          var n = Hn[Hn.length - 1];
          Hn.pop(), rt(n, !1);
        }
        function rt(n, t) {
          var r,
            e = An;
          if (
            ((t
              ? !Fn.echoes || (Wn++ && n === An)
              : !Wn || (--Wn && n === An)) ||
              ((r = t ? nt.bind(null, n) : tt), ln.call(sn, r)),
            n !== An && ((An = n), e === Sn && (Sn.env = et()), vn))
          ) {
            var u = Sn.env.Promise,
              o = n.env;
            (cn.then = o.nthen),
              (u.prototype.then = o.gthen),
              (e.global || n.global) &&
                (Object.defineProperty(i, "Promise", o.PromiseProp),
                (u.all = o.all),
                (u.race = o.race),
                (u.resolve = o.resolve),
                (u.reject = o.reject));
          }
        }
        function et() {
          var n = i.Promise;
          return vn
            ? {
                Promise: n,
                PromiseProp: Object.getOwnPropertyDescriptor(i, "Promise"),
                all: n.all,
                race: n.race,
                resolve: n.resolve,
                reject: n.reject,
                nthen: cn.then,
                gthen: n.prototype.then,
              }
            : {};
        }
        function it(n, t, r, e, i) {
          var u = An;
          try {
            return rt(n, !0), t(r, e, i);
          } finally {
            rt(u, !1);
          }
        }
        function ut(n, t, r) {
          return "function" != typeof n
            ? n
            : function () {
                var e = An;
                r && Xn(), rt(t, !0);
                try {
                  return n.apply(this, arguments);
                } finally {
                  rt(e, !1);
                }
              };
        }
        function ot(n, t) {
          return function (r, e) {
            return n.call(this, ut(r, t, !1), ut(e, t, !1));
          };
        }
        var at = "unhandledrejection";
        function st(n, t) {
          var r;
          try {
            r = t.onuncatched(n);
          } catch (n) {}
          if (!1 !== r)
            try {
              var e,
                o = { promise: t, reason: n };
              if (
                (i.document && document.createEvent
                  ? ((e = document.createEvent("Event")).initEvent(at, !0, !0),
                    u(e, o))
                  : i.CustomEvent &&
                    u((e = new CustomEvent(at, { detail: o })), o),
                e &&
                  i.dispatchEvent &&
                  (dispatchEvent(e),
                  !i.PromiseRejectionEvent && i.onunhandledrejection))
              )
                try {
                  i.onunhandledrejection(e);
                } catch (n) {}
              e.defaultPrevented ||
                console.warn("Unhandled rejection: " + (n.stack || n));
            } catch (n) {}
        }
        var ct = Tn.reject;
        function ft(n) {
          var t = {},
            i = function (r, e) {
              if (e) {
                for (var i = arguments.length, u = new Array(i - 1); --i; )
                  u[i - 1] = arguments[i];
                return t[r].subscribe.apply(null, u), n;
              }
              if ("string" == typeof r) return t[r];
            };
          i.addEventType = a;
          for (var u = 1, o = arguments.length; u < o; ++u) a(arguments[u]);
          return i;
          function a(n, r, e) {
            if ("object" == typeof n) return s(n);
            r || (r = en), e || (e = Y);
            var u = {
              subscribers: [],
              fire: e,
              subscribe: function (n) {
                -1 === u.subscribers.indexOf(n) &&
                  (u.subscribers.push(n), (u.fire = r(u.fire, n)));
              },
              unsubscribe: function (n) {
                (u.subscribers = u.subscribers.filter(function (t) {
                  return t !== n;
                })),
                  (u.fire = u.subscribers.reduce(r, e));
              },
            };
            return (t[n] = i[n] = u), u;
          }
          function s(n) {
            r(n).forEach(function (t) {
              var r = n[t];
              if (e(r)) a(t, n[t][0], n[t][1]);
              else {
                if ("asap" !== r)
                  throw new W.InvalidArgument("Invalid event config");
                var i = a(t, X, function () {
                  for (var n = arguments.length, t = new Array(n); n--; )
                    t[n] = arguments[n];
                  i.subscribers.forEach(function (n) {
                    m(function () {
                      n.apply(null, t);
                    });
                  });
                });
              }
            });
          }
        }
        var lt,
          dt = "{version}",
          ht = String.fromCharCode(65535),
          vt = (function () {
            try {
              return IDBKeyRange.only([[]]), [[]];
            } catch (n) {
              return ht;
            }
          })(),
          pt = -1 / 0,
          gt =
            "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
          _t = "String expected.",
          mt = [],
          yt =
            "undefined" != typeof navigator &&
            /(MSIE|Trident|Edge)/.test(navigator.userAgent),
          bt = yt,
          wt = yt,
          kt = function (n) {
            return !/(dexie\.js|dexie\.min\.js)/.test(n);
          };
        function Et(n, t) {
          var o,
            a,
            f,
            d,
            h,
            v = Et.dependencies,
            m = u(
              {
                addons: Et.addons,
                autoOpen: !0,
                indexedDB: v.indexedDB,
                IDBKeyRange: v.IDBKeyRange,
              },
              t
            ),
            S = m.addons,
            O = m.autoOpen,
            T = m.indexedDB,
            M = m.IDBKeyRange,
            D = (this._dbSchema = {}),
            L = [],
            G = [],
            j = {},
            B = null,
            U = null,
            q = !1,
            z = null,
            H = !1,
            V = "readonly",
            J = "readwrite",
            Q = this,
            en = new Tn(function (n) {
              o = n;
            }),
            on = new Tn(function (n, t) {
              a = t;
            }),
            an = !0,
            sn = !!Dt(T);
          function cn(n) {
            (this._cfg = {
              version: n,
              storesSource: null,
              dbschema: {},
              tables: {},
              contentUpgrade: null,
            }),
              this.stores({});
          }
          function fn(n, t, r, e) {
            var i = n.db.createObjectStore(
              t,
              r.keyPath
                ? { keyPath: r.keyPath, autoIncrement: r.auto }
                : { autoIncrement: r.auto }
            );
            return (
              e.forEach(function (n) {
                ln(i, n);
              }),
              i
            );
          }
          function ln(n, t) {
            n.createIndex(t.name, t.keyPath, {
              unique: t.unique,
              multiEntry: t.multi,
            });
          }
          function vn(n, t, r) {
            var e = arguments.length;
            if (e < 2) throw new W.InvalidArgument("Too few arguments");
            for (var i = new Array(e - 1); --e; ) i[e - 1] = arguments[e];
            r = i.pop();
            var u = A(i);
            return [n, u, r];
          }
          function pn(n, t, r) {
            (this.name = n),
              (this.schema = t),
              (this._tx = r),
              (this.hook = j[n]
                ? j[n].hook
                : ft(null, {
                    creating: [nn, Y],
                    reading: [Z, X],
                    updating: [rn, Y],
                    deleting: [tn, Y],
                  }));
          }
          function gn(n, t, r) {
            return (r ? Ct : Ot)(function (r) {
              n.push(r), t && t();
            });
          }
          function _n(n, t, r, e, i) {
            return new Tn(function (u, o) {
              var a = r.length,
                s = a - 1;
              if (0 === a) return u();
              if (e) {
                var c,
                  f = Ct(o),
                  l = At(null);
                b(
                  function () {
                    for (var e = 0; e < a; ++e) {
                      c = { onsuccess: null, onerror: null };
                      var o = r[e];
                      i.call(c, o[0], o[1], t);
                      var d = n.delete(o[0]);
                      (d._hookCtx = c),
                        (d.onerror = f),
                        (d.onsuccess = e === s ? At(u) : l);
                    }
                  },
                  function (n) {
                    throw (c.onerror && c.onerror(n), n);
                  }
                );
              } else
                for (var d = 0; d < a; ++d) {
                  var h = n.delete(r[d]);
                  (h.onerror = Ot(o)),
                    d === s &&
                      (h.onsuccess = Kn(function () {
                        return u();
                      }));
                }
            });
          }
          function mn(n, t, r, e) {
            var i = this;
            (this.db = Q),
              (this.mode = n),
              (this.storeNames = t),
              (this.idbtrans = null),
              (this.on = ft(this, "complete", "error", "abort")),
              (this.parent = e || null),
              (this.active = !0),
              (this._reculock = 0),
              (this._blockedFuncs = []),
              (this._resolve = null),
              (this._reject = null),
              (this._waitingFor = null),
              (this._waitingQueue = null),
              (this._spinCount = 0),
              (this._completion = new Tn(function (n, t) {
                (i._resolve = n), (i._reject = t);
              })),
              this._completion.then(
                function () {
                  (i.active = !1), i.on.complete.fire();
                },
                function (n) {
                  var t = i.active;
                  return (
                    (i.active = !1),
                    i.on.error.fire(n),
                    i.parent
                      ? i.parent._reject(n)
                      : t && i.idbtrans && i.idbtrans.abort(),
                    ct(n)
                  );
                }
              );
          }
          function yn(n, t, r) {
            this._ctx = { table: n, index: ":id" === t ? null : t, or: r };
          }
          function bn(n, t) {
            var r = null,
              e = null;
            if (t)
              try {
                r = t();
              } catch (n) {
                e = n;
              }
            var i = n._ctx,
              u = i.table;
            this._ctx = {
              table: u,
              index: i.index,
              isPrimKey:
                !i.index ||
                (u.schema.primKey.keyPath && i.index === u.schema.primKey.name),
              range: r,
              keysOnly: !1,
              dir: "next",
              unique: "",
              algorithm: null,
              filter: null,
              replayFilter: null,
              justLimit: !0,
              isMatch: null,
              offset: 0,
              limit: 1 / 0,
              error: e,
              or: i.or,
              valueMapper: u.hook.reading.fire,
            };
          }
          function wn(n, t) {
            return (
              !(n.filter || n.algorithm || n.or) &&
              (t ? n.justLimit : !n.replayFilter)
            );
          }
          function kn(n, t) {
            return n._cfg.version - t._cfg.version;
          }
          function En(n, t, r) {
            t.forEach(function (t) {
              var e = r[t];
              n.forEach(function (n) {
                t in n ||
                  (n === mn.prototype || n instanceof mn
                    ? l(n, t, {
                        get: function () {
                          return this.table(t);
                        },
                      })
                    : (n[t] = new pn(t, e)));
              });
            });
          }
          function Sn(n, t, r, e, i, u) {
            var o = Kn(
              u
                ? function (n, t, e) {
                    return r(u(n), t, e);
                  }
                : r,
              i
            );
            n.onerror || (n.onerror = Ot(i)),
              (n.onsuccess = (function (n, t) {
                return function () {
                  try {
                    n.apply(this, arguments);
                  } catch (n) {
                    t(n);
                  }
                };
              })(
                t
                  ? function () {
                      var r = n.result;
                      if (r) {
                        var u = function () {
                          r.continue();
                        };
                        t(
                          r,
                          function (n) {
                            u = n;
                          },
                          e,
                          i
                        ) &&
                          o(r.value, r, function (n) {
                            u = n;
                          }),
                          u();
                      } else e();
                    }
                  : function () {
                      var t = n.result;
                      if (t) {
                        var r = function () {
                          t.continue();
                        };
                        o(t.value, t, function (n) {
                          r = n;
                        }),
                          r();
                      } else e();
                    },
                i
              ));
          }
          function On(n, t) {
            return T.cmp(n, t);
          }
          function In(n, t) {
            return On(n, t) > 0 ? n : t;
          }
          function Cn(n, t) {
            return T.cmp(n, t);
          }
          function Mn(n, t) {
            return T.cmp(t, n);
          }
          function $n(n, t) {
            return n < t ? -1 : n === t ? 0 : 1;
          }
          function Nn(n, t) {
            return n > t ? -1 : n === t ? 0 : 1;
          }
          function Pn(n, t) {
            return n
              ? t
                ? function () {
                    return n.apply(this, arguments) && t.apply(this, arguments);
                  }
                : n
              : t;
          }
          function Dn(n, t) {
            for (var r = t.db.objectStoreNames, e = 0; e < r.length; ++e) {
              var u = r[e],
                o = t.objectStore(u);
              f = "getAll" in o;
              for (var a = 0; a < o.indexNames.length; ++a) {
                var s = o.indexNames[a],
                  c = o.index(s).keyPath,
                  l = "string" == typeof c ? c : "[" + p(c).join("+") + "]";
                if (n[u]) {
                  var d = n[u].idxByName[l];
                  d && (d.name = s);
                }
              }
            }
            /Safari/.test(navigator.userAgent) &&
              !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
              i.WorkerGlobalScope &&
              i instanceof i.WorkerGlobalScope &&
              [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
              (f = !1);
          }
          function Ln(n) {
            Q.on("blocked").fire(n),
              mt
                .filter(function (n) {
                  return n.name === Q.name && n !== Q && !n._vcFired;
                })
                .map(function (t) {
                  return t.on("versionchange").fire(n);
                });
          }
          (this.version = function (n) {
            if (B || q)
              throw new W.Schema("Cannot add version when database is open");
            this.verno = Math.max(this.verno, n);
            var t = L.filter(function (t) {
              return t._cfg.version === n;
            })[0];
            return t || ((t = new cn(n)), L.push(t), L.sort(kn), (an = !1), t);
          }),
            u(cn.prototype, {
              stores: function (n) {
                this._cfg.storesSource = this._cfg.storesSource
                  ? u(this._cfg.storesSource, n)
                  : n;
                var t = {};
                L.forEach(function (n) {
                  u(t, n._cfg.storesSource);
                });
                var e = (this._cfg.dbschema = {});
                return (
                  this._parseStoresSpec(t, e),
                  (D = Q._dbSchema = e),
                  [j, Q, mn.prototype].forEach(function (n) {
                    for (var t in n) n[t] instanceof pn && delete n[t];
                  }),
                  En([j, Q, mn.prototype, this._cfg.tables], r(e), e),
                  (G = r(e)),
                  this
                );
              },
              upgrade: function (n) {
                return (this._cfg.contentUpgrade = n), this;
              },
              _parseStoresSpec: function (n, t) {
                r(n).forEach(function (r) {
                  if (null !== n[r]) {
                    var i = {},
                      u = (function (n) {
                        var t = [];
                        return (
                          n.split(",").forEach(function (n) {
                            var r = (n = n.trim()).replace(/([&*]|\+\+)/g, ""),
                              i = /^\[/.test(r)
                                ? r.match(/^\[(.*)\]$/)[1].split("+")
                                : r;
                            t.push(
                              new $t(
                                r,
                                i || null,
                                /\&/.test(n),
                                /\*/.test(n),
                                /\+\+/.test(n),
                                e(i),
                                /\./.test(n)
                              )
                            );
                          }),
                          t
                        );
                      })(n[r]),
                      o = u.shift();
                    if (o.multi)
                      throw new W.Schema("Primary key cannot be multi-valued");
                    o.keyPath && k(i, o.keyPath, o.auto ? 0 : o.keyPath),
                      u.forEach(function (n) {
                        if (n.auto)
                          throw new W.Schema(
                            "Only primary key can be marked as autoIncrement (++)"
                          );
                        if (!n.keyPath)
                          throw new W.Schema(
                            "Index must have a name and cannot be an empty string"
                          );
                        k(
                          i,
                          n.keyPath,
                          n.compound
                            ? n.keyPath.map(function () {
                                return "";
                              })
                            : ""
                        );
                      }),
                      (t[r] = new Nt(r, o, u, i));
                  }
                });
              },
            }),
            (this._allTables = j),
            (this._createTransaction = function (n, t, r, e) {
              return new mn(n, t, r, e);
            }),
            (this._whenReady = function (n) {
              return H || An.letThrough
                ? n()
                : new Tn(function (n, t) {
                    if (!q) {
                      if (!O) return void t(new W.DatabaseClosed());
                      Q.open().catch(Y);
                    }
                    en.then(n, t);
                  }).then(n);
            }),
            (this.verno = 0),
            (this.open = function () {
              if (q || B)
                return en.then(function () {
                  return U ? ct(U) : Q;
                });
              P && (on._stackHolder = x()), (q = !0), (U = null), (H = !1);
              var t = o,
                e = null;
              return Tn.race([
                on,
                new Tn(function (t, i) {
                  if (!T)
                    throw new W.MissingAPI(
                      "indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill."
                    );
                  var u = an ? T.open(n) : T.open(n, Math.round(10 * Q.verno));
                  if (!u) throw new W.MissingAPI("IndexedDB API not available");
                  (u.onerror = Ot(i)),
                    (u.onblocked = Kn(Ln)),
                    (u.onupgradeneeded = Kn(function (t) {
                      if (((e = u.transaction), an && !Q._allowEmptyDB)) {
                        (u.onerror = Tt), e.abort(), u.result.close();
                        var o = T.deleteDatabase(n);
                        o.onsuccess = o.onerror = Kn(function () {
                          i(
                            new W.NoSuchDatabase(
                              "Database " + n + " doesnt exist"
                            )
                          );
                        });
                      } else
                        (e.onerror = Ot(i)),
                          (function (n, t, e) {
                            var i = Q._createTransaction(J, G, D);
                            i.create(t), i._completion.catch(e);
                            var u = i._reject.bind(i);
                            Yn(function () {
                              (An.trans = i),
                                0 === n
                                  ? (r(D).forEach(function (n) {
                                      fn(t, n, D[n].primKey, D[n].indexes);
                                    }),
                                    Tn.follow(function () {
                                      return Q.on.populate.fire(i);
                                    }).catch(u))
                                  : (function (n, t, e) {
                                      var i = [],
                                        u = L.filter(function (t) {
                                          return t._cfg.version === n;
                                        })[0];
                                      if (!u)
                                        throw new W.Upgrade(
                                          "Dexie specification of currently installed DB version is missing"
                                        );
                                      D = Q._dbSchema = u._cfg.dbschema;
                                      var o = !1;
                                      return (
                                        L.filter(function (t) {
                                          return t._cfg.version > n;
                                        }).forEach(function (n) {
                                          i.push(function () {
                                            var r = D,
                                              i = n._cfg.dbschema;
                                            Dn(r, e),
                                              Dn(i, e),
                                              (D = Q._dbSchema = i);
                                            var u = (function (n, t) {
                                              var r = {
                                                del: [],
                                                add: [],
                                                change: [],
                                              };
                                              for (var e in n)
                                                t[e] || r.del.push(e);
                                              for (e in t) {
                                                var i = n[e],
                                                  u = t[e];
                                                if (i) {
                                                  var o = {
                                                    name: e,
                                                    def: u,
                                                    recreate: !1,
                                                    del: [],
                                                    add: [],
                                                    change: [],
                                                  };
                                                  if (
                                                    i.primKey.src !==
                                                    u.primKey.src
                                                  )
                                                    (o.recreate = !0),
                                                      r.change.push(o);
                                                  else {
                                                    var a = i.idxByName,
                                                      s = u.idxByName;
                                                    for (var c in a)
                                                      s[c] || o.del.push(c);
                                                    for (c in s) {
                                                      var f = a[c],
                                                        l = s[c];
                                                      f
                                                        ? f.src !== l.src &&
                                                          o.change.push(l)
                                                        : o.add.push(l);
                                                    }
                                                    (o.del.length > 0 ||
                                                      o.add.length > 0 ||
                                                      o.change.length > 0) &&
                                                      r.change.push(o);
                                                  }
                                                } else r.add.push([e, u]);
                                              }
                                              return r;
                                            })(r, i);
                                            if (
                                              (u.add.forEach(function (n) {
                                                fn(
                                                  e,
                                                  n[0],
                                                  n[1].primKey,
                                                  n[1].indexes
                                                );
                                              }),
                                              u.change.forEach(function (n) {
                                                if (n.recreate)
                                                  throw new W.Upgrade(
                                                    "Not yet support for changing primary key"
                                                  );
                                                var t = e.objectStore(n.name);
                                                n.add.forEach(function (n) {
                                                  ln(t, n);
                                                }),
                                                  n.change.forEach(function (
                                                    n
                                                  ) {
                                                    t.deleteIndex(n.name),
                                                      ln(t, n);
                                                  }),
                                                  n.del.forEach(function (n) {
                                                    t.deleteIndex(n);
                                                  });
                                              }),
                                              n._cfg.contentUpgrade)
                                            )
                                              return (
                                                (o = !0),
                                                Tn.follow(function () {
                                                  n._cfg.contentUpgrade(t);
                                                })
                                              );
                                          }),
                                            i.push(function (t) {
                                              (o && bt) ||
                                                (function (n, t) {
                                                  for (
                                                    var r = 0;
                                                    r <
                                                    t.db.objectStoreNames
                                                      .length;
                                                    ++r
                                                  ) {
                                                    var e =
                                                      t.db.objectStoreNames[r];
                                                    null == n[e] &&
                                                      t.db.deleteObjectStore(e);
                                                  }
                                                })(n._cfg.dbschema, t);
                                            });
                                        }),
                                        (function n() {
                                          return i.length
                                            ? Tn.resolve(
                                                i.shift()(t.idbtrans)
                                              ).then(n)
                                            : Tn.resolve();
                                        })().then(function () {
                                          (function (n, t) {
                                            r(n).forEach(function (r) {
                                              t.db.objectStoreNames.contains(
                                                r
                                              ) ||
                                                fn(
                                                  t,
                                                  r,
                                                  n[r].primKey,
                                                  n[r].indexes
                                                );
                                            });
                                          })(D, e);
                                        })
                                      );
                                    })(n, i, t).catch(u);
                            });
                          })(
                            (t.oldVersion > Math.pow(2, 62)
                              ? 0
                              : t.oldVersion) / 10,
                            e,
                            i
                          );
                    }, i)),
                    (u.onsuccess = Kn(function () {
                      if (((e = null), (B = u.result), mt.push(Q), an))
                        (function () {
                          if (
                            ((Q.verno = B.version / 10),
                            (Q._dbSchema = D = {}),
                            0 !== (G = p(B.objectStoreNames, 0)).length)
                          ) {
                            var n = B.transaction(Pt(G), "readonly");
                            G.forEach(function (t) {
                              for (
                                var r = n.objectStore(t),
                                  e = r.keyPath,
                                  i =
                                    e &&
                                    "string" == typeof e &&
                                    -1 !== e.indexOf("."),
                                  u = new $t(
                                    e,
                                    e || "",
                                    !1,
                                    !1,
                                    !!r.autoIncrement,
                                    e && "string" != typeof e,
                                    i
                                  ),
                                  o = [],
                                  a = 0;
                                a < r.indexNames.length;
                                ++a
                              ) {
                                var s = r.index(r.indexNames[a]);
                                i =
                                  (e = s.keyPath) &&
                                  "string" == typeof e &&
                                  -1 !== e.indexOf(".");
                                var c = new $t(
                                  s.name,
                                  e,
                                  !!s.unique,
                                  !!s.multiEntry,
                                  !1,
                                  e && "string" != typeof e,
                                  i
                                );
                                o.push(c);
                              }
                              D[t] = new Nt(t, u, o, {});
                            }),
                              En([j], r(D), D);
                          }
                        })();
                      else if (B.objectStoreNames.length > 0)
                        try {
                          Dn(D, B.transaction(Pt(B.objectStoreNames), V));
                        } catch (n) {}
                      (B.onversionchange = Kn(function (n) {
                        (Q._vcFired = !0), Q.on("versionchange").fire(n);
                      })),
                        sn ||
                          "__dbnames" === n ||
                          lt.dbnames.put({ name: n }).catch(Y),
                        t();
                    }, i));
                }),
              ])
                .then(function () {
                  return (
                    (z = []),
                    Tn.resolve(Et.vip(Q.on.ready.fire)).then(function n() {
                      if (z.length > 0) {
                        var t = z.reduce(un, Y);
                        return (z = []), Tn.resolve(Et.vip(t)).then(n);
                      }
                    })
                  );
                })
                .finally(function () {
                  z = null;
                })
                .then(function () {
                  return (q = !1), Q;
                })
                .catch(function (n) {
                  try {
                    e && e.abort();
                  } catch (n) {}
                  return (q = !1), Q.close(), ct((U = n));
                })
                .finally(function () {
                  (H = !0), t();
                });
            }),
            (this.close = function () {
              var n = mt.indexOf(Q);
              if ((n >= 0 && mt.splice(n, 1), B)) {
                try {
                  B.close();
                } catch (n) {}
                B = null;
              }
              (O = !1),
                (U = new W.DatabaseClosed()),
                q && a(U),
                (en = new Tn(function (n) {
                  o = n;
                })),
                (on = new Tn(function (n, t) {
                  a = t;
                }));
            }),
            (this.delete = function () {
              var t = arguments.length > 0;
              return new Tn(function (r, e) {
                if (t)
                  throw new W.InvalidArgument(
                    "Arguments not allowed in db.delete()"
                  );
                function i() {
                  Q.close();
                  var t = T.deleteDatabase(n);
                  (t.onsuccess = Kn(function () {
                    sn || lt.dbnames.delete(n).catch(Y), r();
                  })),
                    (t.onerror = Ot(e)),
                    (t.onblocked = Ln);
                }
                q ? en.then(i) : i();
              });
            }),
            (this.backendDB = function () {
              return B;
            }),
            (this.isOpen = function () {
              return null !== B;
            }),
            (this.hasBeenClosed = function () {
              return U && U instanceof W.DatabaseClosed;
            }),
            (this.hasFailed = function () {
              return null !== U;
            }),
            (this.dynamicallyOpened = function () {
              return an;
            }),
            (this.name = n),
            c(this, {
              tables: {
                get: function () {
                  return r(j).map(function (n) {
                    return j[n];
                  });
                },
              },
            }),
            (this.on = ft(this, "populate", "blocked", "versionchange", {
              ready: [un, Y],
            })),
            (this.on.ready.subscribe = g(this.on.ready.subscribe, function (n) {
              return function (t, r) {
                Et.vip(function () {
                  H
                    ? (U || Tn.resolve().then(t), r && n(t))
                    : z
                    ? (z.push(t), r && n(t))
                    : (n(t),
                      r ||
                        n(function n() {
                          Q.on.ready.unsubscribe(t), Q.on.ready.unsubscribe(n);
                        }));
                });
              };
            })),
            (this.transaction = function () {
              var n = vn.apply(this, arguments);
              return this._transaction.apply(this, n);
            }),
            (this._transaction = function (n, t, r) {
              var e = An.trans;
              (e && e.db === Q && -1 === n.indexOf("!")) || (e = null);
              var i = -1 !== n.indexOf("?");
              n = n.replace("!", "").replace("?", "");
              try {
                var u = t.map(function (n) {
                  var t = n instanceof pn ? n.name : n;
                  if ("string" != typeof t)
                    throw new TypeError(
                      "Invalid table argument to Dexie.transaction(). Only Table or String are allowed"
                    );
                  return t;
                });
                if ("r" == n || n == V) n = V;
                else {
                  if ("rw" != n && n != J)
                    throw new W.InvalidArgument(
                      "Invalid transaction mode: " + n
                    );
                  n = J;
                }
                if (e) {
                  if (e.mode === V && n === J) {
                    if (!i)
                      throw new W.SubTransaction(
                        "Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY"
                      );
                    e = null;
                  }
                  e &&
                    u.forEach(function (n) {
                      if (e && -1 === e.storeNames.indexOf(n)) {
                        if (!i)
                          throw new W.SubTransaction(
                            "Table " +
                              n +
                              " not included in parent transaction."
                          );
                        e = null;
                      }
                    }),
                    i && e && !e.active && (e = null);
                }
              } catch (n) {
                return e
                  ? e._promise(null, function (t, r) {
                      r(n);
                    })
                  : ct(n);
              }
              return e
                ? e._promise(n, o, "lock")
                : An.trans
                ? it(An.transless, function () {
                    return Q._whenReady(o);
                  })
                : Q._whenReady(o);
              function o() {
                return Tn.resolve().then(function () {
                  var t,
                    i = An.transless || An,
                    o = Q._createTransaction(n, u, D, e),
                    a = { trans: o, transless: i };
                  e ? (o.idbtrans = e.idbtrans) : o.create(),
                    r.constructor === hn && Xn();
                  var s = Tn.follow(function () {
                    if ((t = r.call(o, o)))
                      if (t.constructor === dn) {
                        var n = Zn.bind(null, null);
                        t.then(n, n);
                      } else
                        "function" == typeof t.next &&
                          "function" == typeof t.throw &&
                          (t = Mt(t));
                  }, a);
                  return (
                    t && "function" == typeof t.then
                      ? Tn.resolve(t).then(function (n) {
                          return o.active
                            ? n
                            : ct(
                                new W.PrematureCommit(
                                  "Transaction committed too early. See http://bit.ly/2kdckMn"
                                )
                              );
                        })
                      : s.then(function () {
                          return t;
                        })
                  )
                    .then(function (n) {
                      return (
                        e && o._resolve(),
                        o._completion.then(function () {
                          return n;
                        })
                      );
                    })
                    .catch(function (n) {
                      return o._reject(n), ct(n);
                    });
                });
              }
            }),
            (this.table = function (n) {
              if (!s(j, n))
                throw new W.InvalidTable("Table " + n + " does not exist");
              return j[n];
            }),
            c(pn.prototype, {
              _trans: function (n, t, r) {
                var e = this._tx || An.trans;
                return e && e.db === Q
                  ? e === An.trans
                    ? e._promise(n, t, r)
                    : Yn(
                        function () {
                          return e._promise(n, t, r);
                        },
                        { trans: e, transless: An.transless || An }
                      )
                  : (function n(t, r, e) {
                      if (H || An.letThrough) {
                        var i = Q._createTransaction(t, r, D);
                        try {
                          i.create();
                        } catch (n) {
                          return ct(n);
                        }
                        return i
                          ._promise(t, function (n, t) {
                            return Yn(function () {
                              return (An.trans = i), e(n, t, i);
                            });
                          })
                          .then(function (n) {
                            return i._completion.then(function () {
                              return n;
                            });
                          });
                      }
                      if (!q) {
                        if (!O) return ct(new W.DatabaseClosed());
                        Q.open().catch(Y);
                      }
                      return en.then(function () {
                        return n(t, r, e);
                      });
                    })(n, [this.name], t);
              },
              _idbstore: function (n, t, r) {
                var e = this.name;
                return this._trans(
                  n,
                  function (n, r, i) {
                    if (-1 === i.storeNames.indexOf(e))
                      throw new W.NotFound(
                        "Table" + e + " not part of transaction"
                      );
                    return t(n, r, i.idbtrans.objectStore(e), i);
                  },
                  r
                );
              },
              get: function (n, t) {
                if (n && n.constructor === Object)
                  return this.where(n).first(t);
                var r = this;
                return this._idbstore(V, function (t, e, i) {
                  var u = i.get(n);
                  (u.onerror = Ot(e)),
                    (u.onsuccess = Kn(function () {
                      t(r.hook.reading.fire(u.result));
                    }, e));
                }).then(t);
              },
              where: function (n) {
                if ("string" == typeof n) return new yn(this, n);
                if (e(n)) return new yn(this, "[" + n.join("+") + "]");
                var t = r(n);
                if (1 === t.length) return this.where(t[0]).equals(n[t[0]]);
                var i = this.schema.indexes
                  .concat(this.schema.primKey)
                  .filter(function (n) {
                    return (
                      n.compound &&
                      t.every(function (t) {
                        return n.keyPath.indexOf(t) >= 0;
                      }) &&
                      n.keyPath.every(function (n) {
                        return t.indexOf(n) >= 0;
                      })
                    );
                  })[0];
                if (i && vt !== ht)
                  return this.where(i.name).equals(
                    i.keyPath.map(function (t) {
                      return n[t];
                    })
                  );
                i ||
                  console.warn(
                    "The query " +
                      JSON.stringify(n) +
                      " on " +
                      this.name +
                      " would benefit of a compound index [" +
                      t.join("+") +
                      "]"
                  );
                var u = this.schema.idxByName,
                  o = t.reduce(
                    function (t, r) {
                      return [
                        t[0] || u[r],
                        t[0] || !u[r]
                          ? Pn(t[1], function (t) {
                              return "" + w(t, r) == "" + n[r];
                            })
                          : t[1],
                      ];
                    },
                    [null, null]
                  ),
                  a = o[0];
                return a
                  ? this.where(a.name).equals(n[a.keyPath]).filter(o[1])
                  : i
                  ? this.filter(o[1])
                  : this.where(t).equals("");
              },
              count: function (n) {
                return this.toCollection().count(n);
              },
              offset: function (n) {
                return this.toCollection().offset(n);
              },
              limit: function (n) {
                return this.toCollection().limit(n);
              },
              reverse: function () {
                return this.toCollection().reverse();
              },
              filter: function (n) {
                return this.toCollection().and(n);
              },
              each: function (n) {
                return this.toCollection().each(n);
              },
              toArray: function (n) {
                return this.toCollection().toArray(n);
              },
              orderBy: function (n) {
                return new bn(new yn(this, e(n) ? "[" + n.join("+") + "]" : n));
              },
              toCollection: function () {
                return new bn(new yn(this));
              },
              mapToClass: function (n, t) {
                this.schema.mappedClass = n;
                var r = Object.create(n.prototype);
                t && St(r, t), (this.schema.instanceTemplate = r);
                var e = function (t) {
                  if (!t) return t;
                  var r = Object.create(n.prototype);
                  for (var e in t)
                    if (s(t, e))
                      try {
                        r[e] = t[e];
                      } catch (n) {}
                  return r;
                };
                return (
                  this.schema.readHook &&
                    this.hook.reading.unsubscribe(this.schema.readHook),
                  (this.schema.readHook = e),
                  this.hook("reading", e),
                  n
                );
              },
              defineClass: function (n) {
                return this.mapToClass(Et.defineClass(n), n);
              },
              bulkDelete: function (n) {
                return this.hook.deleting.fire === Y
                  ? this._idbstore(J, function (t, r, e, i) {
                      t(_n(e, i, n, !1, Y));
                    })
                  : this.where(":id")
                      .anyOf(n)
                      .delete()
                      .then(function () {});
              },
              bulkPut: function (n, t) {
                var r = this;
                return this._idbstore(
                  J,
                  function (e, i, u) {
                    if (!u.keyPath && !r.schema.primKey.auto && !t)
                      throw new W.InvalidArgument(
                        "bulkPut() with non-inbound keys requires keys array in second argument"
                      );
                    if (u.keyPath && t)
                      throw new W.InvalidArgument(
                        "bulkPut(): keys argument invalid on tables with inbound keys"
                      );
                    if (t && t.length !== n.length)
                      throw new W.InvalidArgument(
                        "Arguments objects and keys must have the same length"
                      );
                    if (0 === n.length) return e();
                    var o,
                      a,
                      s = function (n) {
                        0 === c.length
                          ? e(n)
                          : i(
                              new F(
                                r.name +
                                  ".bulkPut(): " +
                                  c.length +
                                  " of " +
                                  f +
                                  " operations failed",
                                c
                              )
                            );
                      },
                      c = [],
                      f = n.length,
                      l = r;
                    if (
                      r.hook.creating.fire === Y &&
                      r.hook.updating.fire === Y
                    ) {
                      a = gn(c);
                      for (var d = 0, h = n.length; d < h; ++d)
                        (o = t ? u.put(n[d], t[d]) : u.put(n[d])).onerror = a;
                      (o.onerror = gn(c, s)), (o.onsuccess = It(s));
                    } else {
                      var v =
                          t ||
                          (u.keyPath &&
                            n.map(function (n) {
                              return w(n, u.keyPath);
                            })),
                        p =
                          v &&
                          y(v, function (t, r) {
                            return null != t && [t, n[r]];
                          });
                      (v
                        ? l
                            .where(":id")
                            .anyOf(
                              v.filter(function (n) {
                                return null != n;
                              })
                            )
                            .modify(function () {
                              (this.value = p[this.primKey]),
                                (p[this.primKey] = null);
                            })
                            .catch(K, function (n) {
                              c = n.failures;
                            })
                            .then(function () {
                              for (
                                var r = [], e = t && [], i = v.length - 1;
                                i >= 0;
                                --i
                              ) {
                                var u = v[i];
                                (null == u || p[u]) &&
                                  (r.push(n[i]),
                                  t && e.push(u),
                                  null != u && (p[u] = null));
                              }
                              return (
                                r.reverse(), t && e.reverse(), l.bulkAdd(r, e)
                              );
                            })
                            .then(function (n) {
                              var t = v[v.length - 1];
                              return null != t ? t : n;
                            })
                        : l.bulkAdd(n)
                      )
                        .then(s)
                        .catch(F, function (n) {
                          (c = c.concat(n.failures)), s();
                        })
                        .catch(i);
                    }
                  },
                  "locked"
                );
              },
              bulkAdd: function (n, t) {
                var r = this,
                  e = this.hook.creating.fire;
                return this._idbstore(J, function (i, u, o, a) {
                  if (!o.keyPath && !r.schema.primKey.auto && !t)
                    throw new W.InvalidArgument(
                      "bulkAdd() with non-inbound keys requires keys array in second argument"
                    );
                  if (o.keyPath && t)
                    throw new W.InvalidArgument(
                      "bulkAdd(): keys argument invalid on tables with inbound keys"
                    );
                  if (t && t.length !== n.length)
                    throw new W.InvalidArgument(
                      "Arguments objects and keys must have the same length"
                    );
                  if (0 === n.length) return i();
                  function s(n) {
                    0 === d.length
                      ? i(n)
                      : u(
                          new F(
                            r.name +
                              ".bulkAdd(): " +
                              d.length +
                              " of " +
                              h +
                              " operations failed",
                            d
                          )
                        );
                  }
                  var c,
                    f,
                    l,
                    d = [],
                    h = n.length;
                  if (e !== Y) {
                    var v,
                      p = o.keyPath;
                    (f = gn(d, null, !0)),
                      (l = At(null)),
                      b(
                        function () {
                          for (var r = 0, i = n.length; r < i; ++r) {
                            v = { onerror: null, onsuccess: null };
                            var u = t && t[r],
                              s = n[r],
                              d = t ? u : p ? w(s, p) : void 0,
                              h = e.call(v, d, s, a);
                            null == d &&
                              null != h &&
                              (p ? k((s = I(s)), p, h) : (u = h)),
                              ((c =
                                null != u ? o.add(s, u) : o.add(s))._hookCtx =
                                v),
                              r < i - 1 &&
                                ((c.onerror = f),
                                v.onsuccess && (c.onsuccess = l));
                          }
                        },
                        function (n) {
                          throw (v.onerror && v.onerror(n), n);
                        }
                      ),
                      (c.onerror = gn(d, s, !0)),
                      (c.onsuccess = At(s));
                  } else {
                    f = gn(d);
                    for (var g = 0, _ = n.length; g < _; ++g)
                      (c = t ? o.add(n[g], t[g]) : o.add(n[g])).onerror = f;
                    (c.onerror = gn(d, s)), (c.onsuccess = It(s));
                  }
                });
              },
              add: function (n, t) {
                var r = this.hook.creating.fire;
                return this._idbstore(J, function (e, i, u, o) {
                  var a = { onsuccess: null, onerror: null };
                  if (r !== Y) {
                    var s =
                        null != t ? t : u.keyPath ? w(n, u.keyPath) : void 0,
                      c = r.call(a, s, n, o);
                    null == s &&
                      null != c &&
                      (u.keyPath ? k(n, u.keyPath, c) : (t = c));
                  }
                  try {
                    var f = null != t ? u.add(n, t) : u.add(n);
                    (f._hookCtx = a),
                      (f.onerror = Ct(i)),
                      (f.onsuccess = At(function (t) {
                        var r = u.keyPath;
                        r && k(n, r, t), e(t);
                      }));
                  } catch (n) {
                    throw (a.onerror && a.onerror(n), n);
                  }
                });
              },
              put: function (n, t) {
                var r = this,
                  e = this.hook.creating.fire,
                  i = this.hook.updating.fire;
                if (e !== Y || i !== Y) {
                  var u = this.schema.primKey.keyPath,
                    o = void 0 !== t ? t : u && w(n, u);
                  return null == o
                    ? this.add(n)
                    : ((n = I(n)),
                      this._trans(
                        J,
                        function () {
                          return r
                            .where(":id")
                            .equals(o)
                            .modify(function () {
                              this.value = n;
                            })
                            .then(function (e) {
                              return 0 === e ? r.add(n, t) : o;
                            });
                        },
                        "locked"
                      ));
                }
                return this._idbstore(J, function (r, e, i) {
                  var u = void 0 !== t ? i.put(n, t) : i.put(n);
                  (u.onerror = Ot(e)),
                    (u.onsuccess = Kn(function (t) {
                      var e = i.keyPath;
                      e && k(n, e, t.target.result), r(u.result);
                    }));
                });
              },
              delete: function (n) {
                return this.hook.deleting.subscribers.length
                  ? this.where(":id").equals(n).delete()
                  : this._idbstore(J, function (t, r, e) {
                      var i = e.delete(n);
                      (i.onerror = Ot(r)),
                        (i.onsuccess = Kn(function () {
                          t(i.result);
                        }));
                    });
              },
              clear: function () {
                return this.hook.deleting.subscribers.length
                  ? this.toCollection().delete()
                  : this._idbstore(J, function (n, t, r) {
                      var e = r.clear();
                      (e.onerror = Ot(t)),
                        (e.onsuccess = Kn(function () {
                          n(e.result);
                        }));
                    });
              },
              update: function (n, t) {
                if ("object" != typeof t || e(t))
                  throw new W.InvalidArgument(
                    "Modifications must be an object."
                  );
                if ("object" != typeof n || e(n))
                  return this.where(":id").equals(n).modify(t);
                r(t).forEach(function (r) {
                  k(n, r, t[r]);
                });
                var i = w(n, this.schema.primKey.keyPath);
                return void 0 === i
                  ? ct(
                      new W.InvalidArgument(
                        "Given object does not contain its primary key"
                      )
                    )
                  : this.where(":id").equals(i).modify(t);
              },
            }),
            c(mn.prototype, {
              _lock: function () {
                return (
                  _(!An.global),
                  ++this._reculock,
                  1 !== this._reculock || An.global || (An.lockOwnerFor = this),
                  this
                );
              },
              _unlock: function () {
                if ((_(!An.global), 0 == --this._reculock))
                  for (
                    An.global || (An.lockOwnerFor = null);
                    this._blockedFuncs.length > 0 && !this._locked();

                  ) {
                    var n = this._blockedFuncs.shift();
                    try {
                      it(n[1], n[0]);
                    } catch (n) {}
                  }
                return this;
              },
              _locked: function () {
                return this._reculock && An.lockOwnerFor !== this;
              },
              create: function (n) {
                var t = this;
                if (!this.mode) return this;
                if ((_(!this.idbtrans), !n && !B))
                  switch (U && U.name) {
                    case "DatabaseClosedError":
                      throw new W.DatabaseClosed(U);
                    case "MissingAPIError":
                      throw new W.MissingAPI(U.message, U);
                    default:
                      throw new W.OpenFailed(U);
                  }
                if (!this.active) throw new W.TransactionInactive();
                return (
                  _(null === this._completion._state),
                  ((n = this.idbtrans =
                    n ||
                    B.transaction(Pt(this.storeNames), this.mode)).onerror = Kn(
                    function (r) {
                      Tt(r), t._reject(n.error);
                    }
                  )),
                  (n.onabort = Kn(function (r) {
                    Tt(r),
                      t.active && t._reject(new W.Abort(n.error)),
                      (t.active = !1),
                      t.on("abort").fire(r);
                  })),
                  (n.oncomplete = Kn(function () {
                    (t.active = !1), t._resolve();
                  })),
                  this
                );
              },
              _promise: function (n, t, r) {
                var e = this;
                if (n === J && this.mode !== J)
                  return ct(new W.ReadOnly("Transaction is readonly"));
                if (!this.active) return ct(new W.TransactionInactive());
                if (this._locked())
                  return new Tn(function (i, u) {
                    e._blockedFuncs.push([
                      function () {
                        e._promise(n, t, r).then(i, u);
                      },
                      An,
                    ]);
                  });
                if (r)
                  return Yn(function () {
                    var n = new Tn(function (n, r) {
                      e._lock();
                      var i = t(n, r, e);
                      i && i.then && i.then(n, r);
                    });
                    return (
                      n.finally(function () {
                        return e._unlock();
                      }),
                      (n._lib = !0),
                      n
                    );
                  });
                var i = new Tn(function (n, r) {
                  var i = t(n, r, e);
                  i && i.then && i.then(n, r);
                });
                return (i._lib = !0), i;
              },
              _root: function () {
                return this.parent ? this.parent._root() : this;
              },
              waitFor: function (n) {
                var t = this._root();
                if (((n = Tn.resolve(n)), t._waitingFor))
                  t._waitingFor = t._waitingFor.then(function () {
                    return n;
                  });
                else {
                  (t._waitingFor = n), (t._waitingQueue = []);
                  var r = t.idbtrans.objectStore(t.storeNames[0]);
                  (function n() {
                    for (++t._spinCount; t._waitingQueue.length; )
                      t._waitingQueue.shift()();
                    t._waitingFor && (r.get(-1 / 0).onsuccess = n);
                  })();
                }
                var e = t._waitingFor;
                return new Tn(function (r, i) {
                  n.then(
                    function (n) {
                      return t._waitingQueue.push(Kn(r.bind(null, n)));
                    },
                    function (n) {
                      return t._waitingQueue.push(Kn(i.bind(null, n)));
                    }
                  ).finally(function () {
                    t._waitingFor === e && (t._waitingFor = null);
                  });
                });
              },
              abort: function () {
                this.active && this._reject(new W.Abort()), (this.active = !1);
              },
              tables: {
                get:
                  ((d = "Transaction.tables"),
                  (h = function () {
                    return j;
                  }),
                  function () {
                    return (
                      console.warn(
                        d +
                          " is deprecated. See https://github.com/dfahlander/Dexie.js/wiki/Deprecations. " +
                          R(x(), 1)
                      ),
                      h.apply(this, arguments)
                    );
                  }),
              },
              table: function (n) {
                return new pn(n, Q.table(n).schema, this);
              },
            }),
            c(yn.prototype, function () {
              function n(n, t, r) {
                var e = n instanceof yn ? new bn(n) : n;
                return (e._ctx.error = r ? new r(t) : new TypeError(t)), e;
              }
              function t(n) {
                return new bn(n, function () {
                  return M.only("");
                }).limit(0);
              }
              function r(n, t, r, e, i, u) {
                for (
                  var o = Math.min(n.length, e.length), a = -1, s = 0;
                  s < o;
                  ++s
                ) {
                  var c = t[s];
                  if (c !== e[s])
                    return i(n[s], r[s]) < 0
                      ? n.substr(0, s) + r[s] + r.substr(s + 1)
                      : i(n[s], e[s]) < 0
                      ? n.substr(0, s) + e[s] + r.substr(s + 1)
                      : a >= 0
                      ? n.substr(0, a) + t[a] + r.substr(a + 1)
                      : null;
                  i(n[s], c) < 0 && (a = s);
                }
                return o < e.length && "next" === u
                  ? n + r.substr(n.length)
                  : o < n.length && "prev" === u
                  ? n.substr(0, r.length)
                  : a < 0
                  ? null
                  : n.substr(0, a) + e[a] + r.substr(a + 1);
              }
              function e(t, e, i, u) {
                var o,
                  a,
                  s,
                  c,
                  f,
                  l,
                  d,
                  h = i.length;
                if (
                  !i.every(function (n) {
                    return "string" == typeof n;
                  })
                )
                  return n(t, _t);
                function v(n) {
                  (o = (function (n) {
                    return "next" === n
                      ? function (n) {
                          return n.toUpperCase();
                        }
                      : function (n) {
                          return n.toLowerCase();
                        };
                  })(n)),
                    (a = (function (n) {
                      return "next" === n
                        ? function (n) {
                            return n.toLowerCase();
                          }
                        : function (n) {
                            return n.toUpperCase();
                          };
                    })(n)),
                    (s = "next" === n ? $n : Nn);
                  var t = i
                    .map(function (n) {
                      return { lower: a(n), upper: o(n) };
                    })
                    .sort(function (n, t) {
                      return s(n.lower, t.lower);
                    });
                  (c = t.map(function (n) {
                    return n.upper;
                  })),
                    (f = t.map(function (n) {
                      return n.lower;
                    })),
                    (l = n),
                    (d = "next" === n ? "" : u);
                }
                v("next");
                var p = new bn(t, function () {
                  return M.bound(c[0], f[h - 1] + u);
                });
                p._ondirectionchange = function (n) {
                  v(n);
                };
                var g = 0;
                return (
                  p._addAlgorithm(function (n, t, i) {
                    var u = n.key;
                    if ("string" != typeof u) return !1;
                    var o = a(u);
                    if (e(o, f, g)) return !0;
                    for (var v = null, p = g; p < h; ++p) {
                      var _ = r(u, o, c[p], f[p], s, l);
                      null === _ && null === v
                        ? (g = p + 1)
                        : (null === v || s(v, _) > 0) && (v = _);
                    }
                    return (
                      t(
                        null !== v
                          ? function () {
                              n.continue(v + d);
                            }
                          : i
                      ),
                      !1
                    );
                  }),
                  p
                );
              }
              return {
                between: function (r, e, i, u) {
                  (i = !1 !== i), (u = !0 === u);
                  try {
                    return On(r, e) > 0 ||
                      (0 === On(r, e) && (i || u) && (!i || !u))
                      ? t(this)
                      : new bn(this, function () {
                          return M.bound(r, e, !i, !u);
                        });
                  } catch (t) {
                    return n(this, gt);
                  }
                },
                equals: function (n) {
                  return new bn(this, function () {
                    return M.only(n);
                  });
                },
                above: function (n) {
                  return new bn(this, function () {
                    return M.lowerBound(n, !0);
                  });
                },
                aboveOrEqual: function (n) {
                  return new bn(this, function () {
                    return M.lowerBound(n);
                  });
                },
                below: function (n) {
                  return new bn(this, function () {
                    return M.upperBound(n, !0);
                  });
                },
                belowOrEqual: function (n) {
                  return new bn(this, function () {
                    return M.upperBound(n);
                  });
                },
                startsWith: function (t) {
                  return "string" != typeof t
                    ? n(this, _t)
                    : this.between(t, t + ht, !0, !0);
                },
                startsWithIgnoreCase: function (n) {
                  return "" === n
                    ? this.startsWith(n)
                    : e(
                        this,
                        function (n, t) {
                          return 0 === n.indexOf(t[0]);
                        },
                        [n],
                        ht
                      );
                },
                equalsIgnoreCase: function (n) {
                  return e(
                    this,
                    function (n, t) {
                      return n === t[0];
                    },
                    [n],
                    ""
                  );
                },
                anyOfIgnoreCase: function () {
                  var n = N.apply($, arguments);
                  return 0 === n.length
                    ? t(this)
                    : e(
                        this,
                        function (n, t) {
                          return -1 !== t.indexOf(n);
                        },
                        n,
                        ""
                      );
                },
                startsWithAnyOfIgnoreCase: function () {
                  var n = N.apply($, arguments);
                  return 0 === n.length
                    ? t(this)
                    : e(
                        this,
                        function (n, t) {
                          return t.some(function (t) {
                            return 0 === n.indexOf(t);
                          });
                        },
                        n,
                        ht
                      );
                },
                anyOf: function () {
                  var r = N.apply($, arguments),
                    e = Cn;
                  try {
                    r.sort(e);
                  } catch (t) {
                    return n(this, gt);
                  }
                  if (0 === r.length) return t(this);
                  var i = new bn(this, function () {
                    return M.bound(r[0], r[r.length - 1]);
                  });
                  i._ondirectionchange = function (n) {
                    (e = "next" === n ? Cn : Mn), r.sort(e);
                  };
                  var u = 0;
                  return (
                    i._addAlgorithm(function (n, t, i) {
                      for (var o = n.key; e(o, r[u]) > 0; )
                        if (++u === r.length) return t(i), !1;
                      return (
                        0 === e(o, r[u]) ||
                        (t(function () {
                          n.continue(r[u]);
                        }),
                        !1)
                      );
                    }),
                    i
                  );
                },
                notEqual: function (n) {
                  return this.inAnyRange(
                    [
                      [pt, n],
                      [n, vt],
                    ],
                    { includeLowers: !1, includeUppers: !1 }
                  );
                },
                noneOf: function () {
                  var t = N.apply($, arguments);
                  if (0 === t.length) return new bn(this);
                  try {
                    t.sort(Cn);
                  } catch (t) {
                    return n(this, gt);
                  }
                  var r = t.reduce(function (n, t) {
                    return n ? n.concat([[n[n.length - 1][1], t]]) : [[pt, t]];
                  }, null);
                  return (
                    r.push([t[t.length - 1], vt]),
                    this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 })
                  );
                },
                inAnyRange: function (r, e) {
                  if (0 === r.length) return t(this);
                  if (
                    !r.every(function (n) {
                      return (
                        void 0 !== n[0] &&
                        void 0 !== n[1] &&
                        Cn(n[0], n[1]) <= 0
                      );
                    })
                  )
                    return n(
                      this,
                      "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",
                      W.InvalidArgument
                    );
                  var i,
                    u = !e || !1 !== e.includeLowers,
                    o = e && !0 === e.includeUppers,
                    a = Cn;
                  function s(n, t) {
                    return a(n[0], t[0]);
                  }
                  try {
                    (i = r.reduce(function (n, t) {
                      for (var r = 0, e = n.length; r < e; ++r) {
                        var i = n[r];
                        if (On(t[0], i[1]) < 0 && On(t[1], i[0]) > 0) {
                          (i[0] = On((u = i[0]), (o = t[0])) < 0 ? u : o),
                            (i[1] = In(i[1], t[1]));
                          break;
                        }
                      }
                      var u, o;
                      return r === e && n.push(t), n;
                    }, [])).sort(s);
                  } catch (t) {
                    return n(this, gt);
                  }
                  var c = 0,
                    f = o
                      ? function (n) {
                          return Cn(n, i[c][1]) > 0;
                        }
                      : function (n) {
                          return Cn(n, i[c][1]) >= 0;
                        },
                    l = u
                      ? function (n) {
                          return Mn(n, i[c][0]) > 0;
                        }
                      : function (n) {
                          return Mn(n, i[c][0]) >= 0;
                        },
                    d = f,
                    h = new bn(this, function () {
                      return M.bound(i[0][0], i[i.length - 1][1], !u, !o);
                    });
                  return (
                    (h._ondirectionchange = function (n) {
                      "next" === n ? ((d = f), (a = Cn)) : ((d = l), (a = Mn)),
                        i.sort(s);
                    }),
                    h._addAlgorithm(function (n, t, r) {
                      for (var e = n.key; d(e); )
                        if (++c === i.length) return t(r), !1;
                      return (
                        !!(function (n) {
                          return !f(n) && !l(n);
                        })(e) ||
                        (0 === On(e, i[c][1]) ||
                          0 === On(e, i[c][0]) ||
                          t(function () {
                            a === Cn
                              ? n.continue(i[c][0])
                              : n.continue(i[c][1]);
                          }),
                        !1)
                      );
                    }),
                    h
                  );
                },
                startsWithAnyOf: function () {
                  var r = N.apply($, arguments);
                  return r.every(function (n) {
                    return "string" == typeof n;
                  })
                    ? 0 === r.length
                      ? t(this)
                      : this.inAnyRange(
                          r.map(function (n) {
                            return [n, n + ht];
                          })
                        )
                    : n(this, "startsWithAnyOf() only works with strings");
                },
              };
            }),
            c(bn.prototype, function () {
              function n(n, t) {
                n.filter = Pn(n.filter, t);
              }
              function t(n, t, r) {
                var e = n.replayFilter;
                (n.replayFilter = e
                  ? function () {
                      return Pn(e(), t());
                    }
                  : t),
                  (n.justLimit = r && !e);
              }
              function e(n, t) {
                if (n.isPrimKey) return t;
                var r = n.table.schema.idxByName[n.index];
                if (!r)
                  throw new W.Schema(
                    "KeyPath " +
                      n.index +
                      " on object store " +
                      t.name +
                      " is not indexed"
                  );
                return t.index(r.name);
              }
              function i(n, t) {
                var r = e(n, t);
                return n.keysOnly && "openKeyCursor" in r
                  ? r.openKeyCursor(n.range || null, n.dir + n.unique)
                  : r.openCursor(n.range || null, n.dir + n.unique);
              }
              function o(n, t, r, e, u) {
                var o = n.replayFilter
                  ? Pn(n.filter, n.replayFilter())
                  : n.filter;
                n.or
                  ? (function () {
                      var a = {},
                        c = 0;
                      function f() {
                        2 == ++c && r();
                      }
                      function l(n, r, i) {
                        if (!o || o(r, i, f, e)) {
                          var u = r.primaryKey,
                            c = "" + u;
                          "[object ArrayBuffer]" === c &&
                            (c = "" + new Uint8Array(u)),
                            s(a, c) || ((a[c] = !0), t(n, r, i));
                        }
                      }
                      n.or._iterate(l, f, e, u),
                        Sn(
                          i(n, u),
                          n.algorithm,
                          l,
                          f,
                          e,
                          !n.keysOnly && n.valueMapper
                        );
                    })()
                  : Sn(
                      i(n, u),
                      Pn(n.algorithm, o),
                      t,
                      r,
                      e,
                      !n.keysOnly && n.valueMapper
                    );
              }
              return {
                _read: function (n, t) {
                  var r = this._ctx;
                  return r.error
                    ? r.table._trans(null, ct.bind(null, r.error))
                    : r.table._idbstore(V, n).then(t);
                },
                _write: function (n) {
                  var t = this._ctx;
                  return t.error
                    ? t.table._trans(null, ct.bind(null, t.error))
                    : t.table._idbstore(J, n, "locked");
                },
                _addAlgorithm: function (n) {
                  var t = this._ctx;
                  t.algorithm = Pn(t.algorithm, n);
                },
                _iterate: function (n, t, r, e) {
                  return o(this._ctx, n, t, r, e);
                },
                clone: function (n) {
                  var t = Object.create(this.constructor.prototype),
                    r = Object.create(this._ctx);
                  return n && u(r, n), (t._ctx = r), t;
                },
                raw: function () {
                  return (this._ctx.valueMapper = null), this;
                },
                each: function (n) {
                  var t = this._ctx;
                  return this._read(function (r, e, i) {
                    o(t, n, r, e, i);
                  });
                },
                count: function (n) {
                  var t = this._ctx;
                  if (wn(t, !0))
                    return this._read(function (n, r, i) {
                      var u = e(t, i),
                        o = t.range ? u.count(t.range) : u.count();
                      (o.onerror = Ot(r)),
                        (o.onsuccess = function (r) {
                          n(Math.min(r.target.result, t.limit));
                        });
                    }, n);
                  var r = 0;
                  return this._read(function (n, e, i) {
                    o(
                      t,
                      function () {
                        return ++r, !1;
                      },
                      function () {
                        n(r);
                      },
                      e,
                      i
                    );
                  }, n);
                },
                sortBy: function (n, t) {
                  var r = n.split(".").reverse(),
                    e = r[0],
                    i = r.length - 1;
                  function u(n, t) {
                    return t ? u(n[r[t]], t - 1) : n[e];
                  }
                  var o = "next" === this._ctx.dir ? 1 : -1;
                  function a(n, t) {
                    var r = u(n, i),
                      e = u(t, i);
                    return r < e ? -o : r > e ? o : 0;
                  }
                  return this.toArray(function (n) {
                    return n.sort(a);
                  }).then(t);
                },
                toArray: function (n) {
                  var t = this._ctx;
                  return this._read(function (n, r, i) {
                    if (f && "next" === t.dir && wn(t, !0) && t.limit > 0) {
                      var u = t.table.hook.reading.fire,
                        a = e(t, i),
                        s =
                          t.limit < 1 / 0
                            ? a.getAll(t.range, t.limit)
                            : a.getAll(t.range);
                      (s.onerror = Ot(r)),
                        (s.onsuccess = It(
                          u === X
                            ? n
                            : function (t) {
                                try {
                                  n(t.map(u));
                                } catch (n) {
                                  r(n);
                                }
                              }
                        ));
                    } else {
                      var c = [];
                      o(
                        t,
                        function (n) {
                          c.push(n);
                        },
                        function () {
                          n(c);
                        },
                        r,
                        i
                      );
                    }
                  }, n);
                },
                offset: function (n) {
                  var r = this._ctx;
                  return (
                    n <= 0 ||
                      ((r.offset += n),
                      wn(r)
                        ? t(r, function () {
                            var t = n;
                            return function (n, r) {
                              return (
                                0 === t ||
                                (1 === t
                                  ? (--t, !1)
                                  : (r(function () {
                                      n.advance(t), (t = 0);
                                    }),
                                    !1))
                              );
                            };
                          })
                        : t(r, function () {
                            var t = n;
                            return function () {
                              return --t < 0;
                            };
                          })),
                    this
                  );
                },
                limit: function (n) {
                  return (
                    (this._ctx.limit = Math.min(this._ctx.limit, n)),
                    t(
                      this._ctx,
                      function () {
                        var t = n;
                        return function (n, r, e) {
                          return --t <= 0 && r(e), t >= 0;
                        };
                      },
                      !0
                    ),
                    this
                  );
                },
                until: function (t, r) {
                  return (
                    n(this._ctx, function (n, e, i) {
                      return !t(n.value) || (e(i), r);
                    }),
                    this
                  );
                },
                first: function (n) {
                  return this.limit(1)
                    .toArray(function (n) {
                      return n[0];
                    })
                    .then(n);
                },
                last: function (n) {
                  return this.reverse().first(n);
                },
                filter: function (t) {
                  return (
                    n(this._ctx, function (n) {
                      return t(n.value);
                    }),
                    (function (n, t) {
                      n.isMatch = Pn(n.isMatch, t);
                    })(this._ctx, t),
                    this
                  );
                },
                and: function (n) {
                  return this.filter(n);
                },
                or: function (n) {
                  return new yn(this._ctx.table, n, this);
                },
                reverse: function () {
                  return (
                    (this._ctx.dir =
                      "prev" === this._ctx.dir ? "next" : "prev"),
                    this._ondirectionchange &&
                      this._ondirectionchange(this._ctx.dir),
                    this
                  );
                },
                desc: function () {
                  return this.reverse();
                },
                eachKey: function (n) {
                  var t = this._ctx;
                  return (
                    (t.keysOnly = !t.isMatch),
                    this.each(function (t, r) {
                      n(r.key, r);
                    })
                  );
                },
                eachUniqueKey: function (n) {
                  return (this._ctx.unique = "unique"), this.eachKey(n);
                },
                eachPrimaryKey: function (n) {
                  var t = this._ctx;
                  return (
                    (t.keysOnly = !t.isMatch),
                    this.each(function (t, r) {
                      n(r.primaryKey, r);
                    })
                  );
                },
                keys: function (n) {
                  var t = this._ctx;
                  t.keysOnly = !t.isMatch;
                  var r = [];
                  return this.each(function (n, t) {
                    r.push(t.key);
                  })
                    .then(function () {
                      return r;
                    })
                    .then(n);
                },
                primaryKeys: function (n) {
                  var t = this._ctx;
                  if (f && "next" === t.dir && wn(t, !0) && t.limit > 0)
                    return this._read(function (n, r, i) {
                      var u = e(t, i),
                        o =
                          t.limit < 1 / 0
                            ? u.getAllKeys(t.range, t.limit)
                            : u.getAllKeys(t.range);
                      (o.onerror = Ot(r)), (o.onsuccess = It(n));
                    }).then(n);
                  t.keysOnly = !t.isMatch;
                  var r = [];
                  return this.each(function (n, t) {
                    r.push(t.primaryKey);
                  })
                    .then(function () {
                      return r;
                    })
                    .then(n);
                },
                uniqueKeys: function (n) {
                  return (this._ctx.unique = "unique"), this.keys(n);
                },
                firstKey: function (n) {
                  return this.limit(1)
                    .keys(function (n) {
                      return n[0];
                    })
                    .then(n);
                },
                lastKey: function (n) {
                  return this.reverse().firstKey(n);
                },
                distinct: function () {
                  var t = this._ctx,
                    r = t.index && t.table.schema.idxByName[t.index];
                  if (!r || !r.multi) return this;
                  var e = {};
                  return (
                    n(this._ctx, function (n) {
                      var t = n.primaryKey.toString(),
                        r = s(e, t);
                      return (e[t] = !0), !r;
                    }),
                    this
                  );
                },
                modify: function (n) {
                  var t = this,
                    e = this._ctx.table.hook,
                    i = e.updating.fire,
                    o = e.deleting.fire;
                  return this._write(function (e, a, c, f) {
                    var l;
                    if ("function" == typeof n)
                      l =
                        i === Y && o === Y
                          ? n
                          : function (t) {
                              var e = I(t);
                              if (!1 === n.call(this, t, this)) return !1;
                              if (s(this, "value")) {
                                var u = C(e, this.value),
                                  a = i.call(this, u, this.primKey, e, f);
                                a &&
                                  ((t = this.value),
                                  r(a).forEach(function (n) {
                                    k(t, n, a[n]);
                                  }));
                              } else o.call(this, this.primKey, t, f);
                            };
                    else if (i === Y) {
                      var d = r(n),
                        h = d.length;
                      l = function (t) {
                        for (var r = !1, e = 0; e < h; ++e) {
                          var i = d[e],
                            u = n[i];
                          w(t, i) !== u && (k(t, i, u), (r = !0));
                        }
                        return r;
                      };
                    } else {
                      var v = n;
                      (n = E(v)),
                        (l = function (t) {
                          var e = !1,
                            o = i.call(this, n, this.primKey, I(t), f);
                          return (
                            o && u(n, o),
                            r(n).forEach(function (r) {
                              var i = n[r];
                              w(t, r) !== i && (k(t, r, i), (e = !0));
                            }),
                            o && (n = E(v)),
                            e
                          );
                        });
                    }
                    var p = 0,
                      g = 0,
                      _ = !1,
                      m = [],
                      y = [],
                      S = null;
                    function A(n) {
                      return (
                        n && (m.push(n), y.push(S)),
                        a(new K("Error modifying one or more objects", m, g, y))
                      );
                    }
                    function O() {
                      _ && g + m.length === p && (m.length > 0 ? A() : e(g));
                    }
                    t.clone()
                      .raw()
                      ._iterate(
                        function (n, t) {
                          S = t.primaryKey;
                          var r = {
                            primKey: t.primaryKey,
                            value: n,
                            onsuccess: null,
                            onerror: null,
                          };
                          function e(n) {
                            return m.push(n), y.push(r.primKey), O(), !0;
                          }
                          if (!1 !== l.call(r, n, r)) {
                            var i = !s(r, "value");
                            ++p,
                              b(function () {
                                var n = i ? t.delete() : t.update(r.value);
                                (n._hookCtx = r),
                                  (n.onerror = Ct(e)),
                                  (n.onsuccess = At(function () {
                                    ++g, O();
                                  }));
                              }, e);
                          } else r.onsuccess && r.onsuccess(r.value);
                        },
                        function () {
                          (_ = !0), O();
                        },
                        A,
                        c
                      );
                  });
                },
                delete: function () {
                  var n = this,
                    t = this._ctx,
                    r = t.range,
                    e = t.table.hook.deleting.fire,
                    i = e !== Y;
                  if (!i && wn(t) && ((t.isPrimKey && !wt) || !r))
                    return this._write(function (n, t, e) {
                      var i = Ot(t),
                        u = r ? e.count(r) : e.count();
                      (u.onerror = i),
                        (u.onsuccess = function () {
                          var o = u.result;
                          b(
                            function () {
                              var t = r ? e.delete(r) : e.clear();
                              (t.onerror = i),
                                (t.onsuccess = function () {
                                  return n(o);
                                });
                            },
                            function (n) {
                              return t(n);
                            }
                          );
                        });
                    });
                  var u = i ? 2e3 : 1e4;
                  return this._write(function (r, o, a, s) {
                    var c = 0,
                      f = n
                        .clone({ keysOnly: !t.isMatch && !i })
                        .distinct()
                        .limit(u)
                        .raw(),
                      l = [];
                    r(
                      (function n() {
                        return f
                          .each(
                            i
                              ? function (n, t) {
                                  l.push([t.primaryKey, t.value]);
                                }
                              : function (n, t) {
                                  l.push(t.primaryKey);
                                }
                          )
                          .then(function () {
                            return (
                              i
                                ? l.sort(function (n, t) {
                                    return Cn(n[0], t[0]);
                                  })
                                : l.sort(Cn),
                              _n(a, s, l, i, e)
                            );
                          })
                          .then(function () {
                            var t = l.length;
                            return (c += t), (l = []), t < u ? c : n();
                          });
                      })()
                    );
                  });
                },
              };
            }),
            u(this, {
              Collection: bn,
              Table: pn,
              Transaction: mn,
              Version: cn,
              WhereClause: yn,
            }),
            Q.on("versionchange", function (n) {
              n.newVersion > 0
                ? console.warn(
                    "Another connection wants to upgrade database '" +
                      Q.name +
                      "'. Closing db now to resume the upgrade."
                  )
                : console.warn(
                    "Another connection wants to delete database '" +
                      Q.name +
                      "'. Closing db now to resume the delete request."
                  ),
                Q.close();
            }),
            Q.on("blocked", function (n) {
              !n.newVersion || n.newVersion < n.oldVersion
                ? console.warn("Dexie.delete('" + Q.name + "') was blocked")
                : console.warn(
                    "Upgrade '" +
                      Q.name +
                      "' blocked by other connection holding version " +
                      n.oldVersion / 10
                  );
            }),
            S.forEach(function (n) {
              n(Q);
            });
        }
        function St(n, t) {
          return (
            r(t).forEach(function (r) {
              var i = (function n(t) {
                if ("function" == typeof t) return new t();
                if (e(t)) return [n(t[0])];
                if (t && "object" == typeof t) {
                  var r = {};
                  return St(r, t), r;
                }
                return t;
              })(t[r]);
              n[r] = i;
            }),
            n
          );
        }
        function At(n) {
          return Kn(function (t) {
            var r = t.target,
              e = r._hookCtx,
              i = e.value || r.result,
              u = e && e.onsuccess;
            u && u(i), n && n(i);
          }, n);
        }
        function Ot(n) {
          return Kn(function (t) {
            return Tt(t), n(t.target.error), !1;
          });
        }
        function It(n) {
          return Kn(function (t) {
            n(t.target.result);
          });
        }
        function Ct(n) {
          return Kn(function (t) {
            var r = t.target,
              e = r.error,
              i = r._hookCtx,
              u = i && i.onerror;
            return u && u(e), Tt(t), n(e), !1;
          });
        }
        function Tt(n) {
          n.stopPropagation && n.stopPropagation(),
            n.preventDefault && n.preventDefault();
        }
        function Mt(n) {
          var t = function (t) {
              return n.next(t);
            },
            r = u(t),
            i = u(function (t) {
              return n.throw(t);
            });
          function u(n) {
            return function (t) {
              var u = n(t),
                o = u.value;
              return u.done
                ? o
                : o && "function" == typeof o.then
                ? o.then(r, i)
                : e(o)
                ? Tn.all(o).then(r, i)
                : r(o);
            };
          }
          return u(t)();
        }
        function $t(n, t, r, e, i, u, o) {
          (this.name = n),
            (this.keyPath = t),
            (this.unique = r),
            (this.multi = e),
            (this.auto = i),
            (this.compound = u),
            (this.dotted = o);
          var a =
            "string" == typeof t ? t : t && "[" + [].join.call(t, "+") + "]";
          this.src = (r ? "&" : "") + (e ? "*" : "") + (i ? "++" : "") + a;
        }
        function Nt(n, t, r, e) {
          (this.name = n),
            (this.primKey = t || new $t()),
            (this.indexes = r || [new $t()]),
            (this.instanceTemplate = e),
            (this.mappedClass = null),
            (this.idxByName = y(r, function (n) {
              return [n.name, n];
            }));
        }
        function Pt(n) {
          return 1 === n.length ? n[0] : n;
        }
        function Dt(n) {
          var t = n && (n.getDatabaseNames || n.webkitGetDatabaseNames);
          return t && t.bind(n);
        }
        D(P, kt),
          c(Et, J),
          c(Et, {
            delete: function (n) {
              var t = new Et(n),
                r = t.delete();
              return (
                (r.onblocked = function (n) {
                  return t.on("blocked", n), this;
                }),
                r
              );
            },
            exists: function (n) {
              return new Et(n)
                .open()
                .then(function (n) {
                  return n.close(), !0;
                })
                .catch(Et.NoSuchDatabaseError, function () {
                  return !1;
                });
            },
            getDatabaseNames: function (n) {
              var t = Dt(Et.dependencies.indexedDB);
              return t
                ? new Tn(function (n, r) {
                    var e = t();
                    (e.onsuccess = function (t) {
                      n(p(t.target.result, 0));
                    }),
                      (e.onerror = Ot(r));
                  }).then(n)
                : lt.dbnames.toCollection().primaryKeys(n);
            },
            defineClass: function () {
              return function (n) {
                n && u(this, n);
              };
            },
            applyStructure: St,
            ignoreTransaction: function (n) {
              return An.trans ? it(An.transless, n) : n();
            },
            vip: function (n) {
              return Yn(function () {
                return (An.letThrough = !0), n();
              });
            },
            async: function (n) {
              return function () {
                try {
                  var t = Mt(n.apply(this, arguments));
                  return t && "function" == typeof t.then ? t : Tn.resolve(t);
                } catch (n) {
                  return ct(n);
                }
              };
            },
            spawn: function (n, t, r) {
              try {
                var e = Mt(n.apply(r, t || []));
                return e && "function" == typeof e.then ? e : Tn.resolve(e);
              } catch (n) {
                return ct(n);
              }
            },
            currentTransaction: {
              get: function () {
                return An.trans || null;
              },
            },
            waitFor: function (n, t) {
              var r = Tn.resolve(
                "function" == typeof n ? Et.ignoreTransaction(n) : n
              ).timeout(t || 6e4);
              return An.trans ? An.trans.waitFor(r) : r;
            },
            Promise: Tn,
            debug: {
              get: function () {
                return P;
              },
              set: function (n) {
                D(
                  n,
                  "dexie" === n
                    ? function () {
                        return !0;
                      }
                    : kt
                );
              },
            },
            derive: d,
            extend: u,
            props: c,
            override: g,
            Events: ft,
            getByKeyPath: w,
            setByKeyPath: k,
            delByKeyPath: function (n, t) {
              "string" == typeof t
                ? k(n, t, void 0)
                : "length" in t &&
                  [].map.call(t, function (t) {
                    k(n, t, void 0);
                  });
            },
            shallowClone: E,
            deepClone: I,
            getObjectDiff: C,
            asap: m,
            maxKey: vt,
            minKey: pt,
            addons: [],
            connections: mt,
            MultiModifyError: W.Modify,
            errnames: z,
            IndexSpec: $t,
            TableSchema: Nt,
            dependencies: (function () {
              try {
                return {
                  indexedDB:
                    i.indexedDB ||
                    i.mozIndexedDB ||
                    i.webkitIndexedDB ||
                    i.msIndexedDB,
                  IDBKeyRange: i.IDBKeyRange || i.webkitIDBKeyRange,
                };
              } catch (n) {
                return { indexedDB: null, IDBKeyRange: null };
              }
            })(),
            semVer: dt,
            version: dt
              .split(".")
              .map(function (n) {
                return parseInt(n);
              })
              .reduce(function (n, t, r) {
                return n + t / Math.pow(10, 2 * r);
              }),
            default: Et,
            Dexie: Et,
          }),
          (Tn.rejectionMapper = function (n, t) {
            if (
              !n ||
              n instanceof q ||
              n instanceof TypeError ||
              n instanceof SyntaxError ||
              !n.name ||
              !V[n.name]
            )
              return n;
            var r = new V[n.name](t || n.message, n);
            return (
              "stack" in n &&
                l(r, "stack", {
                  get: function () {
                    return this.inner.stack;
                  },
                }),
              r
            );
          }),
          (lt = new Et("__dbnames")).version(1).stores({ dbnames: "name" }),
          (function () {
            var n = "Dexie.DatabaseNames";
            try {
              void 0 !== typeof localStorage &&
                void 0 !== i.document &&
                (JSON.parse(localStorage.getItem(n) || "[]").forEach(function (
                  n
                ) {
                  return lt.dbnames.put({ name: n }).catch(Y);
                }),
                localStorage.removeItem(n));
            } catch (n) {}
          })(),
          (t.a = Et);
      }).call(this, r(391));
    },
    ,
    function (n, t, r) {
      r.d(t, "b", function () {
        return u;
      }),
        r.d(t, "f", function () {
          return o;
        }),
        r.d(t, "c", function () {
          return a;
        }),
        r.d(t, "a", function () {
          return s;
        }),
        r.d(t, "e", function () {
          return f;
        }),
        r.d(t, "d", function () {
          return d;
        }),
        r.d(t, "g", function () {
          return h;
        });
      var e = r(20),
        i = r(14),
        u = { jid: "@me" },
        o = [
          "sync",
          "abProps",
          "serverProps",
          "rotateKey",
          "deleteDeadMedia",
          "sendMetrics",
          "sendAnonymousMetrics",
          "purgeExpiredStatus",
          "dailyWAM",
          "deleteExpiredPreKeys",
          "purgeContactsLastKnownName",
          "decodeFutureProofEphemeral",
          "deleteExpiredDevices",
          "timeTransitionCurrentUserNotice",
          "rotatePrivateStatsIds",
          "deleteExpiredOrphanedStanzas",
          "deleteExpiredPrivacyTokens",
          "purgePastParticipants",
        ],
        a = {
          abKey: null,
          ephemeralPruningEnabled: !0,
          ephemeralMessagesAllowedValues: new Set([604800]),
          frequentlyForwardedGroupSetting: !1,
          frequentlyForwardedMax: 1,
          frequentlyForwardedMessages: !1,
          frequentlyForwardedThreshold: 5,
          gifProvider: 0,
          groupInviteSending: 0,
          groupJoinPermissions: 0,
          hash: null,
          maxKeys: 200,
          maxParticipants: 257,
          maxSubject: 25,
          mdBlocklistV2: !1,
          mmsHotContentTimespan: 0,
          mmsResumeCheckChatd: !1,
          mmsVCacheAggregationEnabled: !1,
          multicastLimitGlobal: 2,
          prekeyExpirationDays: 60,
          serverPropsVersion: 0,
          statusVideoMaxDuration: 30,
          voiceCallEnabled: !1,
          kaiosVoiceCallEnabled512: !1,
          kaiosVoiceCallEnabled512Jio: !1,
          kaiosVoiceCallEnabled256: !1,
          kaiosVoiceLogsEnabled: !1,
          mms4ServerErrorReceiptEncryptionEnabled: !1,
          mms4MediaRetryNotificationEncryptionEnabled: !1,
          mmsVcardAutodownloadSizeKb: 1e3,
          vcardAsDocumentSizeKb: 1e3,
          vcardMaxSizeKb: 1e3,
          userNotice: !1,
          privateStatsTokenMaxExpirySeconds: i.K,
        },
        s = (0, e.m)(["audio", "photos", "videos", "documents"]),
        c = {
          autodownloadMobile: (0, e.l)("photos"),
          autodownloadWifi: s,
          autodownloadRoaming: (0, e.f)(),
        },
        f = {
          lastSeen: "last",
          profilePhoto: "profile",
          readReceipts: "readreceipts",
          about: "status",
          groupAdd: "groupadd",
          online: "online",
        },
        l = {
          online: "all",
          readReceipts: "all",
          disappearingMsgsDefaultTimer: i.k,
          about: "all",
          groupAdd: "all",
          lastSeen: "all",
          profilePhoto: "all",
        },
        d = Object.assign(
          {},
          l,
          {
            showOneToOne: !0,
            showGroups: !0,
            showPreviews: !0,
            showReactions: !0,
          },
          c,
          { saveMediaToPhoneStorage: !1, pttPlaybackRate: "1x" }
        );
      function h(n) {
        return n;
      }
    },
    function (n, t, r) {
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return s;
        });
      var e = r(135),
        i = r(309),
        u = r(5),
        o = new Map();
      function a(n, t) {
        var r = () => {
          var r = new e.a(n);
          return t(r), r;
        };
        return (
          o.set(n, () => {
            var e = new (class {
              constructor(n, t) {
                (this.name = n), (this.versions = []), (this.initializer = t);
              }
              version(n) {
                var t = new (class {
                  constructor(n) {
                    this.version = n;
                  }
                  stores(n) {
                    return this;
                  }
                  upgrade(n) {
                    return this;
                  }
                })(n);
                return this.versions.push(t), t;
              }
              migrate() {
                var n = this.initializer();
                return (0, u.i)(n.open()).then(() => n.close());
              }
            })(n, r);
            return t(e), e;
          }),
          r
        );
      }
      function s() {
        o.forEach((n, t) => {
          var r = n(),
            e = r.versions.map((n) =>
              (function (n, t) {
                return `indexeddb_${n}_${t}`;
              })(t, n.version)
            );
          (0, i.e)(
            new (class {
              constructor() {
                (this.type = "batch"),
                  (this.names = e),
                  (this.isServiceWorkerFriendly = !0);
              }
              run() {
                var n = r.versions.reduce((n, t) => {
                  var r = t.version;
                  return Math.max(n, r);
                }, -1);
                return (
                  __LOG__(2)`migrating database ${t} to version ${n}`,
                  r.migrate().then(() => {
                    __LOG__(
                      2
                    )`finished migrating database ${t} to version ${n}`;
                  })
                );
              }
            })()
          );
        });
      }
    },
    function (n, t, r) {
      r.d(t, "a", function () {
        return h;
      });
      var e = r(15),
        i = r(2),
        u = r(40),
        o = r(35),
        a = r(96),
        s = r(42),
        c = { type: "idle" },
        f = { type: "pending" },
        l = { type: "error", error: "noLongerExists" },
        d = { type: "error", error: "tooBig" };
      function h(n, t) {
        var r = (function (n) {
          if (n.type !== i.f.RICH_HSM) return n.size;
          var t = n.richContent;
          return t && t.type !== i.f.LOCATION ? t.size : void 0;
        })(n);
        if (n.ack === e.a.CONTENT_GONE) return l;
        if (n.plaintext) {
          if ((0, s.g)(n.ack) && n.author === i.b)
            return {
              type: "error",
              error: n.ack === e.a.EXPIRED ? "msgExpired" : "unknown",
            };
          var h = n.plaintext;
          if (null == h) return { type: "error", error: "unknown" };
          var v = !1;
          return (
            (0, o.r)(n, n.author === i.b) &&
              (n.type === i.f.PTT
                ? (v = !!n.played)
                : (0, a.b)(n) && "viewed" === n.viewOnceState && (v = !0)),
            { type: "ready", ref: h, played: v }
          );
        }
        return n.author === i.b && n.ack === e.a.CLOCK
          ? f
          : n.author === i.b && (0, s.l)(n.ack)
          ? l
          : r && r > u.c
          ? d
          : t
          ? t(n.id)
          : c;
      }
    },
    ,
    ,
    function (n, t, r) {
      function e(n, t) {
        if (0 === n) return 0;
        for (var r = a(t.algo), e = 1; e < n; e++) r();
        return o(t, r());
      }
      function i(n) {
        var t = n.relativeDelay,
          r = void 0 !== t && t,
          e = null,
          i = a(n.algo);
        return function () {
          var t = e;
          if (null == t) return (e = r ? Date.now() : 0), 0;
          var u = o(n, i());
          if (r) {
            var a = Date.now(),
              s = a - t;
            s > 0 && (u = Math.max(0, u - s)), (e = a);
          }
          return u;
        };
      }
      function u(n) {
        var t = i(n);
        return function (n) {
          return new Promise((r) => {
            var e = t();
            e > 0 ? setTimeout(r, e, n) : r(n);
          });
        };
      }
      function o(n, t) {
        var r = n.max,
          e = n.min,
          i = n.jitter,
          u = void 0 === i ? 0.1 : i,
          o = t;
        return (
          null != r && o > r && (o = r),
          null != e && o < e && (o = e),
          0 !== u && (o = Math.ceil(o * (1 + u * Math.random()))),
          o
        );
      }
      function a(n) {
        switch (n.type) {
          case "fibonacci":
            return (function (n) {
              var t = n.second - n.first,
                r = n.first - t;
              return function () {
                var n = t + r;
                return (r = t), (t = n), n;
              };
            })(n);
          case "exponential":
            return (function (n) {
              var t = n.base,
                r = void 0 === t ? 2 : t,
                e = n.first;
              return function () {
                var n = e;
                return (e *= r), n;
              };
            })(n);
          case "constant":
            return (function (n) {
              var t = n.delay;
              return function () {
                return t;
              };
            })(n);
          case "adjust":
            return (function (n) {
              var t = n.toMs,
                r = a(n.backoff);
              return function () {
                return t(r());
              };
            })(n);
          default:
            throw new Error("makeTimeFunc unrecognized backoff " + n.type);
        }
      }
      r.d(t, "c", function () {
        return e;
      }),
        r.d(t, "b", function () {
          return i;
        }),
        r.d(t, "a", function () {
          return u;
        });
    },
    function (n, t, r) {
      r.d(t, "b", function () {
        return i;
      }),
        r.d(t, "d", function () {
          return u;
        }),
        r.d(t, "c", function () {
          return o;
        }),
        r.d(t, "a", function () {
          return a;
        });
      var e = r(3);
      function i(n) {
        return n;
      }
      function u(n, t) {
        return n ? "outgoing" : "connected" !== t ? "missed" : "incoming";
      }
      function o(n, t, r) {
        return `${(0, e.s)(n)}-${t}-${r}`;
      }
      var a = { CELLULAR: 1, WIFI: 2, NONE: 3 };
    },
    ,
    function (n, t, r) {
      r.r(t),
        r.d(t, "makeBridge", function () {
          return l;
        }),
        r.d(t, "attachBatchedPortal", function () {
          return d;
        }),
        r.d(t, "maybeAttachVoipPortal", function () {
          return h;
        }),
        r.d(t, "killVoipPortalAndSendPendingToBridge", function () {
          return v;
        }),
        r.d(t, "warnOnMissingHandlers", function () {
          return p;
        });
      var e = r(329),
        i = r(20);
      function u(n, t) {
        var r = n.length - 1,
          e = n[r];
        if (
          "result" === e.type ||
          "result" === t.type ||
          e.content.name !== t.content.name
        )
          return n.push(t), n;
        switch (t.content.name) {
          case "msgMediaStatusUpdated":
            var i = o(e),
              u = o(t);
            return i.msgId === u.msgId ? (n[r] = t) : n.push(t), n;
          case "msgsReceived":
            var s = o(e),
              c = o(t);
            return (
              a(s.newMsgs, c.newMsgs),
              a(s.changedMsgs, c.changedMsgs),
              a(s.affectedChats, c.affectedChats),
              n
            );
          case "loadAvatars":
            var f = o(e),
              l = o(t);
            return a(f.jids, l.jids), n;
          case "avatarsUpdated":
            var d = o(e),
              h = o(t);
            return (
              d.changed && h.changed
                ? a(d.changed, h.changed)
                : h.changed && (d.changed = h.changed),
              d.cleared && h.cleared
                ? a(d.cleared, h.cleared)
                : h.cleared && (d.cleared = h.cleared),
              n
            );
        }
        return n.push(t), n;
      }
      function o(n) {
        return n.content.arg;
      }
      function a(n, t) {
        n.push.apply(n, t);
      }
      var s = r(78),
        c = r(129),
        f = class extends e.a {
          constructor() {
            var n;
            return (
              (n = super(...arguments)), (this.N = null), (this.O = null), n
            );
          }
          setNamespaceHandler(n, t) {
            "voip" === n && "sw" === this.N
              ? (this.O = t)
              : (super.setNamespaceHandler(n, t),
                "voip" === n && (this.N = "locked"));
          }
        };
      function l() {
        return new f();
      }
      function d(n, t) {
        return (function (n, t, r) {
          return new (class {
            constructor(n, t, r) {
              (this.port = null),
                (this.h = 1),
                (this.openRequests = new Map()),
                (this.listeners = new Set()),
                (this.g = n),
                (this.sendStream = new (class {
                  constructor(n, t) {
                    (this.BO = null),
                      (this.BR = 20),
                      (this.BS = Date.now()),
                      (this.BT = new s.a(() => {
                        var n = this.BO;
                        null != n && ((this.BO = null), this.BP(n));
                      })),
                      (this.BP = t),
                      (this.BQ = n);
                  }
                  addEvent(n) {
                    var t = this.BO;
                    if (
                      ((this.BO = t ? this.BQ(t, n) : [n]),
                      !this.BT.isScheduled())
                    ) {
                      var r,
                        e = this.BR;
                      if (e < 1) {
                        var i = Date.now(),
                          u = Math.max(i - this.BS, 0) / 1e3;
                        (e = Math.min(e + u, 20)), (this.BR = e), (this.BS = i);
                      }
                      e >= 1
                        ? ((r = 0), (this.BR = e - 1))
                        : ((r = Math.ceil(1e3 * (1 - e))), (this.BR = 0)),
                        this.BT.onOrBefore(r);
                    }
                  }
                  cancel() {
                    (this.BO = null), this.BT.cancel();
                  }
                })(t, (n) => {
                  this.i(n);
                })),
                r.forEach((t) => {
                  n.setNamespaceHandler(t, this.j(t));
                });
            }
            addListener(n) {
              return this.listeners.add(n), () => this.listeners.delete(n);
            }
            setPort(n) {
              __LOG__(2)`Bridge updating port`,
                (this.port = n),
                this.sendStream.cancel(),
                (n.onmessage = (t) => {
                  if (this.port === n) {
                    var r = t.data;
                    r &&
                      r.forEach((t) => {
                        this.k(t, "incoming"), this.l(n, t);
                      });
                  } else __LOG__(3)`Bridge received msg on old port`;
                }),
                this.openRequests.forEach((n) => {
                  var t = n.request;
                  __LOG__(2)`Bridge sending ${t.name} across (delayed)`,
                    this.sendStream.addEvent({ type: "request", content: t });
                });
            }
            getBridge() {
              return this.g;
            }
            j(n) {
              return (t, r, e, i) => {
                this.m(n, t, r, e, i);
              };
            }
            m(n, t, r, e, i) {
              var u = this.h++,
                o = {
                  requestId: u,
                  expectsResponse: !!e,
                  namespace: n,
                  name: t,
                  arg: r,
                  silentLog: i,
                };
              this.openRequests.set(u, { request: o, resolver: e }),
                this.sendStream.addEvent({ type: "request", content: o });
            }
            n(n, t) {
              n === this.port &&
                this.sendStream.addEvent({ type: "result", content: t });
            }
            i(n) {
              var t = this.port;
              t
                ? (t.postMessage(n), n.forEach((n) => this.k(n, "outgoing")))
                : __LOG__(2)`Bridge queuing ${n.length} msgs`;
            }
            k(n, t) {
              this.listeners.forEach((r) => r(n, t));
            }
            l(n, t) {
              if ("request" === t.type) {
                var r = t.content,
                  e = r.namespace,
                  i = r.name,
                  u = r.requestId,
                  o = r.arg,
                  a = r.expectsResponse,
                  s = r.silentLog;
                s || __LOG__(2)`Bridge ${u} request for ${i}`;
                var f = this.g;
                if (a) {
                  var l = f.sendAndReceive(e, i, o, s).then(
                    (t) => {
                      this.n(n, {
                        requestId: u,
                        type: "success",
                        result: t,
                        silentLog: s,
                      });
                    },
                    (t) => {
                      this.n(n, {
                        requestId: u,
                        type: "error",
                        result: String(t),
                        silentLog: s,
                      });
                    }
                  );
                  (0, c.c)(l);
                } else {
                  f.fireAndForget(e, i, o, s);
                  var d = {
                    type: "result",
                    content: { requestId: u, type: "handled", silentLog: s },
                  };
                  this.k(d, "outgoing"), n.postMessage([d]);
                }
              } else {
                t.type;
                var h = t.content,
                  v = h.requestId,
                  p = h.type,
                  g = h.result;
                h.silentLog || __LOG__(2)`Bridge ${v} response of ${p}`;
                var _ = this.openRequests.get(v);
                if (!_) return void __LOG__(3)`Bridge unrecognized result ${v}`;
                switch (p) {
                  case "success":
                  case "error":
                    this.openRequests.delete(v);
                    var m = _.resolver;
                    m
                      ? m("success" === p ? g : Promise.reject(new Error(g)))
                      : __LOG__(4)`Bridge unexpected result to cast`;
                    break;
                  case "handled":
                    _.resolver
                      ? __LOG__(4)`Bridge unexpected non-result to call`
                      : this.openRequests.delete(v);
                }
              }
            }
          })(n, r, t);
        })(n, t, u);
      }
      function h(n) {
        var t = n;
        if (null == t.N) {
          var r = d(n, ["voip"]);
          return (t.N = "sw"), r;
        }
      }
      function v(n) {
        var t = n.getBridge();
        if ("sw" !== t.N)
          return (
            __LOG__(
              4
            )`killVoipPortalAndSendPendingToBridge called without locking it to SW`,
            void SEND_LOGS("kill-voip-portal")
          );
        var r =
          t.O ||
          (() => {
            throw new Error("Bridge nextVoipHandler not set");
          });
        (t.N = null),
          (t.O = null),
          t.setNamespaceHandler("voip", r),
          (function (n) {
            var t;
            null == (t = n.port) || t.close(),
              (n.port = null),
              n.sendStream.cancel();
            var r = n.openRequests;
            n.openRequests = new Map();
            var e = n.getBridge();
            r.forEach((n) => {
              var t = n.request,
                r = n.resolver,
                i = t.namespace,
                u = t.name,
                o = t.arg,
                a = t.silentLog;
              __LOG__(2)`absorbPortal: transferring request #${t.requestId}`,
                r
                  ? r(e.sendAndReceive(i, u, o, a))
                  : e.fireAndForget(i, u, o, a);
            });
          })(n);
      }
      function p(n) {
        var t = (0, i.m)([
            "backend",
            "basic",
            "debug",
            "event",
            "page",
            "registration",
            "regPage",
            "voip",
          ]),
          r = (0, i.m)(["debug", "registration", ...n.getHandledNamespaces()]);
        r.length > t.length &&
          __LOG__(
            4
          )`warnOnMissingHandlers: list of handlers incomplete, please update`;
        var e = (0, i.n)(t, r);
        e.length > 0 && __LOG__(3)`Bridge missing handlers for ${e}`;
      }
    },
    function (n, t, r) {
      r.d(t, "e", function () {
        return l;
      }),
        r.d(t, "f", function () {
          return h;
        }),
        r.d(t, "c", function () {
          return v;
        }),
        r.d(t, "a", function () {
          return p;
        }),
        r.d(t, "d", function () {
          return g;
        }),
        r.d(t, "b", function () {
          return _;
        });
      var e = r(8),
        i = r.n(e),
        u = r(40),
        o = r(6),
        a = r(3),
        s = r(54),
        c = r(16),
        f = 4 * a.d;
      function l() {
        var n = o.E.get();
        if ("REQUESTING_CODE" === n.type && n.state) {
          var t = n.state;
          if (
            (t.requestTime && !(0, a.m)(t.requestTime, f)) ||
            ("CODE_VERIFY_ERROR" === t.type &&
              ("missing" === t.reason || "stale" === t.reason))
          ) {
            var r = {
              type: "ENTERING_PHONE_NUMBER",
              prefill: { country: n.country, localNumber: n.localNumber },
            };
            return o.E.set(r).then(() => ({
              state: "unregistered",
              registrationAlert: o.D.get(),
              registrationStore: r,
            }));
          }
        }
        return {
          state: "unregistered",
          registrationAlert: o.D.get(),
          registrationStore: n,
        };
      }
      function d() {
        var n = o.O.get();
        if ("disabled" === n.status)
          return { reminder: { shouldRemind: !1 }, isEnabled: !1 };
        var t = !(0, a.o)(n.nextTime),
          r = t ? { shouldRemind: t, hasError: !1 } : { shouldRemind: t };
        return { isEnabled: !0, hasEmail: n.hasEmail, reminder: r };
      }
      function h() {
        return {
          jid: o.t.get(),
          pushname: o.C.get(),
          about: o.a.get() || void 0,
          twoFactor: d(),
        };
      }
      function v(n, t) {
        var r = i()(n, 5),
          e = r[0],
          a = r[1],
          f = r[2],
          l = r[3],
          d = r[4],
          v = o.k.get(),
          p = o.Q.get(),
          g = {},
          _ = o.g.get();
        f.forEach((n) => (g[n] = !0));
        var m,
          y,
          b,
          w,
          k = (0, c.a)(t),
          E = (0, s.f)(l),
          S = E.received,
          A = E.sent,
          O = o.N.get().status,
          I = "inactive";
        return (
          "pending" === o.f.get() &&
            e.length > 0 &&
            !e.some((n) => 0 !== n.msgInfo.unreadMsgCount) &&
            (I = "pending"),
          {
            state: "registered",
            user: h(),
            chats: e,
            contacts: a,
            settings: v,
            verboseSecurity: p,
            blocked: g,
            clockSkew: _,
            serverProps: (0, u.o)(o.I.get()),
            receivedGroupInviteRevokes: S,
            sentGroupInviteRevokes: A,
            hasVoip: o.o.get(),
            status:
              ((m = o.J.get()),
              (y = m.tabLastOpened),
              (b = m.firstTimePost),
              (w = {}),
              y && (w.tabLastOpened = y),
              null == b && (w.showDialogOnFirstSend = !0),
              w),
            jobs: k,
            userNotice: d,
            profilePhotoScreenState: I,
            tosAccepted: O,
          }
        );
      }
      function p() {
        return { state: "deleting" };
      }
      function g() {
        var n = o.g.get(),
          t = o.M.get();
        return null == t
          ? {
              state: "tempBanned",
              clockSkew: n,
              code: "100",
              until: (0, a.D)(),
              duration: 1,
            }
          : {
              state: "tempBanned",
              clockSkew: n,
              code: t.code,
              until: t.until,
              duration: t.duration,
            };
      }
      function _(n) {
        return { state: "error", errorType: n };
      }
    },
    ,
    function (n, t, r) {
      r.d(t, "c", function () {
        return i;
      }),
        r.d(t, "a", function () {
          return u;
        }),
        r.d(t, "b", function () {
          return o;
        }),
        r.d(t, "d", function () {
          return a;
        }),
        r.d(t, "e", function () {
          return s;
        });
      var e = r(2);
      function i(n, t, r) {
        var e = [];
        return n && e.push(n), e.push(t), r && e.push(r), e.join("\n");
      }
      function u(n, t) {
        return `${n ? `**${n}**\n` : ""}${t}`;
      }
      function o(n, t) {
        return n ? `${n}\n\n${t}` : t;
      }
      function a(n) {
        if (null == n) return "text";
        switch (n.type) {
          case e.f.IMAGE:
            return "image";
          case e.f.VIDEO:
            return "video";
          case e.f.LOCATION:
            return "location";
          default:
            return n.type, "document";
        }
      }
      function s(n) {
        return null == n ? "text" : n.type;
      }
    },
    ,
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.r(t),
        r.d(t, "asPrivateStatsSequenceId", function () {
          return h;
        }),
        r.d(t, "getWamTable", function () {
          return _;
        }),
        r.d(t, "redeemPrivateStatsToken", function () {
          return m;
        }),
        r.d(t, "savePrivateStatsToken", function () {
          return y;
        }),
        r.d(t, "privateStatsKillSwitchGetBlockedToken", function () {
          return b;
        }),
        r.d(t, "privateStatsKillSwitchSet", function () {
          return w;
        }),
        r.d(t, "submitInitialAttributes", function () {
          return k;
        }),
        r.d(t, "startWamStore", function () {
          return O;
        }),
        r.d(t, "setContextImplementations", function () {
          return I;
        }),
        r.d(t, "closeWamStore", function () {
          return C;
        }),
        r.d(t, "waitForPrivateChannelSetup", function () {
          return T;
        }),
        r.d(t, "isPrivateChannelSetup", function () {
          return M;
        });
      var e = r(188),
        i = r(5),
        u = r(138),
        o = r(259),
        a = r(6),
        s = r(3),
        c = r(68),
        f = r(17),
        l = r(14),
        d = { frontend: 31, backend: 179 };
      function h(n, t) {
        return "null-psid" === n || l.J.some((t) => t.keyHashInt === n)
          ? `seq-${n}-${t}`
          : null;
      }
      var v = (0, u.a)("wam-dev-4", function (n) {
          n.version(1).stores({ buffers: "key, streamId", meta: "streamId" }),
            n.version(2).stores({ psMeta: "key" });
        }),
        p = class extends i.b {
          constructor() {
            super(v);
          }
        },
        g = null;
      function _() {
        return g || (g = new p()), g;
      }
      function m(n) {
        var t = _();
        return t.transact("rw", ["psMeta"], () =>
          t.stores.psMeta.get({ key: "token" }).then((r) => {
            if (!r) return null;
            if (
              !n(
                { redeemCount: r.redeemCount, creationTs: r.creationTs },
                {
                  maxExpirySeconds: a.I.get().privateStatsTokenMaxExpirySeconds,
                  maxRedeemCount: (0, f.a)(
                    "kaios_privatestats_max_token_redeem_count"
                  ),
                }
              )
            )
              return null;
            var e = Object.assign({}, r, { redeemCount: r.redeemCount + 1 });
            return t.stores.psMeta.put(e).then(() => r.token);
          })
        );
      }
      function y(n) {
        var t = _();
        return t.transact("rw", ["psMeta"], () => {
          var r = {
            key: "token",
            token: n,
            creationTs: (0, s.D)(),
            redeemCount: 1,
          };
          return t.stores.psMeta.put(r).then(() => {});
        });
      }
      function b() {
        return Promise.resolve(a.z.get());
      }
      function w(n) {
        return a.z.set(n).then(() => {});
      }
      function k() {
        WAM.logAttributes([
          ["regular", "private"],
          11,
          0,
          14,
          ["regular", "private"],
          1657,
          0,
          4,
          ["regular"],
          6275,
          0,
          2,
          ["regular", "private"],
          21,
          1,
          !1,
          ["regular", "private"],
          17,
          2,
          "2.2245.7",
        ]);
      }
      var E = new c.a(),
        S = new c.a(),
        A = {
          getStreamId: function (n) {
            return d[n];
          },
          saveBuffer: (n, t, r) => {
            var e = _();
            return e.transact("rw", ["buffers", "meta"], () => {
              var u = [e.stores.buffers.put(t)];
              return (
                "regular" === r && u.push(e.stores.meta.put(n)),
                (0, i.c)(u).then((n) => {})
              );
            });
          },
          finishBuffer: (n) => {
            var t = _();
            return t.transact("rw", ["buffers"], () =>
              t.stores.buffers
                .where("streamId")
                .equals(n)
                .modify({ finished: !0 })
                .then(() => {})
            );
          },
          getStartingSequenceNumbers: (n, t) => {
            var r = _();
            return r.transact("r", ["meta"], () =>
              r.stores.meta.get({ streamId: t }).then((n) => {
                var t = new Map();
                return (
                  t.set("regular", null == n ? void 0 : n.sequenceNumber), t
                );
              })
            );
          },
          getBuffers: () => (0, i.i)(_().stores.buffers.toArray()),
          removeBufferByKey: (n) => (0, i.i)(_().stores.buffers.delete(n)),
          nukeMetrics: () =>
            (0, i.i)(_().stores.delete()).then(() => {
              g = null;
            }),
          updatePrivateStatsIds: function () {
            return E.promise.then((n) =>
              n
                .getPrivateStatsIds()
                .then(
                  (n) => (
                    WAM.logAttributes([
                      ["private"],
                      6833,
                      2,
                      (0, o.a)(a.t.get()),
                    ]),
                    Promise.resolve().then(S.resolve()),
                    n
                  )
                )
            );
          },
          redeemPrivateStatsToken: m,
          savePrivateStatsToken: y,
          privateStatsKillSwitchGetBlockedToken: b,
          privateStatsKillSwitchSet: w,
        };
      function O() {
        (0, e.j)(A);
      }
      function I(n) {
        E.resolve(n);
      }
      function C() {
        g && g.close(), (0, e.a)(), (S = new c.a()), (E = new c.a());
      }
      function T() {
        return S.promise;
      }
      function M() {
        return S.resolveWasCalled();
      }
    },
    function (n, t, r) {
      r.d(t, "a", function () {
        return e.b;
      }),
        r.d(t, "b", function () {
          return o;
        }),
        r.d(t, "c", function () {
          return d;
        }),
        r.d(t, "d", function () {
          return v;
        }),
        r.d(t, "e", function () {
          return p;
        }),
        r.d(t, "f", function () {
          return _;
        });
      var e = r(158),
        i = new Map([
          [129335, 0],
          [129336, 1],
          [129337, 1],
          [128675, 1],
          [128373, 1],
          [128582, 0],
          [128583, 1],
          [128581, 0],
          [128111, 0],
          [128110, 1],
          [129318, 1],
          [128113, 1],
          [129496, 0],
          [128115, 1],
          [128694, 1],
          [128119, 1],
          [129502, 0],
          [127940, 1],
          [127939, 1],
          [129495, 0],
          [129494, 1],
          [9977, 1],
          [129503, 0],
          [128129, 0],
          [128130, 1],
          [128692, 1],
          [128693, 1],
          [128134, 0],
          [128135, 0],
          [129501, 1],
          [129498, 0],
          [129500, 0],
          [129499, 0],
          [127947, 1],
          [127948, 1],
          [127946, 1],
          [128589, 0],
          [128590, 0],
          [128587, 0],
          [129497, 0],
          [129340, 1],
          [129341, 1],
          [129342, 0],
        ]),
        u = new RegExp("️", "g");
      function o(n) {
        return n > 65535 ? 2 : 1;
      }
      var a = (1 << e.d) - 1;
      function s(n) {
        var t = e.h[n];
        if (null == t) return null;
        var r = t & a,
          i = t >> e.d;
        return {
          chunkId: r,
          remapped: i ? String.fromCodePoint(e.a + i - 1) : n,
        };
      }
      var c = [127995, 127996, 127997, 127998, 127999],
        f = c.map((n) => String.fromCodePoint(n)).join("|"),
        l = new RegExp(f + "|️", "g");
      function d(n) {
        return n.replace(l, "");
      }
      function h(n) {
        if (!n) return null;
        var t = n.codePointAt(0),
          r = i.get(t);
        if (null == r) return null;
        var e = o(t),
          u = n.codePointAt(e);
        return null == u ? r : !c.includes(u) || e + o(u) < n.length ? null : r;
      }
      function v(n, t) {
        var r,
          i = 0,
          a = 0,
          s = t,
          c = 0,
          f = null;
        do {
          var l = n.codePointAt(s);
          if (65039 === l) c += 1;
          else {
            var d = e.g[i - c];
            if (null != d && !d.has(l)) break;
          }
          i++, (s += o(l));
          var v = n.substr(t, s - t),
            p = c > 0 ? ((r = v) ? r.replace(u, "") : r) : v;
          if (p in e.h) (f = p), (a = v.length);
          else {
            var g = h(p);
            if (null != g) {
              var _ = p + (1 === g ? "‍♂" : "‍♀");
              _ in e.h && ((f = _), (a = v.length));
            }
          }
        } while (s < n.length && i - c < e.c);
        return f ? { emojiNormalized: f, maxEmojiCodeunits: a } : null;
      }
      function p(n, t) {
        var r = v(n, t);
        if (!r) return null;
        var e = r.emojiNormalized,
          i = r.maxEmojiCodeunits;
        if (e) {
          var u = s(e);
          return u
            ? {
                normalizedRemapped: u.remapped,
                normalized: e,
                originalLength: i,
                chunkId: u.chunkId,
              }
            : (__LOG__(
                4
              )`Error while parsing emoji, expected emoji not found in emojiToChunk`,
              SEND_LOGS("unexpected-emoji-parsing-error"),
              null);
        }
        return null;
      }
      var g = null;
      function _(n) {
        return n.replace(e.f, (n) => {
          return (
            (t = n),
            g ||
              (g = (function () {
                var n = {};
                for (var t in e.h) {
                  var r = s(t);
                  if (r) {
                    var i = r.remapped;
                    i !== t && (n[i] = t);
                  } else
                    __LOG__(
                      4
                    )`Error while parsing emoji, expected emoji not found in emojiToChunk`,
                      SEND_LOGS("unexpected-emoji-parsing-error");
                }
                return n;
              })()),
            g[t] ||
              (__LOG__(
                4
              )`Cannot map back codepoint [${t}] (codepoint at 0 is ${t.codePointAt(
                0
              )})`,
              SEND_LOGS("emoji-cannon-unmap-pua-codepoint"),
              t)
          );
          var t;
        });
      }
    },
    ,
    ,
    function (n, t, r) {
      r.d(t, "e", function () {
        return e;
      }),
        r.d(t, "c", function () {
          return i;
        }),
        r.d(t, "b", function () {
          return u;
        }),
        r.d(t, "f", function () {
          return o;
        }),
        r.d(t, "d", function () {
          return a;
        }),
        r.d(t, "a", function () {
          return s;
        }),
        r.d(t, "g", function () {
          return c;
        }),
        r.d(t, "h", function () {
          return f;
        });
      var e = "https://kaios.whatsapp.net/static/v1/emoji/160/",
        i = 7,
        u = new RegExp(
          "[#*0-9©®‼⁉™ℹ↔-↙↩↪⌚⌛⌨⏏⏩-⏳⏸-⏺Ⓜ▪▫▶◀◻-◾☀-☄☎☑☔☕☘☝☠☢☣☦☪☮☯☸-☺♀♂♈-♓♟♠♣♥♦♨♻♾♿⚒-⚗⚙⚛⚜⚠⚡⚧⚪⚫⚰⚱⚽⚾⛄⛅⛈⛎⛏⛑⛓⛔⛩⛪⛰-⛵⛷-⛺⛽✂✅✈-✍✏✒✔✖✝✡✨✳✴❄❇❌❎❓-❕❗❣❤➕-➗➡➰➿⤴⤵⬅-⬇⬛⬜⭐⭕〰〽㊗㊙\ud83c-\ud83e]",
          "g"
        ),
        o = new RegExp("[-]", "g"),
        a = 6,
        s = 57344,
        c = [
          null,
          new Set([
            8205, 8419, 127462, 127463, 127464, 127465, 127466, 127467, 127468,
            127469, 127470, 127471, 127472, 127473, 127474, 127475, 127476,
            127477, 127478, 127479, 127480, 127481, 127482, 127483, 127484,
            127485, 127486, 127487, 127995, 127996, 127997, 127998, 127999,
            917607, 917621,
          ]),
          new Set([
            8205, 9760, 9792, 9794, 9877, 9878, 9895, 9992, 10052, 10084, 11035,
            127752, 127787, 127806, 127859, 127868, 127876, 127891, 127908,
            127912, 127979, 127981, 128102, 128103, 128104, 128105, 128168,
            128171, 128187, 128188, 128293, 128295, 128300, 128488, 128640,
            128658, 128999, 129309, 129455, 129456, 129457, 129458, 129459,
            129466, 129468, 129469, 129657, 917602, 917619,
          ]),
          new Set([
            8205, 9792, 9794, 9877, 9878, 9992, 127806, 127859, 127868, 127876,
            127891, 127908, 127912, 127979, 127981, 128187, 128188, 128295,
            128300, 128640, 128658, 129309, 129455, 129456, 129457, 129458,
            129459, 129468, 129469, 917605, 917619, 917620, 917623,
          ]),
          new Set([
            8205, 11035, 128102, 128103, 128104, 128105, 128139, 129489, 917603,
            917612, 917614, 917624,
          ]),
          new Set([
            8205, 128104, 128105, 129489, 917607, 917619, 917620, 917631,
          ]),
          new Set([
            127995, 127996, 127997, 127998, 127999, 128102, 128103, 128104,
            128105, 128999, 917631,
          ]),
        ],
        f = {
          "😂": 0,
          "😍": 0,
          "❤": 0,
          "😊": 0,
          "😘": 0,
          "😅": 0,
          "😁": 0,
          "😭": 0,
          "🙏": 0,
          "🙏🏻": 64,
          "🙏🏼": 128,
          "🙏🏽": 192,
          "🙏🏾": 256,
          "🙏🏿": 320,
          "💔": 0,
          "😎": 0,
          "💕": 0,
          "🎂": 0,
          "🤣": 0,
          "😆": 0,
          "😋": 0,
          "😢": 0,
          "😇": 0,
          "😉": 0,
          "💖": 0,
          "👌": 0,
          "👌🏻": 384,
          "👌🏼": 448,
          "👌🏽": 512,
          "👌🏾": 576,
          "👌🏿": 640,
          "😔": 0,
          "😏": 0,
          "😌": 0,
          "🔥": 0,
          "🎉": 0,
          "✌": 1,
          "✌🏻": 705,
          "✌🏼": 769,
          "✌🏽": 833,
          "✌🏾": 897,
          "✌🏿": 961,
          "🙄": 1,
          "😀": 1,
          "😪": 1,
          "🤗": 1,
          "💪": 1,
          "💪🏻": 1025,
          "💪🏼": 1089,
          "💪🏽": 1153,
          "💪🏾": 1217,
          "💪🏿": 1281,
          "😄": 1,
          "♥": 1,
          "💞": 1,
          "😒": 1,
          "😑": 1,
          "☺": 1,
          "😜": 1,
          "😃": 1,
          "🥲": 1,
          "🙂": 1,
          "🙃": 1,
          "🥰": 1,
          "😗": 1,
          "😙": 1,
          "😚": 1,
          "😛": 1,
          "😝": 1,
          "🤪": 1,
          "🤨": 1,
          "🧐": 1,
          "🤓": 1,
          "🥸": 1,
          "🤩": 1,
          "🥳": 1,
          "😞": 1,
          "😟": 1,
          "😕": 1,
          "🙁": 1,
          "☹": 1,
          "😣": 1,
          "😖": 1,
          "😫": 1,
          "😩": 1,
          "🥺": 1,
          "😤": 1,
          "😠": 1,
          "😡": 1,
          "🤬": 1,
          "🤯": 1,
          "😳": 1,
          "🥵": 1,
          "🥶": 1,
          "😶‍🌫": 1345,
          "😱": 1,
          "😨": 1,
          "😰": 1,
          "😥": 1,
          "😓": 1,
          "🤔": 1,
          "🤭": 1,
          "🤫": 1,
          "🤥": 1,
          "😶": 1,
          "😐": 1,
          "😬": 1,
          "😯": 1,
          "😦": 1,
          "😧": 1,
          "😮": 1,
          "😲": 2,
          "🥱": 2,
          "😴": 2,
          "🤤": 2,
          "😮‍💨": 1410,
          "😵": 2,
          "😵‍💫": 1474,
          "🤐": 2,
          "🥴": 2,
          "🤢": 2,
          "🤮": 2,
          "🤧": 2,
          "😷": 2,
          "🤒": 2,
          "🤕": 2,
          "🤑": 2,
          "🤠": 2,
          "😈": 2,
          "👿": 2,
          "👹": 2,
          "👺": 2,
          "🤡": 2,
          "💩": 2,
          "👻": 2,
          "💀": 2,
          "☠": 2,
          "👽": 2,
          "👾": 2,
          "🤖": 2,
          "🎃": 2,
          "😺": 2,
          "😸": 2,
          "😹": 2,
          "😻": 2,
          "😼": 2,
          "😽": 2,
          "🙀": 2,
          "😿": 2,
          "😾": 2,
          "🤲": 2,
          "🤲🏻": 1538,
          "🤲🏼": 1602,
          "🤲🏽": 1666,
          "🤲🏾": 1730,
          "🤲🏿": 1794,
          "👐": 2,
          "👐🏻": 1858,
          "👐🏼": 1922,
          "👐🏽": 1986,
          "👐🏾": 2050,
          "👐🏿": 2114,
          "🙌": 2,
          "🙌🏻": 2178,
          "🙌🏼": 2242,
          "🙌🏽": 2306,
          "🙌🏾": 2370,
          "🙌🏿": 2434,
          "👏": 2,
          "👏🏻": 2498,
          "👏🏼": 2562,
          "👏🏽": 2626,
          "👏🏾": 2690,
          "👏🏿": 2754,
          "🤝": 2,
          "🤝🏻": 2818,
          "🤝🏼": 2882,
          "🤝🏽": 2946,
          "🤝🏾": 3010,
          "🤝🏿": 3074,
          "👍": 2,
          "👍🏻": 3138,
          "👍🏼": 3202,
          "👍🏽": 3266,
          "👍🏾": 3330,
          "👍🏿": 3394,
          "👎": 3,
          "👎🏻": 3459,
          "👎🏼": 3523,
          "👎🏽": 3587,
          "👎🏾": 3651,
          "👎🏿": 3715,
          "👊": 3,
          "👊🏻": 3779,
          "👊🏼": 3843,
          "👊🏽": 3907,
          "👊🏾": 3971,
          "👊🏿": 4035,
          "✊": 3,
          "✊🏻": 4099,
          "✊🏼": 4163,
          "✊🏽": 4227,
          "✊🏾": 4291,
          "✊🏿": 4355,
          "🤛": 3,
          "🤛🏻": 4419,
          "🤛🏼": 4483,
          "🤛🏽": 4547,
          "🤛🏾": 4611,
          "🤛🏿": 4675,
          "🤜": 3,
          "🤜🏻": 4739,
          "🤜🏼": 4803,
          "🤜🏽": 4867,
          "🤜🏾": 4931,
          "🤜🏿": 4995,
          "🤞": 3,
          "🤞🏻": 5059,
          "🤞🏼": 5123,
          "🤞🏽": 5187,
          "🤞🏾": 5251,
          "🤞🏿": 5315,
          "🤟": 3,
          "🤟🏻": 5379,
          "🤟🏼": 5443,
          "🤟🏽": 5507,
          "🤟🏾": 5571,
          "🤟🏿": 5635,
          "🤘": 3,
          "🤘🏻": 5699,
          "🤘🏼": 5763,
          "🤘🏽": 5827,
          "🤘🏾": 5891,
          "🤘🏿": 5955,
          "🤌": 3,
          "🤌🏻": 6019,
          "🤌🏼": 6083,
          "🤌🏽": 6147,
          "🤌🏾": 6211,
          "🤌🏿": 6275,
          "🤏": 3,
          "🤏🏻": 6339,
          "🤏🏼": 6403,
          "🤏🏽": 6467,
          "🤏🏾": 6531,
          "🤏🏿": 6595,
          "👈": 3,
          "👈🏻": 6659,
          "👈🏼": 6723,
          "👈🏽": 6787,
          "👈🏾": 6851,
          "👈🏿": 6915,
          "👉": 3,
          "👉🏻": 6979,
          "👉🏼": 7043,
          "👉🏽": 7107,
          "👉🏾": 7171,
          "👉🏿": 7235,
          "👆": 4,
          "👆🏻": 7300,
          "👆🏼": 7364,
          "👆🏽": 7428,
          "👆🏾": 7492,
          "👆🏿": 7556,
          "👇": 4,
          "👇🏻": 7620,
          "👇🏼": 7684,
          "👇🏽": 7748,
          "👇🏾": 7812,
          "👇🏿": 7876,
          "☝": 4,
          "☝🏻": 7940,
          "☝🏼": 8004,
          "☝🏽": 8068,
          "☝🏾": 8132,
          "☝🏿": 8196,
          "✋": 4,
          "✋🏻": 8260,
          "✋🏼": 8324,
          "✋🏽": 8388,
          "✋🏾": 8452,
          "✋🏿": 8516,
          "🤚": 4,
          "🤚🏻": 8580,
          "🤚🏼": 8644,
          "🤚🏽": 8708,
          "🤚🏾": 8772,
          "🤚🏿": 8836,
          "🖐": 4,
          "🖐🏻": 8900,
          "🖐🏼": 8964,
          "🖐🏽": 9028,
          "🖐🏾": 9092,
          "🖐🏿": 9156,
          "🖖": 4,
          "🖖🏻": 9220,
          "🖖🏼": 9284,
          "🖖🏽": 9348,
          "🖖🏾": 9412,
          "🖖🏿": 9476,
          "👋": 4,
          "👋🏻": 9540,
          "👋🏼": 9604,
          "👋🏽": 9668,
          "👋🏾": 9732,
          "👋🏿": 9796,
          "🤙": 4,
          "🤙🏻": 9860,
          "🤙🏼": 9924,
          "🤙🏽": 9988,
          "🤙🏾": 10052,
          "🤙🏿": 10116,
          "🦾": 4,
          "🖕": 4,
          "🖕🏻": 10180,
          "🖕🏼": 10244,
          "🖕🏽": 10308,
          "🖕🏾": 10372,
          "🖕🏿": 10436,
          "✍": 4,
          "✍🏻": 10500,
          "✍🏼": 10564,
          "✍🏽": 10628,
          "✍🏾": 10692,
          "✍🏿": 10756,
          "🦶": 4,
          "🦶🏻": 10820,
          "🦶🏼": 10884,
          "🦶🏽": 10948,
          "🦶🏾": 11012,
          "🦶🏿": 11076,
          "🦵": 5,
          "🦵🏻": 11141,
          "🦵🏼": 11205,
          "🦵🏽": 11269,
          "🦵🏾": 11333,
          "🦵🏿": 11397,
          "🦿": 5,
          "💄": 5,
          "💋": 5,
          "👄": 5,
          "🦷": 5,
          "👅": 5,
          "👂": 5,
          "👂🏻": 11461,
          "👂🏼": 11525,
          "👂🏽": 11589,
          "👂🏾": 11653,
          "👂🏿": 11717,
          "🦻": 5,
          "🦻🏻": 11781,
          "🦻🏼": 11845,
          "🦻🏽": 11909,
          "🦻🏾": 11973,
          "🦻🏿": 12037,
          "👃": 5,
          "👃🏻": 12101,
          "👃🏼": 12165,
          "👃🏽": 12229,
          "👃🏾": 12293,
          "👃🏿": 12357,
          "👣": 5,
          "👁": 5,
          "👀": 5,
          "🫀": 5,
          "🫁": 5,
          "🧠": 5,
          "🗣": 5,
          "👤": 5,
          "👥": 5,
          "🫂": 5,
          "👶": 5,
          "👶🏻": 12421,
          "👶🏼": 12485,
          "👶🏽": 12549,
          "👶🏾": 12613,
          "👶🏿": 12677,
          "👧": 5,
          "👧🏻": 12741,
          "👧🏼": 12805,
          "👧🏽": 12869,
          "👧🏾": 12933,
          "👧🏿": 12997,
          "🧒": 5,
          "🧒🏻": 13061,
          "🧒🏼": 13125,
          "🧒🏽": 13189,
          "🧒🏾": 13253,
          "🧒🏿": 13317,
          "👦": 5,
          "👦🏻": 13381,
          "👦🏼": 13445,
          "👦🏽": 13509,
          "👦🏾": 13573,
          "👦🏿": 13637,
          "👩": 5,
          "👩🏻": 13701,
          "👩🏼": 13765,
          "👩🏽": 13829,
          "👩🏾": 13893,
          "👩🏿": 13957,
          "🧑": 6,
          "🧑🏻": 14022,
          "🧑🏼": 14086,
          "🧑🏽": 14150,
          "🧑🏾": 14214,
          "🧑🏿": 14278,
          "👨": 6,
          "👨🏻": 14342,
          "👨🏼": 14406,
          "👨🏽": 14470,
          "👨🏾": 14534,
          "👨🏿": 14598,
          "👩🏻‍🦱": 14662,
          "👩🏼‍🦱": 14726,
          "👩🏽‍🦱": 14790,
          "👩🏾‍🦱": 14854,
          "👩🏿‍🦱": 14918,
          "👩‍🦱": 14982,
          "🧑🏻‍🦱": 15046,
          "🧑🏼‍🦱": 15110,
          "🧑🏽‍🦱": 15174,
          "🧑🏾‍🦱": 15238,
          "🧑🏿‍🦱": 15302,
          "🧑‍🦱": 15366,
          "👨🏻‍🦱": 15430,
          "👨🏼‍🦱": 15494,
          "👨🏽‍🦱": 15558,
          "👨🏾‍🦱": 15622,
          "👨🏿‍🦱": 15686,
          "👨‍🦱": 15750,
          "👩🏻‍🦰": 15814,
          "👩🏼‍🦰": 15878,
          "👩🏽‍🦰": 15942,
          "👩🏾‍🦰": 16006,
          "👩🏿‍🦰": 16070,
          "👩‍🦰": 16134,
          "🧑🏻‍🦰": 16198,
          "🧑🏼‍🦰": 16262,
          "🧑🏽‍🦰": 16326,
          "🧑🏾‍🦰": 16390,
          "🧑🏿‍🦰": 16454,
          "🧑‍🦰": 16518,
          "👨🏻‍🦰": 16582,
          "👨🏼‍🦰": 16646,
          "👨🏽‍🦰": 16710,
          "👨🏾‍🦰": 16774,
          "👨🏿‍🦰": 16838,
          "👨‍🦰": 16902,
          "👱🏻‍♀": 16966,
          "👱🏻‍♂": 17030,
          "👱🏼‍♀": 17094,
          "👱🏼‍♂": 17158,
          "👱🏽‍♀": 17222,
          "👱🏽‍♂": 17286,
          "👱🏾‍♀": 17350,
          "👱🏾‍♂": 17414,
          "👱🏿‍♀": 17478,
          "👱🏿‍♂": 17542,
          "👱‍♀": 17606,
          "👱‍♂": 17670,
          "👩🏻‍🦳": 17734,
          "👩🏼‍🦳": 17798,
          "👩🏽‍🦳": 17862,
          "👩🏾‍🦳": 17926,
          "👩🏿‍🦳": 17990,
          "👩‍🦳": 18054,
          "🧑🏻‍🦳": 18118,
          "🧑🏼‍🦳": 18182,
          "🧑🏽‍🦳": 18246,
          "🧑🏾‍🦳": 18310,
          "🧑🏿‍🦳": 18374,
          "🧑‍🦳": 18438,
          "👨🏻‍🦳": 18503,
          "👨🏼‍🦳": 18567,
          "👨🏽‍🦳": 18631,
          "👨🏾‍🦳": 18695,
          "👨🏿‍🦳": 18759,
          "👨‍🦳": 18823,
          "👩🏻‍🦲": 18887,
          "👩🏼‍🦲": 18951,
          "👩🏽‍🦲": 19015,
          "👩🏾‍🦲": 19079,
          "👩🏿‍🦲": 19143,
          "👩‍🦲": 19207,
          "🧑🏻‍🦲": 19271,
          "🧑🏼‍🦲": 19335,
          "🧑🏽‍🦲": 19399,
          "🧑🏾‍🦲": 19463,
          "🧑🏿‍🦲": 19527,
          "🧑‍🦲": 19591,
          "👨🏻‍🦲": 19655,
          "👨🏼‍🦲": 19719,
          "👨🏽‍🦲": 19783,
          "👨🏾‍🦲": 19847,
          "👨🏿‍🦲": 19911,
          "👨‍🦲": 19975,
          "🧔": 7,
          "🧔🏻": 20039,
          "🧔🏻‍♀": 20103,
          "🧔🏼": 20167,
          "🧔🏼‍♀": 20231,
          "🧔🏽": 20295,
          "🧔🏽‍♀": 20359,
          "🧔🏾": 20423,
          "🧔🏾‍♀": 20487,
          "🧔🏿": 20551,
          "🧔🏿‍♀": 20615,
          "🧔‍♀": 20679,
          "👵": 7,
          "👵🏻": 20743,
          "👵🏼": 20807,
          "👵🏽": 20871,
          "👵🏾": 20935,
          "👵🏿": 20999,
          "🧓": 7,
          "🧓🏻": 21063,
          "🧓🏼": 21127,
          "🧓🏽": 21191,
          "🧓🏾": 21255,
          "🧓🏿": 21319,
          "👴": 7,
          "👴🏻": 21383,
          "👴🏼": 21447,
          "👴🏽": 21511,
          "👴🏾": 21575,
          "👴🏿": 21639,
          "👲": 7,
          "👲🏻": 21703,
          "👲🏼": 21767,
          "👲🏽": 21831,
          "👲🏾": 21895,
          "👲🏿": 21959,
          "👳🏻‍♀": 22023,
          "👳🏻‍♂": 22087,
          "👳🏼‍♀": 22151,
          "👳🏼‍♂": 22215,
          "👳🏽‍♀": 22279,
          "👳🏽‍♂": 22343,
          "👳🏾‍♀": 22407,
          "👳🏾‍♂": 22471,
          "👳🏿‍♀": 22535,
          "👳🏿‍♂": 22599,
          "👳‍♀": 22663,
          "👳‍♂": 22727,
          "🧕": 8,
          "🧕🏻": 22792,
          "🧕🏼": 22856,
          "🧕🏽": 22920,
          "🧕🏾": 22984,
          "🧕🏿": 23048,
          "👮🏻‍♀": 23112,
          "👮🏻‍♂": 23176,
          "👮🏼‍♀": 23240,
          "👮🏼‍♂": 23304,
          "👮🏽‍♀": 23368,
          "👮🏽‍♂": 23432,
          "👮🏾‍♀": 23496,
          "👮🏾‍♂": 23560,
          "👮🏿‍♀": 23624,
          "👮🏿‍♂": 23688,
          "👮‍♀": 23752,
          "👮‍♂": 23816,
          "👷🏻‍♀": 23880,
          "👷🏻‍♂": 23944,
          "👷🏼‍♀": 24008,
          "👷🏼‍♂": 24072,
          "👷🏽‍♀": 24136,
          "👷🏽‍♂": 24200,
          "👷🏾‍♀": 24264,
          "👷🏾‍♂": 24328,
          "👷🏿‍♀": 24392,
          "👷🏿‍♂": 24456,
          "👷‍♀": 24520,
          "👷‍♂": 24584,
          "💂🏻‍♀": 24648,
          "💂🏻‍♂": 24712,
          "💂🏼‍♀": 24776,
          "💂🏼‍♂": 24840,
          "💂🏽‍♀": 24904,
          "💂🏽‍♂": 24968,
          "💂🏾‍♀": 25032,
          "💂🏾‍♂": 25096,
          "💂🏿‍♀": 25160,
          "💂🏿‍♂": 25224,
          "💂‍♀": 25288,
          "💂‍♂": 25352,
          "🕵🏻‍♀": 25416,
          "🕵🏻‍♂": 25480,
          "🕵🏼‍♀": 25544,
          "🕵🏼‍♂": 25608,
          "🕵🏽‍♀": 25672,
          "🕵🏽‍♂": 25736,
          "🕵🏾‍♀": 25800,
          "🕵🏾‍♂": 25864,
          "🕵🏿‍♀": 25928,
          "🕵🏿‍♂": 25992,
          "🕵‍♀": 26056,
          "🕵‍♂": 26120,
          "👩🏻‍⚕": 26184,
          "👩🏼‍⚕": 26248,
          "👩🏽‍⚕": 26312,
          "👩🏾‍⚕": 26376,
          "👩🏿‍⚕": 26440,
          "👩‍⚕": 26504,
          "🧑🏻‍⚕": 26568,
          "🧑🏼‍⚕": 26632,
          "🧑🏽‍⚕": 26696,
          "🧑🏾‍⚕": 26760,
          "🧑🏿‍⚕": 26824,
          "🧑‍⚕": 26888,
          "👨🏻‍⚕": 26952,
          "👨🏼‍⚕": 27016,
          "👨🏽‍⚕": 27080,
          "👨🏾‍⚕": 27144,
          "👨🏿‍⚕": 27208,
          "👨‍⚕": 27272,
          "👩🏻‍🌾": 27337,
          "👩🏼‍🌾": 27401,
          "👩🏽‍🌾": 27465,
          "👩🏾‍🌾": 27529,
          "👩🏿‍🌾": 27593,
          "👩‍🌾": 27657,
          "🧑🏻‍🌾": 27721,
          "🧑🏼‍🌾": 27785,
          "🧑🏽‍🌾": 27849,
          "🧑🏾‍🌾": 27913,
          "🧑🏿‍🌾": 27977,
          "🧑‍🌾": 28041,
          "👨🏻‍🌾": 28105,
          "👨🏼‍🌾": 28169,
          "👨🏽‍🌾": 28233,
          "👨🏾‍🌾": 28297,
          "👨🏿‍🌾": 28361,
          "👨‍🌾": 28425,
          "👩🏻‍🍳": 28489,
          "👩🏼‍🍳": 28553,
          "👩🏽‍🍳": 28617,
          "👩🏾‍🍳": 28681,
          "👩🏿‍🍳": 28745,
          "👩‍🍳": 28809,
          "🧑🏻‍🍳": 28873,
          "🧑🏼‍🍳": 28937,
          "🧑🏽‍🍳": 29001,
          "🧑🏾‍🍳": 29065,
          "🧑🏿‍🍳": 29129,
          "🧑‍🍳": 29193,
          "👨🏻‍🍳": 29257,
          "👨🏼‍🍳": 29321,
          "👨🏽‍🍳": 29385,
          "👨🏾‍🍳": 29449,
          "👨🏿‍🍳": 29513,
          "👨‍🍳": 29577,
          "👩🏻‍🎓": 29641,
          "👩🏼‍🎓": 29705,
          "👩🏽‍🎓": 29769,
          "👩🏾‍🎓": 29833,
          "👩🏿‍🎓": 29897,
          "👩‍🎓": 29961,
          "🧑🏻‍🎓": 30025,
          "🧑🏼‍🎓": 30089,
          "🧑🏽‍🎓": 30153,
          "🧑🏾‍🎓": 30217,
          "🧑🏿‍🎓": 30281,
          "🧑‍🎓": 30345,
          "👨🏻‍🎓": 30409,
          "👨🏼‍🎓": 30473,
          "👨🏽‍🎓": 30537,
          "👨🏾‍🎓": 30601,
          "👨🏿‍🎓": 30665,
          "👨‍🎓": 30729,
          "👩🏻‍🎤": 30793,
          "👩🏼‍🎤": 30857,
          "👩🏽‍🎤": 30921,
          "👩🏾‍🎤": 30985,
          "👩🏿‍🎤": 31049,
          "👩‍🎤": 31113,
          "🧑🏻‍🎤": 31177,
          "🧑🏼‍🎤": 31241,
          "🧑🏽‍🎤": 31305,
          "🧑🏾‍🎤": 31369,
          "🧑🏿‍🎤": 31433,
          "🧑‍🎤": 31497,
          "👨🏻‍🎤": 31561,
          "👨🏼‍🎤": 31625,
          "👨🏽‍🎤": 31689,
          "👨🏾‍🎤": 31753,
          "👨🏿‍🎤": 31817,
          "👨‍🎤": 31881,
          "👩🏻‍🏫": 31946,
          "👩🏼‍🏫": 32010,
          "👩🏽‍🏫": 32074,
          "👩🏾‍🏫": 32138,
          "👩🏿‍🏫": 32202,
          "👩‍🏫": 32266,
          "🧑🏻‍🏫": 32330,
          "🧑🏼‍🏫": 32394,
          "🧑🏽‍🏫": 32458,
          "🧑🏾‍🏫": 32522,
          "🧑🏿‍🏫": 32586,
          "🧑‍🏫": 32650,
          "👨🏻‍🏫": 32714,
          "👨🏼‍🏫": 32778,
          "👨🏽‍🏫": 32842,
          "👨🏾‍🏫": 32906,
          "👨🏿‍🏫": 32970,
          "👨‍🏫": 33034,
          "👩🏻‍🏭": 33098,
          "👩🏼‍🏭": 33162,
          "👩🏽‍🏭": 33226,
          "👩🏾‍🏭": 33290,
          "👩🏿‍🏭": 33354,
          "👩‍🏭": 33418,
          "🧑🏻‍🏭": 33482,
          "🧑🏼‍🏭": 33546,
          "🧑🏽‍🏭": 33610,
          "🧑🏾‍🏭": 33674,
          "🧑🏿‍🏭": 33738,
          "🧑‍🏭": 33802,
          "👨🏻‍🏭": 33866,
          "👨🏼‍🏭": 33930,
          "👨🏽‍🏭": 33994,
          "👨🏾‍🏭": 34058,
          "👨🏿‍🏭": 34122,
          "👨‍🏭": 34186,
          "👩🏻‍💻": 34250,
          "👩🏼‍💻": 34314,
          "👩🏽‍💻": 34378,
          "👩🏾‍💻": 34442,
          "👩🏿‍💻": 34506,
          "👩‍💻": 34570,
          "🧑🏻‍💻": 34634,
          "🧑🏼‍💻": 34698,
          "🧑🏽‍💻": 34762,
          "🧑🏾‍💻": 34826,
          "🧑🏿‍💻": 34890,
          "🧑‍💻": 34954,
          "👨🏻‍💻": 35018,
          "👨🏼‍💻": 35082,
          "👨🏽‍💻": 35146,
          "👨🏾‍💻": 35210,
          "👨🏿‍💻": 35274,
          "👨‍💻": 35338,
          "👩🏻‍💼": 35402,
          "👩🏼‍💼": 35466,
          "👩🏽‍💼": 35530,
          "👩🏾‍💼": 35594,
          "👩🏿‍💼": 35658,
          "👩‍💼": 35722,
          "🧑🏻‍💼": 35786,
          "🧑🏼‍💼": 35850,
          "🧑🏽‍💼": 35914,
          "🧑🏾‍💼": 35978,
          "🧑🏿‍💼": 36042,
          "🧑‍💼": 36106,
          "👨🏻‍💼": 36170,
          "👨🏼‍💼": 36234,
          "👨🏽‍💼": 36298,
          "👨🏾‍💼": 36362,
          "👨🏿‍💼": 36426,
          "👨‍💼": 36490,
          "👩🏻‍🔧": 36555,
          "👩🏼‍🔧": 36619,
          "👩🏽‍🔧": 36683,
          "👩🏾‍🔧": 36747,
          "👩🏿‍🔧": 36811,
          "👩‍🔧": 36875,
          "🧑🏻‍🔧": 36939,
          "🧑🏼‍🔧": 37003,
          "🧑🏽‍🔧": 37067,
          "🧑🏾‍🔧": 37131,
          "🧑🏿‍🔧": 37195,
          "🧑‍🔧": 37259,
          "👨🏻‍🔧": 37323,
          "👨🏼‍🔧": 37387,
          "👨🏽‍🔧": 37451,
          "👨🏾‍🔧": 37515,
          "👨🏿‍🔧": 37579,
          "👨‍🔧": 37643,
          "👩🏻‍🔬": 37707,
          "👩🏼‍🔬": 37771,
          "👩🏽‍🔬": 37835,
          "👩🏾‍🔬": 37899,
          "👩🏿‍🔬": 37963,
          "👩‍🔬": 38027,
          "🧑🏻‍🔬": 38091,
          "🧑🏼‍🔬": 38155,
          "🧑🏽‍🔬": 38219,
          "🧑🏾‍🔬": 38283,
          "🧑🏿‍🔬": 38347,
          "🧑‍🔬": 38411,
          "👨🏻‍🔬": 38475,
          "👨🏼‍🔬": 38539,
          "👨🏽‍🔬": 38603,
          "👨🏾‍🔬": 38667,
          "👨🏿‍🔬": 38731,
          "👨‍🔬": 38795,
          "👩🏻‍🎨": 38859,
          "👩🏼‍🎨": 38923,
          "👩🏽‍🎨": 38987,
          "👩🏾‍🎨": 39051,
          "👩🏿‍🎨": 39115,
          "👩‍🎨": 39179,
          "🧑🏻‍🎨": 39243,
          "🧑🏼‍🎨": 39307,
          "🧑🏽‍🎨": 39371,
          "🧑🏾‍🎨": 39435,
          "🧑🏿‍🎨": 39499,
          "🧑‍🎨": 39563,
          "👨🏻‍🎨": 39627,
          "👨🏼‍🎨": 39691,
          "👨🏽‍🎨": 39755,
          "👨🏾‍🎨": 39819,
          "👨🏿‍🎨": 39883,
          "👨‍🎨": 39947,
          "👩🏻‍🚒": 40011,
          "👩🏼‍🚒": 40075,
          "👩🏽‍🚒": 40139,
          "👩🏾‍🚒": 40203,
          "👩🏿‍🚒": 40267,
          "👩‍🚒": 40331,
          "🧑🏻‍🚒": 40395,
          "🧑🏼‍🚒": 40459,
          "🧑🏽‍🚒": 40523,
          "🧑🏾‍🚒": 40587,
          "🧑🏿‍🚒": 40651,
          "🧑‍🚒": 40715,
          "👨🏻‍🚒": 40779,
          "👨🏼‍🚒": 40843,
          "👨🏽‍🚒": 40907,
          "👨🏾‍🚒": 40971,
          "👨🏿‍🚒": 41035,
          "👨‍🚒": 41099,
          "👩🏻‍✈": 41164,
          "👩🏼‍✈": 41228,
          "👩🏽‍✈": 41292,
          "👩🏾‍✈": 41356,
          "👩🏿‍✈": 41420,
          "👩‍✈": 41484,
          "🧑🏻‍✈": 41548,
          "🧑🏼‍✈": 41612,
          "🧑🏽‍✈": 41676,
          "🧑🏾‍✈": 41740,
          "🧑🏿‍✈": 41804,
          "🧑‍✈": 41868,
          "👨🏻‍✈": 41932,
          "👨🏼‍✈": 41996,
          "👨🏽‍✈": 42060,
          "👨🏾‍✈": 42124,
          "👨🏿‍✈": 42188,
          "👨‍✈": 42252,
          "👩🏻‍🚀": 42316,
          "👩🏼‍🚀": 42380,
          "👩🏽‍🚀": 42444,
          "👩🏾‍🚀": 42508,
          "👩🏿‍🚀": 42572,
          "👩‍🚀": 42636,
          "🧑🏻‍🚀": 42700,
          "🧑🏼‍🚀": 42764,
          "🧑🏽‍🚀": 42828,
          "🧑🏾‍🚀": 42892,
          "🧑🏿‍🚀": 42956,
          "🧑‍🚀": 43020,
          "👨🏻‍🚀": 43084,
          "👨🏼‍🚀": 43148,
          "👨🏽‍🚀": 43212,
          "👨🏾‍🚀": 43276,
          "👨🏿‍🚀": 43340,
          "👨‍🚀": 43404,
          "👩🏻‍⚖": 43468,
          "👩🏼‍⚖": 43532,
          "👩🏽‍⚖": 43596,
          "👩🏾‍⚖": 43660,
          "👩🏿‍⚖": 43724,
          "👩‍⚖": 43788,
          "🧑🏻‍⚖": 43852,
          "🧑🏼‍⚖": 43916,
          "🧑🏽‍⚖": 43980,
          "🧑🏾‍⚖": 44044,
          "🧑🏿‍⚖": 44108,
          "🧑‍⚖": 44172,
          "👨🏻‍⚖": 44236,
          "👨🏼‍⚖": 44300,
          "👨🏽‍⚖": 44364,
          "👨🏾‍⚖": 44428,
          "👨🏿‍⚖": 44492,
          "👨‍⚖": 44556,
          "👰": 12,
          "👰🏻": 44620,
          "👰🏻‍♀": 44684,
          "👰🏻‍♂": 44748,
          "👰🏼": 44812,
          "👰🏼‍♀": 44876,
          "👰🏼‍♂": 44940,
          "👰🏽": 45004,
          "👰🏽‍♀": 45068,
          "👰🏽‍♂": 45132,
          "👰🏾": 45196,
          "👰🏾‍♀": 45260,
          "👰🏾‍♂": 45324,
          "👰🏿": 45388,
          "👰🏿‍♀": 45452,
          "👰🏿‍♂": 45516,
          "👰‍♀": 45580,
          "👰‍♂": 45644,
          "🤵": 13,
          "🤵🏻": 45709,
          "🤵🏻‍♀": 45773,
          "🤵🏻‍♂": 45837,
          "🤵🏼": 45901,
          "🤵🏼‍♀": 45965,
          "🤵🏼‍♂": 46029,
          "🤵🏽": 46093,
          "🤵🏽‍♀": 46157,
          "🤵🏽‍♂": 46221,
          "🤵🏾": 46285,
          "🤵🏾‍♀": 46349,
          "🤵🏾‍♂": 46413,
          "🤵🏿": 46477,
          "🤵🏿‍♀": 46541,
          "🤵🏿‍♂": 46605,
          "🤵‍♀": 46669,
          "🤵‍♂": 46733,
          "👸": 13,
          "👸🏻": 46797,
          "👸🏼": 46861,
          "👸🏽": 46925,
          "👸🏾": 46989,
          "👸🏿": 47053,
          "🤴": 13,
          "🤴🏻": 47117,
          "🤴🏼": 47181,
          "🤴🏽": 47245,
          "🤴🏾": 47309,
          "🤴🏿": 47373,
          "🥷": 13,
          "🥷🏻": 47437,
          "🥷🏼": 47501,
          "🥷🏽": 47565,
          "🥷🏾": 47629,
          "🥷🏿": 47693,
          "🦸🏻‍♀": 47757,
          "🦸🏻‍♂": 47821,
          "🦸🏼‍♀": 47885,
          "🦸🏼‍♂": 47949,
          "🦸🏽‍♀": 48013,
          "🦸🏽‍♂": 48077,
          "🦸🏾‍♀": 48141,
          "🦸🏾‍♂": 48205,
          "🦸🏿‍♀": 48269,
          "🦸🏿‍♂": 48333,
          "🦸‍♀": 48397,
          "🦸‍♂": 48461,
          "🦹🏻‍♀": 48525,
          "🦹🏻‍♂": 48589,
          "🦹🏼‍♀": 48653,
          "🦹🏼‍♂": 48717,
          "🦹🏽‍♀": 48781,
          "🦹🏽‍♂": 48845,
          "🦹🏾‍♀": 48909,
          "🦹🏾‍♂": 48973,
          "🦹🏿‍♀": 49037,
          "🦹🏿‍♂": 49101,
          "🦹‍♀": 49165,
          "🦹‍♂": 49229,
          "🤶": 13,
          "🤶🏻": 49293,
          "🤶🏼": 49357,
          "🤶🏽": 49421,
          "🤶🏾": 49485,
          "🤶🏿": 49549,
          "🧑🏻‍🎄": 49613,
          "🧑🏼‍🎄": 49677,
          "🧑🏽‍🎄": 49741,
          "🧑🏾‍🎄": 49805,
          "🧑🏿‍🎄": 49869,
          "🧑‍🎄": 49933,
          "🎅": 14,
          "🎅🏻": 49998,
          "🎅🏼": 50062,
          "🎅🏽": 50126,
          "🎅🏾": 50190,
          "🎅🏿": 50254,
          "🧙🏻‍♀": 50318,
          "🧙🏻‍♂": 50382,
          "🧙🏼‍♀": 50446,
          "🧙🏼‍♂": 50510,
          "🧙🏽‍♀": 50574,
          "🧙🏽‍♂": 50638,
          "🧙🏾‍♀": 50702,
          "🧙🏾‍♂": 50766,
          "🧙🏿‍♀": 50830,
          "🧙🏿‍♂": 50894,
          "🧙‍♀": 50958,
          "🧙‍♂": 51022,
          "🧝🏻‍♀": 51086,
          "🧝🏻‍♂": 51150,
          "🧝🏼‍♀": 51214,
          "🧝🏼‍♂": 51278,
          "🧝🏽‍♀": 51342,
          "🧝🏽‍♂": 51406,
          "🧝🏾‍♀": 51470,
          "🧝🏾‍♂": 51534,
          "🧝🏿‍♀": 51598,
          "🧝🏿‍♂": 51662,
          "🧝‍♀": 51726,
          "🧝‍♂": 51790,
          "🧛🏻‍♀": 51854,
          "🧛🏻‍♂": 51918,
          "🧛🏼‍♀": 51982,
          "🧛🏼‍♂": 52046,
          "🧛🏽‍♀": 52110,
          "🧛🏽‍♂": 52174,
          "🧛🏾‍♀": 52238,
          "🧛🏾‍♂": 52302,
          "🧛🏿‍♀": 52366,
          "🧛🏿‍♂": 52430,
          "🧛‍♀": 52494,
          "🧛‍♂": 52558,
          "🧟‍♀": 52622,
          "🧟‍♂": 52686,
          "🧞‍♀": 52750,
          "🧞‍♂": 52814,
          "🧜🏻‍♀": 52878,
          "🧜🏻‍♂": 52942,
          "🧜🏼‍♀": 53006,
          "🧜🏼‍♂": 53070,
          "🧜🏽‍♀": 53134,
          "🧜🏽‍♂": 53198,
          "🧜🏾‍♀": 53262,
          "🧜🏾‍♂": 53326,
          "🧜🏿‍♀": 53390,
          "🧜🏿‍♂": 53454,
          "🧜‍♀": 53518,
          "🧜‍♂": 53582,
          "🧚🏻‍♀": 53646,
          "🧚🏻‍♂": 53710,
          "🧚🏼‍♀": 53774,
          "🧚🏼‍♂": 53838,
          "🧚🏽‍♀": 53902,
          "🧚🏽‍♂": 53966,
          "🧚🏾‍♀": 54030,
          "🧚🏾‍♂": 54094,
          "🧚🏿‍♀": 54158,
          "🧚🏿‍♂": 54222,
          "🧚‍♀": 54286,
          "🧚‍♂": 54350,
          "👼": 15,
          "👼🏻": 54415,
          "👼🏼": 54479,
          "👼🏽": 54543,
          "👼🏾": 54607,
          "👼🏿": 54671,
          "🤰": 15,
          "🤰🏻": 54735,
          "🤰🏼": 54799,
          "🤰🏽": 54863,
          "🤰🏾": 54927,
          "🤰🏿": 54991,
          "🤱": 15,
          "🤱🏻": 55055,
          "🤱🏼": 55119,
          "🤱🏽": 55183,
          "🤱🏾": 55247,
          "🤱🏿": 55311,
          "👩🏻‍🍼": 55375,
          "👩🏼‍🍼": 55439,
          "👩🏽‍🍼": 55503,
          "👩🏾‍🍼": 55567,
          "👩🏿‍🍼": 55631,
          "👩‍🍼": 55695,
          "🧑🏻‍🍼": 55759,
          "🧑🏼‍🍼": 55823,
          "🧑🏽‍🍼": 55887,
          "🧑🏾‍🍼": 55951,
          "🧑🏿‍🍼": 56015,
          "🧑‍🍼": 56079,
          "👨🏻‍🍼": 56143,
          "👨🏼‍🍼": 56207,
          "👨🏽‍🍼": 56271,
          "👨🏾‍🍼": 56335,
          "👨🏿‍🍼": 56399,
          "👨‍🍼": 56463,
          "🙇🏻‍♀": 56527,
          "🙇🏻‍♂": 56591,
          "🙇🏼‍♀": 56655,
          "🙇🏼‍♂": 56719,
          "🙇🏽‍♀": 56783,
          "🙇🏽‍♂": 56847,
          "🙇🏾‍♀": 56911,
          "🙇🏾‍♂": 56975,
          "🙇🏿‍♀": 57039,
          "🙇🏿‍♂": 57103,
          "🙇‍♀": 57167,
          "🙇‍♂": 57231,
          "💁🏻‍♀": 57295,
          "💁🏻‍♂": 57359,
          "💁🏼‍♀": 57423,
          "💁🏼‍♂": 57487,
          "💁🏽‍♀": 57551,
          "💁🏽‍♂": 57615,
          "💁🏾‍♀": 57679,
          "💁🏾‍♂": 57743,
          "💁🏿‍♀": 57807,
          "💁🏿‍♂": 57871,
          "💁‍♀": 57935,
          "💁‍♂": 57999,
          "🙅🏻‍♀": 58063,
          "🙅🏻‍♂": 58127,
          "🙅🏼‍♀": 58191,
          "🙅🏼‍♂": 58255,
          "🙅🏽‍♀": 58319,
          "🙅🏽‍♂": 58383,
          "🙅🏾‍♀": 58447,
          "🙅🏾‍♂": 58511,
          "🙅🏿‍♀": 58575,
          "🙅🏿‍♂": 58639,
          "🙅‍♀": 58703,
          "🙅‍♂": 58767,
          "🙆🏻‍♀": 58832,
          "🙆🏻‍♂": 58896,
          "🙆🏼‍♀": 58960,
          "🙆🏼‍♂": 59024,
          "🙆🏽‍♀": 59088,
          "🙆🏽‍♂": 59152,
          "🙆🏾‍♀": 59216,
          "🙆🏾‍♂": 59280,
          "🙆🏿‍♀": 59344,
          "🙆🏿‍♂": 59408,
          "🙆‍♀": 59472,
          "🙆‍♂": 59536,
          "🙋🏻‍♀": 59600,
          "🙋🏻‍♂": 59664,
          "🙋🏼‍♀": 59728,
          "🙋🏼‍♂": 59792,
          "🙋🏽‍♀": 59856,
          "🙋🏽‍♂": 59920,
          "🙋🏾‍♀": 59984,
          "🙋🏾‍♂": 60048,
          "🙋🏿‍♀": 60112,
          "🙋🏿‍♂": 60176,
          "🙋‍♀": 60240,
          "🙋‍♂": 60304,
          "🧏": 16,
          "🧏🏻": 60368,
          "🧏🏻‍♀": 60432,
          "🧏🏻‍♂": 60496,
          "🧏🏼": 60560,
          "🧏🏼‍♀": 60624,
          "🧏🏼‍♂": 60688,
          "🧏🏽": 60752,
          "🧏🏽‍♀": 60816,
          "🧏🏽‍♂": 60880,
          "🧏🏾": 60944,
          "🧏🏾‍♀": 61008,
          "🧏🏾‍♂": 61072,
          "🧏🏿": 61136,
          "🧏🏿‍♀": 61200,
          "🧏🏿‍♂": 61264,
          "🧏‍♀": 61328,
          "🧏‍♂": 61392,
          "🤦🏻‍♀": 61456,
          "🤦🏻‍♂": 61520,
          "🤦🏼‍♀": 61584,
          "🤦🏼‍♂": 61648,
          "🤦🏽‍♀": 61712,
          "🤦🏽‍♂": 61776,
          "🤦🏾‍♀": 61840,
          "🤦🏾‍♂": 61904,
          "🤦🏿‍♀": 61968,
          "🤦🏿‍♂": 62032,
          "🤦‍♀": 62096,
          "🤦‍♂": 62160,
          "🤷🏻‍♀": 62224,
          "🤷🏻‍♂": 62288,
          "🤷🏼‍♀": 62352,
          "🤷🏼‍♂": 62416,
          "🤷🏽‍♀": 62480,
          "🤷🏽‍♂": 62544,
          "🤷🏾‍♀": 62608,
          "🤷🏾‍♂": 62672,
          "🤷🏿‍♀": 62736,
          "🤷🏿‍♂": 62800,
          "🤷‍♀": 62864,
          "🤷‍♂": 62928,
          "🙎🏻‍♀": 62993,
          "🙎🏻‍♂": 63057,
          "🙎🏼‍♀": 63121,
          "🙎🏼‍♂": 63185,
          "🙎🏽‍♀": 63249,
          "🙎🏽‍♂": 63313,
          "🙎🏾‍♀": 63377,
          "🙎🏾‍♂": 63441,
          "🙎🏿‍♀": 63505,
          "🙎🏿‍♂": 63569,
          "🙎‍♀": 63633,
          "🙎‍♂": 63697,
          "🙍🏻‍♀": 63761,
          "🙍🏻‍♂": 63825,
          "🙍🏼‍♀": 63889,
          "🙍🏼‍♂": 63953,
          "🙍🏽‍♀": 64017,
          "🙍🏽‍♂": 64081,
          "🙍🏾‍♀": 64145,
          "🙍🏾‍♂": 64209,
          "🙍🏿‍♀": 64273,
          "🙍🏿‍♂": 64337,
          "🙍‍♀": 64401,
          "🙍‍♂": 64465,
          "💇🏻‍♀": 64529,
          "💇🏻‍♂": 64593,
          "💇🏼‍♀": 64657,
          "💇🏼‍♂": 64721,
          "💇🏽‍♀": 64785,
          "💇🏽‍♂": 64849,
          "💇🏾‍♀": 64913,
          "💇🏾‍♂": 64977,
          "💇🏿‍♀": 65041,
          "💇🏿‍♂": 65105,
          "💇‍♀": 65169,
          "💇‍♂": 65233,
          "💆🏻‍♀": 65297,
          "💆🏻‍♂": 65361,
          "💆🏼‍♀": 65425,
          "💆🏼‍♂": 65489,
          "💆🏽‍♀": 65553,
          "💆🏽‍♂": 65617,
          "💆🏾‍♀": 65681,
          "💆🏾‍♂": 65745,
          "💆🏿‍♀": 65809,
          "💆🏿‍♂": 65873,
          "💆‍♀": 65937,
          "💆‍♂": 66001,
          "🧖": 17,
          "🧖🏻‍♀": 66065,
          "🧖🏻‍♂": 66129,
          "🧖🏼‍♀": 66193,
          "🧖🏼‍♂": 66257,
          "🧖🏽‍♀": 66321,
          "🧖🏽‍♂": 66385,
          "🧖🏾‍♀": 66449,
          "🧖🏾‍♂": 66513,
          "🧖🏿‍♀": 66577,
          "🧖🏿‍♂": 66641,
          "🧖‍♀": 66705,
          "🧖‍♂": 66769,
          "💅": 17,
          "💅🏻": 66833,
          "💅🏼": 66897,
          "💅🏽": 66961,
          "💅🏾": 67025,
          "💅🏿": 67089,
          "🤳": 17,
          "🤳🏻": 67153,
          "🤳🏼": 67217,
          "🤳🏽": 67281,
          "🤳🏾": 67345,
          "🤳🏿": 67409,
          "💃": 18,
          "💃🏻": 67474,
          "💃🏼": 67538,
          "💃🏽": 67602,
          "💃🏾": 67666,
          "💃🏿": 67730,
          "🕺": 18,
          "🕺🏻": 67794,
          "🕺🏼": 67858,
          "🕺🏽": 67922,
          "🕺🏾": 67986,
          "🕺🏿": 68050,
          "👯🏻‍♀": 68114,
          "👯🏻‍♂": 68178,
          "👯🏼‍♀": 68242,
          "👯🏼‍♂": 68306,
          "👯🏽‍♀": 68370,
          "👯🏽‍♂": 68434,
          "👯🏾‍♀": 68498,
          "👯🏾‍♂": 68562,
          "👯🏿‍♀": 68626,
          "👯🏿‍♂": 68690,
          "👯‍♀": 68754,
          "👯‍♂": 68818,
          "🕴": 18,
          "🕴🏻": 68882,
          "🕴🏼": 68946,
          "🕴🏽": 69010,
          "🕴🏾": 69074,
          "🕴🏿": 69138,
          "👩🏻‍🦽": 69202,
          "👩🏼‍🦽": 69266,
          "👩🏽‍🦽": 69330,
          "👩🏾‍🦽": 69394,
          "👩🏿‍🦽": 69458,
          "👩‍🦽": 69522,
          "🧑🏻‍🦽": 69586,
          "🧑🏼‍🦽": 69650,
          "🧑🏽‍🦽": 69714,
          "🧑🏾‍🦽": 69778,
          "🧑🏿‍🦽": 69842,
          "🧑‍🦽": 69906,
          "👨🏻‍🦽": 69970,
          "👨🏼‍🦽": 70034,
          "👨🏽‍🦽": 70098,
          "👨🏾‍🦽": 70162,
          "👨🏿‍🦽": 70226,
          "👨‍🦽": 70290,
          "👩🏻‍🦼": 70354,
          "👩🏼‍🦼": 70418,
          "👩🏽‍🦼": 70482,
          "👩🏾‍🦼": 70546,
          "👩🏿‍🦼": 70610,
          "👩‍🦼": 70674,
          "🧑🏻‍🦼": 70738,
          "🧑🏼‍🦼": 70802,
          "🧑🏽‍🦼": 70866,
          "🧑🏾‍🦼": 70930,
          "🧑🏿‍🦼": 70994,
          "🧑‍🦼": 71058,
          "👨🏻‍🦼": 71122,
          "👨🏼‍🦼": 71186,
          "👨🏽‍🦼": 71250,
          "👨🏾‍🦼": 71314,
          "👨🏿‍🦼": 71378,
          "👨‍🦼": 71442,
          "🚶": 19,
          "🚶🏻‍♀": 71507,
          "🚶🏻‍♂": 71571,
          "🚶🏼‍♀": 71635,
          "🚶🏼‍♂": 71699,
          "🚶🏽‍♀": 71763,
          "🚶🏽‍♂": 71827,
          "🚶🏾‍♀": 71891,
          "🚶🏾‍♂": 71955,
          "🚶🏿‍♀": 72019,
          "🚶🏿‍♂": 72083,
          "🚶‍♀": 72147,
          "🚶‍♂": 72211,
          "👩🏻‍🦯": 72275,
          "👩🏼‍🦯": 72339,
          "👩🏽‍🦯": 72403,
          "👩🏾‍🦯": 72467,
          "👩🏿‍🦯": 72531,
          "👩‍🦯": 72595,
          "🧑🏻‍🦯": 72659,
          "🧑🏼‍🦯": 72723,
          "🧑🏽‍🦯": 72787,
          "🧑🏾‍🦯": 72851,
          "🧑🏿‍🦯": 72915,
          "🧑‍🦯": 72979,
          "👨🏻‍🦯": 73043,
          "👨🏼‍🦯": 73107,
          "👨🏽‍🦯": 73171,
          "👨🏾‍🦯": 73235,
          "👨🏿‍🦯": 73299,
          "👨‍🦯": 73363,
          "🧎": 19,
          "🧎🏻": 73427,
          "🧎🏻‍♀": 73491,
          "🧎🏻‍♂": 73555,
          "🧎🏼": 73619,
          "🧎🏼‍♀": 73683,
          "🧎🏼‍♂": 73747,
          "🧎🏽": 73811,
          "🧎🏽‍♀": 73875,
          "🧎🏽‍♂": 73939,
          "🧎🏾": 74003,
          "🧎🏾‍♀": 74067,
          "🧎🏾‍♂": 74131,
          "🧎🏿": 74195,
          "🧎🏿‍♀": 74259,
          "🧎🏿‍♂": 74323,
          "🧎‍♀": 74387,
          "🧎‍♂": 74451,
          "🏃": 19,
          "🏃🏻‍♀": 74515,
          "🏃🏻‍♂": 74579,
          "🏃🏼‍♀": 74643,
          "🏃🏼‍♂": 74707,
          "🏃🏽‍♀": 74771,
          "🏃🏽‍♂": 74835,
          "🏃🏾‍♀": 74899,
          "🏃🏾‍♂": 74963,
          "🏃🏿‍♀": 75027,
          "🏃🏿‍♂": 75091,
          "🏃‍♀": 75155,
          "🏃‍♂": 75219,
          "🧍": 20,
          "🧍🏻": 75284,
          "🧍🏻‍♀": 75348,
          "🧍🏻‍♂": 75412,
          "🧍🏼": 75476,
          "🧍🏼‍♀": 75540,
          "🧍🏼‍♂": 75604,
          "🧍🏽": 75668,
          "🧍🏽‍♀": 75732,
          "🧍🏽‍♂": 75796,
          "🧍🏾": 75860,
          "🧍🏾‍♀": 75924,
          "🧍🏾‍♂": 75988,
          "🧍🏿": 76052,
          "🧍🏿‍♀": 76116,
          "🧍🏿‍♂": 76180,
          "🧍‍♀": 76244,
          "🧍‍♂": 76308,
          "👫": 20,
          "👫🏻": 76372,
          "👫🏼": 76436,
          "👫🏽": 76500,
          "👫🏾": 76564,
          "👫🏿": 76628,
          "👭": 20,
          "👭🏻": 76692,
          "👭🏼": 76756,
          "👭🏽": 76820,
          "👭🏾": 76884,
          "👭🏿": 76948,
          "👬": 20,
          "👬🏻": 77012,
          "👬🏼": 77076,
          "👬🏽": 77140,
          "👬🏾": 77204,
          "👬🏿": 77268,
          "👩‍❤‍👨": 77332,
          "👩‍❤‍👩": 77396,
          "💑": 20,
          "👨‍❤‍👨": 77460,
          "👩‍❤‍💋‍👨": 77524,
          "👩‍❤‍💋‍👩": 77588,
          "💏": 20,
          "👨‍❤‍💋‍👨": 77652,
          "👨‍👩‍👦": 77716,
          "👨‍👩‍👧": 77780,
          "👨‍👩‍👧‍👦": 77844,
          "👨‍👩‍👦‍👦": 77908,
          "👨‍👩‍👧‍👧": 77972,
          "👩‍👩‍👦": 78036,
          "👩‍👩‍👧": 78100,
          "👩‍👩‍👧‍👦": 78164,
          "👩‍👩‍👦‍👦": 78228,
          "👩‍👩‍👧‍👧": 78292,
          "👨‍👨‍👦": 78356,
          "👨‍👨‍👧": 78420,
          "👨‍👨‍👧‍👦": 78484,
          "👨‍👨‍👦‍👦": 78548,
          "👨‍👨‍👧‍👧": 78612,
          "👩‍👦": 78676,
          "👩‍👧": 78740,
          "👩‍👧‍👦": 78804,
          "👩‍👦‍👦": 78868,
          "👩‍👧‍👧": 78932,
          "👨‍👦": 78996,
          "👨‍👧": 79060,
          "👨‍👧‍👦": 79124,
          "👨‍👦‍👦": 79188,
          "👨‍👧‍👧": 79252,
          "🪢": 20,
          "🧶": 20,
          "🧵": 20,
          "🪡": 20,
          "🧥": 20,
          "🥼": 20,
          "🦺": 21,
          "👚": 21,
          "👕": 21,
          "👖": 21,
          "🩲": 21,
          "🩳": 21,
          "👔": 21,
          "👗": 21,
          "👙": 21,
          "🩱": 21,
          "👘": 21,
          "🥻": 21,
          "🩴": 21,
          "🥿": 21,
          "👠": 21,
          "👡": 21,
          "👢": 21,
          "👞": 21,
          "👟": 21,
          "🥾": 21,
          "🧦": 21,
          "🧤": 21,
          "🧣": 21,
          "🎩": 21,
          "🧢": 21,
          "👒": 21,
          "🎓": 21,
          "⛑": 21,
          "🪖": 21,
          "👑": 21,
          "💍": 21,
          "👝": 21,
          "👛": 21,
          "👜": 21,
          "💼": 21,
          "🎒": 21,
          "🧳": 21,
          "👓": 21,
          "🕶": 21,
          "🥽": 21,
          "🌂": 21,
          "🐶": 21,
          "🐱": 21,
          "🐭": 21,
          "🐹": 21,
          "🐰": 21,
          "🦊": 21,
          "🐻": 21,
          "🐼": 21,
          "🐻‍❄": 79317,
          "🐨": 21,
          "🐯": 21,
          "🦁": 21,
          "🐮": 21,
          "🐷": 21,
          "🐽": 21,
          "🐸": 21,
          "🐵": 21,
          "🙈": 21,
          "🙉": 21,
          "🙊": 21,
          "🐒": 21,
          "🐔": 21,
          "🐧": 21,
          "🐦": 21,
          "🐤": 21,
          "🐣": 21,
          "🐥": 21,
          "🦆": 21,
          "🦅": 21,
          "🦉": 21,
          "🦇": 21,
          "🐺": 21,
          "🐗": 21,
          "🐴": 21,
          "🦄": 22,
          "🐝": 22,
          "🪱": 22,
          "🐛": 22,
          "🦋": 22,
          "🐌": 22,
          "🐞": 22,
          "🐜": 22,
          "🪰": 22,
          "🪲": 22,
          "🪳": 22,
          "🦟": 22,
          "🦗": 22,
          "🕷": 22,
          "🕸": 22,
          "🦂": 22,
          "🐢": 22,
          "🐍": 22,
          "🦎": 22,
          "🦖": 22,
          "🦕": 22,
          "🐙": 22,
          "🦑": 22,
          "🦐": 22,
          "🦞": 22,
          "🦀": 22,
          "🐡": 22,
          "🐠": 22,
          "🐟": 22,
          "🐬": 22,
          "🐳": 22,
          "🐋": 22,
          "🦈": 22,
          "🦭": 22,
          "🐊": 22,
          "🐅": 22,
          "🐆": 22,
          "🦓": 22,
          "🦍": 22,
          "🦧": 22,
          "🦣": 22,
          "🐘": 22,
          "🦛": 22,
          "🦏": 22,
          "🐪": 22,
          "🐫": 22,
          "🦒": 22,
          "🦘": 22,
          "🦬": 22,
          "🐃": 22,
          "🐂": 22,
          "🐄": 22,
          "🐎": 22,
          "🐖": 22,
          "🐏": 22,
          "🐑": 22,
          "🦙": 22,
          "🐐": 22,
          "🦌": 22,
          "🐕": 22,
          "🐩": 22,
          "🦮": 22,
          "🐕‍🦺": 79382,
          "🐈": 22,
          "🐈‍⬛": 79446,
          "🪶": 22,
          "🐓": 22,
          "🦃": 22,
          "🦤": 22,
          "🦚": 22,
          "🦜": 22,
          "🦢": 22,
          "🦩": 22,
          "🕊": 22,
          "🐇": 22,
          "🦝": 23,
          "🦨": 23,
          "🦡": 23,
          "🦫": 23,
          "🦦": 23,
          "🦥": 23,
          "🐁": 23,
          "🐀": 23,
          "🐿": 23,
          "🦔": 23,
          "🐾": 23,
          "🐉": 23,
          "🐲": 23,
          "🌵": 23,
          "🎄": 23,
          "🌲": 23,
          "🌳": 23,
          "🌴": 23,
          "🪵": 23,
          "🌱": 23,
          "🌿": 23,
          "☘": 23,
          "🍀": 23,
          "🎍": 23,
          "🪴": 23,
          "🎋": 23,
          "🍃": 23,
          "🍂": 23,
          "🍁": 23,
          "🍄": 23,
          "🐚": 23,
          "🪨": 23,
          "🌾": 23,
          "💐": 23,
          "🌷": 23,
          "🌹": 23,
          "🥀": 23,
          "🌺": 23,
          "🌸": 23,
          "🌼": 23,
          "🌻": 23,
          "🌞": 23,
          "🌝": 23,
          "🌛": 23,
          "🌜": 23,
          "🌚": 23,
          "🌕": 23,
          "🌖": 23,
          "🌗": 23,
          "🌘": 23,
          "🌑": 23,
          "🌒": 23,
          "🌓": 23,
          "🌔": 23,
          "🌙": 23,
          "🌎": 23,
          "🌍": 23,
          "🌏": 23,
          "🪐": 23,
          "💫": 23,
          "⭐": 23,
          "🌟": 23,
          "✨": 23,
          "⚡": 23,
          "☄": 23,
          "💥": 23,
          "🌪": 23,
          "🌈": 23,
          "☀": 23,
          "🌤": 23,
          "⛅": 23,
          "🌥": 23,
          "☁": 23,
          "🌦": 23,
          "🌧": 23,
          "⛈": 24,
          "🌩": 24,
          "🌨": 24,
          "❄": 24,
          "☃": 24,
          "⛄": 24,
          "🌬": 24,
          "💨": 24,
          "💧": 24,
          "💦": 24,
          "☔": 24,
          "☂": 24,
          "🌊": 24,
          "🌫": 24,
          "🍏": 24,
          "🍎": 24,
          "🍐": 24,
          "🍊": 24,
          "🍋": 24,
          "🍌": 24,
          "🍉": 24,
          "🍇": 24,
          "🍓": 24,
          "🫐": 24,
          "🍈": 24,
          "🍒": 24,
          "🍑": 24,
          "🥭": 24,
          "🍍": 24,
          "🥥": 24,
          "🥝": 24,
          "🍅": 24,
          "🍆": 24,
          "🥑": 24,
          "🥦": 24,
          "🥬": 24,
          "🥒": 24,
          "🌶": 24,
          "🫑": 24,
          "🌽": 24,
          "🥕": 24,
          "🫒": 24,
          "🧄": 24,
          "🧅": 24,
          "🥔": 24,
          "🍠": 24,
          "🥐": 24,
          "🥯": 24,
          "🍞": 24,
          "🥖": 24,
          "🥨": 24,
          "🧀": 24,
          "🥚": 24,
          "🍳": 24,
          "🧈": 24,
          "🥞": 24,
          "🧇": 24,
          "🥓": 24,
          "🥩": 24,
          "🍗": 24,
          "🍖": 24,
          "🦴": 24,
          "🌭": 24,
          "🍔": 24,
          "🍟": 24,
          "🍕": 24,
          "🫓": 24,
          "🥪": 24,
          "🥙": 24,
          "🧆": 24,
          "🌮": 24,
          "🌯": 24,
          "🫔": 24,
          "🥗": 24,
          "🥘": 24,
          "🫕": 25,
          "🥫": 25,
          "🍝": 25,
          "🍜": 25,
          "🍲": 25,
          "🍛": 25,
          "🍣": 25,
          "🍱": 25,
          "🥟": 25,
          "🦪": 25,
          "🍤": 25,
          "🍙": 25,
          "🍚": 25,
          "🍘": 25,
          "🍥": 25,
          "🥠": 25,
          "🥮": 25,
          "🍢": 25,
          "🍡": 25,
          "🍧": 25,
          "🍨": 25,
          "🍦": 25,
          "🥧": 25,
          "🧁": 25,
          "🍰": 25,
          "🍮": 25,
          "🍭": 25,
          "🍬": 25,
          "🍫": 25,
          "🍿": 25,
          "🍩": 25,
          "🍪": 25,
          "🌰": 25,
          "🥜": 25,
          "🍯": 25,
          "🥛": 25,
          "🍼": 25,
          "🫖": 25,
          "☕": 25,
          "🍵": 25,
          "🧃": 25,
          "🥤": 25,
          "🧋": 25,
          "🍶": 25,
          "🍺": 25,
          "🍻": 25,
          "🥂": 25,
          "🍷": 25,
          "🥃": 25,
          "🍸": 25,
          "🍹": 25,
          "🧉": 25,
          "🍾": 25,
          "🧊": 25,
          "🥄": 25,
          "🍴": 25,
          "🍽": 25,
          "🥣": 25,
          "🥡": 25,
          "🥢": 25,
          "🧂": 25,
          "⚽": 25,
          "🏀": 25,
          "🏈": 25,
          "⚾": 25,
          "🥎": 25,
          "🎾": 25,
          "🏐": 25,
          "🏉": 25,
          "🥏": 25,
          "🎱": 25,
          "🪀": 25,
          "🏓": 25,
          "🏸": 25,
          "🏒": 25,
          "🏑": 26,
          "🥍": 26,
          "🏏": 26,
          "🪃": 26,
          "🥅": 26,
          "⛳": 26,
          "🪁": 26,
          "🏹": 26,
          "🎣": 26,
          "🤿": 26,
          "🥊": 26,
          "🥋": 26,
          "🎽": 26,
          "🛹": 26,
          "🛼": 26,
          "🛷": 26,
          "⛸": 26,
          "🥌": 26,
          "🎿": 26,
          "⛷": 26,
          "🏂": 26,
          "🪂": 26,
          "🏋🏻‍♀": 79514,
          "🏋🏻‍♂": 79578,
          "🏋🏼‍♀": 79642,
          "🏋🏼‍♂": 79706,
          "🏋🏽‍♀": 79770,
          "🏋🏽‍♂": 79834,
          "🏋🏾‍♀": 79898,
          "🏋🏾‍♂": 79962,
          "🏋🏿‍♀": 80026,
          "🏋🏿‍♂": 80090,
          "🏋‍♀": 80154,
          "🏋‍♂": 80218,
          "🤼": 26,
          "🤼‍♀": 80282,
          "🤼‍♂": 80346,
          "🤸": 26,
          "🤸🏻‍♀": 80410,
          "🤸🏻‍♂": 80474,
          "🤸🏼‍♀": 80538,
          "🤸🏼‍♂": 80602,
          "🤸🏽‍♀": 80666,
          "🤸🏽‍♂": 80730,
          "🤸🏾‍♀": 80794,
          "🤸🏾‍♂": 80858,
          "🤸🏿‍♀": 80922,
          "🤸🏿‍♂": 80986,
          "🤸‍♀": 81050,
          "🤸‍♂": 81114,
          "⛹": 26,
          "⛹🏻‍♀": 81178,
          "⛹🏻‍♂": 81242,
          "⛹🏼‍♀": 81306,
          "⛹🏼‍♂": 81370,
          "⛹🏽‍♀": 81434,
          "⛹🏽‍♂": 81498,
          "⛹🏾‍♀": 81562,
          "⛹🏾‍♂": 81626,
          "⛹🏿‍♀": 81690,
          "⛹🏿‍♂": 81754,
          "⛹‍♀": 81818,
          "⛹‍♂": 81882,
          "🤺": 26,
          "🤾": 27,
          "🤾🏻‍♀": 81947,
          "🤾🏻‍♂": 82011,
          "🤾🏼‍♀": 82075,
          "🤾🏼‍♂": 82139,
          "🤾🏽‍♀": 82203,
          "🤾🏽‍♂": 82267,
          "🤾🏾‍♀": 82331,
          "🤾🏾‍♂": 82395,
          "🤾🏿‍♀": 82459,
          "🤾🏿‍♂": 82523,
          "🤾‍♀": 82587,
          "🤾‍♂": 82651,
          "🏌": 27,
          "🏌🏻‍♀": 82715,
          "🏌🏻‍♂": 82779,
          "🏌🏼‍♀": 82843,
          "🏌🏼‍♂": 82907,
          "🏌🏽‍♀": 82971,
          "🏌🏽‍♂": 83035,
          "🏌🏾‍♀": 83099,
          "🏌🏾‍♂": 83163,
          "🏌🏿‍♀": 83227,
          "🏌🏿‍♂": 83291,
          "🏌‍♀": 83355,
          "🏌‍♂": 83419,
          "🏇": 27,
          "🏇🏻": 83483,
          "🏇🏼": 83547,
          "🏇🏽": 83611,
          "🏇🏾": 83675,
          "🏇🏿": 83739,
          "🧘": 27,
          "🧘🏻‍♀": 83803,
          "🧘🏻‍♂": 83867,
          "🧘🏼‍♀": 83931,
          "🧘🏼‍♂": 83995,
          "🧘🏽‍♀": 84059,
          "🧘🏽‍♂": 84123,
          "🧘🏾‍♀": 84187,
          "🧘🏾‍♂": 84251,
          "🧘🏿‍♀": 84315,
          "🧘🏿‍♂": 84379,
          "🧘‍♀": 84443,
          "🧘‍♂": 84507,
          "🏄": 27,
          "🏄🏻‍♀": 84571,
          "🏄🏻‍♂": 84635,
          "🏄🏼‍♀": 84699,
          "🏄🏼‍♂": 84763,
          "🏄🏽‍♀": 84827,
          "🏄🏽‍♂": 84891,
          "🏄🏾‍♀": 84955,
          "🏄🏾‍♂": 85019,
          "🏄🏿‍♀": 85083,
          "🏄🏿‍♂": 85147,
          "🏄‍♀": 85211,
          "🏄‍♂": 85275,
          "🏊": 27,
          "🏊🏻‍♀": 85339,
          "🏊🏻‍♂": 85403,
          "🏊🏼‍♀": 85467,
          "🏊🏼‍♂": 85531,
          "🏊🏽‍♀": 85595,
          "🏊🏽‍♂": 85659,
          "🏊🏾‍♀": 85723,
          "🏊🏾‍♂": 85787,
          "🏊🏿‍♀": 85851,
          "🏊🏿‍♂": 85915,
          "🏊‍♀": 85979,
          "🏊‍♂": 86043,
          "🤽": 28,
          "🤽🏻‍♀": 86108,
          "🤽🏻‍♂": 86172,
          "🤽🏼‍♀": 86236,
          "🤽🏼‍♂": 86300,
          "🤽🏽‍♀": 86364,
          "🤽🏽‍♂": 86428,
          "🤽🏾‍♀": 86492,
          "🤽🏾‍♂": 86556,
          "🤽🏿‍♀": 86620,
          "🤽🏿‍♂": 86684,
          "🤽‍♀": 86748,
          "🤽‍♂": 86812,
          "🚣": 28,
          "🚣🏻‍♀": 86876,
          "🚣🏻‍♂": 86940,
          "🚣🏼‍♀": 87004,
          "🚣🏼‍♂": 87068,
          "🚣🏽‍♀": 87132,
          "🚣🏽‍♂": 87196,
          "🚣🏾‍♀": 87260,
          "🚣🏾‍♂": 87324,
          "🚣🏿‍♀": 87388,
          "🚣🏿‍♂": 87452,
          "🚣‍♀": 87516,
          "🚣‍♂": 87580,
          "🧗": 28,
          "🧗🏻‍♀": 87644,
          "🧗🏻‍♂": 87708,
          "🧗🏼‍♀": 87772,
          "🧗🏼‍♂": 87836,
          "🧗🏽‍♀": 87900,
          "🧗🏽‍♂": 87964,
          "🧗🏾‍♀": 88028,
          "🧗🏾‍♂": 88092,
          "🧗🏿‍♀": 88156,
          "🧗🏿‍♂": 88220,
          "🧗‍♀": 88284,
          "🧗‍♂": 88348,
          "🚵": 28,
          "🚵🏻‍♀": 88412,
          "🚵🏻‍♂": 88476,
          "🚵🏼‍♀": 88540,
          "🚵🏼‍♂": 88604,
          "🚵🏽‍♀": 88668,
          "🚵🏽‍♂": 88732,
          "🚵🏾‍♀": 88796,
          "🚵🏾‍♂": 88860,
          "🚵🏿‍♀": 88924,
          "🚵🏿‍♂": 88988,
          "🚵‍♀": 89052,
          "🚵‍♂": 89116,
          "🚴": 28,
          "🚴🏻‍♀": 89180,
          "🚴🏻‍♂": 89244,
          "🚴🏼‍♀": 89308,
          "🚴🏼‍♂": 89372,
          "🚴🏽‍♀": 89436,
          "🚴🏽‍♂": 89500,
          "🚴🏾‍♀": 89564,
          "🚴🏾‍♂": 89628,
          "🚴🏿‍♀": 89692,
          "🚴🏿‍♂": 89756,
          "🚴‍♀": 89820,
          "🚴‍♂": 89884,
          "🏆": 28,
          "🥇": 28,
          "🥈": 28,
          "🥉": 28,
          "🏅": 28,
          "🎖": 28,
          "🏵": 28,
          "🎗": 28,
          "🎫": 28,
          "🎟": 28,
          "🎪": 29,
          "🤹🏻‍♀": 89949,
          "🤹🏻‍♂": 90013,
          "🤹🏼‍♀": 90077,
          "🤹🏼‍♂": 90141,
          "🤹🏽‍♀": 90205,
          "🤹🏽‍♂": 90269,
          "🤹🏾‍♀": 90333,
          "🤹🏾‍♂": 90397,
          "🤹🏿‍♀": 90461,
          "🤹🏿‍♂": 90525,
          "🤹‍♀": 90589,
          "🤹‍♂": 90653,
          "🎭": 29,
          "🩰": 29,
          "🎨": 29,
          "🎬": 29,
          "🎤": 29,
          "🎧": 29,
          "🎼": 29,
          "🎹": 29,
          "🥁": 29,
          "🪘": 29,
          "🎷": 29,
          "🎺": 29,
          "🪗": 29,
          "🎸": 29,
          "🪕": 29,
          "🎻": 29,
          "🎲": 29,
          "♟": 29,
          "🎯": 29,
          "🎳": 29,
          "🎮": 29,
          "🎰": 29,
          "🧩": 29,
          "🚗": 29,
          "🚕": 29,
          "🚙": 29,
          "🚌": 29,
          "🚎": 29,
          "🏎": 29,
          "🚓": 29,
          "🚑": 29,
          "🚒": 29,
          "🚐": 29,
          "🛻": 29,
          "🚚": 29,
          "🚛": 29,
          "🚜": 29,
          "🦯": 29,
          "🦽": 29,
          "🦼": 29,
          "🛴": 29,
          "🚲": 29,
          "🛵": 29,
          "🏍": 29,
          "🛺": 29,
          "🚨": 29,
          "🚔": 29,
          "🚍": 29,
          "🚘": 29,
          "🚖": 29,
          "🚡": 29,
          "🚠": 29,
          "🚟": 29,
          "🚃": 29,
          "🚋": 29,
          "🚞": 29,
          "🚝": 29,
          "🚄": 29,
          "🚅": 29,
          "🚈": 29,
          "🚂": 29,
          "🚆": 29,
          "🚇": 30,
          "🚊": 30,
          "🚉": 30,
          "✈": 30,
          "🛫": 30,
          "🛬": 30,
          "🛩": 30,
          "💺": 30,
          "🛰": 30,
          "🚀": 30,
          "🛸": 30,
          "🚁": 30,
          "🛶": 30,
          "⛵": 30,
          "🚤": 30,
          "🛥": 30,
          "🛳": 30,
          "⛴": 30,
          "🚢": 30,
          "⚓": 30,
          "🪝": 30,
          "⛽": 30,
          "🚧": 30,
          "🚦": 30,
          "🚥": 30,
          "🚏": 30,
          "🗺": 30,
          "🗿": 30,
          "🗽": 30,
          "🗼": 30,
          "🏰": 30,
          "🏯": 30,
          "🏟": 30,
          "🎡": 30,
          "🎢": 30,
          "🎠": 30,
          "⛲": 30,
          "⛱": 30,
          "🏖": 30,
          "🏝": 30,
          "🏜": 30,
          "🌋": 30,
          "⛰": 30,
          "🏔": 30,
          "🗻": 30,
          "🏕": 30,
          "⛺": 30,
          "🛖": 30,
          "🏠": 30,
          "🏡": 30,
          "🏘": 30,
          "🏚": 30,
          "🏗": 30,
          "🏭": 30,
          "🏢": 30,
          "🏬": 30,
          "🏣": 30,
          "🏤": 30,
          "🏥": 30,
          "🏦": 30,
          "🏨": 30,
          "🏪": 30,
          "🏫": 30,
          "🏩": 30,
          "💒": 30,
          "🏛": 30,
          "⛪": 30,
          "🕌": 30,
          "🕍": 30,
          "🛕": 30,
          "🕋": 30,
          "⛩": 30,
          "🛤": 30,
          "🛣": 30,
          "🗾": 30,
          "🎑": 31,
          "🏞": 31,
          "🌅": 31,
          "🌄": 31,
          "🌠": 31,
          "🎇": 31,
          "🎆": 31,
          "🌇": 31,
          "🌆": 31,
          "🏙": 31,
          "🌃": 31,
          "🌌": 31,
          "🌉": 31,
          "🌁": 31,
          "⌚": 31,
          "📱": 31,
          "📲": 31,
          "💻": 31,
          "⌨": 31,
          "🖥": 31,
          "🖨": 31,
          "🖱": 31,
          "🖲": 31,
          "🕹": 31,
          "🗜": 31,
          "💽": 31,
          "💾": 31,
          "💿": 31,
          "📀": 31,
          "📼": 31,
          "📷": 31,
          "📸": 31,
          "📹": 31,
          "🎥": 31,
          "📽": 31,
          "🎞": 31,
          "📞": 31,
          "☎": 31,
          "📟": 31,
          "📠": 31,
          "📺": 31,
          "📻": 31,
          "🎙": 31,
          "🎚": 31,
          "🎛": 31,
          "🧭": 31,
          "⏱": 31,
          "⏲": 31,
          "⏰": 31,
          "🕰": 31,
          "⌛": 31,
          "⏳": 31,
          "📡": 31,
          "🔋": 31,
          "🔌": 31,
          "💡": 31,
          "🔦": 31,
          "🕯": 31,
          "🪔": 31,
          "🧯": 31,
          "🛢": 31,
          "💸": 31,
          "💵": 31,
          "💴": 31,
          "💶": 31,
          "💷": 31,
          "🪙": 31,
          "💰": 31,
          "💳": 31,
          "💎": 31,
          "⚖": 31,
          "🪜": 31,
          "🧰": 31,
          "🪛": 31,
          "🔧": 31,
          "🔨": 32,
          "⚒": 32,
          "🛠": 32,
          "⛏": 32,
          "🪚": 32,
          "🔩": 32,
          "⚙": 32,
          "🪤": 32,
          "🧱": 32,
          "⛓": 32,
          "🧲": 32,
          "🔫": 32,
          "💣": 32,
          "🧨": 32,
          "🪓": 32,
          "🔪": 32,
          "🗡": 32,
          "⚔": 32,
          "🛡": 32,
          "🚬": 32,
          "⚰": 32,
          "🪦": 32,
          "⚱": 32,
          "🏺": 32,
          "🔮": 32,
          "📿": 32,
          "🧿": 32,
          "💈": 32,
          "⚗": 32,
          "🔭": 32,
          "🔬": 32,
          "🕳": 32,
          "🩹": 32,
          "🩺": 32,
          "💊": 32,
          "💉": 32,
          "🩸": 32,
          "🧬": 32,
          "🦠": 32,
          "🧫": 32,
          "🧪": 32,
          "🌡": 32,
          "🧹": 32,
          "🪠": 32,
          "🧺": 32,
          "🧻": 32,
          "🚽": 32,
          "🚰": 32,
          "🚿": 32,
          "🛁": 32,
          "🛀": 32,
          "🛀🏻": 90720,
          "🛀🏼": 90784,
          "🛀🏽": 90848,
          "🛀🏾": 90912,
          "🛀🏿": 90976,
          "🧼": 32,
          "🪥": 32,
          "🪒": 32,
          "🧽": 32,
          "🪣": 32,
          "🧴": 32,
          "🛎": 32,
          "🔑": 32,
          "🗝": 32,
          "🚪": 32,
          "🪑": 32,
          "🛋": 32,
          "🛏": 32,
          "🛌": 32,
          "🛌🏻": 91040,
          "🛌🏼": 91104,
          "🛌🏽": 91168,
          "🛌🏾": 91232,
          "🛌🏿": 91296,
          "🧸": 33,
          "🪆": 33,
          "🖼": 33,
          "🪞": 33,
          "🪟": 33,
          "🛍": 33,
          "🛒": 33,
          "🎁": 33,
          "🎈": 33,
          "🎏": 33,
          "🎀": 33,
          "🪄": 33,
          "🪅": 33,
          "🎊": 33,
          "🎎": 33,
          "🏮": 33,
          "🎐": 33,
          "🧧": 33,
          "✉": 33,
          "📩": 33,
          "📨": 33,
          "📧": 33,
          "💌": 33,
          "📥": 33,
          "📤": 33,
          "📦": 33,
          "🏷": 33,
          "🪧": 33,
          "📪": 33,
          "📫": 33,
          "📬": 33,
          "📭": 33,
          "📮": 33,
          "📯": 33,
          "📜": 33,
          "📃": 33,
          "📄": 33,
          "📑": 33,
          "🧾": 33,
          "📊": 33,
          "📈": 33,
          "📉": 33,
          "🗒": 33,
          "🗓": 33,
          "📆": 33,
          "📅": 33,
          "🗑": 33,
          "📇": 33,
          "🗃": 33,
          "🗳": 33,
          "🗄": 33,
          "📋": 33,
          "📁": 33,
          "📂": 33,
          "🗂": 33,
          "🗞": 33,
          "📰": 33,
          "📓": 33,
          "📔": 33,
          "📒": 33,
          "📕": 33,
          "📗": 33,
          "📘": 33,
          "📙": 33,
          "📚": 33,
          "📖": 33,
          "🔖": 33,
          "🧷": 33,
          "🔗": 33,
          "📎": 33,
          "🖇": 33,
          "📐": 33,
          "📏": 33,
          "🧮": 33,
          "📌": 33,
          "📍": 34,
          "✂": 34,
          "🖊": 34,
          "🖋": 34,
          "✒": 34,
          "🖌": 34,
          "🖍": 34,
          "📝": 34,
          "✏": 34,
          "🔍": 34,
          "🔎": 34,
          "🔏": 34,
          "🔐": 34,
          "🔒": 34,
          "🔓": 34,
          "🧡": 34,
          "💛": 34,
          "💚": 34,
          "💙": 34,
          "💜": 34,
          "🖤": 34,
          "🤍": 34,
          "🤎": 34,
          "❤‍🔥": 91362,
          "❤‍🩹": 91426,
          "❣": 34,
          "💓": 34,
          "💗": 34,
          "💘": 34,
          "💝": 34,
          "💟": 34,
          "☮": 34,
          "✝": 34,
          "☪": 34,
          "🕉": 34,
          "☸": 34,
          "✡": 34,
          "🔯": 34,
          "🕎": 34,
          "☯": 34,
          "☦": 34,
          "🛐": 34,
          "⛎": 34,
          "♈": 34,
          "♉": 34,
          "♊": 34,
          "♋": 34,
          "♌": 34,
          "♍": 34,
          "♎": 34,
          "♏": 34,
          "♐": 34,
          "♑": 34,
          "♒": 34,
          "♓": 34,
          "🆔": 34,
          "⚛": 34,
          "🉑": 34,
          "☢": 34,
          "☣": 34,
          "📴": 34,
          "📳": 34,
          "🈶": 34,
          "🈚": 34,
          "🈸": 34,
          "🈺": 34,
          "🈷": 34,
          "✴": 34,
          "🆚": 34,
          "💮": 34,
          "🉐": 34,
          "㊙": 34,
          "㊗": 34,
          "🈴": 34,
          "🈵": 34,
          "🈹": 35,
          "🈲": 35,
          "🅰": 35,
          "🅱": 35,
          "🆎": 35,
          "🆑": 35,
          "🅾": 35,
          "🆘": 35,
          "❌": 35,
          "⭕": 35,
          "🛑": 35,
          "⛔": 35,
          "📛": 35,
          "🚫": 35,
          "💯": 35,
          "💢": 35,
          "♨": 35,
          "🚷": 35,
          "🚯": 35,
          "🚳": 35,
          "🚱": 35,
          "🔞": 35,
          "📵": 35,
          "🚭": 35,
          "❗": 35,
          "❕": 35,
          "❓": 35,
          "❔": 35,
          "‼": 35,
          "⁉": 35,
          "🔅": 35,
          "🔆": 35,
          "〽": 35,
          "⚠": 35,
          "🚸": 35,
          "🔱": 35,
          "⚜": 35,
          "🔰": 35,
          "♻": 35,
          "✅": 35,
          "🈯": 35,
          "💹": 35,
          "❇": 35,
          "✳": 35,
          "❎": 35,
          "🌐": 35,
          "💠": 35,
          "Ⓜ": 35,
          "🌀": 35,
          "💤": 35,
          "🏧": 35,
          "🚾": 35,
          "♿": 35,
          "🅿": 35,
          "🛗": 35,
          "🈳": 35,
          "🈂": 35,
          "🛂": 35,
          "🛃": 35,
          "🛄": 35,
          "🛅": 35,
          "🚹": 35,
          "🚺": 35,
          "🚼": 35,
          "⚧": 35,
          "🚻": 35,
          "🚮": 35,
          "🎦": 35,
          "📶": 35,
          "🈁": 35,
          "🔣": 35,
          ℹ: 35,
          "🔤": 35,
          "🔡": 35,
          "🔠": 35,
          "🆖": 36,
          "🆗": 36,
          "🆙": 36,
          "🆒": 36,
          "🆕": 36,
          "🆓": 36,
          "0⃣": 91492,
          "1⃣": 91556,
          "2⃣": 91620,
          "3⃣": 91684,
          "4⃣": 91748,
          "5⃣": 91812,
          "6⃣": 91876,
          "7⃣": 91940,
          "8⃣": 92004,
          "9⃣": 92068,
          "🔟": 36,
          "🔢": 36,
          "#⃣": 92132,
          "*⃣": 92196,
          "⏏": 36,
          "▶": 36,
          "⏸": 36,
          "⏯": 36,
          "⏹": 36,
          "⏺": 36,
          "⏭": 36,
          "⏮": 36,
          "⏩": 36,
          "⏪": 36,
          "⏫": 36,
          "⏬": 36,
          "◀": 36,
          "🔼": 36,
          "🔽": 36,
          "➡": 36,
          "⬅": 36,
          "⬆": 36,
          "⬇": 36,
          "↗": 36,
          "↘": 36,
          "↙": 36,
          "↖": 36,
          "↕": 36,
          "↔": 36,
          "↪": 36,
          "↩": 36,
          "⤴": 36,
          "⤵": 36,
          "🔀": 36,
          "🔁": 36,
          "🔂": 36,
          "🔄": 36,
          "🔃": 36,
          "🎵": 36,
          "🎶": 36,
          "➕": 36,
          "➖": 36,
          "➗": 36,
          "✖": 36,
          "♾": 36,
          "💲": 36,
          "💱": 36,
          "™": 36,
          "©": 36,
          "®": 36,
          "👁‍🗨": 92260,
          "🔚": 36,
          "🔙": 36,
          "🔛": 36,
          "🔝": 36,
          "🔜": 36,
          "〰": 36,
          "➰": 36,
          "➿": 36,
          "✔": 37,
          "☑": 37,
          "🔘": 37,
          "🔴": 37,
          "🟠": 37,
          "🟡": 37,
          "🟢": 37,
          "🔵": 37,
          "🟣": 37,
          "⚫": 37,
          "⚪": 37,
          "🟤": 37,
          "🔺": 37,
          "🔻": 37,
          "🔸": 37,
          "🔹": 37,
          "🔶": 37,
          "🔷": 37,
          "🔳": 37,
          "🔲": 37,
          "▪": 37,
          "▫": 37,
          "◾": 37,
          "◽": 37,
          "◼": 37,
          "◻": 37,
          "🟥": 37,
          "🟧": 37,
          "🟨": 37,
          "🟩": 37,
          "🟦": 37,
          "🟪": 37,
          "⬛": 37,
          "⬜": 37,
          "🟫": 37,
          "🔈": 37,
          "🔇": 37,
          "🔉": 37,
          "🔊": 37,
          "🔔": 37,
          "🔕": 37,
          "📣": 37,
          "📢": 37,
          "💬": 37,
          "💭": 37,
          "🗯": 37,
          "♠": 37,
          "♣": 37,
          "♦": 37,
          "🃏": 37,
          "🎴": 37,
          "🀄": 37,
          "🕐": 37,
          "🕑": 37,
          "🕒": 37,
          "🕓": 37,
          "🕔": 37,
          "🕕": 37,
          "🕖": 37,
          "🕗": 37,
          "🕘": 37,
          "🕙": 37,
          "🕚": 37,
          "🕛": 37,
          "🕜": 37,
          "🕝": 37,
          "🕞": 37,
          "🕟": 37,
          "🕠": 37,
          "🕡": 37,
          "🕢": 37,
          "🕣": 37,
          "🕤": 37,
          "🕥": 37,
          "🕦": 37,
          "🕧": 38,
          "🏳": 38,
          "🏴": 38,
          "🏴‍☠": 92326,
          "🏁": 38,
          "🚩": 38,
          "🏳‍🌈": 92390,
          "🏳‍⚧": 92454,
          "🏳‍🟧‍⬛‍🟧": 92518,
          "🇺🇳": 92582,
          "🇦🇫": 92646,
          "🇦🇽": 92710,
          "🇦🇱": 92774,
          "🇩🇿": 92838,
          "🇦🇸": 92902,
          "🇦🇩": 92966,
          "🇦🇴": 93030,
          "🇦🇮": 93094,
          "🇦🇶": 93158,
          "🇦🇬": 93222,
          "🇦🇷": 93286,
          "🇦🇲": 93350,
          "🇦🇼": 93414,
          "🇦🇺": 93478,
          "🇦🇹": 93542,
          "🇦🇿": 93606,
          "🇧🇸": 93670,
          "🇧🇭": 93734,
          "🇧🇩": 93798,
          "🇧🇧": 93862,
          "🇧🇾": 93926,
          "🇧🇪": 93990,
          "🇧🇿": 94054,
          "🇧🇯": 94118,
          "🇧🇲": 94182,
          "🇧🇹": 94246,
          "🇧🇴": 94310,
          "🇧🇦": 94374,
          "🇧🇼": 94438,
          "🇧🇷": 94502,
          "🇻🇬": 94566,
          "🇧🇳": 94630,
          "🇧🇬": 94694,
          "🇧🇫": 94758,
          "🇧🇮": 94822,
          "🇰🇭": 94886,
          "🇨🇲": 94950,
          "🇨🇦": 95014,
          "🇮🇨": 95078,
          "🇨🇻": 95142,
          "🇧🇶": 95206,
          "🇰🇾": 95270,
          "🇨🇫": 95334,
          "🇹🇩": 95398,
          "🇮🇴": 95462,
          "🇨🇱": 95526,
          "🇨🇳": 95590,
          "🇨🇽": 95654,
          "🇨🇨": 95718,
          "🇨🇴": 95782,
          "🇰🇲": 95846,
          "🇨🇬": 95910,
          "🇨🇩": 95974,
          "🇨🇰": 96038,
          "🇨🇷": 96102,
          "🇨🇮": 96166,
          "🇭🇷": 96230,
          "🇨🇺": 96294,
          "🇨🇼": 96358,
          "🇨🇾": 96422,
          "🇨🇿": 96486,
          "🇩🇰": 96550,
          "🇩🇯": 96614,
          "🇩🇲": 96678,
          "🇩🇴": 96742,
          "🇪🇨": 96807,
          "🇪🇬": 96871,
          "🇸🇻": 96935,
          "🇬🇶": 96999,
          "🇪🇷": 97063,
          "🇪🇪": 97127,
          "🇸🇿": 97191,
          "🇪🇹": 97255,
          "🇪🇺": 97319,
          "🇫🇰": 97383,
          "🇫🇴": 97447,
          "🇫🇯": 97511,
          "🇫🇮": 97575,
          "🇫🇷": 97639,
          "🇬🇫": 97703,
          "🇵🇫": 97767,
          "🇹🇫": 97831,
          "🇬🇦": 97895,
          "🇬🇲": 97959,
          "🇬🇪": 98023,
          "🇩🇪": 98087,
          "🇬🇭": 98151,
          "🇬🇮": 98215,
          "🇬🇷": 98279,
          "🇬🇱": 98343,
          "🇬🇩": 98407,
          "🇬🇵": 98471,
          "🇬🇺": 98535,
          "🇬🇹": 98599,
          "🇬🇬": 98663,
          "🇬🇳": 98727,
          "🇬🇼": 98791,
          "🇬🇾": 98855,
          "🇭🇹": 98919,
          "🇭🇳": 98983,
          "🇭🇰": 99047,
          "🇭🇺": 99111,
          "🇮🇸": 99175,
          "🇮🇳": 99239,
          "🇮🇩": 99303,
          "🇮🇷": 99367,
          "🇮🇶": 99431,
          "🇮🇪": 99495,
          "🇮🇲": 99559,
          "🇮🇱": 99623,
          "🇮🇹": 99687,
          "🇯🇲": 99751,
          "🇯🇵": 99815,
          "🎌": 39,
          "🇯🇪": 99879,
          "🇯🇴": 99943,
          "🇰🇿": 100007,
          "🇰🇪": 100071,
          "🇰🇮": 100135,
          "🇽🇰": 100199,
          "🇰🇼": 100263,
          "🇰🇬": 100327,
          "🇱🇦": 100391,
          "🇱🇻": 100455,
          "🇱🇧": 100519,
          "🇱🇸": 100583,
          "🇱🇷": 100647,
          "🇱🇾": 100711,
          "🇱🇮": 100775,
          "🇱🇹": 100839,
          "🇱🇺": 100903,
          "🇲🇴": 100967,
          "🇲🇬": 101031,
          "🇲🇼": 101095,
          "🇲🇾": 101159,
          "🇲🇻": 101223,
          "🇲🇱": 101287,
          "🇲🇹": 101351,
          "🇲🇭": 101415,
          "🇲🇶": 101479,
          "🇲🇷": 101544,
          "🇲🇺": 101608,
          "🇾🇹": 101672,
          "🇲🇽": 101736,
          "🇫🇲": 101800,
          "🇲🇩": 101864,
          "🇲🇨": 101928,
          "🇲🇳": 101992,
          "🇲🇪": 102056,
          "🇲🇸": 102120,
          "🇲🇦": 102184,
          "🇲🇿": 102248,
          "🇲🇲": 102312,
          "🇳🇦": 102376,
          "🇳🇷": 102440,
          "🇳🇵": 102504,
          "🇳🇱": 102568,
          "🇳🇨": 102632,
          "🇳🇿": 102696,
          "🇳🇮": 102760,
          "🇳🇪": 102824,
          "🇳🇬": 102888,
          "🇳🇺": 102952,
          "🇳🇫": 103016,
          "🇰🇵": 103080,
          "🇲🇰": 103144,
          "🇲🇵": 103208,
          "🇳🇴": 103272,
          "🇴🇲": 103336,
          "🇵🇰": 103400,
          "🇵🇼": 103464,
          "🇵🇸": 103528,
          "🇵🇦": 103592,
          "🇵🇬": 103656,
          "🇵🇾": 103720,
          "🇵🇪": 103784,
          "🇵🇭": 103848,
          "🇵🇳": 103912,
          "🇵🇱": 103976,
          "🇵🇹": 104040,
          "🇵🇷": 104104,
          "🇶🇦": 104168,
          "🇷🇪": 104232,
          "🇷🇴": 104296,
          "🇷🇺": 104360,
          "🇷🇼": 104424,
          "🇼🇸": 104488,
          "🇸🇲": 104552,
          "🇸🇹": 104616,
          "🇸🇦": 104680,
          "🇸🇳": 104744,
          "🇷🇸": 104808,
          "🇸🇨": 104872,
          "🇸🇱": 104936,
          "🇸🇬": 105e3,
          "🇸🇽": 105064,
          "🇸🇰": 105128,
          "🇸🇮": 105192,
          "🇬🇸": 105256,
          "🇸🇧": 105320,
          "🇸🇴": 105384,
          "🇿🇦": 105448,
          "🇰🇷": 105512,
          "🇸🇸": 105576,
          "🇪🇸": 105640,
          "🇱🇰": 105704,
          "🇧🇱": 105768,
          "🇸🇭": 105832,
          "🇰🇳": 105896,
          "🇱🇨": 105960,
          "🇵🇲": 106024,
          "🇻🇨": 106088,
          "🇸🇩": 106152,
          "🇸🇷": 106216,
          "🇸🇪": 106280,
          "🇨🇭": 106345,
          "🇸🇾": 106409,
          "🇹🇼": 106473,
          "🇹🇯": 106537,
          "🇹🇿": 106601,
          "🇹🇭": 106665,
          "🇹🇱": 106729,
          "🇹🇬": 106793,
          "🇹🇰": 106857,
          "🇹🇴": 106921,
          "🇹🇹": 106985,
          "🇹🇳": 107049,
          "🇹🇷": 107113,
          "🇹🇲": 107177,
          "🇹🇨": 107241,
          "🇹🇻": 107305,
          "🇻🇮": 107369,
          "🇺🇬": 107433,
          "🇺🇦": 107497,
          "🇦🇪": 107561,
          "🇬🇧": 107625,
          "🏴󠁧󠁢󠁥󠁮󠁧󠁿": 107689,
          "🏴󠁧󠁢󠁳󠁣󠁴󠁿": 107753,
          "🏴󠁧󠁢󠁷󠁬󠁳󠁿": 107817,
          "🇺🇸": 107881,
          "🏴󠁵󠁳󠁴󠁸󠁿": 107945,
          "🇺🇾": 108009,
          "🇺🇿": 108073,
          "🇻🇺": 108137,
          "🇻🇦": 108201,
          "🇻🇪": 108265,
          "🇻🇳": 108329,
          "🇼🇫": 108393,
          "🇪🇭": 108457,
          "🇾🇪": 108521,
          "🇿🇲": 108585,
          "🇿🇼": 108649,
          "🇦🇨": 108713,
          "🇧🇻": 108777,
          "🇨🇵": 108841,
          "🇩🇬": 108905,
          "🇪🇦": 108969,
          "🇭🇲": 109033,
          "🇲🇫": 109097,
          "🇸🇯": 109161,
          "🇹🇦": 109225,
          "🇺🇲": 109289,
          "🏻": 41,
          "🏼": 41,
          "🏽": 41,
          "🏾": 41,
          "🏿": 41,
          "👨🏼‍🤝‍👨🏻": 109353,
          "👨🏽‍🤝‍👨🏻": 109417,
          "👨🏾‍🤝‍👨🏻": 109481,
          "👨🏿‍🤝‍👨🏻": 109545,
          "👨🏽‍🤝‍👨🏼": 109609,
          "👨🏾‍🤝‍👨🏼": 109673,
          "👨🏿‍🤝‍👨🏼": 109737,
          "👨🏾‍🤝‍👨🏽": 109801,
          "👨🏿‍🤝‍👨🏽": 109865,
          "👨🏿‍🤝‍👨🏾": 109929,
          "👩🏻‍🤝‍👨🏼": 109993,
          "👩🏽‍🤝‍👨🏼": 110057,
          "👩🏾‍🤝‍👨🏼": 110121,
          "👩🏿‍🤝‍👨🏼": 110185,
          "👩🏻‍🤝‍👨🏽": 110249,
          "👩🏼‍🤝‍👨🏽": 110313,
          "👩🏾‍🤝‍👨🏽": 110377,
          "👩🏿‍🤝‍👨🏽": 110441,
          "👩🏻‍🤝‍👨🏾": 110505,
          "👩🏼‍🤝‍👨🏾": 110569,
          "👩🏽‍🤝‍👨🏾": 110633,
          "👩🏿‍🤝‍👨🏾": 110697,
          "👩🏻‍🤝‍👨🏿": 110762,
          "👩🏼‍🤝‍👨🏿": 110826,
          "👩🏽‍🤝‍👨🏿": 110890,
          "👩🏾‍🤝‍👨🏿": 110954,
          "👩🏼‍🤝‍👨🏻": 111018,
          "👩🏽‍🤝‍👨🏻": 111082,
          "👩🏾‍🤝‍👨🏻": 111146,
          "👩🏿‍🤝‍👨🏻": 111210,
          "👩🏼‍🤝‍👩🏻": 111274,
          "👩🏽‍🤝‍👩🏻": 111338,
          "👩🏾‍🤝‍👩🏻": 111402,
          "👩🏿‍🤝‍👩🏻": 111466,
          "👩🏽‍🤝‍👩🏼": 111530,
          "👩🏾‍🤝‍👩🏼": 111594,
          "👩🏿‍🤝‍👩🏼": 111658,
          "👩🏾‍🤝‍👩🏽": 111722,
          "👩🏿‍🤝‍👩🏽": 111786,
          "👩🏿‍🤝‍👩🏾": 111850,
          "👪": 42,
          "🗨": 42,
          "🧑🏻‍🤝‍🧑🏻": 111914,
          "🧑🏼‍🤝‍🧑🏻": 111978,
          "🧑🏽‍🤝‍🧑🏻": 112042,
          "🧑🏾‍🤝‍🧑🏻": 112106,
          "🧑🏿‍🤝‍🧑🏻": 112170,
          "🧑🏼‍🤝‍🧑🏼": 112234,
          "🧑🏽‍🤝‍🧑🏼": 112298,
          "🧑🏾‍🤝‍🧑🏼": 112362,
          "🧑🏿‍🤝‍🧑🏼": 112426,
          "🧑🏽‍🤝‍🧑🏽": 112490,
          "🧑🏾‍🤝‍🧑🏽": 112554,
          "🧑🏿‍🤝‍🧑🏽": 112618,
          "🧑🏾‍🤝‍🧑🏾": 112682,
          "🧑🏿‍🤝‍🧑🏾": 112746,
          "🧑🏿‍🤝‍🧑🏿": 112810,
          "🧑‍🤝‍🧑": 112874,
          "♀": 42,
          "♂": 42,
          "⚕": 42,
        };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "f", function () {
        return u;
      }),
        r.d(t, "b", function () {
          return o;
        }),
        r.d(t, "a", function () {
          return a;
        }),
        r.d(t, "g", function () {
          return s;
        }),
        r.d(t, "e", function () {
          return c;
        }),
        r.d(t, "c", function () {
          return f;
        }),
        r.d(t, "d", function () {
          return l;
        });
      var e = r(8),
        i = r.n(e);
      function u(n) {
        return null == n ? 86400 : Math.max(600, Math.min(604800, n));
      }
      function o(n) {
        var t = [];
        return (
          Object.keys(n).forEach((r) => {
            var e = i()(n[r], 2),
              u = e[0],
              o = e[1];
            "number" == typeof u &&
              t.push({ configName: r, configCode: u, configDefault: o });
          }),
          t
        );
      }
      function a(n, t) {
        var r = n[t][0];
        return "number" == typeof r ? r : null;
      }
      function s(n, t) {
        var r = new Map();
        t.forEach((n) => {
          var t = n.configCode,
            e = n.configValue,
            i = n.configExpoKey;
          r.set(t, { configValue: e, configExpoKey: i });
        });
        var e = {},
          i = {};
        return (
          o(n).forEach((n) => {
            var t = n.configName,
              u = n.configCode,
              o = n.configDefault,
              a = r.get(u);
            if (null != a) {
              var s = a.configValue,
                c = a.configExpoKey,
                f = (function (n, t) {
                  switch (typeof t) {
                    case "boolean":
                      return "1" === n;
                    case "number":
                      return parseFloat(n);
                    case "string":
                      return n;
                    default:
                      return (
                        __LOG__(3)`parseValue: unsure how to read ${n}`, null
                      );
                  }
                })(s, o);
              null != f && (e[t] = f), (i[u] = null != c ? c : null);
            }
          }),
          { values: e, expoKeys: i }
        );
      }
      function c(n, t, r) {
        var e = Object.assign({}, t, n),
          i = {};
        return (
          Object.keys(e).forEach((n) => {
            null != r[n]
              ? (i[n] = e[n])
              : __LOG__(2)`maybeUpdatePropValues: deleting config ${n}`;
          }),
          i
        );
      }
      function f(n, t, r) {
        var e = Object.assign({}, t, n),
          i = {},
          u = o(r).map((n) => n.configCode),
          a = new Set(u),
          s = new Set();
        return (
          Object.keys(e).forEach((n) => {
            var r = parseInt(n, 10),
              u = t ? t[r] : null;
            a.has(r)
              ? (e[r] !== u &&
                  (__LOG__(
                    2
                  )`maybeUpdateExpoKeys: config_expo_key ${r} changed`,
                  null != u && u.trim() && s.add(u)),
                (i[r] = e[r]))
              : (__LOG__(2)`maybeUpdateExpoKeys: deleting config_expo_key ${r}`,
                null != u && u.trim() && s.add(u));
          }),
          { propExpoKeys: i, expoKeysToDelete: s }
        );
      }
      function l(n, t) {
        if (null != t) {
          var r = t;
          if (
            (n.forEach((n) => {
              r.delete(n);
            }),
            0 !== r.size)
          )
            return { internalExpoKeys: r, expoKeyStr: Array.from(r).join(",") };
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return e;
      });
      var e = { INT: 0, BOOL: 1, STRING: 2, FLOAT: 3 };
    },
    function (n, t, r) {
      r.d(t, "f", function () {
        return o;
      }),
        r.d(t, "c", function () {
          return a;
        }),
        r.d(t, "d", function () {
          return s;
        }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "a", function () {
          return f;
        }),
        r.d(t, "e", function () {
          return l;
        });
      var e = r(169),
        i = null;
      function u(n) {
        if (i) return i;
        throw new Error(`abProps::${n} called before startAbProps`);
      }
      function o(n, t) {
        null == i && (i = { db: n, config: t });
      }
      function a() {
        return u("getHash").db.getHash();
      }
      function s() {
        return u("getRefreshSecs")
          .db.getRefreshSecs()
          .then((n) => (0, e.f)(n));
      }
      function c() {
        return u("getConfig").config;
      }
      function f() {
        return u("getAbProps").db.getAbProps();
      }
      function l(n) {
        return u("getAbProps").db.setAbProps(n);
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "j", function () {
        return f;
      }),
        r.d(t, "a", function () {
          return l;
        }),
        r.d(t, "c", function () {
          return d;
        }),
        r.d(t, "b", function () {
          return h;
        }),
        r.d(t, "g", function () {
          return g;
        }),
        r.d(t, "i", function () {
          return _;
        }),
        r.d(t, "e", function () {
          return m;
        }),
        r.d(t, "f", function () {
          return y;
        }),
        r.d(t, "h", function () {
          return b;
        }),
        r.d(t, "d", function () {
          return w;
        });
      var e,
        i = r(3),
        u = r(128),
        o = r(225),
        a = null,
        s = null;
      function c(n) {
        if (s) return s;
        throw new Error(`WamStorage::${n} called before startWamStorage`);
      }
      function f(n) {
        null == s
          ? (s = n)
          : (__LOG__(3)`startWamStorage: called again`,
            SEND_LOGS("startWamStorage"));
      }
      function l() {
        (0, u.a)(), null != e && e.close(), (s = null), (a = null);
      }
      function d(n, t, r, i) {
        var s = c("initializeWAMSink"),
          f =
            (null == e &&
              (e = new (class {
                constructor() {
                  (this.bi = new Map()), (this.bj = new Map());
                }
                getChannelInitialized(n) {
                  return this.bj.get(n) || !1;
                }
                setChannelInitialized(n) {
                  this.bj.set(n, !0);
                }
                isSinkBusy(n) {
                  return this.bi.get(n) || !1;
                }
                setSinkBusy(n, t) {
                  this.bi.set(n, t);
                }
                close() {
                  this.bi.forEach((n, t) => {
                    this.bi.set(t, !1);
                  }),
                    this.bj.forEach((n, t) => {
                      this.bj.set(t, !1);
                    });
                }
              })()),
            e);
        if (f.getChannelInitialized(t)) return Promise.resolve();
        f.setChannelInitialized(t);
        var l = s.getStreamId(n),
          d = {
            putBuffer(n, e, i, u) {
              if (f.isSinkBusy(t))
                return (
                  __LOG__(
                    3
                  )`WamStorage: Sink flush did not happen within timeout, buffer is not saved`,
                  Promise.resolve()
                );
              f.setSinkBusy(t, !0);
              var a = (0, o.b)(n, t, l, e, i),
                c = a.bufferKey,
                d = a.meta,
                h = a.bufferRow;
              return s
                .saveBuffer(d, h, u)
                .then(() => {
                  var t = [n.streamId, n.sequenceNumber];
                  __LOG__(2)`WamStorage: Successfully put buffer ${t} to sink`,
                    i &&
                      (r(),
                      __LOG__(
                        2
                      )`WamStorage: Buffer ${c} is scheduled for send`);
                })
                .finally(() => {
                  f.setSinkBusy(t, !1);
                });
            },
          };
        return (
          null == a && (a = s.finishBuffer(l)),
          a
            .then(() => {
              if (s.getStartingSequenceNumbers)
                return (
                  s.getStartingSequenceRow, s.getStartingSequenceNumbers(t, l)
                );
              if (
                (s.getStartingSequenceRow,
                null == i ? void 0 : i.multipleSequences)
              )
                throw new Error(
                  "getStartingSequenceRow must not used when enabling support for multiple sequences"
                );
              return s.getStartingSequenceRow(l).then((n) => {
                var t = (0, o.e)(n),
                  r = new Map();
                return r.set("regular", t), r;
              });
            })
            .then((n) => {
              (0, u.d)(l, n, t, d, i),
                "private" === t &&
                  s.updatePrivateStatsIds &&
                  s.updatePrivateStatsIds().then(u.i);
            })
        );
      }
      function h(n) {
        return c("getFinishedStreamBuffers")
          .getBuffers()
          .then((t) => (0, o.d)(n, t));
      }
      var v = i.b,
        p = (n, t) => {
          var r = {
            maxRedeemCount:
              null != (null == t ? void 0 : t.maxRedeemCount) &&
              0 !== t.maxRedeemCount
                ? t.maxRedeemCount
                : 64,
            maxExpirySeconds:
              null != (null == t ? void 0 : t.maxExpirySeconds) &&
              0 !== t.maxExpirySeconds
                ? t.maxExpirySeconds
                : v,
          };
          return (0, i.m)(n.creationTs, r.maxExpirySeconds)
            ? !(
                n.redeemCount >= r.maxRedeemCount &&
                (__LOG__(
                  2
                )`The private stats token was redeemed maximum number of time. The client shall re-issue a new one`,
                1)
              )
            : (__LOG__(
                2
              )`The private stats token expired. The client shall re-issue a new one`,
              !1);
        };
      function g() {
        var n = c("getPrivateStatsToken");
        if (!n.redeemPrivateStatsToken)
          throw new Error("redeemPrivateStatsToken not implemented for WAM DB");
        return n.redeemPrivateStatsToken(p);
      }
      function _(n) {
        var t = c("savePrivateStatsToken");
        if (!t.savePrivateStatsToken)
          throw new Error("savePrivateStatsToken not implemented for WAM DB");
        return t.savePrivateStatsToken(n);
      }
      function m() {
        var n = c("privateStatsKillSwitchGetBlockedToken");
        if (!n.privateStatsKillSwitchGetBlockedToken)
          throw new Error(
            "privateStatsKillSwitchGetBlockedToken not implemented for WAM DB"
          );
        return n.privateStatsKillSwitchGetBlockedToken();
      }
      function y(n) {
        var t = c("privateStatsKillSwitchSet");
        if (!t.privateStatsKillSwitchSet)
          throw new Error(
            "privateStatsKillSwitchSet not implemented for WAM DB"
          );
        return t.privateStatsKillSwitchSet(n);
      }
      function b(n) {
        return c("removeBufferByKey").removeBufferByKey(n);
      }
      function w() {
        return c("nukeMetrics").nukeMetrics();
      }
    },
    ,
    function (n, t, r) {
      r.r(t),
        r.d(t, "log", function () {
          return a;
        }),
        r.d(t, "logAsync", function () {
          return s;
        }),
        r.d(t, "initializeWAMSink", function () {
          return c;
        });
      var e = r(128),
        i = r(154),
        u = r(188),
        o = r(17);
      function a(n, t, r, u, o, a, s) {
        "private" !== n || (0, i.isPrivateChannelSetup)()
          ? (0, e.e)(n, t, r, u, o, a, s)
          : (0, i.waitForPrivateChannelSetup)().then(() => {
              (0, e.e)(n, t, r, u, o, a, s);
            });
      }
      function s(n, t, r, u, o, a, s) {
        return "private" !== n || (0, i.isPrivateChannelSetup)()
          ? (0, e.f)(n, t, r, u, o, a, s)
          : (0, i.waitForPrivateChannelSetup)().then(() =>
              (0, e.f)(n, t, r, u, o, a, s)
            );
      }
      function c(n, t, r) {
        var e = (0, o.a)("kaios_privatestats_phase3_m2_enabled")
          ? { multipleSequences: !0 }
          : void 0;
        return (0, u.c)(n, t, r, e);
      }
      r.d(t, "enableDebugMode", function () {
        return e.b;
      }),
        r.d(t, "initializeWAM", function () {
          return e.d;
        }),
        r.d(t, "deinitializeWAM", function () {
          return e.a;
        }),
        r.d(t, "logAttributes", function () {
          return e.g;
        }),
        r.d(t, "forceFlushBuffers", function () {
          return e.c;
        }),
        r.d(t, "rotateBuffers", function () {
          return e.h;
        });
    },
    ,
    ,
    ,
    function (n, t, r) {
      function e(n) {
        var t,
          r,
          e = !1;
        return function (i) {
          return (e && i === r) || ((t = n(i)), (r = i), (e = !0)), t;
        };
      }
      function i(n) {
        var t,
          r,
          e,
          i = !1;
        return function (u, o) {
          return (
            (i && u === r && o === e) ||
              ((t = n(u, o)), (r = u), (e = o), (i = !0)),
            t
          );
        };
      }
      function u(n) {
        var t,
          r,
          e,
          i,
          u = !1;
        return function (o, a, s) {
          return (
            (u && o === r && a === e && s === i) ||
              ((t = n(o, a, s)), (r = o), (e = a), (i = s), (u = !0)),
            t
          );
        };
      }
      function o(n) {
        var t,
          r,
          e,
          i,
          u,
          o = !1;
        return function (a, s, c, f) {
          return (
            (o && a === r && s === e && c === i && f === u) ||
              ((t = n(a, s, c, f)),
              (r = a),
              (e = s),
              (i = c),
              (u = f),
              (o = !0)),
            t
          );
        };
      }
      function a(n) {
        var t,
          r,
          e,
          i,
          u,
          o,
          a = !1;
        return function (s, c, f, l, d) {
          return (
            (a && s === r && c === e && f === i && l === u && d === o) ||
              ((t = n(s, c, f, l, d)),
              (r = s),
              (e = c),
              (i = f),
              (u = l),
              (o = d),
              (a = !0)),
            t
          );
        };
      }
      r.d(t, "a", function () {
        return e;
      }),
        r.d(t, "b", function () {
          return i;
        }),
        r.d(t, "c", function () {
          return u;
        }),
        r.d(t, "d", function () {
          return o;
        }),
        r.d(t, "e", function () {
          return a;
        });
    },
    function (n, t, r) {
      r.d(t, "a", function () {
        return i;
      }),
        r.d(t, "b", function () {
          return u;
        }),
        r.d(t, "c", function () {
          return o;
        });
      var e =
        /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]?|[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g;
      function i(n) {
        var t = n.match(e);
        return t ? t.length : 0;
      }
      function u(n) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = arguments.length > 2 ? arguments[2] : void 0,
          i = n.match(e);
        return i ? i.slice(Math.max(0, t), Math.max(0, r)).join("") : "";
      }
      function o(n) {
        return n.match(e) || [];
      }
    },
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "c", function () {
          return f;
        });
      var e = r(3),
        i = r(17),
        u = r(45),
        o = r(21),
        a = r(124);
      function s(n) {
        var t = (0, i.a)("keep_in_chat_undo_duration_limit");
        if (-1 === t) return !0;
        var r = (0, e.k)(t, n);
        return (0, e.o)(r);
      }
      function c(n, t, r) {
        var e = n.keptInfo;
        if (null != e) {
          var i = e.author;
          if ("@me" !== i) {
            var s = (0, a.d)(n.content);
            if (null != s) {
              var c = (0, u.k)(n.id),
                f = (0, u.q)(t, i),
                l = (0, a.e)(s, t, n.mentionedJids, r),
                d = (0, o.k)([(0, o.m)(l), 175]);
              (0, u.r)(f, {
                tag: c,
                data: { action: u.e, msgId: n.id },
                body: d,
              });
            }
          }
        }
      }
      function f(n, t) {
        var r, e;
        (r = "kic-nux-open" === n ? 2 : "dm-nux-open" === n ? 1 : 3),
          (e = "chat-entry" === t ? 1 : 2),
          WAM.log("regular", 3486, void 0, [2, 0, r, 4, 0, e]);
      }
    },
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "c", function () {
        return u;
      }),
        r.d(t, "b", function () {
          return o;
        }),
        r.d(t, "d", function () {
          return a;
        }),
        r.d(t, "a", function () {
          return s;
        }),
        r.d(t, "e", function () {
          return c;
        });
      var e = r(14),
        i = "keyValuePairs",
        u = "me",
        o = "deleting",
        a = "tempBan",
        s = "clockSkew";
      function c() {
        var n;
        return new Promise((t, r) => {
          ((n = self.indexedDB.open(e.s, 10)).onerror = (n) => {
            r(new Error("getInfoTable failed to load"));
          }),
            (n.onsuccess = t),
            (n.onupgradeneeded = (n) => {
              try {
                var t = n.target.result;
                (t.onerror = (n) => {
                  r(new Error("getInfoTable failed to init"));
                }),
                  t.createObjectStore(i, { keyPath: "key" });
              } catch (n) {
                r(n);
              }
            });
        }).then(() => {
          var t = n.result;
          return (
            (t.onversionchange = () => {
              t.close();
            }),
            new (class {
              constructor(n) {
                this.BF = n;
              }
              readAllEntries() {
                return (
                  (n = this),
                  new Promise((r, e) => {
                    var u = new Map(),
                      o = n.BF.transaction(i, "readonly");
                    ((t = o.objectStore(i).getAll()).onsuccess = (n) => {
                      try {
                        for (
                          var t = n.target.result, i = 0;
                          i < t.length;
                          i++
                        ) {
                          var o = t[i];
                          u.set(o.key, o.value);
                        }
                        r(u);
                      } catch (n) {
                        e(n);
                      }
                    }),
                      (t.onerror = () => {
                        e(new Error("readAllEntries failed"));
                      });
                  })
                );
                var n, t;
              }
              get(n) {
                var t;
                return new Promise((r, e) => {
                  var u = (t = this.BF.transaction(i, "readonly"))
                    .objectStore(i)
                    .get(n);
                  (t.oncomplete = () => {
                    u.result ? r(u.result.value) : r();
                  }),
                    (t.onerror = () => {
                      e(new Error("InfoTable.store failed for " + n));
                    });
                });
              }
              putOrDelete(n, t) {
                var r;
                return new Promise((e, u) => {
                  var o = (r = this.BF.transaction(i, "readwrite")).objectStore(
                    i
                  );
                  void 0 !== t ? o.put({ key: n, value: t }) : o.delete(n),
                    (r.oncomplete = () => {
                      e();
                    }),
                    (r.onerror = () => {
                      u(new Error("InfoTable.store failed for " + n));
                    });
                });
              }
              close() {
                this.BF.close();
              }
              destroyDb() {
                var n;
                return new Promise((t, r) => {
                  this.BF.close(),
                    ((n = self.indexedDB.deleteDatabase(e.s)).onsuccess =
                      () => {
                        t();
                      }),
                    (n.onerror = () => {
                      r(new Error("InfoTable.deleteAll failed"));
                    });
                });
              }
            })(t)
          );
        });
      }
    },
    function (n, t, r) {
      r.d(t, "a", function () {
        return e;
      }),
        r.d(t, "b", function () {
          return i;
        });
      var e = {
        in_app_support_v2_enabled: [233, !1],
        in_app_support_v2_locale_langs: [379, ""],
        in_app_support_v2_numbers: [390, ""],
        in_app_support_v2_number_prefixes: [1031, "15517868"],
        in_app_support_v2_jump_to_group: [819, !1],
        in_app_support_v2_jump_to_group_wait_time_in_ms: [974, 5e3],
        upload_status_thumb_mms_enabled: [246, !1],
        upload_document_thumb_mms_enabled: [247, !1],
        download_status_thumb_mms_enabled: [249, !1],
        download_document_thumb_mms_enabled: [250, !1],
        send_status_thumb_in_message_disabled: [252, !1],
        send_document_thumb_in_message_disabled: [253, !1],
        send_link_thumb_in_message_disabled: [254, !1],
        md_icdc_enabled: [309, !1],
        md_icdc_hash_length: [310, 10],
        important_messages: [363, !1],
        ephemeral_media_private: [382, !1],
        ephemeral_24h_duration: [407, !1],
        disappearing_mode: [536, !1],
        ephemeral_allow_group_members: [432, !1],
        num_days_key_index_list_expiration: [730, 35],
        num_days_before_device_expiry_check: [731, 7],
        message_level_reporting: [535, !1],
        in_app_ban_appeals_enabled: [622, !1],
        ptt_conversation_waveform: [637, !1],
        ptt_waveform_send: [746, !1],
        adv_v2_m4_m5: [753, !1],
        adv_v2_m6: [903, !1],
        tos_3_client_gating_biz_initiated_enabled: [953, !1],
        tos_3_client_gating_enabled: [791, !1],
        tos_3_client_force_fetch_enabled: [792, !1],
        tos_client_state_fetch_enabled: [877, !1],
        tos_client_state_force_fetch_enabled: [878, !1],
        tos_client_state_fetch_iteration: [908, 0],
        country_client_gating_enabled: [1105, !1],
        system_msg_numbers_fb_branded: [
          1035,
          "16505434800,16503130062,16507885324,16508620604,16504228206,447710173736,16315551023,16505361212,16508129150,16315555102,16315558723,16505212669,16507885280,19032707825,0",
        ],
        system_msg_numbers_fb_inc: [1036, ""],
        trusted_contacts: [794, !1],
        trusted_contacts_sender: [995, !1],
        trusted_contacts_ti: [922, !1],
        tctoken_duration: [865, 604800],
        tctoken_num_buckets: [909, 4],
        tctoken_duration_sender: [996, 604800],
        tctoken_num_buckets_sender: [997, 4],
        reactions_receive: [827, !1],
        reactions_send: [828, !1],
        reactions_announcement_only: [1150, !1],
        reaction_cleanup_days: [987, 31],
        reactions_chat_preview: [1605, !1],
        status_quick_reply_enabled: [1455, !1],
        status_quick_reply_receiver_changes_enabled: [1974, !1],
        parent_group_view_enabled: [982, !1],
        parent_group_create_enabled: [1173, !1],
        parent_group_query_ts: [1228, 0],
        parent_group_link_limit: [1238, 50],
        parent_group_link_limit_community_creation: [1990, 10],
        parent_group_admins_limit: [1655, 20],
        parent_group_create_privacy: [2356, !1],
        parent_group_min_participants_for_group_entry_point: [2382, 20],
        parent_group_tap_to_request_enabled: [2436, !1],
        parent_group_tap_to_add_enabled: [2446, !1],
        parent_group_no_disclaimer: [2447, !1],
        community_admin_promotion_one_time_prompt: [1864, !1],
        dev_prop_string: [1064, ""],
        dev_prop_boolean: [1065, !1],
        dev_prop_int: [1066, 0],
        dev_prop_float: [1067, 0],
        order_details_from_cart_enabled: [1107, !1],
        order_details_custom_item_enabled: [1176, !1],
        growth_lock_v0_enabled: [1204, !1],
        image_max_edge: [1576, 1280],
        image_max_kbytes: [1577, 1024],
        image_quality_2: [1578, 80],
        status_image_max_edge: [1580, 1080],
        status_image_quality: [1581, 55],
        num_days_hosted_device_signed_identity_signature_expiration: [2461, 90],
        smb_capi_coexistence_enabled: [2588, !1],
        smb_client_side_linkshim_enabled: [2633, !0],
        smb_client_side_linkshim_signed_regexp: [
          2634,
          "https:\\/\\/n\\.wl\\.co\\/[^/]*\\/[^/]*\\/(.*)$",
        ],
        status_reaction_emojis: [
          1852,
          "[128525, 128514, 128558, 128546, 128591, 128079, 127881, 128175]",
        ],
        ephemeral_messages_allowed_values: [301, "604800"],
        frequently_forwarded_threshold: [302, 5],
        gif_search_enabled: [303, !1],
        kaios_privatestats_max_token_redeem_count: [1175, 64],
        kaios_privatestats_phase3_enabled: [1014, !1],
        kaios_privatestats_phase3_m2_enabled: [1145, !1],
        logger_memory_lines_threshold: [876, 1e3],
        mms4_media_retry_notification_encryption_enabled: [338, !1],
        multicast_limit_global: [339, 2],
        profile_photo_privacy_setting_on_registration: [497, !1],
        send_media_editor: [716, !1],
        voip_call_from_conversation: [380, !0],
        voip_ga_position_in_conversation: [615, "right"],
        test_bool: [171, !1],
        test_int: [172, 0],
        test_string: [173, "kaios_experiment_test_string"],
        test_float: [174, 1],
        kaios_large_group_block_count: [2415, 512],
        stop_abprops_traffic_in_serverprops_response: [315, !1],
        bsp_receipt: [373, !1],
        upload_link_thumb_mms_enabled: [248, !1],
        download_link_thumb_mms_enabled: [251, !1],
        tam_attachment_cache_compaction_enabled: [838, !1],
        business_threads_logging_enabled: [853, !1],
        note_to_self: [1967, !1],
        note_to_self_entry_point: [2630, !1],
        no_delete_message_time_limit: [1011, !1],
        sender_revoke_window_sender: [1333, !1],
        sender_revoke_window_receiver: [1334, !1],
        admin_revoke_receiver: [1177, !1],
        admin_revoke_sender: [1292, !1],
        admin_revoke_history_sync_consumer: [1245, !1],
        revokes_logging_unsampled: [1865, !0],
        admin_hfm_toggle: [1021, !1],
        poll_creation_enabled: [1394, !1],
        poll_receiving_enabled: [1395, !1],
        poll_name_length: [1406, 255],
        poll_option_length: [1407, 100],
        poll_option_count: [1408, 12],
        poll_offline_accuracy: [1409, 30],
        poll_cleanup_days: [1410, 31],
        poll_vote_processing_enabled: [1541, !1],
        poll_result_details_view_enabled: [1948, !0],
        poll_creation_one_on_one_chats_enabled: [2194, !1],
        poll_a11y_enabled: [2390, !1],
        more_reactions_option: [1322, !1],
        silent_group_exit: [1527, !1],
        silent_group_exit_past_participants: [1528, !1],
        silent_group_exit_dialog: [1597, !1],
        silent_group_exit_db: [1613, !1],
        documents_with_captions_receive: [1749, !1],
        documents_with_captions_send: [1750, !1],
        forward_media_with_captions: [1853, !1],
        share_phone_number_on_cart_send_to_direct_connection_biz_enabled: [
          1867,
          !0,
        ],
        voice_status_post_enabled: [1874, !1],
        voice_status_receipt_enabled: [1875, !1],
        admin_include_message_secret_in_cag: [1921, !0],
        product_catalog_qpl_logging_enabled: [2003, !1],
        product_catalog_qpl_direct_connection_status_logging_enabled: [
          2024,
          !1,
        ],
        polls_fast_follow_enabled: [2661, !0],
        poll_chatlist_preview_enabled: [2720, !1],
        polls_search_support_enabled: [2662, !1],
        polls_reply_support_enabled: [2663, !1],
        green_alert_modal_deep_link_enabled: [728, !1],
        client_group_participants_limit: [618, 257],
        privacy_allow_contacts_except: [808, !1],
        keep_in_chat_receiver: [1352, !1],
        keep_in_chat_sender: [1353, !1],
        keep_in_chat_ui_content: [2005, !1],
        kic_orphan_cleanup_days: [1673, 31],
        qm_lean_msg: [1645, !1],
        trusted_contacts_reciprocity: [1437, !1],
        trusted_contacts_chat_state_optimization: [1566, "old"],
        trusted_contacts_op: [1687, !1],
        dm_updated_system_message: [1670, !1],
        keep_in_chat_undo_duration_limit: [1698, 216e3],
        view_once_sp_receiver: [1710, !1],
        view_once_sp_sender: [1711, !1],
        cag_reactions_receive: [2035, !1],
        cag_reactions_send: [2036, !1],
        pnh_cag_show_masked_members: [2346, !1],
        calling_privacy_caller_offer: [1970, !1],
        calling_privacy_caller_send_token: [1971, !1],
        calling_privacy_callee: [1972, !1],
        ephemeral_sync_response: [2714, !1],
        mex_phase3_enabled: [2249, !1],
        mex_phase3_status_flags: [2250, 0],
      };
      function i(n) {
        return e[n][1];
      }
    },
    function (n, t, r) {
      r.d(t, "b", function () {
        return u;
      }),
        r.d(t, "a", function () {
          return o;
        });
      var e = r(142),
        i = { algo: { type: "fibonacci", first: 500, second: 2500 } };
      function u() {
        if (self.registration) return Promise.resolve(self.registration);
        var n = navigator.serviceWorker;
        return n
          ? n
              .getRegistration("./")
              .then(
                (t) =>
                  t ||
                  (__LOG__(2)`getPushEndpoint Registering serviceWorker`,
                  n.register("./serviceWorker.js", { scope: "./" }))
              )
          : Promise.reject(new Error("navigator.serviceWorker is undefined"));
      }
      function o() {
        return u().then((n) =>
          (function n(t, r) {
            return t()
              .then(() => r.pushManager.subscribe())
              .catch(
                (e) => (
                  __LOG__(2)`Error while subscribing to push manager: ${e}`,
                  n(t, r)
                )
              );
          })((0, e.a)(i), n).then((n) => {
            var t = n.toJSON();
            return {
              endpoint: t.endpoint,
              auth: t.keys.auth,
              p256dh: t.keys.p256dh,
            };
          })
        );
      }
    },
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.r(t),
        r.d(t, "loadInfoStore", function () {
          return u;
        });
      var e = r(203),
        i = r(6);
      function u() {
        return (0, e.e)().then((n) =>
          (0, i.X)(n).then((n) => ({
            appMode: n,
            appBuild: i.e.get(),
            lang: i.q.get(),
          }))
        );
      }
      r.d(t, "DEVICE_INFO", function () {
        return i.i;
      }),
        r.d(t, "SERVER_PROPS", function () {
          return i.I;
        }),
        r.d(t, "AB_PROPS", function () {
          return i.b;
        });
    },
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return i;
      }),
        r.d(t, "b", function () {
          return u;
        });
      var e = r(6);
      function i(n) {
        var t = new RegExp(
          /^(?:https:\/\/wa.me\/|whatsapp:\/\/)tos\/?(\d+)(?:\?.*)?$/,
          "i"
        ).exec(n);
        if (!t) return null;
        var r = t[1],
          e = parseInt(r, 10);
        return isNaN(e) ? null : e;
      }
      function u() {
        return e.I.get().userNotice;
      }
    },
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return i;
      });
      var e = r(6);
      function i(n) {
        n.kaiosVoiceCallEnabled512;
        var t = n.kaiosVoiceCallEnabled256,
          r = n.kaiosVoiceCallEnabled512Jio,
          i = e.m.get();
        return null != i && (i >= 512 ? r : r && t);
      }
    },
    function (n, t, r) {
      r.d(t, "a", function () {
        return _;
      });
      var e = r(2),
        i = r(66),
        u = r(37),
        o = r.n(u),
        a = r(121),
        s = r(228),
        c = r(102),
        f = r(40),
        l = r(87),
        d = r(148),
        h = r(96),
        v = r(9),
        p = r(328);
      function g(n) {
        return (0, f.m)((0, a.c)(n));
      }
      function _(n) {
        var t, r, u;
        switch (n.type) {
          case e.f.TEXT:
          case e.f.EXTENDED_TEXT:
            (r = { type: "text", text: g(n.text) }),
              (u = (0, c.e)(n.text, n.mentionedJids));
            break;
          case e.f.FUTUREPROOF:
            r = { type: "futureproof", subtype: n.subtype };
            break;
          case e.f.REVOKED:
            (r = { type: "revoked" }),
              null != n.adminJid && (r.adminJid = n.adminJid);
            break;
          case e.f.CIPHERTEXT:
            r = { type: "ciphertext" };
            break;
          case e.f.MD_PLACEHOLDER:
            r = { type: "placeholder" };
            break;
          case e.f.IDENTITY_CHANGE:
          case e.f.PRIVACY_CHANGE:
            r = null;
            break;
          case e.f.GROUP_NOTIFICATION:
            r = (0, i.d)(n);
            break;
          case e.f.BUSINESS_NOTIFICATION:
            r = (0, i.b)(n);
            break;
          case e.f.STICKER:
            r = { type: "sticker" };
            break;
          case e.f.IMAGE:
            null != n.viewOnceState && (0, h.b)(n)
              ? (r = { type: "viewOnceImage", viewOnceState: n.viewOnceState })
              : ((r = { type: "image", caption: n.text ? g(n.text) : null }),
                n.text && (u = (0, c.e)(n.text, n.mentionedJids)));
            break;
          case e.f.PTT:
            r = { type: "voice", isPtt: !0, duration: n.duration };
            break;
          case e.f.VIDEO:
            null != n.viewOnceState && (0, h.b)(n)
              ? (r = { type: "viewOnceVideo", viewOnceState: n.viewOnceState })
              : ((r = {
                  type: "video",
                  duration: n.duration,
                  caption: n.text ? g(n.text) : null,
                }),
                n.text && (u = (0, c.e)(n.text, n.mentionedJids)));
            break;
          case e.f.GIF:
            (r = { type: "gif", caption: n.text ? g(n.text) : null }),
              n.text && (u = (0, c.e)(n.text, n.mentionedJids));
            break;
          case e.f.AUDIO:
            r = { type: "voice", duration: n.duration, isPtt: !1 };
            break;
          case e.f.VCARD:
            r = {
              type: "vcard",
              displayNames: (0, s.l)(n.contacts).map((n) =>
                (0, a.c)(n.displayName)
              ),
              total: n.contacts.length,
            };
            break;
          case e.f.LOCATION:
            r = {
              type: "location",
              name: n.name ? (0, a.c)(n.name) : void 0,
              address: n.address ? (0, a.c)(n.address) : void 0,
            };
            break;
          case e.f.GROUP_INVITE:
            r = {
              type: "group_invite",
              groupName: g(n.groupName),
              inviteExpiration: n.inviteExpiration,
            };
            break;
          case e.f.RICH_HSM:
            var f = (0, d.c)(n.title, n.content, n.footer);
            (r = {
              type: "rich_hsm",
              text: g(f),
              subtype: (0, d.d)(n.richContent),
            }),
              (u = (0, c.e)(f));
            break;
          case e.f.HSM_BUTTON_REPLY:
            r = { type: "hsm_button_reply", text: g(n.selectedDisplayText) };
            break;
          case e.f.DOCUMENT:
            var _ = n.contactsCount;
            r =
              n.isVCard && null != _
                ? {
                    type: "vcard",
                    displayNames: n.uiVCards
                      ? n.uiVCards.map((n) => n.displayName)
                      : [(0, a.c)((0, l.i)(n.fileName))],
                    total: _,
                  }
                : {
                    type: "document",
                    fileName: n.fileName,
                    mimetype: n.mimetype,
                  };
            break;
          case e.f.CONTACT_BLOCK_CHANGE:
            r = { type: "contact_block_change", blocked: n.blocked };
            break;
          case e.f.EPHEMERAL:
            "fail" === n.subtype
              ? (r = {
                  type: "ephemeral_change_fail",
                  expiration: n.expiration,
                })
              : "default-disappearing-mode" === n.subtype
              ? (r = {
                  type: "default-disappearing-mode",
                  ephemeralExpiration: n.ephemeralExpiration,
                  initiator: n.initiator,
                })
              : "keep-in-chat" === n.subtype
              ? (r = { type: "keep-in-chat" })
              : (n.subtype,
                (r = {
                  type: "ephemeral_change",
                  ephemeralExpiration: n.ephemeralExpiration,
                }),
                n.updated && (r.updated = !0));
            break;
          case e.f.POLL:
            r = { type: "poll", name: g(n.name) };
            break;
          default:
            (0, o.a)(n);
        }
        if (!r) return null;
        var m = {
          id: n.id,
          meta: (0, p.a)(n),
          formatting: null == (t = u) ? void 0 : t.styles,
          content: r,
          ts: n.ts,
          mentionedJids: n.mentionedJids,
          validUntil: null == n ? void 0 : n.validUntil,
        };
        return (
          (function (n) {
            var t;
            return (null == (t = n.quoted) ? void 0 : t.remoteJid) === v.h;
          })(n) && (m.isStatusReply = !0),
          m
        );
      }
    },
    ,
    ,
    function (n, t, r) {
      r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "a", function () {
          return s;
        });
      var e = r(45),
        i = r(64),
        u = r(21),
        o = r(44);
      function a(n, t, r) {
        var a = null != n ? (0, o.b)(n) : null,
          s = null != a ? a : (0, i.d)(n.jid),
          c = { body: (0, u.k)(101), data: { action: e.f }, tag: (0, e.l)(t) };
        ("short" === r ? e.s : e.r)(s, c);
      }
      function s() {
        (0, e.n)(e.f).then((n) => {
          n.forEach((n) => {
            n.close();
          });
        });
      }
    },
    function (n, t, r) {
      r.d(t, "c", function () {
        return f;
      }),
        r.d(t, "a", function () {
          return p;
        }),
        r.d(t, "b", function () {
          return g;
        });
      var e = r(102),
        i = r(21),
        u = r(124),
        o = r(42),
        a = r(11),
        s = r(45),
        c = r(40);
      function f(n, t, r, a, f, p, g) {
        if (p.showReactions && !(0, c.k)(r)) {
          var _ = n.author;
          return (0, s.o)(s.g, (0, s.m)(r.id)).then((c) => {
            if (null == n.text) {
              var m = c[0];
              return m ? v([t.id], _, r, m, a, p) : void 0;
            }
            var y,
              b = { id: n.id, text: n.text, author: _, msgId: n.msgId },
              w = c.length > 0 ? c[0].data : void 0;
            if ("ONE_TO_ONE" === r.type) {
              if (w && "ONE_TO_ONE" !== w.type) return;
              y = (function (n, t, r, a, c, f, d) {
                var h = r.id,
                  v = n.author,
                  p = n.id,
                  g = t.id,
                  _ = d ? d.reactions : {};
                if (_[g] !== p) {
                  _[g] = p;
                  var m = Object.keys(_).length;
                  if (0 !== m)
                    return 1 === m && f.showPreviews
                      ? (function (n, t, r, a, c) {
                          var f = (0, s.q)(a, n.author),
                            l = (0, s.m)(r),
                            d = n.text;
                          if ((0, o.n)(t.content)) {
                            var h = (0, u.e)(t.content, a, t.mentionedJids, c),
                              v = {};
                            return (
                              (v[t.id] = n.id),
                              {
                                title: f,
                                options: {
                                  body: (0, i.k)([
                                    (0, i.m)(h),
                                    (0, e.b)(d),
                                    229,
                                  ]),
                                  data: {
                                    chatId: r,
                                    type: "ONE_TO_ONE",
                                    reactions: v,
                                    action: s.g,
                                  },
                                  tag: l,
                                },
                              }
                            );
                          }
                        })(n, t, h, a, c)
                      : l(h, v, _, a);
                } else __LOG__(3)`Reaction was already notified`;
              })(b, t, r, a, f, p, w);
            } else {
              if (w && "GROUP" !== w.type) return;
              y = (function (n, t, r, e, i, u, o) {
                var a = t.id,
                  s = n.id,
                  c = n.author,
                  f = u.showPreviews
                    ? { dbReaction: n, msg: t, user: i }
                    : "no-content";
                if (null == o) {
                  var l = {};
                  return (l[t.id] = n.id), d(f, c, l, r, e);
                }
                var v = o.reactions;
                return v[c] && v[c][a] === s
                  ? void __LOG__(3)`Reaction was already notified`
                  : (v[c] || (v[c] = {}),
                    (v[c][a] = s),
                    1 === Object.keys(v).length && u.showPreviews
                      ? d(f, c, v[c], r, e)
                      : h(u.showPreviews ? c : "no-author", v, r, e));
              })(b, t, r, a, f, p, w);
            }
            if (y) {
              if ((__LOG__(2)`Notify new reaction`, "short" !== g))
                return (0, s.r)(y.title, y.options);
              (0, s.s)(y.title, y.options);
            } else __LOG__(3)`Invalid reaction notification`;
          });
        }
      }
      function l(n, t, r, e) {
        var u = (0, s.q)(e, t),
          o = (0, s.m)(n),
          a = Object.keys(r).length;
        return {
          title: u,
          options: {
            body: a <= 99 ? (0, i.k)([a, 228]) : (0, i.k)(710),
            data: { chatId: n, type: "ONE_TO_ONE", reactions: r, action: s.g },
            tag: o,
          },
        };
      }
      function d(n, t, r, a, c) {
        var f,
          l = (0, s.q)(c, t),
          d = (0, i.k)([(0, i.m)(l), (0, i.m)(a.groupInfo.title), 227]),
          h = a.id,
          v = (0, s.m)(h),
          p = Object.keys(r).length;
        if (0 !== p) {
          f =
            1 === p && "no-content" !== n
              ? (function (n, t, r, a) {
                  var s = n.text;
                  if ((0, o.n)(t.content)) {
                    var c = (0, u.e)(t.content, r, t.mentionedJids, a);
                    return (0, i.k)([(0, i.m)(c), (0, e.b)(s), 225]);
                  }
                })(n.dbReaction, n.msg, c, n.user)
              : p <= 99
              ? (0, i.k)([p, 226])
              : (0, i.k)(709);
          var g = {};
          return (
            (g[t] = r),
            {
              title: d,
              options: {
                body: f,
                data: { chatId: h, type: "GROUP", reactions: g, action: s.g },
                tag: v,
              },
            }
          );
        }
      }
      function h(n, t, r, e) {
        var u,
          o = r.id,
          a = (0, s.m)(o),
          c = r.groupInfo.title,
          f = Object.keys(t).length;
        if ("no-author" === n) u = f <= 99 ? (0, i.k)([f, 224]) : (0, i.k)(708);
        else {
          var l = (0, s.q)(e, n);
          u =
            f - 1 <= 99
              ? (0, i.k)([(0, i.m)(l), f - 1, 223])
              : (0, i.k)([(0, i.m)(l), 222]);
        }
        return {
          title: c,
          options: {
            body: u,
            data: { chatId: o, type: "GROUP", reactions: t, action: s.g },
            tag: a,
          },
        };
      }
      function v(n, t, r, e, i, u) {
        var o, c;
        if ("ONE_TO_ONE" === e.data.type && "ONE_TO_ONE" === r.type) {
          var f = (function (n, t, r, e, i) {
            var u = t.reactions,
              o = t.chatId,
              a = 0;
            if (
              (n.forEach((n) => {
                null != u[n] && (delete u[n], a++);
              }),
              0 !== a)
            ) {
              if (0 !== Object.keys(u).length) return l(o, e.jid, u, i);
              r.close();
            }
          })(n, e.data, e, r, i);
          if (!f) return;
          (c = f.title), (o = f.options);
        } else {
          if ("GROUP" !== e.data.type || "GROUP" !== r.type)
            return void __LOG__(
              4
            )`Wrong combination of chat & notification types`;
          var v = (function (n, t, r, e, i, u, o) {
            var s,
              c = r.reactions;
            s = "all" === t ? (0, a.x)(c) : [t];
            var f = 0;
            if (
              (s.forEach((t) => {
                var r = c[t];
                n.forEach((n) => {
                  null != r[n] &&
                    (delete r[n],
                    f++,
                    0 === Object.keys(r).length && delete c[t]);
                });
              }),
              0 !== f)
            ) {
              var l = (0, a.x)(c);
              return 0 === l.length
                ? void e.close()
                : 1 === l.length && o.showPreviews
                ? d("no-content", l[0], c[l[0]], i, u)
                : h("no-author", c, i, u);
            }
          })(n, t, e.data, e, r, i, u);
          if (!v) return;
          (c = v.title), (o = v.options);
        }
        o &&
          (__LOG__(2)`Update existing reaction notification`, (0, s.s)(c, o));
      }
      function p(n) {
        return (0, s.o)(s.g, (0, s.m)(n))
          .then((n) => n.forEach((n) => n.close()))
          .catch((n) => {
            __LOG__(4)`closeChatReactionNotifications sw error: ${n}`;
          });
      }
      function g(n, t, r, e) {
        return (0, s.o)(s.g, (0, s.m)(n.id))
          .then((i) =>
            i.forEach((i) => {
              v(t, "all", n, i, r, e);
            })
          )
          .catch((n) => {
            __LOG__(4)`closeMsgsReactionNotifications sw error: ${n}`;
          });
      }
    },
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "c", function () {
          return c;
        }),
        r.d(t, "d", function () {
          return f;
        }),
        r.d(t, "b", function () {
          return l;
        }),
        r.d(t, "e", function () {
          return d;
        });
      var e = r(8),
        i = r.n(e),
        u = r(43),
        o = r(180),
        a = {
          [o.a.INT]: "number",
          [o.a.FLOAT]: "number",
          [o.a.STRING]: "string",
          [o.a.BOOL]: "boolean",
        };
      function s(n, t) {
        if (null == t || 0 === t.length) return n;
        for (var r = new Map(), e = 0; e < n.length; e += 3) {
          var u = n[e];
          r.set(u, e);
        }
        for (var o = 0; o < t.length; ++o) {
          var s = i()(t[o], 3),
            c = s[0],
            f = s[1],
            l = s[2];
          if (null != l) {
            var d = r.get(c);
            if (null != d && void 0 !== n[d + 2]) continue;
            a[f] === typeof l &&
              (null == d
                ? (r.set(c, n.length), n.push(c, f, l))
                : (n[d + 2] = l));
          }
        }
        return n;
      }
      function c(n) {
        for (var t = new Map(), r = new Map(), e = 0; e < n.length; e += 4) {
          var i = n[e],
            u = n[e + 1],
            a = n[e + 2],
            s = n[e + 3];
          if (a === o.a.FLOAT)
            throw new Error(
              "Float attributes are currently not supported in runtime"
            );
          if (!Array.isArray(i))
            return (
              __LOG__(4)`logAttributes WAM channel is not an array`,
              void SEND_LOGS("wam-log-attributes")
            );
          i.includes("regular") && t.set(u, s),
            i.includes("private") && r.set(u, s);
        }
        return { deltaRegular: t, deltaPrivate: r };
      }
      function f(n, t) {
        var r = [];
        return (
          t.forEach((t) => {
            var e = t.channel;
            if (null == e) {
              if ("regular" !== n) return;
            } else if (e !== n) return;
            if (t.finished) {
              var i = new Uint8Array((0, u.b)(t.buffer)),
                o = t.key;
              r.push({ key: o, content: i });
            }
          }),
          r
        );
      }
      function l(n, t, r, e, i) {
        var o = (function (n) {
          return JSON.stringify([n.streamId, n.sequenceNumber, n.channel]);
        })(n);
        return {
          bufferKey: o,
          meta: { streamId: n.streamId, sequenceNumber: n.sequenceNumber },
          bufferRow: {
            key: o,
            channel: t,
            streamId: r,
            buffer: (0, u.d)(e),
            finished: i,
          },
        };
      }
      function d(n) {
        var t = null;
        return n && (t = n.sequenceNumber), t;
      }
    },
    ,
    ,
    function (n, t, r) {
      r.d(t, "k", function () {
        return d;
      }),
        r.d(t, "d", function () {
          return v;
        }),
        r.d(t, "a", function () {
          return p;
        }),
        r.d(t, "i", function () {
          return T;
        }),
        r.d(t, "c", function () {
          return B;
        }),
        r.d(t, "b", function () {
          return U;
        }),
        r.d(t, "h", function () {
          return q;
        }),
        r.d(t, "g", function () {
          return K;
        }),
        r.d(t, "j", function () {
          return F;
        }),
        r.d(t, "m", function () {
          return z;
        }),
        r.d(t, "e", function () {
          return H;
        }),
        r.d(t, "f", function () {
          return W;
        }),
        r.d(t, "l", function () {
          return V;
        });
      var e = r(8),
        i = r.n(e),
        u = r(15),
        o = r(7),
        a = r(11),
        s = r(44),
        c = r(24),
        f = "BEGIN:VCARD",
        l = "END:VCARD";
      function d(n) {
        var t = new Set();
        return (
          n.forEach((n) => {
            n.phoneNumbers &&
              n.phoneNumbers.forEach((n) => {
                n.formattedNumber && t.add(n.formattedNumber);
              });
          }),
          t
        );
      }
      function h(n) {
        return (
          n.formattedContactName ||
          (n.firstName && n.lastName
            ? `${n.firstName} ${n.lastName}`
            : void 0) ||
          n.firstName ||
          n.lastName ||
          n.nickname ||
          (function (n) {
            var t;
            return n.phoneNumbers
              ? null == (t = n.phoneNumbers[0])
                ? void 0
                : t.formattedNumber
              : null;
          })(n) ||
          (function (n) {
            var t;
            return n.emails
              ? null == (t = n.emails[0])
                ? void 0
                : t.value
              : null;
          })(n) ||
          "-"
        );
      }
      function v(n) {
        return h(n);
      }
      function p(n, t) {
        var r = t.reduce(
            (n, t) => (t.phonebookPhone && (n[t.phonebookPhone] = t), n),
            {}
          ),
          e = 1,
          i = [];
        i.push(f),
          i.push(S("VERSION", "3.0")),
          i.push(
            S(
              "N",
              A([n.lastName, n.firstName, n.middleName, n.prefix, n.suffix])
            )
          ),
          i.push(S("FN", h(n))),
          n.nickname && i.push(S("NICKNAME", n.nickname)),
          n.phoneticFirstName &&
            i.push(S("X-PHONETIC-FIRST-NAME", n.phoneticFirstName)),
          n.phoneticLastName &&
            i.push(S("X-PHONETIC-LAST-NAME", n.phoneticLastName)),
          (n.company || n.department) &&
            i.push(S("ORG", A([n.company, n.department]))),
          n.jobTitle && i.push(S("TITLE", n.jobTitle));
        var u = n.bizName;
        n.phoneNumbers &&
          n.phoneNumbers.forEach((n) => {
            var t,
              o = n.label,
              a = r[n.formattedNumber];
            (u =
              u ||
              (null == a || null == (t = a.verifiedInfo) ? void 0 : t.name)),
              o
                ? (i.push(w(g(n, a), e, n.formattedNumber, o)), e++)
                : i.push(S(g(n, a), n.formattedNumber));
          }),
          n.emails &&
            n.emails.forEach((n) => {
              var t = n.label;
              t
                ? (i.push(w(_(n), e, n.value, t)), e++)
                : i.push(S(_(n), n.value));
            }),
          n.addresses &&
            n.addresses.forEach((n) => {
              var t = n.label,
                r = A(["", "", n.street, n.city, n.state, n.zip, n.country]);
              t ? i.push(w(b(n), e, r, t)) : i.push(E(e, b(n), r)),
                n.countryCode && i.push(E(e, "X-ABADR", n.countryCode)),
                e++;
            }),
          n.urls &&
            n.urls.forEach((n) => {
              var t = n.label,
                r = n.value;
              t ? (i.push(w(m(n), e, r, t)), e++) : i.push(S(m(n), r));
            }),
          n.ims &&
            n.ims.forEach((n) => {
              var t = n.label,
                r = n.userId;
              t ? (i.push(w(y(n), e, r, t)), e++) : i.push(S(y(n), r));
            });
        var o = n.birthday;
        if (o) {
          var a = (function (n) {
            var t = new Date(n);
            if (isNaN(t)) {
              if (8 !== n.length) return null;
              t = new Date(
                parseInt(n.substring(0, 4), 10),
                parseInt(n.substring(4, 6), 10) - 1,
                parseInt(n.substring(6, 8), 10)
              );
            }
            return t;
          })(o);
          a &&
            !isNaN(a) &&
            i.push(
              S(
                { key: "BDAY", extras: { type: "date" } },
                a ? a.toISOString().slice(0, 10) : o
              )
            );
        }
        var s = n.photo;
        return (
          s && i.push(S({ key: "PHOTO", extras: { BASE64: "" } }, s)),
          u && i.push(S("X-WA-BIZ-NAME", u)),
          i.push(l),
          i.join("\n")
        );
      }
      function g(n, t) {
        var r = {};
        return (
          n.type &&
            ("_HOMEFAX" === n.type
              ? (r.type = "HOME;type=FAX")
              : "_WORKFAX" === n.type
              ? (r.type = "WORK;type=FAX")
              : (r.type = n.type)),
          n.jid ? (r.waid = (0, o.u)(n.jid)) : t && (r.waid = (0, o.u)(t.jid)),
          { key: "TEL", extras: r }
        );
      }
      function _(n) {
        var t = {};
        return (
          n.type ? (t.type = "INTERNET;type=" + n.type) : (t.type = "INTERNET"),
          { key: "EMAIL", extras: t }
        );
      }
      function m(n) {
        var t = {};
        return n.type && (t.type = n.type), { key: "URL", extras: t };
      }
      function y(n) {
        var t = {};
        return (
          n.type && (t.type = n.type),
          { serviceKey: "X-" + n.service, extras: t }
        );
      }
      function b(n) {
        var t = {};
        return n.type && (t.type = n.type), { key: "ADR", extras: t };
      }
      function w(n, t, r, e) {
        return E(t, n, r) + "\n" + E(t, "X-ABLabel", e);
      }
      function k(n) {
        if ("string" == typeof n) return n;
        var t = (0, a.w)(n.extras).map((n) => {
            var t = i()(n, 2),
              r = t[0],
              e = t[1];
            return e ? `${r}=${e}` : r;
          }),
          r = n.key || n.serviceKey;
        return 0 === t.length ? r : `${r};${t.join(";")}`;
      }
      function E(n, t, r) {
        return `item${n}.${k(t)}:${r}`;
      }
      function S(n, t) {
        return `${k(n)}:${t}`;
      }
      function A(n) {
        return n.join(";");
      }
      var O = /\r\n|\r|\n/,
        I = /^([^:]+):(.*)$/,
        C = /^([^.]+)\.(.*)$/;
      function T(n) {
        var t = n.split(O),
          r = { version: void 0 },
          e = [],
          i = {},
          o = [],
          a = {};
        return (
          t.forEach((n) => {
            if (n !== f && n !== l) {
              var t = I.exec(n);
              if (t) {
                var s = t[1],
                  c = t[2].split(";"),
                  d = C.exec(s);
                d && (s = d[2]);
                var h = (function (n) {
                    var t = N.exec(n);
                    return t ? u.l.find((n) => n === t[1]) : null;
                  })(s),
                  v = null;
                if (!h) {
                  if (
                    !(v = (function (n) {
                      if ("X-ABLabel" === n || "X-ABADR" === n) return null;
                      var t = $.exec(n);
                      return t ? t[1] : null;
                    })(s))
                  )
                    return;
                  var p = M(c, 0);
                  if (!p) return;
                  var g = { type: L(s) || void 0, service: v, userId: p };
                  return (
                    d &&
                      (i[d[1]] = (n) => {
                        g.label = n;
                      }),
                    r.ims || (r.ims = []),
                    void r.ims.push(g)
                  );
                }
                if (
                  (function (n) {
                    switch (n) {
                      case "TEL":
                      case "EMAIL":
                      case "URL":
                      case "ADR":
                      case "_IM":
                      case "X-ABADR":
                      case "X-ABLabel":
                        return !0;
                    }
                    return !1;
                  })(h)
                )
                  switch (h) {
                    case "X-ABLabel":
                      d && e.push({ reference: d[1], value: M(c, 0) || "" });
                      break;
                    case "X-ABADR":
                      d && o.push({ reference: d[1], value: M(c, 0) || "" });
                      break;
                    case "TEL":
                      var _ = M(c, 0);
                      if (_) {
                        var m = {
                          type: j(s) || void 0,
                          jid: D(s) || void 0,
                          formattedNumber: _,
                          label: R(s) || void 0,
                        };
                        d &&
                          (i[d[1]] = (n) => {
                            m.label = n;
                          }),
                          r.phoneNumbers || (r.phoneNumbers = []),
                          r.phoneNumbers.push(m);
                      }
                      break;
                    case "EMAIL":
                      var y = M(c, 0);
                      if (y) {
                        var b = {
                          type: L(s) || void 0,
                          value: y,
                          label: G(s) || void 0,
                        };
                        d &&
                          (i[d[1]] = (n) => {
                            b.label = n;
                          }),
                          r.emails || (r.emails = []),
                          r.emails.push(b);
                      }
                      break;
                    case "URL":
                      var w = M(c, 0);
                      if (w) {
                        var k = { type: L(s) || void 0, value: w };
                        d &&
                          (i[d[1]] = (n) => {
                            k.label = n;
                          }),
                          r.urls || (r.urls = []),
                          r.urls.push(k);
                      }
                      break;
                    case "ADR":
                      var E = {
                        type: L(s) || void 0,
                        street: M(c, 2),
                        city: M(c, 3),
                        state: M(c, 4),
                        zip: M(c, 5),
                        country: M(c, 6),
                        label: x(s) || void 0,
                      };
                      d &&
                        ((i[d[1]] = (n) => {
                          E.label = n;
                        }),
                        (a[d[1]] = (n) => {
                          E.countryCode = n;
                        })),
                        r.addresses || (r.addresses = []),
                        r.addresses.push(E);
                      break;
                    default:
                      __LOG__(2)`Unknown name for multi field: ${h}`;
                  }
                else
                  switch (h) {
                    case "N":
                      (r.lastName = M(c, 0)),
                        (r.firstName = M(c, 1)),
                        (r.middleName = M(c, 2)),
                        (r.prefix = M(c, 3)),
                        (r.suffix = M(c, 4));
                      break;
                    case "FN":
                      r.formattedContactName = M(c, 0);
                      break;
                    case "NICKNAME":
                      r.nickname = M(c, 0);
                      break;
                    case "VERSION":
                      r.version = M(c, 0);
                      break;
                    case "X-PHONETIC-FIRST-NAME":
                      r.phoneticFirstName = M(c, 0);
                      break;
                    case "X-PHONETIC-LAST-NAME":
                      r.phoneticLastName = M(c, 0);
                      break;
                    case "X-WA-BIZ-NAME":
                      r.bizName = M(c, 0);
                      break;
                    case "ORG":
                      (r.company = M(c, 0)), (r.department = M(c, 1));
                      break;
                    case "TITLE":
                      r.jobTitle = M(c, 0);
                      break;
                    case "BDAY":
                      r.birthday = M(c, 0);
                      break;
                    case "PHOTO":
                      r.photo = M(c, 0);
                      break;
                    default:
                      __LOG__(2)`Unknown name: ${h}`;
                  }
              }
            }
          }),
          e.forEach((n) => {
            i[n.reference] && i[n.reference](n.value);
          }),
          o.forEach((n) => {
            a[n.reference] && a[n.reference](n.value);
          }),
          r
        );
      }
      function M(n, t) {
        return n[t] || void 0;
      }
      var $ = /^X-([^;]+)(;.*)?$/,
        N = /^([^;]+)(;.*)?$/,
        P = /;waid=(\d+)(;.*)?$/;
      function D(n) {
        var t = P.exec(n);
        return t ? (0, o.C)(t[1]) : null;
      }
      function L(n) {
        for (
          var t = /;type=([^;]+)/gi,
            r = t.exec(n),
            e = function () {
              var e = r[1],
                i = u.m.find((n) => n === e);
              if (i) return { v: i };
              r = t.exec(n);
            };
          null != r;

        ) {
          var i = e();
          if ("object" == typeof i) return i.v;
        }
        return null;
      }
      function G(n) {
        for (var t = /;type=([^;]+)/gi, r = t.exec(n); null != r; ) {
          var e = r[1];
          if (!u.m.includes(e) && "INTERNET" !== e) return e;
          r = t.exec(n);
        }
        return null;
      }
      function x(n) {
        var t = /;type=([^;]+)/gi.exec(n);
        if (null != t) {
          var r = t[1];
          if (!u.m.includes(r)) return r;
        }
        return null;
      }
      function R(n) {
        var t = /;type=([^;]+)/gi.exec(n);
        if (null != t) {
          var r = t[1];
          if (!u.k.includes(r) && !u.f.includes(r)) return r;
        }
        return null;
      }
      function j(n) {
        var t = /;type=([^;]+)/gi,
          r = t.exec(n),
          e = null,
          i = !1;
        if (null != r) {
          var o = r[1];
          if (u.f.includes(o)) {
            switch (o) {
              case "fax-home":
                e = "_HOMEFAX";
                break;
              case "fax-office":
                e = "_WORKFAX";
            }
            return e;
          }
        }
        for (
          var a = function () {
            var o = r,
              a = u.k.find((n) => n === o[1]);
            a ? (e = a) : "FAX" === o[1] && (i = !0), (r = t.exec(n));
          };
          null != r;

        )
          a();
        return (
          i &&
            ("HOME" === e
              ? (e = "_HOMEFAX")
              : "WORK" === e && (e = "_WORKFAX")),
          e
        );
      }
      function B(n) {
        var t = n.phoneNumbers || [],
          r = t.find((n) => n.jid && n.formattedNumber);
        return null != r ? r : t.find((n) => n.formattedNumber);
      }
      function U(n, t) {
        var r = B(n);
        return r && r.jid ? (0, s.c)(r.jid, t) : null;
      }
      function q(n) {
        if (!n.phoneNumbers) return null;
        var t = n.phoneNumbers.find((n) => n.jid);
        return t && t.jid ? t.jid : null;
      }
      function K(n, t) {
        var r = n.contact,
          e = { version: "3.0" },
          i = (n, t) => {
            n && n.length > 0 && (e[t] = n[0]);
          };
        if (
          (i(r.givenName, "firstName"),
          i(r.additionalName, "middleName"),
          i(r.familyName, "lastName"),
          i(r.name, "formattedContactName"),
          i(r.jobTitle, "jobTitle"),
          i(r.honorificPrefix, "prefix"),
          i(r.honorificSuffix, "suffix"),
          i(r.org, "company"),
          r.tel)
        ) {
          var u,
            o = [];
          r.tel.forEach((r) => {
            var e,
              i,
              a = r.value,
              s = n.userJids.get(a);
            s
              ? ((u =
                  u ||
                  (null == (e = t[s]) || null == (i = e.verifiedInfo)
                    ? void 0
                    : i.name)),
                o.push({ formattedNumber: a, jid: s }))
              : o.push({ formattedNumber: a });
          }),
            (e.phoneNumbers = o),
            null != u && (e.bizName = u);
        }
        if (
          (r.email && (e.emails = r.email.map((n) => ({ value: n.value }))),
          r.adr &&
            (e.addresses = r.adr.map((n) => ({
              street: n.streetAddress,
              zip: n.postalCode,
              city: n.locality,
              state: n.region,
              country: n.countryName,
            }))),
          r.bday)
        ) {
          var a = new Date(+r.bday),
            s = a.getMonth() + 1,
            c = a.getDate();
          e.birthday = [
            a.getFullYear(),
            s < 10 ? "0" + s : s,
            c < 10 ? "0" + c : c,
          ].join("-");
        }
        return e;
      }
      function F(n, t) {
        return (0, a.h)(n).then((r) => {
          var e = new c.a(r)
            .readString(n.size)
            .split(l)
            .filter((n) => "" !== n.trim());
          return (null == t ? e : e.slice(0, t)).map(T);
        });
      }
      function z(n, t) {
        var r = n.displayName,
          e = t.displayName;
        return r && e ? r.localeCompare(e) : r ? -1 : e ? 1 : 0;
      }
      function H(n) {
        return V(
          n.map((n) => ({
            displayName: v(n),
            jid: q(n) || void 0,
            photo: n.photo,
            bizName: n.bizName,
          }))
        );
      }
      function W(n) {
        return V(n).map((n) => {
          var t = n.displayName,
            r = T(n.vcard);
          return {
            displayName: t,
            jid: q(r) || void 0,
            photo: r.photo,
            bizName: r.bizName,
          };
        });
      }
      function V(n) {
        return n.slice().sort(z).slice(0, 3);
      }
    },
    ,
    ,
    ,
    ,
    ,
    function (n, t, r) {
      function e(n) {
        return "string" == typeof n ? n.trim() : null;
      }
      function i(n) {
        var t = null,
          r = null;
        return (
          Array.isArray(n.givenName) && (r = e(n.givenName[0])),
          Array.isArray(n.name) && (t = e(n.name[0])),
          t || (t = r),
          !t && Array.isArray(n.familyName) && (t = e(n.familyName[0])),
          { fullName: t, shortName: r }
        );
      }
      r.d(t, "a", function () {
        return i;
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return v;
      });
      var e = {
          fub: ["237", "235", "234"],
          af: ["237", "27"],
          agq: ["237"],
          yay: ["234"],
          bss: ["237"],
          agg: ["675"],
          ast: ["34"],
          avu: ["243", "211"],
          az: ["994"],
          bkc: ["237", "241"],
          ksf: ["237"],
          bfd: ["237"],
          bjt: ["221"],
          bcn: ["234"],
          bas: ["237"],
          bsq: ["231"],
          bkv: ["234"],
          bom: ["234"],
          btt: ["234"],
          bin: ["234"],
          bmq: ["226", "223"],
          bs: ["387", "385", "383", "382", "381"],
          fue: ["229", "228"],
          br: ["33"],
          bys: ["234"],
          bwr: ["234"],
          cky: ["234"],
          ca: ["376", "33", "39", "34"],
          tzm: ["212"],
          fuq: ["234"],
          ckl: ["234"],
          asg: ["234"],
          co: ["33", "39"],
          crh: ["7"],
          hr: ["387", "385", "383", "382", "381"],
          mfn: ["234"],
          cs: ["420", "421"],
          dbq: ["237", "234"],
          dnj: ["225", "231"],
          dzg: ["235", "227"],
          ddn: ["229"],
          dgh: ["234"],
          dow: ["237"],
          dua: ["229"],
          nl: ["297", "32", "599", "31", "1", "597"],
          igb: ["234"],
          etr: ["675"],
          enn: ["234"],
          kgy: ["675"],
          et: ["372"],
          ich: ["234"],
          ee: ["229", "233", "228"],
          ewo: ["237"],
          fo: ["298"],
          fmp: ["237"],
          fi: ["358", "46"],
          fr: [
            "32",
            "229",
            "226",
            "257",
            "237",
            "1",
            "236",
            "242",
            "243",
            "235",
            "269",
            "253",
            "240",
            "33",
            "241",
            "509",
            "225",
            "352",
            "261",
            "223",
            "377",
            "227",
            "250",
            "221",
            "248",
            "41",
            "228",
            "678",
          ],
          fur: ["39"],
          ff: ["237", "224", "222", "221"],
          gaj: ["675"],
          gl: ["34"],
          gby: ["234"],
          gba: ["236"],
          gmm: ["237"],
          de: ["43", "32", "49", "423", "352", "41"],
          tof: ["675"],
          god: ["225"],
          ank: ["234"],
          gkn: ["234"],
          gux: ["229", "226", "227", "228"],
          gde: ["237", "234"],
          gkp: ["224"],
          kl: ["299"],
          jgk: ["234"],
          ha: ["229", "237", "235", "233", "225", "227", "234", "249", "228"],
          haw: ["1"],
          hbb: ["234"],
          hu: ["36"],
          dud: ["234"],
          jab: ["234"],
          iby: ["234"],
          is: ["354"],
          idu: ["234"],
          ig: ["240"],
          ige: ["234"],
          ikx: ["256"],
          ikk: ["234"],
          ikq: ["234"],
          smn: ["358"],
          ga: ["353", "44"],
          atg: ["234"],
          izi: ["234"],
          dyo: ["220", "221"],
          jbu: ["237", "234"],
          kab: ["213"],
          kea: ["238"],
          tbd: ["675"],
          hig: ["234"],
          kai: ["234"],
          kkj: ["237", "236", "242"],
          kzr: ["237", "235"],
          naq: ["264"],
          geb: ["675"],
          okr: ["234"],
          ksh: ["49"],
          ses: ["223"],
          khq: ["223"],
          kun: ["291", "251"],
          kup: ["675"],
          kub: ["237", "234"],
          kpe: ["224", "231"],
          nmg: ["237", "240"],
          ku: ["963", "90"],
          lkt: ["1"],
          hia: ["234"],
          lag: ["255"],
          lv: ["371"],
          lmp: ["237"],
          ln: ["242", "243"],
          liv: [],
          lt: ["370"],
          yaz: ["234"],
          nds: ["55", "49", "31"],
          dsb: ["49"],
          lu: ["243"],
          lb: ["32", "33", "49", "352"],
          mda: ["234"],
          mb: ["261"],
          mt: ["356"],
          mi: ["64"],
          arn: ["56"],
          mas: ["254", "255"],
          ffm: ["223"],
          mql: ["229", "228"],
          mbo: ["237"],
          mbu: ["234"],
          mif: ["237"],
          mzm: ["234"],
          mua: ["237", "235"],
          sur: ["234"],
          nv: ["1"],
          anc: ["234"],
          nnh: ["237"],
          jgo: ["237"],
          fuv: ["237", "234"],
          nin: ["234"],
          dgi: ["226"],
          se: ["358", "46", "47"],
          nso: ["27"],
          ann: ["234"],
          oc: ["33", "39", "377", "34"],
          pbi: ["237"],
          pip: ["234"],
          pl: ["48"],
          pt: [
            "244",
            "55",
            "238",
            "240",
            "245",
            "853",
            "258",
            "351",
            "239",
            "670",
          ],
          prg: [],
          fuf: ["224", "223", "221", "232"],
          qu: ["54", "591", "57", "593", "51"],
          ro: ["373", "40"],
          cla: ["234"],
          sav: ["221"],
          sg: ["236", "235", "243"],
          gd: ["44"],
          seh: ["258"],
          sr: ["387", "385", "383", "382", "381"],
          sh: ["387", "385", "383", "382", "381"],
          srr: ["220", "221"],
          sch: ["39"],
          sld: ["226"],
          sms: ["358"],
          sk: ["420", "421"],
          sl: ["386"],
          sok: ["235"],
          es: [
            "54",
            "501",
            "591",
            "56",
            "57",
            "506",
            "53",
            "593",
            "503",
            "240",
            "502",
            "504",
            "52",
            "505",
            "507",
            "595",
            "51",
            "34",
            "1",
            "598",
            "58",
          ],
          srn: ["597"],
          gsw: ["43", "33", "49", "423", "41"],
          shi: ["212"],
          tal: ["234"],
          tmh: ["223"],
          taq: ["226", "223"],
          tan: ["234"],
          twq: ["227"],
          blt: ["856", "84"],
          yer: ["234"],
          tuq: ["235", "218", "227", "234"],
          ttr: ["234"],
          tik: ["237"],
          to: ["676"],
          dts: ["223"],
          kdl: ["234"],
          tsw: ["234"],
          tr: ["90"],
          tk: ["993"],
          hsb: ["49"],
          vai: ["231", "232"],
          vi: ["855", "84"],
          vo: [],
          vut: ["237", "234"],
          wja: ["234"],
          wa: ["32"],
          wae: ["43", "39", "423", "41"],
          wji: ["234"],
          cy: ["44"],
          fy: ["31"],
          fuh: ["229", "226", "227"],
          yba: ["234"],
          yav: ["237"],
          yle: ["675"],
          yll: ["675"],
          yo: ["229", "234"],
          dje: ["227"],
          gnd: ["237"],
        },
        i = r(195),
        u = {
          í: [
            "ast",
            "ksf",
            "bas",
            "ca",
            "cs",
            "dua",
            "nl",
            "ee",
            "ewo",
            "fo",
            "fr",
            "gl",
            "kl",
            "hu",
            "is",
            "ga",
            "dyo",
            "kea",
            "kkj",
            "nmg",
            "lkt",
            "lag",
            "ln",
            "lu",
            "mas",
            "nnh",
            "jgo",
            "pt",
            "qu",
            "seh",
            "sk",
            "es",
            "to",
            "vai",
            "vi",
            "wae",
            "cy",
            "fy",
            "yav",
            "yo",
          ],
          î: [
            "af",
            "agq",
            "bss",
            "bfd",
            "bas",
            "bkv",
            "btt",
            "nl",
            "igb",
            "ewo",
            "fr",
            "fur",
            "gaj",
            "gby",
            "kl",
            "jab",
            "atg",
            "jbu",
            "kkj",
            "naq",
            "ksh",
            "ku",
            "nmb",
            "lmp",
            "ln",
            "mda",
            "mg",
            "mas",
            "mzm",
            "jgo",
            "nin",
            "ann",
            "ro",
            "sg",
            "scn",
            "srn",
            "yer",
            "tr",
            "wa",
            "cy",
            "yav",
            "yle",
          ],
          ü: [
            "agg",
            "ast",
            "az",
            "br",
            "ca",
            "co",
            "cs",
            "nl",
            "etr",
            "et",
            "fr",
            "gl",
            "de",
            "tof",
            "god",
            "hu",
            "tbd",
            "geb",
            "ksh",
            "kup",
            "nds",
            "lb",
            "arn",
            "oc",
            "sg",
            "sk",
            "es",
            "gsw",
            "dts",
            "tr",
            "tk",
            "vo",
            "wa",
            "wae",
            "fy",
            "yll",
          ],
          ċ: ["mt"],
          ī: [
            "agq",
            "bss",
            "bfd",
            "bas",
            "bkv",
            "btt",
            "ddn",
            "igb",
            "kjy",
            "ich",
            "gux",
            "haw",
            "jab",
            "iby",
            "idu",
            "jbu",
            "kub",
            "nmg",
            "lv",
            "mda",
            "mi",
            "mas",
            "mql",
            "nin",
            "prg",
            "gd",
            "to",
            "yba",
            "yav",
          ],
          ı: ["az", "crh", "tr"],
          ļ: ["lv"],
          ł: ["dsb", "nv", "pl", "hsb"],
          š: [
            "bs",
            "hr",
            "cs",
            "dzg",
            "et",
            "fi",
            "smn",
            "geb",
            "khq",
            "ses",
            "kun",
            "lkt",
            "lv",
            "lt",
            "dsb",
            "se",
            "nso",
            "prg",
            "sr",
            "sh",
            "sms",
            "sk",
            "sl",
            "taq",
            "twq",
            "tuq",
            "hsb",
            "wqe",
            "dje",
          ],
          ƙ: [
            "ckl",
            "ank",
            "ha",
            "ikx",
            "kai",
            "hia",
            "mbu",
            "anc",
            "nin",
            "pip",
            "tal",
            "tan",
            "wja",
            "wji",
          ],
          ǀ: ["naq"],
          ǁ: ["naq"],
          ȯ: ["liv"],
          ɑ: ["fmp", "dud", "tmh"],
          ɓ: [
            "fub",
            "yay",
            "bkc",
            "bjt",
            "bcn",
            "bas",
            "bsq",
            "bmq",
            "fue",
            "bys",
            "bwr",
            "cky",
            "fuq",
            "ckl",
            "asg",
            "dbq",
            "dnj",
            "dgh",
            "dow",
            "dua",
            "enn",
            "ff",
            "gby",
            "gba",
            "gmm",
            "ank",
            "gde",
            "gkp",
            "jgk",
            "ha",
            "hbb",
            "ikx",
            "kkj",
            "hig",
            "kzr",
            "kai",
            "kpe",
            "nmg",
            "hia",
            "ffm",
            "mbo",
            "mbu",
            "mif",
            "mzm",
            "mua",
            "sur",
            "anc",
            "fuv",
            "nin",
            "dgi",
            "pbi",
            "pip",
            "fuf",
            "cla",
            "sav",
            "srr",
            "sld",
            "sok",
            "tal",
            "tan",
            "yer",
            "ttr",
            "tik",
            "kdl",
            "tsw",
            "vai",
            "vut",
            "wja",
            "wji",
            "fuh",
            "gnd",
          ],
          ḍ: ["tzm", "kab", "okr", "shi", "tmh", "taq"],
          ṛ: ["tzm", "kab", "shi"],
          ṭ: ["tzm", "kab", "shi", "tmh", "taq"],
          ẉ: [],
          ạ: ["izi", "yaz", "blt", "vi"],
          ẹ: [
            "yay",
            "bom",
            "bin",
            "mfn",
            "dzg",
            "igb",
            "enn",
            "gkn",
            "iby",
            "ikk",
            "ikw",
            "izi",
            "okr",
            "yaz",
            "blt",
            "tan",
            "tuq",
            "vi",
            "yo",
          ],
          ị: [
            "avu",
            "mfn",
            "igb",
            "enn",
            "iby",
            "ig",
            "ige",
            "ikk",
            "ikw",
            "izi",
            "okr",
            "blt",
            "tan",
            "vi",
          ],
        },
        o = new Set([
          "abq",
          "ab",
          "ady",
          "av",
          "az",
          "ba",
          "be",
          "bs",
          "bg",
          "bua",
          "ce",
          "ckt",
          "cu",
          "cv",
          "crh",
          "dar",
          "dng",
          "myv",
          "evn",
          "gag",
          "inh",
          "kbd",
          "xal",
          "krc",
          "kaa",
          "kk",
          "kjh",
          "kca",
          "ky",
          "kv",
          "koi",
          "kpy",
          "kum",
          "lbe",
          "lez",
          "mk",
          "mns",
          "chm",
          "mdf",
          "mn",
          "ttt",
          "gld",
          "yrk",
          "nog",
          "os",
          "ru",
          "rue",
          "sr",
          "sh",
          "cjs",
          "alt",
          "tab",
          "tg",
          "tt",
          "tkr",
          "tk",
          "tyv",
          "ude",
          "udm",
          "uk",
          "uz",
          "mrj",
          "sah",
        ]),
        a = new Set([
          "374",
          "994",
          "375",
          "387",
          "359",
          "995",
          "7",
          "383",
          "996",
          "389",
          "373",
          "976",
          "382",
          "381",
          "992",
          "993",
          "380",
          "998",
        ]);
      function s(n) {
        return a.has(n);
      }
      function c(n) {
        return "авгекмнорстухшщьѕіјѡѵүһӏԁԛԝԧꚙ".includes(n);
      }
      var f = new RegExp("^[a-z0-9-]+$"),
        l = r(9),
        d = r(64),
        h = /^(?:https?:\/\/)?([^/?#]+)(?:[/?#]|$)/i;
      function v(n, t, r, a) {
        var v = n.match(h),
          p = v && v[1];
        if (null == p) return null;
        var g = (0, d.g)(r);
        return (function (n, t, r, a) {
          var l,
            d = n.split("."),
            h = !1;
          if (
            (d.forEach((n) => {
              if ((h = !n.match(f))) {
                if (l) return null;
                l = n;
              }
            }),
            null == l || h)
          )
            return null;
          for (var v = [], p = !0, g = (0, i.c)(l), _ = 0; _ < g.length; _++) {
            var m = g[_];
            if (!(p = p && c(m)) && u[m]) {
              if (v.length >= 2) return null;
              v.push(m);
            }
          }
          if (p)
            return s(r) ||
              s(t) ||
              a.some((n) =>
                (function (n) {
                  return o.has(n);
                })(n)
              )
              ? null
              : new Set(g);
          if (!v.length) return null;
          var y = v.filter((n) => {
            var i = u[n];
            if (null == i) return !1;
            if (a.some((n) => i.includes(n))) return !1;
            for (var o = new Set(), s = 0; s < i.length; s++) {
              var c = e[i[s]];
              if (null != c) for (var f = 0; f < c.length; f++) o.add(c[f]);
            }
            return !o.has(r) && !o.has(t);
          });
          return y.length ? new Set(y) : null;
        })(
          p,
          "whatsapp" === t
            ? ""
            : "lidUser" !== (0, l.A)(t.toString()).jidType
            ? (0, d.g)((0, l.P)(t))
            : "ZZ",
          g,
          a.map((n) => n.toLowerCase())
        );
      }
    },
    function (n, t, r) {
      r.r(t),
        r.d(t, "initPolyfill", function () {
          return u;
        }),
        r.d(t, "initLanguage", function () {
          return o;
        });
      var e = r(21),
        i = null;
      function u() {
        return (
          i ||
            (i = r
              .e(75)
              .then(r.t.bind(null, 486, 7))
              .then(() => r(467)(`./${(0, e.d)().lg}.js`))
              .then(() => {
                var n = Intl.__disableRegExpRestore;
                n && n();
              })),
          i
        );
      }
      function o(n) {
        return (
          (0, e.e)(n),
          r(468)(`./${(0, e.d)().langTag}.js`).then((n) => {
            (0, e.n)(n.default);
          })
        );
      }
    },
    function (n, t, r) {
      function e(n, t) {
        if (n === t) return !0;
        if (!n || !t || ("object" != typeof n && "object" != typeof t))
          return !1;
        var r = Array.isArray(n);
        if (r !== Array.isArray(t)) return !1;
        var i = !0;
        if (r) {
          var u = n.length;
          if (u !== t.length) return !1;
          for (var o = 0; i && o < u; o++) i = e(n[o], t[o]);
          return i;
        }
        for (var a = Object.keys(n), s = 0; i && s < a.length; s++) {
          var c = a[s];
          i = t.propertyIsEnumerable(c) && e(n[c], t[c]);
        }
        return i && Object.keys(t).length === a.length;
      }
      r.d(t, "a", function () {
        return e;
      });
    },
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return i;
      });
      var e = r(85),
        i = (n, t, r) => {
          var i = null,
            u = null,
            o = new Promise((n, o) => {
              (u = o),
                (i = setTimeout(() => {
                  o(new e.b(r)), clearTimeout(i);
                }, t));
            });
          return Promise.race([n, o]).finally(() => {
            u && u(new Error()), clearTimeout(i);
          });
        };
    },
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return s;
        });
      var e = r(7),
        i = [];
      (i[34] = "ES"),
        (i[49] = "DE"),
        (i[52] = "MX"),
        (i[44] = "GB"),
        (i[966] = "SA"),
        (i[39] = "IT"),
        (i[93] = "AF"),
        (i[355] = "AL"),
        (i[213] = "DZ"),
        (i[376] = "AD"),
        (i[244] = "AO"),
        (i[54] = "AR"),
        (i[374] = "AM"),
        (i[297] = "AW"),
        (i[61] = "AU"),
        (i[43] = "AT"),
        (i[994] = "AZ"),
        (i[973] = "BH"),
        (i[880] = "BD"),
        (i[375] = "BY"),
        (i[32] = "BE"),
        (i[501] = "BZ"),
        (i[229] = "BJ"),
        (i[975] = "BT"),
        (i[591] = "BO"),
        (i[387] = "BA"),
        (i[267] = "BW"),
        (i[55] = "BR"),
        (i[246] = "IO"),
        (i[673] = "BN"),
        (i[359] = "BG"),
        (i[226] = "BF"),
        (i[257] = "BI"),
        (i[225] = "CI"),
        (i[855] = "KH"),
        (i[237] = "CM"),
        (i[238] = "CV"),
        (i[236] = "CF"),
        (i[235] = "TD"),
        (i[56] = "CL"),
        (i[86] = "CN"),
        (i[57] = "CO"),
        (i[269] = "KM"),
        (i[242] = "CG"),
        (i[243] = "CD"),
        (i[682] = "CK"),
        (i[506] = "CR"),
        (i[385] = "HR"),
        (i[53] = "CU"),
        (i[599] = "CW"),
        (i[357] = "CY"),
        (i[420] = "CZ"),
        (i[45] = "DK"),
        (i[253] = "DJ"),
        (i[593] = "EC"),
        (i[20] = "EG"),
        (i[503] = "SV"),
        (i[240] = "GQ"),
        (i[291] = "ER"),
        (i[372] = "EE"),
        (i[251] = "ET"),
        (i[298] = "FO"),
        (i[679] = "FJ"),
        (i[358] = "FI"),
        (i[33] = "FR"),
        (i[594] = "GF"),
        (i[689] = "PF"),
        (i[241] = "GA"),
        (i[220] = "GM"),
        (i[995] = "GE"),
        (i[233] = "GH"),
        (i[350] = "GI"),
        (i[30] = "GR"),
        (i[299] = "GL"),
        (i[590] = "GP"),
        (i[502] = "GT"),
        (i[224] = "GN"),
        (i[245] = "GW"),
        (i[592] = "GY"),
        (i[509] = "HT"),
        (i[504] = "HN"),
        (i[852] = "HK"),
        (i[36] = "HU"),
        (i[354] = "IS"),
        (i[91] = "IN"),
        (i[62] = "ID"),
        (i[98] = "IR"),
        (i[964] = "IQ"),
        (i[353] = "IE"),
        (i[972] = "IL"),
        (i[81] = "JP"),
        (i[962] = "JO"),
        (i[254] = "KE"),
        (i[965] = "KW"),
        (i[996] = "KG"),
        (i[856] = "LA"),
        (i[371] = "LV"),
        (i[961] = "LB"),
        (i[266] = "LS"),
        (i[231] = "LR"),
        (i[218] = "LY"),
        (i[423] = "LI"),
        (i[370] = "LT"),
        (i[352] = "LU"),
        (i[853] = "MO"),
        (i[389] = "MK"),
        (i[261] = "MG"),
        (i[265] = "MW"),
        (i[60] = "MY"),
        (i[960] = "MV"),
        (i[223] = "ML"),
        (i[356] = "MT"),
        (i[692] = "MH"),
        (i[596] = "MQ"),
        (i[222] = "MR"),
        (i[230] = "MU"),
        (i[691] = "FM"),
        (i[373] = "MD"),
        (i[377] = "MC"),
        (i[976] = "MN"),
        (i[382] = "ME"),
        (i[212] = "MA"),
        (i[258] = "MZ"),
        (i[95] = "MM"),
        (i[264] = "NA"),
        (i[674] = "NR"),
        (i[977] = "NP"),
        (i[31] = "NL"),
        (i[687] = "NC"),
        (i[64] = "NZ"),
        (i[505] = "NI"),
        (i[227] = "NE"),
        (i[234] = "NG"),
        (i[672] = "NF"),
        (i[850] = "KP"),
        (i[47] = "NO"),
        (i[968] = "OM"),
        (i[92] = "PK"),
        (i[680] = "PW"),
        (i[970] = "PS"),
        (i[507] = "PA"),
        (i[675] = "PG"),
        (i[595] = "PY"),
        (i[51] = "PE"),
        (i[63] = "PH"),
        (i[48] = "PL"),
        (i[351] = "PT"),
        (i[974] = "QA"),
        (i[40] = "RO"),
        (i[7] = "RU"),
        (i[250] = "RW"),
        (i[262] = "RE"),
        (i[508] = "PM"),
        (i[685] = "WS"),
        (i[378] = "SM"),
        (i[221] = "SN"),
        (i[381] = "RS"),
        (i[248] = "SC"),
        (i[232] = "SL"),
        (i[65] = "SG"),
        (i[421] = "SK"),
        (i[386] = "SI"),
        (i[677] = "SB"),
        (i[252] = "SO"),
        (i[27] = "ZA"),
        (i[82] = "KR"),
        (i[211] = "SS"),
        (i[94] = "LK"),
        (i[249] = "SD"),
        (i[597] = "SR"),
        (i[268] = "SZ"),
        (i[46] = "SE"),
        (i[41] = "CH"),
        (i[963] = "SY"),
        (i[239] = "ST"),
        (i[886] = "TW"),
        (i[992] = "TJ"),
        (i[255] = "TZ"),
        (i[66] = "TH"),
        (i[670] = "TL"),
        (i[228] = "TG"),
        (i[676] = "TO"),
        (i[216] = "TN"),
        (i[90] = "TR"),
        (i[993] = "TM"),
        (i[256] = "UG"),
        (i[380] = "UA"),
        (i[971] = "AE"),
        (i[1] = "US"),
        (i[598] = "UY"),
        (i[998] = "UZ"),
        (i[678] = "VU"),
        (i[58] = "VE"),
        (i[84] = "VN"),
        (i[681] = "WF"),
        (i[967] = "YE"),
        (i[260] = "ZM"),
        (i[263] = "ZW"),
        (i[383] = "XK");
      var u = i,
        o = r(64);
      function a(n) {
        var t = (0, o.g)(n),
          r = parseInt(t, 10);
        if (!Number.isNaN(r)) return u[r];
        __LOG__(
          3
        )`extractISOCountryCode: could not extract country code for jid`;
      }
      function s(n) {
        var t = (0, e.u)(n),
          r = (0, o.b)(t),
          i = parseInt(r, 10);
        if (!Number.isNaN(i)) {
          var a = t.substring(r.length);
          return { country: { cc: r, iso: u[i] }, localNumber: a };
        }
        __LOG__(
          3
        )`extractPhoneInfoFromJid: could not extract country code for jid`;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return e;
      }),
        r.d(t, "b", function () {
          return i;
        }),
        r.d(t, "c", function () {
          return u;
        });
      var e = class {
          constructor(n) {
            (this.DG = Promise.resolve()),
              (this.DH = !0),
              (this.DI = null),
              (this.DJ = () => {
                var n = this.DI;
                if (null != n)
                  return (this.DI = null), Promise.all(n).then(this.DJ);
                this.DH = !0;
              }),
              (this.name = n);
          }
          addBlocker(n) {
            var t = n.catch((n) => {
              __LOG__(4)`JobRequirement[${this.name}] blocker errored ${n}`,
                SEND_LOGS("job-blocker-rejected");
            });
            if (this.DH)
              (this.DH = !1),
                (this.DG = Promise.all([this.DG, t]).then(this.DJ));
            else {
              var r = this.DI;
              null != r ? r.push(t) : (this.DI = [t]);
            }
          }
          waitUntilSatisfied() {
            return this.DG;
          }
          isSatisfied() {
            return this.DH;
          }
          isSatisfiable() {
            return !0;
          }
        },
        i = class extends e {
          constructor(n) {
            super(n), super.addBlocker(new Promise(() => {}));
          }
          addBlocker() {}
          isSatisfiable() {
            return !1;
          }
        };
      function u(n, t) {
        var r = n.filter((n) => !n.isSatisfiable());
        if (r.length > 0) {
          var e = r.map((n) => n.name);
          return (n) => (
            null == t || t("unsatisfiable", e, n), r[0].waitUntilSatisfied()
          );
        }
        var i = n.map(() => Promise.resolve()),
          u = Promise.resolve(),
          o = null,
          a = () => {
            if (!i.every((t, r) => t === n[r].waitUntilSatisfied())) {
              var t = [],
                r = n.map((n) => {
                  var r = n.waitUntilSatisfied();
                  return (
                    n.isSatisfied() ||
                      (t.push(n.name),
                      r.then(() => {
                        var r = t.indexOf(n.name);
                        t.splice(r, 1);
                      })),
                    r
                  );
                });
              return (i = r), (o = t), Promise.all(r).then(a);
            }
            o = null;
          };
        return (n) => {
          if (null == o) {
            var r = a();
            null != r && (u = u.then(() => r));
          }
          return (
            null == t || t(null == o ? "satisfied" : "unsatisfied", o, n), u
          );
        };
      }
    },
    function (n, t, r) {
      function e(n, t) {
        try {
          for (
            var r = arguments.length, e = new Array(r > 2 ? r - 2 : 0), i = 2;
            i < r;
            i++
          )
            e[i - 2] = arguments[i];
          return Promise.resolve(n.apply(t, e));
        } catch (n) {
          return Promise.reject(n);
        }
      }
      r.d(t, "a", function () {
        return e;
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return o;
      }),
        r.d(t, "c", function () {
          return a;
        }),
        r.d(t, "b", function () {
          return c;
        });
      var e = r(15),
        i = r(21);
      function u(n) {
        var t;
        return (
          null != (null == n || null == (t = n.duration) ? void 0 : t.repeat)
        );
      }
      function o(n) {
        return 0 === n || 1 === n || 2 === n || 3 === n || 4 === n || 5 === n
          ? n
          : null;
      }
      function a(n) {
        try {
          var t = decodeURIComponent(n);
          return t.startsWith("https://")
            ? { type: "open-link", url: t }
            : (__LOG__(4)`parseUserNoticeLink: links should use HTTPS, ${t}`,
              { type: "invalid" });
        } catch (t) {
          return (
            __LOG__(4)`parseUserNoticeLink: invalid link url, ${n}`,
            { type: "invalid" }
          );
        }
      }
      function s(n) {
        return {
          svgIcon: n.icon.svg,
          title: n.title,
          body: n.body,
          bullets: n.bullets,
          footer: n.footer,
          acceptLabel: n.acceptLabel,
        };
      }
      function c(n) {
        var t = n.currentState,
          r = n.content,
          o = n.snoozed;
        if (null != r)
          if (o)
            __LOG__(
              2
            )`User notice component is snoozed, will repeat showing it again according to 'repeat' in timing object`;
          else {
            var c,
              f = r.banner,
              l = r.nonBlockingModal,
              d = r.blockingModal,
              h = r.version,
              v = (0, i.f)(r.lglc.lg) ? "rtl" : "ltr";
            switch (t) {
              case e.q.TRIGGERED:
              case e.q.FETCHED:
                return;
              case e.q.BANNER_SHOW:
                if (null == f)
                  return void __LOG__(
                    4
                  )`dbUserNoticeToUserNotice: state wants to show the banner but there is none`;
                var p,
                  g = f.actionURL;
                if ("whatsapp:user-notice?action=open-modal" === g) {
                  var _,
                    m = !1;
                  null != l ? (_ = s(l)) : null != d && ((_ = s(d)), (m = !0)),
                    _
                      ? (p = {
                          type: "open-modal",
                          modal: {
                            type: "modal",
                            id: n.id,
                            shouldLogWhenDisplayed: !1,
                            content: _,
                            blocking: m,
                            direction: v,
                            version: h,
                          },
                        })
                      : (__LOG__(
                          4
                        )`dbUserNoticeToUserNotice: banner has an open-modal action but no modal content`,
                        (p = { type: "invalid" }));
                } else p = a(g);
                return {
                  type: "banner",
                  id: n.id,
                  shouldLogWhenDisplayed: u(null == f ? void 0 : f.timing),
                  action: p,
                  content: ((c = f), { svgIcon: c.icon.svg, text: c.text }),
                  direction: v,
                  version: h,
                };
              case e.q.NON_BLOCKING_MODAL_SHOW:
                return null == l
                  ? void __LOG__(
                      4
                    )`dbUserNoticeToUserNotice: state wants to show the non-blocking modal but there is none`
                  : {
                      type: "modal",
                      id: n.id,
                      shouldLogWhenDisplayed: u(null == l ? void 0 : l.timing),
                      content: s(l),
                      blocking: !1,
                      direction: v,
                      version: h,
                    };
              case e.q.BLOCKING_MODAL_SHOW:
                return null == d
                  ? void __LOG__(
                      4
                    )`dbUserNoticeToUserNotice: state wants to show the blocking modal but there is none`
                  : {
                      type: "modal",
                      id: n.id,
                      shouldLogWhenDisplayed: u(null == d ? void 0 : d.timing),
                      content: s(d),
                      blocking: !0,
                      direction: v,
                      version: h,
                    };
              default:
                return;
            }
          }
      }
    },
    ,
    ,
    function (n, t, r) {
      r.d(t, "b", function () {
        return c;
      }),
        r.d(t, "a", function () {
          return f;
        });
      var e = r(37),
        i = r.n(e),
        u = r(21),
        o = r(121),
        a = r(87),
        s = {
          "application/pdf": "pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            "docx",
        };
      function c(n) {
        return s[n] || null;
      }
      function f(n, t) {
        return n.fileName
          ? t
            ? (0, o.c)((0, a.i)(n.fileName))
            : (0, o.c)(n.fileName)
          : (function (n) {
              if (!n) return (0, u.k)(255);
              switch (n) {
                case "pdf":
                  return "PDF";
                case "docx":
                  return "DOCX";
                default:
                  return (0, i.a)(n);
              }
            })(c(n.mimetype));
      }
    },
    ,
    function (n, t, r) {
      r.d(t, "b", function () {
        return c;
      }),
        r.d(t, "e", function () {
          return f;
        }),
        r.d(t, "a", function () {
          return l;
        }),
        r.d(t, "c", function () {
          return d;
        }),
        r.d(t, "d", function () {
          return h;
        });
      var e = r(135),
        i = r(5),
        u = class extends i.b {
          constructor() {
            super(() => {
              var n = new e.a("wa-migrations-1");
              return n.version(1).stores({ migrations: "name" }), n;
            }, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]);
          }
        };
      function o(n) {
        var t;
        return (
          "simple" === n.type ? (t = [n.name]) : (n.type, (t = n.names)), t
        );
      }
      var a = null;
      function s(n) {
        if (a) return a;
        throw new Error(
          `MigrationsRegistry::${n} called before migrations are initialized`
        );
      }
      function c() {
        a ||
          (a = new (class {
            constructor() {
              (this.Ad = new u()), (this.Ae = new Set()), (this.Af = []);
            }
            Ag(n) {
              this.Af.push(n);
            }
            Ah() {
              for (var n = this.Af, t = [], r = 0; r < n.length; ++r) {
                var e = n[r];
                o(e).some((n) => !this.Ae.has(n)) && t.push(e);
              }
              return t;
            }
            Ai() {
              return (0, i.i)(this.Ad.stores.migrations.toArray()).then((n) => {
                n.forEach((n) => {
                  this.Ae.add(n.name);
                });
              });
            }
            Aj(n) {
              return this.Ad.transact("rw", ["migrations"], () => {
                var t = n.map((n) =>
                  this.Ad.stores.migrations
                    .get(n)
                    .then((t) => ({ row: t, name: n }))
                );
                return (0, i.c)(t)
                  .then((n) => {
                    var t = n.map((n) => {
                      var t = n.row,
                        r = n.name;
                      return null != t
                        ? { name: t.name, applied: !0 }
                        : { name: r, applied: !0 };
                    });
                    return this.Ad.stores.migrations.bulkPut(t);
                  })
                  .then(() => {});
              });
            }
          })());
      }
      function f(n) {
        s("registerMigration").Ag(n);
      }
      function l() {
        return s("collectAppliedMigrations").Ai();
      }
      function d() {
        var n = new u(!1);
        return (0, i.i)(n.stores.delete());
      }
      function h(n) {
        var t = s("prepareMigration"),
          r = t.Ah();
        return 0 === r.length
          ? null
          : (n) =>
              r.reduce(
                (r, e) => r.then(() => e.run(n)).then(() => t.Aj(o(e))),
                Promise.resolve()
              );
      }
    },
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return u;
      });
      var e = r(3),
        i = r(7);
      function u(n, t) {
        if (n.knowsSenderKey instanceof Map) return n;
        var r = new Uint8Array(n.knowsSenderKey),
          u = new Map();
        return (
          n.participants.forEach((n, e) => {
            n !== t &&
              u.set(
                (0, i.e)(n),
                ((n) => !!(r[Math.floor(n / 8)] & (1 << n % 8)))(e)
              );
          }),
          Object.assign({}, n, {
            rotateSenderKey: !1,
            senderKeyTimestamp: (0, e.w)(4 * Math.random() * e.f),
            knowsSenderKey: u,
          })
        );
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return u;
      });
      var e = r(9),
        i = r(54);
      function u(n) {
        var t = n.author,
          r = (0, i.i)(t);
        return null != r
          ? { author: r }
          : t === e.a
          ? { fromMe: !0, ack: n.ack }
          : {};
      }
    },
    function (n, t, r) {
      r.d(t, "b", function () {
        return i;
      }),
        r.d(t, "a", function () {
          return u;
        });
      var e = { sentinel: "RESPONSE_NAMESPACE" },
        i = { sentinel: "NOT_HANDLED" },
        u = class {
          constructor() {
            var n = this;
            (this.W = Promise.resolve()),
              (this.X = new Map()),
              (this.Z = 0),
              (this.a = null),
              (this.b = null),
              (this.c = null),
              (this.fireAndForget = function (t, r, e) {
                var i =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3];
                null == n.Y || n.Y(t, r, e), n.e(t, r, e, null, i);
              }),
              (this.sendAndReceive = function (t, r, i) {
                var u =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3];
                return (
                  null == n.Y || n.Y(t, r, i),
                  new Promise((o, a) => {
                    n.e(
                      t,
                      r,
                      i,
                      (t) => {
                        try {
                          var r = s(t);
                          r
                            ? r.call(
                                t,
                                (t) => {
                                  n.e(e, "", t, o, u);
                                },
                                (t) => {
                                  n.e(e, "", t, a, !1);
                                }
                              )
                            : n.e(e, "", t, o, u);
                        } catch (t) {
                          n.e(e, "", t, a, !1);
                        }
                      },
                      u
                    );
                  })
                );
              }),
              (this.d = () => {
                var n = this.b;
                if (n) {
                  for (var t, r = this.X; n && !(t = o(r, n)); )
                    this.b = n = n.nextRoute;
                  if (n && t) {
                    var e = this.f(t, n),
                      u = !0;
                    if (e !== i) {
                      var a = n.prevRoute,
                        s = n.nextRoute;
                      this.b === n && (this.b = s),
                        a ? (a.nextRoute = s) : (this.a = s),
                        s ? (s.prevRoute = a) : ((u = !1), (this.c = a));
                    }
                    return u && this.W.then(this.d), e;
                  }
                }
              });
          }
          hasHandlerForNamespace(n) {
            return this.X.has(n);
          }
          getHandledNamespaces() {
            return Array.from(this.X.keys());
          }
          setOnRouteCalled(n) {
            this.Y = n;
          }
          setNamespaceHandler(n, t) {
            var r = this.X,
              e = r.get(n);
            if (e !== t && (++this.Z, r.set(n, t), !e)) {
              var i = this.a;
              i && (this.b || this.W.then(this.d), (this.b = i));
            }
          }
          setHandlers(n, t) {
            this.setNamespaceHandler(n, function (n, r, e) {
              var i = t[n](r);
              e && e(i);
            });
          }
          e(n, t, r, e, i) {
            var u = this.c,
              a = {
                namespace: n,
                route: t,
                arg: r,
                resolver: e,
                prevRoute: u,
                nextRoute: null,
                silentLog: i,
              };
            this.c = a;
            var s = !0;
            u ? ((u.nextRoute = a), (s = !this.b)) : (this.a = a),
              s && o(this.X, a) && ((this.b = a), this.W.then(this.d));
          }
          f(n, t) {
            var r = t.route,
              e = t.arg,
              u = t.resolver,
              o = t.silentLog,
              a = this.Z,
              s = null,
              c = null;
            try {
              s = n(r, e, u, o);
            } catch (n) {
              c = Promise.reject(n);
            }
            if (s === i) {
              if (a !== this.Z) return i;
              c = Promise.reject(
                new Error(
                  "DynamicRouter: NOT_HANDLED can only be used when updating handlers"
                )
              );
            }
            return u ? void (c && u(c)) : c;
          }
        };
      function o(n, t) {
        var r = t.namespace;
        return r === e ? a : n.get(r);
      }
      function a(n, t, r) {
        r(t);
      }
      function s(n) {
        if (null != n && ("object" == typeof n || "function" == typeof n)) {
          var t = n.then;
          return "function" == typeof t ? t : null;
        }
        return null;
      }
    },
    ,
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return a;
      });
      var e = r(21),
        i = r(45),
        u = r(37),
        o = r.n(u);
      function a(n) {
        var t = (0, e.k)(1110),
          r = { body: (0, e.k)(349), data: { action: i.i }, tag: i.j };
        switch (n) {
          case "short":
            return (0, i.s)(t, r), Promise.resolve();
          case "alert":
            return (0, i.r)(t, r);
          default:
            return (0, o.a)(n);
        }
      }
    },
    ,
    function (n, t, r) {
      r.d(t, "a", function () {
        return i;
      });
      var e = r(78),
        i = class {
          constructor(n) {
            (this.onmessage = null),
              (this.AR = () => {}),
              (this.AS = null),
              (this.AT = !1),
              (this.AU = !1),
              (this.AV = new e.a(() => {
                __LOG__(
                  2
                )`MonitoredBroadcastChannel watchdog triggered by silence`,
                  this.close(),
                  this.AU || this.AR();
              }));
            var t = new BroadcastChannel(n);
            (this.AQ = t),
              (t.onmessage = (n) => {
                this.AW(n);
              });
          }
          postMessage(n) {
            (this.AT = !0), this.AQ.postMessage(n);
          }
          startMonitoring(n) {
            var t = n.onTimeout;
            (this.AR = t),
              null == this.AS &&
                (__LOG__(2)`MonitoredBroadcastChannel.startMonitoring`,
                (this.AT = !1),
                (this.AS = setInterval(() => {
                  this.AT || this.AQ.postMessage("wa-ping"), (this.AT = !1);
                }, 500)),
                this.AX());
          }
          close() {
            __LOG__(2)`MonitoredBroadcastChannel closing`;
            var n = this.AS;
            null != n && ((this.AS = null), clearInterval(n), this.AV.cancel()),
              this.AQ.close();
          }
          silenceChannel() {
            this.AU = !0;
          }
          AW(n) {
            if ((this.AX(), "wa-ping" !== n.data)) {
              var t = this.AU ? null : this.onmessage;
              t && t(n);
            }
          }
          AX() {
            this.AV.debounce(3e3);
          }
        };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (n, t) {
      var r;
      r = (function () {
        return this;
      })();
      try {
        r = r || new Function("return this")();
      } catch (n) {
        "object" == typeof window && (r = window);
      }
      n.exports = r;
    },
    ,
    ,
    ,
    ,
    function (n, t, r) {
      function e() {
        return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      }
      function i(n, t) {
        return "@me" === n.jid
          ? t.authorMe(n)
          : "@psa" === n.jid
          ? t.authorPsa(n)
          : t.authorUser(n);
      }
      r.d(t, "a", function () {
        return e;
      }),
        r.d(t, "b", function () {
          return i;
        });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (n, t, r) {
      r.r(t),
        r.d(t, "default", function () {
          return y;
        });
      var e,
        i,
        u = "undefined" != typeof Promise ? Promise : null,
        o = "function" == typeof setImmediate ? setImmediate : null,
        a = 0,
        s = [],
        c = [],
        f = [],
        l = { sentinel: "CONTINUE_AS_IF_NO_HANDLER" },
        d = { sentinel: "RETRY_ASYNCHRONOUSLY" },
        h = { sentinel: "TO_STRING" },
        v = { sentinel: "DID_ERROR" },
        p = null,
        g = [],
        _ = 128,
        m = "undefined" == typeof self ? void 0 : self;
      function y(n, t) {
        (this.A = 0),
          (this.B = void 0),
          (this.C = void 0),
          (this.D = void 0),
          (this.E = void 0),
          (this.F = 0),
          (this.G = void 0),
          (this.x = void 0),
          (this.H = null),
          (this.I = void 0),
          (this.J = void 0),
          (this.K = void 0),
          (this.control = void 0),
          t && (this.E = t.this),
          "function" == typeof n &&
            ((this.C = n),
            (this.A |= 4),
            (this.A |= 256),
            U(
              n,
              this.E,
              (n) => M(this, 0, !0, !1, n),
              (n) => M(this, 0, !1, !1, n)
            ));
      }
      function b(n) {
        if (void 0 === n) return e;
        if (C(n)) return n;
        var t = new y();
        return M(t, 0, !0, !1, n), F(t, 512), t;
      }
      function w(n) {
        var t = new y();
        return (t.B = n), F(t, 514), g.push(t), t;
      }
      function k(n) {
        var t = "";
        if (n.A & _) t = (n.C || n.D).call(n.E, h);
        else if (n.G) t = `.addRawControl(${n.G.name}, ${n.G.foo})`;
        else if (16 & n.A) t = `.endWithControls(${Object.keys(n.control)})`;
        else if (512 & n.A)
          t =
            1 & n.A
              ? `Promise.resolve(${void 0 === n.B ? "" : n.B})`
              : `Promise.reject(${void 0 === n.B ? "" : n.B})`;
        else if (256 & n.A)
          switch (3 & n.A) {
            case 2:
            case 0:
            case 1:
              t = `new Promise(${n.C})`;
          }
        else
          n.C && n.D
            ? (t = `.then(${n.C}, ${n.D})`)
            : n.C
            ? (t = `.then(${n.C})`)
            : n.D && (t = `.catch(${n.D})`);
        return t;
      }
      function E(n) {
        (this.message = n), (this.stack = new Error(n || this.name).stack);
      }
      function S() {
        var n, t;
        0 === a &&
          (c.length || g.length) &&
          ((a = 1),
          i ||
            ((t = 0),
            (i =
              "undefined" == typeof MutationObserver ||
              (m && m.navigator && m.navigator.standalone)
                ? u
                  ? function () {
                      u.resolve().then(R);
                    }
                  : "function" == typeof o
                  ? function () {
                      o(R);
                    }
                  : function () {
                      setTimeout(R, 0);
                    }
                : ((n = document.createTextNode("")),
                  new MutationObserver(R).observe(n, { characterData: !0 }),
                  function () {
                    n.data = t = 1 - t;
                  }))),
          i());
      }
      function A(n, t) {
        F(n, 8),
          (t.I = n),
          n.K
            ? n.K.push(t)
            : n.J
            ? ((n.K = [n.J, t]), (n.J = void 0))
            : (n.J = t);
      }
      function O(n) {
        if (n && ("object" == typeof n || "function" == typeof n)) {
          var t;
          try {
            t = n.then;
          } catch (n) {
            return (p = n), v;
          }
          if ("function" == typeof t) return t;
        }
      }
      function I(n) {
        if (!n || C(n)) return n;
        var t = O(n);
        if (t === v) return w(p);
        if (t) {
          var r = new y(function (r, e) {
            t.call(n, r, e);
          });
          return (r.H = n), r;
        }
        return n;
      }
      function C(n) {
        return n instanceof y;
      }
      function T(n, t, r) {
        var e,
          i,
          u,
          o,
          a = C((n = I(n))),
          s = !1;
        if (a) {
          if (!(3 & n.A)) return F(n.then(t, r), 32);
          F(n, 8),
            (s = !!(64 & n.A)),
            (u = n.E),
            (e = 1 & n.A ? t : r),
            (i = n.B);
        } else (e = t), (i = n);
        if (!e) return b(n).then();
        if ((i = K(e, u, i, !0)) === v) o = w(p);
        else {
          if (i === d) return b(n).then(t, r);
          if (i === l) return a ? n.then() : b(n);
          o = b(i);
        }
        return (
          s && (o = o.cancellable()), void 0 !== u && ((o = o.then()).E = u), o
        );
      }
      function M(n, t, r, e, i) {
        if (t === n.F) {
          var u = ++n.F;
          if ((F(n, 4), (n.H = null), r))
            if (i === n)
              (n.I = void 0),
                L(n, !1, e, new TypeError("promise resolved to itself"));
            else if (C(i)) {
              var o = 3 & i.A;
              0 === o
                ? A(i, n)
                : ((n.I = i), F(n, 1024), F(i, 8), L(n, 1 === o, e, i.B));
            } else {
              var a = O(i);
              a === v
                ? ((n.I = void 0), L(n, !1, e, p))
                : a
                ? ((n.I = void 0),
                  (n.H = i),
                  U(
                    a,
                    i,
                    (t) => M(n, u, !0, !1, t),
                    (t) => M(n, u, !1, !1, t)
                  ))
                : L(n, !0, e, i);
            }
          else L(n, !1, e, i);
        }
      }
      function $(n, t, r, e, i) {
        t === n.F && (N(n), M(n, t, r, e, i));
      }
      function N(n) {
        if (n.I) {
          var t = n.I;
          if (((n.I = void 0), t.J === n)) t.J = void 0;
          else if (t.K) {
            for (var r = t.K, e = 0; e < r.length; e++)
              if (r[e] === n) {
                r.splice(e, 1);
                break;
              }
            0 === r.length && (t.K = void 0);
          }
        }
      }
      function P(n) {
        if (null == n) throw new Error("Invalid .catch guard " + n);
        if ("function" == typeof n) return n;
        if ("object" == typeof n)
          throw new Error("Object guards in .catch are currently unsupported");
        return function (t) {
          return t === n;
        };
      }
      function D(n, t) {
        return function (r, e) {
          return r === h
            ? `.catch(..., ${t})`
            : n &&
              !(function (n, t) {
                for (var r = 0; r < n.length; r++) {
                  var e = n[r];
                  if (e === Error || e.prototype instanceof Error) {
                    if (t instanceof e) return !0;
                  } else if (e(t)) return !0;
                }
                return !1;
              })(n, r)
            ? l
            : e
            ? d
            : t.call(this, r);
        };
      }
      function L(n, t, r, e) {
        if ((F(n, 4 | (t ? 1 : 2)), (n.B = e), n.J))
          G(n.J, t, r, e), (n.J = void 0);
        else if (n.K) {
          var i = n.K;
          n.K = void 0;
          for (var u = 0; u < i.length; u++) G(i[u], t, r, e);
        } else t || 8 & n.A || g.push(n);
      }
      function G(n, t, r, e) {
        n.F++;
        var i = q(n, t);
        if (i && 32 & n.A) {
          F(n, 4);
          var u = K(i, n.E, e, !0);
          if (u !== d)
            return void (u === v
              ? ((n.I = void 0), L(n, !1, r, p))
              : u === l
              ? L(n, t, r, e)
              : ((n.I = void 0), M(n, n.F, !0, r, u)));
          n.A &= -5;
        }
        i ? ((r ? f : c).push(n), S()) : L(n, t, r, e);
      }
      function x(n, t) {
        for (; 0 !== n.length; ) t.push(n.pop());
      }
      function R() {
        for (; 0 !== s.length || 0 !== c.length; ) {
          0 === s.length && x(c, s);
          var n = s.pop(),
            t = n.I,
            r = !!(t && 1 & t.A),
            e = t && t.B,
            i = q(n, r);
          if ((F(n, 4), i)) {
            var u = void 0;
            do {
              u = K(i, n.E, e, !1);
            } while (u === d);
            u === v
              ? ((e = p), (r = !1), (n.I = void 0))
              : u !== l && ((e = u), (r = !0), (n.I = void 0));
          }
          3 & n.A || (M(n, n.F, r, !0, e), x(f, s));
        }
        for (a--; 0 !== g.length; ) {
          var o = g.pop();
          8 & o.A || B(o, o.B);
        }
      }
      (y.resolve = b),
        (y.reject = w),
        (y.prototype.then = function (n, t) {
          "function" != typeof n && (n = void 0),
            "function" != typeof t && (t = void 0);
          var r = new y();
          (r.C = n), (r.D = t), (r.E = this.E), 64 & this.A && F(r, 64);
          var e = 3 & this.A;
          return (
            0 === e
              ? A(this, r)
              : (F(this, 8),
                (1 === e ? n : t)
                  ? ((r.I = this), c.push(r), S())
                  : ((r.I = this),
                    F(r, e),
                    (r.B = this.B),
                    2 === e && g.push(r))),
            r
          );
        }),
        (y.prototype.catch = function (n) {
          var t = arguments.length - 1;
          if (0 === t) return this.then(void 0, n);
          for (var r = new Array(t), e = 0; e < t; e++) r[e] = P(arguments[e]);
          var i = D(r, arguments[t]),
            u = T(this, void 0, i);
          return u.D && F(u, _), u;
        }),
        (y.all = function (n) {
          return new y(function (t, r) {
            var e = n.length;
            if (0 !== e)
              for (var i = new Array(n.length), u = 0; u < n.length; u++)
                i[u] = T(n[u], o, r);
            else t([]);
            function o(n) {
              if (0 == --e) {
                for (var r = [], u = 0; u < i.length; u++) {
                  var o = i[u];
                  r.push(o && 3 & o.A ? o.B : n);
                }
                t(r);
              }
              return n;
            }
          });
        }),
        (y.allSettled = function (n) {
          return new y(function (t, r) {
            var e = Array.from(n),
              i = e.length;
            if (0 !== i)
              for (
                var u = new Array(e.length), o = c(!1), a = c(!0), s = 0;
                s < e.length;
                s++
              )
                u[s] = T(e[s], o, a);
            else t([]);
            function c(n) {
              return function (r) {
                var e = n
                  ? { status: "rejected", reason: r }
                  : { status: "fulfilled", value: r };
                if (0 == --i) {
                  for (var o = [], a = 0; a < u.length; a++) {
                    var s = u[a];
                    o.push(s && 3 & s.A ? s.B : e);
                  }
                  t(o);
                }
                return e;
              };
            }
          });
        }),
        (y.race = function (n) {
          var t = I(n);
          if (C(t)) {
            var r = t.then((n) => y.race(n));
            return (r.E = void 0), (r.A &= -65), r;
          }
          return new y(function (n, r) {
            for (var e = 0; e < t.length; e++) {
              var i = I(t[e]);
              if (!C(i) || 3 & i.A)
                for (n(i), e++; e < t.length; e++) {
                  var u = t[e];
                  C(u) && F(u, 8);
                }
              else i.then(n, r);
            }
          });
        }),
        (y.prototype.toString = function () {
          for (var n, t = [], r = this, e = !1; r; r = r.I) {
            (n = r),
              !e &&
                3 & r.A &&
                ((e = !0),
                512 & r.A ||
                  (1 & r.A
                    ? t.push(`[resolved value: ${r.B}]`)
                    : t.push(`[rejected reason: ${r.B}]`)));
            var i = k(r);
            1024 & r.A && (i = "~" + i), t.push(i);
          }
          return (
            t.reverse(), 768 & n.A || (t[0] = "[Promise]" + t[0]), t.join("\n")
          );
        }),
        (y.prototype.finally = function (n) {
          function t(t) {
            return t === h ? `.finally(${n})` : (n.call(this), l);
          }
          return F(this.then(t, t), _);
        }),
        (E.prototype = Object.create(Error.prototype, {
          name: { value: "AbortError" },
        })),
        (y.CancellationError = E),
        (y.prototype.cancellable = function () {
          return F(this.then(), 64);
        }),
        (y.prototype.cancel = function (n) {
          for (var t, r = this; r && !(3 & r.A); r = r.I) 64 & r.A && (t = r);
          if (t)
            if ((void 0 === n && (n = new E()), q(t, !1))) {
              var e = new y();
              N(t), A(e, t), $(e, 0, !1, !1, n);
            } else $(t, t.F, !1, !1, n);
        });
      var j =
        null == (null == m ? void 0 : m.dispatchEvent)
          ? null
          : class extends Event {
              constructor(n, t) {
                super(n, { cancelable: !0 }),
                  Object.defineProperties(this, {
                    promise: { value: t.promise, enumerable: !0 },
                    reason: { value: t.reason, enumerable: !0 },
                  });
              }
            };
      function B(n, t) {
        if (null != (null == m ? void 0 : m.dispatchEvent)) {
          var r = new j("unhandledrejection", { promise: n, reason: t });
          if (
            (m.dispatchEvent(r),
            !m.PromiseRejectionEvent && m.onunhandledrejection)
          )
            try {
              m.onunhandledrejection(r);
            } catch (n) {}
        } else
          "undefined" != typeof process && null != process.emit
            ? process.emit("unhandledRejection", t, n)
            : console.error("StackPromise did not catch " + t, n, t);
      }
      function U(n, t, r, e) {
        try {
          n.call(t, r, e);
        } catch (n) {
          e(n);
        }
      }
      function q(n, t) {
        if (!(4 & n.A)) return t ? n.C : n.D;
      }
      function K(n, t, r, e) {
        try {
          return e ? n.call(t, r, !0) : n.call(t, r);
        } catch (n) {
          return (p = n), v;
        }
      }
      function F(n, t) {
        return (n.A |= t), n;
      }
      M((e = new y()), 0, !0, !1, void 0);
    },
    function (n, t, r) {
      r.d(t, "a", function () {
        return u;
      });
      var e = r(26),
        i = r.n(e),
        u = (function () {
          var n = i()(function* (n, t) {
            for (var r = [], e = 0; e < n.length; e++) r.push(yield t(n[e]));
            return r;
          });
          return function (t, r) {
            return n.apply(this, arguments);
          };
        })();
    },
    function (n, t, r) {
      r.r(t),
        r.d(t, "getHash", function () {
          return a;
        }),
        r.d(t, "getRefreshSecs", function () {
          return s;
        }),
        r.d(t, "startAbPropsStore", function () {
          return d;
        });
      var e = r(6),
        i = r(181),
        u = r(204),
        o = r(17);
      function a() {
        var n,
          t = (null == (n = e.b.get()) ? void 0 : n.hash) || null;
        return Promise.resolve(t);
      }
      function s() {
        var n;
        return Promise.resolve(null == (n = e.b.get()) ? void 0 : n.refresh);
      }
      function c(n) {
        if (!n) return {};
        var t = {};
        return (
          Object.keys(n).forEach((r) => {
            var e = n[r];
            null != e && (t[r] = e);
          }),
          t
        );
      }
      function f(n) {
        if (!n) return {};
        var t = {};
        return (
          Object.keys(n).forEach((r) => {
            null != u.a[r] && (t[r] = n[r]);
          }),
          t
        );
      }
      var l = {
        getHash: a,
        getRefreshSecs: s,
        getAbProps: () => {
          var n = e.b.get();
          return Promise.resolve({
            abKey: n.abKey,
            hash: n.hash,
            refresh: n.refresh,
            lastSyncTime: n.lastSyncTime,
            propValues: c(n.propValues),
            propExpoKeys: n.propExpoKeys,
            internalExpoKeys: n.internalExpoKeys,
            expoKeyStr: n.expoKeyStr,
            overridePropValues: c(n.overridePropValues),
          });
        },
        setAbProps: (n) =>
          e.b
            .set({
              abKey: n.abKey,
              hash: n.hash,
              refresh: n.refresh,
              lastSyncTime: n.lastSyncTime,
              propValues: f(n.propValues),
              propExpoKeys: n.propExpoKeys,
              internalExpoKeys: n.internalExpoKeys,
              expoKeyStr: n.expoKeyStr,
            })
            .then(() => (0, o.f)()),
      };
      function d() {
        __LOG__(2)`Starting ABProps store`, (0, i.f)(l, u.a);
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (n, t) {
      n.exports = function (n) {
        if (Array.isArray(n)) return n;
      };
    },
    function (n, t) {
      n.exports = function (n, t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(n)) {
          var r = [],
            e = !0,
            i = !1,
            u = void 0;
          try {
            for (
              var o, a = n[Symbol.iterator]();
              !(e = (o = a.next()).done) &&
              (r.push(o.value), !t || r.length !== t);
              e = !0
            );
          } catch (n) {
            (i = !0), (u = n);
          } finally {
            try {
              e || null == a.return || a.return();
            } finally {
              if (i) throw u;
            }
          }
          return r;
        }
      };
    },
    function (n, t, r) {
      var e = r(465);
      n.exports = function (n, t) {
        if (n) {
          if ("string" == typeof n) return e(n, t);
          var r = Object.prototype.toString.call(n).slice(8, -1);
          return (
            "Object" === r && n.constructor && (r = n.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(n)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? e(n, t)
              : void 0
          );
        }
      };
    },
    function (n, t) {
      n.exports = function (n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var r = 0, e = new Array(t); r < t; r++) e[r] = n[r];
        return e;
      };
    },
    function (n, t) {
      n.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    function (n, t, r) {
      var e = {
        "./bn.js": [487, 180],
        "./en.js": [488, 181],
        "./gu.js": [489, 182],
        "./hi.js": [490, 183],
        "./kn.js": [491, 184],
        "./ml.js": [492, 185],
        "./mr.js": [493, 186],
        "./pa.js": [494, 187],
        "./ta.js": [495, 188],
        "./te.js": [496, 189],
        "./ur.js": [497, 190],
      };
      function i(n) {
        if (!r.o(e, n))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + n + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = e[n],
          i = t[0];
        return r.e(t[1]).then(function () {
          return r.t(i, 7);
        });
      }
      (i.keys = function () {
        return Object.keys(e);
      }),
        (i.id = 467),
        (n.exports = i);
    },
    function (n, t, r) {
      var e = {
        "./bn.js": [498, 154],
        "./en.js": [499, 155],
        "./gu.js": [500, 156],
        "./hi.js": [501, 157],
        "./kn.js": [502, 158],
        "./ml.js": [503, 159],
        "./mr.js": [504, 160],
        "./pa.js": [505, 161],
        "./ta.js": [506, 162],
        "./te.js": [507, 163],
        "./ur.js": [508, 164],
      };
      function i(n) {
        if (!r.o(e, n))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + n + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = e[n],
          i = t[0];
        return r.e(t[1]).then(function () {
          return r(i);
        });
      }
      (i.keys = function () {
        return Object.keys(e);
      }),
        (i.id = 468),
        (n.exports = i);
    },
  ],
]);
