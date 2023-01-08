"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [50],
  {
    723: function (t, e, r) {
      r.r(e),
        r.d(e, "DeleteAccount", function () {
          return A;
        }),
        r.d(e, "DeleteAccountCountrySelector", function () {
          return u;
        });
      var s = r(1),
        n = r(13),
        i = r(520),
        c = r(515),
        o = r(583),
        u = class extends n.a {
          constructor() {
            var t;
            return (
              (t = super(...arguments)),
              (this.MJ = (t, e) => {
                t.updateScreen(this.props.fromScreenId, {
                  type: "DELETE_ACCOUNT",
                  props: { country: e },
                }),
                  (0, c.a)(t);
              }),
              t
            );
          }
          shouldComponentUpdate(t, e) {
            var r = this.props;
            return (
              r !== t &&
              (r.defaultCountry !== t.defaultCountry ||
                r.fromScreenId !== t.fromScreenId)
            );
          }
          render() {
            var t = (0, i.b)();
            return (0, s.b)(2, o.a, {
              countries: t,
              onBack: c.a,
              onCancel: c.a,
              onSelect: this.MJ,
            });
          }
        },
        h = r(23),
        a = r.n(h),
        l = r(59),
        d = r(37),
        p = r.n(d),
        m = r(7),
        y = r(64),
        f = r(19),
        C = r(579),
        v = r(153),
        N = r(380),
        E = r(18),
        K = r(290),
        I = r(245),
        O = r(61),
        S = r(557),
        _ = r(381),
        b = "KF",
        T = ["description", "countrySelector", "numberInput"],
        D = class extends O.a {
          constructor(t, e) {
            super(t, e),
              (this.MK = n.e()),
              (this.ML = () => {
                var t = this.props.country;
                if (t && t.iso) {
                  var e,
                    r = (0, y.g)(this.props.user);
                  r && (e = (0, m.u)(this.props.user).substr(r.length)),
                    r && r === t.cc && e === this.state.phoneNumber
                      ? (0, f.f)({
                          title: 226,
                          text: 225,
                          confirm: 872,
                          onConfirm: () => {
                            this.props.backend.deleteAccount();
                          },
                        })
                      : this.MM(229);
                } else this.MM(487);
              }),
              (this.MM = (t) => {
                (0, f.e)({ title: 243, text: t });
              }),
              (this.MN = (t) => {
                var e = (0, y.a)(t.trim()),
                  r = this.props.country;
                if (r && e.startsWith(r.cc)) {
                  var s = e.slice(r.cc.length);
                  (0, y.f)(r.cc, s) &&
                    (__LOG__(2)`EnteringPhoneNumber dropping the country code`,
                    (e = s));
                }
                this.setState({ phoneNumber: e });
              }),
              (this.MO = (t, e) => {
                switch (t) {
                  case "description":
                    return (0, s.b)(2, v.b.div, {
                      hasFocusPriority: e,
                      className: (0, a.a)("KA", e && "KG"),
                      children: (0, s.b)(2, E.b, { l10n: 227 }),
                    });
                  case "countrySelector":
                    return (0, s.b)(2, F, {
                      selected: e,
                      country: this.props.country,
                      onlyOneCountry: this.props.onlyOneCountry,
                      screenId: this.props.screenId,
                    });
                  case "numberInput":
                    return (0, s.f)(
                      1,
                      "div",
                      (0, a.a)("KD", e && b),
                      (0, s.b)(2, N.a, {
                        type: "tel",
                        hasFocusPriority: e,
                        placeholder: 228,
                        onChange: this.MN,
                      }),
                      2
                    );
                  default:
                    return (0, p.a)(t);
                }
              }),
              (this.state = { phoneNumber: "", start: "description" });
          }
          componentDidUpdate(t, e, r) {
            null != this.props.country &&
              null != this.MK.current &&
              this.MK.current.goTo("numberInput"),
              super.componentDidUpdate(t, e, r);
          }
          addSoftKeys(t, e) {
            var r = this.state.phoneNumber;
            t.addCancel(),
              null != this.props.country &&
                "" !== r &&
                t.setRightLabel(872, this.ML);
          }
          render() {
            return (0, s.b)(2, K.a, {
              title: (0, s.b)(2, E.b, { l10n: 232 }),
              children: (0, s.b)(
                2,
                I.a,
                {
                  className: "Jz",
                  items: T,
                  keyOf: x,
                  renderItem: this.MO,
                  start: { item: this.state.start, scrollFromTop: "end" },
                },
                null,
                this.MK
              ),
            });
          }
        };
      function x(t) {
        return t;
      }
      var A = (0, l.f)(
          (0, O.e)(D),
          (t, e) => ({
            screenId: e.screenId,
            country: e.country,
            user: t.user.jid,
          }),
          (t, e) => {
            var r = (0, i.b)(),
              s = 1 === r.length;
            return {
              screenId: t.screenId,
              user: t.user,
              country: s ? r[0] : t.country,
              onlyOneCountry: s,
              backend: e,
            };
          }
        ),
        F = class extends O.b {
          addSoftKeys(t, e) {
            this.props.onlyOneCountry ||
              t.setCenterLabel(930, () => {
                e.openScreen("DELETE_ACCOUNT_COUNTRY_SELECTOR", {
                  defaultCountry: this.props.country,
                  fromScreenId: this.props.screenId,
                });
              });
          }
          renderCountryName(t) {
            var e = this.props.country;
            return e && e.cc
              ? (0, s.f)(
                  1,
                  "span",
                  null,
                  [
                    (0, s.b)(2, C.a, { className: "KE", cc: e.cc }),
                    " ",
                    (0, s.b)(2, S.a, { iso: e.iso, className: t ? b : "" }),
                  ],
                  0
                )
              : (0, s.b)(2, E.b, { l10n: 135, className: t ? b : "" });
          }
          render() {
            var t = this.props,
              e = t.onlyOneCountry,
              r = t.selected;
            return e
              ? (0, s.f)(
                  1,
                  "div",
                  (0, a.a)("KB", r && b),
                  this.renderCountryName(r),
                  0
                )
              : (0, s.b)(2, v.b.div, {
                  hasFocusPriority: r,
                  className: (0, a.a)("KB", r && b),
                  children: [
                    this.renderCountryName(r),
                    (0, s.b)(2, _.a, { className: "KC" }),
                  ],
                });
          }
        };
    },
  },
]);
