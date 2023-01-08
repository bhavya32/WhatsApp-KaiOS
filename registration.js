"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [178],
  {
    714: function (e, t, r) {
      r.r(t);
      var n = r(1),
        s = r(13),
        l = r(59),
        i = r(37),
        a = r.n(i),
        o = r(19),
        c = r(552),
        u = r(519),
        d = r(290),
        h = r(18),
        v = r.p + "b81d176c573bc5c8ca7d11f14ef5b798.png",
        f = r(183),
        p = r(61),
        m = r(510),
        E = class extends p.a {
          addSoftKeys(e, t) {
            e.setBack(m.e),
              this.props.onSkip
                ? e.setRightLabel(938, this.props.onSkip)
                : e.setFull(939);
          }
          render() {
            return (0, n.b)(2, d.a, {
              children: (0, n.f)(
                1,
                "div",
                "BD",
                [
                  (0, n.f)(
                    1,
                    "div",
                    "BE",
                    [
                      (0, n.f)(1, "div", "BF", (0, n.b)(2, f.a), 2),
                      (0, n.f)(
                        1,
                        "div",
                        "BG",
                        (0, n.b)(2, h.b, { l10n: this.props.label }),
                        2
                      ),
                    ],
                    4
                  ),
                  (0, n.f)(
                    1,
                    "div",
                    "BH",
                    (0, n.f)(1, "img", "BI", null, 1, { src: v }),
                    2
                  ),
                ],
                4
              ),
            });
          }
        },
        _ = (0, p.e)(E),
        A = r(583),
        C = r(520);
      function S() {
        return (0, n.b)(2, A.a, {
          countries: (0, C.b)(),
          onBack: m.e,
          onCancel: m.j,
          onSelect: m.v,
        });
      }
      var b = r(511),
        N = r(106),
        y =
          (r(141),
          class extends p.a {
            addSoftKeys(e, t) {
              e.setLeftLabel(942, () => (0, N.E)(t, N.z)),
                e.setRightLabel(859, () => {
                  (0, m.b)(t, !1);
                });
            }
            render() {
              return (0, n.b)(2, b.a, {
                title: (0, n.b)(2, h.b, { l10n: 1110 }),
                children: (0, n.f)(
                  1,
                  "div",
                  "Az",
                  [
                    (0, n.f)(
                      1,
                      "div",
                      "BA",
                      (0, n.f)(1, "img", null, null, 1, { src: v }),
                      2
                    ),
                    (0, n.f)(
                      1,
                      "div",
                      "BB",
                      (0, n.b)(2, h.b, { l10n: 1109 }),
                      2
                    ),
                    (0, n.f)(
                      1,
                      "div",
                      "BC",
                      (0, n.b)(2, h.b, { l10n: 1108 }),
                      2
                    ),
                  ],
                  4
                ),
              });
            }
          }),
        x = (0, p.e)(y),
        F = r(306),
        O = r(132),
        D = class extends p.a {
          addSoftKeys(e) {
            var t = this.props.error;
            "old_version" === t.reason
              ? (e.setLeftLabel(880, O.closeApp), e.setRightLabel(941, F.b))
              : (e.setCenterLabel(869, (e) => {
                  (0, m.l)(e, "blocked", `${t.cc}${t.localNumber}`);
                }),
                "blocked" === t.reason &&
                  (e.setLeftLabel(864, m.j),
                  e.setRightLabel(891, (e) => {
                    (0, N.E)(e, N.h);
                  }))),
              e.setBack(m.e);
          }
          render() {
            var e;
            switch (this.props.error.reason) {
              case "bad_param":
                e = 757;
                break;
              case "old_version":
                e = 315;
                break;
              case "bad_token":
                e = 261;
                break;
              case "blocked":
                e = 745;
                break;
              default:
                e = 757;
            }
            return (0, n.b)(2, d.a, {
              children: (0, n.f)(
                1,
                "div",
                "Ar",
                [
                  (0, n.f)(1, "div", "As", (0, n.b)(2, h.b, { l10n: 243 }), 2),
                  (0, n.f)(1, "div", "At", (0, n.b)(2, h.b, { l10n: e }), 2),
                ],
                4
              ),
            });
          }
        },
        R = (0, l.h)((0, p.e)(D), (e) => {
          var t = e.reg;
          if ("BLOCKED" === t.type) return { error: t.error };
        }),
        B = r(3),
        w = r(161),
        I = r(76),
        L = r(245),
        g = r(125),
        k = r(532),
        P = (e) => {
          var t = e.className;
          return (0, n.f)(
            32,
            "svg",
            t,
            [
              (0, n.f)(32, "circle", null, null, 1, {
                cx: "25.355",
                cy: "25.355",
                r: "25.355",
                fill: "#D2EDE5",
              }),
              (0, n.f)(32, "rect", null, null, 1, {
                width: "19.389",
                height: "33.31",
                x: "15.909",
                y: "8.949",
                fill: "#AAE1DB",
                rx: "6",
              }),
              (0, n.f)(32, "rect", null, null, 1, {
                width: "16.406",
                height: "24.858",
                x: "17.401",
                y: "12.926",
                fill: "#F3F8F7",
                rx: "3",
              }),
              (0, n.f)(32, "ellipse", null, null, 1, {
                cx: "25.428",
                cy: "21.378",
                fill: "#1DC3B4",
                rx: "2.813",
                ry: "2.784",
              }),
              (0, n.f)(32, "ellipse", null, null, 1, {
                cx: "25.428",
                cy: "28.088",
                fill: "#1DC3B4",
                rx: "4.923",
                ry: "3.23",
              }),
              (0, n.f)(32, "circle", null, null, 1, {
                cx: "41.762",
                cy: "41.762",
                r: "9.438",
                fill: "#fff",
              }),
              (0, n.f)(32, "path", null, null, 1, {
                fill: "#FF1F37",
                "fill-rule": "evenodd",
                d: "M41.762 31.818c-5.489 0-9.944 4.455-9.944 9.944 0 5.488 4.455 9.943 9.944 9.943 5.488 0 9.943-4.455 9.943-9.943 0-5.49-4.455-9.944-9.943-9.944zm-7.955 9.943a7.952 7.952 0 017.954-7.954c1.84 0 3.53.626 4.872 1.68L35.487 46.634a7.858 7.858 0 01-1.68-4.873zm3.083 6.275a7.858 7.858 0 004.872 1.68 7.952 7.952 0 007.955-7.954 7.86 7.86 0 00-1.68-4.872L36.89 48.036z",
                "clip-rule": "evenodd",
              }),
            ],
            4,
            { fill: "none", viewBox: "0 0 56 53" }
          );
        },
        T = (e) => {
          var t = e.className;
          return (0, n.f)(
            32,
            "svg",
            t,
            [
              (0, n.f)(32, "circle", null, null, 1, {
                cx: "26",
                cy: "25.5",
                r: "25.5",
                fill: "#D2EDE5",
              }),
              (0, n.f)(32, "rect", null, null, 1, {
                width: "19.5",
                height: "33.5",
                x: "16.5",
                y: "9",
                fill: "#AAE1DB",
                rx: "6",
              }),
              (0, n.f)(32, "rect", null, null, 1, {
                width: "16.5",
                height: "25",
                x: "18",
                y: "13",
                fill: "#F3F8F7",
                rx: "3",
              }),
              (0, n.f)(32, "ellipse", null, null, 1, {
                cx: "26.073",
                cy: "21.5",
                fill: "#1DC3B4",
                rx: "2.829",
                ry: "2.8",
              }),
              (0, n.f)(32, "ellipse", null, null, 1, {
                cx: "26.073",
                cy: "28.248",
                fill: "#1DC3B4",
                rx: "4.951",
                ry: "3.248",
              }),
              (0, n.f)(32, "circle", null, null, 1, {
                cx: "42.5",
                cy: "42",
                r: "11",
                fill: "#fff",
              }),
              (0, n.f)(32, "path", null, null, 1, {
                fill: "#1BC4B1",
                d: "M42.5 32c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10z",
              }),
              (0, n.f)(32, "path", null, null, 1, {
                fill: "#fff",
                d: "m40.8 46.8-4.6-4.5 1.8-1.8 2.8 2.8 6.5-6.6 1.8 1.8z",
              }),
            ],
            4,
            { viewBox: "0 0 54 53" }
          );
        },
        U = r(23),
        K = r.n(U),
        G = "Ct FV FS",
        M = "Cu FW FS",
        W = r(305),
        V = r(295),
        z = r(176),
        $ = class extends s.a {
          componentDidMount() {
            var e = this.props,
              t = e.backend,
              r = e.banAppealLastSync;
            (r && (0, B.m)(r, I.a)) || (0, m.f)(t),
              this.maybeShowBanAppealError();
          }
          componentDidUpdate(e) {
            this.maybeShowBanAppealError(e);
          }
          maybeShowBanAppealError(e) {
            var t = this.props,
              r = t.backend,
              n = t.error,
              s = null == e ? void 0 : e.error;
            null == n ||
              (s && s.type === n.type) ||
              (function (e, t) {
                switch (t.reason) {
                  case "network_error":
                    (0, o.e)({ text: 268, onClose: () => (0, m.c)(e) });
                    break;
                  default:
                    t.reason,
                      (0, o.e)({ text: 278, onClose: () => (0, m.c)(e) });
                }
              })(r, n);
          }
          render() {
            var e = this.props,
              t = e.banAppealState,
              r = e.banAppealContent,
              s = e.country,
              l = e.localNumber,
              i = null;
            switch (t.state) {
              case "banned":
                i = (0, n.b)(2, J);
                break;
              case "unbanned":
                i = (0, n.b)(2, Z, {
                  country: s,
                  localNumber: l,
                  reason: t.reason,
                  reasonUrl: t.reasonUrl,
                });
                break;
              case "in_review":
                i = (0, n.b)(2, q);
                break;
              default:
                t.state, (i = (0, n.b)(2, H, { banAppealContent: r }));
            }
            return (0, n.b)(2, d.a, { children: i });
          }
        },
        Q = (0, l.h)((0, p.e)($), (e, t) => {
          var r = e.reg;
          if ("BAN_APPEAL" === r.type)
            return {
              backend: t,
              banAppealReason: r.banAppeal.banReason,
              banAppealState: r.banAppeal.banAppealState,
              banAppealContent: r.banAppeal.banAppealContent,
              banAppealLastSync: r.banAppeal.banAppealLastSync,
              localNumber: r.localNumber,
              country: r.country,
              error: r.error,
            };
        }),
        Y = class extends p.b {
          addSoftKeys(e, t) {
            e.setCenterLabel(891, () => {
              (0, N.E)(t, N.z);
            });
          }
          render() {
            var e = this.props.selected;
            return (0, n.b)(2, g.o, {
              selected: e,
              text: [
                (0, n.b)(2, h.b, {
                  l10n: 49,
                  className: (0, K.a)(e ? "Cn" : "Co Fc"),
                }),
                11,
              ],
            });
          }
        },
        H = class extends p.a {
          shouldComponentUpdate(e, t) {
            var r = this.props,
              n = this.state;
            return (
              (r !== e && r.banAppealContent !== e.banAppealContent) ||
              (n !== t && n.content !== t.content)
            );
          }
          constructor(e, t) {
            super(e, t),
              (this.ITEMS = ["terms", "content"]),
              (this.FI = (e) => {
                this.setState({ content: e });
              }),
              (this.FJ = (e, t) => {
                switch (e) {
                  case "terms":
                    return (0, n.b)(2, Y, { selected: t });
                  case "content":
                    var r = this.props.banAppealContent;
                    return (0, n.b)(2, g.h, {
                      selected: t,
                      children: (0, n.b)(2, k.a, {
                        rows: I.f ? 3 : 4,
                        hasFocusPriority: t,
                        placeholder: 47,
                        onChange: this.FI,
                        defaultValue: r,
                      }),
                    });
                }
              }),
              (this.state = { content: e.banAppealContent || "" });
          }
          addSoftKeys(e, t) {
            var r = this.state.content;
            e.setCenterLabel(44, () => {
              t.spinUntilReadyOverlay(
                (0, m.u)(t, r).then(() => null),
                { title: 48, left: void 0, onSoftLeft: void 0, close: () => {} }
              );
            }),
              X(e, t),
              e.setBack(() => {
                (0, m.h)(t, r);
              });
          }
          render() {
            return (0, n.b)(2, L.a, {
              items: this.ITEMS,
              renderItem: this.FJ,
              keyOf: j,
              preventLoop: !0,
            });
          }
        };
      function j(e) {
        return e;
      }
      var q = class extends p.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.ITEMS = ["terms", "content"]),
              (this.FJ = (e, t) => {
                switch (e) {
                  case "terms":
                    return (0, n.b)(2, Y, { selected: t });
                  case "content":
                    return (0, n.b)(2, g.a, {
                      title: 46,
                      subtitle: 45,
                      selected: t,
                    });
                }
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            return !1;
          }
          addSoftKeys(e, t) {
            X(e, t),
              e.setBack(() => {
                (0, m.h)(t);
              });
          }
          render() {
            return (0, n.b)(2, L.a, {
              items: this.ITEMS,
              renderItem: this.FJ,
              keyOf: j,
              preventLoop: !0,
            });
          }
        },
        Z = class extends p.a {
          addSoftKeys(e, t) {
            var r = this.props,
              s = r.country,
              l = r.localNumber,
              i = r.reason,
              a = r.reasonUrl;
            e.setCenterLabel(902, () => {
              (function (e, t, r) {
                (0, o.g)({
                  text: [
                    (0, n.b)(
                      2,
                      z.b,
                      { phone: `${t.cc}${r}`, bold: !0 },
                      "phone"
                    ),
                    12,
                  ],
                  left: 877,
                  onSoftLeft: () => {
                    ee(e);
                  },
                  center: 935,
                  onSoftCenter: () => {
                    (0, m.p)(e, t, r, void 0, "sms");
                  },
                });
              })(t, s, l);
            }),
              X(e, t),
              "oops" === i
                ? e.setLeftLabel(54, () => {
                    (0, N.E)(t, N.q);
                  })
                : e.setLeftLabel(891, () => {
                    a ? (0, V.a)(t, a) : (0, N.E)(t, N.w);
                  });
          }
          render() {
            var e = "oops" === this.props.reason ? 50 : 51,
              t = T;
            return (0, n.b)(2, W.a, {
              children: (0, n.f)(
                1,
                "div",
                "Cp",
                (0, n.f)(
                  1,
                  "div",
                  "Cq",
                  [
                    (0, n.f)(
                      1,
                      "div",
                      "Cs",
                      (0, n.b)(2, t, { className: "Cr" }),
                      2
                    ),
                    (0, n.f)(1, "div", G, (0, n.b)(2, h.b, { l10n: 52 }), 2),
                    (0, n.f)(1, "div", M, (0, n.b)(2, h.b, { l10n: e }), 2),
                  ],
                  4
                ),
                2
              ),
            });
          }
        },
        J = class extends p.a {
          addSoftKeys(e, t) {
            e.setCenterLabel(41, () => {
              (0, m.j)(t);
            });
          }
          render() {
            var e = P;
            return (0, n.b)(2, W.a, {
              children: (0, n.f)(
                1,
                "div",
                "Cp",
                (0, n.f)(
                  1,
                  "div",
                  "Cq",
                  [
                    (0, n.f)(
                      1,
                      "div",
                      "Cs",
                      (0, n.b)(2, e, { className: "Cr" }),
                      2
                    ),
                    (0, n.f)(1, "div", G, (0, n.b)(2, h.b, { l10n: 43 }), 2),
                    (0, n.f)(1, "div", M, (0, n.b)(2, h.b, { l10n: 42 }), 2),
                  ],
                  4
                ),
                2
              ),
            });
          }
        };
      function X(e, t, r) {
        e.setRightOptions(() => {
          var e = new w.a("NO_TITLE");
          e.add(40, "skip-confirm" === r ? m.j : ee, t), (0, o.j)(e);
        });
      }
      function ee(e) {
        (0, o.g)({
          text: 39,
          center: 877,
          onSoftCenter: () => {
            (0, m.j)(e);
          },
          left: 864,
          onSoftLeft: "CLOSE",
        });
      }
      var te = class extends p.a {
        componentDidMount() {
          var e = this.props,
            t = e.backend,
            r = e.banAppealLastSync;
          (r && (0, B.m)(r, I.a)) || (0, m.f)(t), super.componentDidMount();
        }
        addSoftKeys(e, t) {
          var r =
            "no_appeal_opened" === this.props.banAppealState.state ? 37 : 53;
          e.setCenterLabel(r, (e) => {
            (0, m.g)(e);
          }),
            (function (e, t) {
              e.setRightOptions(() => {
                var e = new w.a("NO_TITLE");
                e.add(40, () => {
                  ee(t);
                }),
                  (0, o.j)(e);
              });
            })(e, t);
        }
        render() {
          return re(this.props.banReason);
        }
      };
      function re(e) {
        var t =
          "spam" === e
            ? (0, n.b)(2, h.b, { l10n: 36 })
            : (0, n.b)(2, h.b, { l10n: 35 });
        return (0, n.b)(2, d.a, {
          children: (0, n.f)(
            1,
            "div",
            "Bv",
            (0, n.f)(
              1,
              "div",
              "Bw",
              [
                (0, n.f)(
                  1,
                  "div",
                  "By",
                  (0, n.b)(2, P, { className: "Bx" }),
                  2
                ),
                (0, n.f)(1, "div", "Bz FV FS", t, 0),
                (0, n.f)(
                  1,
                  "div",
                  "CA FW FS",
                  (0, n.b)(2, h.b, { l10n: 38 }),
                  2
                ),
              ],
              4
            ),
            2
          ),
        });
      }
      var ne = (0, l.h)((0, p.e)(te), (e, t) => {
          var r = e.reg;
          if ("BLOCKED_BAN_APPEAL" === r.type)
            return {
              backend: t,
              localNumber: r.localNumber,
              country: r.country,
              banReason: r.banAppeal.banReason,
              banAppealState: r.banAppeal.banAppealState,
              banAppealLastSync: r.banAppeal.banAppealLastSync,
            };
        }),
        se = class extends p.a {
          addSoftKeys(e, t) {
            e.setCenterLabel(37, (e) => {
              var t = this.props,
                r = t.country,
                s = t.localNumber,
                l = t.banReason;
              (0, o.f)({
                text: [
                  (0, n.b)(2, z.b, { phone: `${r.cc}${s}`, bold: !0 }, "phone"),
                  10,
                ],
                confirm: 935,
                onConfirm: () => {
                  (0, m.q)(e, r, s, "sms", l);
                },
              });
            }),
              (function (e, t) {
                e.setRightOptions(() => {
                  var e = new w.a("NO_TITLE");
                  e.add(40, () => {
                    (0, m.j)(t);
                  }),
                    (0, o.j)(e);
                });
              })(e, t);
          }
          render() {
            return re(this.props.banReason);
          }
        },
        le = (0, l.h)((0, p.e)(se), (e, t) => {
          var r = e.reg;
          if ("BLOCKED_BAN_APPEAL_PRE" === r.type)
            return {
              backend: t,
              localNumber: r.localNumber,
              country: r.country,
              banReason: r.banReason,
            };
        }),
        ie = class extends p.a {
          addSoftKeys(e, t) {
            e.setLeftLabel(900, m.o),
              e.setRightLabel(902, () => {
                var e = this.props,
                  r = e.country,
                  n = e.localNumber,
                  s = e.maskedPhoneNumber;
                (0, m.a)(t, r, n, s);
              }),
              e.setBack(m.e);
          }
          render() {
            var e = this.props.maskedPhoneNumber;
            return (0, n.b)(2, b.a, {
              children: (0, n.f)(
                1,
                "div",
                "Au",
                [
                  (0, n.f)(
                    1,
                    "div",
                    "Av FV FS",
                    (0, n.b)(2, h.b, { l10n: 668 }),
                    2
                  ),
                  (0, n.b)(
                    2,
                    z.b,
                    { phone: e, className: "Aw FV FS" },
                    "phone"
                  ),
                  (0, n.f)(
                    1,
                    "div",
                    "Ax FW FS",
                    (0, n.b)(2, h.b, { l10n: 669 }),
                    2
                  ),
                  (0, n.f)(
                    1,
                    "div",
                    "Ay FX FS",
                    (0, n.b)(2, h.b, { l10n: 671 }),
                    2
                  ),
                ],
                8
              ),
            });
          }
        },
        ae = (0, l.h)((0, p.e)(ie), (e, t) => {
          var r = e.reg;
          if ("CONFIRM_FOUND_PHONE_NUMBER" === r.type)
            return {
              country: r.country,
              localNumber: r.localNumber,
              maskedPhoneNumber: r.maskedPhoneNumber,
            };
        });
      function oe() {
        return (0, n.b)(2, _, { label: 670, onSkip: m.o });
      }
      var ce = r(579),
        ue = r(77),
        de = r(153),
        he = r(533),
        ve = r(397),
        fe = r(539),
        pe = (e) => {
          var t = e.className;
          return (0, n.f)(
            32,
            "svg",
            t,
            (0, n.f)(32, "path", null, null, 1, {
              d: "M4.965 8.092a11.361 11.361 0 004.943 4.943l1.65-1.65a.746.746 0 01.764-.18c.84.277 1.748.428 2.678.428.412 0 .75.337.75.75V15c0 .412-.338.75-.75.75C7.957 15.75 2.25 10.043 2.25 3c0-.413.337-.75.75-.75h2.625c.412 0 .75.337.75.75 0 .938.15 1.838.428 2.678a.753.753 0 01-.188.764l-1.65 1.65z",
            }),
            2,
            { viewBox: "0 0 18 18" }
          );
        },
        me = r(551),
        Ee = "Ag",
        _e = "An",
        Ae = class extends p.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.FK = null),
              (this.FL = { item: "inputCode", scrollFromTop: "none" }),
              (this.FO = (e) => {
                var t = this.props,
                  r = t.backend,
                  n = t.localNumber,
                  s = t.country,
                  l = t.maskedPhoneNumber,
                  i = t.flow,
                  a = { iso: s.iso, cc: s.cc.replace("+", "") };
                switch (i) {
                  case "ban-appeal":
                    (0, m.q)(r, a, n, e);
                    break;
                  default:
                    (0, m.p)(r, a, n, l, e);
                }
              }),
              (this.FP = (e) => {
                var t = this.props,
                  r = t.backend;
                switch (t.flow) {
                  case "ban-appeal":
                    (0, m.n)(r, e);
                    break;
                  default:
                    (0, m.m)(r, e);
                }
              }),
              (this.FQ = (e, t) => {
                var r = this.props;
                switch (e) {
                  case "text":
                    return (0, n.b)(2, Se, {
                      selected: t,
                      country: r.country,
                      displayNumber: r.displayNumber,
                    });
                  case "inputCode":
                    return (0, n.b)(2, be, {
                      selected: t,
                      retryAfter: r.codeGuessRetryAfter,
                      sendCode: this.FP,
                    });
                  case "sms":
                    return (0, n.b)(2, Ne, {
                      method: "sms",
                      selected: t,
                      resend: this.FO,
                      wait: r.smsWait,
                    });
                  case "voice":
                    return (0, n.b)(2, Ne, {
                      method: "voice",
                      selected: t,
                      resend: this.FO,
                      wait: r.voiceWait,
                    });
                  default:
                    return (0, a.a)(e);
                }
              }),
              e
            );
          }
          componentDidMount() {
            this.FM(void 0), this.FN(), super.componentDidMount();
          }
          componentDidUpdate(e) {
            this.FM(e.error), this.FN(), super.componentDidUpdate(e);
          }
          componentWillUnmount() {
            this.FK && (self.clearTimeout(this.FK), (this.FK = null)),
              super.componentWillUnmount();
          }
          FM(e) {
            var t = this.props,
              r = t.error,
              s = t.methods;
            if (null != r && r !== e) {
              var l = (function (e, t, r) {
                switch (e.type) {
                  case "CODE_VERIFY_ERROR":
                    return (function (e, t) {
                      var r = e.reason;
                      switch (r) {
                        case "network_error":
                          return ye(268);
                        case "mismatch":
                          if (null != e.retryAfter) {
                            var s = (0, B.y)(e.retryAfter);
                            return ye(
                              s > 0
                                ? [(0, n.b)(2, ve.a, { seconds: s }), 233]
                                : 748,
                              750
                            );
                          }
                          return ye(749, 750);
                        case "temporarily_unavailable":
                          if (null != e.retryAfter) {
                            var l = (0, B.y)(e.retryAfter);
                            return ye(
                              l > 0
                                ? [(0, n.b)(2, ve.a, { seconds: l }), 234]
                                : 756
                            );
                          }
                          return ye(756);
                        case "stale":
                          return ye(755);
                        case "missing":
                          return t.includes("call") ? ye(752) : ye(751);
                        case "guessed_too_fast":
                          if (null != e.retryAfter) {
                            var i = (0, B.y)(e.retryAfter);
                            return ye(
                              i > 0
                                ? [(0, n.b)(2, ve.a, { seconds: i }), 64]
                                : 278
                            );
                          }
                          return ye(278);
                        default:
                          __LOG__(4)`Unrecognized error code ${r}`;
                      }
                    })(e, t);
                  case "CODE_REQUEST_ERROR":
                    return (function (e, t, r) {
                      var s = t.includes("sms"),
                        l = t.includes("voice"),
                        i = null != e.retryAfter ? (0, B.y)(e.retryAfter) : -1,
                        a = null != e.smsWait ? (0, B.y)(e.smsWait) : -1,
                        o = null != e.voiceWait ? (0, B.y)(e.voiceWait) : -1;
                      switch (e.reason) {
                        case "temporarily_unavailable":
                          return ye(
                            i > 0
                              ? [(0, n.b)(2, ve.a, { seconds: i }), 234]
                              : 756
                          );
                        case "too_recent":
                          return ye(
                            i > 0
                              ? [(0, n.b)(2, ve.a, { seconds: i }), 72]
                              : 277
                          );
                        case "provider_timeout":
                          switch (e.method) {
                            case "voice":
                              return ye(
                                o > 0
                                  ? [(0, n.b)(2, ve.a, { seconds: i }), 74]
                                  : 280
                              );
                            default:
                              return (
                                e.method,
                                ye(
                                  a > 0
                                    ? [(0, n.b)(2, ve.a, { seconds: a }), 66]
                                    : 270
                                )
                              );
                          }
                        case "provider_unroutable":
                        case "no_routes":
                          switch (e.method) {
                            case "voice":
                              return ye(
                                o > 0
                                  ? [(0, n.b)(2, ve.a, { seconds: o }), 75]
                                  : 281
                              );
                            default:
                              e.method;
                              var c = {
                                title: 243,
                                center: 902,
                                onSoftCenter: "CLOSE",
                                text:
                                  a > 0
                                    ? [(0, n.b)(2, ve.a, { seconds: a }), 67]
                                    : 271,
                              };
                              return (
                                l &&
                                  o <= 0 &&
                                  ((c.right = 747), (c.onSoftRight = r)),
                                { dialog: c }
                              );
                          }
                        case "too_many":
                          switch (e.method) {
                            case "voice":
                              return ye(
                                a > 0
                                  ? [(0, n.b)(2, ve.a, { seconds: a }), 76]
                                  : 282
                              );
                            default:
                              e.method;
                              var u = {
                                title: 243,
                                center: 902,
                                onSoftCenter: "CLOSE",
                                text: l
                                  ? o > 0
                                    ? [(0, n.b)(2, ve.a, { seconds: o }), 69]
                                    : 272
                                  : a
                                  ? [(0, n.b)(2, ve.a, { seconds: a }), 68]
                                  : 276,
                              };
                              return (
                                l &&
                                  o <= 0 &&
                                  ((u.right = 747), (u.onSoftRight = r)),
                                { dialog: u }
                              );
                          }
                        case "next_method":
                          if (!s && !l)
                            return (
                              __LOG__(
                                4
                              )`next_method received while no more methods are available`,
                              null
                            );
                          switch (e.method) {
                            case "voice":
                              return ye(
                                a > 0
                                  ? [(0, n.b)(2, ve.a, { seconds: a }), 73]
                                  : 279
                              );
                            default:
                              e.method;
                              var d = {
                                title: 243,
                                center: 902,
                                onSoftCenter: "CLOSE",
                                text:
                                  o > 0
                                    ? [(0, n.b)(2, ve.a, { seconds: o }), 65]
                                    : 269,
                              };
                              return (
                                o <= 0 &&
                                  ((d.right = 747), (d.onSoftRight = r)),
                                { dialog: d }
                              );
                          }
                        default:
                          return ye(278);
                      }
                    })(e, t, r);
                }
              })(r, s, () => this.FO("voice"));
              l && (l.isAlert ? (0, o.e)(l.alert) : (0, o.g)(l.dialog));
            }
          }
          FN() {
            var e, t, r, n;
            this.FK ||
              ((t = (e = this.props).codeGuessRetryAfter),
              (r = e.smsWait),
              (n = e.voiceWait),
              (De(r) || De(n) || De(t)) &&
                (this.FK = self.setTimeout(() => {
                  (this.FK = null), this.setState({}), this.FN();
                }, 1e3)));
          }
          addSoftKeys(e, t) {
            e.setLeftLabel(883, () => {
              (0, o.j)(
                (0, fe.a)(
                  t,
                  N.r,
                  "verify-sms",
                  `${this.props.country.cc}${this.props.displayNumber}`
                )
              );
            }),
              e.setBack(() => {
                (0, m.e)(t);
              });
          }
          render() {
            return (0, n.b)(2, d.a, {
              children: (0, n.b)(2, L.a, {
                items: this.props.orderedItemIds,
                keyOf: xe,
                renderItem: this.FQ,
                start: this.FL,
                preventLoop: !0,
              }),
            });
          }
        },
        Ce = (0, l.h)((0, p.e)(Ae), (e, t, r) => {
          var n = e.reg,
            s = r.flow;
          if (
            "REQUESTING_CODE" === n.type ||
            "REQUESTING_CODE_BAN_APPEAL" === n.type
          ) {
            var l,
              i = n.state,
              a =
                !i ||
                ("CODE_VERIFY_ERROR" !== i.type &&
                  "CODE_REQUEST_ERROR" !== i.type)
                  ? null
                  : i,
              o = a && "CODE_VERIFY_ERROR" === a.type ? a.retryAfter : null,
              c = null == i ? void 0 : i.smsWait,
              u = null == i ? void 0 : i.voiceWait;
            return (
              "REQUESTING_CODE" === n.type
                ? (l = ["sms", "voice"])
                : (n.type, (l = ["sms"])),
              {
                country: n.country,
                localNumber: n.localNumber,
                maskedPhoneNumber: n.maskedPhoneNumber || void 0,
                displayNumber: n.maskedPhoneNumber || n.localNumber,
                smsWait: c,
                voiceWait: u,
                codeGuessRetryAfter: o,
                error: a,
                orderedItemIds: ["text", "inputCode"].concat(l),
                methods: l,
                backend: t,
                flow: s,
              }
            );
          }
        }),
        Se = class extends p.b {
          addSoftKeys(e, t) {
            e.setCenterLabel(877, () => {
              (0, m.j)(t);
            });
          }
          render() {
            var e = this.props,
              t = e.selected,
              r = e.country,
              s = e.displayNumber,
              l = `${r.cc}${s}`;
            return (0, n.b)(2, de.b.div, {
              hasFocusPriority: t,
              className: (0, K.a)(_e, "Ao"),
              children: [
                (0, n.f)(
                  1,
                  "div",
                  "Ae FV FS",
                  (0, n.b)(2, h.b, {
                    l10n: [(0, n.b)(2, z.b, { phone: l }, "phone"), 236],
                  }),
                  2
                ),
                (0, n.f)(
                  1,
                  "div",
                  "Af FW FS",
                  (0, n.b)(2, h.b, {
                    l10n: [
                      (0, n.b)(
                        2,
                        z.b,
                        { phone: l, className: (0, K.a)(t && Ee, "Ah") },
                        "phone"
                      ),
                      237,
                    ],
                  }),
                  2
                ),
              ],
            });
          }
        },
        be = class extends p.b {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.state = { code: null }),
              (this.FR = (e) => {
                this.setState({ code: e.isCompleted ? e.code : null });
              }),
              e
            );
          }
          addSoftKeys(e, t) {
            var r = this.props,
              n = r.retryAfter,
              s = r.sendCode,
              l = this.state.code;
            null == l ||
              Fe(n) ||
              e.setRightLabel(935, () => {
                s(l);
              });
          }
          render() {
            var e = this.props,
              t = e.selected,
              r = Oe(e.retryAfter);
            return (0, n.f)(
              1,
              "div",
              (0, K.a)(_e, "Ao", t && Ee),
              [
                (0, n.b)(2, he.a, {
                  hasFocusPriority: t,
                  selected: t,
                  onChange: this.FR,
                }),
                r > 0
                  ? (0, n.f)(
                      1,
                      "div",
                      "Ap",
                      (0, n.b)(2, h.b, {
                        className: "Aq FW FS",
                        l10n: [(0, ue.b)(r), 235],
                      }),
                      2
                    )
                  : null,
              ],
              0
            );
          }
        },
        Ne = class extends p.b {
          addSoftKeys(e, t) {
            var r = this.props,
              n = r.method,
              s = r.wait,
              l = r.resend;
            if (!Fe(s)) {
              var i = "sms" === n ? 754 : 747;
              e.setCenterLabel(i, () => {
                l(n);
              });
            }
          }
          render() {
            var e,
              t,
              r = this.props,
              s = r.selected,
              l = r.method,
              i = Oe(r.wait),
              a = i > 0;
            return (
              "sms" === l
                ? ((e = me.a), (t = (0, n.b)(2, h.b, { l10n: 753 })))
                : ((e = pe), (t = (0, n.b)(2, h.b, { l10n: 746 }))),
              (0, n.b)(2, de.b.div, {
                hasFocusPriority: s,
                className: (0, K.a)(_e, s && Ee),
                children: [
                  (0, n.b)(2, e, { className: (0, K.a)("Ak", a && "Aj") }),
                  (0, n.f)(
                    1,
                    "div",
                    (0, K.a)("Ai FV FS", a && "Aj"),
                    [
                      (0, n.f)(1, "div", "Am", t, 0),
                      i > 0 ? (0, n.f)(1, "div", "Al", (0, ue.b)(i), 0) : null,
                    ],
                    0
                  ),
                ],
              })
            );
          }
        };
      function ye(e, t) {
        return { isAlert: !0, alert: { title: t || 243, text: e } };
      }
      function xe(e) {
        return e;
      }
      function Fe(e) {
        return null != e && (0, B.o)(e);
      }
      function Oe(e) {
        return null == e ? 0 : (0, B.y)(e);
      }
      function De(e) {
        return null != e && (0, B.o)(e);
      }
      var Re = ["text", "inputCode"],
        Be = class extends p.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Et = { item: "inputCode", scrollFromTop: "start" }),
              (this.Ey = () => {
                var e = this.props.emailWait;
                null == e || (0, B.o)(e)
                  ? this.Ez(1051)
                  : (0, m.s)(this.props.backend);
              }),
              (this.FA = () => {
                var e = this.props,
                  t = e.wipeType,
                  r = e.wipeToken;
                if (null != t && null != r) {
                  var n = "full" === t ? 1048 : 1049;
                  (0, o.f)({
                    title: 1050,
                    text: n,
                    confirm: 917,
                    onConfirm: () => {
                      this.FB(r);
                    },
                  });
                }
              }),
              (this.FB = (e) => {
                (0, o.f)({
                  title: 1050,
                  text: 1047,
                  confirm: 917,
                  onConfirm: () => {
                    (0, m.r)(this.props.backend, e);
                  },
                });
              }),
              (this.Ex = () => {
                var e = this.props.wipeWait;
                if (e && (0, B.o)(e)) {
                  var t = (0, n.b)(2, ve.a, { seconds: (0, B.y)(e) });
                  (0, o.f)({
                    title: 1040,
                    text: [t, 288],
                    confirm: 936,
                    onConfirm: this.Ey,
                  });
                } else
                  (0, o.g)({
                    title: 1040,
                    text: 1039,
                    center: 936,
                    onSoftCenter: this.Ey,
                    right: 917,
                    onSoftRight: this.FA,
                    left: 864,
                    onSoftLeft: "CLOSE",
                  });
              }),
              (this.FC = (e, t) =>
                "text" === e
                  ? (0, n.b)(2, Le, { selected: t, handleForgotPin: this.Ex })
                  : (0, n.b)(2, ge, {
                      selected: t,
                      guessWait: this.props.guessWait,
                      guessesLeft: this.props.guessesLeft,
                    })),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return (
              r !== e &&
              (r.country !== e.country ||
                r.localNumber !== e.localNumber ||
                r.code !== e.code ||
                r.guessWait !== e.guessWait ||
                r.guessesLeft !== e.guessesLeft ||
                r.emailWait !== e.emailWait ||
                r.wipeWait !== e.wipeWait ||
                r.wipeType !== e.wipeType ||
                r.wipeToken !== e.wipeToken ||
                r.error !== e.error)
            );
          }
          componentDidMount() {
            this.Eu(void 0), super.componentDidMount();
          }
          componentDidUpdate(e) {
            this.Eu(e.error), super.componentDidUpdate(e);
          }
          Eu(e) {
            var t = this.props.error;
            if (null != t && t !== e) {
              var r = this.Ev(t);
              r && ("dialog" === r.type ? this.Ew(r.props) : (0, o.e)(r.props));
            }
          }
          Ew(e) {
            (0, o.g)(
              Object.assign({}, e, { center: 902, onSoftCenter: "CLOSE" })
            );
          }
          Ev(e) {
            var t,
              r = ke(this.props.guessWait);
            switch (e.reason) {
              case "unknown":
                t = 278;
                break;
              case "network_error":
                t = 268;
                break;
              case "temporarily_unavailable":
              case "guessed_too_fast":
                t = r > 0 ? [(0, n.b)(2, ve.a, { seconds: r }), 234] : 756;
                break;
              case "too_many_guesses":
                t = 1042;
                break;
              case "mismatch":
                if (e.pin && e.pin.join("") === this.props.code.join(""))
                  return {
                    type: "dialog",
                    props: {
                      title: 243,
                      text: 1046,
                      right: 881,
                      onSoftRight: this.Ex,
                    },
                  };
                t = 1044;
                break;
              case "reset_too_soon":
                t = 1051;
                break;
              case "email_sent":
                return { type: "alert", props: { title: 244, text: 1036 } };
            }
            return t ? { type: "alert", props: { title: 243, text: t } } : null;
          }
          Ez(e) {
            (0, o.e)({ title: 243, text: e });
          }
          addSoftKeys(e, t) {
            e.setRightLabel(869, () => {
              var e = this.props.country.cc + this.props.localNumber;
              (0, o.j)((0, fe.a)(t, N.g, "register-2fa", e));
            }),
              e.setBack(() => {
                (0, m.e)(t);
              });
          }
          render() {
            return (0, n.b)(2, d.a, {
              children: (0, n.b)(2, L.a, {
                items: Re,
                keyOf: Ie,
                renderItem: this.FC,
                start: this.Et,
              }),
            });
          }
        },
        we = (0, l.h)((0, p.e)(Be), (e, t) => {
          var r = e.reg;
          if ("TWO_FACTOR" === r.type) {
            var n = r.state,
              s = n && "TWO_FACTOR_ERROR" === n.type ? n : null;
            return {
              country: r.country,
              localNumber: r.localNumber,
              guessWait: n ? n.guessWait : null,
              guessesLeft: n ? n.guessesLeft : null,
              wipeWait: n ? n.wipeWait : null,
              wipeType: n ? n.wipeType : null,
              wipeToken: n ? n.wipeToken : null,
              emailWait: n ? n.emailWait : null,
              error: s,
              code: r.code,
              backend: t,
            };
          }
        });
      function Ie(e) {
        return e;
      }
      var Le = class extends p.b {
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return (
              r !== e &&
              (r.selected !== e.selected ||
                r.handleForgotPin !== e.handleForgotPin)
            );
          }
          addSoftKeys(e) {
            e.setCenterLabel(881, this.props.handleForgotPin);
          }
          render() {
            var e = this.props.selected,
              t = (0, n.b)(2, h.b, {
                l10n: 1043,
                className: (0, K.a)(e && "DB", "DC"),
              }),
              r = (0, n.b)(2, h.b, { l10n: 1045, className: "DD" });
            return (0, n.b)(2, de.b.div, {
              hasFocusPriority: e,
              className: "DE",
              children: [
                (0, n.f)(
                  1,
                  "div",
                  "Cz FV FS",
                  (0, n.b)(2, h.b, { l10n: 1061 }),
                  2
                ),
                (0, n.f)(
                  1,
                  "div",
                  "DA FW FS",
                  (0, n.b)(2, h.b, { l10n: [t, r, 289] }),
                  2
                ),
              ],
            });
          }
        },
        ge = class extends p.b {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.FD = null),
              (this.state = {
                guessWait: null,
                remainingSeconds: 0,
                pin: null,
              }),
              (this.FH = (e) => {
                this.setState({ pin: e.isCompleted ? e.code : null });
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var r = this.props,
              n = this.state;
            return (
              (r !== e &&
                (r.selected !== e.selected ||
                  r.guessWait !== e.guessWait ||
                  r.guessesLeft !== e.guessesLeft)) ||
              (n !== t &&
                (n.guessWait !== t.guessWait ||
                  n.remainingSeconds !== t.remainingSeconds ||
                  n.pin !== t.pin))
            );
          }
          static getDerivedStateFromProps(e, t) {
            var r = e.guessWait;
            return r !== t.guessWait
              ? { guessWait: r, remainingSeconds: ke(r) }
              : null;
          }
          componentDidMount() {
            this.FE(), super.componentDidMount();
          }
          componentDidUpdate(e, t) {
            this.FE(), super.componentDidUpdate(e, t);
          }
          componentWillUnmount() {
            this.FF(), super.componentWillUnmount();
          }
          FE() {
            this.state.remainingSeconds > 0
              ? null == this.FD &&
                (this.FD = setInterval(() => {
                  this.FG();
                }, 1e3))
              : this.FF();
          }
          FF() {
            var e = this.FD;
            e && ((this.FD = null), clearInterval(e));
          }
          FG() {
            var e = this.state.guessWait;
            this.setState((t) =>
              e !== t.guessWait
                ? null
                : { remainingSeconds: Math.max(t.remainingSeconds - 1, 0) }
            );
          }
          addSoftKeys(e, t) {
            var r = this.state,
              n = r.pin,
              s = r.remainingSeconds;
            null != n &&
              0 === s &&
              e.setCenterLabel(879, () => {
                0 === this.props.guessesLeft
                  ? (0, o.e)({ title: 243, text: 1042 })
                  : (0, m.x)(t, n);
              });
          }
          render() {
            var e = this.props.selected,
              t = this.state.remainingSeconds,
              r =
                t > 0
                  ? (0, n.b)(2, h.b, {
                      l10n: [(0, n.b)(2, ve.a, { seconds: t }), 235],
                    })
                  : null;
            return (0, n.f)(
              1,
              "div",
              (0, K.a)("DE", e && "DB"),
              [
                r,
                (0, n.b)(2, he.a, {
                  hasFocusPriority: e,
                  selected: e,
                  onChange: this.FH,
                }),
              ],
              0
            );
          }
        };
      function ke(e) {
        return null == e ? 0 : (0, B.y)(e);
      }
      var Pe = class extends s.a {
        componentDidMount() {
          (function (e, t) {
            if (null != t) {
              var r = null,
                n = 243;
              switch (t) {
                case "deregistered":
                  r = 241;
                  break;
                case "banned":
                  r = 745;
                  break;
                case "deleted":
                  (n = 240), (r = 239);
              }
              null != r &&
                ((0, o.e)({
                  title: n,
                  text: r,
                  onClose: (e) => {
                    e.fireAndForget("registration", "acceptRegAlert", {});
                  },
                }),
                e.dispatch({ type: "REG_ALERT_SHOWN" }));
            }
          })(this.props.backend, this.props.alert);
        }
        render() {
          var e = this.props,
            t = e.loading,
            r = e.type,
            s = e.contactUs;
          return null != t
            ? (0, n.i)((0, n.b)(2, u.a, Object.assign({}, t)))
            : (0, n.c)([Ue(r), Te(s)], 0);
        }
      };
      function Te(e) {
        return null != e ? (0, n.f)(1, "div", "AD", (0, n.b)(2, c.a), 2) : null;
      }
      function Ue(e) {
        switch (e) {
          case "UNINITIALIZED":
            return (0, n.b)(2, x);
          case "QUERYING_JIO_HEADERS":
            return (0, n.b)(2, oe);
          case "CONFIRM_FOUND_PHONE_NUMBER":
            return (0, n.b)(2, ae);
          case "ENTERING_PHONE_NUMBER":
            return (0, n.b)(2, ce.b);
          case "REQUESTING_CODE":
            return (0, n.b)(2, Ce, { flow: "reg" });
          case "TWO_FACTOR":
            return (0, n.b)(2, we);
          case "BLOCKED":
            return (0, n.b)(2, R);
          case "BLOCKED_BAN_APPEAL":
            return (0, n.b)(2, ne);
          case "SENDING_SMS":
            return (0, n.b)(2, _, { label: 758 });
          case "SENDING_VOICE":
            return (0, n.b)(2, _, { label: 759 });
          case "VERIFYING":
            return (0, n.b)(2, _, { label: 1078 });
          case "RESETTING":
            return (0, n.b)(2, _, { label: 1052 });
          case "SENDING_EMAIL":
            return (0, n.b)(2, _, { label: 1053 });
          case "INITIALIZING":
            return (0, n.b)(2, _, { label: 485 });
          case "COUNTRY_SELECT":
            return (0, n.b)(2, S);
          case "SENDING_SMS_BAN_APPEAL":
            return (0, n.b)(2, _, { label: 758 });
          case "SENDING_VOICE_BAN_APPEAL":
            return (0, n.b)(2, _, { label: 759 });
          case "VERIFYING_SMS_BAN_APPEAL":
            return (0, n.b)(2, _, { label: 1078 });
          case "REQUESTING_CODE_BAN_APPEAL":
            return (0, n.b)(2, Ce, { flow: "ban-appeal" });
          case "BAN_APPEAL":
            return (0, n.b)(2, Q);
          case "BLOCKED_BAN_APPEAL_PRE":
            return (0, n.b)(2, le);
          default:
            (0, a.a)(e);
        }
      }
      t.default = (0, l.h)(Pe, (e, t) => {
        var r = e.reg,
          n = e.contactUs,
          s = e.loading,
          l = e.alert;
        return { type: r.type, alert: l, contactUs: n, loading: s, backend: t };
      });
    },
  },
]);
