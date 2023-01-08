"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [177],
  {
    540: function (r, e, n) {
      n.d(e, "a", function () {
        return t;
      });
      var i = n(28),
        u = n(29);
      function t(r) {
        var e = (0, u.a)(r, "error");
        if (!e.success) return e;
        var n = (0, u.l)(u.e, r, "text", "not-allowed");
        if (!n.success) return n;
        var t = (0, u.l)(u.e, r, "code", "405");
        return t.success ? (0, i.c)({ text: n.value, code: t.value }) : t;
      }
    },
    716: function (r, e, n) {
      n.r(e),
        n.d(e, "default", function () {
          return P;
        });
      var i = n(72),
        u = n(26),
        t = n.n(u),
        a = n(30),
        o = n(28),
        p = n(558),
        v = n(560),
        l = n(540),
        s = n(29),
        f = n(562),
        c = n(564),
        d = n(526);
      function G(r, e) {
        var n = (0, s.a)(r, "iq");
        if (!n.success) return n;
        var i = (0, d.a)(r, e);
        if (!i.success) return i;
        var u = (function (r) {
          var e = (0, v.a)(r);
          if (e.success)
            return (0, o.c)({ name: "GroupDoesNotExist", value: e.value });
          var n = (0, c.a)(r);
          if (n.success)
            return (0, o.c)({ name: "UserIsNotAParticipant", value: n.value });
          var i = (0, f.a)(r);
          if (i.success)
            return (0, o.c)({ name: "InvalidParticipantJID", value: i.value });
          var u = (function (r) {
            var e = (0, s.a)(r, "iq");
            if (!e.success) return e;
            var n = (0, s.k)(r, "error");
            if (!n.success) return n;
            var i = (0, l.a)(n.value);
            return i.success, i;
          })(r);
          if (u.success)
            return (0, o.c)({ name: "InvalidGroupLink", value: u.value });
          var t = (0, p.a)(r);
          return t.success
            ? (0, o.c)({ name: "FallbackClient", value: t.value })
            : (0, s.j)(
                r,
                [
                  "GroupDoesNotExist",
                  "UserIsNotAParticipant",
                  "InvalidParticipantJID",
                  "InvalidGroupLink",
                  "FallbackClient",
                ],
                [e, n, i, u, t]
              );
        })(r);
        return u.success
          ? (0, o.c)(
              Object.assign({}, i.value, {
                getLinkedGroupClientErrors: u.value,
              })
            )
          : u;
      }
      var m = n(544);
      function k(r, e) {
        var n = (0, s.a)(r, "iq");
        if (!n.success) return n;
        var i = (0, m.a)(r, e);
        return i.success, i;
      }
      var b = n(527),
        q = n(567),
        g = n(568),
        h = n(578),
        I = n(586),
        L = n(374);
      function _(r) {
        var e = (0, s.a)(r, "participant");
        if (!e.success) return e;
        var n = (0, h.a)(r);
        return n.success, n;
      }
      function y(r) {
        var e = (0, s.a)(r, "membership_approval_mode");
        if (!e.success) return e;
        var n = (0, I.a)(r);
        return n.success, n;
      }
      function x(r, e) {
        var n = (0, s.a)(r, "iq");
        if (!n.success) return n;
        var i = (0, s.k)(r, "linked_group");
        if (!i.success) return i;
        var u = (function (r) {
          var e = (0, s.a)(r, "linked_group");
          if (!e.success) return e;
          var n = (0, s.k)(r, "group");
          if (!n.success) return n;
          var i = (0, s.k)(n.value, "description");
          if (!i.success) return i;
          var u = (0, s.q)(n.value, "membership_approval_mode", y);
          if (!u.success) return u;
          var t = (0, s.p)(n.value, "membership_approval_request");
          if (!t.success) return t;
          var a = (0, s.p)(n.value, "admin_request_required");
          if (!a.success) return a;
          var p = (0, L.a)(r, "jid");
          if (!p.success) return p;
          var v = (0, s.c)(n.value, "size", 1, 19999);
          if (!v.success) return v;
          var l = (0, g.a)(i.value),
            f = (0, q.a)(n.value);
          if (!f.success) return f;
          var c = (0, s.n)(n.value, "participant", 0, 19999, _);
          return c.success
            ? (0, o.c)({
                jid: p.value,
                groupSize: v.value,
                groupDescriptionGroupInfoDescriptionMixin: l.success
                  ? l.value
                  : null,
                groupGroupInfoAttributesMixin: f.value,
                groupMembershipApprovalMode: u.value,
                hasGroupMembershipApprovalRequest: null != t.value,
                hasGroupAdminRequestRequired: null != a.value,
                groupParticipant: c.value,
              })
            : c;
        })(i.value);
        if (!u.success) return u;
        var t = (0, b.a)(r, e);
        return t.success
          ? (0, o.c)(
              Object.assign(
                { linkedGroupLinkedGroupInfoMixin: u.value },
                t.value
              )
            )
          : t;
      }
      var E = n(193),
        S = n(584),
        w = n(294),
        A = n(566),
        R = n(4);
      function M(r) {
        return (function (r, e) {
          var n = (function (r) {
            var e = r.queryLinkedType,
              n = r.queryLinkedJid,
              i = r.optionalSubGroupMixinArgs;
            return (0, E.a)(
              "smax$any",
              null,
              (0, A.a)(
                (0, E.a)("query_linked", {
                  type: (0, R.b)(e),
                  jid: (0, R.d)(n),
                }),
                i
              )
            );
          })(e);
          return (0, w.a)(r, n);
        })((0, S.a)((0, E.a)("iq", null), r), r);
      }
      var j = n(375),
        C = n(376);
      function D() {
        return (D = t()(function* (r, e) {
          var n = M(r),
            i = yield (0, a.k)(n, e),
            u = x(i, n);
          if (u.success)
            return { name: "GetLinkedGroupResponseSuccess", value: u.value };
          var t = G(i, n);
          if (t.success)
            return {
              name: "GetLinkedGroupResponseClientError",
              value: t.value,
            };
          var o = k(i, n);
          if (o.success)
            return {
              name: "GetLinkedGroupResponseServerError",
              value: o.value,
            };
          throw new j.a(
            (0, C.a)("GetLinkedGroup", {
              Success: u,
              ClientError: t,
              ServerError: o,
            })
          );
        })).apply(this, arguments);
      }
      var J = n(9);
      function P(r, e) {
        return (function (r, e) {
          return D.apply(this, arguments);
        })({
          iqTo: r,
          queryLinkedType: "sub_group",
          queryLinkedJid: e,
          optionalSubGroupMixinArgs: { anySubGroupJid: null },
        }).then((r) => {
          switch (r.name) {
            case "GetLinkedGroupResponseSuccess":
              var e = r.value.linkedGroupLinkedGroupInfoMixin,
                n = e.groupDescriptionGroupInfoDescriptionMixin,
                u = e.jid,
                t = e.groupSize,
                a = e.groupGroupInfoAttributesMixin.u,
                o = e.groupParticipant;
              if (null == a.value.subject)
                throw new Error(
                  "querySubGroupInfo error: community subgroup with no subject"
                );
              var p = {
                description: null == n ? void 0 : n.bodyElementValue,
                group: u,
                size: t,
                title: a.value.subject,
                creatorJid: null,
                participantJids: [],
                groupType: void 0,
              };
              return (
                o.map((r) => {
                  var e,
                    n = r.groupInfoParticipantMixins;
                  "GroupInfoParticipantAdmin" === n.name
                    ? (e = n.value.p.value.jid)
                    : (n.value, (e = n.value.i.value.jid)),
                    p.participantJids.push((0, J.Q)(e));
                }),
                { result: p }
              );
            case "GetLinkedGroupResponseClientError":
              var v = r.value.getLinkedGroupClientErrors;
              return (0, i.d)(v.name);
            default:
              return r.name, r.value.errorServerErrors, (0, i.d)("unknown");
          }
        });
      }
    },
  },
]);
