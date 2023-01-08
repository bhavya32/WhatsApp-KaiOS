"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [175],
  {
    528: function (r, u, e) {
      e.d(u, "a", function () {
        return a;
      });
      var n = e(28),
        t = e(29);
      function a(r) {
        var u = (0, t.e)(r, "subject");
        return u.success ? (0, n.c)({ subject: u.value }) : u;
      }
    },
    717: function (r, u, e) {
      e.r(u),
        e.d(u, "default", function () {
          return _;
        });
      var n = e(26),
        t = e.n(n),
        a = e(30),
        i = e(28),
        o = e(558),
        s = e(560),
        v = e(562),
        l = e(564),
        f = e(29),
        c = e(526);
      function p(r, u) {
        var e = (0, f.a)(r, "iq");
        if (!e.success) return e;
        var n = (0, c.a)(r, u);
        if (!n.success) return n;
        var t = (function (r) {
          var u = (0, s.a)(r);
          if (u.success)
            return (0, i.c)({ name: "GroupDoesNotExist", value: u.value });
          var e = (0, l.a)(r);
          if (e.success)
            return (0, i.c)({ name: "UserIsNotAParticipant", value: e.value });
          var n = (0, v.a)(r);
          if (n.success)
            return (0, i.c)({ name: "InvalidParticipantJID", value: n.value });
          var t = (0, o.a)(r);
          return t.success
            ? (0, i.c)({ name: "FallbackClient", value: t.value })
            : (0, f.j)(
                r,
                [
                  "GroupDoesNotExist",
                  "UserIsNotAParticipant",
                  "InvalidParticipantJID",
                  "FallbackClient",
                ],
                [u, e, n, t]
              );
        })(r);
        return t.success
          ? (0, i.c)(
              Object.assign({}, n.value, { getSubGroupsClientErrors: t.value })
            )
          : t;
      }
      var b = e(544);
      function G(r, u) {
        var e = (0, f.a)(r, "iq");
        if (!e.success) return e;
        var n = (0, b.a)(r, u);
        return n.success, n;
      }
      var S = e(527),
        d = e(528);
      function g(r) {
        var u = (0, f.a)(r, "group");
        if (!u.success) return u;
        var e = (function (r) {
          var u = (0, f.a)(r, "group");
          if (!u.success) return u;
          var e = (0, f.p)(r, "default_sub_group");
          if (!e.success) return e;
          var n = (0, f.e)(r, "id");
          if (!n.success) return n;
          var t = (0, f.c)(r, "s_t", 0, void 0);
          if (!t.success) return t;
          var a = (0, d.a)(r);
          return a.success
            ? (0, i.c)(
                Object.assign({ id: n.value, sT: t.value }, a.value, {
                  hasDefaultSubGroup: null != e.value,
                })
              )
            : a;
        })(r);
        return e.success, e;
      }
      function E(r, u) {
        var e = (0, f.a)(r, "iq");
        if (!e.success) return e;
        var n = (0, f.k)(r, "sub_groups");
        if (!n.success) return n;
        var t = (0, S.a)(r, u);
        if (!t.success) return t;
        var a = (0, f.n)(n.value, "group", 0, 1e3, g);
        return a.success
          ? (0, i.c)(Object.assign({}, t.value, { subGroupsGroup: a.value }))
          : a;
      }
      var m = e(193),
        C = e(584),
        D = e(566);
      function I(r) {
        var u = r.optionalSubGroupMixinArgs;
        return (0, C.a)(
          (0, m.a)("iq", null, (0, D.a)((0, m.a)("sub_groups", null), u)),
          r
        );
      }
      var h = e(375),
        j = e(376);
      function q() {
        return (q = t()(function* (r, u) {
          var e = I(r),
            n = yield (0, a.k)(e, u),
            t = E(n, e);
          if (t.success)
            return { name: "GetSubGroupsResponseSuccess", value: t.value };
          var i = p(n, e);
          if (i.success)
            return { name: "GetSubGroupsResponseClientError", value: i.value };
          var o = G(n, e);
          if (o.success)
            return { name: "GetSubGroupsResponseServerError", value: o.value };
          throw new h.a(
            (0, j.a)("GetSubGroups", {
              Success: t,
              ClientError: i,
              ServerError: o,
            })
          );
        })).apply(this, arguments);
      }
      var R = e(3);
      function _(r) {
        return (function (r, u) {
          return q.apply(this, arguments);
        })({
          iqTo: r,
          optionalSubGroupMixinArgs: { anySubGroupJid: null },
        }).then((r) => {
          switch (r.name) {
            case "GetSubGroupsResponseSuccess":
              return r.value.subGroupsGroup.map((r) => {
                var u = r.id,
                  e = r.subject,
                  n = r.sT,
                  t = r.hasDefaultSubGroup;
                return { id: u, title: e, titleTs: (0, R.i)(n), isDefault: t };
              });
            case "GetSubGroupsResponseClientError":
              return r.value.getSubGroupsClientErrors, null;
            default:
              return r.name, r.value.errorServerErrors, null;
          }
        });
      }
    },
  },
]);
