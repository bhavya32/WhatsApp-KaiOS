"use strict";
class Script {
  constructor() {
    this.modulePath = "";
  }
  set charset(e) {}
  set timeout(e) {}
  set src(e) {
    this.modulePath = e;
  }
  set onerror(e) {
    this.onerrorCb = e;
  }
  set onload(e) {
    this.onloadCb = e;
  }
  setAttribute() {}
  load() {
    let e = !0;
    try {
      importScripts(this.modulePath);
    } catch (t) {
      (e = !1),
        this.onerrorCb &&
          this.onerrorCb({ type: "error", target: { src: this.modulePath } });
    }
    e &&
      this.onloadCb &&
      this.onloadCb({ type: "load", target: { src: this.modulePath } });
  }
}
var fakeHead = {
    appendChild(e) {
      e.load();
    },
  },
  document = {
    getElementsByTagName: (e) => ("head" === e ? [fakeHead] : []),
    createElement: (e) => ("script" === e ? new Script() : {}),
    head: fakeHead,
  };
(self.document = document),
  (function (e) {
    function t(t) {
      for (
        var o, a, i = t[0], d = t[1], l = t[2], c = 0, p = [];
        c < i.length;
        c++
      )
        (a = i[c]),
          Object.prototype.hasOwnProperty.call(n, a) && n[a] && p.push(n[a][0]),
          (n[a] = 0);
      for (o in d) Object.prototype.hasOwnProperty.call(d, o) && (e[o] = d[o]);
      for (u && u(t); p.length; ) p.shift()();
      return s.push.apply(s, l || []), r();
    }
    function r() {
      for (var e, t = 0; t < s.length; t++) {
        for (var r = s[t], o = !0, i = 1; i < r.length; i++) {
          var d = r[i];
          0 !== n[d] && (o = !1);
        }
        o && (s.splice(t--, 1), (e = a((a.s = r[0]))));
      }
      return e;
    }
    var o = {},
      n = { 37: 0 },
      s = [];
    function a(t) {
      if (o[t]) return o[t].exports;
      var r = (o[t] = { i: t, l: !1, exports: {} });
      return e[t].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
    }
    (a.e = function (e) {
      var t = [],
        r = n[e];
      if (0 !== r)
        if (r) t.push(r[2]);
        else {
          var o = new Promise(function (t, o) {
            r = n[e] = [t, o];
          });
          t.push((r[2] = o));
          var s,
            i = document.createElement("script");
          (i.charset = "utf-8"),
            (i.timeout = 120),
            a.nc && i.setAttribute("nonce", a.nc),
            (i.src = (function (e) {
              return (
                a.p +
                "" +
                ({
                  0: "handlers/msgReceipt~handlers/retryRequest~jobs/resendWrittenRevokeMsg~jobs/retryMsg~jobs/reuploadMed~2398b594",
                  1: "handlers/msgReceipt~jobs/resendWrittenRevokeMsg~jobs/retryMsg~jobs/reuploadMedia~jobs/revokeMsg~jobs~5bb0ce38",
                  2: "handlers/aboutNotification~handlers/businessNotification~handlers/contactsNotification~handlers/hand~78c34780",
                  3: "jobs/setStatusSettings",
                  5: "handlers/mediaRetry~handlers/msgReceipt~jobs/requestReupload~jobs/reuploadMedia",
                  6: "jobs/revokeMsg~jobs/sendWrittenMsg~jobs/senderBackfill~jobs/setOneToOneEphemeralSetting",
                  11: "handlers/msgReceipt~handlers/retryRequest~jobs/reuploadMedia",
                  14: "jobs/joinSubGroupRequest~queryCommunitiesSubGroups~querySubGroupInfo",
                  15: "jobs/revokeMsg~jobs/sendWrittenMsg~jobs/senderBackfill",
                  21: "handlers/groupNotification~querySubGroupInfo",
                  22: "handlers/handleAccountSyncNotification~handlers/msgReceipt",
                  23: "handlers/infoBulletin",
                  24: "jobs/reportGroupSpam~jobs/reportUserSpam",
                  25: "jobs/revokeGroupInvitations",
                  26: "jobs/revokeQRCode~queryQRCode",
                  27: "jobs/sendMediaMsg~jobs/sendMediaMsgs",
                  28: "jobs/sendProfilePicture",
                  29: "jobs/uploadMedia",
                  33: "queryCommunitiesSubGroups~querySubGroupInfo",
                  39: "countries/bn",
                  40: "countries/en",
                  41: "countries/gu",
                  42: "countries/hi",
                  43: "countries/kn",
                  44: "countries/ml",
                  45: "countries/mr",
                  46: "countries/pa",
                  47: "countries/ta",
                  48: "countries/te",
                  49: "countries/ur",
                  52: "gzip",
                  53: "handlers/aboutNotification",
                  54: "handlers/businessNotification",
                  55: "handlers/call",
                  56: "handlers/chatState",
                  57: "handlers/contactsNotification",
                  58: "handlers/error",
                  59: "handlers/gdprNotification",
                  60: "handlers/groupNotification",
                  61: "handlers/handleAccountSyncNotification",
                  62: "handlers/handleDevicesNotification",
                  63: "handlers/handleDigestNotification",
                  64: "handlers/handleDisappearingModeNotification",
                  65: "handlers/handlePSANotification",
                  66: "handlers/handlePrivacyTokenNotification",
                  67: "handlers/mediaRetry",
                  68: "handlers/msgReceipt",
                  69: "handlers/presence",
                  70: "handlers/profilePicNotification",
                  71: "handlers/retryRequest",
                  72: "handlers/serverNotification",
                  73: "handlers/streamError",
                  75: "intl",
                  76: "jobs/acceptGroupAddRequest",
                  77: "jobs/addGroupParticipants",
                  78: "jobs/blockUser",
                  79: "jobs/clearAllCallLogs",
                  80: "jobs/convertFutureproofMessage",
                  81: "jobs/createGroup",
                  82: "jobs/createMissedCallLog",
                  83: "jobs/deleteCallLogs",
                  84: "jobs/deleteChat",
                  85: "jobs/deleteChatMsgs",
                  86: "jobs/deleteExpiredDevices",
                  87: "jobs/deleteExpiredPreKeys",
                  88: "jobs/deleteGdprReport",
                  89: "jobs/deleteMsgsFromStorageSetting",
                  90: "jobs/deleteTwoFactor",
                  91: "jobs/demoteGroupParticipants",
                  92: "jobs/downloadMedia",
                  93: "jobs/finalizeCallLog",
                  94: "jobs/forwardMsgs",
                  95: "jobs/getAbout",
                  96: "jobs/gifs",
                  97: "jobs/joinGroupViaInvite",
                  98: "jobs/joinSubGroupRequest",
                  99: "jobs/keepMessagesFromChat",
                  100: "jobs/markChatAsRead",
                  101: "jobs/markGroupAsMessaged",
                  102: "jobs/markKeepInChatNuxSeen",
                  103: "jobs/markPlayed",
                  104: "jobs/markStatusAsSeen",
                  105: "jobs/processFutureProofMsgs",
                  106: "jobs/processPollUpdateOrphans",
                  107: "jobs/promoteGroupParticipants",
                  108: "jobs/queryDirtyInfo",
                  109: "jobs/quickReplyToHsm",
                  110: "jobs/removeDeadMediaContent",
                  111: "jobs/removeGroupParticipants",
                  112: "jobs/reportCommunityHomeSpam",
                  113: "jobs/reportGroupSpam",
                  114: "jobs/reportUserSpam",
                  115: "jobs/requestGdprReport",
                  116: "jobs/requestPreKeyDigest",
                  117: "jobs/requestReupload",
                  118: "jobs/resendWrittenRevokeMsg",
                  119: "jobs/retryMsg",
                  120: "jobs/reuploadMedia",
                  121: "jobs/revokeMsg",
                  122: "jobs/revokeQRCode",
                  123: "jobs/rotateKey",
                  124: "jobs/saveKeyChange",
                  125: "jobs/sendAnonymousMetrics",
                  126: "jobs/sendEphemeralSyncResponse",
                  127: "jobs/sendMediaMsg",
                  128: "jobs/sendMediaMsgs",
                  129: "jobs/sendMetrics",
                  130: "jobs/sendMsg",
                  131: "jobs/sendPollVotes",
                  132: "jobs/sendProfilePushName",
                  133: "jobs/sendReaction",
                  134: "jobs/sendTrustedContactSenderToken",
                  135: "jobs/sendVCardMsg",
                  136: "jobs/sendWrittenMsg",
                  137: "jobs/senderBackfill",
                  138: "jobs/setAbout",
                  139: "jobs/setBlocklistV2",
                  140: "jobs/setGroupAnnouncement",
                  141: "jobs/setGroupDescription",
                  142: "jobs/setGroupEphemeralSetting",
                  143: "jobs/setGroupLocked",
                  144: "jobs/setGroupParticipants",
                  145: "jobs/setGroupSubject",
                  146: "jobs/setMsgBg",
                  147: "jobs/setOneToOneEphemeralSetting",
                  148: "jobs/setTwoFactor",
                  149: "jobs/starMessagesFromChat",
                  150: "jobs/syncUserNoticeState",
                  151: "jobs/tosGating",
                  152: "jobs/updateChatWallpaper",
                  153: "jobs/updateContactPHash",
                  154: "langs/bn-js",
                  155: "langs/en-js",
                  156: "langs/gu-js",
                  157: "langs/hi-js",
                  158: "langs/kn-js",
                  159: "langs/ml-js",
                  160: "langs/mr-js",
                  161: "langs/pa-js",
                  162: "langs/ta-js",
                  163: "langs/te-js",
                  164: "langs/ur-js",
                  166: "migrations",
                  174: "queryBusinessProfile",
                  175: "queryCommunitiesSubGroups",
                  176: "queryQRCode",
                  177: "querySubGroupInfo",
                  180: "vendors/intl-locales-bn-js",
                  181: "vendors/intl-locales-en-js",
                  182: "vendors/intl-locales-gu-js",
                  183: "vendors/intl-locales-hi-js",
                  184: "vendors/intl-locales-kn-js",
                  185: "vendors/intl-locales-ml-js",
                  186: "vendors/intl-locales-mr-js",
                  187: "vendors/intl-locales-pa-js",
                  188: "vendors/intl-locales-ta-js",
                  189: "vendors/intl-locales-te-js",
                  190: "vendors/intl-locales-ur-js",
                  191: "wa-media",
                  192: "webp/backend",
                }[e] || e) +
                ".js"
              );
            })(e));
          var d = new Error();
          s = function (t) {
            (i.onerror = i.onload = null), clearTimeout(l);
            var r = n[e];
            if (0 !== r) {
              if (r) {
                var o = t && ("load" === t.type ? "missing" : t.type),
                  s = t && t.target && t.target.src;
                (d.message =
                  "Loading chunk " + e + " failed.\n(" + o + ": " + s + ")"),
                  (d.name = "ChunkLoadError"),
                  (d.type = o),
                  (d.request = s),
                  r[1](d);
              }
              n[e] = void 0;
            }
          };
          var l = setTimeout(function () {
            s({ type: "timeout", target: i });
          }, 12e4);
          (i.onerror = i.onload = s), document.head.appendChild(i);
        }
      return Promise.all(t);
    }),
      (a.m = e),
      (a.c = o),
      (a.d = function (e, t, r) {
        a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (a.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (a.t = function (e, t) {
        if ((1 & t && (e = a(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (a.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            a.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (a.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return a.d(t, "a", t), t;
      }),
      (a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (a.p = "/"),
      (a.oe = function (e) {
        throw (console.error(e), e);
      });
    var i = (self.webpackJsonp = self.webpackJsonp || []),
      d = i.push.bind(i);
    (i.push = t), (i = i.slice());
    for (var l = 0; l < i.length; l++) t(i[l]);
    var u = d;
    s.push([473, 4, 8, 10, 7, 9, 18, 17]), r();
  })({
    278: function (e, t, r) {
      r.r(t),
        r.d(t, "runOnShutdown", function () {
          return v;
        }),
        r.d(t, "runAfterVoipEviction", function () {
          return h;
        }),
        r.d(t, "shutdown", function () {
          return m;
        });
      var o = r(97),
        n = r(30),
        s = r(127),
        a = r(154),
        i = r(10),
        d = r(6),
        l = r(41),
        u = r(167),
        c = r(5),
        p = r(116),
        b = r(110),
        g = [],
        f = [];
      function v(e) {
        g.push(e);
      }
      function h(e) {
        f.push(e);
      }
      function j(e) {
        e.forEach((e, t) => {
          try {
            e();
          } catch (e) {
            console.error(`WhatsApp ServiceWorker failed to shutdown [${t}]`);
          }
        });
      }
      function m(e, t) {
        console.log("WhatsApp ServiceWorker shutting down");
        var r = Promise.resolve(),
          v = [
            () => {
              t &&
                (r = (function () {
                  var e = (0, u.d)();
                  if (!e)
                    return (
                      console.warn(
                        "WhatsApp ServiceWorker shutdown deferVoipDaemonShutdownIfNeeded forgetDaemonSession returned null"
                      ),
                      Promise.resolve()
                    );
                  var t = (0, p.n)().then(() => {
                    console.log(
                      "WhatsApp ServiceWorker shutdown deferVoipDaemonShutdownIfNeeded wait for eviction completed"
                    );
                  });
                  return (t = (0, b.b)(t, 3e4, () => {
                    console.warn(
                      "WhatsApp ServiceWorker shutdown waitForVoipDaemonEviction completed on timeout"
                    );
                  }))
                    .then(() => e)
                    .then((e) => {
                      e.close();
                    });
                })()),
                r.then(() => {
                  j(f);
                });
            },
            ...g,
            () => (0, n.n)(),
            () => (0, s.closeLogs)(),
            () => (0, a.closeWamStore)(),
            () => (0, i.a)(),
            () => (0, d.W)(),
            () => (0, l.d)(),
            () => (0, o.jobsTable)().close(),
            () => (0, u.b)(),
            () => r.then(e, e),
          ];
        j(v);
        var h = (0, c.g)();
        h.length > 0 &&
          console.error(
            `WhatsApp ServiceWorker dangling tables: [${h.join(", ")}]`
          ),
          (0, c.a)();
      }
    },
    473: function (e, t, r) {
      r.r(t);
      var o,
        n = r(12),
        s = Math.floor(Date.now() / 1e3),
        a = !1,
        i = !1;
      function d(e, t, i) {
        if (o) return o;
        (self.Promise = r(415).default),
          (self.onerror = function (e, t, n) {
            a ||
              (r(127).crashlog("onerror", e),
              __LOG__(4)`filename: ${t} lineno: ${n}`,
              o.then((e) => {
                e.bridge.fireAndForget("basic", "sendLogs", { manual: !1 });
              }));
          }),
          (self.onunhandledrejection = function (e) {
            if (!a) {
              e.preventDefault();
              var t = e.reason,
                n = e.promise;
              self.ERROR && t && "QuotaExceededError" === t.name
                ? (__LOG__(4)`Unhandled dexie promise rejection: ${e}`,
                  r(127).crashlog("dexie rejected", String(t)))
                : (r(127).crashlog("rejected", t),
                  __LOG__(4)`### begin stack trace ${"2.2245.7"}\n${
                    null == t ? void 0 : t.stack
                  }`,
                  __LOG__(4)`### end stack trace`,
                  __LOG__(4)`promise: ${n}`),
                (function (e) {
                  o.then(
                    (t) => {
                      var r = t.bridge;
                      "QuotaExceededError" === (null == e ? void 0 : e.name) &&
                        r.fireAndForget("event", "ranOutOfStorage", {}),
                        a
                          ? __LOG__(
                              4
                            )`Tried to send logs for an unhandled rejection, but the worker was shutting down`
                          : r.fireAndForget("basic", "sendLogs", {
                              manual: !1,
                            });
                    },
                    () => {
                      __LOG__(
                        4
                      )`Tried to handle unhandled rejection, but the startup promise has been rejected`;
                    }
                  );
                })(t);
            }
          });
        var d = r(127);
        if (
          (d.initializeLogger(e, (e) => {
            o.then((e) => {
              e.bridge.fireAndForget("basic", "sendLogs", { manual: !1 });
            });
          }),
          n.i(b),
          Date.now() >= 1678751999e3)
        )
          throw (
            (__LOG__(4)`Worker ${s} expired!`,
            (self.SwEventHandlers = {}),
            new Error("build expired!"))
          );
        var l = r(190);
        self.WAM = l;
        var u = r(154);
        return (
          u.startWamStore(),
          u.submitInitialAttributes(),
          r(417).startAbPropsStore(),
          __LOG__(2)`Backend::startUp`,
          (o = Promise.resolve()
            .then(() => {
              var e = r(253);
              return r(210)
                .loadInfoStore()
                .then((t) =>
                  Promise.all([e.initLanguage(t.lang), e.initPolyfill()]).then(
                    () => t
                  )
                );
            })
            .then((e) => {
              var o = e.appMode,
                n = e.appBuild;
              return (t ? t(o, n) : Promise.resolve()).then(
                () => (
                  d.initializeLogsTable(),
                  r(481)
                    .startInWorkerBackend(o, i)
                    .then((e) => ({ bridge: e, appMode: o }))
                )
              );
            })).then(
            () => {
              __LOG__(2)`Backend Started!`;
            },
            (e) => {
              __LOG__(4)`Backend errored ${e.stack}\n${o.toString()}`;
            }
          ),
          o
        );
      }
      var l,
        u = !1,
        c = new Promise((e) => {
          l = e;
        }),
        p = null;
      function b() {
        a ||
          (p && (clearTimeout(p), (p = null)), (a = !0), r(278).shutdown(l, i));
      }
      function g(e) {
        a || (null != p && clearTimeout(p), (p = setTimeout(b, e)));
      }
      var f = null;
      function v(e) {
        if (null != f) return f;
        n.h(!1),
          n.g(() => {
            g(6e4);
          }),
          d(
            "SW",
            (e, t) =>
              "2.2245.7" !== t
                ? Promise.all([r.e(4), r.e(8), r.e(166)])
                    .then(r.bind(null, 458))
                    .then((t) => t.initializeMigrations("SW", e))
                    .then((e) => {
                      if ("migration-needed" === e.type) return e.migration();
                    })
                : Promise.resolve(),
            !1
          ),
          e && r(278).runOnShutdown(e);
        var t = o.then((e) => {
          var t = e.bridge;
          if ("reg" === e.appMode.mode) r(483).onRegPush(t);
          else {
            var o,
              n = r(210).DEVICE_INFO.get(),
              s = r(210).SERVER_PROPS.get(),
              a = r(210).AB_PROPS.get(),
              i = a.abKey,
              d = a.expoKeyStr;
            null != i && null != d && (o = d),
              WAM.logAttributes([
                ["regular", "private"],
                15,
                2,
                n.osVersion,
                ["regular", "private"],
                13,
                2,
                n.device,
                ["regular", "private"],
                5,
                0,
                parseInt(n.mcc, 10),
                ["regular", "private"],
                3,
                0,
                parseInt(n.mnc, 10),
                ["regular"],
                2141,
                2,
                s.abKey,
                ["regular"],
                4473,
                2,
                i,
                ["regular", "private"],
                5029,
                2,
                o,
              ]),
              r(482).attachHeadlessHandlers(t);
          }
          return g(6e4), c;
        });
        return (f = { bridge: o, pushFinished: t });
      }
      self.SwEventHandlers = {
        "bridge-channel"(e) {
          if (!o) {
            var t = e.data,
              s = e.ports,
              a = t.deviceInfo,
              i = t.hasWifi,
              l = t.shouldStartVoip;
            n.h(!0),
              d("BACK", null, l),
              __LOG__(2)`Backend establishing channel`;
            var u = s[0];
            o.then((e) => {
              var t = e.bridge;
              r(210).DEVICE_INFO.set(a);
              var o,
                n = r(210).SERVER_PROPS.get(),
                s = r(210).AB_PROPS.get(),
                d = s.abKey,
                l = s.expoKeyStr;
              null != d && null != l && (o = l),
                WAM.logAttributes([
                  ["regular"],
                  23,
                  1,
                  i,
                  ["regular"],
                  105,
                  0,
                  i ? 1 : a.carrier.radioType,
                  ["regular", "private"],
                  15,
                  2,
                  a.os.version,
                  ["regular", "private"],
                  13,
                  2,
                  a.device,
                  ["regular", "private"],
                  5,
                  0,
                  parseInt(a.carrier.mcc, 10),
                  ["regular", "private"],
                  3,
                  0,
                  parseInt(a.carrier.mnc, 10),
                  ["regular"],
                  2141,
                  2,
                  n.abKey,
                  ["regular"],
                  4473,
                  2,
                  d,
                  ["regular", "private"],
                  5029,
                  2,
                  o,
                ]),
                u.postMessage({ type: "bridge-channel-ready" });
              var c = r(145),
                p = c.attachBatchedPortal(t, [
                  "page",
                  "event",
                  "regPage",
                  "debug",
                ]);
              c.warnOnMissingHandlers(t),
                __LOG__(2)`Backend bridge is ready`,
                p.setPort(u);
            });
          }
        },
        onPush(e) {
          if (!u) return (u = !0), v(e).pushFinished;
        },
        onCallRejected() {
          var e = v();
          return (
            e.bridge.then((e) => {
              e.bridge.fireAndForget("voip", "rejectVoipCall", {});
            }),
            e.pushFinished
          );
        },
        onCallAccepted() {
          f
            ? (__LOG__(2)`Backend in incoming call`, (i = !0))
            : console.error(
                "WhatsApp accept call notification went to new ServiceWorker"
              );
        },
      };
    },
    482: function (e, t, r) {
      r.r(t),
        r.d(t, "attachHeadlessHandlers", function () {
          return w;
        });
      var o = r(8),
        n = r.n(o),
        s = r(124),
        a = r(332),
        i = r(45),
        d = r(21),
        l = r(64),
        u = r(44),
        c = r(67),
        p = r(70),
        b = "/icons/call-notif-avatar.svg",
        g = r(220),
        f = r(205),
        v = r(6),
        h = r(146),
        j = r(89),
        m = r(145),
        _ = r(278),
        S = r(334),
        M = r(116),
        k = r(12),
        y = r(221),
        C = r(22),
        R = r(199);
      function w(e) {
        var t = e,
          r = null;
        function o() {}
        var w = {
          finishedBooting: o,
          chatModified: o,
          chatAdded: o,
          contactsModified: o,
          msgAcked: o,
          mediaUpdated: o,
          msgMediaStatusUpdated: o,
          chatRead: o,
          fullsizeAvatarLoaded: o,
          avatarsUpdated: o,
          clearUserLastSeen: o,
          receiveChatState: o,
          receivePresence: o,
          blockList: o,
          clockSkewUpdated: o,
          serverPropsUpdated: o,
          msgsDeleted: o,
          msgsDeletedFromManyChats: o,
          chatDeleted: o,
          kicked() {
            (0, k.j)();
          },
          profilePicReceived() {
            throw new j.a("profilePicReceived");
          },
          ranOutOfStorage: o,
          voipSetupDone: o,
          gdprReportUpdated: o,
          gdprReportDownloaded: o,
          gdprReportDownloading: o,
          twoFactorReminderVerified: o,
          openChatWithGroup: o,
          groupInvitesRevoked: o,
          groupInviteCode: o,
          groupInviteCodeReset: o,
          callMuteStateChanged: o,
          callInterruptedStateChanged: o,
          callOfferNacked: o,
          callDurationChanged: o,
          callEnded: o,
          voipServiceDisconnected: o,
          callBusyReceived: o,
          callLogsUpdated: o,
          voipCallFailed: o,
          statusAuthorsLoaded: o,
          statusAuthorMeUpdated: o,
          statusAuthorsCleared: o,
          statusReceiptsUpdated: o,
          statusAuthorUpdated: o,
          statusAuthorsUpdated: o,
          statusMsgsUpdated: o,
          statusMsgRemoved: o,
          aboutUpdated: o,
          identityVerificationChanged: o,
          voipStatusChanged: o,
          hsmButtonPressed: o,
          statusSettingsUpdated: o,
          statusLastUnreadMsgLoaded: o,
          uiJobsInitialized: o,
          uiJobUpdated: o,
          uiJobScheduled: o,
          uiJobCleared: o,
          uiEphemeralTimestamp: o,
          refreshRecentGifs: o,
          addFavoriteGifs: o,
          removeFavoriteGif: o,
          viewOnceExpired: o,
          syncAbCacheFromStorage: o,
          pinAbProp: o,
          tosGatingStatusChanged: o,
          companionsLoaded: o,
          companionRegistrationFailed: o,
          trustedContactTokenUpdatedForJid: o,
          pastParticipantsUpdated: o,
          callStateChanged(t) {
            var o = t.state,
              s = t.peerJid;
            if (
              !t.isCaller &&
              ((function (e, t) {
                var r;
                "incoming" === e
                  ? Promise.all([
                      (0, c.b)(t),
                      ((r = t),
                      (0, p.getProfilePicTable)()
                        .getThumb(r)
                        .then((e) => {
                          var t = null == e ? void 0 : e.image;
                          return null != t
                            ? (function (e) {
                                return new Promise((t, r) => {
                                  var o = new FileReader();
                                  (o.onerror = () =>
                                    r(
                                      "blobToDataUrl error while reading blob as DataURL"
                                    )),
                                    (o.onload = () => {
                                      var e = o.result;
                                      "string" == typeof e
                                        ? t(e)
                                        : r(
                                            "blobToDataUrl after onload, result is not a string"
                                          );
                                    }),
                                    o.readAsDataURL(e);
                                });
                              })(t).catch(() => b)
                            : b;
                        })),
                    ]).then((e) => {
                      var r = n()(e, 2),
                        o = r[0],
                        s = r[1],
                        a = null != o ? (0, u.a)(o) : null;
                      (function (e, t, r) {
                        (0, i.r)(e, {
                          body: (0, d.k)(90),
                          requireInteraction: !0,
                          actions: [
                            { action: "accept", title: (0, d.k)(78) },
                            { action: "reject", title: (0, d.k)(105) },
                          ],
                          data: { action: i.c, jid: r },
                          tag: i.d,
                          image: t,
                          mozbehavior: {
                            soundFile: "default_dialer_ringtone",
                            vibrationPattern: [750, 1500],
                            loopControl: {
                              sound: !0,
                              soundMaxDuration: 45e3,
                              vibration: !0,
                              vibrationMaxDuration: 45e3,
                            },
                          },
                        });
                      })(null != a ? a : (0, l.d)(t), s, t);
                    })
                  : "none" === e &&
                    (0, i.o)(i.c, i.d).then((e) => e.forEach((e) => e.close()));
              })(o, s),
              null == r)
            ) {
              var a = new S.a("wa-bridge");
              (r = a),
                (0, _.runOnShutdown)(() => {
                  __LOG__(2)`Removing handler from wa-bridge BroadcastChannel`,
                    r && r.silenceChannel();
                }),
                (0, _.runAfterVoipEviction)(() => {
                  console.log("Closing wa-bridge BroadcastChannel"),
                    r && (r.close(), (r = null));
                }),
                (a.onmessage = (t) => {
                  r &&
                    "connect-page-to-sw" === t.data &&
                    (r.startMonitoring({
                      onTimeout: () => {
                        __LOG__(2)`Channel to the page lost, ending the call`,
                          (0, M.b)(!0),
                          r && (r.close(), (r = null)),
                          e.setHandlers("event", w);
                      },
                    }),
                    (0, m.attachBatchedPortal)(e, ["event"]).setPort(a));
                });
            }
          },
          callMissed(e) {
            var t = e.peerJid,
              r = e.id;
            (0, c.b)(t).then((e) =>
              (0, g.b)(null != e ? e : { jid: t }, r, "alert")
            );
          },
          msgBgUpdated: o,
          reactionReceived: o,
          notifyNewReaction(e) {
            var t = e.msg,
              r = e.reaction;
            Promise.all([(0, c.c)(), (0, C.y)(t.chatId)]).then((e) => {
              var o = n()(e, 2),
                s = o[0],
                a = o[1];
              a &&
                (0, y.c)(r, t, a, (0, u.e)(s), (0, h.f)(), v.k.get(), "alert");
            });
          },
          msgsReceived(e) {
            var r = e.affectedChats,
              o = e.newMsgs,
              n = e.changedMsgs;
            (0, c.c)().then((e) => {
              self.registration ||
                __LOG__(
                  4
                )`self.registration is not available within the HeadlessApi`,
                (0, s.a)({
                  affectedChats: r,
                  newMsgs: o,
                  changedMsgs: n,
                  settings: v.k.get(),
                  contacts: (0, u.e)(e),
                  type: "alert",
                  user: (0, h.f)(),
                  fireAndForget: t.fireAndForget,
                });
            });
          },
          gdprReportReadyReceived() {
            (0, a.a)("alert");
          },
          commsConnected: o,
          commsDisconnected: o,
          votesNotSent: o,
          notifyMessageKept: (e) => {
            var t = e.msg;
            (0, c.c)().then((e) => {
              (0, R.b)(t, (0, u.e)(e), (0, h.f)());
            });
          },
        };
        e.setHandlers("event", w),
          e.setNamespaceHandler("page", (e, t, r) => {
            var o;
            switch (e) {
              case "getPushEndpoint":
                o = (0, f.a)();
                break;
              case "getNetworkInfo":
                o = { isWifiConnected: !1, isRoaming: !1 };
                break;
              case "reload":
                (0, k.j)();
                break;
              default:
                throw new j.a(e);
            }
            r && r(o);
          }),
          (0, m.warnOnMissingHandlers)(e);
      }
    },
    483: function (e, t, r) {
      r.r(t),
        r.d(t, "onRegPush", function () {
          return i;
        });
      var o = r(344),
        n = r(174),
        s = r(21),
        a = r(45);
      function i(e) {
        var t = new o.a(e, () => Promise.resolve());
        t.getStoreInStates2(["BAN_APPEAL", "BLOCKED_BAN_APPEAL"]) &&
          (0, n.b)(t).then((e) => {
            var t, r;
            e &&
              ((t = (0, s.k)(56)),
              (r = { body: (0, s.k)(55), data: { action: a.a }, tag: a.b }),
              (0, a.r)(t, r));
          });
      }
      r(37);
    },
  });
