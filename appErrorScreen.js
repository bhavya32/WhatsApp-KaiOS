"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [36],
  {
    159: function (e, t, r) {
      r.d(t, "a", function () {
        return i;
      });
      var n = r(5),
        s = (0, r(138).a)("wa-syncd-1", function (e) {
          e.version(1).stores({
            pendingMutations: "++id, index, collection, action",
            encryptedMutations: "++id",
            collectionVersion: "collection",
            syncKeys: "keyId",
            syncActions: "index, actionState, indexMac, collection, action",
          });
        }),
        c = class extends n.b {
          constructor() {
            super(s);
          }
        },
        o = null;
      function i() {
        return o || (o = new c()), o;
      }
    },
    722: function (e, t, r) {
      r.r(t);
      var n = r(1),
        s = (r(13), r(18)),
        c = r(290),
        o = r(245),
        i = r(125),
        d = r(61);
      function a() {
        navigator && navigator.mozPower && navigator.mozPower.reboot();
      }
      var l = r(132),
        u = r(3),
        p = r(14),
        f = r(59),
        h = r(135),
        v = r(5),
        y = r(94);
      r(159);
      var x = r(418),
        S = r(306),
        m = {
          corrupted: ["restart"],
          corruptedAfterRestart: ["restart", "recreate"],
        },
        A = {
          corrupted: 215,
          corruptedAfterRestart: 215,
          clockSkew: 142,
          expiredApp: 315,
          unsupportedOS: 1072,
        },
        K = class extends d.b {
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return r !== e && r.selected !== e.selected;
          }
          addSoftKeys(e) {
            e.setCenterLabel(902, () => {
              (0, x.b)(p.P, (0, u.D)()).then(a);
            });
          }
          render() {
            return (0, n.b)(2, i.k, {
              selected: this.props.selected,
              children: (0, n.b)(2, s.b, { l10n: 217 }),
            });
          }
        },
        g = class extends d.b {
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return r !== e && r.selected !== e.selected;
          }
          addSoftKeys(e) {
            e.setCenterLabel(918, () => {
              (0, v.i)(
                (0, v.c)([
                  h.a.delete(p.i),
                  h.a.delete(p.g),
                  h.a.delete(p.s),
                  h.a.delete(p.q),
                  h.a.delete(p.Q),
                  h.a.delete(p.d),
                  h.a.delete(p.u),
                  null,
                  (0, y.f)(),
                ]).then(() => {})
              ).then(() => {
                self.location.reload(!0);
              });
            });
          }
          render() {
            return (0, n.b)(2, i.k, {
              selected: this.props.selected,
              children: (0, n.b)(2, s.b, { l10n: 216 }),
            });
          }
        },
        k = class extends d.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.Fz = (e, t) =>
                "restart" === e
                  ? (0, n.b)(2, K, { selected: t })
                  : (0, n.b)(2, g, { selected: t })),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var r = this.props;
            return r !== e && r.errorType !== e.errorType;
          }
          addSoftKeys(e) {
            "expiredApp" === this.props.errorType && e.setRightLabel(941, S.b),
              e.setLeftLabel(880, l.closeApp),
              e.setBack(l.closeApp);
          }
          render() {
            var e,
              t = m[this.props.errorType],
              r = (0, n.b)(2, s.b, { l10n: A[this.props.errorType] });
            return (
              (e =
                null != t
                  ? (0, n.c)(
                      [
                        (0, n.f)(1, "div", "BK FW FS", r, 0),
                        (0, n.b)(2, o.a, {
                          items: t,
                          className: "BJ",
                          keyOf: F,
                          renderItem: this.Fz,
                        }),
                      ],
                      4
                    )
                  : (0, n.f)(1, "div", "BL FV FS", r, 0)),
              (0, n.b)(2, c.a, {
                title: (0, n.b)(2, s.b, { l10n: 25 }),
                children: e,
              })
            );
          }
        };
      function F(e) {
        return e;
      }
      t.default = (0, f.d)((0, d.e)(k), (e, t, r) => ({
        errorType: e.errorType,
      }));
    },
  },
]);
