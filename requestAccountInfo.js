"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [179],
  {
    726: function (e, t, r) {
      r.r(t);
      var n = r(1),
        o = (r(13), r(23)),
        a = r.n(o),
        d = r(37),
        s = r.n(d),
        i = r(3),
        l = r(77),
        u = r(94),
        c = r(106),
        h = r(47),
        p = r(59),
        f = r(19),
        w = r(385),
        m = r(153),
        v = r(245),
        b = r(125),
        g = r(61),
        y = r(183),
        S = r(18),
        C = r(290),
        X = r(318),
        x = r(555),
        B = r(319),
        F = r(537),
        R = (e) => {
          var t = e.className;
          return (0, n.f)(
            32,
            "svg",
            t,
            (0, n.f)(32, "path", null, null, 1, {
              d: "M23.04 19.53a3.25 3.25 0 00-3.564.204l-7.658-4.42c.014-.122.037-.24.037-.364s-.023-.242-.037-.363l7.658-4.42a3.254 3.254 0 10-1.295-2.242l-7.65 4.417c-.54-.4-1.2-.647-1.93-.647a3.256 3.256 0 00.01 6.51c.727 0 1.39-.245 1.93-.646l7.65 4.41c-.14 1.25.45 2.52 1.607 3.19a3.26 3.26 0 004.446-1.19 3.26 3.26 0 00-1.19-4.45z",
            }),
            2,
            { viewBox: "0 0 30 30" }
          );
        },
        D = "XJ FX FS",
        k = (0, r(50).k)("downloads/whatsapp/My account info.zip"),
        M = {
          unknown: ["intro", "waiting"],
          none: [
            "intro",
            "requestButton",
            "beforeDownloadReadyFooterPart1",
            "beforeDownloadReadyFooterPart2",
          ],
          pending: [
            "intro",
            "pending",
            "beforeDownloadReadyFooterPart1",
            "beforeDownloadReadyFooterPart2",
          ],
          available: ["intro", "downloadButton", "afterDownloadReadyFooter"],
          downloading: ["intro", "downloading", "afterDownloadReadyFooter"],
          downloaded: ["intro", "exportButton", "deleteButton"],
          error: ["intro"],
        },
        P = {
          request_failed: 343,
          delete_failed: 341,
          download_failed: 342,
          download_expired: 344,
        },
        U = (e) => {
          var t = e.selected,
            r = e.className,
            o = e.children;
          return (0, n.b)(2, m.b.div, {
            hasFocusPriority: t,
            className: (0, a.a)(r, "XG", t && "XH"),
            children: o,
          });
        },
        K = class extends g.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Xq = (e, t) => {
                switch (e) {
                  case "intro":
                    return this.Xf(t);
                  case "waiting":
                    return this.Xg(t);
                  case "requestButton":
                    return this.Xh(t);
                  case "pending":
                    return this.Xi(t);
                  case "downloadButton":
                    return this.Xj(t);
                  case "downloading":
                    return this.Xk(t);
                  case "exportButton":
                    return this.Xl(t);
                  case "deleteButton":
                    return this.Xm(t);
                  case "afterDownloadReadyFooter":
                    return this.Xn(t);
                  case "beforeDownloadReadyFooterPart1":
                    return this.Xo(t);
                  case "beforeDownloadReadyFooterPart2":
                    return this.Xp(t);
                  default:
                    return (0, s.a)(e);
                }
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return r !== e && r.gdprReport !== e.gdprReport;
          }
          componentDidMount() {
            q(this.props.backend), super.componentDidMount();
          }
          componentDidUpdate(e, t, r) {
            "error" !== e.gdprReport.status &&
              "error" === this.props.gdprReport.status &&
              (0, f.e)({
                title: 243,
                text: P[this.props.gdprReport.reason],
                onClose: () => {
                  q(this.props.backend);
                },
              }),
              super.componentDidUpdate(e, t, r);
          }
          addSoftKeys(e) {
            e.setLeftAsBack();
          }
          Xf(e) {
            return (0, n.b)(2, O, { selected: e });
          }
          Xg(e) {
            return (0, n.b)(2, b.k, {
              selected: e,
              children: (0, n.b)(2, y.a),
            });
          }
          Xh(e) {
            return (0, n.b)(2, z, { selected: e });
          }
          Xi(e) {
            return "pending" === this.props.gdprReport.status
              ? (0, n.b)(2, b.j, {
                  title: 338,
                  subtitle: [
                    (0, l.i)(
                      this.props.gdprReport.availabilityDate,
                      "fulldate"
                    ),
                    101,
                  ],
                  icon: (0, n.b)(2, X.a),
                  selected: e,
                  disabled: !0,
                  borderBottom: !0,
                })
              : null;
          }
          Xj(e) {
            if ("available" === this.props.gdprReport.status) {
              var t = this.props.gdprReport,
                r = t.creationDate,
                o = t.expirationDate,
                a = t.metadata,
                d = t.size;
              return (0, n.b)(2, E, {
                creationDate: r,
                expirationDate: o,
                metadata: a,
                size: d,
                selected: e,
              });
            }
            return null;
          }
          Xk(e) {
            return (0, n.b)(2, b.j, {
              title: 332,
              icon: (0, n.b)(2, X.a),
              selected: e,
              disabled: !0,
              borderBottom: !0,
            });
          }
          Xl(e) {
            return "downloaded" === this.props.gdprReport.status
              ? (0, n.b)(2, L, {
                  blob: this.props.gdprReport.blob,
                  creationDate: this.props.gdprReport.creationDate,
                  selected: e,
                })
              : null;
          }
          Xm(e) {
            return (0, n.b)(2, _, { selected: e });
          }
          Xn(e) {
            var t = this.props.gdprReport;
            if ("available" === t.status || "downloading" === t.status) {
              var r = (0, l.i)(t.expirationDate, "fulldate");
              return (0, n.b)(2, U, {
                selected: e,
                className: D,
                children: (0, n.b)(2, S.b, { l10n: [r, 104] }),
              });
            }
            return null;
          }
          Xo(e) {
            var t,
              r,
              o,
              a = this.props.gdprReport,
              d =
                "pending" === a.status
                  ? ((t = (0, i.D)()),
                    (r = a.availabilityDate),
                    (o = Math.round((r - t) / i.b)),
                    Math.max(Math.min(o, 3), 1))
                  : 3;
            return (0, n.b)(2, U, {
              selected: e,
              className: D,
              children: (0, n.b)(2, S.b, { l10n: [d, 103] }),
            });
          }
          Xp(e) {
            return (0, n.b)(2, U, {
              selected: e,
              className: D,
              children: (0, n.b)(2, S.b, { l10n: 347 }),
            });
          }
          render() {
            var e,
              t = ((e = this.props.gdprReport.status), M[e]);
            return (0, n.b)(2, C.a, {
              title: (0, n.b)(2, S.b, { l10n: 833 }),
              children: (0, n.b)(2, v.a, {
                className: "XF",
                items: t,
                keyOf: N,
                renderItem: this.Xq,
              }),
            });
          }
        };
      function N(e) {
        return e;
      }
      t.default = (0, p.c)((0, g.e)(K), (e, t) => ({
        gdprReport: e.gdprReport || { status: "unknown" },
        backend: t,
      }));
      var O = class extends g.b {
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return r !== e && r.selected !== e.selected;
          }
          addSoftKeys(e, t) {
            e.setCenterLabel(891, () => (0, c.E)(t, c.n));
          }
          render() {
            return (0, n.b)(2, U, {
              selected: this.props.selected,
              className: "XI FW FS",
              children: (0, n.b)(2, S.b, { l10n: 348 }),
            });
          }
        },
        z = class extends g.b {
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return r !== e && r.selected !== e.selected;
          }
          addSoftKeys(e, t) {
            e.setCenterLabel(930, t.requestGdprReport);
          }
          render() {
            return (0, n.b)(2, b.j, {
              title: 336,
              icon: (0, n.b)(2, B.a),
              selected: this.props.selected,
              borderBottom: !0,
            });
          }
        },
        E = class extends g.b {
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return (
              r !== e &&
              (r.creationDate !== e.creationDate ||
                r.expirationDate !== e.expirationDate ||
                r.metadata !== e.metadata ||
                r.selected !== e.selected ||
                r.size !== e.size)
            );
          }
          addSoftKeys(e) {
            e.setCenterLabel(930, (e) => {
              e.fireAndForget("backend", "downloadGdprReport", {
                reportCreationTime: this.props.creationDate,
                gdprReportMetadata: this.props.metadata,
              });
            });
          }
          render() {
            var e = this.props,
              t = e.selected,
              r = e.expirationDate,
              o = e.size,
              a = (0, n.c)(
                [
                  (0, n.f)(1, "span", null, (0, l.i)(r, "fulldateShort"), 0),
                  h.a,
                  (0, n.b)(2, w.a, { size: o }),
                ],
                0
              );
            return (0, n.b)(2, b.j, {
              title: 337,
              rawSubtitle: a,
              icon: (0, n.b)(2, F.a),
              selected: t,
              borderBottom: !0,
            });
          }
        },
        L = class extends g.b {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.exportReportToFile = (e) => {
                var t = this.props.blob;
                (0, f.f)({
                  title: 335,
                  text: 334,
                  onConfirm: () => {
                    this.saveReport(t, e);
                  },
                  onCancel: "CLOSE",
                });
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return (
              r !== e &&
              (r.blob !== e.blob ||
                r.creationDate !== e.creationDate ||
                r.selected !== e.selected)
            );
          }
          saveReport(e, t) {
            (0, u.o)(e, k)
              .then((e) =>
                (0, f.g)({
                  title: 346,
                  text: [e, 102],
                  center: 902,
                  onSoftCenter: "CLOSE",
                  onBack: "CLOSE",
                  right: 891,
                  onSoftRight: () => (0, c.E)(t, c.m),
                })
              )
              .catch(() => (0, f.e)({ title: 243, text: 345 }));
          }
          addSoftKeys(e, t) {
            e.setCenterLabel(930, () => {
              this.exportReportToFile(t);
            });
          }
          render() {
            var e = this.props,
              t = e.creationDate,
              r = e.selected;
            return (0, n.b)(2, b.j, {
              title: 333,
              rawSubtitle: (0, l.i)(t, "fulldate"),
              icon: (0, n.b)(2, R),
              selected: r,
              borderBottom: !0,
            });
          }
        },
        _ = class extends g.b {
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return r !== e && r.selected !== e.selected;
          }
          addSoftKeys(e, t) {
            e.setCenterLabel(930, () => {
              (0, f.f)({
                title: 340,
                text: 339,
                onConfirm: t.deleteGdprReport,
                onCancel: "CLOSE",
              });
            });
          }
          render() {
            var e = this.props.selected;
            return (0, n.b)(2, b.j, {
              title: 331,
              icon: (0, n.b)(2, x.a),
              selected: e,
              danger: "red",
              borderBottom: !0,
            });
          }
        };
      function q(e) {
        e.fireAndForget("backend", "getGdprReportStatus", {});
      }
    },
  },
]);
