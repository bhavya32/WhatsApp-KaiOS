"use strict";
(function (n) {
  function t(t) {
    for (
      var r, i, o = t[0], u = t[1], c = t[2], v = 0, d = [];
      v < o.length;
      v++
    )
      (i = o[v]),
        Object.prototype.hasOwnProperty.call(a, i) && a[i] && d.push(a[i][0]),
        (a[i] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (n[r] = u[r]);
    for (s && s(t); d.length; ) d.shift()();
    return l.push.apply(l, c || []), e();
  }
  function e() {
    for (var n, t = 0; t < l.length; t++) {
      for (var e = l[t], r = !0, o = 1; o < e.length; o++) {
        var u = e[o];
        0 !== a[u] && (r = !1);
      }
      r && (l.splice(t--, 1), (n = i((i.s = e[0]))));
    }
    return n;
  }
  var r = {},
    a = { 38: 0 },
    l = [];
  function i(t) {
    if (r[t]) return r[t].exports;
    var e = (r[t] = { i: t, l: !1, exports: {} });
    return n[t].call(e.exports, e, e.exports, i), (e.l = !0), e.exports;
  }
  (i.m = n),
    (i.c = r),
    (i.d = function (n, t, e) {
      i.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: e });
    }),
    (i.r = function (n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (i.t = function (n, t) {
      if ((1 & t && (n = i(n)), 8 & t)) return n;
      if (4 & t && "object" == typeof n && n && n.__esModule) return n;
      var e = Object.create(null);
      if (
        (i.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: n }),
        2 & t && "string" != typeof n)
      )
        for (var r in n)
          i.d(
            e,
            r,
            function (t) {
              return n[t];
            }.bind(null, r)
          );
      return e;
    }),
    (i.n = function (n) {
      var t =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }),
    (i.p = "/");
  var o = (self.webpackJsonp = self.webpackJsonp || []),
    u = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var c = 0; c < o.length; c++) t(o[c]);
  var s = u;
  l.push([480, 10, 19]), e();
})({
  324: function (n, t, e) {
    var r = e(1);
    e(13),
      (t.a = (n) => {
        var t = n.className;
        return (0, r.f)(
          32,
          "svg",
          t,
          [
            (0, r.f)(32, "path", null, null, 1, {
              d: "M5.218 8.924a13.465 13.465 0 005.858 5.858l1.955-1.955c.24-.24.596-.32.907-.214a10.14 10.14 0 003.173.507c.489 0 .889.4.889.889v3.102c0 .489-.4.889-.889.889C8.764 18 2 11.236 2 2.889 2 2.4 2.4 2 2.889 2H6c.489 0 .889.4.889.889 0 1.111.178 2.178.507 3.173a.892.892 0 01-.223.907L5.218 8.924z",
            }),
            (0, r.f)(32, "path", null, null, 1, {
              d: "M10.905 8.846a.53.53 0 01-.75-.002.535.535 0 01-.002-.752l4.928-5.021h-2.876a.535.535 0 010-1.071h4.297c.275 0 .498.223.498.498V6.9a.527.527 0 11-1.054 0V3.83l-5.04 5.016z",
            }),
          ],
          4,
          { viewBox: "0 0 20 20" }
        );
      });
  },
  362: function (n, t, e) {
    var r = e(1);
    e(13),
      (t.a = (n) => {
        var t = n.className;
        return (0, r.f)(
          32,
          "svg",
          t,
          [
            (0, r.f)(32, "path", null, null, 1, {
              d: "M5.218 8.924a13.465 13.465 0 005.858 5.858l1.955-1.955c.24-.24.596-.32.907-.214a10.14 10.14 0 003.173.507c.489 0 .889.4.889.889v3.102c0 .489-.4.889-.889.889C8.764 18 2 11.236 2 2.889 2 2.4 2.4 2 2.889 2H6c.489 0 .889.4.889.889 0 1.111.178 2.178.507 3.173a.892.892 0 01-.223.907L5.218 8.924z",
            }),
            (0, r.f)(32, "path", null, null, 1, {
              d: "M16.095 2.154a.53.53 0 01.75.002.535.535 0 01.002.752L11.919 7.93h2.876a.535.535 0 010 1.071h-4.297A.498.498 0 0110 8.502V4.1a.527.527 0 111.054 0v3.07l5.04-5.016z",
            }),
          ],
          4,
          { viewBox: "0 0 20 20" }
        );
      });
  },
  480: function (n, t, e) {
    e.r(t);
    var r = e(1),
      a = e(13);
    function l(n) {
      var t;
      null == (t = self.opener) || t.postMessage(n, "*");
    }
    function i(n, t) {
      l({ action: "log", type: n, message: t });
    }
    function o(n) {
      l({ action: "command", command: n });
    }
    function u(n) {
      return function (t) {
        for (var e = [], r = 1, a = arguments.length; r < a; ++r)
          e[r - 1] = arguments[r];
        var l = c(t, e);
        return i(n, l), l;
      };
    }
    function c(n, t) {
      for (var e = [n[0]], r = 0; r < t.length; r++)
        e.push(
          "string" == typeof (a = t[r])
            ? `'${a}'`
            : a && "object" == typeof a
            ? Array.isArray(a)
              ? `[${a.join(",")}]`
              : a instanceof Uint8Array
              ? `<<Uint8Array: ${a.length} bytes>>`
              : a.toString === Object.prototype.toString
              ? JSON.stringify(a, (n, t) => (n ? String(t) : t))
              : String(a)
            : String(a),
          n[r + 1]
        );
      var a;
      return e.join("");
    }
    var s = e(192),
      v = (n) => {
        var t = n.className;
        return (0, r.f)(
          32,
          "svg",
          t,
          [
            (0, r.f)(32, "path", null, null, 1, {
              d: "M7.166 12.667c-.055.002-.11.002-.166.002a5.83 5.83 0 01-2.666-.644l-.188-.097-2.488.582.459-2.491-.107-.18a5.699 5.699 0 01-.793-2.738c-.091-3.16 2.428-5.804 5.617-5.895.056-.002.112-.002.168-.002 3.114 0 5.691 2.464 5.781 5.568.092 3.16-2.428 5.804-5.617 5.895m6.83-5.984a6.86 6.86 0 00-2.15-4.753A7.04 7.04 0 007.04 0h-.034A6.989 6.989 0 001.91 2.174 6.856 6.856 0 00.003 7.135a6.9 6.9 0 00.855 3.13l-.62 3.672a.053.053 0 00.064.06l3.665-.808a7.062 7.062 0 003.234.681 6.985 6.985 0 005.052-2.349 6.904 6.904 0 001.742-4.838",
            }),
            (0, r.f)(32, "path", null, null, 1, {
              d: "M4.548 3.585c-.118 0-.3.042-.458.204-.166.17-.63.577-.657 1.434-.026.858.575 1.705.658 1.824.084.119 1.15 1.968 2.904 2.72 1.032.443 1.486.52 1.777.52.12 0 .213-.014.307-.02.321-.019 1.047-.389 1.205-.791.158-.403.17-.751.128-.825-.042-.074-.157-.122-.329-.214-.172-.092-1.018-.54-1.177-.603a.53.53 0 00-.187-.049c-.071 0-.136.033-.209.124a12.49 12.49 0 01-.574.666.26.26 0 01-.19.088.462.462 0 01-.192-.051c-.206-.096-.727-.299-1.377-.912a5.25 5.25 0 01-.935-1.237c-.096-.177-.002-.269.088-.353.081-.075.181-.198.272-.297.09-.099.121-.17.183-.285.062-.114.036-.217-.005-.305-.04-.089-.354-.96-.499-1.31-.122-.294-.26-.304-.384-.313-.101-.007-.218-.01-.334-.014a.5.5 0 00-.015 0",
            }),
          ],
          4,
          { viewBox: "0 0 14 14" }
        );
      },
      d = (n) => {
        var t = n.className;
        return (0, r.f)(
          32,
          "svg",
          t,
          (0, r.f)(
            32,
            "g",
            null,
            [
              (0, r.f)(32, "path", null, null, 1, {
                d: "M6.022 10.656a16.832 16.832 0 007.322 7.322l2.445-2.445c.3-.3.744-.4 1.133-.266 1.245.41 2.59.633 3.967.633.611 0 1.111.5 1.111 1.111v3.878C22 21.5 21.5 22 20.889 22 10.456 22 2 13.544 2 3.111 2 2.5 2.5 2 3.111 2H7c.611 0 1.111.5 1.111 1.111 0 1.389.222 2.722.633 3.967.123.389.034.822-.277 1.133l-2.445 2.445z",
              }),
              (0, r.f)(32, "path", null, null, 1, {
                d: "M17 10.8a3.8 3.8 0 100-7.6 3.8 3.8 0 000 7.6zm0 1.2a5 5 0 110-10 5 5 0 010 10z",
              }),
              (0, r.f)(32, "path", null, null, 1, {
                d: "M13.588 4.578a.7.7 0 11.99-.99l5.834 5.834a.7.7 0 11-.99.99l-5.834-5.834z",
              }),
            ],
            4,
            { "fill-rule": "nonzero" }
          ),
          2,
          { viewBox: "0 0 24 24" }
        );
      },
      f = e(23),
      h = e.n(f);
    function p(n) {
      var t = n.children,
        e = n.icon,
        l = n.state,
        i = n.status,
        o = n.uri;
      return (0, r.f)(
        1,
        "div",
        "Yt",
        [
          (0, r.f)(
            1,
            "div",
            "Yz",
            [
              (0, r.f)(
                1,
                "div",
                "ZB",
                null == o
                  ? null
                  : (0, r.f)(1, "img", "ZC", null, 1, { src: o }),
                0,
                {
                  style: a.h({
                    backgroundImage: "url('/icons/avatarOneToOne.svg')",
                  }),
                }
              ),
              (0, r.f)(
                1,
                "div",
                (0, h.a)("ZD", "ending" === l && "ZF"),
                [
                  (0, r.f)(1, "div", "ZE", e, 0),
                  (0, r.f)(1, "div", "ZG", i, 0),
                ],
                4
              ),
            ],
            4
          ),
          (0, r.f)(1, "div", "ZA", t, 0),
        ],
        4
      );
    }
    function m(n) {
      var t = n.name,
        e = n.phone,
        a = n.icon,
        l = n.brand,
        i = n.state,
        o = n.status,
        u = n.uri;
      return (0, r.b)(2, p, {
        icon: a,
        status: o,
        state: i,
        uri: u,
        children: [
          (0, r.f)(1, "div", "ZH FY FU", null == t ? e : t, 0),
          (0, r.f)(
            1,
            "div",
            "ZI FW FS FY FU",
            [
              (0, r.b)(2, v, { className: "ZJ" }),
              (0, r.e)(" "),
              (0, r.f)(1, "span", null, l, 0),
            ],
            4
          ),
        ],
      });
    }
    function g(n) {
      var t = n.description,
        e = n.title;
      return (0, r.f)(
        1,
        "div",
        "Yu",
        (0, r.f)(
          1,
          "div",
          "Yv",
          [
            (0, r.b)(2, d, { className: "Yw" }),
            (0, r.f)(1, "div", "Yx FV FS", e, 0),
            (0, r.f)(1, "div", "Yy FW FS", null == t ? null : t, 0),
          ],
          4
        ),
        2
      );
    }
    var b = e(63);
    function y(n) {
      var t,
        e = n.element,
        a = n.className;
      return null == e
        ? null
        : (0, r.f)(1, "span", a, null != (t = e.label) ? t : e.icon, 0);
    }
    function w(n) {
      var t = n.left,
        e = n.center,
        a = n.right;
      return (0, r.f)(
        1,
        "div",
        "Yo",
        [
          (0, r.b)(2, y, { element: t, className: "Yq Yp" }),
          (0, r.b)(2, y, { element: e, className: "Yr Yp" }),
          (0, r.b)(2, y, { element: a, className: "Ys Yp" }),
        ],
        4
      );
    }
    function O(n) {
      null != n && n();
    }
    function j(n) {
      null != n && n.action();
    }
    var M = class extends a.a {
        constructor() {
          var n;
          return (
            (n = super(...arguments)),
            (this.ref = a.e()),
            (this.handleKeyDown = (n) => {
              var t = (0, b.m)(n),
                e = this.props.softKeys;
              switch (t) {
                case b.k:
                  return j(e.left);
                case b.j:
                  return j(e.center);
                case b.l:
                  return j(e.right);
                case b.d:
                  return O(e.onArrowUp);
                case b.a:
                  return O(e.onArrowDown);
                case b.f:
                  return O(e.onCall);
                case b.g:
                  return O(e.onEndCall);
                case b.e:
                  return O(e.onBack);
                case b.h:
                  return O(e.onHeadsetHook);
                default:
                  return;
              }
            }),
            n
          );
        }
        shouldComponentUpdate(n, t) {
          var e = this.props;
          return (
            e !== n && (e.softKeys !== n.softKeys || e.children !== n.children)
          );
        }
        componentDidMount() {
          this.ref.current && this.ref.current.focus();
        }
        render() {
          var n = this.props.softKeys,
            t = n.left,
            e = n.center,
            a = n.right;
          return (0, r.f)(
            1,
            "div",
            "Ym",
            [
              (0, r.f)(1, "div", "Yn", this.props.children, 0),
              (0, r.b)(2, w, { left: t, center: e, right: a }),
            ],
            4,
            { tabIndex: "1", onKeyDown: this.handleKeyDown },
            null,
            this.ref
          );
        }
      },
      S = (n) => {
        var t = n.className;
        return (0, r.f)(
          32,
          "svg",
          t,
          (0, r.f)(32, "path", null, null, 1, {
            d: "M16.2 7.75c-2.683-.873-5.706-.867-8.396 0v2.766c0 .34-.195.647-.49.792a10.14 10.14 0 00-2.602 1.886.892.892 0 01-1.257 0L1.26 11a.892.892 0 010-1.257c5.902-5.902 15.58-5.902 21.483 0a.892.892 0 010 1.257l-2.2 2.2a.892.892 0 01-1.257 0 10.098 10.098 0 00-2.602-1.886.892.892 0 01-.484-.798V7.75z",
          }),
          2,
          { viewBox: "0 0 24 20" }
        );
      },
      k = e(362),
      B = (n) => {
        var t = n.className;
        return (0, r.f)(
          32,
          "svg",
          t,
          (0, r.f)(32, "path", null, null, 1, {
            d: "M13.204 15.337c-.681.379-1.365.646-2.023.756v2.472a.68.68 0 01-.683.688h-.995a.69.69 0 01-.683-.688v-2.478c-3.153-.592-5.568-3.355-5.568-6.56v-.254h2.176v.253c0 2.6 2.099 4.578 4.665 4.578.552 0 1.13-.111 1.689-.314l-1.205-1.23a2.02 2.02 0 01-.577.061c-1.718 0-3.037-1.345-3.037-3.095v-.56l-4.889-4.99a1.137 1.137 0 01-.003-1.59 1.095 1.095 0 011.573.005l14.281 14.58c.434.443.435 1.15.005 1.59a1.095 1.095 0 01-1.574-.006l-3.152-3.218zm-.167-11.495v6.494L7.035 4.209l-.072-.177v-.19C6.963 2.093 8.282.747 10 .747c1.719 0 3.037 1.346 3.037 3.095zm1.628 5.431h2.084v.253c0 1.196-.297 2.283-.876 3.17l-.173.264-1.44-1.472.047-.146c.239-.73.358-1.28.358-1.816v-.253z",
          }),
          2,
          { viewBox: "0 0 20 20" }
        );
      },
      z = e(324),
      C = (n) => {
        var t = n.className;
        return (0, r.f)(
          32,
          "svg",
          t,
          [
            (0, r.f)(32, "path", null, null, 1, {
              "fill-rule": "evenodd",
              d: "M6 5H2.1C1.5 5 1 5.5 1 6.1v3.7c0 .7.5 1.2 1.1 1.2H6l4.9 4.3c.4.4 1.1.1 1.1-.5V1.2c0-.6-.7-.9-1.1-.5L6 5z",
              "clip-rule": "evenodd",
            }),
            (0, r.f)(32, "path", null, null, 1, {
              d: "m18 6.9 2-2s.5-.4 1 0c.5.5.1 1 .1 1l-2 2 2 2s.5.5 0 1.1c-.5.5-1.1.1-1.1.1l-2-2-2 2s-.7.5-1.2-.1c-.4-.5 0-1.1 0-1.1l1.9-2-2-2s-.4-.7.1-1.1c.6-.5 1.1 0 1.1 0L18 6.9z",
            }),
          ],
          4,
          { x: "0", y: "0", viewBox: "0 0 23 16" }
        );
      },
      Y = (n) => {
        var t = n.className;
        return (0, r.f)(
          32,
          "svg",
          t,
          [
            (0, r.f)(32, "path", null, null, 1, {
              d: "M18.333.667a.81.81 0 00-.162 1.15c2.865 3.698 2.865 8.668 0 12.366a.809.809 0 00.16 1.15c.152.112.33.167.506.167a.843.843 0 00.67-.325c3.324-4.291 3.324-10.059 0-14.35a.85.85 0 00-1.174-.158z",
            }),
            (0, r.f)(32, "path", null, null, 1, {
              d: "M15.015 3.17a.836.836 0 00-.15 1.152c1.664 2.234 1.663 5.122 0 7.355a.838.838 0 00.148 1.153.785.785 0 001.123-.154 7.778 7.778 0 00.002-9.353.786.786 0 00-1.123-.153M5.993 5h-3.9C1.488 5 .994 5.517.994 6.15L1 9.85c0 .633.494 1.15 1.097 1.15h3.896l4.869 4.327c.445.397 1.133.067 1.133-.546V1.219c0-.614-.69-.944-1.135-.544L5.993 5z",
            }),
          ],
          4,
          { viewBox: "0 0 23 16" }
        );
      };
    function x(n) {
      return () => o(n);
    }
    function A(n) {
      var t = n.data,
        e = n.icon,
        a = n.l10n,
        l = n.softKeys,
        i = t.name,
        o = t.phone,
        u = t.state,
        c = t.status,
        s = t.uri;
      return (0, r.b)(2, M, {
        softKeys: l || {},
        children: (0, r.b)(2, m, {
          brand: a.brand,
          icon: e,
          name: i,
          phone: o,
          state: u,
          status: c,
          uri: s,
        }),
      });
    }
    function E(n) {
      return new Promise((t, e) => {
        var r = navigator.mozSettings.createLock().get(n);
        (r.onsuccess = () => {
          var e = r.result;
          t(null != e ? e[n] : null);
        }),
          (r.onerror = () => e(r.error || "unknown"));
      });
    }
    var U = [750, 1500],
      L = U.reduce((n, t) => n + t, 0),
      D = class extends a.b {
        constructor() {
          var n;
          return (
            (n = super(...arguments)),
            (this.AD = !1),
            (this.AE = a.e()),
            (this.vibrationIntervalId = null),
            (this.state = { ringtone: null, muted: !1 }),
            (this.muteRingtoneAndVibration = () => {
              this.setState({ muted: !0 });
            }),
            n
          );
        }
        componentDidMount() {
          (this.AD = !0), this.maybeVibrate(), this.retreiveRingtoneUrl();
        }
        componentDidUpdate(n, t) {
          var e = t.ringtone,
            r = this.state,
            a = r.ringtone;
          r.muted &&
            (navigator.vibrate(0), clearInterval(this.vibrationIntervalId));
          var l = this.AE.current;
          null != a &&
            a !== e &&
            null !== l &&
            (l.mozAudioChannelType = "notification");
        }
        componentWillUnmount() {
          (this.AD = !1),
            null != this.state.ringtone &&
              URL.revokeObjectURL(this.state.ringtone),
            navigator.vibrate(0),
            clearInterval(this.vibrationIntervalId);
        }
        retreiveRingtoneUrl() {
          E("dialer.ringtone")
            .then((n) => (n instanceof Blob ? n : null))
            .then((n) => {
              if (this.AD && null != n) {
                var t = URL.createObjectURL(n);
                this.setState({ ringtone: t });
              }
            });
        }
        maybeVibrate() {
          E("vibration.enabled")
            .then((n) => !!n)
            .then((n) => {
              this.AD &&
                n &&
                (navigator.vibrate(U),
                (this.vibrationIntervalId = setInterval(
                  () => navigator.vibrate(U),
                  L
                )));
            });
        }
        render() {
          var n = this.props.l10n,
            t = {
              left: { label: n.accept, action: x("accept") },
              onCall: x("accept"),
              right: { label: n.reject, action: x("reject") },
              onEndCall: x("reject"),
              onBack: x("reject"),
              onArrowDown: this.muteRingtoneAndVibration,
              onHeadsetHook: x("accept"),
            },
            e = this.state,
            a = e.ringtone,
            l = e.muted;
          return (0, r.c)(
            [
              (0, r.b)(2, A, {
                data: this.props.data,
                l10n: this.props.l10n,
                icon: (0, r.b)(2, k.a),
                softKeys: t,
              }),
              null != a &&
                !l &&
                (0, r.f)(
                  1,
                  "audio",
                  null,
                  null,
                  1,
                  { src: a, autoPlay: !0, loop: !0 },
                  null,
                  this.AE
                ),
            ],
            0
          );
        }
      };
    function H(n) {
      var t = {
        right: { label: n.l10n.end, action: x("end") },
        onEndCall: x("end"),
        onBack: x("end"),
        onHeadsetHook: x("end"),
      };
      return (0, r.b)(2, A, {
        data: n.data,
        l10n: n.l10n,
        icon: (0, r.b)(2, z.a),
        softKeys: t,
      });
    }
    function F(n) {
      var t = n.children,
        e = n.hidden;
      return (0, r.f)(
        1,
        "div",
        "B",
        (0, r.f)(1, "span", (0, h.a)("C", !e && "D"), t, 0),
        2
      );
    }
    function N(n) {
      return n ? (0, r.b)(2, z.a) : (0, r.b)(2, k.a);
    }
    var I = class extends a.b {
      constructor() {
        var n;
        return (
          (n = super(...arguments)),
          (this.AF = null),
          (this.AG = null),
          (this.AH = null),
          (this.state = { isSpeakerOn: !1, showSpeakerBanner: !1 }),
          n
        );
      }
      componentDidMount() {
        this.AI(!1);
        var n = navigator.mozAudioChannelManager;
        n && (n.volumeControlChannel = "telephony"),
          null != window.AudioChannelClient &&
            ((this.AG = new window.AudioChannelClient("telephony")),
            this.AG.requestChannel()),
          null == this.AH && (this.AH = navigator.requestWakeLock("cpu"));
      }
      componentDidUpdate(n, t) {
        t.isSpeakerOn !== this.state.isSpeakerOn &&
          (clearTimeout(this.AF),
          this.setState({ showSpeakerBanner: !0 }),
          (this.AF = setTimeout(() => {
            this.setState({ showSpeakerBanner: !1 });
          }, 2e3)));
      }
      componentWillUnmount() {
        clearTimeout(this.AF),
          this.AI(!1),
          null != this.AG && this.AG.abandonChannel();
        var n = navigator.mozAudioChannelManager;
        n && (n.volumeControlChannel = "content"),
          null != this.AH && this.AH.unlock();
      }
      AI(n) {
        var t = navigator.mozTelephony;
        t && (t.speakerEnabled = n);
      }
      setSpeakerState(n) {
        this.setState({ isSpeakerOn: n }, () => this.AI(n));
      }
      computeSoftKeys() {
        var n = this.props,
          t = n.data,
          e = n.l10n,
          a = t.isLocallyMuted,
          l = this.state.isSpeakerOn;
        return {
          left: {
            label: a ? e.unmute : e.mute,
            action: x(a ? "unmute" : "mute"),
          },
          center: {
            icon: l
              ? (0, r.b)(2, C, { className: "A" })
              : (0, r.b)(2, Y, { className: "A" }),
            action: () => this.setSpeakerState(!l),
          },
          right: { label: e.end, action: x("end") },
          onEndCall: x("end"),
          onBack: x("end"),
          onArrowUp: () => navigator.volumeManager.requestUp(),
          onArrowDown: () => navigator.volumeManager.requestDown(),
          onHeadsetHook: x("end"),
        };
      }
      render() {
        var n = this.props,
          t = n.data,
          e = n.l10n,
          a = e.speakerOn,
          l = e.speakerOff,
          i = t.isCaller,
          o = t.isLocallyMuted ? (0, r.b)(2, B, { className: "E" }) : N(i),
          u = this.state,
          c = u.isSpeakerOn,
          s = u.showSpeakerBanner;
        return (0, r.c)(
          [
            (0, r.b)(2, A, {
              data: t,
              l10n: e,
              icon: o,
              softKeys: this.computeSoftKeys(),
            }),
            (0, r.b)(2, F, { hidden: s, children: c ? a : l }),
          ],
          4
        );
      }
    };
    function Z(n) {
      return (0, r.b)(2, A, {
        data: n.data,
        l10n: n.l10n,
        icon: (0, r.b)(2, S),
      });
    }
    function K(n) {
      var t = n.data,
        e = n.l10n;
      return (0, r.b)(2, A, {
        data: t,
        l10n: e,
        icon: N(t.isCaller),
        softKeys: {
          onBack: x("closeImmediatelyAndEnd"),
          onEndCall: x("closeImmediatelyAndEnd"),
          right: { label: e.end, action: x("closeImmediatelyAndEnd") },
        },
      });
    }
    function V(n) {
      var t = n.data,
        e = n.l10n,
        a = e.errorTitle,
        l = e.ok;
      return (0, r.c)(
        [
          (0, r.b)(2, A, {
            data: Object.assign({}, t, { status: a }),
            l10n: e,
            icon: (0, r.b)(2, z.a),
            softKeys: {
              center: { label: l, action: x("clearError") },
              onEndCall: x("clearError"),
              onBack: x("clearError"),
            },
          }),
          (0, r.b)(2, g, { title: a, description: t.status }),
        ],
        4
      );
    }
    function T(n) {
      switch (n.data.state) {
        case "incoming":
          return (0, r.i)((0, r.b)(2, D, Object.assign({}, n)));
        case "outgoing":
          return (0, r.i)((0, r.b)(2, H, Object.assign({}, n)));
        case "ongoing":
          return (0, r.i)((0, r.b)(2, I, Object.assign({}, n)));
        case "ending":
          return (0, r.i)((0, r.b)(2, Z, Object.assign({}, n)));
        case "loading":
          return (0, r.i)((0, r.b)(2, K, Object.assign({}, n)));
        default:
          return n.data.state, (0, r.i)((0, r.b)(2, V, Object.assign({}, n)));
      }
    }
    function W(n) {
      return null != n && "object" == typeof n;
    }
    function R(n) {
      return "string" == typeof n;
    }
    function J(n) {
      return "boolean" == typeof n;
    }
    function $(n) {
      return R(n) || null == n;
    }
    function P(n) {
      if (W(n)) {
        var t = (function (n) {
          var t = s.c.indexOf(n);
          if (-1 !== t) return s.c[t];
        })(n.state);
        if (null != t) {
          var e = n.isCaller,
            r = n.isLocallyMuted,
            a = n.phone,
            l = n.status,
            i = n.name,
            o = n.uri;
          if (J(e) && J(r) && R(a) && $(l) && $(i) && $(o))
            return {
              state: t,
              isCaller: e,
              isLocallyMuted: r,
              status: l,
              name: i,
              phone: a,
              uri: o,
            };
        }
      }
    }
    var _ = class extends a.b {
      constructor(n) {
        super(n),
          (this.onMessage = (n) => {
            if (n.origin === self.location.origin && null != n.data) {
              var t = P(n.data);
              null != t && this.setState(t);
            }
          }),
          (this.state = n.data);
      }
      componentDidMount() {
        o("ready"), self.addEventListener("message", this.onMessage);
      }
      componentWillUnmount() {
        self.removeEventListener("message", this.onMessage);
      }
      render() {
        return (0, r.b)(2, T, { data: this.state, l10n: this.props.l10n });
      }
    };
    (self.LOG = u("log")),
      (self.WARN = u("warn")),
      (self.ERROR = u("error")),
      (self.DEV = u("info")),
      (self.DEV_XMPP = u("info"));
    var q = localStorage.getItem(s.b),
      G = null;
    if (null != q)
      try {
        G = (function (n) {
          if (W(n)) {
            var t = n.isRtl;
            if ("boolean" == typeof t) {
              var e = P(n.data);
              if (null != e) {
                var r = (function (n) {
                  if (W(n)) {
                    var t = n.brand,
                      e = n.accept,
                      r = n.reject,
                      a = n.end,
                      l = n.mute,
                      i = n.unmute,
                      o = n.speakerOn,
                      u = n.speakerOff,
                      c = n.ok,
                      s = n.errorTitle;
                    if (
                      R(t) &&
                      R(e) &&
                      R(r) &&
                      R(a) &&
                      R(l) &&
                      R(i) &&
                      R(o) &&
                      R(u) &&
                      R(c) &&
                      R(s)
                    )
                      return {
                        brand: t,
                        accept: e,
                        reject: r,
                        end: a,
                        mute: l,
                        unmute: i,
                        speakerOn: o,
                        speakerOff: u,
                        ok: c,
                        errorTitle: s,
                      };
                  }
                })(n.l10n);
                if (null != r) return { isRtl: t, data: e, l10n: r };
              }
            }
          }
        })(JSON.parse(q));
      } catch (n) {}
    if (null == G)
      l({
        action: "error",
        message: "Call window could not read initial data on DOMContentLoaded",
      });
    else {
      var Q = G.isRtl ? "rtl" : "ltr";
      document.documentElement.setAttribute("dir", Q);
      var X = document.getElementById("root");
      if (!X) throw new Error("No root");
      a.g((0, r.b)(2, _, { l10n: G.l10n, data: G.data }), X);
    }
  },
});
