"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [31, 172],
  {
    510: function (t, n, i) {
      i.d(n, "k", function () {
        return o;
      }),
        i.d(n, "b", function () {
          return u;
        }),
        i.d(n, "o", function () {
          return h;
        }),
        i.d(n, "a", function () {
          return a;
        }),
        i.d(n, "w", function () {
          return c;
        }),
        i.d(n, "p", function () {
          return l;
        }),
        i.d(n, "v", function () {
          return f;
        }),
        i.d(n, "i", function () {
          return d;
        }),
        i.d(n, "j", function () {
          return v;
        }),
        i.d(n, "d", function () {
          return p;
        }),
        i.d(n, "m", function () {
          return m;
        }),
        i.d(n, "x", function () {
          return b;
        }),
        i.d(n, "s", function () {
          return g;
        }),
        i.d(n, "r", function () {
          return y;
        }),
        i.d(n, "l", function () {
          return N;
        }),
        i.d(n, "t", function () {
          return A;
        }),
        i.d(n, "e", function () {
          return C;
        }),
        i.d(n, "q", function () {
          return E;
        }),
        i.d(n, "n", function () {
          return P;
        }),
        i.d(n, "f", function () {
          return x;
        }),
        i.d(n, "u", function () {
          return F;
        }),
        i.d(n, "h", function () {
          return S;
        }),
        i.d(n, "g", function () {
          return k;
        }),
        i.d(n, "c", function () {
          return w;
        });
      var e = i(132),
        r = i(19),
        s = i(554);
      function o(t) {
        t.fireAndForget("registration", "goToWelcomeScreen", {});
      }
      function u(t, n) {
        t.spinUntilReadyOverlay(new Promise(() => {})),
          t.fireAndForget("registration", "acceptPolicy", {
            queryJioHeaders: n,
          });
      }
      function h(t) {
        t.fireAndForget("registration", "rejectFoundPhoneNumber", {});
      }
      function a(t, n, i, e) {
        t.fireAndForget("registration", "acceptFoundPhoneNumber", {
          country: n,
          localNumber: i,
          maskedPhoneNumber: e,
        });
      }
      function c(t, n, i) {
        t.fireAndForget("registration", "verifyPhoneExists", {
          localNumber: i,
          country: n,
        });
      }
      function l(t, n, i, e, r) {
        t.fireAndForget("registration", "requestCode", {
          country: n,
          localNumber: i,
          maskedPhoneNumber: e,
          method: r,
        });
      }
      function f(t, n) {
        t.fireAndForget("registration", "updateCountry", { country: n });
      }
      function d(t, n) {
        t.fireAndForget("registration", "goToCountrySelect", {
          phoneNumber: n,
        });
      }
      function v(t) {
        t.fireAndForget("registration", "goToEditPhoneNumber", {});
      }
      function p(t) {
        t.fireAndForget("registration", "clearPhoneNumberStatus", {});
      }
      function m(t, n) {
        t.fireAndForget("registration", "registerWithCode", { code: n });
      }
      function b(t, n) {
        t.fireAndForget("registration", "verifyTwoFactor", { pin: n });
      }
      function g(t) {
        t.fireAndForget("registration", "sendForgotPINEmail", {});
      }
      function y(t, n) {
        t.fireAndForget("registration", "resetAccount", { token: n });
      }
      function N(t, n, i) {
        t.dispatch({ type: "OPEN_CONTACT_US", context: n, phoneNumber: i });
      }
      function A(t, n, i, e, r) {
        t.dispatch({ type: "OPEN_SPINNER", title: 466, subtitle: 182 }),
          (0, s.a)(t, n, i, e, r).then(() => {
            t.goBack(), t.dispatch({ type: "CLOSE_SPINNER" });
          });
      }
      function C(t) {
        (0, r.f)({
          title: 1110,
          text: 311,
          onCancel: r.a,
          onConfirm: e.closeApp,
        });
      }
      function E(t, n, i, e, r) {
        t.fireAndForget("registration", "requestCodeBanAppeal", {
          country: n,
          localNumber: i,
          method: e,
          banInfo: r ? { banReason: r } : void 0,
        });
      }
      function P(t, n) {
        t.fireAndForget("registration", "registerWithCodeBanAppeal", {
          code: n,
        });
      }
      function x(t) {
        t.fireAndForget("registration", "fetchBanAppealStatus", {});
      }
      function F(t, n) {
        return t.sendAndReceive("registration", "submitBanAppeal", {
          content: n,
        });
      }
      function S(t, n) {
        return t.sendAndReceive("registration", "goToBanAppealBlocked", {
          content: n,
        });
      }
      function k(t) {
        return t.sendAndReceive("registration", "goToBanAppeal", {});
      }
      function w(t) {
        t.fireAndForget("registration", "clearBanAppealErrorStatus", {});
      }
    },
    511: function (t, n, i) {
      i.d(n, "a", function () {
        return o;
      });
      var e = i(1),
        r = (i(13), i(305)),
        s = i(290);
      function o(t) {
        return (0, e.b)(2, s.a, {
          title: t.title,
          children: (0, e.b)(2, r.a, { children: t.children }),
        });
      }
    },
    519: function (t, n, i) {
      var e = i(1),
        r = (i(13), i(290)),
        s = i(18),
        o = i(61),
        u = i(550),
        h = class extends o.a {
          addSoftKeys(t) {
            var n = this.props.onExit;
            n ? (t.setBack(n), t.setOnEndCall(n)) : t.setFull(939);
          }
          render() {
            var t = this.props,
              n = t.title,
              i = t.subtitle,
              o = n ? (0, e.b)(2, s.b, { l10n: n }) : null;
            return (0, e.b)(2, r.a, {
              title: o,
              children: (0, e.b)(2, u.a, { subtitle: i }),
            });
          }
        };
      n.a = (0, o.e)(h);
    },
    532: function (t, n, i) {
      var e = i(1),
        r = i(13),
        s = i(23),
        o = i.n(s),
        u = i(153),
        h = i(21),
        a = i(63),
        c = i(195),
        l = i(47),
        f = i(155),
        d = class extends r.a {
          shouldComponentUpdate(t, n) {
            var i = this.props;
            return (
              i !== t &&
              (i.className !== t.className ||
                i.hasFocusPriority !== t.hasFocusPriority ||
                i.placeholder !== t.placeholder ||
                i.rows !== t.rows ||
                i.cols !== t.cols ||
                i.onChange !== t.onChange ||
                i.innerRef !== t.innerRef ||
                i.invalid !== t.invalid ||
                i.defaultValue !== t.defaultValue)
            );
          }
          constructor(t) {
            super(t),
              (this.HK = 0),
              (this.HL = 0),
              (this.HM = null),
              (this.HN = null),
              (this.HO = null),
              (this.HP = !1),
              (this.HQ = null),
              (this.HR = ""),
              (this.HS = null),
              (this.HW = (t) => {
                if (((this.HM = t), t)) {
                  this.HR = t.value;
                  var n = Object.getPrototypeOf(t);
                  (this.HS = Object.getOwnPropertyDescriptor(n, "value").set),
                    this.props.innerRef && this.props.innerRef(t);
                } else this.HS = null;
              }),
              (this.HZ = () => {
                this.Ha();
                var t = new Event("focus_input", { bubbles: !0 });
                this.HM && this.HM.dispatchEvent(t);
              }),
              (this.Ha = () => {
                null != this.HM && this.HM.setSelectionRange(this.HK, this.HL);
              }),
              (this.HY = () => {
                null != this.HM &&
                  ((this.HK = this.HM.selectionStart),
                  (this.HL = this.HM.selectionEnd));
              }),
              (this.Hb = (t) => {
                var n = t.target.value;
                if (this.HR !== n) {
                  0 === n.length &&
                    0 !== this.HR.length &&
                    (this.HN = requestAnimationFrame(() => {
                      t.target.blur();
                    })),
                    (this.HR = n);
                  var i = this.HP ? (0, f.f)(n) : n;
                  this.props.onChange && this.props.onChange(i, t);
                }
              }),
              (this.Hc = (t) => {
                (0, a.m)(t) === a.e && "" !== t.target.value
                  ? t.stopPropagation()
                  : this.HX(t);
              }),
              (this.Hd = (t) => {
                (0, a.m)(t) === a.f
                  ? ((this.HN = requestAnimationFrame(() => {
                      t.target.blur();
                    })),
                    t.preventDefault(),
                    t.stopPropagation())
                  : this.HX(t);
              });
            var n = t.defaultValue;
            if (n) {
              var i = (0, l.e)(n),
                e = i.normalizedText,
                r = i.fontFamily;
              (this.HQ = e), (this.HO = r), (this.HP = e !== n);
            }
          }
          componentDidMount() {
            this.HM && null != this.HO && (this.HM.style.fontFamily = this.HO);
          }
          componentWillUnmount() {
            null != this.HN && cancelAnimationFrame(this.HN);
          }
          pasteText(t) {
            if (null != this.HM) {
              var n = (0, l.e)(t).normalizedText,
                i = this.HP || n !== t,
                e = this.HT(),
                r = this.HU(),
                s = e.substring(0, r.start) + n,
                o = s + e.substring(r.end),
                u = s.length;
              this.setValue(i ? (0, f.f)(o) : o), this.HV(u);
            }
          }
          HT() {
            var t;
            return (null == (t = this.HM) ? void 0 : t.value) || "";
          }
          setValue(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              e = this.HM,
              r = this.HS;
            if (null != e && null != r && e.value !== t) {
              var s = (0, l.e)(t),
                o = s.normalizedText,
                u = s.fontFamily;
              if (
                ((this.HP = o !== t),
                (this.HO = u),
                (e.style.fontFamily = u),
                r.call(e, o),
                this.HV(n ? 0 : o.length),
                !i)
              ) {
                var h = new Event("input", { bubbles: !0 });
                e.dispatchEvent(h);
              }
            }
          }
          HX(t) {
            var n = (0, a.m)(t),
              i = this.HM ? this.HM.selectionStart : 0;
            n === a.a
              ? i < (t.target.value ? (0, c.a)(t.target.value) : 0) &&
                t.stopPropagation()
              : n === a.d && i > 0 && t.stopPropagation();
          }
          HU() {
            return null == this.HM
              ? { start: 0, end: 0 }
              : { start: this.HM.selectionStart, end: this.HM.selectionEnd };
          }
          HV(t) {
            null != this.HM &&
              ((this.HM.selectionStart = t),
              (this.HM.selectionEnd = t),
              this.HY());
          }
          render() {
            var t = this.props,
              n = t.className,
              i = t.cols,
              r = t.hasFocusPriority,
              s = t.invalid,
              a = t.placeholder,
              c = t.rows;
            return (0, e.b)(2, u.b.textarea, {
              innerRef: this.HW,
              hasFocusPriority: r,
              placeholder: a ? (0, h.k)(a) : void 0,
              rows: c,
              cols: i,
              onInput: this.Hb,
              onKeyDown: this.Hd,
              className: (0, o.a)("DF", s && "DG", n),
              defaultValue: this.HQ,
              onNativeFocus: this.HZ,
              onNativeBlur: this.HY,
            });
          }
        };
      n.a = d;
    },
    533: function (t, n, i) {
      var e = i(1),
        r = i(13),
        s = i(18),
        o = i(380),
        u = i(63),
        h = i(23),
        a = i.n(h),
        c = /^[0-9]{0,6}$/,
        l = class extends r.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.IM = r.e()),
              (this.state = { code: "", dirty: !1 }),
              (this.IP = (t) => {
                switch (t.key) {
                  case u.d:
                  case u.a:
                  case u.b:
                  case u.c:
                    t.preventDefault();
                }
              }),
              (this.IO = () => {
                var t = (function (t) {
                  if (f(t)) {
                    var n = Array.from(t).map((t) => parseInt(t, 10));
                    return [n[0], n[1], n[2], n[3], n[4], n[5]];
                  }
                  return null;
                })(this.state.code);
                t
                  ? this.props.onChange({ isCompleted: !0, code: t })
                  : this.props.onChange({ isCompleted: !1 });
              }),
              (this.reset = () => {
                this.setState({ code: "" }, () => {
                  this.IM.current && this.IM.current.setValue("", !1, !0),
                    this.IO();
                });
              }),
              (this.IQ = (t, n) => {
                c.test(t)
                  ? this.setState({ code: t, dirty: !0 }, this.IO)
                  : (n.target.value = this.state.code);
              }),
              t
            );
          }
          shouldComponentUpdate(t, n) {
            var i = this.props,
              e = this.state;
            return (
              (i !== t &&
                (i.onChange !== t.onChange ||
                  i.selected !== t.selected ||
                  i.hasFocusPriority !== t.hasFocusPriority ||
                  i.defaultValue !== t.defaultValue)) ||
              (e !== n && (e.code !== n.code || e.dirty !== n.dirty))
            );
          }
          componentDidMount() {
            this.IN();
          }
          componentDidUpdate(t) {
            var n = this.props.defaultValue;
            t.defaultValue === n ||
              this.state.dirty ||
              (null == n ? this.reset() : this.IN());
          }
          IN() {
            var t = this.props.defaultValue;
            if (null != t) {
              var n = t.join("");
              f(n) &&
                (this.setState({ code: n }, this.IO),
                this.IM.current && this.IM.current.setValue(n, !1, !0));
            }
          }
          render() {
            for (var t = [], n = 0; n < 6; ++n) {
              var i = this.state.code[n];
              t.push(
                (0, e.f)(
                  1,
                  "div",
                  "EM",
                  i
                    ? (0, e.f)(1, "span", null, i, 0)
                    : (0, e.f)(1, "div", "EN"),
                  0,
                  null,
                  n
                )
              );
            }
            return (0, e.f)(
              1,
              "div",
              (0, a.a)("EK", this.props.selected && "EJ"),
              [
                (0, e.b)(2, s.b, { l10n: 486, className: "EI" }),
                (0, e.f)(1, "div", "EL", t, 0),
                (0, e.b)(
                  2,
                  o.a,
                  {
                    type: "tel",
                    className: "EO",
                    hasFocusPriority: this.props.hasFocusPriority,
                    onChange: this.IQ,
                  },
                  null,
                  this.IM
                ),
              ],
              4,
              { onKeyDown: this.IP }
            );
          }
        };
      function f(t) {
        return 6 === t.length && c.test(t);
      }
      n.a = l;
    },
    550: function (t, n, i) {
      i.d(n, "a", function () {
        return o;
      });
      var e = i(1),
        r = (i(13), i(183)),
        s = i(18);
      function o(t) {
        return (0, e.f)(
          1,
          "div",
          "Bj",
          [
            (0, e.b)(2, r.a),
            (0, e.f)(
              1,
              "div",
              "Bk FX FS",
              t.subtitle ? (0, e.b)(2, s.b, { l10n: t.subtitle }) : null,
              0
            ),
          ],
          4
        );
      }
    },
    551: function (t, n, i) {
      var e = i(1);
      i(13),
        (n.a = (t) => {
          var n = t.className;
          return (0, e.f)(
            32,
            "svg",
            n,
            (0, e.f)(32, "path", null, null, 1, {
              d: "M15 1.5H3c-.825 0-1.492.675-1.492 1.5L1.5 16.5l3-3H15c.825 0 1.5-.675 1.5-1.5V3c0-.825-.675-1.5-1.5-1.5zM6.75 8.25h-1.5v-1.5h1.5v1.5zm3 0h-1.5v-1.5h1.5v1.5zm3 0h-1.5v-1.5h1.5v1.5z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        });
    },
    552: function (t, n, i) {
      var e = i(1),
        r = i(13),
        s = i(532),
        o = i(125),
        u = i(380),
        h = i(18),
        a = i(59),
        c = i(61),
        l = i(290),
        f = i(245),
        d = i(37),
        v = i.n(d),
        p = i(127),
        m = i(553),
        b = i(510),
        g = i(19),
        y = i(554),
        N = class extends c.b {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.state = { feedback: "" }),
              (this.Fs = () => this.state.feedback.trim()),
              (this.Ft = () => "" !== this.Fs()),
              (this.Fu = () => this.Fs().length >= 5),
              (this.Fv = (t) => {
                this.setState({ feedback: t });
              }),
              t
            );
          }
          addSoftKeys() {}
          render() {
            var t = this.props.selected;
            return (0, e.b)(2, o.h, {
              label: 173,
              selected: t,
              children: (0, e.b)(2, s.a, {
                placeholder: 179,
                hasFocusPriority: t,
                rows: 4,
                onChange: this.Fv,
              }),
            });
          }
        },
        A = ["jiophonecare@jiophone.com", "care@mylyf.com", "care@jio.com"],
        C = class extends c.b {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.state = { email: { value: "", invalid: !1, dirty: !1 } }),
              (this.getValue = () => this.state.email.value.trim()),
              (this.hasValue = () => "" !== this.getValue()),
              (this.setDirty = () => {
                this.setState((t) => {
                  var n = t.email;
                  return { email: Object.assign({}, n, { dirty: !0 }) };
                });
              }),
              (this.isValid = () => !this.state.email.invalid),
              (this.handleEmailChange = (t) => {
                var n = t.trim(),
                  i = (0, m.a)(n) && !A.includes(n);
                this.setState((t) => ({
                  email: { value: n, invalid: !i, dirty: t.email.dirty },
                }));
              }),
              t
            );
          }
          addSoftKeys() {}
          componentDidUpdate(t, n, i) {
            !this.props.selected &&
              t.selected &&
              this.hasValue() &&
              this.setDirty(),
              super.componentDidUpdate(t, n, i);
          }
          render() {
            var t = this.props.selected,
              n = this.state.email;
            return (0, e.b)(2, o.h, {
              label: 171,
              selected: t,
              children: (0, e.b)(2, u.a, {
                type: "email",
                hasFocusPriority: t,
                placeholder: 172,
                invalid: n.dirty && n.invalid,
                onChange: this.handleEmailChange,
              }),
            });
          }
        },
        E = ["feedback", "email"],
        P = class extends c.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.feedbackRef = r.e()),
              (this.emailRef = r.e()),
              (this.maybeSendFeedback = () => {
                var t = this.emailRef.current,
                  n = this.feedbackRef.current;
                if (t && n) {
                  var i = t.getValue(),
                    e = n.Fs();
                  if (!t.isValid())
                    return (
                      (0, g.e)({ title: 176, text: A.includes(i) ? 174 : 175 }),
                      void t.setDirty()
                    );
                  n.Fu()
                    ? ((0, p.crashlog)("Uploading logs", "Contact Us"),
                      __LOG__(2)`Email: ${i}, feedback: ${e}`,
                      this.props.sendLogs(e, i))
                    : (0, g.e)({ title: 178, text: 177 });
                }
              }),
              (this.renderItem = (t, n) => {
                switch (t) {
                  case "email":
                    return (0, e.b)(2, C, { selected: n }, null, this.emailRef);
                  case "feedback":
                    return (0, e.b)(
                      2,
                      N,
                      { selected: n },
                      null,
                      this.feedbackRef
                    );
                  default:
                    return (0, v.a)(t);
                }
              }),
              t
            );
          }
          shouldComponentUpdate(t, n) {
            var i = this.props;
            return i !== t && i.sendLogs !== t.sendLogs;
          }
          addSoftKeys(t, n) {
            t.setLeftAsBack();
            var i = this.emailRef.current,
              e = this.feedbackRef.current;
            if (i && e) {
              var r = e.Ft(),
                s = i.hasValue();
              r && s && t.setRightLabel(935, this.maybeSendFeedback);
            }
          }
          render() {
            return (0, e.b)(2, l.a, {
              title: (0, e.b)(2, h.b, { l10n: 180 }),
              children: (0, e.b)(2, f.a, {
                items: E,
                keyOf: x,
                renderItem: this.renderItem,
              }),
            });
          }
        };
      function x(t) {
        return t;
      }
      n.a = (0, a.e)((0, c.e)(P), (t, n) => {
        var i;
        if (t.reg) {
          if (!t.contactUs) return null;
          var e = t.contactUs,
            r = e.phoneNumber,
            s = e.context;
          i = (t, i) => {
            (0, b.t)(n, t, i, s, r);
          };
        } else
          i = (t, i) => {
            (function (t, n, i) {
              var e = (0, y.a)(t, n, i, "settings/about").then(() => t.goBack);
              t.spinUntilReady(e, 466, 182);
            })(n, t, i);
          };
        return { backend: n, sendLogs: i };
      });
    },
    553: function (t, n, i) {
      i.d(n, "a", function () {
        return r;
      }),
        i.d(n, "b", function () {
          return s;
        });
      var e =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]))+$/;
      function r(t) {
        return e.test(t);
      }
      function s(t) {
        return null != t && r(t) ? t : null;
      }
    },
    554: function (t, n, i) {
      function e(t, n, i, e, r) {
        return t.sendAndReceive("basic", "sendSupportRequest", {
          requestText: n,
          email: i,
          context: e,
          regPhoneNumber: r,
        });
      }
      i.d(n, "a", function () {
        return e;
      });
    },
  },
]);
