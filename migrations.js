"use strict";
(self.webpackJsonp = self.webpackJsonp || []).push([
  [166],
  {
    458: function (e, r, t) {
      t.r(r),
        t.d(r, "initializeMigrations", function () {
          return c;
        });
      var n = t(309),
        i = t(138),
        a = t(109),
        s = t(14),
        u = t(6),
        o = t(5);
      function c(e, r) {
        var c = r.mode;
        return "deleting" === c || "error" === c
          ? Promise.resolve({ type: "up-to-date" })
          : (0, o.d)(s.i).then((r) =>
              r
                ? ((0, n.b)(),
                  t(109),
                  t(119),
                  t(70),
                  t(57),
                  t(97),
                  t(154),
                  t(127),
                  (0, i.b)(),
                  t(615).registerCustomMigrations(),
                  (0, n.a)().then(() => {
                    var r = (0, n.d)(e);
                    return null == r
                      ? u.e.set("2.2245.7").then(() => ({ type: "up-to-date" }))
                      : {
                          type: "migration-needed",
                          migration: () =>
                            r(new a.BaseContentTable()).then(() =>
                              u.e.set("2.2245.7")
                            ),
                        };
                  }))
                : { type: "up-to-date" }
            );
      }
    },
    615: function (e, r, t) {
      t.r(r),
        t.d(r, "registerCustomMigrations", function () {
          return x;
        });
      var n = t(309),
        i = t(11),
        a = t(6),
        s = t(109),
        u = t(42),
        o = t(8),
        c = t.n(o),
        l = t(152),
        v = t(25),
        d = t(5),
        p = t(314),
        _ = t(3),
        m = t(71),
        f = t(2),
        h = t(32),
        g = t(73),
        w = t(7),
        y = t(57),
        O = t(120),
        b = t(437);
      function x() {
        (0, n.e)(
          new (class {
            constructor() {
              (this.type = "simple"), (this.name = "refresh_chat_previews_v5");
            }
            run(e) {
              return a.t.isDefined()
                ? e.transact("rw", ["chats", "msgs"], () =>
                    e.stores.chats.toArray().then((r) => {
                      var t = r.filter(
                        (e) =>
                          e.previewMsg &&
                          (function e(r) {
                            if (!r) return !1;
                            for (var t = 0; t < r.length; ++t) {
                              var n = r[t];
                              if ("emoji" === n.type) return !0;
                              if (e(n.children)) return !0;
                            }
                            return !1;
                          })(e.previewMsg.formatting)
                      );
                      if (0 !== t.length) {
                        for (var n = [], a = 0; a < t.length; ++a) {
                          var o = t[a];
                          if (o.previewMsg) {
                            var c = (0, u.m)(o.previewMsg).id;
                            n.push(c);
                          }
                        }
                        return e.stores.msgs
                          .where("id")
                          .anyOf(n)
                          .toArray()
                          .then((r) => {
                            var n = (0, i.u)(r, (e) => e.id),
                              a = [];
                            return (
                              t.forEach((e) => {
                                if (e.previewMsg) {
                                  var r = e.previewMsg,
                                    t = (0, u.m)(r).id,
                                    i = n.get(t);
                                  i &&
                                    (0, s.maybeMutateChatMsgPreview)(e, i) &&
                                    a.push(e);
                                }
                              }),
                              a.length > 0
                                ? e.stores.chats.bulkPut(a).then(() => {})
                                : void 0
                            );
                          });
                      }
                    })
                  )
                : Promise.resolve();
            }
          })()
        ),
          (0, n.e)(
            new (class {
              constructor() {
                (this.type = "simple"),
                  (this.name = "group_sender_key_migration_v1"),
                  (this.isServiceWorkerFriendly = !0);
              }
              run(e) {
                return e.transact(
                  "rw",
                  ["meta", "groups", "groupParticipantsInfo"],
                  () =>
                    (0, d.c)([
                      (0, v.d)(e.stores.meta, v.a.REGISTERED),
                      e.stores.groups.toArray(),
                      e.stores.groupParticipantsInfo.toArray(),
                    ])
                      .then((r) => {
                        var t = c()(r, 3),
                          n = t[0],
                          i = t[1],
                          a = t[2];
                        if (n) {
                          var s = new Set();
                          a.forEach((e) => {
                            var r = e.jid;
                            return s.add(r);
                          });
                          var u = [];
                          i.forEach((e) => {
                            if (!s.has(e.jid)) {
                              var r = {
                                jid: e.jid,
                                superadmins: e.superadmins,
                                admins: e.admins,
                                participants: e.participants,
                                knowsSenderKey: e.knowsSenderKey,
                                keyIncrement: e.keyIncrement,
                                invitations: e.invitations,
                                rotateSenderKey: !1,
                                senderKeyTimestamp: _.c,
                              };
                              (e.isInTheGroup = (0, l.b)(r)),
                                (e.isAdmin = (0, l.a)(r)),
                                delete e.superadmins,
                                delete e.admins,
                                delete e.participants,
                                delete e.knowsSenderKey,
                                delete e.keyIncrement,
                                delete e.invitations,
                                u.push(e),
                                a.push(r);
                            }
                          });
                          var o = [];
                          return (
                            a.forEach((e) => {
                              var r = (0, p.a)(e, n.value);
                              e !== r && o.push(r);
                            }),
                            (0, d.c)([
                              e.stores.groups.bulkPut(u),
                              e.stores.groupParticipantsInfo.bulkPut(o),
                            ])
                          );
                        }
                      })
                      .then(() => {})
                );
              }
            })()
          ),
          (0, n.e)(
            new (class {
              constructor() {
                (this.type = "simple"),
                  (this.name = "contact_devices_key_index_migration_v2"),
                  (this.isServiceWorkerFriendly = !0);
              }
              run(e) {
                return e.transact("rw", ["contacts"], () =>
                  e.stores.contacts
                    .toArray()
                    .then((r) => {
                      var t = [];
                      return (
                        r.forEach((e) => {
                          if (e.devices && 0 !== e.devices.length) {
                            if (!Array.isArray(e.devices))
                              return (
                                __LOG__(
                                  3
                                )`Contact.devices is not an array (before migration)`,
                                void SEND_LOGS(
                                  "contact-devices-migration-not-array"
                                )
                              );
                            var r = e.devices,
                              n = !1,
                              a = !1,
                              s = r.map((e) =>
                                (0, i.l)(e)
                                  ? (e.id && (0, i.l)(e.id) && (n = !0), e)
                                  : ((a = !0), { id: e, index: m.b })
                              );
                            if (n) {
                              var u = Object.assign({}, e);
                              delete u.devices,
                                delete u.deviceVerification,
                                delete u.phash,
                                t.push(u);
                            } else
                              a && t.push(Object.assign({}, e, { devices: s }));
                          }
                        }),
                        e.stores.contacts.bulkPut(t)
                      );
                    })
                    .then(() => {})
                );
              }
            })()
          ),
          (0, n.e)(
            new (class {
              constructor() {
                (this.type = "simple"),
                  (this.name = "ephemeral_settings_migration_v1"),
                  (this.isServiceWorkerFriendly = !0);
              }
              run(e) {
                return e.transact("rw", ["contacts"], () =>
                  e.stores.contacts
                    .toArray()
                    .then((r) => {
                      var t = [];
                      return (
                        r.forEach((e) => {
                          var r = e.ephemeralExpiration,
                            n = e.ephemeralSettingTimestamp;
                          null != r &&
                            null != n &&
                            t.push(
                              Object.assign({}, e, {
                                ephemeral: { expiration: r, ts: n },
                                ephemeralExpiration: void 0,
                                ephemeralSettingTimestamp: void 0,
                              })
                            );
                        }),
                        e.stores.contacts.bulkPut(t)
                      );
                    })
                    .then(() => {})
                );
              }
            })()
          ),
          (0, n.e)(
            new (class {
              constructor() {
                (this.type = "simple"),
                  (this.name = "ephemeral_upgrade_v1"),
                  (this.isServiceWorkerFriendly = !0);
              }
              run(e) {
                return e
                  .transact("rw", ["meta"], () =>
                    (0, v.d)(e.stores.meta, v.a.EPHEMERAL_UPGRADE_TS).then(
                      (r) => {
                        if (null == r)
                          return e.stores.meta.put({
                            key: v.a.EPHEMERAL_UPGRADE_TS,
                            value: (0, _.D)(),
                          });
                        __LOG__(
                          2
                        )`EphemeraUpgrade already upgraded, cannot change date`;
                      }
                    )
                  )
                  .then(() => {});
              }
            })()
          ),
          (0, n.e)(
            new (class {
              constructor() {
                (this.type = "simple"), (this.name = "add_privacy_banner_v1");
              }
              run(e) {
                return e.transact("rw", ["chats", "msgs", "contacts"], () =>
                  (0, d.c)([
                    e.stores.chats.toArray(),
                    e.stores.contacts.toArray(),
                  ]).then((r) => {
                    var t = c()(r, 2),
                      n = t[0],
                      a = t[1],
                      s = (0, i.t)(a, (e) => e.jid);
                    return (0, d.c)(
                      n.map((r) => {
                        var t = r.id,
                          n = (0, h.o)(t),
                          i = e.stores.msgs.where("id").equals(n).first(),
                          a = (0, d.e)(),
                          u = r.oldest;
                        return (
                          u &&
                            (a = e.stores.msgs.where("id").equals(u).first()),
                          (0, d.c)([a, i]).then((i) => {
                            var a = c()(i, 2),
                              u = a[0],
                              o = a[1],
                              l = (0, w.q)(r.jid),
                              v = "e2ee";
                            if (l) {
                              var d = s[l];
                              if (
                                (d &&
                                  d.verifiedInfo &&
                                  d.verifiedInfo.isApi &&
                                  (v = "api"),
                                d && !(0, g.g)(d))
                              )
                                return (
                                  __LOG__(
                                    3
                                  )`AddPrivacyBannerMigration unexpected non-e2ee chat`,
                                  void SEND_LOGS("unexpected-non-e2ee")
                                );
                            }
                            if (!(o || (u && u.type === f.f.PRIVACY_CHANGE))) {
                              var p = {
                                id: n,
                                chat: t,
                                externalId: "/privacy/" + t,
                                ts: (null == u ? void 0 : u.ts) || (0, _.D)(),
                                author: f.c,
                                ack: f.a.RECEIVED,
                                type: f.f.PRIVACY_CHANGE,
                                subtype: v,
                                altIndex: "x-" + n,
                              };
                              return e.stores.msgs.add(p).then(() => {
                                var t = Object.assign({}, r, {
                                  msgCount: r.msgCount + 1,
                                });
                                return (
                                  null == t.newest && (t.newest = n),
                                  (t.oldest = n),
                                  e.stores.chats.put(t)
                                );
                              });
                            }
                          })
                        );
                      })
                    ).then(() => {});
                  })
                );
              }
            })()
          ),
          (0, n.e)(
            new (class {
              constructor() {
                (this.type = "simple"),
                  (this.name = "purge_old_sessions_v1"),
                  (this.isServiceWorkerFriendly = !0);
              }
              run() {
                var e = (0, y.getSignalTable)();
                return e.transact("rw", ["sessions", "identities"], () =>
                  (function r(t) {
                    return e.stores.sessions
                      .offset(t)
                      .limit(20)
                      .toArray()
                      .then((n) => {
                        if (!(n.length < 1)) {
                          var i = [],
                            a = 0;
                          return (
                            n.forEach((r) => {
                              var t = (0, b.a)(r.session);
                              t.wasChanged &&
                                i.push(
                                  e.stores.identities
                                    .get(r.address)
                                    .then((n) => {
                                      if (null != n)
                                        return null != t.identity &&
                                          (0, O.a)(
                                            n.identity.buffer,
                                            t.identity
                                          )
                                          ? e.stores.sessions.put(
                                              Object.assign({}, r, {
                                                session: t.session,
                                              })
                                            )
                                          : (a++,
                                            e.stores.sessions.delete(
                                              r.address
                                            ));
                                    })
                                );
                            }),
                            (0, d.c)(i).then(() => r(t + n.length - a))
                          );
                        }
                      });
                  })(0)
                );
              }
            })()
          ),
          (0, n.e)(
            new (class {
              constructor() {
                (this.type = "simple"),
                  (this.name = "communities_refactor_v1"),
                  (this.isServiceWorkerFriendly = !0);
              }
              run(e) {
                return e
                  .transact("rw", ["groups"], () =>
                    e.stores.groups.toArray().then((r) => {
                      var t = [];
                      r.forEach((r) => {
                        var n = r.communityInfo;
                        if (null != n)
                          if ("parent" === n)
                            delete r.communityInfo,
                              (r.groupType = "parent"),
                              t.push(r);
                          else {
                            if ("parent" === r.groupType) return;
                            var i = Object.assign({}, r);
                            (i.linkedParent = n.linkedParent),
                              n.default && (i.isCAG = !0),
                              delete i.communityInfo,
                              delete i.groupType,
                              t.push(i);
                          }
                        else
                          "parent" !== r.groupType &&
                            null != r.groupType &&
                            (delete r.groupType, t.push(r));
                        return (
                          __LOG__(2)`Migrating ${t.length} groups`,
                          e.stores.groups.bulkPut(t)
                        );
                      });
                    })
                  )
                  .then(() => {});
              }
            })()
          );
      }
    },
  },
]);
