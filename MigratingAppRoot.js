"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [35],
  {
    509: function (e, t, n) {
      n.r(t),
        n.d(t, "claimHtml", function () {
          return w;
        });
      var r = n(1),
        i = n(13),
        s = n(61),
        a = n(153),
        o = n(147),
        l = n(59),
        c = n(435),
        d = n(265),
        u = n(183),
        h = n(18),
        m = n(260),
        f = n(428),
        p =
          (n(363),
          class extends s.a {
            addSoftKeys(e) {
              var t = this.props,
                n = t.failed,
                r = t.onEscapeAttempt;
              n
                ? (e.setCenterLabel(920, x),
                  e.setLeftLabel(880, E),
                  e.setBack(E),
                  e.setOnEndCall(E))
                : (e.setFull(939), e.setBack(r), e.setOnEndCall(r));
            }
            render() {
              return (0, r.f)(
                1,
                "div",
                "O",
                [
                  (0, r.f)(1, "img", null, null, 1, {
                    src: "/icons/whatsapp_84.png",
                  }),
                  this.props.failed
                    ? (0, r.b)(2, h.b, { l10n: 572 })
                    : (0, r.c)(
                        [
                          (0, r.b)(2, h.b, { l10n: 574, className: "Q" }),
                          (0, r.b)(2, u.a, { className: "R" }),
                        ],
                        4
                      ),
                ],
                0
              );
            }
          }),
        g = (0, s.e)(p),
        _ = class extends i.a {
          constructor() {
            var e;
            return (
              (e = super(...arguments)),
              (this.state = { showExitWarning: !1 }),
              (this.L = () => {
                this.setState({ showExitWarning: !0 });
              }),
              (this.M = () => {
                this.setState({ showExitWarning: !1 });
              }),
              e
            );
          }
          shouldComponentUpdate(e, t) {
            var n = this.props,
              r = this.state;
            return (
              (n !== e && n.failed !== e.failed) ||
              (r !== t && r.showExitWarning !== t.showExitWarning)
            );
          }
          render() {
            var e = this.props.failed,
              t =
                !e && this.state.showExitWarning
                  ? (0, r.b)(2, c.b, {
                      content: (0, r.b)(2, m.a, {
                        text: 573,
                        center: 902,
                        onSoftCenter: () => {},
                        onBack: () => {},
                        onEndCall: () => {},
                        close: this.M,
                      }),
                    })
                  : null;
            return (0, r.b)(2, a.b.div, {
              hasFocusPriority: !0,
              className: "P",
              children: (0, r.b)(2, d.a, {
                children: [
                  (0, r.b)(2, g, { failed: e, onEscapeAttempt: this.L }),
                  t,
                ],
              }),
            });
          }
        },
        v = !1;
      function w(e) {
        return (
          __LOG__(2)`MigratingApp:claimHtml`,
          new Promise((t) => {
            var n = new Promise((e) => {
                requestAnimationFrame(e), (0, f.a)();
              })
                .then(() => e())
                .then(x)
                .catch((e) => {
                  __LOG__(4)`Error while migrating db ${e}`,
                    SEND_LOGS("migration-failed"),
                    (v = !0),
                    t({ mode: "error", reason: "corrupted" });
                }),
              s = document.createElement("div");
            (s.id = "migration-root"),
              document.body.insertBefore(s, document.body.firstChild),
              i.g(
                (0, r.b)(2, l.a, {
                  backend: { getStoreState: () => null },
                  store: { subscribe: () => {} },
                  children: (0, r.b)(2, a.a, {
                    children: (0, r.b)(2, o.a, {
                      promise: n,
                      fallback: () => (0, r.b)(2, _, { failed: !1 }),
                      render: () => (0, r.b)(2, _, { failed: v }),
                      props: null,
                    }),
                  }),
                }),
                s
              );
          })
        );
      }
      function E() {
        self.open("", "_parent", ""), self.close();
      }
      function x() {
        self.location.reload(!0);
      }
    },
  },
]);
